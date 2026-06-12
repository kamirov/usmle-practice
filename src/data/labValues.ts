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
    aliases: [
      "mcv",
      "mean corpuscular volume",
      "mean cell volume",
    ],
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
    aliases: ["bun", "blood urea nitrogen", "urea nitrogen", "serum urea nitrogen"],
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
  {
    id: "amylase",
    name: "Amylase",
    aliases: ["amylase", "serum amylase"],
    measures:
      "Pancreatic and salivary enzyme that digests starch; elevated in pancreatitis and salivary gland disease.",
    normalRange: "~30–110 U/L (lab-dependent)",
    increasedCauses: [
      "Acute pancreatitis (lipase more specific)",
      "Salivary gland disease (mumps, obstruction)",
      "Bowel perforation, mesenteric ischemia",
      "Macroamylasemia (amylase bound to immunoglobulin — benign)",
      "Kidney failure (reduced clearance)",
    ],
    decreasedCauses: [
      "Chronic pancreatitis (burned-out pancreas)",
      "Pancreatic insufficiency (cystic fibrosis)",
    ],
    boardsPearls: [
      "Lipase preferred over amylase for pancreatitis — more specific",
      "Amylase normal does not exclude pancreatitis (alcohol, delayed presentation)",
      "Macroamylasemia: persistently ↑ amylase with normal lipase and no symptoms",
      "Peds: same markers; consider gallstones and trauma in adolescents",
    ],
    pairWith: [
      "↑ amylase + epigastric pain radiating to back → pancreatitis (confirm with lipase)",
      "↑ amylase + parotid swelling → mumps or salivary obstruction",
    ],
  },
  {
    id: "calcium",
    name: "Serum Calcium",
    aliases: [
      "calcium",
      "serum calcium",
      "ca2+",
      "total calcium",
      "corrected calcium",
    ],
    measures:
      "Total serum calcium (bound to albumin + ionized fraction); essential for neuromuscular function, coagulation, and bone mineralization.",
    normalRange: "~8.5–10.5 mg/dL (total); ionized ~4.5–5.3 mg/dL",
    increasedCauses: [
      "Primary hyperparathyroidism (most common outpatient cause)",
      "Malignancy (PTHrP, bone metastases)",
      "Vitamin D intoxication, granulomatous disease (sarcoidosis)",
      "Thiazide diuretics, immobilization",
      "Milk-alkali syndrome",
      "Tumor lysis syndrome (early phase, before Ca drops)",
    ],
    decreasedCauses: [
      "Hypoalbuminemia (↓ total Ca, ionized may be normal)",
      "Vitamin D deficiency, chronic kidney disease",
      "Hypoparathyroidism (post-thyroid surgery)",
      "Acute pancreatitis, rhabdomyolysis, tumor lysis (late)",
      "Hungry bone syndrome after parathyroidectomy",
    ],
    boardsPearls: [
      "Corrected Ca = measured Ca + 0.8 × (4 − albumin)",
      "Stones, bones, groans, moans, psychiatric overtones → hyperparathyroidism",
      "Chvostek and Trousseau signs → hypocalcemia",
      "QT interval shortens with hypercalcemia, prolongs with hypocalcemia",
    ],
    pairWith: [
      "↑ Ca + ↑ PTH → primary hyperparathyroidism",
      "↓ Ca + ↑ phosphate + low PTH → hypoparathyroidism",
      "↓ total Ca + low albumin → check ionized calcium",
    ],
  },
  {
    id: "triglycerides",
    name: "Triglycerides",
    aliases: [
      "triglycerides",
      "triglyceride",
      "serum triglycerides",
      "fasting triglycerides",
      "tg",
    ],
    measures:
      "Major circulating lipid stored in adipose tissue and VLDL; energy reserve and pancreatitis risk marker when severely elevated.",
    normalRange: "Fasting <150 mg/dL (desirable); 150–199 borderline; ≥500 very high",
    increasedCauses: [
      "Familial hypertriglyceridemia",
      "Uncontrolled diabetes, obesity, metabolic syndrome",
      "Alcohol excess, high-carbohydrate diet",
      "Estrogens, thiazides, β-blockers",
      "Nephrotic syndrome, hypothyroidism",
    ],
    decreasedCauses: [
      "Malnutrition",
      "Hyperthyroidism",
      "Lipid-lowering therapy",
    ],
    boardsPearls: [
      "Severe hypertriglyceridemia (>1000 mg/dL) → acute pancreatitis risk",
      "Fibrates and omega-3 fatty acids for severe ↑ TG; restrict alcohol",
      "Lipemic serum can falsely affect other assays",
      "Peds: familial forms present with eruptive xanthomas and pancreatitis",
    ],
    pairWith: [
      "TG >1000 + epigastric pain → hypertriglyceridemic pancreatitis",
      "↑ TG + ↑ glucose + obesity → metabolic syndrome",
    ],
  },
  {
    id: "cortisol",
    name: "Cortisol",
    aliases: [
      "cortisol",
      "serum cortisol",
      "plasma cortisol",
      "urine free cortisol",
      "24-hour urine cortisol",
      "salivary cortisol",
      "dexamethasone suppression test",
    ],
    measures:
      "Glucocorticoid from adrenal cortex; regulates glucose, stress response, and immune function. Diurnal variation — highest in early morning.",
    normalRange: "Morning serum ~5–25 µg/dL (assay-dependent); must interpret with timing and ACTH",
    increasedCauses: [
      "Cushing syndrome (endogenous or exogenous steroids)",
      "Stress, illness, pregnancy",
      "Depression, obesity (mild elevation)",
      "ACTH-secreting pituitary adenoma or ectopic ACTH",
    ],
    decreasedCauses: [
      "Primary adrenal insufficiency (Addison disease)",
      "Secondary adrenal insufficiency (pituitary ACTH deficiency)",
      "Chronic exogenous steroid use (adrenal suppression)",
    ],
    boardsPearls: [
      "Cushing workup: 24-h urine free cortisol, late-night salivary cortisol, low-dose dexamethasone suppression",
      "High-dose dex suppression distinguishes pituitary (suppresses) from ectopic/adrenal (does not)",
      "Addison: ↓ cortisol + ↑ ACTH + hyperpigmentation",
      "Acute adrenal crisis: hydrocortisone before labs if unstable",
    ],
    pairWith: [
      "↑ cortisol + central obesity + striae → Cushing syndrome",
      "↓ cortisol + hypotension + hyperkalemia → Addison disease",
    ],
  },
  {
    id: "creatine-kinase",
    name: "Creatine Kinase",
    aliases: [
      "creatine kinase",
      "ck",
      "cpk",
      "creatine phosphokinase",
      "ck-mb",
      "ckmb",
    ],
    measures:
      "Enzyme in skeletal muscle, heart, and brain; released with muscle or myocardial injury. CK-MB and troponin refine cardiac specificity.",
    normalRange: "~30–200 U/L (sex and muscle mass dependent)",
    increasedCauses: [
      "Rhabdomyolysis (statin, trauma, exertion, cocaine)",
      "Myocardial infarction (CK-MB, largely replaced by troponin)",
      "Muscular dystrophy, myositis, hypothyroid myopathy",
      "IM injections, heavy exercise",
      "Neuroleptic malignant syndrome, malignant hyperthermia",
    ],
    decreasedCauses: [
      "Sedentary state / low muscle mass",
      "Not clinically emphasized",
    ],
    boardsPearls: [
      "Troponin preferred over CK-MB for MI diagnosis",
      "Massive CK elevation + myoglobinuria + AKI → rhabdomyolysis",
      "Statin + unexplained myalgia — check CK; risk with fibrates and CYP interactions",
      "CK-MB mass: relative index helps distinguish cardiac from skeletal muscle injury",
    ],
    pairWith: [
      "↑ CK + dark urine + ↑ Cr → rhabdomyolysis",
      "↑ CK-MB + troponin → myocardial injury",
    ],
  },
  {
    id: "chloride",
    name: "Chloride",
    aliases: ["chloride", "serum chloride", "cl-"],
    measures:
      "Major extracellular anion; tracks sodium and acid-base status. Changes often parallel Na⁺ (volume) or reflect acid-base disorders.",
    normalRange: "~96–106 mEq/L",
    increasedCauses: [
      "Metabolic acidosis (hyperchloremic: diarrhea, RTA type 2, saline infusion)",
      "Dehydration / hypernatremia",
      "Renal tubular acidosis (some forms)",
    ],
    decreasedCauses: [
      "Metabolic alkalosis (vomiting, diuretics)",
      "SIADH, heart failure (dilutional)",
      "Cystic fibrosis — ↑ sweat chloride (>60 mEq/L diagnostic)",
    ],
    boardsPearls: [
      "Hyperchloremic metabolic acidosis: normal anion gap — diarrhea, ureterosigmoidostomy, RTA",
      "Vomiting → loss of H⁺ and Cl⁻ → metabolic alkalosis with hypochloremia",
      "CF diagnostic test: sweat chloride >60 mEq/L (not serum chloride)",
      "Calculate anion gap: Na − (Cl + HCO₃)",
    ],
    pairWith: [
      "↓ Cl + ↑ HCO₃ + vomiting → metabolic alkalosis",
      "↑ Cl + ↓ HCO₃ + diarrhea → hyperchloremic acidosis",
    ],
  },
  {
    id: "magnesium",
    name: "Magnesium",
    aliases: ["magnesium", "serum magnesium", "mg2+"],
    measures:
      "Intracellular cation essential for ATP-dependent processes, neuromuscular function, and potassium homeostasis.",
    normalRange: "~1.7–2.2 mg/dL",
    increasedCauses: [
      "Renal failure",
      "Magnesium-containing antacids or laxatives",
      "Adrenal insufficiency (mild)",
      "Lithium therapy",
    ],
    decreasedCauses: [
      "Malnutrition, alcoholism, malabsorption",
      "Diuretics, aminoglycosides, cisplatin",
      "Diabetic ketoacidosis (during treatment)",
      "Chronic PPI use",
    ],
    boardsPearls: [
      "Refractory hypokalemia — check and replete magnesium first",
      "Hypomagnesemia predisposes to torsades de pointes",
      "Pre-eclampsia/eclampsia treatment: IV magnesium sulfate for seizure prophylaxis",
      "Peds: same repletion principles; hypomagnesemia with chronic diarrhea",
    ],
    pairWith: [
      "↓ Mg + ↓ K despite repletion → replete Mg before K will correct",
      "↓ Mg + prolonged QT → torsades risk",
    ],
  },
  {
    id: "fsh",
    name: "FSH",
    aliases: [
      "fsh",
      "follicle stimulating hormone",
      "follicle-stimulating hormone",
      "serum fsh",
    ],
    measures:
      "Anterior pituitary gonadotropin that stimulates ovarian follicle development and spermatogenesis; central to puberty and fertility evaluation.",
    normalRange: "Cyclic in women; ~1–12 mIU/mL (follicular, lab-dependent); postmenopausal ↑",
    increasedCauses: [
      "Primary gonadal failure (Turner syndrome, premature ovarian insufficiency, Klinefelter)",
      "Menopause",
      "Primary hypogonadism (testicular failure)",
    ],
    decreasedCauses: [
      "Pituitary/hypothalamic dysfunction (secondary hypogonadism)",
      "Hyperprolactinemia (inhibits GnRH)",
      "Exogenous sex steroids (negative feedback)",
      "Anorexia, excessive exercise (functional hypothalamic amenorrhea)",
    ],
    boardsPearls: [
      "Primary hypogonadism: ↑ FSH/LH + low sex hormones",
      "Secondary hypogonadism: ↓ or inappropriately normal FSH/LH + low sex hormones",
      "Kallmann syndrome: anosmia + delayed puberty + ↓ GnRH",
      "Turner: short stature, webbed neck, ↑ FSH, streak ovaries",
    ],
    pairWith: [
      "↑ FSH + low estrogen + amenorrhea → primary ovarian failure",
      "↓ FSH + low testosterone → pituitary hypogonadism",
    ],
  },
  {
    id: "lh",
    name: "Luteinizing Hormone",
    aliases: [
      "luteinizing hormone",
      "lh",
      "serum lh",
    ],
    measures:
      "Anterior pituitary gonadotropin that triggers ovulation (LH surge) and stimulates Leydig cells to produce testosterone.",
    normalRange: "Cyclic in women; midcycle surge; postmenopausal ↑",
    increasedCauses: [
      "Primary gonadal failure (Turner, Klinefelter, menopause)",
      "PCOS (may have ↑ LH:FSH ratio >2–3)",
      "Precocious puberty (central)",
    ],
    decreasedCauses: [
      "Secondary hypogonadism (pituitary tumor, hyperprolactinemia)",
      "Exogenous steroids",
      "Functional hypothalamic amenorrhea",
    ],
    boardsPearls: [
      "LH surge triggers ovulation ~14 days before menses",
      "PCOS: ↑ LH:FSH ratio, elevated androgens, polycystic ovaries on ultrasound",
      "Klinefelter (47,XXY): ↑ FSH/LH, small firm testes, infertility",
      "hCG mimics LH — pregnancy test detects β-hCG",
    ],
    pairWith: [
      "↑ LH:FSH + hirsutism + oligomenorrhea → PCOS",
      "↑ LH/FSH + small testes → Klinefelter syndrome",
    ],
  },
  {
    id: "gh-arginine-stimulation",
    name: "Growth Hormone Arginine Stimulation Test",
    aliases: [
      "growth hormone-arginine stimulation",
      "growth hormone arginine stimulation",
      "gh arginine stimulation test",
      "arginine gh stimulation test",
      "gh stimulation test",
    ],
    measures:
      "Provocative test measuring peak growth hormone response after IV arginine infusion; used to diagnose growth hormone deficiency when basal GH is insufficient.",
    normalRange: "Peak GH ≥10 ng/mL (assay-dependent) generally excludes GHD in adults; pediatric cutoffs vary by age",
    increasedCauses: [
      "Normal robust response in healthy children",
      "Acromegaly (elevated baseline and blunted suppression on glucose test instead)",
    ],
    decreasedCauses: [
      "Growth hormone deficiency (pituitary adenoma, craniopharyngioma, radiation)",
      "Panhypopituitarism",
      "Childhood short stature from GHD",
    ],
    boardsPearls: [
      "Diagnose GHD when GH fails to rise adequately after provocative stimuli (arginine, insulin tolerance, clonidine)",
      "Insulin tolerance test is gold standard but risky — arginine/clonidine safer in children",
      "Glucose suppression test diagnoses acromegaly (GH fails to suppress)",
      "Peds: GH therapy for confirmed GHD improves final height; Turner syndrome also treated with GH",
    ],
    pairWith: [
      "Blunted GH response + short stature + delayed bone age → GHD workup",
      "Pituitary mass + ↓ multiple anterior hormones → panhypopituitarism",
    ],
  },
  {
    id: "iron",
    name: "Serum Iron",
    aliases: [
      "iron",
      "serum iron",
      "fe",
    ],
    measures:
      "Circulating iron bound mainly to transferrin; reflects recent iron intake and availability (diurnal variation — draw fasting AM).",
    normalRange: "~60–170 µg/dL (M), 40–160 (F)",
    increasedCauses: [
      "Hemochromatosis, transfusional iron overload",
      "Hemolytic anemia (released iron)",
      "Iron poisoning",
      "Recent iron supplementation",
    ],
    decreasedCauses: [
      "Iron deficiency anemia",
      "Chronic disease (iron sequestration in macrophages)",
      "Blood loss",
    ],
    boardsPearls: [
      "Serum iron alone is unreliable — interpret with ferritin, TIBC, transferrin saturation",
      "Iron deficiency: ↓ iron, ↓ ferritin, ↑ TIBC, ↓ saturation",
      "Anemia of chronic disease: ↓ iron, normal/↑ ferritin, ↓ TIBC",
      "Hemochromatosis: ↑ iron, ↑ ferritin, ↑ transferrin saturation",
    ],
    pairWith: [
      "↓ iron + ↓ ferritin + microcytic anemia → iron deficiency",
      "↑ iron + ↑ ferritin + ↑ saturation → hemochromatosis",
    ],
  },
  {
    id: "tibc",
    name: "Total Iron Binding Capacity",
    aliases: [
      "total iron binding capacity",
      "tibc",
      "iron binding capacity",
    ],
    measures:
      "Indirect measure of transferrin capacity to bind iron; reflects transferrin concentration in blood.",
    normalRange: "~250–450 µg/dL",
    increasedCauses: [
      "Iron deficiency (compensatory ↑ transferrin production)",
      "Oral contraceptives, pregnancy",
    ],
    decreasedCauses: [
      "Chronic disease / inflammation",
      "Hemochromatosis, malnutrition",
      "Liver disease (↓ transferrin synthesis)",
    ],
    boardsPearls: [
      "↑ TIBC is classic for iron deficiency",
      "↓ TIBC in anemia of chronic disease and hemochromatosis",
      "Transferrin saturation = (serum iron / TIBC) × 100%",
      "Ferritin is more specific than TIBC for iron stores",
    ],
    pairWith: [
      "↑ TIBC + ↓ ferritin → iron deficiency",
      "↓ TIBC + ↑ ferritin → anemia of chronic disease",
    ],
  },
  {
    id: "transferrin",
    name: "Transferrin",
    aliases: [
      "transferrin",
      "serum transferrin",
      "transferrin saturation",
    ],
    measures:
      "Plasma glycoprotein that transports iron from gut and macrophages to bone marrow; TIBC approximates transferrin iron-binding capacity.",
    normalRange: "~200–360 mg/dL; saturation 20–50%",
    increasedCauses: [
      "Iron deficiency (↑ transferrin to capture more iron)",
      "Estrogen therapy, pregnancy",
    ],
    decreasedCauses: [
      "Inflammation (negative acute-phase response)",
      "Hemochromatosis (iron overload)",
      "Liver disease, malnutrition",
    ],
    boardsPearls: [
      "Transferrin saturation >45% screens for hemochromatosis",
      "HFE C282Y homozygosity + ↑ saturation → hemochromatosis",
      "Anemia of chronic disease: ↓ transferrin, sequestered iron in macrophages",
      "vs ferritin — transferrin reflects transport capacity; ferritin reflects storage",
    ],
    pairWith: [
      "↑ transferrin saturation + ↑ ferritin → iron overload",
      "↑ transferrin + ↓ ferritin → iron deficiency",
    ],
  },
  {
    id: "osmolality",
    name: "Osmolality",
    aliases: [
      "osmolality",
      "serum osmolality",
      "plasma osmolality",
      "urine osmolality",
      "calculated osmolality",
    ],
    measures:
      "Concentration of solute particles per kg solvent; serum ~275–295 mOsm/kg reflects sodium, glucose, and BUN. Urine osmolality assesses concentrating ability.",
    normalRange: "Serum ~275–295 mOsm/kg; urine varies 50–1200 mOsm/kg with hydration/ADH",
    increasedCauses: [
      "Hypernatremia (water deficit)",
      "Hyperglycemia (unmeasured osmoles)",
      "Uremia, ethanol, methanol, ethylene glycol (toxic alcohols)",
      "Mannitol infusion",
    ],
    decreasedCauses: [
      "Hyponatremia (excess water)",
      "SIADH (inappropriately dilute serum)",
      "Beer potomania, psychogenic polydipsia",
    ],
    boardsPearls: [
      "Calculated osm = 2×Na + glucose/18 + BUN/2.8",
      "Osm gap = measured − calculated; >10 suggests unmeasured osmoles (toxic alcohols)",
      "DI: high serum osm + low urine osm; SIADH: low serum osm + inappropriately concentrated urine",
      "Peds: same physiology; infants vulnerable to hyponatremia with hypotonic fluids",
    ],
    pairWith: [
      "High serum osm + polyuria + dilute urine → diabetes insipidus",
      "Low serum osm + euvolemia + concentrated urine → SIADH",
    ],
  },
  {
    id: "phosphorus",
    name: "Phosphorus",
    aliases: [
      "phosphorus",
      "phosphate",
      "serum phosphorus",
      "serum phosphate",
      "po4",
    ],
    measures:
      "Major intracellular anion; critical for ATP, bone mineralization, and membrane function. Renally excreted and regulated by PTH and vitamin D.",
    normalRange: "~2.5–4.5 mg/dL",
    increasedCauses: [
      "Renal failure (↓ excretion)",
      "Tumor lysis syndrome",
      "Rhabdomyolysis",
      "Vitamin D intoxication, hypoparathyroidism",
      "Laxative abuse (phosphate enemas)",
    ],
    decreasedCauses: [
      "Refeeding syndrome",
      "Hyperparathyroidism",
      "Vitamin D deficiency",
      "Primary hyperparathyroidism shifts phosphate into urine",
      "Alcoholism, respiratory alkalosis",
    ],
    boardsPearls: [
      "TLS triad labs: ↑ K, ↑ uric acid, ↑ phosphate, ↓ calcium",
      "CKD → hyperphosphatemia → secondary hyperparathyroidism",
      "Refeeding syndrome: ↓ phosphate, ↓ K, ↓ Mg after nutrition restart",
      "Peds: rickets from vitamin D deficiency — ↓ phosphate with bone changes",
    ],
    pairWith: [
      "↑ phosphate + ↑ K + ↑ uric acid after chemo → tumor lysis syndrome",
      "↓ phosphate + CKD bone pain → renal osteodystrophy workup",
    ],
  },
  {
    id: "prolactin",
    name: "Prolactin",
    aliases: [
      "prolactin",
      "hprl",
      "hp rl",
      "serum prolactin",
    ],
    measures:
      "Anterior pituitary hormone promoting lactation; inhibits GnRH → hypogonadism when elevated.",
    normalRange: "~2–25 ng/mL (nonpregnant; lab-dependent); physiologically ↑ in pregnancy and postpartum",
    increasedCauses: [
      "Prolactinoma (micro- or macro-)",
      "Dopamine antagonists (antipsychotics, metoclopramide)",
      "Primary hypothyroidism (↑ TRH stimulates prolactin)",
      "Pregnancy, nipple stimulation, chest wall trauma",
      "Renal failure (↓ clearance)",
    ],
    decreasedCauses: [
      "Pituitary destruction (Sheehan syndrome, apoplexy)",
      "Dopamine agonist therapy",
    ],
    boardsPearls: [
      "Galactorrhea + amenorrhea + ↓ libido → check prolactin",
      "Macroprolactinoma: prolactin often >200 ng/mL + visual field defects",
      "Treat prolactinoma with dopamine agonists (cabergoline, bromocriptine)",
      "Hypothyroidism can cause mild hyperprolactinemia — check TSH",
    ],
    pairWith: [
      "↑ prolactin + bitemporal hemianopsia → macroprolactinoma",
      "↑ prolactin + antipsychotic use → drug-induced; consider switch",
    ],
  },
  {
    id: "globulin",
    name: "Globulin",
    aliases: [
      "globulin",
      "serum globulin",
      "total globulin",
      "gamma globulin",
      "gamma-globulin",
      "globulins",
    ],
    measures:
      "Serum proteins other than albumin (α, β, γ fractions); γ-globulins are predominantly immunoglobulins. Total protein = albumin + globulin.",
    normalRange: "Total globulin ~2.0–3.5 g/dL; A/G ratio ~1.2–2.2",
    increasedCauses: [
      "Chronic inflammation / infection",
      "Liver cirrhosis (polyclonal ↑ γ-globulin)",
      "Multiple myeloma (monoclonal spike on SPEP)",
      "Autoimmune disease",
      "Waldenström macroglobulinemia (IgM spike)",
    ],
    decreasedCauses: [
      "Immunodeficiency (agammaglobulinemia, nephrotic syndrome loss)",
      "Protein-losing enteropathy",
      "Severe malnutrition",
    ],
    boardsPearls: [
      "SPEP: M spike → multiple myeloma (usually IgG or IgA)",
      "Cirrhosis: hypergammaglobulinemia with ↑ IgG",
      "Nephrotic syndrome: ↓ albumin and ↓ immunoglobulins → infection risk",
      "A/G ratio inverted (<1) in cirrhosis and myeloma",
    ],
    pairWith: [
      "M spike + bone pain + anemia → multiple myeloma",
      "↓ globulin + recurrent infections → immunodeficiency",
    ],
  },
  {
    id: "iodine-uptake",
    name: "Radioactive Iodine Uptake",
    aliases: [
      "iodine",
      "radioactive iodine uptake",
      "rai uptake",
      "iodine uptake",
      "iodine uptake scan",
      "24-hour radioactive iodine uptake",
    ],
    measures:
      "Thyroid gland uptake of oral radioactive iodine (I-123 or I-131 tracer); distinguishes causes of hyperthyroidism by whether the gland avidly traps iodine.",
    normalRange: "~5–15% at 24 hours (varies with iodine intake)",
    increasedCauses: [
      "Graves disease (diffusely increased uptake)",
      "Toxic multinodular goiter (patchy increased uptake)",
      "Iodine deficiency (compensatory ↑ uptake)",
    ],
    decreasedCauses: [
      "Thyroiditis (destructive — leaked hormone, gland not trapping)",
      "Exogenous thyroid hormone or iodine load (Wolff-Chaikoff effect)",
      "Factitious hyperthyroidism (taking levothyroxine)",
    ],
    boardsPearls: [
      "Graves: ↑ T4/T3, ↑ uptake, TSH suppressed, TSI positive",
      "Subacute thyroiditis: ↑ T4/T3, ↓ uptake (leak vs production)",
      "I-131 ablation for Graves — contraindicated in pregnancy",
      "Peds: congenital hypothyroidism screened by TSH, not uptake scan",
    ],
    pairWith: [
      "↑ T4 + ↑ RAI uptake → Graves or toxic nodular goiter",
      "↑ T4 + ↓ RAI uptake → thyroiditis or exogenous hormone",
    ],
  },
  {
    id: "thyroxine",
    name: "Thyroxine (T4)",
    aliases: [
      "thyroxine",
      "t4",
      "free t4",
      "ft4",
      "total t4",
      "levothyroxine level",
    ],
    measures:
      "Primary thyroid hormone (T4); less active than T3 but more abundant. Free T4 is unbound and biologically active fraction.",
    normalRange: "Free T4 ~0.8–1.8 ng/dL; total T4 ~5–12 µg/dL",
    increasedCauses: [
      "Hyperthyroidism (Graves, toxic nodule, thyroiditis early)",
      "Exogenous levothyroxine",
      "Acute illness (euthyroid sick syndrome — variable)",
    ],
    decreasedCauses: [
      "Primary hypothyroidism",
      "Central hypothyroidism (low TSH + low T4)",
      "Severe illness (euthyroid sick — ↓ T4)",
      "Iodine deficiency (if severe)",
    ],
    boardsPearls: [
      "Primary hypothyroidism: ↑ TSH, ↓ free T4",
      "Hyperthyroidism: ↓ TSH, ↑ free T4 (and/or T3)",
      "Euthyroid sick: ↓ T3, normal or ↓ T4, normal/low TSH",
      "Neonatal TSH screen — not T4 alone — for congenital hypothyroidism",
    ],
    pairWith: [
      "↓ T4 + ↑ TSH → primary hypothyroidism",
      "↑ T4 + ↓ TSH → hyperthyroidism",
    ],
  },
  {
    id: "triiodothyronine",
    name: "Triiodothyronine (T3)",
    aliases: [
      "triiodothyronine",
      "t3",
      "free t3",
      "ft3",
      "total t3",
      "reverse t3",
    ],
    measures:
      "More potent thyroid hormone; mostly from peripheral T4 deiodination. T3 toxicosis shows isolated ↑ T3 with normal T4.",
    normalRange: "Free T3 ~2.3–4.2 pg/mL (lab-dependent)",
    increasedCauses: [
      "Hyperthyroidism (especially T3 toxicosis)",
      "Graves disease",
      "Toxic nodular goiter",
    ],
    decreasedCauses: [
      "Hypothyroidism",
      "Euthyroid sick syndrome (↓ T3, ↑ reverse T3)",
      "Propranolol and glucocorticoids (block peripheral T4→T3)",
      "Amiodarone (blocks conversion)",
    ],
    boardsPearls: [
      "T3 toxicosis: ↑ T3, normal T4, suppressed TSH — early Graves or nodular disease",
      "Euthyroid sick: ↓ T3, ↑ reverse T3 — peripheral deiodinase shuts down",
      "β-blockers relieve hyperthyroid symptoms without lowering hormone levels",
      "Peds: congenital hypothyroidism — low T4/T3, ↑ TSH on newborn screen",
    ],
    pairWith: [
      "↑ T3 + normal T4 + ↓ TSH → T3 toxicosis",
      "↓ T3 + normal TSH in ICU patient → euthyroid sick syndrome",
    ],
  },
  {
    id: "immunoglobulins",
    name: "Immunoglobulins",
    aliases: [
      "immunoglobulins",
      "immunoglobulin",
      "igs",
      "total immunoglobulins",
      "quantitative immunoglobulins",
      "spep",
      "serum protein electrophoresis",
    ],
    measures:
      "Antibody classes (IgG, IgM, IgA, IgE, IgD) produced by B cells; measured quantitatively or as fractions on serum protein electrophoresis.",
    normalRange: "IgG ~700–1600, IgA ~70–400, IgM ~40–230 mg/dL (lab-dependent)",
    increasedCauses: [
      "Infection (especially IgM acute, IgG convalescent)",
      "Autoimmune disease, chronic inflammation",
      "Multiple myeloma (monoclonal IgG or IgA)",
      "Waldenström (IgM), MGUS",
    ],
    decreasedCauses: [
      "X-linked agammaglobulinemia (Bruton)",
      "Common variable immunodeficiency (CVID)",
      "Nephrotic syndrome (urinary loss)",
      "Protein-losing enteropathy",
    ],
    boardsPearls: [
      "Bruton agammaglobulinemia: ↓ all Igs, recurrent bacterial infections after 6 months",
      "CVID: ↓ IgG and IgA (± IgM), recurrent sinopulmonary infections",
      "SPEP M spike → myeloma workup (bone marrow, free light chains)",
      "IgM pentamer — best complement fixer; IgG most abundant in serum",
    ],
    pairWith: [
      "↓ all immunoglobulins + recurrent pyogenic infections in boy → Bruton",
      "M spike + back pain → multiple myeloma",
    ],
  },
  {
    id: "iga",
    name: "IgA",
    aliases: [
      "iga",
      "immunoglobulin a",
      "immunoglobulin a (iga)",
      "serum iga",
    ],
    measures:
      "Predominant immunoglobulin in mucosal secretions (tears, saliva, breast milk, GI/genitourinary mucosa); dimer with secretory component in secretions.",
    normalRange: "Serum IgA ~70–400 mg/dL",
    increasedCauses: [
      "Chronic mucosal infection or inflammation",
      "Cirrhosis (polyclonal ↑)",
      "IgA multiple myeloma (monoclonal spike)",
      "IgA nephropathy (mesangial IgA deposition — diagnosis by biopsy, not serum level)",
    ],
    decreasedCauses: [
      "Selective IgA deficiency (most common primary immunodeficiency)",
      "CVID, nephrotic syndrome",
      "Protein-losing enteropathy",
    ],
    boardsPearls: [
      "Selective IgA deficiency: ↑ anaphylaxis risk with blood products containing IgA",
      "Celiac screening: anti-tTG IgA — check total IgA (false negative if IgA deficient)",
      "IgA nephropathy (Berger): synpharyngitic hematuria; mesangial IgA on biopsy",
      "Henoch-Schönlein purpura: IgA immune complex vasculitis in children",
    ],
    pairWith: [
      "Recurrent sinopulmonary infections + ↓ IgA → selective IgA deficiency",
      "Gross hematuria after URI + normal complement → IgA nephropathy",
    ],
  },
  {
    id: "ige",
    name: "IgE",
    aliases: [
      "ige",
      "immunoglobulin e",
      "immunoglobulin e (ige)",
      "serum ige",
      "total ige",
    ],
    measures:
      "Immunoglobulin involved in type I hypersensitivity and defense against helminths; bound to mast cells and basophils via FcεRI.",
    normalRange: "Serum IgE ~0–100 IU/mL (lab-dependent); markedly higher in atopy",
    increasedCauses: [
      "Atopic disease: asthma, allergic rhinitis, eczema",
      "Parasitic (helminth) infection",
      "Allergic bronchopulmonary aspergillosis (ABPA)",
      "Hyper-IgE syndrome (Job syndrome — STAT3 mutation)",
      "Pemphigus vulgaris, some drug reactions",
    ],
    decreasedCauses: [
      "Not commonly clinically emphasized",
      "Rare immunodeficiency syndromes",
    ],
    boardsPearls: [
      "Type I hypersensitivity: allergen cross-links IgE on mast cells → degranulation (histamine, tryptase)",
      "Hyper-IgE syndrome: ↑ IgE, eczema, recurrent staph abscesses, retained primary teeth, coarse facies",
      "ABPA: asthma + eosinophilia + ↑ IgE + central bronchiectasis in CF/asthma patients",
      "Anti-IgE (omalizumab) for severe allergic asthma",
      "Peds: atopy and parasites are top causes of elevated IgE",
    ],
    pairWith: [
      "↑ IgE + asthma + eosinophilia → atopy or ABPA",
      "↑ IgE + recurrent staph abscesses + eczema → Job syndrome",
    ],
  },
  {
    id: "igg",
    name: "IgG",
    aliases: [
      "igg",
      "immunoglobulin g",
      "immunoglobulin g (igg)",
      "serum igg",
    ],
    measures:
      "Most abundant serum immunoglobulin; major opsonin and the only class that crosses the placenta (maternal-fetal immunity).",
    normalRange: "Serum IgG ~700–1600 mg/dL",
    increasedCauses: [
      "Chronic infection or inflammation",
      "Autoimmune disease",
      "IgG multiple myeloma (monoclonal spike — most common myeloma isotype)",
      "Cirrhosis (polyclonal hypergammaglobulinemia)",
      "Chronic granulomatous disease (sometimes)",
    ],
    decreasedCauses: [
      "Bruton agammaglobulinemia (↓ all Igs)",
      "CVID (↓ IgG ± IgA/IgM)",
      "Nephrotic syndrome (urinary loss)",
      "Protein-losing enteropathy",
    ],
    boardsPearls: [
      "IgG crosses placenta — neonatal protection for ~6 months",
      "Secondary immune response: IgM first, then IgG dominates (class switching)",
      "Rh hemolytic disease: maternal anti-D IgG crosses placenta → fetal hemolysis",
      "IVIG replaces IgG in CVID and ITP (immune modulation)",
      "Peds: maternal IgG wanes by ~6 months — infections rise if humoral immunity deficient",
    ],
    pairWith: [
      "↓ IgG + recurrent bacterial infections after 6 months in boy → Bruton",
      "M spike predominantly IgG + bone pain → multiple myeloma",
    ],
  },
  {
    id: "igm",
    name: "IgM",
    aliases: [
      "igm",
      "immunoglobulin m",
      "immunoglobulin m (igm)",
      "serum igm",
    ],
    measures:
      "Pentameric immunoglobulin; first antibody produced in primary immune response. Best at complement activation (classic pathway). Too large to cross placenta.",
    normalRange: "Serum IgM ~40–230 mg/dL",
    increasedCauses: [
      "Acute infection (early humoral response — IgM before IgG)",
      "Waldenström macroglobulinemia (IgM monoclonal spike)",
      "Primary biliary cholangitis (often ↑ IgM)",
      "Rheumatoid factor (IgM anti-IgG — can be elevated in RA, Sjögren)",
      "Hyper-IgM syndrome (defective class switching)",
    ],
    decreasedCauses: [
      "Bruton agammaglobulinemia",
      "CVID (sometimes)",
      "Nephrotic syndrome",
    ],
    boardsPearls: [
      "IgM = first antibody in acute infection; IgG follows with class switching",
      "Waldenström: IgM spike + hyperviscosity (blurred vision, bleeding, neurologic symptoms)",
      "Hyper-IgM syndrome: ↑ IgM, ↓ IgG/IgA/IgE — CD40L (X-linked) or AID defects",
      "Cold agglutinins are usually IgM — Mycoplasma pneumoniae, EBV",
      "Peds: X-linked hyper-IgM — recurrent pyogenic and opportunistic infections",
    ],
    pairWith: [
      "↑ IgM + blurred vision + IgM spike → Waldenström macroglobulinemia",
      "↑ IgM only with ↓ IgG/IgA → hyper-IgM syndrome",
    ],
  },
  {
    id: "hba1c",
    name: "Hemoglobin A1c",
    aliases: [
      "hemoglobin a1c",
      "hemoglobin a₁c",
      "hba1c",
      "hb a1c",
      "a1c",
      "glycated hemoglobin",
      "glycosylated hemoglobin",
      "glycohemoglobin",
    ],
    measures:
      "Fraction of hemoglobin nonenzymatically glycated; reflects average blood glucose over ~120 days (weighted toward recent weeks).",
    normalRange: "<5.7% normal; 5.7–6.4% prediabetes; ≥6.5% diagnostic for diabetes (ADA criteria)",
    increasedCauses: [
      "Diabetes mellitus (poor glycemic control)",
      "Iron deficiency (falsely ↑ A1c — fewer young RBCs)",
      "Splenectomy / hemolytic anemia recovery (older RBCs persist)",
    ],
    decreasedCauses: [
      "Hemolytic anemia (RBC turnover shortens exposure)",
      "Recent transfusion",
      "Chronic kidney disease on erythropoietin (variable)",
      "Pregnancy (physiologic dilution of glycation)",
    ],
    boardsPearls: [
      "Hemoglobin A₁c (subscript 1c) = HbA1c — same glycated hemoglobin test",
      "Diagnose diabetes: A1c ≥6.5%, fasting glucose ≥126, or OGTT ≥200",
      "Unreliable in hemolysis, recent transfusion, some hemoglobinopathies — use fructosamine or glucose",
      "Peds: same diagnostic thresholds; A1c less validated in young children",
    ],
    pairWith: [
      "A1c ≥6.5% + polyuria/polydipsia → diabetes mellitus",
      "High A1c + hemolytic anemia → interpret cautiously or use alternative marker",
    ],
  },
  {
    id: "reticulocyte",
    name: "Reticulocyte Count",
    aliases: [
      "reticulocyte",
      "reticulocytes",
      "reticulocyte count",
      "retic count",
      "reticulocyte index",
    ],
    measures:
      "Immature anucleate red blood cells recently released from bone marrow; marker of erythropoietic activity.",
    normalRange: "~0.5–2.5% of RBCs (or absolute count ~25,000–100,000 /µL)",
    increasedCauses: [
      "Hemolytic anemia (marrow compensates)",
      "Acute blood loss with adequate iron stores",
      "Recovery from marrow suppression",
      "Erythropoietin therapy",
    ],
    decreasedCauses: [
      "Aplastic anemia",
      "Iron/B12/folate deficiency (ineffective erythropoiesis)",
      "Chronic kidney disease (↓ erythropoietin)",
      "Bone marrow infiltration (leukemia, metastases)",
    ],
    boardsPearls: [
      "Reticulocyte index corrects for anemia severity",
      "↑ reticulocytes + anemia → hemolysis or bleeding with marrow response",
      "↓ reticulocytes + anemia → production problem (hypoproliferative)",
      "Peds: hemolytic disease of newborn — ↑ reticulocytes with jaundice",
    ],
    pairWith: [
      "Anemia + ↑ reticulocytes + ↑ LDH → hemolysis",
      "Anemia + ↓ reticulocytes + low MCV → iron deficiency",
    ],
  },
  {
    id: "pt",
    name: "Prothrombin Time",
    aliases: [
      "pt",
      "prothrombin time",
      "protime",
    ],
    measures:
      "Coagulation test of the extrinsic and common pathways (factors VII, X, V, II, fibrinogen); reported as seconds or INR.",
    normalRange: "~11–13.5 seconds; INR 0.8–1.2 (not anticoagulated)",
    increasedCauses: [
      "Warfarin (↓ vitamin K–dependent factors)",
      "Vitamin K deficiency (malabsorption, antibiotics, newborn)",
      "Liver disease (↓ factor synthesis)",
      "DIC (consumption)",
      "Factor VII deficiency",
    ],
    decreasedCauses: [
      "Rare; not clinically emphasized",
    ],
    boardsPearls: [
      "PT/INR monitors warfarin — target usually 2–3 for most indications",
      "Vitamin K–dependent factors: II, VII, IX, X, protein C & S",
      "Prolonged PT + prolonged PTT → common pathway or severe liver disease/DIC",
      "Neonatal hemorrhagic disease — ↓ vitamin K → ↑ PT",
    ],
    pairWith: [
      "↑ PT + normal PTT → extrinsic pathway (factor VII, warfarin)",
      "↑ PT + ↑ PTT + ↓ fibrinogen → DIC",
    ],
  },
  {
    id: "ptt",
    name: "Partial Thromboplastin Time",
    aliases: [
      "ptt",
      "partial thromboplastin time",
      "aptt",
      "activated partial thromboplastin time",
      "activated ptt",
    ],
    measures:
      "Coagulation test of the intrinsic and common pathways (factors XII, XI, IX, VIII, X, V, II, fibrinogen); monitors heparin.",
    normalRange: "~25–35 seconds",
    increasedCauses: [
      "Heparin / LMWH therapy",
      "Hemophilia A (factor VIII) or B (factor IX)",
      "von Willebrand disease (↓ factor VIII stabilization)",
      "Lupus anticoagulant (prolongs PTT in vitro — paradoxically thrombotic)",
      "Liver disease, DIC, vitamin K deficiency (less than PT)",
    ],
    decreasedCauses: [
      "Acute phase / factor VIII elevation (rare)",
    ],
    boardsPearls: [
      "Mixing study: PTT corrects if deficiency, does not correct if inhibitor (lupus anticoagulant, factor inhibitor)",
      "Hemophilia: prolonged PTT, normal PT, normal platelets",
      "Heparin monitoring — therapeutic PTT ~1.5–2.5× control",
      "Peds: hemophilia presents with deep tissue/joint bleeding after minor trauma",
    ],
    pairWith: [
      "↑ PTT + normal PT + joint bleeding → hemophilia",
      "↑ PTT + thrombosis history → lupus anticoagulant",
    ],
  },
  {
    id: "mch",
    name: "MCH",
    aliases: ["mch", "mean corpuscular hemoglobin"],
    measures:
      "Average mass of hemoglobin per red blood cell; parallels MCHC and helps classify anemia.",
    normalRange: "~27–33 pg",
    increasedCauses: [
      "Macrocytic anemia (often with ↑ MCV)",
      "Hyperthyroidism",
    ],
    decreasedCauses: [
      "Iron deficiency anemia",
      "Thalassemia",
      "Anemia of chronic disease",
    ],
    boardsPearls: [
      "Low MCH + low MCV → microcytic hypochromic anemia (iron deficiency, thalassemia)",
      "Interpret with MCV, MCHC, and RDW",
      "Less commonly cited alone than MCV on boards",
    ],
    pairWith: [
      "↓ MCH + ↓ MCV + ↑ RDW → iron deficiency",
      "↓ MCH + ↓ MCV + normal RDW → thalassemia trait",
    ],
  },
  {
    id: "mchc",
    name: "MCHC",
    aliases: [
      "mchc",
      "mean corpuscular hemoglobin concentration",
    ],
    measures:
      "Average concentration of hemoglobin per unit volume of red cells; reflects RBC hypochromia.",
    normalRange: "~32–36 g/dL",
    increasedCauses: [
      "Hereditary spherocytosis (relative hemoglobin concentration in spherocytes)",
      "Lab artifact (cold agglutinins, hyperlipidemia)",
    ],
    decreasedCauses: [
      "Iron deficiency anemia (hypochromic microcytic)",
      "Thalassemia",
      "Sideroblastic anemia",
    ],
    boardsPearls: [
      "Low MCHC → hypochromic RBCs on smear",
      "Spherocytes with ↑ MCHC → hereditary spherocytosis",
      "Use with MCV and RDW to narrow anemia differential",
    ],
    pairWith: [
      "↓ MCHC + microcytosis → iron deficiency or thalassemia",
      "↑ MCHC + spherocytes → hereditary spherocytosis",
    ],
  },
  {
    id: "oxalate",
    name: "Oxalate",
    aliases: [
      "oxalate",
      "urine oxalate",
      "serum oxalate",
      "oxalic acid",
      "hyperoxaluria",
    ],
    measures:
      "End product of glyoxylate metabolism; combines with calcium to form insoluble calcium oxalate — the most common kidney stone component.",
    normalRange: "Urine oxalate ~20–40 mg/24 h (lab-dependent)",
    increasedCauses: [
      "Primary hyperoxaluria (AGXT, GRHPR, HOGA1 mutations)",
      "Enteric hyperoxaluria (malabsorption, Crohn, gastric bypass)",
      "Ethylene glycol poisoning (oxalate crystals in urine)",
      "Vitamin C excess (metabolized to oxalate)",
      "High oxalate diet (spinach, rhubarb, nuts)",
    ],
    decreasedCauses: [
      "Not clinically emphasized",
    ],
    boardsPearls: [
      "Calcium oxalate stones — envelope-shaped crystals on urinalysis",
      "Ethylene glycol toxicity: anion gap acidosis + calcium oxalate crystals + ↑ osm gap",
      "Primary hyperoxaluria → nephrocalcinosis and renal failure in children",
      "Restrict oxalate and ensure adequate calcium intake with meals to limit intestinal absorption",
    ],
    pairWith: [
      "Anion gap acidosis + oxalate crystals → ethylene glycol poisoning",
      "Recurrent calcium oxalate stones + GI disease → enteric hyperoxaluria",
    ],
  },
  {
    id: "17-hydroxycorticosteroids",
    name: "17-Hydroxycorticosteroids",
    aliases: [
      "17-hydroxycorticosteroids",
      "17 hydroxycorticosteroids",
      "17-oh corticosteroids",
      "urinary 17-hydroxycorticosteroids",
    ],
    measures:
      "Urinary metabolites of cortisol and cortisone (17-hydroxy group); historical marker of glucocorticoid production and adrenal cortex activity.",
    normalRange: "~2–8 mg/24 h (lab-dependent; largely superseded by direct cortisol assays)",
    increasedCauses: [
      "Cushing syndrome (endogenous or exogenous steroids)",
      "Stress, pregnancy",
      "Adrenal adenoma/carcinoma",
    ],
    decreasedCauses: [
      "Adrenal insufficiency",
      "Hypopituitarism",
      "Congenital adrenal hyperplasia (depending on enzyme block)",
    ],
    boardsPearls: [
      "Largely replaced by 24-h urine free cortisol and salivary cortisol for Cushing workup",
      "Elevated in glucocorticoid excess states",
      "CAH enzyme defects alter steroid precursor routing — 17-OHP more classic for 21-hydroxylase deficiency",
      "Boards may reference in older Cushing/adrenal vignettes",
    ],
    pairWith: [
      "↑ 17-hydroxycorticosteroids + Cushingoid features → hypercortisolism",
      "CAH workup: 17-OHP elevation more specific for 21-hydroxylase deficiency",
    ],
  },
  {
    id: "17-ketosteroids",
    name: "17-Ketosteroids",
    aliases: [
      "17-ketosteroids",
      "17 ketosteroids",
      "urinary 17-ketosteroids",
      "17-ks",
    ],
    measures:
      "Urinary metabolites of adrenal and gonadal androgens (DHEA, androstenedione, testosterone metabolites); reflects androgen production.",
    normalRange: "Adult male ~7–20 mg/24 h; female ~4–14 mg/24 h",
    increasedCauses: [
      "Congenital adrenal hyperplasia (androgen excess)",
      "Adrenal carcinoma",
      "Virilizing ovarian or testicular tumors",
      "Exogenous androgens",
    ],
    decreasedCauses: [
      "Adrenal insufficiency",
      "Hypogonadism",
      "Panhypopituitarism",
    ],
    boardsPearls: [
      "↑ in androgen excess — CAH, virilizing tumors",
      "21-hydroxylase CAH: virilization, ↑ 17-OHP (more specific than 17-ketosteroids today)",
      "Historical test; modern workup uses direct androgen and 17-OHP levels",
      "Peds: ambiguous genitalia + salt wasting → screen 17-OHP for CAH",
    ],
    pairWith: [
      "↑ 17-ketosteroids + virilization in female → androgen excess workup",
      "Newborn salt wasting + ambiguous genitalia → 17-OHP for CAH",
    ],
  },
  {
    id: "bmi",
    name: "Body Mass Index",
    aliases: [
      "bmi",
      "body mass index",
    ],
    measures:
      "Weight (kg) / height (m)²; screening measure for underweight, overweight, and obesity.",
    normalRange: "18.5–24.9 normal; 25–29.9 overweight; ≥30 obese; <18.5 underweight",
    increasedCauses: [
      "Obesity (caloric excess, sedentary lifestyle)",
      "Endocrine: hypothyroidism, Cushing syndrome",
      "Medications (steroids, atypical antipsychotics)",
      "Genetic syndromes (Prader-Willi)",
    ],
    decreasedCauses: [
      "Malnutrition, eating disorders",
      "Malabsorption, hyperthyroidism",
      "Chronic illness, malignancy",
    ],
    boardsPearls: [
      "BMI ≥30 → obesity; associated with T2DM, OSA, NAFLD, HTN, ASCVD risk",
      "BMI does not distinguish muscle from fat — athletes may have high BMI with low body fat",
      "Pediatrics: use BMI percentile for age/sex — ≥95th percentile obese",
      "Obesity hypoventilation syndrome (Pickwickian): obesity + daytime hypercapnia",
    ],
    pairWith: [
      "BMI ≥30 + daytime somnolence + hypercapnia → obesity hypoventilation",
      "High BMI + Acanthosis nigricans → insulin resistance",
    ],
  },
  {
    id: "cholesterol",
    name: "Total Cholesterol",
    aliases: [
      "cholesterol",
      "total cholesterol",
      "serum cholesterol",
      "fasting cholesterol",
      "cholesterol level",
    ],
    measures:
      "Sum of cholesterol carried in all lipoproteins (LDL, HDL, VLDL); screening component of the fasting lipid panel.",
    normalRange: "Desirable <200 mg/dL; 200–239 borderline; ≥240 high (with LDL/HDL context)",
    increasedCauses: [
      "Primary hyperlipidemia (familial, polygenic)",
      "Hypothyroidism",
      "Nephrotic syndrome",
      "Obstructive liver disease / cholestasis",
      "Diet high in saturated fat, diabetes, obesity",
    ],
    decreasedCauses: [
      "Malnutrition",
      "Severe liver disease (↓ synthesis)",
      "Hyperthyroidism",
      "Malabsorption",
    ],
    boardsPearls: [
      "Always interpret with LDL, HDL, and triglycerides — total cholesterol alone is incomplete",
      "ASCVD risk guides statin therapy (LDL target), not total cholesterol in isolation",
      "Secondary causes: check TSH before treating primary dyslipidemia",
      "Peds: screen children with obesity, diabetes, FH, or family history of premature CAD",
    ],
    pairWith: [
      "↑ cholesterol + ↑ LDL + tendon xanthomas → familial hypercholesterolemia",
      "↑ cholesterol + heavy proteinuria → nephrotic syndrome",
    ],
  },
  {
    id: "ldl",
    name: "LDL Cholesterol",
    aliases: [
      "ldl",
      "ldl cholesterol",
      "ldl-c",
      "ldl-c cholesterol",
      "low-density lipoprotein",
      "low-density lipoprotein cholesterol",
    ],
    measures:
      "Cholesterol in low-density lipoprotein particles; primary atherogenic lipoprotein driving foam cell formation and plaque.",
    normalRange: "Optimal <100 mg/dL; <70 mg/dL for high ASCVD risk (guideline-dependent)",
    increasedCauses: [
      "Familial hypercholesterolemia (LDLR, ApoB, PCSK9 mutations)",
      "Diet, obesity, sedentary lifestyle",
      "Hypothyroidism, nephrotic syndrome, diabetes",
      "Cholestasis",
    ],
    decreasedCauses: [
      "Statin, ezetimibe, PCSK9 inhibitor therapy",
      "Malnutrition, hyperthyroidism",
      "Severe liver disease",
    ],
    boardsPearls: [
      "LDL is primary target for atherosclerosis prevention — statins ↓ LDL and reduce ASCVD events",
      "Statins inhibit HMG-CoA reductase (rate-limiting step in hepatic cholesterol synthesis)",
      "Homozygous FH: LDL often >500 mg/dL, tendon xanthomas, premature CAD — LDL apheresis",
      "PCSK9 degrades LDL receptor — gain-of-function PCSK9 → ↑ LDL; PCSK9 inhibitors ↓ LDL",
      "Peds: heterozygous FH may need statins in childhood; homozygous FH presents early",
    ],
    pairWith: [
      "↑ LDL + premature MI in family → familial hypercholesterolemia",
      "↑ LDL + hypothyroid symptoms → check TSH before statin",
    ],
  },
  {
    id: "hdl",
    name: "HDL Cholesterol",
    aliases: [
      "hdl",
      "hdl cholesterol",
      "hdl-c",
      "high-density lipoprotein",
      "high-density lipoprotein cholesterol",
    ],
    measures:
      "Cholesterol in high-density lipoprotein particles; participates in reverse cholesterol transport from periphery to liver.",
    normalRange: "≥60 mg/dL protective; <40 mg/dL (M) or <50 (F) = low HDL risk factor",
    increasedCauses: [
      "Regular aerobic exercise",
      "Moderate alcohol intake (not a treatment recommendation)",
      "Estrogen therapy",
      "Chronic liver disease (sometimes)",
    ],
    decreasedCauses: [
      "Smoking, sedentary lifestyle, obesity",
      "Type 2 diabetes, metabolic syndrome",
      "Hypertriglyceridemia",
      "Tangier disease (ABCA1 defect — very low HDL)",
    ],
    boardsPearls: [
      "Low HDL is independent ASCVD risk factor — lifestyle modification first",
      "HDL raising drugs (niacin, CETP inhibitors) have not consistently improved outcomes",
      "Reverse cholesterol transport: HDL picks up cholesterol from macrophages → liver excretion",
      "Tangier disease: orange tonsils, very low HDL, neuropathy",
      "Peds: low HDL common in obesity and metabolic syndrome in adolescents",
    ],
    pairWith: [
      "Low HDL + ↑ TG + central obesity → metabolic syndrome",
      "Very low HDL + orange tonsils → Tangier disease",
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
