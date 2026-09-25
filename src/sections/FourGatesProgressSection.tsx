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
      className="relative w-full py-24 sm:py-32 bg-[#0B0910] text-white border-y border-[#1E192B] overflow-hidden"
      aria-label="Kiểm soát trước khi mở rộng"
    >
      {/* Background Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[350px] pointer-events-none -z-0 opacity-25"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(112, 0, 255, 0.22) 0%, rgba(234, 88, 12, 0.08) 50%, transparent 80%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="w-full flex flex-col gap-16 sm:gap-20 relative z-10">
        
        {/* Editorial Headline & Brief Paragraph (In comfortable max-w) */}
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-light tracking-tight text-white leading-[1.1]">
              Kiểm soát trước khi mở rộng.
            </h2>
            <p className="text-base sm:text-lg text-[#94A3B8] font-light mt-4 leading-relaxed">
              Mỗi giai đoạn chỉ được chuyển tiếp khi dữ liệu, kiến trúc, vận hành và khả năng tiếp nhận đạt điều kiện đã thống nhất.
            </p>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* FULL-WIDTH DARK JOURNEY TIMELINE                                      */}
        {/* ==================================================================== */}
        <div className="relative w-full px-6 sm:px-12 lg:px-20 xl:px-28 select-none">
          {/* Edge-to-edge Glowing Journey Track */}
          <div className="absolute top-[72px] sm:top-[76px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-[#581C87] via-[#8B5CF6] to-[#EA580C] z-0 opacity-80" />

          {/* Traveling Pulse Along Track */}
          <div className="hidden sm:block absolute top-[71px] left-[12.5%] right-[12.5%] h-[4px] z-0 overflow-hidden pointer-events-none">
            <div className="w-24 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-[marquee_4s_linear_infinite]" />
          </div>

          {/* 4 Dominant Nodes across full width */}
          <div className="grid grid-cols-4 relative z-10">
            {STAGES.map((stage, idx) => {
              const isLast = idx === STAGES.length - 1;

              return (
                <div key={stage.id} className="flex flex-col items-center text-center group">
                  {/* Stage Eyebrow Title */}
                  <span
                    className={`text-xs sm:text-sm font-mono tracking-[0.16em] mb-4 font-semibold transition-colors ${
                      isLast ? 'text-[#EA580C]' : 'text-[#C084FC] group-hover:text-white'
                    }`}
                  >
                    {stage.title}
                  </span>

                  {/* Dominant Circular Checkpoint */}
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-[#130F24] border-2 transition-transform duration-300 group-hover:scale-105 my-1 ${
                      isLast
                        ? 'border-[#EA580C] shadow-[0_0_28px_rgba(234,88,12,0.45)]'
                        : 'border-[#7000FF] shadow-[0_0_20px_rgba(112,0,255,0.3)]'
                    }`}
                  >
                    <span
                      className={`w-3.5 h-3.5 rounded-full ${
                        isLast ? 'bg-[#EA580C]' : 'bg-white'
                      }`}
                    />
                  </div>

                  {/* Single Clean Vietnamese Condition */}
                  <span className="text-xs sm:text-sm text-[#E2E8F0] font-light mt-4 tracking-wide">
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
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#C084FC] hover:text-white transition-colors"
          >
            <span>Xem khung quản trị và an toàn dữ liệu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
