import {
  getAntiarrhythmicClassForMedication,
  getAntiarrhythmicImageForMedication,
} from "../data/antiarrhythmicMedia";
import { getConditionById } from "../data/conditions";
import { getHeartSoundById } from "../data/heartSounds";
import { getHemodynamicById } from "../data/hemodynamics";
import { getLabValueById } from "../data/labValues";
import { getMedicationById } from "../data/medications";
import { getNephronSegmentById } from "../data/nephron";
import { getOrganById } from "../data/organs";
import { getProteinById } from "../data/proteins";
import { getSymptomById } from "../data/symptoms";

const CHIP_SELECTOR =
  ".usmle-organ-chip, .usmle-heart-sound-chip, .usmle-hemodynamic-chip, .usmle-symptom-chip, .usmle-medication-chip, .usmle-lab-chip, .usmle-nephron-chip, .usmle-condition-chip, .usmle-protein-chip";
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

function hidePopover(): void {
  if (popoverEl) popoverEl.hidden = true;
  activeChip = null;
}

function positionPopover(chip: HTMLElement, popover: HTMLDivElement): void {
  const rect = chip.getBoundingClientRect();
  const margin = 8;
  popover.style.visibility = "hidden";
  popover.hidden = false;

  const popRect = popover.getBoundingClientRect();
  let top = rect.bottom + margin;
  let left = rect.left + rect.width / 2 - popRect.width / 2;

  if (top + popRect.height > window.innerHeight - margin) {
    top = rect.top - popRect.height - margin;
  }
  if (left < margin) left = margin;
  if (left + popRect.width > window.innerWidth - margin) {
    left = window.innerWidth - popRect.width - margin;
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
  if (actionPotentialImage && antiarrhythmicClass) {
    popoverEl.classList.add("usmle-organ-popover--with-media");
    popoverEl.innerHTML = `
      <div class="usmle-organ-popover__layout">
        <div class="usmle-organ-popover__body">${bodyContent}</div>
        <div class="usmle-organ-popover__media">
          <img src="${actionPotentialImage}" alt="Class ${antiarrhythmicClass} action potential effect" />
          <div class="usmle-organ-popover__media-caption">Class ${antiarrhythmicClass}</div>
        </div>
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
    ${renderListSection("Boards pearls", condition.boardsPearls)}
    ${condition.pediatrics ? renderPediatricsSection(condition.pediatrics) : ""}
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
  const hemodynamicId = chip.dataset.hemodynamicId;
  const symptomId = chip.dataset.symptomId;
  const medicationId = chip.dataset.medicationId;
  const labValueId = chip.dataset.labValueId;
  const nephronSegmentId = chip.dataset.nephronSegmentId;
  const conditionId = chip.dataset.conditionId;
  const proteinId = chip.dataset.proteinId;
  if (
    !organId &&
    !heartSoundId &&
    !hemodynamicId &&
    !symptomId &&
    !medicationId &&
    !labValueId &&
    !nephronSegmentId &&
    !conditionId &&
    !proteinId
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
                  : renderProteinPopover(proteinId!);
  if (!rendered) return;

  activeChip = chip;
  positionPopover(chip, popover);
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
