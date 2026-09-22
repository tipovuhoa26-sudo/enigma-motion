'use client';

import React, { useState } from 'react';
import { ArrowRight, DollarSign, Clock, TrendingDown } from 'lucide-react';

const METRICS_SHOWCASE = [
  {
    id: 'time',
    label: 'Thời gian xử lý',
    value: '−75%',
    detail: '2 ngày giảm còn 3 giờ',
    icon: Clock,
  },
  {
    id: 'cost',
    label: 'Chi phí tác nghiệp',
    value: '−55%',
    detail: 'Cắt giảm thao tác nhập liệu thủ công',
    icon: TrendingDown,
  },
  {
    id: 'payback',
    label: 'Thời gian hoàn vốn',
    value: '< 4 tháng',
    detail: 'Hòa vốn ngay trong quý đầu tiên',
    icon: DollarSign,
  },
];

export function KpiMeasurementSection() {
  const [selectedMetric, setSelectedMetric] = useState(0);

  return (
    <section className="relative w-full py-24 sm:py-32 px-6 md:px-12 lg:px-20 bg-white border-b border-[#E7E7E5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        
        {/* 1 Headline + 1 Support Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#581C87] font-semibold mb-2.5 block">
              Nguyên tắc 03
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0A0A0A] leading-tight">
              KPI phải có <span className="font-normal text-[#0A0A0A]">trước AI.</span>
            </h2>
          </div>

          <p className="text-base text-[#515151] max-w-[460px] leading-relaxed font-normal">
            Không triển khai AI theo phong trào. Mọi giải pháp đều phải quy đổi trực tiếp ra tác động P&L và được nghiệm thu bằng kết quả kinh doanh.
          </p>
        </div>

        {/* 1 Main Visual: Show, Don't Tell — The Value Stream (Process -> AI -> Output -> KPI -> P&L) */}
        <div className="w-full rounded-2xl bg-[#0A0A0A] text-white p-6 sm:p-10 lg:p-12 mb-10 shadow-xs relative overflow-hidden">
          
          {/* Header Status */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#262626] mb-10">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-[#C084FC]">HỆ THỐNG (TÍM)</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#525252]" />
              <span className="text-[#F97316] font-semibold">TÁC ĐỘNG P&L THẬT (CAM)</span>
            </div>

            <div className="text-xs font-mono text-[#737373]">
              Nghiệm thu theo hợp đồng cam kết KPI
            </div>
          </div>

          {/* 5-Stage Value Stream Pipeline */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 mb-10">
            
            {/* Step 1: PROCESS */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#171717] border border-[#262626] flex flex-col justify-between h-[120px]">
              <span className="text-[11px] font-mono text-[#A3A3A3]">01 · ĐẦU VÀO</span>
              <div>
                <div className="text-base sm:text-lg font-medium text-white">PROCESS</div>
                <div className="text-xs text-[#737373] mt-0.5">SOP chuẩn hóa</div>
              </div>
            </div>

            {/* Step 2: AI ENGINE */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#171717] border border-[#581C87]/60 flex flex-col justify-between h-[120px]">
              <span className="text-[11px] font-mono text-[#C084FC]">02 · XỬ LÝ</span>
              <div>
                <div className="text-base sm:text-lg font-medium text-white">AI ENGINE</div>
                <div className="text-xs text-[#A3A3A3] mt-0.5">Multi-Agent RAG</div>
              </div>
            </div>

            {/* Step 3: OUTPUT */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#171717] border border-[#262626] flex flex-col justify-between h-[120px]">
              <span className="text-[11px] font-mono text-[#A3A3A3]">03 · ĐẦU RA</span>
              <div>
                <div className="text-base sm:text-lg font-medium text-white">OUTPUT</div>
                <div className="text-xs text-[#737373] mt-0.5">Đối soát tự động</div>
              </div>
            </div>

            {/* Step 4: KPI (Turns Orange) */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#27150A] border border-[#F97316]/60 flex flex-col justify-between h-[120px]">
              <span className="text-[11px] font-mono text-[#F97316]">04 · CHỈ SỐ</span>
              <div>
                <div className="text-base sm:text-lg font-bold text-[#F97316]">KPI</div>
                <div className="text-xs text-[#FED7AA] mt-0.5">Hiệu suất vận hành</div>
              </div>
            </div>

            {/* Step 5: P&L (Turns Orange) */}
            <div className="col-span-2 md:col-span-1 p-4 sm:p-5 rounded-xl bg-gradient-to-br from-[#27150A] to-[#431407] border-2 border-[#F97316] flex flex-col justify-between h-[120px] shadow-[0_0_24px_rgba(249,115,22,0.15)]">
              <span className="text-[11px] font-mono text-[#F97316] font-bold">05 · TÀI CHÍNH</span>
              <div>
                <div className="text-base sm:text-lg font-bold text-white">P&L</div>
                <div className="text-xs text-[#FDBA74] mt-0.5">Dòng tiền đo lường</div>
              </div>
            </div>

          </div>

          {/* Interactive Dynamic KPI Outcome Terminal */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#141414] border border-[#262626] flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="flex items-center gap-2 bg-[#1F1F1F] p-1 rounded-xl border border-[#333333]">
              {METRICS_SHOWCASE.map((m, idx) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setSelectedMetric(idx)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                    selectedMetric === idx
                      ? 'bg-[#F97316] text-white shadow-xs font-semibold'
                      : 'text-[#A3A3A3] hover:text-white'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#F97316] tabular-nums">
                {METRICS_SHOWCASE[selectedMetric].value}
              </span>
              <div>
                <div className="text-base font-medium text-white">
                  {METRICS_SHOWCASE[selectedMetric].label}
                </div>
                <div className="text-xs font-mono text-[#A3A3A3]">
                  {METRICS_SHOWCASE[selectedMetric].detail}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 1 Clear Proof */}
        <div className="flex items-baseline gap-4 pt-2">
          <span className="text-5xl sm:text-6xl font-light tracking-tight text-[#0A0A0A] tabular-nums">
            &lt; 4 tháng
          </span>
          <div className="flex flex-col">
            <span className="text-base font-medium text-[#0A0A0A]">Thời gian hoàn vốn (Payback)</span>
            <span className="text-xs font-mono text-[#747474]">Nghiệm thu định lượng dựa trên bảng đối soát dòng tiền thực tế</span>
          </div>
        </div>

      </div>
    </section>
  );
}

