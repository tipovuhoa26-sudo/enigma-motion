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

    // Refresh ScrollTrigger after layout settles to ensure accurate track measurements
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
      className="relative w-full h-screen min-h-[640px] max-h-[880px] pt-20 pb-6 px-6 md:px-12 flex flex-col justify-between overflow-hidden bg-[#F8F8F6] scroll-mt-20"
      data-cases-pin
    >
      {/* Giant Watermark Heading: Subtle background watermark */}
      <div className="absolute top-16 left-0 right-0 flex items-center justify-center pointer-events-none select-none z-0">
        <h2
          ref={watermarkRef}
          className="text-center font-extralight tracking-tighter text-[#17151A] uppercase opacity-0 will-change-[opacity]"
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
              className="group shrink-0 w-[300px] sm:w-[340px] md:w-[380px] rounded-[28px] overflow-hidden bg-white/95 border border-black/[0.06] shadow-[0_12px_30px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.14)] hover:-translate-y-1.5 flex flex-col justify-between p-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer max-lg:snap-start transform-gpu will-change-transform"
              data-case-card={index}
            >
              {/* Card Meta Top: Category Pill + Index */}
              <div className="flex items-center justify-between mb-2.5 px-0.5">
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#FAFFDE] border border-[#DFE2C8] text-[#17151A] tracking-tight">
                  {item.category}
                </span>
                <span className="text-xs text-[#6E6E6E] font-mono font-medium">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
              </div>

              {/* Card Visual Container with bespoke code-drawn data graphics */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden my-1 shadow-inner border border-black/[0.05]">
                <CaseStudyVisual slug={item.slug} compact />
              </div>

              {/* Card Footer: Title & Arrow */}
              <div className="flex items-center justify-between pt-2.5 px-1">
                <span className="text-sm font-medium text-[#17151A] group-hover:text-black transition-colors line-clamp-1">
                  {item.title}
                </span>
                <div className="w-7 h-7 rounded-full bg-[#F5F3F6] group-hover:bg-[#17151A] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-2xs">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Bar: Scroll hint, All Works CTA */}
      <div className="w-full flex items-center justify-between pt-4 pb-2 z-20 text-xs text-[#6E6E6E]">
        <span className="hidden sm:inline-block font-normal">
          Kéo ngang để xem tiếp
        </span>

        {/* Center CTA */}
        <div className="mx-auto sm:mx-0">
          <Link href="/case-studies">
            <Button variant="primary" size="md" className="rounded-full shadow-sm text-xs font-medium cursor-pointer" data-cases-cta>
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
