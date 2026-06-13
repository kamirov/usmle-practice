export interface MetabolismEntry {
  id: string;
  name: string;
  etymology: string;
  aliases: string[];
  definition: string;
  pathway: string[];
  boardsPearls: string[];
  distinguishFrom?: string[];
  pediatrics?: string;
}

export const METABOLISM: MetabolismEntry[] = [
  {
    id: "essential-amino-acid",
    name: "Essential Amino Acid",
    etymology: "Latin essentia = being + Latin aminus = containing ammonia + Latin acidus = sour",
    aliases: [
      "essential amino acid",
      "essential amino acids",
      "indispensable amino acid",
      "indispensable amino acids",
      "eaa",
      "eaas",
    ],
    definition:
      "Amino acid that humans cannot synthesize de novo in amounts sufficient for normal growth and nitrogen balance — must be obtained from dietary protein. Deficiency limits protein synthesis and can cause negative nitrogen balance.",
    pathway: [
      "Nine indispensable in adults: phenylalanine, valine, threonine, tryptophan, isoleucine, methionine, histidine, leucine, lysine",
      "Mnemonic: PVT TIM HALL (add arginine as semi-essential/conditionally essential in growth, pregnancy, illness)",
      "Nonessential examples: alanine, aspartate, glutamate, glycine, serine, asparagine, proline",
      "Tyrosine is nonessential if phenylalanine is adequate (phenylalanine hydroxylase); cysteine if methionine is adequate (transsulfuration)",
      "Arginine is semi-essential — synthesized via urea cycle but often insufficient in neonates and catabolic states",
    ],
    boardsPearls: [
      "Essential = dietary requirement; nonessential = can be synthesized (boards loves PKU, MSUD, homocystinuria as essential amino acid disorders)",
      "Leucine and lysine are purely ketogenic; most others glucogenic or both",
      "Kwashiorkor — protein malnutrition with essential amino acid deficit → edema, fatty liver, growth failure",
      "vs nonessential amino acid — glutamate, alanine, glycine synthesized endogenously",
      "PKU = essential phenylalanine cannot be converted to tyrosine — tyrosine becomes essential in PKU",
    ],
    distinguishFrom: [
      "Nonessential amino acid — synthesized adequately in humans (e.g., glutamate, alanine)",
      "Conditionally essential amino acid — arginine, tyrosine, cysteine, glutamine needed when synthesis cannot keep up",
      "Glucogenic amino acid — metabolic fate classification, not dietary essentiality",
      "Ketogenic amino acid — leucine and lysine only; separate axis from essential vs nonessential",
    ],
    pediatrics:
      "Infants and growing children have higher essential amino acid requirements per kg; PKU, MSUD, and maple syrup–type disorders detected on newborn screening reflect impaired handling of essential amino acids.",
  },
  {
    id: "leucine",
    name: "Leucine",
    etymology: "Greek leukos = white + -ine = chemical suffix for amino acids",
    aliases: ["leucine", "leu", "l"],
    definition:
      "Essential branched-chain amino acid (BCAA) catabolized to ketone bodies; purely ketogenic on boards classification.",
    pathway: [
      "Transamination → branched-chain α-keto acid dehydrogenase complex (same enzyme family as α-ketoglutarate dehydrogenase; inhibited by arsenic)",
      "→ isovaleryl-CoA → β-methylcrotonyl-CoA → HMG-CoA → acetoacetate and acetyl-CoA",
      "Not glucogenic — does not yield net glucose precursors",
      "Maple syrup urine disease (MSUD): deficiency of BCAA dehydrogenase → ↑ leucine, isoleucine, valine",
    ],
    boardsPearls: [
      "Leucine and lysine are the only purely ketogenic amino acids",
      "Leucine catabolism produces acetoacetate, not fumarate",
      "MSUD: sweet urine odor, lethargy, neurologic crisis in neonates",
      "Thiamine is cofactor for BCAA α-keto acid dehydrogenase (like pyruvate and α-KG dehydrogenases)",
    ],
    distinguishFrom: [
      "Valine — also BCAA but glucogenic and ketogenic",
      "Phenylalanine/tyrosine — aromatic pathway to homogentisic acid, not ketogenic",
      "Glutamic acid — glucogenic via α-ketoglutarate in TCA cycle",
    ],
  },
  {
    id: "acetoacetate",
    name: "Acetoacetate",
    etymology: "Latin acetum = vinegar + Greek oxy = sharp/acid + -ate = chemical anion",
    aliases: [
      "acetoacetate",
      "acetoacetic acid",
      "acetoacetic",
      "acac",
    ],
    definition:
      "Primary ketone body formed during fasting, prolonged exercise, and ketogenic amino acid catabolism; converted to β-hydroxybutyrate and acetone in vivo.",
    pathway: [
      "HMG-CoA synthase + HMG-CoA lyase in liver mitochondria → acetoacetate from acetyl-CoA (fatty acid β-oxidation)",
      "Also produced from leucine and lysine catabolism (ketogenic amino acids)",
      "β-hydroxybutyrate dehydrogenase converts acetoacetate ↔ β-hydroxybutyrate",
      "Spontaneous decarboxylation → acetone (fruity breath in DKA)",
      "Extrahepatic tissues activate acetoacetate to acetoacetyl-CoA via succinyl-CoA:3-oxoacid CoA transferase (not in liver)",
    ],
    boardsPearls: [
      "Ketone bodies: acetoacetate, β-hydroxybutyrate, acetone",
      "Liver makes ketones but cannot use them (lacks transferase)",
      "DKA: ↑ glucose + ↑ ketones (acetoacetate, β-hydroxybutyrate)",
      "Leucine/lysine catabolism → acetoacetate; not from serine or glutamic acid directly",
    ],
    distinguishFrom: [
      "Acetyl-CoA — central intermediate, not a ketone body",
      "Fumarate — TCA intermediate from tyrosine/phenylalanine catabolism, not ketogenesis",
      "Lactic acid — anaerobic glycolysis product, not ketone body",
    ],
  },
  {
    id: "acetyl-coa",
    name: "Acetyl-CoA",
    etymology: "Latin acetum = vinegar + coenzyme A (from co + enzyme)",
    aliases: [
      "acetyl coa",
      "acetyl-coa",
      "acetyl coenzyme a",
      "acetyl-coenzyme a",
      "acetyl co a",
    ],
    definition:
      "Activated two-carbon acetyl unit bound to coenzyme A — the central metabolic hub linking glycolysis, fatty acid oxidation, the TCA cycle, ketogenesis, and cholesterol/fatty acid synthesis.",
    pathway: [
      "Pyruvate dehydrogenase complex (mitochondria): pyruvate → acetyl-CoA + CO₂ + NADH (requires thiamine/B₁, lipoic acid, CoA)",
      "Fatty acid β-oxidation in mitochondria → acetyl-CoA (carnitine shuttle transports long-chain fatty acids inward)",
      "Acetyl-CoA + oxaloacetate → citrate via citrate synthase (TCA cycle entry)",
      "HMG-CoA synthase uses acetyl-CoA for ketogenesis (liver) and cholesterol synthesis",
      "Acetyl-CoA carboxylase → malonyl-CoA for de novo fatty acid synthesis (cytosolic after citrate export)",
      "Alcohol: ethanol → acetaldehyde → acetate → acetyl-CoA",
      "Leucine/lysine catabolism and ketogenic amino acids feed acetyl-CoA/acetoacetate pathways",
    ],
    boardsPearls: [
      "Acetyl-CoA cannot be converted to net glucose in humans (no net gluconeogenic path from 2-carbon unit alone)",
      "PDH deficiency → ↑ pyruvate/lactate, neurologic disease; treat with ketogenic diet providing alternative brain fuel",
      "Arsenic poisons lipoic acid cofactor → ↓ PDH and α-ketoglutarate dehydrogenase",
      "Malonyl-CoA from acetyl-CoA inhibits carnitine shuttle — prevents simultaneous synthesis and oxidation of fatty acids",
      "Alcohol metabolism generates NADH and acetyl-CoA → steatosis and impaired gluconeogenesis",
      "vs acetoacetate — acetyl-CoA is intermediate; ketone bodies derived from it in liver",
    ],
    distinguishFrom: [
      "Acetoacetate — ketone body derived from acetyl-CoA, not the same molecule",
      "Pyruvate — three-carbon glycolytic intermediate upstream of PDH",
      "Malonyl-CoA — committed fatty acid synthesis intermediate from acetyl-CoA",
      "Coenzyme A — carrier molecule; acetyl-CoA is acetyl group esterified to CoA",
    ],
    pediatrics:
      "PDH deficiency presents in infancy with lactic acidosis and neurologic decline; ketogenic diet provides acetyl-CoA-derived ketones as alternative fuel for the brain.",
  },
  {
    id: "phenylalanine",
    name: "Phenylalanine",
    etymology: "phenyl = benzene ring + alanine = amino acid",
    aliases: ["phenylalanine", "phe", "f"],
    definition:
      "Essential aromatic amino acid converted to tyrosine by phenylalanine hydroxylase; shared catabolic pathway with tyrosine feeds homogentisic acid metabolism.",
    pathway: [
      "Phenylalanine hydroxylase (PAH) + BH₄ → tyrosine (first step of aromatic amino acid catabolism)",
      "PAH deficiency → phenylketonuria (PKU): ↑ phenylalanine, musty odor, intellectual disability if untreated",
      "Tyrosine continues: transamination → p-hydroxyphenylpyruvate → homogentisic acid → fumarate + acetoacetate",
      "Homogentisate oxidase deficiency blocks pathway after homogentisic acid → alkaptonuria",
    ],
    boardsPearls: [
      "Phenylalanine and tyrosine share aromatic catabolic pathway — both upstream of homogentisic acid",
      "PKU: ↓ phenylalanine hydroxylase; treat with low-phe diet",
      "Alkaptonuria: block is downstream at homogentisate oxidase, not at PAH",
      "Phenylalanine is essential; tyrosine becomes conditionally essential in PKU",
    ],
    distinguishFrom: [
      "Leucine — BCAA, ketogenic only, no aromatic ring",
      "Tryptophan — separate aromatic pathway to niacin and serotonin",
      "Serine — nonessential, one-carbon metabolism, not aromatic",
    ],
    pediatrics:
      "Newborn PKU screen detects ↑ phenylalanine; early dietary restriction prevents intellectual disability.",
  },
  {
    id: "tyrosine",
    name: "Tyrosine",
    etymology: "Greek tyros = cheese + -ine = chemical suffix (first isolated from cheese protein)",
    aliases: ["tyrosine", "tyr", "y"],
    definition:
      "Aromatic amino acid derived from phenylalanine; catabolized through homogentisic acid to fumarate and acetoacetate, and used in melanin, thyroid hormone, and catecholamine synthesis.",
    pathway: [
      "From phenylalanine via PAH, or from diet",
      "Catabolism: tyrosine transaminase → p-hydroxyphenylpyruvate → homogentisic acid (homogentisate oxidase) → maleylacetoacetate → fumarate + acetoacetate",
      "Anabolic branches: tyrosinase → melanin; thyroid peroxidase pathway → T3/T4; TH → DOPA → dopamine → NE → Epi",
      "Alkaptonuria: homogentisic acid accumulates when homogentisate oxidase is deficient",
    ],
    boardsPearls: [
      "Tyrosine catabolism blocked in alkaptonuria at homogentisate oxidase step",
      "Alkaptonuria involves phenylalanine AND tyrosine pathways (tyrosine is downstream of phe)",
      "Tyrosine is glucogenic and ketogenic (yields fumarate + acetoacetate)",
      "Albinism: tyrosinase defect in melanin synthesis, not tyrosine catabolism",
    ],
    distinguishFrom: [
      "Phenylalanine — essential precursor; PKU is PAH deficiency at conversion step",
      "DOPA — catecholamine precursor, not catabolic end product",
      "Homogentisic acid — intermediate that accumulates in alkaptonuria",
    ],
    pediatrics:
      "PKU patients require tyrosine supplementation because they cannot convert phenylalanine to tyrosine.",
  },
  {
    id: "serine",
    name: "Serine",
    etymology: "Latin sericum = silk + -ine = chemical suffix (first found in silk protein)",
    aliases: ["serine", "ser", "s"],
    definition:
      "Nonessential glucogenic amino acid central to one-carbon metabolism and a precursor for glycine and cysteine via the transsulfuration pathway.",
    pathway: [
      "From 3-phosphoglycerate (glycolysis) or dietary intake",
      "Serine hydroxymethyltransferase (SHMT) → glycine + one-carbon unit (THF)",
      "Serine + homocysteine → cystathionine (cystathionine β-synthase) → cysteine (transsulfuration)",
      "Glucogenic — can enter glycolysis/gluconeogenesis via pyruvate or 3-phosphoglycerate",
    ],
    boardsPearls: [
      "Serine donates carbon to folate cycle via SHMT",
      "Serine + homocysteine → cysteine (requires B₆); not part of alkaptonuria pathway",
      "Serine is glucogenic, not ketogenic",
      "vs cysteine — serine is upstream in transsulfuration",
    ],
    distinguishFrom: [
      "Cysteine — downstream via transsulfuration from homocysteine + serine",
      "Glycine — product of serine cleavage by SHMT",
      "Phenylalanine — aromatic catabolism, unrelated to serine pathway",
    ],
  },
  {
    id: "cysteine",
    name: "Cysteine",
    etymology: "Latin cystis = bladder + -ine = chemical suffix (named for bladder-shaped crystals)",
    aliases: ["cysteine", "cys", "c"],
    definition:
      "Sulfur-containing amino acid synthesized from homocysteine and serine; forms disulfide bonds stabilizing protein tertiary structure.",
    pathway: [
      "Transsulfuration: homocysteine + serine → cystathionine (cystathionine β-synthase, B₆) → cysteine (cystathionine γ-lyase)",
      "Also from dietary intake; not essential if methionine and serine are adequate",
      "Oxidized to cystine (disulfide-linked dimer) in extracellular space",
      "Glucogenic — catabolism yields pyruvate",
      "Homocystinuria: homocysteine accumulation (cystathionine β-synthase deficiency), not cysteine deficiency per se",
    ],
    boardsPearls: [
      "Cysteine provides —SH groups for glutathione synthesis (γ-glutamylcysteine + glycine)",
      "Disulfide bonds (cysteine–cysteine) stabilize immunoglobulins and many secreted proteins",
      "Cysteine pathway is methionine/transsulfuration — unrelated to alkaptonuria",
      "Homocystinuria: marfanoid habitus, lens dislocation downward, thrombosis",
    ],
    distinguishFrom: [
      "Serine — precursor in transsulfuration, not sulfur storage amino acid",
      "Methionine — essential, converted to homocysteine before cysteine synthesis",
      "Cystine — oxidized dimer of cysteine; cystinuria is renal tubular defect",
    ],
    pediatrics:
      "Homocystinuria may present with intellectual disability, lens dislocation, and thromboembolism; treat with B₆, folate, betaine depending on subtype.",
  },
  {
    id: "fumarate",
    name: "Fumarate",
    etymology: "Latin fumus = smoke + -ate = chemical anion (fumaric acid found in smoke-derived compounds)",
    aliases: ["fumarate", "fumaric acid"],
    definition:
      "TCA cycle dicarboxylic acid intermediate; also an end product of phenylalanine and tyrosine catabolism after homogentisic acid oxidation.",
    pathway: [
      "TCA cycle: succinate dehydrogenase oxidizes succinate → fumarate → malate (fumarase)",
      "Tyrosine/phenylalanine catabolism: homogentisic acid → fumarate + acetoacetate (after homogentisate oxidase)",
      "Fumarate hydratase (fumarase) deficiency → hereditary leiomyomatosis and renal cell cancer (HLRCC)",
      "Glucogenic — fumarate enters gluconeogenesis via malate → oxaloacetate",
    ],
    boardsPearls: [
      "Fumarate is both a TCA intermediate and tyrosine catabolism product",
      "Alkaptonuria blocks BEFORE fumarate production (at homogentisic acid step)",
      "Fumarase deficiency: ↑ fumarate, autosomal recessive, uterine leiomyomas, RCC",
      "Succinate dehydrogenase (Complex II) converts succinate to fumarate",
    ],
    distinguishFrom: [
      "Succinate — TCA precursor to fumarate, not tyrosine catabolism end product alone",
      "Malate — downstream of fumarate in TCA cycle",
      "Acetoacetate — co-product of tyrosine catabolism, ketogenic not TCA intermediate",
    ],
  },
  {
    id: "valine",
    name: "Valine",
    etymology: "Latin valere = to be strong + -ine = chemical suffix",
    aliases: ["valine", "val", "v"],
    definition:
      "Essential branched-chain amino acid (BCAA) that is both glucogenic and ketogenic; catabolized through propionyl-CoA and succinyl-CoA.",
    pathway: [
      "BCAA transaminase → branched-chain α-keto acid dehydrogenase → isobutyryl-CoA → propionyl-CoA → methylmalonyl-CoA → succinyl-CoA (glucogenic entry)",
      "Also produces acetyl-CoA (ketogenic component)",
      "MSUD: accumulation of valine, leucine, isoleucine when BCAA dehydrogenase is deficient",
      "Propionyl-CoA carboxylase deficiency also impairs valine/isoleucine/methionine/threonine metabolism",
    ],
    boardsPearls: [
      "Valine is glucogenic AND ketogenic (unlike leucine, which is purely ketogenic)",
      "Valine catabolism → succinyl-CoA (glucogenic) + acetyl-CoA",
      "MSUD affects valine, leucine, isoleucine together",
      "Not part of aromatic amino acid / alkaptonuria pathway",
    ],
    distinguishFrom: [
      "Leucine — purely ketogenic BCAA",
      "Isoleucine — another BCAA, glucogenic and ketogenic",
      "Glutamic acid — enters TCA at α-ketoglutarate, not via propionyl-CoA",
    ],
    pediatrics:
      "MSUD neonates need emergency restriction of BCAAs and thiamine supplementation; sweet-smelling urine is a clue.",
  },
  {
    id: "glutamic-acid",
    name: "Glutamate",
    etymology: "Latin gluten = glue + -ate = chemical anion form",
    aliases: [
      "glutamate",
      "glutamic acid",
      "glutamic",
      "l-glutamate",
      "glu",
      "e",
    ],
    definition:
      "Nonessential glucogenic amino acid and the principal excitatory neurotransmitter in the CNS; at synapses it activates ionotropic (NMDA, AMPA, kainate) and metabotropic glutamate receptors, while astrocytes clear excess glutamate to prevent excitotoxicity. In metabolism it transaminates to α-ketoglutarate, linking nitrogen handling to the TCA and urea cycles.",
    pathway: [
      "Transamination → α-ketoglutarate (TCA cycle intermediate) → glucogenic",
      "Glutamate + NH₄⁺ → glutamine (glutamine synthetase) for ammonia transport",
      "Urea cycle: glutamate provides nitrogen via aspartate and carbamoyl phosphate pathways",
      "Glutamate dehydrogenase: reversible amination of α-ketoglutarate (mitochondrial ammonia disposal)",
      "CNS: glutamate released at excitatory synapses → receptor binding → astrocyte EAAT uptake → glutamine shuttle",
      "Glutamate decarboxylase (GAD, B₆) → GABA (primary inhibitory neurotransmitter)",
    ],
    boardsPearls: [
      "Principal excitatory CNS neurotransmitter — vs GABA (inhibitory, synthesized from glutamate)",
      "NMDA receptor requires glutamate + glycine + depolarization (Mg²⁺ unblock) — memory, excitotoxicity in stroke",
      "Excess glutamate → neuronal calcium influx and excitotoxic injury (stroke, status epilepticus)",
      "Glutamic acid/glutamate is glucogenic via α-ketoglutarate; hub for transamination",
      "Sickle cell HbS: Glu → Val substitution at β-6 (not glutamate metabolism disorder)",
      "Alcohol withdrawal and benzodiazepine withdrawal — relative ↑ glutamate vs ↓ GABA → seizures",
    ],
    distinguishFrom: [
      "Glutamine — amide form for nitrogen transport; kidney glutaminase releases NH₄⁺",
      "GABA — decarboxylation product of glutamate, inhibitory neurotransmitter",
      "Glycine — co-agonist at NMDA receptor; separate inhibitory transmitter in spinal cord",
      "Monosodium glutamate (MSG) — dietary flavoring; not the same as synaptic neurotransmitter physiology",
      "α-Ketoglutarate — TCA intermediate, transamination partner of glutamate",
    ],
    pediatrics:
      "Neonatal seizures involve immature GABAergic tone and glutamate receptor expression; excitotoxicity is a concern in perinatal hypoxia-ischemia.",
  },
  {
    id: "alanine",
    name: "Alanine",
    etymology: "Latin alumen = alum + -ine = chemical suffix",
    aliases: ["alanine", "ala", "a", "l-alanine"],
    definition:
      "Nonessential glucogenic amino acid that transaminates to pyruvate, linking amino acid catabolism to glycolysis and gluconeogenesis.",
    pathway: [
      "Alanine aminotransferase (ALT) transfers amino group from alanine to α-ketoglutarate → pyruvate + glutamate",
      "Pyruvate is glucogenic — enters gluconeogenesis",
      "Cahill (glucose-alanine) cycle: muscle alanine carries nitrogen to liver for urea synthesis",
      "ALT elevation marks hepatocellular injury (more liver-specific than AST)",
    ],
    boardsPearls: [
      "Alanine → pyruvate (glucogenic)",
      "ALT = alanine aminotransferase — liver enzyme on boards",
      "vs leucine — alanine is glucogenic, leucine is ketogenic",
      "Sickle cell HbS substitution is Glu→Val at β-6, not alanine metabolism defect",
    ],
    distinguishFrom: [
      "Pyruvate — transamination product, not amino acid itself",
      "Aspartate — transaminates to oxaloacetate, not pyruvate",
      "Glycine — simplest amino acid, separate metabolism",
    ],
  },
  {
    id: "arginine",
    name: "Arginine",
    etymology: "Latin argentum = silver + -ine = chemical suffix (early silver-colored crystals)",
    aliases: ["arginine", "arg", "r", "l-arginine"],
    definition:
      "Semi-essential amino acid central to the urea cycle, nitric oxide synthesis, and creatine production; becomes essential in growth and critical illness.",
    pathway: [
      "Urea cycle: ornithine + carbamoyl phosphate → citrulline → argininosuccinate → arginine → urea + ornithine (arginase)",
      "NOS converts arginine → citrulline + nitric oxide (eNOS in endothelium, iNOS in macrophages)",
      "GH stimulation test uses IV arginine to provoke growth hormone release",
      "Glutamate can form ornithine for urea cycle entry",
    ],
    boardsPearls: [
      "Arginine is urea cycle product and NO precursor (requires NOS, BH₄, O₂)",
      "Arginase deficiency → ↑ arginine, neurological symptoms",
      "OTC deficiency blocks before arginine synthesis — hyperammonemia",
      "Citrullination converts arginine → citrulline in proteins (anti-CCP in RA)",
      "vs ornithine — upstream urea cycle intermediate, not NO precursor directly",
    ],
    distinguishFrom: [
      "Ornithine — urea cycle intermediate before arginine",
      "Citrulline — urea cycle intermediate; citrullinemia is distinct disorder",
      "Lysine — essential, ketogenic, not urea cycle amino acid",
    ],
    pediatrics:
      "Urea cycle disorders (OTC, CPS I, argininosuccinate lyase deficiency) present with hyperammonemia in neonates; arginine supplementation is used in some urea cycle defects.",
  },
  {
    id: "aspartate",
    name: "Aspartate",
    etymology: "Latin asparagus plant + -ate = chemical anion (first isolated from asparagus)",
    aliases: [
      "aspartate",
      "aspartic acid",
      "asp",
      "d",
      "l-aspartate",
      "l-aspartic acid",
    ],
    definition:
      "Nonessential glucogenic amino acid that transaminates to oxaloacetate and donates nitrogen in the urea cycle.",
    pathway: [
      "Aspartate aminotransferase (AST) → oxaloacetate (TCA/glucogenic)",
      "Urea cycle: aspartate donates second nitrogen to citrulline → argininosuccinate (argininosuccinate synthetase)",
      "AST rises in liver injury and also in MI/rhabdomyolysis (less liver-specific than ALT)",
      "Aspartate can form asparagine via asparagine synthetase",
    ],
    boardsPearls: [
      "Aspartate → oxaloacetate (glucogenic)",
      "AST = aspartate aminotransferase — heart and liver",
      "Urea cycle needs aspartate nitrogen for argininosuccinate step",
      "AST:ALT >2:1 suggests alcoholic liver disease",
      "vs alanine — alanine→pyruvate; aspartate→oxaloacetate",
    ],
    distinguishFrom: [
      "Asparagine — amide derivative of aspartate",
      "Oxaloacetate — TCA intermediate from aspartate transamination",
      "Glutamate — different transamination/urea cycle connections",
    ],
  },
  {
    id: "glutamine",
    name: "Glutamine",
    etymology: "Latin gluten = glue + amine = nitrogen-bearing + -ine suffix",
    aliases: ["glutamine", "gln", "q", "l-glutamine"],
    definition:
      "Most abundant free amino acid in blood; amide form of glutamate that transports ammonia and fuels rapidly dividing cells.",
    pathway: [
      "Glutamine synthetase: glutamate + NH₄⁺ → glutamine (liver, muscle, brain)",
      "Kidney glutaminase: glutamine → glutamate + NH₄⁺ (renal ammonia genesis for acid excretion)",
      "Used as nitrogen donor for purine/pyrimidine synthesis and amino sugar formation",
      "Cancer and immune cells avidly consume glutamine (anaplerosis)",
    ],
    boardsPearls: [
      "Glutamine transports ammonia safely between tissues",
      "Renal glutaminase generates NH₄⁺ in chronic acidosis to excrete acid as NH₄Cl",
      "vs glutamate — glutamine has amide side chain; glutamate transaminates to α-KG",
      "Glutamine supplements used in some GI/metabolic support contexts on boards peripherally",
      "Not purely glucogenic/ketogenic classification focus — nitrogen transport role is key",
    ],
    distinguishFrom: [
      "Glutamate/glutamic acid — carboxylic acid form, direct TCA link via α-ketoglutarate",
      "Asparagine — analogous amide of aspartate, not glutamate",
      "Ammonia — free NH₃ is toxic; glutamine carries nitrogen safely",
    ],
    pediatrics:
      "Glutamine contributes to renal acid excretion; urea cycle defects affect ammonia handling upstream of glutamine buffering.",
  },
  {
    id: "histidine",
    name: "Histidine",
    etymology: "Greek histos = tissue + -idine = chemical suffix",
    aliases: ["histidine", "his", "h", "l-histidine"],
    definition:
      "Essential amino acid with imidazole side chain; precursor to histamine, carnosine, and one-carbon metabolism via folate-linked pathways.",
    pathway: [
      "Histidine decarboxylase → histamine (mast cells, basophils, gastric ECL cells)",
      "Catabolism: histidine → urocanic acid → formiminoglutamic acid (FIGLU) → glutamate + one-carbon units",
      "Histidinemia (autosomal recessive) — benign ↑ histidine, often asymptomatic",
      "Imidazole group buffers near physiologic pH — common in active site of enzymes (e.g., catalytic His)",
    ],
    boardsPearls: [
      "Histidine → histamine via decarboxylation (vitamin B₆ dependent)",
      "Essential amino acid in humans",
      "Imidazole ring — unique among standard amino acids",
      "Histidinemia is benign metabolic screen finding",
      "vs histamine — decarboxylated biogenic amine mediator, not amino acid",
    ],
    distinguishFrom: [
      "Histamine — mediator in allergy and gastric acid secretion",
      "Tryptophan — aromatic, serotonin precursor, not histamine pathway",
      "Glutamine — amide nitrogen carrier, not imidazole-containing",
    ],
    pediatrics:
      "Histidinemia detected on newborn metabolic screening is usually benign; distinguish from histiocytosis or allergic histamine-mediated disease terminology.",
  },
  {
    id: "urea-cycle",
    name: "Urea Cycle",
    etymology: "Greek ouron = urine + Latin cyclus = circle",
    aliases: [
      "urea cycle",
      "ornithine cycle",
      "krebs ornithine cycle",
      "krebs-henseleit cycle",
      "krebs henselit cycle",
    ],
    definition:
      "Hepatic mitochondrial–cytosolic pathway that detoxifies ammonia by condensing two nitrogen atoms (from ammonia and aspartate) into urea for renal excretion — the primary route of nitrogen disposal in humans.",
    pathway: [
      "Mitochondria: NH₃ + CO₂ + 2 ATP → carbamoyl phosphate (carbamoyl phosphate synthetase I, CPS I)",
      "OTC: ornithine + carbamoyl phosphate → citrulline",
      "Citrulline exits to cytosol; argininosuccinate synthetase: citrulline + aspartate → argininosuccinate",
      "Argininosuccinate lyase → arginine + fumarate (links to TCA cycle)",
      "Arginase → urea + ornithine (ornithine re-enters mitochondria)",
      "Requires N-acetylglutamate (NAG) as essential allosteric activator of CPS I",
    ],
    boardsPearls: [
      "Two nitrogens in urea: one from free ammonia (carbamoyl phosphate), one from aspartate",
      "OTC deficiency — most common urea cycle disorder; X-linked; hyperammonemia + respiratory alkalosis",
      "CPS I deficiency — similar presentation but autosomal recessive; both need protein restriction",
      "Hyperammonemia causes cerebral edema, vomiting, lethargy, coma — not primarily metabolic acidosis",
      "↓ BUN relative to ammonia load in acute urea cycle decompensation",
      "vs ammonium — ionized buffer form (NH₄⁺); urea cycle disposes nitrogen as neutral urea",
    ],
    distinguishFrom: [
      "Ammonium — protonated ammonia in buffers; urea cycle substrate is NH₃/NH₄⁺ pool",
      "Glutamine — transports ammonia to kidney and liver; not the final excretory product",
      "TCA cycle — separate pathway; urea cycle shares fumarate via argininosuccinate lyase",
      "Ornithine transcarbamylase — single enzyme step, not the whole cycle",
    ],
    pediatrics:
      "Neonatal urea cycle defects present hours after protein feeding with poor feeding, vomiting, and rapidly progressive encephalopathy — emergency ammonia level and protein restriction; arginine/citrulline supplementation depends on specific enzyme defect.",
  },
  {
    id: "anaerobic-metabolism",
    name: "Anaerobic Metabolism",
    etymology: "Greek an = without + Greek aer = air + Greek metabolē = change",
    aliases: [
      "anaerobic metabolism",
      "anaerobic respiration",
      "anaerobic glycolysis",
      "anaerobic energy metabolism",
      "anaerobic ATP production",
    ],
    definition:
      "ATP-generating metabolism that proceeds without mitochondrial oxidative phosphorylation — chiefly cytosolic glycolysis with NAD⁺ regeneration via lactate (or fermentation products), yielding far less ATP per glucose than aerobic oxidation.",
    pathway: [
      "Glycolysis: glucose → 2 pyruvate + 2 net ATP + 2 NADH (cytosol)",
      "When O₂ or mitochondria are limited: pyruvate → lactate via lactate dehydrogenase (regenerates NAD⁺ for glycolysis to continue)",
      "Cori cycle: muscle lactate → liver → gluconeogenesis → glucose (requires aerobic liver metabolism)",
      "Alternative fermentation: pyruvate → ethanol + CO₂ (yeast) or mixed acids (some bacteria) — not major in human energy economy",
      "No electron transport chain or O₂ consumption — glycolysis is rate-limited by NAD⁺ availability",
    ],
    boardsPearls: [
      "Net 2 ATP per glucose anaerobically vs ~30–32 ATP aerobically — trade-off for speed when O₂ delivery fails",
      "Shock, sepsis, ischemia → tissue hypoxia → ↑ anaerobic glycolysis → lactic acidosis (Type A)",
      "RBCs lack mitochondria — rely on anaerobic glycolysis exclusively for ATP",
      "Exercising skeletal muscle uses anaerobic glycolysis when oxidative capacity exceeded — transient lactate rise",
      "vs aerobic metabolism — requires O₂, mitochondria, TCA cycle, and oxidative phosphorylation",
      "Lactic acid is product, not pathway name — distinguish molecule from anaerobic metabolism process",
    ],
    distinguishFrom: [
      "Aerobic metabolism — O₂-dependent oxidative phosphorylation and full glucose oxidation",
      "Lactic acid — anaerobic glycolysis end product, not the metabolic process itself",
      "Lactic acidosis — clinical/lab syndrome of excess lactate with metabolic acidosis",
      "Fermentation — microbial pathways; human boards focus on lactate production via LDH",
      "Beta-oxidation — fatty acid oxidation, aerobic mitochondrial pathway",
    ],
    pediatrics:
      "Neonatal shock and inborn errors affecting mitochondria (e.g., pyruvate dehydrogenase deficiency) shift metabolism toward lactate production; neonatal lactic acidosis warrants sepsis workup and metabolic evaluation.",
  },
  {
    id: "lactic-acid",
    name: "Lactic Acid",
    etymology: "Latin lac = milk + Latin acidus = sour",
    aliases: [
      "lactic acid",
      "lactate",
      "l-lactate",
      "l-lactic acid",
    ],
    definition:
      "Three-carbon hydroxyacid (CH₃CHOHCOOH) produced when pyruvate is reduced by lactate dehydrogenase (LDH) during anaerobic glycolysis — regenerated to pyruvate in the Cori cycle or oxidized via gluconeogenesis in the liver.",
    pathway: [
      "Anaerobic glycolysis: glucose → pyruvate → lactate (LDH) when mitochondrial oxidation is limited",
      "Cori cycle: skeletal muscle lactate → blood → liver → gluconeogenesis → glucose back to muscle",
      "Lactate dehydrogenase (LDH) also interconverts pyruvate and lactate in cytosol (NADH ↔ NAD⁺)",
      "L-lactate is the physiologic stereoisomer measured clinically; D-lactate from bacterial fermentation in short bowel",
      "Accumulation when production exceeds hepatic clearance → lactic acidosis (anion gap metabolic acidosis)",
    ],
    boardsPearls: [
      "Pyruvate → lactate when O₂/mitochondria cannot keep up (shock, sepsis, exercise)",
      "Cori cycle recycles lactate to glucose in liver",
      "LDH is a nonspecific tissue injury marker (hemolysis, malignancy, hepatitis)",
      "vs lactic acidosis — lactic acid is the molecule; acidosis is clinical/lab syndrome of excess lactate + ↓ pH",
      "Type A lactic acidosis = hypoperfusion; Type B = drugs, liver failure, mitochondrial disease",
    ],
    distinguishFrom: [
      "Lactic acidosis — pathologic accumulation with metabolic acidosis, not the molecule alone",
      "Pyruvate — upstream glycolytic intermediate converted to lactate by LDH",
      "Lactate dehydrogenase (LDH) — enzyme, not the acid product",
      "D-lactic acidosis — rare encephalopathy from gut bacterial D-lactate in short bowel",
    ],
    pediatrics:
      "Neonatal lactic acidosis may reflect sepsis, inborn errors of metabolism, or mitochondrial disorders; LDH is elevated with hemolysis of newborn samples.",
  },
];

const metabolismById = new Map(METABOLISM.map((entry) => [entry.id, entry]));

export function getMetabolismById(id: string): MetabolismEntry | undefined {
  return metabolismById.get(id);
}

export interface MetabolismAliasMatch {
  alias: string;
  metabolismId: string;
}

export function buildMetabolismAliasIndex(): MetabolismAliasMatch[] {
  const matches: MetabolismAliasMatch[] = [];
  for (const entry of METABOLISM) {
    for (const alias of entry.aliases) {
      matches.push({
        alias: alias.toLowerCase(),
        metabolismId: entry.id,
      });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
