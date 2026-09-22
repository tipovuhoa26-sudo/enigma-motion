'use client';

import { gsap, ScrollTrigger, duration, ease, stagger } from '../index';
import { isReducedMotion } from '../utils/reducedMotion';
import { createCounter } from './counter';

export interface HeroElements {
  dockItems?: HTMLElement[];
  navBar?: HTMLElement | null;
  ctas?: HTMLElement[];
  headlineLines?: HTMLElement[];
  visual?: HTMLElement | null;
  exploreWidget?: HTMLElement | null;
  statCard?: HTMLElement | null;
  statCounterValue?: HTMLElement | null;
  controlRoomDashboard?: HTMLElement | null;
  onComplete?: () => void;
}

export function createHeroTimeline(elements: HeroElements): gsap.core.Timeline {
  const {
    dockItems = [],
    navBar,
    ctas = [],
    headlineLines = [],
    visual,
    exploreWidget,
    statCard,
    statCounterValue,
    controlRoomDashboard,
    onComplete,
  } = elements;

  const tl = gsap.timeline({ onComplete });

  if (isReducedMotion()) {
    dockItems.forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
    if (navBar) { navBar.style.opacity = '1'; navBar.style.transform = 'none'; }
    ctas.forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
    headlineLines.forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; el.style.filter = 'none'; });
    if (visual) { visual.style.opacity = '1'; visual.style.transform = 'none'; }
    if (exploreWidget) { exploreWidget.style.opacity = '1'; exploreWidget.style.transform = 'none'; }
    if (statCard) { statCard.style.opacity = '1'; statCard.style.transform = 'none'; }
    if (statCounterValue) { statCounterValue.textContent = '20%'; }
    onComplete?.();
    return tl;
  }

  // Set initial states
  if (dockItems.length > 0) gsap.set(dockItems, { opacity: 0, x: -12 });
  if (navBar) gsap.set(navBar, { opacity: 0, y: -8 });
  if (ctas.length > 0) gsap.set(ctas, { opacity: 0, y: 10 });
  if (headlineLines.length > 0) gsap.set(headlineLines, { opacity: 0, y: 12, filter: 'blur(3px)' });
  if (visual) gsap.set(visual, { opacity: 0, scale: 0.94 });
  if (exploreWidget) gsap.set(exploreWidget, { opacity: 0, y: 16 });
  if (statCard) gsap.set(statCard, { opacity: 0, y: 16 });
  if (statCounterValue) statCounterValue.textContent = '0%';

  // MOT-HERO-001: Dock items stagger-in
  if (dockItems.length > 0) {
    tl.to(dockItems, {
      opacity: 1,
      x: 0,
      duration: duration.sm,
      ease: ease.enter,
      stagger: stagger.normal,
    }, 0);
  }

  // MOT-HERO-002: Nav bar stagger-in (+60ms)
  if (navBar) {
    tl.to(navBar, {
      opacity: 1,
      y: 0,
      duration: 0.35,
      ease: ease.enter,
    }, 0.06);
  }

  // MOT-HERO-003: Hero CTA pills stagger-in (+150ms after nav)
  if (ctas.length > 0) {
    tl.to(ctas, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: ease.enter,
      stagger: 0.07,
    }, 0.2);
  }

  // MOT-HERO-004: Headline reveal (+100ms after CTAs) - Light, fast & crisp
  if (headlineLines.length > 0) {
    tl.to(headlineLines, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.5,
      ease: ease.enter,
      stagger: 0.08,
    }, 0.3);
  }

  // MOT-HERO-005: Ambient hero visual entrance (concurrent with headline)
  if (visual) {
    tl.to(visual, {
      opacity: 1,
      scale: 1,
      duration: 1.0,
      ease: ease.editorial,
    }, 0.3);
  }

  // MOT-HERO-006: "Explore Your Data" widget entrance (+200ms)
  if (exploreWidget) {
    tl.to(exploreWidget, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: ease.enter,
    }, 0.5);
  }

  // MOT-HERO-007: Stat card entrance + live counter (+100ms)
  if (statCard) {
    tl.to(statCard, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: ease.enter,
      onStart: () => {
        if (statCounterValue) {
          const counter = createCounter({
            element: statCounterValue,
            from: 0,
            to: 20,
            duration: 1.2,
            suffix: '%',
          });
          counter.play();
        }
      },
    }, 0.6);
  }

  // Layer 3: AI Transformation Control Room dashboard reveal (+250ms)
  if (controlRoomDashboard) {
    gsap.set(controlRoomDashboard, {
      opacity: 0,
      y: 40,
      scale: 0.94,
      transformPerspective: 1200,
      rotateX: 4,
    });

    tl.to(
      controlRoomDashboard,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 0.9,
        ease: 'power2.out',
      },
      0.5
    );
  }

  return tl;
}

export interface HeroScrollChoreographyParams {
  container: HTMLElement;
  headline?: HTMLElement | null;
  visual?: HTMLElement | null;
  dashboard?: HTMLElement | null;
}

export function setupHeroScrollChoreography({
  container,
  headline,
  visual,
  dashboard,
}: HeroScrollChoreographyParams): ScrollTrigger | null {
  if (isReducedMotion()) return null;

  return ScrollTrigger.create({
    trigger: container,
    start: 'top top',
    end: 'bottom top',
    scrub: 0.5,
    onUpdate: (self) => {
      const p = self.progress; // 0 -> 1 as user scrolls past hero
      // Layer 01: Headline & lead subtly yield stage (y -36px, opacity 1 -> 0.35)
      if (headline) {
        gsap.to(headline, {
          y: -36 * p,
          opacity: 1 - 0.65 * p,
          duration: 0.1,
          overwrite: 'auto',
        });
      }
      // Layer 02: Transformation Graph expands slightly into focus (scale 1.0 -> 1.04, y -24px)
      if (visual) {
        gsap.to(visual, {
          y: -24 * p,
          scale: 1 + 0.04 * p,
          duration: 0.1,
          overwrite: 'auto',
        });
      }
      // Layer 03: Control Room Dashboard rises and settles as hero centerpiece
      if (dashboard) {
        gsap.to(dashboard, {
          y: -48 * p,
          scale: 1 + 0.02 * p,
          duration: 0.1,
          overwrite: 'auto',
        });
      }
    },
  });
}

