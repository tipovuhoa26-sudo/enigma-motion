'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Activity, Cpu, ShieldCheck, Award, ArrowUpRight } from 'lucide-react';

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
    <div className="w-full relative py-6">
      {/* Top Controller Header: 4 Interactive Linear Verbs (Borderless on Canvas) */}
      <div className="relative z-10 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#EAE6DF]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
            <span className="text-xs font-mono font-semibold tracking-wider text-[#0A0A0A] uppercase">
              BỐN CHẶNG THỰC THI KIỂM SOÁT
            </span>
          </div>

          <div className="text-xs font-mono text-[#747474]">
            Chặng đang xem:{' '}
            <span className="font-semibold text-[#581C87] uppercase">
              {TABS.find((t) => t.id === activeState)?.num} — {TABS.find((t) => t.id === activeState)?.name}
            </span>
          </div>
        </div>

        {/* 4 Interactive Verb Tabs with Hairline Separators (No giant card shell) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6">
          {TABS.map((tab) => {
            const isActive = activeState === tab.id;
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => handleSelectTab(tab.id)}
                className={`text-left p-4 rounded-xl transition-all border cursor-pointer relative ${
                  isActive
                    ? 'bg-[#F4F1EA] border-[#581C87] shadow-xs'
                    : 'bg-white/80 hover:bg-white border-[#EAE6DF] hover:border-[#D4D0C7] text-[#6E6E6E]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? 'text-[#581C87]' : 'text-[#747474]'
                    }`}
                  >
                    {tab.num}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? 'text-[#581C87]' : 'text-[#A1A1AA]'
                    }`}
                  />
                </div>
                <div
                  className={`text-sm font-semibold tracking-tight ${
                    isActive ? 'text-[#0A0A0A]' : 'text-[#515151]'
                  }`}
                >
                  {tab.name}
                </div>
                <div className="text-[11px] text-[#747474] font-light mt-1 line-clamp-1">
                  {tab.question}
                </div>
                <div className="mt-2.5">
                  <span
                    className={`text-[9.5px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
                      isActive
                        ? 'bg-[#581C87] text-white font-semibold'
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

      {/* Main Dynamic Canvas Viewport (Deep Charcoal Canvas matching Stage-Gate & Transfer) */}
      <div className="relative z-10 w-full aspect-[16/8] sm:aspect-[16/7] md:aspect-[16/6] bg-[#100E17] rounded-xl p-4 sm:p-6 overflow-hidden border border-[#272138] shadow-inner flex items-center justify-center">
        {/* Subtle Aubergine Grid Background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #6B21A8 1px, transparent 0)',
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
              <stop offset="0%" stopColor="#581C87" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#EA580C" stopOpacity="0.9" />
            </linearGradient>

            <radialGradient id="engine-core-sun" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF7ED" />
              <stop offset="35%" stopColor="#FFBF75" />
              <stop offset="70%" stopColor="#EA580C" />
              <stop offset="100%" stopColor="#C2410C" />
            </radialGradient>

            <radialGradient id="client-core-orange" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF7ED" />
              <stop offset="35%" stopColor="#FED7AA" />
              <stop offset="70%" stopColor="#EA580C" />
              <stop offset="100%" stopColor="#9A3412" />
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
          {/* SCENE 1: 01 DISCOVER — 6 NĂNG LỰC TỔ CHỨC                          */}
          {/* ================================================================ */}
          {activeState === 'discover' && (
            <g className="animate-in fade-in zoom-in-95 duration-500">
              {/* Perimeter Knowledge Network Connections */}
              <polygon
                points="480,70 630,130 630,250 480,310 330,250 330,130"
                fill="none"
                stroke="#581C87"
                strokeWidth="1"
                strokeDasharray="3 3"
                opacity="0.45"
              />

              {/* Cross Connections */}
              <line x1="480" y1="70" x2="480" y2="310" stroke="#332B45" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.4" />
              <line x1="330" y1="130" x2="630" y2="250" stroke="#332B45" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.4" />
              <line x1="330" y1="250" x2="630" y2="130" stroke="#332B45" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.4" />

              {/* 6 Capability Nodes in Shared Grammar */}
              {[
                { label: 'CHIẾN LƯỢC', x: 480, y: 70, condition: 'Mục tiêu P&L' },
                { label: 'CÔNG NGHỆ', x: 630, y: 130, condition: 'Private VPC & API' },
                { label: 'DỮ LIỆU', x: 630, y: 250, condition: 'Single Source of Truth' },
                { label: 'ÁP DỤNG & MỞ RỘNG', x: 480, y: 310, condition: 'Nhân rộng phòng ban' },
                { label: 'VẬN HÀNH', x: 330, y: 250, condition: 'SOP & Vai trò Người-AI' },
                { label: 'CON NGƯỜI', x: 330, y: 130, condition: 'Đào tạo thực chiến' },
              ].map((axis, i) => (
                <g key={`diag-axis-${i}`}>
                  <line
                    x1="480"
                    y1="190"
                    x2={axis.x}
                    y2={axis.y}
                    stroke="#581C87"
                    strokeWidth="1.2"
                    opacity="0.6"
                  />
                  <circle cx={axis.x} cy={axis.y} r="8" fill="#181524" stroke="#6B21A8" strokeWidth="1.8" />
                  <circle cx={axis.x} cy={axis.y} r="3" fill="#E2E8F0" />
                  <text
                    x={axis.x}
                    y={axis.y > 190 ? axis.y + 20 : axis.y - 14}
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight="700"
                    letterSpacing="0.06em"
                  >
                    {axis.label}
                  </text>
                  <text
                    x={axis.x}
                    y={axis.y > 190 ? axis.y + 32 : axis.y - 25}
                    textAnchor="middle"
                    fill="#94A3B8"
                    fontSize="9.5"
                    fontFamily="sans-serif"
                  >
                    {axis.condition}
                  </text>
                </g>
              ))}

              {/* Center Core Scanner */}
              <circle cx="480" cy="190" r="22" fill="#181524" stroke="#EA580C" strokeWidth="2" />
              <circle cx="480" cy="190" r="7" fill="#EA580C" />
              <text x="480" y="193" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold">SUNEXT</text>

              {/* Gate 1 Checkpoint Badge */}
              <g transform="translate(730, 30)">
                <rect x="0" y="0" width="190" height="28" rx="6" fill="#1A1528" stroke="#581C87" strokeWidth="1" />
                <circle cx="14" cy="14" r="3.5" fill="#EA580C" />
                <text x="24" y="18" fill="#E2E8F0" fontSize="9.5" fontFamily="monospace" fontWeight="700">
                  CỔNG 1 · BÀI TOÁN &amp; PHẠM VI
                </text>
              </g>

              {/* Header Metaphor annotation */}
              <text x="480" y="360" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">
                Mạng lưới 6 trụ cột năng lực tổ chức · Tham chiếu McKinsey Rewired
              </text>
            </g>
          )}

          {/* ================================================================ */}
          {/* SCENE 2: 02 BUILD — 3 THREADS CONVERGING THROUGH GATE 2          */}
          {/* ================================================================ */}
          {activeState === 'build' && (
            <g className="animate-in fade-in duration-500">
              {/* Technical Depth Spec Banner */}
              <g transform="translate(120, 30)">
                <rect x="0" y="0" width="720" height="28" rx="6" fill="#1A1528" stroke="#332B45" strokeWidth="0.8" />
                <text x="360" y="18" textAnchor="middle" fill="#CBD5E1" fontSize="10" fontFamily="monospace" fontWeight="600">
                  4 CẤP ĐỘ TRIỂN KHAI KỸ THUẬT: L1 Enablement → L2 Automation → L3 Department OS → L4 Deep Integration
                </text>
              </g>

              {/* Lane 1: QUY TRÌNH (Process before tool) */}
              <path
                d="M 120 110 C 350 110, 480 170, 720 190"
                stroke="#6B21A8"
                strokeWidth="2.2"
                fill="none"
              />
              <circle cx="120" cy="110" r="7" fill="#581C87" />
              <text x="140" y="98" fill="#F8FAFC" fontSize="11" fontFamily="monospace" fontWeight="700">
                01 QUY TRÌNH TRƯỚC CÔNG CỤ · SOP Re-engineering
              </text>

              {/* Lane 2: DỮ LIỆU (Single Source of Truth) */}
              <path
                d="M 120 190 L 720 190"
                stroke="#8B5CF6"
                strokeWidth="2.5"
                strokeDasharray="6 4"
                fill="none"
              />
              <circle cx="120" cy="190" r="7" fill="#8B5CF6" />
              <text x="140" y="178" fill="#F8FAFC" fontSize="11" fontFamily="monospace" fontWeight="700">
                02 DỮ LIỆU PHẢI KẾT NỐI · Vector Mesh &amp; API
              </text>

              {/* Lane 3: KPI TRƯỚC AI (ROI & Measurement) */}
              <path
                d="M 120 270 C 350 270, 480 210, 720 190"
                stroke="#EA580C"
                strokeWidth="2.2"
                fill="none"
              />
              <circle cx="120" cy="270" r="7" fill="#EA580C" />
              <text x="140" y="258" fill="#F8FAFC" fontSize="11" fontFamily="monospace" fontWeight="700">
                03 KPI TRƯỚC AI · Business Metric Contract
              </text>

              {/* Gate 2 Checkpoint Hub */}
              <circle cx="720" cy="190" r="30" fill="#181524" stroke="#EA580C" strokeWidth="2.5" />
              <circle cx="720" cy="190" r="10" fill="#EA580C" />
              <text x="720" y="235" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="monospace" fontWeight="700">
                CỔNG 2 · DUYỆT KIẾN TRÚC
              </text>

              {/* Converged Outcome Pill */}
              <g transform="translate(760, 175)">
                <rect x="0" y="0" width="130" height="30" rx="6" fill="#1A1528" stroke="#EA580C" strokeWidth="1" />
                <text x="65" y="19" textAnchor="middle" fill="#FED7AA" fontSize="10" fontFamily="monospace" fontWeight="700">
                  TÁC ĐỘNG KINH TẾ
                </text>
              </g>
            </g>
          )}

          {/* ================================================================ */}
          {/* SCENE 3: 03 OPERATE — 4 GATES SPINE                               */}
          {/* ================================================================ */}
          {activeState === 'operate' && (
            <g className="animate-in fade-in duration-500">
              {/* Horizontal Track Spine */}
              <line x1="120" y1="130" x2="840" y2="130" stroke="url(#purple-laser)" strokeWidth="2.5" />

              {/* Traveling Pulse Bead */}
              <circle r="4" fill="#EA580C">
                <animate attributeName="cx" from="120" to="840" dur="2.2s" repeatCount="indefinite" />
                <animate attributeName="cy" from="130" to="130" dur="2.2s" repeatCount="indefinite" />
              </circle>

              {/* 4 Gates Spine Capsules */}
              {[
                { phase: '01 DISCOVER', gate: 'Gate 1', desc: 'Scope & Data Audit', x: 180, active: false },
                { phase: '02 BUILD', gate: 'Gate 2', desc: 'Private VPC & Security', x: 380, active: false },
                { phase: '03 OPERATE', gate: 'Gate 3 · UAT', desc: 'Controlled Run in Prod', x: 580, active: true },
                { phase: '04 TRANSFER', gate: 'Gate 4', desc: 'Handover & Adoption', x: 780, active: false },
              ].map((gItem, idx) => (
                <g key={`spine-gate-${idx}`}>
                  <circle
                    cx={gItem.x}
                    cy="130"
                    r={gItem.active ? 22 : 16}
                    fill="#181524"
                    stroke={gItem.active ? '#EA580C' : '#581C87'}
                    strokeWidth={gItem.active ? 2.5 : 1.2}
                    filter={gItem.active ? 'url(#laser-glow)' : 'none'}
                  />
                  <circle cx={gItem.x} cy="130" r={gItem.active ? 8 : 5} fill={gItem.active ? '#EA580C' : '#8B5CF6'} />

                  <text x={gItem.x} y="85" textAnchor="middle" fill="#E2E8F0" fontSize="11" fontFamily="monospace" fontWeight="800">
                    {gItem.phase}
                  </text>
                  <text x={gItem.x} y="100" textAnchor="middle" fill={gItem.active ? '#EA580C' : '#A78BFA'} fontSize="9.5" fontFamily="monospace" fontWeight="700">
                    {gItem.gate}
                  </text>

                  <rect x={gItem.x - 65} y="165" width="130" height="28" rx="6" fill="#1A1528" stroke={gItem.active ? '#EA580C' : '#332B45'} strokeWidth="1" />
                  <text x={gItem.x} y="182" textAnchor="middle" fill="#CBD5E1" fontSize="8.5" fontFamily="monospace" fontWeight="500">
                    {gItem.desc}
                  </text>
                </g>
              ))}

              {/* 3 Telemetry Metric Cards */}
              <g transform="translate(120, 220)">
                <g transform="translate(0, 0)">
                  <rect x="0" y="0" width="220" height="95" rx="8" fill="#141120" stroke="#2D253D" strokeWidth="1" />
                  <text x="14" y="24" fill="#A78BFA" fontSize="10" fontFamily="monospace" fontWeight="700">
                    01 VẬN HÀNH · Operational
                  </text>
                  <text x="14" y="52" fill="#FFFFFF" fontSize="20" fontFamily="monospace" fontWeight="700">
                    −67%
                  </text>
                  <text x="14" y="74" fill="#94A3B8" fontSize="9" fontFamily="sans-serif">
                    Thời gian chu kỳ SOP · Ngoại lệ &lt; 2%
                  </text>
                </g>

                <g transform="translate(250, 0)">
                  <rect x="0" y="0" width="220" height="95" rx="8" fill="#141120" stroke="#2D253D" strokeWidth="1" />
                  <text x="14" y="24" fill="#CBD5E1" fontSize="10" fontFamily="monospace" fontWeight="700">
                    02 ÁP DỤNG · Adoption
                  </text>
                  <text x="14" y="52" fill="#FFFFFF" fontSize="20" fontFamily="monospace" fontWeight="700">
                    &gt;85%
                  </text>
                  <text x="14" y="74" fill="#94A3B8" fontSize="9" fontFamily="sans-serif">
                    Nhân sự kích hoạt hàng ngày (DAU/MAU)
                  </text>
                </g>

                <g transform="translate(500, 0)">
                  <rect x="0" y="0" width="220" height="95" rx="8" fill="#141120" stroke="#EA580C" strokeWidth="1.2" />
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
            </g>
          )}

          {/* ================================================================ */}
          {/* SCENE 4: 04 TRANSFER — SOVEREIGNTY PAYOFF (SUNEXT STEPS OUTWARD)  */}
          {/* ================================================================ */}
          {activeState === 'transfer' && (
            <g className="animate-in fade-in duration-500">
              {/* Left Advisory Satellite: SUNEXT */}
              <g transform="translate(170, 185)">
                <circle cx="0" cy="0" r="50" fill="none" stroke="#581C87" strokeWidth="1" strokeDasharray="3 4" opacity="0.4">
                  <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="25s" repeatCount="indefinite" />
                </circle>
                <circle cx="0" cy="0" r="36" fill="#181524" stroke="#581C87" strokeWidth="1.8" />
                <circle cx="0" cy="0" r="8" fill="#EA580C" />
                <text x="0" y="-8" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="800">
                  SUNEXT
                </text>
                <text x="0" y="8" textAnchor="middle" fill="#A78BFA" fontSize="7.5" fontFamily="monospace" fontWeight="600">
                  CỐ VẤN NGOÀI
                </text>
                <text x="0" y="20" textAnchor="middle" fill="#94A3B8" fontSize="7" fontFamily="sans-serif">
                  Bảo hành &amp; R&amp;D
                </text>
              </g>

              {/* Handover Flow Beam */}
              <path
                d="M 220 185 C 330 185, 410 185, 480 185"
                stroke="url(#purple-laser)"
                strokeWidth="2.5"
                fill="none"
              />
              <circle r="4" fill="#EA580C">
                <animateMotion path="M 220 185 C 330 185, 410 185, 480 185" dur="1.8s" repeatCount="indefinite" />
              </circle>

              {/* Handover Bridge Pill */}
              <g transform="translate(270, 140)">
                <rect x="0" y="0" width="165" height="26" rx="6" fill="#1A1528" stroke="#EA580C" strokeWidth="1" />
                <text x="82" y="17" textAnchor="middle" fill="#FED7AA" fontSize="8.5" fontFamily="monospace" fontWeight="700">
                  GATE 4: IP &amp; ADMIN BÀN GIAO ➔
                </text>
              </g>

              {/* The Radiant Nucleus: CLIENT TEAM */}
              <g transform="translate(560, 185)">
                {/* 5 Orbiting Capability Satellites */}
                {[0, 72, 144, 216, 288].map((angle, idx) => {
                  const rad = (angle * Math.PI) / 180;
                  const tx = 95 * Math.cos(rad);
                  const ty = 80 * Math.sin(rad);
                  const names = ['L1 Hiểu', 'L2 Dùng', 'L3 Tự Chạy', 'L4 Xây Dựng', 'L5 Làm Chủ'];
                  return (
                    <g key={`orbit-talent-${idx}`} transform={`translate(${tx}, ${ty})`}>
                      <line x1="0" y1="0" x2={-tx * 0.4} y2={-ty * 0.4} stroke="#EA580C" strokeWidth="0.8" opacity="0.3" />
                      <circle cx="0" cy="0" r="10" fill="#181524" stroke="#EA580C" strokeWidth="1.2" />
                      <text x="0" y="3" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontFamily="monospace" fontWeight="bold">
                        {idx + 1}
                      </text>
                      <text x="0" y="18" textAnchor="middle" fill="#CBD5E1" fontSize="7.5" fontFamily="monospace">
                        {names[idx]}
                      </text>
                    </g>
                  );
                })}

                <circle cx="0" cy="0" r="62" fill="none" stroke="#EA580C" strokeWidth="1" strokeDasharray="4 6" opacity="0.4">
                  <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="30s" repeatCount="indefinite" />
                </circle>

                {/* Main Client Team Core */}
                <circle cx="0" cy="0" r="44" fill="url(#client-core-orange)" filter="drop-shadow(0 0 25px rgba(234,88,12,0.4))" />
                <circle cx="0" cy="0" r="44" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.9" />

                <text x="0" y="-8" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="monospace" fontWeight="800" letterSpacing="0.08em">
                  ĐỘI NGŨ
                </text>
                <text x="0" y="6" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="800" letterSpacing="0.08em">
                  DOANH NGHIỆP
                </text>
                <text x="0" y="19" textAnchor="middle" fill="#FFF7ED" fontSize="7.5" fontFamily="monospace" fontWeight="600">
                  TỰ CHỦ 100%
                </text>
              </g>

              {/* Right Side: Key Outcomes of Sovereignty */}
              <g transform="translate(730, 95)">
                <rect x="0" y="0" width="190" height="180" rx="10" fill="#181524" stroke="#2D253D" strokeWidth="1" />
                <text x="16" y="26" fill="#EA580C" fontSize="10.5" fontFamily="monospace" fontWeight="700">
                  TỰ CHỦ HOÀN TOÀN
                </text>

                <g transform="translate(16, 45)" className="space-y-3">
                  <text x="0" y="0" fill="#E2E8F0" fontSize="9.5" fontFamily="sans-serif" fontWeight="500">
                    ✓ Sở hữu 100% mã nguồn &amp; IP
                  </text>
                  <text x="0" y="24" fill="#E2E8F0" fontSize="9.5" fontFamily="sans-serif" fontWeight="500">
                    ✓ Bộ Runbook SOP chuẩn hóa
                  </text>
                  <text x="0" y="48" fill="#E2E8F0" fontSize="9.5" fontFamily="sans-serif" fontWeight="500">
                    ✓ Tự tinh chỉnh Prompt nội bộ
                  </text>
                  <text x="0" y="72" fill="#E2E8F0" fontSize="9.5" fontFamily="sans-serif" fontWeight="500">
                    ✓ Không phụ thuộc vendor ngoài
                  </text>
                  <text x="0" y="96" fill="#EA580C" fontSize="9" fontFamily="monospace">
                    Sovereign AI Operation
                  </text>
                </g>
              </g>

              {/* Core Philosophy Statement */}
              <g transform="translate(480, 345)">
                <rect x="-260" y="-14" width="520" height="28" rx="14" fill="#181524" stroke="#EA580C" strokeWidth="1" opacity="0.9" />
                <text x="0" y="4" textAnchor="middle" fill="#FED7AA" fontSize="11" fontFamily="sans-serif" fontWeight="600">
                  “Sunext xây năng lực để chính mình không còn phải đứng ở trung tâm.”
                </text>
              </g>
            </g>
          )}
        </svg>
      </div>

      {/* Bottom Horizontal Guardrail Banner */}
      <div className="mt-6 pt-5 border-t border-[#EAE6DF] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#747474]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#581C87] shrink-0" />
          <span className="text-[#0A0A0A] font-semibold">RÀO CHẮN XUYÊN SUỐT:</span>
          <span>GOVERNANCE · SECURITY · HUMAN-IN-THE-LOOP (HITL)</span>
          <span className="text-[#A1A1AA] hidden lg:inline">— Bảo vệ dữ liệu, kiểm soát rủi ro và phê duyệt hai lớp ở mọi chặng.</span>
        </div>

        <Link
          href="/phap-ly-bao-mat"
          className="text-[#581C87] font-semibold hover:underline inline-flex items-center gap-1 shrink-0"
        >
          <span>Khung 3 Tầng Bảo Mật</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
