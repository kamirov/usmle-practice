import { getCellById } from "../../data/cells";
import {
  getCellImageAttributionForId,
  getCellImageCaptionForId,
  getCellImageForId,
} from "../../data/cellsMedia";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderPediatricsSection,
  renderPopoverMediaBlock,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderCellPopover(cellId: string, popover: HTMLDivElement): boolean {
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
