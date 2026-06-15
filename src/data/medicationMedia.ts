import type { MedicationEntry } from "./medications";
import type { MediaAttribution } from "./media";

import alprazolam from "../media/images/medications/alprazolam.svg?url";
import amitriptyline from "../media/images/medications/amitriptyline.png?url";
import antipsychotics from "../media/images/medications/antipsychotics.jpg?url";
import calcineurinInhibitors from "../media/images/medications/calcineurin-inhibitors.svg?url";
import clonazepam from "../media/images/medications/clonazepam.svg?url";
import duloxetine from "../media/images/medications/duloxetine.svg?url";
import fluoxetine from "../media/images/medications/fluoxetine.svg?url";
import daptomycin from "../media/images/medications/daptomycin.svg?url";
import dexamethasone from "../media/images/medications/dexamethasone.svg?url";
import diazepam from "../media/images/medications/diazepam.svg?url";
import diphenhydramine from "../media/images/medications/diphenhydramine.svg?url";
import glatiramer from "../media/images/medications/glatiramer.webp?url";
import hydrocortisone from "../media/images/medications/hydrocortisone.svg?url";
import interferonBeta from "../media/images/medications/interferon-beta.svg?url";
import linezolid from "../media/images/medications/linezolid.svg?url";
import nafcillin from "../media/images/medications/nafcillin.svg?url";
import naproxen from "../media/images/medications/naproxen.svg?url";
import oxacillin from "../media/images/medications/oxacillin.svg?url";
import oxycodone from "../media/images/medications/oxycodone.png?url";
import polyclonalFabAntivenom from "../media/images/medications/polyclonal-fab-antivenom.png?url";
import quetiapine from "../media/images/medications/quetiapine.svg?url";
import pyridoxine from "../media/images/medications/pyridoxine.svg?url";
import ramelteon from "../media/images/medications/ramelteon.svg?url";
import riboflavin from "../media/images/medications/riboflavin.png?url";
import vasopressors from "../media/images/medications/vasopressors.png?url";
import antiTnfTherapy from "../media/images/medications/anti-tnf-therapy.png?url";

export type MedicationImageId = Extract<
  MedicationEntry["id"],
  | "alprazolam"
  | "amitriptyline"
  | "antipsychotics"
  | "anti-tnf-therapy"
  | "calcineurin-inhibitors"
  | "clonazepam"
  | "duloxetine"
  | "fluoxetine"
  | "daptomycin"
  | "dexamethasone"
  | "diazepam"
  | "diphenhydramine"
  | "glatiramer"
  | "hydrocortisone"
  | "interferon-beta"
  | "linezolid"
  | "nafcillin"
  | "naproxen"
  | "oxacillin"
  | "oxycodone"
  | "polyclonal-fab-antivenom"
  | "quetiapine"
  | "pyridoxine"
  | "ramelteon"
  | "riboflavin"
  | "vasopressors"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/medications/SOURCES.txt */
export const MEDICATION_IMAGES: Partial<Record<MedicationImageId, string>> = {
  alprazolam: extensionAssetUrl(alprazolam),
  amitriptyline: extensionAssetUrl(amitriptyline),
  antipsychotics: extensionAssetUrl(antipsychotics),
  "anti-tnf-therapy": extensionAssetUrl(antiTnfTherapy),
  "calcineurin-inhibitors": extensionAssetUrl(calcineurinInhibitors),
  clonazepam: extensionAssetUrl(clonazepam),
  duloxetine: extensionAssetUrl(duloxetine),
  fluoxetine: extensionAssetUrl(fluoxetine),
  daptomycin: extensionAssetUrl(daptomycin),
  dexamethasone: extensionAssetUrl(dexamethasone),
  diazepam: extensionAssetUrl(diazepam),
  diphenhydramine: extensionAssetUrl(diphenhydramine),
  glatiramer: extensionAssetUrl(glatiramer),
  hydrocortisone: extensionAssetUrl(hydrocortisone),
  "interferon-beta": extensionAssetUrl(interferonBeta),
  linezolid: extensionAssetUrl(linezolid),
  nafcillin: extensionAssetUrl(nafcillin),
  naproxen: extensionAssetUrl(naproxen),
  oxacillin: extensionAssetUrl(oxacillin),
  oxycodone: extensionAssetUrl(oxycodone),
  "polyclonal-fab-antivenom": extensionAssetUrl(polyclonalFabAntivenom),
  quetiapine: extensionAssetUrl(quetiapine),
  pyridoxine: extensionAssetUrl(pyridoxine),
  ramelteon: extensionAssetUrl(ramelteon),
  riboflavin: extensionAssetUrl(riboflavin),
  vasopressors: extensionAssetUrl(vasopressors),
};

export const MEDICATION_IMAGE_ATTRIBUTIONS: Partial<
  Record<MedicationImageId, MediaAttribution>
> = {
  alprazolam: {
    label: "Wikimedia Commons (Alprazolam structure.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Alprazolam_structure.svg",
  },
  amitriptyline: {
    label: "Wikimedia Commons (Amitriptyline-from-picrate-xtal-3D-balls.png)",
    url: "https://commons.wikimedia.org/wiki/File:Amitriptyline-from-picrate-xtal-3D-balls.png",
  },
  antipsychotics: {
    label: "Wikimedia Commons (Overview of reward structures in the human brain.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Overview_of_reward_structures_in_the_human_brain.jpg",
  },
  "anti-tnf-therapy": {
    label: "Wikimedia Commons (Human tumor necrosis factor alpha PDB 1TNF.png)",
    url: "https://commons.wikimedia.org/wiki/File:Human_tumor_necrosis_factor_alpha_PDB_1TNF.png",
  },
  "calcineurin-inhibitors": {
    label: "Wikimedia Commons (Cyclosporine prescriptions (DrugStats).svg)",
    url: "https://commons.wikimedia.org/wiki/File:Cyclosporine_prescriptions_(DrugStats).svg",
  },
  clonazepam: {
    label: "Wikimedia Commons (Clonazepam 200.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Clonazepam_200.svg",
  },
  duloxetine: {
    label: "Wikimedia Commons (Duloxetine-structure.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Duloxetine-structure.svg",
  },
  fluoxetine: {
    label: "Wikimedia Commons ((R)-Fluoxetine structure.svg)",
    url: "https://commons.wikimedia.org/wiki/File:(R)-Fluoxetine_structure.svg",
  },
  dexamethasone: {
    label: "Wikimedia Commons (Dexamethasone structure.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Dexamethasone_structure.svg",
  },
  daptomycin: {
    label: "Wikimedia Commons (Daptomycin.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Daptomycin.svg",
  },
  diazepam: {
    label: "Wikimedia Commons (Diazepam structure 2.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Diazepam_structure_2.svg",
  },
  diphenhydramine: {
    label: "Wikimedia Commons (Diphenhydramine.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Diphenhydramine.svg",
  },
  linezolid: {
    label: "Wikimedia Commons (Struktur Linezolid.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Struktur_Linezolid.svg",
  },
  nafcillin: {
    label: "Wikimedia Commons (Nafcillin.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Nafcillin.svg",
  },
  naproxen: {
    label: "Wikimedia Commons (Naproxen structure.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Naproxen_structure.svg",
  },
  oxacillin: {
    label: "Wikimedia Commons (Struktur Oxacillin.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Struktur_Oxacillin.svg",
  },
  quetiapine: {
    label: "Wikimedia Commons (Quetiapine2DACS.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Quetiapine2DACS.svg",
  },
  pyridoxine: {
    label: "Wikimedia Commons (Pyridoxine structure ver2.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Pyridoxine_structure_ver2.svg",
  },
  oxycodone: {
    label: "Wikimedia Commons (Oxycodone structure.png)",
    url: "https://commons.wikimedia.org/wiki/File:Oxycodone_structure.png",
  },
  ramelteon: {
    label: "Wikimedia Commons (Ramelteon structure.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Ramelteon_structure.svg",
  },
  glatiramer: {
    label: "Wikimedia Commons (Some of the pharmacological modes-of-action (PMA) of GA-treatment of MS patients.webp)",
    url: "https://commons.wikimedia.org/wiki/File:Some_of_the_pharmacological_modes-of-action_(PMA)_of_GA-treatment_of_MS_patients.webp",
  },
  "interferon-beta": {
    label: "Created locally; reference: Interferon beta",
    url: "https://en.wikipedia.org/wiki/Interferon_beta",
  },
  hydrocortisone: {
    label: "Wikimedia Commons (Hydrocortisone hemisuccinate.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Hydrocortisone_hemisuccinate.svg",
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
  alprazolam:
    "Alprazolam — triazolobenzodiazepine enhancing GABA-A inhibition for anxiety and panic disorder",
  amitriptyline:
    "Amitriptyline — tricyclic antidepressant with NE/5-HT reuptake blockade and sodium channel cardiotoxicity in overdose",
  antipsychotics:
    "D2 blockade reduces mesolimbic psychosis but causes nigrostriatal EPS and tuberoinfundibular hyperprolactinemia",
  "anti-tnf-therapy":
    "Anti-TNF biologics block TNF-α — screen for latent TB before starting; risk of granuloma breakdown and infection",
  "calcineurin-inhibitors":
    "Calcineurin blockade prevents NFAT activation — ↓ IL-2 and T-cell proliferation in transplant",
  clonazepam:
    "Clonazepam — long-acting benzodiazepine used for epilepsy and panic disorder",
  duloxetine:
    "Duloxetine — SNRI inhibiting serotonin and norepinephrine reuptake for depression and neuropathic pain",
  fluoxetine:
    "Fluoxetine — SSRI with long half-life and active metabolite norfluoxetine",
  dexamethasone:
    "Potent glucocorticoid — antenatal lung maturity, croup, cerebral edema, meningitis adjunct",
  daptomycin:
    "Daptomycin depolarizes Gram-positive bacterial membranes — effective for MRSA bacteremia but inactivated by pulmonary surfactant",
  diazepam:
    "Diazepam — long-acting benzodiazepine for alcohol withdrawal, muscle spasm, and sedation",
  diphenhydramine:
    "Diphenhydramine — first-generation H1 blocker with antimuscarinic sedation and toxidrome risk in overdose",
  linezolid:
    "Linezolid inhibits 50S ribosomal initiation — covers MRSA pneumonia with oral bioavailability",
  nafcillin:
    "Nafcillin — penicillinase-resistant penicillin for MSSA; not active against MRSA",
  naproxen:
    "Naproxen — NSAID with reversible COX inhibition for pain and inflammation",
  oxacillin:
    "Oxacillin — anti-staphylococcal penicillin; oxacillin disk screens for MRSA resistance",
  quetiapine:
    "Quetiapine — atypical antipsychotic blocking D2/5-HT2A and H1 (sedation at low doses)",
  pyridoxine:
    "Pyridoxine (vitamin B6) — PLP cofactor precursor; co-administered with isoniazid to prevent neuropathy",
  oxycodone:
    "Oxycodone — μ-opioid agonist for moderate to severe pain; reversed by naloxone in overdose",
  ramelteon:
    "Ramelteon — selective MT1/MT2 melatonin receptor agonist for sleep-onset insomnia without GABA activity",
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
