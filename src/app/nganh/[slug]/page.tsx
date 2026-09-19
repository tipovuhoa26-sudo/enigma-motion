'use client';

import React, { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Sparkles,
  ShieldCheck,
  ShoppingBag,
  Factory,
  Briefcase,
  Building2,
  Clock,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { Button } from '@/components/Button';
import { INDUSTRIES_DATA, IndustrySolution } from '@/content/industryData';

const INDUSTRY_ICONS: Record<string, React.ElementType> = {
  retail: ShoppingBag,
  manufacturing: Factory,
  'b2b-services': Briefcase,
  'real-estate': Building2,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function IndustryDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const industry: IndustrySolution | undefined = INDUSTRIES_DATA.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  const IconComponent = INDUSTRY_ICONS[industry.id] || Sparkles;
  const otherIndustries = INDUSTRIES_DATA.filter((i) => i.slug !== slug);

  return (
    <div className="editorial-shell">
      <div className="editorial-card min-h-screen flex flex-col justify-between">
        <Header activeSection="service" />

        <main className="px-6 md:px-12 lg:px-20 py-12 flex-1">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-black/5">
            <div className="flex items-center gap-2 text-xs text-[#6E6E6E]">
              <Link href="/" className="hover:text-[#17151A] transition-colors">
                Trang Chủ
              </Link>
              <span>/</span>
              <Link href="/nganh" className="hover:text-[#17151A] transition-colors">
                Giải Pháp Theo Ngành
              </Link>
              <span>/</span>
              <span className="text-[#17151A] font-medium">{industry.name}</span>
            </div>

            <Link
              href="/nganh"
              className="inline-flex items-center gap-1.5 text-xs text-[#6E6E6E] hover:text-[#17151A] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Xem tất cả các ngành</span>
            </Link>
          </div>

          {/* Article / Page Content */}
          <article className="max-w-4xl mx-auto mb-16">
            {/* Header Eyebrow */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAFFDE] border border-[#DFE2C8] text-[11px] font-semibold text-[#17151A]">
                <IconComponent className="w-3.5 h-3.5 text-[#17151A]" />
                {industry.englishName.toUpperCase()}
              </span>
              <span className="text-xs text-[#6E6E6E] font-medium">Phương Pháp Luận Sunext</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-[1.2] mb-6">
              {industry.heroHeadline}
            </h1>

            <p className="text-lg text-[#6E6E6E] leading-relaxed mb-8">
              {industry.heroSubheadline}
            </p>

            {/* Authentic Hero Photography Container */}
            <div className="relative w-full h-[320px] sm:h-[460px] rounded-3xl overflow-hidden bg-[#F5F3F6] mb-12 shadow-sm border border-black/5">
              <Image
                src={industry.heroImage}
                alt={industry.name}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider block text-[#FAFFDE] mb-1">
                    Hiện trường thực tế tại Việt Nam
                  </span>
                  <p className="text-sm sm:text-base font-medium max-w-xl text-white/95">
                    {industry.name} — Tối ưu hóa vận hành dựa trên công nghệ AI bản địa hóa.
                  </p>
                </div>
              </div>
            </div>

            {/* Market Context Section */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#F5F3F6] border border-black/5 text-[#17151A] mb-12">
              <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-semibold block mb-2">
                Bối Cảnh Thị Trường
              </span>
              <p className="text-sm sm:text-base text-[#17151A] leading-relaxed">
                {industry.marketContext}
              </p>
            </div>

            {/* Section 1: 3 Điểm Nghẽn Ngành */}
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-semibold">
                  Điểm Nghẽn Vận Hành Đặc Thù
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-[#17151A] mb-6">
                Những nút thắt khiến biên lợi nhuận bị bào mòn
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {industry.challenges.map((ch, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-black/10 shadow-2xs flex flex-col justify-between"
                  >
                    <div>
                      <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-800 text-xs font-mono flex items-center justify-center mb-3">
                        0{idx + 1}
                      </span>
                      <h3 className="font-semibold text-sm text-[#17151A] mb-2 leading-snug">
                        {ch.title}
                      </h3>
                      <p className="text-xs text-[#6E6E6E] leading-relaxed mb-4">
                        {ch.description}
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-200 text-[11px] text-rose-900 leading-snug">
                      <strong>Hậu quả: </strong>{ch.impact}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Case Study Xác Thực Trung Tâm */}
            <div className="p-6 sm:p-10 rounded-3xl bg-[#FAFFDE] border border-[#DFE2C8] mb-16">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-emerald-800" />
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-900">
                  Bằng Chứng Xác Thực Từ Hiện Trường Khách Hàng
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-normal text-[#17151A] mb-2">
                {industry.centralCaseStudy.title}
              </h2>
              <p className="text-xs font-medium text-[#6E6E6E] mb-6">
                {industry.centralCaseStudy.client} • Quy mô: {industry.centralCaseStudy.scale}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6">
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <p className="text-sm text-[#17151A]/80 leading-relaxed mb-6">
                    {industry.centralCaseStudy.description}
                  </p>
                  <Link
                    href={industry.centralCaseStudy.caseUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#17151A] hover:underline"
                  >
                    <span>Xem toàn bộ hồ sơ kỹ thuật case study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="lg:col-span-5 bg-white/80 rounded-2xl p-6 border border-black/5 flex flex-col justify-around gap-4 shadow-2xs">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#17151A]">
                    Chỉ Số Đo Lường Định Lượng
                  </span>
                  {industry.centralCaseStudy.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="border-b border-black/5 pb-3 last:border-b-0 last:pb-0">
                      <span className="text-3xl font-light text-[#17151A] block">{m.value}</span>
                      <span className="text-xs text-[#6E6E6E]">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 3: Bộ Giải Pháp AI Mapped to Rewired */}
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-[#17151A]" />
                <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-semibold">
                  Bộ Giải Pháp Theo Phương Pháp Luận Sunext
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-[#17151A] mb-6">
                Cách Sunext tháo gỡ điểm nghẽn cho ngành {industry.name}
              </h2>

              <div className="space-y-4">
                {industry.solutions.map((sol, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-6 rounded-2xl bg-white border border-black/10 shadow-2xs grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
                  >
                    <div className="md:col-span-7">
                      <div className="flex items-center gap-2 mb-2">
                        <Link
                          href={`/tu-duy-chuyen-doi-ai/${sol.pillarId}`}
                          className="px-2.5 py-0.5 rounded-full bg-[#F5F3F6] hover:bg-[#FAFFDE] border border-black/5 text-[10px] font-semibold text-[#17151A] transition-colors"
                        >
                          {sol.pillarName}
                        </Link>
                      </div>
                      <h3 className="text-lg font-semibold text-[#17151A] mb-2">
                        {sol.name}
                      </h3>
                      <p className="text-xs text-[#6E6E6E] leading-relaxed">
                        {sol.description}
                      </p>
                    </div>

                    <div className="md:col-span-5 bg-[#F8F8F6] rounded-xl p-4 border border-black/5 space-y-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#17151A] block mb-1">
                        Hạng Mục Bàn Giao:
                      </span>
                      {sol.deliverables.map((d, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-[#17151A]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Lộ Trình Triển Khai 3 Giai Đoạn */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#17151A] text-white mb-16">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-[#FAFFDE]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#FAFFDE]">
                  Lộ Trình Triển Khai Chuẩn
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-white mb-4">
                Từ khảo sát đến bàn giao toàn diện
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-8">
                Quy trình thực thi có cấu trúc chặt chẽ, chia nhỏ rủi ro thành các cột mốc kiểm thử định lượng.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {industry.roadmap.map((rm, rIdx) => (
                  <div key={rIdx} className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#FAFFDE] font-mono mb-2">
                        <span>{rm.phase}</span>
                        <span>{rm.duration}</span>
                      </div>
                      <p className="text-xs text-neutral-200 leading-relaxed">
                        {rm.objective}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-neutral-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Cam kết bảo mật dữ liệu doanh nghiệp (NDA-first) & không gián đoạn vận hành</span>
                </div>
                <Link href="/#contact">
                  <Button variant="lime" size="md" className="rounded-full text-xs font-semibold">
                    Đăng Ký Tư Vấn Khảo Sát Miễn Phí
                  </Button>
                </Link>
              </div>
            </div>

            {/* Section 5: Các Ngành Khác */}
            <div className="mb-12">
              <h3 className="text-base font-semibold text-[#17151A] mb-4">
                Khám phá giải pháp các ngành khác:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherIndustries.map((oth) => (
                  <Link
                    key={oth.slug}
                    href={`/nganh/${oth.slug}`}
                    className="p-5 rounded-2xl bg-white border border-black/5 hover:border-black/20 hover:shadow-xs transition-all flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-xs font-mono text-[#6E6E6E] block mb-1">
                        {oth.englishName}
                      </span>
                      <h4 className="font-semibold text-sm text-[#17151A] group-hover:underline">
                        {oth.name}
                      </h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#F5F3F6] group-hover:bg-[#17151A] group-hover:text-white flex items-center justify-center transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Back Button */}
            <div className="pt-6 border-t border-black/5 flex items-center justify-between">
              <Link
                href="/nganh"
                className="inline-flex items-center gap-2 text-xs text-[#6E6E6E] hover:text-[#17151A] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Quay lại Danh Mục Ngành</span>
              </Link>
              <Link
                href="/danh-gia-san-sang-ai"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#17151A] hover:underline"
              >
                <span>Đo Lường Mức Độ Sẵn Sàng Của Doanh Nghiệp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </div>
  );
}
