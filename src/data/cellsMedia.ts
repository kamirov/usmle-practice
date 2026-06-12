import type { MediaAttribution } from "./media";
import type { CellEntry } from "./cells";

import aDeltaFiber from "../media/images/cells/a-delta-fiber.svg?url";
import acetylation from "../media/images/cells/acetylation.jpg?url";
import actin from "../media/images/cells/actin.svg?url";
import adherensJunction from "../media/images/cells/adherens-junction.svg?url";
import adventitia from "../media/images/cells/adventitia.svg?url";
import antigenPresentingCell from "../media/images/cells/antigen-presenting-cell.png?url";
import bLymphocyteBlausen from "../media/images/cells/b-lymphocyte-blausen.png?url";
import bLymphocyte from "../media/images/cells/b-lymphocyte.png?url";
import basophil from "../media/images/cells/basophil.jpg?url";
import birbeckGranules from "../media/images/cells/birbeck-granules.jpg?url";
import cd4TLymphocyte from "../media/images/cells/cd4-t-lymphocyte.jpg?url";
import cd8TLymphocyte from "../media/images/cells/cd8-t-lymphocyte.png?url";
import cervicalOs from "../media/images/cells/cervical-os.svg?url";
import dendriticCell from "../media/images/cells/dendritic-cell.jpg?url";
import dermalAppendage from "../media/images/cells/dermal-appendage.svg?url";
import desmosome from "../media/images/cells/desmosome.jpg?url";
import dnaMethylation from "../media/images/cells/dna-methylation.jpg?url";
import dnaTranscription from "../media/images/cells/dna-transcription.jpg?url";
import endometrium from "../media/images/cells/endometrium.jpg?url";
import eosinophil from "../media/images/cells/eosinophil.jpg?url";
import epigenetics from "../media/images/cells/epigenetics.jpg?url";
import epithelioidCell from "../media/images/cells/epithelioid-cell.jpg?url";
import fenestrae from "../media/images/cells/fenestrae.jpg?url";
import gapJunction from "../media/images/cells/gap-junction.svg?url";
import golgiTendonOrgan from "../media/images/cells/golgi-tendon-organ.png?url";
import hemidesmosome from "../media/images/cells/hemidesmosome.png?url";
import hepaticSinusoids from "../media/images/cells/hepatic-sinusoids.png?url";
import hypothalamus from "../media/images/cells/hypothalamus.jpg?url";
import immunologicalMemory from "../media/images/cells/immunological-memory.png?url";
import intermediateFilament from "../media/images/cells/intermediate-filament.jpg?url";
import keratinocyte from "../media/images/cells/keratinocyte.png?url";
import kupfferCell from "../media/images/cells/kupffer-cell.png?url";
import laminaPropria from "../media/images/cells/lamina-propria.jpg?url";
import langerhansCell from "../media/images/cells/langerhans-cell.jpg?url";
import langhansGiantCell from "../media/images/cells/langhans-giant-cell.jpg?url";
import leukocyte from "../media/images/cells/leukocyte.jpg?url";
import lymphocyte from "../media/images/cells/lymphocyte.png?url";
import macrophage from "../media/images/cells/macrophage.png?url";
import mastCell from "../media/images/cells/mast-cell.jpg?url";
import melanocyte from "../media/images/cells/melanocyte.jpg?url";
import melanosome from "../media/images/cells/melanosome.jpg?url";
import merkelCell from "../media/images/cells/merkel-cell.jpg?url";
import microtubule from "../media/images/cells/microtubule.png?url";
import mitochondrialRespiratoryChain from "../media/images/cells/mitochondrial-respiratory-chain.svg?url";
import monocyte from "../media/images/cells/monocyte.jpg?url";
import mrnaTranslation from "../media/images/cells/mrna-translation.svg?url";
import mtdna from "../media/images/cells/mtdna.jpg?url";
import mucosa from "../media/images/cells/mucosa.jpg?url";
import myeloidSurfaceMarkers from "../media/images/cells/myeloid-surface-markers.jpg?url";
import myometrium from "../media/images/cells/myometrium.jpg?url";
import neuralCrest from "../media/images/cells/neural-crest.svg?url";
import neutrophil from "../media/images/cells/neutrophil.jpg?url";
import polymerization from "../media/images/cells/polymerization.svg?url";
import preMrna from "../media/images/cells/pre-mrna.jpg?url";
import serosa from "../media/images/cells/serosa.jpg?url";
import siderophage from "../media/images/cells/siderophage.jpg?url";
import stroma from "../media/images/cells/stroma.jpg?url";
import tCellSignaling from "../media/images/cells/t-cell-signaling.svg?url";
import tLymphocyte from "../media/images/cells/t-lymphocyte.jpg?url";
import th2 from "../media/images/cells/th2.png?url";
import tightJunction from "../media/images/cells/tight-junction.png?url";

export type CELLImageId = Extract<
  CellEntry["id"],
  | "a-delta-fiber"
  | "acetylation"
  | "actin"
  | "adherens-junction"
  | "adventitia"
  | "antigen-presenting-cell"
  | "naive-b-lymphocyte"
  | "b-lymphocyte"
  | "basophil"
  | "birbeck-granules"
  | "cd4-t-lymphocyte"
  | "cd8-t-lymphocyte"
  | "cervical-os"
  | "dendritic-cell"
  | "dermal-appendage"
  | "desmosome"
  | "dna-methylation"
  | "dna-transcription"
  | "endometrium"
  | "eosinophil"
  | "epigenetics"
  | "epithelioid-cell"
  | "fenestrae"
  | "gap-junction"
  | "golgi-tendon-organ"
  | "hemidesmosome"
  | "hepatic-sinusoids"
  | "hypothalamus"
  | "memory-t-lymphocyte"
  | "intermediate-filament"
  | "keratinocyte"
  | "kupffer-cell"
  | "lamina-propria"
  | "langerhans-cell"
  | "langhans-giant-cell"
  | "leukocyte"
  | "lymphocyte"
  | "macrophage"
  | "mast-cell"
  | "melanocyte"
  | "melanosome"
  | "merkel-cell"
  | "microtubule"
  | "oxidative-phosphorylation"
  | "monocyte"
  | "mrna-translation"
  | "mtdna"
  | "mucosa"
  | "myeloid-surface-markers"
  | "myometrium"
  | "neural-crest"
  | "neutrophil"
  | "polymerization"
  | "pre-mrna"
  | "serosa"
  | "siderophage"
  | "stroma"
  | "t-cell-signaling"
  | "t-lymphocyte"
  | "th2"
  | "tight-junction"
>;

function extensionAssetUrl(path: string): string {
  return chrome.runtime.getURL(path);
}

/** See src/media/images/cells/SOURCES.txt */
export const CELL_IMAGES: Partial<Record<CELLImageId, string>> = {
  "a-delta-fiber": extensionAssetUrl(aDeltaFiber),
  "acetylation": extensionAssetUrl(acetylation),
  "actin": extensionAssetUrl(actin),
  "adherens-junction": extensionAssetUrl(adherensJunction),
  "adventitia": extensionAssetUrl(adventitia),
  "antigen-presenting-cell": extensionAssetUrl(antigenPresentingCell),
  "naive-b-lymphocyte": extensionAssetUrl(bLymphocyteBlausen),
  "b-lymphocyte": extensionAssetUrl(bLymphocyte),
  "basophil": extensionAssetUrl(basophil),
  "birbeck-granules": extensionAssetUrl(birbeckGranules),
  "cd4-t-lymphocyte": extensionAssetUrl(cd4TLymphocyte),
  "cd8-t-lymphocyte": extensionAssetUrl(cd8TLymphocyte),
  "cervical-os": extensionAssetUrl(cervicalOs),
  "dendritic-cell": extensionAssetUrl(dendriticCell),
  "dermal-appendage": extensionAssetUrl(dermalAppendage),
  "desmosome": extensionAssetUrl(desmosome),
  "dna-methylation": extensionAssetUrl(dnaMethylation),
  "dna-transcription": extensionAssetUrl(dnaTranscription),
  "endometrium": extensionAssetUrl(endometrium),
  "eosinophil": extensionAssetUrl(eosinophil),
  "epigenetics": extensionAssetUrl(epigenetics),
  "epithelioid-cell": extensionAssetUrl(epithelioidCell),
  "fenestrae": extensionAssetUrl(fenestrae),
  "gap-junction": extensionAssetUrl(gapJunction),
  "golgi-tendon-organ": extensionAssetUrl(golgiTendonOrgan),
  "hemidesmosome": extensionAssetUrl(hemidesmosome),
  "hepatic-sinusoids": extensionAssetUrl(hepaticSinusoids),
  "hypothalamus": extensionAssetUrl(hypothalamus),
  "memory-t-lymphocyte": extensionAssetUrl(immunologicalMemory),
  "intermediate-filament": extensionAssetUrl(intermediateFilament),
  "keratinocyte": extensionAssetUrl(keratinocyte),
  "kupffer-cell": extensionAssetUrl(kupfferCell),
  "lamina-propria": extensionAssetUrl(laminaPropria),
  "langerhans-cell": extensionAssetUrl(langerhansCell),
  "langhans-giant-cell": extensionAssetUrl(langhansGiantCell),
  "leukocyte": extensionAssetUrl(leukocyte),
  "lymphocyte": extensionAssetUrl(lymphocyte),
  "macrophage": extensionAssetUrl(macrophage),
  "mast-cell": extensionAssetUrl(mastCell),
  "melanocyte": extensionAssetUrl(melanocyte),
  "melanosome": extensionAssetUrl(melanosome),
  "merkel-cell": extensionAssetUrl(merkelCell),
  "microtubule": extensionAssetUrl(microtubule),
  "oxidative-phosphorylation": extensionAssetUrl(mitochondrialRespiratoryChain),
  "monocyte": extensionAssetUrl(monocyte),
  "mrna-translation": extensionAssetUrl(mrnaTranslation),
  "mtdna": extensionAssetUrl(mtdna),
  "mucosa": extensionAssetUrl(mucosa),
  "myeloid-surface-markers": extensionAssetUrl(myeloidSurfaceMarkers),
  "myometrium": extensionAssetUrl(myometrium),
  "neural-crest": extensionAssetUrl(neuralCrest),
  "neutrophil": extensionAssetUrl(neutrophil),
  "polymerization": extensionAssetUrl(polymerization),
  "pre-mrna": extensionAssetUrl(preMrna),
  "serosa": extensionAssetUrl(serosa),
  "siderophage": extensionAssetUrl(siderophage),
  "stroma": extensionAssetUrl(stroma),
  "t-cell-signaling": extensionAssetUrl(tCellSignaling),
  "t-lymphocyte": extensionAssetUrl(tLymphocyte),
  "th2": extensionAssetUrl(th2),
  "tight-junction": extensionAssetUrl(tightJunction),
};

export const CELL_IMAGE_ATTRIBUTIONS: Partial<
  Record<CELLImageId, MediaAttribution>
> = {
  "a-delta-fiber": { label: "Wikimedia Commons (Propagation of action potential along myelinated nerve fiber en.svg)", url: "https://commons.wikimedia.org/wiki/File:Propagation_of_action_potential_along_myelinated_nerve_fiber_en.svg" },
  "acetylation": { label: "Wikimedia Commons (Histone acetylation in regulating glial response after CNS injury.jpg)", url: "https://commons.wikimedia.org/wiki/File:Histone_acetylation_in_regulating_glial_response_after_CNS_injury.jpg" },
  "actin": { label: "Wikimedia Commons (Microfilament Structure.svg)", url: "https://commons.wikimedia.org/wiki/File:Microfilament_Structure.svg" },
  "adherens-junction": { label: "Wikimedia Commons (Adherens Junctions structural proteins-LangNeutral.svg)", url: "https://commons.wikimedia.org/wiki/File:Adherens_Junctions_structural_proteins-LangNeutral.svg" },
  "adventitia": { label: "Wikimedia Commons (Microscopic anatomy of an artery de.svg)", url: "https://commons.wikimedia.org/wiki/File:Microscopic_anatomy_of_an_artery_de.svg" },
  "antigen-presenting-cell": { label: "Wikimedia Commons (An MHC tetramer binding to T-cell receptors (left), and an MHC molecule on the surface of an antigen presenting cell binding to T-cell receptors (right).png)", url: "https://commons.wikimedia.org/wiki/File:An_MHC_tetramer_binding_to_T-cell_receptors_(left),_and_an_MHC_molecule_on_the_surface_of_an_antigen_presenting_cell_binding_to_T-cell_receptors_(right).png" },
  "naive-b-lymphocyte": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:b-lymphocyte-blausen.png" },
  "b-lymphocyte": { label: "Wikimedia Commons (Plasma B Cell (NIH BioArt 640981).png)", url: "https://commons.wikimedia.org/wiki/File:Plasma_B_Cell_(NIH_BioArt_640981).png" },
  "basophil": { label: "Wikimedia Commons (Blood-basophil2.jpg)", url: "https://commons.wikimedia.org/wiki/File:Blood-basophil2.jpg" },
  "birbeck-granules": { label: "Wikimedia Commons (Langerhans cell histiocytosis - Birbeck granules.jpg)", url: "https://commons.wikimedia.org/wiki/File:Langerhans_cell_histiocytosis_-_Birbeck_granules.jpg" },
  "cd4-t-lymphocyte": { label: "Wikimedia Commons (Differentiation of helper T cell subsets is determined by cytokines.jpg)", url: "https://commons.wikimedia.org/wiki/File:Differentiation_of_helper_T_cell_subsets_is_determined_by_cytokines.jpg" },
  "cd8-t-lymphocyte": { label: "Wikimedia Commons (Killer T cells surround a cancer cell.png)", url: "https://commons.wikimedia.org/wiki/File:Killer_T_cells_surround_a_cancer_cell.png" },
  "cervical-os": { label: "Wikimedia Commons (Macro Os, vertèbres cervicales - Métastases 55-o.apatho-219d-os.jpg)", url: "https://commons.wikimedia.org/wiki/File:Macro_Os,_vertèbres_cervicales_-_Métastases_55-o.apatho-219d-os.jpg" },
  "dendritic-cell": { label: "Wikimedia Commons (Antigen presentation by dendritic cell.jpg)", url: "https://commons.wikimedia.org/wiki/File:Antigen_presentation_by_dendritic_cell.jpg" },
  "dermal-appendage": { label: "Wikimedia Commons (Skin Hair Follicle (NIH BioArt 657).svg)", url: "https://commons.wikimedia.org/wiki/File:Skin_Hair_Follicle_(NIH_BioArt_657).svg" },
  "desmosome": { label: "Wikimedia Commons (Transmission electron micrograph of a normal apical junctional complex (AJC), the structure between two adjacent enterocytes from the ileal epithelium region of a 21 d old chick.jpg)", url: "https://commons.wikimedia.org/wiki/File:Transmission_electron_micrograph_of_a_normal_apical_junctional_complex_(AJC),_the_structure_between_two_adjacent_enterocytes_from_the_ileal_epithelium_region_of_a_21_d_old_chick.jpg" },
  "dna-methylation": { label: "Wikimedia Commons (Methylation levels during mouse very early embryonic development.jpg)", url: "https://commons.wikimedia.org/wiki/File:Methylation_levels_during_mouse_very_early_embryonic_development.jpg" },
  "dna-transcription": { label: "Wikimedia Commons (Regulatory sequence in a promoter at a transcription start site with a paused RNA polymerase and a TOP2B-induced DNA double-strand break.jpg)", url: "https://commons.wikimedia.org/wiki/File:Regulatory_sequence_in_a_promoter_at_a_transcription_start_site_with_a_paused_RNA_polymerase_and_a_TOP2B-induced_DNA_double-strand_break.jpg" },
  "endometrium": { label: "Wikimedia Commons (Diseases of women and abdominal surgery (1889) (14779613431).jpg)", url: "https://commons.wikimedia.org/wiki/File:Diseases_of_women_and_abdominal_surgery_(1889)_(14779613431).jpg" },
  "eosinophil": { label: "Wikimedia Commons (Eosinophil blood smear.JPG)", url: "https://commons.wikimedia.org/wiki/File:Eosinophil_blood_smear.JPG" },
  "epigenetics": { label: "Wikimedia Commons (Nematode C. elegans germline chromatin Epigenetic imprint on the paternal X chromosome.jpg)", url: "https://commons.wikimedia.org/wiki/File:Nematode_C._elegans_germline_chromatin_Epigenetic_imprint_on_the_paternal_X_chromosome.jpg" },
  "epithelioid-cell": { label: "Wikimedia Commons (Sarcoidosis - Apoptotic bodies (6200975751).jpg)", url: "https://commons.wikimedia.org/wiki/File:Sarcoidosis_-_Apoptotic_bodies_(6200975751).jpg" },
  "fenestrae": { label: "Wikimedia Commons (Glandula parathyroidea – overview (HE stain).jpg)", url: "https://commons.wikimedia.org/wiki/File:Glandula_parathyroidea_–_overview_(HE_stain).jpg" },
  "gap-junction": { label: "Wikimedia Commons (Gap cell junction-uk.svg)", url: "https://commons.wikimedia.org/wiki/File:Gap_cell_junction-uk.svg" },
  "golgi-tendon-organ": { label: "Wikimedia Commons (Gray938.png)", url: "https://commons.wikimedia.org/wiki/File:Gray938.png" },
  "hemidesmosome": { label: "Wikimedia Commons (Schematic illustration of the basement membrane zones of epithelium.png)", url: "https://commons.wikimedia.org/wiki/File:Schematic_illustration_of_the_basement_membrane_zones_of_epithelium.png" },
  "hepatic-sinusoids": { label: "Wikimedia Commons (Hepatic circulation and microcirculation.png)", url: "https://commons.wikimedia.org/wiki/File:Hepatic_circulation_and_microcirculation.png" },
  "hypothalamus": { label: "Wikimedia Commons (1806 The Hypothalamus-Pituitary Complex.jpg)", url: "https://commons.wikimedia.org/wiki/File:1806_The_Hypothalamus-Pituitary_Complex.jpg" },
  "memory-t-lymphocyte": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:immunological-memory.png" },
  "intermediate-filament": { label: "Wikimedia Commons (Cytoskeleton - Intermediate filament -- Smart-Servier.png)", url: "https://commons.wikimedia.org/wiki/File:Cytoskeleton_-_Intermediate_filament_--_Smart-Servier.png" },
  "keratinocyte": { label: "Wikimedia Commons (Épiderme - FR.png)", url: "https://commons.wikimedia.org/wiki/File:Épiderme_-_FR.png" },
  "kupffer-cell": { label: "Wikimedia Commons (Hepatic circulation and microcirculation.png)", url: "https://commons.wikimedia.org/wiki/File:Hepatic_circulation_and_microcirculation.png" },
  "lamina-propria": { label: "Wikimedia Commons (Stomach - Iron Crystals In Gastric Lamina Propria And Epithelium (49270585877).jpg)", url: "https://commons.wikimedia.org/wiki/File:Stomach_-_Iron_Crystals_In_Gastric_Lamina_Propria_And_Epithelium_(49270585877).jpg" },
  "langerhans-cell": { label: "Wikimedia Commons (Langerhans Cells in Normal Epidermis, CD1a Immunostain (4435883030).jpg)", url: "https://commons.wikimedia.org/wiki/File:Langerhans_Cells_in_Normal_Epidermis,_CD1a_Immunostain_(4435883030).jpg" },
  "langhans-giant-cell": { label: "Wikimedia Commons (Langhans Giant Cell (10189844503).jpg)", url: "https://commons.wikimedia.org/wiki/File:Langhans_Giant_Cell_(10189844503).jpg" },
  "leukocyte": { label: "Wikimedia Commons (WBC (neutrophil) at centre, numerous erythrocytes and platelets (dot like bodies) in Wright's stained peripheral blood smear (PBS) microscopy.jpg)", url: "https://commons.wikimedia.org/wiki/File:WBC_(neutrophil)_at_centre,_numerous_erythrocytes_and_platelets_(dot_like_bodies)_in_Wright's_stained_peripheral_blood_smear_(PBS)_microscopy.jpg" },
  "lymphocyte": { label: "Wikimedia Commons (Microphotographs of atypical lymphocytes observed in peripheral blood smears of quokkas on Rottnest Island.png)", url: "https://commons.wikimedia.org/wiki/File:Microphotographs_of_atypical_lymphocytes_observed_in_peripheral_blood_smears_of_quokkas_on_Rottnest_Island.png" },
  "macrophage": { label: "Wikimedia Commons (Infiltration of CD68+ tumor-associated macrophages (TAMs) in distinct histologic location.png)", url: "https://commons.wikimedia.org/wiki/File:Infiltration_of_CD68+_tumor-associated_macrophages_(TAMs)_in_distinct_histologic_location.png" },
  "mast-cell": { label: "Wikimedia Commons (Mast cell.jpg)", url: "https://commons.wikimedia.org/wiki/File:Mast_cell.jpg" },
  "melanocyte": { label: "Wikimedia Commons (Melanin Development in Melanocytes.svg)", url: "https://commons.wikimedia.org/wiki/File:Melanin_Development_in_Melanocytes.svg" },
  "melanosome": { label: "Wikimedia Commons (Anuran melanosoms3 - Falk etal 2025.jpg)", url: "https://commons.wikimedia.org/wiki/File:Anuran_melanosoms3_-_Falk_etal_2025.jpg" },
  "merkel-cell": { label: "Wikimedia Commons (Blausen 0805 Skin MerkelCell nl01.png)", url: "https://commons.wikimedia.org/wiki/File:Blausen_0805_Skin_MerkelCell_nl01.png" },
  "microtubule": { label: "Wikimedia Commons (Chlorophyte-cell-diagram.png)", url: "https://commons.wikimedia.org/wiki/File:Chlorophyte-cell-diagram.png" },
  "oxidative-phosphorylation": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:mitochondrial-respiratory-chain.svg" },
  "monocyte": { label: "Wikimedia Commons (Blood-monocyte.jpg)", url: "https://commons.wikimedia.org/wiki/File:Blood-monocyte.jpg" },
  "mrna-translation": { label: "Wikimedia Commons (Ribosome mRNA translation en.svg)", url: "https://commons.wikimedia.org/wiki/File:Ribosome_mRNA_translation_en.svg" },
  "mtdna": { label: "Wikimedia Commons (Mitochondrial DNA lg.jpg)", url: "https://commons.wikimedia.org/wiki/File:Mitochondrial_DNA_lg.jpg" },
  "mucosa": { label: "Wikimedia Commons (Histology of transformation zone mucosa.jpg)", url: "https://commons.wikimedia.org/wiki/File:Histology_of_transformation_zone_mucosa.jpg" },
  "myeloid-surface-markers": { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:myeloid-surface-markers.jpg" },
  "myometrium": { label: "Wikimedia Commons (Uterus (myometrium).JPG)", url: "https://commons.wikimedia.org/wiki/File:Uterus_(myometrium).JPG" },
  "neural-crest": { label: "Wikimedia Commons (Neural.crest.cells.migration.svg)", url: "https://commons.wikimedia.org/wiki/File:Neural.crest.cells.migration.svg" },
  "neutrophil": { label: "Wikimedia Commons (Blausen 0676 Neutrophil (crop).png)", url: "https://commons.wikimedia.org/wiki/File:Blausen_0676_Neutrophil_(crop).png" },
  "polymerization": { label: "Wikimedia Commons (CSIRO ScienceImage 3020 Starch to Polymer.jpg)", url: "https://commons.wikimedia.org/wiki/File:CSIRO_ScienceImage_3020_Starch_to_Polymer.jpg" },
  "pre-mrna": { label: "Wikimedia Commons (Gene with introns and exons.jpg)", url: "https://commons.wikimedia.org/wiki/File:Gene_with_introns_and_exons.jpg" },
  "serosa": { label: "Wikimedia Commons (Chicken embryo at the stage of formation of trunk and amniotic folds.jpg)", url: "https://commons.wikimedia.org/wiki/File:Chicken_embryo_at_the_stage_of_formation_of_trunk_and_amniotic_folds.jpg" },
  "siderophage": { label: "Wikimedia Commons (Siderophage CSF cytology.jpg)", url: "https://commons.wikimedia.org/wiki/File:Siderophage_CSF_cytology.jpg" },
  "stroma": { label: "Wikimedia Commons (Spiral arteries in endometrial stroma.jpg)", url: "https://commons.wikimedia.org/wiki/File:Spiral_arteries_in_endometrial_stroma.jpg" },
  "t-cell-signaling": { label: "Wikimedia Commons (063-T-CellReceptor-MHC-ru.svg)", url: "https://commons.wikimedia.org/wiki/File:063-T-CellReceptor-MHC-ru.svg" },
  "t-lymphocyte": { label: "Wikimedia Commons (HIV-infected T cell (6813384933).jpg)", url: "https://commons.wikimedia.org/wiki/File:HIV-infected_T_cell_(6813384933).jpg" },
  "th2": { label: "Wikimedia Commons (M2 macrophages. Sézary cells produce the Th2 cytokines IL-4 and IL-13.png)", url: "https://commons.wikimedia.org/wiki/File:M2_macrophages._Sézary_cells_produce_the_Th2_cytokines_IL-4_and_IL-13.png" },
  "tight-junction": { label: "Wikimedia Commons (Morphological modifications during EMT.png)", url: "https://commons.wikimedia.org/wiki/File:Morphological_modifications_during_EMT.png" },
};

export const CELL_IMAGE_CAPTIONS: Partial<Record<CELLImageId, string>> = {
  "a-delta-fiber": "Clinical or pathologic image illustrating a delta fiber",
  "acetylation": "Clinical or pathologic image illustrating acetylation",
  "actin": "Clinical or pathologic image illustrating actin",
  "adherens-junction": "Clinical or pathologic image illustrating adherens junction",
  "adventitia": "Clinical or pathologic image illustrating adventitia",
  "antigen-presenting-cell": "Clinical or pathologic image illustrating antigen presenting cell",
  "naive-b-lymphocyte": "B lymphocyte with surface immunoglobulin (BCR) — naïve B cells express IgM and IgD awaiting first antigen encounter",
  "b-lymphocyte": "Clinical or pathologic image illustrating b lymphocyte",
  "basophil": "Clinical or pathologic image illustrating basophil",
  "birbeck-granules": "Clinical or pathologic image illustrating birbeck granules",
  "cd4-t-lymphocyte": "Clinical or pathologic image illustrating cd4 t lymphocyte",
  "cd8-t-lymphocyte": "Clinical or pathologic image illustrating cd8 t lymphocyte",
  "cervical-os": "Clinical or pathologic image illustrating cervical os",
  "dendritic-cell": "Clinical or pathologic image illustrating dendritic cell",
  "dermal-appendage": "Clinical or pathologic image illustrating dermal appendage",
  "desmosome": "Clinical or pathologic image illustrating desmosome",
  "dna-methylation": "Clinical or pathologic image illustrating dna methylation",
  "dna-transcription": "Clinical or pathologic image illustrating dna transcription",
  "endometrium": "Clinical or pathologic image illustrating endometrium",
  "eosinophil": "Clinical or pathologic image illustrating eosinophil",
  "epigenetics": "Clinical or pathologic image illustrating epigenetics",
  "epithelioid-cell": "Clinical or pathologic image illustrating epithelioid cell",
  "fenestrae": "Clinical or pathologic image illustrating fenestrae",
  "gap-junction": "Gap junction (connexon) channels connecting adjacent cells for direct cytoplasmic communication",
  "golgi-tendon-organ": "Clinical or pathologic image illustrating golgi tendon organ",
  "hemidesmosome": "Clinical or pathologic image illustrating hemidesmosome",
  "hepatic-sinusoids": "Clinical or pathologic image illustrating hepatic sinusoids",
  "hypothalamus": "Clinical or pathologic image illustrating hypothalamus",
  "memory-t-lymphocyte": "Immunological memory: long-lived memory B and T lymphocytes enable rapid secondary responses on re-exposure",
  "intermediate-filament": "Clinical or pathologic image illustrating intermediate filament",
  "keratinocyte": "Clinical or pathologic image illustrating keratinocyte",
  "kupffer-cell": "Clinical or pathologic image illustrating kupffer cell",
  "lamina-propria": "Clinical or pathologic image illustrating lamina propria",
  "langerhans-cell": "Clinical or pathologic image illustrating langerhans cell",
  "langhans-giant-cell": "Langhans giant cell with horseshoe-arranged nuclei at the periphery — seen in granulomatous inflammation",
  "leukocyte": "Clinical or pathologic image illustrating leukocyte",
  "lymphocyte": "Clinical or pathologic image illustrating lymphocyte",
  "macrophage": "Clinical or pathologic image illustrating macrophage",
  "mast-cell": "Mast cell with granules containing histamine and heparin — key effector in type I hypersensitivity",
  "melanocyte": "Melanocyte dendritic processes transferring melanin to surrounding keratinocytes",
  "melanosome": "Clinical or pathologic image illustrating melanosome",
  "merkel-cell": "Clinical or pathologic image illustrating merkel cell",
  "microtubule": "Clinical or pathologic image illustrating microtubule",
  "oxidative-phosphorylation": "Inner mitochondrial membrane respiratory chain: complexes I–IV pass electrons to O₂; proton pumping drives ATP synthase (Complex V)",
  "monocyte": "Clinical or pathologic image illustrating monocyte",
  "mrna-translation": "Clinical or pathologic image illustrating mrna translation",
  "mtdna": "Clinical or pathologic image illustrating mtdna",
  "mucosa": "Clinical or pathologic image illustrating mucosa",
  "myeloid-surface-markers": "Clinical or pathologic image illustrating myeloid surface markers",
  "myometrium": "Clinical or pathologic image illustrating myometrium",
  "neural-crest": "Clinical or pathologic image illustrating neural crest",
  "neutrophil": "Clinical or pathologic image illustrating neutrophil",
  "polymerization": "Clinical or pathologic image illustrating polymerization",
  "pre-mrna": "Clinical or pathologic image illustrating pre mrna",
  "serosa": "Clinical or pathologic image illustrating serosa",
  "siderophage": "Clinical or pathologic image illustrating siderophage",
  "stroma": "Clinical or pathologic image illustrating stroma",
  "t-cell-signaling": "Clinical or pathologic image illustrating t cell signaling",
  "t-lymphocyte": "Clinical or pathologic image illustrating t lymphocyte",
  "th2": "Clinical or pathologic image illustrating th2",
  "tight-junction": "Clinical or pathologic image illustrating tight junction",
};

export function getCellImageForId(id: string): string | undefined {
  return CELL_IMAGES[id as CELLImageId];
}

export function getCellImageAttributionForId(
  id: string,
): MediaAttribution | undefined {
  return CELL_IMAGE_ATTRIBUTIONS[id as CELLImageId];
}

export function getCellImageCaptionForId(id: string): string | undefined {
  return CELL_IMAGE_CAPTIONS[id as CELLImageId];
}
