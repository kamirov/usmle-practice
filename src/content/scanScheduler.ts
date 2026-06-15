const ROOTS_PER_IDLE_CHUNK = 4;
const SCAN_IDLE_TIMEOUT_MS = 800;

type HighlightJob = {
  root: Element;
  zone: number;
};

let queue: HighlightJob[] = [];
let draining = false;
let isApplyingHighlights = false;
let onHighlightIdle: (() => void) | null = null;

export function getIsApplyingHighlights(): boolean {
  return isApplyingHighlights;
}

export function setOnHighlightIdle(callback: (() => void) | null): void {
  onHighlightIdle = callback;
}

function notifyHighlightIdle(): void {
  if (queue.length > 0 || draining || isApplyingHighlights) return;
  onHighlightIdle?.();
}

function requestIdleWork(run: () => void): void {
  const idle =
    window.requestIdleCallback ??
    ((cb: IdleRequestCallback) =>
      window.setTimeout(
        () => cb({ didTimeout: false, timeRemaining: () => 50 }),
        0,
      ));
  idle(run, { timeout: SCAN_IDLE_TIMEOUT_MS });
}

function drainQueue(highlightRoot: (root: Element, zone: number) => void): void {
  if (draining || queue.length === 0) return;
  draining = true;

  requestIdleWork(() => {
    isApplyingHighlights = true;
    try {
      const batch = queue.splice(0, ROOTS_PER_IDLE_CHUNK);
      for (const job of batch) {
        if (job.root.isConnected) {
          highlightRoot(job.root, job.zone);
        }
      }
    } finally {
      isApplyingHighlights = false;
      draining = false;
      if (queue.length > 0) {
        drainQueue(highlightRoot);
      } else {
        notifyHighlightIdle();
      }
    }
  });
}

export function enqueueHighlightRoots(
  roots: Element[],
  getZone: (root: Element) => number,
  highlightRoot: (root: Element, zone: number) => void,
): void {
  for (const root of roots) {
    queue.push({ root, zone: getZone(root) });
  }
  drainQueue(highlightRoot);
}

export function enqueueHighlightRoot(
  root: Element,
  zone: number,
  highlightRoot: (root: Element, zone: number) => void,
): void {
  queue.push({ root, zone });
  drainQueue(highlightRoot);
}

export function clearHighlightQueue(): void {
  queue = [];
}

export function flushHighlightQueueSync(
  highlightRoot: (root: Element, zone: number) => void,
): void {
  if (queue.length === 0) return;
  isApplyingHighlights = true;
  try {
    while (queue.length > 0) {
      const job = queue.shift()!;
      if (job.root.isConnected) {
        highlightRoot(job.root, job.zone);
      }
    }
  } finally {
    isApplyingHighlights = false;
    draining = false;
    notifyHighlightIdle();
  }
}
