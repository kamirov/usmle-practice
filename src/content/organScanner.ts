import { buildHeartSoundAliasIndex } from "../data/heartSounds";
import { buildHemodynamicAliasIndex } from "../data/hemodynamics";
import { buildMedicationAliasIndex } from "../data/medications";
import { buildAliasIndex } from "../data/organs";
import { buildSymptomAliasIndex } from "../data/symptoms";

const ORGAN_CHIP_CLASS = "usmle-organ-chip";
const HEART_SOUND_CHIP_CLASS = "usmle-heart-sound-chip";
const HEMODYNAMIC_CHIP_CLASS = "usmle-hemodynamic-chip";
const SYMPTOM_CHIP_CLASS = "usmle-symptom-chip";
const MEDICATION_CHIP_CLASS = "usmle-medication-chip";
const CHIP_SELECTOR = `.${ORGAN_CHIP_CLASS}, .${HEART_SOUND_CHIP_CLASS}, .${HEMODYNAMIC_CHIP_CLASS}, .${SYMPTOM_CHIP_CLASS}, .${MEDICATION_CHIP_CLASS}`;
const OUR_CHIP_CLASSES = [
  ORGAN_CHIP_CLASS,
  HEART_SOUND_CHIP_CLASS,
  HEMODYNAMIC_CHIP_CLASS,
  SYMPTOM_CHIP_CLASS,
  MEDICATION_CHIP_CLASS,
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

type TermKind = "organ" | "heart-sound" | "hemodynamic" | "symptom" | "medication";

interface TermMatch {
  alias: string;
  kind: TermKind;
  id: string;
}

let termIndex: TermMatch[] | null = null;
const highlightedOnQuestion = new Set<string>();
const highlightedWordsOnQuestion = new Set<string>();
let questionFingerprint = "";
let isApplyingHighlights = false;

const QUESTION_HEADER_RE =
  /(?:Question|Q\.?|Item)\s*\d+(?:\s*(?:of|\/)\s*\d+)?/i;

function termKey(term: TermMatch): string {
  return `${term.kind}:${term.id.toLowerCase()}`;
}

function normalizedWordKey(matchText: string): string {
  return matchText.toLowerCase();
}

function isAlreadyHighlighted(term: TermMatch, matchText: string): boolean {
  return (
    highlightedOnQuestion.has(termKey(term)) ||
    highlightedWordsOnQuestion.has(normalizedWordKey(matchText))
  );
}

function recordHighlight(term: TermMatch, matchText: string): void {
  highlightedOnQuestion.add(termKey(term));
  highlightedWordsOnQuestion.add(normalizedWordKey(matchText));
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
  questionFingerprint = "";
}

function syncQuestionContext(): void {
  const next = getQuestionFingerprint();
  if (questionFingerprint && next !== questionFingerprint) {
    highlightedOnQuestion.clear();
    highlightedWordsOnQuestion.clear();
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
  return [
    ...organMatches,
    ...heartSoundMatches,
    ...hemodynamicMatches,
    ...symptomMatches,
    ...medicationMatches,
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
): { index: number; matchText: string; term: TermMatch } | null {
  const index = getTermIndex();
  let leftmost = text.length;

  for (let i = 0; i < text.length; i++) {
    for (const entry of index) {
      const len = matchedLengthAt(text, i, entry);
      if (len === null) continue;
      const matchText = text.slice(i, i + len);
      if (isAlreadyHighlighted(entry, matchText)) continue;
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
    if (isAlreadyHighlighted(entry, matchText)) continue;
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
  } else {
    button.className = ORGAN_CHIP_CLASS;
    button.dataset.organId = term.id;
  }
  button.textContent = matchText;
  return button;
}

function highlightTextNode(textNode: Text): boolean {
  const text = textNode.textContent ?? "";
  if (!text.trim()) return false;
  if (!findNextMatch(text)) return false;

  const parent = textNode.parentNode;
  if (!parent) return false;

  const doc = textNode.ownerDocument;
  const fragment = doc.createDocumentFragment();
  let remaining = text;
  let changed = false;

  while (remaining.length > 0) {
    const next = findNextMatch(remaining);
    if (!next) {
      fragment.appendChild(doc.createTextNode(remaining));
      break;
    }

    if (next.index > 0) {
      fragment.appendChild(doc.createTextNode(remaining.slice(0, next.index)));
    }

    fragment.appendChild(createChip(doc, next.matchText, next.term));
    recordHighlight(next.term, next.matchText);
    changed = true;
    remaining = remaining.slice(next.index + next.matchText.length);
  }

  if (changed) {
    parent.replaceChild(fragment, textNode);
  }
  return changed;
}

function isInsidePopover(node: Node): boolean {
  return (
    node instanceof Element &&
    (node.classList.contains(POPOVER_CLASS) ||
      node.closest(`.${POPOVER_CLASS}`) !== null)
  );
}

export function scanRoot(root: Node): void {
  if (isInsidePopover(root)) return;
  syncQuestionContext();

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (shouldSkipNode(node)) return NodeFilter.FILTER_REJECT;
      const text = node.textContent ?? "";
      if (!text.trim() || !findNextMatch(text)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const textNodes: Text[] = [];
  let current = walker.nextNode();
  while (current) {
    textNodes.push(current as Text);
    current = walker.nextNode();
  }

  isApplyingHighlights = true;
  try {
    for (const textNode of textNodes) {
      if (!textNode.parentNode || shouldSkipNode(textNode)) continue;
      highlightTextNode(textNode);
    }
  } finally {
    isApplyingHighlights = false;
  }
}

export function startOrganScanner(): void {
  if (!document.body) return;

  resetQuestionHighlights();
  scanRoot(document.body);

  let debounceTimer: ReturnType<typeof setTimeout> | null = null;
  const pendingRoots = new Set<Node>();

  const observer = new MutationObserver((mutations) => {
    if (!isApplyingHighlights && mutationsRemovedOurChips(mutations)) {
      resetQuestionHighlights();
    }

    for (const mutation of mutations) {
      if (mutation.type === "characterData") {
        const parent = mutation.target.parentNode;
        if (parent && !isInsidePopover(parent)) pendingRoots.add(parent);
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
          if (parent && !isInsidePopover(parent)) pendingRoots.add(parent);
        } else if (
          node.nodeType === Node.ELEMENT_NODE &&
          !isInsidePopover(node)
        ) {
          pendingRoots.add(node);
        }
      }
    }

    if (pendingRoots.size === 0) return;
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      syncQuestionContext();
      for (const root of pendingRoots) {
        if (root.isConnected) scanRoot(root);
      }
      pendingRoots.clear();
      debounceTimer = null;
    }, 300);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
  });
}
