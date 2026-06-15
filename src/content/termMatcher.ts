import type { TermMatch } from "./termTypes";
import { shouldRejectAliasByContext } from "./aliasContextRules";

/** Strip styling/invisible chars so bold, Unicode styled, and plain text dedupe together. */
export function normalizeForComparison(text: string): string {
  return text
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\u00AD\u200B-\u200D\u2060\uFEFF]/g, "")
    .replace(/[\u2212\u207B\uFE63]/g, "-");
}

export function normalizedWordKey(matchText: string): string {
  return normalizeForComparison(matchText).replace(/\s+/g, " ").trim();
}

interface TrieNode {
  children: Map<string, TrieNode>;
  terms: TermMatch[];
}

function createTrieNode(): TrieNode {
  return { children: new Map(), terms: [] };
}

function insertIntoTrie(root: TrieNode, normalizedAlias: string, term: TermMatch): void {
  if (!normalizedAlias) return;
  let node = root;
  for (const char of normalizedAlias) {
    let child = node.children.get(char);
    if (!child) {
      child = createTrieNode();
      node.children.set(char, child);
    }
    node = child;
  }
  node.terms.push(term);
}

export function buildTermTrie(entries: TermMatch[]): TrieNode {
  const root = createTrieNode();
  for (const entry of entries) {
    const normalized = normalizedWordKey(entry.alias);
    insertIntoTrie(root, normalized, entry);
  }
  return root;
}

function hasWordBoundaryBefore(text: string, index: number): boolean {
  return index === 0 || !/\w/.test(text[index - 1]!);
}

function hasWordBoundaryAfter(text: string, index: number): boolean {
  return index >= text.length || !/\w/.test(text[index]!);
}

const SHORT_ACRONYM_MAX_LENGTH = 2;

/** Common English function words that must never trigger alias matches. */
const FUNCTION_WORD_BLOCKLIST = new Set([
  "a",
  "an",
  "the",
  "in",
  "on",
  "at",
  "to",
  "of",
  "by",
  "for",
  "with",
  "and",
  "or",
  "but",
  "as",
  "if",
  "so",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "do",
  "does",
  "did",
  "has",
  "have",
  "had",
  "it",
  "he",
  "she",
  "we",
  "they",
  "i",
  "you",
  "me",
  "my",
  "us",
  "him",
  "his",
  "her",
  "hers",
  "them",
  "their",
  "theirs",
  "our",
  "ours",
  "your",
  "yours",
  "mine",
  "its",
  "who",
  "whom",
  "whose",
  "myself",
  "yourself",
  "himself",
  "herself",
  "itself",
  "ourselves",
  "yourselves",
  "themselves",
  "no",
  "not",
  "up",
]);

export function isFunctionWordBlocked(matchText: string): boolean {
  return FUNCTION_WORD_BLOCKLIST.has(normalizedWordKey(matchText));
}

export function isShortAcronymAlias(alias: string): boolean {
  return normalizedWordKey(alias).length <= SHORT_ACRONYM_MAX_LENGTH;
}

/** Short aliases (≤2 chars) must appear as acronyms (all letters uppercase) in source text. */
export function isAllCapsAcronymInSource(matchText: string): boolean {
  const letters = matchText.match(/\p{L}/gu);
  if (!letters || letters.length === 0) return false;
  return letters.every(
    (ch) => ch === ch.toUpperCase() && ch !== ch.toLowerCase(),
  );
}

export interface AliasMatchContext {
  text: string;
  index: number;
  matchText: string;
  term: TermMatch;
}

export function shouldRejectAliasMatch(ctx: AliasMatchContext): boolean {
  const { matchText, term } = ctx;
  if (isFunctionWordBlocked(matchText)) return true;
  if (isShortAcronymAlias(term.alias) && !isAllCapsAcronymInSource(matchText)) {
    return true;
  }
  if (shouldRejectAliasByContext(ctx)) return true;
  return false;
}

/** S2/S4 heart-sound aliases must not match sacral spinal notation (e.g. S2-S4, S2–S4). */
export function isSacralSpinalRangeHeartSound(
  text: string,
  index: number,
  matchLen: number,
  heartSoundId: string,
): boolean {
  if (heartSoundId !== "s2" && heartSoundId !== "s4") return false;
  const end = index + matchLen;
  const before = text.slice(Math.max(0, index - 8), index);
  const after = text.slice(end, end + 8);
  const rangeAfter = /^[-–]\s*S?[1-4]\b/i.test(after);
  const rangeBefore = /S?[1-4]\s*[-–]\s*$/i.test(before);
  return rangeAfter || rangeBefore;
}

export interface MatchCandidate {
  index: number;
  matchText: string;
  term: TermMatch;
}

export interface MatchValidationContext {
  zone: number;
  isAlreadyHighlighted: (term: TermMatch, matchText: string, zone: number) => boolean;
}

export function findNextMatchInTrie(
  text: string,
  trie: TrieNode,
  ctx: MatchValidationContext,
): MatchCandidate | null {
  for (let i = 0; i < text.length; i++) {
    if (!hasWordBoundaryBefore(text, i)) continue;

    let node = trie;
    let pos = i;
    let best: { matchText: string; term: TermMatch; length: number } | null = null;

    while (pos < text.length) {
      const codePoint = text.codePointAt(pos);
      if (codePoint === undefined) break;
      const char = String.fromCodePoint(codePoint);
      const normalizedChar = normalizeForComparison(char);
      pos += char.length;

      if (!normalizedChar) continue;

      let walkFailed = false;
      for (const normalizedPart of normalizedChar) {
        const child = node.children.get(normalizedPart);
        if (!child) {
          walkFailed = true;
          break;
        }
        node = child;
      }
      if (walkFailed) break;

      if (node.terms.length > 0) {
        const matchLen = pos - i;
        if (hasWordBoundaryAfter(text, pos)) {
          const matchText = text.slice(i, pos);
          for (const term of node.terms) {
            if (ctx.isAlreadyHighlighted(term, matchText, ctx.zone)) {
              continue;
            }
            if (shouldRejectAliasMatch({ text, index: i, matchText, term })) {
              continue;
            }
            if (
              term.kind === "heart-sound" &&
              isSacralSpinalRangeHeartSound(text, i, matchLen, term.id)
            ) {
              continue;
            }
            if (!best || matchLen > best.length) {
              best = {
                matchText,
                term,
                length: matchLen,
              };
            }
          }
        }
      }
    }

    if (best) {
      return { index: i, matchText: best.matchText, term: best.term };
    }
  }

  return null;
}

export function findAllMatchesInTrie(
  text: string,
  trie: TrieNode,
  ctx: MatchValidationContext,
  onMatch: (term: TermMatch, matchText: string, zone: number) => void,
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
    const next = findNextMatchInTrie(remaining, trie, ctx);
    if (!next) break;
    const start = offset + next.index;
    matches.push({
      start,
      end: start + next.matchText.length,
      matchText: next.matchText,
      term: next.term,
    });
    onMatch(next.term, next.matchText, ctx.zone);
    const advance = next.index + next.matchText.length;
    offset += advance;
    remaining = remaining.slice(advance);
  }

  return matches;
}
