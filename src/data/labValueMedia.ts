import type { LabValueEntry } from "./labValues";
import type { MediaAttribution } from "./media";

import dhrFlow from "../media/images/lab-values/dihydrorhodamine-flow-cytometry.svg?url";
import oligoclonalBands from "../media/images/lab-values/oligoclonal-bands.svg?url";

export type LabValueImageId = Extract<
  LabValueEntry["id"],
  "dihydrorhodamine-flow-cytometry" | "oligoclonal-bands"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/lab-values/SOURCES.txt */
export const LAB_VALUE_IMAGES: Partial<Record<LabValueImageId, string>> = {
  "dihydrorhodamine-flow-cytometry": extensionAssetUrl(dhrFlow),
  "oligoclonal-bands": extensionAssetUrl(oligoclonalBands),
};

export const LAB_VALUE_IMAGE_ATTRIBUTIONS: Partial<
  Record<LabValueImageId, MediaAttribution>
> = {
  "dihydrorhodamine-flow-cytometry": {
    label: "Created locally; reference: Flow cytometry",
    url: "https://en.wikipedia.org/wiki/Flow_cytometry",
  },
  "oligoclonal-bands": {
    label: "Created locally; reference: Oligoclonal band",
    url: "https://en.wikipedia.org/wiki/Oligoclonal_band",
  },
};

export const LAB_VALUE_IMAGE_CAPTIONS: Partial<
  Record<LabValueImageId, string>
> = {
  "dihydrorhodamine-flow-cytometry":
    "DHR test: normal neutrophils convert DHR to fluorescent rhodamine; CGD shows low/absent fluorescence",
  "oligoclonal-bands":
    "CSF-specific IgG bands not present in serum — intrathecal synthesis in MS",
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
