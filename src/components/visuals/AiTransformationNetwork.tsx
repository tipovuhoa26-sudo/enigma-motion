'use client';

import React, { useState, useEffect, useRef } from 'react';

interface MicroCapability {
  id: string;
  name: string;
  x: number;
  y: number;
}

interface DomainCluster {
  id: string;
  name: string;
  shortName: string;
  subline: string;
  cx: number;
  cy: number;
  labelX: number;
  labelY: number;
  textAnchor: 'start' | 'middle' | 'end';
  capabilities: MicroCapability[];
}

// 7 Art-Directed Strategic Domains (Guaranteed Zero Collision Layout)
const DOMAINS: DomainCluster[] = [
  {
    id: 'banking',
    name: 'Banking & Finance',
    shortName: 'Banking & Finance',
    subline: 'Risk · Credit · AML',
    cx: 210,
    cy: 160,
    labelX: 245,
    labelY: 152,
    textAnchor: 'start',
    capabilities: [
      { id: 'risk', name: 'Risk', x: 135, y: 110 },
      { id: 'credit', name: 'Credit', x: 190, y: 75 },
      { id: 'aml', name: 'AML', x: 115, y: 185 },
    ],
  },
  {
    id: 'governance',
    name: 'Governance & Risk',
    shortName: 'Governance & Risk',
    subline: 'Zero-Leak · Tuân thủ · Cô lập',
    cx: 360,
    cy: 115,
    labelX: 360,
    labelY: 65,
    textAnchor: 'middle',
    capabilities: [
      { id: 'zeroleak', name: 'Zero-Leak', x: 275, y: 55 },
      { id: 'compliance', name: 'Tuân thủ', x: 445, y: 55 },
    ],
  },
  {
    id: 'tech',
    name: 'Technology & Data',
    shortName: 'Technology & Data',
    subline: 'Private VPC · Data Bus · RAG',
    cx: 510,
    cy: 175,
    labelX: 470,
    labelY: 165,
    textAnchor: 'end',
    capabilities: [
      { id: 'vpc', name: 'Private VPC', x: 590, y: 120 },
      { id: 'bus', name: 'Data Bus', x: 625, y: 180 },
      { id: 'rag', name: 'RAG Pipeline', x: 585, y: 240 },
    ],
  },
  {
    id: 'sales',
    name: 'Sales & Growth',
    shortName: 'Sales & Growth',
    subline: 'Lead 24/7 · Chốt cọc · CRM',
    cx: 575,
    cy: 330,
    labelX: 535,
    labelY: 320,
    textAnchor: 'end',
    capabilities: [
      { id: 'lead', name: 'Lead 24/7', x: 655, y: 275 },
      { id: 'chotcoc', name: 'Chốt cọc', x: 665, y: 365 },
      { id: 'crm', name: 'CRM Sync', x: 640, y: 425 },
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    shortName: 'Real Estate',
    subline: 'Môi giới · Dự án · Thẩm định',
    cx: 520,
    cy: 505,
    labelX: 480,
    labelY: 495,
    textAnchor: 'end',
    capabilities: [
      { id: 'brokerage', name: 'Môi giới', x: 585, y: 565 },
      { id: 'project', name: 'Dự án', x: 535, y: 615 },
      { id: 'valuation', name: 'Thẩm định', x: 625, y: 495 },
    ],
  },
  {
    id: 'operations',
    name: 'Operations & SOP',
    shortName: 'Operations & SOP',
    subline: 'SOP Chuẩn hóa · Tự động hóa · QA',
    cx: 245,
    cy: 540,
    labelX: 285,
    labelY: 535,
    textAnchor: 'start',
    capabilities: [
      { id: 'sop', name: 'SOP', x: 165, y: 585 },
      { id: 'auto', name: 'Tự động hóa', x: 225, y: 630 },
      { id: 'qa', name: 'QA Kiểm thử', x: 150, y: 515 },
    ],
  },
  {
    id: 'hr',
    name: 'HR & Learning',
    shortName: 'HR & Learning',
    subline: 'L&D Co-worker · Wiki nội bộ',
    cx: 140,
    cy: 330,
    labelX: 180,
    labelY: 325,
    textAnchor: 'start',
    capabilities: [
      { id: 'ld', name: 'L&D', x: 65, y: 275 },
      { id: 'wiki', name: 'Wiki', x: 55, y: 340 },
      { id: 'talent', name: 'Nhân tài', x: 70, y: 410 },
    ],
  },
];

// Cross-domain synaptic bridges showing organic Obsidian knowledge graph
const SYNAPSE_BRIDGES = [
  { from: { x: 115, y: 185 }, to: { x: 65, y: 275 } },   // Banking AML <-> HR L&D
  { from: { x: 190, y: 75 }, to: { x: 275, y: 55 } },    // Banking Credit <-> Gov Zero-Leak
  { from: { x: 445, y: 55 }, to: { x: 590, y: 120 } },   // Gov Tuân thủ <-> Tech VPC
  { from: { x: 585, y: 240 }, to: { x: 655, y: 275 } },  // Tech RAG <-> Sales Lead
  { from: { x: 640, y: 425 }, to: { x: 625, y: 495 } },  // Sales CRM <-> RE Thẩm định
  { from: { x: 535, y: 615 }, to: { x: 225, y: 630 } },  // RE Dự án <-> Ops Tự động hóa
  { from: { x: 150, y: 515 }, to: { x: 70, y: 410 } },   // Ops QA <-> HR Nhân tài
  { from: { x: 625, y: 180 }, to: { x: 665, y: 365 } },  // Tech Bus <-> Sales Chốt cọc
  { from: { x: 165, y: 585 }, to: { x: 55, y: 340 } },   // Ops SOP <-> HR Wiki
];

export function AiTransformationNetwork() {
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);
  const [activeCycleIndex, setActiveCycleIndex] = useState<number>(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Controlled organic cycle: gently pulses one domain cluster every 5s
  useEffect(() => {
    if (hoveredDomain !== null) return;
    const interval = setInterval(() => {
      setActiveCycleIndex((prev) => (prev + 1) % DOMAINS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [hoveredDomain]);

  const activeDomainId = hoveredDomain || DOMAINS[activeCycleIndex]?.id;

  // Subtle ambient mouse drift (clamped to ±3px as requested)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const relY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMouseOffset({ x: relX * 3, y: relY * 3 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
    setHoveredDomain(null);
  };

  // Center coordinates of the Sunext Core
  const cx = 360;
  const cy = 360;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[520px] sm:max-w-[580px] lg:max-w-[620px] xl:max-w-[680px] aspect-square flex items-center justify-center select-none font-sans overflow-visible ml-auto"
    >
      {/* Ambient Atmospheric Cloud Glow */}
      <div 
        className="absolute w-[560px] h-[560px] lg:w-[680px] lg:h-[680px] rounded-full pointer-events-none -z-10 animate-sun-halo"
        style={{
          background: 'radial-gradient(circle, rgba(255,247,232,0.65) 0%, rgba(255,191,117,0.32) 20%, rgba(239,124,44,0.14) 42%, rgba(105,64,190,0.03) 65%, transparent 78%)',
          filter: 'blur(60px)',
          transform: 'scale(1.08)',
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
          {/* Sun Core Radial Gradient */}
          <radialGradient id="sunext-core-gradient" cx="42%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#FFF7ED" />
            <stop offset="20%" stopColor="#FFBF75" />
            <stop offset="55%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </radialGradient>

          {/* Active Inward Intelligence Stream */}
          <linearGradient id="stream-inward-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#581C87" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#7000FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
          </linearGradient>

          {/* Sun Outer Aura */}
          <radialGradient id="sunext-aura-radial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#FB923C" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#581C87" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Subtle Background Constellation Rings */}
        <circle cx={cx} cy={cy} r="150" stroke="#E6E4DF" strokeWidth="0.8" strokeDasharray="3 6" opacity="0.5" />
        <circle cx={cx} cy={cy} r="250" stroke="#E2E0D8" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.4" />
        <circle cx={cx} cy={cy} r="330" stroke="#ECEAE5" strokeWidth="0.6" strokeDasharray="3 9" opacity="0.3" />

        {/* Sun Aura */}
        <circle cx={cx} cy={cy} r="140" fill="url(#sunext-aura-radial)" />

        {/* 2. Cross-Domain Synapse Bridges (Organic Obsidian Knowledge Web) */}
        {SYNAPSE_BRIDGES.map((bridge, i) => (
          <line
            key={`synapse-${i}`}
            x1={bridge.from.x}
            y1={bridge.from.y}
            x2={bridge.to.x}
            y2={bridge.to.y}
            stroke="#581C87"
            strokeWidth="0.8"
            strokeDasharray="2 4"
            opacity="0.18"
            className="transition-opacity duration-500"
          />
        ))}

        {/* 3. Internal Cluster Web Links (Hub to Sub-Nodes) */}
        {DOMAINS.map((domain) => {
          const isClusterActive = activeDomainId === domain.id;
          return (
            <g key={`cluster-web-${domain.id}`}>
              {domain.capabilities.map((cap) => (
                <line
                  key={`link-${domain.id}-${cap.id}`}
                  x1={domain.cx}
                  y1={domain.cy}
                  x2={cap.x}
                  y2={cap.y}
                  stroke={isClusterActive ? '#7000FF' : '#E0DED8'}
                  strokeWidth={isClusterActive ? 1.2 : 0.8}
                  strokeDasharray={isClusterActive ? 'none' : '2 4'}
                  opacity={isClusterActive ? 0.75 : 0.35}
                  className="transition-all duration-400"
                />
              ))}
            </g>
          );
        })}

        {/* 4. Domain Hubs to Central Sunext Core (Spokes of Intelligence) */}
        {DOMAINS.map((domain) => {
          const isClusterActive = activeDomainId === domain.id;
          return (
            <g key={`spoke-${domain.id}`}>
              <line
                x1={domain.cx}
                y1={domain.cy}
                x2={cx}
                y2={cy}
                stroke={isClusterActive ? 'url(#stream-inward-gradient)' : '#E4E2DC'}
                strokeWidth={isClusterActive ? 2 : 0.9}
                strokeDasharray={isClusterActive ? 'none' : '3 6'}
                opacity={isClusterActive ? 0.95 : 0.35}
                className="transition-all duration-500"
              />

              {/* Traveling Pulse: Expertise flowing from Active Domain Hub -> Sunext Core */}
              {isClusterActive && (
                <circle r="4" fill="#7000FF" filter="drop-shadow(0 0 6px #7000FF)">
                  <animate
                    attributeName="cx"
                    from={domain.cx}
                    to={cx}
                    dur="2.2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    from={domain.cy}
                    to={cy}
                    dur="2.2s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* 5. Sub-Nodes: ONLY Dots, NO text labels! (Obsidian Clean Style) */}
        {DOMAINS.map((domain) => {
          const isClusterActive = activeDomainId === domain.id;
          const isDimmed = hoveredDomain !== null && hoveredDomain !== domain.id;

          return (
            <g key={`caps-${domain.id}`} opacity={isDimmed ? 0.25 : 1} className="transition-opacity duration-300">
              {domain.capabilities.map((cap) => (
                <g key={cap.id} transform={`translate(${cap.x}, ${cap.y})`}>
                  {/* Subtle outer glow when active */}
                  {isClusterActive && (
                    <circle
                      cx="0"
                      cy="0"
                      r="6"
                      fill="none"
                      stroke="#7000FF"
                      strokeWidth="0.8"
                      opacity="0.4"
                    />
                  )}
                  {/* Sub-node Dot */}
                  <circle
                    cx="0"
                    cy="0"
                    r={isClusterActive ? 3.5 : 2.5}
                    fill={isClusterActive ? '#7000FF' : '#581C87'}
                    opacity={isClusterActive ? 0.95 : 0.45}
                    className="transition-all duration-300"
                  />
                </g>
              ))}
            </g>
          );
        })}

        {/* 6. Domain Hub Nodes (Interactive Anchor Points) */}
        {DOMAINS.map((domain) => {
          const isClusterActive = activeDomainId === domain.id;
          const isDimmed = hoveredDomain !== null && hoveredDomain !== domain.id;

          return (
            <g
              key={`hub-${domain.id}`}
              onMouseEnter={() => setHoveredDomain(domain.id)}
              onMouseLeave={() => setHoveredDomain(null)}
              className="cursor-pointer"
              opacity={isDimmed ? 0.25 : 1}
              style={{ transition: 'opacity 0.3s ease' }}
            >
              {/* Outer Pulsing Orbit Ring when active */}
              {isClusterActive && (
                <circle
                  cx={domain.cx}
                  cy={domain.cy}
                  r="22"
                  fill="none"
                  stroke="#7000FF"
                  strokeWidth="1"
                  strokeDasharray="3 5"
                  opacity="0.4"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from={`0 ${domain.cx} ${domain.cy}`}
                    to={`360 ${domain.cx} ${domain.cy}`}
                    dur="18s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}

              {/* Hub Outer Disc */}
              <circle
                cx={domain.cx}
                cy={domain.cy}
                r={isClusterActive ? 14 : 10}
                fill="#FFFFFF"
                stroke={isClusterActive ? '#7000FF' : '#D1CECE'}
                strokeWidth={isClusterActive ? 2 : 1.2}
                filter="drop-shadow(0 2px 8px rgba(0,0,0,0.06))"
                className="transition-all duration-300"
              />

              {/* Hub Center Dot */}
              <circle
                cx={domain.cx}
                cy={domain.cy}
                r={isClusterActive ? 5 : 3.5}
                fill={isClusterActive ? '#7000FF' : '#581C87'}
                className="transition-all duration-300"
              />

              {/* Primary Macro-Domain Name */}
              <text
                x={domain.labelX}
                y={domain.labelY}
                textAnchor={domain.textAnchor}
                fill={isClusterActive ? '#111111' : '#6B7280'}
                fontSize={isClusterActive ? 12 : 11.5}
                fontFamily="system-ui, sans-serif"
                fontWeight={isClusterActive ? 700 : 500}
                letterSpacing="0.01em"
                className="transition-all duration-300 select-none filter drop-shadow-[0_1px_5px_rgba(255,255,255,0.95)]"
              >
                {domain.shortName}
              </text>

              {/* Deep Domain Sub-line: ONLY shown when Active or Hovered! */}
              {isClusterActive && (
                <text
                  x={domain.labelX}
                  y={domain.labelY + 15}
                  textAnchor={domain.textAnchor}
                  fill="#7000FF"
                  fontSize="9.5"
                  fontFamily="system-ui, sans-serif"
                  fontWeight="600"
                  letterSpacing="0.02em"
                  className="select-none animate-in fade-in duration-300 filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.9)]"
                >
                  {domain.subline}
                </text>
              )}
            </g>
          );
        })}

        {/* 7. Central Core: Sunext Collective Intelligence (Pulsing Sun Nucleus) */}
        <g transform={`translate(${cx}, ${cy})`} className="cursor-pointer">
          {/* Outward Radiating Result Pulse Wave */}
          <circle cx="0" cy="0" r="52" fill="none" stroke="#F97316" strokeWidth="1.2" opacity="0.6">
            <animate attributeName="r" values="50;75;50" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0;0.7" dur="2.2s" repeatCount="indefinite" />
          </circle>

          {/* Rotating Subtle Corona Orbits */}
          <circle cx="0" cy="0" r="68" fill="none" stroke="#F97316" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.4">
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="36s" repeatCount="indefinite" />
          </circle>

          {/* Sun Core Disc (Radius 46px) */}
          <circle
            cx="0"
            cy="0"
            r="46"
            fill="url(#sunext-core-gradient)"
            filter="drop-shadow(0 6px 24px rgba(239,124,44,0.4))"
            className="transition-transform duration-500 hover:scale-105"
          />

          {/* Crisp White Inner Highlight Border */}
          <circle cx="0" cy="0" r="46" fill="none" stroke="#FFFFFF" strokeWidth="1.4" strokeOpacity="0.85" />

          {/* Central Nucleus with "SUNEXT" Label */}
          <circle cx="0" cy="0" r="15" fill="#FFFFFF" fillOpacity="0.25" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="0" cy="0" r="6" fill="#FFFFFF" />

          {/* Brand Monogram / Collective Intelligence Badge */}
          <text
            x="0"
            y="-56"
            textAnchor="middle"
            fill="#EA580C"
            fontSize="10"
            fontFamily="monospace"
            fontWeight="700"
            letterSpacing="0.12em"
            className="select-none filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.9)]"
          >
            SUNEXT CORE
          </text>
        </g>
      </svg>
    </div>
  );
}

