'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/Button';
import { AiTransformationNetwork } from '@/components/visuals/AiTransformationNetwork';
import { AiControlRoomDashboard } from '@/components/visuals/AiControlRoomDashboard';
import { createHeroTimeline, setupHeroScrollChoreography } from '@/motion/timelines/hero';

interface HeroProps {
  autoPlayIntro?: boolean;
}

export function Hero({ autoPlayIntro = true }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoPlayIntro) return;

    const navBar = document.querySelector('header') as HTMLElement | null;
    const ctas = ctaGroupRef.current ? Array.from(ctaGroupRef.current.children) as HTMLElement[] : [];
    const headlineLines = [headlineLine1Ref.current, headlineLine2Ref.current].filter((el): el is HTMLSpanElement => el !== null);

    const tl = createHeroTimeline({
      navBar,
      ctas,
      headlineLines,
      visual: visualRef.current,
    });

    return () => {
      tl.kill();
    };
  }, [autoPlayIntro]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full min-h-[calc(100vh-80px)] px-6 md:px-12 lg:px-20 py-12 lg:py-16 flex flex-col justify-center overflow-hidden bg-white hero-ambient-gradient"
      data-motion="hero"
    >
      <div className="max-w-[1280px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 my-auto">
        
        {/* Left Column: 1 Bold Proposition + 1 Paragraph + 2 Clean CTAs */}
        <div data-hero-left className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Huge Editorial H1 (64-80px) */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl xl:text-[5.25rem] font-light tracking-tight text-[#0A0A0A] leading-[1.04] mb-7 max-w-[760px]"
            data-hero-headline
          >
            <span ref={headlineLine1Ref} className="line block font-normal text-[#0A0A0A]">
              Đưa AI vào vận hành.
            </span>
            <span ref={headlineLine2Ref} className="line block font-light text-[#0A0A0A]">
              Đo bằng kết quả <span className="text-[#F97316] font-normal">kinh doanh.</span>
            </span>
          </h1>

          {/* Editorial Lead Copy: 18-20px, #515151 */}
          <p className="text-lg sm:text-xl text-[#515151] max-w-[620px] leading-relaxed mb-10 font-normal">
            Chuyển đổi AI thực chất do bài toán kinh doanh dẫn dắt. Không bán tool đại trà, Sunext tái cấu trúc quy trình, trao quyền đội ngũ và nghiệm thu theo P&L định lượng.
          </p>

          {/* Primary Orange CTA + Clean Outline Secondary */}
          <div ref={ctaGroupRef} className="flex flex-wrap items-center gap-4" data-hero-cta>
            <Link href="/#contact">
              <Button variant="orange" size="lg" className="rounded-xl font-medium shadow-sm hover:shadow-md cursor-pointer">
                <span>Đặt Lịch Tư Vấn Chiến Lược</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <Link href="/danh-gia-san-sang-ai">
              <Button variant="outline" size="lg" className="rounded-xl font-medium cursor-pointer">
                <span>Đo Độ Sẵn Sàng (12 Câu)</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column: 1 Signature AI Transformation Network Visual */}
        <div
          ref={visualRef}
          className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] md:min-h-[500px]"
          data-hero-visual
        >
          <AiTransformationNetwork />
        </div>

      </div>
    </section>
  );
}
