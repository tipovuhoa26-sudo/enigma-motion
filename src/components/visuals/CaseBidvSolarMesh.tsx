'use client';

import React from 'react';

export function CaseBidvSolarMesh() {
  return (
    <div className="w-full relative select-none flex flex-col items-center">
      {/* SVG Solar Visual Canvas (viewBox 0 0 840 370) */}
      <div className="w-full aspect-[2.3/1] min-h-[320px] max-h-[420px] relative flex items-center justify-center">
        <svg
          viewBox="0 0 840 370"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full block overflow-visible"
        >
          <defs>
            <pattern id="bidv-dots-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#E8E8E8" />
            </pattern>

            {/* Radiant Sun Glow */}
            <radialGradient id="bidv-sun-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.45" />
              <stop offset="55%" stopColor="#FB923C" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#006850" stopOpacity="0" />
            </radialGradient>

            {/* Sun Core Disc Gradient */}
            <radialGradient id="bidv-sun-core" cx="38%" cy="36%" r="64%">
              <stop offset="0%" stopColor="#FFF7ED" />
              <stop offset="25%" stopColor="#FB923C" />
              <stop offset="70%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#EA580C" />
            </radialGradient>

            <linearGradient id="bidv-sun-rim" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#C2410C" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {/* Coordinate Background Grid */}
          <rect width="840" height="370" rx="16" fill="url(#bidv-dots-grid)" opacity="0.45" />

          {/* Top Section Headers */}
          <text x="140" y="34" textAnchor="middle" fill="#747474" fontSize="10" fontFamily="monospace" fontWeight="600">
            45 CÁN BỘ TÍN DỤNG (TRƯỚC AI)
          </text>
          <text x="710" y="34" textAnchor="middle" fill="#006850" fontSize="10" fontFamily="monospace" fontWeight="bold">
            NGÂN HÀNG BIDV (SAU AI)
          </text>

          {/* Left: 5 Manual Friction Tasks in Banking Credit Appraisal */}
          {[
            { x: 170, y: 65, label: 'Đọc thủ công hàng trăm trang hồ sơ vay' },
            { x: 205, y: 120, label: 'Tra cứu cẩm nang chính sách phân tán' },
            { x: 225, y: 175, label: 'Tính toán D/E, DSCR trên Excel rời rạc' },
            { x: 205, y: 230, label: 'Soát tay checklist điều kiện vay vốn' },
            { x: 170, y: 285, label: 'Mất 2 ngày lập tờ trình thẩm định' },
          ].map((task, idx) => (
            <g key={idx}>
              {/* Continuous curved stream connecting directly into center Sun (400, 175) */}
              <path
                d={`M ${task.x} ${task.y} C ${task.x + 70} ${task.y}, 340 175, 400 175`}
                stroke="#006850"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.65"
                fill="none"
              >
                <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1.2s" repeatCount="indefinite" />
              </path>

              {/* Node (Text strictly to the left of the circle) */}
              <g transform={`translate(${task.x}, ${task.y})`}>
                <circle cx="0" cy="0" r="13" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5" filter="drop-shadow(0 1px 4px rgba(0,0,0,0.04))" />
                <circle cx="0" cy="0" r="4" fill="#EF4444" />
                <text x="-18" y="3.5" textAnchor="end" fill="#374151" fontSize="9" fontFamily="sans-serif" fontWeight="500">
                  {task.label}
                </text>
              </g>
            </g>
          ))}

          {/* Center Solar Credit Mesh Core (cx: 400, cy: 175) */}
          <g transform="translate(400, 175)">
            {/* Outer Constellation Orbit Ring (r = 120) */}
            <circle cx="0" cy="0" r="120" fill="none" stroke="#F97316" strokeWidth="1" strokeDasharray="4 6" opacity="0.4">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="40s" repeatCount="indefinite" />
            </circle>

            {/* 1. Laser connection lines from Sun (0,0) to the 4 Credit Satellites (drawn behind) */}
            {[
              { id: 'policy', sx: -85, sy: -75, isColor: '#006850' },
              { id: 'parser', sx: 85, sy: -75, isColor: '#581C87' },
              { id: 'risk', sx: 85, sy: 75, isColor: '#EA580C' },
              { id: 'draft', sx: -85, sy: 75, isColor: '#059669' },
            ].map((sat) => (
              <line
                key={sat.id}
                x1="0"
                y1="0"
                x2={sat.sx}
                y2={sat.sy}
                stroke={sat.isColor}
                strokeWidth="1.5"
                strokeDasharray="3 3"
                opacity="0.6"
              >
                <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1s" repeatCount="indefinite" />
              </line>
            ))}

            {/* 2. Radiant Sun Outer Pulsing Halo */}
            <circle cx="0" cy="0" r="68" fill="url(#bidv-sun-glow)" />

            {/* Rotating Solar Flare Corona Rays */}
            <g>
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="25s" repeatCount="indefinite" />
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                <line
                  key={deg}
                  x1="0"
                  y1="0"
                  x2={38 * Math.cos((deg * Math.PI) / 180)}
                  y2={38 * Math.sin((deg * Math.PI) / 180)}
                  stroke="#FB923C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              ))}
            </g>

            {/* Sun Core Photosphere Disc */}
            <circle cx="0" cy="0" r="28" fill="url(#bidv-sun-core)" filter="drop-shadow(0 4px 16px rgba(234,88,12,0.5))" />
            <circle cx="0" cy="0" r="28" fill="none" stroke="url(#bidv-sun-rim)" strokeWidth="1.5" />

            {/* Inner Fusion Nucleus */}
            <circle cx="0" cy="0" r="7" fill="#FFFFFF" opacity="0.95" />

            {/* Core Center Label Badge */}
            <g transform="translate(0, 42)">
              <rect x="-70" y="-9" width="140" height="18" rx="9" fill="#FFFFFF" stroke="#F97316" strokeWidth="1.2" filter="drop-shadow(0 2px 6px rgba(249,115,22,0.18))" />
              <text x="0" y="3.5" textAnchor="middle" fill="#C2410C" fontSize="8" fontFamily="monospace" fontWeight="bold" letterSpacing="0.08em">
                LÕI TÍN DỤNG AI · BIDV
              </text>
            </g>

            {/* 4 Orbiting Satellite Cards */}
            {[
              {
                id: 'policy',
                x: -85,
                y: -75,
                w: 124,
                h: 36,
                title: 'POLICY KNOWLEDGE',
                sub: 'Nạp cẩm nang tín dụng & SP vay',
                accent: '#006850',
                bg: '#F0FDF4',
              },
              {
                id: 'parser',
                x: 85,
                y: -75,
                w: 120,
                h: 36,
                title: 'STATEMENT PARSER',
                sub: 'Bóc tách BCTC & sao kê 60s',
                accent: '#581C87',
                bg: '#FAF5FF',
              },
              {
                id: 'risk',
                x: 85,
                y: 75,
                w: 122,
                h: 36,
                title: 'RISK CHECKLIST',
                sub: 'Rà soát 100% điều kiện cấp tín dụng',
                accent: '#EA580C',
                bg: '#FFF7ED',
              },
              {
                id: 'draft',
                x: -85,
                y: 75,
                w: 122,
                h: 36,
                title: 'APPRAISAL DRAFT',
                sub: 'Tự động sinh tờ trình thẩm định',
                accent: '#059669',
                bg: '#ECFDF5',
              },
            ].map((sat) => (
              <g key={sat.id} transform={`translate(${sat.x}, ${sat.y})`}>
                <rect
                  x={-sat.w / 2}
                  y={-sat.h / 2}
                  width={sat.w}
                  height={sat.h}
                  rx="8"
                  fill={sat.bg}
                  stroke={sat.accent}
                  strokeWidth="1.5"
                  filter="drop-shadow(0 2px 8px rgba(0,0,0,0.06))"
                />
                <circle cx={-sat.w / 2 + 10} cy="0" r="3" fill={sat.accent} />
                <text
                  x={-sat.w / 2 + 18}
                  y="-2"
                  fill={sat.accent}
                  fontSize="7.5"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {sat.title}
                </text>
                <text
                  x={-sat.w / 2 + 18}
                  y="9"
                  fill="#4B5563"
                  fontSize="6.5"
                  fontFamily="sans-serif"
                >
                  {sat.sub}
                </text>
              </g>
            ))}
          </g>

          {/* Right: Supersonic Laser Output Stream connecting from constellation edge (515, 175) to (626, 175) */}
          <line x1="515" y1="175" x2="626" y2="175" stroke="#006850" strokeWidth="3.5" strokeLinecap="round" />

          {/* Traveling Photon Pulse along output line */}
          <circle cy="175" r="5" fill="#006850">
            <animate attributeName="cx" values="515;626" dur="1.2s" repeatCount="indefinite" />
          </circle>

          {/* Destination Dossier: BIDV Real P&L Results */}
          <g transform="translate(626, 126)">
            <rect
              x="0"
              y="0"
              width="196"
              height="98"
              rx="12"
              fill="#F0FDF4"
              stroke="#006850"
              strokeWidth="2"
              filter="drop-shadow(0 4px 18px rgba(0,104,80,0.15))"
            />
            <text x="14" y="20" fill="#006850" fontSize="8" fontFamily="monospace" fontWeight="bold">
              NGÂN HÀNG BIDV:
            </text>
            <text x="14" y="44" fill="#0A0A0A" fontSize="17" fontFamily="sans-serif" fontWeight="bold">
              45 Cán Bộ Tín Dụng
            </text>
            <text x="14" y="62" fill="#006850" fontSize="8.5" fontFamily="monospace" fontWeight="bold">
              ✓ Rà soát: 30 phút (Gốc 2 ngày)
            </text>
            <text x="14" y="76" fill="#15803D" fontSize="8" fontFamily="sans-serif">
              ✓ 100% Khớp mẫu biểu tờ trình
            </text>
            <text x="14" y="89" fill="#747474" fontSize="7.5" fontFamily="sans-serif">
              ✓ Tự động đối chiếu checklist vay
            </text>
          </g>

          {/* Bottom Summary Banner */}
          <text x="400" y="348" textAnchor="middle" fill="#006850" fontSize="10.5" fontFamily="monospace" fontWeight="bold">
            ➔ CHUYỂN GIAO QUY TRÌNH: 45 CÁN BỘ TÍN DỤNG BIDV LÀM CHỦ TRỢ LÝ AI RÀ SOÁT & THẨM ĐỊNH HỒ SƠ VAY
          </text>
        </svg>
      </div>
    </div>
  );
}
