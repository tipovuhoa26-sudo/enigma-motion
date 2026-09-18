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
    ringElement?: SVGCircleElement | null;
    ringCircumference?: number;
    dotsElements?: HTMLElement[] | null;
  }[];
  headingBlock?: HTMLElement | null;
  ctas?: HTMLElement[];
}

export function createAdvantageTimeline(elements: AdvantageElements) {
  const {
    pinContainer,
    cards,
    counters,
    headingBlock,
    ctas = [],
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
        if (c.element) c.element.textContent = `${c.to}%`;
        if (c.ringElement && c.ringCircumference) {
          c.ringElement.style.strokeDashoffset = `${c.ringCircumference * (1 - c.to / 100)}`;
        }
        if (c.dotsElements) {
          c.dotsElements.forEach(d => { d.style.opacity = '1'; });
        }
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
        suffix: '%',
        ringElement: c.ringElement,
        ringCircumference: c.ringCircumference,
        dotsElements: c.dotsElements,
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

    // Set initial card states:
    // Card 1 starts at translateY(100%) and covers at 0-5%
    // Card 2 at translateY(100%), covers at 28-33%
    // Card 3 at translateY(100%), covers at 61-66%
    if (cards[0]) gsap.set(cards[0], { yPercent: 100 });
    if (cards[1]) gsap.set(cards[1], { yPercent: 100 });
    if (cards[2]) gsap.set(cards[2], { yPercent: 100 });

    // Pinned scrub timeline
    const scrubTl = gsap.timeline({
      scrollTrigger: {
        trigger: pinContainer,
        start: 'top top',
        end: '+=280%',
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        scrub: 0.5,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;

          // Card 1 Counter gating: active between ~5% and 28%
          if (progress >= 0.05 && progress < 0.28) {
            if (cardControllers[0] && !cardControllers[0].hasPlayed) {
              cardControllers[0].play();
            }
          } else if (progress >= 0.28) {
            // Scrolled past card 1 fast: resolve immediately
            cardControllers[0]?.resolveImmediately();
          }

          // Card 2 Counter gating: active between ~33% and 61%
          if (progress >= 0.33 && progress < 0.61) {
            if (cardControllers[1] && !cardControllers[1].hasPlayed) {
              cardControllers[1].play();
            }
          } else if (progress >= 0.61) {
            cardControllers[1]?.resolveImmediately();
          }

          // Card 3 Counter gating: active above ~66%
          if (progress >= 0.66) {
            if (cardControllers[2] && !cardControllers[2].hasPlayed) {
              cardControllers[2].play();
            }
          }
        },
      },
    });

    // Sub-timeline inside scrub:
    // 0 -> 5%: Card 1 covers (duration 0.05 on normalized 0-1 scale)
    if (cards[0]) {
      scrubTl.to(cards[0], {
        yPercent: 0,
        ease: 'none',
        duration: 0.05,
      }, 0);
    }

    // 28% -> 33%: Card 2 covers Card 1
    if (cards[1]) {
      scrubTl.to(cards[1], {
        yPercent: 0,
        ease: 'none',
        duration: 0.05,
      }, 0.28);
    }

    // 61% -> 66%: Card 3 covers Card 2
    if (cards[2]) {
      scrubTl.to(cards[2], {
        yPercent: 0,
        ease: 'none',
        duration: 0.05,
      }, 0.61);
    }

    // 94% -> 100%: Hold and prepare to release
    scrubTl.to({}, { duration: 0.06 }, 0.94);

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
          suffix: '%',
          ringElement: c.ringElement,
          ringCircumference: c.ringCircumference,
          dotsElements: c.dotsElements,
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
