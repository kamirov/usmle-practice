import type { MediaAttribution } from "./media";
import type { ConditionEntry } from "./conditions";

import raggedRedFibersGomori from "../media/images/conditions/ragged-red-fibers-gomori.jpg?url";

export type ConditionImageId = ConditionEntry["id"];

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/conditions/SOURCES.txt */
export const CONDITION_IMAGES: Partial<Record<ConditionImageId, string>> = {
  "mitochondrial-encephalomyopathy": extensionAssetUrl(raggedRedFibersGomori),
};

export const CONDITION_IMAGE_ATTRIBUTIONS: Partial<
  Record<ConditionImageId, MediaAttribution>
> = {
  "mitochondrial-encephalomyopathy": {
    label: "Wikimedia Commons (Nephron, CC BY-SA 3.0)",
    url: "https://commons.wikimedia.org/wiki/File:Ragged_red_fibres_-_gtc_-_very_high_mag.jpg",
  },
};

export const CONDITION_IMAGE_CAPTIONS: Partial<
  Record<ConditionImageId, string>
> = {
  "mitochondrial-encephalomyopathy":
    "Ragged red fibers (subsarcolemmal mitochondrial aggregates) on Gomori trichrome muscle biopsy in mitochondrial myopathy",
};

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
