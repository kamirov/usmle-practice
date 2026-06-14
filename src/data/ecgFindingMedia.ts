import type { MediaAttribution } from "./media";
import type { EcgFindingEntry } from "./ecgFindings";

import absentPWaves from "../media/images/ecg/absent-p-waves.png?url";
import electricalAlternans from "../media/images/ecg/electrical-alternans.jpg?url";
import inferiorStemi from "../media/images/ecg/inferior-stemi.jpg?url";
import qtcProlongation from "../media/images/ecg/qtc-prolongation.jpg?url";

export type EcgFindingImageId = EcgFindingEntry["id"];

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/ecg/SOURCES.txt */
export const ECG_FINDING_IMAGES: Partial<Record<EcgFindingImageId, string>> = {
  "absent-p-waves": extensionAssetUrl(absentPWaves),
  "electrical-alternans": extensionAssetUrl(electricalAlternans),
  "inferior-stemi": extensionAssetUrl(inferiorStemi),
  "qtc-prolongation": extensionAssetUrl(qtcProlongation),
};

export const ECG_FINDING_IMAGE_ATTRIBUTIONS: Partial<
  Record<EcgFindingImageId, MediaAttribution>
> = {
  "absent-p-waves": {
    label: "Wikimedia Commons (BruceBlaus, CC BY-SA 4.0)",
    url: "https://commons.wikimedia.org/wiki/File:Atrial_Fibrillation.png",
  },
  "electrical-alternans": {
    label: "Wikimedia Commons (James Heilman, MD)",
    url: "https://commons.wikimedia.org/wiki/File:Electrical_Alternans.JPG",
  },
  "inferior-stemi": {
    label: "Wikimedia Commons (Glenlarson, own work)",
    url: "https://commons.wikimedia.org/wiki/File:12_lead_generated_inferior_MI.JPG",
  },
  "qtc-prolongation": {
    label: "Wikimedia Commons (PeaBrainC, CC BY-SA 4.0)",
    url: "https://commons.wikimedia.org/wiki/File:Long_QT_syndrome_type_1.jpg",
  },
};

export const ECG_FINDING_IMAGE_CAPTIONS: Partial<
  Record<EcgFindingImageId, string>
> = {
  "absent-p-waves":
    "Atrial fibrillation ECG schematic showing absent P waves with irregular ventricular rhythm",
  "electrical-alternans":
    "QRS alternans with tachycardia and low voltage in large pericardial effusion",
  "inferior-stemi":
    "12-lead ECG with ST elevation in inferior leads II, III, and aVF with reciprocal changes in anterolateral leads",
  "qtc-prolongation":
    "Long QT syndrome type 1 ECG annotated with QTc greater than 480 ms",
};

export function getEcgFindingImageForId(id: string): string | undefined {
  return ECG_FINDING_IMAGES[id as EcgFindingImageId];
}

export function getEcgFindingImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return ECG_FINDING_IMAGE_ATTRIBUTIONS[id as EcgFindingImageId];
}

export function getEcgFindingImageCaptionForId(
  id: string,
): string | undefined {
  return ECG_FINDING_IMAGE_CAPTIONS[id as EcgFindingImageId];
}
