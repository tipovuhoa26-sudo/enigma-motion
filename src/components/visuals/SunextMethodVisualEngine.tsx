'use client';

import React, { useState, useEffect } from 'react';
import { Activity, Cpu, ShieldCheck, Award } from 'lucide-react';

export type MethodState = 'diagnose' | 'design' | 'deliver' | 'transfer';

interface StateTab {
  id: MethodState;
  num: string;
  name: string;
  question: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TABS: StateTab[] = [
  {
    id: 'diagnose',
    num: '01',
    name: 'CHẨN ĐOÁN · Diagnose',
    question: 'Doanh nghiệp đang mắc ở đâu?',
    badge: '6 Trụ Cột Năng Lực',
    icon: Activity,
  },
  {
    id: 'design',
    num: '02',
    name: 'THIẾT KẾ · Design',
    question: 'Can thiệp thế nào là đúng?',
    badge: '3 Nguyên Tắc Thiết Kế',
    icon: Cpu,
  },
  {
    id: 'deliver',
    num: '03',
    name: 'TRIỂN KHAI · Deliver',
    question: 'Làm thế nào để đi vào vận hành an toàn?',
    badge: '4 Pha · 4 Cổng Kiểm Soát',
    icon: ShieldCheck,
  },
  {
    id: 'transfer',
    num: '04',
    name: 'CHUYỂN GIAO · Transfer',
    question: 'Đội ngũ tự làm chủ thế nào?',
    badge: '5 Tầng Năng Lực',
    icon: Award,
  },
];

export function SunextMethodVisualEngine() {
  const [activeState, setActiveState] = useState<MethodState>('diagnose');
  const [isUserInteracted, setIsUserInteracted] = useState<boolean>(false);

  // Auto-cycle through states every 7.5 seconds if user hasn't explicitly clicked
  useEffect(() => {
    if (isUserInteracted) return;
    const interval = setInterval(() => {
      setActiveState((prev) => {
        if (prev === 'diagnose') return 'design';
        if (prev === 'design') return 'deliver';
        if (prev === 'deliver') return 'transfer';
        return 'diagnose';
      });
    }, 7500);
    return () => clearInterval(interval);
  }, [isUserInteracted]);

  const handleSelectTab = (tabId: MethodState) => {
    setIsUserInteracted(true);
    setActiveState(tabId);
  };

  return (
    <div className="w-full rounded-3xl bg-white border border-black/10 p-6 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden">
      {/* Background Soft Ambient Light */}
      <div
        className="absolute w-[600px] h-[350px] -top-20 -right-20 rounded-full pointer-events-none -z-0 opacity-40 blur-3xl transition-colors duration-700"
        style={{
          background:
            activeState === 'diagnose'
              ? 'radial-gradient(circle, rgba(112,0,255,0.18) 0%, transparent 70%)'
              : activeState === 'design'
              ? 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)'
              : activeState === 'deliver'
              ? 'radial-gradient(circle, rgba(234,88,12,0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(249,115,22,0.25) 0%, transparent 70%)',
        }}
      />

      {/* Top Controller Header: 4 Interactive Linear Verbs */}
      <div className="relative z-10 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-black/10">
          <div>
            <h3 className="text-xl sm:text-2xl font-light text-[#17151A] tracking-tight">
              Phương Pháp Luận Xuyên Suốt Vòng Đời Dự Án
            </h3>
          </div>

          <div className="text-xs font-mono text-[#747474]">
            Trạng thái:{' '}
            <span className="font-bold text-[#7000FF] uppercase">
              {TABS.find((t) => t.id === activeState)?.num} — {TABS.find((t) => t.id === activeState)?.name}
            </span>
          </div>
        </div>

        {/* 4 Interactive Verb Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6">
          {TABS.map((tab) => {
            const isActive = activeState === tab.id;
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => handleSelectTab(tab.id)}
                className={`text-left p-4 rounded-2xl transition-all border cursor-pointer relative ${
                  isActive
                    ? 'bg-[#FAF5FF] border-[#7000FF] shadow-xs'
                    : 'bg-white/60 hover:bg-white border-black/5 hover:border-black/20 text-[#6E6E6E]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? 'text-[#7000FF]' : 'text-[#747474]'
                    }`}
                  >
                    {tab.num}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? 'text-[#7000FF]' : 'text-[#A1A1AA]'
                    }`}
                  />
                </div>
                <div
                  className={`text-sm font-semibold tracking-tight ${
                    isActive ? 'text-[#17151A]' : 'text-[#515151]'
                  }`}
                >
                  {tab.name}
                </div>
                <div className="text-[11px] text-[#6E6E6E] font-light mt-1 line-clamp-1">
                  {tab.question}
                </div>
                <div className="mt-2.5">
                  <span
                    className={`text-[9.5px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
                      isActive
                        ? 'bg-[#7000FF] text-white font-semibold'
                        : 'bg-black/5 text-[#747474]'
                    }`}
                  >
                    {tab.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Dynamic Canvas Viewport (920 x 360 SVG) */}
      <div className="relative z-10 w-full aspect-[16/8] sm:aspect-[16/7] md:aspect-[16/6] bg-neutral-950 rounded-2xl p-4 sm:p-6 overflow-hidden border border-neutral-800 shadow-inner flex items-center justify-center">
        {/* Subtle Engineering Grid Background */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #A855F7 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />

        <svg
          viewBox="0 0 960 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full block"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="purple-laser" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7000FF" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="1" />
              <stop offset="100%" stopColor="#EA580C" stopOpacity="1" />
            </linearGradient>

            <radialGradient id="engine-core-sun" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF7ED" />
              <stop offset="35%" stopColor="#FFBF75" />
              <stop offset="70%" stopColor="#EA580C" />
              <stop offset="100%" stopColor="#C2410C" />
            </radialGradient>
          </defs>

          {/* ================================================================ */}
          {/* SCENE 1: 01 DIAGNOSE — 6 RADIAL AXES CHẨN ĐOÁN NĂNG LỰC          */}
          {/* ================================================================ */}
          {activeState === 'diagnose' && (
            <g className="animate-in fade-in zoom-in-95 duration-500">
              {/* Radial Benchmark Rings */}
              <circle cx="480" cy="190" r="140" stroke="#334155" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.4" />
              <circle cx="480" cy="190" r="95" stroke="#475569" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.5" />
              <circle cx="480" cy="190" r="50" stroke="#64748B" strokeWidth="0.8" opacity="0.6" />

              {/* 6 Axes */}
              {[
                { label: 'STRATEGY (P&L)', x: 480, y: 35, score: 'Mức 2/4' },
                { label: 'PEOPLE (Culture)', x: 630, y: 110, score: 'Mức 1/4' },
                { label: 'PROCESS (SOP)', x: 630, y: 270, score: 'Mức 2/4' },
                { label: 'TECHNOLOGY (VPC)', x: 480, y: 345, score: 'Mức 3/4' },
                { label: 'DATA (Integration)', x: 330, y: 270, score: 'Điểm nghẽn (1/4)' },
                { label: 'GOVERNANCE (HITL)', x: 330, y: 110, score: 'Mức 2/4' },
              ].map((axis, i) => (
                <g key={`diag-axis-${i}`}>
                  <line
                    x1="480"
                    y1="190"
                    x2={axis.x}
                    y2={axis.y}
                    stroke="#7000FF"
                    strokeWidth="1.2"
                    opacity="0.6"
                  />
                  <circle cx={axis.x} cy={axis.y} r="6" fill="#1E1B4B" stroke="#A855F7" strokeWidth="2" />
                  <text
                    x={axis.x}
                    y={axis.y > 190 ? axis.y + 18 : axis.y - 12}
                    textAnchor="middle"
                    fill="#F8FAFC"
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight="700"
                    letterSpacing="0.06em"
                  >
                    {axis.label}
                  </text>
                  <text
                    x={axis.x}
                    y={axis.y > 190 ? axis.y + 30 : axis.y - 24}
                    textAnchor="middle"
                    fill={axis.score.startsWith('Điểm nghẽn') ? '#EA580C' : '#38BDF8'}
                    fontSize="9.5"
                    fontFamily="monospace"
                    fontWeight="600"
                  >
                    {axis.score}
                  </text>
                </g>
              ))}

              {/* Enterprise Radar Polygon (Diagnostic Shape) */}
              <polygon
                points="480,68 600,125 580,245 480,310 380,240 375,120"
                fill="rgba(112,0,255,0.22)"
                stroke="#C084FC"
                strokeWidth="2.0"
              />

              {/* Center Core Scanner */}
              <circle cx="480" cy="190" r="14" fill="#0F172A" stroke="#EA580C" strokeWidth="2" />
              <circle cx="480" cy="190" r="6" fill="#EA580C" />
              <text x="480" y="194" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">SUN</text>
            </g>
          )}

          {/* ================================================================ */}
          {/* SCENE 2: 02 DESIGN — 3 LANES CONVERGING TO BUSINESS RESULT        */}
          {/* ================================================================ */}
          {activeState === 'design' && (
            <g className="animate-in fade-in duration-500">
              {/* Lane 1: QUY TRÌNH (Process before tool) */}
              <path
                d="M 120 100 C 350 100, 480 170, 720 190"
                stroke="#A855F7"
                strokeWidth="2.5"
                fill="none"
              />
              <circle cx="120" cy="100" r="7" fill="#7000FF" />
              <text x="140" y="104" fill="#E2E8F0" fontSize="12" fontFamily="monospace" fontWeight="700">
                01 QUY TRÌNH TRƯỚC CÔNG CỤ · SOP Re-engineering
              </text>
              <circle r="3.5" fill="#C084FC">
                <animateMotion path="M 120 100 C 350 100, 480 170, 720 190" dur="2.4s" repeatCount="indefinite" />
              </circle>

              {/* Lane 2: DỮ LIỆU (Connected context bus) */}
              <path
                d="M 120 190 L 720 190"
                stroke="#38BDF8"
                strokeWidth="2.5"
                fill="none"
                strokeDasharray="4 4"
              />
              <circle cx="120" cy="190" r="7" fill="#0284C7" />
              <text x="140" y="194" fill="#E2E8F0" fontSize="12" fontFamily="monospace" fontWeight="700">
                02 DỮ LIỆU PHẢI KẾT NỐI · Vector DB &amp; Private VPC
              </text>
              <circle r="3.5" fill="#38BDF8">
                <animateMotion path="M 120 190 L 720 190" dur="2.0s" repeatCount="indefinite" />
              </circle>

              {/* Lane 3: KPI (Impact before AI) */}
              <path
                d="M 120 280 C 350 280, 480 210, 720 190"
                stroke="#EA580C"
                strokeWidth="2.5"
                fill="none"
              />
              <circle cx="120" cy="280" r="7" fill="#EA580C" />
              <text x="140" y="284" fill="#E2E8F0" fontSize="12" fontFamily="monospace" fontWeight="700">
                03 KPI ĐO TRƯỚC CAN THIỆP · P&amp;L Metric Accountability
              </text>
              <circle r="3.5" fill="#FB923C">
                <animateMotion path="M 120 280 C 350 280, 480 210, 720 190" dur="2.2s" repeatCount="indefinite" />
              </circle>

              {/* Convergence Destination Hub: RESULT */}
              <circle cx="760" cy="190" r="42" fill="url(#engine-core-sun)" filter="drop-shadow(0 0 25px rgba(234,88,12,0.6))" />
              <circle cx="760" cy="190" r="42" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.8" />
              <text x="760" y="186" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="monospace" fontWeight="800" letterSpacing="0.08em">
                KẾT QUẢ
              </text>
              <text x="760" y="201" textAnchor="middle" fill="#FFF7ED" fontSize="8" fontFamily="monospace" fontWeight="600">
                P&amp;L IMPACT
              </text>
            </g>
          )}

          {/* ================================================================ */}
          {/* SCENE 3: 03 DELIVER — 4 PHASES · 4 GATES GO/NO-GO SPINE          */}
          {/* ================================================================ */}
          {activeState === 'deliver' && (
            <g className="animate-in fade-in duration-500">
              {/* Horizontal Laser Spine */}
              <line x1="120" y1="190" x2="840" y2="190" stroke="url(#purple-laser)" strokeWidth="3.5" />

              {/* Traveling Pulse Beam */}
              <circle r="5" fill="#EA580C">
                <animate attributeName="cx" from="120" to="840" dur="2.0s" repeatCount="indefinite" />
                <animate attributeName="cy" from="190" to="190" dur="2.0s" repeatCount="indefinite" />
              </circle>

              {/* 4 Gates Capsules */}
              {[
                { phase: '01 DISCOVER', gate: 'Gate 1', desc: 'Data & API Readiness', x: 180, pass: true },
                { phase: '02 BUILD', gate: 'Gate 2', desc: 'Architecture & Security', x: 380, pass: true },
                { phase: '03 OPERATE', gate: 'Gate 3', desc: 'UAT & Controlled Run', x: 580, pass: true },
                { phase: '04 TRANSFER', gate: 'Gate 4', desc: 'Handover & Adoption', x: 780, pass: true },
              ].map((gItem, idx) => (
                <g key={`spine-gate-${idx}`}>
                  {/* Outer Gate Disc */}
                  <circle cx={gItem.x} cy="190" r="22" fill="#0F172A" stroke={idx === 3 ? '#EA580C' : '#A855F7'} strokeWidth="2.5" />
                  <circle cx={gItem.x} cy="190" r="10" fill={idx === 3 ? '#EA580C' : '#7000FF'} />

                  {/* Phase Label Above */}
                  <text x={gItem.x} y="135" textAnchor="middle" fill="#E2E8F0" fontSize="12" fontFamily="monospace" fontWeight="800">
                    {gItem.phase}
                  </text>
                  <text x={gItem.x} y="152" textAnchor="middle" fill="#A855F7" fontSize="10" fontFamily="monospace" fontWeight="600">
                    {gItem.gate}
                  </text>

                  {/* Checkpoint Detail Below */}
                  <rect x={gItem.x - 70} y="225" width="140" height="34" rx="6" fill="#1E1B4B" stroke="#3730A3" strokeWidth="1" />
                  <text x={gItem.x} y="246" textAnchor="middle" fill="#CBD5E1" fontSize="9" fontFamily="monospace" fontWeight="500">
                    {gItem.desc}
                  </text>

                  {/* Status Indicator */}
                  <circle cx={gItem.x + 55} cy="232" r="3.5" fill="#10B981" />
                </g>
              ))}
            </g>
          )}

          {/* ================================================================ */}
          {/* SCENE 4: 04 TRANSFER — 5 TALENT LEVELS ELEVATING TO SELF-SOVEREIGN */}
          {/* ================================================================ */}
          {activeState === 'transfer' && (
            <g className="animate-in fade-in duration-500">
              {/* Ascending Capability Staircase */}
              {[
                { lvl: 'LEVEL 1', name: 'AI Aware', role: 'Phổ cập tư duy & bảo mật', x: 120, y: 290 },
                { lvl: 'LEVEL 2', name: 'AI User', role: 'Thành thạo Prompt & Tool', x: 260, y: 250 },
                { lvl: 'LEVEL 3', name: 'AI Superuser', role: 'Xây dựng SOP tự động hóa', x: 400, y: 200 },
                { lvl: 'LEVEL 4', name: 'AI Builder', role: 'Tự cấu hình Custom Agents', x: 550, y: 150 },
                { lvl: 'LEVEL 5', name: 'AI Master', role: 'Chủ trì AI Center of Excellence', x: 700, y: 100 },
              ].map((tier, idx) => (
                <g key={`talent-step-${idx}`}>
                  {/* Connecting Stair Line to next tier */}
                  {idx < 4 && (
                    <line
                      x1={tier.x}
                      y1={tier.y}
                      x2={tier.x + 140}
                      y2={tier.y - 45}
                      stroke="#8B5CF6"
                      strokeWidth="2.0"
                      strokeDasharray="3 3"
                    />
                  )}

                  {/* Step Node */}
                  <circle cx={tier.x} cy={tier.y} r="14" fill="#0F172A" stroke="#A855F7" strokeWidth="2" />
                  <text x={tier.x} y={tier.y + 4} textAnchor="middle" fill="#F8FAFC" fontSize="9" fontFamily="monospace" fontWeight="bold">
                    L{idx + 1}
                  </text>

                  {/* Label Annotation */}
                  <text x={tier.x} y={tier.y + 30} textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="monospace" fontWeight="700">
                    {tier.name}
                  </text>
                  <text x={tier.x} y={tier.y + 44} textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="sans-serif">
                    {tier.role}
                  </text>
                </g>
              ))}

              {/* Destination Beacon: TỰ CHỦ */}
              <g transform="translate(850, 80)">
                <circle cx="0" cy="0" r="38" fill="url(#engine-core-sun)" filter="drop-shadow(0 0 25px rgba(234,88,12,0.8))" />
                <circle cx="0" cy="0" r="38" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
                <text x="0" y="-3" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontFamily="monospace" fontWeight="900" letterSpacing="0.1em">
                  TỰ CHỦ
                </text>
                <text x="0" y="12" textAnchor="middle" fill="#FFF7ED" fontSize="7.5" fontFamily="monospace" fontWeight="600">
                  SOVEREIGNTY
                </text>
              </g>
            </g>
          )}
        </svg>
      </div>

      {/* Bottom Architectural Legend */}
      <div className="mt-6 pt-5 border-t border-black/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#6E6E6E]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7000FF]" />
            <span>Phân tích &amp; Thiết kế</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]" />
            <span>Kiểm soát rủi ro &amp; Kết quả</span>
          </span>
        </div>

        <div className="text-[11px] text-[#515151]">
          Nguyên tắc: <strong className="text-[#17151A]">Vận hành → Kết quả → Tự chủ</strong> (North Star)
        </div>
      </div>
    </div>
  );
}
