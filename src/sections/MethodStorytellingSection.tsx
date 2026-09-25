'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { MethodSolarCanvas } from '@/components/visuals/MethodSolarCanvas';

export function MethodStorytellingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [displayedStep, setDisplayedStep] = useState<number>(0);
  const [animPhase, setAnimPhase] = useState<'idle' | 'exit' | 'enter'>('idle');
  const targetStepRef = useRef<number>(0);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const totalScrollable = rect.height - windowHeight;

    if (totalScrollable <= 0) return;

    const currentScrolled = -rect.top;
    const progress = Math.min(Math.max(currentScrolled / totalScrollable, 0), 1);

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

  // Clean transition: exit old -> enter new
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
        }, 300);
        return () => clearTimeout(settleTimer);
      }, 40);

      return () => clearTimeout(pauseTimer);
    }, 160);

    return () => clearTimeout(exitTimer);
  }, [activeStep, displayedStep]);

  const animClass =
    animPhase === 'exit'
      ? 'opacity-0 -translate-y-2 transition-all duration-[160ms] ease-out'
      : animPhase === 'enter'
      ? 'opacity-100 translate-y-0 transition-all duration-[300ms] ease-out'
      : 'opacity-100 translate-y-0';

  return (
    <section
      ref={containerRef}
      id="method"
      className="relative h-[195vh] sm:h-[210vh] bg-[#F8F8F6] border-b border-[#E7E7E5]"
    >
      {/* Sticky Pinned Screen Viewport - Single Clean Control */}
      <div className="sticky top-[72px] h-[calc(100vh-72px)] w-full flex flex-col justify-between overflow-hidden px-6 md:px-12 py-5 sm:py-7">
        <div className="max-w-[1280px] w-full mx-auto flex-1 flex flex-col justify-between">
          
          {/* Top Progress Track: ONLY 01 ───── 02 ───── 03 */}
          <div className="w-full pb-4 sm:pb-5 border-b border-[#E7E7E5] flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#747474]">
              NGUYÊN TẮC THIẾT KẾ
            </span>

            {/* Cloudflare-level minimal progress: 01 ───────── 02 ───────── 03 */}
            <div className="flex items-center gap-3 sm:gap-4 text-xs font-mono select-none">
              <span className={`transition-colors ${activeStep === 0 ? 'text-[#0A0A0A] font-bold' : 'text-[#A1A1AA]'}`}>
                01
              </span>
              <span className={`w-8 sm:w-14 h-[1.5px] transition-colors ${activeStep > 0 ? 'bg-[#0A0A0A]' : 'bg-[#D4D4D8]'}`} />
              <span className={`transition-colors ${activeStep === 1 ? 'text-[#0A0A0A] font-bold' : 'text-[#A1A1AA]'}`}>
                02
              </span>
              <span className={`w-8 sm:w-14 h-[1.5px] transition-colors ${activeStep > 1 ? 'bg-[#0A0A0A]' : 'bg-[#D4D4D8]'}`} />
              <span className={`transition-colors ${activeStep === 2 ? 'text-[#0A0A0A] font-bold' : 'text-[#A1A1AA]'}`}>
                03
              </span>
            </div>
          </div>

          {/* Main Content & Living Visual Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center my-auto py-4 sm:py-6">
            
            {/* Left Column: Focused Narrative */}
            <div className="lg:col-span-5 relative flex flex-col justify-center">
              <div className={`${animClass} flex flex-col justify-between`}>
                <div>
                  {/* Headline */}
                  <div className="min-h-[80px] sm:min-h-[96px] flex items-start">
                    <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-light tracking-tight text-[#0A0A0A] leading-[1.02]">
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

                  {/* Supporting Copy */}
                  <div className="mt-5 min-h-[50px]">
                    <p className="text-base text-[#515151] font-normal leading-relaxed max-w-[400px]">
                      {displayedStep === 0 && (
                        <>
                          Chuẩn hóa quy trình, bỏ thao tác thừa rồi mới đưa AI vào.
                        </>
                      )}
                      {displayedStep === 1 && (
                        <>
                          AI chỉ tạo giá trị khi dữ liệu nghiệp vụ được kết nối trong ranh giới kiểm soát.
                        </>
                      )}
                      {displayedStep === 2 && (
                        <>
                          Không có KPI, chưa triển khai AI. Mọi tác vụ phải đo lường được từ baseline trước vận hành.
                        </>
                      )}
                    </p>
                  </div>
                </div>

                {/* Varied Metric Syntax */}
                <div className="mt-8 pt-6 border-t border-[#E7E7E5] flex flex-col justify-center min-h-[80px]">
                  {displayedStep === 0 && (
                    <div className="flex flex-col justify-center">
                      <span className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#EA580C] tabular-nums leading-none">
                        −67%
                      </span>
                      <span className="text-xs sm:text-sm font-normal text-[#747474] mt-2">
                        Thời gian chu kỳ xử lý
                      </span>
                    </div>
                  )}

                  {displayedStep === 1 && (
                    <div className="flex flex-col justify-center">
                      <span className="text-xl sm:text-2xl font-light tracking-tight text-[#0A0A0A] font-mono">
                        5 nguồn → 1 luồng kiểm soát
                      </span>
                      <span className="text-xs text-[#747474] mt-2 font-mono">
                        ERP · CRM · Tài liệu · Cơ sở dữ liệu · API
                      </span>
                    </div>
                  )}

                  {displayedStep === 2 && (
                    <div className="flex flex-col justify-center">
                      <div className="flex items-baseline gap-2.5">
                        <span className="text-3xl sm:text-4xl font-light tracking-tight text-[#747474] line-through font-mono">
                          2 ngày
                        </span>
                        <span className="text-2xl font-mono text-[#7000FF]">→</span>
                        <span className="text-3xl sm:text-4xl font-light tracking-tight text-[#0A0A0A] font-mono font-medium">
                          3 giờ
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-normal text-[#747474] mt-2">
                        Thời gian xử lý
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: 2D Diagram Canvas */}
            <div className="lg:col-span-7 w-full flex items-center justify-center relative overflow-visible">
              <MethodSolarCanvas activeStep={activeStep} />
            </div>

          </div>

          {/* Minimal Empty Spacer replacing the 3 redundant bottom controls */}
          <div className="w-full h-1" />

        </div>
      </div>
    </section>
  );
}
