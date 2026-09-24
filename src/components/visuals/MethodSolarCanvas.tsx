'use client';

import React from 'react';

interface MethodSolarCanvasProps {
  activeStep: number;
}

export function MethodSolarCanvas({ activeStep }: MethodSolarCanvasProps) {
  const cy = 200;
  const resultX = 620;

  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[440px] flex items-center justify-center select-none relative overflow-visible">
      {/* Soft Ambient Diffusion Field */}
      <div 
        className="absolute w-[580px] h-[340px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.08) 0%, rgba(105,64,190,0.03) 45%, transparent 70%)',
          filter: 'blur(45px)',
        }}
      />

      <svg
        viewBox="0 0 760 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block overflow-visible"
      >
        <defs>
          {/* Canvas Dot Matrix */}
          <pattern id="method-canvas-dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#E2E0D8" />
          </pattern>

          {/* Central Sun Disc Core */}
          <radialGradient id="method-sun-core" cx="42%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#FFF7ED" />
            <stop offset="22%" stopColor="#FFBF75" />
            <stop offset="55%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </radialGradient>

          {/* Laser Gradients */}
          <linearGradient id="purple-to-orange-beam" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#581C87" />
            <stop offset="55%" stopColor="#7000FF" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>

          <linearGradient id="teal-to-orange-beam" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0D9488" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>

          <linearGradient id="vertical-kpi-beam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>
        </defs>

        {/* Seamless Open Dot Matrix */}
        <rect width="760" height="400" fill="url(#method-canvas-dots)" opacity="0.4" />

        {/* ==================================================================== */}
        {/* COMPOSITION 01: HORIZONTAL PROCESS (PEOPLE ─── PROCESS ─── RESULT)   */}
        {/* ==================================================================== */}
        {activeStep === 0 && (
          <g className="animate-in fade-in duration-400">
            {/* Base Horizontal Alignment Axis */}
            <line x1="80" y1={cy} x2={resultX} y2={cy} stroke="#E5E3DC" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="80" y1={cy} x2={resultX} y2={cy} stroke="url(#purple-to-orange-beam)" strokeWidth="2.5" />

            {/* Traveling Pulse Stream */}
            <circle cy={cy} r="4.5" fill="#F97316" filter="drop-shadow(0 0 6px #F97316)">
              <animate attributeName="cx" from="80" to={resultX} dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle cy={cy} r="4" fill="#7000FF" filter="drop-shadow(0 0 5px #7000FF)">
              <animate attributeName="cx" from="80" to={resultX} dur="2.4s" begin="1.2s" repeatCount="indefinite" />
            </circle>

            {/* Node 1: PEOPLE */}
            <g transform={`translate(140, ${cy})`}>
              <circle cx="0" cy="0" r="44" fill="none" stroke="#581C87" strokeWidth="1" strokeDasharray="3 5" opacity="0.4">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="25s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="0" r="34" fill="#FFFFFF" stroke="#581C87" strokeWidth="2" filter="drop-shadow(0 4px 12px rgba(88,28,135,0.06))" />
              <text x="0" y="4" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="monospace" fontWeight="700" letterSpacing="0.05em">PEOPLE</text>
              <text x="0" y="54" textAnchor="middle" fill="#747474" fontSize="11" fontFamily="sans-serif" fontWeight="500">Con người</text>
            </g>

            {/* Node 2: PROCESS */}
            <g transform={`translate(360, ${cy})`}>
              <circle cx="0" cy="0" r="44" fill="none" stroke="#7000FF" strokeWidth="1" strokeDasharray="4 6" opacity="0.45">
                <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="20s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="0" r="34" fill="#FFFFFF" stroke="#581C87" strokeWidth="2" filter="drop-shadow(0 4px 12px rgba(88,28,135,0.06))" />
              <text x="0" y="4" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="monospace" fontWeight="700" letterSpacing="0.05em">PROCESS</text>
              <text x="0" y="54" textAnchor="middle" fill="#747474" fontSize="11" fontFamily="sans-serif" fontWeight="500">Quy trình SOP</text>
            </g>
          </g>
        )}

        {/* ==================================================================== */}
        {/* COMPOSITION 02: DATA CONVERGENCE FAN (5 INPUTS ───> DATA VAULT ──> ◎)*/}
        {/* Fan geometry: ERP, CRM, Docs, DB, API -> Central Vault in VPC        */}
        {/* ==================================================================== */}
        {activeStep === 1 && (
          <g className="animate-in fade-in duration-400">
            {/* 5 Converging Streamlines */}
            {[
              { id: 'erp', name: 'ERP', y: 70 },
              { id: 'crm', name: 'CRM', y: 135 },
              { id: 'docs', name: 'DOCS', y: 200 },
              { id: 'db', name: 'DATABASE', y: 265 },
              { id: 'api', name: 'API NỘI BỘ', y: 330 },
            ].map((src, i) => {
              const startX = 135;
              const pathD = `M ${startX} ${src.y} C 220 ${src.y}, 250 200, 310 200`;
              return (
                <g key={src.id}>
                  {/* Streamline curve */}
                  <path
                    d={pathD}
                    stroke="#059669"
                    strokeWidth={src.y === 200 ? '2.2' : '1.8'}
                    strokeDasharray={src.y === 200 ? 'none' : '4 4'}
                    fill="none"
                    opacity={src.y === 200 ? 0.9 : 0.65}
                  />

                  {/* Traveling Pulse into Data Vault */}
                  <circle r="3.5" fill="#10B981" filter="drop-shadow(0 0 5px #10B981)">
                    <animateMotion
                      path={pathD}
                      dur={`${2.2 + i * 0.25}s`}
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Input Badge */}
                  <g transform={`translate(35, ${src.y - 15})`}>
                    <rect
                      width="95"
                      height="30"
                      rx="6"
                      fill="#FFFFFF"
                      stroke="#CBD5E1"
                      strokeWidth="1.2"
                      filter="drop-shadow(0 2px 5px rgba(0,0,0,0.03))"
                    />
                    <circle cx="12" cy="15" r="3" fill="#059669" />
                    <text
                      x="53"
                      y="19"
                      textAnchor="middle"
                      fill="#0F172A"
                      fontSize="9.5"
                      fontFamily="monospace"
                      fontWeight="700"
                    >
                      {src.name}
                    </text>
                  </g>
                </g>
              );
            })}

            {/* Connecting Beam from Vault to Result */}
            <line x1="400" y1={cy} x2={resultX} y2={cy} stroke="url(#teal-to-orange-beam)" strokeWidth="3" />
            <circle cy={cy} r="4.5" fill="#059669" filter="drop-shadow(0 0 8px #059669)">
              <animate attributeName="cx" from="400" to={resultX} dur="2.2s" repeatCount="indefinite" />
            </circle>

            {/* Central Vault Node at (355, 200) */}
            <g transform={`translate(355, ${cy})`}>
              <circle cx="0" cy="0" r="54" fill="none" stroke="#059669" strokeWidth="1" strokeDasharray="4 6" opacity="0.45">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="0" r="42" fill="#FFFFFF" stroke="#059669" strokeWidth="2.4" filter="drop-shadow(0 4px 16px rgba(5,150,105,0.15))" />
              <text x="0" y="3" textAnchor="middle" fill="#065F46" fontSize="10.5" fontFamily="monospace" fontWeight="800" letterSpacing="0.08em">
                DATA VAULT
              </text>
              <text x="0" y="16" textAnchor="middle" fill="#059669" fontSize="8.5" fontFamily="monospace" fontWeight="600">
                PRIVATE VPC
              </text>
              <text x="0" y="68" textAnchor="middle" fill="#747474" fontSize="10.5" fontFamily="sans-serif" fontWeight="500">
                Ranh giới cô lập
              </text>
            </g>
          </g>
        )}

        {/* ==================================================================== */}
        {/* COMPOSITION 03: VERTICAL MEASUREMENT FIELD (BASELINE ── KPI ── IMPACT)*/}
        {/* Telemetry vertical cross-wire connecting directly to Result          */}
        {/* ==================================================================== */}
        {activeStep === 2 && (
          <g className="animate-in fade-in duration-400">
            {/* Calibration Telemetry Grid */}
            <g opacity="0.25">
              <line x1="280" y1="80" x2="480" y2="80" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="2 4" />
              <line x1="280" y1="320" x2="480" y2="320" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="2 4" />
            </g>

            {/* Vertical Measurement Spine */}
            <line x1="380" y1="60" x2="380" y2="340" stroke="url(#vertical-kpi-beam)" strokeWidth="2.6" />

            {/* Ingress AI Beam (Horizontal from Left to KPI Center) */}
            <line x1="120" y1={cy} x2="380" y2={cy} stroke="#8B5CF6" strokeWidth="2" strokeDasharray="4 4" />
            <circle cy={cy} r="4" fill="#8B5CF6" filter="drop-shadow(0 0 6px #8B5CF6)">
              <animate attributeName="cx" from="120" to="380" dur="2.0s" repeatCount="indefinite" />
            </circle>

            {/* AI Source Node at (120, 200) */}
            <g transform={`translate(120, ${cy})`}>
              <circle cx="0" cy="0" r="28" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="1.8" filter="drop-shadow(0 2px 8px rgba(139,92,246,0.12))" />
              <text x="0" y="4" textAnchor="middle" fill="#6B21A8" fontSize="10.5" fontFamily="monospace" fontWeight="700">
                AI MODEL
              </text>
              <text x="0" y="44" textAnchor="middle" fill="#747474" fontSize="10" fontFamily="sans-serif">
                Tác tử nghiệp vụ
              </text>
            </g>

            {/* Top Node: BASELINE */}
            <g transform="translate(380, 80)">
              <rect x="-65" y="-16" width="130" height="32" rx="6" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.6" filter="drop-shadow(0 2px 6px rgba(59,130,246,0.12))" />
              <text x="0" y="4" textAnchor="middle" fill="#1D4ED8" fontSize="10.5" fontFamily="monospace" fontWeight="700">
                BASELINE (2 Ngày)
              </text>
              <text x="75" y="4" fill="#64748B" fontSize="9.5" fontFamily="sans-serif">
                Trước AI
              </text>
            </g>

            {/* Center Intersection: KPI ENGINE */}
            <g transform={`translate(380, ${cy})`}>
              <circle cx="0" cy="0" r="44" fill="#FFFFFF" stroke="#7000FF" strokeWidth="2.4" filter="drop-shadow(0 4px 14px rgba(112,0,255,0.15))" />
              <circle cx="0" cy="0" r="52" fill="none" stroke="#7000FF" strokeWidth="1" strokeDasharray="3 4" opacity="0.4">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="24s" repeatCount="indefinite" />
              </circle>
              <text x="0" y="4" textAnchor="middle" fill="#581C87" fontSize="11" fontFamily="monospace" fontWeight="800" letterSpacing="0.06em">
                KPI ENGINE
              </text>
              <text x="0" y="17" textAnchor="middle" fill="#7000FF" fontSize="8.5" fontFamily="monospace" fontWeight="600">
                BENCHMARK
              </text>
            </g>

            {/* Sweeping Laser Curve from IMPACT (right edge) to RESULT */}
            <path
              d={`M 445 320 C 510 320, 540 ${cy}, ${resultX - 40} ${cy}`}
              stroke="url(#purple-to-orange-beam)"
              strokeWidth="2.8"
              fill="none"
            />
            <circle r="4.5" fill="#EA580C" filter="drop-shadow(0 0 6px #EA580C)">
              <animateMotion
                path={`M 445 320 C 510 320, 540 ${cy}, ${resultX - 40} ${cy}`}
                dur="2.2s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Bottom Node: IMPACT */}
            <g transform="translate(380, 320)">
              <rect x="-65" y="-16" width="130" height="32" rx="6" fill="#FFFFFF" stroke="#EA580C" strokeWidth="1.6" filter="drop-shadow(0 2px 6px rgba(234,88,12,0.14))" />
              <text x="0" y="4" textAnchor="middle" fill="#C2410C" fontSize="10.5" fontFamily="monospace" fontWeight="800">
                IMPACT (3 Giờ)
              </text>
              <text x="75" y="4" fill="#EA580C" fontSize="9.5" fontFamily="sans-serif" fontWeight="600">
                Sau Vận Hành
              </text>
            </g>
          </g>
        )}

        {/* ==================================================================== */}
        {/* PERMANENT RESULT ANCHOR CORE AT (resultX, cy)                         */}
        {/* Rendered at the end of SVG so it cleanly layers above all laser lines */}
        {/* ==================================================================== */}
        <g transform={`translate(${resultX}, ${cy})`}>
          {/* Subtle Outer Halo */}
          <circle cx="0" cy="0" r="54" fill="none" stroke="#F97316" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.35">
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="40s" repeatCount="indefinite" />
          </circle>

          {/* Core Sun Disc */}
          <circle cx="0" cy="0" r="42" fill="url(#method-sun-core)" filter="drop-shadow(0 6px 20px rgba(234,88,12,0.38))" />
          <circle cx="0" cy="0" r="42" fill="none" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.85" />
          <circle cx="0" cy="0" r="12" fill="#FFFFFF" fillOpacity="0.25" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="0" cy="0" r="5" fill="#FFFFFF" />

          {/* Typography */}
          <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontFamily="monospace" fontWeight="800" letterSpacing="0.1em">
            KẾT QUẢ
          </text>
          <text x="0" y="58" textAnchor="middle" fill="#EA580C" fontSize="10" fontFamily="monospace" fontWeight="700" letterSpacing="0.15em">
            P&amp;L IMPACT
          </text>
        </g>
      </svg>
    </div>
  );
}
