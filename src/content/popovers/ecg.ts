import { getEcgFindingById } from "../../data/ecgFindings";
import {
  getEcgFindingImageAttributionForId,
  getEcgFindingImageCaptionForId,
  getEcgFindingImageForId,
} from "../../data/ecgFindingMedia";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderPediatricsSection,
  renderPopoverMediaBlock,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderEcgFindingPopover(
  ecgFindingId: string,
  popover: HTMLDivElement,
): boolean {
  const finding = getEcgFindingById(ecgFindingId);
  if (!finding || !popover) return false;

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

  popover.classList.add("usmle-organ-popover--rich");
  if (imageSrc && imageCaption && imageAttribution) {
    popover.classList.add("usmle-organ-popover--with-media");
    popover.innerHTML = `
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
    popover.innerHTML = bodyContent;
  }
  return true;
}
