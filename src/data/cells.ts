export interface CellEntry {
  id: string;
  name: string;
  aliases: string[];
  definition: string;
  characteristics: string[];
  clinicalRelevance: string[];
  boardsPearls: string[];
  distinguishFrom?: string[];
  pediatrics?: string;
}

export const CELLS: CellEntry[] = [
  {
    id: "leukocyte",
    name: "Leukocyte",
    aliases: [
      "leukocyte",
      "leukocytes",
      "white blood cell",
      "white blood cells",
      "wbc",
      "wbcs",
    ],
    definition:
      "Nucleated immune cells in blood and tissues that defend against infection, mediate inflammation, and participate in adaptive immunity. The five major types are neutrophils, lymphocytes, monocytes, eosinophils, and basophils.",
    characteristics: [
      "Granulocytes: neutrophils, eosinophils, basophils (lobed nuclei, cytoplasmic granules)",
      "Agranulocytes: lymphocytes, monocytes (round nuclei, no specific granules)",
      "Normal differential (approximate): neutrophils ~40–70%, lymphocytes ~20–40%, monocytes ~2–8%, eosinophils ~1–4%, basophils <1%",
      "Left shift = ↑ immature neutrophils (bands) → acute bacterial infection or inflammation",
    ],
    clinicalRelevance: [
      "Leukocytosis: infection, inflammation, leukemia, steroids (demargination)",
      "Leukopenia: viral infection, chemotherapy, aplastic anemia, severe sepsis (late)",
      "Atypical lymphocytes on smear → EBV, CMV, toxoplasmosis",
    ],
    boardsPearls: [
      "WBC count ≠ leukocyte type — always check differential",
      "Neutrophilia + left shift → bacterial infection until proven otherwise",
      "Lymphocytosis in child with fever and rash → viral exanthem or EBV",
      "vs RBC — leukocytes are nucleated and involved in immunity, not oxygen transport",
    ],
    distinguishFrom: [
      "WBC count (lab value) — total concentration, not a single cell type",
      "Erythrocyte — red blood cell; carries O₂, anucleate in mammals",
    ],
    pediatrics:
      "Neonates and infants have higher normal WBC and relative lymphocyte predominance; interpret counts with age-specific ranges.",
  },
  {
    id: "neutrophil",
    name: "Neutrophil",
    aliases: [
      "neutrophil",
      "neutrophils",
      "polymorphonuclear leukocyte",
      "polymorphonuclear leukocytes",
      "pmn",
      "pmns",
      "poly",
      "polys",
      "seg",
      "segs",
      "segmented neutrophil",
      "segmented neutrophils",
    ],
    definition:
      "Most abundant granulocyte; short-lived phagocyte that is first responder to acute bacterial infection and tissue injury. Multilobed nucleus and neutral-staining cytoplasmic granules containing myeloperoxidase, defensins, and proteases.",
    characteristics: [
      "Mature form: segmented (multi-lobed) neutrophil; immature bands have horseshoe-shaped nucleus",
      "Chemotaxis toward bacterial products and complement (C5a)",
      "Phagocytosis → respiratory burst (H₂O₂, bleach) → kills bacteria",
      "Hypersegmented neutrophils (>5 lobes) → B12 or folate deficiency",
      "Toxic granulation and Döhle bodies → severe infection or inflammation",
    ],
    clinicalRelevance: [
      "Neutrophilia + left shift → acute bacterial infection, tissue necrosis, corticosteroids",
      "Neutropenia (<1500 /µL; severe <500) → ↑ risk of bacterial and fungal infection",
      "Cyclic neutropenia — periodic fever, oral ulcers, infections every ~21 days",
      "Chronic granulomatous disease — neutrophils cannot generate respiratory burst → recurrent catalase-positive infections",
      "Felty syndrome — RA + splenomegaly + neutropenia",
    ],
    boardsPearls: [
      "Bands (immature neutrophils) in peripheral smear = left shift → bacterial infection",
      "Hypersegmented neutrophils → macrocytic anemia workup (B12/folate)",
      "ANC (absolute neutrophil count) guides febrile neutropenia risk in chemotherapy patients",
      "ANCA-associated vasculitis — autoantibodies target neutrophil granule proteins (PR3, MPO)",
    ],
    distinguishFrom: [
      "Eosinophil — bilobed nucleus, red granules; parasites and allergy",
      "Lymphocyte — round nucleus, no granules; viral immunity and adaptive response",
      "Band neutrophil — immature neutrophil with non-segmented nucleus; part of left shift",
    ],
    pediatrics:
      "Febrile neutropenia in children on chemotherapy requires urgent evaluation and empiric antibiotics; same left-shift pattern signals bacterial infection.",
  },
  {
    id: "basophil",
    name: "Basophil",
    aliases: [
      "basophil",
      "basophils",
    ],
    definition:
      "Least common granulocyte (<1% of WBCs); contains histamine and heparin granules. Participates in type I hypersensitivity and helminth defense. Surface IgE receptor (FcεRI).",
    characteristics: [
      "Large dark purple granules that may obscure the nucleus",
      "Release histamine, leukotrienes, and heparin upon IgE-mediated activation",
      "Mast cells are tissue-resident counterparts",
      "Basophilia is uncommon and often overlooked on differential",
    ],
    clinicalRelevance: [
      "Basophilia: myeloproliferative neoplasms (CML — may herald blast crisis)",
      "Allergic reactions and chronic inflammation (less specific than eosinophilia)",
      "Basopenia with corticosteroids (similar to eosinopenia)",
    ],
    boardsPearls: [
      "CML: leukocytosis with left shift; basophilia is a classic clue",
      "Basophils and mast cells mediate type I hypersensitivity via IgE",
      "vs eosinophil — eosinophils more common in allergy/parasites; basophils rarest granulocyte",
    ],
    distinguishFrom: [
      "Mast cell — tissue resident; systemic mastocytosis",
      "Eosinophil — bilobed, red granules; parasites and atopy",
    ],
    pediatrics:
      "CML rare in children but juvenile myelomonocytic leukemia and other myeloproliferative disorders can show leukocytosis with immature forms.",
  },
  {
    id: "lymphocyte",
    name: "Lymphocyte",
    aliases: [
      "lymphocyte",
      "lymphocytes",
    ],
    definition:
      "Agranular leukocyte central to adaptive immunity; includes B cells (antibody production), T cells (cell-mediated immunity), and NK cells (innate cytotoxicity).",
    characteristics: [
      "Small round nucleus, scant cytoplasm on peripheral smear",
      "B cells: humoral immunity, plasma cells produce antibody",
      "T cells: CD4+ helper and CD8+ cytotoxic subsets",
      "NK cells: kill virus-infected and tumor cells without prior sensitization",
    ],
    clinicalRelevance: [
      "Lymphocytosis: viral infection (EBV, CMV), CLL, pertussis",
      "Lymphopenia: HIV (CD4 depletion), corticosteroids, sepsis, immunodeficiency",
      "Atypical lymphocytes on smear → infectious mononucleosis",
    ],
    boardsPearls: [
      "Viral illness → lymphocytosis with atypical lymphocytes (EBV)",
      "CLL: elderly, lymphocytosis, smudge cells on smear",
      "HIV targets CD4+ T cells — AIDS defined by CD4 <200",
      "Peds: physiologic lymphocyte predominance in infants vs adults",
    ],
    distinguishFrom: [
      "Monocyte — larger, kidney-shaped nucleus; becomes macrophage in tissue",
      "Neutrophil — granulocyte; bacterial infection and acute inflammation",
    ],
    pediatrics:
      "Infants have higher relative lymphocyte counts than adults; EBV mononucleosis common in adolescents.",
  },
  {
    id: "monocyte",
    name: "Monocyte",
    aliases: [
      "monocyte",
      "monocytes",
    ],
    definition:
      "Largest circulating leukocyte; migrates into tissues as macrophage or dendritic cell. Phagocytosis, antigen presentation, and chronic inflammation.",
    characteristics: [
      "Kidney-shaped or horseshoe nucleus, gray-blue cytoplasm",
      "Differentiates into tissue macrophages (Kupffer, alveolar, microglia, osteoclasts)",
      "Dendritic cells are specialized antigen-presenting cells from monocyte lineage",
      "Monocytosis often accompanies chronic and granulomatous diseases",
    ],
    clinicalRelevance: [
      "Monocytosis: chronic infection (TB), autoimmune disease, malignancy",
      "Hairy cell leukemia — B-cell neoplasm with hairy projections (not true monocyte)",
      "Monocyte-macrophage system clears pathogens, debris, and apoptotic cells",
    ],
    boardsPearls: [
      "TB and chronic inflammation → monocytosis",
      "Foam cells in atherosclerosis are lipid-laden macrophages",
      "Gaucher disease: lipid-laden macrophages (Gaucher cells) in marrow",
      "Osteoclasts are multinucleated macrophage derivatives — bone resorption",
    ],
    distinguishFrom: [
      "Neutrophil — acute bacterial infection, segmented nucleus",
      "Lymphocyte — smaller, round nucleus; adaptive immunity",
    ],
    pediatrics:
      "Juvenile myelomonocytic leukemia (JMML) — proliferation of myelomonocytic lineage in young children.",
  },
  {
    id: "cd4-t-lymphocyte",
    name: "CD4+ T Lymphocyte",
    aliases: [
      "cd4+ t-lymphocyte",
      "cd4+ t lymphocyte",
      "cd4 t lymphocyte",
      "cd4+ t cell",
      "cd4+ t cells",
      "cd4 t cell",
      "cd4 count",
      "cd4 lymphocyte",
      "cd4+ lymphocyte",
      "helper t cell",
      "helper t cells",
      "t helper cell",
      "t helper cells",
    ],
    definition:
      "T lymphocyte subset bearing CD4 co-receptor; recognizes antigen on MHC class II and coordinates immune responses by cytokine secretion (Th1, Th2, Th17, Tfh subsets).",
    characteristics: [
      "Primary target of HIV (gp120 binds CD4 + CCR5/CXCR4)",
      "Activates macrophages (Th1/IFN-γ), B cells (Th2), and other leukocytes",
      "Absolute CD4 count and percentage guide HIV staging and prophylaxis",
      "Regulatory T cells (Tregs) also CD4+ — suppress autoimmunity",
    ],
    clinicalRelevance: [
      "HIV infection → progressive CD4 depletion → opportunistic infections",
      "AIDS: CD4 <200 /µL or AIDS-defining illness",
      "CD4 <50 → MAC prophylaxis; <200 → PJP prophylaxis",
      "Idiopathic CD4 lymphocytopenia (rare)",
    ],
    boardsPearls: [
      "HIV: monitor viral load and CD4 count for treatment and prophylaxis",
      "CD4 <200 + Pneumocystis pneumonia → AIDS",
      "Th1 vs Th2: Th1 (IFN-γ) for intracellular pathogens; Th2 (IL-4) for parasites/allergy",
      "Peds: vertical HIV transmission — treat mother; neonatal prophylaxis; CD4 guides therapy",
    ],
    distinguishFrom: [
      "CD8+ cytotoxic T cell — kills infected cells; MHC class I",
      "B lymphocyte — antibody production; CD19/CD20 markers",
    ],
    pediatrics:
      "HIV-infected children: CD4 percentage often used alongside absolute count because total lymphocyte numbers differ by age.",
  },
  {
    id: "b-lymphocyte",
    name: "B Lymphocyte",
    aliases: [
      "b-lymphocyte",
      "b lymphocyte",
      "b lymphocytes",
      "b cell",
      "b cells",
      "b-lymphocytes",
    ],
    definition:
      "Adaptive immune lymphocyte responsible for humoral immunity; differentiates into antibody-secreting plasma cells and memory B cells after antigen encounter.",
    characteristics: [
      "Surface markers: CD19, CD20, CD21 (CR2 — EBV receptor), CD22",
      "B-cell receptor (membrane-bound IgM/IgD) recognizes native antigen",
      "Activated by T helper cells (CD40–CD40L) and cytokines; class-switch recombination in germinal centers",
      "Plasma cells — terminally differentiated antibody factories (CD19−, CD20−)",
    ],
    clinicalRelevance: [
      "Humoral immunodeficiency (X-linked agammaglobulinemia, CVID) → recurrent sinopulmonary bacterial infections",
      "EBV infects B cells via CD21 → infectious mononucleosis; B-cell lymphomas in immunosuppression",
      "B-cell neoplasms: CLL/SLL, Burkitt lymphoma, multiple myeloma (plasma cell)",
      "Rituximab (anti-CD20) depletes B cells — RA, lymphoma, autoimmune cytopenias",
    ],
    boardsPearls: [
      "B cells = humoral immunity (antibody); T cells = cell-mediated immunity",
      "CD21 on B cells = EBV entry receptor — atypical lymphocytes are CD8+ T cells attacking infected B cells",
      "X-linked agammaglobulinemia (Bruton): no mature B cells, ↓ all immunoglobulin isotypes",
      "vs plasma cell — B cell has surface Ig; plasma cell secretes antibody, no surface Ig",
    ],
    distinguishFrom: [
      "CD4+ T lymphocyte — cell-mediated immunity; CD4 marker, not CD19/CD20",
      "Plasma cell — antibody-secreting end-stage B cell; eccentric clock-face nucleus",
      "NK cell — innate cytotoxicity; CD16/CD56, no antigen receptor",
    ],
    pediatrics:
      "X-linked agammaglobulinemia presents after 6 months when maternal IgG wanes — recurrent otitis, pneumonia; live vaccines contraindicated.",
  },
  {
    id: "desmosome",
    name: "Desmosome",
    aliases: ["desmosome", "desmosomes", "macula adherens"],
    definition:
      "Strong adhesive cell–cell junction anchoring intermediate filaments (keratin in epithelia, desmin in cardiac muscle) between adjacent cells via cadherin family proteins (desmogleins, desmocollins).",
    characteristics: [
      "Cadherins linked to keratin via plakoglobin and desmoplakin",
      "Spot-weld morphology — stratum spinosum spines are desmosomal attachments",
      "Cardiomyocyte desmosomes at intercalated discs maintain mechanical coupling",
      "Loss of adhesion → acantholysis (cells detach while basement membrane intact)",
    ],
    clinicalRelevance: [
      "Pemphigus vulgaris — IgG against desmoglein 3 (± desmoglein 1) → flaccid bullae, oral mucosa",
      "Arrhythmogenic cardiomyopathy — desmosomal gene mutations (plakophilin-2, desmoplakin) → fibrofatty replacement, ventricular arrhythmias",
      "Staphylococcal scalded skin syndrome — exfoliative toxin cleaves desmoglein 1",
    ],
    boardsPearls: [
      "Desmosome = cadherins + intermediate filaments; adherens junction = cadherins + actin",
      "Pemphigus: intraepidermal, acantholysis, + Nikolsky sign; bullous pemphigoid is subepidermal",
      "Stratum spinosum — desmosomes create intercellular bridges",
    ],
    distinguishFrom: [
      "Adherens junction — E-cadherin + actin, not keratin intermediate filaments",
      "Hemidesmosome — cell to basement membrane, not cell to cell",
      "Tight junction — seals paracellular space; no filament anchoring",
    ],
    pediatrics:
      "Pemphigus vulgaris rare in children; staphylococcal scalded skin syndrome common in infants — desmoglein 1 cleavage causes superficial desquamation.",
  },
  {
    id: "adherens-junction",
    name: "Adherens Junction",
    aliases: [
      "adherens junction",
      "adherens junctions",
      "adhesion belt",
      "zonula adherens",
    ],
    definition:
      "Cadherin-based cell–cell junction linking the actin cytoskeleton of adjacent cells; forms a continuous belt below tight junctions in epithelia.",
    characteristics: [
      "E-cadherin (epithelial) or N-cadherin (neural/mesenchymal) binds homophilically",
      "Cytoplasmic tail binds β-catenin and α-catenin → actin filaments",
      "β-catenin also functions in Wnt signaling (gene transcription when stabilized)",
      "Loss of E-cadherin promotes epithelial–mesenchymal transition (EMT)",
    ],
    clinicalRelevance: [
      "↓ E-cadherin expression → tumor invasion and metastasis (EMT)",
      "APC mutations in FAP — β-catenin/Wnt pathway dysregulation → colonic polyps",
      "Cadherin switching (E→N) in cancer progression",
    ],
    boardsPearls: [
      "Adherens junction: cadherin + actin; desmosome: cadherin + intermediate filaments",
      "β-catenin links adherens junctions to Wnt pathway — two roles on boards",
      "Wnt → stabilized β-catenin → TCF/LEF transcription (proliferation)",
    ],
    distinguishFrom: [
      "Desmosome — intermediate filament attachment (keratin), stronger spot welds",
      "Tight junction — paracellular seal; apical to adherens belt",
      "Gap junction — connexin channels, not adhesive belt",
    ],
    pediatrics:
      "FAP and Gardner syndrome can present in adolescence — APC/β-catenin pathway links adherens junction biology to early-onset polyposis.",
  },
  {
    id: "hemidesmosome",
    name: "Hemidesmosome",
    aliases: ["hemidesmosome", "hemidesmosomes"],
    definition:
      "Half-desmosome anchoring basal keratinocytes to the basement membrane via integrins (α6β4) and bullous pemphigoid antigens (BP180/BP230), linking keratin intermediate filaments to the extracellular matrix.",
    characteristics: [
      "Integrin α6β4 binds laminin in basement membrane",
      "BP180 (type XVII collagen) and BP230 are hemidesmosomal components",
      "Connects intracellular keratin to extracellular matrix — basal cell adhesion",
      "Distinct from full desmosome (cell–cell, not cell–matrix)",
    ],
    clinicalRelevance: [
      "Bullous pemphigoid — autoantibodies against BP180/BP230 → subepidermal tense bullae, eosinophils",
      "Epidermolysis bullosa — integrin or plectin mutations → mechanical fragility",
      "Linear IgA bullous dermatosis — similar subepidermal blistering pattern",
    ],
    boardsPearls: [
      "Hemidesmosome = basal cell to basement membrane; desmosome = cell to cell",
      "Bullous pemphigoid: elderly, tense bullae, subepidermal, eosinophilic infiltrate",
      "Pemphigus vulgaris is intraepidermal (desmosome) — flaccid bullae, acantholysis",
    ],
    distinguishFrom: [
      "Desmosome — cell–cell junction in spinous layer, not basement membrane",
      "Focal adhesion — fibroblast integrin–actin links, not keratin hemidesmosomes",
      "Tight junction — apical seal, not basal anchoring",
    ],
    pediatrics:
      "Epidermolysis bullosa simplex or junctional subtypes present at birth with friction-induced blisters — hemidesmosome/integrin defects.",
  },
  {
    id: "tight-junction",
    name: "Tight Junction",
    aliases: [
      "tight junction",
      "tight junctions",
      "zonula occludens",
      "occluding junction",
    ],
    definition:
      "Apical intercellular seal forming a continuous belt that blocks paracellular diffusion; composed of claudins, occludin, and ZO scaffold proteins.",
    characteristics: [
      "Most apical junction — creates selective paracellular barrier",
      "\"Leaky\" epithelia (proximal tubule) vs \"tight\" epithelia (distal colon, bladder)",
      "Maintains cell polarity by fencing apical vs basolateral membrane domains",
      "Claudin isoforms determine pore size and charge selectivity",
    ],
    clinicalRelevance: [
      "Blood–brain barrier integrity — endothelial tight junctions restrict paracellular passage",
      "Celiac disease — zonulin pathway increases intestinal tight junction permeability",
      "Clostridium difficile toxin disrupts tight junctions → fluid secretion",
      "Mutations in claudin-16 (paracellin) → familial hypomagnesemia with hypercalciuria",
    ],
    boardsPearls: [
      "Tight junction = paracellular seal; adherens below; desmosomes provide mechanical strength",
      "Blood–brain barrier: tight junctions + no fenestrae + efflux transporters",
      "Proximal tubule has leaky tight junctions — allows paracellular reabsorption",
    ],
    distinguishFrom: [
      "Adherens junction — cadherin belt below tight junction; not primary paracellular seal",
      "Gap junction — permits intercellular communication, not sealing",
      "Fenestrae — transcellular pores in endothelium, not intercellular junctions",
    ],
    pediatrics:
      "Necrotizing enterocolitis involves gut barrier failure; immature tight junctions in preterm gut increase translocation risk.",
  },
  {
    id: "fenestrae",
    name: "Fenestrae",
    aliases: ["fenestrae", "fenestra", "fenestrated endothelium", "fenestrations"],
    definition:
      "Circular transcellular pores (~60–80 nm) in fenestrated endothelial cells permitting rapid passage of water and small solutes; diaphragm-covered in some tissues, absent in glomerulus.",
    characteristics: [
      "Found in glomerular capillaries, liver sinusoids, endocrine glands, choroid plexus",
      "No continuous basement membrane barrier alone — paired with other filtration layers in kidney",
      "Continuous (muscle, lung), fenestrated (kidney, endocrine), and discontinuous (liver, spleen, bone marrow) capillary types",
      "Plasmalemmal vesicles (caveolae) are distinct membrane invaginations, not fenestrae",
    ],
    clinicalRelevance: [
      "Glomerular filtration barrier: fenestrated endothelium + GBM + podocyte slit diaphragm",
      "Liver sinusoids — fenestrated/discontinuous endothelium allows plasma exchange with hepatocytes",
      "Endocrine glands — fenestrated capillaries facilitate hormone delivery to blood",
      "Diabetic nephropathy and glomerular disease disrupt filtration barrier components",
    ],
    boardsPearls: [
      "Three capillary types: continuous, fenestrated, discontinuous (sinusoidal)",
      "Glomerular fenestrae lack diaphragms — part of high-flux filtration",
      "Blood–brain barrier uses continuous non-fenestrated endothelium with tight junctions",
    ],
    distinguishFrom: [
      "Tight junction — seals between cells; fenestrae are pores through a single endothelial cell",
      "Podocyte slit diaphragm — final filtration layer in glomerulus, not endothelial pore",
      "Gap junction — intercellular channel, not transcellular fenestration",
    ],
    pediatrics:
      "Neonatal glomerular filtration is immature (lower GFR) despite fenestrated endothelium present from development — function matures over weeks.",
  },
  {
    id: "gap-junction",
    name: "Gap Junction",
    aliases: [
      "gap junction",
      "gap junctions",
      "nexus",
      "electrical synapse",
    ],
    definition:
      "Intercellular channel formed by paired connexons (hexameric connexin proteins) allowing direct cytoplasmic exchange of ions and small molecules (<1 kDa) between adjacent cells.",
    characteristics: [
      "Connexin isoforms tissue-specific (e.g., connexin 43 in heart, connexin 26 in cochlea)",
      "Electrical synapse in cardiac muscle and smooth muscle — rapid coordinated depolarization",
      "Permits metabolic coupling (glucose, amino acids, second messengers)",
      "At intercalated discs in cardiomyocytes alongside desmosomes and adherens junctions",
    ],
    clinicalRelevance: [
      "Heart — gap junctions propagate action potentials for synchronized contraction",
      "Connexin 26 mutations → autosomal recessive nonsyndromic hearing loss (GJB2)",
      "Visceromegaly and arrhythmia when gap junction assembly impaired",
      "Gap junction blockade (e.g., heptanol) uncouples cardiac cells experimentally",
    ],
    boardsPearls: [
      "Gap junction = connexins; tight junction = claudins/occludin — different families",
      "Cardiac intercalated disc: desmosomes (mechanical) + gap junctions (electrical)",
      "Connexin 26 — most common genetic cause of congenital deafness",
    ],
    distinguishFrom: [
      "Tight junction — seals paracellular space; no cytoplasmic continuity",
      "Desmosome — mechanical adhesion via keratin, not ion channel",
      "Synaptic cleft — chemical neurotransmission across extracellular space",
    ],
    pediatrics:
      "GJB2 (connexin 26) screening is standard in newborn hearing loss workup; often nonsyndromic but may pair with palmoplantar keratoderma (Vohwinkel).",
  },
  {
    id: "dna-methylation",
    name: "DNA Methylation",
    aliases: [
      "dna methylation",
      "cpg methylation",
      "cytosine methylation",
    ],
    definition:
      "Epigenetic modification adding a methyl group to cytosine (usually in CpG dinucleotides) by DNA methyltransferases (DNMTs), generally repressing gene transcription when occurring in promoter CpG islands.",
    characteristics: [
      "DNMT3 — de novo methylation during development; DNMT1 — maintenance methylation after replication",
      "Methylated CpG attracts methyl-CpG-binding proteins (e.g., MeCP2) → chromatin compaction",
      "Genomic imprinting — differential methylation of maternal vs paternal alleles",
      "Global hypomethylation in aging and cancer; locus-specific hypermethylation silences tumor suppressors",
    ],
    clinicalRelevance: [
      "Imprinting disorders — Prader-Willi (paternal deletion/methylation defect), Angelman (maternal)",
      "Rett syndrome — MeCP2 mutation impairs reading of methylated DNA",
      "MLH1 promoter hypermethylation → microsatellite instability in sporadic colon cancer",
      "Fragile X — CGG expansion triggers abnormal methylation silencing FMR1",
    ],
    boardsPearls: [
      "DNA methylation generally silences genes (vs histone acetylation → activation)",
      "Imprinting: methylation marks parent-of-origin allele expression",
      "5-azacytidine — demethylating agent used in myelodysplastic syndromes",
    ],
    distinguishFrom: [
      "Histone acetylation — loosens chromatin, activates transcription",
      "DNA mutation — permanent sequence change; methylation is epigenetic and potentially reversible",
      "Uracil methylation — RNA modification, not DNA epigenetics",
    ],
    pediatrics:
      "Imprinting disorders present in infancy/childhood — PWS (hypotonia, obesity, hyperphagia); Angelman (happy puppet, seizures, ataxia).",
  },
  {
    id: "epigenetics",
    name: "Epigenetics",
    aliases: [
      "epigenetics",
      "epigenetic",
      "epigenetic modification",
      "epigenetic modifications",
      "epigenetic regulation",
    ],
    definition:
      "Heritable (through cell division) or reversible changes in gene expression without alteration of the underlying DNA sequence, mediated by chromatin structure and chemical modifications.",
    characteristics: [
      "Major mechanisms: DNA methylation, histone modifications (acetylation, methylation, phosphorylation), chromatin remodeling, noncoding RNA (miRNA)",
      "Establishes cell-type-specific gene expression programs during differentiation",
      "X-chromosome inactivation (Barr body) — epigenetic silencing via XIST RNA and heterochromatin",
      "Environment and aging can alter epigenetic marks (boards context for cancer and imprinting)",
    ],
    clinicalRelevance: [
      "Genomic imprinting disorders (Prader-Willi, Angelman, Beckwith-Wiedemann)",
      "Cancer — silencing tumor suppressors via promoter methylation; altered histone marks",
      "Rett syndrome — epigenetic reader (MeCP2) dysfunction",
      "HDAC inhibitors (vorinostat) and demethylating agents in hematologic malignancies",
    ],
    boardsPearls: [
      "Epigenetic = expression change without DNA sequence change",
      "Methylation (silencing) vs acetylation (activation) — classic boards contrast",
      "Imprinting is epigenetic parent-of-origin expression — not a mutation in the gene itself (usually)",
    ],
    distinguishFrom: [
      "Genetic mutation — changes nucleotide sequence permanently",
      "Post-translational modification of proteins — different layer from chromatin epigenetics",
      "RNA splicing — co/post-transcriptional processing, not classic epigenetic mark",
    ],
    pediatrics:
      "Beckwith-Wiedemann — overgrowth, omphalocele, Wilms tumor risk; epigenetic/imprinting defect at 11p15.",
  },
  {
    id: "acetylation",
    name: "Acetylation",
    aliases: [
      "acetylation",
      "histone acetylation",
      "histone acetylation and deacetylation",
    ],
    definition:
      "Addition of an acetyl group to lysine residues on histone tails (by histone acetyltransferases, HATs), neutralizing positive charge → relaxed chromatin (euchromatin) → increased gene transcription.",
    characteristics: [
      "HATs (e.g., CBP/p300) add acetyl groups; HDACs remove them → chromatin condensation (heterochromatin)",
      "Acetylation also occurs on non-histone proteins (p53, tubulin) with distinct functional effects",
      "Bromodomains on transcription factors recognize acetylated lysines",
      "Opposes the repressive effect of DNA methylation and histone deacetylation",
    ],
    clinicalRelevance: [
      "HDAC inhibitors (vorinostat, romidepsin) — used in cutaneous T-cell lymphoma; re-express silenced genes",
      "Rubinstein-Taybi — CBP/p300 HAT haploinsufficiency → intellectual disability, broad thumbs",
      "HAT/HDAC balance dysregulated in cancer and neurodegenerative disease",
    ],
    boardsPearls: [
      "Histone acetylation = transcriptionally ACTIVE chromatin (euchromatin)",
      "Histone deacetylation (HDAC) = silencing; HDAC inhibitors used in oncology",
      "Methylation of DNA or histones generally represses; acetylation of histones activates — boards favorite contrast",
    ],
    distinguishFrom: [
      "DNA methylation — represses transcription via CpG island methylation",
      "Histone methylation — can activate or repress depending on residue (e.g., H3K4me activates, H3K27me represses)",
      "Phosphorylation — separate histone mark; e.g., linked to chromosome condensation in mitosis",
    ],
    pediatrics:
      "Rubinstein-Taybi syndrome — congenital broad thumbs/toes, facial dysmorphism, intellectual disability; CBP HAT defect.",
  },
  {
    id: "dna-transcription",
    name: "DNA Transcription",
    aliases: [
      "dna transcription",
      "transcription",
      "gene transcription",
      "rna transcription",
    ],
    definition:
      "Synthesis of RNA from a DNA template by RNA polymerase; in eukaryotes, RNA Pol II transcribes mRNA genes in the nucleus to produce primary (pre-mRNA) transcripts.",
    characteristics: [
      "RNA Pol I — rRNA; Pol II — mRNA/hnRNA; Pol III — tRNA and 5S rRNA",
      "Promoter recognition: TATA box (~−25), CAAT box; general transcription factors (TFIID, etc.) assemble at promoter",
      "Product is pre-mRNA — requires 5′ cap, splicing, and 3′ poly-A tail before export to cytoplasm",
      "Alpha-amanitin (death cap mushroom) inhibits RNA Pol II → liver failure",
    ],
    clinicalRelevance: [
      "Alpha-amanitin poisoning — blocks Pol II transcription",
      "Promoter mutations and transcription factor defects in developmental syndromes",
      "HIV integrase inserts proviral DNA; viral transcription from LTR requires host Pol II",
      "Corticosteroids and thyroid hormone act via nuclear receptors that regulate transcription",
    ],
    boardsPearls: [
      "Transcription = DNA → RNA (nucleus); translation = RNA → protein (cytoplasm/ribosome)",
      "RNA Pol II makes pre-mRNA; Pol I = rRNA; Pol III = tRNA — boards triplet",
      "Alpha-amanitin → RNA Pol II inhibition",
    ],
    distinguishFrom: [
      "DNA replication — DNA → DNA; occurs before cell division",
      "mRNA translation — ribosome reads mature mRNA to synthesize protein",
      "Reverse transcription — RNA → DNA (retroviruses, telomerase)",
    ],
    pediatrics:
      "Congenital transcription factor mutations (e.g., TFIIH in xeroderma pigmentosum) impair DNA repair and transcription-coupled repair.",
  },
  {
    id: "pre-mrna",
    name: "Pre-mRNA",
    aliases: [
      "pre-mrna",
      "pre mrna",
      "premrna",
      "primary transcript",
      "primary rna transcript",
      "hnrna",
      "heterogeneous nuclear rna",
    ],
    definition:
      "Initial RNA product of RNA polymerase II containing both exons and introns; processed in the nucleus into mature mRNA by capping, splicing, and polyadenylation before nuclear export.",
    characteristics: [
      "5′ cap (7-methylguanosine) added co-transcriptionally — ribosome recognition, stability",
      "Spliceosome (snRNPs) removes introns and joins exons — lariat intermediate",
      "3′ poly-A tail added after cleavage at polyadenylation signal (AAUAAA)",
      "Alternative splicing — one gene → multiple protein isoforms from different exon combinations",
    ],
    clinicalRelevance: [
      "β-thalassemia — splicing mutations in β-globin pre-mRNA → aberrant mRNA, ↓ β-chain",
      "Spinal muscular atrophy — SMN2 splicing defect; nusinersen modifies splicing",
      "Myotonic dystrophy — toxic RNA sequesters splicing factors (MBNL)",
      "Intron retention or cryptic splice sites → frameshift or truncated proteins",
    ],
    boardsPearls: [
      "Pre-mRNA processing order: 5′ cap → splicing → poly-A tail (all in nucleus)",
      "Spliceosome snRNPs: U1, U2, U4, U5, U6 — U1 at 5′ splice site, U2 at branch point",
      "Mature mRNA has exons only; introns never leave nucleus",
    ],
    distinguishFrom: [
      "Mature mRNA — processed, exported to cytoplasm for translation",
      "tRNA/rRNA — different RNA Pol products, not spliced pre-mRNA",
      "cDNA — DNA copy of spliced mRNA (no introns); used in cloning and PCR",
    ],
    pediatrics:
      "Spinal muscular atrophy — SMN1 deletion; SMN2 produces low functional SMN via inefficient splicing; nusinersen approved in infants.",
  },
  {
    id: "mrna-translation",
    name: "mRNA Translation",
    aliases: [
      "mrna translation",
      "messenger rna translation",
      "translation",
      "protein synthesis",
      "protein translation",
    ],
    definition:
      "Ribosome-mediated synthesis of polypeptide chains using mature mRNA as template; tRNA anticodons pair with mRNA codons and deliver amino acids in the 5′→3′ direction.",
    characteristics: [
      "Initiation: small ribosomal subunit + initiator tRNA (Met) at start codon AUG; requires eIFs and 5′ cap",
      "Elongation: peptidyl transferase (rRNA ribozyme activity) forms peptide bonds; ribosome translocates",
      "Termination: release factors at stop codons (UAA, UAG, UGA)",
      "Rough ER — ribosomes translate secreted and membrane proteins co-translationally into ER lumen",
    ],
    clinicalRelevance: [
      "Antibiotics target bacterial ribosomes: aminoglycosides (30S), macrolides/clindamycin (50S)",
      "Diphtheria toxin — ADP-ribosylates EF-2 → blocks elongation",
      "Pseudomonas exotoxin A — same EF-2 target",
      "Ricin — depurinates 28S rRNA → inactivates 60S subunit",
    ],
    boardsPearls: [
      "Translation = mRNA → protein at ribosome; transcription = DNA → RNA in nucleus",
      "Start codon AUG; stop codons need no tRNA — release factors instead",
      "EF-2 is eukaryotic elongation factor — targeted by diphtheria toxin",
      "Chloramphenicol, macrolides, clindamycin — 50S; aminoglycosides, tetracyclines — 30S",
    ],
    distinguishFrom: [
      "DNA transcription — DNA template, RNA product, nuclear",
      "Post-translational modification — glycosylation, phosphorylation after ribosome release",
      "DNA replication — DNA polymerase, not ribosome",
    ],
    pediatrics:
      "Aminoglycosides carry risk of ototoxicity and nephrotoxicity in neonates — avoid when possible; same 30S ribosomal target as in adults.",
  },
];

const cellById = new Map(CELLS.map((entry) => [entry.id, entry]));

export function getCellById(id: string): CellEntry | undefined {
  return cellById.get(id);
}

export interface CellAliasMatch {
  alias: string;
  cellId: string;
}

export function buildCellAliasIndex(): CellAliasMatch[] {
  const matches: CellAliasMatch[] = [];
  for (const entry of CELLS) {
    for (const alias of entry.aliases) {
      matches.push({ alias: alias.toLowerCase(), cellId: entry.id });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
