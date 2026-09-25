'use client';

import React, { useState } from 'react';

interface PillarNode {
  id: number;
  slug: string;
  name: string;
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
    name: 'CHIẾN LƯỢC',
    x: 300,
    y: 95,
    labelX: 300,
    labelY: 58,
    textAnchor: 'middle',
    bottleneck: 'AI chạy thử nghiệm ngẫu nhiên, không đo lường được tác động P&L thực tế.',
    benchmark: 'Xác định 1–2 miền nghiệp vụ có đòn bẩy kinh tế cao nhất trước khi đầu tư.',
  },
  {
    id: 4,
    slug: 'nen-tang-cong-nghe',
    name: 'CÔNG NGHỆ',
    x: 485,
    y: 190,
    labelX: 515,
    labelY: 195,
    textAnchor: 'start',
    bottleneck: 'Tool mua rời rạc, không kết nối API hai chiều với hệ thống lõi (CRM, ERP, ATS).',
    benchmark: 'Xây dựng Private AI Vector Mesh bảo mật, tích hợp luồng việc tự động.',
  },
  {
    id: 5,
    slug: 'kien-truc-du-lieu',
    name: 'DỮ LIỆU',
    x: 485,
    y: 410,
    labelX: 515,
    labelY: 415,
    textAnchor: 'start',
    bottleneck: 'Dữ liệu phân tán, nhiều dị bản, rò rỉ khi đẩy vào mô hình công cộng.',
    benchmark: 'Single Source of Truth, phân quyền bảo mật cấp enterprise và RAG nội bộ.',
  },
  {
    id: 6,
    slug: 'mo-rong-quy-mo',
    name: 'ÁP DỤNG & MỞ RỘNG',
    x: 300,
    y: 505,
    labelX: 300,
    labelY: 545,
    textAnchor: 'middle',
    bottleneck: 'AI chỉ dừng ở nhóm nhỏ thử nghiệm, không lan tỏa ra phòng ban, thiếu cơ chế thúc đẩy áp dụng.',
    benchmark: 'Kế hoạch mở rộng có lộ trình, đo lường tỷ lệ áp dụng thực tế và nhân rộng use-case theo P&L.',
  },
  {
    id: 3,
    slug: 'mo-hinh-van-hanh',
    name: 'VẬN HÀNH',
    x: 115,
    y: 410,
    labelX: 85,
    labelY: 415,
    textAnchor: 'end',
    bottleneck: 'Dùng AI vào quy trình cũ lỗi thời, sinh thêm việc rà soát thay vì tăng tốc.',
    benchmark: 'Tái cấu trúc SOP và phân định vai trò Người - AI rõ ràng, loại bỏ lãng phí tác vụ.',
  },
  {
    id: 2,
    slug: 'nang-luc-doi-ngu',
    name: 'CON NGƯỜI',
    x: 115,
    y: 190,
    labelX: 85,
    labelY: 195,
    textAnchor: 'end',
    bottleneck: 'Nhân sự chỉ dừng ở mức thử prompt cơ bản, thiếu năng lực tích hợp vào luồng việc.',
    benchmark: 'Đào tạo phân tầng năng lực thực chiến, đo bằng sản lượng công việc hoàn thành thực tế.',
  },
];

interface SixPillarsDiagnosticRadarProps {
  onSelectPillar?: (slug: string) => void;
  activePillarId?: number;
  showInsightCard?: boolean;
}

export function SixPillarsDiagnosticRadar({
  onSelectPillar,
  activePillarId = 1,
  showInsightCard = false,
}: SixPillarsDiagnosticRadarProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const currentActiveId = hoveredId ?? activePillarId;
  const currentPillar = PILLARS.find((p) => p.id === currentActiveId) || PILLARS[0];

  const centerX = 300;
  const centerY = 300;

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
        aria-label="6 Trụ Cột Năng Lực Tổ Chức — Node & Connection Topology"
      >
        <defs>
          {/* Radial aura for central Sunext core */}
          <radialGradient id="pillar-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7000FF" stopOpacity="0.14" />
            <stop offset="60%" stopColor="#7000FF" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#7000FF" stopOpacity="0" />
          </radialGradient>

          {/* Active spoke laser gradient */}
          <linearGradient id="pillar-laser-beam" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7000FF" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#A855F7" stopOpacity="1" />
            <stop offset="100%" stopColor="#EA580C" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* 1. Atmospheric Ambient Aura */}
        <circle cx={centerX} cy={centerY} r="250" fill="url(#pillar-core-glow)" />

        {/* 2. Perimeter Structural Connection Polygon (The Shared Knowledge Ring) */}
        <polygon
          points={PILLARS.map((p) => `${p.x},${p.y}`).join(' ')}
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />

        {/* Cross Diagonal Inter-Pillar Connections */}
        <line x1={PILLARS[0].x} y1={PILLARS[0].y} x2={PILLARS[3].x} y2={PILLARS[3].y} stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 4" opacity="0.6" />
        <line x1={PILLARS[1].x} y1={PILLARS[1].y} x2={PILLARS[4].x} y2={PILLARS[4].y} stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 4" opacity="0.6" />
        <line x1={PILLARS[2].x} y1={PILLARS[2].y} x2={PILLARS[5].x} y2={PILLARS[5].y} stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 4" opacity="0.6" />

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
                stroke={isActive ? 'url(#pillar-laser-beam)' : '#7000FF'}
                strokeWidth={isActive ? 2.4 : 1}
                strokeDasharray={isActive ? 'none' : '2 3'}
                opacity={isActive ? 1 : 0.2}
                className="transition-all duration-300"
              />

              {/* Traveling Pulse Along Active Spoke */}
              {isActive && (
                <circle r="3" fill="#EA580C">
                  <animate
                    attributeName="cx"
                    from={pillar.x}
                    to={centerX}
                    dur="1.8s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    from={pillar.y}
                    to={centerY}
                    dur="1.8s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* 4. 6 Pillar Nodes (Identical Grammar to Hero & Transfer) */}
        {PILLARS.map((pillar) => {
          const isActive = pillar.id === currentActiveId;

          return (
            <g
              key={`node-${pillar.id}`}
              className="cursor-pointer group"
              onMouseEnter={() => setHoveredId(pillar.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handlePillarClick(pillar)}
            >
              {/* Outer Ring */}
              <circle
                cx={pillar.x}
                cy={pillar.y}
                r={isActive ? 20 : 16}
                fill="#FFFFFF"
                stroke={isActive ? '#EA580C' : '#0A0A0A'}
                strokeWidth={isActive ? 2.5 : 1.5}
                className="transition-all duration-300"
              />

              {/* Inner Dot */}
              <circle
                cx={pillar.x}
                cy={pillar.y}
                r={isActive ? 6 : 4}
                fill={isActive ? '#EA580C' : '#0A0A0A'}
                className="transition-all duration-300"
              />

              {/* Pillar Label */}
              <text
                x={pillar.labelX}
                y={pillar.labelY}
                textAnchor={pillar.textAnchor}
                fill={isActive ? '#EA580C' : '#0A0A0A'}
                fontSize="11.5"
                fontFamily="monospace"
                fontWeight="700"
                letterSpacing="0.06em"
                className="transition-colors duration-200 select-none"
              >
                {pillar.name}
              </text>
            </g>
          );
        })}

        {/* 5. Central Sunext Monogram Core (The Origin of Diagnostic) */}
        <g transform={`translate(${centerX}, ${centerY})`} className="select-none pointer-events-none">
          {/* Faint Outer Ring */}
          <circle cx="0" cy="0" r="38" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1.8" />
          <circle cx="0" cy="0" r="8" fill="#7000FF" />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            fill="#0A0A0A"
            fontSize="10"
            fontFamily="monospace"
            fontWeight="800"
            letterSpacing="0.12em"
          >
            SUNEXT
          </text>
        </g>
      </svg>

      {/* Shared Reference Benchmark Caption */}
      <div className="mt-4 text-center">
        <span className="text-xs font-mono text-[#747474] tracking-wide">
          Tham chiếu McKinsey Rewired · 6 Trụ cột năng lực tổ chức
        </span>
      </div>

      {/* Optional Insight Card (Preserved if explicitly enabled) */}
      {showInsightCard && (
        <div className="mt-6 p-5 rounded-2xl bg-white border border-[#E7E7E5] shadow-xs">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#EA580C] mb-1">
            {currentPillar.name}
          </div>
          <p className="text-xs text-[#52525B] leading-relaxed">
            {currentPillar.bottleneck}
          </p>
        </div>
      )}
    </div>
  );
}
