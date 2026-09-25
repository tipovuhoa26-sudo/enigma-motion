'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';

export function CtaFooter() {
  return (
    <section
      id="contact"
      className="relative w-full py-28 sm:py-36 px-6 md:px-12 flex flex-col items-center justify-center bg-[#07060A] text-white border-t border-[#1C1829] text-center"
      data-cta-footer
    >
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-xl mx-auto">
        
        {/* Eyebrow */}
        <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#A1A1AA] font-semibold">
          BƯỚC TIẾP THEO
        </span>

        {/* Quiet, Confident Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-light tracking-tight text-white leading-tight">
          Bài toán nào nên bắt đầu trước?
        </h2>

        {/* Supporting Line */}
        <p className="text-base sm:text-lg text-[#94A3B8] max-w-lg leading-relaxed font-light">
          Đánh giá 12 câu hỏi để định vị điểm nghẽn, hoặc trao đổi 30 phút cùng Sunext về bài toán vận hành thực tế.
        </p>

        {/* Two Clear Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <Link href="/danh-gia-san-sang-ai">
            <Button variant="orange" size="lg" className="rounded-xl font-medium text-sm shadow-sm cursor-pointer">
              <span>Đo độ sẵn sàng (12 câu)</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>

          <Link href="/#contact">
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl bg-transparent text-white border-white/20 hover:bg-white/10 hover:border-white/40 font-medium text-sm transition-colors"
            >
              <span>Trao đổi 30 phút</span>
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
