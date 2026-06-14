import type { MedicationEntry } from "./medications";
import type { MediaAttribution } from "./media";

import antipsychotics from "../media/images/medications/antipsychotics.svg?url";
import calcineurinInhibitors from "../media/images/medications/calcineurin-inhibitors.svg?url";
import dexamethasone from "../media/images/medications/dexamethasone.svg?url";
import glatiramer from "../media/images/medications/glatiramer.svg?url";
import hydrocortisone from "../media/images/medications/hydrocortisone.svg?url";
import interferonBeta from "../media/images/medications/interferon-beta.svg?url";
import polyclonalFabAntivenom from "../media/images/medications/polyclonal-fab-antivenom.png?url";
import riboflavin from "../media/images/medications/riboflavin.png?url";
import vasopressors from "../media/images/medications/vasopressors.png?url";

export type MedicationImageId = Extract<
  MedicationEntry["id"],
  | "antipsychotics"
  | "calcineurin-inhibitors"
  | "dexamethasone"
  | "glatiramer"
  | "hydrocortisone"
  | "interferon-beta"
  | "polyclonal-fab-antivenom"
  | "riboflavin"
  | "vasopressors"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/medications/SOURCES.txt */
export const MEDICATION_IMAGES: Partial<Record<MedicationImageId, string>> = {
  antipsychotics: extensionAssetUrl(antipsychotics),
  "calcineurin-inhibitors": extensionAssetUrl(calcineurinInhibitors),
  dexamethasone: extensionAssetUrl(dexamethasone),
  glatiramer: extensionAssetUrl(glatiramer),
  hydrocortisone: extensionAssetUrl(hydrocortisone),
  "interferon-beta": extensionAssetUrl(interferonBeta),
  "polyclonal-fab-antivenom": extensionAssetUrl(polyclonalFabAntivenom),
  riboflavin: extensionAssetUrl(riboflavin),
  vasopressors: extensionAssetUrl(vasopressors),
};

export const MEDICATION_IMAGE_ATTRIBUTIONS: Partial<
  Record<MedicationImageId, MediaAttribution>
> = {
  antipsychotics: {
    label: "Created locally; reference: Dopaminergic pathways",
    url: "https://en.wikipedia.org/wiki/Dopaminergic_pathways",
  },
  "calcineurin-inhibitors": {
    label: "Created locally; reference: Calcineurin",
    url: "https://en.wikipedia.org/wiki/Calcineurin",
  },
  dexamethasone: {
    label: "Created locally; reference: Dexamethasone",
    url: "https://en.wikipedia.org/wiki/Dexamethasone",
  },
  glatiramer: {
    label: "Created locally; reference: Glatiramer acetate",
    url: "https://en.wikipedia.org/wiki/Glatiramer_acetate",
  },
  "interferon-beta": {
    label: "Created locally; reference: Interferon beta",
    url: "https://en.wikipedia.org/wiki/Interferon_beta",
  },
  hydrocortisone: {
    label: "Created locally; reference: Hydrocortisone",
    url: "https://en.wikipedia.org/wiki/Hydrocortisone",
  },
  "polyclonal-fab-antivenom": {
    label: "Wikimedia Commons (Antibody.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Antibody.svg",
  },
  riboflavin: {
    label: "Wikimedia Commons (Riboflavin.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Riboflavin.svg",
  },
  vasopressors: {
    label: "Wikimedia Commons (Norepinephrine.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Norepinephrine.svg",
  },
};

export const MEDICATION_IMAGE_CAPTIONS: Partial<
  Record<MedicationImageId, string>
> = {
  antipsychotics:
    "D2 blockade reduces mesolimbic psychosis but causes nigrostriatal EPS and tuberoinfundibular hyperprolactinemia",
  "calcineurin-inhibitors":
    "Calcineurin blockade prevents NFAT activation — ↓ IL-2 and T-cell proliferation in transplant",
  dexamethasone:
    "Potent glucocorticoid — antenatal lung maturity, croup, cerebral edema, meningitis adjunct",
  glatiramer:
    "Glatiramer acetate mimics myelin basic protein — shifts T cells toward Th2/regulatory phenotype in MS",
  "interferon-beta":
    "IFN-β activates JAK-STAT signaling — immunomodulatory DMT reducing MS relapses",
  hydrocortisone:
    "Physiologic cortisol replacement — adrenal crisis and Addison disease",
  "polyclonal-fab-antivenom":
    "Antibody structure highlighting Fab antigen-binding regions relevant to Fab antivenom fragments",
  riboflavin:
    "Riboflavin (vitamin B2) chemical structure — precursor for FMN and FAD redox cofactors",
  vasopressors:
    "Norepinephrine structure — prototypical alpha-adrenergic vasopressor used in septic shock",
};

export function getMedicationImageForId(id: string): string | undefined {
  return MEDICATION_IMAGES[id as MedicationImageId];
}

export function getMedicationImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return MEDICATION_IMAGE_ATTRIBUTIONS[id as MedicationImageId];
}

export function getMedicationImageCaptionForId(
  id: string,
): string | undefined {
  return MEDICATION_IMAGE_CAPTIONS[id as MedicationImageId];
}
