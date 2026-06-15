import type { MediaAttribution } from "./media";
import type { ProteinEntry } from "./proteins";

import adenosineDeaminase from "../media/images/proteins/adenosine-deaminase.jpg?url";
import ceruloplasmin from "../media/images/proteins/ceruloplasmin.jpg?url";
import filaggrin from "../media/images/proteins/filaggrin.png?url";
import intrinsicFactor from "../media/images/proteins/intrinsic-factor.png?url";
import tyrosineHydroxylase from "../media/images/proteins/tyrosine-hydroxylase.png?url";

export type ProteinImageId = Extract<
  ProteinEntry["id"],
  "adenosine-deaminase" | "ceruloplasmin" | "filaggrin" | "intrinsic-factor" | "tyrosine-hydroxylase"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/proteins/SOURCES.txt */
export const PROTEIN_IMAGES: Partial<Record<ProteinImageId, string>> = {
  "adenosine-deaminase": extensionAssetUrl(adenosineDeaminase),
  ceruloplasmin: extensionAssetUrl(ceruloplasmin),
  filaggrin: extensionAssetUrl(filaggrin),
  "intrinsic-factor": extensionAssetUrl(intrinsicFactor),
  "tyrosine-hydroxylase": extensionAssetUrl(tyrosineHydroxylase),
};

export const PROTEIN_IMAGE_ATTRIBUTIONS: Partial<
  Record<ProteinImageId, MediaAttribution>
> = {
  "adenosine-deaminase": {
    label: "Wikimedia Commons (Person with Job's syndrome.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Person_with_Job%27s_syndrome.jpg",
  },
  ceruloplasmin: {
    label: "Wikimedia Commons (Kayser-Fleischer ring.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Kayser-Fleischer_ring.jpg",
  },
  filaggrin: {
    label: "Wikimedia Commons (502 Layers of epidermis (no labels).png)",
    url: "https://commons.wikimedia.org/wiki/File:502_Layers_of_epidermis_(no_labels).png",
  },
  "intrinsic-factor": {
    label: "Wikimedia Commons (Histology of gastric chief cell.png)",
    url: "https://commons.wikimedia.org/wiki/File:Histology_of_gastric_chief_cell.png",
  },
  "tyrosine-hydroxylase": {
    label: "Wikimedia Commons (Tyrosine hydroxylase showing all four subunits.png)",
    url: "https://commons.wikimedia.org/wiki/File:Tyrosine_hydroxylase_showing_all_four_subunits.png",
  },
};

export const PROTEIN_IMAGE_CAPTIONS: Partial<Record<ProteinImageId, string>> = {
  "adenosine-deaminase":
    "ADA deficiency causes toxic dATP accumulation, impaired DNA synthesis, and SCID with T, B, and NK-cell failure",
  ceruloplasmin:
    "Hepatic ferroxidase and copper carrier — low in Wilson disease, Menkes disease, and copper deficiency",
  filaggrin:
    "Filaggrin aggregates keratin filaments in the stratum corneum — FLG loss-of-function increases atopic dermatitis and ichthyosis vulgaris risk",
  "intrinsic-factor":
    "Gastric parietal cell glycoprotein that binds B12 for ileal absorption — autoantibodies cause pernicious anemia",
  "tyrosine-hydroxylase":
    "Tyrosine hydroxylase tetramer — rate-limiting enzyme converting tyrosine to L-DOPA in catecholamine synthesis",
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
