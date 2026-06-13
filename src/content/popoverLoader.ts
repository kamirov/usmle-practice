type PopoverRenderer = (
  id: string,
  popover: HTMLDivElement,
) => boolean | Promise<boolean>;

const rendererCache = new Map<string, PopoverRenderer>();

async function loadRenderer(kind: string): Promise<PopoverRenderer> {
  const cached = rendererCache.get(kind);
  if (cached) return cached;

  let renderer: PopoverRenderer;
  switch (kind) {
    case "organ": {
      const mod = await import("./popovers/organ");
      renderer = mod.renderOrganPopover;
      break;
    }
    case "heart-sound": {
      const mod = await import("./popovers/cardiac");
      renderer = mod.renderHeartSoundPopover;
      break;
    }
    case "heart-murmur": {
      const mod = await import("./popovers/cardiac");
      renderer = mod.renderHeartMurmurPopover;
      break;
    }
    case "hemodynamic": {
      const mod = await import("./popovers/cardiac");
      renderer = mod.renderHemodynamicPopover;
      break;
    }
    case "symptom": {
      const mod = await import("./popovers/symptom");
      renderer = mod.renderSymptomPopover;
      break;
    }
    case "medication": {
      const mod = await import("./popovers/medication");
      renderer = mod.renderMedicationPopover;
      break;
    }
    case "lab": {
      const mod = await import("./popovers/lab");
      renderer = mod.renderLabValuePopover;
      break;
    }
    case "nephron": {
      const mod = await import("./popovers/misc");
      renderer = mod.renderNephronPopover;
      break;
    }
    case "condition": {
      const mod = await import("./popovers/condition");
      renderer = mod.renderConditionPopover;
      break;
    }
    case "protein": {
      const mod = await import("./popovers/protein");
      renderer = mod.renderProteinPopover;
      break;
    }
    case "signaling": {
      const mod = await import("./popovers/signaling");
      renderer = mod.renderSignalingPopover;
      break;
    }
    case "ecg": {
      const mod = await import("./popovers/ecg");
      renderer = mod.renderEcgFindingPopover;
      break;
    }
    case "procedure": {
      const mod = await import("./popovers/misc");
      renderer = mod.renderProcedurePopover;
      break;
    }
    case "clinical-strategy": {
      const mod = await import("./popovers/misc");
      renderer = mod.renderClinicalStrategyPopover;
      break;
    }
    case "cell": {
      const mod = await import("./popovers/cell");
      renderer = mod.renderCellPopover;
      break;
    }
    case "pathogenesis": {
      const mod = await import("./popovers/pathogenesis");
      renderer = mod.renderPathogenesisPopover;
      break;
    }
    case "metabolism": {
      const mod = await import("./popovers/metabolism");
      renderer = mod.renderMetabolismPopover;
      break;
    }
    case "microbiology": {
      const mod = await import("./popovers/microbiology");
      renderer = mod.renderMicrobiologyPopover;
      break;
    }
    case "musculoskeletal": {
      const mod = await import("./popovers/musculoskeletal");
      renderer = mod.renderMusculoskeletalPopover;
      break;
    }
    default:
      return () => false;
  }

  rendererCache.set(kind, renderer);
  return renderer;
}

export interface ChipPopoverTarget {
  kind: string;
  id: string;
}

export function getChipPopoverTarget(chip: HTMLElement): ChipPopoverTarget | null {
  if (chip.dataset.organId) return { kind: "organ", id: chip.dataset.organId };
  if (chip.dataset.heartSoundId) {
    return { kind: "heart-sound", id: chip.dataset.heartSoundId };
  }
  if (chip.dataset.heartMurmurId) {
    return { kind: "heart-murmur", id: chip.dataset.heartMurmurId };
  }
  if (chip.dataset.hemodynamicId) {
    return { kind: "hemodynamic", id: chip.dataset.hemodynamicId };
  }
  if (chip.dataset.symptomId) return { kind: "symptom", id: chip.dataset.symptomId };
  if (chip.dataset.medicationId) {
    return { kind: "medication", id: chip.dataset.medicationId };
  }
  if (chip.dataset.labValueId) return { kind: "lab", id: chip.dataset.labValueId };
  if (chip.dataset.nephronSegmentId) {
    return { kind: "nephron", id: chip.dataset.nephronSegmentId };
  }
  if (chip.dataset.conditionId) {
    return { kind: "condition", id: chip.dataset.conditionId };
  }
  if (chip.dataset.proteinId) return { kind: "protein", id: chip.dataset.proteinId };
  if (chip.dataset.signalingId) {
    return { kind: "signaling", id: chip.dataset.signalingId };
  }
  if (chip.dataset.ecgFindingId) return { kind: "ecg", id: chip.dataset.ecgFindingId };
  if (chip.dataset.procedureId) {
    return { kind: "procedure", id: chip.dataset.procedureId };
  }
  if (chip.dataset.clinicalStrategyId) {
    return { kind: "clinical-strategy", id: chip.dataset.clinicalStrategyId };
  }
  if (chip.dataset.cellId) return { kind: "cell", id: chip.dataset.cellId };
  if (chip.dataset.pathogenesisId) {
    return { kind: "pathogenesis", id: chip.dataset.pathogenesisId };
  }
  if (chip.dataset.metabolismId) {
    return { kind: "metabolism", id: chip.dataset.metabolismId };
  }
  if (chip.dataset.microbiologyId) {
    return { kind: "microbiology", id: chip.dataset.microbiologyId };
  }
  if (chip.dataset.musculoskeletalId) {
    return { kind: "musculoskeletal", id: chip.dataset.musculoskeletalId };
  }
  return null;
}

export async function renderChipPopover(
  chip: HTMLElement,
  popover: HTMLDivElement,
): Promise<boolean> {
  const target = getChipPopoverTarget(chip);
  if (!target) return false;
  const renderer = await loadRenderer(target.kind);
  return renderer(target.id, popover);
}
