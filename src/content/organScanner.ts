import { buildHeartSoundAliasIndex } from "../data/heartSounds";
import { buildHemodynamicAliasIndex } from "../data/hemodynamics";
import { buildAliasIndex } from "../data/organs";

const ORGAN_CHIP_CLASS = "usmle-organ-chip";
const HEART_SOUND_CHIP_CLASS = "usmle-heart-sound-chip";
const HEMODYNAMIC_CHIP_CLASS = "usmle-hemodynamic-chip";
const CHIP_SELECTOR = `.${ORGAN_CHIP_CLASS}, .${HEART_SOUND_CHIP_CLASS}, .${HEMODYNAMIC_CHIP_CLASS}`;
const OUR_CHIP_CLASSES = [
  ORGAN_CHIP_CLASS,
  HEART_SOUND_CHIP_CLASS,
  HEMODYNAMIC_CHIP_CLASS,
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

type TermKind = "organ" | "heart-sound" | "hemodynamic";

interface TermMatch {
  alias: string;
  kind: TermKind;
  id: string;
}

let termIndex: TermMatch[] | null = null;
let matchPattern: RegExp | null = null;

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
  return [...organMatches, ...heartSoundMatches, ...hemodynamicMatches].sort(
    (a, b) => b.alias.length - a.alias.length,
  );
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildCombinedMatchPattern(index: TermMatch[]): RegExp {
  const parts = index.map(({ alias, kind }) => {
    const escaped = escapeRegex(alias);
    const plural =
      kind === "organ" && !alias.endsWith("s")
        ? `${escaped}(?:es|s)?`
        : escaped;
    return `\\b${plural}\\b`;
  });
  return new RegExp(`(${parts.join("|")})`, "gi");
}

function getMatchPattern(): RegExp {
  if (!termIndex) termIndex = buildTermIndex();
  if (!matchPattern) matchPattern = buildCombinedMatchPattern(termIndex);
  return matchPattern;
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

function resolveTerm(matchedText: string): TermMatch | null {
  if (!termIndex) termIndex = buildTermIndex();
  const lower = matchedText.toLowerCase();
  for (const entry of termIndex) {
    if (lower === entry.alias) return entry;
    if (
      entry.kind === "organ" &&
      (lower === `${entry.alias}es` || lower === `${entry.alias}s`)
    ) {
      return entry;
    }
  }
  return null;
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

  const pattern = getMatchPattern();
  pattern.lastIndex = 0;
  if (!pattern.test(text)) return false;

  const parent = textNode.parentNode;
  if (!parent) return false;

  const doc = textNode.ownerDocument;
  const fragment = doc.createDocumentFragment();
  let remaining = text;
  let changed = false;

  while (remaining.length > 0) {
    pattern.lastIndex = 0;
    const match = pattern.exec(remaining);
    if (!match) {
      fragment.appendChild(doc.createTextNode(remaining));
      break;
    }

    const matchText = match[0];
    const idx = match.index ?? 0;
    const term = resolveTerm(matchText);

    if (!term) {
      const skipEnd = idx + matchText.length;
      fragment.appendChild(doc.createTextNode(remaining.slice(0, skipEnd)));
      remaining = remaining.slice(skipEnd);
      continue;
    }

    if (idx > 0) {
      fragment.appendChild(doc.createTextNode(remaining.slice(0, idx)));
    }

    fragment.appendChild(createChip(doc, matchText, term));
    changed = true;
    remaining = remaining.slice(idx + matchText.length);
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

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (shouldSkipNode(node)) return NodeFilter.FILTER_REJECT;
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

  for (const textNode of textNodes) {
    if (!textNode.parentNode || shouldSkipNode(textNode)) continue;
    highlightTextNode(textNode);
  }
}

export function startOrganScanner(): void {
  if (!document.body) return;

  scanRoot(document.body);

  let debounceTimer: ReturnType<typeof setTimeout> | null = null;
  const pendingRoots = new Set<Node>();

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "characterData") {
        const parent = mutation.target.parentNode;
        if (parent && !isInsidePopover(parent)) pendingRoots.add(parent);
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (
          node instanceof Element &&
          OUR_CHIP_CLASSES.some((cls) => node.classList.contains(cls))
        ) {
          continue;
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
