'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const TRUSTED_LOGOS = [
  { name: 'Vinhomes (Vingroup)', src: '/logos/vinhomes.png', width: 120, height: 36, opacity: 'opacity-55' },
  { name: 'Tập đoàn Hòa Phát', src: '/logos/hoa_phat.png', width: 110, height: 32, opacity: 'opacity-70' },
  { name: 'Đại học FPT', src: '/logos/fptu.png', width: 110, height: 34, opacity: 'opacity-60' },
  { name: 'Dentsu Sports & Creative', src: '/logos/dentsu.png', width: 110, height: 32, opacity: 'opacity-40' },
  { name: 'Ngân hàng BIDV', src: '/logos/bidv.png', width: 105, height: 34, opacity: 'opacity-70' },
  { name: 'VNPT VinaPhone', src: '/logos/vnpt_vinaphone.png', width: 120, height: 36, opacity: 'opacity-50' },
  { name: 'Đài Truyền Hình HTV', src: '/logos/htv.png', width: 95, height: 32, opacity: 'opacity-75' },
  { name: 'Trung Sơn Pharma', src: '/logos/trung_son.png', width: 115, height: 34, opacity: 'opacity-65' },
  { name: 'Smartland Bất Động Sản', src: '/logos/smartland.png', width: 115, height: 34, opacity: 'opacity-60' },
];

export function StatsStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showFastResponse, setShowFastResponse] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Fast response morph after 450ms
          const timer = setTimeout(() => {
            setShowFastResponse(true);
          }, 450);

          return () => clearTimeout(timer);
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
      className="relative w-full pt-24 sm:pt-32 pb-20 sm:pb-28 px-6 md:px-12 border-b border-[#E7E7E5] scroll-mt-20 overflow-hidden"
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

      <div className="max-w-[1280px] w-full mx-auto relative z-10">
        
        {/* Confident Section H2 (Zero clutter, matches typographic grid) */}
        <div className="mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-light tracking-tight text-[#0A0A0A] leading-[1.08]">
            Kết quả được đo.
          </h2>
        </div>

        {/* Unified Operational Metrics: Fixed Grid Rows for Exact Optical Baseline */}
        <div className="relative mb-20 sm:mb-24">
          
          {/* Continuous Left-to-Right Connecting Beam with Single Meaningful Light Pulse */}
          <div className="hidden md:block absolute top-[66px] lg:top-[70px] left-[4%] right-[4%] h-[1.5px] pointer-events-none z-0">
            <div className="w-full h-full bg-[#E5E3DC]" />
            {/* Active Glow Pulse Moving Left -> Right (Runs Once When Intersecting, No Loop) */}
            <div className={`absolute top-1/2 -translate-y-1/2 h-[3px] w-28 bg-gradient-to-r from-transparent via-[#F97316] to-transparent rounded-full blur-[1px] ${hasAnimated ? 'animate-pulse-once' : 'opacity-0'}`} />
            <div className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F97316] shadow-[0_0_8px_#F97316] ${hasAnimated ? 'animate-pulse-once' : 'opacity-0'}`} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative z-10">
            
            {/* Metric 01: 99.8% (Quality / Accuracy) */}
            {/* Metric 01: 99.8% (Quality / Accuracy) */}
            <div className="grid grid-rows-[24px_84px_28px_auto] gap-y-1.5 group cursor-default">
              {/* Row 1: Category Tag (Neutral Text, Colored Dot) */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#581C87]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#737373] font-medium">
                  Accuracy · Chất lượng
                </span>
              </div>
              {/* Row 2: Value with 500ms Mask Slide-up Reveal */}
              <div className="h-[84px] overflow-hidden flex items-baseline">
                <div className={`text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-light tracking-tighter text-[#0A0A0A] leading-none tabular-nums transition-all duration-500 ease-out transform ${
                  hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}>
                  99.8%
                </div>
              </div>
              {/* Row 3: Title */}
              <div className="text-base font-medium text-[#0A0A0A] flex items-center">
                Độ chính xác kiểm định
              </div>
              {/* Row 4: Attribution Badge */}
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#581C87] bg-[#FAF5FF] border border-[#F3E8FF] px-2 py-0.5 rounded transition-colors group-hover:bg-[#581C87] group-hover:text-white">
                  <span>Manufacturing</span>
                  <span className="opacity-50">·</span>
                  <span className="text-[11px] opacity-80">Computer Vision QA</span>
                </div>
              </div>
            </div>

            {/* Metric 02: <5m (Speed / Response) */}
            <div className="grid grid-rows-[24px_84px_28px_auto] gap-y-1.5 group cursor-default">
              {/* Row 1: Category Tag */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7000FF]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#737373] font-medium">
                  Response · Tốc độ
                </span>
                <span className="text-[10px] font-mono text-[#737373] bg-neutral-100 px-1.5 py-0.5 rounded border border-neutral-200 ml-1">
                  TỪ 24H
                </span>
              </div>
              {/* Row 2: Value */}
              <div className="h-[84px] flex items-baseline">
                <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-light tracking-tighter text-[#0A0A0A] leading-none tabular-nums whitespace-nowrap">
                  {showFastResponse ? (
                    <span className="animate-in fade-in duration-300">&lt; 5m</span>
                  ) : (
                    <span className="text-[#A3A3A3] line-through decoration-red-400">24h</span>
                  )}
                </div>
              </div>
              {/* Row 3: Title */}
              <div className="text-base font-medium text-[#0A0A0A] flex items-center">
                Thời gian phản hồi lead
              </div>
              {/* Row 4: Attribution Badge */}
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#7000FF] bg-[#F5F3FF] border border-[#EDE9FE] px-2 py-0.5 rounded transition-colors group-hover:bg-[#7000FF] group-hover:text-white">
                  <span>Real Estate</span>
                  <span className="opacity-50">·</span>
                  <span className="text-[11px] opacity-80">Vinhomes Lead Response</span>
                </div>
              </div>
            </div>

            {/* Metric 03: −75% (Efficiency / Processing) */}
            <div className="grid grid-rows-[24px_84px_28px_auto] gap-y-1.5 group cursor-default">
              {/* Row 1: Category Tag */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F97316]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#737373] font-medium">
                  Processing · Hiệu quả
                </span>
              </div>
              {/* Row 2: Value */}
              <div className="h-[84px] overflow-hidden flex items-baseline">
                <div className={`text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-light tracking-tighter text-[#EA580C] leading-none tabular-nums transition-all duration-500 ease-out transform ${
                  hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}>
                  −75%
                </div>
              </div>
              {/* Row 3: Title */}
              <div className="text-base font-medium text-[#0A0A0A] flex items-center">
                Thời gian xử lý chứng từ
              </div>
              {/* Row 4: Attribution Badge */}
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#EA580C] bg-[#FFF7ED] border border-[#FFEDD5] px-2 py-0.5 rounded transition-colors group-hover:bg-[#EA580C] group-hover:text-white">
                  <span>Finance</span>
                  <span className="opacity-50">·</span>
                  <span className="text-[11px] opacity-80">Document Processing</span>
                </div>
              </div>
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
                  className={`shrink-0 flex items-center justify-center grayscale ${logo.opacity} hover:grayscale-0 hover:opacity-100 transition-all duration-300 h-9 px-2`}
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
                  className={`shrink-0 flex items-center justify-center grayscale ${logo.opacity} hover:grayscale-0 hover:opacity-100 transition-all duration-300 h-9 px-2`}
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
