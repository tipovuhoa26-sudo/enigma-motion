'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';
import { AiTransformationNetwork } from '@/components/visuals/AiTransformationNetwork';
import { createHeroTimeline } from '@/motion/timelines/hero';

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
      className="relative w-full min-h-[calc(100vh-80px)] px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-12 lg:py-16 flex flex-col justify-center overflow-hidden sunext-atmospheric-canvas"
      data-motion="hero"
    >
      <div className="max-w-[1360px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center relative z-10 my-auto">
        
        {/* Left Column: 1 Bold Statement + 1 Focused Lead Sentence + 2 Clean CTAs */}
        <div data-hero-left className="lg:col-span-6 flex flex-col justify-center max-w-[680px]">
          
          {/* Huge Editorial H1 (Scaled up +12%, confident Cloudflare-grade hierarchy) */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] xl:text-[3.75rem] 2xl:text-[4.25rem] font-light tracking-tight text-[#0A0A0A] leading-[1.12] mb-6"
            data-hero-headline
          >
            <span ref={headlineLine1Ref} className="line block font-normal text-[#0A0A0A] md:whitespace-nowrap">
              <span className="inline-block">Đưa AI</span> <span className="inline-block">vào vận hành.</span>
            </span>
            <span ref={headlineLine2Ref} className="line block font-light text-[#0A0A0A] md:whitespace-nowrap mt-1">
              <span className="inline-block">Đo bằng kết quả</span>{' '}
              <span className="inline-block text-[#F97316] font-normal">kinh doanh.</span>
            </span>
          </h1>

          {/* Focused Lead Sentence (≤ 18 words, sharp & enterprise) */}
          <p className="text-base sm:text-lg lg:text-xl text-[#515151] max-w-[560px] leading-relaxed mb-9 font-normal">
            Sunext chuẩn hóa quy trình, trao quyền đội ngũ và triển khai AI nghiệm thu theo P&L định lượng.
          </p>

          {/* Primary Orange CTA + Clean Secondary Outline */}
          <div ref={ctaGroupRef} className="flex flex-wrap items-center gap-4" data-hero-cta>
            <Link href="/#contact">
              <Button variant="orange" size="lg" className="rounded-xl font-medium shadow-sm hover:shadow-md cursor-pointer">
                <span>Đặt Lịch Tư Vấn Chiến Lược</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <Link href="/danh-gia-san-sang-ai">
              <Button variant="outline" size="lg" className="rounded-xl font-medium cursor-pointer bg-white/80 hover:bg-white border-[#D5D3CC]">
                <span>Đo Độ Sẵn Sàng (12 Câu)</span>
                <ArrowRight className="w-4 h-4 ml-1 opacity-70" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column: Living Atmospheric Sun & Orbit System (50-60% Viewport Presence) */}
        <div
          ref={visualRef}
          className="lg:col-span-6 relative flex items-center justify-center lg:justify-end min-h-[440px] md:min-h-[520px] lg:min-h-[600px] xl:min-h-[660px] overflow-visible"
          data-hero-visual
        >
          <AiTransformationNetwork />
        </div>

      </div>
    </section>
  );
}
