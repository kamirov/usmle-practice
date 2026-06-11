export interface HeartSoundEntry {
  id: string;
  name: string;
  aliases: string[];
  meaning: string;
  conditions: string[];
}

export const HEART_SOUNDS: HeartSoundEntry[] = [
  {
    id: "s1",
    name: "S1 (First Heart Sound)",
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
    aliases: ["S2", "second heart sound"],
    meaning:
      "Closure of the semilunar valves (aortic A2, pulmonic P2) at the end of systole; marks the beginning of diastole.",
    conditions: [
      "Physiologic split: P2 follows A2 during inspiration (normal)",
      "Fixed split: atrial septal defect",
      "Wide split: RBBB (delayed P2)",
      "Paradoxical split: aortic stenosis, LBBB (delayed A2)",
      "Single S2: severe aortic stenosis, pulmonary hypertension",
    ],
  },
  {
    id: "s3",
    name: "S3 (Third Heart Sound)",
    aliases: ["S3", "third heart sound"],
    meaning:
      "Low-frequency sound in early diastole caused by rapid ventricular filling; may be normal in children and young adults.",
    conditions: [
      "Pathologic in adults >40: heart failure (\"Kentucky\" — S3 of failure)",
      "Volume overload: mitral regurgitation, aortic regurgitation",
      "LV dysfunction, constrictive pericarditis, restrictive cardiomyopathy",
    ],
  },
  {
    id: "s4",
    name: "S4 (Fourth Heart Sound)",
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
  const parts = index.map(
    ({ alias }) => `\\b${escapeRegex(alias)}\\b`,
  );
  return new RegExp(`(${parts.join("|")})`, "gi");
}
