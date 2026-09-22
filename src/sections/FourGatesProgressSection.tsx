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
      className="relative w-full pt-16 sm:pt-20 pb-20 sm:pb-24 px-6 md:px-12 bg-white border-b border-[#E7E7E5] overflow-hidden"
    >
      {/* Background Subtle Flattened Orbit Connecting with Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <svg viewBox="0 0 1440 320" fill="none" className="w-full h-full">
          <path
            d="M -100 160 C 350 240, 1090 240, 1540 160"
            stroke="#E7E5DF"
            strokeWidth="0.8"
            strokeDasharray="4 8"
          />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Section Headline: Confident Editorial Title with Framing */}
        <div className="mb-12 sm:mb-14 text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#F97316] font-semibold">
              Phương pháp Sunext
            </span>
            <span className="text-[#D1D1CE] text-xs">/</span>
            <span className="text-xs font-mono font-medium text-[#747474]">
              4 Pha Triển Khai · 4 Chốt Kiểm Soát
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-light tracking-tight text-[#0A0A0A] leading-[1.08]">
            Kiểm soát trước khi mở rộng.
          </h2>
        </div>

        {/* ==================================================================== */}
        {/* THE SINGLE PROGRESSION BEAM: DISCOVER ──── BUILD ──── OPERATE ──── TRANSFER */}
        {/* ==================================================================== */}
        <div className="relative w-full py-10 my-4 select-none">
          
          {/* Progression Track System with Exact Geometric Center Alignment (12.5% to 87.5%) */}
          <div className="relative">

            {/* Base Background Track Hairline: Exactly from Center of Node 0 (12.5%) to Center of Node 3 (87.5%) */}
            <div className="absolute top-6 sm:top-7 -translate-y-1/2 left-[12.5%] right-[12.5%] h-[2px] bg-[#E7E5DF] z-0" />

            {/* Illuminated Progressive Beam: 100% = exactly Node 3 center, zero overshoot */}
            <div className="absolute top-6 sm:top-7 -translate-y-1/2 left-[12.5%] right-[12.5%] h-[2.5px] z-0 pointer-events-none">
              <div
                className="h-full bg-gradient-to-r from-[#581C87] via-[#7000FF] to-[#F97316] transition-all duration-700 ease-out"
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
                      {/* Outer Glowing Halo for Final Scale Node (Soft 45px Glow) */}
                      <div className="relative flex items-center justify-center">
                        {isScale && isPassed && (
                          <div className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-500/12 animate-ping opacity-50 pointer-events-none" />
                        )}

                        {/* Node Circle (Refined 1.25x Optical Scale) */}
                        <div
                          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                            isScale && isPassed
                              ? 'bg-[#F97316] text-white shadow-lg shadow-orange-500/25 scale-105 ring-2 ring-orange-200/80'
                              : isPassed
                              ? 'bg-[#581C87] text-white shadow-md shadow-purple-900/15'
                              : 'bg-white text-[#747474] border-2 border-[#E7E5DF]'
                          }`}
                        >
                          {isPassed ? (
                            <span className="w-2.5 h-2.5 rounded-full bg-white block shadow-xs" />
                          ) : (
                            <span className="w-2.5 h-2.5 rounded-full border-2 border-[#A3A3A3] block" />
                          )}
                        </div>
                      </div>

                    {/* Stage Label */}
                    <div className="mt-5 text-center flex flex-col items-center">
                      <span
                        className={`text-xs sm:text-sm font-mono font-bold tracking-wider transition-colors ${
                          isScale && isPassed
                            ? 'text-[#EA580C]'
                            : isPassed
                            ? 'text-[#0A0A0A]'
                            : 'text-[#A3A3A3]'
                        }`}
                      >
                        {gate.name}
                      </span>

                      {/* Subtitle / Action */}
                      <span className="text-xs text-[#515151] font-medium text-center mt-0.5">
                        {gate.sub}
                      </span>

                      {/* Decision Gate Badge (Reveals on hover/current, strictly differentiating Phase vs Gate) */}
                      <div className="mt-2 flex flex-col items-center">
                        <span className={`text-[10.5px] font-mono px-2 py-0.5 rounded-md border transition-all duration-200 ${
                          isCurrent
                            ? 'bg-[#FAF5FF] border-[#EDE9FE] text-[#7000FF] font-semibold'
                            : 'bg-neutral-50 border-neutral-200/60 text-[#747474]'
                        }`}>
                          {gate.gateName}
                        </span>
                        {gate.annotation && (
                          <span className="text-[10px] font-mono text-[#8C8A84] mt-0.5">
                            {gate.annotation}
                          </span>
                        )}
                        {isScale && showOutcomeBadge && (
                          <span className="text-[11px] font-mono font-bold text-[#EA580C] mt-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200/80 animate-in fade-in duration-300">
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

    </div>
  </section>
  );
}

