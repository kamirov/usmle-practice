#!/usr/bin/env python3
"""Fix placeholder captions without Wikimedia API rate limits.

Caption priority:
1. Description in SOURCES.txt
2. Cleaned Wikimedia filename from Page/Reference URL in SOURCES.txt
3. Cleaned title from download-manifest.json
4. Formatted entry id (last resort)

Images flagged for replacement (fake SVG, PDF source, known bad files) are
written to scripts/media-replace-queue.json for fetch-replacements.py.
"""
from __future__ import annotations

import importlib.util
import json
import os
import re
import subprocess
import urllib.parse

ROOT = os.path.join(os.path.dirname(__file__), "..")
DATA = os.path.join(ROOT, "src", "data")
IMAGES = os.path.join(ROOT, "src", "media", "images")
MANIFEST_PATH = os.path.join(ROOT, "src", "media", "download-manifest.json")
GENERATE_SCRIPT = os.path.join(os.path.dirname(__file__), "generate-media-mappings.py")
CAPTIONS_CACHE = os.path.join(os.path.dirname(__file__), "caption-cache.json")
REPLACE_QUEUE = os.path.join(os.path.dirname(__file__), "media-replace-queue.json")

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

BAD_TITLE_RE = re.compile(
    r"(?:\.pdf|\.djvu|\.ogv|annual report|quick reference guide|IA [a-z0-9]+\))",
    re.I,
)

# entry_id -> search query for clearly wrong / placeholder images
REPLACE_QUERIES: dict[str, str] = {
    "conditions/cataracts": "cataract eye lens opacity clinical",
    "conditions/adjustment-disorder": "stress adjustment disorder patient",
    "conditions/avascular-necrosis": "avascular necrosis femoral head xray",
    "conditions/glaucoma": "glaucoma optic disc cupping",
    "conditions/neuromyelitis-optica": "neuromyelitis optica spinal cord MRI",
    "conditions/psychotic-mood-disorder": "schizoaffective disorder psychosis",
    "conditions/juvenile-parkinsonism": "juvenile parkinsonism",
    "cells/immunosuppression": "immunosuppression transplant rejection histology",
    "symptoms/dysuria": "dysuria urinary symptoms",
    "symptoms/fecal-impaction": "fecal impaction rectum xray",
    "symptoms/fecaloma": "fecaloma abdominal xray",
    "symptoms/insomnia": "insomnia sleeplessness",
    "symptoms/internuclear-ophthalmoplegia": "internuclear ophthalmoplegia MLF",
    "symptoms/mania": "mania bipolar elevated mood",
    "symptoms/moon-facies": "cushing syndrome moon facies",
    "symptoms/nystagmus": "nystagmus eye oscillation",
    "symptoms/ophthalmoplegia": "ophthalmoplegia cranial nerve palsy",
    "symptoms/polyuria": "polyuria diabetes mellitus",
    "symptoms/polydipsia": "polydipsia thirst water",
    "symptoms/polyuria-polydipsia": "polyuria polydipsia diabetes",
    "symptoms/vertigo": "benign paroxysmal positional vertigo",
}


def load_rfm():
    spec = importlib.util.spec_from_file_location(
        "rfm", os.path.join(os.path.dirname(__file__), "replace-fake-media.py")
    )
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def parse_sources(category: str) -> dict[str, dict[str, str | None]]:
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
        entries[fname] = {"url": url, "description": desc}
    return entries


def find_image(category: str, entry_id: str) -> str | None:
    folder = os.path.join(IMAGES, category)
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
    return urllib.parse.unquote(m.group(1))


def clean_wikimedia_title(title: str) -> str:
    t = title.replace("File:", "")
    t = re.sub(r"\.(jpe?g|png|svg|webp|gif|tif{1,2})$", "", t, flags=re.I)
    t = t.replace("_", " ")
    t = re.sub(r"\s*PHIL\s*\d+.*$", "", t, flags=re.I)
    t = re.sub(r"\s*\(\d+\).*$", "", t)
    t = re.sub(r"\s*-\s*(low|high|very high)\s*mag.*$", "", t, flags=re.I)
    t = re.sub(r"\s*\([^)]*\)\s*$", "", t).strip()
    t = re.sub(r"\s+", " ", t)
    return t


def format_entry_id(entry_id: str) -> str:
    return entry_id.replace("-", " ").title()


def is_bad_image(
    category: str,
    entry_id: str,
    fname: str,
    page_url: str | None,
    mtitle: str | None,
    rfm,
) -> bool:
    path = os.path.join(IMAGES, category, fname)
    key = f"{category}/{entry_id}"
    if key in REPLACE_QUERIES or entry_id in REPLACE_QUERIES:
        return True
    if fname.endswith(".svg") and rfm.is_fake(path):
        return True
    if mtitle and BAD_TITLE_RE.search(mtitle):
        return True
    if page_url and BAD_TITLE_RE.search(page_url):
        return True
    # Known nonsense matches
    if page_url:
        lower = page_url.lower()
        nonsense = [
            "airbus", "bombax", "cat anatomy", "horse", "abyssuridae",
            "journal of nervous", "medical communications",
        ]
        if any(n in lower for n in nonsense):
            return True
    return False


def collect_placeholders() -> list[tuple[str, str]]:
    items: list[tuple[str, str]] = []
    for mf, category in CAT_MAP.items():
        content = open(os.path.join(DATA, mf), encoding="utf-8").read()
        for entry_id, _ in PLACEHOLDER_RE.findall(content):
            items.append((category, entry_id))
    return items


def update_preserve_captions(new_captions: dict[str, dict[str, str]]) -> None:
    path = GENERATE_SCRIPT
    text = open(path, encoding="utf-8").read()
    m = re.search(
        r"PRESERVE_CAPTIONS: dict\[str, dict\[str, str\]\] = \{.*?\n\}\n",
        text,
        re.DOTALL,
    )
    if not m:
        raise RuntimeError("Could not find PRESERVE_CAPTIONS")

    spec = importlib.util.spec_from_file_location("gmm", GENERATE_SCRIPT)
    gmm = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(gmm)
    existing: dict[str, dict[str, str]] = {
        cat: dict(caps) for cat, caps in gmm.PRESERVE_CAPTIONS.items()
    }
    for category, caps in new_captions.items():
        existing.setdefault(category, {}).update(caps)

    lines = ["PRESERVE_CAPTIONS: dict[str, dict[str, str]] = {"]
    for cat in sorted(existing.keys()):
        lines.append(f'    "{cat}": {{')
        for eid in sorted(existing[cat].keys()):
            cap = existing[cat][eid].replace("\\", "\\\\").replace('"', '\\"')
            lines.append(f'        "{eid}": "{cap}",')
        lines.append("    },")
    lines.append("}")
    text = text[: m.start()] + "\n".join(lines) + "\n" + text[m.end() :]
    open(path, "w", encoding="utf-8").write(text)


def main() -> None:
    rfm = load_rfm()
    manifest = json.load(open(MANIFEST_PATH)) if os.path.exists(MANIFEST_PATH) else {}
    placeholders = collect_placeholders()
    print(f"Placeholder items: {len(placeholders)}")

    captions: dict[str, dict[str, str]] = {}
    replace_queue: list[dict[str, str]] = []

    for category, entry_id in placeholders:
        fname = find_image(category, entry_id)
        if not fname:
            continue
        rel = f"{category}/{fname}"
        sources = parse_sources(category).get(fname, {})
        desc = sources.get("description")
        page_url = sources.get("url")
        mtitle = (manifest.get(rel) or {}).get("title", "").replace("File:", "")

        if is_bad_image(category, entry_id, fname, page_url, mtitle, rfm):
            replace_queue.append(
                {
                    "category": category,
                    "entry_id": entry_id,
                    "filename": fname,
                    "query": REPLACE_QUERIES.get(
                        f"{category}/{entry_id}",
                        REPLACE_QUERIES.get(entry_id, entry_id.replace("-", " ")),
                    ),
                }
            )
            continue

        if desc:
            cap = desc
        elif page_url:
            cap = clean_wikimedia_title(title_from_url(page_url) or "")
        elif mtitle:
            cap = clean_wikimedia_title(mtitle)
        else:
            cap = format_entry_id(entry_id)

        if cap:
            captions.setdefault(category, {})[entry_id] = cap

    total = sum(len(v) for v in captions.values())
    print(f"Captions from existing media: {total}")
    print(f"Images queued for replacement: {len(replace_queue)}")

    with open(CAPTIONS_CACHE, "w") as f:
        json.dump(captions, f, indent=2, sort_keys=True)
        f.write("\n")
    with open(REPLACE_QUEUE, "w") as f:
        json.dump(replace_queue, f, indent=2)
        f.write("\n")

    update_preserve_captions(captions)
    subprocess.run(["python3", GENERATE_SCRIPT], check=True)

    remaining = sum(
        len(PLACEHOLDER_RE.findall(open(os.path.join(DATA, mf)).read()))
        for mf in CAT_MAP
    )
    print(f"Remaining placeholders (incl. replace queue): {remaining}")


if __name__ == "__main__":
    main()
