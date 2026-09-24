'use client';

import React, { useState } from 'react';

interface PillarNode {
  id: number;
  slug: string;
  name: string;
  english: string;
  x: number;
  y: number;
  labelX: number;
  labelY: number;
  textAnchor: 'start' | 'middle' | 'end';
  bottleneck: string;
  benchmark: string;
}

const PILLARS: PillarNode[] = [
  {
    id: 1,
    slug: 'chien-luoc-so',
    name: 'STRATEGY',
    english: 'Chiến Lược & Giá Trị',
    x: 300,
    y: 110,
    labelX: 300,
    labelY: 52,
    textAnchor: 'middle',
    bottleneck: 'AI chạy thử nghiệm ngẫu nhiên, không đo lường được tác động P&L thực tế.',
    benchmark: 'Xác định 1–2 miền nghiệp vụ có đòn bẩy kinh tế cao nhất trước khi đầu tư.',
  },
  {
    id: 4,
    slug: 'nen-tang-cong-nghe',
    name: 'TECHNOLOGY',
    english: 'Nền Tảng & Tích Hợp',
    x: 485,
    y: 200,
    labelX: 518,
    labelY: 195,
    textAnchor: 'start',
    bottleneck: 'Tool mua rời rạc, không kết nối API hai chiều với hệ thống lõi (CRM, ERP, ATS).',
    benchmark: 'Xây dựng Private AI Vector Mesh bảo mật, tích hợp luồng việc tự động.',
  },
  {
    id: 5,
    slug: 'kien-truc-du-lieu',
    name: 'DATA',
    english: 'Kiến Trúc Dữ Liệu',
    x: 485,
    y: 410,
    labelX: 518,
    labelY: 412,
    textAnchor: 'start',
    bottleneck: 'Dữ liệu phân tán, nhiều dị bản, rò rỉ khi đẩy vào mô hình công cộng.',
    benchmark: 'Single Source of Truth, phân quyền bảo mật cấp enterprise và RAG nội bộ.',
  },
  {
    id: 6,
    slug: 'mo-rong-quy-mo',
    name: 'ADOPTION & SCALE',
    english: 'Áp Dụng & Mở Rộng',
    x: 300,
    y: 505,
    labelX: 300,
    labelY: 546,
    textAnchor: 'middle',
    bottleneck: 'AI chỉ dừng ở nhóm nhỏ thử nghiệm, không lan tỏa ra phòng ban, thiếu cơ chế thúc đẩy áp dụng.',
    benchmark: 'Kế hoạch mở rộng có lộ trình, đo lường tỷ lệ áp dụng thực tế và nhân rộng use-case theo P&L.',
  },
  {
    id: 3,
    slug: 'mo-hinh-van-hanh',
    name: 'OPERATING MODEL',
    english: 'Mô Hình Vận Hành & SOP',
    x: 115,
    y: 410,
    labelX: 82,
    labelY: 412,
    textAnchor: 'end',
    bottleneck: 'Dùng AI vào quy trình cũ lỗi thời, sinh thêm việc rà soát thay vì tăng tốc.',
    benchmark: 'Tái cấu trúc SOP và phân định vai trò Người - AI rõ ràng, loại bỏ lãng phí tác vụ.',
  },
  {
    id: 2,
    slug: 'nang-luc-doi-ngu',
    name: 'TALENT',
    english: 'Nhân Tài & Năng Lực',
    x: 115,
    y: 200,
    labelX: 82,
    labelY: 195,
    textAnchor: 'end',
    bottleneck: 'Nhân sự chỉ dừng ở mức thử prompt cơ bản, thiếu năng lực tích hợp vào luồng việc.',
    benchmark: 'Đào tạo phân tầng năng lực thực chiến, đo bằng sản lượng công việc hoàn thành thực tế.',
  },
];

interface SixPillarsDiagnosticRadarProps {
  onSelectPillar?: (slug: string) => void;
  activePillarId?: number;
}

export function SixPillarsDiagnosticRadar({
  onSelectPillar,
  activePillarId = 1,
}: SixPillarsDiagnosticRadarProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const currentActiveId = hoveredId ?? activePillarId;
  const currentPillar = PILLARS.find((p) => p.id === currentActiveId) || PILLARS[0];

  const centerX = 300;
  const centerY = 305;

  const handlePillarClick = (p: PillarNode) => {
    if (onSelectPillar) {
      onSelectPillar(p.slug);
    } else {
      const el = document.getElementById(p.slug);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative w-full max-w-[560px] mx-auto select-none">
      <svg
        viewBox="0 0 600 600"
        className="w-full h-auto overflow-visible"
        aria-label="6-Pillar Capability Diagnosis Map"
      >
        <defs>
          {/* Radial aura for central Sunext core */}
          <radialGradient id="sunext-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7000FF" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#7000FF" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#7000FF" stopOpacity="0" />
          </radialGradient>

          {/* Active spoke laser gradient */}
          <linearGradient id="active-spoke-laser" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7000FF" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#7000FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#EA580C" stopOpacity="1" />
          </linearGradient>

          {/* Radar area fill */}
          <radialGradient id="radar-web-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7000FF" stopOpacity="0.10" />
            <stop offset="85%" stopColor="#7000FF" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#7000FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Atmospheric Ambient Aura */}
        <circle cx={centerX} cy={centerY} r="260" fill="url(#sunext-core-glow)" />

        {/* 2. Concentric Hexagonal Maturity Rings */}
        {[0.35, 0.65, 1.0].map((scale, i) => {
          const points = PILLARS.map((p) => {
            const px = centerX + (p.x - centerX) * scale;
            const py = centerY + (p.y - centerY) * scale;
            return `${px},${py}`;
          }).join(' ');

          return (
            <polygon
              key={`ring-${i}`}
              points={points}
              fill={i === 2 ? 'url(#radar-web-gradient)' : 'none'}
              stroke="#7000FF"
              strokeWidth={i === 2 ? '1' : '0.7'}
              strokeDasharray={i === 2 ? 'none' : '3 4'}
              opacity={i === 2 ? 0.25 : 0.12}
            />
          );
        })}

        {/* 3. Radial Spoke Lines from Central Sunext to 6 Pillars */}
        {PILLARS.map((pillar) => {
          const isActive = pillar.id === currentActiveId;

          return (
            <g key={`spoke-${pillar.id}`}>
              <line
                x1={centerX}
                y1={centerY}
                x2={pillar.x}
                y2={pillar.y}
                stroke={isActive ? 'url(#active-spoke-laser)' : '#7000FF'}
                strokeWidth={isActive ? 2.4 : 0.9}
                strokeDasharray={isActive ? 'none' : '2 3'}
                opacity={isActive ? 1 : 0.15}
                className="transition-all duration-300"
              />

              {/* Traveling Pulse Along Active Spoke */}
              {isActive && (
                <circle r="3.5" fill="#EA580C" filter="drop-shadow(0 0 6px #EA580C)">
                  <animate
                    attributeName="cx"
                    from={centerX}
                    to={pillar.x}
                    dur="1.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    from={centerY}
                    to={pillar.y}
                    dur="1.6s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* 4. Central Sunext Diagnosis Core (Index Node) */}
        <g transform={`translate(${centerX}, ${centerY})`}>
          {/* Subtle Outer Halo Ring */}
          <circle
            cx="0"
            cy="0"
            r="46"
            fill="none"
            stroke="#7000FF"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.3"
          />

          {/* Main White Core Circle */}
          <circle
            cx="0"
            cy="0"
            r="40"
            fill="#FFFFFF"
            stroke="#7000FF"
            strokeWidth="1.8"
            filter="drop-shadow(0 4px 14px rgba(112,0,255,0.12))"
          />

          {/* Inner Accent Ring */}
          <circle
            cx="0"
            cy="0"
            r="32"
            fill="#FAF5FF"
            stroke="#EDE9FE"
            strokeWidth="1"
            opacity="0.9"
          />

          {/* Core Labels */}
          <text
            x="0"
            y="-3"
            textAnchor="middle"
            fill="#17151A"
            fontSize="10"
            fontFamily="monospace"
            fontWeight="700"
            letterSpacing="0.08em"
          >
            SUNEXT
          </text>
          <text
            x="0"
            y="10"
            textAnchor="middle"
            fill="#7000FF"
            fontSize="7.5"
            fontFamily="sans-serif"
            fontWeight="700"
            letterSpacing="0.06em"
          >
            DIAGNOSIS
          </text>
        </g>

        {/* 5. 6 Outer Pillar Nodes */}
        {PILLARS.map((pillar) => {
          const isActive = pillar.id === currentActiveId;

          return (
            <g
              key={`node-${pillar.id}`}
              className="cursor-pointer transition-all duration-200"
              onMouseEnter={() => setHoveredId(pillar.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handlePillarClick(pillar)}
            >
              {/* Invisible touch/hover target */}
              <circle cx={pillar.x} cy={pillar.y} r="28" fill="transparent" />

              {/* Node Outer Halo on Active */}
              {isActive && (
                <circle
                  cx={pillar.x}
                  cy={pillar.y}
                  r="20"
                  fill="#FFF7ED"
                  stroke="#EA580C"
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                  className="animate-spin-slow"
                />
              )}

              {/* Main Node Circle */}
              <circle
                cx={pillar.x}
                cy={pillar.y}
                r={isActive ? 14 : 10}
                fill={isActive ? '#EA580C' : '#FFFFFF'}
                stroke={isActive ? '#EA580C' : '#7000FF'}
                strokeWidth={isActive ? 2 : 1.2}
                filter={isActive ? 'drop-shadow(0 2px 8px rgba(234,88,12,0.35))' : 'none'}
                className="transition-all duration-300"
              />

              {/* Center Dot */}
              <circle
                cx={pillar.x}
                cy={pillar.y}
                r={isActive ? 4.5 : 3}
                fill={isActive ? '#FFFFFF' : '#7000FF'}
              />

              {/* Text Label: Pillar Name */}
              <text
                x={pillar.labelX}
                y={pillar.labelY}
                textAnchor={pillar.textAnchor}
                fill={isActive ? '#EA580C' : '#17151A'}
                fontSize="11.5"
                fontFamily="monospace"
                fontWeight="700"
                letterSpacing="0.06em"
                className="transition-colors duration-200"
              >
                {pillar.name}
              </text>

              {/* Vietnamese Subtitle */}
              <text
                x={pillar.labelX}
                y={pillar.labelY + 13}
                textAnchor={pillar.textAnchor}
                fill={isActive ? '#17151A' : '#747474'}
                fontSize="9.5"
                fontFamily="sans-serif"
                fontWeight="500"
                className="transition-colors duration-200"
              >
                {pillar.english}
              </text>
            </g>
          );
        })}
      </svg>

      {/* 6. Active Diagnostic Bottom Banner (Editorial Glassmorphism) */}
      <div className="mt-3 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E8E8E8] shadow-xs transition-all duration-300">
        <div className="flex items-center justify-between gap-2 mb-1.5 pb-1.5 border-b border-black/5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-pulse" />
            <span className="text-xs font-mono font-bold text-[#17151A] tracking-wider">
              {currentPillar.name} · {currentPillar.english}
            </span>
          </div>
          <button
            type="button"
            onClick={() => handlePillarClick(currentPillar)}
            className="text-[11px] font-medium text-[#7000FF] hover:text-[#581C87] transition-colors cursor-pointer"
          >
            Xem phân tích ↓
          </button>
        </div>

        <div className="space-y-1 text-xs">
          <p className="text-[#626262]">
            <strong className="text-[#17151A] font-medium">Điểm nghẽn thường gặp:</strong>{' '}
            {currentPillar.bottleneck}
          </p>
          <p className="text-[#059669]">
            <strong className="font-medium">Giải pháp chuẩn hóa:</strong>{' '}
            {currentPillar.benchmark}
          </p>
        </div>
      </div>
    </div>
  );
}
