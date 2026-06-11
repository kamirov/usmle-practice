export interface OrganEntry {
  id: string;
  name: string;
  aliases: string[];
  germLayer: string;
  origin: string;
  derivatives?: string[];
}

export const ORGANS: OrganEntry[] = [
  {
    id: "heart",
    name: "Heart",
    aliases: ["heart", "cardiac muscle", "myocardium"],
    germLayer: "Mesoderm",
    origin:
      "Develops from splanchnic mesoderm in the cardiogenic area; primitive heart tube forms via fusion of paired heart tubes and loops into four chambers.",
    derivatives: ["Myocardium", "Endocardium", "Epicardium"],
  },
  {
    id: "aorta",
    name: "Aorta",
    aliases: ["aorta", "aortic"],
    germLayer: "Mesoderm",
    origin:
      "Forms from the truncus arteriosus and aortic sac; dorsal aortae fuse to become the descending aorta.",
    derivatives: ["Ascending aorta", "Aortic arch", "Descending aorta"],
  },
  {
    id: "pulmonary-artery",
    name: "Pulmonary Artery",
    aliases: ["pulmonary artery", "pulmonary arteries"],
    germLayer: "Mesoderm",
    origin:
      "Derived from the truncus arteriosus via spiral septation, separating pulmonary and aortic outflow tracts.",
  },
  {
    id: "pulmonary-vein",
    name: "Pulmonary Vein",
    aliases: ["pulmonary vein", "pulmonary veins"],
    germLayer: "Endoderm / Mesoderm",
    origin:
      "Pulmonary veins incorporate into the left atrium; their smooth muscle from splanchnic mesoderm, endothelium from angiogenic mesoderm.",
  },
  {
    id: "svc",
    name: "Superior Vena Cava",
    aliases: ["superior vena cava", "svc"],
    germLayer: "Mesoderm",
    origin:
      "Forms from the right common cardinal vein and right anterior cardinal vein (anterior cardinal system).",
  },
  {
    id: "ivc",
    name: "Inferior Vena Cava",
    aliases: ["inferior vena cava", "ivc"],
    germLayer: "Mesoderm",
    origin:
      "Forms from the right vitelline vein, right subcardinal vein, and supracardinal anastomoses.",
  },
  {
    id: "ductus-arteriosus",
    name: "Ductus Arteriosus",
    aliases: ["ductus arteriosus"],
    germLayer: "Mesoderm",
    origin:
      "Embryonic shunt connecting pulmonary artery to aorta; derived from the distal sixth aortic arch.",
  },
  {
    id: "lungs",
    name: "Lungs",
    aliases: ["lung", "lungs", "pulmonary"],
    germLayer: "Endoderm",
    origin:
      "Respiratory diverticulum buds from the foregut endoderm; branching morphogenesis forms bronchi and alveoli.",
    derivatives: ["Bronchi", "Bronchioles", "Alveoli"],
  },
  {
    id: "larynx",
    name: "Larynx",
    aliases: ["larynx", "laryngeal"],
    germLayer: "Endoderm / Mesoderm",
    origin:
      "Laryngeal cartilages from fourth and sixth pharyngeal arch mesoderm; epithelium from foregut endoderm of the laryngotracheal groove.",
  },
  {
    id: "trachea",
    name: "Trachea",
    aliases: ["trachea", "tracheal"],
    germLayer: "Endoderm",
    origin:
      "Forms from the laryngotracheal diverticulum of foregut endoderm; separates from esophagus via tracheoesophageal septum.",
  },
  {
    id: "bronchi",
    name: "Bronchi",
    aliases: ["bronchus", "bronchi", "bronchial"],
    germLayer: "Endoderm",
    origin:
      "Branching airways from the respiratory diverticulum (foregut endoderm); cartilage and smooth muscle from surrounding splanchnic mesoderm.",
  },
  {
    id: "pleura",
    name: "Pleura",
    aliases: ["pleura", "pleural"],
    germLayer: "Mesoderm",
    origin:
      "Parietal and visceral pleura derive from splanchnic mesoderm lining the pleuroperitoneal canals.",
  },
  {
    id: "esophagus",
    name: "Esophagus",
    aliases: ["esophagus", "esophageal", "oesophagus"],
    germLayer: "Endoderm",
    origin:
      "Forms from the foregut endoderm dorsal to the laryngotracheal diverticulum; muscular layers from surrounding mesoderm.",
  },
  {
    id: "stomach",
    name: "Stomach",
    aliases: ["stomach", "gastric"],
    germLayer: "Endoderm",
    origin:
      "Foregut endoderm dilates and rotates; greater and lesser curvatures form during 90° clockwise rotation.",
    derivatives: ["Fundus", "Body", "Pylorus"],
  },
  {
    id: "duodenum-proximal",
    name: "Duodenum (proximal)",
    aliases: ["proximal duodenum", "duodenum"],
    germLayer: "Endoderm (foregut) / Mesoderm (midgut)",
    origin:
      "Proximal duodenum to the ampulla of Vater is foregut-derived endoderm; distal portion from midgut with dorsal mesentery.",
  },
  {
    id: "jejunum",
    name: "Jejunum",
    aliases: ["jejunum", "jejunal"],
    germLayer: "Endoderm",
    origin:
      "Midgut derivative; forms from the primary intestinal loop after herniation and return to the abdominal cavity.",
  },
  {
    id: "ileum",
    name: "Ileum",
    aliases: ["ileum", "ileal"],
    germLayer: "Endoderm",
    origin:
      "Distal midgut derivative; forms the lower portion of the small intestine before the cecum.",
  },
  {
    id: "cecum",
    name: "Cecum",
    aliases: ["cecum", "caecum", "cecal"],
    germLayer: "Endoderm",
    origin:
      "Midgut derivative at the junction of small and large intestine; cecal bud appears during week 6.",
  },
  {
    id: "colon",
    name: "Colon",
    aliases: ["colon", "colonic", "large intestine"],
    germLayer: "Endoderm",
    origin:
      "Ascending and transverse colon from midgut; descending and sigmoid colon from hindgut endoderm.",
    derivatives: ["Ascending colon", "Transverse colon", "Descending colon", "Sigmoid colon"],
  },
  {
    id: "rectum",
    name: "Rectum",
    aliases: ["rectum", "rectal"],
    germLayer: "Endoderm",
    origin:
      "Hindgut derivative; cranial portion of the cloaca after urorectal septum division.",
  },
  {
    id: "anal-canal",
    name: "Anal Canal",
    aliases: ["anal canal", "anus", "anal"],
    germLayer: "Endoderm / Ectoderm",
    origin:
      "Upper anal canal from hindgut endoderm; lower anal canal from proctodeum (ectodermal invagination) at pectinate line.",
  },
  {
    id: "liver",
    name: "Liver",
    aliases: ["liver", "hepatic"],
    germLayer: "Endoderm",
    origin:
      "Hepatic diverticulum buds from ventral foregut endoderm into septum transversum mesenchyme.",
    derivatives: ["Hepatocytes", "Bile duct epithelium"],
  },
  {
    id: "gallbladder",
    name: "Gallbladder",
    aliases: ["gallbladder", "gall bladder"],
    germLayer: "Endoderm",
    origin:
      "Cystic diverticulum from the hepatic diverticulum of ventral foregut endoderm.",
  },
  {
    id: "pancreas",
    name: "Pancreas",
    aliases: ["pancreas", "pancreatic"],
    germLayer: "Endoderm",
    origin:
      "Dorsal and ventral pancreatic buds from foregut endoderm fuse; ventral bud rotates with duodenum.",
    derivatives: ["Exocrine acini", "Endocrine islets", "Duct system"],
  },
  {
    id: "spleen",
    name: "Spleen",
    aliases: ["spleen", "splenic"],
    germLayer: "Mesoderm",
    origin:
      "Mesenchymal condensation in the dorsal mesogastrium; NOT a foregut derivative despite proximity to stomach.",
  },
  {
    id: "kidney",
    name: "Kidney",
    aliases: ["kidney", "kidneys", "renal"],
    germLayer: "Mesoderm",
    origin:
      "Definitive kidney from metanephros (ureteric bud + metanephric mesenchyme); intermediate mesoderm origin.",
    derivatives: ["Glomerulus", "Tubules", "Collecting system"],
  },
  {
    id: "ureter",
    name: "Ureter",
    aliases: ["ureter", "ureteral", "ureters"],
    germLayer: "Mesoderm",
    origin:
      "Ureteric bud outgrowth from mesonephric duct (mesoderm); induces metanephric mesenchyme.",
  },
  {
    id: "bladder",
    name: "Urinary Bladder",
    aliases: ["bladder", "urinary bladder"],
    germLayer: "Endoderm / Mesoderm",
    origin:
      "Trigone from mesonephric duct (mesoderm); bladder body from urogenital sinus (endoderm of cloaca).",
  },
  {
    id: "urethra",
    name: "Urethra",
    aliases: ["urethra", "urethral"],
    germLayer: "Endoderm",
    origin:
      "Forms from the urogenital sinus; prostatic/membranous/spongy portions differ by sex.",
  },
  {
    id: "prostate",
    name: "Prostate",
    aliases: ["prostate", "prostatic"],
    germLayer: "Endoderm",
    origin:
      "Urogenital sinus endoderm; grows around the urethra under influence of dihydrotestosterone.",
  },
  {
    id: "testis",
    name: "Testis",
    aliases: ["testis", "testes", "testicle", "testicular"],
    germLayer: "Mesoderm",
    origin:
      "Gonadal ridge (intermediate mesoderm); primordial germ cells migrate from yolk sac endoderm.",
  },
  {
    id: "epididymis",
    name: "Epididymis",
    aliases: ["epididymis", "epididymal"],
    germLayer: "Mesoderm",
    origin:
      "Mesonephric (Wolffian) duct derivative; forms efferent ductules and epididymis under testosterone.",
  },
  {
    id: "ovary",
    name: "Ovary",
    aliases: ["ovary", "ovaries", "ovarian"],
    germLayer: "Mesoderm",
    origin:
      "Gonadal ridge (intermediate mesoderm); primordial germ cells from yolk sac endoderm.",
  },
  {
    id: "uterus",
    name: "Uterus",
    aliases: ["uterus", "uterine", "womb"],
    germLayer: "Mesoderm",
    origin:
      "Paramesonephric (Müllerian) duct fuses to form uterus; caudal ends form cervix and upper vagina.",
  },
  {
    id: "fallopian-tube",
    name: "Fallopian Tube",
    aliases: ["fallopian tube", "fallopian tubes", "uterine tube", "oviduct"],
    germLayer: "Mesoderm",
    origin:
      "Cranial unfused portion of paramesonephric (Müllerian) ducts.",
  },
  {
    id: "vagina",
    name: "Vagina",
    aliases: ["vagina", "vaginal"],
    germLayer: "Mesoderm / Endoderm",
    origin:
      "Upper vagina from Müllerian duct; lower vagina from urogenital sinus (sinovaginal bulbs).",
  },
  {
    id: "thyroid",
    name: "Thyroid",
    aliases: ["thyroid", "thyroid gland"],
    germLayer: "Endoderm",
    origin:
      "Foramen cecum of tongue (floor of mouth endoderm); descends via thyroglossal duct to pretracheal position.",
  },
  {
    id: "parathyroid",
    name: "Parathyroid",
    aliases: ["parathyroid", "parathyroid gland", "parathyroid glands"],
    germLayer: "Endoderm",
    origin:
      "Dorsal wings of third and fourth pharyngeal pouches (endoderm); inferior from third pouch, superior from fourth.",
  },
  {
    id: "adrenal-cortex",
    name: "Adrenal Cortex",
    aliases: ["adrenal cortex", "adrenal gland", "adrenal"],
    germLayer: "Mesoderm",
    origin:
      "Mesodermal cells from celomic epithelium near gonadal ridge; forms three cortical zones.",
    derivatives: ["Zona glomerulosa", "Zona fasciculata", "Zona reticularis"],
  },
  {
    id: "adrenal-medulla",
    name: "Adrenal Medulla",
    aliases: ["adrenal medulla"],
    germLayer: "Ectoderm / Neural crest",
    origin:
      "Neural crest cells (ectoderm) migrate into adrenal cortex primordium and differentiate into chromaffin cells.",
  },
  {
    id: "pituitary",
    name: "Pituitary",
    aliases: ["pituitary", "pituitary gland", "hypophysis"],
    germLayer: "Ectoderm",
    origin:
      "Anterior pituitary from Rathke pouch (oral ectoderm); posterior pituitary from neuroectoderm (diencephalon downgrowth).",
    derivatives: ["Anterior pituitary", "Posterior pituitary"],
  },
  {
    id: "pineal",
    name: "Pineal Gland",
    aliases: ["pineal", "pineal gland"],
    germLayer: "Ectoderm",
    origin:
      "Neuroectodermal outgrowth from the diencephalon roof of the third ventricle.",
  },
  {
    id: "thymus",
    name: "Thymus",
    aliases: ["thymus", "thymic"],
    germLayer: "Endoderm",
    origin:
      "Ventral wings of third pharyngeal pouches (endoderm); descends into anterior mediastinum.",
  },
  {
    id: "bone-marrow",
    name: "Bone Marrow",
    aliases: ["bone marrow", "marrow"],
    germLayer: "Mesoderm",
    origin:
      "Hematopoietic tissue in medullary cavities of bones; mesodermal mesenchyme with blood cell precursors.",
  },
  {
    id: "lymph-nodes",
    name: "Lymph Nodes",
    aliases: ["lymph node", "lymph nodes", "lymphatic"],
    germLayer: "Mesoderm",
    origin:
      "Develop from lymph sacs (mesoderm) and mesenchymal condensations along lymphatic vessels.",
  },
  {
    id: "brain",
    name: "Brain",
    aliases: ["brain", "cerebral", "cerebrum", "cortex"],
    germLayer: "Ectoderm",
    origin:
      "Neuroectoderm of neural tube; prosencephalon, mesencephalon, and rhombencephalon form major divisions.",
    derivatives: ["Telencephalon", "Diencephalon", "Mesencephalon", "Metencephalon", "Myelencephalon"],
  },
  {
    id: "spinal-cord",
    name: "Spinal Cord",
    aliases: ["spinal cord"],
    germLayer: "Ectoderm",
    origin:
      "Caudal neural tube (neuroectoderm); alar plate (dorsal) sensory, basal plate (ventral) motor.",
  },
  {
    id: "retina",
    name: "Retina",
    aliases: ["retina", "retinal"],
    germLayer: "Ectoderm",
    origin:
      "Outpocketing of diencephalon (optic vesicle → optic cup); neuroectoderm forms neural retina.",
  },
  {
    id: "lens",
    name: "Lens",
    aliases: ["lens"],
    germLayer: "Ectoderm",
    origin:
      "Surface ectoderm lens placode invaginates in response to optic vesicle induction.",
  },
  {
    id: "cornea",
    name: "Cornea",
    aliases: ["cornea", "corneal"],
    germLayer: "Ectoderm / Neural crest",
    origin:
      "Corneal epithelium from surface ectoderm; stroma and endothelium largely from neural crest mesenchyme.",
  },
  {
    id: "inner-ear",
    name: "Inner Ear",
    aliases: ["inner ear", "cochlea", "semicircular canals"],
    germLayer: "Ectoderm",
    origin:
      "Otic placode (surface ectoderm) invaginates to form otic vesicle; gives rise to membranous labyrinth.",
  },
  {
    id: "skin",
    name: "Skin",
    aliases: ["skin", "epidermis", "dermis"],
    germLayer: "Ectoderm / Mesoderm",
    origin:
      "Epidermis from surface ectoderm; dermis from underlying mesoderm (dermatome).",
  },
  {
    id: "bone",
    name: "Bone",
    aliases: ["bone", "bones", "skeletal", "ossification"],
    germLayer: "Mesoderm",
    origin:
      "Most bones from paraxial mesoderm (somites → sclerotome) or lateral plate mesoderm; skull bones also from neural crest.",
  },
  {
    id: "skeletal-muscle",
    name: "Skeletal Muscle",
    aliases: ["skeletal muscle", "striated muscle"],
    germLayer: "Mesoderm",
    origin:
      "Myotome of somites (paraxial mesoderm); head muscles also from pharyngeal arch mesoderm.",
  },
  {
    id: "teeth",
    name: "Teeth",
    aliases: ["tooth", "teeth", "dental"],
    germLayer: "Ectoderm / Neural crest",
    origin:
      "Enamel from ameloblasts (oral ectoderm); dentin and pulp from neural crest-derived mesenchyme.",
  },
  {
    id: "tongue",
    name: "Tongue",
    aliases: ["tongue", "lingual"],
    germLayer: "Mesoderm / Endoderm",
    origin:
      "Anterior 2/3 muscles from occipital somites; body from pharyngeal arches. Taste buds and mucosa mixed endoderm/ectoderm.",
  },
  {
    id: "diaphragm",
    name: "Diaphragm",
    aliases: ["diaphragm", "diaphragmatic"],
    germLayer: "Mesoderm",
    origin:
      "Septum transversum (central tendon), pleuroperitoneal folds, dorsal mesentery of esophagus, and body wall mesoderm.",
  },
  {
    id: "pericardium",
    name: "Pericardium",
    aliases: ["pericardium", "pericardial"],
    germLayer: "Mesoderm",
    origin:
      "Parietal pericardium from pleuropericardial membranes (splanchnic mesoderm); visceral layer is epicardium.",
  },
  {
    id: "appendix",
    name: "Appendix",
    aliases: ["appendix", "vermiform appendix"],
    germLayer: "Endoderm",
    origin:
      "Midgut derivative; blind pouch from the cecal bud during intestinal rotation.",
  },
  {
    id: "tonsils",
    name: "Tonsils",
    aliases: ["tonsil", "tonsils", "palatine tonsil"],
    germLayer: "Endoderm",
    origin:
      "Palatine tonsils from second pharyngeal pouch endoderm invading surrounding mesenchyme.",
  },
  {
    id: "parotid",
    name: "Parotid Gland",
    aliases: ["parotid", "parotid gland"],
    germLayer: "Ectoderm",
    origin:
      "Largest salivary gland; buds from ectodermal lining of stomodeum (primitive oral cavity).",
  },
  {
    id: "submandibular",
    name: "Submandibular Gland",
    aliases: ["submandibular gland", "submandibular"],
    germLayer: "Endoderm",
    origin:
      "Endodermal bud from floor of mouth (oral cavity endoderm).",
  },
  {
    id: "suprarenal",
    name: "Suprarenal Gland",
    aliases: ["suprarenal"],
    germLayer: "Mesoderm / Neural crest",
    origin:
      "Synonymous with adrenal gland; cortex from mesoderm, medulla from neural crest.",
  },
  {
    id: "clitoris",
    name: "Clitoris",
    aliases: ["clitoris"],
    germLayer: "Ectoderm",
    origin:
      "Genital tubercle (surface ectoderm and mesenchyme); homologous to glans penis.",
  },
  {
    id: "penis",
    name: "Penis",
    aliases: ["penis", "penile"],
    germLayer: "Ectoderm",
    origin:
      "Genital tubercle enlarges under dihydrotestosterone; urethra from urogenital sinus folds.",
  },
  {
    id: "placenta",
    name: "Placenta",
    aliases: ["placenta", "placental"],
    germLayer: "Trophoblast / Mesoderm",
    origin:
      "Fetal component from trophoblast and extraembryonic mesoderm; maternal decidua from endometrium.",
  },
  {
    id: "umbilical-cord",
    name: "Umbilical Cord",
    aliases: ["umbilical cord"],
    germLayer: "Mesoderm",
    origin:
      "Extraembryonic mesoderm surrounds allantois and vitelline vessels; contains two arteries and one vein.",
  },
];

const organById = new Map(ORGANS.map((o) => [o.id, o]));

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
