export interface EcgFindingEntry {
  id: string;
  name: string;
  etymology: string;
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
    etymology: "inferior = lower wall + ST = ECG ST segment + elevation = raised + MI = myocardial infarction",
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
    etymology: "electrical = cardiac voltage + Latin alternare = alternate",
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
  {
    id: "absent-p-waves",
    name: "Absent P Waves",
    etymology: "Latin ab = away + praesens = being before + absent = not present",
    aliases: [
      "absent p waves",
      "absent p wave",
      "no p waves",
      "no p wave",
      "p waves absent",
      "p wave absent",
      "loss of p waves",
      "atrial activity absent on ecg",
    ],
    interpretation:
      "No discernible atrial depolarization waves before QRS complexes, indicating rhythm not driven by normal sinus node P-wave activity.",
    territory:
      "Not territorial — rhythm diagnosis pattern; evaluate rate and QRS width to classify arrhythmia.",
    thinkOf: [
      "Atrial fibrillation — irregularly irregular, fibrillatory baseline, no discrete P waves",
      "Junctional or accelerated junctional rhythm — narrow QRS without preceding P waves",
      "Sinoatrial arrest with junctional escape",
      "Hyperkalemia — may flatten or obscure P waves",
      "Lead misplacement or low-amplitude atrial activity (less common)",
    ],
    distinguishFrom: [
      "P waves buried in QRS or T wave — retrograde P waves in junctional rhythm may be hidden",
      "Flutter waves — sawtooth F waves present, not truly absent atrial activity",
      "Sinus rhythm — upright P before each QRS in lead II",
      "PVC with nonconducted P wave — intermittent, not global absence",
    ],
    boardsPearls: [
      "Absent P waves + irregularly irregular + narrow QRS → atrial fibrillation",
      "AF: no P waves, variable RR intervals, risk of thromboembolism → anticoagulate by CHA₂DS₂-VASc",
      "Junctional rhythm: absent P waves, regular narrow QRS, rate ~40–60",
      "Always check for fibrillatory waves vs flat baseline in AF",
      "vs sinus arrhythmia — P waves present but RR varies with respiration",
    ],
    pediatrics:
      "Supraventricular tachycardia in infants may show absent or abnormal P waves; narrow-complex tachycardia with rate >220 in infant warrants urgent cardioversion/adenosine pathway.",
  },
  {
    id: "qtc-prolongation",
    name: "QTc Prolongation",
    etymology: "QT = ECG interval from Q wave onset to T wave end + c = corrected for heart rate",
    aliases: [
      "qtc prolongation",
      "qtc prolongations",
      "qt prolongation",
      "qt prolongations",
      "prolonged qtc",
      "prolonged qt",
      "prolonged qt interval",
      "prolonged qtc interval",
      "qt interval prolongation",
      "qtc interval prolongation",
      "long qt interval",
      "long qtc",
    ],
    interpretation:
      "Corrected QT interval longer than normal on ECG — reflects delayed ventricular repolarization and increased risk of polymorphic ventricular tachycardia (torsades de pointes).",
    territory:
      "Global repolarization abnormality — not a coronary territory finding; assess across leads for uniform QT prolongation.",
    thinkOf: [
      "Drug-induced — class IA/III antiarrhythmics, macrolides, fluoroquinolones, antipsychotics, TCAs, ondansetron, methadone (hERG/KCNH2 blockade)",
      "Electrolyte disturbances — hypokalemia, hypomagnesemia, hypocalcemia",
      "Congenital long QT syndrome (LQT1–LQT3 channel mutations)",
      "Bradycardia, hypothyroidism, intracranial hemorrhage",
      "Female sex and congenital or acquired QT vulnerability",
    ],
    distinguishFrom: [
      "U wave fusion — can mimic long QT; true QT ends at T-wave return to baseline",
      "Torsades de pointes — arrhythmia consequence of QT prolongation, not the ECG measurement itself",
      "ST-segment elevation — ischemic territory pattern, not repolarization interval prolongation",
      "Normal variant early repolarization — ST elevation without prolonged QT",
    ],
    boardsPearls: [
      "QTc prolongation predisposes to torsades de pointes — polymorphic VT with twisting QRS",
      "Hypocalcemia and hypomagnesemia prolong QT — check electrolytes",
      "hERG (KCNH2) blockade — common mechanism of drug-induced QT prolongation",
      "Treat torsades with IV magnesium; avoid class IA/III drugs in long QT",
      "Congenital long QT — syncope, sudden death in young; avoid QT-prolonging drugs",
      "Bazett correction: QTc = QT / √RR — use for rate correction on boards concept",
    ],
    pediatrics:
      "Congenital long QT may present with syncope, seizures, or sudden death in children; avoid erythromycin and other QT-prolonging drugs in known LQTS.",
  },
  {
    id: "escape-rhythm",
    name: "Escape Rhythm",
    etymology:
      "Latin ex + capere = to take out + rhythm = measured beat — subsidiary pacemaker takes over when higher pacemaker fails",
    aliases: [
      "escape rhythm",
      "escape rhythms",
      "junctional escape rhythm",
      "junctional escape",
      "ventricular escape rhythm",
      "ventricular escape",
      "idioventricular escape",
      "escape beat",
      "escape beats",
      "subsidiary pacemaker rhythm",
    ],
    interpretation:
      "Backup cardiac rhythm generated by a subsidiary pacemaker (AV junction or ventricle) when the sinoatrial node fails to depolarize or conduct — a protective mechanism preventing asystole.",
    territory:
      "Not territorial — rhythm diagnosis; classify by rate and QRS width to distinguish junctional vs ventricular escape.",
    thinkOf: [
      "Sinoatrial arrest or severe sinus bradycardia with junctional escape (narrow QRS, rate ~40–60)",
      "Complete heart block with ventricular escape (wide QRS, rate ~20–40)",
      "Digoxin toxicity, inferior MI, Lyme carditis — AV node injury → junctional escape",
      "Accelerated idioventricular rhythm post-MI (wide QRS, rate 60–100) — reperfusion marker",
    ],
    distinguishFrom: [
      "Sinus bradycardia — upright P before each QRS in lead II",
      "Junctional tachycardia — rate >100, not an escape mechanism",
      "Ventricular tachycardia — wide QRS tachycardia, not slow escape",
      "Atrial fibrillation with slow ventricular response — irregular, fibrillatory baseline",
    ],
    boardsPearls: [
      "Escape rhythm = subsidiary pacemaker rescue when SA node or AV conduction fails",
      "Junctional escape: narrow QRS, rate 40–60, absent/inverted/retrograde P waves",
      "Ventricular escape: wide QRS, rate 20–40 — think complete heart block",
      "Atropine speeds sinus node; transcutaneous pacing if hemodynamically unstable",
      "Post-MI accelerated idioventricular rhythm (60–100) is usually benign reperfusion rhythm",
    ],
    pediatrics:
      "Congenital complete heart block (maternal anti-Ro/La) may present with ventricular escape in neonates; junctional escape can occur with postoperative AV block after cardiac surgery.",
  },
  {
    id: "saw-toothed-flutter-waves",
    name: "Saw-Toothed Flutter Waves",
    etymology:
      "saw-tooth = jagged cutting-tool teeth + flutter = rapid vibration + waves = ECG deflections",
    aliases: [
      "saw-toothed flutter waves",
      "sawtooth flutter waves",
      "saw tooth flutter waves",
      "sawtooth f waves",
      "saw-tooth f waves",
      "flutter waves",
      "f waves",
      "f wave",
      "atrial flutter waves",
      "sawtooth pattern",
      "saw-tooth pattern",
    ],
    interpretation:
      "Regular rapid atrial depolarizations (~250–350/min) producing a characteristic sawtooth baseline — hallmark ECG pattern of atrial flutter, best seen in inferior leads II, III, and aVF.",
    territory:
      "Atrial activity pattern — not a coronary territory finding; typical type I flutter uses cavotricuspid isthmus macroreentry in the right atrium.",
    thinkOf: [
      "Atrial flutter — macroreentrant atrial tachycardia, often 2:1 AV block → ventricular rate ~150",
      "Carotid massage or adenosine — increases AV block to unmask flutter waves",
      "Pulmonary embolism, COPD, post-cardiac surgery, thyrotoxicosis",
      "1:1 conduction — dangerous rapid ventricular response; check for class Ic antiarrhythmic use",
    ],
    distinguishFrom: [
      "Atrial fibrillation — irregular fibrillatory baseline without organized sawtooth pattern",
      "Multifocal atrial tachycardia — ≥3 distinct P-wave morphologies, irregular",
      "Sinus tachycardia — discrete P waves, not sawtooth baseline",
      "Artifact — nonphysiologic baseline noise without consistent atrial rate",
    ],
    boardsPearls: [
      "Sawtooth F waves in II/III/aVF = atrial flutter until proven otherwise",
      "Typical flutter atrial rate ~300/min; 2:1 block → ventricular rate ~150",
      "Cavotricuspid isthmus ablation is curative for typical atrial flutter",
      "Adenosine or carotid massage increases AV block to reveal flutter waves",
      "Anticoagulate like atrial fibrillation — stroke risk with flutter",
    ],
    pediatrics:
      "Atrial flutter can occur in congenital heart disease or after palliative surgery; same sawtooth pattern with rate-related symptoms in infants.",
  },
  {
    id: "sinus-arrhythmia",
    name: "Sinus Arrhythmia",
    etymology:
      "Latin sinus = hollow/channel (sinus node) + Greek a- = without + rhythmos = measured flow",
    aliases: [
      "sinus arrhythmia",
      "sinus arrhythmias",
      "respiratory sinus arrhythmia",
      "respiratory sinus arrhythmias",
      "sinus respiratory arrhythmia",
      "phasic sinus arrhythmia",
      "physiologic sinus arrhythmia",
      "rsa",
    ],
    interpretation:
      "Physiologic variation in sinus rate with respiration — R-R interval shortens during inspiration and lengthens during expiration, with normal P-wave morphology and axis preceding each QRS.",
    territory:
      "Sinus node–driven rhythm — not a coronary territory finding; reflects normal vagal tone modulation of SA node automaticity.",
    thinkOf: [
      "Normal finding in healthy young patients — especially athletes and children",
      "Respiratory phasic rate change with intact sinus P waves",
      "Increased vagal tone — sleep, deep breathing, high fitness",
      "Benign unless accompanied by symptomatic bradycardia or pauses",
    ],
    distinguishFrom: [
      "Sinus arrhythmia absent — fixed regular rate may suggest sick sinus syndrome or beta-blocker effect in elderly",
      "Atrial fibrillation — irregularly irregular without discrete P waves",
      "Sinus arrest/sinoatrial block — pause without respiratory phasic pattern; may need pacemaker",
      "Premature atrial contractions — early P with compensatory pause, not smooth respiratory cycling",
      "Second-degree AV block — dropped QRS complexes, not rate variation with every beat",
    ],
    boardsPearls: [
      "Sinus arrhythmia = normal in young healthy patients — rate varies with breathing",
      "P waves present and upright in II with variable R-R interval",
      "vs AF — sinus arrhythmia has organized P waves and mild phasic irregularity",
      "Loss of respiratory variation in elderly may reflect decreased vagal tone or sick sinus",
      "No treatment required when isolated and asymptomatic",
    ],
    pediatrics:
      "Pronounced respiratory sinus arrhythmia is normal in infants and children — reflects high vagal tone; distinguish from pathologic bradyarrhythmias causing syncope or pauses >3 seconds.",
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
