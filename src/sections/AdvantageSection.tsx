'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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

  useEffect(() => {
    if (!pinSectionRef.current) return;

    const cards = [card1Ref.current, card2Ref.current, card3Ref.current].filter(
      (el): el is HTMLDivElement => el !== null
    );

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
          to: advantages[0]?.metric.value ?? 70,
          prefix: advantages[0]?.metric.prefix ?? '',
          suffix: advantages[0]?.metric.suffix ?? '%',
        },
        {
          element: counter2Ref.current,
          to: advantages[1]?.metric.value ?? 99,
          prefix: advantages[1]?.metric.prefix ?? '',
          suffix: advantages[1]?.metric.suffix ?? '%',
        },
        {
          element: counter3Ref.current,
          to: advantages[2]?.metric.value ?? 5,
          prefix: advantages[2]?.metric.prefix ?? 'x',
          suffix: advantages[2]?.metric.suffix ?? '',
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
      className="relative w-full h-screen min-h-[700px] max-h-[960px] px-6 md:px-12 lg:px-20 pt-20 pb-8 flex flex-col justify-between overflow-hidden bg-[#F7F7F8] scroll-mt-20 border-y border-[#E8E8E8]"
      data-advantage-pin
    >
      {/* Pinned Header Block */}
      <div className="w-full max-w-4xl mx-auto text-center mb-6 z-10 shrink-0" data-advantage-heading>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E8E8] text-xs font-semibold text-[#6B21A8] mb-3 shadow-2xs">
          <span>Hệ Thống Phương Pháp Luận</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#111111] leading-tight mb-3">
          3 Nguyên Tắc Tạo Ra Kết Quả
        </h2>
        <p className="text-sm md:text-base text-[#626262] font-normal max-w-lg mx-auto mb-5">
          Khác biệt giữa một dự án AI sinh lời và một khoản đầu tư công nghệ lãng phí.
        </p>

        {/* In-Flow CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3" data-advantage-cta>
          <Link href="/tu-duy-chuyen-doi-ai">
            <Button variant="orange" size="md" className="rounded-full shadow-sm text-xs font-medium">
              <span>Phương Pháp Sunext</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
          <Link href="/danh-gia-san-sang-ai">
            <Button variant="outline" size="md" className="rounded-full text-xs font-medium">
              Đo Độ Sẵn Sàng (12 Câu)
            </Button>
          </Link>
        </div>
      </div>

      {/* Enterprise Floating Cards Stack */}
      <div className="relative w-full max-w-5xl mx-auto flex-1 min-h-[460px] md:min-h-[480px]">
        {/* CARD 1 */}
        <div
          ref={card1Ref}
          className="w-full md:absolute md:inset-0 rounded-2xl p-8 sm:p-12 md:p-14 mb-6 md:mb-0 bg-white border border-[#E8E8E8] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.04)] hover:border-[#6B21A8]/30 flex flex-col justify-between z-10 will-change-transform transform-gpu transition-colors"
          data-advantage-card="1"
        >
          <div className="max-w-2xl">
            <span className="inline-block px-3.5 py-1 rounded-full border border-[#E8E8E8] bg-[#FAF8FC] text-xs font-semibold text-[#6B21A8] mb-5">
              {advantages[0]?.eyebrow}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#111111] tracking-tight mb-3 leading-snug">
              {advantages[0]?.title}
            </h3>
            <p className="text-sm md:text-base text-[#626262] leading-relaxed">
              {advantages[0]?.description}
            </p>
          </div>

          {/* Large Typographic Metric in Text Flow */}
          <div className="mt-8 pt-6 border-t border-[#E8E8E8] flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span
              ref={counter1Ref}
              className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#111111] leading-none tabular-nums"
              data-counter
            >
              0%
            </span>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-normal text-[#111111]">
                {advantages[0]?.metric.label}
              </span>
              {advantages[0]?.metric.subtext && (
                <span className="text-xs text-[#626262]">
                  {advantages[0]?.metric.subtext}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div
          ref={card2Ref}
          className="w-full md:absolute md:inset-0 rounded-2xl p-8 sm:p-12 md:p-14 mb-6 md:mb-0 bg-white border border-[#E8E8E8] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.04)] hover:border-[#6B21A8]/30 flex flex-col justify-between z-20 will-change-transform transform-gpu transition-colors"
          data-advantage-card="2"
        >
          <div className="max-w-2xl">
            <span className="inline-block px-3.5 py-1 rounded-full border border-[#E8E8E8] bg-[#FAF8FC] text-xs font-semibold text-[#6B21A8] mb-5">
              {advantages[1]?.eyebrow}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#111111] tracking-tight mb-3 leading-snug">
              {advantages[1]?.title}
            </h3>
            <p className="text-sm md:text-base text-[#626262] leading-relaxed">
              {advantages[1]?.description}
            </p>
          </div>

          {/* Large Typographic Metric in Text Flow */}
          <div className="mt-8 pt-6 border-t border-[#E8E8E8] flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span
              ref={counter2Ref}
              className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#111111] leading-none tabular-nums"
              data-counter
            >
              0%
            </span>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-normal text-[#111111]">
                {advantages[1]?.metric.label}
              </span>
              {advantages[1]?.metric.subtext && (
                <span className="text-xs text-[#626262]">
                  {advantages[1]?.metric.subtext}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div
          ref={card3Ref}
          className="w-full md:absolute md:inset-0 rounded-2xl p-8 sm:p-12 md:p-14 bg-white border border-[#E8E8E8] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.04)] hover:border-[#6B21A8]/30 flex flex-col justify-between z-30 will-change-transform transform-gpu transition-colors"
          data-advantage-card="3"
        >
          <div className="max-w-2xl">
            <span className="inline-block px-3.5 py-1 rounded-full border border-[#E8E8E8] bg-[#FAF8FC] text-xs font-semibold text-[#6B21A8] mb-5">
              {advantages[2]?.eyebrow}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#111111] tracking-tight mb-3 leading-snug">
              {advantages[2]?.title}
            </h3>
            <p className="text-sm md:text-base text-[#626262] leading-relaxed">
              {advantages[2]?.description}
            </p>
          </div>

          {/* Large Typographic Metric in Text Flow */}
          <div className="mt-8 pt-6 border-t border-[#E8E8E8] flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span
              ref={counter3Ref}
              className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#111111] leading-none tabular-nums"
              data-counter
            >
              x0
            </span>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-normal text-[#111111]">
                {advantages[2]?.metric.label}
              </span>
              {advantages[2]?.metric.subtext && (
                <span className="text-xs text-[#626262]">
                  {advantages[2]?.metric.subtext}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
