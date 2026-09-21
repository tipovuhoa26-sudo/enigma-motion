'use client';

import React from 'react';
import { Activity, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';

interface AiControlRoomDashboardProps {
  className?: string;
}

export function AiControlRoomDashboard({ className = '' }: AiControlRoomDashboardProps) {
  return (
    <div
      className={`w-full max-w-[1180px] mx-auto rounded-2xl bg-white/95 border border-[#E8E8E8] shadow-[0_24px_60px_-16px_rgba(0,0,0,0.08)] p-5 sm:p-7 backdrop-blur-md select-none font-sans ${className}`}
      data-control-room-dashboard
    >
      {/* Top Telemetry Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-[#E8E8E8] text-xs">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#059669]" />
          </span>
          <span className="font-semibold text-[#111111] uppercase tracking-wider">
            AI Transformation Control Room
          </span>
          <span className="hidden sm:inline-block text-[#8E8E8E] font-mono text-[11px]">
            [Live Operational Mesh]
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px] font-mono text-[#626262]">
          <span className="hidden md:inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
            <span>VPC-ISOLATED</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#6B21A8]" />
            <span>LATENCY: 38ms</span>
          </span>
          <span className="px-2 py-0.5 rounded-md bg-[#FAF8FC] border border-[#E8E8E8] text-[#6B21A8] font-semibold">
            GATE STATUS: G1–G4 ACTIVE
          </span>
        </div>
      </div>

      {/* Central Gate Monitoring Grid (Gate 01 - Gate 04) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-5">
        {/* Gate 01 */}
        <div className="p-3.5 rounded-xl bg-[#FAF8FC] border border-[#E8E8E8] flex flex-col justify-between hover:border-[#6B21A8]/40 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm bg-white border border-[#E8E8E8] text-[#6B21A8]">
                GATE 01
              </span>
              <span className="text-[10.5px] font-bold text-[#059669] flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                VALIDATED
              </span>
            </div>
            <div className="text-xs font-semibold text-[#111111] leading-tight mb-1">
              Bài Toán & ROI Kinh Doanh
            </div>
            <div className="text-[11px] text-[#626262]">
              Xác thực P&L khả thi · Payback 3.2 tháng
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-[#E8E8E8]/60 flex items-center justify-between text-[10px] text-[#8E8E8E]">
            <span>Ký duyệt: BOD</span>
            <span className="text-[#059669] font-medium">100% Hoàn Tất</span>
          </div>
        </div>

        {/* Gate 02 */}
        <div className="p-3.5 rounded-xl bg-[#FAF8FC] border border-[#E8E8E8] flex flex-col justify-between hover:border-[#6B21A8]/40 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm bg-white border border-[#E8E8E8] text-[#6B21A8]">
                GATE 02
              </span>
              <span className="text-[10.5px] font-bold text-[#059669] flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                VALIDATED
              </span>
            </div>
            <div className="text-xs font-semibold text-[#111111] leading-tight mb-1">
              Thử Nghiệm PoC Luồng Việc
            </div>
            <div className="text-[11px] text-[#626262]">
              Kiểm chứng dữ liệu thật · Độ chính xác 99.4%
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-[#E8E8E8]/60 flex items-center justify-between text-[10px] text-[#8E8E8E]">
            <span>Mẫu thử: 2,500 records</span>
            <span className="text-[#059669] font-medium">Pass G2</span>
          </div>
        </div>

        {/* Gate 03 */}
        <div className="p-3.5 rounded-xl bg-white border border-[#6B21A8]/40 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm bg-[#FAF8FC] border border-[#6B21A8]/30 text-[#6B21A8]">
                GATE 03
              </span>
              <span className="text-[10.5px] font-bold text-[#6B21A8] flex items-center gap-1 animate-pulse">
                <Zap className="w-3 h-3" />
                RUNNING 82%
              </span>
            </div>
            <div className="text-xs font-semibold text-[#111111] leading-tight mb-1">
              Tích Hợp ERP & API Hai Chiều
            </div>
            <div className="text-[11px] text-[#626262]">
              Kết nối SAP/Odoo · Bảo mật Private VPC
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-[#E8E8E8]/60 flex items-center justify-between text-[10px] text-[#8E8E8E]">
            <span>Đồng bộ 2 chiều: Active</span>
            <span className="text-[#6B21A8] font-semibold">82% Tiến độ</span>
          </div>
        </div>

        {/* Gate 04 */}
        <div className="p-3.5 rounded-xl bg-[#FAF8FC] border border-[#E8E8E8] flex flex-col justify-between hover:border-[#F97316]/40 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm bg-white border border-[#E8E8E8] text-[#111111]">
                GATE 04
              </span>
              <span className="text-[10.5px] font-bold text-[#F97316]">
                SCHEDULED
              </span>
            </div>
            <div className="text-xs font-semibold text-[#111111] leading-tight mb-1">
              Nghiệm Thu P&L & Bàn Giao
            </div>
            <div className="text-[11px] text-[#626262]">
              Chốt giờ công thực tế · Chuyển giao tự chủ
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-[#E8E8E8]/60 flex items-center justify-between text-[10px] text-[#8E8E8E]">
            <span>Dự kiến: 14 ngày</span>
            <span className="text-[#F97316] font-medium">Bàn giao 100%</span>
          </div>
        </div>
      </div>

      {/* Bottom Quantitative KPI Telemetry Strip */}
      <div className="p-4 rounded-xl bg-[#F7F7F8] border border-[#E8E8E8] grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-center divide-y md:divide-y-0 md:divide-x divide-[#E8E8E8]">
        <div className="flex flex-col items-center">
          <span className="text-xl sm:text-2xl font-light text-[#111111] tabular-nums leading-none mb-1">
            1,280<span className="text-sm font-normal text-[#6B21A8]">h</span>
          </span>
          <span className="text-[11px] text-[#626262]">Giờ công tiết kiệm lũy kế</span>
        </div>

        <div className="flex flex-col items-center pt-3 md:pt-0">
          <span className="text-xl sm:text-2xl font-light text-[#059669] tabular-nums leading-none mb-1">
            -42<span className="text-sm font-normal">%</span>
          </span>
          <span className="text-[11px] text-[#626262]">Tỷ lệ sai lệch tác nghiệp</span>
        </div>

        <div className="flex flex-col items-center pt-3 md:pt-0">
          <span className="text-xl sm:text-2xl font-light text-[#111111] tabular-nums leading-none mb-1">
            18 <span className="text-sm font-normal text-[#6B21A8]">Agents</span>
          </span>
          <span className="text-[11px] text-[#626262]">Multi-Agents đang vận hành</span>
        </div>

        <div className="flex flex-col items-center pt-3 md:pt-0">
          <span className="text-xl sm:text-2xl font-light text-[#F97316] tabular-nums leading-none mb-1">
            99.8<span className="text-sm font-normal">%</span>
          </span>
          <span className="text-[11px] text-[#626262]">Độ chính xác nghiệm thu</span>
        </div>
      </div>
    </div>
  );
}
