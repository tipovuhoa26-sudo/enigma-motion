'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  Layers,
  ChevronRight,
  ClipboardCheck,
  Calendar,
  Sparkles,
  ShieldCheck,
  Target,
  Users,
  Workflow,
  Cpu,
  Database,
  TrendingUp,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { Button } from '@/components/Button';
import { PILLARS_DATA, PillarData } from '@/content/aiTransformation';
import { COMPETENCY_TIERS } from '@/content/governanceData';

const ICONS_MAP: Record<number, React.ElementType> = {
  1: Target,
  2: Users,
  3: Workflow,
  4: Cpu,
  5: Database,
  6: TrendingUp,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function PillarDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const pillar: PillarData | undefined = PILLARS_DATA.find((p) => p.slug === slug);

  if (!pillar) {
    notFound();
  }

  const IconComponent = ICONS_MAP[pillar.number] || Layers;
  const prevPillar = PILLARS_DATA.find((p) => p.number === pillar.number - 1);
  const nextPillar = PILLARS_DATA.find((p) => p.number === pillar.number + 1);

  return (
    <div className="editorial-shell">
      <div className="editorial-card min-h-screen flex flex-col justify-between">
        <Header activeSection="service" />

        <main className="px-6 md:px-12 lg:px-20 py-12 flex-1">
          {/* Breadcrumbs Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-black/5">
            <div className="flex items-center gap-2 text-xs text-[#6E6E6E]">
              <Link href="/" className="hover:text-[#17151A] transition-colors">
                Trang Chủ
              </Link>
              <span>/</span>
              <Link href="/tu-duy-chuyen-doi-ai" className="hover:text-[#17151A] transition-colors">
                Tư Duy Chuyển Đổi AI
              </Link>
              <span>/</span>
              <span className="text-[#17151A] font-medium">Trụ Cột 0{pillar.number}</span>
            </div>

            <Link
              href="/tu-duy-chuyen-doi-ai"
              className="inline-flex items-center gap-1.5 text-xs text-[#6E6E6E] hover:text-[#17151A] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Xem toàn bộ 6 Trụ Cột</span>
            </Link>
          </div>

          {/* Hero Header */}
          <article className="max-w-4xl mx-auto mb-16">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAFFDE] border border-[#DFE2C8] text-[11px] font-semibold text-[#17151A]">
                <IconComponent className="w-3.5 h-3.5 text-[#17151A]" />
                TRỤ CỘT 0{pillar.number} / 06 · REWIRED
              </span>
              <span className="text-xs text-[#6E6E6E] font-medium">
                {pillar.rewiredName}
              </span>
              <span className="text-xs text-[#6E6E6E] hidden sm:inline">•</span>
              <span className="text-xs text-[#6E6E6E] hidden sm:inline">
                Trục: {pillar.maturityAxis}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-[1.2] mb-6">
              {pillar.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#6E6E6E] font-normal leading-relaxed mb-8">
              {pillar.tagline}
            </p>

            {/* Direct Reality Check Paragraphs (Sam Ovens style) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#F5F3F6] border border-black/5 text-[#17151A] space-y-4 mb-12">
              {pillar.introParagraphs.map((para, i) => (
                <p key={i} className={`leading-relaxed ${i === 0 ? 'text-lg font-medium' : 'text-base text-[#6E6E6E]'}`}>
                  {para}
                </p>
              ))}
            </div>

            {/* Section 1: Cái Lầm Tưởng */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-xs mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium mb-4">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Cái lầm tưởng phổ biến</span>
              </div>
              <h2 className="text-2xl font-normal text-[#17151A] mb-4">
                {pillar.myth.title}
              </h2>
              <blockquote className="p-4 rounded-2xl bg-[#F8F8F6] border-l-4 border-rose-400 text-sm italic text-[#17151A] mb-6">
                &ldquo;{pillar.myth.quote}&rdquo;
              </blockquote>
              <div className="space-y-3 text-sm text-[#6E6E6E] leading-relaxed">
                {pillar.myth.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Section 2: Cái Đúng Theo Khung Rewired */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAFFDE] border border-[#DFE2C8] mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-black/5 text-xs font-semibold text-[#17151A] mb-4">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>Bản chất: Khung Rewired của McKinsey</span>
              </div>
              <h2 className="text-2xl font-normal text-[#17151A] mb-4">
                {pillar.reality.title}
              </h2>
              <p className="text-sm text-[#17151A]/80 leading-relaxed mb-6">
                {pillar.reality.summary}
              </p>

              {/* Core Points */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {pillar.reality.points.map((pt, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/70 border border-black/5 flex flex-col justify-between">
                    <div>
                      <span className="w-6 h-6 rounded-full bg-[#17151A] text-white text-xs font-mono flex items-center justify-center mb-3">
                        0{idx + 1}
                      </span>
                      <h3 className="font-semibold text-sm text-[#17151A] mb-2">{pt.title}</h3>
                      <p className="text-xs text-[#6E6E6E] leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comparison Table if present */}
              {pillar.reality.comparison && (
                <div className="mt-6 pt-6 border-t border-black/10">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#17151A] mb-4">
                    So sánh Chuyển Đổi Thực Tế
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/60 border border-rose-200">
                      <span className="text-xs font-semibold text-rose-700 block mb-2">Trước Khi Chuẩn Hóa:</span>
                      <ul className="space-y-1.5 text-xs text-[#6E6E6E]">
                        {pillar.reality.comparison.before.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-rose-500 shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/90 border border-emerald-300">
                      <span className="text-xs font-semibold text-emerald-800 block mb-2">Sau Khi Tái Cấu Trúc:</span>
                      <ul className="space-y-1.5 text-xs text-[#17151A]">
                        {pillar.reality.comparison.after.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-emerald-600 shrink-0">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Pillar 2 Special Section: 5 Tầng Năng Lực Con Người */}
            {pillar.number === 2 && (
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-xs mb-12">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
                    <Users className="w-3.5 h-3.5" />
                    <span>Chuẩn Đầu Ra Thang 5 Tầng Năng Lực Con Người</span>
                  </div>
                  <span className="text-xs font-mono text-[#6E6E6E]">5-Tier Competency Rubric & Gate 4 Pass Mark</span>
                </div>

                <h2 className="text-2xl font-normal text-[#17151A] mb-3">
                  Thang 5 Tầng Năng Lực & Tiêu Chí Nghiệm Thu Gate 4
                </h2>
                <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed mb-6">
                  Sunext phân định chuẩn đầu ra rõ ràng cho từng vai trò trong tổ chức: từ phổ cập toàn dân (Tầng 1) đến kỹ sư làm chủ mô hình cục bộ và Trung tâm Xuất sắc (Tầng 5). Mỗi tầng đều có tiêu chuẩn kiểm tra độc lập (Pass Mark) và điều kiện nghiệm thu hệ thống (System Adoption Prerequisite).
                </p>

                <div className="space-y-4">
                  {COMPETENCY_TIERS.map((tier) => (
                    <div
                      key={tier.id}
                      className="p-5 rounded-2xl bg-[#FBFBFA] border border-black/5 hover:border-black/15 transition-colors"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-full bg-[#17151A] text-white text-xs font-mono font-bold flex items-center justify-center">
                            0{tier.tierNumber}
                          </span>
                          <h3 className="font-semibold text-sm sm:text-base text-[#17151A]">
                            Tầng {tier.tierNumber}: {tier.name}
                          </h3>
                        </div>
                        <span className="text-xs px-2.5 py-1 rounded-md bg-black/5 font-medium text-[#17151A]">
                          {tier.targetRole}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div className="space-y-2">
                          <div>
                            <span className="font-semibold text-[#17151A] block mb-0.5">Năng lực tự chủ:</span>
                            <p className="text-[#6E6E6E] leading-relaxed">{tier.autonomousCapability}</p>
                          </div>
                          <div>
                            <span className="font-semibold text-[#17151A] block mb-0.5">Sản phẩm bàn giao:</span>
                            <ul className="space-y-0.5 text-[#6E6E6E]">
                              {tier.deliverables.map((del, dIdx) => (
                                <li key={dIdx} className="flex items-start gap-1.5">
                                  <span className="text-[#17151A] font-bold">•</span>
                                  <span>{del}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="space-y-2 p-3.5 rounded-xl bg-white border border-black/5">
                          <div>
                            <span className="font-semibold text-blue-900 block mb-0.5">Ranh giới phân quyền & an toàn:</span>
                            <p className="text-neutral-600 leading-relaxed text-[11px]">{tier.governanceBoundary}</p>
                          </div>
                          <div className="pt-2 border-t border-black/5">
                            <span className="font-semibold text-emerald-900 block mb-0.5">Tiêu chuẩn Pass Mark cá nhân:</span>
                            <p className="text-neutral-700 leading-relaxed text-[11px]">{tier.individualPassMark}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 3: Bằng Chứng Thực Tế */}
            {pillar.evidence && pillar.evidence.length > 0 && (
              <div className="p-6 sm:p-8 rounded-3xl bg-[#F8F8F6] border border-black/5 mb-12">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#17151A]">
                    Bằng chứng xác thực (Không bịa số)
                  </span>
                </div>
                <div className="space-y-6">
                  {pillar.evidence.map((ev, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-white border border-black/5 shadow-2xs grid grid-cols-1 md:grid-cols-12 gap-6"
                    >
                      <div className="md:col-span-7 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-semibold text-[#17151A]">{ev.client}</span>
                            <span className="text-xs text-[#6E6E6E]">({ev.teamSize})</span>
                          </div>
                          <p className="text-xs text-[#6E6E6E] leading-relaxed mb-4">{ev.story}</p>
                        </div>
                        <Link
                          href={ev.caseStudyUrl}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#17151A] hover:underline"
                        >
                          <span>Xem chi tiết tài liệu triển khai</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      <div className="md:col-span-5 bg-[#FAFFDE] rounded-xl p-4 border border-[#DFE2C8] flex flex-col justify-around gap-3">
                        {ev.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="border-b border-black/5 pb-2 last:border-b-0 last:pb-0">
                            <span className="text-2xl font-light text-[#17151A] block">{m.value}</span>
                            <span className="text-[11px] text-[#6E6E6E]">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 4: Cách Sunext Giải Trụ Cột Này */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#17151A] text-white mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-[#FAFFDE] mb-4 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{pillar.sunextService.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-white mb-4">
                {pillar.solution.title}
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                {pillar.solution.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {pillar.solution.highlights.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FAFFDE] shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                <Link href="/#contact">
                  <Button variant="lime" size="md" className="rounded-full text-xs font-semibold gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Đặt Lịch Tư Vấn Trụ Cột Này</span>
                  </Button>
                </Link>
                <Link href={pillar.sunextService.url}>
                  <Button variant="secondary" size="md" className="rounded-full text-xs gap-1.5">
                    <span>{pillar.solution.ctaText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Section 5: Trụ Cột Liên Quan */}
            <div className="mb-12">
              <h3 className="text-base font-semibold text-[#17151A] mb-4">
                Trụ cột liên quan tiếp theo:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillar.relatedPillars.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/tu-duy-chuyen-doi-ai/${rel.slug}`}
                    className="p-5 rounded-2xl bg-white border border-black/5 hover:border-black/20 hover:shadow-xs transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-xs font-mono text-[#6E6E6E] block mb-1">
                        Trụ cột 0{rel.number}
                      </span>
                      <h4 className="font-semibold text-sm text-[#17151A] group-hover:underline mb-2">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-[#6E6E6E] leading-relaxed">
                        {rel.reason}
                      </p>
                    </div>
                    <div className="pt-3 mt-3 border-t border-black/5 flex items-center justify-between text-xs text-[#17151A] font-medium">
                      <span>Đọc tiếp</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Section 6: Navigation Between Pillars (Prev / Next) */}
            <div className="pt-8 border-t border-black/10 flex items-center justify-between gap-4">
              {prevPillar ? (
                <Link
                  href={`/tu-duy-chuyen-doi-ai/${prevPillar.slug}`}
                  className="inline-flex items-center gap-2 text-xs text-[#6E6E6E] hover:text-[#17151A] transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Trụ cột 0{prevPillar.number}: {prevPillar.title}</span>
                </Link>
              ) : (
                <div />
              )}

              {nextPillar ? (
                <Link
                  href={`/tu-duy-chuyen-doi-ai/${nextPillar.slug}`}
                  className="inline-flex items-center gap-2 text-xs text-[#6E6E6E] hover:text-[#17151A] transition-colors font-medium"
                >
                  <span>Trụ cột 0{nextPillar.number}: {nextPillar.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ) : (
                <Link
                  href="/danh-gia-san-sang-ai"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#17151A] hover:underline"
                >
                  <span>Làm Bài Đánh Giá Sẵn Sàng</span>
                  <ClipboardCheck className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </div>
  );
}
