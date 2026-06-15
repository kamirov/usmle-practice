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
    aliases: ["leucine", "leu"],
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
    aliases: ["phenylalanine", "phe"],
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
    aliases: ["tyrosine", "tyr"],
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
    id: "tryptophan",
    name: "Tryptophan",
    etymology:
      "Greek tryps = worn/rubbed + phainein = to appear + -an = chemical suffix (named for tryptic digestion products)",
    aliases: [
      "tryptophan",
      "tryptophans",
      "l-tryptophan",
      "trp",
      "triptophan",
      "triptophans",
      "essential amino acid tryptophan",
    ],
    definition:
      "Essential aromatic amino acid and precursor to serotonin, melatonin, and niacin (via the kynurenine pathway) — limited availability of dietary tryptophan can contribute to niacin deficiency when conversion pathways are blocked or diverted.",
    pathway: [
      "Essential amino acid — cannot be synthesized; mnemonic PVT TIM HALL",
      "Serotonin synthesis: tryptophan → 5-hydroxytryptophan (tryptophan hydroxylase, BH₄) → serotonin (aromatic L-amino acid decarboxylase, B₆)",
      "Melatonin synthesized downstream from serotonin (circadian regulation)",
      "Niacin (NAD⁺) synthesis: ~1/60 of tryptophan converted via kynurenine pathway — requires vitamin B₆",
      "Catabolism also feeds alanine and acetyl-CoA — glucogenic and ketogenic",
      "Carcinoid syndrome diverts tryptophan to serotonin → ↓ substrate for niacin synthesis",
      "Hartnup disease — defective neutral amino acid transport (including tryptophan) → pellagra-like niacin deficiency",
      "Isoniazid — depletes B₆, impairing kynurenine → niacin pathway",
    ],
    boardsPearls: [
      "Tryptophan → serotonin (mood, GI motility, platelets) and → niacin (NAD⁺ cofactor)",
      "Essential aromatic amino acid — separate pathway from phenylalanine/tyrosine catabolism",
      "Carcinoid tumor uses tryptophan for serotonin → risk of pellagra-like niacin deficiency",
      "Hartnup disease — neutral aminoaciduria with tryptophan malabsorption → niacin deficiency",
      "Isoniazid + low B₆ → impaired tryptophan-to-niacin conversion",
      "Tryptophan hydroxylase uses BH₄ — same cofactor family as PAH and tyrosine hydroxylase",
      "vs tyrosine — catecholamines derive from tyrosine, not tryptophan",
    ],
    distinguishFrom: [
      "Serotonin — decarboxylated neurotransmitter/hormone, not the dietary amino acid",
      "Niacin (vitamin B₃) — end product of kynurenine pathway, not synonymous with tryptophan",
      "Phenylalanine/tyrosine — separate aromatic amino acid catabolic pathway to fumarate/acetoacetate",
      "5-Hydroxytryptophan (5-HTP) — immediate serotonin precursor intermediate",
      "Melatonin — downstream indoleamine hormone from serotonin",
    ],
    pediatrics:
      "Hartnup disease may present in childhood with pellagra-like dermatitis and ataxia; high-protein diet and niacin supplementation help. Essential amino acid requirements are higher per kg in infants.",
  },
  {
    id: "serine",
    name: "Serine",
    etymology: "Latin sericum = silk + -ine = chemical suffix (first found in silk protein)",
    aliases: ["serine", "ser"],
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
    aliases: ["cysteine", "cys"],
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
    aliases: ["valine", "val"],
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
    aliases: ["alanine", "ala", "l-alanine"],
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
    aliases: ["arginine", "arg", "l-arginine"],
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
    aliases: ["glutamine", "gln", "l-glutamine"],
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
    aliases: ["histidine", "l-histidine"],
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
    id: "lipolysis",
    name: "Lipolysis",
    etymology: "Greek lipos = fat + Greek lysis = loosening/breakdown",
    aliases: [
      "lipolysis",
      "adipose lipolysis",
      "triglyceride lipolysis",
      "fat breakdown",
      "fatty acid mobilization",
      "hormone-sensitive lipolysis",
      "hsl-mediated lipolysis",
    ],
    definition:
      "Hydrolysis of stored adipose triglycerides into free fatty acids and glycerol for energy production — regulated by insulin (inhibits) and counter-regulatory hormones (stimulate).",
    pathway: [
      "Adipose stores triglycerides in lipid droplets coated with perilipin",
      "Hormone-sensitive lipase (HSL) and adipose triglyceride lipase (ATGL) hydrolyze triglycerides → diacylglycerol → monoacylglycerol → free fatty acids + glycerol",
      "Catecholamines (epinephrine/norepinephrine) and glucagon → ↑ cAMP → PKA phosphorylates HSL and perilipin → active lipolysis",
      "Insulin → dephosphorylation/inhibition of HSL → suppresses lipolysis and promotes storage",
      "Free fatty acids bind albumin → liver for β-oxidation and ketogenesis; glycerol → gluconeogenesis",
    ],
    boardsPearls: [
      "Insulin inhibits lipolysis; glucagon and epinephrine stimulate lipolysis",
      "HSL phosphorylation by PKA is the key regulatory step",
      "Unrestrained lipolysis in insulin deficiency (DKA) → ↑ FFA → hepatic ketogenesis",
      "Catecholamine surge (stress, pheochromocytoma) → lipolysis → ↑ FFA",
      "Niacin inhibits adipocyte lipolysis (anti-lipolytic) — can worsen hyperglycemia but lowers FFA",
      "vs lipogenesis — fatty acid synthesis (insulin-stimulated, fed state)",
      "vs beta-oxidation — mitochondrial oxidation of fatty acids after lipolysis releases them from adipose",
    ],
    distinguishFrom: [
      "Lipogenesis — de novo fatty acid synthesis in fed/insulin-high state",
      "Beta-oxidation — mitochondrial oxidation of fatty acids, not triglyceride hydrolysis in adipose",
      "Ketogenesis — hepatic production of ketone bodies from acetyl-CoA derived from FFA",
      "Lysis — general term; lipolysis specifically refers to lipid breakdown",
      "Lipoprotein lipase (LPL) — endothelial hydrolysis of circulating triglycerides in chylomicrons/VLDL, not adipocyte storage mobilization",
    ],
    pediatrics:
      "Infants have limited adipose reserves; prolonged fasting or insulin deficiency can rapidly mobilize fat and produce ketosis. Congenital hyperinsulinism suppresses lipolysis and ketogenesis, increasing hypoglycemia risk during fasting.",
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
  {
    id: "d-lactate",
    name: "D-Lactate",
    etymology: "D = dextrorotatory stereoisomer + Latin lac = milk + -ate = salt/ester suffix",
    aliases: [
      "d-lactate",
      "d lactate",
      "d-lactic acid",
      "d lactic acid",
      "d-lactic acidosis",
      "d lactic acidosis",
      "d-lactate acidosis",
    ],
    definition:
      "Non-physiologic stereoisomer of lactate produced by bacterial fermentation in the colon — not measured on standard L-lactate assays — accumulating in short bowel syndrome and jejunoileal bypass to cause anion gap acidosis and encephalopathy.",
    pathway: [
      "Colonic bacteria (e.g., Lactobacillus, Streptococcus bovis) ferment carbohydrates → D-lactate",
      "Short bowel or blind loop — increased substrate delivery to colon → ↑ D-lactate absorption",
      "Human lactate dehydrogenase metabolizes L-lactate, not D-lactate → D-lactate accumulates",
      "Standard serum lactate assay measures L-lactate only — D-lactate requires specialized testing",
      "D-lactate crosses blood-brain barrier → altered mental status without severe L-lactate elevation",
    ],
    boardsPearls: [
      "D-lactic acidosis — short bowel syndrome + high-carb diet + encephalopathy",
      "Anion gap metabolic acidosis with normal or mildly ↑ L-lactate",
      "Slurred speech, ataxia, confusion after carbohydrate load",
      "vs L-lactic acidosis — shock, sepsis, metformin, mitochondrial disease raise L-lactate",
      "Treat with low-carbohydrate diet, antibiotics targeting colonic flora, correction of acidosis",
    ],
    distinguishFrom: [
      "L-lactic acidosis — hypoperfusion, sepsis, metformin, cyanide, mitochondrial disorders",
      "Lactic acid — physiologic L-isomer from anaerobic glycolysis",
      "Ethylene glycol/methanol poisoning — osmolar gap, different toxidrome",
      "Hyperchloremic metabolic acidosis — normal anion gap",
    ],
    pediatrics:
      "Short bowel syndrome in neonates (necrotizing enterocolitis, gastroschisis) predisposes to D-lactic acidosis with enteral feeds; suspect when encephalopathy out of proportion to L-lactate.",
  },
  {
    id: "erythropoiesis",
    name: "Erythropoiesis",
    etymology:
      "Greek erythros = red + poiesis = making/formation",
    aliases: [
      "erythropoiesis",
      "erythropoietic",
      "red blood cell production",
      "rbc production",
      "red cell production",
      "erythroid maturation",
      "erythroid differentiation",
    ],
    definition:
      "Bone marrow process by which multipotent stem cells differentiate into mature erythrocytes — requires erythropoietin, iron, vitamin B12, folate, and intact heme/globin synthesis.",
    pathway: [
      "Hypoxia → renal (and hepatic) EPO secretion → EPO binds erythroid progenitors (BFU-E → CFU-E)",
      "Maturation sequence: proerythroblast → basophilic → polychromatic → orthochromatic erythroblast → reticulocyte (extrudes nucleus) → mature RBC",
      "Heme synthesis in mitochondria/cytosol (ALA, porphyrin, iron incorporation); globin chains (α, β) assemble into hemoglobin",
      "Reticulocytes remain in marrow ~1 day, circulate 1–2 days — ↑ reticulocyte count reflects ↑ erythropoiesis",
      "Extramedullary erythropoiesis in fetal liver/spleen; adult marrow is primary site (vertebrae, pelvis, ribs, sternum)",
      "Megaloblastic anemia — impaired DNA synthesis → large ineffective erythroblasts; thalassemia — imbalanced globin → ineffective erythropoiesis and hemolysis",
    ],
    boardsPearls: [
      "EPO from peritubular interstitial cells in kidney (~90%); liver contributes remainder",
      "↑ reticulocyte count = marrow response to anemia (hemolysis, blood loss recovery)",
      "Iron, B12, and folate are essential cofactors — deficiency causes microcytic or macrocytic anemia",
      "EPO-secreting renal cell carcinoma → paraneoplastic polycythemia",
      "Polycythemia vera — JAK2 mutation → autonomous erythropoiesis independent of EPO",
      "Anemia of chronic disease — ↓ iron availability and blunted EPO response despite normal stores",
    ],
    distinguishFrom: [
      "Hemolysis — destruction of circulating RBCs; reticulocytosis reflects compensatory erythropoiesis",
      "Hematopoiesis — broader process producing all blood lineages, not only erythroid",
      "Erythropoietin — hormone stimulating erythropoiesis, not the differentiation process itself",
      "Extramedullary hematopoiesis — pathologic blood production outside marrow (e.g., myelofibrosis, severe hemolytic anemia)",
    ],
    pediatrics:
      "Fetal erythropoiesis occurs in liver then marrow; hemoglobin F (α2γ2) predominates until γ-to-β switch after birth. Neonatal anemia of prematurity reflects low EPO response; physiologic nadir at ~6–8 weeks in term infants.",
  },
  {
    id: "hydrogen-ion",
    name: "H⁺",
    etymology: "H = hydrogen + ⁺ = cation (proton)",
    aliases: [
      "h+",
      "h⁺",
      "h +",
      "hydrogen ion",
      "hydrogen ions",
      "proton",
      "protons",
      "hydrogen cation",
      "hydrogen cations",
    ],
    definition:
      "Hydrogen ion (proton) — the chemical species whose concentration defines acid-base status; freely dissociated H⁺ in aqueous body fluids determines pH and drives enzymatic, transport, and buffering reactions.",
    pathway: [
      "pH = −log₁₀[H⁺]; each 0.3 pH unit ≈ 2-fold change in [H⁺]",
      "Strong acids (HCl in stomach) dissociate to H⁺ + anion; fixed acid load buffered then excreted renally as NH₄Cl",
      "Intracellular and extracellular buffers: bicarbonate (open system), hemoglobin, plasma proteins, phosphate",
      "Renal α-intercalated cells secrete H⁺ via H⁺-ATPase and H⁺/K⁺-ATPase; titrated by filtered bicarbonate and trapped as NH₄⁺",
      "Gastric parietal cells secrete H⁺ via H⁺/K⁺-ATPase (proton pump) — blocked by PPIs",
      "Metabolic acidosis: ↑ [H⁺] → K⁺ shifts out of cells; alkalosis → H⁺ enters cells and K⁺ exits",
    ],
    boardsPearls: [
      "Acidosis = ↑ [H⁺] = ↓ pH; alkalosis = ↓ [H⁺] = ↑ pH",
      "Henderson-Hasselbalch: pH relates HCO₃⁻ and dissolved CO₂ (H₂CO₃)",
      "Vomiting removes gastric H⁺ → metabolic alkalosis; diarrhea loses HCO₃⁻ → metabolic acidosis",
      "Renal NH₄⁺ excretion (with H⁺) is key adaptive response to chronic acidosis",
      "Osteoclasts secrete H⁺ at ruffled border to resorb bone mineral",
      "vs H₂ — molecular hydrogen gas, not the acid-base proton",
    ],
    distinguishFrom: [
      "Hydronium (H₃O⁺) — proton associated with water in solution; boards shorthand uses H⁺",
      "H₂ — diatomic hydrogen gas, not acid-base proton",
      "HCO₃⁻ — bicarbonate buffer base, not free proton",
      "NH₃/NH₄⁺ — ammonia/ammonium buffer system in kidney, distinct from free H⁺ pool",
      "Proton pump (H⁺/K⁺-ATPase) — transporter protein, not the ion itself",
    ],
    pediatrics:
      "Neonates have lower renal net acid excretion capacity — premature infants are prone to metabolic acidosis with protein-rich feeding; urea cycle and renal ammoniagenesis mature over weeks.",
  },
  {
    id: "thiamine",
    name: "Thiamine",
    etymology: "Greek theion = sulfur + amine = nitrogen compound (vitamin B₁)",
    aliases: [
      "thiamine",
      "thiamin",
      "vitamin b1",
      "vitamin b-1",
      "vitamin b 1",
      "aneurine",
      "thiamine pyrophosphate",
      "tpp",
      "cocarboxylase",
    ],
    definition:
      "Water-soluble vitamin B₁ — essential cofactor for thiamine pyrophosphate (TPP)–dependent enzymes in carbohydrate metabolism — deficiency causes beriberi, Wernicke encephalopathy, and Korsakoff syndrome, especially in alcoholism and malnutrition.",
    pathway: [
      "Dietary thiamine → phosphorylation to thiamine pyrophosphate (TPP) in liver",
      "TPP cofactor for pyruvate dehydrogenase complex — pyruvate → acetyl-CoA (links glycolysis to TCA cycle)",
      "TPP cofactor for α-ketoglutarate dehydrogenase (TCA cycle) and transketolase (HMP shunt/pentose phosphate pathway)",
      "Branched-chain α-keto acid dehydrogenase (BCAA catabolism) also requires TPP",
      "Alcohol impairs intake, absorption, and hepatic storage; glucose infusion without thiamine depletes remaining stores",
    ],
    boardsPearls: [
      "Thiamine (B₁) → TPP cofactor for PDH, α-KGDH, transketolase",
      "Deficiency → Wernicke encephalopathy (acute) and Korsakoff syndrome (chronic amnesia)",
      "Beriberi — dry (neuropathy) and wet (high-output heart failure) forms",
      "Give thiamine BEFORE dextrose in malnourished/alcoholic patients",
      "Refeeding syndrome — supplement thiamine with phosphate repletion",
      "Arsenic poisons lipoic acid at PDH — similar energy failure concept",
      "MSUD and PDH deficiency — other TPP-dependent pathway disorders",
    ],
    distinguishFrom: [
      "Niacin (B₃) — NAD/NADP cofactors; pellagra (3 D's)",
      "Riboflavin (B₂) — FAD/FMN cofactors; angular stomatitis",
      "Pyridoxine (B₆) — transamination reactions; neuropathy and sideroblastic anemia",
      "Lipoic acid — PDH cofactor (not thiamine itself); arsenic target",
    ],
    pediatrics:
      "Infantile beriberi from thiamine-deficient breast milk (maternal deficiency); MSUD neonates may respond to thiamine in thiamine-responsive BCKDH subtypes.",
  },
  {
    id: "ascorbic-acid",
    name: "Ascorbic Acid",
    etymology:
      "Latin a- = without + scorbutus = scurvy + acidus = sour (vitamin that prevents scurvy)",
    aliases: [
      "ascorbic acid",
      "ascorbic acids",
      "ascorbate",
      "ascorbates",
      "l-ascorbic acid",
      "l ascorbic acid",
      "vitamin c",
      "vitamin-c",
    ],
    definition:
      "Water-soluble vitamin C — essential dietary antioxidant and enzymatic cofactor for collagen hydroxylation and several biosynthetic reactions; humans cannot synthesize it (lost gulonolactone oxidase) and must obtain it from fruits and vegetables.",
    pathway: [
      "Dietary ascorbate absorbed in small intestine → distributed to tissues; renal excretion when replete",
      "Cofactor for prolyl hydroxylase and lysyl hydroxylase — hydroxylation of collagen α-chains → stable triple helix",
      "Cofactor for dopamine β-hydroxylase — dopamine → norepinephrine",
      "Reduces ferric (Fe³⁺) to ferrous (Fe²⁺) iron — enhances intestinal iron absorption",
      "Antioxidant — regenerates oxidized vitamin E; scavenges reactive oxygen species",
      "Carnitine and bile acid synthesis require ascorbate-dependent enzymes",
    ],
    boardsPearls: [
      "Vitamin C (ascorbic acid) = cofactor for prolyl/lysyl hydroxylase → collagen synthesis",
      "Deficiency → scurvy: bleeding gums, perifollicular hemorrhages, corkscrew hairs, poor wound healing",
      "Humans cannot synthesize vitamin C — dietary requirement",
      "Infantile scurvy (Barlow disease) — subperiosteal hemorrhage, pseudo-paralysis",
      "Enhances iron absorption — give with oral iron therapy",
      "Excess → calcium oxalate nephrolithiasis; may cause false-negative guaiac fecal occult blood tests",
      "vs rickets — vitamin D deficiency affects bone mineralization, not collagen cross-linking",
      "vs thiamine — B₁ is TPP for PDH; vitamin C is collagen hydroxylation",
    ],
    distinguishFrom: [
      "Scurvy — clinical deficiency syndrome from inadequate ascorbate, not the vitamin molecule itself",
      "Citric acid — TCA cycle intermediate, not a vitamin",
      "Ascorbate oxidase — plant enzyme; humans lack endogenous vitamin C synthesis pathway",
      "Dehydroascorbic acid — oxidized form transported by GLUT transporters; reduced back to ascorbate intracellularly",
    ],
    pediatrics:
      "Infants on heat-treated formula without vitamin C supplementation are at risk for Barlow disease; measles and malnutrition increase requirement. Rapid clinical response to ascorbate replacement supports diagnosis.",
  },
  {
    id: "retinol",
    name: "Retinol",
    etymology:
      "Latin retina = net (anatomical layer of the eye) + -ol = alcohol (vitamin A alcohol form)",
    aliases: [
      "retinol",
      "retinols",
      "vitamin a",
      "vitamin-a",
      "vitamin a alcohol",
      "all-trans-retinol",
      "preformed vitamin a",
    ],
    definition:
      "Fat-soluble vitamin A alcohol — essential for vision (rhodopsin), epithelial differentiation, immune function, and gene regulation via retinoic acid; obtained preformed from animal sources or synthesized from dietary provitamin A carotenoids (β-carotene).",
    pathway: [
      "Diet: retinol (animal) or β-carotene (plants) → intestinal absorption with bile micelles → chylomicrons → liver storage as retinyl esters in hepatic stellate (Ito) cells",
      "Oxidation: retinol → retinal (aldehyde) → retinoic acid (RA) in target tissues",
      "Vision: 11-cis-retinal binds opsin in rod photoreceptors → rhodopsin; light isomerization → signal transduction → night vision",
      "Retinoic acid binds nuclear receptors (RAR/RXR) → transcription of genes for epithelial differentiation, growth, and immunity",
      "Mobilized from liver bound to retinol-binding protein (RBP) and transthyretin for delivery to tissues",
    ],
    boardsPearls: [
      "Retinol → retinal (vision) and retinoic acid (gene transcription)",
      "Deficiency → night blindness, xerophthalmia, Bitot spots, keratomalacia, follicular hyperkeratosis",
      "Measles in children — vitamin A supplementation ↓ morbidity/mortality (especially in deficiency)",
      "Excess/isotretinoin teratogenicity — neural crest and pharyngeal arch defects (craniofacial, cardiac, thymic)",
      "Vitamin A excess → pseudotumor cerebri, hepatotoxicity, desquamation",
      "Hepatic stellate cells store vitamin A — activated in cirrhosis (fibrosis)",
      "vs β-carotene — provitamin A carotenoid cleaved to retinal; excess carotenemia causes orange skin without toxicity",
      "vs vitamin D — steroid hormone precursor for calcium/phosphate; separate deficiency (rickets)",
    ],
    distinguishFrom: [
      "Retinoic acid (tretinoin, isotretinoin) — pharmacologic vitamin A derivatives; teratogenic at therapeutic doses",
      "β-carotene — provitamin A from plants; converted to retinal, not preformed retinol",
      "Vitamin D (cholecalciferol) — separate fat-soluble vitamin for bone mineralization",
      "Xerophthalmia — clinical ocular syndrome of vitamin A deficiency, not the vitamin itself",
      "Rhodopsin — opsin + 11-cis-retinal photopigment complex in rods",
    ],
    pediatrics:
      "Vitamin A deficiency is a leading preventable cause of childhood blindness globally; WHO recommends vitamin A with measles. Isotretinoin is absolutely contraindicated in pregnancy — teratogenic via excess retinoic acid signaling.",
  },
  {
    id: "cofactor",
    name: "Cofactor",
    etymology: "Latin co- = together + Latin factor = maker/agent",
    aliases: [
      "cofactor",
      "cofactors",
      "enzyme cofactor",
      "enzyme cofactors",
      "coenzyme",
      "coenzymes",
    ],
    definition:
      "Non-protein chemical helper required for full enzymatic activity — organic coenzymes (often vitamin-derived) or inorganic metal ions that participate in catalysis but are not consumed as substrate.",
    pathway: [
      "Organic coenzymes — NAD+/NADH, FAD/FADH₂, TPP, biotin, B12, PLP (B6), CoA, tetrahydrofolate",
      "Metal cofactors — Zn²⁺, Mg²⁺, Cu²⁺, Fe²⁺/Fe³⁺, Mn²⁺, Mo, Se",
      "Cosubstrate vs prosthetic group — cosubstrate leaves enzyme (NAD+); prosthetic group stays bound (heme, biotin on carboxylase)",
      "Vitamin deficiencies often manifest as cofactor deficits → specific enzymatic blocks",
    ],
    boardsPearls: [
      "Cofactor = helper; coenzyme = organic vitamin-derived cofactor",
      "B12 cofactor for methionine synthase and methylmalonyl-CoA mutase",
      "TPP (B1) for PDH, α-KGDH, transketolase",
      "B6 (PLP) for transamination and sideroblastic anemia if deficient",
      "Copper cofactor for cytochrome c oxidase, lysyl oxidase, ceruloplasmin",
      "Zinc cofactor for DNA polymerase, carbonic anhydrase, alcohol dehydrogenase",
    ],
    distinguishFrom: [
      "Apoenzyme — protein portion without cofactor; inactive until cofactor binds",
      "Allosteric activator — regulatory binding, not required for catalytic chemistry",
      "Substrate — consumed/converted in reaction; cofactor regenerated or reused",
      "Enzyme — protein catalyst itself",
    ],
    pediatrics:
      "Multiple inborn errors involve cofactor-responsive enzyme defects (e.g., thiamine-responsive MSUD, biotinidase deficiency needing biotin cofactor).",
  },
  {
    id: "purine",
    name: "Purine",
    etymology: "Latin purum = pure + -ine = chemical suffix (originally from uric acid in urine)",
    aliases: [
      "purine",
      "purines",
      "purine base",
      "purine bases",
      "purine nucleotide",
      "purine nucleotides",
    ],
    definition:
      "Heterocyclic aromatic organic compound base (adenine, guanine) used to build nucleotides for DNA, RNA, ATP, GTP, and cyclic nucleotide signaling.",
    pathway: [
      "De novo synthesis — IMP from ribose-5-P + glutamine, glycine, aspartate, folate one-carbon units",
      "Salvage pathway — hypoxanthine-guanine phosphoribosyltransferase (HGPRT) recycles bases to nucleotides",
      "Adenine → AMP; guanine → GMP; IMP branch point",
      "Catabolism → uric acid (xanthine oxidase) — excess causes gout/hyperuricemia",
      "Methotrexate blocks dihydrofolate reductase → ↓ purine (and thymidine) synthesis",
    ],
    boardsPearls: [
      "Purines = adenine (A) and guanine (G); pyrimidines = cytosine, thymine, uracil",
      "HGPRT deficiency (Lesch-Nyhan) — impaired purine salvage → ↑ uric acid + neurologic disease",
      "6-MP and azathioprine are purine analogs — metabolized by TPMT/xanthine oxidase",
      "Allopurinol/febuxostat inhibit xanthine oxidase → ↓ uric acid from purine breakdown",
      "Folate required for de novo purine ring synthesis (along with thymidine production)",
    ],
    distinguishFrom: [
      "Pyrimidine — cytosine, thymine, uracil; separate synthesis pathway (CAD, UMPS)",
      "Thymidine — pyrimidine nucleoside, not purine",
      "Uric acid — purine catabolism end product, not the base itself",
    ],
    pediatrics:
      "Lesch-Nyhan syndrome (HGPRT deficiency) presents in boys with self-injury, gout, and developmental delay; orotic aciduria distinguishes from ornithine transcarbamylase deficiency.",
  },
  {
    id: "thymidine",
    name: "Thymidine",
    etymology: "Greek thymon = thyme (early isolation source) + -ide = nucleoside suffix",
    aliases: [
      "thymidine",
      "thymidine nucleoside",
      "deoxythymidine",
      "dTMP precursor",
      "thymidylate",
    ],
    definition:
      "Pyrimidine deoxyribonucleoside (thymine + deoxyribose) that is phosphorylated to dTMP for DNA synthesis — rate-limited by thymidylate synthase using N5,N10-methylenetetrahydrofolate.",
    pathway: [
      "dUMP + N5,N10-methylenetetrahydrofolate → thymidylate synthase → dTMP (requires folate)",
      "Methotrexate inhibits dihydrofolate reductase → ↓ tetrahydrofolate → ↓ dTMP/purine synthesis",
      "5-FU metabolite FdUMP inhibits thymidylate synthase → blocks DNA synthesis",
      "dTMP incorporated into DNA as thymine (T pairs with adenine)",
      "Salvage: thymidine kinase can phosphorylate thymidine in some tissues",
    ],
    boardsPearls: [
      "Thymidine synthesis requires folate — links folate deficiency to megaloblastic anemia",
      "Thymidylate synthase is target of 5-FU (FdUMP) and methotrexate (indirectly via folate)",
      "Folinic acid (leucovorin) rescues normal cells from methotrexate by bypassing DHFR block",
      "Thymine (in DNA) vs uracil (in RNA) — thymidine is DNA-specific base precursor",
      "vs thiamine — homophone trap; thiamine is vitamin B1, not thymidine",
    ],
    distinguishFrom: [
      "Thymine — base alone without sugar",
      "dTMP — phosphorylated thymidine monophosphate ready for DNA polymerase",
      "Uracil/uridine — RNA pyrimidine, not DNA thymidine",
      "Purine bases — adenine/guanine, separate synthesis pathway",
    ],
    pediatrics:
      "Folate deficiency in pregnancy impairs thymidine (and purine) synthesis → neural tube defects; folic acid supplementation prevents NTDs.",
  },
  {
    id: "nadh",
    name: "NADH",
    etymology: "nicotinamide adenine dinucleotide + H = reduced (hydride-bearing) form",
    aliases: [
      "nadh",
      "reduced nadh",
      "reduced nad",
      "nadh+h",
      "nadh + h",
      "dihydronicotinamide adenine dinucleotide",
    ],
    definition:
      "Reduced form of NAD⁺ carrying a hydride equivalent — primary electron donor to the mitochondrial electron transport chain and product of glycolysis, β-oxidation, and the TCA cycle.",
    pathway: [
      "Glycolysis: glyceraldehyde-3-phosphate dehydrogenase → NADH (cytosolic)",
      "TCA cycle: isocitrate dehydrogenase, α-ketoglutarate dehydrogenase, malate dehydrogenase → NADH (mitochondrial matrix)",
      "β-oxidation: acyl-CoA dehydrogenase steps → FADH₂ and NADH",
      "NADH donates electrons to Complex I → ubiquinone → Complex III → cytochrome c → Complex IV → O₂",
      "Malate-aspartate shuttle and glycerol-3-phosphate shuttle transfer cytosolic NADH into mitochondria",
      "Alcohol metabolism: alcohol dehydrogenase and aldehyde dehydrogenase generate NADH → ↑ NADH/NAD⁺ ratio",
    ],
    boardsPearls: [
      "NADH → Complex I of ETC; FADH₂ → Complex II (skips Complex I)",
      "~2.5 ATP per NADH via oxidative phosphorylation (boards may round to 3)",
      "High NADH/NAD⁺ ratio (alcohol, fasting) favors lactic acidosis and hepatic steatosis",
      "NADH is oxidized back to NAD⁺ by ETC — O₂ required as terminal electron acceptor",
      "vs NADPH — NADPH used in anabolic/reductive reactions (HMP shunt, fatty acid synthesis), not primary ETC fuel",
      "Cyanide blocks Complex IV → cannot regenerate NAD⁺ → anaerobic metabolism → lactic acidosis",
    ],
    distinguishFrom: [
      "NAD⁺ — oxidized form accepting electrons; substrate for dehydrogenases",
      "NADPH — pentose phosphate pathway product; glutathione reduction, steroid synthesis",
      "FADH₂ — enters ETC at Complex II; succinate dehydrogenase, fatty acyl-CoA dehydrogenase",
      "Lactate — end product when NADH reoxidized via lactate dehydrogenase in anaerobic glycolysis",
    ],
    pediatrics:
      "Mitochondrial disorders impair NADH oxidation via ETC → lactic acidosis in infants; pyruvate and lactate elevation with normal perfusion suggests mitochondrial or PDH defect.",
  },
  {
    id: "nadph",
    name: "NADPH",
    etymology: "nicotinamide adenine dinucleotide phosphate + H = reduced (hydride-bearing) form",
    aliases: [
      "nadph",
      "reduced nadph",
      "nadph + h",
      "nadph+h",
      "tphn",
      "triphosphopyridine nucleotide (historical)",
    ],
    definition:
      "Reduced form of NADP⁺ carrying a hydride equivalent — primary cellular reducing agent for anabolic reactions, antioxidant defense, and NADPH oxidase–mediated respiratory burst.",
    pathway: [
      "Pentose phosphate pathway (HMP shunt) — glucose-6-phosphate dehydrogenase and 6-phosphogluconate dehydrogenase generate NADPH (cytoplasm)",
      "Malic enzyme and isocitrate dehydrogenase — additional NADPH sources in cytoplasm and mitochondria",
      "Glutathione reductase uses NADPH to regenerate reduced glutathione (GSH) from GSSG",
      "Fatty acid and cholesterol synthesis — NADPH provides reducing equivalents",
      "Cytochrome P450 monooxygenases consume NADPH in drug and steroid metabolism",
      "NADPH oxidase (phagocytes) transfers electrons from NADPH to O₂ → superoxide (respiratory burst)",
    ],
    boardsPearls: [
      "NADPH = reducing power; NADH = primarily ETC fuel (oxidative phosphorylation)",
      "G6PD deficiency → ↓ NADPH → ↓ glutathione → oxidative hemolysis with oxidant stress (fava beans, sulfa drugs, primaquine)",
      "NADPH oxidase uses NADPH for respiratory burst — defective in chronic granulomatous disease",
      "HMP shunt is main source of NADPH in RBCs and most tissues",
      "NADPH required for fatty acid synthesis (palmitate) and cholesterol synthesis",
      "vs NADH — do not confuse; NADH donates to Complex I, NADPH to biosynthetic/reductive pathways",
    ],
    distinguishFrom: [
      "NADH — reduced NAD⁺ for electron transport chain; product of glycolysis and TCA cycle",
      "NADP⁺ — oxidized form accepting hydride to become NADPH",
      "FADH₂ — flavin cofactor entering ETC at Complex II",
      "Glutathione (GSH) — tripeptide antioxidant regenerated by NADPH-dependent glutathione reductase",
    ],
    pediatrics:
      "G6PD deficiency presents in neonates/children with jaundice and hemolysis after oxidant exposure; screen in infants with unexplained hyperbilirubinemia in at-risk populations.",
  },
  {
    id: "mycolic-acid",
    name: "Mycolic Acid",
    etymology: "Greek mykes = fungus + Latin acidus = sour",
    aliases: [
      "mycolic acid",
      "mycolic acids",
      "alpha mycolic acid",
      "α-mycolic acid",
      "mycobacterial mycolic acid",
      "mycolic acid cell wall",
    ],
    definition:
      "Long-chain α-branched β-hydroxy fatty acids that form the waxy outer envelope of mycobacteria and related acid-fast organisms — confer acid-fast staining, slow growth, and resistance to many antibiotics; target of isoniazid.",
    pathway: [
      "Synthesized by fatty acid synthase II (FAS-II) in mycobacterial cytoplasm — distinct from mammalian FAS-I",
      "KasA/KasB β-ketoacyl-ACP synthases elongate acyl chains to very long mycolic acids",
      "Enoyl-ACP reductase (InhA) — rate-limiting step inhibited by isoniazid (after activation by catalase-peroxidase KatG)",
      "Mycolic acids covalently linked to arabinogalactan-peptidoglycan → impermeable cell wall",
      "Cord factor (trehalose dimycolate) — surface glycolipid with mycolate residues; virulence factor",
    ],
    boardsPearls: [
      "Mycolic acid = acid-fastness (Ziehl-Neelsen red rods) and poor Gram stain penetration",
      "Isoniazid inhibits mycolic acid synthesis via InhA after KatG activation — resistance from katG or inhA mutations",
      "Mycobacterium tuberculosis, M. leprae, Nocardia — acid-fast organisms with mycolic acids",
      "vs peptidoglycan — all bacteria; mycolic acid layer is additional waxy envelope in mycobacteria",
      "Ethambutol disrupts arabinogalactan (wall assembly), not mycolic acid synthesis directly",
      "Rifampin inhibits RNA polymerase — different TB drug target",
    ],
    distinguishFrom: [
      "Peptidoglycan — universal bacterial cell wall; vancomycin/β-lactam targets",
      "Lipoteichoic acid — Gram-positive cell envelope component, not mycobacterial",
      "Cord factor — trehalose dimycolate virulence glycolipid; contains mycolate but is not free mycolic acid",
      "Fatty acid β-oxidation — mammalian energy metabolism, not mycobacterial wall synthesis",
      "Mycophenolic acid — immunosuppressant drug, unrelated to mycobacterial wall",
    ],
    pediatrics:
      "Neonatal TB and disseminated mycobacterial disease require multi-drug therapy including isoniazid; BCG vaccination does not prevent all TB but protects against severe miliary/meningeal disease in infants.",
  },
  {
    id: "tetrahydrobiopterin",
    name: "Tetrahydrobiopterin",
    etymology: "Greek tetra = four + hydro = water + biopterin = bicyclic pterin compound",
    aliases: [
      "tetrahydrobiopterin",
      "tetrahydrobiopterins",
      "bh4",
      "bh₄",
      "thb",
      "sapropterin",
      "6r-l-erythro-5,6,7,8-tetrahydrobiopterin",
    ],
    definition:
      "Reduced pteridine cofactor essential for aromatic amino acid hydroxylases (phenylalanine, tyrosine, tryptophan hydroxylases) and nitric oxide synthase — links phenylalanine catabolism to monoamine and NO biosynthesis.",
    pathway: [
      "De novo synthesis from GTP: GTP cyclohydrolase I (GCH1) → 6-pyruvoyltetrahydropterin synthase (PTPS) → sepiapterin reductase (SR) → BH₄",
      "Regeneration: aromatic hydroxylase reactions oxidize BH₄ to qBH₂ → dihydropteridine reductase (DHPR) or dihydrofolate reductase (DHFR) → BH₄",
      "Cofactor for PAH (Phe → Tyr), TH (Tyr → L-DOPA), TPH (Trp → 5-HTP), and NOS (Arg → NO)",
      "BH₄ deficiency → hyperphenylalaninemia plus ↓ dopamine/serotonin (dystonia, seizures) — distinguish from isolated PAH deficiency",
      "Sapropterin (synthetic BH₄) treats responsive PKU variants and some BH₄ synthesis defects",
    ],
    boardsPearls: [
      "BH₄ = cofactor for PAH, TH, TPH, and NOS — high-yield link between PKU pathway and catecholamine/serotonin synthesis",
      "PAH deficiency → PKU with hyperphenylalaninemia only; BH₄ pathway defect → PKU-like plus neurotransmitter deficiency (dystonia, seizures)",
      "GTPCH deficiency (Segawa disease) — autosomal dominant, diurnal fluctuating dystonia, L-DOPA responsive",
      "DHPR deficiency — PKU screen positive; check pterins and neurotransmitter metabolites",
      "BH₄ is regenerated after hydroxylation — DHPR defect blocks recycling",
    ],
    distinguishFrom: [
      "Phenylalanine hydroxylase — enzyme using BH₄; PAH mutation causes classic PKU without primary neurotransmitter deficit",
      "Tetrahydrofolate (THF) — one-carbon carrier for nucleotide synthesis, not aromatic hydroxylase cofactor",
      "Biopterin — oxidized pterin precursor; BH₄ is the active reduced form",
      "Tyrosine — amino acid product of PAH reaction, not the cofactor",
    ],
    pediatrics:
      "Neonatal hyperphenylalaninemia on screening may reflect PAH or BH₄ defects — pterin studies and neurotransmitter metabolites distinguish; untreated BH₄ deficiency causes progressive dystonia, seizures, and developmental regression beyond diet alone.",
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
