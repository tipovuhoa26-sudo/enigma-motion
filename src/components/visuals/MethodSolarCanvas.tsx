'use client';

import React from 'react';

interface MethodSolarCanvasProps {
  activeStep: number;
}

export function MethodSolarCanvas({ activeStep }: MethodSolarCanvasProps) {
  const cy = 180;

  // Data input sources that fan out at Step 1 and 2
  const sources = [
    { id: 'erp', name: 'ERP', y: 75 },
    { id: 'crm', name: 'CRM', y: 125 },
    { id: 'docs', name: 'Tài liệu', y: 235 },
    { id: 'api', name: 'API', y: 285 },
  ];

  return (
    <div className="w-full h-full min-h-[340px] sm:min-h-[400px] flex items-center justify-center select-none relative">
      <svg
        viewBox="0 0 740 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block overflow-visible"
      >
        {/* Subtle Canvas Dot Matrix */}
        <defs>
          <pattern id="method-canvas-grid-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#E4E4E7" />
          </pattern>
        </defs>
        <rect width="740" height="360" fill="url(#method-canvas-grid-dots)" opacity="0.55" />

        {/* ==================================================================== */}
        {/* CONTINUOUS LAYER 1: BASELINE HORIZONTAL SPINE & CONNECTION LINES      */}
        {/* ==================================================================== */}

        {/* Step 0: Linear Backbone (CON NGƯỜI -> QUY TRÌNH -> KẾT QUẢ) */}
        <g
          style={{
            opacity: activeStep === 0 ? 1 : 0,
            transition: 'opacity 0.5s ease',
            pointerEvents: activeStep === 0 ? 'auto' : 'none',
          }}
        >
          <line x1="150" y1={cy} x2="610" y2={cy} stroke="#E4E4E7" strokeWidth="1.5" />
          <line x1="150" y1={cy} x2="610" y2={cy} stroke="#7000FF" strokeWidth="1.8" strokeDasharray="4 4" />
          <path d="M 285 176 L 295 180 L 285 184" stroke="#7000FF" strokeWidth="2" fill="none" />
          <path d="M 485 176 L 495 180 L 485 184" stroke="#EA580C" strokeWidth="2" fill="none" />
        </g>

        {/* Step 1 & 2: Convergence Fan Lines from ERP/CRM/Docs/API into DỮ LIỆU */}
        <g
          style={{
            opacity: activeStep >= 1 ? 1 : 0,
            transition: 'opacity 0.6s ease',
            pointerEvents: activeStep >= 1 ? 'auto' : 'none',
          }}
        >
          {sources.map((src) => {
            const startX = 115;
            const targetX = activeStep === 1 ? 260 : 220;
            return (
              <g key={src.id}>
                <path
                  d={`M ${startX} ${src.y} C 180 ${src.y}, 200 ${cy}, ${targetX - 28} ${cy}`}
                  stroke="#CBD5E1"
                  strokeWidth="1.2"
                  fill="none"
                />
                {activeStep === 1 && (
                  <circle r="2.8" fill="#7000FF">
                    <animateMotion
                      path={`M ${startX} ${src.y} C 180 ${src.y}, 200 ${cy}, ${targetX - 28} ${cy}`}
                      dur="2.2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
                {/* Source Pill Label */}
                <g transform={`translate(${startX - 75}, ${src.y - 13})`}>
                  <rect width="70" height="26" rx="4" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="35" y="17" textAnchor="middle" fill="#0A0A0A" fontSize="10.5" fontFamily="monospace" fontWeight="600">
                    {src.name}
                  </text>
                </g>
              </g>
            );
          })}
        </g>

        {/* Step 1 Connecting Line: DỮ LIỆU -> AI -> KẾT QUẢ */}
        <g
          style={{
            opacity: activeStep === 1 ? 1 : 0,
            transition: 'opacity 0.5s ease',
            pointerEvents: activeStep === 1 ? 'auto' : 'none',
          }}
        >
          <line x1="288" y1={cy} x2="442" y2={cy} stroke="#7000FF" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M 432 176 L 442 180 L 432 184" stroke="#7000FF" strokeWidth="2" fill="none" />
          <line x1="498" y1={cy} x2="582" y2={cy} stroke="#EA580C" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M 572 176 L 582 180 L 572 184" stroke="#EA580C" strokeWidth="2" fill="none" />
        </g>

        {/* Step 2 Connecting Lines: DỮ LIỆU -> AI -> KPI -> KẾT QUẢ */}
        <g
          style={{
            opacity: activeStep === 2 ? 1 : 0,
            transition: 'opacity 0.5s ease',
            pointerEvents: activeStep === 2 ? 'auto' : 'none',
          }}
        >
          <line x1="248" y1={cy} x2="338" y2={cy} stroke="#7000FF" strokeWidth="1.8" strokeDasharray="3 3" />
          <path d="M 330 176 L 338 180 L 330 184" stroke="#7000FF" strokeWidth="2" fill="none" />
          <line x1="398" y1={cy} x2="468" y2={cy} stroke="#7000FF" strokeWidth="1.8" strokeDasharray="3 3" />
          <path d="M 460 176 L 468 180 L 460 184" stroke="#7000FF" strokeWidth="2" fill="none" />
          <line x1="528" y1={cy} x2="582" y2={cy} stroke="#EA580C" strokeWidth="2.4" />
          <path d="M 574 176 L 582 180 L 574 184" stroke="#EA580C" strokeWidth="2.4" fill="none" />

          {/* Vertical Measurement Calibration Axis */}
          <line x1="498" y1="80" x2="498" y2="280" stroke="#7000FF" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="498" cy="80" r="4" fill="#7000FF" />
          <circle cx="498" cy="280" r="4" fill="#EA580C" />

          {/* Baseline Label (Top) */}
          <g transform="translate(498, 55)">
            <text x="0" y="0" textAnchor="middle" fill="#747474" fontSize="11" fontFamily="monospace" fontWeight="600">
              BASELINE
            </text>
            <text x="0" y="14" textAnchor="middle" fill="#A1A1AA" fontSize="10" fontFamily="monospace" textDecoration="line-through">
              2 ngày
            </text>
          </g>

          {/* Impact Label (Bottom) */}
          <g transform="translate(498, 308)">
            <text x="0" y="0" textAnchor="middle" fill="#EA580C" fontSize="11" fontFamily="monospace" fontWeight="700">
              SAU VẬN HÀNH
            </text>
            <text x="0" y="14" textAnchor="middle" fill="#EA580C" fontSize="10.5" fontFamily="monospace" fontWeight="700">
              3 giờ
            </text>
          </g>
        </g>

        {/* ==================================================================== */}
        {/* CONTINUOUS LAYER 2: PERSISTENT MORPHING NODES                        */}
        {/* ==================================================================== */}

        {/* Left Node: CON NGƯỜI (Step 0) -> DỮ LIỆU (Step 1 & 2) */}
        <g
          transform={`translate(${activeStep === 0 ? 160 : activeStep === 1 ? 260 : 220}, ${cy})`}
          style={{
            transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <circle cx="0" cy="0" r="28" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1.8" />
          <circle cx="0" cy="0" r="4" fill="#0A0A0A" />
          <text x="0" y="44" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="monospace" fontWeight="700">
            {activeStep === 0 ? 'CON NGƯỜI' : 'DỮ LIỆU'}
          </text>
        </g>

        {/* Middle Node 1: QUY TRÌNH (Step 0) -> AI (Step 1 & 2) */}
        <g
          transform={`translate(${activeStep === 0 ? 370 : activeStep === 1 ? 470 : 368}, ${cy})`}
          style={{
            transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <circle
            cx="0"
            cy="0"
            r="28"
            fill="#FFFFFF"
            stroke="#7000FF"
            strokeWidth={activeStep === 0 ? 1.8 : 2.2}
          />
          <circle cx="0" cy="0" r="4.5" fill="#7000FF" />
          <text x="0" y="44" textAnchor="middle" fill="#7000FF" fontSize="11" fontFamily="monospace" fontWeight="700">
            {activeStep === 0 ? 'QUY TRÌNH' : 'AI'}
          </text>
        </g>

        {/* Middle Node 2: KPI ENGINE (Appears on Step 2) */}
        <g
          transform={`translate(498, ${cy})`}
          style={{
            opacity: activeStep === 2 ? 1 : 0,
            transform: `translate(498px, ${cy}px) scale(${activeStep === 2 ? 1 : 0.6})`,
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            pointerEvents: activeStep === 2 ? 'auto' : 'none',
          }}
        >
          <circle cx="0" cy="0" r="28" fill="#FFFFFF" stroke="#7000FF" strokeWidth="2.2" />
          <circle cx="0" cy="0" r="5" fill="#7000FF" />
          <text x="0" y="44" textAnchor="middle" fill="#7000FF" fontSize="11" fontFamily="monospace" fontWeight="700">
            KPI
          </text>
        </g>

        {/* Right Anchor: KẾT QUẢ (Persistent Across ALL 3 Steps) */}
        <g
          transform={`translate(610, ${cy})`}
          style={{
            transition: 'transform 0.5s ease',
          }}
        >
          <circle
            cx="0"
            cy="0"
            r="30"
            fill="#FFFFFF"
            stroke="#EA580C"
            strokeWidth={activeStep === 2 ? 2.8 : 2}
          />
          <circle
            cx="0"
            cy="0"
            r={activeStep === 2 ? 7 : 5}
            fill="#EA580C"
            style={{ transition: 'r 0.4s ease' }}
          />
          <text x="0" y="46" textAnchor="middle" fill="#EA580C" fontSize="11" fontFamily="monospace" fontWeight="700">
            KẾT QUẢ
          </text>
        </g>

      </svg>
    </div>
  );
}
