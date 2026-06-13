import { getSymptomById } from "../../data/symptoms";
import {
  getSymptomImageAttributionForId,
  getSymptomImageCaptionForId,
  getSymptomImageForId,
} from "../../data/symptomMedia";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderPediatricsSection,
  renderPopoverMediaBlock,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderSymptomPopover(symptomId: string, popover: HTMLDivElement): boolean {
  const symptom = getSymptomById(symptomId);
  if (!symptom || !popover) return false;

  const imageSrc = getSymptomImageForId(symptomId);
  const imageCaption = getSymptomImageCaptionForId(symptomId);
  const imageAttribution = getSymptomImageAttributionForId(symptomId);

  const bodyContent = renderRichPopoverContent(
    `
    ${renderPopoverTitle(symptom.name, "symptom", symptom.etymology)}
    <div class="usmle-organ-popover__meaning">${symptom.definition}</div>
    <div class="usmle-organ-popover__section-label">Mechanism</div>
    <div class="usmle-organ-popover__mechanism">${symptom.mechanism}</div>
    ${symptom.pediatrics ? renderPediatricsSection(symptom.pediatrics) : ""}
  `,
    `
    ${renderListSection("Think of", symptom.thinkOf)}
    ${renderListSection("Pair with", symptom.pairWith)}
    ${renderListSection("Distinguish from", symptom.distinguishFrom ?? [])}
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
          alt: `${symptom.name} clinical photo`,
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
