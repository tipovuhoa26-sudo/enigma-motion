'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/sections/Hero';
import { AiControlRoomSection } from '@/sections/AiControlRoomSection';
import { ClientTrustStrip } from '@/components/ClientTrustStrip';
import { StatsStrip } from '@/sections/StatsStrip';
import { SunextAiSystemBento } from '@/components/SunextAiSystemBento';
import { AdvantageSection } from '@/sections/AdvantageSection';
import { CasesSection } from '@/sections/CasesSection';
import { CtaFooter } from '@/sections/CtaFooter';
import { Footer } from '@/sections/Footer';

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 flex flex-col w-full">
        <Hero autoPlayIntro={true} />
        <AiControlRoomSection />
        <ClientTrustStrip />
        <StatsStrip />
        <SunextAiSystemBento />
        <AdvantageSection />
        <CasesSection />
        <CtaFooter />
      </main>

      <Footer />
    </div>
  );
}
