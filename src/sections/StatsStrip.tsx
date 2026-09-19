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
      className="w-full py-16 px-6 md:px-12 lg:px-20 border-y border-black/5 bg-[#F8F8F6] my-8"
      data-stats-strip
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 text-center">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className={`flex flex-col items-center justify-center px-4 md:border-r md:border-black/5 md:last:border-r-0 transition-all duration-700 ease-out ${
              hasAnimated
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <div className="flex items-center gap-2 mb-2">
              {index === 0 && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
              )}
              <span className="text-4xl sm:text-5xl font-light tracking-tight text-[#17151A] tabular-nums">
                {getDisplayValue(index, item.value)}
              </span>
            </div>
            <span className="text-xs sm:text-sm text-[#6E6E6E] font-normal max-w-[220px] leading-relaxed">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
