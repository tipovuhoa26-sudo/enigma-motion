'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ProofSection() {
  return (
    <section
      id="proof"
      className="relative w-full py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#EAE6DF] overflow-hidden"
      aria-label="Thực tế triển khai — Từ hệ thống đến hiện trường"
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-12 sm:gap-16">
        
        {/* ==================================================================== */}
        {/* 1. CHAPTER SCALE HEADLINE: TỪ HỆ THỐNG ĐẾN HIỆN TRƯỜNG                 */}
        {/* ==================================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-black/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#747474] font-semibold block mb-2 select-none">
              THỰC TẾ TRIỂN KHAI
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-light tracking-tight text-[#0A0A0A] leading-[1.08]">
              Từ hệ thống đến hiện trường.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#52525B] font-light max-w-md leading-relaxed">
            Giá trị chỉ được xác nhận khi giải pháp đi vào tác nghiệp thực và tạo ra kết quả đo được.
          </p>
        </div>

        {/* ==================================================================== */}
        {/* 2. EXPANSIVE REALITY PHOTOGRAPHY (DESATURATED & WARM GRADED)         */}
        {/* Cropped on people + projection screen, minimizing foreground chairs  */}
        {/* ==================================================================== */}
        <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[540px] xl:h-[600px] rounded-2xl overflow-hidden border border-[#EAE6DF] shadow-xs bg-[#1C1917]">
          <Image
            src="/evidence/vinhomes-sales-deployment.png"
            alt="Hiện trường tác nghiệp live trên phần mềm AI tại Vinhomes với hơn 500 chuyên viên"
            fill
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover object-[center_36%] filter saturate-[0.84] sepia-[0.06] contrast-[1.02]"
            priority
          />
          {/* Subtle gradient vignette to integrate with warm canvas */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/25 via-transparent to-black/10" />
        </div>

        {/* ==================================================================== */}
        {/* 3. METRIC + OPERATIONAL MECHANISM (SINGLE CONTINUOUS STORY)           */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-4">
          
          {/* Left: Dominant Metrics (< 5 phút & 500+ nhân sự) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              {/* Context Tag */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#747474]">
                  VINHOMES · ĐẠI ĐÔ THỊ ĐA PHÂN KHU
                </span>
              </div>

              {/* Two Dominant Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 py-2">
                
                {/* Metric 1: 500+ nhân sự */}
                <div className="flex flex-col">
                  <span className="text-5xl sm:text-6xl xl:text-7xl font-light tracking-tight text-[#0A0A0A] font-mono leading-none">
                    500+
                  </span>
                  <span className="text-sm font-mono text-[#52525B] mt-3 font-semibold uppercase tracking-wider">
                    nhân sự
                  </span>
                  <p className="text-xs sm:text-sm text-[#747474] font-light mt-1.5 leading-relaxed">
                    Môi giới làm chủ công cụ AI tại hiện trường, tỷ lệ chuyển đổi hẹn gặp khách hàng trực tiếp tăng 100%.
                  </p>
                </div>

                {/* Metric 2: < 5 phút */}
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl sm:text-6xl xl:text-7xl font-light tracking-tight text-[#EA580C] font-mono leading-none">
                      &lt; 5 phút
                    </span>
                  </div>
                  <span className="text-sm font-mono text-[#52525B] mt-3 font-semibold uppercase tracking-wider">
                    thời gian phản hồi
                  </span>
                  <p className="text-xs sm:text-sm text-[#747474] font-light mt-1.5 leading-relaxed">
                    Đối soát giỏ hàng tức thì, giảm từ 24 giờ xử lý thủ công phân tán trước đây.
                  </p>
                </div>

              </div>
            </div>

            {/* Case Study Link */}
            <div className="pt-8 border-t border-black/10 mt-8">
              <Link
                href="/case-studies/vinhomes-ai-sales-enablement"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold text-[#0A0A0A] hover:text-[#EA580C] transition-colors group cursor-pointer"
              >
                <span>Xem phân tích kiến trúc triển khai</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: Operational Mechanism (3-Step Operational Pipeline) */}
          <div className="lg:col-span-5 w-full select-none">
            <div className="w-full py-6 px-5 sm:px-6 bg-white border border-[#EAE6DF] rounded-xl shadow-xs">
              <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#747474] font-semibold block mb-6 border-b border-black/5 pb-3">
                LUỒNG TÁC NGHIỆP TỰ ĐỘNG
              </span>

              <div className="space-y-6 relative pl-1">
                {/* Connecting Vertical Track Hairline */}
                <div className="absolute top-5 bottom-5 left-[23px] w-[1px] bg-[#E4E4E7] -z-0" />

                {/* Node 01: Tiếp nhận */}
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-9 h-9 rounded-full font-mono text-xs font-semibold flex items-center justify-center shrink-0 bg-[#FAF8F5] text-[#0A0A0A] border border-[#D4D4D8]">
                    01
                  </div>
                  <div className="pt-1">
                    <div className="text-sm sm:text-base font-medium text-[#0A0A0A]">
                      Tiếp nhận yêu cầu
                    </div>
                    <div className="text-xs text-[#747474] mt-0.5 leading-relaxed">
                      Khách hàng để lại nhu cầu và phân khu quan tâm qua đa kênh.
                    </div>
                  </div>
                </div>

                {/* Node 02: AI đối soát (Muted Enterprise Aubergine) */}
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-9 h-9 rounded-full font-mono text-xs font-bold flex items-center justify-center shrink-0 bg-[#581C87] text-white shadow-xs">
                    AI
                  </div>
                  <div className="pt-1">
                    <div className="text-sm sm:text-base font-medium text-[#0A0A0A]">
                      Tra cứu &amp; đối soát
                    </div>
                    <div className="text-xs text-[#581C87] font-medium mt-0.5 leading-relaxed">
                      Đối soát giỏ hàng tức thời &amp; tự động tạo kịch bản tư vấn cá nhân hóa.
                    </div>
                  </div>
                </div>

                {/* Node 03: Phản hồi */}
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-9 h-9 rounded-full font-mono text-xs font-semibold flex items-center justify-center shrink-0 bg-[#FAF8F5] text-[#0A0A0A] border border-[#D4D4D8]">
                    03
                  </div>
                  <div className="pt-1">
                    <div className="text-sm sm:text-base font-medium text-[#0A0A0A]">
                      Phản hồi tức thì
                    </div>
                    <div className="text-xs text-[#747474] mt-0.5 leading-relaxed">
                      Chuyển tài liệu phân tích và chốt lịch hẹn tư vấn trong &lt; 5 phút.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
