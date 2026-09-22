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
          radial-gradient(ellipse 60% 50% at 85% -10%, rgba(242, 120, 35, 0.08) 0%, transparent 65%),
          radial-gradient(ellipse 40% 40% at 10% 80%, rgba(105, 64, 190, 0.04) 0%, transparent 70%),
          #F8F8F6
        `,
      }}
      data-stats-strip
    >
      {/* Background Persistent Orbital System Arc (Linking back to Sun) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 450" fill="none" className="w-full h-full opacity-60">
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
        
        {/* Confident Heading: Exactly "Kết quả được đo." */}
        <div className="mb-14 sm:mb-18">
          <span className="text-xs font-mono uppercase tracking-wider text-[#581C87] font-semibold mb-2 block">
            Hạ Tầng Vận Hành Thực Tế
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0A0A0A] leading-tight">
            Kết quả được đo.
          </h2>
        </div>

        {/* Unified Operational Metrics Flow: 99.8% (Quality) ➔ 24h➔<5m (Speed) ➔ −75% (Efficiency) */}
        <div className="relative mb-20 sm:mb-24">
          
          {/* Connecting System Flow Beam */}
          <div className="hidden lg:block absolute top-[52px] left-[15%] right-[15%] h-[1.5px] bg-[#E5E3DC] z-0">
            <div
              className="h-full bg-gradient-to-r from-[#581C87] via-[#7000FF] to-[#F97316] transition-all duration-1000 ease-out"
              style={{ width: hasAnimated ? '100%' : '0%' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 relative z-10">
            
            {/* Metric 01: 99.8% (Quality) */}
            <div className="flex flex-col bg-white/70 backdrop-blur-xs p-6 rounded-2xl border border-[#E7E7E5]/70 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#581C87]" />
                <span className="text-xs font-mono text-[#747474] uppercase tracking-wider">
                  Chất Lượng Dữ Liệu
                </span>
              </div>
              <div className="text-5xl sm:text-6xl lg:text-[4.75rem] font-light tracking-tighter text-[#0A0A0A] leading-none mb-3 tabular-nums">
                {accuracyVal}%
              </div>
              <div className="text-sm font-medium text-[#0A0A0A]">
                Độ chính xác kiểm định
              </div>
              <div className="text-xs text-[#747474] mt-1 font-normal">
                Kiểm chứng trên mẫu 2,000–5,000 bản ghi dữ liệu thực tế.
              </div>
            </div>

            {/* Metric 02: 24h ➔ <5m (Speed) */}
            <div className="flex flex-col bg-white/70 backdrop-blur-xs p-6 rounded-2xl border border-[#E7E7E5]/70 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#7000FF]" />
                <span className="text-xs font-mono text-[#747474] uppercase tracking-wider">
                  Tốc Độ Phản Hồi
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-3 leading-none">
                <div className="text-5xl sm:text-6xl lg:text-[4.75rem] font-light tracking-tighter text-[#0A0A0A] leading-none tabular-nums whitespace-nowrap">
                  {showFastResponse ? (
                    <span className="animate-in fade-in duration-300">&lt; 5m</span>
                  ) : (
                    <span className="text-[#A3A3A3] line-through decoration-red-400">24h</span>
                  )}
                </div>
                <span className="text-xs font-mono text-[#EA580C] font-semibold bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                  TỪ 24H
                </span>
              </div>
              <div className="text-sm font-medium text-[#0A0A0A]">
                Thời gian phản hồi nghiệp vụ
              </div>
              <div className="text-xs text-[#747474] mt-1 font-normal">
                Tra cứu thông tin, dự toán tài chính và sinh tài liệu tức thì.
              </div>
            </div>

            {/* Metric 03: −75% (Efficiency) */}
            <div className="flex flex-col bg-white/70 backdrop-blur-xs p-6 rounded-2xl border border-[#FDBA74]/50 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#F97316]" />
                <span className="text-xs font-mono text-[#EA580C] uppercase tracking-wider font-semibold">
                  Hiệu Suất P&L
                </span>
              </div>
              <div className="text-5xl sm:text-6xl lg:text-[4.75rem] font-light tracking-tighter text-[#EA580C] leading-none mb-3 tabular-nums">
                −75%
              </div>
              <div className="text-sm font-medium text-[#0A0A0A]">
                Thời gian xử lý chu kỳ
              </div>
              <div className="text-xs text-[#747474] mt-1 font-normal">
                Rút ngắn thời gian từ 3 ngày xuống 2 giờ làm việc.
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
