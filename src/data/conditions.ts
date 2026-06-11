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
  boardsPearls: string[];
  pediatrics?: string;
}

export const CONDITIONS: ConditionEntry[] = [
  {
    id: "myocardial-infarction",
    name: "Myocardial Infarction",
    aliases: ["myocardial infarction", "mi", "heart attack", "acute mi"],
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
    boardsPearls: [
      "STEMI: ST elevation in contiguous leads → culprit artery territory",
      "Anterior MI (LAD): V1–V4; Inferior MI (RCA): II, III, aVF",
      "Reperfusion therapy: PCI or fibrinolysis within time window",
    ],
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
    boardsPearls: [
      "AS triad: angina, syncope, heart failure (poor prognosis once symptomatic)",
      "MS → LA enlargement → atrial fibrillation → thromboembolism",
      "Acute MR from papillary muscle rupture post-MI",
    ],
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
    boardsPearls: [
      "Left-sided failure: pulmonary congestion; right-sided: peripheral edema, JVD",
      "HFrEF mortality benefit: ACEi/ARB, β-blockers, spironolactone, SGLT2 inhibitors",
      "Loop diuretics relieve congestion but do not ↓ mortality",
    ],
    pediatrics:
      "Dilated cardiomyopathy is the most common cause of heart failure in children; consider inborn errors of metabolism and myocarditis.",
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
    boardsPearls: [
      "Least common cardiomyopathy; think infiltrative disease",
      "Amyloid: low voltage on ECG despite thick walls on echo",
      "Poor prognosis; heart transplant often required",
    ],
  },
  {
    id: "atherosclerosis",
    name: "Atherosclerosis",
    aliases: ["atherosclerosis", "coronary artery disease", "cad"],
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
    boardsPearls: [
      "Major risk factors: hyperlipidemia, HTN, DM, smoking",
      "Foam cells = lipid-laden macrophages in intima",
      "Statins stabilize plaques and ↓ cardiovascular events",
    ],
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
    boardsPearls: [
      "Small cell: SIADH, Cushing (ACTH), Lambert-Eaton",
      "Squamous: hypercalcemia (PTHrP)",
      "Adenocarcinoma: most common in nonsmokers and women",
    ],
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
