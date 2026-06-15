import type { MediaAttribution } from "./media";
import type { MusculoskeletalEntry } from "./musculoskeletal";

import acromion from "../media/images/musculoskeletal/acromion.jpg?url";
import atlantoaxial from "../media/images/musculoskeletal/atlantoaxial.png?url";
import axillaryNerve from "../media/images/musculoskeletal/axillary-nerve.jpg?url";
import fontanelle from "../media/images/musculoskeletal/fontanelle.png?url";
import humerus from "../media/images/musculoskeletal/humerus.jpg?url";
import infraspinatus from "../media/images/musculoskeletal/infraspinatus.png?url";
import interphalangealJoint from "../media/images/musculoskeletal/interphalangeal-joint.jpg?url";
import l1L2SpinalLevel from "../media/images/musculoskeletal/l1-l2-spinal-level.png?url";
import metacarpophalangealJoint from "../media/images/musculoskeletal/metacarpophalangeal-joint.jpg?url";
import pelvicFloor from "../media/images/musculoskeletal/pelvic-floor.png?url";
import rotatorCuff from "../media/images/musculoskeletal/rotator-cuff.svg?url";
import s2S4SacralSegments from "../media/images/musculoskeletal/s2-s4-sacral-segments.png?url";
import sarcomereDiagram from "../media/images/musculoskeletal/sarcomere-diagram.svg?url";
import subluxation from "../media/images/musculoskeletal/subluxation.jpg?url";
import subscapularis from "../media/images/musculoskeletal/subscapularis.jpg?url";
import suprascapularNerve from "../media/images/musculoskeletal/suprascapular-nerve.jpg?url";
import supraspinatus from "../media/images/musculoskeletal/supraspinatus.png?url";
import teresMinor from "../media/images/musculoskeletal/teres-minor.png?url";

export type MUSCULOSKELETALImageId = Extract<
  MusculoskeletalEntry["id"],
  | "acromion"
  | "atlantoaxial"
  | "axillary-nerve"
  | "fontanelle"
  | "humerus"
  | "infraspinatus"
  | "interphalangeal-joint"
  | "l1-l2-spinal-level"
  | "metacarpophalangeal-joint"
  | "pelvic-floor"
  | "rotator-cuff"
  | "s2-s4-sacral-segments"
  | "sarcomere"
  | "subluxation"
  | "subscapularis"
  | "suprascapular-nerve"
  | "supraspinatus"
  | "teres-minor"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/musculoskeletal/SOURCES.txt */
export const MUSCULOSKELETAL_IMAGES: Partial<Record<MUSCULOSKELETALImageId, string>> = {
  "acromion": extensionAssetUrl(acromion),
  "atlantoaxial": extensionAssetUrl(atlantoaxial),
  "axillary-nerve": extensionAssetUrl(axillaryNerve),
  "fontanelle": extensionAssetUrl(fontanelle),
  "humerus": extensionAssetUrl(humerus),
  "infraspinatus": extensionAssetUrl(infraspinatus),
  "interphalangeal-joint": extensionAssetUrl(interphalangealJoint),
  "l1-l2-spinal-level": extensionAssetUrl(l1L2SpinalLevel),
  "metacarpophalangeal-joint": extensionAssetUrl(metacarpophalangealJoint),
  "pelvic-floor": extensionAssetUrl(pelvicFloor),
  "rotator-cuff": extensionAssetUrl(rotatorCuff),
  "s2-s4-sacral-segments": extensionAssetUrl(s2S4SacralSegments),
  "sarcomere": extensionAssetUrl(sarcomereDiagram),
  "subluxation": extensionAssetUrl(subluxation),
  "subscapularis": extensionAssetUrl(subscapularis),
  "suprascapular-nerve": extensionAssetUrl(suprascapularNerve),
  "supraspinatus": extensionAssetUrl(supraspinatus),
  "teres-minor": extensionAssetUrl(teresMinor),
};

export const MUSCULOSKELETAL_IMAGE_ATTRIBUTIONS: Partial<
  Record<MUSCULOSKELETALImageId, MediaAttribution>
> = {
  "acromion": { label: "Wikimedia Commons (Acromion of scapula02.png)", url: "https://commons.wikimedia.org/wiki/File:Acromion_of_scapula02.png" },
  "atlantoaxial": { label: "Wikimedia Commons (Abyssuridae (10.3390-d17120827) Figure 3.png)", url: "https://commons.wikimedia.org/wiki/File:Abyssuridae_(10.3390-d17120827)_Figure_3.png" },
  "axillary-nerve": { label: "Wikimedia Commons (Anatomy of the cat (1991) (18006462720).jpg)", url: "https://commons.wikimedia.org/wiki/File:Anatomy_of_the_cat_(1991)_(18006462720).jpg" },
  "fontanelle": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:fontanelle.png" },
  "humerus": { label: "Wikimedia Commons (Right humerus, anterior aspect.jpg)", url: "https://commons.wikimedia.org/wiki/File:Right_humerus,_anterior_aspect.jpg" },
  "infraspinatus": { label: "Wikimedia Commons (Gray — musculus infraspinatus.png)", url: "https://commons.wikimedia.org/wiki/File:Gray_—_musculus_infraspinatus.png" },
  "interphalangeal-joint": { label: "Wikimedia Commons (DIP, PIP and MCP joints of hand.jpg)", url: "https://commons.wikimedia.org/wiki/File:DIP,_PIP_and_MCP_joints_of_hand.jpg" },
  "l1-l2-spinal-level": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:l1-l2-spinal-level.png" },
  "metacarpophalangeal-joint": { label: "Wikimedia Commons (DIP, PIP and MCP joints of hand.jpg)", url: "https://commons.wikimedia.org/wiki/File:DIP,_PIP_and_MCP_joints_of_hand.jpg" },
  "pelvic-floor": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:pelvic-floor.png" },
  "rotator-cuff": { label: "Wikimedia Commons (Rotator cuff injury.svg)", url: "https://commons.wikimedia.org/wiki/File:Rotator_cuff_injury.svg" },
  "s2-s4-sacral-segments": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:s2-s4-sacral-segments.png" },
  "sarcomere": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:sarcomere-diagram.svg" },
  "subluxation": { label: "Wikimedia Commons (SubluxationLeftShoulder XRay Ax.jpg)", url: "https://commons.wikimedia.org/wiki/File:SubluxationLeftShoulder_XRay_Ax.jpg" },
  "subscapularis": { label: "Wikimedia Commons (Insertion-of-subscapularis-muscle.jpg)", url: "https://commons.wikimedia.org/wiki/File:Insertion-of-subscapularis-muscle.jpg" },
  "suprascapular-nerve": { label: "Wikimedia Commons (The anatomy of the horse - a dissection guide (1922) (17574061253).jpg)", url: "https://commons.wikimedia.org/wiki/File:The_anatomy_of_the_horse_-_a_dissection_guide_(1922)_(17574061253).jpg" },
  "supraspinatus": { label: "Wikimedia Commons (Gray — musculus supraspinatus.png)", url: "https://commons.wikimedia.org/wiki/File:Gray_—_musculus_supraspinatus.png" },
  "teres-minor": { label: "Wikimedia Commons (Gray — musculus teres minor.png)", url: "https://commons.wikimedia.org/wiki/File:Gray_—_musculus_teres_minor.png" },
};

export const MUSCULOSKELETAL_IMAGE_CAPTIONS: Partial<Record<MUSCULOSKELETALImageId, string>> = {
  "acromion": "Clinical or pathologic image illustrating acromion",
  "atlantoaxial": "Clinical or pathologic image illustrating atlantoaxial",
  "axillary-nerve": "Clinical or pathologic image illustrating axillary nerve",
  "fontanelle": "Clinical or pathologic image illustrating fontanelle",
  "humerus": "Clinical or pathologic image illustrating humerus",
  "infraspinatus": "Clinical or pathologic image illustrating infraspinatus",
  "interphalangeal-joint": "Clinical or pathologic image illustrating interphalangeal joint",
  "l1-l2-spinal-level": "Clinical or pathologic image illustrating l1 l2 spinal level",
  "metacarpophalangeal-joint": "Clinical or pathologic image illustrating metacarpophalangeal joint",
  "pelvic-floor": "Clinical or pathologic image illustrating pelvic floor",
  "rotator-cuff": "Clinical or pathologic image illustrating rotator cuff",
  "s2-s4-sacral-segments": "Clinical or pathologic image illustrating s2 s4 sacral segments",
  "sarcomere": "Sarcomere bands: Z line (boundaries), M line (center), A band (myosin length), I band (actin only), H zone (thick filaments only)",
  "subluxation": "Clinical or pathologic image illustrating subluxation",
  "subscapularis": "Clinical or pathologic image illustrating subscapularis",
  "suprascapular-nerve": "Clinical or pathologic image illustrating suprascapular nerve",
  "supraspinatus": "Clinical or pathologic image illustrating supraspinatus",
  "teres-minor": "Clinical or pathologic image illustrating teres minor",
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
