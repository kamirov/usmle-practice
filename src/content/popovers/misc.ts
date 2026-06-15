import { getClinicalStrategyById } from "../../data/clinicalStrategies";
import {
  getClinicalStrategyImageAttributionForId,
  getClinicalStrategyImageCaptionForId,
  getClinicalStrategyImageForId,
} from "../../data/clinicalStrategyMedia";
import {
  getAdjacentNephronSegments,
  getNephronSegmentById,
} from "../../data/nephron";
import { getProcedureById } from "../../data/procedures";
import {
  getProcedureImageAttributionForId,
  getProcedureImageCaptionForId,
  getProcedureImageForId,
} from "../../data/procedureMedia";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderNephronSectionNav,
  renderPediatricsSection,
  renderPopoverMediaBlock,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderNephronPopover(
  nephronSegmentId: string,
  popover: HTMLDivElement,
): boolean {
  const segment = getNephronSegmentById(nephronSegmentId);
  if (!segment || !popover) return false;

  const { previous, next } = getAdjacentNephronSegments(nephronSegmentId);

  popover.classList.add("usmle-organ-popover--rich");
  popover.innerHTML = renderRichPopoverContent(
    `
    ${renderPopoverTitle(segment.name, "nephron", segment.etymology)}
    <div class="usmle-organ-popover__section-label">Function</div>
    <div class="usmle-organ-popover__mechanism">${segment.function}</div>
  `,
    `
    ${renderListSection("Reabsorbs", segment.reabsorbs)}
    ${renderListSection("Secretes", segment.secretes)}
    ${renderListSection("Boards pearls", segment.boardsPearls)}
    ${renderNephronSectionNav({ previous, next })}
  `,
  );
  return true;
}

export function renderProcedurePopover(
  procedureId: string,
  popover: HTMLDivElement,
): boolean {
  const procedure = getProcedureById(procedureId);
  if (!procedure || !popover) return false;

  const imageSrc = getProcedureImageForId(procedureId);
  const imageCaption = getProcedureImageCaptionForId(procedureId);
  const imageAttribution = getProcedureImageAttributionForId(procedureId);

  const bodyContent = renderRichPopoverContent(
    `
    ${renderPopoverTitle(procedure.name, "procedure", procedure.etymology)}
    <div class="usmle-organ-popover__meaning">${procedure.definition}</div>
  `,
    `
    ${renderListSection("Indications", procedure.indications)}
    ${renderListSection("Key measurements", procedure.keyMeasurements ?? [])}
    ${renderListSection("Complications", procedure.complications)}
    ${renderListSection("Boards pearls", procedure.boardsPearls)}
    ${procedure.pediatrics ? renderPediatricsSection(procedure.pediatrics) : ""}
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
          alt: `${procedure.name} clinical photo`,
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

export function renderClinicalStrategyPopover(
  clinicalStrategyId: string,
  popover: HTMLDivElement,
): boolean {
  const strategy = getClinicalStrategyById(clinicalStrategyId);
  if (!strategy || !popover) return false;

  const imageSrc = getClinicalStrategyImageForId(clinicalStrategyId);
  const imageCaption = getClinicalStrategyImageCaptionForId(clinicalStrategyId);
  const imageAttribution =
    getClinicalStrategyImageAttributionForId(clinicalStrategyId);

  const bodyContent = renderRichPopoverContent(
    `
    ${renderPopoverTitle(strategy.name, "clinical-strategy", strategy.etymology)}
    <div class="usmle-organ-popover__meaning">${strategy.definition}</div>
  `,
    `
    ${renderListSection("Key points", strategy.details)}
    ${renderListSection("Boards pearls", strategy.boardsPearls)}
    ${strategy.pediatrics ? renderPediatricsSection(strategy.pediatrics) : ""}
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
          alt: `${strategy.name} image`,
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
