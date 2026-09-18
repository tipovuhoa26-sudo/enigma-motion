'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from './index';

interface LenisContextValue {
  lenis: Lenis | null;
  scrollTo: (target: string | HTMLElement, options?: { offset?: number; duration?: number }) => void;
}

const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  scrollTo: () => {},
});

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  const resolveTargetElement = (target: string): HTMLElement | null => {
    let el = document.querySelector(target) as HTMLElement | null;
    if (!el) {
      if (target === '#technology' || target === 'technology') {
        el = (document.querySelector('#technology') || document.querySelector('#advantage')) as HTMLElement | null;
      } else if (target === '#service' || target === 'service') {
        el = (document.querySelector('#service') || document.querySelector('#cases')) as HTMLElement | null;
      } else if (target === '#schedule' || target === 'schedule') {
        el = (document.querySelector('#schedule') || document.querySelector('#contact')) as HTMLElement | null;
      } else if (target === '#overview' || target === 'overview') {
        el = (document.querySelector('#overview') || document.querySelector('#home')) as HTMLElement | null;
      }
    }
    return el;
  };

  const scrollTo = (target: string | HTMLElement, options?: { offset?: number; duration?: number }) => {
    let targetEl: HTMLElement | null = null;

    if (typeof target === 'string') {
      if (target === '#top' || target === 'top') {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(0, { duration: options?.duration ?? 1.1 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        window.history.pushState(null, '', ' ');
        return;
      }
      targetEl = resolveTargetElement(target);
    } else if (target instanceof HTMLElement) {
      targetEl = target;
    }

    if (targetEl) {
      // If the target is pinned or inside a GSAP pin-spacer, the pin-spacer is the true scroll boundary
      const scrollTarget = (targetEl.closest('.pin-spacer') as HTMLElement) || targetEl;
      const targetOffset = options?.offset ?? -20;

      if (lenisRef.current) {
        lenisRef.current.scrollTo(scrollTarget, {
          offset: targetOffset,
          duration: options?.duration ?? 1.1,
        });
      } else {
        const top = scrollTarget.getBoundingClientRect().top + window.pageYOffset + targetOffset;
        window.scrollTo({ top, behavior: 'smooth' });
      }

      if (typeof target === 'string' && target.startsWith('#')) {
        window.history.pushState(null, '', target);
      }
    } else if (typeof target === 'string') {
      const fallback = document.getElementById(target.replace('#', ''));
      if (fallback) {
        const scrollTarget = (fallback.closest('.pin-spacer') as HTMLElement) || fallback;
        if (lenisRef.current) {
          lenisRef.current.scrollTo(scrollTarget, { offset: -20, duration: 1.1 });
        } else {
          scrollTarget.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Luxury exponential decay easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;
    setLenisInstance(lenis);

    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);


    // Intercept clicks on all hash links sitewide
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          const targetEl = resolveTargetElement(href);
          if (targetEl) {
            e.preventDefault();
            lenis.scrollTo(targetEl, { offset: 0, duration: 1.2 });
            window.history.pushState(null, '', href);
          }
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);

    // Initial hash scroll if URL already contains a hash (e.g., /#technology)
    if (window.location.hash) {
      setTimeout(() => {
        scrollTo(window.location.hash);
      }, 300);
    }

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      gsap.ticker.remove(tickerCallback);
      lenisRef.current = null;
      setLenisInstance(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis: lenisInstance, scrollTo }}>
      {children}
    </LenisContext.Provider>
  );
}
