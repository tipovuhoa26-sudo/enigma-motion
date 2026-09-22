'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronRight,
  Sparkles,
  ShoppingBag,
  Factory,
  Briefcase,
  Building2,
  ShieldCheck,
  Calendar,
  Layers,
  TrendingUp,
  Activity,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { Button } from '@/components/Button';
import { INDUSTRIES_DATA } from '@/content/industryData';
import { IndustryVisual } from '@/components/visuals/IndustryVisual';

const INDUSTRY_ICONS: Record<string, React.ElementType> = {
  retail: ShoppingBag,
  manufacturing: Factory,
  'b2b-services': Briefcase,
  'real-estate': Building2,
  finance: TrendingUp,
  healthcare: Activity,
};

export default function IndustryIndexPage() {
  return (
    <div className="editorial-shell">
      <div className="editorial-card min-h-screen flex flex-col justify-between">
        <Header activeSection="service" />

        <main className="px-6 md:px-12 lg:px-20 py-12 flex-1">
          {/* Top Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-black/5">
            <nav className="flex items-center gap-2 text-xs text-[#6E6E6E]">
              <Link href="/" className="hover:text-[#111111] transition-colors">
                Trang chủ
              </Link>
              <span>/</span>
              <span className="text-[#111111] font-medium">Giải pháp theo ngành</span>
            </nav>

            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAFFDE] border border-[#DFE2C8] text-[11px] font-semibold text-[#17151A]">
                <Sparkles className="w-3 h-3 text-[#17151A]" />
                GIẢI PHÁP THEO NGÀNH THỰC TẾ
              </span>
            </div>
          </div>

          {/* Hero Section */}
          {/* Hero Header */}
          <section className="max-w-4xl mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#7000FF]" />
              <span className="text-xs uppercase tracking-widest text-[#7000FF] font-semibold font-mono">
                INDUSTRY VERTICALS · TAXONOMY THEO NGÀNH
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-[1.18] mb-4">
              1 Vấn Đề Kinh Tế ➔ 1 Case ➔ 3 Capabilities
            </h1>
            <p className="text-base sm:text-lg text-[#626262] leading-relaxed max-w-3xl font-light">
              Mỗi ngành kinh doanh có cấu trúc chi phí và điểm nghẽn P&L riêng biệt. Sunext không dùng giải pháp rập khuôn: chúng tôi giải đúng bài toán kinh tế trọng yếu nhất, chứng minh bằng case study thực tế và chuyển giao 3 năng lực cốt lõi.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#FAF5FF] border border-[#EDE9FE] text-xs text-[#515151]">
              <span className="text-[#7000FF] font-semibold">Lưu ý kiến trúc:</span>
              <span>Trang này là <strong>Industry Taxonomy riêng</strong>, độc lập và bổ trợ cho Deep Domain Network (tri thức liên ngành) tại trang chủ.</span>
            </div>
          </section>

          {/* Industry Scenes Grid: 1 Problem ➔ 1 Case ➔ 3 Capabilities */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {INDUSTRIES_DATA.map((ind) => {
              const Icon = INDUSTRY_ICONS[ind.id] || Sparkles;
              const primaryChallenge = ind.challenges[0] || {
                title: 'Chi phí vận hành thủ công quá lớn',
                description: ind.marketContext,
                impact: 'Giảm biên lợi nhuận',
              };

              return (
                <div
                  key={ind.id}
                  className="rounded-3xl bg-white border border-[#E8E8E8] hover:border-[#17151A] shadow-xs hover:shadow-md transition-all p-6 sm:p-8 flex flex-col justify-between relative group"
                >
                  {/* Top: Industry Name & Icon */}
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-black/5 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#FAF5FF] border border-[#EDE9FE] flex items-center justify-center text-[#7000FF]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-[#747474] uppercase tracking-wider block">
                            {ind.englishName}
                          </span>
                          <h2 className="text-xl font-normal text-[#17151A]">
                            {ind.name}
                          </h2>
                        </div>
                      </div>
                      <Link
                        href={`/nganh/${ind.slug}`}
                        className="w-8 h-8 rounded-full bg-[#F5F3F6] group-hover:bg-[#17151A] text-[#17151A] group-hover:text-white flex items-center justify-center transition-all"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Step 1: VẤN ĐỀ KINH TẾ (1 Economic Problem) */}
                    <div className="p-4 rounded-2xl bg-[#FFFBF7] border border-[#FED7AA] mb-4">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#EA580C] mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
                        <span>1. Vấn Đề Kinh Tế Cốt Lõi</span>
                      </div>
                      <p className="text-xs font-semibold text-[#17151A] mb-1">
                        {primaryChallenge.title}
                      </p>
                      <p className="text-xs text-[#626262] leading-relaxed line-clamp-2">
                        {primaryChallenge.description}
                      </p>
                    </div>

                    {/* Node Connector Line */}
                    <div className="flex items-center justify-center py-1">
                      <div className="flex flex-col items-center">
                        <div className="w-[1px] h-3 bg-[#7000FF]/40" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7000FF]" />
                        <div className="w-[1px] h-3 bg-[#7000FF]/40" />
                      </div>
                    </div>

                    {/* Step 2: BẰNG CHỨNG XÁC THỰC (1 Verified Case) */}
                    <div className="p-4 rounded-2xl bg-[#FAFFDE] border border-[#DFE2C8] mb-4">
                      <div className="flex items-center justify-between text-[11px] font-mono font-bold uppercase tracking-wider text-[#17151A] mb-1">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                          <span>2. Case Study Thực Chứng: {ind.centralCaseStudy.client}</span>
                        </div>
                        <span className="text-emerald-800 font-mono">{ind.centralCaseStudy.scale}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-2 mt-2 border-t border-black/5">
                        {ind.centralCaseStudy.metrics.slice(0, 2).map((m, mIdx) => (
                          <div key={mIdx} className="bg-white/80 p-2 rounded-lg border border-black/5">
                            <span className="text-lg font-light font-mono text-[#EA580C] block leading-none">
                              {m.value}
                            </span>
                            <span className="text-[10px] text-[#626262] block mt-1 line-clamp-1">
                              {m.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Node Connector Line */}
                    <div className="flex items-center justify-center py-1">
                      <div className="flex flex-col items-center">
                        <div className="w-[1px] h-3 bg-[#7000FF]/40" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7000FF]" />
                        <div className="w-[1px] h-3 bg-[#7000FF]/40" />
                      </div>
                    </div>

                    {/* Step 3: 3 CAPABILITIES (3 Năng Lực Cốt Lõi Chuyển Giao) */}
                    <div className="p-4 rounded-2xl bg-white border border-[#E8E8E8] shadow-2xs">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#7000FF] mb-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7000FF]" />
                        <span>3. Ba Năng Lực Cốt Lõi (3 Capabilities)</span>
                      </div>
                      <div className="space-y-2 text-xs text-[#374151]">
                        {ind.solutions.slice(0, 3).map((sol, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2">
                            <span className="w-5 h-5 rounded-md bg-[#FAF5FF] border border-[#EDE9FE] text-[#7000FF] text-[10px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                              0{sIdx + 1}
                            </span>
                            <div>
                              <strong className="text-[#17151A] font-medium">{sol.name}</strong>
                              <p className="text-[11px] text-[#626262] leading-snug line-clamp-1">
                                {sol.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Link Action */}
                  <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between">
                    <Link
                      href={`/nganh/${ind.slug}`}
                      className="text-xs font-semibold text-[#7000FF] hover:text-[#581C87] inline-flex items-center gap-1.5"
                    >
                      <span>Xem toàn bộ lộ trình ngành &amp; kiến trúc</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[11px] text-[#747474] font-mono">
                      {ind.roadmap.length} Phases
                    </span>
                  </div>
                </div>
              );
            })}
          </section>

          {/* Connected with Sunext Method Banner */}
          <section className="p-8 sm:p-12 rounded-3xl bg-[#17151A] text-white flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-[#FAFFDE] mb-4 border border-white/10">
                <Layers className="w-3.5 h-3.5" />
                KHUNG NĂNG LỰC TOÀN TRÌNH
              </span>
              <h2 className="text-2xl sm:text-3xl font-light leading-snug mb-4">
                Tất cả giải pháp ngành đều vận hành trên Phương Pháp Luận Sunext
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                Mọi giải pháp ngành đều được đánh giá trên cùng 6 trụ cột năng lực; Sunext chỉ kích hoạt những trụ cột thực sự đang chặn kết quả. Hãy kiểm tra xem doanh nghiệp bạn đang sẵn sàng tới đâu.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/tu-duy-chuyen-doi-ai">
                  <Button variant="lime" size="md" className="rounded-full text-xs font-semibold">
                    Khám Phá Sunext Method
                  </Button>
                </Link>
                <Link href="/danh-gia-san-sang-ai">
                  <Button variant="secondary" size="md" className="rounded-full text-xs">
                    Đo Lường Sẵn Sàng (12 Câu)
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 text-xs text-neutral-300 w-full md:w-auto shrink-0">
              <span className="font-semibold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Tiêu Chuẩn Thực Thi Dự Án:</span>
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[#FAFFDE]">✓</span>
                <span>Khảo sát đo lường ROI trước khi triển khai</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FAFFDE]">✓</span>
                <span>Bảo mật dữ liệu tuyệt đối (NDA-first)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FAFFDE]">✓</span>
                <span>Chuyển giao 100% năng lực Tầng 1➔5</span>
              </div>
            </div>
          </section>

          {/* Consultation Booking Section */}
          <section className="text-center max-w-2xl mx-auto py-8">
            <h2 className="text-2xl sm:text-3xl font-light text-[#17151A] mb-4">
              Không Thấy Ngành Của Bạn Ở Đây?
            </h2>
            <p className="text-sm text-[#6E6E6E] leading-relaxed mb-8">
              Phương Pháp Luận Sunext được thiết kế để tùy biến cho bất kỳ mô hình kinh doanh nào có quy trình lặp lại và khối lượng dữ liệu lớn. Hãy trao đổi trực tiếp với chuyên gia giải pháp của chúng tôi.
            </p>
            <Link href="/#contact">
              <Button variant="primary" size="lg" className="rounded-full shadow-sm text-sm gap-2">
                <Calendar className="w-4 h-4" />
                <span>Đặt Lịch Tư Vấn Cho Ngành Của Bạn</span>
              </Button>
            </Link>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
