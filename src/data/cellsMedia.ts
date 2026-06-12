import type { MediaAttribution } from "./media";
import type { CellEntry } from "./cells";

import mitochondrialRespiratoryChain from "../media/images/cells/mitochondrial-respiratory-chain.svg?url";

export type CellImageId = Extract<CellEntry["id"], "oxidative-phosphorylation">;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/cells/SOURCES.txt */
export const CELL_IMAGES: Partial<Record<CellImageId, string>> = {
  "oxidative-phosphorylation": extensionAssetUrl(mitochondrialRespiratoryChain),
};

export const CELL_IMAGE_ATTRIBUTIONS: Partial<
  Record<CellImageId, MediaAttribution>
> = {
  "oxidative-phosphorylation": {
    label: "Wikimedia Commons (Kelvinsong & TheBartgry, CC BY-SA 4.0)",
    url: "https://commons.wikimedia.org/wiki/File:Mitochondrial_respiratory_chain.svg",
  },
};

export const CELL_IMAGE_CAPTIONS: Partial<Record<CellImageId, string>> = {
  "oxidative-phosphorylation":
    "Inner mitochondrial membrane respiratory chain: complexes I–IV pass electrons to O₂; proton pumping drives ATP synthase (Complex V)",
};

export function getCellImageForId(id: string): string | undefined {
  return CELL_IMAGES[id as CellImageId];
}

export function getCellImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return CELL_IMAGE_ATTRIBUTIONS[id as CellImageId];
}

export function getCellImageCaptionForId(id: string): string | undefined {
  return CELL_IMAGE_CAPTIONS[id as CellImageId];
}
