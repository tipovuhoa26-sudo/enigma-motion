'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function PhotographicInterruptionSection() {
  return (
    <section
      id="field-interruption"
      className="relative w-full py-20 sm:py-28 px-6 md:px-12 bg-[#F8F8F6] border-b border-[#E7E7E5] overflow-hidden"
      aria-label="Photographic Documentary Interruption — Từ Hệ Thống Đến Hiện Trường"
    >
      <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-10 sm:gap-14">
        
        {/* Editorial Headline */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-black/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#EA580C] font-semibold">
                DOCUMENTARY PROOF · THỰC TẾ TRIỂN KHAI
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-light tracking-tight text-[#0A0A0A] leading-[1.06]">
              Từ hệ thống đến hiện trường.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#6E6E6E] font-light max-w-md leading-relaxed">
            Không có chuyển đổi AI nào thành công trên slide thuyết trình. Mọi giá trị thật đều được chứng minh tại hiện trường tác nghiệp của đội ngũ.
          </p>
        </div>

        {/* Monumental Unboxed Documentary Photography (75-80vw presence) */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] overflow-hidden bg-neutral-900 border border-black/10 shadow-sm">
          <Image
            src="/evidence/vinhomes-sales-deployment.png"
            alt="Hiện trường đào tạo và triển khai AI tại Vinhomes với hơn 500 nhân sự"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center filter grayscale-[18%] contrast-[1.05] hover:grayscale-0 transition-all duration-700"
            priority
          />

          {/* Subtle Live Session Watermark Badge */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3.5 py-1.5 rounded bg-black/75 backdrop-blur-md border border-white/10 text-white flex items-center gap-2 font-mono text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-wider">ONSITE EXECUTIVE WORKSHOP · VINHOMES SALES</span>
          </div>
        </div>

        {/* Fact Sheet: 3 Clean Grounded Realities Below Photo */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4">
          <div className="border-l-2 border-[#EA580C] pl-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#747474] block mb-1">
              ĐỊA BÀN TRIỂN KHAI
            </span>
            <span className="text-xl sm:text-2xl font-light text-[#0A0A0A] block">
              Vinhomes Green Paradise
            </span>
            <span className="text-xs text-[#6E6E6E] font-light mt-1 block">
              Đại đô thị · Hơn 10.000 căn hộ &amp; biệt thự
            </span>
          </div>

          <div className="border-l-2 border-[#7000FF] pl-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#747474] block mb-1">
              QUY MÔ NHÂN SỰ
            </span>
            <span className="text-xl sm:text-2xl font-light text-[#0A0A0A] block">
              500+ Môi giới thực chiến
            </span>
            <span className="text-xs text-[#6E6E6E] font-light mt-1 block">
              Làm chủ tác tử AI hỗ trợ tư vấn trên mobile
            </span>
          </div>

          <div className="border-l-2 border-emerald-600 pl-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#747474] block mb-1">
              TỐC ĐỘ PHẢN HỒI
            </span>
            <span className="text-xl sm:text-2xl font-light text-emerald-700 font-mono block">
              &lt; 5 Phút
            </span>
            <span className="text-xs text-[#6E6E6E] font-light mt-1 block">
              Đối soát giỏ hàng &amp; soạn kịch bản cá nhân hóa
            </span>
          </div>
        </div>

        {/* Deep Dive Action Link */}
        <div className="flex justify-end pt-2">
          <Link
            href="/case-studies/vinhomes-ai-sales-enablement"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#EA580C] hover:text-[#C2410C] transition-colors"
          >
            <span>ĐỌC TOÀN VĂN CASE STUDY VINHOMES</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
