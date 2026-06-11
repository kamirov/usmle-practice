import { buildClinicalStrategyAliasIndex } from "../data/clinicalStrategies";
import { buildConditionAliasIndex } from "../data/conditions";
import { buildEcgFindingAliasIndex } from "../data/ecgFindings";
import { buildHeartSoundAliasIndex } from "../data/heartSounds";
import { buildHemodynamicAliasIndex } from "../data/hemodynamics";
import { buildProcedureAliasIndex } from "../data/procedures";
import { buildLabValueAliasIndex } from "../data/labValues";
import { buildMedicationAliasIndex } from "../data/medications";
import { buildNephronAliasIndex } from "../data/nephron";
import { buildAliasIndex } from "../data/organs";
import { buildProteinAliasIndex } from "../data/proteins";
import { buildSignalingAliasIndex } from "../data/signaling";
import { buildSymptomAliasIndex } from "../data/symptoms";

const ORGAN_CHIP_CLASS = "usmle-organ-chip";
const HEART_SOUND_CHIP_CLASS = "usmle-heart-sound-chip";
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
const CHIP_SELECTOR = `.${ORGAN_CHIP_CLASS}, .${HEART_SOUND_CHIP_CLASS}, .${HEMODYNAMIC_CHIP_CLASS}, .${SYMPTOM_CHIP_CLASS}, .${MEDICATION_CHIP_CLASS}, .${LAB_CHIP_CLASS}, .${NEPHRON_CHIP_CLASS}, .${CONDITION_CHIP_CLASS}, .${PROTEIN_CHIP_CLASS}, .${SIGNALING_CHIP_CLASS}, .${ECG_CHIP_CLASS}, .${PROCEDURE_CHIP_CLASS}, .${CLINICAL_STRATEGY_CHIP_CLASS}`;
const OUR_CHIP_CLASSES = [
  ORGAN_CHIP_CLASS,
  HEART_SOUND_CHIP_CLASS,
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
] as const;
const POPOVER_CLASS = "usmle-organ-popover";
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

interface TextSegment {
  node: Text;
  start: number;
  end: number;
}

interface CoalescedTextView {
  text: string;
  segments: TextSegment[];
}

type TermKind =
  | "organ"
  | "heart-sound"
  | "hemodynamic"
  | "symptom"
  | "medication"
  | "lab"
  | "nephron"
  | "condition"
  | "protein"
  | "signaling"
  | "ecg"
  | "procedure"
  | "clinical-strategy";

interface TermMatch {
  alias: string;
  kind: TermKind;
  id: string;
}

let termIndex: TermMatch[] | null = null;
let aliasesByTermKey: Map<string, Set<string>> | null = null;
const highlightedOnQuestion = new Set<string>();
const highlightedWordsOnQuestion = new Set<string>();
const highlightedTermZone = new Map<string, number>();
let questionFingerprint = "";
let isApplyingHighlights = false;

const QUESTION_HEADER_RE =
  /(?:Question|Q\.?|Item)\s*\d+(?:\s*(?:of|\/)\s*\d+)?/i;

/** Lower number = scanned and claimed first (UWorld question stem + options). */
const SCAN_ZONE = {
  QUESTION: 0,
  EXPLANATION: 2,
  OTHER: 3,
} as const;

function termKey(term: TermMatch): string {
  return `${term.kind}:${term.id.toLowerCase()}`;
}

/** Strip styling/invisible chars so bold, Unicode styled, and plain text dedupe together. */
function normalizeForComparison(text: string): string {
  return text
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\u00AD\u200B-\u200D\u2060\uFEFF]/g, "");
}

function normalizedWordKey(matchText: string): string {
  return normalizeForComparison(matchText).replace(/\s+/g, " ").trim();
}

function isTermHighlightedInDom(term: TermMatch): boolean {
  return document.querySelector(chipSelectorForTerm(term)) !== null;
}

function getAliasesForTerm(term: TermMatch): Set<string> {
  if (!aliasesByTermKey) {
    aliasesByTermKey = new Map();
    for (const entry of getTermIndex()) {
      const key = termKey(entry);
      if (!aliasesByTermKey.has(key)) aliasesByTermKey.set(key, new Set());
      const aliases = aliasesByTermKey.get(key)!;
      aliases.add(normalizedWordKey(entry.alias));
      if (entry.kind === "organ" && !entry.alias.endsWith("s")) {
        aliases.add(normalizedWordKey(`${entry.alias}s`));
        aliases.add(normalizedWordKey(`${entry.alias}es`));
      }
    }
  }
  return (
    aliasesByTermKey.get(termKey(term)) ??
    new Set([normalizedWordKey(term.alias)])
  );
}

function isSynonymAlreadyHighlighted(term: TermMatch): boolean {
  const key = termKey(term);
  if (highlightedOnQuestion.has(key)) return true;
  if (isTermHighlightedInDom(term)) return true;

  const aliases = getAliasesForTerm(term);
  for (const alias of aliases) {
    if (highlightedWordsOnQuestion.has(alias)) return true;
  }

  for (const chip of document.querySelectorAll(CHIP_SELECTOR)) {
    if (aliases.has(normalizedWordKey(chip.textContent ?? ""))) return true;
  }

  return false;
}

function unwrapAllChips(): void {
  for (const chip of document.querySelectorAll(CHIP_SELECTOR)) {
    unwrapChip(chip);
  }
}

function matchAliasLengthAt(
  text: string,
  index: number,
  alias: string,
): number | null {
  const target = normalizedWordKey(alias);
  if (!target) return null;

  let i = index;
  let matched = "";

  while (i < text.length && matched.length < target.length) {
    const codePoint = text.codePointAt(i);
    if (codePoint === undefined) break;
    const char = String.fromCodePoint(codePoint);
    matched += normalizeForComparison(char);
    i += char.length;
  }

  if (normalizedWordKey(matched) !== target) return null;
  return i - index;
}

function getScanZone(node: Node): number {
  const el =
    node instanceof Element ? node : node.parentElement;
  if (!el) return SCAN_ZONE.OTHER;
  if (el.closest("#explanation")) return SCAN_ZONE.EXPLANATION;
  if (el.closest("#questionInformation")) return SCAN_ZONE.QUESTION;
  return SCAN_ZONE.OTHER;
}

function isVisibleElement(el: Element): boolean {
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

function isVisibleNode(node: Node): boolean {
  let el = node.parentElement;
  while (el) {
    if (!isVisibleElement(el)) return false;
    el = el.parentElement;
  }
  return true;
}

function chipSelectorForTerm(term: TermMatch): string {
  switch (term.kind) {
    case "heart-sound":
      return `[data-heart-sound-id="${CSS.escape(term.id)}"]`;
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

function evictTermHighlight(term: TermMatch): void {
  const key = termKey(term);
  highlightedOnQuestion.delete(key);
  highlightedTermZone.delete(key);

  for (const alias of getAliasesForTerm(term)) {
    highlightedWordsOnQuestion.delete(alias);
  }

  for (const chip of document.querySelectorAll(chipSelectorForTerm(term))) {
    unwrapChip(chip);
  }
}

function isAlreadyHighlighted(
  term: TermMatch,
  _matchText: string,
  zone: number,
): boolean {
  const key = termKey(term);
  const existingZone = highlightedTermZone.get(key);
  if (existingZone !== undefined && zone < existingZone) {
    evictTermHighlight(term);
    return false;
  }

  return isSynonymAlreadyHighlighted(term);
}

function recordHighlight(term: TermMatch, _matchText: string, zone: number): void {
  const key = termKey(term);
  highlightedOnQuestion.add(key);
  highlightedTermZone.set(key, zone);
  for (const alias of getAliasesForTerm(term)) {
    highlightedWordsOnQuestion.add(alias);
  }
}

function getQuestionTextSnapshot(): string {
  const clone = document.body.cloneNode(true) as HTMLElement;
  for (const el of clone.querySelectorAll(
    `.${POPOVER_CLASS}, ${CHIP_SELECTOR}`,
  )) {
    el.remove();
  }
  return clone.innerText.replace(/\s+/g, " ").trim();
}

function getQuestionFingerprint(): string {
  const text = getQuestionTextSnapshot();
  const header = text.match(QUESTION_HEADER_RE)?.[0] ?? "";
  return `${header}::${text.slice(0, 600)}`;
}

function resetQuestionHighlights(): void {
  highlightedOnQuestion.clear();
  highlightedWordsOnQuestion.clear();
  highlightedTermZone.clear();
  questionFingerprint = "";
}

function syncQuestionContext(): void {
  const next = getQuestionFingerprint();
  if (questionFingerprint && next !== questionFingerprint) {
    unwrapAllChips();
    highlightedOnQuestion.clear();
    highlightedWordsOnQuestion.clear();
    highlightedTermZone.clear();
  }
  questionFingerprint = next;
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

function getTermIndex(): TermMatch[] {
  if (!termIndex) termIndex = buildTermIndex();
  return termIndex;
}

function buildTermIndex(): TermMatch[] {
  const organMatches: TermMatch[] = buildAliasIndex().map(
    ({ alias, organId }) => ({
      alias,
      kind: "organ" as const,
      id: organId,
    }),
  );
  const heartSoundMatches: TermMatch[] = buildHeartSoundAliasIndex().map(
    ({ alias, heartSoundId }) => ({
      alias,
      kind: "heart-sound" as const,
      id: heartSoundId,
    }),
  );
  const hemodynamicMatches: TermMatch[] = buildHemodynamicAliasIndex().map(
    ({ alias, hemodynamicId }) => ({
      alias,
      kind: "hemodynamic" as const,
      id: hemodynamicId,
    }),
  );
  const symptomMatches: TermMatch[] = buildSymptomAliasIndex().map(
    ({ alias, symptomId }) => ({
      alias,
      kind: "symptom" as const,
      id: symptomId,
    }),
  );
  const medicationMatches: TermMatch[] = buildMedicationAliasIndex().map(
    ({ alias, medicationId }) => ({
      alias,
      kind: "medication" as const,
      id: medicationId,
    }),
  );
  const labMatches: TermMatch[] = buildLabValueAliasIndex().map(
    ({ alias, labValueId }) => ({
      alias,
      kind: "lab" as const,
      id: labValueId,
    }),
  );
  const nephronMatches: TermMatch[] = buildNephronAliasIndex().map(
    ({ alias, nephronSegmentId }) => ({
      alias,
      kind: "nephron" as const,
      id: nephronSegmentId,
    }),
  );
  const conditionMatches: TermMatch[] = buildConditionAliasIndex().map(
    ({ alias, conditionId }) => ({
      alias,
      kind: "condition" as const,
      id: conditionId,
    }),
  );
  const proteinMatches: TermMatch[] = buildProteinAliasIndex().map(
    ({ alias, proteinId }) => ({
      alias,
      kind: "protein" as const,
      id: proteinId,
    }),
  );
  const signalingMatches: TermMatch[] = buildSignalingAliasIndex().map(
    ({ alias, signalingId }) => ({
      alias,
      kind: "signaling" as const,
      id: signalingId,
    }),
  );
  const ecgMatches: TermMatch[] = buildEcgFindingAliasIndex().map(
    ({ alias, ecgFindingId }) => ({
      alias,
      kind: "ecg" as const,
      id: ecgFindingId,
    }),
  );
  const procedureMatches: TermMatch[] = buildProcedureAliasIndex().map(
    ({ alias, procedureId }) => ({
      alias,
      kind: "procedure" as const,
      id: procedureId,
    }),
  );
  const clinicalStrategyMatches: TermMatch[] =
    buildClinicalStrategyAliasIndex().map(({ alias, clinicalStrategyId }) => ({
      alias,
      kind: "clinical-strategy" as const,
      id: clinicalStrategyId,
    }));
  return [
    ...organMatches,
    ...heartSoundMatches,
    ...hemodynamicMatches,
    ...symptomMatches,
    ...medicationMatches,
    ...labMatches,
    ...nephronMatches,
    ...conditionMatches,
    ...proteinMatches,
    ...signalingMatches,
    ...ecgMatches,
    ...procedureMatches,
    ...clinicalStrategyMatches,
  ].sort(
    (a, b) => b.alias.length - a.alias.length || a.alias.localeCompare(b.alias),
  );
}

function hasWordBoundaryBefore(text: string, index: number): boolean {
  return index === 0 || !/\w/.test(text[index - 1]);
}

function hasWordBoundaryAfter(text: string, index: number): boolean {
  return index >= text.length || !/\w/.test(text[index]);
}

function matchedLengthAt(
  text: string,
  index: number,
  entry: TermMatch,
): number | null {
  const alias = entry.alias;

  if (!hasWordBoundaryBefore(text, index)) return null;

  const singularLen = matchAliasLengthAt(text, index, alias);
  if (singularLen !== null) {
    const end = index + singularLen;
    if (hasWordBoundaryAfter(text, end)) return singularLen;
  }

  if (entry.kind === "organ" && !alias.endsWith("s")) {
    for (const suffix of ["s", "es"] as const) {
      const pluralLen = matchAliasLengthAt(text, index, alias + suffix);
      if (pluralLen !== null) {
        const end = index + pluralLen;
        if (hasWordBoundaryAfter(text, end)) return pluralLen;
      }
    }
  }

  return null;
}

function findAllMatches(
  text: string,
  zone: number,
): { start: number; end: number; matchText: string; term: TermMatch }[] {
  const matches: {
    start: number;
    end: number;
    matchText: string;
    term: TermMatch;
  }[] = [];
  let remaining = text;
  let offset = 0;

  while (remaining.length > 0) {
    const next = findNextMatch(remaining, zone);
    if (!next) break;
    const start = offset + next.index;
    matches.push({
      start,
      end: start + next.matchText.length,
      matchText: next.matchText,
      term: next.term,
    });
    const advance = next.index + next.matchText.length;
    offset += advance;
    remaining = remaining.slice(advance);
  }

  return matches;
}

function findNextMatch(
  text: string,
  zone: number,
): { index: number; matchText: string; term: TermMatch } | null {
  const index = getTermIndex();
  let leftmost = text.length;

  for (let i = 0; i < text.length; i++) {
    for (const entry of index) {
      const len = matchedLengthAt(text, i, entry);
      if (len === null) continue;
      const matchText = text.slice(i, i + len);
      if (isAlreadyHighlighted(entry, matchText, zone)) continue;
      leftmost = i;
      break;
    }
    if (leftmost < text.length) break;
  }

  if (leftmost >= text.length) return null;

  let best: { matchText: string; term: TermMatch; length: number } | null =
    null;
  for (const entry of index) {
    const len = matchedLengthAt(text, leftmost, entry);
    if (len === null) continue;
    const matchText = text.slice(leftmost, leftmost + len);
    if (isAlreadyHighlighted(entry, matchText, zone)) continue;
    if (!best || len > best.length) {
      best = {
        matchText,
        term: entry,
        length: len,
      };
    }
  }

  if (!best) return null;
  return { index: leftmost, matchText: best.matchText, term: best.term };
}

function shouldSkipNode(node: Node): boolean {
  let parent = node.parentElement;
  while (parent) {
    if (SKIP_TAGS.has(parent.tagName)) return true;
    for (const cls of OUR_CHIP_CLASSES) {
      if (parent.classList.contains(cls)) return true;
    }
    if (parent.classList.contains(POPOVER_CLASS)) return true;
    if (parent.closest(`${CHIP_SELECTOR}, .${POPOVER_CLASS}`)) return true;
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
  if (el.classList.contains(POPOVER_CLASS)) return true;
  if (el.closest(`${CHIP_SELECTOR}, .${POPOVER_CLASS}`)) return true;
  return false;
}

function appendCoalescedSeparator(text: string): string {
  if (text.length === 0) return text;
  const last = text[text.length - 1];
  if (/\s/.test(last)) return text;
  return `${text} `;
}

function buildCoalescedText(root: Element): CoalescedTextView | null {
  const segments: TextSegment[] = [];
  let text = "";

  function walk(node: Node): void {
    if (node.nodeType === Node.TEXT_NODE) {
      const textNode = node as Text;
      if (shouldSkipNode(textNode)) return;
      if (!isVisibleNode(textNode)) return;
      const content = textNode.textContent ?? "";
      if (!content) return;
      text = appendCoalescedSeparator(text);
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

    for (const child of el.childNodes) {
      walk(child);
    }
  }

  walk(root);
  if (!text.trim() || segments.length === 0) return null;
  return { text, segments };
}

function locateOffset(
  segments: TextSegment[],
  offset: number,
): { node: Text; nodeOffset: number } | null {
  for (const segment of segments) {
    if (offset >= segment.start && offset <= segment.end) {
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
  const start = locateOffset(view.segments, match.start);
  const end = locateOffset(view.segments, match.end);
  if (!start || !end) return false;
  if (!start.node.isConnected || !end.node.isConnected) return false;

  const range = root.ownerDocument.createRange();
  range.setStart(start.node, start.nodeOffset);
  range.setEnd(end.node, end.nodeOffset);

  const chip = createChip(root.ownerDocument, match.matchText, match.term);
  range.deleteContents();
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
    if (isInsidePopover(root)) continue;
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
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (isInsidePopover(node)) return NodeFilter.FILTER_REJECT;
      if (shouldSkipNode(node)) return NodeFilter.FILTER_REJECT;
      if (!isVisibleNode(node)) return NodeFilter.FILTER_REJECT;
      const text = node.textContent ?? "";
      if (!text.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const textNodes: Text[] = [];
  let current = walker.nextNode();
  while (current) {
    textNodes.push(current as Text);
    current = walker.nextNode();
  }

  return textNodes.sort((a, b) => {
    const zoneDiff = getScanZone(a) - getScanZone(b);
    if (zoneDiff !== 0) return zoneDiff;
    return compareNodeDocumentOrder(a, b);
  });
}

function isInsidePopover(node: Node): boolean {
  return (
    node instanceof Element &&
    (node.classList.contains(POPOVER_CLASS) ||
      node.closest(`.${POPOVER_CLASS}`) !== null)
  );
}

function scanPage(): void {
  if (!document.body || isInsidePopover(document.body)) return;
  syncQuestionContext();

  const coalesceRoots = collectCoalesceRoots(document.body);
  isApplyingHighlights = true;
  try {
    for (const root of coalesceRoots) {
      highlightCoalescedRoot(root, getScanZone(root));
    }
  } finally {
    isApplyingHighlights = false;
  }
}

export function scanRoot(root: Node): void {
  if (isInsidePopover(root)) return;
  if (root === document.body) {
    scanPage();
    return;
  }

  syncQuestionContext();
  const coalesceRoots = collectCoalesceRoots(root);
  isApplyingHighlights = true;
  try {
    for (const coalesceRoot of coalesceRoots) {
      highlightCoalescedRoot(coalesceRoot, getScanZone(coalesceRoot));
    }
  } finally {
    isApplyingHighlights = false;
  }
}

export function startOrganScanner(): void {
  if (!document.body) return;

  resetQuestionHighlights();
  scanPage();

  let debounceTimer: ReturnType<typeof setTimeout> | null = null;
  let scanScheduled = false;

  const observer = new MutationObserver((mutations) => {
    if (!isApplyingHighlights && mutationsRemovedOurChips(mutations)) {
      resetQuestionHighlights();
    }

    for (const mutation of mutations) {
      if (mutation.type === "characterData") {
        const parent = mutation.target.parentNode;
        if (parent && !isInsidePopover(parent)) scanScheduled = true;
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
        if (node.nodeType === Node.TEXT_NODE) {
          const parent = node.parentNode;
          if (parent && !isInsidePopover(parent)) scanScheduled = true;
        } else if (
          node.nodeType === Node.ELEMENT_NODE &&
          !isInsidePopover(node)
        ) {
          scanScheduled = true;
        }
      }
    }

    if (!scanScheduled) return;
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      scanPage();
      scanScheduled = false;
      debounceTimer = null;
    }, 300);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
  });
}
