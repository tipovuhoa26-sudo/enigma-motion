'use client';

import React from 'react';
import { AiControlRoomDashboard } from '@/components/visuals/AiControlRoomDashboard';

export function AiControlRoomSection() {
  return (
    <section 
      id="control-room" 
      className="relative w-full py-20 lg:py-24 px-6 md:px-12 lg:px-20 bg-[#F9F9F8] border-b border-[#E7E7E5] overflow-hidden"
      data-motion="control-room"
    >
      <div className="max-w-[1280px] w-full mx-auto">
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E7E7E5] text-xs font-semibold text-[#581C87] mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
            LIVE OPERATIONAL MESH
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0A0A0A] leading-tight mb-4">
            Kiểm soát chuyển đổi qua <span className="font-normal">4 cửa ải định lượng</span>
          </h2>
          <p className="text-base sm:text-lg text-[#515151] max-w-2xl mx-auto leading-relaxed">
            Mọi bài toán AI đều phải vượt qua 4 chốt chặn kỹ thuật và tài chính khắt khe trước khi bàn giao đưa vào vận hành thực tế.
          </p>
        </div>

        {/* The Control Room Centerpiece */}
        <AiControlRoomDashboard />
      </div>
    </section>
  );
}
