import type { ClinicalStrategyEntry } from "./clinicalStrategies";
import type { MediaAttribution } from "./media";

import hundredPercentOxygen from "../media/images/clinical-strategies/hundred-percent-oxygen.jpg?url";

export type ClinicalStrategyImageId = Extract<
  ClinicalStrategyEntry["id"],
  "hundred-percent-oxygen"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/clinical-strategies/SOURCES.txt */
export const CLINICAL_STRATEGY_IMAGES: Partial<
  Record<ClinicalStrategyImageId, string>
> = {
  "hundred-percent-oxygen": extensionAssetUrl(hundredPercentOxygen),
};

export const CLINICAL_STRATEGY_IMAGE_ATTRIBUTIONS: Partial<
  Record<ClinicalStrategyImageId, MediaAttribution>
> = {
  "hundred-percent-oxygen": {
    label: "Wikimedia Commons (Non Rebreather Mask.JPG)",
    url: "https://commons.wikimedia.org/wiki/File:Non_Rebreather_Mask.JPG",
  },
};

export const CLINICAL_STRATEGY_IMAGE_CAPTIONS: Partial<
  Record<ClinicalStrategyImageId, string>
> = {
  "hundred-percent-oxygen":
    "Non-rebreather mask delivering high-flow 100% oxygen — first-line acute cluster headache therapy",
};

export function getClinicalStrategyImageForId(
  id: string,
): string | undefined {
  return CLINICAL_STRATEGY_IMAGES[id as ClinicalStrategyImageId];
}

export function getClinicalStrategyImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return CLINICAL_STRATEGY_IMAGE_ATTRIBUTIONS[id as ClinicalStrategyImageId];
}

export function getClinicalStrategyImageCaptionForId(
  id: string,
): string | undefined {
  return CLINICAL_STRATEGY_IMAGE_CAPTIONS[id as ClinicalStrategyImageId];
}
