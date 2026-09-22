'use client';

import React, { useState } from 'react';

interface Gate {
  id: string;
  name: string;
  sub: string;
  action: string;
  metric: string;
}

const GATES: Gate[] = [
  {
    id: 'G1',
    name: 'DISCOVER',
    sub: 'Tọa độ bài toán',
    action: 'Khảo sát hiện trạng & xác thực bài toán có ROI định lượng trước khi lập trình.',
    metric: 'Payback < 4 tháng',
  },
  {
    id: 'G2',
    name: 'PILOT',
    sub: 'Kiểm chứng PoC',
    action: 'Kiểm chứng trên mẫu 2,000–5,000 bản ghi dữ liệu thực tế của doanh nghiệp.',
    metric: 'Độ chính xác > 99%',
  },
  {
    id: 'G3',
    name: 'DEPLOY',
    sub: 'Ranh giới Private VPC',
    action: 'Kết nối trực tiếp vào ERP/CRM trong ranh giới cô lập, bảo mật tuyệt đối.',
    metric: 'Zero-Leak VPC',
  },
  {
    id: 'G4',
    name: 'SCALE',
    sub: 'Doanh nghiệp tự vận hành',
    action: 'Bàn giao 100% mã nguồn, quy trình SOP và chuyển giao toàn quyền đội ngũ.',
    metric: '100% Client Operated',
  },
];

const CAPABILITIES = [
  {
    title: 'Tư vấn',
    tagline: 'Tìm đúng bài toán có ROI.',
    desc: 'Định lượng giá trị kinh tế và khả năng thu hồi vốn trước khi đầu tư.',
  },
  {
    title: 'Đào tạo',
    tagline: 'Đội ngũ tự chủ với AI.',
    desc: 'Huấn luyện thực chiến theo vai trò nghiệp vụ, không dạy lý thuyết đại trà.',
  },
  {
    title: 'Triển khai',
    tagline: 'Đưa AI vào hệ thống thật.',
    desc: 'Tích hợp sâu vào ERP/CRM hiện hữu với SLA và cam kết bảo mật cao nhất.',
  },
];

export function FourGatesProgressSection() {
  const [activeGateIndex, setActiveGateIndex] = useState<number>(3); // Default to G4 (Outcome)
  const currentGate = GATES[activeGateIndex];

  return (
    <section
      id="delivery"
      className="relative w-full py-20 sm:py-28 px-6 md:px-12 lg:px-20 bg-white border-b border-[#E7E7E5] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Headline (≤ 7 words) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#581C87] font-semibold mb-2 block">
              Kiểm Soát Rủi Ro · Lộ Trình Triển Khai
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[#0A0A0A] leading-tight">
              Kiểm soát qua <span className="font-normal text-[#0A0A0A]">4 chốt chặn.</span>
            </h2>
          </div>

          <p className="text-base text-[#515151] max-w-[420px] leading-relaxed font-normal">
            Mọi bài toán đều thẩm định qua 4 cửa ải trước khi bàn giao quyền tự vận hành cho doanh nghiệp.
          </p>
        </div>

        {/* ==================================================================== */}
        {/* THE SINGLE PROGRESSION BEAM: ○────────○────────○────────● G4 IS ORANGE */}
        {/* ==================================================================== */}
        <div className="w-full bg-[#F9F9F8] rounded-2xl border border-[#E7E7E5] p-6 sm:p-10 mb-12 shadow-xs">
          
          {/* Progression Line Visualization */}
          <div className="relative w-full my-6">
            {/* Background Track */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 h-[2px] bg-[#E7E7E5]" />

            {/* Illuminated Active Line */}
            <div
              className="absolute top-1/2 left-0 -translate-y-1/2 h-[2.5px] bg-gradient-to-r from-[#581C87] via-[#7000FF] to-[#F97316] transition-all duration-500"
              style={{ width: `${(activeGateIndex / 3) * 100}%` }}
            />

            {/* 4 Interactive Nodes */}
            <div className="relative flex items-center justify-between z-10">
              {GATES.map((gate, idx) => {
                const isActive = activeGateIndex === idx;
                const isPassed = activeGateIndex >= idx;
                const isFinal = idx === 3;

                return (
                  <button
                    key={gate.id}
                    type="button"
                    onClick={() => setActiveGateIndex(idx)}
                    className="flex flex-col items-center group cursor-pointer focus:outline-none"
                  >
                    {/* Circle Node */}
                    <div
                      className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                        isFinal && isPassed
                          ? 'bg-[#F97316] text-white shadow-md shadow-orange-500/20 scale-110'
                          : isPassed
                          ? 'bg-[#581C87] text-white'
                          : 'bg-white text-[#747474] border border-[#E7E7E5] group-hover:border-[#581C87]'
                      }`}
                    >
                      {gate.id}
                    </div>

                    {/* Node Text Below */}
                    <div className="mt-3 text-center">
                      <div className={`text-xs font-mono font-semibold transition-colors ${
                        isActive ? (isFinal ? 'text-[#F97316]' : 'text-[#0A0A0A]') : 'text-[#747474]'
                      }`}>
                        {gate.name}
                      </div>
                      <div className="text-[11px] text-[#A3A3A3] hidden sm:block">
                        {gate.sub}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Gate Readout Card */}
          <div className="mt-8 pt-6 border-t border-[#E7E7E5] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold ${
                activeGateIndex === 3
                  ? 'bg-[#FFF7ED] text-[#F97316] border border-[#F97316]'
                  : 'bg-[#FAF8FC] text-[#581C87] border border-[#581C87]/30'
              }`}>
                CHỐT CHẶN {currentGate.id}
              </span>
              <span className="text-sm sm:text-base font-normal text-[#515151]">
                {currentGate.action}
              </span>
            </div>

            <div className="text-xs font-mono text-[#747474] shrink-0">
              Tiêu chuẩn: <span className="font-bold text-[#0A0A0A]">{currentGate.metric}</span>
            </div>
          </div>

        </div>

        {/* ==================================================================== */}
        {/* 3 NĂNG LỰC ĐỒNG HÀNH (Lean 3-Column Integration, No Metaphor Clutter) */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 mb-10">
          {CAPABILITIES.map((cap) => (
            <div key={cap.title} className="p-5 rounded-xl bg-white border border-[#E7E7E5]">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#581C87] mb-1">
                {cap.title}
              </div>
              <div className="text-base font-medium text-[#0A0A0A] mb-2">
                {cap.tagline}
              </div>
              <p className="text-xs text-[#747474] leading-relaxed">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 1 Proof Metric */}
        <div className="flex items-baseline gap-4 pt-4 border-t border-[#E7E7E5]">
          <span className="text-4xl sm:text-5xl font-light tracking-tight text-[#0A0A0A] tabular-nums">
            100%
          </span>
          <div>
            <div className="text-base font-medium text-[#0A0A0A]">Bàn giao mã nguồn & SOP</div>
            <div className="text-xs font-mono text-[#747474]">Zero vendor lock-in · Doanh nghiệp tự vận hành bền vững</div>
          </div>
        </div>

      </div>
    </section>
  );
}
