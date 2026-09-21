'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/Button';
import { AdvantageCard, ADVANTAGES_DATA } from '@/content/data';
import { SunextTransformationGraph } from '@/components/visuals/SunextTransformationGraph';
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

  const [activeStep, setActiveStep] = useState(0);

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
      onStepChange: (step) => {
        setActiveStep(step);
      },
      counters: [
        {
          element: counter1Ref.current,
          to: advantages[0]?.metric.value ?? 70,
          prefix: advantages[0]?.metric.prefix ?? '',
          suffix: advantages[0]?.metric.suffix ?? '%',
        },
        {
          element: counter2Ref.current,
          to: advantages[1]?.metric.value ?? 99.8,
          prefix: advantages[1]?.metric.prefix ?? '',
          suffix: advantages[1]?.metric.suffix ?? '%',
        },
        {
          element: counter3Ref.current,
          to: advantages[2]?.metric.value ?? 5,
          prefix: advantages[2]?.metric.prefix ?? '',
          suffix: advantages[2]?.metric.suffix ?? '×',
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
      className="relative w-full h-screen min-h-[760px] max-h-[1020px] px-6 md:px-12 lg:px-20 pt-16 pb-8 flex flex-col justify-between overflow-hidden bg-white scroll-mt-20 border-b border-[#E7E7E5]"
      data-advantage-pin
    >
      {/* Pinned Header Block: Confident Editorial Style */}
      <div className="w-full max-w-4xl mx-auto text-center mb-6 z-10 shrink-0" data-advantage-heading>
        <span className="text-xs font-mono uppercase tracking-wider text-[#581C87] font-semibold mb-2 block">
          Triết lý thực thi
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0A0A0A] leading-tight mb-3">
          3 nguyên tắc tạo ra <span className="font-normal text-[#0A0A0A]">kết quả thực chất</span>
        </h2>
        <p className="text-base text-[#515151] font-normal max-w-xl mx-auto mb-4 leading-relaxed">
          Khác biệt giữa một dự án AI sinh lời định lượng và một khoản đầu tư công nghệ lãng phí.
        </p>

        {/* In-Flow CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3" data-advantage-cta>
          <Link href="/tu-duy-chuyen-doi-ai">
            <Button variant="orange" size="md" className="rounded-xl shadow-sm text-xs sm:text-sm font-medium">
              <span>Phương pháp Sunext</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
          <Link href="/danh-gia-san-sang-ai">
            <Button variant="outline" size="md" className="rounded-xl text-xs sm:text-sm font-medium">
              Đo độ sẵn sàng (12 câu)
            </Button>
          </Link>
        </div>
      </div>

      {/* Enterprise Editorial Pinned Stage: Fixed Right Visual, Morphing Left Narrative */}
      <div className="relative w-full max-w-6xl mx-auto flex-1 min-h-[460px] md:min-h-[500px] rounded-2xl p-7 sm:p-10 lg:p-12 bg-[#F9F9F8] border border-[#E7E7E5] shadow-[0_16px_40px_-16px_rgba(0,0,0,0.04)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center h-full">
          {/* Left Column: Morphing Narrative (6 cols) */}
          <div className="lg:col-span-6 relative h-full min-h-[360px] flex flex-col justify-between py-2">
            {advantages.slice(0, 3).map((item, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={item.id}
                  ref={cardRefs[idx]}
                  className={`md:absolute md:inset-0 flex flex-col justify-between transition-all duration-500 transform-gpu ${
                    isActive
                      ? 'opacity-100 translate-y-0 pointer-events-auto z-10'
                      : 'opacity-0 translate-y-3 pointer-events-none z-0'
                  }`}
                  data-advantage-card={idx + 1}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-semibold text-[#581C87] uppercase tracking-wider">
                        Nguyên tắc 0{item.index} / 03 · {item.eyebrow}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#581C87]" />
                      <span className="text-xs font-mono text-[#747474]">
                        {idx === 0 ? 'Con Người & SOP' : idx === 1 ? 'Dữ Liệu & Hạ Tầng' : 'Nghiệm Thu P&L'}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-medium text-[#0A0A0A] tracking-tight mb-4 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-base text-[#515151] leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Real SSR Metric Display with Accessible Label */}
                  <div className="pt-6 border-t border-[#E7E7E5] flex items-baseline gap-4">
                    <span
                      ref={counterRefs[idx]}
                      className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#0A0A0A] leading-none tabular-nums"
                      aria-label={`${item.metric.prefix ?? ''}${item.metric.value}${item.metric.suffix ?? ''}`}
                      data-counter
                    >
                      {item.metric.prefix ?? ''}{item.metric.value}{item.metric.suffix ?? ''}
                    </span>
                    <div className="text-sm text-[#515151] leading-snug">
                      <span className="font-semibold text-[#0A0A0A] block">{item.metric.label}</span>
                      <span className="text-xs text-[#747474]">{item.metric.subtext}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Persistent Transformation Architecture Visual that Morphs (6 cols) */}
          <div className="lg:col-span-6 h-full min-h-[320px] flex items-center justify-center">
            <SunextTransformationGraph activeStep={activeStep} />
          </div>
        </div>
      </div>
    </section>
  );
}
