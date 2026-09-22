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
            <stop offset="50%" stopColor="#0D9488" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>

          {/* Purple to Impact Beam */}
          <linearGradient id="purple-to-impact-beam" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#581C87" />
            <stop offset="50%" stopColor="#7000FF" />
            <stop offset="100%" stopColor="#9333EA" />
          </linearGradient>

          {/* Impact to Orange Beam */}
          <linearGradient id="impact-to-orange-beam" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#9333EA" />
            <stop offset="70%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
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

            {/* Synchronized Continuous Traveling Pulse Stream (Cadence: 2.4s, Offset: 1.2s) */}
            <circle cy={cy} r="4.5" fill="#F97316" filter="drop-shadow(0 0 6px #F97316)">
              <animate attributeName="cx" from="80" to={resultX} dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle cy={cy} r="4" fill="#7000FF" filter="drop-shadow(0 0 5px #7000FF)">
              <animate attributeName="cx" from="80" to={resultX} dur="2.4s" begin="1.2s" repeatCount="indefinite" />
            </circle>

            {/* Node 1: PEOPLE */}
            <g transform={`translate(140, ${cy})`}>
              {/* Rotating Subtle Halo */}
              <circle cx="0" cy="0" r="44" fill="none" stroke="#581C87" strokeWidth="1" strokeDasharray="3 5" opacity="0.4">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="25s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="0" r="34" fill="#FFFFFF" stroke="#581C87" strokeWidth="2" filter="drop-shadow(0 4px 12px rgba(88,28,135,0.06))" />
              <text x="0" y="4" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="monospace" fontWeight="700" letterSpacing="0.05em">PEOPLE</text>
              <text x="0" y="54" textAnchor="middle" fill="#747474" fontSize="11" fontFamily="sans-serif" fontWeight="500">Con người</text>
            </g>

            {/* Node 2: PROCESS */}
            <g transform={`translate(360, ${cy})`}>
              {/* Rotating Subtle Orbit */}
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
        {/* STEP 1: ERP / CRM / DB ─────── DATA BUS ───────── ◉ RESULT           */}
        {/* ==================================================================== */}
        {activeStep === 1 && (
          <g className="animate-in fade-in duration-300">
            {/* Streamlines from 3 Sources terminating cleanly at boundary of Data Bus (x=296) */}
            <path id="path-erp" d="M 140 69 C 220 69, 240 165, 296 174" stroke="#581C87" strokeWidth="2" strokeDasharray="5 5" fill="none" opacity="0.75" />
            <path id="path-crm" d={`M 140 ${cy} L 296 ${cy}`} stroke="#581C87" strokeWidth="2.2" fill="none" opacity="0.85" />
            <path id="path-db" d="M 140 291 C 220 291, 240 195, 296 186" stroke="#581C87" strokeWidth="2" strokeDasharray="5 5" fill="none" opacity="0.75" />

            {/* Synchronized Ingress Traveling Data Pulses into Data Bus (Cadence: 2.4s) */}
            <circle r="4" fill="#7000FF" filter="drop-shadow(0 0 6px #7000FF)">
              <animateMotion path="M 140 69 C 220 69, 240 165, 296 174" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle cy={cy} r="4" fill="#7000FF" filter="drop-shadow(0 0 6px #7000FF)">
              <animate attributeName="cx" from="140" to="296" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle r="4" fill="#7000FF" filter="drop-shadow(0 0 6px #7000FF)">
              <animateMotion path="M 140 291 C 220 291, 240 195, 296 186" dur="2.4s" repeatCount="indefinite" />
            </circle>

            {/* Active Encrypted Laser Beam exiting cleanly from Data Bus (x=384) to Result */}
            <line x1="384" y1={cy} x2={resultX} y2={cy} stroke="url(#purple-to-green-beam)" strokeWidth="3" />

            {/* Synchronized Egress Encrypted Data Pulse Stream (Cadence: 2.4s, Offset: 1.2s) */}
            <circle cy={cy} r="5" fill="#059669" filter="drop-shadow(0 0 8px #059669)">
              <animate attributeName="cx" from="384" to={resultX} dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle cy={cy} r="4" fill="#10B981" filter="drop-shadow(0 0 6px #10B981)">
              <animate attributeName="cx" from="384" to={resultX} dur="2.4s" begin="1.2s" repeatCount="indefinite" />
            </circle>

            {/* Source 1: ERP with Live Pulse Dot */}
            <g transform="translate(55, 52)">
              <rect width="85" height="34" rx="7" fill="#FFFFFF" stroke="#D1D1CE" strokeWidth="1.5" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.03))" />
              <circle cx="16" cy="17" r="3" fill="#059669" />
              <circle cx="16" cy="17" r="3" fill="none" stroke="#059669" opacity="0.6">
                <animate attributeName="r" values="3;7" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <text x="48" y="21" textAnchor="middle" fill="#0A0A0A" fontSize="12" fontFamily="monospace" fontWeight="700">ERP</text>
            </g>

            {/* Source 2: CRM with Live Pulse Dot */}
            <g transform={`translate(55, ${cy - 17})`}>
              <rect width="85" height="34" rx="7" fill="#FFFFFF" stroke="#D1D1CE" strokeWidth="1.5" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.03))" />
              <circle cx="16" cy="17" r="3" fill="#059669" />
              <circle cx="16" cy="17" r="3" fill="none" stroke="#059669" opacity="0.6">
                <animate attributeName="r" values="3;7" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <text x="48" y="21" textAnchor="middle" fill="#0A0A0A" fontSize="12" fontFamily="monospace" fontWeight="700">CRM</text>
            </g>

            {/* Source 3: DATABASE with Live Pulse Dot */}
            <g transform="translate(55, 274)">
              <rect width="85" height="34" rx="7" fill="#FFFFFF" stroke="#D1D1CE" strokeWidth="1.5" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.03))" />
              <circle cx="14" cy="17" r="3" fill="#059669" />
              <circle cx="14" cy="17" r="3" fill="none" stroke="#059669" opacity="0.6">
                <animate attributeName="r" values="3;7" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <text x="48" y="21" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="monospace" fontWeight="700">DATABASE</text>
            </g>

            {/* Central Node: DATA BUS (x=340, r=44 - Completely Unobstructed, Generous Breathing Space) */}
            <g transform={`translate(340, ${cy})`}>
              {/* Outer Security Shield Ring */}
              <circle cx="0" cy="0" r="54" fill="none" stroke="#059669" strokeWidth="1" strokeDasharray="4 6" opacity="0.45">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite" />
              </circle>
              {/* Inner Pulsing Security Wave */}
              <circle cx="0" cy="0" r="36" fill="#ECFDF5" opacity="0.7">
                <animate attributeName="r" values="36;42;36" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.4s" repeatCount="indefinite" />
              </circle>
              {/* Clean White Masking Disc */}
              <circle cx="0" cy="0" r="44" fill="#FFFFFF" stroke="#059669" strokeWidth="2.2" filter="drop-shadow(0 4px 16px rgba(5,150,105,0.14))" />
              <text x="0" y="4" textAnchor="middle" fill="#047857" fontSize="11" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">DATA BUS</text>
              {/* Distinct Non-overlapping Sublabel at y=74 (20px clear of r=54 ring) */}
              <text x="0" y="74" textAnchor="middle" fill="#747474" fontSize="11" fontFamily="sans-serif" fontWeight="500">Ranh giới cô lập</text>
            </g>
          </g>
        )}

        {/* ==================================================================== */}
        {/* STEP 2: AI ────────── KPI ────────── IMPACT ────────── ◉ P&L RESULT */}
        {/* Sequenced Choreography: AI -> KPI (w/ metrics) -> IMPACT (w/ impact) -> P&L */}
        {/* ==================================================================== */}
        {activeStep === 2 && (
          <g className="animate-in fade-in duration-300">
            {/* Active Colored Laser Beam 1: AI to IMPACT (Purple to Indigo) */}
            <line x1="130" y1={cy} x2="450" y2={cy} stroke="url(#purple-to-impact-beam)" strokeWidth="2.5" />
            {/* Active Colored Laser Beam 2: IMPACT to P&L RESULT (Transitions to Orange) */}
            <line x1="450" y1={cy} x2={resultX} y2={cy} stroke="url(#impact-to-orange-beam)" strokeWidth="3" />

            {/* Traveling Pulse 1: Purple from AI (130) -> KPI (290) -> IMPACT (450) [0.0s -> 2.0s of 3.6s cycle] */}
            <circle cy={cy} r="4.5" fill="#7000FF" filter="drop-shadow(0 0 6px #7000FF)">
              <animate attributeName="cx" dur="3.6s" repeatCount="indefinite"
                keyTimes="0; 0.28; 0.56; 0.58; 1"
                values="130; 290; 450; 450; 450"
              />
              <animate attributeName="opacity" dur="3.6s" repeatCount="indefinite"
                keyTimes="0; 0.05; 0.55; 0.58; 1"
                values="0; 1; 1; 0; 0"
              />
            </circle>

            {/* Traveling Pulse 2: Radiant Orange from IMPACT (450) -> P&L RESULT (620) [2.0s -> 2.9s of 3.6s cycle] */}
            <circle cy={cy} r="5.5" fill="#F97316" filter="drop-shadow(0 0 10px #F97316)">
              <animate attributeName="cx" dur="3.6s" repeatCount="indefinite"
                keyTimes="0; 0.56; 0.81; 0.83; 1"
                values="450; 450; 620; 620; 450"
              />
              <animate attributeName="opacity" dur="3.6s" repeatCount="indefinite"
                keyTimes="0; 0.55; 0.58; 0.81; 0.84; 1"
                values="0; 0; 1; 1; 0; 0"
              />
            </circle>

            {/* P&L Shockwave Ring upon Orange Pulse Arrival [2.9s -> 3.5s] */}
            <circle cx={resultX} cy={cy} fill="none" stroke="#F97316" strokeWidth="2">
              <animate attributeName="r" dur="3.6s" repeatCount="indefinite"
                keyTimes="0; 0.80; 0.95; 1"
                values="42; 44; 76; 76"
              />
              <animate attributeName="opacity" dur="3.6s" repeatCount="indefinite"
                keyTimes="0; 0.80; 0.82; 0.96; 1"
                values="0; 0; 0.9; 0; 0"
              />
            </circle>

            {/* Node 1: AI (x=130) - Uncluttered Core */}
            <g transform={`translate(130, ${cy})`}>
              {/* Rotating Orbit */}
              <circle cx="0" cy="0" r="44" fill="none" stroke="#581C87" strokeWidth="1" strokeDasharray="3 5" opacity="0.4">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="22s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="0" r="34" fill="#FFFFFF" stroke="#581C87" strokeWidth="2" filter="drop-shadow(0 4px 12px rgba(88,28,135,0.06))" />
              <text x="0" y="4" textAnchor="middle" fill="#581C87" fontSize="12" fontFamily="monospace" fontWeight="700">AI</text>
              <text x="0" y="54" textAnchor="middle" fill="#747474" fontSize="11" fontFamily="sans-serif" fontWeight="500">Mô hình AI</text>
            </g>

            {/* Node 2: KPI (x=290) - Operational Metrics */}
            <g transform={`translate(290, ${cy})`}>
              {/* Outer Counter-Rotating Ring */}
              <circle cx="0" cy="0" r="44" fill="none" stroke="#7000FF" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.45">
                <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="14s" repeatCount="indefinite" />
              </circle>
              {/* Pulse Reactivity Ring at KPI arrival (t = ~1.0s) */}
              <circle cx="0" cy="0" fill="#7000FF">
                <animate attributeName="r" dur="3.6s" repeatCount="indefinite"
                  keyTimes="0; 0.25; 0.35; 0.50; 1"
                  values="12; 12; 32; 14; 12"
                />
                <animate attributeName="opacity" dur="3.6s" repeatCount="indefinite"
                  keyTimes="0; 0.25; 0.30; 0.50; 1"
                  values="0.08; 0.08; 0.32; 0.08; 0.08"
                />
              </circle>
              <circle cx="0" cy="0" r="34" fill="#FFFFFF" stroke="#7000FF" strokeWidth="2.2" filter="drop-shadow(0 4px 14px rgba(112,0,255,0.14))" />
              <text x="0" y="4" textAnchor="middle" fill="#7000FF" fontSize="11" fontFamily="monospace" fontWeight="700">KPI</text>
              <text x="0" y="54" textAnchor="middle" fill="#747474" fontSize="11" fontFamily="sans-serif" fontWeight="500">KPI Vận Hành</text>

              {/* Integrated Operational Dimensions Sublabel (Illuminates upon pulse) */}
              <text x="0" y="70" textAnchor="middle" fill="#7000FF" fontSize="9" fontFamily="monospace" fontWeight="600" letterSpacing="0.02em">
                <animate attributeName="opacity" dur="3.6s" repeatCount="indefinite"
                  keyTimes="0; 0.24; 0.30; 0.56; 0.62; 1"
                  values="0.3; 0.3; 1; 1; 0.3; 0.3"
                />
                Accuracy · Time · Cost
              </text>
            </g>

            {/* Node 3: IMPACT (x=450) - Business Impact */}
            <g transform={`translate(450, ${cy})`}>
              {/* Rotating Outcome Ring */}
              <circle cx="0" cy="0" r="44" fill="none" stroke="#9333EA" strokeWidth="1" strokeDasharray="4 6" opacity="0.45">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="18s" repeatCount="indefinite" />
              </circle>
              {/* Pulse Reactivity Ring at IMPACT arrival (t = ~2.0s) */}
              <circle cx="0" cy="0" fill="#9333EA">
                <animate attributeName="r" dur="3.6s" repeatCount="indefinite"
                  keyTimes="0; 0.52; 0.62; 0.78; 1"
                  values="12; 12; 32; 14; 12"
                />
                <animate attributeName="opacity" dur="3.6s" repeatCount="indefinite"
                  keyTimes="0; 0.52; 0.58; 0.78; 1"
                  values="0.08; 0.08; 0.35; 0.08; 0.08"
                />
              </circle>
              <circle cx="0" cy="0" r="34" fill="#FFFFFF" stroke="#9333EA" strokeWidth="2" filter="drop-shadow(0 4px 12px rgba(147,51,234,0.1))" />
              <text x="0" y="4" textAnchor="middle" fill="#9333EA" fontSize="10.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.04em">IMPACT</text>
              <text x="0" y="54" textAnchor="middle" fill="#747474" fontSize="11" fontFamily="sans-serif" fontWeight="500">Tác Động Kinh Doanh</text>

              {/* Integrated Business Dimensions Sublabel (Illuminates upon pulse) */}
              <text x="0" y="70" textAnchor="middle" fill="#9333EA" fontSize="9" fontFamily="monospace" fontWeight="600" letterSpacing="0.04em">
                <animate attributeName="opacity" dur="3.6s" repeatCount="indefinite"
                  keyTimes="0; 0.52; 0.58; 0.82; 0.88; 1"
                  values="0.3; 0.3; 1; 1; 0.3; 0.3"
                />
                Revenue · Cost · Risk
              </text>
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
          <text x="0" y="-52" textAnchor="middle" fill={activeStep === 1 ? '#059669' : '#EA580C'} fontSize="13" fontFamily="monospace" fontWeight="bold" letterSpacing="0.08em">
            {activeStep === 2 ? '◉ P&L RESULT' : activeStep === 1 ? '◉ PRIVATE CORE' : '◉ RESULT'}
          </text>

          {/* Result Metric Text Label (Subtly Morphs with Step) */}
          {activeStep === 0 && (
            <text x="0" y="60" textAnchor="middle" fill="#EA580C" fontSize="18" fontFamily="sans-serif" fontWeight="700" className="animate-in fade-in duration-200">
              −67% Thời Gian
            </text>
          )}
          {activeStep === 1 && (
            <g className="animate-in fade-in duration-200">
              <text x="0" y="58" textAnchor="middle" fill="#059669" fontSize="13" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.02em">
                VÙNG KIỂM SOÁT
              </text>
              <text x="0" y="74" textAnchor="middle" fill="#747474" fontSize="10.5" fontFamily="monospace" fontWeight="500">
                Private VPC / On-Prem
              </text>
            </g>
          )}
          {activeStep === 2 && (
            <text x="0" y="60" textAnchor="middle" fill="#EA580C" fontSize="18" fontFamily="sans-serif" fontWeight="700" className="animate-in fade-in duration-200">
              −75% Thời Gian
            </text>
          )}
        </g>

      </svg>
    </div>
  );
}
