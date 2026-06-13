import {
  getAntiarrhythmicAttributionForMedication,
  getAntiarrhythmicClassForMedication,
  getAntiarrhythmicImageForMedication,
} from "../data/antiarrhythmicMedia";
import type { MediaAttribution } from "../data/media";
import { getCellById } from "../data/cells";
import {
  getCellImageAttributionForId,
  getCellImageCaptionForId,
  getCellImageForId,
} from "../data/cellsMedia";
import { getClinicalStrategyById } from "../data/clinicalStrategies";
import { getConditionById } from "../data/conditions";
import {
  getConditionImageAttributionForId,
  getConditionImageCaptionForId,
  getConditionImageForId,
} from "../data/conditionsMedia";
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
import { getPathogenesisById } from "../data/pathogenesis";
import { getProcedureById } from "../data/procedures";
import { getHemodynamicById } from "../data/hemodynamics";
import { getLabValueById } from "../data/labValues";
import {
  getLabValueImageAttributionForId,
  getLabValueImageCaptionForId,
  getLabValueImageForId,
} from "../data/labValueMedia";
import { getMicrobiologyById } from "../data/microbiology";
import {
  getMicrobiologyImageAttributionForId,
  getMicrobiologyImageCaptionForId,
  getMicrobiologyImageForId,
} from "../data/microbiologyMedia";
import { getMedicationById } from "../data/medications";
import {
  getMedicationImageAttributionForId,
  getMedicationImageCaptionForId,
  getMedicationImageForId,
} from "../data/medicationMedia";
import { getMusculoskeletalById } from "../data/musculoskeletal";
import {
  getMusculoskeletalImageAttributionForId,
  getMusculoskeletalImageCaptionForId,
  getMusculoskeletalImageForId,
} from "../data/musculoskeletalMedia";
import { getNephronSegmentById } from "../data/nephron";
import { getOrganById } from "../data/organs";
import {
  getOrganImageAttributionForId,
  getOrganImageCaptionForId,
  getOrganImageForId,
} from "../data/organMedia";
import { getProteinById } from "../data/proteins";
import {
  getProteinImageAttributionForId,
  getProteinImageCaptionForId,
  getProteinImageForId,
} from "../data/proteinMedia";
import { getSignalingById } from "../data/signaling";
import {
  getSymptomImageAttributionForId,
  getSymptomImageCaptionForId,
  getSymptomImageForId,
} from "../data/symptomMedia";
import { getSymptomById } from "../data/symptoms";
import { scanPopoverRoot } from "./organScanner";
import { renderPopoverTitle, type PopoverCategory } from "./popoverIcons";

const CHIP_SELECTOR =
  ".usmle-organ-chip, .usmle-heart-sound-chip, .usmle-heart-murmur-chip, .usmle-hemodynamic-chip, .usmle-symptom-chip, .usmle-medication-chip, .usmle-lab-chip, .usmle-nephron-chip, .usmle-condition-chip, .usmle-protein-chip, .usmle-signaling-chip, .usmle-ecg-chip, .usmle-procedure-chip, .usmle-clinical-strategy-chip, .usmle-cell-chip, .usmle-pathogenesis-chip, .usmle-microbiology-chip, .usmle-musculoskeletal-chip";
const POPOVER_AUDIO_SELECTOR = ".usmle-organ-popover__audio";
const POPOVER_CLASS = "usmle-organ-popover";
const HIDE_DELAY_MS = 120;
const STACK_OFFSET_PX = 14;

let hideTimer: ReturnType<typeof setTimeout> | null = null;

interface PopoverEntry {
  chip: HTMLElement;
  popover: HTMLDivElement;
}

const popoverStack: PopoverEntry[] = [];

function createPopover(): HTMLDivElement {
  const popover = document.createElement("div");
  popover.className = POPOVER_CLASS;
  popover.setAttribute("role", "tooltip");
  popover.hidden = true;

  popover.addEventListener("mouseenter", () => {
    clearScheduledHide();
  });

  popover.addEventListener("mouseleave", (event) => {
    if (isPointerInsideStack(event.relatedTarget as Node | null)) return;
    scheduleHide();
  });

  document.body.appendChild(popover);
  return popover;
}

function scheduleHide(): void {
  if (hideTimer) clearTimeout(hideTimer);
  hideTimer = setTimeout(() => {
    hideAllPopovers();
    hideTimer = null;
  }, HIDE_DELAY_MS);
}

function clearScheduledHide(): void {
  if (!hideTimer) return;
  clearTimeout(hideTimer);
  hideTimer = null;
}

function stopPopoverAudio(popover: HTMLDivElement): void {
  const audio = popover.querySelector<HTMLAudioElement>(POPOVER_AUDIO_SELECTOR);
  if (!audio) return;
  audio.pause();
  audio.currentTime = 0;
}

function playPopoverAudio(popover: HTMLDivElement): void {
  const audio = popover.querySelector<HTMLAudioElement>(POPOVER_AUDIO_SELECTOR);
  if (!audio) return;
  audio.currentTime = 0;
  void audio.play().catch(() => {
    // Autoplay may be blocked until the user has interacted with the page.
  });
}

function removePopoverEntry(entry: PopoverEntry): void {
  stopPopoverAudio(entry.popover);
  entry.popover.remove();
}

function hideAllPopovers(): void {
  for (let i = popoverStack.length - 1; i >= 0; i--) {
    removePopoverEntry(popoverStack[i]!);
  }
  popoverStack.length = 0;
}

function popLastPopover(): void {
  const entry = popoverStack.pop();
  if (!entry) return;
  removePopoverEntry(entry);
}

function closePopoversAfter(popover: HTMLDivElement): void {
  const index = popoverStack.findIndex((entry) => entry.popover === popover);
  if (index === -1) {
    hideAllPopovers();
    return;
  }

  while (popoverStack.length > index + 1) {
    popLastPopover();
  }
}

function isPointerInsideStack(node: Node | null): boolean {
  if (!node) return false;
  return popoverStack.some(
    (entry) => entry.popover.contains(node) || entry.chip.contains(node),
  );
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

const WIDE_POPOVER_MIN_SECTIONS = 5;

function preparePopoverForDisplay(popover: HTMLDivElement): void {
  popover.scrollTop = 0;
  popover.classList.remove("usmle-organ-popover--wide");

  if (
    !popover.classList.contains("usmle-organ-popover--rich") ||
    popover.classList.contains("usmle-organ-popover--with-media")
  ) {
    return;
  }

  const sectionCount = popover.querySelectorAll(
    ".usmle-organ-popover__section",
  ).length;
  if (sectionCount >= WIDE_POPOVER_MIN_SECTIONS) {
    popover.classList.add("usmle-organ-popover--wide");
  }
}

function positionPopover(chip: HTMLElement, popover: HTMLDivElement): void {
  const rect = chip.getBoundingClientRect();
  const margin = 8;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const maxHeight = vh - 2 * margin;

  popover.style.maxHeight = `${maxHeight}px`;
  popover.style.visibility = "hidden";
  popover.hidden = false;

  const popRect = popover.getBoundingClientRect();

  let top: number;
  let left: number;

  const fitsRight = rect.right + margin + popRect.width <= vw - margin;
  const fitsLeft = rect.left - margin - popRect.width >= margin;

  if (fitsRight || fitsLeft) {
    left = fitsRight
      ? rect.right + margin
      : rect.left - popRect.width - margin;
    top = rect.top + rect.height / 2 - popRect.height / 2;
  } else {
    top = rect.bottom + margin;
    if (top + popRect.height > vh - margin) {
      const aboveTop = rect.top - popRect.height - margin;
      top = aboveTop >= margin ? aboveTop : margin;
    }
    left = rect.left + rect.width / 2 - popRect.width / 2;
  }

  top = clamp(top, margin, Math.max(margin, vh - popRect.height - margin));
  left = clamp(left, margin, Math.max(margin, vw - popRect.width - margin));

  popover.style.top = `${top}px`;
  popover.style.left = `${left}px`;
  popover.style.visibility = "visible";
}

function positionStackedPopover(
  previousPopover: HTMLDivElement,
  popover: HTMLDivElement,
): void {
  const rect = previousPopover.getBoundingClientRect();
  const margin = 8;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const maxHeight = vh - 2 * margin;

  popover.style.maxHeight = `${maxHeight}px`;
  popover.style.visibility = "hidden";
  popover.hidden = false;

  const popRect = popover.getBoundingClientRect();
  const top = clamp(
    rect.top + STACK_OFFSET_PX,
    margin,
    Math.max(margin, vh - popRect.height - margin),
  );
  const left = clamp(
    rect.left + STACK_OFFSET_PX,
    margin,
    Math.max(margin, vw - popRect.width - margin),
  );

  popover.style.top = `${top}px`;
  popover.style.left = `${left}px`;
  popover.style.visibility = "visible";
}

function repositionPopoverStackFrom(index: number): void {
  for (let i = Math.max(0, index); i < popoverStack.length; i++) {
    const entry = popoverStack[i]!;
    if (i === 0) {
      positionPopover(entry.chip, entry.popover);
      continue;
    }
    positionStackedPopover(popoverStack[i - 1]!.popover, entry.popover);
  }
}

function bindPopoverImageReposition(
  entry: PopoverEntry,
  popover: HTMLDivElement,
): void {
  for (const img of popover.querySelectorAll<HTMLImageElement>("img")) {
    if (img.complete) continue;
    img.addEventListener(
      "load",
      () => {
        const index = popoverStack.indexOf(entry);
        if (index === -1 || popover.hidden) return;
        repositionPopoverStackFrom(index);
      },
      { once: true },
    );
  }
}

function renderOrganPopover(organId: string, popover: HTMLDivElement): boolean {
  const organ = getOrganById(organId);
  if (!organ || !popover) return false;

  const imageSrc = getOrganImageForId(organId);
  const imageCaption = getOrganImageCaptionForId(organId);
  const imageAttribution = getOrganImageAttributionForId(organId);
  const derivatives =
    organ.derivatives && organ.derivatives.length > 0
      ? renderListSection("Derivatives", organ.derivatives)
      : "";

  const bodyContent = renderRichPopoverContent(
    `
    ${renderPopoverTitle(organ.name, "organ", organ.etymology)}
    <div class="usmle-organ-popover__layer"><strong>Germ layer:</strong> ${organ.germLayer}</div>
    <div class="usmle-organ-popover__origin">${organ.origin}</div>
    ${derivatives}
    ${organ.functionSummary ? `<div class="usmle-organ-popover__section-label">Function</div><div class="usmle-organ-popover__mechanism">${organ.functionSummary}</div>` : ""}
    ${organ.pediatrics ? renderPediatricsSection(organ.pediatrics) : ""}
  `,
    `
    ${renderListSection("Common pathologies", organ.commonPathologies ?? [])}
    ${renderListSection("Step 1 pearls", organ.step1Pearls ?? [])}
  `,
  );
  popover.classList.add("usmle-organ-popover--rich");
  if (imageSrc && imageCaption && imageAttribution) {
    popover.classList.add("usmle-organ-popover--with-media");
    popover.innerHTML = `
      <div class="usmle-organ-popover__layout">
        <div class="usmle-organ-popover__body">${bodyContent}</div>
        ${renderPopoverMediaBlock({
          src: imageSrc,
          alt: `${organ.name} image`,
          caption: imageCaption,
          attribution: imageAttribution,
        })}
      </div>
    `;
  } else {
    popover.innerHTML = bodyContent;
  }
  return true;
}

function renderDefinitionPopover(
  popover: HTMLDivElement,
  title: string,
  category: PopoverCategory,
  definition: string,
  sectionLabel: string,
  items: string[],
  etymology?: string,
): boolean {
  if (!popover) return false;

  const list = `<ul class="usmle-organ-popover__list">${items
    .map((item) => `<li>${item}</li>`)
    .join("")}</ul>`;

  popover.innerHTML = `
    ${renderPopoverTitle(title, category, etymology)}
    <div class="usmle-organ-popover__meaning">${definition}</div>
    <div class="usmle-organ-popover__section-label">${sectionLabel}</div>
    ${list}
  `;
  return true;
}

function renderHeartSoundPopover(heartSoundId: string, popover: HTMLDivElement): boolean {
  const sound = getHeartSoundById(heartSoundId);
  if (!sound) return false;

  return renderDefinitionPopover(
    popover,
    sound.name,
    "heart-sound",
    sound.meaning,
    "Common conditions",
    sound.conditions,
    sound.etymology,
  );
}

function renderHeartMurmurPopover(heartMurmurId: string, popover: HTMLDivElement): boolean {
  const murmur = getHeartMurmurById(heartMurmurId);
  if (!murmur || !popover) return false;

  const audioSrc = getHeartMurmurAudioForId(heartMurmurId);
  const audioCaption = getHeartMurmurAudioCaptionForId(heartMurmurId);
  const audioAttribution = getHeartMurmurAudioAttributionForId(heartMurmurId);

  const header = `
    ${renderPopoverTitle(murmur.name, "heart-murmur", murmur.etymology)}
    <div class="usmle-organ-popover__meaning">${murmur.meaning}</div>
  `;
  const sections = `
    ${renderListSection("Classic associations", murmur.conditions)}
    ${murmur.pediatrics ? renderPediatricsSection(murmur.pediatrics) : ""}
  `;
  const bodyContent = renderRichPopoverContent(header, sections);

  popover.classList.add("usmle-organ-popover--rich");
  if (audioSrc && audioCaption && audioAttribution) {
    popover.classList.add("usmle-organ-popover--with-media");
    popover.innerHTML = `
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
    popover.innerHTML = bodyContent;
  }
  return true;
}

function renderHemodynamicPopover(hemodynamicId: string, popover: HTMLDivElement): boolean {
  const term = getHemodynamicById(hemodynamicId);
  if (!term) return false;

  return renderDefinitionPopover(
    popover,
    term.name,
    "hemodynamic",
    term.definition,
    "Factors that affect it",
    term.factors,
    term.etymology,
  );
}

function renderListSection(label: string, items: string[]): string {
  if (items.length === 0) return "";
  return `
    <div class="usmle-organ-popover__section">
      <div class="usmle-organ-popover__section-label">${label}</div>
      <ul class="usmle-organ-popover__list">${items
        .map((item) => `<li>${item}</li>`)
        .join("")}</ul>
    </div>
  `;
}

function renderRichPopoverContent(header: string, sections: string): string {
  const wrappedSections = sections.trim()
    ? `<div class="usmle-organ-popover__sections">${sections}</div>`
    : "";
  return `${header}${wrappedSections}`;
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

function renderSymptomPopover(symptomId: string, popover: HTMLDivElement): boolean {
  const symptom = getSymptomById(symptomId);
  if (!symptom || !popover) return false;

  const imageSrc = getSymptomImageForId(symptomId);
  const imageCaption = getSymptomImageCaptionForId(symptomId);
  const imageAttribution = getSymptomImageAttributionForId(symptomId);

  const bodyContent = renderRichPopoverContent(
    `
    ${renderPopoverTitle(symptom.name, "symptom", symptom.etymology)}
    <div class="usmle-organ-popover__meaning">${symptom.definition}</div>
    <div class="usmle-organ-popover__section-label">Mechanism</div>
    <div class="usmle-organ-popover__mechanism">${symptom.mechanism}</div>
    ${symptom.pediatrics ? renderPediatricsSection(symptom.pediatrics) : ""}
  `,
    `
    ${renderListSection("Think of", symptom.thinkOf)}
    ${renderListSection("Pair with", symptom.pairWith)}
    ${renderListSection("Distinguish from", symptom.distinguishFrom ?? [])}
  `,
  );

  popover.classList.add("usmle-organ-popover--rich");
  if (imageSrc && imageCaption && imageAttribution) {
    popover.classList.add("usmle-organ-popover--with-media");
    popover.innerHTML = `
      <div class="usmle-organ-popover__layout">
        <div class="usmle-organ-popover__body">${bodyContent}</div>
        ${renderPopoverMediaBlock({
          src: imageSrc,
          alt: `${symptom.name} clinical photo`,
          caption: imageCaption,
          attribution: imageAttribution,
        })}
      </div>
    `;
  } else {
    popover.innerHTML = bodyContent;
  }
  return true;
}

function renderMedicationPopover(medicationId: string, popover: HTMLDivElement): boolean {
  const medication = getMedicationById(medicationId);
  if (!medication || !popover) return false;

  const antiarrhythmicClass = getAntiarrhythmicClassForMedication(medicationId);
  const actionPotentialImage = getAntiarrhythmicImageForMedication(medicationId);
  const actionPotentialAttribution =
    getAntiarrhythmicAttributionForMedication(medicationId);
  const imageSrc = getMedicationImageForId(medicationId);
  const imageCaption = getMedicationImageCaptionForId(medicationId);
  const imageAttribution = getMedicationImageAttributionForId(medicationId);

  const bodyContent = renderRichPopoverContent(
    `
    ${renderPopoverTitle(medication.name, "medication", medication.etymology)}
    <div class="usmle-organ-popover__layer"><strong>Class:</strong> ${medication.drugClass}</div>
    <div class="usmle-organ-popover__section-label">Mechanism</div>
    <div class="usmle-organ-popover__mechanism">${medication.mechanism}</div>
  `,
    `
    ${renderListSection("Indications", medication.indications)}
    ${renderListSection("Adverse effects", medication.adverseEffects)}
    ${renderListSection("Boards pearls", medication.boardsPearls)}
  `,
  );

  popover.classList.add("usmle-organ-popover--rich");
  if (actionPotentialImage && antiarrhythmicClass && actionPotentialAttribution) {
    popover.classList.add("usmle-organ-popover--with-media");
    popover.innerHTML = `
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
  } else if (imageSrc && imageCaption && imageAttribution) {
    popover.classList.add("usmle-organ-popover--with-media");
    popover.innerHTML = `
      <div class="usmle-organ-popover__layout">
        <div class="usmle-organ-popover__body">${bodyContent}</div>
        ${renderPopoverMediaBlock({
          src: imageSrc,
          alt: `${medication.name} image`,
          caption: imageCaption,
          attribution: imageAttribution,
        })}
      </div>
    `;
  } else {
    popover.innerHTML = bodyContent;
  }
  return true;
}

function renderLabValuePopover(labValueId: string, popover: HTMLDivElement): boolean {
  const lab = getLabValueById(labValueId);
  if (!lab || !popover) return false;

  const imageSrc = getLabValueImageForId(labValueId);
  const imageCaption = getLabValueImageCaptionForId(labValueId);
  const imageAttribution = getLabValueImageAttributionForId(labValueId);
  const bodyContent = renderRichPopoverContent(
    `
    ${renderPopoverTitle(lab.name, "lab", lab.etymology)}
    <div class="usmle-organ-popover__meaning">${lab.measures}</div>
    <div class="usmle-organ-popover__layer"><strong>Normal range:</strong> ${lab.normalRange}</div>
  `,
    `
    ${renderListSection("↑ Causes", lab.increasedCauses)}
    ${renderListSection("↓ Causes", lab.decreasedCauses)}
    ${renderListSection("Pair with", lab.pairWith ?? [])}
    ${renderListSection("Boards pearls", lab.boardsPearls)}
  `,
  );

  popover.classList.add("usmle-organ-popover--rich");
  if (imageSrc && imageCaption && imageAttribution) {
    popover.classList.add("usmle-organ-popover--with-media");
    popover.innerHTML = `
      <div class="usmle-organ-popover__layout">
        <div class="usmle-organ-popover__body">${bodyContent}</div>
        ${renderPopoverMediaBlock({
          src: imageSrc,
          alt: `${lab.name} diagram`,
          caption: imageCaption,
          attribution: imageAttribution,
        })}
      </div>
    `;
  } else {
    popover.innerHTML = bodyContent;
  }
  return true;
}

function renderNephronPopover(nephronSegmentId: string, popover: HTMLDivElement): boolean {
  const segment = getNephronSegmentById(nephronSegmentId);
  if (!segment || !popover) return false;

  popover.classList.add("usmle-organ-popover--rich");
  popover.innerHTML = renderRichPopoverContent(
    `
    ${renderPopoverTitle(segment.name, "nephron", segment.etymology)}
    <div class="usmle-organ-popover__section-label">Function</div>
    <div class="usmle-organ-popover__mechanism">${segment.function}</div>
  `,
    `
    ${renderListSection("Reabsorbs", segment.reabsorbs)}
    ${renderListSection("Secretes", segment.secretes)}
    ${renderListSection("Boards pearls", segment.boardsPearls)}
  `,
  );
  return true;
}

function renderPediatricsSection(note: string): string {
  return `
    <div class="usmle-organ-popover__section">
      <div class="usmle-organ-popover__section-label">Pediatrics</div>
      <div class="usmle-organ-popover__mechanism">${note}</div>
    </div>
  `;
}

function renderConditionPopover(conditionId: string, popover: HTMLDivElement): boolean {
  const condition = getConditionById(conditionId);
  if (!condition || !popover) return false;

  const imageSrc = getConditionImageForId(conditionId);
  const imageCaption = getConditionImageCaptionForId(conditionId);
  const imageAttribution = getConditionImageAttributionForId(conditionId);

  const bodyContent = renderRichPopoverContent(
    `
    ${renderPopoverTitle(condition.name, "condition", condition.etymology)}
    <div class="usmle-organ-popover__meaning">${condition.definition}</div>
    <div class="usmle-organ-popover__section-label">Pathophysiology</div>
    <div class="usmle-organ-popover__mechanism">${condition.pathophysiology}</div>
  `,
    `
    ${renderListSection("Classic presentation", condition.classicPresentation)}
    ${renderListSection("Key findings", condition.keyFindings ?? [])}
    ${renderListSection("Key labs", condition.keyLabs ?? [])}
    ${renderListSection("Associations", condition.associations ?? [])}
    ${renderListSection("Complications", condition.complications ?? [])}
    ${renderListSection("Distinguish from", condition.distinguishFrom ?? [])}
    ${renderListSection("Treatment", condition.treatment)}
    ${renderListSection("Boards pearls", condition.boardsPearls)}
    ${condition.pediatrics ? renderPediatricsSection(condition.pediatrics) : ""}
  `,
  );

  popover.classList.add("usmle-organ-popover--rich");
  if (imageSrc && imageCaption && imageAttribution) {
    popover.classList.add("usmle-organ-popover--with-media");
    popover.innerHTML = `
      <div class="usmle-organ-popover__layout">
        <div class="usmle-organ-popover__body">${bodyContent}</div>
        ${renderPopoverMediaBlock({
          src: imageSrc,
          alt: `${condition.name} histology`,
          caption: imageCaption,
          attribution: imageAttribution,
        })}
      </div>
    `;
  } else {
    popover.innerHTML = bodyContent;
  }
  return true;
}

function renderEcgFindingPopover(ecgFindingId: string, popover: HTMLDivElement): boolean {
  const finding = getEcgFindingById(ecgFindingId);
  if (!finding || !popover) return false;

  const imageSrc = getEcgFindingImageForId(ecgFindingId);
  const imageCaption = getEcgFindingImageCaptionForId(ecgFindingId);
  const imageAttribution = getEcgFindingImageAttributionForId(ecgFindingId);

  const bodyContent = renderRichPopoverContent(
    `
    ${renderPopoverTitle(finding.name, "ecg", finding.etymology)}
    <div class="usmle-organ-popover__meaning">${finding.interpretation}</div>
    <div class="usmle-organ-popover__layer"><strong>Territory:</strong> ${finding.territory}</div>
  `,
    `
    ${renderListSection("Think of", finding.thinkOf)}
    ${renderListSection("Distinguish from", finding.distinguishFrom ?? [])}
    ${renderListSection("Boards pearls", finding.boardsPearls)}
    ${finding.pediatrics ? renderPediatricsSection(finding.pediatrics) : ""}
  `,
  );

  popover.classList.add("usmle-organ-popover--rich");
  if (imageSrc && imageCaption && imageAttribution) {
    popover.classList.add("usmle-organ-popover--with-media");
    popover.innerHTML = `
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
    popover.innerHTML = bodyContent;
  }
  return true;
}

function renderClinicalStrategyPopover(clinicalStrategyId: string, popover: HTMLDivElement): boolean {
  const strategy = getClinicalStrategyById(clinicalStrategyId);
  if (!strategy || !popover) return false;

  popover.classList.add("usmle-organ-popover--rich");
  popover.innerHTML = renderRichPopoverContent(
    `
    ${renderPopoverTitle(strategy.name, "clinical-strategy", strategy.etymology)}
    <div class="usmle-organ-popover__meaning">${strategy.definition}</div>
  `,
    `
    ${renderListSection("Key points", strategy.details)}
    ${renderListSection("Boards pearls", strategy.boardsPearls)}
    ${strategy.pediatrics ? renderPediatricsSection(strategy.pediatrics) : ""}
  `,
  );
  return true;
}

function renderCellPopover(cellId: string, popover: HTMLDivElement): boolean {
  const cell = getCellById(cellId);
  if (!cell || !popover) return false;

  const imageSrc = getCellImageForId(cellId);
  const imageCaption = getCellImageCaptionForId(cellId);
  const imageAttribution = getCellImageAttributionForId(cellId);

  const bodyContent = renderRichPopoverContent(
    `
    ${renderPopoverTitle(cell.name, "cell", cell.etymology)}
    <div class="usmle-organ-popover__meaning">${cell.definition}</div>
  `,
    `
    ${renderListSection("Characteristics", cell.characteristics)}
    ${renderListSection("Normal lab results", cell.normalLabResults ?? [])}
    ${renderListSection("Clinical relevance", cell.clinicalRelevance)}
    ${renderListSection("Distinguish from", cell.distinguishFrom ?? [])}
    ${renderListSection("Boards pearls", cell.boardsPearls)}
    ${cell.pediatrics ? renderPediatricsSection(cell.pediatrics) : ""}
  `,
  );

  popover.classList.add("usmle-organ-popover--rich");
  if (imageSrc && imageCaption && imageAttribution) {
    popover.classList.add("usmle-organ-popover--with-media");
    popover.innerHTML = `
      <div class="usmle-organ-popover__layout">
        <div class="usmle-organ-popover__body">${bodyContent}</div>
        ${renderPopoverMediaBlock({
          src: imageSrc,
          alt: `${cell.name} diagram`,
          caption: imageCaption,
          attribution: imageAttribution,
        })}
      </div>
    `;
  } else {
    popover.innerHTML = bodyContent;
  }
  return true;
}

function renderMusculoskeletalPopover(musculoskeletalId: string, popover: HTMLDivElement): boolean {
  const entry = getMusculoskeletalById(musculoskeletalId);
  if (!entry || !popover) return false;

  const imageSrc = getMusculoskeletalImageForId(musculoskeletalId);
  const imageCaption = getMusculoskeletalImageCaptionForId(musculoskeletalId);
  const imageAttribution =
    getMusculoskeletalImageAttributionForId(musculoskeletalId);

  const bodyContent = renderRichPopoverContent(
    `
    ${renderPopoverTitle(entry.name, "musculoskeletal", entry.etymology)}
    <div class="usmle-organ-popover__meaning">${entry.definition}</div>
  `,
    `
    ${entry.anatomy ? `<div class="usmle-organ-popover__layer"><strong>Anatomy:</strong> ${entry.anatomy}</div>` : ""}
    ${entry.innervation ? `<div class="usmle-organ-popover__layer"><strong>Innervation:</strong> ${entry.innervation}</div>` : ""}
    ${renderListSection("Action", entry.action)}
    ${renderListSection("Clinical relevance", entry.clinicalRelevance)}
    ${renderListSection("Distinguish from", entry.distinguishFrom ?? [])}
    ${renderListSection("Boards pearls", entry.boardsPearls)}
    ${entry.pediatrics ? renderPediatricsSection(entry.pediatrics) : ""}
  `,
  );

  popover.classList.add("usmle-organ-popover--rich");
  if (imageSrc && imageCaption && imageAttribution) {
    popover.classList.add("usmle-organ-popover--with-media");
    popover.innerHTML = `
      <div class="usmle-organ-popover__layout">
        <div class="usmle-organ-popover__body">${bodyContent}</div>
        ${renderPopoverMediaBlock({
          src: imageSrc,
          alt: `${entry.name} diagram`,
          caption: imageCaption,
          attribution: imageAttribution,
        })}
      </div>
    `;
  } else {
    popover.innerHTML = bodyContent;
  }
  return true;
}

function renderPathogenesisPopover(pathogenesisId: string, popover: HTMLDivElement): boolean {
  const entry = getPathogenesisById(pathogenesisId);
  if (!entry || !popover) return false;

  popover.classList.add("usmle-organ-popover--rich");
  popover.innerHTML = renderRichPopoverContent(
    `
    ${renderPopoverTitle(entry.name, "pathogenesis", entry.etymology)}
    <div class="usmle-organ-popover__meaning">${entry.definition}</div>
  `,
    `
    ${renderListSection("Examples", entry.examples)}
    ${renderListSection("Distinguish from", entry.distinguishFrom ?? [])}
    ${renderListSection("Boards pearls", entry.boardsPearls)}
    ${entry.pediatrics ? renderPediatricsSection(entry.pediatrics) : ""}
  `,
  );
  return true;
}

function formatMicrobeType(type: string): string {
  return type
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function renderMicrobiologyPopover(microbiologyId: string, popover: HTMLDivElement): boolean {
  const entry = getMicrobiologyById(microbiologyId);
  if (!entry || !popover) return false;

  const imageSrc = getMicrobiologyImageForId(microbiologyId);
  const imageCaption = getMicrobiologyImageCaptionForId(microbiologyId);
  const imageAttribution = getMicrobiologyImageAttributionForId(microbiologyId);

  const bodyContent = renderRichPopoverContent(
    `
    ${renderPopoverTitle(entry.name, "microbiology", entry.etymology)}
    <div class="usmle-organ-popover__layer"><strong>Type:</strong> ${formatMicrobeType(entry.type)}</div>
    <div class="usmle-organ-popover__meaning">${entry.definition}</div>
  `,
    `
    ${renderListSection("Morphology", entry.morphology ?? [])}
    ${renderListSection("Virulence factors", entry.virulenceFactors ?? [])}
    ${renderListSection("Transmission", entry.transmission ?? [])}
    ${renderListSection("Diseases", entry.diseases)}
    ${renderListSection("Classic presentation", entry.classicPresentation ?? [])}
    ${renderListSection("Diagnosis", entry.diagnosis ?? [])}
    ${renderListSection("Treatment", entry.treatment ?? [])}
    ${renderListSection("Distinguish from", entry.distinguishFrom ?? [])}
    ${renderListSection("Boards pearls", entry.boardsPearls)}
    ${entry.pediatrics ? renderPediatricsSection(entry.pediatrics) : ""}
  `,
  );

  popover.classList.add("usmle-organ-popover--rich");
  if (imageSrc && imageCaption && imageAttribution) {
    popover.classList.add("usmle-organ-popover--with-media");
    popover.innerHTML = `
      <div class="usmle-organ-popover__layout">
        <div class="usmle-organ-popover__body">${bodyContent}</div>
        ${renderPopoverMediaBlock({
          src: imageSrc,
          alt: `${entry.name} micrograph`,
          caption: imageCaption,
          attribution: imageAttribution,
        })}
      </div>
    `;
  } else {
    popover.innerHTML = bodyContent;
  }
  return true;
}

function renderProcedurePopover(procedureId: string, popover: HTMLDivElement): boolean {
  const procedure = getProcedureById(procedureId);
  if (!procedure || !popover) return false;

  popover.classList.add("usmle-organ-popover--rich");
  popover.innerHTML = renderRichPopoverContent(
    `
    ${renderPopoverTitle(procedure.name, "procedure", procedure.etymology)}
    <div class="usmle-organ-popover__meaning">${procedure.definition}</div>
  `,
    `
    ${renderListSection("Indications", procedure.indications)}
    ${renderListSection("Key measurements", procedure.keyMeasurements ?? [])}
    ${renderListSection("Complications", procedure.complications)}
    ${renderListSection("Boards pearls", procedure.boardsPearls)}
    ${procedure.pediatrics ? renderPediatricsSection(procedure.pediatrics) : ""}
  `,
  );
  return true;
}

function renderSignalingPopover(signalingId: string, popover: HTMLDivElement): boolean {
  const molecule = getSignalingById(signalingId);
  if (!molecule || !popover) return false;

  const meta = [
    `<strong>Type:</strong> ${molecule.type}`,
    molecule.source ? `<strong>Source:</strong> ${molecule.source}` : "",
    molecule.receptor ? `<strong>Receptor:</strong> ${molecule.receptor}` : "",
  ]
    .filter(Boolean)
    .join(" · ");

  popover.classList.add("usmle-organ-popover--rich");
  popover.innerHTML = renderRichPopoverContent(
    `
    ${renderPopoverTitle(molecule.name, "signaling", molecule.etymology)}
    ${meta ? `<div class="usmle-organ-popover__layer">${meta}</div>` : ""}
    <div class="usmle-organ-popover__section-label">Function</div>
    <div class="usmle-organ-popover__mechanism">${molecule.function}</div>
    ${molecule.mnemonic ? `<div class="usmle-organ-popover__section-label">Mnemonic</div><div class="usmle-organ-popover__mechanism">${molecule.mnemonic}</div>` : ""}
  `,
    `
    ${renderListSection("Clinical relevance", molecule.clinicalRelevance)}
    ${renderListSection("Distinguish from", molecule.distinguishFrom ?? [])}
    ${renderListSection("Boards pearls", molecule.boardsPearls)}
    ${molecule.pediatrics ? renderPediatricsSection(molecule.pediatrics) : ""}
  `,
  );
  return true;
}

function renderProteinPopover(proteinId: string, popover: HTMLDivElement): boolean {
  const protein = getProteinById(proteinId);
  if (!protein || !popover) return false;

  const imageSrc = getProteinImageForId(proteinId);
  const imageCaption = getProteinImageCaptionForId(proteinId);
  const imageAttribution = getProteinImageAttributionForId(proteinId);
  const meta = [
    protein.gene ? `<strong>Gene:</strong> ${protein.gene}` : "",
    protein.location ? `<strong>Location:</strong> ${protein.location}` : "",
  ]
    .filter(Boolean)
    .join(" · ");

  const bodyContent = renderRichPopoverContent(
    `
    ${renderPopoverTitle(protein.name, "protein", protein.etymology)}
    ${meta ? `<div class="usmle-organ-popover__layer">${meta}</div>` : ""}
    <div class="usmle-organ-popover__section-label">Function</div>
    <div class="usmle-organ-popover__mechanism">${protein.function}</div>
  `,
    `
    ${renderListSection("Mutation causes", protein.mutationCauses)}
    ${renderListSection("Distinguish from", protein.distinguishFrom ?? [])}
    ${renderListSection("Boards pearls", protein.boardsPearls)}
  `,
  );

  popover.classList.add("usmle-organ-popover--rich");
  if (imageSrc && imageCaption && imageAttribution) {
    popover.classList.add("usmle-organ-popover--with-media");
    popover.innerHTML = `
      <div class="usmle-organ-popover__layout">
        <div class="usmle-organ-popover__body">${bodyContent}</div>
        ${renderPopoverMediaBlock({
          src: imageSrc,
          alt: `${protein.name} diagram`,
          caption: imageCaption,
          attribution: imageAttribution,
        })}
      </div>
    `;
  } else {
    popover.innerHTML = bodyContent;
  }
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
  const cellId = chip.dataset.cellId;
  const pathogenesisId = chip.dataset.pathogenesisId;
  const microbiologyId = chip.dataset.microbiologyId;
  const musculoskeletalId = chip.dataset.musculoskeletalId;
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
    !clinicalStrategyId &&
    !cellId &&
    !pathogenesisId &&
    !microbiologyId &&
    !musculoskeletalId
  )
    return;

  clearScheduledHide();

  const currentTop = popoverStack[popoverStack.length - 1];
  if (currentTop?.chip === chip) return;

  const sourcePopover = chip.closest<HTMLDivElement>(`.${POPOVER_CLASS}`);
  if (sourcePopover) {
    closePopoversAfter(sourcePopover);
  } else {
    hideAllPopovers();
  }

  const previousPopover =
    sourcePopover && popoverStack.length > 0
      ? popoverStack[popoverStack.length - 1]!.popover
      : null;
  const popover = createPopover();
  popover.classList.remove(
    "usmle-organ-popover--rich",
    "usmle-organ-popover--wide",
    "usmle-organ-popover--with-media",
  );
  const rendered = organId
    ? renderOrganPopover(organId, popover)
    : heartSoundId
      ? renderHeartSoundPopover(heartSoundId, popover)
      : heartMurmurId
        ? renderHeartMurmurPopover(heartMurmurId, popover)
        : hemodynamicId
        ? renderHemodynamicPopover(hemodynamicId, popover)
        : symptomId
          ? renderSymptomPopover(symptomId, popover)
          : medicationId
            ? renderMedicationPopover(medicationId, popover)
            : labValueId
              ? renderLabValuePopover(labValueId, popover)
              : nephronSegmentId
                ? renderNephronPopover(nephronSegmentId, popover)
                : conditionId
                  ? renderConditionPopover(conditionId, popover)
                  : proteinId
                    ? renderProteinPopover(proteinId, popover)
                    : signalingId
                      ? renderSignalingPopover(signalingId, popover)
                      : ecgFindingId
                        ? renderEcgFindingPopover(ecgFindingId, popover)
                        : procedureId
                          ? renderProcedurePopover(procedureId, popover)
                          : clinicalStrategyId
                            ? renderClinicalStrategyPopover(
                                clinicalStrategyId,
                                popover,
                              )
                            : cellId
                              ? renderCellPopover(cellId, popover)
                              : pathogenesisId
                                ? renderPathogenesisPopover(
                                    pathogenesisId,
                                    popover,
                                  )
                                : microbiologyId
                                  ? renderMicrobiologyPopover(
                                      microbiologyId,
                                      popover,
                                    )
                                  : renderMusculoskeletalPopover(
                                      musculoskeletalId!,
                                      popover,
                                    );
  if (!rendered) {
    popover.remove();
    return;
  }

  scanPopoverRoot(popover);
  preparePopoverForDisplay(popover);
  const entry = { chip, popover };
  popoverStack.push(entry);
  if (previousPopover) {
    positionStackedPopover(previousPopover, popover);
  } else {
    positionPopover(chip, popover);
  }
  bindPopoverImageReposition(entry, popover);
  playPopoverAudio(popover);
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
      if (popoverStack.length === 0) return;
      const related = event.relatedTarget as Node | null;
      const from = (event.target as Element | null)?.closest(
        CHIP_SELECTOR,
      ) as HTMLElement | null;
      if (!from) return;
      if (related && (from.contains(related) || isPointerInsideStack(related))) {
        return;
      }
      scheduleHide();
    },
    true,
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key !== "Escape" && event.key !== "Esc") return;
      if (popoverStack.length === 0) return;

      clearScheduledHide();
      popLastPopover();
    },
    true,
  );

  window.addEventListener("scroll", () => {
    repositionPopoverStackFrom(0);
  }, true);

  window.addEventListener("resize", () => {
    repositionPopoverStackFrom(0);
  });
}
