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
