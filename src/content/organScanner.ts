import { buildHeartSoundAliasIndex } from "../data/heartSounds";
import { buildHemodynamicAliasIndex } from "../data/hemodynamics";
import { buildLabValueAliasIndex } from "../data/labValues";
import { buildMedicationAliasIndex } from "../data/medications";
import { buildNephronAliasIndex } from "../data/nephron";
import { buildAliasIndex } from "../data/organs";
import { buildSymptomAliasIndex } from "../data/symptoms";

const ORGAN_CHIP_CLASS = "usmle-organ-chip";
const HEART_SOUND_CHIP_CLASS = "usmle-heart-sound-chip";
const HEMODYNAMIC_CHIP_CLASS = "usmle-hemodynamic-chip";
const SYMPTOM_CHIP_CLASS = "usmle-symptom-chip";
const MEDICATION_CHIP_CLASS = "usmle-medication-chip";
const LAB_CHIP_CLASS = "usmle-lab-chip";
const NEPHRON_CHIP_CLASS = "usmle-nephron-chip";
const CHIP_SELECTOR = `.${ORGAN_CHIP_CLASS}, .${HEART_SOUND_CHIP_CLASS}, .${HEMODYNAMIC_CHIP_CLASS}, .${SYMPTOM_CHIP_CLASS}, .${MEDICATION_CHIP_CLASS}, .${LAB_CHIP_CLASS}, .${NEPHRON_CHIP_CLASS}`;
const OUR_CHIP_CLASSES = [
  ORGAN_CHIP_CLASS,
  HEART_SOUND_CHIP_CLASS,
  HEMODYNAMIC_CHIP_CLASS,
  SYMPTOM_CHIP_CLASS,
  MEDICATION_CHIP_CLASS,
  LAB_CHIP_CLASS,
  NEPHRON_CHIP_CLASS,
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

type TermKind =
  | "organ"
  | "heart-sound"
  | "hemodynamic"
  | "symptom"
  | "medication"
  | "lab"
  | "nephron";

interface TermMatch {
  alias: string;
  kind: TermKind;
  id: string;
}

let termIndex: TermMatch[] | null = null;
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

function normalizedWordKey(matchText: string): string {
  return matchText.toLowerCase();
}

function getScanZone(node: Node): number {
  const el = node.parentElement;
  if (!el) return SCAN_ZONE.OTHER;
  if (el.closest("#explanation")) return SCAN_ZONE.EXPLANATION;
  if (el.closest("#questionInformation")) return SCAN_ZONE.QUESTION;
  return SCAN_ZONE.OTHER;
}

function isVisibleElement(el: HTMLElement): boolean {
  if (typeof el.checkVisibility === "function") {
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

  for (const chip of document.querySelectorAll(chipSelectorForTerm(term))) {
    highlightedWordsOnQuestion.delete(
      normalizedWordKey(chip.textContent ?? ""),
    );
    unwrapChip(chip);
  }
}

function isAlreadyHighlighted(
  term: TermMatch,
  matchText: string,
  zone: number,
): boolean {
  const key = termKey(term);
  const existingZone = highlightedTermZone.get(key);
  if (existingZone !== undefined && zone < existingZone) {
    evictTermHighlight(term);
  } else if (highlightedOnQuestion.has(key)) {
    return true;
  }

  return highlightedWordsOnQuestion.has(normalizedWordKey(matchText));
}

function recordHighlight(
  term: TermMatch,
  matchText: string,
  zone: number,
): void {
  highlightedOnQuestion.add(termKey(term));
  highlightedWordsOnQuestion.add(normalizedWordKey(matchText));
  highlightedTermZone.set(termKey(term), zone);
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
  return [
    ...organMatches,
    ...heartSoundMatches,
    ...hemodynamicMatches,
    ...symptomMatches,
    ...medicationMatches,
    ...labMatches,
    ...nephronMatches,
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
  const lower = text.toLowerCase();
  const alias = entry.alias;

  if (!hasWordBoundaryBefore(text, index)) return null;

  if (lower.slice(index, index + alias.length) === alias) {
    const end = index + alias.length;
    if (hasWordBoundaryAfter(text, end)) return alias.length;
  }

  if (entry.kind === "organ" && !alias.endsWith("s")) {
    for (const suffix of ["s", "es"] as const) {
      const plural = alias + suffix;
      if (lower.slice(index, index + plural.length) === plural) {
        const end = index + plural.length;
        if (hasWordBoundaryAfter(text, end)) return plural.length;
      }
    }
  }

  return null;
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
  } else {
    button.className = ORGAN_CHIP_CLASS;
    button.dataset.organId = term.id;
  }
  button.textContent = matchText;
  return button;
}

function highlightTextNode(textNode: Text, zone: number): boolean {
  const text = textNode.textContent ?? "";
  if (!text.trim()) return false;
  if (!findNextMatch(text, zone)) return false;

  const parent = textNode.parentNode;
  if (!parent) return false;

  const doc = textNode.ownerDocument;
  const fragment = doc.createDocumentFragment();
  let remaining = text;
  let changed = false;

  while (remaining.length > 0) {
    const next = findNextMatch(remaining, zone);
    if (!next) {
      fragment.appendChild(doc.createTextNode(remaining));
      break;
    }

    if (next.index > 0) {
      fragment.appendChild(doc.createTextNode(remaining.slice(0, next.index)));
    }

    fragment.appendChild(createChip(doc, next.matchText, next.term));
    recordHighlight(next.term, next.matchText, zone);
    changed = true;
    remaining = remaining.slice(next.index + next.matchText.length);
  }

  if (changed) {
    parent.replaceChild(fragment, textNode);
  }
  return changed;
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

  const textNodes = collectHighlightableTextNodes(document.body);
  isApplyingHighlights = true;
  try {
    for (const textNode of textNodes) {
      if (!textNode.parentNode || shouldSkipNode(textNode)) continue;
      if (!isVisibleNode(textNode)) continue;
      highlightTextNode(textNode, getScanZone(textNode));
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
  const textNodes = collectHighlightableTextNodes(root);
  isApplyingHighlights = true;
  try {
    for (const textNode of textNodes) {
      if (!textNode.parentNode || shouldSkipNode(textNode)) continue;
      if (!isVisibleNode(textNode)) continue;
      highlightTextNode(textNode, getScanZone(textNode));
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
