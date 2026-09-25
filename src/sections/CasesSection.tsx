'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CasesSection() {
  return (
    <section
      id="cases"
      className="relative w-full py-20 sm:py-28 px-6 md:px-12 bg-[#F9F9F8] border-b border-[#E7E7E5] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Confident Heading */}
        <div className="mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-light tracking-tight text-[#0A0A0A] leading-[1.08]">
            Kết quả trong vận hành.
          </h2>
        </div>

        {/* Scene Layout: Left 3-Tier Narrative | Right Living Minimal Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Client Context + Metric + Scale */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Level 1: Client Context */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-[#747474]">
                Vinhomes · Dự án đại đô thị
              </span>
            </div>

            {/* Level 2: Core Transformation Metric (24 giờ → < 5 phút) */}
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap mb-8">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#A3A3A3] tabular-nums leading-none">
                24 giờ
              </span>
              <div className="flex items-center justify-center text-[#EA580C]">
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 stroke-[2.2]" />
              </div>
              <span className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight tabular-nums text-[#EA580C] leading-none">
                &lt; 5 phút
              </span>
            </div>

            {/* Level 3: Scale & Operational Proof */}
            <div className="pt-6 border-t border-[#E7E7E5] flex items-center gap-5 sm:gap-6 mb-8">
              <span className="text-5xl sm:text-6xl font-light tracking-tight text-[#0A0A0A] tabular-nums shrink-0 leading-none">
                500+
              </span>
              <div className="flex flex-col justify-center">
                <div className="text-base sm:text-lg font-medium text-[#0A0A0A] leading-snug">
                  Môi giới làm chủ AI
                </div>
                <div className="text-xs sm:text-sm text-[#747474] font-normal mt-1 leading-normal">
                  Nghiệm thu: Tỷ lệ chuyển đổi hẹn gặp khách hàng tăng 100%.
                </div>
              </div>
            </div>

            {/* Clean Enterprise Link */}
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#0A0A0A] hover:text-[#EA580C] transition-colors group cursor-pointer"
            >
              <span>Xem phân tích kiến trúc triển khai</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

          </div>

          {/* Right Column: Clean 3-Step Flow Pipeline */}
          <div className="lg:col-span-6 w-full flex items-center justify-center select-none">
            <div className="w-full max-w-[380px] py-4 px-2 relative">
              
              <div className="space-y-10 relative pl-2">
                
                {/* Connecting Vertical Track Hairline */}
                <div className="absolute top-6 bottom-6 left-8 w-[1.5px] bg-[#E4E4E7] -z-0" />

                {/* Node 01 */}
                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-12 h-12 rounded-full font-mono text-sm font-semibold flex items-center justify-center shrink-0 bg-white text-[#0A0A0A] border border-[#D4D4D8] shadow-xs">
                    01
                  </div>
                  <div>
                    <div className="text-base font-medium text-[#0A0A0A]">
                      Tiếp nhận yêu cầu
                    </div>
                    <div className="text-xs text-[#747474] mt-0.5">
                      Khách hàng để lại thông tin nhu cầu căn hộ
                    </div>
                  </div>
                </div>

                {/* Node 02: AI ở giữa bằng node tím */}
                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-12 h-12 rounded-full font-mono text-xs font-bold flex items-center justify-center shrink-0 bg-[#7000FF] text-white shadow-xs">
                    AI
                  </div>
                  <div>
                    <div className="text-base font-medium text-[#0A0A0A]">
                      Tra cứu &amp; đối soát
                    </div>
                    <div className="text-xs text-[#7000FF] font-medium mt-0.5">
                      Đối soát giỏ hàng &amp; soạn kịch bản cá nhân hóa
                    </div>
                  </div>
                </div>

                {/* Node 03 */}
                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-12 h-12 rounded-full font-mono text-sm font-semibold flex items-center justify-center shrink-0 bg-white text-[#0A0A0A] border border-[#D4D4D8] shadow-xs">
                    03
                  </div>
                  <div>
                    <div className="text-base font-medium text-[#0A0A0A]">
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
