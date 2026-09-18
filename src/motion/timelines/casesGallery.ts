'use client';

import { gsap, ScrollTrigger, ease } from '../index';
import { isReducedMotion } from '../utils/reducedMotion';

export interface CasesGalleryElements {
  pinTarget: HTMLElement | null;
  track: HTMLElement | null;
  watermark: HTMLElement | null;
  initialCards?: HTMLElement[];
}

export function createCasesGalleryTimeline(elements: CasesGalleryElements) {
  const { pinTarget, track, watermark, initialCards = [] } = elements;

  if (!pinTarget || !track) return { kill: () => {} };

  const mm = gsap.matchMedia();

  // Desktop (min-width: 1024px): Pinned horizontal scrub
  mm.add('(min-width: 1024px)', () => {
    if (isReducedMotion()) {
      if (watermark) gsap.set(watermark, { opacity: 0.1 });
      gsap.set(track, { x: 0, clearProps: 'transform' });
      return;
    }

    const getScrollDistance = () => {
      const parentWidth = track.parentElement ? track.parentElement.clientWidth : window.innerWidth;
      const totalWidth = track.scrollWidth;
      const dist = Math.max(0, totalWidth - parentWidth + 140);
      return Math.max(dist, 1400); // ensure smooth, comfortable scrub duration
    };

    // MOT-CASES-003: Initial card stagger-in on enter
    if (initialCards.length > 0) {
      gsap.set(initialCards, { opacity: 0, y: 16 });
    }

    const scrubTl = gsap.timeline({
      scrollTrigger: {
        trigger: pinTarget,
        start: 'top top',
        end: () => `+=${getScrollDistance()}`,
        pin: true,
        pinSpacing: true,
        scrub: 1, // 1s smoothing lag per TDD §9
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onEnter: () => {
          if (initialCards.length > 0) {
            gsap.to(initialCards, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: ease.enter,
              stagger: 0.07,
              overwrite: 'auto',
            });
          }
        },
      },
    });

    // Pinned horizontal track translation
    scrubTl.to(
      track,
      {
        x: () => -getScrollDistance(),
        ease: 'none',
      },
      0
    );

    // MOT-CASES-001: Watermark reveal 0 -> 0.1 over first 8% of progress
    if (watermark) {
      scrubTl.fromTo(
        watermark,
        { opacity: 0 },
        { opacity: 0.1, duration: 0.08, ease: 'power1.out' },
        0
      );
    }

    return () => {
      scrubTl.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === pinTarget) trigger.kill();
      });
    };
  });

  // Mobile / Tablet (< 1024px): Native horizontal swipe / scroll-snap, no pin
  mm.add('(max-width: 1023px)', () => {
    if (watermark) {
      gsap.set(watermark, { opacity: 0.1 });
    }
    gsap.set(track, { x: 0, clearProps: 'transform' });
    if (initialCards.length > 0) {
      gsap.set(initialCards, { opacity: 1, y: 0 });
    }
    return () => {};
  });

  return {
    kill: () => {
      mm.revert();
    },
  };
}
