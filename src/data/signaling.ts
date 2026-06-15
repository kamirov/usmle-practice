export type SignalingType =
  | "Peptide hormone"
  | "Cytokine"
  | "Growth factor"
  | "Neurotransmitter"
  | "Second messenger"
  | "Signaling pathway"
  | "Gasotransmitter"
  | "Hormone"
  | "Metabolite"
  | "Vitamin";

export interface SignalingEntry {
  id: string;
  name: string;
  etymology: string;
  aliases: string[];
  type: SignalingType;
  source?: string;
  receptor?: string;
  function: string;
  mnemonic?: string;
  clinicalRelevance: string[];
  boardsPearls: string[];
  distinguishFrom?: string[];
  pediatrics?: string;
}

export const SIGNALING_MOLECULES: SignalingEntry[] = [
  {
    id: "bnp",
    name: "Brain natriuretic peptide (BNP)",
    etymology: "brain = discovery tissue + natrium = sodium + ouretikos = urine-promoting + peptide = small protein",
    aliases: [
      "brain natriuretic peptide",
      "b-type natriuretic peptide",
      "b type natriuretic peptide",
      "bnp",
      "nt-probnp",
      "nt probnp",
    ],
    type: "Peptide hormone",
    source: "Ventricular cardiomyocytes (released with myocardial stretch)",
    receptor: "Natriuretic peptide receptors (guanylyl cyclase–linked)",
    function:
      "Counter-regulatory hormone to RAAS: promotes natriuresis, diuresis, and vasodilation; reduces preload and afterload.",
    clinicalRelevance: [
      "↑ in heart failure (ventricular volume/pressure overload)",
      "Used to distinguish cardiac vs pulmonary dyspnea",
      "Guanylyl cyclase activation → ↑ cGMP",
    ],
    boardsPearls: [
      "Stretched ventricle releases BNP — not synthesized in the brain despite the name",
      "HF vignette: dyspnea + ↑ BNP/NT-proBNP + pulmonary edema",
      "ANP (atria) vs BNP (ventricles) — both natriuretic peptides",
    ],
    distinguishFrom: [
      "ANP — atrial stretch, not ventricular",
      "Aldosterone — retains Na⁺/water; BNP promotes natriuresis",
      "ADH — water retention; opposite effect on volume",
    ],
    pediatrics:
      "Congenital heart disease with volume overload can elevate BNP; interpret against age-specific norms when available.",
  },
  {
    id: "anp",
    name: "Atrial natriuretic peptide (ANP)",
    etymology: "atrium = heart chamber + natrium = sodium + ouretikos = urine-promoting + peptide = small protein",
    aliases: [
      "atrial natriuretic peptide",
      "anp",
      "atrial natriuretic factor",
      "anf",
    ],
    type: "Peptide hormone",
    source: "Atrial cardiomyocytes (released with atrial stretch/volume overload)",
    receptor: "Natriuretic peptide receptor A (NPR-A; guanylyl cyclase–linked)",
    function:
      "Counter-regulatory to RAAS and ADH: promotes natriuresis, diuresis, and vasodilation; lowers preload and inhibits renin and aldosterone secretion.",
    clinicalRelevance: [
      "↑ with hypervolemia, heart failure, and atrial stretch",
      "Guanylyl cyclase activation → ↑ cGMP → natriuresis",
      "Part of the natriuretic peptide system alongside BNP",
    ],
    boardsPearls: [
      "ANP from atria (stretch) vs BNP from ventricles (stretch)",
      "ANP → ↑ cGMP → natriuresis; opposes RAAS (↓ renin, ↓ aldosterone)",
      "Increased atrial pressure (e.g. mitral regurgitation, HF) → ↑ ANP",
    ],
    distinguishFrom: [
      "BNP — ventricular stretch; more commonly measured in HF workup",
      "Aldosterone — retains Na⁺/water; ANP promotes natriuresis",
      "ADH — water retention; ANP promotes diuresis",
    ],
    pediatrics:
      "Congenital heart disease with atrial volume overload can elevate ANP; neonatal fluid shifts may transiently affect natriuretic peptide levels.",
  },
  {
    id: "vitamin-d",
    name: "Vitamin D (25-hydroxycholecalciferol)",
    etymology: "vitamin = vital amine historical term + chole = bile + calciferol = calcium-carrying sterol",
    aliases: [
      "vitamin d",
      "vitamin d3",
      "cholecalciferol",
      "25-hydroxyvitamin d",
      "25-hydroxycholecalciferol",
      "25 oh vitamin d",
      "25 oh cholecalciferol",
      "calcidiol",
    ],
    type: "Vitamin",
    source:
      "Skin (UV → cholecalciferol/D3) and diet; hepatic 25-hydroxylation yields 25-OH vitamin D (storage form)",
    receptor: "Converted to active 1,25-(OH)₂D → binds intracellular vitamin D receptor (VDR)",
    function:
      "Prohormone for calcitriol: maintains Ca²⁺/phosphate homeostasis via intestinal absorption and bone mineralization after renal 1α-hydroxylation.",
    clinicalRelevance: [
      "Deficiency → rickets (children) / osteomalacia (adults), hypocalcemia, secondary hyperparathyroidism",
      "25-OH vitamin D is the standard lab measurement of vitamin D status",
      "Malabsorption, low sun exposure, CKD, and anticonvulsants increase deficiency risk",
    ],
    boardsPearls: [
      "Vitamin D pathway: D3 (skin/diet) → 25-OH (liver, storage) → 1,25-(OH)₂D (kidney, active)",
      "Measure 25-OH vitamin D for deficiency — not 1,25-(OH)₂D (unless CKD/granulomatous disease)",
      "Deficiency vignette: bone pain, leg bowing, ↑ ALP, low Ca²⁺/phosphate, ↑ PTH",
    ],
    distinguishFrom: [
      "1,25-dihydroxyvitamin D (calcitriol) — active hormone; measured in CKD and granulomatous disease",
      "PTH — raises serum Ca²⁺; vitamin D is upstream nutritional/hormonal partner",
    ],
    pediatrics:
      "Breastfed infants without supplementation at high risk for rickets; vitamin D 400 IU/day recommended; leg bowing and widened growth plates on X-ray.",
  },
  {
    id: "pth",
    name: "Parathyroid Hormone (PTH)",
    etymology: "Greek para = beside + thyreos = shield (thyroid) + hormon = excite/set in motion",
    aliases: [
      "pth",
      "parathyroid hormone",
      "parathyroid hormones",
      "parathormone",
      "parathyrin",
    ],
    type: "Peptide hormone",
    source: "Chief cells of the parathyroid glands (usually four glands on posterior thyroid)",
    receptor:
      "PTH1 receptor (Gs-coupled) on osteoblasts and renal tubular cells → ↑ cAMP; PTH-related peptide (PTHrP) uses same receptor family",
    function:
      "Raises serum calcium and lowers serum phosphate: stimulates osteoblast RANKL → osteoclast-mediated bone resorption; increases distal tubule calcium reabsorption and proximal phosphate excretion; stimulates renal 1α-hydroxylase → ↑ calcitriol and intestinal calcium absorption.",
    clinicalRelevance: [
      "Primary hyperparathyroidism — ↑ PTH + ↑ calcium (adenoma most common)",
      "Secondary hyperparathyroidism — ↑ PTH + ↓ calcium (vitamin D deficiency, CKD)",
      "Tertiary hyperparathyroidism — autonomous ↑ PTH after long secondary state (ESRD)",
      "Hypoparathyroidism — ↓ PTH + ↓ calcium + ↑ phosphate (post-thyroidectomy, DiGeorge)",
      "PTHrP from malignancy — ↑ calcium with suppressed PTH (humoral hypercalcemia of malignancy)",
    ],
    boardsPearls: [
      "↑ Ca + ↑ PTH → primary hyperparathyroidism (stones, bones, groans, psychiatric overtones moans)",
      "↓ Ca + ↑ PTH → secondary hyperparathyroidism (vitamin D deficiency, CKD)",
      "↓ Ca + ↓ PTH → hypoparathyroidism (tetany, Chvostek/Trousseau signs)",
      "↑ Ca + ↓ PTH → PTHrP or osteolytic malignancy — not primary hyperparathyroidism",
      "PTH ↑ bone resorption indirectly via osteoblast RANKL, not direct osteoclast receptor",
      "Magnesium deficiency can impair PTH secretion and cause functional hypoparathyroidism",
    ],
    distinguishFrom: [
      "Calcitonin — from thyroid C cells; lowers calcium; MTC tumor marker",
      "Calcitriol (1,25-dihydroxyvitamin D) — downstream effector increasing gut calcium absorption",
      "PTHrP — paraneoplastic peptide causing hypercalcemia with low PTH",
      "FGF23 — phosphatonin lowering phosphate; opposes vitamin D axis (not primary calcium hormone)",
    ],
    pediatrics:
      "Neonatal hypocalcemia with 22q11.2 deletion (DiGeorge) reflects hypoplastic parathyroids and ↓ PTH. Rickets drives secondary ↑ PTH from vitamin D deficiency. Familial hypocalciuric hypercalcemia mimics hyperparathyroidism with inappropriately normal/high PTH but benign course.",
  },
  {
    id: "vitamin-k",
    name: "Vitamin K",
    etymology: "vitamin = vital amine historical term + K = Koagulation German spelling",
    aliases: [
      "vitamin k",
      "vitamin k1",
      "vitamin k2",
      "phylloquinone",
      "phytonadione",
      "menaquinone",
    ],
    type: "Vitamin",
    source:
      "K1 (phylloquinone) from leafy greens; K2 (menaquinone) from gut bacteria; stored poorly — requires regular intake",
    receptor:
      "Cofactor for γ-glutamyl carboxylase in hepatocyte ER — enables γ-carboxylation of glutamate residues on clotting factors",
    function:
      "Essential cofactor for hepatic synthesis of active vitamin K–dependent clotting factors (II, VII, IX, X) and anticoagulant proteins C and S.",
    clinicalRelevance: [
      "Deficiency → impaired γ-carboxylation → bleeding with ↑ PT (extrinsic pathway affected first)",
      "Neonatal hemorrhagic disease prevented by vitamin K injection at birth",
      "Warfarin inhibits vitamin K epoxide reductase → functional deficiency of factors II, VII, IX, X",
      "Broad-spectrum antibiotics can cause deficiency by killing gut K2-producing bacteria",
    ],
    boardsPearls: [
      "Vitamin K–dependent factors: 2, 7, 9, 10 and proteins C & S — warfarin mnemonic",
      "Warfarin inhibits vitamin K epoxide reductase — not direct factor destruction",
      "Neonates lack gut flora and breast milk is low in K — prophylactic IM vitamin K at birth",
      "Give vitamin K (phytonadione) to reverse warfarin in serious bleeding",
    ],
    distinguishFrom: [
      "Vitamin C — collagen synthesis, scurvy; not coagulation",
      "Calcium — cofactor in coagulation cascade on phospholipid surfaces, not γ-carboxylation",
      "Heparin — accelerates antithrombin; does not affect vitamin K synthesis",
    ],
    pediatrics:
      "Vitamin K deficiency bleeding (VKDB) in newborns — give IM vitamin K at birth; classic VKDB days 2–7, late VKDB weeks 2–12 in exclusively breastfed infants without prophylaxis.",
  },
  {
    id: "bile-acid",
    name: "Bile Acid",
    etymology: "Latin bilis = bile + acid = sour/proton-donating substance",
    aliases: [
      "bile acid",
      "bile acids",
      "bile salt",
      "bile salts",
      "cholic acid",
      "chenodeoxycholic acid",
      "taurocholate",
      "glycocholate",
    ],
    type: "Metabolite",
    source:
      "Hepatocytes synthesize primary bile acids from cholesterol; conjugated bile salts are secreted into bile and stored/concentrated in gallbladder",
    receptor:
      "Micellar detergent action in intestinal lumen; FXR/TGR5 signaling regulates bile acid and lipid metabolism",
    function:
      "Amphipathic cholesterol-derived molecules that emulsify dietary lipids, form micelles for fat and fat-soluble vitamin absorption, and undergo enterohepatic recirculation with terminal ileal reabsorption.",
    clinicalRelevance: [
      "Ileal disease or resection → bile acid malabsorption, watery diarrhea, fat malabsorption, and gallstone risk",
      "Bile acid sequestrants bind bile acids in gut → ↓ LDL but can worsen hypertriglyceridemia",
      "Cholestasis ↓ bile delivery to intestine → fat-soluble vitamin deficiency and steatorrhea",
      "Bile acids solubilize cholesterol; imbalance promotes cholesterol gallstones",
    ],
    boardsPearls: [
      "Bile acids come from cholesterol — major route for cholesterol elimination",
      "Conjugation with glycine/taurine makes bile salts more water soluble",
      "Terminal ileum reabsorbs bile acids; B12 also absorbed in ileum",
      "Micelles are required for vitamins A, D, E, K absorption",
      "Cholestyramine binds bile acids and interrupts enterohepatic recirculation",
    ],
    distinguishFrom: [
      "Bilirubin — heme breakdown pigment excreted in bile, not lipid detergent",
      "Pancreatic lipase — enzyme that digests triglycerides after bile emulsification",
      "Cholesterol — precursor and gallstone component, not itself a bile acid",
    ],
    pediatrics:
      "Biliary atresia or neonatal cholestasis can impair bile acid delivery, causing pale stools, conjugated hyperbilirubinemia, steatorrhea, and fat-soluble vitamin deficiency.",
  },
  {
    id: "active-vitamin-d",
    name: "1,25-Dihydroxycholecalciferol (calcitriol)",
    etymology: "di- = two + hydroxy = OH group + chole = bile + calci- = calcium + -triol = three alcohol groups",
    aliases: [
      "1,25-dihydroxycholecalciferol",
      "1,25-dihydroxyvitamin d",
      "1,25 dihydroxycholecalciferol",
      "1,25 dihydroxyvitamin d",
      "1,25-(oh)2d",
      "1,25 oh vitamin d",
      "calcitriol",
      "active vitamin d",
      "active vitamin d hormone",
    ],
    type: "Hormone",
    source: "Renal proximal tubule (1α-hydroxylation of 25-OH vitamin D)",
    receptor: "Intracellular vitamin D receptor (VDR) → nuclear transcription",
    function:
      "↑ intestinal Ca²⁺ and phosphate absorption; with PTH, mobilizes bone mineral; feedback inhibits PTH secretion.",
    clinicalRelevance: [
      "Chronic kidney disease → ↓ 1α-hydroxylase → secondary hyperparathyroidism",
      "Vitamin D deficiency → rickets/osteomalacia",
      "Hypercalcemia with granulomatous disease (macrophage 1α-hydroxylase)",
    ],
    boardsPearls: [
      "PTH ↑ → renal 1α-hydroxylase → ↑ calcitriol (unless CKD)",
      "25-OH vitamin D = storage form; 1,25-(OH)₂D = active hormone",
      "Sarcoidosis/histoplasmosis: extrarenal 1α-hydroxylase → hypercalcemia",
    ],
    distinguishFrom: [
      "25-hydroxyvitamin D — storage/measurement form, not active hormone",
      "PTH — raises serum Ca²⁺; calcitriol is downstream effector",
    ],
    pediatrics:
      "Rickets from vitamin D deficiency or CKD — leg bowing, widened growth plates; calcitriol replacement in renal osteodystrophy.",
  },
  {
    id: "fgf23",
    name: "FGF23",
    etymology: "FGF = fibroblast growth factor + 23 = member of FGF family",
    aliases: [
      "fgf23",
      "fgf-23",
      "fgf 23",
      "fibroblast growth factor 23",
      "fibroblast growth factor-23",
      "phosphatonin",
      "phosphatonins",
    ],
    type: "Growth factor",
    source:
      "Osteocytes and osteoblasts in bone; secretion ↑ with dietary phosphate load, calcitriol, and certain tumors (phosphaturic mesenchymal tumors)",
    receptor:
      "FGF receptor with Klotho co-receptor on renal proximal tubule → ↓ NaPi-IIa/IIc phosphate transporters, ↓ 1α-hydroxylase (CYP27B1), ↑ 24-hydroxylase (inactivates vitamin D)",
    function:
      "Phosphatonin hormone that lowers serum phosphate by increasing renal phosphate excretion and suppressing active vitamin D synthesis — central regulator of phosphate homeostasis opposing PTH/vitamin D axis on phosphate reabsorption.",
    mnemonic:
      "FGF23 flushes phosphate out and shuts off 1α-hydroxylase",
    clinicalRelevance: [
      "Tumor-induced osteomalacia — mesenchymal tumor secretes FGF23 → hypophosphatemia, phosphaturia, low calcitriol, osteomalacia",
      "X-linked hypophosphatemic rickets (PHEX mutation) — ↑ FGF23 activity → renal phosphate wasting",
      "Autosomal dominant hypophosphatemic rickets — FGF23 gain-of-function mutations",
      "Chronic kidney disease — early ↑ then dysregulated FGF23 contributes to mineral bone disorder",
    ],
    boardsPearls: [
      "FGF23 → renal phosphate wasting + ↓ 1α-hydroxylase → hypophosphatemia and low calcitriol",
      "Tumor-induced osteomalacia: adult hypophosphatemia + bone pain — think excess FGF23",
      "Opposes PTH on phosphate (PTH also wastes phosphate) but FGF23 suppresses vitamin D activation",
      "Requires Klotho co-receptor for renal FGF23 signaling",
      "vs PTH — PTH ↑ calcitriol; FGF23 ↓ calcitriol",
      "XLH rickets — phosphate wasting with normal calcium, low phosphate, ↑ ALP",
    ],
    distinguishFrom: [
      "PTH — ↑ 1α-hydroxylase and calcitriol; also increases phosphate excretion but different hormonal axis",
      "1α-Hydroxylase (CYP27B1) — enzyme activated by PTH; inhibited by FGF23",
      "Calcitriol — active vitamin D hormone downstream of 1α-hydroxylase, not the phosphatonin itself",
      "Phosphate — mineral regulated by FGF23, not the hormone",
    ],
    pediatrics:
      "X-linked hypophosphatemic rickets presents in childhood with bowing legs, short stature, and renal phosphate wasting with inappropriately normal/low calcitriol.",
  },
  {
    id: "fibroblast-growth-factor",
    name: "Fibroblast Growth Factor",
    etymology:
      "Latin fibra = fiber + Greek blastos = germ/sprout + facere = make + factor = agent",
    aliases: [
      "fibroblast growth factor",
      "fibroblast growth factors",
      "fibroblast growth factor family",
      "fgf",
      "fgfs",
      "fgf family",
      "fibroglast growth factor",
      "fibroglast growth factors",
      "basic fibroblast growth factor",
      "fgf2",
      "fgf-2",
      "acidic fibroblast growth factor",
      "fgf1",
      "fgf-1",
      "keratinocyte growth factor",
      "fgf7",
      "fgf-7",
      "kgf",
    ],
    type: "Growth factor",
    source:
      "Fibroblasts, epithelial cells, osteoblasts, osteocytes, and many mesenchymal tissues secrete FGF ligands; embryonic signaling centers (apical ectodermal ridge, forebrain patterning centers) release morphogenic FGF gradients",
    receptor:
      "Fibroblast growth factor receptors (FGFR1–4) — receptor tyrosine kinases requiring heparan sulfate proteoglycan co-receptors for signaling",
    function:
      "Large family of mitogenic and morphogenic peptides regulating angiogenesis, wound healing, limb bud outgrowth, forebrain patterning, alveolar repair, and phosphate homeostasis (FGF23 subset); paracrine and endocrine signaling through FGFR activation and downstream MAPK/PI3K pathways.",
    clinicalRelevance: [
      "Achondroplasia — constitutive activation of FGFR3 inhibits chondrocyte proliferation → short limbs",
      "Thanatophoric dysplasia — severe FGFR3 gain-of-function skeletal dysplasia",
      "Tumor-induced osteomalacia — mesenchymal tumors secrete FGF23 → renal phosphate wasting",
      "Pulmonary fibrosis and bronchial repair — FGF signaling in epithelial/mesenchymal crosstalk",
      "Cancer — aberrant FGF/FGFR signaling promotes angiogenesis and growth in some tumors",
    ],
    boardsPearls: [
      "FGF family — binds FGFR tyrosine kinase receptors with heparan sulfate cofactor",
      "Limb development — FGF gradient from apical ectodermal ridge drives proximodistal outgrowth",
      "Achondroplasia — FGFR3 gain-of-function (most common dwarfism); thanatophoric dysplasia more severe",
      "FGF23 — phosphatonin; tumor-induced osteomalacia and XLH rickets (separate FGF23 entry)",
      "vs EGF — EGF family uses EGFR; FGF uses FGFR",
      "Forebrain development — FGF signaling from anterior neural ridge patterning centers",
    ],
    distinguishFrom: [
      "FGF23 — specific phosphatonin hormone regulating phosphate and vitamin D; subset of FGF family with endocrine function",
      "EGF — epidermal growth factor family signaling through EGFR/ErbB",
      "VEGF — vascular endothelial growth factor; angiogenesis specialist",
      "TGF-β — growth factor superfamily with distinct receptors and Smad signaling",
      "PDGF — platelet-derived growth factor for mesenchymal proliferation and wound repair",
    ],
    pediatrics:
      "Achondroplasia presents at birth with rhizomelic shortening and macrocephaly; FGFR3 testing confirms. XLH rickets from excess FGF23 activity causes childhood bowing and phosphate wasting.",
  },
  {
    id: "gaba",
    name: "Gamma-aminobutyric acid (GABA)",
    etymology: "gamma = third carbon position + amino = nitrogen group + butyric = butter acid + acid = proton donor",
    aliases: [
      "gamma-aminobutyric acid",
      "gamma aminobutyric acid",
      "gaba",
    ],
    type: "Neurotransmitter",
    source: "GABAergic interneurons (synthesized from glutamate via GAD)",
    receptor: "GABA-A (Cl⁻ channel) and GABA-B (Gi-coupled)",
    function:
      "Primary inhibitory neurotransmitter in the CNS; hyperpolarizes postsynaptic neurons via Cl⁻ influx (GABA-A).",
    clinicalRelevance: [
      "Benzodiazepines and barbiturates potentiate GABA-A",
      "↓ GABAergic tone in anxiety and epilepsy",
      "GABA cannot cross BBB — peripheral GABA supplements ineffective for CNS",
    ],
    boardsPearls: [
      "Benzo + barbiturate MOA: enhance GABA-A → ↑ Cl⁻ conductance",
      "Alcohol withdrawal: ↓ GABA / ↑ glutamate → seizures, DTs",
      "Vigabatrin inhibits GABA breakdown; tiagabine blocks GABA reuptake",
    ],
    distinguishFrom: [
      "Glutamate — primary excitatory neurotransmitter",
      "Glycine — inhibitory, especially in spinal cord",
    ],
    pediatrics:
      "Neonatal seizures may involve GABAergic immaturity; phenobarbital enhances GABA-A in neonatal epilepsy.",
  },
  {
    id: "neurotransmitter",
    name: "Neurotransmitter",
    etymology: "Greek neuron = nerve + Latin transmittere = to send across",
    aliases: [
      "neurotransmitter",
      "neurotransmitters",
      "chemical neurotransmitter",
      "chemical neurotransmitters",
      "synaptic transmitter",
      "synaptic transmitters",
    ],
    type: "Neurotransmitter",
    source:
      "Synthesized in presynaptic neurons (or imported, e.g., platelet serotonin), stored in synaptic vesicles, released by Ca²⁺-dependent exocytosis at chemical synapses; also released from some glia and peripheral endocrine-like cells",
    receptor:
      "Postsynaptic ligand-gated ion channels (ionotropic) or GPCRs (metabotropic); termination via reuptake transporters, enzymatic degradation, or diffusion",
    function:
      "Chemical messengers bridging presynaptic and postsynaptic cells to excite, inhibit, or modulate target neurons, muscle, or glands. Major classes: amino acids (glutamate, GABA, glycine), biogenic amines (dopamine, norepinephrine, serotonin, histamine), acetylcholine, peptides, and gasotransmitters (NO).",
    clinicalRelevance: [
      "SSRIs block serotonin reuptake; SNRIs block serotonin and norepinephrine reuptake",
      "MAO inhibitors and COMT inhibitors prolong catecholamine/serotonin signaling",
      "Benzodiazepines potentiate GABA-A; organophosphates inhibit AChE → excess acetylcholine",
      "Parkinson disease — dopamine deficiency in substantia nigra; L-DOPA replaces dopamine precursor",
      "Myasthenia gravis — antibodies to nicotinic ACh receptors at neuromuscular junction",
      "Serotonin syndrome — excess serotonergic signaling (hyperthermia, clonus, autonomic instability)",
    ],
    boardsPearls: [
      "Life cycle: synthesis → vesicular storage → Ca²⁺-triggered release → receptor binding → termination (reuptake or degradation)",
      "Excitatory: glutamate (CNS); inhibitory: GABA (CNS), glycine (spinal cord)",
      "Biogenic amines derived from amino acids: Trp → serotonin; Tyr → dopamine/NE/Epi; His → histamine",
      "Acetylcholine — nicotinic (ion channel) vs muscarinic (GPCR) receptors",
      "vs hormone — neurotransmitters act across synapses at short range; hormones often endocrine and systemic",
      "vs neuromodulator — neurotransmitters cause fast direct postsynaptic potentials; neuromodulators tune circuit excitability",
    ],
    distinguishFrom: [
      "Hormone — endocrine signaling, often systemic; overlap exists (epinephrine acts as both)",
      "Cytokine — immune/inflammatory signaling proteins, not primary synaptic transmitters",
      "Second messenger — intracellular signaling molecule downstream of receptors (cAMP, IP3, Ca²⁺)",
      "Neuromodulator — alters efficacy of other transmitters over broader regions and slower time course",
      "Receptor — protein that binds transmitter; not the signaling molecule itself",
    ],
    pediatrics:
      "Neonatal neurologic immaturity shifts excitatory-inhibitory balance (GABA can be depolarizing early); neurotransmitter pathway defects (e.g., BH₄ deficiency) cause seizures and dystonia in infancy.",
  },
  {
    id: "cytokine",
    name: "Cytokine",
    etymology: "Greek kytos = cell + kinein = move; cell-moving signal",
    aliases: ["cytokine", "cytokines"],
    type: "Cytokine",
    source:
      "Secreted by immune and stromal cells — macrophages, dendritic cells, T and B lymphocytes, endothelial cells, fibroblasts, mast cells",
    receptor:
      "Cytokine receptors (often JAK-STAT pathway); TNF-family receptors activate NF-κB; chemokine receptors (GPCRs) guide leukocyte migration",
    function:
      "Short-range or paracrine signaling proteins coordinating innate and adaptive immunity, inflammation, hematopoiesis, and tissue repair. Major families: interleukins (IL-), interferons (IFN-), tumor necrosis factor (TNF), and chemokines.",
    clinicalRelevance: [
      "Pro-inflammatory cytokines (IL-1, IL-6, TNF-α) drive fever, sepsis, and acute-phase response",
      "Cytokine storm / cytokine release syndrome — excessive systemic cytokines (sepsis, CAR-T therapy, COVID-19, HLH)",
      "Anti-TNF biologics (infliximab, adalimumab, etanercept) — RA, IBD, psoriasis",
      "IL-1 blockade (anakinra) — autoinflammatory syndromes; IL-6 inhibitors (tocilizumab) — cytokine storm, RA",
      "Corticosteroids broadly suppress cytokine gene transcription",
    ],
    boardsPearls: [
      "Interleukins — between leukocytes; interferons — antiviral/immunomodulatory; TNF — inflammation and cachexia; chemokines — chemotaxis",
      "Endogenous pyrogens: IL-1, IL-6, TNF-α → PGE₂ in hypothalamus → fever",
      "Th1 cytokines: IFN-γ, IL-12 (intracellular pathogens); Th2: IL-4, IL-5, IL-13 (allergy, helminths)",
      "JAK-STAT is the dominant cytokine signaling pathway — many biologics target cytokines or their receptors",
      "vs chemokine — cytokine is broader; chemokines specifically direct leukocyte trafficking (e.g., IL-8/CXCL8)",
    ],
    distinguishFrom: [
      "Hormone — typically endocrine, distant targets, classic glands (insulin, cortisol); overlap exists (e.g., IL-6 as hepatic acute-phase signal)",
      "Growth factor — PDGF, EGF, VEGF; emphasize mitogenesis/repair; categories overlap (TGF-β is both)",
      "Complement proteins — cascade opsonization/lysis, not cytokine signaling mediators",
      "JAK-STAT pathway — intracellular signaling cascade downstream of many cytokine receptors",
    ],
    pediatrics:
      "Hemophagocytic lymphohistiocytosis (HLH) — uncontrolled macrophage activation and cytokine storm in children; MIS-C post-COVID also cytokine-driven.",
  },
  {
    id: "jak-stat",
    name: "JAK-STAT Pathway",
    etymology: "JAK = Janus kinase + STAT = signal transducer and activator of transcription",
    aliases: [
      "jak-stat",
      "jak stat",
      "jakstat",
      "jak/stat",
      "jak-stat pathway",
      "jak stat pathway",
      "jak-stat signaling",
      "jak stat signaling",
      "janus kinase stat pathway",
      "janus kinase-stat pathway",
    ],
    type: "Signaling pathway",
    source:
      "Activated by cytokine and some hormone/growth factor receptors lacking intrinsic kinase activity — ligand binding induces receptor dimerization/oligomerization and brings receptor-associated JAK kinases into proximity",
    receptor:
      "Type I/II cytokine receptors and related receptors with cytoplasmic JAKs (JAK1, JAK2, JAK3, TYK2); common γ-chain cytokine receptors use JAK3",
    function:
      "Canonical cascade: ligand → receptor-JAK activation → JAK transphosphorylation → STAT recruitment and phosphorylation → STAT dimerization → nuclear translocation → transcription of cytokine-responsive genes (immune activation, proliferation, acute-phase response, hematopoiesis).",
    clinicalRelevance: [
      "Dominant downstream pathway for many interleukins, interferons, erythropoietin, prolactin, and growth hormone",
      "JAK inhibitors (tofacitinib, baricitinib, upadacitinib) — rheumatoid arthritis, psoriatic arthritis, IBD; block STAT phosphorylation",
      "Ruxolitinib (JAK1/JAK2 inhibitor) — myelofibrosis and polycythemia vera with JAK2 V617F",
      "JAK2 V617F activating mutation — polycythemia vera, essential thrombocythemia, primary myelofibrosis (MPNs)",
      "STAT3 loss-of-function — autosomal dominant hyper-IgE syndrome (Job syndrome)",
      "JAK3 deficiency — X-linked severe combined immunodeficiency (common γ-chain cytokine signaling failure)",
    ],
    boardsPearls: [
      "Steps: cytokine binds → JAK activation → STAT phosphorylation → STAT dimer → nucleus → gene transcription",
      "IL-6 → JAK → STAT3 (acute-phase proteins, fever); IL-4 → STAT6 (Th2, IgE); IFN-γ → STAT1 (Th1, macrophage activation); EPO → JAK2 → STAT5 (erythropoiesis)",
      "JAK2 V617F = classic MPN driver — think PV when polycythemia + low EPO + JAK2 mutation",
      "Hyper-IgE syndrome: STAT3 mutation → ↑ IgE, eczema, recurrent staph abscesses, retained primary teeth",
      "JAK3 on common γ-chain — IL-2/IL-4/IL-7/IL-9/IL-15/IL-21 receptors; JAK3 defect = X-linked SCID",
      "vs NF-κB — TNF receptor pathway; vs MAPK — many growth factor RTKs; vs cAMP — GPCR second messenger",
    ],
    distinguishFrom: [
      "NF-κB pathway — TNF-family receptors, IκB degradation; overlaps in inflammation but distinct kinases",
      "MAPK/ERK pathway — many receptor tyrosine kinases and growth factors; Ras-Raf-MEK-ERK cascade",
      "cAMP/PKA pathway — GPCR–adenylyl cyclase second messenger (β-adrenergic, glucagon, PTH)",
      "Smad/TGF-β pathway — serine/threonine receptor kinases phosphorylate Smad transcription factors",
      "PI3K/Akt pathway — often parallel to MAPK from RTKs; cell survival and metabolism",
    ],
    pediatrics:
      "X-linked SCID from JAK3 or common γ-chain defects abolishes multiple cytokine JAK-STAT signals. Hyper-IgE (STAT3) presents in childhood with eczema and staph abscesses. JAK inhibitors used cautiously in pediatric autoimmune disease; ruxolitinib in pediatric MPNs per specialist guidance.",
  },
  {
    id: "nf-kb",
    name: "NF-κB (Nuclear Factor Kappa B)",
    etymology: "NF = nuclear factor + Greek kappa = letter K + B = B-cell enhancer binding",
    aliases: [
      "nf-kb",
      "nf kb",
      "nfκb",
      "nf-κb",
      "nf κb",
      "nuclear factor kappa b",
      "nuclear factor kappa-b",
      "nuclear factor-kappa b",
      "nuclear factor-kappa-b",
      "nuclear factor κb",
      "rel/nfkappa b",
      "rel/nuclear factor kappa b",
    ],
    type: "Signaling pathway",
    source:
      "Activated downstream of innate PRRs (TLRs via MyD88/TRIF), pro-inflammatory cytokine receptors (TNF-R, IL-1R), CD40, some antigen receptors, and cellular stress — convergent hub for inflammatory gene transcription",
    receptor:
      "Multiple upstream pathways: TLRs → MyD88/IRAK4/TRAF6 or TRIF; TNF-R1 → TRADD/RIP/TRAF2; IL-1R → MyD88; BCR/TCR co-stimulation and CD40 in lymphocytes; IKK complex (IKKα, IKKβ, NEMO/IKKγ) phosphorylates IκB",
    function:
      "Master pro-inflammatory transcription factor. Resting NF-κB (classically p50/p65 RelA heterodimer) is sequestered in the cytoplasm bound to IκB inhibitor. Stimulus → IKK activation → IκB phosphorylation and proteasomal degradation → NF-κB translocates to nucleus → transcription of cytokines (TNF, IL-1, IL-6), chemokines, adhesion molecules (ICAM, VCAM, E-selectin), COX-2, iNOS, and survival genes.",
    clinicalRelevance: [
      "Central to endotoxic shock — LPS → TLR4 → NF-κB → cytokine storm (TNF-α, IL-1, IL-6)",
      "Drives chronic inflammation in RA, IBD, and psoriasis — upstream of many anti-TNF/IL-1/IL-6 targets",
      "Constitutive NF-κB activation in some lymphomas (e.g., MALT lymphoma with BCL10/MALT1/CARD11 mutations)",
      "Proteasome inhibitors (bortezomib) block IκB degradation step — used in multiple myeloma",
      "Aspirin (high dose) and some NSAIDs can inhibit NF-κB via IKKβ",
      "Mutations in NF-κB pathway components cause combined immunodeficiency or autoinflammation (e.g., NEMO/IKKγ, IκBα)",
    ],
    boardsPearls: [
      "Resting: NF-κB + IκB in cytoplasm → stimulus → IKK → IκB degraded → NF-κB to nucleus",
      "LPS/TLR4 and TNF-α/TNF-R1 both converge on NF-κB — links innate and inflammatory cytokine signaling",
      "MyD88 → IRAK4 → TRAF6 → TAK1 → IKK → NF-κB (shared with IL-1R; defective in MyD88/IRAK-4 deficiency)",
      "vs JAK-STAT — cytokine JAK phosphorylation of STATs; NF-κB uses IκB degradation, not STAT",
      "vs MAPK — parallel downstream of many receptors; distinct kinase cascade (Ras-Raf-MEK-ERK)",
      "Proteasome inhibition traps NF-κB in cytoplasm by preventing IκB degradation",
      "Rel/NF-κB family: p65 (RelA), c-Rel, RelB, p50, p52 — heterodimers bind κB DNA motifs",
    ],
    distinguishFrom: [
      "JAK-STAT pathway — STAT phosphorylation and dimerization; dominant for many interleukins and interferons",
      "MAPK/ERK pathway — growth factor and stress kinase cascade; overlaps upstream but different transcription factors",
      "NLRP3 inflammasome — caspase-1 and IL-1β maturation; can be activated by DAMPs downstream of but distinct from NF-κB",
      "IRF3 — type I interferon transcription factor from TRIF/TBK1 arm of TLR3/TLR4, not NF-κB",
      "AP-1 (Fos/Jun) — often co-activated with NF-κB via MAPK but separate transcription factor",
    ],
    pediatrics:
      "NEMO (IKKγ) deficiency — X-linked combined immunodeficiency with ectodermal dysplasia and susceptibility to pyogenic and mycobacterial infection. MyD88/IRAK-4 deficiency impairs TLR/IL-1R→NF-κB signaling → recurrent bacterial infections in infancy without severe viral susceptibility. Neonatal gram-negative sepsis — excessive NF-κB-driven cytokine release.",
  },
  {
    id: "insulin-like-growth-factor-1",
    name: "Insulin-like growth factor-1",
    etymology: "insulin-like = structurally homologous to insulin + growth factor = mitogenic signal + 1 = primary circulating isoform",
    aliases: [
      "insulin-like growth factor-1",
      "insulin-like growth factor 1",
      "insulin like growth factor 1",
      "insulin-like growth factor-i",
      "insulin-like growth factor i",
      "igf-1",
      "igf1",
      "igf 1",
      "somatomedin c",
      "somatomedin-c",
    ],
    type: "Growth factor",
    source:
      "Liver (major source under GH stimulation) and local autocrine/paracrine production in bone, muscle, and other tissues",
    receptor:
      "IGF-1 receptor (IGF-1R; receptor tyrosine kinase) → PI3K/Akt and MAPK pathways",
    function:
      "Primary mediator of growth hormone anabolic effects: promotes linear growth (endochondral ossification), protein synthesis, and tissue growth; circulating levels reflect integrated GH secretion over time because GH stimulates hepatic IGF-1 production.",
    clinicalRelevance: [
      "↑ IGF-1 — screening test for acromegaly (more stable than pulsatile GH)",
      "↓ IGF-1 — supports GH deficiency diagnosis (with failed GH stimulation test)",
      "Laron syndrome — GH receptor defect → low IGF-1 despite high GH",
      "IGF-1 used to monitor treatment response in acromegaly (octreotide, surgery)",
      "Graves ophthalmopathy — orbital fibroblasts express IGF-1R cross-reactivity with TSH receptor antibodies",
    ],
    boardsPearls: [
      "GH → liver IGF-1 → growth and anabolic effects",
      "Screen acromegaly with IGF-1, not random GH (GH is pulsatile)",
      "Confirm acromegaly: oral glucose fails to suppress GH; IGF-1 elevated",
      "GH deficiency: ↓ IGF-1 + failed stimulation test",
      "vs GH — measure IGF-1 for screening; GH for dynamic suppression/stimulation testing",
      "Somatomedin C = older name for IGF-1",
    ],
    distinguishFrom: [
      "Growth hormone (GH) — anterior pituitary hormone that stimulates IGF-1 production; pulsatile secretion",
      "IGF-2 — fetal growth factor; imprinting disorders (Beckwith-Wiedemann)",
      "Insulin — metabolic glucose uptake hormone; homologous structure but distinct receptor and function",
      "GHRH — hypothalamic releasing hormone stimulating GH, not IGF-1 directly",
    ],
    pediatrics:
      "Low IGF-1 with growth failure suggests GH deficiency; congenital GH resistance (Laron syndrome) shows high GH with low IGF-1; before epiphyseal closure, GH excess causes gigantism with elevated IGF-1.",
  },
  {
    id: "il-1",
    name: "Interleukin-1 (IL-1)",
    etymology: "Latin inter = between + Greek leukos = white cell + 1 = first numbered subtype",
    aliases: [
      "interleukin-1",
      "interleukin 1",
      "il-1",
      "il 1",
      "il-1α",
      "il-1β",
      "il-1 alpha",
      "il-1 beta",
    ],
    type: "Cytokine",
    source:
      "Activated macrophages, monocytes, dendritic cells, endothelial cells, and many other cell types (IL-1β is the predominant secreted form)",
    receptor:
      "IL-1 receptor type I (IL-1RI) → MyD88 → NF-κB and MAPK; naturally antagonized by IL-1 receptor antagonist (IL-1Ra)",
    function:
      "Potent pro-inflammatory cytokine and endogenous pyrogen: induces fever (hypothalamic PGE₂), activates endothelium (↑ adhesion molecules), stimulates acute-phase response, and promotes leukocyte recruitment and tissue catabolism.",
    mnemonic:
      "IL-1 = first alarm: fever + endothelium wakes up first in acute inflammation.",
    clinicalRelevance: [
      "Endogenous pyrogen with IL-6 and TNF-α → fever in infection and inflammation",
      "Central to autoinflammatory disease — unregulated IL-1 signaling (e.g., NLRP3 inflammasome → ↑ IL-1β)",
      "Anakinra (recombinant IL-1Ra) — CAPS, gout flares, RA; canakinumab (anti–IL-1β) — autoinflammatory syndromes",
      "Septic shock and SIRS — IL-1 contributes to cytokine cascade with TNF and IL-6",
      "Bone resorption in inflammatory arthritis — IL-1 stimulates osteoclast activity",
    ],
    boardsPearls: [
      "IL-1, IL-6, TNF-α — classic endogenous pyrogen triad → PGE₂ in hypothalamus → fever",
      "IL-1β released via inflammasome (NLRP3) — gout crystals, CAPS, periodic fever syndromes",
      "Anakinra = IL-1 receptor antagonist (blocks IL-1α and IL-1β)",
      "IL-1 drives acute inflammation and endothelial activation; less hepatocyte-specific than IL-6",
      "Corticosteroids ↓ IL-1 transcription among many cytokines",
    ],
    distinguishFrom: [
      "IL-6 — primarily drives hepatic acute-phase proteins (CRP, fibrinogen) via STAT3; tocilizumab target",
      "TNF-α — granuloma formation, anti-TNF indications in IBD/RA/psoriasis; overlaps in fever and inflammation",
      "IL-2 — T-cell growth factor, not primary pyrogen or acute-phase driver",
      "Prostaglandin E₂ — downstream mediator of fever, not the upstream cytokine",
    ],
    pediatrics:
      "Periodic fever syndromes (CAPS, FMF) often IL-1–driven — anakinra/canakinumab used in pediatric autoinflammatory disease. Neonatal-onset multisystem inflammatory disease (NOMID/CINCA) responds to IL-1 blockade.",
  },
  {
    id: "il-2",
    name: "Interleukin-2 (IL-2)",
    etymology: "Latin inter = between + Greek leukos = white cell + 2 = second numbered subtype",
    aliases: [
      "interleukin-2",
      "interleukin 2",
      "il-2",
      "il 2",
    ],
    type: "Cytokine",
    source: "Activated CD4⁺ T helper cells",
    receptor: "IL-2 receptor (high-affinity on activated T cells)",
    function:
      "T-cell growth factor: drives clonal expansion and survival of antigen-activated T cells; supports regulatory and effector T-cell populations.",
    mnemonic:
      "IL-2 = T cells make copies of two: activated T cell → more T cells.",
    clinicalRelevance: [
      "Aldesleukin (recombinant IL-2) for metastatic melanoma and renal cell carcinoma",
      "IL-2 signaling blockade (basiliximab) prevents transplant rejection",
      "Capillary leak syndrome with high-dose IL-2 therapy",
    ],
    boardsPearls: [
      "IL-2 = T-cell proliferation signal after antigen activation",
      "Basiliximab: anti-CD25 (IL-2 receptor α chain) for transplant induction",
      "High-dose IL-2 toxicity: capillary leak, hypotension, pulmonary edema",
    ],
    distinguishFrom: [
      "IL-1 — fever, acute inflammation; not primary T-cell growth factor",
      "IL-6 — acute-phase response, B-cell stimulation",
      "Interferon-γ — macrophage activation, TH1 response",
    ],
    pediatrics:
      "SCID from IL-2 receptor γ-chain defects (X-linked SCID); basiliximab used cautiously in pediatric transplant.",
  },
  {
    id: "il-4",
    name: "Interleukin-4 (IL-4)",
    etymology: "Latin inter = between + Greek leukos = white cell + 4 = fourth numbered subtype",
    aliases: [
      "interleukin-4",
      "interleukin 4",
      "il-4",
      "il 4",
    ],
    type: "Cytokine",
    source: "Th2 CD4⁺ T helper cells, mast cells, basophils, NKT cells",
    receptor: "IL-4 receptor (type I and type II; signals via JAK-STAT6)",
    function:
      "Key Th2 cytokine driving B-cell class switching to IgE and IgG4, promoting B-cell proliferation, and suppressing Th1 (macrophage-activating) responses.",
    mnemonic:
      "IL-4 = FOR allergy: Th2 → IgE class switch, unlike IL-5 eosinophils.",
    clinicalRelevance: [
      "Central to allergic/atopic disease — ↑ IL-4 → ↑ IgE → mast cell sensitization",
      "Helminth defense — coordinates eosinophil and IgE-mediated parasite clearance",
      "Dupilumab blocks IL-4 receptor α (shared with IL-13) — atopic dermatitis, asthma",
      "Excess Th2/IL-4 skew in atopy; Th1/IFN-γ skew needed for intracellular pathogen control",
    ],
    boardsPearls: [
      "IL-4 → class switch to IgE (allergy) and IgG4; IL-5 → eosinophils; IL-13 similar to IL-4",
      "Th1 (IFN-γ) vs Th2 (IL-4, IL-5, IL-13) — classic boards paradigm",
      "IL-4 inhibits macrophage activation — opposes IFN-γ from Th1 cells",
      "Mast cells and basophils both produce IL-4, amplifying Th2 responses",
    ],
    distinguishFrom: [
      "IL-2 — T-cell proliferation, not IgE class switching",
      "IFN-γ — Th1 cytokine; activates macrophages for intracellular killing",
      "IL-5 — eosinophil growth and activation, not primary IgE switch factor",
    ],
    pediatrics:
      "Atopic march in children — eczema, food allergy, asthma linked to Th2/IL-4 skew; early allergen sensitization drives IgE production.",
  },
  {
    id: "il-6",
    name: "Interleukin-6 (IL-6)",
    etymology: "Latin inter = between + Greek leukos = white cell + 6 = sixth numbered subtype",
    aliases: [
      "interleukin-6",
      "interleukin 6",
      "il-6",
      "il 6",
    ],
    type: "Cytokine",
    source:
      "Activated macrophages, T cells, B cells, endothelial cells, fibroblasts, and adipocytes",
    receptor:
      "IL-6 receptor (membrane-bound or soluble) + gp130 → JAK → STAT3 (classic pathway); also trans-signaling via soluble IL-6R",
    function:
      "Pro-inflammatory cytokine and endogenous pyrogen that drives the hepatic acute-phase response (↑ CRP, fibrinogen, hepcidin), supports B-cell differentiation and antibody production, and with TGF-β promotes Th17 differentiation.",
    mnemonic:
      "IL-6 = six to the liver: CRP, fibrinogen, hepcidin; acute-phase response.",
    clinicalRelevance: [
      "↑ CRP in infection/inflammation — IL-6 is the main hepatocyte stimulus for acute-phase protein synthesis",
      "Tocilizumab (anti–IL-6R) and siltuximab (anti–IL-6) — RA, cytokine release syndrome, Castleman disease",
      "Endogenous pyrogen with IL-1 and TNF-α → hypothalamic PGE₂ → fever",
      "Elevated in sepsis, cytokine storm, and MIS-C (post–COVID-19 pediatric hyperinflammation)",
      "Contributes to anemia of chronic disease via hepcidin induction",
      "STAT3 loss-of-function mutations → hyper-IgE syndrome (Job syndrome)",
    ],
    boardsPearls: [
      "IL-6 → liver → ↑ CRP and fibrinogen — link IL-6 elevation to acute-phase reactants on boards",
      "IL-1, IL-6, TNF-α — endogenous pyrogen triad",
      "TGF-β + IL-6 → Th17 (RORγt); IL-6 also opposes Treg differentiation in inflammatory settings",
      "Tocilizumab blocks IL-6 receptor — used in RA and severe cytokine release syndrome",
      "IL-6 vs IL-1 — both pyrogenic; IL-6 more specific for hepatic acute-phase response",
      "Hyper-IgE syndrome — STAT3 defect impairs IL-6/IL-10 signaling → impaired Th17 and ↑ IgE",
    ],
    distinguishFrom: [
      "IL-1 — more endothelial/leukocyte activation; anakinra target; inflammasome-driven IL-1β in autoinflammatory disease",
      "TNF-α — granuloma formation, anti-TNF biologics for IBD/psoriasis; NF-κB upstream of IL-6",
      "CRP — downstream acute-phase protein, not the cytokine itself",
      "IL-4 — Th2/IgE axis, not acute-phase or pyrogenic driver",
    ],
    pediatrics:
      "MIS-C after COVID-19 — marked IL-6 elevation treated with IVIG and sometimes tocilizumab. Hyper-IgE (Job) syndrome presents in childhood with eczema, retained primary teeth, and staph abscesses from STAT3/IL-6 pathway defects.",
  },
  {
    id: "il-5",
    name: "Interleukin-5 (IL-5)",
    etymology: "Latin inter = between + Greek leukos = white cell + 5 = fifth numbered subtype",
    aliases: [
      "interleukin-5",
      "interleukin 5",
      "il-5",
      "il 5",
      "eosinophil differentiation factor",
      "edf",
    ],
    type: "Cytokine",
    source: "Th2 CD4⁺ T helper cells, mast cells, and eosinophils",
    receptor: "IL-5 receptor α (CD125) + common β chain (CD131) → JAK-STAT",
    function:
      "Th2 cytokine that promotes eosinophil growth, differentiation, recruitment, activation, and survival; also supports B-cell differentiation and IgA production.",
    mnemonic:
      "IL-5 = fivE for Eosinophils; allergy/helminths need eosinophil help.",
    clinicalRelevance: [
      "Helminth defense — eosinophils kill antibody-coated parasites via major basic protein",
      "Allergic asthma and eosinophilic esophagitis — type 2 inflammation with IL-5-driven eosinophilia",
      "Anti–IL-5 biologics (mepolizumab, reslizumab) and anti–IL-5R (benralizumab) treat severe eosinophilic asthma",
      "Hypereosinophilic syndromes can involve excessive IL-5 signaling",
    ],
    boardsPearls: [
      "IL-5 is the eosinophil cytokine; IL-4 is IgE class switching; IL-13 is mucus/airway hyperreactivity",
      "Th2 triad: IL-4, IL-5, IL-13 — IgE, eosinophils, mucus",
      "Eosinophils contain major basic protein toxic to helminths and epithelium",
      "Asthma with eosinophilia can be treated by blocking IL-5 or IL-5 receptor",
    ],
    distinguishFrom: [
      "IL-4 — B-cell class switch to IgE and Th2 differentiation",
      "IL-13 — mucus production, airway hyperreactivity, and fibrosis",
      "GM-CSF — broader granulocyte/macrophage progenitor growth, not eosinophil-focused",
      "Eotaxin (CCL11) — eosinophil chemotaxis chemokine; IL-5 keeps eosinophils alive/activated",
    ],
    pediatrics:
      "Pediatric atopic asthma can show IL-5-driven eosinophilia; helminth infection remains high-yield for eosinophilia in children with travel or exposure history.",
  },
  {
    id: "il-7",
    name: "Interleukin-7 (IL-7)",
    etymology: "Latin inter = between + Greek leukos = white cell + 7 = seventh numbered subtype",
    aliases: ["interleukin-7", "interleukin 7", "il-7", "il 7"],
    type: "Cytokine",
    source: "Bone marrow and thymic stromal cells; epithelial and fibroblastic stromal cells",
    receptor: "IL-7 receptor α (CD127) + common γ chain (CD132) → JAK1/JAK3-STAT5",
    function:
      "Lymphoid survival and development cytokine: supports early T-cell development, naïve/memory T-cell homeostasis, and early B-cell development in marrow.",
    mnemonic:
      "IL-7 = heaven for lymphocytes: keeps developing T cells alive.",
    clinicalRelevance: [
      "IL7R or common γ-chain defects impair T-cell development and can cause SCID phenotypes",
      "HIV and chemotherapy lymphopenia research often tracks IL-7/T-cell recovery",
      "Common γ chain shared with IL-2, IL-4, IL-7, IL-9, IL-15, IL-21 — X-linked SCID when defective",
    ],
    boardsPearls: [
      "IL-7 is the T-cell development/homeostasis cytokine",
      "Common γ-chain failure → absent T/NK cells with dysfunctional B-cell immunity",
      "Contrast IL-2: activated mature T-cell proliferation; IL-7: lymphoid development/survival",
    ],
    distinguishFrom: [
      "IL-2 — clonal expansion after antigen activation",
      "IL-15 — NK-cell and memory CD8 T-cell survival",
      "IL-3 — early myeloid hematopoietic progenitor growth",
    ],
    pediatrics:
      "Infants with SCID present with severe recurrent infections, chronic diarrhea, thrush, and failure to thrive; IL7R/common γ-chain defects are classic cytokine signaling causes.",
  },
  {
    id: "il-8",
    name: "Interleukin-8 (IL-8 / CXCL8)",
    etymology: "Latin inter = between + Greek leukos = white cell + 8 = eighth numbered subtype; CXCL8 = C-X-C chemokine ligand 8",
    aliases: [
      "interleukin-8",
      "interleukin 8",
      "il-8",
      "il 8",
      "cxcl8",
      "c-x-c motif chemokine ligand 8",
      "neutrophil chemotactic factor",
    ],
    type: "Cytokine",
    source:
      "Macrophages, epithelial cells, endothelial cells, airway smooth muscle cells, and other TLR-activated cells",
    receptor: "CXCR1 and CXCR2 chemokine receptors (GPCRs) on neutrophils",
    function:
      "Chemokine that recruits and activates neutrophils at sites of acute inflammation; promotes neutrophil chemotaxis, degranulation, respiratory burst, and angiogenesis.",
    mnemonic:
      "IL-8 = innate 'ate' call: neutrophils eat bacteria after following CXCL8.",
    clinicalRelevance: [
      "Acute bacterial infection and abscesses — neutrophil recruitment via IL-8/CXCL8, C5a, LTB₄, and fMLP",
      "ARDS, COPD, and severe pneumonia involve IL-8-driven neutrophilic inflammation",
      "Leukocyte adhesion defects impair neutrophil tissue entry downstream of chemotactic signals",
    ],
    boardsPearls: [
      "IL-8/CXCL8 is the classic neutrophil chemotaxis cytokine",
      "Major neutrophil chemoattractants: IL-8, C5a, LTB₄, fMLP",
      "IL-17 induces epithelial/stromal IL-8 and G-CSF → neutrophil recruitment",
      "IL-8 is a chemokine (CXCL8), but still historically named an interleukin",
    ],
    distinguishFrom: [
      "IL-17 — upstream Th17 cytokine that induces IL-8/G-CSF production",
      "C5a — complement-derived chemoattractant and anaphylatoxin",
      "IL-5 — eosinophil growth/activation, not neutrophil chemotaxis",
    ],
    pediatrics:
      "Neonatal neutrophil chemotaxis is relatively immature, contributing to infection susceptibility; leukocyte adhesion deficiency presents in infancy with delayed umbilical cord separation and absent pus despite chemotactic cytokines.",
  },
  {
    id: "tnf",
    name: "Tumor necrosis factor (TNF)",
    etymology: "Latin tumere = swell + Greek nekros = dead + factor = causal agent",
    aliases: [
      "tumor necrosis factor",
      "tumor necrosis factor-alpha",
      "tumor necrosis factor alpha",
      "tnf",
      "tnf-alpha",
      "tnf alpha",
      "tnf-α",
      "tnf α",
      "tnfα",
    ],
    type: "Cytokine",
    source:
      "Activated macrophages, monocytes, dendritic cells, T cells, NK cells, and mast cells",
    receptor:
      "TNF receptors (TNFR1/p55, TNFR2/p75) → NF-κB, JNK, and caspase-mediated apoptosis pathways",
    function:
      "Potent pro-inflammatory cytokine: activates endothelium (↑ adhesion molecules), recruits leukocytes, induces fever, supports granuloma formation, and can cause cachexia and septic shock at high systemic levels.",
    clinicalRelevance: [
      "Endogenous pyrogen with IL-1 and IL-6 → hypothalamic PGE₂ → fever",
      "Central driver of RA, psoriasis, and IBD pathogenesis — target of anti-TNF biologics (infliximab, adalimumab, etanercept)",
      "Anti-drug antibodies (ADAs) to biologics can neutralize anti-TNF drugs → secondary loss of response",
      "Septic shock — excessive TNF and other cytokines → vasodilation, capillary leak, DIC",
      "Latent TB reactivation with anti-TNF therapy — screen before starting",
      "↑ adipose TNF-α contributes to insulin resistance in obesity",
    ],
    boardsPearls: [
      "TNF-α → NF-κB activation → ↑ IL-1, IL-6, adhesion molecules, and other pro-inflammatory mediators",
      "Anti-TNF drugs: infliximab/adalimumab (mAbs), etanercept (decoy receptor) — treat before TB, avoid live vaccines",
      "Endogenous pyrogens: IL-1, IL-6, TNF-α — classic fever triad",
      "Named for tumor necrosis in mice; in humans drives inflammation more than direct tumor killing",
      "TNF vs IL-1 — both acute-phase drivers; TNF more central to granuloma formation and anti-TNF autoimmune indications",
    ],
    distinguishFrom: [
      "IL-1 — also pyrogenic and pro-inflammatory; anakinra blocks IL-1 receptor",
      "IL-6 — acute-phase response, hepatocyte stimulation; tocilizumab blocks IL-6 receptor",
      "LT-α (lymphotoxin) — related TNF superfamily member; less emphasized on boards",
      "Corticosteroids — broadly ↓ cytokine transcription including TNF, but not receptor-targeted",
    ],
    pediatrics:
      "Same pyrogen pathway in children; anti-TNF agents used in pediatric IBD and JIA with mandatory latent TB screening and infection monitoring.",
  },
  {
    id: "lymphotoxin-beta",
    name: "Lymphotoxin Beta (LTβ)",
    etymology: "Latin lympha = clear fluid + Greek toxikon = poison + beta = second letter",
    aliases: [
      "lymphotoxin beta",
      "lymphotoxin b",
      "lymphotoxin β",
      "ltb",
      "ltβ",
      "lt beta",
      "lymphotoxin-beta",
      "lymphotoxin b beta",
      "lymphotoxin b(beta)",
      "lymphotoxin b (beta)",
      "lymphotoxin beta receptor ligand",
    ],
    type: "Cytokine",
    source:
      "Activated lymphocytes, especially T cells, B cells, and lymphoid tissue inducer cells",
    receptor:
      "LTβ receptor (LTβR) on stromal, endothelial, and myeloid cells → noncanonical NF-κB signaling",
    function:
      "TNF-superfamily cytokine that helps organize secondary lymphoid tissue architecture, high endothelial venules, follicular dendritic cell networks, and lymphoid chemokine expression.",
    clinicalRelevance: [
      "Required for normal lymph node, Peyer patch, and splenic white pulp organization",
      "LTβR signaling supports ectopic lymphoid follicles in chronic inflammation and autoimmunity",
      "Links lymphocytes to stromal cells during lymphoid organ development",
    ],
    boardsPearls: [
      "LTβ is membrane-bound and commonly pairs with LTα as LTα1β2 to signal through LTβR",
      "LTβR → noncanonical NF-κB (NIK/RelB/p52) → lymphoid organogenesis and chemokines",
      "Different from TNF-α: both are TNF-family cytokines, but LTβ is more about lymphoid architecture than fever/septic shock",
      "Peyer patches and organized follicles require lymphotoxin signaling — useful immunology association",
    ],
    distinguishFrom: [
      "TNF-α — soluble/systemic inflammation, fever, cachexia, septic shock",
      "LT-α — related lymphotoxin subunit that can signal through TNF receptors",
      "IL-7 — lymphocyte survival/development cytokine, not lymphoid stromal organization signal",
    ],
    pediatrics:
      "Defective lymphoid organogenesis in development would impair organized mucosal and nodal immune responses; Step 1 usually tests conceptually through Peyer patches/secondary lymphoid tissue.",
  },
  {
    id: "pdgf",
    name: "Platelet-derived growth factor (PDGF)",
    etymology: "platelet = small plate cell fragment + derived = drawn from + growth factor = growth signal",
    aliases: [
      "platelet-derived growth factor",
      "platelet derived growth factor",
      "pdgf",
    ],
    type: "Growth factor",
    source: "Platelets, macrophages, endothelial cells, smooth muscle cells",
    receptor: "Receptor tyrosine kinase (PDGFR-α/β)",
    function:
      "Chemotactic and mitogenic for fibroblasts and smooth muscle cells; key mediator of wound healing and vascular remodeling.",
    clinicalRelevance: [
      "Atherosclerosis: PDGF drives smooth muscle migration and intimal proliferation",
      "Glioblastoma can overexpress PDGF/PDGFR",
      "Imatinib inhibits PDGFR among other tyrosine kinases",
    ],
    boardsPearls: [
      "PDGF released at injury → SMC proliferation in vessel wall",
      "Atherosclerotic plaque: macrophages and SMCs secrete PDGF",
      "Imatinib: BCR-ABL, c-KIT, and PDGFR tyrosine kinase inhibitor",
    ],
    distinguishFrom: [
      "EGF — epithelial proliferation",
      "VEGF — angiogenesis, endothelial growth",
      "TGF-β — fibrosis and extracellular matrix deposition",
    ],
    pediatrics:
      "Wound healing same PDGF pathway; PDGF-receptor mutations rare in juvenile myelomonocytic leukemia context.",
  },
  {
    id: "acetylcholine",
    name: "Acetylcholine (ACh)",
    etymology: "acetyl = CH3CO group + Greek chole = bile + -ine = substance suffix",
    aliases: [
      "acetylcholine",
      "ach",
    ],
    type: "Neurotransmitter",
    source:
      "Cholinergic neurons (CNS), preganglionic sympathetic/parasympathetic fibers, postganglionic parasympathetic fibers, neuromuscular junction (motor end plate)",
    receptor: "Nicotinic (Nm at NMJ; Nn in autonomic ganglia) and muscarinic (M1–M5)",
    function:
      "Primary neurotransmitter of the parasympathetic nervous system; mediates neuromuscular transmission, autonomic ganglia signaling, and cognitive/arousal effects in the CNS.",
    clinicalRelevance: [
      "Myasthenia gravis — autoantibodies to nicotinic ACh receptors at NMJ",
      "Organophosphate poisoning — AChE inhibition → ↑ synaptic ACh → SLUDGE + nicotinic effects",
      "Atropine blocks muscarinic ACh receptors; neuromuscular blockers act at nicotinic NMJ receptors",
    ],
    boardsPearls: [
      "Nicotinic = ion channel (depolarization); muscarinic = GPCR (M3 → IP3/DAG, M2 → ↓ cAMP)",
      "ACh at NMJ: released from motor neuron → binds Nm receptor → muscle contraction",
      "Botulinum toxin ↓ ACh release; organophosphates ↑ ACh (inhibit AChE)",
    ],
    distinguishFrom: [
      "Dopamine, norepinephrine — catecholamine neurotransmitters, not cholinergic",
      "Acetylcholinesterase — enzyme that degrades ACh, not the transmitter itself",
    ],
    pediatrics:
      "Neonatal myasthenia gravis from transplacental anti-AChR antibodies — hypotonia, poor feeding, respiratory weakness.",
  },
  {
    id: "catecholamines",
    name: "Catecholamines",
    etymology: "catechol = benzene ring with two adjacent hydroxyl groups + amine = nitrogen-containing group",
    aliases: [
      "catecholamines",
      "catecholamine",
      "catecholaminergic",
      "catacholamines",
      "catacholamine",
    ],
    type: "Neurotransmitter",
    source:
      "Synthesized from tyrosine in sympathetic neurons, adrenal medullary chromaffin cells, and specific CNS nuclei (locus ceruleus, ventral tegmental area, substantia nigra)",
    receptor:
      "Adrenergic receptors (α₁ Gq, α₂ Gi, β₁/β₂/β₃ Gs) and dopamine receptors (D₁ Gs, D₂ Gi); dopamine, norepinephrine, and epinephrine bind adrenergic receptors with different affinities",
    function:
      "Biogenic amine class mediating sympathetic fight-or-flight responses, vascular tone, cardiac output, bronchodilation, and CNS reward/motor pathways. Sequential biosynthesis: dopamine → norepinephrine → epinephrine.",
    clinicalRelevance: [
      "Pheochromocytoma — excess catecholamine secretion → paroxysmal hypertension, tachycardia, headache, sweating",
      "Parkinson disease — dopamine deficiency in substantia nigra; L-DOPA replaces precursor",
      "Cocaine and tricyclic antidepressants — block catecholamine reuptake → sympathomimetic toxicity",
      "MAO inhibitors + tyramine-rich foods → hypertensive crisis from excess norepinephrine",
      "Beta-blockers, alpha-blockers, and sympathomimetics modulate catecholamine receptor signaling",
    ],
    boardsPearls: [
      "Biosynthesis: tyrosine → L-DOPA (tyrosine hydroxylase, rate-limiting) → dopamine → NE (DBH) → Epi (PNMT in adrenal medulla)",
      "Dopamine at low renal dose (D₁) dilates; higher doses lose selectivity → α/β effects",
      "Epinephrine: low dose β₂ bronchodilation; high dose α₁ vasoconstriction",
      "MAO degrades cytosolic catecholamines; COMT degrades extracellular/metabolites → metanephrines (pheo workup)",
      "Chromaffin cells and postganglionic sympathetic neurons release catecholamines — adrenal medulla is endocrine",
    ],
    distinguishFrom: [
      "Serotonin — tryptophan-derived biogenic amine; mood, GI motility, platelets; not catechol structure",
      "Histamine — histidine-derived; allergy and gastric acid; H1/H2 receptors not adrenergic",
      "Acetylcholine — cholinergic transmitter at preganglionic autonomic synapses and parasympathetic targets",
      "Norepinephrine — single member of catecholamine class, not the whole group",
      "Tyrosine — amino acid precursor; not the active signaling molecule",
    ],
    pediatrics:
      "Neuroblastoma may secrete catecholamines — urine VMA/HVA elevated. Neonatal stress triggers catecholamine surge; pheochromocytoma rare in children but screen in MEN2 kindreds.",
  },
  {
    id: "norepinephrine",
    name: "Norepinephrine",
    etymology: "nor- = chemical prefix (demethylated amine form) + Greek epi = upon + nephros = kidney + -ine = substance suffix",
    aliases: [
      "norepinephrine",
      "noradrenaline",
      "nor epinephrine",
      "nor-epinephrine",
      "ne",
      "na",
    ],
    type: "Neurotransmitter",
    source:
      "Postganglionic sympathetic neurons (primary peripheral source), adrenal medulla chromaffin cells (minor fraction vs epinephrine), locus coeruleus and other brainstem noradrenergic nuclei in CNS",
    receptor:
      "α1 (Gq — vasoconstriction), α2 (Gi — presynaptic inhibition, ↓ sympathetic outflow), β1 (Gs — ↑ heart rate and contractility); minimal β2 activity compared with epinephrine",
    function:
      "Catecholamine neurotransmitter and hormone that increases vascular tone, maintains blood pressure, supports cardiac output, and modulates arousal, attention, and mood in the CNS. Synthesized from tyrosine → L-DOPA → dopamine → norepinephrine (dopamine β-hydroxylase).",
    clinicalRelevance: [
      "First-line vasopressor in septic shock (with fluids and source control)",
      "SNRIs (venlafaxine, duloxetine) inhibit norepinephrine and serotonin reuptake",
      "Tricyclic antidepressants block NE reuptake (and other receptors)",
      "Pheochromocytoma may secrete norepinephrine and/or epinephrine → episodic hypertension",
      "MAO and COMT degrade catecholamines — MAO inhibitors ↑ NE signaling",
      "Clonidine and α2 agonists ↓ central sympathetic outflow",
    ],
    boardsPearls: [
      "Synthesis: tyrosine → L-DOPA → dopamine → norepinephrine → (PNMT in adrenal medulla) epinephrine",
      "α1 → vasoconstriction; β1 → ↑ HR/contractility; α2 presynaptic → ↓ NE release",
      "Septic shock: norepinephrine first-line vasopressor after fluid resuscitation",
      "Unopposed α if β-blocker given before α-blocker in pheochromocytoma → hypertensive crisis",
      "vs epinephrine — NE has stronger α vasoconstriction; Epi has more β2 bronchodilation",
      "vs angiotensin II — NE is catecholamine sympathetic signal; Ang II is RAAS peptide",
    ],
    distinguishFrom: [
      "Epinephrine — adrenal medulla predominant catecholamine; stronger β2 effects",
      "Dopamine — immediate precursor of norepinephrine; also used as vasopressor at low/mid/high doses",
      "Angiotensin II — RAAS peptide vasoconstrictor, not catecholamine",
      "Isoproterenol — nonselective β-agonist without α activity",
      "Phenylephrine — pure α1 agonist without endogenous NE reuptake effects",
    ],
    pediatrics:
      "Pediatric septic shock: fluids first; epinephrine favored in cold shock with low cardiac output, norepinephrine in warm vasodilatory shock per PALS guidance.",
  },
  {
    id: "histamine",
    name: "Histamine",
    etymology: "Greek histos = tissue + amine = nitrogen group",
    aliases: ["histamine"],
    type: "Neurotransmitter",
    source:
      "Mast cells, basophils (immune degranulation); histaminergic neurons in hypothalamus; enterochromaffin-like cells in gastric mucosa",
    receptor: "H1 (Gq — vasodilation, bronchoconstriction, pruritus); H2 (Gs — ↑ gastric acid); H3 (CNS presynaptic inhibition)",
    function:
      "Biogenic amine mediator of type I hypersensitivity, gastric acid secretion, vascular permeability, and CNS arousal; stored in mast cell/basophil granules and released upon IgE cross-linking.",
    clinicalRelevance: [
      "Anaphylaxis and allergic rhinitis — histamine causes vasodilation, edema, bronchospasm, urticaria",
      "H1 antihistamines (diphenhydramine, cetirizine) — allergy, pruritus, motion sickness",
      "H2 blockers (famotidine, ranitidine) — peptic ulcer disease, GERD",
      "Carcinoid syndrome — flushing from histamine/serotonin release (H1/H2 blockers help flushing)",
      "Vancomycin red man syndrome — histamine release from rapid infusion (not true IgE allergy)",
    ],
    boardsPearls: [
      "Histamine from mast cell degranulation — type I hypersensitivity effector molecule",
      "H1 → itch, bronchoconstriction, vasodilation; H2 → gastric parietal cell acid secretion",
      "First-generation H1 blockers cross BBB → sedation; second-generation less sedating",
      "Epinephrine treats anaphylaxis; antihistamines are adjunct only",
    ],
    distinguishFrom: [
      "Leukotrienes — also from mast cells; slower, prolonged bronchoconstriction in asthma (late phase)",
      "Serotonin — separate biogenic amine; carcinoid, mood, platelet aggregation",
      "Prostaglandins — arachidonic acid derived; not stored in preformed granules like histamine",
    ],
    pediatrics:
      "Food-induced anaphylaxis — histamine and other mediators from mast cell degranulation; epinephrine IM is first-line in children.",
  },
  {
    id: "serotonin",
    name: "Serotonin",
    etymology: "Latin serum = whey + Greek tonos = tension; 5-hydroxytryptamine (5-HT) from tryptophan",
    aliases: [
      "serotonin",
      "seratonin",
      "5-ht",
      "5-hydroxytryptamine",
      "5 hydroxytryptamine",
      "5ht",
    ],
    type: "Neurotransmitter",
    source:
      "Raphe nuclei neurons in brainstem (CNS serotonergic pathways); enterochromaffin cells in GI mucosa; platelets uptake serotonin from plasma (platelets do not synthesize it)",
    receptor:
      "Multiple 5-HT receptor subtypes (5-HT1–5-HT7); mix of Gi, Gq, and ion-channel linked receptors — boards focus on 5-HT1 (anxiolytic/migraine), 5-HT2 (psychedelic/vascular), 5-HT3 (nausea, ion channel)",
    function:
      "Biogenic amine neurotransmitter regulating mood, sleep, appetite, thermoregulation, GI motility, and platelet aggregation; synthesized from tryptophan and terminated largely by presynaptic reuptake (SERT).",
    clinicalRelevance: [
      "SSRIs (fluoxetine, sertraline) — selective serotonin reuptake inhibition → ↑ synaptic 5-HT",
      "Serotonin syndrome — SSRI + MAOI or other serotonergic drugs → hyperthermia, clonus, agitation, autonomic instability",
      "Carcinoid syndrome — serotonin and histamine release → flushing, diarrhea, bronchospasm; urinary 5-HIAA elevated",
      "Triptans (5-HT1B/1D agonists) — acute migraine treatment",
      "Ondansetron — 5-HT3 antagonist for chemotherapy-induced nausea",
    ],
    boardsPearls: [
      "Synthesis: tryptophan → 5-HTP (tryptophan hydroxylase) → serotonin (aromatic L-amino acid decarboxylase); BH₄ cofactor like PAH",
      "Major metabolite 5-HIAA — elevated in carcinoid tumor workup",
      "Platelets store serotonin — contributes to primary hemostasis; SSRIs may ↑ bleeding risk",
      "MDMA and amphetamines increase synaptic serotonin release — serotonin syndrome risk with SSRIs",
      "vs dopamine/norepinephrine — separate catecholamine pathway from tyrosine, not tryptophan",
      "vs histamine — separate biogenic amine from histidine; both involved in carcinoid flushing",
    ],
    distinguishFrom: [
      "Tryptophan — essential amino acid precursor; not the active synaptic transmitter",
      "Dopamine — catecholamine from tyrosine; Parkinson and psychosis pathways",
      "Histamine — from histidine; allergy and gastric acid, not mood/platelet primary role",
      "Melatonin — also from tryptophan but downstream of serotonin N-acetylation; circadian hormone",
      "Serotonin syndrome — clinical toxicity state, not the molecule itself",
    ],
    pediatrics:
      "SSRIs used cautiously in pediatric depression with monitoring for activation and suicidality; carcinoid tumors are rare in children but 5-HIAA remains the classic screening metabolite.",
  },
  {
    id: "substance-p",
    name: "Substance P",
    etymology:
      "substance = material + P = powder (original isolation from brain acetone powder fraction)",
    aliases: [
      "substance p",
      "substance ps",
      "substance-p",
      "sp",
      "neurokinin a",
      "nk-a",
      "tachykinin substance p",
      "substance p peptide",
    ],
    type: "Neurotransmitter",
    source:
      "Sensory C-fiber neurons, dorsal horn interneurons, enteric nervous system, brainstem; stored in synaptic vesicles and released with nociceptive and inflammatory stimuli",
    receptor: "Neurokinin-1 (NK1) receptor — GPCR coupled to Gq/PLC",
    function:
      "Tachykinin neuropeptide mediating pain transmission, neurogenic inflammation, and emesis — promotes vasodilation, plasma extravasation, and spinal cord nociceptive signaling when released with CGRP from sensory nerve endings.",
    clinicalRelevance: [
      "Central sensitization in chronic pain and fibromyalgia (↑ substance P in CSF in some studies)",
      "Neurogenic inflammation after tissue injury or nerve activation",
      "NK1 receptor antagonists (aprepitant) prevent chemotherapy-induced nausea and vomiting",
      "Capsaicin (TRPV1 agonist) causes substance P depletion from sensory neurons with repeated application",
      "Carcinoid and other neuroendocrine tumors may secrete tachykinins along with serotonin",
    ],
    boardsPearls: [
      "Substance P — tachykinin neuropeptide; binds NK1 receptor",
      "Released from sensory C-fibers with pain and inflammation",
      "NK1 antagonists (aprepitant) — antiemetic for chemotherapy-induced nausea",
      "Capsaicin depletes substance P from peripheral nociceptors",
      "vs bradykinin — kinin from kallikrein; substance P is neuropeptide from neurons",
      "vs histamine — mast cell mediator; substance P from nociceptive neurons",
    ],
    distinguishFrom: [
      "Bradykinin — plasma kinin causing pain and angioedema; degraded by ACE",
      "Histamine — H1-mediated allergy and gastric acid; not primary spinal pain transmitter",
      "Serotonin — indoleamine from tryptophan; mood/GI/platelet roles",
      "CGRP — co-released neuropeptide causing vasodilation; distinct receptor",
      "Neurokinin B — related tachykinin with preferential NK3 receptor activity",
    ],
    pediatrics:
      "NK1 antagonists used for pediatric chemotherapy-induced nausea at weight-based dosing; substance P–mediated neurogenic inflammation follows same nociceptor biology in children.",
  },
  {
    id: "nitric-oxide",
    name: "Nitric oxide (NO)",
    etymology: "nitric = nitrogen-derived + oxide = oxygen compound",
    aliases: [
      "nitric oxide",
      "endothelium-derived relaxing factor",
      "edrf",
    ],
    type: "Gasotransmitter",
    source:
      "Endothelial cells (eNOS), macrophages (iNOS), neurons (nNOS); synthesized from L-arginine by nitric oxide synthase (NOS)",
    receptor: "Soluble guanylyl cyclase (intracellular; not a membrane receptor)",
    function:
      "Diffuses into vascular smooth muscle → activates guanylyl cyclase → ↑ cGMP → smooth muscle relaxation and vasodilation.",
    clinicalRelevance: [
      "Nitrates (nitroglycerin) → donate NO → vasodilation in angina",
      "Sildenafil ↑ cGMP by inhibiting PDE-5 — contraindicated with nitrates (severe hypotension)",
      "Pulmonary hypertension treated with NO inhalation or PDE-5 inhibitors",
    ],
    boardsPearls: [
      "NO → guanylyl cyclase → cGMP → vasodilation (opposite of endothelin pathway)",
      "Nitrates + PDE-5 inhibitors = absolute contraindication",
      "NOS requires O₂, NADPH, and arginine — inhibited by asymmetric dimethylarginine (ADMA)",
    ],
    distinguishFrom: [
      "Nitrous oxide (N₂O) — inhaled anesthetic, not the endogenous vasodilator NO",
      "Nitroglycerin — prodrug that releases NO; not the same as endogenous NO signaling molecule",
    ],
    pediatrics:
      "Inhaled NO for persistent pulmonary hypertension of the newborn (PPHN) — selective pulmonary vasodilation.",
  },
  {
    id: "cgmp",
    name: "Cyclic GMP (cGMP)",
    etymology: "cyclic = ring-shaped + guanosine = guanine nucleoside + monophosphate = one phosphate",
    aliases: [
      "cgmp",
      "cyclic gmp",
      "cyclic guanosine monophosphate",
      "3',5'-cyclic gmp",
    ],
    type: "Second messenger",
    source:
      "Synthesized from GTP by guanylyl cyclase (soluble, activated by NO; or natriuretic peptide receptor–linked membrane form)",
    receptor: "Protein kinase G (PKG), cGMP-gated ion channels, phosphodiesterases",
    function:
      "Second messenger mediating vasodilation, natriuresis, and smooth muscle relaxation; degraded by phosphodiesterases (PDE-5 in vascular smooth muscle).",
    clinicalRelevance: [
      "↑ cGMP → vascular smooth muscle relaxation (NO and natriuretic peptide pathways)",
      "PDE-5 inhibitors (sildenafil) block cGMP degradation → prolonged vasodilation",
      "Natriuretic peptides (ANP/BNP) activate membrane guanylyl cyclase → ↑ cGMP → natriuresis",
    ],
    boardsPearls: [
      "NO → ↑ cGMP; PDE-5 breaks down cGMP — sildenafil inhibits PDE-5",
      "cGMP vs cAMP: cAMP from adenylyl cyclase (β-receptors, glucagon); cGMP from guanylyl cyclase (NO, ANP/BNP)",
      "Blue-tinged vision with sildenafil — PDE-6 (retina) also degraded when PDE-5 inhibited",
    ],
    distinguishFrom: [
      "cAMP — adenylyl cyclase second messenger (β-adrenergic, glucagon, PTH)",
      "GTP — substrate for cGMP synthesis, not the active second messenger",
    ],
    pediatrics:
      "Same NO–cGMP pathway in PPHN; sildenafil approved for pediatric PAH (weight-based dosing).",
  },
  {
    id: "prostaglandin",
    name: "Prostaglandins",
    etymology: "Greek prostates = standing before/prostate + gland = secreting organ",
    aliases: [
      "prostaglandin",
      "prostaglandins",
      "pge2",
      "prostaglandin e2",
      "prostaglandin e1",
      "pge1",
      "prostaglandin i2",
      "pgi2",
      "prostacyclin",
    ],
    type: "Hormone",
    source:
      "Synthesized from arachidonic acid via COX pathway in most tissues; PGE₂ widespread, PGI₂ (prostacyclin) from endothelium, PGF₂α from uterus",
    receptor: "GPCRs (EP, IP, FP subtypes) — tissue-specific effects",
    function:
      "Local autacoids mediating inflammation, fever, pain sensitization, gastric mucosal protection, renal afferent vasodilation, uterine contraction, and ductus arteriosus patency (PGE).",
    clinicalRelevance: [
      "NSAIDs ↓ prostaglandins → analgesia/antipyresis but also GI ulcers and ↓ renal perfusion",
      "PGE₁ (alprostadil) keeps ductus arteriosus open in ductal-dependent congenital heart disease",
      "PGE₂ mediates fever via hypothalamic thermoregulation",
      "PGI₂ (prostacyclin) opposes thromboxane — vasodilation and inhibits platelet aggregation",
    ],
    boardsPearls: [
      "COX converts arachidonic acid → PGH₂ → tissue-specific prostaglandins",
      "PGE₂: gastric mucosal protection, renal afferent dilation — lost with NSAIDs",
      "Prostaglandin E1 opens ductus in cyanotic CHD; indomethacin closes PDA in premies",
      "PGI₂ vs thromboxane A₂ — opposing effects on platelets and vessels",
    ],
    distinguishFrom: [
      "Leukotrienes — lipoxygenase pathway, bronchoconstriction in asthma",
      "Thromboxane A₂ — platelet aggregation and vasoconstriction, not general mucosal protection",
      "Histamine — separate mediator in allergy, not arachidonic acid derived",
    ],
    pediatrics:
      "Prostaglandin E1 infusion critical for ductal-dependent lesions (e.g., hypoplastic left heart, interrupted aortic arch) until surgery; monitor for apnea and fever.",
  },
  {
    id: "leukotriene",
    name: "Leukotrienes",
    etymology: "Greek leukos = white cell + tri- = three + -ene = double-bond hydrocarbon",
    aliases: [
      "leukotriene",
      "leukotrienes",
      "ltb4",
      "ltb₄",
      "leukotriene b4",
      "leukotriene b₄",
      "ltc4",
      "ltd4",
      "lte4",
      "cysteinyl leukotrienes",
      "slow-reacting substance of anaphylaxis",
      "srs-a",
    ],
    type: "Hormone",
    source:
      "Synthesized from arachidonic acid via 5-lipoxygenase pathway in mast cells, eosinophils, basophils, and macrophages; not stored preformed (synthesized on demand after PLA₂ activation)",
    receptor:
      "LTB₄ — BLT1/BLT2 (chemotaxis); LTC₄/LTD₄/LTE₄ (cysteinyl leukotrienes) — CysLT1/CysLT2 (bronchoconstriction, vascular permeability)",
    function:
      "Eicosanoid mediators of inflammation: LTB₄ is a potent neutrophil chemoattractant; cysteinyl leukotrienes (LTC₄, LTD₄, LTE₄) cause bronchoconstriction, increased vascular permeability, and mucus secretion.",
    clinicalRelevance: [
      "Asthma late-phase response — cysteinyl leukotrienes cause prolonged bronchoconstriction after allergen exposure",
      "Aspirin-exacerbated respiratory disease — shunting to leukotriene pathway when COX blocked",
      "Montelukast and zafirlukast — CysLT1 receptor antagonists for asthma and allergic rhinitis",
      "Zileuton — 5-lipoxygenase inhibitor ↓ leukotriene synthesis",
      "Anaphylaxis — leukotrienes contribute alongside histamine to bronchospasm and edema",
    ],
    boardsPearls: [
      "Lipoxygenase pathway: arachidonic acid → 5-LOX → leukotrienes (not COX/prostaglandins)",
      "Cysteinyl leukotrienes (LTC₄/D₄/E₄) — slow-reacting substance of anaphylaxis (SRS-A); potent bronchoconstrictors",
      "LTB₄ — major neutrophil chemoattractant linking to chemotaxis",
      "Leukotriene modifiers (montelukast) for mild asthma or aspirin-exacerbated respiratory disease",
      "Corticosteroids ↓ phospholipase A₂ upstream — ↓ leukotriene production",
    ],
    distinguishFrom: [
      "Histamine — preformed mast cell mediator; faster onset, H1/H2 receptors",
      "Prostaglandins — COX pathway from arachidonic acid; PGE₂ causes fever and gastric protection",
      "Thromboxane A₂ — COX pathway in platelets; aggregation and vasoconstriction",
      "Chemokines (IL-8) — peptide chemoattractants, not lipoxygenase eicosanoids",
    ],
    pediatrics:
      "Montelukast approved for pediatric asthma and allergic rhinitis; same CysLT1 mechanism as in adults.",
  },
  {
    id: "thromboxane-a2",
    name: "Thromboxane A₂",
    etymology: "Greek thrombos = clot + oxane = oxygen ring + A2 = second A-series compound",
    aliases: [
      "thromboxane a2",
      "thromboxane a₂",
      "thromboxane",
      "thromboxane 2",
      "txa2",
      "txa₂",
    ],
    type: "Hormone",
    source:
      "Synthesized in platelets from PGH₂ by thromboxane synthase; short half-life (seconds)",
    receptor: "TP receptor (GPCR) on platelets and vascular smooth muscle",
    function:
      "Potent platelet activator and vasoconstrictor; promotes aggregation, granule release, and local thrombus formation.",
    clinicalRelevance: [
      "Aspirin irreversibly inhibits platelet COX-1 → ↓ thromboxane A₂ → antiplatelet effect",
      "Balance with prostacyclin (PGI₂) from endothelium — aspirin affects platelet TXA₂ more than endothelial PGI₂ at low doses",
      "↑ thromboxane activity contributes to arterial thrombosis in ACS",
    ],
    boardsPearls: [
      "Thromboxane A₂: platelet aggregation + vasoconstriction — key target of aspirin",
      "Aspirin ↓ TXA₂ synthesis in platelets (no nucleus → effect lasts platelet lifespan)",
      "NSAIDs reversibly inhibit COX — platelet function recovers as drug clears",
      "PGI₂ (prostacyclin) from endothelium opposes TXA₂ — vasodilation, anti-aggregation",
    ],
    distinguishFrom: [
      "Prostacyclin (PGI₂) — endothelial, vasodilates and inhibits platelets",
      "ADP — separate platelet activation pathway (P2Y12 inhibitors: clopidogrel)",
      "Thrombin — coagulation cascade protease, not eicosanoid",
    ],
    pediatrics:
      "Same aspirin/COX-1 mechanism in children; Reye syndrome risk with aspirin in viral illness — use alternatives for fever in pediatrics.",
  },
  {
    id: "oxytocin",
    name: "Oxytocin",
    etymology: "Greek oxys = swift + tokos = birth",
    aliases: ["oxytocin", "pitocin"],
    type: "Peptide hormone",
    source:
      "Synthesized in hypothalamic paraventricular and supraoptic nuclei; stored and released from posterior pituitary (neurohypophysis)",
    receptor: "Oxytocin receptor (OTR; Gq-coupled GPCR) on myometrium and mammary myoepithelial cells",
    function:
      "Stimulates uterine smooth muscle contraction during labor; triggers milk ejection (let-down reflex) by contracting myoepithelial cells around alveoli.",
    clinicalRelevance: [
      "Exogenous oxytocin (Pitocin) for labor induction and augmentation",
      "Milk ejection reflex — suckling afferents → posterior pituitary oxytocin release",
      "Uterine atony postpartum — oxytocin first-line to reduce hemorrhage",
      "May modulate social bonding and uterine involution (secondary boards context)",
    ],
    boardsPearls: [
      "Posterior pituitary hormones: oxytocin + ADH (vasopressin) — both made in hypothalamus",
      "Oxytocin → uterine contraction + milk ejection; ADH → water reabsorption",
      "Pitocin augments labor; monitor for uterine tachysystole and fetal distress",
      "Suckling triggers oxytocin — prolactin drives milk production (anterior pituitary)",
    ],
    distinguishFrom: [
      "ADH (vasopressin) — water retention via V2 receptors; diabetes insipidus when deficient",
      "Prolactin — anterior pituitary; milk synthesis, not ejection",
      "Prostaglandin F₂α — also uterotonic; used for cervical ripening and abortion",
    ],
    pediatrics:
      "Neonatal breastfeeding establishes suckling reflex → maternal oxytocin release; preterm infants may need lactation support but same hormonal axis.",
  },
  {
    id: "vasopressin",
    name: "Vasopressin",
    etymology: "Latin vas = vessel + pressus = pressed + -in = protein suffix",
    aliases: [
      "vasopressin",
      "antidiuretic hormone",
      "adh",
      "arginine vasopressin",
      "avp",
    ],
    type: "Peptide hormone",
    source:
      "Synthesized in hypothalamic supraoptic and paraventricular nuclei; stored and released from posterior pituitary",
    receptor:
      "V2 receptors (collecting duct; Gs → cAMP → aquaporin-2 insertion); V1 receptors (vascular smooth muscle vasoconstriction)",
    function:
      "Promotes free water reabsorption in renal collecting duct via aquaporin-2; at high levels causes vasoconstriction through V1 receptors.",
    clinicalRelevance: [
      "Central diabetes insipidus — deficient ADH → dilute polyuria and hypernatremia",
      "SIADH — inappropriate ADH → euvolemic hyponatremia with concentrated urine",
      "Desmopressin (DDAVP) — V2-selective analog for central DI and bleeding disorders",
      "Vasopressin infusion used in vasodilatory/septic shock (V1 effect)",
    ],
    boardsPearls: [
      "Posterior pituitary hormones: ADH + oxytocin — both made in hypothalamus",
      "DI: high serum osm + low urine osm; SIADH: low serum osm + inappropriately concentrated urine",
      "Desmopressin treats central DI; nephrogenic DI does not respond (collecting duct defect)",
      "Ethanol inhibits ADH — beer potomania/hyponatremia context",
    ],
    distinguishFrom: [
      "Oxytocin — uterine contraction and milk ejection, not primary water retention hormone",
      "Aldosterone — Na⁺ retention in distal nephron; ADH reabsorbs free water",
      "ANP/BNP — promote natriuresis; oppose volume retention",
    ],
    pediatrics:
      "Central DI in children may follow head trauma or craniopharyngioma; desmopressin is main therapy. SIADH occurs with CNS infection, pulmonary disease, and postoperative states.",
  },
  {
    id: "gnrh",
    name: "GnRH",
    etymology: "GnRH = gonadotropin-releasing hormone",
    aliases: [
      "gnrh",
      "gonadotropin-releasing hormone",
      "gonadotropin releasing hormone",
      "gonadotropin-releasing hormones",
      "lhrh",
      "luteinizing hormone-releasing hormone",
      "luteinizing hormone releasing hormone",
      "gonadorelin",
    ],
    type: "Peptide hormone",
    source:
      "Hypothalamic arcuate and preoptic neurons; released in pulsatile fashion into hypophyseal portal circulation → anterior pituitary",
    receptor:
      "GnRH receptor (GnRHR; Gq-coupled GPCR) on anterior pituitary gonadotrophs",
    function:
      "Stimulates synthesis and pulsatile release of LH and FSH from anterior pituitary → drives gonadal steroidogenesis, gametogenesis, and pubertal development; pulsatile pattern is required for normal gonadotropin secretion.",
    clinicalRelevance: [
      "Hypogonadotropic hypogonadism — deficient GnRH pulsatility (Kallmann syndrome, functional hypothalamic amenorrhea)",
      "Hyperprolactinemia — ↑ prolactin inhibits GnRH pulsatility → ↓ LH/FSH → hypogonadism",
      "Menopause — loss of ovarian estrogen removes negative feedback → ↑ FSH/LH despite intact GnRH",
      "GnRH agonists (leuprolide, goserelin) — continuous exposure → receptor downregulation → ↓ sex steroids (prostate cancer, endometriosis, precocious puberty)",
      "GnRH antagonists (ganirelix, degarelix) — immediate ↓ LH/FSH (IVF, prostate cancer)",
      "Central precocious puberty — premature activation of GnRH pulse generator; treat with GnRH agonists",
    ],
    boardsPearls: [
      "GnRH is pulsatile — continuous GnRH (agonist therapy) paradoxically suppresses gonadotropins",
      "Hypothalamus → GnRH → anterior pituitary LH/FSH → gonadal estrogen/testosterone",
      "Kallmann syndrome — ↓ GnRH neuron migration + anosmia + delayed puberty",
      "Prolactinoma inhibits GnRH → galactorrhea + amenorrhea/infertility",
      "vs CRH/TRH/GHRH — other hypothalamic releasing hormones with distinct pituitary targets",
      "Pulsatile GnRH pump — treats hypogonadotropic hypogonadism; continuous agonist suppresses axis",
    ],
    distinguishFrom: [
      "LH / FSH — anterior pituitary gonadotropins downstream of GnRH, not hypothalamic releasing hormone",
      "GnRH agonist drugs — pharmacologic continuous stimulation causing downregulation, not physiologic pulses",
      "hCG — mimics LH action at ovary/testis; does not act on pituitary GnRH receptor",
      "Prolactin — inhibits GnRH release; does not stimulate gonadotropins",
    ],
    pediatrics:
      "Central precocious puberty — GnRH agonists suppress premature pubertal progression; Kallmann presents with delayed puberty and anosmia from failed GnRH neuron migration.",
  },
  {
    id: "estrogen",
    name: "Estrogen",
    etymology: "Greek oistros = frenzy/estrus + -gen = producing",
    aliases: [
      "estrogen",
      "estrogens",
      "estradiol",
      "estradiol-17β",
      "e2",
      "17β-estradiol",
      "estrone",
      "e1",
      "estriol",
      "e3",
      "ethinyl estradiol",
    ],
    type: "Hormone",
    source:
      "Ovarian granulosa cells (estradiol from theca-androgen aromatization); placenta in pregnancy; adipose aromatization; small amounts from testes/adrenals",
    receptor:
      "Intracellular/nuclear estrogen receptors (ERα, ERβ) — ligand-activated transcription factors; membrane ER signaling also exists",
    function:
      "Promotes female secondary sex characteristics, endometrial proliferation, breast ductal development, epiphyseal closure, and negative feedback on FSH/LH; maintains bone density and cardiovascular effects.",
    clinicalRelevance: [
      "Estrogen deficiency — menopause, Turner syndrome, primary ovarian insufficiency → hot flashes, osteoporosis, ↑ CV risk",
      "Estrogen excess or unopposed estrogen — endometrial hyperplasia/cancer risk",
      "Tamoxifen — SERM with antagonist effect in breast, partial agonist in endometrium",
      "Aromatase inhibitors (anastrozole) — block peripheral/ tumor estrogen synthesis in ER+ breast cancer",
      "OCPs — ethinyl estradiol + progestin for contraception and cycle regulation",
    ],
    boardsPearls: [
      "Estradiol (E2) — most potent endogenous estrogen; drives endometrial proliferation in follicular phase",
      "Estrone (E1) dominant after menopause; estriol (E3) from placenta in pregnancy",
      "Unopposed estrogen ↑ endometrial cancer risk — progesterone/progestin opposes proliferation",
      "Turner: streak gonads → ↓ estrogen → webbed neck, short stature, primary amenorrhea",
      "Aromatase converts androgens → estrogens — inhibitors used in postmenopausal breast cancer",
      "Follicular phase: estrogen ↑ → LH surge → ovulation; luteal phase dominated by progesterone",
    ],
    distinguishFrom: [
      "Progesterone — stabilizes endometrium, secretory phase; opposes estrogen-driven proliferation",
      "Prolactin — milk synthesis; high prolactin suppresses GnRH → ↓ estrogen",
      "Testosterone — androgen; aromatized to estrogen peripherally",
    ],
    pediatrics:
      "Precocious puberty — early estrogen exposure → breast development, accelerated bone age; McCune-Albright or ovarian tumor workup.",
  },
  {
    id: "progesterone",
    name: "Progesterone",
    etymology: "pro- = supporting + gestare = carry pregnancy + -one = ketone hormone suffix",
    aliases: [
      "progesterone",
      "progestin",
      "progestins",
      "progestogen",
      "progestogens",
      "progestational hormone",
      "corpus luteum hormone",
      "medroxyprogesterone",
      "norethindrone",
      "levonorgestrel",
    ],
    type: "Hormone",
    source:
      "Corpus luteum after ovulation (LH-stimulated granulosa/theca-lutein cells); placenta (syncytiotrophoblast) in pregnancy; small adrenal contribution",
    receptor:
      "Progesterone receptor (PR) — intracellular/nuclear ligand-activated transcription factor; progestins are synthetic PR agonists",
    function:
      "Transforms endometrium from proliferative to secretory phase; stabilizes endometrium for implantation; maintains early pregnancy; raises basal body temperature; supports breast alveolar development; provides negative feedback on GnRH/LH; relaxes smooth muscle (GI, ureter) in pregnancy.",
    clinicalRelevance: [
      "Luteal phase — progesterone from corpus luteum; withdrawal if no implantation → menstruation",
      "Corpus luteum of pregnancy — progesterone maintains uterine quiescence until placental takeover (~8–10 weeks)",
      "Unopposed estrogen without progesterone — endometrial hyperplasia and cancer risk",
      "OCPs and progestin-only pills/IUDs — progestins prevent ovulation and/or thicken cervical mucus",
      "Mifepristone — progesterone receptor antagonist used for medical abortion",
      "Luteal phase defect / low progesterone — infertility and recurrent pregnancy loss (controversial supplementation)",
      "17-hydroxyprogesterone — elevated in 21-hydroxylase CAH (steroid precursor, not therapeutic progesterone)",
    ],
    boardsPearls: [
      "Estrogen proliferates endometrium; progesterone stabilizes/secretory — unopposed estrogen is carcinogenic",
      "Progesterone withdrawal bleeding — drop in progesterone triggers menses",
      "↑ basal body temperature in luteal phase — progesterone thermogenic effect",
      "HRT with uterus: estrogen + progestin; estrogen alone only if hysterectomy",
      "Mifepristone blocks PR → decidual breakdown + prostaglandin sensitization (with misoprostol)",
      "vs aldosterone — mineralocorticoid; progesterone has weak anti-mineralocorticoid activity at high doses",
    ],
    distinguishFrom: [
      "Estrogen — proliferative phase hormone; drives endometrial growth; aromatized from androgens",
      "hCG — maintains corpus luteum early in pregnancy; not the same as progesterone itself",
      "Prolactin — lactation hormone; high levels suppress GnRH, not a progestational steroid",
      "17-hydroxyprogesterone — CAH screening analyte; precursor steroid, not functional luteal progesterone",
    ],
    pediatrics:
      "Adolescent anovulatory cycles may lack robust luteal progesterone → irregular menses; congenital absence of progesterone effect is not a typical isolated pediatric presentation — CAH presents with androgen excess from steroid pathway blocks.",
  },
  {
    id: "androgen",
    name: "Androgens",
    etymology: "Greek aner/andros = male + -gen = producing",
    aliases: [
      "androgen",
      "androgens",
      "testosterone",
      "dihydrotestosterone",
      "dht",
      "androstenedione",
      "dhea",
      "dehydroepiandrosterone",
    ],
    type: "Hormone",
    source:
      "Testicular Leydig cells (testosterone, stimulated by LH); ovarian theca cells and adrenal zona reticularis (androstenedione, DHEA); peripheral 5α-reductase converts testosterone → DHT in prostate, skin, external genitalia",
    receptor:
      "Androgen receptor (AR) — intracellular/nuclear ligand-activated transcription factor; DHT binds AR with higher affinity than testosterone",
    function:
      "Promote male internal (Wolffian duct) and external genital development, secondary sex characteristics, libido, muscle mass, erythropoiesis, sebum production, and prostate growth; in females, converted to estrogen via aromatase and contribute to pubic/axillary hair.",
    clinicalRelevance: [
      "Congenital adrenal hyperplasia (21-hydroxylase deficiency) — shunting to androgen pathway → virilization",
      "PCOS — ↑ ovarian and adrenal androgens → hirsutism, acne, anovulation",
      "5α-reductase deficiency — ↓ DHT → ambiguous external genitalia in 46,XY males; Wolffian structures normal (testosterone intact)",
      "Androgen insensitivity syndrome (46,XY, defective AR) — female external phenotype, no uterus, blind vagina",
      "Finasteride — 5α-reductase inhibitor ↓ DHT for BPH and androgenetic alopecia",
      "Spironolactone, flutamide, bicalutamide — antiandrogen effects",
      "GnRH agonists or orchiectomy ↓ androgens in prostate cancer",
    ],
    boardsPearls: [
      "Testosterone from Leydig cells (LH-driven); DHT via 5α-reductase — required for prostate and external male genitalia",
      "5α-reductase deficiency: internal male genitalia present, ambiguous external genitalia at birth; virilizes at puberty",
      "Androgen insensitivity: 46,XY female phenotype, ↑ testosterone and LH, absent uterus",
      "CAH 21-hydroxylase — ↑ 17-OHP and androgens → virilized female infant",
      "Aromatase converts androgens → estrogens; finasteride blocks testosterone → DHT conversion",
      "BPH is androgen (DHT) dependent — 5α-reductase inhibitors shrink prostate",
    ],
    distinguishFrom: [
      "Estrogen — feminizing steroids; aromatized from androgens in ovary and adipose",
      "Progesterone — progestational hormone; not primarily androgenic",
      "Anabolic steroids — synthetic androgen analogs with ↑ anabolic:androgenic ratio abuse",
      "Corticosteroids — glucocorticoid/mineralocorticoid activity, not gonadal androgens",
    ],
    pediatrics:
      "CAH virilized female newborn — ↑ androgens from 21-hydroxylase deficiency; 5α-reductase deficiency presents with ambiguous genitalia in 46,XY infants who virilize at puberty.",
  },
  {
    id: "calcitonin",
    name: "Calcitonin",
    etymology: "Latin calx = calcium + Greek tonos = tension/regulation + -in = peptide",
    aliases: ["calcitonin", "thyrocalcitonin"],
    type: "Peptide hormone",
    source: "Parafollicular C cells of thyroid",
    receptor: "Calcitonin receptor (Gs-coupled) on osteoclasts and kidney",
    function:
      "Lowers serum calcium by inhibiting osteoclast-mediated bone resorption; minor physiologic role in adult calcium homeostasis.",
    clinicalRelevance: [
      "Tumor marker for medullary thyroid carcinoma",
      "Elevated in MEN2-associated C-cell tumors",
      "Salmon calcitonin can treat hypercalcemia/Paget disease but is less common now",
    ],
    boardsPearls: [
      "Medullary thyroid carcinoma from parafollicular C cells secretes calcitonin",
      "MEN2A/2B: RET mutation + medullary thyroid carcinoma",
      "PTH and vitamin D dominate calcium regulation; calcitonin is a board tumor marker",
    ],
    distinguishFrom: [
      "PTH — raises calcium; from parathyroid chief cells",
      "Calcitriol — active vitamin D; increases intestinal calcium absorption",
      "Thyroglobulin — follicular thyroid marker, not C-cell marker",
    ],
  },
  {
    id: "bradykinin",
    name: "Bradykinin",
    etymology: "Greek bradys = slow + kinein = to move",
    aliases: ["bradykinin", "bradykin", "kinin"],
    type: "Peptide hormone",
    source: "Kallikrein cleavage of high-molecular-weight kininogen",
    receptor: "B2 receptor (constitutive) and B1 receptor (inflammation)",
    function:
      "Vasoactive peptide causing vasodilation, increased vascular permeability, pain, and bronchoconstriction.",
    clinicalRelevance: [
      "ACE degrades bradykinin; ACE inhibitors increase bradykinin → cough/angioedema",
      "C1 esterase inhibitor deficiency → excess bradykinin → hereditary angioedema",
      "Contributes to pain and swelling in inflammation",
    ],
    boardsPearls: [
      "ACE = kininase II; ACE inhibitors raise bradykinin",
      "Hereditary angioedema is bradykinin-mediated, not histamine-mediated",
      "No urticaria in classic bradykinin angioedema",
    ],
    distinguishFrom: [
      "Histamine — mast cell mediator with urticaria/pruritus",
      "Angiotensin II — vasoconstrictor; ACE generates it while degrading bradykinin",
    ],
  },
  {
    id: "il-3",
    name: "Interleukin-3 (IL-3)",
    etymology: "interleukin = between leukocytes + 3 = cytokine number",
    aliases: ["il-3", "il 3", "interleukin-3", "interleukin 3"],
    type: "Cytokine",
    source: "Activated T cells and mast cells",
    receptor: "IL-3 receptor (JAK-STAT)",
    function:
      "Stimulates proliferation and differentiation of early hematopoietic progenitors, especially myeloid lineages.",
    mnemonic:
      "IL-3 = three marrow lines: broad early hematopoietic progenitor support.",
    clinicalRelevance: [
      "Links T-cell activation to marrow myelopoiesis",
      "Less clinically tested than IL-5/G-CSF but high-yield as hematopoietic growth signal",
    ],
    boardsPearls: [
      "IL-3 supports bone marrow progenitor growth",
      "Contrast with GM-CSF (granulocyte/macrophage) and IL-5 (eosinophils)",
    ],
  },
  {
    id: "il-10",
    name: "Interleukin-10 (IL-10)",
    etymology: "interleukin = between leukocytes + 10 = cytokine number",
    aliases: ["il-10", "il 10", "interleukin-10", "interleukin 10"],
    type: "Cytokine",
    source: "Treg cells, Th2 cells, macrophages, dendritic cells",
    receptor: "IL-10 receptor (JAK-STAT)",
    function:
      "Anti-inflammatory cytokine that suppresses macrophage and dendritic cell cytokine production and antigen presentation.",
    mnemonic:
      "IL-10 = ten down: turns inflammatory macrophage/Th1 responses down.",
    clinicalRelevance: [
      "Limits Th1/macrophage inflammation",
      "Treg-mediated immune tolerance uses IL-10 and TGF-β",
    ],
    boardsPearls: [
      "IL-10 inhibits macrophages and Th1 responses",
      "Anti-inflammatory pair: IL-10 and TGF-β",
    ],
    distinguishFrom: ["IL-12 — promotes Th1 and IFN-γ", "IFN-γ — activates macrophages"],
  },
  {
    id: "tgf-beta",
    name: "TGF-β",
    etymology: "TGF = transforming growth factor + Greek beta = second letter (isoform family)",
    aliases: [
      "tgf-β",
      "tgf-beta",
      "tgf beta",
      "tgf-b",
      "tgf b",
      "tgfb",
      "tgfb1",
      "tgfβ",
      "transforming growth factor beta",
      "transforming growth factor β",
      "transforming growth factor-b",
      "transforming growth factor b",
    ],
    type: "Cytokine",
    source:
      "Platelets, macrophages, T regulatory cells, fibroblasts, epithelial cells, and most tissues (latent form activated by proteases/thrombospondin)",
    receptor:
      "TGF-β receptor type II recruits and phosphorylates type I receptor (serine/threonine kinases) → phosphorylates Smad2/3 → Smad4 complex translocates to nucleus (canonical Smad pathway); also MAPK and PI3K non-Smad routes",
    function:
      "Pleiotropic cytokine/growth factor: promotes Treg differentiation and immune tolerance (with IL-10), drives fibrosis and extracellular matrix deposition, inhibits epithelial proliferation (tumor suppressor early), and with IL-6 initiates Th17 differentiation depending on cytokine context.",
    mnemonic:
      "TGF-β alone → Treg; TGF-β + IL-6 → Th17; TGF-β in tissue → fibrosis",
    clinicalRelevance: [
      "Idiopathic pulmonary fibrosis, liver cirrhosis, and diabetic nephropathy — chronic TGF-β drives collagen and mesangial matrix deposition",
      "Keloids and hypertrophic scars — excess TGF-β fibroblast activity",
      "Treg-mediated peripheral tolerance — TGF-β with IL-10 suppresses autoimmunity",
      "Marfan syndrome — fibrillin-1 normally sequesters TGF-β; deficiency → dysregulated TGF-β signaling and aortic root dilation",
      "Smad pathway inactivation in many carcinomas — loss of TGF-β tumor suppressor late in tumorigenesis",
    ],
    boardsPearls: [
      "TGF-β alone favors Treg; TGF-β + IL-6 favors Th17 (RORγt) — cytokine context is key",
      "Pro-fibrotic cytokine — ECM deposition in lung, liver, kidney fibrosis",
      "Smad2/3 pathway — serine/threonine receptor kinases, not JAK-STAT",
      "Anti-inflammatory pair with IL-10 for immune suppression",
      "Diabetic nephropathy — TGF-β contributes to mesangial expansion and GBM thickening",
      "Early tumor suppressor (growth inhibition); tumor cells often escape TGF-β cytostasis later",
      "vs IFN-γ — activates macrophages; TGF-β suppresses inflammation and promotes fibrosis",
    ],
    distinguishFrom: [
      "IL-10 — distinct anti-inflammatory cytokine; often cooperates with TGF-β but different receptor (JAK-STAT)",
      "IL-6 — with TGF-β drives Th17; alone IL-6 drives acute-phase response without Treg induction",
      "PDGF — mitogenic for smooth muscle and fibroblasts in wound healing; less central to Treg/Th17 fate",
      "EGF — epithelial mitogen; not primary Treg/Th17 polarizing cytokine",
      "TNF-α — pro-inflammatory; opposes tolerance and drives granuloma inflammation",
    ],
    pediatrics:
      "Treg development supports prevention of neonatal autoimmunity; Th17/TGF-β + IL-6 balance relevant in pediatric autoimmune and autoinflammatory disease.",
  },
  {
    id: "tyrosine-kinase",
    name: "Tyrosine Kinase",
    etymology:
      "Greek tyros = cheese (amino acid name) + Greek kinein = to move + -ase = enzyme",
    aliases: [
      "tyrosine kinase",
      "tyrosine kinases",
      "protein tyrosine kinase",
      "protein tyrosine kinases",
      "ptk",
      "ptks",
      "receptor tyrosine kinase",
      "receptor tyrosine kinases",
      "rtk",
      "rtks",
      "non-receptor tyrosine kinase",
      "non-receptor tyrosine kinases",
      "tyrosine phosphorylation kinase",
    ],
    type: "Signaling pathway",
    source:
      "Receptor tyrosine kinases (RTKs) on cell surface — EGF receptor, PDGFR, c-KIT, insulin/IGF-1 receptors; non-receptor tyrosine kinases in cytoplasm — Abl, Src family, BTK, Syk, and receptor-associated JAKs",
    receptor:
      "RTKs — ligand-induced dimerization → trans-autophosphorylation of tyrosine residues → docking sites for SH2-domain adaptors (Grb2, PI3K) → downstream Ras-MAPK and PI3K/Akt cascades",
    function:
      "Phosphorylates tyrosine residues on substrate proteins to propagate growth factor, cytokine, and antigen-receptor signals — controls proliferation, differentiation, metabolism, and survival; constitutive activation from fusion proteins or point mutations drives oncogenesis.",
    clinicalRelevance: [
      "BCR-ABL fusion tyrosine kinase — chronic myeloid leukemia (Philadelphia chromosome); imatinib inhibits",
      "c-KIT (D816V and other mutations) — systemic mastocytosis, GIST; imatinib/sunitinib",
      "PDGFR — imatinib target; glioblastoma and dermatofibrosarcoma protuberans associations",
      "EGFR mutations — non-small cell lung cancer; erlotinib/gefitinib (TKIs)",
      "BTK deficiency — X-linked agammaglobulinemia; ibrutinib inhibits BTK in CLL/lymphoma",
      "ABL1 — BCR-ABL in CML/ALL; also targeted by dasatinib, nilotinib",
      "VEGF receptor TKIs — sorafenib, sunitinib in renal cell carcinoma",
    ],
    boardsPearls: [
      "Tyrosine kinase phosphorylates tyrosine (not serine/threonine like many other kinases)",
      "RTK pathway: ligand → dimerization → autophosphorylation → Ras-MAPK and/or PI3K/Akt",
      "BCR-ABL = constitutively active tyrosine kinase in CML → imatinib (first-line TKI)",
      "Imatinib also hits c-KIT and PDGFR — GIST and some mast cell disorders",
      "vs JAK-STAT — JAKs are tyrosine kinases associated with cytokine receptors but signal via STATs, not classic RTK→Ras-MAPK alone",
      "vs TGF-β receptor — serine/threonine kinase phosphorylates Smads, not tyrosine substrates",
      "vs tyrosine hydroxylase — rate-limiting enzyme in catecholamine synthesis, not a signaling kinase",
      "X-linked agammaglobulinemia — BTK tyrosine kinase defect → no mature B cells",
    ],
    distinguishFrom: [
      "JAK-STAT pathway — cytokine receptor–associated JAK tyrosine kinases phosphorylate STAT transcription factors",
      "Serine/threonine kinase — e.g., TGF-β receptors, PKA, PKC; different amino acid target",
      "Tyrosine hydroxylase — converts tyrosine to L-DOPA in catecholamine synthesis",
      "Tyrosine — amino acid substrate; not the kinase enzyme",
      "MAP kinase (ERK) — downstream serine/threonine kinase in Ras pathway, not tyrosine kinase itself",
    ],
    pediatrics:
      "X-linked agammaglobulinemia (BTK deficiency) presents after maternal IgG wanes with recurrent encapsulated bacterial infections. Philadelphia-positive ALL in children may require TKI plus chemotherapy.",
  },
  {
    id: "il-11",
    name: "Interleukin-11 (IL-11)",
    etymology: "interleukin = between leukocytes + 11 = cytokine number",
    aliases: ["il-11", "il 11", "interleukin-11", "interleukin 11"],
    type: "Cytokine",
    source: "Bone marrow stromal cells, fibroblasts, epithelial cells, and osteoblast-lineage cells",
    receptor: "IL-11 receptor α + gp130 → JAK-STAT3",
    function:
      "IL-6-family cytokine that supports megakaryocyte maturation and platelet recovery, modulates stromal/epithelial repair, and can drive fibrosis when chronically activated.",
    mnemonic:
      "IL-11 = two ones look like platelet sticks: megakaryocytes/platelets.",
    clinicalRelevance: [
      "Oprelvekin (recombinant IL-11) was used for chemotherapy-associated thrombocytopenia",
      "IL-11/gp130 signaling overlaps with IL-6-family acute-phase and stromal repair pathways",
      "Excess IL-11 signaling has been implicated in fibrotic remodeling",
    ],
    boardsPearls: [
      "IL-11 is the platelet-support cytokine in classic interleukin tables",
      "Thrombopoietin is the main physiologic platelet regulator; IL-11 is the board-style adjunct",
      "gp130 receptor family links IL-11 with IL-6 signaling logic",
    ],
    distinguishFrom: [
      "Thrombopoietin — primary megakaryocyte/platelet growth factor from liver and kidney",
      "IL-3 — broad hematopoietic progenitor growth",
      "GM-CSF — granulocyte/macrophage progenitors, not platelet-focused",
    ],
  },
  {
    id: "il-12",
    name: "Interleukin-12 (IL-12)",
    etymology: "interleukin = between leukocytes + 12 = cytokine number",
    aliases: ["il-12", "il 12", "interleukin-12", "interleukin 12"],
    type: "Cytokine",
    source: "Macrophages and dendritic cells",
    receptor: "IL-12 receptor (JAK-STAT)",
    function:
      "Promotes Th1 differentiation and stimulates NK/T cells to produce IFN-γ, enhancing intracellular pathogen killing.",
    mnemonic:
      "IL-12 = one-two punch: APC tells T/NK cells → IFN-γ → macrophage killing.",
    clinicalRelevance: [
      "IL-12 receptor deficiency → mycobacterial and Salmonella susceptibility",
      "Key bridge from innate APCs to Th1 immunity",
    ],
    boardsPearls: [
      "IL-12 → Th1 → IFN-γ → macrophage activation",
      "Defects in IL-12/IFN-γ axis → disseminated atypical mycobacteria",
    ],
    distinguishFrom: ["IL-10 — inhibits macrophages/Th1", "IL-4 — promotes Th2 and IgE"],
  },
  {
    id: "il-13",
    name: "Interleukin-13 (IL-13)",
    etymology: "interleukin = between leukocytes + 13 = cytokine number",
    aliases: ["il-13", "il 13", "interleukin-13", "interleukin 13"],
    type: "Cytokine",
    source: "Th2 cells, type 2 innate lymphoid cells (ILC2), mast cells, basophils, and eosinophils",
    receptor:
      "IL-13 receptor α1 with IL-4 receptor α (type II IL-4 receptor) → JAK-STAT6",
    function:
      "Type 2 cytokine that increases mucus production, goblet-cell metaplasia, airway hyperreactivity, alternative macrophage activation, tissue remodeling, and IgE-associated allergic inflammation.",
    mnemonic:
      "IL-13 = unlucky airways: mucus + hyperreactivity, like IL-4 but more airway/barrier.",
    clinicalRelevance: [
      "Asthma, allergic rhinitis, atopic dermatitis, and eosinophilic esophagitis involve IL-13/IL-4 type 2 signaling",
      "Dupilumab blocks IL-4Rα shared by IL-4 and IL-13 pathways",
      "IL-13 contributes to fibrosis and mucus plugging in chronic type 2 inflammation",
    ],
    boardsPearls: [
      "Th2 triad: IL-4 = IgE switch; IL-5 = eosinophils; IL-13 = mucus/airway hyperreactivity",
      "IL-13 overlaps with IL-4 because both can signal through IL-4Rα",
      "Alternative macrophage activation and tissue repair/fibrosis are type 2 themes",
    ],
    distinguishFrom: [
      "IL-4 — stronger association with Th2 differentiation and IgE class switching",
      "IL-5 — eosinophil survival/activation",
      "IL-17 — neutrophilic mucosal inflammation, not type 2 mucus/eosinophil pattern",
    ],
    pediatrics:
      "Childhood asthma and atopic dermatitis commonly reflect type 2 inflammation; IL-13/IL-4 blockade is used in selected pediatric atopic disease.",
  },
  {
    id: "il-15",
    name: "Interleukin-15 (IL-15)",
    etymology: "interleukin = between leukocytes + 15 = cytokine number",
    aliases: ["il-15", "il 15", "interleukin-15", "interleukin 15"],
    type: "Cytokine",
    source: "Monocytes, macrophages, dendritic cells, epithelial cells, and stromal cells",
    receptor:
      "IL-15 receptor α presents IL-15 to IL-2/15Rβ (CD122) + common γ chain (CD132) → JAK1/JAK3-STAT5",
    function:
      "Supports NK-cell development, survival, and activation; maintains memory CD8⁺ T cells and promotes cytotoxic lymphocyte function.",
    mnemonic:
      "IL-15 = fifteen natural killers on patrol: NK cells + memory CD8 survival.",
    clinicalRelevance: [
      "Common γ-chain defects impair IL-15 signaling and cause absent NK cells in X-linked SCID",
      "Cancer immunotherapy research uses IL-15 agonists to expand NK and CD8 cytotoxic responses",
      "IL-15 can contribute to inflammatory cytotoxic T-cell activation in autoimmune disease",
    ],
    boardsPearls: [
      "IL-15 is the NK-cell survival/development cytokine",
      "IL-2 and IL-15 share receptor β/γ components but IL-2 expands activated T cells; IL-15 maintains NK/memory CD8 cells",
      "Absent NK cells in common γ-chain SCID reflects failed IL-15 signaling",
    ],
    distinguishFrom: [
      "IL-2 — activated T-cell clonal expansion and Treg support",
      "IL-7 — early T-cell development and lymphoid survival",
      "IL-12 — induces NK/T-cell IFN-γ production, but does not build NK cells",
    ],
    pediatrics:
      "X-linked SCID in infants includes failed IL-15 signaling with absent NK cells; presents with severe viral, fungal, and opportunistic infections.",
  },
  {
    id: "il-17",
    name: "Interleukin-17 (IL-17)",
    etymology: "interleukin = between leukocytes + 17 = cytokine number",
    aliases: [
      "il-17",
      "il 17",
      "interleukin-17",
      "interleukin 17",
      "il-17a",
      "il-17f",
      "th17 cytokine",
    ],
    type: "Cytokine",
    source: "Th17 cells, γδ T cells, innate lymphoid cells, and mucosal lymphocytes",
    receptor: "IL-17RA/IL-17RC receptor complex → Act1/TRAF6 → NF-κB and MAPK",
    function:
      "Th17 effector cytokine that induces epithelial, endothelial, fibroblast, and macrophage release of chemokines (especially IL-8/CXCL8) and G-CSF, recruiting neutrophils and strengthening mucosal defense against extracellular bacteria and fungi.",
    mnemonic:
      "IL-17 = seventeen neutrophils: Th17 calls neutrophils to mucosa.",
    clinicalRelevance: [
      "Chronic mucocutaneous candidiasis with IL-17 pathway defects",
      "Psoriasis and ankylosing spondylitis — IL-17-driven keratinocyte and neutrophilic inflammation",
      "Secukinumab/ixekizumab block IL-17A; brodalumab blocks IL-17 receptor",
      "Th17 defects contribute to recurrent Candida and Staphylococcus infections in hyper-IgE syndrome",
    ],
    boardsPearls: [
      "IL-17 recruits neutrophils indirectly by inducing IL-8/CXCL8 and G-CSF",
      "Th17 differentiation starts with TGF-β + IL-6; IL-23 sustains Th17 cells",
      "Extracellular bacteria/fungi at mucosa = Th17/IL-17 axis",
      "IL-17 is neutrophil-skewed; IL-5 is eosinophil-skewed",
    ],
    distinguishFrom: [
      "IL-8/CXCL8 — direct neutrophil chemokine downstream of IL-17",
      "IL-23 — sustains/expands Th17 cells; upstream of IL-17 production",
      "IL-12 — Th1/IFN-γ axis for intracellular pathogens",
    ],
    pediatrics:
      "Hyper-IgE syndrome presents in childhood with impaired Th17/IL-17 mucosal defense, recurrent staph abscesses, Candida, eczema, and retained primary teeth.",
  },
  {
    id: "il-18",
    name: "Interleukin-18 (IL-18)",
    etymology: "interleukin = between leukocytes + 18 = cytokine number",
    aliases: ["il-18", "il 18", "interleukin-18", "interleukin 18", "ifn-gamma-inducing factor"],
    type: "Cytokine",
    source: "Macrophages, dendritic cells, epithelial cells, and inflammasome-activated innate cells",
    receptor: "IL-18 receptor → MyD88 → NF-κB/MAPK; mature IL-18 generated by caspase-1",
    function:
      "Inflammasome-processed IL-1-family cytokine that synergizes with IL-12 to induce IFN-γ from NK and T cells, amplifying Th1/macrophage responses.",
    mnemonic:
      "IL-18 = eighteen helps twelve: with IL-12, drives IFN-γ.",
    clinicalRelevance: [
      "Inflammasome activation processes IL-1β and IL-18 via caspase-1",
      "High IL-18 is linked to macrophage activation syndrome/HLH and severe systemic inflammation",
      "Contributes to Th1 inflammation and host defense against intracellular pathogens",
    ],
    boardsPearls: [
      "IL-18 belongs with IL-1 family/inflammasome logic, not JAK-STAT common γ-chain cytokines",
      "IL-12 + IL-18 → strong IFN-γ from NK/T cells",
      "Caspase-1 processes pro–IL-1β and pro–IL-18",
    ],
    distinguishFrom: [
      "IL-12 — APC cytokine that independently promotes Th1 differentiation",
      "IL-1β — inflammasome pyrogen/endothelial activation cytokine",
      "IFN-γ — downstream macrophage-activating cytokine induced by IL-12/IL-18",
    ],
    pediatrics:
      "Macrophage activation syndrome and HLH in children can involve very high IL-18 with fever, cytopenias, hepatitis, and hyperferritinemia.",
  },
  {
    id: "il-21",
    name: "Interleukin-21 (IL-21)",
    etymology: "interleukin = between leukocytes + 21 = cytokine number",
    aliases: ["il-21", "il 21", "interleukin-21", "interleukin 21"],
    type: "Cytokine",
    source: "T follicular helper cells, Th17 cells, and activated CD4⁺ T cells",
    receptor: "IL-21 receptor + common γ chain (CD132) → JAK1/JAK3-STAT3",
    function:
      "Tfh-linked cytokine that promotes germinal center B-cell proliferation, plasma-cell differentiation, class switching, CD8⁺ T-cell function, NK-cell activity, and Th17 amplification.",
    mnemonic:
      "IL-21 = blackjack helper: Tfh helps B cells win germinal centers.",
    clinicalRelevance: [
      "Important for antibody responses and Tfh-B cell collaboration",
      "Common γ-chain cytokine; signaling overlaps with IL-2/4/7/9/15 via CD132",
      "Dysregulated IL-21 contributes to autoantibody production in autoimmune disease models",
    ],
    boardsPearls: [
      "IL-21 is the Tfh/B-cell help cytokine",
      "STAT3 pathway links IL-21 to B-cell differentiation and Th17 biology",
      "Contrast IL-4: class switch to IgE; IL-21: broader germinal center/plasma-cell support",
    ],
    distinguishFrom: [
      "IL-4 — Th2 IgE class-switching signal",
      "IL-2 — T-cell proliferation and Treg support",
      "CD40L — required contact-dependent T-cell help for class switching",
    ],
  },
  {
    id: "il-22",
    name: "Interleukin-22 (IL-22)",
    etymology: "interleukin = between leukocytes + 22 = cytokine number",
    aliases: ["il-22", "il 22", "interleukin-22", "interleukin 22"],
    type: "Cytokine",
    source: "Th17 cells, Th22 cells, type 3 innate lymphoid cells, and NK-like cells",
    receptor: "IL-22 receptor (IL-22R1 + IL-10R2) on epithelial/stromal cells → JAK-STAT3",
    function:
      "Barrier cytokine that acts mainly on epithelial cells to induce antimicrobial peptides, mucin, tight-junction support, tissue repair, and acute-phase-like responses at mucosal surfaces.",
    mnemonic:
      "IL-22 = two-two walls: reinforces epithelial barriers on both sides.",
    clinicalRelevance: [
      "Mucosal defense against extracellular bacteria and fungi, especially gut and skin barriers",
      "Can be protective in epithelial repair but pathogenic in psoriasis and chronic inflammation",
      "Works with IL-17 in keratinocytes and mucosal epithelium",
    ],
    boardsPearls: [
      "IL-22 acts on epithelium more than leukocytes — barrier repair and antimicrobial peptides",
      "Th17 output includes IL-17, IL-21, IL-22; IL-17 recruits neutrophils, IL-22 repairs barrier",
      "IL-22 is in the IL-10 cytokine family but is pro-barrier, not broadly anti-inflammatory like IL-10",
    ],
    distinguishFrom: [
      "IL-17 — neutrophil recruitment via chemokines/G-CSF",
      "IL-10 — suppresses macrophages/APCs",
      "IL-13 — type 2 mucus/airway hyperreactivity rather than Th17 barrier defense",
    ],
    pediatrics:
      "Barrier immunity matters in pediatric IBD and recurrent mucocutaneous infections; IL-22 can be protective in epithelial repair but harmful if chronically overactive.",
  },
  {
    id: "il-23",
    name: "Interleukin-23 (IL-23)",
    etymology: "interleukin = between leukocytes + 23 = cytokine number",
    aliases: [
      "il-23",
      "il 23",
      "interleukin-23",
      "interleukin 23",
      "il-23p19",
      "il12b",
      "il-12p40",
    ],
    type: "Cytokine",
    source: "Dendritic cells and macrophages",
    receptor: "IL-23 receptor + IL-12Rβ1 → JAK2/TYK2-STAT3/STAT4",
    function:
      "IL-12-family cytokine that sustains and expands committed Th17 cells, promoting IL-17, IL-21, IL-22, and GM-CSF production for mucosal defense and chronic inflammation.",
    mnemonic:
      "IL-23 = twenty-THRee keeps TH17: maintains Th17, not first differentiation.",
    clinicalRelevance: [
      "Psoriasis, psoriatic arthritis, ankylosing spondylitis, and IBD involve IL-23/Th17 inflammation",
      "Ustekinumab blocks shared IL-12/23 p40; guselkumab/risankizumab/tildrakizumab block IL-23 p19",
      "IL-23 shares p40 subunit and IL-12Rβ1 receptor component with IL-12",
    ],
    boardsPearls: [
      "TGF-β + IL-6 initiates Th17 differentiation; IL-23 maintains/expands Th17",
      "IL-23 → Th17 → IL-17/IL-22 → neutrophils + barrier defense",
      "IL-12 drives Th1/IFN-γ; IL-23 drives Th17/IL-17",
      "Anti-p40 biologics hit both IL-12 and IL-23; anti-p19 is IL-23-selective",
    ],
    distinguishFrom: [
      "IL-12 — p35+p40 cytokine for Th1 and IFN-γ",
      "IL-17 — downstream Th17 effector cytokine",
      "IL-6 — starts Th17 differentiation with TGF-β and drives acute phase response",
    ],
    pediatrics:
      "Pediatric psoriasis and IBD can involve IL-23/Th17 inflammation; IL-12/23 or IL-23 biologics may be used by specialty indication and age.",
  },
  {
    id: "ifn-gamma",
    name: "Interferon-gamma (IFN-γ)",
    etymology: "interferon = interferes with viral replication + gamma = third classic class",
    aliases: ["ifn-gamma", "ifn gamma", "ifn-γ", "interferon-gamma", "interferon gamma"],
    type: "Cytokine",
    source: "Th1 cells, CD8 T cells, NK cells",
    receptor: "IFN-γ receptor (JAK1/JAK2-STAT1)",
    function:
      "Activates macrophages, increases MHC I/II expression, promotes Th1 responses, and supports IgG class switching.",
    clinicalRelevance: [
      "Defective IFN-γ/IL-12 axis → disseminated mycobacterial infection",
      "IGRA TB tests measure IFN-γ release after TB antigen stimulation",
      "Therapeutic IFN-γ can reduce infections in chronic granulomatous disease",
    ],
    mnemonic:
      "IFN-γ = Gamma Granuloma-activator: type II interferon from Th1/NK → activates macrophages (TB, CGD therapy).",
    boardsPearls: [
      "Th1 signature cytokine = IFN-γ",
      "IFN-γ activates macrophages for intracellular pathogen killing",
      "IL-12 induces IFN-γ; IL-10 suppresses this axis",
      "IFN mnemonic — ABG: Alpha/Beta = Antiviral (type I); Gamma = Granuloma/macrophage activation (type II)",
    ],
    distinguishFrom: [
      "IFN-α/β (type I) — antiviral JAK-STAT state; not macrophage-activating",
      "IL-4 — Th2 cytokine",
    ],
  },
  {
    id: "interferons",
    name: "Interferons",
    etymology: "interfere = block viral replication + -on = substance suffix",
    aliases: ["interferon", "interferons", "ifn", "type i interferon", "ifn-alpha", "ifn-beta"],
    type: "Cytokine",
    source: "Virus-infected cells, plasmacytoid dendritic cells, T cells/NK cells depending on subtype",
    receptor: "IFNAR for type I IFNs; IFNGR for IFN-γ",
    function:
      "Cytokine family that induces antiviral state, increases antigen presentation, and coordinates innate/adaptive immunity.",
    clinicalRelevance: [
      "IFN-α historically used for hepatitis C and melanoma",
      "IFN-β used in multiple sclerosis",
      "IFN-γ is Th1/macrophage activating",
    ],
    boardsPearls: [
      "Type I IFNs (α/β) are antiviral and upregulate MHC I",
      "IFN-γ is type II interferon and activates macrophages",
      "Viral immune evasion often blocks interferon signaling",
    ],
  },
  {
    id: "gm-csf",
    name: "GM-CSF",
    etymology: "GM = granulocyte-macrophage + CSF = colony-stimulating factor",
    aliases: ["gm-csf", "gm csf", "granulocyte macrophage colony stimulating factor", "granulocyte-macrophage colony-stimulating factor", "granulocyte macrophage colony stimulator factor", "granulocyte-macrophage colony stimulator factor", "granulocyte macrophage colony stimulating factors", "gm colony stimulating factor", "csf2", "sargramostim"],
    type: "Growth factor",
    source: "T cells, macrophages, endothelial cells, fibroblasts",
    receptor: "GM-CSF receptor (JAK2-STAT5)",
    function:
      "Stimulates granulocyte and macrophage progenitor proliferation and activation.",
    clinicalRelevance: [
      "Sargramostim can aid marrow recovery after chemotherapy/transplant",
      "Autoantibodies to GM-CSF associated with pulmonary alveolar proteinosis",
    ],
    boardsPearls: [
      "GM-CSF grows granulocyte/macrophage colonies",
      "G-CSF is neutrophil-focused; GM-CSF broader myeloid stimulation",
      "Autoantibodies to GM-CSF → pulmonary alveolar proteinosis (surfactant accumulation)",
      "Sargramostim — recombinant GM-CSF for marrow recovery",
    ],
  },
  {
    id: "gs-protein",
    name: "Gs Protein",
    etymology:
      "G = GTP-binding regulatory protein + s = stimulatory (activates adenylyl cyclase)",
    aliases: [
      "gs protein",
      "gs proteins",
      "gs",
      "gαs",
      "g alpha s",
      "g-alpha-s",
      "gαs protein",
      "stimulatory g protein",
      "stimulatory g proteins",
      "g protein s",
      "g-protein s",
      "g protein stimulatory",
      "g stimulatory protein",
      "heterotrimeric g protein gs",
      "adenylyl cyclase stimulatory g protein",
    ],
    type: "Signaling pathway",
    source:
      "Membrane-associated heterotrimeric G protein (αs, β, γ subunits) linked to stimulatory GPCRs on many endocrine, neural, and metabolic target cells",
    receptor:
      "Gs-coupled GPCRs — β₁/β₂/β₃ adrenergic, D₁ dopamine, H₂ histamine, V₂ vasopressin, glucagon, TSH, LH, FSH, PTH₁, CRH, calcitonin, and related receptors",
    function:
      "Inactive Gαs–GDP–Gβγ complex at rest; ligand-activated receptor catalyzes GDP→GTP exchange on Gαs → Gαs–GTP dissociates from Gβγ → active Gαs stimulates adenylyl cyclase → ↑ cAMP → PKA activation; intrinsic GTPase on Gαs terminates signal by hydrolyzing GTP to GDP.",
    clinicalRelevance: [
      "Cholera toxin ADP-ribosylates Gαs → impaired GTPase → constitutive adenylyl cyclase activity → ↑ cAMP in enterocytes → secretory diarrhea",
      "McCune-Albright syndrome — activating GNAS (Gαs) mutations → autonomous cAMP signaling in bone, skin, and endocrine tissues",
      "β-agonists (albuterol) and glucagon act through Gs → cAMP in lung and liver",
      "PTH, TSH, LH/FSH, ADH (V2), and H2-mediated gastric acid secretion use Gs pathways",
      "Pertussis toxin affects Gi (inhibitory), not Gs — contrast for boards",
    ],
    boardsPearls: [
      "Gs = stimulatory G protein → activates adenylyl cyclase → ↑ cAMP → PKA",
      "Gi = inhibitory G protein → ↓ adenylyl cyclase → ↓ cAMP (opposite coupling)",
      "Gq activates phospholipase C (IP3/DAG), not adenylyl cyclase",
      "Cholera toxin locks Gαs ON — classic ↑ cAMP secretory diarrhea vignette",
      "Classic Gs ligands: glucagon, β-adrenergic agonists, PTH, TSH, LH/FSH, ADH (V2), H2 histamine",
      "GTP-bound Gαs is active; GDP-bound is inactive",
    ],
    distinguishFrom: [
      "Gi protein — inhibits adenylyl cyclase; pertussis toxin target",
      "Gq protein — activates phospholipase C → IP3/DAG/Ca²⁺",
      "cAMP–PKA pathway — downstream second-messenger cascade activated by Gs",
      "Receptor tyrosine kinase — does not use heterotrimeric Gαs for adenylyl cyclase activation",
      "G12/13 — Rho pathway, not cAMP",
    ],
    pediatrics:
      "McCune-Albright can present in childhood with café-au-lait macules, precocious puberty, and polyostotic fibrous dysplasia from mosaic Gαs activation. Cholera physiology is the same across ages; dehydration risk is higher in infants.",
  },
  {
    id: "cyclic-amp",
    name: "Cyclic AMP (cAMP)",
    etymology:
      "cyclic = ring-shaped + AMP = adenosine monophosphate",
    aliases: [
      "cyclic amp",
      "cyclic amps",
      "camp",
      "c amp",
      "c-amp",
      "cyclic adenosine monophosphate",
      "cyclic adenosine monophosphates",
      "3'5'-cyclic amp",
      "3',5'-cyclic amp",
      "3'5'-cyclic adenosine monophosphate",
      "3',5'-cyclic adenosine monophosphate",
      "adenosine 3'5'-cyclic monophosphate",
      "adenosine 3',5'-cyclic monophosphate",
    ],
    type: "Second messenger",
    source:
      "Synthesized from ATP by adenylyl cyclase (membrane-bound enzyme) when stimulated by active Gαs; production ↓ when Gi inhibits adenylyl cyclase",
    receptor:
      "Primarily protein kinase A (PKA); also exchange protein activated by cAMP (EPAC) and cyclic nucleotide–gated ion channels (olfactory signaling)",
    function:
      "Intracellular second messenger that amplifies extracellular GPCR signals — cAMP activates PKA to phosphorylate enzymes, ion channels, and transcription factors (e.g., CREB), mediating glycogenolysis, lipolysis, hormone secretion, water reabsorption (V2/ADH), and gene transcription.",
    clinicalRelevance: [
      "Gs-coupled hormones raise cAMP — glucagon, β-adrenergic agonists, PTH, TSH, LH/FSH, CRH, ADH (V2)",
      "Cholera toxin locks Gαs ON → constitutive adenylyl cyclase → ↑ cAMP in enterocytes → Cl⁻ and water secretion",
      "Pertussis toxin inactivates Gi → loss of adenylyl cyclase inhibition → ↑ cAMP in respiratory epithelium",
      "Phosphodiesterase inhibitors (caffeine, theophylline, milrinone) ↑ cAMP by blocking degradation",
      "McCune-Albright syndrome — mosaic Gαs activation → autonomous cAMP signaling",
    ],
    boardsPearls: [
      "ATP → adenylyl cyclase → cAMP → PKA (classic second messenger)",
      "Gs ↑ cAMP; Gi ↓ cAMP — opposite effects on same adenylyl cyclase",
      "Cholera = ↑ cAMP → secretory diarrhea; pertussis = ↑ cAMP via Gi blockade",
      "vs cGMP — cAMP from adenylyl cyclase; cGMP from guanylyl cyclase (NO, ANP)",
      "PDE breaks down cAMP — milrinone (PDE-3) ↑ cAMP in heart (inotropy)",
      "Full cascade = cyclic AMP–PKA pathway entry; cAMP is the second messenger molecule",
    ],
    distinguishFrom: [
      "cyclic AMP–PKA pathway — full Gs → adenylyl cyclase → cAMP → PKA signaling cascade",
      "cGMP — guanylyl cyclase second messenger (NO, natriuretic peptides)",
      "ATP — substrate for cAMP synthesis, not the active second messenger",
      "AMP — non-cyclic breakdown product; not the signaling molecule",
      "Gs protein — upstream G protein that activates adenylyl cyclase; not cAMP itself",
    ],
    pediatrics:
      "Same Gs–adenylyl cyclase–cAMP logic in children; β-agonists for asthma and cholera dehydration risk are especially critical in infants.",
  },
  {
    id: "camp-pka-pathway",
    name: "Cyclic AMP–Protein Kinase A Pathway",
    etymology: "cyclic = ring + AMP = adenosine monophosphate + protein + kinase = phosphorylating enzyme + A = first named isoform",
    aliases: [
      "cyclic amp-protein kinase a pathway",
      "cyclic amp protein kinase a pathway",
      "camp-pka pathway",
      "camp pka pathway",
      "camp/protein kinase a pathway",
      "adenylyl cyclase-camp-pka pathway",
    ],
    type: "Signaling pathway",
    source:
      "Activated by Gs-coupled GPCRs (and some ligand-gated receptors) that stimulate adenylyl cyclase after GTP-bound Gαs dissociates from Gβγ",
    receptor:
      "Gs GPCRs (β-adrenergic, glucagon, CRH, TSH, LH, FSH, PTH, ADH V2); Gi GPCRs (α2-adrenergic, M2 muscarinic) inhibit the same adenylyl cyclase",
    function:
      "Ligand → Gs → adenylyl cyclase → ATP converted to cAMP → cAMP activates protein kinase A (PKA) → PKA phosphorylates enzymes, ion channels, and transcription factors (e.g., CREB) → cellular response such as glycogen breakdown, lipolysis, or gene transcription.",
    clinicalRelevance: [
      "β-agonists (albuterol) and glucagon raise cAMP in target tissues",
      "PTH increases renal cAMP (Gs at PTH1R)",
      "V2 vasopressin receptor uses cAMP to insert aquaporin-2 in collecting duct",
      "Cholera toxin ADP-ribosylates Gαs → constitutive adenylyl cyclase activation → secretory diarrhea",
      "Pertussis toxin inactivates Gi → loss of adenylyl cyclase inhibition",
      "Phosphodiesterase inhibitors (theophylline, caffeine) ↑ cAMP by blocking degradation",
    ],
    boardsPearls: [
      "Gs → ↑ cAMP → PKA; Gi → ↓ cAMP",
      "Classic Gs ligands: glucagon, epinephrine via β-receptors, PTH, TSH, ADH (V2)",
      "Cholera = endless Gs signaling → ↑ cAMP in enterocytes → Cl⁻ secretion and water loss",
      "PKA phosphorylates glycogen phosphorylase kinase in liver (glycogenolysis)",
    ],
    distinguishFrom: [
      "cGMP/PKG pathway — NO and natriuretic peptides, not adenylyl cyclase",
      "IP3/DAG pathway — Gq GPCRs use phospholipase C, not adenylyl cyclase",
      "JAK-STAT — cytokine receptors without cAMP second messenger",
    ],
    pediatrics:
      "Same Gs–cAMP–PKA logic in children; β-agonists for asthma and prostaglandin/adenosine physiology in neonates follow cAMP-related signaling.",
  },
  {
    id: "dag-pkc-pathway",
    name: "Diacylglycerol–Protein Kinase C Pathway",
    etymology: "diacyl = two acyl chains + glycerol + protein + kinase C = calcium-independent classic PKC isoform family",
    aliases: [
      "diacylglycerol-protein kinase c pathway",
      "diacylglycerol protein kinase c pathway",
      "dag-pkc pathway",
      "dag pkc pathway",
      "dag/protein kinase c pathway",
      "pip2-plc-dag-pkc pathway",
    ],
    type: "Signaling pathway",
    source:
      "Generated alongside IP3 when Gq (or some G11) GPCRs activate phospholipase Cβ, which cleaves membrane PIP2",
    receptor:
      "Gq-coupled GPCRs — α1-adrenergic, M1/M3 muscarinic, H1 histamine, V1 vasopressin, GnRH, oxytocin, angiotensin II (AT1), endothelin",
    function:
      "PLC cleaves PIP2 → diacylglycerol remains in membrane → DAG (with Ca²⁺ for some PKC isoforms) activates protein kinase C → PKC phosphorylates substrates controlling smooth muscle contraction, secretion, gene expression, and platelet activation.",
    clinicalRelevance: [
      "α1-blockers (prazosin) reduce Gq signaling in hypertension/BPH",
      "Phorbol esters (TPA) mimic DAG and chronically activate PKC — tumor promoter in models",
      "V1 vasopressin causes vasoconstriction via Gq → DAG/PKC",
    ],
    boardsPearls: [
      "Gq → PLC → PIP2 cleavage → DAG + IP3",
      "DAG activates PKC at the plasma membrane",
      "M3 muscarinic and α1 adrenergic receptors use Gq (DAG/PKC and IP3/Ca²⁺)",
      "Phorbol ester tumor promotion works through persistent PKC activation",
    ],
    distinguishFrom: [
      "cAMP/PKA pathway — Gs/Gi and adenylyl cyclase, not DAG",
      "IP3–Ca²⁺–calmodulin pathway — parallel branch from same PLC reaction, different effector",
      "RTK–MAPK — receptor tyrosine kinases, not Gq GPCR PLC cleavage",
    ],
  },
  {
    id: "ip3-calcium-calmodulin-pathway",
    name: "Inositol Triphosphate–Calcium–Calmodulin Pathway",
    etymology: "inositol = cyclic sugar alcohol + triphosphate = three phosphates + calcium + calmodulin = calcium-modulated protein",
    aliases: [
      "inositol triphosphate-calcium-calmodulin pathway",
      "inositol triphosphate calcium calmodulin pathway",
      "ip3-calcium-calmodulin pathway",
      "ip3 calcium calmodulin pathway",
      "ip3/ca2+/calmodulin pathway",
      "plc-ip3-calcium pathway",
      "ip3-calcium signaling",
    ],
    type: "Signaling pathway",
    source:
      "IP3 released when phospholipase C cleaves PIP2 downstream of Gq GPCRs (and some RTK pathways)",
    receptor:
      "IP3 receptors on endoplasmic reticulum release Ca²⁺; Ca²⁺ binds calmodulin and activates calmodulin-dependent kinases and myosin light-chain kinase (MLCK)",
    function:
      "PLC → IP3 diffuses to ER → IP3 receptor opens → Ca²⁺ efflux into cytosol → Ca²⁺–calmodulin complex activates MLCK (smooth muscle contraction), CaM kinases, and other enzymes; cytosolic Ca²⁺ is rapidly cleared by pumps and buffers.",
    clinicalRelevance: [
      "Smooth muscle contraction (vascular, bronchial, GI) via Gq → IP3 → Ca²⁺ → MLCK",
      "Exocrine secretion (salivary, pancreatic) uses IP3-mediated Ca²⁺ spikes",
      "Digitalis increases intracellular Ca²⁺ by a separate mechanism (Na⁺/K⁺-ATPase), not IP3",
      "Ryanodine receptors release Ca²⁺ from sarcoplasmic reticulum in muscle (related but distinct from IP3 receptor on ER)",
    ],
    boardsPearls: [
      "Gq → PLC → IP3 + DAG from PIP2",
      "IP3 raises cytosolic Ca²⁺ from ER stores; DAG activates PKC",
      "Ca²⁺–calmodulin activates MLCK → smooth muscle contraction",
      "Same Gq receptor often activates both PKC (DAG) and Ca²⁺ (IP3) arms",
    ],
    distinguishFrom: [
      "cAMP/PKA pathway — no IP3 or ER Ca²⁺ release",
      "DAG/PKC pathway — lipid second messenger from same PLC step, different downstream kinase",
      "Voltage-gated Ca²⁺ channels — membrane depolarization entry, not IP3 receptor",
    ],
    pediatrics:
      "Bronchoconstriction and vascular tone in children use the same Gq–IP3–Ca²⁺ signaling; malignant hyperthermia involves abnormal sarcoplasmic reticulum Ca²⁺ release (ryanodine receptor), not IP3 pathway defect.",
  },
  {
    id: "erythropoietin",
    name: "Erythropoietin",
    etymology: "Greek erythros = red + poiein = to make + -in = protein suffix",
    aliases: [
      "erythropoietin",
      "erythropoetin",
      "epo",
      "epogen",
      "hematopoietin",
    ],
    type: "Peptide hormone",
    source:
      "Primarily renal peritubular interstitial cells in adults (liver in fetus); hypoxia-inducible factor (HIF) upregulates EPO transcription when O₂ delivery falls",
    receptor:
      "EPO receptor (cytokine receptor with associated JAK2) on erythroid progenitor cells in bone marrow",
    function:
      "Stimulates survival, proliferation, and differentiation of late erythroid progenitors → increased red blood cell mass and oxygen-carrying capacity.",
    clinicalRelevance: [
      "Anemia of chronic kidney disease from relative EPO deficiency",
      "Recombinant epoetin alfa/darbepoetin treats renal and chemotherapy-related anemia",
      "EPO misuse as performance-enhancing drug (↑ hematocrit)",
      "Polycythemia vera often has low EPO with JAK2 V617F mutation",
      "EPO-secreting tumors (e.g., renal cell carcinoma) can cause secondary polycythemia",
    ],
    boardsPearls: [
      "EPO is produced by kidney in response to hypoxia via HIF",
      "EPO → JAK2 → STAT5 → erythropoiesis",
      "CKD anemia: ↓ EPO + uremia; treat with EPO and iron repletion",
      "PV: ↑ RBC mass with low EPO and JAK2 mutation is classic pattern",
    ],
    distinguishFrom: [
      "Thrombopoietin — megakaryocyte/platelet growth factor, not RBC production",
      "Colony-stimulating factors (G-CSF, GM-CSF) — myeloid lineage, not erythropoiesis",
      "Iron — required for hemoglobin synthesis but not the erythropoietic hormone signal",
    ],
    pediatrics:
      "Premature infants may receive EPO for anemia of prematurity; neonatal polycythemia workup distinguishes dehydration, twin-twin transfusion, and congenital erythrocytosis from EPO-secreting tumors.",
  },
  {
    id: "incretin",
    name: "Incretin",
    etymology: "Latin incretio = secretion inward → gut hormones that stimulate internal (endocrine) insulin release",
    aliases: [
      "incretin",
      "incretins",
      "incretin hormone",
      "incretin hormones",
      "incretin effect",
      "gut incretin",
      "gut incretins",
      "gip",
      "gastric inhibitory polypeptide",
      "glucose-dependent insulinotropic polypeptide",
    ],
    type: "Peptide hormone",
    source:
      "GLP-1 from intestinal L cells (distal ileum/colon); GIP from K cells (duodenum/jejunum) — both released after nutrient ingestion",
    receptor:
      "GLP-1 receptor and GIP receptor (GPCRs) on pancreatic β cells and other tissues; GLP-1 also slows gastric emptying via vagal/CNS pathways",
    function:
      "Amplify glucose-stimulated insulin secretion from pancreatic β cells after oral nutrient intake — the incretin effect explains why oral glucose provokes greater insulin release than intravenous glucose at matched glycemia.",
    clinicalRelevance: [
      "Type 2 diabetes — reduced incretin effect contributes to impaired postprandial insulin secretion",
      "GLP-1 receptor agonists (exenatide, liraglutide) mimic incretin → ↑ insulin, ↓ glucagon, ↓ appetite, slow gastric emptying",
      "DPP-4 inhibitors (sitagliptin, saxagliptin) prolong endogenous GLP-1/GIP by blocking dipeptidyl peptidase-4 degradation",
      "Incretin-based therapies generally low hypoglycemia risk when used without insulin or sulfonylureas (glucose-dependent action)",
    ],
    boardsPearls: [
      "Incretin effect = oral glucose → more insulin than IV glucose at same blood glucose",
      "Main incretins: GLP-1 (L cells) and GIP (K cells)",
      "GLP-1 → ↑ insulin, ↓ glucagon, slow gastric emptying, ↓ appetite",
      "DPP-4 degrades GLP-1 — DPP-4 inhibitors boost endogenous incretin levels",
      "vs insulin — incretins are gut hormones that signal β cells; insulin is the β-cell product",
    ],
    distinguishFrom: [
      "Insulin — β-cell hormone product; incretins stimulate its release",
      "Glucagon — raises glucose; GLP-1 suppresses glucagon secretion",
      "Amylin — co-secreted with insulin from β cells; slows gastric emptying but is not an incretin",
      "Sulfonylurea — closes KATP channels directly; not glucose/incretin dependent",
    ],
    pediatrics:
      "Incretin physiology applies in adolescents with type 2 diabetes; GLP-1 agonists are used in selected pediatric T2DM when indicated, but type 1 diabetes still requires insulin replacement.",
  },
  {
    id: "glp-1",
    name: "GLP-1",
    etymology: "glucagon-like = structurally related to glucagon + peptide-1 = first proglucagon-derived isoform",
    aliases: [
      "glp-1",
      "glp1",
      "glp 1",
      "glucagon-like peptide-1",
      "glucagon like peptide 1",
      "glucagon-like peptide 1",
    ],
    type: "Peptide hormone",
    source:
      "Intestinal L cells (distal ileum and colon) — released postprandially after nutrient exposure; also from brainstem neurons",
    receptor:
      "GLP-1 receptor (GPCR) on pancreatic β cells, gastric smooth muscle, and hypothalamus; couples to cAMP/PKA signaling",
    function:
      "Glucose-dependent insulin secretion from β cells, suppression of glucagon, delayed gastric emptying, and central satiety signaling — key incretin hormone accounting for much of the oral vs IV glucose insulin difference.",
    clinicalRelevance: [
      "Reduced incretin effect in type 2 diabetes",
      "GLP-1 receptor agonists (exenatide, liraglutide, semaglutide) — injectable mimetics with weight loss and CV/renal benefits",
      "Degraded by dipeptidyl peptidase-4 (DPP-4) — DPP-4 inhibitors prolong endogenous GLP-1",
      "Native GLP-1 has very short half-life (~2 min) due to DPP-4 cleavage",
    ],
    boardsPearls: [
      "GLP-1 from intestinal L cells after meals",
      "GLP-1 → ↑ insulin (glucose-dependent), ↓ glucagon, slow gastric emptying, ↓ appetite",
      "DPP-4 degrades GLP-1 — sitagliptin and other gliptins block this",
      "GLP-1 agonists cause weight loss; DPP-4 inhibitors are weight-neutral",
      "vs GIP — second incretin from K cells; both amplify insulin secretion",
    ],
    distinguishFrom: [
      "GIP — duodenal/jejunal K-cell incretin, not L-cell GLP-1",
      "Glucagon — raises glucose; GLP-1 suppresses glucagon",
      "GLP-2 — separate proglucagon product promoting intestinal growth, not insulinotropic",
      "DPP-4 — enzyme that degrades GLP-1, not the hormone",
    ],
    pediatrics:
      "GLP-1 physiology is relevant in adolescent type 2 diabetes; type 1 diabetes still requires insulin regardless of incretin status.",
  },
  {
    id: "angiotensin-i",
    name: "Angiotensin I",
    etymology: "Latin angio = vessel + tension = stretch + -in = protein suffix + I = first cleavage product",
    aliases: [
      "angiotensin i",
      "angiotensin 1",
      "ang i",
      "at i",
    ],
    type: "Peptide hormone",
    source:
      "Generated when renin (from juxtaglomerular cells) cleaves angiotensinogen (hepatocyte-derived) in plasma",
    receptor:
      "Minimal direct physiologic activity at low concentrations; converted to angiotensin II by angiotensin-converting enzyme (ACE, primarily pulmonary endothelium)",
    function:
      "Inactive decapeptide intermediate in the RAAS cascade; serves as substrate for ACE (and chymase in some tissues) to produce active angiotensin II.",
    clinicalRelevance: [
      "↑ in renin-secreting states (renal artery stenosis, diuretic use, heart failure)",
      "ACE inhibitors block conversion of Ang I → Ang II",
      "Direct renin inhibitors (aliskiren) reduce Ang I formation upstream",
    ],
    boardsPearls: [
      "Renin → cleaves angiotensinogen → angiotensin I (inactive decapeptide)",
      "ACE converts Ang I → Ang II (active octapeptide)",
      "↑ renin activity → ↑ Ang I and (unless ACE blocked) ↑ Ang II",
      "Ang I has little direct pressor effect — must be converted to Ang II",
    ],
    distinguishFrom: [
      "Angiotensin II — active octapeptide; vasoconstrictor, aldosterone stimulator",
      "Angiotensinogen — liver precursor protein (renin substrate)",
      "Renin — protease that creates Ang I from angiotensinogen",
      "ACE — enzyme that converts Ang I to Ang II",
    ],
    pediatrics:
      "Fetal RAAS is active; ACE inhibitor exposure in utero disrupts angiotensin II–dependent renal development — teratogenic in pregnancy.",
  },
  {
    id: "angiotensin-ii",
    name: "Angiotensin II",
    etymology: "Latin angio = vessel + tension = stretch + -in = protein suffix + II = second active peptide",
    aliases: [
      "angiotensin ii",
      "angiotensin 2",
      "ang ii",
      "ang 2",
      "at ii",
      "angiotensin-ii",
      "angiotensin-2",
      "angiotensin two",
    ],
    type: "Peptide hormone",
    source:
      "Angiotensin I converted by ACE (angiotensin-converting enzyme, kininase II) on pulmonary and systemic endothelium; also generated locally by chymase in some tissues",
    receptor:
      "AT1 receptor (Gq-coupled GPCR) — vasoconstriction, aldosterone release, sympathetic activation, thirst; AT2 receptor — counter-regulatory effects in development and tissue repair",
    function:
      "Potent vasoconstrictor and central effector of RAAS: ↑ systemic vascular resistance, preferentially constricts efferent arteriole to preserve GFR in hypovolemia, stimulates adrenal aldosterone release, ↑ proximal tubule Na⁺ reabsorption, and stimulates ADH and thirst.",
    clinicalRelevance: [
      "Central to blood pressure regulation and volume homeostasis",
      "ACE inhibitors and ARBs block Ang II effects — cornerstone of HTN, HF, and diabetic nephropathy therapy",
      "↑ Ang II in renal artery stenosis, heart failure, cirrhosis (effective hypovolemia)",
      "ACE also degrades bradykinin — ACE inhibitor cough/angioedema from ↑ bradykinin",
      "Aldosterone escape may occur with chronic ACE inhibition",
    ],
    boardsPearls: [
      "Ang II via AT1 (Gq): vasoconstriction, ↑ aldosterone, ↑ Na⁺ reabsorption, ↑ ADH",
      "Preferential efferent arteriole constriction → ↑ GFR preservation in early hypovolemia",
      "ACE = kininase II — converts Ang I → Ang II and breaks down bradykinin",
      "ARBs block AT1 without affecting bradykinin — less cough than ACE inhibitors",
      "Captopril/enalapril/lisinopril = ACE inhibitors; losartan = ARB",
      "Stimulates zona glomerulosa aldosterone release — links RAAS to mineralocorticoid axis",
      "Licorice (glycyrrhizin) mimics mineralocorticoid excess downstream of Ang II–aldosterone pathway by blocking 11β-HSD2",
    ],
    distinguishFrom: [
      "Angiotensin I — inactive precursor; requires ACE conversion",
      "Aldosterone — downstream adrenal hormone stimulated by Ang II; acts on collecting duct",
      "Renin — upstream protease; ACE inhibitors ↑ renin by blocking Ang II feedback",
      "Norepinephrine — direct sympathetic vasoconstrictor, not RAAS peptide",
    ],
    pediatrics:
      "Neonates rely on RAAS for renal perfusion and salt handling; ACE inhibitors/ARBs contraindicated in pregnancy and generally avoided in infants except specialist use.",
  },
  {
    id: "raas",
    name: "RAAS",
    etymology: "RAA = renin-angiotensin-aldosterone + S = system",
    aliases: [
      "raas",
      "renin-angiotensin-aldosterone system",
      "renin angiotensin aldosterone system",
      "renin-angiotensin system",
      "renin angiotensin system",
    ],
    type: "Signaling pathway",
    source:
      "Activated by ↓ renal perfusion pressure, ↓ NaCl at macula densa, and ↑ sympathetic β1 tone → juxtaglomerular renin release",
    receptor:
      "Renin acts on angiotensinogen; ACE converts Ang I to Ang II; Ang II binds AT1 receptors; aldosterone acts on mineralocorticoid receptor in collecting duct",
    function:
      "Integrated hormonal cascade restoring blood pressure and volume: renin → angiotensin I → ACE → angiotensin II → vasoconstriction + aldosterone → Na⁺ and water retention + ↑ ADH/thirst; also constricts efferent arteriole to maintain GFR.",
    clinicalRelevance: [
      "Activated in hypovolemia, heart failure, cirrhosis, and renal artery stenosis",
      "ACE inhibitors, ARBs, and aldosterone antagonists are key cardiovascular and renal drugs",
      "Primary hyperaldosteronism — autonomous aldosterone with suppressed renin",
      "Secondary hyperaldosteronism — ↑ renin driving ↑ aldosterone (renal artery stenosis, diuretics)",
      "Bartter/Gitelman and loop/thiazide diuretics activate RAAS via macula densa sensing",
    ],
    boardsPearls: [
      "RAAS cascade: renin → Ang I → ACE → Ang II → aldosterone + vasoconstriction",
      "JG cells release renin; macula densa senses NaCl; liver makes angiotensinogen",
      "Ang II preferentially constricts efferent arteriole — preserves GFR when RPF falls",
      "ACE inhibitors: ↓ Ang II, ↑ bradykinin, ↑ renin; contraindicated in bilateral renal artery stenosis/pregnancy",
      "↑ renin + ↑ aldosterone → secondary hyperaldosteronism; ↓ renin + ↑ aldosterone → Conn syndrome",
      "Counter-regulatory: ANP/BNP promote natriuresis and ↓ renin/aldosterone",
    ],
    distinguishFrom: [
      "ADH (vasopressin) — separate volume/osmolality axis; Ang II also stimulates ADH",
      "Sympathetic nervous system — parallel pressor response; β1 drives renin release",
      "RAAS vs RAS abbreviation — boards use RAAS when aldosterone arm emphasized",
      "Local renin-angiotensin systems — tissue ACE/Ang II outside classic renal JGA axis",
    ],
    pediatrics:
      "Neonatal effective hypovolemia (dehydration, sepsis) activates RAAS; ACE inhibitor fetopathy from in utero RAAS blockade causes renal agenesis-like maldevelopment and oligohydramnios.",
  },
  {
    id: "alpha-2-adrenergic-receptor",
    name: "Alpha-2 Adrenergic Receptor",
    etymology: "Greek alpha = first letter + -ergic = work/active + 2 = subtype + receptor = receiver",
    aliases: [
      "alpha-2 adrenergic receptor",
      "alpha-2 adrenergic receptors",
      "α2 adrenergic receptor",
      "α2 adrenergic receptors",
      "alpha-2 receptor",
      "alpha-2 receptors",
      "α2 receptor",
      "α2 receptors",
      "alpha 2 adrenergic receptor",
    ],
    type: "Signaling pathway",
    source:
      "Postsynaptic on brainstem and spinal cord neurons; presynaptic autoreceptors on sympathetic nerve terminals; also on pancreatic β cells and platelets",
    receptor: "Gi/Go-coupled GPCR → inhibits adenylyl cyclase → ↓ cAMP",
    function:
      "Presynaptic α2 activation inhibits norepinephrine release (negative feedback); central α2 activation ↓ sympathetic outflow → ↓ BP and sedation; reduces insulin secretion from β cells.",
    clinicalRelevance: [
      "Clonidine and dexmedetomidine — central α2 agonists for hypertension and sedation",
      "Brimonidine — α2 agonist eye drops lower IOP in glaucoma",
      "Yohimbine — α2 antagonist (historical use)",
      "Tricyclic antidepressants and MAOIs can block α2 autoreceptors → ↑ NE release",
    ],
    boardsPearls: [
      "α2 = Gi → ↓ cAMP (opposite of β2 Gs)",
      "Presynaptic α2 autoreceptor — less NE release when activated",
      "Clonidine/dexmedetomidine — central α2 agonists",
      "vs α1 — α1 is Gq vasoconstriction; α2 is mainly Gi inhibitory",
      "vs β2 — β2 bronchodilation via Gs ↑ cAMP",
    ],
    distinguishFrom: [
      "Alpha-1 adrenergic receptor — Gq → vasoconstriction, mydriasis",
      "Beta-1 adrenergic receptor — Gs → ↑ heart rate and contractility",
      "Imidazoline receptors — some clonidine effects also involve non-adrenergic receptors",
    ],
    pediatrics:
      "Clonidine used cautiously in pediatric ADHD and tic disorders; abrupt withdrawal can cause rebound hypertension.",
  },
  {
    id: "beta-2-adrenergic-receptor",
    name: "Beta-2 Adrenergic Receptor",
    etymology: "Greek beta = second letter + -ergic = work/active + 2 = subtype + receptor = receiver",
    aliases: [
      "beta-2 adrenergic receptor",
      "beta-2 adrenergic receptors",
      "β2 adrenergic receptor",
      "β2 adrenergic receptors",
      "beta-2 receptor",
      "beta-2 receptors",
      "β2 receptor",
      "β2 receptors",
      "beta 2 adrenergic receptor",
      "b2 receptor",
    ],
    type: "Signaling pathway",
    source:
      "Bronchial smooth muscle, uterine myometrium, skeletal muscle vasculature, liver (glycogenolysis), and pancreatic β cells",
    receptor: "Gs-coupled GPCR → activates adenylyl cyclase → ↑ cAMP → PKA",
    function:
      "Bronchial smooth muscle relaxation (bronchodilation), uterine relaxation (tocolysis), vasodilation in skeletal muscle beds, stimulation of insulin and glucagon secretion, and hepatic glycogenolysis.",
    clinicalRelevance: [
      "Albuterol/salbutamol, terbutaline — selective β2 agonists for asthma and COPD",
      "Ritodrine/terbutaline — tocolysis for preterm labor (↓ uterine contractions)",
      "Epinephrine activates β1 and β2 (and α receptors) — bronchodilation in anaphylaxis",
      "β-blockers without selectivity block β2 → bronchospasm risk in asthmatics",
    ],
    boardsPearls: [
      "β2 = Gs → ↑ cAMP → bronchodilation and uterine relaxation",
      "Albuterol is selective β2 agonist for asthma",
      "Nonselective β-blockers (propranolol) contraindicated in asthma — block β2 bronchodilation",
      "Terbutaline/ritodrine — tocolysis via uterine β2",
      "vs β1 — β1 mainly heart (↑ HR, contractility)",
    ],
    distinguishFrom: [
      "Beta-1 adrenergic receptor — cardiac Gs effects, not bronchial selectivity",
      "Alpha-1 adrenergic receptor — Gq vasoconstriction",
      "Muscarinic M3 receptor — ACh-mediated bronchoconstriction (blocked by ipratropium)",
    ],
    pediatrics:
      "Albuterol is first-line bronchodilator in pediatric asthma; β-blocker exposure can precipitate severe bronchospasm in reactive airway disease.",
  },
  {
    id: "histamine-h2-receptor",
    name: "Histamine H2 Receptor",
    etymology: "Greek histos = tissue + amine + H2 = second histamine receptor subtype",
    aliases: [
      "histamine h2 receptor",
      "histamine h2 receptors",
      "h2 receptor",
      "h2 receptors",
      "h2 histamine receptor",
      "h2 histamine receptors",
      "histamine-2 receptor",
    ],
    type: "Signaling pathway",
    source:
      "Gastric parietal cells (primary boards target); also cardiac, uterine, and vascular smooth muscle",
    receptor: "Gs-coupled GPCR on parietal cells → ↑ cAMP → activates H⁺/K⁺-ATPase proton pump",
    function:
      "Stimulates gastric acid secretion from parietal cells after histamine release from enterochromaffin-like cells; histamine acts with gastrin and acetylcholine (M3) to potentiate acid output.",
    clinicalRelevance: [
      "H2 blockers: famotidine, ranitidine, cimetidine — ↓ gastric acid in PUD and GERD",
      "Cimetidine inhibits CYP450 and has antiandrogenic side effects",
      "Carcinoid flushing partially mediated by histamine — H2 blockers adjunctive",
      "Now largely supplanted by PPIs for acid suppression but remain boards-relevant",
    ],
    boardsPearls: [
      "H2 on parietal cells = Gs → ↑ cAMP → ↑ acid secretion",
      "H1 vs H2: H1 allergy/itch (often Gq); H2 gastric acid (Gs)",
      "Triple acid stimulation: histamine (H2) + gastrin + ACh (M3) on parietal cell",
      "Famotidine/ranitidine = H2 blockers; omeprazole = PPI (different target)",
      "Cimetidine — CYP inhibition and gynecomastia",
    ],
    distinguishFrom: [
      "Histamine H1 receptor — allergy, pruritus, bronchoconstriction; antihistamines (diphenhydramine)",
      "Muscarinic M3 receptor — also stimulates parietal acid via Gq, blocked by atropine",
      "Gastrin receptor — separate parietal cell secretagogue",
    ],
    pediatrics:
      "H2 blockers used in pediatric GERD/PUD when indicated; PPIs increasingly preferred for erosive disease.",
  },
  {
    id: "muscarinic-m3-receptor",
    name: "Muscarinic M3 Receptor",
    etymology: "Latin musca = fly (muscarine from Amanita muscaria) + -inic = related + M3 = third muscarinic subtype",
    aliases: [
      "muscarinic m3 receptor",
      "muscarinic m3 receptors",
      "m3 receptor",
      "m3 receptors",
      "m3 muscarinic receptor",
      "m3 muscarinic receptors",
      "muscarinic acetylcholine m3 receptor",
    ],
    type: "Signaling pathway",
    source:
      "Parasympathetic effector organs: smooth muscle (bronchial, GI, bladder detrusor), exocrine glands, gastric parietal cells; vascular endothelium (indirect vasodilation via NO)",
    receptor: "Gq-coupled GPCR → phospholipase C → IP3/DAG → ↑ intracellular Ca²⁺",
    function:
      "Mediates parasympathetic 'rest and digest' responses: bronchoconstriction, increased GI motility and secretion, bladder detrusor contraction, pupillary sphincter constriction (miosis), and contribution to gastric acid secretion.",
    clinicalRelevance: [
      "Atropine/scopolamine — nonselective muscarinic antagonists block M3 (and others)",
      "Ipratropium/tiotropium — inhaled M3 antagonists for COPD/asthma bronchodilation",
      "Oxybutynin/solifenacin — M3 antagonists for overactive bladder",
      "Pilocarpine — muscarinic agonist for glaucoma (miosis)",
      "Organophosphate poisoning — excess ACh overstimulates M3 → SLUDGE + bronchospasm",
    ],
    boardsPearls: [
      "M3 = Gq → IP3/Ca²⁺ → smooth muscle contraction and gland secretion",
      "M3 on detrusor muscle — contraction for voiding (pelvic splanchnic S2–S4)",
      "Atropine blocks M3 → ↓ secretions, mydriasis, tachycardia (also M2 on heart)",
      "Ipratropium blocks M3 in lungs → bronchodilation",
      "vs M2 — M2 on heart is Gi ↓ HR; M3 on smooth muscle is Gq contraction",
    ],
    distinguishFrom: [
      "Nicotinic acetylcholine receptor — ion channel at NMJ and autonomic ganglia",
      "Muscarinic M2 receptor — Gi on cardiac SA node ↓ heart rate",
      "Beta-2 adrenergic receptor — epinephrine-mediated bronchodilation (Gs), not ACh",
      "Histamine H1 receptor — also Gq smooth muscle effects in allergy",
    ],
    pediatrics:
      "Anticholinergics reduce secretions before surgery; paradoxical CNS excitation possible in children with atropine overdose.",
  },
  {
    id: "histamine-h1-receptor",
    name: "Histamine H1 Receptor",
    etymology:
      "Greek histos = tissue + amine + H1 = first histamine receptor subtype + receptor = receiver",
    aliases: [
      "histamine h1 receptor",
      "histamine h1 receptors",
      "h1 receptor",
      "h1 receptors",
      "h1 histamine receptor",
      "h1 histamine receptors",
      "histaminergic h1",
      "histaminergic h1 receptor",
      "histaminergic h1 receptors",
      "histamine-1 receptor",
    ],
    type: "Signaling pathway",
    source:
      "Smooth muscle (bronchial, GI, vascular), endothelial cells, sensory nerve endings, CNS histaminergic neurons, and immune cells",
    receptor: "Gq-coupled GPCR → phospholipase C → IP3/DAG → ↑ intracellular Ca²⁺",
    function:
      "Mediates classic allergic and inflammatory effects of histamine: bronchoconstriction, vasodilation with increased capillary permeability, pruritus, and CNS arousal; first-generation H1 blockers cross the BBB and cause sedation.",
    clinicalRelevance: [
      "First-generation H1 antihistamines (diphenhydramine, chlorpheniramine) — allergy, urticaria, motion sickness; sedation and anticholinergic effects",
      "Second-generation H1 blockers (loratadine, cetirizine, fexofenadine) — less CNS penetration, less sedation",
      "Type I hypersensitivity — IgE cross-linking on mast cells releases histamine → H1-mediated wheal, flare, bronchospasm",
      "Antipsychotics and TCAs block H1 → sedation and weight gain",
      "Epinephrine is first-line in anaphylaxis; antihistamines are adjunct only",
    ],
    boardsPearls: [
      "H1 = Gq → IP3/Ca²⁺ → bronchoconstriction, vasodilation, pruritus",
      "H1 vs H2: H1 allergy/itch (Gq); H2 gastric acid on parietal cells (Gs)",
      "First-gen H1 blockers cross BBB → sedation; second-gen less sedating",
      "Diphenhydramine — H1 block + antimuscarinic → anticholinergic toxidrome in overdose",
      "vs H2 — famotidine blocks gastric acid, not allergy",
    ],
    distinguishFrom: [
      "Histamine H2 receptor — Gs on parietal cells → gastric acid secretion",
      "Muscarinic M3 receptor — also Gq smooth muscle effects but ACh-mediated, not histamine",
      "Histamine — ligand released from mast cells; not the receptor protein",
      "Leukotrienes — slower mast cell mediators in asthma late phase",
    ],
    pediatrics:
      "First-generation H1 antihistamines used cautiously in young children; paradoxical excitation possible. Food allergy anaphylaxis — H1 blockers adjunct to epinephrine.",
  },
  {
    id: "muscarinic-m1-receptor",
    name: "Muscarinic M1 Receptor",
    etymology:
      "Latin musca = fly (muscarine from Amanita muscaria) + -inic = related + M1 = first muscarinic subtype + receptor = receiver",
    aliases: [
      "muscarinic m1 receptor",
      "muscarinic m1 receptors",
      "muscarinic m1",
      "m1 receptor",
      "m1 receptors",
      "m1 muscarinic receptor",
      "m1 muscarinic receptors",
      "muscarinic acetylcholine m1 receptor",
      "muscarinic acetylcholine m1 receptors",
    ],
    type: "Signaling pathway",
    source:
      "CNS (cortical and hippocampal neurons — cognition), gastric parietal cells, and autonomic ganglia (minor postsynaptic role)",
    receptor: "Gq-coupled GPCR → phospholipase C → IP3/DAG → ↑ intracellular Ca²⁺",
    function:
      "Predominantly postsynaptic excitatory muscarinic receptor in the brain supporting learning, memory, and cortical arousal; on gastric parietal cells contributes (with H2 and gastrin) to acid secretion; nonselective muscarinic antagonists block M1 along with other subtypes.",
    clinicalRelevance: [
      "Atropine/scopolamine — nonselective muscarinic antagonists block M1 → anticholinergic toxidrome and delirium",
      "Donepezil/rivastigmine — AChE inhibitors ↑ synaptic ACh → enhanced M1 (and other muscarinic) signaling in Alzheimer disease",
      "Pilocarpine — muscarinic agonist used in glaucoma (primarily M3 on iris sphincter)",
      "Antipsychotics with anticholinergic activity block M1 → cognitive impairment and dry mouth",
      "Organophosphate poisoning — excess ACh overstimulates all muscarinic subtypes",
    ],
    boardsPearls: [
      "M1 = Gq in CNS and parietal cells — cognition and acid secretion",
      "M1 vs M2: M1 mainly CNS/GI excitation (Gq); M2 on SA node is Gi ↓ HR",
      "M1 vs M3: M3 dominates peripheral smooth muscle and glands; M1 more CNS/parietal",
      "AChE inhibitors (donepezil) enhance cholinergic tone at M1 in Alzheimer disease",
      "Atropine blocks all muscarinic subtypes nonselectively",
    ],
    distinguishFrom: [
      "Muscarinic M2 receptor — Gi on cardiac SA/AV node ↓ heart rate",
      "Muscarinic M3 receptor — Gq on smooth muscle, glands, and bladder detrusor",
      "Nicotinic acetylcholine receptor — ion channel at NMJ and autonomic ganglia",
      "Histamine H2 receptor — Gs gastric acid, not muscarinic",
    ],
    pediatrics:
      "Atropine overdose in children can cause hyperthermia, delirium, and paradoxical CNS excitation from M1 blockade in an immature CNS.",
  },
  {
    id: "serotonin-5-ht2a-receptor",
    name: "Serotonin 5-HT2A Receptor",
    etymology:
      "5-hydroxytryptamine (5-HT) + 2A = second family subtype A + receptor = receiver",
    aliases: [
      "serotonin 5-ht2a receptor",
      "serotonin 5-ht2a receptors",
      "5-ht2a receptor",
      "5-ht2a receptors",
      "5ht2a receptor",
      "5ht2a receptors",
      "5-ht-2a receptor",
      "5-ht-2a receptors",
      "serotonergic 5-ht2a",
      "serotonergic 5-ht2a receptor",
      "serotonergic 5-ht2a receptors",
      "ht2a receptor",
      "ht2a receptors",
    ],
    type: "Signaling pathway",
    source:
      "Cortical and limbic pyramidal neurons, platelets, vascular smooth muscle, and peripheral tissues",
    receptor: "Gq-coupled GPCR → phospholipase C → IP3/DAG → ↑ intracellular Ca²⁺",
    function:
      "Key postsynaptic serotonergic receptor mediating cortical signaling, mood, perception, and vascular tone; activation by psychedelics causes hallucinations; antagonism by atypical antipsychotics reduces psychosis and may lessen extrapyramidal symptoms when combined with D2 blockade.",
    clinicalRelevance: [
      "Atypical antipsychotics (risperidone, olanzapine, quetiapine) — 5-HT2A antagonism with D2 blockade → antipsychotic effect with less EPS than typical antipsychotics",
      "LSD and psilocybin — 5-HT2A agonists → perceptual distortion and hallucinations",
      "Serotonin syndrome — excess serotonergic signaling (hyperthermia, clonus, autonomic instability) from SSRI + MAOI or other combinations",
      "Trazodone — 5-HT2A antagonist contributing to sedation and antidepressant effect",
      "Clozapine — potent 5-HT2A antagonism with broad receptor profile",
    ],
    boardsPearls: [
      "5-HT2A = Gq → IP3/Ca²⁺ — cortical signaling, vascular effects",
      "Atypical antipsychotics: D2 block + 5-HT2A block → less EPS than haloperidol",
      "LSD/psilocybin — 5-HT2A agonists (boards association)",
      "5-HT2A vs 5-HT3: 5-HT3 is ion channel (ondansetron target); 5-HT2A is Gq GPCR",
      "5-HT2A vs 5-HT1B/1D: triptans are 5-HT1 agonists for migraine, not 5-HT2A",
    ],
    distinguishFrom: [
      "Serotonin 5-HT3 receptor — ligand-gated ion channel; ondansetron antagonist for nausea",
      "Serotonin 5-HT1B/1D receptors — Gi/Gq subtypes; triptan targets for migraine",
      "Dopamine D2 receptor — primary antipsychotic target; often co-blocked with 5-HT2A",
      "Serotonin — neurotransmitter ligand from tryptophan; not the receptor",
    ],
    pediatrics:
      "SSRIs used cautiously in pediatric depression; serotonergic drug combinations increase serotonin syndrome risk at any age.",
  },
  {
    id: "alpha-1-adrenergic-receptor",
    name: "Alpha-1 Adrenergic Receptor",
    etymology:
      "Greek alpha = first letter + -ergic = work/active + 1 = subtype + receptor = receiver",
    aliases: [
      "alpha-1 adrenergic receptor",
      "alpha-1 adrenergic receptors",
      "alpha-1 adrenergic",
      "alpha-1 adrenergics",
      "α1 adrenergic",
      "α1 adrenergic receptor",
      "α1 adrenergic receptors",
      "alpha-1 receptor",
      "alpha-1 receptors",
      "α1 receptor",
      "α1 receptors",
      "alpha 1 adrenergic receptor",
      "alpha 1 adrenergic receptors",
      "a1 receptor",
      "a1 receptors",
    ],
    type: "Signaling pathway",
    source:
      "Vascular smooth muscle, pupillary dilator muscle, bladder trigone and sphincter, prostatic smooth muscle, and hepatic portal system",
    receptor: "Gq-coupled GPCR → phospholipase C → IP3/DAG → ↑ intracellular Ca²⁺ → smooth muscle contraction",
    function:
      "Mediates sympathetic vasoconstriction, mydriasis (pupillary dilation), bladder outlet resistance, and prostatic smooth muscle tone; norepinephrine and epinephrine activate α1 at higher concentrations after β effects.",
    clinicalRelevance: [
      "Prazosin, terazosin, tamsulosin — selective α1 blockers for hypertension and BPH (tamsulosin more uroselective)",
      "Phenoxybenzamine — irreversible α-blocker used before pheochromocytoma surgery",
      "Pheochromocytoma — must block α1 before β to prevent unopposed α vasoconstriction",
      "Antipsychotics and TCAs block α1 → orthostatic hypotension and reflex tachycardia",
      "Epinephrine at high dose → α1 vasoconstriction predominates over β2 bronchodilation",
    ],
    boardsPearls: [
      "α1 = Gq → IP3/Ca²⁺ → vasoconstriction, mydriasis, BPH urinary obstruction",
      "Alpha before beta in pheochromocytoma — unopposed α1 if β blocked first",
      "Tamsulosin — α1A-selective for BPH with less orthostatic hypotension",
      "Phenylephrine — selective α1 agonist (mydriatic, vasoconstrictor)",
      "vs α2 — α1 postsynaptic Gq contraction; α2 presynaptic Gi ↓ NE release",
    ],
    distinguishFrom: [
      "Alpha-2 adrenergic receptor — Gi presynaptic autoreceptor and central sympatholytic target",
      "Beta-1 adrenergic receptor — Gs cardiac ↑ HR and contractility",
      "Beta-2 adrenergic receptor — Gs bronchodilation and uterine relaxation",
      "Muscarinic M3 receptor — also Gq smooth muscle contraction but ACh-mediated",
    ],
    pediatrics:
      "Decongestants with α-agonist activity (pseudoephedrine) used cautiously in young children; pheochromocytoma rare in pediatrics but same α-before-β principle applies.",
  },
  {
    id: "dopamine-d2-receptor",
    name: "Dopamine D2 Receptor",
    etymology:
      "Dopamine + D2 = second dopamine receptor family subtype + receptor = receiver",
    aliases: [
      "dopamine d2 receptor",
      "dopamine d2 receptors",
      "d2 receptor",
      "d2 receptors",
      "d2 dopamine receptor",
      "d2 dopamine receptors",
      "dopaminergic d2",
      "dopaminergic d2 receptor",
      "dopaminergic d2 receptors",
      "drd2",
      "drd2 receptor",
    ],
    type: "Signaling pathway",
    source:
      "Striatum (nigrostriatal and mesolimbic pathways), pituitary lactotrophs, chemoreceptor trigger zone, and presynaptic dopaminergic terminals (autoreceptors)",
    receptor: "Gi/Go-coupled GPCR → inhibits adenylyl cyclase → ↓ cAMP",
    function:
      "Primary postsynaptic target of antipsychotic drugs; mesolimbic D2 blockade reduces positive psychotic symptoms; nigrostriatal D2 blockade causes extrapyramidal symptoms and tardive dyskinesia; pituitary D2 activation (or blockade by antipsychotics) regulates prolactin secretion.",
    clinicalRelevance: [
      "Typical antipsychotics (haloperidol, fluphenazine) — potent D2 blockade → EPS and hyperprolactinemia",
      "Atypical antipsychotics — D2 blockade plus 5-HT2A antagonism → antipsychotic effect with lower EPS risk",
      "Bromocriptine/cabergoline — D2 agonists for prolactinoma and Parkinson disease",
      "Metoclopramide/domperidone — D2 antagonists → antiemetic but risk galactorrhea and EPS",
      "Parkinson disease — ↓ dopamine in substantia nigra → relative D2 understimulation in striatum",
    ],
    boardsPearls: [
      "D2 = Gi → ↓ cAMP — mesolimbic blockade treats psychosis; nigrostriatal blockade → EPS",
      "D2 blockade on lactotrophs → ↑ prolactin → amenorrhea, galactorrhea, gynecomastia",
      "Typical antipsychotics — high D2 affinity → more EPS; atypicals add 5-HT2A block",
      "D2 vs D1: D1 is Gs ↑ cAMP (striatal direct pathway); D2 is Gi (indirect pathway)",
      "Bromocriptine — D2 agonist for prolactinoma",
    ],
    distinguishFrom: [
      "Dopamine D1 receptor — Gs ↑ cAMP; striatal direct pathway; less antipsychotic target",
      "Serotonin 5-HT2A receptor — co-target of atypical antipsychotics reducing EPS",
      "Dopamine — neurotransmitter ligand; Parkinson is deficiency of dopamine, not the receptor",
      "Dopamine at renal doses — low-dose dopamine activates D1 (dilation), not selective D2",
    ],
    pediatrics:
      "Antipsychotic-induced hyperprolactinemia can cause galactorrhea and menstrual irregularity in adolescents; tardive dyskinesia risk with prolonged D2 blockade.",
  },
  {
    id: "gaba-a-receptor",
    name: "GABA-A Receptor",
    etymology:
      "Gamma-aminobutyric acid + A = first GABA receptor class + receptor = receiver",
    aliases: [
      "gaba-a receptor",
      "gaba-a receptors",
      "gaba-a",
      "gabaa",
      "gabaa receptors",
      "gaba a receptor",
      "gaba a receptors",
      "gaba-a ion channel",
      "gaba-a ion channels",
      "gaba-a chloride channel",
      "gaba-a chloride channels",
      "gaba-a receptor channel",
      "type a gaba receptor",
      "type a gaba receptors",
    ],
    type: "Signaling pathway",
    source:
      "Postsynaptic membranes throughout the CNS — especially cortex, thalamus, limbic system, and spinal cord inhibitory synapses",
    receptor:
      "Pentameric ligand-gated Cl⁻ channel (ionotropic); GABA binding → Cl⁻ influx → hyperpolarization; modulated by benzodiazepine, barbiturate, and neurosteroid sites",
    function:
      "Primary fast inhibitory neurotransmission in the CNS; chloride influx hyperpolarizes postsynaptic neurons and raises firing threshold; benzodiazepines increase frequency of channel opening; barbiturates increase duration of opening and can directly gate the channel at high doses.",
    clinicalRelevance: [
      "Benzodiazepines (diazepam, lorazepam, midazolam) — bind benzodiazepine site on GABA-A → anxiolysis, sedation, anticonvulsant, muscle relaxation",
      "Barbiturates (phenobarbital, thiopental) — enhance GABA-A at barbiturate site → CNS depression; overdose risk with respiratory depression",
      "Flumazenil — competitive benzodiazepine antagonist at GABA-A benzodiazepine site",
      "Alcohol and neurosteroids — allosteric GABA-A modulators → CNS depression",
      "Alcohol/benzodiazepine withdrawal — ↓ GABA-A tone → seizures, autonomic hyperactivity",
    ],
    boardsPearls: [
      "GABA-A = Cl⁻ channel — benzos ↑ opening frequency; barbiturates ↑ opening duration",
      "GABA-A vs GABA-B: GABA-A is ionotropic (Cl⁻); GABA-B is metabotropic Gi (baclofen target)",
      "Flumazenil reverses benzodiazepine overdose — not barbiturates",
      "Barbiturate + benzo synergy — both enhance GABA-A → dangerous respiratory depression",
      "Phenobarbital used in neonatal seizures via GABA-A potentiation",
    ],
    distinguishFrom: [
      "GABA-B receptor — Gi-coupled metabotropic receptor; baclofen is agonist",
      "GABA — inhibitory neurotransmitter ligand synthesized from glutamate via GAD",
      "Glycine receptor — Cl⁻ channel inhibitory transmitter in spinal cord",
      "Nicotinic acetylcholine receptor — cation channel excitatory at NMJ, not GABAergic",
    ],
    pediatrics:
      "Neonatal GABAergic signaling is developmentally distinct (GABA can be depolarizing early); phenobarbital enhances GABA-A for neonatal seizures; benzodiazepines used cautiously in infants.",
  },
  {
    id: "aflatoxin",
    name: "Aflatoxin",
    etymology: "Aspergillus flavus toxin — a = Aspergillus + flavus = yellow + toxin",
    aliases: [
      "aflatoxin",
      "aflatoxins",
      "aflatoxin b1",
      "afb1",
    ],
    type: "Metabolite",
    source:
      "Mycotoxin produced by Aspergillus flavus and Aspergillus parasiticus contaminating stored grains, peanuts, and corn in hot, humid climates",
    receptor:
      "Metabolized to epoxide that forms DNA adducts (especially TP53 codon 249 mutation in hepatocytes)",
    function:
      "Potent hepatocarcinogen — no physiologic function; causes mutagenic injury to hepatocytes and synergizes with chronic hepatitis B for hepatocellular carcinoma development.",
    clinicalRelevance: [
      "Major environmental risk factor for hepatocellular carcinoma in sub-Saharan Africa and Asia",
      "Synergistic with chronic HBV infection for HCC",
      "Contamination of food supply in resource-limited settings with poor storage",
      "Acute aflatoxicosis — high-dose ingestion causes acute liver failure (outbreaks)",
    ],
    boardsPearls: [
      "Aflatoxin (Aspergillus) + HBV → hepatocellular carcinoma in endemic regions",
      "TP53 mutation classic association with aflatoxin exposure",
      "vs alcohol — both cause liver disease but aflatoxin is mycotoxin carcinogen",
      "HCC risk factors: cirrhosis, HBV, HCV, aflatoxin, hemochromatosis, alcohol",
    ],
    distinguishFrom: [
      "Alcohol — metabolic hepatotoxin, not fungal mycotoxin",
      "Cyclophosphamide metabolites — bladder carcinogen, not liver mycotoxin",
      "Aromatic amines — bladder/urothelial carcinogen in dye workers",
    ],
    pediatrics:
      "Children in endemic areas exposed via contaminated food; HCC from aflatoxin + HBV typically manifests in adulthood but exposure begins in childhood.",
  },
  {
    id: "glucagon",
    name: "Glucagon",
    etymology: "Greek glykys = sweet + agō = leading (toward glucose) + -in = protein suffix",
    aliases: [
      "glucagon",
      "pancreatic glucagon",
      "hyperglycemic factor",
    ],
    type: "Peptide hormone",
    source:
      "Secreted by pancreatic islet α cells; proglucagon also processed to GLP-1 in intestinal L cells",
    receptor:
      "Glucagon receptor (Gs-coupled GPCR on hepatocytes) → ↑ cAMP → activation of glycogen phosphorylase and gluconeogenic enzymes",
    function:
      "Primary counter-regulatory hormone to insulin — raises blood glucose via hepatic glycogenolysis and gluconeogenesis; also lipolytic in adipose tissue at high levels.",
    clinicalRelevance: [
      "Type 1 diabetes — loss of glucagon counter-regulation worsens hypoglycemia unawareness",
      "Glucagon injection treats severe hypoglycemia when IV access limited",
      "Glucagon bypasses β-receptor blockade in refractory anaphylaxis on β-blockers",
      "Glucagonoma — pancreatic α-cell tumor with necrolytic migratory erythema, diabetes, weight loss",
      "Excess glucagon suppressed by insulin and somatostatin from δ cells",
    ],
    boardsPearls: [
      "α cells secrete glucagon; β cells secrete insulin",
      "Glucagon → ↑ cAMP in liver → glycogenolysis + gluconeogenesis → ↑ glucose",
      "Insulin ↓ glucagon secretion (intra-islet paracrine regulation)",
      "Glucagonoma — rash (necrolytic migratory erythema) + hyperglycemia + anemia",
      "Give glucagon for hypoglycemia or β-blocker overdose anaphylaxis",
      "GLP-1 from L cells is separate incretin product of proglucagon gene",
    ],
    distinguishFrom: [
      "Insulin — lowers glucose; β-cell product",
      "GLP-1 — incretin from intestinal L cells; ↑ insulin, ↓ glucagon",
      "Epinephrine — counter-regulatory catecholamine in hypoglycemia, not pancreatic α-cell hormone",
      "Cortisol and GH — other counter-regulatory hormones with slower onset",
    ],
    pediatrics:
      "Neonates rely on glycogen stores at birth; glucagon response immature in infants — hypoglycemia management emphasizes glucose infusion.",
  },
  {
    id: "somatostatin",
    name: "Somatostatin",
    etymology: "Greek soma = body + statos = standing still + -in = protein suffix",
    aliases: [
      "somatostatin",
      "somatotropin release-inhibiting factor",
      "somatotropin release inhibiting factor",
      "growth hormone inhibiting hormone",
      "growth hormone-inhibiting hormone",
      "sst",
    ],
    type: "Peptide hormone",
    source:
      "Pancreatic islet δ cells, hypothalamic neurons (inhibit GH release), gastric/intestinal D cells, and other neuroendocrine tissues",
    receptor:
      "Somatostatin receptors (SSTR1–5; Gi-coupled) → ↓ cAMP and ↓ Ca²⁺ → inhibited hormone secretion",
    function:
      "Universal inhibitory peptide — suppresses secretion of growth hormone, TSH, glucagon, insulin, gastrin, VIP, and GI secretions; slows gastric emptying and intestinal motility.",
    clinicalRelevance: [
      "Octreotide/lanreotide — somatostatin analogs for carcinoid syndrome, VIPoma, variceal bleeding prophylaxis",
      "Treats secretory diarrhea from neuroendocrine tumors",
      "Inhibits insulin and glucagon — can worsen diabetes or cause hyperglycemia with octreotide",
      "Hypothalamic somatostatin inhibits GH — analog to continuous GnRH suppressing gonadotropins",
    ],
    boardsPearls: [
      "δ cells of pancreatic islets secrete somatostatin",
      "Inhibits GH, TSH, insulin, glucagon, gastrin, VIP",
      "Octreotide = somatostatin analog for carcinoid flush/diarrhea and VIPoma watery diarrhea",
      "Paracrine inhibition of neighboring α and β cells within islet",
      "vs dopamine — also inhibits GH but via different receptor (used in acromegaly adjunct)",
    ],
    distinguishFrom: [
      "Octreotide — synthetic somatostatin analog with longer half-life, not endogenous hormone",
      "Dopamine agonists — inhibit GH via D2 receptors (cabergoline/bromocriptine)",
      "Insulin — lowers glucose; somatostatin inhibits insulin release",
      "Gastrin — stimulates acid secretion; somatostatin inhibits gastrin",
    ],
    pediatrics:
      "Octreotide used in neonatal hyperinsulinism and chylothorax in specialized pediatric settings; somatostatin physiology same across ages.",
  },
  {
    id: "vasoactive-intestinal-peptide",
    name: "Vasoactive Intestinal Peptide (VIP)",
    etymology: "Latin vas = vessel + activus = active + Latin intestinum = intestine + peptos = digested",
    aliases: [
      "vasoactive intestinal peptide",
      "vasoactive intestinal peptides",
      "vasoactive peptide",
      "vasoactive peptides",
      "vip",
      "vip hormone",
    ],
    type: "Peptide hormone",
    source:
      "Parasympathetic neurons and VIPergic enteric neurons in GI tract; also pancreatic islet and adrenal medulla; overproduced by VIPoma (pancreatic neuroendocrine tumor)",
    receptor:
      "VIP receptors VPAC1/VPAC2 (Gs-coupled) → ↑ cAMP → smooth muscle relaxation and epithelial chloride/water secretion",
    function:
      "Potent vasodilation; relaxes GI smooth muscle (including lower esophageal sphincter); stimulates intestinal and pancreatic bicarbonate-rich fluid secretion — major mediator of secretory diarrhea when pathologically elevated.",
    clinicalRelevance: [
      "VIPoma — pancreatic NET secreting excess VIP → WDHA syndrome (Watery Diarrhea, Hypokalemia, Achlorhydria)",
      "Achalasia — loss of inhibitory myenteric neurons (NO/VIP) → failed LES relaxation",
      "Octreotide/lanreotide suppress VIP secretion in VIPoma and secretory diarrhea",
      "Contributes to vasodilatory flushing in some neuroendocrine syndromes",
    ],
    boardsPearls: [
      "VIP = vasoactive intestinal peptide — secretory diarrhea + hypokalemia → think VIPoma",
      "WDHA syndrome: Watery Diarrhea, Hypokalemia, Achlorhydria",
      "VIP relaxes LES — achalasia involves loss of NO/VIP inhibitory neurons",
      "Octreotide = somatostatin analog treats VIPoma diarrhea",
      "Secretory diarrhea (VIP, cholera) — high-volume, persists with fasting; vs osmotic diarrhea",
      "vs gastrinoma — peptic ulcers and acid hypersecretion, not WDHA secretory pattern",
    ],
    distinguishFrom: [
      "Somatostatin — inhibits VIP and other secretions; octreotide is its analog",
      "Cholera toxin — ADP-ribosylates Gs in enterocytes → secretory diarrhea without VIPoma",
      "Gastrin — stimulates acid secretion; gastrinoma causes ulcers not WDHA",
      "Serotonin/carcinoid — flushing and diarrhea; elevated 5-HIAA, not VIP",
      "Acetylcholine — parasympathetic muscarinic effects overlap but VIP is non-cholinergic co-transmitter in some pathways",
    ],
    pediatrics:
      "VIPoma is rare in children but occurs in MEN1 kindreds; secretory diarrhea with dehydration and hypokalemia requires aggressive fluids and electrolyte replacement. Achalasia physiology (loss of inhibitory neurons) applies across ages.",
  },
  {
    id: "hepcidin",
    name: "Hepcidin",
    etymology: "Greek hepar = liver + Latin caedere = to cut (hepcidin was first identified as liver-derived antimicrobial peptide)",
    aliases: [
      "hepcidin",
      "hepcidins",
      "hamp",
      "hepcidin antimicrobial peptide",
      "liver iron regulatory hormone",
      "iron regulatory hormone",
    ],
    type: "Peptide hormone",
    source:
      "Synthesized mainly by hepatocytes; gene HAMP; production stimulated by iron loading and IL-6/inflammation, suppressed by iron deficiency and hypoxia (via erythropoietin-driven pathways)",
    receptor:
      "Binds ferroportin (iron export channel) on enterocytes and macrophages → ferroportin internalization and degradation → ↓ intestinal iron absorption and ↓ macrophage iron release",
    function:
      "Master regulator of systemic iron homeostasis — ↑ hepcidin restricts iron entry into plasma; ↓ hepcidin permits iron absorption and recycling to meet erythropoietic demand.",
    mnemonic: "Hepcidin holds iron hostage — blocks ferroportin export",
    clinicalRelevance: [
      "Anemia of chronic disease — IL-6 ↑ hepcidin → iron sequestered in macrophages, ↓ serum iron and TIBC, ↑ ferritin",
      "Hereditary hemochromatosis — HFE and related defects → inappropriately low hepcidin → ↑ iron absorption and overload",
      "Juvenile hemochromatosis — HAMP (hepcidin) or HJV mutations → severe hepcidin deficiency and early iron overload",
      "Iron deficiency anemia — low hepcidin allows compensatory ↑ intestinal iron absorption",
    ],
    boardsPearls: [
      "Hepcidin ↓ ferroportin → ↓ iron export from gut and macrophages",
      "IL-6 → ↑ hepcidin → anemia of chronic disease (high ferritin, low iron, low TIBC)",
      "Iron deficiency → ↓ hepcidin → ↑ absorption",
      "HFE hemochromatosis → relative hepcidin deficiency → ↑ transferrin saturation and ferritin",
      "HAMP mutation → juvenile hemochromatosis with severe cardiomyopathy",
      "vs transferrin — iron transport protein, not regulatory hormone",
    ],
    distinguishFrom: [
      "Ferroportin — iron export channel degraded by hepcidin, not the hormone itself",
      "Transferrin — plasma iron carrier; TIBC reflects transferrin availability",
      "Ferritin — intracellular iron storage protein; ↑ in inflammation and iron overload",
      "Erythropoietin — stimulates erythropoiesis; hypoxia suppresses hepcidin indirectly to provide iron",
      "IL-6 — upstream cytokine inducing hepcidin in inflammation, not the iron effector itself",
    ],
    pediatrics:
      "Neonatal hemochromatosis is a distinct fulminant syndrome unrelated to HFE hepcidin regulation; juvenile hemochromatosis from HAMP/HJV presents in teens with heart failure and hypogonadism.",
  },
  {
    id: "secretin",
    name: "Secretin",
    etymology: "Latin secretio = separation/secretion + -in = protein suffix",
    aliases: [
      "secretin",
      "intestinal secretin",
      "duodenal secretin",
    ],
    type: "Peptide hormone",
    source:
      "S cells in duodenal and proximal jejunal mucosa (enteroendocrine cells in crypts of Lieberkühn)",
    receptor:
      "Secretin receptor (Gs-coupled GPCR on pancreatic ductal cells and biliary epithelium) → ↑ cAMP → bicarbonate-rich fluid secretion",
    function:
      "Classic enterogastrone — released when acidic gastric chyme enters duodenum → stimulates bicarbonate-rich pancreatic duct secretion and bile flow to neutralize duodenal pH; inhibits gastric acid secretion and gastric motility.",
    clinicalRelevance: [
      "Secretin stimulation test — IV secretin normally ↓ gastrin; gastrinoma shows paradoxical ↑ gastrin (diagnostic)",
      "Zollinger-Ellison syndrome (gastrinoma) — secretin test distinguishes from other hypergastrinemia",
      "Part of duodenal hormonal response to acid and fat alongside CCK",
      "Recombinant secretin historically used in pancreatic function testing",
    ],
    boardsPearls: [
      "Secretin released by duodenal S cells in response to H⁺ (acidic chyme)",
      "Secretin → pancreatic bicarbonate (neutralizes acid) + bile secretion",
      "Secretin ↓ gastric acid secretion — enterogastrone",
      "Secretin stimulation test: gastrinoma → paradoxical ↑ gastrin",
      "vs CCK — CCK responds to fats/amino acids; stimulates enzymes and gallbladder contraction",
      "Acid in duodenum → secretin → bicarbonate; fat/protein → CCK → enzymes",
    ],
    distinguishFrom: [
      "CCK — stimulated by fats and amino acids; pancreatic enzymes and gallbladder contraction, not primary bicarbonate response",
      "Gastrin — stimulates acid; secretin inhibits acid and is used diagnostically for gastrinoma",
      "Somatostatin — inhibits secretin and other GI hormones",
      "GIP (K cells) — glucose-dependent insulinotropic peptide; responds to fat and carbohydrate",
    ],
    pediatrics:
      "Cystic fibrosis impairs pancreatic bicarbonate secretion despite secretin signaling — thick mucus blocks ducts; presents with steatorrhea and failure to thrive.",
  },
  {
    id: "cholecystokinin",
    name: "Cholecystokinin",
    etymology: "Greek chole = bile + kystis = bladder + kinēsis = movement + -in = protein suffix",
    aliases: [
      "cholecystokinin",
      "cck",
      "pancreozymin",
      "pancreozymin-cck",
      "intestinal cck",
    ],
    type: "Peptide hormone",
    source:
      "I cells in duodenal and jejunal mucosa (enteroendocrine cells); also neurons in enteric nervous system and brain (satiety)",
    receptor:
      "CCK-A (CCK1) receptor on gallbladder smooth muscle and pancreatic acinar cells; CCK-B (CCK2) receptor overlaps gastrin receptor on parietal cells",
    function:
      "Released when fats and amino acids enter duodenum → stimulates pancreatic enzyme secretion, gallbladder contraction, and relaxation of sphincter of Oddi to deliver bile and enzymes for fat digestion; contributes to satiety via vagal and central pathways.",
    clinicalRelevance: [
      "Post-cholecystectomy — loss of CCK-coordinated gallbladder emptying; bile drips continuously",
      "CCK-B/gastrin receptor overlap — CCK can stimulate acid at high levels (less prominent than gastrin)",
      "CCK antagonists investigated for pancreatitis and satiety modulation (boards concept)",
      "Gallstone risk altered with impaired CCK-gallbladder axis",
    ],
    boardsPearls: [
      "CCK from I cells — fat and amino acids in duodenum trigger release",
      "CCK → pancreatic enzyme secretion + gallbladder contraction + sphincter of Oddi relaxation",
      "Secretin (acid) → bicarbonate; CCK (fat/protein) → enzymes + bile delivery",
      "CCK-A on gallbladder and pancreas; CCK-B overlaps gastrin receptor",
      "Satiety hormone — slows gastric emptying and reduces food intake",
      "vs secretin — different stimulus (fat/amino acid vs acid) and effect (enzymes vs bicarbonate)",
    ],
    distinguishFrom: [
      "Secretin — acid-triggered bicarbonate secretion; inhibits acid",
      "Gastrin — primary gastric acid secretagogue from G cells in antrum",
      "GIP — incretin from K cells; potentiates insulin release",
      "Motilin — interdigestive motility between meals; not fat-triggered enzyme secretion",
    ],
    pediatrics:
      "Neonates have immature CCK-mediated gallbladder and pancreatic responses; breast milk fat triggers physiologic CCK release promoting satiety after feeds.",
  },
  {
    id: "chemokines",
    name: "Chemokines",
    etymology: "Greek chemeia = chemistry + kinein = to move",
    aliases: [
      "chemokine",
      "chemokines",
      "cxc chemokines",
      "cc chemokines",
      "chemotactic cytokines",
      "chemoattractant cytokines",
    ],
    type: "Cytokine",
    source:
      "Endothelial cells, fibroblasts, macrophages, epithelial cells, and activated leukocytes",
    receptor:
      "G protein–coupled chemokine receptors (e.g., CXCR1/2, CCR5) on leukocytes",
    function:
      "Small chemotactic cytokines that create tissue concentration gradients directing leukocyte migration (chemotaxis) during inflammation, lymphocyte homing, and angiogenesis.",
    clinicalRelevance: [
      "IL-8/CXCL8 recruits neutrophils to bacterial infection sites",
      "RANTES/CCL5 and MIP — HIV co-receptor CCR5 on macrophages (maraviroc target)",
      "Eotaxin/CCL11 recruits eosinophils in allergy and parasitic disease",
      "Chemokine gradients guide lymphocyte entry into lymph nodes and inflamed tissues",
    ],
    boardsPearls: [
      "Chemokines = chemotactic cytokines; named CXC, CC, CX3C, C by cysteine motif",
      "IL-8 (CXCL8) — classic neutrophil chemoattractant (still called interleukin-8)",
      "C5a and LTB₄ are lipid chemoattractants, not chemokines",
      "Th17 → IL-17 → epithelial IL-8/G-CSF → neutrophil recruitment",
      "vs cytokine broadly — chemokines specifically direct cell trafficking",
    ],
    distinguishFrom: [
      "Complement C5a — anaphylatoxin and chemoattractant, not a chemokine",
      "Leukotriene B₄ (LTB₄) — lipid chemoattractant from lipoxygenase pathway",
      "Selectins — endothelial adhesion molecules for rolling, not soluble gradients",
      "Interleukins (non-chemokine) — e.g., IL-2 T-cell growth, IL-4 Th2, without primary chemotaxis role",
    ],
    pediatrics:
      "Neonatal leukocyte chemotaxis is relatively immature; leukocyte adhesion deficiency impairs tissue entry despite normal chemokine production.",
  },
  {
    id: "ifn-alpha",
    name: "Interferon-alpha (IFN-α)",
    etymology: "interferon = interferes with viral replication + alpha = first type I class",
    aliases: [
      "ifn-alpha",
      "ifn alpha",
      "ifn-α",
      "ifn α",
      "interferon-alpha",
      "interferon alpha",
      "interferon-α",
      "type i interferon alpha",
      "alpha interferon",
    ],
    type: "Cytokine",
    source: "Plasmacytoid dendritic cells, virus-infected leukocytes, therapeutic recombinant forms",
    receptor: "Type I interferon receptor (IFNAR1/IFNAR2) → JAK1/TYK2 → STAT1/STAT2",
    function:
      "Type I interferon that induces antiviral state (↑ MHC I, PKR, oligoadenylate synthetase), enhances antigen presentation, and modulates innate/adaptive immunity.",
    mnemonic:
      "IFN-α = Alpha Antiviral: type I interferon from plasmacytoid DCs — classic antiviral and hep C therapy (historically).",
    clinicalRelevance: [
      "Historically used for chronic hepatitis C (now largely replaced by DAAs)",
      "Used in hairy cell leukemia and some viral malignancies",
      "Autoimmune diseases (SLE) may have ↑ type I interferon signature",
      "PEGylated IFN-α with ribavirin was standard HCV regimen pre-DAA era",
    ],
    boardsPearls: [
      "Type I IFNs (α and β) bind IFNAR → JAK-STAT antiviral program",
      "IFN-α from plasmacytoid dendritic cells during viral infection",
      "vs IFN-γ — type II, macrophage-activating, not primary antiviral",
      "IFN mnemonic — ABG: Alpha/Beta = Antiviral (type I); Gamma = Granuloma/macrophage activation (type II)",
    ],
    distinguishFrom: [
      "IFN-β — type I interferon; MS therapy, similar IFNAR signaling",
      "IFN-γ — type II; Th1/NK product activating macrophages",
      "IL-12 — induces IFN-γ, not type I antiviral interferon",
    ],
    pediatrics:
      "Congenital type I interferonopathies (e.g., Aicardi-Goutières) show interferon signature; IFN-α rarely used in children for HCV now.",
  },
  {
    id: "ifn-beta",
    name: "Interferon-beta (IFN-β)",
    etymology: "interferon = interferes with viral replication + beta = second type I class",
    aliases: [
      "ifn-beta",
      "ifn beta",
      "ifn-β",
      "ifn β",
      "interferon-beta",
      "interferon beta",
      "interferon-β",
      "type i interferon beta",
      "beta interferon",
    ],
    type: "Cytokine",
    source: "Fibroblasts, epithelial cells, most nucleated cells (endogenous); recombinant forms for MS",
    receptor: "Type I interferon receptor (IFNAR1/IFNAR2) → JAK1/TYK2 → STAT1/STAT2",
    function:
      "Type I interferon with antiviral and immunomodulatory effects — ↓ T-cell trafficking to CNS, shifts cytokine balance, and upregulates anti-inflammatory pathways relevant to MS.",
    mnemonic:
      "IFN-β = Beta Brain (MS): type I interferon — fibroblast-derived antiviral signal; therapeutic DMT for relapsing-remitting multiple sclerosis.",
    clinicalRelevance: [
      "Disease-modifying therapy for relapsing-remitting multiple sclerosis",
      "Flu-like symptoms and injection-site reactions with subcutaneous/IM forms",
      "Same IFNAR pathway as IFN-α but distinct tissue sources and clinical use",
      "Interferon-beta-1a (Avonex, Rebif) and interferon-beta-1b (Betaseron) formulations",
    ],
    boardsPearls: [
      "Type I interferon — binds IFNAR, not IFN-γ receptor",
      "MS DMT: interferon-β, glatiramer, natalizumab, fingolimod (know class)",
      "IFN mnemonic — ABG: Alpha/Beta = Antiviral (type I); Gamma = Granuloma/macrophage activation (type II)",
      "vs IFN-α — both type I; β classically fibroblast-derived and used in MS",
    ],
    distinguishFrom: [
      "IFN-α — type I; plasmacytoid DC source; HCV therapy historically",
      "IFN-γ — type II; macrophage activation, TB/CGD therapy",
      "Glatiramer acetate — MS immunomodulator, not interferon",
    ],
    pediatrics:
      "MS in adolescents may use interferon-β; pediatric MS is rare — distinguish from ADEM and other demyelinating disorders.",
  },
  {
    id: "melatonin",
    name: "Melatonin",
    etymology: "Greek melas = black + tonos = tension (serotonin derivative)",
    aliases: [
      "melatonin",
      "n-acetyl-5-methoxytryptamine",
      "pineal hormone melatonin",
    ],
    type: "Hormone",
    source: "Pineal gland (epithalamus); secretion ↑ in darkness, suppressed by light via retinohypothalamic tract",
    receptor: "MT1 and MT2 melatonin receptors (GPCR) in suprachiasmatic nucleus",
    function:
      "Regulates circadian rhythm and sleep-wake cycle — promotes sleep onset in darkness; modulates seasonal reproduction in some species; antioxidant properties.",
    clinicalRelevance: [
      "Jet lag and shift-work sleep disorder — exogenous melatonin may aid sleep timing",
      "Ramelteon — MT1/MT2 agonist for insomnia",
      "Pineal tumors — rare; can disrupt circadian regulation",
      "Seasonal affective disorder — light therapy affects melatonin suppression",
    ],
    boardsPearls: [
      "Melatonin from pineal gland; synthesis from serotonin via N-acetyltransferase",
      "Light inhibits melatonin — suprachiasmatic nucleus is master circadian clock",
      "Ramelteon mimics melatonin at MT1/MT2 — sleep onset without GABA activity",
      "vs cortisol — peaks in morning (ACTH axis), melatonin peaks at night",
      "Pineal gland calcification (brain sand) — common incidental CT finding in adults",
    ],
    distinguishFrom: [
      "Serotonin — melatonin precursor; wake/mood neurotransmitter",
      "Cortisol — HPA axis stress hormone with morning peak",
      "GABA — inhibitory neurotransmitter; benzodiazepine target, not melatonin pathway",
      "Ramelteon — synthetic MT1/MT2 agonist drug, not endogenous melatonin",
    ],
    pediatrics:
      "Melatonin sometimes used in pediatric circadian rhythm disorders and autism-related insomnia under specialist guidance; pineal tumors are rare in children.",
  },
  {
    id: "hypocretin-1",
    name: "Hypocretin-1",
    etymology: "hypo- = under + Latin creare = to create + -in = peptide suffix (orexin A)",
    aliases: [
      "hypocretin-1",
      "hypocretin 1",
      "hypocretin-1 orexin a",
      "orexin a",
      "orexin-a",
      "orexin a",
      "hcrt-1",
      "hcrt1",
    ],
    type: "Neurotransmitter",
    source: "Lateral hypothalamic orexin/hypocretin neurons",
    receptor: "Orexin-1 (OX1R) and orexin-2 (OX2R) GPCRs",
    function:
      "Stabilizes wakefulness and arousal — promotes monoaminergic and cholinergic wake-active systems; inhibits REM sleep; regulates appetite and energy balance with hypocretin-2 (orexin B).",
    clinicalRelevance: [
      "Narcolepsy type 1 — autoimmune loss of hypocretin neurons; low CSF hypocretin-1",
      "Cataplexy — sudden loss of muscle tone triggered by emotion; associated with hypocretin deficiency",
      "Suvorexant — dual orexin receptor antagonist for insomnia (blocks OX1R/OX2R)",
      "Obesity research — orexin neurons link arousal and feeding",
    ],
    boardsPearls: [
      "Narcolepsy type 1 = low CSF hypocretin-1 + cataplexy + excessive daytime sleepiness",
      "Hypocretin = orexin; same peptides, dual naming",
      "Narcolepsy — ↓ REM latency, sleep attacks, hypnagogic hallucinations, sleep paralysis",
      "vs narcolepsy type 2 — EDS without cataplexy; hypocretin levels may be normal",
      "vs sleep apnea — disrupted sleep from obstruction, not primary hypocretin loss",
    ],
    distinguishFrom: [
      "Melatonin — pineal hormone promoting sleep timing, not orexin wake stability",
      "Histamine (H1) — tuberomammillary wake pathway; blocked by sedating antihistamines",
      "Modafinil — wake-promoting drug used in narcolepsy, not hypocretin replacement",
      "Hypocretin-2 (orexin B) — sibling peptide; both from same precursor prepro-orexin",
    ],
    pediatrics:
      "Narcolepsy often begins in adolescence; excessive daytime sleepiness mistaken for laziness or depression — low CSF hypocretin-1 confirms type 1.",
  },
  {
    id: "hypocretin-2",
    name: "Hypocretin-2",
    etymology: "hypo- = under + Latin creare = to create + -in = peptide suffix (orexin B)",
    aliases: [
      "hypocretin-2",
      "hypocretin 2",
      "hypocretin-2 orexin b",
      "orexin b",
      "orexin-b",
      "orexin b",
      "hcrt-2",
      "hcrt2",
    ],
    type: "Neurotransmitter",
    source: "Lateral hypothalamic orexin/hypocretin neurons (cleaved from prepro-orexin with hypocretin-1)",
    receptor: "Orexin-2 receptor (OX2R) preferentially; also orexin-1 receptor (OX1R) at higher concentrations",
    function:
      "Stabilizes wakefulness and regulates REM sleep architecture — orexin B binds preferentially OX2R to promote arousal and inhibit inappropriate REM intrusion; works with hypocretin-1 (orexin A) from the same neurons to maintain consolidated wakefulness and metabolic homeostasis.",
    clinicalRelevance: [
      "Narcolepsy type 1 — autoimmune destruction of neurons producing both hypocretin-1 and hypocretin-2",
      "Cataplexy and sleep paralysis — REM intrusion phenomena linked to orexin deficiency",
      "Suvorexant/daridorexant/lemborexant — dual orexin receptor antagonists (OX1R/OX2R) for insomnia",
    ],
    boardsPearls: [
      "Hypocretin-2 = orexin B; hypocretin-1 = orexin A — same precursor prepro-orexin",
      "Orexin B preferentially activates OX2R; orexin A preferentially OX1R",
      "Narcolepsy type 1 — loss of both peptides; low CSF hypocretin-1 measured clinically",
      "Dual orexin receptor antagonists (DORAs) promote sleep by blocking orexin wake signal",
      "vs hypocretin-1 — sibling peptide; CSF hypocretin-1 is standard clinical assay",
    ],
    distinguishFrom: [
      "Hypocretin-1 (orexin A) — sibling neuropeptide; CSF assay targets hypocretin-1",
      "Melatonin — pineal circadian hormone, not lateral hypothalamic orexin",
      "Histamine (H1) — tuberomammillary wake pathway",
      "Modafinil — wake-promoting drug, does not replace orexin peptides",
      "Serotonin — separate biogenic amine; carcinoid secretes serotonin not orexin",
    ],
    pediatrics:
      "Narcolepsy type 1 from orexin neuron loss often begins in adolescence; CSF hypocretin-1 (reflecting loss of neurons producing both peptides) confirms diagnosis.",
  },
];

const signalingById = new Map(
  SIGNALING_MOLECULES.map((entry) => [entry.id, entry]),
);

export function getSignalingById(id: string): SignalingEntry | undefined {
  return signalingById.get(id);
}

export interface SignalingAliasMatch {
  alias: string;
  signalingId: string;
}

export function buildSignalingAliasIndex(): SignalingAliasMatch[] {
  const matches: SignalingAliasMatch[] = [];
  for (const entry of SIGNALING_MOLECULES) {
    for (const alias of entry.aliases) {
      matches.push({ alias: alias.toLowerCase(), signalingId: entry.id });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
