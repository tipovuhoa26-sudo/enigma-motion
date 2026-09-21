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
        {/* Large Editorial Headline */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-wider text-[#F97316] font-semibold mb-3 block">
            Bằng chứng định lượng
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0A0A0A] leading-tight">
            Hiệu quả đo lường trực tiếp trên <span className="font-normal text-[#0A0A0A]">P&L thực tế</span>
          </h2>
        </div>

        {/* 3 Standalone Metrics - No Cards, No Heavy Boxes, Whitespace as Component */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Metric 01: 99.8% Standalone */}
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tighter text-[#0A0A0A] tabular-nums leading-none">
                {metric1}
              </span>
              <span className="w-3 h-3 rounded-full bg-[#059669] shrink-0 mb-2" title="Đã kiểm định thực tế" />
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-[#0A0A0A] mb-2 leading-snug">
              Độ chính xác kiểm định tự động
            </h3>
            <p className="text-sm sm:text-base text-[#515151] leading-relaxed">
              Dây chuyền sản xuất cơ khí 800 công nhân. Thay thế hoàn toàn khâu kiểm đếm thủ công.
            </p>
          </div>

          {/* Metric 02: 3 Ngày ➔ 2 Giờ Morph */}
          <div className="flex flex-col">
            <div className="flex items-baseline gap-3 mb-3 leading-none">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#747474] line-through tabular-nums">
                3d
              </span>
              <span className="text-3xl sm:text-4xl text-[#F97316] font-light">➔</span>
              <span className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tighter text-[#0A0A0A] tabular-nums">
                2h
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-[#0A0A0A] mb-2 leading-snug">
              Chu kỳ xuất bản báo cáo phân tích
            </h3>
            <p className="text-sm sm:text-base text-[#515151] leading-relaxed">
              Vietcap Securities. Tự động hóa bóc tách 3 báo cáo tài chính và dữ liệu vĩ mô.
            </p>
          </div>

          {/* Metric 03: -75% with Data Line Motion */}
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tighter text-[#0A0A0A] tabular-nums leading-none">
                -75%
              </span>
            </div>
            
            {/* Animated Data Line Explanation: 100 -> 25 */}
            <div className="w-full max-w-[280px] mb-3">
              <div className="w-full h-1 bg-[#E7E7E5] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#581C87] transition-all duration-300 rounded-full"
                  style={{ width: `${lineProgress}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-mono text-[#747474] mt-1">
                <span>100% chi phí cũ</span>
                <span className="text-[#581C87] font-semibold">25% chi phí mới</span>
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-medium text-[#0A0A0A] mb-2 leading-snug">
              Thời gian xử lý dữ liệu và bóc tách BCTC
            </h3>
            <p className="text-sm sm:text-base text-[#515151] leading-relaxed">
              Doanh nghiệp cắt giảm thời gian chờ đợi và nâng cao năng suất nhân sự cấp cao.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
