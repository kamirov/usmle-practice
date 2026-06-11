import {
  getAntiarrhythmicAttributionForMedication,
  getAntiarrhythmicClassForMedication,
  getAntiarrhythmicImageForMedication,
} from "../data/antiarrhythmicMedia";
import type { MediaAttribution } from "../data/media";
import { getClinicalStrategyById } from "../data/clinicalStrategies";
import { getConditionById } from "../data/conditions";
import {
  getEcgFindingImageAttributionForId,
  getEcgFindingImageCaptionForId,
  getEcgFindingImageForId,
} from "../data/ecgFindingMedia";
import { getEcgFindingById } from "../data/ecgFindings";
import {
  getHeartMurmurAudioAttributionForId,
  getHeartMurmurAudioCaptionForId,
  getHeartMurmurAudioForId,
} from "../data/heartMurmurMedia";
import { getHeartMurmurById } from "../data/heartMurmurs";
import { getHeartSoundById } from "../data/heartSounds";
import { getProcedureById } from "../data/procedures";
import { getHemodynamicById } from "../data/hemodynamics";
import { getLabValueById } from "../data/labValues";
import { getMedicationById } from "../data/medications";
import { getNephronSegmentById } from "../data/nephron";
import { getOrganById } from "../data/organs";
import { getProteinById } from "../data/proteins";
import { getSignalingById } from "../data/signaling";
import { getSymptomById } from "../data/symptoms";

const CHIP_SELECTOR =
  ".usmle-organ-chip, .usmle-heart-sound-chip, .usmle-heart-murmur-chip, .usmle-hemodynamic-chip, .usmle-symptom-chip, .usmle-medication-chip, .usmle-lab-chip, .usmle-nephron-chip, .usmle-condition-chip, .usmle-protein-chip, .usmle-signaling-chip, .usmle-ecg-chip, .usmle-procedure-chip, .usmle-clinical-strategy-chip";
const POPOVER_AUDIO_SELECTOR = ".usmle-organ-popover__audio";
const POPOVER_CLASS = "usmle-organ-popover";
const HIDE_DELAY_MS = 120;

let popoverEl: HTMLDivElement | null = null;
let hideTimer: ReturnType<typeof setTimeout> | null = null;
let activeChip: HTMLElement | null = null;

function ensurePopover(): HTMLDivElement {
  if (popoverEl) return popoverEl;

  popoverEl = document.createElement("div");
  popoverEl.className = POPOVER_CLASS;
  popoverEl.setAttribute("role", "tooltip");
  popoverEl.hidden = true;

  popoverEl.addEventListener("mouseenter", () => {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
  });

  popoverEl.addEventListener("mouseleave", () => {
    scheduleHide();
  });

  document.body.appendChild(popoverEl);
  return popoverEl;
}

function scheduleHide(): void {
  if (hideTimer) clearTimeout(hideTimer);
  hideTimer = setTimeout(() => {
    hidePopover();
    hideTimer = null;
  }, HIDE_DELAY_MS);
}

function stopPopoverAudio(): void {
  const audio = popoverEl?.querySelector<HTMLAudioElement>(POPOVER_AUDIO_SELECTOR);
  if (!audio) return;
  audio.pause();
  audio.currentTime = 0;
}

function playPopoverAudio(): void {
  const audio = popoverEl?.querySelector<HTMLAudioElement>(POPOVER_AUDIO_SELECTOR);
  if (!audio) return;
  audio.currentTime = 0;
  void audio.play().catch(() => {
    // Autoplay may be blocked until the user has interacted with the page.
  });
}

function hidePopover(): void {
  stopPopoverAudio();
  if (popoverEl) popoverEl.hidden = true;
  activeChip = null;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function positionPopover(chip: HTMLElement, popover: HTMLDivElement): void {
  const rect = chip.getBoundingClientRect();
  const margin = 8;
  popover.style.visibility = "hidden";
  popover.hidden = false;

  const popRect = popover.getBoundingClientRect();
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  let top: number;
  let left: number;

  const fitsRight = rect.right + margin + popRect.width <= vw - margin;
  const fitsLeft = rect.left - margin - popRect.width >= margin;

  if (fitsRight || fitsLeft) {
    left = fitsRight
      ? rect.right + margin
      : rect.left - popRect.width - margin;
    top = clamp(
      rect.top + rect.height / 2 - popRect.height / 2,
      margin,
      vh - popRect.height - margin,
    );
  } else {
    top = rect.bottom + margin;
    if (top + popRect.height > vh - margin) {
      top = rect.top - popRect.height - margin;
    }
    left = clamp(
      rect.left + rect.width / 2 - popRect.width / 2,
      margin,
      vw - popRect.width - margin,
    );
  }

  popover.style.top = `${top}px`;
  popover.style.left = `${left}px`;
  popover.style.visibility = "visible";
}

function renderOrganPopover(organId: string): boolean {
  const organ = getOrganById(organId);
  if (!organ || !popoverEl) return false;

  const derivatives =
    organ.derivatives && organ.derivatives.length > 0
      ? `<ul class="usmle-organ-popover__list">${organ.derivatives
          .map((d) => `<li>${d}</li>`)
          .join("")}</ul>`
      : "";

  popoverEl.innerHTML = `
    <div class="usmle-organ-popover__title">${organ.name}</div>
    <div class="usmle-organ-popover__layer"><strong>Germ layer:</strong> ${organ.germLayer}</div>
    <div class="usmle-organ-popover__origin">${organ.origin}</div>
    ${derivatives}
  `;
  return true;
}

function renderDefinitionPopover(
  title: string,
  titleClass: string,
  definition: string,
  sectionLabel: string,
  items: string[],
): boolean {
  if (!popoverEl) return false;

  const list = `<ul class="usmle-organ-popover__list">${items
    .map((item) => `<li>${item}</li>`)
    .join("")}</ul>`;

  popoverEl.innerHTML = `
    <div class="usmle-organ-popover__title ${titleClass}">${title}</div>
    <div class="usmle-organ-popover__meaning">${definition}</div>
    <div class="usmle-organ-popover__section-label">${sectionLabel}</div>
    ${list}
  `;
  return true;
}

function renderHeartSoundPopover(heartSoundId: string): boolean {
  const sound = getHeartSoundById(heartSoundId);
  if (!sound) return false;

  return renderDefinitionPopover(
    sound.name,
    "usmle-organ-popover__title--heart",
    sound.meaning,
    "Common conditions",
    sound.conditions,
  );
}

function renderHeartMurmurPopover(heartMurmurId: string): boolean {
  const murmur = getHeartMurmurById(heartMurmurId);
  if (!murmur || !popoverEl) return false;

  const audioSrc = getHeartMurmurAudioForId(heartMurmurId);
  const audioCaption = getHeartMurmurAudioCaptionForId(heartMurmurId);
  const audioAttribution = getHeartMurmurAudioAttributionForId(heartMurmurId);

  const list = `<ul class="usmle-organ-popover__list">${murmur.conditions
    .map((item) => `<li>${item}</li>`)
    .join("")}</ul>`;

  const bodyContent = `
    <div class="usmle-organ-popover__title usmle-organ-popover__title--heart">${murmur.name}</div>
    <div class="usmle-organ-popover__meaning">${murmur.meaning}</div>
    <div class="usmle-organ-popover__section-label">Classic associations</div>
    ${list}
    ${murmur.pediatrics ? renderPediatricsSection(murmur.pediatrics) : ""}
  `;

  popoverEl.classList.add("usmle-organ-popover--rich");
  if (audioSrc && audioCaption && audioAttribution) {
    popoverEl.classList.add("usmle-organ-popover--with-media");
    popoverEl.innerHTML = `
      <div class="usmle-organ-popover__layout">
        <div class="usmle-organ-popover__body">${bodyContent}</div>
        ${renderPopoverAudioBlock({
          src: audioSrc,
          caption: audioCaption,
          attribution: audioAttribution,
        })}
      </div>
    `;
  } else {
    popoverEl.innerHTML = bodyContent;
  }
  return true;
}

function renderHemodynamicPopover(hemodynamicId: string): boolean {
  const term = getHemodynamicById(hemodynamicId);
  if (!term) return false;

  return renderDefinitionPopover(
    term.name,
    "usmle-organ-popover__title--hemodynamic",
    term.definition,
    "Factors that affect it",
    term.factors,
  );
}

function renderListSection(label: string, items: string[]): string {
  if (items.length === 0) return "";
  return `
    <div class="usmle-organ-popover__section-label">${label}</div>
    <ul class="usmle-organ-popover__list">${items
      .map((item) => `<li>${item}</li>`)
      .join("")}</ul>
  `;
}

function renderMediaAttribution(attribution: MediaAttribution): string {
  return `
    <div class="usmle-organ-popover__media-attribution">
      <a href="${attribution.url}" target="_blank" rel="noopener noreferrer">${attribution.label}</a>
    </div>
  `;
}

function renderPopoverMediaBlock(options: {
  src: string;
  alt: string;
  caption: string;
  attribution: MediaAttribution;
}): string {
  return `
    <div class="usmle-organ-popover__media">
      <img src="${options.src}" alt="${options.alt}" />
      <div class="usmle-organ-popover__media-caption">${options.caption}</div>
      ${renderMediaAttribution(options.attribution)}
    </div>
  `;
}

function renderPopoverAudioBlock(options: {
  src: string;
  caption: string;
  attribution: MediaAttribution;
}): string {
  return `
    <div class="usmle-organ-popover__media">
      <audio
        class="usmle-organ-popover__audio"
        controls
        autoplay
        preload="auto"
        src="${options.src}"
      ></audio>
      <div class="usmle-organ-popover__media-caption">${options.caption}</div>
      ${renderMediaAttribution(options.attribution)}
    </div>
  `;
}

function renderSymptomPopover(symptomId: string): boolean {
  const symptom = getSymptomById(symptomId);
  if (!symptom || !popoverEl) return false;

  popoverEl.classList.add("usmle-organ-popover--rich");
  popoverEl.innerHTML = `
    <div class="usmle-organ-popover__title usmle-organ-popover__title--symptom">${symptom.name}</div>
    <div class="usmle-organ-popover__meaning">${symptom.definition}</div>
    <div class="usmle-organ-popover__section-label">Mechanism</div>
    <div class="usmle-organ-popover__mechanism">${symptom.mechanism}</div>
    ${renderListSection("Think of", symptom.thinkOf)}
    ${renderListSection("Pair with", symptom.pairWith)}
    ${renderListSection("Distinguish from", symptom.distinguishFrom ?? [])}
  `;
  return true;
}

function renderMedicationPopover(medicationId: string): boolean {
  const medication = getMedicationById(medicationId);
  if (!medication || !popoverEl) return false;

  const antiarrhythmicClass = getAntiarrhythmicClassForMedication(medicationId);
  const actionPotentialImage = getAntiarrhythmicImageForMedication(medicationId);
  const actionPotentialAttribution =
    getAntiarrhythmicAttributionForMedication(medicationId);

  const bodyContent = `
    <div class="usmle-organ-popover__title usmle-organ-popover__title--medication">${medication.name}</div>
    <div class="usmle-organ-popover__layer"><strong>Class:</strong> ${medication.drugClass}</div>
    <div class="usmle-organ-popover__section-label">Mechanism</div>
    <div class="usmle-organ-popover__mechanism">${medication.mechanism}</div>
    ${renderListSection("Indications", medication.indications)}
    ${renderListSection("Adverse effects", medication.adverseEffects)}
    ${renderListSection("Boards pearls", medication.boardsPearls)}
  `;

  popoverEl.classList.add("usmle-organ-popover--rich");
  if (actionPotentialImage && antiarrhythmicClass && actionPotentialAttribution) {
    popoverEl.classList.add("usmle-organ-popover--with-media");
    popoverEl.innerHTML = `
      <div class="usmle-organ-popover__layout">
        <div class="usmle-organ-popover__body">${bodyContent}</div>
        ${renderPopoverMediaBlock({
          src: actionPotentialImage,
          alt: `Class ${antiarrhythmicClass} action potential effect`,
          caption: `Class ${antiarrhythmicClass}`,
          attribution: actionPotentialAttribution,
        })}
      </div>
    `;
  } else {
    popoverEl.innerHTML = bodyContent;
  }
  return true;
}

function renderLabValuePopover(labValueId: string): boolean {
  const lab = getLabValueById(labValueId);
  if (!lab || !popoverEl) return false;

  popoverEl.classList.add("usmle-organ-popover--rich");
  popoverEl.innerHTML = `
    <div class="usmle-organ-popover__title usmle-organ-popover__title--lab">${lab.name}</div>
    <div class="usmle-organ-popover__meaning">${lab.measures}</div>
    <div class="usmle-organ-popover__layer"><strong>Normal range:</strong> ${lab.normalRange}</div>
    ${renderListSection("↑ Causes", lab.increasedCauses)}
    ${renderListSection("↓ Causes", lab.decreasedCauses)}
    ${renderListSection("Pair with", lab.pairWith ?? [])}
    ${renderListSection("Boards pearls", lab.boardsPearls)}
  `;
  return true;
}

function renderNephronPopover(nephronSegmentId: string): boolean {
  const segment = getNephronSegmentById(nephronSegmentId);
  if (!segment || !popoverEl) return false;

  popoverEl.classList.add("usmle-organ-popover--rich");
  popoverEl.innerHTML = `
    <div class="usmle-organ-popover__title usmle-organ-popover__title--nephron">${segment.name}</div>
    <div class="usmle-organ-popover__section-label">Function</div>
    <div class="usmle-organ-popover__mechanism">${segment.function}</div>
    ${renderListSection("Reabsorbs", segment.reabsorbs)}
    ${renderListSection("Secretes", segment.secretes)}
    ${renderListSection("Boards pearls", segment.boardsPearls)}
  `;
  return true;
}

function renderPediatricsSection(note: string): string {
  return `
    <div class="usmle-organ-popover__section-label">Pediatrics</div>
    <div class="usmle-organ-popover__mechanism">${note}</div>
  `;
}

function renderConditionPopover(conditionId: string): boolean {
  const condition = getConditionById(conditionId);
  if (!condition || !popoverEl) return false;

  popoverEl.classList.add("usmle-organ-popover--rich");
  popoverEl.innerHTML = `
    <div class="usmle-organ-popover__title usmle-organ-popover__title--condition">${condition.name}</div>
    <div class="usmle-organ-popover__meaning">${condition.definition}</div>
    <div class="usmle-organ-popover__section-label">Pathophysiology</div>
    <div class="usmle-organ-popover__mechanism">${condition.pathophysiology}</div>
    ${renderListSection("Classic presentation", condition.classicPresentation)}
    ${renderListSection("Key findings", condition.keyFindings ?? [])}
    ${renderListSection("Key labs", condition.keyLabs ?? [])}
    ${renderListSection("Associations", condition.associations ?? [])}
    ${renderListSection("Complications", condition.complications ?? [])}
    ${renderListSection("Distinguish from", condition.distinguishFrom ?? [])}
    ${renderListSection("Treatment", condition.treatment)}
    ${renderListSection("Boards pearls", condition.boardsPearls)}
    ${condition.pediatrics ? renderPediatricsSection(condition.pediatrics) : ""}
  `;
  return true;
}

function renderEcgFindingPopover(ecgFindingId: string): boolean {
  const finding = getEcgFindingById(ecgFindingId);
  if (!finding || !popoverEl) return false;

  const imageSrc = getEcgFindingImageForId(ecgFindingId);
  const imageCaption = getEcgFindingImageCaptionForId(ecgFindingId);
  const imageAttribution = getEcgFindingImageAttributionForId(ecgFindingId);

  const bodyContent = `
    <div class="usmle-organ-popover__title usmle-organ-popover__title--ecg">${finding.name}</div>
    <div class="usmle-organ-popover__meaning">${finding.interpretation}</div>
    <div class="usmle-organ-popover__layer"><strong>Territory:</strong> ${finding.territory}</div>
    ${renderListSection("Think of", finding.thinkOf)}
    ${renderListSection("Distinguish from", finding.distinguishFrom ?? [])}
    ${renderListSection("Boards pearls", finding.boardsPearls)}
    ${finding.pediatrics ? renderPediatricsSection(finding.pediatrics) : ""}
  `;

  popoverEl.classList.add("usmle-organ-popover--rich");
  if (imageSrc && imageCaption && imageAttribution) {
    popoverEl.classList.add("usmle-organ-popover--with-media");
    popoverEl.innerHTML = `
      <div class="usmle-organ-popover__layout">
        <div class="usmle-organ-popover__body">${bodyContent}</div>
        ${renderPopoverMediaBlock({
          src: imageSrc,
          alt: `${finding.name} ECG example`,
          caption: imageCaption,
          attribution: imageAttribution,
        })}
      </div>
    `;
  } else {
    popoverEl.innerHTML = bodyContent;
  }
  return true;
}

function renderClinicalStrategyPopover(clinicalStrategyId: string): boolean {
  const strategy = getClinicalStrategyById(clinicalStrategyId);
  if (!strategy || !popoverEl) return false;

  popoverEl.classList.add("usmle-organ-popover--rich");
  popoverEl.innerHTML = `
    <div class="usmle-organ-popover__title usmle-organ-popover__title--clinical-strategy">${strategy.name}</div>
    <div class="usmle-organ-popover__meaning">${strategy.definition}</div>
    ${renderListSection("Key points", strategy.details)}
    ${renderListSection("Boards pearls", strategy.boardsPearls)}
    ${strategy.pediatrics ? renderPediatricsSection(strategy.pediatrics) : ""}
  `;
  return true;
}

function renderProcedurePopover(procedureId: string): boolean {
  const procedure = getProcedureById(procedureId);
  if (!procedure || !popoverEl) return false;

  popoverEl.classList.add("usmle-organ-popover--rich");
  popoverEl.innerHTML = `
    <div class="usmle-organ-popover__title usmle-organ-popover__title--procedure">${procedure.name}</div>
    <div class="usmle-organ-popover__meaning">${procedure.definition}</div>
    ${renderListSection("Indications", procedure.indications)}
    ${renderListSection("Key measurements", procedure.keyMeasurements ?? [])}
    ${renderListSection("Complications", procedure.complications)}
    ${renderListSection("Boards pearls", procedure.boardsPearls)}
    ${procedure.pediatrics ? renderPediatricsSection(procedure.pediatrics) : ""}
  `;
  return true;
}

function renderSignalingPopover(signalingId: string): boolean {
  const molecule = getSignalingById(signalingId);
  if (!molecule || !popoverEl) return false;

  const meta = [
    `<strong>Type:</strong> ${molecule.type}`,
    molecule.source ? `<strong>Source:</strong> ${molecule.source}` : "",
    molecule.receptor ? `<strong>Receptor:</strong> ${molecule.receptor}` : "",
  ]
    .filter(Boolean)
    .join(" · ");

  popoverEl.classList.add("usmle-organ-popover--rich");
  popoverEl.innerHTML = `
    <div class="usmle-organ-popover__title usmle-organ-popover__title--signaling">${molecule.name}</div>
    ${meta ? `<div class="usmle-organ-popover__layer">${meta}</div>` : ""}
    <div class="usmle-organ-popover__section-label">Function</div>
    <div class="usmle-organ-popover__mechanism">${molecule.function}</div>
    ${renderListSection("Clinical relevance", molecule.clinicalRelevance)}
    ${renderListSection("Distinguish from", molecule.distinguishFrom ?? [])}
    ${renderListSection("Boards pearls", molecule.boardsPearls)}
    ${molecule.pediatrics ? renderPediatricsSection(molecule.pediatrics) : ""}
  `;
  return true;
}

function renderProteinPopover(proteinId: string): boolean {
  const protein = getProteinById(proteinId);
  if (!protein || !popoverEl) return false;

  const meta = [
    protein.gene ? `<strong>Gene:</strong> ${protein.gene}` : "",
    protein.location ? `<strong>Location:</strong> ${protein.location}` : "",
  ]
    .filter(Boolean)
    .join(" · ");

  popoverEl.classList.add("usmle-organ-popover--rich");
  popoverEl.innerHTML = `
    <div class="usmle-organ-popover__title usmle-organ-popover__title--protein">${protein.name}</div>
    ${meta ? `<div class="usmle-organ-popover__layer">${meta}</div>` : ""}
    <div class="usmle-organ-popover__section-label">Function</div>
    <div class="usmle-organ-popover__mechanism">${protein.function}</div>
    ${renderListSection("Mutation causes", protein.mutationCauses)}
    ${renderListSection("Distinguish from", protein.distinguishFrom ?? [])}
    ${renderListSection("Boards pearls", protein.boardsPearls)}
  `;
  return true;
}

function showPopover(chip: HTMLElement): void {
  const organId = chip.dataset.organId;
  const heartSoundId = chip.dataset.heartSoundId;
  const heartMurmurId = chip.dataset.heartMurmurId;
  const hemodynamicId = chip.dataset.hemodynamicId;
  const symptomId = chip.dataset.symptomId;
  const medicationId = chip.dataset.medicationId;
  const labValueId = chip.dataset.labValueId;
  const nephronSegmentId = chip.dataset.nephronSegmentId;
  const conditionId = chip.dataset.conditionId;
  const proteinId = chip.dataset.proteinId;
  const signalingId = chip.dataset.signalingId;
  const ecgFindingId = chip.dataset.ecgFindingId;
  const procedureId = chip.dataset.procedureId;
  const clinicalStrategyId = chip.dataset.clinicalStrategyId;
  if (
    !organId &&
    !heartSoundId &&
    !heartMurmurId &&
    !hemodynamicId &&
    !symptomId &&
    !medicationId &&
    !labValueId &&
    !nephronSegmentId &&
    !conditionId &&
    !proteinId &&
    !signalingId &&
    !ecgFindingId &&
    !procedureId &&
    !clinicalStrategyId
  )
    return;

  if (hideTimer) {
    clearTimeout(hideTimer);
    hideTimer = null;
  }

  const popover = ensurePopover();
  popover.classList.remove(
    "usmle-organ-popover--rich",
    "usmle-organ-popover--with-media",
  );
  const rendered = organId
    ? renderOrganPopover(organId)
    : heartSoundId
      ? renderHeartSoundPopover(heartSoundId)
      : heartMurmurId
        ? renderHeartMurmurPopover(heartMurmurId)
        : hemodynamicId
        ? renderHemodynamicPopover(hemodynamicId)
        : symptomId
          ? renderSymptomPopover(symptomId)
          : medicationId
            ? renderMedicationPopover(medicationId)
            : labValueId
              ? renderLabValuePopover(labValueId)
              : nephronSegmentId
                ? renderNephronPopover(nephronSegmentId)
                : conditionId
                  ? renderConditionPopover(conditionId)
                  : proteinId
                    ? renderProteinPopover(proteinId)
                    : signalingId
                      ? renderSignalingPopover(signalingId)
                      : ecgFindingId
                        ? renderEcgFindingPopover(ecgFindingId)
                        : procedureId
                          ? renderProcedurePopover(procedureId)
                          : renderClinicalStrategyPopover(clinicalStrategyId!);
  if (!rendered) return;

  activeChip = chip;
  positionPopover(chip, popover);
  playPopoverAudio();
}

export function startPopoverController(): void {
  document.addEventListener(
    "mouseover",
    (event) => {
      const target = (event.target as Element | null)?.closest(
        CHIP_SELECTOR,
      ) as HTMLElement | null;
      if (!target) return;
      showPopover(target);
    },
    true,
  );

  document.addEventListener(
    "mouseout",
    (event) => {
      const related = event.relatedTarget as Node | null;
      const from = (event.target as Element | null)?.closest(
        CHIP_SELECTOR,
      ) as HTMLElement | null;
      if (!from || from !== activeChip) return;
      if (related && (from.contains(related) || popoverEl?.contains(related)))
        return;
      scheduleHide();
    },
    true,
  );

  window.addEventListener("scroll", () => {
    if (activeChip && popoverEl && !popoverEl.hidden) {
      positionPopover(activeChip, popoverEl);
    }
  }, true);

  window.addEventListener("resize", () => {
    if (activeChip && popoverEl && !popoverEl.hidden) {
      positionPopover(activeChip, popoverEl);
    }
  });
}
