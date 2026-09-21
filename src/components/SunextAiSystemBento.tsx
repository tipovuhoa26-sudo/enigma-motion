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
  ArrowRight
} from 'lucide-react';

export function SunextAiSystemBento() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section 
      id="system" 
      className="relative w-full py-24 sm:py-28 px-6 md:px-12 lg:px-20 bg-[#F9F9F8] border-b border-[#E7E7E5] overflow-hidden"
      data-motion="bento"
    >
      <div className="max-w-[1280px] w-full mx-auto relative z-10">
        
        {/* Section Header: Editorial & Confident */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 lg:mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#581C87] font-semibold mb-3 block">
              Hệ thống Sunext AI
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0A0A0A] leading-tight max-w-[700px]">
              Kiến trúc vận hành AI <span className="font-normal text-[#0A0A0A]">toàn diện & khép kín</span>
            </h2>
          </div>
          <p className="text-base text-[#515151] max-w-[420px] leading-relaxed">
            Không triển khai các mô hình AI rời rạc. Sunext hợp nhất 7 cấu phần thành một hệ sinh thái vận hành duy nhất, đo lường trực tiếp trên P&L.
          </p>
        </div>

        {/* 7-Block Bento Grid: Lean Editorial Standard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* 01. AI AGENTS (Spans 2 columns on lg) */}
          <div
            onMouseEnter={() => setActiveCard('agents')}
            onMouseLeave={() => setActiveCard(null)}
            className={`relative lg:col-span-2 rounded-2xl p-7 sm:p-9 bg-white border transition-all duration-300 flex flex-col justify-between ${
              activeCard === 'agents' 
                ? 'border-[#581C87] shadow-[0_12px_32px_-8px_rgba(88,28,135,0.08)]' 
                : 'border-[#E7E7E5]'
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8FC] border border-[#E7E7E5] flex items-center justify-center text-[#581C87]">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-[#0A0A0A]">Hệ Thống AI Agents Đa Tác Vụ</h3>
              </div>

              <p className="text-base text-[#515151] leading-relaxed max-w-[620px] mb-8">
                Các chuyên viên số phối hợp theo quy trình logic đa tầng: tự động phân tích hồ sơ, rà soát pháp lý hợp đồng, kiểm định sai lệch chứng từ và đề xuất quyết định có người giám sát.
              </p>
            </div>

            {/* Micro visual: 3 agents */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-5 border-t border-[#E7E7E5]">
              <div className="p-3.5 rounded-xl bg-[#F9F9F8] border border-[#E7E7E5]">
                <div className="text-xs font-semibold text-[#0A0A0A] mb-1">Agent Đối Soát Tài Chính</div>
                <div className="text-xs text-[#747474]">Xử lý 4,200 dòng đối soát/phút</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F9F9F8] border border-[#E7E7E5]">
                <div className="text-xs font-semibold text-[#0A0A0A] mb-1">Agent Rà Soát Hợp Đồng</div>
                <div className="text-xs text-[#747474]">Quét rủi ro điều khoản trong 8.4s</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F9F9F8] border border-[#E7E7E5]">
                <div className="text-xs font-semibold text-[#0A0A0A] mb-1">Agent Kiểm Định QC</div>
                <div className="text-xs text-[#747474]">Độ chính xác chuẩn SOP 99.8%</div>
              </div>
            </div>
          </div>

          {/* 02. DATA MESH & PIPELINE (1 column on lg) */}
          <div
            onMouseEnter={() => setActiveCard('data')}
            onMouseLeave={() => setActiveCard(null)}
            className={`relative rounded-2xl p-7 sm:p-9 bg-white border transition-all duration-300 flex flex-col justify-between ${
              activeCard === 'data' 
                ? 'border-[#581C87] shadow-[0_12px_32px_-8px_rgba(88,28,135,0.08)]' 
                : 'border-[#E7E7E5]'
            }`}
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FAF8FC] border border-[#E7E7E5] flex items-center justify-center text-[#581C87] mb-5">
                <Database className="w-5 h-5" />
              </div>

              <h3 className="text-xl sm:text-2xl font-medium text-[#0A0A0A] mb-3">Data Mesh & Tri Thức</h3>
              <p className="text-base text-[#515151] leading-relaxed mb-6">
                Tích hợp dữ liệu sạch từ ERP, CRM, SAP và kho tài liệu nội bộ vào Vector Database riêng biệt, cô lập 100% trên hạ tầng doanh nghiệp.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E7E7E5] text-xs font-mono text-[#581C87] font-medium">
              100% On-Premise / Private VPC
            </div>
          </div>

          {/* 03. PEOPLE (Con Người & Năng Lực Vận Hành) */}
          <div
            onMouseEnter={() => setActiveCard('people')}
            onMouseLeave={() => setActiveCard(null)}
            className={`relative rounded-2xl p-7 sm:p-9 bg-white border transition-all duration-300 flex flex-col justify-between ${
              activeCard === 'people' 
                ? 'border-[#581C87] shadow-[0_12px_32px_-8px_rgba(88,28,135,0.08)]' 
                : 'border-[#E7E7E5]'
            }`}
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FAF8FC] border border-[#E7E7E5] flex items-center justify-center text-[#581C87] mb-5">
                <Users className="w-5 h-5" />
              </div>

              <h3 className="text-xl sm:text-2xl font-medium text-[#0A0A0A] mb-3">Con Người & Tác Vụ SOP</h3>
              <p className="text-base text-[#515151] leading-relaxed mb-6">
                Đào tạo đội ngũ nhân sự làm chủ công cụ, biến tri thức ngầm thành SOP chuẩn hóa. Đội ngũ tự chủ hoàn toàn sau khi chuyển giao.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E7E7E5] text-xs font-mono text-[#F97316] font-semibold">
              70% nỗ lực chuyển đổi theo chuẩn BCG
            </div>
          </div>

          {/* 04. PROCESS (Quy Trình Nghiệp Vụ) */}
          <div
            onMouseEnter={() => setActiveCard('process')}
            onMouseLeave={() => setActiveCard(null)}
            className={`relative rounded-2xl p-7 sm:p-9 bg-white border transition-all duration-300 flex flex-col justify-between ${
              activeCard === 'process' 
                ? 'border-[#581C87] shadow-[0_12px_32px_-8px_rgba(88,28,135,0.08)]' 
                : 'border-[#E7E7E5]'
            }`}
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FAF8FC] border border-[#E7E7E5] flex items-center justify-center text-[#581C87] mb-5">
                <GitBranch className="w-5 h-5" />
              </div>

              <h3 className="text-xl sm:text-2xl font-medium text-[#0A0A0A] mb-3">Tái Thiết Quy Trình</h3>
              <p className="text-base text-[#515151] leading-relaxed mb-6">
                Cắt gọt các bước thừa thãi, thiết kế lại luồng việc tuyến tính và song song trước khi đưa AI vào thay thế thao tác thủ công.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E7E7E5] text-xs font-mono text-[#0A0A0A]">
              Rút ngắn từ 8 bước thủ công ➔ 2 bước AI
            </div>
          </div>

          {/* 05. GOVERNANCE (Quản Trị & Bảo Mật) */}
          <div
            onMouseEnter={() => setActiveCard('governance')}
            onMouseLeave={() => setActiveCard(null)}
            className={`relative rounded-2xl p-7 sm:p-9 bg-white border transition-all duration-300 flex flex-col justify-between ${
              activeCard === 'governance' 
                ? 'border-[#581C87] shadow-[0_12px_32px_-8px_rgba(88,28,135,0.08)]' 
                : 'border-[#E7E7E5]'
            }`}
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FAF8FC] border border-[#E7E7E5] flex items-center justify-center text-[#581C87] mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>

              <h3 className="text-xl sm:text-2xl font-medium text-[#0A0A0A] mb-3">Quản Trị & Tuân Thủ</h3>
              <p className="text-base text-[#515151] leading-relaxed mb-6">
                Kiểm soát rủi ro hallucination, phân quyền theo vai trò (RBAC/RLS), audit log minh bạch từng phản hồi và cam kết pháp lý NDA.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E7E7E5] text-xs font-mono text-[#059669] font-medium">
              100% Audit Log & Cam kết NDA
            </div>
          </div>

          {/* 06. AUTOMATION (Spans 2 columns on lg) */}
          <div
            onMouseEnter={() => setActiveCard('automation')}
            onMouseLeave={() => setActiveCard(null)}
            className={`relative lg:col-span-2 rounded-2xl p-7 sm:p-9 bg-white border transition-all duration-300 flex flex-col justify-between ${
              activeCard === 'automation' 
                ? 'border-[#581C87] shadow-[0_12px_32px_-8px_rgba(88,28,135,0.08)]' 
                : 'border-[#E7E7E5]'
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8FC] border border-[#E7E7E5] flex items-center justify-center text-[#581C87]">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-[#0A0A0A]">Tự Động Hóa Vận Hành Liền Mạch</h3>
              </div>

              <p className="text-base text-[#515151] leading-relaxed max-w-[640px] mb-8">
                Kích hoạt các luồng công việc tự động không cần can thiệp tay: từ khi nhận chứng từ, AI tự trích xuất, xác thực đối chiếu với cơ sở dữ liệu và chuyển tiếp phê duyệt chỉ trong vài giây.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-5 border-t border-[#E7E7E5]">
              <div>
                <span className="text-xl font-light text-[#0A0A0A] block">18+</span>
                <span className="text-xs text-[#747474]">Quy trình tự động hóa sẵn</span>
              </div>
              <div className="w-px h-8 bg-[#E7E7E5]" />
              <div>
                <span className="text-xl font-light text-[#059669] block">0.2s</span>
                <span className="text-xs text-[#747474]">Độ trễ trung bình trigger</span>
              </div>
              <div className="w-px h-8 bg-[#E7E7E5]" />
              <div>
                <span className="text-xl font-light text-[#581C87] block">1,280h</span>
                <span className="text-xs text-[#747474]">Giờ công tiết kiệm tích lũy</span>
              </div>
            </div>
          </div>

          {/* 07. ROI & BUSINESS VALUE (1 column on lg) */}
          <div
            onMouseEnter={() => setActiveCard('roi')}
            onMouseLeave={() => setActiveCard(null)}
            className={`relative rounded-2xl p-7 sm:p-9 bg-[#0A0A0A] text-white border transition-all duration-300 flex flex-col justify-between shadow-sm ${
              activeCard === 'roi' 
                ? 'border-[#F97316]' 
                : 'border-[#222222]'
            }`}
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#333333] flex items-center justify-center text-[#F97316] mb-5">
                <TrendingUp className="w-5 h-5" />
              </div>

              <h3 className="text-xl sm:text-2xl font-medium text-white mb-3">Đo Lường & Nghiệm Thu P&L</h3>
              <p className="text-base text-[#AAAAAA] leading-relaxed mb-6">
                Chỉ nghiệm thu khi đạt chỉ số định lượng đã cam kết: giờ tiết kiệm thực tế, tỷ lệ lỗi giảm thiểu và tác động thực tế tới chi phí vận hành.
              </p>
            </div>

            <div className="pt-4 border-t border-[#222222] flex items-center justify-between">
              <span className="text-xs text-[#888888]">Tác động chi phí</span>
              <span className="text-base font-bold text-[#F97316]">-30% đến -65%</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
