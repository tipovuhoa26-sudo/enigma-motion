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
    copy: 'Chuẩn hóa quy trình, bỏ thao tác thừa rồi mới đưa AI vào.',
    proofNum: '−67%',
    proofLabel: 'Thời gian chu kỳ xử lý',
  },
  {
    num: '02',
    pillLabel: '02 Dữ liệu',
    title: 'Dữ liệu phải kết nối.',
    copy: 'Kết nối dữ liệu vào AI trong ranh giới bảo mật của doanh nghiệp.',
    proofNum: '',
    proofLabel: 'On-premise / Private VPC',
  },
  {
    num: '03',
    pillLabel: '03 KPI',
    title: 'KPI trước AI.',
    copy: 'Không có KPI, chưa triển khai AI. Mỗi use case AI phải gắn với KPI vận hành và tác động kinh doanh có thể đo được.',
    proofNum: '−75%',
    proofLabel: 'Thời gian xử lý',
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

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold tracking-wider text-[#0A0A0A] uppercase">
                  Phương pháp Sunext
                </span>
                <span className="text-[#A3A3A3] text-xs">/</span>
                <span className="text-xs font-mono text-[#747474]">
                  3 Nguyên Tắc Thiết Kế
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
            <div className="lg:col-span-5 relative flex flex-col justify-center">
              <div className={`${animClass} flex flex-col justify-between`}>
                <div>
                  {/* Micro-label Block (8–12px relationship) */}
                  <div className="flex flex-col gap-2.5">
                    <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#F97316] font-semibold">
                      PHƯƠNG PHÁP SUNEXT
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-[#747474] tracking-wide">
                      3 nguyên tắc thiết kế
                    </span>
                  </div>

                  {/* Large Premium Breathing Space: 48–64px before H2 */}
                  <div className="mt-12 sm:mt-14 lg:mt-16 min-h-[88px] sm:min-h-[105px] lg:min-h-[115px] flex items-start">
                    <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-light tracking-tight text-[#0A0A0A] leading-[1.08]">
                      {displayedStep === 0 && (
                        <>
                          Quy trình trước<br />công cụ.
                        </>
                      )}
                      {displayedStep === 1 && (
                        <>
                          Dữ liệu phải<br />kết nối.
                        </>
                      )}
                      {displayedStep === 2 && (
                        <>
                          KPI trước<br />AI.
                        </>
                      )}
                    </h2>
                  </div>

                  {/* Supporting Copy (20–28px after H2, constrained to 380–440px for clean 2 lines) */}
                  <div className="mt-6 sm:mt-7 min-h-[56px] sm:min-h-[64px]">
                    <p className="text-base text-[#515151] font-normal leading-relaxed max-w-[400px]">
                      {displayedStep === 0 && (
                        <>
                          Chuẩn hóa quy trình, bỏ thao tác thừa<br className="hidden sm:inline" /> rồi mới đưa AI vào.
                        </>
                      )}
                      {displayedStep === 1 && (
                        <>
                          Kết nối dữ liệu vào AI trong ranh giới<br className="hidden sm:inline" /> bảo mật của doanh nghiệp.
                        </>
                      )}
                      {displayedStep === 2 && (
                        <>
                          Không có KPI, chưa triển khai AI. Mỗi use case<br className="hidden sm:inline" /> phải gắn với kết quả kinh doanh đo được.
                        </>
                      )}
                    </p>
                  </div>
                </div>

                {/* Fixed Metric Skeleton (48–72px after supporting copy) */}
                <div className="mt-12 sm:mt-14 lg:mt-16 pt-6 border-t border-[#E7E7E5] flex items-center min-h-[76px]">
                  {displayedStep === 1 ? (
                    <div className="flex flex-col justify-center">
                      <span className="text-xl sm:text-2xl font-medium tracking-tight text-[#0A0A0A] leading-snug">
                        Dữ liệu trong vùng kiểm soát
                      </span>
                      <span className="text-xs font-mono text-[#747474] mt-0.5">
                        On-premise / Private VPC
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-4">
                      <span className="text-5xl sm:text-6xl font-light tracking-tight text-[#0A0A0A] tabular-nums shrink-0 leading-none">
                        {step.proofNum}
                      </span>
                      <div className="text-xs sm:text-sm font-medium text-[#747474] leading-snug -translate-y-1 sm:-translate-y-1.5">
                        {step.proofLabel}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Evolving System Visual with Segmented Milestone Track (01 ━━━━ 02 ━━━━ 03) */}
            <div className="lg:col-span-7 w-full flex flex-col items-center justify-center relative overflow-visible">
              
              {/* Segmented Milestone Bar: 01 ━━━━━━━━━ 02 ━━━━━━━━━ 03 */}
              <div className="w-full max-w-[480px] mb-6 px-2">
                <div className="flex items-center justify-between gap-3 text-xs font-mono">
                  {STEPS.map((s, idx) => {
                    const isActive = activeStep === idx;
                    const isPassed = activeStep > idx;
                    return (
                      <React.Fragment key={s.num}>
                        {/* Milestone Number + Label */}
                        <div className="flex items-center gap-2 shrink-0">
                          <span
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-semibold transition-all duration-300 ${
                              isActive
                                ? 'bg-[#F97316] text-white shadow-sm ring-4 ring-[#F97316]/15'
                                : isPassed
                                ? 'bg-[#0A0A0A] text-white'
                                : 'bg-[#E7E7E5] text-[#747474]'
                            }`}
                          >
                            {s.num}
                          </span>
                          <span
                            className={`text-xs transition-colors duration-200 hidden sm:inline ${
                              isActive ? 'text-[#0A0A0A] font-medium' : 'text-[#8E8E8A]'
                            }`}
                          >
                            {s.title.replace('.', '')}
                          </span>
                        </div>

                        {/* Connector Line between milestones */}
                        {idx < STEPS.length - 1 && (
                          <div className="flex-1 h-[2px] bg-[#E7E7E5] relative mx-2 rounded-full overflow-hidden">
                            <div
                              className="absolute inset-y-0 left-0 bg-[#F97316] transition-all duration-300 ease-out"
                              style={{
                                width: isPassed ? '100%' : isActive ? '50%' : '0%',
                              }}
                            />
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {/* Living Visual Canvas */}
              <MethodSolarCanvas activeStep={activeStep} />
            </div>

          </div>

          {/* Minimal Bottom Scroll Status Hint (Fades out after Step 0 to reduce clutter) */}
          <div className="flex items-center justify-between pt-4 border-t border-[#E7E7E5] text-xs font-mono text-[#747474]">
            <div className={`flex items-center gap-2 transition-opacity duration-300 ${activeStep === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
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
