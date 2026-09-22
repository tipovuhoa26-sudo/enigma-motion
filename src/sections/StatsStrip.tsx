'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const TRUSTED_LOGOS = [
  { name: 'Vinhomes (Vingroup)', src: '/logos/vinhomes.png', width: 120, height: 36 },
  { name: 'Tập đoàn Hòa Phát', src: '/logos/hoa_phat.png', width: 110, height: 32 },
  { name: 'Đại học FPT', src: '/logos/fptu.png', width: 110, height: 34 },
  { name: 'Dentsu Sports & Creative', src: '/logos/dentsu.png', width: 110, height: 32 },
  { name: 'Ngân hàng BIDV', src: '/logos/bidv.png', width: 105, height: 34 },
  { name: 'VNPT VinaPhone', src: '/logos/vnpt_vinaphone.png', width: 120, height: 36 },
  { name: 'Đài Truyền Hình HTV', src: '/logos/htv.png', width: 95, height: 32 },
  { name: 'Trung Sơn Pharma', src: '/logos/trung_son.png', width: 115, height: 34 },
  { name: 'Smartland Bất Động Sản', src: '/logos/smartland.png', width: 115, height: 34 },
];

export function StatsStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [accuracyVal, setAccuracyVal] = useState('85.0');
  const [showFastResponse, setShowFastResponse] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate 99.8% counter
          const startTime = performance.now();
          const duration = 1200;

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);

            const val = (85 + ease * 14.8).toFixed(1);
            setAccuracyVal(val);

            if (progress >= 0.6) {
              setShowFastResponse(true);
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setAccuracyVal('99.8');
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
      id="proof"
      className="relative w-full pt-28 sm:pt-36 pb-20 sm:pb-28 px-6 md:px-12 lg:px-20 border-b border-[#E7E7E5] scroll-mt-20 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 50% 25%, rgba(249, 115, 22, 0.08) 0%, rgba(105, 64, 190, 0.03) 40%, transparent 70%),
          #F8F8F6
        `,
      }}
      data-stats-strip
    >
      {/* Background Persistent Orbital System Arc (Connecting back to Sun system) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 450" fill="none" className="w-full h-full opacity-50">
          <path
            d="M -60 120 C 320 40, 980 40, 1500 120"
            stroke="#E2E0D8"
            strokeWidth="0.8"
            strokeDasharray="4 6"
          />
          <path
            d="M 120 280 C 480 180, 960 180, 1380 280"
            stroke="#EAE8E2"
            strokeWidth="0.6"
            strokeDasharray="3 7"
          />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Confident Heading: 52-64px scale */}
        <div className="mb-14 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-wider text-[#581C87] font-semibold mb-3 block">
            Hạ Tầng Vận Hành Thực Tế
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-light tracking-tight text-[#0A0A0A] leading-tight">
            Kết quả được đo.
          </h2>
        </div>

        {/* Unified Operational Metrics: 99.8% ────── <5m ────── −75% (Zero Card Chrome) */}
        <div className="relative mb-20 sm:mb-24">
          
          {/* Continuous Left-to-Right Connecting Beam with Traveling Light Pulse */}
          <div className="hidden md:block absolute top-[68px] lg:top-[76px] left-[4%] right-[4%] h-[1.5px] pointer-events-none z-0">
            <div className="w-full h-full bg-[#E5E3DC]" />
            {/* Active Glow Pulse Moving Left -> Right (Quality -> Speed -> Efficiency) */}
            <div className="absolute top-1/2 -translate-y-1/2 h-[3px] w-28 bg-gradient-to-r from-transparent via-[#F97316] to-transparent rounded-full blur-[1px] animate-pulse-travel" />
            <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F97316] shadow-[0_0_8px_#F97316] animate-pulse-travel" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative z-10">
            
            {/* Metric 01: 99.8% (Quality / Accuracy) */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#581C87]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#581C87] font-semibold">
                  Accuracy · Chất lượng
                </span>
              </div>
              <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-light tracking-tighter text-[#0A0A0A] leading-none mb-4 tabular-nums">
                {accuracyVal}%
              </div>
              <div className="text-base font-medium text-[#0A0A0A] mb-1">
                Độ chính xác kiểm định
              </div>
              <p className="text-xs sm:text-sm text-[#747474] font-normal leading-relaxed max-w-[300px]">
                Kiểm chứng trên mẫu 2,000–5,000 bản ghi dữ liệu thực tế.
              </p>
            </div>

            {/* Metric 02: <5m (Speed / Response) */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#7000FF]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#7000FF] font-semibold">
                  Response · Tốc độ
                </span>
                <span className="text-[10px] font-mono text-[#EA580C] bg-orange-50 px-1.5 py-0.5 rounded border border-orange-200 ml-1">
                  TỪ 24H
                </span>
              </div>
              <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-light tracking-tighter text-[#0A0A0A] leading-none mb-4 tabular-nums whitespace-nowrap">
                {showFastResponse ? (
                  <span className="animate-in fade-in duration-300">&lt; 5m</span>
                ) : (
                  <span className="text-[#A3A3A3] line-through decoration-red-400">24h</span>
                )}
              </div>
              <div className="text-base font-medium text-[#0A0A0A] mb-1">
                Thời gian phản hồi nghiệp vụ
              </div>
              <p className="text-xs sm:text-sm text-[#747474] font-normal leading-relaxed max-w-[300px]">
                Tra cứu thông tin, dự toán tài chính và sinh tài liệu tức thì.
              </p>
            </div>

            {/* Metric 03: −75% (Efficiency / Processing) */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#F97316]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#EA580C] font-semibold">
                  Processing · Hiệu quả
                </span>
              </div>
              <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-light tracking-tighter text-[#EA580C] leading-none mb-4 tabular-nums">
                −75%
              </div>
              <div className="text-base font-medium text-[#0A0A0A] mb-1">
                Thời gian xử lý chu kỳ
              </div>
              <p className="text-xs sm:text-sm text-[#747474] font-normal leading-relaxed max-w-[300px]">
                Rút ngắn thời gian xử lý chu kỳ từ 3 ngày xuống 2 giờ làm việc.
              </p>
            </div>

          </div>
        </div>

        {/* Integrated Social Proof Logos Bar (No Disconnected Divider) */}
        <div className="pt-8 border-t border-[#E7E7E5]/80 flex flex-col items-center">
          <div className="text-xs font-mono text-[#747474] uppercase tracking-wider mb-6 text-center">
            Được triển khai cùng đội ngũ tại
          </div>

          <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="animate-marquee-slow flex items-center gap-14 py-1">
              {/* Loop 1 */}
              {TRUSTED_LOGOS.map((logo, idx) => (
                <div
                  key={`logo-1-${idx}`}
                  className="shrink-0 flex items-center justify-center grayscale opacity-55 hover:grayscale-0 hover:opacity-100 transition-all duration-300 h-9 px-2"
                  title={logo.name}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="max-h-7 w-auto object-contain select-none pointer-events-none"
                  />
                </div>
              ))}

              {/* Loop 2 */}
              {TRUSTED_LOGOS.map((logo, idx) => (
                <div
                  key={`logo-2-${idx}`}
                  className="shrink-0 flex items-center justify-center grayscale opacity-55 hover:grayscale-0 hover:opacity-100 transition-all duration-300 h-9 px-2"
                  title={logo.name}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="max-h-7 w-auto object-contain select-none pointer-events-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
