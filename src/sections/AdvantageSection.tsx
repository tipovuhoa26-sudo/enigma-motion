'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight, TrendingUp, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/Button';
import { AdvantageCard, ADVANTAGES_DATA } from '@/content/data';
import { AdvantageVisual } from '@/components/visuals/AdvantageVisual';
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#17151A] leading-tight mb-3">
          Ba Nguyên Tắc Tạo Ra Kết Quả
        </h2>
        <p className="text-sm md:text-base text-[#6E6E6E] font-normal max-w-lg mx-auto mb-5">
          Khác biệt giữa một dự án AI sinh lời và một khoản đầu tư lãng phí.
        </p>

        {/* Secondary In-Flow CTA row */}
        <div className="flex flex-wrap items-center justify-center gap-3" data-advantage-cta>
          <Link href="/tu-duy-chuyen-doi-ai">
            <Button variant="primary" size="md" className="rounded-full shadow-sm text-xs font-medium">
              Phương Pháp Sunext
            </Button>
          </Link>
          <Link href="/danh-gia-san-sang-ai">
            <Button variant="secondary" size="md" className="rounded-full border border-black/5 text-xs font-medium">
              Đo Độ Sẵn Sàng (12 Câu)
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

          <div className="relative w-full md:w-[420px] h-[260px] sm:h-[280px] md:h-[320px] rounded-2xl overflow-hidden shadow-inner border border-black/5 shrink-0 group">
            <AdvantageVisual 
              cardIndex={0} 
              counterRef={counter1Ref}
            />
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

          <div className="relative w-full md:w-[420px] h-[260px] sm:h-[280px] md:h-[320px] rounded-2xl overflow-hidden shadow-inner border border-black/5 shrink-0 group">
            <AdvantageVisual 
              cardIndex={1} 
              counterRef={counter2Ref}
              ringRef={ring2Ref}
            />
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

          <div className="relative w-full md:w-[420px] h-[260px] sm:h-[280px] md:h-[320px] rounded-2xl overflow-hidden shadow-inner border border-black/5 shrink-0 group">
            <AdvantageVisual 
              cardIndex={2} 
              counterRef={counter3Ref}
              dotRefs={[dot1Ref, dot2Ref, dot3Ref]}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
