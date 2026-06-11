export interface NephronSegmentEntry {
  id: string;
  name: string;
  aliases: string[];
  function: string;
  reabsorbs: string[];
  secretes: string[];
  boardsPearls: string[];
}

export const NEPHRON_SEGMENTS: NephronSegmentEntry[] = [
  {
    id: "glomerulus",
    name: "Glomerulus",
    aliases: ["glomerulus", "glomeruli"],
    function:
      "Specialized capillary tuft where plasma is ultrafiltered into Bowman space. Filtration barrier = fenestrated endothelium, basement membrane, podocyte slit diaphragms.",
    reabsorbs: [],
    secretes: [],
    boardsPearls: [
      "Filters water and solutes by size/charge — not selective reabsorption",
      "GFR driven by hydrostatic vs oncotic pressure in glomerular capillaries",
      "Injury → proteinuria (podocyte disease) or hematuria (GBM disease)",
    ],
  },
  {
    id: "proximal-tubule",
    name: "Proximal Tubule",
    aliases: [
      "proximal convoluted tubule",
      "proximal tubule",
      "pct",
    ],
    function:
      "Major site of isotonic reabsorption; reclaims most filtered solute and water using leaky tight junctions and abundant mitochondria (brush border).",
    reabsorbs: [
      "~65–70% filtered Na⁺, Cl⁻, water (isotonic)",
      "100% glucose and amino acids (Tm-limited)",
      "~80–90% HCO₃⁻ (carbonic anhydrase)",
      "Phosphate (PTH inhibits), urea (~50%), K⁺, Ca²⁺, uric acid",
      "Small proteins via endocytosis",
    ],
    secretes: [
      "H⁺ (acid secretion)",
      "Organic acids/bases (PAH, penicillin, morphine)",
      "Creatinine (minor)",
    ],
    boardsPearls: [
      "Obligate reabsorption — if it is filtered and useful, mostly reclaimed here",
      "Fanconi syndrome: global proximal dysfunction → glucosuria, aminoaciduria, phosphaturia",
      "Carbonic anhydrase inhibitors act proximally but weak diuretic (↓ HCO₃⁻)",
    ],
  },
  {
    id: "thin-descending-limb",
    name: "Thin Descending Limb (Loop of Henle)",
    aliases: [
      "thin descending limb of the loop of henle",
      "thin descending limb",
      "descending limb of the loop of henle",
      "descending limb of loop of henle",
      "descending limb",
    ],
    function:
      "Water-permeable, solute-impermeable segment in the hypertonic medulla; equilibrates tubular fluid with interstitium.",
    reabsorbs: ["Water passively (medullary hypertonicity)"],
    secretes: [],
    boardsPearls: [
      "No active NaCl transport here — passive water exit concentrates tubular fluid",
      "Countercurrent multiplier depends on separation from thick ascending limb",
      "Impermeable to NaCl — key to the countercurrent mechanism",
    ],
  },
  {
    id: "thick-ascending-limb",
    name: "Thick Ascending Limb (Loop of Henle)",
    aliases: [
      "thick ascending limb of the loop of henle",
      "thick ascending limb of loop of henle",
      "ascending limb of the loop of henle",
      "ascending limb of loop of henle",
      "thick ascending limb",
      "tal",
    ],
    function:
      "Diluting segment: reabsorbs Na⁺, K⁺, and Cl⁻ without water reabsorption, generating medullary hypertonicity (countercurrent multiplier).",
    reabsorbs: [
      "Na⁺, K⁺, 2Cl⁻ via NKCC2 cotransporter (diluting segment)",
      "Ca²⁺ and Mg²⁺ (paracellular, reabsorbed passively)",
    ],
    secretes: ["H⁺ (via NH₄⁺/H⁺ mechanisms in related segments)"],
    boardsPearls: [
      "Loop diuretics (furosemide) block NKCC2 → lose diluting capacity, cannot concentrate urine maximally",
      "Impermeable to water — fluid leaving segment is hyposmotic",
      "Bartter syndrome mimics loop diuretic effect (NKCC2 defect)",
      "Macula densa senses NaCl delivery from this segment",
    ],
  },
  {
    id: "distal-convoluted-tubule",
    name: "Distal Convoluted Tubule",
    aliases: [
      "distal convoluted tubule",
      "distal tubule",
      "dct",
    ],
    function:
      "Further NaCl reabsorption in a relatively water-impermeable segment; fine-tunes Ca²⁺ under PTH control.",
    reabsorbs: [
      "Na⁺ and Cl⁻ via NCC cotransporter",
      "Ca²⁺ (PTH-stimulated, transcellular — distinct from paracellular Ca²⁺ in TAL)",
    ],
    secretes: ["H⁺"],
    boardsPearls: [
      "Thiazide diuretics block NCC → ↑ Ca²⁺ reabsorption (hypocalciuria) — useful in recurrent calcium stones",
      "Gitelman syndrome mimics thiazide effect (NCC defect)",
      "Still relatively dilute tubular fluid — not final urine concentration site",
    ],
  },
  {
    id: "collecting-duct",
    name: "Collecting Duct",
    aliases: ["collecting duct", "collecting ducts"],
    function:
      "Final regulation of water, Na⁺, K⁺, and H⁺/HCO₃⁻; determines final urine osmolality and electrolyte composition.",
    reabsorbs: [
      "Water (ADH/vasopressin inserts aquaporin-2)",
      "Na⁺ (aldosterone → ENaC in principal cells)",
    ],
    secretes: [
      "K⁺ and H⁺ (aldosterone-stimulated principal and α-intercalated cells)",
      "HCO₃⁻ (β-intercalated cells)",
    ],
    boardsPearls: [
      "ADH deficiency → diabetes insipidus (dilute polyuria)",
      "Aldosterone ↑ Na⁺ reabsorption, ↑ K⁺ and H⁺ secretion → metabolic alkalosis risk",
      "K⁺-sparing diuretics (spironolactone, amiloride) act here",
      "Liddle syndrome: constitutively active ENaC → HTN, hypokalemia",
    ],
  },
  {
    id: "macula-densa",
    name: "Macula Densa",
    aliases: ["macula densa"],
    function:
      "Specialized plaque of thick ascending limb cells at the glomerular hilum that senses tubular NaCl delivery and mediates tubuloglomerular feedback.",
    reabsorbs: [],
    secretes: ["Renin (via juxtaglomerular apparatus signaling)"],
    boardsPearls: [
      "↓ NaCl delivery sensed → renin release → ↑ angiotensin II → efferent arteriole constriction + aldosterone",
      "NSAIDs blunt prostaglandin-mediated afferent dilation → ↓ GFR",
      "Loop diuretics ↓ NaCl to macula densa → can activate RAAS",
    ],
  },
  {
    id: "loop-of-henle",
    name: "Loop of Henle",
    aliases: ["loop of henle"],
    function:
      "Countercurrent multiplier system: descending limb extracts water, thick ascending limb extracts NaCl without water, establishing corticomedullary osmotic gradient for urine concentration.",
    reabsorbs: [
      "Descending limb: water",
      "Thick ascending limb: Na⁺, K⁺, Cl⁻ (no water)",
    ],
    secretes: [],
    boardsPearls: [
      "Loop diuretics abolish corticomedullary gradient over time → impaired concentrating ability",
      "Vasa recta is countercurrent exchanger (not part of tubule) preserving medullary gradient",
      "Nephrogenic DI: collecting duct cannot respond to ADH despite adequate gradient",
    ],
  },
];

const nephronSegmentById = new Map(NEPHRON_SEGMENTS.map((s) => [s.id, s]));

export function getNephronSegmentById(
  id: string,
): NephronSegmentEntry | undefined {
  return nephronSegmentById.get(id);
}

export interface NephronAliasMatch {
  alias: string;
  nephronSegmentId: string;
}

export function buildNephronAliasIndex(): NephronAliasMatch[] {
  const matches: NephronAliasMatch[] = [];
  for (const segment of NEPHRON_SEGMENTS) {
    for (const alias of segment.aliases) {
      matches.push({
        alias: alias.toLowerCase(),
        nephronSegmentId: segment.id,
      });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
