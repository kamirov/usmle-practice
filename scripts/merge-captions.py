#!/usr/bin/env python3
"""Merge best captions from HEAD, SOURCES.txt, and Wikimedia filenames."""
from __future__ import annotations

import importlib.util
import json
import os
import re
import subprocess

ROOT = os.path.join(os.path.dirname(__file__), "..")
DATA = os.path.join(ROOT, "src", "data")
GENERATE_SCRIPT = os.path.join(os.path.dirname(__file__), "generate-media-mappings.py")
HEAD_CAPTIONS = os.path.join(os.path.dirname(__file__), "head-captions.json")

MEDIA_FILES = {
    "conditions": ("src/data/conditionsMedia.ts", "CONDITION"),
    "cells": ("src/data/cellsMedia.ts", "CELL"),
    "symptoms": ("src/data/symptomMedia.ts", "SYMPTOM"),
    "musculoskeletal": ("src/data/musculoskeletalMedia.ts", "MUSCULOSKELETAL"),
}

PLACEHOLDER = "Clinical or pathologic image illustrating"

BAD_CAPTION_RE = re.compile(
    r"^(?:Gray\d+|Blood-baso|Macro Os|Blausen \d+|This image comes from|"
    r"Propagation of action potential along myelinated nerve fiber en)$",
    re.I,
)


def extract_head_captions(path: str, prefix: str) -> dict[str, str]:
    content = subprocess.check_output(["git", "show", f"HEAD:{path}"], text=True)
    start = content.find(f"{prefix}_IMAGE_CAPTIONS")
    start = content.find("{", start)
    depth = 0
    i = start
    while i < len(content):
        if content[i] == "{":
            depth += 1
        elif content[i] == "}":
            depth -= 1
            if depth == 0:
                break
        i += 1
    block = content[start + 1 : i]
    captions: dict[str, str] = {}
    current_key: str | None = None
    for line in block.split("\n"):
        km = re.match(r'\s*"([^"]+)":\s*$', line)
        if km:
            current_key = km.group(1)
            continue
        km2 = re.match(r'\s*"([^"]+)":\s*"([^"]*)",?\s*$', line)
        if km2:
            eid, cap = km2.groups()
            if PLACEHOLDER not in cap:
                captions[eid] = cap
            current_key = None
            continue
        if current_key:
            m = re.search(r'"([^"]*)"', line)
            if m and PLACEHOLDER not in m.group(1):
                captions[current_key] = m.group(1)
            current_key = None
    return captions


def caption_score(cap: str) -> int:
    if not cap or PLACEHOLDER in cap:
        return 0
    if BAD_CAPTION_RE.match(cap.strip()):
        return 1
    score = min(len(cap), 200)
    if "—" in cap or " showing " in cap.lower() or " histology" in cap.lower():
        score += 50
    if len(cap.split()) >= 5:
        score += 30
    return score


def pick_best(*options: str | None) -> str | None:
    best = None
    best_score = 0
    for cap in options:
        if not cap:
            continue
        s = caption_score(cap)
        if s > best_score:
            best_score = s
            best = cap
    return best


def load_offline():
    spec = importlib.util.spec_from_file_location(
        "offline", os.path.join(os.path.dirname(__file__), "fix-placeholder-captions-offline.py")
    )
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


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
    offline = load_offline()
    placeholders = offline.collect_placeholders()
    replace_ids = set()
    if os.path.exists(os.path.join(os.path.dirname(__file__), "media-replace-queue.json")):
        queue = json.load(
            open(os.path.join(os.path.dirname(__file__), "media-replace-queue.json"))
        )
        replace_ids = {(x["category"], x["entry_id"]) for x in queue}

    head_all: dict[str, dict[str, str]] = {}
    for cat, (path, prefix) in MEDIA_FILES.items():
        head_all[cat] = extract_head_captions(path, prefix)

    merged: dict[str, dict[str, str]] = {}
    for category, entry_id in placeholders:
        if (category, entry_id) in replace_ids:
            continue
        fname = offline.find_image(category, entry_id)
        if not fname:
            continue
        sources = offline.parse_sources(category).get(fname, {})
        desc = sources.get("description")
        page_url = sources.get("url")
        head_cap = head_all.get(category, {}).get(entry_id)
        filename_cap = None
        if page_url:
            title = offline.title_from_url(page_url)
            if title:
                filename_cap = offline.clean_wikimedia_title(title)
        cap = pick_best(head_cap, desc, filename_cap, offline.format_entry_id(entry_id))
        if cap and caption_score(cap) > 0:
            merged.setdefault(category, {})[entry_id] = cap

    total = sum(len(v) for v in merged.values())
    print(f"Merged captions: {total}")
    update_preserve_captions(merged)
    subprocess.run(["python3", GENERATE_SCRIPT], check=True)

    remaining = sum(
        len(re.findall(PLACEHOLDER, open(os.path.join(DATA, os.path.basename(path))).read()))
        for path, _ in MEDIA_FILES.values()
    )
    print(f"Remaining placeholders: {remaining}")


if __name__ == "__main__":
    main()
