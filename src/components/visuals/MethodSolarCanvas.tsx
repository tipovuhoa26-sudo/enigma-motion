'use client';

import React from 'react';

interface MethodSolarCanvasProps {
  activeStep: number;
}

export function MethodSolarCanvas({ activeStep }: MethodSolarCanvasProps) {
  return (
    <div className="w-full h-full min-h-[360px] sm:min-h-[400px] flex items-center justify-center select-none relative overflow-hidden">
      {/* Background Soft Solar Ambience */}
      <div className="absolute inset-0 bg-radial from-orange-500/[0.04] via-purple-500/[0.02] to-transparent pointer-events-none" />

      <svg
        viewBox="0 0 640 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block max-w-[620px] max-h-[390px]"
      >
        <defs>
          {/* Dot pattern */}
          <pattern id="solar-canvas-dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#EAEAEA" />
          </pattern>

          {/* Sun Solar Glow */}
          <radialGradient id="method-sun-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#FB923C" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#581C87" stopOpacity="0" />
          </radialGradient>

          {/* Sun Core Radial Gradient */}
          <radialGradient id="method-sun-core" cx="38%" cy="36%" r="64%">
            <stop offset="0%" stopColor="#FFF7ED" />
            <stop offset="25%" stopColor="#FB923C" />
            <stop offset="70%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </radialGradient>

          {/* Purple Solar Flare Gradient */}
          <linearGradient id="purple-solar-beam" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#581C87" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#7000FF" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>

          {/* Pure Orange Beam */}
          <linearGradient id="orange-solar-beam" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>

          {/* Rim light */}
          <linearGradient id="method-rim" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C2410C" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Background Grid */}
        <rect width="640" height="400" rx="16" fill="url(#solar-canvas-dots)" opacity="0.5" />

        {/* ==================================================================== */}
        {/* STATE 0: QUY TRÌNH TRƯỚC CÔNG CỤ (Chaotic Spaghetti ➔ Sunext Lens ➔ 4 Aligned Laser Rays) */}
        {/* ==================================================================== */}
        {activeStep === 0 && (
          <g className="animate-in fade-in duration-500">
            {/* Left Badge */}
            <rect x="25" y="30" width="170" height="26" rx="6" fill="#FAF8FC" stroke="#E5E5E5" strokeWidth="1" />
            <text x="110" y="47" textAnchor="middle" fill="#747474" fontSize="10" fontFamily="monospace" fontWeight="bold">
              12 BƯỚC THỦ CÔNG HỖN LOẠN
            </text>

            {/* Chaotic Spaghetti Lines (Left) */}
            <g opacity="0.75">
              <path d="M 35 95 Q 85 140 135 100 T 215 180" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
              <path d="M 35 135 Q 105 80 145 160 T 215 190" stroke="#A3A3A3" strokeWidth="1.2" strokeDasharray="3 3" fill="none" />
              <path d="M 35 175 Q 75 230 155 140 T 215 200" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
              <path d="M 35 215 Q 115 180 145 250 T 215 210" stroke="#A3A3A3" strokeWidth="1.2" strokeDasharray="3 3" fill="none" />
              <path d="M 35 255 Q 85 315 165 210 T 215 220" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
              <path d="M 35 295 Q 125 260 155 310 T 215 230" stroke="#A3A3A3" strokeWidth="1.2" strokeDasharray="3 3" fill="none" />

              {/* Friction Warning Nodes */}
              <circle cx="95" cy="115" r="4" fill="#EF4444" />
              <circle cx="150" cy="160" r="4" fill="#EF4444" />
              <circle cx="120" cy="240" r="4" fill="#EF4444" />
              <circle cx="165" cy="275" r="4" fill="#EF4444" />
            </g>

            {/* Central Sunext Focusing Solar Prism / Lens (cx: 245, cy: 200) */}
            <g transform="translate(245, 200)">
              {/* Solar Aura */}
              <circle cx="0" cy="0" r="60" fill="url(#method-sun-glow)" />

              {/* Rotating Corona Rings */}
              <circle cx="0" cy="0" r="40" fill="none" stroke="#F97316" strokeWidth="1" strokeDasharray="3 5" opacity="0.6">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="25s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="0" r="32" fill="none" stroke="#FB923C" strokeWidth="1" strokeDasharray="4 4" opacity="0.5">
                <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="18s" repeatCount="indefinite" />
              </circle>

              {/* Sun Disc */}
              <circle cx="0" cy="0" r="24" fill="url(#method-sun-core)" filter="drop-shadow(0 4px 12px rgba(234,88,12,0.4))" />
              <circle cx="0" cy="0" r="24" fill="none" stroke="url(#method-rim)" strokeWidth="1.2" />
              <circle cx="0" cy="0" r="9" fill="#FFFFFF" fillOpacity="0.3" stroke="#FFFFFF" strokeWidth="1" />
              <circle cx="0" cy="0" r="3.5" fill="#FFFFFF" />

              {/* Self-contained Badge below sun (Zero collision with lines) */}
              <rect x="-62" y="46" width="124" height="22" rx="11" fill="#FFF7ED" stroke="#F97316" strokeWidth="1" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.04))" />
              <text x="0" y="60.5" textAnchor="middle" fill="#EA580C" fontSize="9" fontFamily="monospace" fontWeight="bold">
                LÕI CHUẨN HÓA SOP
              </text>
            </g>

            {/* Right Side: 4 Clean, Aligned Laser Rays Emerging into Wide Station Boxes */}
            <g>
              {/* Top Section Metric Header */}
              <rect x="360" y="30" width="250" height="26" rx="6" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" />
              <text x="485" y="47" textAnchor="middle" fill="#059669" fontSize="10" fontFamily="monospace" fontWeight="bold">
                ➔ 4 BƯỚC THẲNG HÀNG (TIẾT KIỆM −67%)
              </text>

              {[
                { y: 110, label: '01 · INGEST', sub: 'Trích xuất đa kênh (0.8s)' },
                { y: 165, label: '02 · VERIFY', sub: 'Đối soát ERP (99.8%)' },
                { y: 220, label: '03 · COMPLY', sub: 'Rà soát rủi ro (Zero-leak)' },
                { y: 275, label: '04 · APPROVAL', sub: 'Lãnh đạo duyệt 1-click (Cam)', isOrange: true },
              ].map((ray, idx) => (
                <g key={idx}>
                  {/* Glowing Laser Beam from Sun to Box */}
                  <line
                    x1="272"
                    y1="200"
                    x2="355"
                    y2={ray.y}
                    stroke={ray.isOrange ? '#F97316' : '#581C87'}
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    opacity="0.5"
                  />
                  <line
                    x1="355"
                    y1={ray.y}
                    x2="450"
                    y2={ray.y}
                    stroke={ray.isOrange ? '#F97316' : '#581C87'}
                    strokeWidth={ray.isOrange ? 2.5 : 2}
                  />

                  {/* Traveling Pulse Particle */}
                  <circle cx="400" cy={ray.y} r={ray.isOrange ? 4 : 3} fill={ray.isOrange ? '#F97316' : '#581C87'}>
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
                  </circle>

                  {/* Generous Station Node Box (Width 165px, Height 36px - ZERO text overflow) */}
                  <rect
                    x="450"
                    y={ray.y - 18}
                    width="165"
                    height="36"
                    rx="8"
                    fill={ray.isOrange ? '#FFF7ED' : '#FAF8FC'}
                    stroke={ray.isOrange ? '#F97316' : '#581C87'}
                    strokeWidth={ray.isOrange ? 1.5 : 1}
                    filter="drop-shadow(0 2px 6px rgba(0,0,0,0.03))"
                  />
                  <text x="462" y={ray.y - 2} fill={ray.isOrange ? '#EA580C' : '#581C87'} fontSize="10" fontFamily="monospace" fontWeight="bold">
                    {ray.label}
                  </text>
                  <text x="462" y={ray.y + 11} fill="#515151" fontSize="8.5" fontFamily="sans-serif">
                    {ray.sub}
                  </text>
                </g>
              ))}
            </g>
          </g>
        )}

        {/* ==================================================================== */}
        {/* STATE 1: DỮ LIỆU PHẢI KẾT NỐI ĐƯỢC (Solar Gravitational Vault) */}
        {/* ==================================================================== */}
        {activeStep === 1 && (
          <g className="animate-in fade-in duration-500">
            {/* Top Vault Header */}
            <rect x="95" y="28" width="450" height="26" rx="6" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" />
            <text x="320" y="45" textAnchor="middle" fill="#047857" fontSize="10.5" fontFamily="monospace" fontWeight="bold">
              RANH GIỚI BẢO MẬT CÔ LẬP · PRIVATE SOLAR VAULT (ZERO LEAK)
            </text>

            {/* Central Sun Vault Core (cx: 320, cy: 195) */}
            <g transform="translate(320, 195)">
              {/* Giant Protective Gravitational Shield Circle */}
              <circle cx="0" cy="0" r="130" fill="none" stroke="#059669" strokeWidth="1" strokeDasharray="5 5" opacity="0.4">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="60s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="0" r="105" fill="none" stroke="#581C87" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.3" />

              {/* Central Sun Aura */}
              <circle cx="0" cy="0" r="70" fill="url(#method-sun-glow)" />

              {/* Rotating Solar Corona */}
              <circle cx="0" cy="0" r="44" fill="none" stroke="#F97316" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.7">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite" />
              </circle>

              {/* Sun Disc */}
              <circle cx="0" cy="0" r="28" fill="url(#method-sun-core)" filter="drop-shadow(0 6px 16px rgba(234,88,12,0.45))" />
              <circle cx="0" cy="0" r="28" fill="none" stroke="url(#method-rim)" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="10" fill="#FFFFFF" fillOpacity="0.3" stroke="#FFFFFF" strokeWidth="1.2" />
              <circle cx="0" cy="0" r="4" fill="#FFFFFF" />

              {/* Clean Self-contained Badge below Sun (High Contrast, ZERO white-on-white text) */}
              <rect x="-80" y="48" width="160" height="28" rx="14" fill="#FFFFFF" stroke="#059669" strokeWidth="1.2" filter="drop-shadow(0 2px 8px rgba(0,0,0,0.06))" />
              <text x="0" y="61" textAnchor="middle" fill="#0A0A0A" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
                SUNEXT AI CORE
              </text>
              <text x="0" y="71" textAnchor="middle" fill="#059669" fontSize="8" fontFamily="monospace">
                Độ trễ: 0.8s · 100% On-Premise
              </text>
            </g>

            {/* Left Planetary Source Nodes orbiting into the Sun (Spaced widely, zero path collisions) */}
            {[
              { id: 'erp', name: 'ERP SAP/Odoo', x: 25, y: 95, sub: 'REST / SQL API' },
              { id: 'crm', name: 'CRM Salesforce', x: 20, y: 195, sub: 'Webhook 2 Chiều' },
              { id: 'db', name: 'Kho DB & SOP', x: 25, y: 295, sub: 'Vector RAG Mesh' },
            ].map((source) => {
              const boxW = 125;
              const boxH = 38;
              const connX = source.x + boxW;
              const connY = source.y + boxH / 2;

              return (
                <g key={source.id}>
                  {/* Clean Curved Laser Ray into Central Sun */}
                  <path
                    d={`M ${connX} ${connY} C ${connX + 60} ${connY}, 240 195, 290 195`}
                    stroke="url(#purple-solar-beam)"
                    strokeWidth="1.8"
                    strokeDasharray="4 3"
                    fill="none"
                  />

                  {/* Pulsing Light Packet */}
                  <circle cx={connX + 40} cy={connY + (195 - connY) * 0.3} r="3" fill="#581C87" className="animate-pulse" />

                  {/* Wide Planet Node Box (Width 125px - ALL text fits with ample room) */}
                  <rect
                    x={source.x}
                    y={source.y}
                    width={boxW}
                    height={boxH}
                    rx="8"
                    fill="#FFFFFF"
                    stroke="#581C87"
                    strokeWidth="1.2"
                    filter="drop-shadow(0 2px 6px rgba(0,0,0,0.05))"
                  />
                  <text x={source.x + boxW / 2} y={source.y + 15} textAnchor="middle" fill="#0A0A0A" fontSize="9.5" fontWeight="bold" fontFamily="sans-serif">
                    {source.name}
                  </text>
                  <text x={source.x + boxW / 2} y={source.y + 28} textAnchor="middle" fill="#581C87" fontSize="8" fontFamily="monospace">
                    {source.sub}
                  </text>
                </g>
              );
            })}

            {/* Right Verified Output Beam Emerging from Sun */}
            <g>
              {/* Direct Output Laser */}
              <line x1="350" y1="195" x2="480" y2="195" stroke="#F97316" strokeWidth="2.5" />
              <circle cy="195" r="4" fill="#F97316">
                <animate attributeName="cx" values="350;480" dur="1.6s" repeatCount="indefinite" />
              </circle>

              {/* Output Vault Station (Width 135px, Height 68px - generous padding) */}
              <rect
                x="480"
                y="161"
                width="135"
                height="68"
                rx="10"
                fill="#FFF7ED"
                stroke="#F97316"
                strokeWidth="2"
                filter="drop-shadow(0 4px 12px rgba(249,115,22,0.15))"
              />
              <text x="547" y="185" textAnchor="middle" fill="#C2410C" fontSize="10" fontWeight="bold" fontFamily="monospace">
                ĐỐI SOÁT XUẤT RA
              </text>
              <text x="547" y="202" textAnchor="middle" fill="#0A0A0A" fontSize="9" fontFamily="sans-serif">
                Khớp số liệu 100%
              </text>
              <text x="547" y="217" textAnchor="middle" fill="#059669" fontSize="8.5" fontFamily="monospace">
                Zero sai lệch dữ liệu
              </text>
            </g>
          </g>
        )}

        {/* ==================================================================== */}
        {/* STATE 2: KPI PHẢI CÓ TRƯỚC AI (Solar Energy Transmutation Purple ➔ Orange) */}
        {/* ==================================================================== */}
        {activeStep === 2 && (
          <g className="animate-in fade-in duration-500">
            {/* Top Wavelength Transmutation Labels (TWO SEPARATE, NON-OVERLAPPING BADGES) */}
            <rect x="30" y="28" width="180" height="26" rx="6" fill="#FAF8FC" stroke="#E2DDF0" strokeWidth="1" />
            <text x="120" y="45" textAnchor="middle" fill="#581C87" fontSize="10" fontFamily="monospace" fontWeight="bold">
              01. HẠ TẦNG KỸ THUẬT (TÍM)
            </text>

            <rect x="380" y="28" width="230" height="26" rx="6" fill="#FFF7ED" stroke="#FED7AA" strokeWidth="1" />
            <text x="495" y="45" textAnchor="middle" fill="#EA580C" fontSize="10" fontFamily="monospace" fontWeight="bold">
              02. KẾT QUẢ P&L (CAM) ➔
            </text>

            {/* Left Technical Pipeline (Purple) - Connected seamlessly to Central Sun */}
            <g transform="translate(45, 195)">
              {/* PROCESS node */}
              <circle cx="30" cy="0" r="26" fill="#FAF8FC" stroke="#581C87" strokeWidth="1.5" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.03))" />
              <text x="30" y="4" textAnchor="middle" fill="#581C87" fontSize="10" fontFamily="monospace" fontWeight="bold">SOP</text>

              <line x1="56" y1="0" x2="105" y2="0" stroke="#581C87" strokeWidth="2" strokeDasharray="3 3" />

              {/* AI MULTI-AGENT node */}
              <circle cx="135" cy="0" r="26" fill="#FAF8FC" stroke="#581C87" strokeWidth="1.5" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.03))" />
              <text x="135" y="4" textAnchor="middle" fill="#581C87" fontSize="10" fontFamily="monospace" fontWeight="bold">AI</text>

              {/* Power conduit feeding directly into Sun */}
              <line x1="161" y1="0" x2="245" y2="0" stroke="#7000FF" strokeWidth="3" />
            </g>

            {/* Center Solar Reactor Core (cx: 320, cy: 195) */}
            <g transform="translate(320, 195)">
              {/* Rotating Solar Flares */}
              <circle cx="0" cy="0" r="68" fill="url(#method-sun-glow)" />
              <circle cx="0" cy="0" r="46" fill="none" stroke="#F97316" strokeWidth="1.5" strokeDasharray="4 6">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="15s" repeatCount="indefinite" />
              </circle>

              {/* 12 Radiant Solar Spikes */}
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
                const rad = (deg * Math.PI) / 180;
                return (
                  <line
                    key={deg}
                    x1={32 * Math.cos(rad)}
                    y1={32 * Math.sin(rad)}
                    x2={42 * Math.cos(rad)}
                    y2={42 * Math.sin(rad)}
                    stroke="#F97316"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                );
              })}

              {/* Sun Disc */}
              <circle cx="0" cy="0" r="28" fill="url(#method-sun-core)" filter="drop-shadow(0 6px 18px rgba(234,88,12,0.5))" />
              <circle cx="0" cy="0" r="28" fill="none" stroke="url(#method-rim)" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="10" fill="#FFFFFF" fillOpacity="0.4" stroke="#FFFFFF" strokeWidth="1.2" />
              <circle cx="0" cy="0" r="4" fill="#FFFFFF" />

              {/* Badge below sun */}
              <rect x="-70" y="48" width="140" height="24" rx="12" fill="#FFF7ED" stroke="#F97316" strokeWidth="1" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.04))" />
              <text x="0" y="63.5" textAnchor="middle" fill="#EA580C" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
                LÕI CHUYỂN HÓA P&L
              </text>
            </g>

            {/* Right Radiant Orange P&L Outflow (Pure Solar Energy) */}
            <g transform="translate(348, 195)">
              {/* Massive Solar Beam */}
              <line x1="0" y1="0" x2="70" y2="0" stroke="#F97316" strokeWidth="4" />
              <circle cy="0" r="4.5" fill="#F97316">
                <animate attributeName="cx" values="0;70" dur="1.2s" repeatCount="indefinite" />
              </circle>

              {/* Result Station: -75% & < 4 tháng (Generous 195px width, 96px height) */}
              <g transform="translate(70, -48)">
                <rect width="195" height="96" rx="12" fill="#FFF7ED" stroke="#F97316" strokeWidth="2" filter="drop-shadow(0 8px 24px rgba(249,115,22,0.2))" />
                <text x="97.5" y="34" textAnchor="middle" fill="#F97316" fontSize="30" fontWeight="300" fontFamily="sans-serif">
                  −75%
                </text>
                <text x="97.5" y="55" textAnchor="middle" fill="#0A0A0A" fontSize="9.5" fontWeight="bold" fontFamily="sans-serif">
                  Thời Gian Chu Kỳ Nghiệp Vụ
                </text>
                <text x="97.5" y="76" textAnchor="middle" fill="#059669" fontSize="10.5" fontWeight="bold" fontFamily="monospace">
                  Hoàn Vốn &lt; 4 Tháng
                </text>
              </g>
            </g>
          </g>
        )}
      </svg>
    </div>
  );
}
