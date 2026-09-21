'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';
import { CaseStudy, CASES_DATA } from '@/content/data';
import { CaseStudyVisual } from '@/components/visuals/CaseStudyVisual';
import { createCasesGalleryTimeline } from '@/motion/timelines/casesGallery';
import { ScrollTrigger } from '@/motion';

interface CasesProps {
  cases?: CaseStudy[];
}

export function CasesSection({ cases = CASES_DATA }: CasesProps) {
  const pinTargetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!pinTargetRef.current || !trackRef.current) return;

    const initialCards = Array.from(trackRef.current.children).slice(0, 4) as HTMLElement[];

    const galleryTl = createCasesGalleryTimeline({
      pinTarget: pinTargetRef.current,
      track: trackRef.current,
      watermark: watermarkRef.current,
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
      className="relative w-full h-screen min-h-[640px] max-h-[880px] pt-20 pb-6 px-6 md:px-12 flex flex-col justify-between overflow-hidden bg-white scroll-mt-20 border-b border-[#E8E8E8]"
      data-cases-pin
    >
      {/* Giant Watermark Heading */}
      <div className="absolute top-16 left-0 right-0 flex items-center justify-center pointer-events-none select-none z-0">
        <h2
          ref={watermarkRef}
          className="text-center font-extralight tracking-tighter text-[#111111] uppercase opacity-0 will-change-[opacity]"
          style={{ fontSize: 'clamp(3rem, 11vw, 8.5rem)', lineHeight: 0.85 }}
          data-cases-watermark
        >
          DỰ ÁN THỰC TẾ
        </h2>
      </div>

      {/* Horizontal Card Track */}
      <div className="relative w-full my-auto z-10 overflow-hidden py-3">
        <div
          ref={trackRef}
          className="flex items-center gap-6 md:gap-8 lg:will-change-transform max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory max-lg:pb-4 max-lg:no-scrollbar"
          data-cases-track
        >
          {cases.map((item, index) => (
            <Link
              key={item.id}
              href={`/case-studies/${item.slug}`}
              className="group shrink-0 w-[300px] sm:w-[340px] md:w-[380px] rounded-2xl overflow-hidden bg-white border border-[#E8E8E8] shadow-xs hover:border-[#6B21A8]/40 hover:shadow-[0_12px_28px_-6px_rgba(107,33,168,0.08)] hover:-translate-y-1.5 flex flex-col justify-between p-4 transition-all duration-300 ease-out cursor-pointer max-lg:snap-start transform-gpu will-change-transform"
              data-case-card={index}
            >
              {/* Card Meta Top: Category Pill + Index */}
              <div className="flex items-center justify-between mb-2.5 px-0.5">
                <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#FAF8FC] border border-[#E8E8E8] text-[#6B21A8] tracking-tight">
                  {item.category}
                </span>
                <span className="text-xs text-[#8E8E8E] font-mono font-medium">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
              </div>

              {/* Card Visual Container */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden my-1 border border-[#E8E8E8]">
                <CaseStudyVisual slug={item.slug} compact />
              </div>

              {/* Card Footer: Title & Action Icon */}
              <div className="flex items-center justify-between pt-3 px-1">
                <span className="text-sm font-medium text-[#111111] group-hover:text-[#6B21A8] transition-colors line-clamp-1">
                  {item.title}
                </span>
                <div className="w-7 h-7 rounded-full bg-[#F7F7F8] group-hover:bg-[#F97316] group-hover:text-white flex items-center justify-center transition-all duration-200 group-hover:scale-105 shadow-2xs text-[#111111]">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between pt-4 pb-2 z-20 text-xs text-[#626262]">
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

        <span className="hidden sm:inline-block text-[11px] text-[#8E8E8E]">
          {cases.length} Dự án tiêu biểu
        </span>
      </div>
    </section>
  );
}
