'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createLoaderTimeline } from '@/motion/timelines/loader';

interface PreloaderProps {
  onLoaded?: () => void;
  onExitStart?: () => void;
}

export function Preloader({ onLoaded, onExitStart }: PreloaderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const chunk1Ref = useRef<HTMLSpanElement>(null);
  const chunk2Ref = useRef<HTMLSpanElement>(null);
  const chunk3Ref = useRef<HTMLSpanElement>(null);

  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;

    // Check if session has already seen loader (per PRD MOT-001)
    const hasSeenLoader = sessionStorage.getItem('enigma_loader_seen');
    if (hasSeenLoader === 'true') {
      if (rootRef.current) rootRef.current.style.display = 'none';
      onLoaded?.();
      return;
    }

    const wordmarkChunks = [chunk1Ref.current, chunk2Ref.current, chunk3Ref.current].filter(
      (el): el is HTMLSpanElement => el !== null
    );

    // Find header wordmark chunks if available
    const headerChunks = Array.from(
      document.querySelectorAll('[data-header-wordmark] > span')
    ) as HTMLElement[];

    const tl = createLoaderTimeline({
      root: rootRef.current,
      sphere: sphereRef.current,
      counter: counterRef.current,
      wordmarkChunks,
      headerWordmarkChunks: headerChunks,
      onExitStart: () => {
        onExitStart?.();
      },
      onComplete: () => {
        try {
          sessionStorage.setItem('enigma_loader_seen', 'true');
        } catch {
          // ignore storage quota/privacy errors
        }
        setIsCompleted(true);
        onLoaded?.();
      },
    });

    return () => {
      tl.kill();
    };
  }, [onLoaded, onExitStart]);

  if (isCompleted) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F8F8F6] will-change-[filter,opacity]"
      data-loader-root
    >
      {/* Top Header Placeholder / Sync Bar */}
      <div className="absolute top-6 left-10 flex items-center gap-2.5 opacity-0 pointer-events-none">
        <div className="w-6 h-6 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#17151A]" stroke="currentColor" strokeWidth="2.5">
            <path d="M16.5 3.5L7.5 7.5V16.5L16.5 20.5" />
          </svg>
        </div>
        <span className="font-semibold text-lg text-[#17151A]">Enigma</span>
      </div>

      <div className="absolute top-6 right-10 opacity-0 pointer-events-none">
        <span className="px-5 py-2.5 rounded-full bg-[#17151A] text-white text-sm font-medium">
          Contact Us
        </span>
      </div>

      {/* Central Sphere and Wordmark */}
      <div className="flex flex-col items-center justify-center relative">
        <div
          ref={sphereRef}
          className="loader-sphere flex items-center justify-center"
          data-loader-sphere
        >
          <div
            className="text-4xl md:text-5xl font-light tracking-tight text-[#17151A] select-none flex items-center"
            data-loader-wordmark
          >
            <span ref={chunk1Ref} className="inline-block transition-transform">En</span>
            <span ref={chunk2Ref} className="inline-block transition-transform">ig</span>
            <span ref={chunk3Ref} className="inline-block transition-transform">ma</span>
          </div>
        </div>

        {/* Counter Percentage */}
        <div
          ref={counterRef}
          className="mt-8 text-sm md:text-base font-normal text-[#6E6E6E] tracking-wider tabular-nums select-none"
          data-loader-counter
        >
          1%
        </div>
      </div>
    </div>
  );
}
