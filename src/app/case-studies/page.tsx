'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { CASES_DATA } from '@/content/data';

interface CaseDetailMeta {
  tag: string;
  statusBadge: string;
  isLabPrototype?: boolean;
  clientShort: string;
  primaryMetric: string;
  primaryLabel: string;
  evidenceImage: string;
  headline: string;
}

const CASE_DELIVERY_TAGS: Record<string, CaseDetailMeta> = {
  'vinhomes-ai-sales-enablement': {
    tag: 'SALES ENABLEMENT',
    statusBadge: 'PRODUCTION · CUSTOM AGENT',
    clientShort: 'VINHOMES',
    primaryMetric: '< 5 phút',
    primaryLabel: 'Thời gian phản hồi thông tin & giỏ hàng',
    evidenceImage: '/evidence/vinhomes-sales-deployment.png',
    headline: 'AI Sales Enablement & Lead Reactivation cho 500+ môi giới thực địa.',
  },
  'ai-auditor-manufacturing': {
    tag: 'COMPUTER VISION',
    statusBadge: 'PRODUCTION',
    clientShort: 'CƠ KHÍ CHÍNH XÁC',
    primaryMetric: '99.8%',
    primaryLabel: 'Độ chính xác kiểm định bề mặt 24/7',
    evidenceImage: '/evidence/tayninh-executive-session.jpg',
    headline: 'Computer Vision Agent giám sát lỗi chuyền máy tự động.',
  },
  'dentsu-ai-pitch-deck-automation': {
    tag: 'WORKFLOW AUTOMATION',
    statusBadge: 'PRODUCTION',
    clientShort: 'DENTSU SPORTS & CREATIVE',
    primaryMetric: '−65%',
    primaryLabel: 'Thời gian phát triển proposal đấu thầu',
    evidenceImage: '/evidence/dentsu-marketing-ai-lab.png',
    headline: 'Chuẩn hóa quy trình AI dựng storyline pitching & hồ sơ thầu quốc tế.',
  },
  'vietcap-ai-multi-agent-nghien-cuu-thi-truong': {
    tag: 'CUSTOM AGENT',
    statusBadge: 'LAB PROTOTYPE · CUSTOM AGENT',
    isLabPrototype: true,
    clientShort: 'VIETCAP SECURITIES',
    primaryMetric: '−75%',
    primaryLabel: 'Thời gian bóc tách BCTC thô',
    evidenceImage: '/evidence/vietcombank-strategic-workshop.jpg',
    headline: 'Hệ thống Multi-Agent đối chiếu dữ liệu tài chính & Single Source of Truth.',
  },
  'toi-uu-chi-phi-tuyen-dung-hr-ai': {
    tag: 'HR AGENT',
    statusBadge: 'PRODUCTION',
    clientShort: 'CHUỖI BÁN LẺ 500+ NHÂN SỰ',
    primaryMetric: '3N → 2H',
    primaryLabel: 'Thời gian sàng lọc hồ sơ CV mùa vụ',
    evidenceImage: '/evidence/ptexim-operations-onsite.png',
    headline: 'Agent sàng lọc CV tự động tích hợp hệ thống ATS tuyển dụng.',
  },
  'phuong-truong-an-video-ai-hien-truong': {
    tag: 'FIELD VIDEO AI',
    statusBadge: 'PRODUCTION',
    clientShort: 'PHƯƠNG TRƯỜNG AN GROUP',
    primaryMetric: '+200%',
    primaryLabel: 'Sản lượng video tiến độ thực tế',
    evidenceImage: '/evidence/phuong-truong-an-sales.png',
    headline: 'Sản xuất video tiến độ thi công hạ tầng thực tế tự động bằng AI.',
  },
  'fpt-university-ai-event-agents': {
    tag: 'CAMPUS AI AGENTS',
    statusBadge: 'PRODUCTION',
    clientShort: 'ĐẠI HỌC FPT',
    primaryMetric: '10.000+',
    primaryLabel: 'Lượt tương tác tại Tech Fest 2026',
    evidenceImage: '/evidence/nttu-academic-ai.png',
    headline: 'Nâng bậc giảng viên Bậc 6 & điều phối mạng lưới AI Agents tại Tech Fest.',
  },
  'content-factory-b2b-marketing': {
    tag: 'CONTENT FACTORY',
    statusBadge: 'PRODUCTION',
    clientShort: 'DOANH NGHIỆP DỊCH VỤ B2B',
    primaryMetric: 'x5 lần',
    primaryLabel: 'Năng suất sản xuất SOP & bài viết nội bộ',
    evidenceImage: '/evidence/prudential-consultant-enablement.png',
    headline: 'Tái cấu trúc Content Factory giải phóng nhân sự chuyên môn.',
  },
};

export default function CaseStudiesIndexPage() {
  const [hoveredCase, setHoveredCase] = useState<string>('ai-auditor-manufacturing');

  const featuredSlug = 'vinhomes-ai-sales-enablement';
  const featuredCase = CASES_DATA.find((c) => c.slug === featuredSlug) || CASES_DATA[0];
  const featuredMeta = CASE_DELIVERY_TAGS[featuredSlug];

  const remainingCases = CASES_DATA.filter((c) => c.slug !== featuredSlug);
  const activeHoverMeta = CASE_DELIVERY_TAGS[hoveredCase] || CASE_DELIVERY_TAGS['ai-auditor-manufacturing'];

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

          <span className="text-xs font-mono text-[#7000FF] uppercase tracking-wider">
            Magazine Cover · Editorial Archive
          </span>
        </div>

        {/* Hero Section */}
        <section className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-[11px] uppercase tracking-widest text-[#7000FF] font-semibold block mb-3">
            BẰNG CHỨNG XÁC THỰC
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-[1.14]">
            Kết quả kinh doanh đo được bằng con số thật
          </h1>
          <p className="text-base sm:text-lg text-[#626262] font-light leading-relaxed mt-6">
            Nơi minh chứng thực tế thay thế những tuyên bố trừu tượng. Mỗi đề án được đo lường bằng bài toán P&amp;L cụ thể, tỷ lệ ứng dụng của người dùng cuối và tác động vận hành thực tế.
          </p>
        </section>

        {/* FEATURED CASE: MAGAZINE COVER (VINHOMES) */}
        <section className="mb-24 lg:mb-32">
          <Link
            href={`/case-studies/${featuredSlug}`}
            className="group block rounded-3xl bg-white border border-[#E7E7E5] p-6 sm:p-10 lg:p-12 shadow-xs hover:shadow-md transition-all cursor-pointer"
          >
            {/* Top Bar: Client & Status */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-black/5">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-[#17151A] uppercase block">
                  {featuredMeta.clientShort}
                </span>
                <span className="text-xs text-[#747474] font-light">Bất Động Sản &amp; Mạng Lưới Phân Phối</span>
              </div>

              <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-mono font-semibold uppercase tracking-wider">
                {featuredMeta.statusBadge}
              </span>
            </div>

            {/* Very Large Authentic Photo */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-2xl bg-neutral-100 mb-8">
              <Image
                src={featuredMeta.evidenceImage}
                alt={featuredCase.title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover object-center filter saturate-[0.95] group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>

            {/* Bottom Spread: Metric + Headline Statement + CTA */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-4">
                <span className="text-5xl sm:text-6xl font-light font-mono text-[#EA580C] block tracking-tight leading-none">
                  {featuredMeta.primaryMetric}
                </span>
                <span className="text-xs text-[#747474] font-light block mt-2">
                  {featuredMeta.primaryLabel}
                </span>
              </div>

              <div className="md:col-span-5">
                <h2 className="text-2xl sm:text-3xl font-light text-[#17151A] tracking-tight leading-snug group-hover:text-[#7000FF] transition-colors">
                  {featuredMeta.headline}
                </h2>
              </div>

              <div className="md:col-span-3 md:text-right">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#17151A] text-white text-xs font-medium group-hover:bg-[#333] transition-colors">
                  <span>Khám phá đề án</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>
        </section>

        {/* 7 REMAINING CASES: EDITORIAL LIST WITH HOVER PHOTO REVEAL */}
        <section className="mb-24 lg:mb-32">
          <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-black/10">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#7000FF] font-semibold block mb-1">
                DANH MỤC ĐỀ ÁN THỰC CHIẾN
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#17151A]">
                7 Đề Án Triển Khai Tiêu Biểu
              </h2>
            </div>
            <span className="text-xs font-mono text-[#747474] hidden sm:inline">
              Rê chuột vào đề án để xem hiện trường
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 7 Columns: List of Rows */}
            <div className="lg:col-span-8 divide-y divide-[#E7E7E5]">
              {remainingCases.map((item, idx) => {
                const meta = CASE_DELIVERY_TAGS[item.slug] || {
                  tag: 'AI SOLUTION',
                  statusBadge: 'PRODUCTION',
                  isLabPrototype: false,
                  clientShort: item.client || item.title,
                  primaryMetric: item.metrics?.[0]?.value || 'ROI',
                  primaryLabel: item.metrics?.[0]?.label || 'vận hành',
                  evidenceImage: '/evidence/vinhomes-sales-deployment.png',
                  headline: item.title,
                };
                const isHovered = hoveredCase === item.slug;
                const rowNumber = (idx + 2 < 10 ? `0${idx + 2}` : `${idx + 2}`);

                return (
                  <Link
                    key={item.id}
                    href={`/case-studies/${item.slug}`}
                    onMouseEnter={() => setHoveredCase(item.slug)}
                    className={`group py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all block ${
                      isHovered ? 'bg-[#FAF5FF]/50 px-4 -mx-4 rounded-xl' : 'hover:bg-black/[0.015]'
                    }`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-[#747474]">
                        {rowNumber}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base sm:text-lg font-normal text-[#17151A] group-hover:text-[#7000FF] transition-colors">
                            {meta.clientShort}
                          </h3>
                          <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            meta.isLabPrototype
                              ? 'bg-amber-50 text-[#EA580C] border border-amber-200 font-bold'
                              : 'text-[#747474] bg-black/5'
                          }`}>
                            {meta.statusBadge}
                          </span>
                        </div>
                        <p className="text-xs text-[#6E6E6E] font-light mt-1 max-w-md line-clamp-1">
                          {meta.headline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 shrink-0 pl-7 sm:pl-0">
                      <span className="font-mono text-xl sm:text-2xl font-light text-[#EA580C]">
                        {meta.primaryMetric}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white border border-[#E7E7E5] group-hover:border-[#17151A] group-hover:bg-[#17151A] group-hover:text-white flex items-center justify-center transition-all text-[#17151A]">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Right 4 Columns: Dynamic Hover Image Reveal Preview */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 hidden lg:block">
              <div className="rounded-2xl bg-white border border-[#E7E7E5] p-5 shadow-xs space-y-4 animate-in fade-in duration-200">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-100">
                  <Image
                    src={activeHoverMeta.evidenceImage}
                    alt={activeHoverMeta.clientShort}
                    fill
                    sizes="400px"
                    className="object-cover object-center filter saturate-[0.95]"
                  />
                  {activeHoverMeta.isLabPrototype && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-[#EA580C] text-white uppercase tracking-wider shadow-xs">
                        LAB PROTOTYPE
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#17151A] font-semibold">{activeHoverMeta.clientShort}</span>
                    <span className="text-[#EA580C] font-semibold">{activeHoverMeta.primaryMetric}</span>
                  </div>
                  <p className="text-xs text-[#6E6E6E] font-light leading-relaxed">
                    {activeHoverMeta.headline}
                  </p>
                  <span className="text-[11px] font-mono text-[#747474] block pt-2 border-t border-black/5">
                    {activeHoverMeta.primaryLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
