#!/usr/bin/env python3
"""Generate media mapping TypeScript from images on disk."""
from __future__ import annotations

import json
import os
import re
import urllib.parse

ROOT = os.path.join(os.path.dirname(__file__), "..")
IMAGES = os.path.join(ROOT, "src", "media", "images")
MANIFEST = os.path.join(ROOT, "src", "media", "download-manifest.json")


def manifest_key_for_rel(category: str, filename: str) -> str:
    return f"{category}/{filename}"

# local path -> entry id when filename != id
ID_ALIASES: dict[str, str] = {
    "conditions/dengue-recovery-rash.jpg": "dengue-fever",
    "conditions/chikungunya-rash.jpg": "chikungunya-fever",
    "conditions/rocky-mountain-spotted-fever-rash.jpg": "rocky-mountain-spotted-fever",
    "conditions/typhoid-fever-rose-spots.jpg": "typhoid-fever",
    "conditions/molar-pregnancy-ultrasound.jpg": "hydatidiform-mole",
    "conditions/ovarian-dermoid-cyst-histology.jpg": "teratoma",
    "conditions/ragged-red-fibers-gomori.jpg": "mitochondrial-encephalomyopathy",
    "conditions/meninges-diagram.svg": "meningitis",
    "conditions/uterine-fibroids.png": "uterine-fibroid",
    "conditions/tetralogy-of-fallot-cyanosis.jpg": "tetralogy-of-fallot",
    "musculoskeletal/sarcomere-diagram.svg": "sarcomere",
    "cells/mitochondrial-respiratory-chain.svg": "oxidative-phosphorylation",
    "cells/b-lymphocyte-blausen.png": "naive-b-lymphocyte",
    "cells/immunological-memory.png": "memory-t-lymphocyte",
    "musculoskeletal/sarcomere-diagram.svg": "sarcomere",
}

IMAGE_ID_ALIASES: dict[str, dict[str, str]] = {
    "symptoms": {"petechiae": "purpura"},
}

PRESERVE_CAPTIONS: dict[str, dict[str, str]] = {
    "cells": {
        "a-delta-fiber": "Propagation of action potential along myelinated nerve fiber en",
        "acetylation": "Histone acetylation in regulating glial response after CNS injury",
        "actin": "Microfilament Structure",
        "adherens-junction": "Adherens Junctions structural proteins-LangNeutral",
        "adventitia": "Microscopic anatomy of an artery de",
        "anterior-pituitary-histology": "Annotated anterior pituitary acidophils and basophils — lactotroph, somatotroph, corticotroph, thyrotroph, gonadotroph",
        "antigen-presenting-cell": "An MHC tetramer binding to T-cell receptors (left), and an MHC molecule on the surface of an antigen presenting cell binding to T-cell receptors",
        "astrocyte": "Astrocyte stained for GFAP and vimentin in tissue culture",
        "b-lymphocyte": "Plasma B cell with abundant rough endoplasmic reticulum for antibody secretion",
        "basophil": "Peripheral blood smear basophil with coarse basophilic granules",
        "birbeck-granules": "Langerhans cell histiocytosis - Birbeck granules",
        "cd4-t-lymphocyte": "Differentiation of helper T cell subsets is determined by cytokines",
        "cd8-t-lymphocyte": "Killer T cells surround a cancer cell",
        "cervical-os": "Cervical os — external opening of the uterine cervix into the vagina",
        "chromaffin-cell": "Human adrenal medulla micrograph showing chromaffin-cell-rich medullary tissue",
        "clear-cytoplasm": "Schematic clear cell morphology showing optically clear cytoplasm after lipid/glycogen processing",
        "core-promoter-elements": "Core promoter elements showing BRE, TATA box, initiator, and downstream promoter element",
        "corticospinal-tract": "Medullary cross-section showing pyramidal (corticospinal) decussation — motor fibers crossing to contralateral side",
        "cytoskeleton": "Cytoskeletal components showing microtubules, actin microfilaments, and intermediate filaments",
        "decussate": "Neural fiber decussation — pyramidal decussation and related crossing pathways",
        "dendritic-cell": "Antigen presentation by dendritic cell",
        "dermal-appendage": "Skin hair follicle — dermal appendage structure in epidermis and dermis",
        "desmosome": "Transmission electron micrograph of a normal apical junctional complex (AJC), the structure between two adjacent enterocytes from the ileal epithelium region of a 21 d old chick",
        "detrusor-muscle": "Urinary bladder diagram labeling detrusor muscle in the bladder wall",
        "dna-methylation": "Methylation levels during mouse very early embryonic development",
        "dna-transcription": "Regulatory sequence in a promoter at a transcription start site with a paused RNA polymerase and a TOP2B-induced DNA double-strand break",
        "dorsal-columns": "Spinal cord cross-section labeling posterior (dorsal) columns, anterior/posterior roots, and spinal ganglion",
        "endometrium": "Diseases of women and abdominal surgery",
        "endothelial-cell": "Interaction between Kupffer cells, Stellate cells and endothelial cells",
        "eosinophil": "Eosinophil blood smear",
        "ependymal-cell": "H&E photomicrograph of normal ependymal cells at 400× magnification",
        "epigenetics": "Nematode C. elegans germline chromatin Epigenetic imprint on the paternal X chromosome",
        "epithelial-polarity": "Polarized epithelial cell diagram showing apical and basolateral membrane domains",
        "epithelioid-cell": "Sarcoidosis - Apoptotic bodies",
        "extracellular-matrix-labeled": "Loose connective tissue diagram labeling fibroblasts in extracellular matrix",
        "fenestrae": "Glandula parathyroidea – overview",
        "fibroblast": "Fibroblast in connective tissue — synthesizes collagen and extracellular matrix",
        "gap-junction": "Gap junction (connexon) channels connecting adjacent cells for direct cytoplasmic communication",
        "golgi-tendon-organ": "Golgi tendon organ at muscle–tendon junction — detects increased muscle tension via Ib afferents",
        "gray-matter": "High magnification micrograph of brain, showing normal white matter and normal grey matter. HPS stain. Brain biopsy. Related images Intermed. mag. High mag. Very high mag.",
        "helper-t-cell-differentiation": "CD4+ T-helper differentiation pathways used for activated macrophage and naive Th0 cell entries",
        "hemidesmosome": "Schematic illustration of the basement membrane zones of epithelium",
        "hepatic-sinusoids": "Hepatic circulation and microcirculation",
        "hepatic-structure": "Liver lobule diagram showing hepatocytes as organ parenchyma arranged around sinusoids",
        "hepatocyte": "Human liver H&E section showing hepatocytes organized into plates and lobules",
        "hypersegmented-neutrophil": "This is a peripheral blood smear of a patient with megaloblastic anemia. The red arrow points out a hypersegmented neutrophil. The image was found on a telepathvision site of the US VA: http://www.va.gov/telepathvisn6/megalops.GIF The home page of this collection of images is http://www.va.gov/telep",
        "hypothalamus": "1806 The Hypothalamus-Pituitary Complex",
        "intermediate-filament": "Cytoskeleton - Intermediate filament -- Smart-Servier",
        "intestinal-l-cell": "Confocal ileum image showing PYY-GFP enteroendocrine L cells in green",
        "keratinocyte": "Epidermal keratinocytes in stratified squamous epithelium",
        "kupffer-cell": "Kupffer cells high mag cropped",
        "lamina-propria": "Stomach - Iron Crystals In Gastric Lamina Propria And Epithelium",
        "langerhans-cell": "Langerhans Cells in Normal Epidermis, CD1a Immunostain",
        "langhans-giant-cell": "Langhans giant cell with horseshoe-arranged nuclei at the periphery — seen in granulomatous inflammation",
        "leukocyte": "WBC (neutrophil) at centre, numerous erythrocytes and platelets (dot like bodies) in Wright's stained peripheral blood smear (PBS) microscopy",
        "leydig-cell": "Testis cross-section — seminiferous tubules surrounded by interstitial Leydig cells (Gray's anatomy)",
        "lymphocyte": "Microphotographs of atypical lymphocytes observed in peripheral blood smears of quokkas on Rottnest Island",
        "macrophage": "Infiltration of CD68+ tumor-associated macrophages (TAMs) in distinct histologic location",
        "mast-cell": "Mast cell with granules containing histamine and heparin — key effector in type I hypersensitivity",
        "medial-longitudinal-fasciculus": "Population-averaged human tractography atlas - Brainstem",
        "melanocyte": "Melanocyte dendritic processes transferring melanin to surrounding keratinocytes",
        "melanosome": "Anuran melanosoms3 - Falk etal 2025",
        "memory-t-lymphocyte": "Immunological memory: long-lived memory B and T lymphocytes enable rapid secondary responses on re-exposure",
        "merkel-cell": "Merkel cell in epidermis — mechanoreceptor associated with light touch",
        "metanephric-blastema": "Kidney development schematic showing metanephric blastema and ureteric bud derivatives",
        "microglial-cell": "Microglia (coronin 1a, green) and neuronal processes (alpha-internexin, red) in rat brain culture",
        "microtubule": "Chlorophyte-cell-diagram",
        "monocyte": "Peripheral blood monocyte — largest leukocyte with kidney-shaped nucleus",
        "mrna-translation": "Ribosome mRNA translation en",
        "mtdna": "Mitochondrial DNA lg",
        "mucosa": "Histology of transformation zone mucosa",
        "multinucleated-giant-cell": "Langhans giant cell with horseshoe-arranged nuclei at the periphery in granulomatous inflammation",
        "myeloid-surface-markers": "Myeloid Surface Markers",
        "myometrium": "Uterine myometrium — smooth muscle layer of the uterine wall",
        "naive-b-lymphocyte": "B lymphocyte with surface immunoglobulin (BCR) — naïve B cells express IgM and IgD awaiting first antigen encounter",
        "natural-killer-cell": "Colorized scanning electron micrograph of a human natural killer cell",
        "neural-crest": "Neural.crest.cells.migration",
        "neutrophil": "Segmented neutrophil on peripheral blood smear — primary phagocyte in acute inflammation",
        "oligodendrocyte": "Oligodendrocyte forming myelin sheath around a CNS axon",
        "osteoblast": "High-magnification H&E bone micrograph showing osteoblasts lining osteoid/bone surface",
        "osteoclast": "Light micrograph of a multinucleated osteoclast with foamy cytoplasm",
        "ovarian-theca-cell": "Ovarian follicle histology showing granulosa and theca cell layers surrounding the oocyte",
        "oxidative-phosphorylation": "Inner mitochondrial membrane respiratory chain: complexes I–IV pass electrons to O₂; proton pumping drives ATP synthase (Complex V)",
        "pancreatic-beta-cell": "Scanning electron micrograph of glomerulus with podocyte foot processes",
        "periventricular-white-matter": "Periventricular white matter — myelinated tracts adjacent to lateral ventricles",
        "pneumocyte": "Hyaline membranes - very high mag",
        "polymerization": "CSIRO ScienceImage 3020 Starch to Polymer",
        "pre-mrna": "Gene with introns and exons",
        "preganglionic-neuron": "Efferent sympathetic and parasympathetic autonomic pathways showing preganglionic projections",
        "preterm-lung-maturity": "Hyaline membranes - very high mag",
        "protein-kinase-phosphoryl-transfer": "General protein kinase phosphoryl transfer from ATP to substrate",
        "renal-corpuscle": "Renal corpuscle diagram used for juxtaglomerular and intraglomerular mesangial cell entries",
        "saltatory-conduction": "Saltatory conduction along myelinated axon at nodes of Ranvier",
        "schwann-cell": "Diagram of Schwann cells myelinating peripheral nerve axons",
        "serosa": "Chicken embryo at the stage of formation of trunk and amniotic folds",
        "siderophage": "Siderophage CSF cytology",
        "signet-ring-cells": "Gastric adenocarcinoma signet-ring cell variant on H&E stain",
        "stem-cell": "Stem cell potency diagram showing totipotent, pluripotent, and differentiated derivatives",
        "stroma": "Spiral arteries in endometrial stroma",
        "t-cell-signaling": "063-T-CellReceptor-MHC-ru",
        "t-lymphocyte": "HIV-infected T lymphocyte — CD4+ T cell as primary target of HIV",
        "th1": "CD4⁺ T-helper subset differentiation — IL-12/IFN-γ drives Th1 macrophage-activating immunity",
        "th17": "CD4⁺ T-helper subset differentiation pathways — IL-23 sustains Th17 lineage",
        "th2": "M2 macrophages. Sézary cells produce the Th2 cytokines IL-4 and IL-13",
        "tight-junction": "Morphological modifications during EMT",
        "type-1-pneumocyte": "Type I pneumocyte — thin squamous alveolar epithelial cell for gas exchange",
        "type-2-pneumocyte": "Type II pneumocyte with lamellar bodies — produces pulmonary surfactant",
        "white-matter": "Grey matter and white matter",
    },
    "conditions": {
        "21-hydroxylase-deficiency": "Adrenal steroid synthesis pathway — 21-hydroxylase block shunts precursors to androgens with cortisol/aldosterone deficiency",
        "abscess": "Cutaneous abscess on the hip with spontaneous purulent drainage (MRSA)",
        "achalasia": "Barium swallow showing bird-beak narrowing and megaesophagus in achalasia",
        "acromegaly": "Coarse facial features and prognathism in acromegaly from chronic growth hormone excess",
        "acute-cholangitis": "Charcot's cholangitis triad-en",
        "acute-lymphoblastic-leukemia": "Lymphoblast morphology in acute lymphoblastic leukemia",
        "acute-megakaryoblastic-leukemia": "Bone marrow blasts of acute megakaryoblastic leukemia",
        "addison-disease": "T. Addison; On...supra-renal capsules Wellcome L0018484",
        "adhd": "Stressor-linked emotional response out of proportion to stressor",
        "alcohol-use-disorder": "Reticulin stain Pathological and histological images courtesy of Ed Uthman at flickr.",
        "alcohol-withdrawal": "Alcoholic liver disease — chronic heavy alcohol use underlying withdrawal risk",
        "allergic-contact-dermatitis": "Allergic contact dermatitis — pruritic eczematous eruption at site of allergen exposure",
        "alpha-1-antitrypsin-deficiency": "PAS-diastase liver biopsy showing diastase-resistant hepatocyte globules",
        "alzheimer-disease": "Neurofibrillary tangles and senile plaques — hallmark Alzheimer disease histopathology",
        "amenorrhea": "HPO axis during follicular phase — hypothalamic GnRH, pituitary LH/FSH, and ovarian steroidogenesis disrupted in amenorrhea",
        "aml": "Acute Myeloid Leukemia",
        "anaphylaxis": "Signs and symptoms of anaphylaxis across skin, airway, GI, and cardiovascular systems",
        "anemia": "Hand pallor comparison in severe anemia",
        "ankylosing-spondylitis": "Bamboo spine ankylosing spondylitis",
        "aortic-regurgitation": "Aortic regurgitation — diastolic murmur from incompetent aortic valve with wide pulse pressure",
        "aphthous-ulcer": "Aphthous ulcer on nonkeratinized oral mucosa",
        "apl": "Cytology of acute promyelocytic leukemia, annotated",
        "aspiration-pneumonitis": "Aspiration pneumonitis — bilateral dependent infiltrates from chemical lung injury after gastric contents aspiration",
        "asthma": "Asthma — airway inflammation with reversible bronchoconstriction and mucus plugging",
        "atherosclerosis": "Endothelial dysfunction Atherosclerosis",
        "atopic-dermatitis": "Atopic dermatitis — pruritic flexural eczema in atopy-prone patients",
        "atrial-fibrillation": "Herz-EKG1kanalVorhofflimmernSmartwatch-171021",
        "atrial-septal-defect": "Echokardiogram von Atriumseptumdefekt",
        "atrial-tachycardia": "Multifocal Atrial Tachycardia",
        "atrioventricular-block": "3rd degree heart block",
        "azoospermia": "Semen analysis specimen under microscopy — used to evaluate sperm concentration in male infertility workup",
        "bacterial-meningitis": "Gram-stained CSF — neutrophilic pleocytosis with intracellular diplococci in bacterial meningitis",
        "basal-cell-carcinoma": "Histopathology of micronodular basal-cell carcinoma",
        "basilar-skull-fracture": "Battle sign — retroauricular ecchymosis suggesting basilar skull fracture",
        "beriberi": "Depiction of a person suffering from heart failure",
        "berylliosis": "Chronic berylliosis — granulomatous lung disease from beryllium exposure",
        "bicuspid-aortic-valve": "Heart bicuspid aortic valve",
        "biliary-atresia": "Biliary atresia — congenital obliteration of extrahepatic bile ducts causing neonatal cholestasis",
        "bph": "Benign Prostatic Hyperplasia nci-vol-7137-300",
        "brief-psychotic-disorder": "Climacteric psychosis",
        "bronchiectasis": "Cystic Fibrosis. See a full animation of this medical topic",
        "c3-deficiency": "Complement cascade — C3 is the central convergence point cleaved by all three activation pathways",
        "c6-radiculopathy": "Dermatomes of the limbs",
        "c7-radiculopathy": "Cutaneous branches of posterior spinal nerve divisions",
        "carbon-monoxide-poisoning": "Peripheral Cyanosis due to Ischemia",
        "carcinoid-syndrome": "Well-differentiated duodenal neuroendocrine tumor — midgut NET source of serotonin causing carcinoid syndrome when metastatic to liver",
        "cardiac-tamponade": "Electrical Alternans",
        "cardiogenic-shock": "Kolloidale Infusionslösungen",
        "carotid-stenosis": "Carotid duplex ultrasound showing near-occlusive internal carotid artery stenosis",
        "carpal-tunnel-syndrome": "Carpal tunnel anatomy — median nerve compression beneath flexor retinaculum at wrist",
        "cat-scratch-disease": "Cat-scratch disease — regional lymphadenopathy after Bartonella henselae inoculation",
        "cataracts": "Slit-lamp photograph of mature cataract with dense lens opacity",
        "celiac-disease": "Celiac disease — villous atrophy and crypt hyperplasia on small bowel biopsy",
        "cellulitis": "Lower-leg cellulitis with erythema and edema",
        "cerebral-contusion": "Cerebral contusion on CT — hemorrhagic brain injury from blunt head trauma",
        "chikungunya-fever": "Maculopapular chikungunya rash on the abdomen during acute illness",
        "choledocholithiasis": "ERCP stone",
        "chronic-bronchitis": "Chronic obstructive pulmonary disease world map - DALY - WHO2004",
        "cleft-lip": "Cleft Lip & Cleft Palate Repair",
        "cleft-palate": "Cleft Lip & Cleft Palate Repair",
        "cll": "C Louis Leipoldt05",
        "cluster-headache": "Cluster headache symptom diagram — unilateral periorbital pain with ipsilateral autonomic features",
        "cml": "Bcrablmet",
        "congenital-adrenal-hyperplasia": "Congenital adrenal hyperplasia",
        "congenital-rubella-syndrome": "Cataracts due to Congenital Rubella Syndrome (CRS) PHIL 4284 lores",
        "copper-deficiency": "Swayback",
        "creutzfeldt-jakob-disease": "Creutzfeldt-Jakob disease — rapidly progressive prion encephalopathy with spongiform change",
        "crohn-disease": "Severe ulcerative colitis",
        "cushing-disease": "Wide purple striae in hypercortisolism — classic skin finding in Cushing disease from pituitary ACTH excess",
        "cushing-syndrome": "Cushing syndrome — central obesity, moon facies, and purple striae from chronic cortisol excess",
        "cystic-fibrosis": "Blausen 0286 CysticFibrosis",
        "delirium-tremens": "Severe alcohol withdrawal delirium with autonomic hyperactivity",
        "dementia": "Histopathology of Alzheimer's disease, in the CA3 area of the hippocampus (here showing a normal histology image to describe the location - it is usually atrophied in Alzheimer's disease): Amyloid plaque (top right), neurofibrillary tangles (bottom left) and granulovacuolar degeneration (bottom cent",
        "dengue-fever": "Dengue recovery rash — classic 'white islands in a sea of red' pattern",
        "dental-caries": "Occlusal dental caries with enamel cavitation",
        "diabetes-insipidus": "Massive polyuria — large volumes of dilute urine in diabetes insipidus",
        "diabetic-ketoacidosis": "Diabetic Ketoacidosis",
        "diabetic-nephropathy": "Light micrograph of diabetic nephropathy with nodular glomerulosclerosis",
        "diabetic-neuropathy": "Diabetic neuropathy foot examination device",
        "diabetic-retinopathy": "Fundus image showing hard exudates, microaneurysms, and small hemorrhages in diabetic retinopathy",
        "dilated-cardiomyopathy": "Blausen 0165 Cardiomyopathy Dilated",
        "diverticulitis": "Seed derived storage cells - Perforated diverticulitis",
        "duodenal-atresia": "Double bubble sign on abdominal radiograph — dilated stomach and proximal duodenum in duodenal atresia",
        "dysmenorrhea": "Period pain menstrual cramps uterus",
        "ectopic-pregnancy": "Transvaginal ultrasound showing ectopic pregnancy with gestational sac adjacent to the left ovary",
        "ehlers-danlos-syndrome": "Hyperextensible skin in Ehlers-Danlos syndrome — skin stretches beyond normal and returns slowly",
        "emphysema": "Emphysema H and E",
        "empyema": "Empyema of the pleura Wellcome L0061158",
        "encephalitis": "\"This 33 year-old female patient presented with agitation, confusion, mutism, and fever. This coronal T2-weighted MR image shows high signal in the temporal lobes including hippocampal formations and parahippogampal gyrae, insulae, and right inferior frontal gyrus. The right gyrus rectus and the col",
        "endocarditis": "Endocarditis ultrasound",
        "endometriosis": "Blausen 0349 Endometriosis-it",
        "eosinophilic-granulomatosis-with-polyangiitis": "Churg-Strauss syndrome",
        "epilepsy": "Spike-waves",
        "esophageal-varices": "Endoscopic esophageal varices with red wale signs",
        "ewing-sarcoma": "Small round blue cell histology of Ewing sarcoma",
        "fabry-disease": "Fabry disease — angiokeratomas and α-galactosidase A deficiency with Gb3 accumulation",
        "fecal-incontinence": "Tri-State medical journal",
        "female-athlete-triad": "RED-S DE",
        "femoral-neck-fracture": "Femoral neck fracture on radiograph — intracapsular hip fracture in elderly",
        "fibromyalgia": "Arthritic hands in pain",
        "food-allergy": "Food Allergy",
        "fungal-meningitis": "Fungal Meningitis",
        "galactorrhea": "Lactation",
        "gangrene": "Dry gangrene of the foot Wellcome L0062216",
        "gastric-adenocarcinoma": "Gastric signet ring cell carcinoma histopatholgy",
        "gastroenteritis": "Norovirus — leading cause of epidemic viral gastroenteritis with vomiting and watery diarrhea",
        "generalized-anxiety-disorder": "GAD At-A-Glance",
        "gestational-diabetes-mellitus": "Blood glucose monitoring kit used in gestational diabetes management",
        "glomerulonephritis": "Crescentic glomerulonephritis",
        "gout": "Gouty tophus histology with urate crystal deposition",
        "granulomatosis-with-polyangiitis": "Granulomatosis with polyangiitis",
        "graves-disease": "Graves Disease",
        "guillain-barre-syndrome": "Guillain-Barré syndrome — acute ascending symmetric weakness with areflexia",
        "hand-foot-and-mouth-disease": "Characteristic vesicular rash on the sole in hand-foot-and-mouth disease",
        "heart-failure": "Depiction of a person suffering from heart failure",
        "hemophilia": "Hemarthrosis in hemophilia — recurrent joint bleeding from factor VIII or IX deficiency",
        "hemothorax": "Chest-X-ray-Left-sided-hemothorax",
        "herpangina": "Posterior oropharyngeal vesicles and uvular ulceration in herpangina",
        "hirschsprung-disease": "Biliary atresia",
        "hiv-infection": "HIV infection — immunodeficiency virus targeting CD4+ T lymphocytes",
        "hodgkin-lymphoma": "Reed-Sternberg lymphocyte nci-vol-7172-300",
        "holoprosencephaly": "Holoprosencephaly",
        "howell-jolly-body": "Howell-Jolly body in an erythrocyte, relevant to impaired splenic filtration in asplenia",
        "huntington-disease": "Overview of reward structures in the human brain",
        "hydatidiform-mole": "Transvaginal ultrasound of molar pregnancy — classic 'snowstorm' / bunch-of-grapes intrauterine pattern",
        "hydrocephalus": "EnlargedLV Reg",
        "hyper-ige-syndrome": "Person with Job's syndrome",
        "hyperemesis-gravidarum": "Hyperemesis gravidarum — severe pregnancy vomiting with dehydration and ketosis",
        "hyperlipidemia": "Xanthoma histology",
        "hyperosmolar-hyperglycemic-state": "HHS schematic showing severe hyperglycemia, hyperosmolality, dehydration, altered mental status, and minimal ketosis",
        "hyperparathyroidism": "Medical illustration of parathyroid gland enlargement in hyperparathyroidism",
        "hyperprolactinemia": "Lactation",
        "hypertension": "HE pulmonary hypertension artery concentric intimal fibrosis",
        "hypertensive-nephrosclerosis": "Hyaline arteriolosclerosis of a renal arteriole with luminal narrowing in chronic hypertensive kidney disease",
        "hypertensive-retinopathy": "Hypertensiveretinopathy",
        "hyperthyroidism": "Histopathology of Graves' disease - medium mag",
        "hypertrophic-cardiomyopathy": "Hypertrophic obstructive cardiomyopathy",
        "hypertrophic-osteaoarthropathy": "Hypertrophic pulmonary osteoarthropathy — clubbing and periostitis classically associated with lung malignancy",
        "hypogonadism": "The genetic and molecular basis of idiopathic hypogonadotropic hypogonadism",
        "hypopituitarism": "Anterior pituitary hormone axis loss in hypopituitarism",
        "hypothyroidism": "Histopathology of Graves' disease - medium magnification: As shown, Grave's disease shows marked hyperplasia of thyroid follicular cells, generally more so than toxic multinodular goitre, forming papillae into the thyroid follicles, and with scalloping of the peripheral colloid. The cells with round",
        "ibd": "CD colitis",
        "idiopathic-intracranial-hypertension": "Photo demonstrating Papilledema which is a swollen optic disc caused by increased intracranial pressure.",
        "iga-vasculitis": "Palpable purpura on the lower extremity in a child with IgA vasculitis (Henoch-Schönlein purpura)",
        "infective-endocarditis": "Janeway lesion",
        "interstitial-lung-disease": "Interstitial lung disease overview",
        "intestinal-perforation": "Nicholas Senn intestinal perforation",
        "irritable-bowel-syndrome": "celiac-disease",
        "ischemic-optic-neuropathy": "Intraorbitale Strukturen in der Aufsicht von oben auf die geöffnete rechte Orbita.",
        "ischemic-stroke": "Stroke ischemic",
        "juvenile-idiopathic-arthritis": "Quotidian fever pattern in systemic-onset juvenile idiopathic arthritis (Still disease)",
        "juvenile-parkinsonism": "Juvenile parkinsonism — early-onset parkinsonian features with bradykinesia and rigidity",
        "keratoconjunctivitis-sicca": "Dry eye with ocular surface staining/keratitis pattern",
        "klinefelter-syndrome": "47,XXY karyotype — extra X chromosome in Klinefelter syndrome",
        "korsakoff-syndrome": "Cirrhosis of Alcoholic Liver Disease",
        "l4-radiculopathy": "Anterior dermatomes of trunk and limbs",
        "l5-radiculopathy": "MRI of L4–L5 disc extrusion compressing L5 nerve root",
        "lacunar-stroke": "CT showing lacunar strokes",
        "lambert-eaton-myasthenic-syndrome": "Neuromuscular junction synapse — presynaptic VGCC antibodies in Lambert-Eaton reduce acetylcholine release",
        "lichen-planus": "Lichen Planus",
        "lung-cancer": "LungCancer-Xray-01",
        "lyme-disease": "Erythema migrans bull's-eye rash of early localized Lyme disease",
        "lymphadenitis": "Cervical lymphadenitis/scrofula with enlarged neck nodes",
        "lymphogranuloma-venereum": "Poullignac Travaux LGV Caterpillar RM500 2013",
        "lymphoma": "Progressive transformation of germinal centres -1- very low mag",
        "major-depressive-disorder": "A woman suffering from Clinical Depression",
        "malaria": "Ring Forms of Plasmodium falciparum",
        "malrotation": "Ladd bands from intestinal malrotation — peritoneal bands crossing and compressing the duodenum",
        "marfan-syndrome": "Arachnodactyly — long slender fingers characteristic of Marfan syndrome",
        "mastocytosis": "Urticaria pigmentosa lesions on a child",
        "mastoiditis": "Mastoiditis1",
        "meckel-diverticulum": "Meckel's Diverticulum by Technetium-99m Pertechnetate Scan",
        "medullary-thyroid-carcinoma": "High-power micrograph of medullary thyroid carcinoma with amyloid stroma",
        "melanoma": "Dysplastic nevi",
        "men-type-1": "MEN1 three-P pattern: parathyroid, pituitary, and pancreatic endocrine tumors",
        "men-type-2": "MEN2 RET pattern with medullary thyroid carcinoma and pheochromocytoma",
        "men2a": "MEN2A triad of medullary thyroid carcinoma, pheochromocytoma, and hyperparathyroidism",
        "men2b": "MEN2B pattern with aggressive medullary thyroid carcinoma, pheochromocytoma, mucosal neuromas, and marfanoid habitus",
        "meningitis": "Cross-section of cranial meninges — dura mater, arachnoid mater, pia mater, and subarachnoid space",
        "menkes-disease": "Menkes disease4",
        "menopause": "TEWL hot flash plot",
        "merkel-cell-carcinoma": "Merkel cell carcinoma",
        "minimal-change-disease": "Pathology diagram of minimal change disease showing normal light microscopy and podocyte foot-process effacement on electron microscopy",
        "mitochondrial-encephalomyopathy": "Ragged red fibers (subsarcolemmal mitochondrial aggregates) on Gomori trichrome muscle biopsy in mitochondrial myopathy",
        "multiple-endocrine-neoplasia": "MEN overview comparing MEN1 and MEN2 gland/gene patterns",
        "multiple-myeloma": "Skull radiograph showing punched-out lytic lesions characteristic of multiple myeloma",
        "multiple-sclerosis": "Multiple sclerosis — demyelinating plaques in CNS white matter on MRI",
        "myasthenia-gravis": "Myasthenia gravis ptosis before and after edrophonium — fatigable ocular weakness improves transiently",
        "myocardial-infarction": "ST elevation myocardial infarction ECG",
        "narcolepsy": "Even at work someone with narcolepsy falls asleep in the middle of a shift 2013-11-13 16-35",
        "neonatal-respiratory-distress-syndrome": "Neonatal respiratory distress syndrome — hyaline membranes and atelectasis in preterm lung",
        "nephritic-syndrome": "MicroHematuria",
        "nephrolithiasis": "Nephrolithiasis",
        "nephrotic-syndrome": "Nephrotic syndrome — heavy proteinuria with peripheral edema and hypoalbuminemia",
        "neural-tube-defects": "Spina bifida lombare sagittale",
        "non-hodgkin-lymphoma": "Centrocyte, centroblast and follicular dendritic cell in a follicular lymphoma",
        "ocd": "Atopic dermatitis child 2",
        "optic-neuritis": "OpticNeuritisExample",
        "oral-candidiasis": "White fungal plaque on tongue, relevant to oral candidiasis",
        "osteogenesis-imperfecta": "Child with osteogenesis imperfecta showing skeletal deformity from recurrent fractures",
        "osteomyelitis": "Plain radiograph of first-toe osteomyelitis with marked bony involvement",
        "osteoporosis": "Osteoporosis-related height loss and kyphosis schematic",
        "otitis-externa": "OtitisExterna10",
        "otitis-media": "Acute Otitis Media Stage of Resolution",
        "panic-disorder": "Depiction of a person suffering from chest pain",
        "parapneumonic-effusion": "Parapneumonic Effusion",
        "parinaud-syndrome": "Axial midbrain — dorsal midbrain (tectum/pretectum) site of Parinaud syndrome",
        "parkinson-disease": "Parkinson disease — resting tremor, rigidity, bradykinesia, and postural instability",
        "paroxysmal-supraventricular-tachycardia": "Supraventricular Tachycardia",
        "patent-ductus-arteriosus": "Patent Ductus Arteriosus",
        "pellagra": "Casal necklace — broad collar photosensitive dermatitis in niacin (vitamin B₃) deficiency",
        "pemphigus-vulgaris": "Pemphigus vulgaris",
        "peptic-ulcer-disease": "Depiction of a patient suffering from peptic ulcers",
        "pericarditis": "PericarditisMyocarditis",
        "peripheral-artery-disease": "Peripheral artery disease",
        "pheochromocytoma": "CT image showing adrenal pheochromocytoma in a symptomatic patient",
        "piriformis-syndrome": "Piriformis Syndrome",
        "pituitary-apoplexy": "Pituitary MRI sellar mass — substrate for hemorrhagic pituitary apoplexy",
        "pituitary-macroadenoma": "Prolactinoma on MRI",
        "pneumoconiosis": "X-ray of slate pneumoconiosis sufferer's lungs. Wellcome L0029726",
        "pneumonia": "Lobar pneumonia on chest radiograph — airspace consolidation",
        "postherpetic-neuralgia": "Dermatomal herpes zoster rash — acute shingles preceding postherpetic neuralgia",
        "precocious-puberty": "Tanner staging of female breast development — used to assess pubertal progression in precocious puberty",
        "premenstrual-dysphoric-disorder": "period pain menstrual cramps uterus",
        "pressure-ulcer": "Decubitus ulcer stage 4",
        "primary-biliary-cholangitis": "Primary biliary cholangitis — autoimmune destruction of intrahepatic bile ducts",
        "primary-brain-tumor": "Studierfenster Brain Tumor Segmentation",
        "primary-hyperparathyroidism": "Parathyroid adenoma illustration, relevant to primary hyperparathyroidism",
        "primary-sclerosing-cholangitis": "CT of primary sclerosing cholangitis",
        "prolactinoma": "ProlactinomaMRI",
        "pseudodementia": "Historical portrait of a patient with acute melancholia, illustrating depressive cognitive impairment",
        "psoriasis": "Psoriasis",
        "psoriatic-arthritis": "Distal interphalangeal pencil-in-cup deformity on radiograph in psoriatic arthritis",
        "ptsd": "GAD At-A-Glance",
        "pulmonary-embolism": "Pulmnary arterial atherosclerosis-Pulmonary hypertension",
        "pulmonary-hypertension": "Pulmnary arterial atherosclerosis-Pulmonary hypertension",
        "pyelonephritis": "Chronic pyelonephritis slide",
        "pyloric-stenosis": "Hypertrophic pyloric stenosis — thickened pyloric muscle causing gastric outlet obstruction in infant",
        "restrictive-cardiomyopathy": "Fddsv-02-1015545-g001",
        "rheumatoid-arthritis": "Rheumatoid Arthritis",
        "rhinitis": "Runny nose in cat",
        "rickets": "Pediatric hand radiographs with metaphyseal cupping/widening in rickets",
        "rocky-mountain-spotted-fever": "Characteristic spotted rash of Rocky Mountain spotted fever on the wrist and hand",
        "roseola": "Sestamalattia",
        "rotator-cuff-syndrome": "Subacromial Impingement with Supraspinatus Rupture",
        "s1-radiculopathy": "Herniated spinal disc illustration",
        "sarcoidosis": "Sarcoidosis histology skin involvement",
        "scarlet-fever": "Scarlet fever rash",
        "schizoid-personality-disorder": "Word Cloud SzPD",
        "schizophrenia": "Schizophrenia fMRI working memory",
        "schizotypal-personality-disorder": "Signs of StPD 1",
        "scurvy": "Scorbutic gingival hypertrophy and bleeding in vitamin C deficiency",
        "selective-iga-deficiency": "Immunoglobulin isotypes including IgA — relevant to isolated IgA deficiency",
        "serotonin-syndrome": "Synaptic dopamine concentration",
        "serum-sickness": "Urticarial rash pattern that can occur in serum sickness after immune-complex complement activation",
        "sheehan-syndrome": "Postpartum hemorrhage causing pituitary ischemic necrosis with failure to lactate and amenorrhea",
        "shock": "Kolloidale Infusionslösungen",
        "sickle-cell-disease": "Sickle cell disease — hemoglobin S polymerization causing sickled erythrocytes",
        "sideroblastic-anemia": "Ring sideroblast",
        "sinusitis": "Odontogenic sinusitis",
        "sjogren-syndrome": "Sjogren's syndrome",
        "small-cell-lung-cancer": "LungCancer-Xray-01",
        "spherocytosis": "Peripheral smear with spherocytes in hereditary spherocytosis",
        "sporotrichosis": "Feline sporotrichosis 4",
        "stable-angina": "Stable Angina",
        "status-epilepticus": "Prolonged seizure activity — neurologic emergency requiring urgent benzodiazepines",
        "stauffer-syndrome": "Clear cell renal cell carcinoma histology — primary tumor associated with paraneoplastic Stauffer hepatic dysfunction",
        "subarachnoid-hemorrhage": "Subarachnoid hemorrhage CT",
        "subclavian-steal": "The promixal part of left subclavian is blocked on left side so no flow in vertebral and to left arm-blood from right vertebral enters left vertebral and flows back to supply left arm 2013-07-05 17-11",
        "systemic-lupus-erythematosus": "Systemic lupus erythematosus — malar rash and multisystem autoimmune disease",
        "systemic-sclerosis": "Crescentic glomerulonephritis Periodic acid silver methanamine stain",
        "tay-sachs-disease": "Tay-Sachs disease — cherry-red macula from foveal sparing over pale swollen retina in GM2 gangliosidosis",
        "tension-pneumothorax": "Pneumothorax 001 cs",
        "teratoma": "H&E histology of ovarian dermoid cyst (mature cystic teratoma) — well-differentiated tissues from multiple germ layers",
        "tetralogy-of-fallot": "Tetralogy of Fallot-IT",
        "thromboangiitis-obliterans": "55 year old female with advanced Buerger's disease",
        "transient-ischemic-attack": "Illustration of transient ischemic attack",
        "traumatic-brain-injury": "Noncontrast head CT — hemorrhagic contusion and traumatic brain injury",
        "trisomy-13": "Trisomy 13",
        "tropical-sprue": "Tropical Diseases - Plate 9",
        "tuberculoma": "Mycobacterium tuberculosis — acid-fast bacilli associated with tuberculoma and CNS TB",
        "tuberculosis": "Mycobacterium tuberculosis in Ziehl-Neelsen stained smear of sputum",
        "turner-syndrome": "Gray808",
        "type-1-diabetes-mellitus": "Type 1",
        "type-2-diabetes-mellitus": "The role of macrophage polarization in obesity and type 2 diabetes mellitus",
        "typhoid-fever": "Rose spots on the chest in typhoid fever due to Salmonella Typhi",
        "ulcerative-colitis": "Medical diagnosis for the student and practitioner",
        "urinary-tract-infection": "Pyuria",
        "uterine-fibroid": "Uterine fibroid locations: subserosal, intramural, submucosal, pedunculated, and intraligamentous leiomyomas",
        "valvular-heart-disease": "Diseases of the chest and the principles of physical diagnosis",
        "vasculitis": "Vasculitis",
        "venous-stasis-dermatitis": "WIRA-Wiki-GH-012-de-Ulkus-Verlauf-unter-wIRA",
        "venous-thrombosis": "Ultrasound image demonstrating thrombus in the left common femoral vein",
        "ventricular-septal-defect": "Ventricular septal defect-es",
        "viral-meningitis": "Viral Meningitis",
        "vitamin-b12-deficiency-anemia": "This is a peripheral blood smear of a patient with megaloblastic anemia. The red arrow points out a hypersegmented neutrophil. The image was found on a telepathvision site of the US VA: http://www.va.gov/telepathvisn6/megalops.GIF The home page of this collection of images is http://www.va.gov/telep",
        "vitamin-d-toxicity": "Vitamin D toxicity lab pattern with high 25-OH vitamin D, high calcium, suppressed PTH, and renal calcium complications",
        "volvulus": "Mesenteric volvulus — twisted bowel on mesenteric axis with risk of ischemia",
        "wilson-disease": "Kayser-Fleischer ringArrow",
        "x-linked-agammaglobulinemia": "B-cell activation pathway — relevant to BTK-dependent B-cell maturation in X-linked agammaglobulinemia",
        "yellow-fever": "John Horsey sept 24 1821 yellow fever, Allegator",
        "zika-virus-infection": "Alexius Salvador Zika-Virus",
        "zollinger-ellison-syndrome": "ZES endo",
    },
    "ecg": {
        "electrical-alternans": "QRS alternans with tachycardia and low voltage in large pericardial effusion",
        "inferior-stemi": "12-lead ECG with ST elevation in inferior leads II, III, and aVF with reciprocal changes in anterolateral leads",
    },
    "musculoskeletal": {
        "accessory-nerve": "Spinal accessory nerve course",
        "acromion": "Acromion of scapula02",
        "atlantoaxial": "Abyssuridae (10.3390-d17120827) Figure 3",
        "axillary-nerve": "Anatomy of the cat",
        "chorda-tympani": "Tympanic cavity showing chorda tympani course",
        "cn-i": "Olfactory nerve and bulb",
        "cn-ii": "Optic nerve and visual pathway",
        "cn-iii": "Oculomotor nerve and extraocular muscles",
        "cn-iv": "Trochlear nerve and superior oblique",
        "cn-vi": "Abducens nerve and lateral rectus",
        "cn-vii": "Facial nerve course and branches",
        "cn-viii": "Vestibulocochlear nerve",
        "cn-xii": "Hypoglossal nerve and tongue muscles",
        "fontanelle": "Newborn skull showing anterior and posterior fontanelles",
        "glossopharyngeal-nerve": "Glossopharyngeal, vagus, and accessory nerves",
        "humerus": "Right humerus, anterior aspect",
        "infraspinatus": "Gray — musculus infraspinatus",
        "interphalangeal-joint": "DIP, PIP and MCP joints of hand",
        "l1-l2-spinal-level": "Cauda equina and conus medullaris diagram supporting the adult L1-L2 spinal cord termination level",
        "long-thoracic-nerve": "Medial scapular winging from long thoracic nerve palsy",
        "mandibular-division": "Distribution of mandibular division (V3) of trigeminal nerve",
        "maxillary-division": "Distribution of maxillary division (V2) of trigeminal nerve",
        "metacarpophalangeal-joint": "DIP, PIP and MCP joints of hand",
        "ophthalmic-division": "Ophthalmic division (V1) sensory distribution",
        "pelvic-floor": "Internal view of left levator ani, a major pelvic floor muscle",
        "peroneal-nerve-compression": "Foot drop from common peroneal nerve palsy",
        "phrenic-nerve": "Position of esophagus, trachea, heart, and phrenic nerves",
        "piriformis": "Piriformis",
        "recurrent-laryngeal-nerve": "Laryngeal muscles and nerves",
        "rotator-cuff": "Rotator cuff injury",
        "s2-s4-sacral-segments": "Plan of sacral and pudendal plexuses showing S2, S3, and S4 branches",
        "sarcomere": "Sarcomere bands: Z line (boundaries), M line (center), A band (myosin length), I band (actin only), H zone (thick filaments only)",
        "sciatic-nerve-injury": "Anatomy of sciatic nerve and tibial nerve",
        "subluxation": "SubluxationLeftShoulder XRay Ax",
        "subscapularis": "Insertion-of-subscapularis-muscle",
        "suprascapular-nerve": "The anatomy of the horse - a dissection guide",
        "supraspinatus": "Gray — musculus supraspinatus",
        "sympathetic-trunk": "Sympathetic trunk and splanchnic nerves",
        "teres-minor": "Gray — musculus teres minor",
        "trigeminal-nerve": "Trigeminal nerve and divisions",
        "vagus-nerve": "Vagus nerve course in neck and thorax",
    },
    "pathogenesis": {
        "acid-fast-bacteria": "Ziehl-Neelsen stain — red acid-fast bacilli (mycolic acid cell wall) of Mycobacterium tuberculosis",
        "glycation": "Nonenzymatic glycation — HbA1c reflects glucose-bound hemoglobin and chronic hyperglycemia exposure",
        "neuralgia": "Trigeminal nerve distribution — classic site of lancinating neuralgic pain",
        "radiculopathy": "Lumbar disc herniation compressing nerve root — classic cause of radiculopathy",
        "spongiform-vacuole": "Spongiform vacuolation of cerebral cortex — hallmark histology of prion diseases such as Creutzfeldt-Jakob disease",
        "stocking-glove": "Length-dependent peripheral neuropathy — distal symmetric sensory loss in stocking-glove distribution",
        "toxidrome": "Opioid toxidrome — miosis, respiratory depression, and decreased consciousness",
        "vasa-nervorum": "Microvascular ischemia of vasa nervorum — key mechanism in diabetic peripheral neuropathy",
    },
    "symptoms": {
        "acanthosis-nigricans": "Velvety hyperpigmented plaques in the axilla — cutaneous marker of insulin resistance",
        "afferent-pupillary-defect": "The left optic nerve and the optic tracts.",
        "agonal-respirations": "My Heartbeat and Peripheral Oxygen Saturation (SpO2)",
        "akathisia": "Overview of reward structures in the human brain. Dopaminergic neurons are located in the midbrain structures substantia nigra (SNc) and the ventral tegmental area (VTA). Their axons project to the striatum (caudate nucleus, putamen and ventral striatum including nucleus accumbens), the dorsal and v",
        "allodynia": "Pain from normally nonpainful light touch — classic in postherpetic neuralgia",
        "amnesia": "Hippocampus, amygdala, and prefrontal cortex — medial temporal lobe structures essential for declarative memory consolidation",
        "androgenic-alopecia": "Ludwig classification of female pattern hair loss — progressive crown thinning grades I–III",
        "ankle-reflex": "Medical diagnosis for the student and practitioner (1922)",
        "anosmia": "Olfactory nerve (CN I) — fila pass through cribriform plate to olfactory bulb",
        "anxiety": "Generalized anxiety — persistent excessive worry with somatic symptoms",
        "arthralgia": "Arthritic hands in pain",
        "arthritis": "Rheumatoid Arthritis (Swan Neck Deformity) esp",
        "ataxia": "Diseases of the nervous system - a text-book of neurology and psychiatry (1915)",
        "autonomic-dysfunction": "Orthostatic hypotension",
        "autonomic-symptoms": "Horner syndrome diagram — sympathetic and parasympathetic innervation of the eye illustrating cranial autonomic symptoms",
        "babinski-reflex": "PlantarReflex",
        "blueberry-muffin-rash": "Blueberry Muffin Rash",
        "bradykinesia": "Bradykinesia — slowed voluntary movement seen in parkinsonism",
        "brain-fog": "Hypothyroid myxedema — metabolic endocrine cause of slowed mentation and subjective cognitive clouding",
        "brudzinski-sign": "Brudziński sign — passive neck flexion causes involuntary hip/knee flexion in meningitis",
        "bullae": "Bullous pemphigoid — tense subepidermal bullae",
        "calcinosis": "Calcinosis cutis — subcutaneous calcium deposits in systemic sclerosis",
        "cannon-a-waves": "Elevated jugular venous pressure — prominent neck vein pulsations seen with AV dissociation and cannon A waves",
        "cataplexy": "Narcolepsy symptom relationships including cataplexy",
        "central-adiposity": "Waist-to-hip ratio silhouettes — apple (central) vs pear (gynoid) body fat distribution",
        "central-nervous-system-depression": "Glasgow Coma Scale — eye, verbal, and motor scoring to quantify depressed level of consciousness",
        "chest-pain": "Depiction of a person suffering from chest pain",
        "cheyne-stokes-respiration": "Cheyne-Stokes respiration — cyclic crescendo-decrescendo breathing with central apneic pauses",
        "chorea": "Traité des torticolis spasmodiques, spasmes, tics, rythmies du cou, torticolis mental, etc. (1907)",
        "clonic-phase": "Clonic phase of generalized seizure — rhythmic convulsive jerking after tonic stiffening",
        "clubbing": "Finger clubbing — increased convexity of nail bed with loss of Lovibond angle",
        "cold-intolerance": "Histopathology of Graves' disease - medium mag",
        "confluent-rash": "Confluent Rash",
        "confusion": "Delirium tremens — severe alcohol withdrawal with acute confusion, autonomic hyperactivity, and tremor",
        "cotton-wool-spots": "A sample retinal image with cotton wool spots and hemorrhages",
        "cough": "Red Star Cough Cure (back) - 8558298660",
        "cyanosis": "Peripheral cyanosis of the lower extremity due to ischemia",
        "cyclopia": "Otocephaly and cyclopia",
        "dactylitis": "Painful swelling of the hands — dactylitis in sickle cell disease",
        "decerebrate-posturing": "Decerebrate posture — bilateral arm and leg extension; brainstem injury at or below red nucleus",
        "decorticate-posturing": "Decorticate posture — arms flexed toward core, legs extended; lesion above red nucleus",
        "decreased-skin-turgor": "LowSkinTurgor",
        "diplopia": "Diplopia",
        "drusen": "Peripheral Drusen",
        "dry-mucous-membranes": "Xerostomia - Dry Mouth",
        "dysesthesia": "Unpleasant burning or abnormal sensation — neuropathic symptom in peripheral neuropathy",
        "dysmorphic-facies": "Illustration of characteristic facial features in Down syndrome (trisomy 21)",
        "dystonia": "Traité des torticolis spasmodiques, spasmes, tics, rythmies du cou, torticolis mental, etc. (1907)",
        "dysuria": "Dysuria — painful or burning urination suggesting lower urinary tract pathology",
        "easy-fatigability": "Easy Fatigability",
        "ecchymosis": "Periorbital ecchymosis — non-blanching blood extravasation into skin",
        "edema": "Depiction of different types of Edema",
        "enuresis": "Nocturnal enuresis — involuntary bedwetting during sleep in children",
        "erythema": "Sharply demarcated erythema of recurrent erysipelas (vasodilation with infection)",
        "excoriated": "Inflamed atopic dermatitis on infant ankle with excoriations from scratching",
        "exertional-dyspnea": "Exertional Dyspnea",
        "facial-cleft": "Holoprosencephaly",
        "facial-palsy": "Bells Palsy CDC",
        "fasciculation": "Visible muscle fasciculation in neuromuscular disease",
        "fecal-impaction": "Fecal impaction — hardened stool retained in rectum causing obstruction",
        "fecaloma": "Fecaloma — large inspissated fecal mass in colon or rectum",
        "fever": "Symptoms of coronavirus disease 2019 2.0",
        "formication": "Sensation of insects crawling on skin — cocaine intoxication or withdrawal",
        "generalized-tonic-clonic-seizure": "Spike-waves",
        "goiter": "Diffuse thyroid hyperplasia gross pathology, relevant to goiter",
        "headache": "Migraine",
        "hematochezia": "Hämatochezie Dezember 2021",
        "hematuria": "HematuriaTrauma",
        "hemianopsia": "Left-homonymous-hemianopia",
        "hemiplegia": "Hemiatrophy and hemiplegia of the left side of the tongue Wellcome L0062734",
        "hemoptysis": "Krev na gázových čtvercích",
        "hirsutism": "Severe hirsutism in a 17-year-old female with polycystic ovary syndrome",
        "hyperactive-bowel-sounds": "Hyperactive Bowel Sounds",
        "hypercapnia": "Arterial blood gas analysis — elevated PaCO₂ reflects hypoventilation and CO₂ retention",
        "hyperpigmentation": "Head of James Wooten, both capsules diseased. Image shows characteristic skin hyperpigmentation in Addison's disease General Collections Keywords: Thomas Addison",
        "hypotelorism": "Sonography of holoprosencephaly in an 8 month old",
        "hypotonia": "Hypotonic infant — reduced muscle tone with floppy posture on handling",
        "hypoxemia": "My Heartbeat and Peripheral Oxygen Saturation",
        "impaired-wound-healing": "Example of the healing process of a chronic venous stasis ulcer of the lower leg under therapy with wIRA (Study Tromsø/Hillerød). (28 times 30 minutes irradiation with water-filtered infrared-A (wIRA) and visible light (VIS) within 52 days = approximately 7 weeks) with normal view, thermographic ima",
        "indurated-plaque": "Indurated Plaque",
        "jaundice": "Scleral icterus — yellow discoloration of the conjunctiva from hyperbilirubinemia",
        "kernig-sign": "Kernig sign — resistance to knee extension with hip flexed suggests meningeal irritation",
        "koplik-spots": "Koplik spots, measles 6111 lores",
        "lacrimation": "Allergic conjunctivitis with conjunctival injection and tearing",
        "lhermitte-sign": "MULTIPLE SCLEROSIS",
        "lichenification": "Clinical features of atopic dermatitis in English",
        "lymphadenopathy": "Cervical lymphadenopathy — enlarged palpable anterior cervical lymph nodes",
        "maculopapular-rash": "Maculopapular eruption — coalescent erythematous macules and papules",
        "melena": "Melena Bleeding DU",
        "miotic": "Example of Horner's syndrome in a cat",
        "morning-stiffness": "Morning Stiffness",
        "mydriasis": "Mydriasis due to LSD usage",
        "myelopathy": "Cervical Spine MRI",
        "myoclonus": "Sudden shock-like myoclonic jerk — classic in Creutzfeldt-Jakob disease and metabolic encephalopathy",
        "nausea": "Fphar-09-00913-g005",
        "neuropathic-pain": "Diabetic Neuropathy Device pic",
        "neutropenia": "A blood smear with neutropenia in United States",
        "nodular-lymphangitis": "Sporotrichosis by the fungus Sporothrix schenckii",
        "nuchal-rigidity": "Nuchal rigidity — resistance to passive neck flexion in meningeal irritation",
        "oligomenorrhea": "Estradiol, progesterone, LH, and FSH across the normal menstrual cycle — disrupted in anovulatory oligomenorrhea",
        "orthopnea": "Orthopnea",
        "orthostatic-hypotension": "The Faint label QS:Lde,\"Die Ohnmacht\"label QS:Len,\"The Faint\"",
        "otorrhea": "Battle sign — retroauricular ecchymosis associated with basilar skull fracture and possible CSF otorrhea",
        "pallor": "Hand pallor comparison in severe anemia",
        "palpitations": "ECG Atrial Fibrillation 98 bpm",
        "papilledema": "Papilledema",
        "papule": "Violaceous flat-topped papules of lichen planus on the shins (solid, ≤1 cm)",
        "paresis": "Hemiatrophy and hemiplegia of the left side of the tongue Wellcome L0062734",
        "periorbital-pain": "Cluster headache symptom diagram — unilateral periorbital pain distribution with autonomic features",
        "peripheral-edema": "Pitting Edema2008",
        "petechiae": "Non-blanching petechiae on the lower limb from leukocytoclastic vasculitis",
        "photophobia": "Iritis",
        "pinpoint-pupils": "Miosis (narrow pupil) vs mydriasis — pinpoint pupils are extreme miosis seen in opioid toxicity and pontine lesions",
        "plaque": "Erythematous plaque of psoriasis with silvery scale (solid, >1 cm)",
        "pleuritic-chest-pain": "Pleuritic Chest Pain",
        "pnd": "Pnd",
        "polydipsia": "Polydipsia — excessive thirst, often accompanying polyuria in diabetes mellitus",
        "polyuria": "Polyuria — large-volume urine output from osmotic or water diuresis",
        "polyuria-polydipsia": "Polyuria and polydipsia — classic presentation of uncontrolled diabetes mellitus",
        "presyncope": "Pietro Longhi 027",
        "primitive-nose": "Congenital absence of nose",
        "prodromal": "Koplik spots, measles 6111 lores",
        "proptosis": "Proptosis and lid retraction in Graves disease",
        "pruritus": "Photographic atlas of the diseases of the skin; a series of ninety-six plates, comprising nearly two hundred illustrations, with descriptive text, and a treatise on cutaneous therapeutics",
        "psychosis": "Atypical Psychosis Genetic Map",
        "ptosis": "Myasthenia gravis — partial ptosis before and after edrophonium",
        "pulmonary-edema": "Respiratory system - Pulmonary edema -- Smart-Servier",
        "purpura": "Petechiae and purpura on the lower limb from medication-induced leukocytoclastic vasculitis",
        "raccoon-eyes": "Bilateral periorbital ecchymosis — raccoon eyes in basilar skull fracture",
        "raynaud-phenomenon": "Raynaud syndrome on female airman's hand",
        "rhinorrhea": "Illustration of runny nose (rhinorrhea) as a respiratory symptom",
        "sciatica": "Sciatica — radicular leg pain along L4–S1 distribution from lumbosacral nerve root compression",
        "sclerodactyly": "Calcinosis of CREST syndrome",
        "shortness-of-breath": "SymptomsFeverCoughSOB",
        "skin-thickening": "Skin thickening — indurated dermal sclerosis as in systemic sclerosis",
        "sleep-paralysis": "Fuseli's The Nightmare — classic artistic depiction of sleep paralysis with hypnagogic hallucination",
        "slurred-speech": "Watercolour drawing showing hemiatrophy and hemiplegia of the left side of the tongue of a man, aged fifty, an out-patient at the Hospital, caused by a malignant tumour situated deeply in the neck (left side). The sense of taste was not affected on either side, nor was there any other paralysis.",
        "spastic-paresis": "Illustration showing the most common types of ALS and how the upper and lower motor neurons may be affected in each area. On the top row, most classical ALS is either \"spinal onset\" in which case the arms or legs are affected first, or \"bulbar onset\" in which case the mouth and throat region is affe",
        "syncope": "Pietro Longhi 027",
        "tearing-chest-pain": "Tearing Chest Pain",
        "telangiectasia": "Spider angioma — central arteriole with radiating telangiectasias",
        "thrombocytopenia": "Oral petechiae",
        "tonic-phase": "Tonic phase of generalized seizure — sustained bilateral muscle stiffening before clonic jerking",
        "trousseau-sign": "Carpopedal spasm pattern of Trousseau sign of latent tetany",
        "upward-gaze-palsy": "Dorsal midbrain and vertical gaze centers",
        "vesicle": "Herpes labialis vesicles — fluid-filled epidermal lesions <1 cm",
        "virilization": "Clitoromegaly in congenital adrenal hyperplasia — external manifestation of androgen excess",
        "vomiting": "Emesis",
        "vomitus": "Emesis (Emesis Cerea), the Pantanal, Brazil",
        "watery-diarrhea": "Cholera patient stool",
        "wheezing": "UOTW 48 - Ultrasound of the Week 5",
        "xerosis": "Dry, scaling skin over the knuckles consistent with xerosis",
        "xerostomia": "Dry mouth illustration showing reduced salivary moisture",
    },
}


def camel_case(name: str) -> str:
    parts = re.split(r"[-_]", name)
    return parts[0] + "".join(p.capitalize() for p in parts[1:])


def list_images(category: str) -> list[tuple[str, str, str]]:
    """Return (entry_id, rel_path, import_var) for each image."""
    folder = os.path.join(IMAGES, category)
    if not os.path.isdir(folder):
        return []
    items: list[tuple[str, str, str]] = []
    for fname in sorted(os.listdir(folder)):
        if fname == "SOURCES.txt" or fname.startswith("."):
            continue
        if not re.search(r"\.(jpe?g|png|svg)$", fname, re.I):
            continue
        rel = f"{category}/{fname}"
        entry_id = ID_ALIASES.get(rel, os.path.splitext(fname)[0])
        var = camel_case(os.path.splitext(fname)[0])
        items.append((entry_id, f"../media/images/{category}/{fname}?url", var))
    for entry_id, var_name in IMAGE_ID_ALIASES.get(category, {}).items():
        # reuse existing image file via shared import variable
        fname = f"{entry_id.replace('petechiae', 'purpura')}.jpg"
        if entry_id == "petechiae":
            fname = "purpura.jpg"
        items.append((entry_id, f"../media/images/{category}/{fname}?url", var_name))
    return items


def load_manifest() -> dict[str, dict[str, str]]:
    if os.path.exists(MANIFEST):
        with open(MANIFEST) as f:
            return json.load(f)
    return {}


def default_caption(category: str, entry_id: str) -> str:
    preserved = PRESERVE_CAPTIONS.get(category, {}).get(entry_id)
    if preserved:
        return preserved
    name = entry_id.replace("-", " ")
    return f"Clinical or pathologic image illustrating {name}"


def default_attribution(manifest: dict, rel_path: str) -> tuple[str, str]:
    rel = rel_path.replace("../media/images/", "").split("?")[0]
    m = manifest.get(rel)
    if m:
        title = m.get("title", "").replace("File:", "")
        return f"Wikimedia Commons ({title})", m["page"]
    fname = os.path.basename(rel)
    page = f"https://commons.wikimedia.org/wiki/File:{urllib.parse.quote(fname.replace(' ', '_'))}"
    return "Wikimedia Commons", page


def generate_conditions_media() -> str:
    manifest = load_manifest()
    images = list_images("conditions")
    lines = [
        'import type { MediaAttribution } from "./media";',
        'import type { ConditionEntry } from "./conditions";',
        "",
    ]
    for _, path, var in images:
        lines.append(f'import {var} from "{path}";')
    ids = [eid for eid, _, _ in images]
    lines += [
        "",
        "export type ConditionImageId = Extract<",
        '  ConditionEntry["id"],',
        "  | " + '\n  | '.join(f'"{i}"' for i in ids),
        ">;",
        "",
        "function extensionAssetUrl(path: string): string {",
        "  return chrome.runtime.getURL(path);",
        "}",
        "",
        "/** See src/media/images/conditions/SOURCES.txt */",
        "export const CONDITION_IMAGES: Partial<Record<ConditionImageId, string>> = {",
    ]
    for eid, _, var in images:
        lines.append(f'  "{eid}": extensionAssetUrl({var}),')
    lines.append("};")
    lines += [
        "",
        "export const CONDITION_IMAGE_ATTRIBUTIONS: Partial<",
        "  Record<ConditionImageId, MediaAttribution>",
        "> = {",
    ]
    for eid, path, _ in images:
        rel = path.replace("../media/images/", "").split("?")[0]
        label, url = default_attribution(manifest, rel)
        lines.append(f'  "{eid}": {{ label: "{label}", url: "{url}" }},')
    lines.append("};")
    lines += [
        "",
        "export const CONDITION_IMAGE_CAPTIONS: Partial<",
        "  Record<ConditionImageId, MediaAttribution>",
        "> = {",
    ]
    for eid, _, _ in images:
        cap = default_caption("conditions", eid).replace('"', '\\"')
        lines.append(f'  "{eid}": "{cap}",')
    lines.append("};")
    # fix caption type
    content = "\n".join(lines).replace(
        "Record<ConditionImageId, MediaAttribution>", "Record<ConditionImageId, string>", 1
    )
    content += """

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
"""
    return content


def generate_symptom_media() -> str:
    manifest = load_manifest()
    images = list_images("symptoms")
    seen_ids: set[str] = set()
    seen_vars: set[str] = set()
    unique: list[tuple[str, str, str]] = []
    for item in images:
        if item[0] in seen_ids:
            continue
        seen_ids.add(item[0])
        unique.append(item)
    images = unique
    lines = [
        'import type { MediaAttribution } from "./media";',
        'import type { SymptomEntry } from "./symptoms";',
        "",
    ]
    for _, path, var in images:
        if var in seen_vars:
            continue
        seen_vars.add(var)
        lines.append(f'import {var} from "{path}";')
    ids = [eid for eid, _, _ in images]
    lines += [
        "",
        "export type SymptomImageId = Extract<",
        '  SymptomEntry["id"],',
        "  | " + '\n  | '.join(f'"{i}"' for i in ids),
        ">;",
        "",
        "function extensionAssetUrl(path: string): string {",
        "  return chrome.runtime.getURL(path);",
        "}",
        "",
        "/** See src/media/images/symptoms/SOURCES.txt */",
        "export const SYMPTOM_IMAGES: Partial<Record<SymptomImageId, string>> = {",
    ]
    for eid, _, var in images:
        lines.append(f'  "{eid}": extensionAssetUrl({var}),')
    lines.append("};")
    lines += [
        "",
        "export const SYMPTOM_IMAGE_ATTRIBUTIONS: Partial<",
        "  Record<SymptomImageId, MediaAttribution>",
        "> = {",
    ]
    for eid, path, _ in images:
        rel = path.replace("../media/images/", "").split("?")[0]
        if eid == "petechiae":
            rel = "symptoms/purpura.jpg"
        label, url = default_attribution(manifest, rel)
        lines.append(f'  "{eid}": {{ label: "{label}", url: "{url}" }},')
    lines.append("};")
    lines += [
        "",
        "export const SYMPTOM_IMAGE_CAPTIONS: Partial<Record<SymptomImageId, string>> = {",
    ]
    for eid, _, _ in images:
        cap = default_caption("symptoms", eid).replace('"', '\\"')
        lines.append(f'  "{eid}": "{cap}",')
    lines.append("};")
    content = "\n".join(lines)
    content += """

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
"""
    return content


def generate_category_media(
    category: str,
    entry_type: str,
    entry_import: str,
    prefix: str,
    func_suffix: str,
) -> str:
    manifest = load_manifest()
    images = list_images(category)
    lines = [
        f'import type {{ MediaAttribution }} from "./media";',
        f'import type {{ {entry_type} }} from "./{entry_import}";',
        "",
    ]
    for _, path, var in images:
        lines.append(f'import {var} from "{path}";')
    ids = [eid for eid, _, _ in images]
    lines += [
        "",
        f"export type {prefix}ImageId = Extract<",
        f'  {entry_type}["id"],',
        "  | " + '\n  | '.join(f'"{i}"' for i in ids),
        ">;",
        "",
        "function extensionAssetUrl(path: string): string {",
        "  return chrome.runtime.getURL(path);",
        "}",
        "",
        f"/** See src/media/images/{category}/SOURCES.txt */",
        f"export const {prefix}_IMAGES: Partial<Record<{prefix}ImageId, string>> = {{",
    ]
    for eid, _, var in images:
        lines.append(f'  "{eid}": extensionAssetUrl({var}),')
    lines.append("};")
    lines += [
        "",
        f"export const {prefix}_IMAGE_ATTRIBUTIONS: Partial<",
        f"  Record<{prefix}ImageId, MediaAttribution>",
        "> = {",
    ]
    for eid, path, _ in images:
        rel = path.replace("../media/images/", "").split("?")[0]
        label, url = default_attribution(manifest, rel)
        lines.append(f'  "{eid}": {{ label: "{label}", url: "{url}" }},')
    lines.append("};")
    lines += [
        "",
        f"export const {prefix}_IMAGE_CAPTIONS: Partial<Record<{prefix}ImageId, string>> = {{",
    ]
    for eid, _, _ in images:
        cap = default_caption(category, eid).replace('"', '\\"')
        lines.append(f'  "{eid}": "{cap}",')
    lines.append("};")
    content = "\n".join(lines)
    content += f"""

export function get{func_suffix}ImageForId(id: string): string | undefined {{
  return {prefix}_IMAGES[id as {prefix}ImageId];
}}

export function get{func_suffix}ImageAttributionForId(
  id: string,
): MediaAttribution | undefined {{
  return {prefix}_IMAGE_ATTRIBUTIONS[id as {prefix}ImageId];
}}

export function get{func_suffix}ImageCaptionForId(id: string): string | undefined {{
  return {prefix}_IMAGE_CAPTIONS[id as {prefix}ImageId];
}}
"""
    return content


def main() -> None:
    with open(os.path.join(ROOT, "src/data/conditionsMedia.ts"), "w") as f:
        f.write(generate_conditions_media())
    with open(os.path.join(ROOT, "src/data/symptomMedia.ts"), "w") as f:
        f.write(generate_symptom_media())
    with open(os.path.join(ROOT, "src/data/cellsMedia.ts"), "w") as f:
        f.write(
            generate_category_media(
                "cells", "CellEntry", "cells", "CELL", "Cell"
            )
        )
    with open(os.path.join(ROOT, "src/data/musculoskeletalMedia.ts"), "w") as f:
        f.write(
            generate_category_media(
                "musculoskeletal",
                "MusculoskeletalEntry",
                "musculoskeletal",
                "MUSCULOSKELETAL",
                "Musculoskeletal",
            )
        )
    print("Generated media mapping files")


if __name__ == "__main__":
    main()
