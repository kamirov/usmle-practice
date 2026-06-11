import { getHeartSoundById } from "../data/heartSounds";
import { getOrganById } from "../data/organs";

const CHIP_SELECTOR = ".usmle-organ-chip, .usmle-heart-sound-chip";
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

function renderHeartSoundPopover(heartSoundId: string): boolean {
  const sound = getHeartSoundById(heartSoundId);
  if (!sound || !popoverEl) return false;

  const conditions = `<ul class="usmle-organ-popover__list">${sound.conditions
    .map((c) => `<li>${c}</li>`)
    .join("")}</ul>`;

  popoverEl.innerHTML = `
    <div class="usmle-organ-popover__title usmle-organ-popover__title--heart">${sound.name}</div>
    <div class="usmle-organ-popover__meaning">${sound.meaning}</div>
    <div class="usmle-organ-popover__section-label">Common conditions</div>
    ${conditions}
  `;
  return true;
}

function showPopover(chip: HTMLElement): void {
  const organId = chip.dataset.organId;
  const heartSoundId = chip.dataset.heartSoundId;
  if (!organId && !heartSoundId) return;

  if (hideTimer) {
    clearTimeout(hideTimer);
    hideTimer = null;
  }

  const popover = ensurePopover();
  const rendered = organId
    ? renderOrganPopover(organId)
    : renderHeartSoundPopover(heartSoundId!);
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
