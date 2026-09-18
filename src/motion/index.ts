'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let isRegistered = false;

export function registerGSAP() {
  if (typeof window !== 'undefined' && !isRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    isRegistered = true;
  }
}

// Auto-register when imported in browser client
registerGSAP();

export { gsap, ScrollTrigger };
export * from './durations';
export * from './easings';
export * from './tokens';
