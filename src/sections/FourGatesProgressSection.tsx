'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Stage {
  id: string;
  title: string;
  condition: string;
}

const STAGES: Stage[] = [
  { id: '1', title: 'KHẢO SÁT', condition: 'Dữ liệu & API' },
  { id: '2', title: 'XÂY DỰNG', condition: 'Kiến trúc & an toàn' },
  { id: '3', title: 'VẬN HÀNH', condition: 'Kiểm thử thực tế' },
  { id: '4', title: 'CHUYỂN GIAO', condition: 'Bàn giao & tiếp nhận' },
];

export function FourGatesProgressSection() {
  return (
    <section
      id="delivery"
      className="relative w-full py-24 sm:py-32 bg-[#100E17] text-white border-y border-[#1F1C2B] overflow-hidden"
      aria-label="Kiểm soát trước khi mở rộng"
    >
      {/* Background Soft Ambient Glow (Muted Aubergine & Warm Peach) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[350px] pointer-events-none -z-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(88, 28, 135, 0.2) 0%, rgba(234, 88, 12, 0.05) 50%, transparent 80%)',
          filter: 'blur(90px)',
        }}
      />

      <div className="w-full flex flex-col gap-16 sm:gap-20 relative z-10">
        
        {/* Editorial Headline & Brief Paragraph */}
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#94A3B8] font-semibold block mb-2 select-none">
              QUY TRÌNH 4 GATES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-light tracking-tight text-white leading-[1.1]">
              Kiểm soát trước khi mở rộng.
            </h2>
            <p className="text-base sm:text-lg text-[#94A3B8] font-light mt-4 leading-relaxed">
              Mỗi giai đoạn chỉ được chuyển tiếp khi dữ liệu, kiến trúc, vận hành và khả năng tiếp nhận đạt điều kiện đã thống nhất.
            </p>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* FULL-WIDTH RESTRAINED JOURNEY TIMELINE                               */}
        {/* ==================================================================== */}
        <div className="relative w-full px-6 sm:px-12 lg:px-20 xl:px-28 select-none">
          {/* Hairline Journey Track (Muted Charcoal/Purple into Orange) */}
          <div className="absolute top-[72px] sm:top-[76px] left-[12.5%] right-[12.5%] h-[1.5px] bg-gradient-to-r from-[#2A2338] via-[#3B2F52] to-[#EA580C]/70 z-0" />

          {/* 4 Checkpoint Nodes across full width */}
          <div className="grid grid-cols-4 relative z-10">
            {STAGES.map((stage, idx) => {
              const isLast = idx === STAGES.length - 1;
              const isActive = idx === 2; // Gate 3 (Vận hành) is active operational phase

              return (
                <div key={stage.id} className="flex flex-col items-center text-center group">
                  {/* Stage Eyebrow Title */}
                  <span
                    className={`text-xs sm:text-sm font-mono tracking-[0.16em] mb-4 font-semibold transition-colors ${
                      isLast
                        ? 'text-[#EA580C]'
                        : isActive
                        ? 'text-[#DDD6FE]'
                        : 'text-[#94A3B8] group-hover:text-[#E2E8F0]'
                    }`}
                  >
                    {stage.title}
                  </span>

                  {/* Checkpoint Circle: Only active & last have gentle restrained glow */}
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 my-1 ${
                      isLast
                        ? 'bg-[#1D121B] border-2 border-[#EA580C] shadow-[0_0_20px_rgba(234,88,12,0.3)]'
                        : isActive
                        ? 'bg-[#1D172E] border-2 border-[#7C3AED] shadow-[0_0_18px_rgba(124,58,237,0.25)]'
                        : 'bg-[#161320] border border-[#352B47] group-hover:border-[#581C87]'
                    }`}
                  >
                    <span
                      className={`w-3 h-3 rounded-full ${
                        isLast ? 'bg-[#EA580C]' : isActive ? 'bg-white' : 'bg-[#94A3B8]'
                      }`}
                    />
                  </div>

                  {/* Single Clean Vietnamese Condition */}
                  <span className="text-xs sm:text-sm text-[#CBD5E1] font-light mt-4 tracking-wide">
                    {stage.condition}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Single Quiet Link */}
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-16 pt-2">
          <Link
            href="/phap-ly-bao-mat"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#A78BFA] hover:text-white transition-colors"
          >
            <span>Xem khung quản trị và an toàn dữ liệu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
