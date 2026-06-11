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
