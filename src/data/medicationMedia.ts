import type { MedicationEntry } from "./medications";
import type { MediaAttribution } from "./media";

import alprazolam from "../media/images/medications/alprazolam.svg?url";
import analgesics from "../media/images/medications/analgesics.png?url";
import anticholinergics from "../media/images/medications/anticholinergics.svg?url";
import amitriptyline from "../media/images/medications/amitriptyline.png?url";
import amphetamines from "../media/images/medications/amphetamines.svg?url";
import antipsychotics from "../media/images/medications/antipsychotics.jpg?url";
import calcineurinInhibitors from "../media/images/medications/calcineurin-inhibitors.svg?url";
import clonazepam from "../media/images/medications/clonazepam.svg?url";
import cocaine from "../media/images/medications/cocaine.svg?url";
import duloxetine from "../media/images/medications/duloxetine.svg?url";
import fluoxetine from "../media/images/medications/fluoxetine.svg?url";
import generalAnesthetic from "../media/images/medications/general-anesthetic.png?url";
import isoflurane from "../media/images/medications/isoflurane.png?url";
import daptomycin from "../media/images/medications/daptomycin.svg?url";
import dexamethasone from "../media/images/medications/dexamethasone.svg?url";
import diazepam from "../media/images/medications/diazepam.svg?url";
import diphenhydramine from "../media/images/medications/diphenhydramine.svg?url";
import glatiramer from "../media/images/medications/glatiramer.webp?url";
import hydrocortisone from "../media/images/medications/hydrocortisone.svg?url";
import interferonBeta from "../media/images/medications/interferon-beta.svg?url";
import linezolid from "../media/images/medications/linezolid.svg?url";
import maoInhibitors from "../media/images/medications/mao-inhibitors.png?url";
import metoclopramide from "../media/images/medications/metoclopramide.svg?url";
import methylphenidate from "../media/images/medications/methylphenidate.svg?url";
import nafcillin from "../media/images/medications/nafcillin.svg?url";
import naproxen from "../media/images/medications/naproxen.svg?url";
import oxacillin from "../media/images/medications/oxacillin.svg?url";
import opioids from "../media/images/medications/opioids.png?url";
import oxycodone from "../media/images/medications/oxycodone.png?url";
import polyclonalFabAntivenom from "../media/images/medications/polyclonal-fab-antivenom.png?url";
import quetiapine from "../media/images/medications/quetiapine.svg?url";
import reserpine from "../media/images/medications/reserpine.svg?url";
import snris from "../media/images/medications/snris.svg?url";
import ssris from "../media/images/medications/ssris.svg?url";
import pyridoxine from "../media/images/medications/pyridoxine.svg?url";
import ramelteon from "../media/images/medications/ramelteon.svg?url";
import riboflavin from "../media/images/medications/riboflavin.png?url";
import sumatriptan from "../media/images/medications/sumatriptan.svg?url";
import topiramate from "../media/images/medications/topiramate.svg?url";
import tramadol from "../media/images/medications/tramadol.png?url";
import vasopressors from "../media/images/medications/vasopressors.png?url";
import antiTnfTherapy from "../media/images/medications/anti-tnf-therapy.png?url";
import benzodiazepines from "../media/images/medications/benzodiazepines.svg?url";
import flumazenil from "../media/images/medications/flumazenil.svg?url";
import retinoicAcid from "../media/images/medications/retinoic-acid.svg?url";

export type MedicationImageId = Extract<
  MedicationEntry["id"],
  | "alprazolam"
  | "analgesics"
  | "anticholinergics"
  | "amitriptyline"
  | "amphetamines"
  | "antipsychotics"
  | "anti-tnf-therapy"
  | "calcineurin-inhibitors"
  | "clonazepam"
  | "cocaine"
  | "duloxetine"
  | "fluoxetine"
  | "general-anesthetic"
  | "isoflurane"
  | "daptomycin"
  | "dexamethasone"
  | "diazepam"
  | "diphenhydramine"
  | "glatiramer"
  | "hydrocortisone"
  | "interferon-beta"
  | "linezolid"
  | "mao-inhibitors"
  | "metoclopramide"
  | "methylphenidate"
  | "nafcillin"
  | "naproxen"
  | "oxacillin"
  | "opioids"
  | "oxycodone"
  | "polyclonal-fab-antivenom"
  | "quetiapine"
  | "reserpine"
  | "snris"
  | "ssris"
  | "pyridoxine"
  | "ramelteon"
  | "riboflavin"
  | "sumatriptan"
  | "topiramate"
  | "tramadol"
  | "vasopressors"
  | "retinoic-acid"
  | "benzodiazepines"
  | "flumazenil"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/medications/SOURCES.txt */
export const MEDICATION_IMAGES: Partial<Record<MedicationImageId, string>> = {
  alprazolam: extensionAssetUrl(alprazolam),
  analgesics: extensionAssetUrl(analgesics),
  anticholinergics: extensionAssetUrl(anticholinergics),
  amitriptyline: extensionAssetUrl(amitriptyline),
  amphetamines: extensionAssetUrl(amphetamines),
  antipsychotics: extensionAssetUrl(antipsychotics),
  "anti-tnf-therapy": extensionAssetUrl(antiTnfTherapy),
  "calcineurin-inhibitors": extensionAssetUrl(calcineurinInhibitors),
  clonazepam: extensionAssetUrl(clonazepam),
  cocaine: extensionAssetUrl(cocaine),
  duloxetine: extensionAssetUrl(duloxetine),
  fluoxetine: extensionAssetUrl(fluoxetine),
  "general-anesthetic": extensionAssetUrl(generalAnesthetic),
  isoflurane: extensionAssetUrl(isoflurane),
  daptomycin: extensionAssetUrl(daptomycin),
  dexamethasone: extensionAssetUrl(dexamethasone),
  diazepam: extensionAssetUrl(diazepam),
  diphenhydramine: extensionAssetUrl(diphenhydramine),
  glatiramer: extensionAssetUrl(glatiramer),
  hydrocortisone: extensionAssetUrl(hydrocortisone),
  "interferon-beta": extensionAssetUrl(interferonBeta),
  linezolid: extensionAssetUrl(linezolid),
  "mao-inhibitors": extensionAssetUrl(maoInhibitors),
  metoclopramide: extensionAssetUrl(metoclopramide),
  methylphenidate: extensionAssetUrl(methylphenidate),
  nafcillin: extensionAssetUrl(nafcillin),
  naproxen: extensionAssetUrl(naproxen),
  oxacillin: extensionAssetUrl(oxacillin),
  opioids: extensionAssetUrl(opioids),
  oxycodone: extensionAssetUrl(oxycodone),
  "polyclonal-fab-antivenom": extensionAssetUrl(polyclonalFabAntivenom),
  quetiapine: extensionAssetUrl(quetiapine),
  reserpine: extensionAssetUrl(reserpine),
  snris: extensionAssetUrl(snris),
  ssris: extensionAssetUrl(ssris),
  pyridoxine: extensionAssetUrl(pyridoxine),
  ramelteon: extensionAssetUrl(ramelteon),
  riboflavin: extensionAssetUrl(riboflavin),
  sumatriptan: extensionAssetUrl(sumatriptan),
  topiramate: extensionAssetUrl(topiramate),
  tramadol: extensionAssetUrl(tramadol),
  vasopressors: extensionAssetUrl(vasopressors),
  "retinoic-acid": extensionAssetUrl(retinoicAcid),
  benzodiazepines: extensionAssetUrl(benzodiazepines),
  flumazenil: extensionAssetUrl(flumazenil),
};

export const MEDICATION_IMAGE_ATTRIBUTIONS: Partial<
  Record<MedicationImageId, MediaAttribution>
> = {
  alprazolam: {
    label: "Wikimedia Commons (Alprazolam structure.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Alprazolam_structure.svg",
  },
  analgesics: {
    label: "Wikimedia Commons (Oxycodone structure.png)",
    url: "https://commons.wikimedia.org/wiki/File:Oxycodone_structure.png",
  },
  anticholinergics: {
    label: "Wikimedia Commons (Diphenhydramine.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Diphenhydramine.svg",
  },
  amitriptyline: {
    label: "Wikimedia Commons (Amitriptyline-from-picrate-xtal-3D-balls.png)",
    url: "https://commons.wikimedia.org/wiki/File:Amitriptyline-from-picrate-xtal-3D-balls.png",
  },
  amphetamines: {
    label: "Wikimedia Commons (Amphetamine structure.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Amphetamine_structure.svg",
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
  cocaine: {
    label: "Wikimedia Commons ((-)-Cocaine Structural Formula V1.svg)",
    url: "https://commons.wikimedia.org/wiki/File:(-)-Cocaine_Structural_Formula_V1.svg",
  },
  duloxetine: {
    label: "Wikimedia Commons (Duloxetine-structure.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Duloxetine-structure.svg",
  },
  fluoxetine: {
    label: "Wikimedia Commons ((R)-Fluoxetine structure.svg)",
    url: "https://commons.wikimedia.org/wiki/File:(R)-Fluoxetine_structure.svg",
  },
  "general-anesthetic": {
    label: "Wikimedia Commons (Modern lipid hypothesis of mechanism of general anesthesia.png)",
    url: "https://commons.wikimedia.org/wiki/File:Modern_lipid_hypothesis_of_mechanism_of_general_anesthesia.png",
  },
  isoflurane: {
    label: "Wikimedia Commons (Isoflurane 3d.png)",
    url: "https://commons.wikimedia.org/wiki/File:Isoflurane_3d.png",
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
  "mao-inhibitors": {
    label: "Wikimedia Commons (Synaptic dopamine concentration.png)",
    url: "https://commons.wikimedia.org/wiki/File:Synaptic_dopamine_concentration.png",
  },
  metoclopramide: {
    label: "Wikimedia Commons (Metoclopramide.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Metoclopramide.svg",
  },
  methylphenidate: {
    label: "Wikimedia Commons (Methylphenidate.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Methylphenidate.svg",
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
  opioids: {
    label: "Wikimedia Commons (Oxycodone structure.png)",
    url: "https://commons.wikimedia.org/wiki/File:Oxycodone_structure.png",
  },
  quetiapine: {
    label: "Wikimedia Commons (Quetiapine2DACS.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Quetiapine2DACS.svg",
  },
  reserpine: {
    label: "Wikimedia Commons (Reserpine.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Reserpine.svg",
  },
  snris: {
    label: "Wikimedia Commons (Duloxetine-structure.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Duloxetine-structure.svg",
  },
  ssris: {
    label: "Wikimedia Commons ((R)-Fluoxetine structure.svg)",
    url: "https://commons.wikimedia.org/wiki/File:(R)-Fluoxetine_structure.svg",
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
  sumatriptan: {
    label: "Wikimedia Commons (Sumatriptan.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Sumatriptan.svg",
  },
  topiramate: {
    label: "Wikimedia Commons (Topiramate.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Topiramate.svg",
  },
  tramadol: {
    label: "Wikimedia Commons (Oxycodone structure.png)",
    url: "https://commons.wikimedia.org/wiki/File:Oxycodone_structure.png",
  },
  vasopressors: {
    label: "Wikimedia Commons (Norepinephrine.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Norepinephrine.svg",
  },
  "retinoic-acid": {
    label: "Wikimedia Commons (Tretinoin structure.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Tretinoin_structure.svg",
  },
  benzodiazepines: {
    label: "Wikimedia Commons (Diazepam structure.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Diazepam_structure.svg",
  },
  flumazenil: {
    label: "Wikimedia Commons (Flumazenil.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Flumazenil.svg",
  },
};

export const MEDICATION_IMAGE_CAPTIONS: Partial<
  Record<MedicationImageId, string>
> = {
  alprazolam:
    "Alprazolam — triazolobenzodiazepine enhancing GABA-A inhibition for anxiety and panic disorder",
  analgesics:
    "Analgesic drug classes — opioids, NSAIDs, and acetaminophen reduce pain via distinct mechanisms",
  anticholinergics:
    "Muscarinic receptor antagonists — dry mouth, urinary retention, mydriasis; toxidrome reversed by physostigmine when appropriate",
  amitriptyline:
    "Amitriptyline — tricyclic antidepressant with NE/5-HT reuptake blockade and sodium channel cardiotoxicity in overdose",
  amphetamines:
    "Amphetamines — reverse DAT/NET transport to release dopamine and norepinephrine; used in ADHD and narcolepsy",
  antipsychotics:
    "D2 blockade reduces mesolimbic psychosis but causes nigrostriatal EPS and tuberoinfundibular hyperprolactinemia",
  "anti-tnf-therapy":
    "Anti-TNF biologics block TNF-α — screen for latent TB before starting; risk of granuloma breakdown and infection",
  "calcineurin-inhibitors":
    "Calcineurin blockade prevents NFAT activation — ↓ IL-2 and T-cell proliferation in transplant",
  clonazepam:
    "Clonazepam — long-acting benzodiazepine used for epilepsy and panic disorder",
  cocaine:
    "Cocaine — blocks DAT/NET/SERT reuptake and voltage-gated Na⁺ channels; sympathomimetic toxicity and coronary vasospasm",
  duloxetine:
    "Duloxetine — SNRI inhibiting serotonin and norepinephrine reuptake for depression and neuropathic pain",
  fluoxetine:
    "Fluoxetine — SSRI with long half-life and active metabolite norfluoxetine",
  "general-anesthetic":
    "General anesthetics reduce CMRO₂ and produce reversible unconsciousness — volatile agents dilate cerebral vessels",
  isoflurane:
    "Isoflurane — halogenated ether volatile anesthetic; MAC ~1.15%; malignant hyperthermia trigger",
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
  "mao-inhibitors":
    "MAO inhibitors block oxidative deamination of dopamine, norepinephrine, and serotonin — tyramine crisis and serotonin syndrome risks",
  metoclopramide:
    "Metoclopramide — D₂ antagonist antiemetic and prokinetic; EPS risk limits duration",
  methylphenidate:
    "Methylphenidate — DAT/NET reuptake inhibitor used as first-line ADHD stimulant",
  nafcillin:
    "Nafcillin — penicillinase-resistant penicillin for MSSA; not active against MRSA",
  naproxen:
    "Naproxen — NSAID with reversible COX inhibition for pain and inflammation",
  oxacillin:
    "Oxacillin — anti-staphylococcal penicillin; oxacillin disk screens for MRSA resistance",
  opioids:
    "μ-opioid receptor agonists — analgesia, miosis, and respiratory depression; reversed by naloxone",
  quetiapine:
    "Quetiapine — atypical antipsychotic blocking D2/5-HT2A and H1 (sedation at low doses)",
  reserpine:
    "Reserpine — irreversible VMAT2 inhibitor depleting vesicular dopamine, norepinephrine, and serotonin stores",
  snris:
    "SNRIs — dual serotonin and norepinephrine reuptake inhibition for depression, anxiety, and neuropathic pain",
  ssris:
    "SSRIs — selective serotonin reuptake inhibitors; first-line for depression and generalized anxiety disorder",
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
  sumatriptan:
    "Sumatriptan — 5-HT₁B/₁D agonist triptan for acute migraine and cluster headache",
  topiramate:
    "Topiramate — anticonvulsant used for migraine prophylaxis with weight loss and paresthesia side effects",
  tramadol:
    "Tramadol — weak μ-opioid agonist with serotonin and norepinephrine reuptake inhibition; serotonin syndrome risk",
  vasopressors:
    "Norepinephrine structure — prototypical alpha-adrenergic vasopressor used in septic shock",
  "retinoic-acid":
    "All-trans retinoic acid (ATRA) — vitamin A derivative that induces differentiation in acute promyelocytic leukemia",
  benzodiazepines:
    "Benzodiazepines bind GABA-A receptors — enhance inhibitory neurotransmission for anxiety, seizures, and alcohol withdrawal",
  flumazenil:
    "Flumazenil — competitive benzodiazepine receptor antagonist reversing benzo sedation and respiratory depression",
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
