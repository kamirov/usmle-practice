#!/usr/bin/env python3
"""Fix placeholder 'Clinical or pathologic image illustrating...' captions.

For each item with a default caption:
1. Use Description from SOURCES.txt if present
2. Fetch Wikimedia ImageDescription via page URL or manifest title
3. For fake SVGs or unusable images, download a replacement from Wikimedia
4. Merge captions into PRESERVE_CAPTIONS in generate-media-mappings.py
5. Regenerate media TypeScript files
"""
from __future__ import annotations

import html
import importlib.util
import json
import os
import re
import subprocess
import time
import urllib.parse
import urllib.request

ROOT = os.path.join(os.path.dirname(__file__), "..")
DATA = os.path.join(ROOT, "src", "data")
IMAGES = os.path.join(ROOT, "src", "media", "images")
MANIFEST_PATH = os.path.join(ROOT, "src", "media", "download-manifest.json")
GENERATE_SCRIPT = os.path.join(os.path.dirname(__file__), "generate-media-mappings.py")
UA = "usmle-practice-media/3.0 (fix-placeholder-captions)"
DELAY = 1.5
BAD_TITLE_RE = re.compile(
    r"(?:\.pdf|\.djvu|\.ogv|annual report|quick reference guide|IA [a-z0-9]+\))",
    re.I,
)

CAT_MAP = {
    "conditionsMedia.ts": "conditions",
    "cellsMedia.ts": "cells",
    "symptomMedia.ts": "symptoms",
    "musculoskeletalMedia.ts": "musculoskeletal",
}

PLACEHOLDER_RE = re.compile(
    r'"([^"]+)": "Clinical or pathologic image illustrating ([^"]+)"'
)

ID_ALIASES: dict[str, str] = {
    "conditions/dengue-recovery-rash.jpg": "dengue-fever",
    "conditions/chikungunya-rash.jpg": "chikungunya-fever",
    "conditions/rocky-mountain-spotted-fever-rash.jpg": "rocky-mountain-spotted-fever",
    "conditions/typhoid-fever-rose-spots.jpg": "typhoid-fever",
    "conditions/molar-pregnancy-ultrasound.jpg": "hydatidiform-mole",
    "conditions/ovarian-dermoid-cyst-histology.jpg": "teratoma",
    "conditions/ragged-red-fibers-gomori.jpg": "mitochondrial-encephalomyopathy",
    "conditions/meninges-diagram.svg": "meningitis",
    "conditions/uterine-fibroids.png": "uterine-fibroid",
    "conditions/tetralogy-of-fallot-cyanosis.jpg": "tetralogy-of-fallot",
    "cells/b-lymphocyte-blausen.png": "naive-b-lymphocyte",
    "cells/immunological-memory.png": "memory-t-lymphocyte",
    "cells/mitochondrial-respiratory-chain.svg": "oxidative-phosphorylation",
    "musculoskeletal/sarcomere-diagram.svg": "sarcomere",
}

# category/entry_id -> Wikimedia search query (fake SVGs and bad images)
REPLACE_QUERIES: dict[str, str] = {
    "conditions/adjustment-disorder": "stress adjustment disorder patient",
    "conditions/avascular-necrosis": "avascular necrosis femoral head xray",
    "conditions/glaucoma": "glaucoma optic disc cupping",
    "conditions/neuromyelitis-optica": "neuromyelitis optica spinal cord MRI",
    "conditions/psychotic-mood-disorder": "schizoaffective disorder psychosis",
    "cells/immunosuppression": "immunosuppression transplant rejection histology",
    "symptoms/insomnia": "insomnia sleeplessness",
    "symptoms/internuclear-ophthalmoplegia": "internuclear ophthalmoplegia MLF",
    "symptoms/mania": "mania bipolar elevated mood",
    "symptoms/moon-facies": "cushing syndrome moon facies",
    "symptoms/nystagmus": "nystagmus eye oscillation",
    "symptoms/ophthalmoplegia": "ophthalmoplegia cranial nerve palsy",
    "symptoms/vertigo": "benign paroxysmal positional vertigo dix hallpike",
}


def load_rfm():
    spec = importlib.util.spec_from_file_location(
        "rfm", os.path.join(os.path.dirname(__file__), "replace-fake-media.py")
    )
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def api_get(url: str) -> dict:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=90) as r:
        return json.load(r)


def parse_sources(category: str) -> dict[str, dict[str, str | None]]:
    """Return filename -> {url, description, attribution}."""
    path = os.path.join(IMAGES, category, "SOURCES.txt")
    if not os.path.exists(path):
        return {}
    text = open(path, encoding="utf-8").read()
    entries: dict[str, dict[str, str | None]] = {}
    fname_re = re.compile(
        r"^(?!https?://)[a-zA-Z0-9][^\n/]*\.(?:jpg|jpeg|png|svg)\s*$", re.M
    )

    starts = [m.start() for m in fname_re.finditer(text)]
    for i, start in enumerate(starts):
        end = starts[i + 1] if i + 1 < len(starts) else len(text)
        block = text[start:end].strip()
        lines = block.split("\n")
        fname = lines[0].strip()
        url = None
        desc = None
        attr_lines: list[str] = []
        for line in lines[1:]:
            stripped = line.strip()
            if not stripped:
                continue
            if stripped.startswith("http"):
                url = url or stripped
            elif stripped.startswith("Page:") and "wikimedia.org" in stripped:
                url = url or stripped.split("Page:", 1)[1].strip()
            elif stripped.startswith("Reference:") and "wikimedia.org" in stripped:
                url = url or stripped.split("Reference:", 1)[1].strip()
            elif stripped.startswith("Description:"):
                desc = stripped.split("Description:", 1)[1].strip()
            elif not stripped.startswith(("Source:", "Download:", "Reference:", "Author:", "License:", "Resized")):
                attr_lines.append(stripped)
        entries[fname] = {
            "url": url,
            "description": desc,
            "attribution": "\n".join(attr_lines) if attr_lines else None,
        }
    return entries


def find_image(category: str, entry_id: str) -> str | None:
    folder = os.path.join(IMAGES, category)
    if not os.path.isdir(folder):
        return None
    for fname in os.listdir(folder):
        if fname == "SOURCES.txt":
            continue
        rel = f"{category}/{fname}"
        eid = ID_ALIASES.get(rel, os.path.splitext(fname)[0])
        if eid == entry_id:
            return fname
    return None


def title_from_url(url: str) -> str | None:
    m = re.search(r"/wiki/File:(.+)$", url)
    if not m:
        return None
    return "File:" + urllib.parse.unquote(m.group(1))


def clean_wikimedia_title(title: str) -> str:
    t = title.replace("File:", "")
    t = re.sub(r"\.(jpe?g|png|svg|webp|gif|tif{1,2})$", "", t, flags=re.I)
    t = t.replace("_", " ")
    t = re.sub(r"\s*\([^)]*\)\s*$", "", t).strip()
    return t


def fetch_image_description(title: str) -> str | None:
    if not title.startswith("File:"):
        title = "File:" + title
    q = urllib.parse.urlencode(
        {
            "action": "query",
            "titles": title,
            "prop": "imageinfo",
            "iiprop": "extmetadata",
            "format": "json",
        }
    )
    try:
        data = api_get(f"https://commons.wikimedia.org/w/api.php?{q}")
    except Exception as e:
        print(f"  API error for {title}: {e}")
        return None
    for page in data.get("query", {}).get("pages", {}).values():
        if "missing" in page:
            continue
        for info in page.get("imageinfo", []):
            meta = info.get("extmetadata", {})
            for key in ("ImageDescription", "ObjectName"):
                if key in meta and meta[key].get("value"):
                    raw = html.unescape(meta[key]["value"])
                    raw = re.sub(r"<[^>]+>", "", raw)
                    raw = re.sub(r"\s+", " ", raw).strip()
                    if raw and len(raw) > 10:
                        return raw[:300]
    return None


def search_and_download(query: str, dest_rel: str, rfm) -> tuple[str | None, str | None]:
    """Return (caption, wikimedia_page_url) or (None, None)."""
    candidates = rfm.search_candidates(query)
    for title in candidates:
        data = rfm.download_title(title)
        if not data:
            continue
        dest = os.path.join(IMAGES, dest_rel)
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        with open(dest, "wb") as f:
            f.write(data)
        page = f"https://commons.wikimedia.org/wiki/{urllib.parse.quote(title.replace(' ', '_'), safe=':/')}"
        cap = fetch_image_description(title)
        if not cap:
            cap = clean_wikimedia_title(title)
        time.sleep(DELAY)
        return cap, page
    return None, None


def update_sources_description(
    category: str, fname: str, description: str, page_url: str | None = None
) -> None:
    path = os.path.join(IMAGES, category, "SOURCES.txt")
    if not os.path.exists(path):
        return
    text = open(path, encoding="utf-8").read()
    pattern = re.compile(
        rf"({re.escape(fname)}\n(?:.*\n)*?)(?=\n[a-zA-Z0-9][^\n]*\.(?:jpg|jpeg|png|svg)\s*$|\Z)",
        re.MULTILINE,
    )
    m = pattern.search(text)
    if not m:
        return
    block = m.group(1)
    if "Description:" in block:
        new_block = re.sub(
            r"Description:.*",
            f"Description: {description}",
            block,
        )
    else:
        new_block = block.rstrip() + f"\nDescription: {description}\n"
    text = text[: m.start(1)] + new_block + text[m.end(1) :]
    open(path, "w", encoding="utf-8").write(text)


def collect_placeholders() -> list[tuple[str, str]]:
    items: list[tuple[str, str]] = []
    for mf, category in CAT_MAP.items():
        content = open(os.path.join(DATA, mf), encoding="utf-8").read()
        for entry_id, _ in PLACEHOLDER_RE.findall(content):
            items.append((category, entry_id))
    return items


def load_manifest() -> dict:
    if os.path.exists(MANIFEST_PATH):
        with open(MANIFEST_PATH) as f:
            return json.load(f)
    return {}


def save_manifest(manifest: dict) -> None:
    with open(MANIFEST_PATH, "w") as f:
        json.dump(manifest, f, indent=2, sort_keys=True)
        f.write("\n")


def update_preserve_captions(new_captions: dict[str, dict[str, str]]) -> None:
    path = GENERATE_SCRIPT
    text = open(path, encoding="utf-8").read()
    m = re.search(
        r"PRESERVE_CAPTIONS: dict\[str, dict\[str, str\]\] = \{.*?\n\}\n",
        text,
        re.DOTALL,
    )
    if not m:
        raise RuntimeError("Could not find PRESERVE_CAPTIONS in generate-media-mappings.py")

    spec = importlib.util.spec_from_file_location("gmm", GENERATE_SCRIPT)
    gmm = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(gmm)
    existing: dict[str, dict[str, str]] = {
        cat: dict(caps) for cat, caps in gmm.PRESERVE_CAPTIONS.items()
    }
    for category, caps in new_captions.items():
        if category not in existing:
            existing[category] = {}
        existing[category].update(caps)

    lines = ["PRESERVE_CAPTIONS: dict[str, dict[str, str]] = {"]
    for cat in sorted(existing.keys()):
        lines.append(f'    "{cat}": {{')
        for eid in sorted(existing[cat].keys()):
            cap = existing[cat][eid].replace("\\", "\\\\").replace('"', '\\"')
            lines.append(f'        "{eid}": "{cap}",')
        lines.append("    },")
    lines.append("}")
    new_block = "\n".join(lines) + "\n"
    text = text[: m.start()] + new_block + text[m.end() :]
    open(path, "w", encoding="utf-8").write(text)


def main() -> None:
    rfm = load_rfm()
    manifest = load_manifest()
    placeholders = collect_placeholders()
    print(f"Found {len(placeholders)} placeholder captions")

    new_captions: dict[str, dict[str, str]] = {}
    needs_api: list[tuple[str, str, str, str | None, str | None]] = []
    needs_replace: list[tuple[str, str, str]] = []

    for category, entry_id in placeholders:
        fname = find_image(category, entry_id)
        if not fname:
            print(f"  SKIP (no image): {category}/{entry_id}")
            continue
        rel = f"{category}/{fname}"
        path = os.path.join(IMAGES, category, fname)
        sources = parse_sources(category)
        src = sources.get(fname, {})
        desc = src.get("description")
        page_url = src.get("url")
        mtitle = manifest.get(rel, {}).get("title")

        if desc:
            new_captions.setdefault(category, {})[entry_id] = desc
            continue

        # Fake SVG or bad file -> replace image
        is_fake = fname.endswith(".svg") and rfm.is_fake(path)
        bad_manifest = mtitle and BAD_TITLE_RE.search(mtitle)
        replace_key = f"{category}/{entry_id}"
        if is_fake or bad_manifest or replace_key in REPLACE_QUERIES:
            needs_replace.append((category, entry_id, fname))
            continue

        if page_url:
            needs_api.append((category, entry_id, fname, title_from_url(page_url), None))
        elif mtitle:
            needs_api.append((category, entry_id, fname, mtitle, None))
        else:
            needs_replace.append((category, entry_id, fname))

    print(f"From SOURCES.txt descriptions: {sum(len(v) for v in new_captions.values())}")
    print(f"Need Wikimedia API: {len(needs_api)}")
    print(f"Need image replace: {len(needs_replace)}")

    # Fetch Wikimedia descriptions
    for i, (category, entry_id, fname, title, _) in enumerate(needs_api):
        print(f"API [{i+1}/{len(needs_api)}] {category}/{entry_id}")
        cap = fetch_image_description(title) if title else None
        if cap and not BAD_TITLE_RE.search(cap):
            new_captions.setdefault(category, {})[entry_id] = cap
            update_sources_description(category, fname, cap)
        else:
            cleaned = clean_wikimedia_title(title or "")
            if cleaned and len(cleaned) > 8 and not BAD_TITLE_RE.search(cleaned):
                new_captions.setdefault(category, {})[entry_id] = cleaned
                update_sources_description(category, fname, cleaned)
            else:
                needs_replace.append((category, entry_id, fname))
        time.sleep(DELAY)

    # Replace bad images
    for i, (category, entry_id, fname) in enumerate(needs_replace):
        key = f"{category}/{entry_id}"
        query = REPLACE_QUERIES.get(key) or entry_id.replace("-", " ")
        dest_rel = f"{category}/{fname}"
        print(f"REPLACE [{i+1}/{len(needs_replace)}] {key} -> query: {query!r}")
        cap, page = search_and_download(query, dest_rel, rfm)
        if cap:
            new_captions.setdefault(category, {})[entry_id] = cap
            update_sources_description(category, fname, cap, page)
            if page:
                manifest[dest_rel] = {
                    "title": f"File:{fname}",
                    "page": page,
                    "query": query,
                }
        else:
            # Last resort: human-readable from entry id
            fallback = entry_id.replace("-", " ").title()
            new_captions.setdefault(category, {})[entry_id] = fallback
            print(f"  WARN: used fallback caption for {key}")
        time.sleep(DELAY)

    total = sum(len(v) for v in new_captions.values())
    print(f"\nUpdating PRESERVE_CAPTIONS with {total} captions")
    update_preserve_captions(new_captions)
    save_manifest(manifest)

    print("Regenerating media TypeScript files...")
    subprocess.run(["python3", GENERATE_SCRIPT], check=True)

    # Verify
    remaining = 0
    for mf in CAT_MAP:
        remaining += len(PLACEHOLDER_RE.findall(open(os.path.join(DATA, mf)).read()))
    print(f"Remaining placeholder captions: {remaining}")


if __name__ == "__main__":
    main()
