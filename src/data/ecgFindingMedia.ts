import type { MediaAttribution } from "./media";
import type { EcgFindingEntry } from "./ecgFindings";

import absentPWaves from "../media/images/ecg/absent-p-waves.png?url";
import electricalAlternans from "../media/images/ecg/electrical-alternans.jpg?url";
import escapeRhythm from "../media/images/ecg/escape-rhythm.png?url";
import inferiorStemi from "../media/images/ecg/inferior-stemi.jpg?url";
import qtcProlongation from "../media/images/ecg/qtc-prolongation.jpg?url";
import sawToothedFlutterWaves from "../media/images/ecg/saw-toothed-flutter-waves.jpg?url";
import sinusArrhythmia from "../media/images/ecg/sinus-arrhythmia.jpg?url";

export type EcgFindingImageId = EcgFindingEntry["id"];

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/ecg/SOURCES.txt */
export const ECG_FINDING_IMAGES: Partial<Record<EcgFindingImageId, string>> = {
  "absent-p-waves": extensionAssetUrl(absentPWaves),
  "electrical-alternans": extensionAssetUrl(electricalAlternans),
  "escape-rhythm": extensionAssetUrl(escapeRhythm),
  "inferior-stemi": extensionAssetUrl(inferiorStemi),
  "qtc-prolongation": extensionAssetUrl(qtcProlongation),
  "saw-toothed-flutter-waves": extensionAssetUrl(sawToothedFlutterWaves),
  "sinus-arrhythmia": extensionAssetUrl(sinusArrhythmia),
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
  "escape-rhythm": {
    label: "Wikimedia Commons (Dhaval Desai, MD, MPH, CC BY-SA 4.0)",
    url: "https://commons.wikimedia.org/wiki/File:ECG_of_Junctional_Rhythm.png",
  },
  "inferior-stemi": {
    label: "Wikimedia Commons (Glenlarson, own work)",
    url: "https://commons.wikimedia.org/wiki/File:12_lead_generated_inferior_MI.JPG",
  },
  "qtc-prolongation": {
    label: "Wikimedia Commons (PeaBrainC, CC BY-SA 4.0)",
    url: "https://commons.wikimedia.org/wiki/File:Long_QT_syndrome_type_1.jpg",
  },
  "saw-toothed-flutter-waves": {
    label: "Wikimedia Commons (James Heilman, MD, CC BY-SA 3.0)",
    url: "https://commons.wikimedia.org/wiki/File:AtrialFlutter12.JPG",
  },
  "sinus-arrhythmia": {
    label: "Wikimedia Commons (Michael Rosengarten BEng, MD.McGill, CC BY-SA 3.0)",
    url: "https://commons.wikimedia.org/wiki/File:ECG_Sinus_Arrhythmia_79_bpm.jpg",
  },
};

export const ECG_FINDING_IMAGE_CAPTIONS: Partial<
  Record<EcgFindingImageId, string>
> = {
  "absent-p-waves":
    "Atrial fibrillation ECG schematic showing absent P waves with irregular ventricular rhythm",
  "electrical-alternans":
    "QRS alternans with tachycardia and low voltage in large pericardial effusion",
  "escape-rhythm":
    "Junctional escape rhythm ECG with regular narrow QRS complexes and absent P waves",
  "inferior-stemi":
    "12-lead ECG with ST elevation in inferior leads II, III, and aVF with reciprocal changes in anterolateral leads",
  "qtc-prolongation":
    "Long QT syndrome type 1 ECG annotated with QTc greater than 480 ms",
  "saw-toothed-flutter-waves":
    "12-lead ECG demonstrating sawtooth flutter waves characteristic of atrial flutter",
  "sinus-arrhythmia":
    "ECG lead II showing sinus arrhythmia with phasic R-R interval variation during respiration at 79 bpm",
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
