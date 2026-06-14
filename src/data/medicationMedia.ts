import type { MedicationEntry } from "./medications";
import type { MediaAttribution } from "./media";

import antipsychotics from "../media/images/medications/antipsychotics.svg?url";
import calcineurinInhibitors from "../media/images/medications/calcineurin-inhibitors.svg?url";
import dexamethasone from "../media/images/medications/dexamethasone.svg?url";
import glatiramer from "../media/images/medications/glatiramer.svg?url";
import hydrocortisone from "../media/images/medications/hydrocortisone.svg?url";
import interferonBeta from "../media/images/medications/interferon-beta.svg?url";
import polyclonalFabAntivenom from "../media/images/medications/polyclonal-fab-antivenom.png?url";
import riboflavin from "../media/images/medications/riboflavin.png?url";
import vasopressors from "../media/images/medications/vasopressors.png?url";
import antiTnfTherapy from "../media/images/medications/anti-tnf-therapy.svg?url";
import daptomycin from "../media/images/medications/daptomycin.svg?url";
import linezolid from "../media/images/medications/linezolid.svg?url";
import nafcillin from "../media/images/medications/nafcillin.svg?url";
import oxacillin from "../media/images/medications/oxacillin.svg?url";

export type MedicationImageId = Extract<
  MedicationEntry["id"],
  | "antipsychotics"
  | "anti-tnf-therapy"
  | "calcineurin-inhibitors"
  | "daptomycin"
  | "dexamethasone"
  | "glatiramer"
  | "hydrocortisone"
  | "interferon-beta"
  | "linezolid"
  | "nafcillin"
  | "oxacillin"
  | "polyclonal-fab-antivenom"
  | "riboflavin"
  | "vasopressors"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/medications/SOURCES.txt */
export const MEDICATION_IMAGES: Partial<Record<MedicationImageId, string>> = {
  antipsychotics: extensionAssetUrl(antipsychotics),
  "anti-tnf-therapy": extensionAssetUrl(antiTnfTherapy),
  "calcineurin-inhibitors": extensionAssetUrl(calcineurinInhibitors),
  daptomycin: extensionAssetUrl(daptomycin),
  dexamethasone: extensionAssetUrl(dexamethasone),
  glatiramer: extensionAssetUrl(glatiramer),
  hydrocortisone: extensionAssetUrl(hydrocortisone),
  "interferon-beta": extensionAssetUrl(interferonBeta),
  linezolid: extensionAssetUrl(linezolid),
  nafcillin: extensionAssetUrl(nafcillin),
  oxacillin: extensionAssetUrl(oxacillin),
  "polyclonal-fab-antivenom": extensionAssetUrl(polyclonalFabAntivenom),
  riboflavin: extensionAssetUrl(riboflavin),
  vasopressors: extensionAssetUrl(vasopressors),
};

export const MEDICATION_IMAGE_ATTRIBUTIONS: Partial<
  Record<MedicationImageId, MediaAttribution>
> = {
  antipsychotics: {
    label: "Created locally; reference: Dopaminergic pathways",
    url: "https://en.wikipedia.org/wiki/Dopaminergic_pathways",
  },
  "anti-tnf-therapy": {
    label: "Created locally; reference: Tumor necrosis factor alpha",
    url: "https://en.wikipedia.org/wiki/Tumor_necrosis_factor_alpha",
  },
  "calcineurin-inhibitors": {
    label: "Created locally; reference: Calcineurin",
    url: "https://en.wikipedia.org/wiki/Calcineurin",
  },
  dexamethasone: {
    label: "Created locally; reference: Dexamethasone",
    url: "https://en.wikipedia.org/wiki/Dexamethasone",
  },
  daptomycin: {
    label: "Created locally; reference: Daptomycin",
    url: "https://en.wikipedia.org/wiki/Daptomycin",
  },
  linezolid: {
    label: "Created locally; reference: Linezolid",
    url: "https://en.wikipedia.org/wiki/Linezolid",
  },
  nafcillin: {
    label: "Created locally; reference: Nafcillin",
    url: "https://en.wikipedia.org/wiki/Nafcillin",
  },
  oxacillin: {
    label: "Created locally; reference: Oxacillin",
    url: "https://en.wikipedia.org/wiki/Oxacillin",
  },
  glatiramer: {
    label: "Created locally; reference: Glatiramer acetate",
    url: "https://en.wikipedia.org/wiki/Glatiramer_acetate",
  },
  "interferon-beta": {
    label: "Created locally; reference: Interferon beta",
    url: "https://en.wikipedia.org/wiki/Interferon_beta",
  },
  hydrocortisone: {
    label: "Created locally; reference: Hydrocortisone",
    url: "https://en.wikipedia.org/wiki/Hydrocortisone",
  },
  "polyclonal-fab-antivenom": {
    label: "Wikimedia Commons (Antibody.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Antibody.svg",
  },
  riboflavin: {
    label: "Wikimedia Commons (Riboflavin.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Riboflavin.svg",
  },
  vasopressors: {
    label: "Wikimedia Commons (Norepinephrine.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Norepinephrine.svg",
  },
};

export const MEDICATION_IMAGE_CAPTIONS: Partial<
  Record<MedicationImageId, string>
> = {
  antipsychotics:
    "D2 blockade reduces mesolimbic psychosis but causes nigrostriatal EPS and tuberoinfundibular hyperprolactinemia",
  "anti-tnf-therapy":
    "Anti-TNF biologics block TNF-α — screen for latent TB before starting; risk of granuloma breakdown and infection",
  "calcineurin-inhibitors":
    "Calcineurin blockade prevents NFAT activation — ↓ IL-2 and T-cell proliferation in transplant",
  dexamethasone:
    "Potent glucocorticoid — antenatal lung maturity, croup, cerebral edema, meningitis adjunct",
  daptomycin:
    "Daptomycin depolarizes Gram-positive bacterial membranes — effective for MRSA bacteremia but inactivated by pulmonary surfactant",
  linezolid:
    "Linezolid inhibits 50S ribosomal initiation — covers MRSA pneumonia with oral bioavailability",
  nafcillin:
    "Nafcillin — penicillinase-resistant penicillin for MSSA; not active against MRSA",
  oxacillin:
    "Oxacillin — anti-staphylococcal penicillin; oxacillin disk screens for MRSA resistance",
  glatiramer:
    "Glatiramer acetate mimics myelin basic protein — shifts T cells toward Th2/regulatory phenotype in MS",
  "interferon-beta":
    "IFN-β activates JAK-STAT signaling — immunomodulatory DMT reducing MS relapses",
  hydrocortisone:
    "Physiologic cortisol replacement — adrenal crisis and Addison disease",
  "polyclonal-fab-antivenom":
    "Antibody structure highlighting Fab antigen-binding regions relevant to Fab antivenom fragments",
  riboflavin:
    "Riboflavin (vitamin B2) chemical structure — precursor for FMN and FAD redox cofactors",
  vasopressors:
    "Norepinephrine structure — prototypical alpha-adrenergic vasopressor used in septic shock",
};

export function getMedicationImageForId(id: string): string | undefined {
  return MEDICATION_IMAGES[id as MedicationImageId];
}

export function getMedicationImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return MEDICATION_IMAGE_ATTRIBUTIONS[id as MedicationImageId];
}

export function getMedicationImageCaptionForId(
  id: string,
): string | undefined {
  return MEDICATION_IMAGE_CAPTIONS[id as MedicationImageId];
}
