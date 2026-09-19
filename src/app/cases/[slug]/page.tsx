'use client';

import React, { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight, Layers, Building2, TrendingUp } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { Button } from '@/components/Button';
import { CASE_STUDIES_DETAILS } from '@/content/data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CaseDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const detail = CASE_STUDIES_DETAILS[slug] || CASE_STUDIES_DETAILS['toi-uu-chi-phi-tuyen-dung-hr-ai'];

  return (
    <div className="editorial-shell">
      <div className="editorial-card min-h-screen flex flex-col justify-between">
        <Header activeSection="service" />

        <main className="px-6 md:px-12 lg:px-20 py-12 flex-1">
          {/* Top Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-black/5">
            <div className="flex items-center gap-2 text-xs text-[#6E6E6E]">
              <Link href="/" className="hover:text-[#17151A] transition-colors">
                Trang Chủ
              </Link>
              <span>/</span>
              <Link href="/cases" className="hover:text-[#17151A] transition-colors">
                Dự Án Thực Tế
              </Link>
              <span>/</span>
              <span className="text-[#17151A] font-medium">{detail.category}</span>
            </div>

            <Link
              href="/cases"
              className="inline-flex items-center gap-1.5 text-xs text-[#6E6E6E] hover:text-[#17151A] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Tất Cả Dự Án</span>
            </Link>
          </div>

          <article className="max-w-4xl mx-auto">
            {/* Header Eyebrow */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAFFDE] border border-[#DFE2C8] text-[11px] font-semibold text-[#17151A]">
                <Building2 className="w-3.5 h-3.5 text-[#17151A]" />
                {detail.category}
              </span>
              <span className="text-xs text-[#6E6E6E] font-medium">Quy mô: {detail.scale}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-[1.2] mb-8">
              {detail.title}
            </h1>

            {/* Hero Image */}
            <div className="relative w-full h-[320px] sm:h-[460px] rounded-3xl overflow-hidden bg-[#F5F3F6] mb-12 shadow-sm border border-black/5">
              <Image
                src={detail.image}
                alt={detail.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
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
                    <span>Giải Pháp Triển Khai Cùng Sunext</span>
                  </h2>
                  <p className="text-sm sm:text-base text-[#6E6E6E] leading-relaxed">
                    {detail.solution}
                  </p>
                </div>

                {/* Pillars Involved */}
                <div className="p-6 rounded-2xl bg-[#F8F8F6] border border-black/5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#6E6E6E] block mb-3">
                    Trụ Cột Áp Dụng Thuộc Khung Sunext Rewired:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {detail.pillarsInvolved.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/tu-duy-chuyen-doi-ai/${p.slug}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-black/10 text-xs text-[#17151A] font-medium hover:border-black/30 hover:bg-[#FAFFDE] transition-all"
                      >
                        <Layers className="w-3 h-3 text-[#17151A]" />
                        <span>{p.name}</span>
                        <ArrowUpRight className="w-3 h-3 text-[#6E6E6E]" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Metrics Column */}
              <div className="space-y-6">
                <div className="bg-[#FAFFDE] rounded-3xl p-6 border border-[#DFE2C8] flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-700" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#17151A]">
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
                    Xem lộ trình triển khai chi tiết và gói giải pháp phù hợp cho lĩnh vực {detail.industry.name}.
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
                <span className="text-xs uppercase tracking-wider text-[#FAFFDE] font-semibold">
                  Tối Ưu Cho Doanh Nghiệp Của Bạn
                </span>
                <h3 className="text-xl sm:text-2xl font-light">
                  Sẵn sàng giải quyết bài toán vận hành tương tự?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300">
                  Đặt lịch trao đổi trực tiếp 1-on-1 với chuyên gia tư vấn giải pháp Sunext.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link href="/danh-gia-san-sang-ai">
                  <Button variant="lime" size="md" className="rounded-full text-xs font-semibold">
                    Đo Lường Sẵn Sàng 5 Phút
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button variant="secondary" size="md" className="rounded-full text-xs">
                    Đặt Lịch Khảo Sát
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </div>
  );
}
