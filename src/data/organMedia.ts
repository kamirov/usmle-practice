import type { MediaAttribution } from "./media";
import type { OrganEntry } from "./organs";

import dermis from "../media/images/organs/dermis.png?url";
import epidermis from "../media/images/organs/epidermis.png?url";
import gingivaOral from "../media/images/organs/gingiva-oral.jpg?url";
import forebrain from "../media/images/organs/forebrain.svg?url";
import prosencephalon from "../media/images/organs/prosencephalon.jpg?url";
import midbrain from "../media/images/organs/midbrain.jpg?url";
import hindbrain from "../media/images/organs/hindbrain.jpg?url";
import lateralVentricles from "../media/images/organs/lateral-ventricles.svg?url";

export type OrganImageId = Extract<
  OrganEntry["id"],
  | "dermis"
  | "epidermis"
  | "gingiva-oral"
  | "forebrain"
  | "prosencephalon"
  | "midbrain"
  | "hindbrain"
  | "lateral-ventricles"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/organs/SOURCES.txt */
export const ORGAN_IMAGES: Partial<Record<OrganImageId, string>> = {
  dermis: extensionAssetUrl(dermis),
  epidermis: extensionAssetUrl(epidermis),
  "gingiva-oral": extensionAssetUrl(gingivaOral),
  forebrain: extensionAssetUrl(forebrain),
  prosencephalon: extensionAssetUrl(prosencephalon),
  midbrain: extensionAssetUrl(midbrain),
  hindbrain: extensionAssetUrl(hindbrain),
  "lateral-ventricles": extensionAssetUrl(lateralVentricles),
};

export const ORGAN_IMAGE_ATTRIBUTIONS: Partial<
  Record<OrganImageId, MediaAttribution>
> = {
  dermis: {
    label: "Wikimedia Commons (Epidermis, papillary dermis and reticular dermis.png)",
    url: "https://commons.wikimedia.org/wiki/File:Epidermis,_papillary_dermis_and_reticular_dermis.png",
  },
  epidermis: {
    label: "Wikimedia Commons (502 Layers of epidermis (no labels).png)",
    url: "https://commons.wikimedia.org/wiki/File:502_Layers_of_epidermis_(no_labels).png",
  },
  "gingiva-oral": {
    label: "Wikimedia Commons (Gingiva.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Gingiva.jpg",
  },
  forebrain: {
    label: "Wikimedia Commons (Brain diagram fr.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Brain_diagram_fr.svg",
  },
  prosencephalon: {
    label: "Wikimedia Commons (Brain-embr.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Brain-embr.jpg",
  },
  midbrain: {
    label: "Wikimedia Commons (Midbrain-axial-showing-tectum-and-tegmentum.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Midbrain-axial-showing-tectum-and-tegmentum.jpg",
  },
  hindbrain: {
    label: "Wikimedia Commons (Lateral Ventricles - DK ATLAS.png)",
    url: "https://commons.wikimedia.org/wiki/File:Lateral_Ventricles_-_DK_ATLAS.png",
  },
  "lateral-ventricles": {
    label: "Wikimedia Commons (Lateral Ventricles - DK ATLAS.png)",
    url: "https://commons.wikimedia.org/wiki/File:Lateral_Ventricles_-_DK_ATLAS.png",
  },
};

export const ORGAN_IMAGE_CAPTIONS: Partial<Record<OrganImageId, string>> = {
  dermis:
    "Dermis — mesoderm-derived connective tissue with collagen, vessels, nerves, and appendages",
  epidermis:
    "Epidermis — ectoderm-derived stratified squamous epithelium forming the skin barrier",
  "gingiva-oral":
    "Gingiva around teeth — keratinized oral mucosa relevant to periodontal inflammation and vitamin deficiency findings",
  forebrain:
    "Forebrain (prosencephalon) — cerebral hemispheres and diencephalon forming the rostral brain",
  prosencephalon:
    "Embryologic forebrain vesicle dividing into telencephalon and diencephalon",
  midbrain:
    "Axial midbrain (mesencephalon) — tectum and tegmentum with cerebral aqueduct",
  hindbrain:
    "Hindbrain (rhombencephalon) — pons, cerebellum, and medulla oblongata",
  "lateral-ventricles":
    "Lateral ventricles within the telencephalon — CSF-filled cavities connected to the third ventricle via foramen of Monro",
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
