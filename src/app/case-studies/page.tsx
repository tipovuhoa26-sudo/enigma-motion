'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { CASES_DATA } from '@/content/data';

// Map delivery models to cases with real evidence photography
const CASE_DELIVERY_TAGS: Record<string, { tag: string; statusBadge: string; clientShort: string; primaryMetric: string; primaryLabel: string; evidenceImage: string }> = {
  'vietcap-ai-multi-agent-nghien-cuu-thi-truong': {
    tag: 'CUSTOM AGENT',
    statusBadge: 'LAB PROTOTYPE · CUSTOM AGENT',
    clientShort: 'VIETCAP',
    primaryMetric: '−75%',
    primaryLabel: 'thời gian xử lý dữ liệu thô',
    evidenceImage: '/evidence/vietcombank-strategic-workshop.jpg',
  },
  'vinhomes-ai-sales-enablement': {
    tag: 'SALES ENABLEMENT',
    statusBadge: 'PRODUCTION · SALES ENABLEMENT',
    clientShort: 'VINHOMES',
    primaryMetric: '< 5 phút',
    primaryLabel: 'thời gian phản hồi thông tin & giỏ hàng',
    evidenceImage: '/evidence/vinhomes-sales-deployment.png',
  },
  'dentsu-ai-pitch-deck-automation': {
    tag: 'WORKFLOW AUTOMATION',
    statusBadge: 'PRODUCTION · WORKFLOW AUTOMATION',
    clientShort: 'DENTSU',
    primaryMetric: '−65%',
    primaryLabel: 'thời gian phát triển proposal đấu thầu',
    evidenceImage: '/evidence/dentsu-marketing-ai-lab.png',
  },
  'ai-auditor-manufacturing': {
    tag: 'COMPUTER VISION',
    statusBadge: 'PRODUCTION · COMPUTER VISION',
    clientShort: 'CƠ KHÍ CHÍNH XÁC',
    primaryMetric: '99.8%',
    primaryLabel: 'độ chính xác kiểm định bề mặt 24/7',
    evidenceImage: '/evidence/ptexim-operations-onsite.png',
  },
  'toi-uu-chi-phi-tuyen-dung-hr-ai': {
    tag: 'HR AGENT',
    statusBadge: 'PRODUCTION · HR WORKFLOW',
    clientShort: 'CHUỖI BÁN LẺ',
    primaryMetric: '3N ➔ 2H',
    primaryLabel: 'thời gian sàng lọc CV ứng viên',
    evidenceImage: '/evidence/prudential-consultant-enablement.png',
  },
  'phuong-truong-an-video-ai-hien-truong': {
    tag: 'FIELD VIDEO AI',
    statusBadge: 'PRODUCTION · FIELD VIDEO AI',
    clientShort: 'PHƯƠNG TRƯỜNG AN',
    primaryMetric: '+200%',
    primaryLabel: 'sản lượng video tiến độ thực tế',
    evidenceImage: '/evidence/phuong-truong-an-sales.png',
  },
  'fpt-university-ai-event-agents': {
    tag: 'CAMPUS AI AGENTS',
    statusBadge: 'PRODUCTION · CAMPUS AGENTS',
    clientShort: 'ĐẠI HỌC FPT',
    primaryMetric: '10.000+',
    primaryLabel: 'lượt tương tác sinh viên & chuyên gia',
    evidenceImage: '/evidence/nttu-academic-ai.png',
  },
  'content-factory-b2b-marketing': {
    tag: 'CONTENT FACTORY',
    statusBadge: 'PRODUCTION · CONTENT FACTORY',
    clientShort: 'DỊCH VỤ B2B',
    primaryMetric: 'x5 lần',
    primaryLabel: 'tốc độ xuất bản SOP & tài liệu nội bộ',
    evidenceImage: '/evidence/tayninh-executive-session.jpg',
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
          <section className="max-w-4xl mb-16">
            {/* Eyebrow -> 8-12px -> Sublabel */}
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#7000FF] font-semibold block">
                BẰNG CHỨNG XÁC THỰC
              </span>
              <span className="text-xs text-[#747474] font-medium block mt-2">
                Hồ sơ kết quả kinh doanh đo được bằng con số thật
              </span>
            </div>

            {/* Context block -> 44-64px -> H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-[1.18] mt-12">
              Kết quả kinh doanh đo được bằng con số thật
            </h1>

            {/* Heading -> 20-28px -> Body */}
            <p className="text-base sm:text-lg text-[#626262] font-light leading-relaxed max-w-3xl mt-6">
              Nơi minh chứng thực tế thay thế những tuyên bố trừu tượng. Mỗi đề án được đo lường bằng bài toán P&L cụ thể, tỷ lệ ứng dụng của người dùng cuối và tác động vận hành thực tế.
            </p>
          </section>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar border-b border-black/5">
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

          {/* Metric-First Archive Cards Grid: Client -> Badge -> Photo -> Metric -> CTA */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {filteredCases.map((item) => {
              const meta = CASE_DELIVERY_TAGS[item.slug] || {
                tag: 'AI SOLUTION',
                statusBadge: 'PRODUCTION · AI AGENT',
                clientShort: (item.client || item.title).toUpperCase(),
                primaryMetric: item.metrics?.[0]?.value || 'ROI',
                primaryLabel: item.metrics?.[0]?.label || 'hiệu quả vận hành',
                evidenceImage: '/evidence/vinhomes-sales-deployment.png',
              };

              return (
                <Link
                  key={item.id}
                  href={`/case-studies/${item.slug}`}
                  className="group bg-white rounded-3xl border border-[#E8E8E8] hover:border-[#17151A] p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Top: Client Name & Status Badge */}
                    <div className="pb-3 border-b border-black/5 mb-4">
                      <span className="text-xs font-mono font-bold tracking-wider text-[#17151A] block uppercase">
                        {meta.clientShort}
                      </span>
                      <span className="text-[10px] font-mono text-[#7000FF] block mt-1 tracking-tight">
                        {meta.statusBadge}
                      </span>
                    </div>

                    {/* Real Authentic Photo */}
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-100 border border-black/5 mb-5">
                      <Image
                        src={meta.evidenceImage}
                        alt={meta.clientShort}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover saturate-[0.92] group-hover:scale-103 transition-transform duration-500"
                      />
                    </div>

                    {/* Big Metric Display */}
                    <div className="py-2">
                      <span className="text-3xl sm:text-4xl font-light font-mono text-[#EA580C] block tracking-tight leading-none">
                        {meta.primaryMetric}
                      </span>
                      <span className="text-xs text-[#515151] block mt-2 leading-snug font-light">
                        {meta.primaryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Link Action */}
                  <div className="pt-4 mt-6 border-t border-black/5 flex items-center justify-between text-xs font-medium text-[#17151A]">
                    <span className="text-[#747474] group-hover:text-[#17151A] transition-colors">
                      Xem case
                    </span>
                    <div className="w-6 h-6 rounded-full bg-[#FAF5FF] group-hover:bg-[#17151A] text-[#7000FF] group-hover:text-white flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </section>
        </main>

        <Footer />
    </div>
  );
}
