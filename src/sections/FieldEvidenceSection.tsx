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
        
        {/* Section Header: Lean & Decisive */}
        <div className="mb-10 sm:mb-12">
          <span className="text-[11px] font-mono font-bold tracking-[0.16em] uppercase text-[#7000FF] block mb-2">
            THỰC TẾ TRIỂN KHAI
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-light tracking-tight text-[#0A0A0A] leading-[1.12]">
            Được xây từ hiện trường.
          </h2>
        </div>

        {/* Asymmetrical Editorial Photography Spread — Breathable, No Heavy Card Shells */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Hero Photo: Vinhomes 500+ Sales Deployment */}
          <Link
            href={FIELD_EVIDENCE[0].linkUrl}
            className="lg:col-span-7 group block cursor-pointer"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-xs group-hover:shadow-md transition-shadow duration-300">
              <Image
                src={FIELD_EVIDENCE[0].image}
                alt={FIELD_EVIDENCE[0].headline}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center filter saturate-[0.94] group-hover:scale-[1.02] group-hover:saturate-100 transition-all duration-500 ease-out"
              />
            </div>

            <div className="mt-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#747474]">
                <span className="text-[#EA580C] font-semibold">{FIELD_EVIDENCE[0].client}</span>
                <span>·</span>
                <span>{FIELD_EVIDENCE[0].categoryLabel}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-[#0A0A0A] tracking-tight group-hover:text-[#F97316] transition-colors leading-snug">
                {FIELD_EVIDENCE[0].headline}
              </h3>
              <p className="text-sm text-[#6E6E6E] font-light leading-relaxed max-w-xl">
                {FIELD_EVIDENCE[0].subtext}
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-mono">
                <span className="text-[#EA580C] font-semibold">{FIELD_EVIDENCE[0].metric}</span>
                <span className="inline-flex items-center gap-1 text-[#0A0A0A] group-hover:text-[#F97316] transition-colors font-medium">
                  <span>Xem case</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>

          {/* Secondary Column: PTExim & Vietcombank Editorial Stack */}
          <div className="lg:col-span-5 space-y-8 lg:space-y-10">
            {FIELD_EVIDENCE.slice(1).map((item, idx) => (
              <Link
                key={item.id}
                href={item.linkUrl}
                className="group block cursor-pointer pb-6 border-b border-[#E7E7E5] last:border-b-0 last:pb-0"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-100 shadow-xs group-hover:shadow-md transition-shadow duration-300 mb-4">
                  <Image
                    src={item.image}
                    alt={item.headline}
                    fill
                    sizes="(max-width: 1024px) 50vw, 40vw"
                    className="object-cover object-center filter saturate-[0.94] group-hover:scale-[1.02] group-hover:saturate-100 transition-all duration-500 ease-out"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#747474]">
                    <span className="text-[#17151A] font-medium">{item.client}</span>
                    <span>·</span>
                    <span>{item.categoryLabel}</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-normal text-[#0A0A0A] tracking-tight group-hover:text-[#F97316] transition-colors leading-snug">
                    {item.headline}
                  </h4>
                  <div className="pt-1 flex items-center justify-between text-xs font-mono">
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
