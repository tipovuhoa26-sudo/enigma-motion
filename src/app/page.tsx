'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/sections/Hero';
import { StatsStrip } from '@/sections/StatsStrip';
import { ClientTrustStrip } from '@/components/ClientTrustStrip';
import { MethodStorytellingSection } from '@/sections/MethodStorytellingSection';
import { FourGatesProgressSection } from '@/sections/FourGatesProgressSection';
import { CasesSection } from '@/sections/CasesSection';
import { CtaFooter } from '@/sections/CtaFooter';
import { Footer } from '@/sections/Footer';

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col sunext-atmospheric-canvas">
      <Header />

      <main className="flex-1 flex flex-col w-full">
        {/* 01. HERO: Statement + Living Sun System (Nodes reveal on interaction) */}
        <Hero autoPlayIntro={true} />

        {/* 02. PROOF: 3 Numbers Born From System + Customer Logos */}
        <StatsStrip />
        <ClientTrustStrip />

        {/* 03. HOW IT WORKS: 3 Principles, One Sticky Evolving Visual */}
        <MethodStorytellingSection />

        {/* 04. DELIVERY: G1 ➔ G2 ➔ G3 ➔ G4 One Progression Line + 3 Capabilities */}
        <FourGatesProgressSection />

        {/* 05. PROOF IN THE REAL WORLD: 1 Flagship Case (Before ➔ After) */}
        <CasesSection />

        {/* 06. CTA: Return to Sun Visual · One Statement · One Action */}
        <CtaFooter />
      </main>

      <Footer />
    </div>
  );
}
