export interface EcgFindingEntry {
  id: string;
  name: string;
  aliases: string[];
  interpretation: string;
  territory: string;
  thinkOf: string[];
  distinguishFrom?: string[];
  boardsPearls: string[];
  pediatrics?: string;
}

export const ECG_FINDINGS: EcgFindingEntry[] = [
  {
    id: "inferior-stemi",
    name: "Inferior STEMI (II, III, aVF)",
    aliases: [
      "st-segment elevation in leads ii, iii, and avf",
      "st elevation in leads ii, iii, and avf",
      "st-segment elevation in leads ii, iii, avf",
      "st elevation in leads ii, iii, avf",
      "st-segment elevation in ii, iii, and avf",
      "st elevation in ii, iii, and avf",
    ],
    interpretation:
      "ST-segment elevation in leads II, III, and aVF indicates acute transmural ischemia of the inferior wall — a STEMI pattern requiring urgent reperfusion.",
    territory:
      "Inferior wall — usually right coronary artery (RCA) in right-dominant circulation; circumflex if left-dominant.",
    thinkOf: [
      "Inferior MI (RCA occlusion most common)",
      "Reciprocal ST depression in I and aVL",
      "Bradycardia, AV block (RCA supplies AV node)",
      "RV infarction if ST elevation in V4R (hypotension, JVD, clear lungs)",
    ],
    distinguishFrom: [
      "Pericarditis — diffuse ST elevation with PR depression, not regional",
      "Early repolarization — concave ST elevation, young healthy patients",
      "Brugada — RBBB pattern with ST elevation in V1–V3",
    ],
    boardsPearls: [
      "II, III, aVF = inferior territory → think RCA",
      "Inferior MI + hypotension → check V4R for RV infarct; avoid nitrates/diuretics",
      "Contiguous lead ST elevation defines STEMI territory",
    ],
    pediatrics:
      "Same lead-territory mapping; Kawasaki coronary aneurysm can present with MI patterns in children.",
  },
  {
    id: "electrical-alternans",
    name: "Electrical Alternans",
    aliases: [
      "electrical alternans",
      "qrs alternans",
      "p wave alternans",
    ],
    interpretation:
      "Beat-to-beat alternation in QRS (or P wave) amplitude on ECG, classically from the heart swinging within a large pericardial effusion.",
    territory:
      "Not territorial — global ECG pattern; most often seen in pericardial effusion with tamponade physiology.",
    thinkOf: [
      "Cardiac tamponade with large pericardial effusion",
      "Pericardial effusion (malignancy, viral, uremic, post-MI hemopericardium)",
      "Pair with Beck triad and pulsus paradoxus",
      "Low-voltage QRS may coexist in effusion",
    ],
    distinguishFrom: [
      "Respiratory variation in QRS amplitude — not true beat-to-beat alternans",
      "Ventricular bigeminy — alternating normal and ectopic beats, not smooth amplitude cycling",
      "Pericarditis without effusion — diffuse ST elevation, usually no alternans",
      "Regional STEMI — territorial ST elevation, not alternating QRS amplitude",
    ],
    boardsPearls: [
      "Electrical alternans = swinging heart in large pericardial effusion",
      "Classic tamponade ECG clue alongside low voltage and tachycardia",
      "Tamponade: alternans + JVD + muffled heart sounds + pulsus paradoxus",
      "Echo confirms effusion with RA/RV diastolic collapse — urgent pericardiocentesis",
    ],
    pediatrics:
      "Same association with large effusions in children; bacterial pericarditis or post-surgical effusion can present with alternans and shock.",
  },
];

const ecgFindingById = new Map(ECG_FINDINGS.map((entry) => [entry.id, entry]));

export function getEcgFindingById(id: string): EcgFindingEntry | undefined {
  return ecgFindingById.get(id);
}

export interface EcgFindingAliasMatch {
  alias: string;
  ecgFindingId: string;
}

export function buildEcgFindingAliasIndex(): EcgFindingAliasMatch[] {
  const matches: EcgFindingAliasMatch[] = [];
  for (const entry of ECG_FINDINGS) {
    for (const alias of entry.aliases) {
      matches.push({ alias: alias.toLowerCase(), ecgFindingId: entry.id });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
