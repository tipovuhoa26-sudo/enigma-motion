'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/sections/Hero';
import { ProofStrip } from '@/sections/ProofStrip';
import { MethodStorytellingSection } from '@/sections/MethodStorytellingSection';
import { FourGatesProgressSection } from '@/sections/FourGatesProgressSection';
import { PhotographicInterruptionSection } from '@/sections/PhotographicInterruptionSection';
import { CasesSection } from '@/sections/CasesSection';
import { ClientSovereigntySection } from '@/sections/ClientSovereigntySection';
import { CtaFooter } from '@/sections/CtaFooter';
import { Footer } from '@/sections/Footer';

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col sunext-atmospheric-canvas">
      <Header />

      <main className="flex-1 flex flex-col w-full">
        {/* 01. HERO: Statement + Living Sun System (Scale +28%, Optical Gravity, Mini-Story 0s-7s) */}
        <Hero autoPlayIntro={true} />

        {/* 02. PROOF STRIP: Quiet Trust (40+ engagements · 8 case studies · 45 orgs + Monochrome Logos) */}
        <ProofStrip />

        {/* 03. METHOD: 3 Principles with Varied Geometry & Syntax (Process -67% ➔ Data Fan ➔ KPI Timeline) */}
        <MethodStorytellingSection />

        {/* 04. DELIVERY: Dark Cinematic System (Discover G1 ➔ Build G2 ➔ Operate G3 ➔ Transfer G4) */}
        <FourGatesProgressSection />

        {/* 05. EARLY PHOTOGRAPHIC INTERRUPTION: Từ Hệ Thống Đến Hiện Trường (Vinhomes Unboxed 75vw) */}
        <PhotographicInterruptionSection />

        {/* 06. CASE STUDIES: In-depth Transformation Evidence */}
        <CasesSection />

        {/* 07. TRANSFER: Client Sovereignty Climax (Sunext Shifts Outward ➔ Client Team Becomes Radiant Core) */}
        <ClientSovereigntySection />

        {/* 08. CTA: Pure Horizon Sun · One Statement · One Action */}
        <CtaFooter />
      </main>

      <Footer />
    </div>
  );
}
