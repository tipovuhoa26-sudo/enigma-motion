'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowDown } from 'lucide-react';

export function CasesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pulsePhase, setPulsePhase] = useState<number>(3); // Default settled
  const [metricSettled, setMetricSettled] = useState<boolean>(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Sequenced one-pass physical activation: Lead -> AI -> Response
          setPulsePhase(1);
          setMetricSettled(false);

          const t1 = setTimeout(() => {
            setPulsePhase(2);
            setMetricSettled(true);
          }, 450);

          const t2 = setTimeout(() => {
            setPulsePhase(3);
          }, 900);

          return () => {
            clearTimeout(t1);
            clearTimeout(t2);
          };
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      id="cases"
      className="relative w-full py-24 sm:py-32 px-6 md:px-12 bg-[#F9F9F8] border-b border-[#E7E7E5] overflow-hidden"
    >
      {/* Background Soft Atmospheric Ambient Glow */}
      <div 
        className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[540px] h-[540px] rounded-full pointer-events-none -z-0 opacity-45"
        style={{
          background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, rgba(105,64,190,0.03) 45%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Confident Heading */}
        <div className="mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-light tracking-tight text-[#0A0A0A] leading-[1.08]">
            Kết quả trong vận hành.
          </h2>
        </div>

        {/* Scene Layout: Left 3-Tier Narrative | Right Living Minimal Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 3 Clean Levels (Vinhomes | 24 giờ → < 5 phút | 500+ Môi giới) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Level 1: Client Context */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F97316]" />
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-[#747474]">
                Vinhomes Green Paradise
              </span>
            </div>

            {/* Level 2: Core Transformation Metric (24 giờ → < 5 phút with exact optical center alignment) */}
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap mb-8">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#A3A3A3] tabular-nums leading-none">
                24 giờ
              </span>
              <div className={`flex items-center justify-center transition-colors duration-300 ${metricSettled ? 'text-[#EA580C]' : 'text-[#747474]'}`}>
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 stroke-[2.2]" />
              </div>
              <span className={`text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight tabular-nums transition-all duration-500 leading-none ${
                metricSettled
                  ? 'text-[#EA580C] scale-100 opacity-100'
                  : 'text-[#A3A3A3] scale-95 opacity-60'
              }`}>
                &lt; 5 phút
              </span>
            </div>

            {/* Level 3: Scale & Operational Proof (Vertically Centered Optical Alignment) */}
            <div className="pt-6 border-t border-[#E7E7E5] flex items-center gap-5 sm:gap-6 mb-8">
              <span className="text-5xl sm:text-6xl font-light tracking-tight text-[#0A0A0A] tabular-nums shrink-0 leading-none">
                500+
              </span>
              <div className="flex flex-col justify-center">
                <div className="text-base sm:text-lg font-medium text-[#0A0A0A] leading-snug">
                  Môi giới làm chủ AI
                </div>
                <div className="text-xs sm:text-sm text-[#747474] font-normal mt-1 leading-normal">
                  Nghiệm thu: Tỷ lệ chuyển đổi hẹn gặp khách hàng tăng 100%.
                </div>
              </div>
            </div>

            {/* Clean Enterprise Link */}
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#0A0A0A] hover:text-[#F97316] transition-colors group cursor-pointer"
            >
              <span>Xem phân tích kiến trúc triển khai</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

          </div>

          {/* Right Column: Scaled-up Minimal Flow Pipeline (2-3 words, high visual impact) */}
          <div className="lg:col-span-6 w-full flex items-center justify-center select-none">
            <div className="w-full max-w-[420px] py-6 px-4 relative">
              
              {/* Vertical Continuous Flow Axis */}
              <div className="space-y-10 relative pl-4">
                
                {/* Connecting Vertical Track Hairline */}
                <div className="absolute top-6 bottom-6 left-10 w-[2px] bg-[#E7E5DF] -z-0" />
                
                {/* Active Light Pulse Traveling Down (Single Pass) */}
                <div 
                  className="absolute left-10 w-[2px] bg-gradient-to-b from-[#581C87] to-[#F97316] -z-0 transition-all duration-700 ease-out"
                  style={{
                    top: '24px',
                    height: pulsePhase === 1 ? '30%' : pulsePhase === 2 ? '70%' : '100%',
                  }}
                />

                {/* Node 01: LEAD */}
                <div className="flex items-center gap-6 relative z-10">
                  <div className={`w-12 h-12 rounded-full font-mono text-sm font-bold flex items-center justify-center shrink-0 transition-all duration-400 ${
                    pulsePhase >= 1
                      ? 'bg-[#581C87] text-white shadow-md shadow-purple-900/20 ring-4 ring-purple-100'
                      : 'bg-white text-[#747474] border border-[#E7E5DF]'
                  }`}>
                    01
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-[#581C87] uppercase tracking-wider">
                      LEAD
                    </div>
                    <div className="text-base font-medium text-[#0A0A0A]">
                      Tiếp nhận yêu cầu
                    </div>
                  </div>
                </div>

                {/* Node 02: AI */}
                <div className="flex items-center gap-6 relative z-10">
                  <div className={`w-12 h-12 rounded-full font-mono text-sm font-bold flex items-center justify-center shrink-0 transition-all duration-400 ${
                    pulsePhase >= 2
                      ? 'bg-[#EA580C] text-white shadow-md shadow-orange-500/25 ring-4 ring-orange-100'
                      : 'bg-white text-[#747474] border border-[#E7E5DF]'
                  }`}>
                    AI
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-[#EA580C] uppercase tracking-wider">
                      AI CO-WORKER
                    </div>
                    <div className="text-base font-medium text-[#0A0A0A]">
                      Tra cứu &amp; đối soát
                    </div>
                  </div>
                </div>

                {/* Node 03: RESPONSE */}
                <div className="flex items-center gap-6 relative z-10">
                  <div className={`w-12 h-12 rounded-full font-mono text-sm font-bold flex items-center justify-center shrink-0 transition-all duration-400 ${
                    pulsePhase >= 3
                      ? 'bg-[#059669] text-white shadow-md shadow-emerald-600/20 ring-4 ring-emerald-100'
                      : 'bg-white text-[#747474] border border-[#E7E5DF]'
                  }`}>
                    ✓
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-[#059669] uppercase tracking-wider">
                      RESPONSE
                    </div>
                    <div className="text-base font-medium text-[#0A0A0A]">
                      Phản hồi tức thì
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
