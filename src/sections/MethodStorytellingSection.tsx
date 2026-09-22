'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { MethodSolarCanvas } from '@/components/visuals/MethodSolarCanvas';

const STEPS = [
  {
    id: 0,
    num: '01',
    tabLabel: 'Quy trình',
    eyebrow: 'Con Người & SOP',
    titleLine1: 'Quy trình',
    titleLine2: 'trước công cụ.',
    copy: 'Chuẩn hóa SOP và cắt bỏ thao tác thừa trước khi tự động hóa. Không đưa công nghệ vào một quy trình hỗn loạn để tạo ra sai lệch tự động tốc độ cao.',
    proofNum: '−67%',
    proofLabel: 'Thời gian xử lý luồng việc',
  },
  {
    id: 1,
    num: '02',
    tabLabel: 'Dữ liệu',
    eyebrow: 'Bảo Mật & RAG Mesh',
    titleLine1: 'Dữ liệu phải',
    titleLine2: 'kết nối được.',
    copy: 'Kết nối ERP, CRM và Database vào AI trong ranh giới cô lập. 100% On-Premise hoặc Private VPC, mã hóa đầu cuối và nghiệm thu zero rò rỉ dữ liệu.',
    proofNum: '100%',
    proofLabel: 'On-Premise / Private VPC',
  },
  {
    id: 2,
    num: '03',
    tabLabel: 'KPI & P&L',
    eyebrow: 'Nghiệm Thu P&L',
    titleLine1: 'KPI phải có',
    titleLine2: 'trước AI.',
    copy: 'Mọi dòng code và mô hình AI đều quy đổi ra P&L định lượng và thời gian hoàn vốn. Nghiệm thu theo hiệu quả kinh doanh, không nghiệm thu số lượng công cụ.',
    proofNum: '< 4 tháng',
    proofLabel: 'Thời gian thu hồi vốn',
  },
];

export function MethodStorytellingSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef(false);

  // Scroll-driven pinned carousel controller
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      if (isClickScrolling.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalScroll = rect.height - window.innerHeight;
      if (totalScroll <= 0) return;

      // Scrolled distance within the 300vh track
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll));
      setScrollProgress(progress);

      // Map progress to steps with smooth thresholds
      // 0.00 -> 0.35: Step 0
      // 0.35 -> 0.68: Step 1
      // 0.68 -> 1.00: Step 2
      const step = progress < 0.35 ? 0 : progress < 0.68 ? 1 : 2;
      setActiveStep(step);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 1-Click Smooth Navigation to specific Step
  const scrollToStep = (stepIndex: number) => {
    if (!containerRef.current) {
      setActiveStep(stepIndex);
      return;
    }

    isClickScrolling.current = true;
    setActiveStep(stepIndex);

    const rect = containerRef.current.getBoundingClientRect();
    const containerTop = window.scrollY + rect.top;
    const totalScroll = rect.height - window.innerHeight;
    const targets = [0.08, 0.50, 0.92];
    const targetY = containerTop + targets[stepIndex] * totalScroll;

    window.scrollTo({ top: targetY, behavior: 'smooth' });

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 650);
  };

  return (
    <section
      ref={containerRef}
      id="method"
      className="relative w-full h-[260vh] sm:h-[280vh] bg-[#F9F9F8] border-b border-[#E7E7E5]"
    >
      {/* Pinned Viewport Container (Sticky Stage) */}
      <div className="sticky top-0 w-full h-screen min-h-[640px] max-h-[960px] flex flex-col justify-between px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 pt-20 sm:pt-24 pb-8 sm:pb-10 overflow-hidden">
        <div className="max-w-[1360px] w-full mx-auto my-auto flex flex-col justify-center flex-1">
          
          {/* Top Header & Lean Interactive Carousel Scrubber */}
          <div className="pb-5 sm:pb-6 mb-6 sm:mb-8 border-b border-[#E7E7E5]">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#581C87] font-semibold">
                  Phương pháp Sunext
                </span>
                <span className="text-xs font-mono text-[#A3A3A3]">/</span>
                <span className="text-xs font-mono text-[#747474]">
                  3 Nguyên Tắc Vận Hành
                </span>
              </div>
              
              {/* Interactive Step Selector Pills with Progress Highlight */}
              <div className="flex items-center gap-1 sm:gap-2 bg-white p-1 rounded-xl border border-[#E7E7E5] shadow-2xs">
                {STEPS.map((s) => {
                  const isActive = activeStep === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => scrollToStep(s.id)}
                      className={`relative px-3 sm:px-4 py-1.5 rounded-lg text-xs font-mono transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-[#0A0A0A] text-white font-medium shadow-xs'
                          : 'text-[#747474] hover:text-[#0A0A0A] hover:bg-[#F4F4F3]'
                      }`}
                    >
                      <span className={isActive ? 'text-[#F97316] font-bold' : 'font-semibold'}>
                        {s.num}
                      </span>
                      <span className="hidden sm:inline">{s.tabLabel}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Lean Progress Scrub Bar */}
            <div className="w-full h-[2px] bg-[#E7E7E5] rounded-full overflow-hidden mt-4">
              <div
                className="h-full bg-gradient-to-r from-[#581C87] via-[#7000FF] to-[#F97316] transition-all duration-150 ease-out rounded-full"
                style={{ width: `${Math.max(4, Math.round(scrollProgress * 100))}%` }}
              />
            </div>
          </div>

          {/* 2-Column Pinned Carousel Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left Column: Morphing Narrative (Transitioning Smoothly with zero layout jump) */}
            <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[340px] lg:min-h-[380px] flex flex-col justify-between max-w-[560px]">
              {STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.id}
                    className={`transition-all duration-500 ease-out transform-gpu flex flex-col justify-between h-full ${
                      isActive
                        ? 'opacity-100 translate-y-0 relative z-10 pointer-events-auto'
                        : 'opacity-0 translate-y-4 absolute inset-0 z-0 pointer-events-none'
                    }`}
                  >
                    <div>
                      {/* Eyebrow badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-mono font-semibold text-[#581C87] uppercase tracking-wider">
                          NGUYÊN TẮC {step.num}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                        <span className="text-xs font-mono text-[#747474]">
                          {step.eyebrow}
                        </span>
                      </div>

                      {/* Robust Title: Zero orphan word drop */}
                      <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[3.25rem] font-light tracking-tight text-[#0A0A0A] leading-[1.18] mb-5">
                        <span className="inline-block">{step.titleLine1}</span>{' '}
                        <span className="inline-block">{step.titleLine2}</span>
                      </h2>

                      {/* Supporting Copy */}
                      <p className="text-base sm:text-lg text-[#515151] font-normal leading-relaxed mb-6 sm:mb-8 max-w-[460px]">
                        {step.copy}
                      </p>
                    </div>

                    {/* 1 Proof Metric Display */}
                    <div className="pt-6 sm:pt-7 border-t border-[#E7E7E5] flex items-baseline gap-4 sm:gap-6">
                      <span className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#0A0A0A] tabular-nums shrink-0">
                        {step.proofNum}
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm sm:text-base font-medium text-[#0A0A0A] leading-snug">
                          {step.proofLabel}
                        </div>
                        <div className="text-xs font-mono text-[#747474] mt-1">
                          Nghiệm thu thực tế
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Dynamic Living Visual Canvas with Smooth Morphing */}
            <div className="lg:col-span-7 w-full bg-white rounded-2xl border border-[#E7E7E5] p-2 sm:p-4 flex items-center justify-center relative overflow-hidden shadow-xs">
              <MethodSolarCanvas activeStep={activeStep} />
            </div>

          </div>

          {/* Bottom Lean Navigation Hint: Scroll to Advance Indicator */}
          <div className="flex items-center justify-between pt-5 sm:pt-6 mt-4 border-t border-[#E7E7E5]/60 text-xs font-mono text-[#747474]">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
              <span>Cuộn chuột để xem tiếp · 0{activeStep + 1}/03</span>
            </div>
            
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                type="button"
                onClick={() => scrollToStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="px-2.5 py-1 rounded-md border border-[#E7E7E5] bg-white hover:bg-[#F4F4F3] disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer text-[11px]"
              >
                ← Trước
              </button>
              <button
                type="button"
                onClick={() => scrollToStep(Math.min(2, activeStep + 1))}
                disabled={activeStep === 2}
                className="px-2.5 py-1 rounded-md border border-[#E7E7E5] bg-white hover:bg-[#F4F4F3] disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer text-[11px] flex items-center gap-1"
              >
                <span>Tiếp</span>
                <span>→</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
