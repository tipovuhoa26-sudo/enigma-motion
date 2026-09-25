'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowRight } from 'lucide-react';

export function CasesSection() {
  return (
    <section
      id="cases"
      className="relative w-full py-24 sm:py-32 px-6 md:px-12 lg:px-16 bg-[#FBFBFA] border-b border-[#E7E7E5] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Confident Heading */}
        <div className="mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#747474] font-semibold block mb-2">
            ĐO BẰNG KẾT QUẢ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-light tracking-tight text-[#0A0A0A] leading-[1.05]">
            Kết quả trong vận hành.
          </h2>
        </div>

        {/* Scene Layout: Oversized Dominant Hero Metric Left | Clean 3-Step Flow Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 xl:gap-20 items-center">
          
          {/* ================================================================== */}
          {/* LEFT COLUMN: HERO OBJECT "< 5 PHÚT" COMMANDING ~HALF VIEWPORT       */}
          {/* ================================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Client Context Badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#747474]">
                VINHOMES · ĐẠI ĐÔ THỊ ĐA PHÂN KHU
              </span>
            </div>

            {/* MONUMENTAL HERO METRIC LOCKUP: 24 GIỜ ↓ < 5 PHÚT */}
            <div className="flex flex-col gap-2 my-2 select-none">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#A1A1AA] line-through font-mono tracking-tight">
                  24 GIỜ
                </span>
                <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#EA580C] stroke-[2.5]" />
              </div>

              {/* Dominant Hero Number */}
              <div className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8.25rem] font-light tracking-tight text-[#EA580C] leading-none font-mono py-2">
                &lt; 5 PHÚT
              </div>
            </div>

            {/* Scale & Adoption Evidence */}
            <div className="pt-8 border-t border-[#E7E7E5] flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-6">
              <span className="text-4xl sm:text-5xl font-light tracking-tight text-[#0A0A0A] font-mono leading-none shrink-0">
                500+
              </span>
              <div className="flex flex-col justify-center">
                <div className="text-base sm:text-lg font-medium text-[#0A0A0A] leading-snug">
                  Môi giới làm chủ công cụ AI tại hiện trường
                </div>
                <div className="text-xs sm:text-sm text-[#747474] font-normal mt-0.5 leading-normal">
                  Nghiệm thu: Tỷ lệ chuyển đổi hẹn gặp khách hàng trực tiếp tăng 100%.
                </div>
              </div>
            </div>

            {/* Clean Enterprise Link */}
            <div className="pt-6">
              <Link
                href="/case-studies/vinhomes-ai-sales-enablement"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold text-[#0A0A0A] hover:text-[#EA580C] transition-colors group cursor-pointer"
              >
                <span>Xem phân tích kiến trúc triển khai</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

          {/* ================================================================== */}
          {/* RIGHT COLUMN: CLEAN 3-STEP OPERATIONAL FLOW                         */}
          {/* ================================================================== */}
          <div className="lg:col-span-5 w-full flex items-center justify-center lg:justify-end select-none">
            <div className="w-full max-w-[420px] py-6 px-4 bg-white border border-[#E7E7E5] rounded-2xl shadow-xs">
              
              <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#747474] font-semibold block mb-8 border-b border-black/5 pb-3">
                LUỒNG TÁC NGHIỆP TỰ ĐỘNG
              </span>

              <div className="space-y-8 relative pl-2">
                
                {/* Connecting Vertical Track Hairline */}
                <div className="absolute top-6 bottom-6 left-7 w-[1.5px] bg-[#E4E4E7] -z-0" />

                {/* Node 01 */}
                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-11 h-11 rounded-full font-mono text-xs font-semibold flex items-center justify-center shrink-0 bg-white text-[#0A0A0A] border border-[#D4D4D8] shadow-xs">
                    01
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-medium text-[#0A0A0A]">
                      Tiếp nhận yêu cầu
                    </div>
                    <div className="text-xs text-[#747474] mt-0.5">
                      Khách hàng để lại thông tin nhu cầu căn hộ
                    </div>
                  </div>
                </div>

                {/* Node 02: AI ở giữa bằng node tím */}
                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-11 h-11 rounded-full font-mono text-xs font-bold flex items-center justify-center shrink-0 bg-[#7000FF] text-white shadow-xs">
                    AI
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-medium text-[#0A0A0A]">
                      Tra cứu &amp; đối soát
                    </div>
                    <div className="text-xs text-[#7000FF] font-medium mt-0.5">
                      Đối soát giỏ hàng &amp; soạn kịch bản cá nhân hóa
                    </div>
                  </div>
                </div>

                {/* Node 03 */}
                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-11 h-11 rounded-full font-mono text-xs font-semibold flex items-center justify-center shrink-0 bg-white text-[#0A0A0A] border border-[#D4D4D8] shadow-xs">
                    03
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-medium text-[#0A0A0A]">
                      Phản hồi
                    </div>
                    <div className="text-xs text-[#747474] mt-0.5">
                      Gửi tài liệu và lịch hẹn trong vòng 5 phút
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
