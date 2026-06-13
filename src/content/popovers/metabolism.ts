import { getMetabolismById } from "../../data/metabolism";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderPediatricsSection,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderMetabolismPopover(
  metabolismId: string,
  popover: HTMLDivElement,
): boolean {
  const entry = getMetabolismById(metabolismId);
  if (!entry || !popover) return false;

  popover.classList.add("usmle-organ-popover--rich");
  popover.innerHTML = renderRichPopoverContent(
    `
    ${renderPopoverTitle(entry.name, "metabolism", entry.etymology)}
    <div class="usmle-organ-popover__meaning">${entry.definition}</div>
  `,
    `
    ${renderListSection("Pathway", entry.pathway)}
    ${renderListSection("Distinguish from", entry.distinguishFrom ?? [])}
    ${renderListSection("Boards pearls", entry.boardsPearls)}
    ${entry.pediatrics ? renderPediatricsSection(entry.pediatrics) : ""}
  `,
  );
  return true;
}
