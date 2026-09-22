'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CaseVinhomesSolarMesh } from '@/components/visuals/CaseVinhomesSolarMesh';
import { CaseBidvSolarMesh } from '@/components/visuals/CaseBidvSolarMesh';

export function CasesSection() {
  const [activeCase, setActiveCase] = useState<'vinhomes' | 'bidv'>('vinhomes');

  return (
    <section
      id="cases"
      className="relative w-full py-24 sm:py-36 px-6 md:px-12 lg:px-20 bg-[#F9F9F8] scroll-mt-20 border-b border-[#E7E7E5] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto">
        
        {/* 1 Headline + 1 Support Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#581C87] font-semibold mb-3 block">
              {activeCase === 'vinhomes'
                ? 'Dự án thực tế · Hệ Sinh Thái Sales Enablement'
                : 'Dự án thực tế · Thẩm Định Tín Dụng AI'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0A0A0A] leading-tight">
              {activeCase === 'vinhomes' ? (
                <>
                  Case Vinhomes Green Paradise:{' '}
                  <span className="font-normal text-[#0A0A0A] sm:whitespace-nowrap">
                    500+ Môi Giới Tự Chủ AI.
                  </span>
                </>
              ) : (
                <>
                  Case Ngân Hàng BIDV:{' '}
                  <span className="font-normal text-[#0A0A0A] sm:whitespace-nowrap">
                    Rà Soát Tín Dụng AI.
                  </span>
                </>
              )}
            </h2>
          </div>

          <p className="text-base text-[#515151] max-w-[440px] leading-relaxed font-normal">
            {activeCase === 'vinhomes'
              ? 'Đào tạo thực chiến gần 500 môi giới BĐS, thiết lập hệ thống Chatbot AI 24/7, tự sinh Landing Page phân khu và Media AI truyền thông thần tốc.'
              : 'Đào tạo 45 cán bộ tín dụng & quản lý chi nhánh, chuẩn hóa quy trình AI rà soát điều kiện vay, bóc tách BCTC và lập tờ trình thẩm định tự động.'}
          </p>
        </div>

        {/* Interactive Case Switcher Bar */}
        <div className="flex items-center gap-3 mb-6">
          <button
            type="button"
            onClick={() => setActiveCase('vinhomes')}
            className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeCase === 'vinhomes'
                ? 'bg-[#581C87] text-white shadow-xs'
                : 'bg-white text-[#515151] border border-[#E7E7E5] hover:bg-[#F3F4F6]'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${activeCase === 'vinhomes' ? 'bg-[#F97316]' : 'bg-[#9CA3AF]'}`} />
            <span>01 · VINHOMES GREEN PARADISE (500+ MÔI GIỚI BĐS)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveCase('bidv')}
            className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeCase === 'bidv'
                ? 'bg-[#006850] text-white shadow-xs'
                : 'bg-white text-[#515151] border border-[#E7E7E5] hover:bg-[#F3F4F6]'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${activeCase === 'bidv' ? 'bg-[#F97316]' : 'bg-[#9CA3AF]'}`} />
            <span>02 · NGÂN HÀNG BIDV (RÀ SOÁT TÍN DỤNG AI)</span>
          </button>
        </div>

        {/* 1 Main Visual: The Solar Time-Warp & Ecosystem Engine */}
        <div className="w-full rounded-2xl bg-white border border-[#E7E7E5] p-6 sm:p-10 mb-12 shadow-xs">
          
          {/* Header Tag */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#E7E7E5] mb-8">
            <div className="flex items-center gap-2 text-xs font-mono text-[#581C87] font-semibold">
              <span className={`w-2 h-2 rounded-full ${activeCase === 'bidv' ? 'bg-[#006850]' : 'bg-[#581C87]'}`} />
              <span className={activeCase === 'bidv' ? 'text-[#006850]' : 'text-[#581C87]'}>
                {activeCase === 'vinhomes'
                  ? 'VINHOMES GREEN PARADISE · 500+ MÔI GIỚI BĐS LÀM CHỦ AI'
                  : 'NGÂN HÀNG BIDV · 45 CÁN BỘ TÍN DỤNG LÀM CHỦ AI'}
              </span>
            </div>

            <Link
              href={
                activeCase === 'vinhomes'
                  ? '/case-studies/vinhomes-ai-sales-enablement'
                  : '/case-studies'
              }
              className="text-xs font-mono text-[#581C87] hover:underline flex items-center gap-1 font-medium"
            >
              <span>Xem hồ sơ chi tiết</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Living SVG Drawing */}
          {activeCase === 'vinhomes' ? <CaseVinhomesSolarMesh /> : <CaseBidvSolarMesh />}

        </div>

        {/* 1 Clear Proof Metric */}
        <div className="flex items-baseline gap-4 pt-2">
          <span className="text-5xl sm:text-6xl font-light tracking-tight text-[#0A0A0A] tabular-nums whitespace-nowrap">
            {activeCase === 'vinhomes' ? '500+' : '30m'}
          </span>
          <div className="flex flex-col">
            <span className="text-base font-medium text-[#0A0A0A]">
              {activeCase === 'vinhomes'
                ? 'Môi giới BĐS được đào tạo & làm chủ AI'
                : 'Rút ngắn thời gian rà soát hồ sơ vay (Gốc: 2 ngày)'}
            </span>
            <span className="text-xs font-mono text-[#747474]">
              {activeCase === 'vinhomes'
                ? 'Phản hồi khách hàng < 5 phút · Tự tạo Landing Page & Media AI tốc độ x3'
                : '45 Cán bộ tín dụng · 100% Khớp mẫu biểu tờ trình & checklist điều kiện cấp tín dụng'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
