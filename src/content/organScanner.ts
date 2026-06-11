import { buildHeartSoundAliasIndex } from "../data/heartSounds";
import { buildAliasIndex } from "../data/organs";

const ORGAN_CHIP_CLASS = "usmle-organ-chip";
const HEART_SOUND_CHIP_CLASS = "usmle-heart-sound-chip";
const CHIP_SELECTOR = `.${ORGAN_CHIP_CLASS}, .${HEART_SOUND_CHIP_CLASS}`;
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

type TermKind = "organ" | "heart-sound";

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
  return [...organMatches, ...heartSoundMatches].sort(
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
    if (parent.classList.contains(ORGAN_CHIP_CLASS)) return true;
    if (parent.classList.contains(HEART_SOUND_CHIP_CLASS)) return true;
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

function wrapMatch(
  doc: Document,
  text: string,
  matchText: string,
  term: TermMatch,
): Node[] {
  const idx = text.toLowerCase().indexOf(matchText.toLowerCase());
  if (idx === -1) return [doc.createTextNode(text)];

  const nodes: Node[] = [];
  if (idx > 0) nodes.push(doc.createTextNode(text.slice(0, idx)));

  const button = doc.createElement("button");
  button.type = "button";
  button.className =
    term.kind === "heart-sound" ? HEART_SOUND_CHIP_CLASS : ORGAN_CHIP_CLASS;
  if (term.kind === "heart-sound") {
    button.dataset.heartSoundId = term.id;
  } else {
    button.dataset.organId = term.id;
  }
  button.textContent = text.slice(idx, idx + matchText.length);
  nodes.push(button);

  const rest = text.slice(idx + matchText.length);
  if (rest) nodes.push(doc.createTextNode(rest));
  return nodes;
}

function highlightTextNode(textNode: Text): boolean {
  const text = textNode.textContent ?? "";
  if (!text.trim()) return false;

  const pattern = getMatchPattern();
  pattern.lastIndex = 0;
  if (!pattern.test(text)) return false;

  pattern.lastIndex = 0;
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
    const term = resolveTerm(matchText);
    if (!term) {
      fragment.appendChild(doc.createTextNode(remaining));
      break;
    }

    const wrapped = wrapMatch(doc, remaining, matchText, term);
    for (const node of wrapped) fragment.appendChild(node);
    changed = true;

    const consumed = remaining.indexOf(matchText) + matchText.length;
    remaining = remaining.slice(consumed);
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
