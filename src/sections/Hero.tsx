'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/Button';
import { CobeGlobe } from '@/components/CobeGlobe';
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
  const exploreWidgetRef = useRef<HTMLAnchorElement>(null);
  const statCardRef = useRef<HTMLDivElement>(null);
  const statCounterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoPlayIntro) return;

    const dockItems = Array.from(document.querySelectorAll('[data-hero-dock] [data-dock-item]')) as HTMLElement[];
    const navBar = document.querySelector('[data-hero-nav]') as HTMLElement | null;
    const ctas = ctaGroupRef.current ? Array.from(ctaGroupRef.current.children) as HTMLElement[] : [];
    const headlineLines = [headlineLine1Ref.current, headlineLine2Ref.current].filter((el): el is HTMLSpanElement => el !== null);

    const tl = createHeroTimeline({
      dockItems,
      navBar,
      ctas,
      headlineLines,
      visual: visualRef.current,
      exploreWidget: exploreWidgetRef.current,
      statCard: statCardRef.current,
      statCounterValue: statCounterRef.current,
    });

    return () => {
      tl.kill();
    };
  }, [autoPlayIntro]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full min-h-[calc(100vh-80px)] px-6 md:px-12 lg:px-20 pt-6 pb-16 flex flex-col justify-between overflow-hidden"
      data-motion="hero"
    >
      <span id="top" className="absolute top-0 left-0 w-0 h-0 opacity-0 pointer-events-none" aria-hidden="true" />
      <span id="overview" className="absolute top-0 left-0 w-0 h-0 opacity-0 pointer-events-none" aria-hidden="true" />

      {/* Top Tertiary Caption (Top Right) */}
      <div className="w-full flex justify-end mb-4 md:mb-0">
        <p className="text-right text-xs md:text-sm text-[#6E6E6E] max-w-[220px] leading-snug font-normal">
          Chuyển đổi thực chất • Đo lường bằng kết quả kinh doanh
        </p>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto relative">
        
        {/* Left Column: CTAs -> Headline -> Widgets */}
        <div className="lg:col-span-7 flex flex-col z-10">
          {/* CTAs */}
          <div ref={ctaGroupRef} className="flex flex-wrap items-center gap-3 mb-6" data-hero-cta>
            <Link href="/tu-duy-chuyen-doi-ai">
              <Button variant="lime" size="md" className="rounded-full font-semibold shadow-xs cursor-pointer">
                Phương Pháp Luận Sunext
              </Button>
            </Link>
            <Link href="/danh-gia-san-sang-ai">
              <Button variant="outline" size="md" className="rounded-full bg-white/40 backdrop-blur-xs font-medium cursor-pointer">
                Đo Lường Sẵn Sàng (5 Phút)
              </Button>
            </Link>
          </div>

          {/* H1 Headline: Pre-split lines for SEO & smooth blur entrance */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light tracking-tight text-[#17151A] leading-[1.08] mb-10 max-w-[680px]"
            data-hero-headline
          >
            <span ref={headlineLine1Ref} className="line block font-normal">
              Chuyển Đổi AI Toàn Trình
            </span>
            <span ref={headlineLine2Ref} className="line block font-light text-[#17151A]/85">
              Do Kinh Doanh Dẫn Dắt
            </span>
          </h1>

          {/* Floating Bottom Widgets */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            {/* Widget 1: Explore Your Data */}
            <Link
              href="/tu-duy-chuyen-doi-ai/kien-truc-du-lieu"
              ref={exploreWidgetRef}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-black/5 shadow-sm flex flex-col gap-3 min-w-[150px] transition-transform hover:scale-[1.02] group cursor-pointer"
              data-hero-widget-explore
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-medium text-[#17151A] leading-tight">
                  Dữ Liệu Sống &<br />Tri Thức Lõi
                </span>
                <div className="w-6 h-6 rounded-full bg-[#17151A] text-white flex items-center justify-center group-hover:bg-black transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="flex items-end gap-1.5 h-6 pt-1">
                <div className="w-1.5 h-3 bg-[#17151A] rounded-full" />
                <div className="w-1.5 h-5 bg-[#17151A] rounded-full" />
                <div className="w-1.5 h-2 bg-[#17151A] rounded-full" />
                <div className="w-1.5 h-6 bg-[#17151A] rounded-full" />
                <div className="w-1.5 h-4 bg-[#17151A] rounded-full" />
              </div>
            </Link>

            {/* Widget 2: Case study preview */}
            <Link href="/nganh" className="relative w-20 h-20 rounded-2xl overflow-hidden border border-black/5 shadow-sm bg-[#FAFFDE] group cursor-pointer">
              <Image
                src="/assets/vietnam-retail-store.jpg"
                alt="Giải pháp ngành thực tế"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="80px"
              />
              <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-[#17151A] text-white flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </Link>
          </div>
        </div>

        {/* Right Column: Centerpiece 3D COBE Globe Visual + Stat Card */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[360px] md:min-h-[480px]">
          {/* Cobe 3D WebGL Globe */}
          <div
            ref={visualRef}
            className="w-full max-w-[480px] aspect-square relative flex items-center justify-center"
            data-hero-visual
          >
            <CobeGlobe />
          </div>

          {/* Floating Stat Card Widget */}
          <div
            ref={statCardRef}
            className="absolute bottom-0 right-0 sm:right-4 bg-[#FAFFDE] rounded-2xl p-5 border border-[#DFE2C8] shadow-md flex flex-col justify-between w-[180px] sm:w-[200px] z-20"
            data-hero-widget-stat
          >
            <div className="flex items-center justify-between text-xs font-medium text-[#17151A]">
              <span>Tối Ưu<br />Vận Hành</span>
              <div className="w-6 h-6 rounded-full bg-white/70 flex items-center justify-center">
                <TrendingUp className="w-3.5 h-3.5 text-[#17151A]" />
              </div>
            </div>

            <div
              ref={statCounterRef}
              className="text-4xl font-normal text-[#17151A] tracking-tight my-3 tabular-nums"
              data-hero-widget-stat-value
            >
              0%
            </div>

            {/* 3-dot pagination synced to Advantage section */}
            <div className="flex items-center gap-1.5 pt-1 border-t border-black/5 text-[10px] text-[#6E6E6E]">
              <span className="w-5 h-5 rounded-full bg-[#17151A] text-white flex items-center justify-center font-medium">01</span>
              <span className="w-5 h-5 rounded-full bg-white/80 flex items-center justify-center text-[#17151A]">02</span>
              <span className="w-5 h-5 rounded-full bg-white/80 flex items-center justify-center text-[#17151A]">03</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom subtle interview link */}
      <div className="hidden sm:flex items-center gap-2 pt-6 text-xs text-[#6E6E6E]">
        <div className="w-6 h-6 rounded-full overflow-hidden bg-black/10 relative">
          <Image src="/assets/vietnam-b2b-office.jpg" alt="Case study preview" fill className="object-cover" />
        </div>
        <Link href="/nganh" className="hover:text-[#17151A] cursor-pointer transition-colors">
          Xem các giải pháp theo ngành & nghiên cứu tình huống thực tế
        </Link>
      </div>
    </section>
  );
}
