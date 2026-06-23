export interface HeartSoundEntry {
  id: string;
  name: string;
  etymology: string;
  aliases: string[];
  meaning: string;
  conditions: string[];
}

export const HEART_SOUNDS: HeartSoundEntry[] = [
  {
    id: "s1",
    name: "S1 (First Heart Sound)",
    etymology: "S = sound + first = AV valve closure at systole start",
    aliases: ["S1", "first heart sound"],
    meaning:
      "Closure of the AV valves (mitral M1, tricuspid T1) at the onset of systole; marks the beginning of ventricular contraction.",
    conditions: [
      "Loud S1: mitral stenosis, hyperdynamic states (fever, anemia, pregnancy)",
      "Soft S1: mitral regurgitation, severe heart failure",
      "Split S1: delayed tricuspid closure (RBBB, Ebstein anomaly)",
    ],
  },
  {
    id: "s2",
    name: "S2 (Second Heart Sound)",
    etymology: "S = sound + second = semilunar valve closure at diastole start",
    aliases: ["S2", "second heart sound"],
    meaning:
      "Closure of the semilunar valves (aortic A2, pulmonic P2) at the end of systole; marks the beginning of diastole.",
    conditions: [
      "Physiologic split: P2 follows A2 during inspiration (normal)",
      "Fixed split: atrial septal defect (ASD)",
      "Wide split: RBBB (delayed P2)",
      "Paradoxical split: aortic stenosis, LBBB (delayed A2)",
      "Single S2: severe aortic stenosis, pulmonary hypertension",
    ],
  },
  {
    id: "p2",
    name: "P2 (Pulmonic Component of S2)",
    etymology:
      "P = pulmonic + 2 = second heart sound — closure sound of the pulmonary semilunar valve at end of systole",
    aliases: [
      "p2",
      "p2 heart sound",
      "p2 component",
      "p2 components",
      "pulmonic component of s2",
      "pulmonic component of the second heart sound",
      "pulmonic component s2",
      "pulmonic second heart sound",
      "pulmonic valve closure sound",
      "pulmonic valve closure sounds",
      "loud p2",
      "loud p2s",
      "accentuated p2",
      "accentuated p2s",
      "soft p2",
      "soft p2s",
    ],
    meaning:
      "The pulmonic component (P2) of the second heart sound — produced by closure of the pulmonary valve at the end of right ventricular systole; normally follows the aortic component (A2) and is best heard at the left upper sternal border (pulmonic area).",
    conditions: [
      "Loud P2 — pulmonary hypertension (primary or secondary); classic with parasternal heave and elevated JVP",
      "Soft or absent P2 — pulmonary stenosis, tetralogy of Fallot (severe PS), or advanced pulmonary hypertension with reduced valve motion",
      "Delayed P2 — right bundle branch block, pulmonary stenosis, ASD with ↑ RV stroke volume → widened splitting of S2",
      "Physiologic delay of P2 on inspiration — normal wider split during inspiration",
      "Fixed delayed P2 — atrial septal defect (fixed splitting of S2)",
      "Distinguish loud P2 (pulmonary HTN) from loud S1 (mitral stenosis) — different timing and location",
    ],
  },
  {
    id: "fixed-splitting-of-s2",
    name: "Fixed Splitting of S2",
    etymology:
      "Latin fixus = fastened + Latin split = divided + S2 = second heart sound",
    aliases: [
      "fixed splitting of s2",
      "fixed splitting of s2s",
      "fixed split s2",
      "fixed split of s2",
      "wide fixed split s2",
      "wide fixed splitting of s2",
      "fixed splitting",
      "fixed splittings",
      "fixed s2 split",
      "fixed s2 splitting",
      "paradoxically fixed split s2",
    ],
    meaning:
      "Persistent separation of A2 and P2 throughout respiration — the pulmonic component does not move closer to the aortic component during expiration, classically from increased right heart stroke volume delaying pulmonic valve closure.",
    conditions: [
      "Atrial septal defect (ostium secundum most common) — boards classic",
      "Right ventricular volume overload from left-to-right atrial shunt",
      "May coexist with soft systolic flow murmur at upper LSB (↑ pulmonary valve flow)",
      "Less commonly: severe MR with ↑ LA pressure transmitted to RV",
      "Distinguish from wide but physiologic split that narrows on expiration",
    ],
  },
  {
    id: "paradoxical-splitting-of-s2",
    name: "Paradoxical Splitting of S2",
    etymology:
      "Greek para = contrary + doxa = opinion + Latin split = divided + S2 = second heart sound — split pattern reversed from normal respiratory variation",
    aliases: [
      "paradoxical splitting of s2",
      "paradoxical splitting of s2s",
      "paradoxical split s2",
      "paradoxical split of s2",
      "paradoxical s2 split",
      "paradoxical s2 splitting",
      "reverse splitting of s2",
      "reverse splitting of s2s",
      "reverse split s2",
      "reverse split of s2",
      "reversed splitting of s2",
      "reversed s2 split",
      "paradoxical splitting",
      "paradoxical splittings",
    ],
    meaning:
      "Abnormal S2 splitting in which the aortic component (A2) is delayed relative to the pulmonic component (P2) — on expiration P2 is heard before A2; during inspiration the split narrows as P2 also delays and timing converges (opposite of normal physiologic widening with inspiration).",
    conditions: [
      "Severe aortic stenosis — delayed LV ejection prolongs A2 closure",
      "Left bundle branch block (LBBB) — delayed LV depolarization → delayed A2",
      "Right ventricular pacing — paced RV activates early relative to delayed LV → altered A2–P2 timing",
      "HOCM — may produce paradoxical or atypical splitting from asymmetric septal hypertrophy",
      "Distinguish from wide physiologic split — normal split widens on inspiration; paradoxical narrows on inspiration",
      "Distinguish from fixed split of ASD — fixed throughout respiration, not paradoxical pattern",
    ],
  },
  {
    id: "s3",
    name: "S3 (Third Heart Sound)",
    etymology: "S = sound + third = rapid ventricular filling sound",
    aliases: [
      "S3",
      "third heart sound",
      "S3 gallop",
      "ventricular gallop",
      "ventricular gallops",
      "protodiastolic gallop",
    ],
    meaning:
      "Low-frequency sound in early diastole (protodiastole) during the rapid ventricular filling phase — produced when blood decelerates abruptly as the ventricle reaches the limit of its distensibility, setting the ventricular walls and blood column into vibration.",
    conditions: [
      "Physiologic pathophysiology — highly compliant ventricle in children and young adults accepts a large volume of early diastolic inflow at high velocity; when elastic recoil limits further expansion, inflow decelerates sharply → audible S3; often accentuated lying left lateral, in pregnancy, or in athletic conditioning (high stroke volume)",
      "Physiologic S3 — normal in children, adolescents, and young adults; becomes uncommon after ~40 y as ventricular compliance ↓ with age",
      "Pathologic pathophysiology — same deceleration mechanism but in a dilated, stiff, or pressure-overloaded ventricle with ↑ filling pressures; rapid high-volume inflow into a poorly compliant chamber → louder, persistent S3",
      'Pathologic in adults >40: heart failure with systolic dysfunction ("Kentucky" gallop — S3 of failure)',
      "Volume overload: mitral regurgitation, aortic regurgitation (↑ rapid diastolic filling volume)",
      "LV dysfunction, dilated cardiomyopathy, post-MI remodeling",
      "Constrictive pericarditis, restrictive cardiomyopathy (rapid early filling then abrupt halt — related to pericardial knock physiology)",
      "Distinguish from S4 — S3 is early diastolic (passive filling); S4 is late diastolic (atrial kick into stiff ventricle)",
    ],
  },
  {
    id: "s4",
    name: "S4 (Fourth Heart Sound)",
    etymology: "S = sound + fourth = atrial kick into stiff ventricle",
    aliases: ["S4", "fourth heart sound"],
    meaning:
      "Low-frequency sound in late diastole from atrial contraction into a stiff, noncompliant ventricle; not normally heard.",
    conditions: [
      "LVH, hypertension, aortic stenosis, HOCM",
      "Ischemic heart disease, diastolic dysfunction",
      "Absent in atrial fibrillation (no atrial kick)",
    ],
  },
];

const heartSoundById = new Map(HEART_SOUNDS.map((s) => [s.id, s]));

export function getHeartSoundById(id: string): HeartSoundEntry | undefined {
  return heartSoundById.get(id);
}

export interface HeartSoundAliasMatch {
  alias: string;
  heartSoundId: string;
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function buildHeartSoundAliasIndex(): HeartSoundAliasMatch[] {
  const matches: HeartSoundAliasMatch[] = [];
  for (const sound of HEART_SOUNDS) {
    for (const alias of sound.aliases) {
      matches.push({ alias: alias.toLowerCase(), heartSoundId: sound.id });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}

export function buildHeartSoundMatchPattern(
  index: HeartSoundAliasMatch[],
): RegExp {
  const parts = index.map(({ alias }) => `\\b${escapeRegex(alias)}\\b`);
  return new RegExp(`(${parts.join("|")})`, "gi");
}
