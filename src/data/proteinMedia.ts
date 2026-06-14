import type { MediaAttribution } from "./media";
import type { ProteinEntry } from "./proteins";

import adenosineDeaminase from "../media/images/proteins/adenosine-deaminase.svg?url";
import filaggrin from "../media/images/proteins/filaggrin.svg?url";

export type ProteinImageId = Extract<
  ProteinEntry["id"],
  "adenosine-deaminase" | "filaggrin"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/proteins/SOURCES.txt */
export const PROTEIN_IMAGES: Partial<Record<ProteinImageId, string>> = {
  "adenosine-deaminase": extensionAssetUrl(adenosineDeaminase),
  filaggrin: extensionAssetUrl(filaggrin),
};

export const PROTEIN_IMAGE_ATTRIBUTIONS: Partial<
  Record<ProteinImageId, MediaAttribution>
> = {
  "adenosine-deaminase": {
    label: "Created locally; reference: Adenosine deaminase",
    url: "https://en.wikipedia.org/wiki/Adenosine_deaminase",
  },
  filaggrin: {
    label: "Created locally; reference: Filaggrin",
    url: "https://en.wikipedia.org/wiki/Filaggrin",
  },
};

export const PROTEIN_IMAGE_CAPTIONS: Partial<Record<ProteinImageId, string>> = {
  "adenosine-deaminase":
    "ADA deficiency causes toxic dATP accumulation, impaired DNA synthesis, and SCID with T, B, and NK-cell failure",
  filaggrin:
    "Filaggrin aggregates keratin filaments in the stratum corneum — FLG loss-of-function increases atopic dermatitis and ichthyosis vulgaris risk",
};

export function getProteinImageForId(id: string): string | undefined {
  return PROTEIN_IMAGES[id as ProteinImageId];
}

export function getProteinImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return PROTEIN_IMAGE_ATTRIBUTIONS[id as ProteinImageId];
}

export function getProteinImageCaptionForId(id: string): string | undefined {
  return PROTEIN_IMAGE_CAPTIONS[id as ProteinImageId];
}
