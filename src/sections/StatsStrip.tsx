'use client';

import React, { useEffect, useRef, useState } from 'react';

interface MetricItem {
  id: string;
  number: string;
  label: string;
  detail: string;
  badge?: string;
  color: string;
}

const METRICS: MetricItem[] = [
  {
    id: 'accuracy',
    number: '99.8%',
    label: 'Độ chính xác kiểm định',
    detail: 'Kiểm chứng tự động trên 2,000–5,000 bản ghi dữ liệu doanh nghiệp thật.',
    color: '#059669',
  },
  {
    id: 'enablement',
    number: '500+',
    label: 'Nhân sự được đào tạo',
    detail: 'Case Vinhomes Green Paradise: 500+ Môi giới BĐS tự chủ Chatbot 24/7 & Media AI.',
    color: '#F97316',
  },
  {
    id: 'speed',
    number: '24h → <5m',
    label: 'Thời gian phản hồi',
    detail: 'Rút ngắn chu kỳ phản hồi giỏ hàng và tự sinh Landing Page từ 24h xuống dưới 5 phút.',
    badge: 'TỪ 24H',
    color: '#581C87',
  },
];

export function StatsStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 sm:py-28 px-6 md:px-12 lg:px-20 bg-[#F9F9F8] border-b border-[#E7E7E5] overflow-hidden"
      data-stats-strip
    >
      {/* Background Expanding System Orbit Curve & Soft Aura */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 400" fill="none" className="w-full h-full opacity-40">
          <path
            d="M-100 200 C300 80, 1100 80, 1540 200"
            stroke="#E1DFDA"
            strokeWidth="0.8"
            strokeDasharray="4 6"
          />
          <circle cx="280" cy="140" r="3" fill="#059669" />
          <circle cx="720" cy="100" r="4" fill="#F97316" />
          <circle cx="1160" cy="140" r="3" fill="#581C87" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Section Title (≤ 7 words) */}
        <div className="mb-14 sm:mb-18">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[#0A0A0A] leading-tight">
            Nghiệm thu bằng <span className="font-normal text-[#0A0A0A]">kết quả định lượng.</span>
          </h2>
        </div>

        {/* 3 Standalone Metrics - Monumental Numbers Born from System, Zero Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 items-start">
          {METRICS.map((item) => {
            const isHovered = activeTooltip === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveTooltip(item.id)}
                onMouseLeave={() => setActiveTooltip(null)}
                onClick={() => setActiveTooltip(activeTooltip === item.id ? null : item.id)}
                className="flex flex-col relative group cursor-pointer"
              >
                {/* Number Line */}
                <div className="flex items-baseline gap-2.5 mb-2 leading-none">
                  <span className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-light tracking-tighter text-[#0A0A0A] tabular-nums whitespace-nowrap">
                    {item.number}
                  </span>
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0 mb-2 transition-transform duration-300 group-hover:scale-125"
                    style={{ backgroundColor: item.color }}
                  />
                </div>

                {/* Lean Label (≤ 4 words) */}
                <div className="text-base sm:text-lg font-medium text-[#0A0A0A] flex items-center gap-2">
                  <span>{item.label}</span>
                  <span className="text-[11px] font-mono text-[#747474] opacity-0 group-hover:opacity-100 transition-opacity">
                    (i)
                  </span>
                </div>

                {/* Minimal Reveal Tooltip / Detail on Hover/Click */}
                <div
                  className={`mt-3 p-3 rounded-lg bg-white border border-[#E7E7E5] shadow-xs text-xs font-sans text-[#515151] leading-relaxed transition-all duration-200 ${
                    isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'
                  }`}
                >
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
