export interface ConditionEntry {
  id: string;
  name: string;
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
    aliases: [
      "tension pneumothorax",
      "tension ptx",
      "tension pneumo",
    ],
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
    id: "empyema",
    name: "Empyema",
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
    id: "hyperlipidemia",
    name: "Hyperlipidemia",
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
      "Alcohol binge (\"holiday heart\") or postoperative state",
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
    aliases: ["multiple sclerosis", "ms"],
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
    ],
  },
  {
    id: "parkinson-disease",
    name: "Parkinson Disease",
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
    id: "cushing-syndrome",
    name: "Cushing Syndrome",
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
    id: "crohn-disease",
    name: "Crohn Disease",
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
      "Intense pruritus — \"eczema is the itch that rashes\"",
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
      "Atopic triad: eczema, asthma, allergic rhinitis (\"atopic march\")",
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
    id: "psoriasis",
    name: "Psoriasis",
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
      "Nail changes — pitting, onycholysis, \"oil spots,\" subungual hyperkeratosis",
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
      "Psoriatic arthritis — asymmetric oligoarthritis, DIP involvement, dactylitis (\"sausage digits\"), enthesitis",
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
    id: "mastocytosis",
    name: "Mastocytosis",
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
    aliases: [
      "aortic regurgitation",
      "aortic insufficiency",
      "ar",
      "ai",
    ],
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
    id: "pneumoconiosis",
    name: "Pneumoconiosis",
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
    ],
  },
  {
    id: "chronic-bronchitis",
    name: "Chronic Bronchitis",
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
      "Post-strep GN: ↓ C3, normal C4, subepithelial \"humps\" on EM, resolves in 6–8 weeks",
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
    aliases: ["urinary tract infection", "uti", "cystitis", "pyelonephritis"],
    definition:
      "Bacterial infection of the urinary tract, ranging from uncomplicated cystitis to pyelonephritis and urosepsis.",
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
      "Vaginitis — external dysuria, discharge, normal urine culture",
      "Acute urethritis (GC/Chlamydia) — discharge, urethral inflammation",
    ],
    treatment: [
      "Cystitis: TMP-SMX or nitrofurantoin (3–5 days)",
      "Pyelonephritis: fluoroquinolone or ceftriaxone; longer course",
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
    id: "rheumatoid-arthritis",
    name: "Rheumatoid Arthritis",
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
    id: "turner-syndrome",
    name: "Turner Syndrome",
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
      "henoch-schonlein purpura",
      "henoch schonlein purpura",
      "iga vasculitis",
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
    id: "schizophrenia",
    name: "Schizophrenia",
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
    id: "major-depressive-disorder",
    name: "Major Depressive Disorder",
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
    id: "cll",
    name: "Chronic Lymphocytic Leukemia (CLL)",
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
      "Asymptomatic early stage — observation (\"watch and wait\")",
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
      "Induction chemotherapy (\"7+3\": cytarabine + anthracycline)",
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
