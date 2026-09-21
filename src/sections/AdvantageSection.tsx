'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
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

  const cardRefs = [card1Ref, card2Ref, card3Ref];
  const counterRefs = [counter1Ref, counter2Ref, counter3Ref];

  return (
    <section
      id="advantage"
      ref={pinSectionRef}
      className="relative w-full h-screen min-h-[740px] max-h-[1020px] px-6 md:px-12 lg:px-16 pt-20 pb-8 flex flex-col justify-between overflow-hidden bg-[#F7F7F8] scroll-mt-20 border-y border-[#E8E8E8]"
      data-advantage-pin
    >
      {/* Pinned Header Block */}
      <div className="w-full max-w-4xl mx-auto text-center mb-4 z-10 shrink-0" data-advantage-heading>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E8E8] text-xs font-semibold text-[#6B21A8] mb-2 shadow-2xs">
          <span>Hệ Thống Phương Pháp Luận</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#111111] leading-tight mb-2">
          3 Nguyên Tắc Tạo Ra Kết Quả
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#626262] font-normal max-w-lg mx-auto mb-4">
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
      <div className="relative w-full max-w-6xl mx-auto flex-1 min-h-[480px] md:min-h-[510px]">
        {advantages.slice(0, 3).map((item, idx) => (
          <div
            key={item.id}
            ref={cardRefs[idx]}
            className={`w-full md:absolute md:inset-0 rounded-2xl p-6 sm:p-8 lg:p-10 mb-6 md:mb-0 bg-white border border-[#E8E8E8] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.05)] hover:border-[#6B21A8]/30 flex flex-col justify-between will-change-transform transform-gpu transition-colors ${
              idx === 0 ? 'z-10' : idx === 1 ? 'z-20' : 'z-30'
            }`}
            data-advantage-card={idx + 1}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch h-full">
              {/* Left Column: Strategic Narrative & Execution Commitments (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-2">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="px-3 py-0.5 rounded-full border border-[#E8E8E8] bg-[#FAF8FC] text-xs font-semibold text-[#6B21A8]">
                      0{item.index} / 03 · {item.eyebrow}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-normal text-[#111111] tracking-tight mb-2.5 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base text-[#626262] leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                {/* 3 Concrete Execution Commitments */}
                <div className="space-y-2.5 pt-3.5 border-t border-[#F0EFEA]">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#999999] block">
                    Tiêu Chuẩn Triển Khai Thực Chiến:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {item.pillars?.map((p, pIdx) => (
                      <div key={pIdx} className="p-2.5 rounded-xl bg-[#FAF8FC]/70 border border-[#F0EFEA]">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#111111] mb-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#6B21A8] shrink-0" />
                          <span className="line-clamp-1">{p.title}</span>
                        </div>
                        <p className="text-[11px] text-[#626262] leading-snug line-clamp-3">
                          {p.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Executive Proof & KPI Card (5 cols) */}
              <div className="lg:col-span-5 bg-[#F7F7F8] border border-[#E8E8E8] rounded-xl p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B21A8] block mb-2">
                    Chỉ Số Nghiệm Thu Thực Tế
                  </span>

                  {/* Live Counter Number */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <span
                      ref={counterRefs[idx]}
                      className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#111111] leading-none tabular-nums"
                      data-counter
                    >
                      {idx === 2 ? 'x0' : '0%'}
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm font-medium text-[#111111] leading-snug mb-1">
                    {item.metric.label}
                  </div>
                  {item.metric.subtext && (
                    <div className="text-xs text-[#626262] mb-3">
                      {item.metric.subtext}
                    </div>
                  )}

                  {/* Operational Benchmarks */}
                  <div className="space-y-1.5 pt-2.5 border-t border-[#E8E8E8]/80 text-xs">
                    {item.benchmarks?.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center justify-between py-1 border-b border-[#E8E8E8]/40 last:border-b-0">
                        <span className="text-[#626262]">{b.label}</span>
                        <span className="font-medium text-[#111111]">{b.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Commitment Tag */}
                <div className="mt-3 pt-2.5 border-t border-[#E8E8E8] flex items-center justify-between text-[11px] text-[#6B21A8] font-medium">
                  <span>{item.commitment || 'Cam kết nghiệm thu định lượng'}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
