'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Gate {
  id: string;
  name: string;
  gateName: string;
  sub: string;
  annotation?: string;
  isOutcome?: boolean;
}

const GATES: Gate[] = [
  {
    id: 'P1',
    name: 'DISCOVER',
    gateName: 'Gate 1 · Data & API Readiness',
    sub: 'Chốt bài toán',
  },
  {
    id: 'P2',
    name: 'BUILD',
    gateName: 'Gate 2 · Architecture & Security',
    sub: 'Xây & tích hợp',
    annotation: 'Private VPC / On-prem',
  },
  {
    id: 'P3',
    name: 'OPERATE',
    gateName: 'Gate 3 · UAT & Controlled Run',
    sub: 'Chạy thực tế',
  },
  {
    id: 'P4',
    name: 'TRANSFER',
    gateName: 'Gate 4 · Handover & Adoption',
    sub: 'Bàn giao & mở rộng',
    isOutcome: true,
  },
];

export function FourGatesProgressSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(3); // All 4 illuminated by default
  const [showOutcomeBadge, setShowOutcomeBadge] = useState<boolean>(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Play deliberate business progression: Discover -> Build -> Operate -> Transfer
          setActiveStep(0);
          setShowOutcomeBadge(false);

          const t1 = setTimeout(() => setActiveStep(1), 250);
          const t2 = setTimeout(() => setActiveStep(2), 500);
          const t3 = setTimeout(() => {
            setActiveStep(3);
            const tBadge = setTimeout(() => setShowOutcomeBadge(true), 350);
            return () => clearTimeout(tBadge);
          }, 850);

          return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
          };
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      id="delivery"
      className="relative w-full pt-20 sm:pt-24 pb-24 sm:pb-28 px-6 md:px-12 bg-[#0B0910] border-y border-[#1E192B] text-white overflow-hidden"
    >
      {/* Background Deep Space Radial Glow */}
      <div
        className="absolute w-[800px] h-[400px] -top-32 left-1/2 -translate-x-1/2 rounded-full pointer-events-none -z-0 opacity-25 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(112,0,255,0.4) 0%, rgba(234,88,12,0.15) 50%, transparent 80%)',
        }}
      />

      {/* Subtle Dark Circuit Matrix */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #A855F7 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Section Headline: Confident Editorial Title in Dark Titanium */}
        <div className="mb-14 sm:mb-16 text-left max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#A855F7] font-semibold">
              03 OPERATE · KIỂM SOÁT TRƯỚC KHI MỞ RỘNG
            </span>
            <span className="text-[#3A354D] text-xs">/</span>
            <span className="text-xs font-mono font-medium text-[#94A3B8]">
              4 Phases · 4 Go/No-Go Decision Gates
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-light tracking-tight text-white leading-[1.08]">
            Kiểm soát trước khi mở rộng.
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] font-light mt-3 max-w-2xl leading-relaxed">
            Không triển khai AI theo cảm tính. Mọi dự án đều bước qua 4 chốt kiểm định độc lập về dữ liệu, an toàn hạ tầng Private VPC, UAT hiện trường và nghiệm thu bằng quyền tự chủ hoàn toàn của doanh nghiệp.
          </p>
        </div>

        {/* ==================================================================== */}
        {/* THE SINGLE PROGRESSION LASER BEAM                                     */}
        {/* ==================================================================== */}
        <div className="relative w-full py-10 my-4 select-none">
          
          <div className="relative">

            {/* Base Background Track Hairline */}
            <div className="absolute top-6 sm:top-7 -translate-y-1/2 left-[12.5%] right-[12.5%] h-[2px] bg-[#1E192B] z-0" />

            {/* Illuminated Progressive Laser Beam */}
            <div className="absolute top-6 sm:top-7 -translate-y-1/2 left-[12.5%] right-[12.5%] h-[3px] z-0 pointer-events-none">
              <div
                className="h-full bg-gradient-to-r from-[#7000FF] via-[#A855F7] to-[#EA580C] shadow-[0_0_12px_rgba(168,85,247,0.8)] transition-all duration-700 ease-out"
                style={{ width: `${(activeStep / 3) * 100}%` }}
              />
            </div>

            {/* 4 Pure Nodes in Balanced 4-Column Grid */}
            <div className="relative grid grid-cols-4 z-10">
              {GATES.map((gate, idx) => {
                const isPassed = activeStep >= idx;
                const isCurrent = activeStep === idx;
                const isScale = gate.isOutcome;

                return (
                  <div
                    key={gate.id}
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    {/* Node Visual */}
                    <div className="relative flex items-center justify-center">
                      {isScale && isPassed && (
                        <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#EA580C]/25 animate-ping opacity-60 pointer-events-none" />
                      )}

                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isScale && isPassed
                            ? 'bg-[#EA580C] text-white shadow-[0_0_20px_rgba(234,88,12,0.6)] scale-105 ring-2 ring-orange-300'
                            : isPassed
                            ? 'bg-[#1E1435] text-white border-2 border-[#A855F7] shadow-[0_0_15px_rgba(112,0,255,0.4)]'
                            : 'bg-[#120F1D] text-[#64748B] border border-[#2D2640]'
                        }`}
                      >
                        {isPassed ? (
                          <span className="w-2.5 h-2.5 rounded-full bg-white block shadow-xs" />
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-[#475569] block" />
                        )}
                      </div>
                    </div>

                    {/* Stage Label */}
                    <div className="mt-5 text-center flex flex-col items-center">
                      <span
                        className={`text-xs sm:text-sm font-mono font-bold tracking-wider transition-colors ${
                          isScale && isPassed
                            ? 'text-[#FB923C]'
                            : isPassed
                            ? 'text-white'
                            : 'text-[#64748B]'
                        }`}
                      >
                        {gate.name}
                      </span>

                      {/* Subtitle / Action */}
                      <span className="text-xs text-[#94A3B8] font-light text-center mt-1">
                        {gate.sub}
                      </span>

                      {/* Decision Gate Badge */}
                      <div className="mt-2.5 flex flex-col items-center">
                        <span className={`text-[10px] font-mono px-2.5 py-1 rounded-md border transition-all duration-200 ${
                          isCurrent
                            ? 'bg-[#1E1435] border-[#A855F7] text-[#C084FC] font-semibold shadow-xs'
                            : 'bg-[#151221] border-[#2E2842] text-[#86809B]'
                        }`}>
                          {gate.gateName}
                        </span>
                        {gate.annotation && (
                          <span className="text-[9.5px] font-mono text-[#A855F7] mt-1">
                            {gate.annotation}
                          </span>
                        )}
                        {isScale && showOutcomeBadge && (
                          <span className="text-[10.5px] font-mono font-bold text-[#FFF7ED] mt-2 px-3 py-1 rounded-full bg-[#EA580C] shadow-[0_0_15px_rgba(234,88,12,0.5)] animate-in fade-in duration-300">
                            Doanh nghiệp tự chủ
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Security & Sovereignty Assurance Strip */}
        <div className="mt-12 pt-6 border-t border-[#1E192B] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#86809B]">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#C084FC]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC]" />
              <span>Zero Data Retention (ZDR)</span>
            </span>
            <span className="flex items-center gap-1.5 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
              <span>Private VPC / On-Premise Isolated</span>
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Human-in-the-Loop Sovereign Control</span>
            </span>
          </div>

          <div className="text-[11px] text-[#64748B]">
            Chuẩn kiểm soát: <strong className="text-neutral-300 font-mono">SOC2 / ISO 27001 Methodology</strong>
          </div>
        </div>

      </div>
    </section>
  );
}

