export interface ClinicalStrategyEntry {
  id: string;
  name: string;
  aliases: string[];
  definition: string;
  details: string[];
  boardsPearls: string[];
  pediatrics?: string;
}

export const CLINICAL_STRATEGIES: ClinicalStrategyEntry[] = [
  {
    id: "rate-control",
    name: "Rate control",
    aliases: ["rate control", "rate-control"],
    definition:
      "Management strategy for atrial fibrillation/flutter that limits ventricular response without necessarily restoring sinus rhythm.",
    details: [
      "Goal: adequate ventricular rate (often <110 bpm at rest) and symptom relief while accepting continued AF",
      "First-line agents: β-blockers (metoprolol, atenolol), nondihydropyridine CCBs (diltiazem, verapamil)",
      "Digoxin for rate control (especially with HF or sedentary patients; less effective with exertion)",
      "Dihydropyridine CCBs (amlodipine, nifedipine) are not used for AV nodal rate control",
      "Often preferred in elderly patients and when rhythm-control drugs are high risk",
    ],
    boardsPearls: [
      "Rate control vs rhythm control: similar mortality in many AF patients (AFFIRM trial framework)",
      "WPW + AF: avoid AV nodal blockers (β-blocker, nondihydropyridine CCB, digoxin) → use procainamide or cardioversion",
      "Nondihydropyridine CCB + β-blocker → additive bradycardia/AV block",
      "Amiodarone can provide both rate and rhythm control but is not first-line for rate-only strategy",
    ],
    pediatrics:
      "Rate control in pediatric AF/SVT uses weight-based β-blockers or digoxin; same AV nodal physiology applies.",
  },
  {
    id: "rhythm-control",
    name: "Rhythm control",
    aliases: ["rhythm control", "rhythm-control"],
    definition:
      "Management strategy for atrial fibrillation/flutter aimed at restoring and maintaining sinus rhythm.",
    details: [
      "Goal: cardioversion to sinus rhythm and prevention of AF recurrence",
      "Electrical cardioversion or chemical cardioversion (antiarrhythmics)",
      "Rhythm-control drugs: amiodarone, flecainide, propafenone, sotalol, dofetilide (patient- and substrate-specific)",
      "Anticoagulate ≥3 weeks before elective cardioversion if AF >48 h or duration unknown, or perform TEE to exclude LA thrombus",
      "May be preferred in symptomatic younger patients, tachycardia-mediated cardiomyopathy, or difficult rate control",
    ],
    boardsPearls: [
      "Cardioversion without anticoagulation if AF <48 h and low thromboembolic risk — otherwise anticoagulate or TEE first",
      "Flecainide/propafenone — avoid in structural heart disease or CAD (proarrhythmia risk)",
      "Amiodarone effective for rhythm control but long-term toxicity limits use",
      "Rhythm control does not consistently outperform rate control for survival — anticoagulation still required by stroke risk",
    ],
    pediatrics:
      "Rhythm control in children often involves cardioversion for hemodynamically significant AF; antiarrhythmic choice is specialist-guided.",
  },
];

const strategyById = new Map(
  CLINICAL_STRATEGIES.map((entry) => [entry.id, entry]),
);

export function getClinicalStrategyById(
  id: string,
): ClinicalStrategyEntry | undefined {
  return strategyById.get(id);
}

export interface ClinicalStrategyAliasMatch {
  alias: string;
  clinicalStrategyId: string;
}

export function buildClinicalStrategyAliasIndex(): ClinicalStrategyAliasMatch[] {
  const matches: ClinicalStrategyAliasMatch[] = [];
  for (const entry of CLINICAL_STRATEGIES) {
    for (const alias of entry.aliases) {
      matches.push({
        alias: alias.toLowerCase(),
        clinicalStrategyId: entry.id,
      });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
