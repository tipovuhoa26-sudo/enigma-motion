'use client';

import React, { useState } from 'react';
import { Preloader } from '@/sections/Preloader';
import { Header } from '@/components/Header';
import { Dock } from '@/components/Dock';
import { Hero } from '@/sections/Hero';
import { AdvantageSection } from '@/sections/AdvantageSection';
import { StatsStrip } from '@/sections/StatsStrip';
import { CasesSection } from '@/sections/CasesSection';
import { CtaFooter } from '@/sections/CtaFooter';
import { Footer } from '@/sections/Footer';

export default function HomePage() {
  const [heroReady, setHeroReady] = useState(false);

  return (
    <div className="editorial-shell">
      {/* Preloader Component (Overlay, gates initial entrance) */}
      <Preloader
        onExitStart={() => setHeroReady(true)}
        onLoaded={() => setHeroReady(true)}
      />

      {/* Main Editorial Card Container */}
      <div className="editorial-card min-h-screen flex flex-col justify-between">
        <Header />
        <Dock />

        <main className="flex-1 flex flex-col">
          <Hero autoPlayIntro={heroReady} />
          <AdvantageSection />
          <StatsStrip />
          <CasesSection />
          <CtaFooter />
        </main>

        <Footer />
      </div>
    </div>
  );
}
