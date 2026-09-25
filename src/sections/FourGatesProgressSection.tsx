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
  { id: '2', title: 'XÂY DỰNG', condition: 'Kiến trúc' },
  { id: '3', title: 'VẬN HÀNH', condition: 'Kiểm thử thực tế' },
  { id: '4', title: 'CHUYỂN GIAO', condition: 'Bàn giao' },
];

export function FourGatesProgressSection() {
  return (
    <section
      id="delivery"
      className="relative w-full py-20 sm:py-24 px-6 md:px-12 bg-[#0B0910] text-white border-y border-[#1E192B] overflow-hidden"
      aria-label="Kiểm soát trước khi mở rộng"
    >
      <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-14 sm:gap-16 relative z-10">
        
        {/* Editorial Headline & Brief Paragraph */}
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-light tracking-tight text-white leading-[1.12]">
            Kiểm soát trước khi mở rộng.
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] font-light mt-4 leading-relaxed">
            Mỗi giai đoạn chỉ được chuyển tiếp khi dữ liệu, kiến trúc, vận hành và khả năng tiếp nhận đạt điều kiện đã thống nhất.
          </p>
        </div>

        {/* ==================================================================== */}
        {/* CLEAN 4-STAGE HORIZONTAL TIMELINE                                     */}
        {/* ==================================================================== */}
        <div className="relative w-full py-4 select-none">
          {/* Base Horizontal Track passing through node center */}
          <div className="absolute top-[68px] sm:top-[70px] left-[12.5%] right-[12.5%] h-[1.5px] bg-[#2E2842] z-0" />

          {/* 4 Nodes in 4 Balanced Columns */}
          <div className="grid grid-cols-4 relative z-10">
            {STAGES.map((stage, idx) => {
              const isLast = idx === STAGES.length - 1;

              return (
                <div key={stage.id} className="flex flex-col items-center text-center">
                  {/* Stage Title */}
                  <span className="text-[11px] sm:text-xs font-mono tracking-[0.14em] text-[#C084FC] font-semibold mb-3">
                    {stage.title}
                  </span>

                  {/* Node Dot on Timeline */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-[#151221] border border-[#3E3557] my-1">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        isLast ? 'bg-[#EA580C]' : 'bg-white'
                      }`}
                    />
                  </div>

                  {/* Clear Vietnamese Gate Condition */}
                  <span className="text-xs sm:text-sm text-[#E2E8F0] font-light mt-3">
                    {stage.condition}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Single Quiet Link */}
        <div className="pt-2">
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
