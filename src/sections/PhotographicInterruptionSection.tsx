'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function PhotographicInterruptionSection() {
  return (
    <section
      id="field-interruption"
      className="relative w-full py-20 sm:py-24 px-6 md:px-12 bg-[#F8F8F6] border-b border-[#E7E7E5] overflow-hidden"
      aria-label="Thực tế triển khai — Từ hệ thống đến hiện trường"
    >
      <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-10 sm:gap-12">
        
        {/* Editorial Headline */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-black/10">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#747474] font-semibold block mb-2">
              THỰC TẾ TRIỂN KHAI
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-light tracking-tight text-[#0A0A0A] leading-[1.08]">
              Từ hệ thống đến hiện trường.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#6E6E6E] font-light max-w-md leading-relaxed">
            Giá trị chỉ được xác nhận khi giải pháp đi vào công việc thực và tạo ra kết quả đo được.
          </p>
        </div>

        {/* Monumental Unboxed Documentary Photography (75-80vw presence) — No Card UI Over Photo */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] overflow-hidden bg-neutral-900 border border-black/10">
          <Image
            src="/evidence/vinhomes-sales-deployment.png"
            alt="Hiện trường đào tạo và triển khai AI tại Vinhomes với hơn 500 nhân sự"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center filter grayscale-[12%] contrast-[1.04]"
            priority
          />
        </div>

        {/* Caption & Grounded Facts Below Photo */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 text-xs sm:text-sm text-[#747474]">
          <span className="font-medium text-[#0A0A0A]">
            Vinhomes · Đội ngũ kinh doanh
          </span>
          <div className="flex items-center gap-6 text-xs font-mono">
            <span>500+ nhân sự</span>
            <span>·</span>
            <span>Phản hồi &lt; 5 phút</span>
            <span>·</span>
            <Link
              href="/case-studies/vinhomes-ai-sales-enablement"
              className="text-[#7000FF] hover:text-[#581C87] inline-flex items-center gap-1 font-sans font-medium"
            >
              <span>Xem chi tiết</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
