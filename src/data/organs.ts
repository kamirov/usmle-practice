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
    id: "pulmonary-artery",
    name: "Pulmonary Artery",
    etymology: "Latin pulmo = lung + Greek arteria = air-holder/artery",
    aliases: ["pulmonary artery", "pulmonary arteries"],
    germLayer: "Mesoderm",
    origin:
      "Derived from the truncus arteriosus via spiral septation, separating pulmonary and aortic outflow tracts.",
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
    id: "svc",
    name: "Superior Vena Cava",
    etymology: "Latin superior = higher + Latin vena = vein + Latin cavus = hollow",
    aliases: ["superior vena cava", "svc"],
    germLayer: "Mesoderm",
    origin:
      "Forms from the right common cardinal vein and right anterior cardinal vein (anterior cardinal system).",
  },
  {
    id: "ivc",
    name: "Inferior Vena Cava",
    etymology: "Latin inferior = lower + Latin vena = vein + Latin cavus = hollow",
    aliases: ["inferior vena cava", "ivc"],
    germLayer: "Mesoderm",
    origin:
      "Forms from the right vitelline vein, right subcardinal vein, and supracardinal anastomoses.",
  },
  {
    id: "ductus-arteriosus",
    name: "Ductus Arteriosus",
    etymology: "Latin ductus = channel + Latin arteriosus = arterial",
    aliases: ["ductus arteriosus"],
    germLayer: "Mesoderm",
    origin:
      "Embryonic shunt connecting pulmonary artery to aorta; derived from the distal sixth aortic arch.",
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
      "Develops from foregut endoderm and surrounding pharyngeal arch mesenchyme; divided into nasopharynx, oropharynx, and laryngopharynx.",
    derivatives: ["Waldeyer ring lymphoid tissue", "Tonsils", "Passageway shared by respiratory and digestive tracts"],
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
    id: "pleura",
    name: "Pleura",
    etymology: "Greek pleura = side/rib",
    aliases: ["pleura", "pleural"],
    germLayer: "Mesoderm",
    origin:
      "Parietal and visceral pleura derive from splanchnic mesoderm lining the pleuroperitoneal canals.",
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
    id: "stomach",
    name: "Stomach",
    etymology: "Greek gaster + Latin stomachus = stomach",
    aliases: ["stomach", "gastric"],
    germLayer: "Endoderm",
    origin:
      "Foregut endoderm dilates and rotates; greater and lesser curvatures form during 90° clockwise rotation.",
    derivatives: ["Fundus", "Body", "Pylorus"],
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
    derivatives: ["Ascending colon", "Transverse colon", "Descending colon", "Sigmoid colon"],
  },
  {
    id: "ascending-colon",
    name: "Ascending Colon",
    etymology: "Latin ascendere = to climb + Greek kolon = large intestine",
    aliases: [
      "ascending colon",
      "ascending colons",
      "right colon",
    ],
    germLayer: "Endoderm",
    origin:
      "Midgut derivative; forms the right-sided vertical segment from cecum to hepatic flexure during intestinal rotation.",
  },
  {
    id: "transverse-colon",
    name: "Transverse Colon",
    etymology: "Latin transversus = lying across + Greek kolon = large intestine",
    aliases: [
      "transverse colon",
      "transverse colons",
    ],
    germLayer: "Endoderm",
    origin:
      "Midgut derivative; horizontal segment from hepatic flexure to splenic flexure, longest intraperitoneal portion of colon.",
  },
  {
    id: "descending-colon",
    name: "Descending Colon",
    etymology: "Latin descendere = to go down + Greek kolon = large intestine",
    aliases: [
      "descending colon",
      "descending colons",
      "left colon",
    ],
    germLayer: "Endoderm",
    origin:
      "Hindgut derivative; left-sided vertical segment from splenic flexure to sigmoid colon.",
  },
  {
    id: "sigmoid-colon",
    name: "Sigmoid Colon",
    etymology: "Greek sigma = S-shaped letter + kolon = large intestine",
    aliases: [
      "sigmoid colon",
      "sigmoid colons",
      "sigmoid",
    ],
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
    etymology: "Greek ouron = urine + Latin genitalis = origin/birth + Latin membrana = skin/layer",
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
    id: "prostate",
    name: "Prostate",
    etymology: "Greek prostates = one standing before",
    aliases: ["prostate", "prostatic"],
    germLayer: "Endoderm",
    origin:
      "Urogenital sinus endoderm; grows around the urethra under influence of dihydrotestosterone.",
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
    id: "epididymis",
    name: "Epididymis",
    etymology: "Greek epi = upon + didymos = twin/testis",
    aliases: ["epididymis", "epididymal"],
    germLayer: "Mesoderm",
    origin:
      "Mesonephric (Wolffian) duct derivative; forms efferent ductules and epididymis under testosterone.",
  },
  {
    id: "scrotum",
    name: "Scrotum",
    etymology: "Latin scrotum = skin/pouch",
    aliases: [
      "scrotum",
      "scrotal",
      "scrotal sac",
      "scrotal pouch",
    ],
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
    id: "fallopian-tube",
    name: "Fallopian Tube",
    etymology: "eponym: Gabriele Falloppio + Latin tubus = pipe",
    aliases: ["fallopian tube", "fallopian tubes", "uterine tube", "oviduct"],
    germLayer: "Mesoderm",
    origin:
      "Cranial unfused portion of paramesonephric (Müllerian) ducts.",
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
    etymology: "Latin ad = near + renal = kidney + Latin cortex = bark/outer layer",
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
    etymology: "Latin zona = belt/band + glomerulus = small ball (clustered histologic appearance)",
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
    etymology: "Latin zona = belt/band + fasciculus = small bundle (parallel cordlike cell columns)",
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
    etymology: "Latin zona = belt/band + reticulum = network (anastomosing cell cords)",
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
    etymology: "Latin lympha = clear fluid + Greek eidos = form + Greek systema = organized whole",
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
    derivatives: ["Telencephalon", "Diencephalon", "Mesencephalon", "Metencephalon", "Myelencephalon"],
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
    id: "retina",
    name: "Retina",
    etymology: "Latin rete = net",
    aliases: ["retina", "retinal"],
    germLayer: "Ectoderm",
    origin:
      "Outpocketing of diencephalon (optic vesicle → optic cup); neuroectoderm forms neural retina.",
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
    id: "skin",
    name: "Skin",
    etymology: "Old Norse skinn = hide",
    aliases: ["skin", "epidermis", "dermis"],
    germLayer: "Ectoderm / Mesoderm",
    origin:
      "Epidermis from surface ectoderm; dermis from underlying mesoderm (dermatome).",
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
    etymology: "Greek skeletos = dried body/skeleton + Latin musculus = little mouse/muscle",
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
    id: "tongue",
    name: "Tongue",
    etymology: "Old English tunge = tongue",
    aliases: ["tongue", "lingual"],
    germLayer: "Mesoderm / Endoderm",
    origin:
      "Anterior 2/3 muscles from occipital somites; body from pharyngeal arches. Taste buds and mucosa mixed endoderm/ectoderm.",
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
    etymology: "Latin sub = under + mandibula = jaw + Latin glans = acorn/gland",
    aliases: ["submandibular gland", "submandibular"],
    germLayer: "Endoderm",
    origin:
      "Endodermal bud from floor of mouth (oral cavity endoderm).",
  },
  {
    id: "suprarenal",
    name: "Suprarenal Gland",
    etymology: "Latin supra = above + renal = kidney + Latin glans = acorn/gland",
    aliases: ["suprarenal", "suprarenal gland", "adrenal gland", "adrenal", "adrenal glands"],
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
      "Genital tubercle enlarges under dihydrotestosterone; urethra from urogenital sinus folds.",
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
    id: "umbilical-cord",
    name: "Umbilical Cord",
    etymology: "Latin umbilicus = navel + Latin chorda = string",
    aliases: ["umbilical cord"],
    germLayer: "Mesoderm",
    origin:
      "Extraembryonic mesoderm surrounds allantois and vitelline vessels; contains two arteries and one vein.",
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
    id: "gingiva-oral",
    name: "Gingiva (oral)",
    etymology: "Latin gingiva = gum around teeth",
    aliases: [
      "gingiva",
      "gingivae",
      "oral gingiva",
      "gums",
      "gum tissue",
    ],
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
  Pick<OrganEntry, "functionSummary" | "commonPathologies" | "step1Pearls" | "pediatrics">
> = {
  heart: {
    functionSummary: "Pumps blood through pulmonary and systemic circuits; coordinated electrical conduction produces effective cardiac output.",
    commonPathologies: ["Myocardial infarction", "Heart failure", "Arrhythmias", "Valvular disease", "Congenital septal defects"],
    step1Pearls: ["Coronary occlusion causes coagulative necrosis", "Left-sided failure causes pulmonary edema; right-sided failure causes peripheral edema", "S3 = volume overload; S4 = stiff ventricle"],
    pediatrics: "Congenital heart disease often presents with cyanosis, poor feeding, failure to thrive, or a murmur rather than adult angina symptoms.",
  },
  aorta: {
    functionSummary: "Elastic conduit that buffers systolic ejection and distributes oxygenated blood to systemic circulation.",
    commonPathologies: ["Atherosclerosis", "Aortic aneurysm", "Aortic dissection", "Coarctation of the aorta", "Aortic regurgitation/stenosis"],
    step1Pearls: ["Cystic medial degeneration predisposes to dissection in Marfan syndrome", "Coarctation causes upper-extremity hypertension and rib notching", "AAA classically occurs below renal arteries"],
  },
  "pulmonary-artery": {
    functionSummary: "Carries deoxygenated blood from right ventricle to lungs for gas exchange.",
    commonPathologies: ["Pulmonary embolism", "Pulmonary hypertension", "Pulmonic stenosis", "Patent ductus arteriosus shunts"],
    step1Pearls: ["Pulmonary arteries are low-pressure, high-compliance vessels", "Pulmonary emboli increase dead space and can cause acute right heart strain", "Eisenmenger physiology reverses left-to-right shunts to right-to-left"],
  },
  "pulmonary-vein": {
    functionSummary: "Returns oxygenated blood from lungs to left atrium.",
    commonPathologies: ["Pulmonary venous congestion", "Atrial fibrillation trigger foci", "Total anomalous pulmonary venous return"],
    step1Pearls: ["Pulmonary veins are the usual ablation target in atrial fibrillation", "Left heart failure raises pulmonary venous pressure -> pulmonary edema"],
    pediatrics: "Total anomalous pulmonary venous return is a cyanotic congenital lesion that requires mixing through ASD/PFO/PDA.",
  },
  svc: {
    functionSummary: "Returns venous blood from head, neck, upper limbs, and upper thorax to right atrium.",
    commonPathologies: ["SVC syndrome", "Thrombosis from central lines", "Mediastinal mass compression"],
    step1Pearls: ["Facial plethora, upper-extremity swelling, and distended chest veins point to SVC obstruction", "Bronchogenic carcinoma and lymphoma are classic causes"],
  },
  ivc: {
    functionSummary: "Returns venous blood from lower body and abdominal viscera to right atrium.",
    commonPathologies: ["IVC thrombosis", "Budd-Chiari outflow obstruction", "Compression by pregnancy or mass"],
    step1Pearls: ["IVC filters trap emboli from lower-extremity DVT", "Budd-Chiari causes painful hepatomegaly, ascites, and hepatic congestion"],
  },
  "ductus-arteriosus": {
    functionSummary: "Fetal shunt from pulmonary artery to aorta that bypasses high-resistance fetal lungs.",
    commonPathologies: ["Patent ductus arteriosus", "Ductal-dependent congenital heart disease", "Premature closure"],
    step1Pearls: ["PGE1 keeps ductus open; indomethacin/NSAIDs close it", "PDA causes continuous machine-like murmur and left-to-right shunt"],
    pediatrics: "Premature infants have higher PDA risk; some cyanotic lesions require prostaglandin to maintain ductal flow until repair.",
  },
  lungs: {
    functionSummary: "Perform gas exchange, acid-base regulation via CO2 elimination, and pulmonary vascular filtering/metabolism.",
    commonPathologies: ["Asthma", "COPD", "Pneumonia", "Pulmonary edema", "ARDS", "Pulmonary embolism"],
    step1Pearls: ["Type II pneumocytes make surfactant and regenerate alveolar epithelium", "V/Q mismatch is commonest hypoxemia mechanism", "Low DLCO suggests diffusion barrier or emphysema"],
    pediatrics: "Neonatal respiratory distress syndrome reflects surfactant deficiency; bronchiolitis from RSV is common in infants.",
  },
  larynx: {
    functionSummary: "Protects airway during swallowing and produces voice through vocal fold vibration.",
    commonPathologies: ["Croup", "Epiglottitis", "Vocal cord paralysis", "Laryngeal cancer"],
    step1Pearls: ["Recurrent laryngeal nerve injury causes hoarseness", "Croup causes inspiratory stridor and barking cough", "Epiglottitis is a drooling tripod emergency"],
    pediatrics: "Croup is usually parainfluenza; Hib vaccine sharply reduced pediatric epiglottitis.",
  },
  pharynx: {
    functionSummary: "Muscular tube connecting nasal/oral cavities to larynx and esophagus; conducts air and food and hosts lymphoid tissue for mucosal immunity.",
    commonPathologies: ["Pharyngitis", "Peritonsillar abscess", "Adenotonsillar hypertrophy", "Oropharyngeal cancer", "Zenker diverticulum"],
    step1Pearls: ["Shared airway and food passage — swallowing reflex protects airway", "Group A strep pharyngitis can trigger rheumatic fever or PSGN", "Posterior pharynx lesions suggest enteroviral herpangina or HSV distribution patterns"],
    pediatrics: "Strep pharyngitis and viral pharyngitis are common in children; peritonsillar abscess presents with trismus and uvular deviation.",
  },
  trachea: {
    functionSummary: "Conducts air from larynx to bronchi; ciliated mucosa clears particles upward.",
    commonPathologies: ["Tracheoesophageal fistula", "Tracheomalacia", "Foreign body obstruction", "Tracheitis"],
    step1Pearls: ["TE fistula presents with choking, coughing, cyanosis during feeds", "C-shaped cartilage rings keep airway patent", "Smoking impairs mucociliary clearance"],
    pediatrics: "Infants with esophageal atresia/TE fistula often have polyhydramnios history and feeding-associated respiratory distress.",
  },
  bronchi: {
    functionSummary: "Distribute airflow through branching conducting airways; smooth muscle controls airway resistance.",
    commonPathologies: ["Asthma", "Chronic bronchitis", "Bronchiectasis", "Aspiration", "Foreign body"],
    step1Pearls: ["Right main bronchus is wider, shorter, more vertical -> aspiration site", "Goblet cell hyperplasia defines chronic bronchitis", "Bronchiectasis causes permanent dilation from infection/inflammation"],
    pediatrics: "Unilateral wheeze in a child is foreign body until proven otherwise.",
  },
  pleura: {
    functionSummary: "Serous membrane lowers friction and couples lung expansion to chest wall mechanics.",
    commonPathologies: ["Pleural effusion", "Pneumothorax", "Mesothelioma", "Pleuritis"],
    step1Pearls: ["Transudate = pressure/oncotic problem; exudate = inflammation/malignancy", "Tension pneumothorax shifts mediastinum and needs immediate decompression", "Asbestos exposure causes pleural plaques and mesothelioma"],
  },
  esophagus: {
    functionSummary: "Transports food from pharynx to stomach via peristalsis and sphincter relaxation.",
    commonPathologies: ["GERD", "Barrett esophagus", "Achalasia", "Esophageal varices", "Squamous cell carcinoma/adenocarcinoma"],
    step1Pearls: ["Barrett = intestinal metaplasia from chronic GERD", "Achalasia = failure of LES relaxation from myenteric plexus loss", "Varices arise from portal-systemic anastomoses"],
  },
  stomach: {
    functionSummary: "Stores and churns food; secretes acid, intrinsic factor, pepsinogen, mucus, and hormones.",
    commonPathologies: ["Peptic ulcer disease", "Gastritis", "Gastric adenocarcinoma", "GIST", "Hypertrophic pyloric stenosis"],
    step1Pearls: ["Parietal cells secrete HCl and intrinsic factor", "H. pylori increases ulcers and gastric cancer risk", "Pernicious anemia targets parietal cells/intrinsic factor"],
    pediatrics: "Projectile nonbilious vomiting at 2-8 weeks suggests hypertrophic pyloric stenosis.",
  },
  intestines: {
    functionSummary: "Digest and absorb nutrients, water, and electrolytes; host microbiome; mucosal immunity and endocrine signaling (GLP-1, secretin, CCK).",
    commonPathologies: ["Celiac disease", "Crohn disease", "Ulcerative colitis", "Small bowel obstruction", "Short bowel syndrome", "Lactose intolerance"],
    step1Pearls: [
      "Small intestine — villi increase surface area; jejunum absorbs most nutrients; ileum absorbs B12 and bile acids",
      "Large intestine — water/sodium reabsorption; colonocytes use short-chain fatty acids from fermentation",
      "Peyer patches in ileum — mucosal immunity; GALT throughout intestinal lamina propria",
      "Portal circulation carries absorbed nutrients to liver first (first-pass metabolism)",
      "Crypts of Lieberkühn contain stem cells; villi shorten in celiac and tropical sprue",
    ],
    pediatrics: "Necrotizing enterocolitis affects preterm intestinal mucosa; Hirschsprung disease causes functional obstruction from absent ganglia in distal colon.",
  },
  "duodenum-proximal": {
    functionSummary: "Receives gastric chyme plus bile and pancreatic enzymes; major site of iron absorption.",
    commonPathologies: ["Duodenal ulcer", "Celiac disease", "Annular pancreas", "Superior mesenteric artery syndrome"],
    step1Pearls: ["Duodenal ulcers improve with meals and are often H. pylori-related", "Celiac disease damages proximal small bowel villi", "Ampulla marks foregut-midgut boundary"],
  },
  jejunum: {
    functionSummary: "Absorbs most carbohydrates, amino acids, lipids, folate, and water.",
    commonPathologies: ["Celiac disease", "Ischemia", "Small bowel obstruction", "Whipple disease"],
    step1Pearls: ["Jejunum has tall plicae circulares and long vasa recta compared with ileum", "Folate absorbed in jejunum; B12/bile acids in ileum"],
  },
  ileum: {
    functionSummary: "Absorbs bile acids and vitamin B12; contains Peyer patches for mucosal immunity.",
    commonPathologies: ["Crohn disease", "Meckel diverticulum", "Gallstone ileus", "B12 deficiency after resection"],
    step1Pearls: ["Crohn commonly affects terminal ileum", "Meckel = true diverticulum from vitelline duct; rule of 2s", "Peyer patches are lymphoid aggregates"],
    pediatrics: "Meckel diverticulum classically causes painless lower GI bleeding in children.",
  },
  cecum: {
    functionSummary: "Receives ileal contents and begins large-bowel water/electrolyte handling; appendix arises from cecum.",
    commonPathologies: ["Appendicitis", "Cecal volvulus", "Adenocarcinoma", "Typhlitis in neutropenia"],
    step1Pearls: ["Cecum is common site of distention in large-bowel obstruction", "Midgut blood supply from SMA"],
  },
  colon: {
    functionSummary: "Absorbs water/electrolytes, stores stool, and hosts microbiota that produce short-chain fatty acids/vitamin K.",
    commonPathologies: ["Ulcerative colitis", "Diverticulosis/diverticulitis", "Colorectal cancer", "Ischemic colitis", "C. difficile colitis"],
    step1Pearls: ["Left colon/hindgut supplied by IMA; right colon/midgut by SMA", "UC is continuous from rectum; Crohn is skip lesions", "Adenoma-carcinoma sequence involves APC then KRAS then p53"],
  },
  "ascending-colon": {
    functionSummary: "Receives cecal contents and absorbs water/sodium as feces begin forming; retroperitoneal right colon segment.",
    commonPathologies: ["Crohn disease", "Colorectal adenocarcinoma", "Ischemic colitis (less common than watershed flexures)", "Infectious colitis"],
    step1Pearls: ["Midgut derivative — SMA supply (ileocolic, right colic arteries)", "Retroperitoneal — covered by adventitia not serosa", "Crohn can affect ascending colon with skip lesions", "Right-sided colon cancer may present with anemia from occult bleeding"],
    pediatrics: "Same midgut embryology; intussusception ileocolic junction is adjacent anatomic landmark in infants.",
  },
  "transverse-colon": {
    functionSummary: "Intraperitoneal horizontal colon segment continuing water absorption; suspended by transverse mesocolon.",
    commonPathologies: ["Colorectal cancer", "Ulcerative colitis (extensive colitis)", "Ischemic colitis at splenic flexure watershed", "Volvulus (rare)"],
    step1Pearls: ["Midgut derivative — primarily SMA (middle colic artery); marginal artery connects to IMA", "Intraperitoneal — serosa and transverse mesocolon", "Splenic flexure is watershed between SMA and IMA — ischemic colitis risk", "Greater omentum attaches to transverse colon"],
    pediatrics: "Malrotation/volvulus can involve midgut including transverse colon; same vascular watershed principles apply.",
  },
  "descending-colon": {
    functionSummary: "Left retroperitoneal colon segment continuing fecal dehydration and storage before sigmoid loop.",
    commonPathologies: ["Diverticulosis", "Colorectal cancer", "Ulcerative colitis", "Ischemic colitis"],
    step1Pearls: ["Hindgut derivative — IMA supply (left colic artery)", "Retroperitoneal — adventitia outer layer", "Diverticulosis more common in left colon than right", "UC extends continuously through descending colon when pancolitis present"],
  },
  "sigmoid-colon": {
    functionSummary: "S-shaped intraperitoneal colon loop storing formed stool before rectum; highly mobile on sigmoid mesocolon.",
    commonPathologies: ["Diverticulosis/diverticulitis", "Sigmoid volvulus", "Colorectal cancer", "Ulcerative colitis"],
    step1Pearls: ["Hindgut — IMA sigmoid arteries", "Most common site for diverticulosis and diverticulitis in Western adults", "Sigmoid volvulus — coffee-bean sign on abdominal X-ray; elderly/institutionalized", "Intraperitoneal with long mesocolon → increased mobility and volvulus risk"],
    pediatrics: "Sigmoid volvulus rare in children; Hirschsprung disease affects rectosigmoid transition zone.",
  },
  rectum: {
    functionSummary: "Stores feces and coordinates defecation reflex with anal sphincters.",
    commonPathologies: ["Rectal cancer", "Hemorrhoids", "Proctitis", "Rectal prolapse"],
    step1Pearls: ["Rectal venous drainage partly bypasses portal system", "Internal hemorrhoids are above pectinate line and usually painless"],
  },
  "anal-canal": {
    functionSummary: "Controls continence and defecation through internal and external sphincters.",
    commonPathologies: ["Hemorrhoids", "Anal fissure", "Anal abscess/fistula", "Squamous cell carcinoma"],
    step1Pearls: ["Above pectinate line: visceral, painless, columnar; below: somatic pain, squamous", "HPV 16/18 increases anal cancer risk"],
  },
  liver: {
    functionSummary: "Performs metabolism, detoxification, bile production, glycogen storage, plasma protein synthesis, and immune filtering.",
    commonPathologies: ["Hepatitis", "Cirrhosis", "Portal hypertension", "Hepatocellular carcinoma", "Fatty liver disease"],
    step1Pearls: ["Centrilobular zone 3 is vulnerable to ischemia and acetaminophen toxicity", "Albumin and clotting factors reflect synthetic function", "Kupffer cells are liver macrophages"],
  },
  gallbladder: {
    functionSummary: "Stores and concentrates bile, then contracts in response to CCK after fatty meals.",
    commonPathologies: ["Cholelithiasis", "Acute cholecystitis", "Choledocholithiasis", "Gallstone pancreatitis"],
    step1Pearls: ["Cholesterol stones are radiolucent; pigment stones occur with hemolysis/infection", "RUQ pain after fatty meals points to biliary colic", "Porcelain gallbladder increases carcinoma risk"],
  },
  pancreas: {
    functionSummary: "Secretes digestive enzymes/bicarbonate and endocrine hormones insulin, glucagon, somatostatin, and pancreatic polypeptide.",
    commonPathologies: ["Acute pancreatitis", "Pancreatic adenocarcinoma", "Diabetes mellitus", "Cystic fibrosis pancreatic insufficiency", "Insulinoma"],
    step1Pearls: ["Pancreatic head cancer causes painless jaundice", "Pancreatitis from gallstones/alcohol; autodigestion by activated enzymes", "Beta cells secrete insulin in islets"],
  },
  spleen: {
    functionSummary: "Filters blood, removes old RBCs/platelets, mounts immune responses to blood-borne encapsulated organisms.",
    commonPathologies: ["Splenomegaly", "Functional asplenia", "Splenic rupture", "Auto-splenectomy in sickle cell disease"],
    step1Pearls: ["Asplenia increases sepsis risk from S. pneumoniae, H. influenzae, N. meningitidis", "Howell-Jolly bodies indicate impaired splenic function", "Red pulp filters RBCs; white pulp is lymphoid"],
    pediatrics: "Children with sickle cell disease develop functional asplenia early and need vaccination/prophylaxis.",
  },
  kidney: {
    functionSummary: "Filters plasma, regulates electrolytes/acid-base/volume, secretes renin and EPO, activates vitamin D.",
    commonPathologies: ["Acute kidney injury", "Glomerulonephritis", "Nephrotic syndrome", "Pyelonephritis", "Polycystic kidney disease"],
    step1Pearls: ["Juxtaglomerular cells release renin", "PCT reabsorbs most filtered Na/water/glucose/amino acids", "Podocyte injury drives proteinuria"],
  },
  metanephros: {
    functionSummary: "Embryonic definitive kidney primordium formed by reciprocal induction between ureteric bud and metanephric mesenchyme.",
    commonPathologies: ["Renal agenesis", "Renal dysplasia", "Wilms tumor", "Horseshoe kidney", "UPJ obstruction"],
    step1Pearls: [
      "Metanephric mesenchyme → nephron (glomerulus through DCT); ureteric bud → collecting system",
      "Reciprocal induction — each tissue requires the other or kidney fails to form",
      "Failure → bilateral agenesis → oligohydramnios → Potter sequence",
      "vs mesonephros/pronephros — transient earlier kidneys; metanephros is permanent",
    ],
    pediatrics: "Congenital renal anomalies originate in metanephric development; Wilms tumor arises from persistent blastema.",
  },
  "urogenital-membrane": {
    functionSummary: "Temporary membrane covering the ventral urogenital sinus outlet; perforates to form the external urogenital opening after cloacal partitioning.",
    commonPathologies: ["Abnormal perforation timing", "Bladder exstrophy spectrum (developmental field defect)", "Imperforate urogenital membrane (rare)"],
    step1Pearls: [
      "Urorectal septum divides cloaca → urogenital sinus (ventral) and rectum (dorsal)",
      "Urogenital membrane must break down/perforate for external urethral opening",
      "Failure of cloacal development links to exstrophy-epispadias complex on boards",
      "vs anal membrane — dorsal counterpart after septation",
    ],
    pediatrics: "Neonatal urinary outlet anomalies reflect abnormal urogenital sinus and membrane development; distinguish from patent urachus (allantoic remnant).",
  },
  ureter: {
    functionSummary: "Moves urine from renal pelvis to bladder by peristalsis.",
    commonPathologies: ["Nephrolithiasis obstruction", "Vesicoureteral reflux", "Ureteropelvic junction obstruction"],
    step1Pearls: ["Stones lodge at UPJ, pelvic brim, and UVJ", "Pain radiates flank to groin due to T11-L2 fibers"],
  },
  bladder: {
    functionSummary: "Stores urine at low pressure and coordinates voiding via detrusor contraction and sphincter relaxation.",
    commonPathologies: ["Cystitis", "Bladder cancer", "Neurogenic bladder", "Vesicoureteral reflux"],
    step1Pearls: ["Transitional cell carcinoma is linked to smoking, aniline dyes, cyclophosphamide, schistosomiasis", "Parasympathetic pelvic nerves contract detrusor"],
    pediatrics: "Vesicoureteral reflux predisposes to recurrent UTIs and renal scarring in children.",
  },
  urethra: {
    functionSummary: "Conducts urine from bladder to exterior; male urethra also carries semen.",
    commonPathologies: ["Urethritis", "Hypospadias/epispadias", "Urethral stricture", "Traumatic urethral injury"],
    step1Pearls: ["Gonorrhea causes purulent urethritis; chlamydia often watery/mucoid", "Blood at urethral meatus after pelvic fracture suggests urethral injury"],
  },
  prostate: {
    functionSummary: "Produces alkaline prostatic fluid that contributes to semen and supports sperm motility.",
    commonPathologies: ["Benign prostatic hyperplasia", "Prostate adenocarcinoma", "Prostatitis"],
    step1Pearls: ["BPH arises in periurethral transition zone; cancer often posterior peripheral zone", "PSA is prostate kallikrein; increased in cancer, BPH, prostatitis"],
  },
  testis: {
    functionSummary: "Produces sperm in seminiferous tubules and testosterone from Leydig cells.",
    commonPathologies: ["Testicular torsion", "Germ cell tumors", "Cryptorchidism", "Orchitis", "Varicocele-related infertility"],
    step1Pearls: ["Sertoli cells make inhibin B and AMH; Leydig cells make testosterone", "Seminomas are radiosensitive; yolk sac tumors increase AFP", "Torsion loses cremasteric reflex"],
    pediatrics: "Cryptorchidism increases infertility and germ cell tumor risk; torsion is a surgical emergency in adolescents.",
  },
  epididymis: {
    functionSummary: "Stores and matures sperm acquired from seminiferous tubules.",
    commonPathologies: ["Epididymitis", "Spermatocele", "Obstruction causing infertility"],
    step1Pearls: ["Young sexually active: Chlamydia/gonorrhea; older men: E. coli", "Pain relief with elevation suggests epididymitis more than torsion"],
  },
  ovary: {
    functionSummary: "Produces oocytes, estrogen, progesterone, inhibin, and androgen precursors.",
    commonPathologies: ["Polycystic ovary syndrome", "Ovarian torsion", "Epithelial ovarian cancer", "Germ cell tumors", "Endometrioma"],
    step1Pearls: ["Granulosa cells aromatize theca androgens via FSH", "BRCA1/2 increase ovarian cancer risk", "Dysgerminoma is ovarian seminoma counterpart"],
  },
  uterus: {
    functionSummary: "Supports implantation, menstruation, pregnancy, and labor via endometrium and myometrium.",
    commonPathologies: ["Leiomyomas", "Endometrial hyperplasia/carcinoma", "Adenomyosis", "Endometritis", "Müllerian anomalies"],
    step1Pearls: ["Unopposed estrogen drives endometrial hyperplasia", "Fibroids are estrogen-sensitive benign smooth muscle tumors", "Adenomyosis = endometrial glands in myometrium"],
  },
  "fallopian-tube": {
    functionSummary: "Captures ovulated oocyte, supports fertilization, and transports embryo to uterus.",
    commonPathologies: ["Ectopic pregnancy", "Salpingitis/PID", "Hydrosalpinx", "High-grade serous carcinoma origin"],
    step1Pearls: ["Most ectopic pregnancies occur in ampulla", "PID scarring increases infertility and ectopic risk", "Ciliated cells move ovum toward uterus"],
  },
  vagina: {
    functionSummary: "Fibromuscular canal for intercourse, menstrual flow, and childbirth; acidic microbiome protects against infection.",
    commonPathologies: ["Vaginitis", "Bacterial vaginosis", "Candida", "Trichomoniasis", "Vaginal atresia"],
    step1Pearls: ["Lactobacilli produce lactic acid", "BV has clue cells and fishy odor", "Candida causes thick white discharge with pseudohyphae"],
  },
  thyroid: {
    functionSummary: "Produces T3/T4 to regulate metabolism and calcitonin from C cells to lower calcium.",
    commonPathologies: ["Graves disease", "Hashimoto thyroiditis", "Thyroid nodules/cancer", "Congenital hypothyroidism"],
    step1Pearls: ["T4 converts to T3 peripherally", "Parafollicular C cells are neural crest-derived and cause medullary carcinoma", "PTU blocks peroxidase and peripheral conversion"],
    pediatrics: "Congenital hypothyroidism causes intellectual disability if untreated; screen newborns.",
  },
  parathyroid: {
    functionSummary: "Secretes PTH to increase serum calcium and lower phosphate via bone, kidney, and vitamin D activation.",
    commonPathologies: ["Primary hyperparathyroidism", "Secondary hyperparathyroidism in CKD", "Hypoparathyroidism after surgery", "DiGeorge syndrome"],
    step1Pearls: ["PTH increases calcium reabsorption and phosphate wasting in kidney", "PTH indirectly increases gut calcium absorption via 1-alpha hydroxylase", "DiGeorge: failed 3rd/4th pouch development"],
    pediatrics: "DiGeorge syndrome causes hypocalcemic tetany/seizures from parathyroid aplasia.",
  },
  "adrenal-cortex": {
    functionSummary: "Steroid-producing outer adrenal layer organized into three zones — glomerulosa (aldosterone), fasciculata (cortisol), reticularis (adrenal androgens).",
    commonPathologies: ["Addison disease", "Cushing syndrome", "Conn syndrome", "Congenital adrenal hyperplasia"],
    step1Pearls: [
      "GFR mnemonic: salt (glomerulosa), sugar (fasciculata), sex (reticularis)",
      "Embryology: cortex = mesoderm from celomic epithelium; medulla = neural crest inside cortex",
      "21-hydroxylase deficiency → ↓ cortisol ± aldosterone, ↑ androgens",
      "ACTH drives cortisol and adrenal androgens; aldosterone primarily driven by angiotensin II and K⁺",
      "vs medulla — cortex makes steroids; medulla makes catecholamines",
    ],
    pediatrics: "Classic CAH can cause salt wasting and virilization/ambiguous genitalia in newborns.",
  },
  "zona-glomerulosa": {
    functionSummary: "Outermost adrenal cortical zone; secretes aldosterone to promote distal nephron Na⁺ reabsorption and K⁺/H⁺ excretion.",
    commonPathologies: ["Primary hyperaldosteronism (Conn syndrome)", "Adrenal adenoma with aldosterone excess", "17α-hydroxylase deficiency (↑ mineralocorticoids, ↓ cortisol/sex steroids)"],
    step1Pearls: [
      "Salt layer — mineralocorticoid (aldosterone) production",
      "Stimulated by angiotensin II and hyperkalemia; ACTH has minor acute effect",
      "Spironolactone and eplerenone block mineralocorticoid receptor downstream",
      "vs zona fasciculata — aldosterone not cortisol; renin-angiotensin driven not primary ACTH axis",
    ],
    pediatrics: "CAH forms with mineralocorticoid excess (e.g., 17α-hydroxylase deficiency) can cause hypertension and hypokalemic alkalosis in children.",
  },
  "zona-fasciculata": {
    functionSummary: "Middle and largest adrenal cortical zone; secretes cortisol in response to ACTH, regulating glucose metabolism, stress response, and immune function.",
    commonPathologies: ["Cushing syndrome", "Adrenal adenoma/carcinoma with cortisol excess", "Addison disease (cortisol deficiency)", "21-hydroxylase CAH (↓ cortisol)"],
    step1Pearls: [
      "Sugar layer — glucocorticoid (cortisol) production",
      "ACTH from anterior pituitary is primary regulator via CRH–HPA axis",
      "Histology: lipid-rich foamy cytoplasm from cholesterol ester stores",
      "Dexamethasone suppression test evaluates cortisol feedback",
      "vs zona glomerulosa — cortisol not aldosterone; ACTH-dependent",
    ],
    pediatrics: "Exogenous glucocorticoids suppress ACTH and can cause adrenal insufficiency on withdrawal; congenital adrenal hyperplasia lowers cortisol and raises ACTH.",
  },
  "zona-reticularis": {
    functionSummary: "Inner adrenal cortical zone; secretes adrenal androgens (DHEA, androstenedione) in an ACTH-dependent manner, contributing to pubic hair and secondary sexual characteristics.",
    commonPathologies: ["Adrenal virilization", "21-hydroxylase CAH (↑ androgens)", "11β-hydroxylase CAH", "Adrenocortical carcinoma with androgen excess"],
    step1Pearls: [
      "Sex layer — adrenal androgen (DHEA/DHEAS, androstenedione) production",
      "Becomes functionally prominent at adrenarche (puberty)",
      "ACTH stimulates androgen synthesis; 21-hydroxylase block shunts precursors to androgens",
      "vs ovarian/testicular androgens — zona reticularis is adrenal source of weak androgens",
      "vs zona fasciculata — androgens not cortisol",
    ],
    pediatrics: "Premature adrenarche or CAH-related adrenal androgen excess can cause pubic hair, clitoromegaly, or accelerated growth in children.",
  },
  "adrenal-medulla": {
    functionSummary: "Chromaffin cells secrete epinephrine and norepinephrine as modified postganglionic sympathetic neurons.",
    commonPathologies: ["Pheochromocytoma", "Neuroblastoma", "MEN2-associated tumors"],
    step1Pearls: [
      "Embryology: neural crest (ectoderm) migrates into mesodermal adrenal cortex primordium",
      "Chromaffin cells = modified sympathetic postganglionic neurons releasing catecholamines into blood",
      "PNMT converts norepinephrine → epinephrine in medulla (requires cortisol induction from cortex)",
      "Episodic headache, sweating, tachycardia, hypertension suggests pheochromocytoma",
      "Treat alpha blockade before beta blockade (unopposed α if β blocked first)",
      "vs adrenal cortex — catecholamines not steroids",
    ],
    pediatrics: "Neuroblastoma is a common pediatric adrenal medulla/sympathetic chain tumor with elevated HVA/VMA.",
  },
  pituitary: {
    functionSummary: "Coordinates endocrine axes through anterior pituitary hormones and posterior ADH/oxytocin release.",
    commonPathologies: ["Prolactinoma", "Pituitary adenoma", "Diabetes insipidus", "Sheehan syndrome", "Craniopharyngioma"],
    step1Pearls: ["Anterior pituitary from Rathke pouch; posterior from neuroectoderm", "Dopamine inhibits prolactin", "Bitemporal hemianopsia from optic chiasm compression"],
    pediatrics: "Craniopharyngioma is a common suprasellar pediatric tumor causing endocrine deficits and visual symptoms.",
  },
  pineal: {
    functionSummary: "Secretes melatonin and helps regulate circadian rhythm.",
    commonPathologies: ["Pinealoma", "Germinoma", "Parinaud syndrome", "Precocious puberty"],
    step1Pearls: ["Pineal mass can compress dorsal midbrain causing vertical gaze palsy", "Beta-hCG-secreting germinoma can trigger precocious puberty"],
  },
  thymus: {
    functionSummary: "Site of T-cell maturation, positive/negative selection, and central tolerance.",
    commonPathologies: ["Thymic aplasia in DiGeorge", "Thymoma", "Myasthenia gravis association"],
    step1Pearls: ["Hassall corpuscles are thymic medullary epithelial structures", "AIRE mutation causes autoimmune polyendocrine syndrome", "Thymus derives from third pouch endoderm"],
    pediatrics: "DiGeorge syndrome causes thymic aplasia with recurrent viral/fungal infections and hypocalcemia.",
  },
  "bone-marrow": {
    functionSummary: "Produces blood cells and houses hematopoietic stem cells and plasma cells.",
    commonPathologies: ["Leukemia", "Aplastic anemia", "Myelofibrosis", "Multiple myeloma", "Marrow infiltration"],
    step1Pearls: ["Adult hematopoiesis occurs mostly in axial skeleton", "Fatty marrow increases with age", "Pancytopenia suggests marrow failure or infiltration"],
  },
  "lymph-nodes": {
    functionSummary: "Filter lymph and organize adaptive immune responses between antigen-presenting cells, B cells, and T cells.",
    commonPathologies: ["Reactive lymphadenopathy", "Lymphoma", "Metastatic carcinoma", "Cat-scratch disease", "TB lymphadenitis"],
    step1Pearls: ["Follicles/germinal centers are B-cell zones; paracortex is T-cell zone", "HIV depletes paracortical CD4 T cells", "Painful nodes often reactive; rubbery painless nodes suggest lymphoma"],
  },
  "systemic-lymphoid-system": {
    functionSummary: "Coordinates immune surveillance and lymph drainage: primary organs generate/mature lymphocytes; secondary organs trap antigen and activate adaptive immune responses.",
    commonPathologies: ["Lymphoma/leukemia", "Asplenic sepsis", "HIV/AIDS", "SCID/DiGeorge syndrome", "Chronic granulomatous disease", "Autoimmune lymphadenopathy"],
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
    functionSummary: "Integrates sensory, motor, autonomic, cognitive, emotional, and endocrine control.",
    commonPathologies: ["Stroke", "Brain tumors", "Meningitis/encephalitis", "Demyelinating disease", "Neurodegenerative disease"],
    step1Pearls: ["MCA stroke affects face/arm and language in dominant hemisphere", "Watershed infarcts follow global hypoperfusion", "Astrocytes form glial scar"],
    pediatrics: "Neural tube defects are prevented by folate; pediatric brain tumors often arise infratentorially.",
  },
  "spinal-cord": {
    functionSummary: "Conducts motor/sensory/autonomic signals and mediates reflexes.",
    commonPathologies: ["Spinal cord injury", "Syringomyelia", "Subacute combined degeneration", "Poliomyelitis", "Multiple sclerosis lesions"],
    step1Pearls: ["Dorsal columns carry vibration/proprioception; spinothalamic carries pain/temp", "Anterior horn lesions cause LMN signs", "Brown-Sequard gives ipsilateral motor/proprioception loss and contralateral pain/temp loss"],
  },
  retina: {
    functionSummary: "Converts light into neural signals via rods/cones and retinal ganglion cells.",
    commonPathologies: ["Diabetic retinopathy", "Hypertensive retinopathy", "Retinal detachment", "Retinitis pigmentosa", "Macular degeneration"],
    step1Pearls: ["Rods handle night/peripheral vision; cones handle color/acuity", "Central retinal artery occlusion causes cherry-red spot", "Vitamin A deficiency causes night blindness"],
    pediatrics: "Retinoblastoma presents with leukocoria; mutation of both RB alleles is classic.",
  },
  lens: {
    functionSummary: "Focuses light onto retina by changing shape during accommodation.",
    commonPathologies: ["Cataracts", "Ectopia lentis", "Presbyopia"],
    step1Pearls: ["Sorbitol accumulation contributes to diabetic/galactosemic cataracts", "Marfan: superotemporal lens dislocation; homocystinuria: inferonasal", "Lens has no blood supply"],
    pediatrics: "Congenital cataracts can occur with rubella, galactosemia, or genetic syndromes.",
  },
  cornea: {
    functionSummary: "Transparent anterior refractive surface and barrier against pathogens/trauma.",
    commonPathologies: ["Corneal abrasion", "Keratitis", "Keratoconus", "Fuchs dystrophy", "Corneal ulcer"],
    step1Pearls: ["CN V1 mediates corneal reflex afferent; CN VII efferent blink", "HSV keratitis causes dendritic ulcers", "Wilson disease deposits copper in Descemet membrane as Kayser-Fleischer rings"],
  },
  conjunctiva: {
    functionSummary: "Vascularized mucous membrane lining eyelids and sclera; produces mucin via goblet cells and contributes to tear film stability.",
    commonPathologies: ["Bacterial conjunctivitis", "Viral conjunctivitis", "Allergic conjunctivitis", "Episcleritis/scleritis", "Pterygium"],
    step1Pearls: [
      "Scleral icterus visible through bulbar conjunctiva in hyperbilirubinemia",
      "Red eye with discharge: bacterial (purulent) vs viral (watery, lymphoid follicles) vs allergic (itching, eosinophils)",
      "Adenovirus — pharyngoconjunctival fever (pharyngitis + conjunctivitis + fever)",
      "Conjunctiva is vascularized; cornea is avascular — key clinical distinction",
      "Chemosis = conjunctival edema (e.g., anaphylaxis, CHF)",
    ],
    pediatrics: "Neonatal conjunctivitis (ophthalmia neonatorum): N. gonorrhoeae (days 2–5, urgent), C. trachomatis (days 5–14), HSV, or chemical irritant from prophylaxis.",
  },
  "inner-ear": {
    functionSummary: "Cochlea mediates hearing; vestibular apparatus mediates balance and head acceleration.",
    commonPathologies: ["Sensorineural hearing loss", "Ménière disease", "BPPV", "Vestibular schwannoma", "Labyrinthitis"],
    step1Pearls: ["Hair cells transduce motion through K+ influx from endolymph", "Aminoglycosides can cause ototoxicity", "CN VIII carries hearing/balance"],
    pediatrics: "Congenital CMV is a major cause of sensorineural hearing loss.",
  },
  skin: {
    functionSummary: "Barrier, immune surveillance, thermoregulation, sensation, vitamin D synthesis, and fluid-loss prevention.",
    commonPathologies: ["Atopic dermatitis", "Psoriasis", "Melanoma", "Basal/squamous cell carcinoma", "Burns"],
    step1Pearls: ["Epidermis is ectoderm; dermis is mesoderm", "Langerhans cells present antigen; Merkel cells sense touch", "UVB converts 7-dehydrocholesterol to vitamin D3"],
    pediatrics: "Atopic dermatitis commonly starts in infancy and may precede food allergy/asthma in the atopic march.",
  },
  bone: {
    functionSummary: "Provides structure, protects organs, stores calcium/phosphate, and hosts marrow hematopoiesis.",
    commonPathologies: ["Osteoporosis", "Osteomalacia/rickets", "Osteomyelitis", "Paget disease", "Bone tumors"],
    step1Pearls: ["Osteoblasts build bone; osteoclasts resorb via RANKL signaling", "PTH increases osteoclast activity indirectly through osteoblasts", "Woven bone is immature; lamellar bone is mature"],
    pediatrics: "Rickets causes defective mineralization of growth plates in children, commonly from vitamin D deficiency.",
  },
  "skeletal-muscle": {
    functionSummary: "Generates voluntary movement, posture, heat, and glucose disposal.",
    commonPathologies: ["Muscular dystrophy", "Myasthenia gravis", "Inflammatory myopathy", "Rhabdomyolysis", "Malignant hyperthermia"],
    step1Pearls: ["Dystrophin links cytoskeleton to extracellular matrix", "ACh receptor antibodies cause myasthenia gravis", "RYR1 mutation predisposes to malignant hyperthermia"],
    pediatrics: "Duchenne muscular dystrophy presents in boys with Gowers sign and calf pseudohypertrophy.",
  },
  teeth: {
    functionSummary: "Cut and grind food; enamel/dentin protect pulp and transmit mechanical forces.",
    commonPathologies: ["Dental caries", "Periodontal disease", "Enamel defects", "Tooth abscess"],
    step1Pearls: ["Enamel from ectodermal ameloblasts; dentin from neural crest odontoblasts", "S. mutans produces acid from sucrose -> caries"],
    pediatrics: "Delayed tooth eruption or enamel defects can point to endocrine, nutritional, or genetic disorders.",
  },
  tongue: {
    functionSummary: "Supports taste, speech articulation, chewing, and swallowing.",
    commonPathologies: ["Glossitis", "Oral candidiasis", "Tongue cancer", "Macroglossia", "Ankyloglossia"],
    step1Pearls: ["CN XII controls motor except palatoglossus (CN X)", "Anterior 2/3 taste via CN VII; general sensation via V3", "Posterior 1/3 taste/sensation via CN IX"],
    pediatrics: "Macroglossia is seen in Beckwith-Wiedemann syndrome and congenital hypothyroidism.",
  },
  diaphragm: {
    functionSummary: "Primary muscle of inspiration; separates thoracic and abdominal cavities.",
    commonPathologies: ["Diaphragmatic hernia", "Phrenic nerve palsy", "Hiatal hernia", "Hiccups"],
    step1Pearls: ["Phrenic nerve C3-C5 keeps diaphragm alive", "Irritation can refer pain to shoulder", "Bochdalek hernia is posterolateral"],
    pediatrics: "Congenital diaphragmatic hernia causes pulmonary hypoplasia and severe neonatal respiratory distress.",
  },
  pericardium: {
    functionSummary: "Fibroserous sac that limits acute cardiac dilation and reduces friction around the beating heart.",
    commonPathologies: ["Pericarditis", "Pericardial effusion", "Cardiac tamponade", "Constrictive pericarditis"],
    step1Pearls: ["Tamponade causes Beck triad and pulsus paradoxus", "Pericarditis pain improves leaning forward", "Uremia can cause fibrinous pericarditis"],
  },
  appendix: {
    functionSummary: "Lymphoid-rich blind pouch with minor gut immune function.",
    commonPathologies: ["Acute appendicitis", "Carcinoid tumor", "Mucocele"],
    step1Pearls: ["Pain classically migrates from periumbilical to RLQ", "Luminal obstruction leads to bacterial overgrowth and ischemia", "Appendix is a common GI carcinoid site"],
    pediatrics: "Appendicitis can present atypically in young children and perforates more readily.",
  },
  tonsils: {
    functionSummary: "Sample oropharyngeal antigens and support mucosal immune responses.",
    commonPathologies: ["Tonsillitis", "Peritonsillar abscess", "Sleep-disordered breathing", "Tonsillar lymphoma"],
    step1Pearls: ["Palatine tonsils lie between palatoglossal and palatopharyngeal arches", "Group A strep pharyngitis can lead to rheumatic fever or PSGN"],
    pediatrics: "Recurrent tonsillitis and tonsillar hypertrophy are common pediatric ENT problems.",
  },
  parotid: {
    functionSummary: "Serous salivary gland secreting amylase-rich saliva into oral cavity via Stensen duct.",
    commonPathologies: ["Mumps parotitis", "Sialolithiasis", "Pleomorphic adenoma", "Warthin tumor", "Sjogren syndrome"],
    step1Pearls: ["CN VII passes through parotid but does not innervate it", "Parasympathetic secretomotor pathway uses CN IX -> otic ganglion -> auriculotemporal nerve"],
    pediatrics: "Mumps causes painful parotitis and is prevented by MMR vaccination.",
  },
  submandibular: {
    functionSummary: "Mixed serous/mucous salivary gland producing most unstimulated saliva.",
    commonPathologies: ["Sialolithiasis", "Sialadenitis", "Sjogren syndrome"],
    step1Pearls: ["Wharton duct stones are common due to uphill flow and viscous saliva", "Parasympathetic input from CN VII via chorda tympani/submandibular ganglion"],
  },
  suprarenal: {
    functionSummary: "Adrenal gland combining steroid-producing cortex and catecholamine-producing medulla.",
    commonPathologies: ["Addison disease", "Cushing syndrome", "Hyperaldosteronism", "Pheochromocytoma"],
    step1Pearls: ["Cortex = mesoderm; medulla = neural crest", "Adrenal vein sampling can localize aldosterone excess", "Waterhouse-Friderichsen = adrenal hemorrhage, classically meningococcemia"],
  },
  clitoris: {
    functionSummary: "Erectile sensory organ homologous to glans penis.",
    commonPathologies: ["Clitoromegaly from androgen excess", "Trauma", "Congenital virilization"],
    step1Pearls: ["DHT-dependent external genital development links clitoromegaly to androgen excess", "21-hydroxylase deficiency is classic cause of virilized XX infant"],
    pediatrics: "Ambiguous genitalia/clitoromegaly in newborn should prompt CAH evaluation, especially 21-hydroxylase deficiency.",
  },
  penis: {
    functionSummary: "Male external organ for urination and sexual function; erectile tissue enables intercourse.",
    commonPathologies: ["Hypospadias", "Erectile dysfunction", "Peyronie disease", "Penile cancer", "Phimosis", "Paraphimosis"],
    step1Pearls: ["Parasympathetic erection, sympathetic emission/ejaculation", "Hypospadias opens on ventral surface; do not circumcise before repair planning", "HPV increases penile squamous cell carcinoma risk"],
    pediatrics: "Hypospadias is a common congenital anomaly and may indicate androgen synthesis/action problems if severe.",
  },
  scrotum: {
    functionSummary: "Cutaneous pouch housing the testes and epididymides; thermoregulation maintains testicular temperature below core body temperature for spermatogenesis.",
    commonPathologies: ["Cryptorchidism", "Testicular torsion", "Hydrocele", "Varicocele", "Epididymitis", "Fournier gangrene", "Scrotal trauma"],
    step1Pearls: ["Cremaster reflex (L1–L2) — ipsilateral testicular elevation with inner thigh stroke", "Testes must be ~2–3°C below body temperature for normal spermatogenesis", "Torsion = surgical emergency; bell-clapper deformity predisposes", "Bag of worms = varicocele (left > right due to left renal vein angle)", "Transillumination: hydrocele glows; solid masses do not"],
    pediatrics: "Undescended testis (cryptorchidism) increases infertility and germ cell tumor risk — orchiopexy typically by 6–18 months. Neonatal testes may be retractile; distinguish from true cryptorchidism.",
  },
  placenta: {
    functionSummary: "Transfers gases/nutrients/waste, produces hormones, and creates maternal-fetal immune interface.",
    commonPathologies: ["Preeclampsia", "Placenta previa", "Placental abruption", "Placenta accreta", "Molar pregnancy"],
    step1Pearls: ["Syncytiotrophoblast produces hCG", "Spiral artery remodeling failure contributes to preeclampsia", "IgG crosses placenta via FcRn"],
    pediatrics: "Placental insufficiency can cause fetal growth restriction and neonatal hypoglycemia/polycythemia.",
  },
  "umbilical-cord": {
    functionSummary: "Connects fetus to placenta and contains two arteries plus one vein in Wharton jelly.",
    commonPathologies: ["Single umbilical artery", "Nuchal cord", "Cord prolapse", "Omphalitis"],
    step1Pearls: ["Umbilical vein carries oxygenated blood to fetus", "Umbilical arteries carry deoxygenated blood to placenta", "Ductus venosus shunts umbilical venous blood toward IVC"],
    pediatrics: "Single umbilical artery is associated with renal/cardiac anomalies and warrants careful newborn evaluation.",
  },
  "gingiva-oral": {
    functionSummary: "Keratinized oral mucosa protects tooth roots/alveolar bone and forms a seal around teeth.",
    commonPathologies: ["Gingivitis", "Periodontitis", "Scurvy gingival bleeding", "Drug-induced gingival hyperplasia", "Leukemia gingival infiltration"],
    step1Pearls: ["Vitamin C deficiency impairs collagen hydroxylation -> swollen bleeding gums", "Phenytoin, cyclosporine, and calcium channel blockers cause gingival hyperplasia", "Poor oral hygiene drives plaque-mediated gingivitis"],
    pediatrics: "Teething does not cause high fever; gingival bleeding in children should raise hygiene, platelet, leukemia, or vitamin C considerations depending context.",
  },
};

const organById = new Map(
  ORGANS.map((o) => [o.id, { ...o, ...(ORGAN_DETAILS[o.id] ?? {}) }]),
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
