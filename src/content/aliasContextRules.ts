import type { TermMatch } from "./termTypes";

export interface AliasContextRuleContext {
  text: string;
  index: number;
  matchText: string;
  term: TermMatch;
}

type AliasContextRule = (ctx: AliasContextRuleContext) => boolean;

const TEMPORAL_PERIOD_LEFT_CONTEXT_RE =
  /(?:^|[^\p{L}\p{N}_])(?:this|that|these|those|current|previous|prior|next|same|given)\s*$/u;

function normalizeRuleText(text: string): string {
  return text
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\u00AD\u200B-\u200D\u2060\uFEFF]/g, "");
}

function ruleKey(term: TermMatch): string {
  return `${term.kind}:${term.id}:${normalizeRuleText(term.alias).replace(/\s+/g, " ").trim()}`;
}

function hasTemporalPeriodLeftContext(ctx: AliasContextRuleContext): boolean {
  const leftContext = normalizeRuleText(ctx.text.slice(0, ctx.index));
  return TEMPORAL_PERIOD_LEFT_CONTEXT_RE.test(leftContext);
}

function isNotAllCapsMatch(ctx: AliasContextRuleContext): boolean {
  return ctx.matchText !== ctx.matchText.toUpperCase();
}

function getNearbyContext(
  ctx: AliasContextRuleContext,
  before = 120,
  after = 80,
): string {
  return normalizeRuleText(
    ctx.text.slice(
      Math.max(0, ctx.index - before),
      ctx.index + ctx.matchText.length + after,
    ),
  );
}

const NEONATAL_CONTEXT_RE =
  /\b(?:neonatal|premature|preterm|newborn|newborns|infant|infants|gestational age|weeks gestation|surfactant deficiency|hyaline membrane disease|lecithin|sphingomyelin)\b/u;

function hasNeonatalContext(ctx: AliasContextRuleContext): boolean {
  return NEONATAL_CONTEXT_RE.test(getNearbyContext(ctx));
}

const ALIAS_CONTEXT_RULES: Record<string, readonly AliasContextRule[]> = {
  "condition:acute-lymphoblastic-leukemia:all": [isNotAllCapsMatch],
  "condition:ards:respiratory distress syndrome": [hasNeonatalContext],
  "protein:amyloid-precursor-protein:app": [isNotAllCapsMatch],
  "symptom:menses:period": [hasTemporalPeriodLeftContext],
  "symptom:menses:periods": [hasTemporalPeriodLeftContext],
};

export function shouldRejectAliasByContext(ctx: AliasContextRuleContext): boolean {
  const rules = ALIAS_CONTEXT_RULES[ruleKey(ctx.term)];
  return rules?.some((rule) => rule(ctx)) ?? false;
}
