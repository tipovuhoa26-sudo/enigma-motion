'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface EvidenceItem {
  id: string;
  image: string;
  client: string;
  category: 'trien-khai' | 'discovery' | 'van-hanh';
  categoryLabel: string;
  headline: string;
  subtext: string;
  metric?: string;
  linkUrl: string;
}

const FIELD_EVIDENCE: EvidenceItem[] = [
  {
    id: 'ev-vinhomes',
    image: '/evidence/vinhomes-sales-deployment.png',
    client: 'Vinhomes Green Paradise',
    category: 'trien-khai',
    categoryLabel: 'Triển Khai Thực Chiến',
    headline: '500+ Môi giới làm chủ công cụ AI tại hiện trường',
    subtext: 'Chuyển giao năng lực phản hồi lead tự động < 5 phút và đối soát giỏ hàng tức thì trực tiếp trên thiết bị di động.',
    metric: '500+ Môi Giới · < 5 Phút',
    linkUrl: '/case-studies/vinhomes-ai-sales-enablement',
  },
  {
    id: 'ev-ptexim',
    image: '/evidence/ptexim-operations-onsite.png',
    client: 'PTExim Logistics',
    category: 'van-hanh',
    categoryLabel: 'Hiện Trường Vận Hành',
    headline: 'Khảo sát dòng chứng từ & tối ưu SOP logistics',
    subtext: 'Làm việc trực tiếp tại hiện trường xuất nhập khẩu để chuẩn hóa dữ liệu trước khi tích hợp hệ thống AI tự động.',
    metric: '−67% Thời Gian Xử Lý',
    linkUrl: '/khach-hang-doi-tac',
  },
  {
    id: 'ev-vietcombank',
    image: '/evidence/vietcombank-strategic-workshop.jpg',
    client: 'Vietcombank & Định Chế Tài Chính',
    category: 'discovery',
    categoryLabel: 'Discovery & Kiến Trúc',
    headline: 'Hội thảo chiến lược & kiến trúc Multi-Agent tài chính',
    subtext: 'Định hình bài toán ứng dụng AI, xác lập ranh giới bảo mật ZDR và mô hình phân quyền dữ liệu nghiêm ngặt.',
    metric: 'Bảo Mật Private VPC',
    linkUrl: '/doi-ngu#finance',
  },
];

export function FieldEvidenceSection() {
  return (
    <section className="relative w-full py-20 sm:py-28 px-6 md:px-12 bg-white border-b border-[#E7E7E5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Header: Minimal & Decisive */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#F97316]" />
              <span className="text-xs font-mono font-bold tracking-[0.16em] uppercase text-[#747474]">
                ĐƯỢC XÂY TỪ HIỆN TRƯỜNG
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-light tracking-tight text-[#0A0A0A] leading-[1.12]">
              Từ phòng họp chiến lược đến vận hành thực tế.
            </h2>
          </div>

          <div className="text-xs sm:text-sm font-mono text-[#747474] max-w-[320px] leading-relaxed">
            <span className="text-[#0A0A0A] font-semibold">Real work. Real environments.</span> Minh chứng triển khai thực địa cùng đội ngũ doanh nghiệp đối tác.
          </div>
        </div>

        {/* Asymmetrical Editorial Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Main Hero Evidence Card: Vinhomes 500+ Sales Deployment */}
          <Link
            href={FIELD_EVIDENCE[0].linkUrl}
            className="lg:col-span-7 group flex flex-col rounded-xl overflow-hidden border border-[#E7E7E5] bg-[#FBFBFA] hover:border-[#D5D3CC] transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-neutral-100">
              <Image
                src={FIELD_EVIDENCE[0].image}
                alt={FIELD_EVIDENCE[0].headline}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center filter saturate-[0.92] group-hover:scale-[1.02] group-hover:saturate-100 transition-all duration-500 ease-out"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-md text-[11px] font-mono font-semibold bg-white/90 backdrop-blur-xs text-[#0A0A0A] border border-black/5 shadow-xs uppercase tracking-wider">
                  {FIELD_EVIDENCE[0].categoryLabel} · {FIELD_EVIDENCE[0].client}
                </span>
              </div>
              {FIELD_EVIDENCE[0].metric && (
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-[#0A0A0A]/85 backdrop-blur-xs text-white shadow-xs">
                    {FIELD_EVIDENCE[0].metric}
                  </span>
                </div>
              )}
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-normal text-[#0A0A0A] tracking-tight group-hover:text-[#F97316] transition-colors leading-snug mb-2">
                  {FIELD_EVIDENCE[0].headline}
                </h3>
                <p className="text-sm text-[#515151] leading-relaxed max-w-[560px]">
                  {FIELD_EVIDENCE[0].subtext}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#EAEAE8] flex items-center justify-between text-xs font-mono text-[#747474]">
                <span>Case Study Triển Khai Doanh Nghiệp</span>
                <span className="inline-flex items-center gap-1 font-semibold text-[#0A0A0A] group-hover:text-[#F97316] transition-colors">
                  <span>Chi tiết đề án</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>

          {/* Secondary Stacked Column (PTExim & Vietcombank) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {FIELD_EVIDENCE.slice(1).map((item) => (
              <Link
                key={item.id}
                href={item.linkUrl}
                className="group flex-1 flex flex-col sm:flex-row lg:flex-col rounded-xl overflow-hidden border border-[#E7E7E5] bg-[#FBFBFA] hover:border-[#D5D3CC] transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
              >
                <div className="relative aspect-[16/9] sm:aspect-square lg:aspect-[16/9] sm:w-[42%] lg:w-full overflow-hidden bg-neutral-100 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.headline}
                    fill
                    sizes="(max-width: 1024px) 50vw, 40vw"
                    className="object-cover object-center filter saturate-[0.92] group-hover:scale-[1.02] group-hover:saturate-100 transition-all duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-white/90 backdrop-blur-xs text-[#0A0A0A] border border-black/5 uppercase tracking-wider">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono text-[#747474] uppercase tracking-wider mb-1">
                      {item.client}
                    </div>
                    <h4 className="text-base sm:text-lg font-medium text-[#0A0A0A] tracking-tight group-hover:text-[#F97316] transition-colors leading-snug mb-1.5">
                      {item.headline}
                    </h4>
                    <p className="text-xs text-[#515151] leading-relaxed line-clamp-2">
                      {item.subtext}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-[#EAEAE8] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#EA580C] font-semibold">{item.metric}</span>
                    <span className="inline-flex items-center gap-1 text-[#0A0A0A] group-hover:text-[#F97316] transition-colors font-medium">
                      <span>Khảo sát</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
