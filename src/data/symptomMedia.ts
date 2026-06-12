import type { MediaAttribution } from "./media";
import type { SymptomEntry } from "./symptoms";

import brudzinskiSign from "../media/images/symptoms/brudzinski-sign.png?url";
import bullae from "../media/images/symptoms/bullae.jpg?url";
import calcinosis from "../media/images/symptoms/calcinosis.jpg?url";
import clubbing from "../media/images/symptoms/clubbing.jpg?url";
import cyanosis from "../media/images/symptoms/cyanosis.jpg?url";
import dactylitis from "../media/images/symptoms/dactylitis.jpg?url";
import decreasedSkinTurgor from "../media/images/symptoms/decreased-skin-turgor.jpg?url";
import dysuria from "../media/images/symptoms/dysuria.jpg?url";
import erythema from "../media/images/symptoms/erythema.jpg?url";
import headache from "../media/images/symptoms/headache.jpg?url";
import hematuria from "../media/images/symptoms/hematuria.jpg?url";
import hemianopsia from "../media/images/symptoms/hemianopsia.svg?url";
import hemoptysis from "../media/images/symptoms/hemoptysis.jpg?url";
import hypoxemia from "../media/images/symptoms/hypoxemia.jpg?url";
import jaundice from "../media/images/symptoms/jaundice.jpg?url";
import kernigSign from "../media/images/symptoms/kernig-sign.jpg?url";
import lichenification from "../media/images/symptoms/lichenification.jpg?url";
import lymphadenopathy from "../media/images/symptoms/lymphadenopathy.jpg?url";
import maculopapularRash from "../media/images/symptoms/maculopapular-rash.jpg?url";
import nodularLymphangitis from "../media/images/symptoms/nodular-lymphangitis.jpg?url";
import nuchalRigidity from "../media/images/symptoms/nuchal-rigidity.jpg?url";
import palpitations from "../media/images/symptoms/palpitations.jpg?url";
import papule from "../media/images/symptoms/papule.jpg?url";
import peripheralEdema from "../media/images/symptoms/peripheral-edema.jpg?url";
import plaque from "../media/images/symptoms/plaque.jpg?url";
import polyuriaPolydipsia from "../media/images/symptoms/polyuria-polydipsia.jpg?url";
import presyncope from "../media/images/symptoms/presyncope.jpg?url";
import purpura from "../media/images/symptoms/purpura.jpg?url";
import raynaudPhenomenon from "../media/images/symptoms/raynaud-phenomenon.jpg?url";
import sclerodactyly from "../media/images/symptoms/sclerodactyly.jpg?url";
import skinThickening from "../media/images/symptoms/skin-thickening.jpg?url";
import syncope from "../media/images/symptoms/syncope.jpg?url";
import telangiectasia from "../media/images/symptoms/telangiectasia.jpg?url";
import thrombocytopenia from "../media/images/symptoms/thrombocytopenia.jpg?url";
import vesicle from "../media/images/symptoms/vesicle.jpg?url";
import vomiting from "../media/images/symptoms/vomiting.jpg?url";
import wateryDiarrhea from "../media/images/symptoms/watery-diarrhea.jpg?url";

export type SymptomImageId = Extract<
  SymptomEntry["id"],
  | "brudzinski-sign"
  | "bullae"
  | "calcinosis"
  | "clubbing"
  | "cyanosis"
  | "dactylitis"
  | "decreased-skin-turgor"
  | "dysuria"
  | "erythema"
  | "headache"
  | "hematuria"
  | "hemianopsia"
  | "hemoptysis"
  | "hypoxemia"
  | "jaundice"
  | "kernig-sign"
  | "lichenification"
  | "lymphadenopathy"
  | "maculopapular-rash"
  | "nodular-lymphangitis"
  | "nuchal-rigidity"
  | "palpitations"
  | "papule"
  | "peripheral-edema"
  | "plaque"
  | "polyuria-polydipsia"
  | "presyncope"
  | "purpura"
  | "raynaud-phenomenon"
  | "sclerodactyly"
  | "skin-thickening"
  | "syncope"
  | "telangiectasia"
  | "thrombocytopenia"
  | "vesicle"
  | "vomiting"
  | "watery-diarrhea"
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
  "clubbing": extensionAssetUrl(clubbing),
  "cyanosis": extensionAssetUrl(cyanosis),
  "dactylitis": extensionAssetUrl(dactylitis),
  "decreased-skin-turgor": extensionAssetUrl(decreasedSkinTurgor),
  "dysuria": extensionAssetUrl(dysuria),
  "erythema": extensionAssetUrl(erythema),
  "headache": extensionAssetUrl(headache),
  "hematuria": extensionAssetUrl(hematuria),
  "hemianopsia": extensionAssetUrl(hemianopsia),
  "hemoptysis": extensionAssetUrl(hemoptysis),
  "hypoxemia": extensionAssetUrl(hypoxemia),
  "jaundice": extensionAssetUrl(jaundice),
  "kernig-sign": extensionAssetUrl(kernigSign),
  "lichenification": extensionAssetUrl(lichenification),
  "lymphadenopathy": extensionAssetUrl(lymphadenopathy),
  "maculopapular-rash": extensionAssetUrl(maculopapularRash),
  "nodular-lymphangitis": extensionAssetUrl(nodularLymphangitis),
  "nuchal-rigidity": extensionAssetUrl(nuchalRigidity),
  "palpitations": extensionAssetUrl(palpitations),
  "papule": extensionAssetUrl(papule),
  "peripheral-edema": extensionAssetUrl(peripheralEdema),
  "plaque": extensionAssetUrl(plaque),
  "polyuria-polydipsia": extensionAssetUrl(polyuriaPolydipsia),
  "presyncope": extensionAssetUrl(presyncope),
  "purpura": extensionAssetUrl(purpura),
  "raynaud-phenomenon": extensionAssetUrl(raynaudPhenomenon),
  "sclerodactyly": extensionAssetUrl(sclerodactyly),
  "skin-thickening": extensionAssetUrl(skinThickening),
  "syncope": extensionAssetUrl(syncope),
  "telangiectasia": extensionAssetUrl(telangiectasia),
  "thrombocytopenia": extensionAssetUrl(thrombocytopenia),
  "vesicle": extensionAssetUrl(vesicle),
  "vomiting": extensionAssetUrl(vomiting),
  "watery-diarrhea": extensionAssetUrl(wateryDiarrhea),
  "petechiae": extensionAssetUrl(purpura),
};

export const SYMPTOM_IMAGE_ATTRIBUTIONS: Partial<
  Record<SymptomImageId, MediaAttribution>
> = {
  "brudzinski-sign": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:brudzinski-sign.png" },
  "bullae": { label: "Wikimedia Commons (Bullous pemphigoid new image.jpg)", url: "https://commons.wikimedia.org/wiki/File:Bullous_pemphigoid_new_image.jpg" },
  "calcinosis": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:calcinosis.jpg" },
  "clubbing": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:clubbing.jpg" },
  "cyanosis": { label: "Wikimedia Commons (My Heartbeat and Peripheral Oxygen Saturation (SpO2) (29609885543).jpg)", url: "https://commons.wikimedia.org/wiki/File:My_Heartbeat_and_Peripheral_Oxygen_Saturation_(SpO2)_(29609885543).jpg" },
  "dactylitis": { label: "Wikimedia Commons (Quick Reference Guide for Clinicians- Sickle Cell Disease- Comprehensive Screening and Management in Newborns and Infants (IA quickreferencegu00unse).pdf)", url: "https://commons.wikimedia.org/wiki/File:Quick_Reference_Guide_for_Clinicians-_Sickle_Cell_Disease-_Comprehensive_Screening_and_Management_in_Newborns_and_Infants_(IA_quickreferencegu00unse).pdf" },
  "decreased-skin-turgor": { label: "Wikimedia Commons (LowSkinTurgor.jpg)", url: "https://commons.wikimedia.org/wiki/File:LowSkinTurgor.jpg" },
  "dysuria": { label: "Wikimedia Commons (Bombax ceiba is a universe unto itself.jpg)", url: "https://commons.wikimedia.org/wiki/File:Bombax_ceiba_is_a_universe_unto_itself.jpg" },
  "erythema": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:erythema.jpg" },
  "headache": { label: "Wikimedia Commons (Migraine.jpg)", url: "https://commons.wikimedia.org/wiki/File:Migraine.jpg" },
  "hematuria": { label: "Wikimedia Commons (HematuriaTrauma.JPG)", url: "https://commons.wikimedia.org/wiki/File:HematuriaTrauma.JPG" },
  "hemianopsia": { label: "Wikimedia Commons (Left-homonymous-hemianopia.svg)", url: "https://commons.wikimedia.org/wiki/File:Left-homonymous-hemianopia.svg" },
  "hemoptysis": { label: "Wikimedia Commons (Krev na gázových čtvercích.jpg)", url: "https://commons.wikimedia.org/wiki/File:Krev_na_gázových_čtvercích.jpg" },
  "hypoxemia": { label: "Wikimedia Commons (My Heartbeat and Peripheral Oxygen Saturation (SpO2) (29609885543).jpg)", url: "https://commons.wikimedia.org/wiki/File:My_Heartbeat_and_Peripheral_Oxygen_Saturation_(SpO2)_(29609885543).jpg" },
  "jaundice": { label: "Wikimedia Commons (Troupial (Icterus icterus).jpg)", url: "https://commons.wikimedia.org/wiki/File:Troupial_(Icterus_icterus).jpg" },
  "kernig-sign": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:kernig-sign.jpg" },
  "lichenification": { label: "Wikimedia Commons (Clinical features of atopic dermatitis in English.png)", url: "https://commons.wikimedia.org/wiki/File:Clinical_features_of_atopic_dermatitis_in_English.png" },
  "lymphadenopathy": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:lymphadenopathy.jpg" },
  "maculopapular-rash": { label: "Wikimedia Commons (Generalized ACLE.jpg)", url: "https://commons.wikimedia.org/wiki/File:Generalized_ACLE.jpg" },
  "nodular-lymphangitis": { label: "Wikimedia Commons (Sporotrichosis by the fungus Sporothrix schenckii PHIL 3940 lores.jpg)", url: "https://commons.wikimedia.org/wiki/File:Sporotrichosis_by_the_fungus_Sporothrix_schenckii_PHIL_3940_lores.jpg" },
  "nuchal-rigidity": { label: "Wikimedia Commons (Books from the Library of Congress (IA moderndiagnosi00shef).pdf)", url: "https://commons.wikimedia.org/wiki/File:Books_from_the_Library_of_Congress_(IA_moderndiagnosi00shef).pdf" },
  "palpitations": { label: "Wikimedia Commons (ECG Atrial Fibrillation 98 bpm.jpg)", url: "https://commons.wikimedia.org/wiki/File:ECG_Atrial_Fibrillation_98_bpm.jpg" },
  "papule": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:papule.jpg" },
  "peripheral-edema": { label: "Wikimedia Commons (Pitting Edema2008.jpg)", url: "https://commons.wikimedia.org/wiki/File:Pitting_Edema2008.jpg" },
  "plaque": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:plaque.jpg" },
  "polyuria-polydipsia": { label: "Wikimedia Commons (Medical communications of the Massachusetts Medical Society (1913) (14781096501).jpg)", url: "https://commons.wikimedia.org/wiki/File:Medical_communications_of_the_Massachusetts_Medical_Society_(1913)_(14781096501).jpg" },
  "presyncope": { label: "Wikimedia Commons (Pietro Longhi 027.jpg)", url: "https://commons.wikimedia.org/wiki/File:Pietro_Longhi_027.jpg" },
  "purpura": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:purpura.jpg" },
  "raynaud-phenomenon": { label: "Wikimedia Commons (Raynaud syndrome on female airman's hand.jpg)", url: "https://commons.wikimedia.org/wiki/File:Raynaud_syndrome_on_female_airman's_hand.jpg" },
  "sclerodactyly": { label: "Wikimedia Commons (Calcinosis of CREST syndrome.jpg)", url: "https://commons.wikimedia.org/wiki/File:Calcinosis_of_CREST_syndrome.jpg" },
  "skin-thickening": { label: "Wikimedia Commons (On scleroderma (IA 101695003.nlm.nih.gov).pdf)", url: "https://commons.wikimedia.org/wiki/File:On_scleroderma_(IA_101695003.nlm.nih.gov).pdf" },
  "syncope": { label: "Wikimedia Commons (Pietro Longhi 027.jpg)", url: "https://commons.wikimedia.org/wiki/File:Pietro_Longhi_027.jpg" },
  "telangiectasia": { label: "Wikimedia Commons (SpiderAngioma.jpg)", url: "https://commons.wikimedia.org/wiki/File:SpiderAngioma.jpg" },
  "thrombocytopenia": { label: "Wikimedia Commons (Oral petechiae.JPG)", url: "https://commons.wikimedia.org/wiki/File:Oral_petechiae.JPG" },
  "vesicle": { label: "Wikimedia Commons (Diseases of the mouth; for physicians, dentists, medical and dental students (1912) (14772644622).jpg)", url: "https://commons.wikimedia.org/wiki/File:Diseases_of_the_mouth;_for_physicians,_dentists,_medical_and_dental_students_(1912)_(14772644622).jpg" },
  "vomiting": { label: "Wikimedia Commons (Emesis (Emesis Cerea).JPG)", url: "https://commons.wikimedia.org/wiki/File:Emesis_(Emesis_Cerea).JPG" },
  "watery-diarrhea": { label: "Wikimedia Commons (Cholera patient stool.jpg)", url: "https://commons.wikimedia.org/wiki/File:Cholera_patient_stool.jpg" },
  "petechiae": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:purpura.jpg" },
};

export const SYMPTOM_IMAGE_CAPTIONS: Partial<Record<SymptomImageId, string>> = {
  "brudzinski-sign": "Brudziński sign — passive neck flexion causes involuntary hip/knee flexion in meningitis",
  "bullae": "Bullous pemphigoid — tense subepidermal bullae",
  "calcinosis": "Calcinosis cutis — subcutaneous calcium deposits in systemic sclerosis",
  "clubbing": "Finger clubbing — increased convexity of nail bed with loss of Lovibond angle",
  "cyanosis": "Peripheral cyanosis of the lower extremity due to ischemia",
  "dactylitis": "Painful swelling of the hands — dactylitis in sickle cell disease",
  "decreased-skin-turgor": "Clinical or pathologic image illustrating decreased skin turgor",
  "dysuria": "Clinical or pathologic image illustrating dysuria",
  "erythema": "Sharply demarcated erythema of recurrent erysipelas (vasodilation with infection)",
  "headache": "Clinical or pathologic image illustrating headache",
  "hematuria": "Clinical or pathologic image illustrating hematuria",
  "hemianopsia": "Clinical or pathologic image illustrating hemianopsia",
  "hemoptysis": "Clinical or pathologic image illustrating hemoptysis",
  "hypoxemia": "Clinical or pathologic image illustrating hypoxemia",
  "jaundice": "Scleral icterus — yellow discoloration of the conjunctiva from hyperbilirubinemia",
  "kernig-sign": "Kernig sign — resistance to knee extension with hip flexed suggests meningeal irritation",
  "lichenification": "Clinical or pathologic image illustrating lichenification",
  "lymphadenopathy": "Cervical lymphadenopathy — enlarged palpable anterior cervical lymph nodes",
  "maculopapular-rash": "Maculopapular eruption — coalescent erythematous macules and papules",
  "nodular-lymphangitis": "Clinical or pathologic image illustrating nodular lymphangitis",
  "nuchal-rigidity": "Nuchal rigidity — resistance to passive neck flexion in meningeal irritation",
  "palpitations": "Clinical or pathologic image illustrating palpitations",
  "papule": "Violaceous flat-topped papules of lichen planus on the shins (solid, ≤1 cm)",
  "peripheral-edema": "Clinical or pathologic image illustrating peripheral edema",
  "plaque": "Erythematous plaque of psoriasis with silvery scale (solid, >1 cm)",
  "polyuria-polydipsia": "Clinical or pathologic image illustrating polyuria polydipsia",
  "presyncope": "Clinical or pathologic image illustrating presyncope",
  "purpura": "Petechiae and purpura on the lower limb from medication-induced leukocytoclastic vasculitis",
  "raynaud-phenomenon": "Clinical or pathologic image illustrating raynaud phenomenon",
  "sclerodactyly": "Clinical or pathologic image illustrating sclerodactyly",
  "skin-thickening": "Clinical or pathologic image illustrating skin thickening",
  "syncope": "Clinical or pathologic image illustrating syncope",
  "telangiectasia": "Spider angioma — central arteriole with radiating telangiectasias",
  "thrombocytopenia": "Clinical or pathologic image illustrating thrombocytopenia",
  "vesicle": "Herpes labialis vesicles — fluid-filled epidermal lesions <1 cm",
  "vomiting": "Clinical or pathologic image illustrating vomiting",
  "watery-diarrhea": "Clinical or pathologic image illustrating watery diarrhea",
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
