import type { MediaAttribution } from "./media";
import type { SymptomEntry } from "./symptoms";

import brudzinskiSign from "../media/images/symptoms/brudzinski-sign.png?url";
import bullae from "../media/images/symptoms/bullae.jpg?url";
import calcinosis from "../media/images/symptoms/calcinosis.jpg?url";
import chestPain from "../media/images/symptoms/chest-pain.jpg?url";
import clubbing from "../media/images/symptoms/clubbing.jpg?url";
import cough from "../media/images/symptoms/cough.jpg?url";
import cyanosis from "../media/images/symptoms/cyanosis.jpg?url";
import dactylitis from "../media/images/symptoms/dactylitis.jpg?url";
import decreasedSkinTurgor from "../media/images/symptoms/decreased-skin-turgor.jpg?url";
import dryMucousMembranes from "../media/images/symptoms/dry-mucous-membranes.jpg?url";
import dysmorphicFacies from "../media/images/symptoms/dysmorphic-facies.jpg?url";
import dysuria from "../media/images/symptoms/dysuria.jpg?url";
import ecchymosis from "../media/images/symptoms/ecchymosis.jpg?url";
import easyFatigability from "../media/images/symptoms/easy-fatigability.jpg?url";
import edema from "../media/images/symptoms/edema.jpg?url";
import erythema from "../media/images/symptoms/erythema.jpg?url";
import excoriated from "../media/images/symptoms/excoriated.jpg?url";
import exertionalDyspnea from "../media/images/symptoms/exertional-dyspnea.jpg?url";
import fever from "../media/images/symptoms/fever.jpg?url";
import headache from "../media/images/symptoms/headache.jpg?url";
import hematochezia from "../media/images/symptoms/hematochezia.jpg?url";
import hyperpigmentation from "../media/images/symptoms/hyperpigmentation.svg?url";
import hematuria from "../media/images/symptoms/hematuria.jpg?url";
import hemianopsia from "../media/images/symptoms/hemianopsia.svg?url";
import hemiplegia from "../media/images/symptoms/hemiplegia.jpg?url";
import hemoptysis from "../media/images/symptoms/hemoptysis.jpg?url";
import internuclearOphthalmoplegia from "../media/images/symptoms/internuclear-ophthalmoplegia.svg?url";
import impairedWoundHealing from "../media/images/symptoms/impaired-wound-healing.svg?url";
import hyperactiveBowelSounds from "../media/images/symptoms/hyperactive-bowel-sounds.jpg?url";
import hypoxemia from "../media/images/symptoms/hypoxemia.jpg?url";
import induratedPlaque from "../media/images/symptoms/indurated-plaque.jpg?url";
import jaundice from "../media/images/symptoms/jaundice.jpg?url";
import kernigSign from "../media/images/symptoms/kernig-sign.jpg?url";
import lhermitteSign from "../media/images/symptoms/lhermitte-sign.svg?url";
import leukocytosis from "../media/images/cells/leukocyte.jpg?url";
import lichenification from "../media/images/symptoms/lichenification.jpg?url";
import lymphadenopathy from "../media/images/symptoms/lymphadenopathy.jpg?url";
import maculopapularRash from "../media/images/symptoms/maculopapular-rash.jpg?url";
import mania from "../media/images/symptoms/mania.svg?url";
import melena from "../media/images/symptoms/melena.jpg?url";
import morningStiffness from "../media/images/symptoms/morning-stiffness.jpg?url";
import moonFacies from "../media/images/symptoms/moon-facies.svg?url";
import nausea from "../media/images/symptoms/nausea.jpg?url";
import neutrophilia from "../media/images/cells/neutrophil.jpg?url";
import nodularLymphangitis from "../media/images/symptoms/nodular-lymphangitis.jpg?url";
import nuchalRigidity from "../media/images/symptoms/nuchal-rigidity.jpg?url";
import nystagmus from "../media/images/symptoms/nystagmus.svg?url";
import orthopnea from "../media/images/symptoms/orthopnea.jpg?url";
import palpitations from "../media/images/symptoms/palpitations.jpg?url";
import papule from "../media/images/symptoms/papule.jpg?url";
import peripheralEdema from "../media/images/symptoms/peripheral-edema.jpg?url";
import plaque from "../media/images/symptoms/plaque.jpg?url";
import pleuriticChestPain from "../media/images/symptoms/pleuritic-chest-pain.jpg?url";
import pnd from "../media/images/symptoms/pnd.jpg?url";
import polyuriaPolydipsia from "../media/images/symptoms/polyuria-polydipsia.jpg?url";
import polydipsia from "../media/images/symptoms/polydipsia.svg?url";
import polyuria from "../media/images/symptoms/polyuria.svg?url";
import presyncope from "../media/images/symptoms/presyncope.jpg?url";
import psychosis from "../media/images/symptoms/psychosis.svg?url";
import pruritus from "../media/images/symptoms/pruritus.jpg?url";
import pulmonaryEdema from "../media/images/symptoms/pulmonary-edema.jpg?url";
import purpura from "../media/images/symptoms/purpura.jpg?url";
import raynaudPhenomenon from "../media/images/symptoms/raynaud-phenomenon.jpg?url";
import sclerodactyly from "../media/images/symptoms/sclerodactyly.jpg?url";
import shortnessOfBreath from "../media/images/symptoms/shortness-of-breath.jpg?url";
import skinThickening from "../media/images/symptoms/skin-thickening.jpg?url";
import syncope from "../media/images/symptoms/syncope.jpg?url";
import tearingChestPain from "../media/images/symptoms/tearing-chest-pain.jpg?url";
import telangiectasia from "../media/images/symptoms/telangiectasia.jpg?url";
import thrombocytopenia from "../media/images/symptoms/thrombocytopenia.jpg?url";
import vesicle from "../media/images/symptoms/vesicle.jpg?url";
import vomiting from "../media/images/symptoms/vomiting.jpg?url";
import wateryDiarrhea from "../media/images/symptoms/watery-diarrhea.jpg?url";
import wheezing from "../media/images/symptoms/wheezing.jpg?url";
import xerosis from "../media/images/symptoms/xerosis.jpg?url";
import xerostomia from "../media/images/symptoms/xerostomia.jpg?url";

export type SymptomImageId = Extract<
  SymptomEntry["id"],
  | "brudzinski-sign"
  | "bullae"
  | "calcinosis"
  | "chest-pain"
  | "clubbing"
  | "cough"
  | "cyanosis"
  | "dactylitis"
  | "decreased-skin-turgor"
  | "dry-mucous-membranes"
  | "dysmorphic-facies"
  | "dysuria"
  | "ecchymosis"
  | "easy-fatigability"
  | "edema"
  | "erythema"
  | "excoriated"
  | "exertional-dyspnea"
  | "fever"
  | "headache"
  | "hematochezia"
  | "hyperpigmentation"
  | "hematuria"
  | "hemianopsia"
  | "hemiplegia"
  | "hemoptysis"
  | "internuclear-ophthalmoplegia"
  | "impaired-wound-healing"
  | "hyperactive-bowel-sounds"
  | "hypoxemia"
  | "indurated-plaque"
  | "jaundice"
  | "kernig-sign"
  | "lhermitte-sign"
  | "leukocytosis"
  | "lichenification"
  | "lymphadenopathy"
  | "maculopapular-rash"
  | "mania"
  | "melena"
  | "morning-stiffness"
  | "moon-facies"
  | "nausea"
  | "neutrophilia"
  | "nodular-lymphangitis"
  | "nuchal-rigidity"
  | "nystagmus"
  | "orthopnea"
  | "palpitations"
  | "papule"
  | "peripheral-edema"
  | "plaque"
  | "pleuritic-chest-pain"
  | "pnd"
  | "polyuria-polydipsia"
  | "polyuria"
  | "polydipsia"
  | "presyncope"
  | "psychosis"
  | "pruritus"
  | "pulmonary-edema"
  | "purpura"
  | "raynaud-phenomenon"
  | "sclerodactyly"
  | "shortness-of-breath"
  | "skin-thickening"
  | "syncope"
  | "tearing-chest-pain"
  | "telangiectasia"
  | "thrombocytopenia"
  | "vesicle"
  | "vomiting"
  | "watery-diarrhea"
  | "wheezing"
  | "xerosis"
  | "xerostomia"
  | "petechiae"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/symptoms/SOURCES.txt */
export const SYMPTOM_IMAGES: Partial<Record<SymptomImageId, string>> = {
  "brudzinski-sign": extensionAssetUrl(brudzinskiSign),
  "bullae": extensionAssetUrl(bullae),
  "calcinosis": extensionAssetUrl(calcinosis),
  "chest-pain": extensionAssetUrl(chestPain),
  "clubbing": extensionAssetUrl(clubbing),
  "cough": extensionAssetUrl(cough),
  "cyanosis": extensionAssetUrl(cyanosis),
  "dactylitis": extensionAssetUrl(dactylitis),
  "decreased-skin-turgor": extensionAssetUrl(decreasedSkinTurgor),
  "dry-mucous-membranes": extensionAssetUrl(dryMucousMembranes),
  "dysmorphic-facies": extensionAssetUrl(dysmorphicFacies),
  "dysuria": extensionAssetUrl(dysuria),
  "ecchymosis": extensionAssetUrl(ecchymosis),
  "easy-fatigability": extensionAssetUrl(easyFatigability),
  "edema": extensionAssetUrl(edema),
  "erythema": extensionAssetUrl(erythema),
  "excoriated": extensionAssetUrl(excoriated),
  "exertional-dyspnea": extensionAssetUrl(exertionalDyspnea),
  "fever": extensionAssetUrl(fever),
  "headache": extensionAssetUrl(headache),
  "hyperpigmentation": extensionAssetUrl(hyperpigmentation),
  "hematochezia": extensionAssetUrl(hematochezia),
  "hematuria": extensionAssetUrl(hematuria),
  "hemianopsia": extensionAssetUrl(hemianopsia),
  "hemiplegia": extensionAssetUrl(hemiplegia),
  "hemoptysis": extensionAssetUrl(hemoptysis),
  "internuclear-ophthalmoplegia": extensionAssetUrl(internuclearOphthalmoplegia),
  "impaired-wound-healing": extensionAssetUrl(impairedWoundHealing),
  "hyperactive-bowel-sounds": extensionAssetUrl(hyperactiveBowelSounds),
  "hypoxemia": extensionAssetUrl(hypoxemia),
  "indurated-plaque": extensionAssetUrl(induratedPlaque),
  "jaundice": extensionAssetUrl(jaundice),
  "kernig-sign": extensionAssetUrl(kernigSign),
  "lhermitte-sign": extensionAssetUrl(lhermitteSign),
  "leukocytosis": extensionAssetUrl(leukocytosis),
  "lichenification": extensionAssetUrl(lichenification),
  "lymphadenopathy": extensionAssetUrl(lymphadenopathy),
  "maculopapular-rash": extensionAssetUrl(maculopapularRash),
  "mania": extensionAssetUrl(mania),
  "melena": extensionAssetUrl(melena),
  "morning-stiffness": extensionAssetUrl(morningStiffness),
  "moon-facies": extensionAssetUrl(moonFacies),
  "nausea": extensionAssetUrl(nausea),
  "neutrophilia": extensionAssetUrl(neutrophilia),
  "nodular-lymphangitis": extensionAssetUrl(nodularLymphangitis),
  "nuchal-rigidity": extensionAssetUrl(nuchalRigidity),
  "nystagmus": extensionAssetUrl(nystagmus),
  "orthopnea": extensionAssetUrl(orthopnea),
  "palpitations": extensionAssetUrl(palpitations),
  "papule": extensionAssetUrl(papule),
  "peripheral-edema": extensionAssetUrl(peripheralEdema),
  "plaque": extensionAssetUrl(plaque),
  "pleuritic-chest-pain": extensionAssetUrl(pleuriticChestPain),
  "pnd": extensionAssetUrl(pnd),
  "polyuria-polydipsia": extensionAssetUrl(polyuriaPolydipsia),
  polyuria: extensionAssetUrl(polyuria),
  polydipsia: extensionAssetUrl(polydipsia),
  "presyncope": extensionAssetUrl(presyncope),
  "psychosis": extensionAssetUrl(psychosis),
  "pruritus": extensionAssetUrl(pruritus),
  "pulmonary-edema": extensionAssetUrl(pulmonaryEdema),
  "purpura": extensionAssetUrl(purpura),
  "raynaud-phenomenon": extensionAssetUrl(raynaudPhenomenon),
  "sclerodactyly": extensionAssetUrl(sclerodactyly),
  "shortness-of-breath": extensionAssetUrl(shortnessOfBreath),
  "skin-thickening": extensionAssetUrl(skinThickening),
  "syncope": extensionAssetUrl(syncope),
  "tearing-chest-pain": extensionAssetUrl(tearingChestPain),
  "telangiectasia": extensionAssetUrl(telangiectasia),
  "thrombocytopenia": extensionAssetUrl(thrombocytopenia),
  "vesicle": extensionAssetUrl(vesicle),
  "vomiting": extensionAssetUrl(vomiting),
  "watery-diarrhea": extensionAssetUrl(wateryDiarrhea),
  "wheezing": extensionAssetUrl(wheezing),
  "xerosis": extensionAssetUrl(xerosis),
  "xerostomia": extensionAssetUrl(xerostomia),
  "petechiae": extensionAssetUrl(purpura),
};

export const SYMPTOM_IMAGE_ATTRIBUTIONS: Partial<
  Record<SymptomImageId, MediaAttribution>
> = {
  "brudzinski-sign": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:brudzinski-sign.png" },
  "bullae": { label: "Wikimedia Commons (Bullous pemphigoid new image.jpg)", url: "https://commons.wikimedia.org/wiki/File:Bullous_pemphigoid_new_image.jpg" },
  "calcinosis": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:calcinosis.jpg" },
  "chest-pain": { label: "Wikimedia Commons (Depiction of a person suffering from chest pain.png)", url: "https://commons.wikimedia.org/wiki/File:Depiction_of_a_person_suffering_from_chest_pain.png" },
  "clubbing": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:clubbing.jpg" },
  "cough": { label: "Wikimedia Commons (Red Star Cough Cure (back) - 8558298660.jpg)", url: "https://commons.wikimedia.org/wiki/File:Red_Star_Cough_Cure_(back)_-_8558298660.jpg" },
  "cyanosis": { label: "Wikimedia Commons (My Heartbeat and Peripheral Oxygen Saturation (SpO2) (29609885543).jpg)", url: "https://commons.wikimedia.org/wiki/File:My_Heartbeat_and_Peripheral_Oxygen_Saturation_(SpO2)_(29609885543).jpg" },
  "dactylitis": { label: "Wikimedia Commons (Quick Reference Guide for Clinicians- Sickle Cell Disease- Comprehensive Screening and Management in Newborns and Infants (IA quickreferencegu00unse).pdf)", url: "https://commons.wikimedia.org/wiki/File:Quick_Reference_Guide_for_Clinicians-_Sickle_Cell_Disease-_Comprehensive_Screening_and_Management_in_Newborns_and_Infants_(IA_quickreferencegu00unse).pdf" },
  "decreased-skin-turgor": { label: "Wikimedia Commons (LowSkinTurgor.jpg)", url: "https://commons.wikimedia.org/wiki/File:LowSkinTurgor.jpg" },
  "dry-mucous-membranes": { label: "Wikimedia Commons (Xerostomia - Dry Mouth.jpg)", url: "https://commons.wikimedia.org/wiki/File:Xerostomia_-_Dry_Mouth.jpg" },
  "dysmorphic-facies": { label: "Wikimedia Commons (Down syndrome lg.jpg)", url: "https://commons.wikimedia.org/wiki/File:Down_syndrome_lg.jpg" },
  "dysuria": { label: "Wikimedia Commons (Bombax ceiba is a universe unto itself.jpg)", url: "https://commons.wikimedia.org/wiki/File:Bombax_ceiba_is_a_universe_unto_itself.jpg" },
  "ecchymosis": { label: "Wikimedia Commons (Bilateral periorbital ecchymosis)", url: "https://commons.wikimedia.org/wiki/File:Bilateral_periorbital_ecchymosis_(raccoon_eyes).jpg" },
  "easy-fatigability": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:easy-fatigability.jpg" },
  "edema": { label: "Wikimedia Commons (Depiction of different types of Edema.png)", url: "https://commons.wikimedia.org/wiki/File:Depiction_of_different_types_of_Edema.png" },
  "erythema": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:erythema.jpg" },
  "excoriated": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:excoriated.jpg" },
  "exertional-dyspnea": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:exertional-dyspnea.jpg" },
  "fever": { label: "Wikimedia Commons (Symptoms of coronavirus disease 2019 2.0.svg)", url: "https://commons.wikimedia.org/wiki/File:Symptoms_of_coronavirus_disease_2019_2.0.svg" },
  "headache": { label: "Wikimedia Commons (Migraine.jpg)", url: "https://commons.wikimedia.org/wiki/File:Migraine.jpg" },
  hyperpigmentation: {
    label: "Created locally; reference: Hyperpigmentation",
    url: "https://en.wikipedia.org/wiki/Hyperpigmentation",
  },
  "hematochezia": { label: "Wikimedia Commons (Hämatochezie Dezember 2021.jpg)", url: "https://commons.wikimedia.org/wiki/File:Hämatochezie_Dezember_2021.jpg" },
  "hematuria": { label: "Wikimedia Commons (HematuriaTrauma.JPG)", url: "https://commons.wikimedia.org/wiki/File:HematuriaTrauma.JPG" },
  "hemianopsia": { label: "Wikimedia Commons (Left-homonymous-hemianopia.svg)", url: "https://commons.wikimedia.org/wiki/File:Left-homonymous-hemianopia.svg" },
  "hemiplegia": { label: "Wikimedia Commons (Hemiatrophy and hemiplegia of the left side of the tongue Wellcome L0062734.jpg)", url: "https://commons.wikimedia.org/wiki/File:Hemiatrophy_and_hemiplegia_of_the_left_side_of_the_tongue_Wellcome_L0062734.jpg" },
  "hemoptysis": { label: "Wikimedia Commons (Krev na gázových čtvercích.jpg)", url: "https://commons.wikimedia.org/wiki/File:Krev_na_gázových_čtvercích.jpg" },
  "internuclear-ophthalmoplegia": { label: "Created locally; reference: Internuclear ophthalmoplegia", url: "https://en.wikipedia.org/wiki/Internuclear_ophthalmoplegia" },
  "impaired-wound-healing": { label: "Created locally; reference: Wound healing", url: "https://en.wikipedia.org/wiki/Wound_healing" },
  "hyperactive-bowel-sounds": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:hyperactive-bowel-sounds.jpg" },
  "hypoxemia": { label: "Wikimedia Commons (My Heartbeat and Peripheral Oxygen Saturation (SpO2) (29609885543).jpg)", url: "https://commons.wikimedia.org/wiki/File:My_Heartbeat_and_Peripheral_Oxygen_Saturation_(SpO2)_(29609885543).jpg" },
  "indurated-plaque": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:indurated-plaque.jpg" },
  "jaundice": { label: "Wikimedia Commons (Troupial (Icterus icterus).jpg)", url: "https://commons.wikimedia.org/wiki/File:Troupial_(Icterus_icterus).jpg" },
  "kernig-sign": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:kernig-sign.jpg" },
  "lhermitte-sign": { label: "Created locally; reference: Lhermitte's sign", url: "https://en.wikipedia.org/wiki/Lhermitte%27s_sign" },
  "leukocytosis": { label: "Wikimedia Commons (WBC in peripheral smear)", url: "https://commons.wikimedia.org/wiki/File:WBC_(neutrophil)_at_centre,_numerous_erythrocytes_and_platelets_(dot_like_bodies)_in_Wright's_stained_peripheral_blood_smear_(PBS)_microscopy.jpg" },
  "lichenification": { label: "Wikimedia Commons (Clinical features of atopic dermatitis in English.png)", url: "https://commons.wikimedia.org/wiki/File:Clinical_features_of_atopic_dermatitis_in_English.png" },
  "lymphadenopathy": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:lymphadenopathy.jpg" },
  "maculopapular-rash": { label: "Wikimedia Commons (Generalized ACLE.jpg)", url: "https://commons.wikimedia.org/wiki/File:Generalized_ACLE.jpg" },
  "mania": { label: "Created locally; reference: Mania", url: "https://en.wikipedia.org/wiki/Mania" },
  "melena": { label: "Wikimedia Commons (Melena Bleeding DU.jpg)", url: "https://commons.wikimedia.org/wiki/File:Melena_Bleeding_DU.jpg" },
  "morning-stiffness": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:morning-stiffness.jpg" },
  "moon-facies": { label: "Created locally; reference: Cushing's syndrome", url: "https://en.wikipedia.org/wiki/Cushing%27s_syndrome" },
  "nausea": { label: "Wikimedia Commons (Fphar-09-00913-g005.jpg)", url: "https://commons.wikimedia.org/wiki/File:Fphar-09-00913-g005.jpg" },
  "neutrophilia": { label: "Wikimedia Commons (Blausen Neutrophil)", url: "https://commons.wikimedia.org/wiki/File:Blausen_0676_Neutrophil_(crop).png" },
  "nodular-lymphangitis": { label: "Wikimedia Commons (Sporotrichosis by the fungus Sporothrix schenckii PHIL 3940 lores.jpg)", url: "https://commons.wikimedia.org/wiki/File:Sporotrichosis_by_the_fungus_Sporothrix_schenckii_PHIL_3940_lores.jpg" },
  "nuchal-rigidity": { label: "Wikimedia Commons (Books from the Library of Congress (IA moderndiagnosi00shef).pdf)", url: "https://commons.wikimedia.org/wiki/File:Books_from_the_Library_of_Congress_(IA_moderndiagnosi00shef).pdf" },
  "nystagmus": { label: "Created locally; reference: Nystagmus", url: "https://en.wikipedia.org/wiki/Nystagmus" },
  "orthopnea": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:orthopnea.jpg" },
  "palpitations": { label: "Wikimedia Commons (ECG Atrial Fibrillation 98 bpm.jpg)", url: "https://commons.wikimedia.org/wiki/File:ECG_Atrial_Fibrillation_98_bpm.jpg" },
  "papule": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:papule.jpg" },
  "peripheral-edema": { label: "Wikimedia Commons (Pitting Edema2008.jpg)", url: "https://commons.wikimedia.org/wiki/File:Pitting_Edema2008.jpg" },
  "plaque": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:plaque.jpg" },
  "pleuritic-chest-pain": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:pleuritic-chest-pain.jpg" },
  "pnd": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:pnd.jpg" },
  "polyuria-polydipsia": { label: "Wikimedia Commons (Medical communications of the Massachusetts Medical Society (1913) (14781096501).jpg)", url: "https://commons.wikimedia.org/wiki/File:Medical_communications_of_the_Massachusetts_Medical_Society_(1913)_(14781096501).jpg" },
  polyuria: {
    label: "Created locally; reference: Polyuria",
    url: "https://en.wikipedia.org/wiki/Polyuria",
  },
  polydipsia: {
    label: "Created locally; reference: Polydipsia",
    url: "https://en.wikipedia.org/wiki/Polydipsia",
  },
  "presyncope": { label: "Wikimedia Commons (Pietro Longhi 027.jpg)", url: "https://commons.wikimedia.org/wiki/File:Pietro_Longhi_027.jpg" },
  "psychosis": { label: "Created locally; reference: Psychosis", url: "https://en.wikipedia.org/wiki/Psychosis" },
  "pruritus": { label: "Wikimedia Commons (Photographic atlas of the diseases of the skin; a series of ninety-six plates, comprising nearly two hundred illustrations, with descriptive text, and a treatise on cutaneous therapeutics (1905) (14783268942).jpg)", url: "https://commons.wikimedia.org/wiki/File:Photographic_atlas_of_the_diseases_of_the_skin;_a_series_of_ninety-six_plates,_comprising_nearly_two_hundred_illustrations,_with_descriptive_text,_and_a_treatise_on_cutaneous_therapeutics_(1905)_(14783268942).jpg" },
  "pulmonary-edema": { label: "Wikimedia Commons (Respiratory system - Pulmonary edema -- Smart-Servier.png)", url: "https://commons.wikimedia.org/wiki/File:Respiratory_system_-_Pulmonary_edema_--_Smart-Servier.png" },
  "purpura": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:purpura.jpg" },
  "raynaud-phenomenon": { label: "Wikimedia Commons (Raynaud syndrome on female airman's hand.jpg)", url: "https://commons.wikimedia.org/wiki/File:Raynaud_syndrome_on_female_airman's_hand.jpg" },
  "sclerodactyly": { label: "Wikimedia Commons (Calcinosis of CREST syndrome.jpg)", url: "https://commons.wikimedia.org/wiki/File:Calcinosis_of_CREST_syndrome.jpg" },
  "shortness-of-breath": { label: "Wikimedia Commons (SymptomsFeverCoughSOB (cropped).jpg)", url: "https://commons.wikimedia.org/wiki/File:SymptomsFeverCoughSOB_(cropped).jpg" },
  "skin-thickening": { label: "Wikimedia Commons (On scleroderma (IA 101695003.nlm.nih.gov).pdf)", url: "https://commons.wikimedia.org/wiki/File:On_scleroderma_(IA_101695003.nlm.nih.gov).pdf" },
  "syncope": { label: "Wikimedia Commons (Pietro Longhi 027.jpg)", url: "https://commons.wikimedia.org/wiki/File:Pietro_Longhi_027.jpg" },
  "tearing-chest-pain": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:tearing-chest-pain.jpg" },
  "telangiectasia": { label: "Wikimedia Commons (SpiderAngioma.jpg)", url: "https://commons.wikimedia.org/wiki/File:SpiderAngioma.jpg" },
  "thrombocytopenia": { label: "Wikimedia Commons (Oral petechiae.JPG)", url: "https://commons.wikimedia.org/wiki/File:Oral_petechiae.JPG" },
  "vesicle": { label: "Wikimedia Commons (Diseases of the mouth; for physicians, dentists, medical and dental students (1912) (14772644622).jpg)", url: "https://commons.wikimedia.org/wiki/File:Diseases_of_the_mouth;_for_physicians,_dentists,_medical_and_dental_students_(1912)_(14772644622).jpg" },
  "vomiting": { label: "Wikimedia Commons (Emesis (Emesis Cerea).JPG)", url: "https://commons.wikimedia.org/wiki/File:Emesis_(Emesis_Cerea).JPG" },
  "watery-diarrhea": { label: "Wikimedia Commons (Cholera patient stool.jpg)", url: "https://commons.wikimedia.org/wiki/File:Cholera_patient_stool.jpg" },
  "wheezing": { label: "Wikimedia Commons (UOTW 48 - Ultrasound of the Week 5.jpg)", url: "https://commons.wikimedia.org/wiki/File:UOTW_48_-_Ultrasound_of_the_Week_5.jpg" },
  "xerosis": { label: "Wikimedia Commons (Xeroderma knuckles.jpg)", url: "https://commons.wikimedia.org/wiki/File:Xeroderma_knuckles.jpg" },
  "xerostomia": { label: "Wikimedia Commons (Xerostomia - Dry Mouth.jpg)", url: "https://commons.wikimedia.org/wiki/File:Xerostomia_-_Dry_Mouth.jpg" },
  "petechiae": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:purpura.jpg" },
};

export const SYMPTOM_IMAGE_CAPTIONS: Partial<Record<SymptomImageId, string>> = {
  "brudzinski-sign": "Brudziński sign — passive neck flexion causes involuntary hip/knee flexion in meningitis",
  "bullae": "Bullous pemphigoid — tense subepidermal bullae",
  "calcinosis": "Calcinosis cutis — subcutaneous calcium deposits in systemic sclerosis",
  "chest-pain": "Clinical or pathologic image illustrating chest pain",
  "clubbing": "Finger clubbing — increased convexity of nail bed with loss of Lovibond angle",
  "cough": "Clinical or pathologic image illustrating cough",
  "cyanosis": "Peripheral cyanosis of the lower extremity due to ischemia",
  "dactylitis": "Painful swelling of the hands — dactylitis in sickle cell disease",
  "decreased-skin-turgor": "Clinical or pathologic image illustrating decreased skin turgor",
  "dry-mucous-membranes": "Clinical or pathologic image illustrating dry mucous membranes",
  "dysmorphic-facies": "Characteristic facial features of Down syndrome — flat profile, upslanting palpebral fissures, epicanthal folds, flat nasal bridge",
  "dysuria": "Clinical or pathologic image illustrating dysuria",
  "ecchymosis": "Periorbital ecchymosis — non-blanching blood extravasation into skin",
  "easy-fatigability": "Clinical or pathologic image illustrating easy fatigability",
  "edema": "Clinical or pathologic image illustrating edema",
  "erythema": "Sharply demarcated erythema of recurrent erysipelas (vasodilation with infection)",
  "excoriated": "Clinical or pathologic image illustrating excoriated",
  "exertional-dyspnea": "Clinical or pathologic image illustrating exertional dyspnea",
  "fever": "Clinical or pathologic image illustrating fever",
  "headache": "Clinical or pathologic image illustrating headache",
  "hematochezia": "Clinical or pathologic image illustrating hematochezia",
  "hematuria": "Clinical or pathologic image illustrating hematuria",
  "hemianopsia": "Clinical or pathologic image illustrating hemianopsia",
  "hemiplegia": "Clinical or pathologic image illustrating hemiplegia",
  "hemoptysis": "Clinical or pathologic image illustrating hemoptysis",
  "internuclear-ophthalmoplegia": "INO — impaired ipsilateral adduction with contralateral abducting nystagmus from MLF lesion",
  "impaired-wound-healing": "Delayed tissue repair — classic with chronic glucocorticoids and diabetes",
  "hyperactive-bowel-sounds": "Clinical or pathologic image illustrating hyperactive bowel sounds",
  "hypoxemia": "Clinical or pathologic image illustrating hypoxemia",
  "indurated-plaque": "Clinical or pathologic image illustrating indurated plaque",
  "jaundice": "Scleral icterus — yellow discoloration of the conjunctiva from hyperbilirubinemia",
  "kernig-sign": "Kernig sign — resistance to knee extension with hip flexed suggests meningeal irritation",
  "lhermitte-sign": "Lhermitte sign — electric shock down the spine on neck flexion from cervical cord demyelination",
  "leukocytosis": "Peripheral blood smear with a leukocyte among erythrocytes and platelets",
  "lichenification": "Clinical or pathologic image illustrating lichenification",
  "lymphadenopathy": "Cervical lymphadenopathy — enlarged palpable anterior cervical lymph nodes",
  "maculopapular-rash": "Maculopapular eruption — coalescent erythematous macules and papules",
  "mania": "Elevated mood, decreased sleep need, grandiosity — bipolar I or steroid-induced",
  "melena": "Clinical or pathologic image illustrating melena",
  "morning-stiffness": "Clinical or pathologic image illustrating morning stiffness",
  "moon-facies": "Rounded puffy face from cortisol excess — classic Cushingoid feature",
  "nausea": "Clinical or pathologic image illustrating nausea",
  "neutrophilia": "Neutrophil morphology — segmented granulocyte increased in bacterial infection and steroid demargination",
  "nodular-lymphangitis": "Clinical or pathologic image illustrating nodular lymphangitis",
  "nuchal-rigidity": "Nuchal rigidity — resistance to passive neck flexion in meningeal irritation",
  "nystagmus": "Rhythmic involuntary eye oscillation — fast and slow phases; abducting nystagmus in INO",
  "orthopnea": "Clinical or pathologic image illustrating orthopnea",
  "palpitations": "Clinical or pathologic image illustrating palpitations",
  "papule": "Violaceous flat-topped papules of lichen planus on the shins (solid, ≤1 cm)",
  "peripheral-edema": "Clinical or pathologic image illustrating peripheral edema",
  "plaque": "Erythematous plaque of psoriasis with silvery scale (solid, >1 cm)",
  "pleuritic-chest-pain": "Clinical or pathologic image illustrating pleuritic chest pain",
  "pnd": "Clinical or pathologic image illustrating pnd",
  "polyuria-polydipsia": "Clinical or pathologic image illustrating polyuria polydipsia",
  polyuria: "Excessive urine output — osmotic diuresis in diabetes mellitus or impaired concentrating in diabetes insipidus",
  polydipsia: "Excessive thirst — compensatory to polyuria or primary psychogenic polydipsia",
  hyperpigmentation: "Increased skin pigment — Addison disease (↑ ACTH/MSH), hemochromatosis, or venous stasis hemosiderin",
  "presyncope": "Clinical or pathologic image illustrating presyncope",
  "psychosis": "Hallucinations and delusions — schizophrenia, steroids, substances",
  "pruritus": "Clinical or pathologic image illustrating pruritus",
  "pulmonary-edema": "Clinical or pathologic image illustrating pulmonary edema",
  "purpura": "Petechiae and purpura on the lower limb from medication-induced leukocytoclastic vasculitis",
  "raynaud-phenomenon": "Clinical or pathologic image illustrating raynaud phenomenon",
  "sclerodactyly": "Clinical or pathologic image illustrating sclerodactyly",
  "shortness-of-breath": "Clinical or pathologic image illustrating shortness of breath",
  "skin-thickening": "Clinical or pathologic image illustrating skin thickening",
  "syncope": "Clinical or pathologic image illustrating syncope",
  "tearing-chest-pain": "Clinical or pathologic image illustrating tearing chest pain",
  "telangiectasia": "Spider angioma — central arteriole with radiating telangiectasias",
  "thrombocytopenia": "Clinical or pathologic image illustrating thrombocytopenia",
  "vesicle": "Herpes labialis vesicles — fluid-filled epidermal lesions <1 cm",
  "vomiting": "Clinical or pathologic image illustrating vomiting",
  "watery-diarrhea": "Clinical or pathologic image illustrating watery diarrhea",
  "wheezing": "Clinical or pathologic image illustrating wheezing",
  "xerosis": "Dry, scaling skin over the knuckles consistent with xerosis",
  "xerostomia": "Dry mouth illustration showing reduced salivary moisture",
  "petechiae": "Non-blanching petechiae on the lower limb from leukocytoclastic vasculitis",
};

export function getSymptomImageForId(id: string): string | undefined {
  return SYMPTOM_IMAGES[id as SymptomImageId];
}

export function getSymptomImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return SYMPTOM_IMAGE_ATTRIBUTIONS[id as SymptomImageId];
}

export function getSymptomImageCaptionForId(id: string): string | undefined {
  return SYMPTOM_IMAGE_CAPTIONS[id as SymptomImageId];
}
