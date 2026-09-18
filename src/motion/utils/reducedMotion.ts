'use client';

import { useState, useEffect } from 'react';

export function isReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mediaQuery.matches);
    
    // Set attribute on root element
    document.documentElement.setAttribute(
      'data-motion',
      mediaQuery.matches ? 'reduced' : 'full'
    );

    const onChange = (event: MediaQueryListEvent) => {
      setReduced(event.matches);
      document.documentElement.setAttribute(
        'data-motion',
        event.matches ? 'reduced' : 'full'
      );
    };

    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
