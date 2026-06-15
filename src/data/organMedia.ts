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
import meninges from "../media/images/organs/meninges.svg?url";
import opticChiasm from "../media/images/organs/optic-chiasm.png?url";
import rightAtrium from "../media/images/organs/right-atrium.png?url";
import cristaTerminalis from "../media/images/organs/crista-terminalis.png?url";
import cavotricuspidIsthmus from "../media/images/organs/cavotricuspid-isthmus.png?url";
import avNode from "../media/images/organs/av-node.jpg?url";
import hisPurkinjeSystem from "../media/images/organs/his-purkinje-system.png?url";
import caudate from "../media/images/organs/caudate.png?url";
import caudaEquina from "../media/images/organs/cauda-equina.png?url";
import mammillaryBodies from "../media/images/organs/mammillary-bodies.jpg?url";
import papillaryMuscle from "../media/images/organs/papillary-muscle.png?url";
import putamen from "../media/images/organs/putamen.png?url";
import medianSulcusOfTheTongue from "../media/images/organs/median-sulcus-of-the-tongue.jpg?url";
import foramenCecum from "../media/images/organs/foramen-cecum.jpg?url";
import septumPellucidum from "../media/images/organs/septum-pellucidum.jpg?url";
import arachnoidVilli from "../media/images/organs/arachnoid-villi.jpg?url";

export type OrganImageId = Extract<
  OrganEntry["id"],
  | "dermis"
  | "epidermis"
  | "gingiva-oral"
  | "forebrain"
  | "prosencephalon"
  | "midbrain"
  | "optic-chiasm"
  | "hindbrain"
  | "lateral-ventricles"
  | "meninges"
  | "right-atrium"
  | "crista-terminalis"
  | "cavotricuspid-isthmus"
  | "av-node"
  | "his-purkinje-system"
  | "caudate"
  | "cauda-equina"
  | "mammillary-bodies"
  | "papillary-muscle"
  | "putamen"
  | "median-sulcus-of-the-tongue"
  | "foramen-cecum"
  | "septum-pellucidum"
  | "arachnoid-villi"
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
  "optic-chiasm": extensionAssetUrl(opticChiasm),
  hindbrain: extensionAssetUrl(hindbrain),
  "lateral-ventricles": extensionAssetUrl(lateralVentricles),
  meninges: extensionAssetUrl(meninges),
  "right-atrium": extensionAssetUrl(rightAtrium),
  "crista-terminalis": extensionAssetUrl(cristaTerminalis),
  "cavotricuspid-isthmus": extensionAssetUrl(cavotricuspidIsthmus),
  "av-node": extensionAssetUrl(avNode),
  "his-purkinje-system": extensionAssetUrl(hisPurkinjeSystem),
  caudate: extensionAssetUrl(caudate),
  "cauda-equina": extensionAssetUrl(caudaEquina),
  "mammillary-bodies": extensionAssetUrl(mammillaryBodies),
  "papillary-muscle": extensionAssetUrl(papillaryMuscle),
  putamen: extensionAssetUrl(putamen),
  "median-sulcus-of-the-tongue": extensionAssetUrl(medianSulcusOfTheTongue),
  "foramen-cecum": extensionAssetUrl(foramenCecum),
  "septum-pellucidum": extensionAssetUrl(septumPellucidum),
  "arachnoid-villi": extensionAssetUrl(arachnoidVilli),
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
  "optic-chiasm": {
    label: "Wikimedia Commons (Gray729.png)",
    url: "https://commons.wikimedia.org/wiki/File:Gray729.png",
  },
  hindbrain: {
    label: "Wikimedia Commons (Lateral Ventricles - DK ATLAS.png)",
    url: "https://commons.wikimedia.org/wiki/File:Lateral_Ventricles_-_DK_ATLAS.png",
  },
  "lateral-ventricles": {
    label: "Wikimedia Commons (Lateral Ventricles - DK ATLAS.png)",
    url: "https://commons.wikimedia.org/wiki/File:Lateral_Ventricles_-_DK_ATLAS.png",
  },
  meninges: {
    label: "Wikimedia Commons (Meninges-en.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Meninges-en.svg",
  },
  "right-atrium": {
    label: "Wikimedia Commons (Right atrium.png)",
    url: "https://commons.wikimedia.org/wiki/File:Right_atrium.png",
  },
  "crista-terminalis": {
    label: "Wikimedia Commons (Crista terminalis.png)",
    url: "https://commons.wikimedia.org/wiki/File:Crista_terminalis.png",
  },
  "cavotricuspid-isthmus": {
    label: "Wikimedia Commons (Cavotricuspid isthmus.png)",
    url: "https://commons.wikimedia.org/wiki/File:Cavotricuspid_isthmus.png",
  },
  "av-node": {
    label: "Wikimedia Commons (Triangle of Koch (large).jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Triangle_of_Koch_(large).jpg",
  },
  "his-purkinje-system": {
    label: "Wikimedia Commons (Electrical conduction system of the heart it.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Electrical_conduction_system_of_the_heart_it.svg",
  },
  caudate: {
    label: "Wikimedia Commons (Overview of reward structures in the human brain.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Overview_of_reward_structures_in_the_human_brain.jpg",
  },
  "cauda-equina": {
    label: "Wikimedia Commons (Gray662.png)",
    url: "https://commons.wikimedia.org/wiki/File:Gray662.png",
  },
  "mammillary-bodies": {
    label:
      "Wikimedia Commons (Human brain left midsagitttal view closeup description 2.JPG)",
    url: "https://commons.wikimedia.org/wiki/File:Human_brain_left_midsagitttal_view_closeup_description_2.JPG",
  },
  "papillary-muscle": {
    label: "Wikimedia Commons (Chordae tendineae spuriae of left ventricle.png)",
    url: "https://commons.wikimedia.org/wiki/File:Chordae_tendineae_spuriae_of_left_ventricle.png",
  },
  putamen: {
    label: "Wikimedia Commons (Overview of reward structures in the human brain.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Overview_of_reward_structures_in_the_human_brain.jpg",
  },
  "median-sulcus-of-the-tongue": {
    label: "CDC PHIL #8325",
    url: "https://phil.cdc.gov/Details.aspx?pid=8325",
  },
  "foramen-cecum": {
    label: "CDC PHIL #12080",
    url: "https://phil.cdc.gov/Details.aspx?pid=12080",
  },
  "septum-pellucidum": {
    label: "Wikimedia Commons (Cavum septi pellucidi - Cavum vergae.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Cavum_septi_pellucidi_-_Cavum_vergae.jpg",
  },
  "arachnoid-villi": {
    label:
      "Wikimedia Commons (Pacchionische Granulation mit kleiner Enzephalozele 60M - MR - 001.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Pacchionische_Granulation_mit_kleiner_Enzephalozele_60M_-_MR_-_001.jpg",
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
  "optic-chiasm":
    "Optic chiasm — nasal retinal fibers decussate above the sella turcica",
  hindbrain:
    "Hindbrain (rhombencephalon) — pons, cerebellum, and medulla oblongata",
  "lateral-ventricles":
    "Lateral ventricles within the telencephalon — CSF-filled cavities connected to the third ventricle via foramen of Monro",
  meninges:
    "Cranial meninges — dura mater, arachnoid mater, pia mater, and subarachnoid space containing CSF",
  "right-atrium":
    "Right atrium — receives SVC, IVC, and coronary sinus; contains fossa ovalis, crista terminalis, and SA node",
  "crista-terminalis":
    "Crista terminalis — internal ridge separating smooth sinus venarum from trabeculated right atrial appendage",
  "cavotricuspid-isthmus":
    "Cavotricuspid isthmus — low right atrial isthmus targeted in typical atrial flutter ablation",
  "av-node":
    "Triangle of Koch — anatomic boundaries containing the atrioventricular node in the interatrial septum",
  "his-purkinje-system":
    "Cardiac conduction system — AV node, bundle of His, bundle branches, and Purkinje fibers synchronize ventricular depolarization",
  caudate:
    "Caudate nucleus — C-shaped dorsal striatum wrapping the lateral ventricle; degenerates in Huntington disease",
  "cauda-equina":
    "Cauda equina — lumbosacral nerve roots below the conus medullaris resembling a horse's tail within the thecal sac",
  "mammillary-bodies":
    "Midsagittal brain — mammillary bodies on the ventral hypothalamus; injured in Wernicke-Korsakoff syndrome",
  "papillary-muscle":
    "Papillary muscles and chordae tendineae anchoring atrioventricular valve leaflets in the left ventricle",
  putamen:
    "Putamen — outer lentiform nucleus component of dorsal striatum; target of nigrostriatal dopamine",
  "median-sulcus-of-the-tongue":
    "Dorsal tongue anatomy — midline median sulcus dividing the tongue into right and left halves",
  "foramen-cecum":
    "Thyroglossal duct embryology — foramen cecum marks thyroid diverticulum origin at the tongue base",
  "septum-pellucidum":
    "Septum pellucidum — thin midline membrane separating the lateral ventricles beneath the corpus callosum",
  "arachnoid-villi":
    "Arachnoid granulations (Pacchionian bodies) — arachnoid villi protruding into dural venous sinuses for CSF reabsorption",
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
