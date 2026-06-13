export type TermKind =
  | "organ"
  | "heart-sound"
  | "heart-murmur"
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
  | "clinical-strategy"
  | "cell"
  | "pathogenesis"
  | "metabolism"
  | "microbiology"
  | "musculoskeletal";

export interface TermMatch {
  alias: string;
  kind: TermKind;
  id: string;
}
