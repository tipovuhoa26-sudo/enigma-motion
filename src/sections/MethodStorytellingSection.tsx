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
  const [scrollProgress, setScrollProgress] = useState<number>(0);

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

  return (
    <section
      ref={containerRef}
      id="method"
      className="relative h-[240vh] sm:h-[260vh] bg-[#F8F8F6] border-b border-[#E7E7E5]"
    >
      {/* Sticky Pinned Screen Viewport - Pure Scroll-Driven Morph, Zero Carousel Chrome */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-6 md:px-12 lg:px-20 py-8 sm:py-12">
        <div className="max-w-[1280px] w-full mx-auto flex-1 flex flex-col justify-between">
          
          {/* Top Progress Track */}
          <div className="w-full pb-4 border-b border-[#E7E7E5] relative">
            {/* Ambient Gradient Scrub Bar */}
            <div
              className="absolute -bottom-[1px] left-0 h-[2px] bg-gradient-to-r from-[#581C87] via-[#7000FF] to-[#F97316] transition-all duration-150 ease-out"
              style={{ width: `${(scrollProgress * 100).toFixed(1)}%` }}
            />

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#581C87]">
                  PHƯƠNG PHÁP
                </span>
                <span className="text-[#A3A3A3] text-xs">/</span>
                <span className="text-xs font-mono text-[#747474]">
                  3 Bước Vận Hành
                </span>
              </div>

              {/* Status Step Indicator (Read-only, synchronized with scroll) */}
              <div className="flex items-center gap-2">
                {STEPS.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <div
                      key={step.num}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-[#0A0A0A] text-white font-medium'
                          : 'text-[#747474]'
                      }`}
                    >
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] shrink-0" />}
                      <span>{step.pillLabel}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content & Living Visual Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center my-auto py-6">
            
            {/* Left Column: Lean Confident Narrative */}
            <div className="lg:col-span-5 relative min-h-[220px] sm:min-h-[260px] flex flex-col justify-center">
              {STEPS.map((step, idx) => {
                const isCurrent = activeStep === idx;
                return (
                  <div
                    key={step.num}
                    className={`transition-all duration-500 ease-out flex flex-col justify-between ${
                      isCurrent
                        ? 'opacity-100 translate-y-0 relative z-10'
                        : 'opacity-0 translate-y-4 absolute inset-0 z-0 pointer-events-none'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-mono font-semibold text-[#581C87] uppercase tracking-wider mb-2">
                        BƯỚC {step.num}
                      </div>

                      <h2 className="text-3xl sm:text-4xl lg:text-[3.15rem] font-light tracking-tight text-[#0A0A0A] leading-tight mb-4">
                        {step.title}
                      </h2>

                      <p className="text-base text-[#515151] font-normal leading-relaxed mb-6 max-w-[420px]">
                        {step.copy}
                      </p>
                    </div>

                    {/* Metric Display */}
                    <div className="pt-5 border-t border-[#E7E7E5] flex items-baseline gap-4">
                      <span className="text-5xl sm:text-6xl font-light tracking-tight text-[#0A0A0A] tabular-nums shrink-0">
                        {step.proofNum}
                      </span>
                      <div className="text-xs sm:text-sm font-medium text-[#747474]">
                        {step.proofLabel}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Evolving System Visual (Lives Directly on Section Canvas, Zero Card Chrome) */}
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
