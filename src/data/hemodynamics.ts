export interface HemodynamicEntry {
  id: string;
  name: string;
  etymology: string;
  aliases: string[];
  definition: string;
  factors: string[];
}

export const HEMODYNAMICS: HemodynamicEntry[] = [
  {
    id: "preload",
    name: "Preload",
    etymology: "pre- = before + load = ventricular stretch before contraction",
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
    etymology: "after = following + load = pressure/resistance after contraction begins",
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
    etymology: "Latin eicere = throw out + fractio = broken part/share",
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
    etymology: "Greek hypo = low + volume = amount + -emia = blood condition",
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
    etymology: "Latin pulmo = lung + capillus = hair + wedge = jammed stopper + pressure = force per area",
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
    etymology: "left = systemic side + right = pulmonary side + shunt = diverted flow path",
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
    etymology: "right = pulmonary side + left = systemic side + shunt = diverted flow path",
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
    etymology: "right = pulmonary side + ventriculus = little belly + Greek hyper = excess + trophe = growth",
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
    etymology: "eponym: Claude Beck + triad = group of three findings",
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
    etymology: "Latin pulsus = beat/pulse + paradoxus = contrary to expectation",
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
  {
    id: "plasma",
    name: "Plasma",
    etymology: "Greek plasma = something molded or formed",
    aliases: ["plasma", "blood plasma", "plasma volume"],
    definition:
      "The liquid component of blood after cells are removed, containing water, electrolytes, albumin and other proteins, clotting factors, hormones, and nutrients; the intravascular compartment from which glomerular filtrate is derived.",
    factors: [
      "Composition: ~90% water; major proteins include albumin (oncotic pressure), globulins, fibrinogen",
      "Oncotic (colloid osmotic) pressure largely from plasma proteins — opposes filtration out of capillaries",
      "Renal handling: glomerulus filters plasma water and small solutes; cells and large proteins normally remain intravascular",
      "↑ Plasma volume: Na⁺/water retention, IV fluids, hyperaldosteronism, SIADH (dilutional if free water excess)",
      "↓ Plasma volume: hemorrhage, dehydration, burns, third-spacing — ↓ preload and renal perfusion",
      "RPF = RBF × (1 − hematocrit) — plasma flow through kidneys per unit time",
    ],
  },
  {
    id: "renal-blood-flow",
    name: "Renal Blood Flow",
    etymology: "Latin ren = kidney + blood + flow = movement of fluid",
    aliases: [
      "renal blood flow",
      "rbf",
      "kidney blood flow",
    ],
    definition:
      "Total volumetric flow of blood through both kidneys per unit time (~20–25% of cardiac output, ~1.1 L/min in adults). High baseline flow supports filtration, reabsorption, and oxygen delivery despite relatively low O₂ extraction.",
    factors: [
      "Normal ~1.1 L/min (~20–25% CO) — kidneys receive disproportionately high perfusion",
      "↑ RBF: ↑ CO, vasodilation (prostaglandins dilate afferent arteriole, dopamine at low dose)",
      "↓ RBF: ↓ CO/hypovolemia, renal artery stenosis, NSAIDs (↓ prostaglandin-mediated afferent dilation), severe heart failure",
      "Autoregulation maintains relatively stable RBF/GFR across MAP ~80–180 mmHg via myogenic response and TGF",
      "RPF = RBF × (1 − Hct); hematocrit determines plasma fraction of renal flow",
      "Oxygen extraction by kidney is low (~10%) — high flow buffers metabolic demand",
    ],
  },
  {
    id: "renal-plasma-flow",
    name: "Renal Plasma Flow",
    etymology: "Latin ren = kidney + Greek plasma = formed/molded + flow = movement",
    aliases: [
      "renal plasma flow",
      "rpf",
      "kidney plasma flow",
      "effective renal plasma flow",
      "erpf",
    ],
    definition:
      "Plasma component of renal blood flow per unit time (~600–700 mL/min). Measured clinically using PAH clearance because PAH is both filtered and secretively extracted from plasma by proximal tubule.",
    factors: [
      "RPF = RBF × (1 − Hct); with Hct ~45%, RPF ≈ 55% of RBF",
      "Normal effective RPF ~600–700 mL/min (often estimated via PAH clearance)",
      "↑ RPF: same drivers as ↑ RBF (afferent dilation, ↑ CO)",
      "↓ RPF: afferent constriction, hypovolemia, NSAIDs, bilateral renal artery stenosis",
      "PAH clearance approximates RPF because kidney extracts ~90% of PAH from plasma in one pass",
      "Filtration fraction = GFR / RPF — links plasma delivery to filtration rate",
    ],
  },
  {
    id: "glomerular-filtration-rate",
    name: "Glomerular Filtration Rate",
    etymology: "Latin glomerulus = small ball + filtration + rate = per unit time",
    aliases: [
      "glomerular filtration rate",
      "gfr",
      "glomerular filtration",
      "estimated gfr",
      "estimated glomerular filtration rate",
      "egfr",
    ],
    definition:
      "Volume of plasma ultrafiltrate formed by all glomeruli per unit time (~120 mL/min/1.73 m² in healthy adults). Primary index of kidney excretory function; estimated clinically from creatinine (eGFR) or measured with inulin/Iohexol clearance.",
    factors: [
      "GFR = Kf × [(PGC − PBS) − (πGC − πBS)] — net ultrafiltration pressure × filtration coefficient",
      "↑ GFR: ↑ glomerular capillary hydrostatic pressure (afferent dilation or efferent constriction via Ang II), ↑ Kf",
      "↓ GFR: ↓ RBF (hypovolemia, NSAIDs, RAS), ↓ Kf (glomerular disease), ↓ net filtration pressure (efferent dilation or afferent constriction)",
      "Creatinine clearance approximates GFR; serum creatinine inversely correlates but lags in acute injury",
      "Autoregulation and tubuloglomerular feedback stabilize GFR despite BP fluctuations",
      "CKD staged by persistent ↓ GFR; ESRD typically GFR <15 mL/min/1.73 m²",
    ],
  },
  {
    id: "filtration-fraction",
    name: "Filtration Fraction",
    etymology: "Latin filtrum = felt/strainer + fractio = portion/share",
    aliases: [
      "filtration fraction",
      "ff",
      "renal filtration fraction",
    ],
    definition:
      "Fraction of renal plasma flow that is filtered across glomeruli: FF = GFR / RPF. Normally ~20% (~120/600 mL/min); the remaining ~80% of plasma passes through efferent arterioles to peritubular capillaries for reabsorption.",
    factors: [
      "Normal FF ≈ 0.20 (20%)",
      "↑ FF: efferent arteriole constriction (Ang II) → ↑ PGC with relatively stable RPF → ↑ GFR/RPF ratio",
      "↓ FF: afferent arteriole constriction → ↓ GFR more than ↓ RPF (e.g., NSAIDs, severe hypoperfusion)",
      "FF = GFR / RPF; if GFR and RPF both fall proportionally, FF may stay near normal",
      "Low FF with ↓ RPF suggests afferent-side hypoperfusion (prerenal azotemia physiology)",
      "High FF with ↑ Ang II supports efferent constriction preserving GFR in early hypovolemia",
    ],
  },
  {
    id: "mean-arterial-pressure",
    name: "Mean Arterial Pressure",
    etymology: "Latin medius = middle + arteria = artery + pressura = pressing force",
    aliases: [
      "mean arterial pressure",
      "map",
    ],
    definition:
      "Time-averaged arterial pressure over the cardiac cycle — the perfusion pressure driving organ blood flow. Approximated as DBP + ⅓(SBP − DBP), or (2×DBP + SBP)/3.",
    factors: [
      "Normal MAP ~70–105 mmHg; cerebral and renal autoregulation generally operates ~60–160 mmHg",
      "MAP = CO × SVR (conceptually — perfusion pressure depends on flow and resistance)",
      "↑ MAP: vasoconstriction (↑ SVR), ↑ CO (inotropes, hyperdynamic states), volume loading",
      "↓ MAP: hemorrhage, sepsis (late), cardiogenic shock, general anesthesia, vasodilators",
      "Cerebral perfusion pressure (CPP) = MAP − ICP — MAP must exceed ICP for brain perfusion",
      "Autoregulation in kidney and brain buffers blood flow across a range of MAP changes",
    ],
  },
  {
    id: "systemic-vascular-resistance",
    name: "Systemic Vascular Resistance",
    etymology: "Greek systema = organized whole + Latin vasculum = small vessel + resistere = to stand against",
    aliases: [
      "systemic vascular resistance",
      "svr",
      "total peripheral resistance",
      "tpr",
      "peripheral vascular resistance",
    ],
    definition:
      "Aggregate resistance to blood flow offered by the systemic arterial tree. Primary determinant of LV afterload; calculated from MAP, CVP, and cardiac output: SVR ∝ (MAP − CVP) / CO.",
    factors: [
      "Normal SVR ~900–1400 dyn·s/cm⁵ (~11–15 Wood units)",
      "↑ SVR: vasoconstrictors (phenylephrine, norepinephrine), hypovolemic shock (compensatory), cardiogenic shock, cold exposure",
      "↓ SVR: sepsis (early distributive shock), anaphylaxis, spinal/epidural anesthesia, nitroprusside, hydralazine",
      "Squatting and knee-chest position ↑ SVR — used in tetralogy of Fallot to ↓ right-to-left shunt",
      "Shock profiles: hypovolemic/cardiogenic → ↑ SVR; early septic → ↓ SVR with ↑ or normal CO",
      "Afterload ≈ SVR for the left ventricle ejecting into the aorta",
    ],
  },
  {
    id: "intravascular-volume",
    name: "Intravascular Volume",
    etymology: "Latin intra = within + vasculum = small vessel + Latin volumen = amount/roll",
    aliases: [
      "intravascular volume",
      "intravascular fluid volume",
      "circulating volume",
      "circulating blood volume",
      "effective circulating volume",
      "effective arterial blood volume",
      "plasma volume",
      "blood volume",
    ],
    definition:
      "Volume of blood contained within the vascular space (arteries, veins, capillaries, and heart chambers), comprising plasma and erythrocytes; the primary determinant of venous return, preload, and organ perfusion pressure.",
    factors: [
      "↑ Intravascular volume: IV fluids, blood transfusion, sodium/water retention (aldosterone, ADH), mineralocorticoid excess",
      "↓ Intravascular volume: hemorrhage, vomiting/diarrhea, diuretics, burns, third-spacing (pancreatitis, sepsis, ascites)",
      "Effective circulating volume — portion perfusing tissues; may be low despite edema in heart failure or cirrhosis (arterial underfilling theory)",
      "Compensatory responses to ↓ volume: ↑ sympathetic tone, RAAS, ADH → tachycardia, vasoconstriction, oliguria",
      "Signs of depletion: tachycardia, hypotension, ↓ JVP/CVP, dry mucous membranes, ↓ urine output",
      "Signs of overload: ↑ JVP, peripheral edema, pulmonary crackles, S3, hypertension in hypervolemia",
      "vs interstitial fluid — extracellular but outside vessels; third space is nonfunctional interstitial sequestration",
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
