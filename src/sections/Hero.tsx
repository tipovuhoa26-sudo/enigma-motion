'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
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
      className="relative w-full min-h-[calc(100vh-80px)] px-6 md:px-12 lg:px-20 pt-8 pb-16 flex flex-col justify-center overflow-hidden hero-ambient-gradient"
      data-motion="hero"
    >
      <div className="max-w-[1280px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 my-auto">
        
        {/* Left Column: Eyebrow -> Huge H1 -> Lead -> CTAs -> Proofs */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Eyebrow / Announcement Pill */}
          <div className="mb-6 flex items-center">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FAF8FC] border border-[#E8E8E8] text-xs font-medium text-[#111111] shadow-2xs hover:border-[#6B21A8]/30 transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
              <span className="font-semibold text-[#6B21A8]">Sunext AI Enterprise:</span>
              <span className="text-[#626262]">Tư vấn & triển khai thực chiến</span>
            </div>
          </div>

          {/* Huge H1 Headline (SIZE, WEIGHT, SPACE, CONTRAST) */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.25rem] font-light tracking-tight text-[#111111] leading-[1.08] mb-6 max-w-[760px]"
            data-hero-headline
          >
            <span ref={headlineLine1Ref} className="line block font-normal text-[#111111]">
              Đưa AI vào vận hành.
            </span>
            <span ref={headlineLine2Ref} className="line block font-light text-[#111111]">
              Đo bằng kết quả <span className="text-[#F97316] font-normal">kinh doanh.</span>
            </span>
          </h1>

          {/* Lead Copy: 18-20px, high hierarchy */}
          <p className="text-base sm:text-lg md:text-xl text-[#626262] max-w-[620px] leading-relaxed mb-8 font-normal">
            Chuyển đổi AI thực chất do bài toán kinh doanh dẫn dắt. Không bán tool đại trà, chúng tôi tái cấu trúc quy trình, làm chủ luồng việc và nghiệm thu theo P&L định lượng.
          </p>

          {/* CTAs: Orange Primary + Clean Outline Secondary */}
          <div ref={ctaGroupRef} className="flex flex-wrap items-center gap-3.5 mb-8" data-hero-cta>
            <Link href="/#contact">
              <Button variant="orange" size="lg" className="rounded-full font-medium shadow-sm cursor-pointer">
                <span>Đặt Lịch Tư Vấn Chiến Lược</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <Link href="/danh-gia-san-sang-ai">
              <Button variant="outline" size="lg" className="rounded-full font-medium cursor-pointer">
                <span>Đo Độ Sẵn Sàng (12 Câu)</span>
              </Button>
            </Link>
          </div>

          {/* Light Enterprise Trust Rail (Single Focal Point Principle) */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-5 border-t border-[#E8E8E8] text-xs sm:text-[13px] text-[#666666]">
            <div className="flex items-center gap-1.5">
              <span className="text-[#059669] font-bold">✓</span>
              <span>Kiểm soát 4 cửa ải Gate 1–4</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#6B21A8] font-bold">✓</span>
              <span>Cô lập dữ liệu & cam kết NDA</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#F97316] font-bold">✓</span>
              <span>Doanh nghiệp sở hữu & tự vận hành giải pháp</span>
            </div>
          </div>
        </div>

        {/* Right Column: AI Transformation Network Visual */}
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
