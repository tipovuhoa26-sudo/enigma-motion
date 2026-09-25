'use client';

import React from 'react';

interface MethodSolarCanvasProps {
  activeStep: number;
}

export function MethodSolarCanvas({ activeStep }: MethodSolarCanvasProps) {
  const cy = 180;

  return (
    <div className="w-full h-full min-h-[320px] sm:min-h-[380px] flex items-center justify-center select-none relative">
      <svg
        viewBox="0 0 720 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block overflow-visible"
      >
        {/* Subtle Canvas Dot Matrix */}
        <defs>
          <pattern id="canvas-grid-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#E4E4E7" />
          </pattern>
        </defs>
        <rect width="720" height="360" fill="url(#canvas-grid-dots)" opacity="0.6" />

        {/* ==================================================================== */}
        {/* DIAGRAM 01: CON NGƯỜI → QUY TRÌNH → KẾT QUẢ                          */}
        {/* Pure 2D line language, no 3D sphere, no heavy glow                  */}
        {/* ==================================================================== */}
        {activeStep === 0 && (
          <g className="animate-in fade-in duration-300">
            {/* Horizontal Axis */}
            <line x1="120" y1={cy} x2="600" y2={cy} stroke="#E4E4E7" strokeWidth="1.5" />
            <line x1="120" y1={cy} x2="600" y2={cy} stroke="#7000FF" strokeWidth="2" strokeDasharray="6 6" />

            {/* Traveling Pulse */}
            <circle cy={cy} r="4" fill="#7000FF">
              <animate attributeName="cx" from="120" to="600" dur="2.4s" repeatCount="indefinite" />
            </circle>

            {/* Node 1: CON NGƯỜI */}
            <g transform={`translate(160, ${cy})`}>
              <circle cx="0" cy="0" r="32" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="4" fill="#0A0A0A" />
              <text x="0" y="48" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="monospace" fontWeight="700">
                CON NGƯỜI
              </text>
            </g>

            {/* Arrow 1 */}
            <path d="M 285 176 L 295 180 L 285 184" stroke="#7000FF" strokeWidth="2" fill="none" />

            {/* Node 2: QUY TRÌNH */}
            <g transform={`translate(360, ${cy})`}>
              <circle cx="0" cy="0" r="32" fill="#FFFFFF" stroke="#7000FF" strokeWidth="1.8" />
              <circle cx="0" cy="0" r="4" fill="#7000FF" />
              <text x="0" y="48" textAnchor="middle" fill="#7000FF" fontSize="11" fontFamily="monospace" fontWeight="700">
                QUY TRÌNH
              </text>
            </g>

            {/* Arrow 2 */}
            <path d="M 485 176 L 495 180 L 485 184" stroke="#EA580C" strokeWidth="2" fill="none" />

            {/* Node 3: KẾT QUẢ */}
            <g transform={`translate(560, ${cy})`}>
              <circle cx="0" cy="0" r="32" fill="#FFFFFF" stroke="#EA580C" strokeWidth="2" />
              <circle cx="0" cy="0" r="6" fill="#EA580C" />
              <text x="0" y="48" textAnchor="middle" fill="#EA580C" fontSize="11" fontFamily="monospace" fontWeight="700">
                KẾT QUẢ
              </text>
            </g>
          </g>
        )}

        {/* ==================================================================== */}
        {/* DIAGRAM 02: ERP / CRM / API ──→ DỮ LIỆU → AI                         */}
        {/* Convergence fan without technical overload                          */}
        {/* ==================================================================== */}
        {activeStep === 1 && (
          <g className="animate-in fade-in duration-300">
            {/* Input Sources */}
            {[
              { name: 'ERP', y: 80 },
              { name: 'CRM', y: 130 },
              { name: 'Tài liệu', y: 180 },
              { name: 'Cơ sở dữ liệu', y: 230 },
              { name: 'API', y: 280 },
            ].map((src, i) => {
              const startX = 140;
              const midX = 360;
              return (
                <g key={src.name}>
                  {/* Clean convergence line */}
                  <path
                    d={`M ${startX} ${src.y} C 240 ${src.y}, 280 ${cy}, ${midX - 32} ${cy}`}
                    stroke="#D4D4D8"
                    strokeWidth="1.2"
                    fill="none"
                  />
                  {/* Traveling Pulse */}
                  <circle r="3" fill="#7000FF">
                    <animateMotion
                      path={`M ${startX} ${src.y} C 240 ${src.y}, 280 ${cy}, ${midX - 32} ${cy}`}
                      dur={`${1.8 + i * 0.25}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  {/* Label Box */}
                  <g transform={`translate(50, ${src.y - 14})`}>
                    <rect width="80" height="28" rx="4" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1" />
                    <text x="40" y="18" textAnchor="middle" fill="#18181B" fontSize="10" fontFamily="sans-serif">
                      {src.name}
                    </text>
                  </g>
                </g>
              );
            })}

            {/* Central Node: DỮ LIỆU */}
            <g transform={`translate(360, ${cy})`}>
              <circle cx="0" cy="0" r="32" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1.8" />
              <circle cx="0" cy="0" r="5" fill="#0A0A0A" />
              <text x="0" y="48" textAnchor="middle" fill="#0A0A0A" fontSize="11" fontFamily="monospace" fontWeight="700">
                DỮ LIỆU
              </text>
            </g>

            {/* Connecting line to AI */}
            <line x1="392" y1={cy} x2="540" y2={cy} stroke="#7000FF" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M 530 176 L 540 180 L 530 184" stroke="#7000FF" strokeWidth="2" fill="none" />

            {/* Destination Node: AI */}
            <g transform={`translate(580, ${cy})`}>
              <circle cx="0" cy="0" r="32" fill="#FFFFFF" stroke="#7000FF" strokeWidth="2" />
              <circle cx="0" cy="0" r="6" fill="#7000FF" />
              <text x="0" y="48" textAnchor="middle" fill="#7000FF" fontSize="11" fontFamily="monospace" fontWeight="700">
                AI
              </text>
            </g>
          </g>
        )}

        {/* ==================================================================== */}
        {/* DIAGRAM 03: TRƯỚC AI → KPI → SAU VẬN HÀNH                            */}
        {/* Simple before/after baseline measurement timeline                   */}
        {/* ==================================================================== */}
        {activeStep === 2 && (
          <g className="animate-in fade-in duration-300">
            {/* Axis */}
            <line x1="120" y1={cy} x2="600" y2={cy} stroke="#E4E4E7" strokeWidth="1.5" />
            <line x1="120" y1={cy} x2="600" y2={cy} stroke="#7000FF" strokeWidth="2" strokeDasharray="6 6" />

            {/* Traveling Pulse */}
            <circle cy={cy} r="4" fill="#7000FF">
              <animate attributeName="cx" from="120" to="600" dur="2.2s" repeatCount="indefinite" />
            </circle>

            {/* Node 1: TRƯỚC AI (2 ngày) */}
            <g transform={`translate(160, ${cy})`}>
              <circle cx="0" cy="0" r="32" fill="#FFFFFF" stroke="#71717A" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="4" fill="#71717A" />
              <text x="0" y="48" textAnchor="middle" fill="#71717A" fontSize="11" fontFamily="monospace" fontWeight="700">
                TRƯỚC AI
              </text>
              <text x="0" y="66" textAnchor="middle" fill="#A1A1AA" fontSize="10" fontFamily="sans-serif">
                2 ngày
              </text>
            </g>

            {/* Arrow 1 */}
            <path d="M 285 176 L 295 180 L 285 184" stroke="#7000FF" strokeWidth="2" fill="none" />

            {/* Node 2: KPI */}
            <g transform={`translate(360, ${cy})`}>
              <circle cx="0" cy="0" r="32" fill="#FFFFFF" stroke="#7000FF" strokeWidth="1.8" />
              <circle cx="0" cy="0" r="4" fill="#7000FF" />
              <text x="0" y="48" textAnchor="middle" fill="#7000FF" fontSize="11" fontFamily="monospace" fontWeight="700">
                KPI
              </text>
              <text x="0" y="66" textAnchor="middle" fill="#7000FF" fontSize="10" fontFamily="sans-serif">
                Đo lường
              </text>
            </g>

            {/* Arrow 2 */}
            <path d="M 485 176 L 495 180 L 485 184" stroke="#EA580C" strokeWidth="2" fill="none" />

            {/* Node 3: SAU VẬN HÀNH (3 giờ) */}
            <g transform={`translate(560, ${cy})`}>
              <circle cx="0" cy="0" r="32" fill="#FFFFFF" stroke="#EA580C" strokeWidth="2" />
              <circle cx="0" cy="0" r="6" fill="#EA580C" />
              <text x="0" y="48" textAnchor="middle" fill="#EA580C" fontSize="11" fontFamily="monospace" fontWeight="700">
                SAU VẬN HÀNH
              </text>
              <text x="0" y="66" textAnchor="middle" fill="#EA580C" fontSize="10" fontFamily="monospace" fontWeight="700">
                3 giờ
              </text>
            </g>
          </g>
        )}
      </svg>
    </div>
  );
}
