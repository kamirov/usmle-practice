export interface ProteinEntry {
  id: string;
  name: string;
  aliases: string[];
  gene?: string;
  location?: string;
  function: string;
  mutationCauses: string[];
  boardsPearls: string[];
  distinguishFrom?: string[];
}

export const PROTEINS: ProteinEntry[] = [
  {
    id: "beta-myosin-heavy-chain",
    name: "Beta-myosin heavy chain",
    aliases: [
      "beta-myosin heavy chain",
      "β-myosin heavy chain",
      "myosin heavy chain beta",
    ],
    gene: "MYH7",
    location: "Cardiac sarcomere (thick filament)",
    function:
      "ATPase motor protein of the thick myosin filament; drives cross-bridge cycling and ventricular contraction.",
    mutationCauses: [
      "Hypertrophic cardiomyopathy (HCM) — most common sarcomere gene",
      "Asymmetric septal hypertrophy",
      "Sudden cardiac death in young athletes",
    ],
    boardsPearls: [
      "HCM vignette: young athlete, syncope, family history of sudden death, septal hypertrophy on autopsy",
      "Sarcomere genes: MYH7, MYBPC3, troponin T/I — MYH7 is classic boards answer",
      "Peds: same genetics; screen first-degree relatives if HCM confirmed",
    ],
    distinguishFrom: [
      "Dystrophin — skeletal muscle, proximal weakness, ↑ CK",
      "Fibrillin-1 — connective tissue, aortic root dilation, lens dislocation",
      "Potassium channel — long QT, not LV hypertrophy",
    ],
  },
  {
    id: "myosin-binding-protein-c",
    name: "Myosin-binding protein C",
    aliases: ["myosin-binding protein c", "mybp-c", "mybpc3"],
    gene: "MYBPC3",
    location: "Cardiac sarcomere (C-zone of A band)",
    function:
      "Regulates thick filament assembly and modulates cross-bridge kinetics; slows actin-myosin interaction.",
    mutationCauses: [
      "Hypertrophic cardiomyopathy (HCM)",
      "Late-onset HCM phenotype possible",
    ],
    boardsPearls: [
      "Second most common HCM gene after MYH7",
      "Often milder or later presentation than MYH7 mutations",
    ],
    distinguishFrom: [
      "Beta-myosin heavy chain — also HCM; MYH7 more commonly cited on Step 1",
    ],
  },
  {
    id: "cardiac-potassium-channel",
    name: "Cardiac potassium channel (hERG / KCNQ1)",
    aliases: [
      "herg channel",
      "hERG",
      "kcnh2",
      "kcnq1",
      "delayed rectifier potassium channel",
      "cardiac potassium channel",
    ],
    gene: "KCNH2 (LQT2), KCNQ1 (LQT1)",
    location: "Cardiac myocyte membrane",
    function:
      "Repolarizing K⁺ currents (IKr via hERG/KCNH2; IKs via KCNQ1) restore resting membrane potential after depolarization.",
    mutationCauses: [
      "Congenital long QT syndrome (LQT1, LQT2)",
      "Torsades de pointes, syncope, sudden death",
      "Drug-induced QT prolongation when hERG blocked (e.g. macrolides, antipsychotics)",
    ],
    boardsPearls: [
      "LQT1 (KCNQ1): exercise/swimming triggers; LQT2 (KCNH2): auditory triggers, QT notched T waves",
      "Acquired long QT: drugs blocking hERG + hypokalemia/hypomagnesemia",
      "Peds: congenital LQT — syncope during exertion or startle; family screening",
    ],
    distinguishFrom: [
      "Beta-myosin heavy chain — structural HCM with hypertrophy, not primary QT prolongation",
      "Membrane sodium channel — Brugada, not long QT",
    ],
  },
  {
    id: "dystrophin",
    name: "Dystrophin",
    aliases: ["dystrophin"],
    gene: "DMD",
    location: "Sarcolemma of skeletal (and cardiac) muscle",
    function:
      "Links actin cytoskeleton to extracellular matrix via dystrophin-glycoprotein complex; stabilizes membrane during contraction.",
    mutationCauses: [
      "Duchenne muscular dystrophy (DMD) — frameshift/nonsense → absent dystrophin",
      "Becker muscular dystrophy (BMD) — in-frame deletions → reduced/abnormal dystrophin",
      "Dilated cardiomyopathy (carrier females, BMD)",
    ],
    boardsPearls: [
      "DMD: X-linked, boys, Gowers sign, pseudohypertrophy of calves, wheelchair by ~12, ↑ CK",
      "BMD: milder, later onset, still ↑ CK",
      "Peds: Gowers maneuver + proximal weakness in boy → dystrophin defect until proven otherwise",
    ],
    distinguishFrom: [
      "Beta-myosin heavy chain — cardiac sarcomere, HCM, not skeletal weakness",
      "Spectrin — RBC membrane, hemolytic anemia, spherocytes",
    ],
  },
  {
    id: "fibrillin-1",
    name: "Fibrillin-1",
    aliases: ["fibrillin-1", "fibrillin 1"],
    gene: "FBN1",
    location: "Microfibrils in connective tissue (aorta, zonules, skin)",
    function:
      "Structural glycoprotein in elastic fiber microfibrils; sequesters TGF-β; maintains vessel and ocular integrity.",
    mutationCauses: [
      "Marfan syndrome",
      "Aortic root dilation/dissection, lens dislocation, arachnodactyly",
    ],
    boardsPearls: [
      "Marfan: tall, pectus, hypermobile joints, aortic root aneurysm — think FBN1",
      "TGF-β dysregulation contributes to aortic disease",
      "Peds: early lens subluxation, mitral valve prolapse; monitor aortic root",
    ],
    distinguishFrom: [
      "Elastin — Williams syndrome (elfin facies, supravalvular aortic stenosis)",
      "Collagen type I — osteogenesis imperfecta, bone fragility",
    ],
  },
  {
    id: "transthyretin",
    name: "Transthyretin",
    aliases: ["transthyretin", "ttr", "prealbumin"],
    gene: "TTR",
    location: "Plasma (tetramer); also CSF",
    function:
      "Transports thyroxine and retinol-binding protein; synthesized mainly by liver.",
    mutationCauses: [
      "ATTR amyloidosis (hereditary) — misfolded TTR deposits",
      "Senile systemic amyloidosis (wild-type TTR, elderly)",
      "Restrictive cardiomyopathy, neuropathy, carpal tunnel",
    ],
    boardsPearls: [
      "Amyloid heart: thickened ventricles, low voltage on ECG, HFpEF",
      "Distinguish AL (light chain) vs ATTR (TTR) amyloid",
      "Hereditary ATTR: family history neuropathy + cardiomyopathy",
    ],
    distinguishFrom: [
      "Beta-myosin heavy chain — HCM with true hypertrophy, not infiltrative amyloid",
      "Immunoglobulin light chains — AL amyloidosis, plasma cell dyscrasia",
    ],
  },
  {
    id: "beta-globin",
    name: "Beta-globin",
    aliases: ["beta-globin", "β-globin", "hemoglobin beta chain"],
    gene: "HBB",
    location: "Erythrocyte hemoglobin tetramer (α₂β₂)",
    function:
      "Oxygen-binding subunit of adult hemoglobin (HbA); cooperatively loads/unloads O₂ in RBCs.",
    mutationCauses: [
      "Sickle cell disease (HbS: Glu→Val β6)",
      "β-thalassemia (↓ or absent β-chain synthesis)",
      "Methemoglobinemia (rare Hb M variants)",
    ],
    boardsPearls: [
      "Sickle: HbS polymerizes when deoxygenated → sickling, vaso-occlusion, splenic infarction",
      "β-thalassemia: microcytic anemia, ↑ HbF, Mediterranean/Asian ancestry",
      "Peds: sickle cell screened at birth; hand-foot syndrome in infants",
    ],
    distinguishFrom: [
      "Hemoglobin (lab value) — measured concentration, not the mutated protein itself",
      "Alpha-globin — α-thalassemia, not sickle cell",
    ],
  },
  {
    id: "alpha-globin",
    name: "Alpha-globin",
    aliases: ["alpha-globin", "α-globin", "hemoglobin alpha chain"],
    gene: "HBA1 / HBA2",
    location: "Erythrocyte hemoglobin (α₂β₂, fetal α₂γ₂)",
    function:
      "Alpha subunit of hemoglobin; two alpha genes per chromosome 16 allow graded expression.",
    mutationCauses: [
      "α-thalassemia (gene deletions → ↓ α-chain)",
      "Hydrops fetalis (4-gene deletion)",
      "HbH disease (3-gene deletion)",
    ],
    boardsPearls: [
      "α-thalassemia: Southeast Asian, African ancestry; silent carrier to transfusion-dependent",
      "Excess β-chains form HbH (β₄) or Hb Barts (γ₄) in severe disease",
      "Peds: hydrops fetalis with 4-gene deletion — incompatible with life without transfusion",
    ],
    distinguishFrom: [
      "Beta-globin — sickle cell and β-thalassemia",
      "Spectrin — spherocytosis, normocytic hemolysis without globin chain imbalance",
    ],
  },
  {
    id: "spectrin",
    name: "Spectrin",
    aliases: ["spectrin", "ankyrin"],
    gene: "SPTA1, SPTB, ANK1 (and others)",
    location: "Red blood cell membrane cytoskeleton",
    function:
      "Spectrin-actin network maintains biconcave disc shape and membrane stability against shear stress.",
    mutationCauses: [
      "Hereditary spherocytosis",
      "Hemolytic anemia, splenomegaly, jaundice, gallstones",
    ],
    boardsPearls: [
      "Spherocytes on smear, ↑ osmotic fragility, ↑ MCHC, negative Coombs",
      "Splenectomy curative for anemia (watch infection risk — encapsulated organisms)",
      "Peds: neonatal jaundice, anemia; ABO incompatibility is Coombs-positive — not this",
    ],
    distinguishFrom: [
      "G6PD — episodic oxidative hemolysis, Heinz bodies, bite cells",
      "Dystrophin — skeletal muscle, not RBCs",
    ],
  },
  {
    id: "g6pd",
    name: "G6PD",
    aliases: ["g6pd", "glucose-6-phosphate dehydrogenase"],
    gene: "G6PD",
    location: "Red blood cell cytoplasm (pentose phosphate pathway)",
    function:
      "Produces NADPH to regenerate reduced glutathione; protects RBCs from oxidative damage.",
    mutationCauses: [
      "G6PD deficiency (X-linked)",
      "Episodic hemolytic anemia after oxidant stress (fava beans, sulfa drugs, infection)",
    ],
    boardsPearls: [
      "X-linked — males affected; females carriers may have symptoms",
      "Heinz bodies, bite cells; episodic not chronic hemolysis",
      "Peds: favism (fava beans), neonatal jaundice; common in Mediterranean/African/Asian populations",
    ],
    distinguishFrom: [
      "Spectrin — chronic spherocytic hemolysis, spherocytes, splenomegaly",
      "Pyruvate kinase — chronic hemolysis without oxidant trigger",
    ],
  },
  {
    id: "collagen-type-1",
    name: "Collagen type I",
    aliases: ["collagen type i", "collagen type 1", "type i collagen"],
    gene: "COL1A1 / COL1A2",
    location: "Bone, skin, tendons, dentin",
    function:
      "Major structural fibrillar collagen providing tensile strength to bone matrix and connective tissues.",
    mutationCauses: [
      "Osteogenesis imperfecta",
      "Bone fragility, blue sclerae, hearing loss, dental abnormalities",
    ],
    boardsPearls: [
      "OI types I–IV by severity; type II lethal in utero",
      "Blue sclerae + recurrent fractures in child → collagen type I",
      "Peds: often diagnosed after minimal trauma fracture; distinguish non-accidental trauma",
    ],
    distinguishFrom: [
      "Fibrillin-1 — Marfan, tall stature, aortic root — not brittle bones",
      "Dystrophin — muscle weakness, not primary bone disease",
    ],
  },
  {
    id: "elastin",
    name: "Elastin",
    aliases: ["elastin"],
    gene: "ELN",
    location: "Arterial walls, lungs, ligaments",
    function:
      "Elastic fiber component allowing recoil of tissues; critical in large arteries.",
    mutationCauses: [
      "Williams syndrome (7q11.23 microdeletion includes ELN)",
      "Supravalvular aortic stenosis, elfin facies, hypercalcemia, friendly personality",
    ],
    boardsPearls: [
      "Williams: elfin facies + SVAS + intellectual disability + hypercalcemia in infancy",
      "ELN hemizygosity → narrowed arteries",
      "Peds: infant hypercalcemia, failure to thrive, distinctive facies",
    ],
    distinguishFrom: [
      "Fibrillin-1 — Marfan, aortic root dilation (not stenosis), arachnodactyly",
    ],
  },
  {
    id: "cftr",
    name: "CFTR",
    aliases: [
      "cftr",
      "cystic fibrosis transmembrane conductance regulator",
    ],
    gene: "CFTR",
    location: "Epithelial apical membrane (airways, pancreas, sweat ducts, vas deferens)",
    function:
      "Chloride channel; regulates epithelial salt and water transport; affects mucus viscosity and sweat chloride.",
    mutationCauses: [
      "Cystic fibrosis (ΔF508 most common)",
      "Recurrent pulmonary infections, pancreatic insufficiency, infertility (males)",
    ],
    boardsPearls: [
      "↑ sweat chloride (>60 mEq/L) diagnostic; autosomal recessive",
      "Pseudomonas colonization, bronchiectasis, malabsorption, meconium ileus in neonates",
      "Peds: meconium ileus at birth, failure to thrive, salty skin",
    ],
    distinguishFrom: [
      "Alpha-1 antitrypsin — emphysema/liver disease, not sweat chloride",
      "Dystrophin — muscle disease, not mucus/obstruction",
    ],
  },
  {
    id: "alpha-galactosidase-a",
    name: "Alpha-galactosidase A",
    aliases: ["alpha-galactosidase a", "α-galactosidase a"],
    gene: "GLA",
    location: "Lysosome",
    function:
      "Lysosomal enzyme that degrades globotriaosylceramide (Gb3) and related glycosphingolipids.",
    mutationCauses: [
      "Fabry disease (X-linked)",
      "Angiokeratomas, neuropathic pain, renal failure, cardiomyopathy, stroke",
    ],
    boardsPearls: [
      "X-linked — males symptomatic; females variable",
      "Burning pain in hands/feet, hypohidrosis, corneal verticillata",
      "Peds: acroparesthesias, GI pain; often delayed diagnosis",
    ],
    distinguishFrom: [
      "Glucocerebrosidase — Gaucher, hepatosplenomegaly, bone crises",
      "Hexosaminidase A — Tay-Sachs, cherry-red spot, no angiokeratomas",
    ],
  },
  {
    id: "alpha-l-iduronidase",
    name: "Alpha-L-iduronidase",
    aliases: ["alpha-l-iduronidase", "α-l-iduronidase"],
    gene: "IDUA",
    location: "Lysosome",
    function:
      "Degrades dermatan and heparan sulfate glycosaminoglycans in lysosomes.",
    mutationCauses: [
      "Hurler syndrome (MPS I — severe)",
      "MPS I H/S (intermediate)",
      "Coarse facies, corneal clouding, skeletal dysplasia, intellectual disability (Hurler)",
    ],
    boardsPearls: [
      "MPS I: gargoylism, stiff joints, hepatosplenomegaly, ↑ urinary GAGs",
      "Hurler vs Hunter (MPS II): Hunter has no corneal clouding, X-linked",
      "Peds: developmental delay, airway obstruction, cardiac valve disease",
    ],
    distinguishFrom: [
      "Iduronate sulfatase — Hunter syndrome (MPS II), X-linked, aggressive behavior",
      "Hexosaminidase A — Tay-Sachs, neurodegeneration without coarse facies/storage",
    ],
  },
  {
    id: "hexosaminidase-a",
    name: "Hexosaminidase A",
    aliases: ["hexosaminidase a", "hex-a"],
    gene: "HEXA",
    location: "Lysosome",
    function:
      "Degrades GM2 ganglioside; requires GM2 activator for function.",
    mutationCauses: [
      "Tay-Sachs disease",
      "Infantile neurodegeneration, cherry-red macula, hyperreflexia then hypotonia",
    ],
    boardsPearls: [
      "Autosomal recessive; ↑ incidence Ashkenazi Jewish population",
      "Cherry-red spot on macula + neurodegeneration in infant",
      "Peds: normal at birth, regression by 6 months, macrocephaly, seizures",
    ],
    distinguishFrom: [
      "Hexosaminidase A vs B — Sandhoff lacks cherry-red spot, also globoside accumulation",
      "Niemann-Pick (sphingomyelinase) — foam cells, hepatosplenomegaly",
    ],
  },
  {
    id: "glucocerebrosidase",
    name: "Glucocerebrosidase",
    aliases: ["glucocerebrosidase", "beta-glucocerebrosidase"],
    gene: "GBA",
    location: "Lysosome",
    function:
      "Hydrolyzes glucocerebroside to glucose and ceramide in macrophage lysosomes.",
    mutationCauses: [
      "Gaucher disease (types 1–3)",
      "Hepatosplenomegaly, pancytopenia, bone crises, Gaucher cells (lipid-laden macrophages)",
    ],
    boardsPearls: [
      "Type 1 (non-neuronopathic) most common; Ashkenazi Jewish ↑ carrier frequency",
      "Gaucher cells: crumpled tissue-paper macrophages",
      "Peds: type 2 (acute neuronopathic) lethal in infancy; type 3 chronic neuronopathic",
    ],
    distinguishFrom: [
      "Sphingomyelinase — Niemann-Pick, cherry-red spot in type A",
      "Alpha-galactosidase A — Fabry, angiokeratomas, X-linked",
    ],
  },
  {
    id: "sphingomyelinase",
    name: "Sphingomyelinase",
    aliases: ["sphingomyelinase", "acid sphingomyelinase"],
    gene: "SMPD1",
    location: "Lysosome",
    function:
      "Cleaves sphingomyelin to phosphorylcholine and ceramide.",
    mutationCauses: [
      "Niemann-Pick disease (types A and B)",
      "Type A: infantile neurodegeneration, cherry-red spot, foam cells",
      "Type B: visceral disease, milder neurologic involvement",
    ],
    boardsPearls: [
      "Foam cells on bone marrow biopsy; hepatosplenomegaly",
      "Type A: cherry-red macula like Tay-Sachs but with visceromegaly",
      "Peds: type A presents in infancy with hypotonia, feeding difficulty",
    ],
    distinguishFrom: [
      "Tay-Sachs — no hepatosplenomegaly, HEXA deficiency",
      "Gaucher — Gaucher cells, glucocerebrosidase deficiency",
    ],
  },
  {
    id: "phenylalanine-hydroxylase",
    name: "Phenylalanine hydroxylase",
    aliases: ["phenylalanine hydroxylase", "pah"],
    gene: "PAH",
    location: "Hepatocyte cytoplasm",
    function:
      "Converts phenylalanine to tyrosine using tetrahydrobiopterin (BH₄) as cofactor.",
    mutationCauses: [
      "Phenylketonuria (PKU)",
      "Intellectual disability if untreated, musty odor, hypopigmentation",
    ],
    boardsPearls: [
      "Autosomal recessive; newborn screen mandatory",
      "Treatment: low phenylalanine diet; maternal PKU risks fetal damage",
      "Peds: fair hair/eyes, eczema, seizures, developmental delay without diet",
    ],
    distinguishFrom: [
      "Dihydropteridine reductase / BH₄ defects — PKU-like but also ↓ neurotransmitters",
      "Homogentisate oxidase — alkaptonuria, dark urine on standing",
    ],
  },
  {
    id: "ornithine-transcarbamylase",
    name: "Ornithine transcarbamylase",
    aliases: ["ornithine transcarbamylase", "otc"],
    gene: "OTC",
    location: "Mitochondrial matrix (hepatocytes)",
    function:
      "Urea cycle enzyme: condenses ornithine and carbamoyl phosphate to citrulline, detoxifying ammonia.",
    mutationCauses: [
      "OTC deficiency (most common urea cycle disorder)",
      "Hyperammonemia, encephalopathy, respiratory alkalosis",
    ],
    boardsPearls: [
      "X-linked — males severe; heterozygous females can decompensate",
      "Hyperammonemia after protein meal or illness; ↓ BUN relative to ammonia",
      "Peds: neonatal coma after feeding; older: protein avoidance, carnitine/arginine support",
    ],
    distinguishFrom: [
      "Carbamoyl phosphate synthetase I — also urea cycle, autosomal recessive",
      "Organic acidemias — metabolic acidosis, not primary respiratory alkalosis",
    ],
  },
  {
    id: "factor-viii",
    name: "Factor VIII",
    aliases: ["factor viii", "factor 8", "antihemophilic factor"],
    gene: "F8",
    location: "Plasma (synthesized by liver/endothelium)",
    function:
      "Cofactor for factor IXa in intrinsic tenase complex activating factor X on phospholipid surfaces.",
    mutationCauses: [
      "Hemophilia A (X-linked)",
      "Recurrent hemarthroses, deep muscle bleeding, prolonged aPTT",
    ],
    boardsPearls: [
      "Hemophilia A vs B: VIII vs IX — clinically indistinguishable; aPTT prolonged, PT normal",
      "Treatment: factor VIII replacement, desmopressin (mild disease)",
      "Peds: bleeding after circumcision, hemarthrosis when walking; avoid IM injections",
    ],
    distinguishFrom: [
      "Factor IX — hemophilia B (Christmas disease)",
      "von Willebrand factor — mucosal bleeding, ↓ vWF activity and factor VIII stability",
    ],
  },
  {
    id: "factor-ix",
    name: "Factor IX",
    aliases: ["factor ix", "factor 9", "christmas factor"],
    gene: "F9",
    location: "Plasma (liver-synthesized, vitamin K-dependent)",
    function:
      "Serine protease (factor IXa) that activates factor X in presence of factor VIIIa, Ca²⁺, and phospholipid.",
    mutationCauses: [
      "Hemophilia B (Christmas disease, X-linked)",
      "Hemarthroses, muscle hematomas, prolonged aPTT",
    ],
    boardsPearls: [
      "Clinically mirrors hemophilia A; distinguish only by factor assay",
      "Also treated with factor replacement; gene therapy emerging",
      "Peds: same presentation as hemophilia A — check factor IX level",
    ],
    distinguishFrom: [
      "Factor VIII — hemophilia A",
      "Factor XI — milder bleeding, Ashkenazi Jewish association",
    ],
  },
  {
    id: "factor-x",
    name: "Factor X",
    aliases: [
      "factor x",
      "factor 10",
      "stuart factor",
      "stuart-prower factor",
    ],
    gene: "F10",
    location: "Plasma (liver-synthesized, vitamin K-dependent zymogen)",
    function:
      "Vitamin K-dependent serine protease; activated factor Xa (with factor Va, Ca²⁺, phospholipid) converts prothrombin to thrombin in the common coagulation pathway.",
    mutationCauses: [
      "Factor X deficiency — rare autosomal recessive bleeding disorder",
      "Prolonged PT and aPTT with normal fibrinogen",
    ],
    boardsPearls: [
      "Factor Xa is convergence point of intrinsic and extrinsic pathways → common pathway",
      "Direct factor Xa inhibitors: apixaban, rivaroxaban, edoxaban (DOACs)",
      "Vitamin K-dependent factor — warfarin ↓ factor X synthesis",
      "Factor Xa + Va + prothrombin → thrombin (factor IIa)",
    ],
    distinguishFrom: [
      "Factor V — cofactor for prothrombinase, not protease",
      "Thrombin (factor IIa) — downstream of factor Xa",
      "Factor VII — extrinsic pathway only, not common pathway convergence",
    ],
  },
  {
    id: "protein-c",
    name: "Protein C",
    aliases: ["protein c"],
    gene: "PROC",
    location: "Plasma (vitamin K-dependent zymogen)",
    function:
      "Activated protein C (with protein S) inactivates factors Va and VIIIa, downregulating coagulation.",
    mutationCauses: [
      "Protein C deficiency — venous thromboembolism",
      "Neonatal purpura fulminans (homozygous)",
      "Warfarin-induced skin necrosis (heterozygous, early warfarin)",
    ],
    boardsPearls: [
      "Warfarin: protein C short half-life → transient hypercoagulable state first days",
      "Skin necrosis on warfarin start → think protein C (or S) deficiency",
      "Peds: homozygous deficiency — DIC-like neonatal purpura fulminans",
    ],
    distinguishFrom: [
      "Protein S — also anticoagulant; both cause warfarin skin necrosis",
      "Factor V Leiden — activated protein C resistance, not low protein C",
    ],
  },
  {
    id: "protein-s",
    name: "Protein S",
    aliases: ["protein s"],
    gene: "PROS1",
    location: "Plasma (vitamin K-dependent cofactor)",
    function:
      "Cofactor for activated protein C; also directly inhibits factors Va and VIIIa.",
    mutationCauses: [
      "Protein S deficiency",
      "Recurrent VTE, warfarin-induced skin necrosis",
    ],
    boardsPearls: [
      "Free protein S is the active form — acute phase can falsely normalize levels",
      "Autosomal dominant inheritance for deficiency",
      "Peds: rare homozygous forms with severe thrombosis",
    ],
    distinguishFrom: [
      "Protein C — similar phenotype; assay distinguishes",
      "Antithrombin III — heparin resistance, not warfarin skin necrosis",
    ],
  },
  {
    id: "antithrombin",
    name: "Antithrombin III",
    aliases: [
      "antithrombin",
      "antithrombin iii",
      "antithrombin 3",
      "atiii",
    ],
    gene: "SERPINC1",
    location: "Plasma (liver-synthesized serine protease inhibitor)",
    function:
      "Endogenous anticoagulant that inactivates thrombin (IIa), factor Xa, and other serine proteases; heparin binds antithrombin and dramatically accelerates its inhibitory activity.",
    mutationCauses: [
      "Antithrombin III deficiency — autosomal dominant VTE risk",
      "Heparin resistance when levels very low",
      "Lost in urine in nephrotic syndrome → hypercoagulable state",
    ],
    boardsPearls: [
      "Heparin/LMWH mechanism: bind antithrombin → ↑ inhibition of Xa and thrombin",
      "Antithrombin deficiency: recurrent VTE, often young, family history",
      "Nephrotic syndrome loses antithrombin → thrombosis risk",
      "DOACs inhibit factor Xa directly — do not require antithrombin",
    ],
    distinguishFrom: [
      "Protein C and protein S — vitamin K-dependent anticoagulant pathway",
      "Heparin cofactor II — separate thrombin inhibitor, not heparin’s main target",
      "Tissue factor pathway inhibitor (TFPI) — inhibits factor VIIa/Xa complex",
    ],
  },
  {
    id: "cyclooxygenase",
    name: "Cyclooxygenase (COX)",
    aliases: [
      "cox",
      "cyclooxygenase",
      "cyclo-oxygenase",
      "cox-1",
      "cox-2",
      "cox 1",
      "cox 2",
      "prostaglandin-endoperoxide synthase",
      "ptgs",
    ],
    gene: "PTGS1 (COX-1), PTGS2 (COX-2)",
    location: "Membrane-bound enzyme in platelets (COX-1), macrophages/endothelium (COX-2), gastric mucosa",
    function:
      "Rate-limiting enzyme converting arachidonic acid to prostaglandin H₂ (PGH₂), precursor of prostaglandins, thromboxane A₂, and prostacyclin (PGI₂).",
    mutationCauses: [
      "Pharmacologic inhibition by NSAIDs — ↓ prostaglandin-mediated gastric protection, renal blood flow, and platelet aggregation",
      "Aspirin irreversibly acetylates COX-1; other NSAIDs reversibly inhibit COX",
    ],
    boardsPearls: [
      "COX-1: constitutive — platelets, gastric mucosa; COX-2: inducible at inflammation sites",
      "Aspirin: irreversible COX-1 inhibition → antiplatelet effect lasts platelet lifespan",
      "Selective COX-2 inhibitors (celecoxib) ↓ GI ulcers but ↑ cardiovascular risk",
      "NSAIDs block COX → ↓ PGE₂ (gastric protection, renal afferent dilation)",
    ],
    distinguishFrom: [
      "Phospholipase A₂ — releases arachidonic acid upstream of COX",
      "Lipoxygenase pathway — produces leukotrienes, not prostaglandins",
      "5-lipoxygenase inhibitors (zileuton) — asthma, not NSAID mechanism",
    ],
  },
  {
    id: "huntingtin",
    name: "Huntingtin",
    aliases: ["huntingtin", "htt"],
    gene: "HTT",
    location: "Widely expressed; enriched in CNS neurons and striatum",
    function:
      "Scaffolding protein involved in vesicle transport, autophagy, and transcriptional regulation (exact role under study).",
    mutationCauses: [
      "Huntington disease (CAG trinucleotide repeat expansion in HTT)",
      "Chorea, psychiatric symptoms, dementia; caudate atrophy",
    ],
    boardsPearls: [
      "Autosomal dominant; anticipation with paternal transmission",
      "CAG repeats ≥36 pathogenic; caudate degeneration on imaging",
      "Peds: juvenile HD (Westphal variant) with rigidity, seizures if very long repeats",
    ],
    distinguishFrom: [
      "Prion protein — rapidly progressive dementia, myoclonus, CJD",
      "Dystrophin — motor weakness in childhood, not chorea in adults",
    ],
  },
  {
    id: "prion-protein",
    name: "Prion protein",
    aliases: ["prion protein", "prp", "prpc"],
    gene: "PRNP",
    location: "Neuronal membrane (normal PrP^C)",
    function:
      "Normal cellular prion protein (PrP^C) role unclear; misfolded PrP^Sc propagates and accumulates.",
    mutationCauses: [
      "Creutzfeldt-Jakob disease (sporadic, familial, iatrogenic)",
      "Variant CJD (bovine spongiform encephalopathy exposure)",
      "Fatal familial insomnia, Gerstmann-Sträussler-Scheinker syndrome",
    ],
    boardsPearls: [
      "Rapidly progressive dementia, myoclonus, startle, periodic EEG spikes",
      "Spongiform change on brain biopsy; PrP^Sc protease-resistant",
      "Iatrogenic: growth hormone, dura mater grafts, contaminated neurosurgical instruments",
    ],
    distinguishFrom: [
      "Huntingtin — chorea, family history, caudate atrophy over years",
      "Alzheimer — slower course, amyloid/tau pathology",
    ],
  },
  {
    id: "hoxd13",
    name: "HOXD13",
    aliases: ["hoxd13", "hox d13", "hox-d13"],
    gene: "HOXD13",
    location: "HOX gene cluster on chromosome 2q31; expressed in developing distal limbs and urogenital tract",
    function:
      "Homeobox transcription factor patterning distal limb buds (digits, wrists/ankles) and external genitalia during embryogenesis.",
    mutationCauses: [
      "Hand-foot-genital syndrome (HFGS) — autosomal dominant",
      "Short great toe, shortened thumbs, limited thumb opposition",
      "Urogenital malformations: bicornuate uterus, hypospadias, uterovaginal septum",
      "Wrist fusion (carpal coalition) in some alleles",
    ],
    boardsPearls: [
      "HOX genes — anterior-posterior limb patterning; HOXD13 = distal limb + genital development",
      "HFGS vignette: limb anomalies + Müllerian duct or hypospadias + family history",
      "Polyalanine tract expansions in HOXD13 are a classic boards genetics association",
      "Peds: congenital thumb/toe malformations with urogenital anomalies → consider HOXD13",
    ],
    distinguishFrom: [
      "HOXA13 — similar limb/genital phenotype (hand-foot-uterus syndrome); different HOX cluster",
      "Fibrillin-1 — Marfan (aortic root, lens dislocation), not thumb/uterine malformations",
      "Androgen insensitivity — 46,XY female phenotype, not structural thumb shortening",
    ],
  },
  {
    id: "homeobox-hox-gene",
    name: "Homeobox (HOX) gene",
    aliases: [
      "homeobox (hox) gene",
      "homeobox gene",
      "homeobox genes",
      "hox gene",
      "hox genes",
      "homeobox hox gene",
    ],
    gene: "HOX gene clusters — HOXA (chr 7), HOXB (chr 17), HOXC (chr 12), HOXD (chr 2)",
    location:
      "Four paralogous clusters; expressed in spatial and temporal colinear patterns along developing body axis and limbs",
    function:
      "Encode homeodomain transcription factors that specify segment identity along the anterior–posterior axis (head-to-tail and proximal-to-distal limb patterning).",
    mutationCauses: [
      "Limb malformations (polydactyly, synpolydactyly, brachydactyly)",
      "Hand-foot-genital syndrome (HOXD13)",
      "Hand-foot-uterus syndrome (HOXA13)",
      "Vertebral segmentation defects when HOX patterning disrupted",
    ],
    boardsPearls: [
      "Colinearity — 3′ HOX genes specify distal structures; 5′ genes specify proximal/cranial",
      "HOX genes conserved across species — master developmental patterning genes",
      "Specific HOX mutations (HOXD13, HOXA13) are high-yield; know phenotype over memorizing entire cluster",
      "Peds: congenital limb and genitourinary anomalies → think HOX developmental patterning",
    ],
    distinguishFrom: [
      "HOXD13 — specific distal limb/genital transcription factor within HOXD cluster",
      "PAX genes — paired box family; Wilms tumor (PAX2), aniridia (PAX6)",
      "Sonic hedgehog (SHH) — morphogen gradient in limb bud, not HOX segment identity",
    ],
  },
];

const proteinById = new Map(PROTEINS.map((p) => [p.id, p]));

export function getProteinById(id: string): ProteinEntry | undefined {
  return proteinById.get(id);
}

export interface ProteinAliasMatch {
  alias: string;
  proteinId: string;
}

export function buildProteinAliasIndex(): ProteinAliasMatch[] {
  const matches: ProteinAliasMatch[] = [];
  for (const protein of PROTEINS) {
    for (const alias of protein.aliases) {
      matches.push({ alias: alias.toLowerCase(), proteinId: protein.id });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
