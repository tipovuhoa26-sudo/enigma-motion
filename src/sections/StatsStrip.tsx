'use client';

import React, { useEffect, useRef, useState } from 'react';
import { StatItem, STATS_DATA } from '@/content/data';

interface StatsStripProps {
  stats?: StatItem[];
}

export function StatsStrip({ stats = STATS_DATA }: StatsStripProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [val1, setVal1] = useState('0%');
  const [val3, setVal3] = useState('0%');

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();
          const duration = 1400;

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);

            const c1 = (ease * 99.8).toFixed(1);
            const c3 = Math.round(ease * -75);

            setVal1(`${c1}%`);
            setVal3(`${c3}%`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setVal1('99.8%');
              setVal3('-75%');
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const getDisplayValue = (index: number, fallback: string) => {
    if (!hasAnimated) return fallback;
    if (index === 0) return val1;
    if (index === 1) return fallback;
    if (index === 2) return val3;
    return fallback;
  };

  return (
    <section
      ref={containerRef}
      className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-20 border-y border-[#E8E8E8] bg-[#F7F7F8]"
      data-stats-strip
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-10">
          <span className="text-[11px] uppercase tracking-wider text-[#6B21A8] bg-[#FAF8FC] px-3.5 py-1.5 rounded-full border border-[#E8E8E8] font-medium">
            Bằng chứng hiệu quả định lượng
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 text-center divide-y md:divide-y-0 md:divide-x divide-[#E8E8E8]">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center px-6 py-6 md:py-2 transition-all duration-700 ease-out"
            >
              <div className="flex items-center gap-2.5 mb-3">
                {index === 0 && (
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#059669]" />
                  </span>
                )}
                <span
                  className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#111111] tabular-nums"
                  aria-label={item.value}
                >
                  {getDisplayValue(index, item.value)}
                </span>
              </div>
              <span className="text-sm sm:text-base text-[#626262] font-normal max-w-[260px] leading-relaxed">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
