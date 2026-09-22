'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowDown } from 'lucide-react';

export function CasesSection() {
  return (
    <section
      id="cases"
      className="relative w-full py-28 sm:py-36 px-6 md:px-12 lg:px-20 bg-[#F9F9F8] border-b border-[#E7E7E5] overflow-hidden"
    >
      {/* Background Soft Atmospheric Ambient Glow */}
      <div 
        className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[540px] h-[540px] rounded-full pointer-events-none -z-0 opacity-45"
        style={{
          background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, rgba(105,64,190,0.03) 45%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Confident Heading */}
        <div className="mb-16 sm:mb-24">
          <span className="text-xs font-mono uppercase tracking-wider text-[#581C87] font-semibold mb-3 block">
            Hiệu Quả Thực Tế
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-light tracking-tight text-[#0A0A0A] leading-tight">
            Đo lường trên kết quả vận hành.
          </h2>
        </div>

        {/* Scene Layout: Left Before ➔ After Narrative | Right Living Workflow Morph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: VINHOMES · 24 GIỜ ➔ < 5 PHÚT · 500+ MÔI GIỚI */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F97316]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#581C87]">
                VINHOMES GREEN PARADISE
              </span>
            </div>

            {/* Before ➔ After Vertical Flow */}
            <div className="space-y-4 mb-8">
              <div>
                <span className="text-xs font-mono text-[#747474] uppercase tracking-wider block mb-1">
                  Trước khi có AI (Before)
                </span>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#A3A3A3] line-through decoration-red-400/60 tabular-nums">
                  24 GIỜ
                </div>
              </div>

              <div className="flex items-center gap-3 pl-2 py-1 text-[#F97316]">
                <ArrowDown className="w-5 h-5 animate-bounce" />
                <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#EA580C]">
                  Sunext AI Enablement
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-[#EA580C] uppercase tracking-wider block mb-1">
                  Sau khi triển khai (After)
                </span>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-light text-[#EA580C] tracking-tight tabular-nums">
                  &lt; 5 PHÚT
                </div>
              </div>
            </div>

            {/* 1 Dominant Proof Metric */}
            <div className="pt-6 border-t border-[#E7E7E5] flex items-baseline gap-4 mb-8">
              <span className="text-5xl sm:text-6xl font-light tracking-tight text-[#0A0A0A] tabular-nums">
                500+
              </span>
              <div>
                <div className="text-base sm:text-lg font-medium text-[#0A0A0A]">
                  Môi giới làm chủ AI
                </div>
                <div className="text-xs text-[#747474] font-normal mt-0.5">
                  Nghiệm thu: Tỷ lệ chuyển đổi hẹn gặp khách hàng tăng 100%.
                </div>
              </div>
            </div>

            {/* Optional Clean Link */}
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#0A0A0A] hover:text-[#F97316] transition-colors group cursor-pointer"
            >
              <span>Xem phân tích kiến trúc triển khai</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

          </div>

          {/* Right Column: Animated Operational Flow (LEAD ➔ AI ➔ RESPONSE) */}
          <div className="lg:col-span-6 w-full flex items-center justify-center select-none">
            <div className="w-full max-w-[520px] p-6 sm:p-8 rounded-2xl bg-white border border-[#E7E7E5] shadow-xs relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E7E7E5] text-xs font-mono text-[#747474]">
                <span>LUỒNG XỬ LÝ THỰC TẾ</span>
                <span className="text-[#059669] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
                  Live System
                </span>
              </div>

              {/* Vertical Flow Diagram */}
              <div className="space-y-4 relative">
                
                {/* Connecting Vertical Laser Line */}
                <div className="absolute top-6 bottom-6 left-6 w-[2px] bg-[#E7E7E5] -z-0">
                  <div className="w-full h-1/2 bg-gradient-to-b from-[#581C87] to-[#F97316] animate-pulse" />
                </div>

                {/* Step 1: LEAD */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#F5F3FF] border border-[#DDD6FE] text-[#581C87] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    01
                  </div>
                  <div className="flex-1 p-3.5 rounded-xl bg-[#F9F9F8] border border-[#E7E7E5]">
                    <div className="text-xs font-mono font-bold text-[#581C87] uppercase">LEAD INPUT</div>
                    <div className="text-sm font-medium text-[#0A0A0A]">Khách quan tâm phân khu & dự toán vay</div>
                  </div>
                </div>

                {/* Step 2: AI ENGINE */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#FFF7ED] border border-[#FDBA74] text-[#EA580C] font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-sm shadow-orange-500/10">
                    AI
                  </div>
                  <div className="flex-1 p-3.5 rounded-xl bg-orange-50/50 border border-orange-200/80">
                    <div className="text-xs font-mono font-bold text-[#EA580C] uppercase">SUNEXT AI CO-WORKER</div>
                    <div className="text-sm font-medium text-[#0A0A0A]">Tra cứu giỏ hàng ERP & tính bảng trả góp (30 giây)</div>
                  </div>
                </div>

                {/* Step 3: RESPONSE */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <div className="flex-1 p-3.5 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0]">
                    <div className="text-xs font-mono font-bold text-[#059669] uppercase">RESPONSE OUTPUT</div>
                    <div className="text-sm font-medium text-[#0A0A0A]">Gửi báo giá & kịch bản tư vấn hoàn chỉnh (&lt; 5m)</div>
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
