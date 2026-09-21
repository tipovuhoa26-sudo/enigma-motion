'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/sections/Hero';
import { ClientTrustStrip } from '@/components/ClientTrustStrip';
import { AdvantageSection } from '@/sections/AdvantageSection';
import { StatsStrip } from '@/sections/StatsStrip';
import { CasesSection } from '@/sections/CasesSection';
import { CtaFooter } from '@/sections/CtaFooter';
import { Footer } from '@/sections/Footer';

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 flex flex-col w-full">
        <Hero autoPlayIntro={true} />
        <ClientTrustStrip />
        <AdvantageSection />
        <StatsStrip />
        <CasesSection />
        <CtaFooter />
      </main>

      <Footer />
    </div>
  );
}
