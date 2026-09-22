'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
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
      className="relative w-full py-24 sm:py-32 px-6 md:px-12 flex flex-col items-center justify-center bg-[#111111] text-white overflow-hidden text-center"
      data-cta-footer
    >
      <span id="schedule" className="absolute top-0 left-0 w-0 h-0 opacity-0 pointer-events-none" aria-hidden="true" />

      {/* Subtle Purple / Orange Ambient Glow & Rising Sun Horizon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-purple-600/10 via-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Rising Sun Horizon Graphic */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none opacity-40">
        <svg viewBox="0 0 600 200" fill="none" className="w-full h-full">
          <circle cx="300" cy="200" r="140" fill="none" stroke="#F97316" strokeWidth="1" strokeDasharray="3 5" />
          <circle cx="300" cy="200" r="100" fill="none" stroke="#FB923C" strokeWidth="1.2" strokeDasharray="4 4" />
          <circle cx="300" cy="200" r="60" fill="#EA580C" fillOpacity="0.3" />
        </svg>
      </div>

      <div
        className={`relative z-10 flex flex-col items-center gap-6 max-w-2xl transition-all duration-700 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Main Headline: 1 Large Sentence */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight">
          AI chỉ tạo giá trị khi <span className="font-normal text-[#F97316]">đi vào vận hành.</span>
        </h2>

        {/* 1 Short Supporting Sentence */}
        <p className="text-base sm:text-lg text-[#A3A3A3] max-w-md leading-relaxed font-normal">
          Bắt đầu bằng khảo sát bài toán thực tế và đo lường độ sẵn sàng dữ liệu.
        </p>

        {/* 1 Primary Action Button */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <a href="mailto:contact@sunext.vn">
            <Button variant="orange" size="lg" className="rounded-xl shadow-sm text-sm font-medium cursor-pointer">
              <span>Đặt Lịch Tư Vấn Chiến Lược</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>

          <Link href="/danh-gia-san-sang-ai">
            <Button variant="outline" size="lg" className="rounded-xl bg-transparent text-white border-white/20 hover:bg-white/10 font-medium text-sm">
              <span>Đo Độ Sẵn Sàng (12 Câu)</span>
            </Button>
          </Link>
        </div>

        {/* Minimal Footer Contact Info */}
        <div className="flex items-center gap-4 text-xs font-mono text-[#737373] pt-8">
          <span>contact@sunext.vn</span>
          <span>·</span>
          <span>Phản hồi trong 2 giờ</span>
        </div>
      </div>
    </section>
  );
}
