import {
  ALIASES_BY_TERM_KEY,
  deserializeTermEntries,
} from "../generated/aliasIndex";
import {
  clearHighlightQueue,
  enqueueHighlightRoot,
  enqueueHighlightRoots,
  getIsApplyingHighlights,
} from "./scanScheduler";
import {
  buildTermTrie,
  findAllMatchesInTrie,
  normalizedWordKey,
  type MatchValidationContext,
} from "./termMatcher";
import type { ChipPopoverTarget } from "./popoverLoader";
import {
  getSiteScanConfig,
  SCAN_ZONE,
  type ScanAreaSelector,
} from "./siteConfig";
import type { TermKind, TermMatch } from "./termTypes";

const ORGAN_CHIP_CLASS = "usmle-organ-chip";
const HEART_SOUND_CHIP_CLASS = "usmle-heart-sound-chip";
const HEART_MURMUR_CHIP_CLASS = "usmle-heart-murmur-chip";
const HEMODYNAMIC_CHIP_CLASS = "usmle-hemodynamic-chip";
const SYMPTOM_CHIP_CLASS = "usmle-symptom-chip";
const MEDICATION_CHIP_CLASS = "usmle-medication-chip";
const LAB_CHIP_CLASS = "usmle-lab-chip";
const NEPHRON_CHIP_CLASS = "usmle-nephron-chip";
const CONDITION_CHIP_CLASS = "usmle-condition-chip";
const PROTEIN_CHIP_CLASS = "usmle-protein-chip";
const SIGNALING_CHIP_CLASS = "usmle-signaling-chip";
const ECG_CHIP_CLASS = "usmle-ecg-chip";
const PROCEDURE_CHIP_CLASS = "usmle-procedure-chip";
const CLINICAL_STRATEGY_CHIP_CLASS = "usmle-clinical-strategy-chip";
const CELL_CHIP_CLASS = "usmle-cell-chip";
const PATHOGENESIS_CHIP_CLASS = "usmle-pathogenesis-chip";
const METABOLISM_CHIP_CLASS = "usmle-metabolism-chip";
const MICROBIOLOGY_CHIP_CLASS = "usmle-microbiology-chip";
const MUSCULOSKELETAL_CHIP_CLASS = "usmle-musculoskeletal-chip";
const CHIP_SELECTOR = `.${ORGAN_CHIP_CLASS}, .${HEART_SOUND_CHIP_CLASS}, .${HEART_MURMUR_CHIP_CLASS}, .${HEMODYNAMIC_CHIP_CLASS}, .${SYMPTOM_CHIP_CLASS}, .${MEDICATION_CHIP_CLASS}, .${LAB_CHIP_CLASS}, .${NEPHRON_CHIP_CLASS}, .${CONDITION_CHIP_CLASS}, .${PROTEIN_CHIP_CLASS}, .${SIGNALING_CHIP_CLASS}, .${ECG_CHIP_CLASS}, .${PROCEDURE_CHIP_CLASS}, .${CLINICAL_STRATEGY_CHIP_CLASS}, .${CELL_CHIP_CLASS}, .${PATHOGENESIS_CHIP_CLASS}, .${METABOLISM_CHIP_CLASS}, .${MICROBIOLOGY_CHIP_CLASS}, .${MUSCULOSKELETAL_CHIP_CLASS}`;
const OUR_CHIP_CLASSES = [
  ORGAN_CHIP_CLASS,
  HEART_SOUND_CHIP_CLASS,
  HEART_MURMUR_CHIP_CLASS,
  HEMODYNAMIC_CHIP_CLASS,
  SYMPTOM_CHIP_CLASS,
  MEDICATION_CHIP_CLASS,
  LAB_CHIP_CLASS,
  NEPHRON_CHIP_CLASS,
  CONDITION_CHIP_CLASS,
  PROTEIN_CHIP_CLASS,
  SIGNALING_CHIP_CLASS,
  ECG_CHIP_CLASS,
  PROCEDURE_CHIP_CLASS,
  CLINICAL_STRATEGY_CHIP_CLASS,
  CELL_CHIP_CLASS,
  PATHOGENESIS_CHIP_CLASS,
  METABOLISM_CHIP_CLASS,
  MICROBIOLOGY_CHIP_CLASS,
  MUSCULOSKELETAL_CHIP_CLASS,
] as const;
const POPOVER_CLASS = "usmle-organ-popover";
const POPOVER_TITLE_SELECTOR = ".usmle-organ-popover__title";
const SKIP_TAGS = new Set([
  "SCRIPT",
  "STYLE",
  "TEXTAREA",
  "INPUT",
  "SELECT",
  "OPTION",
  "NOSCRIPT",
]);

/** Block containers whose descendant text is matched as one string (handles <br>-split headers). */
const COALESCE_ROOT_TAGS = new Set([
  "TH",
  "TD",
  "CAPTION",
  "P",
  "LI",
  "DT",
  "DD",
  "DIV",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "LABEL",
  "FIGCAPTION",
  "LEGEND",
  "BLOCKQUOTE",
  "ARTICLE",
  "SECTION",
  "MAIN",
  "ASIDE",
]);

const BLOCK_SEPARATOR_TAGS = new Set([
  ...COALESCE_ROOT_TAGS,
  "ADDRESS",
  "DL",
  "FIELDSET",
  "FORM",
  "HR",
  "MENU",
  "NAV",
  "OL",
  "PRE",
  "TABLE",
  "TBODY",
  "TFOOT",
  "THEAD",
  "TR",
  "UL",
]);

interface TextSegment {
  node: Text;
  start: number;
  end: number;
}

interface CoalescedTextView {
  text: string;
  segments: TextSegment[];
}

type TermTrie = ReturnType<typeof buildTermTrie>;

interface HighlightedAliasRecord {
  term: TermMatch;
  zone: number;
}

let termTrie: TermTrie | null = null;
let highlightedAliasesOnQuestion = new Map<string, HighlightedAliasRecord>();
let suppressedPopoverTermKeys = new Set<string>();
let questionFingerprint = "";
let allowPopoverScan = false;
const pendingScanRoots = new Set<Element>();
const siteScanConfig = getSiteScanConfig();
const isUWorld = siteScanConfig.kind === "uworld";

const QUESTION_HEADER_RE =
  /(?:Question|Q\.?|Item)\s*\d+(?:\s*(?:of|\/)\s*\d+)?/i;

/** UWorld question areas — avoid scanning the entire app shell on every mutation. */
const SCAN_AREA_SELECTORS = ["#questionInformation", "#explanation"] as const;

const SCAN_DEBOUNCE_MS = 400;
const SCAN_IDLE_TIMEOUT_MS = 800;

interface ScanAreaRecord {
  element: Element;
  zone: number;
  forceVisible: boolean;
}

function termKey(term: TermMatch): string {
  return `${term.kind}:${term.id.toLowerCase()}`;
}

function getTermTrie(): TermTrie {
  if (!termTrie) termTrie = buildTermTrie(deserializeTermEntries());
  return termTrie;
}

function aliasKeyFromMatch(matchText: string): string {
  return normalizedWordKey(matchText);
}

function unwrapAllChips(): void {
  for (const chip of document.querySelectorAll(CHIP_SELECTOR)) {
    unwrapChip(chip);
  }
}

function getScanZone(node: Node): number {
  const el = node instanceof Element ? node : node.parentElement;
  if (!el) return SCAN_ZONE.OTHER;

  if (isUWorld) {
    if (el.closest("#explanation")) return SCAN_ZONE.EXPLANATION;
    if (el.closest("#questionInformation")) return SCAN_ZONE.QUESTION;
    return SCAN_ZONE.OTHER;
  }

  const record = getConfiguredScanAreaRecords().find((area) =>
    area.element.contains(el),
  );
  return record?.zone ?? SCAN_ZONE.OTHER;
}

function isVisibleElement(el: Element): boolean {
  if (allowPopoverScan && el.closest(`.${POPOVER_CLASS}`)) {
    return true;
  }
  if (isUWorld) {
    if (el.closest("#questionInformation, #explanation")) {
      return true;
    }
  } else if (
    getConfiguredScanAreaRecords().some(
      (area) => area.forceVisible && area.element.contains(el),
    )
  ) {
    return true;
  }
  if (el instanceof HTMLElement && typeof el.checkVisibility === "function") {
    return el.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true });
  }
  const style = getComputedStyle(el);
  return (
    style.display !== "none" &&
    style.visibility !== "hidden" &&
    style.opacity !== "0"
  );
}

function chipSelectorForTerm(term: TermMatch): string {
  switch (term.kind) {
    case "heart-sound":
      return `[data-heart-sound-id="${CSS.escape(term.id)}"]`;
    case "heart-murmur":
      return `[data-heart-murmur-id="${CSS.escape(term.id)}"]`;
    case "hemodynamic":
      return `[data-hemodynamic-id="${CSS.escape(term.id)}"]`;
    case "symptom":
      return `[data-symptom-id="${CSS.escape(term.id)}"]`;
    case "medication":
      return `[data-medication-id="${CSS.escape(term.id)}"]`;
    case "lab":
      return `[data-lab-value-id="${CSS.escape(term.id)}"]`;
    case "nephron":
      return `[data-nephron-segment-id="${CSS.escape(term.id)}"]`;
    case "condition":
      return `[data-condition-id="${CSS.escape(term.id)}"]`;
    case "protein":
      return `[data-protein-id="${CSS.escape(term.id)}"]`;
    case "signaling":
      return `[data-signaling-id="${CSS.escape(term.id)}"]`;
    case "ecg":
      return `[data-ecg-finding-id="${CSS.escape(term.id)}"]`;
    case "procedure":
      return `[data-procedure-id="${CSS.escape(term.id)}"]`;
    case "clinical-strategy":
      return `[data-clinical-strategy-id="${CSS.escape(term.id)}"]`;
    case "cell":
      return `[data-cell-id="${CSS.escape(term.id)}"]`;
    case "pathogenesis":
      return `[data-pathogenesis-id="${CSS.escape(term.id)}"]`;
    case "metabolism":
      return `[data-metabolism-id="${CSS.escape(term.id)}"]`;
    case "microbiology":
      return `[data-microbiology-id="${CSS.escape(term.id)}"]`;
    case "musculoskeletal":
      return `[data-musculoskeletal-id="${CSS.escape(term.id)}"]`;
    default:
      return `[data-organ-id="${CSS.escape(term.id)}"]`;
  }
}

function unwrapChip(chip: Element): void {
  const text = chip.textContent ?? "";
  const parent = chip.parentNode;
  if (!parent) return;
  parent.replaceChild(chip.ownerDocument.createTextNode(text), chip);
  parent.normalize();
}

function evictAliasHighlight(aliasKey: string): void {
  const record = highlightedAliasesOnQuestion.get(aliasKey);
  highlightedAliasesOnQuestion.delete(aliasKey);
  if (!record) return;

  for (const chip of document.querySelectorAll(
    chipSelectorForTerm(record.term),
  )) {
    if (aliasKeyFromMatch(chip.textContent ?? "") === aliasKey) {
      unwrapChip(chip);
    }
  }
}

function isAlreadyHighlighted(
  term: TermMatch,
  matchText: string,
  zone: number,
): boolean {
  if (suppressedPopoverTermKeys.has(termKey(term))) return true;

  const aliasKey = aliasKeyFromMatch(matchText);
  const existing = highlightedAliasesOnQuestion.get(aliasKey);
  if (existing && zone < existing.zone) {
    evictAliasHighlight(aliasKey);
    return false;
  }

  return existing !== undefined;
}

function recordHighlight(term: TermMatch, matchText: string, zone: number): void {
  const aliasKey = aliasKeyFromMatch(matchText);
  if (!aliasKey) return;
  highlightedAliasesOnQuestion.set(aliasKey, { term, zone });
}

function termMatchFromPopoverTarget(target: ChipPopoverTarget): TermMatch {
  const key = `${target.kind}:${target.id.toLowerCase()}`;
  const aliases = ALIASES_BY_TERM_KEY[key];
  return {
    kind: target.kind as TermKind,
    id: target.id,
    alias: aliases?.[0] ?? target.id,
  };
}

function excludePopoverOwnTerm(target: ChipPopoverTarget): void {
  suppressedPopoverTermKeys.add(termKey(termMatchFromPopoverTarget(target)));
}

function collectAreasForGroup(
  group: readonly ScanAreaSelector[],
): ScanAreaRecord[] {
  const areas: ScanAreaRecord[] = [];
  const seen = new Set<Element>();

  for (const areaSelector of group) {
    for (const element of document.querySelectorAll(areaSelector.selector)) {
      if (seen.has(element)) continue;
      seen.add(element);
      areas.push({
        element,
        zone: areaSelector.zone,
        forceVisible: areaSelector.forceVisible ?? false,
      });
    }
  }

  return areas;
}

function getConfiguredScanAreaRecords(): ScanAreaRecord[] {
  for (const group of siteScanConfig.areaGroups) {
    const areas = collectAreasForGroup(group);
    if (areas.length > 0) return areas;
  }

  return document.body
    ? [{ element: document.body, zone: SCAN_ZONE.OTHER, forceVisible: false }]
    : [];
}

function getScanAreas(): Element[] {
  if (isUWorld) {
    const areas = SCAN_AREA_SELECTORS.flatMap((selector) => {
      const el = document.querySelector(selector);
      return el ? [el] : [];
    });
    if (areas.length > 0) return areas;
    return document.body ? [document.body] : [];
  }

  return getConfiguredScanAreaRecords().map((area) => area.element);
}

function nodeInScanArea(node: Node): boolean {
  const areas = getScanAreas();
  if (areas.length === 1 && areas[0] === document.body) {
    return !isInsidePopover(node);
  }
  const el = node instanceof Element ? node : node.parentElement;
  if (!el || isInsidePopover(el)) return false;
  return areas.some((area) => area.contains(el));
}

function getQuestionFingerprint(): string {
  if (!isUWorld && siteScanConfig.fingerprintMode === "url") {
    return window.location.href;
  }

  const parts: string[] = [];
  for (const area of getScanAreas()) {
    parts.push((area as HTMLElement).innerText ?? "");
  }
  const text = parts.join(" ").replace(/\s+/g, " ").trim();
  const header = text.match(QUESTION_HEADER_RE)?.[0] ?? "";
  return `${header}::${text.slice(0, 600)}`;
}

function resetQuestionHighlights(): void {
  highlightedAliasesOnQuestion.clear();
  suppressedPopoverTermKeys.clear();
  questionFingerprint = "";
}

function syncQuestionContext(): boolean {
  const next = getQuestionFingerprint();
  const changed = questionFingerprint !== "" && next !== questionFingerprint;
  if (changed) {
    unwrapAllChips();
    highlightedAliasesOnQuestion.clear();
    suppressedPopoverTermKeys.clear();
    pendingScanRoots.clear();
    clearHighlightQueue();
  }
  questionFingerprint = next;
  return changed;
}

function nodeContainsOurChip(node: Node): boolean {
  if (!(node instanceof Element)) return false;
  for (const cls of OUR_CHIP_CLASSES) {
    if (node.classList.contains(cls)) return true;
  }
  return node.querySelector(CHIP_SELECTOR) !== null;
}

function mutationsRemovedOurChips(mutations: MutationRecord[]): boolean {
  for (const mutation of mutations) {
    for (const node of mutation.removedNodes) {
      if (nodeContainsOurChip(node)) return true;
    }
  }
  return false;
}

function findAllMatches(
  text: string,
  zone: number,
): { start: number; end: number; matchText: string; term: TermMatch }[] {
  const ctx: MatchValidationContext = {
    zone,
    isAlreadyHighlighted,
  };
  return findAllMatchesInTrie(text, getTermTrie(), ctx, recordHighlight);
}

function shouldSkipNode(node: Node): boolean {
  let parent = node.parentElement;
  while (parent) {
    if (SKIP_TAGS.has(parent.tagName)) return true;
    for (const cls of OUR_CHIP_CLASSES) {
      if (parent.classList.contains(cls)) return true;
    }
    if (!allowPopoverScan && parent.classList.contains(POPOVER_CLASS)) {
      return true;
    }
    if (allowPopoverScan && isInsidePopoverTitle(parent)) {
      return true;
    }
    const closestSelector = allowPopoverScan
      ? CHIP_SELECTOR
      : `${CHIP_SELECTOR}, .${POPOVER_CLASS}`;
    if (parent.closest(closestSelector)) return true;
    parent = parent.parentElement;
  }
  return false;
}

function createChip(
  doc: Document,
  matchText: string,
  term: TermMatch,
): HTMLButtonElement {
  const button = doc.createElement("button");
  button.type = "button";
  if (term.kind === "heart-sound") {
    button.className = HEART_SOUND_CHIP_CLASS;
    button.dataset.heartSoundId = term.id;
  } else if (term.kind === "heart-murmur") {
    button.className = HEART_MURMUR_CHIP_CLASS;
    button.dataset.heartMurmurId = term.id;
  } else if (term.kind === "hemodynamic") {
    button.className = HEMODYNAMIC_CHIP_CLASS;
    button.dataset.hemodynamicId = term.id;
  } else if (term.kind === "symptom") {
    button.className = SYMPTOM_CHIP_CLASS;
    button.dataset.symptomId = term.id;
  } else if (term.kind === "medication") {
    button.className = MEDICATION_CHIP_CLASS;
    button.dataset.medicationId = term.id;
  } else if (term.kind === "lab") {
    button.className = LAB_CHIP_CLASS;
    button.dataset.labValueId = term.id;
  } else if (term.kind === "nephron") {
    button.className = NEPHRON_CHIP_CLASS;
    button.dataset.nephronSegmentId = term.id;
  } else if (term.kind === "condition") {
    button.className = CONDITION_CHIP_CLASS;
    button.dataset.conditionId = term.id;
  } else if (term.kind === "protein") {
    button.className = PROTEIN_CHIP_CLASS;
    button.dataset.proteinId = term.id;
  } else if (term.kind === "signaling") {
    button.className = SIGNALING_CHIP_CLASS;
    button.dataset.signalingId = term.id;
  } else if (term.kind === "ecg") {
    button.className = ECG_CHIP_CLASS;
    button.dataset.ecgFindingId = term.id;
  } else if (term.kind === "procedure") {
    button.className = PROCEDURE_CHIP_CLASS;
    button.dataset.procedureId = term.id;
  } else if (term.kind === "clinical-strategy") {
    button.className = CLINICAL_STRATEGY_CHIP_CLASS;
    button.dataset.clinicalStrategyId = term.id;
  } else if (term.kind === "cell") {
    button.className = CELL_CHIP_CLASS;
    button.dataset.cellId = term.id;
  } else if (term.kind === "pathogenesis") {
    button.className = PATHOGENESIS_CHIP_CLASS;
    button.dataset.pathogenesisId = term.id;
  } else if (term.kind === "metabolism") {
    button.className = METABOLISM_CHIP_CLASS;
    button.dataset.metabolismId = term.id;
  } else if (term.kind === "microbiology") {
    button.className = MICROBIOLOGY_CHIP_CLASS;
    button.dataset.microbiologyId = term.id;
  } else if (term.kind === "musculoskeletal") {
    button.className = MUSCULOSKELETAL_CHIP_CLASS;
    button.dataset.musculoskeletalId = term.id;
  } else {
    button.className = ORGAN_CHIP_CLASS;
    button.dataset.organId = term.id;
  }
  button.textContent = matchText;
  return button;
}

function getCoalesceRoot(textNode: Text): Element | null {
  let el: Element | null = textNode.parentElement;
  while (el) {
    if (COALESCE_ROOT_TAGS.has(el.tagName)) return el;
    if (el === document.body) return textNode.parentElement;
    el = el.parentElement;
  }
  return textNode.parentElement;
}

function shouldSkipElement(el: Element): boolean {
  if (SKIP_TAGS.has(el.tagName)) return true;
  for (const cls of OUR_CHIP_CLASSES) {
    if (el.classList.contains(cls)) return true;
  }
  if (!allowPopoverScan && el.classList.contains(POPOVER_CLASS)) return true;
  if (allowPopoverScan && isInsidePopoverTitle(el)) return true;
  const closestSelector = allowPopoverScan
    ? CHIP_SELECTOR
    : `${CHIP_SELECTOR}, .${POPOVER_CLASS}`;
  if (el.closest(closestSelector)) return true;
  return false;
}

function appendCoalescedSeparator(text: string): string {
  if (text.length === 0) return text;
  const last = text[text.length - 1];
  if (/\s/.test(last)) return text;
  return `${text} `;
}

function isBlockSeparatorElement(el: Element, root: Element): boolean {
  return el !== root && BLOCK_SEPARATOR_TAGS.has(el.tagName);
}

function buildCoalescedText(root: Element): CoalescedTextView | null {
  const segments: TextSegment[] = [];
  let text = "";

  function walk(node: Node): void {
    if (node.nodeType === Node.TEXT_NODE) {
      const textNode = node as Text;
      if (shouldSkipNode(textNode)) return;
      const content = textNode.textContent ?? "";
      if (!content) return;
      const start = text.length;
      text += content;
      segments.push({ node: textNode, start, end: text.length });
      return;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const el = node as Element;
    if (shouldSkipElement(el)) return;
    if (!isVisibleElement(el)) return;

    if (el.tagName === "BR") {
      text = appendCoalescedSeparator(text);
      return;
    }

    const separatesBlock = isBlockSeparatorElement(el, root);
    if (separatesBlock) {
      text = appendCoalescedSeparator(text);
    }

    for (const child of el.childNodes) {
      walk(child);
    }

    if (separatesBlock) {
      text = appendCoalescedSeparator(text);
    }
  }

  walk(root);
  if (!text.trim() || segments.length === 0) return null;
  return { text, segments };
}

function locateOffset(
  segments: TextSegment[],
  offset: number,
  bias: "start" | "end",
): { node: Text; nodeOffset: number } | null {
  for (const segment of segments) {
    const isInSegment =
      bias === "start"
        ? offset >= segment.start && offset < segment.end
        : offset > segment.start && offset <= segment.end;
    if (isInSegment) {
      return { node: segment.node, nodeOffset: offset - segment.start };
    }
  }

  for (const segment of segments) {
    if (offset < segment.start) {
      return { node: segment.node, nodeOffset: 0 };
    }
  }

  const last = segments[segments.length - 1];
  return {
    node: last.node,
    nodeOffset: last.node.textContent?.length ?? 0,
  };
}

function applyCoalescedMatch(
  root: Element,
  view: CoalescedTextView,
  match: { start: number; end: number; matchText: string; term: TermMatch },
): boolean {
  const start = locateOffset(view.segments, match.start, "start");
  const end = locateOffset(view.segments, match.end, "end");
  if (!start || !end) return false;
  if (!start.node.isConnected || !end.node.isConnected) return false;

  const range = root.ownerDocument.createRange();
  range.setStart(start.node, start.nodeOffset);
  range.setEnd(end.node, end.nodeOffset);

  const chip = createChip(root.ownerDocument, match.matchText, match.term);
  const contents = range.extractContents();
  chip.textContent = "";
  chip.append(contents);
  range.insertNode(chip);
  recordHighlight(match.term, match.matchText, getScanZone(root));
  return true;
}

function highlightCoalescedRoot(root: Element, zone: number): boolean {
  const view = buildCoalescedText(root);
  if (!view) return false;

  const matches = findAllMatches(view.text, zone);
  if (matches.length === 0) return false;

  let changed = false;
  for (let i = matches.length - 1; i >= 0; i--) {
    const currentView = buildCoalescedText(root);
    if (!currentView) break;
    if (applyCoalescedMatch(root, currentView, matches[i]!)) {
      changed = true;
    }
  }
  return changed;
}

function collectCoalesceRoots(scanRoot: Node): Element[] {
  const textNodes = collectHighlightableTextNodes(scanRoot);
  const seen = new Set<Element>();
  const roots: Element[] = [];

  for (const textNode of textNodes) {
    const root = getCoalesceRoot(textNode);
    if (!root || seen.has(root)) continue;
    if (!allowPopoverScan && isInsidePopover(root)) continue;
    if (!isVisibleElement(root)) continue;
    seen.add(root);
    roots.push(root);
  }

  return roots.sort((a, b) => {
    const zoneDiff = getScanZone(a) - getScanZone(b);
    if (zoneDiff !== 0) return zoneDiff;
    return compareNodeDocumentOrder(a, b);
  });
}

function compareNodeDocumentOrder(a: Node, b: Node): number {
  const pos = a.compareDocumentPosition(b);
  if (pos & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
  if (pos & Node.DOCUMENT_POSITION_PRECEDING) return 1;
  return 0;
}

function collectHighlightableTextNodes(root: Node): Text[] {
  const acceptNode = (node: Node): number => {
    if (!allowPopoverScan && isInsidePopover(node)) {
      return NodeFilter.FILTER_REJECT;
    }
    if (shouldSkipNode(node)) return NodeFilter.FILTER_REJECT;
    const text = node.textContent ?? "";
    if (!text.trim()) return NodeFilter.FILTER_REJECT;
    return NodeFilter.FILTER_ACCEPT;
  };

  const textNodes: Text[] = [];

  if (isUWorld) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode,
    });

    let current = walker.nextNode();
    while (current) {
      textNodes.push(current as Text);
      current = walker.nextNode();
    }
  } else {
    const seen = new Set<Text>();

    const collectFrom = (scanRoot: Node): void => {
      const doc = scanRoot.ownerDocument ?? document;
      const walker = doc.createTreeWalker(
        scanRoot,
        NodeFilter.SHOW_TEXT,
        { acceptNode },
      );

      let current = walker.nextNode();
      while (current) {
        const textNode = current as Text;
        if (!seen.has(textNode)) {
          seen.add(textNode);
          textNodes.push(textNode);
        }
        current = walker.nextNode();
      }

      const elementWalker = doc.createTreeWalker(
        scanRoot,
        NodeFilter.SHOW_ELEMENT,
      );
      let element = elementWalker.nextNode();
      while (element) {
        if (element instanceof Element && element.shadowRoot) {
          collectFrom(element.shadowRoot);
        }
        element = elementWalker.nextNode();
      }
    };

    collectFrom(root);
  }

  return textNodes.sort((a, b) => {
    const zoneDiff = getScanZone(a) - getScanZone(b);
    if (zoneDiff !== 0) return zoneDiff;
    return compareNodeDocumentOrder(a, b);
  });
}

function isInsidePopover(node: Node): boolean {
  const el = node instanceof Element ? node : node.parentElement;
  return el?.closest(`.${POPOVER_CLASS}`) != null;
}

function isInsidePopoverTitle(node: Node): boolean {
  const el = node instanceof Element ? node : node.parentElement;
  return el?.closest(POPOVER_TITLE_SELECTOR) != null;
}

function collectCoalesceRootsForAreas(areas: Element[]): Element[] {
  const seen = new Set<Element>();
  const roots: Element[] = [];
  for (const area of areas) {
    for (const root of collectCoalesceRoots(area)) {
      if (seen.has(root)) continue;
      seen.add(root);
      roots.push(root);
    }
  }
  return roots.sort((a, b) => {
    const zoneDiff = getScanZone(a) - getScanZone(b);
    if (zoneDiff !== 0) return zoneDiff;
    return compareNodeDocumentOrder(a, b);
  });
}

function flushPendingScans(): void {
  if (pendingScanRoots.size === 0) return;
  const roots = [...pendingScanRoots].filter((root) => root.isConnected);
  pendingScanRoots.clear();
  enqueueHighlightRoots(roots, getScanZone, highlightCoalescedRoot);
}

function scheduleIncrementalScan(from: Node): void {
  if (isUWorld) {
    if (!nodeInScanArea(from)) return;
    for (const root of collectCoalesceRoots(from)) {
      pendingScanRoots.add(root);
    }
    return;
  }

  const rootsToScan: Node[] = [];
  if (nodeInScanArea(from)) {
    rootsToScan.push(from);
  } else if (from instanceof Element) {
    for (const area of getScanAreas()) {
      if (from.contains(area)) {
        rootsToScan.push(area);
      }
    }
  }

  for (const rootToScan of rootsToScan) {
    for (const root of collectCoalesceRoots(rootToScan)) {
      pendingScanRoots.add(root);
    }
  }
}

function runScanWork(): void {
  const questionChanged = syncQuestionContext();
  if (questionChanged || pendingScanRoots.size === 0) {
    performFullScan();
    return;
  }
  flushPendingScans();
}

function performFullScan(): void {
  if (!document.body || isInsidePopover(document.body)) return;

  pendingScanRoots.clear();
  const coalesceRoots = collectCoalesceRootsForAreas(getScanAreas());
  enqueueHighlightRoots(coalesceRoots, getScanZone, highlightCoalescedRoot);
}

function scanPage(): void {
  syncQuestionContext();
  performFullScan();
}

export function scanRoot(root: Node): void {
  if (isInsidePopover(root)) return;
  if (root === document.body) {
    scanPage();
    return;
  }

  syncQuestionContext();
  if (!nodeInScanArea(root)) return;

  for (const coalesceRoot of collectCoalesceRoots(root)) {
    enqueueHighlightRoot(
      coalesceRoot,
      getScanZone(coalesceRoot),
      highlightCoalescedRoot,
    );
  }
}

export function schedulePopoverRootScan(
  popover: Element,
  target: ChipPopoverTarget,
): void {
  const idle =
    window.requestIdleCallback ??
    ((cb: IdleRequestCallback) =>
      window.setTimeout(
        () => cb({ didTimeout: false, timeRemaining: () => 50 }),
        0,
      ));
  idle(() => {
    if (!popover.isConnected) return;
    scanPopoverRoot(popover, target);
  });
}

export function scanPopoverRoot(
  popover: Element,
  target: ChipPopoverTarget,
): void {
  if (!popover.isConnected) return;

  const previousHighlightedAliasesOnQuestion = highlightedAliasesOnQuestion;
  const previousSuppressedPopoverTermKeys = suppressedPopoverTermKeys;
  const previousAllowPopoverScan = allowPopoverScan;

  highlightedAliasesOnQuestion = new Map();
  suppressedPopoverTermKeys = new Set();
  allowPopoverScan = true;
  excludePopoverOwnTerm(target);
  for (const coalesceRoot of collectCoalesceRoots(popover)) {
    highlightCoalescedRoot(coalesceRoot, SCAN_ZONE.OTHER);
  }
  highlightedAliasesOnQuestion = previousHighlightedAliasesOnQuestion;
  suppressedPopoverTermKeys = previousSuppressedPopoverTermKeys;
  allowPopoverScan = previousAllowPopoverScan;
}

export function startOrganScanner(): void {
  if (!document.body) return;

  resetQuestionHighlights();
  scanPage();

  let debounceTimer: ReturnType<typeof setTimeout> | null = null;
  let scanScheduled = false;

  const runDebouncedScan = (): void => {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const idle =
        window.requestIdleCallback ??
        ((cb: IdleRequestCallback) =>
          window.setTimeout(
            () => cb({ didTimeout: false, timeRemaining: () => 50 }),
            0,
          ));
      idle(
        () => {
          runScanWork();
          scanScheduled = false;
          debounceTimer = null;
        },
        { timeout: SCAN_IDLE_TIMEOUT_MS },
      );
    }, SCAN_DEBOUNCE_MS);
  };

  const processUWorldMutations = (mutations: MutationRecord[]): void => {
    for (const mutation of mutations) {
      if (!nodeInScanArea(mutation.target)) continue;

      if (mutation.type === "characterData") {
        scheduleIncrementalScan(mutation.target);
        scanScheduled = true;
        continue;
      }

      for (const node of mutation.addedNodes) {
        if (node instanceof Element) {
          let isOurChip = false;
          for (const cls of OUR_CHIP_CLASSES) {
            if (node.classList.contains(cls)) {
              isOurChip = true;
              break;
            }
          }
          if (isOurChip) continue;
        }
        scheduleIncrementalScan(node);
        scanScheduled = true;
      }
    }
  };

  const processGenericMutations = (mutations: MutationRecord[]): void => {
    if (
      siteScanConfig.fingerprintMode === "url" &&
      questionFingerprint !== "" &&
      getQuestionFingerprint() !== questionFingerprint
    ) {
      scanScheduled = true;
    }

    for (const mutation of mutations) {
      const targetInScanArea = nodeInScanArea(mutation.target);

      if (mutation.type === "characterData") {
        if (!targetInScanArea) continue;
        scheduleIncrementalScan(mutation.target);
        scanScheduled = true;
        continue;
      }

      for (const node of mutation.addedNodes) {
        if (node instanceof Element) {
          let isOurChip = false;
          for (const cls of OUR_CHIP_CLASSES) {
            if (node.classList.contains(cls)) {
              isOurChip = true;
              break;
            }
          }
          if (isOurChip) continue;
        }
        if (!targetInScanArea && !nodeInScanArea(node)) {
          const containsScanArea =
            node instanceof Element &&
            getScanAreas().some((area) => node.contains(area));
          if (!containsScanArea) continue;
        }
        scheduleIncrementalScan(node);
        scanScheduled = true;
      }
    }
  };

  const observer = new MutationObserver((mutations) => {
    if (getIsApplyingHighlights()) return;

    if (mutationsRemovedOurChips(mutations)) {
      resetQuestionHighlights();
    }

    if (isUWorld) {
      processUWorldMutations(mutations);
    } else {
      processGenericMutations(mutations);
    }

    if (!scanScheduled) return;
    runDebouncedScan();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  if (!isUWorld) {
    const onNavigation = (): void => {
      scanScheduled = true;
      runDebouncedScan();
    };

    window.addEventListener("popstate", onNavigation);
    window.addEventListener("hashchange", onNavigation);

    const { pushState, replaceState } = history;
    history.pushState = function pushStatePatched(
      this: History,
      ...args: Parameters<History["pushState"]>
    ) {
      const result = pushState.apply(this, args);
      onNavigation();
      return result;
    };
    history.replaceState = function replaceStatePatched(
      this: History,
      ...args: Parameters<History["replaceState"]>
    ) {
      const result = replaceState.apply(this, args);
      onNavigation();
      return result;
    };
  }
}
