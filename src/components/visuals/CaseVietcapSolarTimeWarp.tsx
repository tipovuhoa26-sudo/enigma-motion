'use client';

import React from 'react';

export function CaseVietcapSolarTimeWarp() {
  return (
    <div className="w-full relative select-none flex flex-col items-center">
      {/* SVG Solar Time-Warp Canvas (viewBox 840 x 360) */}
      <div className="w-full aspect-[2.3/1] min-h-[320px] max-h-[420px] relative flex items-center justify-center">
        <svg
          viewBox="0 0 840 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full block overflow-visible"
        >
          <defs>
            <pattern id="timewarp-dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#EAEAEA" />
            </pattern>

            {/* Sun Core Disc Gradient */}
            <radialGradient id="warp-sun-core" cx="38%" cy="36%" r="64%">
              <stop offset="0%" stopColor="#FFF7ED" />
              <stop offset="25%" stopColor="#FB923C" />
              <stop offset="70%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#EA580C" />
            </radialGradient>

            {/* Radiant Sun Glow */}
            <radialGradient id="warp-sun-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.45" />
              <stop offset="55%" stopColor="#FB923C" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#581C87" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="warp-sun-rim" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#C2410C" stopOpacity="0.35" />
            </linearGradient>

            {/* Supersonic Orange Beam */}
            <linearGradient id="supersonic-beam" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#EA580C" />
            </linearGradient>

            {/* Silo gravitational pull gradient */}
            <linearGradient id="gravity-pull" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#9CA3AF" />
              <stop offset="60%" stopColor="#581C87" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
          </defs>

          {/* Background Grid */}
          <rect width="840" height="350" rx="16" fill="url(#timewarp-dots)" opacity="0.4" />

          {/* ==================================================================== */}
          {/* LEFT: THỦ CÔNG 48 GIỜ (Heavy Mechanical Clock & 3 Data Silos) */}
          {/* ==================================================================== */}
          <g transform="translate(60, 40)">
            {/* Header */}
            <text x="70" y="15" fill="#747474" fontSize="10.5" fontFamily="monospace" fontWeight="600">
              TRƯỚC: THỦ CÔNG 48 GIỜ
            </text>

            {/* Slow Drag Mechanical Clock Ring (cx: 80, cy: 140, r: 65) */}
            <g transform="translate(80, 140)">
              {/* Outer Gear Teeth / Notches */}
              <circle cx="0" cy="0" r="64" fill="none" stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="4 6" />
              <circle cx="0" cy="0" r="54" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1" />

              {/* Slow Moving Clock Hands pointing to 48H drag */}
              <line x1="0" y1="0" x2="0" y2="-36" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="0" y1="0" x2="28" y2="12" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
              <circle cx="0" cy="0" r="4" fill="#6B7280" />

              {/* Dragging Red Friction Arcs */}
              <path d="M 0 -54 A 54 54 0 0 1 48 24" fill="none" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" opacity="0.7" />

              {/* Monumental crossed-out 48h */}
              <text x="0" y="4" textAnchor="middle" fill="#9CA3AF" fontSize="22" fontFamily="sans-serif" fontWeight="300" opacity="0.4">
                48h
              </text>
            </g>

            {/* 3 Silo Feeders Entering Gravitational Pull */}
            {[
              { id: 'bctc', name: 'BCTC Doanh Nghiệp', y: 80 },
              { id: 'macro', name: 'Vĩ Mô & Ngành', y: 140 },
              { id: 'model', name: 'Mô Hình Định Giá', y: 200 },
            ].map((silo, idx) => (
              <g key={silo.id} transform={`translate(160, ${silo.y})`}>
                <rect x="0" y="-14" width="105" height="28" rx="6" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1" filter="drop-shadow(0 1px 3px rgba(0,0,0,0.03))" />
                <text x="10" y="3.5" fill="#4B5563" fontSize="8.5" fontFamily="sans-serif" fontWeight="500">
                  {silo.name}
                </text>

                {/* Dotted Gravitational Pull Ray into Sun */}
                <path
                  d={`M 105 0 Q 150 0 200 ${140 - silo.y}`}
                  stroke="url(#gravity-pull)"
                  strokeWidth="1.8"
                  strokeDasharray="4 3"
                  fill="none"
                />
                <circle cx="150" cy={(140 - silo.y) * 0.4} r="2.5" fill="#581C87" className="animate-pulse" />
              </g>
            ))}

            <text x="80" y="235" textAnchor="middle" fill="#EF4444" fontSize="9" fontFamily="monospace" fontWeight="bold">
              3 Luồng rời rạc · Nhập tay
            </text>
          </g>

          {/* ==================================================================== */}
          {/* CENTER: LÕI MẶT TRỜI MULTI-AGENT (TRIANGULATION ENGINE) */}
          {/* ==================================================================== */}
          <g transform="translate(420, 175)">
            {/* Giant Solar Aura */}
            <circle cx="0" cy="0" r="75" fill="url(#warp-sun-glow)" />

            {/* Rotating Corona Rings */}
            <circle cx="0" cy="0" r="54" fill="none" stroke="#F97316" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.8">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite" />
            </circle>
            <circle cx="0" cy="0" r="42" fill="none" stroke="#FB923C" strokeWidth="1" strokeDasharray="3 4" opacity="0.6">
              <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="14s" repeatCount="indefinite" />
            </circle>

            {/* 16 Radiant Solar Rays */}
            {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((ang, idx) => {
              const rad = (ang * Math.PI) / 180;
              const isMajor = idx % 2 === 0;
              const r1 = 30;
              const r2 = isMajor ? 44 : 36;
              return (
                <line
                  key={idx}
                  x1={r1 * Math.cos(rad)}
                  y1={r1 * Math.sin(rad)}
                  x2={r2 * Math.cos(rad)}
                  y2={r2 * Math.sin(rad)}
                  stroke={isMajor ? '#F97316' : '#FB923C'}
                  strokeWidth={isMajor ? 2 : 1.2}
                  strokeLinecap="round"
                  opacity={0.8}
                />
              );
            })}

            {/* Sun Disc Core */}
            <circle cx="0" cy="0" r="28" fill="url(#warp-sun-core)" filter="drop-shadow(0 4px 18px rgba(234,88,12,0.5))" />
            <circle cx="0" cy="0" r="28" fill="none" stroke="url(#warp-sun-rim)" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="10" fill="#FFFFFF" fillOpacity="0.3" />
            <circle cx="0" cy="0" r="4" fill="#FFFFFF" />

            {/* 3 Swarm Agent Particles orbiting the core */}
            <circle cx="20" cy="-15" r="3" fill="#FFFFFF">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="-18" cy="16" r="3" fill="#FFFFFF">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="12" cy="18" r="3" fill="#FFFFFF">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" />
            </circle>

            {/* Core Label */}
            <text x="0" y="58" textAnchor="middle" fill="#F97316" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
              MULTI-AGENT ENGINE
            </text>
            <text x="0" y="70" textAnchor="middle" fill="#581C87" fontSize="8" fontFamily="monospace">
              Đối Soát 3 Chiều (0.2s)
            </text>
          </g>

          {/* ==================================================================== */}
          {/* RIGHT: TỐC ĐỘ ÁNH SÁNG 3 GIỜ (SUPERSONIC BEAM & DOSSIER) */}
          {/* ==================================================================== */}
          <g transform="translate(480, 175)">
            {/* Supersonic Laser Beam Emerging From Sun */}
            <line x1="0" y1="0" x2="160" y2="0" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
            <line x1="0" y1="0" x2="160" y2="0" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />

            {/* Traveling Laser Pulse Particle */}
            <circle cy="0" r="5" fill="#F97316">
              <animate attributeName="cx" values="0;160" dur="1.4s" repeatCount="indefinite" />
            </circle>

            {/* Breakthrough Shockwave Arcs */}
            <path d="M 120 -35 A 45 45 0 0 1 120 35" fill="none" stroke="#F97316" strokeWidth="2" strokeDasharray="3 3" opacity="0.8" />
            <path d="M 135 -45 A 60 60 0 0 1 135 45" fill="none" stroke="#FB923C" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />

            {/* Output Destination: Vietcap Dossier & Monumental 3 Giờ */}
            <g transform="translate(170, 0)">
              {/* Massive Output Badge */}
              <rect
                x="0"
                y="-60"
                width="155"
                height="120"
                rx="12"
                fill="#FFF7ED"
                stroke="#F97316"
                strokeWidth="2"
                filter="drop-shadow(0 6px 20px rgba(249,115,22,0.15))"
              />

              <text x="16" y="-38" fill="#F97316" fontSize="9" fontFamily="monospace" fontWeight="bold">
                SAU CHUYỂN ĐỔI:
              </text>

              {/* Monumental 3 Giờ */}
              <text x="16" y="2" fill="#0A0A0A" fontSize="38" fontFamily="sans-serif" fontWeight="700">
                3 Giờ
              </text>

              <line x1="16" y1="16" x2="138" y2="16" stroke="#FED7AA" strokeWidth="1" />

              {/* Metric Callouts */}
              <text x="16" y="32" fill="#F97316" fontSize="13" fontFamily="monospace" fontWeight="bold">
                −75% THỜI GIAN
              </text>
              <text x="16" y="46" fill="#059669" fontSize="9" fontFamily="monospace" fontWeight="bold">
                ✓ Khớp dữ liệu 99.8%
              </text>
            </g>
          </g>

          {/* Bottom Summary Banner */}
          <text x="420" y="335" textAnchor="middle" fill="#581C87" fontSize="10.5" fontFamily="monospace" fontWeight="bold">
            ➔ RÚT NGẮN TỪ 2 NGÀY XUỐNG 3 GIỜ · NGHIỆM THU TRỰC TIẾP TẠI VIETCAP
          </text>
        </svg>
      </div>
    </div>
  );
}
