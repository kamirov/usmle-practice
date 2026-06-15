import type { MediaAttribution } from "./media";
import type { ProcedureEntry } from "./procedures";

import sellickManeuver from "../media/images/procedures/sellick-maneuver.jpg?url";
import capnography from "../media/images/procedures/capnography.png?url";
import percutaneousCoronaryIntervention from "../media/images/procedures/percutaneous-coronary-intervention.png?url";
import arthroplasty from "../media/images/procedures/arthroplasty.jpg?url";

export type ProcedureImageId = Extract<
  ProcedureEntry["id"],
  "sellick-maneuver" | "capnography" | "percutaneous-coronary-intervention" | "arthroplasty"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/procedures/SOURCES.txt */
export const PROCEDURE_IMAGES: Partial<Record<ProcedureImageId, string>> = {
  "sellick-maneuver": extensionAssetUrl(sellickManeuver),
  capnography: extensionAssetUrl(capnography),
  "percutaneous-coronary-intervention": extensionAssetUrl(
    percutaneousCoronaryIntervention,
  ),
  arthroplasty: extensionAssetUrl(arthroplasty),
};

export const PROCEDURE_IMAGE_ATTRIBUTIONS: Partial<
  Record<ProcedureImageId, MediaAttribution>
> = {
  "sellick-maneuver": {
    label: "Wikimedia Commons (Larynx detailed.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Larynx_detailed.jpg",
  },
  capnography: {
    label: "Wikimedia Commons (Capnogram.png)",
    url: "https://commons.wikimedia.org/wiki/File:Capnogram.png",
  },
  "percutaneous-coronary-intervention": {
    label: "Wikimedia Commons (Blausen 0034 Angioplasty Stent 01.png)",
    url: "https://commons.wikimedia.org/wiki/File:Blausen_0034_Angioplasty_Stent_01.png",
  },
  arthroplasty: {
    label: "Wikimedia Commons (Hip prosthesis.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Hip_prosthesis.jpg",
  },
};

export const PROCEDURE_IMAGE_CAPTIONS: Partial<
  Record<ProcedureImageId, string>
> = {
  "sellick-maneuver":
    "Laryngeal anatomy — cricoid cartilage (complete ring) is the landmark for Sellick maneuver cricoid pressure during RSI",
  capnography:
    "Capnogram waveform — phases of end-tidal CO₂ tracing used to confirm ventilation and tracheal intubation",
  "percutaneous-coronary-intervention":
    "Coronary angioplasty with stent deployment — percutaneous revascularization for obstructive coronary artery disease",
  arthroplasty:
    "Total hip prosthesis — femoral stem and acetabular cup components used in joint arthroplasty",
};

export function getProcedureImageForId(id: string): string | undefined {
  return PROCEDURE_IMAGES[id as ProcedureImageId];
}

export function getProcedureImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return PROCEDURE_IMAGE_ATTRIBUTIONS[id as ProcedureImageId];
}

export function getProcedureImageCaptionForId(
  id: string,
): string | undefined {
  return PROCEDURE_IMAGE_CAPTIONS[id as ProcedureImageId];
}
