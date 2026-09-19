'use client';

import React from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  DollarSign, 
  Clock, 
  CheckCircle2, 
  Cpu, 
  ArrowRight,
  Layers,
  Sparkles
} from 'lucide-react';

interface InvestmentVisualProps {
  className?: string;
}

export function InvestmentVisual({ className = '' }: InvestmentVisualProps) {
  return (
    <div className={`relative w-full h-full min-h-[340px] sm:min-h-[420px] bg-[#0C0B10] text-white p-6 sm:p-8 rounded-3xl flex flex-col justify-between overflow-hidden select-none font-sans border border-white/10 shadow-xl ${className}`}>
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header HUD */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
            <TrendingUp className="w-4 h-4 text-[#A3E635]" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#A3E635] block font-semibold">
              VALUE-BASED INVESTMENT ARCHITECTURE
            </span>
            <span className="text-sm font-medium text-zinc-300">
              Khung Lộ Trình Đầu Tư & Điểm Hòa Vốn Định Lượng
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-xs font-mono text-emerald-300">
            <ShieldCheck className="w-3.5 h-3.5" />
            Nghiệm Thu Bằng P&L Thật
          </span>
        </div>
      </div>

      {/* 3-Tier Horizon Pipeline Stage */}
      <div className="relative z-10 my-6 grid grid-cols-1 md:grid-cols-3 gap-4 font-mono">
        {/* Tier 1 */}
        <div className="bg-white/5 hover:bg-white/[0.08] transition-colors p-4 rounded-2xl border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold bg-emerald-500/20 px-2 py-0.5 rounded">
                GIAI ĐOẠN 1
              </span>
              <span className="text-xs text-zinc-400">4 – 6 Tuần</span>
            </div>
            <h4 className="text-base font-bold text-white mb-1 font-sans">AI Pilot & Quick Wins</h4>
            <p className="text-xs text-zinc-400 font-sans leading-relaxed">
              Kiểm chứng ROI trên 1 bài toán đau đầu nhất. Thu hồi vốn nhanh trong tháng đầu.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/10 text-xs flex justify-between text-zinc-300">
            <span>Điểm hòa vốn:</span>
            <span className="text-emerald-400 font-bold">~ 2 Tháng</span>
          </div>
        </div>

        {/* Tier 2 */}
        <div className="bg-emerald-950/20 hover:bg-emerald-950/30 transition-colors p-4 rounded-2xl border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.1)] flex flex-col justify-between relative">
          <div className="absolute -top-2.5 right-4 bg-[#A3E635] text-[#17151A] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
            PHỔ BIẾN NHẤT
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase tracking-wider text-[#A3E635] font-bold bg-[#A3E635]/20 px-2 py-0.5 rounded">
                GIAI ĐOẠN 2
              </span>
              <span className="text-xs text-zinc-400">8 – 12 Tuần</span>
            </div>
            <h4 className="text-base font-bold text-white mb-1 font-sans">Department AI OS</h4>
            <p className="text-xs text-zinc-400 font-sans leading-relaxed">
              Tái thiết kế hệ điều hành AI cho 1 phòng ban then chốt. Tạo đòn bẩy x3 - x5 năng suất.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-emerald-500/20 text-xs flex justify-between text-zinc-300">
            <span>Điểm hòa vốn:</span>
            <span className="text-[#A3E635] font-bold">~ 3.5 Tháng</span>
          </div>
        </div>

        {/* Tier 3 */}
        <div className="bg-white/5 hover:bg-white/[0.08] transition-colors p-4 rounded-2xl border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase tracking-wider text-cyan-400 font-bold bg-cyan-500/20 px-2 py-0.5 rounded">
                GIAI ĐOẠN 3
              </span>
              <span className="text-xs text-zinc-400">4 – 6 Tháng</span>
            </div>
            <h4 className="text-base font-bold text-white mb-1 font-sans">Enterprise Transformation</h4>
            <p className="text-xs text-zinc-400 font-sans leading-relaxed">
              Toàn diện 6 trụ cột. Thiết lập Private AI Mesh và văn hóa tự chủ công nghệ toàn công ty.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/10 text-xs flex justify-between text-zinc-300">
            <span>Điểm hòa vốn:</span>
            <span className="text-cyan-400 font-bold">Bền Vững Hàng Năm</span>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Verification Strip */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-center font-mono">
        <div className="bg-white/5 p-2 rounded-xl">
          <span className="text-[10px] text-zinc-400 uppercase block">Cam Kết NDA</span>
          <span className="text-sm sm:text-base font-bold text-white">Bảo Mật 100%</span>
        </div>
        <div className="bg-white/5 p-2 rounded-xl">
          <span className="text-[10px] text-zinc-400 uppercase block">Tiết Kiệm Giờ Công</span>
          <span className="text-sm sm:text-base font-bold text-emerald-400">Đo Được Ngay</span>
        </div>
        <div className="bg-white/5 p-2 rounded-xl">
          <span className="text-[10px] text-zinc-400 uppercase block">Quyền Sở Hữu</span>
          <span className="text-sm sm:text-base font-bold text-[#A3E635]">Thuộc Doanh Nghiệp</span>
        </div>
        <div className="bg-white/5 p-2 rounded-xl">
          <span className="text-[10px] text-zinc-400 uppercase block">Thời Gian Pilot</span>
          <span className="text-sm sm:text-base font-bold text-cyan-300">4-6 Tuần</span>
        </div>
      </div>
    </div>
  );
}
