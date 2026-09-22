'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Filter, ShieldCheck, Sparkles } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { CASES_DATA } from '@/content/data';

// Map delivery models to cases
const CASE_DELIVERY_TAGS: Record<string, { tag: string; clientShort: string; primaryMetric: string; primaryLabel: string }> = {
  'vietcap-ai-multi-agent-nghien-cuu-thi-truong': {
    tag: 'Custom Agent · Lab',
    clientShort: 'VIETCAP',
    primaryMetric: '−75%',
    primaryLabel: 'Thời gian bóc tách BCTC thô',
  },
  'vinhomes-ai-sales-enablement': {
    tag: 'Sales Co-Pilot · Enterprise',
    clientShort: 'VINHOMES',
    primaryMetric: '< 1.5s',
    primaryLabel: 'Tra cứu bảng hàng & chính sách 24/7',
  },
  'dentsu-ai-pitch-deck-automation': {
    tag: 'Pitch Engine · Pilot',
    clientShort: 'DENTSU',
    primaryMetric: '−65%',
    primaryLabel: 'Thời gian hoàn thiện thầu RFP',
  },
  'ai-auditor-manufacturing': {
    tag: 'Computer Vision · Enterprise',
    clientShort: 'CƠ KHÍ CHÍNH XÁC',
    primaryMetric: '99.8%',
    primaryLabel: 'Độ chính xác kiểm định bề mặt 24/7',
  },
  'toi-uu-chi-phi-tuyen-dung-hr-ai': {
    tag: 'HR Automation · Dept OS',
    clientShort: 'CHUỖI BÁN LẺ',
    primaryMetric: '3N ➔ 2H',
    primaryLabel: 'Rút ngắn thời gian sàng lọc CV',
  },
  'phuong-truong-an-video-ai-hien-truong': {
    tag: 'Field Studio AI · Training',
    clientShort: 'PHƯƠNG TRƯỜNG AN',
    primaryMetric: '+200%',
    primaryLabel: 'Sản lượng video tiến độ thực tế',
  },
  'fpt-university-ai-event-agents': {
    tag: 'Campus Agents · Event',
    clientShort: 'ĐẠI HỌC FPT',
    primaryMetric: '10.000+',
    primaryLabel: 'Lượt tương tác sinh viên & doanh nghiệp',
  },
  'content-factory-b2b-marketing': {
    tag: 'Content Engine · Pilot',
    clientShort: 'DỊCH VỤ B2B',
    primaryMetric: 'x5 Lần',
    primaryLabel: 'Tốc độ xuất bản SOP nội bộ',
  },
};

export default function CaseStudiesIndexPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Tất cả dự án' },
    { id: 'Chứng Khoán & Đầu Tư', name: 'Tài chính & Đầu tư' },
    { id: 'Bất Động Sản & Nhà Phố', name: 'Bất động sản' },
    { id: 'Sản Xuất & Chế Tạo', name: 'Sản xuất' },
    { id: 'Bán Lẻ & FMCG', name: 'Bán lẻ & FMCG' },
    { id: 'Truyền Thông & Sáng Tạo', name: 'Truyền thông & B2B' },
  ];

  const filteredCases = activeCategory === 'all'
    ? CASES_DATA
    : CASES_DATA.filter((c) => {
        if (activeCategory === 'Truyền Thông & Sáng Tạo') {
          return c.category === 'Truyền Thông & Sáng Tạo' || c.category === 'Dịch Vụ B2B' || c.category === 'Giáo Dục & Công Nghệ';
        }
        return c.category === activeCategory;
      });

  return (
    <div className="w-full min-h-screen flex flex-col sunext-atmospheric-canvas">
      <Header activeSection="service" />

      <main className="flex-1 flex flex-col w-full max-w-[1280px] mx-auto px-6 md:px-12 py-12 lg:py-16">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-black/5">
            <nav className="flex items-center gap-2 text-xs text-[#6E6E6E]">
              <Link href="/" className="hover:text-[#111111] transition-colors">
                Trang chủ
              </Link>
              <span>/</span>
              <span className="text-[#111111] font-medium">Bằng chứng thực tế</span>
            </nav>

            <div className="flex items-center gap-2 text-xs text-[#7000FF] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
              <span>METRIC-FIRST ARCHIVE</span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#7000FF] font-semibold block mb-2">
              EVIDENCE LIBRARY · BẰNG CHỨNG ĐÃ ĐO LƯỜNG
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-tight">
              Kết quả kinh doanh đo được bằng con số thật
            </h1>
            <p className="text-base text-[#626262] mt-4 leading-relaxed font-light">
              Nơi proof thắng visual decoration. Mỗi case study được thẩm định qua 7 tầng kiểm soát chặt chẽ:
              từ bài toán kinh tế, kiến trúc agent đến KPI vận hành, tỷ lệ áp dụng và tác động P&L.
            </p>

            {/* 7-Step Case Architecture Ribbon */}
            <div className="mt-6 p-3 rounded-xl bg-[#FAF5FF] border border-[#EDE9FE] flex items-center gap-2 overflow-x-auto text-[11px] font-mono text-[#515151] no-scrollbar">
              <span className="text-[#7000FF] font-bold shrink-0">FRAMEWORK:</span>
              <span className="shrink-0">Problem</span>
              <span className="text-[#7000FF]">→</span>
              <span className="shrink-0">Intervention</span>
              <span className="text-[#7000FF]">→</span>
              <span className="shrink-0">Architecture</span>
              <span className="text-[#7000FF]">→</span>
              <span className="shrink-0 text-[#17151A] font-medium">Operational Metric</span>
              <span className="text-[#7000FF]">→</span>
              <span className="shrink-0">Adoption</span>
              <span className="text-[#7000FF]">→</span>
              <span className="shrink-0 text-[#EA580C] font-bold">Business Impact</span>
              <span className="text-[#7000FF]">→</span>
              <span className="shrink-0">Governance</span>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar border-b border-black/5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#17151A] text-white shadow-xs'
                      : 'bg-white border border-[#E8E8E8] text-[#515151] hover:text-[#17151A]'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Metric-First Archive Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {filteredCases.map((item) => {
              const meta = CASE_DELIVERY_TAGS[item.slug] || {
                tag: 'AI Solution · Pilot',
                clientShort: (item.client || item.title).toUpperCase(),
                primaryMetric: item.metrics?.[0]?.value || 'ROI',
                primaryLabel: item.metrics?.[0]?.label || 'Hiệu quả vận hành',
              };

              return (
                <Link
                  key={item.id}
                  href={`/case-studies/${item.slug}`}
                  className="group bg-white rounded-2xl border border-[#E8E8E8] hover:border-[#17151A] p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Subtle top indicator line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#EA580C] transition-colors" />

                  {/* Top: Client & Delivery Tag */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono font-bold tracking-wider text-[#17151A] uppercase">
                        {meta.clientShort}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[#FAF5FF] border border-[#EDE9FE] text-[10px] font-mono text-[#7000FF] font-medium">
                        {meta.tag}
                      </span>
                    </div>

                    <h3 className="text-sm font-medium text-[#17151A] group-hover:text-[#7000FF] transition-colors line-clamp-2 leading-snug mb-4">
                      {item.title}
                    </h3>

                    {/* Node & Thin Line Primitive */}
                    <div className="flex items-center gap-2 my-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] shrink-0" />
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-[#EA580C]/40 to-[#7000FF]/20" />
                      <span className="text-[10px] font-mono text-[#747474] uppercase tracking-wider">
                        {item.category.split('&')[0].trim()}
                      </span>
                    </div>

                    {/* Big Metric Display */}
                    <div className="py-2">
                      <span className="text-3xl sm:text-4xl font-light font-mono text-[#EA580C] block tracking-tight leading-none">
                        {meta.primaryMetric}
                      </span>
                      <span className="text-xs text-[#515151] block mt-1.5 leading-snug">
                        {meta.primaryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="pt-4 mt-4 border-t border-black/5 flex items-center justify-between text-xs text-[#17151A] font-medium">
                    <span className="text-[#747474] group-hover:text-[#17151A] transition-colors">
                      Xem kiến trúc &amp; kết quả
                    </span>
                    <div className="w-6 h-6 rounded-full bg-[#FAF5FF] group-hover:bg-[#17151A] text-[#7000FF] group-hover:text-white flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </main>

        <Footer />
    </div>
  );
}
