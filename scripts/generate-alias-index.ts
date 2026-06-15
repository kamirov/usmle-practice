import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { buildCellAliasIndex } from "../src/data/cells.ts";
import { buildClinicalStrategyAliasIndex } from "../src/data/clinicalStrategies.ts";
import { buildConditionAliasIndex } from "../src/data/conditions.ts";
import { buildEcgFindingAliasIndex } from "../src/data/ecgFindings.ts";
import { buildHeartMurmurAliasIndex } from "../src/data/heartMurmurs.ts";
import { buildHeartSoundAliasIndex } from "../src/data/heartSounds.ts";
import { buildHemodynamicAliasIndex } from "../src/data/hemodynamics.ts";
import { buildLabValueAliasIndex } from "../src/data/labValues.ts";
import { buildMedicationAliasIndex } from "../src/data/medications.ts";
import { buildMetabolismAliasIndex } from "../src/data/metabolism.ts";
import { buildMicrobiologyAliasIndex } from "../src/data/microbiology.ts";
import { buildMusculoskeletalAliasIndex } from "../src/data/musculoskeletal.ts";
import { buildNephronAliasIndex } from "../src/data/nephron.ts";
import { buildAliasIndex } from "../src/data/organs.ts";
import { buildPathogenesisAliasIndex } from "../src/data/pathogenesis.ts";
import { buildProcedureAliasIndex } from "../src/data/procedures.ts";
import { buildProteinAliasIndex } from "../src/data/proteins.ts";
import { buildSignalingAliasIndex } from "../src/data/signaling.ts";
import { buildSymptomAliasIndex } from "../src/data/symptoms.ts";
import type { TermKind, TermMatch } from "../src/content/termTypes.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = join(__dirname, "../src/generated/aliasIndex.ts");

function normalizeForComparison(text: string): string {
  return text
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\u00AD\u200B-\u200D\u2060\uFEFF]/g, "")
    .replace(/[\u2212\u207B\uFE63]/g, "-");
}

function normalizedWordKey(matchText: string): string {
  return normalizeForComparison(matchText).replace(/\s+/g, " ").trim();
}

function termKey(term: Pick<TermMatch, "kind" | "id">): string {
  return `${term.kind}:${term.id.toLowerCase()}`;
}

function buildTermIndex(): TermMatch[] {
  const organMatches: TermMatch[] = buildAliasIndex().map(({ alias, organId }) => ({
    alias,
    kind: "organ",
    id: organId,
  }));
  const heartSoundMatches: TermMatch[] = buildHeartSoundAliasIndex().map(
    ({ alias, heartSoundId }) => ({
      alias,
      kind: "heart-sound",
      id: heartSoundId,
    }),
  );
  const heartMurmurMatches: TermMatch[] = buildHeartMurmurAliasIndex().map(
    ({ alias, heartMurmurId }) => ({
      alias,
      kind: "heart-murmur",
      id: heartMurmurId,
    }),
  );
  const hemodynamicMatches: TermMatch[] = buildHemodynamicAliasIndex().map(
    ({ alias, hemodynamicId }) => ({
      alias,
      kind: "hemodynamic",
      id: hemodynamicId,
    }),
  );
  const symptomMatches: TermMatch[] = buildSymptomAliasIndex().map(
    ({ alias, symptomId }) => ({
      alias,
      kind: "symptom",
      id: symptomId,
    }),
  );
  const medicationMatches: TermMatch[] = buildMedicationAliasIndex().map(
    ({ alias, medicationId }) => ({
      alias,
      kind: "medication",
      id: medicationId,
    }),
  );
  const labMatches: TermMatch[] = buildLabValueAliasIndex().map(
    ({ alias, labValueId }) => ({
      alias,
      kind: "lab",
      id: labValueId,
    }),
  );
  const nephronMatches: TermMatch[] = buildNephronAliasIndex().map(
    ({ alias, nephronSegmentId }) => ({
      alias,
      kind: "nephron",
      id: nephronSegmentId,
    }),
  );
  const conditionMatches: TermMatch[] = buildConditionAliasIndex().map(
    ({ alias, conditionId }) => ({
      alias,
      kind: "condition",
      id: conditionId,
    }),
  );
  const proteinMatches: TermMatch[] = buildProteinAliasIndex().map(
    ({ alias, proteinId }) => ({
      alias,
      kind: "protein",
      id: proteinId,
    }),
  );
  const signalingMatches: TermMatch[] = buildSignalingAliasIndex().map(
    ({ alias, signalingId }) => ({
      alias,
      kind: "signaling",
      id: signalingId,
    }),
  );
  const ecgMatches: TermMatch[] = buildEcgFindingAliasIndex().map(
    ({ alias, ecgFindingId }) => ({
      alias,
      kind: "ecg",
      id: ecgFindingId,
    }),
  );
  const procedureMatches: TermMatch[] = buildProcedureAliasIndex().map(
    ({ alias, procedureId }) => ({
      alias,
      kind: "procedure",
      id: procedureId,
    }),
  );
  const clinicalStrategyMatches: TermMatch[] =
    buildClinicalStrategyAliasIndex().map(({ alias, clinicalStrategyId }) => ({
      alias,
      kind: "clinical-strategy",
      id: clinicalStrategyId,
    }));
  const cellMatches: TermMatch[] = buildCellAliasIndex().map(({ alias, cellId }) => ({
    alias,
    kind: "cell",
    id: cellId,
  }));
  const pathogenesisMatches: TermMatch[] = buildPathogenesisAliasIndex().map(
    ({ alias, pathogenesisId }) => ({
      alias,
      kind: "pathogenesis",
      id: pathogenesisId,
    }),
  );
  const metabolismMatches: TermMatch[] = buildMetabolismAliasIndex().map(
    ({ alias, metabolismId }) => ({
      alias,
      kind: "metabolism",
      id: metabolismId,
    }),
  );
  const microbiologyMatches: TermMatch[] = buildMicrobiologyAliasIndex().map(
    ({ alias, microbiologyId }) => ({
      alias,
      kind: "microbiology",
      id: microbiologyId,
    }),
  );
  const musculoskeletalMatches: TermMatch[] = buildMusculoskeletalAliasIndex().map(
    ({ alias, musculoskeletalId }) => ({
      alias,
      kind: "musculoskeletal",
      id: musculoskeletalId,
    }),
  );

  const expanded: TermMatch[] = [];
  for (const entry of [
    ...organMatches,
    ...heartSoundMatches,
    ...heartMurmurMatches,
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
    ...cellMatches,
    ...pathogenesisMatches,
    ...metabolismMatches,
    ...microbiologyMatches,
    ...musculoskeletalMatches,
  ]) {
    expanded.push(entry);
    if (entry.kind === "organ" && !entry.alias.endsWith("s")) {
      expanded.push({ ...entry, alias: `${entry.alias}s` });
      expanded.push({ ...entry, alias: `${entry.alias}es` });
    }
  }

  return expanded.sort(
    (a, b) => b.alias.length - a.alias.length || a.alias.localeCompare(b.alias),
  );
}

function buildAliasesByTermKey(entries: TermMatch[]): Record<string, string[]> {
  const map = new Map<string, Set<string>>();
  for (const entry of entries) {
    const key = termKey(entry);
    if (!map.has(key)) map.set(key, new Set());
    const aliases = map.get(key)!;
    aliases.add(normalizedWordKey(entry.alias));
    if (entry.kind === "organ" && !entry.alias.endsWith("s")) {
      aliases.add(normalizedWordKey(`${entry.alias}s`));
      aliases.add(normalizedWordKey(`${entry.alias}es`));
    }
  }

  const result: Record<string, string[]> = {};
  for (const [key, aliases] of map) {
    result[key] = [...aliases].sort();
  }
  return result;
}

export function generateAliasIndex(): void {
  const entries = buildTermIndex();
  const aliasesByTermKey = buildAliasesByTermKey(entries);

  const serializedEntries = entries.map(
    (entry) => [entry.alias, entry.kind, entry.id] as const,
  );

  const file = `// Generated by scripts/generate-alias-index.ts — do not edit.
import type { TermKind, TermMatch } from "../content/termTypes";

export type SerializedTerm = readonly [alias: string, kind: TermKind, id: string];

export const TERM_ENTRIES: SerializedTerm[] = ${JSON.stringify(serializedEntries)};

export const ALIASES_BY_TERM_KEY: Record<string, readonly string[]> = ${JSON.stringify(aliasesByTermKey)};

export function deserializeTermEntries(): TermMatch[] {
  return TERM_ENTRIES.map(([alias, kind, id]) => ({ alias, kind, id }));
}
`;

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, file, "utf8");
  console.log(`Generated ${entries.length} alias entries -> ${OUTPUT_PATH}`);
}
