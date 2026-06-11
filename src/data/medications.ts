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
      "Toxicity antidote: digoxin-specific Fab fragments (binds free digoxin)",
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
      "Dry cough from bradykinin accumulation — ARBs do not inhibit kininase II",
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
      "Contraindicated in acute decompensated HF (↓ contractility worsens pump failure)",
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
      "Long-term toxicities: pulmonary fibrosis, hepatotoxicity, corneal deposits, thyroid dysfunction",
    ],
  },
  {
    id: "adenosine",
    name: "Adenosine",
    aliases: ["adenosine", "adenocard"],
    drugClass: "Purine nucleoside / antiarrhythmic",
    mechanism:
      "Activates A1 receptors → ↑ K⁺ efflux → hyperpolarization and transient AV nodal block; very short half-life (seconds).",
    indications: [
      "Paroxysmal supraventricular tachycardia (AV nodal block)",
      "Diagnostic maneuver in wide-complex tachycardia (transient AV block)",
    ],
    adverseEffects: [
      "Transient flushing, chest discomfort, dyspnea",
      "Brief asystole or bradycardia (expected)",
      "Bronchospasm (use caution in asthma/COPD)",
    ],
    boardsPearls: [
      "Half-life ~10 seconds — terminated by RBC/endothelial uptake",
      "Ineffective orally or as slow infusion (degraded before reaching AV node)",
      "Methylxanthines (caffeine, theophylline) antagonize effect",
      "Pediatrics: same mechanism in SVT; blocked by methylxanthines",
    ],
  },
  {
    id: "alteplase",
    name: "Alteplase",
    aliases: ["alteplase", "tpa", "t-pa", "activase"],
    drugClass: "Thrombolytic (tissue plasminogen activator)",
    mechanism:
      "Converts plasminogen to plasmin → fibrinolysis and clot dissolution.",
    indications: [
      "Acute ischemic stroke",
      "STEMI (fibrinolysis)",
      "Massive pulmonary embolism with hemodynamic instability",
    ],
    adverseEffects: [
      "Intracranial hemorrhage",
      "Systemic bleeding",
      "Reperfusion arrhythmias",
    ],
    boardsPearls: [
      "Contraindications: recent stroke/surgery, active bleeding, uncontrolled HTN",
      "Converts plasminogen → plasmin; major risk is intracranial hemorrhage",
      "Tenecteplase: modified tPA with longer half-life (fibrin-specific)",
    ],
  },
  {
    id: "atropine",
    name: "Atropine",
    aliases: ["atropine"],
    drugClass: "Antimuscarinic (anticholinergic)",
    mechanism:
      "Competitive muscarinic (M) receptor antagonist → blocks vagal effects on SA/AV node and smooth muscle.",
    indications: [
      "Symptomatic bradycardia",
      "Organophosphate/carbamate poisoning (with pralidoxime)",
      "Cycloplegia / mydriasis (ophthalmic)",
    ],
    adverseEffects: [
      "Tachycardia, dry mouth, urinary retention",
      "Confusion, hyperthermia (especially elderly)",
      "Mydriasis, acute angle-closure glaucoma risk",
      "Paradoxical bradycardia at low doses",
    ],
    boardsPearls: [
      "Muscarinic antagonist → ↑ HR via M2 blockade on SA/AV node",
      "Not effective for high-degree (type II second-degree or third-degree) AV block",
      "Organophosphate poisoning → atropine + pralidoxime (reactivates acetylcholinesterase)",
      "Pediatrics: bradycardia in infants often from hypoxia — address airway first",
    ],
  },
  {
    id: "morphine",
    name: "Morphine",
    aliases: ["morphine", "ms contin"],
    drugClass: "Opioid agonist (μ-receptor)",
    mechanism:
      "Agonist at μ-opioid receptors (and κ, δ) → ↑ analgesia, sedation, and respiratory depression; ↓ sympathetic outflow.",
    indications: [
      "Moderate to severe pain (acute and chronic)",
      "Acute pulmonary edema (reduces preload and sympathetic surge)",
      "Acute coronary syndrome / MI-related chest pain",
    ],
    adverseEffects: [
      "Respiratory depression",
      "Nausea, vomiting, constipation",
      "Miosis, sedation, urinary retention",
      "Hypotension and bradycardia",
      "Physical dependence and withdrawal",
    ],
    boardsPearls: [
      "Reversed by naloxone; shorter naloxone half-life → risk of renarcotization",
      "Avoid in severe asthma, COPD, or undiagnosed head injury (↑ CO₂ retention / ↑ ICP)",
      "Active metabolite morphine-6-glucuronide accumulates in renal failure → prolonged toxicity",
      "Pediatrics: respiratory depression is leading toxicity; same μ-receptor mechanism",
    ],
  },
  {
    id: "naloxone",
    name: "Naloxone",
    aliases: ["naloxone", "narcan"],
    drugClass: "Opioid antagonist",
    mechanism:
      "Competitive antagonist at μ, κ, and δ opioid receptors → reverses opioid-induced CNS and respiratory depression.",
    indications: [
      "Opioid overdose (respiratory depression, altered mental status)",
    ],
    adverseEffects: [
      "Acute opioid withdrawal (agitation, vomiting, diarrhea, tachycardia)",
      "Pulmonary edema (rare)",
      "Recurrent depression as naloxone wears off (shorter half-life than many opioids)",
    ],
    boardsPearls: [
      "Pinpoint pupils + ↓ respirations → opioid toxicity; competitive μ-receptor antagonist",
      "Shorter half-life than most opioids → renarcotization risk as naloxone wears off",
      "Precipitates acute withdrawal in opioid-dependent patients",
      "Pediatrics: same toxidrome; accidental ingestion or iatrogenic overdose",
    ],
  },
  {
    id: "physostigmine",
    name: "Physostigmine",
    aliases: ["physostigmine", "antilirium"],
    drugClass: "Reversible acetylcholinesterase inhibitor",
    mechanism:
      "Crosses blood-brain barrier; inhibits acetylcholinesterase → ↑ synaptic ACh at muscarinic and nicotinic sites.",
    indications: [
      "Anticholinergic (antimuscarinic) toxicity with CNS effects",
    ],
    adverseEffects: [
      "Bradycardia, salivation, bronchorrhea, seizures",
      "Cholinergic crisis if overdosed",
      "Contraindicated in TCA overdose (may worsen cardiac conduction)",
    ],
    boardsPearls: [
      "Antidote for pure anticholinergic toxidrome: hot as a hare, dry as a bone, mad as a hatter, blind as a bat",
      "Contraindicated in QRS widening / TCA ingestion — use sodium bicarbonate instead",
      "Atropine treats peripheral cholinergic excess; physostigmine treats central anticholinergic delirium",
      "Pediatrics: accidental diphenhydramine or scopolamine ingestion — same contraindications apply",
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
      "Atrial fibrillation",
      "DIC (selected cases)",
    ],
    adverseEffects: [
      "Bleeding",
      "Heparin-induced thrombocytopenia (HIT)",
      "Osteoporosis (prolonged use)",
      "Hyperkalemia (suppressed aldosterone)",
    ],
    boardsPearls: [
      "Binds antithrombin III → potentiates inhibition of thrombin (IIa) and factor Xa",
      "HIT: immune-mediated anti-PF4 antibodies → thrombocytopenia + thrombosis",
      "Protamine sulfate reverses UFH (cationic protein binds acidic heparin)",
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
      "Inhibits vitamin K epoxide reductase → ↓ factors II, VII, IX, X and protein C & S",
      "Narrow therapeutic window; vitamin K–rich foods and CYP2C9 inhibitors ↑ effect",
      "Skin necrosis early in therapy if congenital protein C deficiency",
      "Teratogenic — crosses placenta; fetal hemorrhage risk",
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
    ],
    boardsPearls: [
      "Direct factor Xa inhibitor — inhibits thrombin generation without antithrombin",
      "Contraindicated with mechanical heart valves (thrombosis risk)",
      "Renally cleared — accumulation risk with impaired kidney function",
    ],
  },
  {
    id: "aspirin",
    name: "Aspirin",
    aliases: ["aspirin", "asa", "acetylsalicylic acid"],
    drugClass: "NSAID / antiplatelet agent",
    mechanism:
      "Irreversibly inhibits cyclooxygenase (COX-1 >> COX-2) → ↓ thromboxane A₂ synthesis → inhibits platelet aggregation; at higher doses also ↓ prostaglandins → analgesic, antipyretic, anti-inflammatory effects.",
    indications: [
      "Acute coronary syndrome (antiplatelet)",
      "Secondary prevention of MI, stroke, and cardiovascular events",
      "Kawasaki disease (with IVIG)",
      "Analgesia, fever, inflammation (higher doses)",
    ],
    adverseEffects: [
      "GI bleeding and peptic ulcer disease",
      "Bleeding (prolonged platelet dysfunction ~7–10 days)",
      "Tinnitus and salicylate toxicity (high doses)",
      "Reye syndrome in children with viral illness",
      "Asthma exacerbation (aspirin-exacerbated respiratory disease)",
    ],
    boardsPearls: [
      "Irreversible COX-1 inhibition → antiplatelet effect lasts platelet lifespan (~7–10 days)",
      "Contraindicated in children with febrile viral illness (Reye syndrome)",
      "Low-dose: antiplatelet; high-dose: analgesic/antipyretic/anti-inflammatory",
      "Pediatrics: avoid for fever in varicella/influenza; used in Kawasaki disease",
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
      "Type 2 diabetes mellitus",
      "PCOS",
      "Prediabetes",
    ],
    adverseEffects: [
      "GI upset (nausea, diarrhea)",
      "Lactic acidosis (rare, especially with renal failure)",
      "Vitamin B12 deficiency (chronic use)",
    ],
    boardsPearls: [
      "↓ hepatic gluconeogenesis; does not stimulate insulin secretion",
      "Contraindicated in eGFR <30 (lactic acidosis risk)",
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
      "Diabetic ketoacidosis / hyperosmolar hyperglycemic state",
    ],
    adverseEffects: [
      "Hypoglycemia (most serious)",
      "Weight gain",
      "Lipohypertrophy at injection sites",
      "Hypokalemia (insulin drives K⁺ intracellularly during DKA correction)",
    ],
    boardsPearls: [
      "Drives K⁺ intracellularly — given with glucose for hyperkalemia",
      "β-blockers mask hypoglycemia symptoms (tachycardia, tremor)",
      "Formulations differ by onset and duration (rapid, NPH, glargine, etc.)",
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
      "T4 prodrug → peripheral conversion to active T3",
      "Many drug interactions (Ca²⁺, Fe, PPIs ↓ absorption)",
      "Pregnancy ↑ thyroid hormone requirements; TSH guides adequacy",
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
      "NMS: rigidity, fever, autonomic instability, ↑ CK — dopamine blockade toxicity",
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
      "Alcohol withdrawal: GABA facilitation prevents seizures and delirium tremens",
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
      "Binds 30S ribosomal subunit → misreading of mRNA (concentration-dependent killing)",
      "Synergistic with β-lactams for enterococcal endocarditis (cell-wall + protein synthesis)",
      "Nephrotoxic and ototoxic — risk ↑ with loop diuretics and vancomycin",
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
      "Binds D-Ala-D-Ala → inhibits peptidoglycan polymerization (Gram-positive)",
      "Red man syndrome from rapid infusion (histamine release, not true allergy)",
      "Oral vancomycin not absorbed — treats C. difficile in gut lumen only",
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
