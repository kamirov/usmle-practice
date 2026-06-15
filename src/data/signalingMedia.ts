import type { MediaAttribution } from "./media";
import type { SignalingEntry } from "./signaling";

import hypocretin1 from "../media/images/signaling/hypocretin-1.png?url";
import hypocretin2 from "../media/images/signaling/hypocretin-2.jpg?url";
import insulinLikeGrowthFactor1 from "../media/images/signaling/insulin-like-growth-factor-1.jpg?url";

export type SignalingImageId = Extract<
  SignalingEntry["id"],
  "hypocretin-1" | "hypocretin-2" | "insulin-like-growth-factor-1"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/signaling/SOURCES.txt */
export const SIGNALING_IMAGES: Partial<Record<SignalingImageId, string>> = {
  "hypocretin-1": extensionAssetUrl(hypocretin1),
  "hypocretin-2": extensionAssetUrl(hypocretin2),
  "insulin-like-growth-factor-1": extensionAssetUrl(insulinLikeGrowthFactor1),
};

export const SIGNALING_IMAGE_ATTRIBUTIONS: Partial<
  Record<SignalingImageId, MediaAttribution>
> = {
  "hypocretin-1": {
    label: "Local reference; lateral hypothalamic orexin neurons",
    url: "https://en.wikipedia.org/wiki/Orexin",
  },
  "hypocretin-2": {
    label: "Wikimedia Commons (Fendo-04-00018-g001.jpg), CC BY 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Fendo-04-00018-g001.jpg",
  },
  "insulin-like-growth-factor-1": {
    label: "Wikimedia Commons (Acromegaly facial features.JPEG)",
    url: "https://commons.wikimedia.org/wiki/File:Acromegaly_facial_features.JPEG",
  },
};

export const SIGNALING_IMAGE_CAPTIONS: Partial<
  Record<SignalingImageId, string>
> = {
  "hypocretin-1":
    "Orexin A (hypocretin-1) from lateral hypothalamic neurons — loss causes narcolepsy type 1 with cataplexy",
  "hypocretin-2":
    "Orexin/hypocretin signaling in appetite and sleep regulation — orexin B preferentially activates OX2R",
  "insulin-like-growth-factor-1":
    "Chronic GH excess elevates IGF-1 — acral and facial overgrowth in acromegaly",
};

export function getSignalingImageForId(id: string): string | undefined {
  return SIGNALING_IMAGES[id as SignalingImageId];
}

export function getSignalingImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return SIGNALING_IMAGE_ATTRIBUTIONS[id as SignalingImageId];
}

export function getSignalingImageCaptionForId(id: string): string | undefined {
  return SIGNALING_IMAGE_CAPTIONS[id as SignalingImageId];
}
