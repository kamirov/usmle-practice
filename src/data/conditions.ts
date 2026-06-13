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
      "anaphylactic shock",
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
      "eczema",
      "atopic eczema",
      "infantile eczema",
      "childhood eczema",
      "endogenous eczema",
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
    associations: [
      'Atopic triad: eczema, asthma, allergic rhinitis ("atopic march")',
      "Food allergy (egg, milk, peanut) especially in young children",
      "Filaggrin gene (FLG) mutations — barrier defect",
    ],
    complications: [
      "Secondary bacterial infection (impetigo, cellulitis — S. aureus)",
      "Eczema herpeticum — HSV superinfection with monomorphic punched-out erosions, fever; dermatologic emergency",
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
      "Topical corticosteroids — flares; use appropriate potency for site and age",
      "Topical calcineurin inhibitors (tacrolimus, pimecrolimus) — face/folds, steroid-sparing",
      "Dupilumab (anti–IL-4Rα) — moderate-to-severe disease refractory to topicals",
      "Trigger avoidance; treat secondary infection; oral antihistamines for sleep-disturbing pruritus",
    ],
    boardsPearls: [
      "Atopic dermatitis = most common eczema; terms often used interchangeably on boards",
      "Atopic march: eczema in infancy → food allergy → asthma/rhinitis later",
      "Filaggrin mutation → impaired skin barrier — high-yield genetics link",
      "Eczema herpeticum — punched-out vesicles/erosions in atopic patient with fever → IV acyclovir",
      "S. aureus colonization common; crusted weeping lesions may need antibiotics",
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
    id: "emphysema",
    name: "Emphysema",
    etymology: "Greek emphysan = inflate/blow in",
    aliases: ["emphysema", "pulmonary emphysema"],
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
    ],
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
      "rapidly progressive glomerulonephritis",
      "rpgn",
      "crescentic glomerulonephritis",
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
      "renal calculi",
      "urolithiasis",
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
    id: "urinary-tract-infection",
    name: "Urinary Tract Infection",
    etymology: "Greek ouron = urine + Latin tractus = drawn path + infectio = contamination",
    aliases: ["urinary tract infection", "uti", "cystitis", "bladder infection"],
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
    aliases: ["turner syndrome", "turner's syndrome", "45,x"],
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
