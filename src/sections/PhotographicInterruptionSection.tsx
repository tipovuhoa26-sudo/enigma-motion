'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function PhotographicInterruptionSection() {
  return (
    <section
      id="field-interruption"
      className="relative w-full py-24 sm:py-32 bg-[#F8F8F6] border-b border-[#E7E7E5] overflow-hidden"
      aria-label="Thực tế triển khai — Từ hệ thống đến hiện trường"
    >
      <div className="w-full flex flex-col gap-12 sm:gap-14">
        
        {/* Editorial Headline (Contained at start) */}
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-black/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#747474] font-semibold block mb-2">
              THỰC TẾ TRIỂN KHAI
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-light tracking-tight text-[#0A0A0A] leading-[1.05]">
              Từ hệ thống đến hiện trường.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#52525B] font-normal max-w-md leading-relaxed">
            Giá trị chỉ được xác nhận khi giải pháp đi vào công việc thực và tạo ra kết quả đo được.
          </p>
        </div>

        {/* ==================================================================== */}
        {/* EXPANSIVE BLEED PHOTOGRAPHY + DOMINANT NEGATIVE-SPACE METRICS        */}
        {/* Bleeds ~82vw across the screen, breaking out of uniform grid box     */}
        {/* ==================================================================== */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12 pl-6 md:pl-12 lg:pl-16 pr-0">
          
          {/* Left Column: Dominant Type + Metric Block */}
          <div className="w-full lg:w-[280px] xl:w-[320px] shrink-0 flex flex-col justify-between py-2 pr-6">
            <div className="flex flex-col gap-10">
              {/* Metric 1 */}
              <div>
                <span className="text-5xl sm:text-6xl xl:text-7xl font-light tracking-tight text-[#0A0A0A] font-mono block leading-none">
                  500+
                </span>
                <span className="text-sm font-mono text-[#52525B] mt-2 block tracking-wider uppercase font-semibold">
                  nhân sự hiện trường
                </span>
              </div>

              {/* Metric 2 */}
              <div>
                <span className="text-5xl sm:text-6xl xl:text-7xl font-light tracking-tight text-[#EA580C] font-mono block leading-none">
                  &lt; 5m
                </span>
                <span className="text-sm font-mono text-[#52525B] mt-2 block tracking-wider uppercase font-semibold">
                  thời gian phản hồi
                </span>
              </div>
            </div>

            {/* Context & Detail Link */}
            <div className="pt-8 border-t border-black/10 mt-8">
              <span className="text-sm font-medium text-[#0A0A0A] block mb-1">
                Vinhomes · Đội ngũ kinh doanh
              </span>
              <p className="text-xs text-[#71717A] mb-3 leading-relaxed">
                Đại đô thị đa phân khu · Giỏ hàng trực tuyến & đối soát tức thì.
              </p>
              <Link
                href="/case-studies/vinhomes-ai-sales-enablement"
                className="text-xs sm:text-sm font-mono font-semibold text-[#7000FF] hover:text-[#581C87] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Xem chi tiết case study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Full-Bleed 80vw Photography Crop */}
          <div className="relative flex-1 w-full min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] xl:min-h-[580px] overflow-hidden bg-neutral-900 shadow-xl">
            <Image
              src="/evidence/vinhomes-sales-deployment.png"
              alt="Hiện trường tác nghiệp live trên phần mềm AI tại Vinhomes với hơn 500 chuyên viên"
              fill
              sizes="(max-width: 1024px) 100vw, 85vw"
              className="object-cover object-center filter grayscale-[8%] contrast-[1.05]"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
}
