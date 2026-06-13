import {
  getAntiarrhythmicAttributionForMedication,
  getAntiarrhythmicClassForMedication,
  getAntiarrhythmicImageForMedication,
} from "../../data/antiarrhythmicMedia";
import { getMedicationById } from "../../data/medications";
import {
  getMedicationImageAttributionForId,
  getMedicationImageCaptionForId,
  getMedicationImageForId,
} from "../../data/medicationMedia";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderPopoverMediaBlock,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderMedicationPopover(
  medicationId: string,
  popover: HTMLDivElement,
): boolean {
  const medication = getMedicationById(medicationId);
  if (!medication || !popover) return false;

  const antiarrhythmicClass = getAntiarrhythmicClassForMedication(medicationId);
  const actionPotentialImage = getAntiarrhythmicImageForMedication(medicationId);
  const actionPotentialAttribution =
    getAntiarrhythmicAttributionForMedication(medicationId);
  const imageSrc = getMedicationImageForId(medicationId);
  const imageCaption = getMedicationImageCaptionForId(medicationId);
  const imageAttribution = getMedicationImageAttributionForId(medicationId);

  const bodyContent = renderRichPopoverContent(
    `
    ${renderPopoverTitle(medication.name, "medication", medication.etymology)}
    <div class="usmle-organ-popover__layer"><strong>Class:</strong> ${medication.drugClass}</div>
    <div class="usmle-organ-popover__section-label">Mechanism</div>
    <div class="usmle-organ-popover__mechanism">${medication.mechanism}</div>
  `,
    `
    ${renderListSection("Indications", medication.indications)}
    ${renderListSection("Adverse effects", medication.adverseEffects)}
    ${renderListSection("Boards pearls", medication.boardsPearls)}
  `,
  );

  popover.classList.add("usmle-organ-popover--rich");
  if (actionPotentialImage && antiarrhythmicClass && actionPotentialAttribution) {
    popover.classList.add("usmle-organ-popover--with-media");
    popover.innerHTML = `
      <div class="usmle-organ-popover__layout">
        <div class="usmle-organ-popover__body">${bodyContent}</div>
        ${renderPopoverMediaBlock({
          src: actionPotentialImage,
          alt: `Class ${antiarrhythmicClass} action potential effect`,
          caption: `Class ${antiarrhythmicClass}`,
          attribution: actionPotentialAttribution,
        })}
      </div>
    `;
  } else if (imageSrc && imageCaption && imageAttribution) {
    popover.classList.add("usmle-organ-popover--with-media");
    popover.innerHTML = `
      <div class="usmle-organ-popover__layout">
        <div class="usmle-organ-popover__body">${bodyContent}</div>
        ${renderPopoverMediaBlock({
          src: imageSrc,
          alt: `${medication.name} image`,
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
