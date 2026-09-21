'use client';

import { gsap } from '../index';
import { isReducedMotion } from '../utils/reducedMotion';

export interface CounterOptions {
  element: HTMLElement | null;
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  ringElement?: SVGCircleElement | null;
  ringCircumference?: number;
  dotsElements?: HTMLElement[] | null;
  onComplete?: () => void;
}

export interface CounterController {
  play: () => void;
  resolveImmediately: () => void;
  reset: () => void;
  hasPlayed: boolean;
}

export function createCounter(options: CounterOptions): CounterController {
  const {
    element,
    from = 0,
    to,
    duration = 1.1,
    suffix = '%',
    prefix = '',
    ringElement,
    ringCircumference = 0,
    dotsElements,
    onComplete,
  } = options;

  let hasPlayed = false;
  let activeTween: gsap.core.Tween | null = null;

  const updateDisplay = (val: number) => {
    if (element) {
      const numStr = to % 1 !== 0 ? val.toFixed(1) : Math.round(val).toString();
      element.textContent = `${prefix}${numStr}${suffix}`;
    }

    // Ring update if present
    if (ringElement && ringCircumference > 0) {
      const progressPercent = Math.min(100, Math.max(0, (val - from) / (to - from) * 100));
      const offset = ringCircumference * (1 - progressPercent / 100);
      ringElement.style.strokeDashoffset = `${offset}`;
    }

    // Dots update if present (step indicator 0.3 -> 1.0)
    if (dotsElements && dotsElements.length > 0) {
      const stepFraction = (val - from) / (to - from);
      dotsElements.forEach((dot, index) => {
        const threshold = (index + 1) / dotsElements.length;
        if (stepFraction >= threshold * 0.8) {
          dot.style.opacity = '1';
        } else {
          dot.style.opacity = '0.3';
        }
      });
    }
  };

  const resolveImmediately = () => {
    if (activeTween) {
      activeTween.kill();
      activeTween = null;
    }
    hasPlayed = true;
    updateDisplay(to);
    onComplete?.();
  };

  const play = () => {
    if (hasPlayed) {
      resolveImmediately();
      return;
    }

    if (isReducedMotion()) {
      resolveImmediately();
      return;
    }

    const counterObj = { value: from };
    hasPlayed = true;

    activeTween = gsap.to(counterObj, {
      value: to,
      duration,
      ease: 'power1.out',
      onUpdate: () => {
        updateDisplay(counterObj.value);
      },
      onComplete: () => {
        updateDisplay(to);
        activeTween = null;
        onComplete?.();
      },
    });
  };

  const reset = () => {
    if (activeTween) {
      activeTween.kill();
      activeTween = null;
    }
    hasPlayed = false;
    updateDisplay(from);
  };

  return {
    play,
    resolveImmediately,
    reset,
    get hasPlayed() {
      return hasPlayed;
    },
  };
}
