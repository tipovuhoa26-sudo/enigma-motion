'use client';

import { useState, useEffect } from 'react';

export function isReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  const osReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const htmlAttrReduced = typeof document !== 'undefined' && document.documentElement.getAttribute('data-motion') === 'reduced';
  return osReduced || htmlAttrReduced;
}

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return isReducedMotion();
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateMotion = () => {
      setReduced(isReducedMotion());
    };

    // Set initial attribute if not present
    if (!document.documentElement.hasAttribute('data-motion')) {
      document.documentElement.setAttribute(
        'data-motion',
        mediaQuery.matches ? 'reduced' : 'full'
      );
    }

    const onMediaChange = (event: MediaQueryListEvent) => {
      document.documentElement.setAttribute(
        'data-motion',
        event.matches ? 'reduced' : 'full'
      );
      updateMotion();
    };

    const onCustomPreferenceChange = () => {
      updateMotion();
    };

    mediaQuery.addEventListener('change', onMediaChange);
    window.addEventListener('motion-preference-changed', onCustomPreferenceChange);

    return () => {
      mediaQuery.removeEventListener('change', onMediaChange);
      window.removeEventListener('motion-preference-changed', onCustomPreferenceChange);
    };
  }, []);

  return reduced;
}
