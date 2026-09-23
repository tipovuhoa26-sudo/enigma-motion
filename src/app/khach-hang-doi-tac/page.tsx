'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  X,
  ExternalLink,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { Button } from '@/components/Button';
import {
  ORGANIZATION_LOGOS,
  OrganizationLogo,
} from '@/content/logoData';

const TIER1_PROOFS: Record<string, string> = {
  vietcap: '−75% thời gian bóc tách BCTC thô',
  vinhomes: '< 5 phút phản hồi thông tin cho 500+ môi giới',
  dentsu: '−65% thời gian phát triển proposal đấu thầu',
  ptexim: 'Chuẩn hóa SOP xuất nhập khẩu, giảm 67% chu kỳ xử lý',
  vietcombank: 'Workshop chiến lược Multi-Agent & ZDR Private VPC',
  smartlands: '100% tỷ lệ kết nối giỏ hàng và tư vấn tự động 24/7',
  'phuong-truong-an': '+200% sản lượng video tiến độ hiện trường',
  'fpt-university': '10.000+ sinh viên & nâng chuẩn Bậc 6 cho 600+ GV',
  prudential: 'Chuyển giao năng lực tư vấn tài chính cá nhân',
  'thue-tphcm': 'Xử lý và đối soát chứng từ văn bản tự động',
};

export default function ClientsNetworkPage() {
  const [selectedOrg, setSelectedOrg] = useState<OrganizationLogo | null>(null);

  const tier1Orgs = ORGANIZATION_LOGOS.filter((org) => org.tier === 1);
  const tier2Orgs = ORGANIZATION_LOGOS.filter((org) => org.tier === 2);

  return (
    <div className="w-full min-h-screen flex flex-col sunext-atmospheric-canvas">
      <Header activeSection="service" />

      <main className="flex-1 flex flex-col w-full max-w-[1280px] mx-auto px-6 md:px-12 py-12 lg:py-16">
        {/* Top Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-black/5">
          <div className="flex items-center gap-2 text-xs text-[#6E6E6E]">
            <Link href="/" className="hover:text-[#17151A] transition-colors">
              Trang Chủ
            </Link>
            <span>/</span>
            <span className="text-[#17151A] font-medium">Khách Hàng &amp; Đối Tác</span>
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
        <section className="mb-20">
          <span className="text-[11px] uppercase tracking-widest text-[#7000FF] font-semibold block font-mono mb-3">
            PARTNER NETWORK · HỆ SINH THÁI ĐỐI TÁC
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-[1.12] max-w-3xl">
            Mạng Lưới Tổ Chức &amp; Đề Án Đồng Hành Chuyển Đổi AI
          </h1>

          <p className="text-base sm:text-lg text-[#6E6E6E] font-light leading-relaxed max-w-3xl mt-4">
            Từ các định chế tài chính niêm yết, tập đoàn bất động sản đến các trường đại học hàng đầu và hệ sinh thái phân phối bán lẻ, đội ngũ chuyên gia Sunext đã đồng hành đào tạo, cố vấn và chuyển giao phương pháp luận ứng dụng AI hiệu quả trên khắp cả nước.
          </p>

          {/* 3 Metrics: Single Baseline with Hairlines (No Card Boxes!) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 mt-10 border-t border-b border-black/10 pb-10 max-w-3xl">
            <div>
              <span className="text-4xl sm:text-5xl font-light font-mono text-[#EA580C] block">
                08
              </span>
              <span className="text-xs font-semibold text-[#17151A] block mt-1.5 uppercase tracking-wider">
                Case Studies
              </span>
              <span className="text-xs text-[#747474] block mt-0.5 font-light">
                Bằng chứng có số liệu đo lường ROI
              </span>
            </div>

            <div className="sm:border-l border-black/10 sm:pl-8">
              <span className="text-4xl sm:text-5xl font-light font-mono text-[#7000FF] block">
                40+
              </span>
              <span className="text-xs font-semibold text-[#17151A] block mt-1.5 uppercase tracking-wider">
                Engagements
              </span>
              <span className="text-xs text-[#747474] block mt-0.5 font-light">
                Đề án &amp; chương trình thực tế
              </span>
            </div>

            <div className="sm:border-l border-black/10 sm:pl-8">
              <span className="text-4xl sm:text-5xl font-light font-mono text-[#17151A] block">
                45
              </span>
              <span className="text-xs font-semibold text-[#17151A] block mt-1.5 uppercase tracking-wider">
                Organizations
              </span>
              <span className="text-xs text-[#747474] block mt-0.5 font-light">
                10 Direct &amp; 35 Ecosystem
              </span>
            </div>
          </div>
        </section>

        {/* TIER 1 FIELD EVIDENCE: ASYMMETRICAL EDITORIAL PHOTO SPREAD (No Card Shells) */}
        <section className="mb-24">
          <div className="mb-8">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#EA580C] block mb-2">
              FIELD EVIDENCE · TIER 1 DIRECT ENGAGEMENTS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#17151A] tracking-tight">
              Hiện Trường Vận Hành &amp; Triển Khai Thực Tế
            </h2>
            <p className="text-sm sm:text-base text-[#6E6E6E] mt-2 max-w-2xl font-light">
              Minh chứng từ các đề án hợp tác sâu tại các tổ chức hàng đầu (Vinhomes, PTExim, Vietcombank, Smartlands), phân biệt rõ với mạng lưới đào tạo ngắn hạn.
            </p>
          </div>

          {/* Asymmetrical Photo Grid: 1 Dominant Spotlight + 3 Satellites */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Dominant Spotlight: Vinhomes (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden bg-neutral-100 border border-black/10 shadow-sm">
                <Image
                  src="/evidence/vinhomes-sales-deployment.png"
                  alt="Vinhomes 500+ Sales AI Deployment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover saturate-[0.94]"
                  priority
                />
              </div>
              <div className="pt-1">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-black/5 text-[#17151A] font-semibold">
                    VINHOMES
                  </span>
                  <span className="text-xs font-mono font-bold text-[#EA580C]">
                    &lt; 5 Phút phản hồi
                  </span>
                </div>
                <h3 className="text-lg font-normal text-[#17151A] mt-1.5">
                  Triển khai AI Sales Enablement &amp; giỏ hàng tự động cho 500+ môi giới
                </h3>
                <p className="text-xs sm:text-sm text-[#6E6E6E] font-light mt-1 leading-relaxed">
                  Thiết lập trợ lý ảo hỗ trợ tư vấn thực địa 24/7, tự động bóc tách tiến độ, chính sách bán hàng và matching nhu cầu khách hàng theo thời gian thực.
                </p>
              </div>
            </div>

            {/* 3 Satellite Photos (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* PTExim */}
              <div className="space-y-2 pb-5 border-b border-black/10">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-100 border border-black/10">
                  <Image
                    src="/evidence/ptexim-operations-onsite.png"
                    alt="PTExim Logistics Operations"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover saturate-[0.92]"
                  />
                </div>
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="font-mono text-[#7000FF] font-semibold">PTEXIM LOGISTICS</span>
                  <span className="font-mono text-[#EA580C] font-bold">−67% Chu kỳ xử lý</span>
                </div>
                <p className="text-xs text-[#515151] font-light leading-snug">
                  Khảo sát hiện trường &amp; chuẩn hóa SOP xuất nhập khẩu hạt tiêu xuất khẩu.
                </p>
              </div>

              {/* Vietcombank */}
              <div className="space-y-2 pb-5 border-b border-black/10">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-100 border border-black/10">
                  <Image
                    src="/evidence/vietcombank-strategic-workshop.jpg"
                    alt="Vietcombank Financial AI Workshop"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover saturate-[0.92]"
                  />
                </div>
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="font-mono text-[#7000FF] font-semibold">VIETCOMBANK</span>
                  <span className="font-mono text-emerald-700 font-bold">Zero Data Retention</span>
                </div>
                <p className="text-xs text-[#515151] font-light leading-snug">
                  Workshop chiến lược Multi-Agent &amp; rà soát an toàn dữ liệu Private VPC.
                </p>
              </div>

              {/* Smartlands */}
              <div className="space-y-2">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-100 border border-black/10">
                  <Image
                    src="/evidence/smartlands-real-estate-ai.jpg"
                    alt="Smartlands Real Estate AI"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover saturate-[0.92]"
                  />
                </div>
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="font-mono text-[#7000FF] font-semibold">SMARTLANDS</span>
                  <span className="font-mono text-[#EA580C] font-bold">100% Tỷ lệ hẹn gặp</span>
                </div>
                <p className="text-xs text-[#515151] font-light leading-snug">
                  Chuyển giao năng lực tư vấn tự động 24/7 cho đại lý chiến lược phân phối BĐS cao cấp.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TIER 1 DIRECT ENGAGEMENTS (EDITORIAL PARTNER LIST) */}
        <section className="mb-24">
          <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-black/10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#EA580C] font-semibold font-mono block mb-1">
                DANH MỤC ĐỐI TÁC TIER 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#17151A]">
                Tổ Chức &amp; Đề Án Hợp Tác Trực Tiếp (Có Case Study)
              </h2>
            </div>
            <span className="text-xs font-mono text-[#747474] hidden sm:inline">
              Xác thực bằng số liệu ROI
            </span>
          </div>

          {/* Editorial Hairline Registry (No rectangular cards) */}
          <div className="divide-y divide-black/10">
            {tier1Orgs.map((org) => {
              const proofText = TIER1_PROOFS[org.id] || org.description.split('.')[0] + '.';
              return (
                <div
                  key={org.id}
                  onClick={() => setSelectedOrg(org)}
                  className="group cursor-pointer py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors hover:bg-black/[0.015] px-2 rounded-lg"
                >
                  {/* Name & Industry */}
                  <div className="flex items-center gap-4 min-w-[280px]">
                    <div className="w-10 h-10 rounded-xl bg-white border border-black/5 p-1.5 flex items-center justify-center shrink-0 shadow-xs">
                      <Image
                        src={org.logoUrl}
                        alt={org.name}
                        width={80}
                        height={32}
                        className="max-h-6 max-w-[32px] w-auto h-auto object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-normal text-[#17151A] group-hover:text-[#7000FF] transition-colors">
                        {org.name}
                      </h3>
                      <span className="text-[11px] font-mono text-[#747474]">
                        {org.industryName}
                      </span>
                    </div>
                  </div>

                  {/* Engagement Proof Metric */}
                  <div className="md:flex-1 md:px-6">
                    <p className="text-xs sm:text-sm font-mono text-[#EA580C] leading-snug">
                      {proofText}
                    </p>
                  </div>

                  {/* Action Link & Arrow */}
                  <div className="flex items-center gap-4 shrink-0 text-xs">
                    {org.caseStudySlug ? (
                      <Link
                        href={`/case-studies/${org.caseStudySlug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 font-semibold text-[#7000FF] hover:underline"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <span className="text-[#8E8E8E] font-light">Bảo mật NDA</span>
                    )}
                    <span className="text-[#747474] group-hover:text-[#17151A] transition-colors">
                      →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* TIER 2: QUIET LOGO FIELD (Clean, Monochrome, No Marketplace Filter Pills) */}
        <section className="mb-24">
          <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-black/10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#7000FF] font-semibold font-mono block mb-1">
                TIER 2 · QUIET LOGO FIELD
              </span>
              <h2 className="text-xl sm:text-2xl font-light text-[#17151A]">
                Mạng Lưới Đối Tác &amp; Hệ Sinh Thái Doanh Nghiệp ({tier2Orgs.length} tổ chức)
              </h2>
            </div>
            <span className="text-xs font-mono text-[#747474] hidden sm:inline">
              Đồng hành đào tạo &amp; chuyển giao
            </span>
          </div>

          {/* Understated, elegant monochrome logo field */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
            {tier2Orgs.map((org) => (
              <div
                key={org.id}
                onClick={() => setSelectedOrg(org)}
                className="p-4 rounded-xl bg-white/60 hover:bg-white border border-black/5 hover:border-black/20 hover:shadow-xs transition-all flex flex-col items-center justify-center text-center min-h-[96px] group cursor-pointer"
              >
                <div className="w-full h-8 flex items-center justify-center mb-2 px-1">
                  <Image
                    src={org.logoUrl}
                    alt={org.name}
                    width={90}
                    height={32}
                    className="max-h-7 max-w-[70px] w-auto h-auto object-contain filter grayscale opacity-45 contrast-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100 transition-all duration-300"
                  />
                </div>
                <span className="text-[11px] font-medium text-[#747474] group-hover:text-[#17151A] transition-colors block truncate w-full">
                  {org.shortName || org.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Modal for Organization Details (Preserved) */}
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

              {/* Organization Header */}
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
                  <h3 className="text-xl font-light text-[#17151A]">
                    {selectedOrg.name}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 mb-6 text-xs sm:text-sm text-[#515151] leading-relaxed font-light">
                <p>{selectedOrg.description}</p>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-black/10 flex items-center justify-between gap-4">
                {selectedOrg.caseStudySlug ? (
                  <Link
                    href={`/case-studies/${selectedOrg.caseStudySlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7000FF] hover:underline"
                  >
                    <span>Xem Case Study Chi Tiết</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <span className="text-xs text-[#8E8E8E] font-light">
                    Hồ sơ đề án bảo mật theo cam kết NDA
                  </span>
                )}

                <Button
                  variant="outline"
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

        {/* CTA Section */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#17151A] text-white text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#EA580C] font-semibold font-mono">
              KHÁM PHÁ TIỀM NĂNG
            </span>
            <h3 className="text-2xl sm:text-3xl font-light">
              Gia Nhập Hệ Sinh Thái Doanh Nghiệp Chuyển Đổi AI Cùng Sunext
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              Tham vấn cùng đội ngũ chuyên gia để xác định use case trọng tâm và rà soát an toàn dữ liệu trước khi triển khai.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link href="/#contact">
              <Button variant="orange" size="lg" className="rounded-xl text-xs font-semibold px-8 shadow-sm">
                <span>Liên Hệ Hợp Tác &amp; Triển Khai</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
            <Link href="/danh-gia-san-sang-ai">
              <Button variant="outline" size="lg" className="rounded-xl text-xs font-semibold px-6 bg-white/10 hover:bg-white/20 border-white/20 text-white">
                <span>Chẩn Đoán Điểm Nghẽn AI</span>
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
