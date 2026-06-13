import { getSignalingById } from "../../data/signaling";
import { renderPopoverTitle } from "../popoverIcons";
import {
  renderListSection,
  renderPediatricsSection,
  renderRichPopoverContent,
} from "../popoverShared";

export function renderSignalingPopover(
  signalingId: string,
  popover: HTMLDivElement,
): boolean {
  const molecule = getSignalingById(signalingId);
  if (!molecule || !popover) return false;

  const meta = [
    `<strong>Type:</strong> ${molecule.type}`,
    molecule.source ? `<strong>Source:</strong> ${molecule.source}` : "",
    molecule.receptor ? `<strong>Receptor:</strong> ${molecule.receptor}` : "",
  ]
    .filter(Boolean)
    .join(" · ");

  popover.classList.add("usmle-organ-popover--rich");
  popover.innerHTML = renderRichPopoverContent(
    `
    ${renderPopoverTitle(molecule.name, "signaling", molecule.etymology)}
    ${meta ? `<div class="usmle-organ-popover__layer">${meta}</div>` : ""}
    <div class="usmle-organ-popover__section-label">Function</div>
    <div class="usmle-organ-popover__mechanism">${molecule.function}</div>
    ${molecule.mnemonic ? `<div class="usmle-organ-popover__section-label">Mnemonic</div><div class="usmle-organ-popover__mechanism">${molecule.mnemonic}</div>` : ""}
  `,
    `
    ${renderListSection("Clinical relevance", molecule.clinicalRelevance)}
    ${renderListSection("Distinguish from", molecule.distinguishFrom ?? [])}
    ${renderListSection("Boards pearls", molecule.boardsPearls)}
    ${molecule.pediatrics ? renderPediatricsSection(molecule.pediatrics) : ""}
  `,
  );
  return true;
}
