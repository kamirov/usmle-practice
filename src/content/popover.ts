import { schedulePopoverRootScan } from "./organScanner";
import { getChipPopoverTarget, renderChipPopover } from "./popoverLoader";

const CHIP_SELECTOR =
  ".usmle-organ-chip, .usmle-heart-sound-chip, .usmle-heart-murmur-chip, .usmle-hemodynamic-chip, .usmle-symptom-chip, .usmle-medication-chip, .usmle-lab-chip, .usmle-nephron-chip, .usmle-condition-chip, .usmle-protein-chip, .usmle-signaling-chip, .usmle-ecg-chip, .usmle-procedure-chip, .usmle-clinical-strategy-chip, .usmle-cell-chip, .usmle-pathogenesis-chip, .usmle-metabolism-chip, .usmle-microbiology-chip, .usmle-musculoskeletal-chip";
const POPOVER_AUDIO_SELECTOR = ".usmle-organ-popover__audio";
const POPOVER_CLASS = "usmle-organ-popover";
const STACK_OFFSET_PX = 14;

interface PopoverEntry {
  chip: HTMLElement;
  popover: HTMLDivElement;
}

const popoverStack: PopoverEntry[] = [];

function createPopover(): HTMLDivElement {
  const popover = document.createElement("div");
  popover.className = POPOVER_CLASS;
  popover.setAttribute("role", "dialog");
  popover.hidden = true;

  document.body.appendChild(popover);
  return popover;
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

function isClickInsideOpenStack(target: EventTarget | null): boolean {
  const el = target instanceof Element ? target : null;
  if (!el) return false;
  return el.closest(CHIP_SELECTOR) !== null || el.closest(`.${POPOVER_CLASS}`) !== null;
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

function renderLoadingPopover(popover: HTMLDivElement): void {
  popover.innerHTML =
    '<div class="usmle-organ-popover__loading">Loading…</div>';
}

async function showPopover(chip: HTMLElement): Promise<void> {
  if (!getChipPopoverTarget(chip)) return;

  const currentTop = popoverStack[popoverStack.length - 1];
  if (currentTop?.chip === chip) {
    popLastPopover();
    return;
  }

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
  renderLoadingPopover(popover);
  preparePopoverForDisplay(popover);

  const entry = { chip, popover };
  popoverStack.push(entry);
  if (previousPopover) {
    positionStackedPopover(previousPopover, popover);
  } else {
    positionPopover(chip, popover);
  }

  const rendered = await renderChipPopover(chip, popover);
  if (!rendered) {
    popoverStack.pop();
    popover.remove();
    return;
  }

  preparePopoverForDisplay(popover);
  repositionPopoverStackFrom(popoverStack.length - 1);
  bindPopoverImageReposition(entry, popover);
  playPopoverAudio(popover);
  schedulePopoverRootScan(popover);
}

export function startPopoverController(): void {
  document.addEventListener(
    "click",
    (event) => {
      const chip = (event.target as Element | null)?.closest(
        CHIP_SELECTOR,
      ) as HTMLElement | null;
      if (chip) {
        event.preventDefault();
        void showPopover(chip);
        return;
      }

      if (popoverStack.length === 0) return;
      if (isClickInsideOpenStack(event.target)) return;
      hideAllPopovers();
    },
    true,
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key !== "Escape" && event.key !== "Esc") return;
      if (popoverStack.length === 0) return;

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
