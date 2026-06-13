import type { MedicationEntry } from "./medications";
import type { MediaAttribution } from "./media";

import antipsychotics from "../media/images/medications/antipsychotics.svg?url";
import polyclonalFabAntivenom from "../media/images/medications/polyclonal-fab-antivenom.png?url";
import riboflavin from "../media/images/medications/riboflavin.png?url";
import vasopressors from "../media/images/medications/vasopressors.png?url";

export type MedicationImageId = Extract<
  MedicationEntry["id"],
  | "antipsychotics"
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
