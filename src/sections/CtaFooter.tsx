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

      {/* Subtle Purple / Orange Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-purple-600/10 via-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div
        className={`relative z-10 flex flex-col items-center gap-6 max-w-2xl transition-all duration-700 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Top Eyebrow Tag */}
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-white shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
          <span>Khởi Động Lộ Trình AI Doanh Nghiệp</span>
        </span>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
          Sẵn Sàng Đưa AI Vào Vận Hành Thực Tế?
        </h2>

        {/* Explanatory Copy */}
        <p className="text-sm md:text-base text-[#909090] max-w-lg leading-relaxed">
          Trao đổi 30 phút cùng chuyên gia Sunext để khảo sát hiện trạng, rà soát quy trình và xác định bài toán hoàn vốn nhanh nhất cho doanh nghiệp của bạn.
        </p>

        {/* CTAs: Orange Action Button + Clean Outline */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mt-3">
          <a href="mailto:contact@sunext.vn">
            <Button variant="orange" size="lg" className="rounded-full shadow-sm text-sm cursor-pointer">
              <span>Đặt Lịch Tư Vấn Ngay</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
          <Link href="/danh-gia-san-sang-ai">
            <Button variant="outline" size="lg" className="rounded-full bg-transparent text-white border-white/20 hover:bg-white/10 hover:border-white/40 font-medium text-sm">
              <Mail className="w-4 h-4 mr-2" />
              <span>Đo Độ Sẵn Sàng (12 Câu)</span>
            </Button>
          </Link>
        </div>

        {/* Trust Badges bottom */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs text-[#71717A] font-medium border-t border-white/10 w-full mt-4">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
            <span>Phản hồi trong 2 giờ</span>
          </div>
          <span>contact@sunext.vn</span>
          <span>TP. Hồ Chí Minh · Hà Nội</span>
        </div>
      </div>
    </section>
  );
}
