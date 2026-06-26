export interface OrganEntry {
  id: string;
  name: string;
  etymology: string;
  aliases: string[];
  germLayer: string;
  origin: string;
  derivatives?: string[];
  functionSummary?: string;
  commonPathologies?: string[];
  cancerMetastasis?: string[];
  step1Pearls?: string[];
  pediatrics?: string;
}

export const ORGANS: OrganEntry[] = [
  {
    id: "heart",
    name: "Heart",
    etymology: "Old English heorte + Greek kardia = cardiac pump",
    aliases: ["heart", "cardiac muscle", "myocardium"],
    germLayer: "Mesoderm",
    origin:
      "Develops from splanchnic mesoderm in the cardiogenic area; primitive heart tube forms via fusion of paired heart tubes and loops into four chambers.",
    derivatives: ["Myocardium", "Endocardium", "Epicardium"],
  },
  {
    id: "aorta",
    name: "Aorta",
    etymology: "Greek aorte = great artery",
    aliases: ["aorta", "aortic"],
    germLayer: "Mesoderm",
    origin:
      "Forms from the truncus arteriosus and aortic sac; dorsal aortae fuse to become the descending aorta.",
    derivatives: ["Ascending aorta", "Aortic arch", "Descending aorta"],
  },
  {
    id: "aortic-bifurcation",
    name: "Aortic Bifurcation",
    etymology:
      "Greek aorte = great artery + Latin bifurcatio = forking into two — point where the abdominal aorta divides into the right and left common iliac arteries",
    aliases: [
      "aortic bifurcation",
      "aortic bifurcations",
      "bifurcation of the aorta",
      "aortoiliac bifurcation",
      "aorto-iliac bifurcation",
      "aortic trifurcation",
    ],
    germLayer: "Mesoderm",
    origin:
      "Terminal division of the descending (abdominal) aorta at approximately the L4 vertebral level (slightly left of midline) into the right and left common iliac arteries, which continue to the pelvic brim and divide into external and internal iliac arteries.",
    derivatives: [
      "Right common iliac artery",
      "Left common iliac artery",
      "Organ of Zuckerkandl (chromaffin tissue at bifurcation)",
      "Superior hypogastric plexus (presynaptic sympathetic fibers near bifurcation)",
    ],
    functionSummary:
      "Major vascular landmark separating infrarenal aorta from iliac arterial supply to pelvis and lower limbs; common site of atherosclerotic disease and surgical/anatomic reference.",
    commonPathologies: [
      "Aortoiliac occlusive disease — claudication, diminished femoral pulses, Leriche syndrome",
      "Abdominal aortic aneurysm — may extend to or involve bifurcation",
      "Organ of Zuckerkandl paraganglioma — extra-adrenal catecholamine source in children",
      "May-Thurner syndrome — left common iliac vein compressed by right common iliac artery near confluence",
    ],
    step1Pearls: [
      "Aortic bifurcation ≈ L4 — divides into right and left common iliac arteries",
      "Organ of Zuckerkandl — chromaffin paraganglion at aortic bifurcation; pediatric pheochromocytoma source",
      "Superior hypogastric plexus — presynaptic sympathetic fibers at bifurcation (pelvic autonomics)",
      "Leriche syndrome — aortoiliac occlusion with claudication, ↓ femoral pulses, erectile dysfunction",
      "vs carotid bifurcation — cervical baroreceptor/chemoreceptor landmark, not pelvic",
      "Infrarenal AAA repair often involves clamping above bifurcation with iliac extension if needed",
    ],
    pediatrics:
      "Organ of Zuckerkandl at the aortic bifurcation is the classic extra-adrenal site of catecholamine-secreting tumors in children — episodic hypertension, flushing, and diaphoresis before adrenal pheochromocytoma is considered.",
  },
  {
    id: "external-iliac-artery",
    name: "External Iliac Artery",
    etymology:
      "Latin externus = outward + Latin ilium = flank/hip + Greek arteria = artery",
    aliases: [
      "external iliac artery",
      "external iliac arteries",
      "external iliac",
      "external iliacs",
      "eia",
      "eias",
    ],
    germLayer: "Mesoderm",
    origin:
      "Terminal branch of the common iliac artery at the pelvic brim (L4–S1); courses along the medial border of the psoas major beneath the peritoneum and passes deep to the inguinal ligament at the midinguinal point to become the femoral artery.",
    derivatives: [
      "Femoral artery (continuation beyond inguinal ligament)",
      "Inferior epigastric artery",
      "Deep circumflex iliac artery",
    ],
  },
  {
    id: "internal-iliac-artery",
    name: "Internal Iliac Artery",
    etymology:
      "Latin internus = within + Latin ilium = flank/hip + Greek arteria = artery",
    aliases: [
      "internal iliac artery",
      "internal iliac arteries",
      "internal iliac",
      "internal iliacs",
      "hypogastric artery",
      "hypogastric arteries",
      "iia",
      "iias",
    ],
    germLayer: "Mesoderm",
    origin:
      "Smaller terminal branch of the common iliac artery at the pelvic brim; descends into the pelvis anterior to the sacroiliac joint and divides into anterior and posterior trunks supplying pelvic viscera, gluteal region, perineum, and medial thigh.",
    derivatives: [
      "Anterior trunk — obturator, superior/inferior gluteal, internal pudendal, middle rectal, vesical, uterine/vaginal arteries",
      "Posterior trunk — iliolumbar, lateral sacral arteries",
    ],
  },
  {
    id: "internal-pudendal-artery",
    name: "Internal Pudendal Artery",
    etymology:
      "Latin internus = within + Latin pudendum = external genitals + Greek arteria = artery",
    aliases: [
      "internal pudendal artery",
      "internal pudendal arteries",
      "internal pudendal",
      "pudendal artery",
      "pudendal arteries",
      "arteria pudenda interna",
    ],
    germLayer: "Mesoderm",
    origin:
      "Branch of the anterior division of the internal iliac artery; exits the pelvis through the greater sciatic foramen inferior to the piriformis, hooks around the ischial spine/sacrospinous ligament, re-enters the perineum via the lesser sciatic foramen, and courses in the pudendal (Alcock) canal on the medial ischial surface with the pudendal nerve.",
    derivatives: [
      "Inferior rectal artery",
      "Perineal arteries (scrotal/labial branches)",
      "Bulbourethral and bulbar arteries to corpus spongiosum",
      "Deep and dorsal arteries of the penis or clitoris",
    ],
  },
  {
    id: "obturator-artery",
    name: "Obturator Artery",
    etymology: "Latin obturare = to close up + Greek arteria = artery",
    aliases: ["obturator artery", "obturator arteries", "arteria obturatoria"],
    germLayer: "Mesoderm",
    origin:
      "Typically arises from the anterior division of the internal iliac artery; courses anteromedially on the lateral pelvic wall and passes through the obturator canal (with the obturator nerve and vein) to enter the medial thigh and supply the obturator externus and adductor compartment.",
    derivatives: [
      "Anterior and posterior branches in the medial thigh",
      "Acetabular branch to hip joint",
      "Corona mortis variant — anastomosis with inferior epigastric artery when obturator arises from external iliac system",
    ],
  },
  {
    id: "overriding-aorta",
    name: "Overriding Aorta",
    etymology:
      "over = above/straddling + ride = sit across + Greek aorte = great artery",
    aliases: [
      "overriding aorta",
      "over-riding aorta",
      "aortic override",
      "overriding of aorta",
      "overriding root",
    ],
    germLayer: "Mesoderm",
    origin:
      "Conotruncal malalignment during septation causes the aortic root to shift rightward and sit above the ventricular septal defect, receiving blood from both ventricles rather than exclusively from the left ventricle.",
    derivatives: [
      "Component lesion of tetralogy of Fallot",
      "Variable biventricular outflow into the aorta",
    ],
    functionSummary:
      "Represents malposition of the aortic root over the interventricular septum/VSD, contributing to mixed ventricular ejection into systemic circulation in conotruncal defects.",
    commonPathologies: [
      "Tetralogy of Fallot (classic feature)",
      "Double outlet right ventricle spectrum",
    ],
    step1Pearls: [
      "Overriding aorta is one of the four lesions in tetralogy of Fallot",
      "Allows aortic blood flow from both ventricles across malalignment VSD",
      "Cyanosis severity in ToF mainly tracks RVOT obstruction, not override degree alone",
    ],
    pediatrics:
      "Detected on pediatric echocardiography in conotruncal congenital heart disease; management is tied to the full lesion set (especially RVOT obstruction and VSD size).",
  },
  {
    id: "pulmonary-artery",
    name: "Pulmonary Artery",
    etymology: "Latin pulmo = lung + Greek arteria = air-holder/artery",
    aliases: ["pulmonary artery", "pulmonary arteries"],
    germLayer: "Mesoderm",
    origin:
      "Derived from the truncus arteriosus via spiral septation, separating pulmonary and aortic outflow tracts.",
  },
  {
    id: "interatrial-septum",
    name: "Interatrial Septum",
    etymology:
      "Latin inter = between + atrium = entry hall/chamber + septum = partition",
    aliases: [
      "interatrial septum",
      "interatrial septa",
      "atrial septum",
      "atrial septa",
      "ias",
      "inter-atrial septum",
      "interatrial cardiac septum",
    ],
    germLayer: "Mesoderm (endocardial cushion contribution)",
    origin:
      "Forms from septum primum and septum secundum growing from the atrial roof toward endocardial cushions; overlapping flaps leave a foramen ovale in fetal life that normally functionally closes at birth as left atrial pressure exceeds right atrial pressure.",
    derivatives: [
      "Fossa ovalis (remnant of foramen ovale)",
      "Limbus of fossa ovalis",
    ],
    functionSummary:
      "Separates right and left atria, ensuring systemic venous blood flows into the right heart and pulmonary venous blood into the left heart; fetal foramen ovale within the septum allows right-to-left shunting before birth.",
    commonPathologies: [
      "Ostium secundum atrial septal defect (ASD)",
      "Ostium primum ASD (atrioventricular septal defect spectrum)",
      "Patent foramen ovale (PFO)",
      "Sinus venosus ASD",
    ],
    step1Pearls: [
      "Left atrial pressure > right atrial pressure after birth → functionally closes foramen ovale; anatomic closure over time → fossa ovalis",
      "Fixed, widely split S₂ with systolic ejection murmur at upper left sternal border → secundum ASD",
      "Paradoxical embolus (DVT → stroke) suggests PFO or ASD with transient right-to-left shunt",
      "Endocardial cushion defects (Down syndrome) involve the atrial and ventricular septa plus AV valves",
    ],
    pediatrics:
      "Secundum ASDs and PFOs are common in children and may be asymptomatic; large ASDs cause failure to thrive, recurrent respiratory infections, and eventually pulmonary overcirculation and Eisenmenger physiology if unrepaired.",
  },
  {
    id: "interventricular-septum",
    name: "Interventricular Septum",
    etymology:
      "Latin inter = between + ventriculus = little belly/ventricle + septum = partition",
    aliases: [
      "interventricular septum",
      "interventricular septa",
      "ventricular septum",
      "ventricular septa",
      "ivs",
      "iv septum",
      "inter-ventricular septum",
    ],
    germLayer: "Mesoderm (muscular and membranous components)",
    origin:
      "Muscular interventricular ridge grows upward from the ventricular floor; membranous portion forms from endocardial cushion tissue and conotruncal ridges closing the interventricular foramen.",
    derivatives: [
      "Muscular interventricular septum",
      "Membranous interventricular septum (thin superior portion)",
    ],
    functionSummary:
      "Electrically and mechanically separates right and left ventricles, allowing pressure differences between pulmonary and systemic circulations while supporting His-Purkinje conduction in the subendocardial tissue.",
    commonPathologies: [
      "Ventricular septal defect (VSD) — especially membranous type",
      "Perimembranous vs muscular VSDs",
      "Hypertrophic cardiomyopathy with asymmetric septal hypertrophy",
      "Infarction of septal branches of LAD → VSD rupture",
    ],
    step1Pearls: [
      "Membranous septum is most common site of VSDs (endocardial cushion/conotruncal fusion)",
      "Harsh holosystolic murmur at left lower sternal border → VSD",
      "Small VSDs may close spontaneously; large defects cause early heart failure and pulmonary overcirculation",
      "Hypertrophic obstructive cardiomyopathy — septal hypertrophy + systolic anterior motion of mitral valve → dynamic LVOT obstruction",
    ],
    pediatrics:
      "VSD is the most common congenital heart defect; large unrepaired defects in childhood can progress to Eisenmenger syndrome with cyanosis, polycythemia, and differential clubbing.",
  },
  {
    id: "pulmonic-valve",
    name: "Pulmonic Valve",
    etymology: "Latin pulmo = lung + valva = folding door/valve",
    aliases: [
      "pulmonic valve",
      "pulmonic valves",
      "pulmonary valve",
      "pulmonary valves",
      "pulmonic semilunar valve",
      "pulmonary semilunar valve",
      "pv valve",
      "pulmonic cusp",
      "pulmonic cusps",
    ],
    germLayer: "Mesoderm (endocardial cushions and truncal ridges)",
    origin:
      "Develops from endocardial cushions and conotruncal (neural crest–derived) ridges of the truncus arteriosus that spiral and separate the right ventricular outflow tract from the aorta, forming three semilunar cusps at the pulmonary root.",
    derivatives: [
      "Three pulmonic semilunar cusps",
      "Pulmonary valve annulus",
      "Pulmonary sinuses",
    ],
    functionSummary:
      "Semilunar valve between right ventricle and main pulmonary artery that opens during systole to eject blood into pulmonary circulation and closes in early diastole to prevent pulmonary regurgitation.",
    commonPathologies: [
      "Pulmonic stenosis (valvar or sub/supravalvar)",
      "Pulmonic regurgitation (post-repair of tetralogy of Fallot, pulmonary hypertension)",
      "Congenital absence or dysplasia of pulmonic valve",
      "Carcinoid heart disease predominantly affecting right-sided valves (including pulmonic)",
    ],
    step1Pearls: [
      "Pulmonic stenosis murmur — crescendo-decrescendo systolic ejection murmur at left upper sternal border, ↑ with inspiration",
      "Severe pulmonic stenosis → poststenotic dilation of pulmonary artery and right ventricular hypertrophy",
      "Chronic pulmonic regurgitation after repaired tetralogy of Fallot → RV dilation and arrhythmias",
      "Carcinoid syndrome → fibrous plaques on tricuspid and pulmonic valves (serotonin inactivated in lungs, so left heart spared unless PFO or lung carcinoid)",
    ],
    pediatrics:
      "Congenital pulmonic stenosis is a common isolated pediatric valve lesion; balloon valvuloplasty often curative and prevents progressive right ventricular hypertrophy and failure.",
  },
  {
    id: "tricuspid-valve",
    name: "Tricuspid Valve",
    etymology:
      "Latin tri = three + cuspis = point/cusp + valva = folding door/valve",
    aliases: [
      "tricuspid valve",
      "tricuspid valves",
      "right atrioventricular valve",
      "right av valve",
      "tv valve",
      "tricuspid leaflet",
      "tricuspid leaflets",
    ],
    germLayer: "Mesoderm (endocardial cushions and ventricular myocardium)",
    origin:
      "Forms from atrioventricular endocardial cushions and delamination of ventricular myocardium, producing three leaflets (anterior, posterior, septal) anchored by chordae tendineae and papillary muscles at the right atrioventricular junction.",
    derivatives: [
      "Tricuspid valve annulus",
      "Anterior, posterior, and septal tricuspid valve leaflets",
      "Chordae tendineae and papillary muscle attachments",
    ],
    functionSummary:
      "Right atrioventricular valve that opens in diastole to allow systemic venous blood to fill the right ventricle and closes in systole to prevent regurgitation into the right atrium.",
    commonPathologies: [
      "Tricuspid regurgitation (functional from RV dilation, endocarditis, carcinoid heart disease)",
      "Tricuspid stenosis (rheumatic, carcinoid)",
      "Ebstein anomaly (apical displacement of septal leaflet, often with ASD and WPW)",
      "Right-sided infective endocarditis in IV drug use",
    ],
    step1Pearls: [
      "Holosystolic murmur of tricuspid regurgitation ↑ with inspiration at left lower sternal border (Carvallo sign)",
      "Carcinoid heart disease causes fibrous plaques on tricuspid and pulmonic valves → regurgitation and stenosis",
      'Ebstein anomaly — "atrialized" right ventricle, severe TR, cyanosis; associated with maternal lithium exposure',
      "vs mitral valve — left-sided AV valve with two leaflets; regurgitation murmurs maximal at apex and radiate to axilla",
    ],
    pediatrics:
      "Ebstein anomaly and severe congenital tricuspid regurgitation present in neonates with cyanosis and heart failure; pediatric tricuspid valve disease often accompanies complex congenital heart lesions rather than isolated rheumatic involvement.",
  },
  {
    id: "pulmonary-vein",
    name: "Pulmonary Vein",
    etymology: "Latin pulmo = lung + Latin vena = vein",
    aliases: ["pulmonary vein", "pulmonary veins"],
    germLayer: "Endoderm / Mesoderm",
    origin:
      "Pulmonary veins incorporate into the left atrium; their smooth muscle from splanchnic mesoderm, endothelium from angiogenic mesoderm.",
  },
  {
    id: "pulmonary-vein-ostia",
    name: "Pulmonary Vein Ostia",
    etymology:
      "Latin pulmo = lung + Latin vena = vein + Latin ostium = mouth/opening",
    aliases: [
      "pulmonary vein ostia",
      "pulmonary vein ostium",
      "pulmonary venous ostia",
      "pulmonary venous ostium",
      "openings of pulmonary veins",
      "opening of pulmonary veins",
      "pv ostia",
      "pv ostium",
      "pulmonary vein openings",
      "pulmonary vein opening",
      "left atrial pulmonary vein openings",
    ],
    germLayer: "Endoderm / Mesoderm",
    origin:
      "Form as the venoatrial junction where incorporated pulmonary veins open into the posterior wall of the left atrium during cardiac development; myocardial sleeves extend from the LA onto the proximal pulmonary veins.",
    derivatives: [
      "Four classic ostia — left superior, left inferior, right superior, right inferior pulmonary veins",
      "Pulmonary vein myocardial sleeves — substrate for atrial fibrillation triggers",
    ],
  },
  {
    id: "common-cardinal-veins",
    name: "Common Cardinal Veins",
    etymology: "Latin communis = shared + cardinalis = principal + vena = vein",
    aliases: [
      "common cardinal veins",
      "common cardinal vein",
      "ducts of cuvier",
      "duct of cuvier",
      "cuvierian ducts",
      "horner's veins",
      "horner veins",
    ],
    germLayer: "Mesoderm",
    origin:
      "Formed by union of anterior (cardinal) and posterior (cardinal) cardinal veins — paired embryonic channels draining the body into the sinus venosus; right common cardinal vein contributes to the superior vena cava.",
    derivatives: [
      "Right horn of sinus venosus → SVC",
      "Left common cardinal component → coronary sinus (partial)",
    ],
  },
  {
    id: "svc",
    name: "Superior Vena Cava",
    etymology:
      "Latin superior = higher + Latin vena = vein + Latin cavus = hollow",
    aliases: ["superior vena cava", "svc"],
    germLayer: "Mesoderm",
    origin:
      "Forms from the right common cardinal vein and right anterior cardinal vein (anterior cardinal system).",
  },
  {
    id: "azygos-vein",
    name: "Azygos Vein",
    etymology:
      "Greek a- = without + zygos = yoke/pair — unpaired ascending vein on the right side of the vertebral column (no left counterpart at this level)",
    aliases: [
      "azygos vein",
      "azygos veins",
      "azygos",
      "vena azygos",
      "azygous vein",
      "azygous veins",
      "hemiazygos vein",
      "accessory hemiazygos vein",
    ],
    germLayer: "Mesoderm",
    origin:
      "Forms from the right supracardinal vein (embryonic posterior cardinal system); hemi-azygos and accessory hemi-azygos veins develop from left supracardinal segments and drain across midline to join the azygos system.",
    derivatives: [
      "Azygos arch — arches over right main bronchus to drain into SVC",
      "Hemiazygos vein — drains left lower posterior thorax into azygos at T8–T9",
      "Accessory hemiazygos vein — drains left upper posterior thorax into azygos at T7–T8",
    ],
    functionSummary:
      "Major venous collateral pathway draining posterior thoracic and abdominal walls, esophagus, mediastinum, and pericardium into the SVC — becomes critical when SVC flow is obstructed.",
    commonPathologies: [
      "Dilated azygos vein on CXR — SVC obstruction/syndrome, right heart failure, portal hypertension",
      "Azygos continuation of IVC — congenital anomaly when IVC fails to form below renal veins",
      "Collateral pathway in SVC syndrome from lung cancer or mediastinal fibrosis",
    ],
    step1Pearls: [
      "Azygos vein arches over right main bronchus → drains into SVC",
      "Receives hemiazygos (left lower thorax) and accessory hemiazygos (left upper thorax)",
      "Enlarged azygos on CXR — SVC obstruction, heart failure, or azygos continuation of IVC",
      "SVC syndrome — head/neck/arm swelling; azygos–IVC collaterals maintain some drainage",
      "Posterior intercostal veins drain to azygos system on right, hemiazygos on left",
      "vs portal vein — drains GI tract to liver, not posterior thoracic collateral system",
    ],
    pediatrics:
      "Azygos continuation of IVC presents with absent infrahepatic IVC on imaging — azygos vein enlarges to return blood to SVC. Same collateral physiology in SVC obstruction regardless of age.",
  },
  {
    id: "ivc",
    name: "Inferior Vena Cava",
    etymology:
      "Latin inferior = lower + Latin vena = vein + Latin cavus = hollow",
    aliases: ["inferior vena cava", "ivc"],
    germLayer: "Mesoderm",
    origin:
      "Forms from the right vitelline vein, right subcardinal vein, and supracardinal anastomoses.",
  },
  {
    id: "ductus-arteriosus",
    name: "Ductus Arteriosus",
    etymology: "Latin ductus = channel + Latin arteriosus = arterial",
    aliases: [
      "ductus arteriosus",
      "ductus arteriosus shunt",
      "fetal ductus arteriosus",
      "da shunt",
      "ligamentum arteriosum precursor",
    ],
    germLayer: "Mesoderm",
    origin:
      "Embryonic shunt connecting pulmonary artery to descending aorta (distal to left subclavian); derived from the distal sixth aortic arch. Normally closes after birth to become the ligamentum arteriosum.",
    derivatives: ["Ligamentum arteriosum (postnatal remnant)"],
    functionSummary:
      "Fetal shunt from pulmonary artery to aorta that bypasses fluid-filled, high-resistance fetal lungs — most pulmonary output crosses the ductus to systemic circulation.",
    commonPathologies: [
      "Patent ductus arteriosus (failure to close)",
      "Ductal-dependent congenital heart disease",
      "Premature ductal closure",
    ],
    step1Pearls: [
      "Fetal: RV → PA → ductus arteriosus → descending aorta (lungs bypassed)",
      "Closes after birth with ↑ O₂ and ↓ prostaglandins → ligamentum arteriosum",
      "PGE₁ (alprostadil) keeps ductus open; indomethacin/NSAIDs close PDA in prematurity",
      "vs ductus venosus — umbilical vein to IVC, bypasses liver",
    ],
    pediatrics:
      "Patent ductus arteriosus is common in premature infants; prostaglandin E1 maintains ductal patency in ductal-dependent cyanotic lesions (TGA, pulmonary atresia, critical coarctation) until definitive repair.",
  },
  {
    id: "aortic-isthmus",
    name: "Aortic Isthmus",
    etymology:
      "Greek aorte = great artery + Latin isthmus = narrow passage — physiologically narrowed segment of the aortic arch just distal to the left subclavian artery and proximal to the ductus arteriosus insertion",
    aliases: [
      "aortic isthmus",
      "aortic isthmuses",
      "isthmus of aorta",
      "isthmus of the aorta",
      "aortic isthmic segment",
      "aortic isthmic segments",
      "juxtaductal aorta",
      "juxtaductal aortic segment",
      "aortic narrowing",
      "aortic narrowings",
      "isthmic aorta",
    ],
    germLayer: "Mesoderm",
    origin:
      "Forms from the left fourth aortic arch derivative and distal dorsal aorta — the narrowest portion of the fetal and neonatal aortic arch between the left subclavian artery origin and the ductus arteriosus (ligamentum arteriosum after closure).",
    derivatives: [
      "Adjacent ligamentum arteriosum (ductal remnant)",
      "Descending thoracic aorta distal to isthmus",
    ],
    functionSummary:
      "Anatomic landmark and hemodynamically significant narrowing of the aortic arch — in fetal life the ductus arteriosus shunts blood across the isthmus; after birth the isthmus is the classic site of coarctation when tissue fails to remodel adequately.",
    commonPathologies: [
      "Coarctation of the aorta — focal narrowing at or near the isthmus",
      "Preductal coarctation — proximal to ductus; neonatal ductal-dependent systemic flow",
      "Postductal coarctation — distal to ductus; collaterals via intercostal arteries",
      "Aortic arch hypoplasia involving the isthmic segment",
      "Turner syndrome — associated coarctation at isthmus",
    ],
    step1Pearls: [
      "Aortic isthmus = narrow segment distal to left subclavian, near ductus/ligamentum arteriosum",
      "Coarctation of the aorta occurs at the isthmus — ↑ BP arms, ↓ BP legs, rib notching",
      "Ductus arteriosus inserts just distal to isthmus — PGE₁ maintains flow in ductal-dependent lesions",
      "Preductal coarctation — severe neonatal presentation; ductal closure worsens shock",
      "Postductal coarctation — collaterals enlarge internal thoracic → intercostal arteries → rib notching",
      "Associated bicuspid aortic valve and Turner syndrome (45,X)",
      "vs aortic stenosis — valvular obstruction at sinotubular junction, not arch isthmus",
    ],
    pediatrics:
      "Neonatal coarctation at the isthmus may present when the ductus closes — prostaglandin E1 reopening the ductus is temporizing. Turner syndrome and bicuspid aortic valve are common associations. Check four-extremity blood pressures and femoral pulses.",
  },
  {
    id: "ductus-venosus",
    name: "Ductus Venosus",
    etymology: "Latin ductus = channel + Latin venosus = venous",
    aliases: [
      "ductus venosus",
      "ductus venosus shunt",
      "fetal ductus venosus",
      "dv shunt",
      "ligamentum venosum precursor",
      "ductus venosus fetal shunt",
    ],
    germLayer: "Mesoderm",
    origin:
      "Embryonic venous shunt connecting the umbilical vein to the inferior vena cava, allowing oxygenated placental blood to bypass the hepatic sinusoids and reach the fetal heart and brain.",
    derivatives: [
      "Ligamentum venosum (postnatal remnant on visceral liver surface)",
    ],
    functionSummary:
      "Conducts the most oxygenated fetal blood from the umbilical vein directly into the IVC — a major component of preferential streaming to the foramen ovale, left heart, and cerebral circulation.",
    commonPathologies: [
      "Ductus venosus agenesis (rare — fetal hydrops, liver congestion)",
      "Persistent ductus venosus (rare postnatal shunt)",
      "Abnormal umbilical venous flow on fetal Doppler",
    ],
    step1Pearls: [
      "Umbilical vein → ductus venosus → IVC → RA → foramen ovale → LA → brain (most oxygenated fetal stream)",
      "Closes within days after birth when umbilical flow ceases → ligamentum venosum",
      "vs ductus arteriosus — PA to aorta, bypasses lungs not liver",
      "Umbilical vein remnant = ligamentum teres (round ligament of liver); ductus venosus remnant = ligamentum venosum",
      "Portion of umbilical venous blood perfuses liver before entering IVC",
    ],
    pediatrics:
      "Normal fetal structure; obliteration expected after birth. Ductus venosus agenesis is rare but can cause fetal hydrops and requires specialized prenatal management. Do not confuse with patent ductus arteriosus — different vessel, different postnatal pathology.",
  },
  {
    id: "lungs",
    name: "Lungs",
    etymology: "Old English lungen = lungs",
    aliases: ["lung", "lungs", "pulmonary"],
    germLayer: "Endoderm",
    origin:
      "Respiratory diverticulum buds from the foregut endoderm; branching morphogenesis forms bronchi and alveoli.",
    derivatives: ["Bronchi", "Bronchioles", "Alveoli"],
  },
  {
    id: "lingula",
    name: "Lingula",
    etymology: "Latin lingula = little tongue",
    aliases: [
      "lingula",
      "lingulas",
      "lingula of the lung",
      "lingula of left lung",
      "lingula of the left lung",
      "pulmonary lingula",
      "lung lingula",
      "left lung lingula",
      "lingular segment",
      "lingular segments",
      "lingular pneumonia",
      "left lingula",
    ],
    germLayer: "Endoderm",
    origin:
      "Develops with the left upper lobe from the respiratory diverticulum of foregut endoderm; inferior tongue-like projection of the left superior lobe draped over the cardiac notch, separated from the rest of the upper lobe by the lingular fissure.",
    derivatives: [
      "Left upper lobe bronchopulmonary segments (lingular segments)",
    ],
  },
  {
    id: "larynx",
    name: "Larynx",
    etymology: "Greek larynx = upper windpipe",
    aliases: ["larynx", "laryngeal"],
    germLayer: "Endoderm / Mesoderm",
    origin:
      "Laryngeal cartilages from fourth and sixth pharyngeal arch mesoderm; epithelium from foregut endoderm of the laryngotracheal groove.",
  },
  {
    id: "pharynx",
    name: "Pharynx",
    etymology: "Greek pharynx = throat",
    aliases: ["pharynx", "pharyngeal", "throat"],
    germLayer: "Endoderm / Mesoderm",
    origin:
      "Develops from foregut endoderm and surrounding pharyngeal arch mesenchyme; divided into nasopharynx, oropharynx (see dedicated entry), and laryngopharynx.",
    derivatives: [
      "Waldeyer ring lymphoid tissue",
      "Tonsils",
      "Passageway shared by respiratory and digestive tracts",
    ],
  },
  {
    id: "pharyngeal-pouch",
    name: "Pharyngeal Pouch",
    etymology:
      "Greek pharynx = throat + Old English poca = bag + endodermal outpocketing",
    aliases: [
      "pharyngeal pouch",
      "pharyngeal pouches",
      "pharyngeal pocket",
      "pharyngeal pockets",
      "branchial pouch",
      "branchial pouches",
      "pharyngeal endodermal pouch",
      "pharyngeal endodermal pouches",
      "visceral pouch",
      "visceral pouches",
    ],
    germLayer:
      "Endoderm (with surrounding pharyngeal arch mesenchyme and neural crest)",
    origin:
      "Four paired endodermal outpocketings of the developing pharynx during weeks 4–5 that give rise to middle ear, tonsillar epithelium, thymus, parathyroids, and related structures; failure of development causes DiGeorge syndrome and branchial cyst anomalies.",
    derivatives: [
      "1st pouch — middle ear cavity, eustachian tube, mastoid air cells",
      "2nd pouch — epithelial lining of palatine tonsil (tonsillar fossa)",
      "3rd pouch — inferior parathyroid glands and thymus (ventral/dorsal wings)",
      "4th pouch — superior parathyroid glands (dorsal wing); ultimobranchial body contributes to parafollicular C cells",
    ],
  },
  {
    id: "third-pharyngeal-pouch",
    name: "Third Pharyngeal Pouch",
    etymology:
      "Latin tertius = third + Greek pharynx = throat + Old English poca = bag — third endodermal outpocketing of the embryonic pharynx",
    aliases: [
      "third pharyngeal pouch",
      "third pharyngeal pouches",
      "3rd pharyngeal pouch",
      "3rd pharyngeal pouches",
      "pouch 3",
      "pharyngeal pouch 3",
      "third branchial pouch",
      "third branchial pouches",
    ],
    germLayer: "Endoderm (ventral and dorsal wings with surrounding mesenchyme)",
    origin:
      "Third of four paired endodermal pharyngeal outpocketings during weeks 4–5; ventral wing forms thymus (descends to anterior mediastinum); dorsal wing forms inferior parathyroid glands — failure of development causes DiGeorge syndrome (22q11 deletion).",
    derivatives: [
      "Ventral wing — thymus (T-cell maturation in cortex/medulla)",
      "Dorsal wing — inferior parathyroid glands (chief cells, PTH)",
      "Thymic epithelium seeds bone marrow–derived lymphocytes",
    ],
    functionSummary:
      "Source of thymic epithelial microenvironment for T-lymphocyte education and inferior parathyroid glands for calcium homeostasis — critical for adaptive immunity and PTH secretion.",
    commonPathologies: [
      "DiGeorge syndrome (22q11.2 deletion) — thymic aplasia/hypoplasia + hypocalcemia from parathyroid hypoplasia",
      "Neonatal tetany from hypocalcemia — absent thymic shadow on CXR",
      "Recurrent infections from T-cell deficiency in complete DiGeorge",
    ],
    step1Pearls: [
      "3rd pouch: ventral = thymus; dorsal = inferior parathyroids",
      "4th pouch dorsal wing = superior parathyroids — boards favorite pairing",
      "DiGeorge = 3rd and 4th pouch problem — hypocalcemia + T-cell defect + cardiac defects (truncus, tetralogy)",
      "Absent thymic shadow + neonatal seizures → check calcium, consider 22q11",
      "vs 2nd pouch — palatine tonsil epithelium, not thymus/parathyroids",
      "Ultimobranchial body (4th pouch related) — parafollicular C cells of thyroid",
    ],
    pediatrics:
      "Neonatal DiGeorge presents with hypocalcemic seizures, congenital heart disease, and immunodeficiency; partial forms may have mild hypocalcemia only. Thymic transplant considered in complete DiGeorge with profound T-cell deficiency.",
  },
  {
    id: "second-pharyngeal-cleft",
    name: "Second Pharyngeal Cleft",
    etymology:
      "Latin secundus = second + Greek pharynx = throat + Latin clivus = slope/groove — ectodermal groove between second and third pharyngeal arches",
    aliases: [
      "second pharyngeal cleft",
      "second pharyngeal clefts",
      "2nd pharyngeal cleft",
      "2nd pharyngeal clefts",
      "second branchial cleft",
      "second branchial clefts",
      "second branchial groove",
      "second pharyngeal groove",
      "cervical sinus of His",
    ],
    germLayer: "Surface ectoderm (ectodermal cleft between mesodermal arches)",
    origin:
      "Ectodermal groove lateral to the second pharyngeal arch during branchial apparatus development; normally obliterated as the second arch (Reichert cartilage) grows caudally to cover deeper clefts — persistence forms branchial cleft cysts, sinuses, or fistulae in the lateral neck.",
    derivatives: [
      "Normally involutes — no adult structure when development is normal",
      "Persistent remnant — branchial cleft cyst along anterior border of sternocleidomastoid",
    ],
    functionSummary:
      "Transient embryologic groove whose normal obliteration prevents branchial anomalies; pathologic persistence creates the most common branchial cleft cyst location (second cleft).",
    commonPathologies: [
      "Branchial cleft cyst — painless lateral neck mass anterior to SCM, often after URI in young adult",
      "Branchial sinus or fistula — external opening on neck with possible drainage",
      "Second arch (CN VII) overlies cleft — surgical dissection risks facial nerve injury",
    ],
    step1Pearls: [
      "2nd pharyngeal cleft = most common site of branchial cleft cyst",
      "Location: lateral neck along anterior border of sternocleidomastoid",
      "Pouches = endodermal (thymus, parathyroids); clefts = ectodermal grooves",
      "2nd arch grows over 3rd/4th clefts — covered clefts normally disappear",
      "vs thyroglossal duct cyst — midline, moves with tongue protrusion",
      "vs 1st cleft — periauricular/preauricular region near ear",
    ],
    pediatrics:
      "Branchial cleft anomalies present in childhood as lateral neck pits or cysts; excision after infection resolves; distinguish from thyroglossal duct cyst (midline) and lymphadenopathy.",
  },
  {
    id: "branchial-arch",
    name: "Branchial Arch",
    etymology:
      "Greek branchion = gill + Latin arcus = bow — embryologic pharyngeal arch (branchial arch); gives rise to head and neck structures",
    aliases: [
      "branchial arch",
      "branchial arches",
      "branchial archs",
      "pharyngeal arch",
      "pharyngeal arches",
      "pharyngeal arch system",
      "visceral arch",
      "visceral arches",
      "gill arch",
      "gill arches",
      "branchial apparatus arch",
    ],
    germLayer:
      "Mesoderm (arch core) + neural crest (skeletal/connective derivatives) + surface ectoderm (clefts)",
    origin:
      "Six paired mesodermal bars with neural crest and ectodermal clefts/pouches surrounding the embryonic pharynx (weeks 4–7); each arch has cartilaginous template, CN, muscular, and arterial derivatives — classic Step 1 embryology framework (pharyngeal arch = modern term; branchial arch = synonymous).",
    derivatives: [
      "1st arch — CN V; malleus/incus; maxillary/mandibular processes; muscles of mastication; anterior belly digastric",
      "2nd arch — CN VII; stapes; stylohyoid; facial expression muscles; posterior belly digastric",
      "3rd arch — CN IX; stylopharyngeus; greater horn of hyoid; common/carotid artery proximal derivative",
      "4th arch — CN X (superior laryngeal branch); pharyngeal constrictors; thyroid/cricoid cartilages; right subclavian (partial)",
      "6th arch — CN X (recurrent laryngeal branch); intrinsic laryngeal muscles; pulmonary arteries and ductus arteriosus (left 6th)",
    ],
    functionSummary:
      "Scaffold for development of face, jaw, ear bones, hyoid, laryngeal cartilages, and arch-associated cranial nerves and arteries; abnormal development causes Treacher Collins, Pierre Robin, and vascular arch anomalies.",
    commonPathologies: [
      "Treacher Collins — 1st and 2nd arch neural crest defect (mandibulofacial dysostosis)",
      "Pierre Robin sequence — micrognathia (1st arch) with glossoptosis and cleft palate",
      "DiGeorge — 3rd/4th pouch (not arch) but related pharyngeal apparatus",
      "Branchial cleft cyst/fistula/sinus — persistent 2nd cleft ectoderm",
      "Persistent stapedial artery — 2nd arch arterial remnant",
    ],
    step1Pearls: [
      "Branchial arch = pharyngeal arch (same structure; pouches are endodermal, arches are mesoderm/neural crest)",
      "1st arch = Meckel cartilage, CN V, mastication; 2nd = Reichert, CN VII, facial muscles",
      "3rd arch = CN IX, stylopharyngeus; 4th–6th = CN X branches, laryngeal cartilages/muscles",
      "6th arch → pulmonary arteries and ductus arteriosus (left); recurrent laryngeal loops under 6th arch derivatives",
      "1st arch artery → maxillary artery; 2nd → stapedial (normally obliterates); 3rd → common/carotid; 4th → aortic arch (left) / subclavian (right); 6th → pulmonary arteries",
      "Treacher Collins = 1st/2nd arch neural crest problem; cleft palate and micrognathia associations",
      "vs pharyngeal pouch — endodermal outpocketings (thymus, parathyroids, tonsil epithelium)",
    ],
    pediatrics:
      "Branchial cleft anomalies present as lateral neck pits/cysts in children; Pierre Robin and Treacher Collins are neonatal 1st/2nd arch spectrum disorders. Isotretinoin and vitamin A excess disrupt neural crest/pharyngeal arch development.",
  },
  {
    id: "nasopharynx",
    name: "Nasopharynx",
    etymology: "Latin nasus = nose + Greek pharynx = throat",
    aliases: [
      "nasopharynx",
      "nasopharyngeal",
      "postnasal space",
      "nasopharyngeal space",
    ],
    germLayer: "Endoderm / Mesoderm",
    origin:
      "Cranialmost pharyngeal segment from foregut endoderm at the junction of nasal cavity and oropharynx; surrounded by pharyngeal arch mesenchyme; contains pharyngeal tonsil (adenoid) and Eustachian tube openings.",
    derivatives: [
      "Pharyngeal tonsil (adenoids)",
      "Eustachian tube orifices",
      "Fossa of Rosenmüller",
    ],
  },
  {
    id: "oropharynx",
    name: "Oropharynx",
    etymology:
      "Greek stoma = mouth + pharynx = throat — middle pharyngeal segment from soft palate to epiglottis serving both respiratory and digestive passages",
    aliases: [
      "oropharynx",
      "oropharyngeal",
      "oral pharynx",
      "middle pharynx",
      "mesopharynx",
      "throat oropharynx",
    ],
    germLayer: "Endoderm / Mesoderm",
    origin:
      "Middle pharyngeal segment from foregut endoderm and pharyngeal arch mesenchyme — bounded superiorly by soft palate, inferiorly by epiglottis; lined by stratified squamous epithelium.",
    derivatives: [
      "Palatine tonsils (Waldeyer ring)",
      "Lingual tonsils (base of tongue)",
      "Soft palate and uvula",
      "Posterior pharyngeal wall",
    ],
    functionSummary:
      "Shared airway and food passage — conducts air to larynx and food to hypopharynx; palatine tonsils and base-of-tongue lymphoid tissue provide mucosal immunity; site of group A strep pharyngitis.",
    commonPathologies: [
      "Streptococcal pharyngitis (GAS)",
      "Peritonsillar abscess (quinsy)",
      "Tonsillar hypertrophy and obstructive sleep apnea",
      "Oropharyngeal squamous cell carcinoma (HPV-associated and tobacco-related)",
      "Epiglottitis (extends from supraglottic/oropharyngeal region)",
    ],
    step1Pearls: [
      "Oropharynx = soft palate to epiglottis; nasopharynx above soft palate; laryngopharynx below epiglottis",
      "2nd pharyngeal pouch → palatine tonsil epithelium",
      "Waldeyer ring — palatine, lingual, pharyngeal (adenoid), tubal tonsils",
      "GAS pharyngitis — exudative tonsillitis, no cough, treat to prevent rheumatic fever",
      "HPV-16 associated oropharyngeal SCC — rising incidence; base of tongue/tonsil",
      "vs nasopharynx — adenoids and Eustachian tubes; EBV nasopharyngeal carcinoma",
    ],
    pediatrics:
      "Strep pharyngitis common in school-age children; peritonsillar abscess presents with trismus and uvular deviation. Tonsillectomy for recurrent GAS or obstructive sleep apnea.",
  },
  {
    id: "hypopharyngeal-mucosa",
    name: "Hypopharyngeal Mucosa",
    etymology:
      "Greek hypo = under + pharynx = throat + Latin mucosa = mucous membrane — stratified squamous epithelial lining of the laryngopharynx (hypopharynx) from epiglottis to cricoid cartilage",
    aliases: [
      "hypopharyngeal mucosa",
      "hypopharyngeal mucosae",
      "hypopharynx mucosa",
      "hypopharynx mucosae",
      "laryngopharyngeal mucosa",
      "laryngopharyngeal mucosae",
      "laryngopharynx mucosa",
      "hypopharyngeal lining",
      "hypopharyngeal epithelium",
      "posterior hypopharyngeal mucosa",
    ],
    germLayer: "Endoderm (epithelium) / Mesoderm (lamina propria and muscularis)",
    origin:
      "Lined by non-keratinized stratified squamous epithelium from foregut endoderm in the inferior pharyngeal segment (laryngopharynx/hypopharynx) — bounded superiorly by epiglottis, inferiorly by cricoid cartilage where it continues as esophageal mucosa; includes piriform sinuses, posterior pharyngeal wall, and postcricoid region.",
    derivatives: [
      "Piriform sinuses (lateral hypopharyngeal recesses)",
      "Posterior pharyngeal wall mucosa",
      "Postcricoid hypopharyngeal mucosa",
      "Continuity with esophageal stratified squamous mucosa inferiorly",
    ],
    functionSummary:
      "Channels food bolus around the larynx into the esophagus while separating airway (larynx) from digestive tract — mucosa withstands mechanical trauma of swallowed solids; cricopharyngeus (upper esophageal sphincter) guards the esophageal inlet.",
    commonPathologies: [
      "Zenker diverticulum — mucosal herniation through Killian dehiscence (cricopharyngeal dysfunction)",
      "Hypopharyngeal squamous cell carcinoma — piriform sinus and postcricoid tumors",
      "Laryngopharyngeal reflux (extraesophageal GERD)",
      "Caustic or pill injury at esophageal inlet",
      "Foreign body impaction in piriform sinus",
      "Plummer-Vinson syndrome — postcricoid esophageal web (related hypopharyngeal/esophageal junction)",
    ],
    step1Pearls: [
      "Hypopharynx = laryngopharynx — epiglottis to cricoid; below oropharynx",
      "Zenker diverticulum — false diverticulum of hypopharyngeal mucosa through Killian triangle (cricopharyngeal failure)",
      "Piriform sinuses — common site of hypopharyngeal SCC and fish bone impaction",
      "Killian dehiscence — weak point between thyropharyngeus and cricopharyngeus where Zenker herniates",
      "vs oropharynx — above epiglottis; palatine tonsils and base of tongue",
      "vs esophageal mucosa — continuous inferiorly at cricopharyngeus; same squamous histology",
      "Barium swallow — posterior hypopharyngeal outpouching in Zenker (C5–C6 level)",
    ],
    pediatrics:
      "Foreign body ingestion may lodge in hypopharyngeal piriform sinus in children — drooling, dysphagia, or stridor depending on location. Caustic ingestion causes severe hypopharyngeal and esophageal mucosal injury with stricture risk.",
  },
  {
    id: "trachea",
    name: "Trachea",
    etymology: "Greek trachys = rough",
    aliases: ["trachea", "tracheal"],
    germLayer: "Endoderm",
    origin:
      "Forms from the laryngotracheal diverticulum of foregut endoderm; separates from esophagus via tracheoesophageal septum.",
  },
  {
    id: "bronchi",
    name: "Bronchi",
    etymology: "Greek bronchos = airway",
    aliases: ["bronchus", "bronchi", "bronchial"],
    germLayer: "Endoderm",
    origin:
      "Branching airways from the respiratory diverticulum (foregut endoderm); cartilage and smooth muscle from surrounding splanchnic mesoderm.",
  },
  {
    id: "alveoli",
    name: "Alveoli",
    etymology: "Latin alveolus = small cavity/cup (diminutive of alveus = trough)",
    aliases: [
      "alveoli",
      "alveolus",
      "alveoluses",
      "pulmonary alveoli",
      "pulmonary alveolus",
      "lung alveoli",
      "lung alveolus",
      "air sac",
      "air sacs",
      "gas exchange unit",
      "gas exchange units",
      "respiratory alveoli",
    ],
    germLayer: "Endoderm (epithelium) + mesoderm (capillaries and interstitium)",
    origin:
      "Terminal sacs of the respiratory tree formed during canalicular and saccular stages of lung development (weeks 24–36); septation subdivides saccules into mature alveoli continuing into early childhood.",
    derivatives: [
      "Type I pneumocytes — thin squamous gas-exchange epithelium",
      "Type II pneumocytes — surfactant-producing cuboidal progenitor cells",
      "Alveolar macrophages — innate immune phagocytes in alveolar lumen",
      "Pulmonary capillary network in alveolar septa",
    ],
    functionSummary:
      "Primary site of pulmonary gas exchange — O₂ diffuses from alveolar air into capillary blood and CO₂ diffuses out across the thin air-blood barrier (type I pneumocyte + shared basement membrane + capillary endothelium).",
    commonPathologies: [
      "Pneumonia — inflammatory exudate fills alveolar spaces (consolidation)",
      "Pulmonary edema — fluid transudate floods alveoli",
      "ARDS — diffuse alveolar damage with hyaline membranes",
      "Emphysema — alveolar wall destruction and enlarged airspaces",
      "Neonatal RDS — surfactant deficiency → alveolar collapse (atelectasis)",
      "Pneumocystis pneumonia — alveolar foamy exudate in immunocompromised hosts",
      "Pulmonary hemorrhage — RBCs in alveolar spaces",
    ],
    step1Pearls: [
      "Alveolus = terminal gas-exchange sac; ~300 million alveoli in adult lungs",
      "Type I pneumocytes line ~97% of surface area; type II produce surfactant",
      "Surfactant ↓ surface tension → prevents alveolar collapse at end-expiration",
      "Consolidation = alveolar air replaced by fluid/cells/pus — dense opacity on CXR",
      "Alveolar dead space — ventilated but perfused poorly (e.g., PE); distinct from anatomic dead space in conducting airways",
      "vs respiratory bronchiole — proximal to alveoli; conducting vs gas-exchange zone boundary",
    ],
    pediatrics:
      "Alveolar septation continues after birth; premature infants have fewer mature alveoli and deficient surfactant → neonatal RDS. CF thick mucus impairs ventilation of peripheral alveoli. Meconium aspiration coats alveoli and inactivates surfactant.",
  },
  {
    id: "pleura",
    name: "Pleura",
    etymology: "Greek pleura = side/rib",
    aliases: ["pleura", "pleural"],
    germLayer: "Mesoderm",
    origin:
      "Parietal and visceral pleura derive from splanchnic mesoderm lining the pleuroperitoneal canals.",
  },
  {
    id: "mediastinum",
    name: "Mediastinum",
    etymology:
      "Latin mediastinum = middle partition — central compartment of the thorax between the pleural cavities",
    aliases: [
      "mediastinum",
      "mediastinal",
      "mediastinal compartment",
      "mediastinal space",
      "thoracic mediastinum",
      "mediastinal cavity",
    ],
    germLayer: "Mesoderm (connective tissue, vessels) + endoderm (trachea, esophagus) + ectoderm (nerves)",
    origin:
      "Develops as the central thoracic mesenchymal compartment between the pleuroperitoneal canals; thymus descends from third pharyngeal pouch into the anterior mediastinum; great vessels remodel from aortic arch derivatives and cardinal venous system.",
    derivatives: [
      "Heart and pericardium (middle mediastinum)",
      "Thymus (anterior mediastinum)",
      "Trachea and main bronchi (middle/superior)",
      "Esophagus (posterior mediastinum)",
      "Great vessels — aorta, SVC, pulmonary arteries/veins",
      "Mediastinal lymph nodes",
    ],
    functionSummary:
      "Houses and supports vital thoracic structures — heart, great vessels, airways, esophagus, thymus, lymphatics, and nerves — bounded by pleural membranes laterally, sternum anteriorly, and vertebral column posteriorly.",
    commonPathologies: [
      "Widened mediastinum on CXR — aortic dissection/aneurysm, lymphoma, thymoma, teratoma, esophageal rupture",
      "Mediastinitis — esophageal perforation (Boerhaave), postoperative infection",
      "Mediastinal shift — tension pneumothorax (away from lesion), atelectasis (toward lesion)",
      "Anterior mediastinal masses — 4 T's: thymoma, teratoma, thyroid, terrible lymphoma",
      "Pneumomediastinum — alveolar rupture with air tracking along bronchovascular sheaths",
    ],
    step1Pearls: [
      "Superior mediastinum — above sternal angle (T4–T5): great vessels, trachea, esophagus, thymus, vagus/phrenic nerves",
      "Inferior mediastinum — below sternal angle: anterior (thymus/remnant), middle (heart/pericardium), posterior (esophagus, descending aorta, azygos vein)",
      "Widened mediastinum — think aortic catastrophe until proven otherwise",
      "Anterior mediastinal mass — 4 T's mnemonic (thymoma, teratoma, thyroid, terrible lymphoma)",
      "Mediastinal shift away from side of increased pressure (tension PTX); toward side of volume loss (atelectasis)",
      "Thymus visible in children — normal anterior mediastinal fullness; involutes with age",
    ],
    pediatrics:
      "Thymus occupies anterior mediastinum and may appear prominent on pediatric CXR — do not confuse with lymphoma. Congenital mediastinal cysts and vascular rings occur in children. Tension pneumothorax causes same mediastinal shift physiology as in adults.",
  },
  {
    id: "esophagus",
    name: "Esophagus",
    etymology: "Greek oisophagos = food carrier",
    aliases: ["esophagus", "esophageal", "oesophagus"],
    germLayer: "Endoderm",
    origin:
      "Forms from the foregut endoderm dorsal to the laryngotracheal diverticulum; muscular layers from surrounding mesoderm.",
  },
  {
    id: "lower-esophageal-sphincter",
    name: "Lower Esophageal Sphincter",
    etymology:
      "Old English lower = inferior + Greek oisophagos = food carrier + Latin sphincter = tight band — physiologic high-pressure zone at the gastroesophageal junction",
    aliases: [
      "lower esophageal sphincter",
      "lower esophageal sphincters",
      "les",
      "gastroesophageal sphincter",
      "gastroesophageal sphincters",
      "ge junction sphincter",
      "distal esophageal sphincter",
      "cardiac sphincter",
      "esophagogastric junction sphincter",
      "lower oesophageal sphincter",
    ],
    germLayer: "Endoderm (mucosa) + mesoderm (circular smooth muscle) at gastroesophageal junction",
    origin:
      "Not a discrete anatomic sphincter — functional high-pressure zone from distal esophageal circular smooth muscle, diaphragmatic crural fibers, and acute angle of His; tonic contraction prevents reflux of gastric contents.",
    derivatives: [
      "Distal esophageal circular smooth muscle tone",
      "Diaphragmatic crural contribution at hiatus",
      "Angle of His — acute gastroesophageal junction angle",
    ],
    functionSummary:
      "Maintains tonic contraction between swallows to prevent gastroesophageal reflux; relaxes transiently during primary peristalsis after swallowing to allow bolus passage into stomach; impaired tone or excessive transient relaxation → GERD.",
    commonPathologies: [
      "GERD — reduced basal LES tone and/or frequent transient LES relaxation",
      "Hiatal hernia — LES displaced above diaphragm → incompetent barrier",
      "Achalasia — failure of LES relaxation (loss of inhibitory NO/VIP myenteric neurons)",
      "Scleroderma — smooth muscle fibrosis → LES hypotension and severe reflux",
      "Esophagitis and Barrett esophagus — chronic reflux injury",
    ],
    step1Pearls: [
      "LES = physiologic sphincter, not a distinct anatomic ring — tonic smooth muscle pressure zone",
      "GERD — ↓ LES tone, transient LES relaxation, hiatal hernia",
      "Achalasia — failed LES relaxation + aperistalsis; bird-beak on barium swallow; manometry diagnostic",
      "Scleroderma — LES hypotension + distal esophageal hypomotility → severe GERD (most common GI visceral involvement)",
      "CCK and gastrin modulate LES tone; metoclopramide ↑ LES tone (anti-reflux motility effect)",
      "vs pyloric sphincter — gastric outlet to duodenum, not gastroesophageal junction",
      "Manometry: achalasia = incomplete LES relaxation; scleroderma = hypotensive LES + low-amplitude peristalsis",
    ],
    pediatrics:
      "Infant GER is common from immature LES tone and recumbent feeding — usually resolves by 12–18 months. Persistent reflux with failure to thrive, apnea, or esophagitis warrants workup. Achalasia is rare in children but presents with dysphagia and regurgitation.",
  },
  {
    id: "stomach",
    name: "Stomach",
    etymology: "Greek gaster + Latin stomachus = stomach",
    aliases: ["stomach", "gastric"],
    germLayer: "Endoderm",
    origin:
      "Foregut endoderm dilates and rotates; greater and lesser curvatures form during 90° clockwise rotation.",
    derivatives: ["Fundus", "Body", "Antrum (see dedicated entry)", "Pylorus"],
  },
  {
    id: "gastric-antrum",
    name: "Gastric Antrum",
    etymology:
      "Latin antrum = cave + Greek gaster = stomach — distal gastric chamber before the pylorus, forming a cave-like reservoir",
    aliases: [
      "antrum",
      "antra",
      "gastric antrum",
      "gastric antra",
      "pyloric antrum",
      "pyloric antra",
      "stomach antrum",
      "antrum of stomach",
      "antrum of the stomach",
      "antral mucosa",
      "antral region",
      "distal stomach",
      "pyloric region",
    ],
    germLayer: "Endoderm",
    origin:
      "Foregut endoderm forming the distal portion of the stomach between the body and pylorus; mucosa contains abundant G cells and is common site of H. pylori colonization.",
    derivatives: [
      "G cells — gastrin-secreting enteroendocrine cells",
      "Antral (pyloric) glands — mucus-secreting, fewer parietal cells than fundus",
      "Pylorus — distal antral sphincter region leading to duodenum",
    ],
    functionSummary:
      "Distal gastric reservoir that grinds food and regulates gastric emptying; G cells in antral mucosa release gastrin in response to distension, peptides, and vagal stimulation — suppressed by luminal acid.",
    commonPathologies: [
      "H. pylori antral gastritis — most common site of infection",
      "Antral G-cell hyperplasia — non-neoplastic gastrin excess",
      "Gastric antral vascular ectasia (GAVE/watermelon stomach)",
      "Peptic ulcer disease — antral ulcers adjacent to pylorus",
      "Retained antrum syndrome — post-gastrectomy G-cell hyperplasia",
    ],
    step1Pearls: [
      "G cells live in gastric antrum (and duodenum) — secrete gastrin",
      "Acid in stomach ↓ gastrin release — negative feedback from fundic/body acid",
      "H. pylori antral gastritis — type B chronic gastritis; can progress to antral atrophy",
      "vs fundus/body — parietal cells (acid) predominate in oxyntic mucosa; antrum has G cells",
      "vs pulmonary vein antrum — cardiac ablation target at PV ostia; different anatomical antrum",
      "Autoimmune gastritis affects fundus/body; H. pylori gastritis often antral first",
      "Pylorus is distal antral outlet — not synonymous but anatomically continuous",
    ],
    pediatrics:
      "H. pylori acquisition often in childhood; antral gastritis can present with dyspepsia or iron deficiency. Gastrin physiology is immature in neonates.",
  },
  {
    id: "fundus",
    name: "Fundus",
    etymology:
      "Latin fundus = bottom/base — anatomical dome or expanded superior portion of a hollow organ; homonymous term in stomach and uterus (and eye)",
    aliases: [
      "fundus",
      "fundi",
      "gastric fundus",
      "gastric fundi",
      "fundus of stomach",
      "fundus of the stomach",
      "stomach fundus",
      "uterine fundus",
      "fundus of uterus",
      "fundus of the uterus",
      "fundus uteri",
      "body-fundus",
    ],
    germLayer: "Endoderm (gastric mucosa) / Mesoderm (uterine wall)",
    origin:
      "Gastric fundus — superior dilated portion of foregut stomach above the body; uterine fundus — dome of fused paramesonephric (Müllerian) ducts above the internal cervical os.",
    derivatives: [
      "Gastric fundus — oxyntic (fundic) glands with parietal and chief cells; acid and pepsinogen secretion",
      "Gastric fundus — enterochromaffin-like (ECL) cells and somatostatin (D) cells in oxyntic mucosa",
      "Uterine fundus — thickest myometrial dome; main site of physiologic implantation",
      "Uterine fundus — common location of leiomyomas (fibroids) and fundal placentation",
    ],
    functionSummary:
      "Gastric fundus — primary reservoir and acid-secreting oxyntic mucosa; distension contributes to receptive relaxation and gastrin negative feedback from luminal acid. Uterine fundus — muscular dome that contracts during labor; endometrial lining undergoes cyclic proliferation and decidualization in pregnancy.",
    commonPathologies: [
      "Autoimmune atrophic gastritis — fundus/body oxyntic mucosa destroyed first",
      "Fundic gland polyps — often PPI-associated hyperplasia of oxyntic glands",
      "Uterine leiomyoma (fibroid) — fundal subserosal or intramural masses",
      "Fundal placenta previa / accreta spectrum — abnormal placentation over prior scar or fundus",
      "Gastric varices (rare) vs esophageal — fundus involved in splenic vein thrombosis (left-sided portal hypertension)",
    ],
    step1Pearls: [
      "Fundus = dome — stomach fundus (superior, oxyntic) and uterine fundus (dome above internal os)",
      "Gastric fundus/body — parietal cells, acid secretion; antrum has G cells",
      "Autoimmune gastritis targets fundus/body oxyntic mucosa → atrophy, achlorhydria, B12 deficiency",
      "Uterine fundus — IUD strings, fibroids, fundal implantation in pregnancy",
      "vs funduscopy — ocular fundus (retina); different anatomical fundus",
      "vs gastric body — fundus is superior dome; body is intermediate zone; both oxyntic",
      "vs antrum — distal stomach with gastrin-secreting G cells, not primary acid region",
    ],
    distinguishFrom: [
      "Gastric antrum — distal stomach with G cells; H. pylori gastritis often antral first",
      "Gastric body — intermediate oxyntic zone between fundus and antrum",
      "Uterine cervix — inferior neck below internal os; not the fundal dome",
      "Ocular fundus — posterior interior of eye examined by funduscopy",
      "Cardia — gastroesophageal junction region; fundus is superior to body",
      "Corpus uteri — uterine body including fundus and isthmus; fundus is the dome specifically",
    ],
    pediatrics:
      "Hypertrophic pyloric stenosis affects pyloric outlet, not fundus. Uterine fundal fibroids are uncommon in pediatrics; adolescent abnormal uterine bleeding workup may include ultrasound of fundus and cavity. Gastric fundus oxyntic mucosa is mature in term infants.",
  },
  {
    id: "pylorus",
    name: "Pylorus",
    etymology:
      "Greek pylōros = gatekeeper — distal gastric outlet regulating passage of chyme into duodenum",
    aliases: [
      "pylorus",
      "pyloric",
      "pyloric canal",
      "pyloric sphincter",
      "pyloric sphincters",
      "gastric outlet",
      "gastric outlets",
      "pyloric region",
      "pyloric antrum outlet",
    ],
    germLayer: "Endoderm (mucosa) + mesoderm (smooth muscle)",
    origin:
      "Distal foregut stomach segment developing as antral-pyloric canal with thickened circular smooth muscle forming the pyloric sphincter — physiologic gastric outlet between stomach and duodenum.",
    derivatives: [
      "Pyloric sphincter — circular smooth muscle regulating gastric emptying",
      "Pyloric glands — mucus-secreting glands in pyloric mucosa",
      "Continuity with gastric antrum proximally and duodenal bulb distally",
    ],
    functionSummary:
      "Regulates gastric emptying — pyloric sphincter tonic contraction between meals; relaxes with antral peristalsis to deliver acid chyme into duodenum at controlled rate; coordinated with duodenal feedback (fat, acid, hyperosmolarity slow emptying).",
    commonPathologies: [
      "Hypertrophic pyloric stenosis — congenital muscular hypertrophy → gastric outlet obstruction in infants",
      "Pyloric stenosis (acquired/peptic) — scarring from ulcer disease (less common)",
      "Gastroparesis — delayed emptying despite pyloric patency",
      "Pyloric channel ulcers — peptic ulcer disease at outlet",
    ],
    step1Pearls: [
      "Pylorus = gastric outlet gatekeeper between stomach and duodenum",
      "Hypertrophic pyloric stenosis — 2–8 week infant, projectile nonbilious vomiting, olive-shaped mass, hypochloremic metabolic alkalosis",
      "Ultrasound — elongated pylorus, thickened muscle (>3 mm), length >15 mm",
      "Treatment pyloric stenosis — Ramstedt pyloromyotomy",
      "vs pyloric antrum — antrum is reservoir proximal to pyloric canal; pylorus is outlet/sphincter region",
      "vs duodenum — first portion receives chyme from pylorus; ampulla of Vater is distal duodenum",
      "vs LES — gastroesophageal junction sphincter, not gastric outlet",
      "H. pylori colonizes antrum near pylorus — antral gastritis",
    ],
    pediatrics:
      "Hypertrophic pyloric stenosis classic at 2–8 weeks — nonbilious projectile emesis, palpable olive, hypochloremic metabolic alkalosis from gastric HCl loss. Surgical pyloromyotomy is curative. Bilious vomiting suggests malrotation, not pyloric stenosis.",
  },
  {
    id: "omentum",
    name: "Omentum",
    etymology: "Latin omentum = fatty membrane/apron",
    aliases: [
      "omentum",
      "omenta",
      "greater omentum",
      "lesser omentum",
      "gastrocolic omentum",
      "omental",
    ],
    germLayer: "Mesoderm",
    origin:
      "Greater omentum from dorsal mesogastrium (dorsal stomach mesentery); lesser omentum from ventral mesentery between liver and lesser curvature of stomach and duodenum.",
    derivatives: [
      "Greater omentum (apron over intestines)",
      "Lesser omentum (hepatogastric and hepatoduodenal ligaments)",
    ],
  },
  {
    id: "mesentery",
    name: "Mesentery",
    etymology:
      "Greek mesos = middle + enteron = intestine — double layer of peritoneum suspending the intestine from the posterior abdominal wall and containing blood vessels, lymphatics, and nerves",
    aliases: [
      "mesentery",
      "mesenteries",
      "mesentary",
      "mesentaries",
      "mesenteric",
      "intestinal mesentery",
      "intestinal mesenteries",
      "dorsal mesentery",
      "dorsal mesenteries",
      "ventral mesentery",
      "ventral mesenteries",
      "mesenteric fold",
      "mesenteric folds",
      "mesentery proper",
      "small bowel mesentery",
      "small intestinal mesentery",
    ],
    germLayer: "Mesoderm (splanchnic mesoderm within peritoneal folds)",
    origin:
      "Derived from dorsal and ventral mesenteries of the embryonic gut tube — dorsal mesentery persists for most of the midgut and hindgut; ventral mesentery largely regresses except for lesser omentum and falciform ligament region; midgut rotation and fixation determine final mesenteric attachment to posterior body wall.",
    derivatives: [
      "Mesentery proper — suspends jejunum and ileum",
      "Transverse mesocolon — transverse colon",
      "Sigmoid mesocolon — sigmoid colon",
      "Mesoappendix — appendix",
      "Contains superior and inferior mesenteric vessels, lymph nodes, autonomic nerves, and fat",
    ],
    functionSummary:
      "Anchors intraperitoneal bowel to the posterior abdominal wall while permitting mobility; conduit for arterial supply, venous drainage, lymphatic return, and neural innervation to the gastrointestinal tract.",
    commonPathologies: [
      "Midgut volvulus — twisting of bowel on narrow mesentery around SMA axis",
      "Mesenteric ischemia — SMA or vein thrombosis/embolus",
      "Mesenteric lymphadenitis — especially Yersinia in adolescents",
      "Crohn disease — mesenteric fat wrapping (creeping fat)",
      "Mesenteric cysts and tumors (rare)",
      "Internal hernia through mesenteric defects",
    ],
    boardsPearls: [
      "Mesentery = peritoneal fold carrying SMA/IMV vessels and lymphatics to bowel",
      "Narrow mesentery in malrotation → midgut volvulus risk — bilious vomiting in neonate",
      "Ladd procedure broadens mesentery during malrotation repair",
      "Superior mesenteric artery runs through mesentery to supply midgut",
      "Whirl sign on CT — twisted mesentery and bowel around SMA",
      "vs omentum — fatty apron; mesentery is suspensory ligament to posterior wall",
      "vs retroperitoneal colon — ascending/descending colon lack mesentery (secondarily retroperitoneal)",
    ],
    pediatrics:
      "Malrotation with narrow mesentery predisposes to midgut volvulus — surgical emergency in neonate with bilious vomiting. Mesenteric lymphadenitis mimics appendicitis in children (often Yersinia).",
  },
  {
    id: "peritoneum",
    name: "Peritoneum",
    etymology: "Greek peri = around + teinein = to stretch + -um = membrane",
    aliases: [
      "peritoneum",
      "peritoneal",
      "parietal peritoneum",
      "visceral peritoneum",
      "peritoneal cavity",
      "peritoneal lining",
    ],
    germLayer: "Mesoderm",
    origin:
      "Coelomic epithelium (mesoderm) lining the embryonic body cavity; parietal layer lines abdominal wall; visceral layer (serosa) covers intraperitoneal organs.",
    derivatives: [
      "Parietal peritoneum",
      "Visceral peritoneum (serosa)",
      "Mesenteries and omenta",
    ],
  },
  {
    id: "intestines",
    name: "Intestines",
    etymology: "Latin intestinum = internal/gut",
    aliases: [
      "intestines",
      "intestine",
      "intestinal",
      "intestinal tract",
      "bowel",
      "bowels",
      "gut",
      "small and large intestine",
    ],
    germLayer: "Endoderm",
    origin:
      "Midgut and hindgut endoderm form the small intestine (jejunum, ileum) and large intestine (colon, rectum); proximal duodenum is foregut-derived; muscularis and serosa from splanchnic mesoderm.",
    derivatives: [
      "Small intestine — absorption of nutrients, water, electrolytes",
      "Large intestine — water/electrolyte reabsorption, microbial fermentation",
      "Intestinal mucosa — villi, crypts, goblet cells, enteroendocrine cells",
      "Peyer patches and gut-associated lymphoid tissue (GALT)",
    ],
  },
  {
    id: "duodenum-proximal",
    name: "Duodenum (proximal)",
    etymology: "Latin duodeni = twelve each + Latin proximus = nearest",
    aliases: ["proximal duodenum", "duodenum"],
    germLayer: "Endoderm (foregut) / Mesoderm (midgut)",
    origin:
      "Proximal duodenum to the ampulla of Vater is foregut-derived endoderm; distal portion from midgut with dorsal mesentery.",
  },
  {
    id: "jejunum",
    name: "Jejunum",
    etymology: "Latin jejunus = empty",
    aliases: ["jejunum", "jejunal"],
    germLayer: "Endoderm",
    origin:
      "Midgut derivative; forms from the primary intestinal loop after herniation and return to the abdominal cavity.",
  },
  {
    id: "ileum",
    name: "Ileum",
    etymology: "Greek eileos = twisted gut",
    aliases: ["ileum", "ileal"],
    germLayer: "Endoderm",
    origin:
      "Distal midgut derivative; forms the lower portion of the small intestine before the cecum.",
  },
  {
    id: "ileocecal-valve",
    name: "Ileocecal Valve",
    etymology:
      "Latin ileum = twisted gut + caecus = blind + Latin valva = folding door — muscular and mucosal structure at the ileum–cecum junction regulating one-way flow into the colon",
    aliases: [
      "ileocecal valve",
      "ileocecal valves",
      "ileocaecal valve",
      "ileocaecal valves",
      "ileocolic valve",
      "ileocolic valves",
      "ileocecal sphincter",
      "ileocecal sphincters",
      "bauhin valve",
      "bauhin valves",
      "valve of bauhin",
      "valves of bauhin",
      "gerlach valve",
      "gerlach valves",
      "ileocecal junction",
      "ileocecal junctions",
      "ic valve",
      "ic valves",
    ],
    germLayer: "Endoderm (mucosa) with muscularis propria and submucosal lymphoid tissue",
    origin:
      "Forms at the junction of ileum and cecum during midgut development — two muscular lips (superior and inferior ileocecal folds) with underlying submucosal lymphoid tissue (ileocecal valve lymphoid patch) create a one-way valve preventing colonic reflux into the terminal ileum.",
    derivatives: [
      "Superior and inferior ileocecal lips (mucosal folds)",
      "Ileocecal valve lymphoid patch — GALT component at barrier site",
      "No separate adult organ — functional valve at ileocolic junction",
    ],
    functionSummary:
      "Regulates passage of ileal contents into the cecum while limiting retrograde colonic bacterial and gas reflux into the terminal ileum — important barrier protecting small-intestinal milieu; also a common site of Crohn disease, tuberculosis, and lymphoma involvement.",
    commonPathologies: [
      "Crohn disease — terminal ileitis and ileocecal valve inflammation/stenosis",
      "Tuberculosis — ileocecal involvement with caseating granulomas",
      "Carcinoid tumor of terminal ileum near valve",
      "Intussusception — ileocolic intussusception in children",
      "Burkitt lymphoma — sporadic ileocecal mass in children/young adults",
      "Post-surgical loss in short bowel syndrome — bacterial overgrowth if valve resected",
    ],
    step1Pearls: [
      "Ileocecal valve = Bauhin valve — prevents colonic reflux into ileum",
      "Terminal ileum + ileocecal valve = classic Crohn disease location",
      "TB enteritis often affects ileocecal region",
      "Preserve ileocecal valve during bowel resection when possible — reduces bacterial overgrowth in short bowel syndrome",
      "Meckel diverticulum ~60 cm (2 feet) proximal to ileocecal valve (rule of 2s)",
      "vs ileocecal sphincter dysfunction — bacterial overgrowth if incompetent",
      "Sporadic Burkitt lymphoma — ileocecal mass in child/young adult",
    ],
    pediatrics:
      "Ileocolic intussusception often occurs near the ileocecal junction in infants. Crohn disease may present in adolescents with terminal ileitis. Preserving the ileocecal valve during pediatric bowel resection limits post–short bowel bacterial overgrowth.",
  },
  {
    id: "peyer-patches",
    name: "Peyer Patches",
    etymology: "eponym: Johann Conrad Peyer + patch = localized area",
    aliases: [
      "peyer patch",
      "peyer patches",
      "peyer's patches",
      "peyers patches",
      "peyer patchs",
      "aggregated lymphoid follicles",
      "aggregated lymphoid follicle",
      "ileal lymphoid aggregates",
      "galt peyer patches",
    ],
    germLayer: "Endoderm (overlying epithelium) / Mesoderm (lymphoid stroma)",
    origin:
      "Organized secondary lymphoid tissue developing in ileal submucosa and lamina propria as part of gut-associated lymphoid tissue (GALT); follicles form under influence of lymphotoxin and chemokines (CCL20/CCL21) during mucosal immune maturation.",
    derivatives: [
      "B-cell follicles with germinal centers",
      "M (microfold) cells overlying follicles — antigen sampling",
      "T-cell zones in interfollicular regions",
      "IgA-producing plasma cell precursors after class switching",
    ],
  },
  {
    id: "crypts-of-lieberkuhn",
    name: "Crypts of Lieberkühn",
    etymology: "eponym: Johann Nathanael Lieberkühn + Greek kryptos = hidden",
    aliases: [
      "crypts of lieberkuhn",
      "crypts of lieberkühn",
      "crypt of lieberkuhn",
      "crypt of lieberkühn",
      "lieberkuhn crypts",
      "lieberkühn crypts",
      "intestinal crypts",
      "intestinal crypt",
      "intestinal glands",
      "intestinal gland",
      "crypts of the small intestine",
      "small intestinal crypts",
      "crypt",
      "crypts",
      "intestinal crypt",
      "intestinal crypts",
      "duodenal crypt",
      "duodenal crypts",
      "jejunal crypt",
      "jejunal crypts",
      "ileal crypt",
      "ileal crypts",
      "small bowel crypt",
      "small bowel crypts",
      "colonic crypt",
      "colonic crypts",
      "colon crypt",
      "colon crypts",
      "intestinal crypt cell niche",
    ],
    germLayer: "Endoderm",
    origin:
      "Invaginations of small intestinal (and colonic) mucosa between villi formed from endodermal epithelium; base houses intestinal stem cells that regenerate the entire villus/crypt axis every ~3–5 days (see crypt-villus axis entry).",
    derivatives: [
      "Intestinal stem cells (crypt base columnar cells / Lgr5⁺ cells)",
      "Paneth cells — defensins, lysozyme at crypt base",
      "Goblet cells — mucin secretion",
      "Enterocytes — differentiate as progenitors migrate onto villus",
      "Enteroendocrine cells — secretin, CCK, GIP secreting cells",
    ],
    functionSummary:
      "Proliferative niche of intestinal mucosa — stem cells at the crypt base divide and supply differentiated epithelial cells to villi (small intestine) or surface epithelium (colon); Paneth cells defend crypt sterility with antimicrobial peptides.",
    commonPathologies: [
      "Celiac disease — crypt hyperplasia with villous atrophy",
      "Colorectal cancer — APC/Wnt mutations dysregulate crypt proliferation",
      "Necrotizing enterocolitis — immature crypt defenses in preterm gut",
      "Radiation/chemotherapy mucositis — crypt stem cell injury",
      "GVHD — crypt apoptosis and villous blunting",
    ],
    step1Pearls: [
      "Crypt = intestinal gland invagination; stem cells at base (Lgr5⁺)",
      "Paneth cells at crypt base secrete defensins and lysozyme",
      "Celiac biopsy — villous atrophy + crypt hyperplasia + ↑ intraepithelial lymphocytes",
      "vs villus — absorptive surface; crypt supplies renewing epithelium",
      "Crypt-villus axis — see dedicated cell entry for renewal unit",
      "Colonic crypts lack villi but same stem cell/proliferation concept",
      "Crypt lumina — interior gland channel opening to bowel lumen; see dedicated entry",
    ],
    pediatrics:
      "Crypt defenses and Paneth cell function are immature in preterm intestine — contributes to NEC risk. Celiac disease can present in toddlers with crypt hyperplasia on biopsy after gluten exposure.",
  },
  {
    id: "cecum",
    name: "Cecum",
    etymology: "Latin caecus = blind",
    aliases: ["cecum", "caecum", "cecal"],
    germLayer: "Endoderm",
    origin:
      "Midgut derivative at the junction of small and large intestine; cecal bud appears during week 6.",
  },
  {
    id: "colon",
    name: "Colon",
    etymology: "Greek kolon = large intestine",
    aliases: ["colon", "colonic", "large intestine"],
    germLayer: "Endoderm",
    origin:
      "Ascending and transverse colon from midgut; descending and sigmoid colon from hindgut endoderm.",
    derivatives: [
      "Ascending colon",
      "Transverse colon",
      "Descending colon",
      "Sigmoid colon",
    ],
  },
  {
    id: "ascending-colon",
    name: "Ascending Colon",
    etymology: "Latin ascendere = to climb + Greek kolon = large intestine",
    aliases: ["ascending colon", "ascending colons", "right colon"],
    germLayer: "Endoderm",
    origin:
      "Midgut derivative; forms the right-sided vertical segment from cecum to hepatic flexure during intestinal rotation.",
  },
  {
    id: "transverse-colon",
    name: "Transverse Colon",
    etymology:
      "Latin transversus = lying across + Greek kolon = large intestine",
    aliases: ["transverse colon", "transverse colons"],
    germLayer: "Endoderm",
    origin:
      "Midgut derivative; horizontal segment from hepatic flexure to splenic flexure, longest intraperitoneal portion of colon.",
  },
  {
    id: "descending-colon",
    name: "Descending Colon",
    etymology: "Latin descendere = to go down + Greek kolon = large intestine",
    aliases: ["descending colon", "descending colons", "left colon"],
    germLayer: "Endoderm",
    origin:
      "Hindgut derivative; left-sided vertical segment from splenic flexure to sigmoid colon.",
  },
  {
    id: "sigmoid-colon",
    name: "Sigmoid Colon",
    etymology: "Greek sigma = S-shaped letter + kolon = large intestine",
    aliases: ["sigmoid colon", "sigmoid colons", "sigmoid"],
    germLayer: "Endoderm",
    origin:
      "Hindgut derivative; S-shaped loop between descending colon and rectum, suspended by sigmoid mesocolon.",
  },
  {
    id: "rectum",
    name: "Rectum",
    etymology: "Latin rectus = straight",
    aliases: ["rectum", "rectal"],
    germLayer: "Endoderm",
    origin:
      "Hindgut derivative; cranial portion of the cloaca after urorectal septum division.",
  },
  {
    id: "anal-canal",
    name: "Anal Canal",
    etymology: "Latin anus = ring + Latin canalis = channel",
    aliases: ["anal canal", "anus", "anal"],
    germLayer: "Endoderm / Ectoderm",
    origin:
      "Upper anal canal from hindgut endoderm; lower anal canal from proctodeum (ectodermal invagination) at pectinate line.",
  },
  {
    id: "liver",
    name: "Liver",
    etymology: "Old English lifer + Latin iecur = liver",
    aliases: ["liver", "hepatic"],
    germLayer: "Endoderm",
    origin:
      "Hepatic diverticulum buds from ventral foregut endoderm into septum transversum mesenchyme.",
    derivatives: ["Hepatocytes", "Bile duct epithelium"],
  },
  {
    id: "gallbladder",
    name: "Gallbladder",
    etymology: "gall = bile + bladder = pouch",
    aliases: ["gallbladder", "gall bladder"],
    germLayer: "Endoderm",
    origin:
      "Cystic diverticulum from the hepatic diverticulum of ventral foregut endoderm.",
  },
  {
    id: "bile-duct",
    name: "Bile Duct",
    etymology: "Latin bilis = bile + Latin ductus = channel",
    aliases: [
      "bile duct",
      "bile ducts",
      "biliary tree",
      "biliary tract",
      "common bile duct",
      "cbd",
      "extrahepatic bile duct",
      "common hepatic duct",
      "hepatic duct",
      "hepatic ducts",
    ],
    germLayer: "Endoderm",
    origin:
      "Hepatic diverticulum endoderm forms intrahepatic bile ductules (Canals of Hering → bile ductules → interlobular ducts); extrahepatic tree from hepatic duct confluence, cystic duct, and common bile duct draining to duodenal ampulla of Vater.",
    derivatives: [
      "Right and left hepatic ducts",
      "Common hepatic duct",
      "Cystic duct",
      "Common bile duct",
    ],
  },
  {
    id: "pancreas",
    name: "Pancreas",
    etymology: "Greek pan = all + kreas = flesh",
    aliases: ["pancreas", "pancreatic"],
    germLayer: "Endoderm",
    origin:
      "Dorsal and ventral pancreatic buds from foregut endoderm fuse; ventral bud rotates with duodenum.",
    derivatives: ["Exocrine acini", "Endocrine islets", "Duct system"],
  },
  {
    id: "pancreatic-duct",
    name: "Pancreatic Duct",
    etymology:
      "Greek pankreas = all flesh + Latin ductus = channel — main drainage pathway for pancreatic exocrine secretions",
    aliases: [
      "pancreatic duct",
      "pancreatic ducts",
      "main pancreatic duct",
      "main pancreatic ducts",
      "duct of wirsung",
      "wirsung duct",
      "wirsung ducts",
      "pancreatic ductal system",
      "pancreatic drainage duct",
      "mpd",
    ],
    germLayer: "Endoderm (ventral and dorsal pancreatic buds)",
    origin:
      "Formed from ductal epithelium of fused dorsal and ventral pancreatic buds; main duct (Wirsung) typically joins common bile duct at the ampulla of Vater; accessory duct of Santorini may drain separately in some individuals.",
    derivatives: [
      "Intercalated ducts from acini",
      "Intralobular and interlobular ducts",
      "Main pancreatic duct (duct of Wirsung)",
      "Accessory pancreatic duct (duct of Santorini) when present",
    ],
    functionSummary:
      "Conducts bicarbonate-rich fluid and digestive enzymes from acinar cells to duodenum — ductal epithelium secretes bicarbonate (especially after secretin) to neutralize gastric acid in duodenal chyme.",
    commonPathologies: [
      "Acute and chronic pancreatitis — duct obstruction, stone, or edema",
      "Pancreatic ductal adenocarcinoma — head tumor obstructs duct → painless jaundice",
      "Cystic fibrosis — inspissated mucus plugs ducts → exocrine insufficiency",
      "Annular pancreas — aberrant ring encircling duodenum",
      "Pancreas divisum — incomplete fusion; Santorini drainage predominates",
    ],
    step1Pearls: [
      "Main pancreatic duct + common bile duct → ampulla of Vater (sphincter of Oddi)",
      "Secretin stimulates ductal bicarbonate secretion (not enzyme-rich acinar output — CCK for enzymes)",
      "CFTR on ductal epithelium — CF mutations clog ducts and pancreas",
      "Head of pancreas cancer obstructs both bile and pancreatic ducts",
      "vs bile duct — carries bile from liver/gallbladder; joins pancreatic duct at ampulla",
    ],
    pediatrics:
      "Meconium ileus in CF reflects inspissated secretions from diseased pancreatic ducts in utero. Pancreas divisum may present with recurrent pancreatitis in children.",
  },
  {
    id: "ampulla-of-vater",
    name: "Ampulla of Vater",
    etymology:
      "Latin ampulla = flask + Vater = Abraham Vater (German anatomist who described the papilla)",
    aliases: [
      "ampulla of vater",
      "ampulla of Vater",
      "ampullas of vater",
      "hepatopancreatic ampulla",
      "hepatopancreatic ampullas",
      "major duodenal papilla",
      "major duodenal papillas",
      "duodenal papilla",
      "duodenal papillas",
      "papilla of vater",
      "papilla of Vater",
      "ampullary region",
      "ampullary regions",
      "ampullary region of pancreas",
      "ampullary region of the pancreas",
      "pancreatic ampullary region",
      "pancreatic ampullary regions",
      "periampullary region",
      "periampullary regions",
      "periampullary region of pancreas",
      "hepatopancreatic ampullary region",
    ],
    germLayer: "Endoderm (foregut–midgut junction)",
    origin:
      "Common bile duct and main pancreatic duct converge at this papilla in the descending duodenum; bile and pancreatic enzymes enter the duodenal lumen through the sphincter of Oddi.",
    derivatives: [
      "Sphincter of Oddi (smooth muscle complex at ampullary orifice) — see dedicated entry",
    ],
    functionSummary:
      "Common outlet for bile and pancreatic secretions into the duodenum — gallstone impaction here can obstruct both ducts; pancreatic juice and bile are delivered together for fat digestion after sphincter of Oddi relaxation with CCK and secretin.",
    commonPathologies: [
      "Gallstone lodged at ampulla — biliary obstruction and gallstone pancreatitis",
      "Ampullary adenocarcinoma and periampullary tumors",
      "Post-ERCP papillary edema and pancreatitis",
      "Choledochal cyst with anomalous pancreaticobiliary junction",
      "Pancreas divisum — main pancreatic duct may drain via accessory papilla instead",
    ],
    step1Pearls: [
      "Ampulla of Vater = major duodenal papilla where CBD + main pancreatic duct meet",
      "Ampullary region of pancreas — pancreatic head/terminal duct at hepatopancreatic ampulla",
      "Gallstone at ampulla → ↑ direct bilirubin + pancreatitis",
      "vs minor duodenal papilla (Santorini) — accessory pancreatic duct drainage; relevant in pancreas divisum",
      "ERCP accesses ampulla for cholangiography, sphincterotomy, and stone extraction",
      "Periampullary carcinoma — pancreatic head, CBD, ampulla, or duodenal papilla tumors",
    ],
    pediatrics:
      "Choledochal cyst and anomalous pancreaticobiliary junction involve abnormal bile drainage at the ampullary region. Annular pancreas encircles duodenum near the ampulla causing neonatal obstruction.",
  },
  {
    id: "sphincter-of-oddi",
    name: "Sphincter of Oddi",
    etymology:
      "Latin sphincter = tight band + eponym: Ruggero Oddi (Italian physiologist) — smooth muscle valve controlling flow of bile and pancreatic juice into the duodenum at the ampulla of Vater",
    aliases: [
      "sphincter of oddi",
      "sphincter of Oddi",
      "sphincters of oddi",
      "oddi sphincter",
      "hepatopancreatic sphincter",
      "hepatopancreatic sphincters",
      "ampullary sphincter",
      "ampullary sphincters",
      "choledochoduodenal sphincter",
      "biliary sphincter",
      "biliary sphincters",
      "pancreatic sphincter",
    ],
    germLayer: "Mesoderm (smooth muscle) surrounding foregut-derived ampulla",
    origin:
      "Develops as smooth muscle surrounding the common channel where the common bile duct and main pancreatic duct enter the duodenum at the major duodenal papilla (ampulla of Vater).",
    derivatives: [
      "Biliary segment — regulates bile flow from common bile duct",
      "Pancreatic segment — regulates pancreatic juice flow",
      "Ampullary segment — common outlet into duodenal lumen",
    ],
    functionSummary:
      "Coordinates release of bile and pancreatic enzymes into the duodenum — relaxes with cholecystokinin and secretin after meals; basal tone prevents reflux of duodenal contents into bile/pancreatic ducts.",
    commonPathologies: [
      "Sphincter of Oddi dysfunction (SOD) — post-cholecystectomy biliary-type pain, ↑ liver enzymes",
      "Post-ERCP pancreatitis — papillary edema or sphincter manipulation",
      "Gallstone lodged at ampulla — obstructs both bile and pancreatic ducts (gallstone pancreatitis)",
      "Congenital choledochal cyst with anomalous pancreaticobiliary junction",
    ],
    step1Pearls: [
      "Sphincter of Oddi surrounds ampulla of Vater — controls bile + pancreatic juice entry to duodenum",
      "CCK → gallbladder contraction + sphincter of Oddi relaxation → bile and enzymes delivered for fat digestion",
      "Gallstone at ampulla can obstruct both ducts → pancreatitis + jaundice",
      "vs ileocecal valve — controls colonic entry; not biliary anatomy",
      "ERCP with sphincterotomy treats selected SOD and ampullary stones",
      "Located at major duodenal papilla in descending duodenum",
    ],
    pediatrics:
      "Choledochal cysts and anomalous pancreaticobiliary junction present in childhood with jaundice and pancreatitis risk. SOD is primarily an adult post-cholecystectomy diagnosis.",
  },
  {
    id: "foregut",
    name: "Foregut",
    etymology: "Old English fore = before + gut = intestine",
    aliases: [
      "foregut",
      "foreguts",
      "anterior gut",
      "cranial gut",
      "proximal gut",
    ],
    germLayer:
      "Endoderm (with splanchnic mesoderm for muscularis and mesenteries)",
    origin:
      "Cranial segment of the primitive gut tube from the pharyngeal floor to the proximal duodenum at the ampulla of Vater; blood supply from the celiac trunk.",
    derivatives: [
      "Pharynx (lower)",
      "Esophagus",
      "Stomach",
      "Proximal duodenum (to ampulla of Vater)",
      "Liver and biliary tree",
      "Gallbladder",
      "Pancreas",
      "Trachea and lungs (respiratory diverticulum from ventral foregut)",
    ],
  },
  {
    id: "midgut",
    name: "Midgut",
    etymology: "Old English mid = middle + gut = intestine",
    aliases: ["midgut", "midguts", "middle gut", "mid gut"],
    germLayer:
      "Endoderm (with splanchnic mesoderm for mesentery and muscularis)",
    origin:
      "Middle gut tube segment from distal duodenum (distal to ampulla) through proximal two-thirds of transverse colon; supplied by the superior mesenteric artery (SMA); undergoes physiologic herniation and 270° counterclockwise rotation around SMA during weeks 6–10.",
    derivatives: [
      "Distal duodenum",
      "Jejunum and ileum",
      "Cecum and appendix",
      "Ascending colon",
      "Proximal two-thirds of transverse colon",
    ],
  },
  {
    id: "midgut-rotation",
    name: "Midgut Rotation",
    etymology:
      "Old English mid = middle + gut = intestine + Latin rotatio = turning — embryonic 270° counterclockwise rotation of the midgut around the superior mesenteric artery axis",
    aliases: [
      "midgut rotation",
      "midgut rotations",
      "intestinal rotation",
      "intestinal rotations",
      "embryonic midgut rotation",
      "270 degree midgut rotation",
      "counterclockwise midgut rotation",
      "midgut loop rotation",
      "physiologic midgut rotation",
    ],
    germLayer:
      "Endoderm (gut tube) with splanchnic mesoderm (mesentery, dorsal mesentery fixation)",
    origin:
      "During weeks 6–10 the midgut elongates faster than the abdominal cavity, herniates through the umbilical ring, rotates 270° counterclockwise (viewed anteriorly) around the superior mesenteric artery, then returns to the abdominal cavity with fixation of the mesentery to the posterior body wall — positions jejunum/ileum left and central, cecum in right lower quadrant.",
    derivatives: [
      "Normal anatomic relationships of distal duodenum, jejunum, ileum, cecum, appendix, ascending colon, and proximal transverse colon",
      "Ligament of Treitz (duodenojejunal junction) at left of spine",
      "Broad mesenteric base after fixation — prevents volvulus",
    ],
    functionSummary:
      "Embryologic repositioning that establishes normal intestinal anatomy and a wide mesenteric attachment to the posterior abdominal wall — failure causes malrotation with narrow mesentery predisposing to midgut volvulus.",
    commonPathologies: [
      "Malrotation — incomplete or abnormal rotation/fixation",
      "Midgut volvulus — twisting on narrow mesentery → SMA ischemia",
      "Ladd bands — peritoneal bands from malpositioned cecum compressing duodenum",
      "Internal herniation through mesenteric defects",
    ],
    step1Pearls: [
      "270° counterclockwise rotation around SMA axis during weeks 6–10",
      "Physiologic herniation into umbilical cord → reduction into abdomen with rotation",
      "Cecum descends from right upper quadrant to right lower quadrant last",
      "Malrotation → narrow mesenteric pedicle → midgut volvulus (bilious vomiting in neonate)",
      "Upper GI: ligament of Treitz right of midline suggests malrotation",
      "vs physiologic herniation — normal temporary umbilical herniation resolves with rotation",
      "SMA supplies midgut — volvulus compromises entire midgut vascular territory",
    ],
    pediatrics:
      "Malrotation with volvulus is a neonatal surgical emergency — bilious vomiting demands urgent evaluation. Ladd procedure broadens mesentery and repositions bowel. Differentiate from pyloric stenosis (nonbilious, 2–8 weeks).",
  },
  {
    id: "hindgut",
    name: "Hindgut",
    etymology: "Old English hind = rear + gut = intestine",
    aliases: [
      "hindgut",
      "hindguts",
      "posterior gut",
      "caudal gut",
      "distal gut",
    ],
    germLayer:
      "Endoderm (with splanchnic mesoderm; cloacal endoderm for urogenital derivatives)",
    origin:
      "Caudal gut tube from distal one-third of transverse colon through the upper anal canal; supplied by the inferior mesenteric artery (IMA); cloaca divides via urorectal septum into rectum and urogenital sinus.",
    derivatives: [
      "Distal one-third of transverse colon",
      "Descending and sigmoid colon",
      "Rectum",
      "Upper anal canal (above pectinate line)",
      "Distal urinary tract from urogenital sinus (bladder, urethra)",
    ],
  },
  {
    id: "spleen",
    name: "Spleen",
    etymology: "Greek splen + Latin lien = spleen",
    aliases: ["spleen", "splenic"],
    germLayer: "Mesoderm",
    origin:
      "Mesenchymal condensation in the dorsal mesogastrium; NOT a foregut derivative despite proximity to stomach.",
  },
  {
    id: "kidney",
    name: "Kidney",
    etymology: "Old English cwið + Latin ren = kidney",
    aliases: ["kidney", "kidneys", "renal"],
    germLayer: "Mesoderm",
    origin:
      "Definitive kidney from metanephros (ureteric bud + metanephric mesenchyme); intermediate mesoderm origin.",
    derivatives: ["Glomerulus", "Tubules", "Collecting system"],
  },
  {
    id: "costovertebral-angle",
    name: "Costovertebral Angle",
    etymology:
      "Latin costa = rib + vertebra = joint of spine + Latin angulus = corner",
    aliases: [
      "costovertebral angle",
      "costovertebral angles",
      "cva",
      "renal angle",
      "renal angles",
      "costovertebral angle cva",
    ],
    germLayer: "Mesoderm",
    origin:
      "Anatomic landmark formed where the 12th rib meets the vertebral column posteriorly — overlying the upper pole of the kidney bilaterally; used for percussion to assess renal/perinephric pathology.",
    derivatives: [],
  },
  {
    id: "renal-capsule",
    name: "Renal Capsule",
    etymology: "Latin ren = kidney + Latin capsula = little box/covering",
    aliases: [
      "renal capsule",
      "renal capsules",
      "kidney capsule",
      "kidney capsules",
      "fibrous renal capsule",
    ],
    germLayer: "Mesoderm",
    origin:
      "Dense fibrous connective tissue envelope surrounding the kidney parenchyma immediately beneath perinephric fat; richly innervated — distension causes severe flank pain.",
    derivatives: [],
  },
  {
    id: "renal-artery",
    name: "Renal Artery",
    etymology: "Latin ren = kidney + Greek arteria = air-holder/artery",
    aliases: ["renal artery", "renal arteries", "renal arterial"],
    germLayer: "Mesoderm",
    origin:
      "Lateral sacral branches of abdominal aorta arise at L1–L2; renal arteries enter the renal hilum and divide into segmental → interlobar → arcuate → interlobular arteries supplying nephrons; afferent arterioles branch from interlobular arteries to glomeruli.",
    derivatives: [
      "Segmental arteries",
      "Interlobar arteries",
      "Arcuate arteries",
      "Interlobular arteries",
      "Afferent arterioles",
    ],
  },
  {
    id: "metanephros",
    name: "Metanephros",
    etymology: "Greek meta = after/change + nephros = kidney",
    aliases: [
      "metanephros",
      "metanephric kidney",
      "definitive kidney",
      "permanent kidney",
      "metanephric system",
    ],
    germLayer: "Mesoderm",
    origin:
      "Caudal intermediate mesoderm gives rise to metanephric mesenchyme (blastema); ureteric bud sprouts from mesonephric (Wolffian) duct and invades mesenchyme — reciprocal induction forms the permanent kidney.",
    derivatives: [
      "Metanephric mesenchyme → glomeruli, proximal tubule through distal tubule",
      "Ureteric bud → ureter, renal pelvis, calyces, collecting ducts",
    ],
  },
  {
    id: "metanephric-diverticulum",
    name: "Metanephric Diverticulum",
    etymology:
      "Greek meta = after/change + nephros = kidney + Latin diverticulum = out-pouching/branch",
    aliases: [
      "metanephric diverticulum",
      "metanephric diverticula",
      "ureteric bud",
      "ureteric buds",
      "metanephric ureteric bud",
      "metanephric ureteric buds",
    ],
    germLayer: "Mesoderm",
    origin:
      "Epithelial outgrowth (diverticulum) from the caudal mesonephric (Wolffian) duct that invades metanephric mesenchyme; reciprocal induction with blastema forms the definitive kidney collecting system.",
    derivatives: [
      "Ureter",
      "Renal pelvis",
      "Major and minor calyces",
      "Collecting ducts",
    ],
  },
  {
    id: "renal-pelvis",
    name: "Renal Pelvis",
    etymology: "Latin ren = kidney + Latin pelvis = basin/trough",
    aliases: [
      "renal pelvis",
      "renal pelvises",
      "pelvis of kidney",
      "pelvis of the kidney",
      "kidney pelvis",
    ],
    germLayer: "Mesoderm",
    origin:
      "Proximal dilated segment of the ureteric bud (metanephric diverticulum) within the renal hilum; receives urine from major calyces and funnels it into the ureter.",
    derivatives: ["Ureter (distal continuation of ureteric bud)"],
  },
  {
    id: "major-calyx",
    name: "Major Calyx",
    etymology: "Latin major = larger + Greek kalyx = cup/husk",
    aliases: [
      "major calyx",
      "major calyces",
      "major calices",
      "major calyxes",
      "major renal calyx",
      "major renal calyces",
    ],
    germLayer: "Mesoderm",
    origin:
      "Formed by branching of the ureteric bud (metanephric diverticulum); each major calyx receives urine from two or more minor calyces and drains into the renal pelvis.",
    derivatives: [],
  },
  {
    id: "minor-calyx",
    name: "Minor Calyx",
    etymology: "Latin minor = smaller + Greek kalyx = cup/husk",
    aliases: [
      "minor calyx",
      "minor calyces",
      "minor calices",
      "minor calyxes",
      "minor renal calyx",
      "minor renal calyces",
      "renal calyx",
      "renal calyces",
      "renal calices",
    ],
    germLayer: "Mesoderm",
    origin:
      "Terminal cup-shaped branches of the ureteric bud that encircle renal papillae (tips of medullary pyramids); collect urine from papillary ducts of Bellini and drain into major calyces.",
    derivatives: [],
  },
  {
    id: "ureter",
    name: "Ureter",
    etymology: "Greek oureter = urinary canal",
    aliases: ["ureter", "ureteral", "ureters"],
    germLayer: "Mesoderm",
    origin:
      "Ureteric bud outgrowth from mesonephric duct (mesoderm); induces metanephric mesenchyme.",
  },
  {
    id: "bladder",
    name: "Urinary Bladder",
    etymology: "Greek ouron = urine + Old English blaedre = blister/pouch",
    aliases: ["bladder", "urinary bladder"],
    germLayer: "Endoderm / Mesoderm",
    origin:
      "Trigone from mesonephric duct (mesoderm); bladder body from urogenital sinus (endoderm of cloaca).",
  },
  {
    id: "urethra",
    name: "Urethra",
    etymology: "Greek ourethra = urinary passage",
    aliases: ["urethra", "urethral"],
    germLayer: "Endoderm",
    origin:
      "Forms from the urogenital sinus; prostatic/membranous/spongy portions differ by sex.",
  },
  {
    id: "urogenital-membrane",
    name: "Urogenital membrane",
    etymology:
      "Greek ouron = urine + Latin genitalis = origin/birth + Latin membrana = skin/layer",
    aliases: [
      "urogenital membrane",
      "urogenital membranes",
      "ug membrane",
      "cloacal membrane urogenital portion",
    ],
    germLayer: "Ectoderm / Endoderm",
    origin:
      "After the urorectal septum divides the cloaca, the ventral urogenital sinus remains covered externally by the urogenital membrane (closely related to the cloacal membrane region); perforation/canalization of this membrane establishes communication between the urogenital sinus and amniotic cavity — forming the external urethral/urogenital opening.",
  },
  {
    id: "urethral-fold",
    name: "Urethral Fold",
    etymology:
      "Greek ouron = urine + Latin fald = layer/plait + Latin fold = doubled part",
    aliases: [
      "urethral fold",
      "urethral folds",
      "urethral fold of urogenital sinus",
      "urethral folds of urogenital sinus",
      "urogenital fold",
      "urogenital folds",
      "genital fold",
      "genital folds",
      "lateral urogenital fold",
      "lateral urogenital folds",
      "urethral ridge",
      "urethral ridges",
    ],
    germLayer:
      "Ectoderm / Mesoderm (surface ectoderm with underlying mesenchyme)",
    origin:
      "Paired elevations (urogenital folds) flanking the urogenital membrane after cloacal division; in the 46,XY fetus under dihydrotestosterone (DHT) the folds fuse in the ventral midline to close the urethral groove and form the spongy (penile) urethra within the developing corpus spongiosum — failure of midline fusion causes hypospadias; in the 46,XX fetus the folds remain unfused and form the labia minora and urethral/vaginal vestibule.",
    derivatives: [
      "Male — ventral urethral tube (spongy urethra) within corpus spongiosum after midline fusion",
      "Female — labia minora and urethral/vaginal vestibule",
      "Related but distinct: labioscrotal swellings → scrotum (male) or labia majora (female)",
      "Genital tubercle (separate structure) → glans penis or clitoris; glandular urethra may require terminal canalization",
    ],
  },
  {
    id: "prostate",
    name: "Prostate",
    etymology: "Greek prostates = one standing before",
    aliases: ["prostate", "prostatic"],
    germLayer: "Endoderm",
    origin:
      "Urogenital sinus endoderm; grows around the urethra under influence of dihydrotestosterone.",
  },
  {
    id: "seminal-vesicles",
    name: "Seminal Vesicles",
    etymology: "Latin semen = seed + vesica = bladder/pouch",
    aliases: [
      "seminal vesicle",
      "seminal vesicles",
      "seminal vesicle gland",
      "seminal vesicle glands",
    ],
    germLayer: "Mesoderm",
    origin:
      "Paired outpouchings of the mesonephric (Wolffian) duct under androgen influence; contribute secretions to seminal fluid and drain into ejaculatory ducts.",
  },
  {
    id: "testis",
    name: "Testis",
    etymology: "Latin testis = witness",
    aliases: ["testis", "testes", "testicle", "testicular"],
    germLayer: "Mesoderm",
    origin:
      "Gonadal ridge (intermediate mesoderm); primordial germ cells migrate from yolk sac endoderm.",
  },
  {
    id: "seminiferous-tubules",
    name: "Seminiferous Tubules",
    etymology:
      "Latin semen = seed + ferre = to bear + Latin tubulus = small tube",
    aliases: [
      "seminiferous tubule",
      "seminiferous tubules",
      "seminiferous tubule of testis",
      "seminiferous tubules of testis",
      "seminiferous tubule epithelium",
      "convoluted seminiferous tubules",
      "seminiferous cords",
      "spermatogenic tubules",
      "spermatogenic tubule",
    ],
    germLayer:
      "Mesoderm (gonadal ridge) with germ cells from yolk sac endoderm",
    origin:
      "Develop from primitive sex cords of the indifferent gonad that differentiate into seminiferous cords under SRY/testis-determining pathways; become convoluted seminiferous tubules at puberty when spermatogenesis begins.",
    derivatives: [
      "Spermatozoa (from germ cells undergoing meiosis and spermiogenesis)",
      "Sertoli cell–supported spermatogenic lineage (spermatogonia → spermatocytes → spermatids → sperm)",
      "Efferent ductule connection to rete testis and epididymis",
    ],
    functionSummary:
      "Highly coiled tubules within the testis where spermatogenesis occurs — Sertoli cells line the tubule, nourish germ cells, form the blood-testis barrier, and secrete inhibin B and AMH; Leydig cells in the interstitium between tubules provide testosterone for local and systemic androgen support.",
    commonPathologies: [
      "Klinefelter syndrome — seminiferous tubule hyalinization and germ cell loss",
      "Mumps orchitis (post-pubertal) — inflammatory damage to tubules → atrophy and infertility",
      "Cryptorchidism — heat injury to tubules → impaired spermatogenesis",
      "Sertoli cell-only syndrome — tubules lack germ cells (azoospermia)",
      "Radiation and chemotherapy gonadotoxicity",
      "Varicocele-related tubular dysfunction and oligospermia",
    ],
    step1Pearls: [
      "Seminiferous tubules = site of spermatogenesis inside the testis",
      "Sertoli cells line tubules; Leydig cells lie in interstitium between tubules",
      "Blood-testis barrier — Sertoli tight junctions protect meiotic/postmeiotic germ cells from immune attack",
      "FSH acts on Sertoli cells → supports spermatogenesis + inhibin B secretion",
      "LH acts on Leydig cells → testosterone → supports spermatogenesis within tubules",
      "Klinefelter — seminiferous tubule hyalinization, ↑ FSH, ↓ inhibin B, infertility",
      "Sperm leave tubules → rete testis → efferent ductules → epididymis for maturation/storage",
    ],
    pediatrics:
      "Spermatogenesis does not begin until puberty; prepubertal seminiferous tubules contain spermatogonia and Sertoli cells without mature sperm. Cryptorchidism exposes tubules to higher abdominal temperature and impairs future spermatogenesis — orchiopexy by 6–18 months limits damage. Post-pubertal mumps orchitis is a major cause of bilateral tubular damage and infertility.",
  },
  {
    id: "epididymis",
    name: "Epididymis",
    etymology: "Greek epi = upon + didymos = twin/testis",
    aliases: ["epididymis", "epididymal"],
    germLayer: "Mesoderm",
    origin:
      "Mesonephric (Wolffian) duct derivative; forms efferent ductules and epididymis under testosterone.",
  },
  {
    id: "vas-deferens",
    name: "Vas Deferens",
    etymology: "Latin vas = vessel + deferens = carrying away",
    aliases: [
      "vas deferens",
      "vasa deferentia",
      "ductus deferens",
      "ductus deferentia",
      "deferent duct",
      "deferent ducts",
      "sperm duct",
      "sperm ducts",
      "vas deferentia",
    ],
    germLayer: "Mesoderm",
    origin:
      "Distal mesonephric (Wolffian) duct derivative; develops and persists in males under testosterone and absence of müllerian-inhibiting factor (MIF/AMH).",
    derivatives: [
      "Ampulla of vas deferens",
      "Ejaculatory duct (with seminal vesicle duct)",
    ],
  },
  {
    id: "pampiniform-plexus",
    name: "Pampiniform Plexus",
    etymology: "Latin pampinus = tendril/vine + forma = shape",
    aliases: [
      "pampiniform plexus",
      "pampiniform plexuses",
      "pampiniform venous plexus",
      "pampiniform venous plexuses",
      "pampiniform plexus of spermatic cord",
      "testicular venous plexus",
      "testicular venous plexuses",
    ],
    germLayer: "Mesoderm (vascular endothelium)",
    origin:
      "Network of small veins surrounding the testicular artery within the spermatic cord; forms during testicular descent through the inguinal canal and coalesces into the testicular vein.",
    derivatives: [
      "Testicular vein — drains into left renal vein (left) or inferior vena cava (right)",
    ],
    functionSummary:
      "Venous plexus in the spermatic cord that drains the testis and epididymis — wraps around the testicular artery to provide countercurrent heat exchange, cooling arterial blood ~2–3°C below core temperature for normal spermatogenesis.",
    commonPathologies: [
      "Varicocele — dilation of pampiniform plexus veins ('bag of worms')",
      "Left-sided varicocele — left testicular vein enters left renal vein at right angle (nutcracker physiology)",
      "Varicocele-related oligospermia and infertility",
      "Thrombosis or compression of testicular vein (rare)",
    ],
    step1Pearls: [
      "Pampiniform plexus — vine-like venous network in spermatic cord around testicular artery",
      "Countercurrent heat exchange cools blood to testis for spermatogenesis",
      "Varicocele = dilated pampiniform plexus — palpable 'bag of worms'",
      "Left > right varicocele — left testicular vein → left renal vein (90° entry)",
      "Worsens with standing/Valsalva; improves supine",
      "Associated with oligospermia and infertility; may improve after repair in selected men",
      "Part of spermatic cord with vas deferens, testicular artery, nerves, and cremaster muscle",
    ],
    pediatrics:
      "Adolescent varicocele is the most common scrotal mass in teen boys — usually left-sided; monitor testicular volume for asymmetry and semen parameters when older. Most pediatric varicoceles are managed conservatively unless testicular growth is affected.",
  },
  {
    id: "gonadal-vein",
    name: "Gonadal Vein",
    etymology:
      "Greek gonos = seed/offspring + Latin vena = vein — paired veins draining the testis (testicular vein) or ovary (ovarian vein) into the systemic venous circulation",
    aliases: [
      "gonadal vein",
      "gonadal veins",
      "gonadal venous",
      "testicular vein",
      "testicular veins",
      "ovarian vein",
      "ovarian veins",
      "internal spermatic vein",
      "internal spermatic veins",
      "left gonadal vein",
      "right gonadal vein",
      "left testicular vein",
      "right testicular vein",
      "left ovarian vein",
      "right ovarian vein",
    ],
    germLayer: "Mesoderm (endothelium)",
    origin:
      "Forms from coalescence of the pampiniform plexus (testis) or ovarian venous plexus; left gonadal vein drains into the left renal vein; right gonadal vein drains directly into the inferior vena cava — asymmetric drainage explains left-sided predominance of varicocele and nutcracker-related pathology.",
    derivatives: [
      "Testicular vein (male gonadal vein)",
      "Ovarian vein (female gonadal vein)",
    ],
    functionSummary:
      "Drains venous blood from the testis/ovary and associated structures — left gonadal vein enters left renal vein at nearly 90°; right gonadal vein enters IVC directly at a more acute angle, favoring left-sided venous hypertension and varicocele.",
    commonPathologies: [
      "Left-sided varicocele — dilated pampiniform plexus/testicular vein (nutcracker physiology)",
      "Ovarian vein thrombosis — postpartum or post-hysterectomy; flank/abdominal pain ± leg swelling",
      "Nutcracker syndrome — left renal vein compressed between aorta and SMA → gonadal vein reflux",
      "Gonadal vein compression or thrombosis (rare)",
    ],
    step1Pearls: [
      "Gonadal vein = testicular vein (male) or ovarian vein (female)",
      "Left gonadal vein → left renal vein; right gonadal vein → IVC",
      "Left > right varicocele — left testicular vein enters renal vein at right angle",
      "Nutcracker syndrome — compressed left renal vein → flank pain, hematuria, left varicocele",
      "Postpartum ovarian vein thrombosis — fever, flank pain, unilateral leg swelling",
      "vs left renal vein — receives left gonadal vein; not the same vessel",
      "vs pampiniform plexus — venous network that coalesces into gonadal vein in spermatic cord",
    ],
    pediatrics:
      "Adolescent left varicocele is common; monitor testicular volume. Ovarian vein thrombosis is rare in children but can occur with severe infection or hypercoagulable states.",
  },
  {
    id: "scrotum",
    name: "Scrotum",
    etymology: "Latin scrotum = skin/pouch",
    aliases: ["scrotum", "scrotal", "scrotal sac", "scrotal pouch"],
    germLayer: "Ectoderm / Mesoderm",
    origin:
      "Labioscrotal swellings of the urogenital folds fuse in the male fetus to form the scrotum; contains skin (ectoderm), dartos smooth muscle, and cremaster muscle investing the testes.",
  },
  {
    id: "ovary",
    name: "Ovary",
    etymology: "Latin ovum = egg",
    aliases: ["ovary", "ovaries", "ovarian"],
    germLayer: "Mesoderm",
    origin:
      "Gonadal ridge (intermediate mesoderm); primordial germ cells from yolk sac endoderm.",
  },
  {
    id: "uterus",
    name: "Uterus",
    etymology: "Latin uterus = womb",
    aliases: ["uterus", "uterine", "womb"],
    germLayer: "Mesoderm",
    origin:
      "Paramesonephric (Müllerian) duct fuses to form uterus; caudal ends form cervix and upper vagina.",
  },
  {
    id: "endometrium",
    name: "Endometrium",
    etymology: "Greek endon = within + metra = uterus",
    aliases: [
      "endometrium",
      "endometrial",
      "uterine lining",
      "endometrial lining",
      "endometrial tissue",
    ],
    germLayer: "Mesoderm",
    origin:
      "Inner glandular mucosal lining of the fused paramesonephric (Müllerian) ducts forming the uterine cavity; basalis and functional layers cycle under ovarian estrogen and progesterone.",
    derivatives: [
      "Basalis layer",
      "Functional layer",
      "Spiral arteries",
      "Decidua (in pregnancy)",
    ],
  },
  {
    id: "cervix",
    name: "Cervix",
    etymology: "Latin cervix = neck",
    aliases: [
      "cervix",
      "cervical",
      "cervix uteri",
      "uterine cervix",
      "cervix of uterus",
    ],
    germLayer: "Mesoderm",
    origin:
      "Caudal fused portion of paramesonephric (Müllerian) ducts forms the cervix; ectocervix lined by stratified squamous epithelium, endocervix by columnar epithelium; squamocolumnar junction (transformation zone) is the site of HPV-related neoplasia.",
    derivatives: [
      "Ectocervix (squamous epithelium)",
      "Endocervix (columnar epithelium)",
      "Transformation zone",
      "Cervical stroma",
    ],
  },
  {
    id: "fallopian-tube",
    name: "Fallopian Tube",
    etymology: "eponym: Gabriele Falloppio + Latin tubus = pipe",
    aliases: ["fallopian tube", "fallopian tubes", "uterine tube", "oviduct"],
    germLayer: "Mesoderm",
    origin: "Cranial unfused portion of paramesonephric (Müllerian) ducts.",
  },
  {
    id: "vagina",
    name: "Vagina",
    etymology: "Latin vagina = sheath",
    aliases: ["vagina", "vaginal"],
    germLayer: "Mesoderm / Endoderm",
    origin:
      "Upper vagina from Müllerian duct; lower vagina from urogenital sinus (sinovaginal bulbs).",
  },
  {
    id: "vulva",
    name: "Vulva",
    etymology: "Latin vulva = wrapper/covering",
    aliases: [
      "vulva",
      "vulvar",
      "vulval",
      "labia",
      "labia majora",
      "labia minora",
      "external female genitalia",
    ],
    germLayer: "Ectoderm / Mesoderm",
    origin:
      "External genitalia from genital tubercle (clitoris), urogenital folds (labia minora/urethral/ vaginal vestibule), and labioscrotal swellings (labia majora) under estrogen influence in female fetus.",
    derivatives: [
      "Labia majora",
      "Labia minora",
      "Clitoris",
      "Vestibule",
      "Bartholin glands",
    ],
  },
  {
    id: "vestibule-of-the-vagina",
    name: "Vestibule of the Vagina",
    etymology: "Latin vestibulum = entrance hall + Latin vagina = sheath",
    aliases: [
      "vestibule of the vagina",
      "vestibule of vagina",
      "vaginal vestibule",
      "vaginal vestibules",
      "vulvar vestibule",
      "vulvar vestibules",
      "vestibule",
      "vestibules",
      "female vestibule",
      "urogenital vestibule",
    ],
    germLayer: "Ectoderm / Mesoderm",
    origin:
      "Forms from the unfused urogenital (urethral) folds in the 46,XX fetus — the space and epithelium between the labia minora that receives the urethral and vaginal openings; lined by stratified squamous non-keratinized epithelium continuous with vaginal and urethral mucosa.",
    derivatives: [
      "Urethral meatus",
      "Vaginal introitus and hymen",
      "Openings of Bartholin (greater vestibular) glands",
      "Openings of Skene (paraurethral) glands",
      "Minor vestibular glands",
    ],
  },
  {
    id: "greater-vestibular-gland",
    name: "Greater Vestibular (Bartholin) Gland",
    etymology:
      "Latin vestibulum = entrance hall + Latin glans = acorn/gland + Caspar Bartholin the Younger (Danish anatomist) — paired mucus-secreting glands of the vulvar vestibule",
    aliases: [
      "greater vestibular gland",
      "greater vestibular glands",
      "bartholin gland",
      "bartholin glands",
      "bartholin's gland",
      "bartholin's glands",
      "bartholins gland",
      "bartholins glands",
      "glands of bartholin",
      "gland of bartholin",
      "vestibular gland",
      "vestibular glands",
      "major vestibular gland",
      "major vestibular glands",
    ],
    germLayer: "Endoderm",
    origin:
      "Develops from the urogenital sinus endoderm in the 46,XX fetus — paired glands embedded in the posterolateral vulvar vestibule (deep to labia minora) that secrete mucus for vaginal lubrication; homologous to the male bulbourethral (Cowper) glands.",
    derivatives: [
      "Bartholin duct opening at posterolateral vestibule (4 and 8 o'clock)",
      "Mucus secretion for vulvar/vaginal lubrication",
    ],
  },
  {
    id: "breast",
    name: "Breast",
    etymology: "Old English breost = breast + Latin mamma = breast",
    aliases: [
      "breast",
      "breasts",
      "mammary gland",
      "mammary glands",
      "mammary tissue",
      "mamma",
      "mammary",
    ],
    germLayer: "Ectoderm / Mesoderm",
    origin:
      "Mammary glands develop along mammary ridges (milk lines) from ectodermal placodes invaginating into underlying mesenchyme; nipple and areola from surface ectoderm; glandular tissue branches from ectodermal epithelial buds.",
    derivatives: [
      "Lobules and ducts",
      "Nipple and areola",
      "Lactiferous ducts",
    ],
  },
  {
    id: "thyroid",
    name: "Thyroid",
    etymology: "Greek thyreos = shield + -oid = shaped like",
    aliases: ["thyroid", "thyroid gland"],
    germLayer: "Endoderm",
    origin:
      "Foramen cecum of tongue (floor of mouth endoderm); descends via thyroglossal duct to pretracheal position.",
  },
  {
    id: "parathyroid",
    name: "Parathyroid",
    etymology: "Greek para = beside + thyreos = shield",
    aliases: ["parathyroid", "parathyroid gland", "parathyroid glands"],
    germLayer: "Endoderm",
    origin:
      "Dorsal wings of third and fourth pharyngeal pouches (endoderm); inferior from third pouch, superior from fourth.",
  },
  {
    id: "adrenal-cortex",
    name: "Adrenal Cortex",
    etymology:
      "Latin ad = near + renal = kidney + Latin cortex = bark/outer layer",
    aliases: [
      "adrenal cortex",
      "adrenal cortices",
      "cortex of adrenal gland",
      "cortex of the adrenal gland",
      "suprarenal cortex",
    ],
    germLayer: "Mesoderm",
    origin:
      "Mesodermal mesenchyme from celomic (coelomic) epithelium of the posterior abdominal wall near the urogenital ridge; condenses into a cortical primordium that envelops the migrating neural crest–derived medulla. Fetal cortex predominates in utero and involutes after birth; the permanent adult cortex differentiates into zona glomerulosa (outer), fasciculata (middle), and reticularis (inner).",
    derivatives: ["Zona glomerulosa", "Zona fasciculata", "Zona reticularis"],
  },
  {
    id: "zona-glomerulosa",
    name: "Zona Glomerulosa",
    etymology:
      "Latin zona = belt/band + glomerulus = small ball (clustered histologic appearance)",
    aliases: [
      "zona glomerulosa",
      "zona g",
      "zona g.",
      "outer adrenal cortex",
      "adrenal zona glomerulosa",
    ],
    germLayer: "Mesoderm",
    origin:
      "Outermost zone of the permanent adult adrenal cortex, arising from mesodermal celomic epithelium–derived cortical primordium; histologically arranged in rounded cell clusters beneath the adrenal capsule.",
    derivatives: ["Aldosterone-producing mineralocorticoid cells"],
  },
  {
    id: "zona-fasciculata",
    name: "Zona Fasciculata",
    etymology:
      "Latin zona = belt/band + fasciculus = small bundle (parallel cordlike cell columns)",
    aliases: [
      "zona fasciculata",
      "zona f",
      "zona f.",
      "middle adrenal cortex",
      "adrenal zona fasciculata",
    ],
    germLayer: "Mesoderm",
    origin:
      "Middle and largest zone of the adrenal cortex between glomerulosa and reticularis; cells form radially oriented cords with lipid-rich cytoplasm (foamy appearance) from cholesterol stores used for steroid synthesis.",
    derivatives: ["Glucocorticoid-producing cells (cortisol)"],
  },
  {
    id: "zona-reticularis",
    name: "Zona Reticularis",
    etymology:
      "Latin zona = belt/band + reticulum = network (anastomosing cell cords)",
    aliases: [
      "zona reticularis",
      "zona r",
      "zona r.",
      "inner adrenal cortex",
      "adrenal zona reticularis",
    ],
    germLayer: "Mesoderm",
    origin:
      "Innermost zone of the adrenal cortex adjacent to the medulla; cells form a network of cords that synthesize adrenal androgens (DHEA, androstenedione), especially after puberty.",
    derivatives: ["Adrenal androgen-producing cells"],
  },
  {
    id: "adrenal-medulla",
    name: "Adrenal Medulla",
    etymology: "Latin ad = near + renal = kidney + Latin medulla = marrow",
    aliases: [
      "adrenal medulla",
      "adrenal medullas",
      "medulla of adrenal gland",
      "medulla of the adrenal gland",
      "suprarenal medulla",
      "chromaffin cells",
      "chromaffin cell",
      "chromaffin tissue",
    ],
    germLayer: "Ectoderm / Neural crest",
    origin:
      "Neural crest cells (neuroectoderm) migrate from the neural tube alongside the developing sympathetic chain and penetrate the center of the mesoderm-derived adrenal cortex primordium, differentiating into chromaffin cells — functionally modified postganglionic sympathetic neurons that secrete catecholamines directly into blood.",
  },
  {
    id: "rathke-pouch",
    name: "Rathke Pouch",
    etymology:
      "Named for German embryologist Martin Heinrich Rathke + Old English poca = bag — oral ectoderm invagination forming anterior pituitary",
    aliases: [
      "rathke pouch",
      "rathke pouches",
      "rathke's pouch",
      "rathkes pouch",
      "rathke pouch ectoderm",
      "oral ectoderm pituitary pouch",
      "hypophyseal pouch",
      "adenohypophyseal pouch",
    ],
    germLayer: "Surface ectoderm (oral ectoderm / stomodeum)",
    origin:
      "Ectodermal invagination from the roof of the stomodeum (primitive oral cavity) during week 4; grows superiorly toward the neurohypophyseal downgrowth from the diencephalon and differentiates into anterior pituitary (adenohypophysis) — remnant canal may persist as craniopharyngioma source.",
    derivatives: [
      "Anterior pituitary (adenohypophysis) — GH, ACTH, TSH, LH, FSH, prolactin from distinct cell types",
      "Pars intermedia (remnant between anterior and posterior lobes)",
      "Rathke cleft remnants — potential craniopharyngioma origin",
    ],
    functionSummary:
      "Embryologic primordium of the hormone-secreting anterior pituitary; distinct from posterior pituitary (neuroectoderm from diencephalon) — together form the hypophysis.",
    commonPathologies: [
      "Craniopharyngioma — Rathke pouch remnant tumor (calcified suprasellar mass in children)",
      "Septo-optic dysplasia — hypoplastic Rathke pouch/anterior pituitary with optic nerve hypoplasia",
      "Anterior pituitary hypoplasia — multiple hormone deficiencies",
      "Ectopic posterior pituitary bright spot on MRI if stalk abnormal",
    ],
    step1Pearls: [
      "Rathke pouch = surface/oral ectoderm → anterior pituitary (adenohypophysis)",
      "Posterior pituitary = neuroectoderm downgrowth from diencephalon — stores ADH/oxytocin",
      "Craniopharyngioma — childhood suprasellar calcified mass from Rathke remnant",
      "vs posterior pituitary — neural tissue, not Rathke pouch derivative",
      "vs pharyngeal pouch (endoderm) — thymus/parathyroids; Rathke is ectoderm",
      "Sheehan syndrome — postpartum infarction of anterior pituitary (formed from Rathke), not posterior",
    ],
    pediatrics:
      "Craniopharyngioma is a classic pediatric suprasellar tumor causing bitemporal hemianopia, growth failure, and diabetes insipidus if posterior pituitary involved. Septo-optic dysplasia presents with hypopituitarism and blindness in infancy.",
  },
  {
    id: "pituitary",
    name: "Pituitary",
    etymology: "Latin pituita = phlegm",
    aliases: ["pituitary", "pituitary gland", "hypophysis"],
    germLayer: "Ectoderm",
    origin:
      "Anterior pituitary from Rathke pouch (oral ectoderm); posterior pituitary from neuroectoderm (diencephalon downgrowth).",
    derivatives: ["Anterior pituitary", "Posterior pituitary"],
  },
  {
    id: "pineal",
    name: "Pineal Gland",
    etymology: "Latin pinea = pine cone + Latin glans = acorn/gland",
    aliases: ["pineal", "pineal gland"],
    germLayer: "Ectoderm",
    origin:
      "Neuroectodermal outgrowth from the diencephalon roof of the third ventricle.",
  },
  {
    id: "thymus",
    name: "Thymus",
    etymology: "Greek thymos = soul/incense",
    aliases: ["thymus", "thymic"],
    germLayer: "Endoderm",
    origin:
      "Ventral wings of third pharyngeal pouches (endoderm); descends into anterior mediastinum.",
  },
  {
    id: "bone-marrow",
    name: "Bone Marrow",
    etymology: "Old English ban = bone + Old English mearg = marrow",
    aliases: ["bone marrow", "marrow"],
    germLayer: "Mesoderm",
    origin:
      "Hematopoietic tissue in medullary cavities of bones; mesodermal mesenchyme with blood cell precursors.",
  },
  {
    id: "lymph-nodes",
    name: "Lymph Nodes",
    etymology: "Latin lympha = clear fluid + nodus = knot",
    aliases: ["lymph node", "lymph nodes", "lymphatic"],
    germLayer: "Mesoderm",
    origin:
      "Develop from lymph sacs (mesoderm) and mesenchymal condensations along lymphatic vessels.",
  },
  {
    id: "systemic-lymphoid-system",
    name: "Systemic Lymphoid System",
    etymology:
      "Latin lympha = clear fluid + Greek eidos = form + Greek systema = organized whole",
    aliases: [
      "systemic lymphoid system",
      "lymphoid system",
      "lymphatic system",
      "immune lymphoid system",
      "secondary lymphoid organs",
      "lymphoid organs",
    ],
    germLayer: "Mesoderm / Endoderm / Ectoderm",
    origin:
      "Lymphatic vessels and nodes arise mainly from venous endothelium/mesoderm; thymic epithelium from third pharyngeal pouch endoderm; marrow stroma and spleen from mesoderm. Hematopoietic lymphocytes seed these organs from bone marrow precursors.",
    derivatives: [
      "Primary lymphoid organs: bone marrow, thymus",
      "Secondary lymphoid organs: lymph nodes, spleen, MALT/Peyer patches, tonsils",
      "Lymphatic vessels and lymph",
    ],
  },
  {
    id: "brain",
    name: "Brain",
    etymology: "Old English braegen + Greek enkephalos = brain",
    aliases: ["brain", "cerebral", "cerebrum", "cortex"],
    germLayer: "Ectoderm",
    origin:
      "Neuroectoderm of neural tube; prosencephalon, mesencephalon, and rhombencephalon form major divisions.",
    derivatives: [
      "Telencephalon",
      "Diencephalon",
      "Mesencephalon",
      "Metencephalon",
      "Myelencephalon",
    ],
  },
  {
    id: "temporal-lobe",
    name: "Temporal Lobe",
    etymology:
      "Latin temporalis = of the temple (side of head) + Latin lobus = lobe — lateral telencephalic lobe beneath the temporal bone housing auditory, memory, and limbic structures",
    aliases: [
      "temporal lobe",
      "temporal lobes",
      "temporal lobe cortex",
      "temporal cortices",
      "temporal cortex",
      "temporal lobe brain",
      "temporal lobe of brain",
      "temporal lobe of the brain",
    ],
    germLayer: "Ectoderm",
    origin:
      "Develops from the lateral outpouching of the telencephalon (forebrain vesicle) — contains allocortex (hippocampus, amygdala) and neocortex with superior, middle, and inferior temporal gyri.",
    derivatives: [
      "Primary auditory cortex (A1) — transverse temporal (Heschl) gyri",
      "Wernicke area — receptive language (posterior superior temporal gyrus, often left hemisphere)",
      "Hippocampus and parahippocampal gyrus — memory encoding",
      "Amygdala — fear, emotion, emotional memory",
      "Uncus — anterior medial temporal lobe; olfactory and seizure focus",
      "Meyer's loop (optic radiations) — temporal lobe white matter; visual field fibers",
    ],
    functionSummary:
      "Auditory processing, language comprehension (Wernicke), declarative memory (hippocampus), emotional processing (amygdala), and olfaction (uncus); integrates auditory and visual association with limbic circuits.",
    commonPathologies: [
      "HSV-1 encephalitis — predilection for medial temporal lobes and hippocampus",
      "Mesial temporal sclerosis — refractory temporal lobe epilepsy",
      "Alzheimer disease — early hippocampal and entorhinal cortex atrophy",
      "Pick disease (frontotemporal dementia) — temporal/frontal atrophy",
      "Superior quadrantanopia — Meyer's loop lesion (temporal lobe)",
      "Wernicke aphasia — fluent nonsensical speech with impaired comprehension",
    ],
    step1Pearls: [
      "Temporal lobe — hearing (A1), memory (hippocampus), fear/emotion (amygdala), receptive language (Wernicke)",
      "HSV encephalitis — fever, altered mental status, temporal lobe MRI hyperintensity; empiric IV acyclovir",
      "Uncus herniation — CN III palsy, brainstem compression — surgical emergency",
      "Meyer's loop in temporal lobe — contralateral superior quadrantanopia (pie in the sky)",
      "vs frontal lobe — motor planning, Broca speech production; vs parietal — somatosensory integration",
      "Dominant hemisphere temporal lesion → Wernicke aphasia; nondominant → prosody, spatial memory deficits",
    ],
    pediatrics:
      "HSV encephalitis can present in children with fever and behavioral change — temporal lobe involvement on MRI. Febrile seizures in young children are usually benign; complex febrile seizures or mesial temporal sclerosis predispose to temporal lobe epilepsy later.",
  },
  {
    id: "communicating-arteries",
    name: "Communicating Arteries",
    etymology:
      "Latin communicare = to share/connect + arteria = artery — anastomotic vessels linking major branches of the circle of Willis",
    aliases: [
      "communicating arteries",
      "communicating artery",
      "anterior communicating artery",
      "anterior communicating arteries",
      "acom",
      "acom artery",
      "posterior communicating artery",
      "posterior communicating arteries",
      "pcom",
      "pcom artery",
      "circle of willis communicating arteries",
    ],
    germLayer: "Mesoderm",
    origin:
      "Embryologic branches of the internal carotid and vertebrobasilar systems that anastomose to form the circle of Willis — anterior communicating artery (ACom) joins the paired anterior cerebral arteries; posterior communicating artery (PCom) connects the internal carotid to the posterior cerebral artery.",
    derivatives: [
      "Anterior communicating artery (ACom) — short bridge between A1 segments",
      "Posterior communicating artery (PCom) — ICA to PCA connection within cavernous/suprasellar region",
    ],
    functionSummary:
      "Collateral cerebral blood flow between carotid and vertebrobasilar territories; anatomic completion of the circle of Willis allows redistribution if a major vessel occludes.",
    commonPathologies: [
      "Saccular (berry) aneurysm — ACom most common overall site; PCom classic for CN III palsy",
      "Subarachnoid hemorrhage from ruptured communicating artery aneurysm",
      "ACom aneurysm compressing optic chiasm — bitemporal hemianopia",
      "PCom aneurysm — painful oculomotor palsy (down-and-out eye, ptosis, dilated pupil)",
    ],
    step1Pearls: [
      "Circle of Willis: ACom (anterior) + PCom (posterior) are the communicating arteries",
      "ACom aneurysm — most common intracranial aneurysm location overall",
      "PCom aneurysm — CN III palsy with pupil involvement (parasympathetic fibers on artery surface)",
      "Incomplete circle of Willis is common — collateral flow may fail in stroke",
      "SAH from ruptured berry aneurysm often at ACom or PCom junctions",
      "vs MCA aneurysm — MCA bifurcation is common but not a communicating artery",
    ],
    pediatrics:
      "Pediatric intracranial aneurysms are rare; when present they may occur at atypical locations. Moyamoya and sickle cell vasculopathy are more common pediatric stroke mimics than communicating artery aneurysms.",
  },
  {
    id: "carotid-sinus",
    name: "Carotid Sinus",
    etymology:
      "Greek karos = deep sleep (historical term for carotid region) + Latin sinus = curve/bay — dilated baroreceptor-rich region at the origin of the internal carotid artery at the carotid bifurcation",
    aliases: [
      "carotid sinus",
      "carotid sinuses",
      "carotid sinus baroreceptor",
      "carotid sinus baroreceptors",
      "carotid sinus region",
      "carotid sinus area",
      "carotid sinus dilation",
      "carotid sinus dilations",
      "carotid bifurcation sinus",
      "sinus caroticus",
    ],
    germLayer: "Mesoderm (vessel wall) with neural crest–associated baroreceptor innervation",
    origin:
      "Dilated proximal internal carotid bulb at the common carotid bifurcation — wall contains stretch-sensitive baroreceptors with afferent fibers in the carotid sinus nerve (branch of glossopharyngeal nerve, CN IX).",
    derivatives: [
      "Carotid sinus nerve (CN IX afferent limb of baroreflex)",
      "Adjacent carotid body chemoreceptor at medial bifurcation",
    ],
    functionSummary:
      "Arterial baroreceptor zone that senses blood pressure and wall stretch — increased firing during hypertension triggers medullary reflexes that increase vagal tone and decrease sympathetic vasomotor output, lowering heart rate and blood pressure.",
    commonPathologies: [
      "Carotid sinus hypersensitivity — exaggerated reflex syncope with neck pressure",
      "Carotid sinus massage — diagnostic/therapeutic vagal stimulation",
      "Tumor or surgery at carotid bifurcation — mechanical baroreceptor stimulation",
      "Carotid sinus syndrome — reflex bradycardia or hypotension",
    ],
    step1Pearls: [
      "Carotid sinus = baroreceptor dilation at internal carotid origin (carotid bifurcation)",
      "Afferent limb — glossopharyngeal nerve (CN IX) carotid sinus nerve",
      "↑ BP/stretch → ↑ baroreceptor firing → ↓ HR and vasodilation",
      "Carotid sinus massage may terminate AVNRT or unmask hypersensitivity",
      "vs carotid body — chemoreceptor medial at bifurcation senses O₂/CO₂/pH, not pressure",
      "Aortic arch baroreceptors use CN X — complementary to carotid sinus",
      "Avoid bilateral carotid massage — cerebral hypoperfusion risk",
    ],
    pediatrics:
      "Carotid sinus baroreceptor reflex is functional in children but carotid sinus hypersensitivity is primarily an adult diagnosis. Avoid carotid massage in pediatric patients outside specialist settings.",
  },
  {
    id: "carotid-body",
    name: "Carotid Body",
    etymology:
      "Greek karos = deep sleep + Latin corpus = body — small chemoreceptor organ at the medial aspect of the carotid bifurcation sensing arterial blood gases",
    aliases: [
      "carotid body",
      "carotid bodies",
      "carotid body chemoreceptor",
      "carotid body chemoreceptors",
      "carotid glomus",
      "carotid glomus bodies",
      "glomus caroticum",
      "carotid body paraganglion",
      "carotid body paraganglions",
      "carotid chemoreceptor",
      "carotid chemoreceptors",
    ],
    germLayer: "Neural crest (paraganglion / neuroectodermal chemoreceptor tissue)",
    origin:
      "Neural crest–derived paraganglion situated at the medial carotid bifurcation between the external and internal carotid arteries — richly vascularized chemoreceptor tissue with afferents via the carotid sinus nerve (CN IX) and glossopharyngeal pathway to the medulla.",
    derivatives: [
      "Type I glomus (chemoreceptor) cells and supporting type II cells",
      "Carotid body tumor (paraganglioma / chemodectoma) from same tissue",
    ],
    functionSummary:
      "Peripheral chemoreceptor detecting arterial hypoxemia, hypercapnia, and acidosis — stimulates increased ventilation and sympathetic tone; primary O₂ sensor at rest and during acute hypoxia.",
    commonPathologies: [
      "Carotid body paraganglioma (chemodectoma) — neck mass at bifurcation, may cause cranial nerve palsy",
      "Chronic hypoxemia (COPD, high altitude) — carotid body hypertrophy",
      "Cluster headache therapies — carotid body modulation (clinical context)",
      "Bilateral carotid body resection — abolishes hypoxic ventilatory drive (historical)",
    ],
    step1Pearls: [
      "Carotid body = peripheral chemoreceptor at medial carotid bifurcation",
      "Stimuli — hypoxemia (primary), hypercapnia, acidosis",
      "Afferent — CN IX (glossopharyngeal) via carotid sinus nerve",
      "vs carotid sinus — sinus is baroreceptor (pressure) at internal carotid dilation",
      "vs central chemoreceptors — medulla senses CSF H⁺ from CO₂ (main chronic CO₂ sensor)",
      "Carotid body tumor = paraganglioma at bifurcation — CN IX/X/XII palsy possible",
      "High altitude and COPD — chronic hypoxic chemoreceptor stimulation",
    ],
    pediatrics:
      "Carotid body paragangliomas are rare in children but occur in familial paraganglioma syndromes (SDHx mutations). Neonatal hypoxic respiratory drive relies on peripheral chemoreceptors including the carotid body.",
  },
  {
    id: "meninges",
    name: "Meninges",
    etymology: "Greek meninx = membrane + plural -es",
    aliases: [
      "meninges",
      "meninx",
      "cranial meninges",
      "spinal meninges",
      "leptomeninges",
      "leptomeninx",
      "meningeal layers",
      "meningeal membranes",
    ],
    germLayer: "Mesoderm (dura) and neural crest (leptomeninges)",
    origin:
      "Dura mater derives from mesoderm (periosteal and meningeal layers); arachnoid and pia mater (leptomeninges) derive from neural crest surrounding the developing neural tube.",
    derivatives: [
      "Dura mater — tough outer layer; folds into falx cerebri and tentorium cerebelli",
      "Arachnoid mater — middle avascular layer; arachnoid granulations reabsorb CSF",
      "Pia mater — thin inner layer adherent to brain and spinal cord surface",
      "Subarachnoid space — between arachnoid and pia; contains CSF and cerebral vessels",
    ],
    functionSummary:
      "Protect and suspend the CNS; dura provides mechanical barrier and venous sinuses; subarachnoid space circulates CSF and houses major cerebral arteries; pain-sensitive meninges mediate headache in inflammation.",
    commonPathologies: [
      "Meningitis — inflammation of meninges",
      "Subarachnoid hemorrhage — blood in subarachnoid space",
      "Meningioma — arachnoid cap cell tumor",
      "Epidural hematoma — blood between skull and dura",
      "Subdural hematoma — blood between dura and arachnoid",
    ],
    step1Pearls: [
      "Three layers: dura (outer), arachnoid (middle), pia (inner)",
      "Subarachnoid space = CSF + major cerebral arteries (site of SAH and LP)",
      "Epidural space is outside dura; subdural space is between dura and arachnoid",
      "Meningioma arises from arachnoid cap cells — extra-axial, dural tail on MRI",
      "Meninges are pain-sensitive — meningeal irritation causes headache and nuchal rigidity",
      "Arachnoid granulations protrude into dural venous sinuses for CSF reabsorption",
    ],
    pediatrics:
      "Neonatal meningitis inflames leptomeninges with subtle signs (bulging fontanelle); myelomeningocele exposes meninges and neural tissue through vertebral defect.",
  },
  {
    id: "dural-septae",
    name: "Dural Septae",
    etymology:
      "Latin durus = hard + septum = partition — infoldings of the dura mater that subdivide the cranial cavity",
    aliases: [
      "dural septae",
      "dural septa",
      "dural fold",
      "dural folds",
      "dural partitions",
      "falx cerebri",
      "tentorium cerebelli",
      "falx cerebelli",
      "diaphragma sellae",
      "tentorium",
      "falx",
    ],
    germLayer: "Mesoderm (dura mater)",
    origin:
      "Inward projections of the dura mater formed where dura reflects and adheres at cranial midlines and skull base — not separate membranes but continuous dural infoldings separating brain compartments.",
    derivatives: [
      "Falx cerebri — vertical sickle between cerebral hemispheres; attaches to crista galli and tentorium; grooves for superior and inferior sagittal sinuses",
      "Tentorium cerebelli — horizontal shelf separating supratentorial cerebrum from infratentorial cerebellum/brainstem; tentorial notch (incisura) transmits midbrain",
      "Falx cerebelli — small midline fold between cerebellar hemispheres below tentorium",
      "Diaphragma sellae — dural roof over sella turcica pierced by pituitary stalk",
    ],
    functionSummary:
      "Mechanically partition and anchor the brain; limit movement; define venous sinus locations; tentorium creates supratentorial vs infratentorial compartments critical in herniation syndromes.",
    commonPathologies: [
      "Uncal (transtentorial) herniation — medial temporal lobe compresses midbrain at tentorial notch",
      "Subdural hematoma — blood strips dura from arachnoid; spreads along falx and tentorium",
      "Subfalcine herniation — cingulate gyrus displaced under falx with cingulate artery compression",
      "Tentorial meningioma — arises from dural septae attachments",
    ],
    step1Pearls: [
      "Falx cerebri between hemispheres; tentorium cerebelli separates cerebrum from cerebellum",
      "Tentorial notch = site of uncal herniation → ipsilateral CN III palsy, contralateral hemiparesis, ↓ consciousness",
      "Superior sagittal sinus runs in attached margin of falx cerebri",
      "Subdural blood tracks along falx/tentorium on imaging",
      "Supratentorial vs infratentorial mass — tentorium defines compartment for herniation risk",
      "vs arachnoid trabeculae — septae are dural folds; trabeculae are delicate subarachnoid strands",
    ],
    pediatrics:
      "Elevated ICP in infants may cause splaying of cranial sutures before herniation; tentorial and subfalcine herniation still occur with mass lesions or hemorrhage.",
  },
  {
    id: "emissary-veins",
    name: "Emissary Veins",
    etymology:
      "Latin emissarius = sent out/messenger + vena = vein — valveless veins connecting extracranial venous networks to intracranial dural venous sinuses",
    aliases: [
      "emissary veins",
      "emissary vein",
      "cranial emissary veins",
      "cranial emissary vein",
      "emissary venous channels",
    ],
    germLayer: "Mesoderm",
    origin:
      "Valveless venous channels passing through skull foramina or diploë that link scalp/extracranial veins (facial, pterygoid plexus, mastoid) to dural venous sinuses — notably cavernous sinus and sigmoid/superior sagittal connections.",
    derivatives: [
      "Par mastoid emissary vein — sigmoid sinus connection",
      "Connections via foramen ovale/foramen lacerum region to cavernous sinus/pterygoid plexus",
      "Parietal emissary vein — scalp to superior sagittal sinus",
    ],
    functionSummary:
      "Drain scalp and diploic bone; permit bidirectional venous flow because they lack valves — physiologic pressure equalization but pathologic route for infection spread.",
    commonPathologies: [
      "Cavernous sinus thrombosis from facial/scalp infection (danger triangle)",
      "Spread of infection from otitis/mastoiditis to sigmoid sinus thrombosis",
      "Retrograde septic emboli via emissary veins",
    ],
    step1Pearls: [
      "Valveless emissary veins connect face/scalp veins to dural sinuses",
      "Danger triangle of face — infection can spread to cavernous sinus → CN III/IV/V1/V2/V6 palsies, proptosis, fever",
      "Classic boards link facial cellulitis/abscess → cavernous sinus thrombosis via emissary routes",
      "vs diploic veins — diploic veins drain skull marrow; emissary veins traverse full skull to sinuses",
      "Do not confuse with penile emissary veins (veno-occlusive erection mechanism)",
    ],
    pediatrics:
      "Orbital/facial infections in children can seed cavernous sinus thrombosis through emissary pathways; treat aggressively and monitor cranial nerve function.",
  },
  {
    id: "bridging-veins",
    name: "Bridging Veins",
    etymology:
      "Old English brycg = span + Latin vena = vein — cortical veins that cross the subdural space to drain into dural venous sinuses",
    aliases: [
      "bridging veins",
      "bridging vein",
      "cerebral bridging veins",
      "cerebral bridging vein",
      "bridging cortical veins",
      "bridging cortical vein",
      "cortical bridging veins",
      "cortical bridging vein",
      "superficial cerebral vein",
      "superficial cerebral veins",
      "veins of the subdural space",
      "subdural bridging veins",
      "subdural bridging vein",
    ],
    germLayer: "Mesoderm (endothelium)",
    origin:
      "Superficial cerebral cortical veins pierce the arachnoid and traverse the subdural space (between dura mater and arachnoid) before emptying into dural venous sinuses — especially the superior sagittal sinus — acting as tethered conduits vulnerable to shear during head acceleration-deceleration.",
    derivatives: [
      "Connections from cortical surface to superior sagittal sinus",
      "Tributaries to other dural sinuses (sphenoparietal, transverse) depending on location",
    ],
    functionSummary:
      "Drain cerebral cortex venous blood into dural venous sinuses; because they span the subdural space, tearing produces subdural hematoma rather than epidural bleeding.",
    commonPathologies: [
      "Acute subdural hematoma — bridging vein rupture from acceleration-deceleration trauma",
      "Chronic subdural hematoma — minor trauma in elderly with brain atrophy stretches bridging veins",
      "Abusive head trauma (shaken baby) — bilateral subdural collections from bridging vein shear",
      "Anticoagulation or coagulopathy — worsens subdural bleeding after minor trauma",
    ],
    step1Pearls: [
      "Bridging veins cross subdural space → subdural hematoma when torn",
      "Subdural hematoma — crescentic collection on CT; crosses suture lines",
      "Elderly/alcoholic with brain atrophy — increased bridging vein tension → chronic SDH",
      "vs middle meningeal artery — arterial epidural hematoma; biconvex; does not cross sutures",
      "vs emissary veins — connect scalp to sinuses through skull; infection spread route",
      "Shaken infant — bridging vein rupture + retinal hemorrhages + encephalopathy",
    ],
    pediatrics:
      "Infants have large head-to-body ratio and weak neck support — acceleration-deceleration during abusive head trauma shears bridging veins causing subdural hematoma. Fontanelle may bulge with rising ICP before sutures fuse.",
  },
  {
    id: "middle-meningeal-artery",
    name: "Middle Meningeal Artery",
    etymology:
      "Latin medius = middle + Greek meninx = membrane + Latin arteria = airway/vessel — major meningeal branch supplying dura and skull",
    aliases: [
      "middle meningeal artery",
      "middle meningeal arteries",
      "middle meningial artery",
      "middle meningial arteries",
      "meningeal artery middle",
      "middle meningeal arterial branch",
      "middle meningeal arterial branches",
      "mm artery",
      "middle meningeal trunk",
    ],
    germLayer: "Mesoderm (endothelium from pharyngeal arch arteries)",
    origin:
      "Branch of the maxillary artery (third part of external carotid system) — enters cranial cavity through the foramen spinosum of the sphenoid bone and runs between the skull and dura mater in the epidural space, grooving the inner skull table (especially pterion region).",
    derivatives: [
      "Frontal and parietal branches supplying dura mater and calvaria",
      "Accessory meningeal artery may accompany via foramen ovale region (variable anatomy)",
    ],
    functionSummary:
      "Supplies dura mater, skull periosteum, and adjacent meninges; clinically important because temporal bone fracture can lacerate it causing rapid epidural hematoma with arterial bleeding.",
    commonPathologies: [
      "Epidural hematoma — middle meningeal artery tear after temporal skull fracture",
      "Lucid interval — brief recovery after initial head injury then rapid decline from expanding hematoma",
      "Pterion fracture — thin skull at frontotemporal junction overlying artery",
      "Extradural hemorrhage with biconvex (lentiform) CT appearance",
    ],
    step1Pearls: [
      "Middle meningeal artery — branch of maxillary artery; enters foramen spinosum",
      "Epidural hematoma — arterial bleed; biconvex/lentiform on CT",
      "Does NOT cross cranial suture lines (dura adherent at sutures)",
      "Lucid interval classic before neurologic deterioration",
      "vs bridging veins — venous subdural hematoma; crescentic; crosses sutures",
      "Pterion — weakest skull point overlying middle meningeal artery",
      "Temporal bone trauma vignette — think epidural hematoma",
    ],
    pediatrics:
      "Epidural hematoma occurs in children after head trauma but abusive head trauma more often causes subdural hematoma from bridging veins. Teen athletes with temporal impact and lucid interval need emergent imaging.",
  },
  {
    id: "pia-mater",
    name: "Pia Mater",
    etymology:
      "Latin pia = tender/soft + mater = mother — delicate innermost meningeal layer closely investing the brain and spinal cord",
    aliases: [
      "pia mater",
      "pia maters",
      "pia",
      "pial",
      "pial membrane",
      "pial membranes",
      "inner meningeal layer",
      "leptomeninges pia",
      "pia mater layer",
    ],
    germLayer: "Neural crest (leptomeninges)",
    origin:
      "Innermost of the three meninges; derived from neural crest mesenchyme surrounding the developing neural tube — intimately adherent to the brain and spinal cord surface, extending into sulci and following vessels into parenchyma as perivascular (Virchow-Robin) spaces.",
    derivatives: [
      "Pial blood vessels entering CNS",
      "Perivascular (Virchow-Robin) spaces",
      "Continuity with spinal pia and filum terminale",
    ],
    functionSummary:
      "Delimits the subarachnoid space internally; closely invests CNS surface and vessels; with arachnoid forms leptomeninges; contributes to blood-brain barrier interface at vessel entry points.",
    commonPathologies: [
      "Meningitis — inflammation extends to leptomeninges (arachnoid and pia)",
      "Subarachnoid hemorrhage — blood in space between arachnoid and pia",
      "Pial vascular injury in traumatic brain injury",
      "Spread of infection along perivascular spaces",
    ],
    step1Pearls: [
      "Pia = innermost meningeal layer, adherent to brain/spinal cord",
      "Subarachnoid space lies between arachnoid (outer boundary) and pia (inner boundary)",
      "Leptomeninges = arachnoid + pia (vs dura alone as outer tough layer)",
      "LP needle enters subarachnoid space — CSF sampled below arachnoid, external to pia",
      "Epidural hematoma — above dura; subdural — between dura and arachnoid; SAH — in subarachnoid space",
      "Pia follows vessels into brain — perivascular spaces for CSF/interstitial fluid exchange",
    ],
    pediatrics:
      "Neonatal meningitis inflames leptomeninges including pia; myelomeningocele exposes spinal cord and pia through vertebral defect without intact meningeal coverage.",
  },
  {
    id: "arachnoid-villi",
    name: "Arachnoid Villi",
    etymology:
      "Greek arachne = spider + -oid = like + Latin villus = shaggy hair/tuft",
    aliases: [
      "arachnoid villi",
      "arachnoid villus",
      "arachnoid granulations",
      "arachnoid granulation",
      "arachnoid granulations csf",
      "csf granulations",
      "pacchionian granulations",
      "pacchionian bodies",
      "csf reabsorption villi",
    ],
    germLayer: "Neural crest (arachnoid mater derivative)",
    origin:
      "Outpouchings of the arachnoid mater that protrude through the dura mater into dural venous sinuses — histologically contain arachnoid cap cells over a core of subarachnoid space and collagen.",
    derivatives: [
      "Arachnoid cap cells — meningioma cell of origin",
      "CSF drainage pathway into superior sagittal sinus",
    ],
    functionSummary:
      "Primary site of CSF reabsorption from subarachnoid space into venous circulation — one-way valve-like flow driven by venous pressure gradient.",
    commonPathologies: [
      "Communicating hydrocephalus — impaired CSF absorption at arachnoid villi (post-meningitis, SAH)",
      "Meningioma — neoplasm from arachnoid cap cells",
      "Increased ICP — compressed or dysfunctional villi",
      "Normal pressure hydrocephalus — debated villi dysfunction component",
    ],
    step1Pearls: [
      "Arachnoid villi = CSF reabsorption into dural venous sinuses",
      "Post-meningitis or SAH scarring can impair villi → communicating hydrocephalus",
      "Meningioma arises from arachnoid cap cells at villi",
      "Villi protrude into superior sagittal sinus — visible on autopsy/imaging in severe ICP",
      "vs choroid plexus — choroid plexus produces CSF; villi reabsorb CSF",
    ],
    pediatrics:
      "Post-hemorrhagic or post-meningitic hydrocephalus in infants may reflect impaired CSF absorption at arachnoid villi; requires neurosurgical evaluation.",
  },
  {
    id: "arachnoid-trabeculae",
    name: "Arachnoid Trabeculae",
    etymology:
      "Greek arachne = spider + -oid = like + Latin trabecula = little beam — delicate collagenous strands spanning the subarachnoid space",
    aliases: [
      "arachnoid trabeculae",
      "arachnoid trabecula",
      "arachnoid trabecular",
      "subarachnoid trabeculae",
      "subarachnoid trabecula",
      "arachnoid trabecular membrane",
      "leptomeningeal trabeculae",
    ],
    germLayer: "Neural crest (arachnoid mater derivative)",
    origin:
      "Fine collagen and arachnoid cell processes extending from the arachnoid mater toward the pia mater — form a web-like mesh (trabecular membrane) across the subarachnoid space, creating intertrabecular channels for CSF and vessels.",
    derivatives: [
      "Subarachnoid cisterns — expansions of subarachnoid space where trabeculae are sparse (basilar, interpeduncular, chiasmatic)",
      "Perivascular spaces (Virchow-Robin) at vessel entry — continuous with subarachnoid space",
    ],
    functionSummary:
      "Suspend arachnoid relative to pia; partition subarachnoid space into CSF channels; anchor cerebral arteries and veins traversing to brain surface; maintain architecture of cisterns around brainstem and base of skull.",
    commonPathologies: [
      "Subarachnoid hemorrhage — blood disperses throughout subarachnoid space between trabeculae",
      "Meningitis — inflammatory exudate in subarachnoid compartment",
      "Arachnoiditis — scarring of trabecular mesh may impair CSF flow",
    ],
    step1Pearls: [
      "Subarachnoid space lies between arachnoid (superior) and pia (inferior); trabeculae cross this space",
      "CSF and major cerebral arteries course through subarachnoid space around trabeculae",
      "Cisterns are widened subarachnoid spaces with fewer trabeculae — basilar cistern, lumbar puncture targets lower cisternal CSF",
      "vs arachnoid granulations — trabeculae are intracranial mesh strands; granulations are dural sinus outpouchings for CSF reabsorption",
      "vs dural septae — trabeculae are delicate leptomeningeal strands; septae are tough dural folds",
    ],
    pediatrics:
      "Neonatal subarachnoid hemorrhage (prematurity) fills subarachnoid trabecular spaces; post-hemorrhagic hydrocephalus may follow impaired CSF circulation/reabsorption.",
  },
  {
    id: "subarachnoid-space",
    name: "Subarachnoid Space",
    etymology:
      "Latin sub = under + Greek arachne = spider + -oid = like + Latin spatium = space — CSF-filled compartment between the arachnoid mater and pia mater surrounding the brain and spinal cord",
    aliases: [
      "subarachnoid space",
      "subarachnoid spaces",
      "subarachnoid cistern",
      "subarachnoid cisterns",
      "subarachnoid compartment",
      "leptomeningeal space",
      "leptomeningeal spaces",
      "csf space",
      "csf spaces",
      "intrathecal space",
      "intrathecal spaces",
    ],
    germLayer: "Neural crest (leptomeninges — arachnoid and pia)",
    origin:
      "Potential space between arachnoid mater (outer boundary) and pia mater (inner boundary adherent to CNS) — continuous with ventricular system via foramina of Luschka and Magendie; contains CSF, major cerebral arteries, arachnoid trabeculae, and spinal nerve roots in the thecal sac.",
    derivatives: [
      "Basal cisterns — expansions at skull base (interpeduncular, chiasmatic, ambient, cerebellopontine)",
      "Lumbar cistern — cauda equina in lower spinal subarachnoid space (LP target)",
      "Perivascular (Virchow-Robin) spaces — continuous with subarachnoid space at vessel entry",
      "Arachnoid trabeculae — collagen strands crossing the space",
    ],
    functionSummary:
      "Circulates CSF around brain and spinal cord; cushions CNS; houses major cerebral arteries (circle of Willis branches course in space); site of CSF sampling by lumbar puncture; blood-brain barrier interface at pial vessel entry.",
    commonPathologies: [
      "Subarachnoid hemorrhage — arterial blood in basal cisterns and sulci",
      "Bacterial meningitis — purulent exudate in subarachnoid compartment",
      "Communicating hydrocephalus — impaired CSF reabsorption at arachnoid villi after SAH/meningitis",
      "Cerebral vasospasm — blood breakdown products irritate arteries in subarachnoid space",
      "Benign enlargement of subarachnoid spaces in infants — widened space without hydrocephalus",
    ],
    step1Pearls: [
      "Subarachnoid space = between arachnoid and pia — contains CSF and cerebral arteries",
      "LP needle enters subarachnoid space (L3–L4/L4–L5) — below termination of spinal cord",
      "SAH — blood in subarachnoid space; thunderclap headache; xanthochromia on LP",
      "Epidural space is outside dura; subdural between dura and arachnoid; subarachnoid inside dura",
      "Major cerebral arteries (MCA, ACA, basilar) run in subarachnoid space — aneurysm rupture → SAH",
      "Cisterns are expansions of subarachnoid space at skull base",
      "vs epidural hematoma — blood above dura, not in subarachnoid space",
    ],
    pediatrics:
      "Benign enlargement of subarachnoid spaces in infants causes macrocephaly with normal development — distinguish from hydrocephalus. Neonatal SAH from prematurity or birth trauma may lead to post-hemorrhagic hydrocephalus. LP in children uses same anatomic landmarks with weight-based sedation considerations.",
  },
  {
    id: "choroid-plexus",
    name: "Choroid Plexus",
    etymology:
      "Greek chorion = membrane + eidos = form + Latin plexus = braid/network — vascular frond of ependyma producing CSF",
    aliases: [
      "choroid plexus",
      "choroid plexuses",
      "choroid plexi",
      "choroid plexus epithelium",
      "csf producing plexus",
    ],
    germLayer: "Ectoderm (ependyma from neural tube)",
    origin:
      "Invagination of ependymal lining with underlying fenestrated capillaries and connective tissue stroma into ventricular cavities — present in lateral ventricles (body/trigone/temporal horn), roof of third ventricle, and portions of fourth ventricle (roof and lateral recesses).",
    derivatives: [
      "Ependymal secretory epithelium — tight junctions form blood-CSF barrier",
      "Fenestrated choroidal capillaries — plasma ultrafiltrate substrate for CSF",
    ],
    functionSummary:
      "Primary CSF production (~500 mL/day; total CSF volume ~150 mL, turned over several times daily); secretes and modifies CSF composition via active transport; distinct from blood-brain barrier at capillary endothelium elsewhere.",
    commonPathologies: [
      "Choroid plexus papilloma — oversecretes CSF → hydrocephalus (pediatric)",
      "Choroid plexus carcinoma — malignant pediatric tumor",
      "Choroid plexus cyst — common fetal ultrasound finding, usually resolves",
      "Inflammation/infection — ventriculitis affects choroid plexus epithelium",
    ],
    step1Pearls: [
      "Choroid plexus produces most CSF — active secretion, not simple ultrafiltration alone",
      "Blood-CSF barrier = choroid plexus ependymal tight junctions (vs BBB at cerebral capillary endothelium)",
      "Located in lateral ventricles, third ventricle roof, fourth ventricle",
      "Choroid plexus papilloma — pediatric hydrocephalus from CSF overproduction",
      "vs arachnoid granulations — plexus produces CSF; granulations reabsorb CSF into venous sinuses",
      "Ependymal cells line ventricles; choroid plexus is specialized ependyma + capillaries",
    ],
    pediatrics:
      "Choroid plexus papilloma is a classic cause of pediatric communicating/non-obstructive hydrocephalus from CSF overproduction; fetal choroid plexus cysts are common incidental findings on ultrasound.",
  },
  {
    id: "forebrain",
    name: "Forebrain",
    etymology: "Old English fore = front + brain = enkephalos",
    aliases: ["forebrain", "fore brain", "prosencephalon", "anterior brain"],
    origin:
      "Most rostral portion of the neural tube; the prosencephalon differentiates into telencephalon (cerebral hemispheres, basal ganglia, lateral ventricles) and diencephalon (thalamus, hypothalamus, third ventricle).",
    germLayer: "Ectoderm",
    derivatives: [
      "Telencephalon — cerebral cortex, basal ganglia, lateral ventricles",
      "Diencephalon — thalamus, hypothalamus, epithalamus, third ventricle",
    ],
    functionSummary:
      "Processes sensory integration, cognition, emotion, voluntary motor planning, and endocrine/autonomic regulation via cerebral cortex and diencephalon.",
    commonPathologies: [
      "Holoprosencephaly",
      "Anencephaly",
      "Stroke (MCA territory)",
      "Alzheimer disease",
      "Hydrocephalus affecting lateral ventricles",
    ],
    step1Pearls: [
      "Prosencephalon = forebrain embryologic term",
      "Failed prosencephalon cleavage → holoprosencephaly",
      "Anencephaly = absent forebrain with open cranial NTD",
      "Lateral ventricles lie within telencephalon",
    ],
    pediatrics:
      "Forebrain malformations (holoprosencephaly, anencephaly) present prenatally or at birth; SHH pathway mutations and trisomy 13 are high-yield associations.",
  },
  {
    id: "prosencephalon",
    name: "Prosencephalon",
    etymology: "Greek pros = forward + enkephalos = brain",
    aliases: [
      "prosencephalon",
      "prosencephalons",
      "forebrain vesicle",
      "anterior neural tube vesicle",
    ],
    origin:
      "Rostral primary brain vesicle formed from the cranial neural tube at ~4 weeks gestation; divides into telencephalon and diencephalon to form the forebrain.",
    germLayer: "Ectoderm",
    derivatives: ["Telencephalon", "Diencephalon"],
    functionSummary:
      "Embryologic precursor to all forebrain structures; its cleavage and patterning (SHH, BMP, FGF signaling) determine cerebral hemispheric separation.",
    commonPathologies: [
      "Holoprosencephaly — failed cleavage",
      "Anencephaly — failed anterior neuropore closure",
    ],
    step1Pearls: [
      "Prosencephalon → telencephalon + diencephalon",
      "Holoprosencephaly = failed prosencephalon cleavage",
      "SHH (sonic hedgehog) morphogen critical for ventral forebrain patterning",
      "Synonym for forebrain at the primary vesicle stage",
    ],
    pediatrics:
      "Prosencephalon maldevelopment causes holoprosencephaly with midline facial defects; trisomy 13 and fetal alcohol are common associations in pediatrics.",
  },
  {
    id: "striatum",
    name: "Striatum",
    etymology:
      "Latin striatum = striped — alternating myelinated fiber bundles and gray matter create a striped appearance on gross coronal section of basal ganglia",
    aliases: [
      "striatum",
      "striatums",
      "striata",
      "corpus striatum",
      "corpora striata",
      "dorsal striatum",
      "dorsal striatums",
      "ventral striatum",
      "ventral striatums",
      "neostriatum",
      "neostriatums",
      "striate nucleus",
      "striate nuclei",
    ],
    origin:
      "Telencephalic basal ganglia derivative; dorsal striatum comprises caudate nucleus and putamen (see dedicated entries); ventral striatum includes nucleus accumbens and olfactory tubercle — principal input stage of basal ganglia motor and reward circuits.",
    germLayer: "Ectoderm",
    derivatives: [
      "Medium spiny neurons (GABAergic projection neurons) — ~95% of striatal neurons",
      "Caudate nucleus — dorsal striatum component",
      "Putamen — dorsal striatum component",
      "Nucleus accumbens — ventral striatum (reward/motivation)",
      "Cholinergic interneurons — modulate striatal output",
    ],
    functionSummary:
      "Principal input nucleus of the basal ganglia — receives glutamatergic cortical input and modulates thalamocortical motor output via direct (D1, facilitatory) and indirect (D2, inhibitory) pathways under dopaminergic tone from substantia nigra (dorsal) and VTA (ventral).",
    commonPathologies: [
      "Parkinson disease — ↓ nigrostriatal dopamine → hypokinesia, rigidity",
      "Huntington disease — striatal medium spiny neuron loss → chorea",
      "Drug-induced parkinsonism — D2 receptor blockade in striatum",
      "Wilson disease and metabolic disorders — basal ganglia signal change",
      "Hyperglycemic hemichorea-hemiballismus — striatal dysfunction",
    ],
    step1Pearls: [
      "Dorsal striatum = caudate + putamen (motor); ventral striatum = nucleus accumbens (reward)",
      "Direct pathway (D1) → ↑ movement; indirect pathway (D2) → ↓ movement",
      "Parkinson = ↓ dopamine in striatum; Huntington loses indirect pathway MSNs early",
      "Antipsychotic D2 blockade in striatum → extrapyramidal symptoms",
      "vs lentiform nucleus — putamen + globus pallidus; striatum is caudate + putamen only",
      "Nigrostriatal pathway — substantia nigra → dorsal striatum; mesolimbic — VTA → ventral striatum",
    ],
    pediatrics:
      "Juvenile Huntington disease and inherited dystonias reflect striatal circuit dysfunction; Wilson disease may present in adolescence with psychiatric symptoms and basal ganglia MRI changes.",
  },
  {
    id: "caudate",
    name: "Caudate Nucleus",
    etymology:
      "Latin cauda = tail + -ate = resembling (tail-like curve around lateral ventricle)",
    aliases: [
      "caudate",
      "caudate nucleus",
      "caudate nuclei",
      "caudates",
      "head of caudate",
      "caudate head",
      "dorsal striatum caudate",
    ],
    origin:
      "Develops from the telencephalic ventricular zone as part of the basal ganglia; forms the C-shaped gray matter lateral to the lateral ventricle with head, body, and tail components.",
    germLayer: "Ectoderm",
    derivatives: [
      "Head — adjacent to lateral ventricle frontal horn",
      "Body — along lateral ventricle body",
      "Tail — curves into temporal lobe toward amygdala",
    ],
    functionSummary:
      "Principal input nucleus of the basal ganglia dorsal striatum (with putamen; see striatum entry); receives glutamatergic input from cortex and modulates movement, cognition, and motivation via direct/indirect pathway medium spiny neurons.",
    commonPathologies: [
      "Huntington disease — caudate atrophy first on imaging",
      "Wilson disease — basal ganglia degeneration",
      "Vascular lacunar stroke in caudate — contralateral motor deficits",
      "Hyperglycemic hemichorea-hemiballismus — putamen/caudate involvement",
    ],
    step1Pearls: [
      "Caudate + putamen = dorsal striatum (see striatum entry); nucleus accumbens = ventral striatum (reward)",
      "Huntington disease — caudate degeneration → enlarged lateral ventricles on CT/MRI",
      "Direct pathway (D1) promotes movement; indirect (D2) inhibits — Huntington loses indirect MSNs",
      "Caudate wraps around lateral ventricle — classic neuroanatomy landmark",
    ],
    pediatrics:
      "Juvenile Huntington disease shows caudate atrophy with rigidity and seizures; metabolic disorders (Wilson, PKAN) can affect caudate in childhood.",
  },
  {
    id: "mammillary-bodies",
    name: "Mammillary Bodies",
    etymology:
      "Latin mamma = breast/nipple + -illary = small + bodies = paired structures (nipple-like gray matter protrusions)",
    aliases: [
      "mammillary bodies",
      "mammillary body",
      "mamillary bodies",
      "mamillary body",
      "corpus mammillare",
      "mammillary nuclei",
      "mamillary nuclei",
    ],
    origin:
      "Develop from posterior hypothalamic neuroepithelium as part of the diencephalon; paired ovoid gray-matter nuclei on the ventral surface of the hypothalamus at the floor of the third ventricle, connected to the fornix and anterior thalamic nuclei.",
    germLayer: "Ectoderm",
    derivatives: [
      "Medial mammillary nucleus — Papez circuit memory pathway",
      "Lateral mammillary nucleus — vestibular and spatial orientation inputs",
      "Mammillothalamic tract — projects to anterior thalamic nuclei",
      "Fornix input — hippocampal output reaches mammillary bodies",
    ],
    functionSummary:
      "Key relay in the Papez circuit linking hippocampus → fornix → mammillary bodies → mammillothalamic tract → anterior thalamus → cingulate cortex — critical for episodic memory consolidation and spatial navigation.",
    commonPathologies: [
      "Wernicke encephalopathy — petechial hemorrhages and demyelination",
      "Korsakoff syndrome — chronic atrophy with anterograde amnesia and confabulation",
      "Thiamine deficiency in chronic alcoholism",
      "Colloid cyst or third ventricle mass compressing hypothalamus",
    ],
    step1Pearls: [
      "Mammillary bodies = classic site injured in Wernicke-Korsakoff from thiamine deficiency",
      "Papez circuit: hippocampus → fornix → mammillary bodies → anterior thalamus → cingulate",
      "MRI mammillary body enhancement or atrophy supports Wernicke/Korsakoff diagnosis",
      "Give thiamine BEFORE glucose in malnourished patients — glucose without thiamine worsens injury",
      "Confabulation + mammillary body injury → Korsakoff amnestic disorder",
      "Lateral mammillary nucleus receives vestibular input — spatial memory",
    ],
    pediatrics:
      "Wernicke encephalopathy occurs in adolescents with eating disorders, malignancy, or hyperemesis gravidarum — mammillary body injury is not limited to adult alcoholism; thiamine repletion is urgent.",
  },
  {
    id: "nucleus-basalis",
    name: "Nucleus Basalis of Meynert",
    etymology:
      "Latin nucleus = kernel/collection of cells + basalis = basal + named for German neurologist Theodor Meynert — cholinergic cell group in the basal forebrain",
    aliases: [
      "nucleus basalis",
      "nucleus basalis of meynert",
      "nucleus basalis meynert",
      "basalis of meynert",
      "meynert nucleus",
      "meynert nuclei",
      "nbm",
      "basal forebrain cholinergic nucleus",
      "basal nucleus of meynert",
      "substantia innominata cholinergic neurons",
      "nucleud basalis",
    ],
    germLayer: "Ectoderm (telencephalic basal forebrain)",
    origin:
      "Develops from ventral telencephalon/basal forebrain neuroepithelium; clusters of large cholinergic (ChAT-positive) neurons in the substantia innominata region anterior and lateral to the hypothalamus, beneath the anterior commissure and basal surface of the cerebral hemispheres.",
    derivatives: [
      "Basal forebrain cholinergic projection neurons to cerebral cortex",
      "Projections to hippocampus, amygdala, and other limbic structures",
      "Major cortical acetylcholine source via diffuse modulatory pathways",
    ],
    functionSummary:
      "Primary source of cortical acetylcholine — wide ascending cholinergic projections modulate attention, arousal, learning, and memory; enhances cortical signal-to-noise and synaptic plasticity via muscarinic and nicotinic receptors.",
    commonPathologies: [
      "Alzheimer disease — early and marked loss of nucleus basalis cholinergic neurons",
      "Lewy body dementia — cholinergic deficit with cortical Lewy bodies",
      "Vascular lesions of basal forebrain — impaired attention and memory",
      "Down syndrome — early Alzheimer-type pathology including cholinergic neuron loss",
    ],
    step1Pearls: [
      "Nucleus basalis of Meynert = main cortical ACh source — ChAT-positive neurons in basal forebrain",
      "Degeneration in Alzheimer disease → ↓ cortical acetylcholine → cognitive decline",
      "Cholinesterase inhibitors (donepezil, rivastigmine, galantamine) compensate by ↑ synaptic ACh",
      "vs nucleus accumbens — ventral striatum reward/motor; not primary cholinergic cortical source",
      "vs dorsal motor nucleus of vagus — brainstem parasympathetic; not cortical projection nucleus",
      "Basal forebrain cholinergic system is a boards link between anatomy and Alzheimer pharmacology",
    ],
    pediatrics:
      "Classic Alzheimer cortical cholinergic loss is adult disease; adolescents with Down syndrome develop early Alzheimer pathology with basal forebrain cholinergic neuron vulnerability.",
  },
  {
    id: "locus-ceruleus",
    name: "Locus Ceruleus",
    etymology:
      "Latin locus = place + caeruleus/ceruleus = blue — brainstem nucleus with blue appearance from neuromelanin in norepinephrine neurons",
    aliases: [
      "locus ceruleus",
      "locus ceruleus nucleus",
      "locus coeruleus",
      "locus coeruleus nucleus",
      "lc",
      "locus ceruleus lc",
      "blue spot",
      "blue nucleus",
      "cerulean nucleus",
      "noradrenergic nucleus",
    ],
    germLayer: "Ectoderm (rhombencephalon — dorsal pontine tegmentum)",
    origin:
      "Develops in the dorsal pons (floor of the fourth ventricle) as the brain's principal noradrenergic nucleus — small paired nucleus with melanin-containing norepinephrine (NE) neurons that project diffusely throughout the neuraxis.",
    derivatives: [
      "Ascending noradrenergic projections to cerebral cortex, hippocampus, amygdala, thalamus, and cerebellum",
      "Descending projections to brainstem, cerebellum, and spinal cord dorsal horn",
      "Norepinephrine synthesis via tyrosine hydroxylase and dopamine β-hydroxylase in LC neurons",
    ],
    functionSummary:
      "Major CNS source of norepinephrine — modulates arousal, alertness, attention, stress responses, sleep-wake transitions, and pain processing; activated in fight-or-flight and REM sleep regulation; widely innervates cortex to tune signal-to-noise ratio.",
    commonPathologies: [
      "Opioid withdrawal — disinhibited hyperactivity of locus ceruleus → autonomic hyperactivity (tachycardia, hypertension, diarrhea, mydriasis)",
      "Alzheimer and Parkinson disease — LC neuron loss contributes to cognitive and autonomic dysfunction",
      "Chronic stress and PTSD — altered LC-NE tone",
      "REM sleep behavior disorder — brainstem REM circuitry includes LC modulation",
    ],
    step1Pearls: [
      "Locus ceruleus (coeruleus) = main brain norepinephrine source — dorsal pons, blue on gross section",
      "Opioid tolerance/withdrawal — opioids inhibit LC; withdrawal → LC hyperactivity → adrenergic withdrawal symptoms",
      "Clonidine treats opioid withdrawal partly by ↓ LC noradrenergic outflow (α₂ agonist)",
      "NE from LC modulates arousal, attention, and stress — diffuse cortical projections",
      "vs ventral tegmental area — VTA is mesolimbic/mesocortical dopamine (reward), not NE",
      "vs substantia nigra — dopamine for motor striatum, not LC norepinephrine",
      "Tyrosine hydroxylase in LC neurons — rate-limiting step in NE synthesis",
    ],
    pediatrics:
      "Neonatal opioid withdrawal (NAS) involves autonomic hyperactivity from catecholamine surges including LC-NE pathways; clonidine is used adjunctively in some protocols. LC anatomy is the same across ages.",
  },
  {
    id: "raphe-nuclei",
    name: "Raphe Nuclei",
    etymology:
      "Greek rhaphe = seam/suture — midline cluster of brainstem nuclei along the seam between left and right tegmentum",
    aliases: [
      "raphe nuclei",
      "raphe nucleus",
      "raphe nuclear complex",
      "dorsal raphe nucleus",
      "dorsal raphe nuclei",
      "drn",
      "median raphe nucleus",
      "serotonergic raphe nuclei",
      "raphe serotonergic system",
      "brainstem raphe nuclei",
    ],
    germLayer: "Ectoderm (rhombencephalon — midline pontine and medullary tegmentum)",
    origin:
      "Develop as paired midline and paramedian nuclei along the brainstem raphe from rhombencephalon neuroepithelium; contain serotonergic (5-HT) neurons with tryptophan hydroxylase 2 (TPH2) that project widely to forebrain and spinal cord.",
    derivatives: [
      "Dorsal raphe nucleus — major ascending serotonergic projections to cortex, hippocampus, hypothalamus, and limbic structures",
      "Median and other raphe subnuclei — additional 5-HT projections to brainstem and spinal cord",
      "Rostral raphe groups — mood, sleep, and appetite modulation",
      "Caudal raphe groups — pain and motor modulation in spinal cord",
    ],
    functionSummary:
      "Principal CNS source of serotonin — diffuse modulatory projections regulate mood, anxiety, sleep-wake cycles, appetite, thermoregulation, and nociception; rostral groups target forebrain; caudal groups influence spinal pain pathways.",
    commonPathologies: [
      "Depression and anxiety disorders — altered serotonergic tone (SSRIs ↑ synaptic 5-HT downstream of raphe projections)",
      "Serotonin syndrome — excess serotonergic activity (SSRI + MAOI, MDMA, linezolid)",
      "Migraine prophylaxis — serotonergic modulation (boards context for 5-HT pathways)",
      "Obstructive sleep apnea and depression overlap — serotonergic respiratory/mood circuits",
    ],
    step1Pearls: [
      "Raphe nuclei = main brain serotonin source — midline brainstem (pons/medulla)",
      "Synthesis: tryptophan → 5-HTP (tryptophan hydroxylase/TPH2) → serotonin (AADC) in raphe neurons",
      "SSRIs block serotonin reuptake (SERT) at raphe terminal fields — ↑ synaptic 5-HT",
      "MDMA and amphetamines ↑ serotonin release from raphe terminals — serotonin syndrome risk with SSRIs",
      "vs enterochromaffin cells — peripheral/GI serotonin (TPH1), not CNS raphe",
      "vs locus ceruleus — LC is noradrenergic; raphe is serotonergic",
      "Platelets store serotonin taken from plasma — do not synthesize it in raphe",
    ],
    pediatrics:
      "Pediatric depression and anxiety may be treated with SSRIs targeting serotonergic raphe projections; serotonin syndrome risk with drug interactions is the same mechanism as in adults. Neonatal abstinence and some neurodevelopmental disorders involve altered monoamine tone but raphe anatomy is unchanged.",
  },
  {
    id: "putamen",
    name: "Putamen",
    etymology: "Latin putamen = shell/husk (outer shell of lentiform nucleus)",
    aliases: [
      "putamen",
      "putamens",
      "lentiform nucleus putamen",
      "dorsal striatum putamen",
    ],
    origin:
      "Telencephalic basal ganglia derivative forming the outer part of the lentiform nucleus (with internal globus pallidus); separated from caudate by the internal capsule on coronal sections.",
    germLayer: "Ectoderm",
    derivatives: [
      "Dorsal striatum (with caudate nucleus)",
      "Medium spiny neuron-rich motor circuit input zone",
    ],
    functionSummary:
      "Motor component of dorsal striatum (see striatum entry) receiving cortical glutamatergic input; integrates with globus pallidus and substantia nigra for initiation and suppression of voluntary movement.",
    commonPathologies: [
      "Parkinson disease — dopamine depletion in putamen/caudate striatum",
      "Huntington disease — striatal neuron loss including putamen",
      "Hypertensive putaminal hemorrhage — classic lacunar/bleeding site with contralateral hemiparesis",
      "Carbon monoxide poisoning — bilateral putamen necrosis",
    ],
    step1Pearls: [
      "Putamen + globus pallidus = lentiform nucleus; caudate is separate but functionally striatum together (see striatum entry)",
      "Internal capsule separates caudate (medial) from lentiform nucleus (lateral) on axial MRI",
      "Putaminal hemorrhage — sudden hemiparesis, hypertension risk",
      "MPTP toxicity and Parkinson disease affect nigrostriatal input to putamen",
      "vs caudate — Huntington caudate atrophy is earlier/more prominent on imaging",
    ],
    pediatrics:
      "Inherited dystonias and juvenile parkinsonism reflect striatal dysfunction; Wilson disease may cause putaminal signal change in adolescents.",
  },
  {
    id: "midbrain",
    name: "Midbrain",
    etymology: "Old English mid + brain; Greek mesencephalon = middle brain",
    aliases: ["midbrain", "mid brain", "mesencephalon", "mesencephalons"],
    origin:
      "Middle primary brain vesicle; remains largely undivided and forms the tectum (superior/inferior colliculi), tegmentum (substantia nigra, red nucleus, cranial nerve III/IV nuclei), and cerebral aqueduct.",
    germLayer: "Ectoderm",
    derivatives: [
      "Tectum — visual/auditory reflexes (superior/inferior colliculi)",
      "Tegmentum — substantia nigra, red nucleus, reticular formation",
      "Cerebral aqueduct (connects 3rd to 4th ventricle)",
    ],
    functionSummary:
      "Relays visual and auditory reflexes, modulates motor control (substantia nigra → basal ganglia circuit), and houses CN III/IV nuclei.",
    commonPathologies: [
      "Parkinson disease (substantia nigra degeneration)",
      "Aqueductal stenosis → obstructive hydrocephalus",
      "Midbrain stroke (Weber/Raymond/Benedikt syndromes)",
      "Parinaud syndrome (pineal compression of tectum)",
    ],
    step1Pearls: [
      "Mesencephalon = midbrain",
      "Substantia nigra in midbrain — dopaminergic neurons lost in Parkinson",
      "Parinaud syndrome — dorsal midbrain, vertical gaze palsy, pineal mass",
      "Cerebral aqueduct obstruction → non-communicating hydrocephalus",
    ],
    pediatrics:
      "Congenital aqueductal stenosis causes pediatric hydrocephalus; pineal region tumors may compress dorsal midbrain causing Parinaud syndrome in children/adolescents.",
  },
  {
    id: "inferior-colliculus",
    name: "Inferior Colliculus",
    etymology:
      "Latin inferior = lower + Latin colliculus = small hill — paired eminence on the dorsal midbrain tectum below the superior colliculus",
    aliases: [
      "inferior colliculus",
      "inferior colliculi",
      "ic",
      "inferior colliculus nucleus",
      "inferior colliculus nuclei",
      "caudal colliculus",
      "auditory colliculus",
      "midbrain inferior colliculus",
    ],
    germLayer: "Ectoderm (neural tube — mesencephalon)",
    origin:
      "Develops from the alar plate of the midbrain tectum; paired nucleus forming the caudal half of the quadrigeminal plate (corpora quadrigemina), receiving ascending auditory input via the lateral lemniscus.",
    derivatives: [
      "Central nucleus of inferior colliculus (main auditory integration)",
      "External and dorsal cortex subdivisions",
      "Commissure connecting bilateral inferior colliculi",
    ],
    functionSummary:
      "Principal midbrain auditory integration center — receives input from the lateral lemniscus (brainstem auditory pathway) and projects to the medial geniculate body of the thalamus; also involved in startle reflex and orienting head toward sound.",
    commonPathologies: [
      "Dorsal midbrain lesions affecting tectum (less common isolated IC stroke)",
      "CN IV nucleus nearby at level of inferior colliculus — trochlear nerve palsy with tectal lesions",
      "Parinaud syndrome involves superior colliculus/pretectum more than inferior colliculus",
    ],
    step1Pearls: [
      "Inferior colliculus = midbrain auditory center on dorsal tectum",
      "Auditory pathway: cochlear nuclei → superior olivary → lateral lemniscus → inferior colliculus → MGN → auditory cortex",
      "Superior colliculus = visual reflexes; inferior colliculus = auditory integration",
      "Trochlear nerve (CN IV) decussates at level of inferior colliculus",
      "vs medial geniculate body — thalamic relay after inferior colliculus, not midbrain integration site",
      "vs cochlear nucleus — first CNS auditory synapse in brainstem, upstream of IC",
    ],
    pediatrics:
      "Congenital hearing loss workup traces the auditory pathway from cochlea through brainstem to cortex; inferior colliculus is an obligatory midbrain relay in the lemniscal auditory system.",
  },
  {
    id: "periaqueductal-gray",
    name: "Periaqueductal Gray",
    etymology:
      "Latin peri = around + aqueductus = water channel + gray = gray matter — midbrain gray matter surrounding the cerebral aqueduct",
    aliases: [
      "periaqueductal gray",
      "periaqueductal grey",
      "pag",
      "central gray",
      "central grey",
      "central gray matter",
      "central gray matter of midbrain",
      "periaqueductal gray matter",
      "periaqueductal grey matter",
      "midbrain periaqueductal gray",
      "aqueductal gray",
    ],
    germLayer: "Ectoderm (neural tube — mesencephalon)",
    origin:
      "Develops from the central tegmental gray matter of the midbrain surrounding the cerebral aqueduct (connects third to fourth ventricle); integrates descending pain-modulation, autonomic, and defensive behavioral circuits.",
    derivatives: [
      "Descending analgesia pathways to dorsal horn (opioid-mediated)",
      "Autonomic and defensive behavior centers",
      "Vertical gaze-related connections with pretectum and riMLF nearby",
    ],
    functionSummary:
      "Midbrain integrative center for pain modulation, autonomic responses, and defensive behaviors — major site of opioid analgesia via descending projections that inhibit spinal pain transmission; compression causes Parinaud syndrome features and setting-sun sign in hydrocephalus.",
    commonPathologies: [
      "Wernicke encephalopathy — hemorrhagic lesions in PAG and mammillary bodies",
      "Hydrocephalus — aqueductal stenosis or compression → periaqueductal dysfunction → upgaze palsy",
      "Parinaud syndrome — dorsal midbrain compression (pineal tumor)",
      "Midbrain stroke or hemorrhage affecting PAG",
    ],
    step1Pearls: [
      "PAG = gray matter around cerebral aqueduct in midbrain",
      "Major site of opioid analgesia — μ-receptor activation → descending pain inhibition to spinal cord",
      "Wernicke encephalopathy affects PAG, mammillary bodies, medial thalamus",
      "Hydrocephalus compresses PAG → Parinaud syndrome (upgaze palsy, setting-sun eyes in infants)",
      "vs periventricular gray — location around aqueduct specifically, not all periventricular tissue",
      "Adjacent to pretectum and superior/inferior colliculi — dorsal midbrain anatomy cluster",
    ],
    pediatrics:
      "Infants with hydrocephalus show setting-sun eyes (upgaze paresis) from periaqueductal compression; congenital aqueductal stenosis is a common cause of noncommunicating hydrocephalus.",
  },
  {
    id: "medial-geniculate-body",
    name: "Medial Geniculate Body",
    etymology:
      "Latin medialis = middle + Latin geniculatus = bent like a knee + corpus = body — medial knee-shaped thalamic nucleus",
    aliases: [
      "medial geniculate body",
      "medial geniculate bodies",
      "medial geniculate nucleus",
      "medial geniculate nuclei",
      "mgn",
      "medial geniculate",
      "medial geniculates",
      "geniculate body medial",
      "auditory thalamic nucleus",
    ],
    germLayer: "Ectoderm (neural tube — diencephalon)",
    origin:
      "Develops from the thalamus (diencephalon); three subdivisions (ventral, dorsal, medial) receiving input from inferior colliculus and projecting via auditory radiations to primary auditory cortex (transverse temporal/Heschl gyrus).",
    derivatives: [
      "Ventral division (tonotopic relay to primary auditory cortex)",
      "Dorsal and medial divisions (polysensory and modulatory)",
      "Auditory radiations to temporal lobe",
    ],
    functionSummary:
      "Primary thalamic relay nucleus of the auditory pathway — receives processed auditory information from the inferior colliculus and projects to primary auditory cortex; tonotopic organization preserved in ventral division.",
    commonPathologies: [
      "Thalamic stroke or hemorrhage — may affect MGN with sensory deficits",
      "Central auditory processing disorders (higher-order, not isolated MGN lesion on boards)",
    ],
    step1Pearls: [
      "MGN = thalamic auditory relay; inferior colliculus → MGN → auditory cortex",
      "Lateral geniculate = vision; medial geniculate = hearing — both geniculate bodies in thalamus",
      "Auditory radiations from MGN to transverse temporal gyrus (Brodmann 41/42)",
      "vs inferior colliculus — midbrain integration before thalamic relay",
      "vs cochlear nucleus — first brainstem synapse, not thalamic",
      "CN VIII enters brainstem at pontomedullary junction — upstream of IC/MGN",
    ],
    pediatrics:
      "Auditory brainstem response (ABR) testing in infants evaluates brainstem auditory pathway integrity upstream of medial geniculate; congenital deafness may require cochlear implant to restore input to central auditory pathway.",
  },
  {
    id: "substantia-nigra",
    name: "Substantia Nigra",
    etymology:
      "Latin substantia = substance + nigra = black — neuromelanin pigment in dopaminergic neurons darkens the midbrain on gross section",
    aliases: [
      "substantia nigra",
      "substantia nigras",
      "substantia nigra pars compacta",
      "substantia nigra pars reticulata",
      "sn",
      "snc",
      "snr",
      "black substance",
      "nigra",
      "pigmented midbrain nucleus",
      "midbrain substantia nigra",
    ],
    origin:
      "Develops from the basal plate of the midbrain tegmentum (mesencephalon). Contains two parts: pars compacta — densely packed neuromelanin-pigmented dopaminergic neurons projecting to dorsal striatum; pars reticulata — GABAergic neurons projecting to thalamus, part of basal ganglia output.",
    germLayer: "Ectoderm (neural tube)",
    derivatives: [
      "Nigrostriatal dopaminergic neurons (pars compacta → caudate and putamen)",
      "Neuromelanin pigment in catecholaminergic neurons",
    ],
    functionSummary:
      "Primary source of striatal dopamine through the nigrostriatal pathway — facilitates initiation and modulation of voluntary movement; pars reticulata participates in basal ganglia inhibitory output to thalamus.",
    commonPathologies: [
      "Parkinson disease — selective loss of pars compacta dopaminergic neurons",
      "Lewy body disease — α-synuclein inclusions in remaining neurons",
      "MPTP toxicity — selective nigral neuron destruction (parkinsonism model)",
      "Drug-induced parkinsonism — downstream striatal D₂ blockade mimics dopamine loss",
      "Iron accumulation in nigra with aging and neurodegeneration",
    ],
    step1Pearls: [
      "Substantia nigra = black midbrain band on cross-section from neuromelanin in dopamine neurons",
      "Parkinson disease — degeneration of pars compacta → ↓ striatal dopamine → bradykinesia, rigidity, resting tremor",
      "Depigmentation of substantia nigra on autopsy in Parkinson disease",
      "Nigrostriatal pathway: substantia nigra (pars compacta) → caudate/putamen — motor dopamine",
      "vs ventral tegmental area (VTA) — mesolimbic/mesocortical reward and cognition pathways",
      "Levodopa/carbidopa replaces dopamine precursor after nigral neuron loss",
      "Lewy bodies (α-synuclein) found in surviving nigral neurons in Parkinson disease",
      "Typical antipsychotics block striatal D₂ — drug-induced parkinsonism without primary nigral loss",
    ],
    pediatrics:
      "Primary Parkinson disease is adult-onset; juvenile parkinsonism is rare and may involve genetic causes. Antipsychotics and antiemetics (metoclopramide) can cause extrapyramidal parkinsonism in children via striatal D₂ blockade — nigrostriatal physiology explains the mechanism.",
  },
  {
    id: "hindbrain",
    name: "Hindbrain",
    etymology:
      "Old English hind = back + brain; Greek rhombencephalon = rhombus brain",
    aliases: [
      "hindbrain",
      "hind brain",
      "rhombencephalon",
      "rhombencephalons",
      "posterior brain",
    ],
    origin:
      "Caudal primary brain vesicle; divides into metencephalon (pons, cerebellum) and myelencephalon (medulla oblongata), forming the fourth ventricle.",
    germLayer: "Ectoderm",
    derivatives: [
      "Metencephalon — pons, cerebellum (see dedicated entry)",
      "Myelencephalon — medulla oblongata",
      "Fourth ventricle",
    ],
    functionSummary:
      "Coordinates balance and motor learning (cerebellum — see dedicated entry), regulates vital autonomic functions (medullary respiratory/cardiovascular centers), and relays signals between cerebrum and spinal cord (pons).",
    commonPathologies: [
      "Medulloblastoma (cerebellar, pediatric)",
      "Chiari malformation (cerebellar tonsil herniation)",
      "Lateral medullary (Wallenberg) syndrome — PICA infarct; see Wallenberg syndrome entry",
      "Cerebellar stroke or ataxia",
    ],
    step1Pearls: [
      "Rhombencephalon = hindbrain",
      "Metencephalon → pons + cerebellum; myelencephalon → medulla",
      "Medulla houses vital centers — respiration, cardiovascular control",
      "Medulloblastoma — most common malignant pediatric brain tumor (cerebellum)",
    ],
    pediatrics:
      "Medulloblastoma and Chiari II (with spina bifida) are classic pediatric hindbrain pathologies; Dandy-Walker malformation involves cerebellar vermis and fourth ventricle.",
  },
  {
    id: "cerebellum",
    name: "Cerebellum",
    etymology:
      "Latin cerebellum = little brain — paired infratentorial structure posterior to pons and medulla, connected via cerebellar peduncles",
    aliases: [
      "cerebellum",
      "cerebellums",
      "cerebella",
      "cerebellar",
      "cerebellar cortex",
      "cerebellar hemispheres",
      "cerebellar hemisphere",
      "cerebellar vermis",
      "vermis cerebelli",
      "flocculonodular lobe",
      "flocculonodular lobes",
      "little brain",
    ],
    origin:
      "Develops from the alar plate of the metencephalon (hindbrain vesicle) — the cerebellar plate grows, folds into folia, and forms three-layer cortex (molecular, Purkinje cell, granule cell layers) with deep nuclei (fastigial, globose, emboliform, dentate); flocculonodular lobe is phylogenetically oldest (vestibulocerebellum).",
    germLayer: "Ectoderm",
    derivatives: [
      "Cerebellar cortex — Purkinje cells, granule cells, parallel fibers",
      "Deep cerebellar nuclei — dentate (lateral hemispheres), emboliform/globose/interposed (intermediate), fastigial (vermis/flocculonodular)",
      "Cerebellar peduncles — superior (SCP to midbrain), middle (MCP from pons), inferior (ICP from medulla)",
      "Flocculonodular lobe — vestibular balance and eye movement coordination",
    ],
    functionSummary:
      "Compares intended movement (motor cortex/planning) with actual performance (proprioceptive and vestibular input) — coordinates smooth voluntary movement, maintains balance and posture, and supports motor learning; does not initiate movement but fine-tunes timing, force, and accuracy.",
    commonPathologies: [
      "Medulloblastoma — most common malignant pediatric brain tumor (cerebellar vermis/hemisphere)",
      "Cerebellar stroke (SCA/PICA territory) — ipsilateral ataxia, dysmetria, nystagmus",
      "Chronic alcoholism — anterior superior vermis degeneration → truncal ataxia",
      "Friedreich ataxia — spinocerebellar degeneration",
      "Multiple sclerosis — intention tremor, scanning speech, nystagmus",
      "Chiari malformation — cerebellar tonsil herniation through foramen magnum",
      "Dandy-Walker malformation — hypoplastic vermis, cystic fourth ventricle",
      "Paraneoplastic cerebellar degeneration — anti-Yo/anti-Hu in adults",
    ],
    step1Pearls: [
      "Cerebellar signs — ataxia, dysmetria (past-pointing), intention tremor, hypotonia, nystagmus, scanning/slurred dysarthria",
      "Lateral hemisphere lesions → appendicular (limb) ataxia; vermis → truncal/gait ataxia",
      "Flocculonodular lobe (vestibulocerebellum) — balance and vestibular eye movements",
      "Output via deep cerebellar nuclei (especially dentate) → contralateral motor cortex via thalamus",
      "vs basal ganglia — cerebellar = incoordination/hypotonia; basal ganglia = bradykinesia/rigidity or chorea",
      "Medulloblastoma — primitive neuroectodermal tumor in children; vermis midline mass",
      "Alcoholic cerebellar degeneration — superior vermis; truncal ataxia out of proportion to limb findings",
    ],
    pediatrics:
      "Medulloblastoma peaks in early childhood; Dandy-Walker and Joubert syndromes involve cerebellar vermis hypoplasia. Acute cerebellar ataxia of childhood follows viral illness — usually self-limited.",
  },
  {
    id: "lateral-pons",
    name: "Lateral Pons",
    etymology:
      "Latin lateralis = side + Latin pons = bridge — lateral tegmental and peduncular region of the pontine brainstem",
    aliases: [
      "lateral pons",
      "lateral pontine",
      "lateral pontine region",
      "lateral pontine tegmentum",
      "lateral pontine tegment",
      "pontine tegmentum lateral",
      "lateral pons brainstem",
    ],
    germLayer: "Ectoderm (neural tube — alar and basal plates of metencephalon)",
    origin:
      "Develops from the metencephalon (hindbrain vesicle) as the pons expands between midbrain and medulla; lateral pons comprises the tegmentum (CN nuclei, MLF, spinothalamic tract, medial lemniscus) and the middle cerebellar peduncle (brachium pontis) connecting pontine nuclei to the cerebellum.",
    derivatives: [
      "Middle cerebellar peduncle — largest cerebellar peduncle; pontocerebellar fibers",
      "Pontine nuclei — relay cortex → cerebellum via MCP",
      "CN V motor and principal sensory nuclei; spinal trigeminal tract",
      "CN VI nucleus (abducens) and CN VII nucleus/fascicles (facial colliculus)",
      "CN VIII cochlear and vestibular nuclei (cerebellopontine angle region)",
      "Medial longitudinal fasciculus (MLF) — internuclear ophthalmoplegia when lesioned",
      "Paramedian pontine reticular formation (PPRF) — horizontal conjugate gaze",
    ],
    functionSummary:
      "Relay station between cerebrum and cerebellum via pontine nuclei and middle cerebellar peduncle; houses CN V–VIII nuclei and tracts; integrates horizontal eye movements (PPRF, MLF, CN VI); transmits spinothalamic and lemniscal sensory pathways through the tegmentum.",
    commonPathologies: [
      "Lateral pontine syndrome — anterior inferior cerebellar artery (AICA) infarction",
      "Internuclear ophthalmoplegia — MLF lesion (MS plaque or pontine lacunar stroke)",
      "Cerebellopontine angle mass — vestibular schwannoma compresses CN VII/VIII",
      "Pontine hemorrhage or demyelination affecting lateral tegmentum",
      "Horizontal gaze palsy from PPRF or CN VI nucleus injury",
    ],
    step1Pearls: [
      "Lateral pontine syndrome (AICA) — ipsilateral ataxia, Horner, facial weakness (CN VII), deafness/vertigo (CN VIII), facial pain/temp loss (CN V); contralateral body pain/temp loss",
      "vs lateral medullary (PICA/Wallenberg) — medullary has CN IX/X/XI findings; pontine has CN VII/VIII",
      "MLF in lateral pontine tegmentum — INO: impaired adduction ipsilateral eye, abducting nystagmus contralateral",
      "Middle cerebellar peduncle = brachium pontis — largest cerebellar peduncle",
      "Facial colliculus (floor of 4th ventricle) — CN VI nucleus with CN VII fibers looping around it",
      "Cerebellopontine angle — lateral pons meets cerebellum; acoustic neuroma classic location",
      "vs medial pons — basilar artery occlusion → locked-in syndrome",
      "vs lateral medulla (PICA) — CN IX/X/XI, not VII/VIII",
      "vs central pons — osmotic demyelination (central pontine myelinolysis)",
    ],
    pediatrics:
      "Brainstem gliomas may involve the lateral pons in children; CPA tumors and congenital hearing loss workup evaluate CN VIII at the lateral pontine angle. INO in adolescents suggests MS.",
  },
  {
    id: "lateral-ventricles",
    name: "Lateral Ventricles",
    etymology: "Latin lateralis = side + ventriculus = little belly/cavity",
    aliases: [
      "lateral ventricles",
      "lateral ventricle",
      "lv",
      "lateral cerebral ventricles",
    ],
    origin:
      "Form within the telencephalon as the forebrain vesicles expand; lined by ependyma and filled with CSF produced mainly by choroid plexus in the temporal horns.",
    germLayer: "Ectoderm",
    derivatives: [
      "Frontal (anterior) horn",
      "Body",
      "Temporal (inferior) horn with choroid plexus",
      "Occipital (posterior) horn",
      "Atrium (trigone)",
    ],
    functionSummary:
      "CSF-filled cavities within cerebral hemispheres; communicate with third ventricle via interventricular foramina of Monro; enlargement indicates hydrocephalus or atrophy.",
    commonPathologies: [
      "Non-communicating hydrocephalus",
      "Normal pressure hydrocephalus",
      "Holoprosencephaly (fused monoventricle)",
      "Colloid cyst at foramen of Monro",
    ],
    step1Pearls: [
      "Choroid plexus in lateral ventricles produces CSF",
      "Foramen of Monro connects lateral to third ventricle",
      "Enlarged lateral ventricles + tight high convexity sulci → NPH (boards)",
      "Alobar holoprosencephaly — single fused lateral ventricle",
    ],
    pediatrics:
      "Neonatal hydrocephalus often presents with enlarging head circumference and bulging fontanelle; congenital aqueductal stenosis dilates lateral and third ventricles.",
  },
  {
    id: "corpus-callosum",
    name: "Corpus Callosum",
    etymology:
      "Latin corpus = body + Latin callosum = hard/tough — dense commissural white matter band connecting the cerebral hemispheres",
    aliases: [
      "corpus callosum",
      "corpus callosa",
      "callosal body",
      "cerebral commissure",
      "interhemispheric commissure",
      "cc",
    ],
    germLayer: "Ectoderm",
    origin:
      "Develops from commissural plate of the telencephalon (forebrain) — pioneer axons cross the midline around 11–20 weeks gestation to link homotopic cortical regions; subdivides into rostrum, genu (anterior), body (trunk), and splenium (posterior).",
    derivatives: [
      "Rostrum — connects orbitofrontal regions",
      "Genu — prefrontal and premotor fibers",
      "Body — parietal and motor association fibers",
      "Splenium — occipital and temporal visual/auditory association fibers",
    ],
    functionSummary:
      "Major commissural pathway integrating sensory, motor, and cognitive processing between left and right cerebral hemispheres — enables bimanual coordination, transfer of learned information, and unified perceptual experience.",
    commonPathologies: [
      "Agenesis or dysgenesis of corpus callosum — congenital forebrain malformation",
      "Multiple sclerosis — ovoid periventricular/callosal lesions",
      "Marchiafava-Bignami disease — alcohol-related callosal demyelination",
      "Diffuse axonal injury — corpus callosum shear injury in traumatic brain injury",
      "Lipoma of corpus callosum — midline congenital mass",
    ],
    step1Pearls: [
      "Largest cerebral commissure — connects homologous cortical areas across hemispheres",
      "Rostrum → genu → body → splenium (anterior to posterior)",
      "Agenesis → parallel lateral ventricles (colpocephaly) on coronal MRI",
      "MS plaques often involve periventricular white matter and corpus callosum",
      "Callosal lesion — left-hand apraxia with right-hand sparing (disconnection)",
      "Lies superior to septum pellucidum and lateral ventricles",
      "vs anterior commissure — smaller; olfactory and temporal connections",
    ],
    pediatrics:
      "Agenesis of corpus callosum may be isolated or syndromic (Aicardi syndrome in females, fetal alcohol spectrum, trisomies). Prenatal MRI can detect callosal absence; developmental delay and seizures are common when part of a syndrome.",
  },
  {
    id: "septum-pellucidum",
    name: "Septum Pellucidum",
    etymology: "Latin septum = partition + Latin pellucidum = transparent",
    aliases: [
      "septum pellucidum",
      "septa pellucida",
      "transparent septum",
      "sp",
    ],
    germLayer: "Ectoderm",
    origin:
      "Thin glial membrane derived from the medial walls of the developing telencephalic hemispheres; forms the medial boundary of each lateral ventricle and fuses in the midline between the corpus callosum above and fornix below.",
    derivatives: [
      "Medial wall of lateral ventricle",
      "Cavum septum pellucidum (potential fluid space between leaflets)",
    ],
    functionSummary:
      "Separates the lateral ventricles in the midline; absence or malformation signals forebrain cleavage defects.",
    commonPathologies: [
      "Absent septum pellucidum — holoprosencephaly, septo-optic dysplasia",
      "Cavum septum pellucidum — normal fetal/infant variant; enlarged cavum in fetal alcohol syndrome",
      "Cavum septum pellucidum et vergae — extension posterior to columns of fornix",
    ],
    step1Pearls: [
      "Absent septum pellucidum + optic nerve hypoplasia → septo-optic dysplasia",
      "Absent septum pellucidum in holoprosencephaly — failed telencephalic cleavage",
      "Cavum septum pellucidum closes postnatally in most children",
      "Visible on coronal MRI between lateral ventricles beneath corpus callosum",
    ],
    pediatrics:
      "Isolated cavum septum pellucidum is common in neonates and usually benign; absent septum pellucidum on prenatal or neonatal imaging warrants evaluation for holoprosencephaly or septo-optic dysplasia.",
  },
  {
    id: "spinal-cord",
    name: "Spinal Cord",
    etymology: "Latin spina = thorn/spine + Latin chorda = string",
    aliases: ["spinal cord"],
    germLayer: "Ectoderm",
    origin:
      "Caudal neural tube (neuroectoderm); alar plate (dorsal) sensory, basal plate (ventral) motor.",
  },
  {
    id: "cauda-equina",
    name: "Cauda Equina",
    etymology:
      "Latin cauda = horse tail + Latin equina = of a horse (bundle of lumbosacral nerve roots resembling a tail)",
    aliases: [
      "cauda equina",
      "cauda equinas",
      "cauda equina nerve roots",
      "lumbosacral nerve roots",
      "horse's tail nerves",
      "cauda equina bundle",
    ],
    germLayer: "Ectoderm (neural crest and neural tube derivatives)",
    origin:
      "Caudal spinal cord tapers to conus medullaris (~L1–L2 in adults); below this, lumbar, sacral, and coccygeal nerve roots descend within the thecal sac as the cauda equina before exiting via intervertebral foramina.",
    derivatives: [
      "L2–S5 motor and sensory nerve roots",
      "S2–S4 parasympathetic outflow to pelvic viscera (bladder, bowel, genitalia)",
      "Pudendal nerve components",
      "Coccygeal roots",
    ],
    functionSummary:
      "Innervates lower extremities, perineum, and pelvic organs — motor to leg muscles; sensory to saddle area, posterior thighs, and perineum; autonomic control of bladder and bowel via S2–S4.",
    commonPathologies: [
      "Cauda equina syndrome — compressive emergency with saddle anesthesia and urinary retention",
      "Lumbar disc herniation compressing single or multiple roots",
      "Spinal stenosis — neurogenic claudication",
      "Epidural abscess or hematoma",
      "Metastatic tumor in thecal sac",
    ],
    step1Pearls: [
      "Cauda equina = horse's tail of lumbosacral roots below conus medullaris (ends ~L1–L2)",
      "Cauda equina syndrome — bilateral leg pain/weakness, saddle anesthesia, urinary retention; surgical emergency",
      "Lower motor neuron signs — ↓ reflexes, flaccid weakness (vs upper motor neuron cord lesion above)",
      "S2–S4 roots — bladder, bowel, sexual function; areflexic bladder in cauda equina injury",
      "Lumbar puncture performed below L3/L4 to avoid cord injury (conus ends above)",
      "vs conus medullaris syndrome — sudden bilateral UMN/LMN mix at cord terminus; earlier bladder dysfunction",
    ],
    pediatrics:
      "In infants the conus medullaris lies lower (L2–L3) and ascends with growth; tethered cord can traction cauda equina roots causing leg weakness, bladder dysfunction, and scoliosis.",
  },
  {
    id: "retina",
    name: "Retina",
    etymology:
      "Latin rete = net — layered neural tissue lining the posterior globe",
    aliases: [
      "retina",
      "retinas",
      "retinal",
      "retinal tissue",
      "neural retina",
      "neural retinas",
      "posterior retina",
      "ocular retina",
    ],
    germLayer: "Ectoderm",
    origin:
      "Inner layer of the optic cup (neuroectoderm) invaginates to form the neural retina; outer optic cup becomes retinal pigment epithelium (RPE). Retinal ganglion cell axons converge at the optic disc to form CN II.",
    derivatives: [
      "Photoreceptors (rods and cones)",
      "Bipolar, horizontal, amacrine, and ganglion cells",
      "Retinal nerve fiber layer (ganglion cell axons toward optic disc)",
      "Macula and fovea (central high-acuity region)",
      "Optic nerve (CN II) from ganglion cell axons",
    ],
    functionSummary:
      "Transduces light into neural signals — photoreceptors → bipolar cells → retinal ganglion cells → optic nerve; macula/fovea provides highest visual acuity; nasal vs temporal hemiretina map to contralateral vs ipsilateral visual hemifields at the chiasm.",
    commonPathologies: [
      "Diabetic retinopathy — microaneurysms, hemorrhages, neovascularization",
      "Hypertensive retinopathy — AV nicking, flame hemorrhages, cotton-wool spots",
      "Retinal detachment — photoreceptor separation from RPE",
      "Central retinal artery occlusion (CRAO) — pale retina, cherry-red fovea",
      "Central retinal vein occlusion (CRVO) — diffuse hemorrhages, cotton-wool spots",
      "Retinitis pigmentosa — rod-cone dystrophy, bone-spicule pigmentation",
      "Age-related macular degeneration — drusen, geographic atrophy, choroidal neovascularization",
      "Retinopathy of prematurity",
    ],
    step1Pearls: [
      "Retina = neural layer of optic cup; RPE = outer pigmented layer",
      "Inner retina supplied by central retinal artery (branch of ophthalmic → internal carotid); outer retina/photoreceptors nourished by choroid",
      "Macula = central retina; fovea = avascular zone of maximal cone density",
      "Nasal hemiretina projects to temporal visual field; nasal fibers cross at chiasm",
      "CRAO — sudden painless monocular vision loss; cherry-red fovea against pale edematous retina",
      "Flame hemorrhages = superficial NFL; dot-blot = deeper retinal layers",
    ],
    pediatrics:
      "Retinopathy of prematurity affects premature infants exposed to supplemental oxygen; retinoblastoma arises from retinal cells (leukocoria). Abusive head trauma may cause retinal hemorrhages in multiple layers.",
  },
  {
    id: "hemiretina",
    name: "Hemiretina",
    etymology:
      "Greek hemi = half + Latin rete = net — one half of the retinal surface",
    aliases: [
      "hemiretina",
      "hemiretinas",
      "hemi-retina",
      "hemi-retinas",
      "half retina",
      "half retinas",
      "retinal hemifield",
      "retinal hemifields",
      "nasal hemiretina",
      "nasal hemiretinas",
      "temporal hemiretina",
      "temporal hemiretinas",
      "superior hemiretina",
      "inferior hemiretina",
    ],
    germLayer: "Ectoderm",
    origin:
      "Anatomic and functional half of the retina — most boards-relevant division is nasal vs temporal hemiretina relative to the vertical meridian through the fovea; each hemiretina corresponds to the opposite hemifield of visual space.",
    derivatives: [
      "Nasal hemiretina — ganglion cell axons decussate at optic chiasm",
      "Temporal hemiretina — axons remain ipsilateral in optic tract",
      "Superior/inferior hemiretina — map to inferior/superior visual fields (inverted image)",
    ],
    functionSummary:
      "Half-retina organization links retinal anatomy to visual field defects — nasal hemiretina sees temporal visual field and crosses at the chiasm; temporal hemiretina sees nasal visual field and stays ipsilateral; understanding hemiretinal mapping explains bitemporal vs homonymous field loss.",
    commonPathologies: [
      "Chiasmal compression — affects crossing nasal retinal fibers from both eyes → bitemporal hemianopia",
      "Optic tract lesion — homonymous hemianopia from contralateral hemiretinal input loss",
      "Branch retinal vein occlusion — hemorrhages in affected hemiretinal sector",
      "Quadrantanopia from partial optic radiation or cortex lesion",
    ],
    step1Pearls: [
      "Nasal hemiretina → temporal visual field; temporal hemiretina → nasal visual field",
      "Nasal retinal fibers cross at optic chiasm — key to bitemporal hemianopia",
      "Each optic tract carries contralateral hemiretinal input (both eyes' temporal field from one side + nasal field from other)",
      "Superior retina sees inferior visual field (inverted and reversed mapping)",
      "Hemiretina concept explains why chiasm lesions affect both eyes but post-chiasmal lesions cause homonymous defects",
    ],
    pediatrics:
      "Visual field testing is difficult in young children; hemiretinal pathway anatomy still explains bitemporal defects from suprasellar tumors (craniopharyngioma) and homonymous field loss from post-chiasmal pathology in older children.",
  },
  {
    id: "optic-disc",
    name: "Optic Disc",
    etymology: "Latin opticus = of sight + Latin discus = flat circular plate",
    aliases: [
      "optic disc",
      "optic discs",
      "optic disk",
      "optic disks",
      "optic nerve head",
      "optic nerve heads",
      "onh",
      "optic papilla",
      "optic papillae",
      "blind spot",
      "blind spots",
    ],
    germLayer: "Ectoderm",
    origin:
      "Formed where retinal ganglion cell axons converge and exit the globe through the lamina cribrosa as the optic nerve — the only region of retina lacking photoreceptors (physiologic blind spot).",
    derivatives: ["Optic nerve (CN II)", "Neuroretinal rim", "Physiologic cup"],
  },
  {
    id: "optic-chiasm",
    name: "Optic Chiasm",
    etymology:
      "Greek optikos = of sight + Greek chiasma = cross/marked with χ (chi)",
    aliases: [
      "optic chiasm",
      "optic chiasma",
      "optic chiasms",
      "chiasm",
      "chiasma",
      "optic decussation",
      "optic chiasm decussation",
    ],
    germLayer: "Ectoderm",
    origin:
      "Formed where nasal retinal ganglion cell axons from each optic nerve decussate to join temporal fibers of the contralateral optic tract — lies in the suprasellar cistern above the diaphragma sellae and pituitary gland.",
    derivatives: [
      "Decussating nasal retinal fibers (temporal visual field of each eye)",
      "Non-crossing temporal retinal fibers (nasal visual field of each eye)",
      "Continuations as left and right optic tracts",
    ],
    functionSummary:
      "Partial decussation point of the visual pathway — integrates binocular input so each optic tract carries information from the contralateral visual hemifield of both eyes.",
    commonPathologies: [
      "Pituitary macroadenoma compressing chiasm → bitemporal hemianopia",
      "Craniopharyngioma, meningioma, suprasellar mass",
      "Optic glioma (NF1)",
      "Pituitary apoplexy — acute chiasmal compression",
    ],
    step1Pearls: [
      "Nasal retinal fibers cross at chiasm; temporal fibers stay ipsilateral",
      "Nasal retina sees temporal visual field — chiasm lesion → bitemporal hemianopia",
      "Pituitary adenoma above sella compresses central chiasm — classic boards link",
      "Anterior to chiasm → monocular loss; chiasm → bitemporal; post-chiasm → homonymous hemianopia",
      "Optic tract carries contralateral homonymous hemifield information to LGN",
    ],
    pediatrics:
      "Suprasellar tumors (craniopharyngioma, optic pathway glioma) in children may present with bitemporal field loss and endocrine dysfunction before visual acuity decline.",
  },
  {
    id: "lateral-geniculate-body",
    name: "Lateral Geniculate Body",
    etymology:
      "Latin lateralis = side + Latin geniculatus = bent like a knee + corpus = body — lateral knee-shaped thalamic nucleus",
    aliases: [
      "lateral geniculate body",
      "lateral geniculate bodies",
      "lateral geniculate nucleus",
      "lateral geniculate nuclei",
      "lgn",
      "lateral geniculate",
      "lateral geniculates",
      "geniculate body lateral",
      "visual thalamic nucleus",
    ],
    germLayer: "Ectoderm (neural tube — diencephalon)",
    origin:
      "Develops from the alar plate of the diencephalon (thalamus); six layered nucleus receiving retinotopic input from optic tract and projecting via optic radiations to primary visual cortex (V1, calcarine sulcus).",
    derivatives: [
      "Magnocellular layers (motion, contrast)",
      "Parvocellular layers (color, fine detail)",
      "Koniocellular layers (color, blue-yellow pathway)",
      "Optic radiations (geniculocalcarine tract)",
    ],
    functionSummary:
      "Primary thalamic relay nucleus of the visual pathway — receives contralateral retinal input via optic tract and sends organized projections to primary visual cortex; also receives cortical and brainstem modulatory input.",
    commonPathologies: [
      "Lateral geniculate artery stroke (LGB infarct) — sectoranopia/homonymous field defect",
      "Thalamic hemorrhage involving LGN",
      "Compressive lesions of optic tract before LGN",
    ],
    step1Pearls: [
      "LGN = thalamic visual relay; optic tract → LGN → optic radiations → V1",
      "Retinotopic organization preserved through LGN layers",
      "Magnocellular (M) vs parvocellular (P) pathways — motion vs color/detail",
      "Chiasm lesion affects both eyes (bitemporal); post-LGN lesion → homonymous hemianopia",
      "vs superior colliculus — reflexive visual tracking, not conscious visual relay to cortex",
      "vs medial geniculate body — auditory thalamic relay, not visual",
    ],
    pediatrics:
      "Visual pathway development depends on retinal input to LGN; congenital cataracts or strabismus amblyopia reflect critical period plasticity in geniculocortical connections.",
  },
  {
    id: "uvea",
    name: "Uvea",
    etymology: "Latin uva = grape (grape-like appearance of iris folds)",
    aliases: [
      "uvea",
      "uveal",
      "uveal tract",
      "uveal layer",
      "choroid",
      "ciliary body",
    ],
    germLayer: "Mesoderm / Neural crest",
    origin:
      "Middle vascular pigmented coat of the eye derived from periocular mesenchyme (neural crest and mesoderm) surrounding the optic cup; comprises iris (anterior), ciliary body, and choroid (posterior).",
    derivatives: ["Iris", "Ciliary body", "Choroid"],
  },
  {
    id: "iris",
    name: "Iris",
    etymology:
      "Greek iris = rainbow — pigmented muscular diaphragm of the eye regulating light entry through the pupil",
    aliases: [
      "iris",
      "irises",
      "irides",
      "ocular iris",
      "uveal iris",
      "iris diaphragm",
    ],
    germLayer: "Mesoderm / Neural crest",
    origin:
      "Anterior uveal structure derived from periocular mesenchyme (neural crest predominant) at the anterior rim of the optic cup — forms a circular diaphragm with central pupillary aperture between anterior and posterior chambers.",
    derivatives: [
      "Sphincter pupillae — circular smooth muscle (parasympathetic) for miosis",
      "Dilator pupillae — radial smooth muscle (sympathetic α1) for mydriasis",
      "Iris stroma — pigmented melanocytes determine eye color",
      "Anterior iris surface — crypts and collarette landmarks",
    ],
    functionSummary:
      "Regulates quantity of light reaching the retina by changing pupillary diameter — sphincter pupillae constricts pupil (miosis) in bright light; dilator pupillae widens pupil (mydriasis) in dim light or sympathetic activation; pupillary aperture also affects depth of field.",
    commonPathologies: [
      "Iritis/uveitis — painful photophobia with ciliary flush",
      "Adie tonic pupil — iris sphincter denervation",
      "Horner syndrome — miosis from loss of sympathetic dilator tone",
      "Anticholinergic or sympathomimetic drug effects on iris muscles",
      "Iris neovascularization (rubeosis) in diabetic retinopathy or CRVO",
      "Traumatic iridodialysis — iris root detachment",
    ],
    step1Pearls: [
      "Iris = anterior uvea; pigmented muscular diaphragm with central pupil",
      "Sphincter pupillae (parasympathetic M3) → miosis; dilator pupillae (sympathetic α1) → mydriasis",
      "Parasympathetic via CN III → ciliary ganglion → short ciliary nerves",
      "Sympathetic dilator: hypothalamus → T1 → superior cervical ganglion → long ciliary nerves",
      "Pupillary light reflex — CN II afferent, CN III efferent to sphincter",
      "Blue irides have less stromal pigment — not different sphincter anatomy",
      "vs ciliary body — posterior uvea with ciliary muscle; vs pupil — aperture not tissue",
    ],
    pediatrics:
      "Congenital aniridia (PAX6) causes iris hypoplasia and glaucoma risk. Leukocoria suggests retinoblastoma, not primary iris disease. Neonatal pupils react to light; fixed pupils suggest anoxia or drug exposure.",
  },
  {
    id: "lens",
    name: "Lens",
    etymology: "Latin lens = lentil-shaped glass",
    aliases: ["lens"],
    germLayer: "Ectoderm",
    origin:
      "Surface ectoderm lens placode invaginates in response to optic vesicle induction.",
  },
  {
    id: "cornea",
    name: "Cornea",
    etymology: "Latin cornu = horn",
    aliases: ["cornea", "corneal"],
    germLayer: "Ectoderm / Neural crest",
    origin:
      "Corneal epithelium from surface ectoderm; stroma and endothelium largely from neural crest mesenchyme.",
  },
  {
    id: "conjunctiva",
    name: "Conjunctiva",
    etymology: "Latin conjunctivus = connecting/joining together",
    aliases: [
      "conjunctiva",
      "conjunctivae",
      "conjunctival",
      "bulbar conjunctiva",
      "palpebral conjunctiva",
    ],
    germLayer: "Ectoderm",
    origin:
      "Surface ectoderm lining the inner eyelids (palpebral conjunctiva) and covering the anterior sclera (bulbar conjunctiva); continuous at the fornices; contains goblet cells for mucin secretion.",
    derivatives: [
      "Nonkeratinized stratified squamous epithelium with goblet cells",
      "Substantia propria (loose vascular connective tissue)",
      "Limbal stem cell niche at corneoscleral junction",
    ],
  },
  {
    id: "inner-ear",
    name: "Inner Ear",
    etymology: "inner = inside + Old English eare = ear",
    aliases: ["inner ear", "cochlea", "semicircular canals"],
    germLayer: "Ectoderm",
    origin:
      "Otic placode (surface ectoderm) invaginates to form otic vesicle; gives rise to membranous labyrinth.",
  },
  {
    id: "tympanic-membrane",
    name: "Tympanic Membrane",
    etymology:
      "Greek tympanon = drum + Latin membrana = skin — thin semitransparent membrane separating the external auditory canal from the middle ear; also called the eardrum",
    aliases: [
      "tympanic membrane",
      "tympanic membranes",
      "eardrum",
      "eardrums",
      "ear drum",
      "ear drums",
      "tympanum",
      "myringa",
      "myringae",
      "pars tensa",
      "pars flaccida",
      "tympanic membrane perforation",
      "ruptured tympanic membrane",
      "bulging tympanic membrane",
    ],
    germLayer: "Ectoderm / Endoderm / Mesoderm",
    origin:
      "Three-layered structure: outer cutaneous layer from first pharyngeal pouch ectoderm (external canal lining), inner mucosal layer from endoderm of tubotympanic recess (middle ear), and fibrous middle layer from mesoderm — forms the boundary between external auditory canal and middle ear cavity.",
    derivatives: [
      "Pars tensa — main vibrating portion attached to malleus handle",
      "Pars flaccida (Shrapnell membrane) — superior slack portion",
      "Cone of light (light reflex) from anterior-inferior quadrant",
      "Handle of malleus visible through membrane on otoscopy",
    ],
    functionSummary:
      "Transduces airborne sound pressure waves from the external canal into mechanical vibration of the ossicular chain (malleus → incus → stapes → oval window); maintains sealed middle ear space for efficient sound conduction.",
    commonPathologies: [
      "Acute otitis media — bulging, erythematous, immobile membrane",
      "Otitis media with effusion — retracted or amber membrane with air-fluid level",
      "Tympanic membrane perforation — traumatic or from AOM/barotrauma",
      "Cholesteatoma — retraction pocket in pars flaccida or pars tensa",
      "Otitis externa — membrane may appear normal; pain on tragal pressure instead",
      "Barotrauma — hemotympanum or rupture after pressure change",
    ],
    step1Pearls: [
      "Tympanic membrane = eardrum — separates external canal from middle ear",
      "Bulging erythematous immobile TM → acute otitis media (AOM)",
      "Pneumatic otoscopy — impaired mobility supports middle ear effusion",
      "Cone of light normally anterior-inferior; distorted in effusion or retraction",
      "1st pharyngeal pouch → middle ear cavity and TM inner layer",
      "Chorda tympani (CN VII taste) crosses medial surface of TM",
      "Perforation → conductive hearing loss until healing; chronic perforation risks cholesteatoma",
      "Red TM alone nonspecific — crying infant also has flushed TM",
    ],
    pediatrics:
      "AOM is most common in children 6–24 months after URI — Eustachian tube anatomy (shorter, more horizontal) predisposes. Bulging TM with fever and ear pain supports antibiotics. Neonatal hearing screening (otoacoustic emissions/ABR) does not visualize TM but follow-up otoscopy important in recurrent OM. Tympanostomy tubes bypass dysfunctional Eustachian tube in recurrent AOM/effusion.",
  },
  {
    id: "skin",
    name: "Skin",
    etymology: "Old Norse skinn = hide",
    aliases: ["skin"],
    germLayer: "Ectoderm / Mesoderm",
    origin:
      "Epidermis from surface ectoderm; dermis from underlying mesoderm (dermatome).",
  },
  {
    id: "epidermis",
    name: "Epidermis",
    etymology: "Greek epi = upon + derma = skin",
    aliases: ["epidermis", "epidermal", "epidermal layer", "outer skin layer"],
    germLayer: "Ectoderm",
    origin:
      "Derived from surface ectoderm; stratified squamous keratinizing epithelium with keratinocytes, melanocytes, Langerhans cells, and Merkel cells.",
    derivatives: [
      "Stratum corneum, granulosum, spinosum, basale",
      "Hair follicle outer root sheath",
      "Eccrine sweat duct epithelium",
    ],
    functionSummary:
      "Barrier against water loss, microbes, and UV; keratinocyte differentiation and melanin transfer; antigen sampling by Langerhans cells.",
    commonPathologies: [
      "Atopic dermatitis",
      "Psoriasis",
      "Impetigo",
      "Melanoma (melanocyte origin)",
      "Basal/squamous cell carcinoma",
    ],
    step1Pearls: [
      "Epidermis = ectoderm; avascular — nutrients from dermal capillaries",
      "Keratinocytes produce keratin; melanocytes transfer melanin to keratinocytes",
      "Langerhans cells (APCs) vs Langhans giant cells (macrophage fusion in granulomas)",
      "FLG (filaggrin) loss → impaired barrier → atopic dermatitis risk",
    ],
    pediatrics:
      "Infant epidermis is thinner with immature barrier — ↑ transepidermal water loss and atopic dermatitis risk; sunscreen and emollients important.",
  },
  {
    id: "sweat-gland",
    name: "Sweat Gland",
    etymology:
      "Old English swætan = to perspire + Latin glans = acorn/gland — cutaneous exocrine gland secreting sweat for thermoregulation or scent",
    aliases: [
      "sweat gland",
      "sweat glands",
      "sudoriferous gland",
      "sudoriferous glands",
      "cutaneous sweat gland",
      "cutaneous sweat glands",
    ],
    germLayer: "Ectoderm",
    origin:
      "Epidermal downgrowth forming coiled tubular glands in dermis — eccrine glands widely distributed; apocrine glands in axilla, areola, and anogenital region.",
    derivatives: [
      "Eccrine sweat gland — thermoregulatory watery sweat to skin surface",
      "Apocrine sweat gland — thicker secretion into hair follicle; odor after bacterial breakdown",
    ],
    functionSummary:
      "Thermoregulation (eccrine), emotional diaphoresis, and apocrine scent signaling; duct modifies sweat electrolyte content.",
    commonPathologies: [
      "Cystic fibrosis — ↑ eccrine sweat chloride (diagnostic sweat test)",
      "Anhidrotic ectodermal dysplasia — absent/reduced eccrine glands",
      "Primary focal hyperhidrosis",
      "Horner syndrome — ipsilateral anhidrosis",
    ],
    step1Pearls: [
      "Eccrine = watery sweat everywhere; apocrine = axilla/areola, puberty-activated, odor after bacteria",
      "Sympathetic innervation to eccrine glands uses ACh (muscarinic), not NE — major sympathetic cholinergic exception",
      "CF sweat test — pilocarpine iontophoresis stimulates eccrine sweating; ↑ chloride diagnostic",
      "Eccrine duct reabsorbs NaCl — aldosterone ↑ duct Na⁺ reabsorption during volume depletion",
      "Mammary gland = modified apocrine sweat gland",
    ],
    pediatrics:
      "Infants have immature thermoregulation and rely heavily on eccrine sweating; anhidrotic ectodermal dysplasia causes heat intolerance. CF newborn screen is followed by quantitative sweat chloride testing.",
  },
  {
    id: "dermis",
    name: "Dermis",
    etymology: "Greek derma = skin",
    aliases: ["dermis", "dermal", "dermal layer", "corium"],
    germLayer: "Mesoderm",
    origin:
      "Derived from underlying mesoderm (dermatome); papillary dermis (loose CT) over reticular dermis (dense CT).",
    derivatives: [
      "Fibroblasts and extracellular matrix (collagen, elastin)",
      "Blood vessels, lymphatics, nerves",
      "Dermal appendages — hair follicles, sebaceous and eccrine glands",
    ],
    functionSummary:
      "Structural support, thermoregulation, sensation, and wound repair; houses appendages and immune cells.",
    commonPathologies: [
      "Scleroderma (dermal fibrosis)",
      "Keloid/hypertrophic scar",
      "Cellulitis (spreads in dermis/subcutis)",
      "Graves pretibial myxedema (dermal mucin)",
    ],
    step1Pearls: [
      "Dermis = mesoderm; rich in collagen (type I/III) produced by fibroblasts",
      "Papillary dermis — dermal papillae interdigitate with epidermis",
      "Reticular dermis — thicker, dense collagen; site of appendages",
      "Epidermis ectoderm + dermis mesoderm — classic germ-layer pairing",
    ],
    pediatrics:
      "Dermal collagen matures with age; infants have less dense dermis — easier bruising and faster wound healing relative to depth.",
  },
  {
    id: "bone",
    name: "Bone",
    etymology: "Old English ban = bone",
    aliases: ["bone", "bones", "skeletal", "ossification"],
    germLayer: "Mesoderm",
    origin:
      "Most bones from paraxial mesoderm (somites → sclerotome) or lateral plate mesoderm; skull bones also from neural crest.",
  },
  {
    id: "skeletal-muscle",
    name: "Skeletal Muscle",
    etymology:
      "Greek skeletos = dried body/skeleton + Latin musculus = little mouse/muscle",
    aliases: ["skeletal muscle", "striated muscle"],
    germLayer: "Mesoderm",
    origin:
      "Myotome of somites (paraxial mesoderm); head muscles also from pharyngeal arch mesoderm.",
  },
  {
    id: "teeth",
    name: "Teeth",
    etymology: "Old English toth = tooth",
    aliases: ["tooth", "teeth", "dental"],
    germLayer: "Ectoderm / Neural crest",
    origin:
      "Enamel from ameloblasts (oral ectoderm); dentin and pulp from neural crest-derived mesenchyme.",
  },
  {
    id: "dentition",
    name: "Dentition",
    etymology:
      "Latin dens = tooth + -ition = state/condition — the number, arrangement, and developmental stage of teeth in the jaws",
    aliases: [
      "dentition",
      "dentitions",
      "dental dentition",
      "primary dentition",
      "permanent dentition",
      "deciduous dentition",
      "adult dentition",
      "tooth eruption",
      "tooth eruptions",
      "dental formula",
    ],
    germLayer: "Ectoderm (enamel) / Neural crest mesenchyme (dentin, pulp, cementum, periodontal ligament)",
    origin:
      "Teeth develop from oral ectoderm (enamel organ) and neural crest–derived ectomesenchyme (dental papilla, follicle); primary (deciduous) teeth erupt ~6 months–3 years; permanent teeth replace them from ~6 years with third molars (wisdom teeth) erupting in late adolescence or early adulthood.",
    derivatives: [
      "Primary (deciduous) teeth — 20 total (2:1:2:3 per quadrant mnemonic)",
      "Permanent teeth — 32 total (2:1:2:3 including molars; third molars may be absent)",
      "Enamel, dentin, pulp, cementum, periodontal ligament",
    ],
    functionSummary:
      "Mastication, speech articulation, and facial structure support; healthy dentition reduces aspiration risk from oral bacterial colonization.",
    commonPathologies: [
      "Dental caries — acidogenic bacteria (S. mutans) demineralize enamel",
      "Periodontal disease — gingivitis progressing to periodontitis and tooth loss",
      "Malocclusion and crowding",
      "Delayed or absent tooth eruption",
      "Anodontia/hypodontia — selective tooth agenesis (e.g., ectodermal dysplasia)",
      "Poor dentition predisposing to anaerobic aspiration pneumonia",
    ],
    step1Pearls: [
      "Primary dentition — 20 teeth erupt ~6 mo–3 yr; exfoliate ~6–12 yr",
      "Permanent dentition — 32 teeth; first molars erupt ~6 yr (6-year molars)",
      "Dental formula adult per quadrant: 2 incisors, 1 canine, 2 premolars, 3 molars (2:1:2:3)",
      "Enamel = ectoderm; dentin/pulp/cementum = neural crest mesenchyme",
      "Fluoride strengthens enamel; caries from Streptococcus mutans acid production",
      "Poor dentition + aspiration risk → anaerobic lung abscess (Actinomyces, oral flora)",
      "Cleidocranial dysplasia — delayed eruption, supernumerary teeth",
    ],
    pediatrics:
      "Primary teeth begin erupting ~6 months; complete by ~3 years. Early childhood caries from bottle-feeding at night is preventable. Delayed permanent eruption or multiple missing teeth suggests ectodermal dysplasia or cleidocranial dysplasia. Fluoride varnish and dental sealants reduce caries in children.",
  },
  {
    id: "tongue",
    name: "Tongue",
    etymology: "Old English tunge = tongue",
    aliases: ["tongue", "lingual"],
    germLayer: "Mesoderm / Endoderm",
    origin:
      "Anterior 2/3 muscles from occipital somites; body from pharyngeal arches. Taste buds and mucosa mixed endoderm/ectoderm.",
  },
  {
    id: "median-sulcus-of-the-tongue",
    name: "Median Sulcus of the Tongue",
    etymology: "Latin medius = middle + sulcus = groove + lingua = tongue",
    aliases: [
      "median sulcus of the tongue",
      "median sulcus of tongue",
      "median lingual sulcus",
      "midline groove of tongue",
      "dorsal median sulcus",
      "sulcus medianus linguae",
    ],
    germLayer: "Ectoderm / Endoderm",
    origin:
      "Midline surface groove on the dorsal tongue formed where the two lateral lingual swellings fuse during embryologic development; posteriorly it leads toward the foramen cecum and terminal sulcus.",
    derivatives: [
      "Dorsal tongue mucosa midline landmark",
      "Posteriorly continuous with region of foramen cecum and circumvallate papillae",
    ],
    functionSummary:
      "Anatomic midline landmark dividing the dorsal tongue into right and left halves; helps orient taste, motor, and sensory innervation territories.",
    commonPathologies: [
      "Median rhomboid glossitis (central papillary atrophy)",
      "Congenital tongue malformations along midline fusion",
      "Surgical landmark in tongue base procedures",
    ],
    step1Pearls: [
      "Midline groove on dorsal tongue — fusion line of lateral lingual swellings",
      "Posterior tongue midline → foramen cecum and terminal sulcus region",
      "Separates right vs left tongue motor/sensory organization clinically",
      "Not the same as terminal sulcus — sulcus is surface groove; terminal sulcus is V-shaped boundary between oral and pharyngeal tongue",
    ],
    pediatrics:
      "Midline tongue lesions in children (e.g., median rhomboid glossitis) may mimic infection but often reflect benign mucosal change; true midline fusion defects are rare and may accompany other craniofacial anomalies.",
  },
  {
    id: "foramen-cecum",
    name: "Foramen Cecum",
    etymology: "Latin foramen = opening + caecum = blind",
    aliases: [
      "foramen cecum",
      "foramen cecum of tongue",
      "foramen cecum linguae",
      "lingual foramen cecum",
      "tongue foramen cecum",
    ],
    germLayer: "Endoderm",
    origin:
      "Blind midline pit at the posterior dorsal tongue (at the apex of the terminal sulcus) marking the embryologic site where the thyroid diverticulum invaginates from floor-of-mouth endoderm before descending via the thyroglossal duct.",
    derivatives: [
      "Thyroid gland (descends from this endodermal invagination)",
      "Thyroglossal duct remnant — pyramidal lobe or thyroglossal duct cyst",
      "Lingual thyroid if descent fails",
    ],
    functionSummary:
      "Embryologic landmark for thyroid development and thyroglossal duct anatomy; clinically relevant for thyroglossal duct cysts and ectopic lingual thyroid.",
    commonPathologies: [
      "Thyroglossal duct cyst",
      "Lingual thyroid (failed descent)",
      "Pyramidal lobe of thyroid",
      "Midline neck mass moving with tongue protrusion",
    ],
    step1Pearls: [
      "Foramen cecum = blind pit at posterior dorsal tongue midline",
      "Site of thyroid diverticulum origin — thyroid descends via thyroglossal duct",
      "Thyroglossal duct cyst — midline neck mass that rises with tongue protrusion",
      "Lingual thyroid may present at foramen cecum if gland fails to descend",
      "Connected conceptually to median sulcus and terminal sulcus landmarks",
    ],
    pediatrics:
      "Thyroglossal duct cyst is a common pediatric midline neck mass; Sistrunk procedure removes cyst and central hyoid portion of duct. Lingual thyroid at the foramen cecum may be the only thyroid tissue — do not remove without confirming elsewhere.",
  },
  {
    id: "diaphragm",
    name: "Diaphragm",
    etymology: "Greek dia = across + phragma = fence/partition",
    aliases: ["diaphragm", "diaphragmatic"],
    germLayer: "Mesoderm",
    origin:
      "Septum transversum (central tendon), pleuroperitoneal folds, dorsal mesentery of esophagus, and body wall mesoderm.",
  },
  {
    id: "pericardium",
    name: "Pericardium",
    etymology: "Greek peri = around + kardia = heart",
    aliases: ["pericardium", "pericardial"],
    germLayer: "Mesoderm",
    origin:
      "Parietal pericardium from pleuropericardial membranes (splanchnic mesoderm); visceral layer is epicardium.",
  },
  {
    id: "right-atrium",
    name: "Right Atrium",
    etymology: "Latin atrium = entrance hall + dexter = right",
    aliases: [
      "right atrium",
      "right atria",
      "ra",
      "right atrial chamber",
      "right atrial",
    ],
    germLayer: "Mesoderm",
    origin:
      "Forms from the primitive atrium during cardiac looping; smooth-walled sinus venarum derives from the sinus venosus (right horn), while the trabeculated auricle forms from the primitive atrial body.",
    derivatives: [
      "Sinus venarum (smooth posterior wall)",
      "Right atrial appendage (auricle)",
      "Fossa ovalis",
      "Crista terminalis",
      "Sinoatrial node",
    ],
  },
  {
    id: "crista-terminalis",
    name: "Crista Terminalis",
    etymology: "Latin crista = crest/ridge + terminalis = at the end/boundary",
    aliases: [
      "crista terminalis",
      "crista terminalis ridge",
      "terminal crest",
      "terminal crest of right atrium",
    ],
    germLayer: "Mesoderm",
    origin:
      "Internal muscular ridge in the right atrium marking the junction between the smooth-walled sinus venarum (sinus venosus derivative) and the trabeculated atrial appendage; sinoatrial node cluster lies at its superior aspect near the SVC orifice.",
  },
  {
    id: "cavotricuspid-isthmus",
    name: "Cavotricuspid Isthmus",
    etymology:
      "Latin cavus = hollow (vena cava) + Latin tri = three + Latin cuspis = point (tricuspid) + Greek isthmos = narrow neck/bridge",
    aliases: [
      "cavotricuspid isthmus",
      "cavo-tricuspid isthmus",
      "cavo tricuspid isthmus",
      "cti",
      "cavotricuspid isthmuses",
      "isthmus between ivc and tricuspid valve",
      "tricuspid-ivc isthmus",
    ],
    germLayer: "Mesoderm",
    origin:
      "Subeustachian right atrial myocardium forming a narrow conduction bridge between the inferior vena cava–tricuspid annulus line and the coronary sinus/eustachian ridge — the critical slow-conduction zone for typical atrial flutter macroreentry.",
    derivatives: [
      "Slow pathway substrate for counterclockwise atrial flutter",
      "Target for radiofrequency ablation lines",
    ],
    functionSummary:
      "Anatomic isthmus in the low right atrium that serves as the preferred pathway for macroreentrant atrial flutter circuits — ablation across this region interrupts the circuit and is curative for typical flutter.",
    commonPathologies: [
      "Typical (type I) atrial flutter — counterclockwise macroreentry using CTI",
      "Iatrogenic flutter after cardiac surgery (atriotomy scars)",
      "Atrial tachycardia circuits involving low right atrium",
    ],
    step1Pearls: [
      "CTI = cavotricuspid isthmus — ablation target for typical atrial flutter",
      "Bounded by tricuspid annulus, IVC, and eustachian valve/coronary sinus ridge",
      "Sawtooth flutter waves + 2:1 block → ventricular rate ~150; carotid massage reveals F waves",
      "Same stroke risk as atrial fibrillation — anticoagulate",
      "vs atypical flutter — does not use CTI; harder to ablate",
    ],
    pediatrics:
      "Atrial flutter occurs in congenital heart disease and post-surgical atria; CTI ablation is performed in older children/adolescents at experienced EP centers.",
  },
  {
    id: "av-node",
    name: "AV Node",
    etymology:
      "atrioventricular + Latin nodus = knot = atrioventricular junctional pacemaker tissue",
    aliases: [
      "av node",
      "av nodes",
      "atrioventricular node",
      "atrioventricular nodes",
      "a-v node",
      "node of aschoff and tawara",
      "koch node",
    ],
    germLayer: "Mesoderm (neural crest contribution to conduction system)",
    origin:
      "Develops from cardiogenic mesoderm at the atrioventricular canal; located in the inferior interatrial septum near the coronary sinus ostium within the anatomic Koch triangle.",
    derivatives: [
      "AV nodal tissue — delays impulse between atria and ventricles",
      "Compact node → bundle of His",
      "Dual AV nodal pathways (fast and slow) in some patients — substrate for AVNRT",
    ],
    functionSummary:
      "Only normal electrical connection between atria and ventricles — slows conduction (~100 ms delay) and prevents 1:1 conduction of rapid atrial arrhythmias; intrinsic junctional pacemaker if higher pacemakers fail.",
    commonPathologies: [
      "AV nodal reentrant tachycardia (AVNRT)",
      "First-degree AV block — prolonged PR interval",
      "Mobitz I (Wenckebach) — usually AV nodal block",
      "Inferior MI — RCA supplies AV node → bradycardia/heart block",
      "Lyme carditis — AV block",
      "Digoxin toxicity — increased vagal tone + direct AV nodal depression",
    ],
    step1Pearls: [
      "AV node delays impulse — PR interval on ECG",
      "Koch triangle boundaries: coronary sinus, tendon of Todaro, septal tricuspid annulus",
      "Adenosine blocks AV node — terminates AVNRT, diagnostic for SVT",
      "Inferior MI → AV block (RCA supplies AV node in most people)",
      "Mobitz I = Wenckebach at AV node; Mobitz II = infranodal (His-Purkinje)",
      "AV node ablation + pacemaker for refractory AF rate control (destroys AV conduction)",
    ],
    pediatrics:
      "Congenital complete heart block from maternal anti-Ro/La antibodies damages fetal AV node; neonatal junctional escape rhythm may require pacing.",
  },
  {
    id: "bundle-of-his",
    name: "Bundle of His",
    etymology:
      "eponym: Wilhelm His Jr. + Latin fasciculus = little bundle — specialized atrioventricular bundle connecting the AV node to the right and left bundle branches through the fibrous cardiac skeleton",
    aliases: [
      "bundle of his",
      "bundles of his",
      "his bundle",
      "his bundles",
      "av bundle",
      "av bundles",
      "atrioventricular bundle",
      "atrioventricular bundles",
      "common bundle",
      "common bundles",
      "bundle of his av junction",
      "his common bundle",
      "penetrating bundle",
      "penetrating atrioventricular bundle",
    ],
    germLayer: "Mesoderm (neural crest–derived conduction tissue)",
    origin:
      "Continuation of the compact AV node penetrating the central fibrous body (cardiac skeleton) at the membranous interventricular septum — bifurcates into right and left bundle branches on the crest of the muscular interventricular septum.",
    derivatives: [
      "Right bundle branch — courses along right side of interventricular septum toward RV",
      "Left bundle branch — divides into anterior and posterior fascicles on left septum",
      "Connection between AV nodal tissue and infranodal Purkinje network",
    ],
    functionSummary:
      "Rapidly conducts the delayed AV nodal impulse through the insulated bundle into the interventricular septum — only normal pathway for ventricular activation after AV nodal delay; injury causes infranodal block with wide QRS escape rhythms.",
    commonPathologies: [
      "Mobitz II second-degree AV block — infranodal (His/bundle branch level)",
      "Third-degree (complete) heart block with wide ventricular escape",
      "Lenègre/Lev degenerative fibrosis involving His bundle",
      "Surgical or catheter trauma near membranous septum",
      "Infiltrative disease (sarcoidosis, amyloidosis)",
    ],
    step1Pearls: [
      "Bundle of His = AV node → septum → right and left bundle branches",
      "Penetrates fibrous cardiac skeleton — only electrical bridge at AV canal",
      "Infranodal block (His/bundle branches) → Mobitz II, wide QRS escape in complete block",
      "vs AV node — nodal block gives Mobitz I and narrow QRS escape",
      "Right bundle on right septum; left bundle fans into anterior/posterior fascicles",
      "Part of His-Purkinje system — see dedicated entry for full conduction network",
      "Lev/Lenègre disease — fibrosis affects His bundle and branches",
    ],
    pediatrics:
      "Congenital complete heart block often reflects fetal AV nodal injury (anti-Ro/La); wide-complex neonatal escape suggests infranodal (His-Purkinje) disease requiring permanent pacing.",
  },
  {
    id: "his-purkinje-system",
    name: "His-Purkinje System",
    etymology:
      "eponym: Wilhelm His Jr. + eponym: Johannes Evangelista Purkinje + English system = specialized ventricular conduction network",
    aliases: [
      "his-purkinje system",
      "his purkinje system",
      "his-purkinje",
      "his purkinje",
      "his bundle and purkinje fibers",
      "bundle of his and purkinje network",
      "ventricular conduction system",
      "infranodal conduction system",
      "specialized conduction system",
      "purkinje network",
    ],
    germLayer: "Mesoderm (neural crest–derived conduction cells)",
    origin:
      "AV node continues as the bundle of His penetrating the fibrous cardiac skeleton; bifurcates into right and left bundle branches coursing along the interventricular septum, then ramifies into subendocardial Purkinje fibers distributing impulses rapidly to ventricular myocardium.",
    derivatives: [
      "Bundle of His (common bundle)",
      "Right bundle branch",
      "Left bundle branch (anterior and posterior fascicles)",
      "Subendocardial Purkinje fiber network",
    ],
    functionSummary:
      "Rapidly conducts depolarization from AV node to ventricular myocardium — synchronizes ventricular contraction; injury causes bundle branch block, wide QRS, and Mobitz II / third-degree block.",
    commonPathologies: [
      "Right or left bundle branch block",
      "Mobitz II second-degree AV block — infranodal",
      "Third-degree (complete) heart block with wide escape rhythm",
      "Trifascicular block — risk of complete heart block",
      "Lenègre/Lev disease — degenerative conduction fibrosis",
    ],
    step1Pearls: [
      "His-Purkinje = infranodal conduction — bundle of His → bundle branches → Purkinje fibers",
      "Wide QRS escape in complete heart block → ventricular (Purkinje) escape below AV node",
      "Mobitz II and complete heart block with wide QRS → His-Purkinje disease → pacemaker",
      "RBBB — V1 RSR' (rabbit ears); LBBB — broad notched R in V5-V6",
      "Bifascicular block (RBBB + LAFB) + PR prolongation = trifascicular block",
      "vs AV nodal block — narrow QRS escape, Mobitz I pattern",
    ],
    pediatrics:
      "Congenital complete heart block may be isolated or with structural heart disease; wide-complex neonatal escape suggests infranodal disease — permanent pacemaker often required.",
  },
  {
    id: "papillary-muscle",
    name: "Papillary Muscle",
    etymology: "Latin papilla = nipple + Latin musculus = little mouse/muscle",
    aliases: [
      "papillary muscle",
      "papillary muscles",
      "ventricular papillary muscle",
      "ventricular papillary muscles",
      "papillary musculature",
    ],
    germLayer: "Mesoderm",
    origin:
      "Muscular projections from the ventricular myocardium that anchor the chordae tendineae to the atrioventricular valve leaflets — preventing prolapse of the mitral and tricuspid valves into the atria during ventricular systole.",
    derivatives: [
      "Anterolateral and posteromedial papillary muscles (left ventricle — mitral valve)",
      "Anterior, posterior, and septal papillary muscles (right ventricle — tricuspid valve)",
      "Chordae tendineae attachments",
    ],
    functionSummary:
      "Contract with ventricular systole to tense chordae tendineae and hold AV valve leaflets in place, preventing regurgitation into the atria.",
    commonPathologies: [
      "Ischemic papillary muscle rupture post-MI (3–5 days) → acute mitral regurgitation",
      "Ischemic papillary muscle dysfunction without rupture → mitral regurgitation",
      "Endocarditis involving chordae/papillary apparatus",
      "Mitral valve prolapse — redundant chordae and myxomatous leaflets",
    ],
    step1Pearls: [
      "Papillary muscles + chordae tendineae tether AV valve leaflets during systole",
      "Posteromedial papillary muscle — single blood supply (PDA), more vulnerable to rupture",
      "Anterolateral — dual supply (LAD + circumflex)",
      "Papillary muscle rupture 3–5 days post-MI → acute severe MR, pulmonary edema",
      "Acute MR murmur + flash pulmonary edema after recent MI → think papillary rupture",
    ],
    pediatrics:
      "Papillary muscle rupture is an adult post-MI complication; pediatric mitral regurgitation more often congenital mitral valve disease or rheumatic fever rather than ischemic papillary rupture.",
  },
  {
    id: "valve-commissures",
    name: "Valve Commissures",
    etymology:
      "Latin commissura = a joining together + Latin valva = folding door",
    aliases: [
      "valve commissure",
      "valve commissures",
      "valvular commissure",
      "valvular commissures",
      "commissure of valve",
      "commissures of valve",
      "commissures of the valve",
      "commissures of heart valve",
      "heart valve commissure",
      "heart valve commissures",
      "atrioventricular valve commissure",
      "atrioventricular valve commissures",
      "av valve commissure",
      "av valve commissures",
      "semilunar valve commissure",
      "semilunar valve commissures",
      "mitral commissure",
      "mitral commissures",
      "aortic commissure",
      "aortic commissures",
    ],
    germLayer: "Mesoderm",
    origin:
      "Form at the junction where adjacent valve cusps or leaflets meet and fuse along the annulus during valvulogenesis — defining the coaptation lines of atrioventricular (mitral, tricuspid) and semilunar (aortic, pulmonic) valves.",
    derivatives: [
      "Mitral valve — anterolateral and posteromedial commissures between anterior and posterior leaflets",
      "Tricuspid valve — commissures separating anterior, posterior, and septal leaflets",
      "Aortic and pulmonic valves — commissures between three semilunar cusps at the sinotubular junction",
    ],
    functionSummary:
      "Anatomic junction lines where valve leaflets/cusps meet and coapt during closure — integrity of commissures maintains valve competence; fusion or malformation alters orifice geometry and hemodynamics.",
    commonPathologies: [
      'Rheumatic mitral stenosis — commissural fusion → narrowed orifice, "fish-mouth" or "buttonhole" mitral valve',
      "Congenital bicuspid aortic valve — fusion of two cusps at a commissure",
      "Rheumatic aortic or tricuspid valvulitis — commissural thickening and fusion",
      "Post-inflammatory commissural scarring after endocarditis",
    ],
    step1Pearls: [
      "Commissure = where adjacent valve leaflets/cusps join at the annulus",
      "Rheumatic MS — commissural fusion is the hallmark lesion → ↓ orifice area, opening snap, diastolic rumble",
      "Mitral valve has two commissures (anterolateral, posteromedial); tricuspid has three",
      "Bicuspid aortic valve — congenital fusion of two cusps at one commissure → early AS/AR",
      "vs mitral valve prolapse — leaflet redundancy and prolapse, not commissural fusion",
      "vs calcific AS — nodular cusp calcification in elderly trileaflet valve, not primarily rheumatic commissural fusion",
    ],
    pediatrics:
      "Rheumatic fever–related commissural fusion remains a cause of mitral stenosis in endemic regions; congenital bicuspid aortic valve (commissural fusion) may present with ejection click in childhood.",
  },
  {
    id: "appendix",
    name: "Appendix",
    etymology: "Latin appendere = hang from",
    aliases: ["appendix", "vermiform appendix"],
    germLayer: "Endoderm",
    origin:
      "Midgut derivative; blind pouch from the cecal bud during intestinal rotation.",
  },
  {
    id: "tonsils",
    name: "Tonsils",
    etymology: "Latin tonsillae = tonsils",
    aliases: ["tonsil", "tonsils", "palatine tonsil"],
    germLayer: "Endoderm",
    origin:
      "Palatine tonsils from second pharyngeal pouch endoderm invading surrounding mesenchyme.",
  },
  {
    id: "salivary-gland",
    name: "Salivary Gland",
    etymology:
      "Latin saliva = spittle + glans = acorn/gland — exocrine gland secreting saliva into the oral cavity for lubrication, digestion, and antimicrobial defense",
    aliases: [
      "salivary gland",
      "salivary glands",
      "major salivary gland",
      "major salivary glands",
      "salivary glandular",
    ],
    germLayer: "Ectoderm / Endoderm",
    origin:
      "Major glands — parotid from stomodeum ectoderm; submandibular and sublingual from floor-of-mouth endoderm; numerous minor glands scattered in oral mucosa.",
    derivatives: [
      "Parotid gland — serous, amylase-rich (Stensen duct)",
      "Submandibular gland — mixed serous/mucous (Wharton duct)",
      "Sublingual gland — predominantly mucous (Bartholin/ducts of Rivinus)",
      "Minor salivary glands — labial, buccal, palatal mucosa",
    ],
    functionSummary:
      "Produces saliva (water, mucins, amylase, lysozyme, bicarbonate) for lubrication, starch digestion initiation, antimicrobial defense, and enamel buffering.",
    commonPathologies: [
      "Mumps parotitis",
      "Sjögren syndrome — autoimmune destruction of lacrimal and salivary glands",
      "Sialolithiasis and sialadenitis",
      "Salivary gland tumors — pleomorphic adenoma, Warthin tumor",
      "Xerostomia from anticholinergics or radiation",
    ],
    step1Pearls: [
      "Three major pairs — parotid (serous), submandibular (mixed), sublingual (mucous)",
      "Parotid secretomotor — CN IX → otic ganglion → auriculotemporal nerve (not CN VII, which only traverses parotid)",
      "Submandibular/sublingual secretomotor — CN VII chorda tympani → submandibular ganglion",
      "Mumps — painful bilateral parotitis; prevented by MMR",
      "Sjögren — dry eyes + dry mouth + anti-Ro/SSA, anti-La/SSB",
      "Amylase elevated in mumps and pancreatitis",
    ],
    pediatrics:
      "Mumps classically causes parotitis in children; MMR vaccination has greatly reduced incidence. Congenital absence or hypoplasia of salivary glands is rare but worsens oral hygiene and caries risk.",
  },
  {
    id: "parotid",
    name: "Parotid Gland",
    etymology: "Greek para = beside + ous = ear + Latin glans = acorn/gland",
    aliases: ["parotid", "parotid gland"],
    germLayer: "Ectoderm",
    origin:
      "Largest salivary gland; buds from ectodermal lining of stomodeum (primitive oral cavity).",
  },
  {
    id: "submandibular",
    name: "Submandibular Gland",
    etymology:
      "Latin sub = under + mandibula = jaw + Latin glans = acorn/gland",
    aliases: ["submandibular gland", "submandibular"],
    germLayer: "Endoderm",
    origin: "Endodermal bud from floor of mouth (oral cavity endoderm).",
  },
  {
    id: "sublingual-gland",
    name: "Sublingual Gland",
    etymology:
      "Latin sub = under + lingua = tongue + Latin glans = acorn/gland",
    aliases: [
      "sublingual gland",
      "sublingual glands",
      "sublingual salivary gland",
      "sublingual salivary glands",
    ],
    germLayer: "Endoderm",
    origin:
      "Smallest major salivary gland; endodermal buds from floor of mouth (sublingual folds) lateral to submandibular duct; predominantly mucous acini.",
  },
  {
    id: "suprarenal",
    name: "Suprarenal Gland",
    etymology:
      "Latin supra = above + renal = kidney + Latin glans = acorn/gland",
    aliases: [
      "suprarenal",
      "suprarenal gland",
      "adrenal gland",
      "adrenal",
      "adrenal glands",
    ],
    germLayer: "Mesoderm / Neural crest",
    origin:
      "Synonymous with adrenal gland; cortex from mesoderm, medulla from neural crest.",
  },
  {
    id: "clitoris",
    name: "Clitoris",
    etymology: "Greek kleitoris = little hill/key",
    aliases: ["clitoris"],
    germLayer: "Ectoderm",
    origin:
      "Genital tubercle (surface ectoderm and mesenchyme); homologous to glans penis.",
  },
  {
    id: "penis",
    name: "Penis",
    etymology: "Latin penis = tail",
    aliases: ["penis", "penile"],
    germLayer: "Ectoderm",
    origin:
      "Genital tubercle enlarges under dihydrotestosterone; spongy urethra forms from ventral fusion of urethral (urogenital) folds.",
  },
  {
    id: "placenta",
    name: "Placenta",
    etymology: "Greek plakous = flat cake",
    aliases: ["placenta", "placental"],
    germLayer: "Trophoblast / Mesoderm",
    origin:
      "Fetal component from trophoblast and extraembryonic mesoderm; maternal decidua from endometrium.",
  },
  {
    id: "amnion",
    name: "Amnion",
    etymology:
      "Greek amnion = lamb skin — inner membrane enclosing the amniotic cavity and fluid",
    aliases: [
      "amnion",
      "amnions",
      "amniotic",
      "amniotic sac",
      "amniotic sacs",
      "amniotic membrane",
      "amniotic membranes",
      "amniotic cavity",
      "amniotic fluid",
      "amniotic fluids",
      "amniotic sac membrane",
    ],
    germLayer: "Extraembryonic ectoderm (amniotic epithelium) + mesoderm",
    origin:
      "Amniotic cavity lined by amnion forms early in embryogenesis; amniotic fluid is initially transudate then predominantly fetal urine and lung liquid with fetal swallowing and intramembranous absorption maintaining volume.",
  },
  {
    id: "umbilical-cord",
    name: "Umbilical Cord",
    etymology: "Latin umbilicus = navel + Latin chorda = string",
    aliases: ["umbilical cord"],
    germLayer: "Mesoderm",
    origin:
      "Extraembryonic mesoderm surrounds allantois and vitelline vessels; contains two arteries and one vein.",
  },
  {
    id: "yolk-sac",
    name: "Yolk Sac",
    etymology:
      "Old English geoloca = yolk + Old English sæc = bag — extraembryonic endoderm-lined sac providing early embryonic nutrition and the site of first hematopoiesis",
    aliases: [
      "yolk sac",
      "yolk sacs",
      "umbilical vesicle",
      "umbilical vesicles",
      "vitelline sac",
      "vitelline sacs",
      "primary yolk sac",
      "secondary yolk sac",
      "exocoelomic cyst",
      "exocoelomic cysts",
    ],
    germLayer: "Extraembryonic endoderm (lining) with extraembryonic mesoderm",
    origin:
      "Forms during week 2–3 from hypoblast-related extraembryonic endoderm as the primary nutrition and hematopoietic organ before placental function is established; connected to the midgut by the vitelline duct; gives rise to the allantoic diverticulum; diminishes as placental circulation assumes nutrient and gas exchange.",
    derivatives: [
      "Primordial germ cells — originate in yolk sac endoderm, migrate to gonadal ridge",
      "First hematopoietic stem cells — yolk sac blood islands (mesoderm) weeks 3–8",
      "Vitelline (omphalomesenteric) duct — connects yolk sac to midgut until obliteration",
      "Allantois — arises from yolk sac endoderm, contributes to urachus and umbilical cord vessels",
      "No significant adult structure after involution — remnants cause congenital anomalies if ducts persist",
    ],
    functionSummary:
      "Early embryonic nutrient source, site of initial blood cell formation, and origin of primordial germ cells; produces alpha-fetoprotein (AFP) during fetal development; largely replaced by placental function after the embryonic period.",
    commonPathologies: [
      "Vitelline duct remnants — Meckel diverticulum, vitelline fistula, cyst, sinus (failure of duct obliteration)",
      "Yolk sac tumor (endodermal sinus tumor) — malignant germ cell tumor with ↑ AFP (testis, ovary)",
      "Abnormal yolk sac on early pregnancy ultrasound — miscarriage risk marker",
      "Meckel diverticulum bleeding from vitelline duct remnant, not yolk sac tissue per se",
    ],
    step1Pearls: [
      "Yolk sac = first site of hematopoiesis (blood islands) weeks 3–8, then liver → spleen → bone marrow",
      "Primordial germ cells arise in yolk sac endoderm and migrate to gonadal ridge",
      "Vitelline duct connects yolk sac to midgut — obliterates by ~week 7; persistence → Meckel diverticulum",
      "Allantois buds from yolk sac — urachus remnant if not obliterated",
      "AFP produced by fetal yolk sac and liver — ↑ in yolk sac tumor and HCC",
      "vs amnion — amnion surrounds embryo in amniotic fluid; yolk sac is separate extraembryonic structure early",
      "Fetal hematopoiesis sequence: yolk sac → liver → spleen → bone marrow",
    ],
    pediatrics:
      "Meckel diverticulum and vitelline fistula are pediatric consequences of incomplete vitelline duct obliteration from the yolk sac connection. Yolk sac tumors (endodermal sinus tumors) are pediatric germ cell malignancies with markedly elevated AFP. Early pregnancy yolk sac visibility on ultrasound confirms intrauterine location.",
  },
  {
    id: "allantois",
    name: "Allantois",
    etymology: "Greek allantoeides = sausage-shaped",
    aliases: [
      "allantois",
      "allantoic",
      "allantoic sac",
      "allantoic diverticulum",
    ],
    germLayer: "Endoderm / Mesoderm",
    origin:
      "Endoderm-lined diverticulum from the yolk sac that extends into the connecting stalk; mesoderm surrounds the allantoic vessels; early waste exchange and later contributes to the urachus and umbilical cord vessels.",
  },
  {
    id: "omphalomesenteric-duct",
    name: "Omphalomesenteric Duct",
    etymology:
      "Greek omphalos = navel + mesenterion = middle intestine + Latin ductus = channel — embryonic vitelline duct connecting yolk sac to midgut",
    aliases: [
      "omphalomesenteric duct",
      "omphalomesenteric ducts",
      "omphalomesenteric duct remnant",
      "yolk stalk",
      "yolk stalks",
      "vitelloumbilical duct",
      "omphalomesenteric vitelline duct",
    ],
    germLayer: "Endoderm (duct lining) with splanchnic mesoderm",
    origin:
      "Temporary embryonic connection between the yolk sac and midgut lumen during early development — normally obliterates completely by ~week 7; persistence or partial obliteration leaves vitelline duct remnants.",
    derivatives: [
      "Normally obliterates — no adult structure",
      "Meckel diverticulum — ileal outpouching from persistent duct (most common remnant)",
      "Vitelline fistula — patent duct from umbilicus to ileum",
      "Vitelline cyst — remnant between ileum and umbilicus on fibrous band",
      "Omphalomesenteric sinus — umbilical end persistence draining mucus",
    ],
    functionSummary:
      "Early embryonic channel allowing yolk sac communication with the developing midgut; obliteration after intestinal incorporation makes it a source of congenital anomalies when remnants persist.",
    commonPathologies: [
      "Meckel diverticulum — true diverticulum (rule of 2s)",
      "Vitelline fistula — meconium from umbilicus",
      "Vitelline cyst or sinus — umbilical discharge or infection",
      "Fibrous band — volvulus or internal hernia risk",
      "Ectopic gastric mucosa in Meckel — painless lower GI bleeding in child",
    ],
    step1Pearls: [
      "Omphalomesenteric duct = yolk stalk; same structure as vitelline duct (see dedicated entry)",
      "Normally obliterates by week 7 — persistence → Meckel diverticulum (most common congenital GI anomaly)",
      "Meckel rule of 2s: 2% population, 2 feet from ileocecal valve, 2 inches, 2 types ectopic tissue, often <2 years at presentation",
      "Technetium-99m pertechnetate scan detects ectopic gastric mucosa in Meckel",
      "vs urachus — allantoic remnant between bladder and umbilicus, not midgut connection",
      "vs false diverticulum — Meckel is true diverticulum (all bowel wall layers)",
    ],
    pediatrics:
      "Meckel diverticulum is the classic vitelline duct remnant — painless rectal bleeding from ectopic gastric mucosa in toddler most common presentation. Patent vitelline fistula presents with meconium at umbilicus in neonate.",
  },
  {
    id: "urachus",
    name: "Urachus",
    etymology: "Greek oura = tail + Latin -chus = vessel-like structure",
    aliases: [
      "urachus",
      "urachal",
      "urachal remnant",
      "median umbilical ligament",
      "median umbilical ligaments",
    ],
    germLayer: "Endoderm / Mesoderm",
    origin:
      "Intraembryonic remnant of the allantois between the fetal bladder dome and umbilicus; normally obliterates to form the median umbilical ligament; failure of closure → patent urachus, urachal cyst, sinus, or diverticulum.",
  },
  {
    id: "buccal-mucosa",
    name: "Buccal Mucosa",
    etymology: "Latin bucca = cheek + Latin mucosa = mucous membrane",
    aliases: [
      "buccal mucosa",
      "buccal mucosae",
      "buccal mucous membrane",
      "buccal mucous membranes",
      "inner cheek mucosa",
      "cheek mucosa",
      "oral buccal mucosa",
      "mucosa of the cheek",
      "mucosa of cheek",
    ],
    germLayer: "Ectoderm",
    origin:
      "Non-keratinized stratified squamous epithelium lining the inner surface of the cheeks (between the lips and alveolar ridges), derived from stomodeum (primitive oral cavity) ectoderm; continuous with labial and gingival mucosa; contains minor salivary glands and rich vascular supply.",
    derivatives: [
      "Minor buccal salivary glands",
      "Stensen (parotid) duct papilla opening opposite upper second molar",
      "Fordyce granules (ectopic sebaceous glands)",
    ],
  },
  {
    id: "gingiva-oral",
    name: "Gingiva (oral)",
    etymology: "Latin gingiva = gum around teeth",
    aliases: ["gingiva", "gingivae", "oral gingiva", "gums", "gum tissue"],
    germLayer: "Ectoderm / Neural crest mesenchyme",
    origin:
      "Oral epithelium derives from surface ectoderm; underlying connective tissue largely from cranial neural crest-derived ectomesenchyme around developing teeth.",
    derivatives: [
      "Keratinized stratified squamous oral mucosa",
      "Junctional epithelium around tooth enamel",
      "Lamina propria over alveolar bone",
    ],
  },
];

const ORGAN_DETAILS: Record<
  string,
  Pick<
    OrganEntry,
    | "functionSummary"
    | "commonPathologies"
    | "cancerMetastasis"
    | "step1Pearls"
    | "pediatrics"
  >
> = {
  heart: {
    functionSummary:
      "Pumps blood through pulmonary and systemic circuits; coordinated electrical conduction produces effective cardiac output.",
    commonPathologies: [
      "Myocardial infarction",
      "Heart failure",
      "Arrhythmias",
      "Valvular disease",
      "Congenital septal defects",
    ],
    step1Pearls: [
      "Coronary occlusion causes coagulative necrosis",
      "Left-sided failure causes pulmonary edema; right-sided failure causes peripheral edema",
      "S3 = volume overload; S4 = stiff ventricle",
    ],
    pediatrics:
      "Congenital heart disease often presents with cyanosis, poor feeding, failure to thrive, or a murmur rather than adult angina symptoms.",
  },
  aorta: {
    functionSummary:
      "Elastic conduit that buffers systolic ejection and distributes oxygenated blood to systemic circulation.",
    commonPathologies: [
      "Atherosclerosis",
      "Aortic aneurysm",
      "Aortic dissection",
      "Coarctation of the aorta",
      "Aortic regurgitation/stenosis",
    ],
    step1Pearls: [
      "Cystic medial degeneration predisposes to dissection in Marfan syndrome",
      "Coarctation causes upper-extremity hypertension and rib notching",
      "AAA classically occurs below renal arteries",
    ],
  },
  "external-iliac-artery": {
    functionSummary:
      "Major arterial inflow to the lower limb; becomes the femoral artery after crossing the inguinal ligament and gives rise to inferior epigastric and deep circumflex iliac branches that supply the anterior abdominal wall.",
    commonPathologies: [
      "Atherosclerotic occlusive disease",
      "Iatrogenic injury during pelvic or inguinal surgery",
      "Compression by enlarged lymph nodes or mass",
      "Endarterectomy or bypass target in limb ischemia",
    ],
    step1Pearls: [
      "Common iliac bifurcates into external + internal iliac at pelvic brim (~L4–S1)",
      "External iliac → femoral artery at midinguinal point deep to inguinal ligament",
      "Inferior epigastric artery arises from external iliac — landmark for deep inguinal ring and laparoscopic trocar injury risk",
      "Deep circumflex iliac artery supplies iliac fossa/anterolateral abdominal wall",
      "vs internal iliac — external iliac continues to leg; internal iliac stays in pelvis",
      "May-Thurner — left common iliac vein compressed by right common iliac artery (not external iliac itself)",
    ],
  },
  "internal-iliac-artery": {
    functionSummary:
      "Primary arterial supply to pelvic viscera (bladder, rectum, reproductive organs), gluteal region, perineum, and medial thigh via anterior and posterior trunk branches.",
    commonPathologies: [
      "Pelvic hemorrhage from trauma or obstetric laceration",
      "Atherosclerosis (less common than systemic vessels)",
      "Iatrogenic injury during pelvic surgery",
      "Uterine artery embolization target for fibroids/postpartum bleeding",
    ],
    step1Pearls: [
      "Internal iliac = hypogastric artery — supplies pelvic organs",
      "Anterior division — obturator, internal pudendal, superior/inferior gluteal, middle rectal, vesical, uterine/vaginal",
      "Posterior division — iliolumbar, lateral sacral",
      "Ligation of internal iliac arteries can control catastrophic pelvic hemorrhage",
      "Uterine artery crosses ureter ('water under the bridge') — injury risk in hysterectomy",
      "vs external iliac — internal iliac branches within pelvis; external iliac becomes femoral",
      "Superior hypogastric plexus lies near aortic bifurcation — autonomic, not the internal iliac artery itself",
    ],
    pediatrics:
      "Pelvic fractures and obstetric trauma can avulse internal iliac branches; neonatal/adult anatomy is the same — embolization or surgical ligation is used for life-threatening pelvic bleeding.",
  },
  "internal-pudendal-artery": {
    functionSummary:
      "Supplies the perineum, external genitalia, anal canal, and erectile tissues (bulbar, deep, and dorsal penile/clitoral arteries) after exiting and re-entering the pelvis around the ischial spine.",
    commonPathologies: [
      "Hemorrhage from perineal laceration or pelvic fracture",
      "Erectile dysfunction after pelvic/perineal vascular injury",
      "Iatrogenic injury during perineal surgery",
    ],
    step1Pearls: [
      "Internal pudendal artery branches from anterior division of internal iliac",
      "Exits greater sciatic foramen → around ischial spine → lesser sciatic foramen → pudendal (Alcock) canal",
      "Runs with pudendal nerve in Alcock canal — artery supplies blood; nerve is somatic/autonomic target for block",
      "Terminal branches — inferior rectal, perineal, deep/dorsal arteries of penis/clitoris",
      "Bulbar/deep penile arteries critical for erection — injury in pelvic fracture or prostate surgery",
      "vs femoral artery — lower limb inflow; pudendal is pelvic/perineal branch of internal iliac",
      "vs inferior epigastric — anterior abdominal wall; not perineal supply",
    ],
    pediatrics:
      "Obstetric perineal tears can involve pudendal artery branches; same course in children — erectile tissue vascular supply becomes clinically relevant after puberty.",
  },
  "obturator-artery": {
    functionSummary:
      "Supplies the obturator externus and adductor muscles of the medial thigh after passing through the obturator canal on the lateral pelvic wall.",
    commonPathologies: [
      "Obturator canal compression",
      "Corona mortis bleeding during pelvic/inguinal surgery",
      "Iatrogenic injury during total hip arthroplasty or pelvic surgery",
    ],
    step1Pearls: [
      "Obturator artery usually from anterior division of internal iliac",
      "Passes through obturator canal with obturator nerve and vein",
      "Supplies adductor compartment (adductor longus/brevis/magnus, gracilis, obturator externus)",
      "Corona mortis — abnormal anastomosis between obturator and inferior epigastric arteries; can hemorrhage during hernia repair",
      "Obturator hernia passes through obturator canal — elderly thin women; bowel in canal, not artery pathology",
      "vs femoral artery — anterior thigh; obturator supplies medial/adductor compartment",
      "vs internal pudendal — both from internal iliac anterior division but different exit (obturator canal vs sciatic foramina)",
    ],
  },
  "common-cardinal-veins": {
    functionSummary:
      "Embryonic paired venous channels (ducts of Cuvier) draining body into sinus venosus — right common cardinal vein forms the SVC; left contributes to coronary sinus.",
    commonPathologies: [
      "Abnormal venous return development",
      "Total anomalous pulmonary venous return (distinct pathway)",
    ],
    step1Pearls: [
      "Right common cardinal + right anterior cardinal vein → SVC",
      "Left horn of sinus venosus → coronary sinus",
      "Anterior and posterior cardinal veins unite to form common cardinal veins",
      "Failure of left cardinal system regression contributes to venous anatomy variants",
    ],
    pediatrics:
      "Congenital venous anomalies (persistent left SVC, TAPVR) trace to abnormal cardinal vein development.",
  },
  "pulmonary-artery": {
    functionSummary:
      "Carries deoxygenated blood from right ventricle to lungs for gas exchange.",
    commonPathologies: [
      "Pulmonary embolism",
      "Pulmonary hypertension",
      "Pulmonic stenosis",
      "Patent ductus arteriosus shunts",
    ],
    step1Pearls: [
      "Pulmonary arteries are low-pressure, high-compliance vessels",
      "Pulmonary emboli increase dead space and can cause acute right heart strain",
      "Eisenmenger physiology reverses left-to-right shunts to right-to-left",
    ],
  },
  "pulmonary-vein": {
    functionSummary: "Returns oxygenated blood from lungs to left atrium.",
    commonPathologies: [
      "Pulmonary venous congestion",
      "Atrial fibrillation trigger foci",
      "Total anomalous pulmonary venous return",
    ],
    step1Pearls: [
      "Pulmonary veins are the usual ablation target in atrial fibrillation",
      "Left heart failure raises pulmonary venous pressure -> pulmonary edema",
    ],
    pediatrics:
      "Total anomalous pulmonary venous return is a cyanotic congenital lesion that requires mixing through ASD/PFO/PDA.",
  },
  "pulmonary-vein-ostia": {
    functionSummary:
      "Posterior left atrial openings where pulmonary veins drain oxygenated blood into the LA; venoatrial junction surrounded by myocardial sleeves.",
    commonPathologies: [
      "Atrial fibrillation (ectopic foci near ostia)",
      "Anomalous pulmonary venous connection variants",
      "Pulmonary venous congestion in left heart failure",
    ],
    step1Pearls: [
      "Classic pattern — four separate ostia on posterior LA wall (LSPV, LIPV, RSPV, RIPV)",
      "Common variant — left common pulmonary vein (single left ostium)",
      "Myocardial sleeves extend 1–3 cm into proximal PVs — AF ablation targets PV antrum/ostia",
      "vs TAPVR — pulmonary veins drain abnormally to systemic veins, not LA ostia",
      "Ostial anatomy variable — CT/MRI mapping before AF ablation",
    ],
    pediatrics:
      "TAPVR involves abnormal drainage of pulmonary veins to systemic venous circulation rather than normal LA ostia; obstructed TAPVR presents critically in neonates.",
  },
  svc: {
    functionSummary:
      "Returns venous blood from head, neck, upper limbs, and upper thorax to right atrium.",
    commonPathologies: [
      "SVC syndrome",
      "Thrombosis from central lines",
      "Mediastinal mass compression",
    ],
    step1Pearls: [
      "Facial plethora, upper-extremity swelling, and distended chest veins point to SVC obstruction",
      "Bronchogenic carcinoma and lymphoma are classic causes",
    ],
  },
  ivc: {
    functionSummary:
      "Returns venous blood from lower body and abdominal viscera to right atrium.",
    commonPathologies: [
      "IVC thrombosis",
      "Budd-Chiari outflow obstruction",
      "Compression by pregnancy or mass",
    ],
    step1Pearls: [
      "IVC filters trap emboli from lower-extremity DVT",
      "Budd-Chiari causes painful hepatomegaly, ascites, and hepatic congestion",
    ],
  },
  "ductus-arteriosus": {
    functionSummary:
      "Fetal shunt from pulmonary artery to aorta that bypasses high-resistance fetal lungs.",
    commonPathologies: [
      "Patent ductus arteriosus",
      "Ductal-dependent congenital heart disease",
      "Premature closure",
    ],
    step1Pearls: [
      "PGE1 keeps ductus open; indomethacin/NSAIDs close it",
      "PDA causes continuous machine-like murmur and left-to-right shunt",
      "Postnatal remnant = ligamentum arteriosum",
    ],
    pediatrics:
      "Premature infants have higher PDA risk; some cyanotic lesions require prostaglandin to maintain ductal flow until repair.",
  },
  "ductus-venosus": {
    functionSummary:
      "Fetal shunt from umbilical vein to IVC that bypasses the liver and delivers oxygenated placental blood to the heart and brain.",
    commonPathologies: [
      "Ductus venosus agenesis",
      "Persistent ductus venosus",
      "Abnormal fetal umbilical venous Doppler",
    ],
    step1Pearls: [
      "Most oxygenated fetal blood: umbilical vein → ductus venosus → IVC → foramen ovale → left heart → brain",
      "Closes after birth → ligamentum venosum on visceral surface of liver",
      "vs ductus arteriosus (PA → aorta) and vs umbilical vein → ligamentum teres",
    ],
    pediatrics:
      "Normal in fetus; obliterates postnatally. Agenesis is rare and associated with fetal hydrops — not the same as patent ductus arteriosus.",
  },
  lungs: {
    functionSummary:
      "Perform gas exchange, acid-base regulation via CO2 elimination, and pulmonary vascular filtering/metabolism.",
    commonPathologies: [
      "Asthma",
      "COPD",
      "Pneumonia",
      "Pulmonary edema",
      "ARDS",
      "Pulmonary embolism",
    ],
    step1Pearls: [
      "Type II pneumocytes make surfactant and regenerate alveolar epithelium",
      "V/Q mismatch is commonest hypoxemia mechanism",
      "Low DLCO suggests diffusion barrier or emphysema",
    ],
    pediatrics:
      "Neonatal respiratory distress syndrome reflects surfactant deficiency; bronchiolitis from RSV is common in infants.",
  },
  lingula: {
    functionSummary:
      "Inferior projection of the left upper lobe — functionally analogous to the right middle lobe — containing lingular bronchi and segments that participate in gas exchange and mucociliary clearance.",
    commonPathologies: [
      "Lingular pneumonia",
      "Aspiration to dependent lingular segment",
      "Bronchiectasis involving lingula",
      "Tuberculosis or malignancy localizing to left upper lobe/lingula",
    ],
    step1Pearls: [
      "Left lung has 2 lobes (upper + lower) but lingula is tongue-like projection of upper lobe — analogous to right middle lobe",
      "Separated from rest of left upper lobe by lingular fissure; overlies cardiac notch",
      "Pneumonia may localize to lingula on chest X-ray as retrocardiac opacity",
      "Right main bronchus is more vertical — aspiration favors right lower lobe when upright; supine aspiration → RUL and RLL",
      "Lingula is left upper lobe structure — can consolidate with left-sided dependent aspiration or lingular pneumonia",
      "Superior and inferior lingular segments (left upper lobe) — know for localization on imaging",
      "vs cerebellar lingula — midline cerebellar vermis structure, not pulmonary anatomy",
    ],
    pediatrics:
      "Same bronchopulmonary segment anatomy in children; lingular consolidation can appear on pediatric pneumonia films as left retrocardiac opacity.",
  },
  larynx: {
    functionSummary:
      "Protects airway during swallowing and produces voice through vocal fold vibration.",
    commonPathologies: [
      "Croup",
      "Epiglottitis",
      "Vocal cord paralysis",
      "Laryngeal cancer",
    ],
    step1Pearls: [
      "Recurrent laryngeal nerve injury causes hoarseness",
      "Croup causes inspiratory stridor and barking cough",
      "Epiglottitis is a drooling tripod emergency",
    ],
    pediatrics:
      "Croup is usually parainfluenza; Hib vaccine sharply reduced pediatric epiglottitis.",
  },
  pharynx: {
    functionSummary:
      "Muscular tube connecting nasal/oral cavities to larynx and esophagus; conducts air and food and hosts lymphoid tissue for mucosal immunity.",
    commonPathologies: [
      "Pharyngitis",
      "Peritonsillar abscess",
      "Adenotonsillar hypertrophy",
      "Oropharyngeal cancer",
      "Zenker diverticulum",
    ],
    step1Pearls: [
      "Shared airway and food passage — swallowing reflex protects airway",
      "Group A strep pharyngitis can trigger rheumatic fever or PSGN",
      "Posterior pharynx lesions suggest enteroviral herpangina or HSV distribution patterns",
    ],
    pediatrics:
      "Strep pharyngitis and viral pharyngitis are common in children; peritonsillar abscess presents with trismus and uvular deviation.",
  },
  "pharyngeal-pouch": {
    functionSummary:
      "Embryologic endodermal outpocketings patterning upper airway, middle ear, tonsillar epithelium, thymus, and parathyroid development.",
    commonPathologies: [
      "DiGeorge syndrome (3rd/4th pouch failure)",
      "Branchial cleft cyst/fistula",
      "Thymic aplasia",
      "Hypoparathyroidism",
    ],
    step1Pearls: [
      "3rd pouch → inferior parathyroids + thymus; 4th pouch → superior parathyroids",
      "1st pouch → middle ear/Eustachian tube; 2nd pouch → palatine tonsil epithelium",
      "DiGeorge = failed 3rd/4th pouch → hypocalcemia, T-cell deficiency, conotruncal heart defects",
      "Pouches = endoderm; pharyngeal arches = mesoderm + neural crest (different structure)",
    ],
    pediatrics:
      "Neonatal hypocalcemic seizures and absent thymic shadow on chest X-ray point to 3rd/4th pharyngeal pouch failure (DiGeorge).",
  },
  nasopharynx: {
    functionSummary:
      "Superior pharyngeal segment connecting nasal cavity to oropharynx; conducts air, drains middle ear via Eustachian tubes, and hosts adenoidal lymphoid tissue.",
    commonPathologies: [
      "Nasopharyngeal carcinoma",
      "Adenoid hypertrophy",
      "Otitis media with effusion",
      "Juvenile nasopharyngeal angiofibroma",
    ],
    step1Pearls: [
      "EBV-associated undifferentiated nasopharyngeal carcinoma — Asian/endemic epidemiology; biopsy shows syncytial cells with lymphoid stroma",
      "Fossa of Rosenmüller is common site of origin",
      "Eustachian tube dysfunction → serous otitis media",
      "Juvenile nasopharyngeal angiofibroma — adolescent male epistaxis/obstruction",
    ],
    pediatrics:
      "Adenoid hypertrophy causes mouth breathing, snoring, and otitis media with effusion; juvenile nasopharyngeal angiofibroma occurs in adolescent males.",
  },
  oropharynx: {
    functionSummary:
      "Middle pharyngeal segment from soft palate to epiglottis — shared food and air passage with palatine tonsils and base-of-tongue lymphoid tissue.",
    commonPathologies: [
      "Streptococcal pharyngitis",
      "Peritonsillar abscess",
      "Tonsillar hypertrophy / obstructive sleep apnea",
      "HPV-associated oropharyngeal squamous cell carcinoma",
    ],
    step1Pearls: [
      "Oropharynx bounded by soft palate (superior) and epiglottis (inferior)",
      "2nd pharyngeal pouch → palatine tonsil epithelium",
      "GAS pharyngitis — treat to prevent rheumatic fever",
      "vs nasopharynx — superior segment with adenoids and Eustachian tubes",
    ],
    pediatrics:
      "Recurrent strep pharyngitis and tonsillar hypertrophy common in children; peritonsillar abscess requires drainage.",
  },
  "hypopharyngeal-mucosa": {
    functionSummary:
      "Mucosal lining of laryngopharynx (hypopharynx) guiding food around the larynx to the esophagus — stratified squamous epithelium over piriform sinuses and posterior wall; cricopharyngeus guards the inlet.",
    commonPathologies: [
      "Zenker diverticulum",
      "Hypopharyngeal squamous cell carcinoma",
      "Laryngopharyngeal reflux",
      "Foreign body in piriform sinus",
      "Caustic ingestion injury",
    ],
    step1Pearls: [
      "Hypopharyngeal mucosa herniates in Zenker through Killian triangle",
      "Piriform sinus — hypopharyngeal SCC and fish bone impaction site",
      "Epiglottis to cricoid = hypopharynx; continues as esophageal mucosa",
      "vs oropharynx — superior segment above epiglottis",
    ],
    pediatrics:
      "Foreign bodies may lodge in piriform sinuses; caustic ingestion causes severe mucosal injury in toddlers.",
  },
  trachea: {
    functionSummary:
      "Conducts air from larynx to bronchi; ciliated mucosa clears particles upward.",
    commonPathologies: [
      "Tracheoesophageal fistula",
      "Tracheomalacia",
      "Foreign body obstruction",
      "Tracheitis",
    ],
    step1Pearls: [
      "TE fistula presents with choking, coughing, cyanosis during feeds",
      "C-shaped cartilage rings keep airway patent",
      "Smoking impairs mucociliary clearance",
    ],
    pediatrics:
      "Infants with esophageal atresia/TE fistula often have polyhydramnios history and feeding-associated respiratory distress.",
  },
  bronchi: {
    functionSummary:
      "Distribute airflow through branching conducting airways; smooth muscle controls airway resistance.",
    commonPathologies: [
      "Asthma",
      "Chronic bronchitis",
      "Bronchiectasis",
      "Aspiration",
      "Foreign body",
    ],
    step1Pearls: [
      "Right main bronchus is wider, shorter, more vertical -> aspiration site",
      "Goblet cell hyperplasia defines chronic bronchitis",
      "Bronchiectasis causes permanent dilation from infection/inflammation",
    ],
    pediatrics:
      "Unilateral wheeze in a child is foreign body until proven otherwise.",
  },
  pleura: {
    functionSummary:
      "Serous membrane lowers friction and couples lung expansion to chest wall mechanics.",
    commonPathologies: [
      "Pleural effusion",
      "Pneumothorax",
      "Mesothelioma",
      "Pleuritis",
    ],
    step1Pearls: [
      "Transudate = pressure/oncotic problem; exudate = inflammation/malignancy",
      "Tension pneumothorax shifts mediastinum and needs immediate decompression",
      "Asbestos exposure causes pleural plaques and mesothelioma",
    ],
  },
  esophagus: {
    functionSummary:
      "Transports food from pharynx to stomach via peristalsis and sphincter relaxation.",
    commonPathologies: [
      "GERD",
      "Barrett esophagus",
      "Achalasia",
      "Esophageal varices",
      "Squamous cell carcinoma/adenocarcinoma",
    ],
    step1Pearls: [
      "Barrett = intestinal metaplasia from chronic GERD",
      "Achalasia = failure of LES relaxation from myenteric plexus loss",
      "Varices arise from portal-systemic anastomoses",
    ],
  },
  stomach: {
    functionSummary:
      "Stores and churns food; secretes acid, intrinsic factor, pepsinogen, mucus, and hormones.",
    commonPathologies: [
      "Peptic ulcer disease",
      "Gastritis",
      "Gastric adenocarcinoma",
      "GIST",
      "Hypertrophic pyloric stenosis",
    ],
    step1Pearls: [
      "Parietal cells secrete HCl and intrinsic factor",
      "H. pylori increases ulcers and gastric cancer risk",
      "Pernicious anemia targets parietal cells/intrinsic factor",
    ],
    pediatrics:
      "Projectile nonbilious vomiting at 2-8 weeks suggests hypertrophic pyloric stenosis.",
  },
  omentum: {
    functionSummary:
      "Peritoneal fold that stores fat, cushions abdominal organs, and contributes to immune surveillance and wound sealing (greater omentum wraps injured viscera).",
    commonPathologies: [
      "Omental infarction",
      "Omental cake (omental metastases)",
      "Omental torsion",
      "Greater omentum adhesion after surgery",
    ],
    step1Pearls: [
      "Greater omentum — apron from greater curvature of stomach; transverse colon suspended within it",
      "Lesser omentum — hepatogastric and hepatoduodenal ligaments (portal triad in free edge)",
      "Omental metastases — gastric and ovarian carcinoma seeding (omental cake)",
      "Greater omentum can wall off perforated viscus",
    ],
    pediatrics:
      "Primary omental torsion is rare in children but can mimic appendicitis with focal pain.",
  },
  peritoneum: {
    functionSummary:
      "Serous membrane lining the abdominal cavity and covering viscera; produces lubricating fluid and forms mesenteries, omenta, and ligaments.",
    commonPathologies: [
      "Peritonitis",
      "Ascites",
      "Peritoneal carcinomatosis",
      "Mesenteric ischemia",
      "Adhesions",
    ],
    step1Pearls: [
      "Parietal peritoneum — somatic innervation (sharp localized pain)",
      "Visceral peritoneum — autonomic innervation (dull referred pain)",
      "Transcoelomic spread — ovarian and gastric cancers seed peritoneum without hematogenous route",
      "Retroperitoneal organs (kidney, pancreas head, duodenum) have adventitia not serosa",
    ],
    pediatrics:
      "Meckel diverticulum and appendicitis cause peritonitis when perforated; neonatal peritonitis may follow necrotizing enterocolitis.",
  },
  intestines: {
    functionSummary:
      "Digest and absorb nutrients, water, and electrolytes; host microbiome; mucosal immunity and endocrine signaling (GLP-1, secretin, CCK).",
    commonPathologies: [
      "Celiac disease",
      "Crohn disease",
      "Ulcerative colitis",
      "Small bowel obstruction",
      "Short bowel syndrome",
      "Lactose intolerance",
    ],
    step1Pearls: [
      "Small intestine — villi increase surface area; jejunum absorbs most nutrients; ileum absorbs B12 and bile acids",
      "Large intestine — water/sodium reabsorption; colonocytes use short-chain fatty acids from fermentation",
      "Peyer patches in ileum — mucosal immunity; GALT throughout intestinal lamina propria",
      "Portal circulation carries absorbed nutrients to liver first (first-pass metabolism)",
      "Crypts of Lieberkühn contain stem cells; villi shorten in celiac and tropical sprue",
    ],
    pediatrics:
      "Necrotizing enterocolitis affects preterm intestinal mucosa; Hirschsprung disease causes functional obstruction from absent ganglia in distal colon.",
  },
  "duodenum-proximal": {
    functionSummary:
      "Receives gastric chyme plus bile and pancreatic enzymes; major site of iron absorption.",
    commonPathologies: [
      "Duodenal ulcer",
      "Celiac disease",
      "Annular pancreas",
      "Superior mesenteric artery syndrome",
    ],
    step1Pearls: [
      "Duodenal ulcers improve with meals and are often H. pylori-related",
      "Celiac disease damages proximal small bowel villi",
      "Ampulla marks foregut-midgut boundary",
    ],
  },
  jejunum: {
    functionSummary:
      "Absorbs most carbohydrates, amino acids, lipids, folate, and water.",
    commonPathologies: [
      "Celiac disease",
      "Ischemia",
      "Small bowel obstruction",
      "Whipple disease",
    ],
    step1Pearls: [
      "Jejunum has tall plicae circulares and long vasa recta compared with ileum",
      "Folate absorbed in jejunum; B12/bile acids in ileum",
    ],
  },
  ileum: {
    functionSummary:
      "Absorbs bile acids and vitamin B12; contains Peyer patches for mucosal immunity.",
    commonPathologies: [
      "Crohn disease",
      "Meckel diverticulum",
      "Gallstone ileus",
      "B12 deficiency after resection",
    ],
    step1Pearls: [
      "Crohn commonly affects terminal ileum",
      "Meckel = true diverticulum from vitelline duct; rule of 2s",
      "Peyer patches are lymphoid aggregates",
    ],
    pediatrics:
      "Meckel diverticulum classically causes painless lower GI bleeding in children.",
  },
  "peyer-patches": {
    functionSummary:
      "Aggregated lymphoid follicles in ileal submucosa that sample luminal antigen via M cells and initiate mucosal IgA immune responses as part of GALT/MALT.",
    commonPathologies: [
      "Salmonella typhi invasion (typhoid)",
      "Yersinia ileitis",
      "MALT lymphoma",
      "HIV-associated mucosal depletion",
    ],
    step1Pearls: [
      "Peyer patches = organized lymphoid follicles in ileum — part of GALT/MALT",
      "M cells overlying patches transport antigen to underlying lymphoid tissue",
      "Typhoid (S. Typhi) invades through M cells → Peyer's patch hypertrophy/necrosis → ileal ulceration/perforation",
      "Oral polio vaccine replicates in intestinal lymphoid tissue including Peyer patches",
      "vs isolated lamina propria lymphocytes — Peyer patches are macroscopic aggregated follicles",
    ],
    pediatrics:
      "Typhoid ileal perforation classically described in endemic settings; oral live-attenuated vaccines exploit intestinal lymphoid tissue for mucosal immunity in children.",
  },
  "crypts-of-lieberkuhn": {
    functionSummary:
      "Intestinal gland crypts between villi housing stem cells and secretory cells (Paneth, goblet, enteroendocrine) that regenerate and maintain the mucosal epithelium.",
    commonPathologies: [
      "Celiac disease (crypt hyperplasia)",
      "Tropical sprue",
      "Radiation enteritis",
      "Cryptosporidiosis",
      "Necrotizing enterocolitis",
    ],
    step1Pearls: [
      "Crypts of Lieberkühn contain intestinal stem cells at the base",
      "Paneth cells at crypt base secrete defensins and lysozyme — antimicrobial",
      "Stem cells regenerate villus epithelium every ~3–5 days",
      "Celiac disease — villous blunting + crypt hyperplasia (increased crypt:villus ratio)",
      "Enteroendocrine cells in crypts secrete GI hormones (secretin, CCK, GIP)",
      "vs gastric pits — stomach has gastric glands, not Lieberkühn crypts",
    ],
    pediatrics:
      "NEC damages neonatal intestinal crypts and mucosa; celiac disease can present in toddlers with failure to thrive and crypt hyperplasia on biopsy.",
  },
  cecum: {
    functionSummary:
      "Receives ileal contents and begins large-bowel water/electrolyte handling; appendix arises from cecum.",
    commonPathologies: [
      "Appendicitis",
      "Cecal volvulus",
      "Adenocarcinoma",
      "Typhlitis in neutropenia",
    ],
    step1Pearls: [
      "Cecum is common site of distention in large-bowel obstruction",
      "Midgut blood supply from SMA",
    ],
  },
  colon: {
    functionSummary:
      "Absorbs water/electrolytes, stores stool, and hosts microbiota that produce short-chain fatty acids/vitamin K.",
    commonPathologies: [
      "Ulcerative colitis",
      "Diverticulosis/diverticulitis",
      "Colorectal cancer",
      "Ischemic colitis",
      "C. difficile colitis",
    ],
    step1Pearls: [
      "Left colon/hindgut supplied by IMA; right colon/midgut by SMA",
      "UC is continuous from rectum; Crohn is skip lesions",
      "Adenoma-carcinoma sequence involves APC then KRAS then p53",
    ],
  },
  "ascending-colon": {
    functionSummary:
      "Receives cecal contents and absorbs water/sodium as feces begin forming; retroperitoneal right colon segment.",
    commonPathologies: [
      "Crohn disease",
      "Colorectal adenocarcinoma",
      "Ischemic colitis (less common than watershed flexures)",
      "Infectious colitis",
    ],
    step1Pearls: [
      "Midgut derivative — SMA supply (ileocolic, right colic arteries)",
      "Retroperitoneal — covered by adventitia not serosa",
      "Crohn can affect ascending colon with skip lesions",
      "Right-sided colon cancer may present with anemia from occult bleeding",
    ],
    pediatrics:
      "Same midgut embryology; intussusception ileocolic junction is adjacent anatomic landmark in infants.",
  },
  "transverse-colon": {
    functionSummary:
      "Intraperitoneal horizontal colon segment continuing water absorption; suspended by transverse mesocolon.",
    commonPathologies: [
      "Colorectal cancer",
      "Ulcerative colitis (extensive colitis)",
      "Ischemic colitis at splenic flexure watershed",
      "Volvulus (rare)",
    ],
    step1Pearls: [
      "Midgut derivative — primarily SMA (middle colic artery); marginal artery connects to IMA",
      "Intraperitoneal — serosa and transverse mesocolon",
      "Splenic flexure is watershed between SMA and IMA — ischemic colitis risk",
      "Greater omentum attaches to transverse colon",
    ],
    pediatrics:
      "Malrotation/volvulus can involve midgut including transverse colon; same vascular watershed principles apply.",
  },
  "descending-colon": {
    functionSummary:
      "Left retroperitoneal colon segment continuing fecal dehydration and storage before sigmoid loop.",
    commonPathologies: [
      "Diverticulosis",
      "Colorectal cancer",
      "Ulcerative colitis",
      "Ischemic colitis",
    ],
    step1Pearls: [
      "Hindgut derivative — IMA supply (left colic artery)",
      "Retroperitoneal — adventitia outer layer",
      "Diverticulosis more common in left colon than right",
      "UC extends continuously through descending colon when pancolitis present",
    ],
  },
  "sigmoid-colon": {
    functionSummary:
      "S-shaped intraperitoneal colon loop storing formed stool before rectum; highly mobile on sigmoid mesocolon.",
    commonPathologies: [
      "Diverticulosis/diverticulitis",
      "Sigmoid volvulus",
      "Colorectal cancer",
      "Ulcerative colitis",
    ],
    step1Pearls: [
      "Hindgut — IMA sigmoid arteries",
      "Most common site for diverticulosis and diverticulitis in Western adults",
      "Sigmoid volvulus — coffee-bean sign on abdominal X-ray; elderly/institutionalized",
      "Intraperitoneal with long mesocolon → increased mobility and volvulus risk",
    ],
    pediatrics:
      "Sigmoid volvulus rare in children; Hirschsprung disease affects rectosigmoid transition zone.",
  },
  rectum: {
    functionSummary:
      "Stores feces and coordinates defecation reflex with anal sphincters.",
    commonPathologies: [
      "Rectal cancer",
      "Hemorrhoids",
      "Proctitis",
      "Rectal prolapse",
    ],
    step1Pearls: [
      "Rectal venous drainage partly bypasses portal system",
      "Internal hemorrhoids are above pectinate line and usually painless",
    ],
  },
  "anal-canal": {
    functionSummary:
      "Controls continence and defecation through internal and external sphincters.",
    commonPathologies: [
      "Hemorrhoids",
      "Anal fissure",
      "Anal abscess/fistula",
      "Squamous cell carcinoma",
    ],
    step1Pearls: [
      "Above pectinate line: visceral, painless, columnar; below: somatic pain, squamous",
      "HPV 16/18 increases anal cancer risk",
    ],
  },
  liver: {
    functionSummary:
      "Performs metabolism, detoxification, bile production, glycogen storage, plasma protein synthesis, and immune filtering.",
    commonPathologies: [
      "Hepatitis",
      "Cirrhosis",
      "Portal hypertension",
      "Hepatocellular carcinoma",
      "Fatty liver disease",
    ],
    step1Pearls: [
      "Centrilobular zone 3 is vulnerable to ischemia and acetaminophen toxicity",
      "Albumin and clotting factors reflect synthetic function",
      "Kupffer cells are liver macrophages",
    ],
  },
  gallbladder: {
    functionSummary:
      "Stores and concentrates bile, then contracts in response to CCK after fatty meals.",
    commonPathologies: [
      "Cholelithiasis",
      "Acute cholecystitis",
      "Choledocholithiasis",
      "Gallstone pancreatitis",
    ],
    step1Pearls: [
      "Cholesterol stones are radiolucent; pigment stones occur with hemolysis/infection",
      "RUQ pain after fatty meals points to biliary colic",
      "Porcelain gallbladder increases carcinoma risk",
    ],
  },
  "bile-duct": {
    functionSummary:
      "Conducts bile from liver and gallbladder to duodenum; intrahepatic and extrahepatic ducts enable digestion and bilirubin excretion.",
    commonPathologies: [
      "Choledocholithiasis",
      "Cholangiocarcinoma",
      "Primary sclerosing cholangitis",
      "Biliary atresia",
      "Caroli disease",
    ],
    step1Pearls: [
      "Cholangiocarcinoma — painless jaundice, dilated intrahepatic ducts; associated with PSC and liver flukes",
      "Common bile duct joins pancreatic duct at ampulla of Vater (Sphincter of Oddi)",
      "Biliary atresia — neonatal conjugated hyperbilirubinemia; absent/obliterated extrahepatic ducts",
      "Courvoisier sign — palpable non-tender gallbladder + jaundice suggests malignant distal obstruction",
    ],
    pediatrics:
      "Biliary atresia presents with persistent neonatal jaundice and acholic stools; requires Kasai portoenterostomy or transplant.",
  },
  pancreas: {
    functionSummary:
      "Secretes digestive enzymes/bicarbonate and endocrine hormones insulin, glucagon, somatostatin, and pancreatic polypeptide.",
    commonPathologies: [
      "Acute pancreatitis",
      "Pancreatic adenocarcinoma",
      "Diabetes mellitus",
      "Cystic fibrosis pancreatic insufficiency",
      "Insulinoma",
    ],
    step1Pearls: [
      "Pancreatic head cancer causes painless jaundice",
      "Pancreatitis from gallstones/alcohol; autodigestion by activated enzymes",
      "Beta cells secrete insulin in islets",
    ],
  },
  "ampulla-of-vater": {
    functionSummary:
      "Delivers bile and pancreatic enzymes into the duodenum for fat emulsification and protein/carbohydrate digestion; sphincter of Oddi regulates flow.",
    commonPathologies: [
      "Gallstone pancreatitis",
      "Choledocholithiasis",
      "Periampullary carcinoma",
      "Pancreatic head cancer obstructing duct",
      "Sphincter of Oddi dysfunction",
      "Ascending cholangitis",
    ],
    step1Pearls: [
      "Common bile duct + main pancreatic duct drain here",
      "Gallstone passing through ampulla → gallstone pancreatitis",
      "Marks foregut–midgut embryologic boundary in duodenum",
      "Periampullary tumors — pancreatic head, CBD, ampulla, duodenal papilla",
      "Sphincter of Oddi — smooth muscle controlling bile/pancreatic juice entry",
      "ERCP can visualize and treat ampullary stones/obstruction",
    ],
    pediatrics:
      "Biliary atresia and choledochal cyst affect bile drainage to duodenum; annular pancreas encircles duodenum near ampulla causing neonatal obstruction.",
  },
  foregut: {
    functionSummary:
      "Embryologic cranial gut segment giving rise to upper GI tract, hepatobiliary system, pancreas, and respiratory diverticulum; celiac artery supply.",
    commonPathologies: [
      "Esophageal atresia / tracheoesophageal fistula",
      "Duodenal atresia (proximal)",
      "Annular pancreas",
      "Biliary atresia",
      "Congenital diaphragmatic hernia (pulmonary hypoplasia from foregut-derived lungs)",
    ],
    step1Pearls: [
      "Foregut → celiac artery supply",
      "Derivatives: esophagus, stomach, proximal duodenum to ampulla, liver, gallbladder, pancreas, trachea/lungs",
      "Spleen is NOT a foregut derivative (mesoderm in dorsal mesogastrium)",
      "Respiratory diverticulum buds from ventral foregut endoderm",
      "TE fistula — failure of tracheoesophageal septation",
    ],
    pediatrics:
      "Neonatal duodenal atresia (double bubble) and esophageal atresia reflect foregut canalization errors; pulmonary hypoplasia in CDH involves foregut-derived lungs.",
  },
  midgut: {
    functionSummary:
      "Embryologic middle gut segment from distal duodenum through proximal two-thirds transverse colon; SMA vascular supply; undergoes rotation and herniation.",
    commonPathologies: [
      "Midgut volvulus (malrotation)",
      "Meckel diverticulum",
      "Intussusception",
      "Mesenteric ischemia (SMA occlusion)",
      "Appendicitis",
      "Crohn disease (terminal ileum)",
    ],
    step1Pearls: [
      "Midgut → SMA supply (ileocolic, right colic, middle colic arteries)",
      "Distal duodenum, jejunum, ileum, cecum, appendix, ascending colon, proximal 2/3 transverse colon",
      "Physiologic midgut herniation then 270° counterclockwise rotation around SMA",
      "Malrotation → midgut volvulus with bilious vomiting — surgical emergency",
      "Meckel diverticulum — vitelline duct remnant in midgut",
      "Ampulla of Vater marks cranial boundary of midgut in duodenum",
    ],
    pediatrics:
      "Bilious vomiting in neonate — think midgut volvulus until excluded; Meckel diverticulum classic painless lower GI bleed in children.",
  },
  hindgut: {
    functionSummary:
      "Embryologic caudal gut segment from distal transverse colon through upper anal canal; IMA supply; cloaca gives urogenital derivatives.",
    commonPathologies: [
      "Hirschsprung disease",
      "Ulcerative colitis",
      "Diverticulosis/diverticulitis",
      "Sigmoid volvulus",
      "Imperforate anus (cloacal malformation spectrum)",
      "Posterior urethral valves (urogenital sinus derivative)",
    ],
    step1Pearls: [
      "Hindgut → IMA supply (left colic, sigmoid, superior rectal arteries)",
      "Distal 1/3 transverse colon, descending, sigmoid, rectum, upper anal canal",
      "Lower anal canal below pectinate line is ectodermal (proctodeum), not hindgut endoderm",
      "Urorectal septum divides cloaca into rectum and urogenital sinus",
      "Splenic flexure is SMA–IMA watershed — ischemic colitis risk",
      "UC is continuous mucosal disease from rectum through hindgut colon",
    ],
    pediatrics:
      "Hirschsprung disease — absent ganglia in distal hindgut colon; imperforate anus and posterior urethral valves reflect cloacal/urogenital sinus maldevelopment.",
  },
  spleen: {
    functionSummary:
      "Filters blood, removes old RBCs/platelets, mounts immune responses to blood-borne encapsulated organisms.",
    commonPathologies: [
      "Splenomegaly",
      "Functional asplenia",
      "Splenic rupture",
      "Auto-splenectomy in sickle cell disease",
    ],
    step1Pearls: [
      "Asplenia increases sepsis risk from S. pneumoniae, H. influenzae, N. meningitidis",
      "Howell-Jolly bodies indicate impaired splenic function",
      "Red pulp filters RBCs; white pulp is lymphoid",
    ],
    pediatrics:
      "Children with sickle cell disease develop functional asplenia early and need vaccination/prophylaxis.",
  },
  kidney: {
    functionSummary:
      "Filters plasma, regulates electrolytes/acid-base/volume, secretes renin and EPO, activates vitamin D.",
    commonPathologies: [
      "Acute kidney injury",
      "Glomerulonephritis",
      "Nephrotic syndrome",
      "Pyelonephritis",
      "Polycystic kidney disease",
    ],
    step1Pearls: [
      "Juxtaglomerular cells release renin",
      "PCT reabsorbs most filtered Na/water/glucose/amino acids",
      "Podocyte injury drives proteinuria",
    ],
  },
  "costovertebral-angle": {
    functionSummary:
      "Posterior flank landmark over the kidney used for physical examination — percussion tenderness suggests renal or perinephric inflammation.",
    commonPathologies: [
      "Pyelonephritis with CVA tenderness",
      "Perinephric abscess",
      "Renal infarction",
      "Obstructive hydronephrosis",
    ],
    step1Pearls: [
      "CVA = angle of 12th rib and vertebral column — percussion elicits renal tenderness",
      "CVA tenderness + fever + WBC casts → pyelonephritis",
      "Murphy punch / renal punch = percussing the costovertebral angle",
      "Dysuria without CVA tenderness favors cystitis over pyelonephritis",
    ],
    pediatrics:
      "Febrile infant UTI may have subtle CVA tenderness; percussion can be difficult — maintain high suspicion for pyelonephritis with fever and positive urinalysis.",
  },
  "renal-capsule": {
    functionSummary:
      "Fibrous envelope of the kidney; when stretched by inflammation, infection, or rapid distension (hydronephrosis, hematoma), produces somatic flank pain and CVA tenderness.",
    commonPathologies: [
      "Acute pyelonephritis — capsular inflammation",
      "Renal subcapsular hematoma (trauma, angiomyolipoma rupture)",
      "Hydronephrosis from obstructing stone — capsular distension",
      "Perinephric abscess spreading to capsule",
    ],
    step1Pearls: [
      "Renal capsule distension → severe flank pain (stone, hematoma, infection)",
      "Pyelonephritis pain reflects renal parenchymal and capsular inflammation",
      "Subcapsular hematoma can compress kidney without hematuria initially",
      "Gerota fascia — perirenal fascia outside the renal capsule, not the fibrous capsule itself",
    ],
    pediatrics:
      "Same capsular distension physiology in children; Wilms tumor or trauma can cause flank mass and pain from capsular/perinephric involvement.",
  },
  "renal-artery": {
    functionSummary:
      "Delivers ~20–25% of cardiac output to kidneys; perfusion pressure drives GFR and oxygen delivery to renal parenchyma.",
    commonPathologies: [
      "Renal artery stenosis (atherosclerosis, fibromuscular dysplasia)",
      "Renal infarction",
      "Renal artery aneurysm",
      "Accessory renal arteries",
    ],
    step1Pearls: [
      "Renal arteries branch from abdominal aorta just below SMA",
      "Afferent arteriole dilation (prostaglandins) maintains GFR in hypoperfusion — NSAIDs block this",
      "Renal artery stenosis → ↓ perfusion → ↑ renin → secondary hyperaldosteronism and hypertension",
      "Abdominal bruit + resistant HTN in young woman → fibromuscular dysplasia",
      "ACE inhibitors contraindicated in bilateral renal artery stenosis — precipitate acute renal failure",
      "Segmental artery occlusion can cause wedge-shaped renal infarct",
    ],
    pediatrics:
      "Fibromuscular dysplasia can present in adolescents/young adults; congenital accessory renal arteries are common and relevant in transplant donor surgery.",
  },
  metanephros: {
    functionSummary:
      "Embryonic definitive kidney primordium formed by reciprocal induction between ureteric bud and metanephric mesenchyme.",
    commonPathologies: [
      "Renal agenesis",
      "Renal dysplasia",
      "Wilms tumor",
      "Horseshoe kidney",
      "UPJ obstruction",
    ],
    step1Pearls: [
      "Metanephric mesenchyme → nephron (glomerulus through DCT); ureteric bud → collecting system",
      "Reciprocal induction — each tissue requires the other or kidney fails to form",
      "Failure → bilateral agenesis → oligohydramnios → Potter sequence",
      "vs mesonephros/pronephros — transient earlier kidneys; metanephros is permanent",
    ],
    pediatrics:
      "Congenital renal anomalies originate in metanephric development; Wilms tumor arises from persistent blastema.",
  },
  "metanephric-diverticulum": {
    functionSummary:
      "Epithelial sprout from mesonephric duct that induces metanephric mesenchyme and undergoes branching morphogenesis to form the ureter and intrarenal collecting system.",
    commonPathologies: [
      "Renal agenesis (failed bud formation or mesenchyme induction)",
      "Renal dysplasia / multicystic dysplastic kidney",
      "Ureteropelvic junction obstruction",
      "Duplicated collecting system (early bud bifurcation)",
      "Horseshoe kidney (abnormal ascent/fusion)",
    ],
    step1Pearls: [
      "Synonym: ureteric bud = metanephric diverticulum",
      "Ureteric bud derivatives — ureter, renal pelvis, calyces, collecting ducts",
      "Metanephric mesenchyme (blastema) → nephron; ureteric bud → collecting system",
      "Reciprocal induction — GDNF from mesenchyme signals RET on bud; failure → renal agenesis",
      "Branching morphogenesis of bud forms pelvis → calyces → collecting ducts",
      "vs mesonephric duct — bud is an outgrowth; duct also forms male reproductive tract (Wolffian)",
    ],
    pediatrics:
      "Congenital solitary kidney, UPJ obstruction, and duplicated ureters trace to abnormal ureteric bud branching or ascent; bilateral agenesis causes oligohydramnios and Potter sequence.",
  },
  "renal-pelvis": {
    functionSummary:
      "Funnel-shaped expansion of the proximal ureter within the renal hilum that collects urine from major calyces and delivers it to the ureter.",
    commonPathologies: [
      "Ureteropelvic junction (UPJ) obstruction",
      "Renal pelvis urothelial carcinoma",
      "Hydronephrosis from downstream obstruction",
      "Staghorn calculi filling calyces and pelvis",
    ],
    step1Pearls: [
      "Ureteric bud derivative — not from metanephric mesenchyme",
      "UPJ obstruction — most common site of congenital urinary obstruction",
      "Urine flow: papillary ducts → minor calyces → major calyces → renal pelvis → ureter",
      "vs renal medulla — pelvis is collecting system lumen, not nephron parenchyma",
      "Transitional (urothelial) epithelium lines pelvis, calyces, ureter, and bladder",
    ],
    pediatrics:
      "Congenital UPJ obstruction may present with flank mass or UTI in infancy; prenatal hydronephrosis on ultrasound often first clue.",
  },
  "major-calyx": {
    functionSummary:
      "Large collecting-system recess that receives urine from two or more minor calyces and drains into the renal pelvis.",
    commonPathologies: [
      "Hydronephrosis (upstream obstruction)",
      "Calyceal diverticulum",
      "Renal calculi lodging at calyceal infundibulum",
    ],
    step1Pearls: [
      "Ureteric bud branching product — embryologically distinct from nephron",
      "Typically 2–3 major calyces per kidney (variable)",
      "Each major calyx drains multiple minor calyces",
      "vs minor calyx — major is larger conduit to pelvis; minor cups individual papillae",
    ],
    pediatrics:
      "Calyceal anatomy is adult-pattern at birth; congenital collecting-system anomalies (duplication, dysplasia) reflect abnormal ureteric bud branching in fetal life.",
  },
  "minor-calyx": {
    functionSummary:
      "Cup-shaped collecting-system recess that surrounds a renal papilla and receives urine from papillary ducts of Bellini.",
    commonPathologies: [
      "Hydronephrosis",
      "Calyceal microlithiasis / nephrolithiasis",
      "Papillary necrosis (sickle cell, analgesic abuse, diabetes)",
    ],
    step1Pearls: [
      "Encircles tip of renal pyramid (renal papilla)",
      "Urine enters minor calyx from ducts of Bellini at papillary foramina",
      "Minor calyces → major calyces → renal pelvis → ureter",
      "vs renal papilla — papilla is parenchymal tip of pyramid; minor calyx is surrounding collecting lumen",
      "Papillary necrosis → sloughed papillae can obstruct calyx or ureter",
    ],
    pediatrics:
      "Sickle cell disease and childhood UTI/pyelonephritis can injure renal papillae; calyceal anatomy is otherwise established in fetal ureteric bud branching.",
  },
  "urogenital-membrane": {
    functionSummary:
      "Temporary membrane covering the ventral urogenital sinus outlet; perforates to form the external urogenital opening after cloacal partitioning.",
    commonPathologies: [
      "Abnormal perforation timing",
      "Bladder exstrophy spectrum (developmental field defect)",
      "Imperforate urogenital membrane (rare)",
    ],
    step1Pearls: [
      "Urorectal septum divides cloaca → urogenital sinus (ventral) and rectum (dorsal)",
      "Urogenital membrane must break down/perforate for external urethral opening",
      "Failure of cloacal development links to exstrophy-epispadias complex on boards",
      "vs anal membrane — dorsal counterpart after septation",
    ],
    pediatrics:
      "Neonatal urinary outlet anomalies reflect abnormal urogenital sinus and membrane development; distinguish from patent urachus (allantoic remnant).",
  },
  "urethral-fold": {
    functionSummary:
      "Embryonic paired ridges that close the urethral groove on the ventral penis in males (forming the spongy urethra) or remain open as labia minora and vestibule in females — DHT-dependent external genital virilization step.",
    commonPathologies: [
      "Hypospadias — incomplete ventral fusion of urethral folds",
      "Epispadias — dorsal urethral malposition (exstrophy spectrum, not simple failure of ventral fold fusion)",
      "Disorders of sex development with impaired androgen/DHT signaling — hypospadias, bifid scrotum, microphallus",
      "5α-reductase deficiency — incomplete urethral fold fusion and ambiguous genitalia at birth",
    ],
    step1Pearls: [
      "Urethral (urogenital) folds fuse ventrally in male fetus under DHT → penile spongy urethra",
      "Failed fusion → hypospadias (ventral urethral opening)",
      "Female: urethral folds → labia minora + vestibule (no midline fusion)",
      "vs labioscrotal swellings — fuse to scrotum (male) or labia majora (female), not urethral tube",
      "vs genital tubercle — forms glans/clitoris; separate from urethral fold fusion",
      "Glandular urethra at penile tip may require additional canalization beyond fold fusion",
      "DHT-dependent external genital development — links 5α-reductase deficiency and partial AIS vignettes",
    ],
    pediatrics:
      "Hypospadias reflects incomplete urethral fold fusion — assess for chordee, cryptorchidism, and bifid scrotum as markers of androgen pathway defects. Do not circumcise before urologic evaluation. Severe perineal hypospadias with cryptorchidism warrants karyotype and hormone workup.",
  },
  ureter: {
    functionSummary: "Moves urine from renal pelvis to bladder by peristalsis.",
    commonPathologies: [
      "Nephrolithiasis obstruction",
      "Vesicoureteral reflux",
      "Ureteropelvic junction obstruction",
    ],
    step1Pearls: [
      "Stones lodge at UPJ, pelvic brim, and UVJ",
      "Pain radiates flank to groin due to T11-L2 fibers",
    ],
  },
  bladder: {
    functionSummary:
      "Stores urine at low pressure and coordinates voiding via detrusor contraction and sphincter relaxation.",
    commonPathologies: [
      "Cystitis",
      "Bladder cancer",
      "Neurogenic bladder",
      "Vesicoureteral reflux",
    ],
    step1Pearls: [
      "Transitional cell carcinoma is linked to smoking, aniline dyes, cyclophosphamide, schistosomiasis",
      "Parasympathetic pelvic nerves contract detrusor",
    ],
    pediatrics:
      "Vesicoureteral reflux predisposes to recurrent UTIs and renal scarring in children.",
  },
  urethra: {
    functionSummary:
      "Conducts urine from bladder to exterior; male urethra also carries semen.",
    commonPathologies: [
      "Urethritis",
      "Hypospadias/epispadias",
      "Urethral stricture",
      "Traumatic urethral injury",
    ],
    step1Pearls: [
      "Gonorrhea causes purulent urethritis; chlamydia often watery/mucoid",
      "Blood at urethral meatus after pelvic fracture suggests urethral injury",
    ],
  },
  prostate: {
    functionSummary:
      "Produces alkaline prostatic fluid that contributes to semen and supports sperm motility.",
    commonPathologies: [
      "Benign prostatic hyperplasia",
      "Prostate adenocarcinoma",
      "Prostatitis",
    ],
    step1Pearls: [
      "BPH arises in periurethral transition zone; cancer often posterior peripheral zone",
      "PSA is prostate kallikrein; increased in cancer, BPH, prostatitis",
    ],
  },
  "seminal-vesicles": {
    functionSummary:
      "Paired glands secreting fructose-rich alkaline fluid into ejaculatory ducts; contribute ~60–70% of semen volume and nourish sperm.",
    commonPathologies: [
      "Congenital absence (CBAVD/CF)",
      "Seminal vesicle cyst",
      "Infection with prostatitis",
      "Invasion by prostate adenocarcinoma",
    ],
    step1Pearls: [
      "Wolffian (mesonephric) duct derivative — develops under testosterone",
      "Fructose in semen reflects seminal vesicle contribution; absent in CBAVD/cystic fibrosis",
      "Prostate cancer locally invades seminal vesicles — upstages disease",
      "Homologous embryologically to uterus/prostate glandular tissue (Müllerian vs Wolffian)",
    ],
    pediatrics:
      "Congenital bilateral absence of vas deferens and seminal vesicles occurs in cystic fibrosis; infertility workup may be first presentation in adolescence.",
  },
  testis: {
    functionSummary:
      "Produces sperm in seminiferous tubules and testosterone from Leydig cells.",
    commonPathologies: [
      "Testicular torsion",
      "Germ cell tumors",
      "Cryptorchidism",
      "Orchitis",
      "Varicocele-related infertility",
    ],
    step1Pearls: [
      "Sertoli cells make inhibin B and AMH; Leydig cells make testosterone",
      "Seminomas are radiosensitive; yolk sac tumors increase AFP",
      "Torsion loses cremasteric reflex",
    ],
    pediatrics:
      "Cryptorchidism increases infertility and germ cell tumor risk; torsion is a surgical emergency in adolescents.",
  },
  epididymis: {
    functionSummary:
      "Stores and matures sperm acquired from seminiferous tubules.",
    commonPathologies: [
      "Epididymitis",
      "Spermatocele",
      "Obstruction causing infertility",
    ],
    step1Pearls: [
      "Young sexually active: Chlamydia/gonorrhea; older men: E. coli",
      "Pain relief with elevation suggests epididymitis more than torsion",
    ],
  },
  "vas-deferens": {
    functionSummary:
      "Paired thick-walled muscular ducts that transport sperm from the epididymis through the inguinal canal and pelvis to the ejaculatory ducts during emission — part of the Wolffian duct male reproductive outflow tract.",
    commonPathologies: [
      "Congenital bilateral absence (CBAVD) — cystic fibrosis / CFTR mutations",
      "Obstructive azoospermia from infection, inflammation, or prior surgery",
      "Iatrogenic injury during inguinal hernia repair or vasectomy",
      "Epididymo-orchitis with secondary ductal obstruction",
    ],
    step1Pearls: [
      "Wolffian (mesonephric) duct derivative — with epididymis, seminal vesicles, ejaculatory duct",
      "Travels in spermatic cord through inguinal canal to pelvis",
      '"Water under the bridge" — ureter passes posterior to vas deferens near bladder base',
      "Ampulla of vas deferens joins seminal vesicle duct → ejaculatory duct → prostatic urethra",
      "Absent palpable vas deferens on exam → CBAVD; test CFTR even without lung disease",
      "Vasectomy interrupts vas deferens for contraception — obstructive azoospermia",
      "Sympathetic hypogastric innervation drives peristaltic transport during ejaculation",
      "vs ureter — ureter carries urine; vas deferens carries sperm; anatomic crossing near bladder",
    ],
    pediatrics:
      "Congenital bilateral absence of vas deferens (CBAVD) occurs in ~98% of males with classic cystic fibrosis and in ~2% of infertile men without overt CF — may be first presentation in adolescence with obstructive azoospermia and normal testicular size.",
  },
  ovary: {
    functionSummary:
      "Produces oocytes, estrogen, progesterone, inhibin, and androgen precursors.",
    commonPathologies: [
      "Polycystic ovary syndrome",
      "Ovarian torsion",
      "Epithelial ovarian cancer",
      "Germ cell tumors",
      "Endometrioma",
    ],
    step1Pearls: [
      "Granulosa cells aromatize theca androgens via FSH",
      "BRCA1/2 increase ovarian cancer risk",
      "Dysgerminoma is ovarian seminoma counterpart",
    ],
  },
  uterus: {
    functionSummary:
      "Supports implantation, menstruation, pregnancy, and labor via endometrium and myometrium.",
    commonPathologies: [
      "Leiomyomas",
      "Endometrial hyperplasia/carcinoma",
      "Adenomyosis",
      "Endometritis",
      "Müllerian anomalies",
    ],
    step1Pearls: [
      "Unopposed estrogen drives endometrial hyperplasia",
      "Fibroids are estrogen-sensitive benign smooth muscle tumors",
      "Adenomyosis = endometrial glands in myometrium",
    ],
  },
  endometrium: {
    functionSummary:
      "Inner glandular lining of uterine cavity; cycles through proliferative and secretory phases and is the site of implantation.",
    commonPathologies: [
      "Endometrial hyperplasia",
      "Endometrial adenocarcinoma",
      "Endometritis",
      "Asherman syndrome",
      "Endometriosis (ectopic)",
    ],
    step1Pearls: [
      "Type I endometrial cancer — estrogen-driven, PTEN loss, better prognosis",
      "Type II — p53-associated, serous/clear cell, poor prognosis, not always hyperplastic precursor",
      "Tamoxifen is estrogen agonist in endometrium → hyperplasia/cancer risk",
      "Proliferative (estrogen) vs secretory (progesterone) histology on biopsy",
    ],
    pediatrics:
      "Neonatal withdrawal bleeding is benign; endometrium matures with pubertal estrogen before menarche.",
  },
  cervix: {
    functionSummary:
      "Fibromuscular canal between uterine cavity and vagina; produces mucus that varies with estrogen/progesterone and forms a mucus plug in pregnancy.",
    commonPathologies: [
      "Cervical intraepithelial neoplasia (CIN)",
      "Cervical squamous cell carcinoma",
      "Cervicitis (Chlamydia, gonorrhea)",
      "Cervical ectropion/ectopy",
      "Cervical insufficiency",
      "Cervical polyp",
    ],
    step1Pearls: [
      "Transformation zone (squamocolumnar junction) is target of HPV-related dysplasia and Pap screening",
      "HPV-16 and HPV-18 are high-risk types → CIN → invasive SCC",
      "Pap smear samples exfoliated cells from transformation zone",
      "Friable cervix + postcoital bleeding → cervical cancer until proven otherwise",
      "Cervical incompetence → painless second-trimester dilation and pregnancy loss",
    ],
    pediatrics:
      "Clear cell adenocarcinoma of cervix/vagina linked to in utero DES exposure in adolescent/young women; routine HPV vaccination prevents high-risk HPV infection before sexual debut.",
  },
  "fallopian-tube": {
    functionSummary:
      "Captures ovulated oocyte, supports fertilization, and transports embryo to uterus.",
    commonPathologies: [
      "Ectopic pregnancy",
      "Salpingitis/PID",
      "Hydrosalpinx",
      "High-grade serous carcinoma origin",
    ],
    step1Pearls: [
      "Most ectopic pregnancies occur in ampulla",
      "PID scarring increases infertility and ectopic risk",
      "Ciliated cells move ovum toward uterus",
    ],
  },
  vagina: {
    functionSummary:
      "Fibromuscular canal for intercourse, menstrual flow, and childbirth; acidic microbiome protects against infection.",
    commonPathologies: [
      "Vaginitis",
      "Bacterial vaginosis",
      "Candida",
      "Trichomoniasis",
      "Vaginal atresia",
    ],
    step1Pearls: [
      "Lactobacilli produce lactic acid",
      "BV has clue cells and fishy odor",
      "Candida causes thick white discharge with pseudohyphae",
    ],
  },
  vulva: {
    functionSummary:
      "External female genitalia including labia, clitoris, and vestibule; protects urethral and vaginal openings and contains Bartholin glands.",
    commonPathologies: [
      "Vulvar lichen sclerosus",
      "Vulvar intraepithelial neoplasia (VIN)",
      "Vulvar squamous cell carcinoma",
      "Bartholin gland cyst/abscess",
      "Contact dermatitis",
    ],
    step1Pearls: [
      "HPV-related VIN and SCC — smoking and immunosuppression increase risk",
      "Lichen sclerosus — white atrophic plaques; long-term SCC risk",
      "Inguinal lymph node drainage for lateral vulva; midline lesions may drain bilaterally",
      "Vestibule of the vagina — space between labia minora with urethral and vaginal openings; separate dedicated entry",
    ],
    pediatrics:
      "Labial adhesions are common in prepubertal girls; ambiguous genitalia evaluation includes vulvar anatomy and CAH screening.",
  },
  "vestibule-of-the-vagina": {
    functionSummary:
      "Space enclosed by the labia minora containing the urethral meatus, vaginal introitus, hymen, and openings of Bartholin and Skene glands — the external outlet region of the female urogenital tract.",
    commonPathologies: [
      "Bartholin gland cyst or abscess",
      "Vestibulitis and provoked vestibulodynia (vulvodynia)",
      "Lichen sclerosus involving vestibular epithelium",
      "Hymenal variants and imperforate hymen",
      "Contact or irritant dermatitis of vestibular mucosa",
      "Gonorrhea and chlamydia urethritis at urethral meatus",
    ],
    step1Pearls: [
      "Vestibule = area between labia minora with urethral + vaginal openings",
      "Embryology — unfused urogenital (urethral) folds in female fetus",
      "Bartholin glands (greater vestibular) — posterolateral vestibule; cyst/abscess at 4 and 8 o'clock",
      "Skene glands (paraurethral) — homolog of male prostate; open near urethral meatus",
      "vs vagina — vestibule is external introitus region; vagina is internal fibromuscular canal",
      "vs vulva — vulva includes labia majora/minora, clitoris, and vestibule as a whole",
      "Hymen surrounds vaginal introitus at vestibule",
      "Lichen sclerosus — white atrophic vestibular/vulvar plaques; long-term SCC risk",
    ],
    pediatrics:
      "Imperforate hymen may present at menarche with hematocolpos. Labial adhesions in prepubertal girls involve labia minora near the vestibule. CAH virilization can alter vestibular and labial anatomy — evaluate with karyotype and 17-OH progesterone.",
  },
  "greater-vestibular-gland": {
    functionSummary:
      "Paired mucus-secreting glands in the posterolateral vulvar vestibule (Bartholin glands) that lubricate the vaginal introitus during sexual arousal; duct opens at 4 and 8 o'clock positions.",
    commonPathologies: [
      "Bartholin gland cyst — mucus retention when duct obstructed",
      "Bartholin gland abscess — usually polymicrobial (E. coli, anaerobes, Staphylococcus, Neisseria gonorrhoeae)",
      "Bartholin gland carcinoma — rare; consider in postmenopausal woman with solid fixed mass",
    ],
    step1Pearls: [
      "Greater vestibular = Bartholin gland — homolog of male Cowper (bulbourethral) gland",
      "Location: posterolateral vestibule deep to labia minora; duct at 4 and 8 o'clock",
      "Cyst = painless fluctuant swelling; abscess = acute painful erythematous mass",
      "Skene (paraurethral) glands — homolog of male prostate; open near urethral meatus",
      "vs sublingual Bartholin ducts — salivary Rivinus ducts are unrelated homonym",
      "Marsupialization or Word catheter for recurrent cyst/abscess; exclude carcinoma if atypical in older patient",
    ],
    pediatrics:
      "Bartholin cyst/abscess uncommon before menarche; painful unilateral labial swelling in adolescent may still occur. Solid mass in older woman — biopsy to exclude adenocarcinoma.",
  },
  breast: {
    functionSummary:
      "Modified sweat gland producing milk; hormonally responsive ductal-lobular tissue in superficial fascia of anterior chest.",
    commonPathologies: [
      "Fibrocystic change",
      "Fibroadenoma",
      "Breast cancer",
      "Mastitis",
      "Gynecomastia",
    ],
    step1Pearls: [
      "Invasive ductal carcinoma is most common type",
      "ER/PR/HER2 status guides therapy; triple-negative often BRCA1-associated",
      "Peau d'orange — dermal lymphatic obstruction by carcinoma",
      "BRCA1/2 — hereditary breast and ovarian cancer syndrome",
    ],
    pediatrics:
      "Pediatric breast masses are usually fibroadenoma; breast cancer is extremely rare in children/adolescents.",
  },
  thyroid: {
    functionSummary:
      "Produces T3/T4 to regulate metabolism and calcitonin from C cells to lower calcium.",
    commonPathologies: [
      "Graves disease",
      "Hashimoto thyroiditis",
      "Thyroid nodules/cancer",
      "Congenital hypothyroidism",
    ],
    step1Pearls: [
      "T4 converts to T3 peripherally",
      "Parafollicular C cells are neural crest-derived and cause medullary carcinoma",
      "PTU blocks peroxidase and peripheral conversion",
    ],
    pediatrics:
      "Congenital hypothyroidism causes intellectual disability if untreated; screen newborns.",
  },
  parathyroid: {
    functionSummary:
      "Secretes PTH to increase serum calcium and lower phosphate via bone, kidney, and vitamin D activation.",
    commonPathologies: [
      "Primary hyperparathyroidism",
      "Secondary hyperparathyroidism in CKD",
      "Hypoparathyroidism after surgery",
      "DiGeorge syndrome",
    ],
    step1Pearls: [
      "PTH increases calcium reabsorption and phosphate wasting in kidney",
      "PTH indirectly increases gut calcium absorption via 1-alpha hydroxylase",
      "DiGeorge: failed 3rd/4th pouch development",
    ],
    pediatrics:
      "DiGeorge syndrome causes hypocalcemic tetany/seizures from parathyroid aplasia.",
  },
  "adrenal-cortex": {
    functionSummary:
      "Steroid-producing outer adrenal layer organized into three zones — glomerulosa (aldosterone), fasciculata (cortisol), reticularis (adrenal androgens).",
    commonPathologies: [
      "Addison disease",
      "Cushing syndrome",
      "Conn syndrome",
      "Congenital adrenal hyperplasia",
    ],
    step1Pearls: [
      "GFR mnemonic: salt (glomerulosa), sugar (fasciculata), sex (reticularis)",
      "Embryology: cortex = mesoderm from celomic epithelium; medulla = neural crest inside cortex",
      "21-hydroxylase deficiency → ↓ cortisol ± aldosterone, ↑ androgens",
      "ACTH drives cortisol and adrenal androgens; aldosterone primarily driven by angiotensin II and K⁺",
      "vs medulla — cortex makes steroids; medulla makes catecholamines",
    ],
    pediatrics:
      "Classic CAH can cause salt wasting and virilization/ambiguous genitalia in newborns.",
  },
  "zona-glomerulosa": {
    functionSummary:
      "Outermost adrenal cortical zone; secretes aldosterone to promote distal nephron Na⁺ reabsorption and K⁺/H⁺ excretion.",
    commonPathologies: [
      "Primary hyperaldosteronism (Conn syndrome)",
      "Adrenal adenoma with aldosterone excess",
      "17α-hydroxylase deficiency (↑ mineralocorticoids, ↓ cortisol/sex steroids)",
    ],
    step1Pearls: [
      "Salt layer — mineralocorticoid (aldosterone) production",
      "Stimulated by angiotensin II and hyperkalemia; ACTH has minor acute effect",
      "Spironolactone and eplerenone block mineralocorticoid receptor downstream",
      "vs zona fasciculata — aldosterone not cortisol; renin-angiotensin driven not primary ACTH axis",
    ],
    pediatrics:
      "CAH forms with mineralocorticoid excess (e.g., 17α-hydroxylase deficiency) can cause hypertension and hypokalemic alkalosis in children.",
  },
  "zona-fasciculata": {
    functionSummary:
      "Middle and largest adrenal cortical zone; secretes cortisol in response to ACTH, regulating glucose metabolism, stress response, and immune function.",
    commonPathologies: [
      "Cushing syndrome",
      "Adrenal adenoma/carcinoma with cortisol excess",
      "Addison disease (cortisol deficiency)",
      "21-hydroxylase CAH (↓ cortisol)",
    ],
    step1Pearls: [
      "Sugar layer — glucocorticoid (cortisol) production",
      "ACTH from anterior pituitary is primary regulator via CRH–HPA axis",
      "Histology: lipid-rich foamy cytoplasm from cholesterol ester stores",
      "Dexamethasone suppression test evaluates cortisol feedback",
      "vs zona glomerulosa — cortisol not aldosterone; ACTH-dependent",
    ],
    pediatrics:
      "Exogenous glucocorticoids suppress ACTH and can cause adrenal insufficiency on withdrawal; congenital adrenal hyperplasia lowers cortisol and raises ACTH.",
  },
  "zona-reticularis": {
    functionSummary:
      "Inner adrenal cortical zone; secretes adrenal androgens (DHEA, androstenedione) in an ACTH-dependent manner, contributing to pubic hair and secondary sexual characteristics.",
    commonPathologies: [
      "Adrenal virilization",
      "21-hydroxylase CAH (↑ androgens)",
      "11β-hydroxylase CAH",
      "Adrenocortical carcinoma with androgen excess",
    ],
    step1Pearls: [
      "Sex layer — adrenal androgen (DHEA/DHEAS, androstenedione) production",
      "Becomes functionally prominent at adrenarche (puberty)",
      "ACTH stimulates androgen synthesis; 21-hydroxylase block shunts precursors to androgens",
      "vs ovarian/testicular androgens — zona reticularis is adrenal source of weak androgens",
      "vs zona fasciculata — androgens not cortisol",
    ],
    pediatrics:
      "Premature adrenarche or CAH-related adrenal androgen excess can cause pubic hair, clitoromegaly, or accelerated growth in children.",
  },
  "adrenal-medulla": {
    functionSummary:
      "Chromaffin cells secrete epinephrine and norepinephrine as modified postganglionic sympathetic neurons.",
    commonPathologies: [
      "Pheochromocytoma",
      "Neuroblastoma",
      "MEN2-associated tumors",
    ],
    step1Pearls: [
      "Embryology: neural crest (ectoderm) migrates into mesodermal adrenal cortex primordium",
      "Chromaffin cells = modified sympathetic postganglionic neurons releasing catecholamines into blood",
      "PNMT converts norepinephrine → epinephrine in medulla (requires cortisol induction from cortex)",
      "Episodic headache, sweating, tachycardia, hypertension suggests pheochromocytoma",
      "Treat alpha blockade before beta blockade (unopposed α if β blocked first)",
      "vs adrenal cortex — catecholamines not steroids",
    ],
    pediatrics:
      "Neuroblastoma is a common pediatric adrenal medulla/sympathetic chain tumor with elevated HVA/VMA.",
  },
  pituitary: {
    functionSummary:
      "Coordinates endocrine axes through anterior pituitary hormones and posterior ADH/oxytocin release.",
    commonPathologies: [
      "Prolactinoma",
      "Pituitary adenoma",
      "Diabetes insipidus",
      "Sheehan syndrome",
      "Craniopharyngioma",
    ],
    step1Pearls: [
      "Anterior pituitary from Rathke pouch; posterior from neuroectoderm",
      "Dopamine inhibits prolactin",
      "Bitemporal hemianopsia from optic chiasm compression",
    ],
    pediatrics:
      "Craniopharyngioma is a common suprasellar pediatric tumor causing endocrine deficits and visual symptoms.",
  },
  pineal: {
    functionSummary: "Secretes melatonin and helps regulate circadian rhythm.",
    commonPathologies: [
      "Pinealoma",
      "Germinoma",
      "Parinaud syndrome",
      "Precocious puberty",
    ],
    step1Pearls: [
      "Pineal mass can compress dorsal midbrain causing vertical gaze palsy",
      "Beta-hCG-secreting germinoma can trigger precocious puberty",
    ],
  },
  thymus: {
    functionSummary:
      "Site of T-cell maturation, positive/negative selection, and central tolerance.",
    commonPathologies: [
      "Thymic aplasia in DiGeorge",
      "Thymoma",
      "Myasthenia gravis association",
    ],
    step1Pearls: [
      "Hassall corpuscles are thymic medullary epithelial structures",
      "AIRE mutation causes autoimmune polyendocrine syndrome",
      "Thymus derives from third pouch endoderm",
    ],
    pediatrics:
      "DiGeorge syndrome causes thymic aplasia with recurrent viral/fungal infections and hypocalcemia.",
  },
  "bone-marrow": {
    functionSummary:
      "Produces blood cells and houses hematopoietic stem cells and plasma cells.",
    commonPathologies: [
      "Leukemia",
      "Aplastic anemia",
      "Myelofibrosis",
      "Multiple myeloma",
      "Marrow infiltration",
    ],
    step1Pearls: [
      "Adult hematopoiesis occurs mostly in axial skeleton",
      "Fatty marrow increases with age",
      "Pancytopenia suggests marrow failure or infiltration",
    ],
  },
  "lymph-nodes": {
    functionSummary:
      "Filter lymph and organize adaptive immune responses between antigen-presenting cells, B cells, and T cells.",
    commonPathologies: [
      "Reactive lymphadenopathy",
      "Lymphoma",
      "Metastatic carcinoma",
      "Cat-scratch disease",
      "TB lymphadenitis",
    ],
    step1Pearls: [
      "Follicles/germinal centers are B-cell zones; paracortex is T-cell zone",
      "HIV depletes paracortical CD4 T cells",
      "Painful nodes often reactive; rubbery painless nodes suggest lymphoma",
    ],
  },
  "systemic-lymphoid-system": {
    functionSummary:
      "Coordinates immune surveillance and lymph drainage: primary organs generate/mature lymphocytes; secondary organs trap antigen and activate adaptive immune responses.",
    commonPathologies: [
      "Lymphoma/leukemia",
      "Asplenic sepsis",
      "HIV/AIDS",
      "SCID/DiGeorge syndrome",
      "Chronic granulomatous disease",
      "Autoimmune lymphadenopathy",
    ],
    step1Pearls: [
      "Primary lymphoid organs = bone marrow and thymus; secondary = lymph node, spleen, MALT, tonsils",
      "Spleen filters blood-borne encapsulated organisms; lymph nodes filter lymph-borne antigens",
      "T-cell zones: thymic paracortex/lymph node paracortex/PALS in spleen; B-cell zones: follicles and germinal centers",
      "MALT includes Peyer patches, appendix, tonsils, and mucosal lymphoid aggregates",
    ],
    pediatrics:
      "Pediatric immune defects often localize by lymphoid compartment: DiGeorge affects thymic T-cell maturation; XLA affects B cells/germinal centers; asplenia/sickle autosplenectomy raises encapsulated-bacteria sepsis risk.",
  },
  brain: {
    functionSummary:
      "Integrates sensory, motor, autonomic, cognitive, emotional, and endocrine control.",
    commonPathologies: [
      "Stroke",
      "Brain tumors",
      "Meningitis/encephalitis",
      "Demyelinating disease",
      "Neurodegenerative disease",
    ],
    step1Pearls: [
      "MCA stroke affects face/arm and language in dominant hemisphere",
      "Watershed infarcts follow global hypoperfusion",
      "Astrocytes form glial scar",
    ],
    pediatrics:
      "Neural tube defects are prevented by folate; pediatric brain tumors often arise infratentorially.",
  },
  "spinal-cord": {
    functionSummary:
      "Conducts motor/sensory/autonomic signals and mediates reflexes.",
    commonPathologies: [
      "Spinal cord injury",
      "Syringomyelia",
      "Subacute combined degeneration",
      "Poliomyelitis",
      "Multiple sclerosis lesions",
    ],
    step1Pearls: [
      "Dorsal columns carry vibration/proprioception; spinothalamic carries pain/temp",
      "Anterior horn lesions cause LMN signs",
      "Brown-Sequard gives ipsilateral motor/proprioception loss and contralateral pain/temp loss",
    ],
  },
  "optic-chiasm": {
    functionSummary:
      "Site where nasal retinal fibers cross to the contralateral optic tract — reorganizes monocular visual fields into left and right hemifield representations for the brain.",
    commonPathologies: [
      "Pituitary macroadenoma compression",
      "Craniopharyngioma",
      "Meningioma (suprasellar)",
      "Optic glioma",
      "Pituitary apoplexy",
    ],
    step1Pearls: [
      "Nasal retinal fibers cross at chiasm — carry temporal visual fields",
      "Bitemporal hemianopia = chiasm compression (pituitary macroadenoma boards classic)",
      "Lesion anterior to chiasm → monocular vision loss",
      "Post-chiasmal lesion → homonymous hemianopia",
      "Chiasm lies directly above sella turcica",
    ],
    pediatrics:
      "Craniopharyngioma and optic pathway glioma (NF1) compress the chiasm in children — decreased visual acuity and bitemporal or junctional field defects.",
  },
  retina: {
    functionSummary:
      "Converts light into neural signals via rods/cones and retinal ganglion cells.",
    commonPathologies: [
      "Diabetic retinopathy",
      "Hypertensive retinopathy",
      "Retinal detachment",
      "Retinitis pigmentosa",
      "Macular degeneration",
    ],
    step1Pearls: [
      "Rods handle night/peripheral vision; cones handle color/acuity",
      "Central retinal artery occlusion causes cherry-red spot",
      "Vitamin A deficiency causes night blindness",
    ],
    pediatrics:
      "Retinoblastoma presents with leukocoria; mutation of both RB alleles is classic.",
  },
  "optic-disc": {
    functionSummary:
      "Visible portion of the optic nerve head on fundoscopy — neuroretinal rim surrounds the physiologic cup; assess color, contour, margins, and cup-to-disc ratio for glaucoma, papilledema, and optic neuropathy.",
    commonPathologies: [
      "Glaucoma — cupping and neuroretinal rim loss",
      "Papilledema — disc elevation from raised ICP",
      "Optic neuritis — disc swelling or normal retrobulbar neuritis",
      "Ischemic optic neuropathy — pallid swollen disc",
      "Optic atrophy — pale disc after chronic injury",
      "Optic disc drusen — pseudopapilledema",
    ],
    step1Pearls: [
      "Cup-to-disc ratio >0.6 or asymmetry >0.2 suggests glaucoma",
      "Blurred disc margins + venous engorgement → papilledema (↑ ICP)",
      "Pale disc → prior optic nerve injury (atrophy)",
      "Physiologic cup is central excavation; pathologic cupping is glaucomatous rim thinning",
      "No photoreceptors at disc → physiologic blind spot",
    ],
    pediatrics:
      "Optic disc drusen can mimic papilledema in children; retinoblastoma may show disc elevation with tumor infiltration — distinguish from true papilledema with imaging and oncology referral.",
  },
  uvea: {
    functionSummary:
      "Vascular pigmented middle coat of the eye (iris, ciliary body, choroid); supplies nutrition to outer retina and controls pupil/accommodation.",
    commonPathologies: [
      "Uveitis",
      "Uveal melanoma",
      "Choroidal melanoma",
      "Choroidal metastasis",
      "Sympathetic ophthalmia",
    ],
    step1Pearls: [
      "Uveal melanoma — most common primary intraocular malignancy in adults",
      "Classic hematogenous spread to liver (not regional nodes)",
      "Choroid is thickest posteriorly — common site of uveal melanoma",
      "vs retinoblastoma — pediatric, white pupillary reflex, not uveal melanoma",
    ],
    pediatrics:
      "Retinoblastoma arises from retina, not uvea; uveal melanoma is primarily an adult tumor.",
  },
  lens: {
    functionSummary:
      "Focuses light onto retina by changing shape during accommodation.",
    commonPathologies: ["Cataracts", "Ectopia lentis", "Presbyopia"],
    step1Pearls: [
      "Sorbitol accumulation contributes to diabetic/galactosemic cataracts",
      "Marfan: superotemporal lens dislocation; homocystinuria: inferonasal",
      "Lens has no blood supply",
    ],
    pediatrics:
      "Congenital cataracts can occur with rubella, galactosemia, or genetic syndromes.",
  },
  cornea: {
    functionSummary:
      "Transparent anterior refractive surface and barrier against pathogens/trauma.",
    commonPathologies: [
      "Corneal abrasion",
      "Keratitis",
      "Keratoconus",
      "Fuchs dystrophy",
      "Corneal ulcer",
    ],
    step1Pearls: [
      "CN V1 mediates corneal reflex afferent; CN VII efferent blink",
      "HSV keratitis causes dendritic ulcers",
      "Wilson disease deposits copper in Descemet membrane as Kayser-Fleischer rings",
    ],
  },
  conjunctiva: {
    functionSummary:
      "Vascularized mucous membrane lining eyelids and sclera; produces mucin via goblet cells and contributes to tear film stability.",
    commonPathologies: [
      "Bacterial conjunctivitis",
      "Viral conjunctivitis",
      "Allergic conjunctivitis",
      "Episcleritis/scleritis",
      "Pterygium",
    ],
    step1Pearls: [
      "Scleral icterus visible through bulbar conjunctiva in hyperbilirubinemia",
      "Red eye with discharge: bacterial (purulent) vs viral (watery, lymphoid follicles) vs allergic (itching, eosinophils)",
      "Adenovirus — pharyngoconjunctival fever (pharyngitis + conjunctivitis + fever)",
      "Conjunctiva is vascularized; cornea is avascular — key clinical distinction",
      "Chemosis = conjunctival edema (e.g., anaphylaxis, CHF)",
    ],
    pediatrics:
      "Neonatal conjunctivitis (ophthalmia neonatorum): N. gonorrhoeae (days 2–5, urgent), C. trachomatis (days 5–14), HSV, or chemical irritant from prophylaxis.",
  },
  "inner-ear": {
    functionSummary:
      "Cochlea mediates hearing; vestibular apparatus mediates balance and head acceleration.",
    commonPathologies: [
      "Sensorineural hearing loss",
      "Ménière disease",
      "BPPV",
      "Vestibular schwannoma",
      "Labyrinthitis",
    ],
    step1Pearls: [
      "Hair cells transduce motion through K+ influx from endolymph",
      "Aminoglycosides can cause ototoxicity",
      "CN VIII carries hearing/balance",
    ],
    pediatrics:
      "Congenital CMV is a major cause of sensorineural hearing loss.",
  },
  skin: {
    functionSummary:
      "Barrier, immune surveillance, thermoregulation, sensation, vitamin D synthesis, and fluid-loss prevention.",
    commonPathologies: [
      "Atopic dermatitis",
      "Psoriasis",
      "Melanoma",
      "Basal/squamous cell carcinoma",
      "Burns",
    ],
    step1Pearls: [
      "Epidermis is ectoderm; dermis is mesoderm",
      "Langerhans cells present antigen; Merkel cells sense touch",
      "UVB converts 7-dehydrocholesterol to vitamin D3",
    ],
    pediatrics:
      "Atopic dermatitis commonly starts in infancy and may precede food allergy/asthma in the atopic march.",
  },
  bone: {
    functionSummary:
      "Provides structure, protects organs, stores calcium/phosphate, and hosts marrow hematopoiesis.",
    commonPathologies: [
      "Osteoporosis",
      "Osteomalacia/rickets",
      "Osteomyelitis",
      "Paget disease",
      "Bone tumors",
    ],
    step1Pearls: [
      "Osteoblasts build bone; osteoclasts resorb via RANKL signaling",
      "PTH increases osteoclast activity indirectly through osteoblasts",
      "Woven bone is immature; lamellar bone is mature",
    ],
    pediatrics:
      "Rickets causes defective mineralization of growth plates in children, commonly from vitamin D deficiency.",
  },
  "skeletal-muscle": {
    functionSummary:
      "Generates voluntary movement, posture, heat, and glucose disposal.",
    commonPathologies: [
      "Muscular dystrophy",
      "Myasthenia gravis",
      "Inflammatory myopathy",
      "Rhabdomyolysis",
      "Malignant hyperthermia",
    ],
    step1Pearls: [
      "Dystrophin links cytoskeleton to extracellular matrix",
      "ACh receptor antibodies cause myasthenia gravis",
      "RYR1 mutation predisposes to malignant hyperthermia",
    ],
    pediatrics:
      "Duchenne muscular dystrophy presents in boys with Gowers sign and calf pseudohypertrophy.",
  },
  teeth: {
    functionSummary:
      "Cut and grind food; enamel/dentin protect pulp and transmit mechanical forces.",
    commonPathologies: [
      "Dental caries",
      "Periodontal disease",
      "Enamel defects",
      "Tooth abscess",
    ],
    step1Pearls: [
      "Enamel from ectodermal ameloblasts; dentin from neural crest odontoblasts",
      "S. mutans produces acid from sucrose -> caries",
    ],
    pediatrics:
      "Delayed tooth eruption or enamel defects can point to endocrine, nutritional, or genetic disorders.",
  },
  tongue: {
    functionSummary:
      "Supports taste, speech articulation, chewing, and swallowing.",
    commonPathologies: [
      "Glossitis",
      "Oral candidiasis",
      "Tongue cancer",
      "Macroglossia",
      "Ankyloglossia",
    ],
    step1Pearls: [
      "CN XII controls motor except palatoglossus (CN X)",
      "Anterior 2/3 taste via CN VII; general sensation via V3",
      "Posterior 1/3 taste/sensation via CN IX",
    ],
    pediatrics:
      "Macroglossia is seen in Beckwith-Wiedemann syndrome and congenital hypothyroidism.",
  },
  diaphragm: {
    functionSummary:
      "Primary muscle of inspiration; separates thoracic and abdominal cavities.",
    commonPathologies: [
      "Diaphragmatic hernia",
      "Phrenic nerve palsy",
      "Hiatal hernia",
      "Hiccups",
    ],
    step1Pearls: [
      "Phrenic nerve C3-C5 keeps diaphragm alive",
      "Irritation can refer pain to shoulder",
      "Bochdalek hernia is posterolateral",
    ],
    pediatrics:
      "Congenital diaphragmatic hernia causes pulmonary hypoplasia and severe neonatal respiratory distress.",
  },
  pericardium: {
    functionSummary:
      "Fibroserous sac that limits acute cardiac dilation and reduces friction around the beating heart.",
    commonPathologies: [
      "Pericarditis",
      "Pericardial effusion",
      "Cardiac tamponade",
      "Constrictive pericarditis",
    ],
    step1Pearls: [
      "Tamponade causes Beck triad and pulsus paradoxus",
      "Pericarditis pain improves leaning forward",
      "Uremia can cause fibrinous pericarditis",
    ],
  },
  "right-atrium": {
    functionSummary:
      "Receives systemic and coronary venous blood (SVC, IVC, coronary sinus) and passively fills the right ventricle; site of SA node and fossa ovalis.",
    commonPathologies: [
      "Right atrial enlargement (tricuspid regurgitation, pulmonary hypertension)",
      "Atrial thrombus (less common than left atrial thrombus)",
      "Atrial septal defect at fossa ovalis",
      "Atrial arrhythmia foci",
    ],
    step1Pearls: [
      "Smooth sinus venarum (posterior) vs trabeculated auricle — embryologic boundary at crista terminalis",
      "SA node at superior crista terminalis near SVC orifice",
      "Koch triangle (AV node) bounded by coronary sinus, tendon of Todaro, tricuspid annulus",
      "RA pressure ↑ in RV failure, tricuspid regurgitation, pulmonary hypertension",
      "Fossa ovalis = remnant of foramen ovale",
    ],
    pediatrics:
      "Patent foramen ovale is common in neonates; secundum ASD at fossa ovalis is a frequent congenital lesion.",
  },
  "crista-terminalis": {
    functionSummary:
      "Internal ridge separating smooth sinus venarum from trabeculated right atrial appendage; anchors the sinoatrial node at its superior end.",
    commonPathologies: [
      "Echocardiographic pseudotumor (prominent ridge mimicking RA mass)",
      "Atrial tachycardia foci near crista terminalis",
    ],
    step1Pearls: [
      "Crista terminalis = junction of sinus venosus-derived smooth RA and primitive atrial trabeculations",
      "SA node at superior crista terminalis — pacemaker of normal sinus rhythm",
      "Prominent crista terminalis on echo can mimic right atrial thrombus or tumor",
      "Sulcus terminalis is the external groove corresponding to the internal crista",
    ],
  },
  appendix: {
    functionSummary:
      "Lymphoid-rich blind pouch with minor gut immune function.",
    commonPathologies: ["Acute appendicitis", "Carcinoid tumor", "Mucocele"],
    step1Pearls: [
      "Pain classically migrates from periumbilical to RLQ",
      "Luminal obstruction leads to bacterial overgrowth and ischemia",
      "Appendix is a common GI carcinoid site",
    ],
    pediatrics:
      "Appendicitis can present atypically in young children and perforates more readily.",
  },
  tonsils: {
    functionSummary:
      "Sample oropharyngeal antigens and support mucosal immune responses.",
    commonPathologies: [
      "Tonsillitis",
      "Peritonsillar abscess",
      "Sleep-disordered breathing",
      "Tonsillar lymphoma",
    ],
    step1Pearls: [
      "Palatine tonsils lie between palatoglossal and palatopharyngeal arches",
      "Group A strep pharyngitis can lead to rheumatic fever or PSGN",
    ],
    pediatrics:
      "Recurrent tonsillitis and tonsillar hypertrophy are common pediatric ENT problems.",
  },
  "salivary-gland": {
    functionSummary:
      "Exocrine oral glands producing saliva for lubrication, initial starch digestion (amylase), and mucosal defense.",
    commonPathologies: [
      "Mumps parotitis",
      "Sjögren syndrome",
      "Sialolithiasis",
      "Sialadenitis",
      "Pleomorphic adenoma",
    ],
    step1Pearls: [
      "Major glands — parotid (serous), submandibular (mixed), sublingual (mucous)",
      "Parotid innervation — CN IX secretomotor; CN VII passes through but does not innervate parotid",
      "Submandibular/sublingual — CN VII chorda tympani parasympathetic secretomotor",
      "Amylase from parotid; also elevated in acute pancreatitis",
    ],
    pediatrics:
      "Mumps parotitis is classic pediatric presentation; MMR prevents disease. Reduced salivary flow from medications or dehydration increases pediatric dental caries risk.",
  },
  "sweat-gland": {
    functionSummary:
      "Cutaneous exocrine glands secreting sweat — eccrine for thermoregulation; apocrine for scent in specific regions.",
    commonPathologies: [
      "Cystic fibrosis (↑ sweat chloride)",
      "Anhidrotic ectodermal dysplasia",
      "Hyperhidrosis",
      "Horner syndrome anhidrosis",
    ],
    step1Pearls: [
      "Eccrine everywhere; apocrine in axilla/areola/anogenital — activated at puberty",
      "Sympathetic cholinergic (ACh) innervation of eccrine glands — classic sympathetic exception",
      "CF sweat test quantifies eccrine sweat chloride after pilocarpine iontophoresis",
    ],
    pediatrics:
      "Neonates depend on eccrine sweating for heat loss; CF diagnosis confirmed by sweat chloride after positive newborn screen.",
  },
  parotid: {
    functionSummary:
      "Serous salivary gland secreting amylase-rich saliva into oral cavity via Stensen duct.",
    commonPathologies: [
      "Mumps parotitis",
      "Sialolithiasis",
      "Pleomorphic adenoma",
      "Warthin tumor",
      "Sjogren syndrome",
    ],
    step1Pearls: [
      "CN VII passes through parotid but does not innervate it",
      "Parasympathetic secretomotor pathway uses CN IX -> otic ganglion -> auriculotemporal nerve",
    ],
    pediatrics:
      "Mumps causes painful parotitis and is prevented by MMR vaccination.",
  },
  submandibular: {
    functionSummary:
      "Mixed serous/mucous salivary gland producing most unstimulated saliva.",
    commonPathologies: ["Sialolithiasis", "Sialadenitis", "Sjogren syndrome"],
    step1Pearls: [
      "Wharton duct stones are common due to uphill flow and viscous saliva",
      "Parasympathetic input from CN VII via chorda tympani/submandibular ganglion",
    ],
  },
  "sublingual-gland": {
    functionSummary:
      "Predominantly mucous salivary gland beneath the floor of mouth; drains via multiple ducts (Bartholin/ducts of Rivinus) into sublingual papillae.",
    commonPathologies: [
      "Ranula (mucous retention cyst)",
      "Sialolithiasis (less common than submandibular)",
      "Sjogren syndrome",
      "Salivary gland tumors",
    ],
    step1Pearls: [
      "Predominantly mucous acini — thick saliva",
      "Ranula — translucent floor-of-mouth cyst from duct obstruction",
      "CN VII secretomotor via chorda tympani and submandibular ganglion",
      "Minor salivary glands also scattered in oral mucosa",
    ],
    pediatrics:
      "Congenital ranula or mucocele can present in infants; usually benign but may need marsupialization if large.",
  },
  suprarenal: {
    functionSummary:
      "Adrenal gland combining steroid-producing cortex and catecholamine-producing medulla.",
    commonPathologies: [
      "Addison disease",
      "Cushing syndrome",
      "Hyperaldosteronism",
      "Pheochromocytoma",
    ],
    step1Pearls: [
      "Cortex = mesoderm; medulla = neural crest",
      "Adrenal vein sampling can localize aldosterone excess",
      "Waterhouse-Friderichsen = adrenal hemorrhage, classically meningococcemia",
    ],
  },
  clitoris: {
    functionSummary: "Erectile sensory organ homologous to glans penis.",
    commonPathologies: [
      "Clitoromegaly from androgen excess",
      "Trauma",
      "Congenital virilization",
    ],
    step1Pearls: [
      "DHT-dependent external genital development links clitoromegaly to androgen excess",
      "21-hydroxylase deficiency is classic cause of virilized XX infant",
    ],
    pediatrics:
      "Ambiguous genitalia/clitoromegaly in newborn should prompt CAH evaluation, especially 21-hydroxylase deficiency.",
  },
  penis: {
    functionSummary:
      "Male external organ for urination and sexual function; erectile tissue enables intercourse.",
    commonPathologies: [
      "Hypospadias",
      "Erectile dysfunction",
      "Peyronie disease",
      "Penile cancer",
      "Phimosis",
      "Paraphimosis",
    ],
    step1Pearls: [
      "Parasympathetic erection, sympathetic emission/ejaculation",
      "Hypospadias opens on ventral surface; do not circumcise before repair planning",
      "HPV increases penile squamous cell carcinoma risk",
    ],
    pediatrics:
      "Hypospadias is a common congenital anomaly and may indicate androgen synthesis/action problems if severe.",
  },
  scrotum: {
    functionSummary:
      "Cutaneous pouch housing the testes and epididymides; thermoregulation maintains testicular temperature below core body temperature for spermatogenesis.",
    commonPathologies: [
      "Cryptorchidism",
      "Testicular torsion",
      "Hydrocele",
      "Varicocele",
      "Epididymitis",
      "Fournier gangrene",
      "Scrotal trauma",
    ],
    step1Pearls: [
      "Cremaster reflex (L1–L2) — ipsilateral testicular elevation with inner thigh stroke",
      "Testes must be ~2–3°C below body temperature for normal spermatogenesis",
      "Torsion = surgical emergency; bell-clapper deformity predisposes",
      "Bag of worms = varicocele (left > right due to left renal vein angle)",
      "Transillumination: hydrocele glows; solid masses do not",
    ],
    pediatrics:
      "Undescended testis (cryptorchidism) increases infertility and germ cell tumor risk — orchiopexy typically by 6–18 months. Neonatal testes may be retractile; distinguish from true cryptorchidism.",
  },
  placenta: {
    functionSummary:
      "Transfers gases/nutrients/waste, produces hormones, and creates maternal-fetal immune interface.",
    commonPathologies: [
      "Preeclampsia",
      "Placenta previa",
      "Placental abruption",
      "Placenta accreta",
      "Molar pregnancy",
    ],
    step1Pearls: [
      "Syncytiotrophoblast produces hCG",
      "Spiral artery remodeling failure contributes to preeclampsia",
      "IgG crosses placenta via FcRn",
    ],
    pediatrics:
      "Placental insufficiency can cause fetal growth restriction and neonatal hypoglycemia/polycythemia.",
  },
  amnion: {
    functionSummary:
      "Amniotic sac protects the fetus from trauma and infection, permits fetal movement and lung development, and maintains temperature; amniotic fluid is swallowed (fetal urine production) and absorbed (intramembranous pathway) to regulate volume.",
    commonPathologies: [
      "Oligohydramnios — bilateral renal agenesis (Potter sequence), ROM, IUGR, post-term pregnancy",
      "Polyhydramnios — duodenal atresia, anencephaly, diabetes, fetal anemia, multifetal gestation",
      "Amniotic band sequence — fibrous bands cause constriction/amputation defects (see amniotic band constriction entry)",
      "Chorioamnionitis — intra-amniotic infection with prolonged ROM",
      "Meconium-stained amniotic fluid — fetal distress",
    ],
    step1Pearls: [
      "Amniotic fluid — fetal urine + lung fluid; swallowed and recycled",
      "Oligohydramnios → Potter sequence (pulmonary hypoplasia, limb/facial deformities)",
      "Polyhydramnios → impaired fetal swallowing (duodenal atresia, anencephaly) or ↑ production",
      "L/S ratio >2 in amniotic fluid suggests fetal lung maturity (lecithin/sphingomyelin)",
      "Amniotic bands — sporadic constriction defects, not genetic syndrome",
      "Prolonged ROM → chorioamnionitis risk",
    ],
    pediatrics:
      "Neonatal outcomes depend on amniotic fluid volume and quality — oligohydramnios causes pulmonary hypoplasia; meconium aspiration follows in utero or intrapartum meconium exposure.",
  },
  "umbilical-cord": {
    functionSummary:
      "Connects fetus to placenta and contains two arteries plus one vein in Wharton jelly.",
    commonPathologies: [
      "Single umbilical artery",
      "Nuchal cord",
      "Cord prolapse",
      "Omphalitis",
    ],
    step1Pearls: [
      "Umbilical vein carries oxygenated blood to fetus",
      "Umbilical arteries carry deoxygenated blood to placenta",
      "Ductus venosus shunts umbilical venous blood from umbilical vein to IVC, bypassing liver",
    ],
    pediatrics:
      "Single umbilical artery is associated with renal/cardiac anomalies and warrants careful newborn evaluation.",
  },
  "buccal-mucosa": {
    functionSummary:
      "Non-keratinized stratified squamous mucous membrane lining the inner cheeks — site of minor salivary glands, parotid duct opening, and common oral pathology on exam.",
    commonPathologies: [
      "Oral candidiasis (thrush) — scrapable white plaques",
      "Aphthous ulcers (canker sores)",
      "Koplik spots in measles",
      "Leukoplakia and oral squamous cell carcinoma",
      "Nicotine stomatitis / smokeless tobacco pouch keratosis",
      "Mucosal lichen planus — Wickham striae",
      "Fordyce spots — benign ectopic sebaceous glands",
    ],
    step1Pearls: [
      "Non-keratinized stratified squamous epithelium — vs keratinized gingiva and hard palate",
      "Koplik spots — bluish-white specks on erythematous buccal mucosa opposite molars (measles)",
      "Stensen duct opens on buccal mucosa opposite upper second molar — parotid saliva",
      "Thrush — Candida white plaques scrape off, erythematous base; pseudomembranous candidiasis",
      "Leukoplakia — white patch that cannot be scraped off; premalignant; biopsy if dysplasia suspected",
      "Buccal route — sublingual/buccal drug absorption (e.g., nitroglycerin SL, some hormones)",
      "vs tongue dorsum — different keratinization and pathology distribution",
    ],
    pediatrics:
      "Thrush common in neonates and after antibiotics. Koplik spots appear in measles prodrome before rash — examine buccal mucosa in febrile unvaccinated child. Aphthous ulcers frequent in children; HSV gingivostomatitis causes painful grouped vesicles on buccal mucosa and gums.",
  },
  "gingiva-oral": {
    functionSummary:
      "Keratinized oral mucosa protects tooth roots/alveolar bone and forms a seal around teeth.",
    commonPathologies: [
      "Gingivitis",
      "Periodontitis",
      "Scurvy gingival bleeding",
      "Drug-induced gingival hyperplasia",
      "Leukemia gingival infiltration",
    ],
    step1Pearls: [
      "Vitamin C deficiency impairs collagen hydroxylation -> swollen bleeding gums",
      "Phenytoin, cyclosporine, and calcium channel blockers cause gingival hyperplasia",
      "Poor oral hygiene drives plaque-mediated gingivitis",
    ],
    pediatrics:
      "Teething does not cause high fever; gingival bleeding in children should raise hygiene, platelet, leukemia, or vitamin C considerations depending context.",
  },
};

const ORGAN_METASTASIS: Record<string, string[]> = {
  heart: [
    "Primary cardiac malignancy is rare (myxoma most common benign tumor)",
    "When malignant, usually local invasion of myocardium/pericardium rather than distant spread",
  ],
  aorta: [
    "Not a typical primary malignancy site",
    "Primary aortic sarcomas are exceedingly rare and spread locally along the vessel wall",
  ],
  "pulmonary-artery": [
    "Not a typical primary malignancy site",
    "Pulmonary artery sarcoma (very rare) spreads locally within pulmonary vasculature and lung",
  ],
  "pulmonary-vein": [
    "Not a typical primary malignancy site",
    "Atrial myxoma can involve pulmonary venous inflow; lung cancer invades locally",
  ],
  "pulmonary-vein-ostia": [
    "Not a primary malignancy site",
    "Atrial fibrillation ablation targets tissue at PV-LA junction rather than metastatic disease",
  ],
  svc: [
    "Not a typical primary malignancy site",
    "More often compressed by mediastinal metastases (lung cancer, lymphoma) than a source of metastasis",
  ],
  ivc: [
    "Not a typical primary malignancy site",
    "Renal cell carcinoma classically grows into renal vein → IVC as tumor thrombus (extension, not discrete metastasis)",
  ],
  "ductus-arteriosus": [
    "Not a primary malignancy site (embryologic fetal shunt)",
  ],
  "ductus-venosus": [
    "Not a primary malignancy site (embryologic fetal venous shunt)",
  ],
  lungs: [
    "Non–small cell lung cancer — brain, bone, liver, adrenal glands",
    "Small cell lung cancer — early widespread hematogenous spread to liver, brain, adrenals, bone",
    "Bronchogenic carcinoma also spreads to contralateral lung and regional mediastinal/hilar nodes",
  ],
  lingula: [
    "Shares bronchogenic carcinoma metastatic patterns — brain, bone, liver, adrenal glands",
    "Regional hilar and mediastinal lymph nodes",
  ],
  larynx: [
    "Cervical lymph nodes (levels II–IV)",
    "Lung",
    "Local extension to thyroid, esophagus, and prevertebral tissues",
  ],
  pharynx: [
    "Cervical lymph nodes (levels I–V; retropharyngeal for nasopharynx)",
    "Lung and liver (especially nasopharyngeal carcinoma)",
    "Local invasion of skull base, orbit, and carotid sheath (nasopharyngeal)",
  ],
  nasopharynx: [
    "Cervical lymph nodes — often bilateral and early (levels II–V, retropharyngeal)",
    "Skull base and paranasal sinuses (local invasion)",
    "Lung and bone (hematogenous when advanced)",
    "EBV-associated carcinoma rarely skips nodal stage — cervical adenopathy may be presenting sign",
  ],
  trachea: [
    "Primary tracheal tumors are rare",
    "Local extension into lung, mediastinum, and esophagus",
    "Regional mediastinal lymph nodes",
  ],
  bronchi: [
    "Regional hilar and mediastinal lymph nodes",
    "Contralateral lung",
    "Distant hematogenous spread per histology — brain, bone, liver, adrenals (same as lung cancer)",
  ],
  pleura: [
    "Mesothelioma — local chest wall, diaphragm, and contralateral pleura (rarely distant)",
    "Pleural metastases from lung/breast/other primaries are far more common than primary pleural cancer",
  ],
  esophagus: [
    "Liver",
    "Lung",
    "Mediastinal and celiac lymph nodes",
    "Peritoneal seeding (especially adenocarcinoma)",
  ],
  stomach: [
    "Liver (portal circulation)",
    "Peritoneum (transcoelomic spread)",
    "Left supraclavicular node (Virchow node)",
    "Krukenberg tumor — bilateral ovarian metastases",
    "Lung",
  ],
  omentum: [
    "Omentum is primarily a metastatic destination, not a primary cancer site",
    "Gastric adenocarcinoma — omental seeding (omental cake)",
    "Epithelial ovarian cancer — omental metastases (omental caking)",
    "Pseudomyxoma peritonei — mucinous appendiceal/ovarian tumor spreads along omentum",
  ],
  peritoneum: [
    "Peritoneum is primarily a metastatic destination via transcoelomic spread",
    "Ovarian carcinoma — diffuse peritoneal carcinomatosis",
    "Gastric adenocarcinoma — peritoneal seeding",
    "Primary peritoneal carcinoma (rare) — spreads like ovarian serous carcinoma",
    "Mesothelioma arises from pleural/peritoneal mesothelium — local spread within cavity",
  ],
  intestines: [
    "Liver via portal venous drainage (classic for GI adenocarcinoma)",
    "Lung (hematogenous)",
    "Peritoneal carcinomatosis",
    "Regional mesenteric lymph nodes",
  ],
  "duodenum-proximal": [
    "Regional lymph nodes",
    "Liver and peritoneum (overlap with periampullary/pancreatic head cancers)",
    "Pancreaticoduodenal local invasion",
  ],
  jejunum: [
    "Mesenteric lymph nodes",
    "Liver (especially carcinoid/neuroendocrine tumors)",
    "Lung",
  ],
  ileum: [
    "Mesenteric lymph nodes",
    "Liver (carcinoid syndrome classically from ileal NET liver metastases)",
    "Lung",
  ],
  "peyer-patches": [
    "Not a primary carcinoma site — MALT lymphoma can arise in mucosal lymphoid tissue",
    "Regional mesenteric lymph nodes with advanced GI lymphoma",
  ],
  "crypts-of-lieberkuhn": [
    "Not an independent metastatic organ — epithelial malignancies arise from surrounding mucosa (adenocarcinoma)",
  ],
  cecum: ["Regional colonic lymph nodes", "Liver (portal route)", "Lung"],
  colon: [
    "Liver — first and most common hematogenous site (portal circulation)",
    "Lung",
    "Peritoneal carcinomatosis",
    "Regional mesenteric lymph nodes",
  ],
  "ascending-colon": [
    "Regional lymph nodes → liver (portal circulation) → lung",
    "Same colorectal adenocarcinoma metastatic pattern as colon overall",
  ],
  "transverse-colon": [
    "Regional lymph nodes → liver → lung",
    "Peritoneal spread possible via transverse mesocolon",
  ],
  "descending-colon": [
    "Regional lymph nodes → liver → lung",
    "Left-sided colonic cancers follow same portal-then-systemic pattern",
  ],
  "sigmoid-colon": [
    "Regional lymph nodes → liver → lung",
    "Peritoneal seeding and local pelvic extension when advanced",
  ],
  rectum: [
    "Liver and lung (systemic hematogenous route — bypasses portal first-pass for lower rectal lesions)",
    "Pelvic lymph nodes and local invasion (bladder, prostate, sacrum)",
    "Less classic Virchow node than proximal GI cancers",
  ],
  "anal-canal": [
    "Inguinal lymph nodes (below pectinate line — somatic drainage)",
    "Liver and lung when advanced",
    "Local extension to sphincters and perianal skin",
  ],
  liver: [
    "Intrahepatic spread along portal/hepatic veins",
    "Lung",
    "Portal vein tumor thrombus (HCC)",
    "Note: liver is far more often a metastatic destination (colon, breast, lung) than a source",
  ],
  gallbladder: [
    "Liver (direct extension)",
    "Regional lymph nodes (cystic duct, hepatic nodes)",
    "Peritoneum",
  ],
  "bile-duct": [
    "Regional lymph nodes (porta hepatis, celiac, peripancreatic)",
    "Liver (intrahepatic spread along bile ducts)",
    "Peritoneum",
    "Lung when advanced",
  ],
  pancreas: [
    "Liver",
    "Peritoneum (transcoelomic — classic for pancreatic adenocarcinoma)",
    "Lung",
    "Local invasion of duodenum, celiac plexus, and splenic/mesenteric vessels",
  ],
  spleen: [
    "Primary splenic malignancy is rare (angioma/angiosarcoma, lymphoma)",
    "Angiosarcoma can spread to liver and lung",
    "More commonly involved by systemic hematologic malignancies than solid tumor metastasis",
  ],
  kidney: [
    "Lung — classic 'cannonball' metastases (renal cell carcinoma)",
    "Bone — osteolytic lesions (RCC, thyroid)",
    "Brain and liver",
    "Renal vein → IVC tumor thrombus (local vascular extension)",
  ],
  "renal-artery": ["Not a typical primary malignancy site"],
  metanephros: [
    "Wilms tumor (embryologic context) — lung and liver hematogenous metastases",
    "Regional lymph nodes",
  ],
  "urogenital-membrane": [
    "Not a primary malignancy site (embryologic structure)",
  ],
  ureter: [
    "Regional lymph nodes",
    "Urothelial tract spread — bladder, contralateral ureter, renal pelvis (field effect)",
    "Local extension to retroperitoneum",
  ],
  bladder: [
    "Pelvic lymph nodes",
    "Liver, lung, and bone",
    "Local invasion of prostate, vagina, and pelvic sidewall",
  ],
  urethra: [
    "Regional inguinal and pelvic lymph nodes",
    "Local extension; distant spread uncommon until advanced",
  ],
  prostate: [
    "Bone — osteoblastic metastases (vertebrae, pelvis, ribs; classic Step 1 pattern)",
    "Lung and liver",
    "Regional pelvic and para-aortic lymph nodes",
  ],
  "seminal-vesicles": [
    "Not a primary malignancy site — involved by local extension of prostate adenocarcinoma",
    "Seminal vesicle invasion upstages prostate cancer (T3b)",
    "Distant spread follows prostate cancer pattern → bone, lung, regional nodes",
  ],
  testis: [
    "Retroperitoneal para-aortic lymph nodes (lymphatic route — does not follow inguinal drainage)",
    "Lung — most common distant hematogenous site",
    "Brain (choriocarcinoma component of mixed germ cell tumors)",
  ],
  epididymis: [
    "Adenocarcinoma of epididymis is rare",
    "Testicular germ cell tumors may involve epididymis locally; spread follows testicular pattern → retroperitoneal nodes, lung",
  ],
  "vas-deferens": [
    "Not a common primary malignancy site",
    "Local involvement by adjacent prostate or bladder pathology is uncommon; primary adenocarcinoma of vas deferens is rare",
  ],
  scrotum: [
    "Inguinal lymph nodes (scrotal skin drainage)",
    "Local extension; distant spread uncommon",
  ],
  ovary: [
    "Peritoneum and omentum (transcoelomic — classic for epithelial ovarian cancer)",
    "Pleural effusion (Müllerian spread)",
    "Liver surface and diaphragm",
    "Para-aortic lymph nodes",
  ],
  uterus: [
    "Endometrial carcinoma — lung, liver, peritoneum, vagina",
    "Leiomyosarcoma — hematogenous to lung",
    "Regional pelvic and para-aortic lymph nodes",
  ],
  endometrium: [
    "Lung and liver (hematogenous)",
    "Peritoneum and omentum",
    "Vaginal metastases (rare but classic for advanced endometrial cancer)",
    "Regional pelvic and para-aortic lymph nodes",
  ],
  cervix: [
    "Parametrium and pelvic sidewall (local)",
    "Pelvic and para-aortic lymph nodes",
    "Lung and liver (advanced disease)",
  ],
  "fallopian-tube": [
    "Peritoneum and omentum (high-grade serous carcinoma often arises from fimbria/tube)",
    "Para-aortic lymph nodes",
    "Same spread pattern as ovarian epithelial cancer",
  ],
  vagina: [
    "Inguinal nodes (lower third) or pelvic nodes (upper two-thirds)",
    "Local extension to bladder/rectum",
    "Lung when advanced",
  ],
  vulva: [
    "Inguinal lymph nodes (sentinel node drainage — unilateral or bilateral)",
    "Local invasion of urethra, vagina, and anus",
    "Lung and bone when advanced",
  ],
  breast: [
    "Axillary lymph nodes (sentinel node staging — level I–III)",
    "Bone — osteolytic or blastic metastases",
    "Lung, liver, and brain",
    "Internal mammary lymph nodes (parasternal chain)",
  ],
  thyroid: [
    "Papillary carcinoma — cervical lymph nodes, pulmonary micrometastases",
    "Follicular carcinoma — hematogenous to bone and lung",
    "Medullary carcinoma — cervical nodes, liver, bone, lung",
    "Anaplastic — rapid local and distant spread",
  ],
  parathyroid: [
    "Parathyroid carcinoma is rare",
    "Local invasion of thyroid and neck structures",
    "Lung and bone when metastatic",
  ],
  "adrenal-cortex": [
    "Adrenocortical carcinoma — liver, lung, peritoneum",
    "Local invasion of kidney, liver, and IVC",
    "Note: adrenal gland is also a common metastatic destination (lung, breast, melanoma)",
  ],
  "zona-glomerulosa": [
    "Adrenocortical adenoma rarely malignant",
    "When carcinoma arises from cortex, spreads as adrenal cortical carcinoma → liver, lung, peritoneum",
  ],
  "zona-fasciculata": [
    "Adrenocortical carcinoma (cortisol-secreting) → liver, lung, peritoneum",
    "Local invasion of adjacent kidney and vasculature",
  ],
  "zona-reticularis": [
    "Virilizing adrenocortical carcinoma → liver, lung, peritoneum",
    "Same metastatic pattern as other adrenal cortical zones",
  ],
  "adrenal-medulla": [
    "Pheochromocytoma — rarely metastatic (~10%); regional nodes, liver, bone when malignant",
    "Neuroblastoma — bone marrow, liver, skin, orbit (pediatric)",
  ],
  suprarenal: [
    "Adrenocortical carcinoma — liver, lung, peritoneum",
    "Pheochromocytoma/neuroblastoma (medulla) — nodes, liver, bone marrow",
    "Also a frequent site of metastases from lung, breast, and melanoma",
  ],
  pituitary: [
    "Pituitary adenoma — local extension into cavernous sinus and suprasellar cistern",
    "Rare extracranial metastasis (true pituitary carcinoma is very rare)",
    "Compression of optic chiasm (local mass effect, not metastasis)",
  ],
  pineal: [
    "Pineal/germ cell tumors — CSF drop metastases along spinal cord",
    "Local brainstem compression",
  ],
  thymus: [
    "Thymoma — pleura and lung (local/contiguous spread)",
    "Thymic carcinoma — regional mediastinal nodes, lung, liver",
  ],
  "bone-marrow": [
    "Primary hematologic malignancies (leukemia, lymphoma, myeloma) involve marrow systemically rather than 'metastasizing' from a single focus",
    "Solid tumors metastasize to bone marrow (prostate, breast, lung, neuroblastoma)",
  ],
  "lymph-nodes": [
    "Lymph nodes are secondary metastatic sites, not primary origins",
    "Carcinoma spreads to nodes via lymphatics; lymphoma arises primarily in lymphoid tissue",
  ],
  "systemic-lymphoid-system": [
    "Not a single primary site — hematologic malignancies (leukemia, lymphoma) spread systemically through marrow, nodes, and spleen",
  ],
  brain: [
    "Primary brain tumors (glioma, medulloblastoma) rarely metastasize outside CNS",
    "Medulloblastoma — CSF seeding to spine ('drop metastases')",
    "Glioblastoma — local CNS spread; extracranial metastasis is exceptional",
  ],
  "spinal-cord": [
    "Primary spinal cord tumors (ependymoma, astrocytoma) spread locally along cord",
    "Distant extracranial metastasis is uncommon",
    "Medulloblastoma drop metastases from brain can seed spinal leptomeninges",
  ],
  retina: [
    "Retinoblastoma — direct extension into orbit and optic nerve (CNS)",
    "Hematogenous spread is rare but can reach bone marrow and CNS when advanced",
  ],
  uvea: [
    "Uveal (choroidal) melanoma — hematogenous spread to liver (classic Step 1 pattern)",
    "Lung and bone when advanced",
    "Local extension within eye; rarely spreads to regional nodes (eye lacks lymphatics)",
  ],
  lens: ["Not a primary malignancy site"],
  cornea: [
    "Not a primary malignancy site (surface squamous neoplasia arises at limbus/conjunctiva)",
  ],
  conjunctiva: [
    "Local invasion of orbit and eyelid",
    "Preauricular and cervical lymph nodes (squamous cell carcinoma)",
  ],
  "inner-ear": [
    "Primary inner ear malignancy is exceedingly rare",
    "Local extension to cerebellopontine angle (vs benign vestibular schwannoma)",
  ],
  skin: [
    "Melanoma — widespread hematogenous spread: brain, lung, liver, GI tract, anywhere",
    "Squamous cell carcinoma — regional lymph nodes, local invasion",
    "Basal cell carcinoma — local invasion only (rarely metastasizes)",
  ],
  bone: [
    "Osteosarcoma — lung (classic hematogenous site)",
    "Ewing sarcoma — lung and bone",
    "Chondrosarcoma — local recurrence; lung when high-grade",
    "Note: bone is also a major metastatic destination (prostate blastic, breast/RCC lytic)",
  ],
  "skeletal-muscle": [
    "Rhabdomyosarcoma — lung, bone marrow, lymph nodes",
    "Leiomyosarcoma — lung and liver",
    "Primary skeletal muscle tumors are rare",
  ],
  teeth: [
    "Oral squamous cell carcinoma from gingiva/alveolus — cervical lymph nodes",
    "Ameloblastoma — local jaw invasion (benign but locally aggressive)",
  ],
  tongue: [
    "Cervical lymph nodes (levels I–IV; tip → ipsilateral, base → bilateral)",
    "Lung",
    "Local extension to floor of mouth and mandible",
  ],
  diaphragm: [
    "Primary diaphragmatic tumors are rare",
    "Local extension from lung, liver, or gastric primaries is more common",
  ],
  pericardium: [
    "Primary pericardial malignancy is rare",
    "Metastatic involvement from lung/breast/melanoma more common than primary spread from pericardium",
  ],
  appendix: [
    "Carcinoid tumor — liver (classic for appendiceal NET when metastatic)",
    "Appendiceal adenocarcinoma — follows colonic pattern → liver, peritoneum",
  ],
  tonsils: [
    "Cervical lymph nodes (levels II–III)",
    "Waldeyer ring and contralateral tonsil",
    "Lung when advanced (oropharyngeal SCC)",
  ],
  parotid: [
    "Pleomorphic adenoma malignant transformation — lung, bone",
    "Mucoepidermoid and adenoid cystic — local nodes, lung, bone (adenoid cystic has perineural spread)",
    "Facial nerve invasion locally",
  ],
  submandibular: [
    "Cervical lymph nodes (submandibular/level I–II)",
    "Local invasion; distant spread uncommon until advanced",
  ],
  "sublingual-gland": [
    "Cervical lymph nodes (level I–II submandibular/submental)",
    "Local floor-of-mouth invasion",
    "Lung when advanced (salivary gland malignancies)",
  ],
  clitoris: [
    "Inguinal lymph nodes (rare primary malignancy)",
    "Local extension",
  ],
  penis: [
    "Inguinal lymph nodes (sentinel node drainage — Step 1 classic)",
    "Pelvic nodes if deep corporal invasion",
    "Lung when advanced",
  ],
  placenta: [
    "Choriocarcinoma — hematogenous spread to lung (most common), brain, vagina",
    "Invasive mole — local uterine extension; can embolize to lung",
  ],
  amnion: ["Not a primary malignancy site (embryologic membrane)"],
  "umbilical-cord": ["Not a primary malignancy site"],
  allantois: [
    "Not a primary malignancy site (embryologic structure)",
    "Persistent urachus derivative can give rise to urachal carcinoma",
  ],
  urachus: [
    "Urachal adenocarcinoma — peritoneum, liver, lung",
    "Local pelvic invasion (bladder dome, anterior abdominal wall)",
  ],
  "gingiva-oral": [
    "Cervical lymph nodes (mandibular/maxillary drainage)",
    "Local invasion of alveolar bone and floor of mouth",
    "Lung when advanced (oral squamous cell carcinoma)",
  ],
};

const organById = new Map(
  ORGANS.map((o) => [
    o.id,
    {
      ...o,
      ...(ORGAN_DETAILS[o.id] ?? {}),
      cancerMetastasis: ORGAN_METASTASIS[o.id],
    },
  ]),
);

export function getOrganById(id: string): OrganEntry | undefined {
  return organById.get(id);
}

export interface AliasMatch {
  alias: string;
  organId: string;
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function buildAliasIndex(): AliasMatch[] {
  const matches: AliasMatch[] = [];
  for (const organ of ORGANS) {
    for (const alias of organ.aliases) {
      matches.push({ alias: alias.toLowerCase(), organId: organ.id });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}

export function buildMatchPattern(index: AliasMatch[]): RegExp {
  const parts = index.map(({ alias }) => {
    const escaped = escapeRegex(alias);
    const plural = alias.endsWith("s") ? escaped : `${escaped}(?:es|s)?`;
    return `\\b${plural}\\b`;
  });
  return new RegExp(`(${parts.join("|")})`, "gi");
}
