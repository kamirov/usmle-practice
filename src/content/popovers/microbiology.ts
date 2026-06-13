import { getMicrobiologyById } from "../../data/microbiology";
import {
  getMicrobiologyImageAttributionForId,
  getMicrobiologyImageCaptionForId,
  getMicrobiologyImageForId,
} from "../../data/microbiologyMedia";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderPediatricsSection,
  renderPopoverMediaBlock,
  renderRichPopoverContent,
} from "../popoverShared";

function formatMicrobeType(type: string): string {
  return type
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function renderMicrobiologyPopover(
  microbiologyId: string,
  popover: HTMLDivElement,
): boolean {
  const entry = getMicrobiologyById(microbiologyId);
  if (!entry || !popover) return false;

  const imageSrc = getMicrobiologyImageForId(microbiologyId);
  const imageCaption = getMicrobiologyImageCaptionForId(microbiologyId);
  const imageAttribution = getMicrobiologyImageAttributionForId(microbiologyId);

  const bodyContent = renderRichPopoverContent(
    `
    ${renderPopoverTitle(entry.name, "microbiology", entry.etymology)}
    <div class="usmle-organ-popover__layer"><strong>Type:</strong> ${formatMicrobeType(entry.type)}</div>
    <div class="usmle-organ-popover__meaning">${entry.definition}</div>
  `,
    `
    ${renderListSection("Morphology", entry.morphology ?? [])}
    ${renderListSection("Virulence factors", entry.virulenceFactors ?? [])}
    ${renderListSection("Transmission", entry.transmission ?? [])}
    ${renderListSection("Diseases", entry.diseases)}
    ${renderListSection("Classic presentation", entry.classicPresentation ?? [])}
    ${renderListSection("Diagnosis", entry.diagnosis ?? [])}
    ${renderListSection("Treatment", entry.treatment ?? [])}
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
          alt: `${entry.name} micrograph`,
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
