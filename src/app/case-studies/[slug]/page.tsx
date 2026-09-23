'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Layers, Building2, TrendingUp, Sparkles } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { Button } from '@/components/Button';
import { CASE_STUDIES_DETAILS } from '@/content/data';
import { CaseStudyVisual } from '@/components/visuals/CaseStudyVisual';

const BEAT_PHASES = [
  { label: 'Bối Cảnh Bình Thường', role: 'Khởi Đầu · Luke Skywalker', tagColor: 'bg-neutral-100 text-neutral-700' },
  { label: 'Biến Cố & Nút Thắt', role: 'Thách Thức · Điểm Nghẽn P&L', tagColor: 'bg-rose-50 text-rose-700' },
  { label: 'Bản Chất Vấn Đề', role: 'Gốc Rễ · Cạm Bẫy Kỹ Thuật', tagColor: 'bg-amber-50 text-amber-800' },
  { label: 'Bước Ngoặt Đồng Hành', role: 'Đồng Hành · Gặp Người Dẫn Đường', tagColor: 'bg-blue-50 text-blue-700' },
  { label: 'Vũ Khí Giải Pháp', role: 'Kiến Trúc · Multi-Agent & SOP', tagColor: 'bg-purple-50 text-purple-700' },
  { label: 'Trạng Thái Mới & P&L', role: 'Chuyển Hóa · Hiệu Quả Đo Được', tagColor: 'bg-emerald-50 text-emerald-800' },
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const detail = CASE_STUDIES_DETAILS[slug] || CASE_STUDIES_DETAILS['toi-uu-chi-phi-tuyen-dung-hr-ai'];

  return (
    <div className="w-full min-h-screen flex flex-col sunext-atmospheric-canvas">
      <Header activeSection="service" />

      <main className="flex-1 flex flex-col w-full max-w-[1280px] mx-auto px-6 md:px-12 py-12 lg:py-16">
          {/* Top Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-black/5">
            <div className="flex items-center gap-2 text-xs text-[#6E6E6E]">
              <Link href="/" className="hover:text-[#17151A] transition-colors">
                Trang Chủ
              </Link>
              <span>/</span>
              <Link href="/case-studies" className="hover:text-[#17151A] transition-colors">
                Dự Án Thực Tế
              </Link>
              <span>/</span>
              <span className="text-[#17151A] font-medium">{detail.category}</span>
            </div>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-xs text-[#6E6E6E] hover:text-[#17151A] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Tất Cả Dự Án</span>
            </Link>
          </div>

          <article className="max-w-4xl mx-auto">
            {/* Header Eyebrow */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5FF] border border-[#EDE9FE] text-[11px] font-semibold text-[#7000FF]">
                <Building2 className="w-3.5 h-3.5 text-[#7000FF]" />
                {detail.category}
              </span>
              <span className="text-xs text-[#6E6E6E] font-medium">Quy mô: {detail.scale}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-[1.2] mb-8">
              {detail.title}
            </h1>

            {/* Hero Visual Telemetry */}
            <div className="relative w-full h-[320px] sm:h-[440px] rounded-3xl overflow-hidden mb-12 shadow-sm border border-black/5">
              <CaseStudyVisual slug={detail.slug} />
            </div>

            {/* Main Content Grid: Narrative & Impact Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
              {/* Narrative Column */}
              <div className="lg:col-span-2 space-y-8 text-base text-[#17151A] leading-relaxed">
                <div>
                  <h2 className="text-xl sm:text-2xl font-normal text-[#17151A] mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                    <span>Bài Toán & Điểm Nghẽn Ban Đầu</span>
                  </h2>
                  <p className="text-sm sm:text-base text-[#6E6E6E] leading-relaxed">
                    {detail.challenge}
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-normal text-[#17151A] mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                    <span>Giải Pháp Triển Khai & Hành Động Chuyển Hóa</span>
                  </h2>
                  <p className="text-sm sm:text-base text-[#6E6E6E] leading-relaxed">
                    {detail.solution}
                  </p>
                </div>

                {/* 6-Beat Transformation Story per Write Moving Stories */}
                {detail.storyBeats && detail.storyBeats.length > 0 && (
                  <div className="pt-6 border-t border-black/10">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Sparkles className="w-4 h-4 text-emerald-700" />
                        <span className="text-xs uppercase tracking-widest text-[#6E6E6E] font-semibold">
                          PHƯƠNG PHÁP LUẬN WRITE MOVING STORIES
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-light text-[#17151A]">
                        Hành Trình Chuyển Hóa 6 Nhịp
                      </h3>
                      <p className="text-xs text-[#6E6E6E] mt-1">
                        Từ điểm nghẽn thực tế đến năng lực tự chủ và biên lợi nhuận đo lường được
                      </p>
                    </div>

                    <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-px before:bg-black/10">
                      {detail.storyBeats.map((beat) => {
                        const phase = BEAT_PHASES[beat.beatNumber - 1] || {
                          label: `Nhịp ${beat.beatNumber}`,
                          role: 'Chuyển hóa',
                          tagColor: 'bg-neutral-100 text-neutral-700',
                        };
                        return (
                          <div key={beat.beatNumber} className="relative group">
                            {/* Number dot */}
                            <div className="absolute -left-6 sm:-left-8 top-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border-2 border-[#17151A] text-[10px] sm:text-[11px] font-bold text-[#17151A] flex items-center justify-center shadow-xs">
                              0{beat.beatNumber}
                            </div>

                            <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-xs group-hover:border-black/25 transition-all">
                              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${phase.tagColor}`}>
                                  {phase.role}
                                </span>
                                <span className="text-[11px] text-[#6E6E6E] font-medium">
                                  Nhịp 0{beat.beatNumber} / 06
                                </span>
                              </div>

                              <h4 className="text-base font-medium text-[#17151A] mb-2 leading-snug">
                                {beat.beatTitle}
                              </h4>

                              <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed">
                                {beat.narrative}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Pillars Involved */}
                <div className="p-6 rounded-2xl bg-[#F8F8F6] border border-black/5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#6E6E6E] block mb-3">
                    Trụ Cột Áp Dụng (Phương Pháp Luận Sunext):
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {detail.pillarsInvolved.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/tu-duy-chuyen-doi-ai/${p.slug}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-black/10 text-xs text-[#17151A] font-medium hover:border-[#EDE9FE] hover:bg-[#FAF5FF] hover:text-[#7000FF] transition-all"
                      >
                        <Layers className="w-3.5 h-3.5 text-[#7000FF]" />
                        <span>{p.name}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#6E6E6E]" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Metrics Column */}
              <div className="space-y-6">
                <div className="bg-[#FAF5FF] rounded-3xl p-6 border border-[#EDE9FE] flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#7000FF]" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#7000FF]">
                      Chỉ Số Hiệu Quả Đo Được
                    </span>
                  </div>

                  {detail.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className={`pt-3 ${idx > 0 ? 'border-t border-black/5' : ''}`}
                    >
                      <span className="text-3xl sm:text-4xl font-light text-[#17151A] block tracking-tight">
                        {m.value}
                      </span>
                      <span className="text-xs font-semibold text-[#17151A] block mt-1">
                        {m.label}
                      </span>
                      <span className="text-[11px] text-[#6E6E6E] leading-tight block mt-0.5">
                        {m.description}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Related Industry Link */}
                <div className="p-6 rounded-3xl bg-[#F5F3F6] border border-black/5 text-xs text-[#17151A]">
                  <span className="font-semibold block mb-1">Giải pháp dành riêng cho ngành:</span>
                  <p className="text-[#6E6E6E] mb-3">
                    Xem lộ trình triển khai chi tiết và giải pháp phù hợp cho lĩnh vực {detail.industry.name}.
                  </p>
                  <Link
                    href={`/nganh/${detail.industry.slug}`}
                    className="inline-flex items-center gap-1.5 font-semibold text-[#17151A] hover:underline"
                  >
                    <span>Khám phá Giải Pháp Ngành</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#17151A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-xs uppercase tracking-wider text-[#F97316] font-semibold">
                  Tối Ưu Cho Doanh Nghiệp Của Bạn
                </span>
                <h3 className="text-xl sm:text-2xl font-light">
                  Sẵn sàng giải quyết bài toán vận hành tương tự?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300">
                  Đo lường mức độ sẵn sàng hoặc đặt lịch trao đổi trực tiếp với chuyên gia tư vấn Sunext.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link href="/danh-gia-san-sang-ai">
                  <Button variant="orange" size="md" className="rounded-xl text-xs font-semibold shadow-sm">
                    Đo Lường Sẵn Sàng (12 Câu)
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button variant="outline" size="md" className="rounded-xl text-xs bg-white/80 hover:bg-white border-[#D5D3CC]">
                    Đặt Lịch Khảo Sát
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        </main>

        <Footer />
    </div>
  );
}
