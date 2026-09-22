'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { FourGatesSolarOrbit } from '@/components/visuals/FourGatesSolarOrbit';

const GATES = [
  {
    id: 1,
    key: '01',
    name: 'DISCOVER',
    sub: 'Tọa Độ Bài Toán & ROI',
    action: 'Khảo sát hiện trạng & xác thực P&L trước khi viết bất kỳ dòng code nào.',
    standard: 'Payback < 4 tháng',
  },
  {
    id: 2,
    key: '02',
    name: 'PILOT',
    sub: 'Kiểm Chứng PoC',
    action: 'Kiểm chứng trên mẫu 2,000–5,000 bản ghi dữ liệu thật của doanh nghiệp.',
    standard: 'Độ chính xác > 99%',
  },
  {
    id: 3,
    key: '03',
    name: 'DEPLOY',
    sub: 'Ranh Giới Private VPC',
    action: 'Kết nối trực tiếp vào ERP/CRM trong ranh giới cô lập bảo mật tuyệt đối.',
    standard: 'Zero-Leak VPC',
  },
  {
    id: 4,
    key: '04',
    name: 'SCALE',
    sub: 'Mặt Trời Tự Chủ (Client Operated)',
    action: 'Bàn giao 100% mã nguồn, quy trình SOP và huấn luyện đội ngũ tự vận hành.',
    standard: 'Client Operated (100%)',
  },
];

export function FourGatesProgressSection() {
  const [activeGate, setActiveGate] = useState(4);
  const current = GATES[activeGate - 1] || GATES[3];

  return (
    <section className="relative w-full py-24 sm:py-36 px-6 md:px-12 lg:px-20 bg-white border-b border-[#E7E7E5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        
        {/* 1 Headline + 1 Support Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#581C87] font-semibold mb-3 block">
              Kiểm soát rủi ro · Quỹ đạo 4 Cửa ải
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0A0A0A] leading-tight">
              Kiểm soát qua <span className="font-normal text-[#0A0A0A]">4 chốt chặn.</span>
            </h2>
          </div>

          <p className="text-base text-[#515151] max-w-[420px] leading-relaxed font-normal">
            Mọi bài toán phải vượt qua 4 cửa ải trước khi kích hoạt quyền tự chủ tại Mặt Trời Sunext.
          </p>
        </div>

        {/* 1 Main Visual: The Solar System Orbital Flight Path */}
        <div className="w-full bg-[#F9F9F8] rounded-2xl border border-[#E7E7E5] p-6 sm:p-10 mb-12 shadow-xs">
          <FourGatesSolarOrbit activeGate={activeGate} onSelectGate={setActiveGate} />

          {/* Minimal Station Readout Bar */}
          <div className="mt-8 pt-6 border-t border-[#E7E7E5] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold ${
                activeGate === 4 ? 'bg-[#FFF7ED] text-[#F97316] border border-[#F97316]' : 'bg-[#FAF8FC] text-[#581C87] border border-[#581C87]/30'
              }`}>
                CHỐT CHẶN {current.key}
              </span>
              <span className="text-base font-medium text-[#0A0A0A]">
                {current.name} — {current.sub}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="text-[#747474]">Tiêu chuẩn:</span>
              <span className={`font-bold ${activeGate === 4 ? 'text-[#F97316]' : 'text-[#059669]'}`}>
                {current.standard}
              </span>
            </div>
          </div>
        </div>

        {/* 1 Clear Proof */}
        <div className="flex items-baseline gap-4 pt-2">
          <span className="text-5xl sm:text-6xl font-light tracking-tight text-[#0A0A0A] tabular-nums">
            100%
          </span>
          <div className="flex flex-col">
            <span className="text-base font-medium text-[#0A0A0A]">Bàn giao mã nguồn & SOP</span>
            <span className="text-xs font-mono text-[#747474]">Zero vendor lock-in · Doanh nghiệp tự vận hành bền vững</span>
          </div>
        </div>

      </div>
    </section>
  );
}
