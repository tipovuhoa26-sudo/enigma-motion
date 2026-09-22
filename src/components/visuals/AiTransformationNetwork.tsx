'use client';

import React, { useState, useEffect, useRef } from 'react';

interface NetworkNode {
  id: string;
  name: string;
  angle: number; // in degrees
  distance: number; // from center
  metric: string;
}

const NODES: NetworkNode[] = [
  { id: 'strategy', name: 'Chiến Lược & P&L', angle: -90, distance: 245, metric: 'ROI Focus' },
  { id: 'data', name: 'Dữ Liệu & RAG', angle: -45, distance: 250, metric: 'Private VPC' },
  { id: 'people', name: 'Đội Ngũ Tự Chủ', angle: 0, distance: 240, metric: 'Enablement' },
  { id: 'process', name: 'Quy Trình & SOP', angle: 45, distance: 250, metric: '−67% Time' },
  { id: 'agents', name: 'Multi-Agents', angle: 90, distance: 245, metric: 'Autonomous' },
  { id: 'automation', name: 'Tự Động Hóa', angle: 135, distance: 250, metric: 'Real-time' },
  { id: 'governance', name: 'An Toàn & Bảo Mật', angle: 225, distance: 250, metric: 'Zero Leak' },
];

export function AiTransformationNetwork() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [autoIndex, setAutoIndex] = useState<number>(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Ultra-slow ambient sequence: sweeps one node every 5s if not hovered
  useEffect(() => {
    if (activeNode !== null) return;
    const interval = setInterval(() => {
      setAutoIndex((prev) => (prev + 1) % NODES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeNode]);

  const currentHighlightedId = activeNode || NODES[autoIndex]?.id;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const relY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMouseOffset({ x: relX * 8, y: relY * 8 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
    setActiveNode(null);
  };

  // Center coordinate in scaled 720x720 viewBox
  const cx = 360;
  const cy = 360;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[620px] sm:max-w-[700px] lg:max-w-[780px] xl:max-w-[880px] 2xl:max-w-[960px] aspect-square flex items-center justify-center select-none font-sans overflow-visible -mr-6 lg:-mr-16 xl:-mr-24"
    >
      {/* 1. MONUMENTAL ATMOSPHERIC HALO (800-1100px Bleeding to right edge) */}
      <div 
        className="absolute w-[800px] h-[800px] lg:w-[1050px] lg:h-[1050px] rounded-full pointer-events-none -z-10 animate-sun-halo"
        style={{
          background: 'radial-gradient(circle, rgba(255,247,232,0.7) 0%, rgba(255,191,117,0.36) 18%, rgba(239,124,44,0.16) 40%, rgba(239,124,44,0.04) 62%, transparent 75%)',
          filter: 'blur(65px)',
          transform: 'scale(1.25)',
        }}
      />

      {/* Secondary Soft Violet/Purple Atmospheric Ring */}
      <div 
        className="absolute w-[700px] h-[700px] lg:w-[880px] lg:h-[880px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(105,64,190,0.08) 0%, rgba(105,64,190,0.02) 50%, transparent 72%)',
          filter: 'blur(55px)',
        }}
      />

      <svg
        viewBox="0 0 720 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="w-full h-full block overflow-visible"
      >
        <defs>
          {/* Subtle Sun Core Radial Gradient */}
          <radialGradient id="cf-sun-core-lg" cx="42%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#FFF7ED" />
            <stop offset="20%" stopColor="#FFBF75" />
            <stop offset="50%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </radialGradient>

          {/* Active Ray Gradient */}
          <linearGradient id="cf-ray-active-lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#581C87" stopOpacity="0.25" />
          </linearGradient>

          {/* Ambient Sun Aura */}
          <radialGradient id="cf-sun-aura-lg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.28" />
            <stop offset="60%" stopColor="#FB923C" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#6B21A8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 2. Concentric Grand Orbital Lines (Fade gently into atmospheric background) */}
        <circle cx={cx} cy={cy} r="145" stroke="#E6E4DF" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.75" />
        <circle cx={cx} cy={cy} r="245" stroke="#E1DFDA" strokeWidth="0.8" strokeDasharray="4 7" opacity="0.65" />
        <circle cx={cx} cy={cy} r="335" stroke="#ECEAE5" strokeWidth="0.6" strokeDasharray="3 8" opacity="0.45" />

        {/* Sun Outer Aura */}
        <circle cx={cx} cy={cy} r="150" fill="url(#cf-sun-aura-lg)" />

        {/* 3. Connecting Rays from Center to Nodes */}
        {NODES.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = cx + node.distance * Math.cos(rad);
          const y = cy + node.distance * Math.sin(rad);
          const isHighlighted = currentHighlightedId === node.id;

          return (
            <g key={`line-${node.id}`}>
              <line
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke={isHighlighted ? 'url(#cf-ray-active-lg)' : '#E7E5E0'}
                strokeWidth={isHighlighted ? 1.8 : 0.8}
                strokeDasharray={isHighlighted ? 'none' : '3 5'}
                opacity={isHighlighted ? 0.95 : 0.4}
                className="transition-all duration-500"
              />

              {/* Data pulse particle along active ray */}
              {isHighlighted && (
                <circle
                  cx={cx + node.distance * 0.52 * Math.cos(rad)}
                  cy={cy + node.distance * 0.52 * Math.sin(rad)}
                  r="3.5"
                  fill="#F97316"
                  className="animate-pulse"
                />
              )}
            </g>
          );
        })}

        {/* Subtle Web Lines between adjacent nodes */}
        {NODES.map((node, i) => {
          const nextNode = NODES[(i + 1) % NODES.length];
          const rad1 = (node.angle * Math.PI) / 180;
          const rad2 = (nextNode.angle * Math.PI) / 180;
          const x1 = cx + node.distance * Math.cos(rad1);
          const y1 = cy + node.distance * Math.sin(rad1);
          const x2 = cx + nextNode.distance * Math.cos(rad2);
          const y2 = cy + nextNode.distance * Math.sin(rad2);

          return (
            <line
              key={`web-${node.id}-${nextNode.id}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#E8E6E0"
              strokeWidth="0.6"
              opacity="0.35"
            />
          );
        })}

        {/* 4. Nodes: Clean Dots by Default; ONLY 1 Node Reveals Label When Active */}
        {NODES.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = cx + node.distance * Math.cos(rad);
          const y = cy + node.distance * Math.sin(rad);
          const isHighlighted = currentHighlightedId === node.id;

          const labelDist = 32;
          const lx = Math.cos(rad) * labelDist;
          const ly = Math.sin(rad) * labelDist;
          const textAnchor = Math.cos(rad) > 0.3 ? 'start' : Math.cos(rad) < -0.3 ? 'end' : 'middle';

          return (
            <g
              key={node.id}
              transform={`translate(${x}, ${y})`}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              className="cursor-pointer"
            >
              {/* Outer Ring */}
              <circle
                cx="0"
                cy="0"
                r={isHighlighted ? 20 : 10}
                fill={isHighlighted ? '#FFFFFF' : 'transparent'}
                stroke={isHighlighted ? '#F97316' : '#D5D3CC'}
                strokeWidth={isHighlighted ? 1.8 : 0.8}
                opacity={isHighlighted ? 1 : 0.6}
                className="transition-all duration-300"
              />

              {/* Inner Node Dot */}
              <circle
                cx="0"
                cy="0"
                r={isHighlighted ? 6.5 : 4.5}
                fill={isHighlighted ? '#F97316' : '#581C87'}
                className="transition-all duration-300"
              />

              {/* Subtle Reveal Label on Hover (Zero Black Tooltip Chrome) */}
              {isHighlighted && activeNode !== null && (
                <g className="transition-all duration-300 ease-out" style={{ transform: `translate(${lx}px, ${ly}px)` }}>
                  <text
                    x={textAnchor === 'start' ? 5 : textAnchor === 'end' ? -5 : 0}
                    y="0"
                    textAnchor={textAnchor}
                    dominantBaseline="central"
                    fill="#0A0A0A"
                    fontSize="11"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="500"
                    letterSpacing="0.02em"
                    className="filter drop-shadow-[0_1px_6px_rgba(255,255,255,0.95)]"
                  >
                    {node.name}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* 5. Central Living Sun: Core (~100px) + Rotating Subtle Corona */}
        <g transform={`translate(${cx}, ${cy})`} className="cursor-pointer">
          <g className="animate-sun-breathe">
            {/* Outer Slow Rotating Ray Rings */}
            <circle cx="0" cy="0" r="74" fill="none" stroke="#F97316" strokeWidth="0.8" strokeDasharray="4 10" opacity="0.45">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0"
                to="360"
                dur="45s"
                repeatCount="indefinite"
              />
            </circle>

            <circle cx="0" cy="0" r="60" fill="none" stroke="#FB923C" strokeWidth="1" strokeDasharray="5 7" opacity="0.4">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="360"
                to="0"
                dur="30s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Radiant Sun Disc Core (100px diameter) */}
            <circle
              cx="0"
              cy="0"
              r="50"
              fill="url(#cf-sun-core-lg)"
              filter="drop-shadow(0 6px 24px rgba(239,124,44,0.36))"
              className="transition-transform duration-500 hover:scale-105"
            />

            {/* Inner Highlight Ring */}
            <circle cx="0" cy="0" r="50" fill="none" stroke="#FFFFFF" strokeWidth="1.4" strokeOpacity="0.75" />

            {/* Central Nucleus */}
            <circle cx="0" cy="0" r="16" fill="#FFFFFF" fillOpacity="0.25" stroke="#FFFFFF" strokeWidth="1" />
            <circle cx="0" cy="0" r="6" fill="#FFFFFF" />
          </g>
        </g>
      </svg>
    </div>
  );
}
