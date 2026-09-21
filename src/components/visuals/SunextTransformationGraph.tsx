'use client';

import React from 'react';

interface TransformationGraphProps {
  activeStep: number; // 0, 1, or 2
}

const GATES = [
  { id: 1, name: 'Gate 1: Bài Toán & ROI', status: 'Xác thực cơ hội P&L' },
  { id: 2, name: 'Gate 2: Thử Nghiệm PoC', status: 'Kiểm chứng luồng việc' },
  { id: 3, name: 'Gate 3: Tích Hợp API', status: 'Kết nối hệ thống thật' },
  { id: 4, name: 'Gate 4: Nghiệm Thu P&L', status: 'Bàn giao & đo lường' },
];

export function SunextTransformationGraph({ activeStep }: TransformationGraphProps) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-7 bg-[#F7F7F8] border border-[#E8E8E8] rounded-2xl select-none font-sans">
      {/* Top Motif: Gate 1-4 Progress Rail */}
      <div className="w-full pb-4 border-b border-[#E8E8E8]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B21A8]">
            Hệ thống 4 cửa ải Gate 1–4
          </span>
          <span className="text-[11px] font-mono text-[#8E8E8E]">
            {activeStep === 0 ? 'Giai đoạn 1/3' : activeStep === 1 ? 'Giai đoạn 2/3' : 'Giai đoạn 3/3: Nghiệm thu'}
          </span>
        </div>

        {/* 4-Step Gate Track */}
        <div className="grid grid-cols-4 gap-2 pt-1">
          {GATES.map((gate, i) => {
            const isPassed =
              (activeStep === 0 && i === 0) ||
              (activeStep === 1 && i <= 2) ||
              (activeStep === 2);
            const isCurrent =
              (activeStep === 0 && i === 0) ||
              (activeStep === 1 && (i === 1 || i === 2)) ||
              (activeStep === 2 && i === 3);

            return (
              <div
                key={gate.id}
                className={`p-2 rounded-lg border transition-all duration-300 ${
                  isCurrent
                    ? 'bg-white border-[#F97316] shadow-xs'
                    : isPassed
                    ? 'bg-white/80 border-[#6B21A8]/40'
                    : 'bg-[#F0EFEA]/50 border-transparent opacity-60'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isCurrent
                        ? 'bg-[#F97316] animate-pulse'
                        : isPassed
                        ? 'bg-[#6B21A8]'
                        : 'bg-[#D1D1D6]'
                    }`}
                  />
                  <span
                    className={`text-[10.5px] font-semibold truncate ${
                      isCurrent ? 'text-[#F97316]' : isPassed ? 'text-[#111111]' : 'text-[#8E8E8E]'
                    }`}
                  >
                    G{gate.id}
                  </span>
                </div>
                <div className="text-[9.5px] text-[#626262] truncate hidden sm:block">
                  {gate.status}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Central SVG Transformation Architecture Graph */}
      <div className="relative w-full aspect-[16/11] my-auto flex items-center justify-center overflow-hidden">
        <svg
          viewBox="0 0 500 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full block"
        >
          <defs>
            {/* Soft Gradients */}
            <linearGradient id="purple-pipe" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6B21A8" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="orange-pipe" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
          </defs>

          {/* Coordinate Grid Background */}
          <line x1="40" y1="40" x2="460" y2="40" stroke="#EAE8E2" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="40" y1="160" x2="460" y2="160" stroke="#EAE8E2" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="40" y1="280" x2="460" y2="280" stroke="#EAE8E2" strokeWidth="0.8" strokeDasharray="3 3" />

          {/* Connective Pipelines */}
          {/* Top to Middle Flows */}
          <path
            d="M 250 45 L 120 145"
            stroke={activeStep >= 0 ? '#6B21A8' : '#D5D5D5'}
            strokeWidth={activeStep === 0 ? '2' : '1.2'}
            strokeDasharray={activeStep === 0 ? 'none' : '4 3'}
            className="transition-all duration-300"
          />
          <path
            d="M 250 45 L 250 145"
            stroke={activeStep >= 1 ? '#6B21A8' : '#D5D5D5'}
            strokeWidth={activeStep === 1 ? '2' : '1.2'}
            strokeDasharray={activeStep === 1 ? 'none' : '4 3'}
            className="transition-all duration-300"
          />
          <path
            d="M 250 45 L 380 145"
            stroke={activeStep >= 1 ? '#6B21A8' : '#D5D5D5'}
            strokeWidth={activeStep === 1 ? '2' : '1.2'}
            strokeDasharray={activeStep === 1 ? 'none' : '4 3'}
            className="transition-all duration-300"
          />

          {/* Middle to Bottom Flows */}
          <path
            d="M 120 175 L 250 275"
            stroke={activeStep >= 2 ? 'url(#orange-pipe)' : '#D5D5D5'}
            strokeWidth={activeStep === 2 ? '2.5' : '1.2'}
            className="transition-all duration-300"
          />
          <path
            d="M 250 175 L 250 275"
            stroke={activeStep >= 2 ? '#F97316' : '#D5D5D5'}
            strokeWidth={activeStep === 2 ? '2.5' : '1.2'}
            className="transition-all duration-300"
          />
          <path
            d="M 380 175 L 250 275"
            stroke={activeStep >= 2 ? 'url(#orange-pipe)' : '#D5D5D5'}
            strokeWidth={activeStep === 2 ? '2.5' : '1.2'}
            className="transition-all duration-300"
          />

          {/* TOP ANCHOR: BÀI TOÁN KINH DOANH */}
          <g transform="translate(250, 45)">
            <rect x="-105" y="-18" width="210" height="36" rx="8" fill="#FFFFFF" stroke="#E8E8E8" strokeWidth="1" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.03))" />
            <circle cx="-85" cy="0" r="4" fill="#111111" />
            <text x="-70" y="4" fill="#111111" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">
              BÀI TOÁN KINH DOANH (P&L)
            </text>
          </g>

          {/* MIDDLE NODE 1: Con Người & SOP (Active on Step 0) */}
          <g transform="translate(120, 160)" className="transition-all duration-300">
            <rect
              x="-80"
              y="-22"
              width="160"
              height="44"
              rx="8"
              fill={activeStep === 0 ? '#FAF8FC' : '#FFFFFF'}
              stroke={activeStep === 0 ? '#6B21A8' : '#E8E8E8'}
              strokeWidth={activeStep === 0 ? '1.8' : '1'}
              filter="drop-shadow(0 2px 6px rgba(0,0,0,0.03))"
            />
            <circle cx="-62" cy="0" r="5" fill={activeStep === 0 ? '#6B21A8' : '#A0A0A0'} />
            <text x="-48" y="-3" fill="#111111" fontSize="10.5" fontWeight="600" fontFamily="system-ui, sans-serif">
              01. Con Người & SOP
            </text>
            <text x="-48" y="11" fill="#626262" fontSize="8.5" fontFamily="system-ui, sans-serif">
              Làm chủ luồng tác nghiệp
            </text>
          </g>

          {/* MIDDLE NODE 2: Data Mesh & API ERP (Active on Step 1) */}
          <g transform="translate(250, 160)" className="transition-all duration-300">
            <rect
              x="-75"
              y="-22"
              width="150"
              height="44"
              rx="8"
              fill={activeStep === 1 ? '#FAF8FC' : '#FFFFFF'}
              stroke={activeStep === 1 ? '#6B21A8' : '#E8E8E8'}
              strokeWidth={activeStep === 1 ? '1.8' : '1'}
              filter="drop-shadow(0 2px 6px rgba(0,0,0,0.03))"
            />
            <circle cx="-58" cy="0" r="5" fill={activeStep === 1 ? '#6B21A8' : '#A0A0A0'} />
            <text x="-44" y="-3" fill="#111111" fontSize="10.5" fontWeight="600" fontFamily="system-ui, sans-serif">
              02. API & Data Mesh
            </text>
            <text x="-44" y="11" fill="#626262" fontSize="8.5" fontFamily="system-ui, sans-serif">
              Tích hợp ERP/CRM 2 chiều
            </text>
          </g>

          {/* MIDDLE NODE 3: Multi-Agents Swarm (Active on Step 1 & 2) */}
          <g transform="translate(380, 160)" className="transition-all duration-300">
            <rect
              x="-75"
              y="-22"
              width="150"
              height="44"
              rx="8"
              fill={activeStep >= 1 ? '#FAF8FC' : '#FFFFFF'}
              stroke={activeStep >= 1 ? '#6B21A8' : '#E8E8E8'}
              strokeWidth={activeStep >= 1 ? '1.8' : '1'}
              filter="drop-shadow(0 2px 6px rgba(0,0,0,0.03))"
            />
            <circle cx="-58" cy="0" r="5" fill={activeStep >= 1 ? '#6B21A8' : '#A0A0A0'} />
            <text x="-44" y="-3" fill="#111111" fontSize="10.5" fontWeight="600" fontFamily="system-ui, sans-serif">
              03. Multi-Agents
            </text>
            <text x="-44" y="11" fill="#626262" fontSize="8.5" fontFamily="system-ui, sans-serif">
              Tự động hóa vận hành
            </text>
          </g>

          {/* BOTTOM ANCHOR: KẾT QUẢ ĐO LƯỜNG (ORANGE ACTIVE ON STEP 2) */}
          <g transform="translate(250, 275)" className="transition-all duration-300">
            <rect
              x="-125"
              y="-22"
              width="250"
              height="44"
              rx="10"
              fill={activeStep === 2 ? '#FFF7ED' : '#FFFFFF'}
              stroke={activeStep === 2 ? '#F97316' : '#E8E8E8'}
              strokeWidth={activeStep === 2 ? '2' : '1'}
              filter="drop-shadow(0 4px 12px rgba(249,115,22,0.15))"
            />
            <circle cx="-105" cy="0" r="6" fill={activeStep === 2 ? '#F97316' : '#6B21A8'} className={activeStep === 2 ? 'animate-pulse' : ''} />
            <text x="-90" y="-3" fill={activeStep === 2 ? '#C2410C' : '#111111'} fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">
              KẾT QUẢ DOANH NGHIỆP THỰC TẾ
            </text>
            <text x="-90" y="12" fill="#626262" fontSize="8.5" fontFamily="system-ui, sans-serif">
              {activeStep === 0
                ? 'Tiết kiệm 70% chi phí tuyển dụng'
                : activeStep === 1
                ? 'Độ chính xác 99.8% · Không đổi phần mềm'
                : 'Nghiệm thu P&L · Tăng tốc x5 tài liệu'}
            </text>
          </g>
        </svg>
      </div>

      {/* Bottom Live Telemetry Pill */}
      <div className="pt-3 border-t border-[#E8E8E8] flex items-center justify-between text-xs text-[#626262]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
          <span className="font-medium text-[#111111]">Trạng thái chuyển đổi:</span>
          <span>
            {activeStep === 0
              ? 'Chuẩn hóa quy trình & nâng cao năng lực nhân sự'
              : activeStep === 1
              ? 'Thiết lập luồng dữ liệu & API an toàn'
              : 'Nghiệm thu bằng chỉ số P&L định lượng'}
          </span>
        </div>
        <span className="font-mono text-[#8E8E8E] text-[11px] hidden md:inline-block">
          ISO 27001 · Cam kết NDA
        </span>
      </div>
    </div>
  );
}
