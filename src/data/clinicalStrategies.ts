export interface ClinicalStrategyEntry {
  id: string;
  name: string;
  etymology: string;
  aliases: string[];
  definition: string;
  details: string[];
  boardsPearls: string[];
  pediatrics?: string;
}

export const CLINICAL_STRATEGIES: ClinicalStrategyEntry[] = [
  {
    id: "rate-control",
    name: "Rate control",
    etymology: "rate = ventricular beats per minute + control = restraint/regulation",
    aliases: ["rate control", "rate-control"],
    definition:
      "Management strategy for atrial fibrillation/flutter that limits ventricular response without necessarily restoring sinus rhythm.",
    details: [
      "Goal: adequate ventricular rate (often <110 bpm at rest) and symptom relief while accepting continued AF",
      "First-line agents: β-blockers (metoprolol, atenolol), nondihydropyridine CCBs (diltiazem, verapamil)",
      "Digoxin for rate control (especially with HF or sedentary patients; less effective with exertion)",
      "Dihydropyridine CCBs (amlodipine, nifedipine) are not used for AV nodal rate control",
      "Often preferred in elderly patients and when rhythm-control drugs are high risk",
    ],
    boardsPearls: [
      "Rate control vs rhythm control: similar mortality in many AF patients (AFFIRM trial framework)",
      "WPW + AF: avoid AV nodal blockers (β-blocker, nondihydropyridine CCB, digoxin) → use procainamide or cardioversion",
      "Nondihydropyridine CCB + β-blocker → additive bradycardia/AV block",
      "Amiodarone can provide both rate and rhythm control but is not first-line for rate-only strategy",
    ],
    pediatrics:
      "Rate control in pediatric AF/SVT uses weight-based β-blockers or digoxin; same AV nodal physiology applies.",
  },
  {
    id: "rhythm-control",
    name: "Rhythm control",
    etymology: "Greek rhythmos = measured flow/beat + control = restraint/regulation",
    aliases: ["rhythm control", "rhythm-control"],
    definition:
      "Management strategy for atrial fibrillation/flutter aimed at restoring and maintaining sinus rhythm.",
    details: [
      "Goal: cardioversion to sinus rhythm and prevention of AF recurrence",
      "Electrical cardioversion or chemical cardioversion (antiarrhythmics)",
      "Rhythm-control drugs: amiodarone, flecainide, propafenone, sotalol, dofetilide (patient- and substrate-specific)",
      "Anticoagulate ≥3 weeks before elective cardioversion if AF >48 h or duration unknown, or perform TEE to exclude LA thrombus",
      "May be preferred in symptomatic younger patients, tachycardia-mediated cardiomyopathy, or difficult rate control",
    ],
    boardsPearls: [
      "Cardioversion without anticoagulation if AF <48 h and low thromboembolic risk — otherwise anticoagulate or TEE first",
      "Flecainide/propafenone — avoid in structural heart disease or CAD (proarrhythmia risk)",
      "Amiodarone effective for rhythm control but long-term toxicity limits use",
      "Rhythm control does not consistently outperform rate control for survival — anticoagulation still required by stroke risk",
    ],
    pediatrics:
      "Rhythm control in children often involves cardioversion for hemodynamically significant AF; antiarrhythmic choice is specialist-guided.",
  },
  {
    id: "squatting",
    name: "Squatting",
    etymology: "squat = crouched posture; increases systemic vascular resistance",
    aliases: ["squatting", "squatting maneuver", "squats"],
    definition:
      "Physical maneuver that increases systemic vascular resistance (SVR) and venous return; used instinctively by children with tetralogy of Fallot during hypercyanotic spells.",
    details: [
      "↑ SVR → ↑ systemic afterload → favors left-to-right flow or reduces right-to-left shunt across VSD",
      "In ToF tet spell: squatting ↑ SVR, ↓ R→L shunt, improves pulmonary blood flow and oxygenation",
      "Opposite of Valsalva/standing in HOCM (which ↓ preload and worsens LVOT obstruction)",
      "Knee-chest position in infants provides similar ↑ SVR effect",
    ],
    boardsPearls: [
      "Child with cyanosis who squats → think tetralogy of Fallot",
      "Squatting ↓ murmur intensity in HOCM (↑ preload) but helps cyanosis in ToF (↑ SVR)",
      "Hypercyanotic spell treatment: knee-chest, O₂, morphine, phenylephrine (↑ SVR), fluids",
    ],
    pediatrics:
      "Toddlers with ToF may assume squatting during play to relieve cyanosis — pathognomonic behavior on boards.",
  },
  {
    id: "valsalva-maneuver",
    name: "Valsalva Maneuver",
    etymology: "eponym: Antonio Maria Valsalva + maneuver = deliberate physical action",
    aliases: [
      "valsalva",
      "valsalva maneuver",
      "valsalva manoeuvre",
      "valsalva strain",
      "bearing down",
      "forced expiration against closed glottis",
    ],
    definition:
      "Physiologic maneuver of forced expiration against a closed glottis (straining/bearing down), transiently raising intrathoracic and intra-abdominal pressure and altering venous return and cardiac murmur intensity.",
    details: [
      "Phase 1: ↑ intrathoracic pressure → brief ↑ arterial pressure",
      "Phase 2: ↓ venous return → ↓ preload → ↓ stroke volume → ↓ blood pressure",
      "Phase 3: further ↓ pressure as strain continues",
      "Phase 4: release → venous return surges → reflex ↑ heart rate and blood pressure",
      "Used clinically to accentuate or diminish heart murmurs and in autonomic testing",
    ],
    boardsPearls: [
      "Valsalva ↓ preload (↓ venous return) — key for murmur differentiation",
      "HOCM murmur ↑ with Valsalva and standing (↓ preload worsens LVOT obstruction)",
      "Aortic stenosis murmur ↓ with Valsalva (less stroke volume across stenotic valve)",
      "Most other murmurs (MR, VSD, AR) ↓ with Valsalva because ↓ preload",
      "Squatting ↑ preload — opposite effect; HOCM murmur ↓ with squatting",
      "Prolonged Valsalva during labor, heavy lifting, or defecation can provoke syncope",
      "Used in autonomic testing — abnormal HR/BP response suggests dysautonomia",
    ],
    pediatrics:
      "Same hemodynamic principles apply; HOCM and ToF boards questions use squatting vs Valsalva/standing as opposing maneuvers.",
  },
  {
    id: "titrate",
    name: "Titrate",
    etymology: "Latin titulus = measured mark → titrate = adjust in measured steps",
    aliases: [
      "titrate",
      "titrates",
      "titrating",
      "titrated",
      "titration",
      "dose titration",
      "dose titrate",
      "titrate dose",
      "titrate medication",
    ],
    definition:
      "Incremental adjustment of medication dose (or infusion rate) based on clinical response, vital signs, or laboratory targets until efficacy is achieved without unacceptable toxicity.",
    details: [
      "Start low (or weight-based loading when indicated), then increase or decrease in stepwise fashion",
      "Recheck interval depends on drug half-life and risk (e.g., levothyroxine every 6–8 weeks; insulin daily)",
      "Used when therapeutic window is narrow or response is highly individual",
      "Opposite of fixed one-size dose when patient factors dominate (renal function, weight, sensitivity)",
    ],
    boardsPearls: [
      "Titrate levothyroxine to normalize TSH in hypothyroidism",
      "Titrate warfarin to target INR; bridge with heparin when initiating",
      "Titrate insulin to glucose targets in diabetes",
      "Titrate diuretics in heart failure to euvolemia without hypotension or renal injury",
      "vs titer — titrate = adjust dose; titer = antibody dilution endpoint on serology",
      "Start low, go slow for drugs with delayed steady state (levothyroxine, amiodarone)",
    ],
    pediatrics:
      "Pediatric dosing is weight-based and often titrated (levothyroxine in congenital hypothyroidism, insulin in type 1 diabetes); growth and puberty change requirements over time.",
  },
  {
    id: "migraine-prophylaxis",
    name: "Migraine prophylaxis",
    etymology: "Greek hēmi = half + kranion = skull (migraine) + Greek prophylaxis = guard before",
    aliases: [
      "migraine prophylaxis",
      "migraine prevention",
      "preventive migraine therapy",
      "migraine prophylactic therapy",
      "prophylactic migraine treatment",
    ],
    definition:
      "Preventive pharmacologic strategy to reduce migraine attack frequency, severity, and disability in patients with recurrent or disabling migraines — distinct from abortive (acute) treatment.",
    details: [
      "Indicated when migraines are frequent (often ≥4 headache days/month), prolonged, or cause significant disability despite abortive therapy",
      "First-line agents (Step 1 favorites): β-blockers (propranolol, metoprolol), anticonvulsants (topiramate, valproate), tricyclic antidepressants (amitriptyline)",
      "Other options: calcium channel blockers (verapamil for cluster overlap; less first-line for migraine), CGRP monoclonal antibodies (more Step 2/3 detail)",
      "Requires weeks of daily dosing before benefit; continue 3–6 months after good control before taper trial",
      "Avoid β-blockers in asthma/COPD (use cardioselective agents cautiously or choose non-β-blocker); valproate teratogenic — avoid in pregnancy",
      "Lifestyle: sleep regularity, hydration, trigger avoidance complement pharmacotherapy",
    ],
    boardsPearls: [
      "Prophylaxis = daily prevention; abortive = treat acute attack (triptans, NSAIDs, antiemetics)",
      "Propranolol, topiramate, amitriptyline, valproate — classic migraine prophylaxis list",
      "β-blocker side effects: bradycardia, bronchospasm, fatigue, masked hypoglycemia",
      "Topiramate: weight loss, paresthesias, cognitive slowing; teratogenic risk",
      "Do not use triptans for prophylaxis — they are acute abortive agents",
    ],
    pediatrics:
      "Pediatric migraine prophylaxis uses weight-based topiramate, propranolol, or amitriptyline when attacks are frequent/disabling; behavioral therapy and lifestyle measures are first-line in many children before daily medication.",
  },
  {
    id: "fundal-height",
    name: "Fundal Height",
    etymology: "Latin fundus = bottom/base (uterine top) + Old English hiehthu = height",
    aliases: [
      "fundal height",
      "fundal heights",
      "uterine fundal height",
      "symphysis-fundal height",
      "sfh",
    ],
    definition:
      "Clinical measurement from the superior border of the symphysis pubis to the uterine fundus with a tape measure; used to estimate gestational age and screen for abnormal fetal growth or amniotic fluid volume.",
    details: [
      "Measured with patient supine, bladder empty, uterus not contracted",
      "After ~12–14 weeks the uterus rises out of the pelvis; fundal height becomes clinically useful",
      "From ~20 to 36 weeks gestation: fundal height in centimeters approximates gestational age in weeks (±2–3 cm)",
      "Fundal height below dates → IUGR, oligohydramnios, fetal anomaly, wrong dates",
      "Fundal height above dates → macrosomia, polyhydramnios, multifetal pregnancy, wrong dates",
      "Less reliable with obesity, fibroids, fetal malposition, or hydramnios",
    ],
    boardsPearls: [
      "SFH in cm ≈ gestational weeks (20–36 weeks) — classic boards approximation",
      "Small for dates → consider IUGR, oligohydramnios (Potter sequence association), chromosomal abnormality",
      "Large for dates → gestational diabetes/macrosomia, polyhydramnios (e.g., fetal GI atresia, diabetes, anencephaly with open neural tube)",
      "Confirm discrepancies with ultrasound biometry and amniotic fluid index",
      "vs abdominal girth — fundal height is symphysis-to-fundus linear measure, not abdominal circumference",
    ],
    pediatrics:
      "Fundal height tracks in utero fetal growth; after birth, length/weight/head circumference percentiles replace SFH for growth monitoring.",
  },
  {
    id: "apgar-score",
    name: "APGAR Score",
    etymology: "eponym: Virginia Apgar + score = numerical rating",
    aliases: [
      "apgar",
      "apgar score",
      "apgar scores",
      "apgar scoring",
      "apgar assessment",
      "apgar test",
      "apgar evaluation",
    ],
    definition:
      "Rapid bedside assessment of newborn transition at 1 and 5 minutes after birth, scoring five parameters (0–2 each) to identify infants needing resuscitation or ongoing support.",
    details: [
      "A — Appearance (skin color): 2 pink all over; 1 pink body, blue extremities; 0 pale/blue all over",
      "P — Pulse (heart rate): 2 >100 bpm; 1 <100 bpm; 0 absent",
      "G — Grimace (reflex irritability): 2 cough/sneeze/cry with stimulation; 1 grimace only; 0 no response",
      "A — Activity (muscle tone): 2 active motion; 1 some flexion; 0 limp/flaccid",
      "R — Respiration: 2 strong cry; 1 weak/irregular; 0 absent",
      "Total score 0–10; recorded at 1 minute and 5 minutes (and at 10/20 minutes if <7 at 5 minutes)",
      "Score <7 at 5 minutes suggests need for evaluation and possible intervention",
    ],
    boardsPearls: [
      "APGAR mnemonic: Appearance, Pulse, Grimace, Activity, Respiration",
      "1 and 5 minutes — standard timing; not a long-term neurologic outcome predictor alone",
      "Low score at 1 min may improve by 5 min after resuscitation — reassess",
      "Score 0–3 severe distress; 4–6 moderate; 7–10 generally reassuring",
      "vs Silverman-Anderson — respiratory distress scoring in neonates, not whole newborn status",
      "Birth asphyxia workup uses cord gases and neuro exam — APGAR supports but does not define HIE alone",
    ],
    pediatrics:
      "APGAR is a neonatal assessment tool; premature infants may score lower on Activity and Respiration without necessarily indicating poor long-term outcome. Resuscitation follows NRP algorithms independent of waiting for 1-minute score.",
  },
  {
    id: "glycemic-control",
    name: "Glycemic Control",
    etymology: "Greek glykys = sweet + haima = blood + Latin control = restraint/regulation",
    aliases: [
      "glycemic control",
      "glycaemic control",
      "blood glucose control",
      "glucose control",
      "tight glycemic control",
      "glycemic management",
    ],
    definition:
      "Therapeutic strategy to maintain blood glucose near normal range in diabetes mellitus, reducing acute hyperglycemic complications and long-term microvascular and macrovascular injury.",
    details: [
      "Monitored with self-glucose checks, continuous glucose monitoring, and HbA1c (~3-month average glycemia)",
      "Type 1 DM: insulin replacement (basal-bolus or pump) matched to carbohydrate intake and activity",
      "Type 2 DM: lifestyle (diet, exercise, weight loss) plus metformin first-line; add agents per comorbidities (SGLT2i/GLP-1 for CV/renal benefit)",
      "Targets individualized — tighter control in younger patients with short disease duration; less strict in elderly, hypoglycemia-prone, or limited life expectancy",
      "Intensive control delays diabetic nephropathy, retinopathy, and neuropathy but raises hypoglycemia risk",
    ],
    boardsPearls: [
      "HbA1c reflects ~120-day average glucose; goal often <7% in many adults but individualize",
      "Microalbuminuria signals early diabetic nephropathy — glycemic and BP control are renoprotective",
      "Metformin first-line in T2DM; insulin required in T1DM and advanced T2DM",
      "SGLT2 inhibitors and GLP-1 agonists improve outcomes beyond glucose lowering alone",
      "DKA/hypoglycemia are acute risks of poor vs overly aggressive control",
      "vs glycemic monitoring alone — control implies active therapy adjustment, not just measurement",
      "vs lipid/BP control — parallel CV risk reduction, distinct glucose targets",
    ],
    pediatrics:
      "Pediatric T1DM targets slightly higher A1c than adults to limit hypoglycemia-related neurocognitive harm; family-centered insulin regimens and carbohydrate counting are core.",
  },
  {
    id: "cbt",
    name: "Cognitive Behavioral Therapy",
    etymology: "Latin cognoscere = to know + Latin comportare = behave + Greek therapeia = healing",
    aliases: [
      "cbt",
      "cognitive behavioral therapy",
      "cognitive behavioural therapy",
      "cognitive behavior therapy",
      "cognitive-behavioral therapy",
    ],
    definition:
      "Structured psychotherapy targeting maladaptive thoughts (cognitions) and behaviors to reduce psychiatric symptoms and improve functioning — evidence-based for depression, anxiety, PTSD, and adjunctive use in psychosis and adjustment disorders.",
    details: [
      "Cognitive restructuring — identify and challenge distorted automatic thoughts",
      "Behavioral activation — schedule rewarding activities in depression",
      "Exposure and response prevention — OCD and phobias",
      "Skills training — coping, problem-solving, relapse prevention",
      "Time-limited, goal-directed sessions with homework between visits",
    ],
    boardsPearls: [
      "First-line psychotherapy for mild–moderate MDD and anxiety disorders",
      "As effective as SSRIs for many depression/anxiety cases; combined therapy + SSRI for severe depression",
      "CBT for psychosis — adjunct to antipsychotics in delusional disorder and schizophrenia",
      "Adjustment disorder — supportive therapy and CBT preferred over medication initially",
      "vs psychoanalysis — CBT is present-focused, structured, shorter duration",
      "Peds: CBT adapted for children with anxiety, OCD, and depression; family involvement common",
    ],
    pediatrics:
      "Evidence-supported for pediatric anxiety, OCD, and depression; parental involvement and school coordination improve outcomes.",
  },
];

const strategyById = new Map(
  CLINICAL_STRATEGIES.map((entry) => [entry.id, entry]),
);

export function getClinicalStrategyById(
  id: string,
): ClinicalStrategyEntry | undefined {
  return strategyById.get(id);
}

export interface ClinicalStrategyAliasMatch {
  alias: string;
  clinicalStrategyId: string;
}

export function buildClinicalStrategyAliasIndex(): ClinicalStrategyAliasMatch[] {
  const matches: ClinicalStrategyAliasMatch[] = [];
  for (const entry of CLINICAL_STRATEGIES) {
    for (const alias of entry.aliases) {
      matches.push({
        alias: alias.toLowerCase(),
        clinicalStrategyId: entry.id,
      });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
