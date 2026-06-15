import type { MediaAttribution } from "./media";
import type { MusculoskeletalEntry } from "./musculoskeletal";

import accessoryNerve from "../media/images/musculoskeletal/accessory-nerve.png?url";
import acromion from "../media/images/musculoskeletal/acromion.jpg?url";
import atlantoaxial from "../media/images/musculoskeletal/atlantoaxial.png?url";
import axillaryNerve from "../media/images/musculoskeletal/axillary-nerve.jpg?url";
import chordaTympani from "../media/images/musculoskeletal/chorda-tympani.png?url";
import cnI from "../media/images/musculoskeletal/cn-i.png?url";
import cnIi from "../media/images/musculoskeletal/cn-ii.png?url";
import cnIii from "../media/images/musculoskeletal/cn-iii.png?url";
import cnIv from "../media/images/musculoskeletal/cn-iv.png?url";
import cnVi from "../media/images/musculoskeletal/cn-vi.png?url";
import cnVii from "../media/images/musculoskeletal/cn-vii.png?url";
import cnViii from "../media/images/musculoskeletal/cn-viii.png?url";
import cnXii from "../media/images/musculoskeletal/cn-xii.png?url";
import fontanelle from "../media/images/musculoskeletal/fontanelle.png?url";
import glossopharyngealNerve from "../media/images/musculoskeletal/glossopharyngeal-nerve.png?url";
import humerus from "../media/images/musculoskeletal/humerus.jpg?url";
import infraspinatus from "../media/images/musculoskeletal/infraspinatus.png?url";
import interphalangealJoint from "../media/images/musculoskeletal/interphalangeal-joint.jpg?url";
import l1L2SpinalLevel from "../media/images/musculoskeletal/l1-l2-spinal-level.png?url";
import longThoracicNerve from "../media/images/musculoskeletal/long-thoracic-nerve.jpg?url";
import mandibularDivision from "../media/images/musculoskeletal/mandibular-division.png?url";
import maxillaryDivision from "../media/images/musculoskeletal/maxillary-division.png?url";
import metacarpophalangealJoint from "../media/images/musculoskeletal/metacarpophalangeal-joint.jpg?url";
import ophthalmicDivision from "../media/images/musculoskeletal/ophthalmic-division.png?url";
import pelvicFloor from "../media/images/musculoskeletal/pelvic-floor.png?url";
import peronealNerveCompression from "../media/images/musculoskeletal/peroneal-nerve-compression.jpg?url";
import phrenicNerve from "../media/images/musculoskeletal/phrenic-nerve.png?url";
import recurrentLaryngealNerve from "../media/images/musculoskeletal/recurrent-laryngeal-nerve.png?url";
import rotatorCuff from "../media/images/musculoskeletal/rotator-cuff.svg?url";
import s2S4SacralSegments from "../media/images/musculoskeletal/s2-s4-sacral-segments.png?url";
import sarcomereDiagram from "../media/images/musculoskeletal/sarcomere-diagram.svg?url";
import sciaticNerveInjury from "../media/images/musculoskeletal/sciatic-nerve-injury.png?url";
import subluxation from "../media/images/musculoskeletal/subluxation.jpg?url";
import subscapularis from "../media/images/musculoskeletal/subscapularis.jpg?url";
import suprascapularNerve from "../media/images/musculoskeletal/suprascapular-nerve.jpg?url";
import supraspinatus from "../media/images/musculoskeletal/supraspinatus.png?url";
import sympatheticTrunk from "../media/images/musculoskeletal/sympathetic-trunk.png?url";
import teresMinor from "../media/images/musculoskeletal/teres-minor.png?url";
import trigeminalNerve from "../media/images/musculoskeletal/trigeminal-nerve.png?url";
import vagusNerve from "../media/images/musculoskeletal/vagus-nerve.png?url";

export type MUSCULOSKELETALImageId = Extract<
  MusculoskeletalEntry["id"],
  | "accessory-nerve"
  | "acromion"
  | "atlantoaxial"
  | "axillary-nerve"
  | "chorda-tympani"
  | "cn-i"
  | "cn-ii"
  | "cn-iii"
  | "cn-iv"
  | "cn-vi"
  | "cn-vii"
  | "cn-viii"
  | "cn-xii"
  | "fontanelle"
  | "glossopharyngeal-nerve"
  | "humerus"
  | "infraspinatus"
  | "interphalangeal-joint"
  | "l1-l2-spinal-level"
  | "long-thoracic-nerve"
  | "mandibular-division"
  | "maxillary-division"
  | "metacarpophalangeal-joint"
  | "ophthalmic-division"
  | "pelvic-floor"
  | "peroneal-nerve-compression"
  | "phrenic-nerve"
  | "recurrent-laryngeal-nerve"
  | "rotator-cuff"
  | "s2-s4-sacral-segments"
  | "sarcomere"
  | "sciatic-nerve-injury"
  | "subluxation"
  | "subscapularis"
  | "suprascapular-nerve"
  | "supraspinatus"
  | "sympathetic-trunk"
  | "teres-minor"
  | "trigeminal-nerve"
  | "vagus-nerve"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/musculoskeletal/SOURCES.txt */
export const MUSCULOSKELETAL_IMAGES: Partial<Record<MUSCULOSKELETALImageId, string>> = {
  "accessory-nerve": extensionAssetUrl(accessoryNerve),
  "acromion": extensionAssetUrl(acromion),
  "atlantoaxial": extensionAssetUrl(atlantoaxial),
  "axillary-nerve": extensionAssetUrl(axillaryNerve),
  "chorda-tympani": extensionAssetUrl(chordaTympani),
  "cn-i": extensionAssetUrl(cnI),
  "cn-ii": extensionAssetUrl(cnIi),
  "cn-iii": extensionAssetUrl(cnIii),
  "cn-iv": extensionAssetUrl(cnIv),
  "cn-vi": extensionAssetUrl(cnVi),
  "cn-vii": extensionAssetUrl(cnVii),
  "cn-viii": extensionAssetUrl(cnViii),
  "cn-xii": extensionAssetUrl(cnXii),
  "fontanelle": extensionAssetUrl(fontanelle),
  "glossopharyngeal-nerve": extensionAssetUrl(glossopharyngealNerve),
  "humerus": extensionAssetUrl(humerus),
  "infraspinatus": extensionAssetUrl(infraspinatus),
  "interphalangeal-joint": extensionAssetUrl(interphalangealJoint),
  "l1-l2-spinal-level": extensionAssetUrl(l1L2SpinalLevel),
  "long-thoracic-nerve": extensionAssetUrl(longThoracicNerve),
  "mandibular-division": extensionAssetUrl(mandibularDivision),
  "maxillary-division": extensionAssetUrl(maxillaryDivision),
  "metacarpophalangeal-joint": extensionAssetUrl(metacarpophalangealJoint),
  "ophthalmic-division": extensionAssetUrl(ophthalmicDivision),
  "pelvic-floor": extensionAssetUrl(pelvicFloor),
  "peroneal-nerve-compression": extensionAssetUrl(peronealNerveCompression),
  "phrenic-nerve": extensionAssetUrl(phrenicNerve),
  "recurrent-laryngeal-nerve": extensionAssetUrl(recurrentLaryngealNerve),
  "rotator-cuff": extensionAssetUrl(rotatorCuff),
  "s2-s4-sacral-segments": extensionAssetUrl(s2S4SacralSegments),
  "sarcomere": extensionAssetUrl(sarcomereDiagram),
  "sciatic-nerve-injury": extensionAssetUrl(sciaticNerveInjury),
  "subluxation": extensionAssetUrl(subluxation),
  "subscapularis": extensionAssetUrl(subscapularis),
  "suprascapular-nerve": extensionAssetUrl(suprascapularNerve),
  "supraspinatus": extensionAssetUrl(supraspinatus),
  "sympathetic-trunk": extensionAssetUrl(sympatheticTrunk),
  "teres-minor": extensionAssetUrl(teresMinor),
  "trigeminal-nerve": extensionAssetUrl(trigeminalNerve),
  "vagus-nerve": extensionAssetUrl(vagusNerve),
};

export const MUSCULOSKELETAL_IMAGE_ATTRIBUTIONS: Partial<
  Record<MUSCULOSKELETALImageId, MediaAttribution>
> = {
  "accessory-nerve": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:accessory-nerve.png" },
  "acromion": { label: "Wikimedia Commons (Acromion of scapula02.png)", url: "https://commons.wikimedia.org/wiki/File:Acromion_of_scapula02.png" },
  "atlantoaxial": { label: "Wikimedia Commons (Abyssuridae (10.3390-d17120827) Figure 3.png)", url: "https://commons.wikimedia.org/wiki/File:Abyssuridae_(10.3390-d17120827)_Figure_3.png" },
  "axillary-nerve": { label: "Wikimedia Commons (Anatomy of the cat (1991) (18006462720).jpg)", url: "https://commons.wikimedia.org/wiki/File:Anatomy_of_the_cat_(1991)_(18006462720).jpg" },
  "chorda-tympani": { label: "Wikimedia Commons (Gray788.png)", url: "https://commons.wikimedia.org/wiki/File:Gray788.png" },
  "cn-i": { label: "Wikimedia Commons (Gray775.png)", url: "https://commons.wikimedia.org/wiki/File:Gray775.png" },
  "cn-ii": { label: "Wikimedia Commons (Gray729.png)", url: "https://commons.wikimedia.org/wiki/File:Gray729.png" },
  "cn-iii": { label: "Wikimedia Commons (Gray786.png)", url: "https://commons.wikimedia.org/wiki/File:Gray786.png" },
  "cn-iv": { label: "Wikimedia Commons (Gray787.png)", url: "https://commons.wikimedia.org/wiki/File:Gray787.png" },
  "cn-vi": { label: "Wikimedia Commons (Gray785.png)", url: "https://commons.wikimedia.org/wiki/File:Gray785.png" },
  "cn-vii": { label: "Wikimedia Commons (Gray791.png)", url: "https://commons.wikimedia.org/wiki/File:Gray791.png" },
  "cn-viii": { label: "Wikimedia Commons (Gray799.png)", url: "https://commons.wikimedia.org/wiki/File:Gray799.png" },
  "cn-xii": { label: "Wikimedia Commons (Gray795.png)", url: "https://commons.wikimedia.org/wiki/File:Gray795.png" },
  "fontanelle": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:fontanelle.png" },
  "glossopharyngeal-nerve": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:glossopharyngeal-nerve.png" },
  "humerus": { label: "Wikimedia Commons (Right humerus, anterior aspect.jpg)", url: "https://commons.wikimedia.org/wiki/File:Right_humerus,_anterior_aspect.jpg" },
  "infraspinatus": { label: "Wikimedia Commons (Gray — musculus infraspinatus.png)", url: "https://commons.wikimedia.org/wiki/File:Gray_—_musculus_infraspinatus.png" },
  "interphalangeal-joint": { label: "Wikimedia Commons (DIP, PIP and MCP joints of hand.jpg)", url: "https://commons.wikimedia.org/wiki/File:DIP,_PIP_and_MCP_joints_of_hand.jpg" },
  "l1-l2-spinal-level": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:l1-l2-spinal-level.png" },
  "long-thoracic-nerve": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:long-thoracic-nerve.jpg" },
  "mandibular-division": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:mandibular-division.png" },
  "maxillary-division": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:maxillary-division.png" },
  "metacarpophalangeal-joint": { label: "Wikimedia Commons (DIP, PIP and MCP joints of hand.jpg)", url: "https://commons.wikimedia.org/wiki/File:DIP,_PIP_and_MCP_joints_of_hand.jpg" },
  "ophthalmic-division": { label: "Wikimedia Commons (Gray780.png)", url: "https://commons.wikimedia.org/wiki/File:Gray780.png" },
  "pelvic-floor": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:pelvic-floor.png" },
  "peroneal-nerve-compression": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:peroneal-nerve-compression.jpg" },
  "phrenic-nerve": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:phrenic-nerve.png" },
  "recurrent-laryngeal-nerve": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:recurrent-laryngeal-nerve.png" },
  "rotator-cuff": { label: "Wikimedia Commons (Rotator cuff injury.svg)", url: "https://commons.wikimedia.org/wiki/File:Rotator_cuff_injury.svg" },
  "s2-s4-sacral-segments": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:s2-s4-sacral-segments.png" },
  "sarcomere": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:sarcomere-diagram.svg" },
  "sciatic-nerve-injury": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:sciatic-nerve-injury.png" },
  "subluxation": { label: "Wikimedia Commons (SubluxationLeftShoulder XRay Ax.jpg)", url: "https://commons.wikimedia.org/wiki/File:SubluxationLeftShoulder_XRay_Ax.jpg" },
  "subscapularis": { label: "Wikimedia Commons (Insertion-of-subscapularis-muscle.jpg)", url: "https://commons.wikimedia.org/wiki/File:Insertion-of-subscapularis-muscle.jpg" },
  "suprascapular-nerve": { label: "Wikimedia Commons (The anatomy of the horse - a dissection guide (1922) (17574061253).jpg)", url: "https://commons.wikimedia.org/wiki/File:The_anatomy_of_the_horse_-_a_dissection_guide_(1922)_(17574061253).jpg" },
  "supraspinatus": { label: "Wikimedia Commons (Gray — musculus supraspinatus.png)", url: "https://commons.wikimedia.org/wiki/File:Gray_—_musculus_supraspinatus.png" },
  "sympathetic-trunk": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:sympathetic-trunk.png" },
  "teres-minor": { label: "Wikimedia Commons (Gray — musculus teres minor.png)", url: "https://commons.wikimedia.org/wiki/File:Gray_—_musculus_teres_minor.png" },
  "trigeminal-nerve": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:trigeminal-nerve.png" },
  "vagus-nerve": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:vagus-nerve.png" },
};

export const MUSCULOSKELETAL_IMAGE_CAPTIONS: Partial<Record<MUSCULOSKELETALImageId, string>> = {
  "accessory-nerve": "Clinical or pathologic image illustrating accessory nerve",
  "acromion": "Clinical or pathologic image illustrating acromion",
  "atlantoaxial": "Clinical or pathologic image illustrating atlantoaxial",
  "axillary-nerve": "Clinical or pathologic image illustrating axillary nerve",
  "chorda-tympani": "Tympanic cavity and chorda tympani course (Gray's Anatomy)",
  "cn-i": "Olfactory nerve and bulb (Gray's Anatomy)",
  "cn-ii": "Optic nerve and visual pathway (Gray's Anatomy)",
  "cn-iii": "Oculomotor nerve and extraocular muscles (Gray's Anatomy)",
  "cn-iv": "Trochlear nerve and superior oblique (Gray's Anatomy)",
  "cn-vi": "Abducens nerve and lateral rectus (Gray's Anatomy)",
  "cn-vii": "Facial nerve course and branches (Gray's Anatomy)",
  "cn-viii": "Vestibulocochlear nerve (Gray's Anatomy)",
  "cn-xii": "Hypoglossal nerve and tongue muscles (Gray's Anatomy)",
  "fontanelle": "Clinical or pathologic image illustrating fontanelle",
  "glossopharyngeal-nerve": "Clinical or pathologic image illustrating glossopharyngeal nerve",
  "humerus": "Clinical or pathologic image illustrating humerus",
  "infraspinatus": "Clinical or pathologic image illustrating infraspinatus",
  "interphalangeal-joint": "Clinical or pathologic image illustrating interphalangeal joint",
  "l1-l2-spinal-level": "Clinical or pathologic image illustrating l1 l2 spinal level",
  "long-thoracic-nerve": "Clinical or pathologic image illustrating long thoracic nerve",
  "mandibular-division": "Clinical or pathologic image illustrating mandibular division",
  "maxillary-division": "Clinical or pathologic image illustrating maxillary division",
  "metacarpophalangeal-joint": "Clinical or pathologic image illustrating metacarpophalangeal joint",
  "ophthalmic-division": "Ophthalmic division (V1) sensory distribution (Gray's Anatomy)",
  "pelvic-floor": "Clinical or pathologic image illustrating pelvic floor",
  "peroneal-nerve-compression": "Clinical or pathologic image illustrating peroneal nerve compression",
  "phrenic-nerve": "Clinical or pathologic image illustrating phrenic nerve",
  "recurrent-laryngeal-nerve": "Clinical or pathologic image illustrating recurrent laryngeal nerve",
  "rotator-cuff": "Clinical or pathologic image illustrating rotator cuff",
  "s2-s4-sacral-segments": "Clinical or pathologic image illustrating s2 s4 sacral segments",
  "sarcomere": "Sarcomere bands: Z line (boundaries), M line (center), A band (myosin length), I band (actin only), H zone (thick filaments only)",
  "sciatic-nerve-injury": "Clinical or pathologic image illustrating sciatic nerve injury",
  "subluxation": "Clinical or pathologic image illustrating subluxation",
  "subscapularis": "Clinical or pathologic image illustrating subscapularis",
  "suprascapular-nerve": "Clinical or pathologic image illustrating suprascapular nerve",
  "supraspinatus": "Clinical or pathologic image illustrating supraspinatus",
  "sympathetic-trunk": "Clinical or pathologic image illustrating sympathetic trunk",
  "teres-minor": "Clinical or pathologic image illustrating teres minor",
  "trigeminal-nerve": "Clinical or pathologic image illustrating trigeminal nerve",
  "vagus-nerve": "Clinical or pathologic image illustrating vagus nerve",
};

export function getMusculoskeletalImageForId(id: string): string | undefined {
  return MUSCULOSKELETAL_IMAGES[id as MUSCULOSKELETALImageId];
}

export function getMusculoskeletalImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return MUSCULOSKELETAL_IMAGE_ATTRIBUTIONS[id as MUSCULOSKELETALImageId];
}

export function getMusculoskeletalImageCaptionForId(id: string): string | undefined {
  return MUSCULOSKELETAL_IMAGE_CAPTIONS[id as MUSCULOSKELETALImageId];
}
