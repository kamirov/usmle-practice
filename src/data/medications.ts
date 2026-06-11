export interface MedicationEntry {
  id: string;
  name: string;
  aliases: string[];
  drugClass: string;
  mechanism: string;
  indications: string[];
  adverseEffects: string[];
  boardsPearls: string[];
}

export const MEDICATIONS: MedicationEntry[] = [
  {
    id: "digoxin",
    name: "Digoxin",
    aliases: ["digoxin", "lanoxin"],
    drugClass: "Cardiac glycoside",
    mechanism:
      "Inhibits Na⁺/K⁺-ATPase → ↑ intracellular Ca²⁺ → positive inotropy; ↑ vagal tone → slows AV conduction.",
    indications: [
      "Symptomatic HFrEF",
      "Rate control in atrial fibrillation (especially with heart failure)",
    ],
    adverseEffects: [
      "Nausea, vomiting, anorexia",
      "Visual disturbances (yellow-green halos, blurred vision)",
      "Arrhythmias (PVCs, bradycardia, AV block, ventricular tachycardia)",
      "Narrow therapeutic window / toxicity",
    ],
    boardsPearls: [
      "Hypokalemia, hypomagnesemia, hypercalcemia, and renal failure increase toxicity",
      "Amiodarone, verapamil, and quinidine increase digoxin levels",
      "Severe toxicity: treat with digoxin-specific Fab fragments",
    ],
  },
  {
    id: "furosemide",
    name: "Furosemide",
    aliases: ["furosemide", "lasix"],
    drugClass: "Loop diuretic",
    mechanism:
      "Inhibits Na⁺/K⁺/2Cl⁻ cotransporter in the thick ascending limb of the loop of Henle → potent natriuresis and diuresis.",
    indications: [
      "Acute pulmonary edema / volume overload",
      "Heart failure",
      "Edema (renal, hepatic, or cardiac)",
      "Hypertension (adjunct)",
    ],
    adverseEffects: [
      "Hypokalemia, hypomagnesemia, metabolic alkalosis",
      "Ototoxicity (especially with aminoglycosides)",
      "Dehydration, hypotension",
      "Hyperuricemia / gout",
    ],
    boardsPearls: [
      "Sulfonamide allergy: cross-reactivity possible but often still used cautiously",
      "Low ceiling effect compared with thiazides for HTN monotherapy",
      "Hypokalemia increases digoxin toxicity",
    ],
  },
  {
    id: "lisinopril",
    name: "Lisinopril",
    aliases: ["lisinopril"],
    drugClass: "ACE inhibitor",
    mechanism:
      "Blocks angiotensin-converting enzyme → ↓ angiotensin II and ↓ aldosterone → vasodilation, ↓ afterload, ↓ preload.",
    indications: [
      "Hypertension",
      "Heart failure (↓ mortality)",
      "Post-MI LV dysfunction",
      "Diabetic nephropathy",
    ],
    adverseEffects: [
      "Dry cough (bradykinin accumulation)",
      "Hyperkalemia",
      "Angioedema",
      "Teratogenic — contraindicated in pregnancy",
      "↑ creatinine / bilateral RAS can precipitate renal failure",
    ],
    boardsPearls: [
      "Contraindicated in pregnancy",
      "Avoid with bilateral renal artery stenosis",
      "Cough → switch to ARB",
    ],
  },
  {
    id: "enalapril",
    name: "Enalapril",
    aliases: ["enalapril"],
    drugClass: "ACE inhibitor",
    mechanism:
      "Prodrug converted to enalaprilat; inhibits ACE → ↓ angiotensin II and aldosterone → vasodilation and afterload reduction.",
    indications: [
      "Hypertension",
      "Heart failure",
      "Asymptomatic LV dysfunction",
    ],
    adverseEffects: [
      "Dry cough, hyperkalemia, angioedema",
      "Teratogenic — contraindicated in pregnancy",
      "Hypotension (first-dose effect)",
    ],
    boardsPearls: [
      "Same class pearls as other ACE inhibitors",
      "Prodrug requiring hepatic conversion (consider in liver disease)",
    ],
  },
  {
    id: "metoprolol",
    name: "Metoprolol",
    aliases: ["metoprolol", "lopressor"],
    drugClass: "Beta-1 selective blocker",
    mechanism:
      "Antagonizes β1 receptors → ↓ heart rate, contractility, and renin release; reduces myocardial O₂ demand.",
    indications: [
      "Hypertension",
      "Angina",
      "Heart failure (chronic, stabilized)",
      "Post-MI",
      "Rate control in atrial fibrillation",
    ],
    adverseEffects: [
      "Bradycardia, AV block, heart failure exacerbation (acute decompensated HF)",
      "Bronchospasm (less than nonselective β-blockers)",
      "Fatigue, depression, impotence",
      "Masks hypoglycemia symptoms",
    ],
    boardsPearls: [
      "Do not start in acute decompensated HF; used chronically for mortality benefit",
      "Avoid abrupt withdrawal → rebound tachycardia / ischemia",
      "β1-selective but still use caution in asthma",
    ],
  },
  {
    id: "amiodarone",
    name: "Amiodarone",
    aliases: ["amiodarone", "pacerone"],
    drugClass: "Class III antiarrhythmic (multichannel blocker)",
    mechanism:
      "Blocks K⁺, Na⁺, and Ca²⁺ channels and has noncompetitive β-blockade → prolongs action potential and refractory period.",
    indications: [
      "Ventricular arrhythmias",
      "Atrial fibrillation/flutter (rate and rhythm control)",
      "Refractory supraventricular tachycardias",
    ],
    adverseEffects: [
      "Pulmonary fibrosis / pneumonitis",
      "Hepatotoxicity, corneal microdeposits, photosensitivity",
      "Hypo- or hyperthyroidism",
      "QT prolongation, bradycardia, heart block",
      "Blue-gray skin discoloration (long-term)",
    ],
    boardsPearls: [
      "Many drug interactions via CYP inhibition; increases digoxin levels",
      "Contains iodine → thyroid dysfunction",
      "Check PFTs, LFTs, TFTs with chronic use",
    ],
  },
  {
    id: "heparin",
    name: "Heparin",
    aliases: ["heparin"],
    drugClass: "Anticoagulant (indirect thrombin inhibitor)",
    mechanism:
      "Binds antithrombin III → markedly ↑ inhibition of factor Xa and thrombin (IIa).",
    indications: [
      "Acute venous thromboembolism",
      "Acute coronary syndromes",
      "Atrial fibrillation (bridging)",
      "DIC (selected cases)",
    ],
    adverseEffects: [
      "Bleeding",
      "Heparin-induced thrombocytopenia (HIT)",
      "Osteoporosis (prolonged use)",
      "Hyperkalemia (suppressed aldosterone)",
    ],
    boardsPearls: [
      "Monitor aPTT (unfractionated heparin)",
      "HIT: thrombocytopenia + thrombosis → stop heparin, use direct thrombin inhibitor",
      "Protamine sulfate reverses UFH",
    ],
  },
  {
    id: "warfarin",
    name: "Warfarin",
    aliases: ["warfarin", "coumadin"],
    drugClass: "Vitamin K antagonist",
    mechanism:
      "Inhibits vitamin K epoxide reductase → impairs synthesis of factors II, VII, IX, X and proteins C & S.",
    indications: [
      "Atrial fibrillation (stroke prevention)",
      "Mechanical heart valves",
      "Venous thromboembolism treatment/prevention",
    ],
    adverseEffects: [
      "Bleeding",
      "Skin necrosis (protein C deficiency early on)",
      "Teratogenic — contraindicated in pregnancy",
    ],
    boardsPearls: [
      "Monitor INR; narrow therapeutic window",
      "Vitamin K-rich foods and CYP2C9 inhibitors (metronidazole, amiodarone) ↑ effect",
      "Bridge with heparin/LMWH when starting (initial procoagulant state)",
      "Reversal: vitamin K, FFP, or prothrombin complex concentrate",
    ],
  },
  {
    id: "apixaban",
    name: "Apixaban",
    aliases: ["apixaban", "eliquis"],
    drugClass: "Direct factor Xa inhibitor (DOAC)",
    mechanism:
      "Directly inhibits factor Xa → ↓ thrombin generation without requiring antithrombin.",
    indications: [
      "Nonvalvular atrial fibrillation (stroke prevention)",
      "VTE treatment and prophylaxis",
    ],
    adverseEffects: [
      "Bleeding",
      "No routine monitoring required",
    ],
    boardsPearls: [
      "Preferred over warfarin in many nonvalvular AF scenarios",
      "Andexanet alfa reverses apixaban (and rivaroxaban) in life-threatening bleeding",
      "Avoid in mechanical valves and severe renal impairment (relative)",
    ],
  },
  {
    id: "metformin",
    name: "Metformin",
    aliases: ["metformin"],
    drugClass: "Biguanide",
    mechanism:
      "↓ hepatic gluconeogenesis and improves peripheral insulin sensitivity; does not stimulate insulin secretion.",
    indications: [
      "Type 2 diabetes mellitus (first-line)",
      "PCOS",
      "Prediabetes (selected patients)",
    ],
    adverseEffects: [
      "GI upset (nausea, diarrhea)",
      "Lactic acidosis (rare, especially with renal failure)",
      "Vitamin B12 deficiency (chronic use)",
    ],
    boardsPearls: [
      "Hold before iodinated contrast and major surgery (renal risk)",
      "Contraindicated in eGFR <30",
      "Does not cause hypoglycemia as monotherapy",
    ],
  },
  {
    id: "insulin",
    name: "Insulin",
    aliases: ["insulin"],
    drugClass: "Hormone / hypoglycemic agent",
    mechanism:
      "Binds insulin receptor → promotes glucose uptake, glycogenesis, lipogenesis; inhibits gluconeogenesis and lipolysis.",
    indications: [
      "Type 1 diabetes mellitus",
      "Type 2 diabetes (when oral agents insufficient)",
      "Hyperkalemia (with glucose)",
      "DKA / HHS management",
    ],
    adverseEffects: [
      "Hypoglycemia (most serious)",
      "Weight gain",
      "Lipohypertrophy at injection sites",
      "Hypokalemia (during treatment of DKA)",
    ],
    boardsPearls: [
      "DKA: IV regular insulin + fluids + K⁺ replacement",
      "β-blockers mask hypoglycemia symptoms",
      "Peak times differ by formulation (rapid, NPH, glargine, etc.)",
    ],
  },
  {
    id: "levothyroxine",
    name: "Levothyroxine",
    aliases: ["levothyroxine", "synthroid"],
    drugClass: "Synthetic T4 (thyroid hormone)",
    mechanism:
      "Peripheral conversion to T3 → binds nuclear receptors → regulates metabolic gene transcription.",
    indications: [
      "Hypothyroidism",
      "Thyroid cancer suppression therapy",
      "Myxedema coma",
    ],
    adverseEffects: [
      "Symptoms of hyperthyroidism if overdosed (palpitations, weight loss, heat intolerance)",
      "Atrial fibrillation in elderly if over-replaced",
    ],
    boardsPearls: [
      "Take on empty stomach; many drug interactions (Ca²⁺, Fe, PPIs ↓ absorption)",
      "Adjust dose in pregnancy",
      "Narrow therapeutic window — check TSH",
    ],
  },
  {
    id: "prednisone",
    name: "Prednisone",
    aliases: ["prednisone"],
    drugClass: "Glucocorticoid",
    mechanism:
      "Binds glucocorticoid receptor → alters gene transcription → anti-inflammatory, immunosuppressive, and metabolic effects.",
    indications: [
      "Autoimmune and inflammatory disorders",
      "Asthma/COPD exacerbations",
      "Adrenal insufficiency",
      "Transplant rejection",
      "Allergic reactions",
    ],
    adverseEffects: [
      "Cushingoid features, hyperglycemia, hypertension",
      "Osteoporosis, avascular necrosis",
      "Immunosuppression, poor wound healing",
      "Adrenal suppression with prolonged use",
    ],
    boardsPearls: [
      "Taper after chronic use to avoid adrenal crisis",
      "Worsens infections; can mask fever",
      "Hyperglycemia and psychosis are classic acute effects",
    ],
  },
  {
    id: "haloperidol",
    name: "Haloperidol",
    aliases: ["haloperidol", "haldol"],
    drugClass: "Typical (first-generation) antipsychotic",
    mechanism:
      "Dopamine D2 receptor antagonism in mesolimbic pathway → ↓ positive psychotic symptoms.",
    indications: [
      "Schizophrenia",
      "Acute agitation / psychosis",
      "Tourette syndrome",
      "Severe nausea/vomiting",
    ],
    adverseEffects: [
      "Extrapyramidal symptoms (dystonia, akathisia, parkinsonism, tardive dyskinesia)",
      "Hyperprolactinemia",
      "QT prolongation",
      "Neuroleptic malignant syndrome",
    ],
    boardsPearls: [
      "High-potency typical antipsychotic → more EPS, less sedation/anticholinergic effects",
      "NMS: rigidity, fever, autonomic instability → stop drug, dantrolene/bromocriptine",
      "Avoid in Lewy body dementia (severe sensitivity)",
    ],
  },
  {
    id: "lorazepam",
    name: "Lorazepam",
    aliases: ["lorazepam", "ativan"],
    drugClass: "Benzodiazepine",
    mechanism:
      "Enhances GABA-A receptor activity → ↑ Cl⁻ influx → neuronal hyperpolarization and CNS depression.",
    indications: [
      "Anxiety",
      "Alcohol withdrawal",
      "Status epilepticus",
      "Preprocedure sedation",
    ],
    adverseEffects: [
      "Sedation, confusion (especially elderly)",
      "Respiratory depression (with opioids)",
      "Dependence and withdrawal",
      "Ataxia",
    ],
    boardsPearls: [
      "CIWA protocol for alcohol withdrawal",
      "Flumazenil reverses overdose but may precipitate seizures",
      "Avoid combining with alcohol/opioids",
    ],
  },
  {
    id: "fluoxetine",
    name: "Fluoxetine",
    aliases: ["fluoxetine", "prozac"],
    drugClass: "SSRI",
    mechanism:
      "Selectively inhibits presynaptic serotonin reuptake → ↑ synaptic 5-HT.",
    indications: [
      "Major depressive disorder",
      "OCD, panic disorder, bulimia nervosa",
      "PTSD",
    ],
    adverseEffects: [
      "GI upset, sexual dysfunction, insomnia",
      "Serotonin syndrome (with MAOIs, other serotonergic drugs)",
      "Bleeding risk (↓ platelet serotonin)",
      "Activation / increased suicidality in young adults (early treatment)",
    ],
    boardsPearls: [
      "Long half-life (active metabolite norfluoxetine)",
      "Do not combine with MAOIs",
      "Serotonin syndrome: hyperthermia, clonus, agitation, autonomic instability",
    ],
  },
  {
    id: "gentamicin",
    name: "Gentamicin",
    aliases: ["gentamicin"],
    drugClass: "Aminoglycoside antibiotic",
    mechanism:
      "Binds 30S ribosomal subunit → misreading of mRNA → bactericidal against aerobic Gram-negative rods.",
    indications: [
      "Serious Gram-negative infections (often combined with β-lactam)",
      "Endocarditis (synergy with cell-wall agents)",
      "Uncomplicated UTI (selected cases)",
    ],
    adverseEffects: [
      "Nephrotoxicity",
      "Ototoxicity (vestibular and cochlear)",
      "Neuromuscular blockade",
    ],
    boardsPearls: [
      "Requires therapeutic drug monitoring (peak/trough)",
      "Synergistic with β-lactams for enterococcal endocarditis",
      "Avoid with other nephrotoxins/ototoxins (loop diuretics, vancomycin)",
    ],
  },
  {
    id: "vancomycin",
    name: "Vancomycin",
    aliases: ["vancomycin"],
    drugClass: "Glycopeptide antibiotic",
    mechanism:
      "Inhibits cell wall peptidoglycan polymerization by binding D-Ala-D-Ala → bactericidal against Gram-positive cocci.",
    indications: [
      "MRSA infections",
      "Serious Gram-positive infections (endocarditis, meningitis)",
      "C. difficile colitis (oral formulation)",
    ],
    adverseEffects: [
      "Nephrotoxicity",
      "Red man syndrome (rapid infusion — histamine release)",
      "Ototoxicity",
      "Thrombophlebitis",
    ],
    boardsPearls: [
      "Monitor trough levels for IV therapy",
      "Infuse slowly to prevent red man syndrome",
      "Oral vancomycin not absorbed — treats C. difficile in gut",
    ],
  },
  {
    id: "tmp-smx",
    name: "Trimethoprim-Sulfamethoxazole",
    aliases: [
      "trimethoprim-sulfamethoxazole",
      "tmp-smx",
      "tmp/smx",
      "bactrim",
      "septra",
    ],
    drugClass: "Sulfonamide + folate synthesis inhibitor",
    mechanism:
      "Sulfamethoxazole inhibits dihydropteroate synthase; trimethoprim inhibits dihydrofolate reductase → blocks bacterial folate synthesis.",
    indications: [
      "Uncomplicated UTI",
      "Pneumocystis jirovecii pneumonia (prophylaxis and treatment)",
      "MRSA skin infections (community)",
      "Toxoplasmosis prophylaxis",
    ],
    adverseEffects: [
      "Hyperkalemia (trimethoprim blocks ENaC)",
      "Stevens-Johnson syndrome / TEN",
      "Hemolytic anemia in G6PD deficiency",
      "Crystalluria, nephrotoxicity",
    ],
    boardsPearls: [
      "Avoid in third trimester and near term (kernicterus risk)",
      "Classic cause of hyperkalemia in elderly",
      "Increase warfarin effect",
    ],
  },
];

const medicationById = new Map(MEDICATIONS.map((m) => [m.id, m]));

export function getMedicationById(id: string): MedicationEntry | undefined {
  return medicationById.get(id);
}

export interface MedicationAliasMatch {
  alias: string;
  medicationId: string;
}

export function buildMedicationAliasIndex(): MedicationAliasMatch[] {
  const matches: MedicationAliasMatch[] = [];
  for (const medication of MEDICATIONS) {
    for (const alias of medication.aliases) {
      matches.push({ alias: alias.toLowerCase(), medicationId: medication.id });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
