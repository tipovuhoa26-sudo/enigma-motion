'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

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
  linkUrl: string;
  capabilities: MicroCapability[];
}

interface SemanticEdge {
  id: string;
  source: string;
  target: string;
  bridgeLabel: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

// Level 0: Sunext Central MOC Index Coordinates (Geometric & Semantic Canvas Center)
const SUNEXT_INDEX = {
  cx: 360,
  cy: 360,
};

// Level 1: 8 Canonical Macro-Domains Radially Encircling Sunext Core
// (Top vertical corridor left open so Sunext is undeniably the dominant central nucleus)
const DOMAINS: DomainCluster[] = [
  {
    id: 'banking',
    name: 'Banking & Finance',
    shortName: 'Banking & Finance',
    subline: 'Credit · Risk · AML · Retail · Document AI',
    cx: 200,
    cy: 165,
    labelX: 200,
    labelY: 122,
    textAnchor: 'middle',
    linkUrl: '/doi-ngu#finance',
    capabilities: [
      { id: 'b1', name: 'Credit', x: 130, y: 145 },
      { id: 'b2', name: 'Risk', x: 160, y: 95 },
      { id: 'b3', name: 'AML', x: 115, y: 205 },
      { id: 'b4', name: 'Document AI', x: 260, y: 115 },
    ],
  },
  {
    id: 'tech',
    name: 'Technology & Data',
    shortName: 'Technology & Data',
    subline: 'Data Bus · Private VPC · Enterprise RAG',
    cx: 520,
    cy: 165,
    labelX: 520,
    labelY: 122,
    textAnchor: 'middle',
    linkUrl: '/tu-duy-chuyen-doi-ai/nen-tang-cong-nghe',
    capabilities: [
      { id: 't1', name: 'VPC', x: 590, y: 145 },
      { id: 't2', name: 'RAG', x: 460, y: 115 },
      { id: 't3', name: 'Data Bus', x: 605, y: 205 },
    ],
  },
  {
    id: 'hr',
    name: 'HR & Learning',
    shortName: 'HR & Learning',
    subline: 'L&D Co-worker · Wiki nội bộ · Talent AI',
    cx: 110,
    cy: 335,
    labelX: 110,
    labelY: 295,
    textAnchor: 'middle',
    linkUrl: '/doi-ngu#hr',
    capabilities: [
      { id: 'h1', name: 'L&D', x: 45, y: 310 },
      { id: 'h2', name: 'Wiki', x: 40, y: 380 },
      { id: 'h3', name: 'Talent', x: 65, y: 435 },
    ],
  },
  {
    id: 'retail',
    name: 'Retail & Consumer',
    shortName: 'Retail & Consumer',
    subline: 'Omnichannel · Demand AI · POS Sync',
    cx: 610,
    cy: 335,
    labelX: 610,
    labelY: 295,
    textAnchor: 'middle',
    linkUrl: '/doi-ngu#marketing',
    capabilities: [
      { id: 'rc1', name: 'POS', x: 675, y: 310 },
      { id: 'rc2', name: 'Demand', x: 680, y: 380 },
      { id: 'rc3', name: 'Omni', x: 655, y: 435 },
    ],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Operations',
    shortName: 'Manufacturing & Ops',
    subline: 'QA Vision · Lean SOP · Chuỗi cung ứng',
    cx: 140,
    cy: 505,
    labelX: 140,
    labelY: 550,
    textAnchor: 'middle',
    linkUrl: '/case-studies/ai-auditor-manufacturing',
    capabilities: [
      { id: 'm1', name: 'Vision', x: 75, y: 490 },
      { id: 'm2', name: 'Lean', x: 80, y: 565 },
      { id: 'm3', name: 'Logistics', x: 155, y: 590 },
    ],
  },
  {
    id: 'sales',
    name: 'Sales & Growth',
    shortName: 'Sales & Growth',
    subline: 'Lead 24/7 · CRM Automation · Chốt cọc',
    cx: 580,
    cy: 505,
    labelX: 580,
    labelY: 550,
    textAnchor: 'middle',
    linkUrl: '/case-studies/vinhomes-ai-sales-enablement',
    capabilities: [
      { id: 's1', name: 'Lead', x: 645, y: 490 },
      { id: 's2', name: 'CRM', x: 640, y: 565 },
      { id: 's3', name: 'Booking', x: 565, y: 590 },
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    shortName: 'Real Estate',
    subline: 'Môi giới · Dự án · Thẩm định giá · CRM',
    cx: 230,
    cy: 635,
    labelX: 230,
    labelY: 680,
    textAnchor: 'middle',
    linkUrl: '/nganh/bat-dong-san',
    capabilities: [
      { id: 're1', name: 'Broker', x: 165, y: 630 },
      { id: 're2', name: 'Valuation', x: 180, y: 690 },
      { id: 're3', name: 'Project', x: 285, y: 685 },
    ],
  },
  {
    id: 'governance',
    name: 'Strategy & Governance',
    shortName: 'Strategy & Governance',
    subline: 'Zero-Leak · Tuân thủ · Policy Guard',
    cx: 490,
    cy: 635,
    labelX: 490,
    labelY: 680,
    textAnchor: 'middle',
    linkUrl: '/phap-ly-bao-mat',
    capabilities: [
      { id: 'g1', name: 'Zero-Leak', x: 435, y: 685 },
      { id: 'g2', name: 'Compliance', x: 540, y: 690 },
      { id: 'g3', name: 'Policy', x: 555, y: 630 },
    ],
  },
];

// Level 3: Cross-Domain Perimeter Mesh (Secondary Selective Peer Edges that Enclose Center)
const SEMANTIC_EDGES: SemanticEdge[] = [
  // 1. Banking ↔ Technology (Top Horizon)
  { id: 'e-bank-tech', source: 'banking', target: 'tech', bridgeLabel: 'Private VPC', x1: 200, y1: 165, x2: 520, y2: 165 },
  // 2. Banking ↔ HR (Upper West Arc)
  { id: 'e-bank-hr', source: 'banking', target: 'hr', bridgeLabel: 'Compliance Training', x1: 200, y1: 165, x2: 110, y2: 335 },
  // 3. HR ↔ Manufacturing (Mid West Arc)
  { id: 'e-hr-mfg', source: 'hr', target: 'manufacturing', bridgeLabel: 'Lean SOP Co-worker', x1: 110, y1: 335, x2: 140, y2: 505 },
  // 4. Manufacturing ↔ Real Estate (Lower West Arc)
  { id: 'e-mfg-re', source: 'manufacturing', target: 'real-estate', bridgeLabel: 'Project Inspection', x1: 140, y1: 505, x2: 230, y2: 635 },
  // 5. Real Estate ↔ Governance (Bottom Horizon Arc)
  { id: 'e-re-gov', source: 'real-estate', target: 'governance', bridgeLabel: 'Legal Audit', x1: 230, y1: 635, x2: 490, y2: 635 },
  // 6. Governance ↔ Sales (Lower East Arc)
  { id: 'e-gov-sales', source: 'governance', target: 'sales', bridgeLabel: 'Contract Guard', x1: 490, y1: 635, x2: 580, y2: 505 },
  // 7. Sales ↔ Retail (Mid East Arc)
  { id: 'e-sales-retail', source: 'sales', target: 'retail', bridgeLabel: 'Omnichannel Leads', x1: 580, y1: 505, x2: 610, y2: 335 },
  // 8. Retail ↔ Technology (Upper East Arc)
  { id: 'e-retail-tech', source: 'retail', target: 'tech', bridgeLabel: 'POS Data Bus', x1: 610, y1: 335, x2: 520, y2: 165 },
];

// Level 4: Subtle Cross-Domain Knowledge Chords (Organic Obsidian Network Mesh)
const CROSS_CHORDS = [
  { id: 'c-bank-retail', x1: 200, y1: 165, x2: 610, y2: 335 },
  { id: 'c-hr-tech', x1: 110, y1: 335, x2: 520, y2: 165 },
  { id: 'c-mfg-gov', x1: 140, y1: 505, x2: 490, y2: 635 },
  { id: 'c-re-sales', x1: 230, y1: 635, x2: 580, y2: 505 },
  { id: 'c-bank-gov', x1: 200, y1: 165, x2: 490, y2: 635 },
  { id: 'c-tech-sales', x1: 520, y1: 165, x2: 580, y2: 505 },
  { id: 'c-hr-gov', x1: 110, y1: 335, x2: 490, y2: 635 },
  { id: 'c-mfg-tech', x1: 140, y1: 505, x2: 520, y2: 165 },
  // Inter-node perimeter chords (faint connecting lines across adjacent capability clusters)
  { id: 'c-cap-b-t', x1: 260, y1: 115, x2: 460, y2: 115 },
  { id: 'c-cap-b-h', x1: 115, y1: 205, x2: 45, y2: 310 },
  { id: 'c-cap-h-m', x1: 65, y1: 435, x2: 75, y2: 490 },
  { id: 'c-cap-m-re', x1: 155, y1: 590, x2: 165, y2: 630 },
  { id: 'c-cap-re-g', x1: 285, y1: 685, x2: 435, y2: 685 },
  { id: 'c-cap-g-s', x1: 555, y1: 630, x2: 565, y2: 590 },
  { id: 'c-cap-s-rc', x1: 645, y1: 490, x2: 655, y2: 435 },
  { id: 'c-cap-rc-t', x1: 675, y1: 310, x2: 605, y2: 205 },
];

export function AiTransformationNetwork() {
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);
  const [activeCycleIndex, setActiveCycleIndex] = useState<number>(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Controlled organic cycle: gently pulses one domain every 5s if not hovered
  useEffect(() => {
    if (hoveredDomain !== null) return;
    const interval = setInterval(() => {
      setActiveCycleIndex((prev) => (prev + 1) % DOMAINS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [hoveredDomain]);

  const activeDomainId = hoveredDomain || DOMAINS[activeCycleIndex]?.id;

  // Subtle ambient mouse drift (clamped to ±3px)
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

  // Find all semantic edges connected to the active domain
  const connectedEdgeIds = new Set(
    SEMANTIC_EDGES.filter(
      (e) => e.source === activeDomainId || e.target === activeDomainId
    ).map((e) => e.id)
  );

  // Find all neighboring domains directly linked to active domain
  const connectedDomainIds = new Set<string>();
  connectedDomainIds.add(activeDomainId);
  SEMANTIC_EDGES.forEach((e) => {
    if (e.source === activeDomainId) connectedDomainIds.add(e.target);
    if (e.target === activeDomainId) connectedDomainIds.add(e.source);
  });

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[540px] sm:max-w-[600px] lg:max-w-[640px] xl:max-w-[700px] aspect-square flex items-center justify-center select-none font-sans overflow-visible ml-auto"
    >
      {/* Ambient Atmospheric Cloud Glow centered at Sunext Core */}
      <div 
        className="absolute w-[560px] h-[560px] lg:w-[680px] lg:h-[680px] rounded-full pointer-events-none -z-10 animate-sun-halo"
        style={{
          top: '50%',
          left: '50%',
          marginTop: '-280px',
          marginLeft: '-280px',
          background: 'radial-gradient(circle at 50% 50%, rgba(255,247,232,0.85) 0%, rgba(255,191,117,0.35) 26%, rgba(239,124,44,0.14) 48%, rgba(105,64,190,0.03) 72%, transparent 88%)',
          filter: 'blur(60px)',
          transform: 'scale(1.05)',
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
          {/* Sunext Core Radial Gradient */}
          <radialGradient id="sunext-index-gradient" cx="42%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#FFF7ED" />
            <stop offset="22%" stopColor="#FFBF75" />
            <stop offset="55%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </radialGradient>

          {/* Active Semantic Edge Pulse Stream */}
          <linearGradient id="semantic-pulse-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#581C87" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#7000FF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.85" />
          </linearGradient>

          {/* Hub-Spoke Direct Return Gradient (Domain -> Sunext Index) */}
          <linearGradient id="hub-spoke-inward" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7000FF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#EA580C" stopOpacity="0.85" />
          </linearGradient>

          {/* Core Ambient Aura */}
          <radialGradient id="sunext-core-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.32" />
            <stop offset="55%" stopColor="#FB923C" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#581C87" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Background Constellation Web (Obsidian-Style Organic Concentric Orbits) */}
        <circle cx={SUNEXT_INDEX.cx} cy={SUNEXT_INDEX.cy} r="260" stroke="#E5E3DC" strokeWidth="0.6" strokeDasharray="4 8" opacity="0.35" />
        <circle cx={SUNEXT_INDEX.cx} cy={SUNEXT_INDEX.cy} r="170" stroke="#EBE9E2" strokeWidth="0.6" strokeDasharray="3 6" opacity="0.3" />

        {/* Sunext Core Ambient Halo */}
        <circle cx={SUNEXT_INDEX.cx} cy={SUNEXT_INDEX.cy} r="130" fill="url(#sunext-core-aura)" />

        {/* ==================================================================== */}
        {/* LEVEL 4 — SUBTLE CROSS-DOMAIN KNOWLEDGE CHORDS (Internal Mesh)       */}
        {/* (Faint organic lines connecting domains across the knowledge network) */}
        {/* ==================================================================== */}
        {CROSS_CHORDS.map((chord) => (
          <line
            key={chord.id}
            x1={chord.x1}
            y1={chord.y1}
            x2={chord.x2}
            y2={chord.y2}
            stroke="#8B5CF6"
            strokeWidth="0.8"
            strokeDasharray="3 5"
            opacity={activeDomainId ? 0.12 : 0.18}
            className="transition-opacity duration-400"
          />
        ))}

        {/* ==================================================================== */}
        {/* LEVEL 3 — PERIMETER CROSS-DOMAIN MESH (Subtle Secondary Inter-links) */}
        {/* ==================================================================== */}
        {SEMANTIC_EDGES.map((edge) => {
          const isEdgeActive = connectedEdgeIds.has(edge.id);
          const isDimmed = activeDomainId !== null && !isEdgeActive;

          return (
            <g key={edge.id}>
              {/* Mesh Line connecting adjacent domain nodes */}
              <line
                x1={edge.x1}
                y1={edge.y1}
                x2={edge.x2}
                y2={edge.y2}
                stroke={isEdgeActive ? 'url(#semantic-pulse-gradient)' : '#8B5CF6'}
                strokeWidth={isEdgeActive ? 2.0 : 1.0}
                strokeDasharray={isEdgeActive ? 'none' : '3 4'}
                opacity={isEdgeActive ? 0.95 : isDimmed ? 0.18 : 0.26}
                className="transition-all duration-400"
              />

              {/* Traveling Pulse along Active Semantic Perimeter Link */}
              {isEdgeActive && (
                <circle r="3" fill="#A855F7" filter="drop-shadow(0 0 5px #7000FF)">
                  <animate
                    attributeName="cx"
                    from={edge.x1}
                    to={edge.x2}
                    dur="2.4s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    from={edge.y1}
                    to={edge.y2}
                    dur="2.4s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* ==================================================================== */}
        {/* LEVEL 1 — DIRECT SPOKES: ALL 8 DOMAINS VISIBLY CONVERGE INTO SUNEXT  */}
        {/* (Crisp faint purple lines connecting all domains into Sunext MOC Core) */}
        {/* ==================================================================== */}
        {DOMAINS.map((domain) => {
          const isDomainActive = domain.id === activeDomainId;
          const isOtherDimmed = activeDomainId !== null && !isDomainActive;

          return (
            <g key={`hub-spoke-${domain.id}`}>
              {/* Primary Spoke Line directly to Central Sunext Index */}
              <line
                x1={domain.cx}
                y1={domain.cy}
                x2={SUNEXT_INDEX.cx}
                y2={SUNEXT_INDEX.cy}
                stroke={isDomainActive ? 'url(#hub-spoke-inward)' : '#7000FF'}
                strokeWidth={isDomainActive ? 2.6 : 1.2}
                strokeDasharray={isDomainActive ? 'none' : '4 4'}
                opacity={isDomainActive ? 1.0 : isOtherDimmed ? 0.20 : 0.28}
                className="transition-all duration-400"
              />

              {/* Inward Moving Purple Pulse: Deep Domain -> Sunext Core */}
              {isDomainActive && (
                <circle r="4.5" fill="#7000FF" filter="drop-shadow(0 0 6px #7000FF)">
                  <animate
                    attributeName="cx"
                    from={domain.cx}
                    to={SUNEXT_INDEX.cx}
                    dur="1.7s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    from={domain.cy}
                    to={SUNEXT_INDEX.cy}
                    dur="1.7s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* ==================================================================== */}
        {/* LEVEL 2 — SUB-NODE SPOKES (Parent Domain to Micro Dots)             */}
        {/* (Rendered faintly always, with high contrast when active/hovered)   */}
        {/* ==================================================================== */}
        {DOMAINS.map((domain) => {
          const isClusterActive = activeDomainId === domain.id;

          return (
            <g key={`spokes-${domain.id}`}>
              {domain.capabilities.map((cap) => (
                <line
                  key={`cap-link-${domain.id}-${cap.id}`}
                  x1={domain.cx}
                  y1={domain.cy}
                  x2={cap.x}
                  y2={cap.y}
                  stroke={isClusterActive ? '#7000FF' : '#8B5CF6'}
                  strokeWidth={isClusterActive ? 1.4 : 0.75}
                  strokeDasharray={isClusterActive ? 'none' : '2 3'}
                  opacity={isClusterActive ? 0.85 : 0.25}
                  className="transition-all duration-300"
                />
              ))}
            </g>
          );
        })}

        {/* ==================================================================== */}
        {/* LEVEL 2 — SUB-NODES: PURE DOTS & SATELLITES                         */}
        {/* (Ambiently visible constellation dots, bloom on hover/active)        */}
        {/* ==================================================================== */}
        {DOMAINS.map((domain) => {
          const isClusterActive = activeDomainId === domain.id;

          return (
            <g key={`caps-${domain.id}`}>
              {domain.capabilities.map((cap) => (
                <g key={cap.id} transform={`translate(${cap.x}, ${cap.y})`}>
                  <circle
                    cx="0"
                    cy="0"
                    r={isClusterActive ? 6.5 : 4}
                    fill={isClusterActive ? '#FAF5FF' : 'none'}
                    stroke="#7000FF"
                    strokeWidth="0.8"
                    opacity={isClusterActive ? 0.6 : 0.25}
                    className="transition-all duration-300"
                  />
                  <circle
                    cx="0"
                    cy="0"
                    r={isClusterActive ? 3.5 : 2}
                    fill="#7000FF"
                    opacity={isClusterActive ? 0.95 : 0.45}
                    className="transition-all duration-300"
                  />
                  {isClusterActive && (
                    <text
                      x="0"
                      y="14"
                      textAnchor="middle"
                      fill="#17151A"
                      fontSize="9"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      fontWeight="500"
                      className="select-none pointer-events-none"
                    >
                      {cap.name}
                    </text>
                  )}
                </g>
              ))}
            </g>
          );
        })}

        {/* ==================================================================== */}
        {/* LEVEL 1 — DOMAIN MOC NODES (Clickable to Expert Faculty & Cases)    */}
        {/* ==================================================================== */}
        {DOMAINS.map((domain) => {
          const isClusterActive = activeDomainId === domain.id;
          const isConnectedToActive = connectedDomainIds.has(domain.id);

          return (
            <Link key={`hub-${domain.id}`} href={domain.linkUrl}>
              <g
                onMouseEnter={() => setHoveredDomain(domain.id)}
                onMouseLeave={() => setHoveredDomain(null)}
                className="cursor-pointer group"
                opacity={isClusterActive ? 1 : isConnectedToActive ? 0.95 : 0.8}
                style={{ transition: 'opacity 0.3s ease' }}
              >
                {/* Outer Pulsing Orbit Ring when active */}
                {isClusterActive && (
                  <circle
                    cx={domain.cx}
                    cy={domain.cy}
                    r="20"
                    fill="none"
                    stroke="#7000FF"
                    strokeWidth="1"
                    strokeDasharray="3 5"
                    opacity="0.45"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from={`0 ${domain.cx} ${domain.cy}`}
                      to={`360 ${domain.cx} ${domain.cy}`}
                      dur="16s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}

                {/* Hub Outer Disc */}
                <circle
                  cx={domain.cx}
                  cy={domain.cy}
                  r={isClusterActive ? 13 : 9.5}
                  fill="#FFFFFF"
                  stroke={isClusterActive ? '#7000FF' : '#CBD5E1'}
                  strokeWidth={isClusterActive ? 2 : 1.3}
                  filter="drop-shadow(0 2px 8px rgba(0,0,0,0.06))"
                  className="transition-all duration-300 group-hover:stroke-[#7000FF]"
                />

                {/* Hub Center Dot */}
                <circle
                  cx={domain.cx}
                  cy={domain.cy}
                  r={isClusterActive ? 5 : 3.5}
                  fill={isClusterActive ? '#7000FF' : '#6B21A8'}
                  className="transition-all duration-300"
                />

                {/* Primary Macro-Domain Name (Always Legible) */}
                <text
                  x={domain.labelX}
                  y={domain.labelY}
                  textAnchor={domain.textAnchor}
                  fill={isClusterActive ? '#0A0A0A' : '#1F2937'}
                  fontSize={isClusterActive ? 12 : 11.5}
                  fontFamily="system-ui, sans-serif"
                  fontWeight={isClusterActive ? 700 : 600}
                  letterSpacing="0.01em"
                  className="transition-all duration-300 select-none filter drop-shadow-[0_1px_5px_rgba(255,255,255,0.95)]"
                >
                  {domain.shortName}
                </text>

                {/* Deep Capability Sub-line: ONLY shown when Active or Hovered! */}
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
            </Link>
          );
        })}

        {/* ==================================================================== */}
        {/* LEVEL 0 — SUNEXT CENTRAL MOC INDEX (The Single Convergence Nucleus) */}
        {/* ==================================================================== */}
        <Link href="/tu-duy-chuyen-doi-ai">
          <g transform={`translate(${SUNEXT_INDEX.cx}, ${SUNEXT_INDEX.cy})`} className="cursor-pointer group">
            {/* Outward Radiating Convergence Waves */}
            <circle cx="0" cy="0" r="48" fill="none" stroke="#F97316" strokeWidth="1.2" opacity="0.65">
              <animate attributeName="r" values="46;72;46" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.75;0;0.75" dur="2.4s" repeatCount="indefinite" />
            </circle>

            {/* Rotating Corona Orbit */}
            <circle cx="0" cy="0" r="60" fill="none" stroke="#F97316" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.4">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="36s" repeatCount="indefinite" />
            </circle>

            {/* Core Sun Disc */}
            <circle
              cx="0"
              cy="0"
              r="40"
              fill="url(#sunext-index-gradient)"
              filter="drop-shadow(0 6px 24px rgba(239,124,44,0.42))"
              className="transition-transform duration-500 group-hover:scale-105"
            />

            {/* Inner Highlight Ring */}
            <circle cx="0" cy="0" r="40" fill="none" stroke="#FFFFFF" strokeWidth="1.4" strokeOpacity="0.85" />

            {/* Central Nucleus Dot */}
            <circle cx="0" cy="0" r="13" fill="#FFFFFF" fillOpacity="0.25" stroke="#FFFFFF" strokeWidth="1" />
            <circle cx="0" cy="0" r="5" fill="#FFFFFF" />

            {/* Core Monogram Label: SUNEXT */}
            <text
              x="0"
              y="54"
              textAnchor="middle"
              fill="#EA580C"
              fontSize="9.5"
              fontFamily="monospace"
              fontWeight="800"
              letterSpacing="0.18em"
              className="select-none filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.95)]"
            >
              SUNEXT
            </text>
            <text
              x="0"
              y="66"
              textAnchor="middle"
              fill="#9A3412"
              fontSize="7"
              fontFamily="monospace"
              fontWeight="700"
              letterSpacing="0.12em"
              className="select-none opacity-80 filter drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)]"
            >
              COLLECTIVE INTELLIGENCE
            </text>
          </g>
        </Link>
      </svg>
    </div>
  );
}
