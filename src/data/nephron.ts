export interface NephronSegmentEntry {
  id: string;
  name: string;
  etymology: string;
  aliases: string[];
  /** Preferred label for prev/next nav; must match an alias for term linking. */
  navLabel?: string;
  function: string;
  reabsorbs: string[];
  secretes: string[];
  boardsPearls: string[];
}

export const NEPHRON_SEGMENTS: NephronSegmentEntry[] = [
  {
    id: "nephron",
    name: "Nephron",
    etymology: "Greek nephros = kidney",
    aliases: [
      "nephron",
      "nephrons",
      "renal nephron",
      "renal nephrons",
      "kidney nephron",
      "kidney nephrons",
    ],
    function:
      "Functional unit of the kidney — each nephron consists of a glomerulus (filtering capillary tuft in Bowman capsule) and a renal tubule (proximal tubule, loop of Henle, distal convoluted tubule) that modifies glomerular ultrafiltrate through reabsorption and secretion; urine from many nephrons drains via collecting ducts (ureteric bud derivative) to the renal pelvis.",
    reabsorbs: [
      "~99% of filtered water and most filtered Na⁺, Cl⁻, HCO₃⁻, glucose, and amino acids (chiefly proximal tubule)",
      "Urea, K⁺, Ca²⁺, phosphate — segment-specific reabsorption along tubule and collecting duct",
      "Filtered load reclaimed into peritubular capillaries (cortical nephrons) or medullary vasa recta (juxtamedullary nephrons)",
    ],
    secretes: [
      "H⁺, K⁺, NH₄⁺, and organic acids/bases added along tubule and collecting duct",
      "Renin from juxtaglomerular cells of the same nephron (via macula densa feedback)",
    ],
    boardsPearls: [
      "~1 million nephrons per kidney; nephron loss is irreversible",
      "Metanephric mesenchyme → nephron (glomerulus through DCT); ureteric bud → collecting system",
      "Cortical nephrons (~85%) — short loops, peritubular capillaries; juxtamedullary (~15%) — long loops + vasa recta for urine concentration",
      "Filtration (glomerulus) → reabsorption/secretion (tubule) → final urine (collecting duct + ADH/aldosterone)",
      "Juxtaglomerular apparatus (JGA) — macula densa + juxtaglomerular cells + mesangial cells at same nephron",
      "GFR set at glomerulus; tubule reclaims filtered load and fine-tunes electrolytes/acid-base",
      "vs collecting duct — embryologically distinct (ureteric bud) but functionally continuous with nephron tubule",
    ],
  },
  {
    id: "bowmans-space",
    name: "Bowman Space",
    etymology: "eponym: Sir William Bowman + Latin spatium = space",
    aliases: [
      "bowman space",
      "bowman's space",
      "bowmans space",
      "bowman capsule",
      "bowman's capsule",
      "bowmans capsule",
      "glomerular capsule",
      "glomerular capsular space",
    ],
    function:
      "Urinary space between the parietal and visceral layers of Bowman capsule where glomerular ultrafiltrate first collects before entering the proximal tubule. Parietal epithelium is simple squamous; visceral layer consists of podocytes enveloping the glomerular capillary tuft.",
    reabsorbs: [],
    secretes: [],
    boardsPearls: [
      "Filtrate (not urine yet) collects in Bowman space, then drains to proximal tubule via urinary pole",
      "Crescents in RPGN form in Bowman space from parietal epithelial proliferation after GBM rupture",
      "Visceral layer = podocytes with foot processes and slit diaphragms — key filtration barrier component",
      "Parietal layer continuous with proximal tubule epithelium at the urinary pole",
      "Capsular drop in diabetic nephropathy — hyaline material in Bowman space on histology",
    ],
  },
  {
    id: "glomerulus",
    name: "Glomerulus",
    etymology: "Latin glomerulus = small ball",
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
    id: "ultrafiltrate",
    name: "Ultrafiltrate",
    etymology: "Latin ultra = beyond + filtrare = to strain + -ate = product",
    aliases: [
      "ultrafiltrate",
      "ultrafiltrates",
      "glomerular ultrafiltrate",
      "glomerular ultrafiltrates",
      "glomerular filtrate",
      "glomerular filtrates",
      "renal ultrafiltrate",
      "plasma ultrafiltrate",
    ],
    function:
      "Protein-free fluid formed when glomerular capillary hydrostatic pressure drives plasma water and small solutes across the filtration barrier (fenestrated endothelium, GBM, podocyte slit diaphragm) into Bowman space — identical in composition to plasma except for absence of proteins and cells; becomes tubular fluid after entering the nephron and urine after post-glomerular modification.",
    reabsorbs: [
      "Not reabsorbed at formation — ~20% of renal plasma flow is filtered; the remaining ~80% passes through efferent arterioles to peritubular capillaries/vasa recta",
      "Subsequent tubular segments reabsorb ~99% of filtered water and solutes from the ultrafiltrate",
    ],
    secretes: [
      "No secretion at glomerulus — tubular secretion adds solutes downstream (e.g., H⁺, K⁺, PAH, creatinine)",
    ],
    boardsPearls: [
      "Ultrafiltrate = plasma minus proteins and cells — formed by size/charge selectivity, not active transport",
      "Freely filtered: water, Na⁺, K⁺, Cl⁻, HCO₃⁻, glucose, amino acids, urea, creatinine, inulin",
      "Not filtered: albumin and large proteins (normally), RBCs, WBCs, platelets",
      "GFR (~120 mL/min) = volume of ultrafiltrate formed per minute; measured with inulin or creatinine clearance",
      "Starling forces: GFR ↑ with ↑ glomerular capillary hydrostatic pressure or ↓ Bowman/oncotic pressure",
      "Proteinuria = abnormal protein in ultrafiltrate/urine from GBM or podocyte injury",
      "vs urine — ultrafiltrate is pre-tubular; urine is after reabsorption/secretion and collecting duct processing",
    ],
  },
  {
    id: "afferent-arteriole",
    name: "Afferent arteriole",
    etymology: "Latin ad = toward + ferre = to carry + arteriole = small artery",
    aliases: [
      "afferent arteriole",
      "afferent arterioles",
      "afferent glomerular arteriole",
      "afferent glomerular arterioles",
      "incoming arteriole",
    ],
    function:
      "Resistance vessel delivering blood from the interlobular artery into the glomerular capillary tuft; its diameter is a major determinant of glomerular hydrostatic pressure, renal plasma flow (RPF), and GFR.",
    reabsorbs: [],
    secretes: [],
    boardsPearls: [
      "Afferent dilation ↑ glomerular hydrostatic pressure → ↑ GFR and RPF",
      "Afferent constriction ↓ RPF and GFR (e.g., severe hypovolemia, NSAIDs blocking prostaglandin-mediated dilation)",
      "Prostaglandins (PGE₂) dilate afferent arteriole — preserves GFR in low-flow states; NSAIDs remove this protection",
      "Renal artery stenosis ↓ afferent inflow → ↓ GFR, activates RAAS",
      "vs efferent arteriole — afferent controls inflow; efferent controls outflow resistance",
    ],
  },
  {
    id: "efferent-arteriole",
    name: "Efferent arteriole",
    etymology: "Latin ex = out + ferre = to carry + arteriole = small artery",
    aliases: [
      "efferent arteriole",
      "efferent arterioles",
      "efferent glomerular arteriole",
      "efferent glomerular arterioles",
      "outgoing arteriole",
    ],
    function:
      "Resistance vessel draining the glomerular capillary tuft into peritubular capillaries (cortex) or vasa recta (juxtamedullary nephrons); constriction raises glomerular hydrostatic pressure and filtration fraction.",
    reabsorbs: [],
    secretes: [],
    boardsPearls: [
      "Angiotensin II preferentially constricts efferent arteriole → ↑ glomerular capillary pressure → preserves GFR early in hypovolemia",
      "Efferent constriction ↑ filtration fraction (FF = GFR/RPF)",
      "ACE inhibitors/ARBs dilate efferent arteriole → ↓ intraglomerular pressure → may ↓ GFR (especially if renal artery stenosis)",
      "Efferent dilation or afferent constriction ↓ GFR disproportionately",
      "Peritubular capillaries arise from efferent arteriole — supply reabsorptive blood flow to proximal and distal tubules",
    ],
  },
  {
    id: "peritubular-capillaries",
    name: "Peritubular Capillaries",
    etymology:
      "Latin peri = around + tubulus = little tube + capillaris = hairlike — capillaries encircling renal tubules",
    aliases: [
      "peritubular capillary",
      "peritubular capillaries",
      "peritubular capillary network",
      "peritubular capillary networks",
      "cortical peritubular capillaries",
      "peritubular capillary bed",
      "peritubular capillary beds",
      "postglomerular capillaries",
      "postglomerular capillary",
      "peri-tubular capillaries",
      "ptc",
      "ptcs",
    ],
    function:
      "Low-pressure postglomerular capillary network surrounding cortical nephron tubules (proximal and distal convoluted tubules), arising from the efferent arteriole. Delivers O₂ for tubular active transport and receives reabsorbed water and solutes from the peritubular interstitium via Starling forces (low hydrostatic pressure, high plasma oncotic pressure after glomerular filtration) into venous drainage.",
    reabsorbs: [
      "Water and solutes from peritubular interstitium (tubular reabsorbate) — Na⁺, Cl⁻, HCO₃⁻, glucose, amino acids, urea",
      "O₂ delivery to proximal tubule mitochondria for Na⁺/K⁺-ATPase and other active transport",
      "Basolateral exit of reabsorbed electrolytes from tubular cells into peritubular blood",
    ],
    secretes: [],
    boardsPearls: [
      "Cortical nephrons: efferent arteriole → peritubular capillaries; juxtamedullary nephrons: efferent → vasa recta (medullary supply)",
      "Low hydrostatic pressure + high oncotic pressure in peritubular capillaries favors bulk reabsorption of filtered load",
      "Receive ~80% of renal plasma flow after glomerular filtration — most RPF is postglomerular, not filtered",
      "Filtration fraction ~20% (GFR/RPF) — remaining plasma enters peritubular capillaries/vasa recta",
      "Peritubular interstitial fibroblasts (adjacent, not endothelial) produce EPO in response to renal hypoxia (HIF pathway)",
      "Angiotensin II constricts efferent arteriole → ↑ peritubular oncotic pressure → favors proximal reabsorption",
      "ACE inhibitors/ARBs dilate efferent arteriole → ↓ intraglomerular and peritubular perfusion pressure → may ↓ GFR",
      "vs vasa recta — hairpin medullary countercurrent exchanger for urine concentration, not cortical tubule supply",
      "vs glomerular capillaries — high-pressure filtration bed; peritubular capillaries are low-pressure reabsorptive bed",
    ],
  },
  {
    id: "vasa-recta",
    name: "Vasa Recta",
    etymology: "Latin vas = vessel + recta = straight (hairpin straight vessels)",
    aliases: [
      "vasa recta",
      "vasa recta capillaries",
      "vasa recta capillary",
      "medullary vasa recta",
      "juxtamedullary vasa recta",
      "countercurrent exchanger",
      "countercurrent exchangers",
    ],
    function:
      "Hairpin peritubular capillaries arising from efferent arterioles of juxtamedullary nephrons — descend into the hypertonic renal medulla alongside the loop of Henle and ascend back to cortex, exchanging solutes and water passively to preserve the medullary osmotic gradient while delivering blood to the medulla.",
    reabsorbs: [
      "Water and solutes from medullary interstitium in descending limb (equilibration with hypertonic medulla)",
      "Solutes (NaCl, urea) from ascending limb back into interstitium — countercurrent exchange",
    ],
    secretes: [
      "Water and solutes to medullary interstitium in ascending limb as blood dilutes — prevents washout of gradient",
    ],
    boardsPearls: [
      "Juxtamedullary nephrons: efferent arteriole → vasa recta; cortical nephrons → peritubular capillaries instead",
      "Countercurrent exchanger (vasa recta) preserves gradient built by countercurrent multiplier (loop of Henle)",
      "Slow medullary blood flow minimizes solute washout while supplying O₂ to deep tubules",
      "Loop diuretics ↓ medullary gradient over time → impaired urine concentration despite ADH",
      "Nephrogenic diabetes insipidus — collecting duct unresponsive to ADH; gradient may be intact but water not reabsorbed",
      "vs peritubular capillaries — cortical tubule supply; vasa recta is medullary hairpin exchanger",
      "vs jejunal vasa recta — intestinal straight vessels to mucosa; different anatomy, same Latin name",
    ],
  },
  {
    id: "proximal-tubule",
    name: "Proximal Tubule",
    etymology: "Latin proximus = nearest + Latin tubulus = little tube",
    aliases: [
      "proximal convoluted tubule",
      "proximal convoluted tubules",
      "proximal tubule",
      "proximal tubules",
      "proximal renal tubule",
      "proximal renal tubules",
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
    etymology: "thin = narrow wall + descending = moving down + limb = nephron segment + eponym: Friedrich Henle",
    navLabel: "thin descending limb (loop of henle)",
    aliases: [
      "thin descending limb (loop of henle)",
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
    etymology: "thick = wide wall + ascending = moving up + limb = nephron segment + eponym: Friedrich Henle",
    navLabel: "thick ascending limb (loop of henle)",
    aliases: [
      "thick ascending limb (loop of henle)",
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
    etymology: "Latin distare = stand apart + Latin convolvere = roll together + Latin tubulus = little tube",
    aliases: [
      "distal convoluted tubule",
      "distal convoluted tubules",
      "distal tubule",
      "distal tubules",
      "distal renal tubule",
      "distal renal tubules",
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
      "Thiazide diuretics block NCC → ↑ Ca²⁺ reabsorption (hypocalciuria)",
      "Gitelman syndrome mimics thiazide effect (NCC defect)",
      "Still relatively dilute tubular fluid — not final urine concentration site",
    ],
  },
  {
    id: "collecting-duct",
    name: "Collecting Duct",
    etymology: "collecting = gathering fluid + Latin ductus = channel",
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
    etymology: "Latin macula = spot + Latin densus = dense",
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
    id: "juxtaglomerular-apparatus",
    name: "Juxtaglomerular Apparatus",
    etymology: "Latin juxta = near + glomerulus = small ball + Latin apparatus = equipment/structure",
    aliases: [
      "juxtaglomerular apparatus",
      "juxtaglomerular apparatuses",
      "juxtaglomerular (g) apparatus",
      "juxtaglomerular g apparatus",
      "jga",
      "jg apparatus",
      "juxtaglomerular complex",
      "juxtaglomerular cell apparatus",
    ],
    function:
      "Specialized structure at the vascular pole of each nephron linking the distal nephron to its parent glomerulus — composed of juxtaglomerular (granular) cells of the afferent arteriole, macula densa of the thick ascending limb, and extraglomerular mesangial (lacis) cells — mediating tubuloglomerular feedback and renin-angiotensin-aldosterone system (RAAS) regulation.",
    reabsorbs: [],
    secretes: [
      "Renin from juxtaglomerular cells (effector arm of JGA)",
      "Paracrine mediators (adenosine, prostaglandins, nitric oxide) for tubuloglomerular feedback",
    ],
    boardsPearls: [
      "JGA = JG cells + macula densa + extraglomerular (lacis) mesangial cells",
      "Macula densa senses tubular NaCl delivery; JG cells release renin in response",
      "Three renin triggers: β1 sympathetic tone, ↓ afferent arteriole stretch (↓ perfusion), ↓ macula densa NaCl",
      "↓ NaCl at macula densa → renin → angiotensin II → efferent arteriole constriction + aldosterone",
      "Loop/thiazide diuretics ↓ NaCl delivery to macula densa → compensatory ↑ renin",
      "Renal artery stenosis → ↓ perfusion → JG renin → secondary hypertension",
      "vs intraglomerular mesangial cells — inside glomerular tuft; lacis cells are extraglomerular in JGA",
    ],
  },
  {
    id: "loop-of-henle",
    name: "Loop of Henle",
    etymology: "loop = hairpin bend + eponym: Friedrich Henle",
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

export function getAdjacentNephronSegments(id: string): {
  previous?: NephronSegmentEntry;
  next?: NephronSegmentEntry;
} {
  const index = NEPHRON_SEGMENTS.findIndex((segment) => segment.id === id);
  if (index === -1) return {};

  return {
    previous: index > 0 ? NEPHRON_SEGMENTS[index - 1] : undefined,
    next:
      index < NEPHRON_SEGMENTS.length - 1
        ? NEPHRON_SEGMENTS[index + 1]
        : undefined,
  };
}

/** Label for prev/next nav — must be an alias so popover cross-links resolve. */
export function getNephronNavLabel(segment: NephronSegmentEntry): string {
  if (segment.navLabel) return segment.navLabel;

  const normalizedName = segment.name.toLowerCase();
  const nameAlias = segment.aliases.find(
    (alias) => alias.toLowerCase() === normalizedName,
  );
  if (nameAlias) return nameAlias;

  return segment.aliases[0] ?? segment.name;
}

export interface NephronAliasMatch {
  alias: string;
  nephronSegmentId: string;
}

export function buildNephronAliasIndex(): NephronAliasMatch[] {
  const matches: NephronAliasMatch[] = [];
  for (const segment of NEPHRON_SEGMENTS) {
    const seen = new Set<string>();
    const register = (alias: string) => {
      const key = alias.toLowerCase();
      if (seen.has(key)) return;
      seen.add(key);
      matches.push({ alias: key, nephronSegmentId: segment.id });
    };

    register(segment.name);
    if (segment.navLabel) register(segment.navLabel);
    for (const alias of segment.aliases) {
      register(alias);
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
