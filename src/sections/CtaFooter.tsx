'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';

export function CtaFooter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [seqStage, setSeqStage] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Sequenced cinematic arrival: Glow -> Sun core -> Headline -> CTA
          setSeqStage(1); // 1. Orange atmospheric glow rises
          const t1 = setTimeout(() => setSeqStage(2), 300); // 2. Sun core emerges
          const t2 = setTimeout(() => setSeqStage(3), 600); // 3. Headline reveals
          const t3 = setTimeout(() => setSeqStage(4), 780); // 4. CTA button (+180ms)

          return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
          };
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative w-full pt-36 sm:pt-44 pb-56 sm:pb-68 px-6 md:px-12 flex flex-col items-center justify-center bg-[#0A0A0A] text-white overflow-hidden text-center scroll-mt-24"
      data-cta-footer
    >
      {/* 1. Monumental Horizon Sun Atmosphere: Visual Journey Returns to the Living Sun */}
      <div 
        className={`absolute -bottom-48 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-t-full pointer-events-none blur-3xl transition-all duration-1000 ease-out ${
          seqStage >= 1 ? 'opacity-65 scale-100' : 'opacity-0 scale-90'
        }`}
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(249,115,22,0.65) 0%, rgba(251,146,60,0.28) 35%, rgba(107,33,168,0.14) 65%, transparent 85%)'
        }}
      />

      {/* 2. Radiant Horizon Sun Disc & Concentric Orbit Arcs (Alive System matching Hero Sun) */}
      <div 
        className={`absolute -bottom-36 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none overflow-visible transition-all duration-700 ease-out ${
          seqStage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <svg viewBox="0 0 800 400" fill="none" className="w-full h-full">
          <defs>
            <radialGradient id="cta-sun-core" cx="50%" cy="100%" r="90%">
              <stop offset="0%" stopColor="#FFF7ED" />
              <stop offset="30%" stopColor="#FFBF75" />
              <stop offset="65%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#EA580C" />
            </radialGradient>
          </defs>

          {/* Concentric Grand Orbits with Living Rotation */}
          <g>
            <circle cx="400" cy="400" r="280" stroke="#F97316" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.35">
              <animateTransform attributeName="transform" type="rotate" from="0 400 400" to="360 400 400" dur="90s" repeatCount="indefinite" />
            </circle>
          </g>
          <g>
            <circle cx="400" cy="400" r="190" stroke="#FB923C" strokeWidth="1" strokeDasharray="5 7" opacity="0.45">
              <animateTransform attributeName="transform" type="rotate" from="360 400 400" to="0 400 400" dur="60s" repeatCount="indefinite" />
            </circle>
          </g>
          <g>
            <circle cx="400" cy="400" r="120" stroke="#FDBA74" strokeWidth="1.2" strokeDasharray="3 5" opacity="0.55">
              <animateTransform attributeName="transform" type="rotate" from="0 400 400" to="360 400 400" dur="40s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Radiant Sun Disc Rising from Horizon (r=85px matching hero sun core aesthetic) */}
          <circle
            cx="400"
            cy="400"
            r="85"
            fill="url(#cta-sun-core)"
            filter="drop-shadow(0 -10px 40px rgba(249,115,22,0.7))"
          />
          <circle cx="400" cy="400" r="85" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.8" />
          <circle cx="400" cy="400" r="30" fill="#FFFFFF" fillOpacity="0.3" />
          <circle cx="400" cy="400" r="10" fill="#FFFFFF" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-xl">
        
        {/* 3. Main Statement: Sequenced reveal */}
        <h2 
          className={`text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight transition-all duration-500 ease-out ${
            seqStage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Đưa AI vào <span className="font-normal text-[#F97316]">vận hành.</span>
        </h2>

        {/* Supporting Line */}
        <p 
          className={`text-base sm:text-lg text-[#D1D1CE] max-w-md leading-relaxed font-normal transition-all duration-500 ease-out delay-75 ${
            seqStage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Bắt đầu từ bài toán P&L của bạn.
        </p>

        {/* 4. Primary Action Button: Sequenced reveal +180ms */}
        <div 
          className={`flex flex-wrap items-center justify-center gap-4 mt-3 transition-all duration-500 ease-out ${
            seqStage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a href="mailto:contact@sunext.vn">
            <Button variant="orange" size="lg" className="rounded-xl shadow-sm text-sm font-medium cursor-pointer">
              <span>Đặt Lịch Tư Vấn Chiến Lược</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </a>

          <Link href="/danh-gia-san-sang-ai">
            <Button variant="outline" size="lg" className="rounded-xl bg-transparent text-white border-white/20 hover:bg-white/10 font-medium text-sm">
              <span>Đo Độ Sẵn Sàng (12 Câu)</span>
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
