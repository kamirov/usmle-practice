export interface SymptomEntry {
  id: string;
  name: string;
  aliases: string[];
  definition: string;
  mechanism: string;
  thinkOf: string[];
  pairWith: string[];
  distinguishFrom?: string[];
}

export const SYMPTOMS: SymptomEntry[] = [
  {
    id: "exertional-dyspnea",
    name: "Exertional Dyspnea",
    aliases: [
      "exertional dyspnea",
      "exertional sob",
      "exertional shortness of breath",
      "dyspnea on exertion",
    ],
    definition:
      "Shortness of breath triggered by physical activity that was previously tolerated.",
    mechanism:
      "Exercise increases cardiac output and O₂ demand; dyspnea appears when CO, O₂ delivery, or gas exchange cannot keep pace.",
    thinkOf: [
      "Heart failure",
      "Coronary artery disease / ischemia",
      "Aortic stenosis",
      "Mitral regurgitation",
      "Pulmonary hypertension",
      "COPD / interstitial lung disease",
      "Anemia",
      "Deconditioning or obesity",
    ],
    pairWith: [
      "Chest pain → ischemia",
      "Syncope with exertion → aortic stenosis",
      "Orthopnea or PND → left heart failure",
      "Wheezing → asthma vs cardiac asthma",
      "Peripheral edema → volume overload",
    ],
    distinguishFrom: [
      "Orthopnea — dyspnea when lying flat",
      "PND — abrupt dyspnea waking patient from sleep",
      "Resting dyspnea — suggests more severe cardiopulmonary disease",
    ],
  },
  {
    id: "shortness-of-breath",
    name: "Shortness of Breath",
    aliases: ["shortness of breath", "dyspnea"],
    definition:
      "Subjective sensation of uncomfortable or inadequate breathing (dyspnea), at rest or with activity.",
    mechanism:
      "Arises when ventilatory demand exceeds capacity, when chemoreceptors sense hypoxemia or hypercapnia, or when J-receptors detect pulmonary congestion or microatelectasis.",
    thinkOf: [
      "Heart failure",
      "COPD / asthma",
      "Pulmonary embolism",
      "Pneumonia",
      "Anemia",
      "Metabolic acidosis (DKA, sepsis)",
      "Anxiety / hyperventilation",
    ],
    pairWith: [
      "Exertional onset → cardiac or pulmonary limitation",
      "Orthopnea or PND → left heart failure",
      "Pleuritic pain, hypoxia → PE",
      "Wheezing → obstructive lung disease",
      "Tachypnea with acidosis → Kussmaul breathing",
    ],
    distinguishFrom: [
      "Exertional dyspnea — specifically triggered by activity",
      "Tachypnea — increased rate without subjective air hunger",
      "Hyperventilation — low PaCO₂, often anxiety or acidosis compensation",
    ],
  },
  {
    id: "wheezing",
    name: "Wheezing",
    aliases: ["wheezing", "wheeze", "wheezes"],
    definition:
      "High-pitched whistling sound during expiration (sometimes inspiration) from narrowed airways.",
    mechanism:
      "Turbulent airflow through constricted bronchioles (smooth muscle spasm, edema, or mucus plugging) produces audible wheezing.",
    thinkOf: [
      "Asthma",
      "COPD exacerbation",
      "Heart failure (cardiac asthma)",
      "Anaphylaxis",
      "Foreign body aspiration",
      "Bronchiolitis (peds)",
    ],
    pairWith: [
      "Exertional or nocturnal symptoms → asthma",
      "Orthopnea, crackles, edema → cardiac asthma / pulmonary edema",
      "Urticaria, hypotension after exposure → anaphylaxis",
      "Peds: viral bronchiolitis (RSV) — wheeze in infant with URI symptoms",
      "Unilateral wheeze → foreign body until proven otherwise",
    ],
    distinguishFrom: [
      "Stridor — inspiratory, upper airway (croup, epiglottitis)",
      "Rhonchi — low-pitched, often clears with cough",
      "Crackles — discontinuous, alveolar fluid (not wheeze)",
    ],
  },
  {
    id: "cough",
    name: "Cough",
    aliases: ["cough", "chronic cough", "productive cough", "dry cough"],
    definition:
      "Reflex expulsion of air from the lungs to clear airways; may be acute or chronic, dry or productive.",
    mechanism:
      "Stimulation of cough receptors (airway inflammation, mucus, foreign material, or pulmonary congestion) triggers the cough reflex arc via the vagus and medullary cough center.",
    thinkOf: [
      "Upper respiratory infection",
      "Asthma",
      "COPD",
      "GERD / postnasal drip",
      "ACE inhibitor side effect",
      "Heart failure",
      "Tuberculosis / lung cancer",
      "Pertussis (peds)",
    ],
    pairWith: [
      "Hemoptysis → malignancy, TB, bronchiectasis",
      "Wheezing → asthma or COPD",
      "Orthopnea, edema → pulmonary congestion",
      "Fever, weight loss, night sweats → TB or malignancy",
      "Peds: paroxysmal whoop → pertussis; barking cough → croup",
    ],
    distinguishFrom: [
      "Hemoptysis — blood in sputum, not cough alone",
      "Dyspnea without cough — PE, anemia, metabolic acidosis",
      "Chronic cough >8 weeks — think GERD, postnasal drip, asthma, ACE-I",
    ],
  },
  {
    id: "easy-fatigability",
    name: "Easy Fatigability",
    aliases: ["easy fatigability"],
    definition:
      "Disproportionate tiredness or exhaustion with ordinary activity that was previously well tolerated.",
    mechanism:
      "Reduced O₂ delivery (low CO, anemia), impaired O₂ utilization (mitochondrial disease, hypothyroidism), deconditioning, or increased metabolic demand can all lower exercise tolerance.",
    thinkOf: [
      "Anemia",
      "Heart failure",
      "Hypothyroidism",
      "Chronic kidney disease",
      "Mitral regurgitation",
      "Depression / chronic fatigue",
      "Deconditioning",
    ],
    pairWith: [
      "Dyspnea on exertion → cardiac or pulmonary cause",
      "Pallor, tachycardia → anemia",
      "Weight gain, cold intolerance → hypothyroidism",
      "Elevated JVP, edema → heart failure",
      "Low mood, sleep disturbance → depression",
    ],
    distinguishFrom: [
      "Exertional dyspnea — primary complaint is breathlessness, not fatigue",
      "Muscle weakness — difficulty generating force, not general tiredness",
      "Daytime sleepiness → consider sleep apnea or narcolepsy",
    ],
  },
  {
    id: "orthopnea",
    name: "Orthopnea",
    aliases: ["orthopnea"],
    definition:
      "Dyspnea that develops or worsens when lying flat, relieved by sitting or standing.",
    mechanism:
      "Recumbency redistributes fluid to the pulmonary circulation and increases venous return, raising pulmonary capillary pressure in a failing left ventricle.",
    thinkOf: [
      "Left-sided heart failure",
      "Volume overload",
      "Severe mitral regurgitation",
      "Advanced COPD (less classic)",
    ],
    pairWith: [
      "PND → classic LV failure pattern",
      "Peripheral edema, S3 → systolic HF",
      "Paroxysmal cough or frothy sputum → pulmonary edema",
      "Number of pillows used → severity marker",
    ],
    distinguishFrom: [
      "PND — occurs after sleep onset, not immediately on lying down",
      "Exertional dyspnea — triggered by activity, not position",
    ],
  },
  {
    id: "peripheral-edema",
    name: "Peripheral Edema",
    aliases: [
      "peripheral edema",
      "pedal edema",
      "lower extremity edema",
      "leg swelling",
      "bilateral leg swelling",
    ],
    definition:
      "Accumulation of interstitial fluid in the dependent extremities, typically bilateral and pitting.",
    mechanism:
      "↑ capillary hydrostatic pressure (heart failure, venous obstruction), ↓ oncotic pressure (nephrotic syndrome, cirrhosis), or ↑ capillary permeability (inflammation) drive fluid into interstitium.",
    thinkOf: [
      "Heart failure (right or biventricular)",
      "Nephrotic syndrome",
      "Cirrhosis / portal hypertension",
      "Chronic venous insufficiency",
      "DVT / lymphedema (often unilateral)",
      "Medications (CCBs, NSAIDs)",
    ],
    pairWith: [
      "Orthopnea, PND, JVP elevation → heart failure",
      "Proteinuria, hypoalbuminemia → nephrotic syndrome",
      "Ascites, jaundice → cirrhosis",
      "Unilateral calf pain, warmth → DVT",
      "Peds: periorbital edema with proteinuria → nephrotic syndrome (minimal change disease)",
    ],
    distinguishFrom: [
      "Lipedema — nonpitting, painful fat distribution",
      "Angioedema — acute, often face/airway, allergic or ACE-I mediated",
      "Ascites — intraperitoneal fluid, not peripheral edema alone",
    ],
  },
  {
    id: "pnd",
    name: "Paroxysmal Nocturnal Dyspnea (PND)",
    aliases: ["paroxysmal nocturnal dyspnea", "pnd"],
    definition:
      "Sudden episodes of dyspnea that awaken the patient from sleep, often with a sensation of suffocation.",
    mechanism:
      "After hours supine, fluid shifts and increased venous return raise LV filling pressures; compensatory sympathetic surge worsens afterload and precipitates pulmonary edema.",
    thinkOf: [
      "Left ventricular failure",
      "Ischemic cardiomyopathy",
      "Hypertensive heart disease",
      "Mitral regurgitation",
    ],
    pairWith: [
      "Orthopnea → bilateral LV failure",
      "S3 gallop, crackles → pulmonary congestion",
      "Elevated JVP, edema → volume overload",
      "History of MI or hypertension",
    ],
    distinguishFrom: [
      "Orthopnea — present when lying down, not specifically after sleep",
      "Nocturnal asthma — wheeze, allergic history, less crackles",
      "Sleep apnea — snoring, daytime somnolence, not frothy edema",
    ],
  },
  {
    id: "pleuritic-chest-pain",
    name: "Pleuritic Chest Pain",
    aliases: ["pleuritic chest pain", "pleuritic pain"],
    definition:
      "Sharp chest pain that worsens with inspiration or coughing due to pleural irritation.",
    mechanism:
      "Inflammation of the parietal pleura (which is innervated) produces localized pain accentuated by chest wall movement.",
    thinkOf: [
      "Pulmonary embolism",
      "Pneumonia / pleurisy",
      "Pneumothorax",
      "Pericarditis (can be pleuritic)",
      "Viral pleuritis",
    ],
    pairWith: [
      "Tachycardia, hypoxia, immobilization → PE",
      "Fever, cough, infiltrate → pneumonia",
      "Sudden unilateral dyspnea, diminished breath sounds → pneumothorax",
      "Positional relief sitting forward → pericarditis",
    ],
    distinguishFrom: [
      "Pressure-like pain with exertion → angina",
      "Tearing pain radiating to the back → aortic dissection",
      "Reproducible with palpation → musculoskeletal",
    ],
  },
  {
    id: "tearing-chest-pain",
    name: "Tearing Chest Pain",
    aliases: ["tearing chest pain", "tearing pain"],
    definition:
      "Sudden, severe chest pain described as ripping or tearing, often maximal at onset.",
    mechanism:
      "Intimal tear in the aorta with dissection creates a false lumen; pain reflects acute aortic wall separation.",
    thinkOf: [
      "Aortic dissection",
      "Aortic rupture",
    ],
    pairWith: [
      "Hypertension or connective tissue disease (Marfan, Ehlers-Danlos)",
      "Pulse or BP differential between arms",
      "Widened mediastinum on CXR",
      "Neurologic deficits → branch vessel compromise",
    ],
    distinguishFrom: [
      "Pleuritic pain — worse with breathing, not classic ripping radiation",
      "STEMI — crushing pressure, not tearing to the back",
      "PE — pleuritic, tachycardic, hypoxic without pulse deficit",
    ],
  },
  {
    id: "chest-pain",
    name: "Chest Pain",
    aliases: [
      "chest pain",
      "substernal chest pain",
      "crushing chest pain",
      "pressure-like chest pain",
      "angina",
      "chest pressure",
    ],
    definition:
      "Discomfort or pain in the chest, often described as pressure, tightness, or squeezing.",
    mechanism:
      "Myocardial ischemia (supply-demand mismatch) causes substernal pain via ischemic metabolites; noncardiac causes include esophageal spasm, musculoskeletal strain, and anxiety.",
    thinkOf: [
      "Stable or unstable angina",
      "Acute coronary syndrome (NSTEMI / STEMI)",
      "Aortic stenosis",
      "Hypertrophic cardiomyopathy",
      "GERD / esophageal spasm",
      "Costochondritis",
    ],
    pairWith: [
      "Exertional, relieved by rest or nitroglycerin → stable angina",
      "Diaphoresis, nausea, radiation to jaw/arm → ACS",
      "Syncope with exertion → aortic stenosis or HOCM",
      "Reproducible with palpation → musculoskeletal",
      "Peds: chest pain with exertion in adolescent → HOCM or anomalous coronary artery",
    ],
    distinguishFrom: [
      "Pleuritic chest pain — sharp, worse with inspiration",
      "Tearing chest pain — ripping radiation to back → dissection",
      "Point tenderness — costochondritis, not ischemia",
    ],
  },
  {
    id: "palpitations",
    name: "Palpitations",
    aliases: ["palpitations", "palpitation"],
    definition:
      "Awareness of one's own heartbeat, described as racing, pounding, fluttering, or skipping beats.",
    mechanism:
      "Increased rate, contractility, stroke volume, or irregular rhythm makes normally subliminal cardiac sensations perceptible; heightened sympathetic tone or anxiety lowers the perceptual threshold.",
    thinkOf: [
      "Atrial fibrillation / flutter",
      "Paroxysmal SVT",
      "Premature beats (PVCs, PACs)",
      "Hyperthyroidism",
      "Anxiety / panic disorder",
      "Anemia",
      "Caffeine, stimulants, or sympathomimetics",
      "Structural heart disease (mitral valve prolapse, HOCM)",
      "Pheochromocytoma",
    ],
    pairWith: [
      "Syncope or presyncope → malignant arrhythmia",
      "Exertional dyspnea → heart failure or ischemia",
      "Heat intolerance, weight loss, tremor → hyperthyroidism",
      "Chest pain → ischemia or pericarditis",
      "Peds: supraventricular tachycardia — narrow-complex tachycardia in infant with irritability or poor feeding; history of abrupt rate change is classic",
    ],
    distinguishFrom: [
      "Chest pain without rhythm awareness → angina, not primary palpitations",
      "Presyncope without racing heartbeat → orthostatic or vasovagal",
      "Physiologic sinus tachycardia with fever, pain, or exercise — expected, not pathologic palpitations",
    ],
  },
  {
    id: "syncope",
    name: "Syncope",
    aliases: ["syncope"],
    definition:
      "Transient loss of consciousness due to global cerebral hypoperfusion, with rapid spontaneous recovery.",
    mechanism:
      "A sudden drop in cardiac output or systemic vascular resistance reduces cerebral blood flow below the level needed to maintain awareness.",
    thinkOf: [
      "Vasovagal (neurally mediated)",
      "Orthostatic hypotension",
      "Cardiac arrhythmia",
      "Aortic stenosis",
      "Pulmonary embolism",
      "Subclavian steal",
    ],
    pairWith: [
      "Exertional → aortic stenosis or HOCM",
      "Palpitations or known heart disease → arrhythmia",
      "Prolonged standing, prodrome → vasovagal",
      "Positional change, antihypertensives → orthostatic",
      "Chest pain, dyspnea, hypoxia → PE",
    ],
    distinguishFrom: [
      "Presyncope — same mechanism, no complete LOC",
      "Seizure — postictal state, tongue biting, prolonged confusion",
      "Hypoglycemia — diaphoresis, responds to glucose",
    ],
  },
  {
    id: "presyncope",
    name: "Presyncope",
    aliases: ["presyncope", "pre-syncope"],
    definition:
      "Sensation of imminent faint (lightheadedness, weakness, visual changes) without full loss of consciousness.",
    mechanism:
      "Same cerebral hypoperfusion as syncope, but perfusion recovers before consciousness is fully lost.",
    thinkOf: [
      "Vasovagal",
      "Orthostatic hypotension",
      "Arrhythmia",
      "Volume depletion",
      "Carotid sinus hypersensitivity",
    ],
    pairWith: [
      "Medications (antihypertensives, diuretics)",
      "Dehydration, bleeding",
      "Palpitations → arrhythmia (structural heart disease, electrolyte abnormality, or toxic/metabolic cause)",
      "Positional symptoms → orthostatic vitals",
    ],
    distinguishFrom: [
      "Syncope — complete LOC",
      "Vertigo — spinning sensation, usually inner ear",
      "Anxiety / hyperventilation — paresthesias, situational",
    ],
  },
  {
    id: "fever",
    name: "Fever",
    aliases: ["fever", "febrile", "pyrexia"],
    definition:
      "Elevation of body temperature above normal, usually ≥38°C (100.4°F), reflecting a shift in the hypothalamic set point.",
    mechanism:
      "Pyrogens (endogenous IL-1, IL-6, TNF from macrophages or exogenous LPS) raise the hypothalamic thermostat → prostaglandin E₂-mediated heat conservation and shivering.",
    thinkOf: [
      "Bacterial infection",
      "Viral infection",
      "Abscess / occult infection",
      "Malignancy (lymphoma)",
      "Autoimmune / inflammatory disease",
      "Drug fever",
    ],
    pairWith: [
      "Rigors, focal symptoms → bacteremia or localized infection",
      "Night sweats, weight loss → TB or lymphoma",
      "Rash, arthritis → viral or autoimmune",
      "Recent travel or exposure → endemic infection",
      "Peds: fever in neonate (<28 days) — full sepsis workup; low threshold for serious bacterial infection in infants",
    ],
    distinguishFrom: [
      "Hyperthermia — exogenous heat stroke, set point normal",
      "Factitious fever — rare, inconsistent readings",
      "Fever of unknown origin — >3 weeks, diagnosis elusive after workup",
    ],
  },
  {
    id: "headache",
    name: "Headache",
    aliases: ["headache", "head pain", "severe headache", "worst headache of life"],
    definition:
      "Pain in the head or neck region; may be primary (migraine, tension) or secondary to underlying pathology.",
    mechanism:
      "Activation of pain-sensitive structures (meninges, vessels, cranial nerves) via inflammation, traction, vasodilation, or muscle tension generates headache.",
    thinkOf: [
      "Migraine",
      "Tension-type headache",
      "Subarachnoid hemorrhage",
      "Meningitis / encephalitis",
      "Giant cell arteritis",
      "Idiopathic intracranial hypertension",
      "Brain tumor",
    ],
    pairWith: [
      "Thunderclap onset → subarachnoid hemorrhage until proven otherwise",
      "Fever, neck stiffness, photophobia → meningitis",
      "Age >50, jaw claudication, vision changes → giant cell arteritis",
      "Papilledema, obese woman → IIH",
      "Peds: morning headache with vomiting → ↑ ICP (tumor, hydrocephalus)",
    ],
    distinguishFrom: [
      "Sinus headache — facial pressure, purulent discharge",
      "Cluster headache — unilateral, periorbital, autonomic symptoms",
      "Cervicogenic — neck pain with occipital radiation",
    ],
  },
  {
    id: "cyanosis",
    name: "Cyanosis",
    aliases: ["cyanosis"],
    definition:
      "Bluish discoloration of skin or mucous membranes from increased deoxygenated hemoglobin in capillaries.",
    mechanism:
      "Visible when reduced (deoxygenated) Hb ≥ ~5 g/dL in capillaries; reflects hypoxemia, poor perfusion, or abnormal hemoglobin.",
    thinkOf: [
      "Right-to-left shunt (congenital heart disease, Eisenmenger)",
      "Severe lung disease (COPD, ARDS)",
      "Pulmonary embolism",
      "Methemoglobinemia",
      "Cold exposure / peripheral vasoconstriction",
    ],
    pairWith: [
      "Clubbing → chronic hypoxemia (CF, congenital heart disease)",
      "Polycythemia → chronic hypoxic drive",
      "Chocolate-colored blood → methemoglobinemia",
      "Differential cyanosis → PDA with R→L shunt",
    ],
    distinguishFrom: [
      "Central cyanosis — lips/tongue (hypoxemia or abnormal Hb)",
      "Peripheral cyanosis — cool extremities (low flow, not always hypoxemia)",
      "Acrocyanosis of newborn — benign peripheral cyanosis",
    ],
  },
  {
    id: "clubbing",
    name: "Clubbing",
    aliases: ["clubbing", "digital clubbing"],
    definition:
      "Bulbous enlargement of the distal digits with loss of the normal nail-bed angle.",
    mechanism:
      "Chronic platelet activation and growth factor release (often from intrapulmonary shunting) stimulate connective tissue proliferation at the nail bed.",
    thinkOf: [
      "Cystic fibrosis",
      "Bronchiectasis",
      "Lung cancer (non-small cell)",
      "Idiopathic pulmonary fibrosis",
      "Cyanotic congenital heart disease",
      "Inflammatory bowel disease",
    ],
    pairWith: [
      "Cyanosis → congenital heart disease",
      "Chronic cough, sputum → bronchiectasis / CF",
      "Weight loss, smoking → lung malignancy",
      "GI symptoms → IBD-associated clubbing",
    ],
    distinguishFrom: [
      "Nail hypertrophy without loss of Lovibond angle → pseudo-clubbing",
      "Acute clubbing is rare — think chronic process",
    ],
  },
  {
    id: "jaundice",
    name: "Jaundice",
    aliases: ["jaundice"],
    definition:
      "Yellow discoloration of skin and sclera from accumulation of bilirubin.",
    mechanism:
      "Hyperbilirubinemia deposits in tissues; may arise from increased production, hepatocellular dysfunction, or biliary obstruction.",
    thinkOf: [
      "Hemolysis (unconjugated)",
      "Hepatitis, cirrhosis (mixed/hepatocellular)",
      "Choledocholithiasis, pancreatic cancer (conjugated / obstructive)",
      "Gilbert syndrome (mild unconjugated)",
    ],
    pairWith: [
      "Dark urine, pale stools → obstructive pattern",
      "Pruritus → cholestasis",
      "RUQ pain, fever, hypotension → cholangitis",
      "AST/ALT >> alk phos → hepatocellular",
      "Alk phos ↑, GGT ↑ → cholestatic",
    ],
    distinguishFrom: [
      "Carotenemia — orange skin, sclera spared",
      "Prehepatic vs hepatic vs posthepatic — use fractionated bilirubin",
    ],
  },
  {
    id: "pruritus",
    name: "Pruritus",
    aliases: ["pruritus"],
    definition:
      "An unpleasant sensation provoking the urge to scratch, without primary skin lesions required.",
    mechanism:
      "Mediated by histamine, bile salts, opioids, and other pruritogens; cholestatic bile salt deposition is a classic cause of generalized itch.",
    thinkOf: [
      "Cholestasis (biliary obstruction, primary biliary cholangitis)",
      "Chronic kidney disease / uremia",
      "Iron deficiency",
      "Polycythemia vera",
      "Scabies, atopic dermatitis",
      "Medications (opioids)",
    ],
    pairWith: [
      "Jaundice → cholestatic liver disease",
      "Burrowing tracks → scabies",
      "Aquagenic itch after hot shower → polycythemia vera",
      "Elevated creatinine → uremic pruritus",
    ],
    distinguishFrom: [
      "Localized itch with rash → primary dermatologic condition",
      "Generalized itch without rash → systemic cause (cholestasis, CKD, hematologic)",
    ],
  },
  {
    id: "hemoptysis",
    name: "Hemoptysis",
    aliases: ["hemoptysis"],
    definition:
      "Coughing up blood or blood-streaked sputum originating from the lower respiratory tract.",
    mechanism:
      "Bleeding from bronchial or pulmonary vasculature, often from infection, malignancy, or elevated pulmonary pressures eroding airways.",
    thinkOf: [
      "Bronchiectasis",
      "Tuberculosis",
      "Lung cancer",
      "Pulmonary embolism / infarction",
      "Mitral stenosis (pulmonary venous hypertension)",
      "Goodpasture / granulomatosis with polyangiitis",
    ],
    pairWith: [
      "Fever, night sweats, weight loss → TB or malignancy",
      "Recurrent infections, copious sputum → bronchiectasis / CF",
      "Hematuria → pulmonary-renal syndrome",
      "Diastolic rumble, AF → mitral stenosis",
    ],
    distinguishFrom: [
      "Hematemesis — coffee-ground or acidic, history of vomiting",
      "Epistaxis with posterior drip — bleeding from nose",
      "True hemoptysis is frothy and bright red",
    ],
  },
  {
    id: "melena",
    name: "Melena",
    aliases: ["melena"],
    definition:
      "Black, tarry stools from digested blood, typically indicating upper GI bleeding.",
    mechanism:
      "Hemoglobin is broken down by gastric acid and intestinal bacteria into hematin, producing dark, sticky, malodorous stool.",
    thinkOf: [
      "Peptic ulcer disease",
      "Esophageal varices",
      "Mallory-Weiss tear",
      "Gastritis (NSAIDs, alcohol)",
      "Malignancy (gastric, esophageal)",
    ],
    pairWith: [
      "Hematemesis → active upper GI bleed",
      "NSAID or alcohol use → PUD / gastritis",
      "Cirrhosis, jaundice → varices",
      "Lightheadedness, tachycardia → hemodynamic instability",
    ],
    distinguishFrom: [
      "Hematochezia — bright red blood per rectum, often lower GI",
      "Iron supplements or bismuth — black stool but not tarry / malodorous",
    ],
  },
  {
    id: "hematochezia",
    name: "Hematochezia",
    aliases: ["hematochezia"],
    definition:
      "Passage of bright red blood per rectum, usually from lower GI bleeding but can occur with rapid upper GI bleeding.",
    mechanism:
      "Fresh blood passes through the colon when bleeding is distal (or massive and rapid from proximal sources).",
    thinkOf: [
      "Hemorrhoids",
      "Anal fissure",
      "Diverticulosis",
      "Ischemic colitis",
      "Inflammatory bowel disease",
      "Colorectal cancer",
      "Angiodysplasia",
    ],
    pairWith: [
      "Painful defecation, tear at anus → fissure",
      "Painless bleeding → hemorrhoids or diverticulosis",
      "Age >50, weight loss → colorectal cancer",
      "Hypotension with maroon stools → brisk upper GI bleed",
    ],
    distinguishFrom: [
      "Melena — black, tarry upper GI bleed",
      "Hematuria — blood from urinary tract",
    ],
  },
  {
    id: "hematuria",
    name: "Hematuria",
    aliases: ["hematuria", "blood in urine", "gross hematuria"],
    definition:
      "Presence of red blood cells in the urine, visible (gross) or detected on dipstick/microscopy.",
    mechanism:
      "Bleeding from anywhere in the urinary tract — glomerulus (inflammation, immune deposition), tubules, or urothelium (stones, infection, malignancy).",
    thinkOf: [
      "Nephrolithiasis",
      "UTI / pyelonephritis",
      "Glomerulonephritis (IgA, post-strep)",
      "Bladder or renal cell carcinoma",
      "Trauma / catheterization",
      "Anticoagulation",
    ],
    pairWith: [
      "Dysuria, frequency → UTI",
      "Colicky flank pain → stone",
      "RBC casts, proteinuria → glomerulonephritis",
      "Hemoptysis → pulmonary-renal syndrome (Goodpasture, GPA)",
      "Peds: gross hematuria after URI → IgA nephropathy; tea-colored urine with periorbital edema → post-strep GN",
    ],
    distinguishFrom: [
      "Hemoglobinuria — dipstick positive, no RBCs on microscopy (hemolysis)",
      "Myoglobinuria — brown urine after rhabdomyolysis",
      "Menstrual contamination — consider in women",
    ],
  },
  {
    id: "dysuria",
    name: "Dysuria",
    aliases: ["dysuria", "painful urination", "burning with urination"],
    definition:
      "Painful or burning sensation during urination.",
    mechanism:
      "Inflammation of the urethra or bladder mucosa (infection, chemical irritation, or stones) lowers the threshold for pain with urine flow.",
    thinkOf: [
      "Cystitis (UTI)",
      "Urethritis (E. coli, Chlamydia, gonorrhea)",
      "Vaginitis (irritative symptoms)",
      "Urinary tract stones",
      "Interstitial cystitis",
    ],
    pairWith: [
      "Frequency, urgency, suprapubic pain → cystitis",
      "Discharge, sexual exposure → urethritis / STI",
      "Flank pain, fever → pyelonephritis",
      "Hematuria → stone or UTI",
      "Peds: fever without source in young child — consider UTI; circumcision status and voiding dysfunction matter in boys",
    ],
    distinguishFrom: [
      "Urinary frequency without pain → polyuria (DM, DI)",
      "Pelvic pain without dysuria → gynecologic cause",
      "Asymptomatic bacteriuria — positive culture without symptoms",
    ],
  },
  {
    id: "polyuria-polydipsia",
    name: "Polyuria and Polydipsia",
    aliases: [
      "polyuria",
      "polydipsia",
      "polyuria and polydipsia",
      "increased urination",
      "excessive thirst",
    ],
    definition:
      "Excessive urine output (>3 L/day) often accompanied by increased thirst and fluid intake.",
    mechanism:
      "Osmotic diuresis (hyperglycemia), impaired ADH action or secretion (DI), or primary polydipsia drives increased urine volume and compensatory thirst.",
    thinkOf: [
      "Diabetes mellitus (osmotic diuresis)",
      "Diabetes insipidus (central or nephrogenic)",
      "Primary polydipsia (psychogenic)",
      "Hypercalcemia",
      "Recovery phase of ATN",
    ],
    pairWith: [
      "Hyperglycemia, weight loss, ketones → DKA / new-onset DM",
      "Dilute urine with high serum osmolality → central DI",
      "Dilute urine with hypernatremia, lithium use → nephrogenic DI",
      "Confusion, long-term psych meds → primary polydipsia",
      "Peds: enuresis, nocturia, growth concerns — test glucose; infant with irritability and dehydration → consider DI",
    ],
    distinguishFrom: [
      "Urinary frequency with normal volume → cystitis, BPH",
      "Nocturia alone → BPH, heart failure, not necessarily polyuria",
      "Diuretic use — iatrogenic increased urine output",
    ],
  },
  {
    id: "watery-diarrhea",
    name: "Watery Diarrhea",
    aliases: ["watery diarrhea"],
    definition:
      "Frequent loose stools with high water content, reflecting secretory or osmotic fluid loss into the bowel lumen.",
    mechanism:
      "Toxins, pathogens, or malabsorption disrupt normal intestinal absorption or stimulate secretion (e.g., ↑ cAMP in enterocytes) → large-volume stool losses.",
    thinkOf: [
      "Viral gastroenteritis (norovirus, rotavirus)",
      "Cholera (rice-water stools)",
      "Enterotoxigenic E. coli (traveler's diarrhea)",
      "C. difficile colitis",
      "Carcinoid syndrome, VIPoma (secretory)",
      "Lactose intolerance / osmotic diarrhea",
    ],
    pairWith: [
      "Vomiting, dehydration signs → acute gastroenteritis",
      "Recent antibiotics → C. difficile",
      "Travel history → enterotoxigenic E. coli, cholera",
      "Hypotension, tachycardia → severe volume depletion",
      "Peds: rotavirus, quick dehydration in infants — watch urine output and mental status",
    ],
    distinguishFrom: [
      "Bloody diarrhea — invasive or inflammatory colitis (Shigella, Campylobacter, IBD)",
      "Fatty/greasy stools — steatorrhea from malabsorption",
      "Constipation — obstipation with overflow incontinence",
    ],
  },
  {
    id: "nausea",
    name: "Nausea",
    aliases: ["nausea", "nauseated"],
    definition:
      "Unpleasant sensation of needing to vomit, with or without actual emesis.",
    mechanism:
      "Activation of the vomiting center and chemoreceptor trigger zone by GI distention, toxins, vestibular input, or ↑ ICP produces the subjective urge to vomit.",
    thinkOf: [
      "Gastroenteritis",
      "Pregnancy (morning sickness)",
      "Medications (chemotherapy, opioids)",
      "Migraine",
      "Pancreatitis, cholecystitis",
      "DKA / uremia",
      "Increased intracranial pressure",
    ],
    pairWith: [
      "Vomiting → gastroenteritis, obstruction, ↑ ICP",
      "RUQ pain, fever → cholecystitis or hepatitis",
      "Epigastric pain radiating to back → pancreatitis",
      "Hyperglycemia, Kussmaul breathing → DKA",
      "Peds: bilious vomiting in neonate — surgical emergency (malrotation); cyclic vomiting may suggest metabolic disorder",
    ],
    distinguishFrom: [
      "Vomiting — active emesis has occurred",
      "Anorexia without nausea — systemic illness, depression",
      "Early satiety — gastric outlet obstruction or gastroparesis",
    ],
  },
  {
    id: "vomiting",
    name: "Vomiting",
    aliases: ["vomiting"],
    definition:
      "Forceful expulsion of gastric contents through the mouth due to coordinated contraction of the diaphragm and abdominal wall.",
    mechanism:
      "Triggered when the vomiting center (medulla) is activated by GI irritation, vestibular input, chemoreceptor trigger zone (bloodborne toxins, uremia), or increased intracranial pressure.",
    thinkOf: [
      "Gastroenteritis",
      "Bowel obstruction",
      "Pregnancy (hyperemesis gravidarum)",
      "Increased intracranial pressure",
      "DKA / uremia / drug toxicity (CTZ activation)",
      "Migraine, vestibular disorders",
    ],
    pairWith: [
      "Watery diarrhea → gastroenteritis",
      "Bilious emesis in neonate → malrotation/volvulus until proven otherwise (peds surgical emergency)",
      "Headache, papilledema → ↑ ICP",
      "Kussmaul respirations, hyperglycemia → DKA",
      "Projectile vomiting in infant → pyloric stenosis (peds)",
    ],
    distinguishFrom: [
      "Regurgitation — passive, effortless reflux",
      "Retching — unproductive vomiting effort",
      "Hematemesis — blood in vomitus (upper GI bleed)",
    ],
  },
  {
    id: "dry-mucous-membranes",
    name: "Dry Mucous Membranes",
    aliases: ["dry mucous membranes", "dry mucosa"],
    definition:
      "Reduced moisture of oral and other mucosal surfaces, a clinical sign of hypovolemia or dehydration.",
    mechanism:
      "Total body water deficit reduces salivary flow and mucosal hydration; sympathetic activation during hypovolemia also diverts fluid from nonessential secretions.",
    thinkOf: [
      "Dehydration from diarrhea or vomiting",
      "Poor oral intake",
      "Diabetes mellitus (hyperglycemic osmotic diuresis)",
      "Fever / heat exposure",
      "Diuretic use",
    ],
    pairWith: [
      "Decreased skin turgor, tachycardia, hypotension → hypovolemia",
      "Polyuria, polydipsia → hyperglycemia",
      "Peds: same sign as adults but assess capillary refill, sunken fontanelle (infants), and lethargy — mucosa alone is insufficient",
    ],
    distinguishFrom: [
      "Xerostomia from anticholinergics or Sjögren syndrome — may occur without volume depletion",
      "Kussmaul breathing with dry mouth — DKA (dehydration plus acidosis)",
    ],
  },
  {
    id: "decreased-skin-turgor",
    name: "Decreased Skin Turgor",
    aliases: [
      "decreased skin turgor",
      "poor skin turgor",
      "reduced skin turgor",
    ],
    definition:
      "Skin that tents or returns slowly to normal after being pinched, indicating reduced tissue turgor from interstitial/total body water loss.",
    mechanism:
      "Dehydration lowers interstitial and intracellular water, decreasing skin elasticity and prolonging recoil time after deformation.",
    thinkOf: [
      "Dehydration (GI losses, poor intake)",
      "Hypernatremia",
      "Diabetic ketoacidosis / HHS",
      "Burns (capillary leak and evaporative loss)",
    ],
    pairWith: [
      "Dry mucous membranes, tachycardia, orthostasis → hypovolemia",
      "Watery diarrhea and vomiting → GI fluid losses",
      "Peds: highly sensitive sign in infants/young children (skin tents for seconds); less reliable in elderly due to age-related loss of elasticity",
      "Peds: combine with sunken eyes/fontanelle, dry diapers, and irritability/lethargy",
    ],
    distinguishFrom: [
      "Edema — fluid overload, not dehydration",
      "Normal skin in obese or elderly patients — turgor testing less reliable",
      "Cutis laxa / Ehlers-Danlos — chronic poor elasticity unrelated to acute volume status",
    ],
  },
  {
    id: "hyperactive-bowel-sounds",
    name: "Hyperactive Bowel Sounds",
    aliases: ["hyperactive bowel sounds", "increased bowel sounds"],
    definition:
      "Loud, frequent bowel sounds on auscultation, reflecting increased peristaltic activity.",
    mechanism:
      "Irritation or distention of the bowel wall stimulates motility; early obstruction and gastroenteritis increase propagated contractions audible as hyperactive sounds.",
    thinkOf: [
      "Gastroenteritis / diarrhea",
      "Early small bowel obstruction",
      "Laxative use",
      "Malabsorption",
      "Subacute mesenteric ischemia (early hyperactive phase)",
    ],
    pairWith: [
      "Watery diarrhea, vomiting → infectious gastroenteritis",
      "Crampy abdominal pain, then obstipation → early obstruction",
      "Peds: intussusception may have early hyperactive sounds, then hypoactive/absent as ischemia progresses — don't be reassured by initial hyperactivity",
      "Absent bowel sounds later → ileus or late obstruction",
    ],
    distinguishFrom: [
      "Hypoactive or absent bowel sounds — ileus, peritonitis, late obstruction",
      "Normal bowel sounds — not hyperactive",
      "Borborygmi — very loud \"stomach growling\" without pathology",
    ],
  },
];

const symptomById = new Map(SYMPTOMS.map((s) => [s.id, s]));

export function getSymptomById(id: string): SymptomEntry | undefined {
  return symptomById.get(id);
}

export interface SymptomAliasMatch {
  alias: string;
  symptomId: string;
}

export function buildSymptomAliasIndex(): SymptomAliasMatch[] {
  const matches: SymptomAliasMatch[] = [];
  for (const symptom of SYMPTOMS) {
    for (const alias of symptom.aliases) {
      matches.push({ alias: alias.toLowerCase(), symptomId: symptom.id });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
