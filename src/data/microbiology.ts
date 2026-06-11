export type MicrobeType =
  | "gram-positive-cocci"
  | "gram-positive-rod"
  | "gram-negative-cocci"
  | "gram-negative-rod"
  | "acid-fast"
  | "spirochete"
  | "atypical-bacteria"
  | "anaerobe"
  | "virus"
  | "fungus"
  | "parasite";

export interface MicrobiologyEntry {
  id: string;
  name: string;
  aliases: string[];
  type: MicrobeType;
  definition: string;
  morphology?: string[];
  virulenceFactors?: string[];
  transmission?: string[];
  diseases: string[];
  classicPresentation?: string[];
  diagnosis?: string[];
  treatment?: string[];
  distinguishFrom?: string[];
  boardsPearls: string[];
  pediatrics?: string;
}

export const MICROBIOLOGY: MicrobiologyEntry[] = [
  {
    id: "staphylococcus-aureus",
    name: "Staphylococcus aureus",
    aliases: [
      "staphylococcus aureus",
      "s. aureus",
      "staph aureus",
      "staph",
      "staphylococcus",
    ],
    type: "gram-positive-cocci",
    definition:
      "Gram-positive cocci in clusters; catalase-positive and coagulase-positive. Leading cause of skin/soft tissue infection, bacteremia, and device-related infection.",
    morphology: [
      "Gram+ cocci in grape-like clusters",
      "Catalase+ (distinguishes staphylococci from streptococci)",
      "Coagulase+ (S. aureus vs coagulase− S. epidermidis)",
      "Golden colonies on agar; β-hemolytic",
    ],
    virulenceFactors: [
      "Protein A — binds IgG Fc, inhibits opsonization",
      "Coagulase — converts fibrinogen to fibrin (wall off infection)",
      "TSST-1 — toxic shock syndrome",
      "Enterotoxins — preformed; rapid food poisoning",
      "PVL — necrotizing skin/soft tissue infection",
    ],
    transmission: ["Direct contact", "Contaminated fomites and devices"],
    diseases: [
      "Abscess, cellulitis, impetigo",
      "Endocarditis (especially IV drug use, prosthetic valves)",
      "Osteomyelitis and septic arthritis",
      "Toxic shock syndrome",
      "Scalded skin syndrome (exfoliative toxin in infants)",
      "Food poisoning (preformed toxin, <6 h)",
    ],
    classicPresentation: [
      "Honey-crusted impetigo",
      "Purulent abscess with surrounding erythema",
      "Acute bacterial endocarditis with new murmur and embolic phenomena",
    ],
    diagnosis: [
      "Gram stain and culture",
      "Methicillin resistance → MRSA (oxacillin/cefoxitin screen)",
      "Blood cultures in bacteremia/endocarditis",
    ],
    treatment: [
      "MSSA: nafcillin, oxacillin, cefazolin",
      "MRSA: vancomycin, daptomycin, linezolid (site-dependent)",
      "Mild SSTI: TMP-SMX, doxycycline (if MRSA prevalent)",
    ],
    distinguishFrom: [
      "S. epidermidis — coagulase−; common culture contaminant on devices",
      "Streptococcus pyogenes — chains, bacitracin sensitive, coagulase−",
    ],
    boardsPearls: [
      "Coagulase+ = S. aureus until proven otherwise",
      "Preformed enterotoxin → vomiting within hours; reheated rice syndrome",
      "MRSA: prior antibiotics, health care exposure, purulent SSTI",
    ],
    pediatrics:
      "Scalded skin syndrome in neonates/infants — exfoliative toxin from phage-infected S. aureus; Nikolsky sign.",
  },
  {
    id: "streptococcus-pyogenes",
    name: "Streptococcus pyogenes",
    aliases: [
      "streptococcus pyogenes",
      "s. pyogenes",
      "group a streptococcus",
      "group a strep",
      "gas",
      "group a streptococci",
    ],
    type: "gram-positive-cocci",
    definition:
      "Group A β-hemolytic streptococcus (GAS); Gram-positive cocci in chains. Major cause of pharyngitis, skin infection, and invasive post-streptococcal sequelae.",
    morphology: [
      "Gram+ cocci in chains",
      "β-hemolysis on blood agar",
      "Group A carbohydrate (Lancefield)",
      "Bacitracin sensitive (vs Group B strep)",
      "PYR positive",
    ],
    virulenceFactors: [
      "M protein — antiphagocytic; rheumatogenic strains",
      "Streptolysin O (ASO antibody target)",
      "Streptokinase, hyaluronidase — spread",
      "Erythrogenic toxin — scarlet fever rash",
    ],
    transmission: ["Respiratory droplets", "Direct contact with lesions"],
    diseases: [
      "Strep pharyngitis",
      "Impetigo, erysipelas, cellulitis, necrotizing fasciitis",
      "Scarlet fever",
      "Rheumatic fever (post-infectious)",
      "Post-streptococcal glomerulonephritis",
      "Toxic shock–like syndrome (invasive GAS)",
    ],
    classicPresentation: [
      "Exudative pharyngitis + tender anterior cervical LAD, no cough",
      "Sandpaper rash with circumoral pallor (scarlet fever)",
      "Erysipelas — sharply demarcated, raised erythema",
    ],
    diagnosis: [
      "Rapid strep antigen or throat culture",
      "ASO titer ↑ after pharyngitis (not skin infection)",
      "Anti-DNase B for skin GAS infections",
    ],
    treatment: [
      "Pharyngitis: penicillin or amoxicillin (prevent rheumatic fever)",
      "Penicillin allergy: cephalexin or clindamycin",
      "Necrotizing infection: penicillin + clindamycin + surgery",
    ],
    distinguishFrom: [
      "S. aureus — clusters, coagulase+; impetigo can be either",
      "Group B strep (S. agalactiae) — bacitracin resistant; neonatal sepsis",
      "Viruses — pharyngitis with cough, rhinorrhea, no exudate",
    ],
    boardsPearls: [
      "Treat strep pharyngitis to prevent rheumatic fever, not PSGN",
      "Centor criteria guide testing/treatment",
      "Necrotizing fasciitis: pain out of proportion, crepitus, surgical emergency",
    ],
    pediatrics:
      "Scarlet fever common in children; rheumatic fever still seen where antibiotics are delayed.",
  },
  {
    id: "streptococcus-pneumoniae",
    name: "Streptococcus pneumoniae",
    aliases: [
      "streptococcus pneumoniae",
      "s. pneumoniae",
      "pneumococcus",
      "pneumococcal",
      "diplococcus pneumoniae",
    ],
    type: "gram-positive-cocci",
    definition:
      "Encapsulated Gram-positive lancet-shaped diplococcus; α-hemolytic. Leading bacterial cause of community-acquired pneumonia, meningitis, otitis media, and sinusitis.",
    morphology: [
      "Gram+ lancet-shaped diplococci",
      "α-hemolysis (green zone on blood agar)",
      "Optochin sensitive; bile soluble",
      "Quellung reaction positive (capsular swelling with antisera)",
    ],
    virulenceFactors: [
      "Polysaccharide capsule — antiphagocytic (#1 virulence factor)",
      "IgA protease",
      "Pneumolysin — pore-forming toxin",
    ],
    transmission: ["Respiratory droplets", "Nasopharyngeal colonization"],
    diseases: [
      "Community-acquired pneumonia (rust-colored sputum, lobar consolidation)",
      "Meningitis (adults and children)",
      "Otitis media and sinusitis",
      "Bacteremia and sepsis",
      "Sepsis in asplenic patients",
    ],
    classicPresentation: [
      "Rust-colored sputum with sudden fever and pleuritic chest pain",
      "Consolidation with dullness, bronchial breath sounds, egophony",
      "Meningitis in elderly or post-splenectomy patient",
    ],
    diagnosis: [
      "Gram stain/culture of sputum, blood, CSF",
      "Urine pneumococcal antigen (pneumonia/meningitis)",
      "CSF: ↑ WBC, ↓ glucose, ↑ protein; Gram+ diplococci",
    ],
    treatment: [
      "CAP: amoxicillin, ceftriaxone, or respiratory fluoroquinolone (severity-guided)",
      "Meningitis: ceftriaxone + vancomycin (+ dexamethasone)",
      "Penicillin-resistant strains → vancomycin or ceftriaxone (MIC-guided)",
    ],
    distinguishFrom: [
      "Viridans streptococci — optochin resistant; subacute endocarditis",
      "H. influenzae — Gram− coccobacilli; requires factors V and X",
      "Klebsiella — Gram− rod; currant jelly sputum in alcoholics",
    ],
    boardsPearls: [
      "Asplenic/hyposplenic patients: overwhelming post-splenectomy sepsis risk — vaccinate",
      "Rust-colored sputum classic but not sensitive/specific",
      "Dexamethasone with first antibiotic dose in pneumococcal meningitis ↓ mortality",
    ],
    pediatrics:
      "Leading bacterial cause of otitis media; PCV13 vaccination dramatically ↓ invasive pneumococcal disease.",
  },
  {
    id: "escherichia-coli",
    name: "Escherichia coli",
    aliases: [
      "escherichia coli",
      "e. coli",
      "e coli",
      "e.coli",
    ],
    type: "gram-negative-rod",
    definition:
      "Gram-negative rod; facultative anaerobe and normal gut flora. Most common cause of UTI and a leading cause of neonatal meningitis, sepsis, and gastroenteritis (pathogenic strains).",
    morphology: [
      "Gram− bacilli (rods)",
      "Lactose fermenter (pink colonies on MacConkey agar)",
      "Oxidase negative (Enterobacteriaceae)",
    ],
    virulenceFactors: [
      "P fimbriae (pyelonephritis-associated) — bind uroepithelium",
      "K capsule — neonatal meningitis strains",
      "LT and ST enterotoxins (ETEC)",
      "Shiga-like toxin (EHEC / O157:H7)",
      "Intimin (EHEC attachment)",
    ],
    transmission: [
      "Fecal-oral (gastroenteritis strains)",
      "Ascension from perineum (UTI)",
      "Contaminated food/water (EHEC, ETEC)",
    ],
    diseases: [
      "Uncomplicated and complicated UTI, pyelonephritis",
      "Neonatal meningitis and sepsis (K1 strains)",
      "EHEC hemorrhagic colitis → HUS",
      "ETEC traveler's diarrhea",
      "Sepsis (especially urosepsis)",
    ],
    classicPresentation: [
      "Dysuria, frequency, suprapubic pain (cystitis)",
      "Flank pain, fever, CVA tenderness (pyelonephritis)",
      "Bloody diarrhea → anemia, thrombocytopenia, renal failure (EHEC/HUS)",
    ],
    diagnosis: [
      "Urine culture >10⁵ CFU/mL (standard criteria)",
      "Stool culture for EHEC; do not give empiric fluoroquinolones in bloody diarrhea (HUS risk)",
      "CSF culture in neonatal meningitis",
    ],
    treatment: [
      "Uncomplicated UTI: nitrofurantoin, TMP-SMX, fosfomycin",
      "Pyelonephritis/sepsis: ceftriaxone, fluoroquinolone",
      "EHEC: supportive care only — antibiotics may ↑ HUS risk",
    ],
    distinguishFrom: [
      "Proteus — urease+, struvite stones, ammonia smell",
      "Klebsiella — thick mucoid capsule; alcoholics with aspiration",
      "Salmonella/Shigella — non-lactose fermenters; bloody diarrhea workup differs",
    ],
    boardsPearls: [
      "#1 cause of UTI overall",
      "EHEC O157:H7 — avoid antibiotics; monitor for HUS (triad: anemia, thrombocytopenia, AKI)",
      "Neonatal meningitis E. coli — look for K1 capsule strains",
    ],
    pediatrics:
      "Neonatal E. coli sepsis/meningitis — early-onset (vertical) vs late-onset; ampicillin + gentamicin empirically.",
  },
  {
    id: "haemophilus-influenzae",
    name: "Haemophilus influenzae",
    aliases: [
      "haemophilus influenzae",
      "h. influenzae",
      "h influenzae",
      "haemophilus",
    ],
    type: "gram-negative-rod",
    definition:
      "Gram-negative coccobacillus requiring hemin (factor X) and NAD (factor V). Type b (Hib) capsule is invasive; nontypeable strains cause mucosal infections.",
    morphology: [
      "Gram− pleomorphic coccobacilli",
      "Requires factors V and X (chocolate agar)",
      "Type b polysaccharide capsule (invasive strains)",
    ],
    virulenceFactors: [
      "Polyribosylribitol phosphate (PRP) capsule — Hib antiphagocytic",
      "IgA protease",
      "Pili for mucosal attachment (nontypeable)",
    ],
    transmission: ["Respiratory droplets"],
    diseases: [
      "Epiglottitis (Hib — now rare with vaccination)",
      "Meningitis (Hib)",
      "Otitis media and sinusitis (nontypeable)",
      "Community-acquired pneumonia (especially COPD/elders)",
      "Purulent pericarditis",
    ],
    classicPresentation: [
      "Epiglottitis — drooling, tripod posture, stridor (medical emergency)",
      "Meningitis in unvaccinated child",
      "Otitis media after viral URI",
    ],
    diagnosis: [
      "Culture on chocolate agar",
      "Gram stain of epiglottic swab (look before intubation if safe)",
      "CSF culture in meningitis",
    ],
    treatment: [
      "Meningitis/epiglottitis: ceftriaxone or cefotaxime",
      "Otitis media: amoxicillin-clavulanate (β-lactamase producing strains common)",
      "Epiglottitis: secure airway first, then IV antibiotics",
    ],
    distinguishFrom: [
      "S. pneumoniae — Gram+ diplococci; otitis and meningitis overlap",
      "Bordetella pertussis — also requires special media; whooping cough",
      "Moraxella catarrhalis — otitis; produces β-lactamase",
    ],
    boardsPearls: [
      "Hib vaccine → epiglottitis and invasive Hib disease now rare in vaccinated children",
      "Epiglottitis — do not agitate child; OR for airway, not blind tongue depressor exam",
      "Nontypeable H. influenzae common in COPD exacerbations and otitis",
    ],
    pediatrics:
      "Hib conjugate vaccine at 2, 4, 6, 12–15 months; unvaccinated or immunocompromised children at highest risk for invasive disease.",
  },
  {
    id: "neisseria-meningitidis",
    name: "Neisseria meningitidis",
    aliases: [
      "neisseria meningitidis",
      "n. meningitidis",
      "meningococcus",
      "meningococcal",
      "meningococci",
    ],
    type: "gram-negative-cocci",
    definition:
      "Gram-negative diplococcus (kidney bean-shaped pairs); oxidase positive. Causes meningitis and rapidly progressive meningococcemia with purpura.",
    morphology: [
      "Gram− diplococci (coffee bean/kidney bean pairs)",
      "Oxidase positive",
      "Thayer-Martin selective media (VCN inhibitors)",
    ],
    virulenceFactors: [
      "Polysaccharide capsule — serogroups A, B, C, W, Y",
      "Lipooligosaccharide (LOS) endotoxin — shock, DIC",
      "IgA protease",
    ],
    transmission: [
      "Respiratory droplets",
      "Close contact in crowded settings (dorms, military)",
    ],
    diseases: [
      "Meningitis",
      "Meningococcemia with purpura/petechiae",
      "Waterhouse-Friderichsen syndrome (adrenal hemorrhage)",
      "Chronic meningococcemia",
    ],
    classicPresentation: [
      "Acute meningitis + non-blanching purpuric rash",
      "Rapid shock and DIC in meningococcemia",
      "Leg pain, cold extremities in early sepsis (children)",
    ],
    diagnosis: [
      "Gram stain/culture of CSF or blood",
      "Classic CSF Gram− diplococci intracellularly",
      "PCR and latex agglutination if culture negative post-antibiotics",
    ],
    treatment: [
      "Ceftriaxone or cefotaxime empirically for bacterial meningitis",
      "Close contacts: chemoprophylaxis (rifampin, ciprofloxacin, or ceftriaxone)",
      "Aggressive supportive care for shock/DIC",
    ],
    distinguishFrom: [
      "N. gonorrhoeae — same genus; sexually transmitted; also Gram− diplococci",
      "S. pneumoniae — Gram+ diplococci; meningitis overlap",
      "Rickettsia — rash and fever; treat with doxycycline",
    ],
    boardsPearls: [
      "Non-blanching rash + fever = meningococcemia until proven otherwise",
      "Chemoprophylaxis for close contacts mandatory",
      "Quadrivalent conjugate vaccine (ACWY) + MenB for adolescents/college",
    ],
    pediatrics:
      "Children <5 and adolescents 16–23 peak incidence; petechiae in febrile child requires urgent evaluation.",
  },
  {
    id: "clostridium-perfringens",
    name: "Clostridium perfringens",
    aliases: [
      "clostridium perfringens",
      "c. perfringens",
      "clostridium",
    ],
    type: "anaerobe",
    definition:
      "Gram-positive, spore-forming anaerobic rod. Produces α-toxin (lecithinase/phospholipase C) causing gas gangrene and a common form of food poisoning.",
    morphology: [
      "Gram+ rod (may Gram-variable in tissue)",
      "Spore-forming anaerobe",
      "Non-motile (vs C. tetani)",
      "Double zone hemolysis on blood agar",
    ],
    virulenceFactors: [
      "α-toxin (lecithinase) — myonecrosis, hemolysis",
      "θ-toxin (perfringolysin O)",
      "Enterotoxin — food poisoning (heat-labile, reheated meat)",
    ],
    transmission: [
      "Soil contamination of wounds",
      "Ingestion of reheated meat (food poisoning)",
    ],
    diseases: [
      "Gas gangrene (clostridial myonecrosis)",
      "Food poisoning (8–16 h incubation, self-limited)",
      "Necrotizing enteritis (rare; pigbel in Papua New Guinea)",
    ],
    classicPresentation: [
      "Crepitus, bronze skin, severe pain after traumatic wound (gas gangrene)",
      "Watery diarrhea + cramps after cafeteria/reheated meat (food poisoning)",
    ],
    diagnosis: [
      "Gram stain of wound — Gram+ rods, few WBCs (leukemoid reaction later)",
      "X-ray/CT — gas in tissues",
      "Food outbreak: short incubation, no fever/vomiting prominent",
    ],
    treatment: [
      "Gas gangrene: penicillin + clindamycin + urgent surgical debridement",
      "Hyperbaric oxygen adjunct for myonecrosis",
      "Food poisoning: supportive care only",
    ],
    distinguishFrom: [
      "C. difficile — antibiotic-associated colitis, toxin-mediated",
      "C. tetani — spastic paralysis, lockjaw; tetanospasmin",
      "C. botulinum — flaccid paralysis; preformed toxin in food",
    ],
    boardsPearls: [
      "α-toxin = lecithinase; destroys cell membranes → gas gangrene",
      "Surgical emergency — antibiotics alone insufficient for myonecrosis",
      "C. perfringens food poisoning: reheated meat, short incubation, no fever",
    ],
    pediatrics:
      "Pediatric gas gangrene rare; consider necrotizing fasciitis overlap in toxic-appearing child with extremity pain.",
  },
  {
    id: "mycobacterium-tuberculosis",
    name: "Mycobacterium tuberculosis",
    aliases: [
      "mycobacterium tuberculosis",
      "m. tuberculosis",
      "m tuberculosis",
      "tuberculosis",
      "tb",
      "tubercle bacillus",
    ],
    type: "acid-fast",
    definition:
      "Acid-fast, aerobic rod with mycolic acid-rich cell wall. Causes pulmonary and extrapulmonary tuberculosis; latent infection can reactivate.",
    morphology: [
      "Acid-fast bacilli (Ziehl-Neelsen/Kinyoun — red rods on blue background)",
      "Slow-growing; Lowenstein-Jensen or liquid culture",
      "Cannot Gram stain well (waxy envelope)",
    ],
    virulenceFactors: [
      "Mycolic acid/cord factor — granuloma formation",
      "Sulfatides — prevent phagosome-lysosome fusion",
      "Lipoarabinomannan — immunomodulatory",
    ],
    transmission: ["Airborne droplet nuclei from active pulmonary TB"],
    diseases: [
      "Primary pulmonary TB (Ghon focus + hilar LAD)",
      "Reactivation TB (upper lobe cavitary disease)",
      "Miliary TB",
      "Extrapulmonary: meningitis, Pott disease, adrenalitis",
    ],
    classicPresentation: [
      "Chronic cough, hemoptysis, night sweats, weight loss, fever",
      "Upper lobe cavitary infiltrate on CXR",
      "Meningitis — basilar, subacute, lymphocytic CSF",
    ],
    diagnosis: [
      "PPD/IGRA for latent infection",
      "AFB smear and culture (gold standard for active disease)",
      "Quantiferon/T-SPOT for latent (not active disease monitoring)",
      "CXR: upper lobe cavities, Ghon complex in primary",
    ],
    treatment: [
      "Active TB: RIPE (rifampin, isoniazid, pyrazinamide, ethambutol) × 2 months, then RI × 4 months",
      "Latent TB: isoniazid × 9 months or rifampin × 4 months",
      "Always check HIV; DOT recommended",
    ],
    distinguishFrom: [
      "M. avium complex — immunocompromised; non-tuberculous mycobacteria",
      "Nocardia — weakly acid-fast, filamentous; sulfonamide treatment",
      "Histoplasma — endemic fungi; intracellular yeasts in macrophages",
    ],
    boardsPearls: [
      "Acid-fast = mycolic acid in cell wall; red on Ziehl-Neelsen",
      "Isoniazid + rifampin — hepatotoxicity; pyridoxine with INH prevents neuropathy",
      "Ethambutol — optic neuritis (color vision); check before and during therapy",
    ],
    pediatrics:
      "Primary TB in children — hilar LAD, Ghon focus; may progress to miliary TB; BCG vaccinated infants have + PPD without active disease.",
  },
  {
    id: "treponema-pallidum",
    name: "Treponema pallidum",
    aliases: [
      "treponema pallidum",
      "t. pallidum",
      "syphilis",
      "spirochete syphilis",
    ],
    type: "spirochete",
    definition:
      "Spirochete causative agent of syphilis; cannot be cultured on routine media. Diagnosed by dark-field microscopy (primary chancre), serology, or CSF studies.",
    morphology: [
      "Spiral/spirochete — too thin for Gram stain",
      "Dark-field microscopy of chancre exudate",
      "Silver stain (Warthin-Starry) on biopsy",
    ],
    virulenceFactors: [
      "Outer membrane lacks LPS; few surface proteins",
      "Evades immune clearance → chronic stages",
    ],
    transmission: ["Sexual contact", "Vertical (congenital syphilis)"],
    diseases: [
      "Primary syphilis (painless chancre)",
      "Secondary syphilis (diffuse rash, condyloma lata)",
      "Latent and tertiary syphilis (gummas, tabes dorsalis, aortitis)",
      "Congenital syphilis",
      "Neurosyphilis",
    ],
    classicPresentation: [
      "Painless indurated chancre with clean base",
      "Palmar/plantar rash + lymphadenopathy (secondary)",
      "Argyl Robertson pupils, tabes dorsalis (tertiary/neuro)",
    ],
    diagnosis: [
      "Non-treponemal: RPR/VDRL (screen, track disease activity)",
      "Treponemal: FTA-ABS, TP-PA (confirmatory)",
      "Dark-field of chancre fluid (primary)",
      "CSF VDRL for neurosyphilis",
    ],
    treatment: [
      "Primary/secondary/latent early: benzathine penicillin G IM",
      "Neurosyphilis: IV penicillin G",
      "Penicillin allergy: desensitization (preferred in pregnancy)",
    ],
    distinguishFrom: [
      "Haemophilus ducreyi — painful chancroid",
      "Herpes simplex — painful grouped vesicles",
      "Lyme disease (Borrelia) — erythema migrans, different serology",
    ],
    boardsPearls: [
      "Painless chancre = syphilis until proven otherwise",
      "Jarisch-Herxheimer reaction after penicillin in early syphilis",
      "RPR/VDRL false positives: pregnancy, SLE, viral infections",
    ],
    pediatrics:
      "Congenital syphilis — saddle nose, saber shins, Hutchinson teeth, snuffles; treat mother and infant with penicillin.",
  },
  {
    id: "hiv",
    name: "Human Immunodeficiency Virus",
    aliases: [
      "human immunodeficiency virus",
      "hiv",
      "hiv-1",
      "hiv 1",
      "aids virus",
    ],
    type: "virus",
    definition:
      "Retrovirus (ssRNA) that infects CD4+ T cells and macrophages via CD4 and CCR5/CXCR4 co-receptors. Progressive immunodeficiency leads to AIDS and opportunistic infections.",
    morphology: [
      "Enveloped retrovirus; cone-shaped capsid",
      "Reverse transcriptase — RNA → DNA provirus",
      "Integrates into host genome (latent reservoir)",
    ],
    virulenceFactors: [
      "gp120/gp41 — CD4/CCR5 binding and fusion",
      "Tat, Rev — viral replication regulators",
      "High mutation rate (error-prone RT) → resistance and vaccine difficulty",
    ],
    transmission: [
      "Sexual contact",
      "Blood/blood products, needle sharing",
      "Vertical (perinatal)",
    ],
    diseases: [
      "Acute retroviral syndrome",
      "Chronic HIV infection",
      "AIDS (CD4 <200 or AIDS-defining illness)",
      "Opportunistic infections (PCP, toxoplasmosis, CMV, MAC, etc.)",
    ],
    classicPresentation: [
      "Mononucleosis-like illness 2–4 weeks post-exposure",
      "Oral thrush, weight loss, chronic diarrhea at low CD4",
      "PCP: dry cough, hypoxia, diffuse interstitial infiltrates (CD4 <200)",
    ],
    diagnosis: [
      "HIV-1/2 antigen/antibody combo assay (4th gen)",
      "HIV RNA viral load (acute infection, monitoring)",
      "CD4 count and % for staging and prophylaxis",
    ],
    treatment: [
      "ART: 2 NRTIs + INSTI (or other third agent) — treat all diagnosed patients",
      "Start ASAP; one pill daily regimens common",
      "Prophylaxis: TMP-SMX for PCP when CD4 <200",
    ],
    distinguishFrom: [
      "EBV/CMV acute mono-like illness — check HIV Ag/Ab and viral load",
      "HTLV-1 — also retrovirus; adult T-cell leukemia, myelopathy",
      "Primary immunodeficiency — early onset, family history",
    ],
    boardsPearls: [
      "CCR5 antagonist (maraviroc) only if tropism assay shows R5 virus",
      "Integrase inhibitors — weight gain side effect; excellent efficacy",
      "PrEP with tenofovir/emtricitabine for high-risk seronegative patients",
    ],
    pediatrics:
      "Vertical transmission reduced by maternal ART and zidovudine prophylaxis; breast-feeding counseling in resource-limited settings.",
  },
  {
    id: "candida-albicans",
    name: "Candida albicans",
    aliases: [
      "candida albicans",
      "c. albicans",
      "candida",
      "candidiasis",
    ],
    type: "fungus",
    definition:
      "Dimorphic fungus (yeast at 37°C, pseudohyphae in tissue). Normal flora that causes mucocutaneous and invasive disease in immunocompromised and antibiotic-disrupted hosts.",
    morphology: [
      "Gram+ yeast with pseudohyphae (Gram stain)",
      "Germ tube test positive (incubate in serum ~2 h)",
      "Creamy white colonies on agar",
    ],
    virulenceFactors: [
      "Adhesins (ALS family)",
      "Biofilm formation (catheters, prosthetics)",
      "Phenotypic switching",
      "Secreted aspartyl proteases",
    ],
    transmission: ["Endogenous overgrowth", "Direct contact (mucocutaneous)"],
    diseases: [
      "Oral thrush",
      "Esophageal candidiasis (HIV, immunosuppression)",
      "Vulvovaginal candidiasis",
      "Candidemia and invasive candidiasis",
      "Chronic mucocutaneous candidiasis (immunodeficiency)",
    ],
    classicPresentation: [
      "White plaques on buccal mucosa/tongue that scrape off (thrush)",
      "Odynophagia in esophageal candidiasis",
      "Curdy vaginal discharge with pruritus",
    ],
    diagnosis: [
      "KOH prep or Gram stain — yeast and pseudohyphae",
      "Germ tube test",
      "Blood cultures in candidemia (may need multiple sets)",
    ],
    treatment: [
      "Mucocutaneous: nystatin, clotrimazole, fluconazole",
      "Esophageal/invasive: fluconazole; echinocandin if severe or azole-resistant",
      "Candidemia: echinocandin first line; remove central lines",
    ],
    distinguishFrom: [
      "Oral hairy leukoplakia (EBV) — lateral tongue, does not scrape off",
      "Cryptococcus — encapsulated yeast in CSF; India ink",
      "Aspergillus — septate hyphae, angioinvasion; not yeast forms in tissue",
    ],
    boardsPearls: [
      "Germ tube+ at 37°C = C. albicans (rapid ID)",
      "Fluconazole prophylaxis only in select high-risk neutropenia — resistance concerns",
      "Echinocandins (caspofungin) for serious invasive disease",
    ],
    pediatrics:
      "Neonatal thrush common; check for diaper candidiasis; consider immunodeficiency if chronic mucocutaneous candidiasis.",
  },
  {
    id: "cryptococcus-neoformans",
    name: "Cryptococcus neoformans",
    aliases: [
      "cryptococcus neoformans",
      "cryptococcus",
      "cryptococcal",
    ],
    type: "fungus",
    definition:
      "Encapsulated yeast found in pigeon droppings and soil. Causes meningitis (especially HIV/AIDS) and pulmonary cryptococcosis.",
    morphology: [
      "Encapsulated yeast (mucicarmine or India ink highlights capsule)",
      "Narrow-based budding",
      "Urease positive",
      "Not dimorphic (unlike Histoplasma/Blastomyces)",
    ],
    virulenceFactors: [
      "Polysaccharide capsule — antiphagocytic; antigen detectable in CSF/serum",
      "Melanin production (phenoloxidase)",
      "Laccase",
    ],
    transmission: ["Inhalation of environmental yeast/spores"],
    diseases: [
      "Cryptococcal meningitis",
      "Cryptococcal pneumonia",
      "Disseminated disease in immunocompromised",
    ],
    classicPresentation: [
      "Subacute headache, fever, altered mental status in AIDS (CD4 low)",
      "↑ opening pressure on LP",
      "Pulmonary nodules in immunocompetent hosts",
    ],
    diagnosis: [
      "CSF India ink — encapsulated yeast",
      "Cryptococcal antigen (CSF/serum) — highly sensitive",
      "Culture on Sabouraud agar",
    ],
    treatment: [
      "Induction: amphotericin B + flucytosine × 2 weeks",
      "Consolidation/maintenance: fluconazole (long course in HIV)",
      "Serial LP for elevated ICP",
    ],
    distinguishFrom: [
      "Candida — pseudohyphae; not typically meningitis in same pattern",
      "Coccidioides — spherules in tissue; endemic Southwest",
      "Histoplasma — intracellular in macrophages; endemic Ohio/Mississippi valleys",
    ],
    boardsPearls: [
      "India ink and cryptococcal antigen in CSF — think AIDS + meningitis",
      "Amphotericin + flucytosine induction; fluconazole maintenance",
      "Elevated ICP management critical — repeat LPs or shunt",
    ],
    pediatrics:
      "Pediatric cryptococcal meningitis rare outside severe immunosuppression; consider HIV, T-cell defects.",
  },
  {
    id: "plasmodium-falciparum",
    name: "Plasmodium falciparum",
    aliases: [
      "plasmodium falciparum",
      "p. falciparum",
      "falciparum malaria",
      "malaria",
      "cerebral malaria",
    ],
    type: "parasite",
    definition:
      "Most virulent malaria species; transmitted by Anopheles mosquito. Ring forms may show headphone/applique appearance; sequesters in microvasculature causing cerebral malaria and severe disease.",
    morphology: [
      "Giemsa-stained thin smear — ring forms, trophozoites, schizonts, gametocytes",
      "Multiple rings per RBC; banana-shaped gametocytes (P. falciparum only)",
      "Applique/headphone ring forms at RBC periphery",
    ],
    virulenceFactors: [
      "PfEMP1 — cytoadherence to endothelium (sequestration)",
      "RBC rosetting",
      "High parasitemia without spleen clearance in naïve hosts",
    ],
    transmission: ["Anopheles mosquito bite", "Blood transfusion, vertical (rare)"],
    diseases: [
      "Uncomplicated malaria",
      "Severe/cerebral malaria",
      "Blackwater fever (hemolysis, hemoglobinuria)",
      "Maternal/fetal complications in pregnancy",
    ],
    classicPresentation: [
      "Cyclical fever, chills, sweats (may be irregular in falciparum)",
      "Travel to/endemic area without prophylaxis",
      "Altered mental status, seizures (cerebral malaria)",
      "Jaundice, anemia, thrombocytopenia",
    ],
    diagnosis: [
      "Thick and thin Giemsa blood smears (gold standard)",
      "Rapid diagnostic tests (HRP2, pLDH)",
      "Repeat smears if initial negative but suspicion high",
    ],
    treatment: [
      "Uncomplicated: artemisinin-based combination therapy (ACT)",
      "Severe: IV artesunate (preferred over quinine in US)",
      "Add doxycycline/clindamycin per guidelines",
    ],
    distinguishFrom: [
      "P. vivax/ovale — hypnozoites (relapse); require primaquine",
      "P. malariae — band forms; low parasitemia",
      "Babesia — similar rings; US Northeast; maltese cross; no travel to tropics",
    ],
    boardsPearls: [
      "P. falciparum only species with banana gametocytes",
      "Cerebral malaria = P. falciparum emergency; IV artesunate",
      "Sickle cell trait confers partial protection against falciparum",
    ],
    pediatrics:
      "Children in endemic areas bear highest mortality; cerebral malaria presents with seizures and coma; hypoglycemia common.",
  },
  {
    id: "giardia-lamblia",
    name: "Giardia lamblia",
    aliases: [
      "giardia lamblia",
      "giardia",
      "giardiasis",
      "g. lamblia",
    ],
    type: "parasite",
    definition:
      "Flagellated protozoan with trophozoite and cyst forms. Causes foul-smelling fatty diarrhea after ingestion of cysts from contaminated water.",
    morphology: [
      "Trophozoites — pear-shaped with two nuclei (face-like)",
      "Cysts — oval with 4 nuclei mature",
      "Seen in stool O&P or antigen assay",
    ],
    virulenceFactors: [
      "Adherence disc (ventral sucking disk)",
      "Cyst wall survives chlorination better than many bacteria",
    ],
    transmission: [
      "Fecal-oral (contaminated water — camping, daycare)",
      "Person-to-person (daycare, MSM)",
    ],
    diseases: ["Giardiasis — malabsorptive diarrhea"],
    classicPresentation: [
      "Foul-smelling, greasy/fatty stools (steatorrhea)",
      "Bloating, flatulence, no blood",
      "Daycare outbreak or wilderness water exposure",
    ],
    diagnosis: [
      "Stool antigen (ELISA) — preferred",
      "O&P for cysts/trophozoites (may need repeated samples)",
      "String test (duodenal) rarely needed",
    ],
    treatment: [
      "Metronidazole or tinidazole",
      "Nitazoxanide (alternative)",
    ],
    distinguishFrom: [
      "Cryptosporidium — acid-fast oocysts; waterborne; AIDS chronic diarrhea",
      "Entamoeba histolytica — bloody diarrhea, liver abscess",
      "Celiac disease — chronic malabsorption; serology and biopsy",
    ],
    boardsPearls: [
      "Fatty foul stools + camping = Giardia",
      "Does not invade bloodstream — no eosinophilia",
      "Trophozoite has two nuclei — 'clown face' on microscopy",
    ],
    pediatrics:
      "Common daycare pathogen; may cause failure to thrive with chronic infection; treat household contacts if symptomatic.",
  },
  {
    id: "klebsiella-pneumoniae",
    name: "Klebsiella pneumoniae",
    aliases: [
      "klebsiella pneumoniae",
      "k. pneumoniae",
      "klebsiella",
    ],
    type: "gram-negative-rod",
    definition:
      "Encapsulated Gram-negative rod; lactose fermenter. Classic cause of lobar pneumonia in alcoholics and nosocomial UTIs/pneumonia; hypervirulent strains cause liver abscess (especially in East Asia).",
    morphology: [
      "Gram− bacilli",
      "Thick polysaccharide capsule → mucoid colonies",
      "Lactose fermenter (pink on MacConkey)",
      "Non-motile",
    ],
    virulenceFactors: [
      "Capsule — antiphagocytic (major virulence factor)",
      "Urease (some strains)",
      "Hypervirulent K1/K2 capsular types — invasive liver abscess syndrome",
      "Extended-spectrum β-lactamases (ESBL) and carbapenemases (KPC)",
    ],
    transmission: [
      "Endogenous (GI/colonization) in nosocomial infection",
      "Aspiration in alcoholics/aspiration pneumonia",
    ],
    diseases: [
      "Community-acquired pneumonia (currant jelly sputum in alcoholics)",
      "Nosocomial pneumonia and UTI",
      "Liver abscess (hypervirulent strains; bacteremia + eye involvement)",
      "Neonatal sepsis",
    ],
    classicPresentation: [
      "Alcoholic with lobar pneumonia and thick blood-tinged (currant jelly) sputum",
      "Nosocomial pneumonia after antibiotics in ICU",
      "Diabetic/Asian male with liver abscess and endophthalmitis (hypervirulent K1)",
    ],
    diagnosis: [
      "Gram stain/culture; mucoid colonies",
      "Suspect ESBL/KPC in health care–associated infections",
      "Imaging for liver abscess if bacteremic with right upper quadrant symptoms",
    ],
    treatment: [
      "Community: ceftriaxone, fluoroquinolone (local resistance patterns)",
      "ESBL: carbapenems",
      "KPC (carbapenem-resistant): ceftazidime-avibactam, meropenem-vaborbactam",
    ],
    distinguishFrom: [
      "E. coli — also lactose fermenter; less mucoid; different capsular types",
      "S. pneumoniae — Gram+ diplococci; community pneumonia in non-alcoholics",
      "Enterobacter — also ESBL producers; inducible ampC",
    ],
    boardsPearls: [
      "Currant jelly sputum + alcoholic = Klebsiella pneumonia",
      "Mucoid colonies = heavy capsule",
      "Hypervirulent K. pneumoniae liver abscess — think if bacteremia + eye findings",
    ],
    pediatrics:
      "Neonatal Klebsiella sepsis in NICU; ESBL strains increasingly reported in pediatric nosocomial infections.",
  },
  {
    id: "pseudomonas-aeruginosa",
    name: "Pseudomonas aeruginosa",
    aliases: [
      "pseudomonas aeruginosa",
      "p. aeruginosa",
      "pseudomonas",
    ],
    type: "gram-negative-rod",
    definition:
      "Oxidase-positive, non-lactose-fermenting Gram-negative rod. Opportunist causing severe nosocomial, burn, cystic fibrosis, and ventilator-associated infections; blue-green pigment and grape-like odor.",
    morphology: [
      "Gram− rods",
      "Oxidase positive",
      "Non-lactose fermenter (colorless on MacConkey)",
      "Blue-green pyocyanin pigment; grape-like odor",
      "Motile (single polar flagellum)",
    ],
    virulenceFactors: [
      "Exotoxin A — inhibits EF-2 (like diphtheria)",
      "Phospholipase C and elastase — tissue destruction",
      "Biofilm formation (catheters, CF airways, contact lenses)",
      "Alginate capsule in CF chronic infection",
    ],
    transmission: [
      "Hospital water sources, ventilators, contaminated solutions",
      "Colonization in CF, burns, immunocompromise",
    ],
    diseases: [
      "Ventilator-associated and hospital-acquired pneumonia",
      "UTI (catheter-associated)",
      "Ecthyma gangrenosum (immunocompromised)",
      "Hot tub folliculitis",
      "CF chronic pulmonary infection and exacerbations",
      "Malignant otitis externa (diabetics)",
      "Corneal keratitis (contact lens)",
    ],
    classicPresentation: [
      "CF patient with worsening pulmonary function and purulent sputum",
      "Neutropenic fever with ecthyma gangrenosum (hemorrhagic bullae)",
      "Diabetic with severe ear pain and granulation tissue (malignant otitis externa)",
    ],
    diagnosis: [
      "Culture — oxidase+ Gram− rod, fruity/grape odor",
      "Non-lactose fermenter on MacConkey",
      "CF sputum chronically colonized; treat exacerbations not colonization alone",
    ],
    treatment: [
      "Antipseudomonal β-lactam (piperacillin-tazobactam, ceftazidime, cefepime) ± aminoglycoside or fluoroquinolone",
      "CF: inhaled tobramycin, colistin for chronic suppression",
      "Multidrug-resistant: colistin, ceftolozane-tazobactam, ceftazidime-avibactam",
    ],
    distinguishFrom: [
      "E. coli — lactose fermenter; oxidase negative",
      "Burkholderia cepacia — CF pathogen; can be misidentified",
      "Stenotrophomonas — also health care associated; TMP-SMX treatment",
    ],
    boardsPearls: [
      "Oxidase+ Gram− rod = Pseudomonas (and other non-fermenters)",
      "CF + Pseudomonas colonization = chronic biofilm disease",
      "Ecthyma gangrenosum in neutropenia — Pseudomonas until proven otherwise",
      "Aminoglycosides need oxygen for uptake — poor activity in anaerobic environments",
    ],
    pediatrics:
      "CF children colonized early with P. aeruginosa — eradication protocols with inhaled antibiotics; hot tub folliculitis in healthy children.",
  },
  {
    id: "legionella-pneumophila",
    name: "Legionella pneumophila",
    aliases: [
      "legionella pneumophila",
      "l. pneumophila",
      "legionella",
      "legionnaires disease",
      "legionnaires' disease",
    ],
    type: "gram-negative-rod",
    definition:
      "Gram-negative rod requiring cysteine and iron for growth; stains poorly. Causes atypical pneumonia from contaminated water aerosols (AC, hot tubs, hospital water systems).",
    morphology: [
      "Gram− bacilli (often faint/poor on Gram stain)",
      "Requires charcoal yeast extract (CYE) agar with cysteine and iron",
      "Silver stain (Dieterle) better than Gram in tissue",
      "Facultative intracellular (amoebae in environment; macrophages in host)",
    ],
    virulenceFactors: [
      "Dot/Icm type IV secretion — prevents phagolysosome fusion",
      "Lipopolysaccharide",
      "Proteases and phospholipases",
    ],
    transmission: [
      "Inhalation of aerosols from contaminated water (not person-to-person)",
      "Cooling towers, AC, showers, hot tubs",
    ],
    diseases: [
      "Legionnaires disease (severe atypical pneumonia)",
      "Pontiac fever (mild flu-like, no pneumonia)",
    ],
    classicPresentation: [
      "Severe pneumonia with high fever, confusion, diarrhea, hyponatremia",
      "Exposure to hotel/ hospital water or recent plumbing work",
      "Relative bradycardia (Faget sign) sometimes noted",
    ],
    diagnosis: [
      "Urinary Legionella antigen (L. pneumophila serogroup 1) — rapid",
      "Culture on BCYE agar (special media)",
      "CXR: patchy unilateral infiltrates progressing to consolidation",
    ],
    treatment: [
      "Fluoroquinolone (levofloxacin) or macrolide (azithromycin)",
      "Add rifampin in severe disease (some guidelines)",
      "β-lactams ineffective — drug does not penetrate macrophages well alone",
    ],
    distinguishFrom: [
      "Mycoplasma — younger, walking pneumonia; no hyponatremia/diarrhea cluster",
      "S. pneumoniae — typical lobar pneumonia; responds to β-lactams",
      "Chlamydia pneumoniae — atypical pneumonia; different epidemiology",
    ],
    boardsPearls: [
      "Hyponatremia + diarrhea + severe pneumonia = Legionella",
      "Outbreaks linked to water systems — not contagious person-to-person",
      "Treat with macrolide or fluoroquinolone, not penicillin alone",
    ],
    pediatrics:
      "Rare in healthy children; consider in immunocompromised or hospital-acquired pneumonia with water exposure.",
  },
  {
    id: "bordetella-pertussis",
    name: "Bordetella pertussis",
    aliases: [
      "bordetella pertussis",
      "b. pertussis",
      "bordetella",
      "pertussis",
      "whooping cough",
    ],
    type: "gram-negative-rod",
    definition:
      "Gram-negative coccobacillus causing pertussis (whooping cough). Requires special media (Regan-Lowe, Bordet-Gengou); produces pertussis toxin and other adhesins.",
    morphology: [
      "Gram− coccobacilli",
      "Strict aerobe; slow-growing",
      "Regan-Lowe or Bordet-Gengou agar (often with cephalexin to suppress flora)",
      "Bordet-Gengou — mercury-containing (historical)",
    ],
    virulenceFactors: [
      "Pertussis toxin — ADP-ribosylation of Gi → lymphocytosis",
      "Adenylate cyclase toxin — ↑ cAMP",
      "Filamentous hemagglutinin, pertactin, fimbriae — adhesion",
      "Tracheal cytotoxin — ciliated cell damage",
    ],
    transmission: ["Respiratory droplets — highly contagious in catarrhal stage"],
    diseases: ["Pertussis (whooping cough)"],
    classicPresentation: [
      "Catarrhal stage (1–2 weeks): URI symptoms, most contagious",
      "Paroxysmal stage: paroxysms of cough → inspiratory whoop, post-tussive vomiting",
      "Convalescent stage: weeks to months of gradual improvement",
      "Marked lymphocytosis (pertussis toxin effect)",
    ],
    diagnosis: [
      "Nasopharyngeal PCR (preferred)",
      "Culture on Regan-Lowe/charcoal cephalexin agar",
      "Marked lymphocytosis supports diagnosis",
    ],
    treatment: [
      "Macrolide (azithromycin) — treat early; limits transmission more than symptom duration",
      "TMP-SMX alternative in macrolide allergy",
      "Post-exposure prophylaxis for close contacts",
    ],
    distinguishFrom: [
      "B. parapertussis — milder pertussis-like illness",
      "Mycoplasma pneumoniae — cough but no whoop; different lymphocyte pattern",
      "Viral URI/bronchiolitis — no pertussis toxin lymphocytosis",
    ],
    boardsPearls: [
      "Pertussis toxin → ↑ cAMP → lymphocytosis (can mimic leukemia in infants)",
      "Whoop may be absent in infants — apnea and cyanosis instead",
      "Tdap booster for adolescents/adults; cocooning around newborns",
    ],
    pediatrics:
      "Infants <6 months highest mortality — apnea, no whoop; treat household contacts; DTaP series prevention.",
  },
  {
    id: "epstein-barr-virus",
    name: "Epstein-Barr Virus",
    aliases: [
      "epstein-barr virus",
      "epstein barr virus",
      "ebv",
      "human herpesvirus 4",
      "hhv-4",
    ],
    type: "virus",
    definition:
      "Herpesvirus (HHV-4) infecting B cells via CD21. Causes infectious mononucleosis in adolescents; associated with Burkitt lymphoma, nasopharyngeal carcinoma, and lymphoproliferative disorders.",
    morphology: [
      "Enveloped dsDNA herpesvirus",
      "Infects B lymphocytes via CD21 (CR2)",
      "Latent in memory B cells after acute infection",
    ],
    virulenceFactors: [
      "EBNA and LMP proteins — latency and B-cell growth",
      "Infectious mononucleosis — atypical (reactive) CD8+ T-cell response",
      "Associated malignancies in immunocompromised and endemic settings",
    ],
    transmission: ["Saliva (kissing disease)", "Blood transfusion (rare)"],
    diseases: [
      "Infectious mononucleosis",
      "Burkitt lymphoma (c-myc translocation; jaw in endemic Africa, abdomen in sporadic)",
      "Nasopharyngeal carcinoma",
      "Post-transplant lymphoproliferative disorder (PTLD)",
      "Oral hairy leukoplakia (HIV)",
    ],
    classicPresentation: [
      "Adolescent with fever, pharyngitis, posterior cervical LAD, fatigue",
      "Atypical lymphocytes on smear",
      "Maculopapular rash if given ampicillin/amoxicillin",
    ],
    diagnosis: [
      "Monospot (heterophile antibody) — rapid; false negative in young children",
      "EBV VCA IgM (acute), VCA IgG, EBNA (past infection)",
      "Atypical lymphocytes on peripheral smear",
    ],
    treatment: [
      "Supportive care for mono",
      "Avoid ampicillin/amoxicillin (rash)",
      "Avoid contact sports for ~3 weeks (splenic rupture risk)",
      "PTLD/malignancy — reduce immunosuppression, rituximab, chemotherapy as indicated",
    ],
    distinguishFrom: [
      "CMV mono-like illness — heterophile negative; CMV IgM",
      "Strep pharyngitis — anterior LAD, no atypical lymphocytes",
      "HIV acute retroviral syndrome — HIV Ag/Ab, viral load",
    ],
    boardsPearls: [
      "Ampicillin rash in mono — classic boards trap",
      "Downey cells = atypical lymphocytes (CD8+ T cells responding to infected B cells)",
      "Burkitt — t(8;14) c-myc; starry sky histology",
      "Post-transplant EBV → PTLD",
    ],
    pediatrics:
      "Mono often mild/subclinical in young children; heterophile antibody less sensitive <4 years — use EBV serology.",
  },
  {
    id: "cytomegalovirus",
    name: "Cytomegalovirus",
    aliases: [
      "cytomegalovirus",
      "cmv",
      "human herpesvirus 5",
      "hhv-5",
    ],
    type: "virus",
    definition:
      "Herpesvirus (HHV-5) causing congenital infection, mono-like illness in immunocompetent adults, and severe disease in transplant/AIDS patients. Characteristic owl's eye intranuclear inclusions.",
    morphology: [
      "Enveloped dsDNA herpesvirus",
      "Owl's eye intranuclear inclusions on histology",
      "Infects many cell types (endothelial, epithelial, leukocytes)",
    ],
    virulenceFactors: [
      "Latency in monocytes and endothelial cells",
      "Immune evasion — inhibits MHC, NK recognition",
      "Congenital infection — disrupts neurogenesis (periventricular calcifications)",
    ],
    transmission: [
      "Body fluids (saliva, urine, blood, breast milk, sexual contact)",
      "Vertical (congenital — highest risk with primary maternal infection)",
      "Transplant/transfusion",
    ],
    diseases: [
      "Congenital CMV (leading infectious cause of congenital sensorineural hearing loss)",
      "Mononucleosis-like illness (heterophile negative)",
      "Retinitis, esophagitis, colitis in AIDS (CD4 <50)",
      "CMV pneumonia and disease in transplant recipients",
    ],
    classicPresentation: [
      "Congenital: petechiae, jaundice, hepatosplenomegaly, periventricular calcifications, hearing loss",
      "AIDS: painless vision loss (retinitis), GI ulcerations",
      "Transplant: fever, leukopenia, organ dysfunction",
    ],
    diagnosis: [
      "CMV IgM/IgG serology",
      "CMV PCR (blood, CSF, tissue) — quantitative for transplant monitoring",
      "Owl's eye inclusions on biopsy",
      "Congenital: urine/ saliva PCR within 3 weeks of birth",
    ],
    treatment: [
      "Immunocompetent: usually supportive",
      "Ganciclovir or valganciclovir for severe/immunocompromised disease",
      "Foscarnet or cidofovir for ganciclovir-resistant retinitis",
      "Congenital: valganciclovir may improve hearing outcomes (specialist-guided)",
    ],
    distinguishFrom: [
      "EBV mono — heterophile positive; EBV serology",
      "Toxoplasmosis congenital — diffuse intracranial calcifications, chorioretinitis",
      "HSV congenital — skin/eye/brain; different inclusions",
    ],
    boardsPearls: [
      "Owl's eye inclusions = CMV on boards",
      "Heterophile-negative mono = CMV or HIV",
      "Congenital CMV — periventricular (not diffuse) calcifications vs toxoplasmosis",
      "Ganciclovir — myelosuppression; monitor CBC",
    ],
    pediatrics:
      "Congenital CMV common; most asymptomatic at birth but sensorineural hearing loss may develop; screen failed newborn hearing tests.",
  },
  {
    id: "cryptosporidium-parvum",
    name: "Cryptosporidium parvum",
    aliases: [
      "cryptosporidium parvum",
      "cryptosporidium",
      "crypto",
    ],
    type: "parasite",
    definition:
      "Apicomplexan protozoan causing watery diarrhea. Acid-fast oocysts in stool; chlorine-resistant — common in waterborne outbreaks and AIDS chronic diarrhea.",
    morphology: [
      "Acid-fast oocysts (modified Kinyoun stain — red on green background)",
      "4 sporozoites per oocyst",
      "Small (4–6 µm) — smaller than Giardia cysts",
    ],
    virulenceFactors: [
      "Oocyst wall resists chlorination",
      "Intracellular development in brush border (extracytoplasmic)",
    ],
    transmission: [
      "Fecal-oral; contaminated water (pools, day care)",
      "Oocysts chlorine-resistant",
    ],
    diseases: ["Cryptosporidiosis — watery diarrhea"],
    classicPresentation: [
      "Watery diarrhea after swimming or day care exposure",
      "Chronic severe diarrhea in AIDS (CD4 low)",
      "May be self-limited in immunocompetent hosts",
    ],
    diagnosis: [
      "Modified acid-fast stain of stool (oocysts)",
      "Stool antigen/PCR",
      "Often need multiple samples",
    ],
    treatment: [
      "Immunocompetent: supportive; nitazoxanide may shorten illness",
      "AIDS: ART to restore immunity primary; nitazoxanide adjunct",
    ],
    distinguishFrom: [
      "Giardia — cysts larger; fatty stools; not acid-fast",
      "Cyclospora — also acid-fast; larger oocysts; needs prolonged TMP-SMX",
      "Isospora — acid-fast; TMP-SMX treatment in AIDS",
    ],
    boardsPearls: [
      "Acid-fast oocysts in stool = Cryptosporidium (and Cyclospora/Isospora)",
      "Chlorine-resistant — pool outbreaks",
      "AIDS chronic diarrhea — Cryptosporidium until proven otherwise; fix immunity with ART",
    ],
    pediatrics:
      "Day care and pool outbreaks in toddlers; can cause dehydration; nitazoxanide approved in children.",
  },
  {
    id: "entamoeba-histolytica",
    name: "Entamoeba histolytica",
    aliases: [
      "entamoeba histolytica",
      "e. histolytica",
      "entamoeba",
      "amebiasis",
    ],
    type: "parasite",
    definition:
      "Invasive protozoan causing dysentery and liver abscess. Trophozoites ingest RBCs (pathognomonic); cysts transmitted fecal-orally.",
    morphology: [
      "Trophozoites with ingested erythrocytes (diagnostic)",
      "Cysts with 1–4 nuclei (mature cyst = 4)",
      "Trichrome stain on stool or biopsy",
    ],
    virulenceFactors: [
      "Gal/GalNAc lectin — adhesion to colonic mucosa",
      "Amoebapores — cell lysis",
      "Cysteine proteases — tissue invasion",
    ],
    transmission: ["Fecal-oral; cysts in contaminated food/water"],
    diseases: [
      "Amebic dysentery (bloody diarrhea, flask-shaped ulcers)",
      "Amebic liver abscess (right lobe; anchovy paste aspirate)",
      "Cutaneous amebiasis",
    ],
    classicPresentation: [
      "Traveler/endemic area with bloody diarrhea + right upper quadrant pain (liver abscess)",
      "Liver abscess with fever, hepatomegaly; may lack significant diarrhea",
      "Trophozoites with engulfed RBCs in stool",
    ],
    diagnosis: [
      "Stool antigen or PCR (distinguishes E. histolytica from E. dispar)",
      "Serology positive in invasive disease (especially liver abscess)",
      "Imaging: liver abscess — ultrasound/CT",
    ],
    treatment: [
      "Metronidazole or tinidazole (tissue invasion) + paromomycin or iodoquinol (luminal cysts)",
      "Aspiration of liver abscess if large, left lobe, or no response (debated)",
    ],
    distinguishFrom: [
      "E. dispar — morphologically identical but nonpathogenic; PCR/antigen distinguishes",
      "Giardia — fatty diarrhea, no blood, no liver abscess",
      "Pyogenic liver abscess — bacterial; different epidemiology and aspirate",
    ],
    boardsPearls: [
      "Trophozoite with ingested RBC = E. histolytica (not E. dispar)",
      "Liver abscess — serology often positive; treat metronidazole + luminal agent",
      "Flask-shaped colonic ulcers on histology",
    ],
    pediatrics:
      "Amebic dysentery in endemic areas; treat children with same agents (weight-based dosing); liver abscess less common but occurs.",
  },
  {
    id: "salmonella-enterica",
    name: "Salmonella enterica",
    aliases: [
      "salmonella enterica",
      "salmonella",
      "s. typhi",
      "salmonella typhi",
      "salmonella typhimurium",
      "s. typhimurium",
      "non-typhoidal salmonella",
    ],
    type: "gram-negative-rod",
    definition:
      "Gram-negative rod; non-lactose fermenter (usually). Causes gastroenteritis (non-typhoidal serovars) and typhoid fever (S. Typhi). Facultative intracellular pathogen.",
    morphology: [
      "Gram− bacilli",
      "Non-lactose fermenter (colorless colonies on MacConkey — except S. Typhi is slow lactose+)",
      "Motile (peritrichous flagella) except S. Gallinarum/Pullorum",
      "H2S production on TSI (black butt) — classic for many Salmonella",
    ],
    virulenceFactors: [
      "Type III secretion system — invasion of M cells and enterocytes",
      "Vi capsule (S. Typhi) — antiphagocytic",
      "Endotoxin (LPS)",
      "Intracellular survival in macrophages (typhoid)",
    ],
    transmission: [
      "Fecal-oral (poultry, eggs, reptiles, contaminated water)",
      "Typhoid: human reservoir; chronic carriers (gallbladder)",
    ],
    diseases: [
      "Salmonella gastroenteritis (self-limited diarrhea)",
      "Typhoid fever (S. Typhi — stepwise fever, rose spots, relative bradycardia)",
      "Bacteremia and endovascular infection in sickle cell (osteomyelitis)",
      "Chronic carrier state (gallbladder)",
    ],
    classicPresentation: [
      "Raw eggs/poultry → diarrhea, fever, cramps 12–72 h later",
      "Typhoid: prolonged fever, abdominal pain, rose spots, constipation > diarrhea",
      "Sickle cell child with osteomyelitis — Salmonella more common than Staph",
    ],
    diagnosis: [
      "Stool culture (non-typhoidal); blood culture early in typhoid",
      "Typhoid: blood culture best in first week; stool/ urine later",
      "Non-typhoidal: often no antibiotics in uncomplicated case",
    ],
    treatment: [
      "Uncomplicated gastroenteritis: supportive (avoid antibiotics — prolongs carrier state)",
      "Typhoid/severe/bacteremia: fluoroquinolone or ceftriaxone (resistance common)",
      "Sickle cell osteomyelitis: ceftriaxone + coverage per guidelines",
    ],
    distinguishFrom: [
      "Shigella — similar foodborne dysentery; more bloody/mucoid, lower inoculum",
      "Campylobacter — curved Gram− rod; associated with Guillain-Barré",
      "E. coli (ETEC/EHEC) — lactose fermenter (most strains)",
    ],
    boardsPearls: [
      "Reptiles/turtles and undercooked eggs — classic sources",
      "Typhoid = S. Typhi; treat; chronic gallbladder carrier",
      "Sickle cell + osteomyelitis → think Salmonella (functional asplenia)",
      "Antibiotics for uncomplicated nontyphoidal diarrhea often not indicated",
    ],
    pediatrics:
      "Salmonella gastroenteritis common in children; infants <3 months and immunocompromised need antibiotics; sickle cell osteomyelitis classic association.",
  },
  {
    id: "shigella-flexneri",
    name: "Shigella flexneri",
    aliases: [
      "shigella flexneri",
      "shigella",
      "s. flexneri",
      "s. dysenteriae",
      "shigella dysenteriae",
    ],
    type: "gram-negative-rod",
    definition:
      "Gram-negative rod; non-motile Enterobacteriaceae. Very low infectious dose; causes bacillary dysentery with invasive colonic inflammation.",
    morphology: [
      "Gram− bacilli",
      "Non-lactose fermenter",
      "Non-motile (unlike Salmonella/E. coli)",
      "Does not produce H2S on TSI",
    ],
    virulenceFactors: [
      "Type III secretion — invasion of colonic epithelium",
      "Shiga toxin (S. dysenteriae type 1) — HUS risk",
      "Intracellular spread cell-to-cell",
      "Low inoculum (10–100 organisms) — person-to-person spread",
    ],
    transmission: ["Fecal-oral; person-to-person (daycare), contaminated food/water"],
    diseases: [
      "Shigellosis (bacillary dysentery — bloody/mucoid diarrhea, tenesmus, fever)",
      "HUS (S. dysenteriae type 1 — Shiga toxin)",
    ],
    classicPresentation: [
      "Bloody diarrhea with mucus and severe abdominal cramps",
      "Daycare or institutional outbreak",
      "Tenesmus and high fever",
    ],
    diagnosis: [
      "Stool culture on selective media",
      "Leukocytes and blood in stool",
      "Rule out EHEC if considering antibiotics (HUS risk overlap)",
    ],
    treatment: [
      "Supportive hydration first",
      "Fluoroquinolone or azithromycin for moderate/severe (resistance varies)",
      "Avoid antibiotics in EHEC-like presentation until organism identified",
    ],
    distinguishFrom: [
      "Salmonella — usually less bloody; higher inoculum; motile",
      "Campylobacter — curved rod; poultry association",
      "EHEC O157:H7 — avoid antibiotics; Shiga toxin overlap with S. dysenteriae",
      "Entamoeba — trophozoites with RBCs; chronic bloody diarrhea + liver abscess",
    ],
    boardsPearls: [
      "Very low inoculum — highly contagious in daycare",
      "S. dysenteriae type 1 Shiga toxin → HUS (like EHEC)",
      "Non-motile Gram− rod causing bloody diarrhea",
    ],
    pediatrics:
      "Common cause of bloody diarrhea in toddlers; dehydration risk high; daycare exclusion until culture negative.",
  },
  {
    id: "listeria-monocytogenes",
    name: "Listeria monocytogenes",
    aliases: [
      "listeria monocytogenes",
      "listeria",
      "l. monocytogenes",
    ],
    type: "gram-positive-rod",
    definition:
      "Gram-positive rod; facultative intracellular pathogen. Grows at refrigeration temperatures; causes meningitis in neonates, elderly, pregnant, and immunocompromised.",
    morphology: [
      "Gram+ rod (may appear coccobacillary)",
      "Motile at room temperature (tumbling motility); non-motile at 37°C",
      "β-hemolysis on blood agar (narrow zone)",
      "Cold growth (4°C) — contaminated deli meats, soft cheeses",
    ],
    virulenceFactors: [
      "Listeriolysin O (LLO) — escapes phagosome",
      "ActA — actin rocket motility (cell-to-cell spread without leaving cell)",
      "Intracellular survival in macrophages and epithelial cells",
    ],
    transmission: [
      "Ingestion of contaminated food (soft cheeses, deli meats, unpasteurized milk)",
      "Vertical transmission (neonatal disease)",
    ],
    diseases: [
      "Neonatal sepsis and meningitis (early and late onset)",
      "Meningitis/bacteremia in elderly and immunocompromised",
      "Gastroenteritis in healthy adults (mild)",
      "Granulomatosis infantiseptica (disseminated neonatal)",
      "Maternal flu-like illness; fetal loss/preterm labor",
    ],
    classicPresentation: [
      "Pregnant woman with flu-like illness → fetal distress/preterm delivery",
      "Neonate with meningitis (Gram+ rod in CSF)",
      "Elderly/immunocompromised with meningitis after deli meats/soft cheese exposure",
    ],
    diagnosis: [
      "Blood/CSF culture — tell lab if Listeria suspected (prolong incubation, cold enrichment)",
      "Gram stain CSF — Gram+ rods",
      "Culture from meconium/placenta in neonatal disease",
    ],
    treatment: [
      "Ampicillin + gentamicin (synergy for serious infection)",
      "Trimethoprim-sulfamethoxazole in penicillin allergy",
      "Duration 3 weeks for meningitis",
    ],
    distinguishFrom: [
      "Group B strep — neonatal meningitis; Gram+ cocci in chains",
      "E. coli — Gram− rod; early-onset neonatal sepsis",
      "Corynebacterium — contaminant; diphtheroid appearance",
    ],
    boardsPearls: [
      "Refrigeration does NOT prevent growth — deli meats, brie, hot dogs",
      "Ampicillin + gentamicin for meningitis (not ceftriaxone alone — Listeria resistant to 3rd-gen cephalosporins)",
      "Pregnant women: avoid unpasteurized cheese and undercooked deli meats",
    ],
    pediatrics:
      "Neonatal Listeria meningitis — ampicillin + gentamicin; maternal infection often mild but fetal consequences severe.",
  },
  {
    id: "herpes-simplex-virus",
    name: "Herpes Simplex Virus",
    aliases: [
      "herpes simplex virus",
      "herpes simplex",
      "hsv",
      "hsv-1",
      "hsv-2",
      "hsv 1",
      "hsv 2",
    ],
    type: "virus",
    definition:
      "Enveloped dsDNA herpesvirus. HSV-1 classically oral (cold sores); HSV-2 genital — overlap increasing. Establishes latency in sensory ganglia.",
    morphology: [
      "Enveloped icosahedral virion with dsDNA core",
      "Intranuclear Cowdry type A inclusions on histology",
      "Syncytia and multinucleated giant cells in epithelial infections",
    ],
    virulenceFactors: [
      "Latency in trigeminal/sacral ganglia",
      "Neurotropism — encephalitis (temporal lobe predilection HSV-1)",
      "Vertical transmission — neonatal herpes (skin, eye, CNS, disseminated)",
    ],
    transmission: [
      "Direct contact with active lesions or asymptomatic shedding",
      "Vertical (birth canal; higher risk with primary maternal infection)",
    ],
    diseases: [
      "Herpes labialis (HSV-1)",
      "Genital herpes (HSV-2 > HSV-1)",
      "Herpetic whitlow",
      "Herpes keratitis (dendritic ulcer)",
      "HSV encephalitis",
      "Neonatal herpes",
      "Eczema herpeticum",
    ],
    classicPresentation: [
      "Grouped vesicles on erythematous base — painful",
      "Recurrent lesions at same site (latency/reactivation)",
      "Encephalitis: fever, altered mental status, temporal lobe findings",
    ],
    diagnosis: [
      "PCR of CSF (encephalitis) — test of choice",
      "Tzanck smear (multinucleated giant cells) — less used",
      "Viral culture/PCR from lesion swab",
    ],
    treatment: [
      "Acyclovir, valacyclovir, famciclovir",
      "IV acyclovir for encephalitis and disseminated/neonatal disease",
      "Suppressive therapy for frequent recurrences",
    ],
    distinguishFrom: [
      "VZV — dermatomal distribution; different PCR",
      "Aphthous ulcers — no vesicles, not grouped",
      "Syphilis chancre — painless ulcer, not vesicular",
    ],
    boardsPearls: [
      "Grouped painful vesicles = HSV until proven otherwise",
      "Temporal lobe encephalitis → HSV PCR and empiric IV acyclovir",
      "Eczema herpeticum — dermatology emergency in atopic children",
    ],
    pediatrics:
      "Neonatal herpes from birth canal exposure during primary outbreak; treat with IV acyclovir; eczema herpeticum in atopic children.",
  },
  {
    id: "varicella-zoster-virus",
    name: "Varicella-Zoster Virus",
    aliases: [
      "varicella-zoster virus",
      "varicella zoster virus",
      "vzv",
      "human herpesvirus 3",
      "hhv-3",
    ],
    type: "virus",
    definition:
      "Herpesvirus causing primary varicella (chickenpox) and reactivation as herpes zoster (shingles). Latency in dorsal root/trigeminal ganglia.",
    morphology: [
      "Enveloped dsDNA herpesvirus",
      "Multinucleated giant cells with intranuclear inclusions",
      "Same family structure as HSV",
    ],
    virulenceFactors: [
      "Latency in sensory ganglia lifelong",
      "Cell-associated viremia in primary infection",
      "Spread along dermatomal nerves on reactivation",
    ],
    transmission: [
      "Respiratory droplets and direct contact (varicella)",
      "Zoster: contact with vesicle fluid (less contagious than varicella)",
    ],
    diseases: [
      "Varicella (chickenpox)",
      "Herpes zoster (shingles)",
      "Disseminated zoster (immunocompromised)",
      "Postherpetic neuralgia",
      "Ramsay Hunt syndrome (zoster oticus)",
      "Congenital varicella syndrome (maternal infection 8–20 weeks)",
    ],
    classicPresentation: [
      "Varicella: crops of lesions in different stages (macule → vesicle → crust)",
      "Zoster: painful unilateral dermatomal vesicular rash",
      "Ramsay Hunt: ear pain, facial paralysis, vesicles in ear canal",
    ],
    diagnosis: [
      "Clinical diagnosis usually sufficient",
      "PCR or DFA from lesion scraping if uncertain",
      "Serology for immunity status",
    ],
    treatment: [
      "Varicella (healthy child): supportive; acyclovir if high-risk/complicated",
      "Zoster: valacyclovir/famciclovir within 72 h; add analgesia",
      "IV acyclovir for disseminated/immunocompromised",
    ],
    distinguishFrom: [
      "HSV — grouped vesicles without strict dermatomal limit (though overlap)",
      "Impetigo — honey-crusted, not dermatomal",
      "Contact dermatitis — pruritic, not vesicular dermatomal pattern",
    ],
    boardsPearls: [
      "Lesions in different stages = varicella hallmark",
      "Zoster in young patient → think HIV or immunosuppression",
      "Live vaccine contraindicated in pregnancy and severe immunocompromise",
      "Do not give aspirin in varicella (Reye syndrome)",
    ],
    pediatrics:
      "Varicella vaccine routine; congenital varicella syndrome if maternal primary infection in first/second trimester; Reye syndrome risk with salicylates.",
  },
  {
    id: "toxoplasma-gondii",
    name: "Toxoplasma gondii",
    aliases: [
      "toxoplasma gondii",
      "toxoplasma",
      "t. gondii",
    ],
    type: "parasite",
    definition:
      "Apicomplexan protozoan; cat is definitive host. Causes congenital toxoplasmosis and reactivation chorioretinitis/encephalitis in AIDS (CD4 <100).",
    morphology: [
      "Tachyzoites — crescent-shaped, rapid dividing (acute)",
      "Bradyzoites in tissue cysts (latent)",
      "Oocysts in cat feces (sporulated in environment)",
    ],
    virulenceFactors: [
      "Intracellular survival in macrophages and neurons",
      "Tissue cysts persist lifelong (CNS, muscle)",
      "Congenital transmission — transplacental in primary maternal infection",
    ],
    transmission: [
      "Ingestion of oocysts (cat litter, soil)",
      "Undercooked meat (tissue cysts)",
      "Vertical (congenital)",
      "Rarely transfusion/organ transplant",
    ],
    diseases: [
      "Congenital toxoplasmosis (chorioretinitis, hydrocephalus, intracranial calcifications)",
      "Toxoplasma encephalitis (AIDS — ring-enhancing lesions)",
      "Mononucleosis-like illness (immunocompetent)",
      "Chorioretinitis (reactivation)",
    ],
    classicPresentation: [
      "AIDS + ring-enhancing brain lesions + seizures (TE vs lymphoma)",
      "Congenital: chorioretinitis, hydrocephalus, diffuse calcifications",
      "Cat exposure + maternal primary infection in pregnancy",
    ],
    diagnosis: [
      "Serology (IgM/IgG; avidity testing in pregnancy)",
      "CSF PCR or brain biopsy PCR in AIDS encephalitis",
      "Sulfadiazine-pyrimethamine response supports TE empirically",
    ],
    treatment: [
      "Pyrimethamine + sulfadiazine + leucovorin (TE and congenital)",
      "Pyrimethamine + clindamycin alternative",
      "Spiramycin in early pregnancy primary infection (reduce transplacental spread)",
    ],
    distinguishFrom: [
      "CMV congenital — periventricular calcifications, hearing loss",
      "Primary CNS lymphoma — EBV-driven; single lesion, thallium scan",
      "Cryptococcus — yeast in CSF; not ring-enhancing parenchymal lesions typically",
    ],
    boardsPearls: [
      "Cat litter + undercooked meat; wash hands and cook meat thoroughly",
      "AIDS ring-enhancing lesions → Toxoplasma until proven otherwise (start empiric therapy)",
      "Congenital triad: chorioretinitis, hydrocephalus, intracranial calcifications",
    ],
    pediatrics:
      "Congenital toxoplasmosis — treat mother in pregnancy when acquired; neonatal pyrimethamine-sulfadiazine; chorioretinitis may present later in childhood.",
  },
  {
    id: "borrelia-burgdorferi",
    name: "Borrelia burgdorferi",
    aliases: [
      "borrelia burgdorferi",
      "b. burgdorferi",
      "borrelia",
    ],
    type: "spirochete",
    definition:
      "Spirochete transmitted by Ixodes tick bite (Northeast/Midwest US). Causes Lyme disease — erythema migrans, early disseminated and late manifestations.",
    morphology: [
      "Spirochete — too thin for Gram stain",
      "Dark-field or silver stain",
      "Does not culture easily on routine media",
    ],
    virulenceFactors: [
      "Flagella (endoflagella between outer membrane and protoplasm)",
      "Evasion of complement and antibody",
      "Tropism for skin, joints, heart, CNS",
    ],
    transmission: ["Ixodes scapularis (deer tick) bite — nymph stage most common"],
    diseases: [
      "Early localized: erythema migrans",
      "Early disseminated: multiple EM, facial nerve palsy, AV block, meningitis",
      "Late: Lyme arthritis (large joints), acrodermatitis chronica atrophicans",
    ],
    classicPresentation: [
      "Summer hiking in endemic area → expanding bull's-eye rash (erythema migrans)",
      "Bell palsy + recent tick exposure",
      "Migratory large-joint oligoarthritis (knee)",
    ],
    diagnosis: [
      "Clinical diagnosis of erythema migrans — treat without serology",
      "Two-tier serology (ELISA then Western blot) for later stages",
      "Do not test immediately after bite (false negative)",
    ],
    treatment: [
      "Early: doxycycline (also covers Anaplasma); amoxicillin or cefuroxime alternatives",
      "Neuro/cardiac: ceftriaxone IV",
      "Lyme arthritis: oral doxycycline or amoxicillin; IV ceftriaxone if refractory",
    ],
    distinguishFrom: [
      "Syphilis (T. pallidum) — different spirochete; VDRL/RPR, penicillin treatment",
      "Rocky Mountain spotted fever — different tick; rash starts wrists/ankles",
      "Cellulitis — not expanding bull's-eye, no central clearing typically",
    ],
    boardsPearls: [
      "Erythema migrans = treat empirically — serology often negative early",
      "Bell palsy + tick exposure in Northeast = Lyme until proven otherwise",
      "Doxycycline covers Lyme and co-transmitted Anaplasma/Ehrlichia",
    ],
    pediatrics:
      "Children in endemic areas — check for tick bites; doxycycline used in children for Lyme per current guidelines (age limits evolving); arthritis common late manifestation.",
  },
  {
    id: "aspergillus-fumigatus",
    name: "Aspergillus fumigatus",
    aliases: [
      "aspergillus fumigatus",
      "aspergillus",
      "a. fumigatus",
    ],
    type: "fungus",
    definition:
      "Septate mold with acute-angle (45°) branching hyphae. Causes allergic bronchopulmonary aspergillosis (ABPA), aspergilloma, and invasive aspergillosis in neutropenic/transplant patients.",
    morphology: [
      "Septate hyphae with uniform width",
      "Branch at 45° angles (vs Mucor 90° wide irregular)",
      "Conidia on conidiophores (septate foot cell)",
      "Angioinvasive in immunocompromised",
    ],
    virulenceFactors: [
      "Conidia inhaled — small enough to reach alveoli",
      "Galactomannan antigen (serum/BAL) — diagnostic marker",
      "Biofilm in aspergilloma (preexisting cavity)",
    ],
    transmission: ["Inhalation of airborne conidia (ubiquitous in environment)"],
    diseases: [
      "Allergic bronchopulmonary aspergillosis (ABPA) in asthma/CF",
      "Aspergilloma (fungus ball in preexisting cavity)",
      "Invasive pulmonary aspergillosis (neutropenia, transplant)",
      "Cutaneous and disseminated aspergillosis (rare)",
    ],
    classicPresentation: [
      "Neutropenic fever unresponsive to antibiotics + pulmonary nodules/halo sign",
      "Asthmatic with bronchiectasis, eosinophilia, elevated IgE (ABPA)",
      "Hemoptysis in patient with prior TB cavity (aspergilloma)",
    ],
    diagnosis: [
      "Galactomannan antigen (serum, BAL)",
      "β-D-glucan may be positive",
      "Biopsy/culture — septate 45° branching hyphae",
      "Serum IgE and Aspergillus-specific IgE/IgG in ABPA",
    ],
    treatment: [
      "ABPA: itraconazole + corticosteroids",
      "Invasive: voriconazole first line; echinocandin or amphotericin alternatives",
      "Aspergilloma: surgery or antifungals if symptomatic",
    ],
    distinguishFrom: [
      "Mucor/Rhizopus — non-septate, wide hyphae, 90° branching; diabetic ketoacidosis",
      "Candida — yeast/pseudohyphae, not mold in tissue",
      "Histoplasma — yeast in macrophages, not hyphae in tissue",
    ],
    boardsPearls: [
      "45° septate hyphae = Aspergillus; 90° non-septate wide = Mucor",
      "Voriconazole first line for invasive aspergillosis",
      "Galactomannan in neutropenic fever workup",
    ],
    pediatrics:
      "ABPA in CF and asthma; invasive aspergillosis in pediatric oncology/neutropenia — voriconazole dosing weight-based.",
  },
  {
    id: "histoplasma-capsulatum",
    name: "Histoplasma capsulatum",
    aliases: [
      "histoplasma capsulatum",
      "histoplasma",
      "h. capsulatum",
    ],
    type: "fungus",
    definition:
      "Dimorphic fungus endemic to Ohio/Mississippi River valleys. Mold in soil (bird/bat droppings); yeast in tissue at 37°C. Causes pulmonary and disseminated disease.",
    morphology: [
      "Tissue/37°C: small intracellular yeast (2–4 µm) within macrophages",
      "Environment: septate mold with tuberculate macroconidia",
      "Silver stain (GMS) highlights yeast in tissue",
    ],
    virulenceFactors: [
      "Survival and replication within macrophages",
      "Microconidia inhaled from disturbed soil (construction, caves, chicken coops)",
    ],
    transmission: ["Inhalation of microconidia from soil contaminated with bird/bat droppings"],
    diseases: [
      "Acute pulmonary histoplasmosis (often asymptomatic/mild)",
      "Chronic cavitary pulmonary histoplasmosis (COPD-like)",
      "Disseminated histoplasmosis (AIDS, immunosuppression)",
      "Mediastinal granuloma/fibrosis",
      "Endocarditis (rare, on prosthetic valves)",
    ],
    classicPresentation: [
      "Mississippi/Ohio valley exposure + flu-like illness after spelunking/chicken coop cleanup",
      "AIDS with fever, hepatosplenomegaly, pancytopenia (disseminated)",
      "Small yeast inside macrophages on tissue biopsy",
    ],
    diagnosis: [
      "Urine/serum Histoplasma antigen (disseminated/acute pulmonary)",
      "Fungal culture (slow growing)",
      "GMS or silver stain of tissue — yeast within macrophages",
      "Serology (complement fixation)",
    ],
    treatment: [
      "Mild acute pulmonary: often self-limited; itraconazole if prolonged",
      "Moderate/severe/disseminated: liposomal amphotericin B, then itraconazole",
      "Chronic pulmonary: itraconazole prolonged course",
    ],
    distinguishFrom: [
      "Blastomyces — larger yeast with broad-based budding; different endemic overlap",
      "Coccidioides — spherules in tissue; Southwest endemic",
      "TB — acid-fast bacilli, not yeast in macrophages",
    ],
    boardsPearls: [
      "Bird/bat droppings + Ohio/Mississippi valleys = Histoplasma",
      "Small yeast inside macrophages on silver stain",
      "Urine antigen for disseminated disease in AIDS",
    ],
    pediatrics:
      "Disseminated histoplasmosis in infant immunocompromise; endemic exposure in children often mild; amphotericin B for severe disease.",
  },
];

const microbiologyById = new Map(
  MICROBIOLOGY.map((entry) => [entry.id, entry]),
);

export function getMicrobiologyById(
  id: string,
): MicrobiologyEntry | undefined {
  return microbiologyById.get(id);
}

export interface MicrobiologyAliasMatch {
  alias: string;
  microbiologyId: string;
}

export function buildMicrobiologyAliasIndex(): MicrobiologyAliasMatch[] {
  const matches: MicrobiologyAliasMatch[] = [];
  for (const entry of MICROBIOLOGY) {
    for (const alias of entry.aliases) {
      matches.push({
        alias: alias.toLowerCase(),
        microbiologyId: entry.id,
      });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
