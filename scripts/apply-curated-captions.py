#!/usr/bin/env python3
"""Apply curated caption improvements and caption-only fixes for replace queue."""
from __future__ import annotations

import importlib.util
import json
import os
import subprocess

GENERATE_SCRIPT = os.path.join(os.path.dirname(__file__), "generate-media-mappings.py")

# Curated captions from image content / medical context (overrides poor Wikimedia titles)
CURATED: dict[str, dict[str, str]] = {
    "cells": {
        "corticospinal-tract": "Medullary cross-section showing pyramidal (corticospinal) decussation — motor fibers crossing to contralateral side",
        "dorsal-columns": "Spinal cord cross-section labeling posterior (dorsal) columns, anterior/posterior roots, and spinal ganglion",
        "golgi-tendon-organ": "Golgi tendon organ at muscle–tendon junction — detects increased muscle tension via Ib afferents",
        "basophil": "Peripheral blood smear basophil with coarse basophilic granules",
        "b-lymphocyte": "Plasma B cell with abundant rough endoplasmic reticulum for antibody secretion",
        "monocyte": "Peripheral blood monocyte — largest leukocyte with kidney-shaped nucleus",
        "neutrophil": "Segmented neutrophil on peripheral blood smear — primary phagocyte in acute inflammation",
        "multinucleated-giant-cell": "Langhans giant cell with horseshoe-arranged nuclei at the periphery in granulomatous inflammation",
        "dermal-appendage": "Skin hair follicle — dermal appendage structure in epidermis and dermis",
        "keratinocyte": "Epidermal keratinocytes in stratified squamous epithelium",
        "merkel-cell": "Merkel cell in epidermis — mechanoreceptor associated with light touch",
        "t-lymphocyte": "HIV-infected T lymphocyte — CD4+ T cell as primary target of HIV",
        "type-1-pneumocyte": "Type I pneumocyte — thin squamous alveolar epithelial cell for gas exchange",
        "type-2-pneumocyte": "Type II pneumocyte with lamellar bodies — produces pulmonary surfactant",
        "myometrium": "Uterine myometrium — smooth muscle layer of the uterine wall",
        "periventricular-white-matter": "Periventricular white matter — myelinated tracts adjacent to lateral ventricles",
        "cervical-os": "Cervical os — external opening of the uterine cervix into the vagina",
        "fibroblast": "Fibroblast in connective tissue — synthesizes collagen and extracellular matrix",
    },
    "conditions": {
        "allergic-contact-dermatitis": "Allergic contact dermatitis — pruritic eczematous eruption at site of allergen exposure",
        "aortic-regurgitation": "Aortic regurgitation — diastolic murmur from incompetent aortic valve with wide pulse pressure",
        "asthma": "Asthma — airway inflammation with reversible bronchoconstriction and mucus plugging",
        "atopic-dermatitis": "Atopic dermatitis — pruritic flexural eczema in atopy-prone patients",
        "basilar-skull-fracture": "Battle sign — retroauricular ecchymosis suggesting basilar skull fracture",
        "berylliosis": "Chronic berylliosis — granulomatous lung disease from beryllium exposure",
        "biliary-atresia": "Biliary atresia — congenital obliteration of extrahepatic bile ducts causing neonatal cholestasis",
        "celiac-disease": "Celiac disease — villous atrophy and crypt hyperplasia on small bowel biopsy",
        "cerebral-contusion": "Cerebral contusion on CT — hemorrhagic brain injury from blunt head trauma",
        "cat-scratch-disease": "Cat-scratch disease — regional lymphadenopathy after Bartonella henselae inoculation",
        "cataracts": "Slit-lamp photograph of mature cataract with dense lens opacity",
        "cushing-syndrome": "Cushing syndrome — central obesity, moon facies, and purple striae from chronic cortisol excess",
        "femoral-neck-fracture": "Femoral neck fracture on radiograph — intracapsular hip fracture in elderly",
        "hiv-infection": "HIV infection — immunodeficiency virus targeting CD4+ T lymphocytes",
        "juvenile-parkinsonism": "Juvenile parkinsonism — early-onset parkinsonian features with bradykinesia and rigidity",
        "multiple-sclerosis": "Multiple sclerosis — demyelinating plaques in CNS white matter on MRI",
        "neonatal-respiratory-distress-syndrome": "Neonatal respiratory distress syndrome — hyaline membranes and atelectasis in preterm lung",
        "nephrotic-syndrome": "Nephrotic syndrome — heavy proteinuria with peripheral edema and hypoalbuminemia",
        "parkinson-disease": "Parkinson disease — resting tremor, rigidity, bradykinesia, and postural instability",
        "pneumonia": "Lobar pneumonia on chest radiograph — airspace consolidation",
        "primary-biliary-cholangitis": "Primary biliary cholangitis — autoimmune destruction of intrahepatic bile ducts",
        "sickle-cell-disease": "Sickle cell disease — hemoglobin S polymerization causing sickled erythrocytes",
        "systemic-lupus-erythematosus": "Systemic lupus erythematosus — malar rash and multisystem autoimmune disease",
    },
    "symptoms": {
        "bradykinesia": "Bradykinesia — slowed voluntary movement seen in parkinsonism",
        "dysuria": "Dysuria — painful or burning urination suggesting lower urinary tract pathology",
        "fecal-impaction": "Fecal impaction — hardened stool retained in rectum causing obstruction",
        "fecaloma": "Fecaloma — large inspissated fecal mass in colon or rectum",
        "polydipsia": "Polydipsia — excessive thirst, often accompanying polyuria in diabetes mellitus",
        "polyuria": "Polyuria — large-volume urine output from osmotic or water diuresis",
        "polyuria-polydipsia": "Polyuria and polydipsia — classic presentation of uncontrolled diabetes mellitus",
        "sciatica": "Sciatica — radicular leg pain along L4–S1 distribution from lumbosacral nerve root compression",
        "skin-thickening": "Skin thickening — indurated dermal sclerosis as in systemic sclerosis",
    },
}


def update_preserve_captions(new_captions: dict[str, dict[str, str]]) -> None:
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
    total = sum(len(v) for v in CURATED.values())
    print(f"Applying {total} curated captions")
    update_preserve_captions(CURATED)
    subprocess.run(["python3", GENERATE_SCRIPT], check=True)

    import re

    remaining = 0
    for f in ["conditionsMedia.ts", "cellsMedia.ts", "symptomMedia.ts", "musculoskeletalMedia.ts"]:
        remaining += len(
            re.findall(
                "Clinical or pathologic image illustrating",
                open(os.path.join(os.path.dirname(__file__), "..", "src/data", f)).read(),
            )
        )
    print(f"Remaining placeholders: {remaining}")


if __name__ == "__main__":
    main()
