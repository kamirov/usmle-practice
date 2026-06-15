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
    id: "pulmonary-vein-ostia",
    name: "Pulmonary Vein Ostia",
    etymology: "Latin pulmo = lung + Latin vena = vein + Latin ostium = mouth/opening",
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
    derivatives: ["Right horn of sinus venosus → SVC", "Left common cardinal component → coronary sinus (partial)"],
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
    id: "pharyngeal-pouch",
    name: "Pharyngeal Pouch",
    etymology: "Greek pharynx = throat + Old English poca = bag + endodermal outpocketing",
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
    germLayer: "Endoderm (with surrounding pharyngeal arch mesenchyme and neural crest)",
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
    derivatives: ["Pharyngeal tonsil (adenoids)", "Eustachian tube orifices", "Fossa of Rosenmüller"],
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
    derivatives: ["Greater omentum (apron over intestines)", "Lesser omentum (hepatogastric and hepatoduodenal ligaments)"],
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
    derivatives: ["Parietal peritoneum", "Visceral peritoneum (serosa)", "Mesenteries and omenta"],
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
    ],
    germLayer: "Endoderm",
    origin:
      "Invaginations of small intestinal (and colonic) mucosa between villi formed from endodermal epithelium; base houses intestinal stem cells that regenerate the entire villus/crypt axis every ~3–5 days.",
    derivatives: [
      "Intestinal stem cells (crypt base columnar cells)",
      "Paneth cells — defensins, lysozyme at crypt base",
      "Goblet cells — mucin secretion",
      "Enterocytes — absorption on villus surface",
      "Enteroendocrine cells — secretin, CCK, GIP secreting cells",
    ],
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
    derivatives: ["Right and left hepatic ducts", "Common hepatic duct", "Cystic duct", "Common bile duct"],
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
    id: "ampulla-of-vater",
    name: "Ampulla of Vater",
    etymology: "Latin ampulla = flask + Vater = Abraham Vater (German anatomist who described the papilla)",
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
      "sphincter of oddi region",
    ],
    germLayer: "Endoderm (foregut–midgut junction)",
    origin:
      "Common bile duct and main pancreatic duct converge at this papilla in the descending duodenum; bile and pancreatic enzymes enter the duodenal lumen through the sphincter of Oddi.",
    derivatives: ["Sphincter of Oddi (smooth muscle complex at ampullary orifice)"],
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
    germLayer: "Endoderm (with splanchnic mesoderm for muscularis and mesenteries)",
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
    aliases: [
      "midgut",
      "midguts",
      "middle gut",
      "mid gut",
    ],
    germLayer: "Endoderm (with splanchnic mesoderm for mesentery and muscularis)",
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
    germLayer: "Endoderm (with splanchnic mesoderm; cloacal endoderm for urogenital derivatives)",
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
    etymology: "Latin costa = rib + vertebra = joint of spine + Latin angulus = corner",
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
    aliases: [
      "renal artery",
      "renal arteries",
      "renal arterial",
    ],
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
    derivatives: ["Basalis layer", "Functional layer", "Spiral arteries", "Decidua (in pregnancy)"],
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
    derivatives: ["Labia majora", "Labia minora", "Clitoris", "Vestibule", "Bartholin glands"],
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
    derivatives: ["Lobules and ducts", "Nipple and areola", "Lactiferous ducts"],
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
    id: "arachnoid-villi",
    name: "Arachnoid Villi",
    etymology: "Greek arachne = spider + -oid = like + Latin villus = shaggy hair/tuft",
    aliases: [
      "arachnoid villi",
      "arachnoid villus",
      "arachnoid granulations",
      "arachnoid granulation",
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
    id: "forebrain",
    name: "Forebrain",
    etymology: "Old English fore = front + brain = enkephalos",
    aliases: [
      "forebrain",
      "fore brain",
      "prosencephalon",
      "anterior brain",
    ],
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
    id: "caudate",
    name: "Caudate Nucleus",
    etymology: "Latin cauda = tail + -ate = resembling (tail-like curve around lateral ventricle)",
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
      "Principal input nucleus of the basal ganglia (dorsal striatum with putamen); receives glutamatergic input from cortex and modulates movement, cognition, and motivation via direct/indirect pathway medium spiny neurons.",
    commonPathologies: [
      "Huntington disease — caudate atrophy first on imaging",
      "Wilson disease — basal ganglia degeneration",
      "Vascular lacunar stroke in caudate — contralateral motor deficits",
      "Hyperglycemic hemichorea-hemiballismus — putamen/caudate involvement",
    ],
    step1Pearls: [
      "Caudate + putamen = dorsal striatum (motor); nucleus accumbens = ventral striatum (reward)",
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
    etymology: "Latin mamma = breast/nipple + -illary = small + bodies = paired structures (nipple-like gray matter protrusions)",
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
      "Motor component of dorsal striatum receiving cortical glutamatergic input; integrates with globus pallidus and substantia nigra for initiation and suppression of voluntary movement.",
    commonPathologies: [
      "Parkinson disease — dopamine depletion in putamen/caudate striatum",
      "Huntington disease — striatal neuron loss including putamen",
      "Hypertensive putaminal hemorrhage — classic lacunar/bleeding site with contralateral hemiparesis",
      "Carbon monoxide poisoning — bilateral putamen necrosis",
    ],
    step1Pearls: [
      "Putamen + globus pallidus = lentiform nucleus; caudate is separate but functionally striatum together",
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
    aliases: [
      "midbrain",
      "mid brain",
      "mesencephalon",
      "mesencephalons",
    ],
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
    id: "hindbrain",
    name: "Hindbrain",
    etymology: "Old English hind = back + brain; Greek rhombencephalon = rhombus brain",
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
      "Metencephalon — pons, cerebellum",
      "Myelencephalon — medulla oblongata",
      "Fourth ventricle",
    ],
    functionSummary:
      "Coordinates balance and motor learning (cerebellum), regulates vital autonomic functions (medullary respiratory/cardiovascular centers), and relays signals between cerebrum and spinal cord (pons).",
    commonPathologies: [
      "Medulloblastoma (cerebellar, pediatric)",
      "Chiari malformation (cerebellar tonsil herniation)",
      "Lateral medullary (Wallenberg) syndrome",
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
    etymology: "Latin cauda = horse tail + Latin equina = of a horse (bundle of lumbosacral nerve roots resembling a tail)",
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
    etymology: "Latin rete = net",
    aliases: ["retina", "retinal"],
    germLayer: "Ectoderm",
    origin:
      "Outpocketing of diencephalon (optic vesicle → optic cup); neuroectoderm forms neural retina.",
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
    etymology: "Greek optikos = of sight + Greek chiasma = cross/marked with χ (chi)",
    aliases: [
      "optic chiasm",
      "optic chiasma",
      "optic chiasms",
      "chiasm",
      "chiasma",
      "optic decussation",
    ],
    germLayer: "Ectoderm",
    origin:
      "Formed where nasal retinal ganglion cell axons from each optic nerve decussate to join temporal fibers of the contralateral optic tract — lies above the sella turcica in the suprasellar cistern.",
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
    etymology: "Latin cavus = hollow (vena cava) + Latin tri = three + Latin cuspis = point (tricuspid) + Greek isthmos = narrow neck/bridge",
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
    etymology: "atrioventricular + Latin nodus = knot = atrioventricular junctional pacemaker tissue",
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
    id: "his-purkinje-system",
    name: "His-Purkinje System",
    etymology: "eponym: Wilhelm His Jr. + eponym: Johannes Evangelista Purkinje + English system = specialized ventricular conduction network",
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
    id: "sublingual-gland",
    name: "Sublingual Gland",
    etymology: "Latin sub = under + lingua = tongue + Latin glans = acorn/gland",
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
  Pick<OrganEntry, "functionSummary" | "commonPathologies" | "cancerMetastasis" | "step1Pearls" | "pediatrics">
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
  "pharyngeal-pouch": {
    functionSummary: "Embryologic endodermal outpocketings patterning upper airway, middle ear, tonsillar epithelium, thymus, and parathyroid development.",
    commonPathologies: ["DiGeorge syndrome (3rd/4th pouch failure)", "Branchial cleft cyst/fistula", "Thymic aplasia", "Hypoparathyroidism"],
    step1Pearls: [
      "3rd pouch → inferior parathyroids + thymus; 4th pouch → superior parathyroids",
      "1st pouch → middle ear/Eustachian tube; 2nd pouch → palatine tonsil epithelium",
      "DiGeorge = failed 3rd/4th pouch → hypocalcemia, T-cell deficiency, conotruncal heart defects",
      "Pouches = endoderm; pharyngeal arches = mesoderm + neural crest (different structure)",
    ],
    pediatrics: "Neonatal hypocalcemic seizures and absent thymic shadow on chest X-ray point to 3rd/4th pharyngeal pouch failure (DiGeorge).",
  },
  nasopharynx: {
    functionSummary: "Superior pharyngeal segment connecting nasal cavity to oropharynx; conducts air, drains middle ear via Eustachian tubes, and hosts adenoidal lymphoid tissue.",
    commonPathologies: ["Nasopharyngeal carcinoma", "Adenoid hypertrophy", "Otitis media with effusion", "Juvenile nasopharyngeal angiofibroma"],
    step1Pearls: [
      "EBV-associated undifferentiated nasopharyngeal carcinoma — Asian/endemic epidemiology; biopsy shows syncytial cells with lymphoid stroma",
      "Fossa of Rosenmüller is common site of origin",
      "Eustachian tube dysfunction → serous otitis media",
      "Juvenile nasopharyngeal angiofibroma — adolescent male epistaxis/obstruction",
    ],
    pediatrics: "Adenoid hypertrophy causes mouth breathing, snoring, and otitis media with effusion; juvenile nasopharyngeal angiofibroma occurs in adolescent males.",
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
  omentum: {
    functionSummary: "Peritoneal fold that stores fat, cushions abdominal organs, and contributes to immune surveillance and wound sealing (greater omentum wraps injured viscera).",
    commonPathologies: ["Omental infarction", "Omental cake (omental metastases)", "Omental torsion", "Greater omentum adhesion after surgery"],
    step1Pearls: [
      "Greater omentum — apron from greater curvature of stomach; transverse colon suspended within it",
      "Lesser omentum — hepatogastric and hepatoduodenal ligaments (portal triad in free edge)",
      "Omental metastases — gastric and ovarian carcinoma seeding (omental cake)",
      "Greater omentum can wall off perforated viscus",
    ],
    pediatrics: "Primary omental torsion is rare in children but can mimic appendicitis with focal pain.",
  },
  peritoneum: {
    functionSummary: "Serous membrane lining the abdominal cavity and covering viscera; produces lubricating fluid and forms mesenteries, omenta, and ligaments.",
    commonPathologies: ["Peritonitis", "Ascites", "Peritoneal carcinomatosis", "Mesenteric ischemia", "Adhesions"],
    step1Pearls: [
      "Parietal peritoneum — somatic innervation (sharp localized pain)",
      "Visceral peritoneum — autonomic innervation (dull referred pain)",
      "Transcoelomic spread — ovarian and gastric cancers seed peritoneum without hematogenous route",
      "Retroperitoneal organs (kidney, pancreas head, duodenum) have adventitia not serosa",
    ],
    pediatrics: "Meckel diverticulum and appendicitis cause peritonitis when perforated; neonatal peritonitis may follow necrotizing enterocolitis.",
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
  "peyer-patches": {
    functionSummary: "Aggregated lymphoid follicles in ileal submucosa that sample luminal antigen via M cells and initiate mucosal IgA immune responses as part of GALT/MALT.",
    commonPathologies: ["Salmonella typhi invasion (typhoid)", "Yersinia ileitis", "MALT lymphoma", "HIV-associated mucosal depletion"],
    step1Pearls: [
      "Peyer patches = organized lymphoid follicles in ileum — part of GALT/MALT",
      "M cells overlying patches transport antigen to underlying lymphoid tissue",
      "Typhoid (S. Typhi) invades through M cells → Peyer's patch hypertrophy/necrosis → ileal ulceration/perforation",
      "Oral polio vaccine replicates in intestinal lymphoid tissue including Peyer patches",
      "vs isolated lamina propria lymphocytes — Peyer patches are macroscopic aggregated follicles",
    ],
    pediatrics: "Typhoid ileal perforation classically described in endemic settings; oral live-attenuated vaccines exploit intestinal lymphoid tissue for mucosal immunity in children.",
  },
  "crypts-of-lieberkuhn": {
    functionSummary: "Intestinal gland crypts between villi housing stem cells and secretory cells (Paneth, goblet, enteroendocrine) that regenerate and maintain the mucosal epithelium.",
    commonPathologies: ["Celiac disease (crypt hyperplasia)", "Tropical sprue", "Radiation enteritis", "Cryptosporidiosis", "Necrotizing enterocolitis"],
    step1Pearls: [
      "Crypts of Lieberkühn contain intestinal stem cells at the base",
      "Paneth cells at crypt base secrete defensins and lysozyme — antimicrobial",
      "Stem cells regenerate villus epithelium every ~3–5 days",
      "Celiac disease — villous blunting + crypt hyperplasia (increased crypt:villus ratio)",
      "Enteroendocrine cells in crypts secrete GI hormones (secretin, CCK, GIP)",
      "vs gastric pits — stomach has gastric glands, not Lieberkühn crypts",
    ],
    pediatrics: "NEC damages neonatal intestinal crypts and mucosa; celiac disease can present in toddlers with failure to thrive and crypt hyperplasia on biopsy.",
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
  "bile-duct": {
    functionSummary: "Conducts bile from liver and gallbladder to duodenum; intrahepatic and extrahepatic ducts enable digestion and bilirubin excretion.",
    commonPathologies: ["Choledocholithiasis", "Cholangiocarcinoma", "Primary sclerosing cholangitis", "Biliary atresia", "Caroli disease"],
    step1Pearls: [
      "Cholangiocarcinoma — painless jaundice, dilated intrahepatic ducts; associated with PSC and liver flukes",
      "Common bile duct joins pancreatic duct at ampulla of Vater (Sphincter of Oddi)",
      "Biliary atresia — neonatal conjugated hyperbilirubinemia; absent/obliterated extrahepatic ducts",
      "Courvoisier sign — palpable non-tender gallbladder + jaundice suggests malignant distal obstruction",
    ],
    pediatrics: "Biliary atresia presents with persistent neonatal jaundice and acholic stools; requires Kasai portoenterostomy or transplant.",
  },
  pancreas: {
    functionSummary: "Secretes digestive enzymes/bicarbonate and endocrine hormones insulin, glucagon, somatostatin, and pancreatic polypeptide.",
    commonPathologies: ["Acute pancreatitis", "Pancreatic adenocarcinoma", "Diabetes mellitus", "Cystic fibrosis pancreatic insufficiency", "Insulinoma"],
    step1Pearls: ["Pancreatic head cancer causes painless jaundice", "Pancreatitis from gallstones/alcohol; autodigestion by activated enzymes", "Beta cells secrete insulin in islets"],
  },
  "ampulla-of-vater": {
    functionSummary: "Delivers bile and pancreatic enzymes into the duodenum for fat emulsification and protein/carbohydrate digestion; sphincter of Oddi regulates flow.",
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
    functionSummary: "Embryologic cranial gut segment giving rise to upper GI tract, hepatobiliary system, pancreas, and respiratory diverticulum; celiac artery supply.",
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
    functionSummary: "Embryologic middle gut segment from distal duodenum through proximal two-thirds transverse colon; SMA vascular supply; undergoes rotation and herniation.",
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
    functionSummary: "Embryologic caudal gut segment from distal transverse colon through upper anal canal; IMA supply; cloaca gives urogenital derivatives.",
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
    functionSummary: "Delivers ~20–25% of cardiac output to kidneys; perfusion pressure drives GFR and oxygen delivery to renal parenchyma.",
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
  "seminal-vesicles": {
    functionSummary: "Paired glands secreting fructose-rich alkaline fluid into ejaculatory ducts; contribute ~60–70% of semen volume and nourish sperm.",
    commonPathologies: ["Congenital absence (CBAVD/CF)", "Seminal vesicle cyst", "Infection with prostatitis", "Invasion by prostate adenocarcinoma"],
    step1Pearls: [
      "Wolffian (mesonephric) duct derivative — develops under testosterone",
      "Fructose in semen reflects seminal vesicle contribution; absent in CBAVD/cystic fibrosis",
      "Prostate cancer locally invades seminal vesicles — upstages disease",
      "Homologous embryologically to uterus/prostate glandular tissue (Müllerian vs Wolffian)",
    ],
    pediatrics: "Congenital bilateral absence of vas deferens and seminal vesicles occurs in cystic fibrosis; infertility workup may be first presentation in adolescence.",
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
  endometrium: {
    functionSummary: "Inner glandular lining of uterine cavity; cycles through proliferative and secretory phases and is the site of implantation.",
    commonPathologies: ["Endometrial hyperplasia", "Endometrial adenocarcinoma", "Endometritis", "Asherman syndrome", "Endometriosis (ectopic)"],
    step1Pearls: [
      "Type I endometrial cancer — estrogen-driven, PTEN loss, better prognosis",
      "Type II — p53-associated, serous/clear cell, poor prognosis, not always hyperplastic precursor",
      "Tamoxifen is estrogen agonist in endometrium → hyperplasia/cancer risk",
      "Proliferative (estrogen) vs secretory (progesterone) histology on biopsy",
    ],
    pediatrics: "Neonatal withdrawal bleeding is benign; endometrium matures with pubertal estrogen before menarche.",
  },
  cervix: {
    functionSummary: "Fibromuscular canal between uterine cavity and vagina; produces mucus that varies with estrogen/progesterone and forms a mucus plug in pregnancy.",
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
    functionSummary: "Captures ovulated oocyte, supports fertilization, and transports embryo to uterus.",
    commonPathologies: ["Ectopic pregnancy", "Salpingitis/PID", "Hydrosalpinx", "High-grade serous carcinoma origin"],
    step1Pearls: ["Most ectopic pregnancies occur in ampulla", "PID scarring increases infertility and ectopic risk", "Ciliated cells move ovum toward uterus"],
  },
  vagina: {
    functionSummary: "Fibromuscular canal for intercourse, menstrual flow, and childbirth; acidic microbiome protects against infection.",
    commonPathologies: ["Vaginitis", "Bacterial vaginosis", "Candida", "Trichomoniasis", "Vaginal atresia"],
    step1Pearls: ["Lactobacilli produce lactic acid", "BV has clue cells and fishy odor", "Candida causes thick white discharge with pseudohyphae"],
  },
  vulva: {
    functionSummary: "External female genitalia including labia, clitoris, and vestibule; protects urethral and vaginal openings and contains Bartholin glands.",
    commonPathologies: ["Vulvar lichen sclerosus", "Vulvar intraepithelial neoplasia (VIN)", "Vulvar squamous cell carcinoma", "Bartholin gland cyst/abscess", "Contact dermatitis"],
    step1Pearls: [
      "HPV-related VIN and SCC — smoking and immunosuppression increase risk",
      "Lichen sclerosus — white atrophic plaques; long-term SCC risk",
      "Inguinal lymph node drainage for lateral vulva; midline lesions may drain bilaterally",
      "vs cervical cancer — different lymphatic drainage and HPV subtype patterns",
    ],
    pediatrics: "Labial adhesions are common in prepubertal girls; ambiguous genitalia evaluation includes vulvar anatomy and CAH screening.",
  },
  breast: {
    functionSummary: "Modified sweat gland producing milk; hormonally responsive ductal-lobular tissue in superficial fascia of anterior chest.",
    commonPathologies: ["Fibrocystic change", "Fibroadenoma", "Breast cancer", "Mastitis", "Gynecomastia"],
    step1Pearls: [
      "Invasive ductal carcinoma is most common type",
      "ER/PR/HER2 status guides therapy; triple-negative often BRCA1-associated",
      "Peau d'orange — dermal lymphatic obstruction by carcinoma",
      "BRCA1/2 — hereditary breast and ovarian cancer syndrome",
    ],
    pediatrics: "Pediatric breast masses are usually fibroadenoma; breast cancer is extremely rare in children/adolescents.",
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
  "optic-chiasm": {
    functionSummary: "Site where nasal retinal fibers cross to the contralateral optic tract — reorganizes monocular visual fields into left and right hemifield representations for the brain.",
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
    functionSummary: "Converts light into neural signals via rods/cones and retinal ganglion cells.",
    commonPathologies: ["Diabetic retinopathy", "Hypertensive retinopathy", "Retinal detachment", "Retinitis pigmentosa", "Macular degeneration"],
    step1Pearls: ["Rods handle night/peripheral vision; cones handle color/acuity", "Central retinal artery occlusion causes cherry-red spot", "Vitamin A deficiency causes night blindness"],
    pediatrics: "Retinoblastoma presents with leukocoria; mutation of both RB alleles is classic.",
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
    functionSummary: "Vascular pigmented middle coat of the eye (iris, ciliary body, choroid); supplies nutrition to outer retina and controls pupil/accommodation.",
    commonPathologies: ["Uveitis", "Uveal melanoma", "Choroidal melanoma", "Choroidal metastasis", "Sympathetic ophthalmia"],
    step1Pearls: [
      "Uveal melanoma — most common primary intraocular malignancy in adults",
      "Classic hematogenous spread to liver (not regional nodes)",
      "Choroid is thickest posteriorly — common site of uveal melanoma",
      "vs retinoblastoma — pediatric, white pupillary reflex, not uveal melanoma",
    ],
    pediatrics: "Retinoblastoma arises from retina, not uvea; uveal melanoma is primarily an adult tumor.",
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
  "right-atrium": {
    functionSummary: "Receives systemic and coronary venous blood (SVC, IVC, coronary sinus) and passively fills the right ventricle; site of SA node and fossa ovalis.",
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
    pediatrics: "Patent foramen ovale is common in neonates; secundum ASD at fossa ovalis is a frequent congenital lesion.",
  },
  "crista-terminalis": {
    functionSummary: "Internal ridge separating smooth sinus venarum from trabeculated right atrial appendage; anchors the sinoatrial node at its superior end.",
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
  "sublingual-gland": {
    functionSummary: "Predominantly mucous salivary gland beneath the floor of mouth; drains via multiple ducts (Bartholin/ducts of Rivinus) into sublingual papillae.",
    commonPathologies: ["Ranula (mucous retention cyst)", "Sialolithiasis (less common than submandibular)", "Sjogren syndrome", "Salivary gland tumors"],
    step1Pearls: [
      "Predominantly mucous acini — thick saliva",
      "Ranula — translucent floor-of-mouth cyst from duct obstruction",
      "CN VII secretomotor via chorda tympani and submandibular ganglion",
      "Minor salivary glands also scattered in oral mucosa",
    ],
    pediatrics: "Congenital ranula or mucocele can present in infants; usually benign but may need marsupialization if large.",
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
  lungs: [
    "Non–small cell lung cancer — brain, bone, liver, adrenal glands",
    "Small cell lung cancer — early widespread hematogenous spread to liver, brain, adrenals, bone",
    "Bronchogenic carcinoma also spreads to contralateral lung and regional mediastinal/hilar nodes",
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
  cecum: [
    "Regional colonic lymph nodes",
    "Liver (portal route)",
    "Lung",
  ],
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
  "renal-artery": [
    "Not a typical primary malignancy site",
  ],
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
  lens: [
    "Not a primary malignancy site",
  ],
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
  "umbilical-cord": [
    "Not a primary malignancy site",
  ],
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
