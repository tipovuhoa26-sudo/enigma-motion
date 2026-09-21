'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';
import { CaseStudy, CASES_DATA } from '@/content/data';
import { createCasesGalleryTimeline } from '@/motion/timelines/casesGallery';
import { ScrollTrigger } from '@/motion';

interface CasesProps {
  cases?: CaseStudy[];
}

export function CasesSection({ cases = CASES_DATA }: CasesProps) {
  const pinTargetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pinTargetRef.current || !trackRef.current) return;

    const initialCards = Array.from(trackRef.current.children).slice(0, 4) as HTMLElement[];

    const galleryTl = createCasesGalleryTimeline({
      pinTarget: pinTargetRef.current,
      track: trackRef.current,
      watermark: null,
      initialCards,
    });

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(refreshTimer);
      galleryTl.kill();
    };
  }, []);

  return (
    <section
      id="cases"
      ref={pinTargetRef}
      className="relative w-full h-screen min-h-[660px] max-h-[920px] pt-20 pb-8 px-6 md:px-12 flex flex-col justify-between overflow-hidden bg-white scroll-mt-20 border-b border-[#E8E8E8]"
      data-cases-pin
    >
      {/* Enterprise Section Header Block */}
      <div className="w-full max-w-4xl mx-auto text-center z-10 shrink-0 mb-3 pt-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8FC] border border-[#E8E8E8] text-xs font-semibold text-[#6B21A8] mb-2 shadow-2xs">
          <span>Thực Tiễn Triển Khai</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-[#111111] leading-tight mb-2">
          Dự Án Thực Tế & Kết Quả Đo Lường
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#626262] font-normal max-w-lg mx-auto">
          100% dự án được nghiệm thu định lượng bằng P&L và thời gian thực tế tại doanh nghiệp Việt Nam.
        </p>
      </div>

      {/* Horizontal Card Track */}
      <div className="relative w-full my-auto z-10 overflow-hidden py-2">
        <div
          ref={trackRef}
          className="flex items-stretch gap-6 md:gap-8 lg:will-change-transform max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory max-lg:pb-4 max-lg:no-scrollbar"
          data-cases-track
        >
          {cases.map((item, index) => (
            <Link
              key={item.id}
              href={`/case-studies/${item.slug}`}
              className="group shrink-0 w-[310px] sm:w-[350px] md:w-[380px] rounded-2xl overflow-hidden bg-white border border-[#E8E8E8] shadow-xs hover:border-[#6B21A8]/40 hover:shadow-[0_12px_28px_-6px_rgba(107,33,168,0.08)] hover:-translate-y-1.5 flex flex-col justify-between p-5 sm:p-6 transition-all duration-300 ease-out cursor-pointer max-lg:snap-start transform-gpu will-change-transform"
              data-case-card={index}
            >
              {/* Top Meta: Category + Index */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF8FC] border border-[#E8E8E8] text-[#6B21A8]">
                    {item.category}
                  </span>
                  <span className="text-xs text-[#8E8E8E] font-mono font-medium">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                </div>

                {/* Client / Organization */}
                {item.client && (
                  <div className="text-xs font-semibold text-[#6B21A8] mb-1.5">
                    {item.client}
                  </div>
                )}

                {/* Project Title */}
                <h3 className="text-base sm:text-lg font-normal text-[#111111] group-hover:text-[#6B21A8] transition-colors leading-snug mb-2.5">
                  {item.title}
                </h3>

                {/* Narrative Summary */}
                <p className="text-xs sm:text-sm text-[#626262] leading-relaxed line-clamp-3 mb-5">
                  {item.summary}
                </p>
              </div>

              {/* Bottom Metrics & CTA */}
              <div>
                {item.metrics && item.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-[#F7F7F8] border border-[#E8E8E8] mb-4">
                    {item.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="flex flex-col">
                        <span className="text-xs sm:text-sm font-medium text-[#111111] truncate">
                          {m.value}
                        </span>
                        <span className="text-[10px] text-[#888888] truncate">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Card Action Link */}
                <div className="flex items-center justify-between pt-2.5 border-t border-[#F0EFEA] text-xs font-medium text-[#111111] group-hover:text-[#6B21A8] transition-colors">
                  <span>Xem chi tiết dự án</span>
                  <div className="w-6 h-6 rounded-full bg-[#F7F7F8] group-hover:bg-[#F97316] group-hover:text-white flex items-center justify-center transition-all duration-200 group-hover:scale-105 text-[#111111]">
                    <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between pt-3 pb-1 z-20 text-xs text-[#626262]">
        <span className="hidden sm:inline-block font-normal">
          Kéo ngang để duyệt danh sách dự án
        </span>

        {/* Center CTA */}
        <div className="mx-auto sm:mx-0">
          <Link href="/case-studies">
            <Button variant="orange" size="md" className="rounded-full shadow-sm text-xs font-medium cursor-pointer" data-cases-cta>
              <span>Xem tất cả dự án</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        <span className="hidden sm:inline-block font-mono text-[#8E8E8E]">
          {cases.length} Dự án tiêu biểu
        </span>
      </div>
    </section>
  );
}
