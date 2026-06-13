import { getPathogenesisById } from "../../data/pathogenesis";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderPediatricsSection,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderPathogenesisPopover(
  pathogenesisId: string,
  popover: HTMLDivElement,
): boolean {
  const entry = getPathogenesisById(pathogenesisId);
  if (!entry || !popover) return false;

  popover.classList.add("usmle-organ-popover--rich");
  popover.innerHTML = renderRichPopoverContent(
    `
    ${renderPopoverTitle(entry.name, "pathogenesis", entry.etymology)}
    <div class="usmle-organ-popover__meaning">${entry.definition}</div>
  `,
    `
    ${renderListSection("Examples", entry.examples)}
    ${renderListSection("Distinguish from", entry.distinguishFrom ?? [])}
    ${renderListSection("Boards pearls", entry.boardsPearls)}
    ${entry.pediatrics ? renderPediatricsSection(entry.pediatrics) : ""}
  `,
  );
  return true;
}
