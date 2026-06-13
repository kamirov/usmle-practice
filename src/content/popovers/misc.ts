import { getClinicalStrategyById } from "../../data/clinicalStrategies";
import { getNephronSegmentById } from "../../data/nephron";
import { getProcedureById } from "../../data/procedures";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderPediatricsSection,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderNephronPopover(
  nephronSegmentId: string,
  popover: HTMLDivElement,
): boolean {
  const segment = getNephronSegmentById(nephronSegmentId);
  if (!segment || !popover) return false;

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

  popover.classList.add("usmle-organ-popover--rich");
  popover.innerHTML = renderRichPopoverContent(
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
  return true;
}

export function renderClinicalStrategyPopover(
  clinicalStrategyId: string,
  popover: HTMLDivElement,
): boolean {
  const strategy = getClinicalStrategyById(clinicalStrategyId);
  if (!strategy || !popover) return false;

  popover.classList.add("usmle-organ-popover--rich");
  popover.innerHTML = renderRichPopoverContent(
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
  return true;
}
