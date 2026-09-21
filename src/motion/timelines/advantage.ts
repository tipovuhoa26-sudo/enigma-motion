'use client';

import { gsap, ScrollTrigger } from '../index';
import { isReducedMotion } from '../utils/reducedMotion';
import { createCounter, CounterController } from './counter';

export interface AdvantageElements {
  pinContainer: HTMLElement | null;
  cards: HTMLElement[];
  counters: {
    element: HTMLElement | null;
    to: number;
    prefix?: string;
    suffix?: string;
  }[];
  headingBlock?: HTMLElement | null;
  ctas?: HTMLElement[];
  onStepChange?: (step: number) => void;
}

export function createAdvantageTimeline(elements: AdvantageElements) {
  const {
    pinContainer,
    cards,
    counters,
    headingBlock,
    ctas = [],
    onStepChange,
  } = elements;

  if (!pinContainer) return { kill: () => {} };

  const mm = gsap.matchMedia();

  // Desktop / Tablet (>= 768px): Pinned card stack
  mm.add('(min-width: 768px)', () => {
    if (isReducedMotion()) {
      // In reduced motion, cards are simply stacked with static visibility
      cards.forEach((card) => {
        gsap.set(card, { y: 0, opacity: 1, clearProps: 'transform' });
      });
      counters.forEach((c) => {
        if (c.element) c.element.textContent = `${c.prefix ?? ''}${c.to}${c.suffix ?? ''}`;
      });
      return;
    }

    const cardControllers: (CounterController | null)[] = counters.map((c) => {
      if (!c.element) return null;
      return createCounter({
        element: c.element,
        from: 0,
        to: c.to,
        duration: 1.1,
        prefix: c.prefix ?? '',
        suffix: c.suffix ?? '',
      });
    });

    // MOT-SCROLL-001 / MOT-ADV-008: Heading & CTA row entrance
    if (headingBlock) {
      gsap.fromTo(
        headingBlock,
        { opacity: 0, y: 20, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: pinContainer,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }

    if (ctas.length > 0) {
      gsap.fromTo(
        ctas,
        { opacity: 0, filter: 'blur(4px)' },
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.06,
          scrollTrigger: {
            trigger: pinContainer,
            start: 'top 75%',
            once: true,
          },
        }
      );
    }

    // Set initial card states with 3D depth perspective
    // Card 1 is active; Card 2 & 3 start below with slight scale reduction and origin at top
    if (cards[0]) {
      gsap.set(cards[0], { yPercent: 0, scale: 1, transformOrigin: 'center top' });
    }
    if (cards[1]) {
      gsap.set(cards[1], { yPercent: 105, scale: 0.96, transformOrigin: 'center top' });
    }
    if (cards[2]) {
      gsap.set(cards[2], { yPercent: 105, scale: 0.96, transformOrigin: 'center top' });
    }

    // Pinned scrub timeline with buttery-smooth 1s inertia
    const scrubTl = gsap.timeline({
      scrollTrigger: {
        trigger: pinContainer,
        start: 'top top',
        end: '+=240%',
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        scrub: 1, // 1s smooth inertia with Lenis
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const step = progress < 0.35 ? 0 : progress < 0.72 ? 1 : 2;
          onStepChange?.(step);

          // Card 1 Counter gating: active between 0% and 35%
          if (progress >= 0.02 && progress < 0.40) {
            if (cardControllers[0] && !cardControllers[0].hasPlayed) {
              cardControllers[0].play();
            }
          } else if (progress >= 0.40) {
            cardControllers[0]?.resolveImmediately();
          }

          // Card 2 Counter gating: active between 35% and 72%
          if (progress >= 0.35 && progress < 0.72) {
            if (cardControllers[1] && !cardControllers[1].hasPlayed) {
              cardControllers[1].play();
            }
          } else if (progress >= 0.72) {
            cardControllers[1]?.resolveImmediately();
          }

          // Card 3 Counter gating: active above 72%
          if (progress >= 0.72) {
            if (cardControllers[2] && !cardControllers[2].hasPlayed) {
              cardControllers[2].play();
            }
          }
        },
      },
    });

    // Sub-timeline inside scrub:
    // Phase 1 (0.0 -> 0.35): Card 1 is in full view and counter counts up.
    // Phase 2 (0.25 -> 0.55): Card 2 glides up smoothly (yPercent: 105 -> 0, scale: 0.96 -> 1)
    // Concurrently, Card 1 scales down to 0.94, shifts up y: -12, and subtly dims
    if (cards[1]) {
      scrubTl.to(
        cards[1],
        {
          yPercent: 0,
          scale: 1,
          ease: 'power1.inOut',
          duration: 0.30,
        },
        0.20
      );
    }
    if (cards[0]) {
      scrubTl.to(
        cards[0],
        {
          scale: 0.94,
          y: -14,
          opacity: 0.93,
          ease: 'power1.inOut',
          duration: 0.30,
        },
        0.20
      );
    }

    // Phase 3 (0.55 -> 0.85): Card 3 glides up smoothly (yPercent: 105 -> 0, scale: 0.96 -> 1)
    // Concurrently, Card 2 scales down to 0.94, shifts up y: -12, and subtly dims; Card 1 scales to 0.89
    if (cards[2]) {
      scrubTl.to(
        cards[2],
        {
          yPercent: 0,
          scale: 1,
          ease: 'power1.inOut',
          duration: 0.30,
        },
        0.55
      );
    }
    if (cards[1]) {
      scrubTl.to(
        cards[1],
        {
          scale: 0.94,
          y: -14,
          opacity: 0.93,
          ease: 'power1.inOut',
          duration: 0.30,
        },
        0.55
      );
    }
    if (cards[0]) {
      scrubTl.to(
        cards[0],
        {
          scale: 0.89,
          y: -24,
          opacity: 0.86,
          ease: 'power1.inOut',
          duration: 0.30,
        },
        0.55
      );
    }

    // Phase 4 (0.85 -> 1.0): Graceful pause / hold before clean unpinning
    scrubTl.to({}, { duration: 0.15 }, 0.85);

    return () => {
      scrubTl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === pinContainer) st.kill();
      });
    };
  });

  // Mobile (< 768px): No pin, normal vertical flow with IntersectionObserver counters
  mm.add('(max-width: 767px)', () => {
    cards.forEach((card, i) => {
      gsap.set(card, { yPercent: 0, clearProps: 'transform' });
      
      // IntersectionObserver for mobile cards
      const c = counters[i];
      if (c && c.element) {
        const controller = createCounter({
          element: c.element,
          from: 0,
          to: c.to,
          duration: 1.0,
          prefix: c.prefix ?? '',
          suffix: c.suffix ?? '',
        });

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !controller.hasPlayed) {
              controller.play();
            }
          });
        }, { threshold: 0.3 });

        observer.observe(card);
      }
    });

    return () => {};
  });

  return {
    kill: () => mm.revert(),
  };
}
