import type { MediaAttribution } from "./media";
import type { ConditionEntry } from "./conditions";

import abscess from "../media/images/conditions/abscess.jpg?url";
import acromegaly from "../media/images/conditions/acromegaly.jpg?url";
import acuteCholangitis from "../media/images/conditions/acute-cholangitis.svg?url";
import addisonDisease from "../media/images/conditions/addison-disease.jpg?url";
import adhd from "../media/images/conditions/adhd.png?url";
import adjustmentDisorder from "../media/images/conditions/adjustment-disorder.svg?url";
import alcoholUseDisorder from "../media/images/conditions/alcohol-use-disorder.jpg?url";
import alcoholWithdrawal from "../media/images/conditions/alcohol-withdrawal.jpg?url";
import allergicContactDermatitis from "../media/images/conditions/allergic-contact-dermatitis.jpg?url";
import amenorrhea from "../media/images/conditions/amenorrhea.jpg?url";
import aml from "../media/images/conditions/aml.jpg?url";
import anaphylaxis from "../media/images/conditions/anaphylaxis.svg?url";
import ankylosingSpondylitis from "../media/images/conditions/ankylosing-spondylitis.jpg?url";
import aorticRegurgitation from "../media/images/conditions/aortic-regurgitation.jpg?url";
import aphthousUlcer from "../media/images/conditions/aphthous-ulcer.jpg?url";
import apl from "../media/images/conditions/apl.png?url";
import asthma from "../media/images/conditions/asthma.jpg?url";
import atherosclerosis from "../media/images/conditions/atherosclerosis.jpg?url";
import atopicDermatitis from "../media/images/conditions/atopic-dermatitis.jpg?url";
import atrialFibrillation from "../media/images/conditions/atrial-fibrillation.jpg?url";
import atrialSeptalDefect from "../media/images/conditions/atrial-septal-defect.jpg?url";
import atrialTachycardia from "../media/images/conditions/atrial-tachycardia.svg?url";
import atrioventricularBlock from "../media/images/conditions/atrioventricular-block.png?url";
import avascularNecrosis from "../media/images/conditions/avascular-necrosis.svg?url";
import basalCellCarcinoma from "../media/images/conditions/basal-cell-carcinoma.jpg?url";
import basilarSkullFracture from "../media/images/conditions/basilar-skull-fracture.jpg?url";
import berylliosis from "../media/images/conditions/berylliosis.jpg?url";
import bicuspidAorticValve from "../media/images/conditions/bicuspid-aortic-valve.jpg?url";
import biliaryAtresia from "../media/images/conditions/biliary-atresia.jpg?url";
import bph from "../media/images/conditions/bph.jpg?url";
import briefPsychoticDisorder from "../media/images/conditions/brief-psychotic-disorder.jpg?url";
import c6Radiculopathy from "../media/images/conditions/c6-radiculopathy.png?url";
import c7Radiculopathy from "../media/images/conditions/c7-radiculopathy.png?url";
import cardiacTamponade from "../media/images/conditions/cardiac-tamponade.jpg?url";
import carotidStenosis from "../media/images/conditions/carotid-stenosis.jpg?url";
import catScratchDisease from "../media/images/conditions/cat-scratch-disease.jpg?url";
import cataracts from "../media/images/conditions/cataracts.jpg?url";
import celiacDisease from "../media/images/conditions/celiac-disease.jpg?url";
import cellulitis from "../media/images/conditions/cellulitis.jpg?url";
import cerebralContusion from "../media/images/conditions/cerebral-contusion.jpg?url";
import chikungunyaRash from "../media/images/conditions/chikungunya-rash.jpg?url";
import choledocholithiasis from "../media/images/conditions/choledocholithiasis.jpg?url";
import chronicBronchitis from "../media/images/conditions/chronic-bronchitis.svg?url";
import cleftLip from "../media/images/conditions/cleft-lip.jpg?url";
import cleftPalate from "../media/images/conditions/cleft-palate.jpg?url";
import cll from "../media/images/conditions/cll.jpg?url";
import cml from "../media/images/conditions/cml.jpg?url";
import congenitalAdrenalHyperplasia from "../media/images/conditions/congenital-adrenal-hyperplasia.jpg?url";
import congenitalRubellaSyndrome from "../media/images/conditions/congenital-rubella-syndrome.jpg?url";
import copperDeficiency from "../media/images/conditions/copper-deficiency.jpg?url";
import crohnDisease from "../media/images/conditions/crohn-disease.jpg?url";
import cushingSyndrome from "../media/images/conditions/cushing-syndrome.jpg?url";
import cysticFibrosis from "../media/images/conditions/cystic-fibrosis.jpg?url";
import deliriumTremens from "../media/images/conditions/delirium-tremens.jpg?url";
import dementia from "../media/images/conditions/dementia.jpg?url";
import dengueRecoveryRash from "../media/images/conditions/dengue-recovery-rash.jpg?url";
import dentalCaries from "../media/images/conditions/dental-caries.jpg?url";
import diabetesInsipidus from "../media/images/conditions/diabetes-insipidus.jpg?url";
import diabeticKetoacidosis from "../media/images/conditions/diabetic-ketoacidosis.jpg?url";
import diabeticNephropathy from "../media/images/conditions/diabetic-nephropathy.jpg?url";
import diabeticNeuropathy from "../media/images/conditions/diabetic-neuropathy.jpg?url";
import diabeticRetinopathy from "../media/images/conditions/diabetic-retinopathy.png?url";
import dilatedCardiomyopathy from "../media/images/conditions/dilated-cardiomyopathy.jpg?url";
import diverticulitis from "../media/images/conditions/diverticulitis.jpg?url";
import dysmenorrhea from "../media/images/conditions/dysmenorrhea.jpg?url";
import emphysema from "../media/images/conditions/emphysema.jpg?url";
import empyema from "../media/images/conditions/empyema.jpg?url";
import encephalitis from "../media/images/conditions/encephalitis.jpg?url";
import epilepsy from "../media/images/conditions/epilepsy.jpg?url";
import endocarditis from "../media/images/conditions/endocarditis.jpg?url";
import endometriosis from "../media/images/conditions/endometriosis.jpg?url";
import eosinophilicGranulomatosisWithPolyangiitis from "../media/images/conditions/eosinophilic-granulomatosis-with-polyangiitis.jpg?url";
import fecalIncontinence from "../media/images/conditions/fecal-incontinence.jpg?url";
import femaleAthleteTriad from "../media/images/conditions/female-athlete-triad.svg?url";
import femoralNeckFracture from "../media/images/conditions/femoral-neck-fracture.jpg?url";
import foodAllergy from "../media/images/conditions/food-allergy.jpg?url";
import galactorrhea from "../media/images/conditions/galactorrhea.jpg?url";
import gangrene from "../media/images/conditions/gangrene.jpg?url";
import gastricAdenocarcinoma from "../media/images/conditions/gastric-adenocarcinoma.jpg?url";
import glaucoma from "../media/images/conditions/glaucoma.svg?url";
import glomerulonephritis from "../media/images/conditions/glomerulonephritis.jpg?url";
import granulomatosisWithPolyangiitis from "../media/images/conditions/granulomatosis-with-polyangiitis.jpg?url";
import gravesDisease from "../media/images/conditions/graves-disease.jpg?url";
import handFootAndMouthDisease from "../media/images/conditions/hand-foot-and-mouth-disease.jpg?url";
import heartFailure from "../media/images/conditions/heart-failure.jpg?url";
import hemothorax from "../media/images/conditions/hemothorax.png?url";
import herpangina from "../media/images/conditions/herpangina.jpg?url";
import hirschsprungDisease from "../media/images/conditions/hirschsprung-disease.jpg?url";
import hivInfection from "../media/images/conditions/hiv-infection.jpg?url";
import hodgkinLymphoma from "../media/images/conditions/hodgkin-lymphoma.jpg?url";
import holoprosencephaly from "../media/images/conditions/holoprosencephaly.jpg?url";
import howellJollyBody from "../media/images/conditions/howell-jolly-body.png?url";
import huntingtonDisease from "../media/images/conditions/huntington-disease.png?url";
import hydrocephalus from "../media/images/conditions/hydrocephalus.jpg?url";
import hyperIgeSyndrome from "../media/images/conditions/hyper-ige-syndrome.jpg?url";
import hyperlipidemia from "../media/images/conditions/hyperlipidemia.jpg?url";
import hyperosmolarHyperglycemicState from "../media/images/conditions/hyperosmolar-hyperglycemic-state.svg?url";
import hyperparathyroidism from "../media/images/conditions/hyperparathyroidism.jpg?url";
import hyperprolactinemia from "../media/images/conditions/hyperprolactinemia.jpg?url";
import hypertension from "../media/images/conditions/hypertension.jpg?url";
import hypertensiveRetinopathy from "../media/images/conditions/hypertensive-retinopathy.jpg?url";
import hyperthyroidism from "../media/images/conditions/hyperthyroidism.jpg?url";
import hypertrophicCardiomyopathy from "../media/images/conditions/hypertrophic-cardiomyopathy.jpg?url";
import hypogonadism from "../media/images/conditions/hypogonadism.jpg?url";
import hypopituitarism from "../media/images/conditions/hypopituitarism.svg?url";
import hypothyroidism from "../media/images/conditions/hypothyroidism.jpg?url";
import ibd from "../media/images/conditions/ibd.jpg?url";
import idiopathicIntracranialHypertension from "../media/images/conditions/idiopathic-intracranial-hypertension.jpg?url";
import igaVasculitis from "../media/images/conditions/iga-vasculitis.jpg?url";
import infectiveEndocarditis from "../media/images/conditions/infective-endocarditis.jpg?url";
import interstitialLungDisease from "../media/images/conditions/interstitial-lung-disease.jpg?url";
import intestinalPerforation from "../media/images/conditions/intestinal-perforation.jpg?url";
import irritableBowelSyndrome from "../media/images/conditions/irritable-bowel-syndrome.jpg?url";
import ischemicOpticNeuropathy from "../media/images/conditions/ischemic-optic-neuropathy.jpg?url";
import ischemicStroke from "../media/images/conditions/ischemic-stroke.jpg?url";
import juvenileParkinsonism from "../media/images/conditions/juvenile-parkinsonism.jpg?url";
import keratoconjunctivitisSicca from "../media/images/conditions/keratoconjunctivitis-sicca.jpg?url";
import l4Radiculopathy from "../media/images/conditions/l4-radiculopathy.png?url";
import l5Radiculopathy from "../media/images/conditions/l5-radiculopathy.png?url";
import lacunarStroke from "../media/images/conditions/lacunar-stroke.jpg?url";
import lichenPlanus from "../media/images/conditions/lichen-planus.jpg?url";
import lungCancer from "../media/images/conditions/lung-cancer.jpg?url";
import lymeDisease from "../media/images/conditions/lyme-disease.jpg?url";
import lymphadenitis from "../media/images/conditions/lymphadenitis.jpg?url";
import lymphogranulomaVenereum from "../media/images/conditions/lymphogranuloma-venereum.jpg?url";
import lymphoma from "../media/images/conditions/lymphoma.jpg?url";
import majorDepressiveDisorder from "../media/images/conditions/major-depressive-disorder.jpg?url";
import malaria from "../media/images/conditions/malaria.jpg?url";
import mastocytosis from "../media/images/conditions/mastocytosis.jpg?url";
import meckelDiverticulum from "../media/images/conditions/meckel-diverticulum.jpg?url";
import medullaryThyroidCarcinoma from "../media/images/conditions/medullary-thyroid-carcinoma.jpg?url";
import melanoma from "../media/images/conditions/melanoma.jpg?url";
import menType1 from "../media/images/conditions/men-type-1.svg?url";
import menType2 from "../media/images/conditions/men-type-2.svg?url";
import men2a from "../media/images/conditions/men2a.svg?url";
import men2b from "../media/images/conditions/men2b.svg?url";
import meningesDiagram from "../media/images/conditions/meninges-diagram.svg?url";
import menkesDisease from "../media/images/conditions/menkes-disease.jpg?url";
import menopause from "../media/images/conditions/menopause.svg?url";
import merkelCellCarcinoma from "../media/images/conditions/merkel-cell-carcinoma.jpg?url";
import molarPregnancyUltrasound from "../media/images/conditions/molar-pregnancy-ultrasound.jpg?url";
import multipleEndocrineNeoplasia from "../media/images/conditions/multiple-endocrine-neoplasia.svg?url";
import multipleSclerosis from "../media/images/conditions/multiple-sclerosis.jpg?url";
import myocardialInfarction from "../media/images/conditions/myocardial-infarction.jpg?url";
import neonatalRespiratoryDistressSyndrome from "../media/images/conditions/neonatal-respiratory-distress-syndrome.jpg?url";
import nephriticSyndrome from "../media/images/conditions/nephritic-syndrome.jpg?url";
import nephrolithiasis from "../media/images/conditions/nephrolithiasis.jpg?url";
import nephroticSyndrome from "../media/images/conditions/nephrotic-syndrome.jpg?url";
import neuralTubeDefects from "../media/images/conditions/neural-tube-defects.jpg?url";
import neuromyelitisOptica from "../media/images/conditions/neuromyelitis-optica.svg?url";
import nonHodgkinLymphoma from "../media/images/conditions/non-hodgkin-lymphoma.jpg?url";
import opticNeuritis from "../media/images/conditions/optic-neuritis.jpg?url";
import osteomyelitis from "../media/images/conditions/osteomyelitis.png?url";
import otitisMedia from "../media/images/conditions/otitis-media.jpg?url";
import ovarianDermoidCystHistology from "../media/images/conditions/ovarian-dermoid-cyst-histology.jpg?url";
import parapneumonicEffusion from "../media/images/conditions/parapneumonic-effusion.jpg?url";
import parinaudSyndrome from "../media/images/conditions/parinaud-syndrome.jpg?url";
import parkinsonDisease from "../media/images/conditions/parkinson-disease.jpg?url";
import paroxysmalSupraventricularTachycardia from "../media/images/conditions/paroxysmal-supraventricular-tachycardia.svg?url";
import patentDuctusArteriosus from "../media/images/conditions/patent-ductus-arteriosus.jpg?url";
import pemphigusVulgaris from "../media/images/conditions/pemphigus-vulgaris.jpg?url";
import pepticUlcerDisease from "../media/images/conditions/peptic-ulcer-disease.jpg?url";
import pericarditis from "../media/images/conditions/pericarditis.jpg?url";
import peripheralArteryDisease from "../media/images/conditions/peripheral-artery-disease.jpg?url";
import pheochromocytoma from "../media/images/conditions/pheochromocytoma.jpg?url";
import pituitaryApoplexy from "../media/images/conditions/pituitary-apoplexy.jpg?url";
import pituitaryMacroadenoma from "../media/images/conditions/pituitary-macroadenoma.jpg?url";
import pneumoconiosis from "../media/images/conditions/pneumoconiosis.jpg?url";
import pneumonia from "../media/images/conditions/pneumonia.jpg?url";
import postherpeticNeuralgia from "../media/images/conditions/postherpetic-neuralgia.png?url";
import pressureUlcer from "../media/images/conditions/pressure-ulcer.jpg?url";
import primaryBiliaryCholangitis from "../media/images/conditions/primary-biliary-cholangitis.jpg?url";
import primaryBrainTumor from "../media/images/conditions/primary-brain-tumor.png?url";
import primaryHyperparathyroidism from "../media/images/conditions/primary-hyperparathyroidism.png?url";
import primarySclerosingCholangitis from "../media/images/conditions/primary-sclerosing-cholangitis.jpg?url";
import prolactinoma from "../media/images/conditions/prolactinoma.jpg?url";
import psoriasis from "../media/images/conditions/psoriasis.jpg?url";
import psychoticMoodDisorder from "../media/images/conditions/psychotic-mood-disorder.svg?url";
import pulmonaryHypertension from "../media/images/conditions/pulmonary-hypertension.jpg?url";
import pyelonephritis from "../media/images/conditions/pyelonephritis.jpg?url";
import raggedRedFibersGomori from "../media/images/conditions/ragged-red-fibers-gomori.jpg?url";
import restrictiveCardiomyopathy from "../media/images/conditions/restrictive-cardiomyopathy.jpg?url";
import rheumatoidArthritis from "../media/images/conditions/rheumatoid-arthritis.jpg?url";
import rhinitis from "../media/images/conditions/rhinitis.jpg?url";
import rockyMountainSpottedFeverRash from "../media/images/conditions/rocky-mountain-spotted-fever-rash.jpg?url";
import roseola from "../media/images/conditions/roseola.jpg?url";
import rotatorCuffSyndrome from "../media/images/conditions/rotator-cuff-syndrome.jpg?url";
import s1Radiculopathy from "../media/images/conditions/s1-radiculopathy.jpg?url";
import sarcoidosis from "../media/images/conditions/sarcoidosis.jpg?url";
import scarletFever from "../media/images/conditions/scarlet-fever.jpg?url";
import schizoidPersonalityDisorder from "../media/images/conditions/schizoid-personality-disorder.png?url";
import schizophrenia from "../media/images/conditions/schizophrenia.jpg?url";
import schizotypalPersonalityDisorder from "../media/images/conditions/schizotypal-personality-disorder.png?url";
import selectiveIgaDeficiency from "../media/images/conditions/selective-iga-deficiency.png?url";
import serumSickness from "../media/images/conditions/serum-sickness.jpg?url";
import sheehanSyndrome from "../media/images/conditions/sheehan-syndrome.svg?url";
import shock from "../media/images/conditions/shock.jpg?url";
import sickleCellDisease from "../media/images/conditions/sickle-cell-disease.jpg?url";
import sideroblasticAnemia from "../media/images/conditions/sideroblastic-anemia.jpg?url";
import sinusitis from "../media/images/conditions/sinusitis.jpg?url";
import sjogrenSyndrome from "../media/images/conditions/sjogren-syndrome.jpg?url";
import sporotrichosis from "../media/images/conditions/sporotrichosis.jpg?url";
import stableAngina from "../media/images/conditions/stable-angina.jpg?url";
import statusEpilepticus from "../media/images/conditions/status-epilepticus.jpg?url";
import subarachnoidHemorrhage from "../media/images/conditions/subarachnoid-hemorrhage.jpg?url";
import systemicLupusErythematosus from "../media/images/conditions/systemic-lupus-erythematosus.jpg?url";
import systemicSclerosis from "../media/images/conditions/systemic-sclerosis.jpg?url";
import tensionPneumothorax from "../media/images/conditions/tension-pneumothorax.jpg?url";
import tetralogyOfFallotCyanosis from "../media/images/conditions/tetralogy-of-fallot-cyanosis.jpg?url";
import thromboangiitisObliterans from "../media/images/conditions/thromboangiitis-obliterans.jpg?url";
import transientIschemicAttack from "../media/images/conditions/transient-ischemic-attack.png?url";
import trisomy13 from "../media/images/conditions/trisomy-13.jpg?url";
import tropicalSprue from "../media/images/conditions/tropical-sprue.jpg?url";
import tuberculosis from "../media/images/conditions/tuberculosis.jpg?url";
import turnerSyndrome from "../media/images/conditions/turner-syndrome.jpg?url";
import type1DiabetesMellitus from "../media/images/conditions/type-1-diabetes-mellitus.jpeg?url";
import type2DiabetesMellitus from "../media/images/conditions/type-2-diabetes-mellitus.jpg?url";
import typhoidFeverRoseSpots from "../media/images/conditions/typhoid-fever-rose-spots.jpg?url";
import ulcerativeColitis from "../media/images/conditions/ulcerative-colitis.jpg?url";
import urinaryTractInfection from "../media/images/conditions/urinary-tract-infection.jpg?url";
import uterineFibroids from "../media/images/conditions/uterine-fibroids.png?url";
import valvularHeartDisease from "../media/images/conditions/valvular-heart-disease.jpg?url";
import vasculitis from "../media/images/conditions/vasculitis.jpg?url";
import venousStasisDermatitis from "../media/images/conditions/venous-stasis-dermatitis.png?url";
import venousThrombosis from "../media/images/conditions/venous-thrombosis.png?url";
import ventricularSeptalDefect from "../media/images/conditions/ventricular-septal-defect.svg?url";
import vitaminB12DeficiencyAnemia from "../media/images/conditions/vitamin-b12-deficiency-anemia.png?url";
import vitaminDToxicity from "../media/images/conditions/vitamin-d-toxicity.svg?url";
import wilsonDisease from "../media/images/conditions/wilson-disease.jpg?url";
import xLinkedAgammaglobulinemia from "../media/images/conditions/x-linked-agammaglobulinemia.png?url";
import yellowFever from "../media/images/conditions/yellow-fever.jpg?url";
import zikaVirusInfection from "../media/images/conditions/zika-virus-infection.jpg?url";
import zollingerEllisonSyndrome from "../media/images/conditions/zollinger-ellison-syndrome.jpg?url";

export type ConditionImageId = Extract<
  ConditionEntry["id"],
  | "abscess"
  | "acromegaly"
  | "acute-cholangitis"
  | "addison-disease"
  | "adhd"
  | "adjustment-disorder"
  | "alcohol-use-disorder"
  | "alcohol-withdrawal"
  | "allergic-contact-dermatitis"
  | "amenorrhea"
  | "aml"
  | "anaphylaxis"
  | "ankylosing-spondylitis"
  | "aortic-regurgitation"
  | "aphthous-ulcer"
  | "apl"
  | "asthma"
  | "atherosclerosis"
  | "atopic-dermatitis"
  | "atrial-fibrillation"
  | "atrial-septal-defect"
  | "atrial-tachycardia"
  | "atrioventricular-block"
  | "avascular-necrosis"
  | "basal-cell-carcinoma"
  | "basilar-skull-fracture"
  | "berylliosis"
  | "bicuspid-aortic-valve"
  | "biliary-atresia"
  | "bph"
  | "brief-psychotic-disorder"
  | "c6-radiculopathy"
  | "c7-radiculopathy"
  | "cardiac-tamponade"
  | "carotid-stenosis"
  | "cat-scratch-disease"
  | "cataracts"
  | "celiac-disease"
  | "cellulitis"
  | "cerebral-contusion"
  | "chikungunya-fever"
  | "choledocholithiasis"
  | "chronic-bronchitis"
  | "cleft-lip"
  | "cleft-palate"
  | "cll"
  | "cml"
  | "congenital-adrenal-hyperplasia"
  | "congenital-rubella-syndrome"
  | "copper-deficiency"
  | "crohn-disease"
  | "cushing-syndrome"
  | "cystic-fibrosis"
  | "delirium-tremens"
  | "dementia"
  | "dengue-fever"
  | "dental-caries"
  | "diabetes-insipidus"
  | "diabetic-ketoacidosis"
  | "diabetic-nephropathy"
  | "diabetic-neuropathy"
  | "diabetic-retinopathy"
  | "dilated-cardiomyopathy"
  | "diverticulitis"
  | "dysmenorrhea"
  | "emphysema"
  | "empyema"
  | "encephalitis"
  | "epilepsy"
  | "endocarditis"
  | "endometriosis"
  | "eosinophilic-granulomatosis-with-polyangiitis"
  | "fecal-incontinence"
  | "female-athlete-triad"
  | "femoral-neck-fracture"
  | "food-allergy"
  | "galactorrhea"
  | "gangrene"
  | "gastric-adenocarcinoma"
  | "glaucoma"
  | "glomerulonephritis"
  | "granulomatosis-with-polyangiitis"
  | "graves-disease"
  | "hand-foot-and-mouth-disease"
  | "heart-failure"
  | "hemothorax"
  | "herpangina"
  | "hirschsprung-disease"
  | "hiv-infection"
  | "hodgkin-lymphoma"
  | "holoprosencephaly"
  | "howell-jolly-body"
  | "huntington-disease"
  | "hydrocephalus"
  | "hyper-ige-syndrome"
  | "hyperlipidemia"
  | "hyperosmolar-hyperglycemic-state"
  | "hyperparathyroidism"
  | "hyperprolactinemia"
  | "hypertension"
  | "hypertensive-retinopathy"
  | "hyperthyroidism"
  | "hypertrophic-cardiomyopathy"
  | "hypogonadism"
  | "hypopituitarism"
  | "hypothyroidism"
  | "ibd"
  | "idiopathic-intracranial-hypertension"
  | "iga-vasculitis"
  | "infective-endocarditis"
  | "interstitial-lung-disease"
  | "intestinal-perforation"
  | "irritable-bowel-syndrome"
  | "ischemic-optic-neuropathy"
  | "ischemic-stroke"
  | "juvenile-parkinsonism"
  | "keratoconjunctivitis-sicca"
  | "l4-radiculopathy"
  | "l5-radiculopathy"
  | "lacunar-stroke"
  | "lichen-planus"
  | "lung-cancer"
  | "lyme-disease"
  | "lymphadenitis"
  | "lymphogranuloma-venereum"
  | "lymphoma"
  | "major-depressive-disorder"
  | "malaria"
  | "mastocytosis"
  | "meckel-diverticulum"
  | "medullary-thyroid-carcinoma"
  | "melanoma"
  | "men-type-1"
  | "men-type-2"
  | "men2a"
  | "men2b"
  | "meningitis"
  | "menkes-disease"
  | "menopause"
  | "merkel-cell-carcinoma"
  | "hydatidiform-mole"
  | "multiple-endocrine-neoplasia"
  | "multiple-sclerosis"
  | "myocardial-infarction"
  | "neonatal-respiratory-distress-syndrome"
  | "nephritic-syndrome"
  | "nephrolithiasis"
  | "nephrotic-syndrome"
  | "neural-tube-defects"
  | "neuromyelitis-optica"
  | "non-hodgkin-lymphoma"
  | "optic-neuritis"
  | "osteomyelitis"
  | "otitis-media"
  | "teratoma"
  | "parapneumonic-effusion"
  | "parinaud-syndrome"
  | "parkinson-disease"
  | "paroxysmal-supraventricular-tachycardia"
  | "patent-ductus-arteriosus"
  | "pemphigus-vulgaris"
  | "peptic-ulcer-disease"
  | "pericarditis"
  | "peripheral-artery-disease"
  | "pheochromocytoma"
  | "pituitary-apoplexy"
  | "pituitary-macroadenoma"
  | "pneumoconiosis"
  | "pneumonia"
  | "postherpetic-neuralgia"
  | "pressure-ulcer"
  | "primary-biliary-cholangitis"
  | "primary-brain-tumor"
  | "primary-hyperparathyroidism"
  | "primary-sclerosing-cholangitis"
  | "prolactinoma"
  | "psoriasis"
  | "psychotic-mood-disorder"
  | "pulmonary-hypertension"
  | "pyelonephritis"
  | "mitochondrial-encephalomyopathy"
  | "restrictive-cardiomyopathy"
  | "rheumatoid-arthritis"
  | "rhinitis"
  | "rocky-mountain-spotted-fever"
  | "roseola"
  | "rotator-cuff-syndrome"
  | "s1-radiculopathy"
  | "sarcoidosis"
  | "scarlet-fever"
  | "schizoid-personality-disorder"
  | "schizophrenia"
  | "schizotypal-personality-disorder"
  | "selective-iga-deficiency"
  | "serum-sickness"
  | "sheehan-syndrome"
  | "shock"
  | "sickle-cell-disease"
  | "sideroblastic-anemia"
  | "sinusitis"
  | "sjogren-syndrome"
  | "sporotrichosis"
  | "stable-angina"
  | "status-epilepticus"
  | "subarachnoid-hemorrhage"
  | "systemic-lupus-erythematosus"
  | "systemic-sclerosis"
  | "tension-pneumothorax"
  | "tetralogy-of-fallot"
  | "thromboangiitis-obliterans"
  | "transient-ischemic-attack"
  | "trisomy-13"
  | "tropical-sprue"
  | "tuberculosis"
  | "turner-syndrome"
  | "type-1-diabetes-mellitus"
  | "type-2-diabetes-mellitus"
  | "typhoid-fever"
  | "ulcerative-colitis"
  | "urinary-tract-infection"
  | "uterine-fibroid"
  | "valvular-heart-disease"
  | "vasculitis"
  | "venous-stasis-dermatitis"
  | "venous-thrombosis"
  | "ventricular-septal-defect"
  | "vitamin-b12-deficiency-anemia"
  | "vitamin-d-toxicity"
  | "wilson-disease"
  | "x-linked-agammaglobulinemia"
  | "yellow-fever"
  | "zika-virus-infection"
  | "zollinger-ellison-syndrome"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/conditions/SOURCES.txt */
export const CONDITION_IMAGES: Partial<Record<ConditionImageId, string>> = {
  "abscess": extensionAssetUrl(abscess),
  "acromegaly": extensionAssetUrl(acromegaly),
  "acute-cholangitis": extensionAssetUrl(acuteCholangitis),
  "addison-disease": extensionAssetUrl(addisonDisease),
  "adhd": extensionAssetUrl(adhd),
  "adjustment-disorder": extensionAssetUrl(adjustmentDisorder),
  "alcohol-use-disorder": extensionAssetUrl(alcoholUseDisorder),
  "alcohol-withdrawal": extensionAssetUrl(alcoholWithdrawal),
  "allergic-contact-dermatitis": extensionAssetUrl(allergicContactDermatitis),
  "amenorrhea": extensionAssetUrl(amenorrhea),
  "aml": extensionAssetUrl(aml),
  "anaphylaxis": extensionAssetUrl(anaphylaxis),
  "ankylosing-spondylitis": extensionAssetUrl(ankylosingSpondylitis),
  "aortic-regurgitation": extensionAssetUrl(aorticRegurgitation),
  "aphthous-ulcer": extensionAssetUrl(aphthousUlcer),
  "apl": extensionAssetUrl(apl),
  "asthma": extensionAssetUrl(asthma),
  "atherosclerosis": extensionAssetUrl(atherosclerosis),
  "atopic-dermatitis": extensionAssetUrl(atopicDermatitis),
  "atrial-fibrillation": extensionAssetUrl(atrialFibrillation),
  "atrial-septal-defect": extensionAssetUrl(atrialSeptalDefect),
  "atrial-tachycardia": extensionAssetUrl(atrialTachycardia),
  "atrioventricular-block": extensionAssetUrl(atrioventricularBlock),
  "avascular-necrosis": extensionAssetUrl(avascularNecrosis),
  "basal-cell-carcinoma": extensionAssetUrl(basalCellCarcinoma),
  "basilar-skull-fracture": extensionAssetUrl(basilarSkullFracture),
  "berylliosis": extensionAssetUrl(berylliosis),
  "bicuspid-aortic-valve": extensionAssetUrl(bicuspidAorticValve),
  "biliary-atresia": extensionAssetUrl(biliaryAtresia),
  "bph": extensionAssetUrl(bph),
  "brief-psychotic-disorder": extensionAssetUrl(briefPsychoticDisorder),
  "c6-radiculopathy": extensionAssetUrl(c6Radiculopathy),
  "c7-radiculopathy": extensionAssetUrl(c7Radiculopathy),
  "cardiac-tamponade": extensionAssetUrl(cardiacTamponade),
  "carotid-stenosis": extensionAssetUrl(carotidStenosis),
  "cat-scratch-disease": extensionAssetUrl(catScratchDisease),
  "cataracts": extensionAssetUrl(cataracts),
  "celiac-disease": extensionAssetUrl(celiacDisease),
  "cellulitis": extensionAssetUrl(cellulitis),
  "cerebral-contusion": extensionAssetUrl(cerebralContusion),
  "chikungunya-fever": extensionAssetUrl(chikungunyaRash),
  "choledocholithiasis": extensionAssetUrl(choledocholithiasis),
  "chronic-bronchitis": extensionAssetUrl(chronicBronchitis),
  "cleft-lip": extensionAssetUrl(cleftLip),
  "cleft-palate": extensionAssetUrl(cleftPalate),
  "cll": extensionAssetUrl(cll),
  "cml": extensionAssetUrl(cml),
  "congenital-adrenal-hyperplasia": extensionAssetUrl(congenitalAdrenalHyperplasia),
  "congenital-rubella-syndrome": extensionAssetUrl(congenitalRubellaSyndrome),
  "copper-deficiency": extensionAssetUrl(copperDeficiency),
  "crohn-disease": extensionAssetUrl(crohnDisease),
  "cushing-syndrome": extensionAssetUrl(cushingSyndrome),
  "cystic-fibrosis": extensionAssetUrl(cysticFibrosis),
  "delirium-tremens": extensionAssetUrl(deliriumTremens),
  "dementia": extensionAssetUrl(dementia),
  "dengue-fever": extensionAssetUrl(dengueRecoveryRash),
  "dental-caries": extensionAssetUrl(dentalCaries),
  "diabetes-insipidus": extensionAssetUrl(diabetesInsipidus),
  "diabetic-ketoacidosis": extensionAssetUrl(diabeticKetoacidosis),
  "diabetic-nephropathy": extensionAssetUrl(diabeticNephropathy),
  "diabetic-neuropathy": extensionAssetUrl(diabeticNeuropathy),
  "diabetic-retinopathy": extensionAssetUrl(diabeticRetinopathy),
  "dilated-cardiomyopathy": extensionAssetUrl(dilatedCardiomyopathy),
  "diverticulitis": extensionAssetUrl(diverticulitis),
  "dysmenorrhea": extensionAssetUrl(dysmenorrhea),
  "emphysema": extensionAssetUrl(emphysema),
  "empyema": extensionAssetUrl(empyema),
  "encephalitis": extensionAssetUrl(encephalitis),
  "epilepsy": extensionAssetUrl(epilepsy),
  "endocarditis": extensionAssetUrl(endocarditis),
  "endometriosis": extensionAssetUrl(endometriosis),
  "eosinophilic-granulomatosis-with-polyangiitis": extensionAssetUrl(eosinophilicGranulomatosisWithPolyangiitis),
  "fecal-incontinence": extensionAssetUrl(fecalIncontinence),
  "female-athlete-triad": extensionAssetUrl(femaleAthleteTriad),
  "femoral-neck-fracture": extensionAssetUrl(femoralNeckFracture),
  "food-allergy": extensionAssetUrl(foodAllergy),
  "galactorrhea": extensionAssetUrl(galactorrhea),
  "gangrene": extensionAssetUrl(gangrene),
  "gastric-adenocarcinoma": extensionAssetUrl(gastricAdenocarcinoma),
  "glaucoma": extensionAssetUrl(glaucoma),
  "glomerulonephritis": extensionAssetUrl(glomerulonephritis),
  "granulomatosis-with-polyangiitis": extensionAssetUrl(granulomatosisWithPolyangiitis),
  "graves-disease": extensionAssetUrl(gravesDisease),
  "hand-foot-and-mouth-disease": extensionAssetUrl(handFootAndMouthDisease),
  "heart-failure": extensionAssetUrl(heartFailure),
  "hemothorax": extensionAssetUrl(hemothorax),
  "herpangina": extensionAssetUrl(herpangina),
  "hirschsprung-disease": extensionAssetUrl(hirschsprungDisease),
  "hiv-infection": extensionAssetUrl(hivInfection),
  "hodgkin-lymphoma": extensionAssetUrl(hodgkinLymphoma),
  "holoprosencephaly": extensionAssetUrl(holoprosencephaly),
  "howell-jolly-body": extensionAssetUrl(howellJollyBody),
  "huntington-disease": extensionAssetUrl(huntingtonDisease),
  "hydrocephalus": extensionAssetUrl(hydrocephalus),
  "hyper-ige-syndrome": extensionAssetUrl(hyperIgeSyndrome),
  "hyperlipidemia": extensionAssetUrl(hyperlipidemia),
  "hyperosmolar-hyperglycemic-state": extensionAssetUrl(hyperosmolarHyperglycemicState),
  "hyperparathyroidism": extensionAssetUrl(hyperparathyroidism),
  "hyperprolactinemia": extensionAssetUrl(hyperprolactinemia),
  "hypertension": extensionAssetUrl(hypertension),
  "hypertensive-retinopathy": extensionAssetUrl(hypertensiveRetinopathy),
  "hyperthyroidism": extensionAssetUrl(hyperthyroidism),
  "hypertrophic-cardiomyopathy": extensionAssetUrl(hypertrophicCardiomyopathy),
  "hypogonadism": extensionAssetUrl(hypogonadism),
  "hypopituitarism": extensionAssetUrl(hypopituitarism),
  "hypothyroidism": extensionAssetUrl(hypothyroidism),
  "ibd": extensionAssetUrl(ibd),
  "idiopathic-intracranial-hypertension": extensionAssetUrl(idiopathicIntracranialHypertension),
  "iga-vasculitis": extensionAssetUrl(igaVasculitis),
  "infective-endocarditis": extensionAssetUrl(infectiveEndocarditis),
  "interstitial-lung-disease": extensionAssetUrl(interstitialLungDisease),
  "intestinal-perforation": extensionAssetUrl(intestinalPerforation),
  "irritable-bowel-syndrome": extensionAssetUrl(irritableBowelSyndrome),
  "ischemic-optic-neuropathy": extensionAssetUrl(ischemicOpticNeuropathy),
  "ischemic-stroke": extensionAssetUrl(ischemicStroke),
  "juvenile-parkinsonism": extensionAssetUrl(juvenileParkinsonism),
  "keratoconjunctivitis-sicca": extensionAssetUrl(keratoconjunctivitisSicca),
  "l4-radiculopathy": extensionAssetUrl(l4Radiculopathy),
  "l5-radiculopathy": extensionAssetUrl(l5Radiculopathy),
  "lacunar-stroke": extensionAssetUrl(lacunarStroke),
  "lichen-planus": extensionAssetUrl(lichenPlanus),
  "lung-cancer": extensionAssetUrl(lungCancer),
  "lyme-disease": extensionAssetUrl(lymeDisease),
  "lymphadenitis": extensionAssetUrl(lymphadenitis),
  "lymphogranuloma-venereum": extensionAssetUrl(lymphogranulomaVenereum),
  "lymphoma": extensionAssetUrl(lymphoma),
  "major-depressive-disorder": extensionAssetUrl(majorDepressiveDisorder),
  "malaria": extensionAssetUrl(malaria),
  "mastocytosis": extensionAssetUrl(mastocytosis),
  "meckel-diverticulum": extensionAssetUrl(meckelDiverticulum),
  "medullary-thyroid-carcinoma": extensionAssetUrl(medullaryThyroidCarcinoma),
  "melanoma": extensionAssetUrl(melanoma),
  "men-type-1": extensionAssetUrl(menType1),
  "men-type-2": extensionAssetUrl(menType2),
  "men2a": extensionAssetUrl(men2a),
  "men2b": extensionAssetUrl(men2b),
  "meningitis": extensionAssetUrl(meningesDiagram),
  "menkes-disease": extensionAssetUrl(menkesDisease),
  "menopause": extensionAssetUrl(menopause),
  "merkel-cell-carcinoma": extensionAssetUrl(merkelCellCarcinoma),
  "hydatidiform-mole": extensionAssetUrl(molarPregnancyUltrasound),
  "multiple-endocrine-neoplasia": extensionAssetUrl(multipleEndocrineNeoplasia),
  "multiple-sclerosis": extensionAssetUrl(multipleSclerosis),
  "myocardial-infarction": extensionAssetUrl(myocardialInfarction),
  "neonatal-respiratory-distress-syndrome": extensionAssetUrl(neonatalRespiratoryDistressSyndrome),
  "nephritic-syndrome": extensionAssetUrl(nephriticSyndrome),
  "nephrolithiasis": extensionAssetUrl(nephrolithiasis),
  "nephrotic-syndrome": extensionAssetUrl(nephroticSyndrome),
  "neural-tube-defects": extensionAssetUrl(neuralTubeDefects),
  "neuromyelitis-optica": extensionAssetUrl(neuromyelitisOptica),
  "non-hodgkin-lymphoma": extensionAssetUrl(nonHodgkinLymphoma),
  "optic-neuritis": extensionAssetUrl(opticNeuritis),
  "osteomyelitis": extensionAssetUrl(osteomyelitis),
  "otitis-media": extensionAssetUrl(otitisMedia),
  "teratoma": extensionAssetUrl(ovarianDermoidCystHistology),
  "parapneumonic-effusion": extensionAssetUrl(parapneumonicEffusion),
  "parinaud-syndrome": extensionAssetUrl(parinaudSyndrome),
  "parkinson-disease": extensionAssetUrl(parkinsonDisease),
  "paroxysmal-supraventricular-tachycardia": extensionAssetUrl(paroxysmalSupraventricularTachycardia),
  "patent-ductus-arteriosus": extensionAssetUrl(patentDuctusArteriosus),
  "pemphigus-vulgaris": extensionAssetUrl(pemphigusVulgaris),
  "peptic-ulcer-disease": extensionAssetUrl(pepticUlcerDisease),
  "pericarditis": extensionAssetUrl(pericarditis),
  "peripheral-artery-disease": extensionAssetUrl(peripheralArteryDisease),
  "pheochromocytoma": extensionAssetUrl(pheochromocytoma),
  "pituitary-apoplexy": extensionAssetUrl(pituitaryApoplexy),
  "pituitary-macroadenoma": extensionAssetUrl(pituitaryMacroadenoma),
  "pneumoconiosis": extensionAssetUrl(pneumoconiosis),
  "pneumonia": extensionAssetUrl(pneumonia),
  "postherpetic-neuralgia": extensionAssetUrl(postherpeticNeuralgia),
  "pressure-ulcer": extensionAssetUrl(pressureUlcer),
  "primary-biliary-cholangitis": extensionAssetUrl(primaryBiliaryCholangitis),
  "primary-brain-tumor": extensionAssetUrl(primaryBrainTumor),
  "primary-hyperparathyroidism": extensionAssetUrl(primaryHyperparathyroidism),
  "primary-sclerosing-cholangitis": extensionAssetUrl(primarySclerosingCholangitis),
  "prolactinoma": extensionAssetUrl(prolactinoma),
  "psoriasis": extensionAssetUrl(psoriasis),
  "psychotic-mood-disorder": extensionAssetUrl(psychoticMoodDisorder),
  "pulmonary-hypertension": extensionAssetUrl(pulmonaryHypertension),
  "pyelonephritis": extensionAssetUrl(pyelonephritis),
  "mitochondrial-encephalomyopathy": extensionAssetUrl(raggedRedFibersGomori),
  "restrictive-cardiomyopathy": extensionAssetUrl(restrictiveCardiomyopathy),
  "rheumatoid-arthritis": extensionAssetUrl(rheumatoidArthritis),
  "rhinitis": extensionAssetUrl(rhinitis),
  "rocky-mountain-spotted-fever": extensionAssetUrl(rockyMountainSpottedFeverRash),
  "roseola": extensionAssetUrl(roseola),
  "rotator-cuff-syndrome": extensionAssetUrl(rotatorCuffSyndrome),
  "s1-radiculopathy": extensionAssetUrl(s1Radiculopathy),
  "sarcoidosis": extensionAssetUrl(sarcoidosis),
  "scarlet-fever": extensionAssetUrl(scarletFever),
  "schizoid-personality-disorder": extensionAssetUrl(schizoidPersonalityDisorder),
  "schizophrenia": extensionAssetUrl(schizophrenia),
  "schizotypal-personality-disorder": extensionAssetUrl(schizotypalPersonalityDisorder),
  "selective-iga-deficiency": extensionAssetUrl(selectiveIgaDeficiency),
  "serum-sickness": extensionAssetUrl(serumSickness),
  "sheehan-syndrome": extensionAssetUrl(sheehanSyndrome),
  "shock": extensionAssetUrl(shock),
  "sickle-cell-disease": extensionAssetUrl(sickleCellDisease),
  "sideroblastic-anemia": extensionAssetUrl(sideroblasticAnemia),
  "sinusitis": extensionAssetUrl(sinusitis),
  "sjogren-syndrome": extensionAssetUrl(sjogrenSyndrome),
  "sporotrichosis": extensionAssetUrl(sporotrichosis),
  "stable-angina": extensionAssetUrl(stableAngina),
  "status-epilepticus": extensionAssetUrl(statusEpilepticus),
  "subarachnoid-hemorrhage": extensionAssetUrl(subarachnoidHemorrhage),
  "systemic-lupus-erythematosus": extensionAssetUrl(systemicLupusErythematosus),
  "systemic-sclerosis": extensionAssetUrl(systemicSclerosis),
  "tension-pneumothorax": extensionAssetUrl(tensionPneumothorax),
  "tetralogy-of-fallot": extensionAssetUrl(tetralogyOfFallotCyanosis),
  "thromboangiitis-obliterans": extensionAssetUrl(thromboangiitisObliterans),
  "transient-ischemic-attack": extensionAssetUrl(transientIschemicAttack),
  "trisomy-13": extensionAssetUrl(trisomy13),
  "tropical-sprue": extensionAssetUrl(tropicalSprue),
  "tuberculosis": extensionAssetUrl(tuberculosis),
  "turner-syndrome": extensionAssetUrl(turnerSyndrome),
  "type-1-diabetes-mellitus": extensionAssetUrl(type1DiabetesMellitus),
  "type-2-diabetes-mellitus": extensionAssetUrl(type2DiabetesMellitus),
  "typhoid-fever": extensionAssetUrl(typhoidFeverRoseSpots),
  "ulcerative-colitis": extensionAssetUrl(ulcerativeColitis),
  "urinary-tract-infection": extensionAssetUrl(urinaryTractInfection),
  "uterine-fibroid": extensionAssetUrl(uterineFibroids),
  "valvular-heart-disease": extensionAssetUrl(valvularHeartDisease),
  "vasculitis": extensionAssetUrl(vasculitis),
  "venous-stasis-dermatitis": extensionAssetUrl(venousStasisDermatitis),
  "venous-thrombosis": extensionAssetUrl(venousThrombosis),
  "ventricular-septal-defect": extensionAssetUrl(ventricularSeptalDefect),
  "vitamin-b12-deficiency-anemia": extensionAssetUrl(vitaminB12DeficiencyAnemia),
  "vitamin-d-toxicity": extensionAssetUrl(vitaminDToxicity),
  "wilson-disease": extensionAssetUrl(wilsonDisease),
  "x-linked-agammaglobulinemia": extensionAssetUrl(xLinkedAgammaglobulinemia),
  "yellow-fever": extensionAssetUrl(yellowFever),
  "zika-virus-infection": extensionAssetUrl(zikaVirusInfection),
  "zollinger-ellison-syndrome": extensionAssetUrl(zollingerEllisonSyndrome),
};

export const CONDITION_IMAGE_ATTRIBUTIONS: Partial<
  Record<ConditionImageId, string>
> = {
  "abscess": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:abscess.jpg" },
  "acromegaly": { label: "Wikimedia Commons (Acromegaly facial features.JPEG)", url: "https://commons.wikimedia.org/wiki/File:Acromegaly_facial_features.JPEG" },
  "acute-cholangitis": { label: "Wikimedia Commons (Charcot's cholangitis triad-en.svg)", url: "https://commons.wikimedia.org/wiki/File:Charcot's_cholangitis_triad-en.svg" },
  "addison-disease": { label: "Wikimedia Commons (T. Addison; On...supra-renal capsules Wellcome L0018484.jpg)", url: "https://commons.wikimedia.org/wiki/File:T._Addison;_On...supra-renal_capsules_Wellcome_L0018484.jpg" },
  "adhd": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:adhd.png" },
  "adjustment-disorder": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:adjustment-disorder.svg" },
  "alcohol-use-disorder": { label: "Wikimedia Commons (Cirrhosis of Alcoholic Liver Disease (5517625829).jpg)", url: "https://commons.wikimedia.org/wiki/File:Cirrhosis_of_Alcoholic_Liver_Disease_(5517625829).jpg" },
  "alcohol-withdrawal": { label: "Wikimedia Commons (Local copy from conditions/alcohol-use-disorder.jpg)", url: "https://commons.wikimedia.org/" },
  "allergic-contact-dermatitis": { label: "Wikimedia Commons (Blausen 0014 AllergicDermatitis.png)", url: "https://commons.wikimedia.org/wiki/File:Blausen_0014_AllergicDermatitis.png" },
  "amenorrhea": { label: "Wikimedia Commons (Lactational-amenorrhea-method-This-method-of-family-planning-evolved-from (1).jpg)", url: "https://commons.wikimedia.org/wiki/File:Lactational-amenorrhea-method-This-method-of-family-planning-evolved-from_(1).jpg" },
  "aml": { label: "Wikimedia Commons (Acute Myeloid Leukemia (M2 type).jpg)", url: "https://commons.wikimedia.org/wiki/File:Acute_Myeloid_Leukemia_(M2_type).jpg" },
  "anaphylaxis": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:anaphylaxis.svg" },
  "ankylosing-spondylitis": { label: "Wikimedia Commons (Bamboo spine ankylosing spondylitis.jpg)", url: "https://commons.wikimedia.org/wiki/File:Bamboo_spine_ankylosing_spondylitis.jpg" },
  "aortic-regurgitation": { label: "Wikimedia Commons (Blausen 0039 AorticRegurgitation.png)", url: "https://commons.wikimedia.org/wiki/File:Blausen_0039_AorticRegurgitation.png" },
  "aphthous-ulcer": { label: "Wikimedia Commons (Aphthous Stomatitis in the mouth.jpg)", url: "https://commons.wikimedia.org/wiki/File:Aphthous_Stomatitis_in_the_mouth.jpg" },
  "apl": { label: "Wikimedia Commons (Cytology of acute promyelocytic leukemia, annotated.png)", url: "https://commons.wikimedia.org/wiki/File:Cytology_of_acute_promyelocytic_leukemia,_annotated.png" },
  "asthma": { label: "Wikimedia Commons (2311 Lung Tissue.jpg)", url: "https://commons.wikimedia.org/wiki/File:2311_Lung_Tissue.jpg" },
  "atherosclerosis": { label: "Wikimedia Commons (Endothelial dysfunction Atherosclerosis (hy).png)", url: "https://commons.wikimedia.org/wiki/File:Endothelial_dysfunction_Atherosclerosis_(hy).png" },
  "atopic-dermatitis": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:atopic-dermatitis.jpg" },
  "atrial-fibrillation": { label: "Wikimedia Commons (Herz-EKG1kanalVorhofflimmernSmartwatch-171021.jpg)", url: "https://commons.wikimedia.org/wiki/File:Herz-EKG1kanalVorhofflimmernSmartwatch-171021.jpg" },
  "atrial-septal-defect": { label: "Wikimedia Commons (Echokardiogram von Atriumseptumdefekt (Ostium secundum).jpg)", url: "https://commons.wikimedia.org/wiki/File:Echokardiogram_von_Atriumseptumdefekt_(Ostium_secundum).jpg" },
  "atrial-tachycardia": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:atrial-tachycardia.svg" },
  "atrioventricular-block": { label: "Wikimedia Commons (3rd degree heart block.PNG)", url: "https://commons.wikimedia.org/wiki/File:3rd_degree_heart_block.PNG" },
  "avascular-necrosis": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:avascular-necrosis.svg" },
  "basal-cell-carcinoma": { label: "Wikimedia Commons (Histopathology of micronodular basal-cell carcinoma (original).jpg)", url: "https://commons.wikimedia.org/wiki/File:Histopathology_of_micronodular_basal-cell_carcinoma_(original).jpg" },
  "basilar-skull-fracture": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:basilar-skull-fracture.jpg" },
  "berylliosis": { label: "Wikimedia Commons (Chronic berylliosis (8054314225).jpg)", url: "https://commons.wikimedia.org/wiki/File:Chronic_berylliosis_(8054314225).jpg" },
  "bicuspid-aortic-valve": { label: "Wikimedia Commons (Heart bicuspid aortic valve.svg)", url: "https://commons.wikimedia.org/wiki/File:Heart_bicuspid_aortic_valve.svg" },
  "biliary-atresia": { label: "Wikimedia Commons (Bilatresia.jpg)", url: "https://commons.wikimedia.org/wiki/File:Bilatresia.jpg" },
  "bph": { label: "Wikimedia Commons (Benign Prostatic Hyperplasia nci-vol-7137-300.jpg)", url: "https://commons.wikimedia.org/wiki/File:Benign_Prostatic_Hyperplasia_nci-vol-7137-300.jpg" },
  "brief-psychotic-disorder": { label: "Wikimedia Commons (Climacteric psychosis.jpg)", url: "https://commons.wikimedia.org/wiki/File:Climacteric_psychosis.jpg" },
  "c6-radiculopathy": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:c6-radiculopathy.png" },
  "c7-radiculopathy": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:c7-radiculopathy.png" },
  "cardiac-tamponade": { label: "Wikimedia Commons (Electrical Alternans.JPG)", url: "https://commons.wikimedia.org/wiki/File:Electrical_Alternans.JPG" },
  "carotid-stenosis": { label: "Wikimedia Commons (Internal carotid artery stenosis in ultrasound near occlusion.jpg)", url: "https://commons.wikimedia.org/wiki/File:Internal_carotid_artery_stenosis_in_ultrasound_near_occlusion.jpg" },
  "cat-scratch-disease": { label: "Wikimedia Commons (ICD-10-CM (2010).djvu)", url: "https://commons.wikimedia.org/wiki/File:ICD-10-CM_(2010).djvu" },
  "cataracts": { label: "Wikimedia Commons (Airbus A380 - 9H-MIP parked at LFBT airport.jpg)", url: "https://commons.wikimedia.org/wiki/File:Airbus_A380_-_9H-MIP_parked_at_LFBT_airport.jpg" },
  "celiac-disease": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:celiac-disease.jpg" },
  "cellulitis": { label: "Wikimedia Commons (Cellulitis3.jpg)", url: "https://commons.wikimedia.org/wiki/File:Cellulitis3.jpg" },
  "cerebral-contusion": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:cerebral-contusion.jpg" },
  "chikungunya-fever": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:chikungunya-rash.jpg" },
  "choledocholithiasis": { label: "Wikimedia Commons (ERCP stone.jpg)", url: "https://commons.wikimedia.org/wiki/File:ERCP_stone.jpg" },
  "chronic-bronchitis": { label: "Wikimedia Commons (Chronic obstructive pulmonary disease world map - DALY - WHO2004.svg)", url: "https://commons.wikimedia.org/wiki/File:Chronic_obstructive_pulmonary_disease_world_map_-_DALY_-_WHO2004.svg" },
  "cleft-lip": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:cleft-lip.jpg" },
  "cleft-palate": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:cleft-palate.jpg" },
  "cll": { label: "Wikimedia Commons (C Louis Leipoldt05.jpg)", url: "https://commons.wikimedia.org/wiki/File:C_Louis_Leipoldt05.jpg" },
  "cml": { label: "Wikimedia Commons (Bcrablmet.jpg)", url: "https://commons.wikimedia.org/wiki/File:Bcrablmet.jpg" },
  "congenital-adrenal-hyperplasia": { label: "Wikimedia Commons (Congenital adrenal hyperplasia.jpg)", url: "https://commons.wikimedia.org/wiki/File:Congenital_adrenal_hyperplasia.jpg" },
  "congenital-rubella-syndrome": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:congenital-rubella-syndrome.jpg" },
  "copper-deficiency": { label: "Wikimedia Commons (Swayback (4479932160).jpg)", url: "https://commons.wikimedia.org/wiki/File:Swayback_(4479932160).jpg" },
  "crohn-disease": { label: "Wikimedia Commons (Severe ulcerative colitis.jpg)", url: "https://commons.wikimedia.org/wiki/File:Severe_ulcerative_colitis.jpg" },
  "cushing-syndrome": { label: "Wikimedia Commons (United States Navy Medical News Letter Vol. 28, No. 5, 7 September 1956 (IA NavyMedicalNewsletter19560907).pdf)", url: "https://commons.wikimedia.org/wiki/File:United_States_Navy_Medical_News_Letter_Vol._28,_No._5,_7_September_1956_(IA_NavyMedicalNewsletter19560907).pdf" },
  "cystic-fibrosis": { label: "Wikimedia Commons (Blausen 0286 CysticFibrosis.png)", url: "https://commons.wikimedia.org/wiki/File:Blausen_0286_CysticFibrosis.png" },
  "delirium-tremens": { label: "Wikimedia Commons (Delirium tremens Skalarjevo brezno Peter Gedei 2020-8-8.jpg)", url: "https://commons.wikimedia.org/wiki/File:Delirium_tremens_Skalarjevo_brezno_Peter_Gedei_2020-8-8.jpg" },
  "dementia": { label: "Wikimedia Commons (Histopathology of Alzheimer's disease.jpg)", url: "https://commons.wikimedia.org/wiki/File:Histopathology_of_Alzheimer's_disease.jpg" },
  "dengue-fever": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:dengue-recovery-rash.jpg" },
  "dental-caries": { label: "Wikimedia Commons (Dental Caries Lower Right First Molar.jpg)", url: "https://commons.wikimedia.org/wiki/File:Dental_Caries_Lower_Right_First_Molar.jpg" },
  "diabetes-insipidus": { label: "Wikimedia Commons (Polyuria, large dilute volumes of urine (31388976010).jpg)", url: "https://commons.wikimedia.org/wiki/File:Polyuria,_large_dilute_volumes_of_urine_(31388976010).jpg" },
  "diabetic-ketoacidosis": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:diabetic-ketoacidosis.jpg" },
  "diabetic-nephropathy": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:diabetic-nephropathy.jpg" },
  "diabetic-neuropathy": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:diabetic-neuropathy.jpg" },
  "diabetic-retinopathy": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:diabetic-retinopathy.png" },
  "dilated-cardiomyopathy": { label: "Wikimedia Commons (Blausen 0165 Cardiomyopathy Dilated.svg)", url: "https://commons.wikimedia.org/wiki/File:Blausen_0165_Cardiomyopathy_Dilated.svg" },
  "diverticulitis": { label: "Wikimedia Commons (Seed derived storage cells - Perforated diverticulitis (50706479398).jpg)", url: "https://commons.wikimedia.org/wiki/File:Seed_derived_storage_cells_-_Perforated_diverticulitis_(50706479398).jpg" },
  "dysmenorrhea": { label: "Wikimedia Commons (Period pain menstrual cramps uterus.jpg)", url: "https://commons.wikimedia.org/wiki/File:Period_pain_menstrual_cramps_uterus.jpg" },
  "emphysema": { label: "Wikimedia Commons (Emphysema H and E.jpg)", url: "https://commons.wikimedia.org/wiki/File:Emphysema_H_and_E.jpg" },
  "empyema": { label: "Wikimedia Commons (Empyema of the pleura Wellcome L0061158.jpg)", url: "https://commons.wikimedia.org/wiki/File:Empyema_of_the_pleura_Wellcome_L0061158.jpg" },
  "encephalitis": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:encephalitis.jpg" },
  "epilepsy": {
    label: "Wikimedia Commons (Spike-waves.png)",
    url: "https://commons.wikimedia.org/wiki/File:Spike-waves.png",
  },
  "endocarditis": { label: "Wikimedia Commons (Endocarditis ultrasound.JPG)", url: "https://commons.wikimedia.org/wiki/File:Endocarditis_ultrasound.JPG" },
  "endometriosis": { label: "Wikimedia Commons (Blausen 0349 Endometriosis-it.png)", url: "https://commons.wikimedia.org/wiki/File:Blausen_0349_Endometriosis-it.png" },
  "eosinophilic-granulomatosis-with-polyangiitis": { label: "Wikimedia Commons (Churg-Strauss syndrome - high mag.jpg)", url: "https://commons.wikimedia.org/wiki/File:Churg-Strauss_syndrome_-_high_mag.jpg" },
  "fecal-incontinence": { label: "Wikimedia Commons (Tri-State medical journal (1895) (14582735949).jpg)", url: "https://commons.wikimedia.org/wiki/File:Tri-State_medical_journal_(1895)_(14582735949).jpg" },
  "female-athlete-triad": { label: "Wikimedia Commons (RED-S DE.svg)", url: "https://commons.wikimedia.org/wiki/File:RED-S_DE.svg" },
  "femoral-neck-fracture": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:femoral-neck-fracture.jpg" },
  "food-allergy": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:food-allergy.jpg" },
  "galactorrhea": { label: "Wikimedia Commons (Lactation.jpg)", url: "https://commons.wikimedia.org/wiki/File:Lactation.jpg" },
  "gangrene": { label: "Wikimedia Commons (Dry gangrene of the foot Wellcome L0062216.jpg)", url: "https://commons.wikimedia.org/wiki/File:Dry_gangrene_of_the_foot_Wellcome_L0062216.jpg" },
  "gastric-adenocarcinoma": { label: "Wikimedia Commons (Gastric signet ring cell carcinoma histopatholgy (3).jpg)", url: "https://commons.wikimedia.org/wiki/File:Gastric_signet_ring_cell_carcinoma_histopatholgy_(3).jpg" },
  "glaucoma": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:glaucoma.svg" },
  "glomerulonephritis": { label: "Wikimedia Commons (Crescentic glomerulonephritis - high mag.jpg)", url: "https://commons.wikimedia.org/wiki/File:Crescentic_glomerulonephritis_-_high_mag.jpg" },
  "granulomatosis-with-polyangiitis": { label: "Wikimedia Commons (Granulomatosis with polyangiitis.jpg)", url: "https://commons.wikimedia.org/wiki/File:Granulomatosis_with_polyangiitis.jpg" },
  "graves-disease": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:graves-disease.jpg" },
  "hand-foot-and-mouth-disease": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:hand-foot-and-mouth-disease.jpg" },
  "heart-failure": { label: "Wikimedia Commons (Depiction of a person suffering from heart failure.png)", url: "https://commons.wikimedia.org/wiki/File:Depiction_of_a_person_suffering_from_heart_failure.png" },
  "hemothorax": { label: "Wikimedia Commons (Chest-X-ray-Left-sided-hemothorax.png)", url: "https://commons.wikimedia.org/wiki/File:Chest-X-ray-Left-sided-hemothorax.png" },
  "herpangina": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:herpangina.jpg" },
  "hirschsprung-disease": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:hirschsprung-disease.jpg" },
  "hiv-infection": { label: "Wikimedia Commons (The George Blumer edition of Billings-Forchheimer's Therapeusis of internal diseases- Anaphylaxis, Dietary, Deficiencies, Endocrins, Dvelopmental, Vasomotor, Metabolic, Digestion ... (IA georgeblumeredit04forc).pdf)", url: "https://commons.wikimedia.org/wiki/File:The_George_Blumer_edition_of_Billings-Forchheimer's_Therapeusis_of_internal_diseases-_Anaphylaxis,_Dietary,_Deficiencies,_Endocrins,_Dvelopmental,_Vasomotor,_Metabolic,_Digestion_..._(IA_georgeblumeredit04forc).pdf" },
  "hodgkin-lymphoma": { label: "Wikimedia Commons (Reed-Sternberg lymphocyte nci-vol-7172-300.jpg)", url: "https://commons.wikimedia.org/wiki/File:Reed-Sternberg_lymphocyte_nci-vol-7172-300.jpg" },
  "holoprosencephaly": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:holoprosencephaly.jpg" },
  "howell-jolly-body": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:howell-jolly-body.png" },
  "huntington-disease": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:huntington-disease.png" },
  "hydrocephalus": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:hydrocephalus.jpg" },
  "hyper-ige-syndrome": { label: "Wikimedia Commons (Person_with_Job's_syndrome.jpg)", url: "https://commons.wikimedia.org/wiki/File:Person_with_Job%27s_syndrome.jpg" },
  "hyperlipidemia": { label: "Wikimedia Commons (Xanthoma histology.jpg)", url: "https://commons.wikimedia.org/wiki/File:Xanthoma_histology.jpg" },
  "hyperosmolar-hyperglycemic-state": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:hyperosmolar-hyperglycemic-state.svg" },
  "hyperparathyroidism": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:hyperparathyroidism.jpg" },
  "hyperprolactinemia": { label: "Wikimedia Commons (Lactation.jpg)", url: "https://commons.wikimedia.org/wiki/File:Lactation.jpg" },
  "hypertension": { label: "Wikimedia Commons (HE pulmonary hypertension artery concentric intimal fibrosis.jpg)", url: "https://commons.wikimedia.org/wiki/File:HE_pulmonary_hypertension_artery_concentric_intimal_fibrosis.jpg" },
  "hypertensive-retinopathy": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:hypertensive-retinopathy.jpg" },
  "hyperthyroidism": { label: "Wikimedia Commons (Histopathology of Graves' disease - medium mag.jpg)", url: "https://commons.wikimedia.org/wiki/File:Histopathology_of_Graves'_disease_-_medium_mag.jpg" },
  "hypertrophic-cardiomyopathy": { label: "Wikimedia Commons (Hypertrophic obstructive cardiomyopathy.png)", url: "https://commons.wikimedia.org/wiki/File:Hypertrophic_obstructive_cardiomyopathy.png" },
  "hypogonadism": { label: "Wikimedia Commons (The genetic and molecular basis of idiopathic hypogonadotropic hypogonadism.jpg)", url: "https://commons.wikimedia.org/wiki/File:The_genetic_and_molecular_basis_of_idiopathic_hypogonadotropic_hypogonadism.jpg" },
  "hypopituitarism": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:hypopituitarism.svg" },
  "hypothyroidism": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:hypothyroidism.jpg" },
  "ibd": { label: "Wikimedia Commons (CD colitis.jpg)", url: "https://commons.wikimedia.org/wiki/File:CD_colitis.jpg" },
  "idiopathic-intracranial-hypertension": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:idiopathic-intracranial-hypertension.jpg" },
  "iga-vasculitis": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:iga-vasculitis.jpg" },
  "infective-endocarditis": { label: "Wikimedia Commons (Janeway lesion.JPG)", url: "https://commons.wikimedia.org/wiki/File:Janeway_lesion.JPG" },
  "interstitial-lung-disease": { label: "Wikimedia Commons (Interstitial lung disease overview.png)", url: "https://commons.wikimedia.org/wiki/File:Interstitial_lung_disease_overview.png" },
  "intestinal-perforation": { label: "Wikimedia Commons (Nicholas Senn intestinal perforation.jpg)", url: "https://commons.wikimedia.org/wiki/File:Nicholas_Senn_intestinal_perforation.jpg" },
  "irritable-bowel-syndrome": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:irritable-bowel-syndrome.jpg" },
  "ischemic-optic-neuropathy": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:ischemic-optic-neuropathy.jpg" },
  "ischemic-stroke": { label: "Wikimedia Commons (Stroke ischemic.jpg)", url: "https://commons.wikimedia.org/wiki/File:Stroke_ischemic.jpg" },
  "juvenile-parkinsonism": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:juvenile-parkinsonism.jpg" },
  "keratoconjunctivitis-sicca": { label: "Wikimedia Commons (Dry eyeKell.jpg)", url: "https://commons.wikimedia.org/wiki/File:Dry_eyeKell.jpg" },
  "l4-radiculopathy": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:l4-radiculopathy.png" },
  "l5-radiculopathy": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:l5-radiculopathy.png" },
  "lacunar-stroke": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:lacunar-stroke.jpg" },
  "lichen-planus": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:lichen-planus.jpg" },
  "lung-cancer": { label: "Wikimedia Commons (LungCancer-Xray-01.jpg)", url: "https://commons.wikimedia.org/wiki/File:LungCancer-Xray-01.jpg" },
  "lyme-disease": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:lyme-disease.jpg" },
  "lymphadenitis": { label: "Wikimedia Commons (Scrofula.jpeg)", url: "https://commons.wikimedia.org/wiki/File:Scrofula.jpeg" },
  "lymphogranuloma-venereum": { label: "Wikimedia Commons (Poullignac Travaux LGV Caterpillar RM500 2013.jpg)", url: "https://commons.wikimedia.org/wiki/File:Poullignac_Travaux_LGV_Caterpillar_RM500_2013.jpg" },
  "lymphoma": { label: "Wikimedia Commons (Progressive transformation of germinal centres -1- very low mag.jpg)", url: "https://commons.wikimedia.org/wiki/File:Progressive_transformation_of_germinal_centres_-1-_very_low_mag.jpg" },
  "major-depressive-disorder": { label: "Wikimedia Commons (A woman suffering from Clinical Depression.png)", url: "https://commons.wikimedia.org/wiki/File:A_woman_suffering_from_Clinical_Depression.png" },
  "malaria": { label: "Wikimedia Commons (Ring Forms of Plasmodium falciparum.jpg)", url: "https://commons.wikimedia.org/wiki/File:Ring_Forms_of_Plasmodium_falciparum.jpg" },
  "mastocytosis": { label: "Wikimedia Commons (Urticaria pigmentosa lesions on a child.jpg)", url: "https://commons.wikimedia.org/wiki/File:Urticaria_pigmentosa_lesions_on_a_child.jpg" },
  "meckel-diverticulum": { label: "Wikimedia Commons (Meckel's Diverticulum by Technetium-99m Pertechnetate Scan.jpg)", url: "https://commons.wikimedia.org/wiki/File:Meckel's_Diverticulum_by_Technetium-99m_Pertechnetate_Scan.jpg" },
  "medullary-thyroid-carcinoma": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:medullary-thyroid-carcinoma.jpg" },
  "melanoma": { label: "Wikimedia Commons (Dysplastic nevi (1).jpg)", url: "https://commons.wikimedia.org/wiki/File:Dysplastic_nevi_(1).jpg" },
  "men-type-1": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:men-type-1.svg" },
  "men-type-2": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:men-type-2.svg" },
  "men2a": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:men2a.svg" },
  "men2b": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:men2b.svg" },
  "meningitis": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:meninges-diagram.svg" },
  "menkes-disease": { label: "Wikimedia Commons (Menkes disease4.jpg)", url: "https://commons.wikimedia.org/wiki/File:Menkes_disease4.jpg" },
  "menopause": { label: "Wikimedia Commons (TEWL hot flash plot.svg)", url: "https://commons.wikimedia.org/wiki/File:TEWL_hot_flash_plot.svg" },
  "merkel-cell-carcinoma": { label: "Wikimedia Commons (Merkel cell carcinoma - very high mag.jpg)", url: "https://commons.wikimedia.org/wiki/File:Merkel_cell_carcinoma_-_very_high_mag.jpg" },
  "hydatidiform-mole": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:molar-pregnancy-ultrasound.jpg" },
  "multiple-endocrine-neoplasia": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:multiple-endocrine-neoplasia.svg" },
  "multiple-sclerosis": { label: "Wikimedia Commons (Disseminated sclerosis (IA b2810349x).pdf)", url: "https://commons.wikimedia.org/wiki/File:Disseminated_sclerosis_(IA_b2810349x).pdf" },
  "myocardial-infarction": { label: "Wikimedia Commons (ST elevation myocardial infarction ECG (cropped).jpg)", url: "https://commons.wikimedia.org/wiki/File:ST_elevation_myocardial_infarction_ECG_(cropped).jpg" },
  "neonatal-respiratory-distress-syndrome": { label: "Wikimedia Commons (Annual report - National Institutes of Health. National Heart, Lung, and Blood Advisory Council (IA annualreportnatio1985nati).pdf)", url: "https://commons.wikimedia.org/wiki/File:Annual_report_-_National_Institutes_of_Health._National_Heart,_Lung,_and_Blood_Advisory_Council_(IA_annualreportnatio1985nati).pdf" },
  "nephritic-syndrome": { label: "Wikimedia Commons (MicroHematuria.JPG)", url: "https://commons.wikimedia.org/wiki/File:MicroHematuria.JPG" },
  "nephrolithiasis": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:nephrolithiasis.jpg" },
  "nephrotic-syndrome": { label: "Wikimedia Commons (United States Navy Medical News Letter Vol. 32 1958 Index (IA NavyMedicalNewsletter19581231Index).pdf)", url: "https://commons.wikimedia.org/wiki/File:United_States_Navy_Medical_News_Letter_Vol._32_1958_Index_(IA_NavyMedicalNewsletter19581231Index).pdf" },
  "neural-tube-defects": { label: "Wikimedia Commons (Spina bifida lombare sagittale.jpg)", url: "https://commons.wikimedia.org/wiki/File:Spina_bifida_lombare_sagittale.jpg" },
  "neuromyelitis-optica": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:neuromyelitis-optica.svg" },
  "non-hodgkin-lymphoma": { label: "Wikimedia Commons (Centrocyte, centroblast and follicular dendritic cell in a follicular lymphoma.jpg)", url: "https://commons.wikimedia.org/wiki/File:Centrocyte,_centroblast_and_follicular_dendritic_cell_in_a_follicular_lymphoma.jpg" },
  "optic-neuritis": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:optic-neuritis.jpg" },
  "osteomyelitis": { label: "Wikimedia Commons (OsteomylitisMark.png)", url: "https://commons.wikimedia.org/wiki/File:OsteomylitisMark.png" },
  "otitis-media": { label: "Wikimedia Commons (Acute Otitis Media Stage of Resolution.jpg)", url: "https://commons.wikimedia.org/wiki/File:Acute_Otitis_Media_Stage_of_Resolution.jpg" },
  "teratoma": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:ovarian-dermoid-cyst-histology.jpg" },
  "parapneumonic-effusion": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:parapneumonic-effusion.jpg" },
  "parinaud-syndrome": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:parinaud-syndrome.jpg" },
  "parkinson-disease": { label: "Wikimedia Commons (The Journal of nervous and mental disease (IA journalofnervous49ameruoft).pdf)", url: "https://commons.wikimedia.org/wiki/File:The_Journal_of_nervous_and_mental_disease_(IA_journalofnervous49ameruoft).pdf" },
  "paroxysmal-supraventricular-tachycardia": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:paroxysmal-supraventricular-tachycardia.svg" },
  "patent-ductus-arteriosus": { label: "Wikimedia Commons (Patent Ductus Arteriosus (Device Closure).png)", url: "https://commons.wikimedia.org/wiki/File:Patent_Ductus_Arteriosus_(Device_Closure).png" },
  "pemphigus-vulgaris": { label: "Wikimedia Commons (Pemphigus vulgaris.jpg)", url: "https://commons.wikimedia.org/wiki/File:Pemphigus_vulgaris.jpg" },
  "peptic-ulcer-disease": { label: "Wikimedia Commons (Depiction of a patient suffering from peptic ulcers.png)", url: "https://commons.wikimedia.org/wiki/File:Depiction_of_a_patient_suffering_from_peptic_ulcers.png" },
  "pericarditis": { label: "Wikimedia Commons (PericarditisMyocarditis.jpg)", url: "https://commons.wikimedia.org/wiki/File:PericarditisMyocarditis.jpg" },
  "peripheral-artery-disease": { label: "Wikimedia Commons (Peripheral artery disease.svg)", url: "https://commons.wikimedia.org/wiki/File:Peripheral_artery_disease.svg" },
  "pheochromocytoma": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:pheochromocytoma.jpg" },
  "pituitary-apoplexy": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:pituitary-apoplexy.jpg" },
  "pituitary-macroadenoma": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:pituitary-macroadenoma.jpg" },
  "pneumoconiosis": { label: "Wikimedia Commons (X-ray of slate pneumoconiosis sufferer's lungs. Wellcome L0029726.jpg)", url: "https://commons.wikimedia.org/wiki/File:X-ray_of_slate_pneumoconiosis_sufferer's_lungs._Wellcome_L0029726.jpg" },
  "pneumonia": { label: "Wikimedia Commons (Annual report of the trustees (IA annualreportoftr1819bost).pdf)", url: "https://commons.wikimedia.org/wiki/File:Annual_report_of_the_trustees_(IA_annualreportoftr1819bost).pdf" },
  "postherpetic-neuralgia": { label: "Wikimedia Commons (Herpes zoster chest.png)", url: "https://commons.wikimedia.org/wiki/File:Herpes_zoster_chest.png" },
  "pressure-ulcer": { label: "Wikimedia Commons (Decubitus ulcer stage 4.jpg)", url: "https://commons.wikimedia.org/wiki/File:Decubitus_ulcer_stage_4.jpg" },
  "primary-biliary-cholangitis": { label: "Wikimedia Commons (United States Navy Medical News Letter Vol. 22, No. 9, 13 November 1953 (IA MedicalNewsLetter19531113).pdf)", url: "https://commons.wikimedia.org/wiki/File:United_States_Navy_Medical_News_Letter_Vol._22,_No._9,_13_November_1953_(IA_MedicalNewsLetter19531113).pdf" },
  "primary-brain-tumor": { label: "Wikimedia Commons (Studierfenster Brain Tumor Segmentation.png)", url: "https://commons.wikimedia.org/wiki/File:Studierfenster_Brain_Tumor_Segmentation.png" },
  "primary-hyperparathyroidism": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:primary-hyperparathyroidism.png" },
  "primary-sclerosing-cholangitis": { label: "Wikimedia Commons (CT of primary sclerosing cholangitis (hy).png)", url: "https://commons.wikimedia.org/wiki/File:CT_of_primary_sclerosing_cholangitis_(hy).png" },
  "prolactinoma": { label: "Wikimedia Commons (ProlactinomaMRI.jpg)", url: "https://commons.wikimedia.org/wiki/File:ProlactinomaMRI.jpg" },
  "psoriasis": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:psoriasis.jpg" },
  "psychotic-mood-disorder": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:psychotic-mood-disorder.svg" },
  "pulmonary-hypertension": { label: "Wikimedia Commons (Pulmnary arterial atherosclerosis-Pulmonary hypertension.jpg)", url: "https://commons.wikimedia.org/wiki/File:Pulmnary_arterial_atherosclerosis-Pulmonary_hypertension.jpg" },
  "pyelonephritis": { label: "Wikimedia Commons (Chronic pyelonephritis slide.jpg)", url: "https://commons.wikimedia.org/wiki/File:Chronic_pyelonephritis_slide.jpg" },
  "mitochondrial-encephalomyopathy": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:ragged-red-fibers-gomori.jpg" },
  "restrictive-cardiomyopathy": { label: "Wikimedia Commons (Fddsv-02-1015545-g001 (1).jpg)", url: "https://commons.wikimedia.org/wiki/File:Fddsv-02-1015545-g001_(1).jpg" },
  "rheumatoid-arthritis": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:rheumatoid-arthritis.jpg" },
  "rhinitis": { label: "Wikimedia Commons (Runny nose in cat.jpg)", url: "https://commons.wikimedia.org/wiki/File:Runny_nose_in_cat.jpg" },
  "rocky-mountain-spotted-fever": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:rocky-mountain-spotted-fever-rash.jpg" },
  "roseola": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:roseola.jpg" },
  "rotator-cuff-syndrome": { label: "Wikimedia Commons (Subacromial Impingement with Supraspinatus Rupture.jpg)", url: "https://commons.wikimedia.org/wiki/File:Subacromial_Impingement_with_Supraspinatus_Rupture.jpg" },
  "s1-radiculopathy": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:s1-radiculopathy.jpg" },
  "sarcoidosis": { label: "Wikimedia Commons (Sarcoidosis histology skin involvement.jpg)", url: "https://commons.wikimedia.org/wiki/File:Sarcoidosis_histology_skin_involvement.jpg" },
  "scarlet-fever": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:scarlet-fever.jpg" },
  "schizoid-personality-disorder": { label: "Wikimedia Commons (Word Cloud SzPD.png)", url: "https://commons.wikimedia.org/wiki/File:Word_Cloud_SzPD.png" },
  "schizophrenia": { label: "Wikimedia Commons (Schizophrenia fMRI working memory.jpg)", url: "https://commons.wikimedia.org/wiki/File:Schizophrenia_fMRI_working_memory.jpg" },
  "schizotypal-personality-disorder": { label: "Wikimedia Commons (Signs of StPD 1.png)", url: "https://commons.wikimedia.org/wiki/File:Signs_of_StPD_1.png" },
  "selective-iga-deficiency": { label: "Wikimedia Commons (Antibody Isotypes.png)", url: "https://commons.wikimedia.org/wiki/File:Antibody_Isotypes.png" },
  "serum-sickness": { label: "Wikimedia Commons (RashUrticaria.jpg)", url: "https://commons.wikimedia.org/wiki/File:RashUrticaria.jpg" },
  "sheehan-syndrome": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:sheehan-syndrome.svg" },
  "shock": { label: "Wikimedia Commons (Kolloidale Infusionslösungen.jpg)", url: "https://commons.wikimedia.org/wiki/File:Kolloidale_Infusionslösungen.jpg" },
  "sickle-cell-disease": { label: "Wikimedia Commons (Sickle Cell Disease in Newborns and Infants- A Guide for Parents (IA sicklecelldiseas00usde).pdf)", url: "https://commons.wikimedia.org/wiki/File:Sickle_Cell_Disease_in_Newborns_and_Infants-_A_Guide_for_Parents_(IA_sicklecelldiseas00usde).pdf" },
  "sideroblastic-anemia": { label: "Wikimedia Commons (Ring sideroblast.jpg)", url: "https://commons.wikimedia.org/wiki/File:Ring_sideroblast.jpg" },
  "sinusitis": { label: "Wikimedia Commons (Odontogenic sinusitis.jpg)", url: "https://commons.wikimedia.org/wiki/File:Odontogenic_sinusitis.jpg" },
  "sjogren-syndrome": { label: "Wikimedia Commons (Sjogren's syndrome (2).jpg)", url: "https://commons.wikimedia.org/wiki/File:Sjogren's_syndrome_(2).jpg" },
  "sporotrichosis": { label: "Wikimedia Commons (Feline sporotrichosis 4.jpg)", url: "https://commons.wikimedia.org/wiki/File:Feline_sporotrichosis_4.jpg" },
  "stable-angina": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:stable-angina.jpg" },
  "status-epilepticus": { label: "Wikimedia Commons (MRIinFIRES.jpg)", url: "https://commons.wikimedia.org/wiki/File:MRIinFIRES.jpg" },
  "subarachnoid-hemorrhage": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:subarachnoid-hemorrhage.jpg" },
  "systemic-lupus-erythematosus": { label: "Wikimedia Commons (What Black Women Should Know About Lupus (IA whatblackwomensh00usde).pdf)", url: "https://commons.wikimedia.org/wiki/File:What_Black_Women_Should_Know_About_Lupus_(IA_whatblackwomensh00usde).pdf" },
  "systemic-sclerosis": { label: "Wikimedia Commons (Crescentic glomerulonephritis Periodic acid silver methanamine stain.JPEG)", url: "https://commons.wikimedia.org/wiki/File:Crescentic_glomerulonephritis_Periodic_acid_silver_methanamine_stain.JPEG" },
  "tension-pneumothorax": { label: "Wikimedia Commons (Pneumothorax 001 cs.jpg)", url: "https://commons.wikimedia.org/wiki/File:Pneumothorax_001_cs.jpg" },
  "tetralogy-of-fallot": { label: "Wikimedia Commons (Heart Surgery Practice.jpg)", url: "https://commons.wikimedia.org/wiki/File:Heart_Surgery_Practice.jpg" },
  "thromboangiitis-obliterans": { label: "Wikimedia Commons (55 year old female with advanced Buerger's disease.jpg)", url: "https://commons.wikimedia.org/wiki/File:55_year_old_female_with_advanced_Buerger's_disease.jpg" },
  "transient-ischemic-attack": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:transient-ischemic-attack.png" },
  "trisomy-13": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:trisomy-13.jpg" },
  "tropical-sprue": { label: "Wikimedia Commons (Tropical Diseases - Plate 9.png)", url: "https://commons.wikimedia.org/wiki/File:Tropical_Diseases_-_Plate_9.png" },
  "tuberculosis": { label: "Wikimedia Commons (Mycobacterium tuberculosis in Ziehl-Neelsen stained smear of sputum.jpg)", url: "https://commons.wikimedia.org/wiki/File:Mycobacterium_tuberculosis_in_Ziehl-Neelsen_stained_smear_of_sputum.jpg" },
  "turner-syndrome": { label: "Wikimedia Commons (Gray808.png)", url: "https://commons.wikimedia.org/wiki/File:Gray808.png" },
  "type-1-diabetes-mellitus": { label: "Wikimedia Commons (Type 1 (142240145).jpeg)", url: "https://commons.wikimedia.org/wiki/File:Type_1_(142240145).jpeg" },
  "type-2-diabetes-mellitus": { label: "Wikimedia Commons (The role of macrophage polarization in obesity and type 2 diabetes mellitus.jpg)", url: "https://commons.wikimedia.org/wiki/File:The_role_of_macrophage_polarization_in_obesity_and_type_2_diabetes_mellitus.jpg" },
  "typhoid-fever": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:typhoid-fever-rose-spots.jpg" },
  "ulcerative-colitis": { label: "Wikimedia Commons (Medical diagnosis for the student and practitioner (1922) (14598019059).jpg)", url: "https://commons.wikimedia.org/wiki/File:Medical_diagnosis_for_the_student_and_practitioner_(1922)_(14598019059).jpg" },
  "urinary-tract-infection": { label: "Wikimedia Commons (Pyuria.JPG)", url: "https://commons.wikimedia.org/wiki/File:Pyuria.JPG" },
  "uterine-fibroid": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:uterine-fibroids.png" },
  "valvular-heart-disease": { label: "Wikimedia Commons (Diseases of the chest and the principles of physical diagnosis (1920) (14778271964).jpg)", url: "https://commons.wikimedia.org/wiki/File:Diseases_of_the_chest_and_the_principles_of_physical_diagnosis_(1920)_(14778271964).jpg" },
  "vasculitis": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:vasculitis.jpg" },
  "venous-stasis-dermatitis": { label: "Wikimedia Commons (WIRA-Wiki-GH-012-de-Ulkus-Verlauf-unter-wIRA.png)", url: "https://commons.wikimedia.org/wiki/File:WIRA-Wiki-GH-012-de-Ulkus-Verlauf-unter-wIRA.png" },
  "venous-thrombosis": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:venous-thrombosis.png" },
  "ventricular-septal-defect": { label: "Wikimedia Commons (Ventricular septal defect-es.svg)", url: "https://commons.wikimedia.org/wiki/File:Ventricular_septal_defect-es.svg" },
  "vitamin-b12-deficiency-anemia": { label: "Wikimedia Commons (Hypersegmented neutrophil.png)", url: "https://commons.wikimedia.org/wiki/File:Hypersegmented_neutrophil.png" },
  "vitamin-d-toxicity": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:vitamin-d-toxicity.svg" },
  "wilson-disease": { label: "Wikimedia Commons (Kayser-Fleischer ringArrow.jpg)", url: "https://commons.wikimedia.org/wiki/File:Kayser-Fleischer_ringArrow.jpg" },
  "x-linked-agammaglobulinemia": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:x-linked-agammaglobulinemia.png" },
  "yellow-fever": { label: "Wikimedia Commons (John Horsey sept 24 1821 yellow fever, Allegator.jpg)", url: "https://commons.wikimedia.org/wiki/File:John_Horsey_sept_24_1821_yellow_fever,_Allegator.jpg" },
  "zika-virus-infection": { label: "Wikimedia Commons (Alexius Salvador Zika-Virus.jpg)", url: "https://commons.wikimedia.org/wiki/File:Alexius_Salvador_Zika-Virus.jpg" },
  "zollinger-ellison-syndrome": { label: "Wikimedia Commons (ZES endo.jpg)", url: "https://commons.wikimedia.org/wiki/File:ZES_endo.jpg" },
};

export const CONDITION_IMAGE_CAPTIONS: Partial<
  Record<ConditionImageId, MediaAttribution>
> = {
  "abscess": "Clinical or pathologic image illustrating abscess",
  "acromegaly": "Coarse facial features and prognathism in acromegaly from chronic growth hormone excess",
  "acute-cholangitis": "Clinical or pathologic image illustrating acute cholangitis",
  "addison-disease": "Clinical or pathologic image illustrating addison disease",
  "adhd": "Clinical or pathologic image illustrating adhd",
  "adjustment-disorder": "Clinical or pathologic image illustrating adjustment disorder",
  "alcohol-use-disorder": "Clinical or pathologic image illustrating alcohol use disorder",
  "alcohol-withdrawal": "Alcoholic liver disease — chronic heavy alcohol use underlying withdrawal risk",
  "allergic-contact-dermatitis": "Clinical or pathologic image illustrating allergic contact dermatitis",
  "amenorrhea": "Clinical or pathologic image illustrating amenorrhea",
  "aml": "Clinical or pathologic image illustrating aml",
  "anaphylaxis": "Clinical or pathologic image illustrating anaphylaxis",
  "ankylosing-spondylitis": "Clinical or pathologic image illustrating ankylosing spondylitis",
  "aortic-regurgitation": "Clinical or pathologic image illustrating aortic regurgitation",
  "aphthous-ulcer": "Aphthous ulcer on nonkeratinized oral mucosa",
  "apl": "Clinical or pathologic image illustrating apl",
  "asthma": "Clinical or pathologic image illustrating asthma",
  "atherosclerosis": "Clinical or pathologic image illustrating atherosclerosis",
  "atopic-dermatitis": "Clinical or pathologic image illustrating atopic dermatitis",
  "atrial-fibrillation": "Clinical or pathologic image illustrating atrial fibrillation",
  "atrial-septal-defect": "Clinical or pathologic image illustrating atrial septal defect",
  "atrial-tachycardia": "Clinical or pathologic image illustrating atrial tachycardia",
  "atrioventricular-block": "Clinical or pathologic image illustrating atrioventricular block",
  "avascular-necrosis": "Clinical or pathologic image illustrating avascular necrosis",
  "basal-cell-carcinoma": "Clinical or pathologic image illustrating basal cell carcinoma",
  "basilar-skull-fracture": "Clinical or pathologic image illustrating basilar skull fracture",
  "berylliosis": "Clinical or pathologic image illustrating berylliosis",
  "bicuspid-aortic-valve": "Clinical or pathologic image illustrating bicuspid aortic valve",
  "biliary-atresia": "Clinical or pathologic image illustrating biliary atresia",
  "bph": "Clinical or pathologic image illustrating bph",
  "brief-psychotic-disorder": "Clinical or pathologic image illustrating brief psychotic disorder",
  "c6-radiculopathy": "Clinical or pathologic image illustrating c6 radiculopathy",
  "c7-radiculopathy": "Clinical or pathologic image illustrating c7 radiculopathy",
  "cardiac-tamponade": "Clinical or pathologic image illustrating cardiac tamponade",
  "carotid-stenosis": "Carotid duplex ultrasound showing near-occlusive internal carotid artery stenosis",
  "cat-scratch-disease": "Clinical or pathologic image illustrating cat scratch disease",
  "cataracts": "Clinical or pathologic image illustrating cataracts",
  "celiac-disease": "Clinical or pathologic image illustrating celiac disease",
  "cellulitis": "Clinical or pathologic image illustrating cellulitis",
  "cerebral-contusion": "Clinical or pathologic image illustrating cerebral contusion",
  "chikungunya-fever": "Maculopapular chikungunya rash on the abdomen during acute illness",
  "choledocholithiasis": "Clinical or pathologic image illustrating choledocholithiasis",
  "chronic-bronchitis": "Clinical or pathologic image illustrating chronic bronchitis",
  "cleft-lip": "Clinical or pathologic image illustrating cleft lip",
  "cleft-palate": "Clinical or pathologic image illustrating cleft palate",
  "cll": "Clinical or pathologic image illustrating cll",
  "cml": "Clinical or pathologic image illustrating cml",
  "congenital-adrenal-hyperplasia": "Clinical or pathologic image illustrating congenital adrenal hyperplasia",
  "congenital-rubella-syndrome": "Clinical or pathologic image illustrating congenital rubella syndrome",
  "copper-deficiency": "Clinical or pathologic image illustrating copper deficiency",
  "crohn-disease": "Clinical or pathologic image illustrating crohn disease",
  "cushing-syndrome": "Clinical or pathologic image illustrating cushing syndrome",
  "cystic-fibrosis": "Clinical or pathologic image illustrating cystic fibrosis",
  "delirium-tremens": "Severe alcohol withdrawal delirium with autonomic hyperactivity",
  "dementia": "Clinical or pathologic image illustrating dementia",
  "dengue-fever": "Dengue recovery rash — classic 'white islands in a sea of red' pattern",
  "dental-caries": "Occlusal dental caries with enamel cavitation",
  "diabetes-insipidus": "Massive polyuria — large volumes of dilute urine in diabetes insipidus",
  "diabetic-ketoacidosis": "Clinical or pathologic image illustrating diabetic ketoacidosis",
  "diabetic-nephropathy": "Clinical or pathologic image illustrating diabetic nephropathy",
  "diabetic-neuropathy": "Clinical or pathologic image illustrating diabetic neuropathy",
  "diabetic-retinopathy": "Clinical or pathologic image illustrating diabetic retinopathy",
  "dilated-cardiomyopathy": "Clinical or pathologic image illustrating dilated cardiomyopathy",
  "diverticulitis": "Clinical or pathologic image illustrating diverticulitis",
  "dysmenorrhea": "Clinical or pathologic image illustrating dysmenorrhea",
  "emphysema": "Clinical or pathologic image illustrating emphysema",
  "empyema": "Clinical or pathologic image illustrating empyema",
  "encephalitis": "Clinical or pathologic image illustrating encephalitis",
  "epilepsy":
    "EEG spike-and-wave discharges — characteristic interictal pattern in generalized epilepsy",
  "endocarditis": "Clinical or pathologic image illustrating endocarditis",
  "endometriosis": "Clinical or pathologic image illustrating endometriosis",
  "eosinophilic-granulomatosis-with-polyangiitis": "Clinical or pathologic image illustrating eosinophilic granulomatosis with polyangiitis",
  "fecal-incontinence": "Clinical or pathologic image illustrating fecal incontinence",
  "female-athlete-triad": "Clinical or pathologic image illustrating female athlete triad",
  "femoral-neck-fracture": "Clinical or pathologic image illustrating femoral neck fracture",
  "food-allergy": "Clinical or pathologic image illustrating food allergy",
  "galactorrhea": "Clinical or pathologic image illustrating galactorrhea",
  "gangrene": "Clinical or pathologic image illustrating gangrene",
  "gastric-adenocarcinoma": "Clinical or pathologic image illustrating gastric adenocarcinoma",
  "glaucoma": "Clinical or pathologic image illustrating glaucoma",
  "glomerulonephritis": "Clinical or pathologic image illustrating glomerulonephritis",
  "granulomatosis-with-polyangiitis": "Clinical or pathologic image illustrating granulomatosis with polyangiitis",
  "graves-disease": "Clinical or pathologic image illustrating graves disease",
  "hand-foot-and-mouth-disease": "Clinical or pathologic image illustrating hand foot and mouth disease",
  "heart-failure": "Clinical or pathologic image illustrating heart failure",
  "hemothorax": "Clinical or pathologic image illustrating hemothorax",
  "herpangina": "Clinical or pathologic image illustrating herpangina",
  "hirschsprung-disease": "Clinical or pathologic image illustrating hirschsprung disease",
  "hiv-infection": "Clinical or pathologic image illustrating hiv infection",
  "hodgkin-lymphoma": "Clinical or pathologic image illustrating hodgkin lymphoma",
  "holoprosencephaly": "Clinical or pathologic image illustrating holoprosencephaly",
  "howell-jolly-body": "Clinical or pathologic image illustrating howell jolly body",
  "huntington-disease": "Clinical or pathologic image illustrating huntington disease",
  "hydrocephalus": "Clinical or pathologic image illustrating hydrocephalus",
  "hyper-ige-syndrome": "Clinical or pathologic image illustrating hyper ige syndrome",
  "hyperlipidemia": "Clinical or pathologic image illustrating hyperlipidemia",
  "hyperosmolar-hyperglycemic-state": "Clinical or pathologic image illustrating hyperosmolar hyperglycemic state",
  "hyperparathyroidism": "Clinical or pathologic image illustrating hyperparathyroidism",
  "hyperprolactinemia": "Clinical or pathologic image illustrating hyperprolactinemia",
  "hypertension": "Clinical or pathologic image illustrating hypertension",
  "hypertensive-retinopathy": "Clinical or pathologic image illustrating hypertensive retinopathy",
  "hyperthyroidism": "Clinical or pathologic image illustrating hyperthyroidism",
  "hypertrophic-cardiomyopathy": "Clinical or pathologic image illustrating hypertrophic cardiomyopathy",
  "hypogonadism": "Clinical or pathologic image illustrating hypogonadism",
  "hypopituitarism": "Clinical or pathologic image illustrating hypopituitarism",
  "hypothyroidism": "Clinical or pathologic image illustrating hypothyroidism",
  "ibd": "Clinical or pathologic image illustrating ibd",
  "idiopathic-intracranial-hypertension": "Clinical or pathologic image illustrating idiopathic intracranial hypertension",
  "iga-vasculitis": "Clinical or pathologic image illustrating iga vasculitis",
  "infective-endocarditis": "Clinical or pathologic image illustrating infective endocarditis",
  "interstitial-lung-disease": "Clinical or pathologic image illustrating interstitial lung disease",
  "intestinal-perforation": "Clinical or pathologic image illustrating intestinal perforation",
  "irritable-bowel-syndrome": "Clinical or pathologic image illustrating irritable bowel syndrome",
  "ischemic-optic-neuropathy": "Clinical or pathologic image illustrating ischemic optic neuropathy",
  "ischemic-stroke": "Clinical or pathologic image illustrating ischemic stroke",
  "juvenile-parkinsonism": "Clinical or pathologic image illustrating juvenile parkinsonism",
  "keratoconjunctivitis-sicca": "Dry eye with ocular surface staining/keratitis pattern",
  "l4-radiculopathy": "Clinical or pathologic image illustrating l4 radiculopathy",
  "l5-radiculopathy": "Clinical or pathologic image illustrating l5 radiculopathy",
  "lacunar-stroke": "Clinical or pathologic image illustrating lacunar stroke",
  "lichen-planus": "Clinical or pathologic image illustrating lichen planus",
  "lung-cancer": "Clinical or pathologic image illustrating lung cancer",
  "lyme-disease": "Clinical or pathologic image illustrating lyme disease",
  "lymphadenitis": "Clinical or pathologic image illustrating lymphadenitis",
  "lymphogranuloma-venereum": "Clinical or pathologic image illustrating lymphogranuloma venereum",
  "lymphoma": "Clinical or pathologic image illustrating lymphoma",
  "major-depressive-disorder": "Clinical or pathologic image illustrating major depressive disorder",
  "malaria": "Clinical or pathologic image illustrating malaria",
  "mastocytosis": "Clinical or pathologic image illustrating mastocytosis",
  "meckel-diverticulum": "Clinical or pathologic image illustrating meckel diverticulum",
  "medullary-thyroid-carcinoma": "Clinical or pathologic image illustrating medullary thyroid carcinoma",
  "melanoma": "Clinical or pathologic image illustrating melanoma",
  "men-type-1": "Clinical or pathologic image illustrating men type 1",
  "men-type-2": "Clinical or pathologic image illustrating men type 2",
  "men2a": "Clinical or pathologic image illustrating men2a",
  "men2b": "Clinical or pathologic image illustrating men2b",
  "meningitis": "Cross-section of cranial meninges — dura mater, arachnoid mater, pia mater, and subarachnoid space",
  "menkes-disease": "Clinical or pathologic image illustrating menkes disease",
  "menopause": "Clinical or pathologic image illustrating menopause",
  "merkel-cell-carcinoma": "Clinical or pathologic image illustrating merkel cell carcinoma",
  "hydatidiform-mole": "Transvaginal ultrasound of molar pregnancy — classic 'snowstorm' / bunch-of-grapes intrauterine pattern",
  "multiple-endocrine-neoplasia": "Clinical or pathologic image illustrating multiple endocrine neoplasia",
  "multiple-sclerosis": "Clinical or pathologic image illustrating multiple sclerosis",
  "myocardial-infarction": "Clinical or pathologic image illustrating myocardial infarction",
  "neonatal-respiratory-distress-syndrome": "Clinical or pathologic image illustrating neonatal respiratory distress syndrome",
  "nephritic-syndrome": "Clinical or pathologic image illustrating nephritic syndrome",
  "nephrolithiasis": "Clinical or pathologic image illustrating nephrolithiasis",
  "nephrotic-syndrome": "Clinical or pathologic image illustrating nephrotic syndrome",
  "neural-tube-defects": "Clinical or pathologic image illustrating neural tube defects",
  "neuromyelitis-optica": "Clinical or pathologic image illustrating neuromyelitis optica",
  "non-hodgkin-lymphoma": "Clinical or pathologic image illustrating non hodgkin lymphoma",
  "optic-neuritis": "Clinical or pathologic image illustrating optic neuritis",
  "osteomyelitis": "Clinical or pathologic image illustrating osteomyelitis",
  "otitis-media": "Clinical or pathologic image illustrating otitis media",
  "teratoma": "H&E histology of ovarian dermoid cyst (mature cystic teratoma) — well-differentiated tissues from multiple germ layers",
  "parapneumonic-effusion": "Clinical or pathologic image illustrating parapneumonic effusion",
  "parinaud-syndrome": "Clinical or pathologic image illustrating parinaud syndrome",
  "parkinson-disease": "Clinical or pathologic image illustrating parkinson disease",
  "paroxysmal-supraventricular-tachycardia": "Clinical or pathologic image illustrating paroxysmal supraventricular tachycardia",
  "patent-ductus-arteriosus": "Clinical or pathologic image illustrating patent ductus arteriosus",
  "pemphigus-vulgaris": "Clinical or pathologic image illustrating pemphigus vulgaris",
  "peptic-ulcer-disease": "Clinical or pathologic image illustrating peptic ulcer disease",
  "pericarditis": "Clinical or pathologic image illustrating pericarditis",
  "peripheral-artery-disease": "Clinical or pathologic image illustrating peripheral artery disease",
  "pheochromocytoma": "Clinical or pathologic image illustrating pheochromocytoma",
  "pituitary-apoplexy": "Clinical or pathologic image illustrating pituitary apoplexy",
  "pituitary-macroadenoma": "Clinical or pathologic image illustrating pituitary macroadenoma",
  "pneumoconiosis": "Clinical or pathologic image illustrating pneumoconiosis",
  "pneumonia": "Clinical or pathologic image illustrating pneumonia",
  "postherpetic-neuralgia": "Dermatomal herpes zoster rash — acute shingles preceding postherpetic neuralgia",
  "pressure-ulcer": "Clinical or pathologic image illustrating pressure ulcer",
  "primary-biliary-cholangitis": "Clinical or pathologic image illustrating primary biliary cholangitis",
  "primary-brain-tumor": "Clinical or pathologic image illustrating primary brain tumor",
  "primary-hyperparathyroidism": "Clinical or pathologic image illustrating primary hyperparathyroidism",
  "primary-sclerosing-cholangitis": "Clinical or pathologic image illustrating primary sclerosing cholangitis",
  "prolactinoma": "Clinical or pathologic image illustrating prolactinoma",
  "psoriasis": "Clinical or pathologic image illustrating psoriasis",
  "psychotic-mood-disorder": "Clinical or pathologic image illustrating psychotic mood disorder",
  "pulmonary-hypertension": "Clinical or pathologic image illustrating pulmonary hypertension",
  "pyelonephritis": "Clinical or pathologic image illustrating pyelonephritis",
  "mitochondrial-encephalomyopathy": "Ragged red fibers (subsarcolemmal mitochondrial aggregates) on Gomori trichrome muscle biopsy in mitochondrial myopathy",
  "restrictive-cardiomyopathy": "Clinical or pathologic image illustrating restrictive cardiomyopathy",
  "rheumatoid-arthritis": "Clinical or pathologic image illustrating rheumatoid arthritis",
  "rhinitis": "Clinical or pathologic image illustrating rhinitis",
  "rocky-mountain-spotted-fever": "Characteristic spotted rash of Rocky Mountain spotted fever on the wrist and hand",
  "roseola": "Clinical or pathologic image illustrating roseola",
  "rotator-cuff-syndrome": "Clinical or pathologic image illustrating rotator cuff syndrome",
  "s1-radiculopathy": "Clinical or pathologic image illustrating s1 radiculopathy",
  "sarcoidosis": "Clinical or pathologic image illustrating sarcoidosis",
  "scarlet-fever": "Clinical or pathologic image illustrating scarlet fever",
  "schizoid-personality-disorder": "Clinical or pathologic image illustrating schizoid personality disorder",
  "schizophrenia": "Clinical or pathologic image illustrating schizophrenia",
  "schizotypal-personality-disorder": "Clinical or pathologic image illustrating schizotypal personality disorder",
  "selective-iga-deficiency": "Clinical or pathologic image illustrating selective iga deficiency",
  "serum-sickness": "Urticarial rash pattern that can occur in serum sickness after immune-complex complement activation",
  "sheehan-syndrome": "Clinical or pathologic image illustrating sheehan syndrome",
  "shock": "Clinical or pathologic image illustrating shock",
  "sickle-cell-disease": "Clinical or pathologic image illustrating sickle cell disease",
  "sideroblastic-anemia": "Clinical or pathologic image illustrating sideroblastic anemia",
  "sinusitis": "Clinical or pathologic image illustrating sinusitis",
  "sjogren-syndrome": "Clinical or pathologic image illustrating sjogren syndrome",
  "sporotrichosis": "Clinical or pathologic image illustrating sporotrichosis",
  "stable-angina": "Clinical or pathologic image illustrating stable angina",
  "status-epilepticus": "Prolonged seizure activity — neurologic emergency requiring urgent benzodiazepines",
  "subarachnoid-hemorrhage": "Clinical or pathologic image illustrating subarachnoid hemorrhage",
  "systemic-lupus-erythematosus": "Clinical or pathologic image illustrating systemic lupus erythematosus",
  "systemic-sclerosis": "Clinical or pathologic image illustrating systemic sclerosis",
  "tension-pneumothorax": "Clinical or pathologic image illustrating tension pneumothorax",
  "tetralogy-of-fallot": "Clinical or pathologic image illustrating tetralogy of fallot",
  "thromboangiitis-obliterans": "Clinical or pathologic image illustrating thromboangiitis obliterans",
  "transient-ischemic-attack": "Clinical or pathologic image illustrating transient ischemic attack",
  "trisomy-13": "Clinical or pathologic image illustrating trisomy 13",
  "tropical-sprue": "Clinical or pathologic image illustrating tropical sprue",
  "tuberculosis": "Clinical or pathologic image illustrating tuberculosis",
  "turner-syndrome": "Clinical or pathologic image illustrating turner syndrome",
  "type-1-diabetes-mellitus": "Clinical or pathologic image illustrating type 1 diabetes mellitus",
  "type-2-diabetes-mellitus": "Clinical or pathologic image illustrating type 2 diabetes mellitus",
  "typhoid-fever": "Rose spots on the chest in typhoid fever due to Salmonella Typhi",
  "ulcerative-colitis": "Clinical or pathologic image illustrating ulcerative colitis",
  "urinary-tract-infection": "Clinical or pathologic image illustrating urinary tract infection",
  "uterine-fibroid": "Uterine fibroid locations: subserosal, intramural, submucosal, pedunculated, and intraligamentous leiomyomas",
  "valvular-heart-disease": "Clinical or pathologic image illustrating valvular heart disease",
  "vasculitis": "Clinical or pathologic image illustrating vasculitis",
  "venous-stasis-dermatitis": "Clinical or pathologic image illustrating venous stasis dermatitis",
  "venous-thrombosis": "Clinical or pathologic image illustrating venous thrombosis",
  "ventricular-septal-defect": "Clinical or pathologic image illustrating ventricular septal defect",
  "vitamin-b12-deficiency-anemia": "Clinical or pathologic image illustrating vitamin b12 deficiency anemia",
  "vitamin-d-toxicity": "Clinical or pathologic image illustrating vitamin d toxicity",
  "wilson-disease": "Clinical or pathologic image illustrating wilson disease",
  "x-linked-agammaglobulinemia": "Clinical or pathologic image illustrating x linked agammaglobulinemia",
  "yellow-fever": "Clinical or pathologic image illustrating yellow fever",
  "zika-virus-infection": "Clinical or pathologic image illustrating zika virus infection",
  "zollinger-ellison-syndrome": "Clinical or pathologic image illustrating zollinger ellison syndrome",
};

export function getConditionImageForId(id: string): string | undefined {
  return CONDITION_IMAGES[id as ConditionImageId];
}

export function getConditionImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return CONDITION_IMAGE_ATTRIBUTIONS[id as ConditionImageId];
}

export function getConditionImageCaptionForId(
  id: string,
): string | undefined {
  return CONDITION_IMAGE_CAPTIONS[id as ConditionImageId];
}
