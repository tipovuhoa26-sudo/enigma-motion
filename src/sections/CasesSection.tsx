'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';

export function CasesSection() {
  const [activeCase, setActiveCase] = useState<'vinhomes' | 'bidv'>('vinhomes');

  return (
    <section
      id="cases"
      className="relative w-full py-20 sm:py-28 px-6 md:px-12 lg:px-20 bg-[#F9F9F8] border-b border-[#E7E7E5] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Header (≤ 7 words) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#581C87] font-semibold mb-2 block">
              Hiệu Quả Thực Tế · Before ➔ After
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[#0A0A0A] leading-tight">
              Đo lường trên <span className="font-normal text-[#0A0A0A]">kết quả vận hành.</span>
            </h2>
          </div>

          {/* Minimal Case Switcher */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveCase('vinhomes')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeCase === 'vinhomes'
                  ? 'bg-[#0A0A0A] text-white shadow-xs'
                  : 'bg-white text-[#747474] border border-[#E7E7E5] hover:bg-[#F3F4F6]'
              }`}
            >
              01 · Vinhomes Green Paradise
            </button>
            <button
              type="button"
              onClick={() => setActiveCase('bidv')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeCase === 'bidv'
                  ? 'bg-[#0A0A0A] text-white shadow-xs'
                  : 'bg-white text-[#747474] border border-[#E7E7E5] hover:bg-[#F3F4F6]'
              }`}
            >
              02 · Ngân Hàng BIDV
            </button>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* 1 FLAGSHIP CASE: BEFORE ➔ AFTER WITH 1 MONUMENTAL METRIC */}
        {/* ==================================================================== */}
        {activeCase === 'vinhomes' ? (
          <div className="w-full bg-white rounded-2xl border border-[#E7E7E5] p-6 sm:p-10 shadow-xs">
            
            {/* Case Title & Scope */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E7E7E5] mb-8">
              <div>
                <span className="text-xs font-mono text-[#581C87] font-semibold block mb-1">
                  CASE VINHOMES GREEN PARADISE
                </span>
                <h3 className="text-xl sm:text-2xl font-light text-[#0A0A0A]">
                  500+ Môi Giới BĐS Làm Chủ AI
                </h3>
              </div>
              <div className="text-xs font-mono text-[#747474] bg-[#F8F8F6] px-3 py-1.5 rounded-lg border border-[#E7E7E5] self-start sm:self-auto">
                Bất động sản · Sales Enablement
              </div>
            </div>

            {/* Before ➔ After Side-by-Side Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-10">
              
              {/* BEFORE (Muted Gray / Friction) */}
              <div className="p-6 rounded-xl bg-[#FAF8F6] border border-[#EBE8E1] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#747474] uppercase mb-4">
                    <Clock className="w-3.5 h-3.5 text-[#747474]" />
                    <span>TRƯỚC KHI CÓ AI (BEFORE)</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-light text-[#747474] tracking-tight mb-4">
                    24 giờ
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-[#747474]">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold mt-0.5">✕</span>
                      <span>Tra cứu giỏ hàng phân tán và tính lịch trả góp thủ công bằng Excel.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold mt-0.5">✕</span>
                      <span>Chờ đợi đội ngũ thiết kế media dự án, mất cơ hội chốt khách nóng.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold mt-0.5">✕</span>
                      <span>Quên chăm sóc khách hàng cũ, tỷ lệ kích hoạt lại dưới 15%.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* AFTER (Sunext Orange / High Efficiency) */}
              <div className="p-6 rounded-xl bg-[#FFFDF9] border border-[#FDBA74]/60 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#EA580C] uppercase mb-4">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>SAU KHI TRIỂN KHAI SUNEXT (AFTER)</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-light text-[#EA580C] tracking-tight mb-4">
                    &lt; 5 phút
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-[#0A0A0A]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#059669] font-bold mt-0.5">✓</span>
                      <span>Chatbot AI 24/7 tra cứu giỏ hàng và dự toán vay trong 30 giây.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#059669] font-bold mt-0.5">✓</span>
                      <span>Tự sinh Landing page phân khu và kịch bản video AI trong 2 phút.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#059669] font-bold mt-0.5">✓</span>
                      <span>Hệ thống tự động kích hoạt lại 70% khách cũ, gấp đôi tỷ lệ hẹn thực địa.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* 1 Big Quantifiable Metric */}
            <div className="pt-6 border-t border-[#E7E7E5] flex flex-wrap items-baseline justify-between gap-4">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl sm:text-5xl font-light tracking-tight text-[#0A0A0A] tabular-nums">
                  500+
                </span>
                <div className="text-sm font-medium text-[#0A0A0A]">
                  Môi giới BĐS làm chủ công cụ AI
                </div>
              </div>
              <div className="text-xs font-mono text-[#059669] font-semibold">
                Nghiệm thu: Tỷ lệ chuyển đổi hẹn gặp tăng 100%
              </div>
            </div>

          </div>
        ) : (
          <div className="w-full bg-white rounded-2xl border border-[#E7E7E5] p-6 sm:p-10 shadow-xs">
            
            {/* BIDV Case */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E7E7E5] mb-8">
              <div>
                <span className="text-xs font-mono text-[#006850] font-semibold block mb-1">
                  CASE NGÂN HÀNG BIDV
                </span>
                <h3 className="text-xl sm:text-2xl font-light text-[#0A0A0A]">
                  Rà Soát Điều Kiện Tín Dụng AI
                </h3>
              </div>
              <div className="text-xs font-mono text-[#747474] bg-[#F8F8F6] px-3 py-1.5 rounded-lg border border-[#E7E7E5] self-start sm:self-auto">
                Tài chính Ngân hàng · Rà soát tín dụng
              </div>
            </div>

            {/* Before ➔ After */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-10">
              
              <div className="p-6 rounded-xl bg-[#FAF8F6] border border-[#EBE8E1] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#747474] uppercase mb-4">
                    <Clock className="w-3.5 h-3.5 text-[#747474]" />
                    <span>TRƯỚC KHI CÓ AI (BEFORE)</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-light text-[#747474] tracking-tight mb-4">
                    2 ngày
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-[#747474]">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold mt-0.5">✕</span>
                      <span>Đọc hàng trăm trang hồ sơ pháp lý và sao kê tài chính phân tán.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold mt-0.5">✕</span>
                      <span>Tính toán chỉ số D/E, DSCR thủ công, dễ sai sót và mất thời gian.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#F0FDF4] border border-[#86EFAC]/60 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#006850] uppercase mb-4">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#006850]" />
                    <span>SAU KHI TRIỂN KHAI SUNEXT (AFTER)</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-light text-[#006850] tracking-tight mb-4">
                    30 phút
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-[#0A0A0A]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#059669] font-bold mt-0.5">✓</span>
                      <span>Bóc tách BCTC & sao kê tự động trong 60 giây.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#059669] font-bold mt-0.5">✓</span>
                      <span>Đối chiếu 100% checklist điều kiện cấp tín dụng và sinh tờ trình chuẩn.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* 1 Big Metric */}
            <div className="pt-6 border-t border-[#E7E7E5] flex flex-wrap items-baseline justify-between gap-4">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl sm:text-5xl font-light tracking-tight text-[#0A0A0A] tabular-nums">
                  45
                </span>
                <div className="text-sm font-medium text-[#0A0A0A]">
                  Cán bộ tín dụng & quản lý chi nhánh làm chủ quy trình
                </div>
              </div>
              <div className="text-xs font-mono text-[#006850] font-semibold">
                Nghiệm thu: 100% Khớp mẫu biểu tờ trình thẩm định
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
