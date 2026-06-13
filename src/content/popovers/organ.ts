import { getOrganById } from "../../data/organs";
import {
  getOrganImageAttributionForId,
  getOrganImageCaptionForId,
  getOrganImageForId,
} from "../../data/organMedia";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderPopoverMediaBlock,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderOrganPopover(organId: string, popover: HTMLDivElement): boolean {
  const organ = getOrganById(organId);
  if (!organ || !popover) return false;

  const imageSrc = getOrganImageForId(organId);
  const imageCaption = getOrganImageCaptionForId(organId);
  const imageAttribution = getOrganImageAttributionForId(organId);
  const derivatives =
    organ.derivatives && organ.derivatives.length > 0
      ? renderListSection("Derivatives", organ.derivatives)
      : "";

  const bodyContent = renderRichPopoverContent(
    `
    ${renderPopoverTitle(organ.name, "organ", organ.etymology)}
    <div class="usmle-organ-popover__layer"><strong>Germ layer:</strong> ${organ.germLayer}</div>
    <div class="usmle-organ-popover__origin">${organ.origin}</div>
    ${derivatives}
    ${organ.functionSummary ? `<div class="usmle-organ-popover__section-label">Function</div><div class="usmle-organ-popover__mechanism">${organ.functionSummary}</div>` : ""}
    ${organ.pediatrics ? `<div class="usmle-organ-popover__section"><div class="usmle-organ-popover__section-label">Pediatrics</div><div class="usmle-organ-popover__mechanism">${organ.pediatrics}</div></div>` : ""}
  `,
    `
    ${renderListSection("Common pathologies", organ.commonPathologies ?? [])}
    ${renderListSection("Step 1 pearls", organ.step1Pearls ?? [])}
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
          alt: `${organ.name} image`,
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
