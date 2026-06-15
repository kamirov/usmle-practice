#!/usr/bin/env python3
"""Download replacement images from media-replace-queue.json with rate limiting."""
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
QUEUE_PATH = os.path.join(os.path.dirname(__file__), "media-replace-queue.json")
GENERATE_SCRIPT = os.path.join(os.path.dirname(__file__), "generate-media-mappings.py")
DELAY = 8


def load_rfm():
    spec = importlib.util.spec_from_file_location(
        "rfm", os.path.join(os.path.dirname(__file__), "replace-fake-media.py")
    )
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def clean_title(title: str) -> str:
    t = title.replace("File:", "")
    t = re.sub(r"\.(jpe?g|png|svg|webp)$", "", t, flags=re.I)
    return t.replace("_", " ").strip()


def update_sources(category: str, fname: str, page: str, caption: str) -> None:
    path = os.path.join(IMAGES, category, "SOURCES.txt")
    if not os.path.exists(path):
        open(path, "w").write(f"{fname}\n{page}\nDescription: {caption}\n\n")
        return
    text = open(path, encoding="utf-8").read()
    fname_re = re.compile(
        rf"^(?!https?://){re.escape(fname)}\s*$", re.M
    )
    m = fname_re.search(text)
    block = f"{fname}\n{page}\nDescription: {caption}\n\n"
    if m:
        starts = [x.start() for x in fname_re.finditer(text)]
        idx = starts.index(m.start())
        end = starts[idx + 1] if idx + 1 < len(starts) else len(text)
        text = text[: m.start()] + block + text[end:]
    else:
        text = text.rstrip() + "\n\n" + block
    open(path, "w", encoding="utf-8").write(text)


def main() -> None:
    import subprocess

    rfm = load_rfm()
    queue = json.load(open(QUEUE_PATH))
    manifest = json.load(open(MANIFEST_PATH)) if os.path.exists(MANIFEST_PATH) else {}
    new_captions: dict[str, dict[str, str]] = {}
    done: list[dict] = []
    failed: list[dict] = []

    print(f"Replacing {len(queue)} images (delay {DELAY}s)...")
    for i, item in enumerate(queue):
        category = item["category"]
        entry_id = item["entry_id"]
        fname = item["filename"]
        query = item["query"]
        dest_rel = f"{category}/{fname}"
        print(f"[{i+1}/{len(queue)}] {category}/{entry_id}: {query!r}")

        try:
            candidates = rfm.search_candidates(query)
            saved = False
            for title in candidates:
                data = rfm.download_title(title)
                if not data:
                    continue
                dest = os.path.join(IMAGES, dest_rel)
                with open(dest, "wb") as f:
                    f.write(data)
                page = (
                    "https://commons.wikimedia.org/wiki/"
                    + urllib.parse.quote(title.replace(" ", "_"), safe=":/")
                )
                cap = clean_title(title)
                update_sources(category, fname, page, cap)
                manifest[dest_rel] = {"title": title, "page": page, "query": query}
                new_captions.setdefault(category, {})[entry_id] = cap
                done.append(item)
                saved = True
                break
            if not saved:
                failed.append(item)
                print("  FAILED: no suitable image found")
        except Exception as e:
            failed.append(item)
            print(f"  ERROR: {e}")

        time.sleep(DELAY)

    with open(MANIFEST_PATH, "w") as f:
        json.dump(manifest, f, indent=2, sort_keys=True)
        f.write("\n")

    remaining = [x for x in queue if x not in done]
    with open(QUEUE_PATH, "w") as f:
        json.dump(remaining, f, indent=2)
        f.write("\n")

    if new_captions:
        spec = importlib.util.spec_from_file_location("fpc", GENERATE_SCRIPT)
        # merge into PRESERVE_CAPTIONS via offline script helper
        spec2 = importlib.util.spec_from_file_location(
            "offline", os.path.join(os.path.dirname(__file__), "fix-placeholder-captions-offline.py")
        )
        offline = importlib.util.module_from_spec(spec2)
        spec2.loader.exec_module(offline)
        offline.update_preserve_captions(new_captions)
        subprocess.run(["python3", GENERATE_SCRIPT], check=True)

    print(f"Done: {len(done)}, failed: {len(failed)}, remaining in queue: {len(remaining)}")


if __name__ == "__main__":
    main()
