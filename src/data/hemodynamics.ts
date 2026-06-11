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
  {
    id: "hypovolemia",
    name: "Hypovolemia",
    aliases: ["hypovolemia", "hypovolaemia"],
    definition:
      "Decreased effective circulating intravascular volume, leading to reduced preload, tissue hypoperfusion, and compensatory sympathetic activation.",
    factors: [
      "Causes: hemorrhage, vomiting/diarrhea, burns, diuretics, third-spacing (pancreatitis, sepsis), inadequate intake",
      "Signs: tachycardia, hypotension, dry mucous membranes, decreased skin turgor, ↓ urine output",
      "Labs: ↑ BUN:Cr (prerenal), hemoconcentration (↑ Hct/Hgb), metabolic acidosis with poor perfusion",
      "Compensatory response: ↑ sympathetic tone, ↑ RAAS, ↑ ADH → tachycardia, vasoconstriction, oliguria",
      "Peds: infants decompensate quickly — tachycardia and lethargy may precede hypotension",
    ],
  },
  {
    id: "pcwp",
    name: "Pulmonary Capillary Wedge Pressure",
    aliases: [
      "pulmonary capillary wedge pressure",
      "pulmonary capillary wedge",
      "pulmonary wedge pressure",
      "pcwp",
      "pawp",
    ],
    definition:
      "Indirect estimate of left atrial pressure obtained by inflating a balloon at the tip of a Swan-Ganz catheter to occlude a pulmonary artery branch; the distal pressure reflects retrograde transmission from the left atrium.",
    factors: [
      "Normal PCWP ~6–12 mmHg",
      "↑ PCWP: left-sided heart failure, mitral stenosis/regurgitation, volume overload",
      "↓ PCWP: hypovolemia, hemorrhage",
      "Measured during right heart catheterization",
      "PCWP ≈ LAP (except mitral stenosis — gradient between wedge and LV)",
    ],
  },
  {
    id: "left-to-right-shunt",
    name: "Left-to-Right Shunt",
    aliases: [
      "left-to-right shunt",
      "left to right shunt",
      "left-to-right shunting",
      "left to right shunting",
    ],
    definition:
      "Abnormal flow from the higher-pressure systemic (left) side to the lower-pressure pulmonary (right) side through a congenital or acquired communication.",
    factors: [
      "Examples: VSD, ASD, PDA in infancy (acyanotic CHD)",
      "↑ pulmonary blood flow → volume overload of LA/LV and pulmonary arteries",
      "Chronic ↑ flow → pulmonary vascular remodeling and pulmonary hypertension",
      "Irreversible PAH → Eisenmenger syndrome with shunt reversal to right-to-left",
      "Peds: failure to thrive, recurrent respiratory infections, CHF signs with large shunts",
    ],
  },
  {
    id: "right-to-left-shunt",
    name: "Right-to-Left Shunt",
    aliases: [
      "right-to-left shunt",
      "right to left shunt",
      "right-to-left shunting",
      "right to left shunting",
    ],
    definition:
      "Deoxygenated blood bypasses the pulmonary circulation and enters the systemic circulation, causing hypoxemia and cyanosis.",
    factors: [
      "Cyanotic CHD: tetralogy of Fallot, TGA, tricuspid atresia, truncus arteriosus",
      "Eisenmenger syndrome — end-stage reversal of initially left-to-right shunt",
      "Shunt across VSD when RVOT obstruction raises RV pressure (ToF)",
      "Hypoxemia poorly responsive to supplemental O₂ when fixed anatomic shunt",
      "Peds: cyanosis, clubbing, polycythemia with chronic right-to-left shunting",
    ],
  },
  {
    id: "right-ventricular-hypertrophy",
    name: "Right Ventricular Hypertrophy",
    aliases: [
      "right ventricular hypertrophy",
      "right ventricle hypertrophy",
      "rv hypertrophy",
      "rvh",
      "concentric rvh",
      "concentric right ventricular hypertrophy",
      "rv pressure overload",
    ],
    definition:
      "Thickening of the right ventricular myocardium from chronic pressure overload, often producing a parasternal heave and characteristic ECG changes; the fourth feature of tetralogy of Fallot.",
    factors: [
      "Pressure overload: pulmonary stenosis, pulmonary hypertension, tetralogy of Fallot (RVOT obstruction), chronic PE",
      "Concentric RVH: thickened RV wall with pressure overload (vs eccentric dilation in volume overload from ASD/VSD)",
      "Clinical: parasternal lift/heave, sustained RV impulse",
      "ECG: right axis deviation, tall R in V1, R>S in V1 after infancy, P pulmonale",
      "CXR: enlarged RV silhouette; boot-shaped heart in ToF (↓ pulmonary vascular markings + upturned apex)",
      "Volume overload RV dilation (not true hypertrophy): ASD, PR — may have RV enlargement without pressure-pattern RVH",
      "Peds: RVH on ECG in cyanotic CHD — think ToF or severe pulmonic stenosis",
    ],
  },
  {
    id: "beck-triad",
    name: "Beck Triad",
    aliases: [
      "beck triad",
      "beck's triad",
      "becks triad",
    ],
    definition:
      "Classic clinical triad of cardiac tamponade: hypotension, jugular venous distention (elevated JVP), and muffled heart sounds.",
    factors: [
      "Hypotension — ↓ cardiac output from impaired diastolic filling",
      "Elevated JVP / distended neck veins — impaired venous return to compressed RA",
      "Muffled heart sounds — fluid between heart and chest wall dampens acoustics",
      "Often accompanied by pulsus paradoxus >10 mmHg and tachycardia",
      "Causes: pericardial effusion, hemopericardium (trauma, post-MI rupture, anticoagulation)",
      "Distinguish from tension pneumothorax (hyperresonance, absent breath sounds) and massive PE (clear lungs, no muffled sounds)",
    ],
  },
  {
    id: "pulsus-paradoxus",
    name: "Pulsus Paradoxus",
    aliases: [
      "pulsus paradoxus",
      "paradoxical pulse",
      "paradoxical pulsus",
    ],
    definition:
      "Exaggerated drop in systolic blood pressure (>10 mmHg) during inspiration — paradoxical because pulse/Korotkoff sounds may disappear with inspiration despite continued heartbeat.",
    factors: [
      "Mechanism: ↑ intrathoracic pressure or pericardial constraint → ↓ LV filling during inspiration while RV filling increases (ventricular interdependence)",
      "Classic: cardiac tamponade (>10 mmHg drop diagnostic)",
      "Also seen: severe asthma/COPD exacerbation, constrictive pericarditis, massive PE, obesity",
      "Measure: BP cuff — note systolic pressure when Korotkoff sounds first appear in expiration vs when continuous",
      "Tamponade vignette: JVD + muffled heart sounds + pulsus paradoxus → pericardiocentesis",
      "Not specific to tamponade alone — always interpret with full clinical context",
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
