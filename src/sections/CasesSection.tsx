'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';
import { CaseStudy, CASES_DATA } from '@/content/data';

interface CasesProps {
  cases?: CaseStudy[];
}

export function CasesSection({ cases = CASES_DATA }: CasesProps) {
  // Flagship featured case (Vietcap Securities)
  const featuredCase = cases.find((c) => c.slug === 'vietcap-ai-multi-agent-nghien-cuu-thi-truong') || cases[3];
  // 3 supporting diverse cases (Manufacturing, Retail, Real Estate)
  const supportingCases = [
    cases.find((c) => c.slug === 'ai-auditor-manufacturing') || cases[1],
    cases.find((c) => c.slug === 'toi-uu-chi-phi-tuyen-dung-hr-ai') || cases[0],
    cases.find((c) => c.slug === 'vinhomes-ai-sales-enablement') || cases[4],
  ];

  return (
    <section
      id="cases"
      className="relative w-full py-20 md:py-24 px-6 md:px-12 lg:px-20 bg-white scroll-mt-20 border-b border-[#E8E8E8] overflow-hidden"
      data-cases-section
    >
      {/* Background oversized watermark text */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none text-[130px] sm:text-[190px] lg:text-[250px] font-black text-black/[0.02] tracking-tighter z-0 uppercase"
        aria-hidden="true"
      >
        RESULTS
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Section Header: Sentence Case */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8FC] border border-[#E8E8E8] text-xs font-medium text-[#6B21A8] mb-3 shadow-2xs">
            <span>Thực tiễn triển khai</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#111111] leading-tight mb-3">
            Dự án thực tế & <span className="font-normal">kết quả đo lường</span>
          </h2>
          <p className="text-sm md:text-base text-[#626262] font-normal max-w-xl mx-auto leading-relaxed">
            100% dự án được nghiệm thu định lượng bằng P&L và thời gian thực tế tại doanh nghiệp Việt Nam.
          </p>
        </div>

        {/* Editorial Layout: 1 Full-Width Flagship Case Top + 3-Column Supporting Cases Bottom */}
        <div className="space-y-6 mb-12">
          
          {/* TOP: Full-Width Flagship Case Card */}
          <Link
            href={`/case-studies/${featuredCase.slug}`}
            className="group block rounded-2xl bg-[#FAFAFA] border border-[#E8E8E8] p-8 sm:p-10 lg:p-12 hover:border-[#6B21A8]/40 hover:shadow-[0_20px_50px_-16px_rgba(107,33,168,0.08)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Client & Narrative (7 cols) */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-[#E8E8E8] text-[#6B21A8]">
                    Dự án tiêu biểu · {featuredCase.category}
                  </span>
                  <span className="text-xs font-mono text-[#8E8E8E] uppercase tracking-wider">Flagship Case</span>
                </div>

                <div className="text-xs font-semibold text-[#6B21A8] uppercase tracking-wider mb-2">
                  {featuredCase.client}
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] group-hover:text-[#6B21A8] transition-colors leading-tight mb-4">
                  {featuredCase.title}
                </h3>

                <p className="text-sm sm:text-base text-[#626262] leading-relaxed mb-6 max-w-2xl">
                  {featuredCase.summary}
                </p>

                {/* Architecture & Capability Pills */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-md bg-white border border-[#E8E8E8] text-xs font-medium text-[#111111]">
                    Multi-Agent Financial Engine
                  </span>
                  <span className="px-3 py-1 rounded-md bg-white border border-[#E8E8E8] text-xs font-medium text-[#111111]">
                    Đối soát 3 báo cáo tài chính
                  </span>
                  <span className="px-3 py-1 rounded-md bg-white border border-[#E8E8E8] text-xs font-medium text-[#111111]">
                    Bảo mật chuẩn tài chính
                  </span>
                </div>
              </div>

              {/* Right Column: Massive Proof Numbers & Animated Financial Workflow (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#E8E8E8] pt-6 lg:pt-0 lg:pl-10 space-y-6">
                {/* Visual Workflow Transition: 2 Ngày -> 3 Giờ */}
                <div className="p-4 rounded-xl bg-white border border-[#E8E8E8] group-hover:border-[#6B21A8]/30 transition-colors">
                  <div className="text-[11px] font-mono text-[#888888] uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>Chu kỳ xuất bản báo cáo</span>
                    <span className="text-[#F97316] font-bold">-75% Thời Gian</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-center">
                      <div className="text-xs font-mono text-[#888888]">Thủ công</div>
                      <div className="text-lg sm:text-xl font-medium text-[#666666] line-through">2 Ngày</div>
                    </div>
                    
                    {/* Animated connector line */}
                    <div className="flex-1 flex items-center px-2">
                      <div className="w-full h-0.5 bg-[#E8E8E8] relative overflow-hidden rounded-full">
                        <div className="absolute inset-y-0 left-0 w-1/2 bg-[#6B21A8] animate-pulse" />
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#6B21A8] shrink-0 -ml-1" />
                    </div>

                    <div className="text-center">
                      <div className="text-xs font-mono text-[#059669] font-semibold">AI Multi-Agent</div>
                      <div className="text-xl sm:text-2xl font-bold text-[#111111]">3 Giờ</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div>
                    <div className="text-3xl sm:text-4xl font-light tracking-tight text-[#111111] leading-none tabular-nums">
                      -75%
                    </div>
                    <div className="text-xs text-[#626262] font-normal leading-snug mt-1">Thời gian bóc tách BCTC</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-light tracking-tight text-[#059669] leading-none tabular-nums">
                      100%
                    </div>
                    <div className="text-xs text-[#626262] font-normal leading-snug mt-1">Khớp số liệu kiểm toán</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8E8E8]/60 flex items-center justify-between">
                  <span className="text-xs text-[#8E8E8E]">Nghiệm thu thực tế theo chu kỳ tài chính</span>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-[#111111] group-hover:text-[#F97316] transition-colors">
                    <span>Xem hồ sơ chi tiết</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* BOTTOM: 3 Supporting Curated Cases in 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportingCases.map((item, idx) => (
              <Link
                key={item.id}
                href={`/case-studies/${item.slug}`}
                className="group rounded-2xl bg-white border border-[#E8E8E8] p-6 sm:p-7 flex flex-col justify-between hover:border-[#6B21A8]/40 hover:shadow-sm hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[#6B21A8]">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-[#8E8E8E]">0{idx + 2}</span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-normal text-[#111111] group-hover:text-[#6B21A8] transition-colors leading-snug mb-2.5">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#626262] line-clamp-3 leading-relaxed mb-6">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0EFEA] flex items-center justify-between">
                  <div className="flex flex-col gap-0.5">
                    {item.metrics?.slice(0, 2).map((m, mIdx) => (
                      <span key={mIdx} className="text-xs font-medium text-[#111111]">
                        {m.value} <span className="text-[10.5px] text-[#888888] font-normal">({m.label})</span>
                      </span>
                    ))}
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#8E8E8E] group-hover:text-[#F97316] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                </div>
              </Link>
            ))}
          </div>

        </div>

        {/* Bottom Centered CTA */}
        <div className="text-center pt-2">
          <Link href="/case-studies">
            <Button variant="orange" size="lg" className="rounded-full shadow-sm text-xs sm:text-sm font-medium cursor-pointer">
              <span>Xem toàn bộ 8+ dự án thực tế</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <div className="mt-3 text-xs text-[#8E8E8E]">
            Cam kết bảo mật dữ liệu tuyệt đối theo thỏa thuận NDA doanh nghiệp
          </div>
        </div>
      </div>
    </section>
  );
}
