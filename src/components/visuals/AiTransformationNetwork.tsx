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
  { id: 'strategy', name: 'Chiến Lược & P&L', angle: -90, distance: 180, metric: 'ROI Focus' },
  { id: 'data', name: 'Dữ Liệu & RAG', angle: -45, distance: 184, metric: 'Private VPC' },
  { id: 'people', name: 'Đội Ngũ Tự Chủ', angle: 0, distance: 178, metric: 'Enablement' },
  { id: 'process', name: 'Quy Trình & SOP', angle: 45, distance: 184, metric: '−67% Time' },
  { id: 'agents', name: 'Multi-Agents', angle: 90, distance: 180, metric: 'Autonomous' },
  { id: 'automation', name: 'Tự Động Hóa', angle: 135, distance: 184, metric: 'Real-time' },
  { id: 'governance', name: 'An Toàn & Bảo Mật', angle: 225, distance: 184, metric: 'Zero Leak' },
];

export function AiTransformationNetwork() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [autoIndex, setAutoIndex] = useState<number>(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Ultra-slow ambient sequence: gently illuminates one node every 4.5 seconds if not hovered
  useEffect(() => {
    if (activeNode !== null) return;
    const interval = setInterval(() => {
      setAutoIndex((prev) => (prev + 1) % NODES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [activeNode]);

  const currentHighlightedId = activeNode || NODES[autoIndex]?.id;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const relY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMouseOffset({ x: relX * 6, y: relY * 6 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
    setActiveNode(null);
  };

  const cx = 270;
  const cy = 270;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[480px] sm:max-w-[520px] lg:max-w-[540px] xl:max-w-[580px] aspect-square flex items-center justify-center select-none font-sans"
    >
      {/* 1. Atmospheric Diffuse Halo extending 600-800px behind the Sun (Cloudflare-grade) */}
      <div 
        className="absolute w-[640px] h-[640px] rounded-full pointer-events-none -z-10 animate-sun-halo"
        style={{
          background: 'radial-gradient(circle, rgba(255,247,232,0.6) 0%, rgba(255,191,117,0.3) 18%, rgba(239,124,44,0.14) 38%, rgba(239,124,44,0.04) 58%, transparent 72%)',
          filter: 'blur(50px)',
          transform: 'scale(1.3)',
        }}
      />

      {/* Secondary Soft Purple Atmosphere Layer */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(105,64,190,0.07) 0%, rgba(105,64,190,0.02) 45%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <svg
        viewBox="0 0 540 540"
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
          <radialGradient id="cf-sun-core" cx="42%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#FFF7ED" />
            <stop offset="20%" stopColor="#FFBF75" />
            <stop offset="50%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </radialGradient>

          {/* Active Ray Gradient */}
          <linearGradient id="cf-ray-active" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#581C87" stopOpacity="0.3" />
          </linearGradient>

          {/* Ambient Glow */}
          <radialGradient id="cf-sun-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#FB923C" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#6B21A8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 2. Concentric Faint Orbital Lines (Fade gently into background) */}
        <circle cx={cx} cy={cy} r="110" stroke="#E6E4DF" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.75" />
        <circle cx={cx} cy={cy} r="182" stroke="#E1DFDA" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.65" />
        <circle cx={cx} cy={cy} r="248" stroke="#ECEAE5" strokeWidth="0.6" strokeDasharray="2 6" opacity="0.45" />

        {/* Sun Outer Aura */}
        <circle cx={cx} cy={cy} r="110" fill="url(#cf-sun-aura)" />

        {/* 3. Subtle Hairline Connectors to Nodes */}
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
                stroke={isHighlighted ? 'url(#cf-ray-active)' : '#E7E5E0'}
                strokeWidth={isHighlighted ? 1.5 : 0.8}
                strokeDasharray={isHighlighted ? 'none' : '3 4'}
                opacity={isHighlighted ? 0.9 : 0.4}
                className="transition-all duration-500"
              />

              {/* Data pulse particle along active ray */}
              {isHighlighted && (
                <circle
                  cx={cx + node.distance * 0.52 * Math.cos(rad)}
                  cy={cy + node.distance * 0.52 * Math.sin(rad)}
                  r="2.5"
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

          // Label placement calculation: offset away from center
          const labelDist = 26;
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
              {/* Node Outer Halo (Gentle hover expansion) */}
              <circle
                cx="0"
                cy="0"
                r={isHighlighted ? 16 : 8}
                fill={isHighlighted ? '#FFFFFF' : 'transparent'}
                stroke={isHighlighted ? '#F97316' : '#D5D3CC'}
                strokeWidth={isHighlighted ? 1.5 : 0.8}
                opacity={isHighlighted ? 1 : 0.6}
                className="transition-all duration-300"
              />

              {/* Inner Node Dot */}
              <circle
                cx="0"
                cy="0"
                r={isHighlighted ? 5 : 3.5}
                fill={isHighlighted ? '#F97316' : '#581C87'}
                className="transition-all duration-300"
              />

              {/* Single Reveal Label: ONLY VISIBLE WHEN THIS NODE IS HIGHLIGHTED */}
              {isHighlighted && (
                <g className="transition-all duration-300 ease-out" style={{ transform: `translate(${lx}px, ${ly}px)` }}>
                  {/* Subtle Background Pill for high readability */}
                  <rect
                    x={textAnchor === 'start' ? -6 : textAnchor === 'end' ? -98 : -52}
                    y="-11"
                    width="104"
                    height="22"
                    rx="5"
                    fill="#0A0A0A"
                    opacity="0.92"
                    filter="drop-shadow(0 2px 8px rgba(0,0,0,0.12))"
                  />
                  <text
                    x={textAnchor === 'start' ? 4 : textAnchor === 'end' ? -4 : 0}
                    y="0"
                    textAnchor={textAnchor}
                    dominantBaseline="central"
                    fill="#FFFFFF"
                    fontSize="9.5"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="500"
                    letterSpacing="0.01em"
                  >
                    {node.name}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* 5. Central Living Sun: Core (~90px) + Rotating Subtle Corona */}
        <g transform={`translate(${cx}, ${cy})`} className="cursor-pointer">
          {/* Slow Ambient Breathing Container */}
          <g className="animate-sun-breathe">
            {/* Outer Slow Rotating Ray Rings */}
            <circle cx="0" cy="0" r="56" fill="none" stroke="#F97316" strokeWidth="0.8" strokeDasharray="3 8" opacity="0.45">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0"
                to="360"
                dur="45s"
                repeatCount="indefinite"
              />
            </circle>

            <circle cx="0" cy="0" r="46" fill="none" stroke="#FB923C" strokeWidth="1" strokeDasharray="4 6" opacity="0.4">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="360"
                to="0"
                dur="30s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Radiant Sun Disc Core */}
            <circle
              cx="0"
              cy="0"
              r="38"
              fill="url(#cf-sun-core)"
              filter="drop-shadow(0 4px 18px rgba(239,124,44,0.32))"
              className="transition-transform duration-500 hover:scale-105"
            />

            {/* Inner Highlight Ring */}
            <circle cx="0" cy="0" r="38" fill="none" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.75" />

            {/* Central Nucleus */}
            <circle cx="0" cy="0" r="13" fill="#FFFFFF" fillOpacity="0.25" stroke="#FFFFFF" strokeWidth="1" />
            <circle cx="0" cy="0" r="5" fill="#FFFFFF" />
          </g>
        </g>
      </svg>
    </div>
  );
}
