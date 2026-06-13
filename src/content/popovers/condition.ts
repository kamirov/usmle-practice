import { getConditionById } from "../../data/conditions";
import {
  getConditionImageAttributionForId,
  getConditionImageCaptionForId,
  getConditionImageForId,
} from "../../data/conditionsMedia";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderPediatricsSection,
  renderPopoverMediaBlock,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderConditionPopover(
  conditionId: string,
  popover: HTMLDivElement,
): boolean {
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
