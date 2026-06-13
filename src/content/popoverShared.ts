import type { MediaAttribution } from "../data/media";
import { renderPopoverTitle, type PopoverCategory } from "./popoverIcons";

export function renderListSection(label: string, items: string[]): string {
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

export function renderRichPopoverContent(header: string, sections: string): string {
  const wrappedSections = sections.trim()
    ? `<div class="usmle-organ-popover__sections">${sections}</div>`
    : "";
  return `${header}${wrappedSections}`;
}

export function renderMediaAttribution(attribution: MediaAttribution): string {
  return `
    <div class="usmle-organ-popover__media-attribution">
      <a href="${attribution.url}" target="_blank" rel="noopener noreferrer">${attribution.label}</a>
    </div>
  `;
}

export function renderPopoverMediaBlock(options: {
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

export function renderPopoverAudioBlock(options: {
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

export function renderPediatricsSection(note: string): string {
  return `
    <div class="usmle-organ-popover__section">
      <div class="usmle-organ-popover__section-label">Pediatrics</div>
      <div class="usmle-organ-popover__mechanism">${note}</div>
    </div>
  `;
}

export function renderDefinitionPopover(
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
