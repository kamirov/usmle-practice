import type { MediaAttribution } from "./media";
import type { OrganEntry } from "./organs";

import gingivaOral from "../media/images/organs/gingiva-oral.jpg?url";

export type OrganImageId = Extract<OrganEntry["id"], "gingiva-oral">;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/organs/SOURCES.txt */
export const ORGAN_IMAGES: Partial<Record<OrganImageId, string>> = {
  "gingiva-oral": extensionAssetUrl(gingivaOral),
};

export const ORGAN_IMAGE_ATTRIBUTIONS: Partial<
  Record<OrganImageId, MediaAttribution>
> = {
  "gingiva-oral": {
    label: "Wikimedia Commons (Gingiva.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Gingiva.jpg",
  },
};

export const ORGAN_IMAGE_CAPTIONS: Partial<Record<OrganImageId, string>> = {
  "gingiva-oral":
    "Gingiva around teeth — keratinized oral mucosa relevant to periodontal inflammation and vitamin deficiency findings",
};

export function getOrganImageForId(id: string): string | undefined {
  return ORGAN_IMAGES[id as OrganImageId];
}

export function getOrganImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return ORGAN_IMAGE_ATTRIBUTIONS[id as OrganImageId];
}

export function getOrganImageCaptionForId(id: string): string | undefined {
  return ORGAN_IMAGE_CAPTIONS[id as OrganImageId];
}
