export interface SymptomEntry {
  id: string;
  name: string;
  etymology: string;
  aliases: string[];
  definition: string;
  mechanism: string;
  thinkOf: string[];
  pairWith: string[];
  distinguishFrom?: string[];
  pediatrics?: string;
}

export const SYMPTOMS: SymptomEntry[] = [
  {
    id: "exertional-dyspnea",
    name: "Exertional Dyspnea",
    etymology: "Latin exertus = put forth/effort + Greek dys = difficult + pnoia = breathing",
    aliases: [
      "exertional dyspnea",
      "exertional sob",
      "exertional shortness of breath",
      "dyspnea on exertion",
    ],
    definition:
      "Shortness of breath triggered by physical activity that was previously tolerated.",
    mechanism:
      "Exercise increases cardiac output and O₂ demand; dyspnea appears when CO, O₂ delivery, or gas exchange cannot keep pace.",
    thinkOf: [
      "Heart failure",
      "Coronary artery disease / ischemia",
      "Aortic stenosis",
      "Mitral regurgitation",
      "Pulmonary hypertension",
      "COPD / interstitial lung disease",
      "Anemia",
      "Deconditioning or obesity",
    ],
    pairWith: [
      "Chest pain → ischemia",
      "Syncope with exertion → aortic stenosis",
      "Orthopnea or PND → left heart failure",
      "Wheezing → asthma vs cardiac asthma",
      "Peripheral edema → volume overload",
    ],
    distinguishFrom: [
      "Orthopnea — dyspnea when lying flat",
      "PND — abrupt dyspnea waking patient from sleep",
      "Resting dyspnea — suggests more severe cardiopulmonary disease",
    ],
  },
  {
    id: "shortness-of-breath",
    name: "Shortness of Breath",
    etymology: "short = insufficient + breath = respiration",
    aliases: ["shortness of breath", "dyspnea"],
    definition:
      "Subjective sensation of uncomfortable or inadequate breathing (dyspnea), at rest or with activity.",
    mechanism:
      "Arises when ventilatory demand exceeds capacity, when chemoreceptors sense hypoxemia or hypercapnia, or when J-receptors detect pulmonary congestion or microatelectasis.",
    thinkOf: [
      "Heart failure",
      "COPD / asthma",
      "Pulmonary embolism",
      "Pneumonia",
      "Anemia",
      "Metabolic acidosis (DKA, sepsis)",
      "Anxiety / hyperventilation",
    ],
    pairWith: [
      "Exertional onset → cardiac or pulmonary limitation",
      "Orthopnea or PND → left heart failure",
      "Pleuritic pain, hypoxia → PE",
      "Wheezing → obstructive lung disease",
      "Tachypnea with acidosis → Kussmaul breathing",
    ],
    distinguishFrom: [
      "Exertional dyspnea — specifically triggered by activity",
      "Tachypnea — increased rate without subjective air hunger",
      "Hyperventilation — low PaCO₂, often anxiety or acidosis compensation",
    ],
  },
  {
    id: "wheezing",
    name: "Wheezing",
    etymology: "wheeze = high-pitched breath sound",
    aliases: ["wheezing", "wheeze", "wheezes"],
    definition:
      "High-pitched whistling sound during expiration (sometimes inspiration) from narrowed airways.",
    mechanism:
      "Turbulent airflow through constricted bronchioles (smooth muscle spasm, edema, or mucus plugging) produces audible wheezing.",
    thinkOf: [
      "Asthma",
      "COPD exacerbation",
      "Heart failure (cardiac asthma)",
      "Anaphylaxis",
      "Foreign body aspiration",
      "Bronchiolitis (peds)",
    ],
    pairWith: [
      "Exertional or nocturnal symptoms → asthma",
      "Orthopnea, crackles, edema → cardiac asthma / pulmonary edema",
      "Urticaria, hypotension after exposure → anaphylaxis",
      "Peds: viral bronchiolitis (RSV) — wheeze in infant with URI symptoms",
      "Unilateral wheeze → foreign body until proven otherwise",
    ],
    distinguishFrom: [
      "Stridor — inspiratory, upper airway (croup, epiglottitis)",
      "Rhonchi — low-pitched, often clears with cough",
      "Crackles — discontinuous, alveolar fluid (not wheeze)",
    ],
  },
  {
    id: "stridor",
    name: "Stridor",
    etymology: "Latin stridere = to make a harsh, creaking sound",
    aliases: ["stridor", "inspiratory stridor", "stridorous breathing"],
    definition:
      "Harsh, high-pitched upper-airway sound, classically louder during inspiration, caused by turbulent airflow through a narrowed larynx, trachea, or large airway.",
    mechanism:
      "Upper-airway obstruction accelerates airflow through a narrowed segment; extrathoracic obstruction worsens on inspiration as negative pressure narrows the airway further.",
    thinkOf: [
      "Croup (laryngotracheobronchitis)",
      "Epiglottitis",
      "Anaphylaxis with laryngeal edema",
      "Foreign body aspiration",
      "Vocal cord dysfunction or paralysis",
      "Laryngeal/tracheal tumor or subglottic stenosis",
    ],
    pairWith: [
      "Barking cough, low-grade fever → croup",
      "Drooling, tripod posture, toxic appearance → epiglottitis",
      "Urticaria, angioedema, hypotension → anaphylaxis",
      "Sudden onset after choking → foreign body aspiration",
      "Hoarseness after thyroid/neck surgery → recurrent laryngeal nerve injury",
    ],
    distinguishFrom: [
      "Wheezing — usually expiratory, lower-airway narrowing (asthma/COPD)",
      "Stertor — low-pitched snoring sound from nasopharyngeal obstruction",
      "Rhonchi — low-pitched lower-airway secretions, often changes with cough",
    ],
    pediatrics:
      "Stridor in a child is an airway warning sign. Croup is most common and has barking cough; drooling/toxic appearance suggests epiglottitis and requires controlled airway management without aggressive throat exam.",
  },
  {
    id: "hoarseness",
    name: "Hoarseness",
    etymology: "Old English has = rough/harsh voice",
    aliases: [
      "hoarseness",
      "hoarse voice",
      "hoarse",
      "dysphonia",
      "raspy voice",
      "voice hoarseness",
    ],
    definition:
      "Abnormally rough, breathy, weak, or strained voice from impaired vocal fold vibration or laryngeal function.",
    mechanism:
      "Inflammation, edema, mass effect, neuromuscular dysfunction, or recurrent laryngeal nerve injury prevents normal symmetric vocal cord apposition and vibration.",
    thinkOf: [
      "Viral laryngitis / upper respiratory infection",
      "Laryngopharyngeal reflux",
      "Vocal cord nodules or polyps",
      "Recurrent laryngeal nerve palsy",
      "Lung cancer or thyroid malignancy compressing recurrent laryngeal nerve",
      "Hypothyroidism (myxedematous vocal cord edema)",
      "Croup or epiglottitis when paired with stridor",
    ],
    pairWith: [
      "Chronic smoker + weight loss → laryngeal cancer or lung cancer",
      "Hoarseness after thyroidectomy → recurrent laryngeal nerve injury",
      "Dysphagia, aspiration, weak cough → vocal cord paralysis",
      "Heartburn, throat clearing → laryngopharyngeal reflux",
      "Stridor, drooling, respiratory distress → upper-airway emergency",
    ],
    distinguishFrom: [
      "Aphonia — complete loss of voice",
      "Dysarthria — impaired articulation from neurologic/motor disorder, voice quality may be normal",
      "Nasal speech — velopharyngeal dysfunction, not vocal fold vibration",
    ],
    pediatrics:
      "Hoarseness with barking cough suggests croup; hoarseness with drooling, tripod posture, or stridor at rest suggests dangerous upper-airway obstruction such as epiglottitis or bacterial tracheitis.",
  },
  {
    id: "cough",
    name: "Cough",
    etymology: "Middle English coughen = expel air",
    aliases: [
      "cough",
      "coughs",
      "coughing",
      "chronic cough",
      "productive cough",
      "dry cough",
    ],
    definition:
      "Reflex expulsion of air from the lungs to clear airways; may be acute or chronic, dry or productive.",
    mechanism:
      "Stimulation of cough receptors (airway inflammation, mucus, foreign material, or pulmonary congestion) triggers the cough reflex arc via the vagus and medullary cough center.",
    thinkOf: [
      "Upper respiratory infection",
      "Asthma",
      "COPD",
      "GERD / postnasal drip",
      "ACE inhibitor side effect",
      "Heart failure",
      "Tuberculosis / lung cancer",
      "Pertussis (peds)",
    ],
    pairWith: [
      "Hemoptysis → malignancy, TB, bronchiectasis",
      "Wheezing → asthma or COPD",
      "Orthopnea, edema → pulmonary congestion",
      "Fever, weight loss, night sweats → TB or malignancy",
      "Peds: paroxysmal whoop → pertussis; barking cough → croup",
    ],
    distinguishFrom: [
      "Hemoptysis — blood in sputum, not cough alone",
      "Dyspnea without cough — PE, anemia, metabolic acidosis",
      "Chronic cough >8 weeks — think GERD, postnasal drip, asthma, ACE-I",
    ],
  },
  {
    id: "easy-fatigability",
    name: "Easy Fatigability",
    etymology: "easy = low threshold + Latin fatigare = tire + ability = capacity",
    aliases: ["easy fatigability"],
    definition:
      "Disproportionate tiredness or exhaustion with ordinary activity that was previously well tolerated.",
    mechanism:
      "Reduced O₂ delivery (low CO, anemia), impaired O₂ utilization (mitochondrial disease, hypothyroidism), deconditioning, or increased metabolic demand can all lower exercise tolerance.",
    thinkOf: [
      "Anemia",
      "Heart failure",
      "Hypothyroidism",
      "Chronic kidney disease",
      "Mitral regurgitation",
      "Depression / chronic fatigue",
      "Deconditioning",
    ],
    pairWith: [
      "Dyspnea on exertion → cardiac or pulmonary cause",
      "Pallor, tachycardia → anemia",
      "Weight gain, cold intolerance → hypothyroidism",
      "Elevated JVP, edema → heart failure",
      "Low mood, sleep disturbance → depression",
    ],
    distinguishFrom: [
      "Exertional dyspnea — primary complaint is breathlessness, not fatigue",
      "Muscle weakness — difficulty generating force, not general tiredness",
      "Daytime sleepiness → consider sleep apnea or narcolepsy",
    ],
  },
  {
    id: "orthopnea",
    name: "Orthopnea",
    etymology: "Greek orthos = upright + pnoia = breathing",
    aliases: ["orthopnea"],
    definition:
      "Dyspnea that develops or worsens when lying flat, relieved by sitting or standing.",
    mechanism:
      "Recumbency redistributes fluid to the pulmonary circulation and increases venous return, raising pulmonary capillary pressure in a failing left ventricle.",
    thinkOf: [
      "Left-sided heart failure",
      "Volume overload",
      "Severe mitral regurgitation",
      "Advanced COPD (less classic)",
    ],
    pairWith: [
      "PND → classic LV failure pattern",
      "Peripheral edema, S3 → systolic HF",
      "Paroxysmal cough or frothy sputum → pulmonary edema",
      "Number of pillows used → severity marker",
    ],
    distinguishFrom: [
      "PND — occurs after sleep onset, not immediately on lying down",
      "Exertional dyspnea — triggered by activity, not position",
    ],
  },
  {
    id: "dlco",
    name: "Diffusing Capacity for Carbon Monoxide (DLCO)",
    etymology: "Latin diffundere = spread out + carbon monoxide = one-carbon oxide gas",
    aliases: [
      "dlco",
      "carbon monoxide diffusing capacity",
      "diffusing capacity for carbon monoxide",
      "diffusing capacity of lung for carbon monoxide",
      "lung diffusing capacity",
      "decreased dlco",
      "low dlco",
    ],
    definition:
      "Pulmonary function test estimate of gas transfer from alveoli across the alveolar-capillary membrane into pulmonary capillary blood.",
    mechanism:
      "A tiny inhaled CO dose binds hemoglobin avidly, so uptake reflects alveolar surface area, membrane thickness, pulmonary capillary blood volume, and hemoglobin concentration.",
    thinkOf: [
      "Emphysema — destroyed alveolar surface area",
      "Interstitial lung disease / pulmonary fibrosis — thickened diffusion barrier",
      "Pulmonary hypertension or chronic thromboembolism — reduced pulmonary capillary bed",
      "Anemia — less hemoglobin to bind CO",
      "Alveolar hemorrhage — increased DLCO from intra-alveolar hemoglobin",
    ],
    pairWith: [
      "Obstructive PFTs + low DLCO → emphysema",
      "Restrictive PFTs + low DLCO → interstitial lung disease",
      "Restrictive PFTs + normal DLCO → obesity, scoliosis, or neuromuscular weakness",
      "Hemoptysis + high DLCO → diffuse alveolar hemorrhage",
    ],
    distinguishFrom: [
      "FEV1/FVC — airflow obstruction measure, not diffusion",
      "TLC — lung volume/restriction measure, not membrane transfer",
      "A-a gradient — gas exchange mismatch in blood gases, not PFT diffusion capacity",
    ],
    pediatrics:
      "Pediatric DLCO uses age/size-adjusted predicted values; cystic fibrosis, pulmonary hypertension, or interstitial lung disease can lower DLCO when diffusion surface or capillary blood volume is reduced.",
  },
  {
    id: "pulmonary-edema",
    name: "Pulmonary Edema",
    etymology: "Latin pulmo = lung + Greek oidema = swelling",
    aliases: [
      "pulmonary edema",
      "pulmonary oedema",
      "alveolar edema",
      "flash pulmonary edema",
    ],
    definition:
      "Accumulation of fluid in the pulmonary interstitium and alveoli, impairing gas exchange and causing dyspnea.",
    mechanism:
      "↑ pulmonary capillary hydrostatic pressure (cardiogenic) or ↑ capillary permeability (noncardiogenic/ARDS) drives fluid into alveoli → crackles, hypoxemia, and pink frothy sputum when severe.",
    thinkOf: [
      "Acute left ventricular failure / cardiogenic pulmonary edema",
      "Myocardial infarction with pump failure",
      "Mitral regurgitation (acute or severe chronic)",
      "Renal failure with volume overload",
      "ARDS (noncardiogenic — permeability edema)",
      "Neurogenic pulmonary edema (catecholamine surge)",
    ],
    pairWith: [
      "Orthopnea, PND, S3 → cardiogenic pulmonary edema",
      "Crackles, hypoxemia, ↑ BNP → heart failure",
      "Chest pain + diaphoresis → MI with pulmonary edema",
      "Bilateral infiltrates without JVD → ARDS vs cardiogenic (check BNP, echo)",
      "Peds: congenital heart disease, acute rheumatic carditis, or fluid overload in renal disease",
    ],
    distinguishFrom: [
      "Pneumonia — fever, focal consolidation, not necessarily volume overload",
      "COPD exacerbation — wheeze, hyperinflation, chronic history",
      "Pulmonary embolism — pleuritic pain, clear lungs early, hypoxemia out of proportion",
      "Peripheral edema alone — systemic congestion without alveolar flooding",
    ],
  },
  {
    id: "edema",
    name: "Edema",
    etymology: "Greek oidema = swelling",
    aliases: [
      "edema",
      "oedema",
      "pitting edema",
      "anasarca",
      "generalized edema",
      "tissue swelling",
    ],
    definition:
      "Abnormal accumulation of fluid in the interstitial space; may be localized or generalized.",
    mechanism:
      "Imbalance of Starling forces: ↑ hydrostatic pressure (heart failure, venous obstruction), ↓ plasma oncotic pressure (nephrotic syndrome, liver failure), lymphatic obstruction, or ↑ capillary permeability (inflammation, sepsis).",
    thinkOf: [
      "Heart failure (pulmonary + peripheral)",
      "Nephrotic syndrome / renal failure",
      "Cirrhosis / portal hypertension",
      "DVT, lymphedema, venous insufficiency",
      "Angioedema, capillary leak (sepsis, burns)",
      "Medications (CCBs, NSAIDs, prednisone)",
    ],
    pairWith: [
      "Crackles, orthopnea → pulmonary edema / left HF",
      "Proteinuria, hypoalbuminemia → nephrotic syndrome",
      "JVD, hepatomegaly → right heart failure / volume overload",
      "Unilateral leg swelling → DVT",
      "Peds: periorbital edema + proteinuria → minimal change disease; anasarca in severe nephrotic syndrome",
    ],
    distinguishFrom: [
      "Peripheral edema — dependent extremity swelling; subset of generalized edema",
      "Angioedema — acute, often allergic or ACE-I mediated, may involve airway",
      "Myxedema — nonpitting mucopolysaccharide deposition in hypothyroidism",
      "Lipedema — painful, nonpitting adipose distribution",
    ],
  },
  {
    id: "myxedema",
    name: "Myxedema",
    etymology: "Greek myxa = mucus + oidema = swelling",
    aliases: [
      "myxedema",
      "myxoedema",
      "myxedematous",
      "pretibial myxedema",
      "periorbital myxedema",
    ],
    definition:
      "Nonpitting accumulation of glycosaminoglycans (hyaluronic acid and other mucopolysaccharides) in the dermis causing doughy, swollen skin — classic in hypothyroidism; pretibial form is specific to Graves disease.",
    mechanism:
      "↓ thyroid hormone (hypothyroidism) or local autoimmune fibroblast stimulation (Graves pretibial myxedema) → ↑ dermal GAG deposition and water binding → thickened, nonpitting, indurated skin without true interstitial fluid overload.",
    thinkOf: [
      "Hypothyroidism — periorbital puffiness, coarse skin",
      "Graves disease — pretibial myxedema (orange-peel texture over shins)",
      "Severe hypothyroidism progressing to myxedema coma",
    ],
    pairWith: [
      "↑ TSH + ↓ free T4 + periorbital puffiness → hypothyroid myxedema",
      "Hyperthyroidism + ophthalmopathy + pretibial plaques → Graves pretibial myxedema",
      "Bradycardia, delayed reflexes, hoarse voice → hypothyroidism",
      "Nonpitting doughy skin that does not leave pit with pressure → myxedema not pitting edema",
    ],
    distinguishFrom: [
      "Pitting edema — interstitial fluid from heart failure, nephrotic syndrome, DVT",
      "Angioedema — acute allergic or bradykinin-mediated swelling",
      "Lipedema — painful adipose hypertrophy, spares feet",
      "Acromegaly — soft tissue overgrowth from GH excess, not GAG myxedema",
      "Hypothyroidism (condition) — systemic disease; myxedema is the skin manifestation",
    ],
    pediatrics:
      "Congenital hypothyroidism can cause periorbital puffiness and macroglossia; pretibial myxedema in Graves is rare in children but Graves hyperthyroidism occurs in adolescents.",
  },
  {
    id: "goiter",
    name: "Goiter",
    etymology: "Latin guttur = throat + -itis/-oma pattern → goiter = throat swelling",
    aliases: [
      "goiter",
      "goitre",
      "goiters",
      "goitres",
      "thyroid enlargement",
      "enlarged thyroid",
      "enlarged thyroid gland",
      "diffuse goiter",
      "nodular goiter",
      "thyromegaly",
    ],
    definition:
      "Enlargement of the thyroid gland — may be diffuse or nodular, euthyroid, hypothyroid, or hyperthyroid depending on cause.",
    mechanism:
      "Chronic TSH stimulation (iodine deficiency, Hashimoto early phase), autonomous nodule hormone production, autoimmune inflammation, or infiltrative disease increases thyroid volume; compressive symptoms arise when gland enlarges into mediastinum.",
    thinkOf: [
      "Iodine deficiency — endemic multinodular goiter",
      "Hashimoto thyroiditis — autoimmune hypothyroidism with goiter",
      "Graves disease — diffuse toxic goiter with bruit",
      "Toxic multinodular goiter — hot nodules with hyperthyroidism",
      "Thyroid cancer — firm nodule within goiter",
      "Dyshormonogenesis — congenital hypothyroidism with goiter",
    ],
    pairWith: [
      "Diffuse goiter + bruit + hyperthyroid symptoms → Graves disease",
      "Painless goiter + ↑ TSH + anti-TPO → Hashimoto thyroiditis",
      "Solitary cold nodule in adult → exclude thyroid cancer (FNA)",
      "Dysphagia, hoarseness, stridor → substernal goiter compressing airway/esophagus",
      "Low dietary iodine in endemic region → colloid goiter",
    ],
    distinguishFrom: [
      "Thyroid nodule — focal mass within gland; may occur inside goiter",
      "Cervical lymphadenopathy — separate lymph node enlargement, not thyroid",
      "Thyroglossal duct cyst — midline neck mass that moves with tongue protrusion",
      "Subacute thyroiditis — painful tender thyroid, not painless goiter alone",
    ],
    pediatrics:
      "Congenital hypothyroidism from dyshormonogenesis may present with goiter at birth; iodine deficiency goiter in endemic areas. Pediatric thyroid nodules have higher malignancy risk than adult nodules — evaluate promptly.",
  },
  {
    id: "proptosis",
    name: "Proptosis",
    etymology: "Greek pro = forward + ptosis = falling; forward displacement of the globe",
    aliases: [
      "proptosis",
      "exophthalmos",
      "exophthalmus",
      "exophthalmia",
      "eye protrusion",
      "bulging eyes",
      "bulging eye",
      "protruding eyes",
      "graves ophthalmopathy",
      "thyroid eye disease",
    ],
    definition:
      "Anterior displacement of the eyeball beyond the orbital rim — measured clinically or by exophthalmometry; causes exposure keratopathy and optic nerve compression when severe.",
    mechanism:
      "↑ orbital contents (inflamed extraocular muscles and adipose tissue in Graves ophthalmopathy, orbital cellulitis abscess, or tumor) or shallow orbit push the globe forward; venous congestion at orbital apex worsens edema.",
    thinkOf: [
      "Graves ophthalmopathy — most common cause of bilateral proptosis",
      "Orbital cellulitis — painful, ophthalmoplegia, pediatric emergency",
      "Retrobulbar hematoma — post-trauma or surgery, acute vision loss",
      "Orbital tumor or cavernous sinus thrombosis",
      "Rhabdomyosarcoma — unilateral proptosis in child",
    ],
    pairWith: [
      "Hyperthyroidism + lid retraction + proptosis → Graves ophthalmopathy",
      "Fever + painful eye movements + proptosis → orbital cellulitis (not preseptal)",
      "Acute vision loss + proptosis after trauma → retrobulbar hematoma → lateral canthotomy",
      "Cranial nerve III/IV/VI palsies + headache + proptosis → cavernous sinus thrombosis",
      "Unilateral proptosis in child → rhabdomyosarcoma until proven otherwise",
    ],
    distinguishFrom: [
      "Lid retraction (Dalrymple sign) — lid position without true globe protrusion",
      "Preseptal cellulitis — eyelid swelling without painful eye movements or proptosis",
      "Pseudoproptosis — contralateral enophthalmos or large myopic globe",
      "Horner syndrome — ptosis and miosis, not proptosis",
    ],
    pediatrics:
      "Orbital cellulitis complicating ethmoid sinusitis is a pediatric emergency — distinguish from preseptal cellulitis (no proptosis, no ophthalmoplegia). Rhabdomyosarcoma is the most common primary orbital malignancy in children.",
  },
  {
    id: "peripheral-edema",
    name: "Peripheral Edema",
    etymology: "Greek peri = around + pherein = carry + Greek oidema = swelling",
    aliases: [
      "peripheral edema",
      "pedal edema",
      "lower extremity edema",
      "leg swelling",
      "bilateral leg swelling",
    ],
    definition:
      "Accumulation of interstitial fluid in the dependent extremities, typically bilateral and pitting.",
    mechanism:
      "↑ capillary hydrostatic pressure (heart failure, venous obstruction), ↓ oncotic pressure (nephrotic syndrome, cirrhosis), or ↑ capillary permeability (inflammation) drive fluid into interstitium.",
    thinkOf: [
      "Heart failure (right or biventricular)",
      "Nephrotic syndrome",
      "Cirrhosis / portal hypertension",
      "Chronic venous insufficiency",
      "DVT / lymphedema (often unilateral)",
      "Medications (CCBs, NSAIDs)",
    ],
    pairWith: [
      "Orthopnea, PND, JVP elevation → heart failure",
      "Proteinuria, hypoalbuminemia → nephrotic syndrome",
      "Ascites, jaundice → cirrhosis",
      "Unilateral calf pain, warmth → DVT",
      "Peds: periorbital edema with proteinuria → nephrotic syndrome (minimal change disease)",
    ],
    distinguishFrom: [
      "Lipedema — nonpitting, painful fat distribution",
      "Angioedema — acute, often face/airway, allergic or ACE-I mediated",
      "Ascites — intraperitoneal fluid, not peripheral edema alone",
    ],
  },
  {
    id: "pnd",
    name: "Paroxysmal Nocturnal Dyspnea (PND)",
    etymology: "Greek paroxysmos = sudden attack + Latin nox = night + dys = difficult + pnoia = breathing",
    aliases: ["paroxysmal nocturnal dyspnea", "pnd"],
    definition:
      "Sudden episodes of dyspnea that awaken the patient from sleep, often with a sensation of suffocation.",
    mechanism:
      "After hours supine, fluid shifts and increased venous return raise LV filling pressures; compensatory sympathetic surge worsens afterload and precipitates pulmonary edema.",
    thinkOf: [
      "Left ventricular failure",
      "Ischemic cardiomyopathy",
      "Hypertensive heart disease",
      "Mitral regurgitation",
    ],
    pairWith: [
      "Orthopnea → bilateral LV failure",
      "S3 gallop, crackles → pulmonary congestion",
      "Elevated JVP, edema → volume overload",
      "History of MI or hypertension",
    ],
    distinguishFrom: [
      "Orthopnea — present when lying down, not specifically after sleep",
      "Nocturnal asthma — wheeze, allergic history, less crackles",
      "Sleep apnea — snoring, daytime somnolence, not frothy edema",
    ],
  },
  {
    id: "pleuritic-chest-pain",
    name: "Pleuritic Chest Pain",
    etymology: "Greek pleura = side/rib + -itic = inflammatory + Old English cest = box/thorax + Latin poena = penalty/suffering",
    aliases: ["pleuritic chest pain", "pleuritic pain"],
    definition:
      "Sharp chest pain that worsens with inspiration or coughing due to pleural irritation.",
    mechanism:
      "Inflammation of the parietal pleura (which is innervated) produces localized pain accentuated by chest wall movement.",
    thinkOf: [
      "Pulmonary embolism",
      "Pneumonia / pleurisy",
      "Pneumothorax",
      "Pericarditis (can be pleuritic)",
      "Viral pleuritis",
    ],
    pairWith: [
      "Tachycardia, hypoxia, immobilization → PE",
      "Fever, cough, infiltrate → pneumonia",
      "Sudden unilateral dyspnea, diminished breath sounds → pneumothorax",
      "Positional relief sitting forward → pericarditis",
    ],
    distinguishFrom: [
      "Pressure-like pain with exertion → angina",
      "Tearing pain radiating to the back → aortic dissection",
      "Reproducible with palpation → musculoskeletal",
    ],
  },
  {
    id: "tearing-chest-pain",
    name: "Tearing Chest Pain",
    etymology: "tear = ripping sensation + Old English cest = box/thorax + Latin poena = penalty/suffering",
    aliases: ["tearing chest pain", "tearing pain"],
    definition:
      "Sudden, severe chest pain described as ripping or tearing, often maximal at onset.",
    mechanism:
      "Intimal tear in the aorta with dissection creates a false lumen; pain reflects acute aortic wall separation.",
    thinkOf: ["Aortic dissection", "Aortic rupture"],
    pairWith: [
      "Hypertension or connective tissue disease (Marfan, Ehlers-Danlos)",
      "Pulse or BP differential between arms",
      "Widened mediastinum on CXR",
      "Neurologic deficits → branch vessel compromise",
    ],
    distinguishFrom: [
      "Pleuritic pain — worse with breathing, not classic ripping radiation",
      "STEMI — crushing pressure, not tearing to the back",
      "PE — pleuritic, tachycardic, hypoxic without pulse deficit",
    ],
  },
  {
    id: "chest-pain",
    name: "Chest Pain",
    etymology: "Old English cest = box/thorax + Latin poena = penalty/suffering",
    aliases: [
      "chest pain",
      "substernal chest pain",
      "crushing chest pain",
      "pressure-like chest pain",
      "angina",
      "chest pressure",
    ],
    definition:
      "Discomfort or pain in the chest, often described as pressure, tightness, or squeezing.",
    mechanism:
      "Myocardial ischemia (supply-demand mismatch) causes substernal pain via ischemic metabolites; noncardiac causes include esophageal spasm, musculoskeletal strain, and anxiety.",
    thinkOf: [
      "Stable or unstable angina",
      "Acute coronary syndrome (NSTEMI / STEMI)",
      "Aortic stenosis",
      "Hypertrophic cardiomyopathy",
      "GERD / esophageal spasm",
      "Costochondritis",
    ],
    pairWith: [
      "Exertional, relieved by rest or nitroglycerin → stable angina",
      "Diaphoresis, nausea, radiation to jaw/arm → ACS",
      "Syncope with exertion → aortic stenosis or HOCM",
      "Reproducible with palpation → musculoskeletal",
      "Peds: chest pain with exertion in adolescent → HOCM or anomalous coronary artery",
    ],
    distinguishFrom: [
      "Pleuritic chest pain — sharp, worse with inspiration",
      "Tearing chest pain — ripping radiation to back → dissection",
      "Point tenderness — costochondritis, not ischemia",
    ],
  },
  {
    id: "palpitations",
    name: "Palpitations",
    etymology: "Latin palpitare = flutter",
    aliases: ["palpitations", "palpitation"],
    definition:
      "Awareness of one's own heartbeat, described as racing, pounding, fluttering, or skipping beats.",
    mechanism:
      "Increased rate, contractility, stroke volume, or irregular rhythm makes normally subliminal cardiac sensations perceptible; heightened sympathetic tone or anxiety lowers the perceptual threshold.",
    thinkOf: [
      "Atrial fibrillation / flutter",
      "Paroxysmal SVT",
      "Premature beats (PVCs, PACs)",
      "Hyperthyroidism",
      "Anxiety / panic disorder",
      "Anemia",
      "Caffeine, stimulants, or sympathomimetics",
      "Structural heart disease (mitral valve prolapse, HOCM)",
      "Pheochromocytoma",
    ],
    pairWith: [
      "Syncope or presyncope → malignant arrhythmia",
      "Exertional dyspnea → heart failure or ischemia",
      "Heat intolerance, weight loss, tremor → hyperthyroidism",
      "Chest pain → ischemia or pericarditis",
      "Peds: supraventricular tachycardia — narrow-complex tachycardia in infant with irritability or poor feeding; history of abrupt rate change is classic",
    ],
    distinguishFrom: [
      "Chest pain without rhythm awareness → angina, not primary palpitations",
      "Presyncope without racing heartbeat → orthostatic or vasovagal",
      "Physiologic sinus tachycardia with fever, pain, or exercise — expected, not pathologic palpitations",
    ],
  },
  {
    id: "syncope",
    name: "Syncope",
    etymology: "Greek synkope = cutting short",
    aliases: ["syncope"],
    definition:
      "Transient loss of consciousness due to global cerebral hypoperfusion, with rapid spontaneous recovery.",
    mechanism:
      "A sudden drop in cardiac output or systemic vascular resistance reduces cerebral blood flow below the level needed to maintain awareness.",
    thinkOf: [
      "Vasovagal (neurally mediated)",
      "Orthostatic hypotension",
      "Cardiac arrhythmia",
      "Aortic stenosis",
      "Pulmonary embolism",
      "Subclavian steal",
    ],
    pairWith: [
      "Exertional → aortic stenosis or HOCM",
      "Palpitations or known heart disease → arrhythmia",
      "Prolonged standing, prodrome → vasovagal",
      "Positional change, antihypertensives → orthostatic",
      "Chest pain, dyspnea, hypoxia → PE",
    ],
    distinguishFrom: [
      "Presyncope — same mechanism, no complete LOC",
      "Seizure — postictal state, tongue biting, prolonged confusion",
      "Hypoglycemia — diaphoresis, responds to glucose",
    ],
  },
  {
    id: "seizure",
    name: "Seizure",
    etymology: "Latin sacire = to take hold of (seize)",
    aliases: [
      "seizure",
      "seizures",
      "convulsion",
      "convulsions",
      "fit",
      "fits",
      "epileptic seizure",
      "epileptic seizures",
    ],
    definition:
      "Transient episode of abnormal, excessive synchronous neuronal activity in the brain causing altered behavior, sensation, movement, or consciousness.",
    mechanism:
      "Imbalance between excitation (glutamate) and inhibition (GABA) → hypersynchronous cortical or subcortical discharge; may be provoked by metabolic insult, structural lesion, genetic channelopathy, or withdrawal from CNS depressants.",
    thinkOf: [
      "Epilepsy (recurrent unprovoked seizures)",
      "Hypoglycemia",
      "Hyponatremia / electrolyte disturbance",
      "Alcohol or benzodiazepine withdrawal",
      "Brain tumor or stroke",
      "Meningitis / encephalitis",
      "Eclampsia (preeclampsia with seizures)",
      "Hyperammonemia (urea cycle defects, MSUD, PKU)",
      "Febrile seizure (children)",
    ],
    pairWith: [
      "Postictal confusion + tongue biting → generalized tonic-clonic seizure",
      "3-Hz spike-and-wave + brief staring → absence seizure",
      "Focal motor activity with preserved awareness → focal aware seizure",
      "Fever in child 6 mo–5 yr → febrile seizure",
      "Pregnancy + hypertension + hyperreflexia → eclampsia",
      "Sweet urine odor + lethargy in neonate → maple syrup urine disease",
      "Musty odor + fair hair + developmental delay → phenylketonuria",
      "Alcohol cessation + tremor + agitation → withdrawal seizure risk",
    ],
    distinguishFrom: [
      "Syncope — brief LOC, rapid recovery, no postictal confusion or tongue biting",
      "Psychogenic nonepileptic events — waxing/waning motor activity, eyes closed during shaking",
      "Tremor or chorea — rhythmic or flowing movement without loss of awareness",
      "Migraine aura — positive visual symptoms, no motor convulsion",
    ],
    pediatrics:
      "Febrile seizures (6 months–5 years) are usually benign generalized events with brief postictal sleepiness; complex febrile seizures (focal, >15 min, recurrent in 24 h) warrant closer evaluation. Neonatal seizures suggest hypoxic-ischemic injury, infection, metabolic disease (hypoglycemia, MSUD, PKU), or structural malformation.",
  },
  {
    id: "presyncope",
    name: "Presyncope",
    etymology: "pre- = before + syncope = fainting",
    aliases: ["presyncope", "pre-syncope"],
    definition:
      "Sensation of imminent faint (lightheadedness, weakness, visual changes) without full loss of consciousness.",
    mechanism:
      "Same cerebral hypoperfusion as syncope, but perfusion recovers before consciousness is fully lost.",
    thinkOf: [
      "Vasovagal",
      "Orthostatic hypotension",
      "Arrhythmia",
      "Volume depletion",
      "Carotid sinus hypersensitivity",
    ],
    pairWith: [
      "Medications (antihypertensives, diuretics)",
      "Dehydration, bleeding",
      "Palpitations → arrhythmia (structural heart disease, electrolyte abnormality, or toxic/metabolic cause)",
      "Positional symptoms → orthostatic vitals",
    ],
    distinguishFrom: [
      "Syncope — complete LOC",
      "Vertigo — spinning sensation, usually inner ear",
      "Anxiety / hyperventilation — paresthesias, situational",
    ],
  },
  {
    id: "fever",
    name: "Fever",
    etymology: "Latin febris = fever",
    aliases: ["fever", "febrile", "pyrexia"],
    definition:
      "Elevation of body temperature above normal, usually ≥38°C (100.4°F), reflecting a shift in the hypothalamic set point.",
    mechanism:
      "Pyrogens (endogenous IL-1, IL-6, TNF from macrophages or exogenous LPS) raise the hypothalamic thermostat → prostaglandin E₂-mediated heat conservation and shivering.",
    thinkOf: [
      "Bacterial infection",
      "Viral infection",
      "Abscess / occult infection",
      "Malignancy (lymphoma)",
      "Autoimmune / inflammatory disease",
      "Drug fever",
    ],
    pairWith: [
      "Rigors, focal symptoms → bacteremia or localized infection",
      "Night sweats, weight loss → TB or lymphoma",
      "Rash, arthritis → viral or autoimmune",
      "Recent travel or exposure → endemic infection",
      "Peds: fever in neonate (<28 days) — full sepsis workup; low threshold for serious bacterial infection in infants",
    ],
    distinguishFrom: [
      "Hyperthermia — exogenous heat stroke, set point normal",
      "Factitious fever — rare, inconsistent readings",
      "Fever of unknown origin — >3 weeks, diagnosis elusive after workup",
    ],
  },
  {
    id: "night-sweats",
    name: "Night Sweats",
    etymology: "Old English niht = night + swat = perspiration",
    aliases: [
      "night sweats",
      "nocturnal sweats",
      "drenching night sweats",
      "nighttime diaphoresis",
    ],
    definition:
      "Recurrent, often drenching sweating during sleep; a constitutional symptom when not explained by room temperature or bedding.",
    mechanism:
      "Cytokine-driven changes in hypothalamic thermoregulation or autonomic activation cause sweating as the body dissipates heat during sleep.",
    thinkOf: [
      "Tuberculosis",
      "Lymphoma (B symptom)",
      "HIV or chronic infection",
      "Infective endocarditis",
      "Hyperthyroidism",
      "Menopause / vasomotor symptoms",
    ],
    pairWith: [
      "Fever + weight loss + cough/hemoptysis → tuberculosis",
      "Painless lymphadenopathy + weight loss → lymphoma",
      "Murmur + embolic findings → infective endocarditis",
      "Heat intolerance + tremor + weight loss → hyperthyroidism",
    ],
    distinguishFrom: [
      "Simple overheating during sleep — environmental trigger, no systemic features",
      "Hot flashes — brief vasomotor episodes, often perimenopause/menopause",
      "Diaphoresis with acute chest pain — sympathetic response to MI/shock, not chronic night sweats",
    ],
    pediatrics:
      "Persistent night sweats with fever, weight loss, cough, or lymphadenopathy in a child should raise concern for TB, lymphoma, or chronic infection; isolated sweating can be benign.",
  },
  {
    id: "weight-loss",
    name: "Weight Loss",
    etymology: "Old English gewiht = heaviness + los = loss/destruction",
    aliases: [
      "weight loss",
      "unintentional weight loss",
      "unexplained weight loss",
      "loss of weight",
      "cachexia",
    ],
    definition:
      "Decrease in body weight, especially clinically significant when unintentional or paired with systemic symptoms.",
    mechanism:
      "Reduced intake, malabsorption, increased metabolic demand, catabolic cytokines, or endocrine excess can shift energy balance negative.",
    thinkOf: [
      "Malignancy",
      "Tuberculosis or HIV",
      "Hyperthyroidism",
      "Type 1 diabetes mellitus",
      "Addison disease",
      "Malabsorption (celiac disease, pancreatic insufficiency)",
      "Inflammatory bowel disease",
    ],
    pairWith: [
      "Night sweats + fever → TB or lymphoma",
      "Polyuria/polydipsia + ketones → new-onset type 1 diabetes",
      "Heat intolerance + tremor → hyperthyroidism",
      "Hyperpigmentation + hypotension → Addison disease",
      "Chronic diarrhea + bloating → malabsorption",
    ],
    distinguishFrom: [
      "Cachexia — inflammatory/catabolic wasting, often malignancy or chronic disease",
      "Dehydration — acute water loss rather than tissue mass loss",
      "Intentional dieting or exercise-related weight loss — expected cause and trajectory",
    ],
    pediatrics:
      "In children, weight loss or poor weight gain suggests failure to thrive, malabsorption (celiac/CF), chronic infection, malignancy, or new-onset type 1 diabetes when paired with polyuria/polydipsia.",
  },
  {
    id: "headache",
    name: "Headache",
    etymology: "head + ache = pain",
    aliases: [
      "headache",
      "head pain",
      "severe headache",
      "worst headache of life",
    ],
    definition:
      "Pain in the head or neck region; may be primary (migraine, tension) or secondary to underlying pathology.",
    mechanism:
      "Activation of pain-sensitive structures (meninges, vessels, cranial nerves) via inflammation, traction, vasodilation, or muscle tension generates headache.",
    thinkOf: [
      "Migraine",
      "Tension-type headache",
      "Subarachnoid hemorrhage",
      "Meningitis / encephalitis",
      "Giant cell arteritis",
      "Idiopathic intracranial hypertension",
      "Brain tumor",
    ],
    pairWith: [
      "Thunderclap onset → subarachnoid hemorrhage until proven otherwise",
      "Fever, neck stiffness, photophobia → meningitis",
      "Age >50, jaw claudication, vision changes → giant cell arteritis",
      "Papilledema, obese woman → IIH",
      "Peds: morning headache with vomiting → ↑ ICP (tumor, hydrocephalus)",
    ],
    distinguishFrom: [
      "Sinus headache — facial pressure, purulent discharge",
      "Cluster headache — unilateral, periorbital, autonomic symptoms",
      "Cervicogenic — neck pain with occipital radiation",
    ],
  },
  {
    id: "cyanosis",
    name: "Cyanosis",
    etymology: "Greek kyanos = dark blue + -osis = condition",
    aliases: [
      "cyanosis",
      "cyanotic",
      "central cyanosis",
      "peripheral cyanosis",
      "cyanotic heart disease",
      "cyanotic spell",
      "blue lips",
      "bluish lips",
      "lips turn blue",
      "lips turning blue",
      "blue discoloration of lips",
    ],
    definition:
      "Bluish discoloration of skin or mucous membranes from increased deoxygenated hemoglobin in capillaries; a cyanotic patient has clinically apparent cyanosis.",
    mechanism:
      "Visible when reduced (deoxygenated) Hb ≥ ~5 g/dL in capillaries; reflects hypoxemia, right-to-left shunting, poor perfusion, or abnormal hemoglobin (methemoglobin, sulfhemoglobin).",
    thinkOf: [
      "Cyanotic congenital heart disease (tetralogy of Fallot, TGA, truncus arteriosus, tricuspid atresia)",
      "Infant heart failure or critical CHD (poor feeding, tachypnea, diaphoresis with feeds)",
      "Right-to-left shunt with Eisenmenger syndrome",
      "Severe lung disease (COPD, ARDS)",
      "Pulmonary embolism",
      "Methemoglobinemia",
      "Cold exposure / peripheral vasoconstriction",
    ],
    pairWith: [
      "Blue lips or tongue → central cyanosis (not benign acrocyanosis of hands/feet alone)",
      "Clubbing → chronic hypoxemia (CF, cyanotic congenital heart disease)",
      "Polycythemia → chronic hypoxic drive",
      "Chocolate-colored blood → methemoglobinemia",
      "Differential cyanosis → PDA with R→L shunt (lower body cyanotic, upper body pink)",
      "Hyperoxia test: PaO₂ fails to rise with 100% O₂ → cardiac shunt (vs lung disease)",
      "Peds: infant with feeding difficulty, diaphoresis, or tiring with feeds + blue lips → congenital heart disease until proven otherwise",
      "Peds: cyanotic spell in tetralogy of Fallot — squatting ↑ SVR, ↓ R→L shunt",
    ],
    distinguishFrom: [
      "Central cyanosis — lips/tongue (hypoxemia, shunt, or abnormal Hb)",
      "Peripheral cyanosis — cool extremities (low flow; may occur without severe hypoxemia)",
      "Acrocyanosis of newborn — benign peripheral cyanosis of hands/feet",
      "Acyanotic congenital heart disease — left-to-right shunt (VSD, ASD, PDA) without resting cyanosis",
    ],
  },
  {
    id: "hypoxemia",
    name: "Hypoxemia",
    etymology: "Greek hypo = low + oxygen + -emia = blood condition",
    aliases: [
      "hypoxemia",
      "hypoxaemia",
      "low oxygen saturation",
      "decreased pao2",
    ],
    definition:
      "Low partial pressure of oxygen in arterial blood (PaO₂), leading to tissue hypoxia and, when severe, central cyanosis.",
    mechanism:
      "↓ alveolar oxygenation (V/Q mismatch, shunt, hypoventilation), diffusion limitation, or low inspired O₂ → ↓ PaO₂; fixed anatomic shunts (e.g., ToF) cause hypoxemia refractory to supplemental O₂ alone.",
    thinkOf: [
      "Right-to-left shunt (tetralogy of Fallot, Eisenmenger)",
      "Pulmonary embolism, pneumonia, ARDS",
      "COPD, hypoventilation, high altitude",
      "Methemoglobinemia (normal PaO₂ but low O₂ carrying capacity)",
    ],
    pairWith: [
      "Cyanosis → significant hypoxemia or abnormal hemoglobin",
      "Hypercyanotic spell in infant → ToF with RVOT spasm",
      "PaO₂ fails to rise with 100% O₂ → intracardiac shunt",
      "Polycythemia → chronic hypoxemia compensation",
      "Peds: feeding, crying, or agitation worsens hypoxemia in ToF by ↑ R→L shunt",
    ],
    distinguishFrom: [
      "Anemia — low Hb but normal PaO₂; may cause tissue hypoxia without cyanosis until severe",
      "Peripheral vasoconstriction — cold extremities without true arterial hypoxemia",
      "Pulse oximetry artifact or methemoglobin — verify with ABG/co-oximetry when discordant",
    ],
  },
  {
    id: "clubbing",
    name: "Clubbing",
    etymology: "club = rounded enlargement",
    aliases: ["clubbing", "digital clubbing"],
    definition:
      "Bulbous enlargement of the distal digits with loss of the normal nail-bed angle.",
    mechanism:
      "Chronic platelet activation and growth factor release (often from intrapulmonary shunting) stimulate connective tissue proliferation at the nail bed.",
    thinkOf: [
      "Cystic fibrosis",
      "Bronchiectasis",
      "Lung cancer (non-small cell)",
      "Idiopathic pulmonary fibrosis",
      "Cyanotic congenital heart disease",
      "Inflammatory bowel disease",
    ],
    pairWith: [
      "Cyanosis → congenital heart disease",
      "Chronic cough, sputum → bronchiectasis / CF",
      "Weight loss, smoking → lung malignancy",
      "GI symptoms → IBD-associated clubbing",
    ],
    distinguishFrom: [
      "Nail hypertrophy without loss of Lovibond angle → pseudo-clubbing",
      "Acute clubbing is rare — think chronic process",
    ],
  },
  {
    id: "jaundice",
    name: "Jaundice",
    etymology: "French jaune = yellow",
    aliases: ["jaundice"],
    definition:
      "Yellow discoloration of skin and sclera from accumulation of bilirubin.",
    mechanism:
      "Hyperbilirubinemia deposits in tissues; may arise from increased production, hepatocellular dysfunction, or biliary obstruction.",
    thinkOf: [
      "Hemolysis (unconjugated)",
      "Hepatitis, cirrhosis (mixed/hepatocellular)",
      "Choledocholithiasis, pancreatic cancer (conjugated / obstructive)",
      "Gilbert syndrome (mild unconjugated)",
    ],
    pairWith: [
      "Dark urine, pale stools → obstructive pattern",
      "Pruritus → cholestasis",
      "RUQ pain, fever, hypotension → cholangitis",
      "AST/ALT >> alk phos → hepatocellular",
      "Alk phos ↑, GGT ↑ → cholestatic",
    ],
    distinguishFrom: [
      "Carotenemia — orange skin, sclera spared",
      "Prehepatic vs hepatic vs posthepatic — use fractionated bilirubin",
    ],
  },
  {
    id: "pruritus",
    name: "Pruritus",
    etymology: "Latin prurire = itch",
    aliases: ["pruritus"],
    definition:
      "An unpleasant sensation provoking the urge to scratch, without primary skin lesions required.",
    mechanism:
      "Mediated by histamine, bile salts, opioids, and other pruritogens; cholestatic bile salt deposition is a classic cause of generalized itch.",
    thinkOf: [
      "Cholestasis (biliary obstruction, primary biliary cholangitis)",
      "Chronic kidney disease / uremia",
      "Iron deficiency",
      "Polycythemia vera",
      "Scabies, atopic dermatitis",
      "Medications (opioids)",
    ],
    pairWith: [
      "Jaundice → cholestatic liver disease",
      "Burrowing tracks → scabies",
      "Aquagenic itch after hot shower → polycythemia vera",
      "Elevated creatinine → uremic pruritus",
      "Excoriated skin → itch-scratch cycle (atopic dermatitis, scabies, lichen simplex)",
    ],
    distinguishFrom: [
      "Localized itch with rash → primary dermatologic condition",
      "Generalized itch without rash → systemic cause (cholestasis, CKD, hematologic)",
      "Excoriated — visible scratch damage; pruritus is the sensation driving it",
    ],
  },
  {
    id: "hemoptysis",
    name: "Hemoptysis",
    etymology: "Greek haima = blood + ptysis = spitting",
    aliases: ["hemoptysis"],
    definition:
      "Coughing up blood or blood-streaked sputum originating from the lower respiratory tract.",
    mechanism:
      "Bleeding from bronchial or pulmonary vasculature, often from infection, malignancy, or elevated pulmonary pressures eroding airways.",
    thinkOf: [
      "Bronchiectasis",
      "Tuberculosis",
      "Lung cancer",
      "Pulmonary embolism / infarction",
      "Mitral stenosis (pulmonary venous hypertension)",
      "Goodpasture / granulomatosis with polyangiitis",
    ],
    pairWith: [
      "Fever, night sweats, weight loss → TB or malignancy",
      "Recurrent infections, copious sputum → bronchiectasis / CF",
      "Hematuria → pulmonary-renal syndrome",
      "Diastolic rumble, AF → mitral stenosis",
    ],
    distinguishFrom: [
      "Hematemesis — coffee-ground or acidic, history of vomiting",
      "Epistaxis with posterior drip — bleeding from nose",
      "True hemoptysis is frothy and bright red",
    ],
  },
  {
    id: "melena",
    name: "Melena",
    etymology: "Greek melas = black",
    aliases: ["melena"],
    definition:
      "Black, tarry stools from digested blood, typically indicating upper GI bleeding.",
    mechanism:
      "Hemoglobin is broken down by gastric acid and intestinal bacteria into hematin, producing dark, sticky, malodorous stool.",
    thinkOf: [
      "Peptic ulcer disease",
      "Esophageal varices",
      "Mallory-Weiss tear",
      "Gastritis (NSAIDs, alcohol)",
      "Malignancy (gastric, esophageal)",
    ],
    pairWith: [
      "Hematemesis → active upper GI bleed",
      "NSAID or alcohol use → PUD / gastritis",
      "Cirrhosis, jaundice → varices",
      "Lightheadedness, tachycardia → hemodynamic instability",
    ],
    distinguishFrom: [
      "Hematochezia — bright red blood per rectum, often lower GI",
      "Iron supplements or bismuth — black stool but not tarry / malodorous",
    ],
  },
  {
    id: "hematochezia",
    name: "Hematochezia",
    etymology: "Greek haima = blood + chezein = defecate",
    aliases: ["hematochezia"],
    definition:
      "Passage of bright red blood per rectum, usually from lower GI bleeding but can occur with rapid upper GI bleeding.",
    mechanism:
      "Fresh blood passes through the colon when bleeding is distal (or massive and rapid from proximal sources).",
    thinkOf: [
      "Hemorrhoids",
      "Anal fissure",
      "Diverticulosis",
      "Ischemic colitis",
      "Inflammatory bowel disease",
      "Colorectal cancer",
      "Angiodysplasia",
    ],
    pairWith: [
      "Painful defecation, tear at anus → fissure",
      "Painless bleeding → hemorrhoids or diverticulosis",
      "Age >50, weight loss → colorectal cancer",
      "Hypotension with maroon stools → brisk upper GI bleed",
    ],
    distinguishFrom: [
      "Melena — black, tarry upper GI bleed",
      "Hematuria — blood from urinary tract",
    ],
  },
  {
    id: "hematuria",
    name: "Hematuria",
    etymology: "Greek haima = blood + ouron = urine",
    aliases: ["hematuria", "blood in urine", "gross hematuria"],
    definition:
      "Presence of red blood cells in the urine, visible (gross) or detected on dipstick/microscopy.",
    mechanism:
      "Bleeding from anywhere in the urinary tract — glomerulus (inflammation, immune deposition), tubules, or urothelium (stones, infection, malignancy).",
    thinkOf: [
      "Nephrolithiasis",
      "UTI / pyelonephritis",
      "Glomerulonephritis (IgA, post-strep)",
      "Bladder or renal cell carcinoma",
      "Trauma / catheterization",
      "Anticoagulation",
    ],
    pairWith: [
      "Dysuria, frequency → UTI",
      "Colicky flank pain → stone",
      "RBC casts, proteinuria → glomerulonephritis",
      "Hemoptysis → pulmonary-renal syndrome (Goodpasture, GPA)",
      "Peds: gross hematuria after URI → IgA nephropathy; tea-colored urine with periorbital edema → post-strep GN",
    ],
    distinguishFrom: [
      "Hemoglobinuria — dipstick positive, no RBCs on microscopy (hemolysis)",
      "Myoglobinuria — brown urine after rhabdomyolysis",
      "Menstrual contamination — consider in women",
    ],
  },
  {
    id: "painless-hematuria",
    name: "Painless Hematuria",
    etymology: "Latin poena = penalty/pain + Greek haima = blood + ouron = urine",
    aliases: [
      "painless hematuria",
      "painless bloody urine",
      "painless blood in urine",
      "gross painless hematuria",
      "asymptomatic hematuria",
    ],
    definition:
      "Visible or microscopic blood in urine without associated dysuria, flank pain, or suprapubic discomfort — a high-yield red flag for urothelial malignancy.",
    mechanism:
      "Neoplastic or vascular bleeding from renal pelvis, ureter, bladder, or urethra urothelium without inflammatory pain fibers prominently activated; contrast with calculi or infection where distension/inflammation causes pain.",
    thinkOf: [
      "Bladder cancer (urothelial carcinoma)",
      "Renal cell carcinoma",
      "Upper tract urothelial carcinoma",
      "Prostate adenocarcinoma (less classic but possible)",
      "Anticoagulation or benign vascular lesions",
      "IgA nephropathy (may be painless gross hematuria after URI)",
    ],
    pairWith: [
      "Older smoker + gross hematuria → bladder cancer until proven otherwise",
      "Flank mass + hematuria + constitutional symptoms → renal cell carcinoma",
      "Schistosomiasis exposure → squamous bladder cancer",
      "Microscopic hematuria in older adult → urologic malignancy workup",
      "Peds: painless gross hematuria after URI → IgA nephropathy; still evaluate for UTI and stones",
    ],
    distinguishFrom: [
      "Painful hematuria — stones, UTI, prostatitis more typical",
      "Hemoglobinuria — no RBCs on microscopy",
      "Menstrual contamination — external blood, not urologic hematuria",
      "Glomerular hematuria with RBC casts — nephritic syndrome, may lack dysuria",
    ],
    pediatrics:
      "Painless gross hematuria after viral URI suggests IgA nephropathy in adolescents; bladder rhabdomyosarcoma is rare pediatric cause of painless hematuria.",
  },
  {
    id: "painful-hematuria",
    name: "Painful Hematuria",
    etymology: "Latin poena = penalty/pain + Greek haima = blood + ouron = urine",
    aliases: [
      "painful hematuria",
      "painful bloody urine",
      "painful blood in urine",
      "dysuria with hematuria",
      "hematuria with dysuria",
    ],
    definition:
      "Blood in the urine accompanied by pain — dysuria, suprapubic discomfort, flank colic, or pelvic/perineal pain — suggesting inflammatory, infectious, or obstructive lower/upper urinary tract disease.",
    mechanism:
      "Mucosal inflammation (infection), bladder/ureteral distension (calculus), or prostate inflammation triggers afferent pain fibers alongside bleeding from damaged urothelium or glomeruli.",
    thinkOf: [
      "Cystitis / urinary tract infection",
      "Acute prostatitis",
      "Nephrolithiasis (colicky flank pain + hematuria)",
      "Pyelonephritis",
      "Urethritis / STD (gonorrhea, chlamydia)",
      "Bladder stone",
    ],
    pairWith: [
      "Dysuria + frequency + suprapubic pain → acute cystitis",
      "Fever + flank pain + CVA tenderness + WBC casts → pyelonephritis",
      "Colicky flank pain radiating to groin → nephrolithiasis",
      "Fever + tender boggy prostate + perineal pain → acute prostatitis",
      "Urethral discharge + dysuria → urethritis (GC/chlamydia)",
    ],
    distinguishFrom: [
      "Painless hematuria — classic for bladder cancer in older smoker",
      "Glomerulonephritis — RBC casts and hypertension; dysuria absent",
      "Renal cell carcinoma — classically painless hematuria ± flank mass",
      "Menstrual blood contamination — no inflammatory urinary symptoms",
    ],
    pediatrics:
      "Febrile UTI with hematuria in children warrants upper tract evaluation; stones and post-strep glomerulonephritis are additional painful or symptomatic hematuria causes.",
  },
  {
    id: "flank-pain",
    name: "Flank Pain",
    etymology: "Old English flanc = side of body + Latin poena = penalty/pain",
    aliases: [
      "flank pain",
      "flank pains",
      "renal colic",
      "loin pain",
      "costovertebral pain",
      "cva pain",
      "costovertebral angle pain",
    ],
    definition:
      "Pain localized to the side of the trunk between the lower ribs and iliac crest, often reflecting renal, ureteral, or retroperitoneal pathology.",
    mechanism:
      "Distension or inflammation of the renal capsule, ureteral spasm from obstructing calculi, or infection of the renal parenchyma stimulates visceral and somatic afferents; ureteral obstruction causes severe colicky pain from smooth muscle spasm.",
    thinkOf: [
      "Nephrolithiasis (renal stones)",
      "Pyelonephritis",
      "Renal cell carcinoma",
      "Perinephric abscess",
      "Renal infarction",
      "Abdominal aortic aneurysm (rupture or expansion)",
      "Musculoskeletal strain",
      "Herpes zoster (dermatomal)",
    ],
    pairWith: [
      "Colicky pain radiating to groin + hematuria → nephrolithiasis",
      "Painless hematuria + palpable flank mass → renal cell carcinoma",
      "Fever + CVA tenderness + WBC casts → pyelonephritis",
      "Sudden tearing back pain + hypotension → ruptured AAA",
      "Dysuria without fever → cystitis (suprapubic, not classic flank)",
      "Restlessness, cannot find comfortable position → renal colic from stone",
      "Peds: UTI with fever in young child — always consider pyelonephritis",
    ],
    distinguishFrom: [
      "Suprapubic pain — bladder/lower UTI (cystitis), not upper tract",
      "Epigastric/RUQ pain — biliary or pancreatic disease",
      "Pleuritic chest pain — pulmonary or pleural origin",
      "Mechanical back pain — paraspinal, worsens with movement, no fever or hematuria",
    ],
    pediatrics:
      "Children may present with nonspecific abdominal pain and fever in pyelonephritis; congenital UPJ obstruction and metabolic stone disease (cystinuria) are pediatric differentials for recurrent flank pain.",
  },
  {
    id: "dysmorphic-red-blood-cells",
    name: "Dysmorphic Red Blood Cells",
    etymology: "Greek dys = abnormal + morphe = form + Old English blod = blood",
    aliases: [
      "dysmorphic red blood cells",
      "dysmorphic rbcs",
      "dysmorphic rbc",
      "acanthocytes in urine",
      "urinary acanthocytes",
    ],
    definition:
      "Abnormally shaped red blood cells seen on urine microscopy, classically indicating glomerular hematuria.",
    mechanism:
      "RBCs are deformed while crossing an inflamed or damaged glomerular basement membrane and then exposed to tubular osmotic stress.",
    thinkOf: [
      "Glomerulonephritis",
      "IgA nephropathy",
      "Post-streptococcal glomerulonephritis",
      "Lupus nephritis",
      "Alport syndrome",
      "Goodpasture syndrome / anti-GBM disease",
    ],
    pairWith: [
      "RBC casts + proteinuria → nephritic syndrome",
      "Hemoptysis → pulmonary-renal syndrome (Goodpasture, GPA)",
      "Recent URI + hematuria → IgA nephropathy",
      "Edema + hypertension → glomerulonephritis",
    ],
    distinguishFrom: [
      "Isomorphic RBCs — lower urinary tract bleeding, stones, tumor, or UTI",
      "Hemoglobinuria — dipstick blood positive without RBCs",
      "Myoglobinuria — dipstick blood positive after muscle injury without RBCs",
    ],
    pediatrics:
      "Children with dysmorphic RBCs plus edema, hypertension, or recent URI/pharyngitis should raise concern for nephritic syndromes such as IgA nephropathy or post-streptococcal GN.",
  },
  {
    id: "proteinuria",
    name: "Proteinuria",
    etymology: "Greek proteios = primary + ouron = urine + -ia = condition",
    aliases: [
      "proteinuria",
      "urine protein",
      "protein in urine",
      "albuminuria",
      "microalbuminuria",
      "heavy proteinuria",
    ],
    definition:
      "Excess protein in urine; heavy proteinuria (>3.5 g/day) is the defining renal finding of nephrotic syndrome.",
    mechanism:
      "Podocyte slit diaphragm injury or glomerular basement membrane damage increases filtration of albumin and other plasma proteins.",
    thinkOf: [
      "Nephrotic syndrome (minimal change disease, FSGS, membranous nephropathy)",
      "Diabetic nephropathy",
      "Lupus nephritis",
      "Glomerulonephritis",
      "Multiple myeloma light chains",
      "Hypertensive nephrosclerosis",
    ],
    pairWith: [
      "Edema + hypoalbuminemia + hyperlipidemia → nephrotic syndrome",
      "Hematuria + RBC casts → nephritic syndrome / glomerulonephritis",
      "Diabetes + microalbuminuria → early diabetic nephropathy",
      "Frothy urine → albumin-rich urine",
    ],
    distinguishFrom: [
      "Albuminuria — albumin-specific proteinuria, common in glomerular disease",
      "Bence Jones proteinuria — light chains; dipstick may miss because it detects albumin best",
      "Transient proteinuria — fever, exercise, or orthostatic proteinuria without persistent renal disease",
    ],
    pediatrics:
      "Minimal change disease is the classic pediatric nephrotic syndrome: periorbital edema, selective albuminuria, and response to steroids.",
  },
  {
    id: "dysuria",
    name: "Dysuria",
    etymology: "Greek dys = painful/difficult + ouron = urine",
    aliases: ["dysuria", "dysurias", "painful urination", "burning with urination", "burning on urination", "pain on urination"],
    definition: "Painful or burning sensation during urination.",
    mechanism:
      "Inflammation of the urethra or bladder mucosa (infection, chemical irritation, or stones) lowers the threshold for pain with urine flow.",
    thinkOf: [
      "Cystitis (UTI)",
      "Urethritis (E. coli, Chlamydia, gonorrhea)",
      "Vaginitis (irritative symptoms)",
      "Urinary tract stones",
      "Interstitial cystitis",
    ],
    pairWith: [
      "Frequency, urgency, suprapubic pain → cystitis",
      "Discharge, sexual exposure → urethritis / STI",
      "Flank pain, fever → pyelonephritis",
      "Hematuria → stone or UTI",
      "Peds: fever without source in young child — consider UTI; circumcision status and voiding dysfunction matter in boys",
    ],
    distinguishFrom: [
      "Urinary frequency without pain → polyuria (DM, DI)",
      "Pelvic pain without dysuria → gynecologic cause",
      "Asymptomatic bacteriuria — positive culture without symptoms",
    ],
    pediatrics:
      "Febrile infant without source — consider UTI; dysuria may be absent in young children (irritability, poor feeding). Circumcision status and voiding dysfunction matter in boys.",
  },
  {
    id: "nocturia",
    name: "Nocturia",
    etymology: "Latin nox = night + Greek ouron = urine + -ia = condition",
    aliases: [
      "nocturia",
      "nocturnal urination",
      "nighttime urination",
      "waking to urinate at night",
    ],
    definition:
      "Awakening from sleep to void urine one or more times per night — a symptom of increased nighttime urine production, reduced bladder capacity, or incomplete emptying.",
    mechanism:
      "Nocturnal polyuria (↓ ADH effect at night, heart failure redistribution, diabetes), bladder outlet obstruction (BPH), overactive bladder, or excessive evening fluid intake increases nighttime voiding; edema mobilization when recumbent in heart failure also increases nocturnal urine output.",
    thinkOf: [
      "Benign prostatic hyperplasia — outlet obstruction, incomplete emptying",
      "Heart failure — nocturnal fluid mobilization from recumbency",
      "Diabetes mellitus — osmotic diuresis (may also have polyuria daytime)",
      "Diabetes insipidus — large volumes",
      "Chronic kidney disease",
      "Overactive bladder / detrusor instability",
      "Excessive evening caffeine or fluid intake",
    ],
    pairWith: [
      "Weak stream, hesitancy, older man → BPH",
      "Orthopnea, PND, edema → heart failure",
      "Polyuria, polydipsia, hyperglycemia → diabetes mellitus",
      "Large volumes, dilute urine → diabetes insipidus",
      "Peds: nocturnal enuresis in children is distinct; evaluate for UTI, constipation, DM if atypical",
    ],
    distinguishFrom: [
      "Polyuria — increased 24-hour urine volume; nocturia is nighttime-specific symptom",
      "Urinary frequency — daytime voiding without necessarily waking from sleep",
      "Nocturnal enuresis (pediatrics) — involuntary voiding during sleep in children without full awakening",
    ],
    pediatrics:
      "Primary nocturnal enuresis is common in children; isolated nocturia with large volumes or systemic symptoms warrants evaluation for diabetes or renal disease.",
  },
  {
    id: "polyuria-polydipsia",
    name: "Polyuria and Polydipsia",
    etymology: "Greek poly = much + ouron = urine + dipsa = thirst",
    aliases: [
      "polyuria",
      "polydipsia",
      "polyuria and polydipsia",
      "increased urination",
      "excessive thirst",
    ],
    definition:
      "Excessive urine output (>3 L/day) often accompanied by increased thirst and fluid intake.",
    mechanism:
      "Osmotic diuresis (hyperglycemia), impaired ADH action or secretion (DI), or primary polydipsia drives increased urine volume and compensatory thirst.",
    thinkOf: [
      "Diabetes mellitus (osmotic diuresis)",
      "Diabetes insipidus (central or nephrogenic)",
      "Primary polydipsia (psychogenic)",
      "Hypercalcemia",
      "Recovery phase of ATN",
    ],
    pairWith: [
      "Hyperglycemia, weight loss, ketones → DKA / new-onset DM",
      "Dilute urine with high serum osmolality → central DI",
      "Dilute urine with hypernatremia, lithium use → nephrogenic DI",
      "Confusion, long-term psych meds → primary polydipsia",
      "Peds: enuresis, nocturia, growth concerns — test glucose; infant with irritability and dehydration → consider DI",
    ],
    distinguishFrom: [
      "Urinary frequency with normal volume → cystitis, BPH",
      "Nocturia alone → BPH, heart failure, not necessarily polyuria",
      "Diuretic use — iatrogenic increased urine output",
    ],
  },
  {
    id: "watery-diarrhea",
    name: "Watery Diarrhea",
    etymology: "water-like + Greek dia = through + rhoia = flow",
    aliases: ["watery diarrhea"],
    definition:
      "Frequent loose stools with high water content, reflecting secretory or osmotic fluid loss into the bowel lumen.",
    mechanism:
      "Toxins, pathogens, or malabsorption disrupt normal intestinal absorption or stimulate secretion (e.g., ↑ cAMP in enterocytes) → large-volume stool losses.",
    thinkOf: [
      "Viral gastroenteritis (norovirus, rotavirus)",
      "Cholera (rice-water stools)",
      "Enterotoxigenic E. coli (traveler's diarrhea)",
      "C. difficile colitis",
      "Carcinoid syndrome, VIPoma (secretory)",
      "Lactose intolerance / osmotic diarrhea",
    ],
    pairWith: [
      "Vomiting, dehydration signs → acute gastroenteritis",
      "Recent antibiotics → C. difficile",
      "Travel history → enterotoxigenic E. coli, cholera",
      "Hypotension, tachycardia → severe volume depletion",
      "Peds: rotavirus, quick dehydration in infants — watch urine output and mental status",
    ],
    distinguishFrom: [
      "Bloody diarrhea — invasive or inflammatory colitis (Shigella, Campylobacter, IBD)",
      "Fatty/greasy stools — steatorrhea from malabsorption",
      "Constipation — obstipation with overflow incontinence",
    ],
  },
  {
    id: "nausea",
    name: "Nausea",
    etymology: "Greek nausia = seasickness",
    aliases: ["nausea", "nauseated"],
    definition:
      "Unpleasant sensation of needing to vomit, with or without actual emesis.",
    mechanism:
      "Activation of the vomiting center and chemoreceptor trigger zone by GI distention, toxins, vestibular input, or ↑ ICP produces the subjective urge to vomit.",
    thinkOf: [
      "Gastroenteritis",
      "Pregnancy (morning sickness)",
      "Medications (chemotherapy, opioids)",
      "Migraine",
      "Pancreatitis, cholecystitis",
      "DKA / uremia",
      "Increased intracranial pressure",
    ],
    pairWith: [
      "Vomiting → gastroenteritis, obstruction, ↑ ICP",
      "RUQ pain, fever → cholecystitis or hepatitis",
      "Epigastric pain radiating to back → pancreatitis",
      "Hyperglycemia, Kussmaul breathing → DKA",
      "Peds: bilious vomiting in neonate — surgical emergency (malrotation); cyclic vomiting may suggest metabolic disorder",
    ],
    distinguishFrom: [
      "Vomiting — active emesis has occurred",
      "Anorexia without nausea — systemic illness, depression",
      "Early satiety — gastric outlet obstruction or gastroparesis",
    ],
  },
  {
    id: "loss-of-appetite",
    name: "Loss of Appetite",
    etymology: "Old English los = deprivation + Latin appetitus = desire for food",
    aliases: [
      "loss of appetite",
      "decreased appetite",
      "reduced appetite",
      "poor appetite",
      "lack of appetite",
      "appetite loss",
    ],
    definition:
      "Reduced desire to eat without necessarily implying a psychiatric eating disorder; a nonspecific constitutional symptom of systemic illness, inflammation, or organ dysfunction.",
    mechanism:
      "Pro-inflammatory cytokines (IL-1, IL-6, TNF-α), hypothalamic dysregulation, elevated leptin or altered gut hormones, uremia, and cholestasis suppress appetite; malignancy and chronic infection drive cachexia pathways.",
    thinkOf: [
      "Malignancy (especially GI, lung, pancreatic)",
      "Chronic infection (TB, HIV)",
      "Heart failure, COPD, advanced liver or kidney disease",
      "Depression and other psychiatric illness",
      "Medications (chemotherapy, opioids, digoxin toxicity)",
      "Hypercalcemia, uremia, DKA",
      "Peptic ulcer disease, gastritis, early satiety from gastric cancer",
    ],
    pairWith: [
      "Weight loss + night sweats → malignancy or TB",
      "Nausea and vomiting → GI disease, uremia, ↑ ICP",
      "Fatigue + pallor → anemia or chronic illness",
      "Early satiety + epigastric pain → gastric outlet obstruction or cancer",
      "Fever + malaise → infection or inflammatory disease",
    ],
    distinguishFrom: [
      "Anorexia nervosa — psychiatric disorder with fear of weight gain, body image distortion, and low BMI",
      "Nausea — urge to vomit; may coexist but distinct sensation",
      "Early satiety — fullness after small meals; gastric outlet or gastroparesis",
      "Dysphagia — difficulty swallowing, not loss of desire to eat",
    ],
    pediatrics:
      "Infants and young children with poor feeding, lethargy, or failure to thrive need urgent evaluation for infection, congenital heart disease, metabolic disorders, and nonaccidental trauma.",
  },
  {
    id: "kussmaul-breathing",
    name: "Kussmaul Breathing",
    etymology: "eponym: Adolf Kussmaul + English breathing = respiration pattern",
    aliases: [
      "kussmaul breathing",
      "kussmaul respirations",
      "kussmaul respiration",
      "kussmaul breathing pattern",
      "deep rapid breathing",
      "acidotic breathing",
    ],
    definition:
      "Deep, rapid, labored respirations that increase minute ventilation to blow off CO₂ and compensate for metabolic acidosis.",
    mechanism:
      "↓ serum bicarbonate from metabolic acidosis stimulates central and peripheral chemoreceptors → ↑ tidal volume and respiratory rate → respiratory alkalosis partially compensates for metabolic acidosis (↓ PaCO₂).",
    thinkOf: [
      "Diabetic ketoacidosis",
      "Lactic acidosis (sepsis, shock)",
      "Uremia",
      "Toxic alcohol ingestion (ethylene glycol, methanol)",
      "Salicylate toxicity (mixed disorder but prominent respiratory compensation)",
      "Starvation ketoacidosis",
    ],
    pairWith: [
      "Hyperglycemia + ketones + nausea → DKA",
      "Hypotension + fever + ↑ lactate → septic shock with lactic acidosis",
      "Low HCO₃⁻ + ↑ anion gap → high-gap metabolic acidosis",
      "Fruity breath + polyuria → DKA",
      "Renal failure + uremic symptoms → uremic acidosis",
    ],
    distinguishFrom: [
      "Kussmaul sign — JVP rises with inspiration in constrictive pericarditis (not a breathing pattern)",
      "Tachypnea alone — rapid shallow breaths without deep compensatory hyperventilation",
      "Respiratory distress from hypoxemia — primary lung pathology, not acidosis compensation",
      "Cheyne-Stokes — cyclic apnea and hyperpnea from neurologic/cardiac causes",
      "Metabolic alkalosis — slow shallow breathing to retain CO₂",
    ],
    pediatrics:
      "DKA in children and adolescents classically presents with Kussmaul respirations; neonatal metabolic acidosis from inborn errors may cause rapid breathing — evaluate glucose and ammonia early.",
  },
  {
    id: "vomiting",
    name: "Vomiting",
    etymology: "Latin vomere = throw up",
    aliases: ["vomiting"],
    definition:
      "Forceful expulsion of gastric contents through the mouth due to coordinated contraction of the diaphragm and abdominal wall.",
    mechanism:
      "Triggered when the vomiting center (medulla) is activated by GI irritation, vestibular input, chemoreceptor trigger zone (bloodborne toxins, uremia), or increased intracranial pressure.",
    thinkOf: [
      "Gastroenteritis",
      "Bowel obstruction",
      "Pregnancy (hyperemesis gravidarum)",
      "Increased intracranial pressure",
      "DKA / uremia / drug toxicity (CTZ activation)",
      "Migraine, vestibular disorders",
    ],
    pairWith: [
      "Watery diarrhea → gastroenteritis",
      "Bilious emesis in neonate → malrotation/volvulus until proven otherwise (peds surgical emergency)",
      "Headache, papilledema → ↑ ICP",
      "Kussmaul respirations, hyperglycemia → DKA",
      "Projectile vomiting in infant → pyloric stenosis (peds)",
    ],
    distinguishFrom: [
      "Regurgitation — passive, effortless reflux",
      "Retching — unproductive vomiting effort",
      "Hematemesis — blood in vomitus (upper GI bleed)",
    ],
  },
  {
    id: "dry-mucous-membranes",
    name: "Dry Mucous Membranes",
    etymology: "dry = lacking moisture + Latin mucus = slime + Latin membrana = thin skin",
    aliases: ["dry mucous membranes", "dry mucosa"],
    definition:
      "Reduced moisture of oral and other mucosal surfaces, a clinical sign of hypovolemia or dehydration.",
    mechanism:
      "Total body water deficit reduces salivary flow and mucosal hydration; sympathetic activation during hypovolemia also diverts fluid from nonessential secretions.",
    thinkOf: [
      "Dehydration from diarrhea or vomiting",
      "Poor oral intake",
      "Diabetes mellitus (hyperglycemic osmotic diuresis)",
      "Fever / heat exposure",
      "Diuretic use",
    ],
    pairWith: [
      "Decreased skin turgor, tachycardia, hypotension → hypovolemia",
      "Polyuria, polydipsia → hyperglycemia",
      "Peds: same sign as adults but assess capillary refill, sunken fontanelle (infants), and lethargy — mucosa alone is insufficient",
    ],
    distinguishFrom: [
      "Xerostomia from anticholinergics or Sjögren syndrome — may occur without volume depletion",
      "Kussmaul breathing with dry mouth — DKA (dehydration plus acidosis)",
    ],
  },
  {
    id: "decreased-skin-turgor",
    name: "Decreased Skin Turgor",
    etymology: "made lower + Old Norse skinn = hide + Latin turgere = swell",
    aliases: [
      "decreased skin turgor",
      "poor skin turgor",
      "reduced skin turgor",
    ],
    definition:
      "Skin that tents or returns slowly to normal after being pinched, indicating reduced tissue turgor from interstitial/total body water loss.",
    mechanism:
      "Dehydration lowers interstitial and intracellular water, decreasing skin elasticity and prolonging recoil time after deformation.",
    thinkOf: [
      "Dehydration (GI losses, poor intake)",
      "Hypernatremia",
      "Diabetic ketoacidosis / HHS",
      "Burns (capillary leak and evaporative loss)",
    ],
    pairWith: [
      "Dry mucous membranes, tachycardia, orthostasis → hypovolemia",
      "Watery diarrhea and vomiting → GI fluid losses",
      "Peds: highly sensitive sign in infants/young children (skin tents for seconds); less reliable in elderly due to age-related loss of elasticity",
      "Peds: combine with sunken eyes/fontanelle, dry diapers, and irritability/lethargy",
    ],
    distinguishFrom: [
      "Edema — fluid overload, not dehydration",
      "Normal skin in obese or elderly patients — turgor testing less reliable",
      "Cutis laxa / Ehlers-Danlos — chronic poor elasticity unrelated to acute volume status",
    ],
  },
  {
    id: "hyperactive-bowel-sounds",
    name: "Hyperactive Bowel Sounds",
    etymology: "Greek hyper = excessive + active = doing + intestine + audible findings",
    aliases: ["hyperactive bowel sounds", "increased bowel sounds"],
    definition:
      "Loud, frequent bowel sounds on auscultation, reflecting increased peristaltic activity.",
    mechanism:
      "Irritation or distention of the bowel wall stimulates motility; early obstruction and gastroenteritis increase propagated contractions audible as hyperactive sounds.",
    thinkOf: [
      "Gastroenteritis / diarrhea",
      "Early small bowel obstruction",
      "Laxative use",
      "Malabsorption",
      "Subacute mesenteric ischemia (early hyperactive phase)",
    ],
    pairWith: [
      "Watery diarrhea, vomiting → infectious gastroenteritis",
      "Crampy abdominal pain, then obstipation → early obstruction",
      "Peds: intussusception may have early hyperactive sounds, then hypoactive/absent as ischemia progresses — don't be reassured by initial hyperactivity",
      "Absent bowel sounds later → ileus or late obstruction",
    ],
    distinguishFrom: [
      "Hypoactive or absent bowel sounds — ileus, peritonitis, late obstruction",
      "Normal bowel sounds — not hyperactive",
      'Borborygmi — very loud "stomach growling" without pathology',
    ],
  },
  {
    id: "decreased-bowel-sounds",
    name: "Decreased Bowel Sounds",
    etymology: "Latin de = down + creare = grow + intestine + audible findings",
    aliases: [
      "decreased bowel sounds",
      "decreased bowel sound",
      "hypoactive bowel sounds",
      "hypoactive bowel sound",
      "diminished bowel sounds",
      "diminished bowel sound",
      "reduced bowel sounds",
      "quiet bowel sounds",
    ],
    definition:
      "Infrequent or faint intestinal sounds on auscultation, reflecting reduced peristaltic activity.",
    mechanism:
      "↓ neuromuscular activity of bowel smooth muscle from ileus, peritonitis, late obstruction, opioid use, or postoperative paralytic ileus → fewer audible peristaltic waves.",
    thinkOf: [
      "Paralytic ileus (postoperative, electrolyte abnormality, sepsis)",
      "Diffuse peritonitis",
      "Late or complete bowel obstruction",
      "Opioid-induced decreased motility",
      "Mesenteric ischemia (late hypoactive phase)",
      "Severe pancreatitis",
    ],
    pairWith: [
      "Abdominal distension + obstipation + vomiting → ileus or obstruction",
      "Absent bowel sounds + rigid abdomen → peritonitis",
      "Postoperative day 1–3 quiet abdomen → expected ileus; prolonged → prolonged ileus",
      "Early hyperactive sounds then decreased → progression of obstruction or ischemia",
      "Opioid use + constipation + quiet abdomen → opioid bowel dysfunction",
    ],
    distinguishFrom: [
      "Hyperactive bowel sounds — early obstruction or gastroenteritis",
      "Absent bowel sounds — complete ileus, peritonitis, late obstruction",
      "Normal bowel sounds — regular low-frequency activity",
      "Abdominal bruit — vascular, not peristaltic",
    ],
    pediatrics:
      "Neonatal ileus with bilious vomiting and decreased sounds suggests obstruction (malrotation, atresia). NEC may progress from decreased motility to peritonitis with absent sounds.",
  },
  {
    id: "erythema",
    name: "Erythema",
    etymology: "Greek erythros = red",
    aliases: ["erythema", "erythematous", "skin erythema"],
    definition:
      "Visible redness of the skin or mucosa caused by increased blood flow to dermal capillaries (active hyperemia); typically blanches with pressure unless severe or purpuric components are present.",
    mechanism:
      "Vasodilation from inflammation (histamine, prostaglandins, cytokines), infection, heat, UV injury, or neurogenic flushing; intensity reflects local perfusion and inflammatory activity.",
    thinkOf: [
      "Cellulitis / erysipelas (infection with warmth and tenderness)",
      "Contact dermatitis, drug eruption, urticaria",
      "Viral exanthem (measles, scarlet fever, slapped-cheek/fifth disease)",
      "Systemic lupus erythematosus — malar (butterfly) rash",
      "Lyme disease — erythema migrans (expanding annular lesion)",
      "Sunburn, thermal or chemical burn",
      "Anaphylaxis — diffuse flushing with urticaria",
    ],
    pairWith: [
      "Warmth, tenderness, fever → cellulitis or erysipelas",
      "Expanding bull's-eye after tick bite → erythema migrans (Lyme)",
      "Target (iris) lesions → erythema multiforme",
      "Tender subcutaneous nodules on shins → erythema nodosum (sarcoid, strep, IBD, OCPs)",
      "Non-blanching purple lesions → purpura/petechiae, not simple erythema",
      "Centrofacial flushing with telangiectasias → rosacea",
    ],
    distinguishFrom: [
      "Purpura / petechiae — non-blanching hemorrhage into skin, not vasodilation alone",
      "Pallor — reduced perfusion; opposite of erythema",
      "Cyanosis — deoxygenated hemoglobin; bluish, not red",
      "Jaundice — yellow bilirubin pigmentation, sclera involved",
    ],
  },
  {
    id: "pallor",
    name: "Pallor",
    etymology: "Latin pallere = to be pale + -or = state of",
    aliases: [
      "pallor",
      "pallors",
      "pallid",
      "pallidness",
      "paleness",
      "pale",
      "pale skin",
      "pale complexion",
      "circumoral pallor",
      "circumoral pallors",
    ],
    definition:
      "Abnormal paleness of skin, mucous membranes, or nail beds from reduced cutaneous blood flow or decreased hemoglobin concentration — blanches with pressure when due to vasoconstriction but persists when due to anemia.",
    mechanism:
      "↓ Hemoglobin (anemia) reduces red hue regardless of perfusion; alternatively arteriolar vasoconstriction from shock, hypovolemia, cold, sympathetic surge, or ischemia ↓ capillary blood volume in skin → visible pallor; in scarlet fever toxin spares perioral area producing circumoral pallor against diffuse erythema.",
    thinkOf: [
      "Iron deficiency or other anemia — chronic fatigue and exertional dyspnea",
      "Acute hemorrhage or hypovolemic shock",
      "Vasovagal syncope — sudden pallor with diaphoresis and bradycardia",
      "Acute limb ischemia — pallor with pain, pulselessness, paresthesias (6 Ps)",
      "Heart failure with low cardiac output",
      "Scarlet fever — circumoral pallor with sandpaper rash",
      "Steal syndrome after dialysis fistula or vascular access",
    ],
    pairWith: [
      "Pallor + tachycardia + fatigue → anemia or blood loss",
      "Pallor + hypotension + cool extremities → shock",
      "Pallor + sandpaper rash + strawberry tongue → scarlet fever (circumoral pallor)",
      "Pallor + pulselessness + pain → acute arterial occlusion",
      "Pallor + diaphoresis + bradycardia → vasovagal syncope",
      "Conjunctival pallor + koilonychia → iron deficiency anemia",
    ],
    distinguishFrom: [
      "Cyanosis — bluish discoloration from deoxygenated hemoglobin, not pale",
      "Erythema — increased blood flow causing redness, opposite of pallor",
      "Jaundice — yellow bilirubin pigmentation, especially sclera",
      "Albinism — congenital lack of melanin pigment, not hemodynamic or anemia-related pallor",
      "Normal fair skin — baseline complexion without pathologic anemia or hypoperfusion",
    ],
    pediatrics:
      "Infant pallor with tachypnea or poor feeding suggests congenital heart disease or anemia; circumoral pallor with rash is classic for scarlet fever. Sickle cell dactylitis presents with painful swelling more than isolated pallor.",
  },
  {
    id: "dactylitis",
    name: "Dactylitis",
    etymology: "Greek daktylos = finger/toe + -itis = inflammation",
    aliases: [
      "dactylitis",
      "sausage digit",
      "sausage digits",
      "sausage finger",
      "sausage toe",
    ],
    definition:
      'Diffuse inflammatory swelling of an entire digit (finger or toe), producing a "sausage-like" appearance from involvement of all tissue compartments rather than isolated joint effusion alone.',
    mechanism:
      "Inflammation of joints, tenosynovium, and soft tissues of the digit — from psoriatic enthesitis, sickle vaso-occlusion, infection, or crystal/immune-mediated synovitis.",
    thinkOf: [
      "Psoriatic arthritis — asymmetric oligoarthritis with DIP and enthesitis",
      "Sickle cell disease — hand-foot syndrome in infants/children",
      "Reactive arthritis (Reiter syndrome)",
      "Infectious flexor tenosynovitis (Kanavel signs)",
      "Blistering distal dactylitis (Strep pyogenes in children)",
    ],
    pairWith: [
      "Nail pitting or psoriatic plaques → psoriatic arthritis",
      "Pain out of proportion + fever → infectious tenosynovitis",
      "Hemoglobin SS + infant → sickle cell dactylitis",
      "Urethritis + conjunctivitis → reactive arthritis",
    ],
    distinguishFrom: [
      "Isolated joint arthritis — single joint swelling without diffuse digit swelling",
      "Cellulitis — erythema and warmth but not classic uniform sausage digit",
      "Herpetic whitlow — vesicular lesions, localized to fingertip",
    ],
  },
  {
    id: "skin-thickening",
    name: "Skin Thickening",
    etymology: "Old Norse skinn = hide + Old English thicce = thick + -ening = process",
    aliases: [
      "skin thickening",
      "thickened skin",
      "indurated skin",
      "skin induration",
    ],
    definition:
      "Abnormal increase in skin thickness or firmness from edema, inflammation, collagen deposition, or infiltrative disease; may be localized or diffuse.",
    mechanism:
      "Dermal collagen accumulation (systemic sclerosis), mucopolysaccharide deposition (myxedema), soft tissue hypertrophy (acromegaly), chronic lymphedema, or inflammatory infiltration increases skin resistance and decreases pliability.",
    thinkOf: [
      "Systemic sclerosis (scleroderma) — sclerodactyly, proximal spread, Raynaud",
      "CREST syndrome — limited cutaneous systemic sclerosis",
      "Eosinophilic fasciitis — after strenuous exercise, eosinophilia",
      "Myxedema — hypothyroidism, nonpitting, periorbital",
      "Acromegaly — coarse features, jaw enlargement, ↑ IGF-1",
      "Chronic lymphedema — nonpitting extremity swelling",
    ],
    pairWith: [
      "Raynaud + reflux → systemic sclerosis",
      "Anti-centromere or anti–Scl-70 → scleroderma subtype",
      "Eosinophilia + fascial thickening → eosinophilic fasciitis",
      "↓ TSH + periorbital puffiness → myxedema",
      "Enlarged hands/feet + jaw → acromegaly",
    ],
    distinguishFrom: [
      "Edema — pitting fluid accumulation, not true dermal thickening",
      "Lichenification — chronic scratching in eczema, not systemic fibrosis",
      "Sclerodactyly — specific finger tightening in systemic sclerosis subset of skin thickening",
    ],
  },
  {
    id: "sclerodactyly",
    name: "Sclerodactyly",
    etymology: "Greek skleros = hard + daktylos = finger/toe",
    aliases: ["sclerodactyly", "sclerodactylies"],
    definition:
      "Fibrotic tightening and tapering of the skin over the fingers and toes, classically in systemic sclerosis, producing a shiny, bound-down appearance and flexion contractures.",
    mechanism:
      'Dermal and subcutaneous collagen deposition with loss of skin compliance → fixed skin induration of digits; the "S" in CREST (limited cutaneous systemic sclerosis).',
    thinkOf: [
      "Systemic sclerosis / CREST syndrome",
      "Limited cutaneous systemic sclerosis — anti-centromere antibody",
      "Diffuse systemic sclerosis — proximal skin involvement beyond hands",
      "Digital pitting scars and contractures",
    ],
    pairWith: [
      "Raynaud phenomenon → systemic sclerosis",
      "Telangiectasias + calcinosis → CREST",
      "GERD/dysphagia → esophageal dysmotility in scleroderma",
      "Anti-centromere → limited disease, PAH risk",
    ],
    distinguishFrom: [
      "General skin thickening — broader term; acromegaly, myxedema, eosinophilic fasciitis",
      "Clubbing — bulbous nail bed enlargement, not dermal fibrosis",
      "Dupuytren contracture — palmar fascia, not dorsal finger skin",
    ],
  },
  {
    id: "telangiectasia",
    name: "Telangiectasia",
    etymology: "Greek telos = end + angeion = vessel + ektasis = dilation",
    aliases: [
      "telangiectasia",
      "telangiectasias",
      "spider telangiectasia",
      "spider angioma",
    ],
    definition:
      "Visible permanent dilatation of small superficial blood vessels in skin or mucosa, appearing as fine red lines, mat-like patches, or spider-like lesions with a central arteriole.",
    mechanism:
      "Chronic vascular dilatation from local hypoxia, hormonal influence, or connective tissue disease; in CREST/systemic sclerosis reflects underlying microvascular injury and loss of capillary density at nailfolds.",
    thinkOf: [
      'CREST syndrome / limited systemic sclerosis — the "T" in CREST',
      "Hereditary hemorrhagic telangiectasia (Osler-Weber-Rendu)",
      "Cirrhosis — spider angiomata on upper body",
      "Rosacea — centrofacial telangiectasias",
      "Pregnancy and estrogen excess",
    ],
    pairWith: [
      "Sclerodactyly + Raynaud → systemic sclerosis",
      "Epistaxis + mucosal telangiectasias → HHT",
      "Jaundice + ascites → cirrhotic spider angiomata",
      "Facial flushing + papules → rosacea",
    ],
    distinguishFrom: [
      "Petechiae — nonblanching hemorrhage, not dilated vessels",
      "Cherry angioma — isolated dome-shaped papule, benign aging lesion",
      "Palmar erythema — diffuse redness, not discrete telangiectasias",
    ],
  },
  {
    id: "calcinosis",
    name: "Calcinosis",
    etymology: "Latin calx = lime/calcium + -osis = condition",
    aliases: [
      "calcinosis",
      "calcinosis cutis",
      "subcutaneous calcification",
      "soft tissue calcification",
    ],
    definition:
      "Deposition of calcium salts in skin, subcutaneous tissue, or other soft tissues, producing firm white nodules that may ulcerate and extrude chalky material.",
    mechanism:
      'Dystrophic calcification in damaged or fibrotic tissue despite normal serum calcium; in CREST/systemic sclerosis the "C" reflects subcutaneous calcinosis over pressure points (fingers, elbows, knees).',
    thinkOf: [
      "CREST syndrome / systemic sclerosis — calcinosis cutis",
      "Dermatomyositis — especially juvenile form",
      "Hyperphosphatemic familial tumoral calcinosis",
      "Metastatic calcification — hypercalcemia/hyperphosphatemia (different mechanism)",
      "Calciphylaxis in CKD",
    ],
    pairWith: [
      "Sclerodactyly + Raynaud → CREST",
      "Proximal muscle weakness + heliotrope rash → dermatomyositis",
      "↑ calcium × phosphate product → metastatic calcification",
    ],
    distinguishFrom: [
      "Gout tophi — urate crystals, not calcium hydroxyapatite",
      "Xanthoma — lipid deposits, not calcified",
      "Metastatic calcification — normal tissue + abnormal Ca²⁺/PO₄³⁻ (vs dystrophic in damaged tissue)",
      "Ossification — true bone formation, not calcium salt deposits alone",
    ],
  },
  {
    id: "raynaud-phenomenon",
    name: "Raynaud Phenomenon",
    etymology: "eponym: Maurice Raynaud + Greek phainomenon = thing appearing",
    aliases: [
      "raynaud phenomenon",
      "raynaud's phenomenon",
      "raynauds phenomenon",
      "secondary raynaud",
      "raynaud syndrome",
    ],
    definition:
      "Episodic digital vasospasm triggered by cold or stress, causing color changes (white → blue → red) in fingers or toes; when associated with underlying disease it is Raynaud phenomenon (vs primary Raynaud disease).",
    mechanism:
      "Exaggerated sympathetic arteriolar vasoconstriction → transient ischemia (pallor/cyanosis) followed by reactive hyperemia (rubor); in systemic sclerosis reflects structural microvascular disease and may progress to digital ulcers or pitting scars.",
    thinkOf: [
      "Systemic sclerosis — often first manifestation months before skin fibrosis",
      "CREST syndrome",
      "SLE, Sjögren syndrome, mixed connective tissue disease",
      "Buerger disease (thromboangiitis obliterans)",
      "Carpal tunnel syndrome, vibration tool use",
      "Drugs — β-blockers, ergotamines, bleomycin, cisplatin",
    ],
    pairWith: [
      "Sclerodactyly + telangiectasias → systemic sclerosis",
      "Anti-centromere or anti–Scl-70 → scleroderma workup",
      "Digital ulcers or pitting → secondary Raynaud with tissue injury",
      "Young woman + isolated episodes only → may be primary Raynaud disease",
    ],
    distinguishFrom: [
      "Raynaud disease (primary) — benign, no underlying disease, normal capillaroscopy, young women",
      "Acrocyanosis — persistent blue discoloration without episodic triphasic color change",
      "Frostbite — acute cold injury with tissue necrosis",
      "Embolic digital ischemia — sudden, asymmetric, not triggered by cold",
    ],
  },
  {
    id: "lymphadenopathy",
    name: "Lymphadenopathy",
    etymology: "Latin lympha = clear fluid + Greek aden = gland + -pathy = disease",
    aliases: [
      "lymphadenopathy",
      "lymphadenopathies",
      "enlarged lymph nodes",
      "enlarged lymph node",
      "lymph node enlargement",
      "lymph node swelling",
      "adenopathy",
    ],
    definition:
      "Abnormal enlargement of lymph nodes, detected clinically or on imaging; may be localized or generalized and reflects reactive, infectious, malignant, or autoimmune processes.",
    mechanism:
      "Antigen-driven lymphocyte proliferation, macrophage activation, or neoplastic infiltration within lymphoid tissue increases node size; tenderness often suggests acute inflammation; rubbery painless nodes raise malignancy concern.",
    thinkOf: [
      "Viral infection — EBV (mono), CMV, HIV acute seroconversion",
      "Bacterial infection — strep pharyngitis, cat-scratch disease, TB",
      "Lymphoma — Hodgkin (mediastinal mass, Reed-Sternberg) or NHL",
      "Metastatic cancer — supraclavicular (Virchow node) suggests GI or thoracic malignancy",
      "Sarcoidosis — bilateral hilar lymphadenopathy",
      "SLE, RA, and other autoimmune disease",
    ],
    pairWith: [
      "Pharyngitis + atypical lymphocytes → infectious mononucleosis",
      "B symptoms (fever, night sweats, weight loss) → lymphoma or TB",
      "Bilateral hilar nodes + erythema nodosum → sarcoidosis (Löfgren)",
      "Left supraclavicular node → gastric or thoracic malignancy (Virchow)",
      "Localized tender nodes → bacterial lymphadenitis",
    ],
    distinguishFrom: [
      "Lymphadenitis — painful inflamed node, often bacterial; subset of lymphadenopathy",
      "Lipoma or cyst — soft, not true lymphoid enlargement",
      "Matted nodes fixed to tissue — higher suspicion for malignancy or TB",
      "Generalized lymphadenopathy — ≥2 noncontiguous regions; broader workup (HIV, lymphoma, SLE)",
    ],
  },
  {
    id: "macule",
    name: "Macule",
    etymology: "Latin macula = spot/stain",
    aliases: ["macule", "macules", "macular lesion", "flat skin spot"],
    definition:
      "Flat, non-palpable circumscribed color change ≤1 cm in diameter; no elevation, depression, fluid, or texture change.",
    mechanism:
      "Altered pigment, vascular flow, or dermal blood/exogenous material changes skin color without changing contour or thickness.",
    thinkOf: [
      "Freckle / lentigo — hyperpigmented macule",
      "Rose spots in typhoid fever",
      "Early viral exanthem or drug eruption",
      "Petechiae — hemorrhagic macules that do not blanch",
      "Vitiligo macules — depigmentation from melanocyte loss",
    ],
    pairWith: [
      "Blanching erythematous macules → vasodilation/exanthem",
      "Non-blanching pinpoint macules → petechiae",
      "Brown macules on sun-exposed skin → lentigines",
      "Depigmented macules with autoimmune history → vitiligo",
    ],
    distinguishFrom: [
      "Patch — same flat morphology but >1 cm",
      "Papule — raised/palpable lesion ≤1 cm",
      "Petechiae — subtype of non-blanching hemorrhagic macules",
      "Purpura/ecchymosis — larger non-blanching blood extravasation",
    ],
  },
  {
    id: "patch",
    name: "Patch",
    etymology: "Old French pieche = piece/portion",
    aliases: ["patch", "patches", "skin patch", "cutaneous patch"],
    definition:
      "Flat, non-palpable circumscribed color change >1 cm in diameter; essentially a large macule.",
    mechanism:
      "Broad alteration in pigment, perfusion, or dermal contents changes color over a larger area without palpable elevation.",
    thinkOf: [
      "Vitiligo — depigmented patches",
      "Café-au-lait macules/patches — neurofibromatosis type 1",
      "Mongolian spot / congenital dermal melanocytosis",
      "Mycosis fungoides patch stage",
      "Port-wine stain — capillary malformation",
    ],
    pairWith: [
      "≥6 café-au-lait patches + axillary freckling → NF1",
      "Depigmented patch + autoimmune disease → vitiligo",
      "Salmon patch vs port-wine stain in infant → vascular birthmark distinction",
      "Persistent scaly patch in sun-protected area → consider cutaneous T-cell lymphoma",
    ],
    distinguishFrom: [
      "Macule — same flat morphology but ≤1 cm",
      "Plaque — raised/palpable lesion >1 cm",
      "Scale — surface keratin change; may overlay a patch",
    ],
    pediatrics:
      "Birthmarks are high-yield pediatric patches: café-au-lait lesions suggest NF1 when multiple; congenital dermal melanocytosis is benign and common over the sacrum.",
  },
  {
    id: "papule",
    name: "Papule",
    etymology: "Latin papula = pimple",
    aliases: ["papule", "papules", "papular lesion", "papular rash"],
    definition:
      "Solid, elevated skin lesion ≤1 cm in diameter without visible fluid; may be erythematous, violaceous, or flesh-colored.",
    mechanism:
      "Localized dermal or epidermal inflammation, infiltration, or proliferation → palpable raised lesion smaller than a plaque.",
    thinkOf: [
      "Acne vulgaris — inflammatory papules and pustules",
      "Guttate psoriasis — small drop-like papules after strep",
      "Lichen planus — violaceous flat-topped papules",
      "Molluscum contagiosum — umbilicated flesh-colored papules",
      "Drug eruption — morbilliform papules",
    ],
    pairWith: [
      "Flat-topped violaceous papules + Wickham striae → lichen planus",
      "Comedones + papules on face/back → acne",
      "Dewdrop papules after pharyngitis → guttate psoriasis",
      "Grouped vesicles on erythematous base → HSV (vesicle stage may follow papule)",
    ],
    distinguishFrom: [
      "Plaque — solid lesion >1 cm (papule and plaque differ by size only)",
      "Vesicle — fluid-filled, not solid",
      "Macule — flat, non-palpable color change only",
      "Nodule — deeper or larger solid lesion (>1 cm, often dermal/subcutaneous)",
    ],
  },
  {
    id: "plaque",
    name: "Plaque",
    etymology: "French plaque = plate",
    aliases: ["plaque", "plaques", "skin plaque", "cutaneous plaque"],
    definition:
      "Solid, elevated skin lesion >1 cm in diameter formed by confluence of papules or broad inflammatory infiltration; may be scaly, indurated, or erythematous.",
    mechanism:
      "Coalescence of papules or widespread epidermal/dermal inflammation → broad palpable lesion; scale reflects hyperkeratosis or parakeratosis when present.",
    thinkOf: [
      "Psoriasis — erythematous plaque with silvery scale on extensors",
      "Lichen planus — coalescent violaceous plaques on wrists/shins",
      "Tinea corporis — annular plaque with central clearing",
      "Atherosclerosis — fibrous plaque in arterial intima (vascular context)",
      "Actinic keratosis — rough hyperkeratotic plaque (premalignant)",
    ],
    pairWith: [
      "Silvery scale + extensor distribution → psoriasis",
      "Violaceous flat-topped + oral Wickham striae → lichen planus",
      "Annular + KOH positive → tinea",
      "Firm indurated plaque → see indurated plaque for sclerotic/infiltrative causes",
    ],
    distinguishFrom: [
      "Papule — same solid morphology but ≤1 cm",
      "Patch — flat, non-palpable macule >1 cm (e.g., mycosis fungoides patch stage)",
      "Indurated plaque — emphasizes firmness; plaque describes size/morphology",
      "Nodule — deeper, often dermal/subcutaneous mass",
    ],
  },
  {
    id: "vesicle",
    name: "Vesicle",
    etymology: "Latin vesicula = small bladder",
    aliases: ["vesicle", "vesicles", "vesicular lesion", "vesicular rash"],
    definition:
      "Superficial elevated fluid-filled skin lesion ≤1 cm in diameter; fluid may be serous, serosanguineous, or cloudy.",
    mechanism:
      "Intraepidermal or subcorneal accumulation of fluid from inflammation, infection, or autoimmune blistering → circumscribed, thin-walled blister.",
    thinkOf: [
      "Varicella-zoster — dewdrop on rose petal (chickenpox); dermatomal in zoster",
      "Herpes simplex — grouped vesicles on erythematous base (oral, genital)",
      "Dyshidrotic eczema — pruritic vesicles on palms/soles",
      "Contact dermatitis — acute phase may show vesicles at exposure site",
      "Pemphigus vulgaris — flaccid vesicles/bullae (intraepidermal)",
    ],
    pairWith: [
      "Grouped vesicles on mucosa → HSV",
      "Unilateral dermatomal distribution → herpes zoster",
      "Pruritic vesicles on extensor surfaces + IgA deposits → dermatitis herpetiformis",
      "Fever + monomorphic punched-out erosions in atopic child → eczema herpeticum",
    ],
    distinguishFrom: [
      "Bulla — same morphology but >1 cm",
      "Pustule — filled with pus, not clear fluid",
      "Papule — solid elevation, no fluid",
    ],
  },
  {
    id: "bullae",
    name: "Bullae",
    etymology: "Latin bulla = bubble",
    aliases: ["bulla", "bullae", "blister", "blisters", "bullous lesion"],
    definition:
      "Fluid-filled skin lesion >1 cm in diameter; may be tense or flaccid depending on level of split and roof integrity.",
    mechanism:
      "Loss of adhesion or massive spongiosis at intraepidermal or subepidermal level → large fluid collection under or within epidermis.",
    thinkOf: [
      "Bullous pemphigoid — tense subepidermal bullae, elderly, anti-BP180",
      "Pemphigus vulgaris — flaccid intraepidermal bullae, positive Nikolsky sign",
      "Stevens-Johnson syndrome / TEN — drug reaction, mucosal involvement, epidermal necrosis",
      "Friction or burn blisters — mechanical separation",
      "Bullous impetigo — superficial subcorneal bullae, honey crust",
    ],
    pairWith: [
      "Tense bullae + eosinophils + subepidermal split → bullous pemphigoid",
      "Flaccid bullae + acantholysis + oral mucosa → pemphigus vulgaris",
      "Drug + mucosal erosions + epidermal detachment → SJS/TEN",
      "Linear IgA deposits → linear IgA bullous dermatosis",
    ],
    distinguishFrom: [
      "Vesicle — ≤1 cm fluid-filled lesion",
      "Pustule — purulent, not serous fluid",
      "Bulla vs vesicle is size only — same basic mechanism",
    ],
  },
  {
    id: "nodule",
    name: "Nodule",
    etymology: "Latin nodulus = little knot",
    aliases: ["nodule", "nodules", "skin nodule", "cutaneous nodule", "nodular lesion"],
    definition:
      "Solid, palpable lesion usually >1 cm with depth in the dermis or subcutis; may be elevated, firm, tender, or mobile.",
    mechanism:
      "Dermal/subcutaneous inflammation, granuloma, neoplasm, cyst wall contents, or lipid/urate deposition forms a deeper palpable mass.",
    thinkOf: [
      "Erythema nodosum — tender shin nodules",
      "Rheumatoid nodules — extensor surfaces",
      "Dermatofibroma — firm button-like nodule",
      "Basal cell carcinoma — pearly nodule",
      "Metastatic or infectious subcutaneous nodules",
    ],
    pairWith: [
      "Tender anterior shin nodules + sarcoid/strep/IBD/OCPs → erythema nodosum",
      "Firm extensor nodules + RF/anti-CCP → rheumatoid arthritis",
      "Pearly papule/nodule + telangiectasias → basal cell carcinoma",
      "Linear proximal nodules from inoculation site → nodular lymphangitis",
    ],
    distinguishFrom: [
      "Papule — smaller superficial solid lesion ≤1 cm",
      "Plaque — broad raised lesion >1 cm, usually less deep than nodule",
      "Cyst — encapsulated cavity with fluid/keratin/sebum",
      "Tumor — larger mass; often >2 cm or neoplastic implication",
    ],
  },
  {
    id: "pustule",
    name: "Pustule",
    etymology: "Latin pustula = blister/pimple filled with pus",
    aliases: ["pustule", "pustules", "pustular lesion", "pustular rash", "pus-filled lesion"],
    definition:
      "Small elevated lesion containing purulent material; may be sterile inflammatory pus or infectious pus.",
    mechanism:
      "Neutrophil accumulation within epidermis, follicle, or superficial dermis creates visible pus; follicular pustules often center on hair follicles.",
    thinkOf: [
      "Acne vulgaris — comedones plus inflammatory papules/pustules",
      "Folliculitis — Staph aureus or Pseudomonas hot-tub folliculitis",
      "Impetigo — pustules/vesicles rupture into honey-colored crust",
      "Pustular psoriasis — sterile pustules",
      "Disseminated gonococcal infection — pustular acral lesions",
    ],
    pairWith: [
      "Comedones + papules/pustules → acne vulgaris",
      "Follicle-centered pustules after hot tub → Pseudomonas folliculitis",
      "Honey-colored crust after pustules rupture → impetigo",
      "Fever + migratory polyarthralgia + tenosynovitis → disseminated gonorrhea",
    ],
    distinguishFrom: [
      "Vesicle — clear/serous fluid, not pus",
      "Papule — solid, no fluid",
      "Abscess — deeper pus collection, often fluctuant",
      "Bullae — larger fluid-filled lesion >1 cm, not necessarily purulent",
    ],
    pediatrics:
      "Neonatal acne and erythema toxicum can show pustules but are benign; bullous impetigo is a high-yield pediatric Staph aureus pustule/bulla pattern.",
  },
  {
    id: "wheal",
    name: "Wheal",
    etymology: "Old English hwele = raised welt",
    aliases: [
      "wheal",
      "wheals",
      "welt",
      "welts",
      "hive",
      "hives",
      "urticaria",
      "urticarial rash",
      "urticarial eruption",
      "urticarial wheal",
      "urticarial wheals",
    ],
    definition:
      "Transient, edematous, raised, often pruritic plaque that usually blanches and changes location or resolves within 24 hours.",
    mechanism:
      "Mast-cell degranulation releases histamine and other mediators → dermal edema, vasodilation, and pruritus; deeper edema is angioedema.",
    thinkOf: [
      "Urticaria — allergic, viral, idiopathic, physical triggers",
      "Anaphylaxis when wheals occur with airway/GI/cardiovascular symptoms",
      "Serum sickness-like reaction",
      "Mastocytosis — urtication with rubbing (Darier sign)",
      "Dermatographism — wheal after stroking skin",
    ],
    pairWith: [
      "Wheals + hypotension/wheeze/vomiting → anaphylaxis",
      "Migratory pruritic lesions lasting <24 h → urticaria",
      "Fever + arthralgia after drug/antiserum → serum sickness",
      "Brown macules that wheal with rubbing → urticaria pigmentosa/mastocytosis",
    ],
    distinguishFrom: [
      "Plaque — persistent raised lesion; wheal is transient edema",
      "Angioedema — deeper swelling, often lips/eyelids/airway",
      "Erythema multiforme target lesion — fixed target morphology, not fleeting wheal",
    ],
    pediatrics:
      "Acute urticaria in children is commonly post-viral; wheals plus respiratory distress, hypotension, or repetitive vomiting still means anaphylaxis.",
  },
  {
    id: "cyst",
    name: "Cyst",
    etymology: "Greek kystis = bladder/sac",
    aliases: ["cyst", "cysts", "epidermoid cyst", "sebaceous cyst", "cutaneous cyst"],
    definition:
      "Encapsulated, fluid- or keratin-filled cavity in skin or subcutaneous tissue; usually dome-shaped, mobile, and slow-growing.",
    mechanism:
      "Epithelial-lined sac traps keratin, sebum-like material, or fluid; rupture releases contents into dermis and triggers foreign-body inflammation.",
    thinkOf: [
      "Epidermoid inclusion cyst — central punctum, keratin debris",
      "Pilar cyst — scalp",
      "Acne cyst/nodule — severe inflammatory acne",
      "Steatocystoma multiplex",
      "Branchial cleft or thyroglossal duct cyst when neck mass context",
    ],
    pairWith: [
      "Central punctum + cheesy keratin → epidermoid cyst",
      "Multiple painful acne nodules/cysts → nodulocystic acne",
      "Midline neck cyst moves with tongue protrusion → thyroglossal duct cyst",
      "Lateral neck cyst after URI → branchial cleft cyst",
    ],
    distinguishFrom: [
      "Nodule — solid tissue mass, not a cavity",
      "Abscess — infected pus collection with warmth/fluctuance",
      "Lipoma — soft fatty tumor, no central punctum",
    ],
  },
  {
    id: "lichenification",
    name: "Lichenification",
    etymology: "Latin lichen = moss + facere = make",
    aliases: ["lichenification", "lichenified", "lichenified skin"],
    definition:
      "Thickened, leathery skin with exaggerated skin markings from chronic rubbing or scratching; secondary to repeated mechanical trauma.",
    mechanism:
      "Chronic friction → epidermal hyperplasia (acanthosis) and dermal fibrosis → accentuated skin lines and firm texture; hallmark of the itch-scratch cycle.",
    thinkOf: [
      "Atopic dermatitis — flexural lichenification in chronic phase",
      "Chronic contact dermatitis — persistent exposure or scratching",
      "Lichen simplex chronicus — localized plaque from habitual scratching (occiput, ankles)",
      "Neurodermatitis — psychogenic component to scratching",
    ],
    pairWith: [
      "Pruritus + flexural distribution + atopy history → atopic dermatitis",
      "Localized plaque + patient reports habitual rubbing → lichen simplex chronicus",
      "vs psoriasis — silvery scale, well-demarcated plaque, extensor surfaces",
    ],
    distinguishFrom: [
      "Skin thickening (scleroderma) — collagen deposition, not scratch-induced acanthosis",
      "Indurated plaque — firm raised lesion; may be inflammatory not lichenified",
      "Hyperkeratosis — thickened stratum corneum (callus, psoriasis scale)",
      "Excoriated — acute scratch marks and erosions; lichenification is chronic thickening from repeated rubbing",
    ],
  },
  {
    id: "excoriated",
    name: "Excoriated",
    etymology: "Latin ex = out + corium = skin",
    aliases: [
      "excoriated",
      "excoriation",
      "excoriations",
      "excoriated skin",
      "excoriated lesions",
      "scratch marks",
      "skin picking",
      "neurotic excoriation",
      "acne excoriée",
      "acne excoriee",
    ],
    definition:
      "Superficial skin damage from rubbing, scratching, or picking — linear erosions, scratch marks, hemorrhagic crusts, or raw areas; a secondary finding on pruritic or compulsively manipulated skin rather than a primary lesion morphology.",
    mechanism:
      "Pruritus, irritation, or compulsive urge → mechanical trauma breaches epidermis → excoriations and erosions; chronic repetition drives lichenification; broken skin predisposes to secondary bacterial infection (impetigo).",
    thinkOf: [
      "Atopic dermatitis — itch-scratch cycle with flexural excoriations",
      "Scabies — excoriations at burrows; wrists, finger webs, genitalia",
      "Insect bites / papular urticaria — excoriated pruritic papules",
      "Lichen simplex chronicus — localized habitual scratching",
      "Excoriation disorder (dermatillomania) — compulsive skin picking; OCD spectrum",
      "Acne excoriée — picking at comedones/papules without true severe acne",
      "Delusions of parasitosis — self-induced excoriations with fixed parasitic belief",
    ],
    pairWith: [
      "Nocturnal pruritus + interdigital burrows → scabies",
      "Flexural excoriations + atopy + family history → atopic dermatitis",
      "Honey-colored crust on excoriations → impetigo superinfection",
      "Linear excoriations in reachable areas + psychiatric history → excoriation disorder",
      "Excoriated papules without primary burrows → insect bites or neurotic excoriation",
    ],
    distinguishFrom: [
      "Lichenification — chronic leathery thickened skin from repeated rubbing; may coexist with excoriations",
      "Erosion — epidermal loss; excoriation specifies mechanical (scratch/pick) cause",
      "Ulcer — deeper defect extending into dermis or subcutis",
      "Primary vesicle or papule — excoriation is secondary change atop another lesion",
      "Dermatographism — wheal from stroking intact skin, not frank excoriation",
    ],
  },
  {
    id: "erosion",
    name: "Erosion",
    etymology: "Latin erodere = gnaw away",
    aliases: ["erosion", "erosions", "skin erosion", "mucosal erosion", "eroded lesion"],
    definition:
      "Superficial loss of epidermis or mucosal epithelium that does not extend through the basement membrane; heals without scarring.",
    mechanism:
      "Ruptured vesicle/bulla, friction, scratching, maceration, or epithelial necrosis removes surface epithelium while sparing deeper dermis.",
    thinkOf: [
      "Pemphigus vulgaris — painful oral erosions",
      "HSV — vesicles rupture into shallow erosions/ulcers",
      "Atopic dermatitis — excoriated erosions",
      "Stevens-Johnson syndrome / TEN — mucosal erosions",
      "Intertrigo or diaper dermatitis — macerated erosions",
    ],
    pairWith: [
      "Painful oral erosions + flaccid bullae → pemphigus vulgaris",
      "Grouped vesicles that rupture → HSV erosions",
      "Drug exposure + mucosal erosions + skin pain → SJS/TEN",
      "Pruritus + scratch marks → excoriated erosions",
    ],
    distinguishFrom: [
      "Ulcer — deeper loss into dermis/subcutis; scars",
      "Excoriation — erosion caused specifically by scratching/picking",
      "Fissure — linear crack rather than broad shallow epithelial loss",
    ],
  },
  {
    id: "ulcer",
    name: "Ulcer",
    etymology: "Latin ulcus = sore",
    aliases: ["ulcer", "ulcers", "skin ulcer", "cutaneous ulcer", "mucosal ulcer", "ulceration"],
    definition:
      "Full-thickness loss of epidermis with extension into dermis or deeper tissue; often heals with scarring.",
    mechanism:
      "Ischemia, pressure, infection, immune-mediated injury, malignancy, or neuropathy destroys epidermis and dermis, creating a crater-like defect.",
    thinkOf: [
      "Venous stasis ulcer — medial malleolus, edema, hemosiderin",
      "Arterial ulcer — punched out, painful, distal, poor pulses",
      "Diabetic neuropathic ulcer — pressure points, painless",
      "Pressure ulcer — immobility over bony prominences",
      "Aphthous ulcer / Behçet disease",
      "Pyoderma gangrenosum — pathergy, IBD association",
    ],
    pairWith: [
      "Medial ankle + edema + hyperpigmentation → venous stasis ulcer",
      "Painful punched-out toes + weak pulses → arterial insufficiency",
      "Plantar pressure ulcer + neuropathy → diabetes mellitus",
      "Sacrum/heel in immobilized patient → pressure ulcer",
      "Oral/genital ulcers + uveitis → Behçet disease",
    ],
    distinguishFrom: [
      "Erosion — superficial; no scarring",
      "Abscess — pus cavity, not tissue-loss crater",
      "Fissure — linear crack, often at folds or dry skin",
    ],
    pediatrics:
      "Oral ulcers in children are commonly aphthous, HSV, hand-foot-mouth disease, or herpangina; genital/perianal ulcers raise infection, IBD, trauma, or abuse-context concerns.",
  },
  {
    id: "fissure",
    name: "Fissure",
    etymology: "Latin fissura = cleft/split",
    aliases: ["fissure", "fissures", "skin fissure", "crack", "cracked skin", "linear crack"],
    definition:
      "Linear split or crack in epidermis that may extend into dermis; often painful and located in dry or thickened skin.",
    mechanism:
      "Loss of elasticity from xerosis, inflammation, maceration, or hyperkeratosis causes skin to crack under tension or movement.",
    thinkOf: [
      "Atopic dermatitis with xerosis",
      "Tinea pedis — interdigital fissures",
      "Angular cheilitis — mouth corner fissures",
      "Anal fissure — painful defecation, bright red blood",
      "Psoriasis plaques cracking on palms/soles",
    ],
    pairWith: [
      "Pruritic dry flexural skin → atopic dermatitis",
      "Toe-web scale/fissures → tinea pedis",
      "Pain with bowel movement + blood on toilet paper → anal fissure",
      "Mouth corner fissures + anemia/B vitamin deficiency/candida → angular cheilitis",
    ],
    distinguishFrom: [
      "Erosion — broad shallow loss, not linear split",
      "Ulcer — deeper crater-like defect",
      "Excoriation — scratch/pick-induced erosion",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    etymology: "Old Norse skal = shell",
    aliases: ["scale", "scales", "scaling", "scaly lesion", "desquamation", "flaking skin"],
    definition:
      "Visible flakes or plates of stratum corneum from abnormal keratinization or increased epidermal turnover.",
    mechanism:
      "Hyperproliferation, parakeratosis, impaired barrier lipids, or infection increases retained keratin sheets on the skin surface.",
    thinkOf: [
      "Psoriasis — silvery scale over erythematous plaques",
      "Tinea corporis/pedis — annular or interdigital scale",
      "Seborrheic dermatitis — greasy scale",
      "Pityriasis rosea — collarette scale",
      "Ichthyosis vulgaris — fish-scale xerosis",
    ],
    pairWith: [
      "Silvery scale + extensor plaques → psoriasis",
      "Annular scale + central clearing + KOH hyphae → tinea corporis",
      "Greasy scalp/nasolabial scale → seborrheic dermatitis",
      "Herald patch + Christmas-tree trunk rash → pityriasis rosea",
    ],
    distinguishFrom: [
      "Crust — dried serum/blood/pus, not keratin flakes",
      "Xerosis — dry skin; may produce fine scale",
      "Lichenification — thickened skin lines from scratching",
    ],
  },
  {
    id: "crust",
    name: "Crust",
    etymology: "Latin crusta = shell/scab",
    aliases: ["crust", "crusts", "crusting", "crusted lesion", "scab", "honey-colored crust"],
    definition:
      "Dried serum, blood, pus, or exudate on the skin surface; often forms after vesicles, pustules, erosions, or ulcers drain.",
    mechanism:
      "Inflammatory or infectious exudate escapes through damaged epidermis and dries, leaving yellow, brown, red, or black surface material.",
    thinkOf: [
      "Impetigo — honey-colored crust from Staph aureus or Strep pyogenes",
      "Eczema with secondary bacterial infection",
      "HSV or varicella lesions after vesicles rupture",
      "Scabies with excoriated/crusted lesions",
      "Eschar — black necrotic crust in ecthyma, anthrax, rickettsial disease",
    ],
    pairWith: [
      "Honey-colored crust around nose/mouth → nonbullous impetigo",
      "Atopic dermatitis + weeping/crust → impetiginization",
      "Black eschar + tick/travel exposure → rickettsial disease clue",
      "Crusted widespread hyperkeratosis + immunosuppression → crusted scabies",
    ],
    distinguishFrom: [
      "Scale — dry keratin flakes",
      "Eschar — necrotic black crust; severe subtype",
      "Scab — common term for dried blood crust",
    ],
    pediatrics:
      "Honey-colored crusted impetigo around nose/mouth is classic in children and spreads by scratching/autoinoculation.",
  },
  {
    id: "atrophy",
    name: "Atrophy",
    etymology: "Greek a = without + trophe = nourishment",
    aliases: ["atrophy", "skin atrophy", "atrophic skin", "atrophic lesion", "cigarette-paper skin"],
    definition:
      "Thinning or depression of epidermis, dermis, or subcutaneous tissue; skin may look shiny, wrinkled, or fragile.",
    mechanism:
      "Loss of collagen, elastin, epidermal thickness, adnexal structures, or fat reduces tissue volume and tensile strength.",
    thinkOf: [
      "Chronic topical or systemic corticosteroid exposure",
      "Aging / photoaging",
      "Systemic sclerosis late changes",
      "Lupus or dermatomyositis poikiloderma",
      "Striae — dermal atrophy from stretching/glucocorticoids",
    ],
    pairWith: [
      "Thin shiny skin + telangiectasias after steroids → steroid atrophy",
      "Purple striae + central obesity → Cushing syndrome",
      "Poikiloderma + proximal weakness → dermatomyositis",
      "Hair loss/shiny skin over ischemic limb → peripheral artery disease",
    ],
    distinguishFrom: [
      "Scar — fibrous replacement after injury",
      "Erosion/ulcer — active tissue loss rather than chronic thinning",
      "Lichenification — thickening, opposite contour change",
    ],
  },
  {
    id: "scar",
    name: "Scar",
    etymology: "Greek eschara = scab/hearth, later wound mark",
    aliases: ["scar", "scars", "cicatrix", "cicatrices", "keloid", "hypertrophic scar"],
    definition:
      "Fibrous tissue replacing normal skin after dermal injury; may be flat, atrophic, hypertrophic, or extend beyond wound margins as a keloid.",
    mechanism:
      "Wound healing deposits collagen and extracellular matrix; excess fibroblast/TGF-β activity produces hypertrophic scars or keloids.",
    thinkOf: [
      "Keloid — scar extends beyond original wound",
      "Hypertrophic scar — raised but confined to wound",
      "Acne scarring",
      "Burn or surgical scars",
      "Ehlers-Danlos — thin atrophic scars from collagen defects",
    ],
    pairWith: [
      "Raised scar beyond incision/piercing → keloid",
      "Hyperextensible skin + atrophic scars → Ehlers-Danlos",
      "Pitted facial scars + prior acne → acne scarring",
      "Contracture over burn site → scar remodeling complication",
    ],
    distinguishFrom: [
      "Atrophy — thinning without necessarily prior wound fibrosis",
      "Lichenification — thickened scratched skin, not healed injury",
      "Granulation tissue — healing wound bed, not mature scar",
    ],
  },
  {
    id: "burrow",
    name: "Burrow",
    etymology: "Old English burg = shelter/dug place",
    aliases: ["burrow", "burrows", "scabies burrow", "linear burrow", "serpiginous burrow"],
    definition:
      "Thin, short, linear or wavy track in the stratum corneum made by an organism moving through superficial skin.",
    mechanism:
      "Mite or parasite migration creates a tunnel and triggers delayed hypersensitivity, producing intense pruritus and excoriations.",
    thinkOf: [
      "Scabies — interdigital spaces, wrists, beltline, genitalia",
      "Crusted scabies — immunosuppressed or institutionalized",
      "Cutaneous larva migrans — longer serpiginous migrating track",
    ],
    pairWith: [
      "Nocturnal pruritus + finger-web burrows → scabies",
      "Household contacts itching → scabies",
      "Barefoot beach exposure + migrating serpiginous track → cutaneous larva migrans",
      "Hyperkeratotic crusted plaques in immunosuppressed → crusted scabies",
    ],
    distinguishFrom: [
      "Excoriation — scratch mark; often secondary to itchy burrows",
      "Serpiginous lesion — broader winding pattern; may be parasite migration",
      "Lymphangitis streak — deeper red linear inflammation, not epidermal tunnel",
    ],
    pediatrics:
      "In infants, scabies can involve palms, soles, scalp, and face; household treatment matters because reinfestation is common.",
  },
  {
    id: "comedo",
    name: "Comedo",
    etymology: "Latin comedere = eat up; historical 'worm-like' plug",
    aliases: ["comedo", "comedone", "comedones", "blackhead", "blackheads", "whitehead", "whiteheads"],
    definition:
      "Keratin and sebum plug within a hair follicle; open comedo is a blackhead, closed comedo is a whitehead.",
    mechanism:
      "Follicular hyperkeratinization plus sebum retention obstructs the pilosebaceous unit; Cutibacterium acnes inflammation can progress to papules, pustules, nodules, or cysts.",
    thinkOf: [
      "Acne vulgaris — comedones are defining primary lesions",
      "Androgen excess — severe or sudden acne with hirsutism/irregular menses",
      "Medication acneiform eruptions — steroids, lithium, EGFR inhibitors",
      "Chloracne — halogenated aromatic hydrocarbon exposure",
    ],
    pairWith: [
      "Comedones + papules/pustules on face/back → acne vulgaris",
      "Severe cystic acne + hirsutism → hyperandrogenism/PCOS",
      "Monomorphic papules/pustules without comedones → acneiform drug eruption or folliculitis",
      "Open black plug → blackhead; closed white papule → whitehead",
    ],
    distinguishFrom: [
      "Pustule — pus-filled inflammatory lesion",
      "Milia — tiny keratin cysts, not follicular acne comedones",
      "Folliculitis — follicular pustules without comedones",
    ],
    pediatrics:
      "Comedonal acne commonly starts in adolescence with puberty-driven sebum; prepubertal severe acne should prompt androgen-excess consideration.",
  },
  {
    id: "indurated-plaque",
    name: "Indurated Plaque",
    etymology: "Latin in = into + durus = hard + French plaque = plate",
    aliases: [
      "indurated plaque",
      "indurated plaques",
      "firm plaque",
      "firm plaques",
    ],
    definition:
      "Raised, well-demarcated skin lesion with increased firmness on palpation from dermal inflammation, infiltration, or sclerosis.",
    mechanism:
      "Dermal collagen deposition, inflammatory infiltrate, or granulomatous inflammation increases tissue density → palpable firm plaque with or without scale.",
    thinkOf: [
      "Psoriasis — erythematous indurated plaque with silvery scale on extensors",
      "Sarcoidosis — lupus pernio, violaceous indurated facial plaques",
      "Cutaneous T-cell lymphoma (mycosis fungoides) — patches/plaques, may be indurated",
      "Morphea (localized scleroderma) — waxy indurated plaque, ivory center",
      "Granuloma annulare — annular firm plaque",
    ],
    pairWith: [
      "Silvery scale + extensor knees/elbows → psoriasis",
      "Violaceous facial plaque + hilar adenopathy → sarcoid",
      "Anti–Scl-70 or anti-centromere absent + isolated plaque → morphea vs systemic sclerosis",
      "Painless indurated plaque slowly enlarging → consider CTCL in adult",
    ],
    distinguishFrom: [
      "Lichenification — accentuated skin lines from scratching, not primary infiltrative plaque",
      "Edematous plaque — soft, pitting (urticaria, angioedema)",
      "Skin thickening (diffuse) — widespread sclerosis rather than focal plaque",
    ],
  },
  {
    id: "morning-stiffness",
    name: "Morning Stiffness",
    etymology: "morning = early day + Old English stif = rigid",
    aliases: [
      "morning stiffness",
      "am stiffness",
      "stiffness in the morning",
      "early morning stiffness",
    ],
    definition:
      "Subjective rigidity or reduced joint mobility present upon waking that improves with activity; duration and pattern help distinguish inflammatory from mechanical arthropathy.",
    mechanism:
      "Overnight immobility allows inflammatory exudate and edema to accumulate in synovium and periarticular tissues → gelling phenomenon; inflammatory arthritis typically causes prolonged stiffness that eases with movement.",
    thinkOf: [
      "Rheumatoid arthritis — stiffness >1 hour, symmetric small joints",
      "Ankylosing spondylitis — inflammatory back pain, stiffness improves with exercise",
      "Psoriatic arthritis — morning stiffness with enthesitis or dactylitis",
      "Polymyalgia rheumatica — proximal stiffness lasting hours in elderly",
      "Osteoarthritis — brief stiffness <30 minutes after inactivity",
    ],
    pairWith: [
      ">1 hour stiffness + symmetric MCP/PIP swelling → rheumatoid arthritis",
      "Young male + low back stiffness improving with activity + sacroiliitis → ankylosing spondylitis",
      "Brief stiffness + DIP/PIP osteophytes + no systemic symptoms → osteoarthritis",
      "Stiffness + proximal muscle pain + elevated ESR in age >50 → polymyalgia rheumatica",
    ],
    distinguishFrom: [
      "Gelling phenomenon (OA) — short-lived stiffness after rest, usually <30 min",
      "Muscle cramps — painful contraction, not joint rigidity",
      "Parkinson rigidity — continuous throughout day, not morning-specific",
      "Fibromyalgia — diffuse stiffness without synovitis or prolonged inflammatory duration",
    ],
  },
  {
    id: "hemianopsia",
    name: "Hemianopsia",
    etymology: "Greek hemi = half + an- = without + opsis = vision",
    aliases: [
      "hemianopsia",
      "hemianopia",
      "visual field defect",
      "visual field loss",
      "homonymous hemianopsia",
      "homonymous hemianopia",
      "bitemporal hemianopsia",
      "bitemporal hemianopia",
      "bitemporal visual field defect",
      "contralateral hemianopsia",
      "quadrantanopia",
      "quadrantanopsia",
    ],
    definition:
      "Loss of vision in one half of the visual field of each eye — pattern (bitemporal vs homonymous) localizes the lesion along the visual pathway from retina to occipital cortex.",
    mechanism:
      "Nasal retinal fibers cross at the optic chiasm (carry temporal visual fields); lesions anterior to chiasm cause monocular defects; chiasmal compression causes bitemporal loss; post-chiasmal lesions (tract, radiation, cortex) cause homonymous hemianopia (same side of visual field lost in both eyes).",
    thinkOf: [
      "Pituitary macroadenoma / prolactinoma — bitemporal hemianopia (chiasm compression)",
      "Craniopharyngioma — suprasellar mass, bitemporal fields",
      "MCA stroke — contralateral homonymous hemianopia (often with face/arm weakness)",
      "PCA stroke — homonymous hemianopia with macular sparing",
      "Optic tract lesion — homonymous hemianopia + contralateral relative afferent pupillary defect",
      "Meyer's loop (temporal lobe) lesion — superior quadrantanopia ('pie in the sky')",
      "Parietal optic radiation — inferior quadrantanopia",
    ],
    pairWith: [
      "Galactorrhea + amenorrhea + bitemporal fields → macroprolactinoma",
      "Headache + bitemporal hemianopia → pituitary apoplexy or macroadenoma",
      "Homonymous hemianopia + hemiparesis → MCA territory stroke",
      "Homonymous hemianopia + macular sparing → PCA (occipital) infarct",
      "Papilledema + headache → raised ICP; field loss pattern still localizes lesion",
    ],
    distinguishFrom: [
      "Monocular vision loss — pre-chiasmal (optic nerve) disease, not hemianopsia",
      "Bitemporal — chiasm (pituitary tumor classic on boards)",
      "Homonymous — post-chiasmal (stroke, tumor); lesion is contralateral to field loss",
      "Quadrantanopia — partial homonymous defect; temporal lobe (upper) vs parietal (lower)",
      "Central scotoma — macular or optic nerve disease, not hemianopic pattern",
    ],
  },
  {
    id: "hemiplegia",
    name: "Hemiplegia",
    etymology: "Greek hemi = half + plege = stroke/paralysis",
    aliases: [
      "hemiplegia",
      "hemiplegic",
      "contralateral hemiplegia",
      "one-sided paralysis",
      "unilateral paralysis",
    ],
    definition:
      "Complete or near-complete loss of voluntary motor function on one side of the body — face, arm, and leg — reflecting contralateral upper motor neuron (corticospinal) pathway injury above the spinal cord.",
    mechanism:
      "Lesion of motor cortex, internal capsule, brainstem corticospinal tract, or rarely high cervical cord → interruption of UMN input to contralateral limbs and lower face → flaccid paralysis acutely, then spasticity, hyperreflexia, and Babinski sign; severity ranges from hemiparesis (weakness) to hemiplegia (no movement).",
    thinkOf: [
      "Ischemic or hemorrhagic stroke — MCA territory most common (face + arm > leg)",
      "Internal capsule lacunar stroke — pure motor hemiplegia",
      "Brain tumor or abscess compressing motor pathways",
      "Migraine with aura (hemiplegic migraine — diagnosis of exclusion)",
      "Postictal Todd paralysis after focal seizure",
    ],
    pairWith: [
      "Sudden hemiplegia + facial droop + aphasia → left MCA stroke (dominant hemisphere)",
      "Hemiplegia + homonymous hemianopsia → contralateral MCA or PCA stroke",
      "Pure motor hemiplegia + hypertension + small deep stroke on CT → lacunar infarct",
      "Hemiplegia in child with prior perinatal insult → cerebral palsy (hemiplegic subtype)",
      "Head trauma + unilateral weakness → epidural/subdural hematoma until excluded",
    ],
    distinguishFrom: [
      "Hemiparesis — weakness without complete paralysis; same localization principles",
      "Monoplegia — one limb only, not entire hemibody",
      "Paraplegia — both legs, spinal cord lesion below brainstem",
      "Quadriplegia — all four limbs, cervical cord or bilateral brainstem injury",
      "Functional (conversion) weakness — inconsistent exam, give-way strength, normal imaging",
      "Peripheral nerve lesion — segmental deficit, LMN pattern (fasciculations, atrophy), not hemibody UMN pattern",
    ],
  },
  {
    id: "nodular-lymphangitis",
    name: "Nodular Lymphangitis",
    etymology: "Latin nodulus = little knot + Latin lympha = clear fluid + Greek angeion = vessel + -itis = inflammation",
    aliases: [
      "nodular lymphangitis",
      "nodular lymphangitis pattern",
      "sporotrichoid spread",
      "sporotrichoid pattern",
      "sporotrichoid lymphangitis",
      "lymphocutaneous spread",
      "ascending nodular lesions",
      "linear nodular lesions along arm",
    ],
    definition:
      "Subacute chain of erythematous to violaceous subcutaneous nodules along the course of lymphatic drainage from a distal inoculation site — reflects lymphatic spread of infection or inflammation (sporotrichoid pattern).",
    mechanism:
      "Organism introduced through skin break at distal site (thorn, scratch) → infects regional lymphatics → granulomatous nodules form sequentially along proximal lymphatic channels toward regional nodes.",
    thinkOf: [
      "Sporotrichosis (Sporothrix schenckii) — rose thorn, sphagnum moss, gardening; classic boards cause",
      "Nocardiosis — soil/trauma; weakly acid-fast filaments; immunocompromised",
      "Mycobacterium marinum — fish tank/aquarium exposure; granulomatous hand lesions",
      "Leishmania braziliensis — New World cutaneous leishmaniasis with lymphatic spread",
      "Other rare fungi or atypical mycobacteria",
    ],
    pairWith: [
      "Gardening/rose thorn + arm nodules in a line → sporotrichosis",
      "SSKI or itraconazole response → supports sporotrichosis treatment",
      "Acid-fast branching filaments on stain → Nocardia over Sporothrix",
      "Aquarium worker + hand nodules → M. marinum",
      "Culture grows cigar-shaped yeast → Sporothrix schenckii",
    ],
    distinguishFrom: [
      "Cellulitis — diffuse acute erythema and warmth without discrete nodular lymphatic chain",
      "Lymphangitis (acute bacterial) — tender red streaks from wound (Streptococcus); acute not nodular",
      "Lymphadenopathy alone — enlarged nodes without intervening subcutaneous nodules along tract",
      "Dermatophyte ringworm — annular scaly plaque, not lymphatic nodule chain",
      "Thrombophlebitis — follows vein not lymphatic; cord-like tender vein",
    ],
  },
  {
    id: "purpura",
    name: "Purpura",
    etymology: "Latin purpura = purple",
    aliases: [
      "purpura",
      "purpuras",
      "palpable purpura",
      "non-blanching purpura",
      "cutaneous purpura",
    ],
    definition:
      "Non-blanching purple or red discoloration of skin or mucosa from extravasation of blood into the dermis or submucosa; lesions are typically 3–10 mm (larger than petechiae, smaller than ecchymoses) and may be palpable when vasculitis is present.",
    mechanism:
      "Hemorrhage through damaged or insufficient platelet/coagulation support, or inflamed vessel walls — from thrombocytopenia, platelet dysfunction, coagulopathy, or small-vessel vasculitis increasing vascular permeability.",
    thinkOf: [
      "Immune thrombocytopenic purpura (ITP) — isolated thrombocytopenia",
      "Thrombotic thrombocytopenic purpura (TTP) — pentad: fever, neuro, renal, thrombocytopenia, MAHA",
      "Disseminated intravascular coagulation (DIC) — widespread coagulation with consumption",
      "Meningococcemia — rapid toxic illness with petechiae/purpura",
      "Henoch-Schönlein purpura (IgA vasculitis) — palpable purpura on buttocks/legs in children",
      "Leukocytoclastic vasculitis — palpable purpura, often lower extremities",
      "Vitamin C deficiency (scurvy) — perifollicular petechiae/purpura, bleeding gums",
      "Amyloidosis — periorbital purpura with minor trauma ('raccoon eyes')",
    ],
    pairWith: [
      "Fever + hypotension + rapid progression → meningococcemia / Waterhouse-Friderichsen",
      "Palpable purpura on legs/buttocks + abdominal pain + hematuria → Henoch-Schönlein purpura",
      "Isolated thrombocytopenia + mucosal bleeding → ITP",
      "Schistocytes + ↑ LDH + renal dysfunction + fever → TTP",
      "Prolonged PT/PTT + low fibrinogen + ↑ D-dimer → DIC",
      "Recent drug exposure + palpable purpura → drug-induced leukocytoclastic vasculitis",
      "Gingival bleeding + corkscrew hairs + poor wound healing → scurvy",
    ],
    distinguishFrom: [
      "Petechiae — smaller (typically <3 mm) pinpoint hemorrhages; same non-blanching mechanism",
      "Ecchymosis — larger (>1 cm) bruise from trauma or coagulopathy",
      "Erythema — blanches with pressure; vasodilation not hemorrhage",
      "Telangiectasia — blanching or persistent dilated vessels, not hemorrhage",
      "Livedo reticularis — netlike vascular pattern, usually blanching",
    ],
  },
  {
    id: "nuchal-rigidity",
    name: "Nuchal Rigidity",
    etymology: "Latin nucha = nape + Latin rigidus = stiff",
    aliases: [
      "nuchal rigidity",
      "neck stiffness",
      "stiff neck",
      "meningeal neck stiffness",
      "cervical rigidity",
    ],
    definition:
      "Resistance to passive flexion of the neck due to irritation or inflammation of the meninges — a classic sign of meningeal irritation, though not specific to meningitis alone.",
    mechanism:
      "Inflammation of pain-sensitive meninges and stretching of spinal nerve roots during neck flexion → reflex spasm of neck extensor muscles and pain limiting flexion.",
    thinkOf: [
      "Bacterial meningitis",
      "Viral (aseptic) meningitis",
      "Subarachnoid hemorrhage",
      "Encephalitis with meningeal involvement",
      "Cervical spine pathology (less acute infectious picture)",
    ],
    pairWith: [
      "Fever + headache + nuchal rigidity → meningitis until proven otherwise",
      "Thunderclap headache + neck stiffness → subarachnoid hemorrhage",
      "Photophobia + Kernig/Brudzinski signs → meningeal irritation",
      "Altered mental status + fever → consider encephalitis or meningitis",
    ],
    distinguishFrom: [
      "Cervical muscle spasm — trauma or strain; no fever/photophobia cluster",
      "Torticollis — head tilt from SCM spasm; different exam maneuver",
      "Meningism without meningitis — neck pain with normal CSF",
    ],
  },
  {
    id: "kernig-sign",
    name: "Kernig Sign",
    etymology: "eponym: Vladimir Kernig + sign = physical exam finding",
    aliases: [
      "kernig sign",
      "kernig's sign",
      "kernigs sign",
      "positive kernig sign",
    ],
    definition:
      "Physical exam maneuver for meningeal irritation — pain or resistance when the thigh is flexed at the hip and the knee is passively extended with the patient supine.",
    mechanism:
      "Stretching of inflamed meninges and lumbar nerve roots during knee extension with hip flexion reproduces pain and hamstring spasm.",
    thinkOf: [
      "Meningitis (bacterial or viral)",
      "Subarachnoid hemorrhage",
      "Meningeal carcinomatosis",
    ],
    pairWith: [
      "Fever + headache + Kernig sign → meningitis workup including LP",
      "Brudzinski sign positive together → supports meningeal irritation",
      "Normal CSF despite positive Kernig → meningism from noninfectious cause",
    ],
    distinguishFrom: [
      "Brudzinski sign — passive neck flexion causes hip/knee flexion",
      "Straight leg raise (Lasègue) — sciatica from lumbosacral radiculopathy, not meningitis",
      "Hamstring tightness alone — no systemic infectious signs",
    ],
  },
  {
    id: "brudzinski-sign",
    name: "Brudzinski Sign",
    etymology: "eponym: Josef Brudzinski + sign = physical exam finding",
    aliases: [
      "brudzinski sign",
      "brudzinski's sign",
      "brudzinskis sign",
      "positive brudzinski sign",
    ],
    definition:
      "Physical exam sign of meningeal irritation — passive flexion of the neck causes involuntary flexion of the hips and knees.",
    mechanism:
      "Meningeal inflammation lowers the threshold for reflex hip and knee flexion when cervical nerve roots are stretched by neck flexion.",
    thinkOf: [
      "Meningitis",
      "Subarachnoid hemorrhage",
      "Meningeal inflammation from any cause",
    ],
    pairWith: [
      "Fever + headache + Brudzinski sign → emergent meningitis evaluation",
      "Kernig sign positive → strengthens meningeal irritation",
      "Petechial rash + meningeal signs → meningococcemia",
    ],
    distinguishFrom: [
      "Kernig sign — knee extension pain with hip flexed",
      "Voluntary hip flexion from discomfort — not involuntary reflex",
      "Neck pain from cervical pathology without meningeal inflammation",
    ],
  },
  {
    id: "petechiae",
    name: "Petechiae",
    etymology: "Italian petecchia = small spot",
    aliases: [
      "petechiae",
      "petechia",
      "petechial rash",
      "petechial rashes",
      "petecchae",
    ],
    definition:
      "Non-blanching pinpoint (typically <3 mm) hemorrhages into the skin or mucosa from extravasation of red blood cells through vessel walls.",
    mechanism:
      "Platelet deficiency or dysfunction, coagulopathy, or increased capillary fragility/permeability allows red cells to leak into the dermis — does not blanch with pressure unlike erythema.",
    thinkOf: [
      "Thrombocytopenia — dengue, chikungunya, ITP, TTP, HIT, DIC",
      "Meningococcemia — rapid toxic illness with petechiae/purpura",
      "Rocky Mountain spotted fever — petechiae in severe/late disease",
      "Immune thrombocytopenic purpura (ITP) — isolated low platelets",
      "Scurvy (vitamin C deficiency) — perifollicular petechiae, bleeding gums",
      "Child abuse — patterned or inconsistent-location bruising/petechiae",
    ],
    pairWith: [
      "Fever + hypotension + rapid progression → meningococcemia",
      "Tick exposure + centripetal rash → RMSF (petechiae = severe)",
      "Travel to tropics + fever + thrombocytopenia → dengue > chikungunya",
      "Isolated thrombocytopenia + mucosal bleeding → ITP",
      "Positive tourniquet test → dengue",
    ],
    distinguishFrom: [
      "Purpura — larger (3–10 mm) non-blanching lesions",
      "Ecchymosis — bruise >1 cm, often traumatic",
      "Erythema — blanches with pressure; vasodilation not hemorrhage",
      "Telangiectasia — dilated vessels, not hemorrhage",
    ],
  },
  {
    id: "maculopapular-rash",
    name: "Maculopapular Rash",
    etymology: "Latin macula = spot + papula = pimple + rash = skin eruption",
    aliases: [
      "maculopapular rash",
      "maculopapular rashes",
      "maculopapular eruption",
      "maculopapular exanthem",
      "maculopapular",
      "morbilliform rash",
      "morbilliform eruption",
    ],
    definition:
      "Blanching erythematous eruption composed of both flat macules and raised papules — a common pattern in viral exanthems, drug reactions, and some bacterial illnesses.",
    mechanism:
      "Immune-mediated or direct viral injury to dermal capillaries and keratinocytes produces perivascular inflammation and erythema with variable papular component; distribution and timing narrow the differential.",
    thinkOf: [
      "Chikungunya fever — rash ~2–5 days after fever; often trunk/extremities",
      "Dengue fever — maculopapular rash days 4–7; recovery 'white islands in red sea'",
      "Measles (rubeola) — cephalocaudal spread after Koplik spots",
      "Rubella — face to body; postauricular lymphadenopathy",
      "Drug eruption — temporal relation to new medication",
      "Secondary syphilis — diffuse rash including palms/soles",
      "Rocky Mountain spotted fever — wrists/ankles → trunk",
      "Zika virus — pruritic rash with conjunctivitis",
    ],
    pairWith: [
      "Koplik spots + 3 C's prodrome → measles",
      "Incapacitating symmetric arthralgia + travel → chikungunya",
      "Thrombocytopenia + tourniquet test + tropics → dengue",
      "Tick bite + fever + centripetal spread → RMSF",
      "New drug within 1–2 weeks → drug eruption",
      "Conjunctivitis + mild fever + pregnancy exposure → Zika",
    ],
    distinguishFrom: [
      "Urticaria — transient wheals, intensely pruritic, individual lesions <24 h",
      "Vesicular rash — varicella, HSV, hand-foot-mouth",
      "Petechial/purpuric rash — non-blanching hemorrhage, not simple maculopapular erythema",
      "Erythema migrans — expanding annular lesion at tick bite (Lyme)",
    ],
  },
  {
    id: "annular-lesion",
    name: "Annular Lesion",
    etymology: "Latin annulus = little ring",
    aliases: [
      "annular lesion",
      "annular rash",
      "annular plaque",
      "ring-shaped lesion",
      "ring shaped lesion",
      "ring lesion",
      "circular rash",
    ],
    definition:
      "Ring-shaped lesion with central clearing or relative central fading; may be macular, papular, plaque-like, or scaly.",
    mechanism:
      "Peripheral spread of inflammation or infection with central resolution creates a ring; scale, palpability, and exposure narrow cause.",
    thinkOf: [
      "Tinea corporis — annular scaly plaque with central clearing",
      "Erythema migrans — expanding annular Lyme lesion",
      "Granuloma annulare — firm smooth annular papules/plaques",
      "Erythema multiforme — target/annular lesions",
      "Subacute cutaneous lupus — annular photosensitive plaques",
    ],
    pairWith: [
      "Annular scale + KOH hyphae → tinea corporis",
      "Expanding annular lesion after tick exposure → Lyme disease",
      "Smooth annular papules without scale → granuloma annulare",
      "Photosensitive annular plaques + anti-Ro/SSA → subacute cutaneous lupus",
    ],
    distinguishFrom: [
      "Target lesion — concentric rings with dusky center",
      "Serpiginous lesion — snake-like/wavy border rather than closed ring",
      "Reticular lesion — netlike/lacy pattern",
    ],
  },
  {
    id: "target-lesion",
    name: "Target Lesion",
    etymology: "target = circular mark + lesion = injury",
    aliases: [
      "target lesion",
      "target lesions",
      "iris lesion",
      "iris lesions",
      "targetoid lesion",
      "targetoid rash",
    ],
    definition:
      "Concentric lesion with at least three zones: dusky or necrotic center, paler edematous ring, and outer erythematous rim.",
    mechanism:
      "Interface dermatitis and keratinocyte apoptosis create central injury while surrounding inflammation forms concentric rings.",
    thinkOf: [
      "Erythema multiforme — HSV-triggered, acral target lesions",
      "Stevens-Johnson syndrome/TEN — atypical targetoid lesions plus mucosal necrosis",
      "Fixed drug eruption — recurrent targetoid plaque at same site",
      "Lyme erythema migrans — can be target-like but usually expanding annular lesion",
    ],
    pairWith: [
      "Acral target lesions after HSV → erythema multiforme",
      "Mucosal erosions + skin pain + drug exposure → SJS/TEN",
      "Same site after medication exposure → fixed drug eruption",
      "Tick exposure + expanding lesion → erythema migrans, not classic EM target",
    ],
    distinguishFrom: [
      "Annular lesion — ring-shaped, often central clearing but not three-zone target",
      "Urticaria — transient wheals, not fixed target lesions",
      "Purpura — non-blanching hemorrhage without concentric zones",
    ],
    pediatrics:
      "Erythema multiforme in children is often HSV- or Mycoplasma-associated; mucosal involvement and skin pain should raise SJS/TEN concern.",
  },
  {
    id: "reticular-lesion",
    name: "Reticular Lesion",
    etymology: "Latin rete = net + -icular = small/related",
    aliases: [
      "reticular lesion",
      "reticular rash",
      "retiform rash",
      "netlike rash",
      "net-like rash",
      "lacy rash",
      "livedo reticularis",
    ],
    definition:
      "Netlike or lacy vascular skin pattern, often violaceous or erythematous, produced by uneven blood flow through cutaneous vascular plexuses.",
    mechanism:
      "Vasospasm, vascular obstruction, or inflammation reduces flow in portions of the dermal plexus while adjacent vessels remain perfused, creating a netlike pattern.",
    thinkOf: [
      "Livedo reticularis — cold-induced or idiopathic",
      "Antiphospholipid syndrome — livedo with thrombosis/recurrent pregnancy loss",
      "Polyarteritis nodosa or other vasculitis",
      "Cholesterol emboli — livedo reticularis with renal dysfunction/eosinophilia",
      "Erythema infectiosum — lacy rash from parvovirus B19",
    ],
    pairWith: [
      "Livedo + thrombosis/miscarriages → antiphospholipid syndrome",
      "Livedo + hypertension + neuropathy → polyarteritis nodosa",
      "After vascular procedure + blue toes + eosinophilia → cholesterol emboli",
      "Slapped cheek then lacy body rash in child → parvovirus B19",
    ],
    distinguishFrom: [
      "Annular lesion — ring-shaped, not netlike",
      "Serpiginous lesion — winding track or border",
      "Telangiectasia — discrete dilated superficial vessels",
    ],
    pediatrics:
      "Parvovirus B19 causes slapped-cheek facial erythema followed by a lacy reticular trunk/extremity rash; aplastic crisis risk in sickle cell disease.",
  },
  {
    id: "serpiginous-lesion",
    name: "Serpiginous Lesion",
    etymology: "Latin serpere = to creep",
    aliases: [
      "serpiginous lesion",
      "serpiginous rash",
      "serpiginous track",
      "serpiginous eruption",
      "snake-like lesion",
      "wavy lesion",
      "migrating track",
    ],
    definition:
      "Wavy, creeping, snake-like lesion or border that may migrate over time; commonly describes parasite tracks or advancing inflammatory edges.",
    mechanism:
      "A moving organism, advancing inflammatory front, or irregular peripheral extension leaves a curving trail or border.",
    thinkOf: [
      "Cutaneous larva migrans — hookworm larvae after barefoot sand/soil exposure",
      "Scabies burrows — short wavy tracks in finger webs/wrists",
      "Tinea corporis — serpiginous scaly active border",
      "Erythema gyratum repens — rare paraneoplastic wood-grain pattern",
      "Creeping eruption from other parasites",
    ],
    pairWith: [
      "Barefoot beach exposure + intensely pruritic migrating track → cutaneous larva migrans",
      "Finger-web burrows + nocturnal pruritus → scabies",
      "Scaly advancing edge + central clearing → tinea corporis",
      "Rapidly migrating concentric wood-grain rash → erythema gyratum repens",
    ],
    distinguishFrom: [
      "Burrow — specific superficial tunnel, usually scabies",
      "Annular lesion — ring-shaped; serpiginous is winding/creeping",
      "Lymphangitis — straight or branching red streak along lymphatics",
    ],
    pediatrics:
      "Cutaneous larva migrans is common in children after barefoot play on contaminated sand/soil; lesion migration is the clue.",
  },
  {
    id: "thrombocytopenia",
    name: "Thrombocytopenia",
    etymology: "Greek thrombos = clot + kytos = cell + penia = deficiency",
    aliases: [
      "thrombocytopenia",
      "thrombocytopenias",
      "low platelets",
      "low platelet count",
      "decreased platelets",
      "plt low",
    ],
    definition:
      "Platelet count below the normal reference range (~150,000–400,000/µL), increasing bleeding risk from mucocutaneous hemorrhage to life-threatening intracranial or GI bleeding depending on severity and cause.",
    mechanism:
      "Decreased production (marrow failure/infiltration), increased destruction (immune or consumptive), or sequestration (hypersplenism) reduce circulating platelets; severity and associated findings define the etiology.",
    thinkOf: [
      "Dengue fever — marked thrombocytopenia with hemorrhagic risk",
      "Chikungunya fever — mild thrombocytopenia (usually less severe than dengue)",
      "ITP — isolated immune-mediated platelet destruction",
      "TTP/HUS — microangiopathic hemolysis + thrombocytopenia",
      "HIT — 5–10 days after heparin + thrombosis",
      "DIC — widespread consumption with coagulopathy",
      "Bone marrow failure — leukemia, aplastic anemia, chemotherapy",
      "Hypersplenism — cirrhosis, portal hypertension",
    ],
    pairWith: [
      "Schistocytes + ↑ LDH + fever → TTP",
      "Travel + fever + petechiae + tourniquet test → dengue",
      "Symmetric arthralgia + mild plt drop + tropics → chikungunya",
      "Isolated plt low + mucosal bleeding → ITP",
      "Heparin exposure + plt fall + clot → HIT",
      "Pancytopenia + blasts → leukemia",
    ],
    distinguishFrom: [
      "Thrombocytosis — elevated platelets; reactive or myeloproliferative",
      "Platelet dysfunction (e.g., uremia, aspirin) — bleeding with normal count",
      "Coagulopathy (↓ fibrinogen, ↑ PT/aPTT) — DIC or liver disease pattern",
    ],
  },
  {
    id: "coagulopathy",
    name: "Coagulopathy",
    etymology: "Latin coagulare = clot + Greek pathos = suffering/disease",
    aliases: [
      "coagulopathy",
      "coagulopathies",
      "bleeding diathesis",
      "clotting disorder",
      "coagulation disorder",
      "coagulation defect",
    ],
    definition:
      "Abnormal hemostasis from impaired platelet function, deficient or dysfunctional clotting factors, excessive fibrinolysis, or pathologic consumption — manifesting as easy bruising, mucocutaneous bleeding, or spontaneous hemorrhage into tissues.",
    mechanism:
      "Failure at any hemostasis step — vascular injury response, platelet plug formation, or coagulation cascade/fibrin stabilization — prolongs bleeding; may reflect production defect (liver disease, vitamin K deficiency), inherited factor deficiency (hemophilia), platelet disorder, or consumptive process (DIC).",
    thinkOf: [
      "DIC — consumptive coagulopathy with ↓ platelets, ↓ fibrinogen, ↑ PT/aPTT, ↑ D-dimer",
      "Liver cirrhosis — ↓ synthesis of clotting factors; prolonged PT/aPTT; fibrinogen often preserved early",
      "Vitamin K deficiency — ↓ factors II, VII, IX, X; prolonged PT disproportionately",
      "Hemophilia A (factor VIII) or B (factor IX) — deep tissue/joint bleeding; isolated ↑ aPTT",
      "von Willebrand disease — mucocutaneous bleeding; abnormal ristocetin cofactor",
      "Uremia — platelet dysfunction with normal platelet count",
      "Anticoagulation (warfarin, heparin, DOACs) — iatrogenic coagulopathy",
      "APL — promyelocyte granules trigger DIC-type coagulopathy",
    ],
    pairWith: [
      "↓ Platelets + ↓ fibrinogen + ↑ D-dimer + sick patient → DIC",
      "↑ PT/aPTT + ↓ albumin + ascites → cirrhosis",
      "↑ PT only + malnutrition/antibiotics → vitamin K deficiency",
      "Isolated ↑ aPTT + hemarthrosis → hemophilia",
      "Mucosal bleeding + normal platelet count → vWD or uremia",
      "Oozing from IV sites + sepsis → DIC",
    ],
    distinguishFrom: [
      "Thrombocytopenia alone — low platelets without factor consumption or prolonged PT/aPTT",
      "Platelet dysfunction (uremia, aspirin) — bleeding with normal platelet count and normal PT/aPTT",
      "Thrombophilia — hypercoagulable state, not coagulopathy",
      "Vasculitis/purpura — vessel wall inflammation, not primary coagulation factor defect",
    ],
  },
  {
    id: "dysmorphic-facies",
    name: "Dysmorphic Facies",
    etymology: "Greek dys = abnormal + morphe = form + Latin facies = face",
    aliases: [
      "dysmorphic facies",
      "dysmorphic facial features",
      "distinctive facies",
      "characteristic facies",
      "facial dysmorphism",
      "unusual facial features",
    ],
    definition:
      "Congenital or acquired deviation from typical facial morphology — a pattern of structural anomalies (eyes, nose, mouth, ears, skull shape) that suggests an underlying genetic, chromosomal, teratogenic, or syndromic disorder.",
    mechanism:
      "Disrupted embryonic craniofacial development from chromosomal aneuploidy, gene deletion/mutation, or teratogen exposure alters growth of facial bones, soft tissue, and midline structures; specific combinations of features narrow the differential.",
    thinkOf: [
      "Down syndrome (trisomy 21) — flat facies, upslanting palpebral fissures, epicanthal folds, flat nasal bridge",
      "Fetal alcohol syndrome — short palpebral fissures, smooth philtrum, thin upper lip vermillion",
      "Williams syndrome — elfin facies, wide mouth, periorbital fullness, supravalvular aortic stenosis",
      "Noonan syndrome — hypertelorism, low-set ears, webbed neck, short stature",
      "DiGeorge syndrome (22q11 deletion) — hooded eyelids, bulbous nose, cleft palate, conotruncal defects",
      "Edwards syndrome (trisomy 18) — low-set ears, micrognathia, clenched fists, rocker-bottom feet",
      "Mucopolysaccharidoses (Hurler) — coarse facies, corneal clouding, skeletal dysplasia",
      "Cushing syndrome — moon facies (acquired, from cortisol excess)",
    ],
    pairWith: [
      "Single transverse palmar crease + hypotonia → Down syndrome",
      "Smooth philtrum + short palpebral fissures + microcephaly → fetal alcohol syndrome",
      "Elfin facies + SVAS murmur + hypercalcemia in infancy → Williams syndrome",
      "Webbed neck + short stature + cardiac defect → Turner (♀) or Noonan",
      "Cleft palate + hypocalcemia + conotruncal anomaly → DiGeorge",
      "Coarse facies + hepatosplenomegaly + developmental delay → lysosomal storage disease",
      "Moon facies + striae + central obesity → Cushing syndrome",
    ],
    distinguishFrom: [
      "Normal ethnic/familial facial variation — no associated congenital anomalies or delay",
      "Acquired facial changes — trauma, surgery, or edema without syndromic pattern",
      "Prematurity-related appearance — resolves with growth; not true dysmorphism",
      "Specific named facies (elfin, moon, coarse) — subtype patterns within dysmorphic facies",
    ],
  },
  {
    id: "epicanthal-folds",
    name: "Epicanthal Folds",
    etymology: "Greek epi = upon + kanthos = corner of eye + fold = skin crease",
    aliases: [
      "epicanthal folds",
      "epicanthal fold",
      "epicanthus",
      "inner canthal folds",
      "medial epicanthal folds",
    ],
    definition:
      "Skin folds of the upper eyelid that partially cover the medial canthus, extending from nose toward the inner corner of the eye.",
    mechanism:
      "Variations in orbicularis oculi and medial canthal tendon development create a fold that can be normal (especially in Asian populations) or syndromic when combined with other dysmorphic features.",
    thinkOf: [
      "Down syndrome (trisomy 21)",
      "Fetal alcohol syndrome",
      "Potter sequence / oligohydramnios facies",
      "Normal variant in Asian ancestry",
      "Zellweger syndrome and other peroxisomal disorders",
    ],
    pairWith: [
      "Upslanting palpebral fissures + flat nasal bridge + hypotonia → Down syndrome",
      "Smooth philtrum + short palpebral fissures → fetal alcohol syndrome",
      "Oligohydramnios + pulmonary hypoplasia facies → Potter sequence",
      "Isolated folds in Asian child without other anomalies → normal ethnic variant",
    ],
    distinguishFrom: [
      "Ptosis — drooping eyelid margin, not medial skin fold alone",
      "Telecanthus — increased intercanthal distance; may coexist but distinct measurement",
      "Blepharophimosis — narrow palpebral fissures from eyelid malformation",
    ],
    pediatrics:
      "Common normal finding in infants of Asian descent; in non-Asian infants, pair with other dysmorphic features to screen for trisomy 21 and teratogenic syndromes.",
  },
  {
    id: "single-palmar-crease",
    name: "Single Palmar Crease",
    etymology: "Latin singulus = one + palma = palm + crease = skin fold",
    aliases: [
      "single palmar crease",
      "single palmar creases",
      "single transverse palmar crease",
      "simian crease",
      "simian line",
      "simian creases",
      "single simian crease",
    ],
    definition:
      "One transverse crease across the palm formed by fusion of proximal and distal palmar flexion lines, instead of the usual two or three creases.",
    mechanism:
      "Altered dermatoglyphic development during fetal hand growth; when isolated may be normal (~4% population), but when paired with hypotonia and dysmorphic facies suggests chromosomal aneuploidy.",
    thinkOf: [
      "Down syndrome (trisomy 21)",
      "Fetal alcohol syndrome",
      "Normal familial variant (isolated finding)",
      "Other chromosomal disorders (Edwards, Patau less commonly emphasized)",
    ],
    pairWith: [
      "Hypotonia + upslanting fissures + epicanthal folds → Down syndrome",
      "Growth restriction + facial dysmorphism → fetal alcohol syndrome",
      "Isolated crease in healthy child with normal development → benign variant",
      "Congenital heart disease + dysmorphic facies → trisomy 21 workup",
    ],
    distinguishFrom: [
      "Sydney line — extra transverse crease near hypothenar eminence, not single crease",
      "Clinodactyly — incurved fifth finger, separate hand finding",
      "Palmar erythema — vascular redness, not crease pattern",
    ],
    pediatrics:
      "Seen in ~50% of Down syndrome infants but also in normal children; interpret in context of tone, facies, and cardiac exam — not diagnostic alone.",
  },
  {
    id: "ecchymosis",
    name: "Ecchymosis",
    etymology: "Greek ek = out + chymos = juice/fluid",
    aliases: [
      "ecchymosis",
      "ecchymoses",
      "bruise",
      "bruising",
      "large bruise",
      "cutaneous ecchymosis",
    ],
    definition:
      "Non-blanching macular discoloration from blood extravasation into skin or mucosa; larger than petechiae or purpura.",
    mechanism:
      "Trauma, platelet problems, coagulation-factor defects, vascular fragility, or vasculitis allow RBCs to leak into tissues; hemoglobin breakdown changes color over time.",
    thinkOf: [
      "Trauma",
      "Thrombocytopenia or platelet dysfunction",
      "Coagulation factor deficiency (hemophilia, liver disease, warfarin)",
      "Vitamin C deficiency (scurvy)",
      "DIC or severe sepsis",
      "Child abuse when pattern/location is suspicious",
    ],
    pairWith: [
      "Mucosal bleeding/petechiae → platelet disorder or vWD",
      "Deep tissue bleeding/hemarthrosis → coagulation factor deficiency",
      "Perifollicular hemorrhage + corkscrew hairs → vitamin C deficiency",
      "Prolonged PT/aPTT + low fibrinogen → DIC",
      "Different ages of bruises in child → nonaccidental trauma concern",
    ],
    distinguishFrom: [
      "Petechiae — pinpoint non-blanching lesions <2 mm",
      "Purpura — non-blanching lesions ~2 mm to 1 cm",
      "Hematoma — palpable blood collection",
      "Erythema — blanching redness from vasodilation, not RBC extravasation",
    ],
  },
  {
    id: "xerosis",
    name: "Xerosis (dry skin)",
    etymology: "Greek xeros = dry + -osis = condition",
    aliases: ["xerosis", "dry skin", "xeroderma"],
    definition:
      "Abnormally dry, rough, or scaly skin from impaired stratum corneum hydration and barrier function.",
    mechanism:
      "Loss of water, lipids, or filaggrin-dependent natural moisturizing factors increases transepidermal water loss and causes scale/fissuring.",
    thinkOf: [
      "Atopic dermatitis",
      "Ichthyosis vulgaris",
      "Hypothyroidism",
      "Chronic kidney disease / uremia",
      "Aging, low humidity, frequent bathing",
      "Vitamin A deficiency (follicular hyperkeratosis)",
    ],
    pairWith: [
      "Pruritus + flexural eczema → atopic dermatitis",
      "Cold intolerance + bradycardia → hypothyroidism",
      "Uremia + pruritus → CKD",
      "Night blindness + follicular hyperkeratosis → vitamin A deficiency",
    ],
    distinguishFrom: [
      "Xerostomia — dry mouth, salivary dysfunction",
      "Keratoconjunctivitis sicca — dry eyes, lacrimal dysfunction",
      "Scale from psoriasis — inflammatory plaques, not simple dryness",
    ],
  },
  {
    id: "xerostomia",
    name: "Xerostomia (dry mouth)",
    etymology: "Greek xeros = dry + stoma = mouth",
    aliases: ["xerostomia", "dry mouth", "oral dryness"],
    definition:
      "Subjective dry mouth from reduced salivary flow or altered saliva composition.",
    mechanism:
      "Salivary gland hypofunction reduces lubrication, antimicrobial peptides, bicarbonate buffering, and enamel remineralization.",
    thinkOf: [
      "Sjögren syndrome",
      "Anticholinergic medications",
      "Head/neck radiation",
      "Dehydration",
      "Diabetes mellitus",
    ],
    pairWith: [
      "Dry eyes + parotid enlargement → Sjögren syndrome",
      "Dental caries + difficulty swallowing dry food → chronic salivary hypofunction",
      "Urinary retention + mydriasis → anticholinergic toxicity",
      "Polyuria/polydipsia → diabetes mellitus",
    ],
    distinguishFrom: [
      "Dry mucous membranes — broader dehydration exam finding",
      "Aphthous ulcer — painful oral ulcer, not global dryness",
      "Sialadenitis — painful salivary gland inflammation/swelling",
    ],
  },
  {
    id: "leukocytosis",
    name: "Leukocytosis",
    etymology: "Greek leukos = white + kytos = cell + -osis = condition",
    aliases: ["leukocytosis", "elevated wbc", "high wbc", "increased white blood cells"],
    definition:
      "Increased total white blood cell count above the age-adjusted reference range.",
    mechanism:
      "Bone marrow release, demargination, reduced egress, or malignant proliferation increases circulating leukocytes.",
    thinkOf: [
      "Acute infection or inflammation",
      "Corticosteroids / stress demargination",
      "Tissue necrosis",
      "Leukemoid reaction",
      "Leukemia / myeloproliferative neoplasm",
    ],
    pairWith: [
      "Left shift + fever → bacterial infection",
      "Very high WBC + low LAP + basophilia → CML",
      "Steroid exposure + mature neutrophilia → demargination",
      "Atypical lymphocytes → EBV/CMV",
    ],
    distinguishFrom: [
      "Neutrophilia — increased neutrophil count specifically",
      "Leukemoid reaction — reactive high WBC with high LAP",
      "Leukemia — malignant clonal leukocytosis with blasts or lineage clues",
    ],
  },
  {
    id: "neutrophilia",
    name: "Neutrophilia",
    etymology: "Latin neuter = neither + Greek philos = loving + -ia = condition",
    aliases: ["neutrophilia", "high neutrophils", "elevated neutrophils", "increased neutrophils"],
    definition:
      "Increased absolute neutrophil count, usually reflecting acute inflammation, infection, stress, or myeloid proliferation.",
    mechanism:
      "G-CSF/IL-6-driven marrow production, marrow release of bands, and catecholamine or steroid demargination increase circulating neutrophils.",
    thinkOf: [
      "Acute bacterial infection",
      "Tissue necrosis or trauma",
      "Corticosteroids",
      "Smoking, stress, pregnancy",
      "CML or other myeloproliferative neoplasm",
    ],
    pairWith: [
      "Bands/toxic granulation → severe bacterial infection",
      "No pus + delayed cord separation despite neutrophilia → LAD type 1",
      "Basophilia + splenomegaly → CML",
      "Steroids + no fever → demargination",
    ],
    distinguishFrom: [
      "Leukocytosis — total WBC elevation from any lineage",
      "Left shift — immature neutrophils, not just high mature neutrophils",
      "Neutropenia — low ANC with infection risk",
    ],
  },
  {
    id: "webbed-neck",
    name: "Webbed Neck",
    etymology: "Old English web = woven fabric + Latin neck = collum",
    aliases: ["webbed neck", "webbed necks", "pterygium colli", "neck webbing"],
    definition:
      "Congenital excess lateral neck skin forming a web-like fold from the mastoid region toward the acromion.",
    mechanism:
      "Failed lymphatic drainage during fetal development leaves redundant nuchal tissue; classically seen in Turner syndrome and Noonan syndrome.",
    thinkOf: [
      "Turner syndrome (45,X)",
      "Noonan syndrome",
      "Fetal hydrops or lymphatic malformation",
    ],
    pairWith: [
      "Short stature + primary amenorrhea → Turner syndrome",
      "Pulmonary stenosis + normal ovaries → Noonan syndrome",
      "Coarctation or bicuspid valve → Turner syndrome",
    ],
    distinguishFrom: [
      "Low posterior hairline alone — may coexist but not synonymous with webbing",
      "Neck mass or cystic hygroma — focal lesion rather than symmetric webbing",
    ],
    pediatrics:
      "Prominent in neonatal Turner syndrome along with lymphedema of hands and feet.",
  },
  {
    id: "cubitus-valgus",
    name: "Cubitus Valgus",
    etymology: "Latin cubitus = elbow + valgus = bent outward",
    aliases: ["cubitus valgus", "increased carrying angle", "cubitus valgus deformity"],
    definition:
      "Outward angulation of the forearm relative to the humerus, increasing the carrying angle at the elbow.",
    mechanism:
      "Abnormal development of the distal humerus or prior supracondylar fracture malunion changes elbow alignment; in Turner syndrome reflects skeletal dysplasia of the arm.",
    thinkOf: [
      "Turner syndrome",
      "Previous supracondylar humerus fracture malunion",
      "Rickets or skeletal dysplasia",
    ],
    pairWith: [
      "Webbed neck + short stature → Turner syndrome",
      "Genu valgum + short fourth metacarpal → Turner syndrome",
    ],
    distinguishFrom: [
      "Cubitus varus — inward angulation ('gunstock deformity') after supracondylar fracture",
      "Normal carrying angle variation — isolated finding without syndromic features",
    ],
  },
  {
    id: "high-arched-palate",
    name: "High-Arched Palate",
    etymology: "Old English heah = high + Latin arcus = bow + Latin palatum = palate",
    aliases: [
      "high-arched palate",
      "high arched palate",
      "high arched palates",
      "gothic palate",
      "narrow palate",
    ],
    definition:
      "Elevated, narrow palate vault that may affect dental alignment and speech.",
    mechanism:
      "Disordered palatal shelf fusion or connective tissue disorders alter maxillary development, producing a deep narrow oral vault.",
    thinkOf: [
      "Turner syndrome",
      "Marfan syndrome",
      "Fragile X syndrome",
      "Cleft palate spectrum / submucous cleft",
    ],
    pairWith: [
      "Webbed neck + short stature → Turner syndrome",
      "Arachnodactyly + lens dislocation → Marfan syndrome",
      "Macroorchidism + developmental delay → Fragile X (males)",
    ],
    distinguishFrom: [
      "Cleft palate — overt midline defect, not isolated high vault",
      "Normal anatomic variant — no syndromic or dental complications",
    ],
    pediatrics:
      "Turner and connective tissue disorders may present with high-arched palate in childhood; evaluate for associated cardiac and skeletal findings.",
  },
  {
    id: "menarche",
    name: "Menarche",
    etymology: "Greek men = month + arche = beginning",
    aliases: [
      "menarche",
      "first menses",
      "first menstrual period",
      "onset of menstruation",
      "menarcheal age",
    ],
    definition:
      "The first occurrence of menstrual bleeding, marking establishment of cyclic endometrial shedding in puberty.",
    mechanism:
      "Progressive pubertal estrogen from ovarian folliculogenesis matures the endometrium; first ovulation may lag behind menarche, so early cycles are often anovulatory.",
    thinkOf: [
      "Normal female puberty milestone",
      "Delayed puberty if absent by expected age",
      "Primary amenorrhea evaluation threshold",
      "Onset of dysmenorrhea risk once cycles begin",
    ],
    pairWith: [
      "No breast development by 13 → delayed puberty workup",
      "No menarche by 15 with normal secondary sexual characteristics → primary amenorrhea evaluation",
      "Menarche without prior thelarche → investigate estrogen source",
      "Early menarche + obesity → ↑ lifelong estrogen exposure (endometrial/breast cancer risk context)",
    ],
    distinguishFrom: [
      "Menopause — cessation of menses at end of reproductive life",
      "Menorrhagia — heavy menstrual bleeding, not first menses",
      "Withdrawal bleeding — progesterone withdrawal bleed, not spontaneous menarche",
    ],
    pediatrics:
      "Average menarche ~12–13 years in the US; evaluate primary amenorrhea if no menarche by 15 with normal development, or by 13 without secondary sexual characteristics. Early cycles are often irregular and anovulatory for 1–2 years.",
  },
  {
    id: "menses",
    name: "Menses",
    etymology: "Latin mensis = month",
    aliases: [
      "menses",
      "menstruation",
      "menstrual bleeding",
      "menstrual period",
      "menstrual periods",
      "menstrual flow",
      "period",
      "periods",
      "monthly bleeding",
    ],
    definition:
      "Periodic shedding of the functional endometrial lining as vaginal bleeding, typically occurring in ovulatory or anovulatory cycles of reproductive-age females with a uterus.",
    mechanism:
      "If ovulation occurs, corpus luteum progesterone stabilizes the endometrium; with luteal demise, progesterone falls → spiral artery vasoconstriction → ischemic necrosis of the functionalis layer → sloughing and bleeding. Anovulatory cycles may have prolonged unopposed estrogen then unstable shedding.",
    thinkOf: [
      "Normal cyclic endometrial shedding",
      "Amenorrhea — absent menses",
      "Menorrhagia — abnormally heavy menses",
      "Dysmenorrhea — painful menses",
      "Pregnancy — amenorrhea when pregnant",
    ],
    pairWith: [
      "Cyclic pelvic pain with bleeding → primary or secondary dysmenorrhea",
      "Heavy bleeding + enlarged uterus → leiomyoma or adenomyosis",
      "Absent menses + β-hCG+ → pregnancy",
      "Irregular heavy bleeding without ovulation → PCOS or anovulatory bleeding",
      "Postmenopausal bleeding → endometrial hyperplasia/cancer until proven otherwise",
    ],
    distinguishFrom: [
      "Implantation bleeding — lighter, early pregnancy spotting",
      "Breakthrough bleeding on hormonal contraception — not true cyclic menses",
      "Postcoital bleeding — cervical pathology, not menstrual flow",
      "Ovulation midcycle spotting — brief, around day 14",
    ],
    pediatrics:
      "Irregular menses for 1–2 years after menarche is common due to anovulatory cycles; persistent oligomenorrhea or secondary amenorrhea warrants evaluation for PCOS, eating disorders, or pregnancy.",
  },
  {
    id: "lanugo",
    name: "Lanugo",
    etymology: "Latin lana = wool",
    aliases: [
      "lanugo",
      "lanugo hair",
      "lanugo hairs",
      "fine downy hair",
    ],
    definition:
      "Fine, soft, unpigmented downy hair that can appear on the trunk and extremities as a physiologic or pathologic response to malnutrition and heat conservation.",
    mechanism:
      "In malnutrition and anorexia nervosa, hypothalamic thermoregulatory compensation and catecholamine response promote lanugo growth to reduce heat loss when subcutaneous fat is depleted; physiologic lanugo also coats the fetus and may persist briefly in neonates.",
    thinkOf: [
      "Anorexia nervosa and severe malnutrition",
      "Refeeding/chronic starvation states",
      "Neonatal lanugo (physiologic)",
      "Extreme weight loss with hypothermia",
    ],
    pairWith: [
      "Low BMI + amenorrhea + lanugo → anorexia nervosa",
      "Bradycardia + hypothermia + lanugo → eating disorder with medical instability",
      "Lanugo on newborn → normal if sheds within weeks",
      "Malnutrition without body image distortion → consider malabsorption or systemic disease",
    ],
    distinguishFrom: [
      "Vellus hair — normal fine body hair in adults, not pathologic lanugo pattern",
      "Hirsutism — coarse dark terminal androgen-dependent hair (PCOS)",
      "Hypertrichosis — excess nonandrogenic terminal hair (drugs, porphyria)",
      "Neonatal hypertrichosis syndromes — distinct genetic entities",
    ],
    pediatrics:
      "Fine lanugo on a newborn's shoulders and back is normal and sheds in weeks. Pathologic lanugo in adolescents with weight loss signals severe malnutrition — evaluate for eating disorders.",
  },
  {
    id: "virilization",
    name: "Virilization",
    etymology: "Latin virilis = manly + -ization = process suffix",
    aliases: [
      "virilization",
      "virilisation",
      "virilizing",
      "virilized",
      "masculinization",
      "androgen excess",
      "androgenization",
    ],
    definition:
      "Development of male secondary sexual characteristics in a biologic female (or premature/accentuated androgen effects) due to excess androgen exposure.",
    mechanism:
      "Circulating androgens (or androgen precursors) bind androgen receptors → clitoromegaly, deepening voice, increased muscle mass, male-pattern hair growth, and temporal balding; timing and severity depend on androgen level and duration.",
    thinkOf: [
      "21-hydroxylase congenital adrenal hyperplasia",
      "Androgen-secreting ovarian or adrenal tumor",
      "PCOS — usually hirsutism without full virilization",
      "Exogenous anabolic androgens",
      "Late-onset CAH (11β-hydroxylase or 21-hydroxylase mild forms)",
    ],
    pairWith: [
      "Clitoromegaly + salt wasting in neonate → 21-hydroxylase CAH",
      "Rapid onset + very high testosterone/DHEA-S → androgen-secreting tumor",
      "Gradual hirsutism + oligomenorrhea → PCOS",
      "↑ 17-hydroxyprogesterone → CAH",
      "Virilization + cushingoid features → adrenal tumor",
    ],
    distinguishFrom: [
      "Hirsutism — excess terminal hair without clitoromegaly or voice change",
      "Normal male puberty in 46,XY individual",
      "PCOS — hyperandrogenism usually milder; virilization suggests tumor or CAH",
      "Acne alone — not virilization",
    ],
    pediatrics:
      "Neonatal 46,XX virilization with ambiguous genitalia → congenital adrenal hyperplasia until proven otherwise; measure 17-hydroxyprogesterone on newborn screen or urgently.",
  },
  {
    id: "abdominal-distension",
    name: "Abdominal distension",
    etymology: "Latin abdomen = belly + Latin distendere = to stretch apart",
    aliases: [
      "abdominal distension",
      "abdominal distention",
      "distended abdomen",
      "abdominal bloating",
      "abdominal swelling",
      "swollen abdomen",
      "tympanic abdomen",
      "distended abdominal girth",
    ],
    definition:
      "Visible or measurable enlargement of the abdominal girth from accumulated gas, fluid, fat, feces, a mass, or gravid uterus — a physical sign pointing to GI, hepatobiliary, genitourinary, or metabolic pathology.",
    mechanism:
      "Gas distention (obstruction, ileus, aerophagia), ascitic fluid (portal hypertension, malignancy, heart failure), organomegaly, fecal loading, pregnancy, or intra-abdominal mass increases intra-abdominal volume and stretches the abdominal wall.",
    thinkOf: [
      "Small bowel obstruction",
      "Large bowel obstruction / volvulus / sigmoid diverticulitis with obstruction",
      "Ileus (postoperative, electrolyte abnormality, medications, sepsis)",
      "Ascites (cirrhosis, malignancy, heart failure, nephrotic syndrome)",
      "Constipation and fecal impaction",
      "Toxic megacolon",
      "Pregnancy",
      "Hirschsprung disease / neonatal intestinal obstruction",
      "Necrotizing enterocolitis (neonate)",
      "Ovarian mass or ovarian hyperstimulation",
    ],
    pairWith: [
      "Tympanic, hyperactive bowel sounds → early mechanical obstruction",
      "Absent bowel sounds + distension → ileus or late obstruction/perforation",
      "Shifting dullness or fluid wave → ascites",
      "Pain + obstipation + vomiting → bowel obstruction",
      "Neonate with bilious vomiting + distension → malrotation/volvulus until proven otherwise",
      "Distension + fever + toxic appearance → toxic megacolon, perforation, or NEC",
      "Ascites + jaundice + spider angiomata → cirrhosis",
      "Postoperative day 3–5 distension without flatus → postoperative ileus",
    ],
    distinguishFrom: [
      "Central obesity — chronic adipose distribution without acute pathology",
      "Abdominal wall hematoma or rectus sheath hematoma — localized, often anticoagulant-related",
      "Normal postprandial fullness — transient, no systemic signs",
      "Pregnancy — gravid uterus; confirm with history/β-hCG",
    ],
    pediatrics:
      "Neonatal abdominal distension with bilious emesis suggests intestinal obstruction (malrotation/volvulus, Hirschsprung, atresia). NEC presents with distension, feeding intolerance, and pneumatosis in preterm infants. Constipation is common but volvulus is surgical emergency.",
  },
  {
    id: "dizziness",
    name: "Dizziness",
    etymology: "Old English dysig = foolish + -ness = state; dizzy from Old English dysig = unsteady/confused",
    aliases: [
      "dizziness",
      "dizzy",
      "feeling dizzy",
      "lightheadedness",
      "light-headedness",
      "lightheaded",
      "light-headed",
    ],
    definition:
      "Subjective sensation of unsteadiness, spinning, or near-fainting; on boards, clarify whether true vertigo (rotational), presyncope (impending faint), or nonspecific disequilibrium.",
    mechanism:
      "Vertigo: asymmetric vestibular input or central vestibular pathway dysfunction. Presyncope/lightheadedness: ↓ cerebral perfusion from orthostasis, arrhythmia, anemia, or vasovagal response. Disequilibrium: proprioceptive, cerebellar, or musculoskeletal imbalance.",
    thinkOf: [
      "Benign paroxysmal positional vertigo (BPPV)",
      "Vestibular neuritis / labyrinthitis",
      "Ménière disease",
      "Orthostatic hypotension",
      "Vasovagal presyncope",
      "Cardiac arrhythmia or aortic stenosis",
      "Anemia or hypoglycemia",
      "Cerebellar stroke or posterior circulation TIA",
      "Medication effect (antihypertensives, sedatives)",
    ],
    pairWith: [
      "Rotational vertigo triggered by head movement → BPPV",
      "Hearing loss, tinnitus, aural fullness → Ménière disease",
      "Positional change, antihypertensives → orthostatic hypotension",
      "Exertional dizziness → aortic stenosis or arrhythmia",
      "Ataxia, dysarthria, diplopia → posterior circulation stroke",
      "Nystagmus + vertigo after URI → vestibular neuritis",
      "Palpitations + near-syncope → arrhythmia",
    ],
    distinguishFrom: [
      "Syncope — complete loss of consciousness from global hypoperfusion",
      "Vertigo — specific illusion of spinning (subset of dizziness)",
      "Dysequilibrium — imbalance without spinning or faintness",
      "Seizure — altered awareness with postictal state, not typical vertigo pattern",
    ],
    pediatrics:
      "Children describe dizziness poorly; consider otitis media, migraine-associated vertigo, and post-viral vestibular neuritis. Congenital inner ear anomalies and posterior fossa tumors are rare but considered with persistent ataxia or hearing loss.",
  },
  {
    id: "numbness",
    name: "Numbness",
    etymology: "Middle English num = deprived of feeling + -ness = state",
    aliases: [
      "numbness",
      "numb",
      "numbnesses",
      "loss of sensation",
      "sensory loss",
      "anesthesia",
      "hypoesthesia",
    ],
    definition:
      "Reduced or absent cutaneous or deep sensation in a focal or regional distribution, reflecting peripheral nerve, root, plexus, spinal cord, or central nervous system pathology.",
    mechanism:
      "Damage or dysfunction along the sensory pathway — demyelination, compression, ischemia, metabolic toxin, or autoimmune attack — interrupts transmission of touch, pain, temperature, or proprioceptive signals to the cortex.",
    thinkOf: [
      "Peripheral neuropathy (diabetes, B12 deficiency, alcohol)",
      "Nerve root compression (radiculopathy, herniated disc)",
      "Carpal tunnel syndrome (median nerve)",
      "Stroke — contralateral hemibody numbness",
      "Multiple sclerosis — sensory symptoms may be first presentation",
      "Herpes zoster — dermatomal numbness before rash",
      "Local anesthetic toxicity (early perioral numbness with lidocaine)",
      "Hypocalcemia — perioral and distal paresthesias",
    ],
    pairWith: [
      "Stocking-glove distribution → peripheral neuropathy (diabetes, B12, uremia)",
      "Dermatomal distribution → radiculopathy or herpes zoster",
      "Median nerve territory (thumb, index, middle) → carpal tunnel",
      "Unilateral face/arm/leg → stroke or lacunar infarct",
      "Perioral numbness + muscle twitching → hypocalcemia or local anesthetic toxicity",
      "Numbness + weakness in same territory → combined motor-sensory lesion",
      "Relapsing sensory symptoms in young adult → multiple sclerosis",
    ],
    distinguishFrom: [
      "Paresthesia — abnormal positive sensation (tingling, pins-and-needles), not decreased sensation",
      "Weakness without sensory loss — pure motor lesion",
      "Pain without numbness — nociceptive or inflammatory cause without large-fiber loss",
      "Anesthesia dolorosa — pain in denervated region (rare central pain syndrome)",
    ],
    pediatrics:
      "Guillain-Barré syndrome can present with ascending numbness and weakness in children post-infection. Leukodystrophies and pediatric MS are rare causes of persistent sensory symptoms.",
  },
  {
    id: "paresthesia",
    name: "Paresthesia",
    etymology: "Greek para = beside + aisthēsis = sensation (abnormal sensation alongside normal feeling)",
    aliases: [
      "paresthesia",
      "paresthesias",
      "paraesthesia",
      "paraesthesias",
      "pins and needles",
      "pins-and-needles",
      "tingling",
      "tingling sensation",
      "tingling sensations",
    ],
    definition:
      "Abnormal spontaneous sensory perception — typically tingling, pins-and-needles, crawling, or burning — without an external stimulus, reflecting irritative or compressive pathology along peripheral or central sensory pathways.",
    mechanism:
      "Ectopic firing or dysesthetic signaling in damaged, demyelinated, compressed, or metabolically impaired sensory neurons — often large myelinated Aβ fibers — produces positive sensory symptoms distinct from numbness (negative sensory loss).",
    thinkOf: [
      "Carpal tunnel syndrome — median nerve compression at wrist",
      "Peripheral neuropathy — diabetes, B12 deficiency, uremia, alcohol",
      "Hypocalcemia / hyperventilation — perioral and distal tingling",
      "Multiple sclerosis — transient demyelinating sensory symptoms",
      "Radiculopathy — dermatomal tingling before numbness",
      "Topiramate, isoniazid, and other neurotoxic drugs",
      "Acute limb ischemia — 6 Ps include paresthesias",
      "Fabry disease — acroparesthesias in childhood",
    ],
    pairWith: [
      "Hand tingling at night + thenar weakness → carpal tunnel",
      "Perioral tingling + carpopedal spasm → hypocalcemia",
      "Stocking-glove tingling + diabetes → diabetic neuropathy",
      "Tingling + glossitis + macrocytic anemia → B12 deficiency",
      "Relapsing focal sensory symptoms in young woman → MS",
      "Tingling with hyperventilation and anxiety → respiratory alkalosis",
      "Distal tingling on isoniazid → B6 deficiency neuropathy",
    ],
    distinguishFrom: [
      "Numbness — decreased or absent sensation (negative symptom), not tingling",
      "Dysesthesia — unpleasant painful/abnormal sensation, often chronic neuropathic pain",
      "Allodynia — pain from normally nonpainful touch",
      "Formication — sensation of insects crawling; consider withdrawal or toxidrome",
    ],
    pediatrics:
      "Fabry disease causes episodic burning hand/foot paresthesias in childhood. Guillain-Barré may begin with tingling in feet before weakness. Migraine equivalents in children can include sensory aura.",
  },
  {
    id: "sneezing",
    name: "Sneezing",
    etymology: "Middle English snesen = sudden expulsion through nose",
    aliases: [
      "sneezing",
      "sneeze",
      "sneezes",
      "paroxysmal sneezing",
    ],
    definition:
      "Forceful, involuntary expiratory reflex through the nose and mouth, usually triggered by nasal mucosal irritation or IgE-mediated allergic inflammation.",
    mechanism:
      "Nasal irritants or allergen-IgE cross-linking on mast cells → histamine and leukotriene release → trigeminal afferent activation → medullary sneeze center → coordinated inspiration, glottic closure, and explosive exhalation to clear nasal passages.",
    thinkOf: [
      "Allergic rhinitis (hay fever)",
      "Viral upper respiratory infection (common cold)",
      "Nonallergic rhinitis (vasomotor, irritant)",
      "Photic sneeze reflex (ACHOO syndrome — autosomal dominant)",
      "Nasal foreign body (especially unilateral in child)",
      "Early anaphylaxis (may accompany urticaria, wheeze, hypotension)",
    ],
    pairWith: [
      "Clear rhinorrhea + nasal/ocular pruritus + seasonal pattern → allergic rhinitis",
      "Sore throat + cough + low-grade fever → viral URI",
      "Sneezing after bright light exposure → photic sneeze reflex",
      "Unilateral foul discharge + sneezing in child → nasal foreign body",
      "Sneezing + wheeze + urticaria + hypotension → anaphylaxis",
      "Sneezing without fever in spring → pollen allergy",
    ],
    distinguishFrom: [
      "Cough — lower airway expulsive reflex, not nasal sneeze center",
      "Rhinorrhea alone — nasal discharge without explosive sneeze reflex",
      "Nasal congestion without sneezing — may be structural or nonallergic rhinitis",
    ],
    pediatrics:
      "Allergic rhinitis often begins in childhood; atopic march links eczema, food allergy, and asthma. Foreign body rhinorrhea is classically unilateral and foul-smelling in toddlers.",
  },
  {
    id: "hyperreflexia",
    name: "Hyperreflexia",
    etymology: "Greek hyper = excess + Latin re = back + flexus = bent + -ia = condition",
    aliases: [
      "hyperreflexia",
      "hyperreflexic",
      "brisk reflexes",
      "brisk deep tendon reflexes",
      "increased reflexes",
      "increased deep tendon reflexes",
      "exaggerated reflexes",
      "exaggerated deep tendon reflexes",
      "dtr hyperreflexia",
    ],
    definition:
      "Exaggerated deep tendon (stretch) reflexes from disinhibited or overactive spinal reflex arcs, classically indicating an upper motor neuron (UMN) lesion above the tested segment.",
    mechanism:
      "Loss of descending UMN inhibition on spinal reflex circuits → increased α-motor neuron excitability → exaggerated monosynaptic stretch reflex; may be accompanied by clonus, spasticity, and Babinski sign in chronic UMN syndromes.",
    thinkOf: [
      "Stroke (corticospinal tract)",
      "Multiple sclerosis",
      "Spinal cord compression or transverse myelitis",
      "Cerebral palsy (perinatal UMN injury)",
      "Amyotrophic lateral sclerosis (UMN + LMN signs)",
      "Severe preeclampsia / eclampsia (hyperreflexia, clonus)",
      "Spinal shock early phase — hyporeflexia before hyperreflexia develops",
    ],
    pairWith: [
      "Hyperreflexia + Babinski + spasticity → UMN lesion",
      "Hyperreflexia + weakness on same side → stroke or cord lesion",
      "Pregnancy + HTN + hyperreflexia + clonus → severe preeclampsia / risk of eclampsia",
      "Hyperreflexia + sensory level + bowel/bladder dysfunction → spinal cord compression",
      "Hyporeflexia + fasciculations + atrophy → LMN lesion (not hyperreflexia pattern)",
      "Acute spinal cord injury — initial spinal shock with hyporeflexia, then hyperreflexia below lesion",
    ],
    distinguishFrom: [
      "Hyporeflexia/areflexia — LMN lesion, Guillain-Barré, spinal shock acutely",
      "Normal brisk reflexes in anxiety or young patients — context and asymmetry matter",
      "Clonus alone — rhythmic reflex activity; often accompanies but is not identical to hyperreflexia",
      "Myoclonus — sudden jerks, not stretch-reflex amplification",
    ],
    pediatrics:
      "Infants have physiologic hyperreflexia and crossed adductor responses; persistent asymmetric hyperreflexia suggests cerebral palsy or structural CNS lesion. Tay-Sachs infants may show early hyperreflexia progressing to hypotonia.",
  },
  {
    id: "spasticity",
    name: "Spasticity",
    etymology: "Greek spasm = drawing/pulling + Latin -itas = state/quality",
    aliases: [
      "spasticity",
      "spastic",
      "spastic muscle tone",
      "spastic tone",
      "spastic hemiparesis",
      "spastic paraparesis",
      "spastic diplegia",
    ],
    definition:
      "Velocity-dependent increase in muscle tone with exaggerated stretch reflexes, reflecting upper motor neuron disinhibition of spinal motor circuits; resistance increases with faster passive stretch.",
    mechanism:
      "UMN lesion removes supraspinal inhibitory control → γ-motor neuron hyperactivity and stretch reflex hyperexcitability → increased tone that worsens with rapid movement (spastic catch), often coexisting with hyperreflexia, clonus, and Babinski sign.",
    thinkOf: [
      "Stroke — spastic hemiparesis after initial flaccid phase",
      "Cerebral palsy — spastic diplegia, hemiplegia, or quadriplegia",
      "Multiple sclerosis",
      "Spinal cord injury (chronic phase below lesion)",
      "Hereditary spastic paraplegia",
      "Corticospinal tract demyelination or compression",
    ],
    pairWith: [
      "Spasticity + hyperreflexia + Babinski → UMN syndrome",
      "Spastic hemiparesis after stroke → contralateral corticospinal tract injury",
      "Spastic diplegia in child with perinatal insult → cerebral palsy",
      "Spastic paraparesis + sensory level → thoracic spinal cord lesion",
      "Spasticity + rigidity + bradykinesia → parkinsonism (rigidity is not spasticity)",
      "Flaccid paralysis acutely after cord transection → later spasticity below lesion",
    ],
    distinguishFrom: [
      "Rigidity — constant increased tone throughout range (extrapyramidal, Parkinson disease), not velocity-dependent",
      "Flaccidity — reduced tone from LMN lesion or spinal shock",
      "Contracture — fixed structural shortening, not dynamic UMN tone",
      "Dystonia — sustained abnormal posturing from basal ganglia dysfunction",
      "Cogwheel rigidity — superimposed ratchet-like resistance in Parkinson disease",
    ],
    pediatrics:
      "Spastic cerebral palsy is the most common motor pattern after perinatal brain injury; early hypertonia and persistent primitive reflexes warrant developmental follow-up and physical therapy.",
  },
  {
    id: "incontinence",
    name: "Incontinence",
    etymology: "Latin in- = not + continere = to hold together",
    aliases: [
      "incontinence",
      "incontinent",
      "loss of continence",
    ],
    definition:
      "Involuntary loss of urine or stool — failure of normal storage and voluntary release mechanisms; classify as urinary or fecal and by underlying mechanism (stress, urge, overflow, etc.).",
    mechanism:
      "Continence requires intact sphincters, pelvic floor support, adequate sensation, and coordinated neural control; disruption at any level — urethral/bladder dysfunction, pelvic floor weakness, spinal cord or sacral root injury, cognitive impairment — causes leakage.",
    thinkOf: [
      "Urinary incontinence — stress, urge, overflow, mixed, functional",
      "Fecal incontinence — obstetric sphincter tear, neuropathy, overflow from constipation",
      "Neurogenic bladder — spinal cord injury, MS, cauda equina",
      "Dementia or immobility — functional incontinence",
      "Pediatric enuresis — separate developmental/voiding disorder category",
    ],
    pairWith: [
      "Leak with cough/sneeze → stress urinary incontinence",
      "Sudden strong urge → urge incontinence / overactive bladder",
      "Dribbling + high PVR → overflow incontinence",
      "Saddle anesthesia + retention → cauda equina",
      "Constipation + seepage → overflow fecal incontinence",
    ],
    distinguishFrom: [
      "Urinary incontinence — bladder/urethral mechanism; fecal incontinence — anal sphincter/bowel mechanism",
      "Frequency without leakage — irritative voiding, not incontinence",
      "Normal postpartum or postoperative transient leakage — may resolve vs persistent incontinence",
    ],
    pediatrics:
      "Pediatric urinary incontinence includes enuresis and voiding dysfunction; fecal incontinence in encopresis often reflects overflow from chronic constipation, not primary sphincter failure.",
  },
  {
    id: "urinary-incontinence",
    name: "Urinary Incontinence",
    etymology: "Latin urina = urine + in- = not + continere = to hold together",
    aliases: [
      "urinary incontinence",
      "urine incontinence",
      "bladder incontinence",
      "involuntary urination",
      "involuntary urine loss",
    ],
    definition:
      "Involuntary loss of urine; on boards, classify by mechanism into stress, urge, overflow, mixed, and functional types to guide workup and treatment.",
    mechanism:
      "Stress — sphincter/pelvic floor cannot withstand ↑ intra-abdominal pressure; urge — detrusor overactivity; overflow — bladder overdistension from outlet obstruction or detrusor underactivity; functional — inability to reach toilet despite intact physiology.",
    thinkOf: [
      "Stress incontinence — pelvic floor laxity, multiparity, obesity",
      "Urge incontinence — overactive bladder, UTI, neurogenic detrusor overactivity",
      "Overflow incontinence — BPH, cauda equina, anticholinergic retention",
      "Mixed incontinence — stress + urge (common in older women)",
      "Functional incontinence — dementia, immobility, delirium",
    ],
    pairWith: [
      "Leak with Valsalva/cough → stress incontinence",
      "Strong urgency, frequency, nocturia → urge incontinence",
      "Weak stream, high PVR, dribbling → overflow incontinence",
      "Dysuria + urgency → UTI mimicking urge incontinence",
      "BPH symptoms + retention → overflow from outlet obstruction",
    ],
    distinguishFrom: [
      "Stress incontinence — leakage only with increased abdominal pressure",
      "Urge incontinence — leakage preceded by sudden urge",
      "Overflow incontinence — constant dribbling with incomplete emptying",
      "Vesicovaginal fistula — continuous leakage unrelated to bladder pressure (post-surgical/obstetric)",
    ],
    pediatrics:
      "Daytime wetting after toilet training suggests voiding dysfunction, UTI, or constipation; monosymptomatic nocturnal enuresis is common and often self-limited.",
  },
  {
    id: "stress-incontinence",
    name: "Stress Incontinence",
    etymology: "Latin stringere = to draw tight + in- = not + continere = to hold (leakage under physical stress/pressure)",
    aliases: [
      "stress incontinence",
      "stress urinary incontinence",
      "sui",
      "genuine stress incontinence",
      "urinary stress incontinence",
    ],
    definition:
      "Involuntary urine leakage with increases in intra-abdominal pressure (cough, sneeze, laugh, exercise, Valsalva) due to urethral sphincter and/or pelvic floor incompetence.",
    mechanism:
      "Pelvic floor laxity or intrinsic sphincter deficiency → urethral closure pressure insufficient to resist transmitted abdominal pressure → urine escapes during straining without preceding detrusor contraction.",
    thinkOf: [
      "Pelvic floor laxity — multiparity, vaginal delivery, menopause",
      "Obesity and chronic cough — sustained ↑ intra-abdominal pressure",
      "Prior pelvic surgery or prolapse",
      "Intrinsic sphincter deficiency — post-prostatectomy (males)",
      "Urethral hypermobility",
    ],
    pairWith: [
      "Leak with cough/sneeze/exercise → stress incontinence",
      "Pelvic organ prolapse + leakage with strain → shared pelvic floor failure",
      "Normal bladder emptying, low PVR — unlike overflow",
      "No strong urge before leak — unlike urge incontinence",
      "Kegel exercises improve mild stress incontinence",
    ],
    distinguishFrom: [
      "Urge incontinence — preceded by sudden compelling urge; detrusor overactivity",
      "Overflow incontinence — high PVR, constant dribbling, weak stream",
      "Vesicovaginal fistula — continuous leakage, often post-hysterectomy/C-section",
      "UTI — dysuria and urgency may mimic urge, not classic stress pattern",
    ],
    pediatrics:
      "True stress incontinence is rare in children; giggle incontinence (involuntary voiding with laughter) is a distinct pediatric entity.",
  },
  {
    id: "urge-incontinence",
    name: "Urge Incontinence",
    etymology: "Latin urgere = to press/drive + in- = not + continere = to hold",
    aliases: [
      "urge incontinence",
      "urge urinary incontinence",
      "overactive bladder incontinence",
      "oab incontinence",
      "detrusor overactivity incontinence",
    ],
    definition:
      "Involuntary urine loss preceded by a sudden, compelling urge to void, reflecting detrusor overactivity or decreased cortical inhibition of the micturition reflex.",
    mechanism:
      "Uninhibited detrusor contractions (idiopathic overactive bladder, UTI, bladder stone, neurogenic causes) → intravesical pressure exceeds urethral resistance before patient reaches toilet → urge then leak.",
    thinkOf: [
      "Overactive bladder syndrome — urgency, frequency, nocturia ± incontinence",
      "UTI — irritative voiding with urgency",
      "Neurogenic detrusor overactivity — MS, spinal cord injury above sacral center",
      "Bladder outlet obstruction with detrusor overactivity (mixed)",
      "Caffeine, diuretics — transient urgency",
    ],
    pairWith: [
      "Sudden urge + leak → urge incontinence",
      "Frequency and nocturia without infection → overactive bladder",
      "Dysuria + urgency → UTI first",
      "Neurologic disease + bladder symptoms → neurogenic overactivity",
      "Antimuscarinics (oxybutynin) or β3-agonist (mirabegron) reduce urgency",
    ],
    distinguishFrom: [
      "Stress incontinence — leak with Valsalva, no urge",
      "Overflow incontinence — high PVR, weak stream, dribbling without classic urge",
      "Stress + urge features → mixed incontinence",
      "Normal urgency without leak — not incontinence",
    ],
    pediatrics:
      "Urge syndrome (overactive bladder) in children presents with urgency, frequency, and daytime wetting with normal upper tracts; treat constipation and use timed voiding before medications.",
  },
  {
    id: "overflow-incontinence",
    name: "Overflow Incontinence",
    etymology: "Old English ofer = beyond + flow + in- = not + continere = to hold",
    aliases: [
      "overflow incontinence",
      "overflow urinary incontinence",
      "paradoxical incontinence",
      "chronic urinary retention with overflow",
      "retention with overflow",
    ],
    definition:
      "Involuntary dribbling of urine from an overdistended bladder that cannot empty completely — intravesical pressure eventually exceeds outlet resistance, causing continuous or intermittent overflow leakage.",
    mechanism:
      "Bladder outlet obstruction (BPH, urethral stricture) or detrusor underactivity (diabetic neuropathy, cauda equina, anticholinergic drugs) → progressive retention → high post-void residual → passive overflow when capacity exceeded.",
    thinkOf: [
      "Benign prostatic hyperplasia — bladder outlet obstruction in men",
      "Cauda equina syndrome — S2–S4 injury, areflexic bladder",
      "Diabetic autonomic neuropathy — hypocontractile detrusor",
      "Anticholinergic medications — impaired detrusor contraction",
      "Posterior urethral valves — pediatric outlet obstruction",
      "Spinal cord injury (areflexic phase) — flaccid bladder with retention",
    ],
    pairWith: [
      "Weak stream, hesitancy, high PVR → overflow incontinence",
      "Constant dribbling + inability to fully empty → overflow",
      "BPH + urinary retention → α-blocker, 5α-reductase inhibitor, catheterization if needed",
      "Saddle anesthesia + retention → cauda equina emergency",
      "Palpable distended bladder or suprapubic fullness",
    ],
    distinguishFrom: [
      "Stress incontinence — normal emptying, leak only with Valsalva",
      "Urge incontinence — strong urge with detrusor overactivity, usually normal PVR",
      "Vesicovaginal fistula — continuous leak, bladder not necessarily distended",
      "Diabetes insipidus — large volume dilute urine output, not retention with overflow",
    ],
    pediatrics:
      "Posterior urethral valves in infant boys cause obstructive uropathy with distended bladder and overflow dribbling; chronic retention leads to hydronephrosis — early urologic intervention.",
  },
  {
    id: "claudication",
    name: "Claudication",
    etymology: "Latin claudicare = to limp",
    aliases: [
      "claudication",
      "intermittent claudication",
      "exertional leg pain",
      "leg claudication",
      "calf claudication",
      "walking pain relieved by rest",
    ],
    definition:
      "Reproducible pain in the legs (or rarely arms/jaw) induced by exercise and relieved by rest, most often from limb ischemia due to atherosclerotic peripheral artery disease.",
    mechanism:
      "Fixed arterial stenosis limits blood flow during exertion → muscle ischemia and buildup of metabolites → cramping pain; rest restores supply-demand balance and relieves pain within minutes.",
    thinkOf: [
      "Peripheral artery disease — atherosclerotic iliac/femoral/popiteal disease",
      "Critical limb ischemia — rest pain, ulcers if advanced",
      "Neurogenic claudication — spinal stenosis (pulses normal, relief with flexion/sitting)",
      "Venous claudication — post-thrombotic, edema, normal pulses",
      "Popliteal entrapment — young athlete with calf claudication",
      "Giant cell arteritis — jaw claudication (distinct vascular territory)",
    ],
    pairWith: [
      "Calf pain with walking, relief <10 min rest → intermittent claudication (PAD)",
      "↓ pedal pulses + smoking/diabetes → peripheral artery disease",
      "ABI <0.9 confirms PAD",
      "Leg pain with walking but normal pulses + relief when sitting → neurogenic claudication",
      "Jaw pain when chewing + headache in elderly → giant cell arteritis jaw claudication",
      "Cilostazol for symptomatic claudication — contraindicated in heart failure",
    ],
    distinguishFrom: [
      "Neurogenic claudication — spinal stenosis; flexion relieves, pulses normal",
      "Rest pain — advanced ischemia, not classic exertional claudication",
      "Muscle strain — not reproducible with same distance/walking pattern",
      "Venous claudication — heavy legs, edema, history of DVT",
      "Jaw claudication in GCA — not lower extremity PAD pattern",
    ],
    pediatrics:
      "Claudication is rare in children; consider coarctation of the aorta, anomalous origin of coronary arteries, or vasculitis if exertional limb pain occurs.",
  },
  {
    id: "cramping",
    name: "Cramping",
    etymology: "Middle English crampe = painful muscle contraction",
    aliases: [
      "cramping",
      "cramp",
      "cramps",
      "muscle cramp",
      "muscle cramps",
      "muscle cramping",
      "crampy pain",
      "crampy",
    ],
    definition:
      "Painful, involuntary sustained muscle contraction or spasm — may affect skeletal muscle (calf, abdomen, uterus) and produce colicky or aching quality depending on organ.",
    mechanism:
      "Local muscle overuse, electrolyte imbalance (Na⁺, K⁺, Ca²⁺, Mg²⁺), ischemia, dehydration, or smooth muscle spasm (GI, uterine prostaglandins) triggers excessive actin-myosin cross-bridging or smooth muscle contraction.",
    thinkOf: [
      "Peripheral artery disease — calf claudication (ischemic cramping with walking)",
      "Electrolyte disturbance — hypokalemia, hypocalcemia, hypomagnesemia",
      "Dehydration and heat cramps in athletes",
      "Menstrual cramps (dysmenorrhea) — prostaglandin-mediated uterine cramping",
      "Gastroenteritis — intestinal smooth muscle cramping with diarrhea",
      "Third-trimester leg cramps — common in pregnancy",
      "Diuretic-induced hypokalemia",
    ],
    pairWith: [
      "Calf cramping with exertion, relief with rest → claudication/PAD",
      "Cramping + diarrhea after reheated food → Bacillus cereus or Staph food poisoning",
      "Cramping abdominal pain + bloody diarrhea → ischemic colitis, IBD",
      "Leg cramps on diuretics → hypokalemia",
      "Menstrual cramping in adolescent → primary dysmenorrhea vs endometriosis if severe",
      "Hand cramping with writing → writer's cramp (focal dystonia, not electrolyte)",
    ],
    distinguishFrom: [
      "Colicky pain — waxing/waning smooth muscle pain; overlaps with cramping quality",
      "Spasticity — velocity-dependent tone increase, not acute painful cramp",
      "Restless legs — urge to move, not sustained painful contraction",
      "Claudication — specific exertional ischemic cramping pattern with PAD",
    ],
    pediatrics:
      "Growing pains cause nocturnal aching without true cramping; abdominal cramps with vomiting in child may indicate intussusception or gastroenteritis depending on context.",
  },
  {
    id: "ascites",
    name: "Ascites",
    etymology: "Greek askites = baglike; askos = wineskin/leather bag",
    aliases: [
      "ascites",
      "ascitic fluid",
      "ascitic",
    ],
    definition:
      "Pathologic accumulation of fluid within the peritoneal cavity — a physical sign of portal hypertension, hypoalbuminemia, heart failure, malignancy, or other causes of third-spacing.",
    mechanism:
      "↑ hydrostatic pressure (portal hypertension, right heart failure) and/or ↓ oncotic pressure (hypoalbuminemia in cirrhosis, nephrotic syndrome) → fluid transudation into peritoneum; malignant or infectious ascites may be exudative from peritoneal inflammation or lymphatic obstruction.",
    thinkOf: [
      "Cirrhosis with portal hypertension",
      "Nephrotic syndrome — hypoalbuminemia",
      "Heart failure (especially right-sided)",
      "Peritoneal carcinomatosis",
      "Tuberculous peritonitis",
      "Spontaneous bacterial peritonitis (complication of cirrhotic ascites)",
      "Budd-Chiari syndrome",
    ],
    pairWith: [
      "Shifting dullness or fluid wave on exam → ascites",
      "Jaundice + spider angiomata + splenomegaly → cirrhotic ascites",
      "Peripheral edema + hypoalbuminemia + foamy urine → nephrotic ascites",
      "JVD + peripheral edema + ascites → right heart failure / constrictive pericarditis",
      "Fever + abdominal pain in cirrhotic → spontaneous bacterial peritonitis",
      "SAAG ≥1.1 g/dL → portal hypertension (cirrhosis, cardiac ascites)",
      "SAAG <1.1 g/dL → peritoneal malignancy, TB peritonitis, pancreatitis",
    ],
    distinguishFrom: [
      "Abdominal distension from gas, fat, or pregnancy — no shifting dullness",
      "Peripheral edema alone — extracellular fluid outside peritoneal cavity",
      "Abdominal wall hematoma — localized, often anticoagulant-related",
    ],
    pediatrics:
      "Nephrotic syndrome is a common pediatric cause of ascites from hypoalbuminemia; neonatal urinary ascites from bladder rupture is a rare surgical emergency. Jaundice + ascites in infant suggests biliary atresia or metabolic liver disease.",
  },
  {
    id: "spasm",
    name: "Spasm",
    etymology: "Greek spasmos = convulsion; spaein = draw/pull",
    aliases: [
      "spasm",
      "spasms",
      "muscle spasm",
      "muscle spasms",
      "smooth muscle spasm",
      "smooth muscle spasms",
    ],
    definition:
      "Sudden, involuntary contraction of smooth or skeletal muscle — may be brief (twitch) or sustained, and may affect airways, vessels, hollow organs, or striated muscle.",
    mechanism:
      "Excessive actin-myosin cross-bridging in skeletal muscle (electrolyte imbalance, ischemia, irritation) or unregulated smooth muscle contraction (autonomic imbalance, inflammation, drugs, cold-induced vasospasm) produces localized or diffuse spasm.",
    thinkOf: [
      "Bronchospasm — asthma, anaphylaxis, COPD exacerbation",
      "Esophageal spasm — noncardiac chest pain",
      "Ureteral or biliary colic — smooth muscle spasm around obstruction",
      "Raynaud phenomenon — digital vasospasm",
      "Infundibular spasm — tet spell in tetralogy of Fallot",
      "Tetanus — sustained spastic paralysis from tetanospasmin",
      "Electrolyte disturbance — hypocalcemia, hypokalemia, hypomagnesemia",
    ],
    pairWith: [
      "Wheezing + dyspnea → bronchospasm",
      "Chest pain mimicking angina, normal troponin → esophageal spasm",
      "Colicky flank pain + hematuria → ureteral spasm from stone",
      "Cold-induced color change in digits → vasospasm / Raynaud",
      "Infant cyanosis during crying → RVOT spasm in ToF",
      "Trismus + opisthotonus → tetanus",
      "Spasm + perioral tingling → hypocalcemia / tetany",
    ],
    distinguishFrom: [
      "Cramping — painful sustained contraction; overlaps with skeletal muscle spasm but often colicky or exertional context",
      "Spasticity — velocity-dependent UMN tone increase, not acute involuntary contraction",
      "Tetany — neuromuscular hyperexcitability from hypocalcemia; may produce carpopedal spasm",
      "Seizure — cortical neuronal discharge, not primary muscle spasm",
      "Dystonia — sustained abnormal posturing from basal ganglia dysfunction",
    ],
    pediatrics:
      "Bronchospasm is the main airway emergency in pediatric asthma and anaphylaxis. Hypercyanotic spells in ToF reflect infundibular spasm. Infantile spasms (West syndrome) are epileptic — not the same as muscle spasm.",
  },
  {
    id: "carpal-spasm",
    name: "Carpal Spasm",
    etymology: "Latin carpus = wrist + Greek spasmos = convulsion",
    aliases: [
      "carpal spasm",
      "carpal spasms",
      "carpopedal spasm",
      "carpopedal spasms",
      "carpopedal contraction",
    ],
    definition:
      "Involuntary flexion and adduction of the wrist and fingers (and often the feet in carpopedal spasm) from neuromuscular hyperexcitability — classic sign of hypocalcemia and tetany.",
    mechanism:
      "↓ extracellular Ca²⁺ lowers the threshold for voltage-gated Na⁺ channels in nerve and muscle → spontaneous action potentials and sustained contraction; cuff inflation (Trousseau sign) or nerve tapping (Chvostek sign) provokes the spasm.",
    thinkOf: [
      "Hypocalcemia — vitamin D deficiency, hypoparathyroidism, chronic kidney disease",
      "Post-thyroidectomy hypoparathyroidism",
      "Hungry bone syndrome after parathyroidectomy",
      "Massive transfusion (citrate chelates Ca²⁺)",
      "Acute pancreatitis (saponification of peripancreatic fat)",
      "Rhabdomyolysis with hyperphosphatemia binding Ca²⁺",
    ],
    pairWith: [
      "Perioral tingling + carpal spasm → hypocalcemia",
      "Trousseau sign positive (BP cuff inflation) → hypocalcemia",
      "Chvostek sign (facial twitch on tapping) → hypocalcemia",
      "Prolonged QT on ECG → hypocalcemia",
      "Recent thyroid surgery + tetany → hypoparathyroidism",
      "Alkalosis + hypocalcemia → ↑ protein binding of Ca²⁺ worsens symptoms",
    ],
    distinguishFrom: [
      "Writer's cramp — focal dystonia with task-specific hand spasm, normal Ca²⁺",
      "Cramping — painful muscle contraction without neuromuscular hyperexcitability pattern",
      "Carpal tunnel syndrome — median nerve compression with paresthesia, not tetanic spasm",
      "Seizure — cortical event, not isolated carpopedal posturing",
    ],
    pediatrics:
      "Neonatal hypocalcemia (prematurity, maternal diabetes, DiGeorge syndrome) can present with jitteriness, seizures, or carpopedal spasm; check ionized calcium. Rickets from vitamin D deficiency causes hypocalcemic tetany in toddlers.",
  },
  {
    id: "trousseau-sign",
    name: "Trousseau Sign",
    etymology: "eponym: Armand Trousseau (French physician) + sign = clinical indicator",
    aliases: [
      "trousseau sign",
      "trousseau signs",
      "trousseau",
      "trousseau's sign",
      "trousseaus sign",
      "trousseau phenomenon",
      "trousseau carpopedal spasm",
      "bp cuff test",
      "blood pressure cuff test",
    ],
    definition:
      "Provocative test for neuromuscular hyperexcitability in hypocalcemia — inflation of a blood pressure cuff above systolic pressure for several minutes induces carpopedal spasm (wrist and finger flexion).",
    mechanism:
      "Ischemia from cuff inflation combined with ↓ ionized Ca²⁺ lowers the threshold for peripheral nerve firing → sustained muscle contraction in the hand; more sensitive than Chvostek for hypocalcemia.",
    thinkOf: [
      "Hypocalcemia — hypoparathyroidism after thyroid surgery",
      "DiGeorge syndrome (22q11 deletion)",
      "Vitamin D deficiency and rickets/osteomalacia",
      "Acute pancreatitis with saponification",
      "Massive transfusion (citrate binds Ca²⁺)",
      "Metabolic alkalosis worsening ionized hypocalcemia",
    ],
    pairWith: [
      "Cuff-induced carpopedal spasm + perioral tingling → hypocalcemia",
      "Positive Trousseau + recent thyroidectomy → hypoparathyroidism",
      "Trousseau + Chvostek + prolonged QT → hypocalcemia workup",
      "↓ ionized Ca + low PTH → hypoparathyroidism",
      "Neonatal seizures + absent thymic shadow → DiGeorge hypocalcemia",
    ],
    distinguishFrom: [
      "Trousseau syndrome — paraneoplastic migratory superficial thrombophlebitis in pancreatic cancer, not a hypocalcemia sign",
      "Chvostek sign — facial nerve tap causing facial twitch, less sensitive",
      "Writer's cramp — task-specific dystonia without hypocalcemia",
      "Carpal tunnel syndrome — median nerve compression with paresthesia, not tetanic spasm",
    ],
    pediatrics:
      "Neonatal hypocalcemia may show Trousseau or Chvostek signs before frank seizures; common in prematurity, maternal diabetes, and DiGeorge syndrome.",
  },
  {
    id: "chvostek-sign",
    name: "Chvostek Sign",
    etymology: "eponym: František Chvostek (Austrian physician) + sign = clinical indicator",
    aliases: [
      "chvostek sign",
      "chvostek signs",
      "chvostek",
      "chvostek's sign",
      "chvosteks sign",
      "chvostek phenomenon",
      "facial nerve tap sign",
      "facial twitch sign",
    ],
    definition:
      "Clinical sign of neuromuscular hyperexcitability in hypocalcemia — tapping the facial nerve (anterior to ear/tragus) triggers ipsilateral twitching of facial muscles.",
    mechanism:
      "↓ extracellular ionized Ca²⁺ increases excitability of peripheral nerves → mechanical stimulation of facial nerve branch causes transient muscle contraction; less sensitive and less specific than Trousseau sign.",
    thinkOf: [
      "Hypocalcemia — hypoparathyroidism, vitamin D deficiency",
      "DiGeorge syndrome",
      "Acute pancreatitis with hypocalcemia",
      "Metabolic alkalosis (↓ ionized Ca²⁺)",
      "Can be positive in ~10% of normal individuals (lower specificity)",
    ],
    pairWith: [
      "Facial twitch on tapping + perioral tingling → hypocalcemia",
      "Chvostek + Trousseau + prolonged QT → confirm ionized calcium",
      "Recent thyroid surgery + facial twitch on tap → hypoparathyroidism",
      "↓ Ca + ↓ PTH + 22q11 → DiGeorge",
    ],
    distinguishFrom: [
      "Trousseau sign — BP cuff provoked carpopedal spasm; more sensitive for hypocalcemia",
      "Facial nerve palsy (Bell palsy) — sustained weakness, not brief twitch on tap",
      "Myokymia — spontaneous rippling without nerve percussion",
      "Seizure — cortical event, not localized nerve hyperexcitability sign",
    ],
    pediatrics:
      "May appear in neonatal hypocalcemia; always confirm with ionized calcium — Chvostek alone is less reliable in infants than combined clinical and lab assessment.",
  },
  {
    id: "fatigue",
    name: "Fatigue",
    etymology: "French fatiguer = to tire/weary",
    aliases: [
      "fatigue",
      "fatigued",
      "tiredness",
      "tired",
      "lethargy",
      "lethargic",
      "exhaustion",
      "exhausted",
      "malaise",
      "asthenia",
    ],
    definition:
      "Subjective sense of decreased energy, stamina, or capacity for sustained physical or mental effort — one of the most common constitutional symptoms across medical, psychiatric, and metabolic disease.",
    mechanism:
      "Arises from impaired oxygen delivery (anemia, heart failure), metabolic/endocrine dysfunction (hypothyroidism, adrenal insufficiency, diabetes), cytokine-mediated sickness behavior (infection, malignancy, autoimmune disease), sleep disruption, medication effects, or primary psychiatric illness reducing motivation and perceived energy.",
    thinkOf: [
      "Anemia — iron deficiency, B12/folate deficiency, chronic disease",
      "Hypothyroidism",
      "Heart failure or chronic cardiopulmonary disease",
      "Depression and anxiety",
      "Chronic infection (HIV, TB, endocarditis)",
      "Malignancy (lymphoma, leukemia, solid tumors)",
      "Adrenal insufficiency",
      "Diabetes — poor glycemic control",
      "Chronic fatigue syndrome / fibromyalgia",
      "Medication effect (β-blockers, antihistamines, chemotherapy)",
    ],
    pairWith: [
      "Fatigue + pallor + exertional dyspnea → anemia",
      "Fatigue + cold intolerance + weight gain → hypothyroidism",
      "Fatigue + orthostatic hypotension + hyperpigmentation → adrenal insufficiency",
      "Fatigue + fever + night sweats + lymphadenopathy → lymphoma or TB",
      "Fatigue + polyuria/polydipsia + weight loss → diabetes",
      "Fatigue + exertional dyspnea + edema → heart failure",
      "Fatigue + low mood + anhedonia → depression",
      "Fatigue + muscle weakness + ↑ CK → myopathy (not fatigue alone)",
    ],
    distinguishFrom: [
      "Exertional dyspnea — primary complaint is breathlessness, not low energy",
      "Weakness — objective loss of muscle power; distinguish from subjective fatigue",
      "Somnolence — excessive sleepiness or inability to stay awake",
      "Cachexia — tissue wasting with weight loss; fatigue may coexist but is not synonymous",
    ],
    pediatrics:
      "Fatigue in adolescents warrants evaluation for anemia, thyroid disease, depression, mono, and inflammatory bowel disease; isolated fatigue after viral illness may be prolonged but red flags include weight loss, fever, night sweats, or bruising.",
  },
  {
    id: "friable-mass",
    name: "Friable Mass",
    etymology: "Latin friabilis = easily crumbled + Latin massa = lump",
    aliases: [
      "friable mass",
      "friable masses",
      "friable lesion",
      "friable lesions",
      "friable tumor",
      "friable tumors",
      "friable cervix",
      "friable cervical lesion",
      "bleeds easily on contact",
    ],
    definition:
      "Palpable or visible lesion that bleeds easily with minimal trauma or examination contact — a high-yield descriptor for neoplastic, inflammatory, or vascular mucosal pathology.",
    mechanism:
      "Abnormal surface epithelium with loss of integrity, neovascularization, inflammation, or tumor infiltration creates fragile tissue that disrupts with gentle touch, intercourse, or speculum exam → contact bleeding.",
    thinkOf: [
      "Cervical squamous cell carcinoma — friable cervix with postcoital bleeding",
      "Cervical polyp — benign friable protrusion",
      "Cervicitis — Chlamydia, gonorrhea, herpes",
      "Endometrial carcinoma — friable uterine bleeding",
      "Rectal/proctitis lesions — friable mucosa in IBD or infection",
      "Oral squamous cell carcinoma — friable ulcerated mass",
      "Kaposi sarcoma or other friable mucocutaneous tumors",
    ],
    pairWith: [
      "Friable cervix + postcoital bleeding → cervical cancer until proven otherwise",
      "Friable mass + purulent discharge + cervical motion tenderness → cervicitis/PID",
      "Friable rectal mucosa + tenesmus + bloody mucus → proctitis or IBD",
      "Friable oral ulcer that does not heal → squamous cell carcinoma",
      "Postmenopausal bleeding + friable endometrial lesion → endometrial carcinoma",
      "Speculum exam causes bleeding → document friability; biopsy indicated",
    ],
    distinguishFrom: [
      "Firm, nonfriable mass — may still be malignant but less contact bleeding (e.g., fibroid)",
      "Petechiae/purpura — microvascular bleeding without friable mass lesion",
      "Traumatic laceration — acute injury, not chronic friable neoplasm",
      "Hemorrhoids — friable vascular cushions but distinct anorectal exam finding",
    ],
    pediatrics:
      "Cervical friability in adolescents more often reflects ectropion or cervicitis than carcinoma; still evaluate persistent postcoital bleeding. DES-related clear cell adenocarcinoma can present as friable cervical/vaginal lesion in young women.",
  },
  {
    id: "postcoital-bleeding",
    name: "Postcoital Bleeding",
    etymology: "Latin post = after + coitus = sexual intercourse + bleeding",
    aliases: [
      "postcoital bleeding",
      "post coital bleeding",
      "post-coital bleeding",
      "bleeding after intercourse",
      "bleeding after sex",
      "postcoital spotting",
      "contact bleeding",
      "contact bleeding from cervix",
    ],
    definition:
      "Vaginal bleeding triggered by or noticed after sexual intercourse — often reflects cervical or vaginal mucosal pathology rather than uterine menstrual bleeding.",
    mechanism:
      "Friction or trauma during intercourse disrupts fragile cervical or vaginal epithelium (neoplasia, ectropion, inflammation, polyps) or exposes friable vascular lesions → bleeding noticed after coitus.",
    thinkOf: [
      "Cervical squamous cell carcinoma — classic boards association",
      "Cervical intraepithelial neoplasia (CIN)",
      "Cervical ectropion (ectopy) — physiologic columnar epithelium on ectocervix",
      "Cervicitis — Chlamydia trachomatis, Neisseria gonorrhoeae",
      "Cervical polyp",
      "Atrophic vaginitis — postmenopausal vaginal mucosa",
      "Traumatic laceration or inadequate lubrication",
    ],
    pairWith: [
      "Postcoital bleeding + friable cervix → cervical cancer",
      "Postcoital bleeding + mucopurulent discharge + cervical motion tenderness → cervicitis/PID",
      "Postcoital bleeding + Pap showing HSIL → CIN/cervical neoplasia",
      "Postcoital bleeding in adolescent with ectropion → often benign; still evaluate if persistent",
      "Postcoital bleeding + postmenopausal status → endometrial pathology also on differential",
      "HPV-positive + abnormal Pap → colposcopy and biopsy",
    ],
    distinguishFrom: [
      "Menstrual bleeding — cyclic uterine flow unrelated to intercourse timing",
      "Implantation bleeding — early pregnancy spotting, not postcoital",
      "Postmenopausal bleeding — endometrial source more likely; still evaluate cervix",
      "Midcycle ovulation spotting — brief, around ovulation, not tied to intercourse",
      "Vesicovaginal fistula — continuous leakage, not episodic postcoital bleeding",
    ],
    pediatrics:
      "In adolescents, postcoital bleeding often reflects cervical ectropion or STI-related cervicitis; cervical carcinoma is rare but abnormal bleeding warrants Pap/HPV testing per age-based guidelines and exam for friability.",
  },
  {
    id: "angioedema",
    name: "Angioedema",
    etymology:
      "Greek angeion = vessel + oidema = swelling",
    aliases: [
      "angioedema",
      "angio-oedema",
      "angioneurotic edema",
      "angioneurotic oedema",
      "acute angioedema",
    ],
    definition:
      "Nonpitting, well-demarcated swelling of the deep dermis and subcutaneous/submucosal tissues — often affects face, lips, tongue, larynx, or bowel wall — from increased vascular permeability mediated by histamine or bradykinin.",
    mechanism:
      "Histamine-mediated (IgE anaphylaxis, ACE inhibitor–induced kinin accumulation, direct mast cell activation) or bradykinin-mediated (hereditary angioedema, ACE-I also ↑ bradykinin) vasodilation and capillary leak in deep tissues; laryngeal involvement threatens airway.",
    thinkOf: [
      "Anaphylaxis — urticaria with angioedema, bronchospasm, hypotension",
      "ACE inhibitor adverse effect — lip/tongue swelling days to years after starting drug",
      "Hereditary angioedema — C1 esterase inhibitor deficiency; episodic swelling without urticaria",
      "Acquired C1 inhibitor deficiency (lymphoproliferative disorders)",
      "Food or drug allergy",
      "Idiopathic histaminergic angioedema",
    ],
    pairWith: [
      "Angioedema + urticaria + wheeze/hypotension → anaphylaxis; give epinephrine",
      "Angioedema after starting lisinopril → ACE inhibitor–induced; stop ACE-I, airway watch",
      "Recurrent abdominal pain + limb/face swelling without hives → hereditary angioedema",
      "Low C4 + family history → hereditary angioedema (C1-INH deficiency)",
      "Angioedema unresponsive to epinephrine/antihistamines → think bradykinin-mediated HAE",
      "Icatibant or C1-INH concentrate for acute HAE; danazol/fresh frozen plasma in some settings",
    ],
    distinguishFrom: [
      "Urticaria — superficial wheals, pruritic; may coexist but angioedema is deeper swelling",
      "Pitting edema — heart failure, nephrotic syndrome; dependent, slow onset, not acute mucosal",
      "Contact dermatitis — pruritic eczematous rash, not acute deep submucosal edema",
      "Cellulitis — erythema, warmth, fever; infectious not mediator-driven permeability",
      "Myxedema — hypothyroid nonpitting mucopolysaccharide deposition, not acute angioedema",
    ],
    pediatrics:
      "ACE inhibitors are uncommon in children but cause same angioedema risk; hereditary angioedema may present in childhood with abdominal attacks mimicking obstruction — low C4 is screening clue.",
  },
  {
    id: "diarrhea",
    name: "Diarrhea",
    etymology: "Greek dia = through + rhoia = flow",
    aliases: [
      "diarrhea",
      "diarrhoea",
      "loose stools",
      "loose stool",
      "watery diarrhea",
      "watery diarrhoea",
      "bloody diarrhea",
      "bloody diarrhoea",
    ],
    definition:
      "Passage of abnormally frequent, loose, or watery stools — classify as acute vs chronic (>4 weeks), osmotic vs secretory vs inflammatory, and assess volume/dehydration risk.",
    mechanism:
      "↑ luminal osmotic load (malabsorption, laxatives), active ion secretion (cholera toxin, VIP, carcinoid), inflammation with mucosal exudation (IBD, invasive bacteria), or accelerated motility (hyperthyroidism, IBS) overwhelms colonic water absorption → increased stool water and frequency.",
    thinkOf: [
      "Viral gastroenteritis (norovirus, rotavirus)",
      "Osmotic — lactose intolerance, laxatives, malabsorption",
      "Secretory — cholera, VIPoma, carcinoid syndrome",
      "Inflammatory — ulcerative colitis, Crohn disease, C. difficile",
      "Invasive bacterial — Shigella, Salmonella, Campylobacter, EHEC",
      "Celiac disease, tropical sprue, Whipple disease",
      "Hyperthyroidism, factitious (Munchausen by proxy with laxatives)",
    ],
    pairWith: [
      "Watery diarrhea + rice-water stools → cholera (secretory, isotonic stool)",
      "Bloody diarrhea + fever → invasive enteritis, EHEC/HUS risk",
      "Recent antibiotics + pseudomembranes → C. difficile colitis",
      "Chronic bloody diarrhea starting at rectum → ulcerative colitis",
      "Flushing + watery diarrhea → carcinoid syndrome (↑ 5-HIAA)",
      "Multiple peptic ulcers + diarrhea → Zollinger-Ellison syndrome",
      "Travel history + profuse diarrhea → traveler's diarrhea (ETEC common)",
      "Dehydration, hypotension, dry mucous membranes → assess volume status urgently",
    ],
    distinguishFrom: [
      "Constipation with overflow incontinence — impaction with seepage, not true diarrhea",
      "Fecal urgency without increased stool volume — proctitis or IBS",
      "Steatorrhea — fatty, foul-smelling stools from malabsorption; may be chronic loose stools",
      "Melena — upper GI blood; black tarry stool, not watery diarrhea",
      "Normal stool variation — transient loose stool after dietary change",
    ],
    pediatrics:
      "Rotavirus vaccine has reduced severe pediatric gastroenteritis; dehydration is main acute risk — assess capillary refill and urine output. Bloody diarrhea in children: EHEC → HUS, Shigella, IBD; infectious diarrhea is common but intussusception and malrotation present with pain and vomiting.",
  },
  {
    id: "costovertebral-angle-tenderness",
    name: "Costovertebral Angle Tenderness",
    etymology:
      "Latin costa = rib + vertebra = joint of spine + Latin angulus = corner + tender = sore to touch",
    aliases: [
      "costovertebral angle tenderness",
      "costovertebral angle tender",
      "cva tenderness",
      "cva tender",
      "costovertebral tenderness",
      "renal angle tenderness",
      "renal punch tenderness",
      "murphy punch sign",
      "positive murphy punch",
      "percussion tenderness at cva",
    ],
    definition:
      "Pain elicited by percussion or deep palpation over the costovertebral angle (90° angle between the 12th rib and vertebral column) — a physical exam sign of renal capsule or perinephric inflammation.",
    mechanism:
      "Inflammation or distension of the renal parenchyma, renal capsule, or perinephric tissues activates somatic and visceral afferents in the flank; percussion transmits force to the inflamed kidney → localized tenderness at the CVA.",
    thinkOf: [
      "Acute pyelonephritis — fever, flank pain, WBC casts",
      "Perinephric abscess",
      "Renal infarction",
      "Obstructing nephrolithiasis with hydronephrosis (less specific than infection)",
      "Xanthogranulomatous pyelonephritis",
      "Emphysematous pyelonephritis (diabetics)",
    ],
    pairWith: [
      "CVA tenderness + fever + pyuria/WBC casts → acute pyelonephritis",
      "CVA tenderness + severe colicky pain radiating to groin → obstructing ureteral stone",
      "CVA tenderness + diabetes + crepitus on imaging → emphysematous pyelonephritis",
      "CVA tenderness + persistent fever despite antibiotics → perinephric abscess",
      "Dysuria without CVA tenderness → likely lower UTI (cystitis) not pyelonephritis",
      "Normal vitals and no CVA tenderness with dysuria → uncomplicated cystitis (outpatient treatment)",
    ],
    distinguishFrom: [
      "Flank pain without percussion tenderness — musculoskeletal strain, may lack CVA tenderness",
      "Suprapubic tenderness — bladder/cystitis, not renal angle",
      "Rovsing sign — RLQ pain with palpation of LLQ; appendicitis, not renal",
      "Murphy sign (cholecystitis) — inspiratory arrest with RUQ palpation, not CVA percussion",
      "Mechanical back pain — paraspinal tenderness, negative CVA percussion",
    ],
    pediatrics:
      "Young children with UTI may have fever and vomiting with subtle CVA tenderness; febrile UTI in infants warrants renal ultrasound and consideration of pyelonephritis. Vesicoureteral reflux predisposes to recurrent pyelonephritis with CVA tenderness.",
  },
  {
    id: "radiates-to-groin",
    name: "Radiates to the Groin",
    etymology:
      "Latin radiare = emit rays + groin = inguinal region",
    aliases: [
      "radiates to the groin",
      "radiates to groin",
      "radiating to the groin",
      "radiating to groin",
      "pain radiating to groin",
      "pain radiates to groin",
      "flank pain radiating to groin",
      "colicky pain radiating to groin",
      "renal colic radiating to groin",
      "ureteral colic radiating to groin",
      "groin radiation",
    ],
    definition:
      "Pain that spreads from the flank or loin down toward the inguinal region or testicle/labia — classic radiation pattern of ureteral obstruction and colic.",
    mechanism:
      "Ureteral distension and smooth muscle spasm from an obstructing calculus (or clot/tumor) activate visceral afferents sharing T11–L2 segmental innervation with referred pain to the ipsilateral groin, testicle, or labia majora as the stone migrates distally.",
    thinkOf: [
      "Nephrolithiasis / ureterolithiasis — most classic cause",
      "Ureteral obstruction from clot (papillary necrosis, renal tumor)",
      "Ureteral stricture with acute obstruction",
      "Renal colic from sloughed papilla",
      "Testicular torsion — groin pain but usually not flank origin (distinguish)",
    ],
    pairWith: [
      "Flank pain radiating to groin + hematuria → nephrolithiasis",
      "Colicky waxing/waning pain + restlessness → ureteral stone",
      "Groin radiation + fever + CVA tenderness → pyelonephritis (less classic groin radiation than stone)",
      "Pain moves distally as stone passes ureter → UVJ obstruction causes new urgency",
      "Sudden flank-to-groin pain + absent testicular reflex → do not miss torsion if testicular pain predominates",
      "CT abdomen/pelvis without contrast — stone diagnosis when classic radiation present",
    ],
    distinguishFrom: [
      "Isolated groin pain — inguinal hernia, lymphadenopathy, hip pathology without ureteral colic",
      "Testicular torsion — acute scrotal pain, absent cremasteric reflex; may refer to groin but not from flank colic",
      "Radiation to back — AAA dissection/rupture, pancreatitis, not classic ureteral pattern",
      "Radiation to shoulder — diaphragmatic irritation (splenic injury, ruptured ectopic free fluid)",
      "Suprapubic pain only — bladder outlet pathology without ureteral radiation",
    ],
    pediatrics:
      "Children with ureteral stones may describe abdominal pain more than flank-to-groin radiation; adolescent presentation mirrors adults. Always consider testicular torsion in boy with groin/scrotal pain — do not attribute solely to stones without exam.",
  },
  {
    id: "abdominal-bruit",
    name: "Abdominal Bruit",
    etymology: "Latin abdomin = belly + Greek brachy = short + bruit = noise (originally a short harsh sound)",
    aliases: [
      "abdominal bruit",
      "abdominal bruits",
      "abdominal vascular bruit",
      "abdominal vascular bruits",
      "epigastric bruit",
      "epigastric bruits",
      "renal bruit",
      "renal bruits",
    ],
    definition:
      "Audible vascular murmur on auscultation over the abdomen — reflects turbulent flow through a stenotic, aneurysmal, or high-flow arterial segment.",
    mechanism:
      "Laminar flow becomes turbulent when vessel lumen narrows or flow increases (stenosis, AV fistula, hyperdynamic circulation) → vibratory sound transmitted to abdominal wall; location and timing (systolic vs continuous) narrow the differential.",
    thinkOf: [
      "Renal artery stenosis — fibromuscular dysplasia (young woman) or atherosclerosis (older)",
      "Abdominal aortic aneurysm — systolic bruit over midline aorta",
      "Hepatic arteriovenous malformation or cirrhosis with increased hepatic flow",
      "Celiac or mesenteric artery stenosis (less common on boards)",
      "Pregnancy — physiologic increased renal/aortic flow (benign)",
    ],
    pairWith: [
      "Young woman + resistant HTN + epigastric/flank bruit → renal artery fibromuscular dysplasia",
      "Older smoker + HTN + pulsatile abdominal mass + bruit → AAA",
      "Resistant HTN + ↑ renin/aldosterone + bruit → renovascular hypertension",
      "ACE inhibitor-induced creatinine rise + bruit → bilateral or significant unilateral renal artery stenosis",
      "Continuous bruit over liver → hepatic AV malformation or fistula",
    ],
    distinguishFrom: [
      "Bowel sounds — gurgling peristaltic clicks, not harsh vascular murmur",
      "Venous hum — soft continuous sound from high-flow states; not focal stenotic bruit",
      "Cardiac murmur radiating to abdomen — origin at precordium, not isolated epigastric focus",
      "Normal epigastric bruit in thin young adults — up to ~20% prevalence; interpret with clinical context",
    ],
    pediatrics:
      "Renal artery stenosis from fibromuscular dysplasia can present in adolescents; coarctation-related abdominal bruits are less common than femoral/brachial BP discrepancies. Always correlate bruit with BP pattern and renal function.",
  },
  {
    id: "tetany",
    name: "Tetany",
    etymology: "Greek tetanos = tension/stretch (sustained muscle contraction)",
    aliases: [
      "tetany",
      "tetanies",
      "hypocalcemic tetany",
      "hypocalcaemic tetany",
      "latent tetany",
      "manifest tetany",
    ],
    definition:
      "Neuromuscular hyperexcitability from hypocalcemia (or effective hypocalcemia with alkalosis) causing paresthesias, muscle cramps, carpopedal spasm, and potentially laryngospasm or seizures.",
    mechanism:
      "↓ extracellular ionized Ca²⁺ lowers the voltage threshold for Na⁺ channel opening in nerves and muscle → spontaneous depolarization and sustained contraction; metabolic alkalosis ↑ protein-bound Ca²⁺ and worsens ionized hypocalcemia symptoms.",
    thinkOf: [
      "Hypoparathyroidism — post-thyroidectomy, autoimmune, DiGeorge syndrome",
      "Vitamin D deficiency or rickets/osteomalacia",
      "Acute pancreatitis — saponification of peripancreatic fat consumes Ca²⁺",
      "Massive transfusion — citrate chelation of Ca²⁺",
      "Hyperphosphatemia in CKD binding Ca²⁺",
      "Hungry bone syndrome after parathyroidectomy",
    ],
    pairWith: [
      "Perioral tingling + carpopedal spasm → hypocalcemia / tetany",
      "Chvostek sign (facial twitch on tapping) → hypocalcemia",
      "Trousseau sign (carpal spasm with BP cuff) → hypocalcemia",
      "Prolonged QT interval → hypocalcemia",
      "Neonatal seizures + absent thymic shadow → DiGeorge hypocalcemic tetany",
      "Acute pancreatitis + hypocalcemia → fat saponification",
    ],
    distinguishFrom: [
      "Tetanus — C. tetani toxin causes rigid spastic paralysis, not hypocalcemic hyperexcitability",
      "Muscle spasm — focal painful contraction without systemic neuromuscular hyperexcitability",
      "Seizure — cortical neuronal discharge; tetany can progress to seizures if severe hypocalcemia",
      "Hyperventilation tetany — respiratory alkalosis ↓ ionized Ca²⁺; transient without structural hypoparathyroidism",
    ],
    pediatrics:
      "Neonatal hypocalcemia from prematurity, maternal diabetes, or DiGeorge syndrome presents with jitteriness, tetany, or seizures — check ionized calcium. Rickets causes hypocalcemic tetany in toddlers.",
  },
  {
    id: "tenesmus",
    name: "Tenesmus",
    etymology: "Greek teinesin = to stretch/strain + -mus = condition",
    aliases: [
      "tenesmus",
      "rectal tenesmus",
      "anal tenesmus",
      "bowel tenesmus",
      "fecal urgency with incomplete evacuation",
    ],
    definition:
      "Painful sensation of incomplete rectal evacuation with persistent urge to defecate despite empty or repeated bowel movements — reflects rectal inflammation, mass effect, or motility dysfunction.",
    mechanism:
      "Inflammation or distention of rectal mucosa and anal canal (infection, IBD, tumor) or dysmotility activates stretch and pain pathways → repeated defecation attempts with little stool passage.",
    thinkOf: [
      "Ulcerative colitis — especially proctitis and left-sided colitis",
      "Infectious proctocolitis — Shigella, Campylobacter, C. difficile, STIs (gonorrhea, HSV, chlamydia LGV)",
      "Rectal cancer — mass with urgency and incomplete evacuation",
      "Hemorrhoids and anal fissure (less prominent tenesmus than inflammatory causes)",
      "Radiation proctitis",
      "Ischemic colitis involving rectosigmoid",
    ],
    pairWith: [
      "Bloody mucoid stools + tenesmus + urgency → UC or infectious proctitis",
      "Tenesmus + weight loss + anemia → rectal cancer until proven otherwise",
      "MSM + tenesmus + discharge → infectious proctitis workup",
      "Tenesmus + fever + bloody diarrhea → Shigella dysentery",
      "Tenesmus + friable rectal mucosa on exam → proctitis",
    ],
    distinguishFrom: [
      "Diarrhea without tenesmus — increased frequency/loose stools without painful incomplete evacuation sensation",
      "Constipation — difficult infrequent defecation, opposite of frequent urgent straining",
      "Urinary urgency — bladder origin, not rectal",
      "Fecal incontinence — passive leakage, not urge with incomplete evacuation",
    ],
    pediatrics:
      "Tenesmus with bloody diarrhea in children suggests Shigella or severe bacterial colitis; UC can present in adolescence with urgency and rectal bleeding.",
  },
  {
    id: "uremic-symptoms",
    name: "Uremic Symptoms",
    etymology: "Greek ouron = urine + haima = blood + Latin symptoma = occurrence",
    aliases: [
      "uremic symptoms",
      "uremic symptom",
      "uremia symptoms",
      "symptoms of uremia",
      "uremic syndrome symptoms",
      "uremic manifestations",
    ],
    definition:
      "Multisystem clinical manifestations of severe kidney failure from accumulation of uremic toxins, fluid overload, and endocrine/metabolic derangements — indicating need for dialysis or transplant when advanced.",
    mechanism:
      "Loss of glomerular filtration → retention of nitrogenous waste and middle molecules → endothelial dysfunction, platelet dysfunction, pericardial inflammation, pruritus from phosphate/parathyroid axis, and CNS toxicity; fluid overload and hyperkalemia add cardiovascular and neuromuscular symptoms.",
    thinkOf: [
      "End-stage renal disease / CKD stage 5",
      "Acute kidney injury with severe azotemia",
      "Inadequate dialysis (missed sessions, access failure)",
      "Obstructive uropathy with bilateral renal failure",
    ],
    pairWith: [
      "↑ BUN/Cr + ↓ GFR → uremia",
      "Pericardial rub + renal failure → uremic pericarditis (dialyze)",
      "Asterixis or confusion + renal failure → uremic encephalopathy",
      "Pruritus + phosphate ↑ + secondary hyperparathyroidism → CKD-MBD",
      "Bleeding with normal platelet count → uremic platelet dysfunction",
      "Metallic taste, anorexia, nausea → classic uremic GI symptoms",
    ],
    distinguishFrom: [
      "Prerenal azotemia — improves with volume repletion, fewer chronic uremic stigmata",
      "Early CKD (stages 1–3) — often asymptomatic despite ↓ GFR",
      "Non-uremic pruritus — normal renal function; dermatologic cause",
      "Hepatic encephalopathy — liver failure, asterixis, ↑ ammonia; renal function may be preserved",
      "Pericarditis from viral or autoimmune cause — without renal failure context",
    ],
    pediatrics:
      "Children with CKD/ESRD may present with growth failure, bone deformities (renal osteodystrophy), and developmental delay before overt adult-type uremic symptoms; monitor growth, nutrition, and bone labs.",
  },
  {
    id: "encephalopathy",
    name: "Encephalopathy",
    etymology: "Greek enkephalos = brain + pathos = suffering",
    aliases: [
      "encephalopathy",
      "encephalopathies",
      "metabolic encephalopathy",
      "toxic encephalopathy",
      "acute encephalopathy",
    ],
    definition:
      "Diffuse brain dysfunction causing altered mental status, cognitive impairment, or behavioral change — a syndrome with many metabolic, toxic, infectious, and structural causes rather than a single disease.",
    mechanism:
      "Global cerebral dysfunction from impaired energy metabolism, neurotransmitter imbalance, toxin accumulation, edema, or seizures — without a focal structural lesion as the primary explanation; severity ranges from mild confusion to coma.",
    thinkOf: [
      "Hepatic encephalopathy — cirrhosis, ↑ ammonia, asterixis",
      "Uremic encephalopathy — renal failure, dialysis indication",
      "Wernicke encephalopathy — thiamine deficiency, ophthalmoplegia, ataxia",
      "Hypertensive encephalopathy — severe BP elevation, papilledema",
      "Hypoxic-ischemic encephalopathy — post cardiac arrest, near drowning",
      "Hyperammonemia — urea cycle defects, valproate toxicity",
      "Hypoglycemia, severe hyponatremia, hypercalcemia",
      "Sepsis, stroke (global hypoperfusion), post-ictal state",
    ],
    pairWith: [
      "Cirrhosis + asterixis + confusion → hepatic encephalopathy (lactulose, rifaximin)",
      "Renal failure + asterixis → uremic encephalopathy (dialysis)",
      "Alcoholism + ophthalmoplegia + ataxia → Wernicke (thiamine before glucose)",
      "Severe HTN + headache + papilledema → hypertensive encephalopathy",
      "↑ Ammonia → hepatic or urea cycle disorder",
      "Post arrest + myoclonus → hypoxic-ischemic encephalopathy",
    ],
    distinguishFrom: [
      "Delirium from single pharmacologic cause — often reversible with drug cessation",
      "Dementia — chronic progressive decline, not acute metabolic encephalopathy",
      "Focal neurologic deficit from stroke — localized lesion on imaging",
      "Meningitis/encephalitis — fever, meningismus, CSF pleocytosis",
      "Psychiatric primary disorder — no metabolic trigger or objective encephalopathic signs",
      "Wernicke encephalopathy — specific triad subset of acute encephalopathy",
    ],
    pediatrics:
      "Neonatal encephalopathy often reflects hypoxic-ischemic injury at birth or inborn errors (hyperammonemia from urea cycle defects). Reye syndrome and metabolic crises present with acute encephalopathy in children — evaluate glucose, ammonia, and electrolytes urgently.",
  },
  {
    id: "leg-bowing",
    name: "Leg Bowing",
    etymology: "Old English leg = limb + bow = curved/bent",
    aliases: [
      "leg bowing",
      "bow legs",
      "bowed legs",
      "bowed leg",
      "genu varum",
      "tibial bowing",
      "lower extremity bowing",
      "curved legs",
    ],
    definition:
      "Outward curvature of the lower legs so the knees stay apart when the feet are together (genu varum) — may be physiologic in toddlers or pathologic from bone softening, growth plate disease, or skeletal dysplasia.",
    mechanism:
      "Physiologic: wide infant hip angle and tibial torsion normalize with weight-bearing. Pathologic: weakened or unmineralized bone (rickets/osteomalacia), asymmetric physeal growth (Blount disease), or genetic short-limb dysplasia → mechanical bowing under load at the knee.",
    thinkOf: [
      "Physiologic genu varum — symmetric, toddlers up to ~2 years, resolves",
      "Rickets — vitamin D deficiency, renal osteodystrophy, hypophosphatemic rickets",
      "Blount disease (tibia vara) — progressive unilateral or asymmetric bowing after age 2",
      "Achondroplasia — rhizomelic shortening with bowing",
      "Osteogenesis imperfecta — bowing with fractures and blue sclerae",
      "Metabolic bone disease — ↑ ALP, abnormal calcium/phosphate/vitamin D",
    ],
    pairWith: [
      "Toddler + symmetric mild bowing → physiologic (reassurance if improving)",
      "Widened wrists/ankles + rachitic rosary + breastfed infant → rickets",
      "↑ ALP + ↓ vitamin D + ↑ PTH → rickets",
      "Unilateral or progressive after age 2 → Blount disease",
      "Disproportionate short stature + frontal bossing → achondroplasia",
      "Bone pain + fractures + blue sclerae → osteogenesis imperfecta",
    ],
    distinguishFrom: [
      "Genu valgum (knock-knees) — knees together, ankles apart; common physiologic phase ages 3–4",
      "Femoral anteversion — in-toeing gait, not true tibial bowing",
      "Tibial torsion — rotational deformity, not coronal plane bowing",
      "Rickets vs physiologic bowing — rickets has metaphyseal widening, lab abnormalities, systemic signs",
    ],
    pediatrics:
      "Physiologic bow legs are common from infancy until ~18–24 months and resolve with normal growth. Persistent, asymmetric, or progressive bowing after age 2 warrants X-ray and labs for rickets or Blount disease. Vitamin D 400 IU/day prevents nutritional rickets in breastfed infants.",
  },
  {
    id: "constipation",
    name: "Constipation",
    etymology: "Latin constipare = to press/crowd together",
    aliases: [
      "constipation",
      "constipated",
      "chronic constipation",
      "functional constipation",
      "slow transit constipation",
      "infrequent bowel movements",
    ],
    definition:
      "Difficult, infrequent, or incomplete defecation — typically fewer than three bowel movements per week, hard stools, straining, or sensation of blockage — from slowed colonic transit, outlet dysfunction, or secondary causes.",
    mechanism:
      "Reduced colonic motility (↓ parasympathetic tone, drugs, hypothyroidism), excessive water reabsorption in colon, outlet obstruction (pelvic floor dyssynergia, stricture), or neurologic/metabolic disorders impair propulsion and evacuation; chronic retention → fecal impaction and possible overflow incontinence.",
    thinkOf: [
      "Functional constipation — most common in adults and children",
      "Opioids and anticholinergic drugs",
      "Hypothyroidism",
      "Hypercalcemia / hyperparathyroidism",
      "Irritable bowel syndrome (constipation-predominant)",
      "Hirschsprung disease — failure to pass meconium, distension in infant",
      "Parkinson disease, multiple sclerosis, spinal cord injury (neurogenic)",
      "Celiac disease, low-fiber diet, dehydration",
      "Mechanical obstruction or stricture — if red flags present",
    ],
    pairWith: [
      "Opioid use + hard stools + abdominal discomfort → opioid-induced constipation",
      "No meconium in first 48 h + abdominal distension → Hirschsprung disease",
      "Cold intolerance + weight gain + fatigue → hypothyroidism",
      "Polyuria + stones + bone pain + constipation → hypercalcemia",
      "Bloody stool + weight loss + anemia → colorectal cancer (not simple constipation)",
      "Liquid stool seepage in elderly → overflow from fecal impaction",
      "Rectal prolapse on straining + chronic straining → outlet dysfunction",
    ],
    distinguishFrom: [
      "Diarrhea — increased frequency and loose stools, opposite pattern",
      "Fecal impaction — complication of chronic constipation, not the primary symptom label",
      "Small bowel obstruction — vomiting, distension, high-pitched or absent bowel sounds",
      "Ileus — absent motility after surgery, infection, or electrolyte disturbance",
      "Tenesmus — painful urge with little stool; think proctitis, IBD, cancer",
      "Normal stool frequency variation — not every daily bowel movement required for health",
    ],
    pediatrics:
      "Functional constipation is very common after toilet training; treat with disimpaction and maintenance laxatives (PEG). Failure to pass meconium within 48 hours, abdominal distension, or poor growth suggests Hirschsprung disease — rectal biopsy. Encopresis often reflects overflow from chronic retentive constipation.",
  },
  {
    id: "rigors",
    name: "Rigors",
    etymology: "Latin rigor = stiffness/shaking",
    aliases: [
      "rigors",
      "rigor",
      "shaking chills",
      "shaking chill",
      "shivering rigors",
      "febrile rigors",
    ],
    definition:
      "Intense, often violent shivering episodes accompanying a rapid rise in body temperature — reflecting maximal heat-generating muscular activity as the hypothalamic set point increases.",
    mechanism:
      "Pyrogen-driven ↑ hypothalamic thermostat → perceived cold → sympathetic activation and involuntary skeletal muscle contraction (shivering) to raise core temperature — more severe than mild chills and commonly associated with high-grade bacteremia or malaria paroxysms.",
    thinkOf: [
      "Bacteremia and sepsis",
      "Infective endocarditis",
      "Pyelonephritis and ascending UTI",
      "Malaria (cyclical paroxysms with rigors)",
      "Abscess (intra-abdominal, pelvic, soft tissue)",
      "Drug infusion reactions (amphotericin B — shake and bake)",
    ],
    pairWith: [
      "Fever spike + hypotension → sepsis/bacteremia",
      "New murmur + embolic phenomena → endocarditis",
      "Flank pain + pyuria → pyelonephritis",
      "Travel to endemic area + cyclic fever → malaria",
      "IV amphotericin infusion → infusion-related rigors",
    ],
    distinguishFrom: [
      "Simple chills — milder shivering without the intense shaking of rigors",
      "Hyperthermia shivering — initial phase of heat stroke before set-point confusion clears",
      "Essential tremor or seizure — not tied to febrile illness pattern",
      "Hypothermia shivering — body temperature below normal, not pyrogen-mediated fever rise",
    ],
    pediatrics:
      "Rigors with fever in infants and young children warrant careful evaluation for bacteremia and UTI; neonates may not mount rigors and instead present with lethargy or hypothermia during serious infection.",
  },
  {
    id: "hyperthermia",
    name: "Hyperthermia",
    etymology: "Greek hyper = excessive + Greek therme = heat",
    aliases: [
      "hyperthermia",
      "hyperthermias",
      "hyperthermic state",
      "elevated body temperature without fever",
      "non-pyrogenic hyperthermia",
    ],
    definition:
      "Elevated core body temperature from failure of thermoregulation or excess heat production — without a reset hypothalamic set point driven by pyrogens (unlike true fever).",
    mechanism:
      "Heat gain exceeds dissipation (environmental heat stroke, exertion) or unregulated metabolic heat production (malignant hyperthermia from RYR1 mutation with anesthetics, neuroleptic malignant syndrome, serotonin syndrome, thyroid storm, salicylate toxicity) — hypothalamic set point is normal or overwhelmed rather than cytokine-elevated.",
    thinkOf: [
      "Heat stroke — hot dry skin, high ambient temperature, exertion",
      "Malignant hyperthermia — volatile anesthetics or succinylcholine in susceptible patients",
      "Neuroleptic malignant syndrome — antipsychotic exposure, rigidity, ↑ CK",
      "Serotonin syndrome — serotonergic drugs, clonus, hyperreflexia",
      "Anticholinergic toxidrome — dry skin, mydriasis, urinary retention",
      "Thyroid storm — hypermetabolic state with fever",
    ],
    pairWith: [
      "Recent anesthesia + ↑ EtCO₂ + rigidity → malignant hyperthermia",
      "New antipsychotic + lead-pipe rigidity + ↑ CK → NMS",
      "SSRI + MAOI + clonus/agitation → serotonin syndrome",
      "Hot environment + altered mental status + dry skin → heat stroke",
      "Normal set point physiology — cooling measures work; antipyretics less effective than in true fever",
    ],
    distinguishFrom: [
      "Fever — pyrogen-mediated hypothalamic set-point rise; responds to antipyretics and treats underlying infection",
      "Factitious fever — fabricated readings without true temperature elevation",
      "Hyperpyrexia — extreme elevation (>41.5°C) can occur in either fever or hyperthermia",
      "Hypothalamic stroke — rare central fever with structural lesion",
    ],
    pediatrics:
      "Children are at higher risk for heat stroke due to higher surface-area-to-mass ratio and dependence on caregivers for hydration. Malignant hyperthermia susceptibility presents across ages if exposed to triggering anesthetics.",
  },
  {
    id: "internuclear-ophthalmoplegia",
    name: "Internuclear ophthalmoplegia",
    etymology: "Latin inter = between + nucleus = kernel + Greek ophthalmos = eye + plege = stroke",
    aliases: [
      "internuclear ophthalmoplegia",
      "internuclear ophthalmoplegias",
      "ino",
      "internuclear ophthalmoplegia syndrome",
    ],
    definition:
      "Disconjugate horizontal gaze from a lesion in the medial longitudinal fasciculus (MLF) — impaired adduction of the ipsilateral eye with nystagmus of the abducting contralateral eye on attempted lateral gaze.",
    mechanism:
      "MLF connects CN VI nucleus (abducens) to contralateral CN III nucleus (oculomotor) to coordinate conjugate horizontal gaze → MLF lesion breaks communication → ipsilateral medial rectus fails to adduct; contralateral lateral rectus abducts with nystagmus.",
    thinkOf: [
      "Multiple sclerosis — bilateral INO in young woman",
      "Lacunar stroke — unilateral INO in older patient with vascular risk factors",
      "Brainstem demyelination or infarction",
      "Wernicke encephalopathy — ophthalmoplegia spectrum",
    ],
    pairWith: [
      "Young woman + INO + periventricular lesions → MS",
      "Unilateral INO + hypertension, diabetes → pontine stroke",
      "Bilateral INO → MS until proven otherwise",
      "MLF lesion at level of CN VI nucleus in pons",
      "One-and-a-half syndrome — INO plus ipsilateral conjugate gaze palsy (PPRF lesion)",
    ],
    distinguishFrom: [
      "CN III palsy — ptosis, mydriasis, 'down and out' eye, not isolated adduction failure with contralateral nystagmus",
      "Myasthenia gravis — fatigable ptosis/diplopia, not classic INO pattern",
      "Conjugate gaze palsy — both eyes fail to move in same direction",
    ],
    pediatrics:
      "Bilateral INO can occur in pediatric MS or brainstem glioma; unilateral INO after head trauma or pontine stroke — evaluate with MRI.",
  },
  {
    id: "lhermitte-sign",
    name: "Lhermitte sign",
    etymology: "eponym: Jean Lhermitte + sign = clinical indicator",
    aliases: [
      "lhermitte sign",
      "lhermitte's sign",
      "lhermitte phenomenon",
      "lhermitte signs",
    ],
    definition:
      "Brief electric-shock–like sensation radiating down the spine (and sometimes into the limbs) triggered by neck flexion — indicates dorsal column or cervical cord irritation/demyelination.",
    mechanism:
      "Neck flexion stretches demyelinated cervical dorsal column fibers or adjacent cord → ectopic impulse generation or ephaptic transmission → dysesthetic shock sensation along affected tract distribution.",
    thinkOf: [
      "Multiple sclerosis — cervical plaque",
      "Cervical spondylosis with cord compression",
      "Cervical cord tumor or transverse myelitis",
      "Vitamin B12 deficiency — subacute combined degeneration",
      "Radiation myelopathy",
    ],
    pairWith: [
      "Young woman + neck flexion shock + INO → MS",
      "B12 deficiency + macrocytic anemia + posterior column signs → subacute combined degeneration",
      "Cervical MRI with demyelinating plaque at C-spine",
      "Not pathognomonic for MS — any cervical cord lesion can cause it",
    ],
    distinguishFrom: [
      "Radicular pain — dermatomal, often unilateral, not electric shock on flexion alone",
      "Tinel sign — percussion over nerve, peripheral not spinal",
      "Meningismus — neck flexion causes pain/resistance, not electric radiation",
    ],
    pediatrics:
      "Can occur in pediatric MS or cervical cord pathology; always warrants cervical spine imaging if unexplained.",
  },
  {
    id: "nystagmus",
    name: "Nystagmus",
    etymology: "Greek nystagmos = drowsiness/nodding (from rapid eye movements resembling nodding)",
    aliases: ["nystagmus", "nystagmuses", "nystagmic eye movements"],
    definition:
      "Rhythmic, involuntary oscillation of the eyes with a slow drift in one direction and a corrective fast phase in the opposite direction — may be physiologic or pathologic.",
    mechanism:
      "Disruption of vestibular, cerebellar, or gaze-holding pathways → inability to maintain steady eye position → slow phase drift corrected by fast saccade; direction named by fast phase.",
    thinkOf: [
      "Internuclear ophthalmoplegia — abducting eye nystagmus",
      "Vestibular neuritis or labyrinthitis — horizontal nystagmus",
      "Wernicke encephalopathy — gaze palsies with nystagmus",
      "Cerebellar stroke or degeneration — downbeat/upbeat nystagmus",
      "Congenital nystagmus — infantile onset",
    ],
    pairWith: [
      "INO → nystagmus in abducting eye",
      "Vertigo + horizontal nystagmus after URI → vestibular neuritis",
      "Thiamine deficiency + ophthalmoplegia + ataxia → Wernicke",
      "Downbeat nystagmus → cervicomedullary junction lesion",
      "Alcohol intoxication — gaze-evoked nystagmus",
    ],
    distinguishFrom: [
      "Opsoclonus — rapid multidirectional saccades without slow phase (dancing eyes)",
      "Seizure — ocular flutter is brief, not sustained rhythmic nystagmus",
      "End-gaze physiologic nystagmus — brief, at extremes of gaze, normal",
    ],
    pediatrics:
      "Congenital nystagmus presents in infancy; acquired nystagmus in a child warrants neuroimaging. Opsoclonus-myoclonus syndrome (neuroblastoma association) causes chaotic eye movements distinct from rhythmic nystagmus.",
  },
  {
    id: "mania",
    name: "Mania",
    etymology: "Greek mania = madness/frenzy",
    aliases: ["mania", "manias", "manic episode", "manic episodes", "manic state"],
    definition:
      "Distinct period of abnormally elevated, expansive, or irritable mood with increased energy and goal-directed activity — core feature of bipolar I disorder and can be substance- or medication-induced.",
    mechanism:
      "Dysregulated monoaminergic and glutamatergic neurotransmission (dopamine, serotonin, norepinephrine) with disrupted circadian and limbic circuitry; glucocorticoids and dopaminergic drugs can precipitate manic symptoms.",
    thinkOf: [
      "Bipolar I disorder — mania ± depression",
      "Glucocorticoid-induced mood disorder — steroids",
      "Levodopa, stimulants, antidepressant-induced mania",
      "Hyperthyroidism — irritability, insomnia, agitation",
    ],
    pairWith: [
      "Decreased sleep need + grandiosity + pressured speech → mania",
      "Steroids + new-onset euphoria/agitation → steroid-induced mania",
      "Bipolar I requires at least one manic episode",
      "Lithium, valproate, atypical antipsychotics for acute mania",
    ],
    distinguishFrom: [
      "Hypomania — bipolar II; less severe, no psychosis, no marked impairment",
      "ADHD — chronic inattention/hyperactivity, not episodic elevated mood",
      "Substance intoxication — amphetamines; resolve with clearance",
    ],
    pediatrics:
      "Pediatric bipolar disorder presents with irritability and rapid cycling more often than classic euphoric mania; ADHD and disruptive disorders are important differentials.",
  },
  {
    id: "psychosis",
    name: "Psychosis",
    etymology: "Greek psyche = mind + -osis = abnormal condition",
    aliases: ["psychosis", "psychoses", "psychotic", "psychotic symptoms", "psychotic episode"],
    definition:
      "Loss of contact with reality characterized by hallucinations (perceptions without external stimulus), delusions (fixed false beliefs), and/or disorganized thought and behavior.",
    mechanism:
      "Dopaminergic hyperactivity in mesolimbic pathway (positive symptoms) with cortical-subcortical disconnectivity; NMDA hypofunction and glutamate dysregulation also implicated; can be primary (schizophrenia), mood-related, substance-induced, or organic.",
    thinkOf: [
      "Schizophrenia — chronic psychosis with negative symptoms",
      "Schizoaffective disorder — psychosis concurrent with mood episode",
      "Glucocorticoid psychosis — high-dose steroids",
      "Stimulant intoxication, alcohol withdrawal (DTs)",
      "Wernicke-Korsakoff — acute psychosis with ophthalmoplegia",
    ],
    pairWith: [
      "Auditory hallucinations + flat affect + social withdrawal → schizophrenia",
      "Steroids + new paranoia/hallucinations → glucocorticoid psychosis",
      "Psychosis + mood episode → schizoaffective or bipolar with psychotic features",
      "Always rule out substances, steroids, neurologic disease",
    ],
    distinguishFrom: [
      "Delirium — fluctuating consciousness, inattention, visual hallucinations common",
      "Obsessive intrusive thoughts — ego-dystonic, insight preserved",
      "Malingering — inconsistent, secondary gain",
    ],
    pediatrics:
      "Early-onset schizophrenia is rare; psychosis in adolescents warrants substance screening, autoimmune encephalitis, and mood disorder evaluation.",
  },
  {
    id: "moon-facies",
    name: "Moon facies",
    etymology: "moon = round lunar appearance + Latin facies = face",
    aliases: ["moon facies", "moon face", "moon faces", "cushingoid facies", "cushingoid face"],
    definition:
      "Rounded, puffy facial appearance from fat redistribution and fluid retention — classic cushingoid feature of excess glucocorticoids (endogenous or exogenous).",
    mechanism:
      "Excess cortisol → lipogenesis and fat deposition in cheeks and temporal regions with relative limb thinning (centripetal obesity pattern); also contributes to facial plethora and edema.",
    thinkOf: [
      "Cushing syndrome — endogenous or exogenous steroids",
      "Chronic prednisone therapy",
      "Iatrogenic Cushing from inhaled steroids at high doses",
    ],
    pairWith: [
      "Moon facies + purple striae + buffalo hump → Cushing syndrome",
      "Moon facies + hyperglycemia + hypertension → glucocorticoid excess",
      "Exogenous steroids = most common cause of Cushing overall",
      "Distinguish from familial round face — no striae or proximal weakness",
    ],
    distinguishFrom: [
      "Congenital round face — no cushingoid metabolic features",
      "Angioedema — acute, asymmetric swelling",
      "Nephrotic syndrome facial edema — periorbital, not classic moon facies",
    ],
    pediatrics:
      "Iatrogenic Cushing from chronic asthma steroids can cause moon facies in children; monitor growth velocity and bone density.",
  },
  {
    id: "impaired-wound-healing",
    name: "Impaired wound healing",
    etymology: "im- = not + Latin parare = prepare + heal = restore + -ing",
    aliases: [
      "impaired wound healing",
      "poor wound healing",
      "delayed wound healing",
      "impaired wound healings",
      "poor wound healings",
    ],
    definition:
      "Delayed or incomplete closure of tissue injury with deficient granulation, re-epithelialization, or collagen deposition — increases infection and dehiscence risk.",
    mechanism:
      "Glucocorticoids ↓ fibroblast proliferation, collagen synthesis, and inflammatory phase coordination; also impaired by diabetes (microangiopathy, neuropathy), malnutrition (vitamin C, zinc), venous hypertension, radiation, and immunosuppression.",
    thinkOf: [
      "Chronic glucocorticoid therapy",
      "Diabetes mellitus",
      "Venous stasis ulcers",
      "Malnutrition, vitamin C deficiency",
      "Immunosuppressants (transplant regimens)",
    ],
    pairWith: [
      "Chronic steroids + surgical site → impaired healing",
      "Diabetes + foot ulcer → neuropathic + vascular impairment",
      "Venous stasis dermatitis → chronic leg ulcers",
      "Taper steroids perioperatively when possible; stress-dose if needed",
    ],
    distinguishFrom: [
      "Normal delayed healing in elderly — slower but progresses",
      "Wound infection — erythema, purulence, failure to epithelialize",
      "Arterial insufficiency ulcer — painful, distal, absent pulses",
    ],
    pediatrics:
      "Neonates and malnourished children heal more slowly; corticosteroids for chronic lung disease in prematurity affect skin integrity.",
  },
];

const symptomById = new Map(SYMPTOMS.map((s) => [s.id, s]));

export function getSymptomById(id: string): SymptomEntry | undefined {
  return symptomById.get(id);
}

export interface SymptomAliasMatch {
  alias: string;
  symptomId: string;
}

export function buildSymptomAliasIndex(): SymptomAliasMatch[] {
  const matches: SymptomAliasMatch[] = [];
  for (const symptom of SYMPTOMS) {
    for (const alias of symptom.aliases) {
      matches.push({ alias: alias.toLowerCase(), symptomId: symptom.id });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
