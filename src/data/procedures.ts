export interface ProcedureEntry {
  id: string;
  name: string;
  aliases: string[];
  definition: string;
  indications: string[];
  keyMeasurements?: string[];
  complications: string[];
  boardsPearls: string[];
  pediatrics?: string;
}

export const PROCEDURES: ProcedureEntry[] = [
  {
    id: "cardiac-catheterization",
    name: "Cardiac Catheterization",
    aliases: [
      "cardiac catheterization",
      "cardiac cath",
      "left heart catheterization",
      "right heart catheterization",
      "coronary angiography",
    ],
    definition:
      "Invasive procedure inserting catheters into cardiac chambers and/or coronary arteries to measure hemodynamics, obtain angiographic images, and perform interventions (PCI, valvuloplasty).",
    indications: [
      "STEMI/NSTEMI — diagnostic angiography and PCI",
      "Unstable angina refractory to medical therapy",
      "Heart failure workup — hemodynamics, endomyocardial biopsy",
      "Pulmonary hypertension — right heart cath for diagnosis/monitoring",
      "Congenital heart disease evaluation",
    ],
    keyMeasurements: [
      "Right heart cath: RA, RV, PA pressures; PCWP (via balloon wedge)",
      "Left heart cath: LV/LA pressures, aortic pressure",
      "Cardiac output, SVR, PVR calculations",
      "Coronary angiography — stenosis severity, culprit lesion",
    ],
    complications: [
      "Bleeding/hematoma at access site (femoral/radial)",
      "Arrhythmias, coronary dissection, stroke",
      "Contrast nephropathy, allergic reaction",
      "Tamponade (rare, from perforation)",
    ],
    boardsPearls: [
      "Gold standard for coronary anatomy; PCI is definitive reperfusion for STEMI",
      "Right heart cath + Swan-Ganz → PCWP reflects left atrial pressure",
      "Radial access preferred over femoral (↓ bleeding risk)",
    ],
    pediatrics:
      "Same principles; catheter sizes and contrast volumes adjusted for weight. Kawasaki with coronary aneurysms may need cath for stenosis assessment.",
  },
  {
    id: "coronary-ct-angiography",
    name: "Coronary CT Angiography",
    aliases: [
      "coronary ct angiography",
      "coronary cta",
      "coronary computed tomography angiography",
      "ccta",
      "cardiac ct angiography",
      "ct coronary angiogram",
    ],
    definition:
      "Noninvasive contrast-enhanced CT imaging of coronary arteries to detect stenosis, plaque burden, and anatomic variants.",
    indications: [
      "Evaluation of stable chest pain in low-to-intermediate pretest probability CAD",
      "Rule out anomalous coronary origins (especially in young athletes)",
      "Assess coronary artery bypass graft patency",
      "Coronary calcium scoring (noncontrast CT) for ASCVD risk stratification",
    ],
    keyMeasurements: [
      "Coronary stenosis severity by luminal narrowing",
      "Agatston coronary artery calcium (CAC) score — 0 suggests very low short-term ASCVD risk",
      "Plaque characterization (calcified vs noncalcified)",
    ],
    complications: [
      "Contrast-induced nephropathy",
      "Allergic reaction to iodinated contrast",
      "Ionizing radiation exposure",
      "False positives from motion artifact or heavy calcification limiting interpretation",
    ],
    boardsPearls: [
      "Noninvasive alternative to invasive coronary angiography for appropriate-risk patients",
      "High CAC score → atherosclerosis present; very high scores can obscure CTA lumen detail",
      "Invasive cath remains gold standard when revascularization likely or high-risk ACS",
      "Exercise stress testing vs CTA vs invasive angiography chosen by pretest probability and symptoms",
      "vs invasive angiography — CTA rules out CAD noninvasively; cath needed for PCI",
      "vs stress testing — CTA shows anatomy; stress tests detect functional ischemia",
    ],
    pediatrics:
      "Rarely used in children except evaluation of anomalous coronary arteries or post-Kawasaki coronary aneurysms; radiation and contrast risks favor echo/MRI when possible.",
  },
  {
    id: "thoracentesis",
    name: "Thoracentesis",
    aliases: [
      "thoracentesis",
      "pleural tap",
      "pleural aspiration",
      "diagnostic thoracentesis",
      "therapeutic thoracentesis",
      "pleural fluid drainage",
    ],
    definition:
      "Percutaneous needle insertion into the pleural space to aspirate pleural fluid for diagnostic analysis (chemistry, cell count, culture, cytology) or therapeutic drainage of a symptomatic effusion.",
    indications: [
      "New pleural effusion of unclear etiology — diagnostic tap",
      "Symptomatic large effusion — therapeutic drainage",
      "Suspected empyema, hemothorax, or malignant effusion",
      "Differentiate transudate vs exudate (Light's criteria on pleural fluid)",
    ],
    keyMeasurements: [
      "Pleural fluid protein, LDH, glucose, pH, cell count and differential",
      "Gram stain and culture; cytology if malignancy suspected",
      "Light's criteria: exudate if pleural/serum protein ratio >0.5, pleural/serum LDH ratio >0.6, or pleural LDH >⅔ upper limit of normal serum LDH",
    ],
    complications: [
      "Pneumothorax (most common significant complication)",
      "Bleeding, hemothorax",
      "Re-expansion pulmonary edema (rapid large-volume drainage)",
      "Infection, organ injury (liver/spleen if low insertion)",
      "Vasovagal reaction",
    ],
    boardsPearls: [
      "Ultrasound guidance reduces pneumothorax risk — preferred when available",
      "Iatrogenic pneumothorax after thoracentesis — chest pain, ↓ breath sounds, CXR confirms",
      "Exudative effusion + low glucose + low pH → complicated parapneumonic effusion or empyema → chest tube",
      "Transudate: CHF, cirrhosis, nephrotic syndrome; Exudate: infection, malignancy, PE, inflammation",
      "Do not drain >1–1.5 L at once — re-expansion pulmonary edema risk",
    ],
    pediatrics:
      "Same principles with smaller volumes and ultrasound guidance; parapneumonic effusion in children may need chest tube if empyema or loculations present.",
  },
  {
    id: "pcr-testing",
    name: "PCR Testing",
    aliases: [
      "pcr testing",
      "pcr test",
      "pcr",
      "polymerase chain reaction",
      "polymerase chain reaction testing",
      "polymerase chain reaction test",
      "rt-pcr",
      "reverse transcriptase pcr",
      "reverse transcription pcr",
      "qpcr",
      "quantitative pcr",
      "real-time pcr",
      "real time pcr",
      "nested pcr",
    ],
    definition:
      "In vitro enzymatic amplification of a specific DNA (or cDNA) sequence using heat-stable DNA polymerase (Taq), template-specific primers, and repeated thermal cycles of denaturation, annealing, and extension — detects minute quantities of pathogen nucleic acid or fusion transcripts with high sensitivity and rapid turnaround.",
    indications: [
      "Rapid pathogen detection when culture is slow or negative (HSV encephalitis CSF, pertussis, atypical pneumonia)",
      "Quantitative viral load monitoring (HIV, HBV, HCV, CMV in transplant recipients)",
      "Oncologic fusion gene detection (BCR-ABL in CML, PML-RARA in acute promyelocytic leukemia)",
      "Diagnosis of RNA viruses after reverse transcription (RT-PCR) — influenza, SARS-CoV-2, many respiratory panels",
      "Congenital infection confirmation (CMV PCR from urine/saliva in neonates)",
      "Species-specific identification when morphology is ambiguous (E. histolytica vs E. dispar)",
    ],
    keyMeasurements: [
      "Thermal cycling: denaturation (~95°C) → primer annealing (~50–65°C) → extension (~72°C, Taq polymerase)",
      "RT-PCR — reverse transcriptase converts RNA → cDNA before amplification",
      "Quantitative (real-time) PCR — fluorescence tracks amplicon accumulation; reports viral copies/mL",
      "Endpoint PCR — presence/absence of band of expected size on gel electrophoresis",
      "Requires flanking primers complementary to target sequence; dNTPs and Mg²⁺ cofactor",
    ],
    complications: [
      "False positives from amplicon or sample contamination (especially in research/low-prevalence settings)",
      "False negatives from inadequate sample, PCR inhibitors, or testing before pathogen appears in compartment",
      "Does not provide live culture for antibiotic susceptibility testing",
      "Detects nucleic acid — may remain positive after organism cleared (e.g., nonviable DNA)",
      "Expensive compared with many serologic or antigen tests; requires specialized lab infrastructure",
    ],
    boardsPearls: [
      "PCR exponentially amplifies specific DNA — extremely sensitive for low-copy targets",
      "Taq polymerase — heat-stable DNA polymerase from Thermus aquaticus; enables automated cycling",
      "HSV encephalitis — CSF PCR is test of choice; start empiric acyclovir while pending",
      "RT-PCR for RNA viruses; standard PCR for DNA pathogens and fusion genes",
      "BCR-ABL (t(9;22)) and PML-RARA (t(15;17)) — PCR/FISH detects leukemic translocations",
      "vs Southern blot — PCR amplifies known short target; Southern detects restriction fragment patterns in genomic DNA",
      "vs serology — PCR detects active infection earlier; IgM/IgG reflect immune response timing",
      "vs culture — PCR is faster and more sensitive for fastidious or slow-growing organisms (Chlamydia, HSV)",
    ],
    pediatrics:
      "Pertussis nasopharyngeal PCR preferred in infants (culture less sensitive). Congenital CMV diagnosed by urine or saliva PCR within first 3 weeks of life — after that, positive PCR may reflect acquired rather than congenital infection.",
  },
  {
    id: "gomori-trichrome-stain",
    name: "Gomori Trichrome Stain",
    aliases: [
      "gomori trichrome",
      "gomori trichrome stain",
      "gomori modified trichrome",
      "gomori modified trichrome stain",
      "modified gomori trichrome",
      "modified trichrome stain",
      "muscle trichrome stain",
    ],
    definition:
      "Modified trichrome histochemical stain applied to skeletal muscle biopsy specimens — muscle fibers appear red while collagen and connective tissue stain green/blue, enhancing visualization of structural myofiber abnormalities not always obvious on H&E.",
    indications: [
      "Skeletal muscle biopsy evaluation for myopathy or muscular dystrophy",
      "Suspected mitochondrial myopathy (ragged red fibers)",
      "Nemaline rod myopathy and other congenital myopathies",
      "Inflammatory myopathy workup (often paired with H&E, immunohistochemistry)",
      "Differentiation of fiber-type grouping, necrosis, and endomysial fibrosis",
    ],
    keyMeasurements: [
      "Normal: polygonal muscle fibers with uniform red cytoplasm; nuclei at periphery",
      "Ragged red fibers — subsarcolemmal red granular staining from accumulated mitochondria",
      "Nemaline rods — dark red rod-shaped inclusions at Z lines (I band)",
      "Central cores — pale central areas within fibers (central core disease)",
      "Increased green collagen between fibers — fibrosis/replacement",
    ],
    complications: [
      "Interpretation requires adequate biopsy sample (avoid crush artifact from needle technique)",
      "Nonspecific findings without clinical correlation — stain is adjunct to history, EM, genetics",
      "Sampling error if nonrepresentative muscle sampled",
    ],
    boardsPearls: [
      "Gomori trichrome on muscle biopsy — red fibers, green collagen",
      "Ragged red fibers → mitochondrial myopathy (MELAS, MERRF); confirm with SDH stain or genetics",
      "Nemaline rods — Gomori trichrome highlights rod bodies; hypotonia/weakness in infant",
      "vs Masson trichrome — used for liver/kidney fibrosis, not classic muscle Gomori panel",
      "vs H&E — Gomori better shows ragged reds, rods, cores; H&E for inflammation and necrosis",
      "Duchenne dystrophy — dystrophin loss on IHC; Gomori may show fiber size variation and fibrosis",
      "Oil red O — lipid storage in vacuolar myopathies, not Gomori's primary role",
    ],
    pediatrics:
      "Nemaline rod myopathy and mitochondrial myopathies present in infancy — hypotonia, weakness; muscle biopsy with Gomori trichrome shows diagnostic rods or ragged red fibers. Distinguish from benign congenital hypotonia.",
  },
  {
    id: "lumbar-puncture",
    name: "Lumbar Puncture",
    aliases: [
      "lumbar puncture",
      "lumbar punctures",
      "spinal tap",
      "spinal taps",
      "lp",
      "csf tap",
      "cerebrospinal fluid tap",
    ],
    definition:
      "Procedure inserting a needle into the subarachnoid space (usually L3–L4 or L4–L5 interspace) to obtain cerebrospinal fluid for diagnosis of meningitis, subarachnoid hemorrhage, and other CNS disorders, or to measure opening pressure.",
    indications: [
      "Suspected meningitis — cell count, glucose, protein, Gram stain, culture, PCR",
      "Suspected subarachnoid hemorrhage when CT negative or unavailable",
      "Suspected idiopathic intracranial hypertension — opening pressure measurement",
      "Suspected CNS vasculitis, carcinomatous meningitis, or neurosyphilis",
      "Administration of intrathecal medications (e.g., chemotherapy, antibiotics)",
    ],
    keyMeasurements: [
      "Opening pressure (normal ~10–20 cm H₂O; ↑ in bacterial meningitis, IIH)",
      "CSF WBC count and differential — neutrophils (bacterial) vs lymphocytes (viral/TB/fungal)",
      "CSF glucose — low in bacterial, TB, fungal; normal in viral",
      "CSF protein — elevated in most CNS infections and inflammatory states",
      "Gram stain and culture; PCR panels; India ink or cryptococcal antigen when indicated",
      "Xanthochromia and RBCs not cleared by centrifugation — subarachnoid hemorrhage",
    ],
    complications: [
      "Post-LP headache (CSF leak)",
      "Bleeding, epidural hematoma (rare)",
      "Brainstem herniation if ↑ ICP with mass effect — obtain CT first when indicated",
      "Infection (rare with sterile technique)",
    ],
    boardsPearls: [
      "Diagnostic cornerstone of meningitis — but don't delay empiric antibiotics for LP in suspected bacterial meningitis",
      "CT before LP if focal neuro deficits, papilledema, seizures, or immunocompromise (↓ herniation risk)",
      "Bacterial CSF: ↑ neutrophils, ↑ protein, ↓ glucose; Viral: ↑ lymphocytes, normal glucose",
      "SAH — xanthochromia; RBCs persist after centrifugation (vs traumatic tap clears)",
      "Opening pressure >25 cm H₂O suggests ↑ ICP (meningitis, IIH)",
      "L3–L4 or L4–L5 — below conus medullaris (typically ends ~L1–L2)",
    ],
    pediatrics:
      "Same CSF interpretation principles; neonatal meningitis requires low threshold for LP in febrile or ill infant. CT indications similar; do not withhold antibiotics while arranging LP in suspected bacterial meningitis.",
  },
];

const procedureById = new Map(PROCEDURES.map((entry) => [entry.id, entry]));

export function getProcedureById(id: string): ProcedureEntry | undefined {
  return procedureById.get(id);
}

export interface ProcedureAliasMatch {
  alias: string;
  procedureId: string;
}

export function buildProcedureAliasIndex(): ProcedureAliasMatch[] {
  const matches: ProcedureAliasMatch[] = [];
  for (const entry of PROCEDURES) {
    for (const alias of entry.aliases) {
      matches.push({ alias: alias.toLowerCase(), procedureId: entry.id });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
