export interface LabValueEntry {
  id: string;
  name: string;
  aliases: string[];
  measures: string;
  normalRange: string;
  increasedCauses: string[];
  decreasedCauses: string[];
  boardsPearls: string[];
  pairWith?: string[];
}

export const LAB_VALUES: LabValueEntry[] = [
  {
    id: "hematocrit",
    name: "Hematocrit",
    aliases: ["hematocrit", "hct"],
    measures: "Percentage of blood volume occupied by red blood cells.",
    normalRange: "~41–50% (M), 36–44% (F)",
    increasedCauses: [
      "Polycythemia vera",
      "Dehydration / hemoconcentration",
      "Chronic hypoxia (COPD, high altitude)",
      "Erythropoietin use or secretion",
    ],
    decreasedCauses: [
      "Anemia (any cause)",
      "Pregnancy",
      "Hypervolemia / fluid overload",
      "Acute blood loss",
    ],
    boardsPearls: [
      "Hct ≈ 3 × hemoglobin",
      "Use MCV to classify anemia after confirming low Hct/Hgb",
      "Spurious ↑ with dehydration — interpret with volume status",
    ],
    pairWith: [
      "Low MCV + low Hct → microcytic anemia",
      "High Hct + ↑ JVP with chronic lung disease → secondary polycythemia",
    ],
  },
  {
    id: "hemoglobin",
    name: "Hemoglobin",
    aliases: ["hemoglobin", "hgb", "hb"],
    measures: "Oxygen-carrying protein concentration in whole blood.",
    normalRange: "~13.5–17.5 g/dL (M), 12.0–15.5 g/dL (F)",
    increasedCauses: [
      "Polycythemia vera",
      "Dehydration (relative)",
      "Chronic hypoxia",
    ],
    decreasedCauses: [
      "Anemia",
      "Blood loss",
      "Hemolysis",
      "Bone marrow suppression",
    ],
    boardsPearls: [
      "Classify anemia by MCV → microcytic (iron deficiency, thalassemia), macrocytic (B12/folate), or use reticulocyte count for hemolysis vs production defect",
      "Peds: age-specific normals — infants have higher physiologic Hgb",
    ],
    pairWith: [
      "Low Hgb + high reticulocyte count → hemolysis or bleeding with marrow response",
      "Low Hgb + low reticulocytes → production problem",
    ],
  },
  {
    id: "mcv",
    name: "MCV",
    aliases: ["mcv", "mean corpuscular volume"],
    measures: "Average volume of red blood cells; classifies anemia morphology.",
    normalRange: "~80–100 fL",
    increasedCauses: [
      "Macrocytic anemia: B12 or folate deficiency",
      "Alcohol use, liver disease",
      "Reticulocytosis (larger young RBCs)",
      "Hypothyroidism",
      "Myelodysplastic syndromes",
    ],
    decreasedCauses: [
      "Iron deficiency anemia",
      "Thalassemia",
      "Anemia of chronic disease (sometimes)",
      "Lead poisoning",
    ],
    boardsPearls: [
      "High MCV + hypersegmented neutrophils → B12/folate deficiency",
      "Low MCV + ↑ RBC count → thalassemia trait",
      "RDW helps separate iron deficiency (↑ RDW) from thalassemia (normal RDW)",
    ],
  },
  {
    id: "platelets",
    name: "Platelet Count",
    aliases: ["platelet count", "platelets", "plt"],
    measures: "Number of platelets per volume of blood (hemostasis).",
    normalRange: "~150,000–400,000 /µL",
    increasedCauses: [
      "Reactive thrombocytosis (inflammation, iron deficiency, surgery)",
      "Essential thrombocythemia",
      "Splenectomy",
    ],
    decreasedCauses: [
      "ITP",
      "TTP/HUS",
      "DIC",
      "Bone marrow failure / infiltration",
      "Heparin-induced thrombocytopenia",
      "Hypersplenism",
    ],
    boardsPearls: [
      "TTP pentad: fever, thrombocytopenia, MAHA, neuro symptoms, renal dysfunction",
      "HIT: thrombocytopenia 5–10 days after heparin + thrombosis (anti-PF4 antibodies)",
      "Peds: ITP after viral illness — often self-limited",
    ],
    pairWith: [
      "Low platelets + schistocytes → microangiopathic hemolysis (TTP/HUS/DIC)",
      "Low platelets + prolonged bleeding but normal PT/PTT → platelet problem",
    ],
  },
  {
    id: "wbc",
    name: "WBC Count",
    aliases: ["wbc count", "white blood cell count", "leukocyte count"],
    measures: "Total white blood cell concentration in blood.",
    normalRange: "~4,500–11,000 /µL",
    increasedCauses: [
      "Bacterial infection",
      "Leukemoid reaction",
      "Leukemia / lymphoma",
      "Steroids, epinephrine (demargination)",
      "Tissue necrosis (MI, burns)",
    ],
    decreasedCauses: [
      "Viral infection (including HIV)",
      "Chemotherapy / radiation",
      "Aplastic anemia",
      "Severe sepsis (late)",
      "Autoimmune neutropenia",
    ],
    boardsPearls: [
      "Left shift with bandemia → bacterial infection",
      "Atypical lymphocytes → EBV/CMV",
      "Peds: higher normal WBC in neonates/infants",
    ],
    pairWith: [
      "↑ WBC + left shift → bacterial infection",
      "↓ WBC + fever on chemotherapy → febrile neutropenia (high-risk for bacterial sepsis)",
    ],
  },
  {
    id: "eosinophilia",
    name: "Eosinophilia",
    aliases: [
      "eosinophilia",
      "elevated eosinophils",
      "increased eosinophils",
      "high eosinophil count",
      "peripheral eosinophilia",
    ],
    measures:
      "Elevated eosinophil count in peripheral blood; absolute eosinophilia is typically >500 /µL or >5% of WBC.",
    normalRange: "~0–500 /µL (0–5% of WBC)",
    increasedCauses: [
      "Parasitic infection (helminths — strongest association)",
      "Atopy: asthma, allergic rhinitis, eczema",
      "Drug hypersensitivity (DRESS, sulfonamides, NSAIDs)",
      "EGPA (Churg-Strauss) and hypereosinophilic syndrome",
      "Addison disease (loss of cortisol-mediated eosinophil suppression)",
      "Malignancy (Hodgkin lymphoma, eosinophilic leukemia)",
      "Connective tissue disease and vasculitis",
    ],
    decreasedCauses: [
      "Corticosteroids (physiologic and therapeutic)",
      "Cushing syndrome / hypercortisolism",
      "Acute stress and acute bacterial infection (eosinopenia)",
    ],
    boardsPearls: [
      "NEVER PASS mnemonic for eosinophilia causes: Neoplasia, Environmental (drugs), Vasculitis, Infections (parasites), Skin, Others (Addison, adrenal insufficiency)",
      "Marked eosinophilia + travel or raw fish → parasitic infection (strongyloidiasis, toxocariasis)",
      "Addison disease: eosinophilia + hyponatremia + hyperkalemia + hyperpigmentation",
      "EGPA triad: asthma + eosinophilia + vasculitis; p-ANCA (MPO) in many cases",
      "Steroids rapidly ↓ eosinophils — eosinopenia expected on chronic steroid therapy",
    ],
    pairWith: [
      "Asthma + neuropathy + sinus disease → EGPA",
      "Eosinophilia + adrenal crisis → primary adrenal insufficiency",
      "Eosinophilia + hepatomegaly + travel history → parasitic infection",
      "Peds: atopy and parasitic infection are top causes; exclude helminths before diagnosing primary hypereosinophilic disorder",
    ],
  },
  {
    id: "sodium",
    name: "Sodium",
    aliases: ["sodium", "serum sodium", "na+"],
    measures: "Primary extracellular cation; reflects water balance more than total body Na⁺.",
    normalRange: "~136–145 mEq/L",
    increasedCauses: [
      "Hypertonic fluid loss (diabetes insipidus, osmotic diuresis)",
      "Excess saline / hypertonic solutions",
      "SIADH with relative excess water (often euvolemic hypoNa)",
    ],
    decreasedCauses: [
      "SIADH",
      "Heart failure, cirrhosis, nephrotic syndrome (hypervolemic hypoNa)",
      "Diuretics",
      "Adrenal insufficiency",
      "Psychogenic polydipsia",
    ],
    boardsPearls: [
      "Rapid correction of chronic hyponatremia → osmotic demyelination syndrome",
      "Hypernatremia = water deficit; think DI or inadequate access to water",
      "Peds: same principles; infants vulnerable with GI losses",
    ],
    pairWith: [
      "Low Na⁺ + euvolemia + concentrated urine → SIADH",
      "High Na⁺ + polyuria → diabetes insipidus",
    ],
  },
  {
    id: "potassium",
    name: "Potassium",
    aliases: ["potassium", "serum potassium", "k+"],
    measures: "Primary intracellular cation; critical for membrane potential and arrhythmia risk.",
    normalRange: "~3.5–5.0 mEq/L",
    increasedCauses: [
      "Renal failure",
      "K⁺-sparing diuretics (spironolactone, amiloride)",
      "ACE inhibitors / ARBs",
      "Rhabdomyolysis, tumor lysis, hemolysis",
      "Acidosis (H⁺ shifts K⁺ out of cells)",
      "Adrenal insufficiency",
    ],
    decreasedCauses: [
      "Diuretics, vomiting, diarrhea",
      "Hyperaldosteronism",
      "Insulin therapy / refeeding",
      "Alkalosis",
      "Hypomagnesemia (refractory hypokalemia)",
    ],
    boardsPearls: [
      "Peaked T waves → hyperkalemia; sine wave → imminent arrest",
      "Refractory hypokalemia — check Mg²⁺ (hypomagnesemia impairs K⁺ reabsorption)",
      "Pseudohyperkalemia with hemolyzed sample",
    ],
    pairWith: [
      "↑ K⁺ + peaked T waves → membrane hyperpolarization failure; insulin/glucose shifts K⁺ intracellularly",
      "↓ K⁺ + hypertension → hyperaldosteronism",
    ],
  },
  {
    id: "bicarbonate",
    name: "Bicarbonate",
    aliases: ["bicarbonate", "hco3", "serum bicarbonate", "co2 content"],
    measures: "Serum HCO₃⁻; metabolic component of acid-base status.",
    normalRange: "~22–28 mEq/L",
    increasedCauses: [
      "Metabolic alkalosis (vomiting, diuretics, hyperaldosteronism)",
      "Compensation for chronic respiratory acidosis",
    ],
    decreasedCauses: [
      "Metabolic acidosis (MUDPILES: methanol, uremia, DKA, propylene glycol, INH/iron, lactic acidosis, ethylene glycol, salicylates)",
      "Diarrhea (non-anion gap loss of HCO₃⁻)",
      "Renal tubular acidosis",
    ],
    boardsPearls: [
      "Calculate anion gap in metabolic acidosis",
      "Winter formula for respiratory compensation",
      "Normal anion gap acidosis: diarrhea, RTA, ureterosigmoidostomy",
    ],
    pairWith: [
      "Low HCO₃⁻ + anion gap ↑ → DKA, lactic acidosis, toxic alcohols",
      "Low HCO₃⁻ + normal gap → diarrhea or RTA",
    ],
  },
  {
    id: "bun",
    name: "BUN",
    aliases: ["bun", "blood urea nitrogen"],
    measures: "Nitrogen component of urea; marker of nitrogen waste and renal function.",
    normalRange: "~7–20 mg/dL",
    increasedCauses: [
      "Prerenal azotemia (hypovolemia, heart failure)",
      "Intrinsic renal disease",
      "Postrenal obstruction",
      "High protein intake, GI bleed, catabolic states",
      "Corticosteroids",
    ],
    decreasedCauses: [
      "Severe liver disease (↓ urea synthesis)",
      "Malnutrition / low protein intake",
      "Overhydration",
    ],
    boardsPearls: [
      "BUN:Cr >20:1 suggests prerenal azotemia",
      "BUN rises with GI bleeding (digested blood protein)",
      "Interpret with creatinine and volume status",
    ],
    pairWith: [
      "↑ BUN + ↑ Cr + FeNa <1% → prerenal",
      "↑ BUN out of proportion to Cr → GI bleed or catabolism",
    ],
  },
  {
    id: "creatinine",
    name: "Creatinine",
    aliases: ["creatinine", "serum creatinine"],
    measures: "Muscle metabolism byproduct cleared by kidneys; estimates GFR.",
    normalRange: "~0.7–1.3 mg/dL (varies by muscle mass/sex)",
    increasedCauses: [
      "Acute or chronic kidney injury",
      "Urinary obstruction",
      "Rhabdomyolysis (ATN)",
      "Drugs (NSAIDs, ACEi in bilateral RAS)",
    ],
    decreasedCauses: [
      "Low muscle mass (elderly, malnutrition, amputation)",
      "Pregnancy (hemodilution)",
    ],
    boardsPearls: [
      "Creatinine inversely reflects GFR; rises late relative to actual kidney injury",
      "Creatinine may be normal early in AKI — lags behind actual GFR decline",
      "Peds: creatinine is low at birth, rises with muscle mass",
    ],
    pairWith: [
      "↑ Cr + muddy brown casts → ATN",
      "↑ Cr + flank pain → obstruction or pyelonephritis",
    ],
  },
  {
    id: "glucose",
    name: "Glucose",
    aliases: ["glucose", "serum glucose", "blood glucose", "fasting glucose"],
    measures: "Primary circulating sugar; fuel source and diabetes marker.",
    normalRange: "Fasting ~70–99 mg/dL",
    increasedCauses: [
      "Diabetes mellitus",
      "DKA / HHS",
      "Cushing syndrome, acromegaly",
      "Pancreatitis (early stress hyperglycemia)",
      "Medications (steroids, thiazides)",
    ],
    decreasedCauses: [
      "Insulin or sulfonylurea excess",
      "Insulinoma",
      "Adrenal insufficiency",
      "Severe liver failure",
      "Sepsis (variable)",
    ],
    boardsPearls: [
      "DKA: hyperglycemia + anion gap acidosis + ketones",
      "HHS: very high glucose without significant ketosis",
      "Peds: neonatal hypoglycemia — brain injury risk",
    ],
    pairWith: [
      "High glucose + ketones + Kussmaul breathing → DKA",
      "Low glucose + neuro symptoms → Whipple triad (insulinoma)",
    ],
  },
  {
    id: "albumin",
    name: "Serum Albumin",
    aliases: [
      "serum albumin",
      "serum albumin concentration",
      "albumin",
    ],
    measures:
      "Major plasma protein maintaining oncotic pressure; binds calcium and many drugs.",
    normalRange: "~3.5–5.5 g/dL",
    increasedCauses: ["Dehydration / hemoconcentration (relative)"],
    decreasedCauses: [
      "Liver disease (↓ synthesis)",
      "Nephrotic syndrome (urinary loss)",
      "Malnutrition / protein-losing enteropathy",
      "Inflammation (negative acute-phase reactant)",
      "Sepsis, burns",
    ],
    boardsPearls: [
      "Low albumin → peripheral edema, ascites",
      "Corrected Ca²⁺ = measured Ca + 0.8 × (4 − albumin)",
      "Low albumin lowers total calcium but ionized Ca may be normal",
    ],
    pairWith: [
      "Low albumin + heavy proteinuria → nephrotic syndrome",
      "Low albumin + ascites → cirrhosis",
    ],
  },
  {
    id: "ast",
    name: "AST",
    aliases: ["ast", "aspartate aminotransferase", "sgot"],
    measures: "Enzyme in liver and muscle; released with hepatocellular or muscle injury.",
    normalRange: "~10–40 U/L",
    increasedCauses: [
      "Viral hepatitis",
      "Alcoholic liver disease",
      "Ischemic hepatitis",
      "Rhabdomyolysis / MI (also in muscle)",
      "Toxic liver injury (acetaminophen)",
    ],
    decreasedCauses: ["Severe end-stage liver disease (rarely clinically noted)"],
    boardsPearls: [
      "AST:ALT >2:1 suggests alcoholic hepatitis",
      "Very high transaminases (>1000) → ischemic hepatitis, acute viral hepatitis, toxin",
      "AST rises in MI and rhabdo — not liver-specific alone",
    ],
    pairWith: [
      "↑ AST/ALT + jaundice → hepatocellular injury",
      "↑ AST >> ALT + heavy alcohol use → alcoholic pattern",
    ],
  },
  {
    id: "alt",
    name: "ALT",
    aliases: ["alt", "alanine aminotransferase", "sgpt"],
    measures: "Enzyme relatively specific to hepatocytes.",
    normalRange: "~7–56 U/L",
    increasedCauses: [
      "Viral hepatitis",
      "NAFLD/NASH",
      "Drug-induced liver injury",
      "Autoimmune hepatitis",
      "Ischemic hepatitis",
    ],
    decreasedCauses: [],
    boardsPearls: [
      "ALT more liver-specific than AST",
      "Chronic mild ↑ → NAFLD, chronic hepatitis",
      "Acute acetaminophen toxicity: ALT may lag behind clinical illness",
    ],
  },
  {
    id: "alk-phos",
    name: "Alkaline Phosphatase",
    aliases: ["alkaline phosphatase", "alk phos"],
    measures: "Enzyme from bile ducts, bone, and placenta.",
    normalRange: "~44–147 U/L (age-dependent)",
    increasedCauses: [
      "Cholestasis / biliary obstruction",
      "Infiltrative liver disease",
      "Bone turnover (Paget disease, fractures, metastases)",
      "Pregnancy (placental)",
      "Adolescent growth spurt",
    ],
    decreasedCauses: [
      "Hypothyroidism",
      "Zinc deficiency",
      "Wilson disease (sometimes low)",
    ],
    boardsPearls: [
      "↑ alk phos + ↑ GGT → hepatobiliary source",
      "↑ alk phos + normal GGT → consider bone source",
      "Peds: physiologic ↑ in growing children",
    ],
    pairWith: [
      "↑ alk phos + ↑ bilirubin + RUQ pain → choledocholithiasis",
      "↑ alk phos + bone pain → metastasis or Paget disease",
    ],
  },
  {
    id: "bilirubin",
    name: "Bilirubin",
    aliases: ["bilirubin", "total bilirubin", "serum bilirubin"],
    measures: "Heme breakdown product; elevated in hemolysis and cholestasis.",
    normalRange: "Total ~0.3–1.2 mg/dL",
    increasedCauses: [
      "Unconjugated: hemolysis, Gilbert syndrome, Crigler-Najjar",
      "Conjugated: biliary obstruction, hepatitis, sepsis",
      "Physiologic neonatal jaundice",
    ],
    decreasedCauses: [],
    boardsPearls: [
      "Fractionate into direct vs indirect",
      "Indirect hyperbilirubinemia in neonate → hemolysis (Rh/ABO) vs physiologic",
      "Dark urine + pale stools → conjugated (obstructive) hyperbilirubinemia",
    ],
    pairWith: [
      "↑ indirect bilirubin + normal LFTs → Gilbert or hemolysis",
      "↑ direct bilirubin + alk phos ↑ → obstruction",
    ],
  },
  {
    id: "uric-acid",
    name: "Serum Uric Acid",
    aliases: [
      "serum uric acid",
      "serum uric acid concentration",
      "uric acid",
      "urate",
    ],
    measures: "End product of purine metabolism; gout and tumor lysis marker.",
    normalRange: "~3.5–7.2 mg/dL (M), 2.6–6.0 (F)",
    increasedCauses: [
      "Gout",
      "Tumor lysis syndrome",
      "Renal failure",
      "Thiazide / loop diuretics",
      "Myeloproliferative disorders",
      "Lesch-Nyhan syndrome",
    ],
    decreasedCauses: [
      "Wilson disease",
      "Fanconi syndrome (urate wasting)",
      "SIADH (sometimes)",
    ],
    boardsPearls: [
      "Acute gout attack may have normal uric acid",
      "TLS labs: ↑ uric acid, ↑ K⁺, ↑ phos, ↓ Ca²⁺ after tumor breakdown (chemo)",
      "Urate nephropathy with chemotherapy",
    ],
    pairWith: [
      "↑ uric acid + painful MTP joint → gout",
      "↑ uric acid after chemo + AKI → tumor lysis syndrome",
    ],
  },
  {
    id: "inr",
    name: "INR",
    aliases: ["inr", "international normalized ratio", "pt/inr"],
    measures: "Standardized prothrombin time; extrinsic coagulation pathway activity.",
    normalRange: "~0.8–1.2 (not on warfarin)",
    increasedCauses: [
      "Warfarin therapy",
      "Vitamin K deficiency",
      "Liver disease",
      "DIC",
      "Factor VII deficiency",
    ],
    decreasedCauses: ["Rare; not usually clinically emphasized"],
    boardsPearls: [
      "Warfarin inhibits vitamin K–dependent factors (II, VII, IX, X, protein C & S)",
      "Early warfarin therapy: protein C (short t½) falls first → transient hypercoagulable state",
      "Prolonged INR + low platelets → DIC or liver failure",
    ],
    pairWith: [
      "↑ INR on warfarin → impaired synthesis of vitamin K–dependent clotting factors",
      "↑ INR + jaundice → advanced liver disease",
    ],
  },
  {
    id: "troponin",
    name: "Troponin",
    aliases: ["troponin", "troponin i", "troponin t"],
    measures: "Cardiac myocyte injury marker; highly sensitive for MI.",
    normalRange: "Assay-dependent (often undetectable at baseline)",
    increasedCauses: [
      "Myocardial infarction",
      "Myocarditis",
      "Pulmonary embolism (RV strain)",
      "Heart failure exacerbation",
      "Chronic kidney disease (reduced clearance)",
      "Sepsis",
    ],
    decreasedCauses: [],
    boardsPearls: [
      "Rise/fall pattern supports acute MI",
      "Elevated troponin is not specific — interpret with ECG and clinical context",
      "Type 2 MI from supply-demand mismatch also elevates troponin",
    ],
    pairWith: [
      "↑ troponin + ST elevation → STEMI",
      "↑ troponin + clear lungs + hypotension → consider massive PE",
    ],
  },
  {
    id: "d-dimer",
    name: "D-Dimer",
    aliases: ["d-dimer", "d dimer"],
    measures: "Fibrin degradation product; marker of active coagulation and fibrinolysis.",
    normalRange: "Age-adjusted (often <500 ng/mL FEU in adults)",
    increasedCauses: [
      "Pulmonary embolism / DVT",
      "DIC",
      "Recent surgery or trauma",
      "Pregnancy",
      "Malignancy",
      "Infection / inflammation",
    ],
    decreasedCauses: [],
    boardsPearls: [
      "Fibrin degradation product from cross-linked fibrin — marker of fibrinolysis",
      "Elevated in PE, DVT, DIC, surgery, pregnancy — low specificity",
      "Very high in DIC; not specific enough to diagnose VTE on its own",
    ],
    pairWith: [
      "Low D-dimer argues against active thrombosis but has low specificity",
      "↑ D-dimer + leg swelling → consider DVT/PE (also elevated in pregnancy, surgery, malignancy)",
    ],
  },
  {
    id: "ldh",
    name: "LDH",
    aliases: ["ldh", "lactate dehydrogenase"],
    measures: "Ubiquitous cytoplasmic enzyme released with tissue breakdown.",
    normalRange: "~140–280 U/L",
    increasedCauses: [
      "Hemolysis",
      "Tumor lysis syndrome",
      "MI, hepatitis, PE",
      "Pneumocystis pneumonia",
      "Germ cell tumors",
      "Muscular dystrophy / rhabdomyolysis",
    ],
    decreasedCauses: [],
    boardsPearls: [
      "One of the classic tumor lysis labs (↑ with uric acid, K⁺, phos)",
      "Hemolysis: ↑ LDH + ↑ indirect bilirubin + ↓ haptoglobin",
      "PJP: ↑ LDH with hypoxemia and diffuse infiltrates in HIV",
    ],
    pairWith: [
      "↑ LDH + schistocytes → hemolysis",
      "↑ LDH after chemo + AKI → tumor lysis syndrome",
    ],
  },
  {
    id: "tsh",
    name: "TSH",
    aliases: ["tsh", "thyroid stimulating hormone"],
    measures: "Pituitary hormone regulating thyroid hormone production.",
    normalRange: "~0.4–4.0 mIU/L",
    increasedCauses: [
      "Primary hypothyroidism",
      "TSH-secreting pituitary adenoma (rare)",
    ],
    decreasedCauses: [
      "Hyperthyroidism (Graves, toxic nodule, thyroiditis early)",
      "Excess levothyroxine",
      "Secondary/tertiary hypothyroidism (pituitary/hypothalamic disease)",
    ],
    boardsPearls: [
      "Primary thyroid disease: TSH and free T4 move inversely",
      "Subclinical hypothyroidism: ↑ TSH, normal free T4",
      "Neonatal TSH screening for congenital hypothyroidism",
    ],
    pairWith: [
      "↑ TSH + low free T4 → primary hypothyroidism",
      "↓ TSH + high free T4 → hyperthyroidism",
    ],
  },
  {
    id: "ferritin",
    name: "Ferritin",
    aliases: ["ferritin", "serum ferritin"],
    measures: "Iron storage protein; acute-phase reactant.",
    normalRange: "~30–300 ng/mL (M), 15–200 (F) (lab-dependent)",
    increasedCauses: [
      "Iron overload (hemochromatosis, transfusions)",
      "Inflammation / infection / liver disease (acute-phase reactant)",
      "Hemophagocytic lymphohistiocytosis",
    ],
    decreasedCauses: [
      "Iron deficiency anemia",
      "Chronic blood loss",
    ],
    boardsPearls: [
      "Low ferritin is specific for iron deficiency",
      "Normal/high ferritin does not exclude iron deficiency if inflammatory state",
      "Hemochromatosis: ↑ ferritin + ↑ transferrin saturation",
    ],
    pairWith: [
      "Low ferritin + microcytic anemia → iron deficiency",
      "High ferritin + bronze skin + diabetes → hemochromatosis",
    ],
  },
  {
    id: "lipase",
    name: "Lipase",
    aliases: ["lipase", "serum lipase"],
    measures: "Pancreatic enzyme; more specific than amylase for pancreatitis.",
    normalRange: "~0–160 U/L (lab-dependent)",
    increasedCauses: [
      "Acute pancreatitis",
      "Pancreatic duct obstruction",
      "Kidney failure (reduced clearance)",
      "Bowel perforation / infarction (less specific)",
    ],
    decreasedCauses: [],
    boardsPearls: [
      "Lipase more specific than amylase for pancreatitis",
      "Gallstones and alcohol are leading causes",
      "Peds: same marker; consider trauma, viruses, gallstones in adolescents",
    ],
    pairWith: [
      "↑ lipase + epigastric pain radiating to back → pancreatitis",
      "↑ lipase + RUQ pain + fever → biliary pancreatitis",
    ],
  },
  {
    id: "pleural-fluid",
    name: "Pleural Fluid Analysis",
    aliases: [
      "pleural fluid",
      "pleural fluid analysis",
      "pleural effusion fluid",
      "pleural aspirate",
    ],
    measures:
      "Fluid collected by thoracentesis from the pleural space; analyzed to classify effusion as transudate or exudate and identify infection, malignancy, or other cause.",
    normalRange: "Normally only a small volume (~0.1–0.2 mL/kg) lubricates pleura; any clinically significant collection is pathologic",
    increasedCauses: [
      "Transudate: CHF, cirrhosis, nephrotic syndrome, hypoalbuminemia, peritoneal dialysis",
      "Exudate: parapneumonic effusion/empyema, malignancy, pulmonary embolism, TB, pancreatitis, rheumatologic disease",
      "Hemorrhagic: trauma, malignancy, PE, hemothorax",
      "Chylous (milky): thoracic duct injury or obstruction (trauma, malignancy)",
    ],
    decreasedCauses: [],
    boardsPearls: [
      "Light's criteria — any one criterion met → exudate: pleural/serum protein >0.5, pleural/serum LDH >0.6, pleural LDH >⅔ ULN serum LDH",
      "Transudate = ↑ hydrostatic or ↓ oncotic pressure; exudate = ↑ capillary permeability or impaired lymphatic drainage",
      "Parapneumonic: pH <7.2, glucose <60, LDH >1000 → empyema until proven otherwise → chest tube",
      "Bloody effusion: malignancy, PE, trauma; RBC count >100,000 suggests hemothorax",
      "Lymphocyte-predominant exudate → TB or malignancy",
    ],
    pairWith: [
      "Exudate + low pH + low glucose → complicated parapneumonic effusion",
      "Transudate + JVD + peripheral edema → CHF",
      "Bloody pleural fluid + trauma → hemothorax",
    ],
  },
];

const labValueById = new Map(LAB_VALUES.map((l) => [l.id, l]));

export function getLabValueById(id: string): LabValueEntry | undefined {
  return labValueById.get(id);
}

export interface LabValueAliasMatch {
  alias: string;
  labValueId: string;
}

export function buildLabValueAliasIndex(): LabValueAliasMatch[] {
  const matches: LabValueAliasMatch[] = [];
  for (const lab of LAB_VALUES) {
    for (const alias of lab.aliases) {
      matches.push({ alias: alias.toLowerCase(), labValueId: lab.id });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
