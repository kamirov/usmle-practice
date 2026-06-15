import type { MediaAttribution } from "./media";
import type { PathogenesisEntry } from "./pathogenesis";

import bloodBrainBarrier from "../media/images/pathogenesis/blood-brain-barrier.svg?url";
import hepatotoxicity from "../media/images/pathogenesis/hepatotoxicity.jpg?url";
import lowFiberDiet from "../media/images/pathogenesis/low-fiber-diet.jpg?url";
import lumen from "../media/images/pathogenesis/lumen.svg?url";
import malnutrition from "../media/images/pathogenesis/malnutrition.jpg?url";
import meconium from "../media/images/pathogenesis/meconium.jpg?url";
import oxidativeStress from "../media/images/pathogenesis/oxidative-stress.png?url";
import reuptake from "../media/images/pathogenesis/reuptake.png?url";
import acidFastBacteria from "../media/images/pathogenesis/acid-fast-bacteria.jpg?url";
import amyloidPlaques from "../media/images/pathogenesis/amyloid-plaques.jpg?url";
import spongiformVacuole from "../media/images/pathogenesis/spongiform-vacuole.jpg?url";
import strenuousExercise from "../media/images/pathogenesis/strenuous-exercise.jpg?url";
import vqMismatch from "../media/images/pathogenesis/v-q-mismatch.jpg?url";
import radiculopathy from "../media/images/pathogenesis/radiculopathy.png?url";
import stockingGlove from "../media/images/pathogenesis/stocking-glove.jpg?url";
import toxidrome from "../media/images/pathogenesis/toxidrome.png?url";
import glycation from "../media/images/pathogenesis/glycation.png?url";
import vasaNervorum from "../media/images/pathogenesis/vasa-nervorum.jpg?url";
import clottingCascade from "../media/images/pathogenesis/clotting-cascade.png?url";
import intrinsicPathway from "../media/images/pathogenesis/intrinsic-pathway.png?url";
import extrinsicPathway from "../media/images/pathogenesis/extrinsic-pathway.png?url";
import protease from "../media/images/pathogenesis/protease.png?url";
import pyogenicInfection from "../media/images/pathogenesis/pyogenic-infection.jpg?url";
import robertsonianTranslocation from "../media/images/pathogenesis/robertsonian-translocation.png?url";
import reentrantCircuit from "../media/images/pathogenesis/reentrant-circuit.png?url";
import hyperandrogenism from "../media/images/pathogenesis/hyperandrogenism.png?url";
import anovulation from "../media/images/pathogenesis/anovulation.svg?url";
import ovulation from "../media/images/pathogenesis/ovulation.png?url";
import ovulatoryDysfunction from "../media/images/pathogenesis/ovulatory-dysfunction.png?url";
import analgesia from "../media/images/pathogenesis/analgesia.png?url";
import antiemesis from "../media/images/pathogenesis/antiemesis.jpg?url";
import autocrine from "../media/images/pathogenesis/autocrine.png?url";
import bronchodilation from "../media/images/pathogenesis/bronchodilation.png?url";
import paracrine from "../media/images/pathogenesis/paracrine.png?url";
import humoralImmunity from "../media/images/pathogenesis/humoral-immunity.jpg?url";
import hypersensitivity from "../media/images/pathogenesis/hypersensitivity.png?url";
import typeIHypersensitivity from "../media/images/pathogenesis/type-i-hypersensitivity.jpg?url";
import typeIiiHypersensitivity from "../media/images/pathogenesis/type-iii-hypersensitivity.jpg?url";
import typeIvHypersensitivity from "../media/images/pathogenesis/type-iv-hypersensitivity.jpg?url";

export type PathogenesisImageId = Extract<
  PathogenesisEntry["id"],
  | "blood-brain-barrier"
  | "hepatotoxicity"
  | "low-fiber-diet"
  | "lumen"
  | "malnutrition"
  | "meconium"
  | "oxidative-stress"
  | "reuptake"
  | "acid-fast-bacteria"
  | "amyloid-plaques"
  | "spongiform-vacuole"
  | "strenuous-exercise"
  | "v-q-mismatch"
  | "radiculopathy"
  | "stocking-glove"
  | "toxidrome"
  | "glycation"
  | "vasa-nervorum"
  | "clotting-cascade"
  | "intrinsic-pathway"
  | "extrinsic-pathway"
  | "protease"
  | "pyogenic-infection"
  | "robertsonian-translocation"
  | "reentrant-circuit"
  | "hyperandrogenism"
  | "anovulation"
  | "ovulation"
  | "ovulatory-dysfunction"
  | "analgesia"
  | "antiemesis"
  | "autocrine"
  | "bronchodilation"
  | "paracrine"
  | "humoral-immunity"
  | "hypersensitivity"
  | "type-i-hypersensitivity"
  | "type-iii-hypersensitivity"
  | "type-iv-hypersensitivity"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/pathogenesis/SOURCES.txt */
export const PATHOGENESIS_IMAGES: Partial<
  Record<PathogenesisImageId, string>
> = {
  "blood-brain-barrier": extensionAssetUrl(bloodBrainBarrier),
  hepatotoxicity: extensionAssetUrl(hepatotoxicity),
  "low-fiber-diet": extensionAssetUrl(lowFiberDiet),
  lumen: extensionAssetUrl(lumen),
  malnutrition: extensionAssetUrl(malnutrition),
  meconium: extensionAssetUrl(meconium),
  "oxidative-stress": extensionAssetUrl(oxidativeStress),
  reuptake: extensionAssetUrl(reuptake),
  "acid-fast-bacteria": extensionAssetUrl(acidFastBacteria),
  "amyloid-plaques": extensionAssetUrl(amyloidPlaques),
  "spongiform-vacuole": extensionAssetUrl(spongiformVacuole),
  "strenuous-exercise": extensionAssetUrl(strenuousExercise),
  "v-q-mismatch": extensionAssetUrl(vqMismatch),
  radiculopathy: extensionAssetUrl(radiculopathy),
  "stocking-glove": extensionAssetUrl(stockingGlove),
  toxidrome: extensionAssetUrl(toxidrome),
  glycation: extensionAssetUrl(glycation),
  "vasa-nervorum": extensionAssetUrl(vasaNervorum),
  "clotting-cascade": extensionAssetUrl(clottingCascade),
  "intrinsic-pathway": extensionAssetUrl(intrinsicPathway),
  "extrinsic-pathway": extensionAssetUrl(extrinsicPathway),
  protease: extensionAssetUrl(protease),
  "pyogenic-infection": extensionAssetUrl(pyogenicInfection),
  "robertsonian-translocation": extensionAssetUrl(robertsonianTranslocation),
  "reentrant-circuit": extensionAssetUrl(reentrantCircuit),
  hyperandrogenism: extensionAssetUrl(hyperandrogenism),
  anovulation: extensionAssetUrl(anovulation),
  ovulation: extensionAssetUrl(ovulation),
  "ovulatory-dysfunction": extensionAssetUrl(ovulatoryDysfunction),
  analgesia: extensionAssetUrl(analgesia),
  antiemesis: extensionAssetUrl(antiemesis),
  autocrine: extensionAssetUrl(autocrine),
  bronchodilation: extensionAssetUrl(bronchodilation),
  paracrine: extensionAssetUrl(paracrine),
  "humoral-immunity": extensionAssetUrl(humoralImmunity),
  hypersensitivity: extensionAssetUrl(hypersensitivity),
  "type-i-hypersensitivity": extensionAssetUrl(typeIHypersensitivity),
  "type-iii-hypersensitivity": extensionAssetUrl(typeIiiHypersensitivity),
  "type-iv-hypersensitivity": extensionAssetUrl(typeIvHypersensitivity),
};

export const PATHOGENESIS_IMAGE_ATTRIBUTIONS: Partial<
  Record<PathogenesisImageId, MediaAttribution>
> = {
  "blood-brain-barrier": {
    label: "Wikimedia Commons (Meninges diagram.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Meninges_diagram.svg",
  },
  hepatotoxicity: {
    label: "Wikimedia Commons (Cirrhosis of Alcoholic Liver Disease (5517625829).jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Cirrhosis_of_Alcoholic_Liver_Disease_(5517625829).jpg",
  },
  "low-fiber-diet": {
    label: "Wikimedia Commons (Inflammed mucous layer of the intestinal villi depicting Celiac disease.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Inflammed_mucous_layer_of_the_intestinal_villi_depicting_Celiac_disease.jpg",
  },
  lumen: {
    label: "Wikimedia Commons (Microscopic anatomy of an artery en.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Microscopic_anatomy_of_an_artery_en.svg",
  },
  malnutrition: {
    label: "Wikimedia Commons (Anemia.JPG)",
    url: "https://commons.wikimedia.org/wiki/File:Anemia.JPG",
  },
  meconium: {
    label: "Wikimedia Commons (Biliary atresia.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Biliary_atresia.jpg",
  },
  "oxidative-stress": {
    label: "Wikimedia Commons (Role of reactive oxygen species in development of cancer.png)",
    url: "https://commons.wikimedia.org/wiki/File:Role_of_reactive_oxygen_species_in_development_of_cancer.png",
  },
  reuptake: {
    label: "Wikimedia Commons (TAAR1 Dopamine.svg)",
    url: "https://commons.wikimedia.org/wiki/File:TAAR1_Dopamine.svg",
  },
  "acid-fast-bacteria": {
    label:
      "Wikimedia Commons (Acid fast bacilli of Mycobacterium tuberculosis.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Acid_fast_bacilli_of_Mycobacterium_tuberculosis.jpg",
  },
  "amyloid-plaques": {
    label:
      "Wikimedia Commons (Cerebral amyloid angiopathy -2a- amyloid beta - high mag.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Cerebral_amyloid_angiopathy_-2a-_amyloid_beta_-_high_mag.jpg",
  },
  "spongiform-vacuole": {
    label: "Wikimedia Commons (Mechanisms of amyloid fibril formation.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Mechanisms_of_amyloid_fibril_formation.jpg",
  },
  "strenuous-exercise": {
    label: "Wikimedia Commons (Fatigue.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Fatigue.jpg",
  },
  "v-q-mismatch": {
    label: "Wikimedia Commons (Emphysema H and E.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Emphysema_H_and_E.jpg",
  },
  radiculopathy: {
    label: "Wikimedia Commons (l5-radiculopathy.png)",
    url: "https://commons.wikimedia.org/wiki/File:l5-radiculopathy.png",
  },
  "stocking-glove": {
    label: "Wikimedia Commons (Diabetic Neuropathy Device pic.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Diabetic_Neuropathy_Device_pic.jpg",
  },
  toxidrome: {
    label: "Wikimedia Commons (Local copy conditions/serotonin-syndrome.png)",
    url: "https://commons.wikimedia.org/",
  },
  glycation: {
    label: "Wikimedia Commons (HbA1c ודמנציה.png)",
    url: "https://commons.wikimedia.org/wiki/File:HbA1c_%D7%95%D7%93%D7%9E%D7%A0%D7%A6%D7%99%D7%94.png",
  },
  "vasa-nervorum": {
    label: "Wikimedia Commons (Diabetic Neuropathy Device pic.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Diabetic_Neuropathy_Device_pic.jpg",
  },
  "clotting-cascade": {
    label: "Wikimedia Commons (Coagulation cascade.png)",
    url: "https://commons.wikimedia.org/wiki/File:Coagulation_cascade.png",
  },
  "intrinsic-pathway": {
    label: "Wikimedia Commons (Coagulation cascade.png)",
    url: "https://commons.wikimedia.org/wiki/File:Coagulation_cascade.png",
  },
  "extrinsic-pathway": {
    label: "Wikimedia Commons (Coagulation cascade.png)",
    url: "https://commons.wikimedia.org/wiki/File:Coagulation_cascade.png",
  },
  protease: {
    label: "Wikimedia Commons (Aspartyl protease mechanism.png)",
    url: "https://commons.wikimedia.org/wiki/File:Aspartyl_protease_mechanism.png",
  },
  "pyogenic-infection": {
    label: "Wikimedia Commons (Abscess.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Abscess.jpg",
  },
  "robertsonian-translocation": {
    label:
      "Wikimedia Commons (Down syndrome translocation up.png), David Perez derivative, CC BY-SA 3.0",
    url: "https://commons.wikimedia.org/wiki/File:Down_syndrome_translocation_up.png",
  },
  "reentrant-circuit": {
    label: "Wikimedia Commons (Wpw2 (CardioNetworks ECGpedia).svg)",
    url: "https://commons.wikimedia.org/wiki/File:Wpw2_(CardioNetworks_ECGpedia).svg",
  },
  hyperandrogenism: {
    label: "Wikimedia Commons (PMC4103002 ircmj-16-9410-g001.png)",
    url: "https://commons.wikimedia.org/wiki/File:PMC4103002_ircmj-16-9410-g001.png",
  },
  anovulation: {
    label: "Wikimedia Commons (Hormones estradiol, progesterone, LH and FSH during menstrual cycle.svg)",
    url: "https://commons.wikimedia.org/wiki/File:Hormones_estradiol,_progesterone,_LH_and_FSH_during_menstrual_cycle.svg",
  },
  ovulation: {
    label: "Wikimedia Commons (Luteinizing hormone (LH) during menstrual cycle.png)",
    url: "https://commons.wikimedia.org/wiki/File:Luteinizing_hormone_(LH)_during_menstrual_cycle.png",
  },
  "ovulatory-dysfunction": {
    label: "Wikimedia Commons (Ultrasound scans and 3D rendering of polycystic ovaries.png)",
    url: "https://commons.wikimedia.org/wiki/File:Ultrasound_scans_and_3D_rendering_of_polycystic_ovaries.png",
  },
  analgesia: {
    label: "Wikimedia Commons (Touch Pain Pathways.png)",
    url: "https://commons.wikimedia.org/wiki/File:Touch_Pain_Pathways.png",
  },
  antiemesis: {
    label: "Wikimedia Commons (Area postrema micrograph.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Area_postrema_micrograph.jpg",
  },
  autocrine: {
    label: "Wikimedia Commons (Autocrine and Paracrine.png)",
    url: "https://commons.wikimedia.org/wiki/File:Autocrine_and_Paracrine.png",
  },
  bronchodilation: {
    label: "Wikimedia Commons (Beta-2 adrenergic receptor.png)",
    url: "https://commons.wikimedia.org/wiki/File:Beta-2_adrenergic_receptor.png",
  },
  paracrine: {
    label: "Wikimedia Commons (Autocrine and Paracrine.png)",
    url: "https://commons.wikimedia.org/wiki/File:Autocrine_and_Paracrine.png",
  },
  "humoral-immunity": {
    label: "Wikimedia Commons (Plasma cells.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Plasma_cells.jpg",
  },
  hypersensitivity: {
    label:
      "Wikimedia Commons (1. Types of hypersensitivity.tif), Cvallesv, CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:1._Types_of_hypersensitivity.tif",
  },
  "type-i-hypersensitivity": {
    label: "Wikimedia Commons (Mast cell.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Mast_cell.jpg",
  },
  "type-iii-hypersensitivity": {
    label: "Wikimedia Commons (Purpura2.JPG)",
    url: "https://commons.wikimedia.org/wiki/File:Purpura2.JPG",
  },
  "type-iv-hypersensitivity": {
    label: "Wikimedia Commons (Mantoux tuberculin skin test.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Mantoux_tuberculin_skin_test.jpg",
  },
};

export const PATHOGENESIS_IMAGE_CAPTIONS: Partial<
  Record<PathogenesisImageId, string>
> = {
  "blood-brain-barrier":
    "CNS meningeal layers and neurovascular unit — tight junctions and astrocyte end-feet restrict paracellular passage at the blood-brain barrier",
  hepatotoxicity:
    "Alcoholic cirrhosis — chronic hepatotoxic injury with nodular regeneration and portal hypertension",
  "low-fiber-diet":
    "Low dietary fiber reduces stool bulk and slows transit — predisposes to constipation and diverticulosis",
  lumen:
    "Arterial cross-section — endothelial-lined lumen is the hollow cavity through which blood flows, surrounded by tunica intima, media, and adventitia",
  malnutrition:
    "Severe anemia and pallor — protein-calorie malnutrition with wasting and micronutrient deficits",
  meconium:
    "Neonatal intestinal obstruction — failure to pass meconium suggests Hirschsprung disease or meconium ileus",
  "oxidative-stress":
    "Oxidative stress — imbalance of reactive oxygen species vs antioxidant defenses causing cellular damage",
  reuptake:
    "Presynaptic monoamine reuptake transporters — SERT, NET, and DAT terminate synaptic signaling",
  "acid-fast-bacteria":
    "Ziehl-Neelsen stain — red acid-fast bacilli (mycolic acid cell wall) of Mycobacterium tuberculosis",
  "amyloid-plaques":
    "Amyloid beta immunostain — extracellular brown Aβ deposits illustrate plaque-forming Alzheimer pathology",
  "spongiform-vacuole":
    "Spongiform vacuolation of cerebral cortex — hallmark histology of prion diseases such as Creutzfeldt-Jakob disease",
  "strenuous-exercise":
    "Physiologic fatigue after vigorous exertion — transient lactate and CK elevations expected",
  "v-q-mismatch":
    "Emphysema destroys alveolar walls — high V/Q dead-space physiology with impaired gas exchange",
  radiculopathy:
    "Lumbar disc herniation compressing nerve root — classic cause of radiculopathy",
  "stocking-glove":
    "Length-dependent peripheral neuropathy — distal symmetric sensory loss in stocking-glove distribution",
  toxidrome:
    "Opioid toxidrome — miosis, respiratory depression, and decreased consciousness",
  glycation:
    "Nonenzymatic glycation — HbA1c reflects glucose-bound hemoglobin and chronic hyperglycemia exposure",
  "vasa-nervorum":
    "Microvascular ischemia of vasa nervorum — key mechanism in diabetic peripheral neuropathy",
  "clotting-cascade":
    "Coagulation cascade — intrinsic, extrinsic, and common pathways converge on thrombin and fibrin formation",
  "intrinsic-pathway":
    "Coagulation cascade diagram — intrinsic pathway (contact activation via factors XII, XI, IX, VIII) converges on factor X",
  "extrinsic-pathway":
    "Coagulation cascade diagram — extrinsic pathway (tissue factor + factor VII) converges on factor X",
  protease:
    "Aspartyl protease catalytic mechanism — peptide bond hydrolysis by activated water at the active site",
  "pyogenic-infection":
    "Cutaneous abscess with surrounding erythema — classic suppurative pyogenic bacterial infection",
  "robertsonian-translocation":
    "Robertsonian translocation — fusion of acrocentric chromosome long arms (14;21) producing balanced carrier karyotype",
  "reentrant-circuit":
    "Wolff-Parkinson-White pre-excitation — accessory pathway enables atrioventricular reentrant tachycardia (AVRT) circuit",
  hyperandrogenism:
    "Severe hirsutism in a 17-year-old female with polycystic ovary syndrome — clinical manifestation of hyperandrogenism",
  anovulation:
    "Menstrual cycle hormone profile — anovulatory cycles lack the midcycle LH surge and luteal progesterone rise",
  ovulation:
    "Midcycle LH surge — triggers Graafian follicle rupture and oocyte release approximately 36 hours later",
  "ovulatory-dysfunction":
    "Transvaginal ultrasound of polycystic ovaries with multiple subcapsular follicles — classic morphology in PCOS-related ovulatory dysfunction",
  analgesia:
    "Spinothalamic and trigeminal pain pathways — nociceptive afferents ascend to thalamus and cortex; analgesia interrupts transmission at peripheral, spinal, or central sites",
  antiemesis:
    "Area postrema histology — circumventricular organ outside the blood–brain barrier; chemoreceptor trigger zone for vomiting and antiemetic drug targets",
  autocrine:
    "Autocrine signaling — secreted ligand binds receptors on the same cell that released it",
  bronchodilation:
    "β₂-adrenergic receptor — Gs-coupled cAMP signaling relaxes bronchial smooth muscle; target of albuterol and epinephrine in reactive airway disease",
  paracrine:
    "Paracrine signaling — secreted factor acts on neighboring cells in the local microenvironment",
  "humoral-immunity":
    "Plasma cells with eccentric clockface nuclei and abundant basophilic cytoplasm — terminally differentiated B cells that secrete antibodies into body fluids",
  hypersensitivity:
    "Gell and Coombs classification — types I–III are antibody-mediated (IgE or IgG/IgM); type IV is T-cell–mediated delayed hypersensitivity",
  "type-i-hypersensitivity":
    "Toluidine blue–stained mast cell with metachromatic granules — IgE cross-linking on FcεRI triggers immediate degranulation and histamine release",
  "type-iii-hypersensitivity":
    "Palpable purpura on the lower extremity in IgA vasculitis — immune complex deposition in small vessels with leukocytoclastic inflammation",
  "type-iv-hypersensitivity":
    "Positive Mantoux tuberculin skin test with induration — delayed T-cell–mediated granulomatous reaction read 48–72 hours after PPD injection",
};

export function getPathogenesisImageForId(id: string): string | undefined {
  return PATHOGENESIS_IMAGES[id as PathogenesisImageId];
}

export function getPathogenesisImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return PATHOGENESIS_IMAGE_ATTRIBUTIONS[id as PathogenesisImageId];
}

export function getPathogenesisImageCaptionForId(
  id: string,
): string | undefined {
  return PATHOGENESIS_IMAGE_CAPTIONS[id as PathogenesisImageId];
}
