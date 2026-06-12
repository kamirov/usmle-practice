export type SignalingType =
  | "Peptide hormone"
  | "Cytokine"
  | "Growth factor"
  | "Neurotransmitter"
  | "Second messenger"
  | "Gasotransmitter"
  | "Hormone"
  | "Vitamin";

export interface SignalingEntry {
  id: string;
  name: string;
  aliases: string[];
  type: SignalingType;
  source?: string;
  receptor?: string;
  function: string;
  clinicalRelevance: string[];
  boardsPearls: string[];
  distinguishFrom?: string[];
  pediatrics?: string;
}

export const SIGNALING_MOLECULES: SignalingEntry[] = [
  {
    id: "bnp",
    name: "Brain natriuretic peptide (BNP)",
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
    id: "vitamin-k",
    name: "Vitamin K",
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
    id: "active-vitamin-d",
    name: "1,25-Dihydroxycholecalciferol (calcitriol)",
    aliases: [
      "1,25-dihydroxycholecalciferol",
      "1,25-dihydroxyvitamin d",
      "1,25 dihydroxycholecalciferol",
      "1,25 dihydroxyvitamin d",
      "calcitriol",
      "active vitamin d",
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
    id: "gaba",
    name: "Gamma-aminobutyric acid (GABA)",
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
    id: "cytokine",
    name: "Cytokine",
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
    ],
    pediatrics:
      "Hemophagocytic lymphohistiocytosis (HLH) — uncontrolled macrophage activation and cytokine storm in children; MIS-C post-COVID also cytokine-driven.",
  },
  {
    id: "il-2",
    name: "Interleukin-2 (IL-2)",
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
    id: "tnf",
    name: "Tumor necrosis factor (TNF)",
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
    id: "pdgf",
    name: "Platelet-derived growth factor (PDGF)",
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
    id: "histamine",
    name: "Histamine",
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
    id: "nitric-oxide",
    name: "Nitric oxide (NO)",
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
    id: "thromboxane-a2",
    name: "Thromboxane A₂",
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
    id: "estrogen",
    name: "Estrogen",
    aliases: [
      "estrogen",
      "estrogens",
      "estradiol",
      "estradiol-17β",
      "e2",
      "17β-estradiol",
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
      "Estradiol (E2) — most potent endogenous estrogen; drives endometrial proliferation in menstrual cycle",
      "Unopposed estrogen ↑ endometrial cancer risk — progestin opposes proliferation",
      "Turner: streak gonads → ↓ estrogen → webbed neck, short stature, primary amenorrhea",
      "Aromatase converts androgens → estrogens — inhibitors used in postmenopausal breast cancer",
    ],
    distinguishFrom: [
      "Progesterone — stabilizes endometrium, secretory phase; opposes estrogen-driven proliferation",
      "Prolactin — milk synthesis; high prolactin suppresses GnRH → ↓ estrogen",
      "Testosterone — androgen; aromatized to estrogen peripherally",
    ],
    pediatrics:
      "Precocious puberty — early estrogen exposure → breast development, accelerated bone age; McCune-Albright or ovarian tumor workup.",
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
