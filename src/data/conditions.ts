export interface ConditionEntry {
  id: string;
  name: string;
  etymology: string;
  aliases: string[];
  definition: string;
  pathophysiology: string;
  classicPresentation: string[];
  keyFindings?: string[];
  keyLabs?: string[];
  associations?: string[];
  complications?: string[];
  distinguishFrom?: string[];
  treatment: string[];
  boardsPearls: string[];
  pediatrics?: string;
}

export const CONDITIONS: ConditionEntry[] = [
  {
    id: "myocardial-infarction",
    name: "Myocardial Infarction",
    etymology: "Greek myo- = muscle + kardia = heart + Latin infarctus = stuffed/blocked tissue",
    aliases: [
      "myocardial infarction",
      "mi",
      "heart attack",
      "acute mi",
      "stemi",
      "nstemi",
      "acute coronary syndrome",
      "acs",
      "transmural infarction",
      "subendocardial infarction",
    ],
    definition:
      "Acute myocardial necrosis from prolonged coronary ischemia, usually due to plaque rupture and thrombotic occlusion.",
    pathophysiology:
      "Atherosclerotic plaque rupture → platelet aggregation and thrombus → coronary occlusion → ischemia beyond ~20 min causes irreversible myocyte death; reperfusion injury can follow revascularization.",
    classicPresentation: [
      "Crushing substernal chest pain radiating to left arm/jaw",
      "Diaphoresis, nausea, dyspnea",
      "Risk factors: HTN, DM, smoking, hyperlipidemia",
    ],
    keyFindings: [
      "ST elevation (STEMI) or ST depression/T-wave changes (NSTEMI)",
      "New Q waves on ECG (transmural infarct)",
      "S4 gallop, new mitral regurgitation murmur",
    ],
    keyLabs: [
      "↑ Troponin I/T (most specific; rises in 3–4 h)",
      "↑ CK-MB (less specific; useful for reinfarction timing)",
    ],
    complications: [
      "Arrhythmias (VF within 24 h, heart block)",
      "Papillary muscle rupture → acute MR (3–5 days)",
      "Free wall rupture → tamponade (5–14 days)",
      "Ventricular aneurysm, Dressler syndrome",
    ],
    distinguishFrom: [
      "Unstable angina — no troponin rise",
      "Aortic dissection — tearing pain, unequal BP",
      "Pericarditis — diffuse ST elevation, PR depression",
    ],
    treatment: [
      "Reperfusion: PCI preferred, or fibrinolysis if PCI unavailable",
      "Antiplatelet (aspirin + P2Y12 inhibitor), anticoagulation, β-blocker, statin",
    ],
    boardsPearls: [
      "STEMI: ST elevation in contiguous leads → culprit artery territory",
      "Anterior MI (LAD): V1–V4; Inferior MI (RCA): II, III, aVF",
      "Reperfusion therapy: PCI or fibrinolysis within time window",
      "Post-MI complications by timing: VF (24 h), papillary rupture (3–5 d), free wall rupture (5–14 d)",
      "Cardiogenic shock post-MI → large infarct, ↓ EF, pulmonary edema; may need IABP and urgent revascularization",
    ],
    pediatrics:
      "MI rare in children; consider Kawasaki disease (coronary aneurysm/thrombosis), anomalous coronary origin, or hypercoagulability. Chest pain in adolescents still warrants ECG and troponin when ischemia is suspected.",
  },
  {
    id: "stable-angina",
    name: "Stable Angina",
    etymology: "Latin stabilis = steady + angere = to choke/strangle",
    aliases: [
      "stable angina",
      "chronic stable angina",
      "exertional angina",
      "angina pectoris",
      "stable angina pectoris",
    ],
    definition:
      "Predictable chest discomfort from myocardial ischemia during increased oxygen demand, caused by fixed coronary atherosclerotic stenosis without acute plaque rupture.",
    pathophysiology:
      "Chronic coronary plaque limits flow reserve → exertion ↑ myocardial O₂ demand beyond supply → subendocardial ischemia → anginal pain; rest restores supply-demand balance and relieves symptoms.",
    classicPresentation: [
      "Substernal pressure or tightness with exertion, emotional stress, or cold",
      "Relieved within minutes by rest or nitroglycerin",
      "Predictable pattern over weeks to months (same threshold)",
      "Risk factors: HTN, hyperlipidemia, diabetes, smoking",
    ],
    keyFindings: [
      "Normal troponin (no myocyte necrosis)",
      "ST depression during stress test (or normal ECG at rest)",
      "S4 gallop possible with LV hypertrophy or ischemic cardiomyopathy",
    ],
    keyLabs: [
      "Troponin negative during pain-free interval",
      "Stress ECG, stress echo, or nuclear perfusion imaging → inducible ischemia",
      "Coronary CT angiography or catheter angiography for anatomic disease",
    ],
    associations: [
      "Atherosclerosis and coronary artery disease",
      "Hypertension, hyperlipidemia, diabetes mellitus",
      "Aortic stenosis (can cause exertional angina without CAD)",
    ],
    complications: [
      "Progression to unstable angina or acute coronary syndrome",
      "Myocardial infarction",
      "Ischemic cardiomyopathy with reduced EF",
    ],
    distinguishFrom: [
      "Unstable angina — new-onset, accelerating, or rest angina; higher ACS risk",
      "NSTEMI/STEMI — troponin elevation, acute plaque rupture",
      "Vasospastic (Prinzmetal) angina — rest pain, transient ST elevation, normal coronaries",
      "GERD or musculoskeletal chest pain — nonexertional, not relieved predictably by nitroglycerin",
    ],
    treatment: [
      "Anti-anginal therapy: β-blocker (first line), nitroglycerin PRN, long-acting nitrates, CCB if β-blocker intolerant",
      "Risk reduction: aspirin, statin, ACE inhibitor, smoking cessation",
      "Revascularization (PCI/CABG) for refractory symptoms or high-risk anatomy",
    ],
    boardsPearls: [
      "Stable = predictable exertional pain relieved by rest/nitrates; troponin negative",
      "Unstable angina = ACS without troponin rise; NSTEMI/STEMI = troponin positive",
      "β-blockers ↓ myocardial O₂ demand (↓ HR, contractility); nitrates ↓ preload",
      "Aortic stenosis triad: angina, syncope, heart failure — angina without CAD possible",
    ],
    pediatrics:
      "Atherosclerotic stable angina is rare in children; exertional chest pain in adolescents more often musculoskeletal, asthma, or anxiety — still evaluate if cardiac risk factors or concerning exam.",
  },
  {
    id: "valvular-heart-disease",
    name: "Valvular Heart Disease",
    etymology: "Latin valva = folding door + heart = cardiac pump + disease = disordered function",
    aliases: [
      "valvular heart disease",
      "valvular disease",
      "heart valve disease",
    ],
    definition:
      "Structural or functional abnormality of cardiac valves causing stenosis, regurgitation, or both.",
    pathophysiology:
      "Stenosis increases pressure gradient across valve → pressure overload (LV for AS, LA for MS); regurgitation causes volume overload → chamber dilation and eventual heart failure.",
    classicPresentation: [
      "Exertional dyspnea, orthopnea, PND",
      "Angina (aortic stenosis — fixed CO)",
      "Rheumatic fever history (mitral stenosis)",
    ],
    keyFindings: [
      "Aortic stenosis: crescendo-decrescendo murmur at RUSB, radiates to carotids, ↓ with Valsalva",
      "Mitral regurgitation: holosystolic murmur at apex → axilla",
      "Mitral stenosis: diastolic rumble at apex, opening snap",
    ],
    keyLabs: ["Echocardiography — gold standard for severity and etiology"],
    associations: [
      "Rheumatic heart disease",
      "Bicuspid aortic valve (aortic stenosis)",
      "MVP, endocarditis (mitral regurgitation)",
    ],
    distinguishFrom: [
      "Hypertrophic cardiomyopathy — murmur ↑ with Valsalva",
      "Functional murmurs — benign, no symptoms",
    ],
    treatment: [
      "Medical: diuretics for congestion; endocarditis prophylaxis when indicated",
      "Definitive: valve repair/replacement when symptomatic or severe stenosis",
    ],
    boardsPearls: [
      "AS triad: angina, syncope, heart failure (poor prognosis once symptomatic)",
      "MS → LA enlargement → atrial fibrillation → thromboembolism",
      "Acute MR from papillary muscle rupture post-MI",
    ],
  },
  {
    id: "endocarditis",
    name: "Endocarditis",
    etymology: "Greek endon = within + kardia = heart + -itis = inflammation",
    aliases: [
      "endocarditis",
      "libman-sacks endocarditis",
      "libman sacks endocarditis",
      "nonbacterial thrombotic endocarditis",
      "marantic endocarditis",
      "nbte",
    ],
    definition:
      "Inflammation of the endocardium, most often affecting heart valves; may be infectious, autoimmune, or sterile/thrombotic depending on etiology.",
    pathophysiology:
      "Endothelial injury on valves → platelet-fibrin deposition ± microbial seeding or immune complex deposition → vegetations that can destroy valves or embolize. Infective: bacteremia on damaged endothelium. Libman-Sacks: SLE immune complexes. Marantic: hypercoagulable/malignancy-associated sterile thrombi.",
    classicPresentation: [
      "Fever, new murmur, fatigue (infective)",
      "Embolic phenomena: stroke, splinter hemorrhages, Janeway/Osler lesions (infective)",
      "Sterile verrucous vegetations in SLE (Libman-Sacks)",
      "Occult malignancy or hypercoagulable state (marantic)",
    ],
    keyFindings: [
      "Valvular vegetations on echocardiography",
      "New or worsening regurgitant murmur",
      "Peripheral stigmata: splinter hemorrhages, Roth spots, Janeway/Osler nodes (infective)",
      "Verrucous vegetations on both sides of valve (Libman-Sacks)",
    ],
    keyLabs: [
      "Blood cultures (infective — positive; Libman-Sacks/marantic — negative)",
      "↑ ESR/CRP",
      "ANA/anti-dsDNA (Libman-Sacks with SLE)",
    ],
    associations: [
      "Infective endocarditis — damaged/native/prosthetic valves, IVDU, dental procedures",
      "Libman-Sacks — systemic lupus erythematosus",
      "Marantic (NBTE) — advanced malignancy, Trousseau syndrome",
      "Rheumatic fever — pancarditis with endocardial involvement",
    ],
    complications: [
      "Valve destruction and heart failure",
      "Septic or sterile emboli (stroke, renal/splenic infarcts)",
      "Ring abscess and conduction block (infective)",
    ],
    distinguishFrom: [
      "Infective endocarditis — positive blood cultures, fever, acute/subacute bacterial course",
      "Rheumatic fever — migratory polyarthritis, chorea, ASO elevation, responds to antibiotics for strep",
      "Myocarditis — myocardial inflammation; murmur not from vegetations",
      "Pericarditis — pleuritic pain, friction rub, diffuse ST elevation with PR depression",
    ],
    treatment: [
      "Infective: prolonged IV antibiotics ± valve surgery",
      "Libman-Sacks: treat underlying SLE; anticoagulation controversial",
      "Marantic: treat underlying malignancy/hypercoagulable state; anticoagulation often considered",
    ],
    boardsPearls: [
      "Three main boards types: infective (bacterial), Libman-Sacks (SLE, sterile), marantic/NBTE (malignancy)",
      "Libman-Sacks: verrucous vegetations on mitral/aortic valves, both sides of valve, negative cultures",
      "Marantic endocarditis: sterile small vegetations on normal valves in advanced cancer",
      "Infective endocarditis is the most common clinically significant form — see dedicated entry",
    ],
    pediatrics:
      "Congenital heart disease increases infective endocarditis risk; rheumatic fever still causes endocarditis in endemic areas. Libman-Sacks can occur in childhood SLE.",
  },
  {
    id: "infective-endocarditis",
    name: "Infective Endocarditis",
    etymology: "infective = caused by infection + Greek endon = within + kardia = heart + -itis = inflammation",
    aliases: [
      "infective endocarditis",
      "bacterial endocarditis",
      "subacute bacterial endocarditis",
      "acute bacterial endocarditis",
      "sbe",
      "abe",
    ],
    definition:
      "Infection of the endocardium, usually involving heart valves, with microbial vegetations that can embolize and destroy valve tissue.",
    pathophysiology:
      "Endothelial injury (valve damage, turbulence) → platelet-fibrin thrombus → bacterial seeding during bacteremia → vegetations on valves → valve destruction, abscess formation, and septic emboli.",
    classicPresentation: [
      "Fever, new or changing murmur, fatigue",
      "Subacute (viridans strep): after dental work on abnormal valve",
      "Acute (S. aureus): rapid destruction, often normal valves or IVDU",
    ],
    keyFindings: [
      "New regurgitant murmur",
      "Janeway lesions (painless palm/sole macules)",
      "Osler nodes (painful finger/toe nodules)",
      "Splinter hemorrhages, Roth spots (retinal hemorrhage with pale center)",
    ],
    keyLabs: [
      "Positive blood cultures (most important)",
      "↑ ESR/CRP",
      "Echocardiography — vegetations, abscess, new regurgitation",
    ],
    associations: [
      "Prior valve disease (rheumatic, prosthetic, congenital)",
      "IV drug use (tricuspid involvement, S. aureus)",
      "Dental procedures (viridans streptococci)",
      "Catheters and indwelling hardware",
    ],
    complications: [
      "Valve destruction requiring surgery",
      "Septic emboli (stroke, splenic/renal infarcts)",
      "Ring abscess, heart block",
      "Glomerulonephritis (immune complex)",
    ],
    distinguishFrom: [
      "Libman-Sacks endocarditis (SLE) — sterile vegetations, verrucous, both sides of valve",
      "Rheumatic fever — migratory polyarthritis, chorea, pancarditis; no persistent bacteremia",
      "Nonbacterial thrombotic endocarditis (marantic) — malignancy/hypercoagulable, sterile small vegetations",
    ],
    treatment: [
      "Prolonged IV antibiotics tailored to organism and sensitivities",
      "Surgery for refractory infection, abscess, heart block, or severe valve dysfunction",
    ],
    boardsPearls: [
      "Most common organisms: S. viridans (dental, damaged valve), S. aureus (acute, IVDU, prosthetic)",
      "Enterococcal endocarditis: ampicillin + gentamicin synergy",
      "Duke criteria: blood cultures + echo findings + clinical criteria",
      "IVDU → tricuspid valve, S. aureus, septic pulmonary emboli",
    ],
    pediatrics:
      "Congenital heart disease and prior valve surgery increase risk; viridans strep after dental procedures. Prophylaxis limited to highest-risk lesions per current guidelines.",
  },
  {
    id: "pericarditis",
    name: "Pericarditis",
    etymology: "Greek peri = around + kardia = heart + -itis = inflammation",
    aliases: [
      "pericarditis",
      "acute pericarditis",
      "viral pericarditis",
      "uremic pericarditis",
      "dressler syndrome",
      "post-mi pericarditis",
      "constrictive pericarditis",
    ],
    definition:
      "Inflammation of the pericardium causing chest pain, friction rub, and characteristic ECG changes; may progress to effusion, tamponade, or constrictive pericarditis.",
    pathophysiology:
      "Pericardial inflammation → chest pain from parietal pericardium irritation; pericardial effusion from ↑ capillary permeability or uremic toxins; chronic inflammation → fibrosis and calcification (constrictive pericarditis) with impaired diastolic filling.",
    classicPresentation: [
      "Sharp pleuritic chest pain relieved by sitting up and leaning forward",
      "Pericardial friction rub (pathognomonic when present)",
      "Fever and recent viral URI (viral pericarditis)",
      "1–3 days to weeks post-MI (Dressler syndrome — autoimmune)",
    ],
    keyFindings: [
      "Pericardial friction rub (triphasic: atrial systole, ventricular systole, early diastole)",
      "Diffuse ST-segment elevation with PR-segment depression on ECG",
      "Pericardial effusion on echo (may be small)",
      "Electrical alternans with large effusion/tamponade",
    ],
    keyLabs: [
      "↑ troponin possible (myopericarditis overlap)",
      "↑ ESR/CRP",
      "↑ BUN/Cr in uremic pericarditis",
    ],
    associations: [
      "Viral infection (Coxsackie B most common)",
      "Post-myocardial infarction (Dressler syndrome)",
      "Uremia (dialysis indication if uremic pericarditis)",
      "Autoimmune disease (SLE, rheumatoid arthritis)",
      "Bacterial pericarditis (purulent — post-thoracic surgery, extension from pneumonia)",
    ],
    complications: [
      "Pericardial effusion",
      "Cardiac tamponade (Beck triad: hypotension, JVD, muffled heart sounds)",
      "Constrictive pericarditis (chronic — Kussmaul sign, pericardial knock)",
    ],
    distinguishFrom: [
      "Myocardial infarction — regional ST elevation, reciprocal changes, ↑ troponin with wall motion abnormality",
      "Pulmonary embolism — pleuritic pain but no friction rub; no diffuse ST elevation",
      "Aortic dissection — tearing pain to back, unequal BP, widened mediastinum",
      "Restrictive cardiomyopathy — similar hemodynamics to constriction but pericardium normal on CT/MRI",
    ],
    treatment: [
      "NSAIDs + colchicine for idiopathic/viral acute pericarditis",
      "Treat underlying cause (dialysis for uremic pericarditis)",
      "Avoid anticoagulation when possible — risk of hemopericardium",
      "Pericardiocentesis for tamponade; pericardiectomy for symptomatic constriction",
    ],
    boardsPearls: [
      "Diffuse ST elevation + PR depression = acute pericarditis (vs regional ST elevation in MI)",
      "Pain improved sitting forward — classic positional symptom",
      "Dressler syndrome: autoimmune pericarditis weeks post-MI",
      "Tamponade: JVD + hypotension + muffled heart sounds; pulsus paradoxus >10 mmHg",
      "Constrictive vs restrictive: constriction has pericardial calcification/knock; equalization of diastolic pressures on cath",
    ],
    pediatrics:
      "Most pediatric pericarditis is viral and self-limited; purulent pericarditis is serious in infants. Post-MI Dressler is rare in children but myopericarditis occurs with viral myocarditis.",
  },
  {
    id: "cardiac-tamponade",
    name: "Cardiac Tamponade",
    etymology: "Greek kardia = heart + French tampon = plug/stopper",
    aliases: [
      "cardiac tamponade",
      "pericardial tamponade",
      "tamponade",
      "hemopericardium with tamponade",
    ],
    definition:
      "Life-threatening compression of the heart by accumulated pericardial fluid (or blood) that impairs diastolic filling and cardiac output.",
    pathophysiology:
      "Rapid or large pericardial effusion → ↑ intrapericardial pressure → equalization of diastolic pressures and ↓ ventricular filling → ↓ stroke volume and CO → hypotension and shock; inspiratory ↓ in systolic BP (pulsus paradoxus) from exaggerated ventricular interdependence.",
    classicPresentation: [
      "Hypotension, tachycardia, dyspnea, and distended neck veins",
      "Muffled heart sounds",
      "Beck triad: hypotension, JVD, muffled heart sounds",
      "Pulsus paradoxus >10 mmHg",
      "Acute: trauma, aortic rupture into pericardium, post-MI free wall rupture, iatrogenic (catheter)",
    ],
    keyFindings: [
      "Elevated JVP with Kussmaul sign absent (JVP rises with inspiration in constriction, not classic tamponade)",
      "Pulsus paradoxus >10 mmHg",
      "Electrical alternans on ECG (beat-to-beat QRS amplitude variation with swinging heart)",
      "Echo: pericardial effusion with RA/RV diastolic collapse",
    ],
    keyLabs: [
      "Echocardiography — diagnostic; guides pericardiocentesis",
      "ECG — low voltage, electrical alternans; may mimic STEMI if post-MI hemopericardium",
      "Chest X-ray — enlarged cardiac silhouette if effusion large and subacute",
    ],
    associations: [
      "Pericarditis with effusion (malignancy, uremia, viral, TB)",
      "Trauma and aortic dissection rupture into pericardium",
      "Post-MI free wall rupture",
      "Anticoagulation in pericarditis (hemopericardium)",
    ],
    complications: [
      "Obstructive shock and cardiac arrest",
      "Death without urgent decompression",
    ],
    distinguishFrom: [
      "Constrictive pericarditis — chronic, pericardial knock, Kussmaul sign, equalized pressures without effusion",
      "Massive pulmonary embolism — JVD and hypotension but no muffled heart sounds; echo shows RV strain",
      "Tension pneumothorax — unilateral absent breath sounds, tracheal deviation, hyperresonance",
      "Large pleural effusion alone — no muffled heart sounds or pulsus paradoxus",
    ],
    treatment: [
      "Urgent pericardiocentesis (or surgical window) for decompression",
      "IV fluids as temporizing measure (↑ preload)",
      "Treat underlying cause; avoid diuretics and aggressive vasodilation",
      "Pericardial drain for recurrent or purulent effusion",
    ],
    boardsPearls: [
      "Beck triad: hypotension + JVD + muffled heart sounds",
      "Pulsus paradoxus >10 mmHg — inspiratory drop in systolic BP from ↓ stroke volume",
      "Electrical alternans = swinging heart in large effusion",
      "Obstructive shock with JVD — tamponade, tension PTX, massive PE",
      "RA diastolic collapse on echo is sensitive for tamponade",
    ],
    pediatrics:
      "Tamponade in children from bacterial pericarditis, trauma, or post-cardiac surgery; infants may present with irritability, tachypnea, and hepatomegaly. Urgent echo and pericardiocentesis.",
  },
  {
    id: "tension-pneumothorax",
    name: "Tension Pneumothorax",
    etymology: "Latin tendere = stretch + Greek pneuma = air + thorax = chest",
    aliases: ["tension pneumothorax", "tension ptx", "tension pneumo"],
    definition:
      "Life-threatening pneumothorax in which air enters the pleural space but cannot exit, causing progressive intrathoracic pressure, mediastinal shift, and cardiovascular collapse.",
    pathophysiology:
      "One-way valve effect traps air in pleural space → ↑ intrapleural pressure → lung collapse → mediastinal shift → ↓ venous return to heart → ↓ preload and CO → obstructive shock; contralateral lung compression worsens hypoxemia.",
    classicPresentation: [
      "Sudden severe dyspnea, chest pain, and hypotension after trauma, ventilation, or procedure",
      "Unilateral absent or markedly decreased breath sounds",
      "Hyperresonance to percussion on affected side",
      "Tracheal deviation away from affected side (late sign)",
      "Distended neck veins (obstructive physiology)",
    ],
    keyFindings: [
      "Absent breath sounds on affected hemithorax",
      "Hyperresonance on percussion",
      "Tracheal and mediastinal shift away from pneumothorax",
      "Tachycardia, hypotension, hypoxemia",
    ],
    keyLabs: [
      "Clinical diagnosis — do not delay treatment for imaging",
      "Chest X-ray or ultrasound if stable: visceral pleural line without lung markings, mediastinal shift",
      "ABG may show hypoxemia and respiratory alkalosis early",
    ],
    associations: [
      "Trauma (rib fracture, penetrating injury)",
      "Mechanical ventilation (barotrauma)",
      "Central line placement, thoracentesis, lung biopsy",
      "Underlying COPD with spontaneous pneumothorax",
      "Resuscitation with bag-mask ventilation if unrecognized rib injury",
    ],
    complications: [
      "Obstructive shock and cardiac arrest",
      "Reexpansion pulmonary edema after rapid decompression (rare)",
      "Death without immediate decompression",
    ],
    distinguishFrom: [
      "Simple pneumothorax — no hemodynamic compromise or mediastinal shift",
      "Cardiac tamponade — muffled heart sounds, pulsus paradoxus, no unilateral hyperresonance",
      "Massive hemothorax — dullness to percussion, not hyperresonance",
      "Mainstem intubation — unilateral breath sounds but no hyperresonance or tracheal deviation pattern",
    ],
    treatment: [
      "Immediate needle decompression (2nd intercostal space, midclavicular line) or finger thoracostomy",
      "Definitive chest tube (tube thoracostomy)",
      "Supplemental O₂; treat shock with fluids and vasopressors as needed",
      "Do not wait for chest X-ray if clinical suspicion is high",
    ],
    boardsPearls: [
      "Tension PTX = obstructive shock + unilateral absent breath sounds + hyperresonance",
      "Needle decompression then chest tube — clinical diagnosis, treat before imaging",
      "Tracheal deviation away from affected side is late — do not wait for it",
      "Obstructive shock triad differential: tamponade, tension PTX, massive PE",
      "Ventilated patient with sudden ↓ BP and ↑ airway pressures → tension PTX until proven otherwise",
    ],
    pediatrics:
      "Same emergency management in children; needle decompression site adjusted for body size. Spontaneous pneumothorax in adolescents (tall thin males) can progress to tension — urgent decompression.",
  },
  {
    id: "hemothorax",
    name: "Hemothorax",
    etymology: "Greek haima = blood + thorax = chest",
    aliases: [
      "hemothorax",
      "hemothoraces",
      "bloody pleural effusion",
      "traumatic hemothorax",
    ],
    definition:
      "Accumulation of blood in the pleural space, most often from trauma to the chest wall, lung parenchyma, or great vessels.",
    pathophysiology:
      "Disruption of intercostal vessels, lung, or mediastinal structures → blood collects in pleural space → ↓ lung expansion and ventilation; massive hemothorax (>1500 mL or >200 mL/h) → ↓ venous return and hypovolemic/obstructive shock.",
    classicPresentation: [
      "Chest trauma with dyspnea, pleuritic pain, and hypotension",
      "Dullness to percussion and decreased breath sounds on affected side",
      "Decreased tactile fremitus",
      "Signs of hypovolemia with large blood loss",
    ],
    keyFindings: [
      "Dullness to percussion over hemithorax (vs hyperresonance in pneumothorax)",
      "Decreased or absent breath sounds at base",
      "Flat hemidiaphragm or opacified hemithorax on CXR",
      "Tracheal deviation toward affected side if massive (volume effect, not tension)",
    ],
    keyLabs: [
      "Chest X-ray — homogenous opacity layering in pleural space; blunted costophrenic angle",
      "Chest tube output quantifies ongoing bleeding",
      "↓ Hemoglobin/hematocrit; type and crossmatch",
    ],
    associations: [
      "Blunt or penetrating thoracic trauma",
      "Rib fractures lacerating intercostal artery",
      "Iatrogenic (central line, thoracentesis, surgery)",
      "Coagulopathy or anticoagulation",
      "Aortic or great vessel injury (massive hemothorax)",
    ],
    complications: [
      "Hypovolemic shock from massive hemorrhage",
      "Retained hemothorax → empyema or fibrothorax",
      "Coagulopathic thoracic hemorrhage",
    ],
    distinguishFrom: [
      "Tension pneumothorax — hyperresonance, no dullness, obstructive shock with JVD",
      "Pleural effusion (transudate/exudate) — nontraumatic, usually not acute shock",
      "Hemopneumothorax — both air and blood; may have mixed findings",
      "Pulmonary contusion — infiltrate on CXR without pleural fluid layering",
    ],
    treatment: [
      "Large-bore chest tube (tube thoracostomy) for drainage and quantification of blood loss",
      "IV fluids and blood transfusion for hemorrhagic shock",
      "Surgical exploration (thoracotomy) if >1500 mL initial output or >200 mL/h ongoing",
      "Treat coagulopathy; analgesia and supportive care",
    ],
    boardsPearls: [
      "Trauma + dullness + ↓ breath sounds → hemothorax (vs hyperresonance in pneumothorax)",
      "Massive hemothorax thresholds: ~1500 mL initial or >200 mL/h → thoracotomy",
      "Retained clot risks empyema — early adequate drainage",
      "Do not confuse with tension pneumothorax — percussion and urgency differ",
    ],
    pediatrics:
      "Child abuse and rib fractures can cause hemothorax; smaller blood volume means shock develops faster. Same drainage principles with age-appropriate tube size.",
  },
  {
    id: "parapneumonic-effusion",
    name: "Parapneumonic Effusion",
    etymology: "Greek para = beside + pneumon = lung + Latin effundere = pour out",
    aliases: [
      "parapneumonic effusion",
      "parapneumonic effusions",
      "complicated parapneumonic effusion",
      "uncomplicated parapneumonic effusion",
    ],
    definition:
      "Pleural effusion that develops adjacent to pneumonia, ranging from a sterile reactive exudate to infected fluid that may progress to empyema.",
    pathophysiology:
      "Pneumonia → ↑ pleural capillary permeability and impaired lymphatic drainage → exudative pleural fluid; bacterial invasion of pleural space → ↓ glucose, ↓ pH, ↑ LDH, loculations; untreated complicated effusion → frank pus (empyema).",
    classicPresentation: [
      "Community-acquired pneumonia with persistent fever despite antibiotics",
      "Pleuritic chest pain and dyspnea out of proportion to infiltrate alone",
      "Dullness to percussion and ↓ breath sounds at base",
      "Failure to improve clinically after 48–72 h of appropriate antibiotics",
    ],
    keyFindings: [
      "Exudative pleural fluid by Light's criteria",
      "Blunted costophrenic angle or layering opacity on CXR; loculations on CT or ultrasound",
      "Complicated: pleural pH <7.2, glucose <60 mg/dL, LDH >1000 U/L, positive Gram stain/culture",
      "Septations or loculations on ultrasound — cannot drain fully with simple thoracentesis",
    ],
    keyLabs: [
      "Thoracentesis — protein, LDH, glucose, pH, cell count, Gram stain, culture",
      "Light's criteria confirm exudate",
      "Blood cultures and sputum culture for underlying pneumonia organism",
    ],
    associations: [
      "Community-acquired pneumonia (S. pneumoniae, S. aureus, Streptococcus pyogenes, anaerobes)",
      "Hospital-acquired or aspiration pneumonia",
      "Immunocompromise",
      "Rheumatologic effusions can mimic but lack infectious pleural fluid",
    ],
    complications: [
      "Progression to empyema",
      "Loculated or trapped lung",
      "Prolonged hospitalization and need for surgical decortication",
      "Sepsis from untreated pleural infection",
    ],
    distinguishFrom: [
      "Empyema — frank pus in pleural space; often requires chest tube ± fibrinolytics or VATS",
      "Transudative effusion (CHF, cirrhosis) — Light's criteria show transudate, no fever/infection",
      "Malignant effusion — cytology positive, not tied to acute pneumonia",
      "Pulmonary embolism with exudate — pleuritic pain but no pneumonia infiltrate",
    ],
    treatment: [
      "Treat underlying pneumonia with appropriate antibiotics",
      "Uncomplicated small effusion — antibiotics alone may suffice; monitor",
      "Complicated parapneumonic effusion (low pH/glucose, large, loculated, positive culture) — chest tube drainage",
      "Fibrinolytics (tPA/DNase) or VATS/decortication if loculated or refractory",
    ],
    boardsPearls: [
      "Pneumonia + effusion → thoracentesis; exudate with pH <7.2, glucose <60, or LDH >1000 = complicated → chest tube",
      "Do not wait for frank pus — complicated parapneumonic effusion is treated like empyema",
      "Light's criteria: any one met → exudate (protein ratio >0.5, LDH ratio >0.6, pleural LDH >⅔ ULN serum LDH)",
      "Loculations on ultrasound → chest tube often insufficient alone → consider intrapleural fibrinolytics or VATS",
    ],
    pediatrics:
      "Common with bacterial pneumonia in children; same pleural fluid thresholds apply. Smaller reserve — earlier chest tube if complicated effusion or empyema suspected; S. pneumoniae and S. aureus (including MRSA) are frequent organisms.",
  },
  {
    id: "abscess",
    name: "Abscess",
    etymology: "Latin abscedere = to go away; pus collected apart from tissue",
    aliases: [
      "abscess",
      "abscesses",
      "cutaneous abscess",
      "skin abscess",
      "pyogenic abscess",
      "localized abscess",
      "pus collection",
      "brain abscess",
      "liver abscess",
      "lung abscess",
      "peritonsillar abscess",
      "perirectal abscess",
      "renal abscess",
      "ring abscess",
    ],
    definition:
      "Localized collection of purulent exudate (pus) walled off by inflamed granulation tissue and a pyogenic membrane, usually from bacterial infection with neutrophil-mediated liquefactive necrosis.",
    pathophysiology:
      "Tissue inoculation or hematogenous seeding → acute suppurative inflammation → neutrophil influx and enzyme release → liquefactive necrosis forms pus cavity → fibroblasts and capillaries form pyogenic membrane walling off infection; impaired drainage perpetuates collection until source control.",
    classicPresentation: [
      "Painful, erythematous, warm, fluctuant mass with surrounding induration",
      "Fever and leukocytosis with systemic toxicity if deep or large",
      "Spontaneous drainage of thick purulent material (may relieve pain)",
      "Deep abscess — localized pain without obvious fluctuance (e.g., liver, kidney, brain)",
    ],
    keyFindings: [
      "Superficial: fluctuance, tenderness, erythema; may have central softening or pointing",
      "CT/MRI: rim-enhancing cavity with central low attenuation (necrotic pus)",
      "MRI DWI: restricted diffusion in abscess core (helps distinguish from necrotic tumor)",
      "Aspiration/culture: thick purulent fluid; Gram stain and aerobic/anaerobic culture",
    ],
    keyLabs: [
      "Leukocytosis with left shift",
      "Blood cultures if bacteremic or deep abscess",
      "Elevated CRP/ESR",
      "Culture of aspirated pus — S. aureus (including MRSA) most common superficially",
    ],
    associations: [
      "S. aureus — most common cause of cutaneous and many deep abscesses",
      "Mixed aerobes and anaerobes — perirectal, peritonsillar, intra-abdominal, aspiration lung abscess",
      "Dental infection → periapical or mandibular abscess",
      "Bacteremia seeding — infective endocarditis ring abscess, liver abscess (pyogenic or amebic)",
      "Diverticulitis, Crohn disease — intra-abdominal or perianal abscess",
      "IV drug use — skin and soft tissue abscesses; spinal epidural abscess risk",
    ],
    complications: [
      "Sepsis and septic shock",
      "Fistula formation (especially perianal/Crohn)",
      "Extension to adjacent spaces — orbital cellulitis from sinusitis, epidural abscess from osteomyelitis",
      "Rupture into body cavities — bronchopleural fistula, peritonitis",
      "Brain abscess — focal neurologic deficits, increased ICP, herniation",
    ],
    distinguishFrom: [
      "Cellulitis — diffuse erythema without walled-off pus cavity; no fluctuance",
      "Empyema — pus specifically in pleural space, not parenchymal or cutaneous cavity",
      "Granuloma — organized macrophage nodule (caseating or noncaseating), not neutrophil-rich pus",
      "Necrotizing fasciitis — spreads along fascial planes, severe pain out of proportion, surgical emergency",
      "Necrotic tumor — ring enhancement may mimic abscess; DWI, clinical context, and biopsy distinguish",
      "Hematoma — no infection unless secondarily infected",
    ],
    treatment: [
      "Superficial drainable abscess — incision and drainage (I&D) is definitive; antibiotics if surrounding cellulitis, systemic signs, immunocompromise, or failed I&D",
      "Deep abscess — percutaneous or surgical drainage plus culture-directed antibiotics",
      "Brain abscess — IV antibiotics + neurosurgical aspiration/resection; do not delay imaging",
      "Cover anaerobes when abscess is perirectal, peritonsillar, intra-abdominal, or aspiration-related",
      "MRSA coverage (e.g., TMP-SMX, clindamycin, doxycycline) for community cutaneous abscess when indicated",
    ],
    boardsPearls: [
      "Abscess = walled-off pus; I&D is primary treatment for superficial collections — antibiotics alone insufficient if undrained",
      "S. aureus (including MRSA) is the classic cutaneous organism; think anaerobes + aerobes for perirectal and aspiration sources",
      "Ring-enhancing lesion on CT — abscess vs tumor; restricted diffusion on MRI favors abscess",
      "vs cellulitis — fluctuance and loculated pus define abscess; ultrasound can guide I&D",
      "Infective endocarditis ring abscess — perivalvular destruction, conduction block; surgical emergency",
      "Hyper-IgE syndrome (Job) — recurrent staph abscesses, eczema, retained primary teeth",
    ],
    pediatrics:
      "Community MRSA causes common skin abscesses in children; I&D plus targeted antibiotics when cellulitis or systemic illness present. Peritonsillar abscess peaks in adolescents. Neonatal breast abscess (usually S. aureus) and pilonidal abscess in teens occur; avoid unnecessary broad antibiotics after adequate drainage of uncomplicated superficial abscess.",
  },
  {
    id: "cellulitis",
    name: "Cellulitis",
    etymology: "Latin cellula = small cell/compartment + Greek -itis = inflammation",
    aliases: [
      "cellulitis",
      "skin cellulitis",
      "soft tissue cellulitis",
      "nonpurulent cellulitis",
      "purulent cellulitis",
    ],
    definition:
      "Acute bacterial infection of the dermis and subcutaneous tissue causing spreading erythema, warmth, edema, and pain.",
    pathophysiology:
      "Break in skin barrier permits bacterial entry, most often beta-hemolytic streptococci in nonpurulent disease or S. aureus when purulence/abscess is present; neutrophil-rich inflammation spreads through dermis and subcutis.",
    classicPresentation: [
      "Tender, warm, erythematous, swollen skin with indistinct borders",
      "Often lower extremity after tinea pedis, trauma, ulcer, edema, or venous disease",
      "Fever, chills, lymphangitic streaking, or regional lymphadenitis in more severe infection",
    ],
    keyFindings: [
      "Nonpurulent cellulitis: diffuse erythema without fluctuance",
      "Purulent focus or abscess suggests S. aureus / MRSA coverage",
      "Pain out of proportion, crepitus, bullae, or toxicity suggests necrotizing fasciitis",
    ],
    keyLabs: [
      "Clinical diagnosis in uncomplicated cases",
      "Leukocytosis/CRP may be elevated",
      "Blood cultures if severe systemic toxicity, immunocompromise, or unusual exposure",
    ],
    associations: [
      "Group A Streptococcus and other beta-hemolytic streptococci",
      "Staphylococcus aureus, including MRSA when purulent",
      "Lymphedema, venous insufficiency, diabetes, skin ulcers",
      "Animal/human bites require broader organism coverage",
    ],
    complications: [
      "Abscess",
      "Lymphangitis and lymphadenitis",
      "Bacteremia/sepsis",
      "Necrotizing soft tissue infection if deeper spread",
    ],
    distinguishFrom: [
      "Erysipelas — more superficial, raised, sharply demarcated border",
      "Abscess — fluctuant pus collection requiring drainage",
      "Necrotizing fasciitis — severe pain, rapid progression, systemic toxicity; surgical emergency",
      "DVT or venous stasis dermatitis — leg erythema/edema without infectious source",
      "Lyme erythema migrans — expanding annular rash, often less painful",
    ],
    treatment: [
      "Nonpurulent outpatient: beta-lactam active against streptococci (e.g., cephalexin)",
      "Add MRSA coverage when purulent, abscess, prior MRSA, IVDU, or severe infection",
      "Elevation and treatment of portal of entry (tinea pedis, ulcers)",
      "Hospitalize for systemic toxicity, rapid progression, immunocompromise, or concern for necrotizing infection",
    ],
    boardsPearls: [
      "Nonpurulent cellulitis = streptococci; purulence/abscess = think S. aureus/MRSA",
      "Indistinct border favors cellulitis; sharply raised border favors erysipelas",
      "Always check for abscess because drainage changes management",
      "Pain out of proportion should trigger necrotizing fasciitis workup and surgery",
    ],
    pediatrics:
      "Children commonly get cellulitis after minor trauma, insect bites, or varicella lesions. Periorbital/preseptal cellulitis must be separated from orbital cellulitis, which has pain with eye movements, ophthalmoplegia, or proptosis and needs urgent imaging/IV therapy.",
  },
  {
    id: "osteomyelitis",
    name: "Osteomyelitis",
    etymology: "Greek osteon = bone + myelos = marrow + -itis = inflammation",
    aliases: [
      "osteomyelitis",
      "bone infection",
      "acute hematogenous osteomyelitis",
      "chronic osteomyelitis",
      "diabetic foot osteomyelitis",
    ],
    definition:
      "Infection of bone and marrow, usually bacterial, from hematogenous seeding, contiguous spread, trauma, surgery, or diabetic foot ulcer extension.",
    pathophysiology:
      "Bacteria seed metaphyseal bone or spread from adjacent tissue → neutrophilic inflammation in rigid bone → vascular compromise, necrotic sequestrum, and chronic biofilm if not cleared.",
    classicPresentation: [
      "Localized bone pain, tenderness, swelling, warmth, and fever",
      "Child refusing to bear weight or use a limb",
      "Diabetic foot ulcer with positive probe-to-bone test",
    ],
    keyFindings: [
      "S. aureus is most common overall",
      "Salmonella in sickle cell disease",
      "Pseudomonas after puncture wound through sneaker",
      "Vertebral osteomyelitis in adults may present with back pain and fever",
    ],
    keyLabs: [
      "Elevated ESR/CRP; leukocytosis may be absent",
      "Blood cultures can identify hematogenous infection",
      "MRI is most sensitive early imaging test",
      "Bone biopsy/culture is definitive when diagnosis/organism uncertain",
    ],
    associations: [
      "S. aureus bacteremia",
      "Sickle cell disease",
      "Diabetes mellitus / foot ulcer",
      "IV drug use",
      "Open fracture or orthopedic hardware",
    ],
    complications: [
      "Chronic osteomyelitis with sequestrum/involucrum",
      "Septic arthritis if infection crosses joint space",
      "Pathologic fracture",
      "Amyloidosis in chronic suppurative disease",
    ],
    distinguishFrom: [
      "Septic arthritis — painful joint with limited passive range of motion",
      "Cellulitis — soft tissue infection without bone involvement",
      "Ewing sarcoma — bone pain/fever can mimic infection; onion-skin periosteal reaction",
      "Charcot arthropathy — neuropathic destructive joint, often diabetic",
    ],
    treatment: [
      "Empiric antibiotics covering S. aureus, then culture-directed prolonged therapy",
      "Surgical drainage/debridement for abscess, necrotic bone, hardware infection, or chronic disease",
      "Control source such as diabetic ulcer or bacteremia",
    ],
    boardsPearls: [
      "Most common cause overall: S. aureus",
      "Sickle cell osteomyelitis: Salmonella is classic, but S. aureus still common",
      "Puncture wound through shoe: Pseudomonas",
      "MRI detects early osteomyelitis before plain x-ray changes",
      "Sequestrum = dead bone; involucrum = new bone around sequestrum",
    ],
    pediatrics:
      "Acute hematogenous osteomyelitis in children classically seeds metaphyses of long bones because blood flow is sluggish near growth plates; suspect with fever plus refusal to bear weight.",
  },
  {
    id: "lymphadenitis",
    name: "Lymphadenitis",
    etymology: "Latin lympha = clear water + Greek aden = gland + -itis = inflammation",
    aliases: [
      "lymphadenitis",
      "acute lymphadenitis",
      "suppurative lymphadenitis",
      "cervical lymphadenitis",
      "mesenteric adenitis",
      "inflamed lymph node",
    ],
    definition:
      "Inflammation of lymph nodes, usually infectious, producing tender enlarged nodes that may suppurate depending on organism and host response.",
    pathophysiology:
      "Antigen and microbes drain from infected tissue to regional lymph nodes → lymphoid hyperplasia and neutrophilic or granulomatous inflammation; pyogenic bacteria can form abscesses within nodes.",
    classicPresentation: [
      "Tender, enlarged regional lymph node near skin, pharyngeal, dental, or cat-scratch inoculation source",
      "Overlying warmth/erythema; fever possible",
      "Fluctuant node suggests suppuration",
    ],
    keyFindings: [
      "Acute unilateral cervical nodes in children: S. aureus or group A strep",
      "Cat-scratch disease: Bartonella henselae with regional lymphadenitis",
      "TB or atypical mycobacteria: chronic, firm, sometimes draining nodes",
    ],
    keyLabs: [
      "Clinical diagnosis if obvious local infection",
      "Ultrasound if abscess/suppuration suspected",
      "Culture/biopsy for persistent, atypical, supraclavicular, or systemic-risk nodes",
    ],
    associations: [
      "Staphylococcus aureus",
      "Streptococcus pyogenes",
      "Bartonella henselae",
      "Mycobacterium tuberculosis / nontuberculous mycobacteria",
      "EBV/CMV/HIV cause lymphadenopathy more than pyogenic lymphadenitis",
    ],
    complications: [
      "Suppurative node abscess",
      "Bacteremia",
      "Fistula/sinus tract with mycobacterial disease",
      "Missed malignancy if persistent hard/fixed nodes not evaluated",
    ],
    distinguishFrom: [
      "Reactive lymphadenopathy — enlarged nodes without local node infection",
      "Lymphoma — painless rubbery nodes, B symptoms, persistent growth",
      "Metastatic cancer — hard fixed nodes, supraclavicular risk",
      "Kawasaki disease — unilateral cervical node plus fever, conjunctivitis, mucositis, rash, extremity changes",
    ],
    treatment: [
      "Treat bacterial source; cover S. aureus and GAS for acute suppurative cervical disease",
      "Drain fluctuant suppurative nodes when needed",
      "Bartonella often self-limited; azithromycin can shorten node duration in selected cases",
      "Mycobacterial lymphadenitis requires organism-directed therapy and/or excision depending on cause",
    ],
    boardsPearls: [
      "Tender acute node = infection/inflammation; painless hard node = malignancy concern",
      "Cat scratch + regional lymphadenitis = Bartonella henselae",
      "Chronic cervical lymphadenitis with caseating granulomas = think TB/scrofula",
      "Suppurative unilateral cervical lymphadenitis in kids: S. aureus or GAS",
    ],
    pediatrics:
      "Acute unilateral cervical lymphadenitis is common after URI/pharyngitis and usually S. aureus/GAS. Nontuberculous mycobacterial cervical nodes in children can be chronic with violaceous skin and sinus drainage.",
  },
  {
    id: "empyema",
    name: "Empyema",
    etymology: "Greek empyema = suppuration; en = in + pyon = pus",
    aliases: [
      "empyema",
      "empyemas",
      "pleural empyema",
      "pyothorax",
      "purulent pleural effusion",
    ],
    definition:
      "Collection of pus in the pleural space, most often as a complication of pneumonia (parapneumonic) but also from trauma, surgery, or extension of subdiaphragmatic infection.",
    pathophysiology:
      "Bacterial invasion of pleural space → fibrinous pleuritis and loculations → impaired drainage and trapped lung; progressive infection → sepsis; fibrinopurulent stage may require decortication to re-expand lung.",
    classicPresentation: [
      "Pneumonia with high fever, toxicity, and pleuritic pain persisting despite antibiotics",
      "Marked leukocytosis and continued respiratory symptoms",
      "Dullness, ↓ breath sounds, and possible friction rub over effusion",
      "Frank pus on thoracentesis or chest tube output",
    ],
    keyFindings: [
      "Pleural fluid: pH <7.2, glucose <40–60 mg/dL, LDH >1000 U/L, WBC >50,000/µL with neutrophil predominance",
      "Gram stain or culture positive (may be anaerobic); thick purulent fluid",
      "Loculated collection on ultrasound or CT",
      "Split pleural sign on contrast CT — thickened enhancing pleural rind",
    ],
    keyLabs: [
      "Thoracentesis or chest tube fluid — Gram stain, aerobic/anaerobic culture, cell count, pH, glucose, LDH",
      "Blood cultures",
      "CXR/CT — effusion with possible air-fluid level if bronchopleural fistula",
    ],
    associations: [
      "Parapneumonic effusion (most common)",
      "Penetrating or blunt chest trauma with contaminated hemothorax",
      "Esophageal rupture, subphrenic abscess extension",
      "Post-thoracic surgery or thoracentesis",
      "Immunocompromise",
    ],
    complications: [
      "Sepsis and septic shock",
      "Bronchopleural fistula",
      "Trapped lung requiring decortication",
      "Chronic fibrothorax",
    ],
    distinguishFrom: [
      "Complicated parapneumonic effusion without frank pus — same management thresholds; empyema is the end stage",
      "Abscess — walled-off pus in tissue or organ parenchyma, not pleural space",
      "Hemothorax — bloody fluid, trauma history; can become secondary empyema if infected",
      "Malignant effusion — cytology positive, no purulence or infection",
      "Tuberculous pleuritis — lymphocyte-predominant exudate, ADA elevated, no acute purulence",
    ],
    treatment: [
      "Broad-spectrum antibiotics covering typical and anaerobic organisms (e.g., beta-lactam/β-lactamase inhibitor); tailor to culture",
      "Chest tube drainage (large-bore) — mandatory; image-guided if loculated",
      "Intrapleural fibrinolytics (tPA + DNase) for loculated collections",
      "VATS or open decortication if failed drainage, organized rind, or trapped lung",
    ],
    boardsPearls: [
      "Empyema = pus in pleural space; treat with antibiotics + chest tube — not thoracentesis alone",
      "Complicated parapneumonic criteria (pH <7.2, glucose <60, LDH >1000, loculations, positive Gram stain) → drain as empyema",
      "Anaerobes common with aspiration; cover with clindamycin or beta-lactam/β-lactamase inhibitor",
      "Retained hemothorax or inadequate drainage after trauma → secondary empyema risk",
    ],
    pediatrics:
      "Parapneumonic empyema is a leading cause of pleural infection in children; earlier aggressive drainage than adults often needed. Same fluid criteria; VATS decortication considered if chest tube and antibiotics fail.",
  },
  {
    id: "thromboangiitis-obliterans",
    name: "Thromboangiitis Obliterans (Buerger Disease)",
    etymology: "Greek thrombos = clot + angeion = vessel + -itis = inflammation + Latin obliterare = erase/close",
    aliases: [
      "thromboangiitis obliterans",
      "buerger disease",
      "buerger's disease",
      "buergers disease",
    ],
    definition:
      "Segmental inflammatory thrombosis of small- and medium-sized arteries and veins, strongly associated with tobacco use, causing distal extremity ischemia.",
    pathophysiology:
      "Inflammatory occlusive thrombosis of distal vessels without primary atherosclerosis; smoking is essential to pathogenesis — hypersensitivity or toxic injury to vessel wall triggers segmental inflammation and thrombosis.",
    classicPresentation: [
      "Young male smoker (<45) with distal upper/lower extremity ischemia",
      "Claudication of hands/feet, rest pain, digital ischemia",
      "Raynaud phenomenon, migratory superficial thrombophlebitis",
    ],
    keyFindings: [
      "Absent or diminished distal pulses with proximal pulses preserved",
      "Digital ulceration or gangrene",
      "Normal arteries on angiography above ankle/wrist with corkscrew collaterals distally",
    ],
    keyLabs: [
      'Angiography — segmental occlusions, corkscrew collaterals ("tree root" appearance)',
      "Hypercoagulable and autoimmune workup negative",
    ],
    associations: [
      "Heavy tobacco use (cigarettes, chewing tobacco)",
      "Young men of Asian/Middle Eastern/Eastern European descent",
    ],
    complications: [
      "Digital gangrene and amputation",
      "Progression with continued smoking",
    ],
    distinguishFrom: [
      "Atherosclerotic peripheral artery disease — older patients, proximal large-vessel disease",
      "Systemic vasculitis (GPA, polyarteritis nodosa) — systemic features, different angiographic pattern",
      "Raynaud disease alone — reversible vasospasm without tissue loss",
    ],
    treatment: [
      "Absolute smoking cessation — only intervention that alters disease course",
      "Wound care; avoid cold exposure; sympathectomy or prostaglandins in refractory cases",
    ],
    boardsPearls: [
      "Young smoker + distal ischemia + superficial thrombophlebitis → Buerger until proven otherwise",
      "Smoking cessation is mandatory — continued use leads to amputation",
      "Segmental inflammatory thrombosis of distal vessels, not atherosclerosis",
    ],
    pediatrics:
      "Extremely rare in children; any adolescent with tobacco exposure and digital ischemia warrants urgent vascular evaluation and smoking cessation counseling.",
  },
  {
    id: "gangrene",
    name: "Gangrene",
    etymology: "Greek gangraina = eating sore/putrefaction",
    aliases: [
      "gangrene",
      "dry gangrene",
      "wet gangrene",
      "gas gangrene",
      "clostridial myonecrosis",
      "clostridial gangrene",
    ],
    definition:
      "Localized tissue death (necrosis) from severe ischemia, infection, or both; classified as dry, wet, or gas gangrene by mechanism and clinical features.",
    pathophysiology:
      "Dry gangrene: chronic arterial insufficiency → coagulative necrosis without early infection. Wet gangrene: ischemic or traumatic necrosis with bacterial superinfection and liquefactive necrosis. Gas gangrene: Clostridium perfringens (and related species) produce α-toxin (lecithinase) → myonecrosis, gas production, and rapid systemic toxicity.",
    classicPresentation: [
      "Dry gangrene: cold, dry, black/discolored distal tissue; line of demarcation",
      "Wet gangrene: swollen, foul-smelling, hemorrhagic necrosis with infection",
      "Gas gangrene: severe pain, crepitus, bronze skin discoloration, systemic toxicity after trauma or surgery",
    ],
    keyFindings: [
      "Black or dusky necrotic tissue",
      "Crepitus on palpation (gas gangrene)",
      "Foul odor and rapid spread (wet/gas gangrene)",
      "Systemic signs: fever, tachycardia, hypotension",
    ],
    keyLabs: [
      "Gram stain/culture of wound — gram-positive rods (Clostridium)",
      "X-ray or CT may show gas in soft tissues",
      "↑ CK, metabolic acidosis, hemolysis in severe clostridial infection",
    ],
    associations: [
      "Peripheral artery disease, diabetes, thromboangiitis obliterans (dry gangrene)",
      "Trauma, crush injury, contaminated wounds (gas gangrene)",
      "Immunocompromise and necrotizing soft tissue infections (wet gangrene)",
    ],
    complications: [
      "Sepsis and septic shock",
      "Amputation",
      "Death in fulminant gas gangrene or necrotizing fasciitis",
      "Multiorgan failure",
    ],
    distinguishFrom: [
      "Necrotizing fasciitis — pain out of proportion, spread along fascial planes; may coexist",
      "Cellulitis — erythema without frank necrosis early on",
      "Ischemic limb without infection — dry appearance, no systemic toxicity",
      "Fournier gangrene — necrotizing infection of perineum/scrotum (subtype of wet gangrene)",
    ],
    treatment: [
      "Dry gangrene: treat underlying ischemia; amputation at line of demarcation if needed",
      "Wet/gas gangrene: urgent surgical debridement/amputation",
      "Penicillin G + clindamycin for clostridial myonecrosis; add hyperbaric oxygen when available",
      "Broad-spectrum antibiotics and source control for necrotizing soft tissue infection",
    ],
    boardsPearls: [
      "Gas gangrene: C. perfringens α-toxin (lecithinase) → myonecrosis + gas + crepitus",
      "Trauma + severe pain + crepitus → gas gangrene until proven otherwise",
      "Treatment = debridement + penicillin; clindamycin inhibits toxin production",
      "Dry vs wet: dry = ischemic coagulative necrosis; wet = superinfected liquefactive necrosis",
    ],
    pediatrics:
      "Gas gangrene and necrotizing fasciitis are rare but catastrophic in children — varicella, immunosuppression, and trauma are risk factors; urgent surgery and antibiotics.",
  },
  {
    id: "heart-failure",
    name: "Congestive Heart Failure",
    etymology: "Latin congerere = heap together + heart = pump + failure = inability to perform",
    aliases: [
      "congestive heart failure",
      "heart failure",
      "chf",
      "hfref",
      "hfpef",
    ],
    definition:
      "Inability of the heart to pump sufficient blood to meet metabolic demands, or to do so only at elevated filling pressures.",
    pathophysiology:
      "HFrEF: impaired contractility → ↓ CO → RAAS and sympathetic activation → salt/water retention → congestion. HFpEF: stiff ventricle → impaired filling despite preserved EF.",
    classicPresentation: [
      "Dyspnea, orthopnea, paroxysmal nocturnal dyspnea",
      "Peripheral edema, elevated JVP, hepatomegaly",
      "Fatigue, reduced exercise tolerance",
    ],
    keyFindings: [
      "S3 gallop (volume overload)",
      "Crackles, peripheral edema, JVD",
      "HFrEF: dilated cardiomegaly on CXR",
    ],
    keyLabs: [
      "↑ BNP/NT-proBNP",
      "↓ EF on echo (HFrEF); preserved EF with diastolic dysfunction (HFpEF)",
    ],
    complications: [
      "Cardiorenal syndrome",
      "Hepatic congestion",
      "Arrhythmias (especially AF)",
      "Cardiac cachexia",
    ],
    distinguishFrom: [
      "Cirrhosis — ascites without JVD",
      "Nephrotic syndrome — edema without pulmonary congestion",
      "COPD — wheeze, hyperinflation, no S3",
    ],
    treatment: [
      "Loop diuretics for volume overload; ACEi/ARB, β-blocker, spironolactone, SGLT2i for HFrEF mortality benefit",
      "Address underlying cause; restrict sodium and fluids when volume overloaded",
    ],
    boardsPearls: [
      "Left-sided failure: pulmonary congestion; right-sided: peripheral edema, JVD",
      "HFrEF mortality benefit: ACEi/ARB, β-blockers, spironolactone, SGLT2 inhibitors",
      "Loop diuretics relieve congestion but do not ↓ mortality",
    ],
    pediatrics:
      "Dilated cardiomyopathy is the most common cause of heart failure in children; consider inborn errors of metabolism and myocarditis.",
  },
  {
    id: "shock",
    name: "Shock",
    etymology: "French choc = violent blow; circulatory collapse",
    aliases: [
      "shock",
      "circulatory shock",
      "hypovolemic shock",
      "hemorrhagic shock",
      "cardiogenic shock",
      "distributive shock",
      "obstructive shock",
      "septic shock",
      "neurogenic shock",
    ],
    definition:
      "Life-threatening state of inadequate tissue perfusion and oxygen delivery despite compensatory mechanisms; classified by primary hemodynamic mechanism.",
    pathophysiology:
      "↓ effective perfusion → tissue hypoxia → anaerobic metabolism and lactic acidosis. Four broad types: hypovolemic (↓ preload), cardiogenic (pump failure), distributive (↓ SVR with maldistribution), obstructive (mechanical impediment to filling or ejection).",
    classicPresentation: [
      "Hypotension, tachycardia, cool clammy extremities (except early distributive shock)",
      "Altered mental status, oliguria, metabolic acidosis",
      "Tachypnea, weak pulses, delayed capillary refill",
    ],
    keyFindings: [
      "Hypovolemic: flat neck veins, dry mucous membranes, ↓ PCWP/CVP",
      "Cardiogenic: pulmonary edema, ↑ JVP, cool extremities, ↓ CO, ↑ PCWP",
      "Distributive (septic early): warm extremities, bounding pulses, ↓ SVR; late septic shock resembles cardiogenic",
      "Obstructive: JVD with hypotension (tamponade, PE, tension pneumothorax); muffled heart sounds (tamponade), unilateral absent breath sounds (tension PTX)",
    ],
    keyLabs: [
      "↑ Lactate — tissue hypoperfusion",
      "Metabolic acidosis",
      "↑ BUN:Cr in hypovolemic (prerenal) states",
      "Blood cultures, procalcitonin in suspected septic shock",
    ],
    associations: [
      "Hypovolemic: hemorrhage, burns, vomiting/diarrhea, diuretics",
      "Cardiogenic: large MI, decompensated HF, severe valvular disease",
      "Distributive: sepsis, anaphylaxis, spinal cord injury (neurogenic)",
      "Obstructive: cardiac tamponade, massive PE, tension pneumothorax",
    ],
    complications: [
      "Multiorgan dysfunction syndrome (MODS)",
      "Acute kidney injury",
      "Disseminated intravascular coagulation (especially septic shock)",
      "Death without rapid resuscitation",
    ],
    distinguishFrom: [
      "Syncope — transient hypotension with rapid spontaneous recovery",
      "Orthostatic hypotension — positional, not global hypoperfusion",
      "Neurogenic shock — distributive with bradycardia and warm skin (vs spinal shock = flaccid paralysis/areflexia)",
    ],
    treatment: [
      "ABC, IV access, supplemental O₂; treat underlying cause",
      "Hypovolemic/obstructive: volume resuscitation (crystalloid/blood); relieve obstruction (pericardiocentesis, chest tube, thrombolysis/anticoagulation for PE)",
      "Cardiogenic: cautious fluids, inotropes, vasopressors, urgent revascularization or mechanical support",
      "Septic: early broad-spectrum antibiotics, source control, fluids, norepinephrine first-line vasopressor",
      "Anaphylactic: epinephrine IM, fluids, antihistamines, glucocorticoids",
    ],
    boardsPearls: [
      "Shock types: hypovolemic, cardiogenic, distributive, obstructive — know hemodynamic profiles (CO, SVR, PCWP/CVP)",
      "Hypovolemic: ↓ CO, ↑ SVR, ↓ PCWP; cardiogenic: ↓ CO, ↑ SVR, ↑ PCWP",
      "Early septic shock: ↑ or normal CO, ↓ SVR; late septic: ↓ CO",
      "Obstructive shock with JVD: tamponade, PE, tension pneumothorax — not all shock is hypovolemic",
      "Neurogenic shock (high spinal cord injury): hypotension + bradycardia from loss of sympathetic tone",
    ],
    pediatrics:
      "Infants compensate with tachycardia until late decompensation — hypotension is a late and ominous sign. Septic shock in neonates/children: fluids first, then epinephrine or norepinephrine per PALS; adrenal crisis and congenital heart disease are important pediatric differentials.",
  },
  {
    id: "anaphylaxis",
    name: "Anaphylaxis",
    etymology: "Greek ana = against/back + phylaxis = protection",
    aliases: [
      "anaphylaxis",
      "anaphylactic reaction",
      "anaphylactic shock",
      "systemic anaphylaxis",
      "severe allergic reaction",
      "ige-mediated anaphylaxis",
    ],
    definition:
      "Acute, life-threatening systemic hypersensitivity reaction with airway, breathing, or circulatory compromise, usually from widespread mast cell and basophil mediator release.",
    pathophysiology:
      "Most cases are type I hypersensitivity: prior sensitization → allergen re-exposure cross-links IgE on FcεRI receptors of mast cells/basophils → release of histamine, tryptase, leukotrienes, prostaglandins, and platelet-activating factor → vasodilation, capillary leak, bronchoconstriction, and mucous secretion. Non-IgE direct mast cell activation can mimic this.",
    classicPresentation: [
      "Minutes to hours after food, drug, insect venom, latex, or contrast exposure",
      "Urticaria, pruritus, flushing, angioedema",
      "Wheeze, stridor, throat tightness, dyspnea",
      "Hypotension, syncope, tachycardia, GI cramping, vomiting, diarrhea",
    ],
    keyFindings: [
      "Skin/mucosal involvement plus respiratory compromise or hypotension",
      "Bronchospasm and upper-airway edema",
      "Distributive shock: low SVR from vasodilation and capillary leak",
      "Biphasic recurrence can occur after initial improvement",
    ],
    keyLabs: [
      "Serum tryptase elevated within ~1–2 h supports mast cell activation; normal level does not exclude anaphylaxis",
      "Specific IgE or skin testing later can identify culprit allergen; do not delay treatment",
    ],
    associations: [
      "Foods: peanut/tree nuts, shellfish, milk, egg",
      "Medications: β-lactams, NSAIDs, chemotherapy biologics",
      "Hymenoptera venom, latex, exercise-associated food allergy",
      "Mastocytosis increases risk of severe venom anaphylaxis",
    ],
    complications: [
      "Airway obstruction from laryngeal edema",
      "Refractory distributive shock",
      "Biphasic anaphylaxis",
      "Death without prompt epinephrine",
    ],
    distinguishFrom: [
      "Vasovagal syncope — bradycardia, pallor, no urticaria/wheeze",
      "Panic attack — dyspnea/paresthesias without hypotension, wheeze, or hives",
      "Hereditary angioedema — bradykinin-mediated swelling without urticaria; poor response to epinephrine/antihistamines",
      "Serum sickness — type III hypersensitivity days to weeks later with fever, rash, arthralgia, low complement",
      "Vancomycin flushing reaction — direct histamine release from rapid infusion, not IgE-mediated",
    ],
    treatment: [
      "Immediate IM epinephrine in anterolateral thigh; repeat every 5–15 min if needed",
      "Airway support, high-flow O₂, supine positioning with legs elevated, aggressive isotonic IV fluids",
      "Adjuncts: H1 antihistamine, H2 blocker, bronchodilator for wheeze, glucocorticoid for prolonged/biphasic risk",
      "Glucagon for refractory anaphylaxis in patients taking β-blockers",
      "Observe after stabilization; prescribe epinephrine auto-injector and allergen avoidance plan",
    ],
    boardsPearls: [
      "Epinephrine is first-line; antihistamines are adjuncts and do not treat airway edema or shock",
      "α₁ effect reverses vasodilation/edema; β₂ bronchodilates and reduces mediator release; β₁ supports cardiac output",
      "Tryptase = mast cell granule marker; draw acutely and compare with baseline if needed",
      "Type I hypersensitivity: IL-4 class switching to IgE, mast cell sensitization, then re-exposure degranulation",
      "β-blocker use can make anaphylaxis refractory to epinephrine; glucagon bypasses β-receptor blockade",
    ],
    pediatrics:
      "Food allergy is the leading pediatric trigger. Children may present with repetitive vomiting, cough/wheeze, or behavior change before hypotension; use weight-based IM epinephrine (0.01 mg/kg) promptly.",
  },
  {
    id: "hypertrophic-cardiomyopathy",
    name: "Hypertrophic Cardiomyopathy",
    etymology: "Greek hyper = excess + trophe = nourishment/growth + kardia = heart + mys = muscle + -pathy = disease",
    aliases: [
      "hypertrophic cardiomyopathy",
      "hcm",
      "hypertrophic obstructive cardiomyopathy",
      "hocm",
    ],
    definition:
      "Genetic cardiomyopathy with LV hypertrophy (often asymmetric septal) and diastolic dysfunction, with or without dynamic outflow obstruction.",
    pathophysiology:
      "Autosomal dominant sarcomere mutations (MYH7, MYBPC3) → disorganized myocytes → hypertrophy → impaired filling and dynamic LVOT obstruction during systole.",
    classicPresentation: [
      "Young athlete with syncope or sudden cardiac death",
      "Exertional dyspnea, chest pain",
      "Family history of cardiomyopathy or SCD",
    ],
    keyFindings: [
      "Harsh systolic murmur at LLSB, ↑ with Valsalva/standing, ↓ with squatting",
      "Sustained PMI, bifid carotid pulse",
      "Echo: septal hypertrophy ≥15 mm, SAM of mitral valve",
    ],
    associations: [
      "Autosomal dominant inheritance",
      "Sudden cardiac death in young athletes",
    ],
    complications: [
      "Sudden cardiac death",
      "Atrial fibrillation",
      "Heart failure",
      "Infective endocarditis (with obstruction)",
    ],
    distinguishFrom: [
      "Aortic stenosis — murmur ↓ with Valsalva, radiates to carotids",
      "Athlete's heart — physiologic hypertrophy, normal diastolic function",
      "Hypertensive heart disease — concentric hypertrophy",
    ],
    treatment: [
      "β-blockers or non-DHP CCBs for rate control and symptom relief",
      "ICD for high-risk patients; avoid strenuous exercise",
    ],
    boardsPearls: [
      "#1 cause of sudden cardiac death in young athletes",
      "Murmur ↑ with decreased preload (Valsalva, standing)",
      "Avoid vigorous exercise; ICD for high-risk patients",
    ],
    pediatrics:
      "May present in adolescence during sports screening; family screening recommended for first-degree relatives.",
  },
  {
    id: "dilated-cardiomyopathy",
    name: "Dilated Cardiomyopathy",
    etymology: "Latin dilatare = widen + Greek kardia = heart + mys = muscle + -pathy = disease",
    aliases: ["dilated cardiomyopathy", "dcm"],
    definition:
      "Cardiomyopathy with ventricular dilation and impaired systolic function (↓ EF), leading to heart failure.",
    pathophysiology:
      "Myocyte loss or dysfunction → ventricular dilation → ↓ contractility → neurohormonal activation → progressive remodeling and heart failure.",
    classicPresentation: [
      "Progressive dyspnea, fatigue, edema",
      "Alcohol use, prior viral illness, or chemotherapy history",
      "Familial cardiomyopathy",
    ],
    keyFindings: [
      "S3 gallop, displaced PMI",
      "Dilated heart on CXR/echo",
      "Functional mitral/tricuspid regurgitation",
    ],
    keyLabs: ["↓ EF on echocardiography", "↑ BNP"],
    associations: [
      "Alcohol abuse",
      "Doxorubicin toxicity",
      "Coxsackie B viral myocarditis",
      "Peripartum cardiomyopathy",
      "Beriberi (thiamine deficiency)",
    ],
    distinguishFrom: [
      "Ischemic cardiomyopathy — regional wall motion abnormalities, CAD history",
      "Restrictive cardiomyopathy — preserved EF, diastolic dysfunction",
    ],
    treatment: [
      "Standard HFrEF therapy: ACEi/ARB, β-blocker, diuretics",
      "Treat underlying cause (alcohol cessation, chelation for hemochromatosis)",
    ],
    boardsPearls: [
      "Most common cardiomyopathy worldwide",
      "Coxsackie B → viral myocarditis → dilated cardiomyopathy",
      "Standard HFrEF therapy applies",
    ],
    pediatrics:
      "Most common cardiomyopathy in children; consider metabolic and genetic causes.",
  },
  {
    id: "restrictive-cardiomyopathy",
    name: "Restrictive Cardiomyopathy",
    etymology: "Latin restringere = bind tight + Greek kardia = heart + mys = muscle + -pathy = disease",
    aliases: ["restrictive cardiomyopathy", "rcm"],
    definition:
      "Cardiomyopathy with impaired ventricular filling due to stiff, noncompliant myocardium, with preserved or near-normal systolic function.",
    pathophysiology:
      "Infiltration or fibrosis stiffens myocardium → impaired diastolic filling → elevated filling pressures → congestion with relatively preserved EF.",
    classicPresentation: [
      "Heart failure symptoms with relatively preserved EF",
      "Bilateral lower extremity edema, ascites",
      "History of amyloidosis, hemochromatosis, or radiation",
    ],
    keyFindings: [
      "Elevated JVP with rapid Y descent (Kussmaul sign in constrictive disease)",
      "S4 gallop",
      "Echo: biatrial enlargement, preserved EF, impaired relaxation",
    ],
    associations: [
      "Amyloidosis",
      "Sarcoidosis",
      "Hemochromatosis",
      "Endomyocardial fibrosis",
      "Scleroderma",
    ],
    distinguishFrom: [
      "Constrictive pericarditis — pericardial knock, equalization of pressures",
      "Dilated cardiomyopathy — ↓ EF, dilation",
    ],
    treatment: [
      "Diuretics for congestion; treat underlying infiltrative disease if identified",
      "Heart transplant for end-stage disease",
    ],
    boardsPearls: [
      "Least common cardiomyopathy; think infiltrative disease",
      "Amyloid: low voltage on ECG despite thick walls on echo",
      "Poor prognosis; heart transplant often required",
    ],
  },
  {
    id: "atherosclerosis",
    name: "Atherosclerosis",
    etymology: "Greek athere = gruel + skleros = hard; lipid gruel hardening arteries",
    aliases: [
      "atherosclerosis",
      "coronary artery disease",
      "cad",
      "atheroma",
      "atherosclerotic plaque",
      "coronary atherosclerosis",
      "arterial plaque",
      "ischemic heart disease",
      "coronary heart disease",
      "chd",
    ],
    definition:
      "Chronic inflammatory disease of arterial intima with lipid accumulation, plaque formation, and progressive luminal narrowing.",
    pathophysiology:
      "Endothelial dysfunction → LDL oxidation → macrophage foam cells → fatty streak → fibrous cap plaque; plaque rupture triggers thrombosis and acute ischemic events.",
    classicPresentation: [
      "Exertional angina in stable disease",
      "Acute coronary syndrome with plaque rupture",
      "Claudication (peripheral arteries)",
    ],
    keyFindings: [
      "Carotid bruits",
      "Diminished peripheral pulses",
      "Xanthomas (familial hypercholesterolemia)",
    ],
    keyLabs: ["↑ LDL cholesterol", "↑ hs-CRP (inflammation marker)"],
    associations: [
      "Hypertension",
      "Diabetes mellitus",
      "Smoking",
      "Familial hypercholesterolemia",
    ],
    complications: [
      "Myocardial infarction",
      "Stroke",
      "Peripheral artery disease",
      "Aortic aneurysm",
    ],
    distinguishFrom: [
      "Vasospastic angina — normal coronaries, ST elevation at rest",
      "Aortic stenosis — exertional angina without CAD",
    ],
    treatment: [
      "Statins, antiplatelet therapy, risk factor modification",
      "Revascularization (PCI/CABG) for symptomatic or high-risk coronary disease",
    ],
    boardsPearls: [
      "Major risk factors: hyperlipidemia, HTN, DM, smoking",
      "Foam cells = lipid-laden macrophages in intima",
      "Statins stabilize plaques and ↓ cardiovascular events",
      "Unstable plaque: thin fibrous cap, ↑ macrophages, risk of rupture → thrombosis → MI/stroke",
      "Path sequence: endothelial injury → LDL oxidation → foam cells → fatty streak → fibrous plaque",
    ],
    pediatrics:
      "Homozygous familial hypercholesterolemia presents in childhood with tendon xanthomas and premature CAD; heterozygous FH also warrants early statin therapy.",
  },
  {
    id: "peripheral-artery-disease",
    name: "Peripheral Artery Disease",
    etymology: "Greek peri = around + pherein = carry + arteria = artery + disease = disordered function",
    aliases: [
      "peripheral artery disease",
      "peripheral arterial disease",
      "pad",
      "peripheral vascular disease",
      "pvd",
      "intermittent claudication",
      "lower extremity arterial disease",
      "limb ischemia",
    ],
    definition:
      "Atherosclerotic narrowing or occlusion of noncoronary, noncerebral arteries — most commonly lower extremity arteries — causing chronic limb ischemia.",
    pathophysiology:
      "Atherosclerotic plaque in iliac, femoral, or popliteal arteries → progressive luminal stenosis → exercise-induced mismatch between oxygen demand and supply in calf muscles → ischemic pain (claudication); advanced disease causes rest pain and tissue loss.",
    classicPresentation: [
      "Intermittent claudication — cramping calf pain with walking, relieved by rest (<10 min)",
      "Older patient with smoking, diabetes, HTN, or hyperlipidemia",
      "Rest pain, nonhealing ulcers, or gangrene in critical limb ischemia",
      "Diminished femoral or pedal pulses with bruits",
    ],
    keyFindings: [
      "↓ or absent dorsalis pedis / posterior tibial pulses",
      "Femoral bruit",
      "Cool, pale extremity; delayed capillary refill",
      "Hair loss and shiny skin on affected limb",
      "ABI <0.9 diagnostic; ABI >1.3 suggests noncompressible calcified vessels (common in diabetes)",
    ],
    keyLabs: [
      "Ankle-brachial index (ABI) <0.9",
      "Duplex ultrasound — stenosis with ↑ peak systolic velocity",
      "CT/MR angiography or catheter angiography for revascularization planning",
    ],
    associations: [
      "Atherosclerosis — shares risk factors with CAD and cerebrovascular disease",
      "Diabetes mellitus (often medial calcification, distal disease)",
      "Smoking",
      "Hypertension and hyperlipidemia",
    ],
    complications: [
      "Critical limb ischemia — rest pain, ulcers, gangrene",
      "Amputation",
      "Cardiovascular events (MI, stroke) — PAD is a marker of systemic atherosclerosis",
    ],
    distinguishFrom: [
      "Thromboangiitis obliterans (Buerger) — young smoker, distal hand/foot ischemia, segmental inflammatory thrombosis",
      "Spinal stenosis (neurogenic claudication) — leg pain with walking but pulses normal; relief with sitting/leaning forward, not just standing",
      "Venous claudication — post-thrombotic syndrome, edema, normal pulses",
      "Acute limb ischemia — sudden onset, 6 Ps (pain, pallor, pulselessness, paresthesias, paralysis, poikilothermia)",
    ],
    treatment: [
      "Risk factor modification: smoking cessation, statin, antiplatelet therapy (aspirin or clopidogrel)",
      "Supervised exercise therapy for claudication",
      "Cilostazol (PDE-3 inhibitor) for symptomatic claudication — contraindicated in HF",
      "Revascularization (endovascular or bypass) for lifestyle-limiting claudication or critical limb ischemia",
    ],
    boardsPearls: [
      "ABI <0.9 = PAD; ABI 0.4–0.5 severe; ABI >1.3 noncompressible arteries (diabetes)",
      "Claudication = reproducible exertional pain relieved by rest; neurogenic claudication pulses stay normal",
      "PAD implies systemic atherosclerosis — aggressive CV risk reduction (statin + antiplatelet)",
      "Cilostazol improves walking distance but contraindicated in heart failure (PDE-3 inhibitor)",
      "Acute limb ischemia is a vascular emergency — heparin and urgent revascularization",
    ],
    pediatrics:
      "Atherosclerotic PAD is rare in children; limb ischemia in pediatrics suggests embolism, vasculitis, coarctation, or thromboangiitis obliterans in adolescents who smoke.",
  },
  {
    id: "hyper-ige-syndrome",
    name: "Hyper-IgE Syndrome",
    etymology: "Greek hyper = excess + IgE = immunoglobulin E + syndrome = running together of findings",
    aliases: [
      "hyper-ige syndrome",
      "hyper ige syndrome",
      "hyper-ige",
      "hyper ige",
      "hies",
      "job syndrome",
      "job's syndrome",
      "jobs syndrome",
      "buckley syndrome",
      "hyperimmunoglobulin e syndrome",
      "hyperimmunoglobulinemia e syndrome",
      "stat3 deficiency",
      "stat3 hyper-ige syndrome",
    ],
    definition:
      "Primary immunodeficiency characterized by markedly elevated serum IgE, eczematous dermatitis, and recurrent staphylococcal (and often fungal) infections; autosomal dominant STAT3 mutations cause the classic Job syndrome phenotype.",
    pathophysiology:
      "STAT3 loss-of-function (AD Job syndrome) → impaired Th17 differentiation and defective IL-6/IL-10 signaling → ↓ neutrophil recruitment to sites of infection (impaired chemotaxis) → recurrent 'cold' S. aureus abscesses with minimal inflammation; also defective class switching regulation and dysregulated IgE production. Autosomal recessive forms (DOCK8, TYK2, PGM3) have overlapping but distinct immune defects.",
    classicPresentation: [
      "Severe eczematous dermatitis from infancy",
      "Recurrent 'cold' staphylococcal abscesses — little erythema or warmth despite pus",
      "Recurrent pneumonia with pneumatoceles and bronchiectasis",
      "Coarse facies: prominent forehead, deep-set eyes, broad nasal bridge, prognathism",
      "Retained primary teeth — two rows of teeth simultaneously",
    ],
    keyFindings: [
      "Markedly elevated serum IgE (often >2000 IU/mL; diagnostic threshold on boards)",
      "Eosinophilia (>90% of patients)",
      "Cold staphylococcal abscesses without typical inflammatory response",
      "Characteristic facies and dental abnormalities (STAT3 form)",
      "CT chest — pneumatoceles, bronchiectasis, parenchymal scarring",
    ],
    keyLabs: [
      "Serum total IgE markedly elevated (>2000 IU/mL strongly suggestive)",
      "Eosinophilia",
      "STAT3 genetic testing confirms autosomal dominant Job syndrome",
      "DOCK8, TYK2, PGM3 testing for recessive forms when indicated",
      "Note: IgE may be low in infants <6 months despite disease",
    ],
    associations: [
      "STAT3 mutation — autosomal dominant Job syndrome (most tested on Step 1)",
      "DOCK8 deficiency — autosomal recessive; severe viral infections, anaphylaxis, malignancy risk",
      "Recurrent S. aureus skin and lung infections",
      "Candidal infections",
      "Scoliosis and pathologic fractures (STAT3 form)",
      "Named after biblical Job — recurrent boils/abscesses",
    ],
    complications: [
      "Bronchiectasis and chronic lung disease from recurrent pneumonia",
      "Pneumatocele rupture and empyema",
      "Osteopenia and fractures",
      "Malignancy (especially DOCK8 deficiency)",
    ],
    distinguishFrom: [
      "Atopic dermatitis — lower IgE, no cold abscesses, no retained primary teeth or coarse facies",
      "Hyper-IgM syndrome — ↑ IgM with ↓ IgG/IgA/IgE; CD40L or AID defect",
      "Chronic granulomatous disease — catalase-positive organisms; abnormal DHR test",
      "SCID — severe T- and B-cell deficiency; lymphopenia, failure to thrive",
      "Wiskott-Aldrich syndrome — thrombocytopenia, eczema, ↑ IgE; small platelets",
      "Netherton syndrome (SPINK5) — bamboo hair, ichthyosis linearis circumflexa",
    ],
    treatment: [
      "Long-term antibiotic prophylaxis against S. aureus (e.g., trimethoprim-sulfamethoxazole)",
      "Aggressive skin care and eczema management",
      "Treat acute infections promptly; culture-directed antibiotics",
      "IVIG considered for severe eczema in some patients",
      "Hematopoietic stem cell transplant for severe DOCK8 deficiency",
    ],
    boardsPearls: [
      "FATED mnemonic (STAT3 Job syndrome): Facies (coarse/leonine), Abscesses (cold staph), Teeth (retained primary), Elevated IgE, Dermatologic problems (eczema)",
      "↑ IgE + recurrent cold staph abscesses + eczema + retained primary teeth → Job syndrome (STAT3)",
      "'Cold' abscesses — impaired neutrophil chemotaxis; minimal erythema despite pus",
      "Recurrent pneumonia → pneumatoceles and bronchiectasis on imaging",
      "STAT3 defect → ↓ Th17 cells → impaired antifungal and antibacterial mucosal defense",
      "IgE >2000 IU/mL is hallmark; eosinophilia nearly universal",
      "vs Hyper-IgM — ↑ IgM, ↓ switched immunoglobulins; not isolated IgE elevation",
    ],
    pediatrics:
      "Often presents in infancy with eczema and recurrent staph infections. IgE may be nondetectable before 6 months despite disease — do not rule out HIES on a single low infant IgE. Retained primary teeth and coarse facies become apparent in childhood. Prophylactic antibiotics reduce infection burden; family genetic counseling for STAT3 testing.",
  },
  {
    id: "selective-iga-deficiency",
    name: "Selective IgA Deficiency",
    etymology: "Latin seligere = choose + IgA = immunoglobulin A + de- = away + facere = make",
    aliases: [
      "selective iga deficiency",
      "selective ig a deficiency",
      "selective immunoglobulin a deficiency",
      "siga deficiency",
      "sigad",
      "iga deficiency",
      "immunoglobulin a deficiency",
      "isolated iga deficiency",
    ],
    definition:
      "Most common primary immunodeficiency — isolated undetectable or markedly reduced serum IgA (<7 mg/dL in adults) with normal IgG and IgM and otherwise intact immune function; many patients are asymptomatic.",
    pathophysiology:
      "Failure of B-cell class switching to IgA (defective IgA CSR in mucosal and systemic B cells) → ↓ secretory IgA at mucosal surfaces (respiratory, GI, genitourinary) → impaired mucosal barrier defense. Associated with HLA haplotypes; may coexist with common variable immunodeficiency (CVID) spectrum. Anti-IgA antibodies may develop in sensitized patients.",
    classicPresentation: [
      "Often asymptomatic — discovered incidentally on immunoglobulin panel",
      "Recurrent sinopulmonary infections (otitis, sinusitis, bronchitis, pneumonia)",
      "Allergic diseases — asthma, atopic dermatitis, food allergy",
      "Autoimmune conditions — celiac disease, SLE, rheumatoid arthritis, IBD",
      "Anaphylaxis during blood transfusion or IVIG (anti-IgA IgG antibodies)",
    ],
    keyFindings: [
      "Serum IgA undetectable or <7 mg/dL with normal IgG and IgM",
      "Normal T-cell and neutrophil function",
      "May have ↓ IgG subclasses (especially IgG2) in subset of patients",
    ],
    keyLabs: [
      "Quantitative serum immunoglobulins — ↓ IgA with normal IgG and IgM",
      "Diagnosis confirmed after age 4 (transient physiologic IgA deficiency common in infancy)",
      "If screening for celiac: check total IgA first — tTG IgA false negative if IgA deficient; use tTG IgG or deamidated gliadin IgG instead",
      "Anti-IgA IgG antibodies before transfusion/IVIG in sensitized patients",
    ],
    associations: [
      "Celiac disease — ↑ prevalence; screen with IgG-based serology if IgA deficient",
      "Allergic rhinitis, asthma, atopic dermatitis",
      "Autoimmune diseases — SLE, RA, IBD, autoimmune thyroiditis",
      "Common variable immunodeficiency (CVID) — some patients progress from selective IgA deficiency",
      "Giardia lamblia chronic infection",
    ],
    complications: [
      "Recurrent mucosal infections",
      "Anaphylaxis from blood products containing IgA",
      "Progression to CVID (minority)",
      "Autoimmune disease",
    ],
    distinguishFrom: [
      "CVID — ↓ IgG and/or IgM in addition to ↓ IgA; more severe infections",
      "Hyper-IgM syndrome — ↓ IgA, IgG, IgE with ↑ IgM; CD40L or AID defect",
      "X-linked agammaglobulinemia — ↓ all immunoglobulin isotypes; absent B cells",
      "Transient IgA deficiency of infancy — resolves by age 4",
      "Protein-losing enteropathy — ↓ all immunoglobulins from loss, not isolated IgA defect",
    ],
    treatment: [
      "No specific therapy for asymptomatic patients",
      "Treat infections promptly; consider antibiotic prophylaxis if recurrent sinopulmonary disease",
      "Avoid standard IVIG (contains IgA) — risk of anaphylaxis; use IgA-depleted IVIG if humoral replacement needed",
      "Use washed RBCs or IgA-depleted blood products for transfusion in sensitized patients",
      "Manage associated allergies and autoimmune disease as indicated",
    ],
    boardsPearls: [
      "Most common primary immunodeficiency (~1 in 500 in Western populations)",
      "Isolated ↓ IgA with normal IgG and IgM — memorize the lab pattern",
      "Always check total IgA before tTG IgA celiac screen — false negative if IgA deficient",
      "Anaphylaxis to blood transfusion/IVIG from anti-IgA IgG antibodies — use IgA-depleted products",
      "Secretory IgA defends mucosal surfaces — sinopulmonary and GI infections when symptomatic",
      "vs CVID — CVID has ↓ IgG (and often ↓ IgA); selective IgA deficiency has normal IgG",
    ],
    pediatrics:
      "Transient IgA deficiency is common in infants and often resolves by age 4 — do not diagnose selective IgA deficiency before age 4. Symptomatic children may have recurrent otitis and sinusitis. Celiac screening in IgA-deficient children requires tTG IgG or deamidated gliadin IgG, not tTG IgA.",
  },
  {
    id: "x-linked-agammaglobulinemia",
    name: "X-linked Agammaglobulinemia",
    etymology: "X chromosome linked + Greek a- = absent + gamma globulin = antibody fraction + -emia = blood condition",
    aliases: [
      "x-linked agammaglobulinemia",
      "x linked agammaglobulinemia",
      "xla",
      "bruton agammaglobulinemia",
      "bruton disease",
      "bruton syndrome",
      "bruton type agammaglobulinemia",
      "bruton hypogammaglobulinemia",
      "agammaglobulinemia",
      "congenital agammaglobulinemia",
      "sex-linked agammaglobulinemia",
      "btk agammaglobulinemia",
    ],
    definition:
      "X-linked recessive primary humoral immunodeficiency caused by BTK mutations → failure of pre-B to mature B-cell transition → absent circulating B cells and severely reduced or absent serum immunoglobulins (IgG, IgA, IgM).",
    pathophysiology:
      "BTK (Bruton tyrosine kinase) mutation on Xq21.3–q22 → defective B-cell receptor signaling in pre-B cells → arrest at pre-B stage in bone marrow → no mature B lymphocytes in blood, lymph nodes, or spleen → no plasma cells → agammaglobulinemia → impaired opsonization and neutralization of encapsulated bacteria.",
    classicPresentation: [
      "Male infant/child with recurrent bacterial infections after ~6 months (when maternal IgG wanes)",
      "Recurrent otitis media, sinusitis, pneumonia, bronchitis",
      "Encapsulated organisms — S. pneumoniae, H. influenzae, S. pyogenes",
      "Small or absent tonsils and lymph nodes (no germinal centers)",
      "Chronic diarrhea from Giardia lamblia",
      "Normal T-cell numbers and function",
    ],
    keyFindings: [
      "Absent or markedly ↓ all immunoglobulin isotypes (IgG, IgA, IgM)",
      "↓ CD19+ B cells on flow cytometry (<1% of lymphocytes)",
      "Normal T-cell count and mitogen responses",
      "Small/absent tonsils and lymphoid tissue on exam",
    ],
    keyLabs: [
      "Quantitative serum immunoglobulins — ↓↓ IgG, IgA, IgM",
      "Flow cytometry — absent CD19+ mature B cells",
      "BTK genetic testing confirms diagnosis",
      "Neutropenia may occur transiently during infection",
    ],
    associations: [
      "BTK gene mutation — X-linked recessive; males affected, carrier females usually asymptomatic",
      "Encapsulated pyogenic bacteria — require antibody opsonization",
      "Giardia lamblia — chronic GI infection",
      "Enteroviral meningoencephalitis — can be fatal (echovirus, coxsackievirus)",
      "Live attenuated vaccines contraindicated (e.g., OPV, MMR, varicella)",
      "Named for Col. Ogden Bruton (1952) — first described humoral immunodeficiency",
    ],
    complications: [
      "Bronchiectasis from recurrent pneumonia",
      "Chronic lung disease",
      "Disseminated enteroviral infection (CNS, dermatomyositis-like syndrome)",
      "Infectious arthritis",
      "Increased malignancy risk (lymphoma, GI cancers) in long-term survivors",
    ],
    distinguishFrom: [
      "Transient hypogammaglobulinemia of infancy — resolves by 12–24 months; B cells present",
      "Selective IgA deficiency — isolated ↓ IgA; normal B cells and IgG",
      "CVID — ↓ IgG ± IgA/IgM; B cells present but impaired function",
      "Hyper-IgM syndrome — ↑ IgM with ↓ IgG/IgA; CD40L or AID defect",
      "SCID — T- and B-cell deficiency; lymphopenia, failure to thrive early",
      "Autosomal recessive agammaglobulinemia — similar phenotype; BTK intact; μ heavy chain or λ5 defects",
    ],
    treatment: [
      "Lifelong IVIG or subcutaneous immunoglobulin replacement",
      "Prompt antibiotics for infections; consider prophylaxis if recurrent",
      "Avoid live attenuated vaccines",
      "Pneumococcal and Hib conjugate vaccines (T-cell–independent polysaccharide vaccines poorly immunogenic — conjugated preferred)",
      "Hematopoietic stem cell transplant or gene therapy investigational",
    ],
    boardsPearls: [
      "Boy + recurrent encapsulated bacterial infections after 6 months + ↓ all Igs + absent B cells → Bruton (XLA)",
      "BTK defect → pre-B cell maturation arrest → no mature B cells, no antibodies",
      "Small/absent tonsils and lymph nodes — no germinal centers without B cells",
      "Maternal IgG protects first ~6 months — infections begin when it wanes",
      "Live vaccines contraindicated — risk of vaccine-strain disease (e.g., OPV polio, rotavirus)",
      "Enteroviral CNS infection can be fatal in XLA — IVIG does not always prevent",
      "vs Hyper-IgM — ↑ IgM, ↓ switched Igs; vs CVID — B cells present",
    ],
    pediatrics:
      "Classic presentation in male infant after 6 months when maternal IgG wanes — recurrent otitis and pneumonia. Exam shows absent tonsillar tissue. Live vaccines (MMR, varicella, rotavirus, OPV) are contraindicated. IVIG replacement started early prevents bronchiectasis. Family history of male relatives with early childhood infections suggests X-linked inheritance.",
  },
  {
    id: "chronic-granulomatous-disease",
    name: "Chronic Granulomatous Disease",
    etymology: "Greek chronos = time + Latin granulum = small grain + -oma = mass + disease = disordered function",
    aliases: [
      "chronic granulomatous disease",
      "cgd",
      "nadph oxidase deficiency",
      "respiratory burst defect",
      "oxidative burst defect",
      "phagocyte oxidative burst defect",
      "gp91phox deficiency",
      "p47phox deficiency",
    ],
    definition:
      "Primary phagocyte immunodeficiency from defective NADPH oxidase respiratory burst, causing impaired intracellular killing of catalase-positive bacteria and fungi with recurrent infections and granuloma formation.",
    pathophysiology:
      "NADPH oxidase cannot generate superoxide in neutrophils/macrophages → ↓ reactive oxygen species and ↓ myeloperoxidase-mediated microbial killing. Catalase-positive organisms destroy their own H₂O₂, so host phagocytes cannot borrow microbial peroxide for killing. Persistent organisms trigger chronic inflammation and granulomas.",
    classicPresentation: [
      "Recurrent skin, lung, lymph node, liver, and bone infections in childhood",
      "Abscesses with Staphylococcus aureus",
      "Pneumonia from Aspergillus or Burkholderia",
      "Granulomatous obstruction — GI or GU tract",
      "Family history; most common form is X-linked",
    ],
    keyFindings: [
      "Recurrent catalase-positive infections",
      "Granulomas on biopsy due to persistent antigen",
      "Normal neutrophil count with defective killing",
      "Lymphadenitis, hepatosplenic abscesses, osteomyelitis",
    ],
    keyLabs: [
      "Dihydrorhodamine (DHR) flow cytometry — abnormal/low oxidative burst (preferred test)",
      "Nitroblue tetrazolium test — negative/no blue color change (older test)",
      "Genetic testing: CYBB gp91phox X-linked; NCF1 p47phox autosomal recessive",
      "Cultures often grow S. aureus, Serratia, Burkholderia cepacia, Nocardia, Aspergillus",
    ],
    associations: [
      "Catalase-positive organisms: S. aureus, Serratia marcescens, Burkholderia cepacia, Nocardia, Aspergillus",
      "X-linked CYBB mutation — most common and often more severe",
      "Autosomal recessive NADPH oxidase subunit defects",
      "Inflammatory bowel disease-like colitis",
      "Granulomatous obstruction of hollow organs",
    ],
    complications: [
      "Recurrent life-threatening bacterial/fungal infections",
      "Aspergillus pneumonia",
      "Hepatic abscess",
      "Osteomyelitis",
      "Bronchiectasis or chronic lung damage",
      "Granulomatous GI/GU obstruction",
    ],
    distinguishFrom: [
      "Leukocyte adhesion deficiency — delayed cord separation, no pus, neutrophilia; adhesion/migration defect",
      "Chediak-Higashi syndrome — giant granules, partial albinism, neuropathy; lysosomal trafficking defect",
      "Myeloperoxidase deficiency — impaired bleach generation, usually mild Candida susceptibility; normal DHR",
      "Hyper-IgE syndrome — cold staph abscesses, eczema, retained primary teeth, ↑ IgE",
      "Complement deficiency — Neisseria or encapsulated organisms depending pathway, not catalase-positive phagocyte pattern",
    ],
    treatment: [
      "Lifelong prophylaxis: trimethoprim-sulfamethoxazole plus itraconazole/azole antifungal",
      "Interferon-γ reduces serious infections in some patients",
      "Aggressive culture-directed antibiotics/antifungals for acute infections",
      "Hematopoietic stem cell transplant can be curative in severe disease",
      "Avoid high-risk mold exposures (mulch, decaying leaves, construction dust)",
    ],
    boardsPearls: [
      "CGD = NADPH oxidase defect → no respiratory burst",
      "Catalase-positive organisms mnemonic: Staph aureus, Serratia, Burkholderia, Nocardia, Aspergillus",
      "DHR flow cytometry is the modern diagnostic test; NBT is classic board test",
      "Catalase-positive organisms remove H₂O₂, so CGD phagocytes cannot use microbial peroxide",
      "Granulomas are from persistent intracellular organisms, not an adaptive T-cell problem",
    ],
    pediatrics:
      "Usually presents in early childhood with recurrent abscesses, pneumonia, lymphadenitis, or osteomyelitis. X-linked disease often affects boys and may be severe; prophylaxis and early infection treatment prevent organ damage.",
  },
  {
    id: "asplenic-sepsis",
    name: "Asplenic Sepsis",
    etymology: "Greek a- = without + Greek splen = spleen + Greek sepsis = putrefaction/infection",
    aliases: [
      "asplenic sepsis",
      "overwhelming post-splenectomy infection",
      "opsi",
      "overwhelming postsplenectomy infection",
      "post splenectomy sepsis",
      "postsplenectomy sepsis",
      "functional asplenia sepsis",
      "hyposplenic sepsis",
      "asplenia sepsis",
      "autosplenectomy sepsis",
    ],
    definition:
      "Rapid, severe bloodstream infection in an anatomic or functionally asplenic patient, classically from encapsulated bacteria that normally require splenic macrophages and IgM/complement opsonization for clearance.",
    pathophysiology:
      "Loss of splenic marginal-zone B cells, macrophage filtration, and IgM-mediated complement opsonization → impaired clearance of blood-borne encapsulated organisms → fulminant bacteremia, DIC, shock, and death can develop within hours.",
    classicPresentation: [
      "Asplenic or splenectomized patient with fever, chills, malaise, vomiting, or diarrhea",
      "Rapid progression to hypotension, altered mental status, DIC, purpura, or shock",
      "History of sickle cell disease, splenectomy, trauma, celiac disease, or splenic irradiation",
      "May initially look like a viral illness before sudden collapse",
    ],
    keyFindings: [
      "Fever in asplenia is an emergency",
      "Howell-Jolly bodies on peripheral smear indicate impaired splenic function",
      "Purpura fulminans/DIC in severe cases",
      "Shock out of proportion to early symptoms",
    ],
    keyLabs: [
      "Blood cultures before antibiotics if this does not delay therapy",
      "CBC may show leukocytosis or leukopenia; thrombocytosis after splenectomy",
      "Coagulation studies may show DIC: ↑ PT/PTT, ↓ fibrinogen, ↑ D-dimer",
      "Peripheral smear — Howell-Jolly bodies",
    ],
    associations: [
      "Streptococcus pneumoniae — most common classic cause",
      "Haemophilus influenzae type b",
      "Neisseria meningitidis",
      "Capnocytophaga canimorsus after dog bite",
      "Babesia and Plasmodium — severe parasitemia risk",
      "Sickle cell disease with autosplenectomy",
    ],
    complications: [
      "Septic shock",
      "DIC and purpura fulminans",
      "Waterhouse-Friderichsen syndrome with meningococcemia",
      "Multiorgan failure",
      "Death within hours if untreated",
    ],
    distinguishFrom: [
      "Ordinary viral syndrome — asplenic fever must be treated as bacteremia until proven otherwise",
      "Neutropenic fever — chemotherapy/ANC-driven risk; different immune defect",
      "Complement terminal pathway deficiency — recurrent Neisseria, but spleen intact",
      "Sickle vaso-occlusive crisis — pain crisis may coexist; fever still requires sepsis workup",
    ],
    treatment: [
      "Immediate empiric IV antibiotics for fever: ceftriaxone or cefotaxime; add vancomycin if severe illness or resistant pneumococcus concern",
      "Sepsis resuscitation: fluids, vasopressors, source evaluation, ICU care as needed",
      "Vaccination: pneumococcal, Hib, meningococcal ACWY/B, annual influenza; ideally before elective splenectomy",
      "Antibiotic prophylaxis in high-risk patients, especially children with sickle cell disease or early post-splenectomy",
      "Patient education: carry emergency antibiotics/medical alert and seek care immediately for fever or animal bites",
    ],
    boardsPearls: [
      "Asplenia = encapsulated bacteria risk: S. pneumoniae, H. influenzae, N. meningitidis",
      "Howell-Jolly bodies = nuclear remnants in RBCs from absent splenic filtration",
      "Fever in asplenic patient is emergency empiric ceftriaxone, not watchful waiting",
      "Sickle cell disease causes functional asplenia/autosplenectomy early in childhood",
      "Dog bite + asplenia + sepsis → Capnocytophaga canimorsus",
    ],
    pediatrics:
      "Children with sickle cell disease are functionally asplenic early and need penicillin prophylaxis plus pneumococcal/Hib/meningococcal vaccination. Any fever in a sickle/asplenic child needs urgent evaluation and empiric antibiotics.",
  },
  {
    id: "hyperlipidemia",
    name: "Hyperlipidemia",
    etymology: "Greek hyper = excess + lipos = fat + -emia = blood condition",
    aliases: [
      "hyperlipidemia",
      "dyslipidemia",
      "hypercholesterolemia",
      "hypertriglyceridemia",
      "elevated cholesterol",
      "high cholesterol",
      "familial hypercholesterolemia",
      "mixed hyperlipidemia",
    ],
    definition:
      "Abnormal elevation of circulating lipids (LDL cholesterol, triglycerides, and/or lipoprotein(a)), or low HDL — a major modifiable risk factor for atherosclerotic cardiovascular disease.",
    pathophysiology:
      "↑ LDL penetrates and oxidizes in arterial intima → foam cell formation and atherosclerosis; ↑ triglyceride-rich lipoproteins contribute to pancreatitis risk and residual ASCVD risk. Familial forms from defective LDL receptor clearance (LDLR, ApoB-100) or gain-of-function PCSK9.",
    classicPresentation: [
      "Usually asymptomatic — detected on fasting lipid panel",
      "Tendon xanthomas (Achilles, extensor tendons) in familial hypercholesterolemia",
      "Arcus senilis (corneal arcus) and xanthelasma",
      "Premature MI or stroke in young patient or family history",
    ],
    keyFindings: [
      "Xanthomas, xanthelasma, arcus senilis",
      "Premature atherosclerotic disease on imaging or clinical events",
    ],
    keyLabs: [
      "Fasting lipid panel: ↑ LDL-C, ↑ triglycerides, ↓ HDL",
      "↑ lipoprotein(a) — independent ASCVD risk factor",
      "Secondary workup if indicated: TSH (hypothyroidism), glucose/HbA1c, urine protein",
    ],
    associations: [
      "Familial hypercholesterolemia (autosomal dominant LDLR/ApoB/PCSK9 defects)",
      "Diabetes mellitus, metabolic syndrome, obesity",
      "Hypothyroidism, nephrotic syndrome, cholestasis",
      "Medications: thiazides, β-blockers, glucocorticoids, protease inhibitors",
    ],
    complications: [
      "Coronary artery disease and myocardial infarction",
      "Ischemic stroke and peripheral artery disease",
      "Acute pancreatitis (severe hypertriglyceridemia, typically >1000 mg/dL)",
    ],
    distinguishFrom: [
      "Atherosclerosis — end-organ disease; hyperlipidemia is a major upstream risk factor",
      "Nephrotic syndrome hyperlipidemia — heavy proteinuria, edema, hypoalbuminemia",
      "Secondary causes — correct hypothyroidism or nephrotic syndrome before labeling primary dyslipidemia",
    ],
    treatment: [
      "Lifestyle: diet, exercise, weight loss, smoking cessation",
      "Statins (HMG-CoA reductase inhibitors) first line for ↑ LDL and ASCVD risk reduction",
      "Ezetimibe, PCSK9 inhibitors, bile acid sequestrants for refractory LDL",
      "Fibrates and omega-3 for severe hypertriglyceridemia; treat secondary causes",
    ],
    boardsPearls: [
      "LDL is primary target for atherosclerosis prevention; statins ↓ LDL and stabilize plaques",
      "Familial hypercholesterolemia: ↑↑ LDL from birth, tendon xanthomas, premature CAD — treat early with statins",
      "Homozygous FH: LDL often >500 mg/dL; may need LDL apheresis",
      "Severe hypertriglyceridemia (>1000) → pancreatitis risk; fibrates and alcohol restriction",
      "Statins inhibit HMG-CoA reductase — rate-limiting step in cholesterol synthesis",
    ],
    pediatrics:
      "Screen children with FH, diabetes, or obesity per guidelines; heterozygous FH may need statins in childhood. Homozygous FH presents with dramatic LDL elevation and xanthomas in infancy/childhood.",
  },
  {
    id: "hypertension",
    name: "Hypertension",
    etymology: "Greek hyper = excess + Latin tensio = pressure/stretching",
    aliases: [
      "hypertension",
      "htn",
      "high blood pressure",
      "essential hypertension",
      "primary hypertension",
    ],
    definition:
      "Sustained elevation of systemic arterial blood pressure, most often primary (essential) without identifiable cause.",
    pathophysiology:
      "Essential HTN: multifactorial ↑ peripheral vascular resistance ± ↑ cardiac output from neurohormonal dysregulation (RAAS, sympathetic tone). Secondary causes include renal disease, renovascular stenosis, primary aldosteronism, pheochromocytoma, and OSA.",
    classicPresentation: [
      "Usually asymptomatic — detected on routine screening",
      "Headache, dizziness, or epistaxis when severe",
      "Risk factors: obesity, high sodium intake, family history, age, African American descent",
    ],
    keyFindings: [
      "Elevated BP on repeated measurements (≥130/80 mmHg per current guidelines)",
      "LVH on ECG (Sokolow-Lyon criteria) or echo",
      "Fundoscopic changes: arteriovenous nicking, copper/silver wiring, papilledema if malignant",
    ],
    keyLabs: [
      "BMP — renal function and electrolytes (screen for renal cause, hyperaldosteronism)",
      "Urinalysis — proteinuria suggests hypertensive nephropathy or underlying renal disease",
    ],
    associations: [
      "Obesity and metabolic syndrome",
      "Obstructive sleep apnea",
      "Chronic kidney disease",
      "Coarctation of the aorta (secondary, younger patients)",
    ],
    complications: [
      "Stroke and intracerebral hemorrhage",
      "Myocardial infarction and heart failure",
      "Chronic kidney disease",
      "Hypertensive retinopathy and encephalopathy",
    ],
    distinguishFrom: [
      "White coat hypertension — elevated in clinic, normal at home",
      "Secondary hypertension — young onset, resistant HTN, hypokalemia, abdominal bruit",
      "Malignant hypertension — severe BP with end-organ damage (papilledema, AKI)",
    ],
    treatment: [
      "Lifestyle: weight loss, DASH diet, sodium restriction, exercise",
      "First-line pharmacotherapy: thiazide diuretic, ACE inhibitor, ARB, or CCB; ACEi/ARB preferred with diabetes or CKD",
    ],
    boardsPearls: [
      "Leading modifiable risk factor for stroke, MI, and CKD",
      "Secondary HTN clues: age <30, resistant HTN, hypokalemia (↑ aldosterone), abdominal bruit (renal artery stenosis)",
      "Hypertensive emergency: IV labetalol, nicardipine, or nitroprusside with end-organ damage",
    ],
    pediatrics:
      "Secondary causes (renal parenchymal disease, coarctation) are more common than essential HTN; evaluate if BP elevated on repeated measurements.",
  },
  {
    id: "venous-thrombosis",
    name: "Venous Thrombosis",
    etymology: "Latin vena = vein + Greek thrombos = clot + -osis = condition",
    aliases: [
      "venous thrombosis",
      "venous thromboses",
      "venous thromboembolism",
      "vte",
      "deep vein thrombosis",
      "deep venous thrombosis",
      "dvt",
      "dvts",
      "lower extremity dvt",
      "proximal dvt",
    ],
    definition:
      "Thrombus formation in a deep vein — most often iliofemoral or popliteal — causing leg swelling and pain and risking pulmonary embolism if clot embolizes.",
    pathophysiology:
      "Virchow triad — venous stasis (immobility, surgery, long travel), endothelial injury (trauma, catheter, surgery), hypercoagulability (factor V Leiden, prothrombin G20210A, antiphospholipid syndrome, OCP, pregnancy, malignancy) → fibrin and platelet-rich clot in valve cusps of deep veins → inflammatory venous obstruction → unilateral edema; thrombus propagation or embolization to pulmonary arteries causes PE.",
    classicPresentation: [
      "Unilateral leg swelling, warmth, and calf or thigh pain",
      "Recent surgery, immobilization, long flight, or hospitalization",
      "Tenderness along deep venous system; calf swelling >3 cm compared to contralateral leg",
      "May be asymptomatic if small or nonobstructive",
      "Risk factors: malignancy, pregnancy/OCP, inherited thrombophilia, prior VTE",
    ],
    keyFindings: [
      "Unilateral pitting edema and erythema",
      "Homan sign (calf pain with passive dorsiflexion) — insensitive and nonspecific",
      "Compression ultrasound — noncompressible venous segment diagnostic for DVT",
      "D-dimer elevated when clot present but nonspecific (low pretest probability + negative D-dimer rules out)",
    ],
    keyLabs: [
      "D-dimer — high sensitivity, low specificity",
      "Hypercoagulable workup if unprovoked, young, or recurrent (factor V Leiden, prothrombin mutation, antiphospholipid antibodies, protein C/S, antithrombin)",
    ],
    associations: [
      "Pulmonary embolism — most feared acute complication",
      "Post-thrombotic syndrome — chronic venous insufficiency after DVT",
      "Malignancy (Trousseau syndrome — migratory superficial thrombophlebitis)",
      "Atrial fibrillation — arterial not venous, but both cause thromboembolism",
      "Central venous catheters — upper extremity DVT",
    ],
    complications: [
      "Pulmonary embolism — dyspnea, pleuritic chest pain, tachycardia, hypoxemia",
      "Post-thrombotic syndrome and venous ulceration",
      "Phlegmasia cerulea dolens — massive iliofemoral thrombosis with limb ischemia",
      "Chronic thromboembolic pulmonary hypertension after recurrent PE",
    ],
    distinguishFrom: [
      "Cellulitis — erythema without venous noncompressibility; may coexist",
      "Ruptured Baker cyst — posterior knee fluid with crescent sign on MRI",
      "Superficial thrombophlebitis — palpable cord in superficial vein; lower PE risk unless near saphenofemoral junction",
      "Lymphedema — bilateral or chronic nonpitting edema without acute pain",
      "Muscle strain or hematoma — trauma history, no venous filling defect on ultrasound",
    ],
    treatment: [
      "Anticoagulation — DOAC (rivaroxaban, apixaban), LMWH bridging to warfarin, or LMWH alone per scenario",
      "Compression stockings and early ambulation when tolerated",
      "Thrombolysis or thrombectomy for massive iliofemoral DVT with threatened limb (selected cases)",
      "Treat underlying cause; limit OCP if provoked by estrogen",
      "IVC filter only when anticoagulation contraindicated — does not treat clot, prevents PE",
    ],
    boardsPearls: [
      "Virchow triad: stasis, endothelial injury, hypercoagulability",
      "Unilateral leg swelling + recent immobility → DVT until proven otherwise",
      "Compression ultrasound is diagnostic; D-dimer rules out only with low pretest probability",
      "Anticoagulate to prevent PE propagation — heparin/LMWH/DOAC/warfarin per guidelines",
      "Factor V Leiden — most common inherited thrombophilia; activated protein C resistance",
      "vs superficial thrombophlebitis — tender superficial cord; deep system ultrasound normal",
    ],
    pediatrics:
      "DVT is rare in children but occurs with central lines, malignancy, congenital heart disease, or inherited thrombophilia. Neonatal renal vein thrombosis presents with hematuria, flank mass, and thrombocytopenia — distinct from lower-extremity DVT.",
  },
  {
    id: "atrial-fibrillation",
    name: "Atrial Fibrillation",
    etymology: "Latin atrium = entrance hall + fibrilla = small fiber; quivering atrial fibers",
    aliases: [
      "atrial fibrillation",
      "afib",
      "a-fib",
      "a fib",
      "af",
      "chronic atrial fibrillation",
      "paroxysmal atrial fibrillation",
    ],
    definition:
      "Supraventricular tachyarrhythmia with chaotic atrial electrical activity and ineffective atrial contraction, producing an irregularly irregular ventricular response.",
    pathophysiology:
      "Multiple reentrant microcircuits in atrial myocardium → loss of coordinated atrial contraction; blood stasis in the left atrial appendage → thrombus formation and embolic stroke risk. Loss of atrial kick worsens cardiac output, especially with diastolic dysfunction or mitral stenosis.",
    classicPresentation: [
      "Palpitations, fatigue, dyspnea, or asymptomatic irregular pulse",
      "Irregularly irregular rhythm on exam",
      "History of hypertension, heart failure, valvular disease, or hyperthyroidism",
      'Alcohol binge ("holiday heart") or postoperative state',
    ],
    keyFindings: [
      "Irregularly irregular pulse",
      "Absent P waves with fibrillatory waves on ECG",
      "Variable R-R intervals",
      "Absent S4/atrial kick; irregular pulse > heart rate if frequent premature beats",
    ],
    keyLabs: [
      "ECG — diagnostic",
      "TSH (hyperthyroidism)",
      "Echocardiography — LA size, valvular disease, LV function",
    ],
    associations: [
      "Hypertension and heart failure",
      "Mitral stenosis or regurgitation",
      "Hyperthyroidism (Graves disease)",
      "Ischemic heart disease and post-MI",
      "Obstructive sleep apnea, pulmonary embolism, alcohol",
    ],
    complications: [
      "Ischemic stroke and systemic embolism",
      "Tachycardia-mediated cardiomyopathy",
      "Heart failure exacerbation",
    ],
    distinguishFrom: [
      "Atrial flutter — sawtooth flutter waves, often regular ventricular response with block",
      "Multifocal atrial tachycardia — distinct P waves with ≥3 morphologies",
      "Frequent PVCs — regular underlying rhythm between ectopy",
      "Sinus arrhythmia — phasic variation with respiration, normal P waves",
    ],
    treatment: [
      "Rate control: β-blockers, nondihydropyridine CCBs (diltiazem/verapamil), or digoxin",
      "Rhythm control: cardioversion, antiarrhythmics (amiodarone, flecainide) when appropriate",
      "Anticoagulation per stroke risk (CHA₂DS₂-VASc): DOACs or warfarin",
      "Treat underlying cause (thyroid disease, valve disease, heart failure)",
    ],
    boardsPearls: [
      "Irregularly irregular + no P waves = atrial fibrillation",
      "CHA₂DS₂-VASc guides anticoagulation; HAS-BLED assesses bleeding risk",
      "Cardioversion if >48 h or unknown duration → anticoagulate ≥3 weeks before or TEE to rule out LA thrombus",
      "WPW + AF: avoid AV nodal blockers (β-blocker, CCB, digoxin) → use procainamide or cardioversion",
      "Mitral stenosis or mechanical valve → warfarin (not DOAC) for stroke prevention",
      "Rate control often first-line in elderly; rhythm control does not consistently beat rate control for mortality",
    ],
    pediatrics:
      "Uncommon; consider congenital heart disease, WPW, or post-cardiac surgery. Same anticoagulation principles apply when stroke risk warrants.",
  },
  {
    id: "atrioventricular-block",
    name: "Atrioventricular Heart Block",
    etymology: "Latin atrium = entrance hall + ventriculus = little belly + heart = pump + block = obstruction",
    aliases: [
      "atrioventricular heart block",
      "av block",
      "heart block",
      "third degree heart block",
      "complete heart block",
    ],
    definition:
      "Impaired conduction through the AV node or His-Purkinje system, causing delayed or absent ventricular response to atrial depolarization.",
    pathophysiology:
      "First-degree: prolonged PR interval. Second-degree Mobitz I (Wenckebach): progressive PR prolongation until dropped beat (usually AV node). Mobitz II: sudden dropped beat (usually infranodal). Third-degree: complete AV dissociation.",
    classicPresentation: [
      "Syncope (Stokes-Adams attacks in complete block)",
      "Bradycardia, fatigue, dizziness",
      "Post-MI or Lyme carditis history",
    ],
    keyFindings: [
      "Bradycardia with regular rhythm (3rd degree)",
      "Cannon A waves (AV dissociation)",
      "Mobitz I: grouped beating on ECG",
    ],
    associations: [
      "Inferior MI (RCA supplies AV node)",
      "Lyme disease",
      "Digoxin toxicity",
      "Degenerative conduction system disease (Lenègre/Lev)",
    ],
    complications: ["Syncope", "Sudden cardiac death (Mobitz II, 3rd degree)"],
    distinguishFrom: [
      "Sinus bradycardia — P waves precede every QRS",
      "Atrial fibrillation with slow ventricular response",
    ],
    treatment: [
      "Atropine for symptomatic bradycardia (especially inferior MI)",
      "Permanent pacemaker for Mobitz II or third-degree block",
    ],
    boardsPearls: [
      "Mobitz I (Wenckebach) — usually benign, AV nodal",
      "Mobitz II — infranodal, often progresses to complete block → pacemaker",
      "Inferior MI + AV block → atropine; anterior MI + AV block → pacemaker",
    ],
    pediatrics:
      "Congenital complete heart block associated with maternal anti-Ro/anti-La (neonatal lupus).",
  },
  {
    id: "ischemic-stroke",
    name: "Ischemic Stroke",
    etymology: "Greek ischein = to hold back + haima = blood + stroke = sudden blow",
    aliases: ["ischemic stroke", "stroke", "cva", "cerebrovascular accident"],
    definition:
      "Focal neurologic deficit from cerebral infarction due to arterial occlusion (thrombotic or embolic).",
    pathophysiology:
      "Large-vessel atherosclerosis, cardioembolism (AF), or small-vessel lipohyalinosis → ischemia → cytotoxic edema; penumbra may be salvageable with reperfusion.",
    classicPresentation: [
      "Sudden focal weakness, numbness, or aphasia",
      "Atrial fibrillation or carotid disease risk factors",
      "Onset over seconds to minutes",
    ],
    keyFindings: [
      "Focal neurologic deficit respecting vascular territory",
      "Noncontrast CT initially negative (early); MRI DWI positive",
      "Carotid bruit (large-vessel disease)",
    ],
    keyLabs: ["CT/MRI brain", "ECG for AF", "Carotid duplex"],
    associations: [
      "Atrial fibrillation",
      "Hypertension",
      "Diabetes mellitus",
      "Carotid stenosis",
    ],
    complications: [
      "Hemorrhagic conversion",
      "Cerebral edema",
      "Aspiration pneumonia",
    ],
    distinguishFrom: [
      "Hemorrhagic stroke — headache, ↓ consciousness, blood on CT",
      "TIA — symptoms resolve within 24 h",
      "Hypoglycemia — check glucose immediately",
    ],
    treatment: [
      "IV tPA within 4.5 h if eligible; mechanical thrombectomy for large-vessel occlusion",
      "Antiplatelet therapy; anticoagulation for cardioembolic stroke (e.g., AF)",
    ],
    boardsPearls: [
      "MCA territory: contralateral face/arm weakness, aphasia (dominant hemisphere)",
      "tPA window: within 4.5 h of symptom onset if eligible",
      "AF → cardioembolic stroke → anticoagulation",
    ],
  },
  {
    id: "primary-brain-tumor",
    name: "Primary Brain Tumor",
    etymology: "Latin primarius = first + brain = encephalon + Greek -oma = mass/tumor",
    aliases: [
      "primary brain tumor",
      "brain tumor",
      "brain neoplasm",
      "glioblastoma",
    ],
    definition:
      "Neoplasm arising from intracranial structures (glial cells, meninges, or embryonal tissue), distinct from metastatic disease.",
    pathophysiology:
      "Uncontrolled proliferation of CNS cells → mass effect, ↑ ICP, focal deficits; glioblastoma (grade IV astrocytoma) is most aggressive primary brain tumor in adults.",
    classicPresentation: [
      "Progressive headache worse in morning, vomiting",
      "New-onset seizures in adult",
      "Focal neurologic deficits",
    ],
    keyFindings: [
      "Ring-enhancing lesion on MRI with central necrosis (glioblastoma)",
      "Papilledema",
      "Focal deficits per tumor location",
    ],
    associations: [
      "Neurofibromatosis type 1 (optic glioma)",
      "Tuberous sclerosis (subependymal giant cell astrocytoma)",
      "Li-Fraumeni syndrome",
    ],
    complications: ["Herniation", "Hydrocephalus", "Seizures"],
    distinguishFrom: [
      "Brain metastasis — multiple lesions at gray-white junction",
      "Abscess — fever, ring enhancement with restricted diffusion",
    ],
    treatment: [
      "Maximal safe surgical resection when feasible",
      "Adjuvant radiation ± temozolomide for high-grade gliomas",
    ],
    boardsPearls: [
      "Adults: glioblastoma most common malignant primary tumor",
      "Children: pilocytic astrocytoma (cerebellum), medulloblastoma (posterior fossa)",
      "Meningioma: extra-axial, dural tail, often benign",
    ],
    pediatrics:
      "Posterior fossa tumors (medulloblastoma, pilocytic astrocytoma) present with headache, ataxia, and hydrocephalus.",
  },
  {
    id: "multiple-sclerosis",
    name: "Multiple Sclerosis",
    etymology: "Latin multiplex = many + Greek skleros = hard/scarred",
    aliases: [
      "multiple sclerosis",
      "ms",
      "disseminated sclerosis",
      "relapsing-remitting multiple sclerosis",
      "rrms",
    ],
    definition:
      "Autoimmune demyelinating disease of the CNS with relapsing-remitting or progressive neurologic deficits disseminated in time and space.",
    pathophysiology:
      "T-cell mediated attack on myelin → plaques of demyelination → impaired saltatory conduction; oligoclonal IgG in CSF reflects intrathecal synthesis.",
    classicPresentation: [
      "Young woman with optic neuritis or internuclear ophthalmoplegia",
      "Relapsing neurologic deficits separated in time and location",
      "Lhermitte sign (electric shock down spine on neck flexion)",
    ],
    keyFindings: [
      "Internuclear ophthalmoplegia (MLF lesion)",
      "Uhthoff phenomenon (worsening with heat)",
      "Periventricular white matter lesions on MRI",
    ],
    keyLabs: [
      "↑ IgG index and oligoclonal bands in CSF",
      "MRI: periventricular plaques",
    ],
    associations: [
      "Higher prevalence in women",
      "Northern latitude",
      "HLA-DR2",
    ],
    complications: [
      "Progressive disability",
      "Bladder dysfunction",
      "Depression",
    ],
    distinguishFrom: [
      "Neuromyelitis optica — anti-AQP4, longitudinally extensive transverse myelitis",
      "ADEM — monophasic, post-infectious",
    ],
    treatment: [
      "High-dose IV corticosteroids for acute relapses",
      "Disease-modifying therapy (interferon-β, glatiramer) for relapsing-remitting MS",
    ],
    boardsPearls: [
      "Most common demyelinating disease in young adults",
      "Oligoclonal bands in CSF = intrathecal IgG synthesis",
      "INO: impaired adduction ipsilateral eye, nystagmus contralateral eye",
      "Dissemination in time and space is required for diagnosis",
      "Heat worsens symptoms (Uhthoff phenomenon)",
    ],
  },
  {
    id: "parkinson-disease",
    name: "Parkinson Disease",
    etymology: "eponym: James Parkinson + disease = disordered function",
    aliases: ["parkinson disease", "parkinson's disease", "parkinsonism"],
    definition:
      "Neurodegenerative disorder with loss of dopaminergic neurons in the substantia nigra pars compacta, causing bradykinesia, rigidity, and tremor.",
    pathophysiology:
      "Loss of pigmented dopaminergic neurons in substantia nigra → ↓ striatal dopamine → imbalance of direct/indirect basal ganglia pathways → bradykinesia and rigidity.",
    classicPresentation: [
      "Resting tremor, bradykinesia, rigidity",
      "Shuffling gait, reduced arm swing",
      "Masked facies, micrographia",
    ],
    keyFindings: [
      "Pill-rolling resting tremor",
      "Cogwheel rigidity",
      "Postural instability (later)",
    ],
    associations: ["Lewy body inclusions (α-synuclein)", "Older age"],
    complications: ["Dementia", "Falls", "Autonomic dysfunction"],
    distinguishFrom: [
      "Essential tremor — action tremor, no rigidity",
      "Drug-induced parkinsonism — antipsychotics, metoclopramide",
      "Progressive supranuclear palsy — vertical gaze palsy",
    ],
    treatment: [
      "Levodopa/carbidopa — most effective symptomatic therapy",
      "Dopamine agonists, MAO-B inhibitors as adjuncts",
    ],
    boardsPearls: [
      "TRAP: Tremor, Rigidity, Akinesia/bradykinesia, Postural instability",
      "Lewy bodies = eosinophilic intracytoplasmic inclusions",
      "Treat with levodopa/carbidopa (crosses BBB)",
    ],
  },
  {
    id: "type-2-diabetes-mellitus",
    name: "Type 2 Diabetes Mellitus",
    etymology: "Greek diabainein = pass through + Latin mellitus = honey-sweet + type 2 = insulin-resistant subtype",
    aliases: [
      "type 2 diabetes mellitus",
      "type 2 diabetes",
      "diabetes mellitus",
      "diabetes",
      "t2dm",
    ],
    definition:
      "Chronic hyperglycemia from insulin resistance and progressive pancreatic β-cell failure.",
    pathophysiology:
      "Peripheral insulin resistance → compensatory hyperinsulinemia → β-cell exhaustion → relative insulin deficiency and sustained hyperglycemia.",
    classicPresentation: [
      "Polyuria, polydipsia, weight loss (if severe)",
      "Obesity, acanthosis nigricans",
      "Adult onset, often asymptomatic initially",
    ],
    keyLabs: [
      "Fasting glucose ≥126 mg/dL or HbA1c ≥6.5%",
      "↑ C-peptide (vs T1DM)",
    ],
    associations: ["Obesity", "Metabolic syndrome", "PCOS", "Family history"],
    complications: [
      "Diabetic nephropathy",
      "Retinopathy",
      "Neuropathy",
      "Atherosclerotic cardiovascular disease",
    ],
    distinguishFrom: [
      "Type 1 DM — lean, young, anti-GAD antibodies, low C-peptide",
      "Steroid-induced hyperglycemia",
    ],
    treatment: [
      "Lifestyle modification; metformin first-line pharmacotherapy",
      "Add GLP-1 agonist or SGLT2 inhibitor for cardiovascular/renal benefit when indicated",
    ],
    boardsPearls: [
      "First-line: metformin (↓ hepatic gluconeogenesis)",
      "SGLT2 inhibitors and GLP-1 agonists have cardiovascular/renal benefit",
      "Microalbuminuria = earliest sign of diabetic nephropathy",
    ],
    pediatrics:
      "Increasingly seen in obese adolescents; distinguish from T1DM with autoantibodies and C-peptide.",
  },
  {
    id: "diabetic-nephropathy",
    name: "Diabetic Nephropathy",
    etymology: "Greek diabainein = pass through + Latin mellitus = honey-sweet + Greek nephros = kidney + Greek pathos = suffering",
    aliases: [
      "diabetic nephropathy",
      "diabetic kidney disease",
      "dkd",
      "diabetic glomerulosclerosis",
      "kimmelstiel-wilson disease",
      "kimmelstiel wilson disease",
    ],
    definition:
      "Microvascular complication of diabetes mellitus causing progressive glomerular injury, proteinuria, and chronic kidney disease.",
    pathophysiology:
      "Chronic hyperglycemia → nonenzymatic glycation, hemodynamic changes (afferent > efferent glomerular vasodilation), and TGF-β/fibrosis → thickening of GBM, mesangial expansion, and nodular glomerulosclerosis (Kimmelstiel-Wilson nodules) → albuminuria → declining GFR.",
    classicPresentation: [
      "Long-standing type 1 or type 2 diabetes",
      "Progressive proteinuria → nephrotic-range in advanced disease",
      "Hypertension and edema as disease advances",
      "Often asymptomatic until CKD or overt proteinuria detected on screening",
    ],
    keyFindings: [
      "Microalbuminuria (earliest detectable sign)",
      "Progressive albuminuria/proteinuria",
      "Hypertension",
      "Retinopathy often coexists (shared microvascular disease)",
      "Kimmelstiel-Wilson nodules on kidney biopsy (late)",
    ],
    keyLabs: [
      "Urine albumin-to-creatinine ratio or 24-h urine protein",
      "↑ serum creatinine with ↓ eGFR in later stages",
      "Hyperglycemia and elevated HbA1c (poor glycemic control accelerates injury)",
    ],
    associations: [
      "Type 1 and type 2 diabetes mellitus",
      "Diabetic retinopathy",
      "Hypertension",
      "Cardiovascular disease",
    ],
    complications: [
      "Chronic kidney disease and end-stage renal disease",
      "Nephrotic syndrome",
      "Accelerated atherosclerosis",
      "Anemia of CKD",
    ],
    distinguishFrom: [
      "Nondiabetic glomerulonephritis — active urinary sediment with RBC casts",
      "Hypertensive nephrosclerosis — long-standing HTN without diabetic retinopathy pattern",
      "Contrast nephropathy — acute creatinine rise after contrast exposure",
    ],
    treatment: [
      "Glycemic control (HbA1c goal individualized)",
      "ACE inhibitor or ARB for albuminuria and renoprotection (even if normotensive with microalbuminuria)",
      "Blood pressure control",
      "SGLT2 inhibitors with proven renal benefit in diabetic CKD",
      "Avoid nephrotoxins (NSAIDs)",
    ],
    boardsPearls: [
      "Microalbuminuria = earliest sign of diabetic nephropathy",
      "ACE inhibitors/ARBs reduce intraglomerular pressure and slow proteinuria",
      "Diabetic nephropathy + retinopathy is classic microvascular pairing",
      "Kimmelstiel-Wilson nodules = nodular glomerulosclerosis in diabetes",
      "Glycemic control and BP control are foundational renoprotective strategies",
    ],
    pediatrics:
      "Diabetic nephropathy is uncommon in childhood but screen with urine albumin once diabetes duration warrants; tight glycemic control from diagnosis delays microvascular complications.",
  },
  {
    id: "type-1-diabetes-mellitus",
    name: "Type 1 Diabetes Mellitus",
    etymology: "Greek diabainein = pass through + Latin mellitus = honey-sweet + type 1 = autoimmune insulin-deficient subtype",
    aliases: [
      "type 1 diabetes mellitus",
      "type 1 diabetes",
      "t1dm",
      "juvenile diabetes",
    ],
    definition:
      "Autoimmune destruction of pancreatic β-cells causing absolute insulin deficiency and hyperglycemia.",
    pathophysiology:
      "T-cell mediated autoimmune attack on β-cells → absolute insulin deficiency → hyperglycemia, lipolysis, and ketogenesis when severe.",
    classicPresentation: [
      "Lean child/young adult with polyuria, polydipsia, weight loss",
      "DKA at presentation common",
      "History of other autoimmune disease",
    ],
    keyLabs: [
      "↑ blood glucose, ↓ C-peptide",
      "Anti-GAD, anti-islet cell antibodies",
      "↑ HbA1c",
    ],
    associations: [
      "HLA-DR3/DR4",
      "Other autoimmune diseases (Hashimoto, celiac)",
    ],
    complications: [
      "DKA",
      "Hypoglycemia with insulin therapy",
      "Microvascular complications",
    ],
    distinguishFrom: [
      "Type 2 DM — obese, insulin resistant, ↑ C-peptide",
      "MODY — autosomal dominant, milder, no autoantibodies",
    ],
    treatment: [
      "Lifelong insulin replacement (basal-bolus regimen)",
      "Intensive glucose control to prevent microvascular complications",
    ],
    boardsPearls: [
      "Absolute insulin deficiency — requires lifelong insulin",
      "DKA: hyperglycemia + anion gap metabolic acidosis + ketones",
      "C-peptide low because endogenous insulin production is absent",
    ],
    pediatrics:
      "Most common endocrine disorder of childhood; DKA is common presenting feature — watch for cerebral edema during treatment.",
  },
  {
    id: "diabetic-ketoacidosis",
    name: "Diabetic Ketoacidosis",
    etymology: "Greek diabainein = pass through + ketone = acetone-like body + Latin acidus = sour + -osis = condition",
    aliases: ["diabetic ketoacidosis", "dka"],
    definition:
      "Acute metabolic emergency of uncontrolled diabetes with hyperglycemia, ketosis, and anion gap metabolic acidosis.",
    pathophysiology:
      "Insulin deficiency → unrestrained lipolysis → ↑ free fatty acids → hepatic ketogenesis → ketoacidosis; hyperglycemia causes osmotic diuresis and dehydration.",
    classicPresentation: [
      "Nausea, vomiting, abdominal pain, Kussmaul respirations",
      "Fruity breath (acetone)",
      "Precipitant: infection, missed insulin, new-onset T1DM",
    ],
    keyLabs: [
      "Glucose >250 mg/dL (usually much higher)",
      "Anion gap metabolic acidosis",
      "↑ serum/urine ketones",
      "↓ serum bicarbonate",
    ],
    complications: [
      "Cerebral edema (especially during treatment in children)",
      "Hypokalemia during insulin therapy",
      "ARDS",
    ],
    distinguishFrom: [
      "Hyperosmolar hyperglycemic state — minimal ketosis, extreme hyperglycemia, T2DM",
      "Starvation ketosis — euglycemic or mild hyperglycemia",
    ],
    treatment: [
      "IV fluids first, then IV insulin infusion",
      "Replace potassium before insulin if K⁺ <3.3 mEq/L; treat precipitating cause",
    ],
    boardsPearls: [
      "Treat: fluids first, then insulin; replace K⁺ when <3.3 mEq/L",
      "Anion gap = Na − (Cl + HCO₃)",
      "Search for precipitant (infection most common)",
    ],
    pediatrics:
      "Cerebral edema is leading cause of DKA mortality in children — avoid overly rapid fluid/insulin correction.",
  },
  {
    id: "hyperosmolar-hyperglycemic-state",
    name: "Hyperosmolar Hyperglycemic State (HHS)",
    etymology: "Greek hyper = excess + osmos = pushing + Latin status = state",
    aliases: [
      "hyperosmolar hyperglycemic state",
      "hhs",
      "hyperosmolar nonketotic coma",
      "hyperosmolar non-ketotic coma",
      "hyperosmolar coma",
      "hyperosmolar hyperglycemic nonketotic state",
      "hyperosmolar hyperglycemic non-ketotic state",
      "hyperosmolar nonketotic state",
      "honks",
      "hnkc",
      "hhns",
    ],
    definition:
      "Acute diabetic emergency with severe hyperglycemia, hyperosmolality, profound dehydration, and minimal or absent ketoacidosis.",
    pathophysiology:
      "Relative insulin deficiency in type 2 diabetes is enough to suppress lipolysis/ketogenesis but not enough to permit glucose uptake → severe hyperglycemia causes osmotic diuresis, free-water loss, hyperosmolality, and altered mental status.",
    classicPresentation: [
      "Older patient with type 2 diabetes, dehydration, weakness, confusion, or coma",
      "Polyuria and polydipsia over days to weeks",
      "Often triggered by infection, MI, stroke, poor access to water, or medication nonadherence",
    ],
    keyFindings: [
      "Severe dehydration, hypotension, tachycardia",
      "Altered mental status correlates with high serum osmolality",
      "No Kussmaul respirations or fruity breath unless mixed DKA/HHS",
    ],
    keyLabs: [
      "Glucose often >600 mg/dL",
      "Serum osmolality >320 mOsm/kg",
      "Minimal ketones, pH usually >7.30, bicarbonate usually >18 mEq/L",
      "High total-body potassium deficit despite normal/high measured K⁺",
    ],
    associations: [
      "Type 2 diabetes mellitus",
      "Infection, MI, stroke, pancreatitis",
      "Glucocorticoids, thiazides, atypical antipsychotics",
      "Elderly or impaired thirst/access to water",
    ],
    complications: [
      "Shock and acute kidney injury from dehydration",
      "Thrombosis from hyperviscosity",
      "Cerebral edema if osmolality corrected too rapidly",
      "High mortality compared with DKA",
    ],
    distinguishFrom: [
      "DKA — absolute insulin deficiency, ketosis, anion gap acidosis, often type 1 diabetes",
      "Diabetes insipidus — hypernatremic dehydration without marked hyperglycemia",
      "Lactic acidosis/sepsis — acidosis prominent without extreme glucose/osmolality pattern",
    ],
    treatment: [
      "Aggressive IV isotonic fluids first",
      "Insulin after initial fluids and potassium assessment",
      "Potassium replacement based on serum K⁺ and renal function",
      "Treat precipitating trigger such as infection or MI",
    ],
    boardsPearls: [
      "HHS = very high glucose/osmolality + dehydration + minimal ketones",
      "Residual insulin blocks ketogenesis, so coma comes from hyperosmolality rather than acidosis",
      "Fluids before insulin — volume deficit is often massive",
      "Measured sodium may be low from hyperglycemia; correct sodium for glucose",
      "Mental status change usually appears when osmolality exceeds ~320 mOsm/kg",
    ],
    pediatrics:
      "HHS is uncommon in children but can occur with type 2 diabetes and obesity; dehydration is profound and cerebral edema risk requires careful correction.",
  },
  {
    id: "graves-disease",
    name: "Graves Disease",
    etymology: "eponym: Robert Graves + disease = disordered function",
    aliases: ["graves disease", "graves' disease", "diffuse toxic goiter"],
    definition:
      "Autoimmune hyperthyroidism from thyroid-stimulating immunoglobulins (TSI) activating the TSH receptor.",
    pathophysiology:
      "TSI mimic TSH → unregulated thyroid hormone synthesis → hyperthyroidism; orbital fibroblasts stimulated → Graves ophthalmopathy.",
    classicPresentation: [
      "Weight loss, heat intolerance, palpitations, tremor",
      "Diffuse goiter with bruit",
      "Exophthalmos, pretibial myxedema",
    ],
    keyFindings: [
      "Diffuse goiter with thrill/bruit",
      "Lid lag, exophthalmos",
      "Fine tremor, warm moist skin",
    ],
    keyLabs: [
      "↓ TSH, ↑ free T4/T3",
      "↑ TSI (thyroid-stimulating immunoglobulin)",
    ],
    associations: ["HLA-DR3", "Other autoimmune diseases"],
    complications: ["Thyroid storm", "Atrial fibrillation", "Osteoporosis"],
    distinguishFrom: [
      "Toxic multinodular goiter — nodular gland, no ophthalmopathy",
      "Subacute thyroiditis — painful thyroid, low uptake",
    ],
    treatment: [
      "Methimazole (or PTU in first trimester pregnancy) for hyperthyroidism",
      "β-blockers for symptomatic relief; definitive: radioactive iodine or thyroidectomy",
    ],
    boardsPearls: [
      "Only cause of hyperthyroidism with ophthalmopathy",
      "Treat: methimazole, radioactive iodine, or surgery",
      "Pretibial myxedema is pathognomonic for Graves",
    ],
    pediatrics:
      "Less common than Hashimoto in children; weight loss and behavioral changes may be presenting features.",
  },
  {
    id: "medullary-thyroid-carcinoma",
    name: "Medullary Thyroid Carcinoma",
    etymology: "Latin medulla = middle/core + Greek thyreos = shield + carcinoma = malignant epithelial tumor",
    aliases: [
      "medullary thyroid carcinoma",
      "medullary thyroid cancer",
      "mtc",
      "c-cell carcinoma",
      "parafollicular c cell carcinoma",
      "calcitonin-secreting thyroid cancer",
    ],
    definition:
      "Neuroendocrine thyroid malignancy arising from parafollicular C cells that secretes calcitonin and is strongly associated with RET mutations and MEN2 syndromes.",
    pathophysiology:
      "Parafollicular C cells, derived from neural crest via the ultimobranchial body, undergo neoplastic transformation. Sporadic disease is often solitary; familial disease is due to germline activating RET mutations. Tumor cells secrete calcitonin and may deposit amyloid stroma derived from calcitonin peptides.",
    classicPresentation: [
      "Painless thyroid nodule or cervical lymphadenopathy",
      "Flushing or watery diarrhea from peptide secretion",
      "Family history of MEN2, pheochromocytoma, or hyperparathyroidism",
      "Hoarseness or dysphagia if locally invasive",
    ],
    keyFindings: [
      "Firm thyroid nodule with possible cervical nodes",
      "Amyloid stroma on histology with malignant C cells",
      "May coexist with mucosal neuromas/marfanoid habitus in MEN2B",
    ],
    keyLabs: [
      "↑ Serum calcitonin — key tumor marker",
      "↑ CEA can follow tumor burden/recurrence",
      "RET mutation testing in patient and first-degree relatives",
      "Screen for pheochromocytoma before thyroid surgery in suspected MEN2",
    ],
    associations: [
      "MEN2A: medullary thyroid carcinoma, pheochromocytoma, parathyroid hyperplasia",
      "MEN2B: medullary thyroid carcinoma, pheochromocytoma, mucosal neuromas, marfanoid habitus",
      "RET proto-oncogene gain-of-function",
      "Amyloid deposition from calcitonin peptides",
    ],
    complications: [
      "Cervical lymph node and distant metastases",
      "Secretory diarrhea and dehydration",
      "Recurrent laryngeal nerve invasion → hoarseness",
      "Hypertensive crisis if unrecognized pheochromocytoma is present during surgery",
    ],
    distinguishFrom: [
      "Papillary thyroid carcinoma — orphan Annie nuclei, psammoma bodies, lymphatic spread, thyroglobulin marker",
      "Follicular thyroid carcinoma — hematogenous spread, capsular/vascular invasion, thyroglobulin marker",
      "Anaplastic thyroid carcinoma — rapidly enlarging invasive mass in older adult",
      "Graves disease — diffuse hyperthyroidism with TSI, not calcitonin-secreting C-cell tumor",
    ],
    treatment: [
      "Total thyroidectomy with lymph node dissection when indicated",
      "Treat pheochromocytoma first if MEN2-associated disease is suspected",
      "RET-targeted therapy for advanced/metastatic RET-mutant disease",
      "Genetic counseling and RET screening of relatives",
    ],
    boardsPearls: [
      "C cells secrete calcitonin; medullary thyroid carcinoma = ↑ calcitonin",
      "MEN2A/2B are RET gain-of-function syndromes with medullary thyroid carcinoma",
      "Amyloid stroma in medullary thyroid carcinoma comes from calcitonin peptides",
      "Always screen for pheochromocytoma before thyroidectomy in MEN2 to avoid catecholamine crisis",
      "Thyroglobulin tracks follicular-derived cancers, not medullary thyroid carcinoma",
    ],
    pediatrics:
      "Familial MEN2 can present in childhood. RET-positive children may need prophylactic thyroidectomy, with timing based on mutation risk; screen family members early.",
  },
  {
    id: "pheochromocytoma",
    name: "Pheochromocytoma",
    etymology: "Greek phaios = dusky + chroma = color + -oma = tumor",
    aliases: [
      "pheochromocytoma",
      "pheochromocytomas",
      "pheo",
      "adrenal pheochromocytoma",
      "catecholamine-secreting tumor",
      "paraganglioma",
      "extra-adrenal pheochromocytoma",
    ],
    definition:
      "Catecholamine-secreting neuroendocrine tumor arising from adrenal medullary chromaffin cells (or extra-adrenal paraganglia), causing episodic or sustained sympathetic hyperactivity.",
    pathophysiology:
      "Tumor secretes epinephrine and/or norepinephrine → episodic or sustained vasoconstriction, tachycardia, and hypertension; catecholamine surges can precipitate hypertensive crisis, arrhythmia, cardiomyopathy, and stroke; associated with germline syndromes (MEN2, NF1, VHL).",
    classicPresentation: [
      "Episodic headache, diaphoresis, palpitations, and severe hypertension",
      "Anxiety, tremor, chest pain during spells",
      "May be sustained hypertension or discovered incidentally",
      "Symptoms triggered by surgery, drugs (beta-blocker before alpha), tyramine-rich foods, or urination (bladder paraganglioma)",
    ],
    keyFindings: [
      "Paroxysmal or labile hypertension",
      "Tachycardia, pallor or flushing during spell",
      "Adrenal mass on CT/MRI (may be bilateral in familial disease)",
    ],
    keyLabs: [
      "↑ Plasma free metanephrines or 24-hour urine metanephrines/catecholamines (preferred screening)",
      "Rule out interfering medications when possible",
      "Genetic testing if young, bilateral, extra-adrenal, or family history (RET, VHL, NF1, SDH genes)",
    ],
    associations: [
      "MEN2A and MEN2B",
      "Neurofibromatosis type 1",
      "Von Hippel–Lindau disease",
      "Familial paraganglioma syndromes (SDHx mutations)",
    ],
    complications: [
      "Hypertensive crisis and stroke",
      "Takotsubo/stress cardiomyopathy",
      "Arrhythmias",
      "Malignant pheochromocytoma (~10%)",
    ],
    distinguishFrom: [
      "Essential hypertension — no catecholamine excess or paroxysmal spells",
      "Hyperthyroidism — heat intolerance, weight loss, ↑ T4/T3",
      "Panic disorder — normal metanephrines between episodes",
      "Carcinoid syndrome — flushing with diarrhea, ↑ 5-HIAA not metanephrines",
    ],
    treatment: [
      "Alpha blockade first (phenoxybenzamine or selective alpha-1 blockers) — mandatory before beta blockade",
      "Volume expansion after alpha blockade",
      "Surgical resection after adequate adrenergic blockade",
      "Never give beta-blocker alone — unopposed alpha worsens hypertension",
    ],
    boardsPearls: [
      "Classic triad: headache, sweating, tachycardia + hypertension",
      "Rule of 10s: ~10% bilateral, extra-adrenal, malignant, familial, pediatric",
      "Alpha before beta — unopposed alpha-1 vasoconstriction if beta blocked first",
      "Screen for pheochromocytoma before thyroid surgery in MEN2",
      "↑ metanephrines are most sensitive screening test",
    ],
    pediatrics:
      "Pheochromocytoma occurs in children with NF1, VHL, and MEN2; genetic testing and bilateral adrenal disease are more common in hereditary cases.",
  },
  {
    id: "hyperparathyroidism",
    name: "Hyperparathyroidism",
    etymology: "Greek hyper = excess + para = beside + thyreos = shield gland + -ism = condition",
    aliases: [
      "hyperparathyroidism",
      "secondary hyperparathyroidism",
      "tertiary hyperparathyroidism",
      "elevated pth",
      "high pth",
      "shpt",
      "parathyroid hyperfunction",
    ],
    definition:
      "Excess parathyroid hormone activity causing disordered calcium–phosphate homeostasis — classified as primary (autonomous gland), secondary (physiologic response to hypocalcemia), or tertiary (autonomous after chronic secondary).",
    pathophysiology:
      "PTH ↑ bone resorption, ↑ renal calcium reabsorption, ↑ 1,25-(OH)₂ vitamin D synthesis, and ↑ phosphate excretion. Primary: parathyroid adenoma/hyperplasia secretes excess PTH → hypercalcemia. Secondary: CKD or vitamin D deficiency → hypocalcemia/hyperphosphatemia drives compensatory PTH ↑. Tertiary: prolonged secondary → nodular hyperplasia with autonomous PTH secretion despite high calcium.",
    classicPresentation: [
      "Primary — often asymptomatic hypercalcemia; stones, bone pain, abdominal pain, depression, fatigue",
      "Secondary — CKD or malabsorption context with bone pain and pruritus",
      "Tertiary — dialysis patient with persistent hypercalcemia and very high PTH",
    ],
    keyFindings: [
      "Hypercalcemia in primary and tertiary disease",
      "Hypocalcemia with elevated PTH in secondary disease",
      "Renal stones, osteopenia/osteitis fibrosa cystica",
      "Subperiosteal bone resorption on hand radiograph (advanced)",
    ],
    keyLabs: [
      "Serum calcium, phosphate, PTH, creatinine, 25-OH vitamin D",
      "Primary: ↑ Ca, ↑ or inappropriately normal PTH, ↓ phosphate",
      "Secondary CKD: ↓ Ca, ↑ phosphate, ↑ PTH",
      "Urine calcium may be elevated in primary disease",
    ],
    associations: [
      "Primary — solitary parathyroid adenoma (most common), four-gland hyperplasia, MEN1, MEN2A",
      "Secondary — chronic kidney disease, vitamin D deficiency, malabsorption",
      "Tertiary — long-standing secondary hyperparathyroidism in ESRD",
      "Renal stones and nephrocalcinosis",
    ],
    complications: [
      "Nephrolithiasis and nephrocalcinosis",
      "Osteoporosis and fragility fractures",
      "Hypercalcemic crisis",
      "Brown tumors (severe bone resorption)",
      "Vascular and soft-tissue calcification in CKD-related disease",
    ],
    distinguishFrom: [
      "Familial hypocalciuric hypercalcemia — mild hypercalcemia, low urinary calcium, benign",
      "Malignancy-associated hypercalcemia — PTHrP or osteolytic metastases; PTH suppressed",
      "Vitamin D toxicity — hypercalcemia with suppressed PTH",
      "Hypoparathyroidism — hypocalcemia with low PTH",
    ],
    treatment: [
      "Primary symptomatic or marked hypercalcemia — parathyroidectomy",
      "Secondary — treat underlying cause; vitamin D repletion; phosphate binders and calcimimetics in CKD",
      "Tertiary refractory disease — parathyroidectomy in selected ESRD patients",
      "Adequate hydration; avoid thiazides in primary hypercalcemia",
    ],
    boardsPearls: [
      "Primary = autonomous gland: ↑ Ca + ↑ PTH + ↓ phosphate (stones, bones, groans, moans)",
      "Secondary = appropriate PTH ↑ from hypocalcemia: CKD (↓ Ca, ↑ phosphate) or vitamin D deficiency",
      "Tertiary = autonomous PTH after long secondary: ↑ Ca + ↑ PTH in ESRD/dialysis patient",
      "MEN1 and MEN2A can include primary hyperparathyroidism",
      "vs malignancy — PTH suppressed in PTHrP-mediated hypercalcemia",
      "vs FHH — benign; low urinary calcium; do not operate",
    ],
    pediatrics:
      "Neonatal severe primary hyperparathyroidism is rare and presents with hypercalcemia and failure to thrive; familial hypocalciuric hypercalcemia is benign and does not need parathyroidectomy.",
  },
  {
    id: "primary-hyperparathyroidism",
    name: "Primary Hyperparathyroidism",
    etymology: "Latin primus = first + Greek hyper = excess + para = beside + thyreos = shield gland + -ism = condition",
    aliases: [
      "primary hyperparathyroidism",
      "primary hyperparathyroidisms",
      "phpt",
      "parathyroid adenoma disease",
      "autonomous hyperparathyroidism",
    ],
    definition:
      "Autonomous overproduction of PTH from parathyroid gland disease causing hypercalcemia — the most common outpatient cause of elevated calcium.",
    pathophysiology:
      "Solitary parathyroid adenoma (most common), four-gland hyperplasia, or rarely parathyroid carcinoma secretes PTH independent of calcium feedback → ↑ bone resorption, ↑ renal calcium reabsorption, ↑ 1,25-(OH)₂ vitamin D, and phosphaturia → hypercalcemia with hypophosphatemia.",
    classicPresentation: [
      "Often asymptomatic hypercalcemia on routine labs",
      "Renal stones, bone pain, abdominal pain, constipation, depression, fatigue",
      "Polyuria and polydipsia from hypercalcemia-induced nephrogenic DI",
    ],
    keyFindings: [
      "Hypercalcemia with elevated or inappropriately normal PTH",
      "Hypophosphatemia",
      "Subperiosteal bone resorption, osteopenia, osteitis fibrosa cystica in advanced disease",
      "Nephrolithiasis or nephrocalcinosis",
    ],
    keyLabs: [
      "Serum calcium, phosphate, PTH, creatinine, 25-OH vitamin D",
      "↑ Ca + ↑ PTH + ↓ phosphate pattern",
      "24-hour urine calcium to distinguish from familial hypocalciuric hypercalcemia",
    ],
    associations: [
      "Solitary parathyroid adenoma (~80–85%)",
      "Four-gland hyperplasia (MEN1, MEN2A, familial isolated hyperparathyroidism)",
      "Parathyroid carcinoma (rare)",
      "Renal stones and bone disease",
    ],
    complications: [
      "Nephrolithiasis and nephrocalcinosis",
      "Osteoporosis and fragility fractures",
      "Brown tumors from severe bone resorption",
      "Hypercalcemic crisis",
    ],
    distinguishFrom: [
      "Secondary hyperparathyroidism — PTH ↑ appropriately from hypocalcemia (CKD, vitamin D deficiency)",
      "Familial hypocalciuric hypercalcemia — mild hypercalcemia, low urinary calcium, benign; do not operate",
      "Malignancy-associated hypercalcemia — PTH suppressed; PTHrP or osteolytic metastases",
      "Vitamin D toxicity — hypercalcemia with suppressed PTH",
    ],
    treatment: [
      "Parathyroidectomy for symptomatic disease or marked hypercalcemia",
      "Observation with hydration in mild asymptomatic selected cases",
      "Avoid thiazide diuretics (worsen hypercalcemia)",
      "Cinacalcet for nonsurgical candidates in selected cases",
    ],
    boardsPearls: [
      "Stones, bones, groans, moans, psychiatric overtones",
      "↑ Ca + ↑ PTH + ↓ phosphate → primary hyperparathyroidism",
      "Solitary adenoma is most common cause",
      "MEN1 and MEN2A can include primary hyperparathyroidism",
      "vs FHH — low urinary calcium; benign; no surgery",
      "Subperiosteal bone resorption on hand X-ray is classic advanced finding",
    ],
    pediatrics:
      "Neonatal severe primary hyperparathyroidism is rare with marked hypercalcemia and failure to thrive; familial hypocalciuric hypercalcemia mimics primary disease but is benign.",
  },
  {
    id: "vitamin-d-toxicity",
    name: "Vitamin D Toxicity",
    etymology: "vitamin = vital amine + D + Greek toxikon = poison",
    aliases: [
      "vitamin d toxicity",
      "vitamin d intoxication",
      "vitamin d overdose",
      "hypervitaminosis d",
      "vitamin d excess",
    ],
    definition:
      "Hypercalcemia from excessive vitamin D (cholecalciferol/ergocalciferol) intake causing increased intestinal calcium absorption and bone resorption, with suppressed PTH.",
    pathophysiology:
      "Excess 25-OH vitamin D → ↑ 1,25-(OH)₂D (within autoregulatory limits initially) and direct hypercalcemia → ↑ intestinal Ca²⁺ absorption and bone mobilization → hypercalciuria, nephrolithiasis, and renal injury; PTH suppressed by hypercalcemia.",
    classicPresentation: [
      "Nausea, vomiting, constipation, polyuria, polydipsia",
      "Confusion, weakness, depressed mood",
      "History of high-dose vitamin D supplementation",
      "Abdominal pain and nephrolithiasis symptoms",
    ],
    keyFindings: [
      "Hypercalcemia on labs",
      "Normal or elevated 25-OH vitamin D (storage form markedly ↑)",
      "Suppressed PTH",
    ],
    keyLabs: [
      "↑ serum calcium",
      "↑ 25-OH vitamin D",
      "↓ or suppressed PTH",
      "Hypercalciuria; ↑ creatinine if nephrocalcinosis/AKI",
    ],
    associations: [
      "Excessive OTC/prescription vitamin D supplementation",
      "Milk-alkali syndrome overlap (calcium + absorbable alkali)",
    ],
    complications: [
      "Acute kidney injury",
      "Nephrolithiasis and nephrocalcinosis",
      "Vascular calcification with chronic exposure",
      "Hypercalcemic crisis",
    ],
    distinguishFrom: [
      "Primary hyperparathyroidism — ↑ PTH, not excess vitamin D intake",
      "Granulomatous disease (sarcoidosis) — macrophage 1α-hydroxylase; ↑ 1,25-(OH)₂D with normal/low 25-OH context",
      "Malignancy-associated hypercalcemia — PTHrP or lytic bone disease; PTH suppressed",
      "Familial hypocalciuric hypercalcemia — mild, lifelong, low urinary Ca",
    ],
    treatment: [
      "Stop vitamin D and calcium supplements",
      "IV normal saline hydration",
      "Calcitonin or bisphosphonates for severe hypercalcemia",
      "Glucocorticoids if granulomatous 1α-hydroxylase-driven (not pure supplement toxicity)",
    ],
    boardsPearls: [
      "Vitamin D toxicity: ↑ Ca + ↑ 25-OH vitamin D + ↓ PTH",
      "vs sarcoid — extrarenal 1α-hydroxylase; may have ↑ 1,25-(OH)₂D with granulomas",
      "vs primary hyperparathyroidism — PTH high, not suppressed",
      "Fat-soluble vitamin — toxicity from chronic excess, not acute single dose usually",
    ],
    pediatrics:
      "Infant vitamin D overdose causes hypercalcemia, failure to thrive, and nephrocalcinosis; keep supplementation within recommended daily intake unless treating deficiency under supervision.",
  },
  {
    id: "thyrotoxicosis",
    name: "Thyrotoxicosis",
    etymology: "Greek thyreos = shield gland + Latin toxicum = poison + -osis = condition",
    aliases: [
      "thyrotoxicosis",
      "thyrotoxic",
      "hyperthyroid state",
      "thyrotoxic state",
    ],
    definition:
      "Clinical syndrome of excess circulating thyroid hormone action causing hypermetabolism — may result from true hyperthyroidism (increased synthesis) or thyrotoxicosis without hyperfunction (e.g., thyroiditis release of stored hormone).",
    pathophysiology:
      "Excess T3/T4 at peripheral tissues → ↑ basal metabolic rate, β-adrenergic sensitivity, and thermogenesis. Graves/ toxic nodule: increased synthesis. Subacute/silent thyroiditis: gland destruction releases preformed hormone with low uptake. High β-hCG (molar pregnancy) can cross-stimulate TSH receptor.",
    classicPresentation: [
      "Weight loss despite increased appetite",
      "Heat intolerance, sweating, warm moist skin",
      "Tachycardia, palpitations, atrial fibrillation (especially elderly)",
      "Tremor, anxiety, insomnia, hyperreflexia",
      "Goiter (Graves, toxic multinodular) or tender thyroid (subacute thyroiditis)",
    ],
    keyFindings: [
      "Fine resting tremor, lid lag (not specific to Graves exophthalmos)",
      "Tachycardia or atrial fibrillation",
      "Diffuse or nodular goiter depending on cause",
    ],
    keyLabs: [
      "↓ TSH (suppressed) with ↑ free T4 and/or T3 in most causes",
      "Thyroid radioiodine uptake: high in Graves/toxic adenoma; low in thyroiditis and factitious thyroxine",
      "↑ TSI in Graves disease",
    ],
    associations: [
      "Graves disease — most common cause overall",
      "Toxic multinodular goiter or toxic adenoma",
      "Subacute (de Quervain) or silent thyroiditis — transient",
      "Thyroid storm — life-threatening severe thyrotoxicosis",
      "Molar pregnancy — β-hCG-mediated stimulation",
    ],
    complications: [
      "Thyroid storm (fever, agitation, tachycardia, heart failure, delirium)",
      "Atrial fibrillation and high-output heart failure",
      "Osteoporosis with chronic excess",
      "Graves ophthalmopathy (Graves-specific)",
    ],
    distinguishFrom: [
      "Graves disease — one cause of thyrotoxicosis with TSI and ophthalmopathy",
      "Thyrotoxicosis factitia — exogenous levothyroxine; low uptake, no goiter, low thyroglobulin",
      "Anxiety/pheochromocytoma — normal thyroid function tests",
      "Euthyroid hyperthyroxinemia (TBG excess) — normal TSH, normal free T4 by equilibrium dialysis",
    ],
    treatment: [
      "β-blockers (propranolol) for adrenergic symptoms",
      "Thionamides (methimazole, PTU) when increased synthesis (Graves, toxic nodule)",
      "Thyroiditis often self-limited — supportive care; avoid antithyroid drugs if low uptake destructive thyroiditis",
      "Thyroid storm: PTU, iodide (after thionamide), β-blocker, glucocorticoids, cooling",
    ],
    boardsPearls: [
      "Thyrotoxicosis = clinical syndrome; hyperthyroidism = increased hormone synthesis (subset)",
      "↓ TSH + ↑ T4/T3 in most causes; uptake distinguishes synthesis vs release",
      "Graves: diffuse uptake, TSI+, ophthalmopathy",
      "Thyroiditis: painful or painless, low uptake, transient hyper then possible hypothyroid phase",
      "Thyroid storm — emergency: PTU, iodine, steroids, propranolol",
    ],
    pediatrics:
      "Neonatal thyrotoxicosis from transplacental TSI in maternal Graves; children may present with behavioral changes, weight loss, and accelerated growth.",
  },
  {
    id: "multiple-endocrine-neoplasia",
    name: "Multiple Endocrine Neoplasia",
    etymology: "Latin multi = many + endocrine = internal secretion + Greek neos = new + plasis = formation",
    aliases: [
      "multiple endocrine neoplasia",
      "multiple endocrine neoplasia syndrome",
      "men syndrome",
      "men syndromes",
      "multiple endocrine neoplasia type 1",
      "multiple endocrine neoplasia type 2",
    ],
    definition:
      "Inherited cancer syndromes featuring development of tumors in multiple endocrine glands, classically MEN1 (MENIN mutation) and MEN2 (RET mutation) families with distinct tumor spectra.",
    pathophysiology:
      "Germline loss-of-function MEN1 or gain-of-function RET mutations confer lifetime risk of characteristic neuroendocrine and endocrine neoplasms; penetrance is high, so screening and prophylactic surgery are central to management.",
    classicPresentation: [
      "Young patient with tumors in multiple endocrine organs",
      "Family history of pituitary, parathyroid, pancreatic, thyroid medullary, or pheochromocytoma disease",
      "Recurrent ulcers (gastrinoma), kidney stones (hyperparathyroidism), or episodic hypertension (pheochromocytoma)",
    ],
    keyFindings: [
      "Multigland endocrine disease pattern matching MEN1 or MEN2",
      "Genetic testing confirms syndrome and guides family screening",
    ],
    keyLabs: [
      "Calcium/PTH, prolactin/IGF-1, gastrin, chromogranin A as syndrome-directed",
      "Calcitonin and catecholamine metabolites in MEN2 workup",
      "Germline MEN1 or RET sequencing",
    ],
    associations: [
      "MEN1 — parathyroid, pituitary, pancreatic neuroendocrine tumors",
      "MEN2 — medullary thyroid carcinoma, pheochromocytoma, hyperparathyroidism (2A)",
      "RET, MEN1, NF1, VHL in broader hereditary endocrine tumor context",
    ],
    complications: [
      "Metastatic neuroendocrine malignancy",
      "Hypertensive crisis from untreated pheochromocytoma",
      "Severe hypercalcemia and peptic disease in MEN1",
    ],
    distinguishFrom: [
      "Sporadic isolated endocrine adenomas — no multigland pattern or family history",
      "MEN1 vs MEN2 — MEN1 lacks medullary thyroid carcinoma; MEN2 centers on RET and C-cell disease",
      "Carney complex, NF1 — other hereditary endocrine tumor syndromes",
    ],
    treatment: [
      "Genetic counseling and cascade family testing",
      "Syndrome-specific surveillance and prophylactic surgery (especially RET-positive thyroidectomy)",
      "Treat pheochromocytoma before other abdominal or thyroid surgery in MEN2",
    ],
    boardsPearls: [
      "MEN1 = 3 P's: Pituitary, Parathyroid, Pancreas (endocrine)",
      "MEN2 = RET + medullary thyroid carcinoma + pheochromocytoma (+ parathyroid in 2A)",
      "Always rule out pheochromocytoma before thyroidectomy in MEN2",
      "MEN1 gene on chromosome 11; RET on chromosome 10",
    ],
    pediatrics:
      "RET mutation carriers may need childhood prophylactic thyroidectomy based on codon risk; MEN1 surveillance begins in adolescence/young adulthood.",
  },
  {
    id: "men-type-1",
    name: "MEN Type 1",
    etymology: "multiple endocrine neoplasia + type 1 + eponym: Paul Wermer framework",
    aliases: [
      "men type 1",
      "men1",
      "men 1",
      "men i",
      "wermer syndrome",
      "multiple endocrine neoplasia type 1",
      "multiple endocrine neoplasia type i",
    ],
    definition:
      "Autosomal dominant syndrome from MEN1 tumor suppressor gene mutation causing multigland hyperplasia and tumors of parathyroid, anterior pituitary, and pancreatic neuroendocrine tissue.",
    pathophysiology:
      "MEN1 (menin) loss-of-function → hyperplasia/neoplasia in parathyroid, pituitary, and enteropancreatic neuroendocrine cells; parathyroid disease is most common and often presents first with hypercalcemia.",
    classicPresentation: [
      "Recurrent nephrolithiasis or hypercalcemia from multigland parathyroid disease",
      "Pituitary adenoma — prolactinoma or acromegaly symptoms",
      "Refractory peptic ulcer disease from gastrinoma (Zollinger-Ellison)",
      "Hypoglycemia from insulinoma",
    ],
    keyFindings: [
      "Hypercalcemia with elevated PTH",
      "Pituitary mass or hormonal excess (prolactin, GH)",
      "Pancreatic neuroendocrine tumor on imaging",
    ],
    keyLabs: [
      "↑ Calcium and PTH",
      "Prolactin, IGF-1, fasting glucose/insulin, gastrin as clinically directed",
      "Germline MEN1 mutation testing",
    ],
    associations: [
      "Primary hyperparathyroidism (most common manifestation)",
      "Prolactinoma and other pituitary adenomas",
      "Gastrinoma (Zollinger-Ellison syndrome)",
      "Insulinoma, VIPoma, glucagonoma (less common)",
      "Carcinoid tumors (bronchial/thymic)",
    ],
    complications: [
      "Severe peptic ulcer disease and diarrhea (gastrinoma/VIPoma)",
      "Hypoglycemic seizures (insulinoma)",
      "Pituitary mass effect and hormone excess complications",
      "Metastatic pancreatic neuroendocrine carcinoma",
    ],
    distinguishFrom: [
      "MEN2 — RET mutation with medullary thyroid carcinoma, not MEN1 tumor spectrum",
      "Sporadic parathyroid adenoma — isolated without pituitary/pancreatic disease",
      "NF1 — pheochromocytoma and neurofibromas, different genetics",
    ],
    treatment: [
      "Parathyroidectomy for symptomatic hyperparathyroidism",
      "Dopamine agonists or surgery for prolactinoma; transsphenoidal surgery for other pituitary adenomas",
      "Somatostatin analogs and surgery for functional pancreatic NETs",
      "Screen first-degree relatives with genetic testing",
    ],
    boardsPearls: [
      "3 P's: Pituitary, Parathyroid, Pancreas (endocrine tumors)",
      "Parathyroid disease is most common and often first manifestation",
      "Gastrinoma → Zollinger-Ellison → recurrent ulcers after PPIs",
      "MEN1 on chromosome 11; menin tumor suppressor",
      "vs MEN2 — no medullary thyroid carcinoma in MEN1",
    ],
    pediatrics:
      "MEN1 screening for carriers often begins in teen years; hyperparathyroidism can present in young adults.",
  },
  {
    id: "men-type-2",
    name: "MEN Type 2",
    etymology: "multiple endocrine neoplasia + type 2 + RET proto-oncogene association",
    aliases: [
      "men type 2",
      "men2",
      "men 2",
      "men ii",
      "multiple endocrine neoplasia type 2",
      "multiple endocrine neoplasia type ii",
      "sipple syndrome",
    ],
    definition:
      "Autosomal dominant RET proto-oncogene gain-of-function syndromes unified by medullary thyroid carcinoma risk and frequent pheochromocytoma, with subtypes MEN2A, MEN2B, and familial medullary thyroid carcinoma.",
    pathophysiology:
      "Activating RET mutations drive C-cell hyperplasia and medullary thyroid carcinoma; adrenal medullary hyperplasia predisposes to pheochromocytoma; MEN2A may include parathyroid hyperplasia, whereas MEN2B features aggressive medullary cancer and mucosal neuromas without typical hyperparathyroidism.",
    classicPresentation: [
      "Thyroid nodule or cervical nodes with ↑ calcitonin",
      "Episodic hypertension, headache, sweating (pheochromocytoma)",
      "Hypercalcemia in MEN2A from parathyroid disease",
      "Mucosal neuromas and marfanoid habitus in MEN2B",
    ],
    keyFindings: [
      "Medullary thyroid carcinoma or C-cell hyperplasia",
      "Adrenal mass or paroxysmal sympathetic spells",
      "Mucosal neuromas (lips, tongue) in MEN2B",
    ],
    keyLabs: [
      "↑ Calcitonin and possible ↑ CEA",
      "Plasma/urine metanephrines before surgery",
      "Calcium/PTH in MEN2A",
      "Germline RET mutation",
    ],
    associations: [
      "Medullary thyroid carcinoma",
      "Pheochromocytoma (often bilateral)",
      "Primary hyperparathyroidism (MEN2A only)",
      "Hirschsprung disease (some RET mutations)",
    ],
    complications: [
      "Hypertensive crisis if pheochromocytoma untreated during surgery",
      "Metastatic medullary thyroid carcinoma",
      "Secretory diarrhea from calcitonin-related peptides",
    ],
    distinguishFrom: [
      "MEN1 — parathyroid/pituitary/pancreatic tumors without RET medullary thyroid carcinoma",
      "Sporadic medullary thyroid carcinoma — no germline RET or multigland syndrome",
      "Papillary thyroid carcinoma — thyroglobulin marker, BRAF/RET fusions in sporadic disease context",
    ],
    treatment: [
      "Treat pheochromocytoma with alpha blockade and resection before thyroid surgery",
      "Total thyroidectomy with node dissection for medullary thyroid carcinoma",
      "Prophylactic thyroidectomy in RET-positive children by risk-stratified timing",
      "Parathyroidectomy for MEN2A hyperparathyroidism when indicated",
    ],
    boardsPearls: [
      "RET gain-of-function on chromosome 10",
      "Always screen for pheochromocytoma before thyroidectomy",
      "Medullary thyroid carcinoma secretes calcitonin — not thyroglobulin",
      "Subtypes: MEN2A, MEN2B, FMTC",
      "MEN2B medullary thyroid carcinoma is more aggressive and presents earlier",
    ],
    pediatrics:
      "RET codon-specific guidelines determine timing of prophylactic thyroidectomy in infancy or childhood; screen for pheochromocytoma before any surgery.",
  },
  {
    id: "men2a",
    name: "MEN2A",
    etymology: "MEN type 2 + subtype A (Sipple syndrome variant)",
    aliases: [
      "men2a",
      "men 2a",
      "men2 a",
      "men iia",
      "men type 2a",
      "multiple endocrine neoplasia type 2a",
      "sipple syndrome",
    ],
    definition:
      "MEN2 subtype featuring medullary thyroid carcinoma, pheochromocytoma, and primary hyperparathyroidism from RET mutation.",
    pathophysiology:
      "RET activation → C-cell neoplasia and adrenal medullary hyperplasia; parathyroid chief-cell hyperplasia causes primary hyperparathyroidism in a subset of MEN2A kindreds.",
    classicPresentation: [
      "Medullary thyroid carcinoma with ↑ calcitonin",
      "Episodic catecholamine symptoms from pheochromocytoma",
      "Asymptomatic hypercalcemia from multigland parathyroid disease",
    ],
    keyFindings: [
      "Thyroid nodule or cervical adenopathy",
      "Paroxysmal hypertension",
      "Hypercalcemia",
    ],
    keyLabs: [
      "↑ Calcitonin",
      "↑ Metanephrines/normetanephrines",
      "↑ Calcium and PTH",
      "RET mutation (often codon 634)",
    ],
    associations: [
      "Bilateral pheochromocytoma risk",
      "Parathyroid hyperplasia",
      "Hirschsprung disease with certain RET mutations",
    ],
    complications: [
      "Intraoperative hypertensive crisis if pheochromocytoma missed",
      "Metastatic medullary thyroid carcinoma",
      "Nephrolithiasis from hyperparathyroidism",
    ],
    distinguishFrom: [
      "MEN2B — mucosal neuromas, marfanoid habitus, usually no hyperparathyroidism",
      "FMTC — medullary thyroid carcinoma only without pheochromocytoma",
      "MEN1 — pancreatic and pituitary tumors, not RET medullary thyroid carcinoma",
    ],
    treatment: [
      "Alpha blockade and pheochromocytoma resection before thyroidectomy",
      "Total thyroidectomy for medullary thyroid carcinoma",
      "Parathyroid surgery when hyperparathyroidism symptomatic",
      "Lifelong surveillance in carriers",
    ],
    boardsPearls: [
      "MEN2A triad: medullary thyroid carcinoma + pheochromocytoma + hyperparathyroidism",
      "Pheochromocytoma first — alpha blockade before thyroid surgery",
      "vs MEN2B — no mucosal neuromas; includes hyperparathyroidism",
      "Calcitonin is tumor marker",
    ],
    pediatrics:
      "Children with RET mutations need age-based thyroidectomy and periodic metanephrine screening.",
  },
  {
    id: "men2b",
    name: "MEN2B",
    etymology: "MEN type 2 + subtype B (mucosal neuroma syndrome)",
    aliases: [
      "men2b",
      "men 2b",
      "men2 b",
      "men iib",
      "men type 2b",
      "multiple endocrine neoplasia type 2b",
      "mucosal neuroma syndrome",
      "marfanoid habitus medullary thyroid carcinoma syndrome",
    ],
    definition:
      "Aggressive MEN2 subtype with early medullary thyroid carcinoma, pheochromocytoma, mucosal neuromas, and marfanoid habitus, usually without hyperparathyroidism.",
    pathophysiology:
      "Specific RET mutations (often codon 918) cause aggressive C-cell malignancy early in life and distinctive mucosal ganglioneuromatosis; pheochromocytoma develops in many patients; parathyroid disease is uncommon compared with MEN2A.",
    classicPresentation: [
      "Young patient with medullary thyroid carcinoma",
      "Thick lips, tongue neuromas, intestinal ganglioneuromatosis",
      "Long limbs and marfanoid habitus without lens dislocation or aortic root dilation",
      "Catecholamine spell symptoms from pheochromocytoma",
    ],
    keyFindings: [
      "Mucosal neuromas on lips and tongue",
      "Marfanoid body habitus",
      "Medullary thyroid carcinoma often in infancy or childhood",
    ],
    keyLabs: [
      "↑ Calcitonin from early age",
      "↑ Metanephrines if pheochromocytoma present",
      "RET mutation (often M918T)",
    ],
    associations: [
      "Aggressive medullary thyroid carcinoma",
      "Pheochromocytoma",
      "Alacrima in some patients",
      "Constipation from intestinal ganglioneuromatosis",
    ],
    complications: [
      "Early metastatic medullary thyroid carcinoma",
      "Hypertensive crisis during surgery if pheochromocytoma untreated",
      "Megacolon from intestinal neuromas",
    ],
    distinguishFrom: [
      "Marfan syndrome — fibrillin-1, lens dislocation, aortic root dilation, no RET mutation",
      "MEN2A — hyperparathyroidism common; lacks mucosal neuroma phenotype",
      "Neurofibromatosis — café-au-lait, neurofibromas, different genetics",
    ],
    treatment: [
      "Early prophylactic thyroidectomy in infancy for known RET M918T",
      "Pheochromocytoma resection after alpha blockade",
      "Genetic counseling and family RET testing",
    ],
    boardsPearls: [
      "MEN2B: medullary thyroid carcinoma + pheochromocytoma + mucosal neuromas + marfanoid habitus",
      "More aggressive medullary thyroid carcinoma than MEN2A — thyroidectomy in infancy for high-risk mutations",
      "Usually NO hyperparathyroidism — key distinction from MEN2A",
      "vs Marfan — marfanoid habitus without lens dislocation/aortic root disease",
    ],
    pediatrics:
      "MEN2B medullary thyroid carcinoma can metastasize in infancy; prophylactic thyroidectomy is recommended within the first year of life for classic RET mutations.",
  },
  {
    id: "familial-medullary-thyroid-carcinoma",
    name: "Familial Medullary Thyroid Carcinoma",
    etymology: "Latin familia = household + medulla + thyroid + carcinoma",
    aliases: [
      "familial medullary thyroid carcinoma",
      "fmtc",
      "men2 fmtc",
      "medullary thyroid carcinoma only syndrome",
    ],
    definition:
      "MEN2 spectrum RET-associated syndrome with medullary thyroid carcinoma as the primary manifestation, without clinically evident pheochromocytoma or parathyroid disease in the kindred.",
    pathophysiology:
      "Germline RET mutations with lower penetrance for non-thyroid components allow medullary thyroid carcinoma to predominate; C-cell hyperplasia progresses to carcinoma over time.",
    classicPresentation: [
      "Family history of medullary thyroid carcinoma without pheochromocytoma",
      "Thyroid nodule with elevated calcitonin",
      "May appear clinically sporadic until family screening performed",
    ],
    keyFindings: [
      "Medullary thyroid carcinoma histology with amyloid stroma",
      "Elevated calcitonin",
    ],
    keyLabs: [
      "↑ Calcitonin",
      "RET germline mutation",
      "Screen metanephrines to exclude MEN2A before labeling FMTC",
    ],
    associations: [
      "RET proto-oncogene mutations",
      "Part of MEN2 spectrum",
    ],
    complications: [
      "Metastatic medullary thyroid carcinoma",
      "Missed pheochromocytoma if inadequate screening",
    ],
    distinguishFrom: [
      "MEN2A — includes pheochromocytoma and hyperparathyroidism in kindred",
      "Sporadic medullary thyroid carcinoma — no germline RET or family history",
      "Papillary thyroid carcinoma — thyroglobulin marker, different histology",
    ],
    treatment: [
      "Total thyroidectomy when medullary thyroid carcinoma diagnosed or prophylactically in carriers",
      "Still screen for pheochromocytoma before surgery",
      "Family RET testing",
    ],
    boardsPearls: [
      "FMTC = medullary thyroid carcinoma-dominant MEN2 subtype",
      "Must exclude pheochromocytoma in patient and family before FMTC diagnosis",
      "RET mutation links all MEN2 subtypes",
      "Calcitonin is surveillance marker",
    ],
    pediatrics:
      "RET-positive children in FMTC families need risk-based prophylactic thyroidectomy timing similar to other MEN2 variants.",
  },
  {
    id: "congenital-adrenal-hyperplasia",
    name: "Congenital Adrenal Hyperplasia",
    etymology: "Latin congenitus = born with + ad = near + renal = kidney + Greek hyper = excess + plasis = formation",
    aliases: [
      "congenital adrenal hyperplasia",
      "cah",
      "adrenogenital syndrome",
      "21-hydroxylase deficiency",
    ],
    definition:
      "Inherited enzyme defect in adrenal steroid synthesis, most commonly 21-hydroxylase deficiency, causing androgen excess and cortisol deficiency.",
    pathophysiology:
      "21-hydroxylase deficiency → ↓ cortisol and aldosterone synthesis → ↑ ACTH → adrenal hyperplasia and shunting to androgen pathway → virilization.",
    classicPresentation: [
      "Salt-wasting crisis in neonate (classic form)",
      "Ambiguous genitalia in 46,XX newborn",
      "Precocious puberty, virilization in older children",
    ],
    keyLabs: [
      "↑ 17-hydroxyprogesterone (diagnostic)",
      "↓ cortisol, ↓ aldosterone (salt-wasting form)",
      "Hyponatremia, hyperkalemia in crisis",
    ],
    associations: ["Autosomal recessive", "HLA-linked"],
    complications: [
      "Adrenal crisis",
      "Short stature if undertreated",
      "Infertility",
    ],
    distinguishFrom: [
      "11β-hydroxylase deficiency — HTN, ↑ 11-deoxycortisol",
      "Androgen-secreting tumor",
    ],
    treatment: [
      "Glucocorticoid replacement (hydrocortisone) to suppress ACTH",
      "Fludrocortisone for salt-wasting form; surgical correction of ambiguous genitalia if needed",
    ],
    boardsPearls: [
      "21-hydroxylase deficiency = 90% of CAH cases",
      "Salt-wasting form: hyponatremia, hyperkalemia, hypotension in neonate",
      "Screen with ↑ 17-OH progesterone on newborn screen",
    ],
    pediatrics:
      "Classic salt-wasting CAH presents in first weeks of life with failure to thrive and electrolyte abnormalities; ambiguous genitalia in 46,XX females.",
  },
  {
    id: "prolactinoma",
    name: "Prolactinoma",
    etymology: "Latin pro = forward + lac = milk + -in = substance + Greek -oma = tumor/mass",
    aliases: ["prolactinoma", "prolactin-secreting pituitary adenoma"],
    definition:
      "Pituitary adenoma secreting prolactin, causing hyperprolactinemia and mass effect on surrounding structures.",
    pathophysiology:
      "Lactotroph adenoma → ↑ prolactin → inhibits GnRH pulsatility → hypogonadism; tumor expansion can compress optic chiasm.",
    classicPresentation: [
      "Galactorrhea and amenorrhea (women)",
      "Decreased libido, impotence, infertility (men)",
      "Bitemporal hemianopia if large macroadenoma",
    ],
    keyLabs: ["↑ serum prolactin (often >200 ng/mL in macroprolactinoma)"],
    keyFindings: ["Bitemporal hemianopia (chiasm compression)", "Galactorrhea"],
    complications: [
      "Infertility",
      "Osteoporosis from hypogonadism",
      "Visual field loss",
    ],
    distinguishFrom: [
      "Pregnancy — physiologic hyperprolactinemia",
      "Dopamine antagonists (antipsychotics) — drug-induced hyperprolactinemia",
      "Hypothyroidism — ↑ TRH stimulates prolactin",
    ],
    treatment: [
      "Dopamine agonists (cabergoline, bromocriptine) — first-line",
      "Transsphenoidal surgery if medical therapy fails or for chiasmal compression",
    ],
    boardsPearls: [
      "Most common functioning pituitary adenoma",
      "First-line treatment: dopamine agonists (cabergoline, bromocriptine)",
      "Macroprolactinoma: prolactin usually >200 ng/mL",
    ],
  },
  {
    id: "hyperprolactinemia",
    name: "Hyperprolactinemia",
    etymology: "Greek hyper = excess + Latin pro = forward + lac = milk + -emia = blood condition",
    aliases: [
      "hyperprolactinemia",
      "elevated prolactin",
      "increased prolactin",
      "high prolactin",
    ],
    definition:
      "Elevated serum prolactin above the reference range, causing lactotroph hormone excess that inhibits hypothalamic GnRH pulsatility and produces reproductive and galactorrheic symptoms when sustained.",
    pathophysiology:
      "Prolactin secretion from anterior pituitary lactotrophs is tonically inhibited by hypothalamic dopamine; disruption of dopamine delivery (stalk effect), dopamine antagonism (drugs), lactotroph adenoma, or TRH stimulation (hypothyroidism) → ↑ prolactin → ↓ GnRH pulsatility → ↓ LH/FSH → hypogonadism.",
    classicPresentation: [
      "Galactorrhea (women and men)",
      "Amenorrhea, oligomenorrhea, or infertility (women)",
      "Decreased libido, erectile dysfunction, gynecomastia (men)",
      "Headache or bitemporal hemianopia if large pituitary mass",
    ],
    keyLabs: [
      "↑ serum prolactin (confirm with repeat; consider macroprolactin assay if mildly elevated)",
      "TSH — hypothyroidism can cause hyperprolactinemia",
      "β-hCG — rule out pregnancy",
      "MRI pituitary if prolactin persistently elevated or neurologic symptoms",
    ],
    keyFindings: [
      "Galactorrhea on expression or spontaneous",
      "Visual field defects with macroadenoma (chiasm compression)",
      "Hypogonadal signs — low estrogen/testosterone effects",
    ],
    associations: [
      "Prolactinoma — most common pathologic cause",
      "Dopamine antagonists — antipsychotics, metoclopramide, verapamil",
      "Primary hypothyroidism — ↑ TRH",
      "Pregnancy and postpartum (physiologic)",
      "Chronic kidney disease — decreased prolactin clearance",
      "Chest wall/nipple stimulation or herpes zoster",
      "Pituitary stalk interruption — non-secretory tumors block dopamine delivery (stalk effect)",
    ],
    complications: [
      "Hypogonadotropic hypogonadism — infertility, osteoporosis",
      "Tumor mass effect — vision loss, headache",
    ],
    distinguishFrom: [
      "Prolactinoma — subset of hyperprolactinemia from lactotroph adenoma; prolactin often very high",
      "Pregnancy — physiologic ↑ prolactin; check β-hCG first in reproductive-age amenorrhea",
      "Macroprolactin (big-big prolactin) — biologically inactive complex; may cause falsely worrisome levels",
      "Functional hypothalamic amenorrhea — low GnRH without elevated prolactin",
    ],
    treatment: [
      "Treat underlying cause — levothyroxine for hypothyroidism, stop offending drug if possible",
      "Dopamine agonists (cabergoline, bromocriptine) for symptomatic hyperprolactinemia or prolactinoma",
      "Surgery/radiation for dopamine-agonist–refractory macroadenomas with mass effect",
      "Estrogen/testosterone replacement if persistent hypogonadism and infertility not desired immediately",
    ],
    boardsPearls: [
      "Galactorrhea + amenorrhea → check prolactin and TSH",
      "Dopamine tonically inhibits prolactin — pituitary stalk lesion can ↑ prolactin without adenoma",
      "Prolactinoma: prolactin often >200 ng/mL with macroadenoma; treat with dopamine agonists first",
      "Antipsychotics block dopamine D2 → drug-induced hyperprolactinemia",
      "Hypothyroidism → ↑ TRH → mild prolactin elevation — correct thyroid before pituitary surgery",
      "vs hyperprolactinemia from prolactinoma — stalk effect usually modest prolactin elevation (<100 ng/mL)",
    ],
    pediatrics:
      "Neonatal physiologic galactororrhea (witch's milk) is benign; adolescents on antipsychotics may develop drug-induced hyperprolactinemia — monitor growth and pubertal progression.",
  },
  {
    id: "galactorrhea",
    name: "Galactorrhea",
    etymology: "Greek gala = milk + rhoia = flow",
    aliases: [
      "galactorrhea",
      "galactorrhoea",
      "nipple discharge milk",
      "abnormal lactation",
      "witch's milk",
      "witches milk",
    ],
    definition:
      "Inappropriate milk secretion from the breast unrelated to recent childbirth or nursing — a clinical sign of prolactin excess or local breast stimulation rather than a primary breast disease.",
    pathophysiology:
      "Prolactin stimulates mammary alveolar cells → milk production; sustained hyperprolactinemia (prolactinoma, stalk effect, dopamine antagonists, hypothyroidism) inhibits GnRH → often coexists with amenorrhea; nipple/chest wall stimulation can cause reflex galactorrhea without markedly elevated prolactin.",
    classicPresentation: [
      "Milky nipple discharge — spontaneous or on expression",
      "Often bilateral; unilateral discharge raises concern for intraductal pathology",
      "Frequently accompanied by amenorrhea, oligomenorrhea, or infertility (women)",
      "May occur in men with hyperprolactinemia (± gynecomastia, ↓ libido)",
      "Headache or visual field loss if pituitary macroadenoma",
    ],
    keyFindings: [
      "Milky discharge on breast exam (distinguish from serous, bloody, or purulent discharge)",
      "Hypogonadal signs — absent menses, low estrogen effects",
      "Visual field testing if pituitary mass suspected",
    ],
    keyLabs: [
      "Serum prolactin — first-line when galactorrhea present",
      "TSH — hypothyroidism can elevate prolactin via ↑ TRH",
      "β-hCG — rule out pregnancy",
      "Macroprolactin assay if prolactin mildly elevated and asymptomatic",
      "MRI pituitary if prolactin persistently elevated or neurologic symptoms",
    ],
    associations: [
      "Hyperprolactinemia — most common pathologic association on boards",
      "Prolactinoma",
      "Dopamine antagonists — antipsychotics, metoclopramide",
      "Primary hypothyroidism",
      "Pregnancy and postpartum lactation (physiologic, not galactorrhea)",
      "Chest wall trauma, herpes zoster, nipple stimulation",
      "Chronic kidney disease — decreased prolactin clearance",
    ],
    distinguishFrom: [
      "Physiologic lactation — recent pregnancy or breastfeeding",
      "Bloody nipple discharge — intraductal papilloma or carcinoma until proven otherwise",
      "Purulent discharge — mastitis or abscess",
      "Serous or green discharge — duct ectasia, fibrocystic change",
      "Pituitary stalk effect — modest prolactin elevation without lactotroph adenoma",
    ],
    treatment: [
      "Treat underlying cause — dopamine agonist for prolactinoma/hyperprolactinemia, levothyroxine for hypothyroidism, discontinue offending drug",
      "Reassurance for physiologic neonatal galactorrhea (witch's milk)",
      "Evaluate unilateral bloody discharge with imaging and possible biopsy",
    ],
    boardsPearls: [
      "Galactorrhea + amenorrhea → check prolactin and TSH before extensive ovarian workup",
      "Hyperprolactinemia inhibits GnRH pulsatility → hypogonadotropic hypogonadism",
      "Dopamine tonically inhibits prolactin — stalk interruption can cause galactorrhea",
      "Milky bilateral discharge + elevated prolactin = hyperprolactinemia; bloody unilateral discharge ≠ galactorrhea",
      "Neonatal witch's milk — transient physiologic prolactin effect; no workup needed",
    ],
    pediatrics:
      "Witch's milk — benign neonatal galactorrhea from maternal estrogen withdrawal; resolves spontaneously. Adolescents with galactorrhea need prolactin/TSH and medication review (antipsychotics); evaluate pubertal delay if amenorrhea coexists.",
  },
  {
    id: "hypopituitarism",
    name: "Hypopituitarism",
    etymology: "Greek hypo = deficient + Latin pituita = phlegm (pituitary) + -ism = condition",
    aliases: [
      "hypopituitarism",
      "anterior pituitary insufficiency",
      "pituitary insufficiency",
      "partial hypopituitarism",
      "panhypopituitarism",
      "pan hypopituitarism",
    ],
    definition:
      "Deficiency of one or more anterior pituitary hormones (GH, ACTH, TSH, LH/FSH, prolactin); panhypopituitarism denotes loss of all anterior hormones.",
    pathophysiology:
      "Destruction, compression, infarction, or infiltration of pituitary lactotrophs, somatotrophs, corticotrophs, thyrotrophs, and gonadotrophs → ↓ trophic hormones → downstream end-organ failure (adrenal, thyroid, gonadal); posterior pituitary (ADH) may be spared or involved depending on cause.",
    classicPresentation: [
      "Fatigue, hypotension, hypoglycemia (ACTH/cortisol deficiency)",
      "Cold intolerance, weight gain, bradycardia (TSH deficiency)",
      "Amenorrhea, loss of libido, infertility (LH/FSH deficiency)",
      "Failure to thrive or short stature in children (GH deficiency)",
      "Galactorrhea uncommon unless hyperprolactinemia from stalk effect",
      "Headache or bitemporal hemianopia if mass lesion",
    ],
    keyLabs: [
      "↓ cortisol with inappropriately low/normal ACTH (secondary adrenal insufficiency)",
      "↓ free T4 with low/normal TSH (central hypothyroidism)",
      "↓ LH/FSH with low estradiol or testosterone (hypogonadotropic hypogonadism)",
      "↓ IGF-1 or failed GH stimulation test (GH deficiency)",
      "MRI pituitary — mass, empty sella, postpartum changes, infiltration",
    ],
    keyFindings: [
      "Pale, thin skin; loss of axillary/pubic hair (gonadal axis)",
      "Hypotension without hyperpigmentation (vs primary Addison)",
      "Bitemporal hemianopia with suprasellar/chiasmal compression",
    ],
    associations: [
      "Pituitary adenoma or apoplexy",
      "Sheehan syndrome (postpartum infarction)",
      "Craniopharyngioma, meningioma, glioma",
      "Pituitary surgery or radiation",
      "Traumatic brain injury / pituitary stalk transection",
      "Hemochromatosis, lymphocytic hypophysitis, sarcoidosis (infiltration)",
      "Empty sella syndrome",
    ],
    complications: [
      "Adrenal crisis if glucocorticoid replacement omitted before thyroid hormone",
      "Infertility, osteoporosis from hypogonadism",
      "Growth failure in children",
    ],
    distinguishFrom: [
      "Primary adrenal insufficiency (Addison) — hyperpigmentation, ↑ ACTH",
      "Primary hypothyroidism — ↑ TSH",
      "Primary hypogonadism — ↑ LH/FSH",
      "Functional hypothalamic amenorrhea — isolated GnRH suppression without panhypopituitarism",
    ],
    treatment: [
      "Replace deficient hormones: glucocorticoids first, then thyroid hormone, then sex steroids/GH as indicated",
      "Treat underlying cause (surgery for mass, dopamine agonist if prolactinoma)",
      "Stress-dose steroids during illness/surgery if ACTH deficient",
    ],
    boardsPearls: [
      "Give glucocorticoids BEFORE levothyroxine — thyroid replacement ↑ cortisol metabolism → adrenal crisis",
      "Secondary adrenal insufficiency: ↓ cortisol, ACTH low/normal, NO hyperpigmentation",
      "Sheehan syndrome = postpartum hypopituitarism from pituitary infarction",
      "Empty sella on imaging with hormone deficiencies → chronic hypopituitarism",
      "Panhypopituitarism = all anterior hormones lost; posterior (ADH) may still function",
    ],
    pediatrics:
      "GH deficiency presents with growth failure and delayed bone age; congenital hypopituitarism may include midline defects (septo-optic dysplasia); neonatal ACTH deficiency can cause hypoglycemia and jaundice.",
  },
  {
    id: "sheehan-syndrome",
    name: "Sheehan Syndrome",
    etymology: "eponym: Harold Leeming Sheehan + syndrome = running together of findings",
    aliases: [
      "sheehan syndrome",
      "sheehan's syndrome",
      "postpartum pituitary necrosis",
      "postpartum hypopituitarism",
      "postpartum panhypopituitarism",
    ],
    definition:
      "Postpartum ischemic infarction and necrosis of the pituitary gland from severe blood loss and hypotension during or after childbirth, causing hypopituitarism.",
    pathophysiology:
      "Pregnancy enlarges the pituitary (lactotroph hyperplasia); postpartum hemorrhage and shock → pituitary arterial spasm/infarction → necrosis of anterior pituitary → loss of ACTH, TSH, GH, LH/FSH (and sometimes ADH if infarct extensive).",
    classicPresentation: [
      "History of postpartum hemorrhage with hypotension",
      "Failure to lactate (prolactin deficiency) — early clue",
      "Amenorrhea, loss of pubic/axillary hair",
      "Fatigue, cold intolerance, weight changes months to years later",
      "Adrenal insufficiency symptoms if ACTH loss",
    ],
    keyLabs: [
      "↓ prolactin, ↓ ACTH/cortisol, ↓ TSH/free T4, ↓ LH/FSH",
      "MRI — empty sella or shrunken pituitary; no functioning adenoma",
    ],
    keyFindings: [
      "Agalactia after delivery",
      "Signs of hypopituitarism without hyperpigmentation",
    ],
    associations: [
      "Massive postpartum hemorrhage",
      "Home or resource-limited delivery without transfusion support",
      "Coexisting DIC or severe anemia",
    ],
    complications: [
      "Adrenal crisis",
      "Infertility and osteoporosis",
      "Delayed diagnosis when presentation is remote from delivery",
    ],
    distinguishFrom: [
      "Lymphocytic hypophysitis — autoimmune; may also present postpartum but different pathology",
      "Prolactinoma — ↑ prolactin, not failure to lactate",
      "Primary ovarian failure — ↑ LH/FSH, not low",
    ],
    treatment: [
      "Lifelong hormone replacement (glucocorticoids, thyroid, sex steroids/GH as needed)",
      "Obstetric hemorrhage prevention and prompt resuscitation prevent Sheehan",
    ],
    boardsPearls: [
      "Postpartum hemorrhage + failure to lactate + amenorrhea → Sheehan syndrome",
      "Ischemic pituitary necrosis — not a tumor",
      "Agalactia distinguishes from physiologic lactation failure from other causes",
      "May present years later with insidious hypopituitarism",
    ],
    pediatrics:
      "Sheehan affects the mother after childbirth, not the neonate; subsequent pregnancies require endocrine optimization and stress-dose steroids if ACTH deficient.",
  },
  {
    id: "hemochromatosis",
    name: "Hemochromatosis",
    etymology: "Greek haima = blood + Greek chroma = color + -osis = condition (iron overload darkens tissues)",
    aliases: [
      "hemochromatosis",
      "hereditary hemochromatosis",
      "hfe hemochromatosis",
      "bronze diabetes",
      "iron overload",
      "primary hemochromatosis",
    ],
    definition:
      "Disorder of systemic iron overload from increased intestinal iron absorption and parenchymal deposition, most commonly hereditary (HFE C282Y mutation).",
    pathophysiology:
      "Mutated HFE (or other iron-regulatory defects) → inappropriately ↑ hepcidin suppression and intestinal iron absorption → iron accumulates in liver, heart, pancreas, pituitary, joints, skin → organ dysfunction (cirrhosis, cardiomyopathy, diabetes, hypogonadism).",
    classicPresentation: [
      "Middle-aged man with fatigue, arthralgia (especially 2nd/3rd MCP joints)",
      "Bronze skin hyperpigmentation",
      "Diabetes mellitus (pancreatic iron deposition — bronze diabetes)",
      "Hepatomegaly, cirrhosis, hepatocellular carcinoma risk",
      "Hypogonadism, cardiomyopathy, arrhythmias",
    ],
    keyLabs: [
      "↑ serum ferritin",
      "↑ transferrin saturation (>45% screens; >60% highly suggestive)",
      "↑ serum iron; genetic testing — HFE C282Y homozygosity (most common)",
      "Liver biopsy or MRI for iron quantification when diagnosis uncertain",
    ],
    keyFindings: [
      "Arthritis of 2nd and 3rd metacarpophalangeal joints",
      "Skin bronzing",
      "Signs of cirrhosis or heart failure in advanced disease",
    ],
    associations: [
      "HFE C282Y homozygosity (autosomal recessive; low penetrance in women)",
      "Hypopituitarism — gonadotroph and somatotroph iron damage",
      "HCC in cirrhotic hemochromatosis",
      "Secondary hemochromatosis from chronic transfusion (thalassemia major, sickle cell)",
    ],
    complications: [
      "Cirrhosis and hepatocellular carcinoma",
      "Restrictive/dilated cardiomyopathy",
      "Diabetes mellitus",
      "Hypogonadotropic hypogonadism",
    ],
    distinguishFrom: [
      "Anemia of chronic disease — ferritin ↑ but transferrin saturation usually normal/low",
      "Alcoholic liver disease — may ↑ ferritin without iron overload saturation pattern",
      "Secondary iron overload — transfusion history",
    ],
    treatment: [
      "Therapeutic phlebotomy to reduce iron stores",
      "Treat organ complications; avoid iron/vitamin C supplements",
      "Chelation (deferoxamine, deferasirox) when phlebotomy not tolerated",
    ],
    boardsPearls: [
      "HFE C282Y homozygote + ↑ ferritin + ↑ transferrin saturation = hereditary hemochromatosis",
      "Bronze diabetes = skin hyperpigmentation + diabetes from pancreatic iron",
      "2nd/3rd MCP arthritis is classic hand finding",
      "Iron overload can cause hypopituitarism — check gonadal and adrenal axes",
      "Phlebotomy is treatment of choice for primary disease",
    ],
    pediatrics:
      "Juvenile hemochromatosis (HJV/HAMP mutations) presents earlier with severe cardiomyopathy and hypogonadism; neonatal hemochromatosis is a distinct fulminant neonatal iron overload syndrome.",
  },
  {
    id: "lymphocytic-hypophysitis",
    name: "Lymphocytic Hypophysitis",
    etymology: "Latin lympha = water + Greek kytos = cell + Greek hypo = under + physis = growth (pituitary) + -itis = inflammation",
    aliases: [
      "lymphocytic hypophysitis",
      "autoimmune hypophysitis",
      "lymphoid hypophysitis",
      "adenohypophysitis",
    ],
    definition:
      "Autoimmune inflammation of the pituitary gland with lymphocytic infiltration, causing mass effect and progressive hypopituitarism — often associated with pregnancy or postpartum period.",
    pathophysiology:
      "Autoimmune lymphocytic infiltration of anterior pituitary (and sometimes infundibulum/stalk) → enlargement on imaging and destruction of hormone-secreting cells → variable hypopituitarism; may mimic adenoma on MRI.",
    classicPresentation: [
      "Headache and visual field defects (chiasm compression from enlarged pituitary)",
      "Hyperprolactinemia from stalk effect (loss of dopamine inhibition)",
      "Symptoms of ACTH, TSH, or gonadotropin deficiency",
      "Peripartum or postpartum woman (classic demographic)",
    ],
    keyLabs: [
      "Variable pituitary hormone deficiencies on dynamic testing",
      "↑ prolactin possible from stalk effect (modest elevation)",
      "MRI — homogeneously enhancing pituitary enlargement, stalk thickening",
    ],
    keyFindings: [
      "Bitemporal hemianopia with suprasellar extension",
      "Signs of hypopituitarism without Cushingoid features of functional adenoma",
    ],
    associations: [
      "Pregnancy and postpartum period",
      "Other autoimmune diseases (autoimmune thyroiditis, type 1 diabetes)",
      "Ipilimumab/nivolumab immune checkpoint inhibitor use (immune-related hypophysitis)",
    ],
    complications: [
      "Permanent hypopituitarism after inflammation subsides",
      "Visual loss from chiasmal compression",
    ],
    distinguishFrom: [
      "Pituitary adenoma — usually discrete mass; hormone hypersecretion more common",
      "Sheehan syndrome — postpartum hemorrhage history, ischemic necrosis not lymphocytic infiltration",
      "Craniopharyngioma — suprasellar calcification, bimodal age",
      "Sarcoidosis/granulomatous infiltration — systemic granulomas, ↑ ACE",
    ],
    treatment: [
      "High-dose glucocorticoids for acute inflammation and mass effect",
      "Hormone replacement for deficiencies",
      "Surgery if vision threatened and steroids fail",
    ],
    boardsPearls: [
      "Postpartum woman + enlarged pituitary + hypopituitarism → lymphocytic hypophysitis on differential",
      "Stalk thickening + modest hyperprolactinemia suggests stalk effect, not prolactinoma",
      "Autoimmune pituitary inflammation — treat with steroids",
      "vs Sheehan — hemorrhagic infarction, not lymphocytic infiltration",
    ],
    pediatrics:
      "Rare in children; when it occurs, presents with growth failure and pituitary enlargement — exclude adenoma and craniopharyngioma; immune checkpoint–related hypophysitis increasingly recognized in adolescent oncology survivors.",
  },
  {
    id: "pituitary-infiltration",
    name: "Pituitary infiltration",
    etymology: "Latin pituita = phlegm (pituitary) + Latin infiltratio = permeation into tissue",
    aliases: [
      "pituitary infiltration",
      "infiltrative hypopituitarism",
      "infiltrative pituitary disease",
      "granulomatous hypophysitis",
      "sarcoidosis of the pituitary",
    ],
    definition:
      "Replacement of normal pituitary tissue by infiltrating cells (granulomas, histiocytes, malignant cells, or iron-laden macrophages), causing mass effect and hypopituitarism.",
    pathophysiology:
      "Systemic infiltrative disease seeds pituitary/hypothalamic tissue → destruction and compression of normal endocrine cells → partial or panhypopituitarism; stalk involvement may cause diabetes insipidus or hyperprolactinemia from dopamine blockade.",
    classicPresentation: [
      "Headache, visual field loss",
      "Diabetes insipidus (posterior pituitary or stalk involvement)",
      "Signs of hypopituitarism (fatigue, hypogonadism, adrenal insufficiency)",
      "Systemic features of underlying disease (cough, skin lesions, lymphadenopathy)",
    ],
    keyLabs: [
      "Variable anterior pituitary hormone deficiencies",
      "Hypernatremia/polyuria if central DI",
      "↑ ACE (sarcoidosis), biopsy showing granulomas or histiocytes",
      "MRI — stalk thickening, homogenous enhancement, absent discrete adenoma",
    ],
    keyFindings: [
      "Diabetes insipidus + anterior pituitary failure suggests infiltrative/stalk disease",
      "Bitemporal hemianopia with diffuse pituitary enlargement",
    ],
    associations: [
      "Sarcoidosis",
      "Langerhans cell histiocytosis",
      "Tuberculosis",
      "Hemochromatosis (iron deposition)",
      "Metastatic carcinoma (breast, lung) to pituitary",
      "Wegener granulomatosis (granulomatosis with polyangiitis)",
    ],
    complications: [
      "Permanent hypopituitarism",
      "Visual loss",
      "Progression of systemic infiltrative disease",
    ],
    distinguishFrom: [
      "Pituitary adenoma — discrete enhancing nodule, hormone hypersecretion common",
      "Lymphocytic hypophysitis — lymphocytic infiltrate, peripartum predilection",
      "Sheehan syndrome — ischemic necrosis after hemorrhage",
      "Craniopharyngioma — cystic/suprasellar mass with calcification",
    ],
    treatment: [
      "Treat underlying disease (steroids for sarcoid, anti-TB therapy, chemotherapy for malignancy)",
      "Hormone replacement for pituitary deficiencies",
      "Desmopressin for central diabetes insipidus",
    ],
    boardsPearls: [
      "DI + anterior hypopituitarism → think stalk infiltration (sarcoid, histiocytosis, metastasis)",
      "Sarcoidosis can infiltrate hypothalamus/pituitary → ↑ ACE, bilateral hilar lymphadenopathy",
      "Infiltrative disease mimics adenoma on MRI — look for stalk thickening and systemic clues",
      "Hemochromatosis causes iron infiltration → hypogonadism and diabetes",
    ],
    pediatrics:
      "Langerhans cell histiocytosis may present in children with DI and bony lesions; central DI in a child warrants MRI and workup for infiltrative causes beyond idiopathic DI.",
  },
  {
    id: "cushing-syndrome",
    name: "Cushing Syndrome",
    etymology: "eponym: Harvey Cushing + syndrome = running together of findings",
    aliases: ["cushing syndrome", "cushing's syndrome", "hypercortisolism"],
    definition:
      "Clinical syndrome of excess cortisol from endogenous overproduction or exogenous glucocorticoid administration.",
    pathophysiology:
      "Excess cortisol → protein catabolism, gluconeogenesis, immunosuppression; ACTH-dependent (pituitary adenoma, ectopic ACTH) vs ACTH-independent (adrenal adenoma/carcinoma).",
    classicPresentation: [
      "Central obesity, moon facies, buffalo hump",
      "Purple striae, thin skin, easy bruising",
      "Proximal muscle weakness, hyperglycemia",
    ],
    keyLabs: [
      "↑ late-night salivary cortisol or 24-h urine free cortisol",
      "Abnormal low-dose dexamethasone suppression test",
      "ACTH level distinguishes ACTH-dependent vs independent",
    ],
    associations: [
      "Pituitary adenoma (Cushing disease — most common endogenous cause)",
      "Ectopic ACTH (small cell lung cancer)",
      "Exogenous steroids",
    ],
    distinguishFrom: [
      "Cushing disease — pituitary ACTH adenoma, ACTH dependent",
      "Pseudo-Cushing — depression, alcoholism",
      "Obesity alone — no purple striae or proximal weakness",
    ],
    treatment: [
      "Transsphenoidal surgery for pituitary adenoma; adrenalectomy for adrenal tumor",
      "Ketoconazole or metyrapone for cortisol synthesis inhibition while localizing source",
    ],
    boardsPearls: [
      "Exogenous steroids = most common cause overall",
      "Purple striae >1 cm wide are specific",
      "High-dose dex suppression: pituitary source suppresses; ectopic/adrenal does not",
    ],
  },
  {
    id: "addison-disease",
    name: "Addison Disease",
    etymology: "eponym: Thomas Addison + disease = disordered function",
    aliases: [
      "addison disease",
      "addison's disease",
      "primary adrenal insufficiency",
    ],
    definition:
      "Primary adrenal insufficiency from destruction of the adrenal cortex, causing deficiency of cortisol and aldosterone.",
    pathophysiology:
      "Autoimmune adrenalitis (most common) → ↓ cortisol and aldosterone → hypotension, hyperkalemia, hyponatremia; ↑ ACTH → hyperpigmentation.",
    classicPresentation: [
      "Fatigue, weight loss, postural hypotension",
      "Hyperpigmentation (palms, buccal mucosa, scars)",
      "Salt craving",
    ],
    keyLabs: [
      "↓ cortisol, ↑ ACTH",
      "Hyponatremia, hyperkalemia",
      "↑ eosinophils",
    ],
    associations: [
      "Autoimmune polyglandular syndromes",
      "TB (worldwide)",
      "Adrenal hemorrhage (Waterhouse-Friderichsen)",
    ],
    complications: ["Adrenal crisis — shock, hypoglycemia, death"],
    distinguishFrom: [
      "Secondary adrenal insufficiency — ↓ ACTH, no hyperpigmentation, no hyperkalemia",
      "Chronic fatigue syndrome — normal electrolytes",
    ],
    treatment: [
      "Glucocorticoid (hydrocortisone) and mineralocorticoid (fludrocortisone) replacement",
      "IV hydrocortisone emergently for adrenal crisis",
    ],
    boardsPearls: [
      "Hyperpigmentation from ↑ ACTH (MSH activity)",
      "Hyperkalemia distinguishes primary from secondary insufficiency",
      "Adrenal crisis: hydrocortisone + fluids immediately",
    ],
  },
  {
    id: "hyperaldosteronism",
    name: "Hyperaldosteronism",
    etymology: "hyper- = excess + aldosterone mineralocorticoid hormone + -ism = condition",
    aliases: [
      "hyperaldosteronism",
      "hyperaldosteronisms",
      "aldosteronism",
      "aldosterone excess",
      "excess aldosterone",
      "primary hyperaldosteronism",
      "primary aldosteronism",
      "secondary hyperaldosteronism",
      "secondary aldosteronism",
    ],
    definition:
      "Pathologic excess of aldosterone causing renal Na⁺ retention, K⁺ wasting, and H⁺ excretion — presenting with hypertension and often hypokalemia and metabolic alkalosis — classified as primary (autonomous adrenal secretion) or secondary (renin-driven).",
    pathophysiology:
      "↑ Aldosterone acts on mineralocorticoid receptors in collecting duct → ENaC-mediated Na⁺ reabsorption and K⁺/H⁺ secretion → volume expansion, hypertension, hypokalemia, metabolic alkalosis. Primary forms suppress renin; secondary forms have ↑ renin from perceived hypoperfusion or low effective arterial volume.",
    classicPresentation: [
      "Resistant hypertension in adult",
      "Muscle weakness or cramps from hypokalemia (may be absent with mild disease)",
      "Polyuria/polydipsia from hypokalemia-induced nephrogenic DI-like effect",
      "Headache; often asymptomatic except elevated BP",
    ],
    keyLabs: [
      "↑ aldosterone with ↓ renin → primary hyperaldosteronism",
      "↑ aldosterone with ↑ renin → secondary hyperaldosteronism",
      "Hypokalemia and metabolic alkalosis (not required for diagnosis)",
      "Saline suppression test or captopril challenge for confirmation",
    ],
    associations: [
      "Adrenal adenoma or bilateral adrenal hyperplasia (primary)",
      "Renal artery stenosis, diuretics, heart failure, cirrhosis (secondary)",
      "Liddle syndrome mimics with low aldosterone (ENaC gain-of-function)",
      "Glucocorticoid-remediable aldosteronism (familial hybrid gene)",
    ],
    complications: [
      "Resistant hypertension and cardiovascular remodeling",
      "Severe hypokalemia — weakness, arrhythmias",
      "Target organ damage (LVH, stroke risk)",
    ],
    distinguishFrom: [
      "Conn syndrome — eponym for classic primary hyperaldosteronism, often adrenal adenoma",
      "Essential hypertension — normal aldosterone/renin ratio",
      "Renovascular hypertension — secondary with ↑ renin and ↑ aldosterone",
      "Apparent mineralocorticoid excess (licorice, 11β-HSD2 deficiency) — low aldosterone",
      "Cushing syndrome — cortisol can activate mineralocorticoid receptor",
    ],
    treatment: [
      "Primary unilateral adenoma — laparoscopic adrenalectomy",
      "Bilateral hyperplasia — spironolactone or eplerenone (MRA)",
      "Secondary — treat underlying cause (revascularization, diuretic adjustment)",
    ],
    boardsPearls: [
      "Hypertension + hypokalemia → think hyperaldosteronism (but normokalemia does not exclude)",
      "↓ renin + ↑ aldosterone = primary; ↑ renin + ↑ aldosterone = secondary",
      "Spironolactone/eplerenone block mineralocorticoid receptor",
      "Adrenal vein sampling localizes unilateral vs bilateral primary disease",
      "vs Liddle — low renin hypertension with low aldosterone",
    ],
    pediatrics:
      "Primary hyperaldosteronism is rare in children; consider glucocorticoid-remediable aldosteronism in young hypertensive patients with family history. Secondary forms occur with renal artery stenosis or heart failure.",
  },
  {
    id: "conn-syndrome",
    name: "Conn Syndrome",
    etymology: "eponym: Jerome Conn + syndrome = running together of findings",
    aliases: [
      "conn syndrome",
      "conn's syndrome",
      "conns syndrome",
      "aldosterone-producing adenoma",
      "apa",
    ],
    definition:
      "Primary hyperaldosteronism — autonomous aldosterone secretion from the adrenal cortex (classically aldosterone-producing adenoma) causing hypertension with renin suppression, often with hypokalemia and metabolic alkalosis.",
    pathophysiology:
      "Aldosterone-secreting adrenal adenoma or bilateral zona glomerulosa hyperplasia → uninhibited mineralocorticoid activity → Na⁺ retention, K⁺ and H⁺ loss → hypertension; negative feedback suppresses plasma renin.",
    classicPresentation: [
      "Middle-aged patient with resistant hypertension",
      "Episodic muscle weakness from hypokalemia",
      "Headache; may be clinically silent except elevated BP",
      "No edema despite sodium retention (aldosterone escape at kidney)",
    ],
    keyLabs: [
      "↑ plasma aldosterone, ↓ plasma renin activity",
      "Hypokalemia, metabolic alkalosis",
      "Elevated aldosterone-to-renin ratio as screening test",
      "CT adrenal gland; adrenal vein sampling if surgery contemplated",
    ],
    associations: [
      "Aldosterone-producing adenoma (classic Conn adenoma)",
      "Bilateral idiopathic hyperplasia (also primary hyperaldosteronism)",
      "Familial hyperaldosteronism types I–III",
    ],
    complications: [
      "Cardiovascular hypertensive damage",
      "Severe hypokalemia and arrhythmia",
    ],
    distinguishFrom: [
      "Secondary hyperaldosteronism — ↑ renin (renal artery stenosis, diuretics)",
      "Essential hypertension — normal aldosterone/renin",
      "Cushing syndrome — cortisol excess, not isolated aldosterone",
      "Liddle syndrome — low aldosterone, ENaC mutation",
      "Hyperaldosteronism — broader umbrella including secondary causes",
    ],
    treatment: [
      "Unilateral adenoma — adrenalectomy",
      "Bilateral disease — mineralocorticoid receptor antagonist (spironolactone, eplerenone)",
      "Correct hypokalemia before surgery",
    ],
    boardsPearls: [
      "Conn = primary hyperaldosteronism classic boards association",
      "↓ renin + ↑ aldosterone + hypertension — screen with aldosterone-renin ratio",
      "Unilateral adenoma → surgery; bilateral hyperplasia → spironolactone",
      "Hypokalemia supports diagnosis but many patients are normokalemic",
      "vs renovascular HTN — both have high aldosterone but Conn has suppressed renin",
    ],
    pediatrics:
      "Rare in children; familial forms (e.g., glucocorticoid-remediable aldosteronism) should be considered in pediatric hypertension workup.",
  },
  {
    id: "zollinger-ellison-syndrome",
    name: "Zollinger-Ellison Syndrome",
    etymology: "eponyms: Zollinger + Ellison + syndrome = running together of findings",
    aliases: ["zollinger-ellison syndrome", "zes", "gastrinoma"],
    definition:
      "Gastrin-secreting neuroendocrine tumor (gastrinoma) causing refractory peptic ulcer disease and diarrhea.",
    pathophysiology:
      "Gastrinoma → ↑ gastrin → parietal cell hyperstimulation → massive acid secretion → multiple/refractory ulcers and diarrhea.",
    classicPresentation: [
      "Multiple or refractory peptic ulcers",
      "Diarrhea",
      "Ulcers in atypical locations (jejunum)",
      "PPI-resistant symptoms",
    ],
    keyLabs: [
      "↑ fasting gastrin (>1000 pg/mL highly suggestive)",
      "↑ gastric acid secretion",
      "Secretin stimulation test: paradoxical ↑ gastrin",
    ],
    associations: [
      "MEN 1 (gastrinoma + parathyroid + pituitary)",
      "Duodenal/jejunal ulcers",
    ],
    distinguishFrom: [
      "Routine PUD — H. pylori, NSAIDs; responds to PPI",
      "Retained antrum syndrome",
    ],
    treatment: [
      "High-dose PPIs to control acid secretion",
      "Surgical resection of gastrinoma; screen for MEN 1",
    ],
    boardsPearls: [
      "Think ZES: multiple ulcers + diarrhea + PPI resistance",
      "MEN 1: parathyroid hyperplasia most common manifestation",
      "Secretin normally ↓ gastrin; gastrinoma paradoxically ↑ gastrin",
    ],
  },
  {
    id: "celiac-disease",
    name: "Celiac Disease",
    etymology: "Greek koiliakos = abdominal + disease = disordered function",
    aliases: ["celiac disease", "celiac sprue", "gluten-sensitive enteropathy"],
    definition:
      "Immune-mediated enteropathy triggered by gluten ingestion in genetically predisposed individuals.",
    pathophysiology:
      "Gluten → T-cell mediated damage to small bowel mucosa → villous atrophy → malabsorption; associated with HLA-DQ2/DQ8.",
    classicPresentation: [
      "Chronic diarrhea, bloating, weight loss",
      "Iron deficiency anemia, osteoporosis",
      "Dermatitis herpetiformis (pruritic vesicles on extensor surfaces)",
    ],
    keyLabs: [
      "↑ anti-tissue transglutaminase (tTG) IgA",
      "↓ IgA — check total IgA (false negative if IgA deficient)",
      "Duodenal biopsy: villous atrophy",
    ],
    associations: [
      "HLA-DQ2/DQ8",
      "Type 1 diabetes",
      "Down syndrome",
      "Dermatitis herpetiformis",
    ],
    complications: ["Malnutrition", "Osteoporosis", "T-cell lymphoma (rare)"],
    distinguishFrom: [
      "Tropical sprue — travel history, responds to antibiotics",
      "Crohn disease — transmural inflammation, skip lesions",
    ],
    treatment: [
      "Strict lifelong gluten-free diet",
      "Correct nutritional deficiencies (iron, B12, vitamin D)",
    ],
    boardsPearls: [
      "tTG IgA is screening test of choice",
      "Dermatitis herpetiformis: IgA deposits at dermal papillae",
      "Treatment: lifelong gluten-free diet",
    ],
    pediatrics:
      "May present with failure to thrive, short stature, or delayed puberty; screen if T1DM or Down syndrome.",
  },
  {
    id: "rickets",
    name: "Rickets",
    etymology: "origin uncertain; possibly Old English wricken = twist (bowed legs)",
    aliases: [
      "rickets",
      "vitamin d deficiency rickets",
      "nutritional rickets",
      "renal rickets",
      "hypophosphatemic rickets",
    ],
    definition:
      "Disorder of defective mineralization of growth plate (physeal) cartilage in children, most commonly from vitamin D deficiency but also from phosphate wasting or resistance, causing skeletal deformity and growth impairment.",
    pathophysiology:
      "Low vitamin D and/or phosphate → impaired calcium and phosphate availability for hydroxyapatite deposition at metaphyseal growth plates → unmineralized osteoid accumulates → widened, irregular physes and soft bones; secondary hyperparathyroidism worsens bone resorption.",
    classicPresentation: [
      "Leg bowing (genu varum), waddling gait in toddler",
      "Rachitic rosary — palpable enlargement of costochondral junctions",
      "Frontal bossing and delayed fontanelle closure in infants",
      "Bone pain, muscle weakness, growth delay",
      "Breastfed infant without vitamin D supplementation; limited sun exposure",
    ],
    keyFindings: [
      "Widened wrists and ankles (metaphyseal enlargement)",
      "Harrison groove from diaphragmatic pull on softened ribs",
      "Craniotabes — softening of skull occiput and parietals in infants",
    ],
    keyLabs: [
      "↓ 25-OH vitamin D (nutritional deficiency)",
      "↓ serum calcium and phosphate (variable by cause)",
      "↑ alkaline phosphatase",
      "↑ PTH (secondary hyperparathyroidism)",
      "X-ray: cupping, fraying, and splaying of metaphyses (especially wrists and knees)",
    ],
    associations: [
      "Vitamin D deficiency — low sun, breast milk without supplementation, dark skin, malabsorption (celiac, CF)",
      "Renal osteodystrophy / renal rickets — failed 1α-hydroxylation in CKD",
      "X-linked hypophosphatemic rickets — phosphate wasting (PHEX mutation)",
      "Prematurity and exclusive breastfeeding without vitamin D",
    ],
    complications: [
      "Skeletal deformities (bowlegs, pelvic deformity)",
      "Growth retardation",
      "Hypocalcemic seizures in severe deficiency (infants)",
      "Osteomalacia in adults (same mineralization defect in mature bone)",
    ],
    distinguishFrom: [
      "Osteomalacia — adult equivalent of defective bone mineralization without open physes",
      "Blount disease — tibia vara from physeal growth disturbance, not systemic rickets",
      "Physiologic bowing — symmetric, mild, resolves with walking",
      "Achondroplasia — disproportionate short stature with normal mineralization",
    ],
    treatment: [
      "Vitamin D and calcium supplementation for nutritional deficiency",
      "Treat underlying malabsorption or CKD",
      "Phosphate and calcitriol for hypophosphatemic/renal forms",
    ],
    boardsPearls: [
      "Rickets = children; osteomalacia = adults — both defective mineralization",
      "↑ ALP + ↓ vitamin D + leg bowing in toddler = classic rickets",
      "X-ray: metaphyseal cupping/fraying/splaying at wrists and knees",
      "Breastfed infants need vitamin D 400 IU/day",
      "Renal rickets: failed 1,25-(OH)₂D production in CKD — treat with active vitamin D",
    ],
    pediatrics:
      "Rickets is primarily a pediatric diagnosis; breastfed infants, preterm infants, and children with malabsorption are highest risk; leg bowing and rachitic rosary are classic exam findings.",
  },
  {
    id: "osteomalacia",
    name: "Osteomalacia",
    etymology: "Greek osteon = bone + malakia = softness",
    aliases: [
      "osteomalacia",
      "adult rickets",
      "soft bones",
      "vitamin d deficiency osteomalacia",
    ],
    definition:
      "Disorder of defective mineralization of mature bone matrix (osteoid) in adults, most commonly from vitamin D deficiency, causing bone pain, weakness, and fracture risk.",
    pathophysiology:
      "Insufficient vitamin D, calcium, or phosphate → impaired hydroxyapatite deposition on osteoid seams → accumulated unmineralized osteoid → soft, weak bones; secondary hyperparathyroidism increases bone resorption.",
    classicPresentation: [
      "Diffuse bone pain and proximal muscle weakness",
      "Difficulty rising from chair or climbing stairs",
      "Waddling gait",
      "Fractures with minimal trauma",
      "Often insidious in elderly, malnourished, or housebound adults",
    ],
    keyFindings: [
      "Tenderness over ribs, pelvis, and thighs",
      "Pseudofractures (Looser zones) on X-ray — radiolucent bands perpendicular to cortex",
    ],
    keyLabs: [
      "↓ 25-OH vitamin D",
      "↓ serum calcium and phosphate (variable)",
      "↑ alkaline phosphatase",
      "↑ PTH (secondary hyperparathyroidism)",
    ],
    associations: [
      "Vitamin D deficiency — limited sun, malabsorption (celiac, bariatric surgery), elderly",
      "Chronic kidney disease — failed calcitriol synthesis (renal osteodystrophy overlap)",
      "Anticonvulsants inducing vitamin D metabolism",
      "Tumor-induced osteomalacia (FGF23-mediated phosphate wasting) — rare boards pearl",
    ],
    complications: [
      "Pathologic fractures (hip, ribs, pelvis)",
      "Hypocalcemic tetany or seizures in severe deficiency",
      "Progressive debility from pain and weakness",
    ],
    distinguishFrom: [
      "Rickets — same mineralization defect in children with open physes and growth plate changes",
      "Osteoporosis — reduced bone mass with normal mineralization; no Looser zones",
      "Osteitis fibrosa cystica — hyperparathyroidism with subperiosteal resorption and brown tumors",
      "Multiple myeloma — lytic lesions, CRAB features",
    ],
    treatment: [
      "Vitamin D and calcium repletion",
      "Treat underlying malabsorption or CKD with active vitamin D (calcitriol) when indicated",
      "Phosphate supplementation if phosphate-wasting cause",
    ],
    boardsPearls: [
      "Osteomalacia = adults; rickets = children — both defective mineralization",
      "Looser zones (pseudofractures) on X-ray are classic",
      "↑ ALP + ↓ vitamin D + bone pain → osteomalacia",
      "vs osteoporosis — osteoporosis is low bone density with normal mineralization",
    ],
    pediatrics:
      "Osteomalacia is primarily an adult diagnosis; children with the same defect present as rickets with physeal changes.",
  },
  {
    id: "osteoporosis",
    name: "Osteoporosis",
    etymology: "Greek osteon = bone + poros = passage/pore + -osis = condition",
    aliases: [
      "osteoporosis",
      "primary osteoporosis",
      "postmenopausal osteoporosis",
      "senile osteoporosis",
      "low bone density",
      "fragility fracture",
      "fragility fractures",
    ],
    definition:
      "Systemic skeletal disease of reduced bone mass and microarchitectural deterioration, increasing fragility fracture risk.",
    pathophysiology:
      "Imbalance favoring osteoclast-mediated bone resorption over osteoblast formation → trabecular thinning and cortical porosity → weakened bone; estrogen deficiency after menopause removes restraint on osteoclasts; aging and glucocorticoids accelerate loss.",
    classicPresentation: [
      "Often asymptomatic until fracture",
      "Height loss and kyphosis from vertebral compression fractures",
      "Hip or wrist fracture after low-energy trauma",
      "Back pain from vertebral collapse",
    ],
    keyFindings: [
      "Loss of height (>2 cm) or thoracic kyphosis",
      "T-score ≤ −2.5 on DEXA defines osteoporosis",
      "Vertebral wedge/compression fractures on imaging",
    ],
    keyLabs: [
      "DEXA bone mineral density (BMD)",
      "↑ alkaline phosphatase during fracture healing only",
      "Evaluate secondary causes if young or atypical: TSH, calcium, 25-OH vitamin D, SPEP, testosterone",
    ],
    associations: [
      "Postmenopausal estrogen deficiency",
      "Advanced age",
      "Glucocorticoid use",
      "Hyperparathyroidism, hyperthyroidism, malabsorption",
      "Rheumatoid arthritis, anorexia, chronic immobilization",
      "Cushing syndrome, hypogonadism",
    ],
    complications: [
      "Hip fracture — high morbidity and mortality in elderly",
      "Vertebral compression fractures — chronic pain, deformity",
      "Loss of independence and functional decline",
    ],
    distinguishFrom: [
      "Osteomalacia — defective mineralization, Looser zones, ↓ vitamin D",
      "Osteopetrosis — abnormally dense brittle bone from failed resorption",
      "Paget disease — focal accelerated remodeling with ↑ ALP and mosaic bone",
      "Multiple myeloma — lytic lesions, anemia, renal dysfunction",
    ],
    treatment: [
      "Bisphosphonates (alendronate, zoledronate) — first-line antiresorptive therapy",
      "Calcium and vitamin D supplementation",
      "Denosumab (RANKL inhibitor), teriparatide (anabolic) in selected cases",
      "Fall prevention, weight-bearing exercise, smoking/alcohol cessation",
    ],
    boardsPearls: [
      "T-score ≤ −2.5 on DEXA = osteoporosis; −1.0 to −2.5 = osteopenia",
      "Postmenopausal estrogen loss → ↑ osteoclast activity",
      "Glucocorticoids cause osteoporosis — bisphosphonate prophylaxis with prolonged use",
      "Vertebral compression fracture + low trauma → think osteoporosis",
      "vs osteomalacia — osteoporosis has normal mineralization of remaining matrix",
    ],
    pediatrics:
      "Primary osteoporosis is rare in children; consider secondary causes (glucocorticoids, anorexia, immobilization, juvenile idiopathic osteoporosis). Rickets is the pediatric mineralization disorder, not osteoporosis.",
  },
  {
    id: "paget-disease-of-bone",
    name: "Paget Disease of Bone",
    etymology: "eponym: Sir James Paget + disease = disordered function",
    aliases: [
      "paget disease of bone",
      "paget disease",
      "paget's disease of bone",
      "pagets disease of bone",
      "osteitis deformans",
    ],
    definition:
      "Focal disorder of accelerated, disorganized bone remodeling causing enlarged, weakened, mosaic-pattern bone with complications in skull, spine, pelvis, and long bones.",
    pathophysiology:
      "Initial osteoclast-driven lytic phase → mixed osteoblastic-osteoclastic chaotic remodeling → dense sclerotic mosaic lamellar bone with poor mechanical strength; increased vascularity in active lesions.",
    classicPresentation: [
      "Often asymptomatic; discovered on ↑ ALP or incidental imaging",
      "Bone pain, warmth over affected site",
      "Increased hat size, skull enlargement",
      "Hearing loss from skull/otic capsule involvement",
      "Bowing of weight-bearing bones (tibia, femur)",
    ],
    keyFindings: [
      "Localized bone enlargement and deformity",
      "Mixed lytic and sclerotic lesions on X-ray (cotton wool skull)",
      "Marked ↑ alkaline phosphatase with normal calcium and phosphate",
    ],
    keyLabs: [
      "↑ ALP (marker of disease activity)",
      "Normal calcium, phosphate, PTH in uncomplicated disease",
      "Bone scan or MRI for extent of active disease",
    ],
    associations: [
      "Older age (rare before 40)",
      "Pelvis, skull, spine, femur, tibia common sites",
      "High-output heart failure if extensive active disease (rare)",
    ],
    complications: [
      "Pathologic fracture through pagetic bone",
      "Secondary osteosarcoma (rare but serious)",
      "Deafness, basilar invagination (skull)",
      "High-output cardiac failure in polyostotic active disease",
    ],
    distinguishFrom: [
      "Metastatic bone disease — multifocal lytic/blastic lesions, primary malignancy history",
      "Osteoporosis — diffuse low density, not focal mosaic remodeling",
      "Primary hyperparathyroidism — hypercalcemia, subperiosteal resorption",
      "Fibrous dysplasia — ground-glass lesions in young patients",
    ],
    treatment: [
      "Bisphosphonates (zoledronate, risedronate) or calcitonin for active symptomatic disease",
      "Analgesia and orthopedic management of deformity/fracture",
      "Monitor for sarcomatous transformation",
    ],
    boardsPearls: [
      "Paget = chaotic osteoclast/osteoblast coupling → mosaic bone",
      "↑ ALP with normal Ca/Phos in older adult → Paget until proven otherwise",
      "Skull enlargement + hearing loss classic",
      "Secondary osteosarcoma is feared complication",
      "vs osteoporosis — Paget is focal remodeling disorder, not diffuse bone loss",
    ],
    pediatrics:
      "Paget disease of bone is almost exclusively an adult disorder; juvenile Paget is a separate rare genetic condition.",
  },
  {
    id: "osteosarcoma",
    name: "Osteosarcoma",
    etymology: "Greek osteon = bone + sarx = flesh + -oma = tumor",
    aliases: [
      "osteosarcoma",
      "osteosarcomas",
      "osteogenic sarcoma",
      "osteogenic sarcomas",
      "bone osteosarcoma",
    ],
    definition:
      "Primary malignant bone tumor producing osteoid by malignant osteoblasts, classically arising in the metaphysis of long bones in adolescents.",
    pathophysiology:
      "Malignant osteoblastic proliferation in metaphysis → destructive lytic/blastic lesion with periosteal elevation → hematogenous spread to lungs; associated with RB1 and TP53 mutations; prior radiation and Paget disease increase risk.",
    classicPresentation: [
      "Adolescent with progressive bone pain and swelling",
      "Distal femur, proximal tibia, or proximal humerus (metaphyseal location)",
      "Night pain, may mimic infection but usually lacks high fever",
      "Pathologic fracture possible",
    ],
    keyFindings: [
      "Tender firm mass over metaphysis",
      "X-ray: destructive lesion with sunburst periosteal reaction and Codman triangle",
      "MRI defines marrow and soft tissue extent",
    ],
    keyLabs: [
      "↑ alkaline phosphatase (tumor marker of bone formation)",
      "Biopsy required for diagnosis — do not proceed to amputation without tissue diagnosis",
      "Staging CT chest for pulmonary metastases",
    ],
    associations: [
      "Teenage growth spurt",
      "Li-Fraumeni syndrome (TP53), hereditary retinoblastoma (RB1)",
      "Paget disease of bone and prior radiation (adult forms)",
    ],
    complications: [
      "Pulmonary metastases (most common site)",
      "Pathologic fracture",
      "Local recurrence after inadequate margins",
    ],
    distinguishFrom: [
      "Ewing sarcoma — diaphyseal, onion-skin periosteal reaction, t(11;22)",
      "Osteomyelitis — fever, ↑ ESR/CRP, metaphyseal infection in child",
      "Osteoid osteoma/osteoblastoma — benign, nidus with night pain relieved by NSAIDs (osteoid osteoma)",
      "Metastatic carcinoma to bone — older adults, breast/prostate/lung primaries",
    ],
    treatment: [
      "Neoadjuvant chemotherapy plus limb-sparing surgery or amputation",
      "Resection with wide margins; pulmonary metastasectomy in selected cases",
    ],
    boardsPearls: [
      "Peak age: teenage growth spurt",
      "Metaphysis of distal femur/proximal tibia most common",
      "Sunburst periosteal reaction + Codman triangle",
      "Malignant osteoid production defines osteosarcoma",
      "Lungs are common metastatic site",
    ],
    pediatrics:
      "Most common primary malignant bone tumor in children/adolescents; suspect in teen with persistent metaphyseal bone pain and mass.",
  },
  {
    id: "ewing-sarcoma",
    name: "Ewing Sarcoma",
    etymology: "eponym: James Ewing + Greek sarx = flesh + -oma = tumor",
    aliases: [
      "ewing sarcoma",
      "ewing's sarcoma",
      "ewing sarcoma of bone",
      "ewing family of tumors",
      "primitive neuroectodermal tumor of bone",
      "pnet bone",
    ],
    definition:
      "Malignant small round blue cell tumor of bone or soft tissue, typically in children and adolescents, characterized by t(11;22) EWSR1-FLI1 translocation.",
    pathophysiology:
      "EWS-FLI1 fusion oncogene drives proliferation of undifferentiated small round cells → diaphyseal marrow invasion with onion-skin layered periosteal reaction → early hematogenous metastases to lungs and bone.",
    classicPresentation: [
      "Child or adolescent with localized bone pain, swelling, and sometimes fever",
      "Diaphysis of femur, tibia, or pelvis common",
      "May mimic osteomyelitis (fever, elevated inflammatory markers)",
      "Soft tissue mass may be prominent",
    ],
    keyFindings: [
      "Tender swelling over diaphyseal lesion",
      "X-ray: permeative lytic lesion with onion-skin (lamellated) periosteal reaction",
      "MRI shows marrow replacement and extraosseous extension",
    ],
    keyLabs: [
      "Biopsy shows sheets of small round blue cells",
      "Cytogenetics/FISH: t(11;22) EWSR1-FLI1 fusion",
      "↑ LDH correlates with tumor burden",
      "Staging imaging for pulmonary metastases",
    ],
    associations: [
      "Peak incidence in second decade of life",
      "White population predominance",
      "Part of Ewing family of tumors (PNET, Askin tumor of chest wall)",
    ],
    complications: [
      "Pulmonary and bone marrow metastases",
      "Pathologic fracture",
      "Treatment-related sequelae (chemotherapy, radiation)",
    ],
    distinguishFrom: [
      "Osteosarcoma — metaphyseal, osteoid production, sunburst/Codman triangle",
      "Osteomyelitis — cultures, clinical response to antibiotics; can be difficult to separate",
      "Acute lymphoblastic leukemia — marrow involvement, not solitary bone tumor",
      "Lymphoma of bone — older adults more common for primary bone lymphoma",
    ],
    treatment: [
      "Multimodality: systemic chemotherapy plus local control (surgery and/or radiation)",
      "Prognosis depends on metastatic status at diagnosis",
    ],
    boardsPearls: [
      "Small round blue cell tumor of bone in child/teen",
      "t(11;22) EWS-FLI1 translocation is hallmark",
      "Onion-skin periosteal reaction on X-ray",
      "Diaphyseal location favors Ewing over osteosarcoma (metaphysis)",
      "Can mimic osteomyelitis — biopsy required",
    ],
    pediatrics:
      "Classic pediatric/adolescent bone malignancy; persistent diaphyseal bone pain with mass or fever warrants imaging and biopsy to distinguish from infection.",
  },
  {
    id: "meckel-diverticulum",
    name: "Meckel Diverticulum",
    etymology: "eponym: Johann Meckel + Latin divertere = turn aside/outpouch",
    aliases: ["meckel diverticulum", "meckel's diverticulum"],
    definition:
      "True diverticulum from persistence of the vitelline (omphalomesenteric) duct, most common congenital GI anomaly.",
    pathophysiology:
      "Remnant of vitelline duct → ileal diverticulum may contain ectopic gastric mucosa → acid secretion → ulceration and painless rectal bleeding.",
    classicPresentation: [
      "Painless rectal bleeding in child (maroon stools)",
      "Rule of 2s: 2% population, 2 feet from ileocecal valve, 2 inches long, 2 types ectopic tissue, 2 years old",
      "Intussusception or obstruction",
    ],
    keyFindings: [
      "Technetium-99m pertechnetate scan (Meckel scan) — detects ectopic gastric mucosa",
    ],
    associations: ["Ectopic gastric or pancreatic mucosa"],
    complications: [
      "GI bleeding",
      "Intussusception",
      "Volvulus",
      "Diverticulitis",
    ],
    distinguishFrom: [
      "Intussusception — currant jelly stools, sausage-shaped mass",
      "Juvenile polyps — colonoscopy finding",
    ],
    treatment: [
      "Surgical resection if bleeding, obstruction, or intussusception",
      "Meckel scan guides diagnosis; supportive care for uncomplicated cases",
    ],
    boardsPearls: [
      "Rule of 2s is classic boards fodder",
      "Meckel scan detects ectopic gastric mucosa",
      "Most common congenital GI anomaly",
    ],
    pediatrics:
      "Most common cause of significant lower GI bleeding in children <2 years; painless bleeding is hallmark.",
  },
  {
    id: "wilson-disease",
    name: "Wilson Disease",
    etymology: "eponym: Samuel Alexander Kinnier Wilson + disease = disordered function",
    aliases: [
      "wilson disease",
      "wilson's disease",
      "hepatolenticular degeneration",
    ],
    definition:
      "Autosomal recessive disorder of copper metabolism causing toxic copper accumulation in liver, brain, and cornea.",
    pathophysiology:
      "ATP7B mutation → impaired biliary copper excretion → copper accumulation → hepatocyte injury, basal ganglia damage, Kayser-Fleischer rings.",
    classicPresentation: [
      "Young patient with hepatitis, cirrhosis, or neuropsychiatric symptoms",
      "Tremor, personality change, dysarthria",
      "Hemolytic anemia",
    ],
    keyFindings: [
      "Kayser-Fleischer rings (copper deposition in Descemet membrane)",
    ],
    keyLabs: [
      "↓ ceruloplasmin",
      "↑ urinary copper excretion",
      "↑ hepatic copper on biopsy",
    ],
    associations: ["Autosomal recessive", "ATP7B gene on chromosome 13"],
    complications: [
      "Cirrhosis",
      "Hepatocellular carcinoma",
      "Neurologic disability",
    ],
    distinguishFrom: [
      "Hemochromatosis — bronze diabetes, ↑ ferritin, HFE mutation",
      "Autoimmune hepatitis — autoantibodies, normal copper studies",
    ],
    treatment: [
      "Copper chelation: D-penicillamine or trientine",
      "Zinc acetate blocks intestinal copper absorption",
    ],
    boardsPearls: [
      "↓ ceruloplasmin + Kayser-Fleischer rings in young patient with liver disease",
      "Treat with chelators (penicillamine, trientine) or zinc",
      "Avoid copper-containing foods and multivitamins",
    ],
    pediatrics:
      "May present in adolescence with acute liver failure or neuropsychiatric symptoms; screen siblings.",
  },
  {
    id: "alkaptonuria",
    name: "Alkaptonuria",
    etymology: "Greek alkapton = nitrogenous substance that absorbs strongly + ouron = urine",
    aliases: [
      "alkaptonuria",
      "aku",
      "homogentisic aciduria",
    ],
    definition:
      "Autosomal recessive inborn error of phenylalanine and tyrosine catabolism caused by homogentisate oxidase deficiency, with homogentisic acid accumulation and urine that darkens on standing.",
    pathophysiology:
      "HGD gene mutation → deficient homogentisate oxidase → block after homogentisic acid in aromatic amino acid pathway → homogentisic acid accumulates in blood and urine → oxidation on standing turns urine black; chronic deposition of oxidized pigment in connective tissue causes ochronosis.",
    classicPresentation: [
      "Dark or black urine on standing or alkalinization (often noted in infancy)",
      "Otherwise well in childhood; progressive ochronosis in adulthood",
      "Chronic back pain and ochronotic arthritis in 3rd–4th decade",
      "Bluish-black pigmentation of sclera and ear cartilage",
    ],
    keyFindings: [
      "Urine turns black on exposure to air",
      "Ochronotic pigmentation of sclera, ears, nose, hands",
      "Degenerative arthritis of spine and large joints",
      "Aortic and mitral valve calcification/narrowing in later disease",
    ],
    keyLabs: [
      "↑ homogentisic acid in urine (pathognomonic)",
      "Normal phenylalanine if PAH intact — block is downstream of tyrosine catabolism",
    ],
    associations: [
      "Autosomal recessive",
      "HGD gene — homogentisate oxidase",
      "Shared pathway: phenylalanine → tyrosine → homogentisic acid",
    ],
    complications: [
      "Ochronosis",
      "Spondyloarthropathy and joint destruction",
      "Calcific valvular heart disease",
      "Renal stones (homogentisic acid pigmentation)",
    ],
    distinguishFrom: [
      "Phenylketonuria — ↑ phenylalanine, musty odor, intellectual disability; PAH deficiency",
      "Melanuria — myoglobin or homogentisic acid from other causes; alkaptonuria is lifelong AR defect",
      "Ochronosis from phenol exposure — exogenous, no homogentisic aciduria",
    ],
    treatment: [
      "No curative Step 1 therapy — supportive joint care",
      "High-dose vitamin C and dietary protein restriction have limited evidence",
      "Monitor cardiac valves and renal function",
    ],
    boardsPearls: [
      "Homogentisate oxidase deficiency → homogentisic acid accumulates",
      "Phenylalanine and tyrosine are the amino acids whose catabolic pathway is blocked",
      "Urine turns black on standing — classic buzzword",
      "Benign in childhood; ochronotic arthritis and valvular disease in adulthood",
      "Autosomal recessive; not PKU (that is phenylalanine hydroxylase)",
    ],
    pediatrics:
      "Often asymptomatic in childhood except dark urine on diaper exposure to air; ochronosis and arthritis develop in adulthood.",
  },
  {
    id: "ochronosis",
    name: "Ochronosis",
    etymology: "Greek ochros = pale yellow + -osis = condition (pigment appears yellow-brown microscopically)",
    aliases: [
      "ochronosis",
      "ochronotic arthritis",
      "endogenous ochronosis",
    ],
    definition:
      "Tissue deposition of blue-black oxidized homogentisic acid pigment in connective tissue, classically from alkaptonuria but also rarely from exogenous phenolic compounds.",
    pathophysiology:
      "Chronic homogentisic acid exposure → oxidation and polymerization in cartilage, sclera, heart valves, and skin → brittle ochronotic pigment deposits → accelerated degenerative arthritis and valvular calcification.",
    classicPresentation: [
      "Bluish-black sclera and ear/nasal cartilage pigmentation",
      "Progressive low back pain and stiffness",
      "Large-joint arthropathy resembling osteoarthritis but with early severe spine involvement",
      "History of dark urine on standing if endogenous (alkaptonuria)",
    ],
    keyFindings: [
      "Ochronotic pigmentation of sclera (Osler sign)",
      "Blackened ear cartilage and tendons",
      "Calcified aortic/mitral valves on imaging",
      "Degenerative changes of intervertebral discs and large joints",
    ],
    associations: [
      "Alkaptonuria — most common cause on boards",
      "Exogenous phenol/resorcinol exposure — rare dermatologic cause",
    ],
    complications: [
      "Severe spondyloarthropathy",
      "Valvular heart disease and coronary calcification",
      "Renal and prostatic stone pigmentation",
    ],
    distinguishFrom: [
      "Osteoarthritis — lacks scleral/cartilage pigmentation and dark urine history",
      "Ankylosing spondylitis — inflammatory sacroiliitis, HLA-B27 association",
      "Exogenous ochronosis — hydroquinone or phenol creams, no homogentisic aciduria",
    ],
    treatment: [
      "Treat underlying alkaptonuria if present",
      "Joint replacement for severe arthropathy",
      "Cardiac surveillance for valvular disease",
    ],
    boardsPearls: [
      "Ochronosis = connective tissue pigment deposition from homogentisic acid",
      "Think alkaptonuria when ochronosis + black urine on standing",
      "Spine and large joints affected; may need valve replacement",
      "Endogenous vs exogenous: alkaptonuria has homogentisic aciduria",
    ],
    pediatrics:
      "Pediatric ochronosis is uncommon; pigmentation may be subtle until adulthood unless severe alkaptonuria.",
  },
  {
    id: "phenylketonuria",
    name: "Phenylketonuria",
    etymology: "phenyl = benzene ring + ketone + ouron = urine",
    aliases: [
      "phenylketonuria",
      "pku",
      "phenylalanine hydroxylase deficiency",
      "hyperphenylalaninemia",
    ],
    definition:
      "Autosomal recessive disorder of phenylalanine metabolism caused by phenylalanine hydroxylase (or tetrahydrobiopterin cofactor) deficiency, leading to toxic phenylalanine accumulation and intellectual disability if untreated.",
    pathophysiology:
      "PAH gene mutation (or BH₄ pathway defect) → inability to convert phenylalanine to tyrosine → ↑ phenylalanine and phenylketones in blood/urine → neurotoxicity → impaired myelination and cognitive development; hypopigmentation from ↓ melanin substrate (tyrosine).",
    classicPresentation: [
      "Intellectual disability if untreated",
      "Musty or mousy body odor",
      "Fair hair, blue eyes, hypopigmentation",
      "Eczema",
      "Seizures in severe untreated disease",
    ],
    keyFindings: [
      "Elevated phenylalanine on newborn screen",
      "Musty odor",
      "Developmental delay without dietary treatment",
    ],
    keyLabs: [
      "↑ phenylalanine (newborn screen and confirmatory)",
      "Normal or low tyrosine if PAH deficient",
      "Distinguish BH₄ defects with pterin studies if atypical",
    ],
    associations: [
      "Autosomal recessive",
      "PAH gene on chromosome 12",
      "Maternal PKU risks fetal teratogenicity if mother is not diet-controlled during pregnancy",
    ],
    complications: [
      "Intellectual disability",
      "Microcephaly",
      "Seizures",
      "Maternal PKU embryopathy (congenital heart defects, growth restriction)",
    ],
    distinguishFrom: [
      "Alkaptonuria — dark urine on standing, ochronosis; homogentisate oxidase defect downstream of tyrosine",
      "Maple syrup urine disease — sweet urine, BCAA accumulation, neonatal encephalopathy",
      "BH₄ deficiency — PKU-like hyperphenylalaninemia plus ↓ neurotransmitters (dystonia, seizures)",
    ],
    treatment: [
      "Lifelong low-phenylalanine diet",
      "Tyrosine supplementation",
      "Sapropterin (BH₄) for responsive PAH variants",
      "Strict maternal diet control before and during pregnancy",
    ],
    boardsPearls: [
      "PAH deficiency → cannot convert phenylalanine to tyrosine",
      "Musty odor + fair hair + intellectual disability → PKU",
      "Newborn screen mandatory; early diet prevents CNS damage",
      "Maternal PKU: mother's high phenylalanine is teratogenic to fetus",
      "Tyrosine becomes essential when PAH is deficient",
    ],
    pediatrics:
      "Detected on newborn screen; dietary restriction from infancy prevents intellectual disability. Fair hair and eczema are early clues if screen missed.",
  },
  {
    id: "maple-syrup-urine-disease",
    name: "Maple Syrup Urine Disease",
    etymology: "maple syrup = sweet odor descriptor + urine = excreted fluid + disease = disordered function",
    aliases: [
      "maple syrup urine disease",
      "msud",
      "branched-chain ketoaciduria",
      "branched-chain alpha-keto acid dehydrogenase deficiency",
    ],
    definition:
      "Autosomal recessive disorder of branched-chain amino acid (leucine, isoleucine, valine) catabolism causing neonatal encephalopathy and urine with a sweet maple-syrup odor.",
    pathophysiology:
      "Deficiency of branched-chain α-keto acid dehydrogenase (BCKDH) → accumulation of leucine, isoleucine, valine and their toxic ketoacids → cerebral edema and neurologic injury; leucine is the most neurotoxic BCAA.",
    classicPresentation: [
      "Poor feeding, vomiting, lethargy in first week of life",
      "Sweet-smelling urine (maple syrup odor)",
      "Hypotonia progressing to seizures and coma",
      "Neonatal metabolic emergency",
    ],
    keyFindings: [
      "Sweet odor to urine, cerumen, or earwax",
      "Neurologic deterioration in untreated neonate",
      "Ketonuria without hyperglycemia",
    ],
    keyLabs: [
      "↑ leucine, isoleucine, valine on plasma amino acids",
      "↑ branched-chain ketoacids in urine",
      "Newborn screen positive in screened populations",
    ],
    associations: [
      "Autosomal recessive",
      "BCKDHA, BCKDHB, DBT, or DLD gene defects",
      "Thiamine-responsive subtype (DLD deficiency)",
    ],
    complications: [
      "Metabolic decompensation with illness or fasting",
      "Seizures, cerebral edema, death if untreated",
      "Intellectual disability with delayed diagnosis",
    ],
    distinguishFrom: [
      "Phenylketonuria — musty odor, ↑ phenylalanine, not sweet urine",
      "Organic acidemias — metabolic acidosis prominent; MSUD has characteristic odor",
      "Urea cycle defects — hyperammonemia without sweet urine odor",
    ],
    treatment: [
      "Emergency restriction of branched-chain amino acids",
      "IV glucose and fluids; dialysis for severe leucine toxicity",
      "Lifelong special diet low in leucine, isoleucine, valine",
      "Thiamine in thiamine-responsive subtypes",
    ],
    boardsPearls: [
      "Sweet urine odor in neonate → MSUD until proven otherwise",
      "BCAA dehydrogenase deficiency — same enzyme family inhibited by arsenic",
      "Leucine most neurotoxic; restrict BCAAs emergently",
      "Thiamine is cofactor for BCKDH (like pyruvate dehydrogenase)",
      "vs PKU: musty odor and ↑ phenylalanine, not maple syrup smell",
    ],
    pediatrics:
      "Classic neonatal presentation within days of birth; treat as metabolic emergency. Siblings need screening; dietary management is lifelong.",
  },
  {
    id: "galactosemia",
    name: "Galactosemia",
    etymology: "Greek gala = milk + -ose = sugar + -emia = blood condition",
    aliases: [
      "galactosemia",
      "galactosaemia",
      "classic galactosemia",
      "galactose-1-phosphate uridyltransferase deficiency",
      "galt deficiency",
    ],
    definition:
      "Autosomal recessive disorder of galactose metabolism causing toxic accumulation of galactose-1-phosphate after lactose/galactose ingestion, with neonatal liver disease, cataracts, and sepsis risk if untreated.",
    pathophysiology:
      "GALT enzyme deficiency (classic form) → inability to convert galactose-1-phosphate to glucose-1-phosphate → accumulation of galactose-1-phosphate and galactitol → hepatocellular injury, renal tubular dysfunction, lens opacities, and E. coli sepsis susceptibility in neonates.",
    classicPresentation: [
      "Jaundice, vomiting, hepatomegaly after milk feeds begin",
      "Failure to thrive in first weeks of life",
      "Cataracts",
      "E. coli sepsis in neonate",
      "Hypoglycemia and aminoaciduria",
    ],
    keyFindings: [
      "Hepatosplenomegaly and conjugated hyperbilirubinemia",
      "Cataracts on exam",
      "Reducing substances in urine (non-glucose)",
    ],
    keyLabs: [
      "↑ galactose and galactose-1-phosphate",
      "Positive newborn screen for galactosemia",
      "↓ GALT enzyme activity on confirmatory testing",
      "E. coli bacteremia in sick neonate",
    ],
    associations: [
      "Autosomal recessive",
      "GALT gene on chromosome 9",
      "Lactose in breast milk or cow's milk formula triggers disease",
    ],
    complications: [
      "Intellectual disability if untreated",
      "Ovarian failure in females",
      "Speech and motor deficits despite early treatment (variant outcomes)",
      "Neonatal E. coli sepsis",
    ],
    distinguishFrom: [
      "Galactokinase deficiency — mainly cataracts, milder systemic disease",
      "UDP-galactose-4-epimerase deficiency — often benign",
      "Neonatal hepatitis — no reducing substances or galactose screen abnormality",
      "Phenylketonuria — musty odor, ↑ phenylalanine, not milk-induced jaundice",
    ],
    treatment: [
      "Immediate elimination of lactose/galactose from diet (soy or elemental formula)",
      "Lifelong galactose restriction",
      "Monitor development, speech, and ovarian function",
    ],
    boardsPearls: [
      "Stop milk feeds — galactose is from lactose hydrolysis",
      "Neonate with jaundice + E. coli sepsis + cataracts → galactosemia",
      "Reducing substances in urine after milk introduction",
      "Newborn screen detects many cases before irreversible injury",
      "vs PKU — different amino acid pathway; both on newborn screen",
    ],
    pediatrics:
      "Symptoms appear after milk feeds start; soy formula is used until diagnosis confirmed. Early dietary treatment prevents death from sepsis and liver failure.",
  },
  {
    id: "down-syndrome",
    name: "Down Syndrome",
    etymology: "eponym: John Langdon Down + syndrome = grouped findings",
    aliases: [
      "down syndrome",
      "down's syndrome",
      "trisomy 21",
      "trisomy-21",
      "t21",
    ],
    definition:
      "Chromosomal disorder most often from trisomy 21 causing intellectual disability, characteristic facies, congenital anomalies, and increased risk of several medical conditions.",
    pathophysiology:
      "Extra copy of chromosome 21 (free trisomy, Robertsonian translocation, or mosaicism) → gene dosage imbalance → abnormal neurodevelopment, immune and cardiac malformations, and early Alzheimer-type neuropathology.",
    classicPresentation: [
      "Intellectual disability (variable severity)",
      "Hypotonia in infancy",
      "Flat facial profile, upslanting palpebral fissures, epicanthal folds",
      "Single transverse palmar crease, gap between first and second toes",
    ],
    keyFindings: [
      "Dysmorphic facies and hypotonia",
      "Congenital heart disease (especially AVSD, VSD, ASD)",
      "Duodenal atresia or Hirschsprung disease",
      "Atlantoaxial instability risk",
    ],
    keyLabs: [
      "Karyotype: 47,XX,+21 or 47,XY,+21 (or translocation/mosaic pattern)",
      "Prenatal screening: ↓ maternal AFP, ↑ β-hCG, ↑ inhibin A (quadruple screen pattern)",
      "TSH — screen for concurrent hypothyroidism",
    ],
    associations: [
      "Advanced maternal age (free trisomy 21)",
      "Robertsonian translocation (often 14;21) — translocation carriers at recurrence risk",
      "Acute megakaryoblastic leukemia (pediatric)",
      "Early-onset Alzheimer disease pathology",
      "Autoimmune thyroiditis / hypothyroidism",
      "Hirschsprung disease, duodenal atresia",
    ],
    complications: [
      "Congenital heart disease",
      "Atlantoaxial subluxation with cord compression",
      "Obstructive sleep apnea",
      "Hearing loss, recurrent otitis media",
      "Hematologic malignancy in childhood",
    ],
    distinguishFrom: [
      "Edwards syndrome (trisomy 18) — rocker-bottom feet, severe malformations, poorer survival",
      "Patau syndrome (trisomy 13) — holoprosencephaly, polydactyly",
      "Zellweger syndrome — hypotonia but peroxisomal disease labs, not trisomy 21",
    ],
    treatment: [
      "Early intervention, developmental support, and family counseling",
      "Repair congenital heart defects; monitor thyroid, hearing, vision",
      "Cervical spine screening before contact sports (atlantoaxial instability)",
    ],
    boardsPearls: [
      "Trisomy 21 = Down syndrome; 47,XX,+21 karyotype",
      "First-trimester screen: ↑ nuchal translucency, ↓ PAPP-A, ↑ β-hCG",
      "AVSD is classic heart defect; duodenal atresia (double bubble) and Hirschsprung associated",
      "Single palmar crease + hypotonia + upslanting fissures",
      "Maternal age is risk factor for free trisomy, not translocation cases",
    ],
    pediatrics:
      "Newborn hypotonia and feeding difficulty are early clues; echocardiogram and newborn screening for hypothyroidism recommended. Atlantoaxial instability screening before sports participation.",
  },
  {
    id: "hirschsprung-disease",
    name: "Hirschsprung Disease",
    etymology: "eponym: Harald Hirschsprung + disease = disordered function",
    aliases: [
      "hirschsprung disease",
      "hirschsprung's disease",
      "congenital aganglionic megacolon",
      "aganglionic megacolon",
      "hd",
    ],
    definition:
      "Congenital absence of enteric ganglion cells in the distal colon causing functional obstruction, failure to pass meconium, and megacolon.",
    pathophysiology:
      "Failed cranial-to-caudal migration of neural crest–derived enteric ganglia (often RET proto-oncogene mutations) → aganglionic distal segment with uncoordinated contraction → functional obstruction, proximal dilatation, and enterocolitis risk.",
    classicPresentation: [
      "Failure to pass meconium within 48 hours of birth",
      "Abdominal distension and bilious vomiting in neonate",
      "Chronic constipation and poor growth in older infant",
      "Explosive stool after rectal exam (squirt sign)",
    ],
    keyFindings: [
      "Empty rectal vault on digital exam with tight anal sphincter",
      "Proximal colonic dilatation on imaging",
      "Transition zone on contrast enema",
      "Absent ganglion cells and hypertrophied nerve trunks on rectal suction biopsy",
    ],
    keyLabs: [
      "Anorectal manometry — absent rectoanal inhibitory reflex",
      "Rectal suction biopsy — gold standard (no ganglion cells, ↑ acetylcholinesterase staining)",
      "Contrast enema — transition zone between dilated and narrow segments",
    ],
    associations: [
      "Down syndrome (increased risk)",
      "RET proto-oncogene mutations (also MEN2 association)",
      "Waardenburg syndrome, congenital central hypoventilation",
      "Short-segment (rectosigmoid) most common; long-segment worse prognosis",
    ],
    complications: [
      "Enterocolitis (Hirschsprung-associated enterocolitis) — fever, distension, shock",
      "Malnutrition and failure to thrive",
      "Persistent obstruction if incomplete resection",
    ],
    distinguishFrom: [
      "Meconium ileus — cystic fibrosis, inspissated meconium in ileum not aganglionosis",
      "Functional constipation — normal ganglion cells on biopsy",
      "Anal stenosis or imperforate anus — mechanical outlet obstruction",
      "Hypothyroidism-related constipation — check TSH; passes meconium usually",
    ],
    treatment: [
      "Definitive surgery: pull-through procedure removing aganglionic segment",
      "Temporary colostomy in severe neonatal obstruction or enterocolitis",
      "Treat enterocolitis urgently with rectal washouts, antibiotics, IV fluids",
    ],
    boardsPearls: [
      "Failure to pass meconium in 48 h → Hirschsprung until proven otherwise",
      "Aganglionosis from absent neural crest–derived enteric ganglia",
      "Rectal biopsy shows no ganglion cells",
      "Down syndrome association",
      "vs meconium ileus (CF) — distal microcolon with ileal obstruction",
    ],
    pediatrics:
      "Neonatal intestinal obstruction emergency; do not delay diagnosis in infant who never passed meconium. Enterocolitis is life-threatening complication after diagnosis or surgery.",
  },
  {
    id: "umbilical-hernia",
    name: "Umbilical Hernia",
    etymology: "Latin umbilicus = navel + hernia = protrusion through weakened wall",
    aliases: [
      "umbilical hernia",
      "umbilical hernias",
      "belly button hernia",
    ],
    definition:
      "Protrusion of abdominal contents through a defect in the linea alba at the umbilicus, common in infants and usually benign when small.",
    pathophysiology:
      "Incomplete closure of the umbilical ring after cord separation → intra-abdominal pressure pushes peritoneum and sometimes bowel through the fascial defect; increased intra-abdominal pressure (crying, ascites) accentuates bulge.",
    classicPresentation: [
      "Soft, reducible bulge at umbilicus prominent with crying or straining",
      "Often asymptomatic",
      "Most common in infants and young children",
      "May be noted incidentally on exam",
    ],
    keyFindings: [
      "Reducible midline umbilical mass",
      "Defect palpable in linea alba",
      "No overlying skin breakdown in uncomplicated cases",
    ],
    associations: [
      "Congenital hypothyroidism (weak connective tissue, prolonged umbilical drainage)",
      "Down syndrome",
      "Beckwith-Wiedemann syndrome",
      "Ascites or chronic cough (↑ intra-abdominal pressure)",
    ],
    complications: [
      "Incarceration/strangulation (rare in typical pediatric umbilical hernia)",
      "Cosmetic concern if persistent into school age",
    ],
    distinguishFrom: [
      "Omphalocele — congenital midline defect with herniated viscera covered by peritoneum/amnion at birth, not postnatal umbilical bulge",
      "Gastroschisis — paraumbilical abdominal wall defect without covering membrane",
      "Inguinal hernia — groin location, not umbilicus",
      "Umbilical granuloma — moist pink tissue at cord stump, not fascial defect",
    ],
    treatment: [
      "Observation in most infants — majority close spontaneously by age 3–5",
      "Surgical repair if large, symptomatic, incarcerated, or persistent beyond ~4–5 years",
      "Treat underlying condition (e.g., hypothyroidism) if contributing",
    ],
    boardsPearls: [
      "Common in infants; usually closes spontaneously",
      "Congenital hypothyroidism triad includes umbilical hernia + macroglossia + prolonged jaundice",
      "vs omphalocele — present at birth with membrane-covered viscera",
      "Elective repair if still present after early childhood",
    ],
    pediatrics:
      "Very common in infants; reassurance unless large or persistent. Do not confuse with omphalocele (congenital anterior abdominal wall defect at delivery).",
  },
  {
    id: "ibd",
    name: "Inflammatory Bowel Disease (IBD)",
    etymology: "Latin inflammare = set on fire + bowel = intestine + disease = disordered function",
    aliases: [
      "ibd",
      "inflammatory bowel disease",
      "inflammatory bowel diseases",
    ],
    definition:
      "Chronic immune-mediated inflammatory disorders of the gastrointestinal tract; the two major subtypes are Crohn disease and ulcerative colitis.",
    pathophysiology:
      "Genetic susceptibility (HLA and other loci) plus environmental triggers → dysregulated mucosal immune response to gut microbiota → ↑ pro-inflammatory cytokines (TNF-α, IL-12/23) → chronic intestinal inflammation with barrier dysfunction.",
    classicPresentation: [
      "Chronic or relapsing diarrhea (bloody in UC; may be nonbloody in Crohn)",
      "Abdominal pain and cramping",
      "Weight loss, fatigue, anemia",
      "Urgency/tenesmus (especially UC)",
      "Perianal fistulae or abscesses (Crohn)",
    ],
    keyFindings: [
      "Crohn: transmural inflammation, skip lesions, terminal ileum, noncaseating granulomas, fistulae",
      "UC: continuous mucosal inflammation from rectum proximally, crypt abscesses, lead-pipe colon",
      "p-ANCA more common in UC; ASCA more common in Crohn (supportive, not diagnostic)",
      "Extraintestinal manifestations: erythema nodosum, uveitis, ankylosing spondylitis, PSC (UC)",
    ],
    associations: [
      "Crohn disease and ulcerative colitis are the two main IBD subtypes",
      "Primary sclerosing cholangitis (especially with UC)",
      "Arthritis, uveitis, erythema nodosum, pyoderma gangrenosum",
      "Smoking worsens Crohn disease but may be protective in UC",
      "Psoriasis and other autoimmune diseases",
    ],
    complications: [
      "Colorectal cancer with long-standing extensive colonic disease",
      "Malnutrition, iron/B12 deficiency (Crohn with ileal disease)",
      "Crohn: fistulae, strictures, abscesses",
      "UC: toxic megacolon, fulminant colitis",
    ],
    distinguishFrom: [
      "Crohn disease — any GI segment, transmural, skip lesions, fistulae, granulomas",
      "Ulcerative colitis — colon only, continuous from rectum, mucosal, bloody diarrhea",
      "Celiac disease — villous atrophy, tTG/IgA antibodies, responds to gluten-free diet",
      "Infectious colitis — acute, self-limited, positive stool studies",
      "Microscopic colitis — watery diarrhea, normal endoscopy, biopsy diagnosis",
      "Irritable bowel syndrome — no inflammation, no weight loss, normal labs",
    ],
    treatment: [
      "Mild: aminosalicylates (mesalamine/sulfasalazine)",
      "Moderate-severe flares: corticosteroids",
      "Steroid-sparing maintenance: azathioprine, methotrexate",
      "Biologics: anti-TNF (infliximab, adalimumab), anti–IL-12/23 (ustekinumab), vedolizumab (gut-selective)",
      "Crohn fistulizing disease or refractory UC — biologics or surgery (colectomy for UC)",
    ],
    boardsPearls: [
      "IBD = Crohn + UC; know the comparison: Crohn (anywhere, transmural, skip, fistulae) vs UC (colon, mucosal, continuous from rectum)",
      "Smoking: worsens Crohn, protective in UC — classic boards contrast",
      "PSC + IBD → think UC; p-ANCA supportive",
      "Toxic megacolon — UC emergency: colon >6 cm + systemic toxicity",
      "Anti-TNF for moderate-severe IBD — screen for latent TB before starting",
    ],
    pediatrics:
      "Pediatric IBD may present with growth failure and delayed puberty before overt GI symptoms; Crohn perianal disease common. Same step-up therapy principles with growth and bone health monitoring.",
  },
  {
    id: "crohn-disease",
    name: "Crohn Disease",
    etymology: "eponym: Burrill Crohn + disease = disordered function",
    aliases: ["crohn disease", "crohn's disease", "regional enteritis"],
    definition:
      "Chronic transmural inflammatory bowel disease that can affect any part of the GI tract, often skip lesions with fistulae.",
    pathophysiology:
      "Dysregulated immune response to gut microbiota → transmural inflammation → skip lesions, fistulae, strictures; noncaseating granulomas on histology.",
    classicPresentation: [
      "Crampy abdominal pain, diarrhea (nonbloody)",
      "Weight loss, malnutrition",
      "Perianal fistulae, abscesses",
      "Terminal ileum involvement common",
    ],
    keyFindings: [
      "Noncaseating granulomas on biopsy",
      "Cobblestone mucosa, skip lesions on endoscopy",
      "String sign on small bowel follow-through",
    ],
    associations: [
      "Smoking worsens disease",
      "HLA associations",
      "Extraintestinal manifestations",
    ],
    complications: [
      "Fistulae",
      "Strictures",
      "Abscesses",
      "Colorectal cancer (long-standing)",
    ],
    distinguishFrom: [
      "Ulcerative colitis — continuous colonic disease, bloody diarrhea, no fistulae",
      "Celiac disease — villous atrophy, tTG positive",
    ],
    treatment: [
      "Aminosalicylates (mesalamine) for mild disease; corticosteroids for flares",
      "Immunomodulators (azathioprine) or anti-TNF (infliximab) for moderate-severe disease",
    ],
    boardsPearls: [
      "Transmural + skip lesions + fistulae = Crohn",
      "Smoking worsens Crohn but may be protective in UC",
      "Vitamin B12 deficiency with terminal ileum disease",
    ],
    pediatrics:
      "May present with growth failure and delayed puberty before GI symptoms; perianal disease common.",
  },
  {
    id: "ischemic-colitis",
    name: "Ischemic Colitis",
    etymology: "Greek ischein = restrain + haima = blood + kolon = colon + -itis = inflammation",
    aliases: [
      "ischemic colitis",
      "colonic ischemia",
      "ischemic bowel",
      "ischemic colonic disease",
      "intestinal ischemia",
    ],
    definition:
      "Acute hypoperfusion of the colon causing mucosal injury, typically in watershed zones, presenting with crampy abdominal pain and hematochezia.",
    pathophysiology:
      "↓ colonic blood flow from hypotension, dehydration, vasospasm, or mesenteric hypoperfusion (often low-flow states rather than major arterial occlusion) → mucosal and submucosal ischemia → inflammation, edema, and bleeding; splenic flexure and rectosigmoid watershed areas are most vulnerable.",
    classicPresentation: [
      "Crampy lower abdominal pain followed by bloody diarrhea",
      "Elderly patient after hypotensive episode, sepsis, dehydration, or recent cardiac surgery",
      "Often self-limited with supportive care in mild cases",
      "Severe pain out of proportion or peritoneal signs suggest transmural necrosis (gangrenous colitis)",
    ],
    keyFindings: [
      "Tenderness over affected colonic segment",
      "Bright red or maroon blood in stool",
      "Thumbprinting on abdominal imaging from submucosal edema/hemorrhage",
    ],
    keyLabs: [
      "Leukocytosis and elevated lactate in severe disease",
      "Stool studies negative for infectious pathogens when mimics considered",
      "Metabolic acidosis if transmural ischemia or sepsis",
    ],
    associations: [
      "Hypotension, shock, dehydration",
      "Recent aortic surgery or embolic phenomena (less common isolated cause)",
      "Hypercoagulability, oral contraceptives, cocaine",
      "Constipation with fecal impaction and mucosal ischemia",
    ],
    complications: [
      "Gangrenous colitis with perforation",
      "Stricture formation after healing",
      "Recurrent ischemia",
      "Massive hemorrhage (uncommon)",
    ],
    distinguishFrom: [
      "Ulcerative colitis — chronic bloody diarrhea, continuous rectal involvement, younger IBD population",
      "Infectious colitis — stool pathogens, fever, often self-limited viral or bacterial pattern",
      "Diverticulitis — LLQ pain, fever, localized tenderness; bleeding less prominent",
      "Mesenteric ischemia (small bowel) — pain out of proportion early, different vascular territory",
      "Colorectal cancer — insidious bleeding, weight loss, older adult",
    ],
    treatment: [
      "Supportive care: bowel rest, IV fluids, treat underlying hypotension",
      "Broad-spectrum antibiotics if systemic toxicity or gangrenous concern",
      "Surgery for peritonitis, perforation, or persistent gangrenous segment",
      "Avoid vasoconstrictors when possible",
    ],
    boardsPearls: [
      "Elderly + hypotension + crampy pain + bloody diarrhea → ischemic colitis",
      "Watershed areas: splenic flexure and rectosigmoid",
      "Thumbprinting on abdominal X-ray/CT from submucosal edema",
      "Usually non-occlusive hypoperfusion, not classic embolic SMA occlusion",
      "Gangrenous colitis needs urgent surgical evaluation",
    ],
    pediatrics:
      "Ischemic colitis is rare in children; consider vasculitis, hypercoagulability, or cardiac anomaly with low output before attributing bloody diarrhea to ischemia.",
  },
  {
    id: "ulcerative-colitis",
    name: "Ulcerative Colitis",
    etymology: "Latin ulcus = sore + Greek kolon = colon + -itis = inflammation",
    aliases: ["ulcerative colitis", "uc"],
    definition:
      "Chronic inflammatory bowel disease limited to the colon and rectum, with continuous mucosal inflammation starting at the rectum.",
    pathophysiology:
      "Mucosal and submucosal inflammation confined to colon → crypt abscesses, pseudopolyps; no transmural involvement or skip lesions.",
    classicPresentation: [
      "Bloody diarrhea with mucus",
      "Tenesmus, urgency",
      "Crampy lower abdominal pain",
    ],
    keyFindings: [
      "Continuous inflammation from rectum proximally",
      "Crypt abscesses, loss of haustra (lead pipe colon)",
      "p-ANCA positive (serology)",
    ],
    associations: ["Primary sclerosing cholangitis", "p-ANCA"],
    complications: [
      "Toxic megacolon",
      "Colorectal cancer (long-standing extensive disease)",
      "Fulminant colitis",
    ],
    distinguishFrom: [
      "Crohn disease — skip lesions, fistulae, terminal ileum, noncaseating granulomas",
      "Infectious colitis — self-limited, stool studies positive",
    ],
    treatment: [
      "Aminosalicylates (mesalamine) for mild-moderate disease",
      "Corticosteroids for flares; colectomy for refractory or toxic megacolon",
    ],
    boardsPearls: [
      "Always involves rectum; extends continuously proximally",
      "PSC association — chronic cholestatic liver disease",
      "Toxic megacolon: colon dilation >6 cm + systemic toxicity",
    ],
  },
  {
    id: "rectal-cancer",
    name: "Rectal Cancer",
    etymology: "Latin rectum = straight + Latin cancer = crab/tumor",
    aliases: [
      "rectal cancer",
      "rectal carcinoma",
      "rectal adenocarcinoma",
      "cancer of the rectum",
      "carcinoma of the rectum",
    ],
    definition:
      "Adenocarcinoma arising in the rectum (distal large bowel), often presenting with rectal bleeding, altered bowel habits, and tenesmus; staging and treatment differ from colon cancer due to pelvic anatomy.",
    pathophysiology:
      "Adenoma-carcinoma sequence (APC → KRAS → p53) or sporadic/serrated pathway → mucosal dysplasia → invasive adenocarcinoma; long-standing ulcerative colitis and Lynch syndrome increase risk; local spread to mesorectum and pelvic structures.",
    classicPresentation: [
      "Hematochezia or occult blood in stool",
      "Change in stool caliber, constipation, or tenesmus",
      "Abdominal pain or pelvic discomfort",
      "Weight loss and anemia in advanced disease",
      "Age >50 or strong family history — screen with colonoscopy",
    ],
    keyFindings: [
      "Rectal mass on digital rectal exam or colonoscopy",
      "Iron deficiency anemia",
      "Possible liver metastases or ascites if advanced",
    ],
    keyLabs: [
      "Colonoscopy with biopsy — diagnostic",
      "CEA tumor marker — prognostic and surveillance (not screening)",
      "Iron studies — microcytic anemia from chronic blood loss",
      "MSI/MMR testing for Lynch syndrome workup",
    ],
    associations: [
      "Adenomatous polyps",
      "Long-standing ulcerative colitis",
      "Lynch syndrome (HNPCC)",
      "Family history of colorectal cancer",
      "Low fiber, high red/processed meat diet",
      "FAP (though more classic for colon)",
    ],
    complications: [
      "Obstruction and perforation",
      "Local invasion (ureters, bladder, sacrum)",
      "Distant metastasis (liver, lung)",
      "Recurrence after resection",
    ],
    distinguishFrom: [
      "Hemorrhoids — painless bleeding, prolapsed vascular cushions; cancer may coexist",
      "Anal cancer — squamous cell carcinoma below dentate line; different histology and HPV association",
      "Ulcerative proctitis — mucosal inflammation without mass; biopsy distinguishes",
      "Diverticular bleeding — often brisk, painless; no mass on colonoscopy",
    ],
    treatment: [
      "Neoadjuvant chemoradiation for locally advanced rectal cancer",
      "Low anterior resection or abdominoperineal resection depending on level and stage",
      "Systemic chemotherapy for metastatic disease",
      "Surveillance colonoscopy and CEA monitoring after treatment",
    ],
    boardsPearls: [
      "Rectal bleeding + weight loss + age >50 → colorectal cancer until proven otherwise",
      "Adenoma-carcinoma sequence: APC → KRAS → p53",
      "UC with long duration/extent → increased colorectal cancer risk",
      "Lynch syndrome — MSI-high, MMR deficiency, early colon/rectal cancer",
      "vs hemorrhoids — cancer may cause tenesmus, weight loss, anemia; colonoscopy required",
    ],
    pediatrics:
      "Colorectal cancer is rare in children; adolescent GI bleeding more often IBD, polyps, or Meckel — still evaluate persistent bleeding appropriately.",
  },
  {
    id: "hemorrhoids",
    name: "Hemorrhoids",
    etymology: "Greek haima = blood + rhoia = flow → bleeding vessels",
    aliases: [
      "hemorrhoids",
      "hemorrhoid",
      "haemorrhoids",
      "piles",
      "internal hemorrhoids",
      "external hemorrhoids",
      "thrombosed hemorrhoid",
    ],
    definition:
      "Dilated submucosal vascular cushions in the anal canal — internal (above pectinate line) or external (below pectinate line) — causing bleeding, prolapse, or perianal discomfort.",
    pathophysiology:
      "Chronic increased intra-abdominal pressure (straining, pregnancy, portal hypertension) → engorgement of internal hemorrhoidal plexus → sliding of anal cushions → bleeding and prolapse; external hemorrhoids involve somatic innervation below pectinate line → pain especially if thrombosed.",
    classicPresentation: [
      "Bright red blood on toilet paper or coating stool (often painless if internal)",
      "Perianal itching or mucous discharge",
      "Prolapsed tissue with defecation (internal hemorrhoids)",
      "Sudden severe perianal pain if thrombosed external hemorrhoid",
      "Portal hypertension — caput medusae and anorectal varices context",
    ],
    keyFindings: [
      "Internal: prolapsed soft vascular tissue above dentate/pectinate line on anoscopy",
      "External: painful perianal swelling below pectinate line if thrombosed",
      "No indurated ulcerated mass (cancer concern if present)",
    ],
    keyLabs: [
      "Clinical diagnosis on exam/anoscopy",
      "Colonoscopy if age-appropriate bleeding workup for colorectal cancer",
      "CBC if chronic anemia from bleeding",
    ],
    associations: [
      "Constipation and straining",
      "Pregnancy",
      "Portal hypertension and cirrhosis",
      "Prolonged sitting",
      "Low-fiber diet",
    ],
    complications: [
      "Chronic anemia from occult bleeding",
      "Thrombosed external hemorrhoid — excruciating pain",
      "Strangulated internal hemorrhoid (rare)",
      "Misattribution of rectal cancer symptoms to benign hemorrhoids",
    ],
    distinguishFrom: [
      "Anal fissure — linear tear, severe pain with defecation, sentinel pile",
      "Rectal cancer — mass, weight loss, tenesmus; colonoscopy if red flags",
      "Anorectal abscess — fluctuant tender swelling, fever",
      "Rectal prolapse — full-thickness concentric rings of rectal wall",
    ],
    treatment: [
      "Fiber supplementation, increased fluids, stool softeners",
      "Topical agents (hydrocortisone, witch hazel) for symptoms",
      "Rubber band ligation for symptomatic internal hemorrhoids",
      "Excision for thrombosed external hemorrhoid within 72 h if severe",
      "Treat portal hypertension underlying anorectal varices separately",
    ],
    boardsPearls: [
      "Above pectinate line = internal = visceral innervation = usually painless bleeding",
      "Below pectinate line = external = somatic innervation = pain, especially thrombosed",
      "Portal hypertension → anorectal varices (not true hemorrhoids but overlap clinically)",
      "Bright red blood + no weight loss in young adult may be hemorrhoids — still rule out cancer if >45 or alarm features",
      "Rubber band ligation for internal hemorrhoids",
    ],
    pediatrics:
      "Hemorrhoids uncommon in children — consider constipation, portal hypertension, or Crohn perianal disease when anorectal vascular lesions present.",
  },
  {
    id: "proctitis",
    name: "Proctitis",
    etymology: "Greek proktos = anus/rectum + -itis = inflammation",
    aliases: [
      "proctitis",
      "rectal inflammation",
      "infectious proctitis",
      "ulcerative proctitis",
      "radiation proctitis",
    ],
    definition:
      "Inflammation limited to the rectal mucosa causing rectal pain, tenesmus, bleeding, and urgency — from inflammatory bowel disease, infection, radiation, or ischemia.",
    pathophysiology:
      "Mucosal injury from autoimmune inflammation (UC limited to rectum), sexually transmitted pathogens (Neisseria, HSV, Chlamydia, syphilis), radiation fibrosis/vascular injury, or ischemia → erythema, ulceration, friability → bleeding and tenesmus.",
    classicPresentation: [
      "Rectal pain, tenesmus, urgency",
      "Bloody mucoid stools or rectal bleeding",
      "Constipation or frequent small-volume stools",
      "Fevers and discharge in infectious proctitis (especially MSM)",
      "History of radiation to pelvis or ulcerative colitis",
    ],
    keyFindings: [
      "Friable erythematous rectal mucosa on anoscopy/proctoscopy",
      "Ulcers or exudate in infectious causes",
      "Tenderness on digital rectal exam",
    ],
    keyLabs: [
      "Stool studies — C. difficile, culture if infectious suspected",
      "NAAT/culture for GC/Chlamydia; HSV PCR/swab; syphilis serology",
      "Colonoscopy with biopsy for IBD vs infection vs ischemia",
      "Calprotectin or fecal markers adjunct in IBD",
    ],
    associations: [
      "Ulcerative colitis — ulcerative proctitis (limited disease)",
      "Crohn disease — may involve anorectum",
      "Receptive anal intercourse — GC/Chlamydia, HSV, syphilis",
      "Pelvic radiation for prostate/cervical cancer",
      "Antibiotic-associated (C. difficile)",
    ],
    complications: [
      "Severe bleeding",
      "Stricture after radiation",
      "Progression to extensive colitis (UC)",
      "Perianal fistula if Crohn",
    ],
    distinguishFrom: [
      "Hemorrhoids — vascular cushions without diffuse mucosal inflammation",
      "Rectal cancer — mass lesion; biopsy required",
      "Anal fissure — distal tear, not diffuse proctitis",
      "Full ulcerative colitis — extends proximal to rectum continuously",
    ],
    treatment: [
      "Topical mesalamine suppositories for mild ulcerative proctitis",
      "Antibiotics for bacterial STI proctitis (ceftriaxone + doxycycline for GC/Chlamydia per guidelines)",
      "Acyclovir for HSV proctitis",
      "Treat C. difficile if positive",
      "Steroids/biologics for moderate-severe IBD proctitis",
    ],
    boardsPearls: [
      "UC can be limited to rectum — ulcerative proctitis; continuous mucosal disease",
      "MSM with proctitis → test for GC, Chlamydia, HSV, syphilis",
      "Tenesmus + bloody mucus + friable rectal mucosa = proctitis",
      "Radiation proctitis — history of pelvic RT; telangiectasias and bleeding",
      "vs hemorrhoids — proctitis is mucosal inflammation, not vascular cushions",
    ],
    pediatrics:
      "Juvenile ulcerative proctitis occurs; infectious proctitis in adolescents warrants STI testing when sexually active.",
  },
  {
    id: "rectal-prolapse",
    name: "Rectal Prolapse",
    etymology: "Latin rectum = straight + Latin prolabere = to fall forward",
    aliases: [
      "rectal prolapse",
      "rectal procidentia",
      "complete rectal prolapse",
      "full-thickness rectal prolapse",
      "mucosal prolapse",
    ],
    definition:
      "Protrusion of rectal wall through the anus — full-thickness (complete) prolapse involves all layers of rectal wall; partial/mucosal prolapse involves only mucosa.",
    pathophysiology:
      "Weakening of rectal attachments and pelvic floor (elderly, multiparity, chronic straining, neurologic disease) → intussusception and telescoping of rectum through anus during increased intra-abdominal pressure.",
    classicPresentation: [
      "Red concentric rings of prolapsed tissue after defecation (full-thickness)",
      "Mass protruding through anus with straining, reducible manually or spontaneously",
      "Fecal incontinence or mucous discharge",
      "Constipation and sense of incomplete evacuation",
      "Elderly woman with chronic straining — classic demographic",
    ],
    keyFindings: [
      "Full-thickness prolapse — circular folds of rectal wall on exam",
      "Mucosal prolapse — radial folds only (hemorrhoidal mimic)",
      "Weak anal sphincter tone often coexists",
    ],
    keyLabs: [
      "Clinical diagnosis on straining exam or video defecography",
      "Colonoscopy to exclude concurrent neoplasm if bleeding",
      "Anorectal manometry if incontinence workup needed",
    ],
    associations: [
      "Chronic constipation and straining",
      "Multiparity and pelvic floor weakness",
      "Cystic fibrosis in children",
      "Neurologic disorders (spina bifida, spinal cord injury)",
      "Advanced age",
    ],
    complications: [
      "Incarceration and ulceration of prolapsed segment (rare)",
      "Fecal incontinence",
      "Bleeding and mucous discharge",
    ],
    distinguishFrom: [
      "Prolapsed internal hemorrhoids — vascular cushions, not full concentric rectal wall rings",
      "Mucosal prolapse — partial; fewer concentric folds than full-thickness",
      "Rectal intussusception without external prolapse — imaging finding",
      "Anal cancer — ulcerated/firm mass, not reducible prolapsed wall",
    ],
    treatment: [
      "Conservative: fiber, stool softeners, pelvic floor physical therapy in mild cases",
      "Surgical rectopexy or perineal procedures for symptomatic complete prolapse",
      "Treat underlying constipation",
    ],
    boardsPearls: [
      "Full-thickness rectal prolapse = concentric rings of rectal wall",
      "vs prolapsed hemorrhoids — hemorrhoids are vascular cushions with radial tags, not full wall layers",
      "Elderly woman + constipation + protruding mass on straining → rectal prolapse",
      "Often associated with fecal incontinence",
    ],
    pediatrics:
      "Rectal prolapse can occur in cystic fibrosis and chronic constipation in children — evaluate for CF if recurrent in young child.",
  },
  {
    id: "peptic-ulcer-disease",
    name: "Peptic Ulcer Disease",
    etymology: "Greek peptikos = digestive + Latin ulcus = sore + disease = disordered function",
    aliases: [
      "peptic ulcer disease",
      "pud",
      "peptic ulcer",
      "gastric ulcer",
      "duodenal ulcer",
    ],
    definition:
      "Mucosal break in stomach or duodenum from acid-pepsin injury exceeding mucosal defenses.",
    pathophysiology:
      "H. pylori infection or NSAIDs disrupt mucosal barrier → acid injury → ulceration; duodenal ulcers often have ↑ acid secretion.",
    classicPresentation: [
      "Epigastric pain — duodenal: relief with food; gastric: worse with food",
      "NSAID or H. pylori risk factors",
      "Melena or hematemesis if bleeding",
    ],
    keyLabs: ["H. pylori testing (urea breath test, stool antigen, biopsy)"],
    associations: ["H. pylori", "NSAID use", "Zollinger-Ellison syndrome"],
    complications: ["GI bleeding", "Perforation", "Gastric outlet obstruction"],
    distinguishFrom: [
      "ZES — multiple ulcers, diarrhea, PPI-resistant, ↑ gastrin",
      "Gastritis — superficial, no full-thickness ulcer",
      "GERD — heartburn without ulcer on endoscopy",
    ],
    treatment: [
      "PPI therapy; eradicate H. pylori if positive (triple therapy)",
      "Discontinue NSAIDs; treat ZES if refractory",
    ],
    boardsPearls: [
      "Duodenal ulcer: pain improves with eating",
      "Gastric ulcer: pain worsens with eating; biopsy margins to rule out malignancy",
      "H. pylori triple therapy: PPI + clarithromycin + amoxicillin",
    ],
  },
  {
    id: "gerd",
    name: "Gastroesophageal Reflux Disease",
    etymology: "gastro = stomach + esophageal = food tube + reflux = backflow + disease = disordered function",
    aliases: [
      "gerd",
      "gastroesophageal reflux disease",
      "gastro-oesophageal reflux disease",
      "gastroesophageal reflux",
      "acid reflux",
      "reflux disease",
      "chronic reflux",
    ],
    definition:
      "Chronic reflux of gastric contents into the esophagus causing symptoms or mucosal injury, usually from transient lower esophageal sphincter relaxations and/or decreased LES tone.",
    pathophysiology:
      "Incompetent or transiently relaxed LES + delayed esophageal clearance and acid exposure → mucosal inflammation (esophagitis); hiatal hernia and obesity worsen reflux; chronic injury predisposes to Barrett metaplasia.",
    classicPresentation: [
      "Heartburn and regurgitation, worse after meals and when supine",
      "Sour taste, chronic cough, hoarseness (extraesophageal reflux)",
      "Epigastric discomfort; odynophagia if severe esophagitis",
    ],
    keyFindings: [
      "Normal exam in uncomplicated disease",
      "Erosions or erythema on endoscopy if esophagitis present",
    ],
    keyLabs: [
      "Endoscopy for alarm features or refractory symptoms",
      "Ambulatory pH monitoring when diagnosis unclear",
    ],
    associations: [
      "Obesity, hiatal hernia, pregnancy",
      "Smoking, alcohol, fatty meals",
      "Barrett esophagus with chronic untreated reflux",
    ],
    complications: [
      "Barrett esophagus and esophageal adenocarcinoma risk",
      "Esophageal stricture",
      "Aspiration and asthma-like symptoms",
    ],
    distinguishFrom: [
      "Peptic ulcer disease — epigastric pain pattern; ulcer on endoscopy",
      "Achalasia — dysphagia to solids and liquids, bird-beak esophagus",
      "Esophageal cancer — progressive dysphagia, weight loss",
      "Cardiac chest pain — exertional angina; esophageal spasm mimics",
    ],
    treatment: [
      "Lifestyle: weight loss, head-of-bed elevation, avoid late meals/triggers",
      "PPIs first-line for symptomatic or erosive disease",
      "H2 blockers for mild intermittent symptoms",
    ],
    boardsPearls: [
      "Heartburn + regurgitation worse supine → GERD",
      "PPIs heal esophagitis and relieve symptoms",
      "Chronic GERD → Barrett metaplasia → adenocarcinoma risk in distal esophagus",
      "Alarm features (dysphagia, weight loss, bleeding) → endoscopy",
    ],
    pediatrics:
      "Infants often have physiologic reflux; pathologic GERD causes poor weight gain, irritability, or respiratory symptoms — distinguish from normal spitting up.",
  },
  {
    id: "barrett-esophagus",
    name: "Barrett Esophagus",
    etymology: "eponym: Norman Barrett + esophagus = food tube",
    aliases: [
      "barrett esophagus",
      "barrett's esophagus",
      "barrett oesophagus",
      "barrett mucosa",
      "intestinal metaplasia of esophagus",
      "columnar-lined esophagus",
    ],
    definition:
      "Replacement of normal distal squamous esophageal epithelium by intestinal-type columnar metaplasia (including goblet cells) from chronic gastroesophageal reflux, conferring increased esophageal adenocarcinoma risk.",
    pathophysiology:
      "Chronic acid/bile exposure → mucosal injury → adaptive intestinal metaplasia in distal esophagus (classically salmon-colored mucosa above GE junction) → progression through low-grade to high-grade dysplasia to invasive adenocarcinoma in a subset.",
    classicPresentation: [
      "Often asymptomatic; history of long-standing GERD",
      "May have ongoing heartburn or dysphagia if stricture or cancer develops",
    ],
    keyFindings: [
      "Salmon-colored mucosa in distal esophagus on endoscopy",
      "Biopsy required for diagnosis — intestinal metaplasia with goblet cells",
    ],
    keyLabs: [
      "Endoscopy with biopsies per Seattle protocol in surveillance",
      "No serum marker — histologic diagnosis",
    ],
    associations: [
      "Chronic GERD",
      "Obesity, white male sex, smoking",
      "Hiatal hernia",
    ],
    complications: [
      "Esophageal adenocarcinoma",
      "Esophageal stricture",
    ],
    distinguishFrom: [
      "GERD without metaplasia — squamous mucosa on biopsy",
      "Esophageal adenocarcinoma — invasive malignancy, not premalignant metaplasia alone",
      "Gastric cardia intestinal metaplasia — different anatomic origin",
    ],
    treatment: [
      "High-dose PPI to control reflux",
      "Endoscopic surveillance by dysplasia grade",
      "Endoscopic resection/ablation or esophagectomy for high-grade dysplasia or intramucosal cancer",
    ],
    boardsPearls: [
      "Barrett = intestinal metaplasia (goblet cells) in esophagus from chronic GERD",
      "Premalignant → esophageal adenocarcinoma pathway",
      "Salmon-colored mucosa at GE junction on endoscopy",
      "Metaplasia is reversible conceptually but clinically managed as cancer precursor",
    ],
    pediatrics:
      "Barrett esophagus is rare in children but can occur with severe chronic GERD; endoscopic biopsy confirms intestinal metaplasia.",
  },
  {
    id: "achalasia",
    name: "Achalasia",
    etymology: "Greek a = without + chalasis = relaxation",
    aliases: [
      "achalasia",
      "achalasia of the esophagus",
      "esophageal achalasia",
      "primary achalasia",
    ],
    definition:
      "Primary esophageal motility disorder from degeneration of myenteric (Auerbach) plexus neurons causing impaired LES relaxation and absent esophageal peristalsis.",
    pathophysiology:
      "Loss of inhibitory nitric oxide/VIP neurons in myenteric plexus → failed LES relaxation with food bolus and aperistaltic esophageal body → stasis, dilation, and progressive dysphagia; Chagas disease can cause secondary achalasia.",
    classicPresentation: [
      "Progressive dysphagia to solids and liquids (both from onset)",
      "Regurgitation of undigested food, nocturnal cough/aspiration",
      "Chest pain and weight loss",
      "Heartburn may occur from stasis without true acid hypersecretion",
    ],
    keyFindings: [
      "Bird-beak tapering of distal esophagus on barium swallow",
      "Dilated esophagus with air-fluid level",
      "Incomplete LES relaxation on manometry (gold standard)",
    ],
    keyLabs: [
      "Esophageal manometry — impaired LES relaxation, absent peristalsis",
      "Barium swallow — bird-beak appearance",
      "Endoscopy to exclude pseudoachalasia (distal cancer)",
    ],
    associations: [
      "Chagas disease (Trypanosoma cruzi) in endemic areas",
      "Increased esophageal squamous cell carcinoma risk with long-standing stasis",
    ],
    complications: [
      "Aspiration pneumonia",
      "Megaesophagus",
      "Esophageal cancer (long-term)",
    ],
    distinguishFrom: [
      "GERD — heartburn predominant; normal peristalsis",
      "Esophageal cancer (pseudoachalasia) — older patient, short history, weight loss",
      "Scleroderma esophagus — low LES pressure, wide reflux; connective tissue disease features",
      "Diffuse esophageal spasm — intermittent chest pain, corkscrew esophagus",
    ],
    treatment: [
      "Pneumatic dilation or laparoscopic Heller myotomy",
      "Botulinum toxin injection into LES (temporary)",
      "POEM (peroral endoscopic myotomy) in selected centers",
    ],
    boardsPearls: [
      "Dysphagia to solids AND liquids + bird-beak on barium = achalasia",
      "Myenteric (Auerbach) plexus degeneration — failed LES relaxation",
      "Manometry is diagnostic gold standard",
      "vs GERD — reflux symptoms without motility loss pattern",
    ],
    pediatrics:
      "Childhood achalasia presents with regurgitation, weight loss, and recurrent aspiration; manometry confirms diagnosis.",
  },
  {
    id: "esophageal-varices",
    name: "Esophageal Varices",
    etymology: "Greek oisophagos = food tube + Latin varix = twisted vein",
    aliases: [
      "esophageal varices",
      "esophageal varice",
      "esophageal varix",
      "gastroesophageal varices",
      "bleeding esophageal varices",
    ],
    definition:
      "Dilated submucosal portosystemic collateral veins in the distal esophagus from portal hypertension, at risk of life-threatening hemorrhage.",
    pathophysiology:
      "Portal hypertension (usually cirrhosis) → ↑ pressure in left gastric and short gastric veins → collateral flow through esophageal venous plexus to azygos/systemic circulation → tortuous submucosal varices prone to rupture from increased portal pressure.",
    classicPresentation: [
      "Often asymptomatic until rupture",
      "Hematemesis or melena from acute variceal bleed",
      "Signs of chronic liver disease and portal hypertension (ascites, splenomegaly, caput medusae)",
    ],
    keyFindings: [
      "Dilated tortuous veins in lower esophagus on endoscopy",
      "Stigmata of cirrhosis and portal hypertension on exam",
    ],
    keyLabs: [
      "Endoscopy — diagnostic and therapeutic (band ligation)",
      "CBC for anemia; coagulation studies; type and crossmatch",
      "Hepatic panel and imaging for cirrhosis etiology",
    ],
    associations: [
      "Cirrhosis (most common)",
      "Portal vein thrombosis",
      "Schistosomiasis",
      "Non-cirrhotic portal hypertension",
    ],
    complications: [
      "Massive upper GI hemorrhage and shock",
      "Hepatic encephalopathy after bleed",
      "Rebleeding — high mortality without prophylaxis",
    ],
    distinguishFrom: [
      "Mallory-Weiss tear — mucosal laceration at GE junction after retching; no portal HTN required",
      "Peptic ulcer bleeding — ulcer crater on endoscopy",
      "Esophagitis — erosions, not varices",
      "Gastric varices — different endoscopic location (GOV2, IGV)",
    ],
    treatment: [
      "Acute bleed: octreotide, IV antibiotics, resuscitation, emergent endoscopic band ligation",
      "Secondary prophylaxis: nonselective β-blocker ± repeat ligation; TIPS if refractory",
      "Primary prophylaxis in high-risk varices: β-blocker or prophylactic ligation",
    ],
    boardsPearls: [
      "Portal hypertension → esophageal varices at gastroesophageal junction",
      "Left gastric vein anastomoses with esophageal veins — portosystemic collateral",
      "Acute management: octreotide + antibiotics + band ligation",
      "Caput medusae and hemorrhoids are other portosystemic collaterals",
    ],
    pediatrics:
      "Esophageal varices occur in children with biliary atresia, congenital hepatic fibrosis, or cirrhosis; same bleeding precautions and endoscopic principles apply with specialist care.",
  },
  {
    id: "esophageal-squamous-cell-carcinoma",
    name: "Esophageal Squamous Cell Carcinoma",
    etymology: "Greek oisophagos = food tube + squama = scale + carcinoma = malignant epithelial tumor",
    aliases: [
      "esophageal squamous cell carcinoma",
      "esophageal squamous carcinoma",
      "esophageal scc",
      "squamous cell carcinoma of the esophagus",
      "esophageal cancer squamous",
    ],
    definition:
      "Malignant tumor of esophageal squamous epithelium, classically involving the upper and middle thirds, strongly linked to smoking and alcohol.",
    pathophysiology:
      "Chronic carcinogen exposure (smoking, alcohol, hot beverages, achalasia stasis) → squamous dysplasia → invasive SCC → luminal obstruction and local invasion; lymphatic spread to mediastinal nodes.",
    classicPresentation: [
      "Progressive dysphagia — solids then liquids",
      "Unintentional weight loss",
      "Odynophagia, chest or back pain",
      "Smoking and heavy alcohol use",
    ],
    keyFindings: [
      "Progressive solid-food dysphagia",
      "Weight loss and anemia",
    ],
    keyLabs: [
      "Endoscopy with biopsy — confirms SCC histology",
      "CT/PET for staging",
    ],
    associations: [
      "Tobacco and alcohol (synergistic risk)",
      "Achalasia and long-standing esophageal stasis",
      "Plummer-Vinson syndrome (rare)",
      "HPV in some cases (more common in oropharyngeal SCC)",
    ],
    complications: [
      "Tracheoesophageal fistula",
      "Esophageal obstruction and malnutrition",
      "Metastasis to liver, lung, bone",
    ],
    distinguishFrom: [
      "Esophageal adenocarcinoma — distal esophagus/GE junction; Barrett/GERD pathway",
      "Achalasia — motility disorder without mass lesion",
      "Esophageal stricture — benign peptic or caustic",
    ],
    treatment: [
      "Chemoradiation and/or esophagectomy depending on stage",
      "Palliative stenting for obstruction",
    ],
    boardsPearls: [
      "Upper/middle esophagus SCC — smoking + alcohol",
      "Progressive dysphagia solids → liquids = esophageal cancer until proven otherwise",
      "vs adenocarcinoma — distal esophagus, GERD/Barrett association",
      "Worldwide SCC more common; US adenocarcinoma rising in distal esophagus",
    ],
    pediatrics:
      "Esophageal SCC is extremely rare in children; dysphagia in pediatrics more often structural or eosinophilic esophagitis.",
  },
  {
    id: "esophageal-adenocarcinoma",
    name: "Esophageal Adenocarcinoma",
    etymology: "Greek oisophagos = food tube + aden = gland + carcinoma = malignant epithelial tumor",
    aliases: [
      "esophageal adenocarcinoma",
      "esophageal adenocarcinomas",
      "adenocarcinoma of the esophagus",
      "distal esophageal adenocarcinoma",
      "ge junction adenocarcinoma",
      "gastroesophageal junction adenocarcinoma",
    ],
    definition:
      "Malignant glandular tumor arising in the distal esophagus or gastroesophageal junction, usually on a background of chronic GERD and Barrett esophagus.",
    pathophysiology:
      "Chronic acid reflux → Barrett intestinal metaplasia → dysplasia → invasive adenocarcinoma in distal esophagus; obesity and male sex increase risk; often presents late with luminal obstruction.",
    classicPresentation: [
      "Progressive dysphagia and weight loss",
      "History of long-standing GERD",
      "Older white male demographic (epidemiologic pattern on boards)",
      "Odynophagia or bleeding in advanced disease",
    ],
    keyFindings: [
      "Distal esophageal or GE junction mass on endoscopy",
      "Barrett mucosa adjacent to tumor in many cases",
    ],
    keyLabs: [
      "Endoscopy with biopsy — glandular/architectural malignancy",
      "CT/PET staging",
    ],
    associations: [
      "Barrett esophagus",
      "GERD, obesity, hiatal hernia",
      "Tobacco use",
    ],
    complications: [
      "Obstruction and cachexia",
      "Tracheoesophageal fistula",
      "Metastatic disease",
    ],
    distinguishFrom: [
      "Esophageal squamous cell carcinoma — upper/middle esophagus; smoking/alcohol",
      "Gastric adenocarcinoma — primarily gastric cardia/body origin",
      "Barrett esophagus without invasion — no adenocarcinoma on biopsy",
    ],
    treatment: [
      "Endoscopic therapy for intramucosal disease",
      "Esophagectomy, chemoradiation for invasive cancer",
      "Palliative stenting",
    ],
    boardsPearls: [
      "Distal esophagus adenocarcinoma — GERD → Barrett → cancer sequence",
      "Barrett is premalignant metaplasia with goblet cells",
      "vs SCC — upper/middle esophagus, alcohol/tobacco, squamous histology",
      "Obesity and chronic reflux increase US adenocarcinoma incidence",
    ],
    pediatrics:
      "Esophageal adenocarcinoma essentially does not occur in childhood; adolescent GERD management aims to prevent long-term complications.",
  },
  {
    id: "hemolytic-anemia",
    name: "Hemolytic Anemia",
    etymology:
      "Greek haima = blood + lysis = loosening/breakdown + an- = without + haima = blood",
    aliases: [
      "hemolytic anemia",
      "haemolytic anemia",
      "hemolytic anaemia",
      "haemolytic anaemia",
      "hemolysis",
      "intravascular hemolysis",
      "extravascular hemolysis",
      "autoimmune hemolytic anemia",
      "aiha",
    ],
    definition:
      "Anemia caused by premature red blood cell destruction, either intravascularly in the circulation or extravascularly by splenic/hepatic macrophages.",
    pathophysiology:
      "RBC destruction exceeds marrow replacement → reticulocytosis; heme breakdown raises indirect bilirubin and LDH, while free hemoglobin consumes haptoglobin. Extravascular hemolysis occurs mainly in spleen/liver macrophages; intravascular hemolysis releases hemoglobin into plasma and urine.",
    classicPresentation: [
      "Fatigue, pallor, dyspnea from anemia",
      "Jaundice or scleral icterus from indirect hyperbilirubinemia",
      "Dark urine in intravascular hemolysis",
      "Splenomegaly in chronic extravascular hemolysis",
    ],
    keyFindings: [
      "Jaundice without primary liver disease",
      "Splenomegaly",
      "Pigment gallstones in chronic hemolysis",
      "Peripheral smear clues: spherocytes, schistocytes, bite cells, sickled cells",
    ],
    keyLabs: [
      "↑ Reticulocyte count",
      "↑ LDH and ↑ indirect bilirubin",
      "↓ Haptoglobin",
      "Direct Coombs test positive in immune hemolysis",
      "Urine hemoglobin/hemosiderin in intravascular hemolysis",
    ],
    associations: [
      "Warm autoimmune hemolytic anemia — IgG, spherocytes, extravascular hemolysis",
      "Cold agglutinin disease — IgM, complement, Mycoplasma pneumoniae or EBV association",
      "Hereditary spherocytosis — ankyrin/spectrin defects, ↑ MCHC",
      "G6PD deficiency — oxidant stress, Heinz bodies and bite cells",
      "Microangiopathic hemolytic anemia — schistocytes in TTP/HUS/DIC",
      "Paroxysmal nocturnal hemoglobinuria — PIGA mutation, absent CD55/CD59",
    ],
    complications: [
      "Pigment gallstones",
      "Aplastic crisis from parvovirus B19",
      "Folate deficiency from high erythropoiesis",
      "Acute kidney injury in severe intravascular hemolysis",
    ],
    distinguishFrom: [
      "Iron deficiency anemia — low ferritin, microcytosis, low reticulocyte response",
      "Anemia of chronic disease — inflammatory iron sequestration, not RBC destruction",
      "Acute blood loss — anemia from hemorrhage, not hemolysis labs",
      "Megaloblastic anemia — macrocytosis and hypersegmented neutrophils",
    ],
    treatment: [
      "Treat underlying cause; transfuse if severe or unstable",
      "Folate supplementation for chronic hemolysis",
      "Warm autoimmune hemolytic anemia: corticosteroids ± rituximab or splenectomy",
      "TTP: urgent plasma exchange; PNH: complement inhibition (eculizumab/ravulizumab)",
      "G6PD deficiency: avoid oxidant drugs and foods; supportive care during episodes",
    ],
    boardsPearls: [
      "Hemolysis labs: ↑ reticulocytes, ↑ LDH, ↑ indirect bilirubin, ↓ haptoglobin",
      "Coombs positive = immune hemolysis",
      "Spherocytes suggest warm AIHA or hereditary spherocytosis; schistocytes suggest MAHA",
      "Bite cells/Heinz bodies suggest G6PD deficiency after oxidant stress",
      "Extravascular hemolysis → splenomegaly; intravascular hemolysis → hemoglobinuria",
    ],
    pediatrics:
      "Hereditary spherocytosis, G6PD deficiency, sickle cell disease, HUS after bloody diarrhea, and parvovirus B19 aplastic crisis are high-yield pediatric hemolysis settings.",
  },
  {
    id: "pernicious-anemia",
    name: "Pernicious Anemia",
    etymology: "Latin perniciosus = destructive/deadly + Greek an- = without + haima = blood",
    aliases: [
      "pernicious anemia",
      "pernicious anaemia",
      "pa",
      "autoimmune gastritis with b12 deficiency",
      "intrinsic factor deficiency anemia",
    ],
    definition:
      "Autoimmune destruction of gastric parietal cells and intrinsic factor causing vitamin B12 malabsorption, megaloblastic anemia, and risk of subacute combined degeneration.",
    pathophysiology:
      "Autoantibodies against parietal cells and/or intrinsic factor → loss of intrinsic factor–cobalamin complex formation in stomach → B12 cannot be absorbed in terminal ileum → impaired DNA synthesis (megaloblastic anemia) and defective myelin maintenance (neurologic injury). Associated with chronic autoimmune atrophic gastritis.",
    classicPresentation: [
      "Fatigue, pallor, glossitis (beefy red tongue)",
      "Paresthesias, ataxia, weakness from subacute combined degeneration",
      "Elderly patient with macrocytic anemia",
      "May precede overt anemia with neurologic symptoms",
    ],
    keyFindings: [
      "Macrocytic anemia with hypersegmented neutrophils on smear",
      "Loss of parietal cells → achlorhydria; may have autoimmune gastritis",
      "Posterolateral column and corticospinal tract signs if neurologic involvement",
    ],
    keyLabs: [
      "↓ Serum vitamin B12",
      "↑ Methylmalonic acid and ↑ homocysteine (B12-specific metabolites)",
      "Anti-intrinsic factor antibodies (highly specific) and anti-parietal cell antibodies",
      "Bone marrow: megaloblastic changes if severe",
    ],
    associations: [
      "Autoimmune gastritis and achlorhydria",
      "Other autoimmune diseases — Hashimoto thyroiditis, type 1 diabetes, vitiligo",
      "Increased gastric adenocarcinoma and carcinoid tumor risk with long-standing atrophic gastritis",
      "Strict vegan diet — B12 deficiency but not autoimmune pernicious anemia mechanism",
    ],
    complications: [
      "Subacute combined degeneration — irreversible if untreated",
      "Gastric adenocarcinoma and neuroendocrine tumors in chronic atrophic gastritis",
      "Heart failure from severe anemia",
    ],
    distinguishFrom: [
      "Folate deficiency — macrocytic anemia without ↑ MMA or neurologic subacute combined degeneration",
      "Crohn disease / ileal resection — B12 malabsorption without anti-intrinsic factor antibodies",
      "Alcoholism and liver disease — macrocytosis without classic B12 deficiency pattern",
      "Hypothyroidism — macrocytosis from ↓ marrow turnover, not megaloblastosis",
      "Myelodysplastic syndrome — macrocytosis with cytopenias and dysplasia",
    ],
    treatment: [
      "Lifelong parenteral (IM) or high-dose oral B12 replacement (cyanocobalamin or hydroxocobalamin)",
      "Correct folate only after B12 repletion if dual deficiency suspected",
      "Monitor for gastric malignancy in chronic atrophic gastritis",
    ],
    boardsPearls: [
      "Autoimmune destruction of parietal cells → no intrinsic factor → B12 not absorbed in terminal ileum",
      "Anti-intrinsic factor antibody is highly specific for pernicious anemia",
      "B12 deficiency → ↑ MMA + ↑ homocysteine; folate deficiency → ↑ homocysteine only",
      "Subacute combined degeneration: dorsal columns (↓ vibration/proprioception) + lateral corticospinal tracts",
      "Give B12 before folate — folate alone can fix anemia but worsen neurologic damage",
      "Beefy red tongue (glossitis) + macrocytic anemia + neurologic signs → B12 deficiency",
    ],
    pediatrics:
      "Classic autoimmune pernicious anemia is an adult disease; congenital intrinsic factor deficiency or transcobalamin II deficiency causes B12 deficiency in infants with failure to thrive, developmental delay, and megaloblastic anemia.",
  },
  {
    id: "sickle-cell-disease",
    name: "Sickle Cell Disease",
    etymology: "Old English sicol = curved blade + cell = small biological unit + disease = disordered function",
    aliases: ["sickle cell disease", "sickle cell anemia", "scd", "hbss"],
    definition:
      "Autosomal recessive hemoglobinopathy from HbS (β6 Glu→Val) causing red cell sickling, hemolysis, and vaso-occlusion.",
    pathophysiology:
      "Deoxygenated HbS polymerizes → sickle-shaped RBCs → vaso-occlusion and hemolysis; repeated infarcts cause organ damage.",
    classicPresentation: [
      "African descent child with painful crises",
      "Dactylitis (hand-foot syndrome) in infant",
      "Splenic sequestration, aplastic crisis",
    ],
    keyFindings: [
      "Sickled cells on peripheral smear",
      "Howell-Jolly bodies (functional asplenia)",
      "Bone infarcts on imaging",
    ],
    keyLabs: [
      "Hemoglobin electrophoresis: HbSS",
      "↑ reticulocyte count",
      "Indirect hyperbilirubinemia",
    ],
    associations: [
      "Autosomal recessive",
      "Malaria endemic areas (heterozygote advantage)",
    ],
    complications: [
      "Acute chest syndrome",
      "Stroke",
      "Avascular necrosis of femoral head",
      "Autosplenectomy",
    ],
    distinguishFrom: [
      "Sickle cell trait — HbAS, asymptomatic, no anemia",
      "β-thalassemia — target cells, HbA2 elevation",
    ],
    treatment: [
      "Hydroxyurea to ↑ fetal hemoglobin and ↓ vaso-occlusive crises",
      "Pain crisis: IV fluids, opioids; penicillin prophylaxis in children",
    ],
    boardsPearls: [
      "HbS: glutamic acid → valine at position 6 of β-globin",
      "Functional asplenia → encapsulated organism risk (Strep pneumo, H. flu, Salmonella)",
      "Hydroxyurea ↑ fetal hemoglobin → ↓ sickling",
    ],
    pediatrics:
      "Newborn screen detects HbS; dactylitis is common first manifestation in infants; penicillin prophylaxis until age 5.",
  },
  {
    id: "sickle-cell-trait",
    name: "Sickle Cell Trait",
    etymology: "Old English sicol = curved blade + cell = small biological unit + Latin tractus = drawn path",
    aliases: [
      "sickle cell trait",
      "sickle cell carrier",
      "hbas",
      "hb as",
      "heterozygous sickle cell",
    ],
    definition:
      "Heterozygous carrier state with one normal β-globin allele and one HbS allele (HbAS), usually asymptomatic with normal hemoglobin and no vaso-occlusive disease.",
    pathophysiology:
      "HbAS RBCs sickle only under extreme hypoxia, dehydration, or acidosis; most of life RBCs remain discoid → no chronic hemolysis or infarction at baseline; heterozygote advantage against Plasmodium falciparum malaria.",
    classicPresentation: [
      "Asymptomatic in daily life",
      "Normal CBC without anemia",
      "Incidental finding on newborn screen or pre-athletic screening",
      "May report painless hematuria (renal papillary necrosis) or rare exertional complications",
    ],
    keyFindings: [
      "No chronic anemia or splenomegaly",
      "Peripheral smear usually normal (occasional target cells)",
      "No history of painful crises typical of HbSS",
    ],
    keyLabs: [
      "Hemoglobin electrophoresis: ~55–60% HbA, ~35–40% HbS, minimal HbF",
      "Normal hemoglobin and reticulocyte count",
      "Positive sickle solubility test with confirmatory electrophoresis",
    ],
    associations: [
      "Autosomal codominant inheritance",
      "African, Mediterranean, Middle Eastern, and Indian ancestry",
      "Partial protection against severe falciparum malaria",
    ],
    complications: [
      "Isosthenuria (impaired urinary concentrating ability)",
      "Hematuria from renal papillary necrosis",
      "Rare exertional rhabdomyolysis/sudden death with extreme exertion at altitude (controversial screening topic)",
      "Risk of sickle cell disease offspring if partner is carrier",
    ],
    distinguishFrom: [
      "Sickle cell disease (HbSS) — anemia, crises, Howell-Jolly bodies, functional asplenia",
      "Sickle β-thalassemia — variable HbS with ↓ HbA and microcytosis",
      "Sickle cell disease with transfusion — do not confuse with trait on electrophoresis",
    ],
    treatment: [
      "No disease-specific treatment required",
      "Genetic counseling for reproductive planning",
      "Maintain hydration during extreme exercise or high altitude",
      "Avoid assuming trait explains unrelated anemia — evaluate separately",
    ],
    boardsPearls: [
      "HbAS = sickle cell trait; asymptomatic, no anemia",
      "Electrophoresis shows both HbA and HbS",
      "Trait confers partial malaria protection — heterozygote advantage",
      "vs HbSS: no painful crises, no autosplenectomy, normal lifespan",
      "Partner screening important — two carriers risk 25% HbSS offspring",
    ],
    pediatrics:
      "Newborn screen identifies HbAS; parents need counseling. Trait is not sickle cell disease — children do not need penicillin prophylaxis or hydroxyurea.",
  },
  {
    id: "beta-thalassemia-minor",
    name: "Beta-Thalassemia Minor",
    etymology: "Greek beta = second letter + thalassa = sea + haima = blood + Latin minor = smaller/lesser",
    aliases: [
      "beta-thalassemia minor",
      "β-thalassemia minor",
      "beta thalassemia minor",
      "beta-thalassemia trait",
      "β-thalassemia trait",
      "beta thalassemia trait",
      "thalassemia minor",
      "thalassemia trait",
    ],
    definition:
      "Carrier state of β-globin gene mutations with reduced β-chain synthesis, causing mild microcytic anemia without transfusion dependence.",
    pathophysiology:
      "One defective HBB allele → ↓ β-globin production → relative α-chain excess (usually balanced) → microcytic hypochromic RBCs with target cells; adequate HbA from normal allele prevents significant hemolysis.",
    classicPresentation: [
      "Often asymptomatic, discovered incidentally",
      "Mild microcytic anemia",
      "Mediterranean, Middle Eastern, African, or Southeast Asian ancestry",
      "Family history of thalassemia",
    ],
    keyFindings: [
      "Target cells on peripheral smear",
      "Basophilic stippling possible",
      "Mild splenomegaly uncommon",
    ],
    keyLabs: [
      "Microcytosis (↓ MCV) with mild anemia",
      "↑ HbA2 (>3.5%) on electrophoresis — key diagnostic clue",
      "Normal or near-normal RBC count (high RBC count for degree of anemia)",
      "Normal iron studies (ferritin normal)",
      "Normal RDW (vs iron deficiency)",
    ],
    associations: [
      "Autosomal recessive inheritance of mutant allele",
      "HBB gene point mutations or deletions",
      "Coexistence with iron deficiency can mask ↑ HbA2",
    ],
    complications: [
      "Misdiagnosis as iron deficiency if HbA2 not checked",
      "Risk of β-thalassemia major offspring if both parents are carriers",
    ],
    distinguishFrom: [
      "Iron deficiency anemia — ↑ RDW, ↓ ferritin, no ↑ HbA2",
      "Alpha-thalassemia trait — normal HbA2, often normal MCV or mild microcytosis",
      "Beta-thalassemia major — transfusion-dependent, HbF elevated, severe anemia",
      "Anemia of chronic disease — low iron, normal HbA2",
    ],
    treatment: [
      "No treatment required in uncomplicated trait",
      "Genetic counseling for reproductive planning",
      "Avoid unnecessary iron unless coexisting iron deficiency documented",
    ],
    boardsPearls: [
      "β-thalassemia minor: ↑ HbA2 is diagnostic",
      "Microcytic anemia + normal iron + normal RDW → think thalassemia trait",
      "High RBC count with low MCV favors thalassemia over iron deficiency",
      "Do not give iron empirically without ferritin workup",
    ],
    pediatrics:
      "May present as incidental microcytosis on CBC; confirm with Hb electrophoresis before labeling iron deficiency in at-risk ethnic backgrounds.",
  },
  {
    id: "beta-thalassemia-major",
    name: "Beta-Thalassemia Major",
    etymology: "Greek beta = second letter + thalassa = sea + haima = blood + Latin major = greater",
    aliases: [
      "beta-thalassemia major",
      "β-thalassemia major",
      "beta thalassemia major",
      "cooley anemia",
      "cooley's anemia",
      "mediterranean anemia",
      "thalassemia major",
    ],
    definition:
      "Severe autosomal recessive β-globin disorder with absent or markedly reduced β-chain synthesis, causing profound hemolytic anemia requiring chronic transfusion.",
    pathophysiology:
      "Two defective HBB alleles → absent/minimal β-globin → excess free α-chains precipitate in erythroid precursors → ineffective erythropoiesis and extravascular hemolysis → severe anemia; chronic transfusions cause iron overload.",
    classicPresentation: [
      "Severe anemia presenting in infancy after HbF declines (~6 months)",
      "Failure to thrive, pallor, hepatosplenomegaly",
      "Frontal bossing, maxillary hyperplasia ('chipmunk facies')",
      "Extramedullary hematopoiesis",
    ],
    keyFindings: [
      "Target cells, nucleated RBCs, tear-drop cells",
      "Massive hepatosplenomegaly",
      "Bone marrow expansion — 'hair-on-end' skull on X-ray",
    ],
    keyLabs: [
      "Hb electrophoresis: ↑↑ HbF, variable HbA2, absent/minimal HbA",
      "Severe microcytic hypochromic anemia",
      "↑ indirect bilirubin, ↑ LDH (hemolysis)",
      "↑ ferritin with transfusion (iron overload)",
    ],
    associations: [
      "Autosomal recessive",
      "Parents usually β-thalassemia minor carriers",
      "Chronic transfusion therapy",
    ],
    complications: [
      "Iron overload cardiomyopathy and cirrhosis",
      "Secondary hemochromatosis",
      "Splenomegaly requiring splenectomy",
      "Bone deformities from marrow expansion",
      "Growth retardation and delayed puberty",
    ],
    distinguishFrom: [
      "Beta-thalassemia minor — mild anemia, ↑ HbA2 only, asymptomatic",
      "Alpha-thalassemia major (hydrops fetalis) — presents in utero/neonatal death",
      "Iron deficiency — ↓ ferritin, responds to iron; no ↑ HbF pattern",
      "Sickle cell disease — HbS on electrophoresis, vaso-occlusive crises",
    ],
    treatment: [
      "Chronic packed RBC transfusions to maintain Hb",
      "Iron chelation (deferoxamine, deferasirox, deferiprone)",
      "Splenectomy if hypersplenism",
      "Allogeneic hematopoietic stem cell transplant curative in selected patients",
      "Gene therapy emerging",
    ],
    boardsPearls: [
      "Cooley anemia = β-thalassemia major",
      "Anemia after 6 months when HbF normally falls",
      "↑ HbF + transfusion dependence + iron overload",
      "Chelation mandatory with chronic transfusion",
      "Chipmunk facies and hair-on-end skull from marrow expansion",
    ],
    pediatrics:
      "Presents around 6 months of age with severe anemia as fetal Hb declines; newborn screen may not detect all cases — Hb electrophoresis if high-risk ancestry and pallor.",
  },
  {
    id: "lung-cancer",
    name: "Lung Cancer",
    etymology: "lung = respiratory organ + Greek karkinos = crab/cancer",
    aliases: ["lung cancer", "bronchogenic carcinoma", "lung carcinoma"],
    definition:
      "Malignant neoplasm of the lung, most commonly non-small cell (adenocarcinoma, squamous) or small cell carcinoma.",
    pathophysiology:
      "Carcinogen exposure (smoking) → cumulative genetic mutations → uncontrolled bronchial epithelial proliferation; small cell is neuroendocrine with early metastasis.",
    classicPresentation: [
      "Smoker with cough, hemoptysis, weight loss",
      "Chest pain, dyspnea",
      "Hoarseness (recurrent laryngeal nerve)",
    ],
    keyFindings: [
      "Mass or nodule on CXR/CT",
      "Supraclavicular lymphadenopathy",
      "Clubbing, hypertrophic osteoarthropathy",
    ],
    associations: [
      "Smoking (#1 risk factor)",
      "Asbestos (synergistic with smoking)",
      "Radon exposure",
    ],
    complications: [
      "Paraneoplastic syndromes",
      "Superior vena cava syndrome",
      "Pancoast tumor (horner syndrome)",
    ],
    distinguishFrom: [
      "Small cell — central, paraneoplastic, chemo-sensitive",
      "Adenocarcinoma — peripheral, EGFR mutations in nonsmokers",
      "Squamous — central, hypercalcemia (PTHrP)",
    ],
    treatment: [
      "Surgical resection for early-stage NSCLC",
      "Small cell: chemotherapy ± radiation (surgery rarely used)",
    ],
    boardsPearls: [
      "Small cell: SIADH, Cushing (ACTH), Lambert-Eaton",
      "Squamous: hypercalcemia (PTHrP)",
      "Adenocarcinoma: most common in nonsmokers and women",
    ],
  },
  {
    id: "breast-cancer",
    name: "Breast Cancer",
    etymology: "Old English breost = breast/chest + Greek karkinos = crab/cancer",
    aliases: [
      "breast cancer",
      "breast carcinoma",
      "invasive ductal carcinoma",
      "invasive lobular carcinoma",
      "ductal carcinoma in situ",
      "dcis",
      "lobular carcinoma in situ",
      "lcis",
    ],
    definition:
      "Malignant epithelial neoplasm of breast ductal or lobular tissue; most commonly invasive ductal carcinoma, with subtype behavior strongly influenced by ER/PR and HER2 status.",
    pathophysiology:
      "Accumulated driver mutations in ductal/lobular epithelium → uncontrolled proliferation, invasion, and metastatic potential; estrogen signaling, HER2 amplification, DNA repair defects (BRCA1/2), and tumor suppressor loss shape phenotype.",
    classicPresentation: [
      "Painless firm breast mass or abnormal screening mammogram",
      "Skin dimpling, nipple retraction, or peau d'orange",
      "Bloody nipple discharge or axillary lymphadenopathy",
    ],
    keyFindings: [
      "Hard irregular fixed mass",
      "Mammographic mass, architectural distortion, or microcalcifications",
      "Sentinel axillary node involvement for staging",
    ],
    keyLabs: [
      "Core needle biopsy for diagnosis",
      "ER, PR, and HER2 testing guides therapy",
      "BRCA1/2 genetic testing when family history/early onset suggests hereditary risk",
    ],
    associations: [
      "Female sex, age, family history",
      "BRCA1/BRCA2, TP53 (Li-Fraumeni), PTEN (Cowden)",
      "Prolonged estrogen exposure: early menarche, late menopause, nulliparity",
      "Radiation exposure",
      "Alcohol use and obesity after menopause",
    ],
    complications: [
      "Local invasion into skin/chest wall",
      "Axillary lymph node metastasis",
      "Bone, lung, liver, and brain metastases",
      "Lymphedema after axillary surgery/radiation",
    ],
    distinguishFrom: [
      "Fibroadenoma — mobile rubbery mass in young woman",
      "Fibrocystic change — cyclic pain/lumpiness, benign cystic changes",
      "Mastitis/abscess — painful erythematous infection, often lactation-associated",
      "Intraductal papilloma — benign cause of bloody nipple discharge but requires evaluation",
    ],
    treatment: [
      "Surgery: lumpectomy plus radiation or mastectomy depending on stage/patient factors",
      "Endocrine therapy for ER/PR+ disease: tamoxifen or aromatase inhibitors",
      "HER2-targeted therapy for HER2+ disease: trastuzumab-based regimens",
      "Chemotherapy for high-risk, triple-negative, HER2+, or advanced disease",
    ],
    boardsPearls: [
      "Most common breast cancer type = invasive ductal carcinoma",
      "ER+ tumors respond to tamoxifen/aromatase inhibitors; HER2+ tumors respond to trastuzumab",
      "BRCA1 often triple-negative; BRCA2 often ER+ and also raises male breast/prostate cancer risk",
      "Peau d'orange comes from dermal lymphatic obstruction",
      "LCIS increases bilateral breast cancer risk; DCIS is noninvasive but can progress",
    ],
    pediatrics:
      "Breast cancer is extremely rare in children/adolescents; pediatric breast masses are usually benign (fibroadenoma). Strong hereditary syndromes can require early genetic counseling and surveillance planning.",
  },
  {
    id: "cystic-fibrosis",
    name: "Cystic Fibrosis",
    etymology: "Greek kystis = bladder/sac + Latin fibra = fiber + -osis = condition",
    aliases: ["cystic fibrosis", "cf"],
    definition:
      "Autosomal recessive disorder from CFTR chloride channel dysfunction causing thick secretions in lungs, pancreas, and other organs.",
    pathophysiology:
      "CFTR mutation (ΔF508 most common) → defective chloride transport → dehydrated mucus → airway obstruction, recurrent infections, pancreatic insufficiency.",
    classicPresentation: [
      "Recurrent pulmonary infections (Staph aureus early, Pseudomonas later)",
      "Steatorrhea, failure to thrive",
      "Meconium ileus in newborn",
    ],
    keyLabs: [
      "↑ sweat chloride (>60 mEq/L diagnostic)",
      "CFTR genetic testing",
      "↓ fecal elastase (pancreatic insufficiency)",
    ],
    associations: ["Autosomal recessive", "ΔF508 mutation"],
    complications: [
      "Bronchiectasis",
      "Cor pulmonale",
      "Diabetes (CF-related)",
      "Infertility (males — absent vas deferens)",
    ],
    distinguishFrom: [
      "Primary ciliary dyskinesia — situs inversus, normal sweat chloride",
      "Celiac disease — malabsorption with normal lungs",
    ],
    treatment: [
      "Airway clearance, inhaled bronchodilators, CFTR modulators (e.g., ivacaftor/lumacaftor)",
      "Pancreatic enzyme replacement; treat infections aggressively",
    ],
    boardsPearls: [
      "Sweat chloride test is diagnostic gold standard",
      "Pseudomonas colonization is hallmark of chronic lung disease",
      "Absent vas deferens → infertility in males without obstruction",
    ],
    pediatrics:
      "Meconium ileus in newborn is virtually pathognomonic; newborn screen increasingly detects CF before symptoms.",
  },
  {
    id: "asthma",
    name: "Asthma",
    etymology: "Greek asthma = panting/short-drawn breath",
    aliases: ["asthma", "bronchial asthma", "reactive airway disease"],
    definition:
      "Chronic inflammatory airway disease with reversible bronchoconstriction, airway hyperresponsiveness, and variable expiratory airflow obstruction.",
    pathophysiology:
      "Type I hypersensitivity and eosinophilic inflammation → bronchial smooth muscle hyperreactivity → episodic bronchoconstriction; airway remodeling with chronic disease.",
    classicPresentation: [
      "Episodic wheezing, cough, dyspnea",
      "Nocturnal symptoms, exercise-induced symptoms",
      "Atopy, allergic rhinitis, eczema",
    ],
    keyFindings: [
      "Expiratory wheeze",
      "↓ FEV1/FVC ratio, reversibility with bronchodilator",
      "Hyperinflation on CXR",
    ],
    associations: ["Atopy", "Family history", "Occupational exposures"],
    complications: [
      "Status asthmaticus",
      "Respiratory failure",
      "Airway remodeling",
    ],
    distinguishFrom: [
      "COPD — older, smokers, incomplete reversibility",
      "Cardiac asthma — heart failure with wheeze",
      "Vocal cord dysfunction — normal spirometry between episodes",
    ],
    treatment: [
      "Inhaled corticosteroids for persistent disease; SABA for acute relief",
      "Avoid triggers; leukotriene modifiers for mild disease or aspirin-exacerbated respiratory disease",
    ],
    boardsPearls: [
      "Reversible obstruction: FEV1 improves ≥12% with bronchodilator",
      "First-line: inhaled corticosteroids for persistent disease",
      "Leukotriene modifiers (montelukast) for mild disease or aspirin-exacerbated respiratory disease",
    ],
    pediatrics:
      "Most common chronic disease of childhood; viral URIs are common triggers; watch for atypical presentations (cough-only asthma).",
  },
  {
    id: "sinusitis",
    name: "Sinusitis",
    etymology: "Latin sinus = hollow curve/cavity + -itis = inflammation",
    aliases: [
      "sinusitis",
      "acute sinusitis",
      "acute bacterial sinusitis",
      "rhinosinusitis",
      "maxillary sinusitis",
      "ethmoid sinusitis",
      "frontal sinusitis",
      "sphenoid sinusitis",
    ],
    definition:
      "Inflammation of the paranasal sinuses, usually following viral upper respiratory infection; bacterial superinfection is suspected when symptoms persist or worsen.",
    pathophysiology:
      "Viral URI → mucosal edema and impaired sinus drainage → stagnant secretions → bacterial overgrowth (S. pneumoniae, H. influenzae, M. catarrhalis, anaerobes). Obstruction of osteomeatal complex is central to pathogenesis.",
    classicPresentation: [
      "Facial pain or pressure worse on bending forward",
      "Purulent nasal discharge, nasal congestion",
      "Symptoms >10 days, or severe onset with high fever and purulent discharge ≥3–4 days",
      "Tooth pain (maxillary sinus)",
    ],
    keyFindings: [
      "Tenderness over affected sinuses",
      "Purulent rhinorrhea",
      "Transillumination may be decreased (limited utility)",
    ],
    keyLabs: [
      "Usually clinical diagnosis; imaging not routine for uncomplicated acute sinusitis",
      "CT sinuses if complications suspected or refractory disease",
    ],
    associations: [
      "Viral URI",
      "Allergic rhinitis",
      "Dental infection (maxillary)",
      "Immunocompromise",
      "Granulomatosis with polyangiitis (chronic destructive sinusitis)",
    ],
    complications: [
      "Orbital cellulitis (ethmoid sinusitis → periorbital swelling, ophthalmoplegia)",
      "Cavernous sinus thrombosis (headache, cranial nerve palsies, proptosis)",
      "Meningitis or brain abscess",
      "Chronic sinusitis and mucocele",
    ],
    distinguishFrom: [
      "Viral URI — symptoms improve by day 10",
      "Allergic rhinitis — clear rhinorrhea, sneezing, seasonal pattern, no fever",
      "Migraine/facial pain — no purulent discharge",
      "GPA — chronic sinusitis with epistaxis, saddle-nose deformity",
    ],
    treatment: [
      "Supportive care for viral rhinosinusitis",
      "Amoxicillin-clavulanate for acute bacterial sinusitis when criteria met",
      "Saline irrigation, intranasal corticosteroids may help drainage",
      "Urgent ENT/ophthalmology for orbital or intracranial complications",
    ],
    boardsPearls: [
      "Bacterial sinusitis: symptoms >10 days, or severe (fever ≥39°C + purulent discharge ≥3–4 days), or biphasic worsening after initial improvement",
      "Ethmoid sinusitis → orbital cellulitis — ophthalmoplegia and proptosis are emergencies",
      "Cavernous sinus thrombosis: fever, headache, proptosis, CN III/IV/VI palsies",
    ],
    pediatrics:
      "Orbital cellulitis is a pediatric emergency — distinguish preseptal (periorbital) from postseptal (orbital) cellulitis; ethmoiditis is the usual source.",
  },
  {
    id: "rhinitis",
    name: "Rhinitis",
    etymology: "Greek rhis = nose + -itis = inflammation",
    aliases: [
      "rhinitis",
      "allergic rhinitis",
      "hay fever",
      "vasomotor rhinitis",
      "nonallergic rhinitis",
      "perennial rhinitis",
      "seasonal rhinitis",
    ],
    definition:
      "Inflammation of the nasal mucosa causing congestion, rhinorrhea, sneezing, and pruritus; classified as allergic (IgE-mediated), infectious, or nonallergic (vasomotor, drug-induced, hormonal).",
    pathophysiology:
      "Allergic rhinitis: allergen exposure → IgE cross-linking on mast cells → histamine and leukotriene release → vasodilation, mucus secretion, sneezing. Vasomotor rhinitis: autonomic dysregulation and irritant triggers without IgE sensitization.",
    classicPresentation: [
      "Nasal congestion, rhinorrhea, sneezing, nasal/ocular pruritus",
      "Allergic: seasonal or perennial triggers (pollen, dust mites, pets)",
      "Clear rhinorrhea, pale boggy turbinates, allergic shiners, Dennie-Morgan lines",
      "Vasomotor: symptoms with temperature changes, strong odors, or stress",
    ],
    keyFindings: [
      "Pale, swollen nasal turbinates (allergic)",
      "Allergic salute (horizontal nasal crease in children)",
      "Conjunctival injection with allergic rhinitis",
    ],
    keyLabs: [
      "Skin prick testing or serum specific IgE for allergic rhinitis",
      "Usually clinical diagnosis; eosinophilia on nasal smear supports allergy",
    ],
    associations: [
      "Atopic triad: allergic rhinitis, asthma, eczema",
      "Chronic sinusitis and otitis media (eustachian tube dysfunction)",
      "Drug-induced rhinitis (ACE inhibitors, α-blockers, NSAIDs)",
    ],
    complications: [
      "Chronic sinusitis",
      "Otitis media (especially in children)",
      "Sleep disturbance and impaired quality of life",
      "Exacerbation of asthma",
    ],
    distinguishFrom: [
      "Viral URI — fever, malaise, symptoms <10 days, purulent discharge later",
      "Sinusitis — facial pain/pressure, purulent discharge >10 days",
      "Nasal polyps — anosmia, chronic obstruction, may coexist with allergy",
      "Cerebrospinal fluid rhinorrhea — unilateral clear discharge after trauma/surgery",
    ],
    treatment: [
      "Allergic: intranasal corticosteroids first line; oral/intranasal antihistamines, leukotriene modifiers",
      "Allergen avoidance and immunotherapy for refractory disease",
      "Vasomotor: intranasal anticholinergics (ipratropium), saline irrigation",
      "Treat comorbid asthma if present",
    ],
    boardsPearls: [
      "Intranasal corticosteroids are most effective for allergic rhinitis",
      "Atopy link: rhinitis + asthma + eczema on boards",
      "First-generation antihistamines sedating; second-generation (loratadine, cetirizine) preferred",
      "ACE inhibitor cough is separate; α-blockers cause rhinitis via vasodilation",
    ],
    pediatrics:
      "Allergic rhinitis common in school-age children; intranasal steroids safe at appropriate doses. Rule out adenoidal hypertrophy and foreign body in unilateral foul rhinorrhea.",
  },
  {
    id: "atopic-dermatitis",
    name: "Atopic Dermatitis",
    etymology: "Greek a- = not + topos = place + derma = skin + -itis = inflammation",
    aliases: [
      "atopic dermatitis",
      "ad",
      "eczema",
      "atopic eczema",
      "infantile eczema",
      "childhood eczema",
      "endogenous eczema",
      "flexural eczema",
      "flexural dermatitis",
      "pruritic flexural dermatitis",
    ],
    definition:
      "Chronic, relapsing inflammatory skin disease characterized by pruritus and eczematous lesions; the most common form of eczema and a core component of the atopic triad (with asthma and allergic rhinitis).",
    pathophysiology:
      "Skin barrier defect (filaggrin mutations common) → ↑ transepidermal water loss and allergen penetration; Th2-skewed immune response (IL-4, IL-13) → IgE sensitization, inflammation, and pruritus. S. aureus colonization often exacerbates disease.",
    classicPresentation: [
      'Intense pruritus — "eczema is the itch that rashes"',
      "Infants: erythematous papules/plaques on cheeks and extensor surfaces",
      "Children/adults: flexural distribution (antecubital and popliteal fossae, neck)",
      "Xerosis (dry skin), lichenification from chronic scratching",
      "Personal or family history of atopy (asthma, allergic rhinitis, food allergy)",
    ],
    keyFindings: [
      "Erythematous, scaly, excoriated plaques",
      "Dennie-Morgan infraorbital folds, periorbital darkening",
      "Keratosis pilaris, palmar hyperlinearity",
      "Secondary crusting/honey-colored lesions → impetiginization (S. aureus)",
    ],
    keyLabs: [
      "Clinical diagnosis — no routine lab required",
      "↑ IgE or eosinophilia can occur but is nonspecific",
      "Bacterial culture if recurrent or treatment-resistant impetiginization",
      "HSV PCR/culture if eczema herpeticum suspected",
    ],
    associations: [
      'Atopic triad: eczema, asthma, allergic rhinitis ("atopic march")',
      "Food allergy (egg, milk, peanut) especially in young children",
      "Filaggrin gene (FLG) mutations — barrier defect",
      "Higher risk with family history of atopy",
    ],
    complications: [
      "Secondary bacterial infection (impetigo, cellulitis — S. aureus)",
      "Eczema herpeticum — HSV superinfection with monomorphic punched-out erosions, fever; dermatologic emergency",
      "Molluscum contagiosum and viral warts more extensive with impaired barrier",
      "Sleep disturbance, psychosocial impact",
    ],
    distinguishFrom: [
      "Contact dermatitis — localized to allergen/irritant exposure site; patch testing",
      "Seborrheic dermatitis — greasy yellow scales on scalp, nasolabial folds, diaper area in infants",
      "Scabies — burrows, nocturnal itch, web spaces and wrists",
      "Psoriasis — well-demarcated silvery plaques, extensor surfaces, nail pitting",
      "Tinea — annular, central clearing; KOH positive",
      "Nummular eczema — coin-shaped lesions; may overlap with atopic dermatitis",
    ],
    treatment: [
      "Emollients/moisturizers — cornerstone of maintenance; restore skin barrier",
      "Gentle skin care: fragrance-free cleanser, short lukewarm baths, avoid harsh irritants",
      "Topical corticosteroids — flares; use appropriate potency for site and age",
      "Topical calcineurin inhibitors (tacrolimus, pimecrolimus) — face/folds, steroid-sparing",
      "Wet wraps for severe flares; dilute bleach baths may reduce recurrent S. aureus burden",
      "Dupilumab (anti–IL-4Rα) — moderate-to-severe disease refractory to topicals",
      "Oral JAK inhibitors or phototherapy for selected refractory disease",
      "Trigger avoidance; treat secondary infection; oral antihistamines for sleep-disturbing pruritus",
    ],
    boardsPearls: [
      "Atopic dermatitis = most common eczema; terms often used interchangeably on boards",
      "Atopic march: eczema in infancy → food allergy → asthma/rhinitis later",
      "Filaggrin mutation → impaired skin barrier — high-yield genetics link",
      "Eczema herpeticum — punched-out vesicles/erosions in atopic patient with fever → IV acyclovir",
      "S. aureus colonization common; crusted weeping lesions may need antibiotics",
      "Distribution changes with age: infant face/extensors; child/adult flexural surfaces",
    ],
    pediatrics:
      "Most common in infancy and childhood; 60% present in first year. Many outgrow by adolescence. Food allergy testing only if consistent history — elimination diet under guidance. Topical steroid potency must be age- and site-appropriate (lower potency on face/diaper area).",
  },
  {
    id: "allergic-contact-dermatitis",
    name: "Allergic Contact Dermatitis",
    etymology: "Greek allos = other + ergon = reaction/work + Latin contactus = touching + derma = skin + -itis = inflammation",
    aliases: [
      "allergic contact dermatitis",
      "contact dermatitis",
      "contact hypersensitivity",
      "allergic contact eczema",
      "acd",
    ],
    definition:
      "Type IV (delayed) hypersensitivity reaction of the skin to a topical hapten or allergen, producing pruritic eczematous dermatitis localized to the site of contact (and sometimes distant sites with systemic exposure).",
    pathophysiology:
      "Hapten penetrates skin → binds self proteins → Langerhans cells capture and migrate to lymph nodes → sensitize CD4⁺ T cells. Re-exposure → Th1 cytokines recruit macrophages and lymphocytes → spongiotic dermatitis peaks at 48–72 hours.",
    classicPresentation: [
      "Pruritic erythema, vesicles, and oozing at site of allergen contact",
      "Sharp demarcation at exposure border (e.g., wrist under watch, earlobe from nickel earrings)",
      "Linear streaks after brushing against poison ivy (urushiol)",
      "Chronic exposure → lichenification and hyperpigmentation",
      "Common allergens: nickel, poison ivy/oak, neomycin, formaldehyde, rubber accelerators, fragrances",
    ],
    keyFindings: [
      "Eczematous plaque with vesicles in acute phase; scaling and fissuring when chronic",
      "Distribution matches exposure pattern — not flexural (vs atopic dermatitis)",
      "Patch testing confirms culprit allergen (read at 48–96 h)",
      "Histology: spongiosis, perivascular lymphocytic infiltrate (type IV)",
    ],
    associations: [
      "Occupational dermatitis — healthcare workers (latex, antiseptics), hairdressers, machinists",
      "Poison ivy/oak/sumac — urushiol hapten",
      "Nickel — most common contact allergen worldwide",
      "Topical antibiotics (neomycin, bacitracin) — sensitization",
    ],
    complications: [
      "Secondary bacterial infection from excoriation",
      "Chronic lichenified dermatitis with persistent exposure",
      "Hyperpigmentation or hypopigmentation post-inflammation",
    ],
    distinguishFrom: [
      "Irritant contact dermatitis — direct chemical injury, no prior sensitization; more common than allergic",
      "Atopic dermatitis — flexural, bilateral, atopy history; not sharply demarcated to contact site",
      "Tinea — annular, KOH positive; central clearing",
      "Dyshidrotic eczema — vesicles on palms/soles; not linear exposure pattern",
      "Nummular eczema — coin-shaped lesions without clear allergen border",
    ],
    treatment: [
      "Identify and avoid allergen — cornerstone",
      "Topical corticosteroids for acute flares",
      "Systemic corticosteroids for severe widespread reactions (e.g., poison ivy)",
      "Emollients and barrier protection (gloves, nickel-free jewelry)",
      "Patch testing when cause unclear or occupational",
    ],
    boardsPearls: [
      "Type IV hypersensitivity — delayed 48–72 h; not IgE-mediated",
      "Hapten + skin protein → Langerhans cell presentation → CD4⁺ T cells",
      "Patch test read at 48–96 h — do not confuse with prick test (type I)",
      "Poison ivy — urushiol; wash within 30 min reduces severity; linear vesicles",
      "vs irritant contact dermatitis — more common; soap, solvents; no immune sensitization required",
    ],
    pediatrics:
      "Nickel from ear piercing and belt buckles common in children; poison ivy exposure during outdoor play. Diaper dermatitis is usually irritant (urine/feces), not allergic type IV.",
  },
  {
    id: "venous-stasis-dermatitis",
    name: "Venous Stasis Dermatitis",
    etymology: "Latin vena = vein + Greek stasis = standing still + derma = skin + -itis = inflammation",
    aliases: [
      "venous stasis dermatitis",
      "stasis dermatitis",
      "venous eczema",
      "stasis eczema",
      "gravitational dermatitis",
      "congestive dermatitis",
    ],
    definition:
      "Inflammatory eczematous dermatitis of the lower legs caused by chronic venous insufficiency and sustained elevation of venous hydrostatic pressure, often preceding or coexisting with venous leg ulcers.",
    pathophysiology:
      "Valvular incompetence or prior DVT → venous hypertension → capillary leakage of fibrin, hemosiderin, and inflammatory mediators → dermal inflammation, fibrosis (lipodermatosclerosis), and impaired wound healing. Hemosiderin deposition causes brownish discoloration.",
    classicPresentation: [
      "Older adult with bilateral (or unilateral post-DVT) lower leg involvement",
      "Pruritic, erythematous, scaling eczematous patches around medial malleolus (gaiter area)",
      "Dependent edema worse at end of day; improves with elevation",
      "Brownish hemosiderin staining of skin",
      "Varicose veins and leg heaviness/aching",
      "Chronic changes: lipodermatosclerosis (firm, woody induration) → \"inverted champagne bottle\" leg",
    ],
    keyFindings: [
      "Eczematous dermatitis localized to lower legs, especially medial ankle",
      "Pitting edema with chronic venous insufficiency",
      "Hemosiderin pigmentation (golden-brown discoloration)",
      "Varicose veins; may have prior DVT history",
      "Duplex ultrasound — reflux in superficial or deep venous system",
    ],
    associations: [
      "Chronic venous insufficiency and varicose veins",
      "Prior deep vein thrombosis (post-thrombotic syndrome)",
      "Obesity, prolonged standing, pregnancy",
      "Venous leg ulcers — often medial malleolar, shallow with irregular borders",
    ],
    complications: [
      "Venous stasis ulcers — most common leg ulcer type",
      "Cellulitis — can be recurrent; distinguish from dermatitis flare",
      "Contact sensitization from topical treatments (allergic contact dermatitis overlay)",
      "Lipodermatosclerosis and chronic lymphedema-like changes",
    ],
    distinguishFrom: [
      "Cellulitis — acute, unilateral warmth and tenderness, fever, sharply progressive; dermatitis is chronic and bilateral",
      "Arterial insufficiency ulcer — distal toes/foot, painful, absent pulses, ABI <0.9",
      "Atopic dermatitis — flexural, not dependent gaiter distribution",
      "Allergic contact dermatitis — exposure pattern (topical agent), patch test positive",
      "Necrobiosis lipoidica — yellow-brown atrophic plaques on shins, associated with diabetes",
    ],
    treatment: [
      "Compression therapy (graduated stockings or wraps) — cornerstone",
      "Leg elevation, exercise (calf pump), weight loss",
      "Topical corticosteroids for active eczematous inflammation",
      "Emollients; treat secondary infection if present",
      "Address underlying venous disease; wound care for ulcers",
    ],
    boardsPearls: [
      "Stasis dermatitis = chronic venous insufficiency + lower leg eczematous inflammation",
      "Gaiter distribution (medial malleolus) + hemosiderin staining + edema + varicose veins",
      "Lipodermatosclerosis — woody induration; inverted champagne bottle appearance",
      "Venous ulcers are shallow, irregular, medial ankle; arterial ulcers are distal, painful, punched-out",
      "Compression is mainstay — do not confuse with arterial disease (check ABI before compression if concern)",
    ],
    pediatrics:
      "Rare in children; consider venous malformations or congenital venous insufficiency if similar findings. Most pediatric leg eczema is atopic, not stasis-related.",
  },
  {
    id: "psoriasis",
    name: "Psoriasis",
    etymology: "Greek psora = itch + -iasis = condition",
    aliases: [
      "psoriasis",
      "plaque psoriasis",
      "psoriatic disease",
      "guttate psoriasis",
    ],
    definition:
      "Chronic immune-mediated inflammatory skin disease characterized by well-demarcated erythematous plaques with silvery scale, driven by dysregulated keratinocyte proliferation and Th1/Th17-mediated inflammation.",
    pathophysiology:
      "Dendritic cells and keratinocytes release IL-23 → Th17 differentiation → IL-17 and TNF-α → ↑ keratinocyte proliferation and neutrophil recruitment. Histology: acanthosis, parakeratosis, hypogranulosis, Munro microabscesses (neutrophils in stratum corneum).",
    classicPresentation: [
      "Well-demarcated erythematous plaques with thick silvery-white scale",
      "Extensor surfaces (elbows, knees), scalp, lumbosacral region",
      "Pruritus or burning; often chronic and relapsing",
      'Nail changes — pitting, onycholysis, "oil spots," subungual hyperkeratosis',
      "Auspitz sign — pinpoint bleeding when scale is scraped (exposed dermal papillae)",
      "Koebner phenomenon — new lesions at sites of skin trauma",
    ],
    keyFindings: [
      "Silvery scale on erythematous plaques (extensor > flexural distribution)",
      "Nail pitting and dystrophy",
      "Guttate variant — small drop-like papules after streptococcal pharyngitis",
      "Inverse psoriasis — smooth erythematous plaques in intertriginous areas (minimal scale)",
    ],
    associations: [
      'Psoriatic arthritis — asymmetric oligoarthritis, DIP involvement, dactylitis ("sausage digits"), enthesitis',
      "HLA-B27 association (especially with psoriatic spondylitis)",
      "Inflammatory bowel disease (Crohn disease, ulcerative colitis)",
      "Metabolic syndrome, obesity, cardiovascular disease",
      "Post-streptococcal guttate psoriasis",
    ],
    complications: [
      "Psoriatic arthritis (up to 30% of psoriasis patients)",
      "Erythrodermic psoriasis — widespread erythema and desquamation; can be life-threatening",
      "Generalized pustular psoriasis — sterile pustules, fever, systemic illness",
      "Psychosocial burden and impaired quality of life",
    ],
    distinguishFrom: [
      "Atopic dermatitis — flexural distribution, eczematous morphology, intense pruritus, no silvery scale",
      "Seborrheic dermatitis — greasy yellow scales on scalp, face, central chest",
      "Tinea corporis — annular with central clearing; KOH positive",
      "Lichen planus — violaceous flat-topped papules, Wickham striae",
      "Secondary syphilis — palmar/plantar lesions, lymphadenopathy, positive serology",
      "Pityriasis rosea — herald patch, Christmas-tree distribution on trunk",
    ],
    treatment: [
      "Mild/moderate: topical corticosteroids, vitamin D analogs (calcipotriene), coal tar, phototherapy (UVB)",
      "Moderate/severe or psoriatic arthritis: methotrexate, cyclosporine, acitretin",
      "Biologics: anti-TNF (infliximab, adalimumab, etanercept), anti–IL-17 (secukinumab), anti–IL-23 (guselkumab)",
      "Guttate psoriasis — treat streptococcal infection; many cases remit spontaneously",
    ],
    boardsPearls: [
      "Psoriasis = extensor surfaces + silvery scale; eczema = flexural + pruritic eczematous lesions",
      "Nail pitting strongly supports psoriasis over eczema",
      "Guttate psoriasis after strep throat — small papules; may resolve without chronic plaque disease",
      "Th17/IL-17 axis is central — IL-23 → Th17 → IL-17 drives keratinocyte hyperproliferation",
      "Psoriatic arthritis: DIP joints, dactylitis, pencil-in-cup deformity on X-ray, enthesitis",
      "Anti-TNF agents treat both psoriasis and psoriatic arthritis — screen for latent TB first",
    ],
    pediatrics:
      "Plaque psoriasis occurs in children; guttate form common after streptococcal infection in school-age kids. Topical therapy first-line; systemic biologics used in severe pediatric psoriasis with specialist guidance.",
  },
  {
    id: "lichen-planus",
    name: "Lichen Planus",
    etymology: "Latin lichen = tree moss + planus = flat",
    aliases: ["lichen planus", "lp", "lichen planus eruption"],
    definition:
      "Immune-mediated inflammatory dermatosis characterized by pruritic violaceous flat-topped papules and plaques, often with fine white Wickham striae on the surface and a predilection for wrists, shins, and oral mucosa.",
    pathophysiology:
      "CD8⁺ T-cell–mediated attack on basal keratinocytes (possibly triggered by drugs, hepatitis C, or unknown antigen) → apoptosis of basal cells (colloid bodies/Civatte bodies) → sawtooth rete ridges, bandlike lymphocytic infiltrate at dermoepidermal junction. Histology: hypergranulosis, hyperkeratosis.",
    classicPresentation: [
      "Pruritic, violaceous, flat-topped polygonal papules and plaques",
      "Wrists, ankles, shins, lumbar region; bilateral and symmetric",
      "Wickham striae — fine white lacy lines on plaque surface",
      "Oral lichen planus — white reticular (Wickham) pattern on buccal mucosa; erosive form is painful",
      "Koebner phenomenon — lesions at sites of trauma",
      "Nail dystrophy — thinning, longitudinal ridging, pterygium (dorsal nail fold scarring)",
    ],
    keyFindings: [
      "Violaceous flat-topped papules/plaques with Wickham striae",
      "Histology: sawtooth rete ridges, hypergranulosis, bandlike lymphoid infiltrate",
      "Oral white reticular or erosive mucosal lesions",
      "Hepatitis C association (especially erosive oral LP in some populations)",
    ],
    associations: [
      "Hepatitis C virus infection",
      "Drug-induced lichen planus — thiazides, NSAIDs, antimalarials, ACE inhibitors",
      "Hepatobiliary disease (primary biliary cholangitis overlap syndromes)",
      "Squamous cell carcinoma risk in chronic erosive oral lichen planus",
    ],
    complications: [
      "Erosive oral lichen planus — pain, dysphagia, SCC surveillance needed",
      "Nail destruction and pterygium",
      "Post-inflammatory hyperpigmentation",
      "Scarring alopecia in lichen planopilaris (scalp variant)",
    ],
    distinguishFrom: [
      "Psoriasis — silvery scale, extensor surfaces, nail pitting (not pterygium)",
      "Lichenoid drug eruption — temporal link to medication; may be more eczematous",
      "Secondary syphilis — palmar/plantar papules, positive serology",
      "Guttate psoriasis — post-strep small papules, not violaceous flat-topped",
      "Lichen sclerosus — atrophic white plaques in anogenital region",
    ],
    treatment: [
      "Topical corticosteroids — first-line for cutaneous disease",
      "Topical calcineurin inhibitors for face and oral erosive disease",
      "Systemic corticosteroids, acitretin, or phototherapy for widespread disease",
      "Treat hepatitis C if present; discontinue offending drug if drug-induced",
    ],
    boardsPearls: [
      "6 P's mnemonic: pruritic, polygonal, planar (flat-topped), purple papules/plaques",
      "Wickham striae + sawtooth rete ridges + hypergranulosis on histology",
      "Oral lichen planus — white reticular pattern; erosive form needs SCC monitoring",
      "vs psoriasis — violaceous and flat-topped (lichen planus) vs erythematous silvery scale (psoriasis)",
      "CD8⁺ T cells attack basal keratinocytes — cell-mediated, not autoantibody blistering",
    ],
    pediatrics:
      "Lichen planus uncommon in young children; when present, evaluate for drug trigger and consider hepatitis C in adolescents with erosive oral disease.",
  },
  {
    id: "pemphigus-vulgaris",
    name: "Pemphigus Vulgaris",
    etymology: "Greek pemphix = blister + Latin vulgaris = common",
    aliases: ["pemphigus vulgaris", "pemphigus", "pemphis vulgaris", "pv"],
    definition:
      "Autoimmune blistering disease in which IgG autoantibodies against desmosomal cadherins (desmoglein 3 ± desmoglein 1) cause loss of keratinocyte adhesion (acantholysis) and intraepidermal flaccid bullae, often beginning on oral mucosa.",
    pathophysiology:
      "IgG autoantibodies against desmoglein 3 (mucosal predominant) and desmoglein 1 (skin) → disruption of desmosomes → acantholysis → intraepidermal cleft with rounded acantholytic keratinocytes (Tzanck cells). Type II hypersensitivity.",
    classicPresentation: [
      "Painful oral erosions and ulcers often precede skin involvement",
      "Flaccid bullae that rupture easily → painful erosions",
      "Positive Nikolsky sign — lateral pressure extends blister or denudes skin",
      "Skin involvement: face, scalp, chest; fragile superficial erosions more than intact bullae",
      "No urticarial rim (vs bullous pemphigoid)",
    ],
    keyFindings: [
      "Intraepidermal blister with acantholysis on biopsy",
      'Direct immunofluorescence: intercellular ("fishnet") IgG/C3 in epidermis',
      "Serum anti–desmoglein 3 (± anti–desmoglein 1) autoantibodies",
      "Tzanck smear — acantholytic keratinocytes (supportive, not definitive)",
    ],
    associations: [
      "Ashkenazi Jewish and Mediterranean populations at higher risk",
      "Paraneoplastic pemphigus — associated with lymphoma/Castleman disease (different antibody profile)",
      "Drug trigger possible (penicillamine, ACE inhibitors) — rare",
    ],
    complications: [
      "Severe fluid/electrolyte loss and secondary infection from widespread erosions",
      "Before steroids, often fatal; still serious without treatment",
      "Ocular involvement in paraneoplastic variant",
    ],
    distinguishFrom: [
      "Bullous pemphigoid — elderly, tense subepidermal bullae, urticarial base, anti-BP180; no acantholysis",
      "Stevens-Johnson syndrome / TEN — drug trigger, epidermal necrosis, mucosal involvement, not desmoglein autoantibodies",
      "Herpes simplex — grouped vesicles, not diffuse acantholysis or fishnet IF",
      "Staphylococcal scalded skin syndrome — superficial split, children, exfoliative toxin not autoantibody",
      "Mucous membrane pemphigoid — subepidermal, scarring mucosal disease",
    ],
    treatment: [
      "Systemic corticosteroids — mainstay for disease control",
      "Steroid-sparing: rituximab (anti-CD20), azathioprine, mycophenolate, cyclophosphamide",
      "IVIG or plasmapheresis for severe refractory disease",
      "Wound care and infection prevention",
    ],
    boardsPearls: [
      "Pemphigus = intraepidermal, acantholysis, flaccid bullae, + Nikolsky sign",
      "Bullous pemphigoid = subepidermal, tense bullae, eosinophils, anti-hemidesmosome (BP180)",
      "Oral mucosa first in pemphigus vulgaris — desmoglein 3",
      "Fishnet pattern on direct immunofluorescence — pathognomonic intercellular IgG",
      "Anti-desmoglein autoantibodies — type II hypersensitivity",
    ],
    pediatrics:
      "Pemphigus vulgaris rare in children; SSSS and bullous impetigo more common causes of blistering in infants — toxin-mediated superficial split, not autoimmune desmoglein antibodies.",
  },
  {
    id: "mastocytosis",
    name: "Mastocytosis",
    etymology: "German Mastzelle = well-fed cell + Greek kytos = cell + -osis = condition",
    aliases: [
      "mastocytosis",
      "systemic mastocytosis",
      "cutaneous mastocytosis",
      "mast cell disease",
      "urticaria pigmentosa",
    ],
    definition:
      "Clonal neoplastic proliferation and accumulation of mast cells in skin, bone marrow, and other organs; ranges from indolent cutaneous disease to aggressive systemic mastocytosis with organ dysfunction.",
    pathophysiology:
      "Activating KIT (c-KIT/CD117) mutations — classically D816V — drive autonomous mast cell growth and spontaneous mediator release (histamine, tryptase, prostaglandins, leukotrienes) without allergen cross-linking.",
    classicPresentation: [
      "Episodic flushing, pruritus, hypotension, syncope",
      "Urticaria pigmentosa — tan-brown macules/plaques that urticate when rubbed (Darier sign)",
      "Abdominal cramping, diarrhea, nausea (GI mast cell infiltration and mediators)",
      "Anaphylactoid reactions to triggers: Hymenoptera stings, NSAIDs, alcohol, opiates, stress",
      "Bone pain, fractures from mast cell mediator–induced osteoporosis",
    ],
    keyFindings: [
      "Darier sign — localized urtication and wheal after stroking a lesion",
      "Urticaria pigmentosa on skin examination",
      "Hepatosplenomegaly in advanced systemic disease",
    ],
    keyLabs: [
      "↑ Serum tryptase (baseline >20 ng/mL supports systemic mastocytosis)",
      "Bone marrow biopsy — multifocal mast cell aggregates, spindle-shaped mast cells",
      "Flow cytometry: mast cells CD117⁺ with aberrant CD25 (IL-2Rα) expression",
      "KIT D816V mutation testing (peripheral blood or marrow)",
    ],
    associations: [
      "KIT (c-KIT) tyrosine kinase receptor mutations — D816V most common in adults",
      "Atopy may coexist but mastocytosis is a clonal disorder, not simple allergy",
    ],
    complications: [
      "Anaphylaxis / anaphylactoid episodes",
      "Mast cell leukemia (aggressive variant — rare)",
      "Peptic ulcer disease and GI bleeding (histamine-driven acid secretion)",
      "Osteoporosis and pathologic fractures",
      "Portal hypertension and ascites (advanced hepatic mast cell infiltration)",
    ],
    distinguishFrom: [
      "Allergic urticaria/anaphylaxis — episodic, normal baseline tryptase, no urticaria pigmentosa",
      "Carcinoid syndrome — flushing + diarrhea; ↑ 5-HIAA, not tryptase",
      "Pheochromocytoma — paroxysmal HTN, ↑ catecholamines/metanephrines",
      "Hyper-IgE syndrome (Job) — eczema, recurrent staph abscesses, ↑ IgE, retained primary teeth",
      "Basophilia in CML — myeloproliferative disease, not mast cell neoplasm",
    ],
    treatment: [
      "H1 and H2 antihistamines for pruritus, flushing, and gastric acid",
      "Epinephrine auto-injector for anaphylactoid episodes; avoid known triggers",
      "Cromolyn sodium for GI symptoms",
      "Topical corticosteroids for limited cutaneous lesions",
      "Midostaurin or avapritinib for advanced systemic mastocytosis; imatinib ineffective for D816V mutation",
      "Bisphosphonates for osteoporosis",
    ],
    boardsPearls: [
      "Darier sign + urticaria pigmentosa → think mastocytosis",
      "↑ baseline tryptase distinguishes mastocytosis from isolated allergic anaphylaxis",
      "KIT D816V — imatinib does NOT work; newer KIT inhibitors (midostaurin, avapritinib) for advanced disease",
      "Mast cell mediators explain GI symptoms, flushing, and osteoporosis without allergen exposure",
      "Hymenoptera venom anaphylaxis in adult with no prior atopy → screen for mastocytosis",
    ],
    pediatrics:
      "Cutaneous mastocytosis (urticaria pigmentosa) often presents in infancy — may be limited to skin and spontaneously improve by adolescence. Systemic involvement less common in children but evaluate if persistent symptoms or ↑ tryptase.",
  },
  {
    id: "otitis-media",
    name: "Otitis Media",
    etymology: "Greek ous/otos = ear + -itis = inflammation + Latin medius = middle",
    aliases: [
      "otitis media",
      "acute otitis media",
      "aom",
      "middle ear infection",
      "otitis media with effusion",
      "serous otitis media",
    ],
    definition:
      "Inflammation and infection of the middle ear, most often acute and bacterial in children; otitis media with effusion is noninfectious fluid without acute signs.",
    pathophysiology:
      "Eustachian tube dysfunction (short/horizontal in children) → negative middle ear pressure and fluid → bacterial ascent after viral URI. Common organisms: S. pneumoniae, nontypeable H. influenzae, M. catarrhalis.",
    classicPresentation: [
      "Ear pain (otalgia), fever, irritability in infants",
      "Bulging, erythematous, immobile tympanic membrane",
      "Recent URI, daycare attendance",
      "Hearing difficulty with persistent effusion",
    ],
    keyFindings: [
      "Bulging TM with impaired mobility on pneumatic otoscopy",
      "Middle ear effusion",
      "Otorrhea if TM perforated",
    ],
    keyLabs: [
      "Clinical diagnosis by otoscopy — culture rarely needed",
      "Tympanometry shows flat curve with effusion",
    ],
    associations: [
      "Viral URI",
      "Daycare, bottle propping, smoke exposure",
      "Cleft palate, Down syndrome (Eustachian tube dysfunction)",
    ],
    complications: [
      "TM perforation and otorrhea",
      "Mastoiditis (postauricular swelling, protruding ear)",
      "Cholesteatoma (chronic)",
      "Conductive hearing loss with chronic effusion",
    ],
    distinguishFrom: [
      "Otitis externa — tragal tenderness, ear canal inflammation, TM often normal",
      "Otitis media with effusion — fluid without bulging TM or acute inflammation",
      "Referred otalgia — dental, pharyngeal, or TMJ source",
    ],
    treatment: [
      "Amoxicillin first line for acute otitis media when antibiotics indicated",
      "Amoxicillin-clavulanate if recent antibiotics or treatment failure",
      "Analgesia; tympanostomy tubes for recurrent AOM or chronic effusion with hearing loss",
    ],
    boardsPearls: [
      "Bulging, immobile TM = acute otitis media",
      "Amoxicillin first line; add clavulanate for β-lactamase coverage if needed",
      "Mastoiditis: postauricular erythema/swelling after AOM — needs IV antibiotics ± drainage",
      "OME (serous otitis) — fluid without acute infection; observe or tubes if persistent",
    ],
    pediatrics:
      "Peak incidence 6–15 months; watchful waiting may be appropriate in older children with mild symptoms. Hib vaccine ↓ H. influenzae type b but nontypeable H. flu remains common.",
  },
  {
    id: "sarcoidosis",
    name: "Sarcoidosis",
    etymology: "Greek sarx = flesh + -oid = resembling + -osis = condition",
    aliases: ["sarcoidosis", "sarcoid"],
    definition:
      "Multisystem granulomatous disease of unknown cause, most commonly affecting lungs and lymph nodes.",
    pathophysiology:
      "Noncaseating granulomas in affected organs → CD4+ Th1 response; elevated ACE from epithelioid macrophages; hypercalcemia from macrophage 1α-hydroxylase activity.",
    classicPresentation: [
      "Young African American woman with dyspnea, cough",
      "Bilateral hilar lymphadenopathy on CXR",
      "Erythema nodosum, uveitis, skin lesions",
    ],
    keyFindings: [
      "Bilateral hilar lymphadenopathy (BHL)",
      "Noncaseating granulomas on biopsy",
      "Löfgren syndrome: BHL + erythema nodosum + arthritis",
    ],
    keyLabs: ["↑ ACE (nonspecific)", "Hypercalcemia/hypercalciuria"],
    associations: ["African American ethnicity", "Female sex"],
    complications: [
      "Pulmonary fibrosis",
      "Cardiac sarcoid (arrhythmias)",
      "Neurosarcoidosis",
    ],
    distinguishFrom: [
      "Tuberculosis — caseating granulomas, positive AFB",
      "Lymphoma — B symptoms, mediastinal mass without granulomas",
      "Berylliosis — identical histology, occupational exposure",
    ],
    treatment: [
      "Observation for mild disease; corticosteroids for symptomatic or progressive disease",
      "Avoidance of further exposure",
    ],
    boardsPearls: [
      "Noncaseating granulomas + bilateral hilar lymphadenopathy",
      "↑ ACE from epithelioid cells (also used to track activity)",
      "Schirrmann bodies: concentric calcified lamellae in granulomas",
    ],
  },
  {
    id: "erythema-nodosum",
    name: "Erythema Nodosum",
    etymology: "Greek erythros = red + Latin nodus = knot + -osis = condition",
    aliases: [
      "erythema nodosum",
      "en",
      "subacute nodular migratory panniculitis",
      "septal panniculitis",
    ],
    definition:
      "Acute inflammatory hypersensitivity reaction causing tender erythematous nodules, classically on the anterior shins, from septal panniculitis without vasculitis — a sign of underlying systemic disease in many cases.",
    pathophysiology:
      "Immune complex–mediated or delayed hypersensitivity inflammation of subcutaneous fat septa → tender nodules without primary vasculitis on biopsy; reflects underlying infection, sarcoidosis, IBD, drug reaction, or pregnancy.",
    classicPresentation: [
      "Tender, erythematous, raised nodules on anterior shins (bilateral)",
      "Nodules do not ulcerate and heal without scarring over weeks",
      "May precede or accompany systemic illness (cough, joint pain, GI symptoms)",
      "Young adult woman — common demographic",
    ],
    keyFindings: [
      "Painful subcutaneous nodules 1–5 cm on shins",
      "No primary ulceration (vs erythema induratum/nodular vasculitis)",
      "Associated arthralgia especially in Löfgren syndrome",
    ],
    keyLabs: [
      "Clinical diagnosis often; biopsy if atypical — septal panniculitis without vasculitis",
      "Workup for underlying cause: CXR (sarcoid), ASO/strep, IBD evaluation, pregnancy test, medication review",
      "Coccidioides serology in endemic areas (desert rheumatism)",
    ],
    associations: [
      "Sarcoidosis — Löfgren syndrome (BHL + EN + arthritis)",
      "Streptococcal infection (post-pharyngitis)",
      "Inflammatory bowel disease (Crohn > UC)",
      "Oral contraceptives and sulfonamides",
      "Coccidioidomycosis (Valley fever)",
      "Pregnancy",
      "Behçet disease and other autoinflammatory conditions",
    ],
    complications: [
      "Recurrence with re-exposure to trigger",
      "Underlying systemic disease morbidity (sarcoid, IBD) more concerning than skin lesions",
    ],
    distinguishFrom: [
      "Cellulitis — spreading erythema with warmth, not discrete nodules",
      "Necrotizing fasciitis — systemic toxicity, rapid progression",
      "Erythema induratum (nodular vasculitis) — often posterior legs, may ulcerate, vasculitis on biopsy",
      "Insect bites — pruritic, not symmetric shin nodules",
      "Panniculitis from pancreatic disease — associated abdominal symptoms, different histology",
    ],
    treatment: [
      "Treat underlying cause (antibiotics for strep, manage IBD/sarcoid)",
      "NSAIDs for symptomatic nodules",
      "Rest and leg elevation",
      "Potassium iodide or corticosteroids in severe/refractory cases (specialist-guided)",
      "Stop offending drug if drug-induced",
    ],
    boardsPearls: [
      "Tender nodules on shins — erythema nodosum until proven otherwise",
      "Löfgren syndrome: bilateral hilar lymphadenopathy + erythema nodosum + arthritis = sarcoidosis",
      "Associations: sarcoid, strep, IBD, OCPs, coccidioidomycosis",
      "Septal panniculitis without vasculitis on biopsy",
      "vs cellulitis — discrete tender nodules, not diffuse spreading infection",
    ],
    pediatrics:
      "Streptococcal pharyngitis-associated EN occurs in children; sarcoidosis and IBD are less common but considered in appropriate clinical context.",
  },
  {
    id: "neonatal-respiratory-distress-syndrome",
    name: "Neonatal Respiratory Distress Syndrome",
    etymology: "Greek neos = new + Latin natus = born + respirare = breathe + distringere = pull apart + syndrome = grouped findings",
    aliases: [
      "neonatal respiratory distress syndrome",
      "nrds",
      "respiratory distress syndrome",
      "hyaline membrane disease",
    ],
    definition:
      "Respiratory failure in premature neonates from surfactant deficiency and immature lungs.",
    pathophysiology:
      "Insufficient surfactant (type II pneumocytes) → ↑ alveolar surface tension → atelectasis → hypoxemia and respiratory acidosis; hyaline membranes form.",
    classicPresentation: [
      "Premature infant with tachypnea, grunting, retractions within hours of birth",
      "Worsening distress over first 48 h",
      "Cesarean delivery without labor (↓ cortisol/surfactant)",
    ],
    keyFindings: [
      "Ground-glass appearance, air bronchograms on CXR",
      "Grunting (maintains PEEP)",
      "Hypoxemia, respiratory acidosis",
    ],
    associations: [
      "Prematurity",
      "Maternal diabetes",
      "Male sex",
      "Cesarean delivery",
    ],
    complications: [
      "Pneumothorax",
      "Persistent pulmonary hypertension",
      "Bronchopulmonary dysplasia",
    ],
    distinguishFrom: [
      "Transient tachypnea of newborn — term/near-term, fluid in lungs, resolves in 24–72 h",
      "Meconium aspiration — post-term, meconium-stained fluid",
    ],
    treatment: [
      "Exogenous surfactant replacement; CPAP or mechanical ventilation",
      "Antenatal corticosteroids to accelerate fetal lung maturity",
    ],
    boardsPearls: [
      "Surfactant deficiency in premature infants",
      "Lecithin/sphingomyelin ratio ≥2 indicates lung maturity",
      "Treat with surfactant replacement and respiratory support",
    ],
    pediatrics:
      "Classic disease of prematurity; antenatal corticosteroids accelerate fetal surfactant production and reduce incidence.",
  },
  {
    id: "digeorge-syndrome",
    name: "DiGeorge Syndrome",
    etymology: "eponym Angelo DiGeorge + Greek syn = together + dromos = running (syndrome)",
    aliases: [
      "digeorge syndrome",
      "digeorge syndromes",
      "22q11 deletion syndrome",
      "22q11.2 deletion syndrome",
      "velocardiofacial syndrome",
      "vcfs",
      "catch-22 syndrome",
      "conotruncal anomaly face syndrome",
    ],
    definition:
      "Microdeletion syndrome (most often 22q11.2) from failed development of third and fourth pharyngeal pouches causing conotruncal cardiac defects, thymic aplasia, parathyroid hypoplasia, and characteristic facies.",
    pathophysiology:
      "22q11.2 deletion disrupts TBX1 and related genes → defective neural crest/pharyngeal pouch development → hypoplastic thymus (↓ T-cell maturation), hypoplastic parathyroids (↓ PTH → hypocalcemia), and conotruncal cardiac malformations; palate and facial development also affected.",
    classicPresentation: [
      "Neonatal hypocalcemic seizures or tetany",
      "Congenital heart disease — tetralogy of Fallot, truncus arteriosus, interrupted aortic arch",
      "Recurrent viral and fungal infections from T-cell deficiency",
      "Cleft palate, nasal speech, hooded eyelids, bulbous nasal tip",
    ],
    keyFindings: [
      "Hypocalcemia with low PTH",
      "Absent or hypoplastic thymic shadow on chest imaging",
      "Conotruncal cardiac defect on echocardiography",
      "Low CD3⁺ T-cell count with relatively normal B cells",
    ],
    keyLabs: [
      "Serum calcium, ionized calcium, PTH",
      "FISH or microarray for 22q11.2 deletion",
      "Flow cytometry — T-cell lymphopenia",
      "Echocardiography for cardiac anomalies",
    ],
    associations: [
      "22q11.2 microdeletion (TBX1 region)",
      "Tetralogy of Fallot, truncus arteriosus, interrupted aortic arch",
      "Velocardiofacial syndrome — same deletion, variable phenotype",
      "Schizophrenia and psychiatric disease in adolescence/adulthood (some cohorts)",
    ],
    complications: [
      "Severe infections from T-cell immunodeficiency",
      "Refractory hypocalcemia and seizures in infancy",
      "Feeding and speech problems from palatal defects",
      "Developmental delay and learning difficulties",
    ],
    distinguishFrom: [
      "CHARGE syndrome — coloboma, choanal atresia, distinct genetic cause",
      "Neonatal hypoparathyroidism without 22q deletion — isolated parathyroid failure",
      "Down syndrome — trisomy 21, not conotruncal-focused microdeletion",
      "Severe combined immunodeficiency — more profound T/B defect, different genetics",
    ],
    treatment: [
      "Calcium and active vitamin D for hypoparathyroidism",
      "Cardiac surgical repair as indicated",
      "Infection prophylaxis and live-vaccine caution with severe T-cell deficiency",
      "Palate and speech therapy; developmental support",
    ],
    boardsPearls: [
      "CATCH-22: Cardiac, Abnormal facies, Thymic aplasia, Cleft palate, Hypocalcemia, 22q11",
      "3rd and 4th pharyngeal pouch failure → thymus + parathyroids + conotruncal heart",
      "↓ ionized Ca + low PTH + 22q11 deletion → DiGeorge",
      "Absent thymic shadow + hypocalcemic seizures in neonate",
      "T-cell deficiency with relatively preserved B cells",
    ],
    pediatrics:
      "Classic neonatal presentation is hypocalcemic seizures and conotruncal heart disease; absent thymic shadow and T-cell lymphopenia distinguish from isolated hypoparathyroidism.",
  },
  {
    id: "tetralogy-of-fallot",
    name: "Tetralogy of Fallot",
    etymology: "Greek tetra = four + logos = account + eponym: Etienne-Louis Fallot",
    aliases: [
      "tetralogy of fallot",
      "tetralogy of fallot's",
      "tof",
      "tet spell",
      "tet spells",
      "hypercyanotic spell",
      "rvot obstruction",
      "right ventricular outflow tract obstruction",
      "infundibular septum",
      "anterior malalignment of infundibular septum",
      "overriding aorta",
      "boot-shaped heart",
    ],
    definition:
      "Most common cyanotic congenital heart disease in children, defined by four features: VSD, RVOT obstruction, overriding aorta, and right ventricular hypertrophy.",
    pathophysiology:
      "Anterior malalignment of the infundibular septum → RVOT obstruction + large malalignment VSD + aorta overrides the septal defect → right-to-left shunt with hypoxemia; chronic RV pressure overload → concentric RVH.",
    classicPresentation: [
      "Cyanotic infant or child; tet spells with crying, feeding, or agitation",
      "Squatting to relieve cyanosis (older children)",
      "Harsh systolic ejection murmur at LLSB (RVOT obstruction)",
      "Single S2 (A2 only; pulmonic component soft/absent)",
    ],
    keyFindings: [
      "Central cyanosis and hypoxemia",
      "Harsh systolic ejection murmur at left lower sternal border",
      "Concentric RVH with parasternal heave",
      "Boot-shaped heart on CXR (↑ RV, concave PA segment)",
    ],
    keyLabs: [
      "Pulse oximetry — desaturation",
      "ECG: right axis deviation, RVH (tall R in V1)",
      "Echocardiography — defines anatomy and severity of RVOT obstruction",
    ],
    associations: [
      "22q11 deletion (DiGeorge) in some cases",
      "Hypercyanotic (tet) spells with infundibular spasm",
    ],
    complications: [
      "Hypercyanotic spells and syncope",
      "Polycythemia and stroke risk",
      "Infective endocarditis",
      "Delayed development if chronic hypoxemia untreated",
    ],
    distinguishFrom: [
      "Isolated VSD — acyanotic left-to-right shunt, holosystolic murmur at LLSB",
      "Transposition of great arteries — parallel circulation, severe cyanosis at birth",
      "Pulmonary atresia with VSD — similar cyanosis; no antegrade pulmonary flow",
    ],
    treatment: [
      "Hypercyanotic spell: knee-chest/squatting, O₂, morphine, IV fluids, phenylephrine (↑ SVR); β-blockers may ↓ infundibular spasm",
      "Definitive repair: surgical closure of VSD and relief of RVOT obstruction",
      "Prostaglandins not for ToF (unlike ductal-dependent lesions)",
    ],
    boardsPearls: [
      "4 features: VSD + RVOT obstruction + overriding aorta + RVH",
      "RVOT obstruction drives cyanosis; VSD is usually silent on auscultation",
      "Squatting ↑ SVR → ↓ R→L shunt during tet spell",
      "Boot-shaped heart + harsh systolic ejection murmur + cyanosis = ToF",
      "Anterior malalignment of infundibular septum is the embryologic key",
    ],
    pediatrics:
      "Most common cyanotic CHD beyond infancy; infants may have pink tets if mild RVOT obstruction. Endocarditis prophylaxis when indicated.",
  },
  {
    id: "ventricular-septal-defect",
    name: "Ventricular Septal Defect",
    etymology: "Latin ventriculus = little belly + septum = partition + defectus = failing/lack",
    aliases: [
      "ventricular septal defect",
      "vsd",
      "membranous vsd",
      "muscular vsd",
    ],
    definition:
      "Congenital opening in the ventricular septum allowing shunting between ventricles; most common congenital heart defect.",
    pathophysiology:
      "Left-to-right shunt (higher LV pressure) → ↑ pulmonary blood flow; large defects cause LV volume overload and pulmonary hypertension; component of tetralogy of Fallot when combined with RVOT obstruction and overriding aorta.",
    classicPresentation: [
      "Holosystolic murmur at LLSB (small to moderate VSD)",
      "Asymptomatic small VSD or heart failure signs with large shunt",
      "Failure to thrive, tachypnea, recurrent pneumonias in infants with large VSD",
    ],
    keyFindings: [
      "Holosystolic (pansystolic) murmur at left lower sternal border",
      "Hyperdynamic precordium with large shunts",
      "Cyanosis only if Eisenmenger or part of ToF physiology",
    ],
    keyLabs: [
      "Echocardiography — size, location, shunt direction, pulmonary pressures",
      "CXR: cardiomegaly and ↑ pulmonary vascular markings with large left-to-right shunt",
    ],
    associations: [
      "Part of tetralogy of Fallot (malalignment VSD)",
      "Trisomy 21, fetal alcohol syndrome",
      "Spontaneous closure common for small muscular VSDs",
    ],
    complications: [
      "Heart failure in infancy (large VSD)",
      "Eisenmenger syndrome (irreversible PAH with shunt reversal)",
      "Aortic regurgitation (membranous VSD with prolapse)",
      "Infective endocarditis",
    ],
    distinguishFrom: [
      "ToF — cyanotic with RVOT murmur; VSD murmur often absent",
      "Mitral regurgitation — holosystolic murmur at apex radiating to axilla",
      "Tricuspid regurgitation — LLSB murmur ↑ with inspiration",
    ],
    treatment: [
      "Small asymptomatic VSD: observe (many close spontaneously)",
      "Large VSD with failure: diuretics, afterload reduction; surgical or device closure",
      "Eisenmenger: avoid closure; pulmonary vasodilators; transplant in severe disease",
    ],
    boardsPearls: [
      "Most common congenital heart defect",
      "Small VSD: loud holosystolic murmur, often asymptomatic",
      "Large VSD: left-to-right shunt → CHF in infancy, not cyanotic initially",
      "In ToF the VSD is large but murmur is from RVOT obstruction, not the defect itself",
    ],
    pediatrics:
      "Muscular VSDs often close by age 5–10; membranous VSDs less likely to close. Monitor for failure to thrive and pulmonary hypertension.",
  },
  {
    id: "atrial-septal-defect",
    name: "Atrial Septal Defect",
    etymology: "Latin atrium = entrance hall + septum = partition + defectus = failing/lack",
    aliases: [
      "atrial septal defect",
      "asd",
      "ostium secundum asd",
      "secundum asd",
    ],
    definition:
      "Congenital opening in the atrial septum causing left-to-right shunt and increased pulmonary blood flow; ostium secundum is most common.",
    pathophysiology:
      "Left atrial pressure exceeds right → blood flows across ASD → RA/RV volume overload and ↑ pulmonary flow; fixed split S2 from delayed pulmonic valve closure.",
    classicPresentation: [
      "Often asymptomatic in childhood; fatigue or palpitations in adulthood",
      "Soft systolic flow murmur at ULSB (pulmonary flow, not septal flow)",
      "Fixed wide split S2",
    ],
    keyFindings: [
      "Fixed split S2 (pathognomonic)",
      "Systolic ejection murmur at upper left sternal border",
      "RV heave with large shunts",
    ],
    keyLabs: [
      "Echocardiography with bubble study — defines size and shunt",
      "ECG: right axis deviation, RBBB pattern in secundum ASD",
    ],
    associations: [
      "Ostium secundum (most common)",
      "Ostium primum — associated with endocardial cushion defects",
      "Sinus venosus ASD",
    ],
    complications: [
      "Atrial arrhythmias (flutter/fibrillation) in adults",
      "Pulmonary hypertension and Eisenmenger syndrome (late)",
      "Paradoxical embolism",
    ],
    distinguishFrom: [
      "PDA — continuous machinery murmur, not fixed split S2",
      "VSD — holosystolic murmur at LLSB",
      "Physiologic split S2 — narrows with expiration",
    ],
    treatment: [
      "Small ASD with no RV dilation: may observe",
      "Significant shunt or RV volume overload: percutaneous device or surgical closure",
    ],
    boardsPearls: [
      "Fixed split S2 = ASD until proven otherwise",
      "Murmur is from ↑ pulmonary flow, not blood crossing the defect",
      "Secundum ASD most common; primum ASD associated with AV valve abnormalities",
    ],
    pediatrics:
      "Many secundum ASDs close spontaneously in childhood; monitor echo. Large shunts may cause failure to thrive.",
  },
  {
    id: "patent-ductus-arteriosus",
    name: "Patent Ductus Arteriosus",
    etymology: "Latin patere = lie open + ductus = channel + arteriosus = arterial",
    aliases: [
      "patent ductus arteriosus",
      "pda",
      "patent ductus",
      "ductus arteriosus",
    ],
    definition:
      "Persistence of the fetal ductus arteriosus connecting the aorta and pulmonary artery after birth, causing left-to-right shunt.",
    pathophysiology:
      "Aortic pressure > pulmonary pressure → continuous flow from aorta to pulmonary artery → ↑ pulmonary blood flow, LA/LV volume overload; may reverse to right-to-left shunt in Eisenmenger or persistent pulmonary hypertension of newborn.",
    classicPresentation: [
      "Continuous machinery murmur at left infraclavicular area",
      "Bounding pulses, wide pulse pressure with large PDA",
      "Premature infant or history of congenital rubella",
    ],
    keyFindings: [
      "Continuous systolic and diastolic murmur (machinery murmur)",
      "Hyperdynamic precordium, cardiomegaly with large shunt",
      "Differential cyanosis (lower body cyanotic) if R→L shunt",
    ],
    keyLabs: [
      "Echocardiography — duct size, shunt, pulmonary pressures",
      "CXR: cardiomegaly and ↑ pulmonary vascular markings",
    ],
    associations: [
      "Prematurity",
      "Congenital rubella",
      "Coarctation of aorta (may need PDA for lower-body perfusion)",
    ],
    complications: [
      "Heart failure in infancy",
      "Eisenmenger syndrome",
      "Endocarditis at ductus",
      "Pulmonary hemorrhage in prematurity",
    ],
    distinguishFrom: [
      "Venous hum — cervical, positional, not true PDA",
      "Coronary fistula — continuous murmur but different echo anatomy",
      "VSD — holosystolic, not continuous",
    ],
    treatment: [
      "Indomethacin or ibuprofen in premature infants (closes ductus)",
      "Coil or device closure / surgical ligation when indicated",
      "Prostaglandin E1 to keep ductus open in ductal-dependent lesions (e.g., coarctation, TGA)",
    ],
    boardsPearls: [
      "Continuous machinery murmur = PDA",
      "Indomethacin closes PDA in premies; prostaglandins keep it open when needed",
      "Differential cyanosis: pink arms, blue legs — PDA with R→L shunt",
    ],
    pediatrics:
      "Classic premature infant lesion; treat CHF and close hemodynamically significant PDA. Opposite of prostaglandins in ductal-dependent cyanotic heart disease.",
  },
  {
    id: "bicuspid-aortic-valve",
    name: "Bicuspid Aortic Valve",
    etymology: "Latin bi = two + cuspis = point + Greek aorte = artery + valva = folding door",
    aliases: [
      "bicuspid aortic valve",
      "bicuspid aortic valve disease",
      "bav",
      "congenital bicuspid aortic valve",
    ],
    definition:
      "Congenital fusion of two aortic valve cusps (most commonly right and noncoronary), predisposing to early aortic stenosis and/or regurgitation.",
    pathophysiology:
      "Abnormal valve morphology → turbulent flow and progressive calcific stenosis in adulthood; associated aortopathy (dilated ascending aorta) from cystic medial degeneration.",
    classicPresentation: [
      "Often asymptomatic for years",
      "Systolic ejection click with or without crescendo-decrescendo murmur",
      "Exercise intolerance, angina, or syncope when AS develops",
    ],
    keyFindings: [
      "Systolic ejection click at RUSB/apex",
      "Crescendo-decrescendo murmur if stenosis present",
      "Early diastolic murmur if regurgitation present",
    ],
    keyLabs: [
      "Echocardiography — valve morphology, gradient, aortic root size",
      "CT/MRI for aortic dimensions if aneurysm suspected",
    ],
    associations: [
      "Coarctation of aorta",
      "Turner syndrome",
      "Aortic root dilation and dissection risk",
    ],
    complications: [
      "Aortic stenosis",
      "Aortic regurgitation",
      "Infective endocarditis",
      "Aortic aneurysm and dissection",
    ],
    distinguishFrom: [
      "Normal trileaflet AS — presents later in life",
      "Subaortic membrane — murmur without ejection click from abnormal valve",
      "HOCM — murmur ↑ with Valsalva",
    ],
    treatment: [
      "Surveillance echo for stenosis, regurgitation, and aortic root size",
      "Aortic valve replacement/repair and aortic surgery when criteria met",
    ],
    boardsPearls: [
      "Most common congenital cardiac anomaly (~1–2% of population)",
      "Ejection click often precedes murmur by years",
      "Associated with coarctation and Turner syndrome — screen aorta",
      "Listen for ejection click + AS/AR murmurs on boards",
    ],
    pediatrics:
      "May be detected as incidental ejection click in childhood; athletic clearance and family screening sometimes indicated.",
  },
  {
    id: "aortic-regurgitation",
    name: "Aortic Regurgitation",
    etymology: "Greek aorte = artery + Latin re- = back + gurges = flood/whirlpool",
    aliases: ["aortic regurgitation", "aortic insufficiency", "ar", "ai"],
    definition:
      "Incompetence of the aortic valve allowing diastolic backflow from the aorta into the left ventricle, causing volume overload.",
    pathophysiology:
      "Regurgitant volume → ↑ LV end-diastolic volume → eccentric LV hypertrophy and dilation; acute severe AR causes pulmonary edema; chronic AR develops wide pulse pressure and hyperdynamic circulation.",
    classicPresentation: [
      "Dyspnea, orthopnea with LV failure",
      "High-pitched early diastolic decrescendo murmur (lean forward, exhale)",
      "Wide pulse pressure, head bobbing, water-hammer pulses",
    ],
    keyFindings: [
      "Early diastolic blowing murmur at LSB",
      "Wide pulse pressure, bounding pulses",
      "De Musset sign (head bob), Quincke pulse (nail bed pulsation), Hill sign",
      "Soft S1 (premature mitral closure) in chronic severe AR",
    ],
    keyLabs: [
      "Echocardiography — regurgitant severity, LV size/function, valve etiology",
      "ECG: LVH in chronic disease",
    ],
    associations: [
      "Bicuspid aortic valve",
      "Rheumatic fever",
      "Infective endocarditis",
      "Aortic root dilation/dissection",
      "Syphilitic aortitis (historical boards)",
    ],
    complications: [
      "Acute pulmonary edema (severe acute AR)",
      "LV failure and death if untreated",
      "Endocarditis",
    ],
    distinguishFrom: [
      "Pulmonic regurgitation — Graham Steell murmur with pulmonary hypertension, inspiration",
      "Mitral stenosis — diastolic rumble at apex, not blowing decrescendo at LSB",
      "Murmur of pregnancy — physiologic flow murmurs",
    ],
    treatment: [
      "Afterload reduction (ACEi) in chronic AR with symptoms or LV dilation",
      "Urgent aortic valve replacement in severe symptomatic or LV dysfunction",
      "Treat endocarditis; surgery for acute severe AR (e.g., dissection)",
    ],
    boardsPearls: [
      "Early diastolic decrescendo murmur at LSB — lean forward to hear",
      "Wide pulse pressure and hyperdynamic signs in chronic AR",
      "Acute severe AR: pulmonary edema, soft short murmur, surgical emergency",
      "Bicuspid valve is common cause in younger patients",
    ],
    pediatrics:
      "Rheumatic AR still seen globally; bicuspid AV may present in adolescence with exercise intolerance.",
  },
  {
    id: "copd",
    name: "COPD",
    etymology: "COPD = chronic obstructive pulmonary disease; Latin pulmo = lung + obstructio = blockage",
    aliases: [
      "copd",
      "chronic obstructive pulmonary disease",
      "chronic obstructive pulmonary diseases",
      "chronic obstructive lung disease",
    ],
    definition:
      "Progressive airflow limitation from chronic airway and/or parenchymal lung disease, usually related to tobacco smoke — encompasses emphysema (alveolar destruction) and chronic bronchitis (mucus hypersecretion) phenotypes.",
    pathophysiology:
      "Chronic irritant exposure → neutrophilic inflammation, protease–antiprotease imbalance, and small-airway fibrosis → irreversible obstruction (↓ FEV₁, ↓ FEV₁/FVC); hypoxemia and hypercapnia develop in advanced disease → secondary polycythemia via EPO.",
    classicPresentation: [
      "Long smoking history with progressive dyspnea",
      "Chronic cough with sputum (chronic bronchitis phenotype) or minimal cough (emphysema)",
      "Exertional dyspnea, wheeze, prolonged expiration",
      "Barrel chest, pursed-lip breathing, weight loss in emphysema",
    ],
    keyFindings: [
      "Obstructive PFTs — ↓ FEV₁, ↓ FEV₁/FVC, ↑ RV, air trapping",
      "Hyperinflation and flattened diaphragm on CXR (emphysema)",
      "Cyanosis and polycythemia in advanced chronic bronchitis (blue bloater)",
    ],
    keyLabs: [
      "ABG — hypoxemia, hypercapnia in severe disease",
      "↑ hematocrit from chronic hypoxia (secondary polycythemia)",
      "↓ DLCO in emphysema",
    ],
    associations: [
      "Emphysema — alveolar wall destruction, pink puffer",
      "Chronic bronchitis — productive cough ≥3 months × 2 years, blue bloater",
      "α1-antitrypsin deficiency — panacinar emphysema in younger patients",
      "Cor pulmonale and pulmonary hypertension",
    ],
    complications: [
      "Acute exacerbations (infection, pollution)",
      "Respiratory failure and cor pulmonale",
      "Secondary polycythemia and hyperviscosity",
      "Pneumothorax (especially with bullous emphysema)",
      "Lung cancer (shared smoking risk)",
    ],
    distinguishFrom: [
      "Asthma — reversible obstruction, younger onset, atopy",
      "Interstitial lung disease — restrictive PFTs, ↓ TLC, fine crackles",
      "Congestive heart failure — orthopnea, S3, pulmonary edema on CXR",
    ],
    treatment: [
      "Smoking cessation — most important intervention",
      "Bronchodilators (SABA, LAMA, LABA) ± inhaled corticosteroids",
      "Supplemental O₂ for chronic hypoxemia; pulmonary rehabilitation",
      "Treat exacerbations with bronchodilators, steroids, antibiotics when indicated",
    ],
    boardsPearls: [
      "COPD = chronic obstructive pulmonary disease; irreversible airflow limitation",
      "Obstructive PFTs: ↓ FEV₁/FVC (<0.7 post-bronchodilator in adults)",
      "Pink puffer = emphysema; blue bloater = chronic bronchitis with hypercapnia",
      "Chronic hypoxia → ↑ EPO → secondary polycythemia",
      "α1-antitrypsin deficiency — panacinar emphysema, lower lobes, liver disease",
    ],
    pediatrics:
      "COPD is an adult disease from chronic smoke exposure; children with recurrent wheeze have asthma or cystic fibrosis, not COPD.",
  },
  {
    id: "emphysema",
    name: "Emphysema",
    etymology: "Greek emphysan = inflate/blow in",
    aliases: [
      "emphysema",
      "pulmonary emphysema",
      "pulmonary emphysemas",
      "copd emphysema",
      "emphysematous copd",
    ],
    definition:
      "COPD phenotype with permanent enlargement of airspaces distal to terminal bronchioles due to alveolar wall destruction.",
    pathophysiology:
      "Smoke/elastase injury → loss of alveolar walls → ↓ elastic recoil → air trapping; α1-antitrypsin deficiency in panacinar form.",
    classicPresentation: [
      "Long smoking history, dyspnea, minimal cough",
      "Barrel chest, pursed-lip breathing",
      "Weight loss, cachexia",
    ],
    keyFindings: [
      "Hyperinflation, flattened diaphragm on CXR",
      "↓ breath sounds, prolonged expiration",
      "↓ DLCO",
    ],
    associations: ["Smoking", "α1-antitrypsin deficiency (panacinar)"],
    complications: [
      "Cor pulmonale",
      "Pneumothorax (especially bullae)",
      "Respiratory failure",
    ],
    distinguishFrom: [
      "Chronic bronchitis — productive cough prominent, less hyperinflation",
      "Asthma — reversible obstruction, younger onset",
    ],
    treatment: [
      "Smoking cessation; bronchodilators (SABA, LAMA, LABA)",
      "Supplemental O₂ for hypoxemia; α1-antitrypsin replacement if deficient",
    ],
    boardsPearls: [
      "Centriacinar (centrilobular): smoking, upper lobes",
      "Panacinar: α1-antitrypsin deficiency, lower lobes",
      "Pink puffer (emphysema) vs blue bloater (chronic bronchitis)",
      "COPD phenotype — one component of chronic obstructive pulmonary disease",
      "Chronic hypoxia → secondary polycythemia via EPO",
    ],
    pediatrics:
      "Emphysema in children is rare — consider α1-antitrypsin deficiency or cystic fibrosis; adult centriacinar emphysema is smoking-related.",
  },
  {
    id: "interstitial-lung-disease",
    name: "Interstitial Lung Disease",
    etymology: "Latin inter = between + sistere = stand + lung = respiratory organ + disease = disordered function",
    aliases: [
      "interstitial lung disease",
      "interstitial lung diseases",
      "ild",
      "diffuse parenchymal lung disease",
      "interstitial pneumonia",
    ],
    definition:
      "Heterogeneous group of disorders affecting the lung interstitium and alveolar structures, causing inflammation and/or fibrosis with restrictive physiology and impaired gas exchange.",
    pathophysiology:
      "Injury to alveolar epithelium and capillary endothelium → inflammatory cell infiltration → fibroblast activation and collagen deposition → stiff, noncompliant lungs with ↓ DLCO and eventual respiratory failure.",
    classicPresentation: [
      "Progressive exertional dyspnea",
      "Dry cough (less productive than COPD/chronic bronchitis)",
      "Fine inspiratory crackles (velcro rales) on exam",
      "Clubbing in advanced fibrotic disease (e.g., IPF)",
    ],
    keyFindings: [
      "Restrictive pattern on PFTs — ↓ TLC, normal or ↑ FEV₁/FVC, ↓ DLCO",
      "HRCT — reticular opacities, ground-glass, traction bronchiectasis, honeycombing (UIP pattern in IPF)",
      "Bilateral infiltrates without cardiogenic edema pattern",
    ],
    keyLabs: [
      "Serologies for connective tissue disease (ANA, RF, anti-CCP, Scl-70) if suspected",
      "ACE level and biopsy if sarcoidosis suspected",
      "Environmental/occupational exposure history guides workup",
    ],
    associations: [
      "Idiopathic pulmonary fibrosis (IPF)",
      "Sarcoidosis, hypersensitivity pneumonitis",
      "Pneumoconiosis (silica, asbestos, coal)",
      "Connective tissue disease — RA, scleroderma, SLE, polymyositis",
      "Drug-induced — amiodarone, bleomycin, methotrexate, nitrofurantoin",
      "Smoking-related interstitial lung disease",
    ],
    complications: [
      "Progressive respiratory failure",
      "Pulmonary hypertension and cor pulmonale",
      "Lung cancer (especially IPF, asbestosis)",
    ],
    distinguishFrom: [
      "COPD — obstructive PFTs (↑ RV, ↓ FEV₁/FVC), smoking, hyperinflation",
      "Congestive heart failure — cardiomegaly, BNP ↑, Kerley B lines, pleural effusions",
      "Pneumonia — acute febrile illness, focal consolidation, resolves with treatment",
      "Sarcoidosis — noncaseating granulomas, BHL; ILD is broader category including sarcoid",
      "Pneumoconiosis — occupational ILD subset with specific dust exposure",
    ],
    treatment: [
      "Treat underlying cause (stop offending drug, remove antigen, treat CTD)",
      "Antifibrotics (nintedanib, pirfenidone) for IPF",
      "Corticosteroids ± immunosuppression for inflammatory ILD (sarcoid, hypersensitivity pneumonitis, CTD-ILD)",
      "Supplemental oxygen; lung transplant for end-stage fibrosis",
    ],
    boardsPearls: [
      "ILD = restrictive lung disease — ↓ TLC + ↓ DLCO; crackles common",
      "IPF — older adult, basal/subpleural honeycombing (UIP pattern), poor prognosis",
      "Hypersensitivity pneumonitis — bird/fungal antigen exposure; ground-glass + centrilobular nodules",
      "Drug causes: amiodarone, bleomycin, methotrexate — always ask medication history",
      "vs COPD — obstructive vs restrictive PFT pattern is the key fork",
    ],
    pediatrics:
      "Neuroendocrine cell hyperplasia of infancy and genetic surfactant disorders cause pediatric ILD; different etiology workup than adult IPF.",
  },
  {
    id: "pneumoconiosis",
    name: "Pneumoconiosis",
    etymology: "Greek pneuma = air/lung + konis = dust + -osis = condition",
    aliases: [
      "pneumoconiosis",
      "pneumoconioses",
      "silicosis",
      "asbestosis",
      "coal workers pneumoconiosis",
    ],
    definition:
      "Interstitial lung disease from inhalation of mineral dusts (silica, asbestos, coal) causing fibrosis and restrictive physiology.",
    pathophysiology:
      "Inhaled particles → macrophage activation and fibrosis → restrictive lung disease; silica impairs macrophage function → ↑ TB risk; asbestos → pleural plaques, mesothelioma.",
    classicPresentation: [
      "Occupational exposure (mining, construction, shipyard)",
      "Progressive dyspnea",
      "Asbestos: pleural plaques, decades latency for mesothelioma",
    ],
    keyFindings: [
      "Small rounded opacities on CXR (silicosis)",
      "Eggshell calcification of hilar lymph nodes (silicosis)",
      "Pleural plaques (asbestos)",
    ],
    associations: [
      "Silica exposure → ↑ tuberculosis risk",
      "Asbestos + smoking → synergistic lung cancer risk",
    ],
    complications: [
      "Progressive massive fibrosis",
      "Mesothelioma (asbestos)",
      "Lung cancer",
    ],
    distinguishFrom: [
      "Sarcoidosis — noncaseating granulomas, BHL, no occupational history",
      "Idiopathic pulmonary fibrosis — no dust exposure",
    ],
    treatment: [
      "Remove from exposure; no specific cure",
      "Supportive care; treat complications (TB prophylaxis in silicosis)",
    ],
    boardsPearls: [
      "Silicosis: upper lobe fibrosis, eggshell hilar calcification, ↑ TB",
      "Asbestos: pleural plaques, mesothelioma (not lung cancer alone)",
      "Berylliosis mimics sarcoidosis histologically",
    ],
  },
  {
    id: "pulmonary-hypertension",
    name: "Pulmonary Hypertension",
    etymology: "Latin pulmo = lung + Greek hyper = excess + Latin tensio = pressure/stretching",
    aliases: [
      "pulmonary hypertension",
      "pah",
      "pulmonary arterial hypertension",
    ],
    definition:
      "Elevated mean pulmonary arterial pressure (≥20 mmHg at rest) from varied etiologies, leading to right heart strain and failure.",
    pathophysiology:
      "↑ pulmonary vascular resistance → right ventricular pressure overload → RV hypertrophy and eventual failure; etiologies include idiopathic, left heart disease, hypoxemia, chronic thromboembolism.",
    classicPresentation: [
      "Progressive dyspnea, exertional syncope",
      "Underlying connective tissue disease or CHD",
      "Insidious onset over months",
    ],
    keyFindings: [
      "Loud P2 (pulmonic component of S2)",
      "Parasternal heave (RV hypertrophy)",
      "Elevated JVP, peripheral edema (late)",
    ],
    keyLabs: [
      "Echo: elevated RVSP, RV dilation",
      "Right heart catheterization — definitive",
    ],
    associations: [
      "Idiopathic PAH",
      "Scleroderma",
      "Left heart failure",
      "Chronic thromboembolic disease",
      "COPD/hypoxemia (Eisenmenger)",
    ],
    complications: [
      "Right heart failure",
      "Sudden death",
      "Syncope (poor prognostic sign)",
    ],
    distinguishFrom: [
      "Left heart failure — pulmonary edema, ↓ EF",
      "Asthma/COPD — obstructive pattern on PFTs",
    ],
    treatment: [
      "Treat underlying cause (left heart failure, hypoxemia, chronic thromboembolism)",
      "Vasodilators (sildenafil, epoprostenol) for pulmonary arterial hypertension",
    ],
    boardsPearls: [
      "Loud P2 suggests pulmonary hypertension",
      "Eisenmenger: left-to-right shunt → irreversible PAH → right-to-left shunt",
      "Syncope in PAH indicates advanced disease",
      "Systemic sclerosis — common cause of PAH; anti-centromere associated; evaluate dyspnea in scleroderma",
      "Scleroderma PAH — insidious dyspnea with normal CXR early; screen with echo",
    ],
  },
  {
    id: "chronic-bronchitis",
    name: "Chronic Bronchitis",
    etymology: "Greek chronos = time + bronchos = airway + -itis = inflammation",
    aliases: ["chronic bronchitis"],
    definition:
      "COPD phenotype defined clinically as productive cough for ≥3 months in ≥2 consecutive years, with airway inflammation and mucus hypersecretion.",
    pathophysiology:
      "Chronic irritant exposure (smoking) → goblet cell hyperplasia and mucus hypersecretion → airway obstruction and recurrent infections; Reid index >0.5 (gland/wall thickness).",
    classicPresentation: [
      "Chronic productive cough (daily sputum)",
      "Long smoking history",
      "Recurrent respiratory infections",
    ],
    keyFindings: [
      "Prolonged expiration, wheeze",
      "Cyanosis (blue bloater phenotype)",
      "Hypercapnia, polycythemia",
    ],
    associations: ["Smoking", "Air pollution", "Occupational dusts"],
    complications: [
      "Cor pulmonale",
      "Respiratory failure",
      "Secondary polycythemia",
    ],
    distinguishFrom: [
      "Emphysema — dyspnea predominant, hyperinflation, pink puffer",
      "Bronchiectasis — copious purulent sputum, dilated bronchi on CT",
    ],
    treatment: [
      "Smoking cessation; bronchodilators and inhaled corticosteroids",
      "Pulmonary rehabilitation; treat exacerbations with antibiotics and steroids",
    ],
    boardsPearls: [
      "Clinical definition: productive cough ≥3 months × 2 years",
      "Reid index >0.5 (gland layer thickness / bronchial wall thickness)",
      "Blue bloater: chronic bronchitis with hypercapnia and cyanosis",
    ],
  },
  {
    id: "glomerulonephritis",
    name: "Glomerulonephritis",
    etymology: "Latin glomerulus = small ball + Greek nephros = kidney + -itis = inflammation",
    aliases: [
      "glomerulonephritis",
      "glomerular nephritis",
      "poststreptococcal glomerulonephritis",
      "post-streptococcal glomerulonephritis",
      "post streptococcal glomerulonephritis",
      "psgn",
      "iga nephropathy",
      "berger disease",
    ],
    definition:
      "Inflammation of the renal glomeruli causing hematuria, proteinuria, and impaired filtration; may present as nephritic syndrome, nephrotic syndrome, or rapidly progressive renal failure.",
    pathophysiology:
      "Immune-mediated glomerular injury (immune complex deposition, anti-GBM antibodies, or ANCA-associated pauci-immune disease) → complement activation, inflammatory cell infiltration, and GBM damage → hematuria with RBC casts; severe disease forms crescents (RPGN) from proliferative epithelial cells in Bowman space.",
    classicPresentation: [
      "Cola- or tea-colored urine (glomerular hematuria)",
      "Hypertension, oliguria, periorbital edema (nephritic presentation)",
      "1–3 weeks after streptococcal pharyngitis or impetigo (post-streptococcal GN)",
      "Episodic gross hematuria during or after URI (IgA nephropathy)",
    ],
    keyFindings: [
      "RBC casts on urinalysis (pathognomonic for glomerular bleeding)",
      "Dysmorphic RBCs",
      "Hypertension and edema",
      ">50% crescents on biopsy → rapidly progressive GN",
    ],
    keyLabs: [
      "Urinalysis: hematuria, RBC casts, variable proteinuria",
      "↑ creatinine, ↓ GFR",
      "↓ C3 in post-streptococcal GN and MPGN type I",
      "↑ anti-streptolysin O / anti-DNase B (recent strep)",
      "Anti-GBM antibodies (Goodpasture); ANCA (vasculitis); anti-dsDNA (lupus nephritis)",
    ],
    associations: [
      "Post-streptococcal GN (children, 1–3 weeks post-infection)",
      "IgA nephropathy (Berger disease) — most common GN worldwide",
      "Goodpasture syndrome (anti-GBM)",
      "ANCA-associated vasculitis (GPA, MPA)",
      "Lupus nephritis",
      "Membranoproliferative glomerulonephritis (MPGN)",
    ],
    complications: [
      "Acute kidney injury",
      "Rapidly progressive renal failure (crescentic GN)",
      "Chronic kidney disease and ESRD",
      "Hypertensive emergency",
    ],
    distinguishFrom: [
      "Nephrotic syndrome — heavy proteinuria (>3.5 g/day), fatty casts, minimal hematuria",
      "UTI/pyelonephritis — WBC casts, dysuria, positive urine culture",
      "Nephritic syndrome — clinical presentation subset of glomerulonephritis",
      "Hematuria from stones or malignancy — no RBC casts, no dysmorphic RBCs",
    ],
    treatment: [
      "Post-streptococcal GN: supportive care (usually self-limited in children)",
      "RPGN: urgent immunosuppression (steroids ± cyclophosphamide) ± plasmapheresis (anti-GBM, severe vasculitis)",
      "IgA nephropathy: ACE inhibitors; steroids/immunosuppression if progressive",
      "Lupus nephritis: mycophenolate or cyclophosphamide per class",
    ],
    boardsPearls: [
      "RBC casts = glomerulonephritis until proven otherwise",
      'Post-strep GN: ↓ C3, normal C4, subepithelial "humps" on EM, resolves in 6–8 weeks',
      "IgA nephropathy: mesangial IgA deposition; synpharyngitic hematuria",
      "RPGN: crescents on biopsy — treat urgently (Goodpasture, ANCA vasculitis, severe lupus)",
      "Goodpasture: anti-GBM → pulmonary hemorrhage + RPGN; linear IgG on biopsy",
    ],
    pediatrics:
      "Post-streptococcal GN is classic in children after pharyngitis or skin infection; usually self-limited. Minimal change disease causes nephrotic (not primarily nephritic) presentation — distinguish by RBC casts vs heavy proteinuria.",
  },
  {
    id: "goodpasture-syndrome",
    name: "Goodpasture Syndrome",
    etymology:
      "Eponym for Ernest Goodpasture + syndrome = grouped findings",
    aliases: [
      "goodpasture",
      "goodpasture syndrome",
      "goodpasture disease",
      "anti-gbm disease",
      "anti gbm disease",
      "anti-gbm antibody disease",
      "anti glomerular basement membrane disease",
      "pulmonary renal syndrome anti-gbm",
    ],
    definition:
      "Autoimmune pulmonary-renal syndrome caused by IgG antibodies against the α3 chain of type IV collagen in glomerular and alveolar basement membranes.",
    pathophysiology:
      "Anti-GBM IgG binds fixed basement membrane antigen → type II hypersensitivity, complement activation, glomerular necrosis/crescents, and alveolar capillary injury with pulmonary hemorrhage. Kidney biopsy shows linear IgG/C3 along the GBM.",
    classicPresentation: [
      "Young adult with hemoptysis plus hematuria",
      "Dyspnea or hypoxemia from pulmonary hemorrhage",
      "Oliguria, edema, hypertension from rapidly progressive glomerulonephritis",
      "Recent respiratory infection, smoking, or hydrocarbon exposure may precede symptoms",
    ],
    keyFindings: [
      "Pulmonary hemorrhage",
      "Nephritic urine sediment with RBC casts",
      "Rapidly rising creatinine",
      "Crescentic glomerulonephritis on biopsy",
    ],
    keyLabs: [
      "Serum anti-GBM antibodies",
      "Urinalysis: hematuria, RBC casts, proteinuria",
      "Kidney biopsy immunofluorescence: linear IgG along GBM",
      "Chest imaging: bilateral infiltrates if alveolar hemorrhage",
    ],
    associations: [
      "Type II hypersensitivity",
      "Type IV collagen α3 chain (COL4A3) target",
      "HLA-DR15 association",
      "Smoking and hydrocarbon exposure increase pulmonary hemorrhage risk",
    ],
    complications: [
      "Rapidly progressive renal failure",
      "End-stage renal disease",
      "Life-threatening pulmonary hemorrhage",
      "Respiratory failure",
    ],
    distinguishFrom: [
      "Granulomatosis with polyangiitis — c-ANCA/PR3, granulomas, upper airway disease",
      "Microscopic polyangiitis — p-ANCA/MPO, pauci-immune GN, no granulomas",
      "Lupus nephritis — granular immune complex deposition/full-house immunofluorescence",
      "Post-streptococcal GN — low C3, subepithelial humps, post-strep timing",
    ],
    treatment: [
      "Urgent plasmapheresis to remove anti-GBM antibodies",
      "High-dose corticosteroids plus cyclophosphamide or rituximab",
      "Dialysis for severe renal failure",
      "Smoking cessation and avoidance of pulmonary irritants",
    ],
    boardsPearls: [
      "Linear IgG along GBM = Goodpasture; granular deposition = immune complex disease",
      "Pulmonary hemorrhage + RPGN → think anti-GBM disease",
      "Mechanism is type II hypersensitivity against fixed basement membrane antigen",
      "Anti-GBM target is type IV collagen α3 chain in glomerular and alveolar basement membrane",
      "Treat fast: plasmapheresis plus immunosuppression",
    ],
    pediatrics:
      "Rare in children, but pulmonary hemorrhage with nephritic urine or rapidly rising creatinine is a renal emergency requiring immediate anti-GBM testing and nephrology involvement.",
  },
  {
    id: "nephritic-syndrome",
    name: "Nephritic Syndrome",
    etymology: "Greek nephros = kidney + -itis = inflammation + syndrome = grouped findings",
    aliases: ["nephritic syndrome", "nephritic"],
    definition:
      "Glomerular disease presenting with hematuria, RBC casts, oliguria, hypertension, and variable proteinuria (<3.5 g/day).",
    pathophysiology:
      "Glomerular inflammation → GBM damage → RBC leakage into urine → RBC casts; ↓ GFR → oliguria, fluid retention, hypertension.",
    classicPresentation: [
      "Cola-colored urine (hematuria)",
      "Periorbital edema, hypertension",
      "Recent streptococcal infection (post-streptococcal GN)",
    ],
    keyLabs: [
      "RBC casts on urinalysis",
      "↑ creatinine, ↓ GFR",
      "↑ anti-streptolysin O (post-strep GN)",
      "↓ C3 (post-strep GN, MPGN)",
    ],
    associations: [
      "Post-streptococcal glomerulonephritis",
      "IgA nephropathy (Berger disease)",
      "Rapidly progressive GN (Goodpasture, ANCA vasculitis)",
    ],
    complications: [
      "Acute kidney injury",
      "Chronic kidney disease",
      "Hypertensive emergency",
    ],
    distinguishFrom: [
      "Nephrotic syndrome — heavy proteinuria (>3.5 g/day), fatty casts, minimal hematuria",
      "UTI — WBC casts, dysuria, positive culture",
    ],
    treatment: [
      "Supportive care for post-streptococcal GN (usually self-limited)",
      "Immunosuppression (steroids, cyclophosphamide) for rapidly progressive GN",
    ],
    boardsPearls: [
      "RBC casts = glomerular origin of hematuria",
      "Post-strep GN: low C3, normal C4, resolves in 6–8 weeks",
      "Nephritic = inflammation; nephrotic = podocyte damage/leak",
    ],
    pediatrics:
      "Post-streptococcal GN common in children 1–3 weeks after pharyngitis or skin infection; usually self-limited.",
  },
  {
    id: "nephrotic-syndrome",
    name: "Nephrotic Syndrome",
    etymology: "Greek nephros = kidney + -otic = condition + syndrome = grouped findings",
    aliases: ["nephrotic syndrome", "nephrotic"],
    definition:
      "Glomerular disease with heavy proteinuria (>3.5 g/day), hypoalbuminemia, edema, hyperlipidemia, and lipiduria.",
    pathophysiology:
      "Podocyte/GBM damage → massive protein loss → ↓ oncotic pressure → edema; liver compensates with lipoprotein synthesis → hyperlipidemia.",
    classicPresentation: [
      "Periorbital and peripheral edema",
      "Foamy urine",
      "Hypercoagulability (renal vein thrombosis)",
    ],
    keyLabs: [
      "Proteinuria >3.5 g/day",
      "↓ albumin",
      "Fatty casts (Maltese cross on polarized light)",
      "↑ LDL cholesterol",
    ],
    associations: [
      "Minimal change disease (children)",
      "Focal segmental glomerulosclerosis",
      "Membranous nephropathy (adults)",
      "Diabetic nephropathy",
      "Amyloidosis",
    ],
    complications: [
      "Renal vein thrombosis",
      "Infection (loss of immunoglobulins)",
      "Hypercoagulability",
    ],
    distinguishFrom: [
      "Nephritic syndrome — RBC casts, hypertension, oliguria",
      "Heart failure edema — JVD, pulmonary congestion",
    ],
    treatment: [
      "Corticosteroids for minimal change disease (especially in children)",
      "ACE inhibitors to reduce proteinuria; treat underlying cause",
    ],
    boardsPearls: [
      "Minimal change disease: selective albuminuria, responds to steroids, most common in children",
      "FSGS: common in African Americans, HIV-associated",
      "Hypercoagulable state — lose antithrombin III in urine",
    ],
    pediatrics:
      "Minimal change disease is most common cause in children; dramatic response to corticosteroids.",
  },
  {
    id: "nephrolithiasis",
    name: "Nephrolithiasis",
    etymology: "Greek nephros = kidney + lithos = stone + -iasis = condition",
    aliases: [
      "nephrolithiasis",
      "kidney stones",
      "kidney stone",
      "renal calculi",
      "renal stones",
      "renal stone",
      "urolithiasis",
      "urinary stones",
      "urinary stone",
    ],
    definition:
      "Formation of crystalline concretions in the urinary tract causing colicky flank pain and hematuria.",
    pathophysiology:
      "Supersaturation of urine with stone-forming salts → crystal nucleation and growth; calcium oxalate most common; staghorn calculi from struvite (infection stones).",
    classicPresentation: [
      "Sudden severe flank pain radiating to groin",
      "Hematuria",
      "Restlessness (cannot find comfortable position)",
    ],
    keyLabs: [
      "Hematuria on urinalysis",
      "CT abdomen/pelvis without contrast — gold standard",
      "24-h urine collection for metabolic workup",
    ],
    associations: [
      "Hypercalciuria",
      "Hyperoxaluria",
      "Hyperuricemia (gout)",
      "UTI with urease-positive organisms (struvite)",
    ],
    complications: ["Hydronephrosis", "Pyelonephritis", "Obstructive uropathy"],
    distinguishFrom: [
      "Pyelonephritis — fever, WBC casts, less colicky pain",
      "AAA — pulsatile mass, older hypertensive patient",
    ],
    treatment: [
      "Analgesia (NSAIDs) and hydration for acute colic",
      "Lithotripsy or surgical removal for large or obstructing stones",
    ],
    boardsPearls: [
      "Calcium oxalate: envelope-shaped crystals, most common",
      "Struvite (ammonium magnesium phosphate): staghorn calculi, Proteus/Morganella",
      "Uric acid stones: radiolucent on X-ray, associated with gout",
    ],
  },
  {
    id: "calcium-nephrolithiasis",
    name: "Calcium Nephrolithiasis",
    etymology: "Latin calx = lime + Greek nephros = kidney + lithos = stone + -iasis = condition",
    aliases: [
      "calcium nephrolithiasis",
      "calcium kidney stones",
      "calcium kidney stone",
      "calcium oxalate nephrolithiasis",
      "calcium oxalate stones",
      "calcium oxalate stone",
      "calcium oxalate kidney stones",
      "calcium phosphate stones",
      "calcium phosphate nephrolithiasis",
      "hypercalciuria stones",
      "calcium renal calculi",
    ],
    definition:
      "Renal or ureteral stone disease composed primarily of calcium salts — most often calcium oxalate, less commonly calcium phosphate — representing the majority of kidney stones.",
    pathophysiology:
      "Supersaturation of urine with calcium and oxalate (or phosphate) → crystal nucleation and growth → stone formation; hypercalciuria, hyperoxaluria, low urine citrate, and dehydration are major promoters; Randall plaques on papillary tips may seed calcium oxalate stones.",
    classicPresentation: [
      "Sudden colicky flank pain radiating to groin",
      "Hematuria",
      "Restlessness — cannot find comfortable position",
      "History of prior stones, dehydration, or high oxalate diet",
    ],
    keyFindings: [
      "Calcium oxalate crystals — envelope- or dumbbell-shaped on urinalysis",
      "Radiopaque stone on CT/KUB (most calcium stones)",
      "Hydronephrosis if obstructing",
    ],
    keyLabs: [
      "Hematuria on urinalysis",
      "24-h urine: calcium, oxalate, citrate, uric acid, volume, pH",
      "Serum calcium, PTH if hypercalcemia suspected",
      "Noncontrast CT — gold standard for acute stone evaluation",
    ],
    associations: [
      "Hypercalciuria — idiopathic most common; hyperparathyroidism, sarcoidosis, malignancy",
      "Hyperoxaluria — high oxalate diet, malabsorption (Crohn, gastric bypass), ethylene glycol",
      "Hypocitraturia — renal tubular acidosis type I, chronic diarrhea",
      "Dehydration and low urine volume",
      "Obesity and metabolic syndrome",
    ],
    complications: [
      "Obstructive uropathy and hydronephrosis",
      "Pyelonephritis above obstructing stone",
      "Recurrent stone formation",
      "Chronic kidney disease with repeated obstruction/infection",
    ],
    distinguishFrom: [
      "Struvite stones — infection-related, staghorn, urease-positive organisms",
      "Uric acid stones — radiolucent, acidic urine, gout",
      "Cystine stones — hexagonal crystals, young patient, cystinuria",
      "General nephrolithiasis — umbrella term; calcium stones are most common subtype",
    ],
    treatment: [
      "Acute: NSAIDs for pain, hydration, urologic intervention if obstructing/infected",
      "Prevention: ↑ fluid intake, thiazide/chlorthalidone for hypercalciuria, citrate supplementation, treat hyperparathyroidism",
      "Dietary oxalate moderation if hyperoxaluric; adequate calcium intake with meals (binds oxalate in gut)",
    ],
    boardsPearls: [
      "Calcium oxalate = most common kidney stone (~70–80%)",
      "Envelope-shaped crystals on urinalysis → calcium oxalate",
      "Thiazides/chlorthalidone ↓ urinary Ca²⁺ — stone prevention in hypercalciuria",
      "Loop diuretics ↑ Ca²⁺ excretion — worsen calcium stones",
      "Citrate (potassium citrate) inhibits stone formation — correct hypocitraturia",
      "Staghorn calculi = think struvite (infection), not typical calcium oxalate alone",
    ],
    pediatrics:
      "Pediatric stones are less common; consider cystinuria, RTA, and metabolic workup in children with recurrent calcium stones.",
  },
  {
    id: "renal-cell-carcinoma",
    name: "Renal Cell Carcinoma",
    etymology: "Latin ren = kidney + cellula = small cell + carcinoma = malignant epithelial tumor",
    aliases: [
      "renal cell carcinoma",
      "renal cell carcinomas",
      "rcc",
      "renal carcinoma",
      "hypernephroma",
      "clear cell renal cell carcinoma",
      "clear cell carcinoma of kidney",
      "kidney cancer",
    ],
    definition:
      "Malignant epithelial tumor arising from renal tubular epithelium, most commonly the clear cell subtype; often presents with hematuria and may cause paraneoplastic syndromes before metastasis is evident.",
    pathophysiology:
      "Clonal transformation of proximal tubular epithelium → clear cell histology with lipid/glycogen-rich cytoplasm; VHL gene loss (3p deletion) in many sporadic and hereditary cases → constitutive HIF activation → ↑ VEGF and erythropoietin; tumor invades renal vein (left-sided extension to IVC classic) and metastasizes hematogenously to lung, bone, and brain.",
    classicPresentation: [
      "Classic triad (uncommon as full triad): hematuria, flank pain, palpable abdominal/flank mass",
      "Often asymptomatic until advanced — incidental renal mass on imaging",
      "Painless gross hematuria in older adult",
      "Constitutional symptoms: weight loss, fever, malaise",
    ],
    keyFindings: [
      "Solid enhancing renal mass on CT/MRI",
      "Clear cell histology — cells with abundant clear cytoplasm (lipid/glycogen dissolved in processing)",
      "Renal vein or IVC tumor thrombus on imaging",
      "Osteolytic bone metastases (lytic lesions)",
    ],
    keyLabs: [
      "Hematuria on urinalysis",
      "Paraneoplastic polycythemia from ectopic EPO secretion",
      "Hypercalcemia from PTHrP (less common than in squamous carcinoma)",
      "Stauffer syndrome — nonmetastatic hepatic dysfunction",
    ],
    associations: [
      "Smoking — major risk factor",
      "Von Hippel–Lindau (VHL) syndrome — bilateral/multifocal clear cell RCC, hemangioblastomas, pheochromocytoma",
      "Obesity and hypertension",
      "Acquired cystic kidney disease in long-term dialysis",
      "Paraneoplastic syndromes — polycythemia, hypercalcemia, hypertension (renin)",
    ],
    complications: [
      "Renal vein/IVC thrombus",
      "Hematogenous metastasis to lung, bone, brain, liver",
      "Paraneoplastic polycythemia and hypercalcemia",
      "Treatment-related toxicity with targeted therapy and immunotherapy",
    ],
    distinguishFrom: [
      "Wilms tumor — pediatric kidney mass, not adult RCC",
      "Transitional cell (urothelial) carcinoma — arises from urothelium of renal pelvis/ureter; hematuria without parenchymal mass pattern",
      "Renal oncocytoma — benign; central scar on imaging; eosinophilic granular cytoplasm histologically",
      "Angiomyolipoma — fat-containing benign mass; tuberous sclerosis association",
      "Pyelonephritis — fever, WBC casts, not solid enhancing mass",
    ],
    treatment: [
      "Partial or radical nephrectomy for localized disease",
      "Targeted therapy (VEGF/tyrosine kinase inhibitors) and immunotherapy for advanced/metastatic RCC",
      "Historical: high-dose IL-2 for select metastatic clear cell RCC",
    ],
    boardsPearls: [
      "RCC = malignant tumor of renal tubular epithelium; clear cell type most common",
      "VHL → 3p deletion → HIF dysregulation → clear cell RCC + hemangioblastomas",
      "Classic triad: hematuria, flank pain, palpable mass — rarely all three together",
      "Paraneoplastic polycythemia from ectopic EPO — RCC is classic association",
      "Left renal vein drains directly into IVC — RCC may extend as tumor thrombus",
      "RCC metastases often lytic (osteolytic) bone lesions; lung 'cannonball' metastases",
      "RCC invades renal vein — left-sided tumor thrombus to IVC is board favorite",
    ],
    pediatrics:
      "RCC is primarily an adult malignancy; pediatric renal mass is Wilms tumor until proven otherwise. RCC in children/adolescents is rare and often associated with VHL or other syndromes.",
  },
  {
    id: "autosomal-dominant-polycystic-kidney-disease",
    name: "Autosomal Dominant Polycystic Kidney Disease",
    etymology: "autos = self + dominus = lord + Greek poly = many + kystis = bladder/sac + nephros = kidney",
    aliases: [
      "autosomal dominant polycystic kidney disease",
      "adpkd",
      "adult polycystic kidney disease",
      "adult-onset polycystic kidney disease",
      "polycystic kidney disease",
      "polycystic kidney diseases",
      "pkd",
      "pkd1",
      "pkd2",
    ],
    definition:
      "Inherited disorder of tubular epithelial proliferation causing progressive bilateral renal cysts, hypertension, and chronic kidney disease; the most common inherited kidney disease in adults.",
    pathophysiology:
      "Mutations in PKD1 (polycystin-1, chromosome 16) or PKD2 (polycystin-2, chromosome 4) → defective ciliary signaling and abnormal tubular cell proliferation → expanding fluid-filled cysts that compress and destroy renal parenchyma → progressive CKD.",
    classicPresentation: [
      "Hypertension in young adult (often before creatinine rises)",
      "Flank or abdominal pain from cyst hemorrhage, infection, or stones",
      "Hematuria from cyst rupture",
      "Palpable bilateral enlarged kidneys on exam",
      "Family history of kidney failure or intracranial aneurysm",
    ],
    keyLabs: [
      "Renal ultrasound or MRI — multiple bilateral cysts (≥2 per side in adults with family history, or age-specific criteria)",
      "PKD1/PKD2 genetic testing when diagnosis uncertain",
      "↑ creatinine with progressive CKD",
      "Screen for intracranial aneurysm when family history of SAH or high-risk occupation",
    ],
    associations: [
      "Berry (saccular) cerebral aneurysms — subarachnoid hemorrhage risk",
      "Hepatic cysts (often asymptomatic)",
      "Mitral valve prolapse",
      "Colonic diverticulosis",
      "PKD1 mutations — earlier and more severe disease than PKD2",
    ],
    complications: [
      "End-stage renal disease (often 5th–7th decade)",
      "Cyst infection or hemorrhage",
      "Nephrolithiasis",
      "Subarachnoid hemorrhage from ruptured berry aneurysm",
    ],
    distinguishFrom: [
      "ARPKD — autosomal recessive, neonatal/childhood presentation, hepatic fibrosis, not adult-onset dominant inheritance",
      "Simple renal cyst — solitary, thin-walled, no CKD or family history",
      "Acquired cystic kidney disease — long-standing dialysis patients",
      "Medullary sponge kidney — cystic dilatation of collecting ducts, different imaging pattern",
    ],
    treatment: [
      "Blood pressure control (ACE inhibitors/ARBs preferred)",
      "Tolvaptan (vasopressin V2 antagonist) may slow cyst growth in selected patients",
      "Treat complications (stones, infection, pain); dialysis or transplant for ESRD",
      "Screen and manage intracranial aneurysms per guidelines when indicated",
    ],
    boardsPearls: [
      "ADPKD = PKD1 or PKD2; autosomal dominant with variable penetrance",
      "HTN often precedes elevated creatinine — earliest treatable manifestation",
      "Berry aneurysm association — worst headache of life if SAH",
      "Multiple bilateral renal cysts + family history + HTN in young adult = ADPKD",
      "PKD1 (chrom 16) more common and severe than PKD2 (chrom 4)",
      "Unqualified 'polycystic kidney disease' in adults usually means ADPKD; ARPKD is recessive neonatal/childhood form",
    ],
    pediatrics:
      "Cysts may be too small to detect in childhood; large-enough cysts can rarely appear in adolescents with known family history — adult diagnostic criteria apply by age.",
  },
  {
    id: "autosomal-recessive-polycystic-kidney-disease",
    name: "Autosomal Recessive Polycystic Kidney Disease",
    etymology: "autos = self + recessus = withdrawn/hidden + Greek poly = many + kystis = bladder/sac + nephros = kidney",
    aliases: [
      "autosomal recessive polycystic kidney disease",
      "arpkd",
      "infantile polycystic kidney disease",
      "childhood polycystic kidney disease",
      "recessive polycystic kidney disease",
      "pkhd1",
    ],
    definition:
      "Autosomal recessive ciliopathy from PKHD1 (fibrocystin) mutations causing cystic renal dysplasia and congenital hepatic fibrosis, typically presenting in utero, at birth, or in childhood.",
    pathophysiology:
      "PKHD1 mutation → defective fibrocystin at cilia/basolateral membrane → abnormal collecting duct and biliary duct morphology → innumerable small renal cysts with radially arranged enlarged kidneys and periportal hepatic fibrosis → oligohydramnios and Potter sequence in severe perinatal forms.",
    classicPresentation: [
      "Prenatal ultrasound — enlarged echogenic kidneys, oligohydramnios",
      "Neonate — respiratory distress from pulmonary hypoplasia (Potter sequence)",
      "Hypertension and progressive CKD in surviving infants/children",
      "Portal hypertension from congenital hepatic fibrosis (splenomegaly, varices)",
      "Normal parents with affected sibling — recessive inheritance pattern",
    ],
    keyLabs: [
      "Prenatal/postnatal renal ultrasound — bilaterally enlarged, echogenic kidneys with poor corticomedullary differentiation",
      "PKHD1 genetic testing",
      "Liver imaging/biopsy — congenital hepatic fibrosis (not macroscopic hepatic cysts like ADPKD)",
      "↑ creatinine, hypertension on follow-up",
    ],
    associations: [
      "Potter sequence — oligohydramnios, pulmonary hypoplasia, Potter facies",
      "Congenital hepatic fibrosis — portal hypertension",
      "Caroli syndrome variant — cystic biliary dilatation (overlap spectrum)",
    ],
    complications: [
      "Neonatal death from pulmonary hypoplasia (severe perinatal form)",
      "End-stage renal disease in childhood or adolescence",
      "Portal hypertension complications (variceal bleeding, hypersplenism)",
      "Recurrent urinary tract infections",
    ],
    distinguishFrom: [
      "ADPKD — dominant inheritance, adult onset, large cortical cysts, hepatic cysts not fibrosis",
      "Multicystic dysplastic kidney — nonhereditary, often unilateral, nonfunctional",
      "Potter sequence alone — descriptive consequence of oligohydramnios; ARPKD is one underlying cause",
      "Autosomal dominant polycystic liver disease — liver cysts without recessive renal/hepatic fibrosis pattern",
    ],
    treatment: [
      "Supportive neonatal care for pulmonary hypoplasia and renal failure",
      "Antihypertensive therapy and CKD management",
      "Manage portal hypertension (banding, transplant evaluation)",
      "Dialysis and kidney/liver transplantation in selected patients",
    ],
    boardsPearls: [
      "ARPKD = PKHD1; autosomal recessive — 25% recurrence risk for carrier parents",
      "Enlarged echogenic kidneys on prenatal US + oligohydramnios → ARPKD/Potter spectrum",
      "Congenital hepatic fibrosis distinguishes ARPKD from ADPKD (which has hepatic cysts)",
      "Perinatal type — worst prognosis with pulmonary hypoplasia; juvenile type may survive to CKD",
      "vs ADPKD — recessive, neonatal/childhood, small cysts, hepatic fibrosis not macroscopic liver cysts",
    ],
    pediatrics:
      "ARPKD is primarily a pediatric/perinatal disease — severe cases present in the nursery with Potter facies and respiratory failure; milder juvenile forms progress to CKD and portal HTN over years.",
  },
  {
    id: "oligohydramnios",
    name: "Oligohydramnios",
    etymology: "Greek oligos = few/scant + hydor = water + amnion = membrane around fetus",
    aliases: [
      "oligohydramnios",
      "oligohydramnion",
      "low amniotic fluid",
      "decreased amniotic fluid",
      "reduced amniotic fluid volume",
    ],
    definition:
      "Abnormally low amniotic fluid volume during pregnancy — a prenatal finding with fetal, placental, or maternal causes that can lead to Potter sequence when severe and prolonged.",
    pathophysiology:
      "After the second trimester, fetal urine is the main source of amniotic fluid; reduced production (renal agenesis, obstructive uropathy, severe IUGR) or increased loss (premature rupture of membranes) → oligohydramnios → fetal compression and restricted lung development.",
    classicPresentation: [
      "Small uterus for gestational age or decreased fundal height growth",
      "Prenatal ultrasound — low amniotic fluid index (AFI) or single deepest pocket",
      "Fetal malpresentation (breech) from lack of cushioning",
      "Maternal perception of decreased fetal movement in some cases",
    ],
    keyFindings: [
      "Low AFI on ultrasound (<5 cm commonly used threshold; lab-specific)",
      "Fetal growth restriction on serial scans",
      "Absent or small fetal bladder if anuria/obstruction",
    ],
    keyLabs: [
      "Prenatal ultrasound — AFI, fetal kidneys/bladder, urine production",
      "Nonstress test / biophysical profile for fetal well-being",
      "Rule out PROM with speculum exam and nitrazine/ferning if membranes intact unclear",
    ],
    associations: [
      "Bilateral renal agenesis or severe renal dysplasia",
      "Posterior urethral valves and obstructive uropathy",
      "ARPKD — severe perinatal form",
      "Premature rupture of membranes",
      "Placental insufficiency and IUGR",
      "Post-term pregnancy",
    ],
    complications: [
      "Potter sequence — facies, limb deformities, pulmonary hypoplasia",
      "Umbilical cord compression during labor",
      "Fetal distress and preterm delivery",
      "Pulmonary hypoplasia — incompatible with life if severe bilateral renal failure",
    ],
    distinguishFrom: [
      "Polyhydramnios — excess amniotic fluid; often GI obstruction or diabetes",
      "Normal low-normal fluid variant — context and serial trends matter",
      "Potter syndrome — clinical sequence resulting from oligohydramnios, not synonymous with low fluid alone",
    ],
    treatment: [
      "Treat underlying cause when possible (obstructive uropathy shunting in select cases)",
      "Close fetal monitoring; timing of delivery based on gestational age and fetal status",
      "Amnioinfusion during labor in selected cases of oligohydramnios with variable decelerations",
      "Genetic counseling and anomaly scan when structural renal cause suspected",
    ],
    boardsPearls: [
      "Fetal urine maintains amniotic fluid after mid-pregnancy — no urine → oligohydramnios",
      "Bilateral renal agenesis → oligohydramnios → Potter sequence → pulmonary hypoplasia",
      "PUV in male fetus can cause oligohydramnios if bilateral obstruction",
      "PROM is a common maternal/placental cause of oligohydramnios",
      "vs polyhydramnios — impaired swallowing (esophageal atresia, anencephaly) causes excess fluid",
    ],
    pediatrics:
      "Neonatal outcome depends on cause — pulmonary hypoplasia from prolonged severe oligohydramnios is often fatal; milder oligohydramnios from PROM may deliver a viable infant with close monitoring.",
  },
  {
    id: "polyhydramnios",
    name: "Polyhydramnios",
    etymology: "Greek poly = many + hydor = water + amnion = membrane around fetus",
    aliases: [
      "polyhydramnios",
      "polyhydramnion",
      "excess amniotic fluid",
      "increased amniotic fluid",
      "hydramnios",
    ],
    definition:
      "Excessive amniotic fluid volume during pregnancy — often reflects impaired fetal swallowing, increased fetal urine output, or placental/twin factors.",
    pathophysiology:
      "Amniotic fluid balance depends on fetal swallowing, urination, lung fluid secretion, and membrane exchange; impaired swallowing (GI atresia, neurologic anomaly) or ↑ fetal urine (maternal diabetes, twin-twin transfusion recipient) → polyhydramnios → uterine overdistention and preterm labor risk.",
    classicPresentation: [
      "Uterus large for dates; fundal height above expected",
      "Maternal dyspnea and abdominal discomfort",
      "Prenatal ultrasound — elevated amniotic fluid index",
      "Unstable fetal lie from excess space",
    ],
    keyFindings: [
      "Elevated AFI on ultrasound (often >24 cm or >95th percentile; lab-specific)",
      "Fetal anomaly on detailed anatomy scan (GI, neural tube, facial)",
      "Hydramnios with single umbilical artery or other markers → expanded workup",
    ],
    keyLabs: [
      "Prenatal ultrasound — AFI, fetal anatomy survey",
      "Glucose screening — gestational diabetes association",
      "Fetal echocardiography if structural anomaly suspected",
      "Karyotype/amniocentesis when multiple anomalies or isolated severe polyhydramnios",
    ],
    associations: [
      "Esophageal or duodenal atresia — cannot swallow amniotic fluid",
      "Anencephaly and open neural tube defects",
      "Gestational diabetes mellitus",
      "Twin-twin transfusion syndrome (recipient twin)",
      "Fetal anemia (hydrops may coexist)",
      "Maternal hyperthyroidism",
    ],
    complications: [
      "Preterm labor and premature rupture of membranes",
      "Umbilical cord prolapse at membrane rupture",
      "Postpartum hemorrhage from uterine atony (overdistended uterus)",
      "Fetal malpresentation",
    ],
    distinguishFrom: [
      "Oligohydramnios — low fluid; renal agenesis/obstruction classic cause",
      "Macrosomia alone — large fetus without necessarily elevated AFI",
      "Multiple gestation with normal fluid in each sac — not true polyhydramnios in singleton sense",
    ],
    treatment: [
      "Treat underlying cause (glycemic control in GDM)",
      "Amnioreduction for symptomatic severe polyhydramnios",
      "Monitor for preterm labor; corticosteroids if preterm delivery anticipated",
      "Delivery planning based on fetal condition and etiology",
    ],
    boardsPearls: [
      "Polyhydramnios + inability to swallow → esophageal/duodenal atresia (double bubble)",
      "Anencephaly — no swallowing center → polyhydramnios",
      "Maternal diabetes → fetal hyperglycemia → polyuria → polyhydramnios",
      "vs oligohydramnios — opposite; think renal failure vs GI obstruction/anencephaly",
      "Twin-twin transfusion — recipient has polyhydramnios, donor oligohydramnios",
    ],
    pediatrics:
      "Neonate born after polyhydramnios needs evaluation for the underlying anomaly (TE fistula, duodenal atresia, neural tube defect) — prenatal ultrasound often predicts postnatal course.",
  },
  {
    id: "potter-syndrome",
    name: "Potter Syndrome",
    etymology: "eponym: Edith Potter + syndrome = grouped findings from shared cause",
    aliases: [
      "potter syndrome",
      "potter sequence",
      "potter facies",
      "oligohydramnios sequence",
      "oligohydramnios syndrome",
      "renal agenesis sequence",
    ],
    definition:
      "Sequence of fetal deformities caused by prolonged oligohydramnios from decreased fetal urine output — classically bilateral renal agenesis but also seen with severe bilateral renal dysplasia, ARPKD, or urinary tract obstruction.",
    pathophysiology:
      "Absent or severely reduced fetal urine production → oligohydramnios → loss of amniotic fluid cushion → fetal compression deformities (Potter facies, limb positioning defects) and restricted lung expansion → pulmonary hypoplasia → neonatal respiratory failure.",
    classicPresentation: [
      "Prenatal oligohydramnios on ultrasound",
      "Potter facies — flattened nose, micrognathia, low-set ears, epicanthal folds",
      "Clubfoot and joint contractures from intrauterine compression",
      "Pulmonary hypoplasia — respiratory distress and death in perinatal period (bilateral severe cases)",
      "Associated with bilateral renal agenesis or severe cystic/dysplastic kidneys",
    ],
    keyLabs: [
      "Prenatal ultrasound — oligohydramnios, absent kidneys (agenesis) or enlarged echogenic kidneys (ARPKD)",
      "Postnatal imaging confirms renal anomaly type",
      "Pulmonary hypoplasia on autopsy or chest imaging in neonates",
    ],
    associations: [
      "Bilateral renal agenesis — classic cause",
      "ARPKD — severe perinatal form",
      "Posterior urethral valves — obstructive uropathy if bilateral effect on amniotic fluid",
      "Bilateral multicystic dysplastic kidney",
    ],
    complications: [
      "Neonatal death from pulmonary hypoplasia (bilateral severe disease)",
      "Progressive CKD if any renal function remains",
      "Skeletal and craniofacial deformities",
    ],
    distinguishFrom: [
      "Potter facies alone — facial features without full sequence context",
      "Isolated clubfoot — not necessarily oligohydramnios-related",
      "ARPKD — specific genetic disease that can cause Potter sequence but is not synonymous with it",
      "Polyhydramnios — opposite fluid abnormality; often GI obstruction or maternal diabetes",
    ],
    treatment: [
      "Prenatal diagnosis and counseling; no cure for bilateral agenesis with pulmonary hypoplasia",
      "Neonatal respiratory support if any viable lung tissue",
      "Surgical correction of obstructive uropathy (e.g., posterior urethral valves) if unilateral obstruction with contralateral compensatory function",
      "Dialysis/transplant only if sufficient renal tissue and pulmonary function exist",
    ],
    boardsPearls: [
      "Potter sequence = oligohydramnios → facies + limb deformities + pulmonary hypoplasia",
      "Fetal urine maintains amniotic fluid volume in second half of pregnancy — no urine = oligohydramnios",
      "Bilateral renal agenesis incompatible with long-term survival (pulmonary hypoplasia)",
      "Potter facies: flattened nose, micrognathia, low-set ears",
      "Unilateral renal agenesis may be asymptomatic — does not cause Potter sequence",
    ],
    pediatrics:
      "Potter syndrome is a neonatal/perinatal diagnosis — pulmonary hypoplasia determines survival; unilateral renal anomalies do not produce the full sequence.",
  },
  {
    id: "urinary-tract-infection",
    name: "Urinary Tract Infection",
    etymology: "Greek ouron = urine + Latin tractus = drawn path + infectio = contamination",
    aliases: ["urinary tract infection", "uti", "bladder infection"],
    definition:
      "Bacterial infection of the urinary tract — most often uncomplicated cystitis (lower UTI); may ascend to pyelonephritis or progress to urosepsis.",
    pathophysiology:
      "Ascension of uropathogens (E. coli most common) from perineum → bladder (cystitis) or kidneys (pyelonephritis); virulence factors include fimbriae (P pili).",
    classicPresentation: [
      "Cystitis: dysuria, frequency, urgency, suprapubic pain",
      "Pyelonephritis: fever, flank pain, CVA tenderness",
      "Women, sexually active, catheter use risk factors",
    ],
    keyLabs: [
      "Positive urine culture (>10⁵ CFU/mL)",
      "Pyuria, bacteriuria on urinalysis",
      "WBC casts suggest pyelonephritis",
    ],
    associations: [
      "Female sex",
      "Sexual activity",
      "Catheterization",
      "Diabetes",
      "Pregnancy",
    ],
    complications: [
      "Pyelonephritis",
      "Urosepsis",
      "Emphysematous pyelonephritis (diabetics)",
    ],
    distinguishFrom: [
      "Pyelonephritis — fever, flank pain, CVA tenderness, WBC casts; upper tract infection",
      "Vaginitis — external dysuria, discharge, normal urine culture",
      "Acute urethritis (GC/Chlamydia) — discharge, urethral inflammation",
    ],
    treatment: [
      "Uncomplicated cystitis: TMP-SMX or nitrofurantoin (3–5 days)",
      "Complicated cystitis or progression to pyelonephritis — see pyelonephritis management",
    ],
    boardsPearls: [
      "E. coli = #1 cause (uropathogenic strains with P fimbriae)",
      "Nitrites on dipstick = gram-negative organisms with nitrate reductase",
      "Staghorn calculi + Proteus → struvite stones",
    ],
    pediatrics:
      "Febrile UTI in young children requires imaging for reflux/anatomy; boys with first UTI need workup.",
  },
  {
    id: "rotator-cuff-syndrome",
    name: "Rotator Cuff Syndrome",
    etymology: "Latin rotare = turn + cuff = encircling band + syndrome = grouped findings",
    aliases: [
      "rotator cuff syndrome",
      "rotator cuff tendinopathy",
      "rotator cuff tendinitis",
      "rotator cuff tendinosis",
      "subacromial impingement syndrome",
      "shoulder impingement syndrome",
      "impingement syndrome",
    ],
    definition:
      "Spectrum of shoulder disorders involving rotator cuff tendinopathy, subacromial bursitis, and impingement under the coracoacromial arch, ranging from chronic overuse pain to partial- or full-thickness tendon tears.",
    pathophysiology:
      "Repetitive overhead activity or age-related tendon degeneration → supraspinatus (most often) and other cuff tendon microtrauma → subacromial inflammation and bursitis → painful arc; progression to partial or full-thickness tear with chronic impingement and cuff weakness.",
    classicPresentation: [
      "Deep anterolateral shoulder pain worsened by overhead activity",
      "Night pain lying on affected side",
      "Painful arc between ~60–120° of abduction",
      "Weakness with abduction or external rotation if tear present",
      "Older adult or repetitive overhead athlete/worker",
    ],
    keyFindings: [
      "Positive Neer and Hawkins impingement tests",
      "Painful arc sign (60–120° abduction)",
      "Empty can weakness (supraspinatus)",
      "Drop-arm sign or external rotation lag if full-thickness tear",
      "MRI or ultrasound — tendinopathy, partial tear, or full-thickness defect",
    ],
    associations: [
      "Supraspinatus tendon — most commonly affected",
      "Subacromial bursitis",
      "Acromioclavicular osteoarthritis with inferior spur (extrinsic impingement)",
      "Shoulder instability and scapular dyskinesis",
      "Diabetes — increased risk of adhesive capsulitis and cuff pathology",
    ],
    complications: [
      "Progressive full-thickness rotator cuff tear",
      "Chronic weakness and functional limitation",
      "Secondary adhesive capsulitis (frozen shoulder)",
      "Muscle atrophy with chronic massive tear (fatty infiltration)",
    ],
    distinguishFrom: [
      "Adhesive capsulitis — global loss of passive ROM, not primarily impingement pattern",
      "Glenohumeral osteoarthritis — older patient, decreased ROM, radiographic joint space loss",
      "Cervical radiculopathy — neck pain, dermatomal symptoms, Spurling positive",
      "Biceps tendinopathy — anterior shoulder pain, Speed/Yergason tests",
      "Acromioclavicular joint disease — localized AC tenderness, cross-body adduction pain",
    ],
    treatment: [
      "Activity modification and physical therapy (rotator cuff strengthening, scapular stabilization)",
      "NSAIDs for pain",
      "Subacromial corticosteroid injection for refractory bursitis/impingement",
      "Surgical decompression and/or cuff repair for persistent symptoms or full-thickness tear in active patients",
    ],
    boardsPearls: [
      "Supraspinatus most commonly involved — painful arc + impingement signs",
      "Neer test (forced forward flexion) and Hawkins test (internal rotation at 90° flexion) — impingement",
      "Empty can → supraspinatus; drop-arm → full-thickness tear",
      "SITS muscles: know actions for localization of cuff injury",
      "vs frozen shoulder — loss of passive ROM points to capsulitis, not isolated cuff syndrome",
    ],
    pediatrics:
      "True rotator cuff tears uncommon; adolescent overhead athletes with shoulder pain — consider Little League shoulder (proximal humeral physeal injury) before cuff syndrome.",
  },
  {
    id: "ankylosing-spondylitis",
    name: "Ankylosing Spondylitis",
    etymology: "Greek ankylos = bent/stiff + spondylos = vertebra + -itis = inflammation",
    aliases: [
      "ankylosing spondylitis",
      "bekhterev disease",
      "bechterew disease",
      "marie-strumpell disease",
    ],
    definition:
      "Chronic inflammatory seronegative spondyloarthropathy primarily affecting the axial skeleton (sacroiliac joints and spine), causing sacroiliitis, enthesitis, and progressive spinal fusion.",
    pathophysiology:
      'HLA-B27–associated immune dysregulation → inflammation at entheses and sacroiliac joints → erosions and reactive bone formation (syndesmophytes) → spinal ankylosis ("bamboo spine") and reduced mobility.',
    classicPresentation: [
      "Young man with insidious inflammatory low back pain and morning stiffness >30 minutes",
      "Pain improves with exercise, worsens with rest",
      "Progressive loss of lumbar flexion and chest wall expansion",
      "Alternating buttock pain from sacroiliitis",
      "Peripheral enthesitis (Achilles tendon, plantar fascia) or oligoarthritis",
    ],
    keyFindings: [
      "Reduced lumbar flexion — positive Schober test",
      "Decreased chest expansion (<2.5 cm)",
      "Sacroiliitis on MRI or plain films (erosions, sclerosis, fusion)",
      "Syndesmophytes bridging vertebral bodies — bamboo spine (late)",
    ],
    keyLabs: [
      "↑ ESR/CRP during active disease",
      "HLA-B27 positive (not diagnostic alone — common in general population)",
      "RF and anti-CCP negative (seronegative spondyloarthropathy)",
    ],
    associations: [
      "HLA-B27",
      "Anterior uveitis (painful red eye)",
      "Inflammatory bowel disease (ulcerative colitis > Crohn)",
      "Aortitis and aortic regurgitation",
      "Apical pulmonary fibrosis (rare)",
      "Spondyloarthropathy family: psoriatic arthritis, reactive arthritis, IBD-associated arthritis",
    ],
    complications: [
      "Spinal fusion and kyphosis — fixed deformity",
      "Cervical fracture risk after minor trauma (fused brittle spine)",
      "Aortic regurgitation",
      "Restrictive lung physiology from thoracic cage rigidity",
      "Chronic uveitis → vision loss if untreated",
    ],
    distinguishFrom: [
      "Mechanical low back pain — older onset, no morning stiffness, no sacroiliitis",
      "Rheumatoid arthritis — symmetric small-joint polyarthritis; RF/anti-CCP positive",
      "Diffuse idiopathic skeletal hyperostosis (DISH) — older patients, flowing anterior osteophytes, less inflammation",
      "Spondylosis/degenerative disc disease — age-related, not inflammatory sacroiliitis",
    ],
    treatment: [
      "NSAIDs first-line for symptom control",
      "Physical therapy — maintain posture and mobility",
      "TNF inhibitors or IL-17 inhibitors (secukinumab) for refractory axial disease",
      "Treat acute anterior uveitis with topical corticosteroids urgently",
    ],
    boardsPearls: [
      "Young male + inflammatory back pain + morning stiffness improving with exercise → AS",
      "HLA-B27 associated but not sufficient for diagnosis — need sacroiliitis on imaging",
      "Seronegative spondyloarthropathy — RF/anti-CCP negative",
      "Bamboo spine = syndesmophytes from chronic AS",
      "Anterior uveitis and IBD are classic extra-articular manifestations",
    ],
    pediatrics:
      "Juvenile ankylosing spondylitis may present with peripheral arthritis or enthesitis before axial symptoms; HLA-B27 and sacroiliitis on MRI aid diagnosis in adolescents.",
  },
  {
    id: "rheumatoid-arthritis",
    name: "Rheumatoid Arthritis",
    etymology: "Greek rheuma = flow + -oid = resembling + arthron = joint + -itis = inflammation",
    aliases: ["rheumatoid arthritis", "ra"],
    definition:
      "Chronic autoimmune inflammatory arthritis with symmetric polyarticular involvement and systemic features, often leading to joint destruction.",
    pathophysiology:
      "Autoimmune synovitis → pannus formation → cartilage and bone erosion; RF and anti-CCP antibodies reflect immune dysregulation.",
    classicPresentation: [
      "Symmetric polyarthritis of small joints (MCP, PIP, wrists)",
      "Morning stiffness >1 hour",
      "Fatigue, low-grade fever",
    ],
    keyFindings: [
      "Swelling and tenderness of MCP/PIP joints",
      "Ulnar deviation, swan-neck/boutonnière deformities (late)",
      "Subcutaneous rheumatoid nodules",
    ],
    keyLabs: ["↑ RF", "↑ anti-CCP (more specific)", "↑ ESR/CRP"],
    associations: [
      "HLA-DR4",
      "Smoking",
      "Pulmonary fibrosis",
      "Felty syndrome",
    ],
    complications: [
      "Joint destruction and deformity",
      "Atlantoaxial subluxation",
      "Interstitial lung disease",
      "Cardiovascular disease",
    ],
    distinguishFrom: [
      "Osteoarthritis — DIP involvement, no systemic features, minimal morning stiffness",
      "SLE — malar rash, anti-dsDNA, less erosive arthritis",
    ],
    treatment: [
      "Methotrexate anchor DMARD; NSAIDs for symptom relief",
      "TNF inhibitors (infliximab, etanercept) for refractory disease",
    ],
    boardsPearls: [
      "Anti-CCP more specific than rheumatoid factor",
      "Spares DIPs (unlike osteoarthritis)",
      "Methotrexate is anchor DMARD; TNF inhibitors for refractory disease",
    ],
  },
  {
    id: "osteoarthritis",
    name: "Osteoarthritis",
    etymology: "Greek osteon = bone + arthron = joint + -itis = inflammation",
    aliases: [
      "osteoarthritis",
      "oa",
      "degenerative joint disease",
      "degenerative arthritis",
      "wear and tear arthritis",
    ],
    definition:
      "Degenerative joint disease from progressive articular cartilage breakdown, subchondral bone remodeling, and osteophyte formation.",
    pathophysiology:
      "Mechanical stress and aging chondrocytes → cartilage matrix loss and fissuring → joint space narrowing; subchondral bone sclerosis/cysts and marginal osteophytes develop as reparative changes.",
    classicPresentation: [
      "Older adult with chronic joint pain worse with use and better with rest",
      "Brief morning stiffness <30 minutes",
      "Knee, hip, spine, first CMC, DIP, and PIP involvement",
    ],
    keyFindings: [
      "Crepitus and decreased range of motion",
      "Heberden nodes (DIP) and Bouchard nodes (PIP)",
      "Bony enlargement without warm boggy synovitis",
    ],
    keyLabs: [
      "Usually normal ESR/CRP",
      "Synovial fluid noninflammatory: WBC <2,000/µL",
      "X-ray: asymmetric joint space narrowing, osteophytes, subchondral sclerosis/cysts",
    ],
    associations: [
      "Age, obesity, prior joint injury",
      "Repetitive mechanical stress",
      "Female sex for hand/knee OA",
      "Hemochromatosis can cause secondary OA-like arthropathy",
    ],
    complications: [
      "Chronic pain and disability",
      "Joint replacement need in severe hip/knee disease",
      "Falls from pain, weakness, or limited mobility",
    ],
    distinguishFrom: [
      "Rheumatoid arthritis — inflammatory symmetric MCP/PIP arthritis, prolonged morning stiffness, RF/anti-CCP",
      "Gout — acute episodic crystal arthritis, negatively birefringent needles",
      "Septic arthritis — acute hot swollen joint with high synovial WBC",
      "Psoriatic arthritis — dactylitis, nail pitting, DIP inflammation with psoriasis",
    ],
    treatment: [
      "Exercise/physical therapy, weight loss, activity modification",
      "Topical NSAIDs first-line for hand/knee pain; oral NSAIDs if needed and safe",
      "Intra-articular corticosteroid injections for flares",
      "Joint replacement for severe refractory hip/knee OA",
    ],
    boardsPearls: [
      "OA pain worsens with activity; RA stiffness improves with activity",
      "DIP involvement favors OA or psoriatic arthritis, not RA",
      "Osteophytes + subchondral sclerosis + asymmetric narrowing = OA",
      "Noninflammatory synovial fluid separates OA from inflammatory arthritis",
    ],
    pediatrics:
      "Primary osteoarthritis is rare in children; pediatric degenerative joint disease suggests prior trauma, congenital/developmental hip disease, slipped capital femoral epiphysis, or inflammatory arthritis sequelae.",
  },
  {
    id: "gout",
    name: "Gout",
    etymology: "Latin gutta = drop (historical belief in dropped humors)",
    aliases: [
      "gout",
      "gouty arthritis",
      "gouty arthropathy",
      "acute gout",
      "chronic gout",
      "podagra",
      "hyperuricemia gout",
      "monosodium urate crystal arthritis",
    ],
    definition:
      "Crystal-induced inflammatory arthritis caused by deposition of monosodium urate (MSU) crystals in joints and soft tissues from chronic hyperuricemia, presenting with recurrent acute flares and potential tophaceous disease.",
    pathophysiology:
      "Hyperuricemia → MSU crystal precipitation in joints → phagocytosis by neutrophils → NLRP3 inflammasome activation → IL-1β release → intense acute synovitis; chronic deposits form tophi in joints, ear helix, and soft tissues.",
    classicPresentation: [
      "Acute monoarticular arthritis — classic first MTP (podagra)",
      "Exquisitely painful, red, swollen joint; may wake patient from sleep",
      "Middle-aged man with hyperuricemia, alcohol, obesity, or diuretic use",
      "Chronic tophaceous gout — subcutaneous urate deposits, joint deformity",
    ],
    keyFindings: [
      "Synovial fluid: needle-shaped, negatively birefringent MSU crystals under polarized light",
      "Tophi — chalky subcutaneous deposits (helix of ear, olecranon, fingers)",
      "Joint erythema, warmth, swelling in acute flare",
    ],
    keyLabs: [
      "↑ serum uric acid (may be normal during acute flare)",
      "Synovial fluid analysis — crystals, exclude septic arthritis",
      "↑ ESR/CRP during acute attack",
    ],
    associations: [
      "Hyperuricemia — ↓ renal excretion (thiazides, cyclosporine) or ↑ production (Lesch-Nyhan, tumor lysis)",
      "Metabolic syndrome, obesity, alcohol (especially beer), high purine diet",
      "Hypertension treated with hydrochlorothiazide/chlorthalidone",
      "Uric acid nephrolithiasis",
      "Chronic kidney disease",
    ],
    complications: [
      "Recurrent flares and chronic arthropathy",
      "Tophaceous deposits and joint destruction",
      "Uric acid kidney stones",
      "Urate nephropathy in chronic disease",
    ],
    distinguishFrom: [
      "Pseudogout (CPPD) — positively birefringent rhomboid CPPD crystals; often knee in elderly",
      "Septic arthritis — septic joint until excluded; synovial culture essential if concern",
      "Rheumatoid arthritis — chronic symmetric polyarthritis, RF/anti-CCP, not crystal monoarthritis",
      "Cellulitis over joint — no crystals on aspiration",
    ],
    treatment: [
      "Acute flare: NSAIDs, colchicine, or corticosteroids (intra-articular or systemic)",
      "Do not start urate-lowering therapy (allopurinol, febuxostat) during acute flare alone without anti-inflammatory cover",
      "Long-term: allopurinol or febuxostat to ↓ uric acid; lifestyle modification",
      "Probenecid if underexcretion (less common choice on boards)",
    ],
    boardsPearls: [
      "Gout = negatively birefringent needle-shaped MSU crystals",
      "First MTP podagra is classic presentation",
      "NLRP3 inflammasome → IL-1β in acute gout flare",
      "Thiazide diuretics ↑ uric acid → precipitate gout",
      "Allopurinol inhibits xanthine oxidase — chronic urate lowering, not first-line in acute attack",
      "Colchicine inhibits microtubule polymerization in neutrophils",
      "Uric acid stones are radiolucent",
    ],
    pediatrics:
      "Pediatric gout is rare; consider Lesch-Nyhan syndrome (HGPRT deficiency, self-injury, hyperuricemia) or tumor lysis syndrome in malignancy.",
  },
  {
    id: "pseudogout",
    name: "Pseudogout",
    etymology: "Greek pseudes = false + gutta = drop + -itis pattern (mimics gout)",
    aliases: [
      "pseudogout",
      "cppd disease",
      "cppd",
      "calcium pyrophosphate deposition disease",
      "calcium pyrophosphate dihydrate disease",
      "calcium pyrophosphate crystal arthritis",
      "chondrocalcinosis",
      "pyrophosphate arthropathy",
    ],
    definition:
      "Acute or chronic crystal-induced arthritis from calcium pyrophosphate dihydrate (CPPD) deposition in cartilage and synovium — clinically mimics gout but with different crystals and associations.",
    pathophysiology:
      "CPPD crystal deposition in articular cartilage (chondrocalcinosis) → crystal shedding into synovial fluid → NLRP3 inflammasome activation and acute synovitis; chronic CPPD arthropathy resembles osteoarthritis with inflammatory flares.",
    classicPresentation: [
      "Acute mono- or oligoarthritis — knee most common, also wrist",
      "Elderly patient; may follow joint trauma or surgery",
      "Chronic CPPD — degenerative arthritis with superimposed flares",
      "Often mistaken for gout or septic arthritis",
    ],
    keyFindings: [
      "Synovial fluid: rhomboid-shaped, positively birefringent CPPD crystals (polarized light)",
      "Chondrocalcinosis — calcification of articular cartilage on X-ray (knee meniscus, symphysis pubis, TFCC)",
      "Joint swelling, warmth, effusion during flare",
    ],
    keyLabs: [
      "Synovial fluid crystal analysis — key diagnostic test",
      "Exclude septic arthritis with Gram stain/culture when indicated",
      "Check calcium, phosphate, magnesium, TSH, iron studies for secondary associations",
    ],
    associations: [
      "Hyperparathyroidism",
      "Hemochromatosis",
      "Hypomagnesemia",
      "Hypothyroidism",
      "Ochronosis (alkaptonuria)",
      "Advanced age and osteoarthritis",
    ],
    complications: [
      "Recurrent inflammatory flares",
      "Chronic joint damage mimicking OA",
      "Secondary degenerative arthropathy",
    ],
    distinguishFrom: [
      "Gout — negatively birefringent needle MSU crystals; podagra classic",
      "Septic arthritis — very high synovial WBC, positive culture",
      "Osteoarthritis — noninflammatory synovial fluid without CPPD crystals in typical OA",
      "Rheumatoid arthritis — symmetric inflammatory polyarthritis, RF/anti-CCP",
    ],
    treatment: [
      "Acute flare: NSAIDs, colchicine, or intra-articular corticosteroids",
      "Joint aspiration for diagnosis and pressure relief",
      "Treat underlying metabolic disorder (e.g., hemochromatosis, hyperparathyroidism)",
      "No definitive therapy to dissolve CPPD deposits on Step 1 level",
    ],
    boardsPearls: [
      "Pseudogout = positively birefringent rhomboid CPPD crystals",
      "Gout = negatively birefringent needle MSU crystals — memorize both",
      "Knee and wrist common; chondrocalcinosis on X-ray",
      "Think hemochromatosis, hyperparathyroidism, hypothyroidism workup",
      "Same NLRP3/IL-1 pathway as gout for acute inflammation",
      "Colchicine and NSAIDs treat acute pseudogout flares",
    ],
    pediatrics:
      "CPPD disease is primarily a disorder of older adults; pediatric crystal arthritis is uncommon — consider septic arthritis or autoimmune disease in acute monoarthritis.",
  },
  {
    id: "systemic-sclerosis",
    name: "Systemic Sclerosis",
    etymology: "Greek syn/systema = whole organized body + skleros = hardening",
    aliases: [
      "systemic sclerosis",
      "systemic scleroderma",
      "scleroderma",
      "scleroderma syndrome",
      "crest syndrome",
      "crest",
      "limited cutaneous systemic sclerosis",
      "diffuse cutaneous systemic sclerosis",
    ],
    definition:
      "Autoimmune connective tissue disease characterized by progressive fibrosis of skin and internal organs, vascular dysfunction (especially Raynaud phenomenon), and characteristic autoantibodies; formerly called scleroderma.",
    pathophysiology:
      "Immune-mediated endothelial injury and fibroblast activation → excessive collagen deposition and fibrosis in skin, lungs, GI tract, kidneys, and heart → organ dysfunction; vasculopathy drives Raynaud phenomenon, digital ulcers, and pulmonary arterial hypertension.",
    classicPresentation: [
      "Raynaud phenomenon often precedes skin changes by months to years",
      "Progressive skin thickening/tightening of fingers (sclerodactyly) spreading proximally",
      "GERD and dysphagia from esophageal dysmotility",
      "Shortness of breath from interstitial lung disease or pulmonary hypertension",
      "Middle-aged woman most common demographic",
    ],
    keyFindings: [
      "Skin thickening proximal to MCPs (diffuse or limited distribution)",
      "Sclerodactyly, digital pitting scars, telangiectasias, calcinosis cutis",
      "Nailfold capillary dilatation and dropout on capillaroscopy",
      "Tight perioral skin → microstomia",
    ],
    keyLabs: [
      "ANA positive (often speckled or nucleolar pattern)",
      "Anti-centromere antibody — limited cutaneous disease (CREST), PAH risk",
      "Anti–Scl-70 (topoisomerase I) — diffuse disease, ILD risk",
      "Anti-RNA polymerase III — diffuse disease, scleroderma renal crisis risk",
    ],
    associations: [
      "CREST syndrome (limited cutaneous) — Calcinosis, Raynaud, Esophageal dysmotility, Sclerodactyly, Telangiectasias",
      "Interstitial lung disease and pulmonary arterial hypertension",
      "Sjögren syndrome overlap",
      "Scleroderma renal crisis — abrupt malignant hypertension and AKI",
    ],
    complications: [
      "Scleroderma renal crisis — treat with ACE inhibitors urgently",
      "Pulmonary fibrosis and pulmonary hypertension",
      "Digital ischemia and gangrene",
      "Barrett esophagus and aspiration from reflux",
      "Cardiac involvement (fibrosis, arrhythmias)",
    ],
    distinguishFrom: [
      'Eosinophilic fasciitis — eosinophilia, groin sparing, "peau d\'orange" skin',
      "SLE — inflammatory arthritis, malar rash, anti-dsDNA; less skin fibrosis",
      "Mixed connective tissue disease — anti-U1 RNP, overlap features",
      "Morphea (localized scleroderma) — skin plaques without systemic visceral disease",
      "Acromegaly — skin thickening but gigantism, jaw enlargement, ↑ IGF-1",
    ],
    treatment: [
      "Raynaud — calcium channel blockers, avoid cold; prostacyclin analogs if severe",
      "ILD — mycophenolate, cyclophosphamide; antifibrotics in some cases",
      "PAH — endothelin receptor antagonists, PDE-5 inhibitors, prostacyclins",
      "GERD — PPIs; esophageal dysmotility management",
      "Scleroderma renal crisis — ACE inhibitors (even if creatinine rises); avoid high-dose steroids",
    ],
    boardsPearls: [
      "CREST = limited cutaneous systemic sclerosis; anti-centromere antibody",
      "Diffuse disease — anti–Scl-70, rapid proximal skin thickening, early ILD",
      "Scleroderma renal crisis — new HTN + AKI → ACE inhibitor immediately",
      "Skin thickening of fingers + Raynaud + GI reflux = systemic sclerosis until proven otherwise",
      "Do not give high-dose steroids alone — may precipitate renal crisis",
    ],
    pediatrics:
      "Juvenile systemic sclerosis is rare; localized morphea more common in children. Same autoantibody and organ screening principles with growth monitoring.",
  },
  {
    id: "sjogren-syndrome",
    name: "Sjögren Syndrome",
    etymology: "eponym: Henrik Sjogren + syndrome = grouped findings",
    aliases: [
      "sjogren syndrome",
      "sjögren syndrome",
      "sjogrens syndrome",
      "sjögren's syndrome",
      "sjogren's syndrome",
      "sicca syndrome",
    ],
    definition:
      "Autoimmune disorder targeting exocrine glands, causing dry eyes (keratoconjunctivitis sicca) and dry mouth (xerostomia); may occur alone (primary) or with another connective tissue disease (secondary).",
    pathophysiology:
      "Lymphocytic infiltration and destruction of lacrimal and salivary glands → decreased aqueous secretion; B-cell hyperactivity with autoantibodies (anti-Ro/SSA, anti-La/SSB) and increased lymphoma risk.",
    classicPresentation: [
      "Dry gritty eyes, foreign body sensation",
      "Dry mouth, difficulty swallowing dry foods, dental caries",
      "Parotid gland enlargement (bilateral, painless)",
      "Fatigue and arthralgias",
      "Middle-aged woman (classic demographic)",
    ],
    keyFindings: [
      "Keratoconjunctivitis sicca on exam",
      "Decreased salivary pooling; enlarged parotids",
      "Positive Schirmer test (↓ tear production)",
    ],
    keyLabs: [
      "Anti-Ro (SSA) and anti-La (SSB) antibodies — supportive, not required",
      "ANA often positive",
      "RF may be positive (nonspecific)",
      "Salivary gland biopsy — focal lymphocytic sialadenitis",
    ],
    associations: [
      "Secondary Sjögren — with RA, SLE, or systemic sclerosis",
      "Non-Hodgkin B-cell lymphoma (MALT) — persistent parotid enlargement, adenopathy",
      "Interstitial lung disease and renal tubular acidosis",
      "Neonatal lupus if anti-Ro positive mother (congenital heart block)",
    ],
    complications: [
      "B-cell lymphoma (especially MALT lymphoma)",
      "Severe dental decay and oral candidiasis",
      "Corneal ulceration",
      "Vasculitis and peripheral neuropathy",
    ],
    distinguishFrom: [
      "Dry mouth from medications (anticholinergics) — no autoantibodies, abrupt onset",
      "Sarcoidosis — uveitis, granulomas; not primary sicca syndrome",
      "IgG4-related disease — autoimmune pancreatitis, salivary enlargement",
      "Dehydration — reversible, no chronic gland destruction",
    ],
    treatment: [
      "Artificial tears, punctal plugs for ocular dryness",
      "Sugar-free gum, pilocarpine/cevimeline for xerostomia",
      "Treat extraglandular manifestations (hydroxychloroquine, immunosuppression)",
      "Monitor for lymphoma if parotid enlargement persists",
    ],
    boardsPearls: [
      "Dry eyes + dry mouth + anti-Ro/SSB → Sjögren syndrome",
      "Secondary Sjögren with RA is common — sicca plus inflammatory arthritis",
      "↑ lymphoma risk — investigate persistent parotid/lymph node enlargement",
      "Anti-Ro (SSA) in pregnancy → risk of neonatal congenital heart block",
    ],
    pediatrics:
      "Rare in children; consider juvenile Sjögren with recurrent parotitis or unexplained dental caries; same lymphoma vigilance if parotid masses persist.",
  },
  {
    id: "turner-syndrome",
    name: "Turner Syndrome",
    etymology: "eponym: Henry Turner + syndrome = grouped findings",
    aliases: [
      "turner syndrome",
      "turner's syndrome",
      "turners syndrome",
      "45,x",
      "45,xo",
      "45 xo",
      "monosomy x",
      "xo syndrome",
    ],
    definition:
      "Chromosomal disorder in females (45,X or mosaic) with short stature, ovarian dysgenesis, and characteristic physical features.",
    pathophysiology:
      "Complete or partial monosomy X → ovarian failure (streak gonads) → estrogen deficiency; lymphatic dysplasia → webbed neck, lymphedema.",
    classicPresentation: [
      "Short stature girl with webbed neck",
      "Primary amenorrhea, lack of secondary sexual characteristics",
      "Coarctation of aorta, bicuspid aortic valve",
    ],
    keyFindings: [
      "Webbed neck, low posterior hairline",
      "Widely spaced nipples (shield chest)",
      "Short fourth metacarpal",
      "Cubitus valgus (increased carrying angle)",
      "High-arched palate",
      "Lymphedema of hands and feet in infancy",
    ],
    keyLabs: ["Karyotype: 45,X or mosaic (45,X/46,XX)"],
    associations: [
      "Coarctation of aorta",
      "Bicuspid aortic valve",
      "Horseshoe kidney",
    ],
    complications: [
      "Infertility",
      "Aortic dissection",
      "Osteoporosis",
      "Hypothyroidism (autoimmune)",
    ],
    distinguishFrom: [
      "Noonan syndrome — 46,XY or XX, pulmonary stenosis, normal ovaries",
      "Constitutional growth delay — normal karyotype",
    ],
    treatment: [
      "Growth hormone for short stature; estrogen replacement for pubertal induction",
      "Monitor and repair cardiac anomalies (coarctation, bicuspid valve)",
    ],
    boardsPearls: [
      "45,X — most common cause of primary amenorrhea",
      "Streak gonads; cannot conceive without assisted reproduction",
      "Coarctation + bicuspid valve — screen with echo",
    ],
    pediatrics:
      "Diagnosed in infancy (lymphedema, webbed neck) or adolescence (short stature, absent puberty); growth hormone and estrogen replacement.",
  },
  {
    id: "systemic-lupus-erythematosus",
    name: "Systemic Lupus Erythematosus",
    etymology: "systemic = whole body + Latin lupus = wolf + Greek erythros = red",
    aliases: ["systemic lupus erythematosus", "sle", "lupus"],
    definition:
      "Multisystem autoimmune disease with autoantibodies against nuclear antigens, causing inflammation of skin, joints, kidneys, and other organs.",
    pathophysiology:
      "Loss of self-tolerance → immune complexes deposit in tissues → type III hypersensitivity → complement consumption and organ damage.",
    classicPresentation: [
      "Young woman with joint pain, rash, fatigue",
      "Photosensitive malar (butterfly) rash",
      "Oral ulcers, Raynaud phenomenon",
    ],
    keyFindings: [
      "Malar rash sparing nasolabial folds",
      "Oral ulcers",
      "Nonerosive arthritis",
    ],
    keyLabs: [
      "ANA positive (sensitive)",
      "Anti-dsDNA (specific, correlates with renal disease)",
      "Anti-Smith (specific)",
      "↓ C3/C4 (active disease)",
    ],
    associations: [
      "HLA-DR2/DR3",
      "Drug-induced lupus (hydralazine, procainamide, isoniazid)",
    ],
    complications: [
      "Lupus nephritis",
      "Libman-Sacks endocarditis",
      "Antiphospholipid syndrome",
    ],
    distinguishFrom: [
      "Rheumatoid arthritis — erosive, anti-CCP, spares malar rash",
      "Rosacea — centrofacial erythema, no systemic features",
    ],
    treatment: [
      "Hydroxychloroquine for skin/joint disease; corticosteroids for flares",
      "Immunosuppressants (mycophenolate, cyclophosphamide) for lupus nephritis",
    ],
    boardsPearls: [
      "Anti-dsDNA correlates with renal disease activity",
      "↓ complement (C3/C4) during flares",
      "Drug-induced lupus: anti-histone antibodies, resolves when drug stopped",
      "Libman-Sacks endocarditis: sterile verrucous vegetations on mitral/aortic valves — both sides of valve",
      "Libman-Sacks vs infective endocarditis: no bacteremia, negative cultures, associated with SLE activity",
    ],
    pediatrics:
      "Childhood SLE often more severe with higher renal involvement; monitor closely for nephritis.",
  },
  {
    id: "vasculitis",
    name: "Vasculitis",
    etymology: "Latin vasculum = small vessel + -itis = inflammation",
    aliases: [
      "vasculitis",
      "systemic vasculitis",
      "anca-associated vasculitis",
      "anca vasculitis",
      "small vessel vasculitis",
      "medium vessel vasculitis",
      "large vessel vasculitis",
      "polyarteritis nodosa",
      "giant cell arteritis",
      "temporal arteritis",
      "takayasu arteritis",
      "microscopic polyangiitis",
      "mpa",
    ],
    definition:
      "Inflammation of blood vessel walls causing luminal narrowing, ischemia, and organ damage; classified by predominant vessel size and associated serologies.",
    pathophysiology:
      "Immune complex deposition, ANCA-mediated neutrophil activation, or cell-mediated injury damages vessel walls → stenosis, aneurysm, or occlusion → tissue ischemia and hemorrhage in skin, kidneys, lungs, nerves, and other organs.",
    classicPresentation: [
      "Constitutional symptoms: fever, weight loss, fatigue",
      "Palpable purpura (small-vessel, especially cutaneous)",
      "Mononeuritis multiplex (sudden focal neuropathies)",
      "Hematuria/RBC casts, hemoptysis, or abdominal pain depending on vessels involved",
    ],
    keyFindings: [
      "Palpable purpura (leukocytoclastic vasculitis)",
      "Focal neurologic deficits from mononeuritis multiplex",
      "New murmur or bruit (large-/medium-vessel disease)",
      "Hypertension and bruits (renal artery involvement in PAN)",
    ],
    keyLabs: [
      "↑ ESR/CRP",
      "ANCA: c-ANCA (anti-PR3) → GPA; p-ANCA (anti-MPO) → MPA, EGPA",
      "Urinalysis with RBC casts (glomerulonephritis)",
      "Hepatitis B serology (associated with polyarteritis nodosa)",
    ],
    associations: [
      "Large vessel: giant cell (temporal) arteritis, Takayasu arteritis",
      "Medium vessel: polyarteritis nodosa (often hepatitis B), Kawasaki disease",
      "Small vessel ANCA-associated: GPA, microscopic polyangiitis, EGPA",
      "Small vessel immune complex: Henoch-Schönlein purpura (IgA vasculitis), cryoglobulinemic vasculitis",
    ],
    complications: [
      "Renal failure (RPGN)",
      "Diffuse alveolar hemorrhage",
      "Blindness (giant cell arteritis — ophthalmic artery)",
      "Bowel infarction or rupture (PAN)",
      "Coronary aneurysms (Kawasaki)",
    ],
    distinguishFrom: [
      "Thromboangiitis obliterans — segmental distal thrombosis in young smokers, not systemic vasculitis",
      "Infectious endocarditis — fever and emboli, positive blood cultures",
      "SLE — multisystem with ANA/anti-dsDNA; may have secondary vasculitis",
      "Atherosclerosis — older patients, fixed plaques, not inflammatory vessel wall disease",
    ],
    treatment: [
      "High-dose corticosteroids for most severe vasculitis",
      "Cyclophosphamide or rituximab for ANCA-associated and organ-threatening disease",
      "Plasmapheresis for severe pulmonary hemorrhage or anti-GBM overlap",
      "Urgent high-dose steroids if giant cell arteritis with visual symptoms",
    ],
    boardsPearls: [
      "Vessel size framework: large (GCA, Takayasu) → medium (PAN, Kawasaki) → small (ANCA, HSP)",
      "c-ANCA/PR3 → GPA; p-ANCA/MPO → MPA or EGPA",
      "PAN: medium vessels, hepatitis B association, renal/ GI involvement, no glomerulonephritis (unlike ANCA vasculitis)",
      "Giant cell arteritis: headache, jaw claudication, ↑ ESR — treat steroids immediately to prevent blindness",
      "Henoch-Schönlein purpura: palpable purpura on buttocks/legs, abdominal pain, IgA deposition, common in children",
    ],
    pediatrics:
      "Kawasaki disease (medium-vessel coronary vasculitis) and IgA vasculitis (HSP) are classic pediatric vasculitides; Kawasaki needs IVIG + aspirin; HSP often self-limited but monitor for nephritis.",
  },
  {
    id: "granulomatosis-with-polyangiitis",
    name: "Granulomatosis with Polyangiitis",
    etymology: "Latin granulum = small grain + Greek -oma = mass + poly = many + angeion = vessel + -itis = inflammation",
    aliases: [
      "granulomatosis with polyangiitis",
      "wegener granulomatosis",
      "wegener's granulomatosis",
      "wegners granulomatosis",
      "gpa",
    ],
    definition:
      "ANCA-associated small-vessel vasculitis with necrotizing granulomatous inflammation of upper airways, lungs, and kidneys.",
    pathophysiology:
      "Autoimmune neutrophil activation (PR3-ANCA/c-ANCA) → necrotizing granulomatous vasculitis of small vessels → sinonasal destruction, pulmonary nodules/cavities, and crescentic glomerulonephritis.",
    classicPresentation: [
      "Chronic sinusitis, epistaxis, nasal crusting or saddle-nose deformity",
      "Cough, hemoptysis, pulmonary nodules or cavities on CXR",
      "Hematuria, RBC casts, rapidly progressive glomerulonephritis",
    ],
    keyFindings: [
      "Saddle-nose deformity, chronic otitis/sinusitis",
      "Pulmonary nodules with cavitation",
      "RPGN on renal biopsy (pauci-immune crescentic GN)",
    ],
    keyLabs: [
      "c-ANCA (anti-PR3) — most specific (~90%)",
      "↑ ESR/CRP",
      "Urinalysis: hematuria, RBC casts, ↑ creatinine",
    ],
    associations: [
      "PR3-ANCA positivity",
      "Upper and lower respiratory tract involvement",
    ],
    complications: [
      "Renal failure",
      "Diffuse alveolar hemorrhage",
      "Chronic sinus/ear damage",
    ],
    distinguishFrom: [
      "Microscopic polyangiitis — pauci-immune GN and lung hemorrhage, usually without upper airway granulomas; MPO-ANCA",
      "Churg-Strauss (EGPA) — asthma, eosinophilia, neuropathy",
      "Goodpasture syndrome — anti-GBM antibodies, linear IgG on biopsy",
    ],
    treatment: [
      "Cyclophosphamide or rituximab + high-dose corticosteroids for induction",
      "Azathioprine or methotrexate for maintenance",
      "Plasmapheresis if severe pulmonary hemorrhage or rapidly progressive GN",
    ],
    boardsPearls: [
      "GPA triad: upper airway + lungs + kidneys",
      "c-ANCA (anti-PR3) — think GPA (Wegener)",
      "Pauci-immune crescentic GN on biopsy — few immune deposits",
      "Former name Wegener granulomatosis; now GPA",
    ],
    pediatrics:
      "Rare in children; juvenile GPA presents similarly with ENT, pulmonary, and renal involvement — treat aggressively to preserve renal function.",
  },
  {
    id: "eosinophilic-granulomatosis-with-polyangiitis",
    name: "Eosinophilic Granulomatosis with Polyangiitis",
    etymology: "Greek eos = dawn-red + philos = loving + granulum = small grain + poly = many + angeion = vessel + -itis = inflammation",
    aliases: [
      "eosinophilic granulomatosis with polyangiitis",
      "churg-strauss syndrome",
      "churg strauss syndrome",
      "churg-strauss",
      "egpa",
    ],
    definition:
      "ANCA-associated vasculitis characterized by asthma, eosinophilia, and necrotizing granulomatous inflammation of small vessels.",
    pathophysiology:
      "Eosinophilic inflammation and granulomatous vasculitis affect lungs, skin, nerves, and other organs; often p-ANCA (MPO) positive. May develop after years of asthma.",
    classicPresentation: [
      "Adult with long-standing asthma who develops worsening respiratory symptoms",
      "Marked peripheral eosinophilia",
      "Mononeuritis multiplex, sinusitis, skin nodules or purpura",
    ],
    keyFindings: [
      "Asthma + eosinophilia + vasculitic organ involvement",
      "Peripheral neuropathy (mononeuritis multiplex)",
      "Pulmonary infiltrates (not always cavitary, unlike GPA)",
    ],
    keyLabs: [
      "Marked eosinophilia (>10% or >1500/μL)",
      "p-ANCA (anti-MPO) in ~40–60%",
      "↑ IgE, ↑ ESR/CRP",
    ],
    associations: [
      "Pre-existing asthma",
      "Allergic rhinitis",
      "MPO-ANCA positivity",
    ],
    complications: [
      "Peripheral neuropathy",
      "Cardiac involvement (eosinophilic myocarditis)",
      "GI vasculitis",
    ],
    distinguishFrom: [
      "Asthma alone — no eosinophilic vasculitis or neuropathy",
      "GPA — c-ANCA/PR3, upper airway destruction, cavitary lung lesions",
      "Hypereosinophilic syndrome — eosinophilia without vasculitis",
    ],
    treatment: [
      "High-dose corticosteroids; add cyclophosphamide or rituximab for severe organ involvement",
      "Treat cardiac and neurologic involvement aggressively",
    ],
    boardsPearls: [
      "Churg-Strauss triad: asthma + eosinophilia + vasculitis",
      "Mononeuritis multiplex is a classic clue",
      "p-ANCA (MPO) more common than in GPA (c-ANCA/PR3)",
      "Former name Churg-Strauss; now EGPA",
    ],
    pediatrics:
      "Very rare; eosinophilic vasculitis in children with asthma requires exclusion of parasitic infection and primary hypereosinophilic disorders.",
  },
  {
    id: "iga-vasculitis",
    name: "IgA Vasculitis",
    etymology: "IgA = immunoglobulin A + Latin vasculum = small vessel + -itis = inflammation",
    aliases: [
      "iga vasculitis",
      "henoch-schonlein purpura",
      "henoch schonlein purpura",
      "henoch-schönlein purpura",
      "henoch schönlein purpura",
      "hsp",
      "henoch-schonlein",
      "schonlein-henoch purpura",
    ],
    definition:
      "Most common systemic vasculitis in children — small-vessel leukocytoclastic vasculitis with IgA-dominant immune complex deposition (formerly Henoch-Schönlein purpura); typically follows an upper respiratory infection.",
    pathophysiology:
      "Post-infectious (often URI) IgA1-containing immune complexes deposit in small vessel walls → complement activation and leukocytoclastic vasculitis → palpable purpura, arthralgia, GI inflammation, and mesangial IgA nephritis.",
    classicPresentation: [
      "Palpable, non-blanching purpura on buttocks and lower extremities (often first sign)",
      "Arthralgia or arthritis of knees/ankles without permanent deformity",
      "Colicky abdominal pain (may precede rash; intussusception risk)",
      "Hematuria or proteinuria from IgA nephritis",
    ],
    keyFindings: [
      "Symmetric palpable purpura on dependent areas (buttocks, legs)",
      "Periarticular swelling — knees and ankles most common",
      "Abdominal tenderness; possible guaiac-positive stool",
      "Scrotal swelling in boys (distinguish from testicular torsion)",
    ],
    keyLabs: [
      "Normal platelet count and coagulation studies (vs ITP, DIC)",
      "Urinalysis: hematuria, proteinuria; monitor creatinine and BP",
      "Skin or renal biopsy: leukocytoclastic vasculitis with IgA deposition on IF",
      "↑ serum IgA in some patients (nonspecific)",
    ],
    associations: [
      "Recent upper respiratory infection (viral or streptococcal)",
      "Peak age 4–7 years",
      "Seasonal clustering (fall/winter)",
    ],
    complications: [
      "IgA nephritis — most important long-term complication; may progress to CKD",
      "Intussusception (ileoileal most common)",
      "GI hemorrhage or bowel ischemia",
      "Chronic hypertension from renal involvement",
    ],
    distinguishFrom: [
      "ITP — isolated thrombocytopenia with petechiae, not palpable purpura",
      "Meningococcemia — toxic, rapid progression, thrombocytopenia, DIC",
      "ANCA-associated vasculitis — pauci-immune GN, ANCA positive, older patients",
      "Child abuse — purpura distribution and history inconsistent with trauma pattern",
      "Kawasaki disease — fever ≥5 days, mucocutaneous findings, coronary aneurysm risk",
    ],
    treatment: [
      "Most cases self-limited (4–6 weeks) — supportive care and monitoring",
      "NSAIDs for arthralgia; rest and hydration",
      "Corticosteroids for severe abdominal pain, GI bleeding, or significant nephritis",
      "Serial urinalysis, BP, and creatinine to monitor renal involvement",
    ],
    boardsPearls: [
      "Tetrad: palpable purpura + arthralgia + abdominal pain + renal involvement",
      "Palpable purpura WITHOUT thrombocytopenia — classic distinguishing feature",
      "IgA deposition on immunofluorescence of skin or renal biopsy",
      "Intussusception in child with HSP abdominal pain — consider ultrasound",
      "Former name Henoch-Schönlein purpura; now IgA vasculitis",
    ],
    pediatrics:
      "Peak incidence 4–7 years; >90% of cases occur before age 10. Usually self-limited but monitor urinalysis and BP for 6+ months after onset because nephritis may appear late. Intussusception and scrotal swelling (vs torsion) are key pediatric complications.",
  },
  {
    id: "schizophrenia",
    name: "Schizophrenia",
    etymology: "Greek schizein = split + phren = mind",
    aliases: ["schizophrenia"],
    definition:
      "Chronic psychotic disorder with positive symptoms (hallucinations, delusions), negative symptoms, and cognitive dysfunction lasting ≥6 months.",
    pathophysiology:
      "Dopamine hypothesis: ↑ mesolimbic dopamine (positive symptoms); ↓ mesocortical dopamine (negative/cognitive symptoms); structural brain changes and genetic predisposition.",
    classicPresentation: [
      "Young adult with auditory hallucinations, persecutory delusions",
      "Social withdrawal, flat affect, avolition",
      "Decline in functioning over months",
    ],
    keyFindings: [
      "Auditory hallucinations (commenting or command type)",
      "Bizarre delusions",
      "Disorganized speech or behavior",
    ],
    associations: [
      "Family history",
      "Cannabis use (adolescence)",
      "Urban upbringing",
    ],
    complications: ["Suicide", "Substance abuse", "Treatment nonadherence"],
    distinguishFrom: [
      "Schizophreniform — symptoms 1–6 months",
      "Brief psychotic disorder — <1 month",
      "Schizoaffective — mood episode concurrent with psychosis",
    ],
    treatment: [
      "Antipsychotics (risperidone, olanzapine) for positive symptoms",
      "Supportive psychotherapy and social rehabilitation",
    ],
    boardsPearls: [
      "Diagnosis requires ≥6 months of symptoms including ≥1 month active phase",
      "Positive symptoms respond better to antipsychotics than negative",
      "Typical antipsychotics: D2 blockade → extrapyramidal symptoms",
    ],
  },
  {
    id: "delusional-disorder",
    name: "Delusional Disorder",
    etymology: "Latin de- = away/from + ludere = play/trick + disorder = disturbed order",
    aliases: [
      "delusional disorder",
      "delusional disorder persecutory type",
      "delusional disorder grandiose type",
      "delusional disorder jealous type",
      "delusional disorder somatic type",
      "paranoia",
      "paranoid delusion disorder",
    ],
    definition:
      "Psychotic disorder with one or more fixed delusions for ≥1 month, without prominent hallucinations, disorganized speech, negative symptoms, or markedly impaired functioning outside the delusional theme.",
    pathophysiology:
      "Likely dysregulated dopaminergic salience attribution plus cognitive bias toward threat or misinterpretation; unlike schizophrenia, broad thought disorganization and negative symptoms are absent.",
    classicPresentation: [
      "Middle-aged or older adult with fixed nonbizarre belief (persecutory, jealous, erotomanic, grandiose, or somatic)",
      "Functioning relatively preserved except behavior related to delusion",
      "No sustained manic/depressive episode explaining psychosis",
    ],
    keyFindings: [
      "Delusion duration ≥1 month",
      "Hallucinations absent or not prominent; if present, related to delusional theme",
      "No disorganized speech/behavior or negative symptoms typical of schizophrenia",
    ],
    associations: [
      "Family history of psychotic disorders",
      "Social isolation, sensory impairment, chronic stress",
      "Substance use or medical illness must be excluded",
    ],
    complications: [
      "Poor insight and treatment refusal",
      "Interpersonal/legal conflict",
      "Risk of harm to self/others depending on delusional content",
    ],
    distinguishFrom: [
      "Schizophrenia — ≥6 months with hallucinations/disorganization/negative symptoms and functional decline",
      "Brief psychotic disorder — <1 month",
      "Psychotic mood disorder — delusions occur only during mood episodes",
      "Substance/medical-induced psychosis — intoxication, withdrawal, dementia, endocrine/CNS disease",
    ],
    treatment: [
      "Antipsychotics when accepted; evidence less robust than schizophrenia",
      "Supportive psychotherapy / CBT for psychosis; build therapeutic alliance",
      "Hospitalize if danger to self/others or inability to care for self",
    ],
    boardsPearls: [
      "Delusional disorder: fixed delusion ≥1 month with otherwise preserved functioning",
      "Nonbizarre delusions are classic but bizarre delusions can still occur in DSM-5",
      "Absence of prominent hallucinations/disorganized speech helps separate from schizophrenia",
      "Always rule out substances, medications, neurologic disease, and mood disorder with psychosis",
    ],
  },
  {
    id: "major-depressive-disorder",
    name: "Major Depressive Disorder",
    etymology: "Latin major = greater + deprimere = press down + disorder = disturbed order",
    aliases: [
      "major depressive disorder",
      "depression",
      "mdd",
      "clinical depression",
    ],
    definition:
      "Mood disorder with persistent depressed mood or anhedonia plus associated neurovegetative symptoms causing significant functional impairment.",
    pathophysiology:
      "Multifactorial: monoamine deficiency hypothesis, HPA axis dysregulation, neuroplasticity changes; serotonin, norepinephrine, and dopamine pathways implicated.",
    classicPresentation: [
      "Depressed mood or anhedonia ≥2 weeks",
      "Sleep disturbance, appetite change, fatigue",
      "Guilt, poor concentration, psychomotor changes",
    ],
    keyFindings: [
      "SIGECAPS: Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicidality",
      "Psychomotor retardation or agitation",
    ],
    associations: [
      "Family history",
      "Chronic medical illness",
      "Substance use",
    ],
    complications: [
      "Suicide",
      "Treatment-resistant depression",
      "Medical comorbidity",
    ],
    distinguishFrom: [
      "Persistent depressive disorder (dysthymia) — chronic low mood ≥2 years",
      "Bipolar depression — history of manic/hypomanic episodes",
      "Adjustment disorder — clear stressor, symptoms <6 months",
    ],
    treatment: [
      "SSRIs (sertraline, fluoxetine) first-line pharmacotherapy",
      "Cognitive behavioral therapy; ECT for severe or psychotic depression",
    ],
    boardsPearls: [
      "≥5 SIGECAPS symptoms for ≥2 weeks, one must be depressed mood or anhedonia",
      "SSRIs first-line; do not start until bipolar disorder ruled out",
      "Electroconvulsive therapy for severe/refractory or psychotic depression",
    ],
  },
  {
    id: "hiv-infection",
    name: "HIV Infection",
    etymology: "HIV = human immunodeficiency virus + infectio = contamination",
    aliases: ["hiv infection", "hiv", "aids", "human immunodeficiency virus"],
    definition:
      "Retroviral infection of CD4+ T lymphocytes causing progressive immunodeficiency and opportunistic infections when advanced (AIDS).",
    pathophysiology:
      "HIV binds CD4 and CCR5/CXCR4 → viral integration into host genome → CD4+ T-cell depletion → impaired cell-mediated immunity → opportunistic infections and malignancies.",
    classicPresentation: [
      "Acute retroviral syndrome (mononucleosis-like illness)",
      "Opportunistic infections at low CD4 (PJP, toxoplasmosis, MAC)",
      "Weight loss, fever, lymphadenopathy",
    ],
    keyLabs: [
      "HIV antibody/p24 antigen (4th generation ELISA)",
      "HIV RNA viral load",
      "CD4 count",
    ],
    keyFindings: [
      "Oral thrush, oral hairy leukoplakia",
      "Kaposi sarcoma (HHV-8)",
      "Dementia, peripheral neuropathy",
    ],
    associations: ["IV drug use", "Unprotected sex", "Vertical transmission"],
    complications: [
      "AIDS-defining illnesses (CD4 <200)",
      "HIV-associated nephropathy",
      "Cardiovascular disease",
    ],
    distinguishFrom: [
      "Acute mono — heterophile negative in HIV; test both",
      "Immunodeficiency from other causes — check HIV first",
    ],
    treatment: [
      "Antiretroviral therapy (ART) — combination regimen suppresses viral load",
      "TMP-SMX prophylaxis when CD4 <200 (PJP prevention)",
    ],
    boardsPearls: [
      "CD4 <200 = AIDS; PJP prophylaxis with TMP-SMX",
      "CCR5 antagonists (maraviroc) only if tropism test shows R5 virus",
      "Integrase inhibitors now preferred in initial ART regimens",
    ],
    pediatrics:
      "Vertical transmission prevented with maternal ART and peripartum/neonatal prophylaxis; breast milk transmission risk.",
  },
  {
    id: "tuberculosis",
    name: "Tuberculosis",
    etymology: "Latin tuberculum = small swelling + -osis = condition",
    aliases: ["tuberculosis", "tb", "pulmonary tuberculosis"],
    definition:
      "Chronic granulomatous infection caused by Mycobacterium tuberculosis, most commonly affecting lungs but capable of disseminating.",
    pathophysiology:
      "Inhaled bacilli → alveolar macrophage infection → granuloma formation (caseating) → latent TB (dormant) or active disease with tissue destruction and cavitation.",
    classicPresentation: [
      "Weight loss, night sweats, fever, hemoptysis",
      "Immigrant or immunocompromised host (HIV)",
      "Upper lobe cavitary lesion on CXR",
    ],
    keyFindings: [
      "Upper lobe cavitary infiltrate on CXR",
      "Caseating granulomas on biopsy",
      "Ghon complex (primary TB: Ghon focus + hilar nodes)",
    ],
    keyLabs: [
      "PPD or interferon-gamma release assay (latent TB)",
      "Acid-fast bacilli on sputum smear",
      "Mycobacterial culture (gold standard)",
    ],
    associations: [
      "HIV coinfection",
      "Silicosis",
      "Diabetes",
      "Homelessness, incarceration",
    ],
    complications: [
      "Miliary TB",
      "TB meningitis",
      "Pott disease (vertebral)",
      "Drug resistance (MDR-TB)",
    ],
    distinguishFrom: [
      "Sarcoidosis — noncaseating granulomas, bilateral hilar lymphadenopathy",
      "Lung cancer — mass without infectious symptoms",
    ],
    treatment: [
      "RIPE therapy: rifampin, isoniazid, pyrazinamide, ethambutol for active TB",
      "Isoniazid monotherapy for latent TB (9 months)",
    ],
    boardsPearls: [
      "Caseating granulomas = TB (vs noncaseating in sarcoidosis)",
      "RIPE therapy: rifampin, isoniazid, pyrazinamide, ethambutol",
      "Isoniazid + rifampin cause orange body fluids; INH causes B6 deficiency neuropathy",
    ],
    pediatrics:
      "Primary TB in children may present with hilar lymphadenopathy without cavitation; miliary TB in infants.",
  },
  {
    id: "lymphoma",
    name: "Lymphoma",
    etymology: "Latin lympha = water/clear fluid + Greek -oma = tumor/mass",
    aliases: ["lymphoma", "lymphomas", "malignant lymphoma"],
    definition:
      "Malignant neoplasm of lymphocytes arising in lymph nodes or extranodal sites; broadly divided into Hodgkin lymphoma and non-Hodgkin lymphoma (NHL), with diverse subtypes, prognoses, and treatments.",
    pathophysiology:
      "Clonal proliferation of B or T lymphocytes → lymphadenopathy, marrow/blood involvement, and extranodal masses; genetic translocations drive many subtypes (e.g., t(14;18) follicular, t(8;14) Burkitt, t(11;14) mantle cell).",
    classicPresentation: [
      "Painless lymphadenopathy (cervical, mediastinal, abdominal)",
      "B symptoms — fever, night sweats, weight loss >10%",
      "Fatigue, pruritus (especially Hodgkin)",
      "Extranodal symptoms — GI bleeding (MALT), jaw mass (endemic Burkitt), CNS lesions (primary CNS lymphoma in AIDS)",
    ],
    keyFindings: [
      "Lymphadenopathy on exam; mediastinal mass on CXR/CT (especially Hodgkin, primary mediastinal B-cell)",
      "Excisional lymph node biopsy for diagnosis — not fine-needle alone",
      "Flow cytometry and immunohistochemistry for lineage and subtype",
      "PET-CT for staging",
    ],
    keyLabs: [
      "CBC — cytopenias if marrow involved; lymphocytosis in leukemic presentations (CLL)",
      "LDH — prognostic marker, reflects tumor burden",
      "EBV association in some lymphomas (Burkitt, post-transplant, HIV-associated)",
    ],
    associations: [
      "EBV — Burkitt lymphoma, Hodgkin lymphoma, post-transplant lymphoproliferative disorder",
      "HIV/AIDS — aggressive B-cell lymphomas, primary CNS lymphoma",
      "Autoimmune disease and immunosuppression — ↑ lymphoma risk",
      "H. pylori — gastric MALT lymphoma",
      "Prior chemotherapy/radiation",
    ],
    complications: [
      "Airway or SVC compression from mediastinal mass",
      "Tumor lysis syndrome with treatment of high-burden disease",
      "Bone marrow failure",
      "Transformation to more aggressive lymphoma (e.g., Richter transformation in CLL)",
    ],
    distinguishFrom: [
      "Reactive lymphadenopathy — tender nodes, infection context, resolves; polyclonal",
      "Hodgkin lymphoma — Reed-Sternberg cells, contiguous nodal spread, curable with chemo/radiation",
      "Non-Hodgkin lymphoma — no Reed-Sternberg cells; more extranodal disease; heterogeneous",
      "Leukemia — primarily blood/marrow disease; overlap with lymphoblastic lymphoma/leukemia",
      "Sarcoidosis — noncaseating granulomas, not monoclonal lymphoid malignancy",
    ],
    treatment: [
      "Subtype-specific chemotherapy (e.g., ABVD for Hodgkin, R-CHOP for DLBCL)",
      "Rituximab (anti-CD20) for CD20⁺ B-cell lymphomas",
      "Radiation for localized Hodgkin or early-stage indolent NHL",
      "CAR-T and stem cell transplant for relapsed/refractory disease",
    ],
    boardsPearls: [
      "Hodgkin vs NHL — Reed-Sternberg cells define Hodgkin; NHL is everything else",
      "B symptoms (fever, night sweats, weight loss) — malignancy, TB, HIV",
      "Excisional biopsy required for lymphoma diagnosis",
      "Burkitt — t(8;14) c-myc, starry sky histology, very aggressive, treat urgently (tumor lysis risk)",
      "MALT lymphoma — may regress with H. pylori eradication",
    ],
    pediatrics:
      "Burkitt and lymphoblastic lymphoma more common in children; endemic Burkitt (jaw) in equatorial Africa linked to malaria and EBV.",
  },
  {
    id: "hodgkin-lymphoma",
    name: "Hodgkin Lymphoma",
    etymology: "eponym: Thomas Hodgkin + Latin lympha = clear fluid + Greek -oma = tumor/mass",
    aliases: [
      "hodgkin lymphoma",
      "hodgkin's lymphoma",
      "hodgkins lymphoma",
      "hodgkin disease",
      "hodgkin's disease",
      "hodhkin lymphoma",
      "hodgkin",
    ],
    definition:
      "Lymphoid malignancy defined by the presence of Reed-Sternberg cells in a background of inflammatory cells; characterized by contiguous nodal spread and generally favorable prognosis with chemotherapy and radiation.",
    pathophysiology:
      "Reed-Sternberg cells (abnormal B cells) secrete cytokines → eosinophil-rich inflammatory infiltrate and fibrosis (especially nodular sclerosis); spreads in predictable contiguous fashion between lymph node groups.",
    classicPresentation: [
      "Young adult with painless cervical or mediastinal lymphadenopathy",
      "B symptoms — fever, night sweats, weight loss",
      "Alcohol-induced pain at involved lymph nodes (classic but uncommon)",
      "Pruritus without rash",
      "Mediastinal mass → cough, SVC syndrome in severe cases",
    ],
    keyFindings: [
      'Reed-Sternberg cells — large binucleate cells with "owl-eye" nucleoli (CD15⁺, CD30⁺, CD45⁻)',
      "Contiguous lymph node group involvement on staging",
      "Mediastinal adenopathy especially in nodular sclerosis subtype",
      "Eosinophilia on CBC (common)",
    ],
    keyLabs: [
      "Excisional lymph node biopsy — required for diagnosis",
      "LDH — prognostic",
      "EBV testing in some subtypes (mixed cellularity, lymphocyte-depleted)",
    ],
    associations: [
      "EBV — especially mixed cellularity and lymphocyte-depleted subtypes",
      "Nodular sclerosis — most common subtype in young adults, mediastinal disease, female predominance",
      "Prior EBV infection",
      "Immunocompromise (less common than NHL)",
    ],
    complications: [
      "SVC syndrome or airway compromise from mediastinal bulk",
      "Secondary malignancies after radiation/chemotherapy (breast, lung, thyroid)",
      "Cardiotoxicity and pulmonary fibrosis from treatment (bleomycin, radiation)",
    ],
    distinguishFrom: [
      "Non-Hodgkin lymphoma — no Reed-Sternberg cells; more extranodal disease; non-contiguous spread",
      "Sarcoidosis — noncaseating granulomas, BHL, no monoclonal Reed-Sternberg cells",
      "Infectious mononucleosis — atypical lymphocytes, heterophile positive, not Reed-Sternberg",
      "Mediastinal germ cell tumor — young male, ↑ AFP/β-hCG",
    ],
    treatment: [
      "ABVD (doxorubicin, bleomycin, vinblastine, dacarbazine) — standard for most stages",
      "Involved-site radiation for early-stage favorable disease",
      "Escalated regimens (BEACOPP) for high-risk disease in specialized centers",
      "Checkpoint inhibitors (nivolumab, pembrolizumab) for relapsed disease",
    ],
    boardsPearls: [
      "Reed-Sternberg cells = Hodgkin lymphoma; CD15⁺, CD30⁺",
      "Young adult + mediastinal mass + cervical nodes → Hodgkin until proven otherwise",
      "Contiguous nodal spread — classic pattern distinguishing from NHL",
      "ABVD is curative in most patients — high cure rate compared with many NHL subtypes",
      "Bleomycin toxicity — pulmonary fibrosis; avoid high O₂ when possible",
      "Alcohol-induced lymph node pain — pathognomonic when present",
    ],
    pediatrics:
      "Hodgkin lymphoma peaks in young adulthood but occurs in adolescents; same Reed-Sternberg diagnosis and ABVD-based therapy with fertility and growth considerations.",
  },
  {
    id: "non-hodgkin-lymphoma",
    name: "Non-Hodgkin Lymphoma",
    etymology: "non- = not + eponym: Hodgkin + Latin lympha = clear fluid + Greek -oma = tumor/mass",
    aliases: [
      "non-hodgkin lymphoma",
      "non-hodgkin's lymphoma",
      "non hodgkin lymphoma",
      "non hodgkins lymphoma",
      "non-hodgkins lymphoma",
      "nhl",
    ],
    definition:
      "Heterogeneous group of lymphoid malignancies without Reed-Sternberg cells, encompassing B-cell, T-cell, and NK-cell neoplasms with widely varying behavior from indolent to highly aggressive.",
    pathophysiology:
      "Clonal B- or T-cell proliferation driven by chromosomal translocations, oncogene activation, and microenvironment signals; B-cell NHL most common in adults. No contiguous nodal spread pattern like classic Hodgkin.",
    classicPresentation: [
      "Painless lymphadenopathy or extranodal mass",
      "B symptoms in aggressive subtypes",
      "GI symptoms with MALT or intestinal NHL",
      "CNS symptoms with primary CNS lymphoma (especially immunocompromised)",
    ],
    keyFindings: [
      "Monoclonal lymphoid population on biopsy and flow cytometry",
      "No Reed-Sternberg cells — distinguishes from Hodgkin lymphoma",
      "Subtype-specific markers — CD20 (B-cell), cyclin D1 (mantle cell), BCL2 (follicular)",
    ],
    keyLabs: [
      "LDH ↑ with aggressive disease",
      "Bone marrow biopsy for staging",
      "HIV testing if risk factors; hepatitis B screen before rituximab",
    ],
    associations: [
      "Diffuse large B-cell lymphoma (DLBCL) — most common NHL overall",
      "Follicular lymphoma — indolent, t(14;18) BCL2-IgH",
      "Burkitt lymphoma — t(8;14) c-myc, starry sky, very fast doubling time",
      "Mantle cell lymphoma — t(11;14) cyclin D1",
      "MALT lymphoma — gastric, H. pylori associated",
      "CLL/SLL — indolent mature B-cell neoplasm overlapping with leukemia",
    ],
    complications: [
      "Tumor lysis syndrome (especially Burkitt and high-grade NHL)",
      "Extranodal compression (spinal cord, gut obstruction)",
      "Transformation of indolent to aggressive lymphoma",
    ],
    distinguishFrom: [
      "Hodgkin lymphoma — Reed-Sternberg cells, mediastinal mass in young adult, curable with ABVD",
      "CLL — peripheral blood lymphocytosis predominant; SLL same biology in nodes",
      "Reactive lymphadenopathy — polyclonal, infection-associated",
      "Acute lymphoblastic leukemia/lymphoma — lymphoblasts, children/young adults",
    ],
    treatment: [
      "R-CHOP (rituximab, cyclophosphamide, doxorubicin, vincristine, prednisone) for DLBCL",
      "Rituximab-based regimens for most CD20⁺ B-cell NHL",
      "Watch and wait for asymptomatic indolent NHL (follicular, early CLL)",
      "H. pylori eradication for gastric MALT lymphoma",
      "Intensive regimens + CNS prophylaxis for Burkitt and lymphoblastic lymphoma",
    ],
    boardsPearls: [
      "NHL = no Reed-Sternberg cells; more common and more heterogeneous than Hodgkin",
      "DLBCL — most common NHL; R-CHOP; rapidly enlarging node/mass",
      "Follicular — t(14;18), indolent, BCL2 overexpression",
      "Burkitt — t(8;14), starry sky, jaw (endemic) or abdomen (sporadic), tumor lysis risk",
      "Rituximab (anti-CD20) — B-cell NHL; screen for hepatitis B reactivation",
    ],
    pediatrics:
      "Burkitt and lymphoblastic lymphoma are common pediatric NHL subtypes; endemic Burkitt presents with jaw mass in African children.",
  },
  {
    id: "cll",
    name: "Chronic Lymphocytic Leukemia (CLL)",
    etymology: "Greek chronos = time + lympha = clear fluid + kytos = cell + leukos = white + -emia = blood condition",
    aliases: [
      "chronic lymphocytic leukemia",
      "chronic lymphocytic leukaemia",
      "cll",
      "cll/sll",
      "small lymphocytic lymphoma",
    ],
    definition:
      "Indolent neoplasm of mature B lymphocytes (CD5⁺, CD19⁺, CD20⁺, CD23⁺) accumulating in blood, marrow, lymph nodes, and spleen; the most common leukemia in adults in Western countries.",
    pathophysiology:
      "Clonal proliferation of incompetent mature-appearing B cells → lymphocytosis and marrow infiltration → cytopenias from marrow crowding or autoimmune destruction; hypogammaglobulinemia → recurrent infections.",
    classicPresentation: [
      "Asymptomatic lymphocytosis on routine labs (often elderly)",
      "Lymphadenopathy, hepatosplenomegaly",
      "Fatigue, anemia, thrombocytopenia",
      "Recurrent bacterial infections from hypogammaglobulinemia",
    ],
    keyFindings: [
      "Absolute lymphocytosis with mature-appearing small lymphocytes",
      "Smudge cells on peripheral smear (fragile lymphocytes)",
      "Flow cytometry: clonal B cells with CD5 and CD23 co-expression",
    ],
    keyLabs: [
      "↑ Lymphocyte count (often >5000 /µL sustained)",
      "↓ Immunoglobulins (IgG, IgA, IgM)",
      "Direct Coombs positive in autoimmune hemolytic anemia subset",
    ],
    associations: [
      "Autoimmune hemolytic anemia and ITP",
      "Richter transformation to diffuse large B-cell lymphoma (aggressive)",
    ],
    complications: [
      "Autoimmune cytopenias",
      "Recurrent sinopulmonary infections",
      "Richter transformation",
      "Second malignancies",
    ],
    distinguishFrom: [
      "Reactive lymphocytosis — polyclonal, resolves; no smudge cells or clonal markers",
      "Acute lymphoblastic leukemia — blasts, not mature lymphocytes; children/young adults",
      "Hairy cell leukemia — pancytopenia, splenomegaly, hairy projections; TRAP positive",
    ],
    treatment: [
      'Asymptomatic early stage — observation ("watch and wait")',
      "Symptomatic or progressive: BTK inhibitors (ibrutinib), venetoclax ± obinutuzumab",
      "Rituximab-based regimens; fludarabine in fit patients (older regimens)",
      "Treat autoimmune cytopenias (steroids, IVIG) as indicated",
    ],
    boardsPearls: [
      "CLL = elderly + lymphocytosis + smudge cells + CD5⁺ B cells",
      "Most common adult leukemia in the West — often incidental diagnosis",
      "Hypogammaglobulinemia → infections despite high lymphocyte count",
      "Richter transformation — sudden clinical worsening with aggressive lymphoma",
    ],
    pediatrics:
      "CLL essentially an adult disease; pediatric small lymphocytic proliferations are rare and require specialist evaluation.",
  },
  {
    id: "polycythemia-vera",
    name: "Polycythemia Vera",
    etymology: "Greek poly = many + kytos = cell + haima = blood + Latin verus = true",
    aliases: [
      "polycythemia vera",
      "polycythaemia vera",
      "polycythemia rubra vera",
      "prv",
      "primary polycythemia",
      "jak2 polycythemia",
    ],
    definition:
      "Myeloproliferative neoplasm with clonal erythrocytosis (and often leukocytosis and thrombocytosis) driven by JAK2 V617F mutation in most cases — true increase in red cell mass with inappropriately low erythropoietin.",
    pathophysiology:
      "Activating JAK2 mutation → constitutive EPO receptor/JAK2–STAT signaling → autonomous erythropoiesis independent of hypoxia; marrow hypercellularity with panmyelosis; splenic sequestration and extramedullary hematopoiesis as disease progresses.",
    classicPresentation: [
      "Middle-aged or older patient with headache, dizziness, pruritus (especially after hot shower — aquagenic pruritus)",
      "Plethoric (ruddy) complexion, splenomegaly",
      "Thrombotic events — DVT, PE, Budd-Chiari syndrome, stroke",
      "Incidental ↑ hematocrit on routine labs",
    ],
    keyFindings: [
      "Elevated hematocrit and hemoglobin with low serum EPO",
      "Splenomegaly",
      "Aquagenic pruritus after bathing",
      "Hyperviscosity symptoms — blurred vision, tinnitus",
    ],
    keyLabs: [
      "↑ Hct/Hgb, often ↑ WBC and platelets",
      "↓ Erythropoietin level (inappropriate for degree of polycythemia)",
      "JAK2 V617F mutation (majority of cases)",
      "↑ Leukocyte alkaline phosphatase (LAP) — vs CML",
    ],
    associations: [
      "Myeloproliferative neoplasm spectrum — essential thrombocythemia, primary myelofibrosis",
      "JAK2 V617F mutation",
      "Hyperuricemia and gout from high cell turnover",
    ],
    complications: [
      "Arterial and venous thrombosis (hyperviscosity)",
      "Transformation to myelofibrosis or acute leukemia (rare)",
      "Bleeding paradoxically possible with extreme thrombocytosis",
      "Peptic ulcer disease (histamine from basophils)",
    ],
    distinguishFrom: [
      "Secondary polycythemia — ↑ EPO from chronic hypoxia (COPD), high altitude, or EPO-secreting RCC",
      "Relative polycythemia — dehydration/hemoconcentration without ↑ RBC mass",
      "CML — BCR-ABL positive, left shift, ↓ LAP",
      "Essential thrombocythemia — thrombocytosis predominant; may overlap MPN spectrum",
    ],
    treatment: [
      "Phlebotomy to target hematocrit",
      "Low-dose aspirin for thrombosis prophylaxis",
      "Hydroxyurea or ruxolitinib (JAK inhibitor) for high-risk or symptomatic disease",
    ],
    boardsPearls: [
      "PV = ↑ RBC mass + ↓ EPO + JAK2 V617F in most cases",
      "Aquagenic pruritus after hot shower — classic PV clue",
      "vs secondary polycythemia — COPD/hypoxia has ↑ EPO; PV has low EPO",
      "vs dehydration — relative ↑ Hct only; no splenomegaly or aquagenic pruritus",
      "Budd-Chiari syndrome + polycythemia → think PV",
      "Ruxolitinib inhibits JAK1/JAK2 — same pathway mutated in PV",
    ],
    pediatrics:
      "PV is essentially an adult MPN; pediatric erythrocytosis workup focuses on congenital causes, EPO-secreting tumors, and cyanotic heart disease.",
  },
  {
    id: "cml",
    name: "Chronic Myelogenous Leukemia (CML)",
    etymology: "Greek chronos = time + myelos = marrow + genos = producing + leukos = white + -emia = blood condition",
    aliases: [
      "chronic myelogenous leukemia",
      "chronic myeloid leukemia",
      "chronic myelogenous leukaemia",
      "cml",
    ],
    definition:
      "Myeloproliferative neoplasm driven by the BCR-ABL fusion tyrosine kinase (Philadelphia chromosome), characterized by marked leukocytosis with left shift and hypercellular marrow.",
    pathophysiology:
      "t(9;22) translocation → constitutively active BCR-ABL tyrosine kinase → uncontrolled myeloid proliferation; natural history progresses from chronic phase to accelerated phase and blast crisis if untreated.",
    classicPresentation: [
      "Fatigue, weight loss, early satiety from splenomegaly",
      "Marked leukocytosis with granulocytic left shift (myelocytes, metamyelocytes, bands, segs)",
      "Basophilia — classic clue",
      "Hyperuricemia and gout from high cell turnover",
    ],
    keyFindings: [
      "Massive splenomegaly",
      "Leukocytosis with full myeloid maturation (left shift)",
      "Basophilia and eosinophilia often present",
      "Low leukocyte alkaline phosphatase (LAP) score (vs leukemoid reaction)",
    ],
    keyLabs: [
      "BCR-ABL fusion by PCR or FISH; Philadelphia chromosome on cytogenetics",
      "Peripheral smear: left shift, basophilia, pseudo–Pelger-Huët anomaly",
      "↓ LAP score",
    ],
    associations: [
      "Philadelphia chromosome t(9;22) — pathognomonic",
      "Blast crisis may resemble AML or ALL",
    ],
    complications: [
      "Blast crisis — treatment-resistant, poor prognosis",
      "Hyperuricemia and tumor lysis with therapy",
      "Transformation to acute leukemia (myeloid or lymphoid blast crisis)",
    ],
    distinguishFrom: [
      "Leukemoid reaction — ↑ LAP, no BCR-ABL, reactive (infection, inflammation)",
      "Polycythemia vera / essential thrombocythemia — different JAK2-driven MPNs",
      "AML — ≥20% blasts at presentation; not chronic phase maturation",
    ],
    treatment: [
      "Tyrosine kinase inhibitors — imatinib first line; dasatinib, nilotinib, bosutinib alternatives",
      "Allogeneic stem cell transplant for TKI failure or blast crisis",
      "Hydroxyurea for short-term cytoreduction",
    ],
    boardsPearls: [
      "CML = Philadelphia chromosome (t[9;22]) + BCR-ABL → imatinib",
      "Basophilia + left shift + splenomegaly → CML until proven otherwise",
      "↓ LAP score distinguishes from leukemoid reaction (↑ LAP)",
      "Blast crisis = progression; treat like acute leukemia",
    ],
    pediatrics:
      "CML rare in children; juvenile myelomonocytic leukemia (JMML) is a distinct pediatric myeloproliferative disorder without BCR-ABL.",
  },
  {
    id: "aml",
    name: "Acute Myeloid Leukemia (AML)",
    etymology: "Latin acutus = sharp/sudden + Greek myelos = marrow + -oid = resembling + leukos = white + -emia = blood condition",
    aliases: [
      "acute myeloid leukemia",
      "acute myelogenous leukemia",
      "acute myelogenous leukaemia",
      "aml",
    ],
    definition:
      "Acute clonal proliferation of myeloid blasts (≥20% blasts in marrow or blood) causing marrow failure and rapid clinical deterioration if untreated.",
    pathophysiology:
      "Accumulation of poorly differentiated myeloid blasts replaces normal hematopoiesis → anemia, neutropenia, thrombocytopenia; Auer rods (crystalline inclusions) pathognomonic of myeloid lineage.",
    classicPresentation: [
      "Fatigue, pallor (anemia)",
      "Fever, infections (neutropenia)",
      "Bleeding, gum hypertrophy, petechiae (thrombocytopenia)",
      "Bone pain; DIC in APL subtype",
      "Adults >65 years most common; can follow myelodysplastic syndrome or prior chemotherapy",
    ],
    keyFindings: [
      "Circulating blasts on peripheral smear",
      "Auer rods in cytoplasm of myeloblasts",
      "Gingival infiltration (especially monocytic subtypes M4/M5)",
    ],
    keyLabs: [
      "≥20% myeloblasts in bone marrow or blood",
      "Cytopenias (anemia, neutropenia, thrombocytopenia)",
      "Flow cytometry and cytogenetics for classification and prognosis",
    ],
    associations: [
      "Prior alkylating agent or topoisomerase II inhibitor therapy",
      "Myelodysplastic syndrome progression",
      "Down syndrome — ↑ AML risk (especially megakaryoblastic)",
    ],
    complications: [
      "DIC (especially APL)",
      "Tumor lysis syndrome with treatment",
      "Life-threatening infection and bleeding",
    ],
    distinguishFrom: [
      "ALL — lymphoblasts, TdT+, no Auer rods; more common in children",
      "CML in chronic phase — mature left shift, not blast predominance",
      "APL — AML M3 subtype; t(15;17); DIC; requires ATRA urgently",
    ],
    treatment: [
      'Induction chemotherapy ("7+3": cytarabine + anthracycline)',
      "Consolidation and allogeneic transplant based on risk stratification",
      "APL treated differently — ATRA + arsenic trioxide (see APL entry)",
      "Supportive: transfusions, infection prophylaxis, tumor lysis prevention",
    ],
    boardsPearls: [
      "AML = blasts + Auer rods + pancytopenia in adult",
      "Auer rods = myeloid lineage (not in lymphoblasts)",
      "APL (M3) is an AML subtype — do NOT give standard chemo alone; give ATRA immediately",
      "Leukemoid reaction has <20% blasts and ↑ LAP — not AML",
    ],
    pediatrics:
      "Pediatric AML distinct from adult; Down syndrome–associated megakaryoblastic leukemia has better prognosis; APL also occurs in children — ATRA essential.",
  },
  {
    id: "apl",
    name: "Acute Promyelocytic Leukemia (APL)",
    etymology: "Latin acutus = sharp/sudden + pro- = before + myelos = marrow + kytos = cell + leukos = white + -emia = blood condition",
    aliases: [
      "acute promyelocytic leukemia",
      "apl",
      "aml m3",
      "aml-m3",
      "m3 aml",
      "m3 leukemia",
    ],
    definition:
      "Distinct AML subtype (FAB M3 / WHO APL with PML-RARA) characterized by abnormal promyelocytes, Auer rods, and life-threatening DIC at presentation.",
    pathophysiology:
      "t(15;17) translocation fuses PML and RARA genes → abnormal retinoic acid receptor blocks promyelocyte differentiation → accumulation of malignant promyelocytes that release procoagulant granules → DIC.",
    classicPresentation: [
      "Bleeding diathesis out of proportion to platelet count — DIC",
      "Fatigue, pallor, fever (marrow failure)",
      "Younger adult median age than other AML subtypes",
      "Hypergranular promyelocytes with bundles of Auer rods (faggot cells)",
    ],
    keyFindings: [
      "Abnormal promyelocytes with heavy azurophilic granules",
      "Auer rods — often multiple per cell (faggot cells)",
      "Active DIC: ↓ fibrinogen, ↑ D-dimer, ↑ PT/aPTT, thrombocytopenia",
    ],
    keyLabs: [
      "t(15;17) PML-RARA fusion — diagnostic; FISH or PCR",
      "DIC panel abnormalities at presentation",
      "Bone marrow hypercellular with promyelocyte predominance",
    ],
    associations: [
      "t(15;17) PML-RARA — targetable with all-trans retinoic acid (ATRA)",
      "Differentiation syndrome with ATRA therapy (fever, pulmonary infiltrates, edema)",
    ],
    complications: [
      "DIC — intracranial hemorrhage is leading cause of early death",
      "Differentiation syndrome (ATRA syndrome) during treatment",
      "Tumor lysis syndrome",
    ],
    distinguishFrom: [
      "Other AML subtypes — no PML-RARA; ATRA not indicated",
      "DIC from sepsis or obstetric causes — no promyelocytes or t(15;17)",
      "CML blast crisis — BCR-ABL positive, not PML-RARA",
    ],
    treatment: [
      "All-trans retinoic acid (ATRA) + arsenic trioxide — highly curative; start ATRA immediately on suspicion",
      "Avoid early death from DIC — platelets, cryoprecipitate (fibrinogen), treat coagulopathy",
      "Low-dose chemotherapy historically; modern ATRA + arsenic trioxide often curative without anthracyclines",
      "Dexamethasone prophylaxis/treatment for differentiation syndrome",
    ],
    boardsPearls: [
      "APL = young adult + DIC + promyelocytes + t(15;17) → start ATRA immediately",
      "Most curable adult AML subtype with ATRA + arsenic trioxide",
      "Do not delay ATRA for confirmatory genetics if APL suspected clinically",
      "Differentiation syndrome — capillary leak, pulmonary edema during ATRA; treat with steroids",
    ],
    pediatrics:
      "APL occurs in children and adolescents — same urgency for ATRA and DIC management; excellent cure rates with modern therapy.",
  },
  {
    id: "dic",
    name: "Disseminated Intravascular Coagulation (DIC)",
    etymology:
      "Latin disseminare = scatter + intra = within + vas = vessel + coagulare = curdle/clot",
    aliases: [
      "dic",
      "disseminated intravascular coagulation",
      "consumptive coagulopathy",
      "defibrination syndrome",
    ],
    definition:
      "Systemic pathologic activation of coagulation with widespread microvascular fibrin deposition, consumption of platelets and clotting factors, and secondary fibrinolysis — producing simultaneous bleeding and thrombosis.",
    pathophysiology:
      "Underlying trigger (sepsis, trauma, obstetric catastrophe, malignancy, snake envenomation) releases tissue factor → widespread thrombin generation and fibrin clot formation in microvasculature → platelet and factor consumption → fibrinolysis with ↑ D-dimer/FDPs → bleeding from mucocutaneous sites and organ ischemia from microthrombi; schistocytes from RBC shearing in damaged microvessels.",
    classicPresentation: [
      "Critically ill patient with predisposing condition (sepsis, abruptio placentae, trauma, cancer)",
      "Oozing from IV sites, gums, or surgical wounds",
      "Petechiae, purpura, ecchymoses",
      "Organ dysfunction — AKI, ARDS, digital ischemia, purpura fulminans (children)",
    ],
    keyFindings: [
      "Thrombocytopenia",
      "Prolonged PT and aPTT",
      "↓ Fibrinogen (consumptive hypofibrinogenemia)",
      "↑ D-dimer and fibrin degradation products",
      "Schistocytes on peripheral smear (microangiopathic hemolysis)",
    ],
    keyLabs: [
      "Platelets ↓; PT/aPTT ↑; fibrinogen ↓; D-dimer ↑↑",
      "↓ Factors V and VIII from consumption",
      "ISTH DIC score uses platelets, fibrinogen, PT, D-dimer — boards usually give the pattern directly",
    ],
    associations: [
      "Sepsis (especially gram-negative) — most common adult trigger",
      "Obstetric: abruptio placentae, amniotic fluid embolism, retained dead fetus",
      "Trauma, burns, major surgery, snake bite",
      "Malignancy — mucinous adenocarcinoma, APL (M3 AML)",
      "Acute pancreatitis, liver failure, transfusion reactions",
      "Meningococcemia — Waterhouse-Friderichsen syndrome with adrenal hemorrhage",
    ],
    complications: [
      "Life-threatening hemorrhage",
      "Multiorgan failure from microvascular thrombosis",
      "Purpura fulminans and limb ischemia",
      "Intracranial hemorrhage (especially with severe thrombocytopenia)",
    ],
    distinguishFrom: [
      "Liver disease — prolonged PT/aPTT but fibrinogen often normal/↑ (acute phase reactant); factor VIII preserved",
      "TTP/HUS — schistocytes + thrombocytopenia but fibrinogen normal, PT/aPTT normal, no DIC consumption pattern",
      "ITP — isolated thrombocytopenia; coagulation studies normal",
      "Vitamin K deficiency — prolonged PT > aPTT early; no consumptive thrombocytopenia or ↑ D-dimer pattern",
    ],
    treatment: [
      "Treat underlying cause first (antibiotics for sepsis, delivery for obstetric DIC, ATRA for APL)",
      "Supportive care — fluids, pressors, organ support",
      "Blood products for active bleeding: platelets, FFP, cryoprecipitate (fibrinogen)",
      "Heparin only in rare thrombosis-predominant chronic DIC — not routine",
    ],
    boardsPearls: [
      "DIC tetrad: thrombocytopenia + ↑ PT/aPTT + ↓ fibrinogen + ↑ D-dimer in a sick patient with a trigger",
      "Bleeding + thrombosis paradox — oozing from IV sites with organ ischemia",
      "↓ Fibrinogen distinguishes DIC from liver disease (fibrinogen often normal/↑ in liver failure)",
      "Schistocytes = microangiopathic hemolysis from fibrin shearing RBCs in small vessels",
      "APL, sepsis, abruptio placentae, trauma — classic board vignette triggers",
      "Treat the cause; transfusions are supportive, not curative",
    ],
    pediatrics:
      "Meningococcemia with petechiae/purpura fulminans and shock — think DIC + Waterhouse-Friderichsen adrenal hemorrhage. Neonatal sepsis and NEC can trigger DIC; same lab pattern with age-appropriate transfusion thresholds.",
  },
  {
    id: "merkel-cell-carcinoma",
    name: "Merkel Cell Carcinoma",
    etymology: "eponym: Friedrich Merkel + cell = small biological unit + Greek karkinos = crab/cancer + -oma = tumor",
    aliases: [
      "merkel cell carcinoma",
      "merkel cell cancer",
      "mcc",
      "neuroendocrine carcinoma of skin",
      "cutaneous neuroendocrine carcinoma",
    ],
    definition:
      "Aggressive primary cutaneous neuroendocrine carcinoma thought to arise from Merkel cells or related cutaneous neuroendocrine precursors, often associated with Merkel cell polyomavirus (MCPyV) and UV exposure.",
    pathophysiology:
      "MCPyV integration and T-antigen expression (in virus-positive tumors) or UV-induced mutational burden (virus-negative) drive uncontrolled proliferation of CK20⁺ neuroendocrine cells; rapid local growth with early nodal and distant metastasis.",
    classicPresentation: [
      "Elderly or immunosuppressed patient (HIV, transplant)",
      "Sun-exposed site — head, neck, or extremity",
      "Rapidly growing, painless, firm, red-violet or flesh-colored nodule",
      "Often lacks overlying epidermal connection on histology (unlike BCC)",
    ],
    keyFindings: [
      "Biopsy — small round blue cells with neuroendocrine features",
      "Immunohistochemistry: CK20⁺ (paranuclear dot pattern), synaptophysin⁺, chromogranin⁺",
      "MCPyV oncoprotein antibodies or viral testing (supportive)",
      "Sentinel lymph node often involved early",
    ],
    associations: [
      "Merkel cell polyomavirus (MCPyV)",
      "UV radiation and fair skin",
      "Immunosuppression — HIV/AIDS, chronic lymphocytic leukemia, organ transplant",
      "Second primary skin cancers (SCC, BCC) in sun-damaged skin",
    ],
    complications: [
      "Early lymph node and distant metastasis (liver, lung, bone)",
      "High recurrence after local therapy",
      "Poor prognosis compared with most non-melanoma skin cancers",
    ],
    distinguishFrom: [
      "Melanoma — S100⁺/Melan-A⁺; pigmented often; BRAF mutations",
      "Basal cell carcinoma — indolent, pearly rolled border, hedgehog pathway",
      "Squamous cell carcinoma — keratin pearls, CK5/6⁺, less neuroendocrine IHC",
      "Metastatic small cell lung carcinoma to skin — CK20 usually negative; search for pulmonary primary",
      "Langerhans cell histiocytosis — CD1a⁺/langerin⁺ histiocytes, not neuroendocrine carcinoma",
      "Merkel cell (benign mechanoreceptor) — not a malignancy; carcinoma is the tumor entity",
    ],
    treatment: [
      "Wide local excision with sentinel lymph node biopsy",
      "Adjuvant radiation for high-risk primary or nodal disease",
      "Immunotherapy (anti–PD-1/PD-L1) for advanced or metastatic disease",
      "Chemotherapy (platinum/etoposide) historically for metastatic disease; immunotherapy preferred when available",
    ],
    boardsPearls: [
      "CK20⁺ paranuclear dot + neuroendocrine markers → Merkel cell carcinoma",
      "MCPyV association — immunosuppressed and elderly patients at risk",
      "Aggressive small round blue cell skin tumor — not melanoma, not BCC",
      "vs benign Merkel cell — mechanoreceptor for touch; carcinoma is malignant neuroendocrine neoplasm",
      "Metastatic small cell lung cancer to skin — CK20 negative; look for lung primary",
    ],
    pediatrics:
      "Rare in children; when it occurs often in immunosuppressed hosts. Do not confuse with Langerhans cell histiocytosis (CD1a⁺, not CK20⁺ neuroendocrine carcinoma).",
  },
  {
    id: "menopause",
    name: "Menopause",
    etymology: "Greek men = month + pausis = cessation",
    aliases: [
      "menopause",
      "menopausal",
      "postmenopause",
      "postmenopausal",
      "post-menopausal",
      "post menopausal",
      "perimenopause",
      "perimenopausal",
      "climacteric",
    ],
    definition:
      "Permanent cessation of ovarian function marked by 12 consecutive months of amenorrhea, reflecting depletion of ovarian follicles and loss of cyclic estrogen and progesterone production (average age ~51 in the US).",
    pathophysiology:
      "Accelerated follicular atresia → ↓ inhibin B and estradiol → loss of negative feedback on hypothalamus/pituitary → ↑ FSH and LH; vasomotor symptoms from thermoregulatory instability in the hypothalamus; urogenital atrophy from estrogen deficiency.",
    classicPresentation: [
      "Irregular menses during perimenopause → eventual amenorrhea ≥12 months",
      "Hot flashes and night sweats (vasomotor symptoms)",
      "Sleep disturbance, mood changes, vaginal dryness, dyspareunia",
      "Often accompanied by osteoporosis risk and changes in lipid profile",
    ],
    keyFindings: [
      "Amenorrhea ≥12 months in appropriate age group",
      "Atrophic vaginitis on exam",
      "↑ FSH (>30–40 mIU/mL, lab-dependent) with low estradiol",
    ],
    keyLabs: [
      "↑ FSH (most consistent marker postmenopause)",
      "↓ Estradiol",
      "↑ LH",
      "Bone density (DEXA) — screen for osteoporosis",
    ],
    associations: [
      "Accelerated bone loss and osteoporosis",
      "↑ Cardiovascular disease risk after estrogen loss",
      "Genitourinary syndrome of menopause (vaginal atrophy, urinary symptoms)",
      "Earlier surgical menopause (bilateral oophorectomy) — abrupt estrogen withdrawal",
    ],
    complications: [
      "Osteoporotic fractures (vertebral, hip)",
      "Cardiovascular disease",
      "Urogenital atrophy and recurrent UTIs",
      "Cognitive/mood symptoms (variable; multifactorial)",
    ],
    distinguishFrom: [
      "Primary ovarian insufficiency — menopause before age 40; evaluate karyotype and autoimmunity",
      "Pregnancy — always rule out in woman of reproductive age with amenorrhea",
      "Hypothalamic amenorrhea — low FSH/LH from stress, weight loss, exercise (not menopause)",
      "Hyperprolactinemia — amenorrhea with ↑ prolactin, not menopausal FSH pattern",
      "Turner syndrome — primary amenorrhea in adolescence with 45,X, not age-appropriate menopause",
    ],
    treatment: [
      "Lifestyle: weight-bearing exercise, calcium/vitamin D, smoking cessation",
      "Hormone therapy (estrogen ± progestin) for moderate-severe vasomotor symptoms if no contraindications",
      "Local vaginal estrogen for genitourinary syndrome",
      "SSRIs/SNRIs, gabapentin, or clonidine for vasomotor symptoms when HT contraindicated",
      "Bisphosphonates or other antiresorptives for osteoporosis prevention/treatment",
    ],
    boardsPearls: [
      "Menopause = 12 months amenorrhea from ovarian failure; ↑ FSH + ↓ estradiol",
      "Estrogen loss → hot flashes, osteoporosis, ↑ CV risk, vaginal atrophy",
      "HRT: estrogen alone if no uterus; add progestin if uterus present (↓ endometrial cancer risk)",
      "HRT contraindications: history of estrogen-dependent cancer, VTE, active liver disease, undiagnosed vaginal bleeding",
      "vs primary ovarian insufficiency — menopause <40 years is POI, not normal menopause",
      "Unopposed estrogen in woman with uterus → endometrial hyperplasia/cancer risk",
    ],
    pediatrics:
      "Not applicable — menopause is adult ovarian senescence. Premature ovarian insufficiency before age 40 in adolescents/young women warrants separate workup (Turner, autoimmunity, iatrogenic).",
  },
  {
    id: "amenorrhea",
    name: "Amenorrhea",
    etymology: "Greek a- = absent + men = month + rhoia = flow",
    aliases: [
      "amenorrhea",
      "primary amenorrhea",
      "secondary amenorrhea",
      "absent menses",
      "absence of menses",
    ],
    definition:
      "Absence of menstrual bleeding — primary amenorrhea when menses have not begun by age 15 with normal secondary sexual characteristics (or by 13 without them); secondary amenorrhea when established menses cease for ≥3 months (previously regular) or ≥6 months (previously oligomenorrheic).",
    pathophysiology:
      "Disruption anywhere along the hypothalamic–pituitary–ovarian–uterine outflow axis: ↓ GnRH pulsatility (hypothalamic), pituitary tumor/hyperprolactinemia, ovarian failure or PCOS, anatomic outflow obstruction (imperforate hymen, Müllerian agenesis), or intrauterine scarring (Asherman); pregnancy is the most common cause of secondary amenorrhea in reproductive-age women.",
    classicPresentation: [
      "Secondary amenorrhea — previously cycling woman with absent periods",
      "Primary amenorrhea — adolescent without menarche ± absent pubertal development",
      "Associated galactorrhea suggests hyperprolactinemia",
      "Virilization or hirsutism suggests androgen excess (PCOS, CAH, tumor)",
      "Cyclic pelvic pain without bleeding — outflow obstruction (hematocolpos)",
    ],
    keyFindings: [
      "Negative pregnancy test (first step in secondary amenorrhea)",
      "Tanner staging and presence of secondary sexual characteristics",
      "Galactorrhea on breast exam",
      "Hirsutism, acne, obesity — PCOS pattern",
      "Absent uterus or vagina on imaging/exam — Müllerian anomaly or androgen insensitivity",
    ],
    keyLabs: [
      "β-hCG — rule out pregnancy",
      "Prolactin — prolactinoma suppresses GnRH",
      "TSH — hypothyroidism can cause hyperprolactinemia and amenorrhea",
      "FSH — high in ovarian failure/Turner; low/normal in hypothalamic/pituitary causes",
      "LH, testosterone, DHEA-S — PCOS or virilizing tumor workup",
      "Progesterone challenge — withdrawal bleed implies estrogen present and patent outflow",
      "Karyotype — primary amenorrhea with short stature or hypergonadotropic hypogonadism",
    ],
    associations: [
      "Pregnancy",
      "Functional hypothalamic amenorrhea — stress, eating disorder, excessive exercise",
      "Prolactinoma — galactorrhea + amenorrhea",
      "PCOS — oligomenorrhea/amenorrhea, hyperandrogenism, polycystic ovaries",
      "Turner syndrome — primary amenorrhea, streak gonads, 45,X",
      "Premature ovarian insufficiency and menopause",
      "Asherman syndrome — postpartum/D&C intrauterine adhesions",
      "Müllerian agenesis (Mayer-Rokitansky-Küster-Hauser) — absent uterus, normal ovaries",
    ],
    complications: [
      "Estrogen deficiency — osteoporosis, cardiovascular risk, vaginal atrophy (if prolonged)",
      "Anovulation and infertility",
      "Endometrial hyperplasia if chronic unopposed estrogen without progesterone (e.g., PCOS)",
    ],
    distinguishFrom: [
      "Oligomenorrhea — infrequent menses; may progress to amenorrhea but cycles still occur",
      "Menopause — age-appropriate ovarian senescence with ≥12 months amenorrhea and ↑ FSH",
      "Pregnancy — must exclude before extensive workup",
      "Anovulatory bleeding — irregular bleeding still present, not complete amenorrhea",
    ],
    treatment: [
      "Treat underlying cause — dopamine agonist for prolactinoma, weight restoration for hypothalamic amenorrhea",
      "Combined OCPs or cyclic progestin for endometrial protection when estrogen present but anovulatory (PCOS)",
      "Estrogen replacement in ovarian failure/Turner (with progestin if uterus present)",
      "Surgical correction of outflow obstruction (imperforate hymen, transverse vaginal septum)",
      "Hysteroscopic adhesiolysis for Asherman syndrome",
    ],
    boardsPearls: [
      "Secondary amenorrhea workup: pregnancy test → prolactin → TSH → FSH (± LH, androgens)",
      "Galactorrhea + amenorrhea → prolactinoma until proven otherwise",
      "↑ FSH + low estrogen → ovarian failure (Turner, POI, menopause)",
      "Low/normal FSH + low estrogen → hypothalamic or pituitary (functional, prolactinoma)",
      "Progesterone challenge: bleed = estrogenized uterus with patent outflow; no bleed = low estrogen or outflow block",
      "Primary amenorrhea: absent uterus + 46,XY → androgen insensitivity; absent uterus + 46,XX → Müllerian agenesis",
      "PCOS: ↑ LH:FSH, elevated androgens, polycystic ovaries, anovulatory amenorrhea",
    ],
    pediatrics:
      "Primary amenorrhea — karyotype if hypergonadotropic; evaluate for Turner (45,X), outflow tract anomalies, and androgen insensitivity. No menarche by 15 warrants evaluation.",
  },
  {
    id: "secondary-amenorrhea",
    name: "Secondary Amenorrhea",
    etymology: "Latin secundarius = following + Greek a- = absent + men = month + rhoia = flow",
    aliases: [
      "secondary amenorrhea",
      "secondary amenorrhoea",
      "cessation of menses",
      "absent periods after prior menstruation",
    ],
    definition:
      "Cessation of menstrual bleeding in a woman who previously menstruated — ≥3 months without menses after regular cycles, or ≥6 months after previously oligomenorrheic cycles.",
    pathophysiology:
      "Established cycles stop when pregnancy occurs or when the HPO axis is disrupted: ↓ GnRH pulsatility (stress, weight loss, eating disorders, exercise), pituitary hyperprolactinemia, thyroid disease, ovarian dysfunction (PCOS, premature ovarian insufficiency), or uterine/outflow pathology (Asherman syndrome).",
    classicPresentation: [
      "Previously cycling woman with absent periods for months",
      "May have galactorrhea (hyperprolactinemia), hirsutism/acne (PCOS), or weight loss/restrictive eating (hypothalamic)",
      "Cyclic pelvic pain without bleeding — consider outflow obstruction",
    ],
    keyFindings: [
      "Negative pregnancy test (mandatory first step)",
      "Galactorrhea, hirsutism, low BMI, or athletic training pattern",
      "Normal or abnormal pelvic exam depending on cause",
    ],
    keyLabs: [
      "β-hCG — pregnancy is most common cause",
      "Prolactin — prolactinoma or stalk effect",
      "TSH — hypothyroidism can raise prolactin and stop menses",
      "FSH — ↑ in ovarian failure; low/normal in hypothalamic/pituitary causes",
      "LH, testosterone, DHEA-S — hyperandrogenism workup (PCOS, tumor)",
      "Progesterone challenge test — withdrawal bleed implies estrogen + patent outflow",
    ],
    associations: [
      "Pregnancy",
      "Functional hypothalamic amenorrhea — eating disorder, stress, excessive exercise",
      "Prolactinoma",
      "Polycystic ovary syndrome",
      "Premature ovarian insufficiency and menopause",
      "Asherman syndrome — postpartum/D&C adhesions",
      "Hypothyroidism",
    ],
    complications: [
      "Estrogen deficiency — osteoporosis, infertility",
      "Endometrial hyperplasia if chronic anovulation with unopposed estrogen (PCOS)",
    ],
    distinguishFrom: [
      "Primary amenorrhea — menses never began",
      "Oligomenorrhea — infrequent but ongoing bleeding",
      "Menopause — age-appropriate ≥12 months amenorrhea with ↑ FSH",
      "Pregnancy — always exclude first",
    ],
    treatment: [
      "Treat underlying cause — cabergoline/bromocriptine for prolactinoma, levothyroxine for hypothyroidism, weight restoration for hypothalamic amenorrhea",
      "Combined OCPs or cyclic progestin for endometrial protection in anovulatory states (PCOS)",
      "Hysteroscopic adhesiolysis for Asherman syndrome",
    ],
    boardsPearls: [
      "Workup ladder: pregnancy test → prolactin → TSH → FSH (± LH, androgens)",
      "Galactorrhea + secondary amenorrhea → prolactinoma until proven otherwise",
      "Low/normal FSH + low estrogen → hypothalamic (eating disorder, athlete triad) or pituitary",
      "↑ FSH → ovarian failure (POI, menopause) — not functional hypothalamic pattern",
      "Progesterone challenge: bleed = estrogenized + patent outflow; no bleed = low estrogen or obstruction",
    ],
    pediatrics:
      "Adolescents with previously established menses who stop cycling warrant pregnancy exclusion and evaluation for eating disorders, athlete triad, PCOS, or hyperprolactinemia.",
  },
  {
    id: "polycystic-ovary-syndrome",
    name: "Polycystic Ovary Syndrome",
    etymology: "Greek poly = many + kystis = bladder/pouch + Latin ovarium = egg vessel + syndrome = grouped findings",
    aliases: [
      "polycystic ovary syndrome",
      "polycystic ovarian syndrome",
      "pcos",
      "stein-leventhal syndrome",
      "sclerocystic ovary syndrome",
    ],
    definition:
      "Common endocrine disorder of reproductive-age women characterized by hyperandrogenism, ovulatory dysfunction, and polycystic ovarian morphology, often with insulin resistance and metabolic syndrome features.",
    pathophysiology:
      "Insulin resistance and ↑ GnRH pulse frequency → preferential LH secretion → ovarian theca cell androgen production → anovulation and follicular arrest; peripheral insulin resistance worsens hyperandrogenism and metabolic risk; chronic anovulation with estrogen without progesterone predisposes to endometrial hyperplasia.",
    classicPresentation: [
      "Oligomenorrhea or secondary amenorrhea",
      "Hirsutism, acne, androgenic alopecia",
      "Obesity or central adiposity (not required)",
      "Infertility from chronic anovulation",
      "Acanthosis nigricans with insulin resistance",
    ],
    keyFindings: [
      "Polycystic ovaries on ultrasound — multiple small peripheral follicles",
      "Hirsutism on exam; may have clitoromegaly if severe androgen excess (rule out tumor)",
      "Obesity and metabolic syndrome features",
    ],
    keyLabs: [
      "↑ LH:FSH ratio (classically >2–3; not required for diagnosis)",
      "Elevated free/total testosterone or DHEA-S (mild–moderate in PCOS)",
      "Normal or mildly ↑ prolactin; TSH to exclude thyroid disease",
      "Fasting glucose/HbA1c — insulin resistance and diabetes screening",
      "17-hydroxyprogesterone if virilization suggests congenital adrenal hyperplasia",
    ],
    associations: [
      "Obesity and metabolic syndrome",
      "Type 2 diabetes mellitus",
      "NAFLD/NASH",
      "Obstructive sleep apnea",
      "Endometrial hyperplasia and carcinoma (chronic unopposed estrogen)",
      "Infertility",
    ],
    complications: [
      "Anovulatory infertility",
      "Endometrial hyperplasia/cancer",
      "Gestational diabetes and pregnancy complications",
      "Cardiovascular risk from metabolic syndrome",
    ],
    distinguishFrom: [
      "Congenital adrenal hyperplasia (21-hydroxylase deficiency) — ↑ 17-OHP, often presents younger with virilization",
      "Androgen-secreting ovarian or adrenal tumor — rapid virilization, markedly ↑ androgens",
      "Cushing syndrome — cortisol excess with central obesity, striae",
      "Hypothyroidism — check TSH; can cause menstrual irregularity",
      "Functional hypothalamic amenorrhea — low energy availability, low androgens, not hyperandrogenic",
    ],
    treatment: [
      "Lifestyle — weight loss improves ovulation and metabolic profile",
      "Combined oral contraceptives — regulate menses, ↓ androgens, endometrial protection",
      "Metformin — insulin sensitizer for metabolic features and ovulation induction adjunct",
      "Spironolactone or antiandrogens for hirsutism (with contraception to prevent teratogenicity)",
      "Clomiphene or letrozole for fertility when desired",
    ],
    boardsPearls: [
      "Rotterdam criteria: ≥2 of — oligo/anovulation, clinical/biochemical hyperandrogenism, polycystic ovaries on US",
      "↑ LH:FSH ratio + hirsutism + oligomenorrhea → PCOS",
      "Most common cause of anovulatory infertility",
      "OCPs protect endometrium from unopposed estrogen",
      "Rule out tumor/CAH if rapid virilization or very high androgens",
      "vs functional hypothalamic amenorrhea — PCOS has hyperandrogenism and often obesity/insulin resistance",
    ],
    pediatrics:
      "Adolescent PCOS diagnosis requires careful distinction from physiologic anovulatory cycles after menarche; hyperandrogenism and persistent oligomenorrhea beyond 2–3 years post-menarche warrant evaluation.",
  },
  {
    id: "anorexia-nervosa",
    name: "Anorexia Nervosa",
    etymology: "Greek an- = without + orexis = appetite + Latin nervus = nerve/sinew (disordered drive)",
    aliases: [
      "anorexia nervosa",
      "anorexia",
      "restrictive eating disorder",
      "an",
    ],
    definition:
      "Eating disorder characterized by restrictive energy intake, intense fear of weight gain, and distorted body image, leading to significantly low body weight and medical complications.",
    pathophysiology:
      "Severe caloric restriction → hypothalamic suppression of GnRH → ↓ LH/FSH → ↓ estrogen → amenorrhea and bone loss; malnutrition causes bradycardia, hypotension, hypothermia, lanugo, and electrolyte disturbances; refeeding can precipitate refeeding syndrome (hypophosphatemia, arrhythmias).",
    classicPresentation: [
      "Restrictive dieting, excessive exercise, or purging with marked weight loss",
      "Intense fear of gaining weight despite being underweight",
      "Body image distortion — perceives self as overweight",
      "Amenorrhea, lanugo, cold intolerance",
      "Bradycardia, orthostatic hypotension, fatigue",
    ],
    keyFindings: [
      "Low BMI or failure to meet expected weight/height trajectory in adolescents",
      "Lanugo, dry skin, brittle hair",
      "Bradycardia and hypothermia",
      "Muscle wasting; may have peripheral edema if albumin low",
    ],
    keyLabs: [
      "Electrolytes — hypokalemia if purging; refeeding hypophosphatemia",
      "ECG — bradycardia, QT prolongation",
      "Bone density — osteoporosis from hypoestrogenism",
      "β-hCG if amenorrhea; FSH/LH low (functional hypothalamic)",
    ],
    associations: [
      "Secondary amenorrhea and hypogonadotropic hypogonadism",
      "Female athlete triad / RED-S",
      "Osteoporosis and stress fractures",
      "Depression, anxiety, OCD traits",
      "Bulimia nervosa — can coexist or evolve between subtypes",
    ],
    complications: [
      "Refeeding syndrome",
      "Sudden cardiac death from arrhythmia",
      "Osteoporosis",
      "Infertility (often reversible with weight restoration)",
      "Suicide",
    ],
    distinguishFrom: [
      "Bulimia nervosa — binge–purge cycles; BMI often normal",
      "Avoidant/restrictive food intake disorder — lack of interest in food without body image distortion",
      "Malabsorption (celiac, IBD) — GI symptoms predominate",
      "Hyperthyroidism — weight loss with ↑ appetite and tachycardia",
      "Malignancy — unintentional weight loss without body image preoccupation",
    ],
    treatment: [
      "Nutritional rehabilitation and weight restoration — cornerstone",
      "Hospitalize if severe malnutrition, electrolyte instability, bradycardia, or suicide risk",
      "Monitor refeeding — gradual calories, phosphate, thiamine",
      "Psychotherapy (CBT, family-based therapy in adolescents); SSRIs less effective for core weight pathology",
    ],
    boardsPearls: [
      "Restrictive eating + low BMI + fear of weight gain + amenorrhea → anorexia nervosa",
      "Lanugo + bradycardia + hypothermia in underweight young woman → eating disorder",
      "Refeeding syndrome — hypophosphatemia after restarting nutrition",
      "Amenorrhea from ↓ GnRH — functional hypothalamic pattern",
      "vs bulimia — anorexia restrictive subtype vs binge–purge; bulimia often normal BMI",
    ],
    pediatrics:
      "Family-based treatment (FBT) is first-line in adolescents; growth charts and delayed puberty/menarche are red flags. Bone accrual during adolescence is permanently compromised if prolonged hypoestrogenism.",
  },
  {
    id: "bulimia-nervosa",
    name: "Bulimia Nervosa",
    etymology: "Greek bous = ox + limos = hunger + Latin nervus = nerve/sinew (ox-hunger = bingeing)",
    aliases: [
      "bulimia nervosa",
      "bulimia",
      "binge eating disorder with purging",
      "bn",
    ],
    definition:
      "Eating disorder characterized by recurrent binge eating followed by inappropriate compensatory behaviors (self-induced vomiting, laxative/diuretic misuse, fasting, or excessive exercise) with undue influence of body shape and weight on self-evaluation.",
    pathophysiology:
      "Binge–purge cycles → gastric acid exposure erodes dental enamel and inflames parotids; vomiting causes hypokalemia, hypochloremia, and metabolic alkalosis; laxative abuse worsens potassium loss; chronic purging can cause arrhythmias and renal injury.",
    classicPresentation: [
      "Recurrent episodes of uncontrolled large food intake",
      "Self-induced vomiting, laxative/diuretic use, fasting, or driven exercise afterward",
      "Normal or near-normal BMI (unlike restrictive anorexia)",
      "Preoccupation with weight and shape",
      "Dental sensitivity, sore throat, facial swelling after purging",
    ],
    keyFindings: [
      "Russell sign — knuckle calluses from inducing vomiting",
      "Parotid gland hypertrophy ('chipmunk cheeks')",
      "Dental enamel erosion on lingual surfaces",
      "Normal or fluctuating weight",
    ],
    keyLabs: [
      "Hypokalemia, hypochloremia, metabolic alkalosis (vomiting)",
      "Elevated amylase (salivary) possible with parotid inflammation",
      "Electrolytes before initiating treatment",
    ],
    associations: [
      "Depression and anxiety",
      "Borderline personality traits in some patients",
      "Anorexia nervosa binge–purge subtype overlap",
      "Substance use",
    ],
    complications: [
      "Cardiac arrhythmias from electrolyte disturbances",
      "Esophageal Mallory-Weiss tears or rupture (rare Boerhaave)",
      "Dental caries and enamel loss",
      "Parotid inflammation",
      "Renal injury from dehydration and laxative abuse",
    ],
    distinguishFrom: [
      "Anorexia nervosa restrictive type — significantly low BMI",
      "Binge eating disorder — binges without regular compensatory purging",
      "Cyclic vomiting syndrome — not driven by body image concerns",
      "Hyperemesis gravidarum — pregnancy-related vomiting",
    ],
    treatment: [
      "Psychotherapy — CBT is first-line",
      "SSRIs (high-dose fluoxetine FDA-approved for bulimia nervosa)",
      "Correct electrolyte abnormalities; monitor cardiac rhythm",
      "Nutritional counseling — regular meals to reduce binge triggers",
    ],
    boardsPearls: [
      "Binge + purge + normal BMI + Russell sign → bulimia nervosa",
      "Vomiting → hypokalemia + hypochloremia + metabolic alkalosis",
      "Parotid hypertrophy and lingual dental erosion are classic physical clues",
      "Fluoxetine is the SSRI with bulimia indication on boards",
      "vs anorexia — bulimia typically preserves normal weight; anorexia has low BMI",
    ],
    pediatrics:
      "Bulimia can begin in adolescence; screen for purging in teens with unexplained electrolyte abnormalities, dental erosion, or parotid swelling.",
  },
  {
    id: "endometriosis",
    name: "Endometriosis",
    etymology: "Greek endon = within + metra = uterus + -osis = condition",
    aliases: [
      "endometriosis",
      "endometriotic",
      "endometrioma",
      "endometriomas",
      "chocolate cyst",
      "chocolate cysts",
      "ovarian endometrioma",
    ],
    definition:
      "Presence of functional endometrial glands and stroma outside the uterine cavity — most often on ovaries, peritoneum, uterosacral ligaments, and pouch of Douglas; a common cause of secondary dysmenorrhea and infertility.",
    pathophysiology:
      "Sampson theory: retrograde menstruation seeds peritoneal surfaces; ectopic endometrial tissue responds to cyclic estrogen/progesterone → inflammation, adhesions, and scarring; ovarian implants may form endometriomas ('chocolate cysts' from old blood).",
    classicPresentation: [
      "Cyclic pelvic pain worsening with menses (secondary dysmenorrhea)",
      "Chronic pelvic pain, dyspareunia (especially deep)",
      "Infertility or subfertility",
      "Pain with defecation or urination during menses if bowel/bladder involved",
      "Often normal exam early; uterosacral nodularity or fixed retroverted uterus later",
    ],
    keyFindings: [
      "Cyclic pain temporally related to menstruation",
      "Ovarian endometrioma on ultrasound — homogenous cystic mass ('chocolate cyst')",
      "Laparoscopy — powder-burn lesions, adhesions, endometriotic implants",
      "Histology: endometrial glands and stroma outside the uterus (definitive)",
    ],
    keyLabs: [
      "No specific serum marker for diagnosis on boards",
      "Pregnancy test if amenorrhea or infertility workup",
      "Pelvic ultrasound — endometrioma, rule out other pelvic pathology",
    ],
    associations: [
      "Secondary dysmenorrhea",
      "Infertility — distorted pelvic anatomy, inflammation, ovulatory dysfunction",
      "Ovarian endometrioma",
      "Adenomyosis — may coexist; endometrium within myometrium (different entity)",
      "Family history",
    ],
    complications: [
      "Chronic pelvic pain and adhesions",
      "Infertility",
      "Ovarian endometrioma rupture or torsion (rare)",
      "Bowel or ureteral obstruction with deep infiltrating disease (advanced)",
    ],
    distinguishFrom: [
      "Primary dysmenorrhea — begins near menarche, no pelvic pathology, often improves with OCPs/NSAIDs",
      "Adenomyosis — endometrial tissue within myometrium; diffusely enlarged tender uterus",
      "PID — fever, cervical motion tenderness, purulent discharge, not strictly cyclic",
      "Uterine leiomyoma — menorrhagia and bulk symptoms; focal myometrial masses",
      "Interstitial cystitis — bladder pain syndrome without cyclic menstrual pattern",
    ],
    treatment: [
      "NSAIDs for pain",
      "Combined oral contraceptives or progestins — suppress cyclic endometrial activity",
      "GnRH agonists (leuprolide) — continuous exposure downregulates axis; add 'add-back' estrogen to limit bone loss",
      "Laparoscopic excision or ablation of implants; cystectomy for endometrioma",
      "Assisted reproduction for infertility when indicated",
    ],
    boardsPearls: [
      "Secondary dysmenorrhea + infertility + dyspareunia → endometriosis",
      "Chocolate cyst = ovarian endometrioma filled with old blood",
      "Definitive diagnosis: laparoscopy with histology (glands + stroma outside uterus)",
      "GnRH agonists — initial flare then ↓ estrogen; used for endometriosis and precocious puberty",
      "vs adenomyosis — uterine wall disease; endometriosis is extrauterine",
      "Retrograde menstruation (Sampson) is leading theory, not proven in all cases",
    ],
    pediatrics:
      "Uncommon before menarche. Adolescents with severe dysmenorrhea unresponsive to NSAIDs/OCPs should be evaluated for endometriosis — do not dismiss as 'normal cramps' if functionally limiting.",
  },
  {
    id: "dysmenorrhea",
    name: "Dysmenorrhea",
    etymology: "Greek dys = difficult/painful + men = month + rhoia = flow",
    aliases: [
      "dysmenorrhea",
      "dysmenorrhoea",
      "painful periods",
      "painful menses",
      "menstrual cramps",
      "menstrual cramping",
      "period pain",
      "primary dysmenorrhea",
      "secondary dysmenorrhea",
    ],
    definition:
      "Painful menstruation from uterine cramping — primary when no underlying pelvic pathology (prostaglandin-mediated), secondary when caused by another disorder such as endometriosis, adenomyosis, or leiomyoma.",
    pathophysiology:
      "Primary: ↑ prostaglandin F₂α in endometrium → ↑ myometrial contractions and ischemia → suprapubic cramping pain with menses onset. Secondary: cyclic inflammation or mass effect from pelvic disease (endometriosis implants, adenomyosis, fibroids, PID) amplifies or prolongs menstrual pain.",
    classicPresentation: [
      "Primary — crampy lower abdominal/pelvic pain beginning with or just before menses; often starts within 1–2 years of menarche; may have nausea, diarrhea, headache",
      "Secondary — pain that worsens over time, persists beyond menses, or begins later in reproductive life",
      "Secondary clues: dyspareunia, infertility, abnormal uterine bleeding, fixed uterus on exam",
    ],
    keyFindings: [
      "Primary — normal pelvic exam",
      "Secondary — uterosacral nodularity (endometriosis), enlarged boggy uterus (adenomyosis), irregular enlarged uterus (fibroids)",
      "Cervical motion tenderness suggests PID rather than isolated dysmenorrhea",
    ],
    keyLabs: [
      "Pregnancy test if amenorrhea or abnormal bleeding",
      "Pelvic ultrasound for secondary workup — fibroids, endometrioma, adenomyosis",
      "No labs required for typical primary dysmenorrhea in adolescent with classic history",
    ],
    associations: [
      "Primary dysmenorrhea — prostaglandin excess; common in adolescents",
      "Endometriosis — leading cause of secondary dysmenorrhea on boards",
      "Adenomyosis",
      "Uterine leiomyoma",
      "PID",
      "Copper IUD (may worsen cramping)",
    ],
    complications: [
      "Primary — school/work absenteeism; rarely indicates underlying disease if classic presentation",
      "Secondary — progressive pain, infertility (endometriosis), chronic pelvic pain",
    ],
    distinguishFrom: [
      "Primary vs secondary — timing of onset, exam findings, response to initial therapy",
      "Mittelschmerz — mid-cycle ovulatory pain, not menstrual",
      "Ectopic pregnancy — acute unilateral pain, positive β-hCG",
      "Ovarian torsion — sudden severe pain, adnexal tenderness, not cyclic with every mense",
      "Primary dysmenorrhea — begins early after menarche, normal exam, NSAID-responsive",
    ],
    treatment: [
      "Primary — NSAIDs started at menses onset (inhibit prostaglandin synthesis); combined OCPs suppress ovulation and endometrial prostaglandin production",
      "Secondary — treat underlying cause (endometriosis: OCPs, GnRH agonists, surgery; fibroids: medical or surgical)",
      "Heat, exercise, and adequate analgesia for primary symptoms",
    ],
    boardsPearls: [
      "Primary dysmenorrhea — prostaglandins; NSAIDs first line; OCPs highly effective",
      "Secondary dysmenorrhea — pain worsening over years + dyspareunia/infertility → laparoscopy for endometriosis",
      "Adolescent with incapacitating cramps unresponsive to NSAIDs → evaluate for endometriosis",
      "vs mittelschmerz — ovulatory mid-cycle pain, brief",
      "Copper IUD may increase menstrual cramping; levonorgestrel IUD often ↓ bleeding and pain",
    ],
    pediatrics:
      "Primary dysmenorrhea is common after menarche when cycles become ovulatory; NSAIDs and OCPs are first-line. Severe or progressive pain in teens warrants evaluation for endometriosis — pathology is increasingly recognized in adolescents.",
  },
  {
    id: "uterine-fibroid",
    name: "Uterine Leiomyoma",
    etymology: "Latin uterus = womb + Greek leios = smooth + mys = muscle + -oma = tumor/mass",
    aliases: [
      "uterine fibroid",
      "uterine fibroids",
      "fibroid",
      "fibroids",
      "leiomyoma",
      "leiomyomas",
      "uterine leiomyoma",
      "uterine leiomyomas",
      "myometrial leiomyoma",
      "benign leiomyoma",
      "myoma",
      "myomas",
      "uterine myoma",
      "fibromyoma",
    ],
    definition:
      "Benign monoclonal smooth muscle tumor of the myometrium (leiomyoma) — estrogen- and progesterone-sensitive; the most common pelvic tumor in reproductive-age women; often asymptomatic but may cause menorrhagia, bulk symptoms, or infertility.",
    pathophysiology:
      "Myometrial smooth muscle proliferation with abundant extracellular matrix → well-circumscribed whorled masses; growth promoted by estrogen and progesterone (enlarge in pregnancy, shrink after menopause); location determines symptoms (submucosal → bleeding; large intramural/subserosal → pressure).",
    classicPresentation: [
      "Heavy/prolonged menstrual bleeding (menorrhagia) — especially submucosal fibroids",
      "Pelvic pressure, urinary frequency/retention, constipation from mass effect",
      "Enlarged irregularly contoured uterus on bimanual exam",
      "Dyspareunia, chronic pelvic pain, or infertility (variable)",
      "Often incidental finding on exam or ultrasound in asymptomatic woman",
    ],
    keyFindings: [
      "Pelvic exam — firm, irregular, enlarged uterus",
      "Transvaginal ultrasound — well-defined hypoechoic myometrial masses; first-line imaging",
      "Location subtypes — submucosal (bleeding/infertility), intramural, subserosal (bulk/pressure), pedunculated",
      "MRI for surgical mapping or atypical cases",
      "Histology — whorled bundles of smooth muscle with well-demarcated border (definitive if resected)",
    ],
    keyLabs: [
      "CBC — anemia from chronic menorrhagia",
      "Pregnancy test if abnormal bleeding",
      "No serum tumor marker for benign fibroid diagnosis",
    ],
    associations: [
      "Secondary dysmenorrhea and abnormal uterine bleeding",
      "Iron deficiency anemia from menorrhagia",
      "Black women — higher prevalence and earlier onset",
      "Family history of fibroids",
      "Red degeneration — hemorrhagic infarction in pregnancy causing acute pain",
    ],
    complications: [
      "Symptomatic anemia",
      "Infertility or pregnancy loss (location-dependent, especially submucosal)",
      "Urinary obstruction or hydronephrosis (rare, large masses)",
      "Torsion of pedunculated subserosal fibroid (rare)",
      "Leiomyosarcoma suspicion if postmenopausal rapid growth (rare malignant transformation from fibroid)",
    ],
    distinguishFrom: [
      "Adenomyosis — diffusely enlarged boggy uterus; endometrium within myometrium; diffusely heterogeneous myometrium on MRI",
      "Endometrial polyp — focal endometrial lesion, not myometrial mass",
      "Ovarian mass — separate from uterus on exam/imaging; adnexal origin",
      "Endometrial cancer — postmenopausal bleeding; endometrial biopsy indicated",
      "Leiomyosarcoma — postmenopausal, rapid enlargement, irregular margins, necrosis on imaging (cannot reliably exclude preoperatively)",
      "Hydatidiform mole — very high β-hCG with vesicular 'snowstorm' intrauterine pattern, not focal solid myometrial masses",
      "Pregnancy — physiologic uterine enlargement; positive β-hCG",
    ],
    treatment: [
      "Asymptomatic — observation",
      "Medical: NSAIDs for pain; combined OCPs or levonorgestrel IUD for bleeding; GnRH agonists (short-term shrinkage before surgery; add-back therapy)",
      "Surgical: myomectomy (fertility preservation) or hysterectomy (definitive)",
      "Uterine artery embolization — alternative for symptomatic women declining surgery",
      "Iron supplementation for anemia",
    ],
    boardsPearls: [
      "Leiomyoma = benign monoclonal smooth muscle tumor; uterine leiomyoma = fibroid = most common benign tumor in women",
      "Most common benign tumor in females; estrogen-dependent — grow in pregnancy, shrink after menopause",
      "Submucosal fibroids → menorrhagia and infertility risk highest",
      "Ultrasound — hypoechoic myometrial masses; TVUS first line",
      "Whorled smooth muscle on histology — benign leiomyoma",
      "GnRH agonists ↓ estrogen temporarily → shrink fibroids preoperatively",
      "vs adenomyosis — diffuse uterine disease; fibroids are focal masses",
      "Postmenopausal new/growing mass → rule out malignancy (leiomyosarcoma)",
    ],
    pediatrics:
      "Uterine fibroids are rare in adolescents but may occur; abnormal uterine bleeding in teens more often anovulatory cycles or endometriosis — ultrasound if exam suggests myometrial mass.",
  },
  {
    id: "hypogonadism",
    name: "Hypogonadism",
    etymology: "Greek hypo = low + gone = seed/reproduction + -ism = condition",
    aliases: [
      "hypogonadism",
      "hypogonadal",
      "primary hypogonadism",
      "secondary hypogonadism",
      "hypergonadotropic hypogonadism",
      "hypogonadotropic hypogonadism",
      "gonadal failure",
      "testicular failure",
      "ovarian failure",
    ],
    definition:
      "Deficient sex steroid production and/or impaired gametogenesis from gonadal disease (primary) or insufficient pituitary gonadotropin drive (secondary/hypogonadotropic) — classified by FSH/LH relative to low estrogen or testosterone.",
    pathophysiology:
      "Primary: intrinsic gonadal dysfunction → ↓ inhibin/sex steroids → loss of negative feedback → ↑ FSH and LH. Secondary (hypogonadotropic): hypothalamic ↓ GnRH pulsatility or pituitary failure → ↓ LH/FSH → ↓ gonadal steroid production and anovulation/azoospermia.",
    classicPresentation: [
      "Women: amenorrhea or oligomenorrhea, infertility, hot flashes if estrogen low, vaginal dryness, ↓ libido",
      "Men: ↓ libido, erectile dysfunction, fatigue, decreased muscle mass, gynecomastia (if ↑ estrogen:testosterone), infertility",
      "Delayed puberty or absent secondary sexual characteristics when onset in adolescence",
      "Osteoporosis or low bone density with chronic deficiency",
    ],
    keyFindings: [
      "Low estradiol (women) or low testosterone (men)",
      "Primary: ↑ FSH/LH (hypergonadotropic)",
      "Secondary: ↓ or inappropriately normal FSH/LH (hypogonadotropic)",
      "Small firm testes (Klinefelter), streak ovaries (Turner), or normal exam with pituitary cause",
    ],
    keyLabs: [
      "FSH, LH — distinguish primary vs secondary",
      "Estradiol or testosterone (morning in men)",
      "Prolactin — hyperprolactinemia suppresses GnRH",
      "TSH — hypothyroidism can elevate prolactin and cause secondary hypogonadism",
      "Karyotype — Turner (45,X), Klinefelter (47,XXY) in delayed puberty workup",
      "β-hCG, pregnancy test when amenorrhea in reproductive-age woman",
    ],
    associations: [
      "Primary (hypergonadotropic): Turner syndrome, premature ovarian insufficiency, Klinefelter syndrome, chemotherapy/radiation, orchidectomy, mumps orchitis",
      "Secondary (hypogonadotropic): Kallmann syndrome, prolactinoma/hyperprolactinemia, functional hypothalamic amenorrhea, panhypopituitarism, chronic opioid/glucocorticoid use",
      "Hyperprolactinemia → ↓ GnRH pulsatility → hypogonadotropic hypogonadism",
      "Obesity, anorexia, excessive exercise — functional hypothalamic suppression",
    ],
    complications: [
      "Infertility",
      "Osteoporosis and fractures",
      "Metabolic syndrome, anemia (testosterone deficiency)",
      "Adverse mood, cognition, and quality-of-life effects",
      "Unopposed estrogen deficiency cardiovascular effects in women",
    ],
    distinguishFrom: [
      "Primary vs secondary — FSH/LH pattern is the key discriminator",
      "Constitutional delay of puberty — often family history, bone age delay, eventual normal puberty",
      "PCOS — anovulation with androgen excess; LH may be ↑ but not low estrogen pattern of hypogonadism",
      "Menopause — physiologic primary ovarian failure at end of reproductive life",
      "Eating disorder/athlete triad — functional hypothalamic amenorrhea with low gonadotropins",
      "Androgen insensitivity (46,XY) — testes present, female external phenotype, ↑ LH/testosterone",
    ],
    treatment: [
      "Treat underlying cause — dopamine agonist for prolactinoma, levothyroxine for hypothyroidism, weight restoration for functional hypothalamic amenorrhea",
      "Sex steroid replacement — estrogen ± progestin (uterus present) in women; testosterone in men",
      "GnRH pulsatile pump or gonadotropins for hypogonadotropic infertility when desired",
      "Growth hormone and estrogen in Turner; fertility options case-dependent",
    ],
    boardsPearls: [
      "Primary hypogonadism: ↑ FSH/LH + low sex hormones (gonad not responding)",
      "Secondary hypogonadism: ↓/normal FSH/LH + low sex hormones (brain signal problem)",
      "Hyperprolactinemia inhibits GnRH → hypogonadotropic hypogonadism + galactorrhea/amenorrhea",
      "Kallmann: anosmia + delayed puberty + ↓ GnRH (failed neuron migration)",
      "Turner: ↑ FSH, streak ovaries, 45,X; Klinefelter: ↑ FSH/LH, small firm testes, 47,XXY",
      "Functional hypothalamic amenorrhea: low GnRH from stress, weight loss, exercise — ↓ FSH/LH",
      "Pulsatile GnRH treats hypogonadotropic hypogonadism; continuous GnRH agonist suppresses axis",
    ],
    pediatrics:
      "Delayed puberty: evaluate if no breast development by 13 (girls) or no testicular enlargement by 14 (boys). Kallmann (anosmia), Turner, and Klinefelter are classic genetic causes; constitutional delay is diagnosis of exclusion with bone age delay.",
  },
  {
    id: "female-athlete-triad",
    name: "Female Athlete Triad",
    etymology: "female = sex class + athlete = competitor + triad = group of three",
    aliases: [
      "female athlete triad",
      "athlete triad",
      "female athlete triad syndrome",
      "the female athlete triad",
      "relative energy deficiency in sport",
      "red-s",
      "reds",
    ],
    definition:
      "Interrelated spectrum in exercising women and girls of (1) low energy availability with or without disordered eating, (2) menstrual dysfunction (amenorrhea/oligomenorrhea), and (3) low bone mineral density — driven by inadequate caloric intake relative to exercise expenditure.",
    pathophysiology:
      "Low energy availability → hypothalamic suppression of GnRH pulsatility → ↓ LH/FSH → ↓ estrogen → anovulation and amenorrhea; chronic estrogen deficiency impairs bone accrual in adolescents and accelerates bone loss → stress fractures and osteoporosis; may occur without frank anorexia nervosa.",
    classicPresentation: [
      "Adolescent or young adult female endurance or lean-sport athlete (running, gymnastics, ballet)",
      "Secondary amenorrhea or oligomenorrhea",
      "Low BMI, restrictive eating, or excessive training volume",
      "Stress fractures (tibia, metatarsals) or low BMD on DEXA",
      "Fatigue, poor performance, bradycardia if coexisting eating disorder",
    ],
    keyFindings: [
      "Amenorrhea with low/normal FSH/LH and low estradiol (hypogonadotropic pattern)",
      "Low body weight or recent significant weight loss",
      "Stress fracture on imaging",
      "Low bone mineral density for age",
    ],
    keyLabs: [
      "β-hCG — rule out pregnancy",
      "FSH, LH, estradiol — low gonadotropins and estrogen (functional hypothalamic suppression)",
      "Prolactin, TSH — exclude prolactinoma and hypothyroidism in amenorrhea workup",
      "DEXA — bone density when chronic amenorrhea",
    ],
    associations: [
      "Functional hypothalamic amenorrhea",
      "Anorexia nervosa and other eating disorders",
      "Hypogonadotropic hypogonadism",
      "Osteoporosis and stress fractures",
      "High-risk sports: distance running, figure skating, gymnastics, ballet",
    ],
    complications: [
      "Irreversible bone loss if prolonged estrogen deficiency during peak accrual years",
      "Recurrent stress fractures",
      "Infertility (often reversible with energy restoration)",
      "Cardiovascular effects of eating disorder (bradycardia, electrolyte abnormalities)",
    ],
    distinguishFrom: [
      "Primary ovarian failure — ↑ FSH/LH, not low gonadotropins (Turner, POI)",
      "Hyperprolactinemia — ↑ prolactin, galactorrhea; check before attributing to exercise",
      "PCOS — oligomenorrhea with androgen excess, not low energy availability pattern",
      "Normal athletic amenorrhea without bone loss — still warrants evaluation if prolonged",
      "RED-S — broader construct including male athletes and performance decrements beyond classic triad",
    ],
    treatment: [
      "Increase energy availability — nutritional counseling, ↑ caloric intake",
      "Modify training load; multidisciplinary team (sports medicine, nutrition, psychology)",
      "Calcium and vitamin D supplementation",
      "Oral contraceptives may restore menses but do not fully replace bone-protective effect of energy restoration",
      "Treat comorbid eating disorder; hospitalize if severe malnutrition or electrolyte instability",
    ],
    boardsPearls: [
      "Triad: low energy availability + menstrual dysfunction + low bone density",
      "Mechanism: low energy → ↓ GnRH → ↓ LH/FSH → ↓ estrogen → amenorrhea + osteoporosis",
      "Stress fracture in amenorrheic young athlete → think female athlete triad",
      "↓ FSH/LH + low estrogen — functional hypothalamic amenorrhea, not Turner (↑ FSH)",
      "Weight restoration is primary treatment; OCPs alone do not fix underlying energy deficit",
      "RED-S expands triad concept to all athletes with relative energy deficiency",
    ],
    pediatrics:
      "Peak bone accrual occurs in adolescence — prolonged amenorrhea before age 20 carries high fracture risk. Screen female athletes with amenorrhea, stress fractures, or restrictive eating; early intervention prevents permanent bone loss.",
  },
  {
    id: "diverticulitis",
    name: "Diverticulitis",
    etymology: "Latin divertere = turn aside/outpouch + -itis = inflammation",
    aliases: [
      "diverticulitis",
      "acute diverticulitis",
      "sigmoid diverticulitis",
      "colonic diverticulitis",
      "diverticular disease",
      "diverticulosis",
    ],
    definition:
      "Inflammation or infection of colonic diverticula — mucosal herniations through the muscular wall (false diverticula) most often in the sigmoid colon.",
    pathophysiology:
      "Chronic low-fiber diet and increased intraluminal pressure → diverticula form at weak points (where vasa recta penetrate); fecalith obstruction of diverticular neck → microperforation, bacterial overgrowth, and localized or spreading inflammation.",
    classicPresentation: [
      "Left lower quadrant abdominal pain and tenderness (sigmoid; Western pattern)",
      "Fever, leukocytosis",
      "Altered bowel habits — constipation or diarrhea",
      "Older adult with prior diverticulosis",
      "Guarding or peritoneal signs if perforated",
    ],
    keyFindings: [
      "LLQ tenderness; may palpate mass if abscess (phlegmon)",
      "CT abdomen/pelvis with contrast — thickened colonic wall, pericolonic fat stranding, diverticula",
      "Pneumoperitoneum if free perforation",
    ],
    keyLabs: [
      "Leukocytosis",
      "Blood cultures if septic",
      "Urinalysis — rule out pyelonephritis mimicking LLQ pain",
    ],
    associations: [
      "Diverticulosis — asymptomatic outpouchings predispose to diverticulitis",
      "Low-fiber diet, obesity, aging",
      "Complicated disease — abscess, fistula (colovesical → pneumaturia), obstruction, perforation",
    ],
    complications: [
      "Pericolic abscess or phlegmon",
      "Free perforation → peritonitis",
      "Colovesical or colovaginal fistula",
      "Stricture and large-bowel obstruction",
      "Sepsis",
    ],
    distinguishFrom: [
      "Appendicitis — RLQ pain (though cecal diverticulitis can mimic)",
      "Meckel diverticulitis — true diverticulum in ileum; younger patient, different epidemiology",
      "Irritable bowel syndrome — chronic pain without acute inflammation or leukocytosis",
      "Colon cancer — may present with obstruction or bleeding; colonoscopy after acute episode resolves",
      "Ovarian torsion/ruptured cyst — pelvic exam and imaging differentiate in women",
    ],
    treatment: [
      "Uncomplicated — outpatient oral antibiotics covering gram-negatives and anaerobes (e.g., ciprofloxacin + metronidazole); bowel rest",
      "Complicated (abscess, perforation, fistula) — IV antibiotics, percutaneous drainage of abscess, surgery (Hartmann procedure or resection) when indicated",
      "High-fiber diet for prevention after recovery",
    ],
    boardsPearls: [
      "LLQ pain + fever in older adult → diverticulitis (sigmoid)",
      "Diverticulosis = asymptomatic pouches; diverticulitis = inflamed/infected",
      "False diverticula — mucosa/submucosa only through muscularis (vs true Meckel diverticulum)",
      "Colovesical fistula — pneumaturia/fecaluria",
      "CT is diagnostic modality of choice for acute diverticulitis",
      "vs appendicitis — RLQ classic; cecal diverticulitis is exception",
    ],
    pediatrics:
      "Diverticulitis is rare in children; Meckel diverticulitis or appendicitis are more likely in pediatric acute abdomen. Juvenile colonic diverticulosis exists but is uncommon.",
  },
  {
    id: "ileus",
    name: "Ileus",
    etymology: "Greek eileos = intestinal colic/twisting",
    aliases: [
      "ileus",
      "paralytic ileus",
      "adynamic ileus",
      "functional ileus",
      "nonobstructive ileus",
      "postoperative ileus",
    ],
    definition:
      "Functional failure of coordinated intestinal motility without a mechanical luminal obstruction — bowel contents and gas accumulate proximal to the hypomotile segment.",
    pathophysiology:
      "Inflammation, surgery, electrolyte derangements, opioids, or peritoneal irritation disrupt enteric neural/hormonal motility → coordinated peristalsis stops → gas and fluid accumulate → abdominal distension, nausea, and absent propagated bowel sounds; distinguish from mechanical obstruction where a physical barrier blocks the lumen.",
    classicPresentation: [
      "Abdominal distension and diffuse discomfort",
      "Nausea, vomiting (often bilious if prolonged)",
      "Absent or hypoactive bowel sounds",
      "No passage of flatus or stool",
      "Recent abdominal surgery, opioid use, electrolyte abnormality, or peritonitis",
    ],
    keyFindings: [
      "Diffuse abdominal distension without focal peritoneal signs (unless underlying cause)",
      "Hypoactive or absent bowel sounds",
      "Abdominal X-ray — dilated small and large bowel loops with air in colon/rectum (vs cutoff in mechanical SBO)",
      "CT — dilated bowel without transition point if paralytic; identifies mechanical cause if present",
    ],
    keyLabs: [
      "Electrolytes — hypokalemia, hypercalcemia, hyponatremia impair motility",
      "Magnesium",
      "Medication review — opioids, anticholinergics",
    ],
    associations: [
      "Postoperative state — most common cause after abdominal surgery",
      "Opioids and anticholinergic drugs",
      "Electrolyte disturbances (hypokalemia, hypercalcemia)",
      "Peritonitis, pancreatitis, pneumonia (reflex ileus)",
      "Sepsis and critical illness",
    ],
    complications: [
      "Aspiration from vomiting",
      "Bowel ischemia if superimposed closed-loop or prolonged distension (rare in pure ileus)",
      "Malnutrition and dehydration",
      "Aspiration pneumonia",
    ],
    distinguishFrom: [
      "Small bowel obstruction — high-pitched or hyperactive early sounds, transition point on CT, no colonic air distal to obstruction",
      "Large bowel obstruction — marked colonic dilation, often absent rectal air; tumor or volvulus",
      "Gallstone ileus — mechanical SBO from ectopic gallstone; Rigler triad on imaging",
      "Meconium ileus — neonatal mechanical obstruction in cystic fibrosis",
      "Hirschsprung disease — functional obstruction from aganglionosis, not paralytic ileus",
    ],
    treatment: [
      "NPO, nasogastric decompression if severe distension or vomiting",
      "IV fluids and correct electrolytes (especially K⁺, Mg²⁺)",
      "Minimize opioids; treat underlying cause (infection, pancreatitis)",
      "Early ambulation after surgery to reduce postoperative ileus duration",
      "Mechanical obstruction — surgery; ileus alone does not require operation",
    ],
    boardsPearls: [
      "Ileus = hypomotility without mechanical blockage; obstruction = physical barrier",
      "Postoperative ileus — diffuse dilation with air in colon distinguishes from SBO",
      "Hypokalemia and opioids are classic reversible causes",
      "Gallstone ileus is mechanical obstruction (not paralytic ileus) — cholecystoenteric fistula",
      "NG tube, NPO, fluids, electrolyte repletion — supportive management for paralytic ileus",
    ],
    pediatrics:
      "Meconium ileus in CF is mechanical obstruction from inspissated meconium, not paralytic ileus. Neonatal paralytic ileus may follow necrotizing enterocolitis or sepsis; evaluate for Hirschsprung if chronic constipation and failure to pass meconium.",
  },
  {
    id: "intestinal-perforation",
    name: "Intestinal Perforation",
    etymology: "Latin intestinum = internal gut + perforare = bore through",
    aliases: [
      "intestinal perforation",
      "bowel perforation",
      "gi perforation",
      "gastrointestinal perforation",
      "colon perforation",
      "perforated viscus",
      "perforated bowel",
      "free perforation",
    ],
    definition:
      "Full-thickness defect in the gastrointestinal wall allowing intraluminal contents to leak into the peritoneal cavity (or retroperitoneum), causing chemical and bacterial peritonitis — a surgical emergency.",
    pathophysiology:
      "Mucosal injury, ischemia, distension, or invasive procedure breaches the bowel wall → escape of gas, fluid, and bacteria → localized phlegmon or diffuse peritonitis, sepsis, and hemodynamic collapse if untreated.",
    classicPresentation: [
      "Sudden severe abdominal pain with peritoneal signs (rebound, guarding, rigidity)",
      "Fever, tachycardia, hypotension as sepsis evolves",
      "History of PUD, diverticulitis, appendicitis, colonoscopy, trauma, or malignancy",
      "Shoulder pain (diaphragmatic irritation from free air)",
      "Absent bowel sounds in diffuse peritonitis",
    ],
    keyFindings: [
      "Upright chest X-ray or left lateral decubitus film — free intraperitoneal air (pneumoperitoneum) under diaphragm",
      "CT — extraluminal air, fluid, bowel wall defect, adjacent inflammation",
      "Board-like rigidity, rebound tenderness",
    ],
    keyLabs: [
      "Leukocytosis with left shift; lactate ↑ in sepsis",
      "Blood cultures",
      "Metabolic acidosis with advanced sepsis",
    ],
    associations: [
      "Peptic ulcer disease perforation (anterior duodenal ulcer — sudden epigastric pain)",
      "Diverticulitis (free perforation)",
      "Appendicitis",
      "Ischemic bowel, toxic megacolon (UC)",
      "Colonoscopy complication, foreign body, trauma",
      "Typhoid (Salmonella) ileal perforation",
    ],
    complications: [
      "Diffuse peritonitis and sepsis/septic shock",
      "Abscess formation",
      "Adhesions and bowel obstruction",
      "Multiorgan failure and death if delayed",
    ],
    distinguishFrom: [
      "Localized diverticulitis without free air — contained perforation/phlegmon",
      "Pancreatitis — epigastric pain radiating to back; no pneumoperitoneum unless complication",
      "Gastroenteritis — diffuse cramps without peritoneal signs or free air",
      "Cholecystitis — RUQ pain, Murphy sign; no bowel perforation",
      "Pneumoperitoneum from recent surgery — postoperative free air for days; clinical context matters",
    ],
    treatment: [
      "NPO, IV fluids, broad-spectrum antibiotics covering gut flora (gram-negatives + anaerobes)",
      "Urgent surgical consultation — repair, resection, or diversion (Hartmann)",
      "Source control — washout, drain abscess",
      "Supportive care for sepsis",
    ],
    boardsPearls: [
      "Sudden abdominal pain + rigid abdomen → perforated viscus until proven otherwise",
      "Free air under diaphragm on upright CXR = pneumoperitoneum (90% sensitive if upright)",
      "Anterior duodenal ulcer perforation — sudden epigastric pain, board-like abdomen",
      "Diverticulitis perforation — LLQ pain with peritonitis",
      "vs post-op pneumoperitoneum — expected briefly after laparotomy; correlate with exam",
      "Typhoid ileal perforation — classic in untreated Salmonella typhi",
    ],
    pediatrics:
      "Appendicitis is the most common cause of perforation in children; typhoid ileal perforation in endemic areas. Pneumoperitoneum on upright film is equally diagnostic; surgical urgency is the same.",
  },
  {
    id: "pneumonia",
    name: "Pneumonia",
    etymology: "Greek pneumon = lung + -ia = condition",
    aliases: [
      "pneumonia",
      "pneumonias",
      "community-acquired pneumonia",
      "cap",
      "hospital-acquired pneumonia",
      "hap",
      "lobar pneumonia",
      "bronchopneumonia",
      "atypical pneumonia",
      "walking pneumonia",
    ],
    definition:
      "Acute infection of the lung parenchyma causing alveolar inflammation and consolidation, presenting with respiratory symptoms and infiltrates on imaging.",
    pathophysiology:
      "Aspiration or inhalation of pathogens → alveolar macrophage response → exudate fills alveoli → consolidation impairs gas exchange; inflammatory mediators cause fever, cough, and dyspnea; severe disease → sepsis, parapneumonic effusion, or empyema.",
    classicPresentation: [
      "Fever, productive cough, pleuritic chest pain, dyspnea",
      "Crackles, bronchial breath sounds, dullness to percussion over consolidation",
      "Lobar infiltrate on chest X-ray (typical bacterial)",
      "Elderly or immunocompromised may lack fever; confusion as presenting sign",
    ],
    keyFindings: [
      "Focal or lobar consolidation on CXR or CT",
      "Hypoxemia",
      "Pleural effusion if parapneumonic",
    ],
    keyLabs: [
      "Sputum Gram stain and culture (before antibiotics when possible)",
      "Blood cultures in severe CAP or hospital-acquired pneumonia",
      "Procalcitonin may support bacterial etiology (adjunct)",
      "Urinary pneumococcal or Legionella antigen in severe CAP",
    ],
    associations: [
      "Community-acquired: Streptococcus pneumoniae (most common), H. influenzae, M. catarrhalis, atypicals (Mycoplasma, Chlamydia, Legionella)",
      "Aspiration — anaerobes and oral flora",
      "Hospital-acquired — gram-negatives (Pseudomonas, Klebsiella), S. aureus including MRSA",
      "Klebsiella in alcoholics (currant jelly sputum)",
      "Pneumocystis jirovecii in HIV (CD4 <200)",
      "Viral pneumonia — influenza, RSV, SARS-CoV-2",
    ],
    complications: [
      "Parapneumonic effusion and empyema",
      "Lung abscess",
      "Sepsis and respiratory failure",
      "ARDS in severe cases",
    ],
    distinguishFrom: [
      "Acute bronchitis — no consolidation on imaging",
      "Congestive heart failure — cardiomegaly, Kerley B lines, BNP ↑, bilateral interstitial edema",
      "Pulmonary embolism — sudden dyspnea, clear lungs or wedge infarct, not typical lobar consolidation",
      "Tuberculosis — subacute, upper lobe cavitary disease",
      "Atypical vs typical — Mycoplasma walking pneumonia; Legionella with hyponatremia and diarrhea",
    ],
    treatment: [
      "Empiric antibiotics tailored to setting (outpatient CAP: amoxicillin or macrolide/doxycycline; inpatient: β-lactam + macrolide or fluoroquinolone)",
      "Supportive care — oxygen, fluids, antipyretics",
      "Drainage for empyema (chest tube)",
      "Vaccination prevention — pneumococcal and influenza vaccines",
    ],
    boardsPearls: [
      "S. pneumoniae — #1 cause of CAP; rust-colored sputum, lobar consolidation",
      "Mycoplasma — walking pneumonia, cold agglutinins, macrolides",
      "Legionella — hyponatremia, diarrhea, urinary antigen, needs macrolide/fluoroquinolone (not β-lactam alone)",
      "Klebsiella + alcoholic — currant jelly sputum",
      "Pneumonia + effusion → thoracentesis; complicated effusion needs chest tube",
      "Pneumocystis in AIDS — diffuse interstitial infiltrates, ↑ LDH, TMP-SMX treatment",
    ],
    pediatrics:
      "S. pneumoniae, H. influenzae (type b reduced by vaccine), and viruses (RSV) are common in children; parapneumonic effusion and empyema occur; amoxicillin first line for uncomplicated CAP; atypical coverage with macrolide when indicated.",
  },
  {
    id: "pressure-ulcer",
    name: "Pressure Ulcer",
    etymology: "Latin pressura = pressing + ulcus = sore",
    aliases: [
      "pressure ulcer",
      "pressure ulcers",
      "pressure sore",
      "pressure sores",
      "decubitus ulcer",
      "decubitus ulcers",
      "bedsore",
      "bedsores",
      "bed sore",
      "bed sores",
    ],
    definition:
      "Localized skin and soft-tissue injury from sustained pressure (often combined with shear and moisture) over bony prominences, causing ischemic necrosis — common in immobilized or neurologically impaired patients.",
    pathophysiology:
      "Prolonged external pressure exceeds capillary perfusion pressure (~32 mmHg) over bone → tissue ischemia → inflammation and necrosis progressing from superficial skin to subcutaneous fat, muscle, and bone; friction and moisture accelerate breakdown.",
    classicPresentation: [
      "Erythema or open wound over sacrum, heels, greater trochanters, ischium, or occiput",
      "Patient with immobility — spinal cord injury, stroke, dementia, ICU stay",
      "Pain at site if sensation intact",
      "Malodorous drainage if infected",
    ],
    keyFindings: [
      "Staging by depth — nonblanchable erythema (stage 1) to full-thickness tissue loss with exposed bone (stage 4)",
      "Unstageable if eschar covers base",
      "Probe to bone raises suspicion for osteomyelitis",
    ],
    keyLabs: [
      "Wound culture if infection suspected (treat clinical infection, not colonization alone)",
      "ESR/CRP and MRI if osteomyelitis suspected",
      "Albumin/prealbumin — nutritional status (supportive, not diagnostic)",
    ],
    associations: [
      "Immobility, spinal cord injury, advanced age, dementia",
      "Incontinence and moisture-associated skin damage",
      "Malnutrition, diabetes, peripheral vascular disease",
      "Osteomyelitis underlying chronic stage 4 ulcer",
      "Sepsis from cellulitis of ulcer",
    ],
    complications: [
      "Wound infection, cellulitis, abscess",
      "Osteomyelitis",
      "Sepsis",
      "Prolonged hospitalization and increased mortality",
    ],
    distinguishFrom: [
      "Venous stasis ulcer — medial lower leg, irregular borders, edema history",
      "Arterial ulcer — distal toes/pressure points, painful, absent pulses",
      "Diabetic neuropathic ulcer — plantar foot, neuropathy",
      "Moisture-associated dermatitis — intertriginous without sustained pressure over bone",
    ],
    treatment: [
      "Pressure relief — repositioning q2h, specialty support surfaces, offloading heels",
      "Wound care — debridement of necrotic tissue, moist dressings, treat infection",
      "Nutritional optimization (protein, calories)",
      "Surgical flap coverage for deep stage 3–4 ulcers when indicated",
      "Treat osteomyelitis with prolonged antibiotics ± resection",
    ],
    boardsPearls: [
      "Sacrum and heels are highest-risk sites in bedbound patients",
      "Prevention: repositioning, minimize moisture, nutrition — easier than treatment",
      "Stage 4 to bone → think osteomyelitis; probe-to-bone test",
      "Pressure ulcer ≠ venous ulcer (gaiter distribution) or diabetic foot ulcer (plantar)",
      "Shear and friction contribute alongside direct pressure",
    ],
    pediatrics:
      "Pressure injuries occur in neonates (occiput from incubators) and children with spina bifida, cerebral palsy, or prolonged ICU immobilization; same pressure-offloading principles apply with size-appropriate surfaces.",
  },
  {
    id: "bph",
    name: "Benign Prostatic Hyperplasia",
    etymology: "Latin benignus = kind + Greek prostates = standing before + hyper = excess + plasis = formation",
    aliases: [
      "bph",
      "benign prostatic hyperplasia",
      "benign prostatic hypertrophy",
      "benign prostate hyperplasia",
      "enlarged prostate",
      "prostatic enlargement",
      "prostate enlargement",
    ],
    definition:
      "Nonmalignant age-related enlargement of the prostate from hyperplasia of stromal and glandular elements, causing lower urinary tract symptoms from bladder outlet obstruction.",
    pathophysiology:
      "Dihydrotestosterone (DHT) drives stromal and epithelial proliferation in the transition zone → periurethral nodular enlargement → increased urethral resistance → bladder hypertrophy and trabeculation → weak stream, incomplete emptying, and post-void residual; chronic obstruction can lead to hydronephrosis and renal insufficiency.",
    classicPresentation: [
      "Older man with lower urinary tract symptoms (LUTS)",
      "Weak urinary stream, hesitancy, intermittency, dribbling",
      "Frequency, urgency, nocturia",
      "Sensation of incomplete emptying",
      "Acute urinary retention after triggers (anticholinergics, decongestants, alcohol, prolonged holding)",
    ],
    keyFindings: [
      "Smooth, symmetrically enlarged prostate on digital rectal exam (DRE)",
      "↑ Post-void residual volume on bladder scan",
      "Bladder trabeculation or diverticula on imaging if chronic",
      "Hydronephrosis on renal ultrasound if advanced obstruction",
    ],
    keyLabs: [
      "PSA — may be modestly elevated with BPH; marked rise or hard nodule raises cancer concern",
      "Urinalysis — rule out UTI mimicking LUTS",
      "Creatinine/BUN if obstructive uropathy suspected",
    ],
    associations: [
      "Aging and androgen (DHT) dependence",
      "Recurrent UTIs from urinary stasis",
      "Bladder calculi",
      "Obstructive uropathy and chronic kidney disease if untreated",
    ],
    complications: [
      "Acute urinary retention",
      "Recurrent urinary tract infections",
      "Bladder stones",
      "Hydronephrosis and postrenal azotemia",
      "Hematuria (distended venous plexus of prostate)",
    ],
    distinguishFrom: [
      "Prostate cancer — hard, irregular nodule on DRE; biopsy for diagnosis; PSA alone does not distinguish",
      "Urinary tract infection — dysuria, positive urinalysis; may coexist with BPH",
      "Neurogenic bladder — neurologic disease, not smooth symmetric enlargement",
      "Urethral stricture — history of instrumentation/trauma; cystoscopy diagnosis",
      "Overactive bladder without obstruction — urgency/frequency with low post-void residual",
    ],
    treatment: [
      "α₁-blockers (tamsulosin, alfuzosin) — relax prostatic smooth muscle, rapid symptom relief",
      "5α-reductase inhibitors (finasteride, dutasteride) — ↓ DHT, shrink prostate over months; ↓ acute retention risk",
      "Combination therapy for moderate-large glands",
      "TURP or other surgical decompression for refractory symptoms, retention, or complications",
      "Avoid anticholinergics and sympathomimetics that worsen retention",
    ],
    boardsPearls: [
      "BPH = hyperplasia of stromal AND glandular elements in transition zone",
      "DHT (from testosterone via 5α-reductase) drives growth — finasteride blocks this",
      "α₁-blockers (tamsulosin) relax smooth muscle for quick LUTS relief",
      "Smooth enlarged prostate on DRE; cancer = hard irregular nodule",
      "Post-void residual ↑ → obstruction; retention precipitated by anticholinergics/decongestants",
      "vs prostate cancer — BPH is hyperplasia, not adenocarcinoma; PSA can overlap",
    ],
    pediatrics:
      "BPH is an adult disease. Pediatric boys with urinary obstruction — consider posterior urethral valves, phimosis, or neurogenic bladder, not BPH.",
  },
  {
    id: "prostate-adenocarcinoma",
    name: "Prostate Adenocarcinoma",
    etymology: "Greek prostatēs = one standing before + Greek aden = gland + karkinos = crab/malignancy",
    aliases: [
      "prostate adenocarcinoma",
      "prostate cancer",
      "prostate carcinoma",
      "prostatic adenocarcinoma",
      "adenocarcinoma of the prostate",
      "prostate adenocarcinomas",
    ],
    definition:
      "Malignant glandular neoplasm of the prostate, most often arising in the peripheral (posterior) zone and detected via PSA screening, digital rectal exam, or symptoms of local/advanced disease.",
    pathophysiology:
      "Accumulated genetic alterations (TMPRSS2-ERG fusion common) → malignant epithelial proliferation in peripheral zone → local invasion of seminal vesicles/bladder neck, lymphatic spread to pelvic nodes, hematogenous spread to bone (osteoblastic metastases) preferentially.",
    classicPresentation: [
      "Often asymptomatic when localized (screen-detected ↑ PSA or incidental DRE finding)",
      "Lower urinary tract symptoms if bulky or obstructing",
      "Painless hematuria (less common than bladder cancer)",
      "Bone pain, pathologic fracture, or constitutional symptoms if metastatic",
    ],
    keyFindings: [
      "Hard, nodular, irregular prostate on DRE (peripheral zone)",
      "Osteoblastic bone lesions on imaging if metastatic",
      "Gleason score/Grade Group on biopsy defines aggressiveness",
    ],
    keyLabs: [
      "↑ PSA (prostate-specific antigen) — sensitive but not specific",
      "Transrectal ultrasound-guided biopsy for diagnosis",
      "Alkaline phosphatase ↑ with extensive bone metastases",
    ],
    associations: [
      "Older age and family history",
      "African ancestry (higher incidence)",
      "BRCA2 and Lynch syndrome associations",
    ],
    complications: [
      "Local invasion (seminal vesicles, bladder neck, rectum)",
      "Metastasis to bone, lymph nodes, lung, liver",
      "Urinary obstruction and renal failure",
      "Spinal cord compression from vertebral metastases",
    ],
    distinguishFrom: [
      "Benign prostatic hyperplasia — smooth symmetric enlargement in transition zone; LUTS without hard nodule",
      "Prostatitis — tender boggy prostate, fever, ↑ PSA from inflammation",
      "Bladder cancer — painless hematuria primary clue; cystoscopy diagnosis",
    ],
    treatment: [
      "Localized: active surveillance, radical prostatectomy, or radiation therapy based on risk stratification",
      "Advanced/metastatic: androgen deprivation therapy (GnRH agonists/antagonists, antiandrogens)",
    ],
    boardsPearls: [
      "Cancer arises in peripheral (posterior) zone; BPH in transition zone",
      "PSA ↑ in cancer, BPH, and prostatitis — not cancer-specific",
      "Hard irregular nodule on DRE → biopsy",
      "Metastases often osteoblastic (↑ alkaline phosphatase)",
      "TMPRSS2-ERG fusion is classic molecular association",
    ],
    pediatrics:
      "Prostate adenocarcinoma is essentially an adult disease; pediatric prostate tumors are exceedingly rare.",
  },
  {
    id: "prostatitis",
    name: "Prostatitis",
    etymology: "Greek prostatēs = one standing before + -itis = inflammation",
    aliases: [
      "prostatitis",
      "acute prostatitis",
      "chronic prostatitis",
      "acute bacterial prostatitis",
      "chronic bacterial prostatitis",
      "chronic pelvic pain syndrome",
    ],
    definition:
      "Inflammation of the prostate, most often infectious (acute or chronic bacterial) or chronic pelvic pain syndrome, presenting with pelvic/perineal pain, urinary symptoms, and sometimes fever.",
    pathophysiology:
      "Ascending urethral pathogens (E. coli most common) or reflux of infected urine into prostatic ducts → prostatic inflammation and edema → tender enlarged prostate; chronic forms may involve biofilms in prostatic ducts and persistent infection or noninfectious pain syndromes.",
    classicPresentation: [
      "Acute bacterial: fever, chills, dysuria, urinary frequency, perineal/suprapubic/pelvic pain",
      "Tender, boggy, warm prostate on DRE (avoid vigorous massage — risk bacteremia)",
      "Painful hematuria possible",
      "Chronic bacterial: recurrent UTIs, pelvic pain, irritative voiding symptoms",
    ],
    keyFindings: [
      "Exquisitely tender prostate on gentle DRE in acute bacterial prostatitis",
      "Pyuria and bacteriuria",
      "Expressible prostatic secretions with WBCs/bacteria (chronic evaluation)",
    ],
    keyLabs: [
      "Urinalysis and urine culture",
      "↑ PSA during acute inflammation (recheck after treatment)",
      "Blood cultures if septic",
    ],
    associations: [
      "Recent urethral instrumentation or catheterization",
      "Acute epididymitis overlap",
      "Chronic pelvic pain syndrome (NIH category III)",
    ],
    complications: [
      "Bacteremia and sepsis",
      "Acute urinary retention",
      "Chronic pelvic pain",
    ],
    distinguishFrom: [
      "Benign prostatic hyperplasia — nontender smooth enlargement, LUTS without fever",
      "Prostate cancer — hard irregular nodule, usually nontender",
      "Cystitis alone — dysuria without prominent prostate tenderness or perineal pain",
      "Pyelonephritis — flank/CVA tenderness, WBC casts",
    ],
    treatment: [
      "Acute bacterial: fluoroquinolone or TMP-SMX for weeks (lipophilic agents penetrate prostate)",
      "IV antibiotics if septic",
      "Avoid vigorous prostate massage during acute infection",
      "Alpha-blockers and anti-inflammatories for chronic symptom relief",
    ],
    boardsPearls: [
      "Acute prostatitis = fever + dysuria + tender boggy prostate",
      "Fluoroquinolone or TMP-SMX — good prostatic penetration",
      "↑ PSA during prostatitis — recheck after treatment before cancer workup",
      "Do not perform vigorous DRE in acute prostatitis — can precipitate sepsis",
      "Painful hematuria + perineal pain → prostatitis vs cystitis",
    ],
    pediatrics:
      "Prostatitis is rare in prepubertal boys; consider epididymo-orchitis or UTI in pediatric males with dysuria and pelvic pain.",
  },
  {
    id: "hypospadias",
    name: "Hypospadias",
    etymology: "Greek hypo = under + spadon = torn/open → urethral opening on ventral penis below normal glanular location",
    aliases: [
      "hypospadias",
      "hypospadia",
      "ventral urethral opening",
      "congenital hypospadias",
    ],
    definition:
      "Congenital malformation in which the urethral meatus opens on the ventral surface of the penis (glanular, coronal, penile, or perineal) rather than at the tip of the glans, often with ventral curvature (chordee) and incomplete foreskin dorsally.",
    pathophysiology:
      "Failure of urethral fold fusion on the ventral penis during androgen-dependent development (DHT) → ectopic urethral opening; severe forms may reflect androgen synthesis or receptor defects; associated with chordee from ventral skin/structural tethering.",
    classicPresentation: [
      "Urethral opening on ventral penile shaft, corona, or perineum — not at glans tip",
      "Dorsal hood of foreskin with ventral foreskin deficiency",
      "Ventricular curvature (chordee) on erection",
      "Spraying or sitting to urinate in older child",
      "Severe perineal hypospadias — evaluate for disorders of sex development",
    ],
    keyFindings: [
      "Ectopic ventral meatus on exam",
      "Chordee (ventral penile curvature)",
      "Bifid scrotum or undescended testis in severe cases",
    ],
    keyLabs: [
      "Clinical diagnosis at birth or well-child exam",
      "Karyotype and hormone workup if perineal hypospadias, cryptorchidism, or ambiguous genitalia",
    ],
    associations: [
      "Isolated mild glanular/coronal forms most common",
      "Cryptorchidism and inguinal hernia",
      "5α-reductase deficiency or androgen insensitivity in severe forms",
      "Family history of hypospadias",
    ],
    complications: [
      "Functional and cosmetic concerns with voiding and erection",
      "Psychosocial impact if unrepaired",
      "Missed DSD in severe perineal forms",
    ],
    distinguishFrom: [
      "Epispadias — urethral opening on dorsal penis; bladder exstrophy association",
      "Normal variant meatal location — glanular tip is normal",
      "Urethral stricture — acquired, not congenital ventral meatus",
    ],
    treatment: [
      "Surgical urethroplasty and chordee repair, typically after 6–18 months",
      "Do not circumcise before repair — foreskin may be used in reconstruction",
      "Hormone stimulation (testosterone/DHT) in select severe cases before surgery",
    ],
    boardsPearls: [
      "Hypospadias = ventral urethral opening; epispadias = dorsal",
      "Do NOT circumcise before hypospadias repair planning",
      "Chordee often coexists — correct with surgery",
      "Perineal hypospadias + cryptorchidism → evaluate for DSD/androgen pathway defect",
      "DHT-dependent external genital development — links to 5α-reductase deficiency",
    ],
    pediatrics:
      "Most common congenital penile anomaly (~1 in 200 boys); refer to pediatric urology. Severe forms with bifid scrotum or cryptorchidism warrant karyotype and hormone evaluation.",
  },
  {
    id: "erectile-dysfunction",
    name: "Erectile Dysfunction",
    etymology: "Latin erectus = upright + Latin dis- = apart + function = impaired performance",
    aliases: [
      "erectile dysfunction",
      "ed",
      "impotence",
      "male impotence",
      "erectile disorder",
    ],
    definition:
      "Persistent or recurrent inability to achieve or maintain penile erection sufficient for satisfactory sexual performance.",
    pathophysiology:
      "Erection requires parasympathetic-mediated vasodilation (NO → cGMP) in cavernosal arteries and trabecular smooth muscle; failure from vascular insufficiency, neuropathy, low testosterone, medication effects, or psychogenic inhibition → inadequate inflow/trapping of blood in corpora cavernosa.",
    classicPresentation: [
      "Difficulty obtaining or maintaining erection",
      "Reduced rigidity or premature loss of erection",
      "Often gradual onset with vascular/endocrine causes; sudden onset suggests psychogenic component",
      "Associated lower libido if hypogonadal",
    ],
    keyFindings: [
      "Normal external genitalia on exam",
      "Reduced testicular size or gynecomastia if hypogonadal",
      "Peripheral neuropathy or vascular disease signs",
    ],
    keyLabs: [
      "Morning testosterone (especially if ↓ libido, small testes)",
      "Fasting glucose/HbA1c — diabetes mellitus",
      "Lipid panel — atherosclerotic risk",
      "Consider prolactin if low testosterone",
    ],
    associations: [
      "Diabetes mellitus — microvascular and autonomic neuropathy",
      "Atherosclerosis and hypertension",
      "Hyperprolactinemia and hypogonadism",
      "Depression and psychogenic ED",
      "Medications — β-blockers, SSRIs, antihypertensives, finasteride",
      "Pelvic surgery/radiation, spinal cord injury",
      "Chronic kidney disease and liver disease",
    ],
    complications: [
      "Relationship distress and reduced quality of life",
      "Marker of underlying cardiovascular disease (endothelial dysfunction)",
    ],
    distinguishFrom: [
      "Normal transient failure from fatigue, alcohol, or situational stress",
      "Low libido from depression or hypogonadism — desire problem vs erectile mechanism",
      "Premature ejaculation — erection present but timing problem",
      "Peyronie disease — painful curvature may prevent intercourse but erection may be intact",
    ],
    treatment: [
      "Treat underlying cause (glycemic control, testosterone if hypogonadal, adjust medications)",
      "PDE5 inhibitors (sildenafil, tadalafil) — ↑ cGMP-mediated vasodilation; contraindicated with nitrates",
      "Lifestyle: exercise, weight loss, smoking cessation",
      "Psychotherapy if psychogenic component",
      "Second-line: intracavernosal alprostadil, vacuum devices, penile implants",
    ],
    boardsPearls: [
      "Parasympathetic (S2–S4) → erection via NO/cGMP; sympathetic → emission/ejaculation",
      "PDE5 inhibitors (sildenafil) block cGMP breakdown — do NOT combine with nitrates (hypotension)",
      "Diabetes + ED → vascular and neuropathic causes",
      "Sudden onset + situational pattern → psychogenic; gradual → organic",
      "ED may precede coronary artery disease (shared endothelial dysfunction)",
    ],
    pediatrics:
      "Not applicable to prepubertal children; adolescent ED is uncommon — evaluate for anxiety, substance use, and organic causes if persistent.",
  },
  {
    id: "peyronie-disease",
    name: "Peyronie Disease",
    etymology: "eponym: François de la Peyronie + disease = disordered function",
    aliases: [
      "peyronie disease",
      "peyronie's disease",
      "peyronies disease",
      "penile fibromatosis",
      "penile curvature",
      "induratio penis plastica",
    ],
    definition:
      "Acquired fibrotic disorder of the tunica albuginea causing penile plaque, painful erection, and abnormal curvature that may impair intercourse.",
    pathophysiology:
      "Repeated microtrauma to tunica albuginea during intercourse → fibrin deposition and abnormal wound healing → collagen-rich plaque → inelastic tethering → curvature and pain with erection; may resolve partially in chronic phase.",
    classicPresentation: [
      "Middle-aged man with painful erection and palpable penile plaque",
      "Penile curvature (dorsal, ventral, or lateral) during erection",
      "Difficulty with intercourse due to curvature or pain",
      "Erectile dysfunction may coexist",
    ],
    keyFindings: [
      "Palpable fibrous plaque on tunica albuginea (often dorsal midshaft)",
      "Penile curvature on erection (clinical or photograph)",
    ],
    keyLabs: [
      "Clinical diagnosis — imaging rarely needed",
      "Evaluate comorbid ED with history/exam",
    ],
    associations: [
      "Dupuytren contracture (palmar fascial fibrosis)",
      "Ledderhose disease (plantar fibromatosis)",
      "Diabetes and erectile dysfunction",
      "Hypertension and ischemic cardiopathy",
    ],
    complications: [
      "Erectile dysfunction",
      "Psychological distress",
      "Penile shortening or hourglass deformity",
    ],
    distinguishFrom: [
      "Congenital chordee — present from birth, often with hypospadias",
      "Penile fracture — acute trauma during intercourse, sudden pop and hematoma",
      "Penile cancer — ulcerated or fungating mass, not fibrous plaque",
      "Normal slight curvature — no plaque or pain",
    ],
    treatment: [
      "Observation in mild stable disease",
      "Oral pentoxifylline or collagenase clostridium histolyticum (collagenase injections) in selected cases",
      "Surgical plication or grafting for severe fixed curvature",
      "Treat comorbid ED (PDE5 inhibitors if appropriate)",
    ],
    boardsPearls: [
      "Peyronie = tunica albuginea fibrous plaque → painful curvature",
      "Associated with Dupuytren contracture (connective tissue fibromatosis)",
      "vs congenital chordee — hypospadias context, lifelong",
      "vs penile fracture — acute traumatic event during sex",
    ],
    pediatrics:
      "Acquired Peyronie disease is an adult disorder; congenital ventral curvature (chordee) is evaluated in infancy with hypospadias repair.",
  },
  {
    id: "penile-cancer",
    name: "Penile Cancer",
    etymology: "Latin penis = tail + Latin cancer = crab/tumor",
    aliases: [
      "penile cancer",
      "penile carcinoma",
      "penile squamous cell carcinoma",
      "cancer of the penis",
      "carcinoma of the penis",
    ],
    definition:
      "Malignant neoplasm of the penis, overwhelmingly squamous cell carcinoma arising from penile epithelium, often linked to HPV infection and lack of circumcision.",
    pathophysiology:
      "Chronic inflammation, phimosis with poor hygiene, and high-risk HPV (especially HPV-16) promote dysplasia of penile squamous epithelium → carcinoma in situ (Bowen disease, erythroplasia of Queyrat) → invasive squamous cell carcinoma with local invasion and inguinal lymph node metastasis.",
    classicPresentation: [
      "Painless or painful penile lesion — ulcer, nodule, or verrucous mass on glans or foreskin",
      "Persistent lesion despite topical therapy",
      "Inguinal lymphadenopathy if metastatic",
      "Older uncircumcised man with phimosis obscuring lesion",
    ],
    keyFindings: [
      "Indurated ulcer or exophytic mass on penis",
      "Nonhealing glans or foreskin lesion",
      "Palpable inguinal nodes (firm, not always tender)",
    ],
    keyLabs: [
      "Biopsy for histologic diagnosis",
      "HPV association on pathology/PCR in research/clinical context",
      "Staging imaging if nodal disease suspected",
    ],
    associations: [
      "HPV infection (HPV-16)",
      "Lack of neonatal circumcision",
      "Phimosis and poor genital hygiene",
      "Lichen sclerosus (balanitis xerotica obliterans)",
      "Smoking and immunosuppression",
    ],
    complications: [
      "Inguinal and pelvic lymph node metastasis",
      "Local destruction of penile tissue",
      "Need for partial or total penectomy in advanced disease",
    ],
    distinguishFrom: [
      "Genital herpes — painful grouped vesicles on erythematous base; episodic",
      "Primary syphilis (chancre) — painless ulcer with indurated base; serology",
      "Balanitis — diffuse inflammation, responds to hygiene/antifungal",
      "Bowenoid papulosis — benign HPV-related papules in younger men",
    ],
    treatment: [
      "Local excision, glansectomy, or partial penectomy for early disease",
      "Inguinal lymph node dissection or sentinel node biopsy if nodal involvement",
      "Chemotherapy/radiation for advanced or unresectable disease",
    ],
    boardsPearls: [
      "Penile cancer = squamous cell carcinoma; HPV and phimosis are major risk factors",
      "Circumcision ↓ risk — relates to hygiene and HPV exposure",
      "Painless penile ulcer — cancer and syphilis on differential (biopsy vs serology)",
      "Erythroplasia of Queyrat (glans) and Bowen disease (shaft) = carcinoma in situ",
      "Inguinal nodes are first metastatic site",
    ],
    pediatrics:
      "Penile cancer is extremely rare in children; persistent genital lesions in adolescents warrant biopsy. HPV vaccination prevents high-risk oncogenic strains.",
  },
  {
    id: "phimosis",
    name: "Phimosis",
    etymology: "Greek phimos = muzzle → tight foreskin unable to retract over glans",
    aliases: [
      "phimosis",
      "physiologic phimosis",
      "pathologic phimosis",
      "tight foreskin",
      "nonretractile foreskin",
    ],
    definition:
      "Inability to retract the foreskin over the glans penis — physiologic (normal) in young boys or pathologic from scarring, infection, or balanitis xerotica obliterans.",
    pathophysiology:
      "Physiologic: normal adhesions between inner prepuce and glans resolve with age. Pathologic: recurrent balanoposthitis, lichen sclerosus (BXO), or forced retraction causes preputial fibrosis and a tight phimotic ring → nonretractile foreskin, voiding difficulty, and infection risk.",
    classicPresentation: [
      "Nonretractile foreskin — normal in infants/toddlers if physiologic",
      "Ballooning of foreskin with urination in boys",
      "Recurrent balanitis or posthitis",
      "White sclerotic ring at preputial opening in lichen sclerosus (BXO)",
      "Adult: difficulty with hygiene and intercourse",
    ],
    keyFindings: [
      "Tight preputial opening; inability to expose glans",
      "White scarred preputial ring in BXO",
      "Erythema and discharge if superinfected",
    ],
    keyLabs: [
      "Clinical diagnosis",
      "Biopsy if lichen sclerosus suspected or atypical lesion under phimosis",
    ],
    associations: [
      "Physiologic phimosis in childhood — resolves by puberty in most",
      "Balanitis xerotica obliterans (lichen sclerosus)",
      "Recurrent balanoposthitis",
      "Increased penile cancer risk if chronic pathologic phimosis (poor hygiene, chronic inflammation)",
      "Urinary tract infection in boys with severe obstruction",
    ],
    complications: [
      "Paraphimosis if foreskin forced back and trapped",
      "Urinary retention or ballooning",
      "Penile cancer risk with chronic BXO/phimosis",
    ],
    distinguishFrom: [
      "Paraphimosis — retracted foreskin trapped behind glans; emergency",
      "Normal nonretractile foreskin in young child — physiologic, no scarring",
      "Hidden penis or buried penis — adipose or congenital, not preputial ring",
    ],
    treatment: [
      "Physiologic phimosis in children — reassurance, topical corticosteroids if symptomatic",
      "Pathologic phimosis or BXO — circumcision or preputioplasty",
      "Treat superimposed infection (topical antifungal/antibacterial)",
      "Do not forcefully retract foreskin in children — risks paraphimosis and scarring",
    ],
    boardsPearls: [
      "Physiologic phimosis is normal in young boys — most resolve spontaneously",
      "Pathologic phimosis = scarring (BXO) — may need circumcision",
      "Phimosis ↑ penile cancer risk (chronic inflammation, poor hygiene)",
      "Topical steroids can treat mild symptomatic phimosis in children",
      "vs paraphimosis — phimosis cannot retract; paraphimosis cannot reduce",
    ],
    pediatrics:
      "Most boys have physiologic phimosis until age 5–10; avoid forceful retraction. BXO causes white scarred ring — urology referral for circumcision. Severe ballooning or UTIs may warrant treatment.",
  },
  {
    id: "paraphimosis",
    name: "Paraphimosis",
    etymology: "Greek para = beside/beyond + phimos = muzzle → foreskin retracted and trapped proximal to glans",
    aliases: [
      "paraphimosis",
      "trapped foreskin",
      "strangulated foreskin",
      "retracted foreskin",
    ],
    definition:
      "Urologic emergency in which the retracted foreskin cannot be returned over the glans, causing a constricting band, venous/lymphatic obstruction, edema, and risk of glans ischemia.",
    pathophysiology:
      "Foreskin retracted behind corona (often after catheterization, exam, or forced retraction) → tight ring compresses glans → impaired venous and lymphatic drainage → progressive glans and prepuce edema → worsening constriction → arterial compromise if untreated.",
    classicPresentation: [
      "Painful swollen glans with retracted foreskin trapped behind coronal sulcus",
      "Edematous preputial ring — \"donut\" appearance",
      "Often after urinary catheter placement without foreskin reduction",
      "Child or uncircumcised adult after manipulation",
    ],
    keyFindings: [
      "Retracted foreskin fixed behind glans",
      "Edematous, painful glans",
      "Constricting band at neck of penis",
    ],
    keyLabs: [
      "Clinical diagnosis — no labs required for diagnosis",
    ],
    associations: [
      "Iatrogenic — Foley catheter placed without reducing foreskin",
      "Forced retraction of physiologic phimosis",
      "Underlying phimosis",
    ],
    complications: [
      "Glans ischemia and necrosis if prolonged",
      "Requires emergency reduction or surgical dorsal slit/circumcision",
    ],
    distinguishFrom: [
      "Phimosis — foreskin cannot be retracted at all; no trapped edematous ring behind glans",
      "Penile fracture — trauma during intercourse, ecchymosis, detumescence",
      "Allergic/contact balanitis — diffuse inflammation without constricting band",
    ],
    treatment: [
      "Manual reduction: compress edema (gauze/sugar/saline), then push glans while advancing foreskin",
      "Pain control and topical anesthetic if needed",
      "Dorsal slit or emergency circumcision if manual reduction fails",
      "Always reduce foreskin after catheterization or genital exam in uncircumcised patients",
    ],
    boardsPearls: [
      "Paraphimosis = urologic emergency — reduce foreskin promptly",
      "After Foley in uncircumcised male — MUST replace foreskin over glans",
      "Edematous glans + retracted foreskin behind corona = paraphimosis",
      "vs phimosis — cannot retract vs retracted and stuck",
      "Manual reduction before surgical dorsal slit",
    ],
    pediatrics:
      "Same emergency in children — often follows forced retraction or catheterization without reduction. Teach parents not to force retract foreskin; reduce immediately if paraphimosis occurs.",
  },
  {
    id: "fecal-incontinence",
    name: "Fecal Incontinence",
    etymology: "Latin faex = dregs/stool + in- = not + continere = hold together",
    aliases: [
      "fecal incontinence",
      "faecal incontinence",
      "bowel incontinence",
      "anal incontinence",
      "stool incontinence",
      "fecal soiling",
    ],
    definition:
      "Involuntary loss of liquid or solid stool (or inability to control flatus) beyond the age of expected continence — reflects disruption of anal sphincter function, rectal compliance/capacity, or neurologic control.",
    pathophysiology:
      "Normal continence requires intact internal/external anal sphincters, rectal sensation, and sacral reflex arc (S2–S4); injury or dysfunction at any level → leakage — obstetric sphincter tears, pudendal neuropathy (diabetes), spinal cord lesions, dementia, or overflow from severe constipation with liquid stool bypassing impaction.",
    classicPresentation: [
      "Involuntary passage of stool or inability to defer defecation",
      "Overflow pattern — constipation, hard stool, then seepage of liquid stool (elderly on opioids)",
      "Neurogenic — spinal cord injury, cauda equina, stroke, diabetic neuropathy",
      "Postpartum woman with prior obstetric tear or forceps delivery",
      "Associated urgency if irritable bowel or inflammatory diarrhea",
    ],
    keyFindings: [
      "Reduced anal resting tone or squeeze pressure on exam",
      "Patulous anus or visible sphincter defect (obstetric injury)",
      "Impacted stool on rectal exam in overflow incontinence",
      "Neurologic deficits — saddle anesthesia, ↓ anal wink reflex (S2–S4)",
    ],
    keyLabs: [
      "No specific diagnostic lab — workup is clinical and anatomic",
      "Glucose/HbA1c if diabetic neuropathy suspected",
      "Stool studies if infectious diarrhea cause",
      "Colonoscopy if bloody diarrhea, weight loss, or new onset >40 years",
    ],
    associations: [
      "Overflow incontinence — chronic constipation, opioids, immobility",
      "Obstetric anal sphincter injury (third/fourth-degree laceration)",
      "Diabetic autonomic neuropathy",
      "Spinal cord injury, cauda equina syndrome, multiple sclerosis",
      "Dementia and severe mobility impairment",
      "Inflammatory bowel disease with urgency",
      "Prior anal surgery or radiation",
    ],
    complications: [
      "Perianal skin breakdown and infection",
      "Social isolation and impaired quality of life",
      "Aspiration risk if comorbid dysphagia in elderly (fecaloral hygiene issues)",
    ],
    distinguishFrom: [
      "Encopresis — voluntary or semi-voluntary soiling in child with chronic constipation (behavioral component)",
      "Diarrhea alone — increased stool frequency without primary sphincter failure",
      "Urinary incontinence — different sphincter mechanism; may coexist",
      "Rectovaginal fistula — stool from vagina, not through anus",
      "Hemorrhoidal leakage — mucus staining, not full stool incontinence",
    ],
    treatment: [
      "Overflow — disimpaction, bowel regimen (fiber, osmotic laxatives), treat opioids/immobility",
      "Neurogenic — scheduled bowel program, antidiarrheals if loose stools, sacral neuromodulation in selected cases",
      "Sphincter defect — surgical repair (sphincteroplasty)",
      "Skin protection, pelvic floor biofeedback",
      "Treat underlying neurologic or IBD cause",
    ],
    boardsPearls: [
      "Overflow incontinence — constipation + liquid stool seepage around impaction (elderly, opioids)",
      "Obstetric trauma — third/fourth-degree tear damages external anal sphincter",
      "Sacral roots S2–S4 — anal wink reflex and external sphincter control",
      "Diabetic neuropathy and spinal cord injury — neurogenic bowel incontinence",
      "vs encopresis — pediatric soiling with chronic constipation; behavioral + bowel regimen",
      "Cauda equina — saddle anesthesia, urinary retention, bilateral leg weakness + incontinence",
    ],
    pediatrics:
      "Encopresis often follows chronic constipation with retentive behavior — disimpaction and maintenance laxatives (not punishment). Evaluate for Hirschsprung disease if onset in infancy with failure to pass meconium; spina bifida if neurogenic signs present.",
  },
  {
    id: "pyelonephritis",
    name: "Pyelonephritis",
    etymology: "Greek pyelos = renal pelvis/basin + nephros = kidney + -itis = inflammation",
    aliases: [
      "pyelonephritis",
      "acute pyelonephritis",
      "upper urinary tract infection",
      "upper uti",
      "kidney infection",
      "renal infection",
    ],
    definition:
      "Acute bacterial infection of the renal parenchyma and pelvis (upper UTI), usually from ascending uropathogens, presenting with fever and flank pain.",
    pathophysiology:
      "E. coli (P-fimbriae) ascends from bladder or urethra → infection of renal tubules/interstitium → WBC casts form in tubules; vesicoureteral reflux, obstruction, pregnancy, diabetes, and catheterization increase risk; hematogenous spread is less common (S. aureus in endocarditis/IVDU).",
    classicPresentation: [
      "Fever, chills, flank pain, costovertebral angle (CVA) tenderness",
      "Nausea, vomiting",
      "May have concurrent dysuria, frequency (lower tract symptoms)",
      "Ill-appearing patient vs comfortable cystitis",
      "Pregnant woman with fever and back pain — treat as pyelonephritis until proven otherwise",
    ],
    keyFindings: [
      "CVA tenderness on percussion",
      "Fever and systemic symptoms",
      "WBC casts on urinalysis — upper tract localization",
    ],
    keyLabs: [
      "Urinalysis — pyuria, bacteriuria, WBC casts, nitrites (gram-negatives)",
      "Urine culture (>10⁵ CFU/mL typical; lower thresholds in symptomatic catheter urine)",
      "Blood cultures if septic or hospitalized",
      "CBC — leukocytosis with left shift",
    ],
    associations: [
      "E. coli — most common organism",
      "Proteus, Klebsiella, Enterococcus",
      "Diabetes — emphysematous pyelonephritis risk (gas-forming organisms)",
      "Nephrolithiasis and obstruction",
      "Vesicoureteral reflux (especially children)",
      "Pregnancy — physiologic hydronephrosis predisposes",
      "Indwelling urinary catheter",
    ],
    complications: [
      "Urosepsis and septic shock",
      "Renal abscess or perinephric abscess",
      "Emphysematous pyelonephritis (diabetics; gas on imaging)",
      "Papillary necrosis (sickle cell, diabetes, NSAIDs, obstruction)",
      "Chronic pyelonephritis and renal scarring (reflux nephropathy in children)",
    ],
    distinguishFrom: [
      "Acute cystitis — dysuria and suprapubic pain without fever/flank/CVA tenderness; no WBC casts",
      "Nephrolithiasis — colicky flank pain, hematuria; may coexist or secondarily infect",
      "Appendicitis/diverticulitis — GI primary; urinalysis usually without WBC casts",
      "Perinephric abscess — persistent fever despite antibiotics; CT diagnosis",
      "Acute prostatitis — tender prostate, pelvic/perineal pain in men",
    ],
    treatment: [
      "Outpatient (mild, reliable follow-up): fluoroquinolone (ciprofloxacin/levofloxacin) or oral cephalosporin depending on resistance",
      "Inpatient/severe: IV ceftriaxone, piperacillin-tazobactam, or carbapenem per severity and resistance",
      "Longer antibiotic course than cystitis (typically 7–14 days)",
      "Relieve obstruction (stone, catheter management) if present",
      "Drain abscess if complicated",
    ],
    boardsPearls: [
      "WBC casts = pyelonephritis (formed in renal tubules)",
      "E. coli #1; P fimbriae mediate upper tract ascent",
      "Fever + flank pain + CVA tenderness → pyelonephritis",
      "Emphysematous pyelonephritis — diabetic + gas in kidney on CT; urgent management",
      "Papillary necrosis — sickle cell, diabetes, analgesic abuse, obstruction; ring sign on CT",
      "vs cystitis — systemic symptoms and WBC casts distinguish upper from lower UTI",
      "Nitrofurantoin does NOT achieve adequate renal tissue levels — avoid for pyelonephritis",
    ],
    pediatrics:
      "Febrile UTI in infants and young children is treated as pyelonephritis; evaluate for vesicoureteral reflux and anatomic abnormalities after first febrile UTI (ultrasound ± VCUG per guidelines). Boys with first UTI warrant imaging.",
  },
  {
    id: "urosepsis",
    name: "Urosepsis",
    etymology: "Greek ouron = urine + Greek sepsis = putrefaction/infection",
    aliases: [
      "urosepsis",
      "urinary sepsis",
      "septic uti",
      "septic urinary tract infection",
      "sepsis from uti",
      "sepsis from urinary tract infection",
      "bacteremic uti",
    ],
    definition:
      "Life-threatening systemic inflammatory response to bacterial infection originating in the urinary tract, with bacteremia and risk of septic shock — typically from complicated pyelonephritis, obstructive uropathy, or catheter-associated infection.",
    pathophysiology:
      "Uropathogens (E. coli most common) invade renal parenchyma or infected urine under pressure (obstruction) → bacteremia → endotoxin/cytokine release → systemic inflammatory response → vasodilation, capillary leak, and distributive shock; impaired host defenses (diabetes, obstruction, catheter) increase risk.",
    classicPresentation: [
      "Fever, rigors, tachycardia, hypotension",
      "Flank pain and CVA tenderness (pyelonephritis source)",
      "Altered mental status, especially in elderly",
      "History of nephrolithiasis, BPH, indwelling catheter, or recent urologic procedure",
      "Diabetic patient with severe back pain and gas on imaging → emphysematous pyelonephritis risk",
    ],
    keyFindings: [
      "Signs of sepsis: fever/hypothermia, tachycardia, tachypnea, hypotension",
      "CVA tenderness when renal source",
      "Oliguria or anuria if obstructive component",
    ],
    keyLabs: [
      "Urinalysis — pyuria, bacteriuria, WBC casts (upper tract)",
      "Blood and urine cultures before antibiotics when feasible",
      "↑ WBC with left shift; ↑ lactate; metabolic acidosis in shock",
      "Imaging (CT) if obstruction, abscess, or emphysematous pyelonephritis suspected",
    ],
    associations: [
      "E. coli — most common organism",
      "Proteus, Klebsiella, Enterococcus, Pseudomonas (healthcare-associated)",
      "Urinary obstruction — stone, BPH, malignancy, stricture",
      "Indwelling urinary catheter",
      "Diabetes mellitus — emphysematous pyelonephritis",
      "Pregnancy — pyelonephritis predisposition",
      "Vesicoureteral reflux in children",
    ],
    complications: [
      "Septic shock and multiorgan failure",
      "Renal abscess or perinephric abscess",
      "Acute kidney injury",
      "Disseminated intravascular coagulation",
    ],
    distinguishFrom: [
      "Uncomplicated cystitis — localized dysuria/frequency without systemic toxicity",
      "Non-urinary sepsis — pneumonia, cholangitis, intra-abdominal source; urinalysis may be misleading if catheter colonization",
      "Catheter-associated asymptomatic bacteriuria — colonization without systemic illness (do not treat unless symptomatic)",
      "Transplant pyelonephritis vs rejection — overlapping fever and graft dysfunction",
    ],
    treatment: [
      "Immediate IV broad-spectrum antibiotics (e.g., ceftriaxone, piperacillin-tazobactam; adjust to culture/resistance)",
      "Sepsis resuscitation: IV fluids, vasopressors (norepinephrine) if shock",
      "Source control: relieve obstruction (catheter, stent, nephrostomy), drain abscess",
      "Remove or replace indwelling catheter when feasible",
    ],
    boardsPearls: [
      "Urosepsis = urinary source + systemic infection/sepsis physiology",
      "E. coli #1; obstruction + infection = urosepsis until proven otherwise",
      "WBC casts localize to upper tract pyelonephritis",
      "Emphysematous pyelonephritis in diabetics — gas in kidney on CT; surgical urgency",
      "Obstructed infected kidney needs drainage, not antibiotics alone",
      "vs uncomplicated UTI — fever, hypotension, lactate elevation indicate sepsis",
    ],
    pediatrics:
      "Febrile UTI in infants can rapidly progress to urosepsis; neonates may present with nonspecific lethargy, poor feeding, or hypothermia. Vesicoureteral reflux and congenital anomalies increase risk — urgent cultures and IV antibiotics.",
  },
  {
    id: "primary-biliary-cholangitis",
    name: "Primary Biliary Cholangitis",
    etymology: "Latin primarius = first + bilis = bile + Greek cholangeion = bile vessel + -itis = inflammation",
    aliases: [
      "primary biliary cholangitis",
      "primary biliary cirrhosis",
      "pbc",
      "biliary cholangitis",
    ],
    definition:
      "Chronic autoimmune cholestatic liver disease characterized by progressive destruction of small intrahepatic bile ducts, leading to cholestasis, fibrosis, and eventually cirrhosis.",
    pathophysiology:
      "T-cell–mediated attack on interlobular bile ducts → ductopenia → impaired bile flow → ↑ alkaline phosphatase and conjugated bilirubin → chronic cholestasis, cirrhosis, and portal hypertension over years.",
    classicPresentation: [
      "Middle-aged woman with fatigue and pruritus",
      "Cholestatic LFTs (↑ alk phos, ↑ GGT, later ↑ bilirubin)",
      "Often asymptomatic early; xanthelasma from hypercholesterolemia of cholestasis",
      "Associated autoimmune conditions (Sjögren, Hashimoto thyroiditis)",
    ],
    keyFindings: [
      "Cholestatic pattern on LFTs",
      "Antimitochondrial antibodies (AMA) positive in ~90%",
      "Liver biopsy — florid duct lesion, granulomas, ductopenia (if needed)",
    ],
    keyLabs: [
      "↑ Alkaline phosphatase and GGT (cholestatic)",
      "↑ AMA (anti–pyruvate dehydrogenase complex)",
      "↑ IgM (often)",
      "↑ Bilirubin in advanced disease",
    ],
    associations: [
      "Sjögren syndrome",
      "Hashimoto thyroiditis",
      "Hypercholesterolemia and xanthomas",
      "Osteoporosis from chronic cholestasis",
    ],
    complications: [
      "Cirrhosis and portal hypertension",
      "Hepatic osteodystrophy",
      "Fat-soluble vitamin deficiency (A, D, E, K)",
      "Hepatocellular carcinoma (less common than in other cirrhoses)",
    ],
    distinguishFrom: [
      "Primary sclerosing cholangitis — young men, IBD, large-duct strictures on MRCP, AMA negative",
      "Obstructive choledocholithiasis — acute RUQ pain, dilated CBD on imaging, stones",
      "Drug-induced cholestasis — temporal relation to medication",
      "Extrahepatic biliary obstruction — dilated extrahepatic ducts on ultrasound/MRCP",
    ],
    treatment: [
      "Ursodeoxycholic acid (UDCA) — slows progression; first-line",
      "Obeticholic acid if inadequate response to UDCA",
      "Cholestyramine for pruritus; fat-soluble vitamin replacement",
      "Liver transplant for end-stage disease",
    ],
    boardsPearls: [
      "PBC: middle-aged woman + pruritus + ↑ alk phos + AMA positive",
      "AMA = highly sensitive/specific for PBC on boards",
      "Cholestatic LFTs = ↑ alk phos/GGT disproportionate to transaminases",
      "vs PSC — PSC has IBD, beads-on-a-string MRCP, AMA negative",
      "UDCA is disease-modifying therapy for PBC",
    ],
    pediatrics:
      "PBC is essentially an adult disease. Neonatal cholestasis in infants — think biliary atresia, not PBC.",
  },
  {
    id: "primary-sclerosing-cholangitis",
    name: "Primary Sclerosing Cholangitis",
    etymology: "Latin primarius = first + Greek skleros = hard + cholangeion = bile vessel + -itis = inflammation",
    aliases: [
      "primary sclerosing cholangitis",
      "psc",
      "sclerosing cholangitis",
    ],
    definition:
      "Chronic cholestatic liver disease with inflammation and fibrosis of intra- and extrahepatic bile ducts, causing multifocal strictures and progressive biliary cirrhosis.",
    pathophysiology:
      "Unknown etiology (likely immune-mediated) → fibroinflammatory stricturing of bile ducts → impaired bile drainage → cholestasis, bacterial cholangitis episodes, cirrhosis; strong association with inflammatory bowel disease.",
    classicPresentation: [
      "Young to middle-aged man with chronic cholestatic LFTs",
      "Often discovered during workup of ulcerative colitis",
      "Fatigue, pruritus, jaundice in progressive disease",
      "Recurrent bacterial cholangitis",
    ],
    keyFindings: [
      "MRCP/ERCP — multifocal bile duct strictures and dilations ('beads on a string')",
      "Cholestatic LFT pattern (↑ alk phos, ↑ GGT)",
      "p-ANCA positive in many patients (supportive, not diagnostic)",
    ],
    keyLabs: [
      "↑ Alkaline phosphatase and GGT",
      "↑ Bilirubin with advanced disease",
      "AMA typically negative (distinguishes from PBC)",
    ],
    associations: [
      "Ulcerative colitis (most common IBD association)",
      "Cholangiocarcinoma — lifetime risk markedly increased",
      "Gallbladder cancer",
      "Colorectal cancer (with concomitant UC)",
    ],
    complications: [
      "Dominant strictures and recurrent cholangitis",
      "Biliary cirrhosis and portal hypertension",
      "Cholangiocarcinoma",
      "Need for liver transplantation",
    ],
    distinguishFrom: [
      "Primary biliary cholangitis — women, AMA+, small duct disease",
      "Secondary sclerosing cholangitis — ischemia, prior cholangitis, IgG4-related disease",
      "Choledocholithiasis — filling defect/stone, often acute presentation",
      "Caroli disease — congenital cystic ductal dilatation",
    ],
    treatment: [
      "UDCA may improve LFTs but does not clearly alter outcomes (unlike PBC)",
      "ERCP with dilation of dominant strictures for symptomatic obstruction/cholangitis",
      "Treat underlying UC; surveillance colonoscopy for dysplasia",
      "Surveillance for cholangiocarcinoma (CA 19-9, imaging)",
      "Liver transplant for end-stage disease or cholangiocarcinoma (selected cases)",
    ],
    boardsPearls: [
      "PSC + UC — classic association; p-ANCA supportive",
      "Beads on a string on MRCP = PSC",
      "↑ cholangiocarcinoma risk — RUQ pain + jaundice + weight loss in PSC patient",
      "AMA negative; cholestatic LFTs like PBC but different demographics and imaging",
      "vs PBC — PSC affects large ducts, men + IBD; PBC is AMA+ women",
    ],
    pediatrics:
      "PSC can occur in children with IBD but is less common; neonatal duct disease — consider biliary atresia instead.",
  },
  {
    id: "acute-cholangitis",
    name: "Acute Cholangitis",
    etymology: "Latin acutus = sharp/sudden + Greek cholangeion = bile vessel + -itis = inflammation",
    aliases: [
      "acute cholangitis",
      "ascending cholangitis",
      "suppurative cholangitis",
      "bacterial cholangitis",
      "cholangitis",
    ],
    definition:
      "Bacterial infection of the biliary tree, usually secondary to obstruction (most often choledocholithiasis), presenting with fever, jaundice, and RUQ pain.",
    pathophysiology:
      "Biliary obstruction → stagnant bile and ↑ intraductal pressure → bacterial ascent (E. coli, Klebsiella, Enterococcus, anaerobes) from gut → infection and sepsis; requires urgent biliary drainage.",
    classicPresentation: [
      "Charcot triad: fever, jaundice, RUQ pain",
      "Reynolds pentad adds hypotension and altered mental status (severe/septic)",
      "History of gallstones, prior ERCP, or PSC strictures",
      "Tender RUQ, may have hepatomegaly",
    ],
    keyFindings: [
      "Dilated common bile duct on ultrasound",
      "Choledocholithiasis or stricture on imaging",
      "Fever and systemic inflammatory response",
    ],
    keyLabs: [
      "↑ Alkaline phosphatase, GGT, and conjugated bilirubin (cholestatic/obstructive)",
      "↑ WBC, blood cultures often positive",
      "Transaminases may be mildly elevated",
    ],
    associations: [
      "Choledocholithiasis — most common precipitant",
      "Primary sclerosing cholangitis with strictures",
      "Malignant biliary obstruction (pancreatic head, cholangiocarcinoma)",
      "Post-ERCP or biliary instrumentation",
    ],
    complications: [
      "Septic shock and multiorgan failure",
      "Liver abscess",
      "Recurrent cholangitis if obstruction not relieved",
    ],
    distinguishFrom: [
      "Acute cholecystitis — gallbladder inflammation; ultrasound gallbladder wall thickening, stones in gallbladder; may have normal bilirubin if no CBD stone",
      "Hepatitis — predominant transaminase elevation, less cholestatic pattern",
      "Pancreatitis — epigastric pain radiating to back; may coexist with gallstone passage",
    ],
    treatment: [
      "IV fluids, broad-spectrum antibiotics (piperacillin-tazobactam or ceftriaxone + metronidazole)",
      "Urgent biliary drainage — ERCP with sphincterotomy and stone extraction or stent",
      "Percutaneous transhepatic drainage if ERCP not feasible",
    ],
    boardsPearls: [
      "Charcot triad = fever + jaundice + RUQ pain → cholangitis until proven otherwise",
      "Treat infection AND relieve obstruction (ERCP)",
      "Most commonly secondary to choledocholithiasis",
      "vs cholecystitis — cholangitis has jaundice and cholestatic labs from biliary tree infection",
      "Reynolds pentad = Charcot + hypotension + AMS → severe cholangitis",
    ],
    pediatrics:
      "Ascending cholangitis can complicate choledochal cysts or biliary atresia post-Kasai; same need for antibiotics and drainage.",
  },
  {
    id: "cholelithiasis",
    name: "Cholelithiasis",
    etymology: "Greek chole = bile + lithos = stone + -iasis = condition",
    aliases: [
      "cholelithiasis",
      "gallstone",
      "gallstones",
      "gall stone",
      "gall stones",
      "biliary calculus",
      "biliary calculi",
      "cholesterol gallstone",
      "cholesterol gallstones",
      "pigment gallstone",
      "pigment gallstones",
    ],
    definition:
      "Formation of calculi (stones) in the gallbladder — most commonly cholesterol stones in Western adults, or black/brown pigment stones in hemolysis or biliary stasis.",
    pathophysiology:
      "Cholesterol supersaturation (↓ bile salts or lecithin, ↑ cholesterol) with mucin and calcium bilirubinate nucleation → cholesterol stones; chronic hemolysis or cirrhosis → ↑ unconjugated bilirubin → black pigment stones; biliary infection/stasis → brown pigment stones. Stones may remain asymptomatic or cause biliary colic when cystic duct transiently obstructed.",
    classicPresentation: [
      "Asymptomatic incidental finding on imaging",
      "Biliary colic — postprandial RUQ/epigastric pain after fatty meal, lasting <6 h",
      "Nausea and vomiting during colic",
      "Risk factors: female, fat, fertile, forty (4 F's); obesity, rapid weight loss, Native American or Hispanic ethnicity, Crohn ileal disease",
    ],
    keyFindings: [
      "Echogenic focus with posterior acoustic shadowing in gallbladder on ultrasound",
      "Gallbladder wall thickening or pericholecystic fluid if complicated by cholecystitis",
      "Painless jaundice suggests CBD stone (choledocholithiasis), not uncomplicated cholelithiasis alone",
    ],
    keyLabs: [
      "Usually normal LFTs in uncomplicated disease",
      "↑ Alkaline phosphatase, direct bilirubin if stone migrates to CBD",
      "↑ Amylase/lipase if gallstone pancreatitis",
    ],
    associations: [
      "Obesity, diabetes, metabolic syndrome",
      "Hemolytic anemias (pigment stones)",
      "Crohn disease with terminal ileum resection (↓ bile acid pool)",
      "Oral contraceptives and pregnancy (↓ gallbladder motility)",
      "Native American populations — high cholesterol stone prevalence",
    ],
    complications: [
      "Acute cholecystitis — sustained cystic duct obstruction",
      "Choledocholithiasis and cholangitis",
      "Acute biliary pancreatitis",
      "Gallstone ileus (cholecystoenteric fistula with obstructing gallstone in small bowel)",
      "Gallbladder cancer (chronic inflammation, porcelain gallbladder)",
    ],
    distinguishFrom: [
      "Choledocholithiasis — jaundice, dilated CBD, stone in duct not just gallbladder",
      "Biliary sludge — mobile echogenic material without discrete shadowing stone",
      "Acute hepatitis — transaminase-predominant jaundice, no gallstone on ultrasound",
      "Cholangiocarcinoma — painless progressive jaundice, no stone, older patient",
    ],
    treatment: [
      "Asymptomatic — observation (no prophylactic cholecystectomy routinely)",
      "Symptomatic or complicated — laparoscopic cholecystectomy",
      "Ursodeoxycholic acid may dissolve small cholesterol stones in selected patients",
      "ERCP if concurrent CBD stone",
    ],
    boardsPearls: [
      "4 F's risk factors: female, fat, fertile, forty",
      "Cholesterol stones — most common in US; radiolucent on X-ray",
      "Black pigment stones — chronic hemolysis (sickle cell, spherocytosis); radiopaque",
      "Brown pigment stones — biliary infection and stasis",
      "Biliary colic <6 h vs cholecystitis >6 h RUQ pain with fever and Murphy sign",
      "Gallstone ileus — Rigler triad: pneumobilia, small-bowel obstruction, ectopic gallstone",
    ],
    pediatrics:
      "Gallstones uncommon in children; consider hemolytic disease, total parenteral nutrition, fibrate therapy, or ileal disease. Pigment stones predominate in pediatric hemolysis.",
  },
  {
    id: "choledocholithiasis",
    name: "Choledocholithiasis",
    etymology: "Greek chole = bile + dochos = receiving duct + lithos = stone + -iasis = condition",
    aliases: [
      "choledocholithiasis",
      "cbd stone",
      "cbd stones",
      "common bile duct stone",
      "common bile duct stones",
      "bile duct stone",
      "bile duct stones",
      "choledochal stone",
    ],
    definition:
      "Gallstone(s) lodged in the common bile duct, causing biliary obstruction with cholestatic labs and risk of cholangitis and pancreatitis.",
    pathophysiology:
      "Stone migrates from gallbladder through cystic duct into CBD (or forms de novo in CBD) → obstructs bile flow → ↑ conjugated bilirubin and alk phos; sustained obstruction predisposes to ascending cholangitis and triggers pancreatitis if ampulla occluded.",
    classicPresentation: [
      "RUQ or epigastric pain with jaundice",
      "Fluctuating jaundice if stone intermittently impacts ampulla",
      "History of biliary colic or prior cholecystectomy",
      "May present with cholangitis (fever) or pancreatitis (epigastric pain radiating to back)",
    ],
    keyFindings: [
      "Dilated common bile duct on ultrasound (>6–8 mm, age-dependent)",
      "Stone in distal CBD on ultrasound, MRCP, or ERCP",
      "Cholestatic LFT pattern",
    ],
    keyLabs: [
      "↑ Conjugated (direct) bilirubin",
      "↑ Alkaline phosphatase and GGT",
      "↑ Amylase/lipase if biliary pancreatitis",
    ],
    associations: [
      "Gallstones (cholelithiasis)",
      "Acute cholangitis",
      "Acute biliary pancreatitis",
      "Ascending infection if obstruction persists",
    ],
    complications: [
      "Acute cholangitis and sepsis",
      "Acute pancreatitis",
      "Secondary biliary cirrhosis if chronic obstruction",
    ],
    distinguishFrom: [
      "Choledochal cyst — congenital ductal dilatation, often pediatric",
      "Pancreatic head tumor — painless jaundice, weight loss, dilated ducts without stone",
      "Cholecystitis without CBD stone — gallbladder disease only",
      "Gilbert syndrome — unconjugated hyperbilirubinemia, no duct dilation",
    ],
    treatment: [
      "ERCP with sphincterotomy and stone extraction — definitive for CBD stones",
      "Cholecystectomy after ERCP for gallstone source (same admission when stable)",
      "Antibiotics if cholangitis present",
    ],
    boardsPearls: [
      "↑ alk phos + ↑ direct bilirubin + dilated CBD + stone → choledocholithiasis",
      "Charcot triad suggests cholangitis from obstructing stone",
      "Gallstone pancreatitis — stone passes through ampulla; ERCP if cholangitis or persistent obstruction",
      "vs pancreatic cancer — painless progressive jaundice, no stone on MRCP",
      "ERCP is therapeutic (and diagnostic) for CBD stones",
    ],
    pediatrics:
      "Less common than in adults; consider choledochal cyst if young child with duct stones and dilatation. Pigment stones in hemolytic disorders.",
  },
  {
    id: "biliary-atresia",
    name: "Biliary Atresia",
    etymology: "Latin bilis = bile + Greek a- = absent + tresis = perforation/opening",
    aliases: [
      "biliary atresia",
      "extrahepatic biliary atresia",
      "neonatal biliary atresia",
    ],
    definition:
      "Neonatal obliteration or fibrosis of extrahepatic bile ducts causing progressive cholestatic jaundice — the most common surgical cause of neonatal jaundice beyond the first 2 weeks of life.",
    pathophysiology:
      "Inflammatory destruction and fibrosis of extrahepatic bile ducts → bile cannot reach intestine → conjugated hyperbilirubinemia, acholic stools, hepatomegaly; progressive intrahepatic cholestasis and cirrhosis if untreated.",
    classicPresentation: [
      "Persistent conjugated (direct) hyperbilirubinemia after 2 weeks of life",
      "Acholic (pale/clay-colored) stools and dark urine",
      "Hepatomegaly, failure to thrive",
      "Previously healthy-appearing term infant",
    ],
    keyFindings: [
      "Conjugated hyperbilirubinemia — always pathologic in neonate",
      "Acholic stools on stool color card",
      "Hepatobiliary scan (HIDA) — nonexcretion into intestine",
      "Intraoperative cholangiogram confirms absent patent extrahepatic ducts",
    ],
    keyLabs: [
      "↑ Direct (conjugated) bilirubin",
      "↑ GGT and alk phos",
      "Normal or mildly ↑ transaminases early",
    ],
    associations: [
      "Kasai portoenterostomy — surgical attempt to restore bile flow",
      "Later cirrhosis and need for liver transplant if Kasai fails or late presentation",
      "Distinguish from neonatal hepatitis causes",
    ],
    complications: [
      "Biliary cirrhosis",
      "Portal hypertension",
      "Malnutrition and fat-soluble vitamin deficiency",
      "Cholangitis after Kasai procedure",
    ],
    distinguishFrom: [
      "Physiologic neonatal jaundice — unconjugated, resolves by 2 weeks",
      "Breast milk jaundice — unconjugated, prolonged but not cholestatic",
      "Neonatal hepatitis — infectious or metabolic; may have similar cholestasis",
      "Choledochal cyst — cystic ductal dilatation on imaging",
    ],
    treatment: [
      "Kasai portoenterostomy before 60 days of life for best outcomes",
      "Fat-soluble vitamins, nutritional support",
      "Liver transplant if bile drainage inadequate",
      "Treat cholangitis episodes with antibiotics",
    ],
    boardsPearls: [
      "Conjugated hyperbilirubinemia + acholic stools in neonate → biliary atresia until proven otherwise",
      "Kasai before 8 weeks (ideally <60 days) improves native liver survival",
      "vs physiologic jaundice — physiologic is unconjugated and mild",
      "Newborn screen and TORCH workup part of neonatal cholestasis differential",
      "Pale stools are red flag for obstructive cholestasis in infant",
    ],
    pediatrics:
      "This is a core pediatric diagnosis — any infant jaundiced >2 weeks needs fractionated bilirubin. Biliary atresia requires urgent surgical referral; delay worsens prognosis.",
  },
  {
    id: "mitochondrial-encephalomyopathy",
    name: "Mitochondrial Encephalomyopathy",
    etymology: "Greek mitos = thread + chondrion = granule + enkephalos = brain + myos = muscle + -pathy = disease",
    aliases: [
      "mitochondrial encephalomyopathy",
      "mitochondrial encephalomyopathies",
      "mitochondrial encephalomyopathy syndrome",
      "mitochondrial cytopathy",
      "mitochondrial disorder",
      "mitochondrial disease",
      "melas",
      "merrf",
      "leigh syndrome",
      "kearns-sayre syndrome",
      "kearns sayre syndrome",
      "kss",
      "mitochondrial myopathy",
      "ragged red fiber disease",
      "ragged red fibres",
      "ragged red fibers",
    ],
    definition:
      "Heterogeneous group of disorders caused by defects in mitochondrial oxidative phosphorylation — classically affecting high-energy tissues (brain, skeletal muscle, heart, retina) with variable neurologic and myopathic manifestations; most mtDNA mutations show maternal inheritance and heteroplasmy.",
    pathophysiology:
      "Mutations in mitochondrial DNA (mtDNA) or nuclear genes encoding mitochondrial proteins → impaired electron transport chain and ATP production → tissues with high metabolic demand suffer first. Heteroplasmy (mixed normal and mutant mtDNA) causes variable severity; threshold effect when mutant load exceeds tissue tolerance. Anaerobic glycolysis ↑ → lactic acidosis. Muscle shows subsarcolemmal mitochondrial proliferation → ragged red fibers on Gomori trichrome.",
    classicPresentation: [
      "Exercise intolerance, proximal myopathy, ptosis/ophthalmoplegia",
      "Seizures, stroke-like episodes (not always vascular territory), ataxia, dementia",
      "Sensorineural hearing loss, visual loss, cardiomyopathy, diabetes",
      "Family history through maternal line (mtDNA); may affect multiple siblings variably",
      "Onset from infancy to adulthood depending on syndrome and heteroplasmy load",
    ],
    keyFindings: [
      "Ragged red fibers on Gomori trichrome muscle biopsy",
      "↑ SDH staining in muscle; COX-negative fibers in some syndromes",
      "Lactic acidosis (especially post-exercise or during illness)",
      "MRI: stroke-like lesions in MELAS (often posterior cortex, not confined to vascular territory)",
      "PEO — progressive external ophthalmoplegia (Kearns-Sayre, others)",
    ],
    keyLabs: [
      "↑ Serum and CSF lactate / lactate-pyruvate ratio",
      "mtDNA or nuclear mitochondrial gene testing (e.g., MELAS m.3243A>G; MERRF m.8344A>G)",
      "Muscle biopsy with Gomori trichrome, SDH, COX histochemistry",
      "ECG/echo if cardiomyopathy or conduction disease suspected",
    ],
    associations: [
      "MELAS — Mitochondrial Encephalomyopathy, Lactic Acidosis, and Stroke-like episodes (m.3243A>G common)",
      "MERRF — Myoclonic Epilepsy with Ragged Red Fibers (m.8344A>G in tRNA^Lys)",
      "Leigh syndrome — subacute necrotizing encephalomyelopathy; bilateral basal ganglia/brainstem lesions in infants/children",
      "Kearns-Sayre syndrome — PEO before age 20, pigmentary retinopathy, heart block, ragged red fibers",
      "Maternally inherited diabetes and deafness (MIDD) — overlap with m.3243A>G spectrum",
      "Drugs toxic to mitochondria — linezolid, NRTIs, valproate (risk in POLG-related disease)",
    ],
    complications: [
      "Status epilepticus, progressive neurologic disability",
      "Cardiomyopathy and heart block (Kearns-Sayre — pacemaker may be needed)",
      "Stroke-like episodes with residual deficits",
      "Renal tubular dysfunction, liver failure (hepatocerebral syndromes)",
      "Sudden death from arrhythmia",
    ],
    distinguishFrom: [
      "Ischemic stroke — vascular territory respects arteries; MELAS stroke-like episodes often cross vascular boundaries",
      "Multiple sclerosis — demyelinating plaques, oligoclonal bands; not lactic acidosis or ragged reds",
      "Muscular dystrophy — dystrophin/sarcoglycan defects; Gomori shows fibrosis, not classic ragged reds",
      "Organic acidemias — also ↑ anion gap and neurologic disease; specific organic acids on metabolic screen",
      "Type B lactic acidosis from sepsis/shock — acute illness context without chronic myopathy/PEO",
      "Myasthenia gravis — fatigable weakness, AChR antibodies; not ragged red fibers",
    ],
    treatment: [
      "Supportive — treat seizures, cardiac conduction disease, hearing/vision loss",
      "Avoid mitochondrial toxins (alcohol, valproate in POLG, linezolid, smoking)",
      "Coenzyme Q10, L-carnitine, thiamine — sometimes used; limited evidence",
      "MELAS stroke-like episodes — arginine during acute episodes (boards mention); avoid pure vasculopathic stroke workup alone",
      "Genetic counseling — maternal inheritance for mtDNA; heteroplasmy complicates recurrence risk",
    ],
    boardsPearls: [
      "MELAS triad: encephalopathy + lactic acidosis + stroke-like episodes (m.3243A>G)",
      "MERRF: myoclonus + seizures + ataxia + ragged red fibers (m.8344A>G)",
      "Ragged red fibers — subsarcolemmal mitochondrial aggregates on Gomori trichrome (link to muscle biopsy stain)",
      "Maternal inheritance — all children of affected mother may inherit variable mutant load (heteroplasmy)",
      "Leigh syndrome — infant with hypotonia, lactic acidosis, bilateral basal ganglia lesions on MRI",
      "Kearns-Sayre — PEO + pigmentary retinopathy + heart block before age 20",
      "Exercise intolerance + myopathy + ↑ lactate → think mitochondrial encephalomyopathy",
      "vs ischemic stroke — MELAS lesions do not respect single vascular territory",
    ],
    pediatrics:
      "Leigh syndrome and infantile mitochondrial myopathies present with hypotonia, failure to thrive, and lactic acidosis — newborn metabolic screen may not detect; muscle biopsy and genetics when suspected. Kearns-Sayre requires cardiac monitoring for conduction block in children/adolescents.",
  },
  {
    id: "sporotrichosis",
    name: "Sporotrichosis",
    etymology: "Greek sporos = seed/spore + thrix = hair + -osis = condition",
    aliases: [
      "sporotrichosis",
      "sporotricosis",
      "sporotrichosis infection",
      "lymphocutaneous sporotrichosis",
      "rose gardener's disease",
      "rose gardeners disease",
      "rose handler's disease",
      "rose handlers disease",
    ],
    definition:
      "Subacute fungal infection (Sporothrix schenckii) acquired by traumatic inoculation of contaminated organic matter — classically presents as lymphocutaneous disease with nodular lymphangitis ascending from the inoculation site.",
    pathophysiology:
      "Conidia introduced through skin break → local granulomatous inflammation → organism spreads proximally along lymphatic channels → chain of nodular lesions (sporotrichoid pattern); dimorphic conversion to yeast in tissue.",
    classicPresentation: [
      "Puncture or scratch while gardening, handling roses, sphagnum moss, or hay",
      "Painless papule or nodule at inoculation site (often hand or arm)",
      "Days to weeks later: ascending subcutaneous nodules along lymphatic drainage",
      "Nodules may ulcerate; mild regional lymphadenopathy; systemic symptoms uncommon in localized disease",
    ],
    keyFindings: [
      "Nodular lymphangitis — linear array of nodules along extremity",
      "No rapid spreading cellulitis border; subacute course",
      "Disseminated: multiple cutaneous lesions, joint involvement, ocular sporotrichosis (rare)",
    ],
    keyLabs: [
      "Fungal culture of biopsy/aspirate — Sporothrix schenckii (definitive)",
      "Biopsy — granulomatous inflammation; cigar-shaped yeast; asteroid bodies",
      "GMS or PAS stain highlights fungi",
    ],
    associations: [
      "Sporothrix schenckii — worldwide; soil and plant saprophyte",
      "Sporothrix brasiliensis — cat-transmitted epidemics (Brazil)",
      "Alcoholism, COPD, HIV, transplant — disseminated/pulmonary forms",
    ],
    complications: [
      "Disseminated cutaneous sporotrichosis",
      "Osteoarticular infection",
      "Pulmonary sporotrichosis (inhalation exposure)",
      "Meningitis (rare, disseminated)",
    ],
    distinguishFrom: [
      "Nocardiosis — nodular lymphangitis; acid-fast branching rods; sulfonamide treatment",
      "Mycobacterium marinum — aquarium/fish tank exposure; granulomatous nodules",
      "Bacterial cellulitis — acute, warm, erythematous, not nodular lymphatic chain",
      "Cutaneous leishmaniasis — travel history; amastigotes on biopsy",
      "Cat-scratch disease — Bartonella; papule then regional lymphadenopathy, not linear nodules",
    ],
    treatment: [
      "Itraconazole — first-line for lymphocutaneous and cutaneous disease",
      "Saturated potassium iodide (SSKI) — traditional oral therapy; monitor thyroid with prolonged use",
      "Liposomal amphotericin B for severe disseminated or pulmonary disease, then step down to itraconazole",
      "Prolonged antifungal course until clinical resolution",
    ],
    boardsPearls: [
      "Rose thorn + nodular lymphangitis = sporotrichosis classic vignette",
      "SSKI is the oral potassium iodide answer on many boards stems",
      "Sporotrichoid pattern = spread along lymphatics — pathognomonic pattern, not pathognomonic organism (Nocardia too)",
      "Culture confirms; cigar-shaped yeast in tissue",
      "vs cellulitis — subacute nodules in a line, not acute diffuse erythema",
    ],
    pediatrics:
      "Itraconazole preferred in children over long-term SSKI; thorn or outdoor trauma in gardeners' children; cat-associated S. brasiliensis outbreaks relevant in endemic regions.",
  },
  {
    id: "cat-scratch-disease",
    name: "Cat-Scratch Disease",
    etymology: "cat scratch = inoculating scratch + disease = disordered function",
    aliases: [
      "cat-scratch disease",
      "cat scratch disease",
      "catscratch disease",
      "cat-scratch fever",
      "cat scratch fever",
      "csd",
      "cat scratch",
      "cat-scratch",
    ],
    definition:
      "Usually self-limited zoonotic infection caused by Bartonella henselae after a cat (especially kitten) scratch or bite — characterized by a primary inoculation lesion and delayed regional lymphadenopathy.",
    pathophysiology:
      "B. henselae inoculated through skin break (often flea feces on claws) → local papule → bacteria transported to draining lymph nodes → granulomatous lymphadenitis; disseminated angioproliferative disease in severe immunocompromise.",
    classicPresentation: [
      "Scratch or bite from kitten or young cat days to weeks prior",
      "Small erythematous papule or pustule at inoculation site (may be subtle)",
      "Painful unilateral regional lymphadenopathy (axillary, epitrochlear, cervical, preauricular)",
      "Low-grade fever, malaise, headache; systemic illness usually mild",
      "Nodes may suppurate; resolution over weeks to months",
    ],
    keyFindings: [
      "Regional (not generalized) lymphadenopathy near inoculation site",
      "Cat exposure history — kittens/strays higher risk",
      "Parinaud oculoglandular syndrome — conjunctival inoculation → red eye + preauricular node",
    ],
    keyLabs: [
      "Often clinical diagnosis without labs in classic cases",
      "Bartonella henselae serology (IFA)",
      "Lymph node biopsy — granulomatous inflammation; Warthin-Starry stain shows bacilli",
      "PCR of node aspirate/biopsy if needed",
    ],
    associations: [
      "Bartonella henselae — transmitted via cats and fleas",
      "Immunocompromised (HIV): bacillary angiomatosis, peliosis, endocarditis",
      "More common in children <15 years",
    ],
    complications: [
      "Suppurative lymphadenitis",
      "Encephalopathy/encephalitis (rare)",
      "Neuroretinitis with vision changes (rare)",
      "Bacillary angiomatosis and peliosis in AIDS",
      "Endocarditis (culture-negative; prosthetic valve risk)",
    ],
    distinguishFrom: [
      "Sporotrichosis — ascending nodular lymphangitis; plant thorn; fungal culture",
      "Bacterial lymphadenitis (S. aureus, strep) — acute, fluctuant, no cat papule history",
      "Lymphoma — persistent generalized lymphadenopathy, B symptoms, no inoculation lesion",
      "Toxoplasmosis — cat exposure but usually posterior cervical nodes, negative monospot pattern differs",
      "Tularemia — rabbit/tick/dermal ulcer with glandular disease",
    ],
    treatment: [
      "Immunocompetent: supportive care; many cases self-resolve",
      "Azithromycin — may reduce lymph node volume/duration (optional in mild disease)",
      "Severe, disseminated, or immunocompromised: doxycycline, rifampin, or combination per ID consult",
      "Needle aspiration for painful suppurative nodes (avoid incision and drainage — may cause chronic sinus)",
    ],
    boardsPearls: [
      "Kitten scratch + ipsilateral lymphadenopathy = cat-scratch disease",
      "Bartonella henselae; Warthin-Starry stain on biopsy",
      "vs sporotrichosis — regional nodes, not linear subcutaneous nodules along lymphatics",
      "AIDS + red vascular skin lesions → bacillary angiomatosis (Bartonella), not always Kaposi",
      "Often self-limited; azithromycin when treatment chosen",
    ],
    pediatrics:
      "Most common in children and adolescents with kitten exposure; prognosis excellent in immunocompetent hosts; educate families on avoiding rough play with kittens and flea control.",
  },
  {
    id: "hydatidiform-mole",
    name: "Hydatidiform Mole",
    etymology: "Greek hydatis = watery vesicle + Latin forma = shape + mola = mass",
    aliases: [
      "hydatidiform mole",
      "hydatidiform moles",
      "molar pregnancy",
      "molar pregnancies",
      "complete mole",
      "partial mole",
      "complete hydatidiform mole",
      "partial hydatidiform mole",
      "snowstorm sign",
      "snowstorm uterus",
      "snowstorm appearance",
      "bunch of grapes uterus",
      "vesicular mole",
    ],
    definition:
      "Abnormal fertilization product of gestational trophoblastic disease in which trophoblastic tissue proliferates with hydropic (edematous) chorionic villi — classified as complete (no embryo, entirely paternal genome) or partial (triploid, may have fetal parts); presents with markedly elevated β-hCG and characteristic ultrasound.",
    pathophysiology:
      "Complete mole — fertilization of empty ovum by one sperm that duplicates (or rarely two sperm) → androgenetic diploid 46,XX (all paternal chromosomes); diffuse trophoblastic hyperplasia with hydropic villi, no fetal tissue. Partial mole — dispermic fertilization of normal ovum → triploid 69,XXY (usually); focal trophoblastic proliferation with some fetal parts. Massive β-hCG secretion → theca lutein ovarian cysts; hCG can cross-stimulate TSH receptor (hyperthyroidism) and cause early severe preeclampsia.",
    classicPresentation: [
      "First-trimester vaginal bleeding, uterus larger than dates",
      "Markedly elevated β-hCG (often >> normal pregnancy for gestational age)",
      "Transvaginal ultrasound — 'snowstorm' or 'bunch of grapes' intrauterine pattern (complete mole)",
      "Absent fetal heartbeat / no normal embryo (complete mole)",
      "Hyperemesis, early preeclampsia (<20 weeks), hyperthyroid symptoms (from β-hCG)",
      "Bilateral theca lutein cysts on ovarian ultrasound",
    ],
    keyFindings: [
      "Quantitative β-hCG — very high; serial levels mandatory after treatment",
      "Transvaginal ultrasound — heterogeneous intrauterine mass with multiple cystic spaces (complete); partial may show focal cystic changes with fetal parts",
      "Histology after evacuation — hydropic villi with circumferential trophoblastic proliferation (complete) vs focal changes (partial)",
      "p57 (KIP2) immunostain — negative in complete mole (maternally imprinted gene absent); positive in partial mole and normal placenta",
      "Karyotype — 46,XX complete (androgenetic); 69,XXY partial (triploid)",
    ],
    keyLabs: [
      "β-hCG — diagnostic and for post-evacuation surveillance",
      "CBC — anemia from bleeding",
      "Thyroid function tests if symptomatic hyperthyroidism",
      "Blood type and Rh — Rho(D) immune globulin if Rh-negative after evacuation",
    ],
    associations: [
      "Gestational trophoblastic neoplasia (persistent or rising β-hCG after evacuation)",
      "Choriocarcinoma — malignant GTN; can follow mole, pregnancy, or abortion",
      "Theca lutein cysts — bilateral ovarian cysts from hCG stimulation",
      "Early severe preeclampsia and hyperthyroidism from high β-hCG",
      "Prior molar pregnancy — increased recurrence risk",
    ],
    complications: [
      "Gestational trophoblastic neoplasia (~15–20% after complete mole if not monitored)",
      "Choriocarcinoma — hematogenous metastases (lungs, brain, vagina)",
      "Hemorrhage, anemia, hyperthyroid storm (rare)",
      "Recurrent molar pregnancy",
    ],
    distinguishFrom: [
      "Normal intrauterine pregnancy — gestational sac with embryo/fetal pole at discriminatory β-hCG; appropriate rise",
      "Ectopic pregnancy — positive β-hCG with empty uterus and adnexal mass",
      "Missed/spontaneous abortion — may have falling β-hCG; products of conception without diffuse hydropic villi",
      "Twin pregnancy — elevated β-hCG but normal twin gestation on ultrasound",
      "Uterine fibroid — solid myometrial masses, not diffuse vesicular pattern; β-hCG negative unless pregnant",
      "Choriocarcinoma — post-evacuation or post-pregnancy rising β-hCG with metastases; malignant trophoblast without villi",
    ],
    treatment: [
      "Suction dilation and curettage (evacuation) — primary treatment",
      "Rho(D) immune globulin if Rh-negative",
      "Serial quantitative β-hCG until undetectable (surveillance for GTN)",
      "Reliable contraception during surveillance (avoid pregnancy until cleared)",
      "Persistent or rising β-hCG → gestational trophoblastic neoplasia — single-agent methotrexate or multiagent chemotherapy per staging",
      "Chest imaging if GTN suspected (pulmonary metastases common)",
    ],
    boardsPearls: [
      "Complete mole — 46,XX all paternal; no fetal tissue; p57 negative; snowstorm ultrasound",
      "Partial mole — triploid 69,XXY; fetal parts may be present; p57 positive; lower β-hCG than complete",
      "Very high β-hCG + vesicular 'grape-like' uterus → hydatidiform mole",
      "Preeclampsia before 20 weeks or hyperthyroidism in early pregnancy → think mole",
      "Theca lutein cysts — bilateral, from β-hCG ovarian stimulation",
      "After D&C — monitor β-hCG to zero; plateau or rise → gestational trophoblastic neoplasia / choriocarcinoma",
      "GTN treatment — methotrexate (low-risk) or multiagent chemo; highly curable",
      "vs ectopic — mole fills uterus with abnormal villi; ectopic has empty uterus",
    ],
    pediatrics:
      "Molar pregnancy is rare in adolescents but can occur; same evacuation and β-hCG surveillance principles apply; emphasize contraception during follow-up in teens.",
  },
  {
    id: "teratoma",
    name: "Teratoma",
    etymology: "Greek teras = monster + -oma = tumor/mass",
    aliases: [
      "teratoma",
      "teratomas",
      "mature teratoma",
      "mature teratomas",
      "mature cystic teratoma",
      "mature cystic teratomas",
      "immature teratoma",
      "immature teratomas",
      "dermoid cyst",
      "dermoid cysts",
      "ovarian dermoid",
      "ovarian dermoid cyst",
      "sacrococcygeal teratoma",
      "mediastinal teratoma",
      "rokitansky nodule",
      "dermoid plug",
    ],
    definition:
      "Germ cell neoplasm composed of mature and/or immature tissues derived from two or more embryonic germ layers (ectoderm, mesoderm, endoderm); ranges from benign mature cystic teratoma (dermoid cyst) to malignant immature teratoma and occurs in ovary, testis, mediastinum, sacrococcygeal region, and other sites.",
    pathophysiology:
      "Pluripotent germ cells differentiate abnormally into somatic tissues from multiple germ layers within a single tumor. Mature teratoma — well-differentiated elements only (skin, hair, teeth, cartilage, fat, GI epithelium). Immature teratoma — contains embryonic/immature tissues (especially neuroepithelium) with malignant potential. Ovarian mature cystic teratomas are the most common ovarian germ cell tumor; sacrococcygeal teratoma is the most common neonatal tumor.",
    classicPresentation: [
      "Ovarian mature cystic teratoma — young woman with incidental adnexal mass; may present with torsion pain",
      "Gross/pathology — cyst with sebaceous material, hair, and sometimes teeth or bone (Rokitansky nodule)",
      "Immature teratoma — pelvic or testicular mass in child/young adult; may have ↑ AFP",
      "Anterior mediastinal mass in young male — teratoma in germ cell tumor differential",
      "Sacrococcygeal teratoma — external mass at birth; may be predominantly internal (Altman types)",
      "Struma ovarii (monodermal teratoma) — ovarian mass with hyperthyroidism from ectopic thyroid tissue",
    ],
    keyFindings: [
      "Histology — tissues from ≥2 germ layers: ectoderm (skin, hair follicles, neural tissue), mesoderm (fat, cartilage, bone, muscle), endoderm (GI/respiratory epithelium, thyroid)",
      "Mature teratoma — only well-differentiated mature elements; no immature neuroepithelium",
      "Immature teratoma — immature neuroepithelium (most common immature component); worse prognosis",
      "Pelvic ultrasound — complex cyst with hyperechoic Rokitansky nodule, fat-fluid level, acoustic shadowing from calcification/tooth",
      "Mediastinal CT — anterior mediastinal mass with fat, fluid, and calcification suggest teratoma",
    ],
    keyLabs: [
      "AFP — elevated in immature teratoma and other nonseminomatous germ cell tumors (yolk sac tumor, mixed GCT); usually normal in mature ovarian teratoma",
      "β-hCG — elevated in choriocarcinoma, embryonal carcinoma, and some seminomas/mixed tumors; not typical isolated marker for mature teratoma",
      "LDH — may be elevated in some germ cell tumors",
    ],
    associations: [
      "Ovarian torsion — mature cystic teratoma is a common cause in reproductive-age women",
      "Mixed germ cell tumors — teratoma + embryonal carcinoma/yolk sac tumor/choriocarcinoma",
      "Anterior mediastinal mass differential in young males — teratoma, thymoma, Hodgkin lymphoma ('4 T's')",
      "Sacrococcygeal teratoma — associated with prematurity and hydrops in large fetal tumors",
      "Malignant transformation of mature teratoma — rare (e.g., squamous cell carcinoma in dermoid)",
    ],
    complications: [
      "Ovarian torsion and rupture (chemical peritonitis from sebum/keratin)",
      "Malignant behavior of immature teratoma or mixed germ cell components",
      "Airway compromise or high-output cardiac failure in large fetal/neonatal sacrococcygeal teratoma",
      "Hyperthyroidism with struma ovarii",
    ],
    distinguishFrom: [
      "Ovarian serous/mucinous cystadenoma — epithelial ovarian tumor, not pluripotent germ layer mix with hair/teeth",
      "Endometrioma — 'chocolate cyst'; endometrial tissue, homogeneous echoes, not dermoid fat/hair",
      "Yolk sac tumor (endodermal sinus tumor) — ↑ AFP, Schiller-Duval bodies; pure malignant GCT without mature teratomatous elements",
      "Seminoma — lymphocyte-rich sheets; CD117/placental alkaline phosphatase positive; may have ↑ β-hCG only",
      "Thymoma — anterior mediastinal epithelial tumor of thymus, not germ cell derivatives",
      "Hodgkin lymphoma — Reed-Sternberg cells, contiguous nodal spread, B symptoms",
      "Hydatidiform mole — trophoblastic villi with ↑ β-hCG, not teratomatous somatic tissues",
    ],
    treatment: [
      "Mature ovarian teratoma — surgical excision (cystectomy or oophorectomy); fertility-sparing when possible",
      "Immature teratoma — surgical staging/resection plus platinum-based chemotherapy (e.g., BEP) per stage and grade",
      "Testicular nonseminomatous GCT — orchiectomy and staging; adjuvant chemo based on pathology and markers",
      "Sacrococcygeal teratoma — surgical resection; prenatal intervention if fetal hydrops",
      "Monitor AFP and β-hCG post-treatment in malignant germ cell tumors",
    ],
    boardsPearls: [
      "Teratoma = tissues from ≥2 germ layers (ectoderm, mesoderm, endoderm) from pluripotent germ cells",
      "Mature cystic teratoma (dermoid) — most common ovarian germ cell tumor; benign; hair, teeth, sebum, fat",
      "Rokitansky nodule (dermoid plug) — solid protuberance with hair/teeth/cartilage in cyst wall",
      "Immature teratoma — immature neuroepithelium; malignant; ↑ AFP; chemotherapy",
      "Sacrococcygeal teratoma — most common tumor in newborns",
      "Young man + anterior mediastinal mass → teratoma vs thymoma vs lymphoma; teratoma may show fat/calcification on imaging",
      "Testicular cancer markers: ↑ AFP (nonseminomatous/yolk sac/immature teratoma); ↑ β-hCG (choriocarcinoma, embryonal, some seminoma)",
      "Mature ovarian teratoma — normal tumor markers; torsion is classic complication vignette",
    ],
    pediatrics:
      "Sacrococcygeal teratoma is the most common neonatal tumor — external coccygeal mass at birth; large or predominantly internal tumors can cause hydrops and require fetal or urgent neonatal surgery. Ovarian mature teratomas present in adolescents with torsion or incidental mass. Pediatric testicular teratomas have different malignant potential by age — prepubertal often benign mature teratoma; postpubertal treat as malignant GCT.",
  },
  {
    id: "rocky-mountain-spotted-fever",
    name: "Rocky Mountain Spotted Fever",
    etymology: "Rocky Mountain = geographic name + spotted = rash with spots + fever = febrile illness",
    aliases: [
      "rocky mountain spotted fever",
      "rocky mountain spotted fevers",
      "rmsf",
      "rickettsial spotted fever",
      "spotted fever rickettsiosis",
    ],
    definition:
      "Potentially fatal tick-borne rickettsiosis caused by Rickettsia rickettsii — an obligate intracellular bacterium transmitted by Dermacentor and other hard ticks — characterized by fever, headache, and a centripetally spreading rash that may become petechial.",
    pathophysiology:
      "R. rickettsii inoculated via tick bite → infects vascular endothelial cells → vasculitis and increased vascular permeability in skin, brain, lungs, and other organs → edema, petechial hemorrhage, and end-organ injury; severe disease causes DIC, ARDS, encephalitis, and shock.",
    classicPresentation: [
      "Summer exposure in southeastern or south-central US after tick bite (may be unnoticed)",
      "High fever, severe headache, myalgias, nausea/vomiting early in illness",
      "Rash typically appears 2–4 days after fever — pink macules on wrists, forearms, and ankles",
      "Rash spreads to trunk and may involve palms and soles",
      "Petechiae develop in severe/late disease (often day 5–6) — sign of progression",
      "Rash may be absent initially (<50% have rash in first 3 days) — do not rule out disease",
    ],
    keyFindings: [
      "Clinical suspicion in compatible season/exposure — treat empirically before confirmation",
      "Rash — blanching maculopapular rash starting distally and spreading centrally; later petechiae",
      "Thrombocytopenia, hyponatremia, elevated hepatic transaminases (supportive but nonspecific)",
      "Serology (indirect immunofluorescence) — fourfold rise acute to convalescent; often negative early",
      "Skin biopsy immunohistochemistry in equivocal cases (not routine first step)",
    ],
    keyLabs: [
      "CBC — thrombocytopenia common",
      "Sodium — hyponatremia may be present",
      "LFTs — mild elevation",
      "Acute and convalescent R. rickettsii serology — diagnostic retrospectively",
    ],
    associations: [
      "Rickettsia rickettsii — causative organism",
      "Dermacentor variabilis (American dog tick) and Dermacentor andersoni (Rocky Mountain wood tick)",
      "Rhipicephalus sanguineus (brown dog tick) — Southwest US and Mexico",
      "Camping, hiking, dog exposure in endemic regions",
    ],
    complications: [
      "Vascular leak and hypovolemia",
      "Encephalitis, meningoencephalitis",
      "ARDS and pulmonary edema",
      "DIC, multiorgan failure, death if untreated",
      "Amputation or neurologic sequelae in survivors of severe disease",
    ],
    distinguishFrom: [
      "Lyme disease — Ixodes tick; erythema migrans bull's-eye; different endemic pattern and rash morphology",
      "Ehrlichiosis/Anaplasmosis — may share tick exposure; leukopenia/thrombocytopenia; rash less common in adult ehrlichiosis",
      "Meningococcemia — rapid toxic illness with petechiae/purpura; no centripetal macular prodrome typical of RMSF",
      "Secondary syphilis — diffuse maculopapular rash including palms/soles; different epidemiology and serology",
      "Kawasaki disease — children; conjunctivitis, mucositis, lymphadenopathy, desquamation; not tick-associated",
      "Viral exanthem — usually less ill; no prominent thrombocytopenia/hyponatremia pattern",
    ],
    treatment: [
      "Empiric doxycycline immediately when RMSF is suspected — do not delay for rash or serology",
      "Doxycycline for all ages including children and most pregnant patients when RMSF suspected (benefit outweighs tooth/bone risk)",
      "Chloramphenicol historical alternative in pregnancy — doxycycline now preferred when RMSF likely",
      "Supportive care for severe vasculitis/organ failure",
    ],
    boardsPearls: [
      "Rickettsia rickettsii — obligate intracellular; transmitted by Dermacentor dog/wood ticks (not Ixodes)",
      "Classic rash — wrists/ankles first, spreads to trunk; palms/soles involvement is a clue",
      "Treat with doxycycline on suspicion — rash often absent early; waiting for petechiae increases mortality",
      "Petechial rash = severe/late disease — start antibiotics before this point",
      "Doxycycline first-line even in children for RMSF (exception to usual pediatric tetracycline avoidance)",
      "Thrombocytopenia + hyponatremia + tick exposure + fever/headache → RMSF until proven otherwise",
      "vs Lyme — erythema migrans, Ixodes tick, Northeast/Midwest emphasis",
    ],
    pediatrics:
      "RMSF occurs in children; doxycycline is recommended for suspected RMSF at any age because untreated disease is often fatal. Rash may be more prominent in children than adults. Maintain high suspicion in febrile child with headache after tick exposure even without rash.",
  },
  {
    id: "typhoid-fever",
    name: "Typhoid Fever",
    etymology: "Greek typhos = smoky stupor + fever = febrile illness",
    aliases: [
      "typhoid fever",
      "typhoid fevers",
      "typhoid",
      "enteric fever",
      "enteric fevers",
      "salmonella typhi fever",
      "typhoid infection",
    ],
    definition:
      "Systemic febrile illness caused by Salmonella enterica serotype Typhi — a facultative intracellular gram-negative rod acquired fecal-orally from contaminated food or water — characterized by prolonged stepwise fever, abdominal symptoms, and potential ileal complications or chronic gallbladder carriage.",
    pathophysiology:
      "Ingested S. Typhi invades Peyer's patches and M cells of distal ileum → macrophage survival (Vi capsule inhibits phagocytosis) → bacteremia → reticuloendothelial spread (liver, spleen, bone marrow, gallbladder) → secondary bacteremia and sustained fever; hypertrophy/necrosis of Peyer's patches can cause ileal ulceration and perforation in untreated disease.",
    classicPresentation: [
      "Travel to or residence in endemic area; contaminated water or food exposure",
      "Prolonged stepwise rising fever over days to ~1 week",
      "Headache, malaise, abdominal pain, hepatosplenomegaly",
      "Constipation early more common than diarrhea (unlike non-typhoidal Salmonella gastroenteritis)",
      "Relative bradycardia (Faget sign) — pulse lower than expected for degree of fever",
      "Rose spots — faint blanching rose-pink macules on trunk (week 2, ~5–30% of patients)",
    ],
    keyFindings: [
      "Blood culture — highest yield in first week of illness",
      "Stool and urine cultures — more useful in second and third weeks",
      "Bone marrow culture — most sensitive if other cultures negative",
      "Leukopenia or normal WBC (not marked leukocytosis)",
      "Rose spots on trunk — supportive but insensitive",
      "Chronic carrier state — persistent stool/urine shedding, often gallbladder (cholecystectomy can cure)",
    ],
    keyLabs: [
      "Blood culture — diagnostic mainstay early",
      "Stool/urine culture — later in illness and for carriers",
      "CBC — relative leukopenia common",
      "LFTs — mild transaminitis possible",
      "Widal test — historical serology; limited specificity; not first-line diagnosis in modern practice",
    ],
    associations: [
      "Salmonella enterica serotype Typhi (Salmonella Typhi)",
      "Human-only reservoir — chronic carriers (classic: 'Typhoid Mary')",
      "Vi capsular polysaccharide vaccine and oral Ty21a live attenuated vaccine for travelers/endemic use",
      "Sickle cell disease — increased risk of invasive Salmonella (more often non-typhoidal bacteremia/osteomyelitis)",
      "Ileal perforation — complication of untreated typhoid (Peyer's patch necrosis)",
    ],
    complications: [
      "Ileal perforation and peritonitis",
      "GI hemorrhage from ulcerated Peyer's patches",
      "Encephalopathy, myocarditis, hepatitis",
      "Chronic biliary carriage and gallstones",
      "Relapse weeks after apparent recovery",
    ],
    distinguishFrom: [
      "Non-typhoidal Salmonella gastroenteritis — acute diarrhea after poultry/eggs; self-limited; antibiotics often withheld",
      "Malaria — travel history; cyclical fevers; blood smear with Plasmodium",
      "Brucellosis — undulant fever; animal exposure; culture/serology",
      "Rickettsial typhus — rash and epidemiology differ; doxycycline-responsive",
      "Legionella — atypical pneumonia with hyponatremia; relative bradycardia possible but respiratory prominence",
      "Appendicitis — localized RLQ pain; different course (typhoid can mimic with ileocecal involvement)",
    ],
    treatment: [
      "Ceftriaxone or azithromycin — common first-line empiric therapy (local resistance patterns matter)",
      "Fluoroquinolones (e.g., ciprofloxacin) when susceptible — resistance increasingly common",
      "Supportive care and hydration",
      "Chronic carrier — prolonged antibiotics; cholecystectomy if gallbladder reservoir persists",
      "Prevention: safe food/water; typhoid vaccines for high-risk travelers (Ty21a oral; Vi capsular IM; Vi conjugate in some regions)",
    ],
    boardsPearls: [
      "S. Typhi — facultative intracellular; Vi capsule; human reservoir only",
      "Stepwise fever + abdominal pain + relative bradycardia + rose spots = typhoid classic vignette",
      "Blood culture best week 1; stool/urine cultures later",
      "Constipation > diarrhea early — distinguishes from non-typhoidal Salmonella gastroenteritis",
      "Peyer's patch necrosis → ileal perforation (boards link to peritonitis in endemic setting)",
      "Chronic gallbladder carrier — treat or remove reservoir",
      "Typhoid vaccines: oral live Ty21a; injectable Vi polysaccharide; Vi conjugate improves infant response",
      "vs non-typhoidal Salmonella — don't give antibiotics for uncomplicated diarrhea (prolongs shedding)",
    ],
    pediatrics:
      "Typhoid occurs in children in endemic regions; presentation similar but rose spots less emphasized; ceftriaxone commonly used; typhoid conjugate vaccines increasingly used in endemic pediatric programs. Travelers' children need food/water precautions and vaccination per itinerary risk.",
  },
  {
    id: "dengue-fever",
    name: "Dengue Fever",
    etymology: "Swahili ka-dinga pepo = cramp-like seizure + fever = febrile illness",
    aliases: [
      "dengue fever",
      "dengue",
      "dengue virus infection",
      "breakbone fever",
      "dengue hemorrhagic fever",
      "severe dengue",
      "dengue shock syndrome",
    ],
    definition:
      "Mosquito-borne acute febrile illness caused by dengue virus (flavivirus, four serotypes) transmitted primarily by Aedes aegypti and Aedes albopictus — characterized by high fever, severe myalgias/arthralgias, retro-orbital headache, leukopenia, thrombocytopenia, and a characteristic maculopapular rash; secondary infection with a different serotype predisposes to severe dengue via antibody-dependent enhancement.",
    pathophysiology:
      "Aedes mosquito inoculates virus → replication in Langerhans cells and dissemination → vascular endothelium and monocyte/macrophage infection → capillary leakage, thrombocytopenia, and hemorrhagic tendency in severe disease. Primary infection confers serotype-specific immunity; secondary infection with a different serotype → non-neutralizing cross-reactive antibodies enhance viral uptake (antibody-dependent enhancement) → higher viremia and risk of severe dengue (plasma leakage, shock, hemorrhage).",
    classicPresentation: [
      "Travel or residence in tropical/subtropical endemic area (Caribbean, Latin America, Southeast Asia, Pacific) within prior 14 days",
      "Abrupt high fever (often biphasic/saddleback), severe headache, retro-orbital pain",
      "Intense myalgias and arthralgias — 'breakbone fever'",
      "Flushed skin or maculopapular rash (days 4–7); recovery rash may show 'white islands in a sea of red'",
      "Mild mucosal bleeding — epistaxis, gingival bleeding, petechiae; positive tourniquet test",
      "Nausea, vomiting, anorexia; injected oropharynx early in illness",
      "Critical phase around defervescence — warning signs herald severe dengue",
    ],
    keyFindings: [
      "Leukopenia and thrombocytopenia",
      "Positive tourniquet test — petechiae after blood pressure cuff inflation",
      "Hemoconcentration (↑ hematocrit) — marker of plasma leakage in severe disease",
      "Warning signs: severe abdominal pain, persistent vomiting, mucosal bleeding, lethargy, hepatomegaly, rising hematocrit with falling platelets",
      "NS1 antigen or dengue IgM/IgG serology — supports diagnosis; PCR in early illness",
    ],
    keyLabs: [
      "CBC — leukopenia, thrombocytopenia",
      "Hematocrit — rising value suggests plasma leakage (severe dengue)",
      "LFTs — mild transaminase elevation possible",
      "NS1 antigen (early), dengue IgM (after day 5), IgG (secondary infection or past exposure)",
    ],
    associations: [
      "Dengue virus (DENV-1 through DENV-4) — flavivirus",
      "Aedes aegypti — primary vector (daytime biter; breeds in standing water)",
      "Aedes albopictus (Asian tiger mosquito) — secondary vector",
      "Secondary infection with different serotype — antibody-dependent enhancement → severe dengue",
      "Urban outbreaks in endemic tropics; increasing US cases in Puerto Rico, Florida, Texas, and travel-associated disease",
    ],
    complications: [
      "Severe dengue (dengue hemorrhagic fever/dengue shock syndrome) — plasma leakage, shock, hemorrhage",
      "Hepatitis, encephalitis, myocarditis (less common)",
      "Death from hypovolemic shock if untreated",
    ],
    distinguishFrom: [
      "Chikungunya — similar Aedes vector; more prominent persistent arthralgia; different serology",
      "Malaria — Anopheles mosquito; cyclical fever; blood smear parasites",
      "Leptospirosis — animal exposure; conjunctival suffusion; different geography/epidemiology",
      "Typhoid fever — relative bradycardia, rose spots, sustained fever without typical dengue rash pattern",
      "Measles — Koplik spots, cough/coryza/conjunctivitis prodrome; not mosquito-borne",
      "Zika — milder; congenital microcephaly if maternal infection; same Aedes vector region",
    ],
    treatment: [
      "Supportive care — oral or IV rehydration based on severity",
      "Acetaminophen for fever/pain — avoid NSAIDs and aspirin (↑ bleeding risk)",
      "Monitor hematocrit, platelets, and warning signs during critical phase",
      "IV fluids and shock management for severe dengue; blood products if significant hemorrhage",
      "No routine antiviral therapy",
    ],
    boardsPearls: [
      "Aedes aegypti mosquito vector — daytime feeder; not Anopheles (malaria)",
      "Breakbone fever = dengue classic stem descriptor",
      "White islands in a sea of red — recovery-phase rash buzzword",
      "Secondary infection different serotype → antibody-dependent enhancement → severe dengue",
      "Positive tourniquet test + leukopenia + thrombocytopenia in traveler from endemic area",
      "Avoid aspirin/NSAIDs — bleeding risk with thrombocytopenia",
      "Rising hematocrit with falling platelets around defervescence = plasma leakage/severe dengue",
      "vs chikungunya — debilitating arthritis outlasts fever; vs malaria — blood smear",
    ],
    pediatrics:
      "Children in endemic areas are at high risk for severe dengue; infants may have less prominent myalgias but can progress rapidly to shock. Use weight-based fluid resuscitation and close monitoring of hematocrit and perfusion during the critical phase. Avoid aspirin in children (Reye risk and bleeding).",
  },
  {
    id: "chikungunya-fever",
    name: "Chikungunya Fever",
    etymology: "Kimakonde chikungunya = to become contorted + fever = febrile illness",
    aliases: [
      "chikungunya fever",
      "chikungunya",
      "chikunguya",
      "chikv infection",
      "chikungunya virus infection",
      "chikungunya disease",
    ],
    definition:
      "Mosquito-borne acute febrile illness caused by chikungunya virus (alphavirus, Togaviridae) transmitted by Aedes aegypti and Aedes albopictus — characterized by high fever, debilitating bilateral symmetric polyarthralgia, maculopapular rash, and mild thrombocytopenia; petechiae may occur but severe hemorrhage is uncommon compared with dengue.",
    pathophysiology:
      "Aedes mosquito inoculates virus → replication in skin and dissemination → viremia with infection of synovial macrophages and fibroblasts → intense inflammatory arthralgia; dermal infection produces maculopapular rash. Mild bone marrow suppression causes thrombocytopenia and lymphopenia, generally less severe than dengue. Chronic joint symptoms reflect persistent synovial inflammation after acute viremia clears.",
    classicPresentation: [
      "Travel to or residence in endemic tropics (Africa, Indian Ocean, South/Southeast Asia, Caribbean, Americas) within prior 2 weeks",
      "Sudden high fever with severe headache and myalgias",
      "Debilitating bilateral symmetric polyarthralgia — wrists, hands, ankles, knees (often worse than dengue arthralgia)",
      "Maculopapular rash appearing ~2–5 days after fever onset — trunk and extremities",
      "Mild mucosal bleeding or petechiae possible but hemorrhagic manifestations uncommon",
      "Fever typically resolves in ~1 week; joint pain may persist weeks to months",
    ],
    keyFindings: [
      "Symmetric polyarthralgia disproportionate to other systemic symptoms",
      "Maculopapular rash — blanching erythematous macules and papules",
      "Thrombocytopenia — usually mild (often platelets remain >100,000/µL)",
      "Petechiae — uncommon; when present, less prominent than in dengue hemorrhagic fever",
      "Lymphopenia — common laboratory abnormality",
      "RT-PCR positive in acute phase; IgM serology after several days",
    ],
    keyLabs: [
      "CBC — mild thrombocytopenia, lymphopenia",
      "RT-PCR — acute viremic phase (first ~5 days)",
      "Chikungunya IgM/IgG — serologic confirmation",
      "Simultaneous dengue and Zika testing when co-circulation suspected",
    ],
    associations: [
      "Chikungunya virus (CHIKV) — alphavirus, Togaviridae",
      "Aedes aegypti — primary vector (daytime biter)",
      "Aedes albopictus — secondary vector",
      "Co-circulation with dengue and Zika in overlapping endemic regions",
      "Post-infectious chronic arthralgia/arthritis",
    ],
    complications: [
      "Chronic debilitating arthralgia or arthritis (months to years)",
      "Neonatal infection if maternal viremia near delivery",
      "Rare encephalitis, myocarditis, or ocular inflammation",
      "Severe hemorrhage uncommon (unlike severe dengue)",
    ],
    distinguishFrom: [
      "Dengue fever — more severe thrombocytopenia, positive tourniquet test, plasma leakage/shock; arthralgia less prolonged",
      "Zika virus infection — milder illness; congenital microcephaly if maternal infection",
      "Malaria — Anopheles vector; cyclical fever; blood smear parasites",
      "Rocky Mountain spotted fever — tick exposure; centripetal rash; doxycycline-responsive rickettsia",
      "Rheumatoid arthritis — chronic symmetric arthritis without acute febrile travel history",
      "Parvovirus B19 — slapped-cheek rash in children; exposure pattern differs",
    ],
    treatment: [
      "Supportive care — hydration, rest, analgesia",
      "Acetaminophen for fever and pain",
      "NSAIDs for arthralgia after dengue excluded",
      "Physiotherapy for chronic joint symptoms",
      "No specific antiviral or routine vaccine",
    ],
    boardsPearls: [
      "Alphavirus — Aedes vector (same mosquito as dengue/Zika, different virus family)",
      "Fever + incapacitating symmetric polyarthralgia + maculopapular rash in traveler = chikungunya classic vignette",
      "Mild thrombocytopenia and occasional petechiae — vs dengue's marked thrombocytopenia and hemorrhagic risk",
      "Chronic arthralgia outlasting fever — key distinguishing feature from dengue",
      "vs dengue — breakbone fever + severe thrombocytopenia/plasma leak favors dengue; persistent arthritis favors chikungunya",
      "Test for dengue and Zika concurrently in endemic areas",
    ],
    pediatrics:
      "Children may have less arthralgia than adults but more prominent rash (including bullous or pigmentary changes). Neonatal chikungunya occurs with maternal peripartum viremia — monitor for fever, rash, and neurologic complications. Supportive care; avoid aspirin.",
  },
  {
    id: "zika-virus-infection",
    name: "Zika Virus Infection",
    etymology: "Zika = Ugandan forest name + virus = poison/viral agent + infection = contamination",
    aliases: [
      "zika virus infection",
      "zika infection",
      "zika fever",
      "zika",
      "congenital zika syndrome",
      "congenital zika",
    ],
    definition:
      "Mosquito-borne flavivirus infection, usually mild in immunocompetent adults, but maternal infection during pregnancy can cause congenital Zika syndrome with microcephaly, brain malformations, and ocular defects.",
    pathophysiology:
      "Aedes mosquito inoculates virus → viremia and infection of skin, conjunctiva, and joints → in pregnancy virus crosses placenta and infects fetal neural progenitors → disrupted neurogenesis, calcifications, and microcephaly; post-infectious immune response may trigger Guillain-Barré in adults.",
    classicPresentation: [
      "Adult acquired: low-grade fever, pruritic maculopapular rash, nonpurulent conjunctivitis, arthralgia — often mild or asymptomatic",
      "Recent travel to or residence in endemic region (tropical Americas, parts of Africa/Asia/Pacific)",
      "Sexual exposure to partner who traveled to endemic area",
      "Congenital: microcephaly, ventriculomegaly, intracranial calcifications, ocular abnormalities, hypertonia",
      "Post-infectious ascending weakness with areflexia → Guillain-Barré",
    ],
    keyFindings: [
      "Maculopapular rash with conjunctivitis — distinguishes from many viral exanthems",
      "Fetal ultrasound — microcephaly, brain malformations, calcifications",
      "Head circumference below age norms in affected infants",
      "Ophthalmologic exam — macular scarring, optic nerve abnormalities",
    ],
    keyLabs: [
      "RT-PCR on serum/urine during acute illness (viremic window)",
      "Zika IgM with PRNT confirmation — watch flavivirus cross-reactivity",
      "Maternal/fetal serology and PCR in pregnancy with exposure",
      "CSF PCR in neonatal congenital infection",
    ],
    associations: [
      "Aedes aegypti and Aedes albopictus vectors",
      "Epidemics in Brazil and Americas (2015–2016) — microcephaly cluster",
      "Guillain-Barré syndrome post-infection",
      "Sexual transmission from infected partner",
      "Overlapping endemicity with dengue and chikungunya",
    ],
    complications: [
      "Congenital Zika syndrome — severe neurodevelopmental disability",
      "Guillain-Barré syndrome",
      "Fetal loss and stillbirth",
      "Ocular sequelae in congenital infection",
    ],
    distinguishFrom: [
      "Dengue — more severe systemic illness, thrombocytopenia, hemorrhagic manifestations",
      "Chikungunya — incapacitating polyarthralgia/arthritis",
      "Rubella — postauricular lymphadenopathy; congenital triad (PDA, cataracts, deafness)",
      "Cytomegalovirus — periventricular calcifications; hearing loss prominent",
      "Toxoplasmosis — diffuse intracranial calcifications, chorioretinitis, hydrocephalus",
    ],
    treatment: [
      "Supportive care — no specific antiviral",
      "Mosquito bite prevention during viremia to limit spread",
      "Pregnant patients — enhanced fetal surveillance and counseling",
      "Guillain-Barré — IVIG or plasmapheresis per standard care",
      "Condom use to reduce sexual transmission risk",
    ],
    boardsPearls: [
      "Flavivirus — Aedes vector; fever + rash + conjunctivitis in symptomatic adults",
      "Congenital Zika → microcephaly + intracranial calcifications + ocular defects",
      "vs CMV — periventricular calcifications (CMV) vs cortical/subcortical (Zika)",
      "Sexual transmission — ask about partner travel in pregnancy vignettes",
      "Guillain-Barré association",
      "No routine vaccine — prevention via vector control and travel precautions",
    ],
    pediatrics:
      "Congenital Zika syndrome is the high-yield pediatric presentation — microcephaly, seizures, hypertonia, feeding difficulties, and developmental delay. Acquired pediatric infection is usually mild. Screen infants born to mothers with exposure during pregnancy.",
  },
  {
    id: "yellow-fever",
    name: "Yellow Fever",
    etymology: "yellow = jaundice + fever = febrile illness",
    aliases: [
      "yellow fever",
      "yellow fevers",
      "yellow fever disease",
      "yfv infection",
    ],
    definition:
      "Potentially fatal flavivirus hemorrhagic hepatitis endemic to tropical Africa and South America, transmitted by Aedes (urban) or Haemagogus (jungle) mosquitoes — characterized by biphasic fever, jaundice, hemorrhage, and shock in severe cases.",
    pathophysiology:
      "Mosquito inoculation → replication in regional lymph nodes and viremia → hepatocyte infection with midzonal necrosis (Councilman bodies) → impaired hepatic synthetic function and jaundice; endothelial injury and DIC in intoxication phase cause hemorrhage, 'black vomit,' renal failure, and shock.",
    classicPresentation: [
      "Sudden high fever, severe headache, back pain, myalgias after travel to endemic Africa/South America",
      "Brief remission after 3–4 days, then recurrence (intoxication phase) in severe cases",
      "Jaundice, hematemesis ('black vomit'), petechiae/purpura, oliguria",
      "Relative bradycardia despite fever (Faget sign)",
      "Unvaccinated traveler or resident in endemic area",
    ],
    keyFindings: [
      "Jaundice with hemorrhagic manifestations in intoxication phase",
      "Faget sign — pulse lower than expected for degree of fever",
      "Hepatomegaly and elevated transaminases (AST often > ALT early)",
      "Proteinuria and renal dysfunction in severe disease",
      "History of absent or incomplete yellow fever vaccination",
    ],
    keyLabs: [
      "↑ Bilirubin and transaminases — hepatocellular injury",
      "Prolonged PT from hepatic synthetic failure and DIC",
      "Thrombocytopenia and elevated D-dimer in severe hemorrhagic disease",
      "RT-PCR or IgM serology for yellow fever virus (flavivirus cross-reactivity possible)",
    ],
    associations: [
      "Yellow fever virus — flavivirus",
      "Aedes aegypti — urban transmission",
      "Haemagogus spp. — jungle/sylvatic cycle with nonhuman primates",
      "Live attenuated 17D vaccine — highly effective prevention",
      "Endemic sub-Saharan Africa and tropical South America",
    ],
    complications: [
      "Hepatic failure and encephalopathy",
      "Hemorrhagic shock and DIC",
      "Acute kidney injury",
      "Death in 20–50% of cases entering intoxication phase",
      "Rare vaccine-associated viscerotropic or neurotropic disease",
    ],
    distinguishFrom: [
      "Dengue hemorrhagic fever — thrombocytopenia and plasma leak; less prominent jaundice",
      "Viral hepatitis A/E — jaundice without classic hemorrhagic shock triad",
      "Malaria — cyclical fevers, parasitemia on smear",
      "Leptospirosis — conjunctival suffusion, mild jaundice; different exposure history",
      "Ebola — different geography; prominent GI bleeding and community outbreaks",
    ],
    treatment: [
      "Supportive care only — no specific antiviral therapy",
      "Avoid aspirin and NSAIDs (bleeding risk)",
      "ICU management of shock, coagulopathy, renal failure, and hepatic encephalopathy",
      "Prevention with live attenuated 17D vaccine before endemic travel",
    ],
    boardsPearls: [
      "Flavivirus — biphasic illness: infection → remission → intoxication (jaundice + hemorrhage)",
      "Faget sign — fever with relative bradycardia",
      "Liver — midzonal necrosis with Councilman bodies",
      "Live attenuated 17D vaccine — contraindicated in pregnancy, severe immunocompromise, infants <6–9 months",
      "Case-fatality high once intoxication phase develops",
      "Travel medicine — vaccine certificate may be required for entry to endemic countries",
    ],
    pediatrics:
      "Children in endemic areas without vaccination are susceptible to severe disease. Yellow fever vaccine is generally deferred until ≥9 months because of increased encephalitis risk in younger infants; during outbreaks WHO may recommend vaccination from 6 months. Pediatric severe disease mirrors adult intoxication phase.",
  },
  {
    id: "lyme-disease",
    name: "Lyme Disease",
    etymology: "Lyme = Connecticut town name + disease = disordered function",
    aliases: [
      "lyme disease",
      "lyme",
      "lyme borreliosis",
      "borreliosis",
      "erythema migrans",
    ],
    definition:
      "Tick-borne spirochetal infection caused by Borrelia burgdorferi (and related Borrelia species in Europe) transmitted by Ixodes ticks — classically presenting with erythema migrans and capable of early disseminated neurologic, cardiac, and late musculoskeletal manifestations.",
    pathophysiology:
      "Ixodes tick inoculates spirochetes → local skin replication → erythema migrans; hematogenous dissemination to CNS (meningitis, cranial neuropathy), heart (AV block), joints (Lyme arthritis), and skin (secondary EM lesions); immune-mediated and persistent infection drive late arthritis.",
    classicPresentation: [
      "Summer hiking/camping in Northeast or Upper Midwest US after tick bite",
      "Erythema migrans — expanding annular rash with central clearing (bull's-eye)",
      "Early disseminated: multiple EM lesions, Bell palsy, meningitis, AV heart block",
      "Late: intermittent large-joint oligoarthritis (knee most common)",
    ],
    keyFindings: [
      "Clinical diagnosis of erythema migrans — treat without waiting for serology",
      "Two-tier serology (ELISA → Western blot) for later stages",
      "CSF lymphocytic pleocytosis in Lyme meningitis",
      "ECG — varying degrees of AV block in carditis",
    ],
    keyLabs: [
      "Borrelia serology — IgM/IgG two-tier testing (false negative early)",
      "CSF — lymphocytic meningitis pattern; intrathecal antibody production",
      "Synovial fluid — inflammatory; PCR may detect Borrelia in refractory arthritis",
    ],
    associations: [
      "Borrelia burgdorferi — causative spirochete",
      "Ixodes scapularis (deer tick) — vector in US",
      "Co-infection with Anaplasma and Babesia possible (same tick)",
      "Endemic: Northeast, Upper Midwest, Pacific Coast",
    ],
    complications: [
      "Chronic Lyme arthritis",
      "Persistent neurologic symptoms (rare/controversial chronic Lyme)",
      "Third-degree heart block requiring pacing (usually temporary)",
      "Acrodermatitis chronica atrophicans (late skin manifestation, Europe)",
    ],
    distinguishFrom: [
      "Rocky Mountain spotted fever — Dermacentor tick; centripetal rash; doxycycline empiric",
      "Cellulitis — not expanding bull's-eye; acute bacterial",
      "Syphilis — different spirochete; VDRL/RPR; penicillin",
      "Rheumatoid arthritis — symmetric small joints; no EM history",
      "Multiple sclerosis — CNS demyelination; different MRI/CSF pattern",
    ],
    treatment: [
      "Early localized: doxycycline (also covers Anaplasma) or amoxicillin/cefuroxime",
      "Neurologic/cardiac: doxycycline or IV ceftriaxone depending on severity",
      "Lyme arthritis: oral doxycycline/amoxicillin; IV ceftriaxone if refractory",
      "Doxycycline preferred in children per current guidelines for Lyme (covers coinfections)",
    ],
    boardsPearls: [
      "Erythema migrans = treat empirically — serology often negative in first weeks",
      "Bell palsy + tick exposure in endemic area = Lyme until proven otherwise",
      "Ixodes tick — not Dermacentor (RMSF) or Amblyomma (ehrlichiosis geography)",
      "Doxycycline covers Lyme + Anaplasma coinfection",
      "Late Lyme arthritis — large joint (knee); treat with oral antibiotics",
      "vs RMSF — EM bull's-eye vs centripetal maculopapular rash starting at wrists/ankles",
    ],
    pediatrics:
      "Children in endemic areas frequently affected; arthritis is common late manifestation in kids. Doxycycline used for Lyme in children per current IDSA/AAP guidance. Check for coinfection if severe illness.",
  },
  {
    id: "lymphogranuloma-venereum",
    name: "Lymphogranuloma Venereum",
    etymology: "Latin lympha = clear fluid + granulum = small grain + -oma = mass + venereus = sexual",
    aliases: [
      "lymphogranuloma venereum",
      "lymphogranuloma venereums",
      "lgv",
      "lymphogranuloma",
    ],
    definition:
      "Sexually transmitted infection caused by Chlamydia trachomatis serovars L1–L3 — a systemic chlamydial disease progressing from a transient genital lesion to painful inguinal lymphadenopathy (bubo) or proctocolitis, distinct from uncomplicated D–K chlamydia.",
    pathophysiology:
      "C. trachomatis L1–L3 inoculation at mucosal site → local ulceration (often unnoticed) → lymphatic spread to regional nodes → painful suppurative lymphadenitis (bubo) or rectal infection with granulomatous proctocolitis; chronic untreated LGV can cause genital lymphedema and rectal strictures.",
    classicPresentation: [
      "Young sexually active adult or MSM with STI risk factors",
      "Primary: small painless genital papule/ulcer that heals quickly (often missed)",
      "Secondary (1–4 weeks): painful unilateral inguinal/femoral lymphadenopathy (bubo)",
      "Proctocolitis variant: rectal pain, tenesmus, bloody/mucopurulent discharge, constipation",
      "Fever, malaise, systemic symptoms with bubo",
    ],
    keyFindings: [
      "Painful inguinal lymphadenopathy — distinguishes from painless syphilitic nodes",
      "Grooved sign (Giovanetti) — enlarged nodes above and below inguinal ligament (classic but uncommon)",
      "Proctoscopy — ulcerations, granulomas, mucosal friability in proctocolitis",
      "NAAT positive for Chlamydia trachomatis from ulcer, node aspirate, or rectal swab",
    ],
    keyLabs: [
      "NAAT (PCR) for C. trachomatis — ulcer, rectal, or lymph node aspirate",
      "Serology (complement fixation) — supportive historically; high titer suggests LGV",
      "HIV and syphilis co-screening in all STI patients",
    ],
    associations: [
      "Chlamydia trachomatis serovars L1, L2, L3",
      "MSM proctocolitis outbreaks in Europe/North America",
      "HIV coinfection common — screen all patients",
      "Co-infection with gonorrhea, syphilis possible",
    ],
    complications: [
      "Bubo suppuration and sinus tract formation",
      "Chronic lymphedema (elephantiasis of genitalia)",
      "Rectal strictures and fistulae from chronic proctocolitis",
      "Reactive arthritis",
    ],
    distinguishFrom: [
      "Uncomplicated chlamydia (D–K) — cervicitis/urethritis without bubo; shorter treatment course",
      "Syphilis — painless chancre; painless LAD; VDRL/RPR positive",
      "Herpes — grouped painful vesicles; PCR positive for HSV",
      "Chancroid (H. ducreyi) — painful ulcer + painful LAD; soft chancre",
      "Crohn proctitis — chronic; no acute STI context; granulomas on biopsy",
    ],
    treatment: [
      "Doxycycline 100 mg PO BID × 21 days — first line for LGV",
      "Azithromycin weekly × 3 weeks — alternative if doxycycline not tolerated",
      "Bubo may be aspirated for comfort (through healthy skin) — do not incise/drain routinely",
      "Treat sexual partners; test for HIV, syphilis, gonorrhea",
    ],
    boardsPearls: [
      "LGV = Chlamydia trachomatis L1–L3 — obligate intracellular",
      "Painless primary ulcer → painful inguinal bubo = LGV classic sequence",
      "Doxycycline × 21 days (NOT single-dose azithromycin like uncomplicated chlamydia)",
      "MSM with proctocolitis — think LGV in chlamydia-positive rectal NAAT",
      "vs syphilis — LGV bubo is painful; syphilis chancre and nodes typically painless",
    ],
    pediatrics:
      "LGV is rare in prepubertal children — consider sexual abuse if diagnosed. Adolescents sexually active are at risk; same 21-day doxycycline regimen (avoid tetracyclines in pregnancy).",
  },
  {
    id: "malaria",
    name: "Malaria",
    etymology: "Italian mala aria = bad air",
    aliases: [
      "malaria",
      "malarial infection",
      "plasmodium infection",
      "cerebral malaria",
    ],
    definition:
      "Mosquito-borne parasitic disease caused by Plasmodium species transmitted by Anopheles mosquitoes — characterized by cyclical fevers, hemolytic anemia, and potentially life-threatening complications, especially with P. falciparum.",
    pathophysiology:
      "Anopheles mosquito injects sporozoites → liver schizogony (hypnozoites in P. vivax/ovale) → merozoites invade RBCs → cyclic RBC rupture → fever/chills; P. falciparum sequesters in microvasculature (PfEMP1) → cerebral malaria, organ ischemia, and high parasitemia.",
    classicPresentation: [
      "Travel to endemic area without chemoprophylaxis",
      "Cyclical fever, chills, sweats (periodicity varies by species)",
      "Headache, myalgias, nausea, anemia, splenomegaly",
      "P. falciparum: irregular fever, altered mental status, jaundice (severe)",
    ],
    keyFindings: [
      "Giemsa thick and thin blood smears — diagnostic gold standard",
      "Ring forms, trophozoites, schizonts, gametocytes on smear",
      "Banana-shaped gametocytes — P. falciparum only",
      "Rapid diagnostic tests (HRP2, pLDH) in field settings",
    ],
    keyLabs: [
      "Blood smear — identify species and parasitemia percentage",
      "CBC — hemolytic anemia, thrombocytopenia",
      "Bilirubin — hemolysis",
      "LDH — elevated with hemolysis",
    ],
    associations: [
      "Plasmodium falciparum — most virulent; cerebral malaria",
      "P. vivax/ovale — hypnozoites (relapse); primaquine needed",
      "P. malariae — low parasitemia; band forms",
      "Anopheles mosquito — night-biting vector",
      "Sickle cell trait — partial protection against P. falciparum",
    ],
    complications: [
      "Cerebral malaria (P. falciparum) — seizures, coma",
      "Blackwater fever — hemoglobinuria, acute kidney injury",
      "Severe anemia, hypoglycemia (especially children and pregnancy)",
      "ARDS, DIC, death if untreated",
    ],
    distinguishFrom: [
      "Dengue — Aedes vector; thrombocytopenia without parasitemia; tourniquet test",
      "Typhoid fever — stepwise fever, relative bradycardia, rose spots",
      "Babesiosis — US Northeast; maltese cross on smear; no tropical travel required",
      "Viral hepatitis — jaundice without cyclical fever or smear parasites",
    ],
    treatment: [
      "Uncomplicated P. falciparum: artemisinin-based combination therapy (ACT)",
      "Severe/cerebral malaria: IV artesunate (preferred in US)",
      "P. vivax/ovale: chloroquine + primaquine (or ACT + primaquine) for hypnozoites",
      "Chemoprophylaxis for travelers to endemic areas",
    ],
    boardsPearls: [
      "Anopheles mosquito — night feeder; not Aedes (dengue) or Culex",
      "Blood smear diagnosis — thick smear for sensitivity, thin for species ID",
      "P. falciparum — banana gametocytes, multiple rings per RBC, cerebral malaria",
      "IV artesunate for severe malaria — medical emergency",
      "Primaquine for P. vivax/ovale hypnozoites — check G6PD first",
      "Sickle cell trait protects against falciparum malaria",
    ],
    pediatrics:
      "Children in endemic areas bear highest mortality; cerebral malaria presents with seizures and coma. Hypoglycemia common in pediatric severe malaria. Weight-based antimalarial dosing; IV artesunate for severe disease.",
  },
  {
    id: "botulism",
    name: "Botulism",
    etymology: "Latin botulus = sausage + -ism = condition (first linked to spoiled sausage)",
    aliases: [
      "botulism",
      "foodborne botulism",
      "infant botulism",
      "wound botulism",
      "clostridium botulinum poisoning",
    ],
    definition:
      "Neuroparalytic illness from botulinum toxin blocking presynaptic acetylcholine release at the neuromuscular junction, causing descending flaccid paralysis.",
    pathophysiology:
      "Clostridium botulinum produces botulinum toxin (heat-labile in foodborne form) → proteolytic cleavage of SNARE proteins (SNAP-25, VAMP, syntaxin) → impaired ACh vesicle fusion → flaccid paralysis; infant form from in vivo toxin production in gut after spore ingestion (honey).",
    classicPresentation: [
      "Cranial nerve palsies first: diplopia, ptosis, dysarthria, dysphagia",
      "Symmetric descending flaccid weakness",
      "Clear sensorium, no fever (foodborne/infant)",
      "Infant: constipation, weak cry, poor feeding, floppy baby ('floppy infant')",
      "Foodborne: multiple people after shared meal (canned/home-preserved foods)",
    ],
    keyFindings: [
      "Flaccid paralysis with absent reflexes",
      "Dilated, unreactive pupils",
      "Respiratory muscle weakness",
      "Normal mental status early",
    ],
    keyLabs: [
      "Clinical diagnosis supported by toxin assay in serum/stool/food",
      "Electrophysiology: incremental response to repetitive nerve stimulation (presynaptic defect)",
      "Stool culture for C. botulinum in infant botulism",
    ],
    associations: [
      "Foodborne — improperly canned or home-preserved alkaline vegetables",
      "Infant — honey ingestion (spores germinate in immature gut)",
      "Wound botulism — injection drug use, traumatic wounds",
    ],
    complications: [
      "Respiratory failure requiring mechanical ventilation",
      "Aspiration pneumonia",
      "Prolonged ICU care (recovery takes weeks)",
    ],
    distinguishFrom: [
      "Tetanus — spastic paralysis, lockjaw, risus sardonicus; tetanospasmin",
      "Guillain-Barré syndrome — ascending weakness, areflexia, CSF albuminocytologic dissociation",
      "Myasthenia gravis — fatigable weakness, postsynaptic ACh receptor antibodies",
      "Organophosphate poisoning — cholinergic crisis with SLUDGE, miosis",
    ],
    treatment: [
      "Botulinum antitoxin (equine heptavalent) early in foodborne/wound disease",
      "Human botulism immune globulin (BIG-IV) for infant botulism",
      "Airway protection and mechanical ventilation as needed",
      "Wound debridement and antibiotics for wound botulism (avoid aminoglycosides — worsen NM block)",
    ],
    boardsPearls: [
      "Botulinum toxin blocks ACh release — flaccid paralysis",
      "Descending paralysis with cranial nerves first; sensation intact",
      "Infant botulism from honey — floppy baby, constipation",
      "vs tetanus — spastic not flaccid",
      "SNARE protein cleavage is the molecular mechanism",
    ],
    pediatrics:
      "Infant botulism is the classic pediatric form — do not give honey before age 1. Human botulism immune globulin (BIG-IV) is specific treatment for infants.",
  },
  {
    id: "meningitis",
    name: "Meningitis",
    etymology: "Greek meninx = membrane + -itis = inflammation",
    aliases: [
      "meningitis",
      "bacterial meningitis",
      "viral meningitis",
      "aseptic meningitis",
      "purulent meningitis",
      "meningeal inflammation",
      "acute meningitis",
      "subacute meningitis",
      "meningococcal meningitis",
      "pneumococcal meningitis",
      "cryptococcal meningitis",
      "tuberculous meningitis",
      "tb meningitis",
      "neonatal meningitis",
      "meningeal infection",
    ],
    definition:
      "Inflammation of the meninges (dura mater, arachnoid mater, and pia mater) surrounding the brain and spinal cord — most often infectious (bacterial, viral, fungal, or mycobacterial) but can be chemical or autoimmune — presenting with fever, headache, neck stiffness, and CSF abnormalities on lumbar puncture.",
    pathophysiology:
      "Bloodborne or contiguous spread of pathogens across the blood–brain barrier or from adjacent infection (sinusitis, otitis, mastoiditis) → meningeal inflammation → ↑ intracranial pressure, cerebral edema, and irritation of pain-sensitive meninges; bacterial meningitis triggers intense neutrophilic exudate and endotoxin-mediated injury; impaired CSF resorption and BBB dysfunction cause ↓ CSF glucose and ↑ protein.",
    classicPresentation: [
      "Acute fever, severe headache, neck stiffness (nuchal rigidity)",
      "Photophobia, nausea/vomiting, altered mental status",
      "Kernig and Brudzinski signs (meningeal irritation)",
      "Petechial/purpuric rash in meningococcemia (Neisseria meningitidis)",
      "Neonate — nonspecific sepsis picture: fever or hypothermia, lethargy, poor feeding, bulging fontanelle",
      "Subacute/chronic course suggests TB, fungal, or partially treated bacterial meningitis",
    ],
    keyFindings: [
      "Lumbar puncture with opening pressure, cell count/differential, glucose, protein, Gram stain, culture",
      "Bacterial CSF — ↑ WBC (neutrophils), ↑ protein, ↓ glucose (<40 mg/dL or <50–60% serum), ↑ opening pressure",
      "Viral (aseptic) CSF — ↑ WBC (lymphocytes), normal glucose, normal/mildly ↑ protein",
      "TB/fungal CSF — lymphocytic pleocytosis, very ↑ protein, ↓ glucose (subacute)",
      "CT head before LP if focal neuro signs, papilledema, seizures, or immunocompromise (↑ herniation risk)",
      "Blood cultures positive in many bacterial meningitis cases even before CSF culture",
    ],
    keyLabs: [
      "CSF analysis — diagnostic cornerstone",
      "Blood cultures — often positive in bacteremia/meningitis",
      "PCR panels (CSF) — rapid detection of bacterial and viral pathogens",
      "Cryptococcal antigen (CSF/serum) — HIV/AIDS meningitis",
      "India ink stain — Cryptococcus in CSF",
    ],
    associations: [
      "Streptococcus pneumoniae — most common bacterial cause in adults; post-splenectomy and elderly risk",
      "Neisseria meningitidis — adolescents, college dormitories, military recruits; petechiae and Waterhouse-Friderichsen syndrome",
      "Haemophilus influenzae type b — decreased after Hib conjugate vaccine; unvaccinated children",
      "Neonatal: Group B Streptococcus, E. coli (K1), Listeria monocytogenes",
      "Listeria — elderly, pregnant, immunocompromised; ampicillin required (resistant to 3rd-gen cephalosporins)",
      "Cryptococcus neoformans — HIV/AIDS with CD4 <100",
      "Mycobacterium tuberculosis — basilar meningitis, cranial nerve palsies",
      "Enteroviruses — most common cause of viral (aseptic) meningitis",
    ],
    complications: [
      "Cerebral edema and herniation",
      "Seizures, hearing loss (especially pneumococcal in children)",
      "Hydrocephalus, brain abscess, subdural empyema",
      "Waterhouse-Friderichsen syndrome — adrenal hemorrhage in meningococcemia",
      "Death or neurologic disability if treatment delayed",
    ],
    distinguishFrom: [
      "Encephalitis — parenchymal brain inflammation; altered mental status/seizures predominate; HSV PCR in CSF",
      "Subarachnoid hemorrhage — thunderclap headache; xanthochromia and RBCs in CSF (not cleared by centrifugation)",
      "Brain abscess — focal neuro deficits; ring-enhancing lesion on imaging",
      "Meningism without meningitis — neck pain from other causes; normal CSF",
      "Lyme meningitis — lymphocytic CSF; tick exposure; erythema migrans history",
      "Carcinomatous meningitis — malignant cells in CSF; subacute course in cancer patients",
    ],
    treatment: [
      "Empiric bacterial meningitis (adults): vancomycin + ceftriaxone (or cefotaxime); add ampicillin if Listeria risk (age >50, neonate, immunocompromised, pregnant)",
      "Neonatal empiric: ampicillin + gentamicin or cefotaxime",
      "Dexamethasone given with or just before first antibiotic dose in suspected pneumococcal meningitis (↓ mortality/hearing loss)",
      "Adjust antibiotics to culture/sensitivity; Listeria requires ampicillin (not ceftriaxone alone)",
      "Viral meningitis — supportive care; acyclovir if HSV encephalitis cannot be excluded",
      "Cryptococcal — amphotericin B + flucytosine induction, then fluconazole maintenance in HIV",
      "TB meningitis — RIPE + dexamethasone per protocol",
      "Close contacts of N. meningitidis — chemoprophylaxis (e.g., rifampin, ciprofloxacin)",
    ],
    boardsPearls: [
      "Meningitis triad — fever, headache, neck stiffness (may be incomplete early)",
      "Bacterial CSF: ↑ neutrophils, ↑ protein, ↓ glucose; Viral: ↑ lymphocytes, normal glucose",
      "S. pneumoniae #1 adults; N. meningitidis in teens/young adults with petechiae; neonates → GBS, E. coli, Listeria",
      "Add ampicillin for Listeria coverage in neonates, elderly, immunocompromised — cephalosporins don't cover Listeria",
      "Dexamethasone + antibiotics for pneumococcal meningitis — give before or with first antibiotic dose",
      "Don't delay antibiotics for CT/LP if bacterial meningitis suspected — treat empirically",
      "CT before LP if focal deficits, papilledema, or altered mental status to reduce herniation risk",
      "Meningococcemia — non-blanching purpura + shock; Waterhouse-Friderichsen adrenal hemorrhage",
      "Hib conjugate vaccine ↓ Haemophilus meningitis; pneumococcal and meningococcal conjugate vaccines preventive",
    ],
    pediatrics:
      "Neonatal meningitis is a medical emergency with subtle signs — low threshold for LP and empiric ampicillin + gentamicin/cefotaxime. Hib and pneumococcal conjugate vaccines dramatically reduced pediatric bacterial meningitis. Hearing screening after pneumococcal meningitis. Doxycycline chemoprophylaxis alternatives considered for meningococcal contacts by age.",
  },
  {
    id: "herpangina",
    name: "Herpangina",
    etymology: "Greek herpes = creeping eruption + Latin angina = throat tightness",
    aliases: [
      "herpangina",
      "herpangina virus",
      "vesicular pharyngitis",
      "mouth blisters",
      "posterior pharyngeal vesicles",
    ],
    definition:
      "Self-limited enteroviral illness characterized by acute fever and small vesicular or ulcerative lesions on the posterior oropharynx (soft palate, tonsillar pillars, uvula) — typically in young children during summer.",
    pathophysiology:
      "Enterovirus infection (most commonly Coxsackie A serotypes, also echovirus, EV-A71) → mucosal replication in posterior pharynx → vesicle formation on soft palate/tonsillar pillars → painful ulceration → fever and odynophagia; fecal-oral and respiratory transmission in daycare settings.",
    classicPresentation: [
      "Young child with abrupt high fever, sore throat, odynophagia, headache",
      "Small gray-white vesicles/ulcers on posterior oropharynx (soft palate, tonsillar pillars, uvula)",
      "2–6 lesions typically (up to ~12); 1–5 mm diameter",
      "No vesicles on hands, feet, or anterior oral mucosa",
      "Summer/fall seasonality; daycare outbreak possible",
      "Resolves in 5–10 days without scarring",
    ],
    keyFindings: [
      "Posterior oropharyngeal vesicles or ulcers on exam",
      "Fever and pharyngeal erythema",
      "No hand or foot vesicular rash (distinguishes from HFMD)",
      "Anterior cervical lymphadenopathy possible",
    ],
    keyLabs: [
      "Clinical diagnosis in typical presentation — no routine testing",
      "PCR or viral culture from throat/stool if needed",
      "CBC may show mild leukocytosis",
    ],
    associations: [
      "Coxsackie A viruses (especially A16) — most common",
      "Echovirus, enterovirus 71, coxsackie B",
      "Enterovirus genus — same family as hand-foot-mouth disease",
      "Daycare and summer camp outbreaks",
    ],
    complications: [
      "Dehydration from poor oral intake",
      "Rare aseptic meningitis (same enterovirus serotypes)",
      "Febrile seizures in young children",
    ],
    distinguishFrom: [
      "Hand-foot-mouth disease — also posterior oral ulcers PLUS vesicles on palms/soles/buttocks",
      "Herpetic gingivostomatitis (HSV) — anterior mouth/gums involved; more extensive lesions; older children/adults",
      "Strep pharyngitis — exudative tonsillitis; anterior cervical LAD; responds to penicillin",
      "Aphthous ulcers — no fever; recurrent; anterior mouth",
      "Infectious mononucleosis — posterior LAD, atypical lymphocytes, splenomegaly",
    ],
    treatment: [
      "Supportive care — hydration, antipyretics",
      "Analgesics for odynophagia (acetaminophen, ibuprofen)",
      "Topical anesthetics (e.g., viscous lidocaine) for severe pain in older children",
      "No antiviral indicated for uncomplicated herpangina",
      "Avoid unnecessary antibiotics",
    ],
    boardsPearls: [
      "Posterior oropharyngeal vesicles + fever in child — herpangina (Coxsackie A enterovirus)",
      "vs HFMD — herpangina has NO hand/foot rash; HFMD adds palm/sole vesicles",
      "vs HSV gingivostomatitis — HSV affects anterior gums/mouth; herpangina is posterior pharynx",
      "Enterovirus — picornavirus, acid-stable, fecal-oral + respiratory spread",
      "Self-limited — supportive care only; summer outbreaks in daycare",
      "Same virus family as aseptic meningitis — watch for neck stiffness",
    ],
    pediatrics:
      "Peak in children <5 years; very common in daycare during summer. Poor oral intake from odynophagia — monitor hydration. Febrile seizures possible with high fever. Distinguish from HFMD (palmar/plantar vesicles) and HSV gingivostomatitis (anterior gum ulcers).",
  },
  {
    id: "hand-foot-and-mouth-disease",
    name: "Hand-Foot-and-Mouth Disease",
    etymology: "hand + foot + mouth = rash/mucosal sites + disease = disordered function",
    aliases: [
      "hand-foot-and-mouth disease",
      "hand foot and mouth disease",
      "hand-foot-mouth disease",
      "hand foot mouth disease",
      "hfmd",
      "hand foot and mouth",
      "hand-foot-mouth",
      "coxsackie hand foot mouth",
    ],
    definition:
      "Common self-limited enteroviral exanthem in young children featuring fever, oral ulcers, and vesicular rash on the palms, soles, and sometimes buttocks — classically caused by Coxsackie A16 or enterovirus A71.",
    pathophysiology:
      "Enterovirus (Coxsackie A16 most common in US; EV-A71 in Asian outbreaks) → mucocutaneous replication → oral vesicles/ulcers + vesicles on palms, soles, and interdigital areas → highly contagious fecal-oral and respiratory spread in daycare; acid-stable picornavirus survives GI tract.",
    classicPresentation: [
      "Toddler with low-grade fever, irritability, decreased oral intake",
      "Painful oral ulcers/vesicles (palate, tongue, buccal mucosa)",
      "Vesicular rash on palms and soles (and interdigital spaces)",
      "Buttock/perineal vesicles common in diapered children",
      "Summer/fall; daycare outbreak",
      "Resolves in 7–10 days",
    ],
    keyFindings: [
      "Oral vesicles or ulcers",
      "Vesicles on palms and soles (pathognomonic distribution)",
      "Low-grade fever, mild systemic symptoms",
      "No significant lymphadenopathy (vs HSV)",
    ],
    keyLabs: [
      "Clinical diagnosis — no routine testing in typical cases",
      "PCR from throat, stool, or vesicle fluid if outbreak surveillance needed",
      "CSF only if meningitis/encephalitis suspected (EV-A71 complication)",
    ],
    associations: [
      "Coxsackie A16 — most common cause in temperate climates",
      "Enterovirus A71 (EV-A71) — severe outbreaks in Asia; brainstem encephalitis risk",
      "Coxsackie A6 — atypical widespread rash in recent outbreaks",
      "Enterovirus genus — related to herpangina and aseptic meningitis",
      "Onychomadesis (nail shedding) weeks after infection — benign",
    ],
    complications: [
      "Dehydration from painful oral lesions",
      "EV-A71 — brainstem encephalitis, neurogenic pulmonary edema, death (rare; endemic areas)",
      "Aseptic meningitis (usually mild)",
      "Onychomadesis (nail loss) 1–2 months later — self-limited",
    ],
    distinguishFrom: [
      "Herpangina — posterior oral vesicles only; NO hand/foot rash",
      "Varicella — centripetal distribution; lesions in different stages; trunk predominates",
      "Herpetic gingivostomatitis — anterior mouth/gums; grouped vesicles; more toxic",
      "Eczema herpeticum — HSV in atopic dermatitis; widespread crusted erosions",
      "Rocky Mountain spotted fever — petechial rash on wrists/ankles; tick exposure",
    ],
    treatment: [
      "Supportive care — hydration, antipyretics, soft diet",
      "Analgesics for oral pain",
      "No routine antiviral therapy",
      "Hospitalize if signs of encephalitis (EV-A71) — altered mental status, myoclonus, ataxia",
      "Exclude from daycare until fever resolved and mouth sores healing",
    ],
    boardsPearls: [
      "Fever + oral ulcers + vesicles on palms and soles in toddler = HFMD (Coxsackie A16)",
      "Enterovirus — picornavirus, non-enveloped, acid-stable, fecal-oral spread",
      "vs herpangina — HFMD has hand/foot rash; herpangina is posterior pharynx only",
      "vs varicella — HFMD vesicles same stage; varicella has crops in different stages on trunk",
      "EV-A71 — severe neurologic complications in outbreaks (Asia); know for boards vignettes",
      "Onychomadesis weeks later — benign sequela, reassure parents",
      "Supportive care only — no antibiotics",
    ],
    pediatrics:
      "Peak incidence 6 months to 5 years; extremely common in daycare. Monitor hydration — oral ulcers cause refusal to eat/drink. EV-A71-associated brainstem encephalitis is rare outside endemic regions but presents with myoclonus, ataxia, and autonomic instability. Nail shedding 1–2 months later is a recognized benign sequela.",
  },
  {
    id: "herpes-labialis",
    name: "Herpes Labialis",
    etymology: "Greek herpein = to creep + Latin labium = lip",
    aliases: [
      "herpes labialis",
      "herpes labialis hsv-1",
      "herpes labialis, hsv-1",
      "cold sore",
      "cold sores",
      "fever blister",
      "fever blisters",
      "oral herpes",
      "recurrent oral herpes",
      "orolabial herpes",
      "orolabial hsv",
    ],
    definition:
      "Recurrent HSV infection of the lip or perioral skin, usually HSV-1, causing painful grouped vesicles on an erythematous base that crust and heal.",
    pathophysiology:
      "Primary HSV-1 infection establishes latency in the trigeminal ganglion. Reactivation triggered by fever, stress, UV exposure, menstruation, or immunosuppression causes anterograde viral travel to the lip/perioral epithelium, cytolysis, vesicle formation, and contagious viral shedding.",
    classicPresentation: [
      "Prodrome of tingling, burning, or pain at vermilion border",
      "Grouped vesicles on erythematous base around lip",
      "Vesicles rupture into shallow erosions, then crust",
      "Recurrent episodes at the same site",
    ],
    keyFindings: [
      "Painful grouped vesicles rather than isolated aphthous ulcer",
      "Usually keratinized mucosa/lip/perioral skin",
      "Tender regional lymphadenopathy possible in primary infection",
      "Triggers: fever, sunlight, stress, immunosuppression",
    ],
    keyLabs: [
      "Clinical diagnosis in classic recurrence",
      "HSV PCR from lesion swab if diagnosis uncertain or severe disease",
      "Tzanck smear: multinucleated giant cells and Cowdry type A inclusions (historic/less specific)",
    ],
    associations: [
      "HSV-1 classically oral; HSV-2 classically genital, but either can infect either site",
      "Latency in trigeminal sensory ganglion",
      "Eczema herpeticum risk in atopic dermatitis",
      "Herpetic keratitis risk if ocular involvement",
    ],
    complications: [
      "Secondary bacterial infection of erosions",
      "Herpetic keratitis with dendritic corneal ulcers",
      "Eczema herpeticum in patients with atopic dermatitis",
      "Severe disseminated disease in immunocompromised patients or neonates",
    ],
    distinguishFrom: [
      "Aphthous ulcer — nonkeratinized mucosa, no vesicles, not HSV",
      "Herpangina — posterior oropharyngeal enterovirus lesions in children",
      "Hand-foot-mouth disease — oral lesions plus palms/soles vesicles",
      "Impetigo — honey-colored crusts, usually Staph/Strep, not recurrent grouped vesicles",
      "Angular cheilitis — fissures at mouth corners, often Candida/irritation",
    ],
    treatment: [
      "Supportive care for mild self-limited episodes",
      "Oral valacyclovir, acyclovir, or famciclovir early in prodrome for frequent/severe recurrences",
      "Topical antivirals have modest benefit",
      "Suppressive antiviral therapy for frequent recurrences or immunocompromised patients",
      "Avoid direct contact/kissing/oral-genital contact during active lesions",
    ],
    boardsPearls: [
      "HSV-1 classically causes herpes labialis; HSV establishes latency in trigeminal ganglion",
      "Grouped painful vesicles on erythematous base is the morphology clue",
      "Reactivation triggers: fever, stress, UV light, immunosuppression",
      "Acyclovir/valacyclovir inhibit viral DNA polymerase after thymidine kinase activation",
      "Dendritic corneal ulcer → HSV keratitis; treat urgently to protect vision",
    ],
    pediatrics:
      "Primary HSV-1 in young children often presents as gingivostomatitis with fever, drooling, painful anterior mouth ulcers, and dehydration risk. Neonatal HSV can disseminate and requires IV acyclovir.",
  },
  {
    id: "serum-sickness",
    name: "Serum Sickness",
    etymology: "Latin serum = whey/blood fluid + sickness = disease state",
    aliases: [
      "serum sickness",
      "serum sickness reaction",
      "type iii serum sickness",
      "immune complex serum sickness",
    ],
    definition:
      "Systemic type III hypersensitivity reaction after exposure to foreign protein or certain drugs, classically presenting with fever, rash, arthralgias, and low complement.",
    pathophysiology:
      "Exogenous antigen triggers IgG antibody formation → circulating antigen-antibody immune complexes deposit in vessels, joints, and glomeruli → complement activation/consumption and inflammation.",
    classicPresentation: [
      "Fever, urticarial or morbilliform rash, pruritus",
      "Arthralgias or arthritis, often hands/feet",
      "Lymphadenopathy days to weeks after antiserum, antivenom, monoclonal antibody, or drug exposure",
    ],
    keyFindings: [
      "Delayed onset after exposure (often 1–2 weeks)",
      "Possible proteinuria or hematuria from immune-complex glomerulonephritis",
      "Can follow antivenom, antitoxin, rituximab, infliximab, or beta-lactam exposure",
    ],
    keyLabs: [
      "↓ C3/C4 from complement consumption",
      "↑ ESR/CRP",
      "Urinalysis may show proteinuria/hematuria",
    ],
    associations: [
      "Type III hypersensitivity",
      "Foreign animal serum or antivenom exposure",
      "Immune complex vasculitis and glomerulonephritis",
    ],
    complications: [
      "Glomerulonephritis",
      "Vasculitis",
      "Rare neuritis or myocarditis",
    ],
    distinguishFrom: [
      "Anaphylaxis — type I, immediate, IgE-mediated with bronchospasm/hypotension",
      "Serum sickness-like reaction — similar symptoms but usually normal complement/no immune complexes",
      "DRESS — fever/rash with eosinophilia and organ injury weeks after drug exposure",
    ],
    treatment: [
      "Stop offending exposure when possible",
      "Supportive care: NSAIDs, antihistamines",
      "Systemic glucocorticoids for severe symptoms or organ involvement",
    ],
    boardsPearls: [
      "Triad: fever + rash + arthralgia after foreign protein/drug exposure",
      "Mechanism: type III hypersensitivity with immune-complex deposition",
      "Low complement helps distinguish true serum sickness from serum sickness-like reaction",
      "Antivenom can save life acutely but can cause delayed serum sickness",
    ],
    pediatrics:
      "Serum sickness-like reactions are more common in children, especially after cefaclor/amoxicillin; true serum sickness still implies immune complexes and low complement.",
  },
  {
    id: "acromegaly",
    name: "Acromegaly",
    etymology: "Greek akron = extremity + megas = large",
    aliases: [
      "acromegaly",
      "growth hormone excess",
      "gh excess",
      "somatotropin excess",
      "pituitary somatotroph adenoma",
    ],
    definition:
      "Excess growth hormone after epiphyseal plate closure causing enlargement of acral soft tissue, facial bones, and viscera.",
    pathophysiology:
      "Usually a pituitary somatotroph adenoma secretes GH → liver and tissues produce IGF-1 → periosteal bone growth, soft-tissue overgrowth, insulin resistance, and organ enlargement.",
    classicPresentation: [
      "Enlarged hands/feet, increased ring or shoe size",
      "Coarse facial features, frontal bossing, prognathism, macroglossia",
      "Headache or bitemporal hemianopia from pituitary mass effect",
    ],
    keyFindings: [
      "Hypertension, cardiomyopathy, sleep apnea",
      "Carpal tunnel syndrome from soft-tissue overgrowth",
      "Insulin resistance or diabetes mellitus",
    ],
    keyLabs: [
      "↑ IGF-1 screening test",
      "Oral glucose load fails to suppress GH",
      "Pituitary MRI often shows adenoma",
    ],
    associations: [
      "Pituitary adenoma",
      "Multiple endocrine neoplasia type 1 (less common association)",
      "Colon polyps and increased colorectal cancer risk",
    ],
    complications: [
      "Hypertension and hypertrophic cardiomyopathy",
      "Obstructive sleep apnea",
      "Diabetes mellitus",
      "Degenerative joint disease",
    ],
    distinguishFrom: [
      "Gigantism — GH excess before epiphyseal plate closure",
      "Cushing syndrome — central obesity, striae, proximal weakness",
      "Hypothyroidism — coarse features possible but low thyroid hormone/slow reflexes",
    ],
    treatment: [
      "Transsphenoidal resection of pituitary adenoma",
      "Somatostatin analogs (octreotide), GH receptor antagonist (pegvisomant), dopamine agonist in select cases",
      "Radiation for residual/recurrent disease",
    ],
    boardsPearls: [
      "Best screening test: IGF-1 because GH is pulsatile",
      "Diagnostic confirmation: GH not suppressed by oral glucose",
      "Somatostatin inhibits GH; octreotide can treat unresectable/residual disease",
      "Peds: GH excess before epiphyseal closure causes gigantism, not classic acromegaly",
    ],
    pediatrics:
      "Before epiphyseal closure, GH excess causes gigantism with excessive linear growth; after closure, it causes acromegaly.",
  },
  {
    id: "aphthous-ulcer",
    name: "Aphthous Ulcer",
    etymology: "Greek aphtha = ulcer/eruption + Latin ulcus = sore",
    aliases: ["aphthous ulcer", "aphtous ulcer", "aphthous ulcers", "canker sore", "canker sores"],
    definition:
      "Painful, shallow, round oral mucosal ulcer with erythematous halo and yellow-white base; not caused by HSV.",
    pathophysiology:
      "T-cell-mediated mucosal injury triggered by local trauma, stress, nutritional deficiency, or systemic inflammatory disease.",
    classicPresentation: [
      "Painful oral ulcer on nonkeratinized mucosa (buccal/labial mucosa, floor of mouth)",
      "Recurrent episodes; no vesicular stage",
      "Heals without scarring when minor",
    ],
    keyFindings: [
      "Round ulcer with gray-yellow base and red rim",
      "No grouped vesicles (vs HSV)",
      "May coexist with genital ulcers/uveitis in Behçet disease",
    ],
    keyLabs: [
      "Clinical diagnosis",
      "Consider CBC, iron, folate, B12 if recurrent/severe",
    ],
    associations: [
      "Iron, folate, or vitamin B12 deficiency",
      "Celiac disease, inflammatory bowel disease",
      "Behçet disease",
      "HIV or neutropenia when severe/refractory",
    ],
    complications: ["Pain-limited oral intake", "Rare scarring with major aphthae"],
    distinguishFrom: [
      "HSV gingivostomatitis — vesicles, keratinized mucosa, fever",
      "Oral candidiasis — scrapeable plaques",
      "Oral squamous cell carcinoma — persistent nonhealing ulcer",
    ],
    treatment: [
      "Topical corticosteroids or anesthetics",
      "Correct nutritional deficiency",
      "Systemic therapy only for severe systemic disease",
    ],
    boardsPearls: [
      "Aphthous ulcers are painful and recurrent but not vesicular",
      "Recurrent oral + genital ulcers + uveitis = Behçet disease",
      "Nonkeratinized mucosa favors aphthous ulcer; keratinized clustered vesicles favor HSV",
    ],
    pediatrics:
      "Common in children/adolescents; monitor hydration when oral pain limits drinking. Severe recurrent ulcers warrant evaluation for IBD, celiac disease, cyclic neutropenia, or immunodeficiency.",
  },
  {
    id: "keratoconjunctivitis-sicca",
    name: "Keratoconjunctivitis Sicca (dry eyes)",
    etymology: "Greek keras = cornea + conjunctiva = joined membrane + Latin siccus = dry",
    aliases: [
      "keratoconjunctivitis sicca",
      "dry eyes",
      "dry eye",
      "sicca keratoconjunctivitis",
    ],
    definition:
      "Dry eye disease from deficient or unstable tear film causing corneal and conjunctival irritation.",
    pathophysiology:
      "Lacrimal gland dysfunction or evaporative tear loss reduces aqueous/lipid tear components → ocular surface inflammation and epithelial injury.",
    classicPresentation: [
      "Gritty/burning eyes, foreign-body sensation",
      "Photophobia or blurry vision worse with reading/screens",
      "Sjögren syndrome: dry eyes with xerostomia",
    ],
    keyFindings: [
      "Decreased tear lake",
      "Corneal punctate epithelial erosions",
      "Positive Schirmer test in aqueous-deficient dry eye",
    ],
    keyLabs: [
      "Schirmer test",
      "Fluorescein or rose bengal staining",
      "Anti-Ro/SSA and anti-La/SSB if Sjögren suspected",
    ],
    associations: [
      "Sjögren syndrome",
      "Rheumatoid arthritis and SLE",
      "Anticholinergics, antihistamines, isotretinoin",
      "Vitamin A deficiency (xerophthalmia)",
    ],
    complications: ["Keratitis", "Corneal ulceration in severe disease"],
    distinguishFrom: [
      "Allergic conjunctivitis — itching, watery discharge",
      "Bacterial conjunctivitis — purulent discharge",
      "Vitamin A deficiency — Bitot spots/night blindness",
    ],
    treatment: [
      "Artificial tears and lubricating ointment",
      "Treat underlying autoimmune disease",
      "Topical cyclosporine/lifitegrast or punctal plugs for refractory disease",
    ],
    boardsPearls: [
      "Dry eyes + dry mouth = sicca symptoms; think Sjögren",
      "Anti-Ro/SSA and anti-La/SSB support Sjögren diagnosis",
      "Schirmer test measures tear production",
    ],
  },
  {
    id: "dental-caries",
    name: "Dental Caries",
    etymology: "Latin dens = tooth + caries = decay/rottenness",
    aliases: ["dental caries", "caries", "tooth decay", "cavities", "dental cavity"],
    definition:
      "Localized demineralization and destruction of tooth enamel/dentin caused by acid-producing bacterial biofilm.",
    pathophysiology:
      "Oral bacteria ferment dietary carbohydrates → organic acids lower plaque pH → enamel hydroxyapatite dissolves; low saliva worsens buffering and remineralization.",
    classicPresentation: [
      "Tooth pain or sensitivity to sweets/cold",
      "Visible pits, fissures, or brown/black lesions",
      "May be asymptomatic until dentin/pulp involved",
    ],
    keyFindings: [
      "Enamel cavitation",
      "Plaque biofilm",
      "Xerostomia increases risk",
    ],
    keyLabs: ["Dental exam and radiographs when needed"],
    associations: [
      "Streptococcus mutans and Lactobacillus",
      "Frequent sugar exposure",
      "Xerostomia / Sjögren syndrome",
      "Poor fluoride exposure",
    ],
    complications: ["Pulpitis", "Dental abscess", "Contiguous spread to jaw/soft tissue"],
    distinguishFrom: [
      "Periodontitis — gum/attachment loss, not primary enamel decay",
      "Aphthous ulcer — mucosal ulcer, not tooth lesion",
      "Enamel fluorosis — mottled enamel from excess fluoride",
    ],
    treatment: [
      "Fluoride and dietary sugar reduction",
      "Restoration/filling for cavitated lesions",
      "Drainage/antibiotics only for spreading odontogenic infection",
    ],
    boardsPearls: [
      "S. mutans makes dextran biofilm and lactic acid from sucrose",
      "Saliva protects teeth via buffering, antimicrobial proteins, and remineralization",
      "Sjögren xerostomia → recurrent dental caries",
    ],
    pediatrics:
      "Early childhood caries can follow frequent bottle/sippy-cup sugar exposure; fluoride varnish and limiting juice/sugary drinks are high-yield prevention.",
  },
  {
    id: "glossitis",
    name: "Glossitis",
    etymology: "Greek glossa = tongue + -itis = inflammation",
    aliases: ["glossitis", "inflamed tongue", "tongue inflammation", "atrophic glossitis"],
    definition:
      "Inflammation or morphologic change of the tongue mucosa, often reflecting local irritation, infection, or systemic nutritional or inflammatory disease.",
    pathophysiology:
      "Mucosal injury or atrophy from nutritional deficiency (B12, folate, iron), autoimmune disease, infection, or chronic irritation → papillary loss, erythema, pain, or fissuring.",
    classicPresentation: [
      "Smooth, beefy red tongue with papillary loss in B12/folate deficiency",
      "Painful swollen tongue with hot/spicy food intolerance",
      "Geographic tongue — maplike migrating erythematous patches with white borders",
    ],
    keyFindings: [
      "Atrophic or erythematous tongue",
      "Median rhomboid glossitis — central posterior rhomboid erythematous patch",
      "Angular cheilitis or other deficiency stigmata may coexist",
    ],
    keyLabs: [
      "CBC, iron studies, folate, vitamin B12",
      "Consider celiac serology or TSH if clinical context suggests",
    ],
    associations: [
      "Vitamin B12 or folate deficiency",
      "Iron deficiency anemia",
      "Celiac disease",
      "Median rhomboid glossitis with Candida",
      "Geographic tongue (benign migratory glossitis)",
    ],
    complications: ["Pain-limited oral intake", "Underlying deficiency or malabsorption if untreated"],
    distinguishFrom: [
      "Oral candidiasis — scrapeable white plaques",
      "Aphthous ulcer — discrete painful ulcer, not diffuse tongue inflammation",
      "Macroglossia — tongue enlargement, not primarily inflammatory mucosal change",
    ],
    treatment: [
      "Treat underlying deficiency or systemic disease",
      "Topical antifungal if Candida-associated median rhomboid glossitis",
      "Reassurance for benign geographic tongue",
    ],
    boardsPearls: [
      "Smooth beefy red tongue with B12/folate deficiency is classic glossitis",
      "Median rhomboid glossitis is often Candida-associated",
      "Geographic tongue is benign and migratory — do not confuse with leukoplakia",
    ],
    pediatrics:
      "Iron deficiency and nutritional deficiencies can cause glossitis in children; geographic tongue is common and benign.",
  },
  {
    id: "oral-candidiasis",
    name: "Oral Candidiasis",
    etymology: "Latin candidus = white + Greek -iasis = diseased condition",
    aliases: [
      "oral candidiasis",
      "oral thrush",
      "thrush",
      "oropharyngeal candidiasis",
      "oral yeast infection",
      "pseudomembranous candidiasis",
    ],
    definition:
      "Fungal overgrowth of Candida species on oral mucosa causing white plaques, erythema, or soreness, especially when local or systemic defenses are impaired.",
    pathophysiology:
      "Disrupted oral flora or impaired immunity allows Candida overgrowth → pseudomembranous white plaques adherent to erythematous mucosa; scraping removes plaque and leaves bleeding base.",
    classicPresentation: [
      "White curdlike plaques on buccal mucosa, tongue, or palate",
      "Plaques scrape off with erythematous base underneath",
      "Burning mouth, dysphagia if esophageal extension",
    ],
    keyFindings: [
      "Scrapeable white pseudomembranes",
      "Erythematous/atrophic candidiasis in denture wearers or inhaled steroid users",
      "Angular cheilitis may coexist",
    ],
    keyLabs: [
      "KOH prep or Gram stain — yeast and pseudohyphae",
      "Germ tube test positive for Candida albicans",
      "Consider HIV testing if unexplained or recurrent",
    ],
    associations: [
      "Candida albicans",
      "HIV/AIDS and immunosuppression",
      "Broad-spectrum antibiotics and inhaled corticosteroids",
      "Diabetes mellitus, dentures, xerostomia",
      "Neutropenia and chronic mucocutaneous candidiasis",
    ],
    complications: ["Esophageal candidiasis with odynophagia", "Systemic candidiasis in severe immunocompromise"],
    distinguishFrom: [
      "Oral hairy leukoplakia (EBV) — lateral tongue, does not scrape off",
      "Leukoplakia — white patch that cannot be scraped off; premalignant",
      "Aphthous ulcer — painful discrete ulcer, not diffuse plaques",
    ],
    treatment: [
      "Topical nystatin or clotrimazole for mild disease",
      "Oral fluconazole for moderate/severe or esophageal involvement",
      "Treat underlying immunosuppression, hyperglycemia, or xerostomia",
    ],
    boardsPearls: [
      "Thrush plaques scrape off; hairy leukoplakia does not",
      "C. albicans germ tube test is positive at 37°C",
      "Inhaled steroids without mouth rinse predispose to oral candidiasis",
    ],
    pediatrics:
      "Neonatal thrush is common; also check for diaper candidiasis. Chronic mucocutaneous candidiasis in a child suggests immunodeficiency.",
  },
  {
    id: "tongue-cancer",
    name: "Tongue Cancer",
    etymology: "Latin cancer = crab (spread like crab legs) + Old English tunge = tongue",
    aliases: [
      "tongue cancer",
      "oral tongue cancer",
      "squamous cell carcinoma of the tongue",
      "tongue scc",
      "tongue squamous cell carcinoma",
      "lingual cancer",
    ],
    definition:
      "Malignant neoplasm of the tongue, usually oral squamous cell carcinoma, most often on the lateral border of the mobile tongue.",
    pathophysiology:
      "Field cancerization from tobacco/alcohol or chronic mucosal irritation → dysplasia of stratified squamous epithelium → invasive SCC with local spread to floor of mouth and cervical lymph nodes.",
    classicPresentation: [
      "Nonhealing ulcer or mass on lateral tongue border",
      "Pain, bleeding, or referred otalgia",
      "Fixation to tongue musculature as disease advances",
    ],
    keyFindings: [
      "Indurated ulcer with raised edges",
      "Cervical lymphadenopathy",
      "Leukoplakia or erythroplakia as precursor lesions",
    ],
    keyLabs: [
      "Biopsy confirms squamous cell carcinoma",
      "Imaging for nodal and local extension",
      "HPV testing more relevant for oropharyngeal SCC than anterior oral tongue",
    ],
    associations: [
      "Tobacco and alcohol use",
      "Leukoplakia and erythroplakia",
      "Chronic mechanical irritation",
      "HPV-associated SCC more classically at base of tongue/oropharynx",
    ],
    complications: ["Cervical nodal metastasis", "Local invasion affecting speech/swallowing", "Recurrence after treatment"],
    distinguishFrom: [
      "Aphthous ulcer — painful, shallow, heals within weeks",
      "Oral candidiasis — scrapeable white plaques",
      "Oral hairy leukoplakia — HIV-associated lateral tongue plaque, not invasive ulcer",
    ],
    treatment: [
      "Surgical resection ± neck dissection",
      "Radiation ± chemotherapy depending on stage",
      "Smoking/alcohol cessation",
    ],
    boardsPearls: [
      "Lateral tongue border is the classic high-yield site for oral SCC",
      "Persistent nonhealing oral ulcer >2 weeks needs biopsy",
      "Erythroplakia is more ominous than leukoplakia for malignant transformation",
    ],
  },
  {
    id: "macroglossia",
    name: "Macroglossia",
    etymology: "Greek makros = large + glossa = tongue",
    aliases: ["macroglossia", "enlarged tongue", "tongue enlargement", "large tongue"],
    definition:
      "Abnormally enlarged tongue that may be congenital or acquired, causing airway, feeding, speech, or dental problems.",
    pathophysiology:
      "True enlargement from tissue overgrowth (hypothyroid myxedema, acromegaly, amyloid deposition) or relative protrusion from small oral cavity; mass effect can obstruct airway or push teeth apart.",
    classicPresentation: [
      "Protruding tongue with tooth indentations (cobblestone/scalloped margins)",
      "Speech articulation difficulty or mouth breathing",
      "Airway obstruction or feeding difficulty in infants",
    ],
    keyFindings: [
      "Enlarged tongue with dental imprinting",
      "Open bite or anterior open occlusion from tongue thrust",
      "Signs of underlying systemic disease (hypothyroidism, acromegaly, Down syndrome)",
    ],
    keyLabs: [
      "TSH/free T4 if hypothyroidism suspected",
      "IGF-1 if acromegaly suspected",
      "Biopsy if amyloidosis suspected",
    ],
    associations: [
      "Down syndrome",
      "Congenital hypothyroidism",
      "Acromegaly",
      "Primary (AL) amyloidosis",
      "Beckwith-Wiedemann syndrome",
    ],
    complications: ["Airway obstruction", "Obstructive sleep apnea", "Malocclusion and drooling"],
    distinguishFrom: [
      "Ankyloglossia — restricted tongue mobility from short frenulum, not true enlargement",
      "Glossitis — inflammation/atrophy rather than organomegaly",
      "Acute tongue swelling (angioedema/anaphylaxis) — sudden onset",
    ],
    treatment: [
      "Treat underlying cause (levothyroxine, acromegaly therapy, amyloid workup)",
      "Airway support when severe",
      "Speech/dental management as needed",
    ],
    boardsPearls: [
      "Macroglossia with hypothyroidism and developmental delay = congenital hypothyroidism",
      "Beckwith-Wiedemann syndrome: macroglossia, omphalocele, hemihyperplasia, ↑ Wilms tumor risk",
      "Acromegaly causes macroglossia with coarse facial features and enlarged hands/feet",
    ],
    pediatrics:
      "Macroglossia is seen in Beckwith-Wiedemann syndrome and congenital hypothyroidism; monitor for airway compromise and screen for Wilms tumor in Beckwith-Wiedemann.",
  },
  {
    id: "ankyloglossia",
    name: "Ankyloglossia",
    etymology: "Greek ankylos = stiff/fixed + glossa = tongue",
    aliases: ["ankyloglossia", "tongue-tie", "tongue tie", "short lingual frenulum", "lingual frenulum anomaly"],
    definition:
      "Congenital short, thick, or anteriorly inserted lingual frenulum restricting tongue elevation and protrusion.",
    pathophysiology:
      "Abnormal frenulum attachment limits tongue mobility → impaired latch in infants and sometimes articulation of lingual sounds (t, d, l) later in childhood.",
    classicPresentation: [
      "Heart-shaped tongue tip on protrusion",
      "Inability to lift tongue to palate or protrude past lower lip",
      "Infant breastfeeding difficulty with poor latch",
    ],
    keyFindings: [
      "Short/tight lingual frenulum",
      "Restricted tongue elevation and lateralization",
      "Not true tongue enlargement",
    ],
    keyLabs: ["Clinical diagnosis"],
    associations: [
      "Breastfeeding difficulty in neonates",
      "Speech articulation issues in select children",
      "May coexist with other craniofacial anomalies",
    ],
    complications: ["Poor infant weight gain from feeding difficulty", "Speech delay in some cases"],
    distinguishFrom: [
      "Macroglossia — enlarged tongue, not restricted by frenulum",
      "Neurologic tongue weakness (CN XII palsy) — weakness rather than tethering",
      "Cleft palate — midline structural defect, not frenulum restriction",
    ],
    treatment: [
      "Lactation support first in mild cases",
      "Frenotomy or frenuloplasty if significant feeding or speech impairment",
    ],
    boardsPearls: [
      "Heart-shaped tongue tip on protrusion suggests ankyloglossia",
      "Short frenulum restricts mobility; macroglossia is true enlargement",
      "CN XII palsy causes tongue deviation toward lesion, not frenulum tethering",
    ],
    pediatrics:
      "Evaluate when breastfeeding is impaired; frenotomy can improve latch in selected infants. Not every tongue-tie requires surgery.",
  },
  {
    id: "chronic-kidney-disease",
    name: "Chronic Kidney Disease",
    etymology: "Greek chronos = time + Old English cwið + Latin ren = kidney + Latin dis = apart + ease = comfort",
    aliases: [
      "chronic kidney disease",
      "chronic kidney diseases",
      "ckd",
      "chronic renal disease",
      "chronic renal diseases",
      "chronic renal failure",
      "crf",
      "chronic renal insufficiency",
      "renal insufficiency",
      "chronic nephropathy",
    ],
    definition:
      "Progressive, irreversible loss of kidney function for ≥3 months, defined by reduced GFR and/or persistent markers of kidney damage.",
    pathophysiology:
      "Nephron loss from diabetes, hypertension, glomerular disease, or tubulointerstitial injury → ↓ GFR → retention of urea/creatinine, impaired electrolyte/acid-base regulation, ↓ EPO, and ↓ 1,25-dihydroxyvitamin D activation.",
    classicPresentation: [
      "Often asymptomatic until advanced",
      "Fatigue, nocturia, foamy urine (proteinuria), peripheral edema",
      "Hypertension and bone pain in later stages",
    ],
    keyFindings: [
      "↑ creatinine with ↓ estimated GFR",
      "Proteinuria or albuminuria",
      "Anemia, metabolic acidosis, hyperphosphatemia",
      "Small echogenic kidneys on ultrasound in chronic disease",
    ],
    keyLabs: [
      "Serum creatinine and eGFR",
      "Urinalysis with protein/albumin quantification",
      "Electrolytes, bicarbonate, phosphorus, calcium, PTH",
      "CBC for anemia",
    ],
    associations: [
      "Diabetes mellitus and hypertension (most common causes in adults)",
      "Diabetic nephropathy",
      "Polycystic kidney disease",
      "Glomerulonephritis and reflux nephropathy",
      "Secondary hyperparathyroidism of CKD",
    ],
    complications: [
      "End-stage renal disease",
      "Cardiovascular disease",
      "Renal osteodystrophy",
      "Hyperkalemia and uremic symptoms",
    ],
    distinguishFrom: [
      "Acute kidney injury — rapid creatinine rise over days with often reversible cause",
      "Prerenal azotemia — BUN/Cr >20:1, low urine Na, improves with volume repletion",
      "End-stage renal disease — CKD stage 5 (GFR <15) or dialysis dependence",
    ],
    treatment: [
      "Treat underlying cause and control BP/glucose",
      "ACE inhibitor or ARB for proteinuric CKD",
      "Avoid nephrotoxins (NSAIDs, contrast when possible)",
      "Phosphate binders, vitamin D, ESA for CKD-mineral bone disease and anemia",
    ],
    boardsPearls: [
      "CKD = GFR <60 mL/min/1.73 m² or kidney damage markers for ≥3 months",
      "Diabetes + HTN are the leading CKD causes in the US",
      "CKD causes normocytic anemia via ↓ EPO and secondary hyperparathyroidism via ↓ vitamin D activation",
      "ACEi/ARB slow proteinuric CKD but monitor K⁺ and creatinine",
    ],
    pediatrics:
      "Congenital anomalies, reflux nephropathy, and glomerular disease are important pediatric causes; monitor growth and bone health in chronic disease.",
  },
  {
    id: "end-stage-renal-disease",
    name: "End-Stage Renal Disease",
    etymology: "Latin finis = end + Latin status = state + Latin ren = kidney + Latin dis = apart + ease = comfort",
    aliases: [
      "end-stage renal disease",
      "esrd",
      "end stage renal disease",
      "stage 5 ckd",
      "ckd stage 5",
      "kidney failure requiring dialysis",
      "dialysis-dependent renal failure",
    ],
    definition:
      "Terminal kidney failure (CKD stage 5) with GFR <15 mL/min/1.73 m² or need for chronic dialysis or kidney transplantation.",
    pathophysiology:
      "Severe nephron loss → accumulation of uremic toxins, fluid overload, electrolyte derangements, and endocrine dysfunction → multisystem uremic syndrome unless cleared by dialysis or replaced by transplant.",
    classicPresentation: [
      "Marked fatigue, nausea, vomiting, pruritus, altered taste",
      "Volume overload with edema and dyspnea",
      "Confusion or asterixis in severe uremia",
    ],
    keyFindings: [
      "Very low or absent urine output in some patients",
      "Uremic frost, pericardial rub, or encephalopathy",
      "Platelet dysfunction with prolonged bleeding time",
      "Hyperkalemia and metabolic acidosis",
    ],
    keyLabs: [
      "GFR <15 mL/min/1.73 m²",
      "↑ BUN and creatinine",
      "Hyperphosphatemia, hypocalcemia, ↑ PTH",
      "Anemia and metabolic acidosis",
    ],
    associations: [
      "Progression from chronic kidney disease",
      "Diabetes mellitus and hypertension",
      "Secondary hyperparathyroidism",
      "Dialysis access (AV fistula, catheter) complications",
    ],
    complications: [
      "Uremic pericarditis and encephalopathy",
      "Hyperkalemia-induced arrhythmia",
      "Dialysis disequilibrium syndrome",
      "Renal osteodystrophy and vascular calcification",
    ],
    distinguishFrom: [
      "Chronic kidney disease — earlier stages with GFR ≥15 and often fewer uremic symptoms",
      "Acute kidney injury — potentially reversible rapid decline",
      "Prerenal azotemia — improves with volume repletion",
    ],
    treatment: [
      "Renal replacement therapy: hemodialysis, peritoneal dialysis, or transplant",
      "Dietary potassium/phosphate restriction and fluid management",
      "Erythropoiesis-stimulating agents, iron, phosphate binders, vitamin D analogs",
      "Avoid routine NSAIDs and nephrotoxins",
    ],
    boardsPearls: [
      "ESRD = CKD stage 5 (GFR <15) or dialysis/transplant requirement",
      "Uremic bleeding is due to platelet dysfunction — normal platelet count",
      "Uremic pericarditis may not fully respond until dialysis; avoid anticoagulation if hemorrhagic risk",
      "Secondary hyperparathyroidism: ↑ phosphate, ↓ calcium, ↑ PTH",
    ],
    pediatrics:
      "Children with ESRD need growth monitoring, nutrition support, and often peritoneal dialysis; congenital urologic disease is a common underlying cause.",
  },
  {
    id: "cystitis",
    name: "Cystitis",
    etymology: "Greek kystis = bladder + -itis = inflammation",
    aliases: ["cystitis", "acute cystitis", "uncomplicated cystitis", "bladder infection", "lower uti"],
    definition:
      "Acute bacterial infection and inflammation of the bladder, the most common form of lower urinary tract infection.",
    pathophysiology:
      "Uropathogens (usually E. coli with type 1 and P fimbriae) ascend from perineum into bladder → mucosal inflammation → dysuria, frequency, and pyuria without systemic upper tract involvement.",
    classicPresentation: [
      "Dysuria, urinary frequency, and urgency",
      "Suprapubic pain or pressure",
      "No fever, flank pain, or CVA tenderness in uncomplicated disease",
    ],
    keyFindings: [
      "Pyuria and bacteriuria on urinalysis",
      "Positive nitrites if gram-negative organisms present",
      "Normal vitals and no costovertebral angle tenderness",
    ],
    keyLabs: [
      "Urinalysis with pyuria/bacteriuria",
      "Urine culture (>10⁵ CFU/mL) when diagnosis uncertain or recurrent",
    ],
    associations: [
      "Female sex and sexual activity",
      "Recent antibiotic use or spermicide use",
      "Catheterization and diabetes mellitus",
      "Anatomic or functional voiding abnormalities in complicated cases",
    ],
    complications: [
      "Pyelonephritis if infection ascends",
      "Recurrent UTIs",
      "Emphysematous cystitis in diabetics (rare)",
    ],
    distinguishFrom: [
      "Pyelonephritis — fever, flank/CVA tenderness, WBC casts",
      "Urethritis (GC/Chlamydia) — urethral discharge, often sexually transmitted",
      "Vaginitis — external dysuria, discharge, normal urine",
      "Interstitial cystitis — chronic pelvic pain without infection",
    ],
    treatment: [
      "Uncomplicated cystitis in women: nitrofurantoin or TMP-SMX (local resistance patterns matter)",
      "Avoid fluoroquinolones as first-line for uncomplicated cystitis when alternatives exist",
      "Treat longer and evaluate anatomy if recurrent or complicated",
    ],
    boardsPearls: [
      "Uncomplicated cystitis = bladder only; E. coli is the leading cause",
      "Nitrites on dipstick suggest gram-negative organisms with nitrate reductase",
      "Upper tract infection signs (fever, flank pain, WBC casts) mean pyelonephritis, not simple cystitis",
    ],
    pediatrics:
      "Febrile UTI in infants and young children is treated as pyelonephritis until proven otherwise; evaluate for vesicoureteral reflux after first febrile UTI.",
  },
  {
    id: "bladder-cancer",
    name: "Bladder Cancer",
    etymology: "Old English blædre = bladder + Latin cancro = crab/malignancy",
    aliases: [
      "bladder cancer",
      "bladder carcinoma",
      "urothelial carcinoma of bladder",
      "urothelial bladder cancer",
      "urothelial bladder carcinoma",
      "ubc",
      "transitional cell carcinoma of bladder",
      "tcc bladder",
      "bladder urothelial carcinoma",
    ],
    definition:
      "Malignant neoplasm of the bladder urothelium, most commonly urothelial (transitional cell) carcinoma presenting with hematuria.",
    pathophysiology:
      "Carcinogens in urine (smoking metabolites, aromatic amines, cyclophosphamide metabolites) damage urothelium → field cancerization → papillary or flat lesions; schistosomiasis predisposes to squamous carcinoma.",
    classicPresentation: [
      "Painless gross or microscopic hematuria",
      "Irritative voiding symptoms if carcinoma in situ",
      "Older adult with smoking history",
    ],
    keyFindings: [
      "Hematuria without dysuria in classic case",
      "Bladder mass on cystoscopy",
      "Urothelial malignancy on biopsy",
    ],
    keyLabs: [
      "Urinalysis/cytology — hematuria; cytology may detect high-grade disease",
      "Cystoscopy with biopsy is diagnostic",
      "Imaging for staging and upper tract involvement",
    ],
    associations: [
      "Tobacco smoking (major risk factor)",
      "Occupational aromatic amine exposure (dye/rubber industries)",
      "Cyclophosphamide and pelvic radiation",
      "Schistosoma haematobium — squamous cell carcinoma of bladder",
      "Lynch syndrome",
    ],
    complications: [
      "Local invasion and obstruction",
      "Upper tract urothelial carcinoma (field effect)",
      "Metastasis to nodes, liver, bone, lung",
    ],
    distinguishFrom: [
      "Cystitis — dysuria, pyuria, infection; hematuria may occur but cancer classically painless",
      "Nephrolithiasis — colicky flank pain, stones on imaging",
      "Glomerulonephritis — RBC casts, proteinuria, hypertension",
      "Benign prostatic hyperplasia — LUTS with possible hematuria but no bladder mass",
    ],
    treatment: [
      "Transurethral resection for non-muscle-invasive disease ± intravesical BCG/chemotherapy",
      "Radical cystectomy for muscle-invasive disease",
      "Systemic therapy for advanced/metastatic disease",
    ],
    boardsPearls: [
      "Painless hematuria in older smoker → bladder cancer until proven otherwise",
      "Most common histology in the US is urothelial carcinoma",
      "Schistosoma haematobium + hematuria → think squamous bladder cancer",
    ],
  },
  {
    id: "neurogenic-bladder",
    name: "Neurogenic Bladder",
    etymology: "Greek neuron = nerve + Latin gignere = to produce + Old English blædre = bladder",
    aliases: [
      "neurogenic bladder",
      "neurogenic lower urinary tract dysfunction",
      "neuropathic bladder",
      "bladder dysfunction neurologic",
    ],
    definition:
      "Bladder storage and emptying dysfunction caused by neurologic disease affecting central or peripheral pathways controlling micturition.",
    pathophysiology:
      "Disruption of sacral micturition reflex arc or suprapontine inhibition → detrusor overactivity or areflexia, sphincter dyssynergia, high bladder pressures, incomplete emptying, and risk of upper tract damage.",
    classicPresentation: [
      "Urinary retention, incontinence, or both",
      "Recurrent UTIs from stasis",
      "Known spinal cord injury, MS, or diabetic neuropathy",
    ],
    keyFindings: [
      "High post-void residual or overflow incontinence",
      "Detrusor-sphincter dyssynergia on urodynamics",
      "Hydronephrosis if chronic high intravesical pressure",
    ],
    keyLabs: [
      "Post-void residual volume",
      "Urodynamic studies",
      "Renal ultrasound if obstructive uropathy suspected",
    ],
    associations: [
      "Spinal cord injury",
      "Multiple sclerosis",
      "Diabetic autonomic neuropathy",
      "Spina bifida and cauda equina syndrome",
      "Parkinson disease and stroke",
    ],
    complications: [
      "Recurrent urinary tract infections",
      "Hydronephrosis and chronic kidney disease",
      "Autonomic dysreflexia in spinal cord injury above T6 with bladder distention",
    ],
    distinguishFrom: [
      "Benign prostatic hyperplasia — smooth enlarged prostate on DRE in older men",
      "Urethral stricture — history of instrumentation/trauma",
      "Simple cystitis — infectious symptoms with pyuria, not primary neurologic voiding disorder",
    ],
    treatment: [
      "Intermittent catheterization for retention",
      "Anticholinergics or β₃-agonists for overactive neurogenic bladder when safe",
      "Treat infection and avoid chronic high bladder pressures",
    ],
    boardsPearls: [
      "Spinal cord injury above T6 + bladder distention can trigger autonomic dysreflexia — urgent catheterization",
      "Upper motor neuron lesion → spastic bladder; lower motor neuron/cauda equina → flaccid areflexic bladder",
      "Chronic high bladder pressure can cause silent hydronephrosis",
    ],
    pediatrics:
      "Spina bifida commonly causes neurogenic bladder; early urologic follow-up protects upper tracts.",
  },
  {
    id: "primary-vesicoureteral-reflux",
    name: "Primary Vesicoureteral Reflux",
    etymology: "Latin primarius = first + vesica = bladder + ureter + re = back + fluxus = flow",
    aliases: [
      "primary vesicoureteral reflux",
      "primary vur",
      "congenital vesicoureteral reflux",
      "congenital vur",
    ],
    definition:
      "Congenital retrograde urine flow from bladder into ureter due to intrinsic abnormality of the ureterovesical junction (UVJ) valve mechanism — not caused by downstream bladder outlet obstruction.",
    pathophysiology:
      "Short intramural ureter tunnel or abnormal UVJ anatomy → incompetent flap-valve at ureteral orifice → urine refluxes during bladder filling or voiding → infected urine reaches renal pelvis → pyelonephitis and cortical scarring; often familial.",
    classicPresentation: [
      "Infant or young child with first febrile UTI",
      "Often otherwise healthy without outlet obstruction",
      "May be detected on sibling screening when family history present",
    ],
    keyFindings: [
      "Reflux on VCUG without posterior urethral valves or stricture",
      "Hydroureteronephrosis on ultrasound",
    ],
    keyLabs: [
      "VCUG — diagnostic; grades I–V severity",
      "Renal ultrasound — scarring, dysplasia, hydronephrosis",
    ],
    associations: [
      "Family history of VUR",
      "Renal dysplasia or congenital anomalies",
      "Lower grades often resolve spontaneously with growth",
    ],
    complications: [
      "Febrile pyelonephitis",
      "Reflux nephropathy and renal scarring",
      "Hypertension and CKD in severe bilateral cases",
    ],
    distinguishFrom: [
      "Secondary VUR — bladder outlet obstruction (posterior urethral valves), neurogenic bladder, or high voiding pressures",
      "Obstructive uropathy without reflux — no retrograde flow on VCUG",
      "Vesicoureteral reflux (general) — umbrella term including primary and secondary forms",
    ],
    treatment: [
      "Low-grade may resolve spontaneously — observation with UTI prophylaxis per specialist",
      "Treat UTIs promptly",
      "Surgical ureteral reimplantation or endoscopic bulking for persistent high-grade reflux with breakthrough infections",
    ],
    boardsPearls: [
      "Primary VUR = congenital short intramural ureter / faulty UVJ valve",
      "vs secondary VUR — fix obstruction (PUV) first",
      "Many low-grade primary VUR cases resolve as child grows",
      "Febrile UTI + primary VUR → risk of permanent renal scarring",
    ],
    pediatrics:
      "Most common form of VUR in children; siblings may need screening. Primary VUR grades I–II often resolve by age 5–6.",
  },
  {
    id: "bilateral-vesicoureteral-reflux",
    name: "Bilateral Vesicoureteral Reflux",
    etymology: "Latin bilateralis = two-sided + vesica = bladder + ureter + re = back + fluxus = flow",
    aliases: [
      "bilateral vesicoureteral reflux",
      "bilateral vur",
      "bilateral reflux",
    ],
    definition:
      "Retrograde flow of urine from the bladder into both ureters and often both renal pelves — carries higher risk of bilateral renal injury than unilateral reflux.",
    pathophysiology:
      "Bilateral incompetent ureterovesical junctions (primary) or bilateral reflux secondary to bladder outlet obstruction/neurogenic bladder → repeated ascending infection and pressure effects on both kidneys → bilateral hydronephrosis, scarring, and impaired renal function.",
    classicPresentation: [
      "Young child with febrile UTIs and bilateral hydroureteronephrosis on ultrasound",
      "May have growth failure or hypertension if chronic renal damage",
      "Boys with posterior urethral valves may have bilateral reflux secondary to obstruction",
    ],
    keyFindings: [
      "Reflux into both ureters on VCUG",
      "Bilateral hydronephrosis on renal ultrasound",
      "Bilateral renal scarring on DMSA after pyelonephitis",
    ],
    keyLabs: [
      "VCUG — bilateral reflux grading",
      "Renal function tests if bilateral scarring suspected",
      "Blood pressure monitoring",
    ],
    associations: [
      "Primary bilateral VUR — familial UVJ defects",
      "Posterior urethral valves with secondary bilateral reflux",
      "Neurogenic bladder with high intravesical pressures",
    ],
    complications: [
      "Bilateral reflux nephropathy",
      "Chronic kidney disease and hypertension in childhood",
      "Recurrent bilateral pyelonephitis",
    ],
    distinguishFrom: [
      "Unilateral VUR — reflux on one side only; generally lower bilateral renal risk",
      "Bilateral hydronephrosis without reflux — obstruction (UPJ, PUV) without retrograde flow on VCUG",
      "Primary vs secondary bilateral VUR — evaluate for outlet obstruction in boys",
    ],
    treatment: [
      "Aggressive UTI prevention and prompt treatment",
      "Correct bladder outlet obstruction if secondary cause",
      "Surgical intervention for persistent high-grade bilateral reflux with breakthrough febrile UTIs or declining renal function",
    ],
    boardsPearls: [
      "Bilateral VUR → both kidneys at risk for pyelonephitis scarring",
      "PUV in boy can cause bilateral reflux + bilateral hydronephrosis",
      "Monitor BP and renal function in bilateral disease",
      "vs unilateral VUR — contralateral kidney may compensate if unilateral scarring",
    ],
    pediatrics:
      "Bilateral primary VUR with recurrent febrile UTIs is high-risk for bilateral renal scarring — close nephrology/urology follow-up essential.",
  },
  {
    id: "hydronephrosis",
    name: "Hydronephrosis",
    etymology: "Greek hydor = water + nephros = kidney + -osis = condition",
    aliases: [
      "hydronephrosis",
      "hydroureteronephrosis",
      "pelvicalyceal dilatation",
      "pelvicalyceal dilation",
      "renal pelvis dilation",
      "dilated renal pelvis",
    ],
    definition:
      "Dilation of the renal pelvis and calyces from accumulation of urine due to urinary outflow obstruction, reflux, or physiologic dilatation — may be unilateral or bilateral.",
    pathophysiology:
      "Increased pressure upstream from obstruction (stone, UPJ obstruction, posterior urethral valves, BPH) or sustained reflux → pelvicalyceal enlargement → compression of renal parenchyma → cortical thinning and impaired function if prolonged; physiologic hydronephrosis in pregnancy from progesterone and ureteral compression.",
    classicPresentation: [
      "Often asymptomatic when mild — found on prenatal ultrasound or imaging workup",
      "Flank pain if acute obstruction (stone)",
      "UTI symptoms if stagnant urine becomes infected",
      "Pregnant woman — right-sided physiologic hydronephrosis common",
      "Neonate with palpable flank mass or anuria if bilateral obstruction (PUV)",
    ],
    keyFindings: [
      "Dilated renal pelvis and calyces on ultrasound or CT",
      "Cortical thinning in chronic cases",
      "Hydroureter if ureter also dilated (hydroureteronephrosis)",
    ],
    keyLabs: [
      "Renal ultrasound — first-line anatomic assessment",
      "VCUG if reflux suspected",
      "Creatinine/BUN if bilateral or chronic obstruction",
    ],
    associations: [
      "Ureteropelvic junction obstruction — common congenital cause in infants",
      "Posterior urethral valves — bilateral in boys",
      "Nephrolithiasis",
      "BPH and ureteral stricture",
      "Vesicoureteral reflux",
      "Pregnancy — physiologic",
      "Crossing renal vessel causing UPJ obstruction",
    ],
    complications: [
      "Postrenal azotemia if bilateral obstruction",
      "Infection of stagnant urine (pyelonephritis, urosepsis)",
      "Irreversible renal parenchymal loss with chronic obstruction",
    ],
    distinguishFrom: [
      "Renal cyst — round anechoic lesion without pelvicalyceal connection",
      "Extrarenal pelvis — normal anatomic variant without calyceal dilation",
      "Physiologic pregnancy hydronephrosis — no obstruction, resolves postpartum",
      "Hydroureter alone — ureteral dilation; hydronephrosis specifies renal pelvis/calyces",
    ],
    treatment: [
      "Relieve obstruction — stent, nephrostomy, stone removal, PUV ablation, BPH therapy",
      "Treat underlying reflux or UPJ obstruction surgically if persistent",
      "Observe mild physiologic or transient neonatal hydronephrosis",
    ],
    boardsPearls: [
      "Hydronephrosis = dilated renal pelvis/calyces from obstruction or reflux",
      "Prenatal hydronephrosis → evaluate for UPJ obstruction or posterior urethral valves",
      "Bilateral hydronephrosis in newborn boy → posterior urethral valves until proven otherwise",
      "Pregnancy — right > left physiologic hydronephrosis from ureteral compression",
      "Staghorn calculus can cause obstruction and hydronephrosis",
    ],
    pediatrics:
      "Prenatal hydronephrosis is common; postnatal ultrasound distinguishes UPJ obstruction, VUR, and PUV. Bilateral prenatal hydronephrosis with oligohydramnios suggests severe obstructive uropathy.",
  },
  {
    id: "horseshoe-kidney",
    name: "Horseshoe Kidney",
    etymology: "English horse + shoe + kidney — fused renal lower poles forming a U-shaped organ",
    aliases: [
      "horseshoe kidney",
      "horseshoe kidneys",
      "renal fusion",
      "fused kidney",
      "fused kidneys",
    ],
    definition:
      "Most common renal fusion anomaly — the lower poles of both kidneys are joined by an isthmus of functioning or fibrous renal tissue, preventing normal ascent and rotating the kidneys into a midline lower position.",
    pathophysiology:
      "Abnormal metanephric migration during development → fusion of lower poles (usually anterior isthmus across midline, anterior to aorta and IVC) → kidneys arrested in pelvis or lower abdomen → altered ureteropelvic anatomy predisposes to obstruction, stones, and infection.",
    classicPresentation: [
      "Often asymptomatic — incidental finding on imaging",
      "Recurrent UTIs or flank pain from obstruction/stones",
      "Workup for Turner syndrome or other congenital anomalies",
      "May present in childhood with UPJ obstruction symptoms",
    ],
    keyFindings: [
      "Midline or lower-position fused kidneys on CT/MRI/ultrasound",
      "Isthmus crossing anterior to great vessels (classic)",
      "Abnormal calyceal drainage and ureter course",
    ],
    keyLabs: [
      "Renal ultrasound or cross-sectional imaging for diagnosis",
      "Urinalysis and cultures if UTI suspected",
      "Renal function tests if obstructive nephropathy",
    ],
    associations: [
      "Turner syndrome (45,X)",
      "Trisomy 18 and other chromosomal anomalies",
      "VACTERL association",
      "Ureteropelvic junction obstruction",
      "Renal stones and hydronephrosis",
      "Increased risk of renal cell carcinoma (modest; boards mention association)",
    ],
    complications: [
      "Obstructive uropathy and hydronephrosis",
      "Nephrolithiasis",
      "Recurrent pyelonephitis",
      "Chronic kidney disease if longstanding obstruction",
    ],
    distinguishFrom: [
      "Crossed fused ectopia — one kidney crosses midline; different fusion pattern",
      "Pelvic kidney (unilateral ectopia) — single kidney low without contralateral fusion",
      "Normal kidney — separate organs in normal fossae",
    ],
    treatment: [
      "Treat complications — stone management, infection, surgical correction of UPJ obstruction if needed",
      "No treatment required if asymptomatic incidental finding",
      "Avoid unnecessary nephrectomy — preserve renal mass",
    ],
    boardsPearls: [
      "Horseshoe kidney = fused lower poles + isthmus anterior to great vessels",
      "Most common renal fusion anomaly; often asymptomatic",
      "Associated with Turner syndrome",
      "Fails to ascend normally — lower position in abdomen/pelvis",
      "UPJ obstruction and stones are common complications",
    ],
    pediatrics:
      "May be detected on prenatal ultrasound or during Turner/chromosomal workup; monitor for obstruction and UTIs during childhood.",
  },
  {
    id: "patent-urachus",
    name: "Patent Urachus",
    etymology: "Latin patere = to be open + Greek oura = tail (urachus) = persistent fetal bladder-umbilical connection",
    aliases: [
      "patent urachus",
      "urachal fistula",
      "urachal patency",
      "persistent urachus",
      "urine from umbilicus",
      "umbilical urine drainage",
    ],
    definition:
      "Failure of the urachus to obliterate after birth, leaving an open channel between the bladder dome and umbilicus — urine drains from the umbilicus in the neonate.",
    pathophysiology:
      "Allantois forms urachus connecting fetal bladder to umbilicus → normally fibroses into median umbilical ligament; complete failure of closure → patent urachus → urine leaks from umbilicus when bladder fills/voids.",
    classicPresentation: [
      "Neonate with clear or urine-like fluid draining from umbilicus",
      "Fluid reappears after voiding or bladder filling",
      "Persistent wet umbilicus despite cord separation",
      "No bile or feculent drainage (vs omphaloenteric fistula)",
    ],
    keyFindings: [
      "Umbilical drainage that increases with micturition",
      "Fluid confirms as urine (high creatinine)",
      "Patent tube on ultrasound or fistulogram from umbilicus to bladder",
    ],
    keyLabs: [
      "Fluid creatinine/sodium — urine-like composition from umbilical discharge",
      "Ultrasound — urachal tract to bladder",
    ],
    associations: [
      "Other urachal anomalies — urachal cyst, sinus, diverticulum (partial patency spectrum)",
      "Urachal adenocarcinoma risk in adulthood with chronic urachal remnants (rare)",
      "Umbilical infection if untreated",
    ],
    complications: [
      "Omphalitis and ascending UTI",
      "Urachal adenocarcinoma in long-standing remnant (adult)",
    ],
    distinguishFrom: [
      "Omphalitis — erythematous umbilicus without urine-specific drainage pattern",
      "Patent omphalomesenteric (vitelline) duct — feculent or bilious umbilical discharge",
      "Urachal cyst — closed midline cyst, not continuous urine leak",
      "Umbilical granuloma — small pink tissue, serous not urine drainage",
    ],
    treatment: [
      "Surgical excision of urachus with bladder cuff",
      "Antibiotics if infected",
      "Do not confuse with vitelline duct anomalies — different embryology",
    ],
    boardsPearls: [
      "Patent urachus = urine from umbilicus in neonate",
      "Allantois → urachus → median umbilical ligament if obliterated",
      "vs patent vitelline duct — meconium/bile from umbilicus, not urine",
      "Partial closure → urachal cyst, sinus, or diverticulum",
      "Excise urachus to bladder dome to prevent infection and malignancy risk",
    ],
    pediatrics:
      "Neonatal umbilical urine drainage is patent urachus until proven otherwise; distinguish from omphalomesenteric fistula (vitelline duct) with bilious/meconium content.",
  },
  {
    id: "posterior-urethral-valves",
    name: "Posterior Urethral Valves",
    etymology: "Latin posterior = behind + Greek ourethra = urinary passage + Latin valva = fold/door",
    aliases: [
      "posterior urethral valves",
      "posterior urethral valve",
      "puv",
      "congenital posterior urethral valves",
      "type i posterior urethral valves",
      "urethral valves",
    ],
    definition:
      "Most common cause of congenital bladder outlet obstruction in male infants — mucosal folds (valves) in the prostatic urethra obstruct urinary flow, causing trabeculated bladder, bilateral hydronephrosis, and secondary vesicoureteral reflux.",
    pathophysiology:
      "Congenital abnormal folds in posterior urethra (Type I most common) → obstruction during voiding → high intravesical pressure → detrusor hypertrophy/trabeculation → bilateral hydroureteronephrosis, renal dysplasia; oligohydramnios if severe prenatal obstruction (Potter sequence risk if bilateral renal failure).",
    classicPresentation: [
      "Male infant or boy with weak urinary stream, dribbling, or straining to void",
      "Prenatal bilateral hydronephrosis and oligohydramnios",
      "Neonatal anuria or palpable bladder",
      "Recurrent UTIs and failure to thrive",
      "Salt-wasting (vasa recta injury) in some infants",
    ],
    keyFindings: [
      "Dilated posterior urethra (keyhole sign) on VCUG",
      "Trabeculated thick-walled bladder",
      "Bilateral hydroureteronephrosis on ultrasound",
      "Poor urinary stream on observation",
    ],
    keyLabs: [
      "Prenatal and postnatal renal ultrasound",
      "VCUG — diagnostic; shows dilated posterior urethra and bladder changes",
      "Serum creatinine — renal function",
    ],
    associations: [
      "Secondary vesicoureteral reflux (often bilateral)",
      "Urinary ascites from bladder rupture in neonates",
      "Pulmonary hypoplasia if severe oligohydramnios (Potter sequence)",
      "Renal dysplasia from intrauterine obstruction",
    ],
    complications: [
      "End-stage renal disease in childhood",
      "Recurrent urosepsis",
      "Growth failure and electrolyte abnormalities",
    ],
    distinguishFrom: [
      "Primary vesicoureteral reflux without obstruction — no keyhole posterior urethra on VCUG",
      "Ureteropelvic junction obstruction — hydronephrosis without bladder outlet findings",
      "Urethral stricture — acquired, not congenital valves in prostatic urethra",
      "Neurogenic bladder — neurologic history, not isolated male congenital obstruction",
    ],
    treatment: [
      "Endoscopic valve ablation (primary treatment)",
      "Temporary vesicostomy or catheter drainage in severe neonatal obstruction",
      "Monitor and manage renal function, UTIs, and reflux long-term",
      "Antenatal vesicoamniotic shunting in select severe cases (specialist decision)",
    ],
    boardsPearls: [
      "PUV = #1 congenital bladder outlet obstruction in boys",
      "VCUG: dilated posterior urethra + trabeculated bladder + bilateral hydronephrosis",
      "Causes secondary (not primary) VUR from high bladder pressures",
      "Prenatal oligohydramnios + male fetus → consider PUV",
      "Early ablation preserves renal function; long-term nephrology follow-up required",
    ],
    pediatrics:
      "Always consider PUV in male infant with prenatal hydronephrosis or weak stream; newborn anuria with palpable bladder is emergency. Bilateral renal dysplasia from prolonged obstruction may cause neonatal renal failure.",
  },
  {
    id: "vesicoureteral-reflux",
    name: "Vesicoureteral Reflux",
    etymology: "Latin vesica = bladder + ureter + Latin re = back + fluxus = flow",
    aliases: [
      "vesicoureteral reflux",
      "vesico ureteral reflux",
      "vur",
      "reflux nephropathy",
      "urinary reflux",
      "bilateral vesicoureteral reflux",
      "bilateral vur",
      "primary vesicoureteral reflux",
      "primary vur",
    ],
    definition:
      "Retrograde flow of urine from bladder into ureter(s) and sometimes renal pelvis due to abnormal ureterovesical junction valve mechanism.",
    pathophysiology:
      "Primary VUR from short intramural ureter or abnormal UVJ anatomy; secondary VUR from bladder outlet obstruction or neurogenic bladder → reflux delivers infected urine to kidneys → pyelonephritis and renal scarring.",
    classicPresentation: [
      "Febrile urinary tract infection in infant or young child",
      "Recurrent UTIs with flank symptoms",
      "Often discovered during workup after first febrile UTI",
    ],
    keyFindings: [
      "Hydroureteronephrosis on renal ultrasound",
      "Reflux on voiding cystourethrogram (VCUG)",
      "Renal scarring on DMSA scan after pyelonephritis",
    ],
    keyLabs: [
      "VCUG for diagnosis and grading",
      "Renal ultrasound for anatomy and scarring",
      "Urine culture during febrile illness",
    ],
    associations: [
      "Primary congenital UVJ abnormality",
      "Posterior urethral valves (secondary VUR in boys)",
      "Neurogenic bladder and voiding dysfunction",
      "Renal dysplasia",
    ],
    complications: [
      "Acute pyelonephritis",
      "Renal scarring and reflux nephropathy",
      "Hypertension and chronic kidney disease",
    ],
    distinguishFrom: [
      "Obstructive uropathy without reflux — obstruction on imaging without retrograde flow on VCUG",
      "Simple cystitis — lower tract infection without fever/flank involvement",
      "Acute pyelonephritis without reflux — may coexist but VUR explains recurrent upper tract infections",
      "Primary vesicoureteral reflux — congenital UVJ defect without outlet obstruction",
      "Secondary VUR — high bladder pressure from posterior urethral valves or neurogenic bladder",
      "Bilateral vesicoureteral reflux — both ureters affected; higher bilateral renal risk",
    ],
    treatment: [
      "Prophylactic antibiotics during infancy in higher-grade or recurrent febrile UTIs (per specialist guidance)",
      "Prompt treatment of UTIs",
      "Surgical reimplantation or endoscopic injection for persistent high-grade reflux with breakthrough infections",
      "Correct bladder outlet obstruction if secondary cause",
    ],
    boardsPearls: [
      "First febrile UTI in young child → renal ultrasound; VCUG if indicated for reflux evaluation",
      "VUR predisposes to pyelonephitis and renal scarring, not just cystitis",
      "Posterior urethral valves in boys can cause secondary VUR and obstructive uropathy",
    ],
    pediatrics:
      "Primary VUR often improves with age in lower grades; febrile UTIs with VUR can cause permanent renal scarring — key pediatric nephrology topic.",
  },
  {
    id: "hypothyroidism",
    name: "Hypothyroidism",
    etymology: "Greek hypo = under + thyreos = shield-shaped gland + -ism = condition",
    aliases: [
      "hypothyroidism",
      "hypothyroid",
      "low thyroid",
      "myxedema",
      "underactive thyroid",
    ],
    definition:
      "Clinical syndrome of insufficient thyroid hormone activity causing slowed metabolism, with elevated TSH in primary disease.",
    pathophysiology:
      "↓ circulating T4/T3 → decreased basal metabolic rate → accumulation of glycosaminoglycans in skin (myxedema), bradycardia, slowed reflexes, and impaired thermogenesis; primary disease triggers compensatory ↑ TSH from loss of negative feedback.",
    classicPresentation: [
      "Fatigue, weight gain, cold intolerance",
      "Constipation, dry skin, hair loss",
      "Bradycardia, delayed deep tendon reflexes",
      "Menorrhagia or infertility",
    ],
    keyFindings: [
      "Periorbital puffiness and nonpitting myxedema",
      "Dry coarse skin and hoarse voice",
      "Bradycardia and hypothermia in severe disease",
    ],
    keyLabs: [
      "Primary: ↑ TSH with ↓ free T4",
      "Subclinical: ↑ TSH with normal free T4",
      "Central: ↓ free T4 with low/inappropriately normal TSH",
      "Anti-TPO antibodies if autoimmune (Hashimoto)",
    ],
    associations: [
      "Hashimoto thyroiditis — most common cause in iodine-sufficient adults",
      "Congenital hypothyroidism in neonates",
      "Iodine deficiency",
      "Postpartum thyroiditis, subacute thyroiditis (hypothyroid phase)",
      "Pituitary/hypothalamic disease (central hypothyroidism)",
      "Drugs: lithium, amiodarone",
    ],
    complications: [
      "Myxedema coma",
      "Hyperlipidemia and atherosclerosis",
      "Pericardial effusion",
      "Infertility and hyperprolactinemia (↑ TRH)",
    ],
    distinguishFrom: [
      "Hyperthyroidism — weight loss, heat intolerance, ↑ T4, ↓ TSH",
      "Euthyroid sick syndrome — abnormal thyroid tests during acute illness",
      "Depression — may overlap symptoms; check TSH",
      "Congenital hypothyroidism — neonatal presentation; screen with TSH",
    ],
    treatment: [
      "Levothyroxine replacement (adjust dose to normalize TSH)",
      "Treat underlying cause when possible",
      "Myxedema coma: IV levothyroxine, hydrocortisone, supportive care",
    ],
    boardsPearls: [
      "Primary hypothyroidism: ↑ TSH, ↓ free T4",
      "Hashimoto thyroiditis is the most common cause in adults",
      "Hypothyroidism → ↑ TRH → mild hyperprolactinemia and amenorrhea",
      "Delayed relaxation of deep tendon reflexes (Woltman sign) is classic",
      "Myxedema = nonpitting mucopolysaccharide deposition, not pitting edema",
    ],
    pediatrics:
      "Congenital hypothyroidism is screened by newborn TSH; untreated disease causes cretinism. Acquired autoimmune hypothyroidism can present with growth delay and school difficulty in children.",
  },
  {
    id: "hashimoto-thyroiditis",
    name: "Hashimoto Thyroiditis",
    etymology: "eponym: Hakaru Hashimoto + Greek thyreos = shield-shaped gland + -itis = inflammation",
    aliases: [
      "hashimoto thyroiditis",
      "hashimotos thyroiditis",
      "hashimoto's thyroiditis",
      "chronic lymphocytic thyroiditis",
      "autoimmune thyroiditis",
      "hashimoto disease",
    ],
    definition:
      "Autoimmune destruction of thyroid tissue causing goiter and progressive hypothyroidism, the most common cause of hypothyroidism in iodine-sufficient regions.",
    pathophysiology:
      "CD8+ T-cell and antibody-mediated injury (anti-TPO, anti-thyroglobulin) → lymphocytic infiltration and follicular destruction → ↓ thyroid hormone synthesis and release → compensatory ↑ TSH.",
    classicPresentation: [
      "Fatigue, weight gain, cold intolerance, constipation",
      "Painless goiter early; atrophic thyroid in late disease",
      "Dry skin, hair loss, bradycardia",
    ],
    keyFindings: [
      "Diffuse or nodular goiter",
      "Delayed reflexes and periorbital puffiness",
      "Hurthle cell change and lymphoid infiltrates on histology",
    ],
    keyLabs: [
      "↑ TSH with ↓ free T4 in overt hypothyroidism",
      "Anti-TPO and anti-thyroglobulin antibodies",
      "Subclinical disease: ↑ TSH with normal free T4",
    ],
    associations: [
      "Other autoimmune diseases (type 1 diabetes, celiac disease, SLE)",
      "HLA-DR5 association",
      "Increased risk of thyroid lymphoma (rare)",
      "Postpartum thyroiditis shares autoimmune mechanism",
    ],
    complications: [
      "Overt hypothyroidism",
      "Myxedema coma in severe untreated disease",
      "Thyroid lymphoma (rare, often in long-standing goiter)",
    ],
    distinguishFrom: [
      "Graves disease — hyperthyroidism with TSI, not anti-TPO-driven destruction",
      "Subacute thyroiditis — painful tender thyroid, transient hyperthyroid then hypothyroid",
      "Iodine deficiency goiter — low iodine intake, not autoimmune antibodies",
    ],
    treatment: [
      "Levothyroxine replacement for hypothyroidism",
      "Monitor TSH after dose changes every 6–8 weeks initially",
    ],
    boardsPearls: [
      "Most common cause of hypothyroidism in iodine-sufficient areas",
      "Anti-TPO antibodies are the key autoimmune marker",
      "Hashimoto is more common than Graves in children with thyroid autoimmunity",
    ],
    pediatrics:
      "Pediatric autoimmune thyroiditis can present with goiter and fatigue; monitor growth and school performance.",
  },
  {
    id: "thyroid-nodule",
    name: "Thyroid Nodule",
    etymology: "Greek thyreos = shield + Latin nodus = knot",
    aliases: [
      "thyroid nodule",
      "thyroid nodules",
      "thyroid mass",
      "solitary thyroid nodule",
      "cold thyroid nodule",
      "hot thyroid nodule",
    ],
    definition:
      "Discrete palpable or imaging-detected lesion within the thyroid gland; most are benign, but malignancy must be excluded.",
    pathophysiology:
      "Benign nodules arise from colloid, adenoma, or Hashimoto-related change; malignant nodules reflect clonal neoplastic growth (papillary, follicular, medullary, or anaplastic carcinoma).",
    classicPresentation: [
      "Asymptomatic neck lump discovered on exam or imaging",
      "Occasionally compressive symptoms — dysphagia or hoarseness if large/invasive",
      "May be found incidentally on neck imaging",
    ],
    keyFindings: [
      "Palpable thyroid nodule",
      "Ultrasound features: solid hypoechoic nodule, microcalcifications, irregular margins, taller-than-wide shape",
      "Cervical lymphadenopathy raises malignancy concern",
    ],
    keyLabs: [
      "TSH first — if suppressed, radionuclide scan for autonomously functioning (hot) nodule",
      "Thyroid ultrasound for characterization",
      "Fine-needle aspiration biopsy based on size and suspicious features",
    ],
    associations: [
      "Iodine deficiency (multinodular goiter)",
      "Hashimoto thyroiditis",
      "Radiation exposure to head/neck",
      "Familial syndromes (MEN2 with medullary carcinoma)",
    ],
    complications: [
      "Thyroid cancer if malignant",
      "Compression of airway or recurrent laryngeal nerve",
      "Hyperthyroidism if toxic adenoma (hot nodule)",
    ],
    distinguishFrom: [
      "Graves disease — diffuse goiter with hyperthyroidism, not usually solitary cold nodule",
      "Thyroid cancer — malignant cytology or invasive features on FNA/histology",
      "Cervical lymph node — separate from thyroid parenchyma on ultrasound",
    ],
    treatment: [
      "Benign nodules: observation or levothyroxine suppression in select cases",
      "Suspicious/malignant nodules: surgery after appropriate FNA workup",
      "Autonomous hot nodule may be treated with radioiodine or surgery if hyperthyroid",
    ],
    boardsPearls: [
      "Start thyroid nodule workup with TSH, then ultrasound ± FNA",
      "Hot nodule on scan is usually benign adenoma; cold nodule needs malignancy exclusion",
      "Papillary carcinoma is the most common thyroid malignancy overall",
    ],
    pediatrics:
      "Thyroid nodules are less common in children but have a higher malignancy risk than in adults — lower threshold for FNA and surgery.",
  },
  {
    id: "thyroid-cancer",
    name: "Thyroid Cancer",
    etymology: "Greek thyreos = shield + Latin cancro = crab/malignancy",
    aliases: [
      "thyroid cancer",
      "thyroid carcinoma",
      "differentiated thyroid cancer",
      "papillary thyroid cancer",
      "papillary thyroid carcinoma",
      "follicular thyroid cancer",
      "follicular thyroid carcinoma",
    ],
    definition:
      "Malignant neoplasm of thyroid follicular or C-cell origin; papillary carcinoma is most common and carries the best prognosis among differentiated types.",
    pathophysiology:
      "Papillary/follicular cancers arise from follicular cells (RET/ BRAF and other driver mutations in papillary disease) → lymphatic (papillary) or hematogenous (follicular) spread; anaplastic carcinoma is undifferentiated and aggressive.",
    classicPresentation: [
      "Painless thyroid nodule or neck mass",
      "Cervical lymphadenopathy (especially papillary)",
      "Hoarseness if recurrent laryngeal nerve invasion",
    ],
    keyFindings: [
      "Solid thyroid nodule with suspicious ultrasound features",
      "Orphan Annie nuclei and psammoma bodies in papillary carcinoma",
      "Capsular/vascular invasion in follicular carcinoma",
    ],
    keyLabs: [
      "Fine-needle aspiration cytology",
      "Thyroglobulin as tumor marker for differentiated follicular-derived cancers post-treatment",
      "Calcitonin elevated in medullary thyroid carcinoma (separate entity)",
    ],
    associations: [
      "Childhood head/neck irradiation",
      "Papillary carcinoma — BRAF/RET fusions among common drivers",
      "Follicular carcinoma — hematogenous spread to bone/lung",
      "Anaplastic carcinoma — older adults, rapidly enlarging neck mass",
    ],
    complications: [
      "Cervical nodal metastasis",
      "Local invasion of airway or recurrent laryngeal nerve",
      "Distant metastasis (follicular hematogenous; papillary pulmonary micrometastases)",
    ],
    distinguishFrom: [
      "Benign thyroid adenoma — bland cytology, no invasion",
      "Medullary thyroid carcinoma — calcitonin-secreting C-cell tumor, RET/MEN2 association",
      "Graves disease — diffuse hyperthyroid gland, not focal malignancy",
      "Thyroid lymphoma — rapid enlargement in Hashimoto background",
    ],
    treatment: [
      "Thyroidectomy ± lymph node dissection for differentiated thyroid cancer",
      "Radioactive iodine ablation for selected differentiated tumors",
      "Thyroglobulin surveillance after thyroidectomy",
    ],
    boardsPearls: [
      "Papillary thyroid carcinoma: orphan Annie nuclei, psammoma bodies, lymphatic spread",
      "Follicular carcinoma invades capsule/vessels and spreads hematogenously",
      "Medullary carcinoma is calcitonin-secreting and linked to RET/MEN2 — not the same as differentiated thyroid cancer",
    ],
    pediatrics:
      "Thyroid malignancy is more likely when a child has a thyroid nodule; papillary carcinoma remains the most common pediatric thyroid cancer.",
  },
  {
    id: "congenital-hypothyroidism",
    name: "Congenital Hypothyroidism",
    etymology: "Latin con = together + nasci = to be born + Greek hypo = under + thyreos = shield + -ism = condition",
    aliases: [
      "congenital hypothyroidism",
      "neonatal hypothyroidism",
      "cretinism",
      "thyroid dysgenesis",
      "congenital thyroid deficiency",
    ],
    definition:
      "Thyroid hormone deficiency present at birth from thyroid dysgenesis, dyshormonogenesis, or iodine deficiency, causing neurodevelopmental impairment if untreated.",
    pathophysiology:
      "Absent or ectopic thyroid gland, enzymatic defect in hormone synthesis, or maternal antibodies/medications → insufficient T4 in neonatal period → impaired brain myelination and growth; neonatal ↑ TSH triggers newborn screening detection.",
    classicPresentation: [
      "Often asymptomatic at birth due to transplacental maternal T4",
      "Prolonged jaundice, poor feeding, hypotonia, macroglossia, umbilical hernia",
      "Delayed growth and intellectual disability if untreated",
    ],
    keyFindings: [
      "Large posterior fontanelle and hypotonia",
      "Macroglossia and umbilical hernia",
      "Dry skin, hoarse cry, constipation",
    ],
    keyLabs: [
      "Newborn screening: ↑ TSH (primary screen in most programs)",
      "Confirmatory ↓ free T4 with ↑ TSH",
      "Thyroid ultrasound or scan to assess ectopic/aplastic gland",
    ],
    associations: [
      "Thyroid dysgenesis (aplasia, ectopy)",
      "Dyshormonogenesis (TPO, pendrin, TG defects)",
      "Maternal iodine deficiency or antithyroid drugs",
      "Down syndrome can have concurrent thyroid dysfunction",
    ],
    complications: [
      "Irreversible intellectual disability if treatment delayed",
      "Growth failure and developmental delay",
      "Myxedema coma (rare in neonates if missed)",
    ],
    distinguishFrom: [
      "Transient neonatal hypothyroidism from maternal antibodies or iodine exposure",
      "Central hypothyroidism — low T4 with inappropriately normal/low TSH",
      "Physiologic jaundice — unconjugated hyperbilirubinemia without thyroid dysfunction",
    ],
    treatment: [
      "Immediate levothyroxine replacement after confirmatory testing",
      "Normalize TSH and monitor development/growth closely",
    ],
    boardsPearls: [
      "Screen all newborns with TSH — treat before symptoms to prevent cretinism",
      "Most common cause in iodine-sufficient areas is thyroid dysgenesis",
      "Macroglossia + umbilical hernia + prolonged jaundice in neonate → think congenital hypothyroidism",
    ],
    pediatrics:
      "Early levothyroxine prevents intellectual disability; missed screening or delayed treatment causes permanent neurodevelopmental harm.",
  },
  {
    id: "rapidly-progressive-glomerulonephritis",
    name: "Rapidly Progressive Glomerulonephritis",
    etymology: "Latin rapidus = seizing + Latin progressus = advance + glomerulus + nephros + -itis",
    aliases: [
      "rapidly progressive glomerulonephritis",
      "rpgn",
      "crescentic glomerulonephritis",
      "crescentic gn",
      "rapidly progressive gn",
    ],
    definition:
      "Aggressive glomerulonephritis with rapid loss of renal function over weeks, defined histologically by crescents in most glomeruli.",
    pathophysiology:
      "Severe glomerular injury from anti-GBM antibodies, immune complex disease, or pauci-immune ANCA vasculitis → breaks in GBM → fibrin and inflammatory cells in Bowman space → parietal epithelial proliferation forming crescents → rapid decline in GFR.",
    classicPresentation: [
      "Nephritic syndrome with oliguria over days to weeks",
      "Rapidly rising creatinine",
      "Pulmonary hemorrhage if anti-GBM disease (Goodpasture)",
    ],
    keyFindings: [
      "RBC casts and dysmorphic RBCs",
      "Hypertension and edema",
      ">50% glomerular crescents on biopsy",
    ],
    keyLabs: [
      "↑ creatinine with active urinary sediment",
      "Anti-GBM antibodies",
      "ANCA (c-ANCA/PR3 in GPA; p-ANCA/MPO in MPA)",
      "Linear IgG on GBM (Goodpasture) or pauci-immune IF",
    ],
    associations: [
      "Goodpasture syndrome (anti-GBM)",
      "Granulomatosis with polyangiitis and microscopic polyangiitis",
      "Severe lupus nephritis and post-infectious GN (less common)",
    ],
    complications: [
      "Acute kidney injury progressing to ESRD within weeks",
      "Pulmonary hemorrhage with anti-GBM disease",
      "Hypertensive emergency",
    ],
    distinguishFrom: [
      "Acute poststreptococcal GN — usually slower recovery in children, subepithelial humps, often self-limited",
      "IgA nephropathy — episodic synpharyngitic hematuria; RPGN only if severe flare",
      "Acute tubular necrosis — muddy brown casts, ischemic/toxic injury without glomerular crescents",
    ],
    treatment: [
      "Urgent immunosuppression: high-dose corticosteroids ± cyclophosphamide",
      "Plasmapheresis for anti-GBM disease and severe ANCA vasculitis with pulmonary hemorrhage",
      "Dialysis if needed while treating underlying cause",
    ],
    boardsPearls: [
      "RPGN = crescents in >50% glomeruli on biopsy",
      "Three major mechanisms: anti-GBM, immune complex, pauci-immune ANCA",
      "Linear IgG on GBM = Goodpasture; pauci-immune crescents = ANCA vasculitis",
      "Pulmonary hemorrhage + RPGN → anti-GBM until proven otherwise",
    ],
    pediatrics:
      "Rare in children but a renal emergency when present; Goodpasture and ANCA vasculitis require urgent nephrology and serologic testing.",
  },
  {
    id: "tracheoesophageal-fistula",
    name: "Tracheoesophageal Fistula",
    etymology: "Greek trachys = rough + oisophagos = food carrier + Latin fistula = pipe/connection",
    aliases: [
      "tracheoesophageal fistula",
      "te fistula",
      "tef",
      "esophageal atresia with tracheoesophageal fistula",
      "ea/tef",
      "tracheo esophageal fistula",
    ],
    definition:
      "Congenital abnormal connection between trachea and esophagus, most often with esophageal atresia causing inability to pass an NG tube and feeding-related respiratory distress.",
    pathophysiology:
      "Failure of tracheoesophageal septum to separate foregut into ventral trachea and dorsal esophagus → blind esophageal pouch with or without tracheal fistula → aspiration, coughing, and cyanosis during feeding.",
    classicPresentation: [
      "Neonate with excessive drooling, choking, and coughing during first feed",
      "Cannot pass nasogastric tube into stomach",
      "Respiratory distress, cyanosis, and recurrent pneumonitis",
      "History of polyhydramnios",
    ],
    keyFindings: [
      "Coiled NG tube on chest X-ray",
      "Air in stomach with proximal esophageal atresia and distal fistula",
      "Feeding-associated desaturation",
    ],
    keyLabs: [
      "Chest/abdominal X-ray after attempted NG placement",
      "Contrast esophagram or bronchoscopy when diagnosis uncertain",
      "Evaluate for VACTERL anomalies",
    ],
    associations: [
      "Esophageal atresia (most common combination: proximal atresia + distal TEF)",
      "VACTERL association (vertebral, anal, cardiac, TE, renal, limb)",
      "Polyhydramnios from fetal inability to swallow amniotic fluid",
    ],
    complications: [
      "Aspiration pneumonia",
      "Airway obstruction",
      "Anastomotic stricture after repair",
    ],
    distinguishFrom: [
      "Choanal atresia — cyclical cyanosis relieved by crying with mouth open",
      "Laryngomalacia — stridor without feeding tube obstruction",
      "H-type TEF without atresia — intermittent cough with feeds later in infancy",
    ],
    treatment: [
      "NPO, suction secretions, head-up positioning",
      "Surgical ligation of fistula and esophageal anastomosis",
      "Evaluate and manage associated anomalies",
    ],
    boardsPearls: [
      "Most common type: proximal esophageal atresia with distal tracheoesophageal fistula",
      "Neonate + drooling + choking with feeds + NG tube coiled on X-ray = TEF",
      "Polyhydramnios results from impaired fetal swallowing",
    ],
    pediatrics:
      "Classic neonatal surgical emergency; delay first feed and obtain imaging before oral intake when TEF is suspected.",
  },
  {
    id: "tracheomalacia",
    name: "Tracheomalacia",
    etymology: "Greek trachys = rough + malakia = softness",
    aliases: [
      "tracheomalacia",
      "tracheal malacia",
      "floppy trachea",
      "tracheobronchomalacia",
    ],
    definition:
      "Weak or immature tracheal cartilage causing dynamic airway collapse and stridor, especially during expiration, crying, or feeding.",
    pathophysiology:
      "Deficient or soft C-shaped tracheal rings → anterior tracheal wall collapses during increased intrathoracic pressure or negative extrathoracic pressure → intermittent obstruction and biphasic or expiratory stridor.",
    classicPresentation: [
      "Stridor worsened by crying, feeding, or supine position",
      "Coughing or apnea spells in infants",
      "Often improves over first 1–2 years of life",
    ],
    keyFindings: [
      "Expiratory or biphasic stridor",
      "Dynamic airway collapse on bronchoscopy",
      "Normal oxygenation between episodes in mild disease",
    ],
    keyLabs: [
      "Flexible bronchoscopy for definitive diagnosis",
      "Chest imaging to exclude vascular compression or mass",
    ],
    associations: [
      "Prematurity",
      "History of tracheoesophageal fistula repair",
      "Vascular ring or external compression",
      "Tracheostomy or prolonged intubation",
    ],
    complications: [
      "Recurrent respiratory infections",
      "Failure to thrive from feeding-associated obstruction",
      "Severe cyanotic spells in extreme cases",
    ],
    distinguishFrom: [
      "Laryngomalacia — inspiratory stridor from supraglottic collapse",
      "Vascular ring — stridor with feeding difficulty and compressive anatomy on imaging",
      "Foreign body — sudden onset in previously well older child",
    ],
    treatment: [
      "Observation for mild primary tracheomalacia (often self-limited)",
      "Treat reflux and avoid airway irritants",
      "Surgery or stenting for severe or extrinsic compression cases",
    ],
    boardsPearls: [
      "Tracheomalacia causes dynamic tracheal collapse, often expiratory stridor",
      "Many infants improve spontaneously as cartilage matures",
      "Consider vascular compression if stridor persists beyond infancy",
    ],
    pediatrics:
      "Primary tracheomalacia is common in infancy and often benign; severe cases or post-TEF repair tracheomalacia may need specialist follow-up.",
  },
  {
    id: "foreign-body-airway-obstruction",
    name: "Foreign Body Airway Obstruction",
    etymology: "Latin foris = outside + corpus = body + Latin obstructio = blockade",
    aliases: [
      "foreign body obstruction",
      "foreign body airway obstruction",
      "aspirated foreign body",
      "airway foreign body",
      "tracheobronchial foreign body",
      "fb aspiration",
      "choking",
    ],
    definition:
      "Aspiration or impaction of food or object in the pharynx, trachea, or bronchi causing acute or subacute airway obstruction.",
    pathophysiology:
      "Foreign material lodges in airway → localized inflammation, ball-valve obstruction, or complete occlusion → unilateral wheeze, atelectasis, or life-threatening hypoxia; complete upper airway obstruction prevents air movement.",
    classicPresentation: [
      "Sudden choking episode while eating or playing",
      "Persistent cough, wheeze, or stridor after witnessed aspiration",
      "Unilateral decreased breath sounds or wheeze in older child",
      "Inability to speak/cough/breathe with complete obstruction",
    ],
    keyFindings: [
      "Unilateral hyperinflation or atelectasis on chest X-ray",
      "Wheezing localized to one lung",
      "Air trapping on expiratory film",
      "Silent chest if complete obstruction",
    ],
    keyLabs: [
      "Chest X-ray (inspiratory and expiratory views)",
      "Bronchoscopy for diagnosis and removal",
    ],
    associations: [
      "Nuts, seeds, and small toys in toddlers",
      "Right main bronchus aspiration (wider, more vertical bronchus)",
      "Neurologic impairment or poor dentition increasing aspiration risk",
    ],
    complications: [
      "Hypoxic brain injury or death if untreated",
      "Post-obstructive pneumonia",
      "Bronchiectasis from chronic retained foreign body",
    ],
    distinguishFrom: [
      "Asthma — bilateral wheeze, episodic, no sudden choking event",
      "Croup — viral prodrome, barky cough, diffuse stridor",
      "Pneumonia — fever and infiltrate without focal ball-valve obstruction history",
    ],
    treatment: [
      "Complete obstruction: back blows/chest thrusts in infants; Heimlich in responsive older child/adult",
      "Emergency bronchoscopy for suspected tracheobronchial foreign body",
      "Avoid blind finger sweeps in infants",
    ],
    boardsPearls: [
      "Sudden unilateral wheeze in a toddler = foreign body until proven otherwise",
      "Right main bronchus is the most common lower airway lodging site",
      "Organic objects (peanut) cause more granulation reaction than inert plastic",
    ],
    pediatrics:
      "Peak age 1–3 years; unilateral wheeze after choking is foreign body until proven otherwise — bronchoscopy is diagnostic and therapeutic.",
  },
  {
    id: "tracheitis",
    name: "Tracheitis",
    etymology: "Greek trachys = rough + -itis = inflammation",
    aliases: [
      "tracheitis",
      "bacterial tracheitis",
      "pseudomembranous tracheitis",
      "bacterial croup",
    ],
    definition:
      "Bacterial infection of the trachea, usually superimposed on a viral upper respiratory illness, causing toxic-appearing stridor and potential airway compromise.",
    pathophysiology:
      "Mucosal injury from viral URI allows superinfection (often Staphylococcus aureus) → thick purulent secretions and pseudomembranes in subglottic/tracheal lumen → worsening stridor, airway obstruction, and respiratory failure.",
    classicPresentation: [
      "Child with initial croup-like illness who suddenly worsens after 2–3 days",
      "High fever and toxic appearance",
      "Stridor, barky cough, and respiratory distress",
      "Poor response to racemic epinephrine compared with viral croup",
    ],
    keyFindings: [
      "Subglottic/tracheal erythema and purulent secretions on laryngoscopy/bronchoscopy",
      "Pseudomembranes in trachea",
      "No drooling or tripod posture typical of epiglottitis",
    ],
    keyLabs: [
      "Clinical diagnosis supported by endoscopic findings",
      "Tracheal culture if intubated",
      "Chest X-ray may show subglottic narrowing (steeple sign overlap with croup)",
    ],
    associations: [
      "Staphylococcus aureus superinfection after parainfluenza or other viral URI",
      "Methicillin-sensitive or MRSA strains",
    ],
    complications: [
      "Airway obstruction requiring intubation",
      "Pneumonia",
      "Toxic shock syndrome (rare)",
    ],
    distinguishFrom: [
      "Viral croup — less toxic, usually responds to dexamethasone and nebulized epinephrine",
      "Epiglottitis — drooling, tripod posture, minimal cough, supraglottic inflammation",
      "Foreign body — sudden onset without high fever or toxic appearance",
    ],
    treatment: [
      "Airway management first — intubation if impending obstruction",
      "IV antibiotics covering S. aureus (including MRSA risk)",
      "Nebulized epinephrine and corticosteroids as adjuncts",
    ],
    boardsPearls: [
      "Bacterial tracheitis = croup that gets worse on day 3 with high fever and toxicity",
      "S. aureus superinfection with purulent tracheal secretions",
      "May require intubation to secure airway and suction thick membranes",
    ],
    pediatrics:
      "Pediatric airway emergency; distinguish from benign viral croup by toxic appearance and failure to improve with standard croup therapy.",
  },
  {
    id: "croup",
    name: "Croup",
    etymology: "Middle English croup = to cry hoarsely (describing the cough sound)",
    aliases: [
      "croup",
      "viral croup",
      "laryngotracheobronchitis",
      "acute laryngotracheobronchitis",
      "acute laryngotracheitis",
      "spasmodic croup",
    ],
    definition:
      "Viral upper-airway infection causing subglottic inflammation, inspiratory stridor, and characteristic barking cough — most common cause of stridor in young children.",
    pathophysiology:
      "Parainfluenza and other respiratory viruses infect larynx/trachea → subglottic edema and inflammation narrows airway below vocal cords → turbulent airflow → inspiratory stridor and harsh barking cough; symptoms often worse at night.",
    classicPresentation: [
      "Child 6 months to 3 years with URI prodrome",
      "Barking/seal-like cough and inspiratory stridor",
      "Low-grade fever; child usually not toxic-appearing",
      "Symptoms worse at night; may improve with humidified air",
    ],
    keyFindings: [
      "Inspiratory stridor at rest in moderate–severe disease",
      "Barking cough",
      "Steeple sign on AP neck/chest X-ray (subglottic narrowing)",
      "Minimal drooling; child can swallow",
    ],
    keyLabs: [
      "Clinical diagnosis in typical cases",
      "Neck/chest X-ray — steeple sign (supportive, not required)",
      "Pulse oximetry for hypoxemia",
    ],
    associations: [
      "Parainfluenza virus (most common)",
      "RSV, influenza, adenovirus, Mycoplasma",
      "Peak age 6 months to 3 years",
    ],
    complications: [
      "Respiratory distress and hypoxemia",
      "Rare progression to airway obstruction",
      "Secondary bacterial tracheitis if illness worsens with high fever and toxicity",
    ],
    distinguishFrom: [
      "Epiglottitis — drooling, tripod posture, toxic, minimal cough; supraglottic",
      "Bacterial tracheitis — toxic, high fever, poor response to racemic epinephrine",
      "Foreign body aspiration — sudden onset choking, unilateral wheeze",
      "Retropharyngeal abscess — neck stiffness, drooling, limited neck movement",
    ],
    treatment: [
      "Mild: supportive care, single-dose dexamethasone",
      "Moderate–severe: dexamethasone plus nebulized racemic epinephrine; observe after epinephrine",
      "Hospitalize if persistent stridor at rest, hypoxemia, or dehydration",
    ],
    boardsPearls: [
      "Most common cause of stridor in children",
      "Barking cough + inspiratory stridor + low-grade fever → croup",
      "Steeple sign = subglottic narrowing",
      "Dexamethasone is mainstay; racemic epinephrine for moderate–severe obstruction",
      "vs epiglottitis — no drooling/tripod; less toxic",
    ],
    pediatrics:
      "Peak 6 months to 3 years; parainfluenza is classic cause. Single-dose oral/IM dexamethasone reduces return visits and hospitalization.",
  },
  {
    id: "epiglottitis",
    name: "Epiglottitis",
    etymology: "Greek epi = upon + glottis = tongue/tongue-shaped laryngeal structure + -itis = inflammation",
    aliases: [
      "epiglottitis",
      "acute epiglottitis",
      "supraglottitis",
      "supraglottic epiglottitis",
      "hib epiglottitis",
    ],
    definition:
      "Acute supraglottic infection causing rapid airway obstruction — classically from Haemophilus influenzae type b, now rare in vaccinated populations.",
    pathophysiology:
      "Bacterial invasion of epiglottis and supraglottic structures → intense edema and purulent inflammation → sudden upper-airway narrowing → drooling, dysphagia, and life-threatening obstruction if untreated.",
    classicPresentation: [
      "Toxic-appearing child or adult with high fever",
      "Dysphagia, odynophagia, muffled “hot potato” voice",
      "Tripod posture and excessive drooling (cannot swallow secretions)",
      "Soft stridor; minimal cough compared with croup",
    ],
    keyFindings: [
      "Drooling and inability to handle oral secretions",
      "Tripod positioning (leaning forward, neck extended)",
      "Cherry-red swollen epiglottis on direct visualization in controlled setting",
      "Thumbprint sign on lateral neck X-ray (swollen epiglottis) — if imaging obtained without agitating patient",
    ],
    keyLabs: [
      "Clinical diagnosis — do not provoke with blind tongue depressor exam",
      "Direct laryngoscopy in controlled airway setting (OR)",
      "Blood cultures if septic; H. influenzae historically",
    ],
    associations: [
      "Haemophilus influenzae type b (classic; now uncommon with Hib vaccine)",
      "Streptococcus pneumoniae, Staphylococcus aureus, viruses in post-vaccine era",
      "Unvaccinated or immunocompromised patients at higher risk",
    ],
    complications: [
      "Complete airway obstruction and death",
      "Bacteremia and sepsis",
      "Epiglottic abscess",
    ],
    distinguishFrom: [
      "Croup — barking cough, steeple sign, subglottic; less toxic, responds to racemic epinephrine",
      "Bacterial tracheitis — barky cough persists; purulent tracheal membranes",
      "Retropharyngeal abscess — posterior pharyngeal bulge, neck extension pain",
      "Anaphylaxis — urticaria, wheeze, rapid onset after exposure",
    ],
    treatment: [
      "Secure airway first — controlled intubation in OR; do not agitate child",
      "IV antibiotics covering H. influenzae and other airway pathogens (e.g., ceftriaxone)",
      "Avoid lying supine or invasive throat exam in unstable patient",
    ],
    boardsPearls: [
      "Drooling + tripod + toxic appearance = epiglottitis until proven otherwise",
      "Do NOT examine throat with tongue depressor — may precipitate complete obstruction",
      "Hib vaccine dramatically reduced pediatric epiglottitis",
      "Airway first, then IV antibiotics",
      "vs croup — supraglottic, drooling, minimal barky cough",
    ],
    pediatrics:
      "Pediatric emergency; Hib vaccination made classic childhood epiglottitis rare. Maintain calm environment and prepare for OR intubation.",
  },
  {
    id: "preeclampsia",
    name: "Preeclampsia",
    etymology: "Latin prae = before + Greek eklampsis = flashing out (originally pre-convulsive toxemia)",
    aliases: [
      "preeclampsia",
      "pre-eclampsia",
      "pre eclampsia",
      "pregnancy-induced hypertension with proteinuria",
      "toxemia of pregnancy",
    ],
    definition:
      "Pregnancy-specific hypertensive disorder usually after 20 weeks with new-onset hypertension and proteinuria or other maternal end-organ dysfunction.",
    pathophysiology:
      "Abnormal trophoblast invasion and failure of spiral artery remodeling → placental ischemia → endothelial dysfunction → vasospasm, capillary leak, and organ injury (kidney, liver, brain, platelets).",
    classicPresentation: [
      "New hypertension after 20 weeks gestation",
      "Proteinuria, headache, visual changes, epigastric/RUQ pain",
      "Sudden weight gain and edema from capillary leak",
    ],
    keyFindings: [
      "BP ≥140/90 on two occasions",
      "Proteinuria or elevated creatinine, LFTs, low platelets",
      "Hyperreflexia and clonus if severe",
    ],
    keyLabs: [
      "Urinalysis/protein quantification",
      "CBC — thrombocytopenia",
      "AST/ALT — hepatic involvement",
      "Creatinine — renal dysfunction",
    ],
    associations: [
      "Nulliparity, chronic hypertension, diabetes, multifetal gestation",
      "Molar pregnancy (early severe preeclampsia before 20 weeks)",
      "Family history and autoimmune disease",
    ],
    complications: [
      "Eclampsia (seizures)",
      "HELLP syndrome",
      "Placental abruption",
      "Fetal growth restriction and preterm delivery",
    ],
    distinguishFrom: [
      "Chronic hypertension — present before pregnancy or before 20 weeks",
      "Gestational hypertension — hypertension without proteinuria/end-organ damage",
      "Acute fatty liver of pregnancy — more severe coagulopathy and hypoglycemia",
    ],
    treatment: [
      "Definitive treatment is delivery when maternal/fetal status warrants",
      "Magnesium sulfate for seizure prophylaxis in severe preeclampsia/eclampsia",
      "Antihypertensives (labetalol, hydralazine, nifedipine) for severe BP",
    ],
    boardsPearls: [
      "Preeclampsia after 20 weeks: HTN + proteinuria/end-organ dysfunction",
      "Spiral artery remodeling failure is key pathophysiology",
      "Magnesium sulfate prevents/treats eclampsia seizures",
      "Preeclampsia before 20 weeks → think molar pregnancy",
    ],
  },
  {
    id: "placenta-previa",
    name: "Placenta Previa",
    etymology: "Latin placenta = flat cake + Latin prae = before + via = road",
    aliases: [
      "placenta previa",
      "placenta praevia",
      "previa",
      "low-lying placenta",
    ],
    definition:
      "Placenta implanted over or near the internal cervical os, causing painless antepartum hemorrhage.",
    pathophysiology:
      "Low uterine implantation → placental tissue covers or encroaches on internal os → separation with cervical change or uterine activity → painless maternal bleeding without labor pain.",
    classicPresentation: [
      "Sudden painless bright red vaginal bleeding in 2nd or 3rd trimester",
      "Uterus soft and non-tender between bleeding episodes",
      "Often recurrent bleeding episodes",
    ],
    keyFindings: [
      "Painless vaginal bleeding",
      "Fetal presentation often abnormal (breech/transverse)",
      "Placenta over internal os on transvaginal ultrasound",
    ],
    keyLabs: [
      "Transvaginal ultrasound for diagnosis and placental location",
      "Maternal blood type and antibody screen",
      "Fetal heart rate monitoring during bleeding",
    ],
    associations: [
      "Prior cesarean delivery or uterine surgery",
      "Multiparity, advanced maternal age, smoking",
      "Multifetal gestation",
      "Increases risk of placenta accreta spectrum when combined with prior C-section scar",
    ],
    complications: [
      "Major antepartum hemorrhage",
      "Preterm delivery",
      "Placenta accreta spectrum if over prior scar",
    ],
    distinguishFrom: [
      "Placental abruption — painful bleeding, rigid tender uterus",
      "Placenta previa — painless bleeding; avoid digital cervical exam",
      "Vasa previa — fetal vessel rupture with fetal bradycardia after membrane rupture",
    ],
    treatment: [
      "Avoid digital cervical examination",
      "Hospitalization and delivery planning based on bleeding severity and gestational age",
      "Cesarean delivery when previa persists near term",
    ],
    boardsPearls: [
      "Painless third-trimester bleeding until proven otherwise = placenta previa",
      "Never perform digital exam if previa suspected — may provoke hemorrhage",
      "Transvaginal ultrasound confirms diagnosis",
    ],
  },
  {
    id: "placental-abruption",
    name: "Placental Abruption",
    etymology: "Latin placenta = flat cake + ab = away + Latin rumpere = to break",
    aliases: [
      "placental abruption",
      "abruptio placentae",
      "abruptio",
      "placenta abruption",
    ],
    definition:
      "Premature separation of the placenta from the uterine wall before delivery, causing painful bleeding and fetal compromise.",
    pathophysiology:
      "Decidual vessel rupture or mechanical shear → retroplacental hematoma → placental detachment → uterine irritability, fetal hypoxia, and concealed or overt hemorrhage; can trigger DIC.",
    classicPresentation: [
      "Painful vaginal bleeding with uterine tenderness",
      "Board-like rigid uterus and back pain",
      "Fetal distress or demise",
      "May occur with minimal external bleeding if hemorrhage is concealed",
    ],
    keyFindings: [
      "Painful bleeding with hypertonic uterus",
      "Frequent contractions or tetanic uterus",
      "Nonreassuring fetal heart tracing",
    ],
    keyLabs: [
      "Clinical diagnosis supported by ultrasound (retroplacental clot) when seen",
      "CBC/coagulation studies if DIC suspected",
      "Kleihauer-Betke or flow cytometry if fetomaternal hemorrhage suspected",
    ],
    associations: [
      "Hypertension and preeclampsia",
      "Trauma, cocaine use, smoking",
      "Premature rupture of membranes and polyhydramnios",
      "Short umbilical cord or rapid decompression (rare)",
    ],
    complications: [
      "DIC and maternal shock",
      "Fetal hypoxia or death",
      "Couvelaire uterus (blood infiltrating myometrium)",
    ],
    distinguishFrom: [
      "Placenta previa — painless bleeding, soft uterus",
      "Uterine rupture — loss of fetal station, prior uterine scar history",
      "Normal labor pain — progressive cervical change without hemorrhage",
    ],
    treatment: [
      "Maternal stabilization and fetal monitoring",
      "Blood products if coagulopathy or hemorrhagic shock",
      "Delivery when maternal/fetal status requires — often emergent cesarean or vaginal delivery",
    ],
    boardsPearls: [
      "Painful bleeding + rigid tender uterus → placental abruption",
      "Concealed abruption can cause shock with little visible blood loss",
      "Strong association with hypertension and cocaine use",
    ],
  },
  {
    id: "placenta-accreta",
    name: "Placenta Accreta",
    etymology: "Latin placenta = flat cake + accretus = grown to",
    aliases: [
      "placenta accreta",
      "placenta accreta spectrum",
      "placenta increta",
      "placenta percreta",
      "morbidly adherent placenta",
      "accreta",
    ],
    definition:
      "Abnormally adherent placenta due to defective decidua, ranging from accreta (attached to myometrium) to increta (invades myometrium) and percreta (penetrates serosa/adjacent organs).",
    pathophysiology:
      "Prior uterine scar or placenta previa → endometrial/decidual deficiency → trophoblast attaches directly to myometrium → placenta fails to separate at delivery → massive postpartum hemorrhage.",
    classicPresentation: [
      "Often discovered at delivery when placenta does not detach",
      "History of prior cesarean with current placenta previa",
      "Antepartum bleeding possible with previa overlap",
    ],
    keyFindings: [
      "Placenta previa over prior cesarean scar on ultrasound/MRI",
      "Loss of retroplacental clear space or bladder wall interruption (percreta)",
      "Failure of placental separation with life-threatening hemorrhage at delivery",
    ],
    keyLabs: [
      "Prenatal ultrasound/MRI for accreta suspicion",
      "Type and screen; massive transfusion planning",
    ],
    associations: [
      "Prior cesarean delivery (risk rises with number of prior C-sections)",
      "Placenta previa",
      "Asherman syndrome or other uterine surgery",
    ],
    complications: [
      "Massive obstetric hemorrhage",
      "Need for hysterectomy",
      "Bladder invasion with percreta",
      "Maternal death",
    ],
    distinguishFrom: [
      "Retained placenta — adherent fragments without deep invasion",
      "Placenta previa alone — abnormal location without myometrial invasion",
      "Uterine atony — soft boggy uterus after delivery, not adherent placenta",
    ],
    treatment: [
      "Planned cesarean hysterectomy at specialized center when diagnosed prenatally",
      "Avoid manual placental removal if accreta suspected — triggers hemorrhage",
      "Multidisciplinary team and blood product availability",
    ],
    boardsPearls: [
      "Prior C-section + placenta previa = high risk for accreta spectrum",
      "Do not forcefully remove abnormally adherent placenta",
      "Accreta = myometrium attachment; increta = invasion; percreta = through uterine wall",
    ],
  },
  {
    id: "coarctation-of-the-aorta",
    name: "Coarctation of the Aorta",
    etymology: "Latin co = together + arctare = to narrow + Greek aorte = artery",
    aliases: [
      "coarctation of the aorta",
      "coarctation",
      "aortic coarctation",
      "coarctation of aorta",
    ],
    definition:
      "Congenital narrowing of the aorta, classically juxtaductal near the ligamentum arteriosum, causing upper-extremity hypertension and lower-extremity hypoperfusion.",
    pathophysiology:
      "Focal aortic arch/media hypoplasia → obstruction to left ventricular outflow distal to head/arm vessels → ↑ pressure proximal to lesion and ↓ flow distally → collateral circulation through intercostal and internal mammary arteries.",
    classicPresentation: [
      "Hypertension in arms with lower blood pressure in legs",
      "Leg claudication or exercise intolerance in older children",
      "Headache and nosebleeds from upper-body hypertension",
    ],
    keyFindings: [
      "Radiofemoral delay and diminished femoral pulses",
      "Systolic murmur over left back or continuous murmur from collaterals",
      "Rib notching on chest X-ray (older children/adults)",
    ],
    keyLabs: [
      "Echocardiography or MRI for lesion location and associated defects",
      "Four-limb blood pressures",
    ],
    associations: [
      "Bicuspid aortic valve",
      "Turner syndrome",
      "Patent ductus arteriosus in infants (ductal-dependent lower-body flow)",
      "Berry aneurysms and intracranial hemorrhage risk",
    ],
    complications: [
      "Heart failure in neonates when ductus closes",
      "Hypertensive heart disease and stroke",
      "Aortic rupture or dissection",
      "Endocarditis of associated bicuspid valve",
    ],
    distinguishFrom: [
      "Essential hypertension — no radiofemoral delay or rib notching",
      "Aortic stenosis — murmur at RUSB, normal femoral pulses",
      "Peripheral artery disease — adult atherosclerosis, not congenital juxtaductal narrowing",
    ],
    treatment: [
      "Prostaglandin E1 in ductal-dependent neonatal coarctation",
      "Surgical resection/end-to-end anastomosis or balloon/stent angioplasty",
      "Treat associated hypertension and monitor for recoarctation",
    ],
    boardsPearls: [
      "Upper-extremity HTN + weak femoral pulses + rib notching = coarctation",
      "Strong association with bicuspid aortic valve and Turner syndrome",
      "Notching of ribs 3–8 from dilated intercostal collaterals",
    ],
    pediatrics:
      "Neonatal coarctation may present when PDA closes; prostaglandin maintains lower-body perfusion until repair.",
  },
  {
    id: "aortic-dissection",
    name: "Aortic Dissection",
    etymology: "Greek aorte = artery + Latin dis = apart + secare = to cut",
    aliases: [
      "aortic dissection",
      "dissection of the aorta",
      "aortic tear",
      "type a dissection",
      "type b dissection",
    ],
    definition:
      "Intimal tear with blood entering the aortic media, creating a false lumen and risking rupture or branch vessel compromise.",
    pathophysiology:
      "Cystic medial degeneration or hypertension weakens media → intimal tear → blood dissects between layers → propagation proximally or distally → malperfusion, tamponade, or rupture.",
    classicPresentation: [
      "Sudden tearing chest pain radiating to the back",
      "Unequal blood pressures or pulses between arms",
      "Syncope, stroke, or new murmur of aortic regurgitation",
    ],
    keyFindings: [
      "Widened mediastinum on chest X-ray",
      "New diastolic murmur if aortic regurgitation develops",
      "Focal neurologic deficits from carotid or spinal artery involvement",
    ],
    keyLabs: [
      "CT angiography or TEE for diagnosis",
      "Type A — involves ascending aorta; Type B — descending only",
    ],
    associations: [
      "Hypertension",
      "Marfan syndrome and Ehlers-Danlos vascular type",
      "Bicuspid aortic valve and Turner syndrome",
      "Pregnancy and cocaine use",
    ],
    complications: [
      "Cardiac tamponade",
      "Aortic rupture and death",
      "Malperfusion of coronary, carotid, renal, or mesenteric arteries",
      "Acute aortic regurgitation",
    ],
    distinguishFrom: [
      "Myocardial infarction — tearing pain and pulse/BP asymmetry favor dissection",
      "Pulmonary embolism — pleuritic pain and hypoxia without pulse deficit",
      "Esophageal rupture — post-emesis, subcutaneous emphysema",
    ],
    treatment: [
      "Immediate BP and heart rate control (β-blocker first, then vasodilator if needed)",
      "Emergent surgery for type A dissection",
      "Medical management or endovascular repair for uncomplicated type B",
    ],
    boardsPearls: [
      "Tearing pain to the back + unequal arm BPs → aortic dissection",
      "Type A involves ascending aorta — surgical emergency",
      "Marfan, bicuspid valve, and Turner increase risk",
    ],
  },
  {
    id: "hepatitis-b",
    name: "Hepatitis B",
    etymology: "Greek hepar = liver + -itis = inflammation + B = second identified hepatitis virus",
    aliases: [
      "hepatitis b",
      "hepatitis b virus",
      "hbv",
      "hbv infection",
      "chronic hepatitis b",
      "acute hepatitis b",
    ],
    definition:
      "Liver infection caused by hepatitis B virus (partially double-stranded DNA hepadnavirus) transmitted via blood and body fluids — may present as acute self-limited illness or chronic infection with cirrhosis and hepatocellular carcinoma risk.",
    pathophysiology:
      "HBV infects hepatocytes → viral replication and immune-mediated hepatocyte injury → acute hepatitis; failure to clear HBsAg after 6 months defines chronic infection → ongoing inflammation, fibrosis, cirrhosis, and HCC (often with integrated viral DNA).",
    classicPresentation: [
      "Acute: fatigue, jaundice, RUQ pain, dark urine (incubation ~1–4 months)",
      "Chronic: often asymptomatic until cirrhosis or HCC",
      "IV drug use, unprotected sex, perinatal exposure, healthcare needlestick",
      "Asian/endemic area birth — high chronic carrier prevalence",
    ],
    keyFindings: [
      "Hepatomegaly and jaundice in symptomatic acute infection",
      "Stigmata of cirrhosis in chronic disease",
    ],
    keyLabs: [
      "HBsAg — active infection",
      "Anti-HBc IgM — acute infection; IgG — past or chronic",
      "Anti-HBs — immunity (vaccination or recovery)",
      "HBeAg/anti-HBe and HBV DNA — infectivity and treatment monitoring",
      "↑ ALT/AST",
    ],
    associations: [
      "Cirrhosis and hepatocellular carcinoma",
      "Polyarteritis nodosa (classic association)",
      "Membranous glomerulonephritis",
      "Immunosuppression — HBV reactivation on TNF inhibitors or chemotherapy",
    ],
    complications: [
      "Chronic hepatitis, cirrhosis, HCC",
      "Fulminant hepatic failure (rare acute)",
      "HBV reactivation with immunosuppression",
      "Vertical transmission to neonate without prophylaxis",
    ],
    distinguishFrom: [
      "Hepatitis C — RNA flavivirus; different serology and treatment",
      "Hepatitis A — fecal-oral, self-limited, no chronic state",
      "Alcoholic liver disease — AST:ALT >2:1 pattern, negative HBV serology",
    ],
    treatment: [
      "Acute — supportive care; antivirals if severe/fulminant",
      "Chronic — tenofovir or entecavir (first-line nucleos(t)ide analogues)",
      "Vaccination prevention: recombinant HBsAg vaccine series",
      "Neonatal HBIG + vaccine at birth if mother HBsAg positive",
    ],
    boardsPearls: [
      "HBV serology: HBsAg (+) chronic/active; anti-HBs (+) immunity; anti-HBc IgM acute",
      "Chronic HBV → cirrhosis and HCC — screen with ultrasound/AFP",
      "Vaccine = anti-HBs immunity only (no anti-HBc)",
      "Screen for HBV before TNF inhibitors/biologics — reactivation risk",
      "Neonatal prophylaxis: HBIG + vaccine within 12 h of birth",
    ],
    pediatrics:
      "Perinatal transmission causes ~90% chronic infection if untreated; universal birth-dose vaccination and HBIG for HBsAg+ mothers are critical.",
  },
  {
    id: "hepatitis-c",
    name: "Hepatitis C",
    etymology: "Greek hepar = liver + -itis = inflammation + C = third identified hepatitis virus",
    aliases: [
      "hepatitis c",
      "hepatitis c virus",
      "hcv",
      "hcv infection",
      "chronic hepatitis c",
      "acute hepatitis c",
    ],
    definition:
      "Bloodborne liver infection caused by hepatitis C virus (RNA flavivirus) that frequently becomes chronic and can lead to cirrhosis and hepatocellular carcinoma if untreated.",
    pathophysiology:
      "HCV infects hepatocytes → immune-mediated injury and direct cytopathic effects → chronic infection in ~75% without treatment → progressive fibrosis → cirrhosis and HCC over decades.",
    classicPresentation: [
      "Often asymptomatic for years — detected on screening or elevated LFTs",
      "History of IV drug use, blood transfusion before 1992, tattoos, needlestick",
      "Fatigue and mild jaundice in symptomatic acute infection (less common)",
    ],
    keyFindings: [
      "Normal exam until advanced liver disease",
      "Cirrhosis stigmata in long-standing infection",
    ],
    keyLabs: [
      "Anti-HCV antibody — screening test",
      "HCV RNA PCR — confirms active infection and genotype",
      "↑ ALT/AST (may fluctuate or be normal)",
      "Liver biopsy or elastography for fibrosis staging (historical/adjunct)",
    ],
    associations: [
      "Cirrhosis and hepatocellular carcinoma",
      "Mixed cryoglobulinemia and membranoproliferative GN",
      "Porphyria cutanea tarda and lichen planus",
      "HIV coinfection accelerates progression",
    ],
    complications: [
      "Chronic hepatitis and cirrhosis",
      "HCC in cirrhotic patients",
      "Extrahepatic immune-complex manifestations",
    ],
    distinguishFrom: [
      "Hepatitis B — DNA virus; different serology (HBsAg)",
      "Hepatitis A/E — acute self-limited, fecal-oral",
      "Autoimmune hepatitis — ANA/SMA, different serology",
      "Alcoholic liver disease — history and AST:ALT pattern",
    ],
    treatment: [
      "Direct-acting antivirals (DAAs) — cure >95% with pangenotypic regimens",
      "Treat all chronic HCV regardless of fibrosis stage (current paradigm)",
      "Avoid alcohol; vaccinate against HBV and HAV if not immune",
    ],
    boardsPearls: [
      "Anti-HCV (+) → confirm with HCV RNA",
      "Most common chronic bloodborne hepatitis in US historically",
      "HCV → cirrhosis → HCC (screen cirrhotics)",
      "DAAs achieve sustained virologic response (cure)",
      "Cryoglobulinemia and MPGN association",
    ],
    pediatrics:
      "Vertical HCV transmission ~5%; children born to HCV+ mothers need testing; pediatric treatment follows specialist protocols with DAAs.",
  },
  {
    id: "hepatitis",
    name: "Hepatitis",
    etymology: "Greek hepar = liver + -itis = inflammation",
    aliases: [
      "hepatitis",
      "acute hepatitis",
      "viral hepatitis",
      "hepatic inflammation",
    ],
    definition:
      "Inflammation of the liver presenting with hepatocellular injury, often detected by elevated aminotransferases and clinical jaundice in symptomatic cases.",
    pathophysiology:
      "Hepatocyte injury from viral infection, toxins, ischemia, or immune attack → release of ALT/AST → impaired bile transport and synthetic function depending on severity and chronicity.",
    classicPresentation: [
      "Fatigue, anorexia, nausea, and RUQ discomfort",
      "Jaundice, dark urine, and pale stools if cholestasis prominent",
      "Fever and tender hepatomegaly in acute viral hepatitis",
    ],
    keyFindings: [
      "Elevated ALT and AST (often ALT ≥ AST except alcoholic pattern)",
      "Hyperbilirubinemia and pruritus with cholestasis",
      "Hepatomegaly on exam",
    ],
    keyLabs: [
      "ALT, AST, bilirubin, alkaline phosphatase",
      "Viral serologies (HBV, HCV, HAV, HEV as indicated)",
      "INR and albumin if synthetic dysfunction suspected",
    ],
    associations: [
      "Hepatitis A and E — fecal-oral, usually self-limited",
      "Hepatitis B and C — blood/body fluid exposure, chronic infection risk",
      "Alcohol, acetaminophen toxicity, ischemic hepatitis",
      "Autoimmune hepatitis, Wilson disease, drug-induced liver injury",
    ],
    complications: [
      "Acute liver failure",
      "Progression to chronic hepatitis and cirrhosis (especially HBV/HCV)",
      "Fulminant hepatic failure with encephalopathy and coagulopathy",
    ],
    distinguishFrom: [
      "Cholestasis/obstruction — predominant ↑ ALP/GGT with dilated ducts",
      "Cirrhosis — chronic disease with portal hypertension and stigmata, not isolated acute inflammation",
      "Hemolysis — unconjugated hyperbilirubinemia without marked transaminase rise",
    ],
    treatment: [
      "Treat underlying cause (antivirals for HBV/HCV, stop hepatotoxin, immunosuppression for autoimmune hepatitis)",
      "Supportive care in acute viral hepatitis",
      "Avoid alcohol and hepatotoxic drugs",
    ],
    boardsPearls: [
      "AST:ALT >2:1 suggests alcoholic hepatitis",
      "Transaminases >1000 suggest acute viral, ischemic, or toxin-mediated injury",
      "HBV: HBsAg, anti-HBc, anti-HBs pattern determines acute vs chronic vs immunity",
      "HAV and HEV usually self-limited; HCV often becomes chronic without treatment",
    ],
    pediatrics:
      "Neonatal cholestasis requires distinguishing biliary atresia from neonatal hepatitis; HBV perinatal transmission prevented with birth dose vaccine and HBIG.",
  },
  {
    id: "cirrhosis",
    name: "Cirrhosis",
    etymology: "Greek kirrhos = tawny/orange + -osis = condition",
    aliases: [
      "cirrhosis",
      "liver cirrhosis",
      "hepatic cirrhosis",
      "end-stage liver disease from fibrosis",
    ],
    definition:
      "End-stage chronic liver disease with diffuse fibrosis and nodular regeneration causing portal hypertension and impaired hepatic synthetic and metabolic function.",
    pathophysiology:
      "Repeated hepatocyte injury → stellate cell activation and collagen deposition → fibrous bands and regenerative nodules distort architecture → ↑ intrahepatic resistance (portal hypertension) and ↓ functional hepatocyte mass.",
    classicPresentation: [
      "Fatigue, muscle wasting, and anorexia",
      "Jaundice, ascites, and lower-extremity edema",
      "Encephalopathy with asterixis in decompensated disease",
    ],
    keyFindings: [
      "Spider angiomata, palmar erythema, gynecomastia",
      "Caput medusae, ascites, and splenomegaly",
      "Shrunken nodular liver (may be enlarged early)",
    ],
    keyLabs: [
      "↓ albumin, prolonged PT/INR",
      "↑ bilirubin and transaminases (may be near-normal in late disease)",
      "Thrombocytopenia from hypersplenism",
      "Hyponatremia in advanced disease",
    ],
    associations: [
      "Chronic hepatitis B and C",
      "Alcohol-associated liver disease",
      "Nonalcoholic steatohepatitis",
      "Hemochromatosis, Wilson disease, autoimmune hepatitis, PBC/PSC",
    ],
    complications: [
      "Portal hypertension with variceal bleeding",
      "Ascites and spontaneous bacterial peritonitis",
      "Hepatic encephalopathy",
      "Hepatocellular carcinoma",
      "Hepatorenal syndrome",
    ],
    distinguishFrom: [
      "Acute hepatitis — inflammatory injury without established fibrosis/nodules",
      "Right heart failure — congestive hepatopathy with JVD, not typical cirrhotic stigmata",
      "Metastatic liver disease — focal masses, not diffuse nodular architecture",
    ],
    treatment: [
      "Treat underlying cause and abstain from alcohol",
      "Manage complications (diuretics for ascites, lactulose for encephalopathy, band ligation for varices)",
      "Liver transplantation for decompensated cirrhosis",
      "Surveillance ultrasound/AFP for HCC in cirrhotic patients",
    ],
    boardsPearls: [
      "Cirrhosis = fibrosis + regenerative nodules + portal hypertension",
      "↓ albumin and ↑ INR reflect impaired synthetic function",
      "Spider angiomata, ascites, and varices are classic stigmata",
      "All cirrhotics need HCC surveillance",
      "Aflatoxin exposure (Aspergillus-contaminated grains) synergizes with HBV for HCC in endemic regions",
    ],
    pediatrics:
      "Pediatric cirrhosis may follow biliary atresia, metabolic liver disease, or chronic cholestatic disorders; portal hypertension complications occur in children as in adults.",
  },
  {
    id: "portal-hypertension",
    name: "Portal Hypertension",
    etymology: "Latin porta = gate + Greek hyper = excess + Latin tensio = pressure",
    aliases: [
      "portal hypertension",
      "portal venous hypertension",
      "increased portal pressure",
    ],
    definition:
      "Elevated pressure in the portal venous system, most commonly from increased intrahepatic resistance in cirrhosis, leading to portosystemic shunting and complications.",
    pathophysiology:
      "↑ portal venous inflow or resistance (intrahepatic fibrosis, presinusoidal/sinusoidal/postsinusoidal obstruction) → opening of portosystemic collaterals → esophageal/gastric varices, caput medusae, and splenic congestion.",
    classicPresentation: [
      "Often asymptomatic until complication (variceal bleed, ascites)",
      "Hematemesis or melena from variceal rupture",
      "Ascites and splenomegaly in chronic portal hypertension",
    ],
    keyFindings: [
      "Esophageal or gastric varices on endoscopy",
      "Caput medusae and hemorrhoids from portosystemic collaterals",
      "Splenomegaly with thrombocytopenia",
      "Ascites on exam or imaging",
    ],
    keyLabs: [
      "Hepatic venous pressure gradient when measured invasively",
      "Platelet count often low from hypersplenism",
      "Diagnostic paracentesis if ascites present",
    ],
    associations: [
      "Cirrhosis (most common cause)",
      "Portal vein thrombosis",
      "Schistosomiasis (presinusoidal)",
      "Right-sided heart failure (sinusoidal/postsinusoidal component)",
    ],
    complications: [
      "Variceal hemorrhage",
      "Ascites and spontaneous bacterial peritonitis",
      "Hepatic encephalopathy from shunting",
      "Refractory hydrothorax (hepatic hydrothorax)",
    ],
    distinguishFrom: [
      "Systemic hypertension — arm BP elevation without portosystemic collaterals",
      "Budd-Chiari syndrome — hepatic vein thrombosis with painful hepatomegaly and ascites",
      "Isolated ascites from heart failure or nephrotic syndrome without varices",
    ],
    treatment: [
      "Nonselective β-blockers (propranolol, nadolol) for primary/secondary variceal prophylaxis",
      "Endoscopic band ligation for medium/large varices or acute bleed",
      "Octreotide and antibiotics during acute variceal hemorrhage",
      "Transjugular intrahepatic portosystemic shunt (TIPS) in selected refractory cases",
    ],
    boardsPearls: [
      "Cirrhosis is the most common cause of portal hypertension",
      "Varices form at gastroesophageal junction and umbilicus (caput medusae)",
      "SBP occurs in cirrhotic ascites from bacterial translocation",
      "Portal hypertension explains ascites, varices, and hypersplenism together",
    ],
    pediatrics:
      "Extrahepatic portal vein obstruction can cause portal hypertension in children without cirrhosis; variceal bleeding remains a major complication.",
  },
  {
    id: "hepatocellular-carcinoma",
    name: "Hepatocellular Carcinoma",
    etymology: "Greek hepar = liver + Latin cellula = small cell + carcinoma = malignant epithelial tumor",
    aliases: [
      "hepatocellular carcinoma",
      "hepatocellular cancer",
      "hcc",
      "primary liver cancer",
      "hepatoma",
    ],
    definition:
      "Primary malignant neoplasm arising from hepatocytes, usually developing in the setting of chronic liver disease and cirrhosis.",
    pathophysiology:
      "Chronic injury and regeneration in cirrhosis → clonal hepatocyte transformation with angiogenesis and arterial supply → expansile hepatic mass with risk of vascular invasion and metastasis.",
    classicPresentation: [
      "Often asymptomatic until advanced",
      "RUQ pain, weight loss, and ascites in cirrhotic patient",
      "Sudden decompensation or new portal hypertension complication",
    ],
    keyFindings: [
      "Solid hepatic mass on ultrasound/CT/MRI with arterial enhancement and venous washout",
      "Worsening liver function in known cirrhosis",
      "Paraneoplastic erythrocytosis (rare)",
    ],
    keyLabs: [
      "↑ alpha-fetoprotein (AFP) — supports but not required for diagnosis",
      "Imaging criteria in cirrhosis can diagnose HCC without biopsy in select cases",
      "Evaluate underlying chronic liver disease etiology",
    ],
    associations: [
      "Cirrhosis from hepatitis B/C, alcohol, NASH, hemochromatosis",
      "Aflatoxin exposure (HBV synergy)",
      "Chronic HBV even without cirrhosis (higher risk population)",
    ],
    complications: [
      "Vascular invasion and intrahepatic spread",
      "Portal vein tumor thrombosis",
      "Metastasis to lung and bone",
      "Liver failure and variceal bleeding",
    ],
    distinguishFrom: [
      "Metastatic liver cancer — multiple lesions, known primary elsewhere",
      "Cholangiocarcinoma — biliary/obstructive pattern, CA 19-9 may be elevated",
      "Hepatic adenoma — benign, often in young women on OCPs",
      "Focal nodular hyperplasia — central scar, benign",
    ],
    treatment: [
      "Resection or transplant in early disease within Milan criteria",
      "Locoregional therapy (ablation, TACE) for intermediate disease",
      "Systemic therapy for advanced/unresectable HCC",
      "Treat underlying cirrhosis and continue surveillance if new lesion after treatment",
    ],
    boardsPearls: [
      "HCC usually arises in cirrhosis — screen cirrhotics with ultrasound ± AFP",
      "HBV increases HCC risk even without advanced fibrosis",
      "AFP is useful but normal AFP does not exclude HCC",
      "Arterial hyperenhancement with washout on imaging is classic for HCC",
    ],
    pediatrics:
      "Pediatric primary liver malignancy is usually hepatoblastoma, not HCC; HCC is rare in children except with underlying metabolic or HBV-related chronic liver disease.",
  },
  {
    id: "fatty-liver-disease",
    name: "Fatty Liver Disease",
    etymology: "Old English fǣtt = fat + Old English lifer = liver + Latin dis = apart + ease = condition",
    aliases: [
      "fatty liver disease",
      "fatty liver",
      "hepatic steatosis",
      "nafld",
      "nash",
      "nonalcoholic fatty liver disease",
      "nonalcoholic steatohepatitis",
      "mafld",
      "metabolic dysfunction-associated fatty liver disease",
      "alcoholic fatty liver disease",
      "steatosis",
    ],
    definition:
      "Hepatic triglyceride accumulation with or without inflammation and fibrosis, most commonly associated with metabolic syndrome or alcohol use.",
    pathophysiology:
      "Insulin resistance and increased free fatty acid delivery → hepatocyte steatosis → lipotoxicity and oxidative stress → steatohepatitis, ballooning degeneration, and progressive fibrosis (NASH) → cirrhosis and HCC risk.",
    classicPresentation: [
      "Often asymptomatic with incidentally elevated ALT",
      "Mild RUQ discomfort in some patients",
      "Features of metabolic syndrome (obesity, diabetes, dyslipidemia, hypertension)",
    ],
    keyFindings: [
      "Hepatomegaly possible",
      "Bright liver on ultrasound",
      "Steatosis on imaging; steatohepatitis requires biopsy for definitive diagnosis",
    ],
    keyLabs: [
      "Mild ↑ ALT > AST (typically <5× normal in NAFLD)",
      "Evaluate for metabolic syndrome, diabetes, and dyslipidemia",
      "Exclude viral hepatitis, alcohol excess, hemochromatosis, Wilson disease",
    ],
    associations: [
      "Obesity and type 2 diabetes mellitus",
      "Metabolic syndrome",
      "Polycystic ovary syndrome",
      "Alcohol use (alcoholic steatohepatitis overlap)",
    ],
    complications: [
      "Progressive fibrosis and cirrhosis",
      "Hepatocellular carcinoma",
      "Cardiovascular disease (shared metabolic risk)",
    ],
    distinguishFrom: [
      "Alcoholic liver disease — AST:ALT often >2:1, heavy alcohol history",
      "Chronic viral hepatitis — serologic diagnosis",
      "Hemochromatosis — ↑ ferritin/transferrin saturation, HFE mutation",
      "Simple steatosis vs NASH — inflammation/ballooning/fibrosis on biopsy defines steatohepatitis",
    ],
    treatment: [
      "Weight loss and treatment of diabetes/dyslipidemia",
      "Alcohol abstinence if any alcohol-associated component",
      "Manage cardiovascular risk factors",
      "No universally approved disease-modifying drug for all NAFLD/NASH on Step 1 focus — lifestyle is cornerstone",
    ],
    boardsPearls: [
      "NAFLD/NASH linked to metabolic syndrome and insulin resistance",
      "NASH can progress to cirrhosis and HCC without alcohol",
      "AST:ALT >2:1 favors alcoholic over NAFLD pattern",
      "Zone 3 hepatocytes are vulnerable in many toxic/metabolic injuries",
    ],
    pediatrics:
      "Pediatric NAFLD is increasingly common with childhood obesity; evaluate for metabolic syndrome and exclude other liver diseases.",
  },
  {
    id: "rhabdomyolysis",
    name: "Rhabdomyolysis",
    etymology: "Greek rhabdos = rod/striated + mys = muscle + -lysis = breakdown",
    aliases: [
      "rhabdomyolysis",
      "rhabdo",
      "skeletal muscle breakdown",
      "myoglobinuria from muscle injury",
    ],
    definition:
      "Acute breakdown of skeletal muscle with release of intracellular contents (myoglobin, CK, potassium) into circulation, risking acute kidney injury and electrolyte disturbances.",
    pathophysiology:
      "Muscle injury → sarcolemmal disruption → ↑ CK and myoglobin in blood → myoglobin filters in kidneys → tubular obstruction and direct nephrotoxicity → acute tubular necrosis; hyperkalemia and compartment syndrome may coexist.",
    classicPresentation: [
      "Muscle pain, weakness, swelling after trauma, exertion, immobilization, or drugs",
      "Dark or tea-colored urine (myoglobinuria)",
      "Recent statin use, cocaine/amphetamines, heat stroke, crush injury, or seizure",
    ],
    keyFindings: [
      "Tender, swollen muscles; possible compartment syndrome",
      "Hypovolemia from third-spacing",
      "Altered mental status if severe hyperkalemia",
    ],
    keyLabs: [
      "Markedly ↑ CK (often >5× normal, frequently thousands)",
      "↑ potassium, ↑ phosphate, ↓ calcium (early hypocalcemia)",
      "↑ creatinine/BUN with muddy brown casts on urinalysis",
      "Myoglobinuria — positive urine dipstick for blood without RBCs on microscopy",
    ],
    associations: [
      "Crush injury and compartment syndrome",
      "Statins (especially with fibrates or CYP inhibitors)",
      "Cocaine, amphetamines, alcohol binge",
      "Heat stroke, malignant hyperthermia, neuroleptic malignant syndrome",
      "McArdle disease and other metabolic myopathies with exertion",
      "Viral myositis (influenza, coxsackie)",
    ],
    complications: [
      "Acute kidney injury",
      "Hyperkalemia and cardiac arrhythmias",
      "Compartment syndrome",
      "Disseminated intravascular coagulation",
    ],
    distinguishFrom: [
      "Myocardial infarction — troponin ↑ with cardiac symptoms; CK-MB pattern differs",
      "Polymyositis/dermatomyositis — subacute weakness, autoimmune markers, less explosive CK",
      "Hematuria — RBCs on microscopy; dipstick blood positive with cells",
      "Hemolysis — ↑ LDH and indirect bilirubin without extreme CK elevation",
    ],
    treatment: [
      "Aggressive IV isotonic fluids (early goal: urine output ~200–300 mL/h in adults)",
      "Treat hyperkalemia urgently if present",
      "Stop offending agents; fasciotomy for compartment syndrome",
      "Dialysis if refractory AKI or severe electrolyte derangements",
    ],
    boardsPearls: [
      "Massive CK ↑ + dark urine + AKI → rhabdomyolysis until proven otherwise",
      "Urine dipstick detects myoglobin as blood — suspect rhabdo when blood+ but few/no RBCs",
      "Statins + gemfibrozil or macrolides ↑ myopathy risk",
      "Fluids are cornerstone to prevent myoglobin precipitation in renal tubules",
      "Malignant hyperthermia and NMS are classic drug-related precipitants",
    ],
    pediatrics:
      "Viral myositis and inherited metabolic myopathies (McArdle) can cause rhabdomyolysis with exertion; maintain hydration and monitor CK and renal function.",
  },
  {
    id: "acute-tubular-necrosis",
    name: "Acute Tubular Necrosis",
    etymology: "Latin acutus = sudden + Latin tubulus = little tube + Greek nekros = dead tissue",
    aliases: [
      "acute tubular necrosis",
      "atn",
      "acute tubular injury",
      "ati",
      "ischemic atn",
      "toxic atn",
    ],
    definition:
      "Most common intrinsic cause of acute kidney injury — acute injury and sloughing of renal tubular epithelial cells causing impaired reabsorption and concentration, typically after ischemic or nephrotoxic insult.",
    pathophysiology:
      "Ischemia (shock, sepsis) or toxins (aminoglycosides, contrast, myoglobin, ethylene glycol) damage proximal tubule cells → cell necrosis and detachment → tubular obstruction by casts and back-leak of filtrate → oliguria and ↑ creatinine; recovery phase shows tubular regeneration and polyuria.",
    classicPresentation: [
      "Rising creatinine/BUN days after hypotension, sepsis, surgery, or nephrotoxin exposure",
      "Oliguric or nonoliguric AKI depending on severity",
      "Recent rhabdomyolysis, contrast administration, or aminoglycoside use",
      "Recovery: increasing urine output with hypotonic polyuria",
    ],
    keyFindings: [
      "Oliguria (not universal)",
      "Uremic symptoms if severe",
    ],
    keyLabs: [
      "↑ creatinine and BUN",
      "Muddy brown granular casts on urine microscopy",
      "Fractional excretion of Na⁺ (FeNa) >2% in oliguric phase (vs prerenal <1%)",
      "Urine osmolality ~300 mOsm/kg (isosthenuric) in established ATN",
      "Positive dipstick blood with pigmented granular casts in myoglobinuric ATN",
    ],
    associations: [
      "Sepsis and hypovolemic/cardiogenic shock",
      "Rhabdomyolysis and hemoglobinuria/myoglobinuria",
      "Aminoglycosides, amphotericin B, cisplatin",
      "Iodinated contrast (especially with dehydration, CKD, diabetes)",
      "Ethylene glycol and other nephrotoxins",
    ],
    complications: [
      "Hyperkalemia, metabolic acidosis, volume overload",
      "Uremic encephalopathy and pericarditis",
      "Need for renal replacement therapy",
    ],
    distinguishFrom: [
      "Prerenal azotemia — BUN:Cr >20:1, FeNa <1%, responds to fluids",
      "Acute interstitial nephritis — WBC casts, eosinophils, drug rash",
      "Glomerulonephritis — RBC casts, proteinuria, active urine sediment",
      "Postrenal obstruction — hydronephrosis on imaging",
    ],
    treatment: [
      "Treat underlying cause; discontinue nephrotoxins",
      "IV fluids if hypovolemic; avoid overload if oliguric",
      "Manage hyperkalemia and acidosis; dialysis if indicated",
      "Renal recovery expected over days to weeks if insult removed",
    ],
    boardsPearls: [
      "ATN = intrinsic AKI with muddy brown casts",
      "Ischemic ATN after prolonged hypotension; toxic ATN after myoglobin, contrast, aminoglycosides",
      "FeNa >2% favors ATN over prerenal in oliguric patient",
      "Recovery polyuria phase — replace ongoing losses cautiously",
      "vs prerenal — prerenal improves with volume; ATN does not quickly",
    ],
    pediatrics:
      "Children develop ATN from dehydration, HUS, sepsis, and nephrotoxic drugs; maintain strict fluid and electrolyte monitoring during recovery diuresis.",
  },
  {
    id: "ards",
    name: "Acute Respiratory Distress Syndrome",
    etymology: "Latin acutus = sudden + respirare = breathe + distrahere = pull apart + syndrome = grouped findings",
    aliases: [
      "acute respiratory distress syndrome",
      "ards",
      "adult respiratory distress syndrome",
      "noncardiogenic pulmonary edema",
      "diffuse alveolar damage",
      "dad",
    ],
    definition:
      "Acute, diffuse inflammatory lung injury causing severe hypoxemia and bilateral pulmonary infiltrates from increased alveolar-capillary permeability, not primarily from left atrial hypertension.",
    pathophysiology:
      "Systemic insult (sepsis, trauma, pancreatitis, aspiration) → diffuse alveolar damage → ↑ capillary permeability → protein-rich edema floods alveoli → surfactant dysfunction and atelectasis → V/Q mismatch and shunt → refractory hypoxemia; fibroproliferative phase may follow in prolonged disease.",
    classicPresentation: [
      "Acute dyspnea and hypoxemia within days of precipitating injury",
      "Bilateral crackles; often requires mechanical ventilation",
      "Precipitant: sepsis, pneumonia, pancreatitis, trauma, aspiration, transfusion",
    ],
    keyFindings: [
      "Bilateral infiltrates on chest imaging",
      "Severe hypoxemia with high supplemental O₂ requirement",
      "No cardiomegaly or elevated BNP pattern of cardiogenic edema",
      "Reduced lung compliance on ventilation",
    ],
    keyLabs: [
      "PaO₂/FiO₂ ratio <300 mm Hg (Berlin criteria framework)",
      "Normal or mildly elevated BNP/PCWP if measured (supports noncardiogenic etiology)",
      "Underlying trigger labs — sepsis cultures, lipase in pancreatitis, etc.",
    ],
    associations: [
      "Sepsis (most common)",
      "Severe pneumonia and aspiration",
      "Acute pancreatitis",
      "Trauma, burns, massive transfusion",
      "DIC, overdose (salicylates, opioids with pulmonary edema)",
    ],
    complications: [
      "Ventilator-associated pneumonia",
      "Barotrauma (pneumothorax)",
      "Multiorgan failure",
      "Pulmonary fibrosis in prolonged ARDS",
    ],
    distinguishFrom: [
      "Cardiogenic pulmonary edema — JVD, S3, cardiomegaly, ↑ BNP, pulmonary capillary wedge pressure ↑",
      "Pneumonia alone — may cause ARDS but isolated lobar consolidation without diffuse injury is pneumonia",
      "Acute bronchitis — no bilateral infiltrates or severe hypoxemia",
    ],
    treatment: [
      "Treat underlying cause (source control in sepsis, etc.)",
      "Lung-protective mechanical ventilation (low tidal volume ~6 mL/kg PBW, plateau pressure limits)",
      "Prone positioning in severe hypoxemia",
      "Conservative fluid strategy once resuscitated",
    ],
    boardsPearls: [
      "Bilateral infiltrates + severe hypoxemia + no CHF → ARDS",
      "Noncardiogenic = permeability edema; cardiogenic = hydrostatic edema",
      "PaO₂/FiO₂ <300 defines ARDS severity bands on boards",
      "Sepsis and pneumonia are top precipitants",
      "Low tidal volume ventilation improves mortality (ARDSNet paradigm)",
    ],
    pediatrics:
      "Neonatal RDS is surfactant deficiency, not the same entity as adult ARDS; pediatric ARDS follows similar permeability injury from sepsis, pneumonia, or aspiration with lung-protective ventilation principles.",
  },
  {
    id: "vitiligo",
    name: "Vitiligo",
    etymology: "Latin vitium = blemish/defect + -igo = condition suffix",
    aliases: [
      "vitiligo",
      "vitiligos",
      "depigmentation",
      "autoimmune depigmentation",
    ],
    definition:
      "Acquired autoimmune disorder causing patchy loss of epidermal melanocytes and well-demarcated depigmented macules or patches.",
    pathophysiology:
      "Autoimmune attack on melanocytes (CD8+ T cells and autoantibodies) → melanocyte destruction → absence of melanin in affected skin → depigmented patches; may coexist with other autoimmune diseases.",
    classicPresentation: [
      "Well-demarcated chalk-white macules or patches",
      "Periorificial, acral, or generalized distribution",
      "Often progressive; may follow stress or skin trauma (Koebner phenomenon)",
      "Usually asymptomatic except cosmetic concern",
    ],
    keyFindings: [
      "Depigmented patches with normal skin texture",
      "Wood lamp accentuates lesions (if used)",
      "Perifollicular repigmentation may occur with treatment",
    ],
    keyLabs: [
      "Clinical diagnosis; biopsy rarely needed",
      "Screen for associated autoimmune disease if clinically suggested (thyroid disease, diabetes, pernicious anemia)",
      "Negative fungal prep distinguishes from tinea versicolor",
    ],
    associations: [
      "Other autoimmune diseases — Hashimoto thyroiditis, type 1 diabetes, pernicious anemia, alopecia areata",
      "Family history of autoimmunity",
      "Melanoma-associated vitiligo can appear with immunotherapy",
    ],
    complications: [
      "Psychosocial impact",
      "Sunburn risk in depigmented areas",
      "Ocular or auditory pigment loss in rare segmental variants",
    ],
    distinguishFrom: [
      "Tinea versicolor — fine scale, positive KOH, not fully depigmented",
      "Pityriasis alba — hypopigmented, not chalk-white, common in atopic children",
      "Albinism — congenital, global hypomelanin with ocular involvement",
      "Post-inflammatory hypopigmentation — history of prior inflammation",
      "Chemical leukoderma — contact with phenols/catechols",
    ],
    treatment: [
      "Topical corticosteroids or calcineurin inhibitors for limited disease",
      "Narrowband UVB phototherapy for widespread disease",
      "Sun protection of depigmented skin",
      "Cosmetic camouflage",
    ],
    boardsPearls: [
      "Autoimmune melanocyte destruction → sharply demarcated depigmented patches",
      "Associated with thyroid autoimmunity and other autoimmune diseases",
      "Koebner phenomenon — new lesions at sites of trauma",
      "vs tinea versicolor — scale and KOH; vs pityriasis alba — mild hypopigmentation in atopic child",
    ],
    pediatrics:
      "Segmental vitiligo in children may stabilize earlier than nonsegmental disease; pityriasis alba is a common hypopigmentation mimic in atopic children.",
  },
  {
    id: "migraine",
    name: "Migraine",
    etymology: "Greek hēmikrania = pain on half of the skull → Latin migranea",
    aliases: [
      "migraine",
      "migraines",
      "migraine headache",
      "migraine headaches",
      "migraine with aura",
      "migraine without aura",
      "common migraine",
      "classic migraine",
    ],
    definition:
      "Recurrent primary headache disorder characterized by unilateral or bilateral pulsating headache, often with nausea, photophobia, and phonophobia; may include transient focal neurologic aura.",
    pathophysiology:
      "Complex neurovascular disorder: cortical spreading depression may trigger aura; trigeminovascular activation releases CGRP and substance P → meningeal vasodilation and neurogenic inflammation; central sensitization contributes to pain chronification.",
    classicPresentation: [
      "Recurrent headaches lasting 4–72 hours",
      "Unilateral pulsating pain, moderate to severe intensity",
      "Aggravated by routine physical activity",
      "Nausea/vomiting, photophobia, phonophobia",
      "Aura in ~25% — visual (scintillating scotoma), sensory, or language symptoms preceding headache",
    ],
    keyFindings: [
      "Normal neurologic exam between attacks",
      "Visual aura — fortification spectra, scintillating scotoma",
      "No fever, papilledema, or thunderclap onset (red flags for secondary headache)",
    ],
    keyLabs: [
      "Clinical diagnosis when typical features and normal exam",
      "Neuroimaging if atypical features, abnormal exam, or red flags",
    ],
    associations: [
      "Family history of migraine",
      "Triggers: stress, sleep deprivation, menses, certain foods, hormonal changes",
      "Patent foramen ovale (association, not causal on boards)",
      "Increased risk of ischemic stroke in migraine with aura + OCP use (Step 1 context)",
    ],
    complications: [
      "Status migrainosus — prolonged attack >72 h",
      "Medication-overuse headache with frequent abortive use",
      "Migrainous infarction (rare)",
    ],
    distinguishFrom: [
      "Tension-type headache — bilateral pressing pain, no nausea/photophobia",
      "Cluster headache — excruciating unilateral periorbital pain, autonomic symptoms, short attacks",
      "Subarachnoid hemorrhage — thunderclap maximal-at-onset headache",
      "Meningitis — fever, neck stiffness",
      "Brain tumor — progressive headache, focal signs, papilledema",
    ],
    treatment: [
      "Acute (abortive): NSAIDs, acetaminophen, triptans, antiemetics",
      "Prophylaxis for frequent/disabling attacks: β-blockers, topiramate, amitriptyline, valproate",
      "Trigger avoidance, sleep hygiene, hydration",
    ],
    boardsPearls: [
      "Pulsating unilateral headache + nausea + photophobia = migraine",
      "Aura = reversible focal neurologic symptoms before headache (visual most common)",
      "Triptans are abortive agents — contraindicated in hemiplegic migraine and uncontrolled HTN/CAD",
      "Migraine prophylaxis: propranolol, topiramate, amitriptyline, valproate",
      "Red flags (SNOOP): systemic symptoms, neurologic signs, onset sudden, older age, progressive pattern → image",
    ],
    pediatrics:
      "Childhood migraine often bilateral and shorter; abdominal migraine presents with recurrent abdominal pain and nausea. Infant colic is unrelated. Pediatric prophylaxis considered when school absence is significant.",
  },
];

const conditionById = new Map(CONDITIONS.map((c) => [c.id, c]));

export function getConditionById(id: string): ConditionEntry | undefined {
  return conditionById.get(id);
}

export interface ConditionAliasMatch {
  alias: string;
  conditionId: string;
}

export function buildConditionAliasIndex(): ConditionAliasMatch[] {
  const matches: ConditionAliasMatch[] = [];
  for (const condition of CONDITIONS) {
    for (const alias of condition.aliases) {
      matches.push({ alias: alias.toLowerCase(), conditionId: condition.id });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
