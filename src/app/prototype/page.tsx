'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Preloader } from '@/sections/Preloader';
import { Header } from '@/components/Header';
import { Dock } from '@/components/Dock';
import { Hero } from '@/sections/Hero';
import { AdvantageSection } from '@/sections/AdvantageSection';
import { CasesSection } from '@/sections/CasesSection';
import { Button } from '@/components/Button';
import { createCounter } from '@/motion/timelines/counter';
import { Play, RotateCcw } from 'lucide-react';

export default function PrototypePage() {
  const [heroReady, setHeroReady] = useState(false);

  // Standalone card test controller (Prototype Item #4)
  const standaloneNumRef = useRef<HTMLSpanElement>(null);
  const [hasPlayedStandalone, setHasPlayedStandalone] = useState(false);

  const handlePlayStandalone = () => {
    if (!standaloneNumRef.current) return;
    const c = createCounter({
      element: standaloneNumRef.current,
      from: 0,
      to: 94,
      duration: 1.1,
      suffix: '%',
    });
    c.play();
    setHasPlayedStandalone(true);
  };

  const handleResetStandalone = () => {
    if (standaloneNumRef.current) {
      standaloneNumRef.current.textContent = '0%';
    }
    setHasPlayedStandalone(false);
  };

  return (
    <div className="editorial-shell">
      {/* 1. Preloader */}
      <Preloader
        onExitStart={() => setHeroReady(true)}
        onLoaded={() => setHeroReady(true)}
      />

      <div className="editorial-card min-h-screen">
        <Header activeSection="home" />
        <Dock activeIndex={0} />

        {/* Prototype Banner */}
        <div className="bg-[#FAFFDE] border-b border-[#DFE2C8] py-2 px-6 text-center text-xs font-medium text-[#17151A] flex items-center justify-between">
          <span className="font-semibold tracking-wide uppercase text-[10px] bg-[#17151A] text-white px-2.5 py-0.5 rounded-full">
            Phase 0 Prototype
          </span>
          <span>Validating 5 Motion Proofs: Preloader, Hero, Pin-and-Cover, Standalone Widget, Horizontal Gallery</span>
          <Link href="/" className="underline text-[#6E6E6E] hover:text-[#17151A]">
            View Full Site →
          </Link>
        </div>

        <main>
          {/* 2. Hero Entrance */}
          <Hero autoPlayIntro={heroReady} />

          {/* 4. Isolated Animated Card (Standalone Widget Proof) */}
          <section className="px-6 md:px-12 lg:px-20 py-12 bg-white/60 border-y border-black/5 flex flex-col items-center">
            <div className="max-w-md w-full bg-[#FAFFDE] rounded-3xl p-6 sm:p-8 border border-[#DFE2C8] shadow-sm flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#17151A] bg-white/80 px-3 py-1 rounded-full border border-black/5">
                  Proof #4: Standalone Card
                </span>
                <span className="text-xs text-[#6E6E6E]">Gated Counter Test</span>
              </div>
              <p className="text-sm text-[#17151A]">
                Validating reusable counter utility outside of ScrollTrigger pin.
              </p>
              <div className="flex items-baseline gap-2 py-2">
                <span ref={standaloneNumRef} className="text-5xl font-light text-[#17151A] tabular-nums">
                  0%
                </span>
                <span className="text-xs text-[#6E6E6E] font-medium">precision benchmark score</span>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handlePlayStandalone}
                  disabled={hasPlayedStandalone}
                  className="gap-1.5"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>{hasPlayedStandalone ? 'Played' : 'Test Play Counter'}</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleResetStandalone}
                  className="gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </Button>
              </div>
            </div>
          </section>

          {/* 3. Sticky/Pinned Scroll Section (Advantage 3-Card Stack & Cover with Gated Counters) */}
          <AdvantageSection />

          {/* 5. Horizontal Cases Gallery (Pin + Scroll-driven translateX) */}
          <CasesSection />
        </main>
      </div>
    </div>
  );
}
