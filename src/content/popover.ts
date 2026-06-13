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
import { renderPopoverTitle, type PopoverCategory } from "./popoverIcons";

const CHIP_SELECTOR =
  ".usmle-organ-chip, .usmle-heart-sound-chip, .usmle-heart-murmur-chip, .usmle-hemodynamic-chip, .usmle-symptom-chip, .usmle-medication-chip, .usmle-lab-chip, .usmle-nephron-chip, .usmle-condition-chip, .usmle-protein-chip, .usmle-signaling-chip, .usmle-ecg-chip, .usmle-procedure-chip, .usmle-clinical-strategy-chip, .usmle-cell-chip, .usmle-pathogenesis-chip, .usmle-microbiology-chip, .usmle-musculoskeletal-chip";
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
  if (popoverEl) {
    popoverEl.hidden = true;
    popoverEl.style.maxHeight = "";
  }
  activeChip = null;
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

function bindPopoverImageReposition(
  chip: HTMLElement,
  popover: HTMLDivElement,
): void {
  for (const img of popover.querySelectorAll<HTMLImageElement>("img")) {
    if (img.complete) continue;
    img.addEventListener(
      "load",
      () => {
        if (activeChip === chip && !popover.hidden) {
          positionPopover(chip, popover);
        }
      },
      { once: true },
    );
  }
}

function renderOrganPopover(organId: string): boolean {
  const organ = getOrganById(organId);
  if (!organ || !popoverEl) return false;

  const imageSrc = getOrganImageForId(organId);
  const imageCaption = getOrganImageCaptionForId(organId);
  const imageAttribution = getOrganImageAttributionForId(organId);
  const derivatives =
    organ.derivatives && organ.derivatives.length > 0
      ? `<ul class="usmle-organ-popover__list">${organ.derivatives
          .map((d) => `<li>${d}</li>`)
          .join("")}</ul>`
      : "";

  const bodyContent = `
    ${renderPopoverTitle(organ.name, "organ", organ.etymology)}
    <div class="usmle-organ-popover__layer"><strong>Germ layer:</strong> ${organ.germLayer}</div>
    <div class="usmle-organ-popover__origin">${organ.origin}</div>
    ${derivatives}
  `;
  if (imageSrc && imageCaption && imageAttribution) {
    popoverEl.classList.add("usmle-organ-popover--rich");
    popoverEl.classList.add("usmle-organ-popover--with-media");
    popoverEl.innerHTML = `
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
    popoverEl.innerHTML = bodyContent;
  }
  return true;
}

function renderDefinitionPopover(
  title: string,
  category: PopoverCategory,
  definition: string,
  sectionLabel: string,
  items: string[],
  etymology?: string,
): boolean {
  if (!popoverEl) return false;

  const list = `<ul class="usmle-organ-popover__list">${items
    .map((item) => `<li>${item}</li>`)
    .join("")}</ul>`;

  popoverEl.innerHTML = `
    ${renderPopoverTitle(title, category, etymology)}
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
    "heart-sound",
    sound.meaning,
    "Common conditions",
    sound.conditions,
    sound.etymology,
  );
}

function renderHeartMurmurPopover(heartMurmurId: string): boolean {
  const murmur = getHeartMurmurById(heartMurmurId);
  if (!murmur || !popoverEl) return false;

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

function renderSymptomPopover(symptomId: string): boolean {
  const symptom = getSymptomById(symptomId);
  if (!symptom || !popoverEl) return false;

  const imageSrc = getSymptomImageForId(symptomId);
  const imageCaption = getSymptomImageCaptionForId(symptomId);
  const imageAttribution = getSymptomImageAttributionForId(symptomId);

  const bodyContent = renderRichPopoverContent(
    `
    ${renderPopoverTitle(symptom.name, "symptom", symptom.etymology)}
    <div class="usmle-organ-popover__meaning">${symptom.definition}</div>
    <div class="usmle-organ-popover__section-label">Mechanism</div>
    <div class="usmle-organ-popover__mechanism">${symptom.mechanism}</div>
  `,
    `
    ${renderListSection("Think of", symptom.thinkOf)}
    ${renderListSection("Pair with", symptom.pairWith)}
    ${renderListSection("Distinguish from", symptom.distinguishFrom ?? [])}
  `,
  );

  popoverEl.classList.add("usmle-organ-popover--rich");
  if (imageSrc && imageCaption && imageAttribution) {
    popoverEl.classList.add("usmle-organ-popover--with-media");
    popoverEl.innerHTML = `
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
    popoverEl.innerHTML = bodyContent;
  }
  return true;
}

function renderMedicationPopover(medicationId: string): boolean {
  const medication = getMedicationById(medicationId);
  if (!medication || !popoverEl) return false;

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
  } else if (imageSrc && imageCaption && imageAttribution) {
    popoverEl.classList.add("usmle-organ-popover--with-media");
    popoverEl.innerHTML = `
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
    popoverEl.innerHTML = bodyContent;
  }
  return true;
}

function renderLabValuePopover(labValueId: string): boolean {
  const lab = getLabValueById(labValueId);
  if (!lab || !popoverEl) return false;

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

  popoverEl.classList.add("usmle-organ-popover--rich");
  if (imageSrc && imageCaption && imageAttribution) {
    popoverEl.classList.add("usmle-organ-popover--with-media");
    popoverEl.innerHTML = `
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
    popoverEl.innerHTML = bodyContent;
  }
  return true;
}

function renderNephronPopover(nephronSegmentId: string): boolean {
  const segment = getNephronSegmentById(nephronSegmentId);
  if (!segment || !popoverEl) return false;

  popoverEl.classList.add("usmle-organ-popover--rich");
  popoverEl.innerHTML = renderRichPopoverContent(
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

function renderConditionPopover(conditionId: string): boolean {
  const condition = getConditionById(conditionId);
  if (!condition || !popoverEl) return false;

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

  popoverEl.classList.add("usmle-organ-popover--rich");
  if (imageSrc && imageCaption && imageAttribution) {
    popoverEl.classList.add("usmle-organ-popover--with-media");
    popoverEl.innerHTML = `
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
    popoverEl.innerHTML = bodyContent;
  }
  return true;
}

function renderEcgFindingPopover(ecgFindingId: string): boolean {
  const finding = getEcgFindingById(ecgFindingId);
  if (!finding || !popoverEl) return false;

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
  popoverEl.innerHTML = renderRichPopoverContent(
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

function renderCellPopover(cellId: string): boolean {
  const cell = getCellById(cellId);
  if (!cell || !popoverEl) return false;

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

  popoverEl.classList.add("usmle-organ-popover--rich");
  if (imageSrc && imageCaption && imageAttribution) {
    popoverEl.classList.add("usmle-organ-popover--with-media");
    popoverEl.innerHTML = `
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
    popoverEl.innerHTML = bodyContent;
  }
  return true;
}

function renderMusculoskeletalPopover(musculoskeletalId: string): boolean {
  const entry = getMusculoskeletalById(musculoskeletalId);
  if (!entry || !popoverEl) return false;

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

  popoverEl.classList.add("usmle-organ-popover--rich");
  if (imageSrc && imageCaption && imageAttribution) {
    popoverEl.classList.add("usmle-organ-popover--with-media");
    popoverEl.innerHTML = `
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
    popoverEl.innerHTML = bodyContent;
  }
  return true;
}

function renderPathogenesisPopover(pathogenesisId: string): boolean {
  const entry = getPathogenesisById(pathogenesisId);
  if (!entry || !popoverEl) return false;

  popoverEl.classList.add("usmle-organ-popover--rich");
  popoverEl.innerHTML = renderRichPopoverContent(
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

function renderMicrobiologyPopover(microbiologyId: string): boolean {
  const entry = getMicrobiologyById(microbiologyId);
  if (!entry || !popoverEl) return false;

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

  popoverEl.classList.add("usmle-organ-popover--rich");
  if (imageSrc && imageCaption && imageAttribution) {
    popoverEl.classList.add("usmle-organ-popover--with-media");
    popoverEl.innerHTML = `
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
    popoverEl.innerHTML = bodyContent;
  }
  return true;
}

function renderProcedurePopover(procedureId: string): boolean {
  const procedure = getProcedureById(procedureId);
  if (!procedure || !popoverEl) return false;

  popoverEl.classList.add("usmle-organ-popover--rich");
  popoverEl.innerHTML = renderRichPopoverContent(
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
  popoverEl.innerHTML = renderRichPopoverContent(
    `
    ${renderPopoverTitle(molecule.name, "signaling", molecule.etymology)}
    ${meta ? `<div class="usmle-organ-popover__layer">${meta}</div>` : ""}
    <div class="usmle-organ-popover__section-label">Function</div>
    <div class="usmle-organ-popover__mechanism">${molecule.function}</div>
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

function renderProteinPopover(proteinId: string): boolean {
  const protein = getProteinById(proteinId);
  if (!protein || !popoverEl) return false;

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

  popoverEl.classList.add("usmle-organ-popover--rich");
  if (imageSrc && imageCaption && imageAttribution) {
    popoverEl.classList.add("usmle-organ-popover--with-media");
    popoverEl.innerHTML = `
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
    popoverEl.innerHTML = bodyContent;
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

  if (hideTimer) {
    clearTimeout(hideTimer);
    hideTimer = null;
  }

  const popover = ensurePopover();
  popover.classList.remove(
    "usmle-organ-popover--rich",
    "usmle-organ-popover--wide",
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
                          : clinicalStrategyId
                            ? renderClinicalStrategyPopover(clinicalStrategyId)
                            : cellId
                              ? renderCellPopover(cellId)
                              : pathogenesisId
                                ? renderPathogenesisPopover(pathogenesisId)
                                : microbiologyId
                                  ? renderMicrobiologyPopover(microbiologyId)
                                  : renderMusculoskeletalPopover(
                                      musculoskeletalId!,
                                    );
  if (!rendered) return;

  preparePopoverForDisplay(popover);
  activeChip = chip;
  positionPopover(chip, popover);
  bindPopoverImageReposition(chip, popover);
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
