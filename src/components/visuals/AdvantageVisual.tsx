'use client';

import React from 'react';
import { 
  Users, 
  Cpu, 
  TrendingUp, 
  ArrowRight, 
  Check, 
  Workflow, 
  Server, 
  Database, 
  Activity, 
  ShieldCheck,
  Zap,
  Clock,
  Sparkles
} from 'lucide-react';

interface AdvantageVisualProps {
  cardIndex: number; // 0, 1, 2
  className?: string;
  counterRef?: React.RefObject<HTMLSpanElement | null>;
  ringRef?: React.RefObject<SVGCircleElement | null>;
  dotRefs?: (React.RefObject<HTMLSpanElement | null>)[];
}

export function AdvantageVisual({ 
  cardIndex, 
  className = '',
  counterRef,
  ringRef,
  dotRefs
}: AdvantageVisualProps) {
  switch (cardIndex) {
    case 0:
      return <HumanProcessVisual className={className} counterRef={counterRef} />;
    case 1:
      return <SystemIntegrationVisual className={className} counterRef={counterRef} ringRef={ringRef} />;
    case 2:
      return <PnlAcceptanceVisual className={className} counterRef={counterRef} dotRefs={dotRefs} />;
    default:
      return <HumanProcessVisual className={className} counterRef={counterRef} />;
  }
}

// Card 01: 70% Con người & Quy trình
function HumanProcessVisual({ 
  className,
  counterRef 
}: { 
  className?: string;
  counterRef?: React.RefObject<HTMLSpanElement | null>;
}) {
  return (
    <div className={`relative w-full h-full min-h-[260px] bg-[#0E0D12] text-white p-5 flex flex-col justify-between overflow-hidden select-none font-sans rounded-2xl ${className}`}>
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:18px_18px]" />
      <div className="absolute top-0 right-0 w-52 h-52 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header HUD */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <Users className="w-3.5 h-3.5 text-[#A3E635]" />
          <span className="text-[11px] font-mono tracking-wider text-[#A3E635] uppercase font-semibold">
            NGUYÊN TẮC 01 · CON NGƯỜI & QUY TRÌNH
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono text-emerald-300">70% HIỆU QUẢ</span>
        </div>
      </div>

      {/* Process Flow Transformation Comparison */}
      <div className="relative z-10 my-auto py-2 space-y-2.5">
        {/* Old Way */}
        <div className="bg-white/5 p-2 rounded-xl border border-white/5">
          <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono mb-1">
            <span className="text-rose-400">Cách cũ: Mua tool rời rạc</span>
            <span className="text-rose-400/80">Không người dùng</span>
          </div>
          <div className="flex items-center gap-1 text-[8px] font-mono text-zinc-400">
            <span className="bg-rose-950/40 text-rose-300 border border-rose-500/20 px-1.5 py-0.5 rounded">10+ Tools chat</span>
            <span className="text-zinc-600">➔</span>
            <span className="bg-rose-950/40 text-rose-300 border border-rose-500/20 px-1.5 py-0.5 rounded">Không gắn KPI</span>
            <span className="text-zinc-600">➔</span>
            <span className="bg-rose-950/40 text-rose-300 border border-rose-500/20 px-1.5 py-0.5 rounded">Chi phí bốc hơi</span>
          </div>
        </div>

        {/* Sunext Method */}
        <div className="bg-emerald-950/30 p-2 rounded-xl border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
          <div className="flex items-center justify-between text-[10px] text-emerald-300 font-mono mb-1">
            <span className="font-semibold flex items-center gap-1">
              <Zap className="w-3 h-3 text-[#A3E635]" /> Sunext Method: Human-in-the-loop
            </span>
            <span className="text-emerald-400 font-bold bg-emerald-500/20 px-1.5 py-0.2 rounded">
              Tiết kiệm thật
            </span>
          </div>
          <div className="flex items-center gap-1 text-[8px] font-mono">
            <span className="bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 px-1.5 py-0.5 rounded">Thang 5 Tầng</span>
            <span className="text-emerald-400">➔</span>
            <span className="bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 px-1.5 py-0.5 rounded">SOP Chuẩn</span>
            <span className="text-emerald-400">➔</span>
            <span className="bg-[#A3E635]/20 text-[#FAFFDE] border border-[#A3E635]/40 px-1.5 py-0.5 rounded font-bold">Giải phóng giờ công</span>
          </div>
        </div>
      </div>

      {/* Bottom KPI Bar with Live GSAP Counter */}
      <div className="relative z-10 grid grid-cols-2 gap-2 pt-2.5 border-t border-white/10 text-center font-mono">
        <div className="bg-white/5 p-1.5 rounded-xl border border-white/5">
          <span className="text-[9px] text-zinc-400 uppercase block">Chi Phí Tuyển Dụng</span>
          <span 
            ref={counterRef}
            className="text-lg sm:text-xl font-bold text-[#A3E635] tabular-nums"
            data-counter
          >
            0%
          </span>
        </div>
        <div className="bg-white/5 p-1.5 rounded-xl border border-white/5">
          <span className="text-[9px] text-zinc-400 uppercase block">Quy Mô Khảo Sát</span>
          <span className="text-sm sm:text-base font-bold text-white mt-0.5 block">500 Nhân Sự</span>
        </div>
      </div>
    </div>
  );
}

// Card 02: Kết nối trực tiếp vào hệ thống sẵn có
function SystemIntegrationVisual({ 
  className,
  counterRef,
  ringRef 
}: { 
  className?: string;
  counterRef?: React.RefObject<HTMLSpanElement | null>;
  ringRef?: React.RefObject<SVGCircleElement | null>;
}) {
  return (
    <div className={`relative w-full h-full min-h-[260px] bg-[#0A0E15] text-white p-5 flex flex-col justify-between overflow-hidden select-none font-sans rounded-2xl ${className}`}>
      {/* Background Blueprint */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf810_1px,transparent_1px)] bg-[size:16px_16px]" />
      <div className="absolute top-1/3 left-1/4 w-52 h-52 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header HUD */}
      <div className="relative z-10 flex items-center justify-between border-b border-cyan-500/20 pb-3">
        <div className="flex items-center gap-2">
          <Server className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-[11px] font-mono tracking-wider text-cyan-400 uppercase font-semibold">
            NGUYÊN TẮC 02 · HẠ TẦNG & DỮ LIỆU
          </span>
        </div>
        <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
          API 2 CHIỀU
        </span>
      </div>

      {/* Two-Way Integration Map */}
      <div className="relative z-10 my-auto py-2">
        <div className="flex items-center justify-between gap-2 text-center font-mono">
          <div className="flex-1 bg-cyan-950/30 border border-cyan-500/20 rounded-xl p-2.5">
            <span className="block text-[8px] text-zinc-400">HỆ THỐNG HIỆN CÓ</span>
            <span className="text-xs text-cyan-300 font-bold block mt-0.5">ERP · CRM · MES</span>
            <span className="text-[7px] text-zinc-500 block mt-0.5">Không mua tool phụ</span>
          </div>

          <div className="flex flex-col items-center justify-center px-1">
            <div className="flex items-center gap-1 text-cyan-400 text-xs animate-pulse">
              <span>◄</span>
              <span className="h-[2px] w-5 bg-gradient-to-r from-cyan-400 via-[#A3E635] to-cyan-400" />
              <span>►</span>
            </div>
            <span className="text-[7px] text-zinc-400 mt-0.5">Sync Real-time</span>
          </div>

          <div className="flex-1 bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-2.5 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <span className="block text-[8px] text-emerald-400">ENTERPRISE AI</span>
            <span className="text-xs text-[#FAFFDE] font-bold block mt-0.5">Private Mesh</span>
            <span className="text-[7px] text-emerald-300 block mt-0.5">Kích hoạt tác vụ</span>
          </div>
        </div>
      </div>

      {/* Bottom KPI Bar with SVG Circle Counter */}
      <div className="relative z-10 grid grid-cols-2 gap-2 pt-2.5 border-t border-cyan-500/20 text-center font-mono items-center">
        <div className="bg-cyan-950/40 p-1.5 rounded-xl border border-cyan-500/20 flex items-center justify-center gap-2">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="26" stroke="#1e293b" strokeWidth="6" fill="none" />
              <circle
                ref={ringRef}
                cx="30"
                cy="30"
                r="26"
                stroke="#22d3ee"
                strokeWidth="6"
                fill="none"
                strokeDasharray={2 * Math.PI * 26}
                strokeDashoffset={2 * Math.PI * 26}
                strokeLinecap="round"
                className="transition-[stroke-dashoffset] duration-300"
                data-counter-ring
              />
            </svg>
            <span ref={counterRef} className="absolute text-[10px] font-bold text-cyan-300 tabular-nums" data-counter>
              0%
            </span>
          </div>
          <div className="text-left">
            <span className="text-[8px] text-zinc-400 block">Độ Chính Xác</span>
            <span className="text-xs font-bold text-white">Kiểm Định</span>
          </div>
        </div>

        <div className="bg-cyan-950/40 p-1.5 rounded-xl border border-cyan-500/20">
          <span className="text-[8px] text-zinc-400 uppercase block">Cơ Khí Chính Xác</span>
          <span className="text-xs font-bold text-[#A3E635] mt-1 block">800 Công Nhân</span>
        </div>
      </div>
    </div>
  );
}

// Card 03: Nghiệm thu bằng giờ công và P&L
function PnlAcceptanceVisual({ 
  className,
  counterRef,
  dotRefs 
}: { 
  className?: string;
  counterRef?: React.RefObject<HTMLSpanElement | null>;
  dotRefs?: (React.RefObject<HTMLSpanElement | null>)[];
}) {
  return (
    <div className={`relative w-full h-full min-h-[260px] bg-[#100D15] text-white p-5 flex flex-col justify-between overflow-hidden select-none font-sans rounded-2xl ${className}`}>
      {/* Background Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#a855f710_1px,transparent_1px)] bg-[size:18px_18px]" />
      <div className="absolute top-1/2 right-1/4 w-52 h-52 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header HUD */}
      <div className="relative z-10 flex items-center justify-between border-b border-purple-500/20 pb-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-[11px] font-mono tracking-wider text-purple-300 uppercase font-semibold">
            NGUYÊN TẮC 03 · NGHIỆM THU THEO P&L
          </span>
        </div>
        <span className="text-[10px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
          X5 TỐC ĐỘ
        </span>
      </div>

      {/* Milestone Checkpoint Ledger */}
      <div className="relative z-10 my-auto py-1 space-y-1.5 font-mono text-xs">
        {[
          { m: 'Mốc 1 · 30 Ngày', desc: 'Giảm 50% giờ thủ công', kpi: 'Đạt kiểm định' },
          { m: 'Mốc 2 · 60 Ngày', desc: 'Sản lượng tài liệu x5', kpi: 'P&L xác nhận' },
          { m: 'Mốc 3 · 90 Ngày', desc: 'Chuyển giao quyền làm chủ', kpi: 'Nghiệm thu' },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between bg-purple-950/30 px-2.5 py-1 rounded-lg border border-purple-500/20">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-purple-500/30 border border-purple-400/40 flex items-center justify-center text-[8px] text-purple-300 font-bold">
                ✓
              </span>
              <span className="text-zinc-200 text-[10px]">{item.m}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] text-zinc-400">{item.desc}</span>
              <span className="text-[8px] bg-emerald-500/20 text-emerald-400 px-1 py-0.2 rounded">
                {item.kpi}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom KPI Bar with Live GSAP Counter & Dots */}
      <div className="relative z-10 grid grid-cols-2 gap-2 pt-2.5 border-t border-purple-500/20 text-center font-mono items-center">
        <div className="bg-purple-950/40 p-1.5 rounded-xl border border-purple-500/20">
          <div className="flex items-center justify-between px-1">
            <span className="text-[8px] text-zinc-400 uppercase">Tiến Độ Mốc</span>
            <span 
              ref={counterRef} 
              className="text-base font-bold text-[#FAFFDE] tabular-nums" 
              data-counter
            >
              0%
            </span>
          </div>
          {/* 3-dot pagination step indicator */}
          <div className="flex items-center justify-center gap-1.5 pt-1" data-dots>
            <span ref={dotRefs?.[0]} className="w-2 h-2 rounded-full bg-[#FAFFDE] opacity-30 transition-opacity duration-200" />
            <span ref={dotRefs?.[1]} className="w-2 h-2 rounded-full bg-[#FAFFDE] opacity-30 transition-opacity duration-200" />
            <span ref={dotRefs?.[2]} className="w-2 h-2 rounded-full bg-[#FAFFDE] opacity-30 transition-opacity duration-200" />
          </div>
        </div>

        <div className="bg-purple-950/40 p-1.5 rounded-xl border border-purple-500/20">
          <span className="text-[8px] text-zinc-400 uppercase block">Sản Lượng B2B</span>
          <span className="text-sm font-bold text-[#A3E635] mt-0.5 block">x5 Tốc Độ</span>
        </div>
      </div>
    </div>
  );
}
