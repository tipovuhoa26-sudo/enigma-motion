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
      className="relative w-full py-20 md:py-24 px-6 md:px-12 lg:px-20 bg-white scroll-mt-20 border-b border-[#E8E8E8]"
      data-cases-section
    >
      <div className="max-w-[1280px] mx-auto">
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

        {/* Editorial Layout: 1 Big Featured Case (7 cols) + 3 Supporting Cases (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-12">
          
          {/* LEFT: Big Featured Case Card (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <Link
              href={`/case-studies/${featuredCase.slug}`}
              className="group flex-1 rounded-2xl bg-[#FAFAFA] border border-[#E8E8E8] p-8 sm:p-10 flex flex-col justify-between hover:border-[#6B21A8]/40 hover:shadow-[0_16px_40px_-12px_rgba(107,33,168,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-[#E8E8E8] text-[#6B21A8]">
                    Dự án tiêu biểu · {featuredCase.category}
                  </span>
                  <span className="text-xs font-mono text-[#8E8E8E]">Flagship Case</span>
                </div>

                <div className="text-xs font-semibold text-[#6B21A8] uppercase tracking-wider mb-2">
                  {featuredCase.client}
                </div>

                <h3 className="text-2xl sm:text-3xl font-normal text-[#111111] group-hover:text-[#6B21A8] transition-colors leading-snug mb-4">
                  {featuredCase.title}
                </h3>

                <p className="text-sm sm:text-base text-[#626262] leading-relaxed mb-6">
                  {featuredCase.summary}
                </p>

                {/* Architecture Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#E8E8E8] text-xs text-[#111111]">
                    Multi-Agent Financial Engine
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#E8E8E8] text-xs text-[#111111]">
                    Đối soát 3 báo cáo tài chính
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#E8E8E8] text-xs text-[#111111]">
                    Bảo mật chuẩn tài chính
                  </span>
                </div>
              </div>

              {/* Big Floating Metric Numbers */}
              <div className="pt-6 border-t border-[#E8E8E8] flex flex-wrap items-end justify-between gap-4">
                <div className="flex flex-wrap items-baseline gap-6">
                  {featuredCase.metrics?.map((m, mIdx) => (
                    <div key={mIdx}>
                      <div className="text-3xl sm:text-4xl font-light text-[#111111] leading-none mb-1">
                        {m.value}
                      </div>
                      <div className="text-xs text-[#626262]">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-medium text-[#111111] group-hover:text-[#F97316] transition-colors">
                  <span>Xem hồ sơ chi tiết</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>

          {/* RIGHT: 3 Supporting Stacked Cases (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {supportingCases.map((item, idx) => (
              <Link
                key={item.id}
                href={`/case-studies/${item.slug}`}
                className="group flex-1 rounded-xl bg-white border border-[#E8E8E8] p-5 sm:p-6 flex flex-col justify-between hover:border-[#6B21A8]/40 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold text-[#6B21A8]">
                      {item.category}
                    </span>
                    <span className="text-[11px] font-mono text-[#8E8E8E]">0{idx + 2}</span>
                  </div>

                  <h4 className="text-base sm:text-lg font-normal text-[#111111] group-hover:text-[#6B21A8] transition-colors leading-snug mb-1.5">
                    {item.title}
                  </h4>

                  <p className="text-xs text-[#626262] line-clamp-2 leading-relaxed mb-3">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0EFEA] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {item.metrics?.slice(0, 2).map((m, mIdx) => (
                      <span key={mIdx} className="text-xs font-medium text-[#111111]">
                        {m.value} <span className="text-[10px] text-[#888888] font-normal">({m.label})</span>
                      </span>
                    ))}
                  </div>
                  <ArrowRight className="w-3 h-3 text-[#8E8E8E] group-hover:text-[#F97316] group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>

        </div>

        {/* Bottom Centered CTA */}
        <div className="text-center pt-4">
          <Link href="/case-studies">
            <Button variant="orange" size="lg" className="rounded-full shadow-sm text-xs font-medium cursor-pointer">
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
