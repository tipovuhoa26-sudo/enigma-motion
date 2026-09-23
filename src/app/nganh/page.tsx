'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Calendar,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { Button } from '@/components/Button';

interface IndustryItem {
  id: string;
  number: string;
  slug: string;
  name: string;
  english: string;
  painPoint: string;
  metric: string;
  metricLabel: string;
  image: string;
  capabilities: string[];
}

const INDUSTRIES: IndustryItem[] = [
  {
    id: 'real-estate',
    number: '01',
    slug: 'bat-dong-san',
    name: 'Bất động sản',
    english: 'Real Estate',
    painPoint: 'Lead phản hồi chậm làm mất cơ hội bán hàng vào tay đối thủ.',
    metric: '< 5 phút',
    metricLabel: 'Thời gian phản hồi thông tin & giỏ hàng 24/7',
    image: '/evidence/vinhomes-sales-deployment.png',
    capabilities: ['AI Sales Enablement', 'Tự động đối soát giỏ hàng', 'Lead Reactivation'],
  },
  {
    id: 'retail',
    number: '02',
    slug: 'ban-le-tieu-dung',
    name: 'Bán lẻ & FMCG',
    english: 'Retail & Consumer Goods',
    painPoint: 'Sàng lọc hàng trăm hồ sơ mùa vụ mất nhiều ngày làm chậm tiến độ mở rộng chuỗi.',
    metric: '3N → 2H',
    metricLabel: 'Rút ngắn thời gian sàng lọc hồ sơ CV',
    image: '/evidence/ptexim-operations-onsite.png',
    capabilities: ['AI ATS Resume Screener', 'Dự báo nhu cầu kho vận', 'Content Factory đa kênh'],
  },
  {
    id: 'manufacturing',
    number: '03',
    slug: 'san-xuat-che-tao',
    name: 'Sản xuất & Chế tạo',
    english: 'Precision Manufacturing',
    painPoint: 'Tỷ lệ lỗi sản phẩm lọt chuyền gây tổn thất chi phí bảo hành và uy tín thương hiệu.',
    metric: '99.8%',
    metricLabel: 'Độ chính xác kiểm định bề mặt lỗi 24/7',
    image: '/evidence/tayninh-executive-session.jpg',
    capabilities: ['Edge Computer Vision', 'Kiểm định lỗi chuyền máy', 'SOP giám sát P&L'],
  },
  {
    id: 'b2b-services',
    number: '04',
    slug: 'dich-vu-b2b',
    name: 'Dịch vụ B2B & Chuyên môn',
    english: 'B2B Professional Services',
    painPoint: 'Nút thắt thời gian chuyên gia và chi phí sản xuất tài liệu đấu thầu đắt đỏ.',
    metric: '−65%',
    metricLabel: 'Thời gian phát triển proposal & pitch deck',
    image: '/evidence/dentsu-marketing-ai-lab.png',
    capabilities: ['AI Pitch Deck Engine', 'Knowledge Base RAG', 'Chuẩn hóa quy trình thầu'],
  },
  {
    id: 'finance',
    number: '05',
    slug: 'tai-chinh-chung-khoan',
    name: 'Tài chính & Chứng khoán',
    english: 'Banking & Securities',
    painPoint: 'Báo cáo phân tích và dữ liệu tài chính thô xử lý thủ công mất nhiều ngày.',
    metric: '−75%',
    metricLabel: 'Thời gian bóc tách BCTC thô & đối soát',
    image: '/evidence/vietcombank-strategic-workshop.jpg',
    capabilities: ['Financial Multi-Agent', 'Đối soát dữ liệu hai chiều', 'Private VPC Core'],
  },
  {
    id: 'healthcare',
    number: '06',
    slug: 'y-te-duoc-pham',
    name: 'Y tế & Dược phẩm',
    english: 'Healthcare & Pharma',
    painPoint: 'Hồ sơ bệnh án phân tán và độ trễ đối soát dữ liệu lâm sàng kéo dài.',
    metric: '−60%',
    metricLabel: 'Thời gian tổng hợp hồ sơ & đối soát lâm sàng',
    image: '/evidence/thue-tphcm-document-ai.png',
    capabilities: ['Clinical Document Parser', 'Kiểm soát tuân thủ SOP', 'Bảo mật dữ liệu tuyệt đối'],
  },
];

export default function IndustryIndexPage() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeIndustry = INDUSTRIES[activeIdx] || INDUSTRIES[0];

  return (
    <div className="w-full min-h-screen flex flex-col sunext-atmospheric-canvas">
      <Header activeSection="service" />

      <main className="flex-1 flex flex-col w-full max-w-[1280px] mx-auto px-6 md:px-12 py-12 lg:py-16">
        {/* Top Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-black/5">
          <nav className="flex items-center gap-2 text-xs text-[#6E6E6E]">
            <Link href="/" className="hover:text-[#111111] transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <span className="text-[#111111] font-medium">Giải pháp theo ngành</span>
          </nav>

          <span className="text-xs font-mono text-[#7000FF] uppercase tracking-wider">
            6 Ngành Trọng Điểm
          </span>
        </div>

        {/* Hero Header Section */}
        <section className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-[11px] uppercase tracking-widest text-[#7000FF] font-semibold block mb-3">
            NGÀNH TRỌNG ĐIỂM · BÀI TOÁN KINH TẾ
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-[1.14]">
            Giải pháp AI may đo theo đặc thù ngành
          </h1>
          <p className="text-base sm:text-lg text-[#626262] font-light leading-relaxed mt-6">
            Mỗi ngành kinh doanh có cấu trúc chi phí và điểm nghẽn P&amp;L riêng biệt. Sunext không dùng giải pháp rập khuôn: chúng tôi giải đúng bài toán kinh tế trọng yếu nhất, chứng minh bằng kết quả đo lường và chuyển giao năng lực tự chủ.
          </p>
        </section>

        {/* Interactive Editorial Index: Left List (6 items) + Right Shared Canvas (1 dominant object) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-28 lg:mb-36">
          
          {/* Left Column: 6 Industry Rows */}
          <div className="lg:col-span-5 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#747474] block mb-4">
              CHỌN HOẶC RÊ CHUỘT QUA CÁC NGÀNH
            </span>

            {INDUSTRIES.map((ind, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={ind.id}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  className={`group p-4 sm:p-5 rounded-2xl transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-white border-[#17151A] shadow-xs'
                      : 'border-transparent hover:bg-white/60 hover:border-black/5'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-3">
                      <span className={`font-mono text-xs ${isActive ? 'text-[#EA580C] font-semibold' : 'text-[#747474]'}`}>
                        {ind.number}
                      </span>
                      <div>
                        <h2 className={`text-lg sm:text-xl font-light transition-colors ${
                          isActive ? 'text-[#17151A] font-normal' : 'text-[#515151] group-hover:text-[#17151A]'
                        }`}>
                          {ind.name}
                        </h2>
                        <span className="text-[11px] font-mono text-[#747474] block mt-0.5">
                          {ind.english}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className={`font-mono text-base font-light block ${isActive ? 'text-[#EA580C]' : 'text-[#747474]'}`}>
                        {ind.metric}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Shared Large Canvas (Unboxed, Dominant Art Object) */}
          <div className="lg:col-span-7 lg:sticky lg:top-28 space-y-5">
            {/* Unboxed Full-Bleed Photo Area with Giant Typography in Negative Space */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 border border-black/10">
              <Image
                src={activeIndustry.image}
                alt={activeIndustry.name}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center filter saturate-[0.95] transition-all duration-700 ease-out"
                priority
              />

              {/* Editorial Badge in Upper Left */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 font-mono text-[11px] uppercase tracking-wider px-3 py-1 bg-black/75 backdrop-blur-xs text-white border border-white/20">
                {activeIndustry.number} · {activeIndustry.english.toUpperCase()}
              </div>

              {/* Giant Metric in Negative Space of Image */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-right px-4 py-3 bg-neutral-950/85 backdrop-blur-md border border-white/10 text-white">
                <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-light text-[#EA580C] block leading-none">
                  {activeIndustry.metric}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-neutral-300 block mt-1">
                  {activeIndustry.metricLabel}
                </span>
              </div>
            </div>

            {/* Editorial Annotation Directly on Canvas (No Outer Box) */}
            <div className="space-y-4 pt-1">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#7000FF] font-semibold block mb-1">
                  ĐIỂM NGHẼN KINH TẾ CỐT LÕI
                </span>
                <p className="text-lg sm:text-xl font-light text-[#17151A] leading-snug">
                  {activeIndustry.painPoint}
                </p>
              </div>

              {/* Key Capabilities: Clean inline text */}
              <div className="pt-3 border-t border-black/10 text-xs text-[#6E6E6E] font-light">
                <span className="font-mono text-[11px] text-[#515151]">
                  Năng lực lõi: <strong className="text-[#17151A] font-semibold">{activeIndustry.capabilities.join(' · ')}</strong>
                </span>
              </div>

              {/* Action Links */}
              <div className="pt-3 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={`/nganh/${activeIndustry.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#17151A] text-white text-xs font-medium hover:bg-[#333] transition-all cursor-pointer"
                >
                  <span>Khám phá đề án {activeIndustry.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/case-studies"
                  className="text-xs text-[#747474] hover:text-[#17151A] inline-flex items-center gap-1 font-mono transition-colors"
                >
                  <span>Xem case study liên quan</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </section>

        {/* Bottom Editorial Callout */}
        <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-[#17151A] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#EA580C] font-semibold block">
              PHƯƠNG PHÁP LUẬN TỰ CHỦ
            </span>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight leading-snug">
              Không thấy ngành của bạn ở đây?
            </h2>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              Phương Pháp Luận Sunext được thiết kế để tùy biến cho bất kỳ mô hình kinh doanh nào có quy trình lặp lại và khối lượng dữ liệu lớn. Hãy trao đổi trực tiếp với chuyên gia giải pháp của chúng tôi.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link href="/tu-duy-chuyen-doi-ai">
              <Button variant="orange" size="md" className="rounded-xl text-xs font-semibold">
                Khám Phá Sunext Method
              </Button>
            </Link>
            <Link href="/danh-gia-san-sang-ai">
              <button
                type="button"
                className="px-5 py-2.5 rounded-xl text-xs font-medium text-white border border-white/20 hover:bg-white/10 transition-all cursor-pointer"
              >
                Đo Lường Sẵn Sàng (12 Câu)
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
