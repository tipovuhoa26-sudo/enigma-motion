'use client';

import React from 'react';

export function CaseVinhomesSolarMesh() {
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
            <pattern id="vinhomes-dots-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#E8E8E8" />
            </pattern>

            {/* Radiant Sun Glow */}
            <radialGradient id="vinhomes-sun-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.45" />
              <stop offset="55%" stopColor="#FB923C" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#581C87" stopOpacity="0" />
            </radialGradient>

            {/* Sun Core Disc Gradient */}
            <radialGradient id="vinhomes-sun-core" cx="38%" cy="36%" r="64%">
              <stop offset="0%" stopColor="#FFF7ED" />
              <stop offset="25%" stopColor="#FB923C" />
              <stop offset="70%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#EA580C" />
            </radialGradient>

            <linearGradient id="vinhomes-sun-rim" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#C2410C" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {/* Coordinate Background Grid */}
          <rect width="840" height="370" rx="16" fill="url(#vinhomes-dots-grid)" opacity="0.45" />

          {/* Top Section Headers */}
          <text x="140" y="34" textAnchor="middle" fill="#747474" fontSize="10" fontFamily="monospace" fontWeight="600">
            500+ MÔI GIỚI BĐS (TRƯỚC AI)
          </text>
          <text x="710" y="34" textAnchor="middle" fill="#059669" fontSize="10" fontFamily="monospace" fontWeight="bold">
            VINHOMES GREEN PARADISE (SAU AI)
          </text>

          {/* Left: 5 Manual Friction Tasks in Real Estate Sales */}
          {[
            { x: 170, y: 65, label: 'Chờ giỏ hàng cập nhật' },
            { x: 205, y: 120, label: 'Bấm tay tính lãi vay ngân hàng' },
            { x: 225, y: 175, label: 'Gõ kịch bản tư vấn thủ công' },
            { x: 205, y: 230, label: 'Chờ media dựng video dự án' },
            { x: 170, y: 285, label: 'Quên chăm sóc 70% khách cũ' },
          ].map((task, idx) => (
            <g key={idx}>
              {/* Continuous curved purple stream connecting directly into center Sun (400, 175) */}
              <path
                d={`M ${task.x} ${task.y} C ${task.x + 70} ${task.y}, 340 175, 400 175`}
                stroke="#8B5CF6"
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

          {/* Center Solar Sales Mesh Core (cx: 400, cy: 175) */}
          <g transform="translate(400, 175)">
            {/* Outer Constellation Orbit Ring (r = 120) */}
            <circle cx="0" cy="0" r="120" fill="none" stroke="#F97316" strokeWidth="1" strokeDasharray="4 6" opacity="0.4">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="40s" repeatCount="indefinite" />
            </circle>

            {/* 1. Laser connection lines from Sun (0,0) to the 4 Weapon Satellites (drawn behind) */}
            {[
              { id: 'chatbot', sx: -85, sy: -75, isColor: '#581C87' },
              { id: 'landing', sx: 85, sy: -75, isColor: '#7000FF' },
              { id: 'media', sx: 85, sy: 75, isColor: '#EA580C' },
              { id: 'reactivation', sx: -85, sy: 75, isColor: '#059669' },
            ].map((sat) => (
              <line
                key={sat.id}
                x1="0"
                y1="0"
                x2={sat.sx}
                y2={sat.sy}
                stroke={sat.isColor}
                strokeWidth="1.8"
                strokeDasharray="3 3"
                opacity="0.75"
              >
                <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1s" repeatCount="indefinite" />
              </line>
            ))}

            {/* 2. Center Sun Disc & Radiant Flares */}
            <circle cx="0" cy="0" r="68" fill="url(#vinhomes-sun-glow)" />

            {/* 16 Radiant Rays */}
            {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((ang, i) => {
              const rad = (ang * Math.PI) / 180;
              const isMajor = i % 2 === 0;
              return (
                <line
                  key={i}
                  x1={28 * Math.cos(rad)}
                  y1={28 * Math.sin(rad)}
                  x2={(isMajor ? 42 : 35) * Math.cos(rad)}
                  y2={(isMajor ? 42 : 35) * Math.sin(rad)}
                  stroke={isMajor ? '#F97316' : '#FB923C'}
                  strokeWidth={isMajor ? 1.8 : 1}
                  opacity="0.8"
                />
              );
            })}

            <circle cx="0" cy="0" r="28" fill="url(#vinhomes-sun-core)" filter="drop-shadow(0 4px 16px rgba(234,88,12,0.5))" />
            <circle cx="0" cy="0" r="28" fill="none" stroke="url(#vinhomes-sun-rim)" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="10" fill="#FFFFFF" fillOpacity="0.3" stroke="#FFFFFF" strokeWidth="1" />
            <circle cx="0" cy="0" r="4" fill="#FFFFFF" />

            {/* Center Core Badge */}
            <g transform="translate(0, 42)">
              <rect x="-65" y="-9" width="130" height="18" rx="6" fill="#FFFFFF" stroke="#F97316" strokeWidth="1" />
              <text x="0" y="3.5" textAnchor="middle" fill="#EA580C" fontSize="8" fontFamily="monospace" fontWeight="bold">
                LÕI SALES AI · VINHOMES
              </text>
            </g>

            {/* 3. 4 Weapons of AI Sales Enablement */}
            {[
              {
                id: 'chatbot',
                name: 'CHATBOT AI 24/7',
                sub: 'Tra giỏ hàng & tính vay 30s',
                sx: -85,
                sy: -75,
                isColor: '#581C87',
              },
              {
                id: 'landing',
                name: 'AI LANDING PAGE',
                sub: 'Sinh trang dự án (2 phút)',
                sx: 85,
                sy: -75,
                isColor: '#7000FF',
              },
              {
                id: 'media',
                name: 'MEDIA AI TRUYỀN THÔNG',
                sub: 'Video & Visual dự án x3 tốc độ',
                sx: 85,
                sy: 75,
                isColor: '#EA580C',
              },
              {
                id: 'reactivation',
                name: 'LEAD REACTIVATION',
                sub: 'Kích hoạt 70% khách cũ',
                sx: -85,
                sy: 75,
                isColor: '#059669',
              },
            ].map((weapon) => (
              <g key={weapon.id} transform={`translate(${weapon.sx}, ${weapon.sy})`}>
                <rect
                  x="-62"
                  y="-18"
                  width="124"
                  height="36"
                  rx="8"
                  fill="#FFFFFF"
                  stroke={weapon.isColor}
                  strokeWidth="1.8"
                  filter="drop-shadow(0 2px 8px rgba(0,0,0,0.06))"
                />
                <circle cx="-50" cy="0" r="4.5" fill={weapon.isColor} />
                <text x="-40" y="-2" fill="#0A0A0A" fontSize="8" fontFamily="monospace" fontWeight="bold">
                  {weapon.name}
                </text>
                <text x="-40" y="10" fill="#747474" fontSize="7" fontFamily="sans-serif">
                  {weapon.sub}
                </text>
              </g>
            ))}
          </g>

          {/* Right: Supersonic Laser Output Stream connecting from constellation edge (515, 175) to (635, 175) */}
          <line x1="515" y1="175" x2="635" y2="175" stroke="#F97316" strokeWidth="3.5" strokeLinecap="round" />

          {/* Traveling Photon Pulse along output line */}
          <circle cy="175" r="5" fill="#F97316">
            <animate attributeName="cx" values="515;635" dur="1.2s" repeatCount="indefinite" />
          </circle>

          {/* Destination Dossier: Vinhomes Green Paradise Real P&L Results */}
          <g transform="translate(635, 126)">
            <rect
              x="0"
              y="0"
              width="180"
              height="98"
              rx="12"
              fill="#FFF7ED"
              stroke="#F97316"
              strokeWidth="2"
              filter="drop-shadow(0 4px 18px rgba(249,115,22,0.15))"
            />
            <text x="14" y="20" fill="#EA580C" fontSize="8" fontFamily="monospace" fontWeight="bold">
              VINHOMES GREEN PARADISE:
            </text>
            <text x="14" y="44" fill="#0A0A0A" fontSize="17" fontFamily="sans-serif" fontWeight="bold">
              500+ Môi Giới BĐS
            </text>
            <text x="14" y="62" fill="#059669" fontSize="8.5" fontFamily="monospace" fontWeight="bold">
              ✓ Phản hồi &lt; 5 phút (Gốc: 24h)
            </text>
            <text x="14" y="76" fill="#581C87" fontSize="8" fontFamily="sans-serif">
              ✓ Tự sinh Landing Page & Media AI
            </text>
            <text x="14" y="89" fill="#747474" fontSize="7.5" fontFamily="sans-serif">
              ✓ Tỷ lệ hẹn thực địa tăng x2
            </text>
          </g>

          {/* Bottom Summary Banner */}
          <text x="400" y="348" textAnchor="middle" fill="#059669" fontSize="10.5" fontFamily="monospace" fontWeight="bold">
            ➔ ĐÀO TẠO & CHUYỂN GIAO: 500+ MÔI GIỚI BĐS LÀM CHỦ CHATBOT 24/7, LANDING PAGE & MEDIA AI
          </text>
        </svg>
      </div>
    </div>
  );
}
