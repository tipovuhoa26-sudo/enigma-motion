'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';

export function CtaFooter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 px-6 md:px-12 flex flex-col items-center justify-center bg-[#0A0A0A] text-white overflow-hidden text-center"
      data-cta-footer
    >
      {/* Horizon Sun Atmosphere: The Sun Visual in its Simplest, Purest State */}
      <div 
        className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[720px] h-[360px] rounded-t-full pointer-events-none opacity-45 blur-2xl"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(249,115,22,0.45) 0%, rgba(251,146,60,0.18) 35%, rgba(107,33,168,0.08) 65%, transparent 80%)'
        }}
      />

      {/* Pure Concentric Orbit Arcs Rising from Horizon */}
      <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none opacity-30">
        <svg viewBox="0 0 600 300" fill="none" className="w-full h-full">
          <circle cx="300" cy="300" r="180" stroke="#F97316" strokeWidth="0.8" strokeDasharray="3 6" />
          <circle cx="300" cy="300" r="120" stroke="#FB923C" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="300" cy="300" r="60" fill="#EA580C" fillOpacity="0.4" />
        </svg>
      </div>

      <div
        className={`relative z-10 flex flex-col items-center gap-5 max-w-xl transition-all duration-700 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Main Statement: One Clear Bold Statement */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
          Đưa AI vào <span className="font-normal text-[#F97316]">vận hành.</span>
        </h2>

        {/* Supporting Line (≤ 12 words) */}
        <p className="text-base text-[#A3A3A3] max-w-md leading-relaxed font-normal">
          Bắt đầu từ bài toán P&L của bạn.
        </p>

        {/* Primary Action Button */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-3">
          <a href="mailto:contact@sunext.vn">
            <Button variant="orange" size="lg" className="rounded-xl shadow-sm text-sm font-medium cursor-pointer">
              <span>Đặt Lịch Tư Vấn Chiến Lược</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </a>

          <Link href="/danh-gia-san-sang-ai">
            <Button variant="outline" size="lg" className="rounded-xl bg-transparent text-white border-white/20 hover:bg-white/10 font-medium text-sm">
              <span>Đo Độ Sẵn Sàng (12 Câu)</span>
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
