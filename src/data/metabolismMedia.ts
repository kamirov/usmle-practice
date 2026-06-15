import type { MediaAttribution } from "./media";
import type { MetabolismEntry } from "./metabolism";

import tetrahydrobiopterin from "../media/images/metabolism/tetrahydrobiopterin.png?url";
import nadph from "../media/images/metabolism/nadph.png?url";

export type MetabolismImageId = Extract<
  MetabolismEntry["id"],
  "tetrahydrobiopterin" | "nadph"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/metabolism/SOURCES.txt */
export const METABOLISM_IMAGES: Partial<Record<MetabolismImageId, string>> = {
  tetrahydrobiopterin: extensionAssetUrl(tetrahydrobiopterin),
  nadph: extensionAssetUrl(nadph),
};

export const METABOLISM_IMAGE_ATTRIBUTIONS: Partial<
  Record<MetabolismImageId, MediaAttribution>
> = {
  tetrahydrobiopterin: {
    label:
      "Wikimedia Commons (Biosynthesis and regeneration of tetrahydrobiopterin and its functions.png)",
    url: "https://commons.wikimedia.org/wiki/File:Biosynthesis_and_regeneration_of_tetrahydrobiopterin_and_its_functions.png",
  },
  nadph: {
    label: "Wikimedia Commons (Pentosephosphatweg NADPH.png)",
    url: "https://commons.wikimedia.org/wiki/File:Pentosephosphatweg_NADPH.png",
  },
};

export const METABOLISM_IMAGE_CAPTIONS: Partial<
  Record<MetabolismImageId, string>
> = {
  tetrahydrobiopterin:
    "BH₄ biosynthesis from GTP and cofactor role for PAH, TH, and TPH in phenylalanine catabolism and monoamine synthesis",
  nadph:
    "Pentose phosphate pathway — glucose-6-phosphate dehydrogenase generates NADPH for glutathione reduction and biosynthesis",
};

export function getMetabolismImageForId(id: string): string | undefined {
  return METABOLISM_IMAGES[id as MetabolismImageId];
}

export function getMetabolismImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return METABOLISM_IMAGE_ATTRIBUTIONS[id as MetabolismImageId];
}

export function getMetabolismImageCaptionForId(id: string): string | undefined {
  return METABOLISM_IMAGE_CAPTIONS[id as MetabolismImageId];
}
