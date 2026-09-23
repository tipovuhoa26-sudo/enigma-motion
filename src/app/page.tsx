'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/sections/Hero';
import { StatsStrip } from '@/sections/StatsStrip';
import { MethodStorytellingSection } from '@/sections/MethodStorytellingSection';
import { FourGatesProgressSection } from '@/sections/FourGatesProgressSection';
import { FieldEvidenceSection } from '@/sections/FieldEvidenceSection';
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

        {/* 02. PROOF: Kết quả được đo (3 Connected Metrics + Integrated Client Logos) */}
        <StatsStrip />

        {/* 03. METHOD: 3 Scroll States (Process ➔ Data ➔ KPI) */}
        <MethodStorytellingSection />

        {/* 04. DELIVERY: G1 ➔ G2 ➔ G3 ➔ G4 One Progression Beam + 3 Capabilities */}
        <FourGatesProgressSection />

        {/* 05. FIELD EVIDENCE: Được Xây Từ Hiện Trường (Proof Photography) */}
        <FieldEvidenceSection />

        {/* 06. CASE: 1 Real World Transformation (Vinhomes Before ➔ After) */}
        <CasesSection />

        {/* 07. CTA: Pure Horizon Sun · One Statement · One Action */}
        <CtaFooter />
      </main>

      <Footer />
    </div>
  );
}
