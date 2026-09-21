'use client';

import React from 'react';
import { Activity, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';

interface AiControlRoomDashboardProps {
  className?: string;
}

export function AiControlRoomDashboard({ className = '' }: AiControlRoomDashboardProps) {
  return (
    <div
      className={`w-full max-w-[1200px] mx-auto rounded-2xl bg-white border border-[#E7E7E5] shadow-[0_16px_48px_-12px_rgba(0,0,0,0.06)] p-6 sm:p-8 select-none font-sans ${className}`}
      data-control-room-dashboard
    >
      {/* Top Telemetry Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-[#E7E7E5]">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#059669]" />
          </span>
          <span className="font-semibold text-sm sm:text-base text-[#0A0A0A] tracking-tight">
            AI Transformation Control Room
          </span>
          <span className="hidden sm:inline-block text-[#747474] font-mono text-xs">
            [Live Operational Mesh]
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-[#515151]">
          <span className="hidden md:inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#059669]" />
            <span>VPC-ISOLATED</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-[#581C87]" />
            <span>LATENCY: 38ms</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-[#FAF8FC] border border-[#E7E7E5] text-[#581C87] font-semibold text-xs">
            GATE 1–4 ACTIVE
          </span>
        </div>
      </div>

      {/* Central Gate Monitoring Grid (Gate 01 - Gate 04) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Gate 01 */}
        <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E7E7E5] flex flex-col justify-between hover:border-[#581C87]/40 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white border border-[#E7E7E5] text-[#581C87]">
                GATE 01
              </span>
              <span className="text-xs font-bold text-[#059669] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                VALIDATED
              </span>
            </div>
            <div className="text-sm font-semibold text-[#0A0A0A] leading-snug mb-1">
              Bài Toán & ROI Kinh Doanh
            </div>
            <div className="text-xs text-[#515151]">
              Xác thực P&L khả thi · Payback 3.2 tháng
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-[#E7E7E5] flex items-center justify-between text-xs text-[#747474]">
            <span>Ký duyệt: BOD</span>
            <span className="text-[#059669] font-medium">100% Hoàn Tất</span>
          </div>
        </div>

        {/* Gate 02 */}
        <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E7E7E5] flex flex-col justify-between hover:border-[#581C87]/40 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white border border-[#E7E7E5] text-[#581C87]">
                GATE 02
              </span>
              <span className="text-xs font-bold text-[#059669] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                VALIDATED
              </span>
            </div>
            <div className="text-sm font-semibold text-[#0A0A0A] leading-snug mb-1">
              Thử Nghiệm PoC Luồng Việc
            </div>
            <div className="text-xs text-[#515151]">
              Kiểm chứng dữ liệu thật · Độ chính xác 99.4%
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-[#E7E7E5] flex items-center justify-between text-xs text-[#747474]">
            <span>Mẫu thử: 2,500 records</span>
            <span className="text-[#059669] font-medium">Pass G2</span>
          </div>
        </div>

        {/* Gate 03 */}
        <div className="p-4 rounded-xl bg-white border border-[#581C87]/40 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#FAF8FC] border border-[#581C87]/30 text-[#581C87]">
                GATE 03
              </span>
              <span className="text-xs font-bold text-[#581C87] flex items-center gap-1 animate-pulse">
                <Zap className="w-3.5 h-3.5" />
                RUNNING 82%
              </span>
            </div>
            <div className="text-sm font-semibold text-[#0A0A0A] leading-snug mb-1">
              Tích Hợp ERP & API Hai Chiều
            </div>
            <div className="text-xs text-[#515151]">
              Kết nối SAP/Odoo · Bảo mật Private VPC
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-[#E7E7E5] flex items-center justify-between text-xs text-[#747474]">
            <span>Đồng bộ 2 chiều: Active</span>
            <span className="text-[#581C87] font-semibold">82% Tiến độ</span>
          </div>
        </div>

        {/* Gate 04 */}
        <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E7E7E5] flex flex-col justify-between hover:border-[#F97316]/40 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white border border-[#E7E7E5] text-[#0A0A0A]">
                GATE 04
              </span>
              <span className="text-xs font-bold text-[#F97316]">
                SCHEDULED
              </span>
            </div>
            <div className="text-sm font-semibold text-[#0A0A0A] leading-snug mb-1">
              Nghiệm Thu P&L & Bàn Giao
            </div>
            <div className="text-xs text-[#515151]">
              Chốt giờ công thực tế · Chuyển giao tự chủ
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-[#E7E7E5] flex items-center justify-between text-xs text-[#747474]">
            <span>Dự kiến: 14 ngày</span>
            <span className="text-[#F97316] font-medium">Bàn giao 100%</span>
          </div>
        </div>
      </div>

      {/* Bottom Quantitative KPI Telemetry Strip */}
      <div className="p-5 rounded-xl bg-[#F9F9F8] border border-[#E7E7E5] grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-center divide-y md:divide-y-0 md:divide-x divide-[#E7E7E5]">
        <div className="flex flex-col items-center">
          <span className="text-2xl sm:text-3xl font-light text-[#0A0A0A] tabular-nums leading-none mb-1.5">
            1,280<span className="text-base font-normal text-[#581C87]">h</span>
          </span>
          <span className="text-xs text-[#515151]">Giờ công tiết kiệm lũy kế</span>
        </div>

        <div className="flex flex-col items-center pt-3 md:pt-0">
          <span className="text-2xl sm:text-3xl font-light text-[#059669] tabular-nums leading-none mb-1.5">
            -42<span className="text-base font-normal">%</span>
          </span>
          <span className="text-xs text-[#515151]">Tỷ lệ sai lệch tác nghiệp</span>
        </div>

        <div className="flex flex-col items-center pt-3 md:pt-0">
          <span className="text-2xl sm:text-3xl font-light text-[#0A0A0A] tabular-nums leading-none mb-1.5">
            18 <span className="text-base font-normal text-[#581C87]">Agents</span>
          </span>
          <span className="text-xs text-[#515151]">Multi-Agents đang vận hành</span>
        </div>

        <div className="flex flex-col items-center pt-3 md:pt-0">
          <span className="text-2xl sm:text-3xl font-light text-[#F97316] tabular-nums leading-none mb-1.5">
            99.8<span className="text-base font-normal">%</span>
          </span>
          <span className="text-xs text-[#515151]">Độ chính xác nghiệm thu</span>
        </div>
      </div>
    </div>
  );
}
