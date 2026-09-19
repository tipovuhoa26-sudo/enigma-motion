'use client';

import React from 'react';
import { 
  CheckCircle2, 
  Cpu, 
  Database, 
  TrendingUp, 
  Clock, 
  Zap, 
  Activity, 
  FileText, 
  Layers, 
  Users, 
  Video, 
  Bot, 
  Scan,
  ShieldCheck,
  BarChart3,
  Network
} from 'lucide-react';

interface CaseStudyVisualProps {
  slug: string;
  className?: string;
  compact?: boolean;
}

export function CaseStudyVisual({ slug, className = '', compact = false }: CaseStudyVisualProps) {
  switch (slug) {
    case 'toi-uu-chi-phi-tuyen-dung-hr-ai':
      return <HrRecruitmentVisual compact={compact} className={className} />;
    case 'ai-auditor-manufacturing':
      return <ManufacturingVisionVisual compact={compact} className={className} />;
    case 'content-factory-b2b-marketing':
      return <B2bContentFactoryVisual compact={compact} className={className} />;
    case 'vietcap-ai-multi-agent-nghien-cuu-thi-truong':
      return <VietcapMultiAgentVisual compact={compact} className={className} />;
    case 'vinhomes-ai-sales-enablement':
      return <VinhomesSalesMeshVisual compact={compact} className={className} />;
    case 'dentsu-ai-pitch-deck-automation':
      return <DentsuPitchDeckVisual compact={compact} className={className} />;
    case 'phuong-truong-an-video-ai-hien-truong':
      return <PhuongTruongAnVideoVisual compact={compact} className={className} />;
    case 'fptu-nang-bac-giang-vien-ai':
      return <FptuFacultySwarmVisual compact={compact} className={className} />;
    default:
      return <GenericDataVisual slug={slug} compact={compact} className={className} />;
  }
}

// 1. HR Screening Funnel & Latency Compression (-40% cost, 3d -> 2h)
function HrRecruitmentVisual({ compact, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full min-h-[220px] bg-[#0E0D12] text-white p-5 flex flex-col justify-between overflow-hidden select-none font-sans ${className}`}>
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Telemetry */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono tracking-wider text-emerald-400 uppercase font-semibold">
            ATS STREAM · HR AI SCREENER
          </span>
        </div>
        <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
          500 NHÂN SỰ · 4 HR
        </span>
      </div>

      {/* Centerpiece: Timeline Compression (3 days -> 2 hours) */}
      <div className="relative z-10 my-auto py-3 space-y-4">
        {/* Baseline (Old) */}
        <div>
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-1 font-mono">
            <span className="flex items-center gap-1 text-zinc-300">
              <Clock className="w-3 h-3 text-rose-400" /> Quy trình thủ công cũ
            </span>
            <span className="text-rose-400 font-semibold">3 Ngày (72h)</span>
          </div>
          <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/10 relative">
            <div className="w-full h-full bg-gradient-to-r from-rose-500/40 via-amber-500/30 to-rose-500/20" />
            <div className="absolute inset-0 flex items-center justify-around text-[8px] font-mono text-white/50">
              <span>Tải file</span>
              <span>Đọc CV</span>
              <span>Gọi điện</span>
              <span>Xếp lịch</span>
            </div>
          </div>
        </div>

        {/* AI Agent Stream (New) */}
        <div>
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-1 font-mono">
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <Zap className="w-3 h-3 text-emerald-400" /> AI Resume Screener (Tự Động)
            </span>
            <span className="text-emerald-300 font-bold bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
              2 Giờ (-97% Thời gian)
            </span>
          </div>
          <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/10 relative">
            <div className="w-[12%] h-full bg-gradient-to-r from-emerald-400 to-[#A3E635] shadow-[0_0_12px_#A3E635]" />
          </div>
        </div>
      </div>

      {/* Bottom KPI Badges */}
      <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-white/10 text-center">
        <div className="bg-white/5 p-2 rounded-xl border border-white/5">
          <span className="block text-[10px] text-zinc-400 uppercase font-mono">Tiết Kiệm Chi Phí</span>
          <span className="text-base sm:text-lg font-bold text-emerald-400 font-mono">-40%</span>
        </div>
        <div className="bg-white/5 p-2 rounded-xl border border-white/5">
          <span className="block text-[10px] text-zinc-400 uppercase font-mono">Lọc Hồ Sơ</span>
          <span className="text-base sm:text-lg font-bold text-[#FAFFDE] font-mono">3d → 2h</span>
        </div>
        <div className="bg-white/5 p-2 rounded-xl border border-white/5">
          <span className="block text-[10px] text-zinc-400 uppercase font-mono">Đạt Phỏng Vấn</span>
          <span className="text-base sm:text-lg font-bold text-cyan-400 font-mono">+25%</span>
        </div>
      </div>
    </div>
  );
}

// 2. Manufacturing AI Vision (99.8% precision, <50ms edge scan)
function ManufacturingVisionVisual({ compact, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full min-h-[220px] bg-[#0A0D14] text-white p-5 flex flex-col justify-between overflow-hidden select-none font-sans ${className}`}>
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf815_1px,transparent_1px)] bg-[size:16px_16px]" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header HUD */}
      <div className="relative z-10 flex items-center justify-between border-b border-cyan-500/20 pb-3">
        <div className="flex items-center gap-2">
          <Scan className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span className="text-[11px] font-mono tracking-wider text-cyan-400 uppercase font-semibold">
            EDGE VISION TELEMETRY · 6 CHUYỀN
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[10px] font-mono text-cyan-300">LATENCY: 38ms</span>
        </div>
      </div>

      {/* Center Vision Target Crosshair & Waveform */}
      <div className="relative z-10 my-auto py-2 flex items-center justify-center">
        <div className="relative w-48 sm:w-60 h-28 border border-cyan-500/30 rounded-xl bg-cyan-950/20 flex items-center justify-center overflow-hidden">
          {/* Laser Scanning Line */}
          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] animate-pulse" />
          
          {/* Component Blueprint Representation */}
          <div className="w-28 h-16 border border-dashed border-cyan-400/40 rounded-lg flex flex-col items-center justify-center relative">
            <span className="text-[9px] font-mono text-cyan-300">CNC GEAR #804</span>
            <div className="absolute -top-2 -right-2 px-1.5 py-0.5 bg-emerald-500/30 border border-emerald-400/50 rounded text-[8px] font-mono text-emerald-300">
              QC PASS
            </div>
            {/* Defect Detection Box */}
            <div className="absolute bottom-1 left-2 w-5 h-4 border border-rose-500 bg-rose-500/20 rounded text-[6px] font-mono text-rose-300 flex items-center justify-center">
              0.02
            </div>
          </div>

          {/* Corner Crosshairs */}
          <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-cyan-400" />
          <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-cyan-400" />
          <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-cyan-400" />
          <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-cyan-400" />
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-cyan-500/20 text-center">
        <div className="bg-cyan-950/40 p-2 rounded-xl border border-cyan-500/20">
          <span className="block text-[10px] text-cyan-300/70 uppercase font-mono">Độ Chính Xác</span>
          <span className="text-base sm:text-lg font-bold text-cyan-300 font-mono">99.8%</span>
        </div>
        <div className="bg-cyan-950/40 p-2 rounded-xl border border-cyan-500/20">
          <span className="block text-[10px] text-cyan-300/70 uppercase font-mono">Tỷ Lệ Lỗi Xuất</span>
          <span className="text-base sm:text-lg font-bold text-emerald-400 font-mono">1.5%</span>
        </div>
        <div className="bg-cyan-950/40 p-2 rounded-xl border border-cyan-500/20">
          <span className="block text-[10px] text-cyan-300/70 uppercase font-mono">Giám Sát</span>
          <span className="text-base sm:text-lg font-bold text-white font-mono">24/7 Edge</span>
        </div>
      </div>
    </div>
  );
}

// 3. B2B Content Engine (x5 production, +60% organic traffic curve)
function B2bContentFactoryVisual({ compact, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full min-h-[220px] bg-[#120F17] text-white p-5 flex flex-col justify-between overflow-hidden select-none font-sans ${className}`}>
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]" />
      <div className="absolute top-1/2 right-0 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-purple-500/20 pb-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-[11px] font-mono tracking-wider text-purple-300 uppercase font-semibold">
            KNOWLEDGE ENGINE · B2B FACTORY
          </span>
        </div>
        <span className="text-[10px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
          5 THÁNG TĂNG TRƯỞNG
        </span>
      </div>

      {/* Organic Curve SVG */}
      <div className="relative z-10 my-auto py-2">
        <div className="w-full h-24 sm:h-28 relative flex items-end">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad-b2b" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#A3E635" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="grad-area" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#A3E635" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#A3E635" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Area under curve */}
            <path d="M 0 75 Q 70 70, 140 50 T 300 10 L 300 80 L 0 80 Z" fill="url(#grad-area)" />
            {/* Curve stroke */}
            <path d="M 0 75 Q 70 70, 140 50 T 300 10" fill="none" stroke="url(#grad-b2b)" strokeWidth="3" strokeLinecap="round" />
            {/* Data Point Dots */}
            <circle cx="0" cy="75" r="3" fill="#8b5cf6" />
            <circle cx="140" cy="50" r="3" fill="#c084fc" />
            <circle cx="300" cy="10" r="4" fill="#A3E635" className="animate-ping" />
            <circle cx="300" cy="10" r="4" fill="#A3E635" />
          </svg>
          <div className="absolute top-1 right-2 bg-[#A3E635] text-[#17151A] text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm">
            +60% ORGANIC
          </div>
        </div>
      </div>

      {/* Bottom KPIs */}
      <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-purple-500/20 text-center">
        <div className="bg-purple-950/30 p-2 rounded-xl border border-purple-500/20">
          <span className="block text-[10px] text-zinc-400 uppercase font-mono">Sản Lượng</span>
          <span className="text-base sm:text-lg font-bold text-[#A3E635] font-mono">x5 Tốc Độ</span>
        </div>
        <div className="bg-purple-950/30 p-2 rounded-xl border border-purple-500/20">
          <span className="block text-[10px] text-zinc-400 uppercase font-mono">Quy Mô</span>
          <span className="text-base sm:text-lg font-bold text-white font-mono">50+ Bài/Tháng</span>
        </div>
        <div className="bg-purple-950/30 p-2 rounded-xl border border-purple-500/20">
          <span className="block text-[10px] text-zinc-400 uppercase font-mono">Ngân Sách Agency</span>
          <span className="text-base sm:text-lg font-bold text-emerald-400 font-mono">0đ Phát Sinh</span>
        </div>
      </div>
    </div>
  );
}

// 4. Vietcap Securities Multi-Agent Financial Extraction (-75% time, 2d -> 3h)
function VietcapMultiAgentVisual({ compact, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full min-h-[220px] bg-[#0B111A] text-white p-5 flex flex-col justify-between overflow-hidden select-none font-sans ${className}`}>
      {/* Background Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f615_1px,transparent_1px)] bg-[size:18px_18px]" />
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Telemetry */}
      <div className="relative z-10 flex items-center justify-between border-b border-blue-500/20 pb-3">
        <div className="flex items-center gap-2">
          <Bot className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-[11px] font-mono tracking-wider text-blue-400 uppercase font-semibold">
            VIETCAP · MULTI-AGENT BCTC PARSER
          </span>
        </div>
        <span className="text-[10px] font-mono text-blue-300 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30">
          30+ CHUYÊN VIÊN PHÂN TÍCH
        </span>
      </div>

      {/* 4 Agent Parallel Lanes */}
      <div className="relative z-10 my-auto py-2 space-y-1.5">
        {[
          { name: 'Agent 01: Bảng Cân Đối Kế Toán', time: '45s', status: 'Parsed' },
          { name: 'Agent 02: Báo Cáo Lưu Chuyển Tiền Tệ', time: '52s', status: 'Verified' },
          { name: 'Agent 03: Thuyết Minh BCTC & Nợ Vay', time: '68s', status: 'Extracted' },
          { name: 'Agent 04: Mô Hình Định Giá P/E & P/B', time: '35s', status: 'Calculated' },
        ].map((agent, i) => (
          <div key={i} className="flex items-center justify-between bg-blue-950/30 px-3 py-1.5 rounded-lg border border-blue-500/20 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="text-zinc-300 text-[11px]">{agent.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-300 text-[10px]">{agent.time}</span>
              <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.2 rounded border border-emerald-500/30">
                {agent.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Metrics */}
      <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-blue-500/20 text-center">
        <div className="bg-blue-950/40 p-2 rounded-xl border border-blue-500/20">
          <span className="block text-[10px] text-zinc-400 uppercase font-mono">Thời Gian Xử Lý</span>
          <span className="text-base sm:text-lg font-bold text-emerald-400 font-mono">-75%</span>
        </div>
        <div className="bg-blue-950/40 p-2 rounded-xl border border-blue-500/20">
          <span className="block text-[10px] text-zinc-400 uppercase font-mono">Chu Kỳ Báo Cáo</span>
          <span className="text-base sm:text-lg font-bold text-[#FAFFDE] font-mono">2 ngày → 3h</span>
        </div>
        <div className="bg-blue-950/40 p-2 rounded-xl border border-blue-500/20">
          <span className="block text-[10px] text-zinc-400 uppercase font-mono">Độ Chính Xác Đối Soát</span>
          <span className="text-base sm:text-lg font-bold text-cyan-300 font-mono">100% Khớp</span>
        </div>
      </div>
    </div>
  );
}

// 5. Vinhomes Sales Mesh (500+ brokers, automated video, lead reactivation)
function VinhomesSalesMeshVisual({ compact, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full min-h-[220px] bg-[#140F0A] text-white p-5 flex flex-col justify-between overflow-hidden select-none font-sans ${className}`}>
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#f59e0b15_1px,transparent_1px)] bg-[size:20px_20px]" />
      <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-amber-500/20 pb-3">
        <div className="flex items-center gap-2">
          <Network className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[11px] font-mono tracking-wider text-amber-300 uppercase font-semibold">
            VINHOMES · SALES ENABLEMENT MESH
          </span>
        </div>
        <span className="text-[10px] font-mono text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
          500+ MÔI GIỚI KINH DOANH
        </span>
      </div>

      {/* Constellation Dispatch Map */}
      <div className="relative z-10 my-auto py-2">
        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
          <div className="bg-amber-950/20 p-2.5 rounded-xl border border-amber-500/20 flex flex-col justify-between">
            <span className="text-[10px] text-zinc-400">TỰ ĐỘNG TẠO VIDEO DỰ ÁN</span>
            <span className="text-sm text-amber-300 font-bold mt-1">45s / Video Thực Địa</span>
            <span className="text-[9px] text-emerald-400 mt-0.5">Tự động gắn Brand Voice & Hotline</span>
          </div>
          <div className="bg-amber-950/20 p-2.5 rounded-xl border border-amber-500/20 flex flex-col justify-between">
            <span className="text-[10px] text-zinc-400">KÍCH HOẠT LEAD CŨ</span>
            <span className="text-sm text-emerald-400 font-bold mt-1">+35% Phản Hồi</span>
            <span className="text-[9px] text-zinc-400 mt-0.5">Cá nhân hóa kịch bản theo giỏ hàng</span>
          </div>
        </div>
      </div>

      {/* Bottom KPIs */}
      <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-amber-500/20 text-center">
        <div className="bg-amber-950/30 p-2 rounded-xl border border-amber-500/20">
          <span className="block text-[10px] text-zinc-400 uppercase font-mono">Mạng Lưới</span>
          <span className="text-base sm:text-lg font-bold text-amber-300 font-mono">500+ Sales</span>
        </div>
        <div className="bg-amber-950/30 p-2 rounded-xl border border-amber-500/20">
          <span className="block text-[10px] text-zinc-400 uppercase font-mono">Sản Xuất Video</span>
          <span className="text-base sm:text-lg font-bold text-[#FAFFDE] font-mono">Hàng Loạt</span>
        </div>
        <div className="bg-amber-950/30 p-2 rounded-xl border border-amber-500/20">
          <span className="block text-[10px] text-zinc-400 uppercase font-mono">Hỗ Trợ Môi Giới</span>
          <span className="text-base sm:text-lg font-bold text-emerald-400 font-mono">24/7 Bot</span>
        </div>
      </div>
    </div>
  );
}

// 6. Dentsu Pitch Deck Automation (-65% proposal turnaround)
function DentsuPitchDeckVisual({ compact, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full min-h-[220px] bg-[#0E1312] text-white p-5 flex flex-col justify-between overflow-hidden select-none font-sans ${className}`}>
      {/* Background Matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:22px_22px]" />
      <div className="absolute bottom-0 right-1/3 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-teal-500/20 pb-3">
        <div className="flex items-center gap-2">
          <FileText className="w-3.5 h-3.5 text-teal-400" />
          <span className="text-[11px] font-mono tracking-wider text-teal-300 uppercase font-semibold">
            DENTSU SPORTS · PITCH AUTOMATION
          </span>
        </div>
        <span className="text-[10px] font-mono text-teal-300 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-500/30">
          QUỐC TẾ & TÀI TRỢ
        </span>
      </div>

      {/* Modular Deck Blocks Assembly */}
      <div className="relative z-10 my-auto py-2">
        <div className="flex items-center gap-1.5 justify-center py-2">
          {['Brief Input', 'Market Fit', 'Valuation', 'Creative Deck', 'Sponsorship'].map((stage, i) => (
            <div key={i} className="flex-1 bg-teal-950/40 border border-teal-500/30 rounded-lg p-1.5 text-center font-mono">
              <span className="block text-[8px] text-teal-400">MĐ 0{i + 1}</span>
              <span className="text-[9px] text-zinc-300 font-medium truncate block">{stage}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom KPIs */}
      <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-teal-500/20 text-center">
        <div className="bg-teal-950/30 p-2 rounded-xl border border-teal-500/20">
          <span className="block text-[10px] text-zinc-400 uppercase font-mono">Rút Ngắn Thời Gian</span>
          <span className="text-base sm:text-lg font-bold text-emerald-400 font-mono">-65%</span>
        </div>
        <div className="bg-teal-950/30 p-2 rounded-xl border border-teal-500/20">
          <span className="block text-[10px] text-zinc-400 uppercase font-mono">Tốc Độ Đấu Thầu</span>
          <span className="text-base sm:text-lg font-bold text-[#A3E635] font-mono">x3 Tốc Độ</span>
        </div>
        <div className="bg-teal-950/30 p-2 rounded-xl border border-teal-500/20">
          <span className="block text-[10px] text-zinc-400 uppercase font-mono">Chuẩn Brand Deck</span>
          <span className="text-base sm:text-lg font-bold text-teal-300 font-mono">100% Đồng Nhất</span>
        </div>
      </div>
    </div>
  );
}

// 7. Phuong Truong An Field Video (+200% video throughput, on-device mobile)
function PhuongTruongAnVideoVisual({ compact, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full min-h-[220px] bg-[#14120D] text-white p-5 flex flex-col justify-between overflow-hidden select-none font-sans ${className}`}>
      {/* Background Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#eab30815_1px,transparent_1px)] bg-[size:16px_16px]" />
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-yellow-500/20 pb-3">
        <div className="flex items-center gap-2">
          <Video className="w-3.5 h-3.5 text-yellow-400" />
          <span className="text-[11px] font-mono tracking-wider text-yellow-300 uppercase font-semibold">
            PHƯƠNG TRƯỜNG AN · MOBILE AI VIDEO
          </span>
        </div>
        <span className="text-[10px] font-mono text-yellow-300 bg-yellow-950/60 px-2 py-0.5 rounded border border-yellow-500/30">
          ~300 SALES BĐS
        </span>
      </div>

      {/* Mobile Video Viewport HUD */}
      <div className="relative z-10 my-auto py-2 flex items-center justify-center gap-4">
        <div className="w-32 h-20 border border-yellow-500/40 rounded-xl bg-yellow-950/30 relative flex flex-col justify-between p-2 overflow-hidden">
          <div className="flex justify-between items-center text-[8px] font-mono text-yellow-400">
            <span>REC [4K]</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
          </div>
          {/* Audio Waveform */}
          <div className="flex items-end justify-center gap-1 h-6">
            {[40, 70, 30, 90, 60, 100, 45, 80, 50, 95].map((h, i) => (
              <div key={i} className="w-1 bg-yellow-400/80 rounded-full" style={{ height: `${h}%` }} />
            ))}
          </div>
          <span className="text-[7px] font-mono text-zinc-300 truncate">AI Auto-Script + Subtitles</span>
        </div>
        <div className="text-left font-mono">
          <span className="text-xs text-zinc-400 block">Sản lượng video:</span>
          <span className="text-xl font-bold text-yellow-400">+200%</span>
          <span className="text-[10px] text-emerald-400 block">Dựng trực tiếp trên điện thoại</span>
        </div>
      </div>

      {/* Bottom KPIs */}
      <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-yellow-500/20 text-center">
        <div className="bg-yellow-950/30 p-2 rounded-xl border border-yellow-500/20">
          <span className="block text-[10px] text-zinc-400 uppercase font-mono">Tăng Sản Lượng</span>
          <span className="text-base sm:text-lg font-bold text-yellow-400 font-mono">+200%</span>
        </div>
        <div className="bg-yellow-950/30 p-2 rounded-xl border border-yellow-500/20">
          <span className="block text-[10px] text-zinc-400 uppercase font-mono">Đội Ngũ</span>
          <span className="text-base sm:text-lg font-bold text-white font-mono">~300 Sales</span>
        </div>
        <div className="bg-yellow-950/30 p-2 rounded-xl border border-yellow-500/20">
          <span className="block text-[10px] text-zinc-400 uppercase font-mono">Thiết Bị</span>
          <span className="text-base sm:text-lg font-bold text-emerald-400 font-mono">100% Mobile</span>
        </div>
      </div>
    </div>
  );
}

// 8. FPTU Faculty Swarm (10,000 attendees, 600 certified trainers Bậc 6)
function FptuFacultySwarmVisual({ compact, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full min-h-[220px] bg-[#0A1211] text-white p-5 flex flex-col justify-between overflow-hidden select-none font-sans ${className}`}>
      {/* Background Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b98115_1px,transparent_1px)] bg-[size:18px_18px]" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-emerald-500/20 pb-3">
        <div className="flex items-center gap-2">
          <Users className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[11px] font-mono tracking-wider text-emerald-400 uppercase font-semibold">
            ĐẠI HỌC FPT · AI AGENT ORCHESTRATION
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
          TECH FEST & FACULTY BẬC 6
        </span>
      </div>

      {/* Faculty Tier & Event Scale Diagram */}
      <div className="relative z-10 my-auto py-2">
        <div className="flex items-center justify-between bg-emerald-950/30 p-3 rounded-xl border border-emerald-500/20 font-mono text-xs">
          <div>
            <span className="text-[10px] text-zinc-400 block">QUY MÔ SỰ KIỆN TECH FEST</span>
            <span className="text-base sm:text-lg text-emerald-300 font-bold">10.000+ Người Tham Gia</span>
            <span className="text-[10px] text-emerald-400 block">Điều phối bằng Multi-Agent MC</span>
          </div>
          <div className="text-right border-l border-emerald-500/20 pl-4">
            <span className="text-[10px] text-zinc-400 block">GIẢNG VIÊN ĐÀO TẠO</span>
            <span className="text-base sm:text-lg text-[#FAFFDE] font-bold">600+ Giảng Viên</span>
            <span className="text-[10px] text-cyan-300 block">Chuẩn Bậc 6 Năng Lực AI</span>
          </div>
        </div>
      </div>

      {/* Bottom KPIs */}
      <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-emerald-500/20 text-center">
        <div className="bg-emerald-950/40 p-2 rounded-xl border border-emerald-500/20">
          <span className="block text-[10px] text-zinc-400 uppercase font-mono">Quy Mô Điều Phối</span>
          <span className="text-base sm:text-lg font-bold text-emerald-400 font-mono">10.000+ Người</span>
        </div>
        <div className="bg-emerald-950/40 p-2 rounded-xl border border-emerald-500/20">
          <span className="block text-[10px] text-zinc-400 uppercase font-mono">Chuẩn Giảng Viên</span>
          <span className="text-base sm:text-lg font-bold text-[#FAFFDE] font-mono">Bậc 6 Chuẩn</span>
        </div>
        <div className="bg-emerald-950/40 p-2 rounded-xl border border-emerald-500/20">
          <span className="block text-[10px] text-zinc-400 uppercase font-mono">Hệ Thống Agent</span>
          <span className="text-base sm:text-lg font-bold text-cyan-300 font-mono">Multi-Agent MC</span>
        </div>
      </div>
    </div>
  );
}

// Generic Fallback
function GenericDataVisual({ slug, compact, className }: { slug: string; compact?: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full min-h-[220px] bg-[#0E0D12] text-white p-5 flex flex-col justify-between overflow-hidden select-none font-mono ${className}`}>
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <span className="text-xs text-emerald-400 uppercase font-semibold">SUNEXT DATA ENGINE</span>
        <span className="text-[10px] text-zinc-400">{slug}</span>
      </div>
      <div className="my-auto py-4 text-center">
        <Activity className="w-8 h-8 text-emerald-400 mx-auto mb-2 animate-pulse" />
        <span className="text-sm font-semibold text-zinc-200 block">Dữ Liệu Chuyển Đổi Thực Tế</span>
        <span className="text-xs text-zinc-400">Nghiệm thu theo P&L định lượng</span>
      </div>
      <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-2 border-t border-white/10">
        <span>Sunext Method</span>
        <span>Verified ROI</span>
      </div>
    </div>
  );
}
