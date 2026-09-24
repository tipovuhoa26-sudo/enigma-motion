'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/Button';

export function ClientSovereigntySection() {
  return (
    <section
      id="client-sovereignty"
      className="relative w-full py-24 sm:py-32 px-6 md:px-12 bg-[#0B0910] text-white border-t border-[#1E192B] overflow-hidden"
      aria-label="04 Transfer — Tiêu Chuẩn Bàn Giao Tự Chủ"
    >
      {/* Background Deep Emerald-Amber Radial Diffusion */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full pointer-events-none -z-0 opacity-25 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(234,88,12,0.15) 50%, transparent 80%)',
        }}
      />

      <div className="max-w-[1280px] w-full mx-auto relative z-10 flex flex-col gap-12 sm:gap-16">
        
        {/* Editorial Headline */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-emerald-400 font-semibold">
              04 TRANSFER · TIÊU CHUẨN BÀN GIAO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-light tracking-tight text-white leading-[1.08]">
            Tự chủ không phải điểm kết thúc.<br />
            <span className="text-emerald-400 font-normal">Đó là tiêu chuẩn bàn giao.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#94A3B8] font-light mt-4 leading-relaxed">
            Sunext không thiết kế hệ thống để doanh nghiệp phụ thuộc vào hợp đồng dịch vụ kéo dài. Chúng tôi chuyển giao toàn bộ mã nguồn, runbook SOP và nâng bậc nhân sự nội bộ để tổ chức làm chủ 100% vận hành AI.
          </p>
        </div>

        {/* Visual Metaphor: Sunext Core Shifts to Outside Advisor -> Client Team Becomes Radiant Nucleus */}
        <div className="w-full rounded-3xl bg-[#110E1C] border border-[#262038] p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          
          {/* Subtle Ambient Dot Grid */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #10B981 1px, transparent 0)',
              backgroundSize: '28px 28px',
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left & Center: The Transformation Diagram (8 cols) */}
            <div className="lg:col-span-8 w-full flex items-center justify-center">
              <svg viewBox="0 0 760 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-h-[380px] overflow-visible">
                <defs>
                  {/* Client Sovereign Emerald Core */}
                  <radialGradient id="client-core-emerald" cx="45%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#ECFDF5" />
                    <stop offset="35%" stopColor="#6EE7B7" />
                    <stop offset="70%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#047857" />
                  </radialGradient>

                  {/* Transfer Beam */}
                  <linearGradient id="transfer-beam" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#EA580C" />
                    <stop offset="50%" stopColor="#7000FF" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>

                  {/* Glow filter */}
                  <filter id="emerald-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Connecting Laser Beam from Sunext to Client Team */}
                <line x1="160" y1="190" x2="520" y2="190" stroke="url(#transfer-beam)" strokeWidth="2.4" />

                {/* Moving Handover Pulse */}
                <circle cy="190" r="4.5" fill="#10B981" filter="url(#emerald-glow)">
                  <animate attributeName="cx" from="160" to="520" dur="2.4s" repeatCount="indefinite" />
                </circle>

                {/* Gate 4 Checkpoint Badge */}
                <g transform="translate(265, 172)">
                  <rect width="150" height="34" rx="7" fill="#1A1528" stroke="#10B981" strokeWidth="1.2" />
                  <text x="75" y="21" textAnchor="middle" fill="#A7F3D0" fontSize="10" fontFamily="monospace" fontWeight="700">
                    GATE 4: BÀN GIAO IP →
                  </text>
                </g>

                {/* ORIGIN: SUNEXT SATELLITE (Shifted to External Advisor) */}
                <g transform="translate(160, 190)">
                  <circle cx="0" cy="0" r="50" fill="none" stroke="#7000FF" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.35">
                    <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="30s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="0" cy="0" r="38" fill="#1A1528" stroke="#7000FF" strokeWidth="1.8" />
                  <circle cx="0" cy="0" r="10" fill="#EA580C" />
                  <text x="0" y="-3" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontFamily="monospace" fontWeight="800">
                    SUNEXT
                  </text>
                  <text x="0" y="10" textAnchor="middle" fill="#EA580C" fontSize="7.5" fontFamily="monospace" fontWeight="700">
                    CỐ VẤN NGOÀI
                  </text>
                  <text x="0" y="58" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="sans-serif">
                    Bảo hành &amp; R&amp;D
                  </text>
                </g>

                {/* DESTINATION / CORE: THE NEW CLIENT NUCLEUS */}
                <g transform="translate(520, 190)">
                  {/* Radiant Outer Orbit */}
                  <circle cx="0" cy="0" r="95" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.35">
                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="45s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="0" cy="0" r="68" fill="none" stroke="#34D399" strokeWidth="1.0" strokeDasharray="2 4" opacity="0.45">
                    <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="25s" repeatCount="indefinite" />
                  </circle>

                  {/* 5 Orbiting Talent Nodes */}
                  {[
                    { label: 'L1 Aware', a: 0, r: 85 },
                    { label: 'L2 User', a: 72, r: 85 },
                    { label: 'L3 Superuser', a: 144, r: 85 },
                    { label: 'L4 Builder', a: 216, r: 85 },
                    { label: 'L5 Master', a: 288, r: 85 },
                  ].map((node, i) => {
                    const rad = (node.a * Math.PI) / 180;
                    const nx = node.r * Math.cos(rad);
                    const ny = node.r * Math.sin(rad);
                    return (
                      <g key={`talent-node-${i}`} transform={`translate(${nx}, ${ny})`}>
                        <circle cx="0" cy="0" r="10" fill="#064E3B" stroke="#10B981" strokeWidth="1.2" />
                        <text x="0" y="3" textAnchor="middle" fill="#A7F3D0" fontSize="7" fontFamily="monospace" fontWeight="700">
                          {i + 1}
                        </text>
                        <text
                          x="0"
                          y={ny > 0 ? 18 : -14}
                          textAnchor="middle"
                          fill="#D1FAE5"
                          fontSize="8.5"
                          fontFamily="monospace"
                        >
                          {node.label}
                        </text>
                      </g>
                    );
                  })}

                  {/* Client Radiant Disc Core */}
                  <circle
                    cx="0"
                    cy="0"
                    r="48"
                    fill="url(#client-core-emerald)"
                    filter="url(#emerald-glow)"
                  />
                  <circle cx="0" cy="0" r="48" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.9" />
                  <circle cx="0" cy="0" r="16" fill="#FFFFFF" fillOpacity="0.3" />
                  <circle cx="0" cy="0" r="6" fill="#FFFFFF" />

                  {/* Nucleus Text */}
                  <text x="0" y="-3" textAnchor="middle" fill="#064E3B" fontSize="9" fontFamily="monospace" fontWeight="900" letterSpacing="0.08em">
                    ĐỘI NGŨ
                  </text>
                  <text x="0" y="10" textAnchor="middle" fill="#064E3B" fontSize="8.5" fontFamily="monospace" fontWeight="800">
                    DOANH NGHIỆP
                  </text>
                  <text x="0" y="68" textAnchor="middle" fill="#34D399" fontSize="10" fontFamily="monospace" fontWeight="800" letterSpacing="0.1em">
                    TỰ CHỦ 100%
                  </text>
                </g>
              </svg>
            </div>

            {/* Right Column: Handover Checklist (4 cols) */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-4 border-l border-white/10 lg:pl-8">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>CHỦ QUYỀN SỐ VĨNH VIỄN</span>
              </span>

              <div className="space-y-3 text-xs sm:text-sm text-neutral-300 font-light">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Sở hữu 100% mã nguồn, prompt chains và cấu hình Private VPC</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Bộ Runbook SOP tài liệu hóa chi tiết từng quy trình vận hành</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Đội ngũ nội bộ tự tinh chỉnh, cập nhật kiến thức vào Vector DB</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Hoàn toàn không bị trói buộc (no vendor lock-in) vào chi phí retainer</span>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/danh-gia-san-sang-ai">
                  <Button variant="outline" size="sm" className="rounded-xl text-xs font-mono text-white border-white/20 hover:border-emerald-400 hover:text-emerald-300">
                    <span>Đo Độ Sẵn Sàng Chuyển Giao</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>

          {/* Bottom Philosophy Statement Badge */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <span className="inline-block px-5 py-2 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-mono text-xs sm:text-sm font-medium">
              &ldquo;Sunext xây năng lực để chính mình không còn phải đứng ở trung tâm.&rdquo;
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
