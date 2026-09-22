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
  cx: number;
  cy: number;
  capabilities: MicroCapability[];
}

const DOMAINS: DomainCluster[] = [
  {
    id: 'banking',
    name: 'Banking & Finance',
    shortName: 'Banking',
    cx: 210,
    cy: 190,
    capabilities: [
      { id: 'risk', name: 'Risk / Credit', x: 155, y: 155 },
      { id: 'credit', name: 'Retail Bank', x: 235, y: 130 },
      { id: 'bank-ops', name: 'AML / Fraud', x: 160, y: 235 },
    ],
  },
  {
    id: 'hr',
    name: 'HR & Learning',
    shortName: 'HR & L&D',
    cx: 160,
    cy: 360,
    capabilities: [
      { id: 'ld', name: 'L&D Co-worker', x: 100, y: 315 },
      { id: 'workforce', name: 'Workforce AI', x: 105, y: 410 },
      { id: 'knowledge', name: 'Internal Wiki', x: 185, y: 415 },
    ],
  },
  {
    id: 'operations',
    name: 'Operations & SOP',
    shortName: 'Operations',
    cx: 235,
    cy: 520,
    capabilities: [
      { id: 'sop', name: 'SOP Chuẩn Hóa', x: 175, y: 565 },
      { id: 'automation', name: 'Tự Động Hóa', x: 275, y: 575 },
      { id: 'qa', name: 'QA Kiểm Thử', x: 280, y: 470 },
    ],
  },
  {
    id: 'tech',
    name: 'Technology & Data',
    shortName: 'Tech & Data',
    cx: 495,
    cy: 515,
    capabilities: [
      { id: 'vpc', name: 'Private VPC', x: 555, y: 560 },
      { id: 'rag', name: 'RAG Pipeline', x: 460, y: 575 },
      { id: 'databus', name: 'Enterprise Bus', x: 435, y: 465 },
    ],
  },
  {
    id: 'sales',
    name: 'Sales & Marketing',
    shortName: 'Sales & Growth',
    cx: 550,
    cy: 355,
    capabilities: [
      { id: 'lead', name: 'Lead 24/7', x: 615, y: 310 },
      { id: 'conversion', name: 'Tỷ Lệ Chốt Cọc', x: 620, y: 400 },
      { id: 'customer', name: 'Customer Agent', x: 485, y: 320 },
    ],
  },
  {
    id: 'governance',
    name: 'Governance & Security',
    shortName: 'Governance',
    cx: 485,
    cy: 185,
    capabilities: [
      { id: 'zero-leak', name: 'Zero-Leak', x: 445, y: 130 },
      { id: 'compliance', name: 'Tuân Thủ Pháp Lý', x: 545, y: 135 },
      { id: 'security', name: 'Cô Lập Dữ Liệu', x: 535, y: 235 },
    ],
  },
];

// Cross-domain synaptic bridges showing collaborative intelligence across silos
const SYNAPSE_BRIDGES = [
  { from: { x: 155, y: 155 }, to: { x: 535, y: 235 } }, // Banking Risk <-> Security
  { from: { x: 175, y: 565 }, to: { x: 435, y: 465 } }, // Ops SOP <-> Tech Data Bus
  { from: { x: 615, y: 310 }, to: { x: 460, y: 575 } }, // Sales Lead <-> Tech RAG
  { from: { x: 185, y: 415 }, to: { x: 175, y: 565 } }, // HR Knowledge <-> Ops SOP
  { from: { x: 160, y: 235 }, to: { x: 555, y: 560 } }, // Banking Ops <-> Private VPC
  { from: { x: 620, y: 400 }, to: { x: 275, y: 575 } }, // Sales Conversion <-> Ops Automation
];

export function AiTransformationNetwork() {
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);
  const [activeCycleIndex, setActiveCycleIndex] = useState<number>(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Controlled organic cycle: gently pulses one domain cluster every 5.5s
  useEffect(() => {
    if (hoveredDomain !== null) return;
    const interval = setInterval(() => {
      setActiveCycleIndex((prev) => (prev + 1) % DOMAINS.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [hoveredDomain]);

  const activeDomainId = hoveredDomain || DOMAINS[activeCycleIndex]?.id;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const relY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMouseOffset({ x: relX * 6, y: relY * 6 });
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

          {/* Active Ray Purple-to-Orange Inward Intelligence Stream */}
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
        <circle cx={cx} cy={cy} r="155" stroke="#E6E4DF" strokeWidth="0.8" strokeDasharray="3 6" opacity="0.6" />
        <circle cx={cx} cy={cy} r="255" stroke="#E2E0D8" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.5" />
        <circle cx={cx} cy={cy} r="330" stroke="#ECEAE5" strokeWidth="0.6" strokeDasharray="3 9" opacity="0.35" />

        {/* Sun Aura */}
        <circle cx={cx} cy={cy} r="140" fill="url(#sunext-aura-radial)" />

        {/* 2. Cross-Domain Synapse Bridges (Connecting capability nodes across silos) */}
        {SYNAPSE_BRIDGES.map((bridge, i) => (
          <line
            key={`synapse-${i}`}
            x1={bridge.from.x}
            y1={bridge.from.y}
            x2={bridge.to.x}
            y2={bridge.to.y}
            stroke="#581C87"
            strokeWidth="0.8"
            strokeDasharray="3 5"
            opacity="0.2"
            className="transition-opacity duration-500"
          />
        ))}

        {/* 3. Internal Cluster Web Links (Hub to Micro-Capabilities) */}
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
                  opacity={isClusterActive ? 0.75 : 0.4}
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

              {/* Traveling Pulse: Expertise / Intelligence flowing from Domain Hub -> Sunext Core */}
              {isClusterActive && (
                <circle r="4" fill="#7000FF" filter="drop-shadow(0 0 6px #7000FF)">
                  <animate
                    attributeName="cx"
                    from={domain.cx}
                    to={cx}
                    dur="2.4s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    from={domain.cy}
                    to={cy}
                    dur="2.4s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* 5. Micro Capability Nodes */}
        {DOMAINS.map((domain) => {
          const isClusterActive = activeDomainId === domain.id;
          const isDimmed = hoveredDomain !== null && hoveredDomain !== domain.id;

          return (
            <g key={`caps-${domain.id}`} opacity={isDimmed ? 0.2 : 1} className="transition-opacity duration-300">
              {domain.capabilities.map((cap) => (
                <g key={cap.id} transform={`translate(${cap.x}, ${cap.y})`}>
                  {/* Micro Node Circle */}
                  <circle
                    cx="0"
                    cy="0"
                    r={isClusterActive ? 4 : 2.8}
                    fill={isClusterActive ? '#7000FF' : '#581C87'}
                    opacity={isClusterActive ? 0.9 : 0.6}
                    className="transition-all duration-300"
                  />

                  {/* Micro Capability Label (Reveals when cluster is active or hovered) */}
                  {isClusterActive && (
                    <text
                      x="7"
                      y="3"
                      fill="#581C87"
                      fontSize="9"
                      fontFamily="monospace"
                      fontWeight="600"
                      className="select-none animate-in fade-in duration-300 filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.9)]"
                    >
                      {cap.name}
                    </text>
                  )}
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
              transform={`translate(${domain.cx}, ${domain.cy})`}
              onMouseEnter={() => setHoveredDomain(domain.id)}
              onMouseLeave={() => setHoveredDomain(null)}
              className="cursor-pointer"
              opacity={isDimmed ? 0.25 : 1}
              style={{ transition: 'opacity 0.3s ease' }}
            >
              {/* Outer Pulsing Aura when active */}
              {isClusterActive && (
                <circle
                  cx="0"
                  cy="0"
                  r="24"
                  fill="none"
                  stroke="#7000FF"
                  strokeWidth="1"
                  strokeDasharray="3 5"
                  opacity="0.4"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0"
                    to="360"
                    dur="18s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}

              {/* Hub Outer Disc */}
              <circle
                cx="0"
                cy="0"
                r={isClusterActive ? 15 : 11}
                fill="#FFFFFF"
                stroke={isClusterActive ? '#7000FF' : '#D1CECE'}
                strokeWidth={isClusterActive ? 2 : 1.2}
                filter="drop-shadow(0 2px 8px rgba(0,0,0,0.06))"
                className="transition-all duration-300"
              />

              {/* Hub Center Dot */}
              <circle
                cx="0"
                cy="0"
                r={isClusterActive ? 5.5 : 4}
                fill={isClusterActive ? '#7000FF' : '#581C87'}
                className="transition-all duration-300"
              />

              {/* Primary Domain Name Label */}
              <text
                x="0"
                y={domain.cy < cy ? -20 : 26}
                textAnchor="middle"
                fill={isClusterActive ? '#0A0A0A' : '#737373'}
                fontSize={isClusterActive ? 12 : 11}
                fontFamily="system-ui, sans-serif"
                fontWeight={isClusterActive ? 600 : 500}
                letterSpacing="0.01em"
                className="transition-all duration-300 select-none filter drop-shadow-[0_1px_5px_rgba(255,255,255,0.95)]"
              >
                {domain.shortName}
              </text>
            </g>
          );
        })}

        {/* 7. Central Core: Sunext Collective Intelligence (Pulsing Sun Nucleus) */}
        <g transform={`translate(${cx}, ${cy})`} className="cursor-pointer">
          {/* Outward Radiating Result Pulse Wave (Purple Inward ➔ Orange Outward) */}
          <circle cx="0" cy="0" r="52" fill="none" stroke="#F97316" strokeWidth="1.2" opacity="0.6">
            <animate attributeName="r" values="50;75;50" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0;0.7" dur="2.4s" repeatCount="indefinite" />
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
