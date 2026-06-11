export interface PathogenesisEntry {
  id: string;
  name: string;
  aliases: string[];
  definition: string;
  examples: string[];
  boardsPearls: string[];
  distinguishFrom?: string[];
  pediatrics?: string;
}

export const PATHOGENESIS: PathogenesisEntry[] = [
  {
    id: "bacterial-translocation",
    name: "Bacterial Translocation",
    aliases: [
      "bacterial translocation",
      "gut bacterial translocation",
      "intestinal bacterial translocation",
      "bacterial translocation from gut",
    ],
    definition:
      "Passage of viable bacteria or bacterial products from the gastrointestinal lumen across the intestinal mucosal barrier into mesenteric lymph nodes, portal circulation, and potentially systemic circulation.",
    examples: [
      "Cirrhosis with portal hypertension — gut permeability ↑ → translocation → spontaneous bacterial peritonitis (SBP)",
      "Severe burns, trauma, and critical illness — impaired gut barrier → sepsis from enteric flora",
      "Immunocompromised states — impaired mucosal immunity permits translocation",
      "Necrotizing enterocolitis (NEC) in neonates — bacterial invasion of bowel wall",
    ],
    boardsPearls: [
      "SBP in cirrhotic ascites — think translocation of gut flora (E. coli, Klebsiella, Streptococcus)",
      "Prophylactic antibiotics (e.g. norfloxacin) in high-risk cirrhosis reduce SBP recurrence",
      "vs hematogenous spread — translocation is gut-to-systemic, not seeding from a distant bloodstream focus",
      "LPS/endotoxin translocation contributes to systemic inflammation in sepsis and liver disease",
    ],
    distinguishFrom: [
      "Contiguous spread — direct extension along adjacent tissue, not across gut mucosa",
      "Hematogenous dissemination — bloodstream carriage to distant organs",
    ],
    pediatrics:
      "NEC in preterm infants — translocation of gut bacteria through immature mucosa; pneumatosis intestinalis and sepsis are red flags.",
  },
  {
    id: "contiguous-spread",
    name: "Contiguous Spread",
    aliases: [
      "contiguous spread",
      "contiguous extension",
      "direct extension",
      "direct spread",
      "local spread",
      "locally invasive spread",
    ],
    definition:
      "Spread of infection or malignancy by direct extension from the primary site into immediately adjacent tissues, without transport through blood or lymphatic vessels.",
    examples: [
      "Cellulitis extending along subcutaneous tissue from a wound",
      "Dental abscess → periapical infection → mandibular osteomyelitis",
      "Sinusitis → orbital cellulitis via thin orbital wall (subperiosteal abscess)",
      "Colorectal cancer invading adjacent bladder or abdominal wall",
      "Epidural abscess spreading from adjacent vertebral osteomyelitis or discitis",
    ],
    boardsPearls: [
      "Orbital cellulitis from ethmoid sinusitis — classic contiguous spread in children",
      "Osteomyelitis from adjacent soft-tissue infection or open fracture — direct inoculation or contiguous route",
      "vs hematogenous — no bloodstream intermediate; infection moves tissue-to-tissue",
      "vs lymphatic spread — no regional node involvement required for initial extension",
    ],
    distinguishFrom: [
      "Hematogenous dissemination — bacteria travel via blood to distant sites",
      "Lymphatic spread — organisms reach regional lymph nodes before distant spread",
    ],
    pediatrics:
      "Pediatric orbital cellulitis often follows ethmoid sinusitis via contiguous spread — assess extraocular movements and vision urgently.",
  },
  {
    id: "hematogenous-dissemination",
    name: "Hematogenous Dissemination",
    aliases: [
      "hematogenous dissemination",
      "hematogenous spread",
      "hematogenous dissemination/spread",
      "hematogenic spread",
      "hematogenic dissemination",
      "blood-borne spread",
      "blood-borne dissemination",
      "bloodstream spread",
      "via the bloodstream",
    ],
    definition:
      "Spread of microorganisms, tumor cells, or emboli through the bloodstream to seed distant organs or tissues distant from the primary site of infection or malignancy.",
    examples: [
      "Infective endocarditis → septic emboli to kidneys, spleen, brain",
      "Miliary tuberculosis — hematogenous seeding of lungs and other organs",
      "Osteomyelitis in children — metaphyseal infection via hematogenous route (S. aureus)",
      "Metastatic cancer to liver, lung, bone via arterial/portal circulation",
      "Bacterial meningitis in neonates — hematogenous crossing of BBB",
    ],
    boardsPearls: [
      "Acute hematogenous osteomyelitis in child — fever + bone pain + ↑ ESR/CRP; metaphysis of long bones",
      "Miliary TB on CXR — countless small nodules from hematogenous dissemination",
      "Septic emboli from right-sided endocarditis → lungs; left-sided → systemic organs",
      "vs contiguous spread — distant sites involved without direct tissue contact",
    ],
    distinguishFrom: [
      "Contiguous spread — direct local extension only",
      "Lymphatic spread — regional node involvement first (e.g. sentinel node)",
      "Bacterial translocation — gut mucosa to circulation, not from a distant established focus",
    ],
    pediatrics:
      "Hematogenous osteomyelitis and septic arthritis peak in young children; suspect in febrile child refusing to bear weight or use a limb.",
  },
];

const pathogenesisById = new Map(
  PATHOGENESIS.map((entry) => [entry.id, entry]),
);

export function getPathogenesisById(
  id: string,
): PathogenesisEntry | undefined {
  return pathogenesisById.get(id);
}

export interface PathogenesisAliasMatch {
  alias: string;
  pathogenesisId: string;
}

export function buildPathogenesisAliasIndex(): PathogenesisAliasMatch[] {
  const matches: PathogenesisAliasMatch[] = [];
  for (const entry of PATHOGENESIS) {
    for (const alias of entry.aliases) {
      matches.push({
        alias: alias.toLowerCase(),
        pathogenesisId: entry.id,
      });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
