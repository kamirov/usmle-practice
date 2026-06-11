import type { MediaAttribution } from "./media";
import type { MicrobiologyEntry } from "./microbiology";

import aspergillusFumigatus from "../media/images/microbiology/aspergillus-fumigatus.jpg?url";
import bordetellaPertussis from "../media/images/microbiology/bordetella-pertussis.jpg?url";
import borreliaBurgdorferi from "../media/images/microbiology/borrelia-burgdorferi.jpg?url";
import candidaAlbicans from "../media/images/microbiology/candida-albicans.jpg?url";
import clostridiumPerfringens from "../media/images/microbiology/clostridium-perfringens.jpg?url";
import cryptosporidiumParvum from "../media/images/microbiology/cryptosporidium-parvum.jpg?url";
import cryptococcusNeoformans from "../media/images/microbiology/cryptococcus-neoformans.jpg?url";
import cytomegalovirus from "../media/images/microbiology/cytomegalovirus.jpg?url";
import entamoebaHistolytica from "../media/images/microbiology/entamoeba-histolytica.jpg?url";
import epsteinBarrVirus from "../media/images/microbiology/epstein-barr-virus.jpg?url";
import escherichiaColi from "../media/images/microbiology/escherichia-coli.jpg?url";
import giardiaLamblia from "../media/images/microbiology/giardia-lamblia.jpg?url";
import haemophilusInfluenzae from "../media/images/microbiology/haemophilus-influenzae.jpg?url";
import herpesSimplexVirus from "../media/images/microbiology/herpes-simplex-virus.jpg?url";
import histoplasmaCapsulatum from "../media/images/microbiology/histoplasma-capsulatum.jpg?url";
import hiv from "../media/images/microbiology/hiv.jpg?url";
import klebsiellaPneumoniae from "../media/images/microbiology/klebsiella-pneumoniae.jpg?url";
import legionellaPneumophila from "../media/images/microbiology/legionella-pneumophila.jpg?url";
import listeriaMonocytogenes from "../media/images/microbiology/listeria-monocytogenes.jpg?url";
import mycobacteriumTuberculosis from "../media/images/microbiology/mycobacterium-tuberculosis.jpg?url";
import neisseriaMeningitidis from "../media/images/microbiology/neisseria-meningitidis.jpg?url";
import plasmodiumFalciparum from "../media/images/microbiology/plasmodium-falciparum.jpg?url";
import pseudomonasAeruginosa from "../media/images/microbiology/pseudomonas-aeruginosa.jpg?url";
import salmonellaEnterica from "../media/images/microbiology/salmonella-enterica.jpg?url";
import shigellaFlexneri from "../media/images/microbiology/shigella-flexneri.jpg?url";
import staphylococcusAureus from "../media/images/microbiology/staphylococcus-aureus.jpg?url";
import streptococcusPneumoniae from "../media/images/microbiology/streptococcus-pneumoniae.jpg?url";
import streptococcusPyogenes from "../media/images/microbiology/streptococcus-pyogenes.jpg?url";
import treponemaPallidum from "../media/images/microbiology/treponema-pallidum.jpg?url";
import toxoplasmaGondii from "../media/images/microbiology/toxoplasma-gondii.jpg?url";
import varicellaZosterVirus from "../media/images/microbiology/varicella-zoster-virus.jpg?url";

export type MicrobiologyImageId = MicrobiologyEntry["id"];

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/microbiology/SOURCES.txt */
export const MICROBIOLOGY_IMAGES: Partial<Record<MicrobiologyImageId, string>> =
  {
    "staphylococcus-aureus": extensionAssetUrl(staphylococcusAureus),
    "streptococcus-pyogenes": extensionAssetUrl(streptococcusPyogenes),
    "streptococcus-pneumoniae": extensionAssetUrl(streptococcusPneumoniae),
    "escherichia-coli": extensionAssetUrl(escherichiaColi),
    "haemophilus-influenzae": extensionAssetUrl(haemophilusInfluenzae),
    "neisseria-meningitidis": extensionAssetUrl(neisseriaMeningitidis),
    "clostridium-perfringens": extensionAssetUrl(clostridiumPerfringens),
    "mycobacterium-tuberculosis": extensionAssetUrl(mycobacteriumTuberculosis),
    "treponema-pallidum": extensionAssetUrl(treponemaPallidum),
    hiv: extensionAssetUrl(hiv),
    "candida-albicans": extensionAssetUrl(candidaAlbicans),
    "cryptococcus-neoformans": extensionAssetUrl(cryptococcusNeoformans),
    "plasmodium-falciparum": extensionAssetUrl(plasmodiumFalciparum),
    "giardia-lamblia": extensionAssetUrl(giardiaLamblia),
    "klebsiella-pneumoniae": extensionAssetUrl(klebsiellaPneumoniae),
    "pseudomonas-aeruginosa": extensionAssetUrl(pseudomonasAeruginosa),
    "legionella-pneumophila": extensionAssetUrl(legionellaPneumophila),
    "bordetella-pertussis": extensionAssetUrl(bordetellaPertussis),
    "epstein-barr-virus": extensionAssetUrl(epsteinBarrVirus),
    cytomegalovirus: extensionAssetUrl(cytomegalovirus),
    "cryptosporidium-parvum": extensionAssetUrl(cryptosporidiumParvum),
    "entamoeba-histolytica": extensionAssetUrl(entamoebaHistolytica),
    "salmonella-enterica": extensionAssetUrl(salmonellaEnterica),
    "shigella-flexneri": extensionAssetUrl(shigellaFlexneri),
    "listeria-monocytogenes": extensionAssetUrl(listeriaMonocytogenes),
    "herpes-simplex-virus": extensionAssetUrl(herpesSimplexVirus),
    "varicella-zoster-virus": extensionAssetUrl(varicellaZosterVirus),
    "toxoplasma-gondii": extensionAssetUrl(toxoplasmaGondii),
    "borrelia-burgdorferi": extensionAssetUrl(borreliaBurgdorferi),
    "aspergillus-fumigatus": extensionAssetUrl(aspergillusFumigatus),
    "histoplasma-capsulatum": extensionAssetUrl(histoplasmaCapsulatum),
  };

export const MICROBIOLOGY_IMAGE_ATTRIBUTIONS: Partial<
  Record<MicrobiologyImageId, MediaAttribution>
> = {
  "staphylococcus-aureus": {
    label: "Wikimedia Commons (Dr Graham Beards)",
    url: "https://commons.wikimedia.org/wiki/File:Staphylococcus_aureus_Gram_stain.jpg",
  },
  "streptococcus-pyogenes": {
    label: "CDC PHIL #2110",
    url: "https://phil.cdc.gov/Details.aspx?pid=2110",
  },
  "streptococcus-pneumoniae": {
    label: "CDC PHIL #262",
    url: "https://phil.cdc.gov/Details.aspx?pid=262",
  },
  "escherichia-coli": {
    label: "Wikimedia Commons (Y tambe)",
    url: "https://commons.wikimedia.org/wiki/File:Escherichia_coli_Gram.jpg",
  },
  "haemophilus-influenzae": {
    label: "Wikimedia Commons (Stefan Walkowski, CC BY-SA 4.0)",
    url: "https://commons.wikimedia.org/wiki/File:Haemophilus_influenzae.jpg",
  },
  "neisseria-meningitidis": {
    label: "Wikimedia Commons (Microman12345)",
    url: "https://commons.wikimedia.org/wiki/File:Neisseria_meningitidis_CSF_Gram_1000.jpg",
  },
  "clostridium-perfringens": {
    label: "CDC PHIL #2995",
    url: "https://phil.cdc.gov/Details.aspx?pid=2995",
  },
  "mycobacterium-tuberculosis": {
    label: "CDC PHIL #5789",
    url: "https://phil.cdc.gov/Details.aspx?pid=5789",
  },
  "treponema-pallidum": {
    label: "CDC PHIL #1977",
    url: "https://phil.cdc.gov/Details.aspx?pid=1977",
  },
  hiv: {
    label: "CDC PHIL #10000",
    url: "https://phil.cdc.gov/Details.aspx?pid=10000",
  },
  "candida-albicans": {
    label: "Wikimedia Commons (Dr Graham Beards)",
    url: "https://commons.wikimedia.org/wiki/File:Candida_Gram_stain.jpg",
  },
  "cryptococcus-neoformans": {
    label: "Wikimedia Commons (Dr Graham Beards, CC BY-SA 3.0)",
    url: "https://commons.wikimedia.org/wiki/File:Cryptococcus_neoformans.jpg",
  },
  "plasmodium-falciparum": {
    label: "CDC PHIL #5856",
    url: "https://phil.cdc.gov/Details.aspx?pid=5856",
  },
  "giardia-lamblia": {
    label: "Wikimedia Commons (Ajay Kumar Chaurasiya)",
    url: "https://commons.wikimedia.org/wiki/File:Cysts_of_Giardia_lamblia.jpg",
  },
  "klebsiella-pneumoniae": {
    label: "Wikimedia Commons (Ajay Kumar Chaurasiya)",
    url: "https://commons.wikimedia.org/wiki/File:Gram_Negative_bacilli_of_Klebsiella_in_Gram_stained_smear_of_culture.jpg",
  },
  "pseudomonas-aeruginosa": {
    label: "Wikimedia Commons (Paulo Henrique Orlandi Mourao)",
    url: "https://commons.wikimedia.org/wiki/File:Pseudomonas_aeruginosa_smear_Gram_2010-02-10.JPG",
  },
  "legionella-pneumophila": {
    label: "CDC PHIL #11150",
    url: "https://phil.cdc.gov/Details.aspx?pid=11150",
  },
  "bordetella-pertussis": {
    label: "Wikimedia Commons (Nathan Reading, CC BY-SA 2.0)",
    url: "https://commons.wikimedia.org/wiki/File:Bordetella_pertussis_on_Charcoal_Agar_supplemented_with_Cephalexin_-_Detail.jpg",
  },
  "epstein-barr-virus": {
    label: "CDC PHIL #2984",
    url: "https://phil.cdc.gov/Details.aspx?pid=2984",
  },
  cytomegalovirus: {
    label: "Wikimedia Commons (Jensflorian, CC BY-SA 4.0)",
    url: "https://commons.wikimedia.org/wiki/File:CMV_encephalitis_owl_eye_inclusions_HE_stain.jpg",
  },
  "cryptosporidium-parvum": {
    label: "CDC PHIL #4384",
    url: "https://phil.cdc.gov/Details.aspx?pid=4384",
  },
  "entamoeba-histolytica": {
    label: "CDC PHIL #14544",
    url: "https://phil.cdc.gov/Details.aspx?pid=14544",
  },
  "salmonella-enterica": {
    label: "NIAID/NIH (Rocky Mountain Laboratories)",
    url: "https://commons.wikimedia.org/wiki/File:SalmonellaNIAID.jpg",
  },
  "shigella-flexneri": {
    label: "Wikimedia Commons (B. Domangue, CC BY-SA 4.0)",
    url: "https://commons.wikimedia.org/wiki/File:Shigella_flexneri_Gram_Stain_on_Microscope_Slide.jpg",
  },
  "listeria-monocytogenes": {
    label: "CDC PHIL #2287",
    url: "https://phil.cdc.gov/Details.aspx?pid=2287",
  },
  "herpes-simplex-virus": {
    label: "CDC PHIL #10235",
    url: "https://phil.cdc.gov/Details.aspx?pid=10235",
  },
  "varicella-zoster-virus": {
    label: "CDC PHIL #1878",
    url: "https://phil.cdc.gov/Details.aspx?pid=1878",
  },
  "toxoplasma-gondii": {
    label: "CDC DPDx Parasite Image Library",
    url: "https://commons.wikimedia.org/wiki/File:Toxoplasma_gondii_tachy.jpg",
  },
  "borrelia-burgdorferi": {
    label: "CDC PHIL #6631",
    url: "https://phil.cdc.gov/Details.aspx?pid=6631",
  },
  "aspergillus-fumigatus": {
    label: "Wikimedia Commons (Nephron, CC BY-SA 3.0)",
    url: "https://commons.wikimedia.org/wiki/File:Pulmonary_aspergillosis.jpg",
  },
  "histoplasma-capsulatum": {
    label: "CDC PHIL #4223",
    url: "https://phil.cdc.gov/Details.aspx?pid=4223",
  },
};

export const MICROBIOLOGY_IMAGE_CAPTIONS: Partial<
  Record<MicrobiologyImageId, string>
> = {
  "staphylococcus-aureus": "Gram stain: Gram-positive cocci in clusters",
  "streptococcus-pyogenes": "Group A Streptococcus (900× magnification)",
  "streptococcus-pneumoniae":
    "Scanning electron micrograph of lancet-shaped diplococci",
  "escherichia-coli": "Gram stain: Gram-negative bacilli",
  "haemophilus-influenzae": "Colonies on chocolate agar",
  "neisseria-meningitidis":
    "Gram stain of CSF: Gram-negative diplococci (1000×)",
  "clostridium-perfringens": "Gram stain of broth culture",
  "mycobacterium-tuberculosis":
    "Ziehl-Neelsen acid-fast stain: red bacilli (1000×)",
  "treponema-pallidum": "Electron micrograph of spirochetes on epithelium",
  hiv: "Scanning EM: HIV-1 budding from lymphocyte (colored)",
  "candida-albicans": "Gram stain: yeast and pseudohyphae",
  "cryptococcus-neoformans": "India ink stain showing capsular halo",
  "plasmodium-falciparum":
    "Giemsa thin smear: ring forms and gametocytes",
  "giardia-lamblia": "Cysts in saline wet mount (1600×)",
  "klebsiella-pneumoniae": "Gram stain: Gram-negative bacilli from culture",
  "pseudomonas-aeruginosa":
    "Gram stain: P. aeruginosa phagocytosed by neutrophil in bloodstream infection",
  "legionella-pneumophila":
    "Scanning EM: Gram-negative L. pneumophila (8000×, colorized)",
  "bordetella-pertussis": "Colonies on charcoal agar with cephalexin (7 days)",
  "epstein-barr-virus":
    "FA stain: leukemia cells containing Epstein-Barr virus",
  cytomegalovirus:
    "H&E: owl's eye intranuclear inclusions in CMV encephalitis",
  "cryptosporidium-parvum": "Stool smear with Cryptosporidium parvum oocysts",
  "entamoeba-histolytica":
    "Trichrome stain: trophozoite with ingested erythrocytes",
  "salmonella-enterica":
    "SEM: Salmonella Typhimurium (red) invading human cells",
  "shigella-flexneri": "Gram stain: Gram-negative rods (pink safranin)",
  "listeria-monocytogenes":
    "Electron micrograph of flagellated L. monocytogenes (41,250×)",
  "herpes-simplex-virus": "TEM: herpes simplex virions (negatively stained)",
  "varicella-zoster-virus": "Electron micrograph of varicella-zoster virion",
  "toxoplasma-gondii": "Giemsa stain: crescent-shaped tachyzoites",
  "borrelia-burgdorferi":
    "Dark-field microscopy: corkscrew spirochetes (400×)",
  "aspergillus-fumigatus":
    "H&E: septate hyphae branching at 45° in pulmonary aspergillosis",
  "histoplasma-capsulatum":
    "GMS stain: budding yeast cells in histoplasmosis tissue",
};

export function getMicrobiologyImageForId(
  id: string,
): string | undefined {
  return MICROBIOLOGY_IMAGES[id as MicrobiologyImageId];
}

export function getMicrobiologyImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return MICROBIOLOGY_IMAGE_ATTRIBUTIONS[id as MicrobiologyImageId];
}

export function getMicrobiologyImageCaptionForId(
  id: string,
): string | undefined {
  return MICROBIOLOGY_IMAGE_CAPTIONS[id as MicrobiologyImageId];
}
