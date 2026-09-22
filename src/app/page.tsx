'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/sections/Hero';
import { ClientTrustStrip } from '@/components/ClientTrustStrip';
import { StatsStrip } from '@/sections/StatsStrip';
import { MethodStorytellingSection } from '@/sections/MethodStorytellingSection';
import { FourGatesProgressSection } from '@/sections/FourGatesProgressSection';
import { ThreeServicesSection } from '@/sections/ThreeServicesSection';
import { CasesSection } from '@/sections/CasesSection';
import { CtaFooter } from '@/sections/CtaFooter';
import { Footer } from '@/sections/Footer';

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 flex flex-col w-full">
        {/* 1. Hero: 1 Proposition + 1 Paragraph + 2 CTAs + 1 Living Sunext AI Network */}
        <Hero autoPlayIntro={true} />

        {/* 2. Client Social Proof: Slow Grayscale Marquee + 1 Proof */}
        <ClientTrustStrip />

        {/* 3. Standalone Proof Metrics: 99.8% | 3 ngày → 2 giờ | -75% (No Cards) */}
        <StatsStrip />

        {/* 4. Principles / Method: Pinned Storytelling (Process ➔ Data Pulse ➔ KPI P&L in Orange) */}
        <MethodStorytellingSection />

        {/* 5. Signature 4-Gate Progression: Discover ➔ Pilot ➔ Deploy ➔ Scale (Client Operated) */}
        <FourGatesProgressSection />

        {/* 6. 3 Trụ Cột: Đào tạo. Tư vấn. Triển khai. (3 Mini-Demos) */}
        <ThreeServicesSection />

        {/* 7. Flagship Cases: Vinhomes Green Paradise & Ngân hàng BIDV */}
        <CasesSection />

        {/* 8. CTA: AI chỉ tạo giá trị khi đi vào vận hành. */}
        <CtaFooter />
      </main>

      <Footer />
    </div>
  );
}
