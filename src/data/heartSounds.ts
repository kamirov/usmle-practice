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
