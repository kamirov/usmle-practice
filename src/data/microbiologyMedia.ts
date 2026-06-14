import type { MediaAttribution } from "./media";
import type { MicrobiologyEntry } from "./microbiology";

import aspergillusFumigatus from "../media/images/microbiology/aspergillus-fumigatus.jpg?url";
import blastomycesDermatitidis from "../media/images/microbiology/blastomyces-dermatitidis.jpeg?url";
import bordetellaPertussis from "../media/images/microbiology/bordetella-pertussis.jpg?url";
import campylobacterJejuni from "../media/images/microbiology/campylobacter-jejuni.jpg?url";
import borreliaBurgdorferi from "../media/images/microbiology/borrelia-burgdorferi.jpg?url";
import candidaAlbicans from "../media/images/microbiology/candida-albicans.jpg?url";
import clostridiumBotulinum from "../media/images/microbiology/clostridium-botulinum.png?url";
import clostridiumPerfringens from "../media/images/microbiology/clostridium-perfringens.jpg?url";
import coccidioidesImmitis from "../media/images/microbiology/coccidioides-immitis.jpg?url";
import corynebacteriumDiphtheriae from "../media/images/microbiology/corynebacterium-diphtheriae.jpg?url";
import cryptosporidiumParvum from "../media/images/microbiology/cryptosporidium-parvum.jpg?url";
import cryptococcusNeoformans from "../media/images/microbiology/cryptococcus-neoformans.jpg?url";
import cytomegalovirus from "../media/images/microbiology/cytomegalovirus.jpg?url";
import entamoebaHistolytica from "../media/images/microbiology/entamoeba-histolytica.jpg?url";
import epsteinBarrVirus from "../media/images/microbiology/epstein-barr-virus.jpg?url";
import escherichiaColi from "../media/images/microbiology/escherichia-coli.jpg?url";
import giardiaLamblia from "../media/images/microbiology/giardia-lamblia.jpg?url";
import haemophilusInfluenzae from "../media/images/microbiology/haemophilus-influenzae.jpg?url";
import helicobacterPylori from "../media/images/microbiology/helicobacter-pylori.jpg?url";
import herpesSimplexVirus from "../media/images/microbiology/herpes-simplex-virus.jpg?url";
import histoplasmaCapsulatum from "../media/images/microbiology/histoplasma-capsulatum.jpg?url";
import hiv from "../media/images/microbiology/hiv.jpg?url";
import klebsiellaPneumoniae from "../media/images/microbiology/klebsiella-pneumoniae.jpg?url";
import legionellaPneumophila from "../media/images/microbiology/legionella-pneumophila.jpg?url";
import listeriaMonocytogenes from "../media/images/microbiology/listeria-monocytogenes.jpg?url";
import mycobacteriumTuberculosis from "../media/images/microbiology/mycobacterium-tuberculosis.jpg?url";
import mycoplasmaPneumoniae from "../media/images/microbiology/mycoplasma-pneumoniae.jpeg?url";
import neisseriaGenus from "../media/images/microbiology/neisseria-genus.jpg?url";
import neisseriaMeningitidis from "../media/images/microbiology/neisseria-meningitidis.jpg?url";
import plasmodiumFalciparum from "../media/images/microbiology/plasmodium-falciparum.jpg?url";
import plasmodiumVivax from "../media/images/microbiology/plasmodium-vivax.jpg?url";
import pseudomonasAeruginosa from "../media/images/microbiology/pseudomonas-aeruginosa.jpg?url";
import salmonellaEnterica from "../media/images/microbiology/salmonella-enterica.jpg?url";
import serratiaMarcescens from "../media/images/microbiology/serratia-marcescens.jpg?url";
import schistosomaMansoni from "../media/images/microbiology/schistosoma-mansoni.jpg?url";
import shigellaFlexneri from "../media/images/microbiology/shigella-flexneri.jpg?url";
import staphylococcusAureus from "../media/images/microbiology/staphylococcus-aureus.jpg?url";
import streptococcusPneumoniae from "../media/images/microbiology/streptococcus-pneumoniae.jpg?url";
import streptococcusPyogenes from "../media/images/microbiology/streptococcus-pyogenes.jpg?url";
import strongyloidesStercoralis from "../media/images/microbiology/strongyloides-stercoralis.jpg?url";
import treponemaPallidum from "../media/images/microbiology/treponema-pallidum.jpg?url";
import toxoplasmaGondii from "../media/images/microbiology/toxoplasma-gondii.jpg?url";
import varicellaZosterVirus from "../media/images/microbiology/varicella-zoster-virus.jpg?url";
import measlesVirus from "../media/images/microbiology/measles-virus.jpg?url";
import mumpsVirus from "../media/images/microbiology/mumps-virus.jpg?url";
import rubellaVirus from "../media/images/microbiology/rubella-virus.jpg?url";
import zikaVirus from "../media/images/microbiology/zika-virus.png?url";
import yellowFeverVirus from "../media/images/microbiology/yellow-fever-virus.jpg?url";
import sporothrixSchenckii from "../media/images/microbiology/sporothrix-schenckii.jpg?url";
import bartonellaHenselae from "../media/images/microbiology/bartonella-henselae.jpg?url";
import aedesAegypti from "../media/images/microbiology/aedes-aegypti.jpg?url";
import adenovirus from "../media/images/microbiology/adenovirus.jpg?url";
import influenzaVirus from "../media/images/microbiology/influenza-virus.jpg?url";
import norovirus from "../media/images/microbiology/norovirus.jpg?url";
import rsv from "../media/images/microbiology/rsv.jpg?url";
import variolaVirus from "../media/images/microbiology/variola-virus.jpg?url";
import enterovirus from "../media/images/microbiology/enterovirus.jpg?url";
import rhinovirus from "../media/images/microbiology/rhinovirus.png?url";
import rickettsiaRickettsii from "../media/images/microbiology/rickettsia-rickettsii.jpg?url";
import chlamydiaTrachomatis from "../media/images/microbiology/chlamydia-trachomatis.jpg?url";

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
    "neisseria-genus": extensionAssetUrl(neisseriaGenus),
    "neisseria-gonorrhoeae": extensionAssetUrl(neisseriaGenus),
    "neisseria-meningitidis": extensionAssetUrl(neisseriaMeningitidis),
    "clostridium-botulinum": extensionAssetUrl(clostridiumBotulinum),
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
    "measles-virus": extensionAssetUrl(measlesVirus),
    "mumps-virus": extensionAssetUrl(mumpsVirus),
    "rubella-virus": extensionAssetUrl(rubellaVirus),
    "zika-virus": extensionAssetUrl(zikaVirus),
    "yellow-fever-virus": extensionAssetUrl(yellowFeverVirus),
    "sporothrix-schenckii": extensionAssetUrl(sporothrixSchenckii),
    "bartonella-henselae": extensionAssetUrl(bartonellaHenselae),
    "toxoplasma-gondii": extensionAssetUrl(toxoplasmaGondii),
    "borrelia-burgdorferi": extensionAssetUrl(borreliaBurgdorferi),
    "aspergillus-fumigatus": extensionAssetUrl(aspergillusFumigatus),
    "histoplasma-capsulatum": extensionAssetUrl(histoplasmaCapsulatum),
    "campylobacter-jejuni": extensionAssetUrl(campylobacterJejuni),
    "helicobacter-pylori": extensionAssetUrl(helicobacterPylori),
    "corynebacterium-diphtheriae": extensionAssetUrl(corynebacteriumDiphtheriae),
    "mycoplasma-pneumoniae": extensionAssetUrl(mycoplasmaPneumoniae),
    "coccidioides-immitis": extensionAssetUrl(coccidioidesImmitis),
    "blastomyces-dermatitidis": extensionAssetUrl(blastomycesDermatitidis),
    "plasmodium-vivax": extensionAssetUrl(plasmodiumVivax),
    "strongyloides-stercoralis": extensionAssetUrl(strongyloidesStercoralis),
    "schistosoma-mansoni": extensionAssetUrl(schistosomaMansoni),
    "dengue-virus": extensionAssetUrl(aedesAegypti),
    "chikungunya-virus": extensionAssetUrl(aedesAegypti),
    "respiratory-syncytial-virus": extensionAssetUrl(rsv),
    norovirus: extensionAssetUrl(norovirus),
    "influenza-a": extensionAssetUrl(influenzaVirus),
    "influenza-virus": extensionAssetUrl(influenzaVirus),
    adenovirus: extensionAssetUrl(adenovirus),
    "variola-virus": extensionAssetUrl(variolaVirus),
    enterovirus: extensionAssetUrl(enterovirus),
    rhinovirus: extensionAssetUrl(rhinovirus),
    "rickettsia-rickettsii": extensionAssetUrl(rickettsiaRickettsii),
    "chlamydia-trachomatis": extensionAssetUrl(chlamydiaTrachomatis),
    "serratia-marcescens": extensionAssetUrl(serratiaMarcescens),
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
  "neisseria-genus": {
    label: "CDC PHIL #4085",
    url: "https://commons.wikimedia.org/wiki/File:Gonococcal_urethritis_PHIL_4085_lores.jpg",
  },
  "neisseria-gonorrhoeae": {
    label: "CDC PHIL #4085",
    url: "https://commons.wikimedia.org/wiki/File:Gonococcal_urethritis_PHIL_4085_lores.jpg",
  },
  "neisseria-meningitidis": {
    label: "Wikimedia Commons (Microman12345)",
    url: "https://commons.wikimedia.org/wiki/File:Neisseria_meningitidis_CSF_Gram_1000.jpg",
  },
  "clostridium-botulinum": {
    label: "CDC PHIL #2107",
    url: "https://commons.wikimedia.org/wiki/File:Clostridium_botulinum_01.png",
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
  "serratia-marcescens": {
    label: "Wikimedia Commons (Serratia marcescens.jpg)",
    url: "https://commons.wikimedia.org/wiki/File:Serratia_marcescens.jpg",
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
  "measles-virus": {
    label: "CDC PHIL #8429",
    url: "https://phil.cdc.gov/Details.aspx?pid=8429",
  },
  "mumps-virus": {
    label: "CDC PHIL #8758",
    url: "https://phil.cdc.gov/Details.aspx?pid=8758",
  },
  "rubella-virus": {
    label: "CDC PHIL #10221",
    url: "https://phil.cdc.gov/Details.aspx?pid=10221",
  },
  "zika-virus": {
    label: "CDC PHIL #20538",
    url: "https://phil.cdc.gov/Details.aspx?pid=20538",
  },
  "yellow-fever-virus": {
    label: "CDC PHIL #8239",
    url: "https://phil.cdc.gov/Details.aspx?pid=8239",
  },
  "sporothrix-schenckii": {
    label: "CDC PHIL #3940",
    url: "https://phil.cdc.gov/Details.aspx?pid=3940",
  },
  "bartonella-henselae": {
    label: "CDC PHIL #22328",
    url: "https://phil.cdc.gov/Details.aspx?pid=22328",
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
  "campylobacter-jejuni": {
    label: "CDC PHIL #5778",
    url: "https://phil.cdc.gov/Details.aspx?pid=5778",
  },
  "helicobacter-pylori": {
    label: "Wikimedia Commons (Ed Uthman, CC BY-SA 2.0)",
    url: "https://commons.wikimedia.org/wiki/File:Helicobacter_pylori,_Gastric_Mucosa,_Giemsa_stain_(390307643).jpg",
  },
  "corynebacterium-diphtheriae": {
    label: "CDC PHIL #7323",
    url: "https://phil.cdc.gov/Details.aspx?pid=7323",
  },
  "mycoplasma-pneumoniae": {
    label: "Wikimedia Commons (Rottem et al., CC BY 3.0)",
    url: "https://commons.wikimedia.org/wiki/File:Mycoplasma_pneumoniae_cells_attached_to_ciliated_mucosal_cells.jpeg",
  },
  "coccidioides-immitis": {
    label: "CDC PHIL #480",
    url: "https://phil.cdc.gov/Details.aspx?pid=480",
  },
  "blastomyces-dermatitidis": {
    label: "Wikimedia Commons (James Scott / Medmyco, CC0)",
    url: "https://commons.wikimedia.org/wiki/File:Blastomyces_dermatitidis_yeast_form.jpeg",
  },
  "plasmodium-vivax": {
    label: "CDC PHIL #2720",
    url: "https://phil.cdc.gov/Details.aspx?pid=2720",
  },
  "strongyloides-stercoralis": {
    label: "Wikimedia Commons (Por Chandharakool, CC BY 4.0)",
    url: "https://commons.wikimedia.org/wiki/File:Strongyloides_Stercoralis_in_sputum.jpg",
  },
  "schistosoma-mansoni": {
    label: "CDC PHIL #5252",
    url: "https://phil.cdc.gov/Details.aspx?pid=5252",
  },
  "dengue-virus": {
    label: "CDC PHIL #9186 (public domain)",
    url: "https://phil.cdc.gov/Details.aspx?pid=9186",
  },
  "chikungunya-virus": {
    label: "CDC PHIL #9186 (public domain)",
    url: "https://phil.cdc.gov/Details.aspx?pid=9186",
  },
  "respiratory-syncytial-virus": {
    label: "CDC PHIL #2175",
    url: "https://phil.cdc.gov/Details.aspx?pid=2175",
  },
  norovirus: {
    label: "CDC PHIL #2172",
    url: "https://phil.cdc.gov/Details.aspx?pid=2172",
  },
  "influenza-a": {
    label: "CDC PHIL #8430",
    url: "https://phil.cdc.gov/Details.aspx?pid=8430",
  },
  "influenza-virus": {
    label: "CDC PHIL #8430",
    url: "https://phil.cdc.gov/Details.aspx?pid=8430",
  },
  adenovirus: {
    label: "CDC PHIL #823",
    url: "https://phil.cdc.gov/Details.aspx?pid=823",
  },
  "variola-virus": {
    label: "CDC PHIL #2265",
    url: "https://phil.cdc.gov/Details.aspx?pid=2265",
  },
  enterovirus: {
    label: "CDC PHIL #5630",
    url: "https://phil.cdc.gov/Details.aspx?pid=5630",
  },
  rhinovirus: {
    label: "Wikimedia Commons (Robin S / Quibik, molecular model from PDB 1AYM)",
    url: "https://commons.wikimedia.org/wiki/File:Rhinovirus.PNG",
  },
  "rickettsia-rickettsii": {
    label: "CDC (public domain)",
    url: "https://commons.wikimedia.org/wiki/File:Rickettsia_rickettsii.jpg",
  },
  "chlamydia-trachomatis": {
    label: "Wikimedia Commons (CC BY-SA 3.0)",
    url: "https://commons.wikimedia.org/wiki/File:ChlamydiaTrachomatisEinschlussk%C3%B6rperchen.jpg",
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
  "neisseria-genus":
    "Gram stain showing Neisseria gonorrhoeae Gram-negative diplococci inside neutrophils",
  "neisseria-gonorrhoeae":
    "Gram stain showing intracellular and extracellular N. gonorrhoeae Gram-negative diplococci",
  "neisseria-meningitidis":
    "Gram stain of CSF: Gram-negative diplococci (1000×)",
  "clostridium-botulinum":
    "Gentian violet photomicrograph of C. botulinum rod-shaped bacteria with oval endospores",
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
  "measles-virus":
    "TEM thin section of a single measles morbillivirus virion (paramyxovirus)",
  "mumps-virus":
    "Negative-stain TEM of mumps rubulavirus (paramyxovirus)",
  "rubella-virus":
    "Negative-stain TEM of rubella virions budding from host cell surface",
  "zika-virus":
    "Colorized TEM of Zika virus particles (Flaviviridae; ~40 nm)",
  "dengue-virus":
    "Female Aedes aegypti mosquito — primary vector of dengue virus (daytime feeder)",
  "chikungunya-virus":
    "Female Aedes aegypti mosquito — primary vector of chikungunya virus (daytime feeder)",
  "respiratory-syncytial-virus":
    "TEM of respiratory syncytial virus (RSV) — common cause of infant bronchiolitis",
  norovirus:
    "TEM of norovirus (Norwalk virus) particles — calicivirus gastroenteritis",
  "influenza-a":
    "TEM of influenza A virions — orthomyxovirus with hemagglutinin and neuraminidase surface spikes",
  "influenza-virus":
    "TEM of influenza virus particles — orthomyxovirus with hemagglutinin spikes",
  adenovirus:
    "TEM of adenovirus particles — icosahedral non-enveloped dsDNA virus",
  "variola-virus":
    "TEM of variola (smallpox) virus — brick-shaped orthopoxvirus (eradicated 1980)",
  "yellow-fever-virus":
    "TEM of yellow fever virions at high magnification (Flaviviridae)",
  "sporothrix-schenckii":
    "Lymphocutaneous sporotrichosis — ascending nodular lesions on the arm (Sporothrix schenckii)",
  "bartonella-henselae":
    "Inoculation-site lesion on the hand after cat scratch (Bartonella henselae cat-scratch disease)",
  "toxoplasma-gondii": "Giemsa stain: crescent-shaped tachyzoites",
  "borrelia-burgdorferi":
    "Dark-field microscopy: corkscrew spirochetes (400×)",
  "aspergillus-fumigatus":
    "H&E: septate hyphae branching at 45° in pulmonary aspergillosis",
  "histoplasma-capsulatum":
    "GMS stain: budding yeast cells in histoplasmosis tissue",
  "campylobacter-jejuni":
    "SEM: Campylobacter jejuni on surface of chicken skin",
  "helicobacter-pylori":
    "Giemsa stain: H. pylori on gastric mucosa (1000×)",
  "corynebacterium-diphtheriae":
    "Gram stain: Corynebacterium diphtheriae (1000×)",
  "mycoplasma-pneumoniae":
    "M. pneumoniae attached to ciliated respiratory epithelium",
  "coccidioides-immitis":
    "Mature spherule with endospores of Coccidioides immitis",
  "blastomyces-dermatitidis":
    "Broad-based budding yeast form (Nomarski DIC, 37°C culture)",
  "plasmodium-vivax":
    "Giemsa smear: immature and mature P. vivax trophozoites",
  "strongyloides-stercoralis":
    "Strongyloides stercoralis larvae in sputum specimen",
  "schistosoma-mansoni":
    "Schistosoma mansoni adult trematodes (male and female)",
  enterovirus:
    "Immunoelectron micrograph of Coxsackie B4 enterovirus virions — icosahedral picornavirus",
  rhinovirus:
    "Molecular surface of human rhinovirus 16 capsid — icosahedral picornavirus causing common cold",
  "rickettsia-rickettsii":
    "Gimenez stain of R. rickettsii in tick hemolymph cells — obligate intracellular Gram-negative coccobacillus",
  "chlamydia-trachomatis":
    "Lugol-stained intracytoplasmic inclusion bodies (glycogen) in host cells — classic chlamydial morphology",
  "serratia-marcescens":
    "Serratia marcescens colonies with red prodigiosin pigment on agar",
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
