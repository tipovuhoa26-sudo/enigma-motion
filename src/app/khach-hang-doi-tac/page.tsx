'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  X,
  ExternalLink,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { Button } from '@/components/Button';
import {
  ORGANIZATION_LOGOS,
  INDUSTRY_FILTERS,
  OrganizationLogo,
} from '@/content/logoData';

export default function ClientsNetworkPage() {
  const [activeIndustry, setActiveIndustry] = useState<string>('all');
  const [selectedOrg, setSelectedOrg] = useState<OrganizationLogo | null>(null);

  const filteredLogos =
    activeIndustry === 'all'
      ? ORGANIZATION_LOGOS
      : ORGANIZATION_LOGOS.filter((org) => org.industryId === activeIndustry);

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
              <span className="text-[#17151A] font-medium">Khách Hàng & Đối Tác</span>
            </div>

            <Link
              href="/doi-ngu"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17151A] hover:underline transition-colors"
            >
              <span>Xem mạng lưới chuyên gia</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Hero Section */}
          <section className="max-w-4xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#6E6E6E] font-medium block mb-3">
              ECOSYSTEM & NETWORK · MẠNG LƯỚI ĐỒNG HÀNH TOÀN QUỐC
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-[1.2] mb-6">
              Mạng Lưới Tổ Chức & Đề Án Đồng Hành Chuyển Đổi AI
            </h1>
            <p className="text-base sm:text-lg text-[#6E6E6E] font-light leading-relaxed max-w-3xl mb-8">
              Từ các định chế tài chính niêm yết, tập đoàn bất động sản đến các trường đại học hàng đầu và hệ thống phân phối bán lẻ, đội ngũ chuyên gia Sunext đã đồng hành đào tạo, cố vấn và chuyển giao phương pháp luận ứng dụng AI hiệu quả trên khắp cả nước.
            </p>

            {/* Metric Badges: 8 Case Studies · 40+ Engagements · 45 Organizations */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mb-12">
              <div className="p-5 rounded-2xl bg-white border border-[#E8E8E8] shadow-xs">
                <span className="text-3xl sm:text-4xl font-light font-mono text-[#EA580C] block">08</span>
                <span className="text-xs font-semibold text-[#17151A] block mt-1 uppercase tracking-wider">
                  Case Studies
                </span>
                <span className="text-[11px] text-[#747474] block mt-0.5">
                  Bằng chứng chuyên sâu có số liệu đo lường
                </span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#E8E8E8] shadow-xs">
                <span className="text-3xl sm:text-4xl font-light font-mono text-[#7000FF] block">40+</span>
                <span className="text-xs font-semibold text-[#17151A] block mt-1 uppercase tracking-wider">
                  Engagements
                </span>
                <span className="text-[11px] text-[#747474] block mt-0.5">
                  Đề án &amp; chương trình triển khai thực tế
                </span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#E8E8E8] shadow-xs">
                <span className="text-3xl sm:text-4xl font-light font-mono text-[#17151A] block">45</span>
                <span className="text-xs font-semibold text-[#17151A] block mt-1 uppercase tracking-wider">
                  Organizations
                </span>
                <span className="text-[11px] text-[#747474] block mt-0.5">
                  10 Direct Engagements &amp; 35 Ecosystem
                </span>
              </div>
            </div>
          </section>

          {/* Industry Filter Pills */}
          <section className="max-w-6xl mx-auto mb-12">
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar border-b border-black/5">
              {INDUSTRY_FILTERS.map((ind) => {
                const isActive = activeIndustry === ind.id;
                const count =
                  ind.id === 'all'
                    ? ORGANIZATION_LOGOS.length
                    : ORGANIZATION_LOGOS.filter((org) => org.industryId === ind.id).length;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveIndustry(ind.id)}
                    className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? 'bg-[#17151A] text-white shadow-xs'
                        : 'bg-white border border-[#E8E8E8] text-[#515151] hover:border-[#17151A] hover:text-[#17151A]'
                    }`}
                  >
                    <span>{ind.name}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-black/5 text-[#6E6E6E]'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* TIER 1: DIRECT ENGAGEMENTS (ĐỐI TÁC TRIỂN KHAI TRỰC TIẾP) */}
            {filteredLogos.some((org) => org.tier === 1) && (
              <div className="mb-16">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
                      <span className="text-xs uppercase tracking-widest text-[#EA580C] font-semibold font-mono">
                        TIER 1 · DIRECT ENGAGEMENTS
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-light text-[#17151A]">
                      Tổ Chức &amp; Đề Án Hợp Tác Trực Tiếp (Có Case Study)
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#747474] hidden sm:inline">
                    Xác thực bằng số liệu &amp; sản phẩm
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredLogos
                    .filter((org) => org.tier === 1)
                    .map((org) => {
                      return (
                        <div
                          key={org.id}
                          onClick={() => setSelectedOrg(org)}
                          className="p-6 rounded-2xl bg-white border border-[#E8E8E8] hover:border-[#7000FF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-3 mb-4">
                              <div className="w-14 h-14 rounded-xl bg-[#F8F8F6] border border-black/5 p-2 flex items-center justify-center shrink-0">
                                <Image
                                  src={org.logoUrl}
                                  alt={org.name}
                                  width={100}
                                  height={40}
                                  className="max-h-9 max-w-[48px] w-auto h-auto object-contain"
                                />
                              </div>
                              <span className="px-2.5 py-0.5 rounded-full bg-[#FFF7ED] border border-[#FED7AA] text-[10px] font-mono font-semibold text-[#EA580C]">
                                {org.industryName}
                              </span>
                            </div>

                            <h4 className="text-base font-medium text-[#17151A] group-hover:text-[#7000FF] transition-colors mb-2">
                              {org.name}
                            </h4>
                            <p className="text-xs text-[#515151] leading-relaxed line-clamp-3 mb-4">
                              {org.description}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-black/5 flex items-center justify-between text-xs text-[#17151A]">
                            {org.caseStudySlug ? (
                              <Link
                                href={`/case-studies/${org.caseStudySlug}`}
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1 font-semibold text-[#7000FF] hover:underline"
                              >
                                <span>Xem Case Study</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </Link>
                            ) : (
                              <span className="text-[#747474]">Đề án bảo mật NDA</span>
                            )}
                            <span className="text-[11px] text-[#747474] group-hover:text-[#17151A] transition-colors">
                              Chi tiết ➔
                            </span>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}

            {/* TIER 2: NETWORK & ECOSYSTEM (MẠNG LƯỚI LIÊN KẾT & HỆ SINH THÁI) */}
            {filteredLogos.some((org) => org.tier === 2) && (
              <div>
                <div className="flex items-center justify-between gap-4 mb-6 pt-6 border-t border-black/5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#7000FF]" />
                      <span className="text-xs uppercase tracking-widest text-[#7000FF] font-semibold font-mono">
                        TIER 2 · NETWORK &amp; ECOSYSTEM
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-light text-[#17151A]">
                      Mạng Lưới Đối Tác &amp; Hệ Sinh Thái Doanh Nghiệp
                    </h3>
                  </div>
                  <span className="text-xs text-[#747474]">
                    {filteredLogos.filter((org) => org.tier === 2).length} tổ chức
                  </span>
                </div>

                {/* Secondary Logo Grid: grayscale-to-color */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                  {filteredLogos
                    .filter((org) => org.tier === 2)
                    .map((org) => (
                      <div
                        key={org.id}
                        onClick={() => setSelectedOrg(org)}
                        className="p-3 rounded-xl bg-white border border-[#E8E8E8] hover:border-black/30 hover:shadow-xs transition-all flex flex-col items-center justify-center text-center min-h-[90px] group cursor-pointer filter grayscale hover:grayscale-0 opacity-75 hover:opacity-100"
                      >
                        <div className="w-full h-8 flex items-center justify-center mb-1.5">
                          <Image
                            src={org.logoUrl}
                            alt={org.name}
                            width={90}
                            height={32}
                            className="max-h-7 max-w-[70px] w-auto h-auto object-contain transition-transform group-hover:scale-105"
                          />
                        </div>
                        <span className="text-[11px] font-medium text-[#17151A] block truncate w-full">
                          {org.shortName || org.name}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </section>

          {/* Interactive Modal for Organization Details */}
          {selectedOrg && (
            <div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
              onClick={() => setSelectedOrg(null)}
            >
              <div
                className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/10 animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedOrg(null)}
                  className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#F5F3F6] hover:bg-black/10 text-[#17151A] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Đóng"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Organization Brand Header */}
                <div className="flex items-center gap-4 mb-6 pr-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#FBFBFA] border border-black/10 p-2 flex items-center justify-center shadow-xs shrink-0">
                    <Image
                      src={selectedOrg.logoUrl}
                      alt={selectedOrg.name}
                      width={64}
                      height={64}
                      className="max-h-12 max-w-[56px] w-auto h-auto object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-[#F5F3F6] text-[#6E6E6E] inline-block mb-1">
                      {selectedOrg.industryName}
                    </span>
                    <h3 className="text-xl font-medium text-[#17151A]">
                      {selectedOrg.name}
                    </h3>
                  </div>
                </div>

                {/* Description Body */}
                <div className="mb-6 p-4 rounded-2xl bg-[#FBFBFA] border border-black/5 text-xs sm:text-sm text-[#17151A] leading-relaxed">
                  <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-semibold block mb-1.5">
                    Nội Dung Đồng Hành & Triển Khai:
                  </span>
                  <p>{selectedOrg.description}</p>
                </div>

                {/* Case Study Link or Close Action */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-black/10">
                  {selectedOrg.caseStudySlug ? (
                    <Link
                      href={`/case-studies/${selectedOrg.caseStudySlug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#17151A] text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
                    >
                      <span>Xem Case Study Chi Tiết</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <span className="text-[11px] text-[#6E6E6E]">
                      * Dự án đào tạo & tư vấn nghiệp vụ thực tế
                    </span>
                  )}

                  <Button
                    variant="secondary"
                    size="sm"
                    className="rounded-full text-xs"
                    onClick={() => setSelectedOrg(null)}
                  >
                    Đóng
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Open Course Participants Note */}
          <section className="max-w-5xl mx-auto mb-12 p-6 sm:p-8 rounded-3xl bg-[#FBFBFA] border border-black/10">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-neutral-500" />
              <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-semibold">
                Mạng Lưới Học Viên Các Khóa Chuyên Đề Mở
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed mb-4 font-light">
              Bên cạnh các đề án đào tạo doanh nghiệp riêng lẻ, mạng lưới học viên tham gia các chương trình đào tạo chuyên đề mở (AI in Marketing, AI for Leadership, Prompt Engineering chuyên sâu) của Sunext và CAIO bao gồm nhiều nhân sự đến từ các thương hiệu lớn như Shopee, Lazada, Tiki, Unilever, P&G, Nestlé, Vinamilk, Masan Consumer, Ogilvy, GroupM, Hakuhodo, VinFast, Vietjet Air, Carlsberg, Golden Gate Group...
            </p>
            <p className="text-[11px] text-neutral-400 italic">
              * Danh sách phản ánh học viên cá nhân tham gia nâng cao năng lực nghề nghiệp, không phải hợp đồng cung cấp giải pháp cấp công ty.
            </p>
          </section>

          {/* Mandatory Legal & Ethical Disclaimer (Prominently Placed) */}
          <section className="max-w-5xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-[#F5F3F6] border border-black/5 flex items-start gap-4 text-xs text-[#6E6E6E] leading-relaxed">
            <ShieldCheck className="w-5 h-5 text-neutral-700 shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <span className="font-semibold text-[#17151A] text-sm block">
                Thông Báo Pháp Lý & Miễn Trừ Trách Nhiệm (Ethical Disclosure)
              </span>
              <p>
                Tên và logo các tổ chức được nêu nhằm mục đích minh chứng trực quan cho mạng lưới học viên, cán bộ quản lý và chuyên viên đã trực tiếp tham gia các khóa đào tạo, hội thảo chuyên đề hoặc dự án tư vấn do đội ngũ chuyên gia Sunext (dẫn dắt bởi CAIO Nguyễn Phước Vĩnh Hưng) chủ trì. Việc nhắc tên và biểu thị logo không hàm ý quan hệ đối tác độc quyền, đại diện pháp lý hay chứng thực thương mại (commercial endorsement) chính thức, trừ các dự án có thỏa thuận triển khai công nghệ đã được hai bên công bố.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="max-w-5xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#17151A] text-white text-center space-y-6">
            <div className="max-w-xl mx-auto space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#FAFFDE] font-semibold">
                ĐÀO TẠO & TRIỂN KHAI DOANH NGHIỆP
              </span>
              <h3 className="text-2xl sm:text-3xl font-light">
                Thiết Kế Chương Trình Đào Tạo AI Riêng Cho Tổ Chức Bạn
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Chuẩn hóa năng lực ứng dụng AI theo đặc thù dữ liệu và quy trình nội bộ của doanh nghiệp. Đào tạo trực tiếp tại văn phòng hoặc hybrid.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link href="/#contact">
                <Button variant="lime" size="lg" className="rounded-full text-xs font-semibold px-8">
                  <span>Liên Hệ Tư Vấn Đào Tạo</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/tu-duy-chuyen-doi-ai">
                <Button variant="secondary" size="lg" className="rounded-full text-xs font-semibold px-6 border-white/20 text-white hover:bg-white/10">
                  <span>Tìm Hiểu Khung 6 Trụ Cột</span>
                </Button>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
