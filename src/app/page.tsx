'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/sections/Hero';
import { ProofStrip } from '@/sections/ProofStrip';
import { MethodStorytellingSection } from '@/sections/MethodStorytellingSection';
import { FourGatesProgressSection } from '@/sections/FourGatesProgressSection';
import { ProofSection } from '@/sections/ProofSection';
import { CtaFooter } from '@/sections/CtaFooter';
import { Footer } from '@/sections/Footer';

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col sunext-atmospheric-canvas">
      <Header />

      <main className="flex-1 flex flex-col w-full">
        {/* CHAPTER 1 — HERO + TRUST: Khởi đầu từ mạng tri thức & Xác thực uy tín */}
        <Hero autoPlayIntro={true} />
        <ProofStrip />

        {/* CHAPTER 2 — METHOD: 3 Nguyên lý trên một canvas liên tục */}
        <MethodStorytellingSection />

        {/* CHAPTER 3 — CONTROL: Stage-Gate kiểm soát rủi ro trước khi mở rộng */}
        <FourGatesProgressSection />

        {/* CHAPTER 4 — PROOF: Thực tế triển khai — Từ hệ thống đến hiện trường (Một Story) */}
        <ProofSection />

        {/* CHAPTER 5 — AUTONOMY / SUN: Tự chủ bàn giao ➔ Nguồn sáng bình minh */}
        <CtaFooter />
      </main>

      <Footer />
    </div>
  );
}
