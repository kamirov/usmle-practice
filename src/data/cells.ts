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
    id: "eosinophil",
    name: "Eosinophil",
    aliases: ["eosinophil", "eosinophils", "eos"],
    definition:
      "Granulocyte with bilobed nucleus and large eosinophilic cytoplasmic granules; defends against helminths and participates in allergic and atopic inflammation via granule proteins and cytokine release.",
    characteristics: [
      'Bilobed nucleus; coarse orange-pink granules on H&E (eosinophilic = "eosin-loving" stain)',
      "Granule contents: major basic protein (MBP), eosinophil peroxidase, cationic protein, IL-5 receptor",
      "Activated by IL-5 (Th2) and eotaxins (chemokines); recruited to tissues in allergy and parasitic infection",
      "Kills helminths too large to phagocytose — degranulation onto parasite surface",
      "Normal peripheral count ~1–4% of WBCs (absolute eosinophil count ~50–500 /µL)",
    ],
    clinicalRelevance: [
      "Eosinophilia: helminth/parasite infection, atopy (asthma, eczema), drug reactions, Hodgkin lymphoma",
      "Hypereosinophilic syndrome — end-organ damage from persistent eosinophilia (heart, lungs, nerves)",
      "Eosinophilic esophagitis — food allergy–associated dysphagia with tissue eosinophils",
      "EGPA (Churg-Strauss) — asthma, eosinophilia, granulomatous vasculitis, MPO-ANCA",
      "Eosinopenia with corticosteroids — sequestration in lymphoid tissue (demargination pattern)",
    ],
    boardsPearls: [
      "Eosinophils + parasites/allergy; neutrophils + bacteria — classic differential pairing",
      "IL-5 from Th2 drives eosinophil production — links to Th2/IgE axis",
      "Corticosteroids ↓ eosinophil count; also ↓ basophils",
      "Major basic protein damages helminths and can injure host tissue (airway remodeling in asthma)",
    ],
    distinguishFrom: [
      "Basophil — darkest purple granules obscure nucleus; histamine/heparin; rarest granulocyte",
      "Neutrophil — multilobed nucleus, neutral granules; acute bacterial infection",
      "Mast cell — tissue-resident; similar allergy role but fixed in tissues, not circulating WBC",
    ],
    pediatrics:
      "Parasitic infections (pinworm, Ascaris) and atopic disease common causes of eosinophilia in children; eosinophilic esophagitis presents with feeding difficulty or dysphagia in adolescents.",
  },
  {
    id: "basophil",
    name: "Basophil",
    aliases: ["basophil", "basophils"],
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
    id: "mast-cell",
    name: "Mast Cell",
    aliases: ["mast cell", "mast cells"],
    definition:
      "Tissue-resident granulated immune cell of myeloid lineage found in skin, mucosa, and perivascular spaces; central effector of type I hypersensitivity and innate defense against helminths via IgE-mediated degranulation.",
    characteristics: [
      "High-affinity IgE receptor (FcεRI) on surface — cross-linking by allergen triggers degranulation",
      "Granules contain histamine, heparin, tryptase, chymase, and generate leukotrienes (LTC4, LTD4)",
      "Circulating counterpart is the basophil; mast cells are fixed in tissues",
      "Also activated by complement (C3a, C5a), neuropeptides, and direct tissue injury",
    ],
    clinicalRelevance: [
      "Type I hypersensitivity — anaphylaxis, urticaria, allergic rhinitis, asthma (early phase)",
      "Systemic mastocytosis — KIT (c-KIT) mutations → ↑ mast cells, flushing, anaphylaxis, ↑ tryptase",
      "Mast cell stabilizers (cromolyn) prevent degranulation in asthma/allergy",
      "Antihistamines (H1 blockers) counter histamine effects after degranulation",
    ],
    boardsPearls: [
      "Mast cell degranulation: allergen cross-links IgE on FcεRI → histamine + leukotrienes",
      "Mast cell (tissue) vs basophil (blood) — both IgE-mediated type I hypersensitivity",
      "↑ serum tryptase suggests mast cell activation (anaphylaxis, mastocytosis)",
      "Epinephrine first-line in anaphylaxis — not antihistamines alone",
    ],
    distinguishFrom: [
      "Basophil — circulating granulocyte with similar granules; CML basophilia",
      "Eosinophil — parasites and allergy; major basic protein, not histamine-rich degranulation",
      "Macrophage — phagocyte; no IgE-mediated histamine release",
    ],
    pediatrics:
      "Food allergy anaphylaxis common in children — mast cell/IgE mediated; epinephrine auto-injector and action plan essential.",
  },
  {
    id: "lymphocyte",
    name: "Lymphocyte",
    aliases: ["lymphocyte", "lymphocytes"],
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
    aliases: ["monocyte", "monocytes"],
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
      "Macrophage — tissue-differentiated monocyte; same lineage, different compartment",
      "Neutrophil — acute bacterial infection, segmented nucleus",
      "Lymphocyte — smaller, round nucleus; adaptive immunity",
    ],
    pediatrics:
      "Juvenile myelomonocytic leukemia (JMML) — proliferation of myelomonocytic lineage in young children.",
  },
  {
    id: "macrophage",
    name: "Macrophage",
    aliases: [
      "macrophage",
      "macrophages",
      "tissue macrophage",
      "tissue macrophages",
      "histiocyte",
      "histiocytes",
    ],
    definition:
      "Tissue-resident phagocyte derived from circulating monocytes; engulfs pathogens, debris, and apoptotic cells and functions as an antigen-presenting cell in innate and adaptive immunity.",
    characteristics: [
      "Differentiates from monocytes after extravasation into tissues",
      "Named by location: Kupffer (liver), alveolar (lung), microglia (CNS), splenic, peritoneal",
      "Expresses MHC class II — presents antigen to CD4⁺ T cells",
      "Activated by IFN-γ from Th1 cells → enhanced microbicidal activity (iNOS, ROI)",
      "Can fuse to form multinucleated giant cells in granulomas or osteoclasts in bone",
    ],
    clinicalRelevance: [
      "Granulomatous inflammation — epithelioid macrophages and giant cells (TB, sarcoidosis)",
      "Atherosclerosis — foam cells are lipid-laden macrophages in intima",
      "Gaucher disease — glucocerebroside-filled macrophages (Gaucher cells)",
      "Hemophagocytic lymphohistiocytosis — activated macrophages phagocytose blood cells",
      "Heart failure cells — hemosiderin-laden alveolar macrophages in pulmonary congestion",
    ],
    boardsPearls: [
      "Monocyte in blood → macrophage in tissue (mononuclear phagocyte system)",
      "Th1/IFN-γ activates macrophages for intracellular pathogens (TB, Listeria)",
      "Lipid-laden macrophage = foam cell (atherosclerosis); hemosiderin-laden = heart failure cell",
      "Osteoclasts and giant cells are macrophage derivatives",
      "vs neutrophil — macrophage for chronic/granulomatous; neutrophil for acute pus",
    ],
    distinguishFrom: [
      "Monocyte — circulating precursor; kidney-shaped nucleus in peripheral blood",
      "Neutrophil — granulocyte; acute bacterial infection, pus formation",
      "Dendritic cell — professional APC; Langerhans cell in epidermis, not dermal macrophage",
      "NK cell — innate lymphocyte; no phagocytosis, kills via perforin/granzyme",
    ],
    pediatrics:
      "HLH in children — fever, cytopenias, hyperferritin, hemophagocytosis on marrow; treat underlying trigger and immunosuppression.",
  },
  {
    id: "cd4-t-lymphocyte",
    name: "CD4+ T Lymphocyte",
    aliases: [
      "cd4+",
      "cd4⁺",
      "cd4",
      "cd4+ t-lymphocyte",
      "cd4+ t lymphocyte",
      "cd4⁺ t lymphocyte",
      "cd4 t lymphocyte",
      "cd4+ t cell",
      "cd4+ t cells",
      "cd4⁺ t cell",
      "cd4⁺ t cells",
      "cd4 t cell",
      "cd4 count",
      "cd4 lymphocyte",
      "cd4+ lymphocyte",
      "cd4⁺ lymphocyte",
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
      "CD8+ T lymphocyte — kills infected cells; MHC class I",
      "B lymphocyte — antibody production; CD19/CD20 markers",
    ],
    pediatrics:
      "HIV-infected children: CD4 percentage often used alongside absolute count because total lymphocyte numbers differ by age.",
  },
  {
    id: "cd8-t-lymphocyte",
    name: "CD8+ T Lymphocyte",
    aliases: [
      "cd8+",
      "cd8⁺",
      "cd8",
      "cd8+ t-lymphocyte",
      "cd8+ t lymphocyte",
      "cd8⁺ t lymphocyte",
      "cd8+ t cell",
      "cd8+ t cells",
      "cd8⁺ t cell",
      "cd8⁺ t cells",
      "cd8 t cell",
      "cd8 lymphocyte",
      "cd8+ lymphocyte",
      "cd8⁺ lymphocyte",
      "cytotoxic t cell",
      "cytotoxic t cells",
      "ctl",
    ],
    definition:
      "T lymphocyte subset bearing CD8 co-receptor; recognizes endogenous antigen on MHC class I and kills infected or malignant cells via perforin/granzyme and Fas-FasL pathways.",
    characteristics: [
      "MHC class I restriction — surveys all nucleated cells for intracellular antigen",
      "Effector mechanisms: perforin/granzyme apoptosis, Fas ligand, IFN-γ secretion",
      "Central to antiviral immunity and tumor surveillance",
      "Atypical lymphocytes in EBV mononucleosis are often reactive CD8⁺ T cells",
    ],
    clinicalRelevance: [
      "Viral clearance — CMV, EBV, influenza, HIV (early control before CD4 loss)",
      "Type IV hypersensitivity effector (alongside CD4⁺ Th1 cells)",
      "GVHD and transplant rejection — donor CD8⁺ cells attack host MHC I",
      "Checkpoint inhibitors (anti–PD-1, anti–CTLA-4) disinhibit CD8⁺ antitumor activity",
    ],
    boardsPearls: [
      "CD8 + MHC I; CD4 + MHC II — co-receptor pairing is essential",
      "EBV mono — atypical lymphocytes = reactive CD8⁺ T cells attacking infected B cells",
      "Intracellular pathogens (viruses, Listeria) → CD8⁺ and Th1/CD4⁺ responses",
      "vs NK cell — innate killing without TCR; CD8⁺ requires antigen-specific TCR",
    ],
    distinguishFrom: [
      "CD4+ T lymphocyte — MHC II, helper/coordinator role",
      "NK cell — innate lymphocyte; CD16/CD56⁺, no CD3/TCR",
      "B lymphocyte — antibody production; CD19/CD20",
    ],
    pediatrics:
      "EBV mononucleosis common in adolescents — marked atypical CD8⁺ lymphocytosis on smear.",
  },
  {
    id: "t-lymphocyte",
    name: "T Lymphocyte",
    aliases: [
      "t-lymphocyte",
      "t lymphocyte",
      "t lymphocytes",
      "t cell",
      "t cells",
      "t-lymphocytes",
    ],
    definition:
      "Adaptive immune lymphocyte that mediates cell-mediated immunity via T-cell receptor (TCR) recognition of peptide–MHC complexes; includes CD4⁺ helper and CD8⁺ cytotoxic subsets.",
    characteristics: [
      "Surface markers: CD3 (pan-T), TCR (αβ or γδ), plus CD4 or CD8 co-receptor",
      "CD4⁺ — MHC class II (APC-presented antigen); helper subsets Th1, Th2, Th17, Tfh, Treg",
      "CD8⁺ — MHC class I (all nucleated cells); kills virus-infected and tumor cells via perforin/granzyme",
      "Develop in thymus — positive selection (MHC restriction) and negative selection (eliminate self-reactive clones)",
    ],
    clinicalRelevance: [
      "HIV destroys CD4⁺ T cells → immunodeficiency (AIDS)",
      "DiGeorge syndrome — thymic aplasia → ↓ T cells, normal B cells (T-cell immunodeficiency)",
      "SCID — severe combined immunodeficiency when T and B cell development impaired",
      "GVHD and transplant rejection — donor T cells attack host MHC",
      "Type IV hypersensitivity — delayed T-cell–mediated inflammation (TB skin test, contact dermatitis)",
    ],
    boardsPearls: [
      "T cells = cell-mediated immunity; B cells = humoral (antibody)",
      "CD4 + MHC II; CD8 + MHC I — co-receptor restriction is boards essential",
      "Cannot recognize native antigen without MHC presentation (unlike B-cell receptor)",
      "Atypical lymphocytes in EBV = reactive CD8⁺ T cells attacking infected B cells",
    ],
    distinguishFrom: [
      "B lymphocyte — surface immunoglobulin, antibody production, CD19/CD20",
      "NK cell — innate; kills without prior sensitization; CD16/CD56, no TCR/CD3",
      "CD4+ T lymphocyte — subset of T cells; helper/coordinator role specifically",
    ],
    pediatrics:
      "DiGeorge: conotruncal heart defects, hypocalcemia, absent thymic shadow, recurrent viral/fungal infections from T-cell deficiency.",
  },
  {
    id: "t-cell-signaling",
    name: "T-Cell Signaling",
    aliases: [
      "t-cell signaling",
      "t cell signaling",
      "t-cell activation",
      "t cell activation",
      "tcr signaling",
      "t-cell activation signaling",
    ],
    definition:
      "Two-signal process required for full T-lymphocyte activation: Signal 1 (TCR recognition of peptide–MHC) plus Signal 2 (CD28 co-stimulation by B7 on APC), leading to IL-2 production, clonal expansion, and effector differentiation.",
    characteristics: [
      "Signal 1: TCR–CD3 complex binds peptide–MHC (CD4⁺ + MHC II on APC; CD8⁺ + MHC I on any nucleated cell)",
      "Signal 2: CD28 on T cell binds B7 (CD80/CD86) on APC — required to avoid anergy; CTLA-4 later binds B7 with higher affinity → inhibition",
      "TCR ligation → PLCγ → IP3 (Ca²⁺ release) + DAG → calcineurin activates NFAT → IL-2 gene transcription",
      "IL-2 autocrine loop via high-affinity IL-2 receptor → clonal T-cell proliferation",
      "Cytokine milieu drives differentiation: IL-12/IFN-γ → Th1; IL-4 → Th2; TGF-β + IL-6 → Th17; TGF-β → Treg",
    ],
    clinicalRelevance: [
      "Calcineurin inhibitors (tacrolimus, cyclosporine) block Signal 1 downstream → ↓ IL-2 → immunosuppression in transplant",
      "Sirolimus inhibits mTOR downstream of IL-2 receptor — synergistic with calcineurin inhibitors",
      "Immune checkpoint inhibitors — ipilimumab (anti–CTLA-4), pembrolizumab/nivolumab (anti–PD-1) release T-cell brakes in cancer",
      "Superantigens (S. aureus TSST-1, enterotoxins) cross-link TCR and MHC II outside peptide groove → massive cytokine release (toxic shock)",
      "Anergy when Signal 1 without Signal 2 — peripheral tolerance mechanism",
    ],
    boardsPearls: [
      "Two-signal model: TCR (Signal 1) + CD28/B7 (Signal 2) = full activation; missing Signal 2 → anergy",
      "Calcineurin → NFAT → IL-2 is the key pharmacology pathway for transplant drugs",
      "CD4 + MHC II; CD8 + MHC I — co-receptor strengthens TCR binding to correct MHC class",
      "CTLA-4 and PD-1 are inhibitory checkpoints — blockade unleashes anti-tumor T-cell responses",
      "Superantigen = polyclonal T-cell activation without specific peptide in MHC groove",
    ],
    distinguishFrom: [
      "B-cell activation — BCR binds native antigen; requires CD40–CD40L (T-cell help) for class switching, not TCR/MHC",
      "NK cell killing — no TCR, no MHC restriction; KIR recognition",
      "Type I hypersensitivity — IgE/mast cell, immediate; not T-cell receptor signaling",
      "Calcineurin — single enzyme in the pathway; T-cell signaling is the full activation cascade",
    ],
    pediatrics:
      "X-linked SCID (IL-2 receptor γ-chain defect) abolishes IL-2/IL-4/IL-7/IL-15 signaling → no T-cell development; bubble boy phenotype.",
  },
  {
    id: "th2",
    name: "Th2",
    aliases: [
      "th2",
      "th 2",
      "th2 cell",
      "th2 cells",
      "t helper 2",
      "t-helper 2",
      "t helper 2 cell",
      "t helper 2 cells",
      "type 2 helper t cell",
    ],
    definition:
      "CD4⁺ T-helper subset differentiated under IL-4 signaling (STAT6, GATA3) that coordinates humoral and allergic immunity by secreting IL-4, IL-5, and IL-13.",
    characteristics: [
      "Differentiation driven by IL-4 from naïve CD4⁺ cells or innate sources (mast cells, basophils); inhibited by IFN-γ/Th1 skew",
      "IL-4 — B-cell class switching to IgE and IgG4; promotes B-cell proliferation",
      "IL-5 — eosinophil growth, recruitment, and activation (helminths, allergy)",
      "IL-13 — ↑ mucus production, airway hyperreactivity, subepithelial fibrosis (similar overlap with IL-4)",
      "Transcription factor GATA3 is the master regulator of Th2 lineage commitment",
    ],
    clinicalRelevance: [
      "Atopic diseases — asthma, allergic rhinitis, atopic dermatitis (Th2/IgE/eosinophil axis)",
      "Helminth and parasite defense — IgE and eosinophil-mediated killing",
      "Dupilumab (anti–IL-4Rα) and other biologics target downstream Th2 cytokine signaling",
      "Excessive Th2 skew in atopy; balanced Th1 responses needed for intracellular pathogens (M. tuberculosis, viruses)",
    ],
    boardsPearls: [
      "Th2 cytokines: IL-4, IL-5, IL-13 — memorize as a triad",
      "Th1 (IFN-γ, IL-12) vs Th2 (IL-4, IL-5, IL-13) — classic USMLE paradigm",
      "IL-4 from Th2 → IgE → mast cell sensitization → type I hypersensitivity",
      "GATA3 drives Th2; T-bet drives Th1 — transcription factor boards favorite",
    ],
    distinguishFrom: [
      "Th1 — IFN-γ production; activates macrophages for intracellular bacteria and viruses",
      "Th17 — IL-17; neutrophil recruitment; fungal defense and autoimmunity",
      "Treg — FoxP3⁺; suppresses immune responses; maintains tolerance",
      "CD4+ T lymphocyte — parent category; Th2 is one effector subset",
    ],
    pediatrics:
      "Atopic march — infant eczema (Th2-skewed) often precedes food allergy and childhood asthma; early Th2 sensitization is a key pediatric immunology concept.",
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
      '"Leaky" epithelia (proximal tubule) vs "tight" epithelia (distal colon, bladder)',
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
    aliases: [
      "fenestrae",
      "fenestra",
      "fenestrated endothelium",
      "fenestrations",
    ],
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
    aliases: ["gap junction", "gap junctions", "nexus", "electrical synapse"],
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
    aliases: ["dna methylation", "cpg methylation", "cytosine methylation"],
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
  {
    id: "myometrium",
    name: "Myometrium",
    aliases: ["myometrium", "uterine myometrium", "uterine muscle"],
    definition:
      "Thick middle smooth muscle layer of the uterus between the inner endometrium and outer serosa (perimetrium); responsible for uterine contractions during menstruation, labor, and postpartum involution.",
    characteristics: [
      "Smooth muscle bundles arranged in longitudinal, circular, and oblique layers",
      "Rich in oxytocin receptors — sensitivity ↑ dramatically in late pregnancy (parturition)",
      "Estrogen promotes hypertrophy and gap junction (connexin 43) expression → coordinated contractions",
      "Progesterone maintains quiescence during pregnancy; ↓ progesterone triggers labor",
      "Leiomyomas (fibroids) arise from myometrial smooth muscle proliferation",
    ],
    clinicalRelevance: [
      "Labor — oxytocin + prostaglandins (PGF₂α) stimulate myometrial contraction",
      "Postpartum hemorrhage — uterine atony (failed myometrial contraction); treat with oxytocin, massage, prostaglandins",
      "Uterine fibroids — benign myometrial tumors; menorrhagia, bulk symptoms",
      "Tocolytics (terbutaline, nifedipine, indomethacin) relax myometrium to delay preterm labor",
    ],
    boardsPearls: [
      "Myometrium = smooth muscle; endometrium = glandular lining shed in menses",
      "Oxytocin acts on myometrium; estrogen ↑ oxytocin receptor expression",
      "Uterine atony — boggy uterus postpartum → oxytocin first-line",
      "Fibroids (leiomyomas) — myometrial origin, estrogen-sensitive",
    ],
    distinguishFrom: [
      "Endometrium — inner mucosal layer; proliferative/secretory cycles, site of implantation",
      "Myocardium — cardiac muscle; not uterine smooth muscle",
      "Myoepithelial cells — surround mammary alveoli; contract for milk ejection",
    ],
    pediatrics:
      "Preterm labor — immature myometrium can be suppressed with tocolytics while giving steroids for fetal lung maturity; same oxytocin/prostaglandin axis as term labor.",
  },
  {
    id: "mucosa",
    name: "Mucosa",
    aliases: [
      "mucosa",
      "mucosal",
      "mucosal layer",
      "tunica mucosa",
      "mucous membrane",
      "mucous membranes",
    ],
    definition:
      "Innermost lining layer of hollow organs (GI, respiratory, and genitourinary tracts), composed of epithelium, lamina propria, and muscularis mucosae; specialized for secretion, absorption, barrier defense, and immune surveillance.",
    characteristics: [
      "Epithelium varies by site — columnar (GI), pseudostratified ciliated (respiratory), transitional (bladder)",
      "Lamina propria — loose connective tissue with capillaries, lymphatics, and immune cells",
      "Muscularis mucosae — thin smooth muscle permitting local mucosal movement",
      "Associated lymphoid tissue (MALT, Peyer's patches, tonsils) resides in or beneath mucosa",
    ],
    clinicalRelevance: [
      "Ulcerative colitis — continuous mucosal inflammation from rectum proximally",
      "Peptic ulcer disease — mucosal break in stomach or duodenum",
      "Celiac disease — T-cell injury to small bowel mucosa → villous atrophy",
      "H. pylori colonizes gastric mucosa; IgA predominates in mucosal secretions",
      "Barrier dysfunction in atopic disease and bacterial translocation across gut mucosa",
    ],
    boardsPearls: [
      "GI wall (inside out): mucosa → submucosa → muscularis propria → subserosa → serosa (intraperitoneal)",
      "UC = mucosal only; Crohn = transmural (full thickness)",
      "Mucosa is the site of absorption (small intestine), secretion (goblet cells), and most mucosal immunity",
      "vs submucosa — submucosa lies deep to muscularis mucosae; contains Meissner plexus and vessels",
    ],
    distinguishFrom: [
      "Serosa — outer mesothelial layer of intraperitoneal viscera, not the inner lining",
      "Submucosa — connective tissue layer beneath muscularis mucosae",
      "Adventitia — outer connective tissue of retroperitoneal organs without mesothelial covering",
      "Skin (epidermis/dermis) — not a mucosal surface; keratinized stratified squamous epithelium",
    ],
    pediatrics:
      "Necrotizing enterocolitis — mucosal injury and bacterial invasion in preterm gut; IgA in breast milk supports mucosal immunity in infants.",
  },
  {
    id: "lamina-propria",
    name: "Lamina Propria",
    aliases: [
      "lamina propria",
      "lamina propria layer",
      "lamina propria of mucosa",
    ],
    definition:
      "Loose connective tissue layer of the mucosa lying directly beneath the epithelium and superficial to the muscularis mucosae — contains capillaries, lymphatics, nerves, and immune cells that support epithelial function and mucosal immunity.",
    characteristics: [
      "Middle component of mucosa: epithelium → lamina propria → muscularis mucosae",
      "Rich in immune cells — plasma cells (IgA-producing), lymphocytes, macrophages, dendritic cells, mast cells",
      "Vascular and lymphatic plexus supplies epithelium and drains absorbed antigens to regional nodes",
      "Peyer's patches and other MALT aggregates extend into or lie immediately beneath lamina propria in gut",
      "Fibroblasts and extracellular matrix provide structural support to overlying epithelium",
    ],
    clinicalRelevance: [
      "Ulcerative colitis — inflammation confined to mucosa includes lamina propria with crypt abscesses",
      "Celiac disease — intraepithelial lymphocytosis and lamina propria plasma cell expansion",
      "H. pylori gastritis — inflammatory infiltrate in lamina propria",
      "IgA-secreting plasma cells in lamina propria produce dimeric IgA transported into gut lumen",
      "Allergic rhinitis and asthma — eosinophil and lymphocyte infiltration of respiratory lamina propria",
    ],
    boardsPearls: [
      "Lamina propria = loose CT under epithelium, above muscularis mucosae — site of mucosal immune cells",
      "Mucosa has three parts: epithelium, lamina propria, muscularis mucosae",
      "Submucosa lies deep to muscularis mucosae — contains Meissner plexus, larger vessels, Brunner glands (duodenum)",
      "UC affects mucosa (including lamina propria); Crohn is transmural beyond mucosa",
      "IgA plasma cells in lamina propria — secretory IgA defends mucosal surfaces",
    ],
    distinguishFrom: [
      "Submucosa — deeper layer below muscularis mucosae; Meissner plexus, submucosal glands",
      "Muscularis mucosae — thin smooth muscle between lamina propria and submucosa",
      "Dermis — connective tissue under skin epidermis; not part of mucosal layer nomenclature",
      "Epithelium — cellular lining above lamina propria; absorption and secretion occur here",
    ],
    pediatrics:
      "Breast milk IgA supports mucosal immunity in infant lamina propria; NEC involves mucosal and lamina propria injury in preterm gut.",
  },
  {
    id: "serosa",
    name: "Serosa",
    aliases: [
      "serosa",
      "serosal",
      "serosal layer",
      "tunica serosa",
      "visceral peritoneum",
    ],
    definition:
      "Outermost layer of intraperitoneal visceral organs, consisting of a thin connective tissue sheet covered by simple squamous mesothelial cells (visceral peritoneum); reduces friction between organs and the peritoneal cavity.",
    characteristics: [
      "Mesothelium — simple squamous epithelial cells secreting lubricating fluid",
      "Subserosal connective tissue with vessels and nerves entering from organ wall",
      "Continuous with mesentery and visceral peritoneal reflections",
      "Retroperitoneal organs (duodenum portions, pancreas, ascending/descending colon) have adventitia instead of serosa where not intraperitoneal",
    ],
    clinicalRelevance: [
      "Bowel perforation — spillage of contents into peritoneal cavity when serosa (and full wall) breached → peritonitis",
      "Serosal metastases — ovarian cancer (Krukenberg), gastric cancer seeding peritoneum",
      "Crohn fistulae and transmural disease extend beyond mucosa through to serosa/adjacent organs",
      "Serosal inflammation contributes to peritoneal adhesions post-surgery",
    ],
    boardsPearls: [
      "Serosa = visceral peritoneum on intraperitoneal organs; adventitia on retroperitoneal segments",
      "GI layers: mucosa (inner) → … → serosa (outer, if intraperitoneal)",
      "Peritonitis requires perforation or infection reaching peritoneal cavity — often through breached serosa",
      "vs parietal peritoneum — lines abdominal wall; visceral peritoneum is the serosa of organs",
    ],
    distinguishFrom: [
      "Mucosa — innermost functional lining for absorption/secretion, not outer covering",
      "Adventitia — outer fibrous layer of retroperitoneal structures without mesothelium",
      "Parietal peritoneum — lines body wall; serosa is visceral peritoneum on organ surface",
      "Capsule (liver, kidney) — organ-specific fibrous covering, not GI serosa",
    ],
    pediatrics:
      "Same anatomic layers in children; appendicitis perforation → serosal breach and peritonitis; NEC can progress to full-thickness necrosis and perforation.",
  },
  {
    id: "adventitia",
    name: "Adventitia",
    aliases: [
      "adventitia",
      "adventitial",
      "adventitial layer",
      "tunica adventitia",
    ],
    definition:
      "Outermost connective tissue layer of organs that lie outside the peritoneal cavity (retroperitoneal and mediastinal structures); dense fibrous tissue without a mesothelial covering, anchoring the organ to surrounding tissues.",
    characteristics: [
      "Dense irregular connective tissue with collagen, blood vessels, lymphatics, and nerves",
      "No mesothelial lining — unlike serosa, not continuous with visceral peritoneum",
      "Blends with surrounding retroperitoneal or mediastinal fascia",
      "Also the outermost tunic of blood vessels (tunica externa/adventitia)",
    ],
    clinicalRelevance: [
      "Retroperitoneal organs — duodenum (portions), pancreas, ascending/descending colon, rectum (partially), aorta, esophagus — covered by adventitia not serosa",
      "Pancreatic and retroperitoneal tumors spread along adventitial planes",
      "Aortic adventitia — aneurysm rupture into retroperitoneum (not free intraperitoneal rupture initially)",
      "Vascular adventitia contains vasa vasorum nourishing large vessel walls",
    ],
    boardsPearls: [
      "Adventitia vs serosa — retroperitoneal = adventitia; intraperitoneal = serosa (mesothelium-covered)",
      "GI wall outer layer: serosa if intraperitoneal; adventitia if retroperitoneal (2nd–4th duodenum, ascending colon, etc.)",
      "Esophagus has adventitia (no serosa) — mediastinal, not intraperitoneal",
      "Blood vessel tunica externa = adventitia — anchors vessel to surrounding tissue",
    ],
    distinguishFrom: [
      "Serosa — mesothelial covering on intraperitoneal viscera; lubricates within peritoneal cavity",
      "Mucosa — inner lining for absorption/secretion",
      "Organ capsule — liver and kidney fibrous capsule; distinct from GI adventitia",
      "Parietal peritoneum — lines abdominal wall, not organ outer layer",
    ],
    pediatrics:
      "Same retroperitoneal anatomy in children; retroperitoneal appendicitis or duodenal injury may localize differently than intraperitoneal perforation.",
  },
  {
    id: "dermal-appendage",
    name: "Dermal Appendage",
    aliases: [
      "dermal appendage",
      "dermal appendages",
      "skin appendage",
      "skin appendages",
      "skin adnexa",
      "cutaneous adnexa",
    ],
    definition:
      "Epidermal-derived structures that invaginate into the dermis, including hair follicles, sebaceous glands, eccrine and apocrine sweat glands, and nails; responsible for thermoregulation, barrier lubrication, and hair growth.",
    characteristics: [
      "Hair follicle — cycling growth (anagen, catagen, telogen); associated with arrector pili muscle",
      "Sebaceous gland — holocrine sebum secretion into hair follicle canal; lubricates skin and hair",
      "Eccrine sweat gland — widely distributed; watery sweat for thermoregulation (palms, soles, forehead)",
      "Apocrine sweat gland — axilla, areola, anogenital region; odorless secretion until bacterial breakdown; activated at puberty",
      "Nail unit — specialized keratinized plate over nail matrix",
    ],
    clinicalRelevance: [
      "Acne vulgaris — follicular hyperkeratinization + sebaceous hyperplasia + Cutibacterium acnes inflammation",
      "Hidradenitis suppurativa — apocrine/follicular occlusion in intertriginous areas",
      "Alopecia areata — autoimmune attack on hair follicle",
      "Fox-Fordyce disease — apocrine gland duct occlusion",
      "Sebaceous carcinoma — rare malignancy of sebaceous glands (Muir-Torre syndrome association)",
      "Eccrine porocarcinoma and other adnexal tumors",
    ],
    boardsPearls: [
      "Dermal appendages = hair + sebaceous + sweat glands + nails — all epidermal derivatives",
      "Acne targets pilosebaceous unit (hair follicle + sebaceous gland)",
      "Eccrine = cooling sweat everywhere; apocrine = body odor regions, puberty-dependent",
      "Basal cell carcinoma arises from hair follicle stem cells / epidermal basal layer",
      "vs epidermis alone — appendages are downgrowths into dermis with specialized glands",
    ],
    distinguishFrom: [
      "Epidermis — stratified squamous epithelium forming surface barrier; appendages are invaginations",
      "Dermis — connective tissue layer housing appendages but not itself an appendage",
      "Mucosa — GI/respiratory lining; no pilosebaceous units (except nasal vestibule hair)",
      "Exocrine pancreas/salivary glands — not cutaneous adnexal structures",
    ],
    pediatrics:
      "Neonatal acne from maternal androgens affects sebaceous glands; apocrine function minimal until puberty. Congenital absence of eccrine glands (anhidrotic ectodermal dysplasia) → heat intolerance.",
  },
  {
    id: "actin",
    name: "Actin",
    aliases: [
      "actin",
      "actin filament",
      "actin filaments",
      "microfilament",
      "microfilaments",
      "f-actin",
      "g-actin",
    ],
    definition:
      "Globular (G-actin) monomers polymerize into filamentous (F-actin) microfilaments — the thinnest cytoskeletal element (~7 nm), providing structural support, cell motility, and contractile force when coupled with myosin.",
    characteristics: [
      "Polar filaments with barbed (+) and pointed (−) ends; Arp2/3 nucleates branching (lamellipodia)",
      "Anchored at adherens junctions (E-cadherin → catenins → actin belt) and focal adhesions (integrin → actin)",
      "Thin filaments in muscle sarcomeres — interact with myosin for contraction",
      "Cortical actin underlies plasma membrane; drives phagocytosis, cytokinesis, and cell crawling",
    ],
    clinicalRelevance: [
      "Listeria monocytogenes ActA protein hijacks host actin → rocket motility and cell-to-cell spread",
      "Cytochalasin D — disrupts actin polymerization (lab tool; impairs phagocytosis)",
      "Latrunculin — sequesters G-actin → filament disassembly",
      "Inherited actin or sarcomeric mutations — cardiomyopathy and myopathy (less common boards focus)",
    ],
    boardsPearls: [
      "Actin = microfilaments; anchors adherens junctions and focal adhesions (not desmosomes)",
      "Desmosomes → intermediate filaments; adherens junctions → actin — classic pairing",
      "Listeria ActA → actin comet tails for intracellular motility",
      "Muscle: actin thin filaments + myosin thick filaments in sarcomere",
    ],
    distinguishFrom: [
      "Intermediate filaments — keratin at desmosomes; 10 nm, no polarity, no motor coupling",
      "Microtubules — tubulin, 25 nm; mitotic spindle, cilia, axonal transport",
      "Myosin — motor protein that moves along actin, not a filament itself",
    ],
    pediatrics:
      "Primary ciliary dyskinesia affects microtubules (dynein), not actin — Kartagener triad is a common boards distractor from actin pathology.",
  },
  {
    id: "intermediate-filament",
    name: "Intermediate Filament",
    aliases: [
      "intermediate filament",
      "intermediate filaments",
      "keratin filament",
      "keratin filaments",
      "desmin",
      "vimentin",
    ],
    definition:
      "Rope-like cytoskeletal filaments (~10 nm diameter) providing tensile strength; tissue-specific proteins polymerize into non-polar, stable networks anchored at desmosomes and hemidesmosomes.",
    characteristics: [
      "Keratin — epithelial cells (stratum spinosum desmosomes)",
      "Desmin — skeletal and cardiac muscle (Z-disc linkage)",
      "Vimentin — mesenchymal cells (fibroblasts, endothelium)",
      "Neurofilaments — neurons; lamins — nuclear lamina (nuclear envelope support)",
      "No polarity, no associated motor proteins — mechanical stress absorption",
    ],
    clinicalRelevance: [
      "Pemphigus vulgaris — anti-desmoglein antibodies → loss of keratin-anchored desmosomes → acantholysis",
      "Mallory bodies — keratin intermediate filament aggregates in alcoholic hepatitis",
      "Laminopathies — LMNA mutations → Hutchinson-Gilford progeria, muscular dystrophy",
      "Desmin-related myopathy — desmin IF accumulation → skeletal/cardiac muscle weakness",
    ],
    boardsPearls: [
      "Intermediate filaments at desmosomes (cell–cell) and hemidesmosomes (cell–BM)",
      "Keratin = epithelial IF; vimentin = mesenchymal; desmin = muscle — tissue-specific boards pattern",
      "vs actin (adherens junction) vs microtubules (cilia/spindle) — three cytoskeletal systems",
      "Mallory bodies = keratin aggregates in liver (alcoholic liver disease)",
    ],
    distinguishFrom: [
      "Actin microfilaments — adherens junctions, muscle thin filaments, motility",
      "Microtubules — tubulin; cilia, flagella, mitotic spindle",
      "Collagen — extracellular matrix protein, not intracellular cytoskeleton",
    ],
    pediatrics:
      "Epidermolysis bullosa simplex — keratin mutations → intraepidermal blistering with minimal trauma in infants.",
  },
  {
    id: "microtubule",
    name: "Microtubule",
    aliases: ["microtubule", "microtubules", "tubulin", "tubulin filament"],
    definition:
      "Hollow cylindrical polymers of α/β-tubulin dimers (~25 nm) — the largest cytoskeletal filaments; dynamic instability drives mitosis, intracellular transport, and ciliary/flagellar motility.",
    characteristics: [
      "Polar structure: fast-growing (+) end, slow-growing (−) end; γ-tubulin nucleates at MTOC/centrosome",
      "Mitotic spindle — chromosomes align and segregate at metaphase/anaphase",
      "Axonal transport — kinesin (anterograde toward + end) and dynein (retrograde toward − end)",
      "Cilia/flagella — 9+2 microtubule arrangement; dynein arms drive bending (ATP-dependent)",
    ],
    clinicalRelevance: [
      "Taxol (paclitaxel) — stabilizes microtubules → arrests mitosis (chemotherapy)",
      "Vincristine/vinblastine, colchicine — destabilize/depolymerize microtubules → M-phase arrest or gout (colchicine)",
      "Primary ciliary dyskinesia — dynein arm defect → immotile cilia, Kartagener syndrome (situs inversus, bronchiectasis, infertility)",
      "Alzheimer — tau stabilizes microtubules; hyperphosphorylated tau detaches → neurofibrillary tangles",
    ],
    boardsPearls: [
      "Microtubules = tubulin; actin = microfilaments; keratin/desmin = intermediate filaments",
      "Cilia 9+2 axoneme — microtubules + dynein, NOT actin",
      "Paclitaxel stabilizes; vincristine/colchicine destabilize — opposite mechanisms",
      "Kartagener: primary ciliary dyskinesia → situs inversus + chronic sinusitis + bronchiectasis",
    ],
    distinguishFrom: [
      "Actin — microfilaments for junctions and muscle thin filaments, not cilia/spindle",
      "Intermediate filaments — structural anchoring at desmosomes, no dynamic instability",
      "Myosin — motor on actin filaments; dynein/kinesin are microtubule motors",
    ],
    pediatrics:
      "Kartagener syndrome often diagnosed in childhood with recurrent sinusitis and laterality defects; immotile sperm in males.",
  },
  {
    id: "polymerization",
    name: "Polymerization",
    aliases: [
      "polymerization",
      "polymerisation",
      "actin polymerization",
      "microtubule polymerization",
      "tubulin polymerization",
      "filament polymerization",
    ],
    definition:
      "Assembly of monomer subunits into linear or branched polymers — key cytoskeletal processes include G-actin → F-actin microfilaments and α/β-tubulin dimers → microtubules; also applies to bacterial peptidoglycan cross-linking.",
    characteristics: [
      "Actin: ATP-driven addition at barbed (+) end; Arp2/3 nucleates branching for lamellipodia and phagocytic cup formation",
      "Microtubules: dynamic instability — growth and catastrophe at (+) end; γ-tubulin nucleates at centrosome/MTOC",
      "Peptidoglycan polymerization — transpeptidase cross-links peptide side chains (β-lactams inhibit PBPs)",
      "Colchicine binds tubulin → prevents polymerization; paclitaxel stabilizes polymers → arrests mitosis",
    ],
    clinicalRelevance: [
      "Colchicine — inhibits microtubule polymerization → ↓ neutrophil chemotaxis and phagocytosis in gout",
      "Vincristine/vinblastine — block microtubule assembly → M-phase arrest (chemotherapy)",
      "Paclitaxel — hyperstabilizes microtubules → mitotic arrest",
      "Cytochalasin D — blocks actin polymerization → impairs phagocytosis and cell motility",
      "β-lactam antibiotics — inhibit peptidoglycan polymerization (cell wall synthesis)",
    ],
    boardsPearls: [
      "Colchicine and vinca alkaloids prevent tubulin polymerization; taxanes stabilize existing microtubules",
      "Actin polymerization drives phagocytosis, cytokinesis, and Listeria ActA rocket motility",
      "Vancomycin inhibits peptidoglycan polymerization — Gram-positive cell wall",
      "Dynamic instability of microtubules — growth/catastrophe underlies mitotic spindle function",
    ],
    distinguishFrom: [
      "Depolymerization — filament disassembly (e.g., latrunculin sequesters G-actin)",
      "Cross-linking — transpeptidase step in peptidoglycan, distinct from monomer addition alone",
      "Intermediate filaments — assemble without dynamic polarity or treadmilling like actin/tubulin",
    ],
    pediatrics:
      "Colchicine toxicity in children — GI symptoms predominate; same microtubule mechanism as in adults.",
  },
  {
    id: "a-delta-fiber",
    name: "A-delta fiber",
    aliases: [
      "a-delta fiber",
      "a-delta fibers",
      "a delta fiber",
      "a delta fibers",
      "adelta fiber",
      "adelta fibers",
      "aδ fiber",
      "aδ fibers",
      "a-delta nociceptor",
      "a-delta nociceptors",
    ],
    definition:
      'Thinly myelinated peripheral nerve fibers (Aδ group) that conduct nociceptive and thermoreceptive signals rapidly; mediate sharp, well-localized "first pain" (pricking, stinging).',
    characteristics: [
      "Conduction velocity ~5–30 m/s — faster than unmyelinated C fibers, slower than Aβ fibers",
      "Aβ (large, myelinated) — touch, pressure, proprioception; Aδ — fast pain, cold; C — slow pain, warmth, itch",
      "Free nerve endings in skin, viscera, and other tissues; activated by mechanical, thermal, and chemical nociceptors",
      "Synapse in dorsal horn (laminae I and V) → spinothalamic tract to thalamus and cortex",
    ],
    clinicalRelevance: [
      "Acute injury — Aδ-mediated sharp pain arrives before C-fiber dull burning pain (double pain response)",
      "Local anesthetics block voltage-gated Na⁺ channels — smaller fibers (Aδ, C) blocked at lower concentrations than Aβ in some contexts",
      "Herpes zoster — reactivation in dorsal root ganglion → dermatomal sharp pain before rash",
      "Diabetic neuropathy — can affect both Aδ and C fibers → ↓ pain sensation, foot ulcers",
    ],
    boardsPearls: [
      "Aδ = fast/sharp pain (myelinated); C = slow/dull/burning pain (unmyelinated)",
      "Aβ = touch/proprioception; Aδ = fast pain; C = slow pain — classic fiber triad",
      "Spinothalamic tract carries pain and temperature (Aδ and C) — not proprioception (dorsal columns)",
      "Double pain: sharp first (Aδ), then dull (C) after seconds",
    ],
    distinguishFrom: [
      "C fibers — unmyelinated, slow conduction (~0.5–2 m/s), dull aching/burning second pain",
      "Aβ fibers — large myelinated; touch, vibration, proprioception; dorsal column pathway",
      "B fibers — preganglionic autonomic; myelinated, ~3–15 m/s",
    ],
    pediatrics:
      "Neonates and infants have functional nociceptive pathways (Aδ/C) — procedural pain requires analgesia; myth that infants do not feel pain is false.",
  },
  {
    id: "golgi-tendon-organ",
    name: "Golgi tendon organ",
    aliases: [
      "golgi tendon organ",
      "golgi tendon organs",
      "gto",
      "golgi tendon organ (gto)",
      "tendon organ of golgi",
    ],
    definition:
      "Proprioceptive mechanoreceptor in series with muscle fibers at the muscle–tendon junction; detects increased muscle tension (force) and mediates the inverse stretch reflex to prevent excessive contraction.",
    characteristics: [
      "Encapsulated endings innervated by type Ib afferent fibers (Aα)",
      "In series with extrafusal muscle fibers — activated when tendon/muscle generates tension, not when muscle is passively lengthened alone",
      "Activated during active contraction and stretch under load",
      "Synapse on inhibitory interneurons in spinal cord → ↓ α-motor neuron output to same muscle (autogenic inhibition)",
    ],
    clinicalRelevance: [
      "Protects muscle and tendon from rupture during forceful contraction — dampens motor output when tension is excessive",
      "Works with muscle spindles for coordinated movement and posture",
      "Clonus and hyperreflexia (UMN lesion) — exaggerated stretch reflex circuitry; GTO inhibition normally modulates reflex gain",
      "Relevant to resistance training physiology and tendon injury mechanics (boards context)",
    ],
    boardsPearls: [
      "GTO detects TENSION; muscle spindle detects LENGTH/change in length",
      "GTO → type Ib afferent → inhibitory interneuron → ↓ same muscle (inverse stretch reflex)",
      "Muscle spindle → type Ia/II → excitatory stretch reflex (DTR)",
      "GTO in series; muscle spindle parallel to extrafusal fibers",
    ],
    distinguishFrom: [
      "Muscle spindle — detects stretch/length change; Ia afferent; excites same muscle (stretch reflex)",
      "Pacinian corpuscle — rapid vibration/pressure in skin, not tendon tension",
      "Meissner corpuscle — light touch, low-frequency vibration in glabrous skin",
    ],
    pediatrics:
      "Infant reflexes (Moro, grasp) involve CNS reflex arcs; GTO-mediated autogenic inhibition develops with mature motor control during childhood.",
  },
  {
    id: "siderophage",
    name: "Siderophage",
    aliases: [
      "siderophage",
      "siderophages",
      "hemosiderin-laden macrophage",
      "hemosiderin laden macrophage",
      "hemosiderin-laden macrophages",
      "heart failure cell",
      "heart failure cells",
      "heart-failure cells",
    ],
    definition:
      "Macrophage that has phagocytosed extravasated erythrocytes and stored iron as hemosiderin (golden-brown cytoplasmic granules); classically seen in alveoli with chronic pulmonary venous hypertension.",
    characteristics: [
      "Derived from alveolar or tissue macrophages after RBC breakdown",
      "Golden-brown hemosiderin granules on H&E; Prussian blue (iron) stain positive",
      'Also called "heart failure cells" when found in lung alveoli',
      "Reflects prior—not active—hemorrhage or chronic congestion",
    ],
    clinicalRelevance: [
      "Left-sided heart failure and mitral stenosis — pulmonary capillary pressure ↑ → RBC extravasation into alveoli → siderophages in sputum or lung biopsy",
      "Chronic pulmonary congestion — brown induration of lung",
      "Resolving bruises — hemosiderin-laden macrophages at hemorrhage site",
      "Chronic subdural hematoma or repeated microhemorrhages",
    ],
    boardsPearls: [
      "Heart failure cells = hemosiderin-laden alveolar macrophages → prior pulmonary hemorrhage from congestion",
      "Mitral stenosis classic association — chronic pulmonary venous hypertension",
      "Prussian blue stain confirms iron in macrophage cytoplasm",
      "Links to extravasated RBCs → hemosiderin degradation pathway",
      "vs anthracotic macrophages — carbon pigment in smokers/coal workers, not iron",
    ],
    distinguishFrom: [
      "Foam cell — lipid-laden macrophage in atherosclerosis, not hemosiderin",
      "Gaucher cell — glucocerebroside-filled macrophage in Gaucher disease",
      "Anthracotic macrophage — carbon pigment from air pollution/smoking",
      "Hemosiderinuria — renal tubular hemosiderin in hemolytic anemia, not alveolar macrophage",
    ],
    pediatrics:
      "Chronic congenital heart disease with pulmonary venous congestion can produce similar hemosiderin-laden macrophages; evaluate cardiac cause in child with hemoptysis or pulmonary hemosiderosis.",
  },
  {
    id: "langerhans-cell",
    name: "Langerhans Cell",
    aliases: [
      "langerhans cell",
      "langerhans cells",
      "epidermal langerhans cell",
      "epidermal langerhans cells",
    ],
    definition:
      "Dendritic antigen-presenting cell resident in epidermis and mucosa; captures cutaneous antigen and migrates to lymph nodes to activate T cells.",
    characteristics: [
      "Bone marrow–derived; expresses CD1a and langerin (CD207)",
      "Birbeck granules on electron microscopy (tennis racket appearance)",
      "Extends dendritic processes between keratinocytes in stratum spinosum",
      "Key APC in contact hypersensitivity and cutaneous immune surveillance",
    ],
    clinicalRelevance: [
      "Allergic contact dermatitis — presents haptenated antigen to CD4⁺ T cells",
      "Langerhans cell histiocytosis — clonal proliferation (Letterer-Siwe, Hand-Schüller-Christian, eosinophilic granuloma)",
      "HIV can infect Langerhans cells in mucosa during transmission",
      "Reduced in aging skin and some immunosuppressed states",
    ],
    boardsPearls: [
      "Epidermal dendritic APC — bridges innate cutaneous exposure to adaptive immunity",
      "Birbeck granules + CD1a + langerin = Langerhans cell markers",
      "LCH — CD1a⁺ histiocytes; may present with lytic bone lesions, diabetes insipidus, rash",
      "vs dermal dendritic cells — Langerhans cells specifically in epidermis",
    ],
    distinguishFrom: [
      "Keratinocyte — structural epidermal cell, not professional APC",
      "Merkel cell — mechanoreceptor, not dendritic APC",
      "Macrophage — phagocyte in dermis; Langerhans cells specialize in antigen presentation",
      "Follicular dendritic cell — in lymph node germinal center, not epidermis",
    ],
    pediatrics:
      "Letterer-Siwe disease (multisystem LCH) in infants — rash, bone lesions, hepatosplenomegaly; Hand-Schüller-Christian in older children.",
  },
  {
    id: "kupffer-cell",
    name: "Kupffer Cell",
    aliases: [
      "kupffer cell",
      "kupffer cells",
      "hepatic macrophage",
      "hepatic macrophages",
      "liver macrophage",
      "liver macrophages",
    ],
    definition:
      "Tissue-resident macrophage of the liver sinusoids derived from embryonic yolk sac and monocyte replenishment; clears blood-borne pathogens, immune complexes, and senescent erythrocytes.",
    characteristics: [
      "Myeloid lineage — expresses macrophage markers (CD68⁺, CD163⁺; CD14 on monocyte-derived subsets)",
      "Resides in hepatic sinusoidal lumen on endothelial surface",
      "Phagocytoses bacteria, LPS, and antibody-coated particles from portal and systemic blood",
      "Activated by endotoxin → cytokine release (TNF-α, IL-1) contributing to hepatic inflammation",
    ],
    clinicalRelevance: [
      "Alcoholic and nonalcoholic steatohepatitis — activated Kupffer cells drive hepatic inflammation",
      "Liver abscess and sepsis — Kupffer cells are first-line hepatic innate defense",
      "Gaucher disease — glucocerebroside-laden macrophages (Gaucher cells) in liver and marrow",
      "Hemochromatosis — iron deposition; macrophages participate in iron handling",
    ],
    boardsPearls: [
      "Kupffer cell = liver macrophage — myeloid, CD68⁺",
      "vs Langerhans cell — epidermal dendritic APC; CD1a⁺/langerin⁺, not sinusoidal macrophage",
      "vs hepatic stellate (Ito) cell — stores vitamin A, not a phagocyte",
      "vs sinusoidal endothelial cell — fenestrated endothelium, not macrophage",
    ],
    distinguishFrom: [
      "Macrophage — general tissue phagocyte; Kupffer cell is liver-specific resident macrophage",
      "Langerhans cell — epidermal dendritic APC (CD1a⁺), not hepatic sinusoidal macrophage",
      "Hepatic stellate cell — vitamin A storage and fibrosis, not phagocytic",
      "Melanocyte — neural crest–derived pigment cell, not myeloid phagocyte",
    ],
    pediatrics:
      "Neonatal liver macrophage function immature — ↑ susceptibility to certain disseminated infections; same Kupffer cell identity as adults.",
  },
  {
    id: "merkel-cell",
    name: "Merkel Cell",
    aliases: [
      "merkel cell",
      "merkel cells",
      "merkel's cell",
      "merkel disc",
      "merkel discs",
      "tactile merkel cell",
    ],
    definition:
      "Mechanoreceptor cell in the basal epidermis and hair follicles that transduces light touch and texture via synapse-like contacts with afferent sensory nerve fibers (Merkel disc).",
    characteristics: [
      "Neural crest–derived (not myeloid) — cytokeratin 20⁺ (CK20), neuroendocrine markers",
      "Slowly adapting touch receptor — sustained response to pressure and texture",
      "Dense in fingertips, lips, and hair follicle bulge regions",
      "Does not express classic myeloid/macrophage surface markers (CD14, CD68)",
    ],
    clinicalRelevance: [
      "Merkel cell carcinoma — aggressive neuroendocrine skin cancer; CK20⁺, often MCPyV-associated",
      "Loss with aging reduces fine tactile discrimination",
    ],
    boardsPearls: [
      "Merkel cell = touch mechanoreceptor — NOT macrophage, NOT dendritic APC, NOT melanocyte",
      "CK20⁺ neuroendocrine skin tumor → Merkel cell carcinoma",
      "vs Langerhans cell — APC in epidermis; Merkel cell is sensory mechanoreceptor",
      "vs melanocyte — pigment production; Merkel cell senses touch",
      "Neural crest origin — not myeloid lineage",
    ],
    distinguishFrom: [
      "Langerhans cell — dendritic APC; CD1a⁺, Birbeck granules, antigen presentation",
      "Melanocyte — melanin synthesis (tyrosinase); pigmentation, not mechanoreception",
      "Macrophage/Kupffer cell — myeloid phagocyte; CD68⁺, innate immunity",
      "Meissner corpuscle — dermal light-touch receptor, not epidermal Merkel cell",
    ],
    pediatrics:
      "Merkel cell carcinoma rare in children; when present often virus-associated — not confused with Langerhans cell histiocytosis clinically.",
  },
  {
    id: "melanocyte",
    name: "Melanocyte",
    aliases: [
      "melanocyte",
      "melanocytes",
      "cutaneous melanocyte",
      "epidermal melanocyte",
    ],
    definition:
      "Neural crest–derived pigment-producing cell residing in the basal epidermis and hair bulb that synthesizes melanin via tyrosinase and transfers melanosomes to surrounding keratinocytes.",
    characteristics: [
      "Neural crest origin — NOT myeloid; does not express macrophage markers (CD68, CD14)",
      "Synthesizes melanin from tyrosine — tyrosinase is rate-limiting enzyme",
      "Transfers melanosomes to keratinocytes — skin color reflects keratinocyte pigment content",
      "S100 and Melan-A (MART-1) immunostains used to identify melanocytic lesions",
    ],
    clinicalRelevance: [
      "Melanoma — malignant transformation of melanocytes; BRAF mutations common",
      "Albinism — defective melanin synthesis (tyrosinase or melanosome transport defects)",
      "Vitiligo — autoimmune destruction of melanocytes",
      "Cafe-au-lait macules — ↑ melanocyte activity or number (NF1, McCune-Albright)",
    ],
    boardsPearls: [
      "Melanocyte = pigment cell, neural crest–derived — NOT myeloid phagocyte",
      "Tyrosinase converts tyrosine → DOPA → melanin",
      "vs Langerhans cell — immune APC; melanocyte makes pigment",
      "vs Merkel cell — mechanoreceptor (CK20⁺); melanocyte is pigmented",
      "vs macrophage — phagocyte (CD68⁺); melanocyte has no phagocytic role in immunity",
    ],
    distinguishFrom: [
      "Keratinocyte — receives melanosomes; does not synthesize melanin",
      "Langerhans cell — dendritic APC (CD1a⁺), immune surveillance not pigmentation",
      "Merkel cell — touch receptor, neural crest but no melanin synthesis",
      "Macrophage — myeloid phagocyte; may contain phagocytosed pigment but does not produce melanin",
    ],
    pediatrics:
      "Congenital melanocytic nevi present at birth; large nevi carry ↑ melanoma risk — distinct from LCH skin rash.",
  },
  {
    id: "epithelioid-cell",
    name: "Epithelioid Cell",
    aliases: [
      "epithelioid cell",
      "epithelioid cells",
      "epithelioid macrophage",
      "epithelioid macrophages",
      "epithelioid histiocyte",
      "epithelioid histiocytes",
    ],
    definition:
      "Activated macrophage with abundant eosinophilic cytoplasm and rounded epithelial-like morphology that aggregates with lymphocytes to form granulomas in chronic inflammation.",
    characteristics: [
      "Myeloid/macrophage lineage — derived from monocytes; CD68⁺",
      "Activated by IFN-γ and persistent antigen (e.g., mycobacteria, fungi, foreign body)",
      "May fuse with other macrophages to form multinucleated giant cells (Langhans, foreign body types)",
      "Secretes TNF-α and IL-12 — sustains Th1 response in granulomatous disease",
      "Sarcoidosis epithelioid cells produce ACE and 1α-hydroxylase (↑ vitamin D, hypercalcemia)",
    ],
    clinicalRelevance: [
      "Tuberculosis — caseating granulomas with epithelioid macrophages and Langhans giant cells",
      "Sarcoidosis — noncaseating granulomas; ↑ ACE from epithelioid cells",
      "Crohn disease — noncaseating intestinal granulomas",
      "Foreign body granuloma — epithelioid cells surrounding nondegradable material",
    ],
    boardsPearls: [
      "Epithelioid cell = activated macrophage in granuloma — myeloid, CD68⁺",
      "Langhans giant cell — epithelioid macrophage fusion with horseshoe-arranged nuclei (TB)",
      "Sarcoidosis: noncaseating granulomas, ↑ ACE, hypercalcemia from epithelioid 1α-hydroxylase",
      "vs Langerhans cell — epidermal dendritic APC; epithelioid cell is activated tissue macrophage",
      "vs epithelial cell — name reflects morphology only; epithelioid cells are macrophages, not epithelium",
    ],
    distinguishFrom: [
      "Epithelial cell — forms linings and glands; not macrophage despite similar name",
      "Langerhans cell — dendritic APC in epidermis (CD1a⁺); not granuloma macrophage",
      "Giant cell tumor of bone — neoplastic stromal cells, not granulomatous epithelioid macrophage",
      "Melanocyte/Merkel cell — neural crest derivatives, not myeloid granuloma cells",
    ],
    pediatrics:
      "Pediatric TB and sarcoidosis both form epithelioid granulomas — TB more often caseating; sarcoidosis with uveitis and ↑ ACE in older children/adolescents.",
  },
  {
    id: "myeloid-surface-markers",
    name: "Myeloid Surface Markers",
    aliases: [
      "myeloid surface markers",
      "myeloid surface marker",
      "myeloid markers",
      "myeloid marker",
      "myeloid cell markers",
      "myeloid lineage markers",
      "myeloid antigens",
      "cd14",
      "cd68",
      "cd163",
      "cd33",
      "cd15",
      "cd13",
      "cd11b",
    ],
    definition:
      "Cell-surface proteins used to identify cells of myeloid hematopoietic lineage (granulocytes, monocytes, macrophages, dendritic cells of myeloid origin) by flow cytometry and immunohistochemistry.",
    characteristics: [
      "CD14 — LPS co-receptor on monocytes/macrophages; soluble CD14 in plasma",
      "CD68 — lysosomal glycoprotein; pan-macrophage marker (Kupffer, alveolar, tissue macrophages)",
      "CD163 — scavenger receptor; M2/alternatively activated macrophages, hemoglobin-haptoglobin uptake",
      "CD13 (aminopeptidase N) and CD33 — broad myeloid markers; CD33 targeted by gemtuzumab in AML",
      "CD15 (Lewis X) — granulocytes; also on some Reed-Sternberg cells (Hodgkin)",
      "CD11b/CD18 (Mac-1, CR3) — integrin on neutrophils, monocytes, macrophages; complement receptor",
    ],
    clinicalRelevance: [
      "Flow cytometry immunophenotyping in leukemia — AML blasts often CD13⁺/CD33⁺/CD34⁺; Auer rods confirm myeloid",
      "Histiocyte identification — CD68⁺ cells in tissue (macrophages, epithelioid cells, giant cells)",
      "Langerhans cell histiocytosis — CD1a⁺ and langerin⁺ (not classic macrophage immunophenotype alone)",
      "Sepsis — ↑ soluble CD14 reflects monocyte activation",
    ],
    boardsPearls: [
      "Myeloid phagocytes (monocyte/macrophage/Kupffer/epithelioid): CD68⁺, often CD14⁺",
      "Langerhans cell: myeloid origin but mature marker profile CD1a⁺, langerin (CD207)⁺, S100⁺",
      "Melanocytes and Merkel cells: neural crest — NOT CD68⁺/CD14⁺ myeloid markers",
      "AML immunophenotype: CD13, CD33, CD34, MPO; lymphoid blasts are CD19/CD3/TdT",
      "CD15 on granulocytes and Hodgkin Reed-Sternberg cells",
    ],
    distinguishFrom: [
      "Lymphoid markers — CD3 (T cells), CD19/CD20 (B cells), not myeloid",
      "CD1a/langerin — Langerhans/dendritic cell identity, not pan-myeloid macrophage marker",
      "Tyrosinase/Melan-A — melanocyte markers, not myeloid",
      "Cytokeratin 20 — Merkel cell/neuroendocrine, not myeloid",
    ],
    pediatrics:
      "Pediatric AML and JMML diagnosed by flow cytometry myeloid markers (CD13, CD33, CD34); LCH uses CD1a not CD68 alone for diagnosis.",
  },
  {
    id: "langhans-giant-cell",
    name: "Langhans Giant Cell",
    aliases: [
      "langhans giant cell",
      "langhans giant cells",
      "langerhans giant cell",
      "langerhans giant cells",
      "langhans-type giant cell",
      "langhans type giant cell",
    ],
    definition:
      "Multinucleated giant cell formed by fusion of epithelioid macrophages, classically with nuclei arranged in a horseshoe pattern at the periphery — hallmark of granulomatous inflammation especially tuberculosis.",
    characteristics: [
      "Myeloid/macrophage derivative — CD68⁺ epithelioid macrophages fuse under chronic IFN-γ stimulation",
      "Peripheral horseshoe or ring arrangement of nuclei (classic Langhans morphology)",
      "Found in caseating granulomas of TB and some fungal infections",
      "Distinct from foreign body giant cells (haphazard nuclei) and osteoclasts (bone resorption)",
    ],
    clinicalRelevance: [
      "Tuberculosis — caseating granulomas with Langhans giant cells and central necrosis",
      "Sarcoidosis — noncaseating granulomas; giant cells present but caseation absent",
      "Fungal granulomas (histoplasmosis, coccidioidomycosis) may show Langhans-type giant cells",
    ],
    boardsPearls: [
      "Langhans giant cell ≠ Langerhans cell — classic boards trap",
      "Langhans (with G) = granuloma giant cell (TB); Langerhans (with R) = epidermal dendritic APC",
      "Horseshoe peripheral nuclei — Langhans type; haphazard nuclei — foreign body type",
      "Epithelioid macrophages fuse to form giant cells in chronic Th1/IFN-γ inflammation",
    ],
    distinguishFrom: [
      "Langerhans cell — epidermal dendritic APC; CD1a⁺, Birbeck granules; NOT a multinucleated granuloma cell",
      "Foreign body giant cell — haphazard nuclei around nondegradable material",
      "Osteoclast — multinucleated bone-resorbing cell on bone surface (RANKL-driven)",
      "Touton giant cell — xanthogranuloma; wreath of nuclei surrounded by foamy cytoplasm",
    ],
    pediatrics:
      "Pediatric TB granulomas may show Langhans giant cells; distinguish from LCH (CD1a⁺ Langerhans cell proliferation, not granulomatous TB).",
  },
  {
    id: "dendritic-cell",
    name: "Dendritic Cell",
    aliases: [
      "dendritic cell",
      "dendritic cells",
      "dc",
      "dcs",
      "myeloid dendritic cell",
      "plasmacytoid dendritic cell",
    ],
    definition:
      "Professional antigen-presenting cell with dendritic processes specialized for antigen capture in peripheral tissues, migration to lymph nodes, and activation of naive T cells via MHC–peptide complexes and co-stimulatory molecules.",
    characteristics: [
      "Most potent activator of naive T cells among APCs",
      "Subsets: conventional/myeloid DCs, plasmacytoid DCs (type I IFN production), Langerhans cells (epidermal)",
      "Express MHC class II and B7 (CD80/CD86) — provides Signal 1 and Signal 2 to CD4⁺ T cells",
      "Migrates from periphery to lymph node paracortex after antigen uptake and maturation",
      "Follicular dendritic cells (FDCs) in germinal centers display native antigen to B cells — distinct lineage",
    ],
    clinicalRelevance: [
      "Contact hypersensitivity — Langerhans cells present hapten to T cells",
      "HIV infects dendritic cells and uses them for T-cell transmission",
      "Dendritic cell vaccines and checkpoint immunotherapy exploit APC–T-cell interactions",
      "Langerhans cell histiocytosis — clonal Langerhans cell proliferation",
    ],
    boardsPearls: [
      "Professional APCs: dendritic cells (most potent), macrophages, B cells",
      "Langerhans cell = epidermal dendritic cell subset (CD1a⁺, Birbeck granules)",
      "vs follicular dendritic cell — in germinal center; presents antigen to B cells, not T cells",
      "Dendritic cell maturation ↑ MHC II and B7, ↓ endocytic activity → ready to activate T cells",
    ],
    distinguishFrom: [
      "Macrophage — phagocyte and APC but less efficient at naive T-cell activation",
      "Langerhans cell — epidermal dendritic subset; do not confuse with Langhans giant cell",
      "Follicular dendritic cell — B-cell follicle; retains native antigen on surface",
      "Langhans giant cell — fused macrophages in granulomas, not dendritic APC",
    ],
    pediatrics:
      "LCH is clonal proliferation of Langerhans-type dendritic cells — Letterer-Siwe in infants; not TB Langhans giant cells.",
  },
  {
    id: "antigen-presenting-cell",
    name: "Antigen-Presenting Cell",
    aliases: [
      "antigen-presenting cell",
      "antigen presenting cell",
      "antigen-presenting cells",
      "antigen presenting cells",
      "antigen presentation",
      "antigen presenting",
      "apc",
      "apcs",
      "professional antigen-presenting cell",
      "professional apc",
    ],
    definition:
      "Immune cell that internalizes, processes, and displays peptide antigen bound to MHC molecules on its surface for T-cell recognition, providing co-stimulation required for full T-cell activation.",
    characteristics: [
      "Professional APCs: dendritic cells (most potent), macrophages, B cells — constitutively express MHC II",
      "Present exogenous antigen on MHC II to CD4⁺ T cells; cross-presenting DCs can also load MHC I",
      "Provide Signal 2 via B7 (CD80/CD86) binding CD28 on naive T cells",
      "Nonprofessional APCs (endothelium, epithelium) can upregulate MHC II under IFN-γ stimulation",
    ],
    clinicalRelevance: [
      "Autoimmunity — APC presentation of self-antigen to autoreactive T cells",
      "Transplant rejection — donor MHC on APCs recognized by recipient T cells (direct pathway)",
      "Vaccines — aim to deliver antigen to dendritic APCs for durable immunity",
      "Bare lymphocyte syndrome — absent MHC II on APCs → immunodeficiency",
    ],
    boardsPearls: [
      "Professional APC trio: dendritic cell, macrophage, B cell",
      "MHC II + CD4⁺ T cell; MHC I + CD8⁺ T cell — co-receptor restriction",
      "Exogenous antigen → endocytosis → MHC II pathway; endogenous → proteasome → MHC I",
      "B cells present specific captured antigen via surface Ig to Tfh cells in germinal centers",
    ],
    distinguishFrom: [
      "NK cell — innate killing without antigen presentation to TCR",
      "Neutrophil — phagocyte; not a professional APC for naive T-cell activation",
      "Keratinocyte — can present antigen under inflammation but not professional APC",
      "MHC molecule — displays peptide; APC is the cell presenting it",
    ],
    pediatrics:
      "MHC class II deficiency (bare lymphocyte syndrome) — absent APC MHC II expression; severe immunodeficiency presenting in infancy.",
  },
  {
    id: "birbeck-granules",
    name: "Birbeck Granules",
    aliases: [
      "birbeck granules",
      "birbeck granule",
      "birbeck body",
      "birbeck bodies",
    ],
    definition:
      "Characteristic rod- or tennis racket–shaped cytoplasmic organelles in Langerhans cells formed by langerin (CD207)-induced membrane superimposition and zippering — ultrastructural hallmark of Langerhans cells.",
    characteristics: [
      "Seen on electron microscopy — central linear density with bulbous end (tennis racket appearance)",
      "Formed by langerin (CD207) cross-linking and internalizing glycosylated lipids in Langerhans cells",
      "Associated with CD1a⁺ Langerhans cells in epidermis and Langerhans cell histiocytosis lesions",
      "Not found in Langhans giant cells, macrophages, or melanocytes",
    ],
    clinicalRelevance: [
      "Langerhans cell histiocytosis — Birbeck granules on EM of lesional histiocytes",
      "Diagnostic support alongside CD1a and langerin immunostaining",
    ],
    boardsPearls: [
      "Birbeck granules = Langerhans cell ultrastructural marker — tennis racket on EM",
      "CD1a⁺ + langerin⁺ + Birbeck granules → Langerhans cell identity",
      "vs Langhans giant cell — granuloma macrophage fusion; NO Birbeck granules",
      "Langerin (CD207) drives Birbeck granule formation",
    ],
    distinguishFrom: [
      "Langhans giant cell — multinucleated granuloma cell; no Birbeck granules",
      "Melanosome — melanin-containing organelle in melanocytes",
      "Lysosome — generic degradative organelle in many cells",
      "Weibel-Palade body — endothelial granules with vWF, not Langerhans-specific",
    ],
    pediatrics:
      "LCH diagnosis in children uses CD1a/langerin IHC; Birbeck granules on EM confirm Langerhans cell lineage.",
  },
  {
    id: "melanosome",
    name: "Melanosome",
    aliases: [
      "melanosome",
      "melanosomes",
      "melanin granule",
      "melanin granules",
    ],
    definition:
      "Membrane-bound organelle in melanocytes in which tyrosinase sequentially oxidizes tyrosine to produce melanin pigment, later transferred to adjacent keratinocytes.",
    characteristics: [
      "Four stages of maturation — increasing melanin deposition from stage I (vesicular) to stage IV (fully melanized)",
      "Tyrosinase catalyzes rate-limiting steps of melanin synthesis within melanosome",
      "Transferred from melanocyte dendrites to keratinocytes — skin color reflects keratinocyte melanosome content",
      "Ultrastructurally distinct from Birbeck granules (Langerhans cells) and lysosomes",
    ],
    clinicalRelevance: [
      "Albinism — defective tyrosinase or melanosome transport → absent/reduced melanin",
      "Melasma and post-inflammatory hyperpigmentation — ↑ melanosome transfer to keratinocytes",
      "Melanoma — abnormal melanocytic proliferation and melanosome production",
      "Griscelli syndrome — defective melanosome transport (MYO5A, RAB27A) → silvery hair, immunodeficiency",
    ],
    boardsPearls: [
      "Melanosome = melanin factory in melanocytes — tyrosinase-dependent",
      "Pigment transferred to keratinocytes; melanocytes themselves are not the main pigmented cell in epidermis",
      "vs Birbeck granule — Langerhans cell tennis racket organelle, not pigment",
      "vs hemosiderin — iron from hemorrhage, not tyrosinase-derived melanin",
    ],
    distinguishFrom: [
      "Birbeck granule — Langerhans cell; CD1a⁺ cell marker, not pigment organelle",
      "Lysosome — degradative; melanosome is specialized secretory pigment organelle",
      "Keratinocyte — receives melanosomes but does not synthesize melanin de novo",
      "Lipofuscin — age-related residual bodies, not melanin synthesis",
    ],
    pediatrics:
      "Oculocutaneous albinism in infants — absent melanin in hair, skin, irides from melanosome dysfunction; ↑ skin cancer risk.",
  },
  {
    id: "keratinocyte",
    name: "Keratinocyte",
    aliases: [
      "keratinocyte",
      "keratinocytes",
      "epidermal keratinocyte",
      "epidermal keratinocytes",
    ],
    definition:
      "Predominant epidermal cell type that synthesizes keratin intermediate filaments, forms stratified layers from basal to cornified stratum, and receives melanosomes from melanocytes for photoprotection.",
    characteristics: [
      "Derived from surface ectoderm (not neural crest)",
      "Stratified differentiation: stratum basale → spinosum → granulosum → corneum",
      "Desmosomes (desmoglein/desmocollin) link adjacent keratinocytes — target in pemphigus vulgaris",
      "Hemidesmosomes anchor basal keratinocytes to basement membrane — target in bullous pemphigoid",
      "Receives melanosomes from melanocytes — main site of epidermal melanin distribution",
    ],
    clinicalRelevance: [
      "Pemphigus vulgaris — anti-desmoglein antibodies → acantholysis between keratinocytes",
      "Bullous pemphigoid — anti-hemidesmosome antibodies → subepidermal blister",
      "Psoriasis — hyperproliferating keratinocytes with parakeratosis and Munro microabscesses",
      "Squamous cell carcinoma — malignant keratinocyte neoplasm",
      "Lichen planus — CD8⁺ T-cell attack on basal keratinocytes",
    ],
    boardsPearls: [
      "Keratinocyte = structural epidermal cell; desmosomes between cells, hemidesmosomes to basement membrane",
      "Pemphigus: intraepidermal (desmosome); pemphigoid: subepidermal (hemidesmosome)",
      "vs melanocyte — neural crest pigment cell transfers melanosomes to keratinocytes",
      "vs Langerhans cell — dendritic APC between keratinocytes, not structural barrier cell",
      "vs Merkel cell — mechanoreceptor at keratinocyte–nerve interface",
    ],
    distinguishFrom: [
      "Melanocyte — neural crest–derived; synthesizes melanin, transfers melanosomes",
      "Langerhans cell — immune APC with Birbeck granules between keratinocytes",
      "Merkel cell — touch receptor, not keratin-producing structural cell",
      "Fibroblast — dermal mesenchymal cell, not epidermal keratinocyte",
    ],
    pediatrics:
      "Epidermolysis bullosa — keratin or basement membrane defects → blistering from minor trauma in infants.",
  },
  {
    id: "neural-crest",
    name: "Neural Crest",
    aliases: [
      "neural crest",
      "neural crest cells",
      "neural crest cell",
      "neural crest-derived",
      "neural crest derived",
      "neural crest derivative",
      "neural crest derivatives",
    ],
    definition:
      "Transient embryonic cell population arising from dorsal neuroectoderm at the neural tube border that migrates widely and differentiates into diverse structures — classic \"fourth germ layer\" in boards framing.",
    characteristics: [
      "Arises from ectoderm at neural fold → migrates throughout embryo during organogenesis",
      "Gives rise to melanocytes, peripheral neurons, Schwann cells, adrenal medulla chromaffin cells",
      "Also contributes to craniofacial bones/cartilage, odontoblasts, aorticopulmonary septum, enteric ganglia",
      "NOT the origin of keratinocytes (surface ectoderm) or hematopoietic/myeloid cells (mesoderm)",
    ],
    clinicalRelevance: [
      "Neurocristopathies — congenital defects from failed neural crest migration (DiGeorge, CHARGE, Hirschsprung)",
      "Melanoma and neuroblastoma — tumors of neural crest derivatives",
      "Hirschsprung disease — absent enteric ganglia (neural crest–derived) in rectum",
      "Congenital megacolon — failed neural crest migration to distal colon",
    ],
    boardsPearls: [
      "Neural crest gives: melanocytes, Merkel cells, adrenal medulla, peripheral ganglia, Schwann cells, craniofacial skeleton",
      "Melanocyte and Merkel cell = neural crest; keratinocyte = surface ectoderm",
      "vs mesoderm — muscle, bone (most), blood, macrophage lineage",
      "vs endoderm — gut lining, lungs, liver parenchyma",
      "Treacher Collins, cleft palate — cranial neural crest migration defects",
    ],
    distinguishFrom: [
      "Surface ectoderm — epidermis (keratinocytes), lens, anterior pituitary from Rathke pouch",
      "Mesoderm — muscle, cardiovascular mesenchyme, hematopoietic stem cells, most long bones",
      "Endoderm — GI and respiratory epithelium, liver, pancreas",
      "Neuroectoderm (neural tube) — CNS neurons and glia within brain/spinal cord, not migrating crest",
    ],
    pediatrics:
      "Hirschsprung disease in neonates — neural crest–derived enteric ganglia absent in rectosigmoid; failure to pass meconium, megacolon.",
  },
  {
    id: "hepatic-sinusoids",
    name: "Hepatic Sinusoids",
    aliases: [
      "hepatic sinusoids",
      "hepatic sinusoid",
      "liver sinusoids",
      "liver sinusoid",
      "hepatic sinusoidal capillaries",
      "discontinuous capillaries of liver",
    ],
    definition:
      "Low-pressure, discontinuous capillary channels between plates of hepatocytes that receive mixed portal venous and hepatic arterial blood and permit plasma exchange with hepatocytes via the Space of Disse.",
    characteristics: [
      "Discontinuous (sinusoidal) capillary type — fenestrated endothelium with large pores and gaps, no continuous basement membrane",
      "Space of Disse — perisinusoidal space between endothelium and hepatocytes; contains hepatic stellate (Ito) cells and matrix",
      "Kupffer cells — tissue macrophages lining sinusoidal lumen on endothelial surface",
      "Blood flows from portal triad (portal vein + hepatic artery + bile duct) toward central vein",
      "Highly permeable to plasma proteins and chylomicron remnants — hepatocytes take up nutrients and toxins directly from sinusoidal plasma",
    ],
    clinicalRelevance: [
      "Cirrhosis — fibrosis and capillarization of sinusoids (↑ resistance → portal hypertension)",
      "Sinusoidal obstruction syndrome (veno-occlusive disease) — post-chemotherapy or transplant hepatic venule injury",
      "Kupffer cell activation in alcoholic/nonalcoholic steatohepatitis drives hepatic inflammation",
      "Hepatic stellate cell activation in Space of Disse → collagen deposition and fibrosis",
    ],
    boardsPearls: [
      "Liver sinusoids = discontinuous capillaries — fenestrated endothelium, no basement membrane",
      "Three capillary types: continuous (lung, muscle), fenestrated (kidney, endocrine), discontinuous/sinusoidal (liver, spleen, bone marrow)",
      "Kupffer cells reside in hepatic sinusoids — myeloid macrophages clearing blood-borne pathogens",
      "Space of Disse separates sinusoidal endothelium from hepatocyte plates — stellate cells store vitamin A here",
      "vs portal triad — triad is inflow structure at lobule periphery; sinusoids are the channels between hepatocyte plates",
    ],
    distinguishFrom: [
      "Central vein — drains sinusoidal blood at lobule center; not the exchange channel itself",
      "Portal vein — inflow vessel in portal triad; blood then enters sinusoids",
      "Hepatocyte — parenchymal liver cell adjacent to Space of Disse, not the vascular channel",
      "Glomerular capillary — fenestrated but with GBM and podocytes; liver sinusoids lack continuous basement membrane",
      "Kupffer cell — macrophage within sinusoid lumen, not the sinusoidal vessel",
    ],
    pediatrics:
      "Neonatal liver has immature sinusoidal clearance; kernicterus risk when unconjugated bilirubin overwhelms hepatocyte conjugation and sinusoidal processing.",
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
