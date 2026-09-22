'use client';

import React from 'react';

interface MethodSolarCanvasProps {
  activeStep: number;
}

export function MethodSolarCanvas({ activeStep }: MethodSolarCanvasProps) {
  const cx = 380;
  const cy = 200;

  return (
    <div className="w-full h-full min-h-[360px] sm:min-h-[420px] flex items-center justify-center select-none relative overflow-hidden">
      {/* Background Soft Atmospheric Glow */}
      <div className="absolute inset-0 bg-radial from-orange-500/[0.04] via-purple-500/[0.02] to-transparent pointer-events-none" />

      <svg
        viewBox="0 0 680 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block max-w-[660px] max-h-[390px]"
      >
        <defs>
          {/* Subtle Grid Dots */}
          <pattern id="cf-method-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#EAE8E2" />
          </pattern>

          {/* Central Sun Disc Core */}
          <radialGradient id="method-cf-core" cx="42%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#FFF7ED" />
            <stop offset="22%" stopColor="#FFBF75" />
            <stop offset="55%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </radialGradient>

          {/* Faint Aura */}
          <radialGradient id="method-cf-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#FB923C" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#6B21A8" stopOpacity="0" />
          </radialGradient>

          {/* Purple to Orange Laser Line */}
          <linearGradient id="purple-to-orange-beam" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#581C87" />
            <stop offset="60%" stopColor="#7000FF" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>

        {/* Canvas Background Grid */}
        <rect width="680" height="400" rx="16" fill="url(#cf-method-dots)" opacity="0.45" />

        {/* ==================================================================== */}
        {/* STEP 0: PEOPLE ─── PROCESS ─── ◉ SUN (Streamline Workflow) */}
        {/* ==================================================================== */}
        {activeStep === 0 && (
          <g className="animate-in fade-in duration-500">
            {/* Flow Line */}
            <line x1="80" y1="200" x2={cx} y2={200} stroke="#E5E3DC" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="80" y1="200" x2={cx} y2={200} stroke="url(#purple-to-orange-beam)" strokeWidth="2">
              <animate attributeName="stroke-dashoffset" from="30" to="0" dur="1.4s" repeatCount="indefinite" />
            </line>

            {/* Node 1: PEOPLE */}
            <g transform="translate(100, 200)">
              <circle cx="0" cy="0" r="26" fill="#FFFFFF" stroke="#581C87" strokeWidth="1.5" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.04))" />
              <text x="0" y="4" textAnchor="middle" fill="#0A0A0A" fontSize="10" fontFamily="monospace" fontWeight="600">PEOPLE</text>
              <text x="0" y="44" textAnchor="middle" fill="#747474" fontSize="10" fontFamily="sans-serif">Con người</text>
            </g>

            {/* Node 2: PROCESS */}
            <g transform="translate(230, 200)">
              <circle cx="0" cy="0" r="26" fill="#FFFFFF" stroke="#581C87" strokeWidth="1.5" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.04))" />
              <text x="0" y="4" textAnchor="middle" fill="#0A0A0A" fontSize="10" fontFamily="monospace" fontWeight="600">PROCESS</text>
              <text x="0" y="44" textAnchor="middle" fill="#747474" fontSize="10" fontFamily="sans-serif">Quy trình SOP</text>
            </g>

            {/* Outcome Tag Right */}
            <g transform={`translate(${cx + 80}, 175)`}>
              <rect width="160" height="50" rx="10" fill="#FFFFFF" stroke="#F97316" strokeWidth="1.2" filter="drop-shadow(0 4px 12px rgba(249,115,22,0.08))" />
              <text x="80" y="24" textAnchor="middle" fill="#EA580C" fontSize="16" fontFamily="sans-serif" fontWeight="700">−67% Thời Gian</text>
              <text x="80" y="40" textAnchor="middle" fill="#747474" fontSize="10" fontFamily="monospace">Tự Động Hóa 90%</text>
            </g>
          </g>
        )}

        {/* ==================================================================== */}
        {/* STEP 1: ERP ──┐ CRM ──┼─── ◉ SUN ── [Private VPC] DB ──┘ */}
        {/* ==================================================================== */}
        {activeStep === 1 && (
          <g className="animate-in fade-in duration-500">
            {/* 3 Converging Input Conduits */}
            {/* ERP Path */}
            <path d={`M 150 110 L 260 110 L 260 200 L ${cx} 200`} stroke="#581C87" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.6" />
            {/* CRM Path */}
            <path d={`M 150 200 L ${cx} 200`} stroke="#581C87" strokeWidth="1.5" fill="none" opacity="0.8" />
            {/* DB Path */}
            <path d={`M 150 290 L 260 290 L 260 200 L ${cx} 200`} stroke="#581C87" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.6" />

            {/* Animated Laser Pulse to Center */}
            <line x1="260" y1="200" x2={cx} y2="200" stroke="url(#purple-to-orange-beam)" strokeWidth="2.5" />

            {/* Source 1: ERP */}
            <g transform="translate(80, 95)">
              <rect width="70" height="30" rx="6" fill="#FFFFFF" stroke="#E5E3DC" strokeWidth="1" />
              <text x="35" y="19" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="monospace" fontWeight="600">ERP</text>
            </g>

            {/* Source 2: CRM */}
            <g transform="translate(80, 185)">
              <rect width="70" height="30" rx="6" fill="#FFFFFF" stroke="#E5E3DC" strokeWidth="1" />
              <text x="35" y="19" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="monospace" fontWeight="600">CRM</text>
            </g>

            {/* Source 3: DATABASE */}
            <g transform="translate(80, 275)">
              <rect width="70" height="30" rx="6" fill="#FFFFFF" stroke="#E5E3DC" strokeWidth="1" />
              <text x="35" y="19" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="monospace" fontWeight="600">DATABASE</text>
            </g>

            {/* Security Boundary Card Right */}
            <g transform={`translate(${cx + 70}, 160)`}>
              <rect width="180" height="80" rx="10" fill="#FFFFFF" stroke="#059669" strokeWidth="1.2" filter="drop-shadow(0 4px 12px rgba(5,150,105,0.08))" />
              <text x="90" y="32" textAnchor="middle" fill="#059669" fontSize="14" fontFamily="monospace" fontWeight="700">100% PRIVATE VPC</text>
              <text x="90" y="52" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="sans-serif" fontWeight="500">Ranh Giới Cô Lập</text>
              <text x="90" y="68" textAnchor="middle" fill="#747474" fontSize="10" fontFamily="monospace">Zero-Leak Guarantee</text>
            </g>
          </g>
        )}

        {/* ==================================================================== */}
        {/* STEP 2: DATA ➔ AI ➔ KPI ➔ ● RESULT (Result is Orange) */}
        {/* ==================================================================== */}
        {activeStep === 2 && (
          <g className="animate-in fade-in duration-500">
            {/* Horizontal Linear Chain */}
            <line x1="50" y1="200" x2="610" y2="200" stroke="#E5E3DC" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="50" y1="200" x2="610" y2="200" stroke="url(#purple-to-orange-beam)" strokeWidth="2.5" />

            {/* Node 1: DATA */}
            <g transform="translate(80, 200)">
              <circle cx="0" cy="0" r="24" fill="#FFFFFF" stroke="#581C87" strokeWidth="1.5" />
              <text x="0" y="4" textAnchor="middle" fill="#0A0A0A" fontSize="10" fontFamily="monospace" fontWeight="600">DATA</text>
            </g>

            {/* Node 2: AI */}
            <g transform="translate(190, 200)">
              <circle cx="0" cy="0" r="24" fill="#FFFFFF" stroke="#581C87" strokeWidth="1.5" />
              <text x="0" y="4" textAnchor="middle" fill="#0A0A0A" fontSize="10" fontFamily="monospace" fontWeight="600">AI</text>
            </g>

            {/* Node 3: KPI */}
            <g transform="translate(300, 200)">
              <circle cx="0" cy="0" r="24" fill="#FFFFFF" stroke="#581C87" strokeWidth="1.5" />
              <text x="0" y="4" textAnchor="middle" fill="#0A0A0A" fontSize="10" fontFamily="monospace" fontWeight="600">KPI</text>
            </g>

            {/* Node 4: ● RESULT (Orange Core Destination) */}
            <g transform="translate(520, 200)">
              <circle cx="0" cy="0" r="50" fill="url(#method-cf-aura)" />
              <circle cx="0" cy="0" r="30" fill="#F97316" filter="drop-shadow(0 4px 14px rgba(249,115,22,0.4))" />
              <circle cx="0" cy="0" r="30" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
              <text x="0" y="-3" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="monospace" fontWeight="bold">RESULT</text>
              <text x="0" y="11" textAnchor="middle" fill="#FFF7ED" fontSize="9" fontFamily="sans-serif">&lt; 4 Tháng</text>
            </g>
          </g>
        )}

        {/* Persistent Sunext Sun Anchor (Steps 0 & 1) */}
        {activeStep !== 2 && (
          <g transform={`translate(${cx}, ${cy})`}>
            <circle cx="0" cy="0" r="64" fill="url(#method-cf-aura)" />
            <circle cx="0" cy="0" r="36" fill="url(#method-cf-core)" filter="drop-shadow(0 4px 16px rgba(249,115,22,0.3))" />
            <circle cx="0" cy="0" r="36" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.8" />
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" fillOpacity="0.25" />
            <circle cx="0" cy="0" r="5" fill="#FFFFFF" />
          </g>
        )}

      </svg>
    </div>
  );
}
