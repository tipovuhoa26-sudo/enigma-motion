'use client';

import React from 'react';

interface FourGatesSolarOrbitProps {
  activeGate: number;
  onSelectGate: (gateId: number) => void;
}

const GATES_DATA = [
  {
    id: 1,
    key: '01',
    name: 'DISCOVER',
    sub: 'Tọa Độ Bài Toán & ROI',
    metric: 'Payback < 4 tháng',
    x: 120,
    y: 230,
    color: '#581C87',
  },
  {
    id: 2,
    key: '02',
    name: 'PILOT',
    sub: 'Kiểm Chứng PoC Dữ Liệu',
    metric: 'Độ chính xác > 99%',
    x: 310,
    y: 150,
    color: '#7000FF',
  },
  {
    id: 3,
    key: '03',
    name: 'DEPLOY',
    sub: 'Ranh Giới Private VPC',
    metric: 'Zero-Leak On-Premise',
    x: 510,
    y: 130,
    color: '#581C87',
  },
  {
    id: 4,
    key: '04',
    name: 'SCALE',
    sub: 'Lõi Tự Chủ Năng Lượng',
    metric: 'Client Operated (100%)',
    x: 710,
    y: 200,
    color: '#F97316',
  },
];

export function FourGatesSolarOrbit({ activeGate, onSelectGate }: FourGatesSolarOrbitProps) {
  const currentStation = GATES_DATA[activeGate - 1] || GATES_DATA[3];

  return (
    <div className="w-full relative select-none flex flex-col items-center">
      {/* Interactive SVG Solar Orbit Canvas */}
      <div className="w-full aspect-[2.4/1] min-h-[300px] max-h-[420px] relative flex items-center justify-center">
        <svg
          viewBox="0 0 840 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full block overflow-visible"
        >
          <defs>
            {/* Coordinate dot grid */}
            <pattern id="solar-orbit-dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#EAEAEA" />
            </pattern>

            {/* Orbit flight path gradient */}
            <linearGradient id="orbit-flight-path" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#581C87" stopOpacity="0.3" />
              <stop offset="40%" stopColor="#7000FF" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#F97316" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#EA580C" />
            </linearGradient>

            {/* Radiant Sun Glow */}
            <radialGradient id="gate-sun-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.45" />
              <stop offset="55%" stopColor="#FB923C" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#581C87" stopOpacity="0" />
            </radialGradient>

            {/* Sun Core Disc Gradient */}
            <radialGradient id="gate-sun-core" cx="38%" cy="36%" r="64%">
              <stop offset="0%" stopColor="#FFF7ED" />
              <stop offset="25%" stopColor="#FB923C" />
              <stop offset="70%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#EA580C" />
            </radialGradient>

            {/* Sun Rim Light */}
            <linearGradient id="gate-sun-rim" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#C2410C" stopOpacity="0.35" />
            </linearGradient>

            {/* Radar scan cone gradient */}
            <linearGradient id="radar-cone-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#581C87" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#581C87" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Background Subtle Coordinate Grid */}
          <rect width="840" height="350" rx="16" fill="url(#solar-orbit-dots)" opacity="0.4" />

          {/* Celestial Coordinate Reference Rings (Background Orbitals) */}
          <ellipse cx="420" cy="180" rx="380" ry="120" stroke="#F0EFEA" strokeWidth="1" strokeDasharray="5 5" />
          <ellipse cx="420" cy="180" rx="260" ry="80" stroke="#F0EFEA" strokeWidth="0.8" strokeDasharray="3 4" />

          {/* MAIN SOLAR FLIGHT TRAJECTORY PATH (Bezier curve through 4 gates) */}
          <path
            d="M 120 230 C 200 170, 240 150, 310 150 C 380 150, 440 130, 510 130 C 590 130, 640 160, 710 200"
            stroke="url(#orbit-flight-path)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          {/* Secondary Parallel Orbital Stream Line */}
          <path
            d="M 120 238 C 200 178, 240 158, 310 158 C 380 158, 440 138, 510 138 C 590 138, 640 168, 710 208"
            stroke="#F97316"
            strokeWidth="1"
            strokeDasharray="4 6"
            opacity="0.35"
            fill="none"
          />

          {/* ==================================================================== */}
          {/* STATION 01: DISCOVER (Radar scanning business problem & ROI) */}
          {/* ==================================================================== */}
          <g
            onClick={() => onSelectGate(1)}
            className="cursor-pointer group"
            transform="translate(120, 230)"
          >
            {/* Radar Scan Sector */}
            <path
              d="M 0 0 L -35 50 A 60 60 0 0 0 35 50 Z"
              fill="url(#radar-cone-grad)"
              opacity={activeGate === 1 ? 0.9 : 0.4}
              className="transition-opacity duration-300"
            />
            {/* Outer Coordinate Target Ring */}
            <circle
              cx="0"
              cy="0"
              r={activeGate === 1 ? 26 : 20}
              fill="#FFFFFF"
              stroke={activeGate === 1 ? '#581C87' : '#D1D5DB'}
              strokeWidth={activeGate === 1 ? 2.5 : 1.5}
              strokeDasharray={activeGate === 1 ? 'none' : '3 3'}
              className="transition-all duration-300"
            />
            {/* Core Node */}
            <circle
              cx="0"
              cy="0"
              r={activeGate === 1 ? 8 : 6}
              fill="#581C87"
              className="transition-all duration-300"
            />
            {/* Number */}
            <text x="0" y="3" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold">
              01
            </text>

            {/* Station Title Floating Pill */}
            <g transform="translate(0, -32)">
              <rect
                x="-55"
                y="-11"
                width="110"
                height="22"
                rx="6"
                fill={activeGate === 1 ? '#FAF8FC' : '#FFFFFF'}
                stroke={activeGate === 1 ? '#581C87' : '#E5E7EB'}
                strokeWidth={activeGate === 1 ? 1.5 : 1}
                filter="drop-shadow(0 2px 4px rgba(0,0,0,0.03))"
              />
              <text
                x="0"
                y="3"
                textAnchor="middle"
                fill={activeGate === 1 ? '#581C87' : '#374151'}
                fontSize="9"
                fontFamily="monospace"
                fontWeight={activeGate === 1 ? 'bold' : '600'}
              >
                01 · DISCOVER
              </text>
            </g>
            <text x="0" y="68" textAnchor="middle" fill="#747474" fontSize="8.5" fontFamily="monospace">
              Tọa độ: ROI &lt; 4 tháng
            </text>
          </g>

          {/* ==================================================================== */}
          {/* STATION 02: PILOT (Validation Laboratory Rings) */}
          {/* ==================================================================== */}
          <g
            onClick={() => onSelectGate(2)}
            className="cursor-pointer group"
            transform="translate(310, 150)"
          >
            {/* Rotating Verification Rings */}
            <circle
              cx="0"
              cy="0"
              r={activeGate === 2 ? 30 : 22}
              fill="none"
              stroke="#7000FF"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              opacity={activeGate === 2 ? 0.8 : 0.3}
            >
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite" />
            </circle>

            {/* Node Disc */}
            <circle
              cx="0"
              cy="0"
              r={activeGate === 2 ? 22 : 18}
              fill="#FFFFFF"
              stroke={activeGate === 2 ? '#7000FF' : '#D1D5DB'}
              strokeWidth={activeGate === 2 ? 2.5 : 1.5}
              className="transition-all duration-300"
            />
            <circle
              cx="0"
              cy="0"
              r={activeGate === 2 ? 8 : 6}
              fill="#7000FF"
              className="transition-all duration-300"
            />
            <text x="0" y="3" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold">
              02
            </text>

            {/* Station Title Floating Pill */}
            <g transform="translate(0, -32)">
              <rect
                x="-45"
                y="-11"
                width="90"
                height="22"
                rx="6"
                fill={activeGate === 2 ? '#FAF8FC' : '#FFFFFF'}
                stroke={activeGate === 2 ? '#7000FF' : '#E5E7EB'}
                strokeWidth={activeGate === 2 ? 1.5 : 1}
                filter="drop-shadow(0 2px 4px rgba(0,0,0,0.03))"
              />
              <text
                x="0"
                y="3"
                textAnchor="middle"
                fill={activeGate === 2 ? '#7000FF' : '#374151'}
                fontSize="9"
                fontFamily="monospace"
                fontWeight={activeGate === 2 ? 'bold' : '600'}
              >
                02 · PILOT
              </text>
            </g>
            <text x="0" y="36" textAnchor="middle" fill="#747474" fontSize="8.5" fontFamily="monospace">
              Mẫu 2,000–5,000 bản ghi
            </text>
            <text x="0" y="48" textAnchor="middle" fill="#059669" fontSize="8" fontFamily="monospace" fontWeight="bold">
              Độ chính xác &gt; 99%
            </text>
          </g>

          {/* ==================================================================== */}
          {/* STATION 03: DEPLOY (Security Fortress & Isolation Perimeter) */}
          {/* ==================================================================== */}
          <g
            onClick={() => onSelectGate(3)}
            className="cursor-pointer group"
            transform="translate(510, 130)"
          >
            {/* Hexagonal Shield Perimeter */}
            <polygon
              points="0,-28 24,-14 24,14 0,28 -24,14 -24,-14"
              fill={activeGate === 3 ? '#FAF8FC' : 'none'}
              stroke="#581C87"
              strokeWidth={activeGate === 3 ? 2 : 1}
              strokeDasharray={activeGate === 3 ? 'none' : '3 3'}
              opacity={activeGate === 3 ? 1 : 0.4}
              className="transition-all duration-300"
            />

            {/* Node Disc */}
            <circle
              cx="0"
              cy="0"
              r={activeGate === 3 ? 18 : 16}
              fill="#FFFFFF"
              stroke={activeGate === 3 ? '#581C87' : '#D1D5DB'}
              strokeWidth={activeGate === 3 ? 2.5 : 1.5}
              className="transition-all duration-300"
            />
            <circle
              cx="0"
              cy="0"
              r={activeGate === 3 ? 8 : 6}
              fill="#581C87"
              className="transition-all duration-300"
            />
            <text x="0" y="3" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold">
              03
            </text>

            {/* Station Title Floating Pill */}
            <g transform="translate(0, -38)">
              <rect
                x="-48"
                y="-11"
                width="96"
                height="22"
                rx="6"
                fill={activeGate === 3 ? '#FAF8FC' : '#FFFFFF'}
                stroke={activeGate === 3 ? '#581C87' : '#E5E7EB'}
                strokeWidth={activeGate === 3 ? 1.5 : 1}
                filter="drop-shadow(0 2px 4px rgba(0,0,0,0.03))"
              />
              <text
                x="0"
                y="3"
                textAnchor="middle"
                fill={activeGate === 3 ? '#581C87' : '#374151'}
                fontSize="9"
                fontFamily="monospace"
                fontWeight={activeGate === 3 ? 'bold' : '600'}
              >
                03 · DEPLOY
              </text>
            </g>
            <text x="0" y="42" textAnchor="middle" fill="#059669" fontSize="8.5" fontFamily="monospace" fontWeight="bold">
              Zero-Leak VPC
            </text>
            <text x="0" y="54" textAnchor="middle" fill="#747474" fontSize="8" fontFamily="sans-serif">
              Tích hợp ERP an toàn
            </text>
          </g>

          {/* ==================================================================== */}
          {/* STATION 04: SCALE · THE RADIANT SUNEXT SUN (CLIENT OPERATED ZENITH) */}
          {/* ==================================================================== */}
          <g
            onClick={() => onSelectGate(4)}
            className="cursor-pointer group"
            transform="translate(710, 200)"
          >
            {/* Giant Solar Aura Glow */}
            <circle
              cx="0"
              cy="0"
              r={activeGate === 4 ? 75 : 55}
              fill="url(#gate-sun-glow)"
              className="transition-all duration-500"
            />

            {/* Rotating Solar Corona Ring 1 */}
            <circle
              cx="0"
              cy="0"
              r={activeGate === 4 ? 52 : 44}
              fill="none"
              stroke="#F97316"
              strokeWidth="1.2"
              strokeDasharray="4 6"
              opacity={activeGate === 4 ? 0.85 : 0.4}
            >
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="25s" repeatCount="indefinite" />
            </circle>

            {/* Rotating Solar Corona Ring 2 */}
            <circle
              cx="0"
              cy="0"
              r={activeGate === 4 ? 42 : 36}
              fill="none"
              stroke="#FB923C"
              strokeWidth="1"
              strokeDasharray="3 4"
              opacity={activeGate === 4 ? 0.7 : 0.3}
            >
              <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="18s" repeatCount="indefinite" />
            </circle>

            {/* 16 Radiant Solar Rays */}
            {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((ang, idx) => {
              const rad = (ang * Math.PI) / 180;
              const isMajor = idx % 2 === 0;
              const innerR = 30;
              const outerR = isMajor ? (activeGate === 4 ? 44 : 38) : (activeGate === 4 ? 38 : 34);
              return (
                <line
                  key={idx}
                  x1={innerR * Math.cos(rad)}
                  y1={innerR * Math.sin(rad)}
                  x2={outerR * Math.cos(rad)}
                  y2={outerR * Math.sin(rad)}
                  stroke={isMajor ? '#F97316' : '#FB923C'}
                  strokeWidth={isMajor ? (activeGate === 4 ? 2 : 1.2) : 1}
                  strokeLinecap="round"
                  opacity={activeGate === 4 ? 0.9 : 0.5}
                />
              );
            })}

            {/* Sun Disc Core */}
            <circle
              cx="0"
              cy="0"
              r={activeGate === 4 ? 28 : 24}
              fill="url(#gate-sun-core)"
              filter={activeGate === 4 ? 'drop-shadow(0 4px 18px rgba(234,88,12,0.55))' : 'drop-shadow(0 2px 8px rgba(234,88,12,0.3))'}
              className="transition-all duration-300 group-hover:scale-105"
            />
            <circle cx="0" cy="0" r={activeGate === 4 ? 28 : 24} fill="none" stroke="url(#gate-sun-rim)" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="10" fill="#FFFFFF" fillOpacity="0.3" stroke="#FFFFFF" strokeWidth="1.2" />
            <circle cx="0" cy="0" r="4" fill="#FFFFFF" />

            {/* Ignition Badge above the Sun */}
            <g transform="translate(0, -42)">
              <rect
                x="-60"
                y="-13"
                width="120"
                height="26"
                rx="8"
                fill={activeGate === 4 ? '#FFF7ED' : '#FFFFFF'}
                stroke={activeGate === 4 ? '#F97316' : '#E5E7EB'}
                strokeWidth={activeGate === 4 ? 2 : 1}
                filter="drop-shadow(0 2px 8px rgba(234,88,12,0.15))"
              />
              <text
                x="0"
                y="4"
                textAnchor="middle"
                fill="#F97316"
                fontSize="9.5"
                fontFamily="monospace"
                fontWeight="bold"
              >
                04 · SCALE
              </text>
            </g>

            {/* Sub-badge below the Sun */}
            <g transform="translate(0, 44)">
              <rect
                x="-64"
                y="-9"
                width="128"
                height="20"
                rx="6"
                fill="#F97316"
              />
              <text
                x="0"
                y="4.5"
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="8"
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="0.5"
              >
                CLIENT OPERATED
              </text>
            </g>
            <text x="0" y="70" textAnchor="middle" fill="#0A0A0A" fontSize="8" fontFamily="sans-serif" fontWeight="600">
              Doanh nghiệp làm chủ 100%
            </text>
          </g>

          {/* ==================================================================== */}
          {/* TRAVELING ENERGY PROBE (Follows current station along the orbit) */}
          {/* ==================================================================== */}
          <g transform={`translate(${currentStation.x}, ${currentStation.y})`} className="pointer-events-none transition-all duration-500">
            {/* Pulsing indicator ring */}
            <circle cx="0" cy="0" r="28" fill="none" stroke={currentStation.color} strokeWidth="1.5">
              <animate attributeName="r" values="20;36;20" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.1;0.8" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
      </div>

      {/* Interactive Micro-Selector bar below canvas */}
      <div className="flex items-center gap-2 mt-4 bg-white p-1 rounded-xl border border-[#E7E7E5] shadow-2xs">
        {GATES_DATA.map((g) => (
          <button
            key={g.id}
            type="button"
            onClick={() => onSelectGate(g.id)}
            className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              activeGate === g.id
                ? g.id === 4
                  ? 'bg-[#F97316] text-white font-bold shadow-xs'
                  : 'bg-[#581C87] text-white font-medium shadow-xs'
                : 'text-[#747474] hover:text-[#0A0A0A]'
            }`}
          >
            <span>{g.key}</span>
            <span className="hidden sm:inline">{g.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
