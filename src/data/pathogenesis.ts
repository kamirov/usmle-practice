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
  {
    id: "anti-drug-antibodies",
    name: "Anti-drug antibodies (ADAs)",
    aliases: [
      "anti-drug antibodies",
      "antidrug antibodies",
      "anti drug antibodies",
      "adas",
      "drug antibodies",
      "neutralizing anti-drug antibodies",
    ],
    definition:
      "Host antibodies generated against a therapeutic biologic drug (especially monoclonal antibodies) that can neutralize the drug, accelerate clearance, or cause infusion reactions and secondary loss of treatment response.",
    examples: [
      "Anti-infliximab antibodies in Crohn disease or RA — chimeric mAb is more immunogenic; may cause loss of response",
      "Anti-adalimumab antibodies — reduced drug levels and flare despite adherence",
      "Anti-factor VIII alloantibodies in hemophilia A — inhibitor development blocks replacement therapy",
      "Anti-insulin antibodies (exogenous insulin) — rarely clinically significant with modern analogs",
      "Methotrexate co-therapy with anti-TNF agents — lowers ADA formation and improves durability of response",
    ],
    boardsPearls: [
      "Chimeric (e.g., infliximab, rituximab) > humanized > fully human (e.g., adalimumab) — ↓ immunogenicity down the spectrum",
      "Loss of biologic efficacy → consider nonadherence, disease progression, or ADA-mediated neutralization",
      "ADAs can cause acute infusion reactions (fever, urticaria, hypotension) or delayed secondary failure",
      "vs drug allergy — ADAs are often IgG neutralizing antibodies; true IgE-mediated allergy is a separate mechanism",
      "Concomitant immunosuppression (methotrexate, azathioprine) reduces ADA formation to anti-TNF therapy",
    ],
    distinguishFrom: [
      "Autoantibodies (RF, anti-CCP, ANA) — directed against self antigens, not the drug molecule",
      "IgE-mediated drug hypersensitivity — immediate-type allergy, not neutralizing anti-drug IgG",
      "Antidrug antibodies vs anti-TNF therapy — ADAs are antibodies *to the drug*; anti-TNF drugs are antibodies *to TNF*",
    ],
    pediatrics:
      "Pediatric IBD on infliximab — same ADA risk; methotrexate often added to reduce immunogenicity and prolong remission.",
  },
  {
    id: "leukocyte-migration",
    name: "Leukocyte Migration",
    aliases: [
      "leukocyte migration",
      "leukocyte trafficking",
      "leukocyte recruitment",
      "leukocyte extravasation",
      "wbc migration",
      "white blood cell migration",
    ],
    definition:
      "Directed movement of leukocytes from the bloodstream into tissues during inflammation, proceeding through margination, endothelial rolling, activation, firm adhesion, transmigration (diapedesis), and chemotaxis along a chemokine gradient.",
    examples: [
      "Acute bacterial infection — neutrophil recruitment to site via IL-8/CXCL8 and complement C5a",
      "Atherosclerosis — monocyte adhesion to activated endothelium and migration into intima",
      "Autoimmune synovitis — lymphocyte and macrophage infiltration in rheumatoid arthritis",
      "Corticosteroids ↓ leukocyte migration by suppressing adhesion molecule expression and cytokines",
      "Leukocyte adhesion deficiency (LAD) — defective integrins → recurrent infections without pus",
    ],
    boardsPearls: [
      "Rolling: selectins (E-selectin, P-selectin); firm adhesion: integrins (LFA-1) bind ICAM-1/VCAM-1; diapedesis through endothelium",
      "Chemokines (e.g., IL-8) create gradient guiding leukocytes to infection site",
      "TNF-α and IL-1 ↑ endothelial adhesion molecules — key step upstream of migration",
      "LAD type 1 — CD18/β₂ integrin defect; delayed umbilical cord separation, poor wound healing, ↑ neutrophils but no pus",
      "Corticosteroids and leukocyte demargination — steroids cause apparent leukocytosis by releasing marginated pool",
    ],
    distinguishFrom: [
      "Hematogenous dissemination — organisms travel in blood to distant sites, not leukocyte egress into tissue",
      "Chemotaxis alone — one step of migration; full process includes adhesion and transmigration",
      "Leukocytosis — ↑ WBC count in blood; does not by itself mean successful tissue migration",
    ],
    pediatrics:
      "LAD presents in infancy with recurrent bacterial infections, delayed cord separation, and impaired pus formation despite neutrophilia.",
  },
  {
    id: "granuloma",
    name: "Granuloma",
    aliases: [
      "granuloma",
      "granulomas",
      "granulomatous inflammation",
      "caseating granuloma",
      "caseating granulomas",
      "noncaseating granuloma",
      "noncaseating granulomas",
      "non-caseating granuloma",
    ],
    definition:
      "Organized aggregate of activated macrophages (epithelioid histiocytes), often with multinucleated giant cells, usually surrounded by lymphocytes, forming a focal chronic inflammatory nodule to contain persistent antigen that cannot be cleared.",
    examples: [
      "Tuberculosis — caseating granulomas with central necrosis; AFB-positive",
      "Sarcoidosis — noncaseating granulomas; bilateral hilar lymphadenopathy, ↑ ACE",
      "Crohn disease — noncaseating transmural granulomas in bowel wall",
      "Foreign-body granuloma — suture, silica, berylliosis",
      "Schistosoma eggs — granulomatous periportal fibrosis in liver",
      "PPD skin test — type IV hypersensitivity granuloma at injection site",
    ],
    boardsPearls: [
      "Caseating (cheese-like necrosis) → think TB; noncaseating → sarcoidosis, Crohn disease, berylliosis",
      "TNF-α is central to granuloma formation and maintenance — anti-TNF therapy can reactivate latent TB",
      "Multinucleated giant cells (Langhans type with horseshoe nuclei in TB) and epithelioid macrophages are hallmarks",
      "Sarcoidosis: noncaseating granulomas + ↑ ACE + hypercalcemia (macrophage 1α-hydroxylase)",
      "vs abscess — pus and liquefactive necrosis, not organized epithelioid granuloma",
    ],
    distinguishFrom: [
      "Abscess — neutrophil-rich pus cavity, not organized macrophage granuloma",
      "Necrotizing vasculitis (GPA) — necrotizing granulomatous inflammation of vessels, not classic infectious granuloma",
      "Malignancy — granulomatous reaction can mimic tumor; biopsy required",
      "Acute suppurative inflammation — neutrophil predominance without granuloma architecture",
    ],
    pediatrics:
      "TB in children may show Ghon complex with caseating granuloma; chronic granulomatous disease is a neutrophil oxidative burst defect (name is misleading — not a granuloma disease per se).",
  },
  {
    id: "enterohepatic-recirculation",
    name: "Enterohepatic Recirculation",
    aliases: [
      "enterohepatic recirculation",
      "enterohepatic circulation",
      "entero-hepatic recirculation",
      "entero hepatic recirculation",
    ],
    definition:
      "Cycling of drugs or metabolites from the liver into bile, into the intestine, and back into the systemic circulation after reabsorption — often after intestinal deconjugation by gut bacteria.",
    examples: [
      "Estrogen and oral contraceptives — glucuronide conjugates excreted in bile → bacterial β-glucuronidase deconjugates → reabsorption prolongs hormone exposure",
      "Morphine metabolites (e.g., morphine-6-glucuronide) undergo enterohepatic cycling → prolonged opioid effect",
      "Conjugated bilirubin secreted in bile → gut bacteria deconjugate → urobilinogen → partial reabsorption",
      "Cholestyramine interrupts recirculation by binding bile acids and some drugs in the gut lumen (e.g., digoxin overdose adjunct)",
      "Antibiotics altering gut flora can ↓ deconjugation and change drug/hormone levels (classically discussed with oral contraceptives)",
    ],
    boardsPearls: [
      "Liver conjugates (often glucuronidation) → bile excretion → gut bacterial deconjugation → intestinal reabsorption → back to liver",
      "Prolongs half-life of many lipophilic drugs and hormone metabolites",
      "Neonatal jaundice worsened by ↑ enterohepatic circulation of bilirubin — sterile gut clears slowly; early feeding and phototherapy help",
      "Bile acid sequestrants (cholestyramine) bind substances in gut and interrupt recirculation",
      "vs first-pass metabolism — enterohepatic recirculation is post-absorption cycling, not initial gut/liver presystemic loss",
    ],
    distinguishFrom: [
      "First-pass (presystemic) metabolism — drug metabolized before reaching systemic circulation on initial oral dose",
      "Renal reabsorption — tubular recycling in kidney, not bile-intestine-liver loop",
      "Biliary excretion without reabsorption — permanent elimination in stool",
    ],
    pediatrics:
      "Physiologic neonatal jaundice is amplified by enterohepatic circulation of bilirubin; frequent feeding and meconium passage ↓ reabsorption. Breast milk jaundice also involves this pathway.",
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
