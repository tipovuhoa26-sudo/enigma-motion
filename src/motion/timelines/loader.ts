'use client';

import { gsap, duration, ease } from '../index';
import { isReducedMotion } from '../utils/reducedMotion';

export interface LoaderElements {
  root: HTMLElement | null;
  sphere: HTMLElement | null;
  counter: HTMLElement | null;
  wordmarkChunks: HTMLElement[];
  headerWordmarkChunks?: HTMLElement[];
  onComplete?: () => void;
  onExitStart?: () => void;
}

export function createLoaderTimeline(elements: LoaderElements): gsap.core.Timeline {
  const {
    root,
    sphere,
    counter,
    wordmarkChunks,
    headerWordmarkChunks = [],
    onComplete,
    onExitStart,
  } = elements;

  const tl = gsap.timeline({
    onComplete: () => {
      if (root) {
        root.style.display = 'none';
      }
      onComplete?.();
    },
  });

  if (isReducedMotion()) {
    if (counter) counter.textContent = '100%';
    wordmarkChunks.forEach((c) => {
      c.style.opacity = '1';
      c.style.filter = 'none';
      c.style.transform = 'none';
    });
    headerWordmarkChunks.forEach((c) => {
      c.style.opacity = '1';
      c.style.filter = 'none';
      c.style.transform = 'none';
    });
    if (root) root.style.display = 'none';
    onComplete?.();
    return tl;
  }

  // Initial states per MOT-LOAD
  if (sphere) {
    gsap.set(sphere, { scale: 0.98, opacity: 1 });
    tl.to(sphere, {
      scale: 1,
      duration: duration.md,
      ease: ease.enter,
    }, 0);
  }

  // Initial state of text chunks
  const allChunks = [...wordmarkChunks, ...headerWordmarkChunks];
  if (allChunks.length > 0) {
    gsap.set(allChunks, { opacity: 0, filter: 'blur(6px)', x: 6 });
  }

  const progressObj = { value: 1 };
  let chunk1Revealed = false;
  let chunk2Revealed = false;
  let chunk3Revealed = false;

  const revealChunk = (index: number) => {
    const targets = [wordmarkChunks[index], headerWordmarkChunks[index]].filter(Boolean);
    if (targets.length > 0) {
      gsap.to(targets, {
        opacity: 1,
        filter: 'blur(0px)',
        x: 0,
        duration: duration.sm,
        ease: ease.enter,
        overwrite: 'auto',
      });
    }
  };

  // Phase 1: 1% -> 90% simulated progress
  tl.to(progressObj, {
    value: 90,
    duration: 1.4,
    ease: ease.standard,
    onUpdate: () => {
      const val = Math.round(progressObj.value);
      if (counter) counter.textContent = `${val}%`;

      if (val >= 15 && !chunk1Revealed) {
        chunk1Revealed = true;
        revealChunk(0);
      }
      if (val >= 45 && !chunk2Revealed) {
        chunk2Revealed = true;
        revealChunk(1);
      }
      if (val >= 85 && !chunk3Revealed) {
        chunk3Revealed = true;
        revealChunk(2);
      }
    },
  });

  // Brief pause/hold before completion
  tl.to({}, { duration: 0.1 });

  // Phase 2: 90% -> 100%
  tl.to(progressObj, {
    value: 100,
    duration: 0.25,
    ease: ease.standard,
    onUpdate: () => {
      const val = Math.round(progressObj.value);
      if (counter) counter.textContent = `${val}%`;
      if (!chunk3Revealed) {
        chunk3Revealed = true;
        revealChunk(2);
      }
    },
  });

  // MOT-LOAD-005: Hold 200ms at 100%, then letter-spacing drift over 150ms
  tl.to({}, { duration: 0.2 });
  if (wordmarkChunks.length > 0) {
    tl.to(wordmarkChunks.map(c => c.parentElement).filter(Boolean), {
      letterSpacing: '0.08em',
      duration: 0.15,
      ease: ease.standard,
    });
  }

  // Signal exit start (overlap with hero entrance ~150ms)
  tl.add(() => {
    onExitStart?.();
  });

  // MOT-LOAD-006: Exit dissolve: opacity 1->0, filter blur(0)->blur(14px), scale 1->1.04
  if (root) {
    tl.to(root, {
      opacity: 0,
      filter: 'blur(14px)',
      scale: 1.04,
      duration: duration.lg,
      ease: ease.exit,
    });
  }

  return tl;
}
