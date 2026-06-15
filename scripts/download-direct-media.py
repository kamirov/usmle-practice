#!/usr/bin/env python3
"""Download specific Wikimedia images by direct URL (no search API)."""
from __future__ import annotations

import hashlib
import importlib.util
import json
import os
import subprocess
import time
import urllib.parse

ROOT = os.path.join(os.path.dirname(__file__), "..")
IMAGES = os.path.join(ROOT, "src", "media", "images")
GENERATE_SCRIPT = os.path.join(os.path.dirname(__file__), "generate-media-mappings.py")
DELAY = 12

# category/entry_id -> (wikimedia_file_title_without_File_prefix, caption, ext)
DIRECT: dict[str, tuple[str, str, str]] = {
    "conditions/adjustment-disorder": (
        "Adjustment_disorder.jpg",
        "Adjustment disorder — emotional or behavioral symptoms within 3 months of an identifiable stressor",
        "jpg",
    ),
    "conditions/avascular-necrosis": (
        "X-ray_of_idiopathic_avascular_necrosis_of_the_femoral_head_-_Anteroposterior.jpg",
        "Avascular necrosis of the femoral head — cystic radiolucencies and irregular subchondral surface on hip X-ray",
        "jpg",
    ),
    "conditions/glaucoma": (
        "Optic_disc_topography,_case_1,_R,_glaucoma.png",
        "Glaucomatous optic disc — increased cupping and neuroretinal rim loss on disc topography",
        "png",
    ),
    "conditions/neuromyelitis-optica": (
        "Neuromyelitis_optica_-_spinal_cord_MRI.jpg",
        "Neuromyelitis optica — longitudinally extensive transverse myelitis on spinal cord MRI",
        "jpg",
    ),
    "conditions/psychotic-mood-disorder": (
        "Schizophrenia_-_Artistic_impression.jpg",
        "Psychotic mood disorder — mood episode with superimposed psychotic features",
        "jpg",
    ),
    "cells/immunosuppression": (
        "Acute_cellular_rejection_of_lung_allograft_-_high_mag.jpg",
        "Acute cellular rejection — lymphocytic infiltrate in allograft under failed immunosuppression",
        "jpg",
    ),
    "symptoms/internuclear-ophthalmoplegia": (
        "Internuclear_ophthalmoplegia.jpg",
        "Internuclear ophthalmoplegia — impaired adduction with contralateral abduction nystagmus (MLF lesion)",
        "jpg",
    ),
    "symptoms/mania": (
        "Bipolar_disorder_-_Artistic_impression.jpg",
        "Mania — elevated mood, hyperactivity, and decreased need for sleep in bipolar disorder",
        "jpg",
    ),
    "symptoms/moon-facies": (
        "Cushing%27s_syndrome_-_moon_face.jpg",
        "Moon facies — rounded facial fullness from chronic cortisol excess in Cushing syndrome",
        "jpg",
    ),
    "symptoms/nystagmus": (
        "Nystagmus_01.jpg",
        "Nystagmus — rhythmic involuntary oscillation of the eyes",
        "jpg",
    ),
    "symptoms/ophthalmoplegia": (
        "Ophthalmoplegia.jpg",
        "Ophthalmoplegia — weakness or paralysis of extraocular muscles",
        "jpg",
    ),
}


def commons_upload_url(filename: str) -> str:
    encoded = filename.replace(" ", "_")
    h = hashlib.md5(encoded.encode("utf-8")).hexdigest()
    return (
        f"https://upload.wikimedia.org/wikipedia/commons/{h[0]}/{h[0:2]}/"
        f"{urllib.parse.quote(encoded)}"
    )


def download_file(title: str, dest: str) -> bool:
    url = commons_upload_url(title)
    result = subprocess.run(
        ["curl", "-fsSL", "-A", "usmle-practice-media/4.0", "-o", dest, url],
        capture_output=True,
    )
    return result.returncode == 0 and os.path.getsize(dest) > 1000


def update_sources(category: str, fname: str, title: str, caption: str) -> None:
    page = f"https://commons.wikimedia.org/wiki/File:{title.replace(' ', '_')}"
    path = os.path.join(IMAGES, category, "SOURCES.txt")
    block = f"{fname}\n{page}\nDescription: {caption}\n\n"
    if os.path.exists(path):
        text = open(path, encoding="utf-8").read()
        import re

        text = re.sub(
            rf"(?m)^{re.escape(fname)}\s*\n.*?(?=\n(?:[a-zA-Z0-9][^\n/]*\.(?:jpg|jpeg|png|svg)\s*$|\Z))",
            block.strip() + "\n\n",
            text,
            count=1,
        )
        if fname not in text:
            text = text.rstrip() + "\n\n" + block
        open(path, "w", encoding="utf-8").write(text)
    else:
        open(path, "w").write(block)


def update_preserve_captions(captions: dict[str, dict[str, str]]) -> None:
    import re

    path = GENERATE_SCRIPT
    text = open(path, encoding="utf-8").read()
    m = re.search(
        r"PRESERVE_CAPTIONS: dict\[str, dict\[str, str\]\] = \{.*?\n\}\n",
        text,
        re.DOTALL,
    )
    spec = importlib.util.spec_from_file_location("gmm", GENERATE_SCRIPT)
    gmm = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(gmm)
    existing = {cat: dict(caps) for cat, caps in gmm.PRESERVE_CAPTIONS.items()}
    for cat, caps in captions.items():
        existing.setdefault(cat, {}).update(caps)
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
    captions: dict[str, dict[str, str]] = {}
    ok = 0
    for key, (title, caption, ext) in DIRECT.items():
        category, entry_id = key.split("/", 1)
        old_fname = None
        for fname in os.listdir(os.path.join(IMAGES, category)):
            if fname.startswith(entry_id):
                old_fname = fname
                break
        if not old_fname:
            old_fname = f"{entry_id}.{ext}"
        new_fname = f"{entry_id}.{ext}"
        dest = os.path.join(IMAGES, category, new_fname)
        if old_fname != new_fname and os.path.exists(os.path.join(IMAGES, category, old_fname)):
            os.remove(os.path.join(IMAGES, category, old_fname))
        print(f"Downloading {key}...")
        if download_file(title, dest):
            update_sources(category, new_fname, title, caption)
            captions.setdefault(category, {})[entry_id] = caption
            ok += 1
            print(f"  OK ({os.path.getsize(dest)} bytes)")
        else:
            print("  FAILED")
        time.sleep(DELAY)

    print(f"Downloaded {ok}/{len(DIRECT)}")
    if captions:
        update_preserve_captions(captions)
        subprocess.run(["python3", GENERATE_SCRIPT], check=True)


if __name__ == "__main__":
    main()
