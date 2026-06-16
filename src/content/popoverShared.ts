import type { MediaAttribution } from "../data/media";
import {
  getNephronNavLabel,
  type NephronSegmentEntry,
} from "../data/nephron";
import { IMAGE_FLAG_LEGEND } from "../shared/categoryLegend";
import { createElement, ImageOff } from "lucide";
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

function renderImageFlagIcon(): string {
  const icon = createElement(IMAGE_FLAG_LEGEND.icon, {
    class: "usmle-organ-popover__media-flag-icon",
    "stroke-width": 2,
    width: 14,
    height: 14,
    "aria-hidden": "true",
  });
  return icon.outerHTML;
}

export function renderPopoverMediaBlock(options: {
  src: string;
  alt: string;
  caption: string;
  attribution: MediaAttribution;
}): string {
  return `
    <div class="usmle-organ-popover__media">
      <div class="usmle-organ-popover__media-image-wrap">
        <img src="${options.src}" alt="${options.alt}" />
        <button
          type="button"
          class="usmle-organ-popover__media-flag"
          aria-label="${IMAGE_FLAG_LEGEND.label}"
          title="${IMAGE_FLAG_LEGEND.label}"
        >${renderImageFlagIcon()}</button>
      </div>
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

function renderNephronNavChip(segment: NephronSegmentEntry): string {
  const label = getNephronNavLabel(segment);
  return `<button type="button" class="usmle-nephron-chip" data-nephron-segment-id="${segment.id}">${label}</button>`;
}

export function renderNephronSectionNav(options: {
  previous?: NephronSegmentEntry;
  next?: NephronSegmentEntry;
}): string {
  const { previous, next } = options;
  if (!previous && !next) return "";

  const items = [
    previous
      ? `<div class="usmle-organ-popover__nav-item"><span class="usmle-organ-popover__nav-label">Previous</span> ${renderNephronNavChip(previous)}</div>`
      : "",
    next
      ? `<div class="usmle-organ-popover__nav-item"><span class="usmle-organ-popover__nav-label">Next</span> ${renderNephronNavChip(next)}</div>`
      : "",
  ]
    .filter(Boolean)
    .join("");

  return `
    <div class="usmle-organ-popover__section usmle-organ-popover__section-nav">
      <div class="usmle-organ-popover__nav">${items}</div>
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
