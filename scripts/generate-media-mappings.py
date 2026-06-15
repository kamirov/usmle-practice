#!/usr/bin/env python3
"""Generate media mapping TypeScript from images on disk."""
from __future__ import annotations

import json
import os
import re
import urllib.parse

ROOT = os.path.join(os.path.dirname(__file__), "..")
IMAGES = os.path.join(ROOT, "src", "media", "images")
MANIFEST = os.path.join(ROOT, "src", "media", "download-manifest.json")


def manifest_key_for_rel(category: str, filename: str) -> str:
    return f"{category}/{filename}"

# local path -> entry id when filename != id
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
    "musculoskeletal/sarcomere-diagram.svg": "sarcomere",
    "cells/mitochondrial-respiratory-chain.svg": "oxidative-phosphorylation",
    "cells/b-lymphocyte-blausen.png": "naive-b-lymphocyte",
    "cells/immunological-memory.png": "memory-t-lymphocyte",
    "musculoskeletal/sarcomere-diagram.svg": "sarcomere",
}

IMAGE_ID_ALIASES: dict[str, dict[str, str]] = {
    "symptoms": {"petechiae": "purpura"},
}

PRESERVE_CAPTIONS: dict[str, dict[str, str]] = {
    "conditions": {
        "mitochondrial-encephalomyopathy": "Ragged red fibers (subsarcolemmal mitochondrial aggregates) on Gomori trichrome muscle biopsy in mitochondrial myopathy",
        "uterine-fibroid": "Uterine fibroid locations: subserosal, intramural, submucosal, pedunculated, and intraligamentous leiomyomas",
        "hydatidiform-mole": "Transvaginal ultrasound of molar pregnancy — classic 'snowstorm' / bunch-of-grapes intrauterine pattern",
        "teratoma": "H&E histology of ovarian dermoid cyst (mature cystic teratoma) — well-differentiated tissues from multiple germ layers",
        "rocky-mountain-spotted-fever": "Characteristic spotted rash of Rocky Mountain spotted fever on the wrist and hand",
        "typhoid-fever": "Rose spots on the chest in typhoid fever due to Salmonella Typhi",
        "dengue-fever": "Dengue recovery rash — classic 'white islands in a sea of red' pattern",
        "chikungunya-fever": "Maculopapular chikungunya rash on the abdomen during acute illness",
        "meningitis": "Cross-section of cranial meninges — dura mater, arachnoid mater, pia mater, and subarachnoid space",
        "acromegaly": "Coarse facial features and prognathism in acromegaly from chronic growth hormone excess",
        "serum-sickness": "Urticarial rash pattern that can occur in serum sickness after immune-complex complement activation",
        "aphthous-ulcer": "Aphthous ulcer on nonkeratinized oral mucosa",
        "dental-caries": "Occlusal dental caries with enamel cavitation",
        "keratoconjunctivitis-sicca": "Dry eye with ocular surface staining/keratitis pattern",
        "diabetes-insipidus": "Massive polyuria — large volumes of dilute urine in diabetes insipidus",
        "carotid-stenosis": "Carotid duplex ultrasound showing near-occlusive internal carotid artery stenosis",
        "alcohol-withdrawal": "Alcoholic liver disease — chronic heavy alcohol use underlying withdrawal risk",
        "delirium-tremens": "Severe alcohol withdrawal delirium with autonomic hyperactivity",
        "status-epilepticus": "Prolonged seizure activity — neurologic emergency requiring urgent benzodiazepines",
        "postherpetic-neuralgia": "Dermatomal herpes zoster rash — acute shingles preceding postherpetic neuralgia",
    },
    "symptoms": {
        "erythema": "Sharply demarcated erythema of recurrent erysipelas (vasodilation with infection)",
        "papule": "Violaceous flat-topped papules of lichen planus on the shins (solid, ≤1 cm)",
        "plaque": "Erythematous plaque of psoriasis with silvery scale (solid, >1 cm)",
        "purpura": "Petechiae and purpura on the lower limb from medication-induced leukocytoclastic vasculitis",
        "petechiae": "Non-blanching petechiae on the lower limb from leukocytoclastic vasculitis",
        "clubbing": "Finger clubbing — increased convexity of nail bed with loss of Lovibond angle",
        "lymphadenopathy": "Cervical lymphadenopathy — enlarged palpable anterior cervical lymph nodes",
        "calcinosis": "Calcinosis cutis — subcutaneous calcium deposits in systemic sclerosis",
        "kernig-sign":
            "Kernig sign — resistance to knee extension with hip flexed suggests meningeal irritation",
        "brudzinski-sign":
            "Brudziński sign — passive neck flexion causes involuntary hip/knee flexion in meningitis",
        "jaundice": "Scleral icterus — yellow discoloration of the conjunctiva from hyperbilirubinemia",
        "cyanosis": "Peripheral cyanosis of the lower extremity due to ischemia",
        "dactylitis": "Painful swelling of the hands — dactylitis in sickle cell disease",
        "vesicle": "Herpes labialis vesicles — fluid-filled epidermal lesions <1 cm",
        "bullae": "Bullous pemphigoid — tense subepidermal bullae",
        "telangiectasia": "Spider angioma — central arteriole with radiating telangiectasias",
        "maculopapular-rash": "Maculopapular eruption — coalescent erythematous macules and papules",
        "nuchal-rigidity": "Nuchal rigidity — resistance to passive neck flexion in meningeal irritation",
        "ecchymosis": "Periorbital ecchymosis — non-blanching blood extravasation into skin",
        "xerosis": "Dry, scaling skin over the knuckles consistent with xerosis",
        "xerostomia": "Dry mouth illustration showing reduced salivary moisture",
        "hypotonia": "Hypotonic infant — reduced muscle tone with floppy posture on handling",
        "anxiety": "Generalized anxiety — persistent excessive worry with somatic symptoms",
        "enuresis": "Nocturnal enuresis — involuntary bedwetting during sleep in children",
    },
    "cells": {
        "oxidative-phosphorylation": "Inner mitochondrial membrane respiratory chain: complexes I–IV pass electrons to O₂; proton pumping drives ATP synthase (Complex V)",
        "memory-t-lymphocyte": "Immunological memory: long-lived memory B and T lymphocytes enable rapid secondary responses on re-exposure",
        "naive-b-lymphocyte": "B lymphocyte with surface immunoglobulin (BCR) — naïve B cells express IgM and IgD awaiting first antigen encounter",
        "mast-cell": "Mast cell with granules containing histamine and heparin — key effector in type I hypersensitivity",
        "gap-junction": "Gap junction (connexon) channels connecting adjacent cells for direct cytoplasmic communication",
        "langhans-giant-cell": "Langhans giant cell with horseshoe-arranged nuclei at the periphery — seen in granulomatous inflammation",
        "melanocyte": "Melanocyte dendritic processes transferring melanin to surrounding keratinocytes",
    },
    "musculoskeletal": {
        "sarcomere": "Sarcomere bands: Z line (boundaries), M line (center), A band (myosin length), I band (actin only), H zone (thick filaments only)",
    },
    "ecg": {
        "electrical-alternans": "QRS alternans with tachycardia and low voltage in large pericardial effusion",
        "inferior-stemi": "12-lead ECG with ST elevation in inferior leads II, III, and aVF with reciprocal changes in anterolateral leads",
    },
    "pathogenesis": {
        "neuralgia": "Trigeminal nerve distribution — classic site of lancinating neuralgic pain",
    },
}


def camel_case(name: str) -> str:
    parts = re.split(r"[-_]", name)
    return parts[0] + "".join(p.capitalize() for p in parts[1:])


def list_images(category: str) -> list[tuple[str, str, str]]:
    """Return (entry_id, rel_path, import_var) for each image."""
    folder = os.path.join(IMAGES, category)
    if not os.path.isdir(folder):
        return []
    items: list[tuple[str, str, str]] = []
    for fname in sorted(os.listdir(folder)):
        if fname == "SOURCES.txt" or fname.startswith("."):
            continue
        if not re.search(r"\.(jpe?g|png|svg)$", fname, re.I):
            continue
        rel = f"{category}/{fname}"
        entry_id = ID_ALIASES.get(rel, os.path.splitext(fname)[0])
        var = camel_case(os.path.splitext(fname)[0])
        items.append((entry_id, f"../media/images/{category}/{fname}?url", var))
    for entry_id, var_name in IMAGE_ID_ALIASES.get(category, {}).items():
        # reuse existing image file via shared import variable
        fname = f"{entry_id.replace('petechiae', 'purpura')}.jpg"
        if entry_id == "petechiae":
            fname = "purpura.jpg"
        items.append((entry_id, f"../media/images/{category}/{fname}?url", var_name))
    return items


def load_manifest() -> dict[str, dict[str, str]]:
    if os.path.exists(MANIFEST):
        with open(MANIFEST) as f:
            return json.load(f)
    return {}


def default_caption(category: str, entry_id: str) -> str:
    preserved = PRESERVE_CAPTIONS.get(category, {}).get(entry_id)
    if preserved:
        return preserved
    name = entry_id.replace("-", " ")
    return f"Clinical or pathologic image illustrating {name}"


def default_attribution(manifest: dict, rel_path: str) -> tuple[str, str]:
    rel = rel_path.replace("../media/images/", "").split("?")[0]
    m = manifest.get(rel)
    if m:
        title = m.get("title", "").replace("File:", "")
        return f"Wikimedia Commons ({title})", m["page"]
    fname = os.path.basename(rel)
    page = f"https://commons.wikimedia.org/wiki/File:{urllib.parse.quote(fname.replace(' ', '_'))}"
    return "Wikimedia Commons", page


def generate_conditions_media() -> str:
    manifest = load_manifest()
    images = list_images("conditions")
    lines = [
        'import type { MediaAttribution } from "./media";',
        'import type { ConditionEntry } from "./conditions";',
        "",
    ]
    for _, path, var in images:
        lines.append(f'import {var} from "{path}";')
    ids = [eid for eid, _, _ in images]
    lines += [
        "",
        "export type ConditionImageId = Extract<",
        '  ConditionEntry["id"],',
        "  | " + '\n  | '.join(f'"{i}"' for i in ids),
        ">;",
        "",
        "function extensionAssetUrl(path: string): string {",
        "  return chrome.runtime.getURL(path);",
        "}",
        "",
        "/** See src/media/images/conditions/SOURCES.txt */",
        "export const CONDITION_IMAGES: Partial<Record<ConditionImageId, string>> = {",
    ]
    for eid, _, var in images:
        lines.append(f'  "{eid}": extensionAssetUrl({var}),')
    lines.append("};")
    lines += [
        "",
        "export const CONDITION_IMAGE_ATTRIBUTIONS: Partial<",
        "  Record<ConditionImageId, MediaAttribution>",
        "> = {",
    ]
    for eid, path, _ in images:
        rel = path.replace("../media/images/", "").split("?")[0]
        label, url = default_attribution(manifest, rel)
        lines.append(f'  "{eid}": {{ label: "{label}", url: "{url}" }},')
    lines.append("};")
    lines += [
        "",
        "export const CONDITION_IMAGE_CAPTIONS: Partial<",
        "  Record<ConditionImageId, MediaAttribution>",
        "> = {",
    ]
    for eid, _, _ in images:
        cap = default_caption("conditions", eid).replace('"', '\\"')
        lines.append(f'  "{eid}": "{cap}",')
    lines.append("};")
    # fix caption type
    content = "\n".join(lines).replace(
        "Record<ConditionImageId, MediaAttribution>", "Record<ConditionImageId, string>", 1
    )
    content += """

export function getConditionImageForId(id: string): string | undefined {
  return CONDITION_IMAGES[id as ConditionImageId];
}

export function getConditionImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return CONDITION_IMAGE_ATTRIBUTIONS[id as ConditionImageId];
}

export function getConditionImageCaptionForId(
  id: string,
): string | undefined {
  return CONDITION_IMAGE_CAPTIONS[id as ConditionImageId];
}
"""
    return content


def generate_symptom_media() -> str:
    manifest = load_manifest()
    images = list_images("symptoms")
    seen_ids: set[str] = set()
    seen_vars: set[str] = set()
    unique: list[tuple[str, str, str]] = []
    for item in images:
        if item[0] in seen_ids:
            continue
        seen_ids.add(item[0])
        unique.append(item)
    images = unique
    lines = [
        'import type { MediaAttribution } from "./media";',
        'import type { SymptomEntry } from "./symptoms";',
        "",
    ]
    for _, path, var in images:
        if var in seen_vars:
            continue
        seen_vars.add(var)
        lines.append(f'import {var} from "{path}";')
    ids = [eid for eid, _, _ in images]
    lines += [
        "",
        "export type SymptomImageId = Extract<",
        '  SymptomEntry["id"],',
        "  | " + '\n  | '.join(f'"{i}"' for i in ids),
        ">;",
        "",
        "function extensionAssetUrl(path: string): string {",
        "  return chrome.runtime.getURL(path);",
        "}",
        "",
        "/** See src/media/images/symptoms/SOURCES.txt */",
        "export const SYMPTOM_IMAGES: Partial<Record<SymptomImageId, string>> = {",
    ]
    for eid, _, var in images:
        lines.append(f'  "{eid}": extensionAssetUrl({var}),')
    lines.append("};")
    lines += [
        "",
        "export const SYMPTOM_IMAGE_ATTRIBUTIONS: Partial<",
        "  Record<SymptomImageId, MediaAttribution>",
        "> = {",
    ]
    for eid, path, _ in images:
        rel = path.replace("../media/images/", "").split("?")[0]
        if eid == "petechiae":
            rel = "symptoms/purpura.jpg"
        label, url = default_attribution(manifest, rel)
        lines.append(f'  "{eid}": {{ label: "{label}", url: "{url}" }},')
    lines.append("};")
    lines += [
        "",
        "export const SYMPTOM_IMAGE_CAPTIONS: Partial<Record<SymptomImageId, string>> = {",
    ]
    for eid, _, _ in images:
        cap = default_caption("symptoms", eid).replace('"', '\\"')
        lines.append(f'  "{eid}": "{cap}",')
    lines.append("};")
    content = "\n".join(lines)
    content += """

export function getSymptomImageForId(id: string): string | undefined {
  return SYMPTOM_IMAGES[id as SymptomImageId];
}

export function getSymptomImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return SYMPTOM_IMAGE_ATTRIBUTIONS[id as SymptomImageId];
}

export function getSymptomImageCaptionForId(id: string): string | undefined {
  return SYMPTOM_IMAGE_CAPTIONS[id as SymptomImageId];
}
"""
    return content


def generate_category_media(
    category: str,
    entry_type: str,
    entry_import: str,
    prefix: str,
    func_suffix: str,
) -> str:
    manifest = load_manifest()
    images = list_images(category)
    lines = [
        f'import type {{ MediaAttribution }} from "./media";',
        f'import type {{ {entry_type} }} from "./{entry_import}";',
        "",
    ]
    for _, path, var in images:
        lines.append(f'import {var} from "{path}";')
    ids = [eid for eid, _, _ in images]
    lines += [
        "",
        f"export type {prefix}ImageId = Extract<",
        f'  {entry_type}["id"],',
        "  | " + '\n  | '.join(f'"{i}"' for i in ids),
        ">;",
        "",
        "function extensionAssetUrl(path: string): string {",
        "  return chrome.runtime.getURL(path);",
        "}",
        "",
        f"/** See src/media/images/{category}/SOURCES.txt */",
        f"export const {prefix}_IMAGES: Partial<Record<{prefix}ImageId, string>> = {{",
    ]
    for eid, _, var in images:
        lines.append(f'  "{eid}": extensionAssetUrl({var}),')
    lines.append("};")
    lines += [
        "",
        f"export const {prefix}_IMAGE_ATTRIBUTIONS: Partial<",
        f"  Record<{prefix}ImageId, MediaAttribution>",
        "> = {",
    ]
    for eid, path, _ in images:
        rel = path.replace("../media/images/", "").split("?")[0]
        label, url = default_attribution(manifest, rel)
        lines.append(f'  "{eid}": {{ label: "{label}", url: "{url}" }},')
    lines.append("};")
    lines += [
        "",
        f"export const {prefix}_IMAGE_CAPTIONS: Partial<Record<{prefix}ImageId, string>> = {{",
    ]
    for eid, _, _ in images:
        cap = default_caption(category, eid).replace('"', '\\"')
        lines.append(f'  "{eid}": "{cap}",')
    lines.append("};")
    content = "\n".join(lines)
    content += f"""

export function get{func_suffix}ImageForId(id: string): string | undefined {{
  return {prefix}_IMAGES[id as {prefix}ImageId];
}}

export function get{func_suffix}ImageAttributionForId(
  id: string,
): MediaAttribution | undefined {{
  return {prefix}_IMAGE_ATTRIBUTIONS[id as {prefix}ImageId];
}}

export function get{func_suffix}ImageCaptionForId(id: string): string | undefined {{
  return {prefix}_IMAGE_CAPTIONS[id as {prefix}ImageId];
}}
"""
    return content


def main() -> None:
    with open(os.path.join(ROOT, "src/data/conditionsMedia.ts"), "w") as f:
        f.write(generate_conditions_media())
    with open(os.path.join(ROOT, "src/data/symptomMedia.ts"), "w") as f:
        f.write(generate_symptom_media())
    with open(os.path.join(ROOT, "src/data/cellsMedia.ts"), "w") as f:
        f.write(
            generate_category_media(
                "cells", "CellEntry", "cells", "CELL", "Cell"
            )
        )
    with open(os.path.join(ROOT, "src/data/musculoskeletalMedia.ts"), "w") as f:
        f.write(
            generate_category_media(
                "musculoskeletal",
                "MusculoskeletalEntry",
                "musculoskeletal",
                "MUSCULOSKELETAL",
                "Musculoskeletal",
            )
        )
    print("Generated media mapping files")


if __name__ == "__main__":
    main()
