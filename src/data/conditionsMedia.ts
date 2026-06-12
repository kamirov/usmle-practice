import type { MediaAttribution } from "./media";
import type { ConditionEntry } from "./conditions";

import raggedRedFibersGomori from "../media/images/conditions/ragged-red-fibers-gomori.jpg?url";
import uterineFibroids from "../media/images/conditions/uterine-fibroids.png?url";
import molarPregnancyUltrasound from "../media/images/conditions/molar-pregnancy-ultrasound.jpg?url";
import ovarianDermoidCystHistology from "../media/images/conditions/ovarian-dermoid-cyst-histology.jpg?url";
import rockyMountainSpottedFeverRash from "../media/images/conditions/rocky-mountain-spotted-fever-rash.jpg?url";
import dengueRecoveryRash from "../media/images/conditions/dengue-recovery-rash.jpg?url";
import chikungunyaRash from "../media/images/conditions/chikungunya-rash.jpg?url";
import typhoidFeverRoseSpots from "../media/images/conditions/typhoid-fever-rose-spots.jpg?url";
import meningesDiagram from "../media/images/conditions/meninges-diagram.svg?url";

export type ConditionImageId = Extract<
  ConditionEntry["id"],
  | "mitochondrial-encephalomyopathy"
  | "uterine-fibroid"
  | "hydatidiform-mole"
  | "teratoma"
  | "rocky-mountain-spotted-fever"
  | "typhoid-fever"
  | "dengue-fever"
  | "chikungunya-fever"
  | "meningitis"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/conditions/SOURCES.txt */
export const CONDITION_IMAGES: Partial<Record<ConditionImageId, string>> = {
  "mitochondrial-encephalomyopathy": extensionAssetUrl(raggedRedFibersGomori),
  "uterine-fibroid": extensionAssetUrl(uterineFibroids),
  "hydatidiform-mole": extensionAssetUrl(molarPregnancyUltrasound),
  teratoma: extensionAssetUrl(ovarianDermoidCystHistology),
  "rocky-mountain-spotted-fever": extensionAssetUrl(
    rockyMountainSpottedFeverRash,
  ),
  "typhoid-fever": extensionAssetUrl(typhoidFeverRoseSpots),
  "dengue-fever": extensionAssetUrl(dengueRecoveryRash),
  "chikungunya-fever": extensionAssetUrl(chikungunyaRash),
  meningitis: extensionAssetUrl(meningesDiagram),
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
  teratoma: {
    label: "Wikimedia Commons (Koumoutsea et al., CC BY 3.0)",
    url: "https://commons.wikimedia.org/wiki/File:Histopathology_of_ovarian_dermoid_cyst.jpg",
  },
  "rocky-mountain-spotted-fever": {
    label: "CDC PHIL (public domain)",
    url: "https://commons.wikimedia.org/wiki/File:Rocky_mountain_spotted_fever.jpg",
  },
  "typhoid-fever": {
    label: "CDC PHIL #2215 (public domain)",
    url: "https://commons.wikimedia.org/wiki/File:Salmonella_typhi_typhoid_fever_PHIL_2215_lores.jpg",
  },
  "dengue-fever": {
    label: "Wikimedia Commons (Ranjan Premaratna, CC BY-SA 4.0)",
    url: "https://commons.wikimedia.org/wiki/File:Dengue_recovery_rash_(White_islands_in_red_sea).jpg",
  },
  "chikungunya-fever": {
    label: "Wikimedia Commons (Uwe Gille, CC BY-SA 3.0)",
    url: "https://commons.wikimedia.org/wiki/File:2012-01-09_Chikungunya_on_the_belly_at_The_Philippines.jpeg",
  },
  meningitis: {
    label: "Wikimedia Commons (Mysid/Jmarchn, CC BY-SA 3.0)",
    url: "https://commons.wikimedia.org/wiki/File:Meninges-en.svg",
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
  teratoma:
    "H&E histology of ovarian dermoid cyst (mature cystic teratoma) — well-differentiated tissues from multiple germ layers",
  "rocky-mountain-spotted-fever":
    "Characteristic spotted rash of Rocky Mountain spotted fever on the wrist and hand",
  "typhoid-fever":
    "Rose spots on the chest in typhoid fever due to Salmonella Typhi",
  "dengue-fever":
    "Dengue recovery rash — classic 'white islands in a sea of red' pattern",
  "chikungunya-fever":
    "Maculopapular chikungunya rash on the abdomen during acute illness",
  meningitis:
    "Cross-section of cranial meninges — dura mater, arachnoid mater, pia mater, and subarachnoid space",
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
