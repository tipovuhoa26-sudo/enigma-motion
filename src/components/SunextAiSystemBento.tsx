'use client';

import React, { useState } from 'react';
import { 
  Bot, 
  Database, 
  Users, 
  GitBranch, 
  ShieldCheck, 
  Zap, 
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
  Lock,
  Cpu
} from 'lucide-react';

export function SunextAiSystemBento() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section 
      id="system" 
      className="relative w-full py-20 px-6 md:px-12 lg:px-20 bg-[#FAF9FC]/60 border-t border-b border-[#EAEAEA] overflow-hidden"
      data-motion="bento"
    >
      {/* Background oversized watermark text */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none text-[120px] sm:text-[180px] lg:text-[230px] font-black text-black/[0.02] tracking-tighter z-0 uppercase"
        aria-hidden="true"
      >
        ARCHITECTURE
      </div>

      <div className="max-w-[1280px] w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8FC] border border-[#E8E8E8] text-xs font-semibold text-[#6B21A8] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
              SUNEXT AI SYSTEM ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#111111] leading-tight max-w-[720px]">
              Kiến trúc vận hành AI <span className="font-medium text-[#111111]">toàn diện & khép kín</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#666666] max-w-[420px] leading-relaxed">
            Không triển khai các mô hình AI rời rạc. Sunext liên kết 7 cấu phần thiết yếu thành một hệ sinh thái vận hành duy nhất, đo lường trực tiếp trên P&L.
          </p>
        </div>

        {/* 7-Block Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          
          {/* 01. AI AGENTS (Spans 2 columns on lg) */}
          <div
            onMouseEnter={() => setActiveCard('agents')}
            onMouseLeave={() => setActiveCard(null)}
            className={`group relative lg:col-span-2 rounded-2xl p-6 sm:p-8 bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md ${
              activeCard === 'agents' 
                ? 'border-[#6B21A8] shadow-[#6B21A8]/5' 
                : 'border-[#E8E8E8] hover:border-[#6B21A8]/40'
            }`}
          >
            {/* Ambient inner gradient */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#6B21A8]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8FC] border border-[#E8E8E8] flex items-center justify-center text-[#6B21A8] group-hover:scale-105 group-hover:border-[#6B21A8]/40 transition-all">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#F97316]">Core Intelligence</span>
                    <h3 className="text-xl font-semibold text-[#111111]">Hệ Thống AI Agents Đa Tác Vụ</h3>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF8FC] border border-[#E8E8E8] text-[11px] font-medium text-[#6B21A8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
                  Autonomous Orchestration
                </div>
              </div>

              <p className="text-sm text-[#666666] leading-relaxed max-w-[560px] mb-6">
                Các chuyên viên số (Agents) phối hợp theo quy trình logic đa tầng: tự động phân tích hồ sơ, rà soát pháp lý hợp đồng, kiểm định lỗi chứng từ và đề xuất quyết định có người giám sát.
              </p>
            </div>

            {/* Micro Visual: 3 Active Agent Nodes */}
            <div className="relative z-10 pt-4 border-t border-[#F0F0F0] grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-[#FAFAFA] border border-[#EFEFEF] group-hover:border-[#6B21A8]/20 transition-colors">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#777777] mb-1">
                  <span>AGENT-FINANCE</span>
                  <span className="text-[#059669] font-semibold">Active</span>
                </div>
                <div className="text-xs font-semibold text-[#111111]">Tự động đối soát báo cáo</div>
                <div className="text-[11px] text-[#888888] mt-0.5">Xử lý 4,200 dòng/phút</div>
              </div>

              <div className="p-3 rounded-xl bg-[#FAFAFA] border border-[#EFEFEF] group-hover:border-[#6B21A8]/20 transition-colors">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#777777] mb-1">
                  <span>AGENT-LEGAL</span>
                  <span className="text-[#059669] font-semibold">Active</span>
                </div>
                <div className="text-xs font-semibold text-[#111111]">Rà soát hợp đồng & rủi ro</div>
                <div className="text-[11px] text-[#888888] mt-0.5">Thời gian quét 8.4s</div>
              </div>

              <div className="p-3 rounded-xl bg-[#FAFAFA] border border-[#EFEFEF] group-hover:border-[#6B21A8]/20 transition-colors">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#777777] mb-1">
                  <span>AGENT-QC</span>
                  <span className="text-[#059669] font-semibold">Active</span>
                </div>
                <div className="text-xs font-semibold text-[#111111]">Kiểm định chuẩn SOP</div>
                <div className="text-[11px] text-[#888888] mt-0.5">Độ chính xác 99.8%</div>
              </div>
            </div>
          </div>

          {/* 02. DATA MESH & PIPELINE (1 column on lg) */}
          <div
            onMouseEnter={() => setActiveCard('data')}
            onMouseLeave={() => setActiveCard(null)}
            className={`group relative rounded-2xl p-6 sm:p-8 bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md ${
              activeCard === 'data' 
                ? 'border-[#6B21A8] shadow-[#6B21A8]/5' 
                : 'border-[#E8E8E8] hover:border-[#6B21A8]/40'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8FC] border border-[#E8E8E8] flex items-center justify-center text-[#6B21A8] group-hover:scale-105 group-hover:border-[#6B21A8]/40 transition-all">
                  <Database className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#6B21A8]">Zero-Leak</span>
              </div>

              <h3 className="text-xl font-semibold text-[#111111] mb-2">Data Mesh & Kho Tri Thức</h3>
              <p className="text-sm text-[#666666] leading-relaxed mb-6">
                Tích hợp dữ liệu sạch từ ERP, CRM, SAP và kho tài liệu nội bộ vào Vector Database riêng biệt, cô lập 100% trên hạ tầng doanh nghiệp.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF8FC] border border-[#E8E8E8] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#059669]" />
                <span className="text-xs font-semibold text-[#111111]">Hạ tầng On-Prem / Private Cloud</span>
              </div>
              <span className="text-[11px] font-mono text-[#6B21A8] font-semibold">100% Isolated</span>
            </div>
          </div>

          {/* 03. PEOPLE (Con Người & Năng Lực Vận Hành) */}
          <div
            onMouseEnter={() => setActiveCard('people')}
            onMouseLeave={() => setActiveCard(null)}
            className={`group relative rounded-2xl p-6 sm:p-8 bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md ${
              activeCard === 'people' 
                ? 'border-[#6B21A8] shadow-[#6B21A8]/5' 
                : 'border-[#E8E8E8] hover:border-[#6B21A8]/40'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8FC] border border-[#E8E8E8] flex items-center justify-center text-[#6B21A8] group-hover:scale-105 group-hover:border-[#6B21A8]/40 transition-all">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-bold text-[#F97316]">70% Nỗ Lực (BCG)</span>
              </div>

              <h3 className="text-xl font-semibold text-[#111111] mb-2">Con Người & Tác Vụ SOP</h3>
              <p className="text-sm text-[#666666] leading-relaxed mb-6">
                Đào tạo đội ngũ nhân sự làm chủ công cụ, biến tri thức ngầm thành SOP chuẩn hóa. Đội ngũ không bị thay thế mà được tăng năng lực thực thi.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-[#111111]">
              <CheckCircle2 className="w-4 h-4 text-[#059669]" />
              <span>Đội ngũ tự vận hành sau chuyển giao</span>
            </div>
          </div>

          {/* 04. PROCESS (Quy Trình Nghiệp Vụ) */}
          <div
            onMouseEnter={() => setActiveCard('process')}
            onMouseLeave={() => setActiveCard(null)}
            className={`group relative rounded-2xl p-6 sm:p-8 bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md ${
              activeCard === 'process' 
                ? 'border-[#6B21A8] shadow-[#6B21A8]/5' 
                : 'border-[#E8E8E8] hover:border-[#6B21A8]/40'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8FC] border border-[#E8E8E8] flex items-center justify-center text-[#6B21A8] group-hover:scale-105 group-hover:border-[#6B21A8]/40 transition-all">
                  <GitBranch className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-[#666666]">Eliminate Bottlenecks</span>
              </div>

              <h3 className="text-xl font-semibold text-[#111111] mb-2">Tái Thiết Quy Trình</h3>
              <p className="text-sm text-[#666666] leading-relaxed mb-6">
                Cắt gọt các bước thừa thải, thiết kế lại luồng việc tuyến tính và song song trước khi đưa AI vào thay thế thao tác thủ công.
              </p>
            </div>

            <div className="flex items-center justify-between text-xs font-mono p-2.5 rounded-lg bg-[#FAFAFA] border border-[#EFEFEF]">
              <span className="text-[#888888]">Thủ Công: 8 Bước</span>
              <span className="text-[#6B21A8] font-bold">➔</span>
              <span className="text-[#059669] font-bold">AI Luồng: 2 Bước</span>
            </div>
          </div>

          {/* 05. GOVERNANCE (Quản Trị & Bảo Mật) */}
          <div
            onMouseEnter={() => setActiveCard('governance')}
            onMouseLeave={() => setActiveCard(null)}
            className={`group relative rounded-2xl p-6 sm:p-8 bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md ${
              activeCard === 'governance' 
                ? 'border-[#6B21A8] shadow-[#6B21A8]/5' 
                : 'border-[#E8E8E8] hover:border-[#6B21A8]/40'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8FC] border border-[#E8E8E8] flex items-center justify-center text-[#6B21A8] group-hover:scale-105 group-hover:border-[#6B21A8]/40 transition-all">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-[#059669] font-semibold">Strict Guardrails</span>
              </div>

              <h3 className="text-xl font-semibold text-[#111111] mb-2">Quản Trị & Tuân Thủ</h3>
              <p className="text-sm text-[#666666] leading-relaxed mb-6">
                Kiểm soát rủi ro hallucination, phân quyền theo vai trò (RBAC/RLS), audit log minh bạch từng phản hồi và cam kết pháp lý NDA.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-[#111111]">
              <span className="w-2 h-2 rounded-full bg-[#059669]" />
              <span>Audit Log 100% quyết định của AI</span>
            </div>
          </div>

          {/* 06. AUTOMATION (Spans 2 columns on lg) */}
          <div
            onMouseEnter={() => setActiveCard('automation')}
            onMouseLeave={() => setActiveCard(null)}
            className={`group relative lg:col-span-2 rounded-2xl p-6 sm:p-8 bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md ${
              activeCard === 'automation' 
                ? 'border-[#6B21A8] shadow-[#6B21A8]/5' 
                : 'border-[#E8E8E8] hover:border-[#6B21A8]/40'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8FC] border border-[#E8E8E8] flex items-center justify-center text-[#6B21A8] group-hover:scale-105 group-hover:border-[#6B21A8]/40 transition-all">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#6B21A8]">End-to-End Execution</span>
                    <h3 className="text-xl font-semibold text-[#111111]">Tự Động Hóa Vận Hành Liền Mạch</h3>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF8FC] border border-[#E8E8E8] text-[11px] font-mono text-[#666666]">
                  Trigger ➔ AI Action ➔ Approval
                </div>
              </div>

              <p className="text-sm text-[#666666] leading-relaxed max-w-[580px] mb-6">
                Kích hoạt các luồng công việc tự động không cần can thiệp tay: từ khi nhận email/file chứng từ của đối tác, AI tự trích xuất, xác thực đối chiếu với cơ sở dữ liệu và chuyển tiếp phê duyệt chỉ trong vài giây.
              </p>
            </div>

            <div className="pt-4 border-t border-[#F0F0F0] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-lg font-bold text-[#111111]">18+</div>
                  <div className="text-[11px] text-[#777777]">Quy trình tự động hóa sẵn</div>
                </div>
                <div className="w-px h-8 bg-[#EAEAEA]" />
                <div>
                  <div className="text-lg font-bold text-[#059669]">0.2s</div>
                  <div className="text-[11px] text-[#777777]">Độ trễ trung bình trigger</div>
                </div>
                <div className="w-px h-8 bg-[#EAEAEA]" />
                <div>
                  <div className="text-lg font-bold text-[#6B21A8]">1,280h</div>
                  <div className="text-[11px] text-[#777777]">Giờ công tiết kiệm trung bình</div>
                </div>
              </div>

              <div className="text-xs font-semibold text-[#6B21A8] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>Khám phá các trigger</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* 07. ROI & BUSINESS VALUE (1 column on lg) */}
          <div
            onMouseEnter={() => setActiveCard('roi')}
            onMouseLeave={() => setActiveCard(null)}
            className={`group relative rounded-2xl p-6 sm:p-8 bg-[#111111] text-white border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-lg ${
              activeCard === 'roi' 
                ? 'border-[#F97316]' 
                : 'border-[#2A2A2A] hover:border-[#F97316]/50'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#222222] border border-[#333333] flex items-center justify-center text-[#F97316] group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-bold text-[#F97316] uppercase">P&L Acceptance</span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">Đo Lường & Nghiệm Thu ROI</h3>
              <p className="text-sm text-[#AAAAAA] leading-relaxed mb-6">
                Chỉ nghiệm thu khi đạt chỉ số định lượng đã cam kết: giờ tiết kiệm thực tế, tỷ lệ lỗi giảm thiểu và tác động thực tế tới chi phí vận hành.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#1C1C1C] border border-[#2D2D2D] flex items-center justify-between">
              <div>
                <div className="text-[11px] text-[#888888]">Tác động P&L trung bình</div>
                <div className="text-base font-bold text-[#F97316]">-30% đến -65%</div>
              </div>
              <span className="text-xs font-mono text-[#059669] font-bold">Gate 4 Validated</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
