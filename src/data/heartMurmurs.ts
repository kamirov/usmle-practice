export interface HeartMurmurEntry {
  id: string;
  name: string;
  etymology: string;
  aliases: string[];
  meaning: string;
  conditions: string[];
  pediatrics?: string;
}

export const HEART_MURMURS: HeartMurmurEntry[] = [
  {
    id: "crescendo-decrescendo",
    name: "Systolic Crescendo-Decrescendo Murmur",
    etymology: "Greek systole = contraction + Italian crescendo = growing + decrescendo = decreasing + Latin murmur = hum",
    aliases: [
      "systolic crescendo-decrescendo murmur",
      "crescendo-decrescendo murmur",
      "crescendo decrescendo murmur",
      "crescendo-decrescendo systolic murmur",
    ],
    meaning:
      "Diamond-shaped systolic murmur that rises in intensity to mid-systole, then falls — classic ejection murmur from turbulent flow across a stenotic semilunar valve or narrowed outflow tract.",
    conditions: [
      "Aortic stenosis: harsh at RUSB, radiates to carotids, ↓ with Valsalva",
      "Pulmonic stenosis: LUSB, congenital (e.g., ToF); may have ejection click",
      "Physiologic flow murmurs can be soft crescendo-decrescendo in children",
    ],
    pediatrics:
      "Pulmonic stenosis/ToF common congenital cause; calcific AS murmur usually presents later in life.",
  },
  {
    id: "ejection-type-systolic-murmur",
    name: "Ejection-Type Systolic Murmur",
    etymology:
      "Latin eicere = to throw out + Greek systole = contraction + Latin murmur = hum",
    aliases: [
      "ejection-type systolic murmur",
      "ejection-type systolic murmurs",
      "ejection type systolic murmur",
      "ejection type systolic murmurs",
      "ejection-type systolic murmor",
      "ejection-type systolic murmors",
      "ejection type systolic murmor",
      "ejection systolic murmur",
      "ejection systolic murmurs",
      "ejection murmur",
      "ejection murmurs",
      "systolic ejection murmur",
      "systolic ejection murmurs",
      "systolic outflow murmur",
      "systolic outflow murmurs",
      "outflow tract murmur",
      "outflow tract murmurs",
    ],
    meaning:
      "Systolic murmur from turbulent forward flow during ventricular ejection across a stenotic semilunar valve or narrowed ventricular outflow tract — typically crescendo-decrescendo (diamond-shaped), begins shortly after S1, and ends before S2; distinguished from holosystolic regurgitant murmurs that span all of systole.",
    conditions: [
      "Aortic stenosis — harsh crescendo-decrescendo at RUSB, radiates to carotids; may have ejection click; ↓ with Valsalva",
      "Pulmonic stenosis — LUSB; ejection click; congenital (ToF, isolated PS)",
      "Hypertrophic cardiomyopathy — harsh murmur from dynamic LVOT obstruction; ↑ with Valsalva/standing, ↓ with squatting/handgrip",
      "Physiologic / flow murmurs — soft ejection murmur at LUSB or RUSB (pregnancy, anemia, hyperthyroidism, ASD ↑ pulmonary flow)",
      "Tetralogy of Fallot — harsh ejection murmur at LLSB from RVOT obstruction (VSD often silent)",
    ],
    pediatrics:
      "Innocent Still murmur and pulmonary flow murmurs are soft ejection-type murmurs in children. ToF and PS are classic congenital harsh ejection murmurs; small VSD causes holosystolic murmur, not ejection-type.",
  },
  {
    id: "diastolic-rumble",
    name: "Diastolic Rumble",
    etymology: "Greek diastole = dilation/filling + rumble = low rolling sound",
    aliases: [
      "diastolic rumble",
      "rumbling diastolic murmur",
      "low-pitched diastolic rumble",
    ],
    meaning:
      "Low-pitched, rumbling diastolic murmur from turbulent flow across a stenotic AV valve; often follows an opening snap in mitral stenosis.",
    conditions: [
      "Mitral stenosis: apex, after opening snap, ↑ with exercise (↑ flow)",
      "Tricuspid stenosis: lower left sternal border (rare)",
      "Carey-Coombs murmur: mid-diastolic rumble in acute rheumatic fever",
    ],
    pediatrics:
      "Rheumatic MS less common in the US today; still a classic boards descriptor for valve pathology.",
  },
  {
    id: "ejection-click",
    name: "Systolic Ejection Click",
    etymology: "Greek systole = contraction + Latin eicere = throw out + click = sharp sound",
    aliases: [
      "systolic ejection click",
      "ejection click",
      "systolic ejection sound",
      "bicuspid aortic valve",
      "bicuspid aortic valve click",
    ],
    meaning:
      "Brief, high-pitched early systolic sound from abrupt opening of a stenotic semilunar valve or rapid distention of a dilated aorta/pulmonary artery; best heard with the diaphragm.",
    conditions: [
      "Aortic: AS or bicuspid AV at RUSB/apex; does not vary with respiration",
      "Pulmonic: PS at LUSB; often ↓ or merges with S1 during inspiration",
      "Dilated great vessels (e.g., pulmonary hypertension)",
    ],
    pediatrics:
      "Pulmonic ejection click in ToF; bicuspid aortic valve click may precede a murmur for years.",
  },
  {
    id: "harsh-systolic-ejection-murmur",
    name: "Harsh Systolic Ejection Murmur",
    etymology: "harsh = rough + Greek systole = contraction + Latin eicere = throw out + murmur = hum",
    aliases: [
      "harsh systolic ejection murmur",
      "harsh systolic murmur",
      "harsh crescendo-decrescendo murmur",
      "harsh ejection murmur",
    ],
    meaning:
      "Rough, loud systolic murmur from turbulent flow across a narrowed right or left ventricular outflow tract or stenotic semilunar valve; best heard at LLSB in RVOT obstruction.",
    conditions: [
      "Tetralogy of Fallot: harsh systolic ejection murmur at LLSB from RVOT obstruction (VSD itself is usually silent)",
      "Pulmonic stenosis: LUSB with possible ejection click",
      "HOCM: harsh murmur ↑ with Valsalva/standing, ↓ with squatting",
    ],
    pediatrics:
      "ToF is the classic cyanotic CHD with harsh RVOT murmur; murmur intensity may ↓ during hypercyanotic (tet) spells when RVOT spasm worsens.",
  },
  {
    id: "atrial-septal-defect-murmur",
    name: "ASD Flow Murmur",
    etymology: "ASD = atrial septal defect + flow = movement of blood + murmur = hum",
    aliases: [
      "atrial septal defect murmur",
      "asd murmur",
      "fixed split s2",
      "wide fixed split s2",
    ],
    meaning:
      "Soft systolic ejection/flow murmur at the upper left sternal border from ↑ flow across the pulmonary valve; classic finding is fixed split S2 from delayed pulmonic closure.",
    conditions: [
      "Ostium secundum ASD (most common)",
      "↑ pulmonary blood flow with left-to-right atrial shunt",
      "Fixed split S2 — does not narrow with expiration",
    ],
    pediatrics:
      "ASD murmur is from pulmonary flow, not blood crossing the septum; large ASDs may be asymptomatic until adulthood.",
  },
  {
    id: "holosystolic-murmur",
    name: "Holosystolic Murmur",
    etymology:
      "Greek holos = whole + systole = contraction + Latin murmur = hum",
    aliases: [
      "holosystolic murmur",
      "holosystolic murmurs",
      "pansystolic murmur",
      "pansystolic murmurs",
      "pan-systolic murmur",
      "pan systolic murmur",
      "systolic regurgitant murmur",
      "regurgitant systolic murmur",
      "blowing holosystolic murmur",
    ],
    meaning:
      "High-pitched blowing murmur heard throughout systole from regurgitant flow across an incompetent AV valve or a ventricular septal defect — intensity often plateaus rather than peaking mid-systole like ejection murmurs.",
    conditions: [
      "Mitral regurgitation — apex, radiates to axilla; ↑ with handgrip, ↓ with Valsalva",
      "Tricuspid regurgitation — left lower sternal border; ↑ with inspiration (Carvallo sign)",
      "Ventricular septal defect — harsh holosystolic at LLSB; louder with small restrictive defects",
      "Mitral valve prolapse with MR — mid-systolic click may precede late systolic murmur",
      "Papillary muscle rupture post-MI — new holosystolic murmur + pulmonary edema",
    ],
    pediatrics:
      "VSD is the classic pediatric holosystolic murmur at LLSB; small VSDs have loud murmurs. MR from rheumatic fever or MVP also occurs in adolescents.",
  },
  {
    id: "continuous-murmur",
    name: "Continuous Murmur",
    etymology: "Latin continuus = unbroken + murmur = hum",
    aliases: [
      "continuous murmur",
      "continuous murmurs",
      "machinery murmur",
      "machinery murmurs",
      "continuous machinery murmur",
      "systolic-diastolic murmur",
      "to-and-fro murmur throughout cardiac cycle",
    ],
    meaning:
      "Murmur present throughout systole and diastole without a silent interval — indicates persistent pressure gradient between two connected high- and low-pressure vascular beds during the entire cardiac cycle.",
    conditions: [
      "Patent ductus arteriosus — machinery murmur at left infraclavicular area; wide pulse pressure",
      "Coronary artery fistula — continuous murmur, often diminishes in diastole",
      "Ruptured sinus of Valsalva aneurysm into RV or RA",
      "Aortopulmonary window — congenital communication between aorta and PA",
      "Coarctation of aorta with collaterals — systolic-diatolic murmur over back (not purely continuous at chest)",
      "Pulmonary AV fistula — continuous murmur over lung fields",
    ],
    pediatrics:
      "PDA is the boards classic continuous murmur in neonates/infants; prostaglandin E1 maintains ductus in ductal-dependent lesions. Indomethacin/ibuprofen or device closure for isolated PDA.",
  },
  {
    id: "patent-ductus-arteriosus-murmur",
    name: "Continuous Machinery Murmur",
    etymology: "continuous = uninterrupted + machinery = machine-like + murmur = hum",
    aliases: [
      "continuous machinery murmur",
      "patent ductus arteriosus murmur",
      "pda murmur",
    ],
    meaning:
      "Continuous \"machinery-like\" murmur throughout systole and diastole from persistent flow through the ductus arteriosus between aorta and pulmonary artery.",
    conditions: [
      "Patent ductus arteriosus (PDA)",
      "Loudest at left infraclavicular area / upper left sternal border",
      "Bounding pulses and wide pulse pressure with large PDA",
    ],
    pediatrics:
      "Prematurity and congenital rubella classic associations; indomethacin/ibuprofen or coil closure; keep PDA open with prostaglandins in ductal-dependent lesions.",
  },
  {
    id: "aortic-regurgitation-murmur",
    name: "Early Diastolic Decrescendo Murmur",
    etymology: "early = initial + Greek diastole = filling + decrescendo = decreasing + murmur = hum",
    aliases: [
      "early diastolic decrescendo murmur",
      "aortic regurgitation murmur",
      "aortic insufficiency murmur",
      "diastolic blowing murmur",
    ],
    meaning:
      "High-pitched early diastolic murmur that decrescendes, best heard at the left sternal border with the patient leaning forward and exhaling — regurgitant flow from aorta into LV.",
    conditions: [
      "Aortic regurgitation: bicuspid aortic valve, rheumatic fever, endocarditis, aortic dissection",
      "Wide pulse pressure, head bobbing (de Musset), pulsating nail beds (Quincke)",
      "Acute severe AR: pulmonary edema, soft short murmur; chronic AR: LV dilation",
    ],
    pediatrics:
      "Bicuspid aortic valve may have AR before significant AS; rheumatic AR still seen worldwide.",
  },
];

const heartMurmurById = new Map(HEART_MURMURS.map((m) => [m.id, m]));

export function getHeartMurmurById(id: string): HeartMurmurEntry | undefined {
  return heartMurmurById.get(id);
}

export interface HeartMurmurAliasMatch {
  alias: string;
  heartMurmurId: string;
}

export function buildHeartMurmurAliasIndex(): HeartMurmurAliasMatch[] {
  const matches: HeartMurmurAliasMatch[] = [];
  for (const murmur of HEART_MURMURS) {
    for (const alias of murmur.aliases) {
      matches.push({ alias: alias.toLowerCase(), heartMurmurId: murmur.id });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
