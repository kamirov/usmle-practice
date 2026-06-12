export type SignalingType =
  | "Peptide hormone"
  | "Cytokine"
  | "Growth factor"
  | "Neurotransmitter"
  | "Second messenger"
  | "Signaling pathway"
  | "Gasotransmitter"
  | "Hormone"
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
  clinicalRelevance: string[];
  boardsPearls: string[];
  distinguishFrom?: string[];
  pediatrics?: string;
}

export const SIGNALING_MOLECULES: SignalingEntry[] = [
  {
    id: "bnp",
    name: "Brain natriuretic peptide (BNP)",
    etymology: "B-type natriuretic peptide; Old English brægen; Greek enkephalos",
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
    etymology: "atrial natriuretic peptide; Latin natrium + Greek ourētikos",
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
    etymology: "Abbreviation: Vitamin D",
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
    etymology: "Abbreviation: Vitamin K",
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
    etymology: "Numbered clinical designation",
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
    etymology: "gamma-aminobutyric acid; Latin acidus (sour)",
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
    etymology: "Greek kytos + kinein (to move)",
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
    etymology: "Janus kinase; signal transducer and activator of transcription",
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
    etymology: "nuclear factor kappa B; Greek kappa (letter Κ) + Latin factor",
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
    id: "il-1",
    name: "Interleukin-1 (IL-1)",
    etymology: "interleukin; Latin inter + Greek leukos",
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
    etymology: "interleukin; Latin inter + Greek leukos",
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
    etymology: "interleukin; Latin inter + Greek leukos",
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
    id: "il-6",
    name: "Interleukin-6 (IL-6)",
    etymology: "interleukin; Latin inter + Greek leukos",
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
    clinicalRelevance: [
      "↑ CRP in infection/inflammation — IL-6 is the main hepatocyte stimulus for acute-phase protein synthesis",
      "Tocilizumab (anti–IL-6R) and siltuximab (anti–IL-6) — RA, cytokine release syndrome, Castleman disease",
      "Endogenous pyrogen with IL-1 and TNF-α → hypothalamic PGE₂ → fever",
      "Elevated in sepsis, cytokine storm, and MIS-C (post–COVID-19 pediatric hyperinflammation)",
      "Contributes to anemia of chronic disease via hepcidin induction",
      "STAT3 gain-of-function mutations → hyper-IgE syndrome (Job syndrome)",
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
    id: "tnf",
    name: "Tumor necrosis factor (TNF)",
    etymology: "tumor necrosis factor; Latin tumere (to swell)",
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
    etymology: "platelet-derived growth factor; French plate + -let (small)",
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
    etymology: "acetyl + Greek cholē (bile)",
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
    etymology: "Greek histos + amine",
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
    etymology: "Abbreviation: Nitric oxide",
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
    etymology: "cyclic guanosine monophosphate; Greek kyklos (circle)",
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
    etymology: "Greek prostates (before) + gland",
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
    etymology: "Greek leukos + tri- (three) + -ene",
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
    etymology: "Greek thrombos + xylon (wood) + -ane",
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
    etymology: "Greek oxys (swift) + tokos (birth)",
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
    id: "gnrh",
    name: "GnRH",
    etymology: "gonadotropin-releasing hormone",
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
    etymology: "Abbreviation: Estrogen",
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
    etymology: "Abbreviation: Progesterone",
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
    etymology: "Abbreviation: Androgens",
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
