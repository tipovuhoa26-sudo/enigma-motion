'use client';

import React, { useEffect, useRef, useState } from 'react';

export function StatsStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [metric1, setMetric1] = useState('99.8%');
  const [lineProgress, setLineProgress] = useState(100);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();
          const duration = 1000;

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);

            const m1 = (80 + ease * 19.8).toFixed(1);
            setMetric1(`${m1}%`);

            // Line shrinks from 100 down to 25
            const currentLine = 100 - ease * 75;
            setLineProgress(currentLine);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setMetric1('99.8%');
              setLineProgress(25);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={containerRef}
      className="w-full py-24 sm:py-32 px-6 md:px-12 lg:px-20 bg-white border-b border-[#E7E7E5] overflow-hidden"
      data-stats-strip
    >
      <div className="max-w-[1280px] mx-auto">
        {/* 1 Headline + 1 Support Line */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0A0A0A] leading-tight">
            Nghiệm thu bằng <span className="font-normal text-[#0A0A0A]">kết quả định lượng.</span>
          </h2>
          <p className="text-base text-[#515151] mt-3 font-normal max-w-xl">
            Mọi bài toán đều đo lường trực tiếp trên P&L thực tế.
          </p>
        </div>

        {/* 3 Standalone Metrics - Monumental Numbers, No Cards, Whitespace */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">
          
          {/* Metric 01: 99.8% */}
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2 mb-2 leading-none">
              <span className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tighter text-[#0A0A0A] tabular-nums">
                {metric1}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#059669] shrink-0 mb-3" />
            </div>
            <div className="text-base sm:text-lg font-medium text-[#0A0A0A]">
              Độ chính xác dữ liệu
            </div>
            <div className="text-xs font-mono text-[#747474] mt-1">
              Kiểm định tự động 100%
            </div>
          </div>

          {/* Metric 02: 500+ Môi Giới BĐS Được Đào Tạo AI (Case Vinhomes Green Paradise) */}
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2 mb-2 leading-none">
              <span className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tighter text-[#0A0A0A] tabular-nums whitespace-nowrap">
                500+
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#F97316] shrink-0 mb-3" />
            </div>
            <div className="text-base sm:text-lg font-medium text-[#0A0A0A]">
              Môi giới BĐS được đào tạo AI
            </div>
            <div className="text-xs font-mono text-[#747474] mt-1">
              Vinhomes Green Paradise · Chatbot & Media AI
            </div>
          </div>

          {/* Metric 03: < 5 Phút (Phản hồi & Tạo Landing Page từ 24h) */}
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2.5 mb-2 leading-none">
              <span className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tighter text-[#0A0A0A] tabular-nums whitespace-nowrap">
                &lt; 5m
              </span>
              <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-orange-50 text-[#EA580C] border border-[#FED7AA] whitespace-nowrap mb-2">
                TỪ 24H
              </span>
            </div>
            <div className="text-base sm:text-lg font-medium text-[#0A0A0A]">
              Phản hồi & sinh trang dự án
            </div>
            <div className="text-xs font-mono text-[#059669] mt-1 font-medium">
              Chatbot 24/7 · Tốc độ Media x3
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
