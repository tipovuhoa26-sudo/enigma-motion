'use client';

import React from 'react';
import { ArrowUpRight, Activity, Layers, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function HeroIndustryWidget() {
  return (
    <Link 
      href="/nganh" 
      className="relative w-20 h-20 rounded-2xl overflow-hidden border border-black/10 shadow-sm bg-[#110E17] text-white group cursor-pointer flex flex-col justify-between p-2.5 transition-transform hover:scale-105 select-none"
    >
      <div className="flex items-center justify-between">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-[8px] font-mono text-zinc-400">NGÀNH</span>
      </div>

      <div className="my-auto text-left">
        <span className="text-[10px] font-bold text-[#F97316] block font-mono">4 NGÀNH</span>
        <span className="text-[7px] text-zinc-400 block font-mono">May đo theo P&L</span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[8px] font-mono text-emerald-400">40+ Dự án</span>
        <div className="w-4 h-4 rounded-full bg-white/10 group-hover:bg-[#F97316] group-hover:text-white text-white flex items-center justify-center transition-colors">
          <ArrowUpRight className="w-2.5 h-2.5" />
        </div>
      </div>
    </Link>
  );
}

export function HeroCaseStudyIcon() {
  return (
    <div className="w-6 h-6 rounded-full bg-[#110E17] border border-black/10 flex items-center justify-center relative shadow-xs">
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
    </div>
  );
}
