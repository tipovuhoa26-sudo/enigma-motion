'use client';

import React, { useState } from 'react';
import { ThreeServicesSolarCanvas } from '@/components/visuals/ThreeServicesSolarCanvas';

export function ThreeServicesSection() {
  const [activePillar, setActivePillar] = useState<number>(3); // Default to Multi-Agent deployment

  return (
    <section className="relative w-full py-24 sm:py-36 px-6 md:px-12 lg:px-20 bg-white border-b border-[#E7E7E5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        
        {/* 1 Headline + 1 Support Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#581C87] font-semibold mb-3 block">
              3 Trụ Cột Đồng Hành · Kiến Trúc Mặt Trời
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0A0A0A] leading-tight">
              Đào tạo. Tư vấn. <span className="font-normal text-[#0A0A0A]">Triển khai.</span>
            </h2>
          </div>

          <p className="text-base text-[#515151] max-w-[420px] leading-relaxed font-normal">
            Linh hoạt theo năng lực nội tại và mục tiêu P&L thực tế của từng doanh nghiệp.
          </p>
        </div>

        {/* 1 Main Visual: Interactive Solar Architecture Canvas */}
        <div className="w-full bg-[#F9F9F8] rounded-2xl border border-[#E7E7E5] p-6 sm:p-10 mb-12 shadow-xs">
          <ThreeServicesSolarCanvas
            activePillar={activePillar}
            onSelectPillar={setActivePillar}
          />
        </div>

        {/* 1 Clear Proof Metric */}
        <div className="flex items-baseline gap-4 pt-2">
          <span className="text-5xl sm:text-6xl font-light tracking-tight text-[#0A0A0A] tabular-nums">
            40+
          </span>
          <div className="flex flex-col">
            <span className="text-base font-medium text-[#0A0A0A]">Dự án doanh nghiệp đã triển khai</span>
            <span className="text-xs font-mono text-[#747474]">Đo lường bằng thời gian thực tế và kết quả P&L tại Việt Nam</span>
          </div>
        </div>

      </div>
    </section>
  );
}
