'use client';

import { ScrollTrigger } from '../index';

export interface PinConfig {
  trigger: HTMLElement | string;
  end?: string | number | (() => string | number);
  pinSpacing?: boolean;
  anticipatePin?: number;
  invalidateOnRefresh?: boolean;
  scrub?: boolean | number;
  onUpdate?: (self: ScrollTrigger) => void;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
}

export function createStandardPin(config: PinConfig) {
  return ScrollTrigger.create({
    trigger: config.trigger,
    start: 'top top',
    end: config.end ?? '+=100%',
    pin: true,
    pinSpacing: config.pinSpacing ?? true,
    anticipatePin: config.anticipatePin ?? 1,
    invalidateOnRefresh: config.invalidateOnRefresh ?? true,
    scrub: config.scrub,
    onUpdate: config.onUpdate,
    onEnter: config.onEnter,
    onLeave: config.onLeave,
    onEnterBack: config.onEnterBack,
    onLeaveBack: config.onLeaveBack,
  });
}
