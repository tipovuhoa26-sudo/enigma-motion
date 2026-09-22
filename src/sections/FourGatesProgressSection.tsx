'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Gate {
  id: string;
  name: string;
  sub: string;
  isOutcome?: boolean;
}

const GATES: Gate[] = [
  { id: 'G1', name: 'DISCOVER', sub: 'Tọa độ bài toán' },
  { id: 'G2', name: 'PILOT', sub: 'Kiểm chứng PoC' },
  { id: 'G3', name: 'DEPLOY', sub: 'Private VPC' },
  { id: 'G4', name: 'SCALE', sub: 'Client operated', isOutcome: true },
];

export function FourGatesProgressSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(3); // All 4 illuminated by default

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Play progression animation sequence: 0 -> 1 -> 2 -> 3
          setActiveStep(0);
          const t1 = setTimeout(() => setActiveStep(1), 500);
          const t2 = setTimeout(() => setActiveStep(2), 1000);
          const t3 = setTimeout(() => setActiveStep(3), 1500);

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
      className="relative w-full py-24 sm:py-32 px-6 md:px-12 bg-white border-b border-[#E7E7E5] overflow-hidden"
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
        
        {/* Section Headline: Confident Editorial Title (Zero paragraph clutter) */}
        <div className="mb-12 sm:mb-14 text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-light tracking-tight text-[#0A0A0A] leading-[1.08]">
            Kiểm soát trước khi mở rộng.
          </h2>
        </div>

        {/* ==================================================================== */}
        {/* THE SINGLE PROGRESSION BEAM: DISCOVER ──── PILOT ──── DEPLOY ──── SCALE */}
        {/* ==================================================================== */}
        <div className="relative w-full py-10 my-4 select-none">
          
          {/* Base Background Track Hairline */}
          <div className="absolute top-[48px] sm:top-[56px] left-[5%] right-[5%] h-[2px] bg-[#E7E5DF] z-0" />

          {/* Illuminated Progressive Beam */}
          <div
            className="absolute top-[48px] sm:top-[56px] left-[5%] h-[2.5px] bg-gradient-to-r from-[#581C87] via-[#7000FF] to-[#F97316] transition-all duration-700 ease-out z-0"
            style={{ width: `${(activeStep / 3) * 90}%` }}
          />

          {/* 4 Pure Nodes */}
          <div className="relative flex items-center justify-between z-10">
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
                  {/* Outer Glowing Halo for Final Scale Node */}
                  <div className="relative flex items-center justify-center">
                    {isScale && isPassed && (
                      <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange-500/15 animate-ping opacity-60 pointer-events-none" />
                    )}

                    {/* Node Circle */}
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-mono text-xs sm:text-sm font-bold transition-all duration-500 ${
                        isScale && isPassed
                          ? 'bg-[#F97316] text-white shadow-xl shadow-orange-500/30 scale-110 ring-4 ring-orange-100'
                          : isPassed
                          ? 'bg-[#581C87] text-white shadow-md shadow-purple-900/15'
                          : 'bg-white text-[#747474] border-2 border-[#E7E5DF]'
                      }`}
                    >
                      {isPassed ? (
                        <span>●</span>
                      ) : (
                        <span>○</span>
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

                    {/* Clean Subtitle or Outcome Callout */}
                    {isScale ? (
                      <span className="text-xs sm:text-sm font-mono font-bold text-[#EA580C] mt-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200/80 animate-in fade-in duration-300">
                        Client operated.
                      </span>
                    ) : (
                      <span className="text-xs text-[#747474] font-normal mt-1 hidden sm:block">
                        {gate.sub}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
