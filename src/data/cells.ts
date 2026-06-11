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
