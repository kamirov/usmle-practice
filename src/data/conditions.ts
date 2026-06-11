export interface ConditionEntry {
  id: string;
  name: string;
  aliases: string[];
  definition: string;
  pathophysiology: string;
  classicPresentation: string[];
  keyFindings?: string[];
  keyLabs?: string[];
  associations?: string[];
  complications?: string[];
  distinguishFrom?: string[];
  treatment: string[];
  boardsPearls: string[];
  pediatrics?: string;
}

export const CONDITIONS: ConditionEntry[] = [
  {
    id: "myocardial-infarction",
    name: "Myocardial Infarction",
    aliases: [
      "myocardial infarction",
      "mi",
      "heart attack",
      "acute mi",
      "stemi",
      "nstemi",
      "acute coronary syndrome",
      "acs",
      "transmural infarction",
      "subendocardial infarction",
    ],
    definition:
      "Acute myocardial necrosis from prolonged coronary ischemia, usually due to plaque rupture and thrombotic occlusion.",
    pathophysiology:
      "Atherosclerotic plaque rupture → platelet aggregation and thrombus → coronary occlusion → ischemia beyond ~20 min causes irreversible myocyte death; reperfusion injury can follow revascularization.",
    classicPresentation: [
      "Crushing substernal chest pain radiating to left arm/jaw",
      "Diaphoresis, nausea, dyspnea",
      "Risk factors: HTN, DM, smoking, hyperlipidemia",
    ],
    keyFindings: [
      "ST elevation (STEMI) or ST depression/T-wave changes (NSTEMI)",
      "New Q waves on ECG (transmural infarct)",
      "S4 gallop, new mitral regurgitation murmur",
    ],
    keyLabs: [
      "↑ Troponin I/T (most specific; rises in 3–4 h)",
      "↑ CK-MB (less specific; useful for reinfarction timing)",
    ],
    complications: [
      "Arrhythmias (VF within 24 h, heart block)",
      "Papillary muscle rupture → acute MR (3–5 days)",
      "Free wall rupture → tamponade (5–14 days)",
      "Ventricular aneurysm, Dressler syndrome",
    ],
    distinguishFrom: [
      "Unstable angina — no troponin rise",
      "Aortic dissection — tearing pain, unequal BP",
      "Pericarditis — diffuse ST elevation, PR depression",
    ],
    treatment: [
      "Reperfusion: PCI preferred, or fibrinolysis if PCI unavailable",
      "Antiplatelet (aspirin + P2Y12 inhibitor), anticoagulation, β-blocker, statin",
    ],
    boardsPearls: [
      "STEMI: ST elevation in contiguous leads → culprit artery territory",
      "Anterior MI (LAD): V1–V4; Inferior MI (RCA): II, III, aVF",
      "Reperfusion therapy: PCI or fibrinolysis within time window",
      "Post-MI complications by timing: VF (24 h), papillary rupture (3–5 d), free wall rupture (5–14 d)",
      "Cardiogenic shock post-MI → large infarct, ↓ EF, pulmonary edema; may need IABP and urgent revascularization",
    ],
    pediatrics:
      "MI rare in children; consider Kawasaki disease (coronary aneurysm/thrombosis), anomalous coronary origin, or hypercoagulability. Chest pain in adolescents still warrants ECG and troponin when ischemia is suspected.",
  },
  {
    id: "valvular-heart-disease",
    name: "Valvular Heart Disease",
    aliases: [
      "valvular heart disease",
      "valvular disease",
      "heart valve disease",
    ],
    definition:
      "Structural or functional abnormality of cardiac valves causing stenosis, regurgitation, or both.",
    pathophysiology:
      "Stenosis increases pressure gradient across valve → pressure overload (LV for AS, LA for MS); regurgitation causes volume overload → chamber dilation and eventual heart failure.",
    classicPresentation: [
      "Exertional dyspnea, orthopnea, PND",
      "Angina (aortic stenosis — fixed CO)",
      "Rheumatic fever history (mitral stenosis)",
    ],
    keyFindings: [
      "Aortic stenosis: crescendo-decrescendo murmur at RUSB, radiates to carotids, ↓ with Valsalva",
      "Mitral regurgitation: holosystolic murmur at apex → axilla",
      "Mitral stenosis: diastolic rumble at apex, opening snap",
    ],
    keyLabs: ["Echocardiography — gold standard for severity and etiology"],
    associations: [
      "Rheumatic heart disease",
      "Bicuspid aortic valve (aortic stenosis)",
      "MVP, endocarditis (mitral regurgitation)",
    ],
    distinguishFrom: [
      "Hypertrophic cardiomyopathy — murmur ↑ with Valsalva",
      "Functional murmurs — benign, no symptoms",
    ],
    treatment: [
      "Medical: diuretics for congestion; endocarditis prophylaxis when indicated",
      "Definitive: valve repair/replacement when symptomatic or severe stenosis",
    ],
    boardsPearls: [
      "AS triad: angina, syncope, heart failure (poor prognosis once symptomatic)",
      "MS → LA enlargement → atrial fibrillation → thromboembolism",
      "Acute MR from papillary muscle rupture post-MI",
    ],
  },
  {
    id: "infective-endocarditis",
    name: "Infective Endocarditis",
    aliases: [
      "infective endocarditis",
      "bacterial endocarditis",
      "subacute bacterial endocarditis",
      "acute bacterial endocarditis",
      "endocarditis",
      "sbe",
      "abe",
    ],
    definition:
      "Infection of the endocardium, usually involving heart valves, with microbial vegetations that can embolize and destroy valve tissue.",
    pathophysiology:
      "Endothelial injury (valve damage, turbulence) → platelet-fibrin thrombus → bacterial seeding during bacteremia → vegetations on valves → valve destruction, abscess formation, and septic emboli.",
    classicPresentation: [
      "Fever, new or changing murmur, fatigue",
      "Subacute (viridans strep): after dental work on abnormal valve",
      "Acute (S. aureus): rapid destruction, often normal valves or IVDU",
    ],
    keyFindings: [
      "New regurgitant murmur",
      "Janeway lesions (painless palm/sole macules)",
      "Osler nodes (painful finger/toe nodules)",
      "Splinter hemorrhages, Roth spots (retinal hemorrhage with pale center)",
    ],
    keyLabs: [
      "Positive blood cultures (most important)",
      "↑ ESR/CRP",
      "Echocardiography — vegetations, abscess, new regurgitation",
    ],
    associations: [
      "Prior valve disease (rheumatic, prosthetic, congenital)",
      "IV drug use (tricuspid involvement, S. aureus)",
      "Dental procedures (viridans streptococci)",
      "Catheters and indwelling hardware",
    ],
    complications: [
      "Valve destruction requiring surgery",
      "Septic emboli (stroke, splenic/renal infarcts)",
      "Ring abscess, heart block",
      "Glomerulonephritis (immune complex)",
    ],
    distinguishFrom: [
      "Libman-Sacks endocarditis (SLE) — sterile vegetations, verrucous, both sides of valve",
      "Rheumatic fever — migratory polyarthritis, chorea, pancarditis; no persistent bacteremia",
      "Nonbacterial thrombotic endocarditis (marantic) — malignancy/hypercoagulable, sterile small vegetations",
    ],
    treatment: [
      "Prolonged IV antibiotics tailored to organism and sensitivities",
      "Surgery for refractory infection, abscess, heart block, or severe valve dysfunction",
    ],
    boardsPearls: [
      "Most common organisms: S. viridans (dental, damaged valve), S. aureus (acute, IVDU, prosthetic)",
      "Enterococcal endocarditis: ampicillin + gentamicin synergy",
      "Duke criteria: blood cultures + echo findings + clinical criteria",
      "IVDU → tricuspid valve, S. aureus, septic pulmonary emboli",
    ],
    pediatrics:
      "Congenital heart disease and prior valve surgery increase risk; viridans strep after dental procedures. Prophylaxis limited to highest-risk lesions per current guidelines.",
  },
  {
    id: "thromboangiitis-obliterans",
    name: "Thromboangiitis Obliterans (Buerger Disease)",
    aliases: [
      "thromboangiitis obliterans",
      "buerger disease",
      "buerger's disease",
      "buergers disease",
    ],
    definition:
      "Segmental inflammatory thrombosis of small- and medium-sized arteries and veins, strongly associated with tobacco use, causing distal extremity ischemia.",
    pathophysiology:
      "Inflammatory occlusive thrombosis of distal vessels without primary atherosclerosis; smoking is essential to pathogenesis — hypersensitivity or toxic injury to vessel wall triggers segmental inflammation and thrombosis.",
    classicPresentation: [
      "Young male smoker (<45) with distal upper/lower extremity ischemia",
      "Claudication of hands/feet, rest pain, digital ischemia",
      "Raynaud phenomenon, migratory superficial thrombophlebitis",
    ],
    keyFindings: [
      "Absent or diminished distal pulses with proximal pulses preserved",
      "Digital ulceration or gangrene",
      "Normal arteries on angiography above ankle/wrist with corkscrew collaterals distally",
    ],
    keyLabs: [
      "Angiography — segmental occlusions, corkscrew collaterals (\"tree root\" appearance)",
      "Hypercoagulable and autoimmune workup negative",
    ],
    associations: ["Heavy tobacco use (cigarettes, chewing tobacco)", "Young men of Asian/Middle Eastern/Eastern European descent"],
    complications: ["Digital gangrene and amputation", "Progression with continued smoking"],
    distinguishFrom: [
      "Atherosclerotic peripheral artery disease — older patients, proximal large-vessel disease",
      "Systemic vasculitis (GPA, polyarteritis nodosa) — systemic features, different angiographic pattern",
      "Raynaud disease alone — reversible vasospasm without tissue loss",
    ],
    treatment: [
      "Absolute smoking cessation — only intervention that alters disease course",
      "Wound care; avoid cold exposure; sympathectomy or prostaglandins in refractory cases",
    ],
    boardsPearls: [
      "Young smoker + distal ischemia + superficial thrombophlebitis → Buerger until proven otherwise",
      "Smoking cessation is mandatory — continued use leads to amputation",
      "Segmental inflammatory thrombosis of distal vessels, not atherosclerosis",
    ],
    pediatrics:
      "Extremely rare in children; any adolescent with tobacco exposure and digital ischemia warrants urgent vascular evaluation and smoking cessation counseling.",
  },
  {
    id: "heart-failure",
    name: "Congestive Heart Failure",
    aliases: [
      "congestive heart failure",
      "heart failure",
      "chf",
      "hfref",
      "hfpef",
    ],
    definition:
      "Inability of the heart to pump sufficient blood to meet metabolic demands, or to do so only at elevated filling pressures.",
    pathophysiology:
      "HFrEF: impaired contractility → ↓ CO → RAAS and sympathetic activation → salt/water retention → congestion. HFpEF: stiff ventricle → impaired filling despite preserved EF.",
    classicPresentation: [
      "Dyspnea, orthopnea, paroxysmal nocturnal dyspnea",
      "Peripheral edema, elevated JVP, hepatomegaly",
      "Fatigue, reduced exercise tolerance",
    ],
    keyFindings: [
      "S3 gallop (volume overload)",
      "Crackles, peripheral edema, JVD",
      "HFrEF: dilated cardiomegaly on CXR",
    ],
    keyLabs: [
      "↑ BNP/NT-proBNP",
      "↓ EF on echo (HFrEF); preserved EF with diastolic dysfunction (HFpEF)",
    ],
    complications: [
      "Cardiorenal syndrome",
      "Hepatic congestion",
      "Arrhythmias (especially AF)",
      "Cardiac cachexia",
    ],
    distinguishFrom: [
      "Cirrhosis — ascites without JVD",
      "Nephrotic syndrome — edema without pulmonary congestion",
      "COPD — wheeze, hyperinflation, no S3",
    ],
    treatment: [
      "Loop diuretics for volume overload; ACEi/ARB, β-blocker, spironolactone, SGLT2i for HFrEF mortality benefit",
      "Address underlying cause; restrict sodium and fluids when volume overloaded",
    ],
    boardsPearls: [
      "Left-sided failure: pulmonary congestion; right-sided: peripheral edema, JVD",
      "HFrEF mortality benefit: ACEi/ARB, β-blockers, spironolactone, SGLT2 inhibitors",
      "Loop diuretics relieve congestion but do not ↓ mortality",
    ],
    pediatrics:
      "Dilated cardiomyopathy is the most common cause of heart failure in children; consider inborn errors of metabolism and myocarditis.",
  },
  {
    id: "shock",
    name: "Shock",
    aliases: [
      "shock",
      "circulatory shock",
      "hypovolemic shock",
      "hemorrhagic shock",
      "cardiogenic shock",
      "distributive shock",
      "obstructive shock",
      "septic shock",
      "anaphylactic shock",
      "neurogenic shock",
    ],
    definition:
      "Life-threatening state of inadequate tissue perfusion and oxygen delivery despite compensatory mechanisms; classified by primary hemodynamic mechanism.",
    pathophysiology:
      "↓ effective perfusion → tissue hypoxia → anaerobic metabolism and lactic acidosis. Four broad types: hypovolemic (↓ preload), cardiogenic (pump failure), distributive (↓ SVR with maldistribution), obstructive (mechanical impediment to filling or ejection).",
    classicPresentation: [
      "Hypotension, tachycardia, cool clammy extremities (except early distributive shock)",
      "Altered mental status, oliguria, metabolic acidosis",
      "Tachypnea, weak pulses, delayed capillary refill",
    ],
    keyFindings: [
      "Hypovolemic: flat neck veins, dry mucous membranes, ↓ PCWP/CVP",
      "Cardiogenic: pulmonary edema, ↑ JVP, cool extremities, ↓ CO, ↑ PCWP",
      "Distributive (septic early): warm extremities, bounding pulses, ↓ SVR; late septic shock resembles cardiogenic",
      "Obstructive: JVD with hypotension (tamponade, PE, tension pneumothorax); muffled heart sounds (tamponade), unilateral absent breath sounds (tension PTX)",
    ],
    keyLabs: [
      "↑ Lactate — tissue hypoperfusion",
      "Metabolic acidosis",
      "↑ BUN:Cr in hypovolemic (prerenal) states",
      "Blood cultures, procalcitonin in suspected septic shock",
    ],
    associations: [
      "Hypovolemic: hemorrhage, burns, vomiting/diarrhea, diuretics",
      "Cardiogenic: large MI, decompensated HF, severe valvular disease",
      "Distributive: sepsis, anaphylaxis, spinal cord injury (neurogenic)",
      "Obstructive: cardiac tamponade, massive PE, tension pneumothorax",
    ],
    complications: [
      "Multiorgan dysfunction syndrome (MODS)",
      "Acute kidney injury",
      "Disseminated intravascular coagulation (especially septic shock)",
      "Death without rapid resuscitation",
    ],
    distinguishFrom: [
      "Syncope — transient hypotension with rapid spontaneous recovery",
      "Orthostatic hypotension — positional, not global hypoperfusion",
      "Neurogenic shock — distributive with bradycardia and warm skin (vs spinal shock = flaccid paralysis/areflexia)",
    ],
    treatment: [
      "ABC, IV access, supplemental O₂; treat underlying cause",
      "Hypovolemic/obstructive: volume resuscitation (crystalloid/blood); relieve obstruction (pericardiocentesis, chest tube, thrombolysis/anticoagulation for PE)",
      "Cardiogenic: cautious fluids, inotropes, vasopressors, urgent revascularization or mechanical support",
      "Septic: early broad-spectrum antibiotics, source control, fluids, norepinephrine first-line vasopressor",
      "Anaphylactic: epinephrine IM, fluids, antihistamines, glucocorticoids",
    ],
    boardsPearls: [
      "Shock types: hypovolemic, cardiogenic, distributive, obstructive — know hemodynamic profiles (CO, SVR, PCWP/CVP)",
      "Hypovolemic: ↓ CO, ↑ SVR, ↓ PCWP; cardiogenic: ↓ CO, ↑ SVR, ↑ PCWP",
      "Early septic shock: ↑ or normal CO, ↓ SVR; late septic: ↓ CO",
      "Obstructive shock with JVD: tamponade, PE, tension pneumothorax — not all shock is hypovolemic",
      "Neurogenic shock (high spinal cord injury): hypotension + bradycardia from loss of sympathetic tone",
    ],
    pediatrics:
      "Infants compensate with tachycardia until late decompensation — hypotension is a late and ominous sign. Septic shock in neonates/children: fluids first, then epinephrine or norepinephrine per PALS; adrenal crisis and congenital heart disease are important pediatric differentials.",
  },
  {
    id: "hypertrophic-cardiomyopathy",
    name: "Hypertrophic Cardiomyopathy",
    aliases: [
      "hypertrophic cardiomyopathy",
      "hcm",
      "hypertrophic obstructive cardiomyopathy",
      "hocm",
    ],
    definition:
      "Genetic cardiomyopathy with LV hypertrophy (often asymmetric septal) and diastolic dysfunction, with or without dynamic outflow obstruction.",
    pathophysiology:
      "Autosomal dominant sarcomere mutations (MYH7, MYBPC3) → disorganized myocytes → hypertrophy → impaired filling and dynamic LVOT obstruction during systole.",
    classicPresentation: [
      "Young athlete with syncope or sudden cardiac death",
      "Exertional dyspnea, chest pain",
      "Family history of cardiomyopathy or SCD",
    ],
    keyFindings: [
      "Harsh systolic murmur at LLSB, ↑ with Valsalva/standing, ↓ with squatting",
      "Sustained PMI, bifid carotid pulse",
      "Echo: septal hypertrophy ≥15 mm, SAM of mitral valve",
    ],
    associations: ["Autosomal dominant inheritance", "Sudden cardiac death in young athletes"],
    complications: [
      "Sudden cardiac death",
      "Atrial fibrillation",
      "Heart failure",
      "Infective endocarditis (with obstruction)",
    ],
    distinguishFrom: [
      "Aortic stenosis — murmur ↓ with Valsalva, radiates to carotids",
      "Athlete's heart — physiologic hypertrophy, normal diastolic function",
      "Hypertensive heart disease — concentric hypertrophy",
    ],
    treatment: [
      "β-blockers or non-DHP CCBs for rate control and symptom relief",
      "ICD for high-risk patients; avoid strenuous exercise",
    ],
    boardsPearls: [
      "#1 cause of sudden cardiac death in young athletes",
      "Murmur ↑ with decreased preload (Valsalva, standing)",
      "Avoid vigorous exercise; ICD for high-risk patients",
    ],
    pediatrics:
      "May present in adolescence during sports screening; family screening recommended for first-degree relatives.",
  },
  {
    id: "dilated-cardiomyopathy",
    name: "Dilated Cardiomyopathy",
    aliases: ["dilated cardiomyopathy", "dcm"],
    definition:
      "Cardiomyopathy with ventricular dilation and impaired systolic function (↓ EF), leading to heart failure.",
    pathophysiology:
      "Myocyte loss or dysfunction → ventricular dilation → ↓ contractility → neurohormonal activation → progressive remodeling and heart failure.",
    classicPresentation: [
      "Progressive dyspnea, fatigue, edema",
      "Alcohol use, prior viral illness, or chemotherapy history",
      "Familial cardiomyopathy",
    ],
    keyFindings: [
      "S3 gallop, displaced PMI",
      "Dilated heart on CXR/echo",
      "Functional mitral/tricuspid regurgitation",
    ],
    keyLabs: ["↓ EF on echocardiography", "↑ BNP"],
    associations: [
      "Alcohol abuse",
      "Doxorubicin toxicity",
      "Coxsackie B viral myocarditis",
      "Peripartum cardiomyopathy",
      "Beriberi (thiamine deficiency)",
    ],
    distinguishFrom: [
      "Ischemic cardiomyopathy — regional wall motion abnormalities, CAD history",
      "Restrictive cardiomyopathy — preserved EF, diastolic dysfunction",
    ],
    treatment: [
      "Standard HFrEF therapy: ACEi/ARB, β-blocker, diuretics",
      "Treat underlying cause (alcohol cessation, chelation for hemochromatosis)",
    ],
    boardsPearls: [
      "Most common cardiomyopathy worldwide",
      "Coxsackie B → viral myocarditis → dilated cardiomyopathy",
      "Standard HFrEF therapy applies",
    ],
    pediatrics:
      "Most common cardiomyopathy in children; consider metabolic and genetic causes.",
  },
  {
    id: "restrictive-cardiomyopathy",
    name: "Restrictive Cardiomyopathy",
    aliases: ["restrictive cardiomyopathy", "rcm"],
    definition:
      "Cardiomyopathy with impaired ventricular filling due to stiff, noncompliant myocardium, with preserved or near-normal systolic function.",
    pathophysiology:
      "Infiltration or fibrosis stiffens myocardium → impaired diastolic filling → elevated filling pressures → congestion with relatively preserved EF.",
    classicPresentation: [
      "Heart failure symptoms with relatively preserved EF",
      "Bilateral lower extremity edema, ascites",
      "History of amyloidosis, hemochromatosis, or radiation",
    ],
    keyFindings: [
      "Elevated JVP with rapid Y descent (Kussmaul sign in constrictive disease)",
      "S4 gallop",
      "Echo: biatrial enlargement, preserved EF, impaired relaxation",
    ],
    associations: [
      "Amyloidosis",
      "Sarcoidosis",
      "Hemochromatosis",
      "Endomyocardial fibrosis",
      "Scleroderma",
    ],
    distinguishFrom: [
      "Constrictive pericarditis — pericardial knock, equalization of pressures",
      "Dilated cardiomyopathy — ↓ EF, dilation",
    ],
    treatment: [
      "Diuretics for congestion; treat underlying infiltrative disease if identified",
      "Heart transplant for end-stage disease",
    ],
    boardsPearls: [
      "Least common cardiomyopathy; think infiltrative disease",
      "Amyloid: low voltage on ECG despite thick walls on echo",
      "Poor prognosis; heart transplant often required",
    ],
  },
  {
    id: "atherosclerosis",
    name: "Atherosclerosis",
    aliases: [
      "atherosclerosis",
      "coronary artery disease",
      "cad",
      "atheroma",
      "atherosclerotic plaque",
      "coronary atherosclerosis",
      "arterial plaque",
      "ischemic heart disease",
    ],
    definition:
      "Chronic inflammatory disease of arterial intima with lipid accumulation, plaque formation, and progressive luminal narrowing.",
    pathophysiology:
      "Endothelial dysfunction → LDL oxidation → macrophage foam cells → fatty streak → fibrous cap plaque; plaque rupture triggers thrombosis and acute ischemic events.",
    classicPresentation: [
      "Exertional angina in stable disease",
      "Acute coronary syndrome with plaque rupture",
      "Claudication (peripheral arteries)",
    ],
    keyFindings: [
      "Carotid bruits",
      "Diminished peripheral pulses",
      "Xanthomas (familial hypercholesterolemia)",
    ],
    keyLabs: [
      "↑ LDL cholesterol",
      "↑ hs-CRP (inflammation marker)",
    ],
    associations: [
      "Hypertension",
      "Diabetes mellitus",
      "Smoking",
      "Familial hypercholesterolemia",
    ],
    complications: [
      "Myocardial infarction",
      "Stroke",
      "Peripheral artery disease",
      "Aortic aneurysm",
    ],
    distinguishFrom: [
      "Vasospastic angina — normal coronaries, ST elevation at rest",
      "Aortic stenosis — exertional angina without CAD",
    ],
    treatment: [
      "Statins, antiplatelet therapy, risk factor modification",
      "Revascularization (PCI/CABG) for symptomatic or high-risk coronary disease",
    ],
    boardsPearls: [
      "Major risk factors: hyperlipidemia, HTN, DM, smoking",
      "Foam cells = lipid-laden macrophages in intima",
      "Statins stabilize plaques and ↓ cardiovascular events",
      "Unstable plaque: thin fibrous cap, ↑ macrophages, risk of rupture → thrombosis → MI/stroke",
      "Path sequence: endothelial injury → LDL oxidation → foam cells → fatty streak → fibrous plaque",
    ],
    pediatrics:
      "Homozygous familial hypercholesterolemia presents in childhood with tendon xanthomas and premature CAD; heterozygous FH also warrants early statin therapy.",
  },
  {
    id: "hypertension",
    name: "Hypertension",
    aliases: [
      "hypertension",
      "htn",
      "high blood pressure",
      "essential hypertension",
      "primary hypertension",
    ],
    definition:
      "Sustained elevation of systemic arterial blood pressure, most often primary (essential) without identifiable cause.",
    pathophysiology:
      "Essential HTN: multifactorial ↑ peripheral vascular resistance ± ↑ cardiac output from neurohormonal dysregulation (RAAS, sympathetic tone). Secondary causes include renal disease, renovascular stenosis, primary aldosteronism, pheochromocytoma, and OSA.",
    classicPresentation: [
      "Usually asymptomatic — detected on routine screening",
      "Headache, dizziness, or epistaxis when severe",
      "Risk factors: obesity, high sodium intake, family history, age, African American descent",
    ],
    keyFindings: [
      "Elevated BP on repeated measurements (≥130/80 mmHg per current guidelines)",
      "LVH on ECG (Sokolow-Lyon criteria) or echo",
      "Fundoscopic changes: arteriovenous nicking, copper/silver wiring, papilledema if malignant",
    ],
    keyLabs: [
      "BMP — renal function and electrolytes (screen for renal cause, hyperaldosteronism)",
      "Urinalysis — proteinuria suggests hypertensive nephropathy or underlying renal disease",
    ],
    associations: [
      "Obesity and metabolic syndrome",
      "Obstructive sleep apnea",
      "Chronic kidney disease",
      "Coarctation of the aorta (secondary, younger patients)",
    ],
    complications: [
      "Stroke and intracerebral hemorrhage",
      "Myocardial infarction and heart failure",
      "Chronic kidney disease",
      "Hypertensive retinopathy and encephalopathy",
    ],
    distinguishFrom: [
      "White coat hypertension — elevated in clinic, normal at home",
      "Secondary hypertension — young onset, resistant HTN, hypokalemia, abdominal bruit",
      "Malignant hypertension — severe BP with end-organ damage (papilledema, AKI)",
    ],
    treatment: [
      "Lifestyle: weight loss, DASH diet, sodium restriction, exercise",
      "First-line pharmacotherapy: thiazide diuretic, ACE inhibitor, ARB, or CCB; ACEi/ARB preferred with diabetes or CKD",
    ],
    boardsPearls: [
      "Leading modifiable risk factor for stroke, MI, and CKD",
      "Secondary HTN clues: age <30, resistant HTN, hypokalemia (↑ aldosterone), abdominal bruit (renal artery stenosis)",
      "Hypertensive emergency: IV labetalol, nicardipine, or nitroprusside with end-organ damage",
    ],
    pediatrics:
      "Secondary causes (renal parenchymal disease, coarctation) are more common than essential HTN; evaluate if BP elevated on repeated measurements.",
  },
  {
    id: "atrioventricular-block",
    name: "Atrioventricular Heart Block",
    aliases: [
      "atrioventricular heart block",
      "av block",
      "heart block",
      "third degree heart block",
      "complete heart block",
    ],
    definition:
      "Impaired conduction through the AV node or His-Purkinje system, causing delayed or absent ventricular response to atrial depolarization.",
    pathophysiology:
      "First-degree: prolonged PR interval. Second-degree Mobitz I (Wenckebach): progressive PR prolongation until dropped beat (usually AV node). Mobitz II: sudden dropped beat (usually infranodal). Third-degree: complete AV dissociation.",
    classicPresentation: [
      "Syncope (Stokes-Adams attacks in complete block)",
      "Bradycardia, fatigue, dizziness",
      "Post-MI or Lyme carditis history",
    ],
    keyFindings: [
      "Bradycardia with regular rhythm (3rd degree)",
      "Cannon A waves (AV dissociation)",
      "Mobitz I: grouped beating on ECG",
    ],
    associations: [
      "Inferior MI (RCA supplies AV node)",
      "Lyme disease",
      "Digoxin toxicity",
      "Degenerative conduction system disease (Lenègre/Lev)",
    ],
    complications: ["Syncope", "Sudden cardiac death (Mobitz II, 3rd degree)"],
    distinguishFrom: [
      "Sinus bradycardia — P waves precede every QRS",
      "Atrial fibrillation with slow ventricular response",
    ],
    treatment: [
      "Atropine for symptomatic bradycardia (especially inferior MI)",
      "Permanent pacemaker for Mobitz II or third-degree block",
    ],
    boardsPearls: [
      "Mobitz I (Wenckebach) — usually benign, AV nodal",
      "Mobitz II — infranodal, often progresses to complete block → pacemaker",
      "Inferior MI + AV block → atropine; anterior MI + AV block → pacemaker",
    ],
    pediatrics:
      "Congenital complete heart block associated with maternal anti-Ro/anti-La (neonatal lupus).",
  },
  {
    id: "ischemic-stroke",
    name: "Ischemic Stroke",
    aliases: ["ischemic stroke", "stroke", "cva", "cerebrovascular accident"],
    definition:
      "Focal neurologic deficit from cerebral infarction due to arterial occlusion (thrombotic or embolic).",
    pathophysiology:
      "Large-vessel atherosclerosis, cardioembolism (AF), or small-vessel lipohyalinosis → ischemia → cytotoxic edema; penumbra may be salvageable with reperfusion.",
    classicPresentation: [
      "Sudden focal weakness, numbness, or aphasia",
      "Atrial fibrillation or carotid disease risk factors",
      "Onset over seconds to minutes",
    ],
    keyFindings: [
      "Focal neurologic deficit respecting vascular territory",
      "Noncontrast CT initially negative (early); MRI DWI positive",
      "Carotid bruit (large-vessel disease)",
    ],
    keyLabs: ["CT/MRI brain", "ECG for AF", "Carotid duplex"],
    associations: [
      "Atrial fibrillation",
      "Hypertension",
      "Diabetes mellitus",
      "Carotid stenosis",
    ],
    complications: ["Hemorrhagic conversion", "Cerebral edema", "Aspiration pneumonia"],
    distinguishFrom: [
      "Hemorrhagic stroke — headache, ↓ consciousness, blood on CT",
      "TIA — symptoms resolve within 24 h",
      "Hypoglycemia — check glucose immediately",
    ],
    treatment: [
      "IV tPA within 4.5 h if eligible; mechanical thrombectomy for large-vessel occlusion",
      "Antiplatelet therapy; anticoagulation for cardioembolic stroke (e.g., AF)",
    ],
    boardsPearls: [
      "MCA territory: contralateral face/arm weakness, aphasia (dominant hemisphere)",
      "tPA window: within 4.5 h of symptom onset if eligible",
      "AF → cardioembolic stroke → anticoagulation",
    ],
  },
  {
    id: "primary-brain-tumor",
    name: "Primary Brain Tumor",
    aliases: ["primary brain tumor", "brain tumor", "brain neoplasm", "glioblastoma"],
    definition:
      "Neoplasm arising from intracranial structures (glial cells, meninges, or embryonal tissue), distinct from metastatic disease.",
    pathophysiology:
      "Uncontrolled proliferation of CNS cells → mass effect, ↑ ICP, focal deficits; glioblastoma (grade IV astrocytoma) is most aggressive primary brain tumor in adults.",
    classicPresentation: [
      "Progressive headache worse in morning, vomiting",
      "New-onset seizures in adult",
      "Focal neurologic deficits",
    ],
    keyFindings: [
      "Ring-enhancing lesion on MRI with central necrosis (glioblastoma)",
      "Papilledema",
      "Focal deficits per tumor location",
    ],
    associations: [
      "Neurofibromatosis type 1 (optic glioma)",
      "Tuberous sclerosis (subependymal giant cell astrocytoma)",
      "Li-Fraumeni syndrome",
    ],
    complications: ["Herniation", "Hydrocephalus", "Seizures"],
    distinguishFrom: [
      "Brain metastasis — multiple lesions at gray-white junction",
      "Abscess — fever, ring enhancement with restricted diffusion",
    ],
    treatment: [
      "Maximal safe surgical resection when feasible",
      "Adjuvant radiation ± temozolomide for high-grade gliomas",
    ],
    boardsPearls: [
      "Adults: glioblastoma most common malignant primary tumor",
      "Children: pilocytic astrocytoma (cerebellum), medulloblastoma (posterior fossa)",
      "Meningioma: extra-axial, dural tail, often benign",
    ],
    pediatrics:
      "Posterior fossa tumors (medulloblastoma, pilocytic astrocytoma) present with headache, ataxia, and hydrocephalus.",
  },
  {
    id: "multiple-sclerosis",
    name: "Multiple Sclerosis",
    aliases: ["multiple sclerosis", "ms"],
    definition:
      "Autoimmune demyelinating disease of the CNS with relapsing-remitting or progressive neurologic deficits disseminated in time and space.",
    pathophysiology:
      "T-cell mediated attack on myelin → plaques of demyelination → impaired saltatory conduction; oligoclonal IgG in CSF reflects intrathecal synthesis.",
    classicPresentation: [
      "Young woman with optic neuritis or internuclear ophthalmoplegia",
      "Relapsing neurologic deficits separated in time and location",
      "Lhermitte sign (electric shock down spine on neck flexion)",
    ],
    keyFindings: [
      "Internuclear ophthalmoplegia (MLF lesion)",
      "Uhthoff phenomenon (worsening with heat)",
      "Periventricular white matter lesions on MRI",
    ],
    keyLabs: [
      "↑ IgG index and oligoclonal bands in CSF",
      "MRI: periventricular plaques",
    ],
    associations: ["Higher prevalence in women", "Northern latitude", "HLA-DR2"],
    complications: ["Progressive disability", "Bladder dysfunction", "Depression"],
    distinguishFrom: [
      "Neuromyelitis optica — anti-AQP4, longitudinally extensive transverse myelitis",
      "ADEM — monophasic, post-infectious",
    ],
    treatment: [
      "High-dose IV corticosteroids for acute relapses",
      "Disease-modifying therapy (interferon-β, glatiramer) for relapsing-remitting MS",
    ],
    boardsPearls: [
      "Most common demyelinating disease in young adults",
      "Oligoclonal bands in CSF = intrathecal IgG synthesis",
      "INO: impaired adduction ipsilateral eye, nystagmus contralateral eye",
    ],
  },
  {
    id: "parkinson-disease",
    name: "Parkinson Disease",
    aliases: ["parkinson disease", "parkinson's disease", "parkinsonism"],
    definition:
      "Neurodegenerative disorder with loss of dopaminergic neurons in the substantia nigra pars compacta, causing bradykinesia, rigidity, and tremor.",
    pathophysiology:
      "Loss of pigmented dopaminergic neurons in substantia nigra → ↓ striatal dopamine → imbalance of direct/indirect basal ganglia pathways → bradykinesia and rigidity.",
    classicPresentation: [
      "Resting tremor, bradykinesia, rigidity",
      "Shuffling gait, reduced arm swing",
      "Masked facies, micrographia",
    ],
    keyFindings: [
      "Pill-rolling resting tremor",
      "Cogwheel rigidity",
      "Postural instability (later)",
    ],
    associations: ["Lewy body inclusions (α-synuclein)", "Older age"],
    complications: ["Dementia", "Falls", "Autonomic dysfunction"],
    distinguishFrom: [
      "Essential tremor — action tremor, no rigidity",
      "Drug-induced parkinsonism — antipsychotics, metoclopramide",
      "Progressive supranuclear palsy — vertical gaze palsy",
    ],
    treatment: [
      "Levodopa/carbidopa — most effective symptomatic therapy",
      "Dopamine agonists, MAO-B inhibitors as adjuncts",
    ],
    boardsPearls: [
      "TRAP: Tremor, Rigidity, Akinesia/bradykinesia, Postural instability",
      "Lewy bodies = eosinophilic intracytoplasmic inclusions",
      "Treat with levodopa/carbidopa (crosses BBB)",
    ],
  },
  {
    id: "type-2-diabetes-mellitus",
    name: "Type 2 Diabetes Mellitus",
    aliases: [
      "type 2 diabetes mellitus",
      "type 2 diabetes",
      "diabetes mellitus",
      "diabetes",
      "t2dm",
    ],
    definition:
      "Chronic hyperglycemia from insulin resistance and progressive pancreatic β-cell failure.",
    pathophysiology:
      "Peripheral insulin resistance → compensatory hyperinsulinemia → β-cell exhaustion → relative insulin deficiency and sustained hyperglycemia.",
    classicPresentation: [
      "Polyuria, polydipsia, weight loss (if severe)",
      "Obesity, acanthosis nigricans",
      "Adult onset, often asymptomatic initially",
    ],
    keyLabs: [
      "Fasting glucose ≥126 mg/dL or HbA1c ≥6.5%",
      "↑ C-peptide (vs T1DM)",
    ],
    associations: ["Obesity", "Metabolic syndrome", "PCOS", "Family history"],
    complications: [
      "Diabetic nephropathy",
      "Retinopathy",
      "Neuropathy",
      "Atherosclerotic cardiovascular disease",
    ],
    distinguishFrom: [
      "Type 1 DM — lean, young, anti-GAD antibodies, low C-peptide",
      "Steroid-induced hyperglycemia",
    ],
    treatment: [
      "Lifestyle modification; metformin first-line pharmacotherapy",
      "Add GLP-1 agonist or SGLT2 inhibitor for cardiovascular/renal benefit when indicated",
    ],
    boardsPearls: [
      "First-line: metformin (↓ hepatic gluconeogenesis)",
      "SGLT2 inhibitors and GLP-1 agonists have cardiovascular/renal benefit",
      "Microalbuminuria = earliest sign of diabetic nephropathy",
    ],
    pediatrics:
      "Increasingly seen in obese adolescents; distinguish from T1DM with autoantibodies and C-peptide.",
  },
  {
    id: "type-1-diabetes-mellitus",
    name: "Type 1 Diabetes Mellitus",
    aliases: ["type 1 diabetes mellitus", "type 1 diabetes", "t1dm", "juvenile diabetes"],
    definition:
      "Autoimmune destruction of pancreatic β-cells causing absolute insulin deficiency and hyperglycemia.",
    pathophysiology:
      "T-cell mediated autoimmune attack on β-cells → absolute insulin deficiency → hyperglycemia, lipolysis, and ketogenesis when severe.",
    classicPresentation: [
      "Lean child/young adult with polyuria, polydipsia, weight loss",
      "DKA at presentation common",
      "History of other autoimmune disease",
    ],
    keyLabs: [
      "↑ blood glucose, ↓ C-peptide",
      "Anti-GAD, anti-islet cell antibodies",
      "↑ HbA1c",
    ],
    associations: ["HLA-DR3/DR4", "Other autoimmune diseases (Hashimoto, celiac)"],
    complications: ["DKA", "Hypoglycemia with insulin therapy", "Microvascular complications"],
    distinguishFrom: [
      "Type 2 DM — obese, insulin resistant, ↑ C-peptide",
      "MODY — autosomal dominant, milder, no autoantibodies",
    ],
    treatment: [
      "Lifelong insulin replacement (basal-bolus regimen)",
      "Intensive glucose control to prevent microvascular complications",
    ],
    boardsPearls: [
      "Absolute insulin deficiency — requires lifelong insulin",
      "DKA: hyperglycemia + anion gap metabolic acidosis + ketones",
      "C-peptide low because endogenous insulin production is absent",
    ],
    pediatrics:
      "Most common endocrine disorder of childhood; DKA is common presenting feature — watch for cerebral edema during treatment.",
  },
  {
    id: "diabetic-ketoacidosis",
    name: "Diabetic Ketoacidosis",
    aliases: ["diabetic ketoacidosis", "dka"],
    definition:
      "Acute metabolic emergency of uncontrolled diabetes with hyperglycemia, ketosis, and anion gap metabolic acidosis.",
    pathophysiology:
      "Insulin deficiency → unrestrained lipolysis → ↑ free fatty acids → hepatic ketogenesis → ketoacidosis; hyperglycemia causes osmotic diuresis and dehydration.",
    classicPresentation: [
      "Nausea, vomiting, abdominal pain, Kussmaul respirations",
      "Fruity breath (acetone)",
      "Precipitant: infection, missed insulin, new-onset T1DM",
    ],
    keyLabs: [
      "Glucose >250 mg/dL (usually much higher)",
      "Anion gap metabolic acidosis",
      "↑ serum/urine ketones",
      "↓ serum bicarbonate",
    ],
    complications: [
      "Cerebral edema (especially during treatment in children)",
      "Hypokalemia during insulin therapy",
      "ARDS",
    ],
    distinguishFrom: [
      "Hyperosmolar hyperglycemic state — minimal ketosis, extreme hyperglycemia, T2DM",
      "Starvation ketosis — euglycemic or mild hyperglycemia",
    ],
    treatment: [
      "IV fluids first, then IV insulin infusion",
      "Replace potassium before insulin if K⁺ <3.3 mEq/L; treat precipitating cause",
    ],
    boardsPearls: [
      "Treat: fluids first, then insulin; replace K⁺ when <3.3 mEq/L",
      "Anion gap = Na − (Cl + HCO₃)",
      "Search for precipitant (infection most common)",
    ],
    pediatrics:
      "Cerebral edema is leading cause of DKA mortality in children — avoid overly rapid fluid/insulin correction.",
  },
  {
    id: "graves-disease",
    name: "Graves Disease",
    aliases: ["graves disease", "graves' disease", "diffuse toxic goiter"],
    definition:
      "Autoimmune hyperthyroidism from thyroid-stimulating immunoglobulins (TSI) activating the TSH receptor.",
    pathophysiology:
      "TSI mimic TSH → unregulated thyroid hormone synthesis → hyperthyroidism; orbital fibroblasts stimulated → Graves ophthalmopathy.",
    classicPresentation: [
      "Weight loss, heat intolerance, palpitations, tremor",
      "Diffuse goiter with bruit",
      "Exophthalmos, pretibial myxedema",
    ],
    keyFindings: [
      "Diffuse goiter with thrill/bruit",
      "Lid lag, exophthalmos",
      "Fine tremor, warm moist skin",
    ],
    keyLabs: [
      "↓ TSH, ↑ free T4/T3",
      "↑ TSI (thyroid-stimulating immunoglobulin)",
    ],
    associations: ["HLA-DR3", "Other autoimmune diseases"],
    complications: ["Thyroid storm", "Atrial fibrillation", "Osteoporosis"],
    distinguishFrom: [
      "Toxic multinodular goiter — nodular gland, no ophthalmopathy",
      "Subacute thyroiditis — painful thyroid, low uptake",
    ],
    treatment: [
      "Methimazole (or PTU in first trimester pregnancy) for hyperthyroidism",
      "β-blockers for symptomatic relief; definitive: radioactive iodine or thyroidectomy",
    ],
    boardsPearls: [
      "Only cause of hyperthyroidism with ophthalmopathy",
      "Treat: methimazole, radioactive iodine, or surgery",
      "Pretibial myxedema is pathognomonic for Graves",
    ],
    pediatrics:
      "Less common than Hashimoto in children; weight loss and behavioral changes may be presenting features.",
  },
  {
    id: "congenital-adrenal-hyperplasia",
    name: "Congenital Adrenal Hyperplasia",
    aliases: [
      "congenital adrenal hyperplasia",
      "cah",
      "adrenogenital syndrome",
      "21-hydroxylase deficiency",
    ],
    definition:
      "Inherited enzyme defect in adrenal steroid synthesis, most commonly 21-hydroxylase deficiency, causing androgen excess and cortisol deficiency.",
    pathophysiology:
      "21-hydroxylase deficiency → ↓ cortisol and aldosterone synthesis → ↑ ACTH → adrenal hyperplasia and shunting to androgen pathway → virilization.",
    classicPresentation: [
      "Salt-wasting crisis in neonate (classic form)",
      "Ambiguous genitalia in 46,XX newborn",
      "Precocious puberty, virilization in older children",
    ],
    keyLabs: [
      "↑ 17-hydroxyprogesterone (diagnostic)",
      "↓ cortisol, ↓ aldosterone (salt-wasting form)",
      "Hyponatremia, hyperkalemia in crisis",
    ],
    associations: ["Autosomal recessive", "HLA-linked"],
    complications: ["Adrenal crisis", "Short stature if undertreated", "Infertility"],
    distinguishFrom: [
      "11β-hydroxylase deficiency — HTN, ↑ 11-deoxycortisol",
      "Androgen-secreting tumor",
    ],
    treatment: [
      "Glucocorticoid replacement (hydrocortisone) to suppress ACTH",
      "Fludrocortisone for salt-wasting form; surgical correction of ambiguous genitalia if needed",
    ],
    boardsPearls: [
      "21-hydroxylase deficiency = 90% of CAH cases",
      "Salt-wasting form: hyponatremia, hyperkalemia, hypotension in neonate",
      "Screen with ↑ 17-OH progesterone on newborn screen",
    ],
    pediatrics:
      "Classic salt-wasting CAH presents in first weeks of life with failure to thrive and electrolyte abnormalities; ambiguous genitalia in 46,XX females.",
  },
  {
    id: "prolactinoma",
    name: "Prolactinoma",
    aliases: ["prolactinoma", "prolactin-secreting pituitary adenoma"],
    definition:
      "Pituitary adenoma secreting prolactin, causing hyperprolactinemia and mass effect on surrounding structures.",
    pathophysiology:
      "Lactotroph adenoma → ↑ prolactin → inhibits GnRH pulsatility → hypogonadism; tumor expansion can compress optic chiasm.",
    classicPresentation: [
      "Galactorrhea and amenorrhea (women)",
      "Decreased libido, impotence, infertility (men)",
      "Bitemporal hemianopia if large macroadenoma",
    ],
    keyLabs: ["↑ serum prolactin (often >200 ng/mL in macroprolactinoma)"],
    keyFindings: ["Bitemporal hemianopia (chiasm compression)", "Galactorrhea"],
    complications: ["Infertility", "Osteoporosis from hypogonadism", "Visual field loss"],
    distinguishFrom: [
      "Pregnancy — physiologic hyperprolactinemia",
      "Dopamine antagonists (antipsychotics) — drug-induced hyperprolactinemia",
      "Hypothyroidism — ↑ TRH stimulates prolactin",
    ],
    treatment: [
      "Dopamine agonists (cabergoline, bromocriptine) — first-line",
      "Transsphenoidal surgery if medical therapy fails or for chiasmal compression",
    ],
    boardsPearls: [
      "Most common functioning pituitary adenoma",
      "First-line treatment: dopamine agonists (cabergoline, bromocriptine)",
      "Macroprolactinoma: prolactin usually >200 ng/mL",
    ],
  },
  {
    id: "cushing-syndrome",
    name: "Cushing Syndrome",
    aliases: ["cushing syndrome", "cushing's syndrome", "hypercortisolism"],
    definition:
      "Clinical syndrome of excess cortisol from endogenous overproduction or exogenous glucocorticoid administration.",
    pathophysiology:
      "Excess cortisol → protein catabolism, gluconeogenesis, immunosuppression; ACTH-dependent (pituitary adenoma, ectopic ACTH) vs ACTH-independent (adrenal adenoma/carcinoma).",
    classicPresentation: [
      "Central obesity, moon facies, buffalo hump",
      "Purple striae, thin skin, easy bruising",
      "Proximal muscle weakness, hyperglycemia",
    ],
    keyLabs: [
      "↑ late-night salivary cortisol or 24-h urine free cortisol",
      "Abnormal low-dose dexamethasone suppression test",
      "ACTH level distinguishes ACTH-dependent vs independent",
    ],
    associations: [
      "Pituitary adenoma (Cushing disease — most common endogenous cause)",
      "Ectopic ACTH (small cell lung cancer)",
      "Exogenous steroids",
    ],
    distinguishFrom: [
      "Cushing disease — pituitary ACTH adenoma, ACTH dependent",
      "Pseudo-Cushing — depression, alcoholism",
      "Obesity alone — no purple striae or proximal weakness",
    ],
    treatment: [
      "Transsphenoidal surgery for pituitary adenoma; adrenalectomy for adrenal tumor",
      "Ketoconazole or metyrapone for cortisol synthesis inhibition while localizing source",
    ],
    boardsPearls: [
      "Exogenous steroids = most common cause overall",
      "Purple striae >1 cm wide are specific",
      "High-dose dex suppression: pituitary source suppresses; ectopic/adrenal does not",
    ],
  },
  {
    id: "addison-disease",
    name: "Addison Disease",
    aliases: ["addison disease", "addison's disease", "primary adrenal insufficiency"],
    definition:
      "Primary adrenal insufficiency from destruction of the adrenal cortex, causing deficiency of cortisol and aldosterone.",
    pathophysiology:
      "Autoimmune adrenalitis (most common) → ↓ cortisol and aldosterone → hypotension, hyperkalemia, hyponatremia; ↑ ACTH → hyperpigmentation.",
    classicPresentation: [
      "Fatigue, weight loss, postural hypotension",
      "Hyperpigmentation (palms, buccal mucosa, scars)",
      "Salt craving",
    ],
    keyLabs: [
      "↓ cortisol, ↑ ACTH",
      "Hyponatremia, hyperkalemia",
      "↑ eosinophils",
    ],
    associations: ["Autoimmune polyglandular syndromes", "TB (worldwide)", "Adrenal hemorrhage (Waterhouse-Friderichsen)"],
    complications: ["Adrenal crisis — shock, hypoglycemia, death"],
    distinguishFrom: [
      "Secondary adrenal insufficiency — ↓ ACTH, no hyperpigmentation, no hyperkalemia",
      "Chronic fatigue syndrome — normal electrolytes",
    ],
    treatment: [
      "Glucocorticoid (hydrocortisone) and mineralocorticoid (fludrocortisone) replacement",
      "IV hydrocortisone emergently for adrenal crisis",
    ],
    boardsPearls: [
      "Hyperpigmentation from ↑ ACTH (MSH activity)",
      "Hyperkalemia distinguishes primary from secondary insufficiency",
      "Adrenal crisis: hydrocortisone + fluids immediately",
    ],
  },
  {
    id: "zollinger-ellison-syndrome",
    name: "Zollinger-Ellison Syndrome",
    aliases: [
      "zollinger-ellison syndrome",
      "zes",
      "gastrinoma",
    ],
    definition:
      "Gastrin-secreting neuroendocrine tumor (gastrinoma) causing refractory peptic ulcer disease and diarrhea.",
    pathophysiology:
      "Gastrinoma → ↑ gastrin → parietal cell hyperstimulation → massive acid secretion → multiple/refractory ulcers and diarrhea.",
    classicPresentation: [
      "Multiple or refractory peptic ulcers",
      "Diarrhea",
      "Ulcers in atypical locations (jejunum)",
      "PPI-resistant symptoms",
    ],
    keyLabs: [
      "↑ fasting gastrin (>1000 pg/mL highly suggestive)",
      "↑ gastric acid secretion",
      "Secretin stimulation test: paradoxical ↑ gastrin",
    ],
    associations: ["MEN 1 (gastrinoma + parathyroid + pituitary)", "Duodenal/jejunal ulcers"],
    distinguishFrom: [
      "Routine PUD — H. pylori, NSAIDs; responds to PPI",
      "Retained antrum syndrome",
    ],
    treatment: [
      "High-dose PPIs to control acid secretion",
      "Surgical resection of gastrinoma; screen for MEN 1",
    ],
    boardsPearls: [
      "Think ZES: multiple ulcers + diarrhea + PPI resistance",
      "MEN 1: parathyroid hyperplasia most common manifestation",
      "Secretin normally ↓ gastrin; gastrinoma paradoxically ↑ gastrin",
    ],
  },
  {
    id: "celiac-disease",
    name: "Celiac Disease",
    aliases: ["celiac disease", "celiac sprue", "gluten-sensitive enteropathy"],
    definition:
      "Immune-mediated enteropathy triggered by gluten ingestion in genetically predisposed individuals.",
    pathophysiology:
      "Gluten → T-cell mediated damage to small bowel mucosa → villous atrophy → malabsorption; associated with HLA-DQ2/DQ8.",
    classicPresentation: [
      "Chronic diarrhea, bloating, weight loss",
      "Iron deficiency anemia, osteoporosis",
      "Dermatitis herpetiformis (pruritic vesicles on extensor surfaces)",
    ],
    keyLabs: [
      "↑ anti-tissue transglutaminase (tTG) IgA",
      "↓ IgA — check total IgA (false negative if IgA deficient)",
      "Duodenal biopsy: villous atrophy",
    ],
    associations: ["HLA-DQ2/DQ8", "Type 1 diabetes", "Down syndrome", "Dermatitis herpetiformis"],
    complications: ["Malnutrition", "Osteoporosis", "T-cell lymphoma (rare)"],
    distinguishFrom: [
      "Tropical sprue — travel history, responds to antibiotics",
      "Crohn disease — transmural inflammation, skip lesions",
    ],
    treatment: [
      "Strict lifelong gluten-free diet",
      "Correct nutritional deficiencies (iron, B12, vitamin D)",
    ],
    boardsPearls: [
      "tTG IgA is screening test of choice",
      "Dermatitis herpetiformis: IgA deposits at dermal papillae",
      "Treatment: lifelong gluten-free diet",
    ],
    pediatrics:
      "May present with failure to thrive, short stature, or delayed puberty; screen if T1DM or Down syndrome.",
  },
  {
    id: "meckel-diverticulum",
    name: "Meckel Diverticulum",
    aliases: ["meckel diverticulum", "meckel's diverticulum"],
    definition:
      "True diverticulum from persistence of the vitelline (omphalomesenteric) duct, most common congenital GI anomaly.",
    pathophysiology:
      "Remnant of vitelline duct → ileal diverticulum may contain ectopic gastric mucosa → acid secretion → ulceration and painless rectal bleeding.",
    classicPresentation: [
      "Painless rectal bleeding in child (maroon stools)",
      "Rule of 2s: 2% population, 2 feet from ileocecal valve, 2 inches long, 2 types ectopic tissue, 2 years old",
      "Intussusception or obstruction",
    ],
    keyFindings: ["Technetium-99m pertechnetate scan (Meckel scan) — detects ectopic gastric mucosa"],
    associations: ["Ectopic gastric or pancreatic mucosa"],
    complications: ["GI bleeding", "Intussusception", "Volvulus", "Diverticulitis"],
    distinguishFrom: [
      "Intussusception — currant jelly stools, sausage-shaped mass",
      "Juvenile polyps — colonoscopy finding",
    ],
    treatment: [
      "Surgical resection if bleeding, obstruction, or intussusception",
      "Meckel scan guides diagnosis; supportive care for uncomplicated cases",
    ],
    boardsPearls: [
      "Rule of 2s is classic boards fodder",
      "Meckel scan detects ectopic gastric mucosa",
      "Most common congenital GI anomaly",
    ],
    pediatrics:
      "Most common cause of significant lower GI bleeding in children <2 years; painless bleeding is hallmark.",
  },
  {
    id: "wilson-disease",
    name: "Wilson Disease",
    aliases: ["wilson disease", "wilson's disease", "hepatolenticular degeneration"],
    definition:
      "Autosomal recessive disorder of copper metabolism causing toxic copper accumulation in liver, brain, and cornea.",
    pathophysiology:
      "ATP7B mutation → impaired biliary copper excretion → copper accumulation → hepatocyte injury, basal ganglia damage, Kayser-Fleischer rings.",
    classicPresentation: [
      "Young patient with hepatitis, cirrhosis, or neuropsychiatric symptoms",
      "Tremor, personality change, dysarthria",
      "Hemolytic anemia",
    ],
    keyFindings: ["Kayser-Fleischer rings (copper deposition in Descemet membrane)"],
    keyLabs: [
      "↓ ceruloplasmin",
      "↑ urinary copper excretion",
      "↑ hepatic copper on biopsy",
    ],
    associations: ["Autosomal recessive", "ATP7B gene on chromosome 13"],
    complications: ["Cirrhosis", "Hepatocellular carcinoma", "Neurologic disability"],
    distinguishFrom: [
      "Hemochromatosis — bronze diabetes, ↑ ferritin, HFE mutation",
      "Autoimmune hepatitis — autoantibodies, normal copper studies",
    ],
    treatment: [
      "Copper chelation: D-penicillamine or trientine",
      "Zinc acetate blocks intestinal copper absorption",
    ],
    boardsPearls: [
      "↓ ceruloplasmin + Kayser-Fleischer rings in young patient with liver disease",
      "Treat with chelators (penicillamine, trientine) or zinc",
      "Avoid copper-containing foods and multivitamins",
    ],
    pediatrics:
      "May present in adolescence with acute liver failure or neuropsychiatric symptoms; screen siblings.",
  },
  {
    id: "crohn-disease",
    name: "Crohn Disease",
    aliases: ["crohn disease", "crohn's disease", "regional enteritis"],
    definition:
      "Chronic transmural inflammatory bowel disease that can affect any part of the GI tract, often skip lesions with fistulae.",
    pathophysiology:
      "Dysregulated immune response to gut microbiota → transmural inflammation → skip lesions, fistulae, strictures; noncaseating granulomas on histology.",
    classicPresentation: [
      "Crampy abdominal pain, diarrhea (nonbloody)",
      "Weight loss, malnutrition",
      "Perianal fistulae, abscesses",
      "Terminal ileum involvement common",
    ],
    keyFindings: [
      "Noncaseating granulomas on biopsy",
      "Cobblestone mucosa, skip lesions on endoscopy",
      "String sign on small bowel follow-through",
    ],
    associations: ["Smoking worsens disease", "HLA associations", "Extraintestinal manifestations"],
    complications: ["Fistulae", "Strictures", "Abscesses", "Colorectal cancer (long-standing)"],
    distinguishFrom: [
      "Ulcerative colitis — continuous colonic disease, bloody diarrhea, no fistulae",
      "Celiac disease — villous atrophy, tTG positive",
    ],
    treatment: [
      "Aminosalicylates (mesalamine) for mild disease; corticosteroids for flares",
      "Immunomodulators (azathioprine) or anti-TNF (infliximab) for moderate-severe disease",
    ],
    boardsPearls: [
      "Transmural + skip lesions + fistulae = Crohn",
      "Smoking worsens Crohn but may be protective in UC",
      "Vitamin B12 deficiency with terminal ileum disease",
    ],
    pediatrics:
      "May present with growth failure and delayed puberty before GI symptoms; perianal disease common.",
  },
  {
    id: "ulcerative-colitis",
    name: "Ulcerative Colitis",
    aliases: ["ulcerative colitis", "uc"],
    definition:
      "Chronic inflammatory bowel disease limited to the colon and rectum, with continuous mucosal inflammation starting at the rectum.",
    pathophysiology:
      "Mucosal and submucosal inflammation confined to colon → crypt abscesses, pseudopolyps; no transmural involvement or skip lesions.",
    classicPresentation: [
      "Bloody diarrhea with mucus",
      "Tenesmus, urgency",
      "Crampy lower abdominal pain",
    ],
    keyFindings: [
      "Continuous inflammation from rectum proximally",
      "Crypt abscesses, loss of haustra (lead pipe colon)",
      "p-ANCA positive (serology)",
    ],
    associations: ["Primary sclerosing cholangitis", "p-ANCA"],
    complications: [
      "Toxic megacolon",
      "Colorectal cancer (long-standing extensive disease)",
      "Fulminant colitis",
    ],
    distinguishFrom: [
      "Crohn disease — skip lesions, fistulae, terminal ileum, noncaseating granulomas",
      "Infectious colitis — self-limited, stool studies positive",
    ],
    treatment: [
      "Aminosalicylates (mesalamine) for mild-moderate disease",
      "Corticosteroids for flares; colectomy for refractory or toxic megacolon",
    ],
    boardsPearls: [
      "Always involves rectum; extends continuously proximally",
      "PSC association — chronic cholestatic liver disease",
      "Toxic megacolon: colon dilation >6 cm + systemic toxicity",
    ],
  },
  {
    id: "peptic-ulcer-disease",
    name: "Peptic Ulcer Disease",
    aliases: ["peptic ulcer disease", "pud", "peptic ulcer", "gastric ulcer", "duodenal ulcer"],
    definition:
      "Mucosal break in stomach or duodenum from acid-pepsin injury exceeding mucosal defenses.",
    pathophysiology:
      "H. pylori infection or NSAIDs disrupt mucosal barrier → acid injury → ulceration; duodenal ulcers often have ↑ acid secretion.",
    classicPresentation: [
      "Epigastric pain — duodenal: relief with food; gastric: worse with food",
      "NSAID or H. pylori risk factors",
      "Melena or hematemesis if bleeding",
    ],
    keyLabs: ["H. pylori testing (urea breath test, stool antigen, biopsy)"],
    associations: ["H. pylori", "NSAID use", "Zollinger-Ellison syndrome"],
    complications: ["GI bleeding", "Perforation", "Gastric outlet obstruction"],
    distinguishFrom: [
      "ZES — multiple ulcers, diarrhea, PPI-resistant, ↑ gastrin",
      "Gastritis — superficial, no full-thickness ulcer",
      "GERD — heartburn without ulcer on endoscopy",
    ],
    treatment: [
      "PPI therapy; eradicate H. pylori if positive (triple therapy)",
      "Discontinue NSAIDs; treat ZES if refractory",
    ],
    boardsPearls: [
      "Duodenal ulcer: pain improves with eating",
      "Gastric ulcer: pain worsens with eating; biopsy margins to rule out malignancy",
      "H. pylori triple therapy: PPI + clarithromycin + amoxicillin",
    ],
  },
  {
    id: "sickle-cell-disease",
    name: "Sickle Cell Disease",
    aliases: ["sickle cell disease", "sickle cell anemia", "scd", "hbss"],
    definition:
      "Autosomal recessive hemoglobinopathy from HbS (β6 Glu→Val) causing red cell sickling, hemolysis, and vaso-occlusion.",
    pathophysiology:
      "Deoxygenated HbS polymerizes → sickle-shaped RBCs → vaso-occlusion and hemolysis; repeated infarcts cause organ damage.",
    classicPresentation: [
      "African descent child with painful crises",
      "Dactylitis (hand-foot syndrome) in infant",
      "Splenic sequestration, aplastic crisis",
    ],
    keyFindings: [
      "Sickled cells on peripheral smear",
      "Howell-Jolly bodies (functional asplenia)",
      "Bone infarcts on imaging",
    ],
    keyLabs: [
      "Hemoglobin electrophoresis: HbSS",
      "↑ reticulocyte count",
      "Indirect hyperbilirubinemia",
    ],
    associations: ["Autosomal recessive", "Malaria endemic areas (heterozygote advantage)"],
    complications: [
      "Acute chest syndrome",
      "Stroke",
      "Avascular necrosis of femoral head",
      "Autosplenectomy",
    ],
    distinguishFrom: [
      "Sickle cell trait — HbAS, asymptomatic, no anemia",
      "β-thalassemia — target cells, HbA2 elevation",
    ],
    treatment: [
      "Hydroxyurea to ↑ fetal hemoglobin and ↓ vaso-occlusive crises",
      "Pain crisis: IV fluids, opioids; penicillin prophylaxis in children",
    ],
    boardsPearls: [
      "HbS: glutamic acid → valine at position 6 of β-globin",
      "Functional asplenia → encapsulated organism risk (Strep pneumo, H. flu, Salmonella)",
      "Hydroxyurea ↑ fetal hemoglobin → ↓ sickling",
    ],
    pediatrics:
      "Newborn screen detects HbS; dactylitis is common first manifestation in infants; penicillin prophylaxis until age 5.",
  },
  {
    id: "lung-cancer",
    name: "Lung Cancer",
    aliases: ["lung cancer", "bronchogenic carcinoma", "lung carcinoma"],
    definition:
      "Malignant neoplasm of the lung, most commonly non-small cell (adenocarcinoma, squamous) or small cell carcinoma.",
    pathophysiology:
      "Carcinogen exposure (smoking) → cumulative genetic mutations → uncontrolled bronchial epithelial proliferation; small cell is neuroendocrine with early metastasis.",
    classicPresentation: [
      "Smoker with cough, hemoptysis, weight loss",
      "Chest pain, dyspnea",
      "Hoarseness (recurrent laryngeal nerve)",
    ],
    keyFindings: [
      "Mass or nodule on CXR/CT",
      "Supraclavicular lymphadenopathy",
      "Clubbing, hypertrophic osteoarthropathy",
    ],
    associations: [
      "Smoking (#1 risk factor)",
      "Asbestos (synergistic with smoking)",
      "Radon exposure",
    ],
    complications: [
      "Paraneoplastic syndromes",
      "Superior vena cava syndrome",
      "Pancoast tumor (horner syndrome)",
    ],
    distinguishFrom: [
      "Small cell — central, paraneoplastic, chemo-sensitive",
      "Adenocarcinoma — peripheral, EGFR mutations in nonsmokers",
      "Squamous — central, hypercalcemia (PTHrP)",
    ],
    treatment: [
      "Surgical resection for early-stage NSCLC",
      "Small cell: chemotherapy ± radiation (surgery rarely used)",
    ],
    boardsPearls: [
      "Small cell: SIADH, Cushing (ACTH), Lambert-Eaton",
      "Squamous: hypercalcemia (PTHrP)",
      "Adenocarcinoma: most common in nonsmokers and women",
    ],
  },
  {
    id: "cystic-fibrosis",
    name: "Cystic Fibrosis",
    aliases: ["cystic fibrosis", "cf"],
    definition:
      "Autosomal recessive disorder from CFTR chloride channel dysfunction causing thick secretions in lungs, pancreas, and other organs.",
    pathophysiology:
      "CFTR mutation (ΔF508 most common) → defective chloride transport → dehydrated mucus → airway obstruction, recurrent infections, pancreatic insufficiency.",
    classicPresentation: [
      "Recurrent pulmonary infections (Staph aureus early, Pseudomonas later)",
      "Steatorrhea, failure to thrive",
      "Meconium ileus in newborn",
    ],
    keyLabs: [
      "↑ sweat chloride (>60 mEq/L diagnostic)",
      "CFTR genetic testing",
      "↓ fecal elastase (pancreatic insufficiency)",
    ],
    associations: ["Autosomal recessive", "ΔF508 mutation"],
    complications: [
      "Bronchiectasis",
      "Cor pulmonale",
      "Diabetes (CF-related)",
      "Infertility (males — absent vas deferens)",
    ],
    distinguishFrom: [
      "Primary ciliary dyskinesia — situs inversus, normal sweat chloride",
      "Celiac disease — malabsorption with normal lungs",
    ],
    treatment: [
      "Airway clearance, inhaled bronchodilators, CFTR modulators (e.g., ivacaftor/lumacaftor)",
      "Pancreatic enzyme replacement; treat infections aggressively",
    ],
    boardsPearls: [
      "Sweat chloride test is diagnostic gold standard",
      "Pseudomonas colonization is hallmark of chronic lung disease",
      "Absent vas deferens → infertility in males without obstruction",
    ],
    pediatrics:
      "Meconium ileus in newborn is virtually pathognomonic; newborn screen increasingly detects CF before symptoms.",
  },
  {
    id: "asthma",
    name: "Asthma",
    aliases: ["asthma", "bronchial asthma", "reactive airway disease"],
    definition:
      "Chronic inflammatory airway disease with reversible bronchoconstriction, airway hyperresponsiveness, and variable expiratory airflow obstruction.",
    pathophysiology:
      "Type I hypersensitivity and eosinophilic inflammation → bronchial smooth muscle hyperreactivity → episodic bronchoconstriction; airway remodeling with chronic disease.",
    classicPresentation: [
      "Episodic wheezing, cough, dyspnea",
      "Nocturnal symptoms, exercise-induced symptoms",
      "Atopy, allergic rhinitis, eczema",
    ],
    keyFindings: [
      "Expiratory wheeze",
      "↓ FEV1/FVC ratio, reversibility with bronchodilator",
      "Hyperinflation on CXR",
    ],
    associations: ["Atopy", "Family history", "Occupational exposures"],
    complications: ["Status asthmaticus", "Respiratory failure", "Airway remodeling"],
    distinguishFrom: [
      "COPD — older, smokers, incomplete reversibility",
      "Cardiac asthma — heart failure with wheeze",
      "Vocal cord dysfunction — normal spirometry between episodes",
    ],
    treatment: [
      "Inhaled corticosteroids for persistent disease; SABA for acute relief",
      "Avoid triggers; leukotriene modifiers for mild disease or aspirin-exacerbated respiratory disease",
    ],
    boardsPearls: [
      "Reversible obstruction: FEV1 improves ≥12% with bronchodilator",
      "First-line: inhaled corticosteroids for persistent disease",
      "Leukotriene modifiers (montelukast) for mild disease or aspirin-exacerbated respiratory disease",
    ],
    pediatrics:
      "Most common chronic disease of childhood; viral URIs are common triggers; watch for atypical presentations (cough-only asthma).",
  },
  {
    id: "sarcoidosis",
    name: "Sarcoidosis",
    aliases: ["sarcoidosis", "sarcoid"],
    definition:
      "Multisystem granulomatous disease of unknown cause, most commonly affecting lungs and lymph nodes.",
    pathophysiology:
      "Noncaseating granulomas in affected organs → CD4+ Th1 response; elevated ACE from epithelioid macrophages; hypercalcemia from macrophage 1α-hydroxylase activity.",
    classicPresentation: [
      "Young African American woman with dyspnea, cough",
      "Bilateral hilar lymphadenopathy on CXR",
      "Erythema nodosum, uveitis, skin lesions",
    ],
    keyFindings: [
      "Bilateral hilar lymphadenopathy (BHL)",
      "Noncaseating granulomas on biopsy",
      "Löfgren syndrome: BHL + erythema nodosum + arthritis",
    ],
    keyLabs: ["↑ ACE (nonspecific)", "Hypercalcemia/hypercalciuria"],
    associations: ["African American ethnicity", "Female sex"],
    complications: ["Pulmonary fibrosis", "Cardiac sarcoid (arrhythmias)", "Neurosarcoidosis"],
    distinguishFrom: [
      "Tuberculosis — caseating granulomas, positive AFB",
      "Lymphoma — B symptoms, mediastinal mass without granulomas",
      "Berylliosis — identical histology, occupational exposure",
    ],
    treatment: [
      "Observation for mild disease; corticosteroids for symptomatic or progressive disease",
      "Avoidance of further exposure",
    ],
    boardsPearls: [
      "Noncaseating granulomas + bilateral hilar lymphadenopathy",
      "↑ ACE from epithelioid cells (also used to track activity)",
      "Schirrmann bodies: concentric calcified lamellae in granulomas",
    ],
  },
  {
    id: "neonatal-respiratory-distress-syndrome",
    name: "Neonatal Respiratory Distress Syndrome",
    aliases: [
      "neonatal respiratory distress syndrome",
      "nrds",
      "respiratory distress syndrome",
      "hyaline membrane disease",
    ],
    definition:
      "Respiratory failure in premature neonates from surfactant deficiency and immature lungs.",
    pathophysiology:
      "Insufficient surfactant (type II pneumocytes) → ↑ alveolar surface tension → atelectasis → hypoxemia and respiratory acidosis; hyaline membranes form.",
    classicPresentation: [
      "Premature infant with tachypnea, grunting, retractions within hours of birth",
      "Worsening distress over first 48 h",
      "Cesarean delivery without labor (↓ cortisol/surfactant)",
    ],
    keyFindings: [
      "Ground-glass appearance, air bronchograms on CXR",
      "Grunting (maintains PEEP)",
      "Hypoxemia, respiratory acidosis",
    ],
    associations: ["Prematurity", "Maternal diabetes", "Male sex", "Cesarean delivery"],
    complications: ["Pneumothorax", "Persistent pulmonary hypertension", "Bronchopulmonary dysplasia"],
    distinguishFrom: [
      "Transient tachypnea of newborn — term/near-term, fluid in lungs, resolves in 24–72 h",
      "Meconium aspiration — post-term, meconium-stained fluid",
    ],
    treatment: [
      "Exogenous surfactant replacement; CPAP or mechanical ventilation",
      "Antenatal corticosteroids to accelerate fetal lung maturity",
    ],
    boardsPearls: [
      "Surfactant deficiency in premature infants",
      "Lecithin/sphingomyelin ratio ≥2 indicates lung maturity",
      "Treat with surfactant replacement and respiratory support",
    ],
    pediatrics:
      "Classic disease of prematurity; antenatal corticosteroids accelerate fetal surfactant production and reduce incidence.",
  },
  {
    id: "emphysema",
    name: "Emphysema",
    aliases: ["emphysema", "pulmonary emphysema"],
    definition:
      "COPD phenotype with permanent enlargement of airspaces distal to terminal bronchioles due to alveolar wall destruction.",
    pathophysiology:
      "Smoke/elastase injury → loss of alveolar walls → ↓ elastic recoil → air trapping; α1-antitrypsin deficiency in panacinar form.",
    classicPresentation: [
      "Long smoking history, dyspnea, minimal cough",
      "Barrel chest, pursed-lip breathing",
      "Weight loss, cachexia",
    ],
    keyFindings: [
      "Hyperinflation, flattened diaphragm on CXR",
      "↓ breath sounds, prolonged expiration",
      "↓ DLCO",
    ],
    associations: ["Smoking", "α1-antitrypsin deficiency (panacinar)"],
    complications: ["Cor pulmonale", "Pneumothorax (especially bullae)", "Respiratory failure"],
    distinguishFrom: [
      "Chronic bronchitis — productive cough prominent, less hyperinflation",
      "Asthma — reversible obstruction, younger onset",
    ],
    treatment: [
      "Smoking cessation; bronchodilators (SABA, LAMA, LABA)",
      "Supplemental O₂ for hypoxemia; α1-antitrypsin replacement if deficient",
    ],
    boardsPearls: [
      "Centriacinar (centrilobular): smoking, upper lobes",
      "Panacinar: α1-antitrypsin deficiency, lower lobes",
      "Pink puffer (emphysema) vs blue bloater (chronic bronchitis)",
    ],
  },
  {
    id: "pneumoconiosis",
    name: "Pneumoconiosis",
    aliases: ["pneumoconiosis", "pneumoconioses", "silicosis", "asbestosis", "coal workers pneumoconiosis"],
    definition:
      "Interstitial lung disease from inhalation of mineral dusts (silica, asbestos, coal) causing fibrosis and restrictive physiology.",
    pathophysiology:
      "Inhaled particles → macrophage activation and fibrosis → restrictive lung disease; silica impairs macrophage function → ↑ TB risk; asbestos → pleural plaques, mesothelioma.",
    classicPresentation: [
      "Occupational exposure (mining, construction, shipyard)",
      "Progressive dyspnea",
      "Asbestos: pleural plaques, decades latency for mesothelioma",
    ],
    keyFindings: [
      "Small rounded opacities on CXR (silicosis)",
      "Eggshell calcification of hilar lymph nodes (silicosis)",
      "Pleural plaques (asbestos)",
    ],
    associations: [
      "Silica exposure → ↑ tuberculosis risk",
      "Asbestos + smoking → synergistic lung cancer risk",
    ],
    complications: ["Progressive massive fibrosis", "Mesothelioma (asbestos)", "Lung cancer"],
    distinguishFrom: [
      "Sarcoidosis — noncaseating granulomas, BHL, no occupational history",
      "Idiopathic pulmonary fibrosis — no dust exposure",
    ],
    treatment: [
      "Remove from exposure; no specific cure",
      "Supportive care; treat complications (TB prophylaxis in silicosis)",
    ],
    boardsPearls: [
      "Silicosis: upper lobe fibrosis, eggshell hilar calcification, ↑ TB",
      "Asbestos: pleural plaques, mesothelioma (not lung cancer alone)",
      "Berylliosis mimics sarcoidosis histologically",
    ],
  },
  {
    id: "pulmonary-hypertension",
    name: "Pulmonary Hypertension",
    aliases: ["pulmonary hypertension", "pah", "pulmonary arterial hypertension"],
    definition:
      "Elevated mean pulmonary arterial pressure (≥20 mmHg at rest) from varied etiologies, leading to right heart strain and failure.",
    pathophysiology:
      "↑ pulmonary vascular resistance → right ventricular pressure overload → RV hypertrophy and eventual failure; etiologies include idiopathic, left heart disease, hypoxemia, chronic thromboembolism.",
    classicPresentation: [
      "Progressive dyspnea, exertional syncope",
      "Underlying connective tissue disease or CHD",
      "Insidious onset over months",
    ],
    keyFindings: [
      "Loud P2 (pulmonic component of S2)",
      "Parasternal heave (RV hypertrophy)",
      "Elevated JVP, peripheral edema (late)",
    ],
    keyLabs: ["Echo: elevated RVSP, RV dilation", "Right heart catheterization — definitive"],
    associations: [
      "Idiopathic PAH",
      "Scleroderma",
      "Left heart failure",
      "Chronic thromboembolic disease",
      "COPD/hypoxemia (Eisenmenger)",
    ],
    complications: ["Right heart failure", "Sudden death", "Syncope (poor prognostic sign)"],
    distinguishFrom: [
      "Left heart failure — pulmonary edema, ↓ EF",
      "Asthma/COPD — obstructive pattern on PFTs",
    ],
    treatment: [
      "Treat underlying cause (left heart failure, hypoxemia, chronic thromboembolism)",
      "Vasodilators (sildenafil, epoprostenol) for pulmonary arterial hypertension",
    ],
    boardsPearls: [
      "Loud P2 suggests pulmonary hypertension",
      "Eisenmenger: left-to-right shunt → irreversible PAH → right-to-left shunt",
      "Syncope in PAH indicates advanced disease",
    ],
  },
  {
    id: "chronic-bronchitis",
    name: "Chronic Bronchitis",
    aliases: ["chronic bronchitis"],
    definition:
      "COPD phenotype defined clinically as productive cough for ≥3 months in ≥2 consecutive years, with airway inflammation and mucus hypersecretion.",
    pathophysiology:
      "Chronic irritant exposure (smoking) → goblet cell hyperplasia and mucus hypersecretion → airway obstruction and recurrent infections; Reid index >0.5 (gland/wall thickness).",
    classicPresentation: [
      "Chronic productive cough (daily sputum)",
      "Long smoking history",
      "Recurrent respiratory infections",
    ],
    keyFindings: [
      "Prolonged expiration, wheeze",
      "Cyanosis (blue bloater phenotype)",
      "Hypercapnia, polycythemia",
    ],
    associations: ["Smoking", "Air pollution", "Occupational dusts"],
    complications: ["Cor pulmonale", "Respiratory failure", "Secondary polycythemia"],
    distinguishFrom: [
      "Emphysema — dyspnea predominant, hyperinflation, pink puffer",
      "Bronchiectasis — copious purulent sputum, dilated bronchi on CT",
    ],
    treatment: [
      "Smoking cessation; bronchodilators and inhaled corticosteroids",
      "Pulmonary rehabilitation; treat exacerbations with antibiotics and steroids",
    ],
    boardsPearls: [
      "Clinical definition: productive cough ≥3 months × 2 years",
      "Reid index >0.5 (gland layer thickness / bronchial wall thickness)",
      "Blue bloater: chronic bronchitis with hypercapnia and cyanosis",
    ],
  },
  {
    id: "nephritic-syndrome",
    name: "Nephritic Syndrome",
    aliases: ["nephritic syndrome", "nephritic"],
    definition:
      "Glomerular disease presenting with hematuria, RBC casts, oliguria, hypertension, and variable proteinuria (<3.5 g/day).",
    pathophysiology:
      "Glomerular inflammation → GBM damage → RBC leakage into urine → RBC casts; ↓ GFR → oliguria, fluid retention, hypertension.",
    classicPresentation: [
      "Cola-colored urine (hematuria)",
      "Periorbital edema, hypertension",
      "Recent streptococcal infection (post-streptococcal GN)",
    ],
    keyLabs: [
      "RBC casts on urinalysis",
      "↑ creatinine, ↓ GFR",
      "↑ anti-streptolysin O (post-strep GN)",
      "↓ C3 (post-strep GN, MPGN)",
    ],
    associations: [
      "Post-streptococcal glomerulonephritis",
      "IgA nephropathy (Berger disease)",
      "Rapidly progressive GN (Goodpasture, ANCA vasculitis)",
    ],
    complications: ["Acute kidney injury", "Chronic kidney disease", "Hypertensive emergency"],
    distinguishFrom: [
      "Nephrotic syndrome — heavy proteinuria (>3.5 g/day), fatty casts, minimal hematuria",
      "UTI — WBC casts, dysuria, positive culture",
    ],
    treatment: [
      "Supportive care for post-streptococcal GN (usually self-limited)",
      "Immunosuppression (steroids, cyclophosphamide) for rapidly progressive GN",
    ],
    boardsPearls: [
      "RBC casts = glomerular origin of hematuria",
      "Post-strep GN: low C3, normal C4, resolves in 6–8 weeks",
      "Nephritic = inflammation; nephrotic = podocyte damage/leak",
    ],
    pediatrics:
      "Post-streptococcal GN common in children 1–3 weeks after pharyngitis or skin infection; usually self-limited.",
  },
  {
    id: "nephrotic-syndrome",
    name: "Nephrotic Syndrome",
    aliases: ["nephrotic syndrome", "nephrotic"],
    definition:
      "Glomerular disease with heavy proteinuria (>3.5 g/day), hypoalbuminemia, edema, hyperlipidemia, and lipiduria.",
    pathophysiology:
      "Podocyte/GBM damage → massive protein loss → ↓ oncotic pressure → edema; liver compensates with lipoprotein synthesis → hyperlipidemia.",
    classicPresentation: [
      "Periorbital and peripheral edema",
      "Foamy urine",
      "Hypercoagulability (renal vein thrombosis)",
    ],
    keyLabs: [
      "Proteinuria >3.5 g/day",
      "↓ albumin",
      "Fatty casts (Maltese cross on polarized light)",
      "↑ LDL cholesterol",
    ],
    associations: [
      "Minimal change disease (children)",
      "Focal segmental glomerulosclerosis",
      "Membranous nephropathy (adults)",
      "Diabetic nephropathy",
      "Amyloidosis",
    ],
    complications: [
      "Renal vein thrombosis",
      "Infection (loss of immunoglobulins)",
      "Hypercoagulability",
    ],
    distinguishFrom: [
      "Nephritic syndrome — RBC casts, hypertension, oliguria",
      "Heart failure edema — JVD, pulmonary congestion",
    ],
    treatment: [
      "Corticosteroids for minimal change disease (especially in children)",
      "ACE inhibitors to reduce proteinuria; treat underlying cause",
    ],
    boardsPearls: [
      "Minimal change disease: selective albuminuria, responds to steroids, most common in children",
      "FSGS: common in African Americans, HIV-associated",
      "Hypercoagulable state — lose antithrombin III in urine",
    ],
    pediatrics:
      "Minimal change disease is most common cause in children; dramatic response to corticosteroids.",
  },
  {
    id: "nephrolithiasis",
    name: "Nephrolithiasis",
    aliases: ["nephrolithiasis", "kidney stones", "renal calculi", "urolithiasis"],
    definition:
      "Formation of crystalline concretions in the urinary tract causing colicky flank pain and hematuria.",
    pathophysiology:
      "Supersaturation of urine with stone-forming salts → crystal nucleation and growth; calcium oxalate most common; staghorn calculi from struvite (infection stones).",
    classicPresentation: [
      "Sudden severe flank pain radiating to groin",
      "Hematuria",
      "Restlessness (cannot find comfortable position)",
    ],
    keyLabs: [
      "Hematuria on urinalysis",
      "CT abdomen/pelvis without contrast — gold standard",
      "24-h urine collection for metabolic workup",
    ],
    associations: [
      "Hypercalciuria",
      "Hyperoxaluria",
      "Hyperuricemia (gout)",
      "UTI with urease-positive organisms (struvite)",
    ],
    complications: ["Hydronephrosis", "Pyelonephritis", "Obstructive uropathy"],
    distinguishFrom: [
      "Pyelonephritis — fever, WBC casts, less colicky pain",
      "AAA — pulsatile mass, older hypertensive patient",
    ],
    treatment: [
      "Analgesia (NSAIDs) and hydration for acute colic",
      "Lithotripsy or surgical removal for large or obstructing stones",
    ],
    boardsPearls: [
      "Calcium oxalate: envelope-shaped crystals, most common",
      "Struvite (ammonium magnesium phosphate): staghorn calculi, Proteus/Morganella",
      "Uric acid stones: radiolucent on X-ray, associated with gout",
    ],
  },
  {
    id: "urinary-tract-infection",
    name: "Urinary Tract Infection",
    aliases: ["urinary tract infection", "uti", "cystitis", "pyelonephritis"],
    definition:
      "Bacterial infection of the urinary tract, ranging from uncomplicated cystitis to pyelonephritis and urosepsis.",
    pathophysiology:
      "Ascension of uropathogens (E. coli most common) from perineum → bladder (cystitis) or kidneys (pyelonephritis); virulence factors include fimbriae (P pili).",
    classicPresentation: [
      "Cystitis: dysuria, frequency, urgency, suprapubic pain",
      "Pyelonephritis: fever, flank pain, CVA tenderness",
      "Women, sexually active, catheter use risk factors",
    ],
    keyLabs: [
      "Positive urine culture (>10⁵ CFU/mL)",
      "Pyuria, bacteriuria on urinalysis",
      "WBC casts suggest pyelonephritis",
    ],
    associations: ["Female sex", "Sexual activity", "Catheterization", "Diabetes", "Pregnancy"],
    complications: ["Pyelonephritis", "Urosepsis", "Emphysematous pyelonephritis (diabetics)"],
    distinguishFrom: [
      "Vaginitis — external dysuria, discharge, normal urine culture",
      "Acute urethritis (GC/Chlamydia) — discharge, urethral inflammation",
    ],
    treatment: [
      "Cystitis: TMP-SMX or nitrofurantoin (3–5 days)",
      "Pyelonephritis: fluoroquinolone or ceftriaxone; longer course",
    ],
    boardsPearls: [
      "E. coli = #1 cause (uropathogenic strains with P fimbriae)",
      "Nitrites on dipstick = gram-negative organisms with nitrate reductase",
      "Staghorn calculi + Proteus → struvite stones",
    ],
    pediatrics:
      "Febrile UTI in young children requires imaging for reflux/anatomy; boys with first UTI need workup.",
  },
  {
    id: "rheumatoid-arthritis",
    name: "Rheumatoid Arthritis",
    aliases: ["rheumatoid arthritis", "ra"],
    definition:
      "Chronic autoimmune inflammatory arthritis with symmetric polyarticular involvement and systemic features, often leading to joint destruction.",
    pathophysiology:
      "Autoimmune synovitis → pannus formation → cartilage and bone erosion; RF and anti-CCP antibodies reflect immune dysregulation.",
    classicPresentation: [
      "Symmetric polyarthritis of small joints (MCP, PIP, wrists)",
      "Morning stiffness >1 hour",
      "Fatigue, low-grade fever",
    ],
    keyFindings: [
      "Swelling and tenderness of MCP/PIP joints",
      "Ulnar deviation, swan-neck/boutonnière deformities (late)",
      "Subcutaneous rheumatoid nodules",
    ],
    keyLabs: ["↑ RF", "↑ anti-CCP (more specific)", "↑ ESR/CRP"],
    associations: ["HLA-DR4", "Smoking", "Pulmonary fibrosis", "Felty syndrome"],
    complications: [
      "Joint destruction and deformity",
      "Atlantoaxial subluxation",
      "Interstitial lung disease",
      "Cardiovascular disease",
    ],
    distinguishFrom: [
      "Osteoarthritis — DIP involvement, no systemic features, minimal morning stiffness",
      "SLE — malar rash, anti-dsDNA, less erosive arthritis",
    ],
    treatment: [
      "Methotrexate anchor DMARD; NSAIDs for symptom relief",
      "TNF inhibitors (infliximab, etanercept) for refractory disease",
    ],
    boardsPearls: [
      "Anti-CCP more specific than rheumatoid factor",
      "Spares DIPs (unlike osteoarthritis)",
      "Methotrexate is anchor DMARD; TNF inhibitors for refractory disease",
    ],
  },
  {
    id: "turner-syndrome",
    name: "Turner Syndrome",
    aliases: ["turner syndrome", "turner's syndrome", "45,x"],
    definition:
      "Chromosomal disorder in females (45,X or mosaic) with short stature, ovarian dysgenesis, and characteristic physical features.",
    pathophysiology:
      "Complete or partial monosomy X → ovarian failure (streak gonads) → estrogen deficiency; lymphatic dysplasia → webbed neck, lymphedema.",
    classicPresentation: [
      "Short stature girl with webbed neck",
      "Primary amenorrhea, lack of secondary sexual characteristics",
      "Coarctation of aorta, bicuspid aortic valve",
    ],
    keyFindings: [
      "Webbed neck, low posterior hairline",
      "Widely spaced nipples (shield chest)",
      "Short fourth metacarpal",
    ],
    keyLabs: ["Karyotype: 45,X or mosaic (45,X/46,XX)"],
    associations: ["Coarctation of aorta", "Bicuspid aortic valve", "Horseshoe kidney"],
    complications: ["Infertility", "Aortic dissection", "Osteoporosis", "Hypothyroidism (autoimmune)"],
    distinguishFrom: [
      "Noonan syndrome — 46,XY or XX, pulmonary stenosis, normal ovaries",
      "Constitutional growth delay — normal karyotype",
    ],
    treatment: [
      "Growth hormone for short stature; estrogen replacement for pubertal induction",
      "Monitor and repair cardiac anomalies (coarctation, bicuspid valve)",
    ],
    boardsPearls: [
      "45,X — most common cause of primary amenorrhea",
      "Streak gonads; cannot conceive without assisted reproduction",
      "Coarctation + bicuspid valve — screen with echo",
    ],
    pediatrics:
      "Diagnosed in infancy (lymphedema, webbed neck) or adolescence (short stature, absent puberty); growth hormone and estrogen replacement.",
  },
  {
    id: "systemic-lupus-erythematosus",
    name: "Systemic Lupus Erythematosus",
    aliases: ["systemic lupus erythematosus", "sle", "lupus"],
    definition:
      "Multisystem autoimmune disease with autoantibodies against nuclear antigens, causing inflammation of skin, joints, kidneys, and other organs.",
    pathophysiology:
      "Loss of self-tolerance → immune complexes deposit in tissues → type III hypersensitivity → complement consumption and organ damage.",
    classicPresentation: [
      "Young woman with joint pain, rash, fatigue",
      "Photosensitive malar (butterfly) rash",
      "Oral ulcers, Raynaud phenomenon",
    ],
    keyFindings: [
      "Malar rash sparing nasolabial folds",
      "Oral ulcers",
      "Nonerosive arthritis",
    ],
    keyLabs: [
      "ANA positive (sensitive)",
      "Anti-dsDNA (specific, correlates with renal disease)",
      "Anti-Smith (specific)",
      "↓ C3/C4 (active disease)",
    ],
    associations: ["HLA-DR2/DR3", "Drug-induced lupus (hydralazine, procainamide, isoniazid)"],
    complications: ["Lupus nephritis", "Libman-Sacks endocarditis", "Antiphospholipid syndrome"],
    distinguishFrom: [
      "Rheumatoid arthritis — erosive, anti-CCP, spares malar rash",
      "Rosacea — centrofacial erythema, no systemic features",
    ],
    treatment: [
      "Hydroxychloroquine for skin/joint disease; corticosteroids for flares",
      "Immunosuppressants (mycophenolate, cyclophosphamide) for lupus nephritis",
    ],
    boardsPearls: [
      "Anti-dsDNA correlates with renal disease activity",
      "↓ complement (C3/C4) during flares",
      "Drug-induced lupus: anti-histone antibodies, resolves when drug stopped",
      "Libman-Sacks endocarditis: sterile verrucous vegetations on mitral/aortic valves — both sides of valve",
      "Libman-Sacks vs infective endocarditis: no bacteremia, negative cultures, associated with SLE activity",
    ],
    pediatrics:
      "Childhood SLE often more severe with higher renal involvement; monitor closely for nephritis.",
  },
  {
    id: "granulomatosis-with-polyangiitis",
    name: "Granulomatosis with Polyangiitis",
    aliases: [
      "granulomatosis with polyangiitis",
      "wegener granulomatosis",
      "wegener's granulomatosis",
      "wegners granulomatosis",
      "gpa",
    ],
    definition:
      "ANCA-associated small-vessel vasculitis with necrotizing granulomatous inflammation of upper airways, lungs, and kidneys.",
    pathophysiology:
      "Autoimmune neutrophil activation (PR3-ANCA/c-ANCA) → necrotizing granulomatous vasculitis of small vessels → sinonasal destruction, pulmonary nodules/cavities, and crescentic glomerulonephritis.",
    classicPresentation: [
      "Chronic sinusitis, epistaxis, nasal crusting or saddle-nose deformity",
      "Cough, hemoptysis, pulmonary nodules or cavities on CXR",
      "Hematuria, RBC casts, rapidly progressive glomerulonephritis",
    ],
    keyFindings: [
      "Saddle-nose deformity, chronic otitis/sinusitis",
      "Pulmonary nodules with cavitation",
      "RPGN on renal biopsy (pauci-immune crescentic GN)",
    ],
    keyLabs: [
      "c-ANCA (anti-PR3) — most specific (~90%)",
      "↑ ESR/CRP",
      "Urinalysis: hematuria, RBC casts, ↑ creatinine",
    ],
    associations: ["PR3-ANCA positivity", "Upper and lower respiratory tract involvement"],
    complications: ["Renal failure", "Diffuse alveolar hemorrhage", "Chronic sinus/ear damage"],
    distinguishFrom: [
      "Microscopic polyangiitis — pauci-immune GN and lung hemorrhage, usually without upper airway granulomas; MPO-ANCA",
      "Churg-Strauss (EGPA) — asthma, eosinophilia, neuropathy",
      "Goodpasture syndrome — anti-GBM antibodies, linear IgG on biopsy",
    ],
    treatment: [
      "Cyclophosphamide or rituximab + high-dose corticosteroids for induction",
      "Azathioprine or methotrexate for maintenance",
      "Plasmapheresis if severe pulmonary hemorrhage or rapidly progressive GN",
    ],
    boardsPearls: [
      "GPA triad: upper airway + lungs + kidneys",
      "c-ANCA (anti-PR3) — think GPA (Wegener)",
      "Pauci-immune crescentic GN on biopsy — few immune deposits",
      "Former name Wegener granulomatosis; now GPA",
    ],
    pediatrics:
      "Rare in children; juvenile GPA presents similarly with ENT, pulmonary, and renal involvement — treat aggressively to preserve renal function.",
  },
  {
    id: "eosinophilic-granulomatosis-with-polyangiitis",
    name: "Eosinophilic Granulomatosis with Polyangiitis",
    aliases: [
      "eosinophilic granulomatosis with polyangiitis",
      "churg-strauss syndrome",
      "churg strauss syndrome",
      "churg-strauss",
      "egpa",
    ],
    definition:
      "ANCA-associated vasculitis characterized by asthma, eosinophilia, and necrotizing granulomatous inflammation of small vessels.",
    pathophysiology:
      "Eosinophilic inflammation and granulomatous vasculitis affect lungs, skin, nerves, and other organs; often p-ANCA (MPO) positive. May develop after years of asthma.",
    classicPresentation: [
      "Adult with long-standing asthma who develops worsening respiratory symptoms",
      "Marked peripheral eosinophilia",
      "Mononeuritis multiplex, sinusitis, skin nodules or purpura",
    ],
    keyFindings: [
      "Asthma + eosinophilia + vasculitic organ involvement",
      "Peripheral neuropathy (mononeuritis multiplex)",
      "Pulmonary infiltrates (not always cavitary, unlike GPA)",
    ],
    keyLabs: [
      "Marked eosinophilia (>10% or >1500/μL)",
      "p-ANCA (anti-MPO) in ~40–60%",
      "↑ IgE, ↑ ESR/CRP",
    ],
    associations: ["Pre-existing asthma", "Allergic rhinitis", "MPO-ANCA positivity"],
    complications: ["Peripheral neuropathy", "Cardiac involvement (eosinophilic myocarditis)", "GI vasculitis"],
    distinguishFrom: [
      "Asthma alone — no eosinophilic vasculitis or neuropathy",
      "GPA — c-ANCA/PR3, upper airway destruction, cavitary lung lesions",
      "Hypereosinophilic syndrome — eosinophilia without vasculitis",
    ],
    treatment: [
      "High-dose corticosteroids; add cyclophosphamide or rituximab for severe organ involvement",
      "Treat cardiac and neurologic involvement aggressively",
    ],
    boardsPearls: [
      "Churg-Strauss triad: asthma + eosinophilia + vasculitis",
      "Mononeuritis multiplex is a classic clue",
      "p-ANCA (MPO) more common than in GPA (c-ANCA/PR3)",
      "Former name Churg-Strauss; now EGPA",
    ],
    pediatrics:
      "Very rare; eosinophilic vasculitis in children with asthma requires exclusion of parasitic infection and primary hypereosinophilic disorders.",
  },
  {
    id: "schizophrenia",
    name: "Schizophrenia",
    aliases: ["schizophrenia"],
    definition:
      "Chronic psychotic disorder with positive symptoms (hallucinations, delusions), negative symptoms, and cognitive dysfunction lasting ≥6 months.",
    pathophysiology:
      "Dopamine hypothesis: ↑ mesolimbic dopamine (positive symptoms); ↓ mesocortical dopamine (negative/cognitive symptoms); structural brain changes and genetic predisposition.",
    classicPresentation: [
      "Young adult with auditory hallucinations, persecutory delusions",
      "Social withdrawal, flat affect, avolition",
      "Decline in functioning over months",
    ],
    keyFindings: [
      "Auditory hallucinations (commenting or command type)",
      "Bizarre delusions",
      "Disorganized speech or behavior",
    ],
    associations: ["Family history", "Cannabis use (adolescence)", "Urban upbringing"],
    complications: ["Suicide", "Substance abuse", "Treatment nonadherence"],
    distinguishFrom: [
      "Schizophreniform — symptoms 1–6 months",
      "Brief psychotic disorder — <1 month",
      "Schizoaffective — mood episode concurrent with psychosis",
    ],
    treatment: [
      "Antipsychotics (risperidone, olanzapine) for positive symptoms",
      "Supportive psychotherapy and social rehabilitation",
    ],
    boardsPearls: [
      "Diagnosis requires ≥6 months of symptoms including ≥1 month active phase",
      "Positive symptoms respond better to antipsychotics than negative",
      "Typical antipsychotics: D2 blockade → extrapyramidal symptoms",
    ],
  },
  {
    id: "major-depressive-disorder",
    name: "Major Depressive Disorder",
    aliases: [
      "major depressive disorder",
      "depression",
      "mdd",
      "clinical depression",
    ],
    definition:
      "Mood disorder with persistent depressed mood or anhedonia plus associated neurovegetative symptoms causing significant functional impairment.",
    pathophysiology:
      "Multifactorial: monoamine deficiency hypothesis, HPA axis dysregulation, neuroplasticity changes; serotonin, norepinephrine, and dopamine pathways implicated.",
    classicPresentation: [
      "Depressed mood or anhedonia ≥2 weeks",
      "Sleep disturbance, appetite change, fatigue",
      "Guilt, poor concentration, psychomotor changes",
    ],
    keyFindings: [
      "SIGECAPS: Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicidality",
      "Psychomotor retardation or agitation",
    ],
    associations: ["Family history", "Chronic medical illness", "Substance use"],
    complications: ["Suicide", "Treatment-resistant depression", "Medical comorbidity"],
    distinguishFrom: [
      "Persistent depressive disorder (dysthymia) — chronic low mood ≥2 years",
      "Bipolar depression — history of manic/hypomanic episodes",
      "Adjustment disorder — clear stressor, symptoms <6 months",
    ],
    treatment: [
      "SSRIs (sertraline, fluoxetine) first-line pharmacotherapy",
      "Cognitive behavioral therapy; ECT for severe or psychotic depression",
    ],
    boardsPearls: [
      "≥5 SIGECAPS symptoms for ≥2 weeks, one must be depressed mood or anhedonia",
      "SSRIs first-line; do not start until bipolar disorder ruled out",
      "Electroconvulsive therapy for severe/refractory or psychotic depression",
    ],
  },
  {
    id: "hiv-infection",
    name: "HIV Infection",
    aliases: ["hiv infection", "hiv", "aids", "human immunodeficiency virus"],
    definition:
      "Retroviral infection of CD4+ T lymphocytes causing progressive immunodeficiency and opportunistic infections when advanced (AIDS).",
    pathophysiology:
      "HIV binds CD4 and CCR5/CXCR4 → viral integration into host genome → CD4+ T-cell depletion → impaired cell-mediated immunity → opportunistic infections and malignancies.",
    classicPresentation: [
      "Acute retroviral syndrome (mononucleosis-like illness)",
      "Opportunistic infections at low CD4 (PJP, toxoplasmosis, MAC)",
      "Weight loss, fever, lymphadenopathy",
    ],
    keyLabs: [
      "HIV antibody/p24 antigen (4th generation ELISA)",
      "HIV RNA viral load",
      "CD4 count",
    ],
    keyFindings: [
      "Oral thrush, oral hairy leukoplakia",
      "Kaposi sarcoma (HHV-8)",
      "Dementia, peripheral neuropathy",
    ],
    associations: ["IV drug use", "Unprotected sex", "Vertical transmission"],
    complications: [
      "AIDS-defining illnesses (CD4 <200)",
      "HIV-associated nephropathy",
      "Cardiovascular disease",
    ],
    distinguishFrom: [
      "Acute mono — heterophile negative in HIV; test both",
      "Immunodeficiency from other causes — check HIV first",
    ],
    treatment: [
      "Antiretroviral therapy (ART) — combination regimen suppresses viral load",
      "TMP-SMX prophylaxis when CD4 <200 (PJP prevention)",
    ],
    boardsPearls: [
      "CD4 <200 = AIDS; PJP prophylaxis with TMP-SMX",
      "CCR5 antagonists (maraviroc) only if tropism test shows R5 virus",
      "Integrase inhibitors now preferred in initial ART regimens",
    ],
    pediatrics:
      "Vertical transmission prevented with maternal ART and peripartum/neonatal prophylaxis; breast milk transmission risk.",
  },
  {
    id: "tuberculosis",
    name: "Tuberculosis",
    aliases: ["tuberculosis", "tb", "pulmonary tuberculosis"],
    definition:
      "Chronic granulomatous infection caused by Mycobacterium tuberculosis, most commonly affecting lungs but capable of disseminating.",
    pathophysiology:
      "Inhaled bacilli → alveolar macrophage infection → granuloma formation (caseating) → latent TB (dormant) or active disease with tissue destruction and cavitation.",
    classicPresentation: [
      "Weight loss, night sweats, fever, hemoptysis",
      "Immigrant or immunocompromised host (HIV)",
      "Upper lobe cavitary lesion on CXR",
    ],
    keyFindings: [
      "Upper lobe cavitary infiltrate on CXR",
      "Caseating granulomas on biopsy",
      "Ghon complex (primary TB: Ghon focus + hilar nodes)",
    ],
    keyLabs: [
      "PPD or interferon-gamma release assay (latent TB)",
      "Acid-fast bacilli on sputum smear",
      "Mycobacterial culture (gold standard)",
    ],
    associations: ["HIV coinfection", "Silicosis", "Diabetes", "Homelessness, incarceration"],
    complications: ["Miliary TB", "TB meningitis", "Pott disease (vertebral)", "Drug resistance (MDR-TB)"],
    distinguishFrom: [
      "Sarcoidosis — noncaseating granulomas, bilateral hilar lymphadenopathy",
      "Lung cancer — mass without infectious symptoms",
    ],
    treatment: [
      "RIPE therapy: rifampin, isoniazid, pyrazinamide, ethambutol for active TB",
      "Isoniazid monotherapy for latent TB (9 months)",
    ],
    boardsPearls: [
      "Caseating granulomas = TB (vs noncaseating in sarcoidosis)",
      "RIPE therapy: rifampin, isoniazid, pyrazinamide, ethambutol",
      "Isoniazid + rifampin cause orange body fluids; INH causes B6 deficiency neuropathy",
    ],
    pediatrics:
      "Primary TB in children may present with hilar lymphadenopathy without cavitation; miliary TB in infants.",
  },
];

const conditionById = new Map(CONDITIONS.map((c) => [c.id, c]));

export function getConditionById(id: string): ConditionEntry | undefined {
  return conditionById.get(id);
}

export interface ConditionAliasMatch {
  alias: string;
  conditionId: string;
}

export function buildConditionAliasIndex(): ConditionAliasMatch[] {
  const matches: ConditionAliasMatch[] = [];
  for (const condition of CONDITIONS) {
    for (const alias of condition.aliases) {
      matches.push({ alias: alias.toLowerCase(), conditionId: condition.id });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
