export interface HemodynamicEntry {
  id: string;
  name: string;
  aliases: string[];
  definition: string;
  factors: string[];
}

export const HEMODYNAMICS: HemodynamicEntry[] = [
  {
    id: "preload",
    name: "Preload",
    aliases: ["preload"],
    definition:
      "End-diastolic ventricular volume (EDV) and the stretch on the ventricular wall before contraction. Greater preload increases sarcomere stretch and stroke volume via the Frank-Starling mechanism.",
    factors: [
      "↑ Preload: increased venous return (blood transfusion, fluid loading), sympathetic tone, supine position, muscle pump during exercise, mitral regurgitation",
      "↓ Preload: decreased venous return (hemorrhage, dehydration, diuretics, venodilators), standing, tamponade, pulmonary embolism, mitral stenosis",
    ],
  },
  {
    id: "afterload",
    name: "Afterload",
    aliases: ["afterload"],
    definition:
      "The resistance or pressure the ventricle must overcome to eject blood. For the left ventricle, afterload is primarily determined by systemic vascular resistance and aortic pressure.",
    factors: [
      "↑ Afterload: hypertension, increased SVR (vasoconstriction), aortic stenosis, coarctation of the aorta",
      "↓ Afterload: vasodilators, decreased SVR (sepsis, anaphylaxis), aortic regurgitation (lower diastolic pressure)",
    ],
  },
  {
    id: "ejection-fraction",
    name: "Ejection Fraction",
    aliases: ["ejection fraction"],
    definition:
      "The percentage of end-diastolic volume ejected per beat: EF = (stroke volume / EDV) × 100%. Normal LVEF is roughly 55–70%.",
    factors: [
      "↓ EF: systolic heart failure, myocardial infarction, cardiomyopathy, increased afterload, severe mitral regurgitation",
      "↑ EF: positive inotropes (dobutamine, digoxin), decreased afterload, hyperdynamic states (anemia, hyperthyroidism)",
    ],
  },
];

const hemodynamicById = new Map(HEMODYNAMICS.map((h) => [h.id, h]));

export function getHemodynamicById(id: string): HemodynamicEntry | undefined {
  return hemodynamicById.get(id);
}

export interface HemodynamicAliasMatch {
  alias: string;
  hemodynamicId: string;
}

export function buildHemodynamicAliasIndex(): HemodynamicAliasMatch[] {
  const matches: HemodynamicAliasMatch[] = [];
  for (const term of HEMODYNAMICS) {
    for (const alias of term.aliases) {
      matches.push({ alias: alias.toLowerCase(), hemodynamicId: term.id });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
