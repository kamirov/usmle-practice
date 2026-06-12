import type { MediaAttribution } from "./media";
import type { ConditionEntry } from "./conditions";

import raggedRedFibersGomori from "../media/images/conditions/ragged-red-fibers-gomori.jpg?url";
import uterineFibroids from "../media/images/conditions/uterine-fibroids.png?url";
import molarPregnancyUltrasound from "../media/images/conditions/molar-pregnancy-ultrasound.jpg?url";

export type ConditionImageId = Extract<
  ConditionEntry["id"],
  "mitochondrial-encephalomyopathy" | "uterine-fibroid" | "hydatidiform-mole"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/conditions/SOURCES.txt */
export const CONDITION_IMAGES: Partial<Record<ConditionImageId, string>> = {
  "mitochondrial-encephalomyopathy": extensionAssetUrl(raggedRedFibersGomori),
  "uterine-fibroid": extensionAssetUrl(uterineFibroids),
  "hydatidiform-mole": extensionAssetUrl(molarPregnancyUltrasound),
};

export const CONDITION_IMAGE_ATTRIBUTIONS: Partial<
  Record<ConditionImageId, MediaAttribution>
> = {
  "mitochondrial-encephalomyopathy": {
    label: "Wikimedia Commons (Nephron, CC BY-SA 3.0)",
    url: "https://commons.wikimedia.org/wiki/File:Ragged_red_fibres_-_gtc_-_very_high_mag.jpg",
  },
  "uterine-fibroid": {
    label: "Wikimedia Commons (Mysid, from CDC image, public domain)",
    url: "https://commons.wikimedia.org/wiki/File:Uterine_fibroids.png",
  },
  "hydatidiform-mole": {
    label: "Wikimedia Commons (Mikael Häggström, CC0)",
    url: "https://commons.wikimedia.org/wiki/File:Molar_pregnancy.jpg",
  },
};

export const CONDITION_IMAGE_CAPTIONS: Partial<
  Record<ConditionImageId, string>
> = {
  "mitochondrial-encephalomyopathy":
    "Ragged red fibers (subsarcolemmal mitochondrial aggregates) on Gomori trichrome muscle biopsy in mitochondrial myopathy",
  "uterine-fibroid":
    "Uterine fibroid locations: subserosal, intramural, submucosal, pedunculated, and intraligamentous leiomyomas",
  "hydatidiform-mole":
    "Transvaginal ultrasound of molar pregnancy — classic 'snowstorm' / bunch-of-grapes intrauterine pattern",
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
