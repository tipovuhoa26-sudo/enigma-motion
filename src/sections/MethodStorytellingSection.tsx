'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { MethodSolarCanvas } from '@/components/visuals/MethodSolarCanvas';

interface StepData {
  num: string;
  pillLabel: string;
  title: string;
  copy: string;
  proofNum: string;
  proofLabel: string;
}

const STEPS: StepData[] = [
  {
    num: '01',
    pillLabel: '01 Quy trình',
    title: 'Quy trình trước công cụ.',
    copy: 'Chuẩn hóa SOP và tự động hóa thao tác lặp lại trước khi ứng dụng AI.',
    proofNum: '−67%',
    proofLabel: 'Thời gian chu kỳ xử lý',
  },
  {
    num: '02',
    pillLabel: '02 Dữ liệu',
    title: 'Dữ liệu phải kết nối.',
    copy: 'Kết nối ERP, CRM và Database vào AI trong ranh giới cô lập tuyệt đối, zero rò rỉ.',
    proofNum: '100%',
    proofLabel: 'On-Premise / Private VPC',
  },
  {
    num: '03',
    pillLabel: '03 KPI',
    title: 'KPI trước AI.',
    copy: 'Mọi mô hình AI đều quy đổi ra P&L định lượng và nghiệm thu theo kết quả kinh doanh thật.',
    proofNum: '< 4 tháng',
    proofLabel: 'Thu hồi vốn định lượng',
  },
];

export function MethodStorytellingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [displayedStep, setDisplayedStep] = useState<number>(0);
  const [animPhase, setAnimPhase] = useState<'idle' | 'exit' | 'enter'>('idle');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const targetStepRef = useRef<number>(0);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const totalScrollable = rect.height - windowHeight;

    if (totalScrollable <= 0) return;

    const currentScrolled = -rect.top;
    const progress = Math.min(Math.max(currentScrolled / totalScrollable, 0), 1);
    setScrollProgress(progress);

    if (progress < 0.35) {
      setActiveStep(0);
    } else if (progress < 0.68) {
      setActiveStep(1);
    } else {
      setActiveStep(2);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Sequenced transition: exit old (180ms) -> pause (40ms) -> enter new (320ms). Zero ghosting.
  useEffect(() => {
    targetStepRef.current = activeStep;
    if (activeStep === displayedStep) return;

    setAnimPhase('exit');

    const exitTimer = setTimeout(() => {
      const nextStep = targetStepRef.current;
      setDisplayedStep(nextStep);

      const pauseTimer = setTimeout(() => {
        setAnimPhase('enter');
        const settleTimer = setTimeout(() => {
          setAnimPhase('idle');
        }, 320);
        return () => clearTimeout(settleTimer);
      }, 40);

      return () => clearTimeout(pauseTimer);
    }, 180);

    return () => clearTimeout(exitTimer);
  }, [activeStep, displayedStep]);

  const step = STEPS[displayedStep] || STEPS[0];
  const animClass =
    animPhase === 'exit'
      ? 'opacity-0 -translate-y-2.5 transition-all duration-[180ms] ease-out'
      : animPhase === 'enter'
      ? 'opacity-100 translate-y-0 transition-all duration-[320ms] ease-out'
      : 'opacity-100 translate-y-0';

  return (
    <section
      ref={containerRef}
      id="method"
      className="relative h-[195vh] sm:h-[210vh] bg-[#F8F8F6] border-b border-[#E7E7E5]"
    >
      {/* Sticky Pinned Screen Viewport - Pure Scroll-Driven Morph, Zero Carousel Chrome */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-6 md:px-12 py-8 sm:py-12">
        <div className="max-w-[1280px] w-full mx-auto flex-1 flex flex-col justify-between">
          
          {/* Top Progress Track */}
          <div className="w-full pb-4 border-b border-[#E7E7E5] relative mb-2">
            {/* Ambient Gradient Scrub Bar */}
            <div
              className="absolute -bottom-[1px] left-0 h-[2px] bg-gradient-to-r from-[#581C87] via-[#7000FF] to-[#F97316] transition-all duration-150 ease-out z-10"
              style={{ width: `${(scrollProgress * 100).toFixed(1)}%` }}
            />

            {/* Three Micro Milestones (01, 02, 03 with Ticks) along the line */}
            <div className="absolute -bottom-[18px] left-0 right-0 flex justify-between pointer-events-none z-20 px-1">
              {['01', '02', '03'].map((num, idx) => {
                const isPassed = activeStep >= idx;
                return (
                  <div key={num} className="flex flex-col items-center">
                    <div className={`w-[1.5px] h-[4px] transition-colors duration-200 ${isPassed ? 'bg-[#F97316]' : 'bg-[#D1D1CE]'}`} />
                    <span className={`text-[9px] font-mono leading-none mt-0.5 transition-colors duration-200 ${isPassed ? 'text-[#0A0A0A] font-semibold' : 'text-[#A3A3A3]'}`}>
                      {num}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-medium text-[#747474]">
                  Phương pháp
                </span>
                <span className="text-[#A3A3A3] text-xs">/</span>
                <span className="text-xs font-mono text-[#747474]">
                  3 Bước Vận Hành
                </span>
              </div>

              {/* Status Step Indicator (Read-only, synchronized with scroll) */}
              <div className="flex items-center gap-2">
                {STEPS.map((s, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <div
                      key={s.num}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-[#0A0A0A] text-white font-medium'
                          : 'text-[#747474]'
                      }`}
                    >
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] shrink-0" />}
                      <span>{s.pillLabel}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content & Living Visual Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center my-auto py-6">
            
            {/* Left Column: Lean Confident Narrative with Fixed Typographic Skeleton */}
            <div className="lg:col-span-5 relative min-h-[290px] sm:min-h-[320px] flex flex-col justify-center">
              <div className={`${animClass} flex flex-col justify-between`}>
                <div>
                  <div className="text-xs font-mono font-medium text-[#747474] mb-2 tracking-normal">
                    Bước {step.num}
                  </div>

                  {/* Fixed Title Skeleton (Prevents baseline shift between 1-line and 2-line titles) */}
                  <div className="min-h-[96px] sm:min-h-[110px] flex items-start mb-3">
                    <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-light tracking-tight text-[#0A0A0A] leading-[1.08]">
                      {displayedStep === 0 ? (
                        <>
                          Quy trình trước<br className="hidden sm:inline" /> công cụ.
                        </>
                      ) : (
                        step.title
                      )}
                    </h2>
                  </div>

                  {/* Fixed Description Skeleton */}
                  <div className="min-h-[48px] sm:min-h-[56px] mb-6">
                    <p className="text-base text-[#515151] font-normal leading-relaxed max-w-[420px]">
                      {step.copy}
                    </p>
                  </div>
                </div>

                {/* Fixed Metric Skeleton (Vertically Centered Optical Alignment) */}
                <div className="pt-5 border-t border-[#E7E7E5] flex items-center gap-4 min-h-[76px]">
                  <span className="text-5xl sm:text-6xl font-light tracking-tight text-[#0A0A0A] tabular-nums shrink-0 leading-none">
                    {step.proofNum}
                  </span>
                  <div className="text-xs sm:text-sm font-medium text-[#747474] leading-snug">
                    {step.proofLabel}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Evolving System Visual with Fixed Permanent Result Anchor */}
            <div className="lg:col-span-7 w-full flex items-center justify-center relative overflow-visible">
              <MethodSolarCanvas activeStep={activeStep} />
            </div>

          </div>

          {/* Minimal Bottom Scroll Status Hint */}
          <div className="flex items-center justify-between pt-4 border-t border-[#E7E7E5] text-xs font-mono text-[#747474]">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
              <span>Cuộn chuột để xem chuyển tiếp hệ thống</span>
            </div>
            <span>0{activeStep + 1} / 03</span>
          </div>

        </div>
      </div>
    </section>
  );
}
