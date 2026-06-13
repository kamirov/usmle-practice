#!/usr/bin/env python3
"""Download Wikimedia Commons images for USMLE media entries."""
from __future__ import annotations

import json
import os
import time
import urllib.parse
import urllib.request

UA = "usmle-practice-media/1.0 (educational)"
DELAY = 6
BASE = os.path.join(os.path.dirname(__file__), "..", "src", "media", "images")
MANIFEST_PATH = os.path.join(os.path.dirname(__file__), "..", "src", "media", "download-manifest.json")


def api_get(url: str) -> dict:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.load(r)


def search_file(query: str) -> str | None:
    q = urllib.parse.urlencode(
        {
            "action": "query",
            "list": "search",
            "srsearch": query,
            "srnamespace": "6",
            "srlimit": "8",
            "format": "json",
        }
    )
    data = api_get(f"https://commons.wikimedia.org/w/api.php?{q}")
    for r in data.get("query", {}).get("search", []):
        t = r["title"]
        lower = t.lower()
        if lower.endswith((".jpg", ".jpeg", ".png", ".svg")):
            return t
    results = data.get("query", {}).get("search", [])
    return results[0]["title"] if results else None


def get_download_url(title: str) -> tuple[str | None, str]:
    q = urllib.parse.urlencode(
        {
            "action": "query",
            "titles": title,
            "prop": "imageinfo",
            "iiprop": "url",
            "iiurlwidth": "1280",
            "format": "json",
        }
    )
    data = api_get(f"https://commons.wikimedia.org/w/api.php?{q}")
    for page in data["query"]["pages"].values():
        if "imageinfo" in page:
            info = page["imageinfo"][0]
            return info.get("thumburl") or info["url"], title
    return None, title


DOWNLOADS: list[tuple[str, str]] = [
    ("jaundice icterus sclera", "symptoms/jaundice.jpg"),
    ("cyanosis extremity", "symptoms/cyanosis.jpg"),
    ("herpes labialis vesicle", "symptoms/vesicle.jpg"),
    ("bullous pemphigoid", "symptoms/bullae.jpg"),
    ("spider angioma", "symptoms/telangiectasia.jpg"),
    ("sickle cell dactylitis", "symptoms/dactylitis.jpg"),
    ("lichenification dermatitis", "symptoms/lichenification.jpg"),
    ("sporotrichosis arm", "symptoms/nodular-lymphangitis.jpg"),
    ("maculopapular rash", "symptoms/maculopapular-rash.jpg"),
    ("sclerodactyly", "symptoms/sclerodactyly.jpg"),
    ("morphea plaque", "symptoms/indurated-plaque.jpg"),
    ("scleroderma skin thickening", "symptoms/skin-thickening.jpg"),
    ("kernig sign", "symptoms/kernig-sign.jpg"),
    ("brudzinski sign", "symptoms/brudzinski-sign.jpg"),
    ("meningismus neck stiffness", "symptoms/nuchal-rigidity.jpg"),
    ("lichen planus shin", "conditions/lichen-planus.jpg"),
    ("pemphigus vulgaris", "conditions/pemphigus-vulgaris.jpg"),
    ("atopic dermatitis child", "conditions/atopic-dermatitis.jpg"),
    ("aphthous ulcer mouth", "conditions/aphthous-ulcer.jpg"),
    ("hand foot syndrome sickle cell", "conditions/sickle-cell-disease.jpg"),
    ("serum sickness rash", "conditions/serum-sickness.jpg"),
    ("acromegaly face hands", "conditions/acromegaly.jpg"),
    ("tetralogy of fallot diagram", "conditions/tetralogy-of-fallot.svg"),
    ("erythema migrans lyme", "conditions/lyme-disease.jpg"),
    ("plasmodium falciparum ring forms", "conditions/malaria.jpg"),
    ("lobar pneumonia xray", "conditions/pneumonia.jpg"),
    ("allergic contact dermatitis", "conditions/allergic-contact-dermatitis.jpg"),
    ("stasis dermatitis", "conditions/venous-stasis-dermatitis.jpg"),
    ("urticaria pigmentosa", "conditions/mastocytosis.jpg"),
    ("otitis media bulging", "conditions/otitis-media.jpg"),
    ("sarcoidosis skin", "conditions/sarcoidosis.jpg"),
    ("atherosclerosis carotid artery", "conditions/atherosclerosis.jpg"),
    ("emphysema histology lung", "conditions/emphysema.jpg"),
    ("cystic fibrosis chest radiograph", "conditions/cystic-fibrosis.jpg"),
    ("asthma histology", "conditions/asthma.jpg"),
    ("crescentic glomerulonephritis", "conditions/glomerulonephritis.jpg"),
    ("nephrotic syndrome pitting edema", "conditions/nephrotic-syndrome.jpg"),
    ("rheumatoid arthritis hands deformity", "conditions/rheumatoid-arthritis.jpg"),
    ("ankylosing spondylitis bamboo spine", "conditions/ankylosing-spondylitis.jpg"),
    ("lupus butterfly rash face", "conditions/systemic-lupus-erythematosus.jpg"),
    ("granulomatosis with polyangiitis", "conditions/granulomatosis-with-polyangiitis.jpg"),
    ("reed sternberg cell", "conditions/hodgkin-lymphoma.jpg"),
    ("mycobacterium tuberculosis ziehl neelsen", "conditions/tuberculosis.jpg"),
    ("oral hairy leukoplakia", "conditions/hiv-infection.jpg"),
    ("kayser fleischer ring", "conditions/wilson-disease.jpg"),
    ("crohn disease cobblestone mucosa", "conditions/crohn-disease.jpg"),
    ("ulcerative colitis colonoscopy", "conditions/ulcerative-colitis.jpg"),
    ("graves ophthalmopathy", "conditions/graves-disease.jpg"),
    ("cushing syndrome moon facies", "conditions/cushing-syndrome.jpg"),
    ("addison disease hyperpigmentation", "conditions/addison-disease.jpg"),
    ("parkinson disease pill rolling tremor", "conditions/parkinson-disease.jpg"),
    ("dawson fingers multiple sclerosis", "conditions/multiple-sclerosis.jpg"),
    ("pressure ulcer stage 4", "conditions/pressure-ulcer.jpg"),
    ("benign prostatic hyperplasia", "conditions/bph.jpg"),
    ("endometriosis laparoscopy", "conditions/endometriosis.jpg"),
    ("choledocholithiasis ERCP", "conditions/choledocholithiasis.jpg"),
    ("biliary atresia", "conditions/biliary-atresia.jpg"),
    ("sporotrichosis lymphocutaneous", "conditions/sporotrichosis.jpg"),
    ("cat scratch disease lymphadenopathy", "conditions/cat-scratch-disease.jpg"),
    ("zika virus rash", "conditions/zika-virus-infection.jpg"),
    ("yellow fever patient", "conditions/yellow-fever.jpg"),
    ("lymphogranuloma venereum", "conditions/lymphogranuloma-venereum.jpg"),
    ("ST elevation myocardial infarction ECG", "conditions/myocardial-infarction.jpg"),
    ("tension pneumothorax chest xray", "conditions/tension-pneumothorax.jpg"),
    ("janeway lesion", "conditions/infective-endocarditis.jpg"),
    ("pericarditis ECG", "conditions/pericarditis.jpg"),
    ("hypertrophic cardiomyopathy echocardiography", "conditions/hypertrophic-cardiomyopathy.jpg"),
    ("ischemic stroke CT hypodensity", "conditions/ischemic-stroke.jpg"),
    ("lung cancer chest xray", "conditions/lung-cancer.jpg"),
    ("honeycombing pulmonary fibrosis", "conditions/interstitial-lung-disease.jpg"),
    ("merkel cell carcinoma skin", "conditions/merkel-cell-carcinoma.jpg"),
    ("turner syndrome webbed neck", "conditions/turner-syndrome.jpg"),
    ("tetralogy of fallot cyanotic", "conditions/tetralogy-of-fallot-cyanosis.jpg"),
    ("neonatal respiratory distress syndrome xray", "conditions/neonatal-respiratory-distress-syndrome.jpg"),
    ("ventricular septal defect diagram", "conditions/ventricular-septal-defect.svg"),
    ("atrial septal defect diagram", "conditions/atrial-septal-defect.svg"),
    ("down syndrome facial features", "symptoms/dysmorphic-facies.jpg"),
    ("xerosis dry skin", "symptoms/xerosis.jpg"),
    ("xerostomia dry mouth", "symptoms/xerostomia.jpg"),
    ("keratoconjunctivitis sicca dry eye", "conditions/keratoconjunctivitis-sicca.jpg"),
    ("dental caries tooth decay", "conditions/dental-caries.jpg"),
    ("cellulitis clinical photograph", "conditions/cellulitis.jpg"),
    ("osteomyelitis xray", "conditions/osteomyelitis.png"),
    ("serratia marcescens red pigment", "microbiology/serratia-marcescens.jpg"),
    ("cervical lymphadenitis scrofula", "conditions/lymphadenitis.jpg"),
    ("natural killer cell scanning electron micrograph", "cells/natural-killer-cell.jpg"),
    ("Neisseria gonorrhoeae gram stain diplococci", "microbiology/neisseria-genus.jpg"),
    ("riboflavin chemical structure", "medications/riboflavin.png"),
    ("norepinephrine chemical structure", "medications/vasopressors.png"),
    ("antibody Fab fragment", "medications/polyclonal-fab-antivenom.png"),
    ("gingiva oral", "organs/gingiva-oral.jpg"),
    ("ecchymosis bruise", "symptoms/ecchymosis.jpg"),
    ("dry gangrene foot", "conditions/gangrene.jpg"),
    ("kidney stone CT urolithiasis", "conditions/nephrolithiasis.jpg"),
    ("acute pyelonephritis CT", "conditions/pyelonephritis.jpg"),
    ("primary biliary cholangitis histology", "conditions/primary-biliary-cholangitis.jpg"),
    ("primary sclerosing cholangitis ERCP", "conditions/primary-sclerosing-cholangitis.jpg"),
    ("sjogren syndrome", "conditions/sjogren-syndrome.jpg"),
    ("systemic sclerosis hands", "conditions/systemic-sclerosis.jpg"),
    ("rotator cuff tear MRI", "conditions/rotator-cuff-syndrome.jpg"),
    ("diverticulitis CT scan", "conditions/diverticulitis.jpg"),
    ("pneumoperitoneum xray", "conditions/intestinal-perforation.jpg"),
    ("duodenal ulcer endoscopy", "conditions/peptic-ulcer-disease.jpg"),
    ("meckel diverticulum technetium", "conditions/meckel-diverticulum.jpg"),
    ("neutrophil granulocyte blood smear", "cells/neutrophil.jpg"),
    ("eosinophil granulocyte blood smear", "cells/eosinophil.jpg"),
    ("basophil granulocyte", "cells/basophil.jpg"),
    ("mast cell toluidine blue", "cells/mast-cell.jpg"),
    ("lymphocyte blood smear", "cells/lymphocyte.jpg"),
    ("monocyte blood smear", "cells/monocyte.jpg"),
    ("macrophage histology", "cells/macrophage.jpg"),
    ("desmosome electron micrograph", "cells/desmosome.jpg"),
    ("gap junction diagram", "cells/gap-junction.svg"),
    ("tight junction epithelium", "cells/tight-junction.jpg"),
    ("langhans giant cell", "cells/langhans-giant-cell.jpg"),
    ("langerhans cell histology", "cells/langerhans-cell.jpg"),
    ("kupffer cell liver", "cells/kupffer-cell.jpg"),
    ("melanocyte skin", "cells/melanocyte.jpg"),
    ("keratinocyte epidermis", "cells/keratinocyte.jpg"),
    ("rotator cuff muscles diagram", "musculoskeletal/rotator-cuff.svg"),
    ("acromion process shoulder", "musculoskeletal/acromion.jpg"),
    ("atlantoaxial joint", "musculoskeletal/atlantoaxial.jpg"),
]


def main() -> None:
    manifest: dict[str, dict[str, str]] = {}
    if os.path.exists(MANIFEST_PATH):
        with open(MANIFEST_PATH) as f:
            manifest = json.load(f)

    for query, local in DOWNLOADS:
        out = os.path.join(BASE, local)
        if os.path.exists(out) and os.path.getsize(out) > 1000:
            print(f"SKIP {local}")
            continue
        time.sleep(DELAY)
        try:
            title = search_file(query)
            if not title:
                print(f"FAIL search {local}")
                continue
            time.sleep(2)
            url, title = get_download_url(title)
            if not url:
                print(f"FAIL url {local}")
                continue
            time.sleep(2)
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=120) as r:
                data = r.read()
            if len(data) < 500:
                print(f"FAIL small {local}")
                continue
            os.makedirs(os.path.dirname(out), exist_ok=True)
            with open(out, "wb") as f:
                f.write(data)
            page = "https://commons.wikimedia.org/wiki/" + title.replace(" ", "_")
            manifest[local] = {"title": title, "page": page, "query": query}
            print(f"OK {local} <- {title}")
        except Exception as e:
            print(f"FAIL {local}: {e}")

    with open(MANIFEST_PATH, "w") as f:
        json.dump(manifest, f, indent=2)
    print("DONE")


if __name__ == "__main__":
    main()
