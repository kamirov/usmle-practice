import { getMusculoskeletalById } from "../../data/musculoskeletal";
import {
  getMusculoskeletalImageAttributionForId,
  getMusculoskeletalImageCaptionForId,
  getMusculoskeletalImageForId,
} from "../../data/musculoskeletalMedia";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderPediatricsSection,
  renderPopoverMediaBlock,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderMusculoskeletalPopover(
  musculoskeletalId: string,
  popover: HTMLDivElement,
): boolean {
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
