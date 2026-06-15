import type { MediaAttribution } from "./media";
import type { SignalingEntry } from "./signaling";

import alpha1AdrenergicReceptor from "../media/images/signaling/alpha-1-adrenergic-receptor.svg?url";
import dopamineD2Receptor from "../media/images/signaling/dopamine-d2-receptor.png?url";
import gabaAReceptor from "../media/images/signaling/gaba-a-receptor.svg?url";
import histamineH1Receptor from "../media/images/signaling/histamine-h1-receptor.svg?url";
import hypocretin1 from "../media/images/signaling/hypocretin-1.png?url";
import hypocretin2 from "../media/images/signaling/hypocretin-2.jpg?url";
import insulinLikeGrowthFactor1 from "../media/images/signaling/insulin-like-growth-factor-1.jpg?url";
import melatonin from "../media/images/signaling/melatonin.svg?url";
import muscarinicM1Receptor from "../media/images/signaling/muscarinic-m1-receptor.png?url";
import serotonin5Ht2aReceptor from "../media/images/signaling/serotonin-5-ht2a-receptor.svg?url";

export type SignalingImageId = Extract<
  SignalingEntry["id"],
  | "alpha-1-adrenergic-receptor"
  | "dopamine-d2-receptor"
  | "gaba-a-receptor"
  | "histamine-h1-receptor"
  | "hypocretin-1"
  | "hypocretin-2"
  | "insulin-like-growth-factor-1"
  | "melatonin"
  | "muscarinic-m1-receptor"
  | "serotonin-5-ht2a-receptor"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/signaling/SOURCES.txt */
export const SIGNALING_IMAGES: Partial<Record<SignalingImageId, string>> = {
  "alpha-1-adrenergic-receptor": extensionAssetUrl(alpha1AdrenergicReceptor),
  "dopamine-d2-receptor": extensionAssetUrl(dopamineD2Receptor),
  "gaba-a-receptor": extensionAssetUrl(gabaAReceptor),
  "histamine-h1-receptor": extensionAssetUrl(histamineH1Receptor),
  "hypocretin-1": extensionAssetUrl(hypocretin1),
  "hypocretin-2": extensionAssetUrl(hypocretin2),
  "insulin-like-growth-factor-1": extensionAssetUrl(insulinLikeGrowthFactor1),
  melatonin: extensionAssetUrl(melatonin),
  "muscarinic-m1-receptor": extensionAssetUrl(muscarinicM1Receptor),
  "serotonin-5-ht2a-receptor": extensionAssetUrl(serotonin5Ht2aReceptor),
};

export const SIGNALING_IMAGE_ATTRIBUTIONS: Partial<
  Record<SignalingImageId, MediaAttribution>
> = {
  "alpha-1-adrenergic-receptor": {
    label: "Local copy from conditions/anaphylaxis.svg",
    url: "https://commons.wikimedia.org/wiki/File:Anaphylaxis.svg",
  },
  "dopamine-d2-receptor": {
    label: "Local copy from pathogenesis/postsynaptic-dopamine.png",
    url: "https://commons.wikimedia.org/wiki/File:TAAR1_Dopamine.svg",
  },
  "gaba-a-receptor": {
    label: "Local copy from medications/diazepam.svg",
    url: "https://commons.wikimedia.org/wiki/File:Diazepam_structure.svg",
  },
  "histamine-h1-receptor": {
    label: "Local copy from medications/diphenhydramine.svg",
    url: "https://commons.wikimedia.org/wiki/File:Diphenhydramine.svg",
  },
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
  melatonin: {
    label: "Local copy from medications/ramelteon.svg",
    url: "https://commons.wikimedia.org/wiki/File:Ramelteon.svg",
  },
  "muscarinic-m1-receptor": {
    label: "Wikimedia Commons (Muscarinic receptor M1 coupled to protein G - 6OIJ.png)",
    url: "https://commons.wikimedia.org/wiki/File:Muscarinic_receptor_M1_coupled_to_protein_G_-_6OIJ.png",
  },
  "serotonin-5-ht2a-receptor": {
    label: "Local copy from medications/quetiapine.svg",
    url: "https://commons.wikimedia.org/wiki/File:Quetiapine.svg",
  },
};

export const SIGNALING_IMAGE_CAPTIONS: Partial<
  Record<SignalingImageId, string>
> = {
  "alpha-1-adrenergic-receptor":
    "α1 adrenergic Gq signaling — vasoconstriction and mydriasis from norepinephrine/epinephrine",
  "dopamine-d2-receptor":
    "Dopamine D2 receptor Gi signaling — antipsychotic target and prolactin regulation",
  "gaba-a-receptor":
    "Diazepam structure — benzodiazepines bind GABA-A to enhance inhibitory Cl⁻ channel opening",
  "histamine-h1-receptor":
    "First-generation H1 antihistamine mechanism — diphenhydramine blocks muscarinic and H1 receptors",
  "hypocretin-1":
    "Orexin A (hypocretin-1) from lateral hypothalamic neurons — loss causes narcolepsy type 1 with cataplexy",
  "hypocretin-2":
    "Orexin/hypocretin signaling in appetite and sleep regulation — orexin B preferentially activates OX2R",
  "insulin-like-growth-factor-1":
    "Chronic GH excess elevates IGF-1 — acral and facial overgrowth in acromegaly",
  melatonin: "Melatonin MT1/MT2 receptor agonism — circadian sleep-onset pathway",
  "muscarinic-m1-receptor":
    "Cryo-EM structure of M1 muscarinic acetylcholine receptor coupled to G protein",
  "serotonin-5-ht2a-receptor":
    "Atypical antipsychotic 5-HT2A antagonism — reduces EPS when combined with D2 blockade",
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
