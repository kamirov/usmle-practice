import type { LabValueEntry } from "./labValues";
import type { MediaAttribution } from "./media";

import dDimer from "../media/images/lab-values/d-dimer.png?url";
import dhrFlow from "../media/images/lab-values/dihydrorhodamine-flow-cytometry.svg?url";
import fibrinogen from "../media/images/lab-values/fibrinogen.png?url";
import gramStain from "../media/images/lab-values/gram-stain.jpg?url";
import indiaInkStain from "../media/images/lab-values/india-ink-stain.jpg?url";
import lymphocyticPleocytosis from "../media/images/lab-values/lymphocytic-pleocytosis.jpg?url";
import pleocytosis from "../media/images/lab-values/pleocytosis.jpg?url";
import traumaticLumbarPuncture from "../media/images/lab-values/traumatic-lumbar-puncture.jpg?url";
import supernatant from "../media/images/lab-values/supernatant.jpg?url";
import xanthochromia from "../media/images/lab-values/xanthochromia.jpg?url";
import oligoclonalBands from "../media/images/lab-values/oligoclonal-bands.svg?url";
import methylmalonicAcid from "../media/images/lab-values/methylmalonic-acid.png?url";
import erythrocyteTransketolase from "../media/images/lab-values/erythrocyte-transketolase.png?url";
import erythrocyteG6pd from "../media/images/lab-values/erythrocyte-glucose-6-phosphate-dehydrogenase.jpg?url";
import fiveHiaa from "../media/images/lab-values/5-hydroxyindoleacetic-acid.svg?url";
import homovanillicAcid from "../media/images/lab-values/homovanillic-acid.png?url";
import paco2BloodGasAnalyzer from "../media/images/lab-values/paco2-blood-gas-analyzer.jpg?url";
import lipoproteinA from "../media/images/lab-values/lipoprotein-a.jpg?url";
import apolipoproteinB from "../media/images/lab-values/apolipoprotein-b.png?url";

export type LabValueImageId = Extract<
  LabValueEntry["id"],
  | "d-dimer"
  | "dihydrorhodamine-flow-cytometry"
  | "fibrinogen"
  | "gram-stain"
  | "india-ink-stain"
  | "lymphocytic-pleocytosis"
  | "pleocytosis"
  | "traumatic-lumbar-puncture"
  | "supernatant"
  | "xanthochromia"
  | "oligoclonal-bands"
  | "methylmalonic-acid"
  | "erythrocyte-transketolase"
  | "erythrocyte-glucose-6-phosphate-dehydrogenase"
  | "5-hydroxyindoleacetic-acid"
  | "homovanillic-acid"
  | "paco2"
  | "lpa"
  | "apob"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/lab-values/SOURCES.txt */
export const LAB_VALUE_IMAGES: Partial<Record<LabValueImageId, string>> = {
  "d-dimer": extensionAssetUrl(dDimer),
  "dihydrorhodamine-flow-cytometry": extensionAssetUrl(dhrFlow),
  fibrinogen: extensionAssetUrl(fibrinogen),
  "gram-stain": extensionAssetUrl(gramStain),
  "india-ink-stain": extensionAssetUrl(indiaInkStain),
  "lymphocytic-pleocytosis": extensionAssetUrl(lymphocyticPleocytosis),
  pleocytosis: extensionAssetUrl(pleocytosis),
  "traumatic-lumbar-puncture": extensionAssetUrl(traumaticLumbarPuncture),
  supernatant: extensionAssetUrl(supernatant),
  xanthochromia: extensionAssetUrl(xanthochromia),
  "oligoclonal-bands": extensionAssetUrl(oligoclonalBands),
  "methylmalonic-acid": extensionAssetUrl(methylmalonicAcid),
  "erythrocyte-transketolase": extensionAssetUrl(erythrocyteTransketolase),
  "erythrocyte-glucose-6-phosphate-dehydrogenase":
    extensionAssetUrl(erythrocyteG6pd),
  "5-hydroxyindoleacetic-acid": extensionAssetUrl(fiveHiaa),
  "homovanillic-acid": extensionAssetUrl(homovanillicAcid),
  paco2: extensionAssetUrl(paco2BloodGasAnalyzer),
  lpa: extensionAssetUrl(lipoproteinA),
  apob: extensionAssetUrl(apolipoproteinB),
};

export const LAB_VALUE_IMAGE_ATTRIBUTIONS: Partial<
  Record<LabValueImageId, MediaAttribution>
> = {
  "d-dimer": {
    label: "Wikimedia Commons (venous-thrombosis.png)",
    url: "https://commons.wikimedia.org/wiki/File:venous-thrombosis.png",
  },
  "dihydrorhodamine-flow-cytometry": {
    label: "Created locally; reference: Flow cytometry",
    url: "https://en.wikipedia.org/wiki/Flow_cytometry",
  },
  "gram-stain": {
    label: "Wikimedia Commons (Gram stain 01.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Gram_stain_01.jpg",
  },
  "india-ink-stain": {
    label:
      "Wikimedia Commons (Enapsulated Cryptococcus in nigrosin preparation of CSF.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Enapsulated_Cryptococcus_in_nigrosin_preparation_of_CSF.jpg",
  },
  "lymphocytic-pleocytosis": {
    label:
      "Wikimedia Commons (HSV1 encephalitis CSF specimen.jpg), Jensflorian, CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:HSV1_encephalitis_CSF_specimen.jpg",
  },
  pleocytosis: {
    label:
      "Wikimedia Commons (Neisseria meningitidis CSF Gram 1000.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Neisseria_meningitidis_CSF_Gram_1000.jpg",
  },
  "traumatic-lumbar-puncture": {
    label:
      "Wikimedia Commons (Wikipedian getting a lumbar puncture (2006).jpg), Brainhell, CC BY-SA 3.0",
    url: "https://commons.wikimedia.org/wiki/File:Wikipedian_getting_a_lumbar_puncture_(2006).jpg",
  },
  supernatant: {
    label:
      "Wikimedia Commons (Xanthochromia.jpg), William Laborde, Brandon Mong, Joel Mosley, CC BY 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Xanthochromia.jpg",
  },
  xanthochromia: {
    label: "Wikimedia Commons (Xanthochromia.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Xanthochromia.jpg",
  },
  "oligoclonal-bands": {
    label: "Created locally; reference: Oligoclonal band",
    url: "https://en.wikipedia.org/wiki/Oligoclonal_band",
  },
  "methylmalonic-acid": {
    label: "Wikimedia Commons (Hypersegmented neutrophil.png)",
    url: "https://commons.wikimedia.org/wiki/File:Hypersegmented_neutrophil.png",
  },
  "erythrocyte-transketolase": {
    label: "Local reference; thiamine cofactor diagram",
    url: "https://en.wikipedia.org/wiki/Transketolase",
  },
  fibrinogen: {
    label: "Wikimedia Commons (fibrinolysis.png)",
    url: "https://commons.wikimedia.org/wiki/File:fibrinolysis.png",
  },
  "erythrocyte-glucose-6-phosphate-dehydrogenase": {
    label:
      "Wikimedia Commons (Some erythrocytic morphologies and intraerythrocytic inclusions...)",
    url: "https://commons.wikimedia.org/wiki/File:Some_erythrocytic_morphologies_and_intraerythrocytic_inclusions_found_in_peripheral_blood_smears_of_quokkas_on_Rottnest_Island_(also_found_in_quokkas_on_mainland_Western_Australia).png",
  },
  "5-hydroxyindoleacetic-acid": {
    label: "Local reference; oligoclonal band diagram",
    url: "https://en.wikipedia.org/wiki/5-Hydroxyindoleacetic_acid",
  },
  "homovanillic-acid": {
    label: "Wikimedia Commons (Tyrosine hydroxylase showing all four subunits.png)",
    url: "https://commons.wikimedia.org/wiki/File:Tyrosine_hydroxylase_showing_all_four_subunits.png",
  },
  paco2: {
    label:
      "Wikimedia Commons (Cobas b 121 Measurement Chamber (detail).jpg), J3D3, CC BY-SA 3.0",
    url: "https://commons.wikimedia.org/wiki/File:Cobas_b_121_Measurement_Chamber_(detail).jpg",
  },
  lpa: {
    label:
      "Wikimedia Commons (Metabolism of lipoproteins.jpg), Sander kersten, CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Metabolism_of_lipoproteins.jpg",
  },
  apob: {
    label: "Wikimedia Commons (Apobgene.PNG), Sryuu",
    url: "https://commons.wikimedia.org/wiki/File:Apobgene.PNG",
  },
};

export const LAB_VALUE_IMAGE_CAPTIONS: Partial<
  Record<LabValueImageId, string>
> = {
  "d-dimer":
    "Fibrin degradation product — elevated with active thrombosis and fibrinolysis (PE, DVT, DIC)",
  "dihydrorhodamine-flow-cytometry":
    "DHR test: normal neutrophils convert DHR to fluorescent rhodamine; CGD shows low/absent fluorescence",
  "gram-stain":
    "Gram stain: purple Gram-positive cocci vs pink Gram-negative rods — peptidoglycan thickness determines dye retention",
  "india-ink-stain":
    "India ink (nigrosin) negative stain: encapsulated Cryptococcus with clear halo against dark background in CSF",
  "lymphocytic-pleocytosis":
    "CSF cytology with lymphocytic pleocytosis and activated lymphocytes — viral meningitis/encephalitis pattern (Pappenheim stain)",
  pleocytosis:
    "Gram stain of CSF showing Neisseria meningitidis diplococci — neutrophilic pleocytosis in acute bacterial meningitis",
  "traumatic-lumbar-puncture":
    "Lumbar puncture with CSF collection — procedural venous plexus injury can contaminate CSF with blood (traumatic tap)",
  supernatant:
    "CSF supernatant after centrifugation — yellow discoloration (xanthochromia) indicates hemoglobin breakdown from prior subarachnoid bleeding",
  xanthochromia:
    "Yellow CSF supernatant (xanthochromia) from hemoglobin breakdown — subarachnoid hemorrhage classic association",
  "oligoclonal-bands":
    "CSF-specific IgG bands not present in serum — intrathecal synthesis in MS",
  "methylmalonic-acid":
    "Hypersegmented neutrophil in megaloblastic anemia — ↑ methylmalonic acid supports B12 deficiency workup",
  "erythrocyte-transketolase":
    "Thiamine-dependent transketolase in the erythrocyte pentose phosphate pathway — functional B1 status assay",
  fibrinogen:
    "Factor I clotting substrate — thrombin converts fibrinogen to fibrin; consumed in DIC",
  "erythrocyte-glucose-6-phosphate-dehydrogenase":
    "Heinz bodies in G6PD deficiency — oxidant hemolysis with impaired NADPH/glutathione protection",
  "5-hydroxyindoleacetic-acid":
    "Urinary 5-HIAA — serotonin metabolite elevated in carcinoid syndrome",
  "homovanillic-acid":
    "HVA — dopamine metabolite; ↑ in neuroblastoma with VMA",
  paco2:
    "Blood gas analyzer measurement chamber with pCO2 electrode — PaCO2 reflects alveolar ventilation and respiratory acid-base status",
  lpa:
    "Exogenous and endogenous lipoprotein metabolism — Lp(a) is an LDL-like particle with covalently bound apolipoprotein(a)",
  apob:
    "APOB gene expression in liver (ApoB-100 on VLDL/LDL) and intestine (ApoB-48 on chylomicrons)",
};

export function getLabValueImageForId(id: string): string | undefined {
  return LAB_VALUE_IMAGES[id as LabValueImageId];
}

export function getLabValueImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return LAB_VALUE_IMAGE_ATTRIBUTIONS[id as LabValueImageId];
}

export function getLabValueImageCaptionForId(id: string): string | undefined {
  return LAB_VALUE_IMAGE_CAPTIONS[id as LabValueImageId];
}
