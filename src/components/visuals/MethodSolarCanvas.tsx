'use client';

import React from 'react';

interface MethodSolarCanvasProps {
  activeStep: number;
}

export function MethodSolarCanvas({ activeStep }: MethodSolarCanvasProps) {
  const cx = 380;
  const cy = 180;

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
          {/* Subtle Canvas Dot Matrix (Bleeding with no border box) */}
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

          <linearGradient id="purple-to-green-beam" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#581C87" />
            <stop offset="60%" stopColor="#0D9488" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>

        {/* Seamless Open Dot Matrix */}
        <rect width="760" height="360" fill="url(#cf-canvas-dots)" opacity="0.4" />

        {/* ==================================================================== */}
        {/* STEP 0: PEOPLE ───────────── PROCESS ───────────── ◉ RESULT (−67%) */}
        {/* ==================================================================== */}
        {activeStep === 0 && (
          <g className="animate-in fade-in duration-500">
            {/* Extended Continuous Flow Line (520px span) */}
            <line x1="100" y1={cy} x2="620" y2={cy} stroke="#E5E3DC" strokeWidth="2" strokeDasharray="5 5" />
            <line x1="100" y1={cy} x2="620" y2={cy} stroke="url(#purple-to-orange-beam-lg)" strokeWidth="2.5">
              <animate attributeName="stroke-dashoffset" from="40" to="0" dur="1.8s" repeatCount="indefinite" />
            </line>

            {/* Traveling Laser Pulse Bead */}
            <circle cy={cy} r="4" fill="#F97316" filter="drop-shadow(0 0 6px #F97316)">
              <animate attributeName="cx" from="100" to="620" dur="2.4s" repeatCount="indefinite" />
            </circle>

            {/* Node 1: PEOPLE */}
            <g transform={`translate(130, ${cy})`}>
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

            {/* Node 3: ◉ RESULT (Monumental Sun Outcome) */}
            <g transform={`translate(610, ${cy})`}>
              {/* Grand Atmosphere */}
              <circle cx="0" cy="0" r="72" fill="url(#method-cf-aura-lg)" />
              {/* Sun Disc Core */}
              <circle cx="0" cy="0" r="42" fill="url(#method-cf-core-lg)" filter="drop-shadow(0 6px 20px rgba(249,115,22,0.36))" />
              <circle cx="0" cy="0" r="42" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="14" fill="#FFFFFF" fillOpacity="0.25" />
              <circle cx="0" cy="0" r="6" fill="#FFFFFF" />
              {/* Outcome Badges */}
              <text x="0" y="-50" textAnchor="middle" fill="#EA580C" fontSize="13" fontFamily="monospace" fontWeight="bold" letterSpacing="0.08em">◉ RESULT</text>
              <text x="0" y="60" textAnchor="middle" fill="#EA580C" fontSize="18" fontFamily="sans-serif" fontWeight="700">−67% Thời Gian</text>
            </g>
          </g>
        )}

        {/* ==================================================================== */}
        {/* STEP 1: ERP / CRM / DB ───────────── ◉ 100% PRIVATE VPC */}
        {/* ==================================================================== */}
        {activeStep === 1 && (
          <g className="animate-in fade-in duration-500">
            {/* Converging Streamlines */}
            <path d={`M 170 80 L 320 80 L 320 ${cy} L 580 ${cy}`} stroke="#581C87" strokeWidth="1.8" strokeDasharray="5 5" fill="none" opacity="0.6" />
            <path d={`M 170 ${cy} L 580 ${cy}`} stroke="#581C87" strokeWidth="2" fill="none" opacity="0.8" />
            <path d={`M 170 280 L 320 280 L 320 ${cy} L 580 ${cy}`} stroke="#581C87" strokeWidth="1.8" strokeDasharray="5 5" fill="none" opacity="0.6" />

            {/* Glowing Laser Beam */}
            <line x1="320" y1={cy} x2="580" y2={cy} stroke="url(#purple-to-green-beam)" strokeWidth="3" />

            {/* Source 1: ERP */}
            <g transform="translate(80, 62)">
              <rect width="90" height="36" rx="8" fill="#FFFFFF" stroke="#D1D1CE" strokeWidth="1.5" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.03))" />
              <text x="45" y="23" textAnchor="middle" fill="#0A0A0A" fontSize="12" fontFamily="monospace" fontWeight="700">ERP</text>
            </g>

            {/* Source 2: CRM */}
            <g transform={`translate(80, ${cy - 18})`}>
              <rect width="90" height="36" rx="8" fill="#FFFFFF" stroke="#D1D1CE" strokeWidth="1.5" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.03))" />
              <text x="45" y="23" textAnchor="middle" fill="#0A0A0A" fontSize="12" fontFamily="monospace" fontWeight="700">CRM</text>
            </g>

            {/* Source 3: DATABASE */}
            <g transform="translate(80, 262)">
              <rect width="90" height="36" rx="8" fill="#FFFFFF" stroke="#D1D1CE" strokeWidth="1.5" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.03))" />
              <text x="45" y="23" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="monospace" fontWeight="700">DATABASE</text>
            </g>

            {/* Destination Security Core: 100% PRIVATE VPC */}
            <g transform={`translate(580, ${cy})`}>
              {/* Outer Security Halo */}
              <circle cx="0" cy="0" r="76" fill="rgba(5, 150, 105, 0.12)" />
              <circle cx="0" cy="0" r="44" fill="#059669" filter="drop-shadow(0 6px 20px rgba(5,150,105,0.3))" />
              <circle cx="0" cy="0" r="44" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="14" fill="#FFFFFF" fillOpacity="0.25" />
              <circle cx="0" cy="0" r="6" fill="#FFFFFF" />

              <text x="0" y="-52" textAnchor="middle" fill="#059669" fontSize="13" fontFamily="monospace" fontWeight="bold" letterSpacing="0.06em">100% PRIVATE VPC</text>
              <text x="0" y="60" textAnchor="middle" fill="#059669" fontSize="16" fontFamily="sans-serif" fontWeight="700">Zero-Leak Guarantee</text>
            </g>
          </g>
        )}

        {/* ==================================================================== */}
        {/* STEP 2: DATA ──────── AI ──────── KPI ──────── ◉ RESULT */}
        {/* ==================================================================== */}
        {activeStep === 2 && (
          <g className="animate-in fade-in duration-500">
            {/* Long Connecting Beam (560px span) */}
            <line x1="80" y1={cy} x2="640" y2={cy} stroke="#E5E3DC" strokeWidth="2" strokeDasharray="5 5" />
            <line x1="80" y1={cy} x2="640" y2={cy} stroke="url(#purple-to-orange-beam-lg)" strokeWidth="2.5" />

            {/* Node 1: DATA */}
            <g transform={`translate(110, ${cy})`}>
              <circle cx="0" cy="0" r="30" fill="#FFFFFF" stroke="#581C87" strokeWidth="1.8" filter="drop-shadow(0 3px 10px rgba(88,28,135,0.05))" />
              <text x="0" y="4" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="monospace" fontWeight="700">DATA</text>
              <text x="0" y="46" textAnchor="middle" fill="#747474" fontSize="11" fontFamily="sans-serif">Dữ liệu</text>
            </g>

            {/* Node 2: AI */}
            <g transform={`translate(260, ${cy})`}>
              <circle cx="0" cy="0" r="30" fill="#FFFFFF" stroke="#581C87" strokeWidth="1.8" filter="drop-shadow(0 3px 10px rgba(88,28,135,0.05))" />
              <text x="0" y="4" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="monospace" fontWeight="700">AI</text>
              <text x="0" y="46" textAnchor="middle" fill="#747474" fontSize="11" fontFamily="sans-serif">Mô hình</text>
            </g>

            {/* Node 3: KPI */}
            <g transform={`translate(410, ${cy})`}>
              <circle cx="0" cy="0" r="30" fill="#FFFFFF" stroke="#581C87" strokeWidth="1.8" filter="drop-shadow(0 3px 10px rgba(88,28,135,0.05))" />
              <text x="0" y="4" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="monospace" fontWeight="700">KPI</text>
              <text x="0" y="46" textAnchor="middle" fill="#747474" fontSize="11" fontFamily="sans-serif">Định lượng</text>
            </g>

            {/* Node 4: ● RESULT (Orange Core Destination) */}
            <g transform={`translate(610, ${cy})`}>
              <circle cx="0" cy="0" r="72" fill="url(#method-cf-aura-lg)" />
              <circle cx="0" cy="0" r="42" fill="url(#method-cf-core-lg)" filter="drop-shadow(0 6px 20px rgba(249,115,22,0.4))" />
              <circle cx="0" cy="0" r="42" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="14" fill="#FFFFFF" fillOpacity="0.25" />
              <circle cx="0" cy="0" r="6" fill="#FFFFFF" />

              <text x="0" y="-50" textAnchor="middle" fill="#EA580C" fontSize="13" fontFamily="monospace" fontWeight="bold" letterSpacing="0.08em">◉ RESULT</text>
              <text x="0" y="60" textAnchor="middle" fill="#EA580C" fontSize="18" fontFamily="sans-serif" fontWeight="700">&lt; 4 Tháng</text>
            </g>
          </g>
        )}

      </svg>
    </div>
  );
}
