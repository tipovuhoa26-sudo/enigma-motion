'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface EvidenceItem {
  id: string;
  image: string;
  client: string;
  year: string;
  categoryLabel: string;
  headline: string;
  subtext: string;
  metric: string;
  metricLabel: string;
  linkUrl: string;
}

const FIELD_EVIDENCE: EvidenceItem[] = [
  {
    id: 'vinhomes',
    image: '/evidence/vinhomes-sales-deployment.png',
    client: 'VINHOMES',
    year: '2026',
    categoryLabel: 'AI Sales Enablement · Bất Động Sản',
    headline: '500+ Môi giới làm chủ công cụ AI tại hiện trường',
    subtext: 'Chuyển giao năng lực phản hồi lead tự động < 5 phút và đối soát giỏ hàng tức thì trực tiếp trên thiết bị di động.',
    metric: '< 5 PHÚT',
    metricLabel: 'Tốc độ phản hồi lead & khớp căn tự động',
    linkUrl: '/case-studies/vinhomes-ai-sales-enablement',
  },
  {
    id: 'fptu',
    image: '/evidence/fptu-techfest-onsite.png',
    client: 'ĐẠI HỌC FPT',
    year: '2026',
    categoryLabel: 'Giáo Dục & Chuyển Giao Năng Lực',
    headline: '10.000+ Lượt tương tác & Nâng bậc giảng viên chuẩn Bậc 6',
    subtext: 'Điều phối hệ thống AI Agents và MC ảo trực tiếp tại Tech Fest cùng chương trình nâng bậc phương pháp luận.',
    metric: '10.000+',
    metricLabel: 'Lượt tương tác đa tác tử AI tại hiện trường',
    linkUrl: '/case-studies/fptu-nang-bac-giang-vien-ai',
  },
  {
    id: 'dentsu',
    image: '/evidence/dentsu-workshop-onsite.png',
    client: 'DENTSU SPORTS',
    year: '2025',
    categoryLabel: 'Truyền Thông & Đấu Thầu Quốc Tế',
    headline: 'Rút ngắn 65% thời gian phát triển proposal đấu thầu',
    subtext: 'Chuẩn hóa quy trình AI tạo dựng storyline pitching và tự động hóa pitch deck cho các đề án tài trợ thể thao.',
    metric: '−65%',
    metricLabel: 'Thời gian hoàn thiện hồ sơ đấu thầu',
    linkUrl: '/case-studies/dentsu-ai-pitch-deck-automation',
  },
  {
    id: 'ptexim',
    image: '/evidence/ptexim-operations-onsite.png',
    client: 'PTEXIM LOGISTICS',
    year: '2025',
    categoryLabel: 'Khảo Sát Thực Địa Vận Hành & SOP',
    headline: 'Khảo sát dòng chứng từ & chuẩn hóa dữ liệu xuất nhập khẩu',
    subtext: 'Đội ngũ chuyên gia Sunext làm việc trực tiếp tại hiện trường phân loại hạt tiêu để rà soát điểm nghẽn trước khi số hóa.',
    metric: '−67%',
    metricLabel: 'Chu kỳ xử lý chứng từ hải quan & kho bãi',
    linkUrl: '/khach-hang-doi-tac',
  },
];

export function FieldEvidenceSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeItem = FIELD_EVIDENCE[activeIdx];

  return (
    <section className="relative w-full py-20 sm:py-28 px-6 md:px-12 bg-white border-b border-[#E7E7E5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Header: Lean & Decisive */}
        <div className="mb-12 sm:mb-14">
          <span className="text-[11px] font-mono font-bold tracking-[0.16em] uppercase text-[#7000FF] block mb-2">
            DOCUMENTARY PROOF · THỰC TẾ TRIỂN KHAI
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-light tracking-tight text-[#0A0A0A] leading-[1.12]">
            Được xây từ hiện trường.
          </h2>
          <p className="text-sm sm:text-base text-[#6E6E6E] font-light mt-2 max-w-2xl">
            Không dùng ảnh stock. Mọi hình ảnh và số liệu đều là minh chứng vật lý từ các phiên bàn giao, workshop và khảo sát thực địa cùng đối tác.
          </p>
        </div>

        {/* Unboxed Editorial Photography Spread — No rounded white card shell */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Dominant Editorial Photography Canvas (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 border border-black/10">
              <Image
                src={activeItem.image}
                alt={activeItem.headline}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center filter saturate-[0.95] transition-all duration-700 ease-out"
                priority
              />

              {/* Editorial Typography Overlay In Negative Space */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 font-mono text-[11px] uppercase tracking-wider px-3 py-1 bg-black/75 backdrop-blur-xs text-white border border-white/20">
                {activeItem.client} / {activeItem.year}
              </div>

              {/* Giant Metric Anchored to Image Edge */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-right px-4 py-3 bg-neutral-950/85 backdrop-blur-md border border-white/10 text-white">
                <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-light text-[#EA580C] block leading-none">
                  {activeItem.metric}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-neutral-300 block mt-1">
                  {activeItem.metricLabel}
                </span>
              </div>
            </div>

            {/* Editorial Caption / Annotation */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-black/10 pb-5">
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#7000FF] font-semibold block">
                  {activeItem.categoryLabel}
                </span>
                <h3 className="text-lg sm:text-xl font-light text-[#0A0A0A] tracking-tight">
                  {activeItem.headline}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E6E6E] font-light max-w-xl leading-relaxed">
                  {activeItem.subtext}
                </p>
              </div>

              <Link
                href={activeItem.linkUrl}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A0A0A] hover:text-[#EA580C] transition-colors shrink-0 font-mono"
              >
                <span>Xem hồ sơ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Dossier Roster (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#747474] font-semibold block mb-1">
              CHỌN MINH CHỨNG KHẢO SÁT ({FIELD_EVIDENCE.length})
            </span>

            {FIELD_EVIDENCE.map((item, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-4 rounded-xl transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-neutral-950 text-white border-neutral-800 shadow-md'
                      : 'bg-white hover:bg-neutral-50 border-black/10 text-[#17151A]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className={isSelected ? 'text-[#EA580C] font-bold' : 'text-[#7000FF] font-semibold'}>
                      {item.client}
                    </span>
                    <span className={isSelected ? 'text-neutral-400' : 'text-[#747474]'}>
                      {item.year}
                    </span>
                  </div>

                  <h4 className={`text-sm font-normal tracking-tight line-clamp-1 ${isSelected ? 'text-white' : 'text-[#0A0A0A]'}`}>
                    {item.headline}
                  </h4>

                  <div className="mt-2 flex items-center justify-between text-[11px] font-mono pt-1.5 border-t border-white/10">
                    <span className={isSelected ? 'text-[#FB923C] font-semibold' : 'text-[#EA580C] font-semibold'}>
                      {item.metric}
                    </span>
                    <span className={`text-[10px] ${isSelected ? 'text-neutral-400' : 'text-[#747474]'}`}>
                      {item.categoryLabel.split('·')[0].trim()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
