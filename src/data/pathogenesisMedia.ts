import type { MediaAttribution } from "./media";
import type { PathogenesisEntry } from "./pathogenesis";

import bloodBrainBarrier from "../media/images/pathogenesis/blood-brain-barrier.svg?url";
import hepatotoxicity from "../media/images/pathogenesis/hepatotoxicity.jpg?url";
import lowFiberDiet from "../media/images/pathogenesis/low-fiber-diet.jpg?url";
import meconium from "../media/images/pathogenesis/meconium.jpg?url";
import oxidativeStress from "../media/images/pathogenesis/oxidative-stress.png?url";
import reuptake from "../media/images/pathogenesis/reuptake.png?url";
import acidFastBacteria from "../media/images/pathogenesis/acid-fast-bacteria.jpg?url";

export type PathogenesisImageId = Extract<
  PathogenesisEntry["id"],
  | "blood-brain-barrier"
  | "hepatotoxicity"
  | "low-fiber-diet"
  | "meconium"
  | "oxidative-stress"
  | "reuptake"
  | "acid-fast-bacteria"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/pathogenesis/SOURCES.txt */
export const PATHOGENESIS_IMAGES: Partial<
  Record<PathogenesisImageId, string>
> = {
  "blood-brain-barrier": extensionAssetUrl(bloodBrainBarrier),
  hepatotoxicity: extensionAssetUrl(hepatotoxicity),
  "low-fiber-diet": extensionAssetUrl(lowFiberDiet),
  meconium: extensionAssetUrl(meconium),
  "oxidative-stress": extensionAssetUrl(oxidativeStress),
  reuptake: extensionAssetUrl(reuptake),
  "acid-fast-bacteria": extensionAssetUrl(acidFastBacteria),
};

export const PATHOGENESIS_IMAGE_ATTRIBUTIONS: Partial<
  Record<PathogenesisImageId, MediaAttribution>
> = {
  "blood-brain-barrier": {
    label: "Wikimedia Commons (Meninges diagram.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Meninges_diagram.svg",
  },
  hepatotoxicity: {
    label: "Wikimedia Commons (Cirrhosis of Alcoholic Liver Disease (5517625829).jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Cirrhosis_of_Alcoholic_Liver_Disease_(5517625829).jpg",
  },
  "low-fiber-diet": {
    label: "Wikimedia Commons (Inflammed mucous layer of the intestinal villi depicting Celiac disease.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Inflammed_mucous_layer_of_the_intestinal_villi_depicting_Celiac_disease.jpg",
  },
  meconium: {
    label: "Wikimedia Commons (Biliary atresia.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Biliary_atresia.jpg",
  },
  "oxidative-stress": {
    label: "Wikimedia Commons (Role of reactive oxygen species in development of cancer.png)",
    url: "https://commons.wikimedia.org/wiki/File:Role_of_reactive_oxygen_species_in_development_of_cancer.png",
  },
  reuptake: {
    label: "Wikimedia Commons (TAAR1 Dopamine.svg)",
    url: "https://commons.wikimedia.org/wiki/File:TAAR1_Dopamine.svg",
  },
  "acid-fast-bacteria": {
    label:
      "Wikimedia Commons (Acid fast bacilli of Mycobacterium tuberculosis.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Acid_fast_bacilli_of_Mycobacterium_tuberculosis.jpg",
  },
};

export const PATHOGENESIS_IMAGE_CAPTIONS: Partial<
  Record<PathogenesisImageId, string>
> = {
  "blood-brain-barrier":
    "CNS meningeal layers and neurovascular unit — tight junctions and astrocyte end-feet restrict paracellular passage at the blood-brain barrier",
  hepatotoxicity:
    "Alcoholic cirrhosis — chronic hepatotoxic injury with nodular regeneration and portal hypertension",
  "low-fiber-diet":
    "Low dietary fiber reduces stool bulk and slows transit — predisposes to constipation and diverticulosis",
  meconium:
    "Neonatal intestinal obstruction — failure to pass meconium suggests Hirschsprung disease or meconium ileus",
  "oxidative-stress":
    "Oxidative stress — imbalance of reactive oxygen species vs antioxidant defenses causing cellular damage",
  reuptake:
    "Presynaptic monoamine reuptake transporters — SERT, NET, and DAT terminate synaptic signaling",
  "acid-fast-bacteria":
    "Ziehl-Neelsen stain — red acid-fast bacilli (mycolic acid cell wall) of Mycobacterium tuberculosis",
};

export function getPathogenesisImageForId(id: string): string | undefined {
  return PATHOGENESIS_IMAGES[id as PathogenesisImageId];
}

export function getPathogenesisImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return PATHOGENESIS_IMAGE_ATTRIBUTIONS[id as PathogenesisImageId];
}

export function getPathogenesisImageCaptionForId(
  id: string,
): string | undefined {
  return PATHOGENESIS_IMAGE_CAPTIONS[id as PathogenesisImageId];
}
