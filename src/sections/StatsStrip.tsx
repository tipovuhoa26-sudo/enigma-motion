'use client';

import React, { useEffect, useRef, useState } from 'react';
import { StatItem, STATS_DATA } from '@/content/data';

interface StatsStripProps {
  stats?: StatItem[];
}

export function StatsStrip({ stats = STATS_DATA }: StatsStripProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full py-16 px-6 md:px-12 lg:px-20 border-y border-black/5 bg-[#F8F8F6] my-8"
      data-stats-strip
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className={`flex flex-col items-center justify-center transition-all duration-700 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <span className="text-4xl sm:text-5xl font-light tracking-tight text-[#17151A] tabular-nums mb-2">
              {item.value}
            </span>
            <span className="text-xs sm:text-sm text-[#6E6E6E] font-normal max-w-[220px]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
