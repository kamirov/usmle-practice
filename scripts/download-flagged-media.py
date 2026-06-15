#!/usr/bin/env python3
"""Download curated Wikimedia replacements for user-flagged inadequate images."""
from __future__ import annotations

import importlib.util
import json
import os
import re
import time
import urllib.parse

ROOT = os.path.join(os.path.dirname(__file__), "..")
IMAGES = os.path.join(ROOT, "src", "media", "images")
MANIFEST_PATH = os.path.join(ROOT, "src", "media", "download-manifest.json")
GENERATE_SCRIPT = os.path.join(os.path.dirname(__file__), "generate-media-mappings.py")
DELAY = 12

# category, entry_id, output stem, Wikimedia File: title, caption
REPLACEMENTS = [
    (
        "conditions",
        "femoral-neck-fracture",
        "femoral-neck-fracture",
        "File:Cdm hip fracture 343.jpg",
        "Hip fracture on radiograph (femoral neck region)",
    ),
    (
        "conditions",
        "avascular-necrosis",
        "avascular-necrosis",
        "File:X-ray of idiopathic avascular necrosis of the femoral head - Anteroposterior.jpg",
        "AP pelvis radiograph showing avascular necrosis of the femoral head",
    ),
    (
        "musculoskeletal",
        "peroneal-nerve-compression",
        "peroneal-nerve-compression",
        "File:Tibial nerve and common peroneal nerve.jpg",
        "Sciatic nerve bifurcation into tibial and common peroneal nerves at the popliteal fossa",
    ),
    (
        "conditions",
        "l5-radiculopathy",
        "l5-radiculopathy",
        "File:Spinal disc herniation stage 3.jpg",
        "Lumbar disc herniation compressing the traversing nerve root (radiculopathy)",
    ),
    (
        "conditions",
        "lacunar-stroke",
        "lacunar-stroke",
        "File:Lacunar stroke.jpg",
        "CT brain showing lacunar infarcts in the basal ganglia",
    ),
    (
        "conditions",
        "paroxysmal-supraventricular-tachycardia",
        "paroxysmal-supraventricular-tachycardia",
        "File:SVT Lead II-2.JPG",
        "Supraventricular tachycardia on ECG (lead II)",
    ),
    (
        "conditions",
        "atrial-tachycardia",
        "atrial-tachycardia",
        "File:Multifocal atrial tachycardia - MAT.png",
        "Multifocal atrial tachycardia on ECG",
    ),
    (
        "organs",
        "cavotricuspid-isthmus",
        "cavotricuspid-isthmus",
        "File:Cavotricuspid isthmus.png",
        "Cavotricuspid isthmus — low right atrial isthmus targeted in typical atrial flutter ablation",
    ),
    (
        "musculoskeletal",
        "sympathetic-trunk",
        "sympathetic-trunk",
        "File:Gray847.png",
        "Sympathetic trunk and splanchnic nerves (Gray's Anatomy)",
    ),
]


def load_rfm():
    spec = importlib.util.spec_from_file_location(
        "rfm", os.path.join(os.path.dirname(__file__), "replace-fake-media.py")
    )
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def ext_for_title(title: str, data: bytes) -> str:
    lower = title.lower()
    for ext in (".svg", ".png", ".jpg", ".jpeg", ".webp"):
        if lower.endswith(ext):
            return ext.lstrip(".")
    if data[:4] == b"\x89PNG":
        return "png"
    if data[:2] == b"\xff\xd8":
        return "jpg"
    if b"<svg" in data[:300].lower():
        return "svg"
    return "jpg"


def update_sources(category: str, fname: str, page: str, caption: str) -> None:
    path = os.path.join(IMAGES, category, "SOURCES.txt")
    if not os.path.exists(path):
        open(path, "w", encoding="utf-8").write(f"{fname}\n{page}\nDescription: {caption}\n\n")
        return
    text = open(path, encoding="utf-8").read()
    fname_re = re.compile(rf"^(?!https?://){re.escape(fname)}\s*$", re.M)
    block = (
        f"{fname}\n"
        f"  Source: Wikimedia Commons — {fname.rsplit('.', 1)[0]}\n"
        f"  Page: {page}\n"
        f"  Description: {caption}\n\n"
    )
    m = fname_re.search(text)
    if m:
        starts = [x.start() for x in fname_re.finditer(text)]
        idx = starts.index(m.start())
        end = starts[idx + 1] if idx + 1 < len(starts) else len(text)
        text = text[: m.start()] + block + text[end:]
    else:
        text = text.rstrip() + "\n\n" + block
    open(path, "w", encoding="utf-8").write(text)


def remove_old_stem(category: str, stem: str, keep_fname: str) -> None:
    d = os.path.join(IMAGES, category)
    for fname in os.listdir(d):
        if fname.startswith(stem + ".") and fname != keep_fname:
            os.remove(os.path.join(d, fname))


def main() -> None:
    import subprocess

    rfm = load_rfm()
    manifest = json.load(open(MANIFEST_PATH)) if os.path.exists(MANIFEST_PATH) else {}
    new_captions: dict[str, dict[str, str]] = {}
    ok, fail = 0, 0

    for i, (category, entry_id, stem, title, caption) in enumerate(REPLACEMENTS):
        print(f"[{i+1}/{len(REPLACEMENTS)}] {category}/{entry_id} <- {title}")
        try:
            data = rfm.download_title(title)
            if not data or len(data) < 800:
                print(f"  FAIL: download too small or empty ({len(data or b'')}b)")
                fail += 1
                time.sleep(DELAY)
                continue
            ext = ext_for_title(title, data)
            fname = f"{stem}.{ext}"
            dest_rel = f"{category}/{fname}"
            dest = os.path.join(IMAGES, dest_rel)
            with open(dest, "wb") as f:
                f.write(data)
            remove_old_stem(category, stem, fname)
            page = "https://commons.wikimedia.org/wiki/" + urllib.parse.quote(
                title.replace(" ", "_"), safe=":/"
            )
            update_sources(category, fname, page, caption)
            manifest[dest_rel] = {"title": title, "page": page, "caption": caption}
            new_captions.setdefault(category, {})[entry_id] = caption
            print(f"  OK -> {fname} ({len(data)}b)")
            ok += 1
        except Exception as exc:
            print(f"  ERROR: {exc}")
            fail += 1
        time.sleep(DELAY)

    with open(MANIFEST_PATH, "w") as f:
        json.dump(manifest, f, indent=2, sort_keys=True)
        f.write("\n")

    if new_captions:
        spec = importlib.util.spec_from_file_location(
            "offline",
            os.path.join(os.path.dirname(__file__), "fix-placeholder-captions-offline.py"),
        )
        offline = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(offline)
        offline.update_preserve_captions(new_captions)
        subprocess.run(["python3", GENERATE_SCRIPT], check=True)

    print(f"DONE ok={ok} fail={fail}")


if __name__ == "__main__":
    main()
