'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Activity, Cpu, ShieldCheck, Award, ArrowRight, ArrowUpRight } from 'lucide-react';

export type MethodState = 'discover' | 'build' | 'operate' | 'transfer';

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
    id: 'discover',
    num: '01',
    name: 'DISCOVER · Chẩn đoán',
    question: 'Xác định năng lực đang cản AI tạo giá trị',
    badge: '6 Năng Lực · Gate 1',
    icon: Activity,
  },
  {
    id: 'build',
    num: '02',
    name: 'BUILD · Thiết kế & Xây dựng',
    question: 'Quy trình, dữ liệu & KPI theo chuẩn an toàn',
    badge: '3 Nguyên Tắc · Gate 2',
    icon: Cpu,
  },
  {
    id: 'operate',
    num: '03',
    name: 'OPERATE · Vận hành kiểm soát',
    question: 'Đo lường từ baseline đến kết quả thực tế',
    badge: '3 Lớp Metric · Gate 3',
    icon: ShieldCheck,
  },
  {
    id: 'transfer',
    num: '04',
    name: 'TRANSFER · Chuyển giao tự chủ',
    question: 'Đội ngũ làm chủ, Sunext lùi khỏi trung tâm',
    badge: '5 Tầng Năng Lực · Gate 4',
    icon: Award,
  },
];

export function SunextMethodVisualEngine() {
  const [activeState, setActiveState] = useState<MethodState>('discover');
  const [isUserInteracted, setIsUserInteracted] = useState<boolean>(false);

  // Auto-cycle through states every 7.5 seconds if user hasn't explicitly clicked
  useEffect(() => {
    if (isUserInteracted) return;
    const interval = setInterval(() => {
      setActiveState((prev) => {
        if (prev === 'discover') return 'build';
        if (prev === 'build') return 'operate';
        if (prev === 'operate') return 'transfer';
        return 'discover';
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
            activeState === 'discover'
              ? 'radial-gradient(circle, rgba(112,0,255,0.18) 0%, transparent 70%)'
              : activeState === 'build'
              ? 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)'
              : activeState === 'operate'
              ? 'radial-gradient(circle, rgba(234,88,12,0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)',
        }}
      />

      {/* Top Controller Header: 4 Interactive Linear Verbs */}
      <div className="relative z-10 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-black/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
              <span className="text-xs font-mono font-bold tracking-wider text-[#EA580C] uppercase">
                VẬN HÀNH → KẾT QUẢ → TỰ CHỦ
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-light text-[#17151A] tracking-tight">
              Một Xương Sống Duy Nhất: Discover → Build → Operate → Transfer
            </h3>
          </div>

          <div className="text-xs font-mono text-[#747474]">
            Chặng hiện tại:{' '}
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
                    ? 'bg-[#FAF5FF] border-[#7000FF] shadow-xs ring-1 ring-[#7000FF]/20'
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

      {/* Main Dynamic Canvas Viewport (960 x 380 SVG) */}
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

            <radialGradient id="client-core-emerald" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ECFDF5" />
              <stop offset="35%" stopColor="#A7F3D0" />
              <stop offset="70%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#047857" />
            </radialGradient>

            <filter id="laser-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ================================================================ */}
          {/* SCENE 1: 01 DISCOVER — 6 NĂNG LỰC TỔ CHỨC (REWIRED RADIAL MESH)  */}
          {/* Deep Domain Network morphs into 6 Enterprise Capabilities        */}
          {/* ================================================================ */}
          {activeState === 'discover' && (
            <g className="animate-in fade-in zoom-in-95 duration-500">
              {/* Visual Operating System continuity: faint phyllotaxis halo seeds in background */}
              {[40, 95, 150, 205, 260, 315].map((angle, idx) => {
                const rad = (angle * Math.PI) / 180;
                const fx = 480 + 175 * Math.cos(rad);
                const fy = 190 + 115 * Math.sin(rad);
                return (
                  <circle
                    key={`seed-bg-${idx}`}
                    cx={fx}
                    cy={fy}
                    r="2"
                    fill="#A855F7"
                    opacity="0.35"
                  />
                );
              })}

              {/* Radial Benchmark Rings */}
              <circle cx="480" cy="190" r="140" stroke="#334155" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.4" />
              <circle cx="480" cy="190" r="95" stroke="#475569" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.5" />
              <circle cx="480" cy="190" r="50" stroke="#64748B" strokeWidth="0.8" opacity="0.6" />

              {/* 6 Axes: Strategy, Talent, Operating Model, Technology, Data, Adoption & Scale */}
              {[
                { label: 'STRATEGY (Roadmap)', x: 480, y: 40, score: 'Mức 2/4' },
                { label: 'TALENT (Skills)', x: 640, y: 110, score: 'Mức 1/4' },
                { label: 'OPERATING MODEL (SOP)', x: 640, y: 250, score: 'Mức 2/4' },
                { label: 'TECHNOLOGY (VPC)', x: 480, y: 310, score: 'Mức 3/4' },
                { label: 'DATA (Single Source)', x: 320, y: 250, score: 'Điểm nghẽn (1/4)' },
                { label: 'ADOPTION & SCALE', x: 320, y: 110, score: 'Mức 2/4' },
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
                points="480,72 610,125 585,225 480,275 375,225 365,120"
                fill="rgba(112,0,255,0.22)"
                stroke="#C084FC"
                strokeWidth="2.0"
              />

              {/* Center Core Scanner */}
              <circle cx="480" cy="190" r="16" fill="#0F172A" stroke="#EA580C" strokeWidth="2" />
              <circle cx="480" cy="190" r="7" fill="#EA580C" />
              <text x="480" y="194" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">SUN</text>

              {/* Gate 1 Checkpoint Badge */}
              <g transform="translate(730, 30)">
                <rect x="0" y="0" width="200" height="30" rx="6" fill="#1E1B4B" stroke="#7000FF" strokeWidth="1" />
                <circle cx="16" cy="15" r="4" fill="#10B981" />
                <text x="28" y="19" fill="#E2E8F0" fontSize="9.5" fontFamily="monospace" fontWeight="700">
                  GATE 1 · USE-CASE &amp; SCOPE
                </text>
              </g>

              {/* Header Metaphor annotation */}
              <text x="480" y="380" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">
                Mạng lưới chuyên môn hội tụ về 6 năng lực tổ chức · Tham chiếu McKinsey Rewired
              </text>
            </g>
          )}

          {/* ================================================================ */}
          {/* SCENE 2: 02 BUILD — 3 THREADS CONVERGING THROUGH GATE 2          */}
          {/* Process ➔ Data ➔ KPI through Architecture Gate                   */}
          {/* ================================================================ */}
          {activeState === 'build' && (
            <g className="animate-in fade-in duration-500">
              {/* Technical Depth Spec Banner */}
              <g transform="translate(120, 30)">
                <rect x="0" y="0" width="720" height="28" rx="6" fill="#1E1B4B" stroke="#3730A3" strokeWidth="0.8" />
                <text x="360" y="18" textAnchor="middle" fill="#CBD5E1" fontSize="10" fontFamily="monospace" fontWeight="600">
                  4 CẤP ĐỘ TRIỂN KHAI KỸ THUẬT: L1 Enablement → L2 Automation → L3 Department OS → L4 Deep Integration
                </text>
              </g>

              {/* Lane 1: QUY TRÌNH (Process before tool) */}
              <path
                d="M 120 110 C 350 110, 480 170, 720 190"
                stroke="#A855F7"
                strokeWidth="2.5"
                fill="none"
              />
              <circle cx="120" cy="110" r="7" fill="#7000FF" />
              <text x="140" y="98" fill="#F8FAFC" fontSize="11" fontFamily="monospace" fontWeight="700">
                01 QUY TRÌNH TRƯỚC CÔNG CỤ · SOP Re-engineering
              </text>
              <circle r="3.5" fill="#C084FC">
                <animateMotion path="M 120 110 C 350 110, 480 170, 720 190" dur="2.4s" repeatCount="indefinite" />
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
              <text x="140" y="178" fill="#F8FAFC" fontSize="11" fontFamily="monospace" fontWeight="700">
                02 DỮ LIỆU PHẢI KẾT NỐI · Vector DB &amp; Private VPC
              </text>
              <circle r="3.5" fill="#38BDF8">
                <animateMotion path="M 120 190 L 720 190" dur="2.0s" repeatCount="indefinite" />
              </circle>

              {/* Lane 3: KPI (Impact before AI) */}
              <path
                d="M 120 270 C 350 270, 480 210, 720 190"
                stroke="#EA580C"
                strokeWidth="2.5"
                fill="none"
              />
              <circle cx="120" cy="270" r="7" fill="#EA580C" />
              <text x="140" y="258" fill="#F8FAFC" fontSize="11" fontFamily="monospace" fontWeight="700">
                03 KPI TRƯỚC AI · P&amp;L Metric Baseline
              </text>
              <circle r="3.5" fill="#FB923C">
                <animateMotion path="M 120 270 C 350 270, 480 210, 720 190" dur="2.2s" repeatCount="indefinite" />
              </circle>

              {/* Vertical Checkpoint Line: GATE 2 */}
              <line x1="520" y1="80" x2="520" y2="300" stroke="#7000FF" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.7" />
              <rect x="470" y="315" width="100" height="22" rx="4" fill="#1E1B4B" stroke="#7000FF" strokeWidth="0.8" />
              <text x="520" y="329" textAnchor="middle" fill="#A855F7" fontSize="9" fontFamily="monospace" fontWeight="700">
                GATE 2: SECURITY
              </text>

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
          {/* SCENE 3: 03 OPERATE — 4 GATES SPINE WITH 3-LAYER METRIC TELEMETRY */}
          {/* Operational, Adoption & Business metrics during Controlled Run   */}
          {/* ================================================================ */}
          {activeState === 'operate' && (
            <g className="animate-in fade-in duration-500">
              {/* Horizontal Laser Spine */}
              <line x1="120" y1="130" x2="840" y2="130" stroke="url(#purple-laser)" strokeWidth="3.5" />

              {/* Traveling Pulse Beam */}
              <circle r="5" fill="#EA580C">
                <animate attributeName="cx" from="120" to="840" dur="2.0s" repeatCount="indefinite" />
                <animate attributeName="cy" from="130" to="130" dur="2.0s" repeatCount="indefinite" />
              </circle>

              {/* 4 Gates Spine Capsules */}
              {[
                { phase: '01 DISCOVER', gate: 'Gate 1', desc: 'Scope & Data Audit', x: 180, active: false },
                { phase: '02 BUILD', gate: 'Gate 2', desc: 'Private VPC & Security', x: 380, active: false },
                { phase: '03 OPERATE', gate: 'Gate 3 · UAT', desc: 'Controlled Run in Prod', x: 580, active: true },
                { phase: '04 TRANSFER', gate: 'Gate 4', desc: 'Handover & Adoption', x: 780, active: false },
              ].map((gItem, idx) => (
                <g key={`spine-gate-${idx}`}>
                  {/* Gate Outer Ring */}
                  <circle
                    cx={gItem.x}
                    cy="130"
                    r={gItem.active ? 24 : 18}
                    fill="#0F172A"
                    stroke={gItem.active ? '#EA580C' : '#A855F7'}
                    strokeWidth={gItem.active ? 3 : 1.5}
                    filter={gItem.active ? 'url(#laser-glow)' : 'none'}
                  />
                  <circle cx={gItem.x} cy="130" r={gItem.active ? 10 : 7} fill={gItem.active ? '#EA580C' : '#7000FF'} />

                  {/* Phase Label Above */}
                  <text x={gItem.x} y="85" textAnchor="middle" fill="#E2E8F0" fontSize="11" fontFamily="monospace" fontWeight="800">
                    {gItem.phase}
                  </text>
                  <text x={gItem.x} y="100" textAnchor="middle" fill={gItem.active ? '#EA580C' : '#A855F7'} fontSize="9.5" fontFamily="monospace" fontWeight="700">
                    {gItem.gate}
                  </text>

                  {/* Checkpoint Detail Below */}
                  <rect x={gItem.x - 65} y="165" width="130" height="28" rx="6" fill="#1E1B4B" stroke={gItem.active ? '#EA580C' : '#3730A3'} strokeWidth="1" />
                  <text x={gItem.x} y="182" textAnchor="middle" fill="#CBD5E1" fontSize="8.5" fontFamily="monospace" fontWeight="500">
                    {gItem.desc}
                  </text>
                </g>
              ))}

              {/* 3 Telemetry Metric Cards for Controlled Run (Operate) */}
              <g transform="translate(120, 220)">
                {/* 1. Operational */}
                <g transform="translate(0, 0)">
                  <rect x="0" y="0" width="220" height="95" rx="8" fill="#13111C" stroke="#33294D" strokeWidth="1" />
                  <text x="14" y="24" fill="#A855F7" fontSize="10" fontFamily="monospace" fontWeight="700">
                    01 VẬN HÀNH · Operational
                  </text>
                  <text x="14" y="52" fill="#FFFFFF" fontSize="20" fontFamily="monospace" fontWeight="700">
                    −67%
                  </text>
                  <text x="14" y="74" fill="#94A3B8" fontSize="9" fontFamily="sans-serif">
                    Thời gian chu kỳ SOP · Ngoại lệ &lt; 2%
                  </text>
                </g>

                {/* 2. Adoption */}
                <g transform="translate(250, 0)">
                  <rect x="0" y="0" width="220" height="95" rx="8" fill="#13111C" stroke="#33294D" strokeWidth="1" />
                  <text x="14" y="24" fill="#38BDF8" fontSize="10" fontFamily="monospace" fontWeight="700">
                    02 ÁP DỤNG · Adoption
                  </text>
                  <text x="14" y="52" fill="#FFFFFF" fontSize="20" fontFamily="monospace" fontWeight="700">
                    &gt;85%
                  </text>
                  <text x="14" y="74" fill="#94A3B8" fontSize="9" fontFamily="sans-serif">
                    Nhân sự kích hoạt hàng ngày (DAU/MAU)
                  </text>
                </g>

                {/* 3. Business / P&L */}
                <g transform="translate(500, 0)">
                  <rect x="0" y="0" width="220" height="95" rx="8" fill="#13111C" stroke="#EA580C" strokeWidth="1.2" />
                  <text x="14" y="24" fill="#EA580C" fontSize="10" fontFamily="monospace" fontWeight="700">
                    03 KINH DOANH · Business P&amp;L
                  </text>
                  <text x="14" y="52" fill="#FFFFFF" fontSize="20" fontFamily="monospace" fontWeight="700">
                    ĐO TỪ BASELINE
                  </text>
                  <text x="14" y="74" fill="#CBD5E1" fontSize="9" fontFamily="sans-serif">
                    ROI thật trước khi duyệt scale Gate 4
                  </text>
                </g>
              </g>

              {/* Bottom Guardrail Note */}
              <text x="480" y="355" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">
                Human-in-the-loop (HITL): Giám sát thời gian thực &amp; rà soát ngoại lệ trước khi mở rộng
              </text>
            </g>
          )}

          {/* ================================================================ */}
          {/* SCENE 4: 04 TRANSFER — THE MASTER VISUAL METAPHOR FOR SOVEREIGNTY */}
          {/* Sunext steps outside of center ➔ CLIENT TEAM becomes the core!   */}
          {/* "Sunext xây năng lực để chính mình không còn phải đứng ở tâm."    */}
          {/* ================================================================ */}
          {activeState === 'transfer' && (
            <g className="animate-in fade-in duration-500">
              {/* Left Advisory Satellite: SUNEXT (Steps outward from center) */}
              <g transform="translate(170, 185)">
                <circle cx="0" cy="0" r="50" fill="none" stroke="#7000FF" strokeWidth="1" strokeDasharray="3 4" opacity="0.5">
                  <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="25s" repeatCount="indefinite" />
                </circle>
                <circle cx="0" cy="0" r="36" fill="#1E1338" stroke="#7000FF" strokeWidth="2" />
                <circle cx="0" cy="0" r="8" fill="#EA580C" />
                <text x="0" y="-8" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="800">
                  SUNEXT
                </text>
                <text x="0" y="8" textAnchor="middle" fill="#A855F7" fontSize="7.5" fontFamily="monospace" fontWeight="600">
                  CỐ VẤN NGOÀI
                </text>
                <text x="0" y="20" textAnchor="middle" fill="#94A3B8" fontSize="7" fontFamily="sans-serif">
                  Bảo hành &amp; R&amp;D
                </text>
              </g>

              {/* Dynamic Handover Flow: Curved energy beam passing ownership to Client Team */}
              <path
                d="M 220 185 C 330 185, 410 185, 480 185"
                stroke="url(#purple-laser)"
                strokeWidth="3.5"
                fill="none"
              />
              <circle r="4.5" fill="#10B981">
                <animateMotion path="M 220 185 C 330 185, 410 185, 480 185" dur="1.8s" repeatCount="indefinite" />
              </circle>

              {/* Handover Bridge Pill */}
              <g transform="translate(270, 140)">
                <rect x="0" y="0" width="165" height="26" rx="6" fill="#064E3B" stroke="#10B981" strokeWidth="1" />
                <text x="82" y="17" textAnchor="middle" fill="#ECFDF5" fontSize="8.5" fontFamily="monospace" fontWeight="700">
                  GATE 4: IP &amp; ADMIN BÀN GIAO ➔
                </text>
              </g>

              {/* The New Radiant Nucleus: ĐỘI NGŨ DOANH NGHIỆP (CLIENT TEAM) */}
              <g transform="translate(560, 185)">
                {/* Orbiting Talent Capability Seeds around the Client Team */}
                {[0, 72, 144, 216, 288].map((angle, idx) => {
                  const rad = (angle * Math.PI) / 180;
                  const tx = 95 * Math.cos(rad);
                  const ty = 80 * Math.sin(rad);
                  const names = ['L1 Aware', 'L2 User', 'L3 Superuser', 'L4 Builder', 'L5 Master'];
                  return (
                    <g key={`orbit-talent-${idx}`} transform={`translate(${tx}, ${ty})`}>
                      <line x1="0" y1="0" x2={-tx * 0.4} y2={-ty * 0.4} stroke="#10B981" strokeWidth="0.8" opacity="0.4" />
                      <circle cx="0" cy="0" r="10" fill="#064E3B" stroke="#34D399" strokeWidth="1.5" />
                      <text x="0" y="3" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontFamily="monospace" fontWeight="bold">
                        {idx + 1}
                      </text>
                      <text x="0" y="18" textAnchor="middle" fill="#CBD5E1" fontSize="7.5" fontFamily="monospace">
                        {names[idx]}
                      </text>
                    </g>
                  );
                })}

                {/* Rotating Knowledge Halo */}
                <circle cx="0" cy="0" r="62" fill="none" stroke="#10B981" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.6">
                  <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="30s" repeatCount="indefinite" />
                </circle>

                {/* Main Client Team Core: Radiant Sovereign Sun */}
                <circle cx="0" cy="0" r="44" fill="url(#client-core-emerald)" filter="drop-shadow(0 0 25px rgba(16,185,129,0.5))" />
                <circle cx="0" cy="0" r="44" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.9" />

                <text x="0" y="-8" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="monospace" fontWeight="800" letterSpacing="0.08em">
                  ĐỘI NGŨ
                </text>
                <text x="0" y="6" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="800" letterSpacing="0.08em">
                  DOANH NGHIỆP
                </text>
                <text x="0" y="19" textAnchor="middle" fill="#ECFDF5" fontSize="7.5" fontFamily="monospace" fontWeight="600">
                  TỰ CHỦ 100%
                </text>
              </g>

              {/* Right Side: Key Outcomes of Sovereignty */}
              <g transform="translate(730, 95)">
                <rect x="0" y="0" width="190" height="180" rx="10" fill="#062E25" stroke="#10B981" strokeWidth="1" />
                <text x="16" y="26" fill="#34D399" fontSize="10.5" fontFamily="monospace" fontWeight="700">
                  TỰ CHỦ HOÀN TOÀN
                </text>

                <g transform="translate(16, 45)" className="space-y-3">
                  <text x="0" y="0" fill="#ECFDF5" fontSize="9.5" fontFamily="sans-serif" fontWeight="600">
                    ✓ Sở hữu 100% mã nguồn &amp; IP
                  </text>
                  <text x="0" y="24" fill="#ECFDF5" fontSize="9.5" fontFamily="sans-serif" fontWeight="600">
                    ✓ Bộ Runbook SOP chuẩn hóa
                  </text>
                  <text x="0" y="48" fill="#ECFDF5" fontSize="9.5" fontFamily="sans-serif" fontWeight="600">
                    ✓ Đội ngũ nội bộ tự tinh chỉnh Prompt
                  </text>
                  <text x="0" y="72" fill="#ECFDF5" fontSize="9.5" fontFamily="sans-serif" fontWeight="600">
                    ✓ Không phụ thuộc vendor ngoài
                  </text>
                  <text x="0" y="96" fill="#34D399" fontSize="9" fontFamily="monospace">
                    Sovereign AI Operation
                  </text>
                </g>
              </g>

              {/* Core Philosophy Statement: The ultimate Brand Promise */}
              <g transform="translate(480, 345)">
                <rect x="-260" y="-14" width="520" height="28" rx="14" fill="#064E3B" stroke="#34D399" strokeWidth="1" opacity="0.9" />
                <text x="0" y="4" textAnchor="middle" fill="#ECFDF5" fontSize="11" fontFamily="sans-serif" fontWeight="600">
                  “Sunext xây năng lực để chính mình không còn phải đứng ở trung tâm.”
                </text>
              </g>
            </g>
          )}
        </svg>
      </div>

      {/* Bottom Horizontal Guardrail Banner */}
      <div className="mt-6 pt-5 border-t border-black/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#6E6E6E]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
          <span className="text-[#17151A] font-semibold">RÀO CHẮN XUYÊN SUỐT:</span>
          <span>GOVERNANCE · SECURITY · HUMAN-IN-THE-LOOP (HITL)</span>
          <span className="text-[#A1A1AA] hidden lg:inline">— Bảo vệ dữ liệu, kiểm soát rủi ro và phê duyệt hai lớp ở mọi chặng.</span>
        </div>

        <Link
          href="/phap-ly-bao-mat"
          className="text-[#7000FF] font-semibold hover:underline inline-flex items-center gap-1 shrink-0"
        >
          <span>Khung 3 Tầng Bảo Mật</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
