'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, TrendingUp, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/Button';
import { AdvantageCard, ADVANTAGES_DATA } from '@/content/data';
import { createAdvantageTimeline } from '@/motion/timelines/advantage';

interface AdvantageProps {
  advantages?: AdvantageCard[];
}

export function AdvantageSection({ advantages = ADVANTAGES_DATA }: AdvantageProps) {
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  const counter1Ref = useRef<HTMLSpanElement>(null);
  const counter2Ref = useRef<HTMLSpanElement>(null);
  const counter3Ref = useRef<HTMLSpanElement>(null);

  const ring2Ref = useRef<SVGCircleElement>(null);
  const dot1Ref = useRef<HTMLSpanElement>(null);
  const dot2Ref = useRef<HTMLSpanElement>(null);
  const dot3Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!pinSectionRef.current) return;

    const cards = [card1Ref.current, card2Ref.current, card3Ref.current].filter(
      (el): el is HTMLDivElement => el !== null
    );

    const circumference = 2 * Math.PI * 26; // r=26 => ~163.36px

    const headingBlock = pinSectionRef.current.querySelector('[data-advantage-heading]') as HTMLElement | null;
    const ctas = Array.from(pinSectionRef.current.querySelectorAll('[data-advantage-cta] > *')) as HTMLElement[];

    const advantageTl = createAdvantageTimeline({
      pinContainer: pinSectionRef.current,
      headingBlock,
      ctas,
      cards,
      counters: [
        {
          element: counter1Ref.current,
          to: advantages[0]?.metric.value ?? 20,
        },
        {
          element: counter2Ref.current,
          to: advantages[1]?.metric.value ?? 29,
          ringElement: ring2Ref.current,
          ringCircumference: circumference,
        },
        {
          element: counter3Ref.current,
          to: advantages[2]?.metric.value ?? 78,
          dotsElements: [dot1Ref.current, dot2Ref.current, dot3Ref.current].filter(
            (el): el is HTMLSpanElement => el !== null
          ),
        },
      ],
    });

    return () => {
      advantageTl.kill();
    };
  }, [advantages]);

  return (
    <section
      id="advantage"
      ref={pinSectionRef}
      className="relative w-full h-screen min-h-[700px] max-h-[960px] px-6 md:px-12 lg:px-20 pt-24 pb-8 flex flex-col justify-between overflow-hidden bg-[#F8F8F6] scroll-mt-20"
      data-advantage-pin
    >
      {/* Pinned Header Block */}
      <div className="w-full max-w-4xl mx-auto text-center mb-6 z-10 shrink-0" data-advantage-heading>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#17151A] leading-tight mb-4">
          Lợi Thế Thực Chiến:{' '}
          <span className="inline-flex items-center align-middle mx-1 px-3 py-1 bg-[#FAFFDE] border border-[#DFE2C8] rounded-full text-sm">
            <TrendingUp className="w-4 h-4 text-[#17151A]" />
          </span>{' '}
          Chuyển Đổi Thực Chất,{' '}
          <br className="hidden sm:inline" />
          Đo Lường Bằng Kết Quả
        </h2>

        {/* Secondary In-Flow CTA row */}
        <div className="flex flex-wrap items-center justify-center gap-3" data-advantage-cta>
          <Link href="/tu-duy-chuyen-doi-ai">
            <Button variant="primary" size="md" className="rounded-full shadow-sm text-xs font-medium">
              Khám Phá Khung Rewired
            </Button>
          </Link>
          <Link href="/danh-gia-san-sang-ai">
            <Button variant="secondary" size="md" className="rounded-full border border-black/5 text-xs font-medium">
              Đo Lường Sẵn Sàng (5 Phút)
            </Button>
          </Link>
        </div>
      </div>

      {/* Cards Stack Stage (Desktop: stacked & covered; Mobile: natural flow) */}
      <div className="relative w-full max-w-5xl mx-auto flex-1 min-h-[460px] md:min-h-[480px]">
        {/* CARD 1 */}
        <div
          ref={card1Ref}
          className="w-full md:absolute md:inset-0 rounded-[32px] p-6 sm:p-10 md:p-12 mb-6 md:mb-0 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] border border-black/[0.06] flex flex-col md:flex-row items-center justify-between gap-8 z-10 will-change-transform transform-gpu"
          style={{ backgroundColor: advantages[0]?.bgColor ?? '#FAFFDE' }}
          data-advantage-card="1"
        >
          <div className="flex-1 max-w-md">
            <span className="inline-block px-4 py-1.5 rounded-full border border-black/10 bg-white/70 text-xs font-medium text-[#17151A] mb-6">
              {advantages[0]?.eyebrow}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#17151A] tracking-tight mb-4 leading-snug">
              {advantages[0]?.title}
            </h3>
            <p className="text-sm md:text-base text-[#6E6E6E] leading-relaxed">
              {advantages[0]?.description}
            </p>
          </div>

          <div className="relative w-full md:w-[420px] h-[250px] sm:h-[280px] md:h-[320px] rounded-2xl overflow-hidden bg-white/40 shadow-inner border border-black/5 shrink-0 group">
            <Image
              src={advantages[0]?.image ?? '/assets/advantage-card-1.jpg'}
              alt={advantages[0]?.title ?? 'Product'}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(min-width: 768px) 420px, 100vw"
              priority
            />

            {/* Metric Floating Widget */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-md border border-black/5 z-10">
              <span ref={counter1Ref} className="text-2xl sm:text-3xl font-normal text-[#17151A] block tabular-nums" data-counter>
                0%
              </span>
              <div className="flex items-end gap-1 h-5 my-1.5">
                <div className="w-1 h-2 bg-[#17151A] rounded-full" />
                <div className="w-1 h-3.5 bg-[#17151A] rounded-full" />
                <div className="w-1 h-5 bg-[#17151A] rounded-full" />
                <div className="w-1 h-4 bg-[#17151A] rounded-full" />
              </div>
              <span className="text-[10px] text-[#6E6E6E] block font-medium uppercase tracking-wider">
                {advantages[0]?.metric.label}
              </span>
            </div>

            {/* Subtext Pill */}
            <div className="absolute bottom-4 left-4 bg-[#17151A] text-white text-xs px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-md z-10">
              <Sparkles className="w-3.5 h-3.5 text-[#FAFFDE]" />
              <span>{advantages[0]?.metric.subtext}</span>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div
          ref={card2Ref}
          className="w-full md:absolute md:inset-0 rounded-[32px] p-6 sm:p-10 md:p-12 mb-6 md:mb-0 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] border border-black/[0.06] flex flex-col md:flex-row items-center justify-between gap-8 z-20 will-change-transform transform-gpu"
          style={{ backgroundColor: advantages[1]?.bgColor ?? '#F5F3F6' }}
          data-advantage-card="2"
        >
          <div className="flex-1 max-w-md">
            <span className="inline-block px-4 py-1.5 rounded-full border border-black/10 bg-white/70 text-xs font-medium text-[#17151A] mb-6">
              {advantages[1]?.eyebrow}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#17151A] tracking-tight mb-4 leading-snug">
              {advantages[1]?.title}
            </h3>
            <p className="text-sm md:text-base text-[#6E6E6E] leading-relaxed">
              {advantages[1]?.description}
            </p>
          </div>

          <div className="relative w-full md:w-[420px] h-[250px] sm:h-[280px] md:h-[320px] rounded-2xl overflow-hidden bg-white/40 shadow-inner border border-black/5 shrink-0 group">
            <Image
              src={advantages[1]?.image ?? '/assets/advantage-card-2.jpg'}
              alt={advantages[1]?.title ?? 'Product'}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(min-width: 768px) 420px, 100vw"
            />

            {/* Ring Circular Widget */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-md border border-black/5 flex items-center gap-3 z-10">
              <div className="relative w-14 h-14 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 60 60">
                  <circle cx="30" cy="30" r="26" stroke="#EAE7EC" strokeWidth="4" fill="none" />
                  <circle
                    ref={ring2Ref}
                    cx="30"
                    cy="30"
                    r="26"
                    stroke="#17151A"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 26}
                    strokeDashoffset={2 * Math.PI * 26}
                    strokeLinecap="round"
                    className="transition-[stroke-dashoffset] duration-300"
                    data-counter-ring
                  />
                </svg>
                <span ref={counter2Ref} className="absolute text-sm font-semibold text-[#17151A] tabular-nums" data-counter>
                  0%
                </span>
              </div>
              <span className="text-xs text-[#6E6E6E] font-medium leading-tight">
                Operational<br />Velocity
              </span>
            </div>

            <div className="absolute bottom-4 left-4 bg-white/90 text-[#17151A] text-xs px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-sm border border-black/5 z-10">
              <Zap className="w-3.5 h-3.5" />
              <span>{advantages[1]?.metric.subtext}</span>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div
          ref={card3Ref}
          className="w-full md:absolute md:inset-0 rounded-[32px] p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] border border-black/[0.06] flex flex-col md:flex-row items-center justify-between gap-8 z-30 will-change-transform transform-gpu"
          style={{ backgroundColor: advantages[2]?.bgColor ?? '#FAFFDE' }}
          data-advantage-card="3"
        >
          <div className="flex-1 max-w-md">
            <span className="inline-block px-4 py-1.5 rounded-full border border-black/10 bg-white/70 text-xs font-medium text-[#17151A] mb-6">
              {advantages[2]?.eyebrow}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#17151A] tracking-tight mb-4 leading-snug">
              {advantages[2]?.title}
            </h3>
            <p className="text-sm md:text-base text-[#6E6E6E] leading-relaxed">
              {advantages[2]?.description}
            </p>
          </div>

          <div className="relative w-full md:w-[420px] h-[250px] sm:h-[280px] md:h-[320px] rounded-2xl overflow-hidden bg-white/40 shadow-inner border border-black/5 shrink-0 group">
            <Image
              src={advantages[2]?.image ?? '/assets/advantage-card-3.jpg'}
              alt={advantages[2]?.title ?? 'Product'}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(min-width: 768px) 420px, 100vw"
            />

            {/* Dark Widget with Sequential Dots */}
            <div className="absolute top-4 left-4 bg-[#1E1C1E] text-white rounded-2xl p-4 shadow-xl flex flex-col gap-2 min-w-[130px] z-10" data-widget-dark>
              <div className="flex items-center justify-between text-xs text-white/70">
                <span>Task Rate</span>
                <span ref={counter3Ref} className="text-xl font-normal text-[#FAFFDE] tabular-nums" data-counter>
                  0%
                </span>
              </div>

              {/* 3-dot pagination step indicator */}
              <div className="flex items-center gap-1.5 pt-1" data-dots>
                <span ref={dot1Ref} className="w-2 h-2 rounded-full bg-[#FAFFDE] opacity-30 transition-opacity duration-200" />
                <span ref={dot2Ref} className="w-2 h-2 rounded-full bg-[#FAFFDE] opacity-30 transition-opacity duration-200" />
                <span ref={dot3Ref} className="w-2 h-2 rounded-full bg-[#FAFFDE] opacity-30 transition-opacity duration-200" />
              </div>
            </div>

            <div className="absolute bottom-4 left-4 bg-white/90 text-[#17151A] text-xs px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-sm border border-black/5 z-10">
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>{advantages[2]?.metric.subtext}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
