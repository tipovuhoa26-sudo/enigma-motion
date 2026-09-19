'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ChevronRight,
  Sparkles,
  ShoppingBag,
  Factory,
  Briefcase,
  Building2,
  ShieldCheck,
  Calendar,
  Layers,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { Button } from '@/components/Button';
import { INDUSTRIES_DATA } from '@/content/industryData';

const INDUSTRY_ICONS: Record<string, React.ElementType> = {
  retail: ShoppingBag,
  manufacturing: Factory,
  'b2b-services': Briefcase,
  'real-estate': Building2,
};

export default function IndustryIndexPage() {
  return (
    <div className="editorial-shell">
      <div className="editorial-card min-h-screen flex flex-col justify-between">
        <Header activeSection="service" />

        <main className="px-6 md:px-12 lg:px-20 py-12 flex-1">
          {/* Top Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-black/5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs text-[#6E6E6E] hover:text-[#17151A] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Quay lại Trang Chủ</span>
            </Link>

            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAFFDE] border border-[#DFE2C8] text-[11px] font-semibold text-[#17151A]">
                <Sparkles className="w-3 h-3 text-[#17151A]" />
                GIẢI PHÁP THEO NGÀNH THỰC TẾ
              </span>
            </div>
          </div>

          {/* Hero Section */}
          <section className="max-w-4xl mb-16">
            <span className="text-xs uppercase tracking-widest text-[#6E6E6E] font-medium block mb-3">
              Industry Verticals · Sunext AI Solutions
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-[1.2] mb-6">
              Giải Pháp Chuyển Đổi AI May Đo Theo Đặc Thù Ngành
            </h1>
            <p className="text-base sm:text-lg text-[#6E6E6E] leading-relaxed max-w-3xl">
              Không dùng chung một giải pháp rập khuôn cho mọi doanh nghiệp. Sunext giải quyết đúng điểm nghẽn kinh tế lớn nhất của từng ngành — từ tối ưu chi phí nhân sự bán lẻ, kiểm định chất lượng sản xuất 24/7 đến tự động hóa Content Factory B2B.
            </p>
          </section>

          {/* 3 Industry Cards Grid with Authentic Photography */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {INDUSTRIES_DATA.map((ind) => {
              const Icon = INDUSTRY_ICONS[ind.id] || Sparkles;
              return (
                <div
                  key={ind.id}
                  className="rounded-3xl bg-white border border-black/10 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Visual Asset Container */}
                    <div className="relative w-full h-[220px] bg-[#F5F3F6] overflow-hidden">
                      <Image
                        src={ind.heroImage}
                        alt={ind.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(min-width: 1024px) 33vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                        <span className="text-xs font-mono uppercase tracking-wider bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                          {ind.englishName}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white text-[#17151A] flex items-center justify-center shadow-xs">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h2 className="text-xl font-normal text-[#17151A] group-hover:font-medium transition-all mb-3 leading-snug">
                        {ind.name}
                      </h2>
                      <p className="text-xs text-[#6E6E6E] leading-relaxed mb-6 line-clamp-3">
                        {ind.heroSubheadline}
                      </p>

                      {/* Case Study Highlight Badge */}
                      <div className="p-3.5 rounded-2xl bg-[#FAFFDE] border border-[#DFE2C8] space-y-2 mb-4">
                        <div className="flex items-center justify-between text-[11px] font-semibold text-[#17151A]">
                          <span>Bằng chứng xác thực:</span>
                          <span className="text-emerald-800">{ind.centralCaseStudy.scale}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 pt-1 border-t border-black/5">
                          {ind.centralCaseStudy.metrics.slice(0, 2).map((m, mIdx) => (
                            <div key={mIdx}>
                              <span className="text-lg font-light text-[#17151A] block leading-none">
                                {m.value}
                              </span>
                              <span className="text-[10px] text-[#6E6E6E] block mt-0.5 line-clamp-1">
                                {m.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Link Action */}
                  <div className="p-6 pt-0">
                    <Link
                      href={`/nganh/${ind.slug}`}
                      className="w-full inline-flex items-center justify-between p-3 rounded-full bg-[#F5F3F6] hover:bg-[#17151A] text-[#17151A] hover:text-white transition-all text-xs font-medium group/btn"
                    >
                      <span>Xem Giải Pháp Chi Tiết & Case Study</span>
                      <div className="w-6 h-6 rounded-full bg-white text-[#17151A] flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </section>

          {/* Connected with Sunext Rewired Banner */}
          <section className="p-8 sm:p-12 rounded-3xl bg-[#17151A] text-white flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-[#FAFFDE] mb-4 border border-white/10">
                <Layers className="w-3.5 h-3.5" />
                KHUNG NĂNG LỰC TOÀN TRÌNH
              </span>
              <h2 className="text-2xl sm:text-3xl font-light leading-snug mb-4">
                Tất cả giải pháp ngành đều vận hành trên khung Sunext Rewired
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                Dù bạn thuộc ngành bán lẻ, sản xuất hay dịch vụ, việc áp dụng AI chỉ bền vững khi tổ chức đi qua đủ 6 trụ cột cốt lõi. Hãy kiểm tra xem ngành của bạn đang sẵn sàng tới đâu.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/tu-duy-chuyen-doi-ai">
                  <Button variant="lime" size="md" className="rounded-full text-xs font-semibold">
                    Khám Phá Khung 6 Trụ Cột
                  </Button>
                </Link>
                <Link href="/danh-gia-san-sang-ai">
                  <Button variant="secondary" size="md" className="rounded-full text-xs">
                    Đo Lường Sẵn Sàng 5 Phút
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
              Khung Sunext Rewired được thiết kế để tùy biến cho bất kỳ mô hình kinh doanh nào có quy trình lặp lại và khối lượng dữ liệu lớn. Hãy trao đổi trực tiếp với chuyên gia giải pháp của chúng tôi.
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
