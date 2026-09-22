'use client';

import React, { useState } from 'react';
import { Database, Server, Activity, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

type SourceKey = 'all' | 'erp' | 'crm' | 'db';

export function DataIntegrationSection() {
  const [activeSource, setActiveSource] = useState<SourceKey>('all');

  return (
    <section className="relative w-full py-24 sm:py-32 px-6 md:px-12 lg:px-20 bg-[#F9F9F8] border-b border-[#E7E7E5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        
        {/* 1 Headline + 1 Support Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#581C87] font-semibold mb-2.5 block">
              Nguyên tắc 02
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0A0A0A] leading-tight">
              Dữ liệu phải <span className="font-normal text-[#0A0A0A]">kết nối được.</span>
            </h2>
          </div>

          <p className="text-base text-[#515151] max-w-[460px] leading-relaxed font-normal">
            Kết nối trực tiếp vào hệ thống hiện hữu, không tạo thêm một silo mới. Dữ liệu vận hành trong ranh giới bảo mật riêng biệt của doanh nghiệp.
          </p>
        </div>

        {/* 1 Main Visual: Show, Don't Tell — Live Data Pulse Convergence */}
        <div className="w-full rounded-2xl bg-white border border-[#E7E7E5] p-6 sm:p-10 lg:p-12 mb-10 shadow-xs">
          
          {/* Boundary Tag */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#E7E7E5] mb-10">
            <div className="flex items-center gap-2 text-xs font-mono text-[#059669]">
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
              <Lock className="w-3.5 h-3.5" />
              <span className="font-semibold uppercase tracking-wider">RANH GIỚI BẢO MẬT CÔ LẬP · PRIVATE VPC BOUNDARY</span>
            </div>

            <div className="text-xs font-mono text-[#747474]">
              Zero-Leak · Không huấn luyện lại Public Model · Mã hóa AES-256
            </div>
          </div>

          {/* Convergence Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-4">
            
            {/* Left: 3 Enterprise Data Sources */}
            <div className="lg:col-span-4 space-y-3">
              {[
                {
                  key: 'erp' as SourceKey,
                  icon: Server,
                  title: 'ERP & Kế toán',
                  sub: 'SAP, Odoo, Bravo, Oracle',
                  protocol: 'REST / SQL',
                },
                {
                  key: 'crm' as SourceKey,
                  icon: Activity,
                  title: 'CRM & Bán hàng',
                  sub: 'HubSpot, Salesforce, Zalo OA',
                  protocol: 'Webhook 2 chiều',
                },
                {
                  key: 'db' as SourceKey,
                  icon: Database,
                  title: 'Kho Tri Thức & DB',
                  sub: 'PostgreSQL, SOP, Hợp đồng',
                  protocol: 'Vector RAG',
                },
              ].map((item) => {
                const Icon = item.icon;
                const isSelected = activeSource === item.key || activeSource === 'all';

                return (
                  <button
                    key={item.key}
                    type="button"
                    onMouseEnter={() => setActiveSource(item.key)}
                    onMouseLeave={() => setActiveSource('all')}
                    onClick={() => setActiveSource(item.key)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#FAF8FC] border-[#581C87] shadow-xs'
                        : 'bg-white border-[#E7E7E5] opacity-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-[#581C87]" />
                        <span className="text-sm font-medium text-[#0A0A0A]">{item.title}</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#581C87] bg-purple-50 px-2 py-0.5 rounded">
                        {item.protocol}
                      </span>
                    </div>
                    <div className="text-xs text-[#747474] pl-6.5">{item.sub}</div>
                  </button>
                );
              })}
            </div>

            {/* Center: Live Pulse Connector & Core Engine */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl bg-[#0A0A0A] text-white relative overflow-hidden">
              {/* Background subtle glow */}
              <div className="absolute inset-0 bg-radial from-[#581C87]/20 via-transparent to-transparent opacity-60" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#581C87] to-[#3B0764] flex items-center justify-center mb-4 shadow-lg ring-4 ring-white/10">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>

                <span className="text-xs font-mono text-[#C084FC] uppercase tracking-wider font-semibold mb-1">
                  Sunext Core Engine
                </span>
                <h3 className="text-lg font-medium text-white mb-2">
                  Xử Lý Trong Private Boundary
                </h3>
                <p className="text-xs text-[#A3A3A3] max-w-[280px] leading-relaxed mb-5">
                  Đối chiếu logic đa nguồn, trích xuất Vector RAG không rời khỏi hạ tầng doanh nghiệp.
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-mono text-[#E5E5E5]">
                  <span className="w-2 h-2 rounded-full bg-[#059669] animate-ping" />
                  <span>Độ trễ đối soát: 0.8s</span>
                </div>
              </div>
            </div>

            {/* Right: Verified Enterprise Output */}
            <div className="lg:col-span-3 space-y-3">
              <div className="p-5 rounded-xl bg-[#FAF8FC] border border-[#581C87]/30 flex flex-col justify-between h-[120px]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#581C87] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                  <span>ĐỐI SOÁT TỰ ĐỘNG</span>
                </div>
                <div className="text-sm font-medium text-[#0A0A0A]">Khớp số liệu 3 chiều</div>
                <div className="text-xs font-mono text-[#059669]">Độ chính xác 99.8%</div>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8FC] border border-[#581C87]/30 flex flex-col justify-between h-[120px]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#581C87] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                  <span>RÀ SOÁT RỦI RO</span>
                </div>
                <div className="text-sm font-medium text-[#0A0A0A]">Cảnh báo bất thường tức thì</div>
                <div className="text-xs font-mono text-[#F97316]">Zero sai lệch số liệu</div>
              </div>
            </div>

          </div>

          {/* Schematic Flow Footer */}
          <div className="mt-8 pt-6 border-t border-[#E7E7E5] flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-[#747474]">
            <span>ERP / CRM / DATABASE</span>
            <span className="text-[#581C87] font-bold">───────→</span>
            <span className="text-[#581C87] font-semibold">PRIVATE VPC CORE</span>
            <span className="text-[#059669] font-bold">───────→</span>
            <span className="text-[#059669] font-semibold">VERIFIED OUTPUT</span>
          </div>

        </div>

        {/* 1 Clear Proof */}
        <div className="flex items-baseline gap-4 pt-2">
          <span className="text-5xl sm:text-6xl font-light tracking-tight text-[#0A0A0A] tabular-nums">
            100%
          </span>
          <div className="flex flex-col">
            <span className="text-base font-medium text-[#0A0A0A]">On-Premise / Private VPC</span>
            <span className="text-xs font-mono text-[#747474]">Dữ liệu không bao giờ rời khỏi hạ tầng và ranh giới doanh nghiệp</span>
          </div>
        </div>

      </div>
    </section>
  );
}
