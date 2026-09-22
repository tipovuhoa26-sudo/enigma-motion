'use client';

import React from 'react';

interface MethodSolarCanvasProps {
  activeStep: number;
}

export function MethodSolarCanvas({ activeStep }: MethodSolarCanvasProps) {
  const cy = 180;
  // Fixed permanent Result anchor coordinate (81.5% section width in 760x360 SVG)
  const resultX = 620;

  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[440px] flex items-center justify-center select-none relative overflow-visible">
      {/* Soft Ambient Field Connecting with Sun System */}
      <div 
        className="absolute w-[560px] h-[320px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.08) 0%, rgba(105,64,190,0.03) 45%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <svg
        viewBox="0 0 760 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block overflow-visible"
      >
        <defs>
          {/* Subtle Canvas Dot Matrix */}
          <pattern id="cf-canvas-dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#E2E0D8" />
          </pattern>

          {/* Central Sun Disc Core */}
          <radialGradient id="method-cf-core-lg" cx="42%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#FFF7ED" />
            <stop offset="22%" stopColor="#FFBF75" />
            <stop offset="55%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </radialGradient>

          {/* Faint Aura */}
          <radialGradient id="method-cf-aura-lg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.35" />
            <stop offset="55%" stopColor="#FB923C" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#6B21A8" stopOpacity="0" />
          </radialGradient>

          {/* Purple to Orange Laser Beam */}
          <linearGradient id="purple-to-orange-beam-lg" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#581C87" />
            <stop offset="55%" stopColor="#7000FF" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>

          {/* Purple to Green Beam */}
          <linearGradient id="purple-to-green-beam" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#581C87" />
            <stop offset="60%" stopColor="#0D9488" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>

        {/* Seamless Open Dot Matrix */}
        <rect width="760" height="360" fill="url(#cf-canvas-dots)" opacity="0.4" />

        {/* Base Permanent Horizontal Alignment Axis (Connecting All Inputs to Fixed Result) */}
        <line x1="80" y1={cy} x2={resultX} y2={cy} stroke="#E5E3DC" strokeWidth="1.8" strokeDasharray="5 5" />

        {/* ==================================================================== */}
        {/* STEP 0: PEOPLE ───────────── PROCESS ───────────── ◉ RESULT          */}
        {/* ==================================================================== */}
        {activeStep === 0 && (
          <g className="animate-in fade-in duration-300">
            {/* Active Colored Laser Beam */}
            <line x1="80" y1={cy} x2={resultX} y2={cy} stroke="url(#purple-to-orange-beam-lg)" strokeWidth="2.5" />

            {/* Traveling Pulse Bead */}
            <circle cy={cy} r="4" fill="#F97316" filter="drop-shadow(0 0 6px #F97316)">
              <animate attributeName="cx" from="80" to={resultX} dur="2.4s" repeatCount="indefinite" />
            </circle>

            {/* Node 1: PEOPLE */}
            <g transform={`translate(140, ${cy})`}>
              <circle cx="0" cy="0" r="34" fill="#FFFFFF" stroke="#581C87" strokeWidth="2" filter="drop-shadow(0 4px 12px rgba(88,28,135,0.06))" />
              <text x="0" y="4" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="monospace" fontWeight="700" letterSpacing="0.05em">PEOPLE</text>
              <text x="0" y="52" textAnchor="middle" fill="#747474" fontSize="12" fontFamily="sans-serif" fontWeight="500">Con người</text>
            </g>

            {/* Node 2: PROCESS */}
            <g transform={`translate(360, ${cy})`}>
              <circle cx="0" cy="0" r="34" fill="#FFFFFF" stroke="#581C87" strokeWidth="2" filter="drop-shadow(0 4px 12px rgba(88,28,135,0.06))" />
              <text x="0" y="4" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="monospace" fontWeight="700" letterSpacing="0.05em">PROCESS</text>
              <text x="0" y="52" textAnchor="middle" fill="#747474" fontSize="12" fontFamily="sans-serif" fontWeight="500">Quy trình SOP</text>
            </g>
          </g>
        )}

        {/* ==================================================================== */}
        {/* STEP 1: ERP / CRM / DB ─────── DATA BUS ───────── ◉ RESULT           */}
        {/* ==================================================================== */}
        {activeStep === 1 && (
          <g className="animate-in fade-in duration-300">
            {/* Converging Streamlines from 3 Sources into central Data Bus */}
            <path d={`M 150 70 L 290 70 L 290 ${cy} L ${resultX} ${cy}`} stroke="#581C87" strokeWidth="1.8" strokeDasharray="5 5" fill="none" opacity="0.5" />
            <path d={`M 150 ${cy} L ${resultX} ${cy}`} stroke="#581C87" strokeWidth="2" fill="none" opacity="0.8" />
            <path d={`M 150 290 L 290 290 L 290 ${cy} L ${resultX} ${cy}`} stroke="#581C87" strokeWidth="1.8" strokeDasharray="5 5" fill="none" opacity="0.5" />

            {/* Active Data Laser Beam to Fixed Result */}
            <line x1="290" y1={cy} x2={resultX} y2={cy} stroke="url(#purple-to-green-beam)" strokeWidth="3" />

            {/* Source 1: ERP */}
            <g transform="translate(60, 52)">
              <rect width="90" height="36" rx="8" fill="#FFFFFF" stroke="#D1D1CE" strokeWidth="1.5" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.03))" />
              <text x="45" y="23" textAnchor="middle" fill="#0A0A0A" fontSize="12" fontFamily="monospace" fontWeight="700">ERP</text>
            </g>

            {/* Source 2: CRM */}
            <g transform={`translate(60, ${cy - 18})`}>
              <rect width="90" height="36" rx="8" fill="#FFFFFF" stroke="#D1D1CE" strokeWidth="1.5" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.03))" />
              <text x="45" y="23" textAnchor="middle" fill="#0A0A0A" fontSize="12" fontFamily="monospace" fontWeight="700">CRM</text>
            </g>

            {/* Source 3: DATABASE */}
            <g transform="translate(60, 272)">
              <rect width="90" height="36" rx="8" fill="#FFFFFF" stroke="#D1D1CE" strokeWidth="1.5" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.03))" />
              <text x="45" y="23" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="monospace" fontWeight="700">DATABASE</text>
            </g>

            {/* Central Node: DATA BUS */}
            <g transform={`translate(310, ${cy})`}>
              <circle cx="0" cy="0" r="32" fill="#FFFFFF" stroke="#059669" strokeWidth="2" filter="drop-shadow(0 4px 12px rgba(5,150,105,0.08))" />
              <text x="0" y="4" textAnchor="middle" fill="#059669" fontSize="11" fontFamily="monospace" fontWeight="700">DATA BUS</text>
              <text x="0" y="50" textAnchor="middle" fill="#747474" fontSize="11" fontFamily="sans-serif">Kết nối an toàn</text>
            </g>
          </g>
        )}

        {/* ==================================================================== */}
        {/* STEP 2: DATA ──────── AI ──────── KPI ─────────── ◉ RESULT           */}
        {/* ==================================================================== */}
        {activeStep === 2 && (
          <g className="animate-in fade-in duration-300">
            {/* Active Colored Laser Beam */}
            <line x1="80" y1={cy} x2={resultX} y2={cy} stroke="url(#purple-to-orange-beam-lg)" strokeWidth="2.5" />

            {/* Node 1: DATA */}
            <g transform={`translate(120, ${cy})`}>
              <circle cx="0" cy="0" r="30" fill="#FFFFFF" stroke="#581C87" strokeWidth="1.8" filter="drop-shadow(0 3px 10px rgba(88,28,135,0.05))" />
              <text x="0" y="4" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="monospace" fontWeight="700">DATA</text>
              <text x="0" y="48" textAnchor="middle" fill="#747474" fontSize="11" fontFamily="sans-serif">Dữ liệu</text>
            </g>

            {/* Node 2: AI */}
            <g transform={`translate(280, ${cy})`}>
              <circle cx="0" cy="0" r="30" fill="#FFFFFF" stroke="#581C87" strokeWidth="1.8" filter="drop-shadow(0 3px 10px rgba(88,28,135,0.05))" />
              <text x="0" y="4" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="monospace" fontWeight="700">AI</text>
              <text x="0" y="48" textAnchor="middle" fill="#747474" fontSize="11" fontFamily="sans-serif">Mô hình</text>
            </g>

            {/* Node 3: KPI */}
            <g transform={`translate(440, ${cy})`}>
              <circle cx="0" cy="0" r="30" fill="#FFFFFF" stroke="#581C87" strokeWidth="1.8" filter="drop-shadow(0 3px 10px rgba(88,28,135,0.05))" />
              <text x="0" y="4" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="monospace" fontWeight="700">KPI</text>
              <text x="0" y="48" textAnchor="middle" fill="#747474" fontSize="11" fontFamily="sans-serif">Định lượng</text>
            </g>
          </g>
        )}

        {/* ==================================================================== */}
        {/* FIXED RESULT ANCHOR NODE: NEVER MOVES, PERMANENT SYSTEM DESTINATION   */}
        {/* ==================================================================== */}
        <g transform={`translate(${resultX}, ${cy})`} className="select-none pointer-events-none">
          {/* Permanent Grand Atmosphere */}
          <circle cx="0" cy="0" r="72" fill="url(#method-cf-aura-lg)" />
          {/* Sun Disc Core (100% stable center) */}
          <circle cx="0" cy="0" r="42" fill="url(#method-cf-core-lg)" filter="drop-shadow(0 6px 20px rgba(249,115,22,0.38))" />
          <circle cx="0" cy="0" r="42" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="14" fill="#FFFFFF" fillOpacity="0.25" />
          <circle cx="0" cy="0" r="6" fill="#FFFFFF" />

          {/* Outcome Header Badge */}
          <text x="0" y="-52" textAnchor="middle" fill="#EA580C" fontSize="13" fontFamily="monospace" fontWeight="bold" letterSpacing="0.08em">
            ◉ RESULT
          </text>

          {/* Result Metric Text Label (Subtly Morphs with Step) */}
          {activeStep === 0 && (
            <text x="0" y="60" textAnchor="middle" fill="#EA580C" fontSize="18" fontFamily="sans-serif" fontWeight="700" className="animate-in fade-in duration-200">
              −67% Thời Gian
            </text>
          )}
          {activeStep === 1 && (
            <text x="0" y="60" textAnchor="middle" fill="#059669" fontSize="16" fontFamily="sans-serif" fontWeight="700" className="animate-in fade-in duration-200">
              100% Private VPC
            </text>
          )}
          {activeStep === 2 && (
            <text x="0" y="60" textAnchor="middle" fill="#EA580C" fontSize="18" fontFamily="sans-serif" fontWeight="700" className="animate-in fade-in duration-200">
              &lt; 4 Tháng ROI
            </text>
          )}
        </g>

      </svg>
    </div>
  );
}
