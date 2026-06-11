import type { AntiarrhythmicClass } from "./medications";
import { getMedicationById } from "./medications";

import classIa from "../media/images/antiarrhythmics/class-ia.svg";
import classIb from "../media/images/antiarrhythmics/class-ib.svg";
import classIc from "../media/images/antiarrhythmics/class-ic.svg";
import classII from "../media/images/antiarrhythmics/class-ii.svg";
import classIII from "../media/images/antiarrhythmics/class-iii.svg";
import classIV from "../media/images/antiarrhythmics/class-iv.svg";

export const ANTIARRHYTHMIC_ACTION_POTENTIAL_IMAGES: Record<
  AntiarrhythmicClass,
  string
> = {
  Ia: classIa,
  Ib: classIb,
  Ic: classIc,
  II: classII,
  III: classIII,
  IV: classIV,
};

export function getAntiarrhythmicClassForMedication(
  id: string,
): AntiarrhythmicClass | undefined {
  return getMedicationById(id)?.antiarrhythmicClass;
}

export function getAntiarrhythmicImageForMedication(
  id: string,
): string | undefined {
  const drugClass = getAntiarrhythmicClassForMedication(id);
  return drugClass
    ? ANTIARRHYTHMIC_ACTION_POTENTIAL_IMAGES[drugClass]
    : undefined;
}
