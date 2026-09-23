'use client';

import React, { useEffect, useState } from 'react';
import { Anchor, Shield, Scan, Calendar, ArrowDown, RotateCcw } from 'lucide-react';
import { useLenis } from '@/motion/SmoothScrollProvider';

interface DockProps {
  activeIndex?: number;
}

export function Dock({ activeIndex: propActiveIndex }: DockProps) {
  const { scrollTo } = useLenis();
  const [activeIndex, setActiveIndex] = useState(propActiveIndex ?? 0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items = [
    { icon: Anchor, label: 'Overview', target: '#home', key: 'home' },
    { icon: Shield, label: 'Advantage', target: '#advantage', key: 'technology' },
    { icon: Scan, label: 'Cases', target: '#cases', key: 'service' },
    { icon: Calendar, label: 'Schedule', target: '#contact', key: 'contact' },
  ];

  // ScrollSpy listener to update active dock index as user scrolls
  useEffect(() => {
    if (propActiveIndex !== undefined) {
      setActiveIndex(propActiveIndex);
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const advantageEl = document.querySelector('#advantage') || document.querySelector('#technology');
      const casesEl = document.querySelector('#cases') || document.querySelector('#service');
      const contactEl = document.querySelector('#contact') || document.querySelector('#schedule');

      const getTop = (el: Element | null) => {
        if (!el) return Infinity;
        const target = el.closest('.pin-spacer') || el;
        return target.getBoundingClientRect().top + window.scrollY;
      };

      const advantageTop = getTop(advantageEl);
      const casesTop = getTop(casesEl);
      const contactTop = getTop(contactEl);

      const offset = 260; // Trigger threshold
      if (scrollY >= contactTop - offset) {
        setActiveIndex(3);
      } else if (scrollY >= casesTop - offset) {
        setActiveIndex(2);
      } else if (scrollY >= advantageTop - offset) {
        setActiveIndex(1);
      } else {
        setActiveIndex(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [propActiveIndex]);

  const handleDockClick = (index: number, target: string) => {
    setActiveIndex(index);
    scrollTo(target);
  };

  const handleScrollDown = () => {
    const nextIndex = (activeIndex + 1) % items.length;
    setActiveIndex(nextIndex);
    const targetItem = items[nextIndex];
    if (targetItem) {
      scrollTo(targetItem.target);
    }
  };

  return (
    <aside
      className="hidden lg:flex flex-col justify-between fixed left-4 lg:left-6 xl:left-[max(1.5rem,calc((100vw-1340px)/2+1.5rem))] top-1/2 -translate-y-1/2 h-[340px] z-30 pointer-events-none"
      data-hero-dock
      aria-label="Section Navigation Dock"
    >
      {/* Top Vertical Icon Stack */}
      <div className="flex flex-col items-center gap-3 relative pointer-events-auto">
        <div className="w-[1px] h-full absolute top-0 bottom-0 left-1/2 -translate-x-1/2 bg-black/10 -z-10" />

        {items.map((item, index) => {
          const Icon = item.icon;
          const isActive = index === activeIndex;

          return (
            <div key={item.label} className="relative group">
              <button
                type="button"
                onClick={() => handleDockClick(index, item.target)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                aria-label={`Jump to ${item.label}`}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? 'bg-[#FAF5FF] border-[#EDE9FE] text-[#7000FF] shadow-xs scale-105'
                    : 'bg-[#F5F3F6] border-black/5 text-[#6E6E6E] hover:text-[#17151A] hover:bg-white hover:border-black/10'
                }`}
                data-dock-item={index}
              >
                <Icon className="w-4 h-4" />
              </button>

              {/* Tooltip on hover */}
              <div
                className={`absolute left-12 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-[#17151A] text-white text-[11px] font-medium rounded-lg shadow-md whitespace-nowrap pointer-events-none transition-all duration-200 ${
                  hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                }`}
              >
                {item.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Controls: Back to top / Next section */}
      <div className="flex flex-col items-center gap-3 pointer-events-auto">
        <button
          type="button"
          onClick={() => {
            setActiveIndex(0);
            scrollTo('#top');
          }}
          className="w-8 h-8 rounded-full bg-[#17151A] text-white flex items-center justify-center hover:bg-[#2A272D] transition-all active:scale-95 shadow-sm group cursor-pointer"
          aria-label="Back to top"
          title="Back to top"
        >
          <RotateCcw className="w-3.5 h-3.5 group-hover:-rotate-45 transition-transform" />
        </button>

        <button
          type="button"
          onClick={handleScrollDown}
          className="w-8 h-8 rounded-full bg-[#F5F3F6] hover:bg-white border border-black/5 text-[#6E6E6E] hover:text-[#17151A] flex items-center justify-center transition-all active:scale-95 shadow-2xs group cursor-pointer"
          aria-label="Scroll to next section"
          title="Next section"
        >
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </aside>
  );
}
