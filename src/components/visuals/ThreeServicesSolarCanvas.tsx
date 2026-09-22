'use client';

import React from 'react';

interface ThreeServicesSolarCanvasProps {
  activePillar: number;
  onSelectPillar: (id: number) => void;
}

export function ThreeServicesSolarCanvas({ activePillar, onSelectPillar }: ThreeServicesSolarCanvasProps) {
  return (
    <div className="w-full relative select-none flex flex-col items-center">
      {/* SVG Solar Visual Canvas (viewBox 0 0 840 360) */}
      <div className="w-full aspect-[2.3/1] min-h-[320px] max-h-[420px] relative flex items-center justify-center">
        <svg
          viewBox="0 0 840 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full block overflow-visible"
        >
          <defs>
            <pattern id="services-dots-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#E8E8E8" />
            </pattern>

            {/* Radiant Sun Glow */}
            <radialGradient id="pillar-sun-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.45" />
              <stop offset="55%" stopColor="#FB923C" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#581C87" stopOpacity="0" />
            </radialGradient>

            {/* Sun Core Disc Gradient */}
            <radialGradient id="pillar-sun-core" cx="38%" cy="36%" r="64%">
              <stop offset="0%" stopColor="#FFF7ED" />
              <stop offset="25%" stopColor="#FB923C" />
              <stop offset="70%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#EA580C" />
            </radialGradient>

            <linearGradient id="pillar-sun-rim" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#C2410C" stopOpacity="0.35" />
            </linearGradient>

            {/* Radar Cone Sweep Gradient */}
            <linearGradient id="radar-cone-sweep" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#581C87" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Coordinate Background Grid */}
          <rect width="840" height="360" rx="16" fill="url(#services-dots-grid)" opacity="0.45" />

          {/* ==================================================================== */}
          {/* PILLAR 01: ĐÀO TẠO · LĂNG KÍNH KHAI PHÓNG NHÂN SỰ (SOP RESONANCE) */}
          {/* ==================================================================== */}
          {activePillar === 1 && (
            <g className="animate-in fade-in duration-300">
              {/* Top Section Headers */}
              <text x="140" y="36" textAnchor="middle" fill="#747474" fontSize="10.5" fontFamily="monospace" fontWeight="600">
                THỦ CÔNG RỜI RẠC (TRƯỚC)
              </text>
              <text x="700" y="36" textAnchor="middle" fill="#059669" fontSize="10.5" fontFamily="monospace" fontWeight="bold">
                TỰ CHỦ VẬN HÀNH 100% (SAU)
              </text>

              {/* 5 Left Manual Task Nodes: Arranged vertically, text strictly on the LEFT so lines NEVER cross labels */}
              {[
                { x: 180, y: 70, label: 'Nhập liệu thủ công' },
                { x: 210, y: 122, label: 'Copy / đối soát tay' },
                { x: 230, y: 175, label: 'Chờ duyệt email chậm' },
                { x: 210, y: 228, label: 'Báo cáo trễ & sai sót' },
                { x: 180, y: 280, label: 'Sót lệch số liệu P&L' },
              ].map((task, idx) => (
                <g key={idx}>
                  {/* Continuous curved stream connecting node into center Sun (400, 175) */}
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

                  {/* Manual Task Node (Text strictly to the left of the circle) */}
                  <g transform={`translate(${task.x}, ${task.y})`}>
                    <circle cx="0" cy="0" r="13" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5" filter="drop-shadow(0 1px 4px rgba(0,0,0,0.04))" />
                    <circle cx="0" cy="0" r="4" fill="#EF4444" />
                    <text x="-18" y="3.5" textAnchor="end" fill="#374151" fontSize="9" fontFamily="sans-serif" fontWeight="500">
                      {task.label}
                    </text>
                  </g>
                </g>
              ))}

              {/* Center: Sunext Knowledge Core (Lõi Huấn Luyện SOP tại 400, 175) */}
              <g transform="translate(400, 175)">
                <circle cx="0" cy="0" r="70" fill="url(#pillar-sun-glow)" />

                {/* Rotating Corona Rings around (0,0) */}
                <circle cx="0" cy="0" r="46" fill="none" stroke="#F97316" strokeWidth="1.2" strokeDasharray="4 5" opacity="0.8">
                  <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="25s" repeatCount="indefinite" />
                </circle>
                <circle cx="0" cy="0" r="35" fill="none" stroke="#FB923C" strokeWidth="1" strokeDasharray="3 3" opacity="0.6">
                  <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="18s" repeatCount="indefinite" />
                </circle>

                {/* 16 Radiant Solar Rays */}
                {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((ang, i) => {
                  const rad = (ang * Math.PI) / 180;
                  const isMajor = i % 2 === 0;
                  return (
                    <line
                      key={i}
                      x1={28 * Math.cos(rad)}
                      y1={28 * Math.sin(rad)}
                      x2={(isMajor ? 40 : 34) * Math.cos(rad)}
                      y2={(isMajor ? 40 : 34) * Math.sin(rad)}
                      stroke={isMajor ? '#F97316' : '#FB923C'}
                      strokeWidth={isMajor ? 1.8 : 1}
                      opacity="0.8"
                    />
                  );
                })}

                {/* Sun Disc */}
                <circle cx="0" cy="0" r="26" fill="url(#pillar-sun-core)" filter="drop-shadow(0 4px 14px rgba(234,88,12,0.5))" />
                <circle cx="0" cy="0" r="26" fill="none" stroke="url(#pillar-sun-rim)" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="9" fill="#FFFFFF" fillOpacity="0.3" />
                <circle cx="0" cy="0" r="3.5" fill="#FFFFFF" />

                {/* Label pill cleanly positioned below the sun */}
                <g transform="translate(0, 52)">
                  <rect x="-60" y="-10" width="120" height="20" rx="6" fill="#FFF7ED" stroke="#F97316" strokeWidth="1" />
                  <text x="0" y="3.5" textAnchor="middle" fill="#F97316" fontSize="8.5" fontFamily="monospace" fontWeight="bold">
                    LÕI HUẤN LUYỆN SOP
                  </text>
                </g>
              </g>

              {/* 5 Right Autonomous Personnel Connected Directly from Sun (400, 175) */}
              {[
                { x: 640, y: 70, role: 'AI Workflow Lead', tag: 'SOP 01' },
                { x: 670, y: 122, role: 'Prompt Specialist', tag: 'SOP 02' },
                { x: 690, y: 175, role: 'Data Automator', tag: 'SOP 03' },
                { x: 670, y: 228, role: 'QA & Compliance', tag: 'SOP 04' },
                { x: 640, y: 280, role: 'Operations Champion', tag: 'SOP 05' },
              ].map((role, idx) => (
                <g key={idx}>
                  {/* Coherent Orange Laser Beam from Sun directly to Role */}
                  <path
                    d={`M 400 175 C 470 175, ${role.x - 70} ${role.y}, ${role.x} ${role.y}`}
                    stroke="#F97316"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.85"
                  />
                  {/* Animated fiber pulse flowing outwards */}
                  <path
                    d={`M 400 175 C 470 175, ${role.x - 70} ${role.y}, ${role.x} ${role.y}`}
                    stroke="#FB923C"
                    strokeWidth="2"
                    strokeDasharray="6 8"
                    fill="none"
                    opacity="0.9"
                  >
                    <animate attributeName="stroke-dashoffset" from="28" to="0" dur="1s" repeatCount="indefinite" />
                  </path>

                  {/* Role Card */}
                  <g transform={`translate(${role.x}, ${role.y})`}>
                    <rect x="0" y="-16" width="145" height="32" rx="8" fill="#FFFFFF" stroke="#F97316" strokeWidth="1.5" filter="drop-shadow(0 2px 6px rgba(249,115,22,0.12))" />
                    <circle cx="14" cy="0" r="5" fill="#059669" />
                    <text x="26" y="-1" fill="#0A0A0A" fontSize="9" fontFamily="sans-serif" fontWeight="bold">
                      {role.role}
                    </text>
                    <text x="26" y="10" fill="#F97316" fontSize="7.5" fontFamily="monospace">
                      {role.tag} · Tự chủ 100%
                    </text>
                  </g>
                </g>
              ))}

              <text x="400" y="340" textAnchor="middle" fill="#059669" fontSize="10.5" fontFamily="monospace" fontWeight="bold">
                ➔ CHUYỂN GIAO NĂNG LỰC: ĐỘI NGŨ TỰ XÂY DỰNG VÀ VẬN HÀNH LUỒNG AI BỀN VỮNG
              </text>
            </g>
          )}

          {/* ==================================================================== */}
          {/* PILLAR 02: TƯ VẤN · LA BÀN / RADAR THIÊN VĂN ROI (< 4 THÁNG) */}
          {/* ==================================================================== */}
          {activePillar === 2 && (
            <g className="animate-in fade-in duration-300">
              {/* Radar Coordinate Frame centered at (400, 170) */}
              <g transform="translate(400, 170)">
                {/* Concentric Radar Grid Rings */}
                <circle cx="0" cy="0" r="145" fill="none" stroke="#E5E7EB" strokeWidth="1" />
                <circle cx="0" cy="0" r="110" fill="none" stroke="#581C87" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                <circle cx="0" cy="0" r="75" fill="none" stroke="#E5E7EB" strokeWidth="1" />
                <circle cx="0" cy="0" r="40" fill="none" stroke="#581C87" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />

                {/* Coordinate Axes */}
                <line x1="-165" y1="0" x2="165" y2="0" stroke="#D1D5DB" strokeWidth="1" />
                <line x1="0" y1="-155" x2="0" y2="155" stroke="#D1D5DB" strokeWidth="1" />

                {/* Degree & Axis Labels */}
                <text x="155" y="-6" fill="#747474" fontSize="8.5" fontFamily="monospace">0° [P&L]</text>
                <text x="0" y="-146" textAnchor="middle" fill="#747474" fontSize="8.5" fontFamily="monospace">90° [TỐC ĐỘ]</text>
                <text x="-155" y="-6" textAnchor="end" fill="#747474" fontSize="8.5" fontFamily="monospace">180° [TIẾT KIỆM]</text>
                <text x="0" y="152" textAnchor="middle" fill="#747474" fontSize="8.5" fontFamily="monospace">270° [RỦI RO]</text>

                {/* ROTATING RADAR SWEEP CONE */}
                <g>
                  <path d="M 0 0 L 120 -80 A 145 145 0 0 1 145 0 Z" fill="url(#radar-cone-sweep)" />
                  <line x1="0" y1="0" x2="145" y2="0" stroke="#F97316" strokeWidth="1.5" />
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0"
                    to="360"
                    dur="7s"
                    repeatCount="indefinite"
                  />
                </g>

                {/* 2 Faint Candidate Blips (Discovery Phase Exploration) */}
                <g opacity="0.55">
                  <circle cx="-65" cy="-50" r="3.5" fill="#9CA3AF" />
                  <text x="-75" y="-47" textAnchor="end" fill="#6B7280" fontSize="7.5" fontFamily="monospace">CSKH Chatbot (ROI ~18th)</text>

                  <circle cx="-55" cy="60" r="3.5" fill="#9CA3AF" />
                  <text x="-65" y="63" textAnchor="end" fill="#6B7280" fontSize="7.5" fontFamily="monospace">Nội dung SEO (ROI ~12th)</text>
                </g>

                {/* Center Sun Core at (0,0) */}
                <circle cx="0" cy="0" r="50" fill="url(#pillar-sun-glow)" />
                <circle cx="0" cy="0" r="24" fill="url(#pillar-sun-core)" filter="drop-shadow(0 4px 12px rgba(234,88,12,0.45))" />
                <circle cx="0" cy="0" r="24" fill="none" stroke="url(#pillar-sun-rim)" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="8" fill="#FFFFFF" fillOpacity="0.3" />
                <circle cx="0" cy="0" r="3.5" fill="#FFFFFF" />

                {/* TARGET CROSSHAIR LOCKED IN HIGH-YIELD ROI QUADRANT at (90, -70) */}
                <g transform="translate(90, -70)">
                  {/* Expanding Target Pulse Rings using pure SVG animate (NO animate-ping!) */}
                  <circle cx="0" cy="0" r="16" fill="none" stroke="#F97316" strokeWidth="1.5">
                    <animate attributeName="r" values="14;28;14" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.9;0.1;0.9" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="0" cy="0" r="16" fill="#FFF7ED" stroke="#F97316" strokeWidth="2" />
                  <circle cx="0" cy="0" r="5" fill="#F97316" />

                  {/* Crosshair targeting reticle lines */}
                  <line x1="-22" y1="0" x2="22" y2="0" stroke="#F97316" strokeWidth="1.2" />
                  <line x1="0" y1="-22" x2="0" y2="22" stroke="#F97316" strokeWidth="1.2" />

                  {/* Target Telemetry Card directly attached */}
                  <g transform="translate(28, -26)">
                    <rect x="0" y="0" width="165" height="56" rx="8" fill="#FFFFFF" stroke="#F97316" strokeWidth="1.5" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.06))" />
                    <text x="12" y="18" fill="#747474" fontSize="8" fontFamily="monospace">TỌA ĐỘ HOÀN VỐN (ROI):</text>
                    <text x="12" y="34" fill="#F97316" fontSize="13" fontFamily="monospace" fontWeight="bold">PAYBACK &lt; 4 THÁNG</text>
                    <text x="12" y="47" fill="#059669" fontSize="9" fontFamily="sans-serif" fontWeight="600">Tiết kiệm ~1.6 Tỷ VNĐ / năm</text>
                  </g>
                </g>

                {/* Sub-label */}
                <text x="0" y="165" textAnchor="middle" fill="#581C87" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  LA BÀN KHẢO SÁT & ĐỊNH LƯỢNG P&L CHÍNH XÁC TRƯỚC ĐẦU TƯ
                </text>
              </g>
            </g>
          )}

          {/* ==================================================================== */}
          {/* PILLAR 03: TRIỂN KHAI · CHÒM SAO 3 VỆ TINH MULTI-AGENT ĐỒNG BỘ */}
          {/* ==================================================================== */}
          {activePillar === 3 && (
            <g className="animate-in fade-in duration-300">
              {/* Left Input Beam: Connects from 60 to 280 */}
              <g transform="translate(60, 130)">
                <text x="0" y="14" fill="#747474" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  DỮ LIỆU ĐẦU VÀO
                </text>
                <text x="0" y="27" fill="#581C87" fontSize="8" fontFamily="monospace">
                  ERP · CRM · Kế toán
                </text>
              </g>

              {/* Continuous animated input stream */}
              <line x1="60" y1="170" x2="280" y2="170" stroke="#7000FF" strokeWidth="2.5" strokeDasharray="6 4">
                <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.5s" repeatCount="indefinite" />
              </line>

              {/* Traveling input pulse particle along line */}
              <circle cy="170" r="4.5" fill="#7000FF">
                <animate attributeName="cx" values="60;280" dur="2s" repeatCount="indefinite" />
              </circle>

              {/* Center Solar Multi-Agent Engine (cx: 400, cy: 170) */}
              <g transform="translate(400, 170)">
                {/* Orbital Constellation Ring around (0,0) with r = 120 */}
                <circle cx="0" cy="0" r="120" fill="none" stroke="#7000FF" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.6">
                  <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="30s" repeatCount="indefinite" />
                </circle>

                {/* 1. Laser connection lines from Center Sun directly to Satellites (drawn behind) */}
                {[
                  { id: 'ingest', sx: -95, sy: -80, isColor: '#581C87', x1: 0, y1: 0, x2: -95, y2: -80 },
                  { id: 'verify', sx: 95, sy: -80, isColor: '#7000FF', x1: 0, y1: 0, x2: 95, y2: -80 },
                  { id: 'comply', sx: 0, sy: 120, isColor: '#F97316', x1: 0, y1: 52, x2: 0, y2: 102 },
                ].map((ag) => (
                  <line
                    key={ag.id}
                    x1={ag.x1}
                    y1={ag.y1}
                    x2={ag.x2}
                    y2={ag.y2}
                    stroke={ag.isColor}
                    strokeWidth="1.8"
                    strokeDasharray="3 3"
                    opacity="0.8"
                  >
                    <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1s" repeatCount="indefinite" />
                  </line>
                ))}

                {/* 2. Central Sun Disc */}
                <circle cx="0" cy="0" r="65" fill="url(#pillar-sun-glow)" />
                <circle cx="0" cy="0" r="28" fill="url(#pillar-sun-core)" filter="drop-shadow(0 4px 16px rgba(234,88,12,0.5))" />
                <circle cx="0" cy="0" r="28" fill="none" stroke="url(#pillar-sun-rim)" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="10" fill="#FFFFFF" fillOpacity="0.3" stroke="#FFFFFF" strokeWidth="1" />
                <circle cx="0" cy="0" r="4" fill="#FFFFFF" />

                {/* Clean Sun label directly below Sun disc, 50px above Agent Comply */}
                <g transform="translate(0, 42)">
                  <rect x="-56" y="-9" width="112" height="18" rx="6" fill="#FFFFFF" stroke="#7000FF" strokeWidth="1" />
                  <text x="0" y="3.5" textAnchor="middle" fill="#581C87" fontSize="8" fontFamily="monospace" fontWeight="bold">
                    LÕI ĐIỀU PHỐI AI
                  </text>
                </g>

                {/* 3. 3 Autonomous Satellite Agents in balanced triangle with ZERO overlap */}
                {[
                  { id: 'ingest', name: 'AGENT INGEST', sub: 'Quét & Chuẩn hóa', sx: -95, sy: -80, isColor: '#581C87' },
                  { id: 'verify', name: 'AGENT VERIFY', sub: 'Đối soát 3 chiều', sx: 95, sy: -80, isColor: '#7000FF' },
                  { id: 'comply', name: 'AGENT COMPLY', sub: 'Quản trị rủi ro', sx: 0, sy: 120, isColor: '#F97316' },
                ].map((ag) => (
                  <g key={ag.id} transform={`translate(${ag.sx}, ${ag.sy})`}>
                    <rect x="-55" y="-18" width="110" height="36" rx="8" fill="#FFFFFF" stroke={ag.isColor} strokeWidth="1.8" filter="drop-shadow(0 2px 8px rgba(0,0,0,0.06))" />
                    <circle cx="-42" cy="0" r="4.5" fill={ag.isColor} />
                    <text x="-32" y="-2" fill="#0A0A0A" fontSize="8.5" fontFamily="monospace" fontWeight="bold">
                      {ag.name}
                    </text>
                    <text x="-32" y="10" fill="#747474" fontSize="7.5" fontFamily="sans-serif">
                      {ag.sub}
                    </text>
                  </g>
                ))}
              </g>

              {/* Right Output Stream: Solid orange laser connecting from constellation edge (520, 170) to (640, 170) */}
              <line x1="520" y1="170" x2="640" y2="170" stroke="#F97316" strokeWidth="3.5" strokeLinecap="round" />

              {/* Traveling Output Pulse Particle */}
              <circle cy="170" r="5" fill="#F97316">
                <animate attributeName="cx" values="520;640" dur="1.2s" repeatCount="indefinite" />
              </circle>

              {/* Destination P&L Output Dossier Card at (640, 136) */}
              <g transform="translate(640, 136)">
                <rect x="0" y="0" width="165" height="68" rx="10" fill="#FFF7ED" stroke="#F97316" strokeWidth="2" filter="drop-shadow(0 4px 16px rgba(249,115,22,0.15))" />
                <text x="14" y="20" fill="#F97316" fontSize="8.5" fontFamily="monospace" fontWeight="bold">KẾT QUẢ VẬN HÀNH:</text>
                <text x="14" y="40" fill="#0A0A0A" fontSize="14" fontFamily="sans-serif" fontWeight="bold">100% Khớp Số</text>
                <text x="14" y="55" fill="#059669" fontSize="8" fontFamily="monospace" fontWeight="bold">✓ 0 lỗi lệch · Bàn giao source</text>
              </g>

              {/* Bottom Summary Banner */}
              <text x="400" y="340" textAnchor="middle" fill="#059669" fontSize="10.5" fontFamily="monospace" fontWeight="bold">
                ➔ BÀN GIAO 100% MÃ NGUỒN & HỆ THỐNG AGENT TỰ ĐỘNG ĐIỀU PHỐI
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* 3 Dedicated Solar Pillar Buttons (Below Drawing) */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-[760px] mt-6 bg-[#F9F9F8] p-1.5 rounded-2xl border border-[#E7E7E5]">
        {[
          { id: 1, tag: '01 · ĐÀO TẠO', name: 'Lăng Kính SOP Nhân Sự', standard: '100% Tự chủ quy trình' },
          { id: 2, tag: '02 · TƯ VẤN', name: 'La Bàn Radar ROI', standard: 'Payback < 4 tháng' },
          { id: 3, tag: '03 · TRIỂN KHAI', name: 'Chòm Sao Multi-Agent', standard: '100% Bàn giao mã nguồn' },
        ].map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => onSelectPillar(p.id)}
            className={`p-3 sm:p-4 rounded-xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
              activePillar === p.id
                ? 'bg-white border-2 border-[#581C87] shadow-xs'
                : 'bg-transparent border border-transparent hover:bg-white/60'
            }`}
          >
            <div>
              <span className={`text-[10px] font-mono font-bold block mb-1 ${activePillar === p.id ? 'text-[#581C87]' : 'text-[#747474]'}`}>
                {p.tag}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#0A0A0A] block">
                {p.name}
              </span>
            </div>
            <span className={`text-[10px] font-mono mt-2 block ${activePillar === p.id ? 'text-[#F97316] font-bold' : 'text-[#747474]'}`}>
              {p.standard}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
