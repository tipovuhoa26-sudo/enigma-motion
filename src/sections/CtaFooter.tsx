'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';

export function CtaFooter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sunAnchorRef = useRef<HTMLDivElement>(null);
  const [isSunRevealed, setIsSunRevealed] = useState(false);

  useEffect(() => {
    if (!sunAnchorRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSunRevealed(true);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(sunAnchorRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="transfer"
      ref={sectionRef}
      className="relative w-full bg-[#0A0A0A] text-white overflow-hidden text-center scroll-mt-20 border-t border-[#1C1829]"
      aria-label="Chuyển giao tự chủ & Bắt đầu hợp tác"
      data-cta-footer
    >
      {/* ==================================================================== */}
      {/* ACT 1 — TỰ CHỦ: Lời Kết Yên Tĩnh Về Tiêu Chuẩn Bàn Giao               */}
      {/* ==================================================================== */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-32 sm:pt-40 md:pt-48 pb-24 sm:pb-32 flex flex-col items-center">
        {/* Monospace Eyebrow */}
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#EA580C] font-semibold block mb-4 select-none">
          TỰ CHỦ
        </span>

        {/* Clean, Dignified Headline with Generous Line-height */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-tight text-white leading-tight sm:leading-[1.18] max-w-4xl mx-auto">
          <span>Tự chủ không phải điểm kết thúc.</span><br />
          <span className="font-normal text-[#E2E8F0]">Đó là tiêu chuẩn bàn giao.</span>
        </h2>

        {/* 3 Quiet Proof Lines (Restrained & Minimalist) */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-8 sm:mt-10 text-sm sm:text-base text-[#94A3B8] font-light">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
            <span>Mã nguồn &amp; quyền quản trị</span>
          </div>
          <span className="hidden sm:inline text-white/20 select-none">/</span>
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
            <span>SOP &amp; tài liệu vận hành</span>
          </div>
          <span className="hidden sm:inline text-white/20 select-none">/</span>
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
            <span>Đội ngũ tiếp nhận năng lực</span>
          </div>
        </div>
      </div>

      {/* Atmospheric Space Transition */}
      <div className="w-full h-16 sm:h-24 pointer-events-none" />

      {/* ==================================================================== */}
      {/* ACT 2 — SUNRISE: Quầng Sáng Chân Trời & Bắt Đầu Từ Bài Toán Thật      */}
      {/* ==================================================================== */}
      <div 
        id="contact" 
        ref={sunAnchorRef}
        className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 pb-44 sm:pb-52 md:pb-60 flex flex-col items-center scroll-mt-24"
      >
        {/* Main CTA Statement */}
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-light tracking-tight text-white leading-tight">
          Bắt đầu từ <span className="font-normal text-[#F97316]">bài toán thật.</span>
        </h3>

        {/* Supporting Line */}
        <p className="text-base sm:text-lg text-[#94A3B8] font-light mt-4 max-w-lg mx-auto leading-relaxed">
          Đánh giá độ sẵn sàng 12 câu hỏi hoặc trao đổi trực tiếp 30 phút cùng chuyên gia Sunext.
        </p>

        {/* 2 Focused Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a href="mailto:contact@sunext.vn">
            <Button
              variant="orange"
              size="lg"
              className="rounded-xl shadow-lg shadow-[#EA580C]/25 text-sm font-medium cursor-pointer"
            >
              <span>Đặt Lịch Tư Vấn</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </a>

          <Link href="/danh-gia-san-sang-ai">
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl bg-white/5 hover:bg-white/10 text-white border-white/20 font-medium text-sm transition-colors"
            >
              <span>Đo Độ Sẵn Sàng (12 Câu)</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 1. Monumental Horizon Sun Atmosphere (Soft Glowing Dawn at Edge)     */}
      {/* ==================================================================== */}
      <div 
        className={`absolute -bottom-28 left-1/2 -translate-x-1/2 w-[1100px] h-[520px] rounded-t-full pointer-events-none transition-all duration-[2000ms] ease-out ${
          isSunRevealed ? 'opacity-75 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(234, 88, 12, 0.6) 0%, rgba(251, 146, 60, 0.25) 35%, rgba(112, 0, 255, 0.08) 65%, transparent 85%)',
          filter: 'blur(75px)',
        }}
      />

      {/* ==================================================================== */}
      {/* 2. Horizon Sun Disc & Faint Concentric Arcs: Peeking 25-30% from Bottom */}
      {/* Gentle rise ~30px over 1.6s, then completely calm & stationary       */}
      {/* ==================================================================== */}
      <div 
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[840px] sm:w-[1040px] h-[360px] sm:h-[440px] pointer-events-none overflow-hidden transition-all duration-[1600ms] ease-out ${
          isSunRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 sm:translate-y-10'
        }`}
      >
        <svg viewBox="0 0 1000 400" fill="none" className="w-full h-full overflow-visible">
          <defs>
            <radialGradient id="cta-horizon-sun" cx="50%" cy="100%" r="90%">
              <stop offset="0%" stopColor="#FFF7ED" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#FED7AA" stopOpacity="0.85" />
              <stop offset="55%" stopColor="#F97316" stopOpacity="0.65" />
              <stop offset="85%" stopColor="#EA580C" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#9A3412" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Faint Concentric Grand Horizon Arcs */}
          <circle cx="500" cy="400" r="340" stroke="#F97316" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.2" />
          <circle cx="500" cy="400" r="230" stroke="#FB923C" strokeWidth="0.9" strokeDasharray="5 7" opacity="0.28" />
          <circle cx="500" cy="400" r="140" stroke="#FDBA74" strokeWidth="1.1" strokeDasharray="3 5" opacity="0.38" />

          {/* Radiant Sun Disc Rising at the Horizon (Source of Light, not a hard geometric stamp) */}
          <circle
            cx="500"
            cy="400"
            r="95"
            fill="url(#cta-horizon-sun)"
            filter="drop-shadow(0 -12px 36px rgba(234, 88, 12, 0.65))"
          />
          {/* Subtle Crest Highlight */}
          <circle cx="500" cy="400" r="95" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.35" />
          <circle cx="500" cy="400" r="45" fill="#FFFFFF" fillOpacity="0.3" filter="blur(6px)" />
        </svg>
      </div>
    </section>
  );
}
