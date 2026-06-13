import { getLabValueById } from "../../data/labValues";
import {
  getLabValueImageAttributionForId,
  getLabValueImageCaptionForId,
  getLabValueImageForId,
} from "../../data/labValueMedia";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderPopoverMediaBlock,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderLabValuePopover(labValueId: string, popover: HTMLDivElement): boolean {
  const lab = getLabValueById(labValueId);
  if (!lab || !popover) return false;

  const imageSrc = getLabValueImageForId(labValueId);
  const imageCaption = getLabValueImageCaptionForId(labValueId);
  const imageAttribution = getLabValueImageAttributionForId(labValueId);
  const bodyContent = renderRichPopoverContent(
    `
    ${renderPopoverTitle(lab.name, "lab", lab.etymology)}
    <div class="usmle-organ-popover__meaning">${lab.measures}</div>
    <div class="usmle-organ-popover__layer"><strong>Normal range:</strong> ${lab.normalRange}</div>
  `,
    `
    ${renderListSection("↑ Causes", lab.increasedCauses)}
    ${renderListSection("↓ Causes", lab.decreasedCauses)}
    ${renderListSection("Pair with", lab.pairWith ?? [])}
    ${renderListSection("Boards pearls", lab.boardsPearls)}
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
          alt: `${lab.name} diagram`,
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
