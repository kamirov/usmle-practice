import { getProteinById } from "../../data/proteins";
import {
  getProteinImageAttributionForId,
  getProteinImageCaptionForId,
  getProteinImageForId,
} from "../../data/proteinMedia";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderPopoverMediaBlock,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderProteinPopover(proteinId: string, popover: HTMLDivElement): boolean {
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
