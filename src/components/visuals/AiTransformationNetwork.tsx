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

// Level 0: Sunext Central MOC Index Coordinates (Exact center of upper orchestrator field)
const SUNEXT_INDEX = {
  cx: 360,
  cy: 315,
};

// Orchestration Destination: Business Results & Autonomy Terminal Node
const RESULT_NODE = {
  cx: 360,
  cy: 515,
};

// Level 1: 8 Canonical Macro-Domains Surrounding Sunext Core Radially
// (Top vertical axis kept open to ensure Sunext is visibly the central MOC nucleus)
const DOMAINS: DomainCluster[] = [
  {
    id: 'banking',
    name: 'Banking & Finance',
    shortName: 'Banking & Finance',
    subline: 'Credit · Risk · AML · Retail · Document AI',
    cx: 195,
    cy: 145,
    labelX: 195,
    labelY: 104,
    textAnchor: 'middle',
    linkUrl: '/doi-ngu#finance',
    capabilities: [
      { id: 'b1', name: 'Credit', x: 125, y: 125 },
      { id: 'b2', name: 'Risk', x: 155, y: 75 },
      { id: 'b3', name: 'AML', x: 110, y: 185 },
      { id: 'b4', name: 'Document AI', x: 255, y: 95 },
    ],
  },
  {
    id: 'tech',
    name: 'Technology & Data',
    shortName: 'Technology & Data',
    subline: 'Data Bus · Private VPC · Enterprise RAG',
    cx: 525,
    cy: 145,
    labelX: 525,
    labelY: 104,
    textAnchor: 'middle',
    linkUrl: '/tu-duy-chuyen-doi-ai/nen-tang-cong-nghe',
    capabilities: [
      { id: 't1', name: 'VPC', x: 595, y: 125 },
      { id: 't2', name: 'RAG', x: 465, y: 95 },
      { id: 't3', name: 'Data Bus', x: 610, y: 185 },
    ],
  },
  {
    id: 'hr',
    name: 'HR & Learning',
    shortName: 'HR & Learning',
    subline: 'L&D Co-worker · Wiki nội bộ · Talent AI',
    cx: 110,
    cy: 295,
    labelX: 110,
    labelY: 255,
    textAnchor: 'middle',
    linkUrl: '/doi-ngu#hr',
    capabilities: [
      { id: 'h1', name: 'L&D', x: 45, y: 270 },
      { id: 'h2', name: 'Wiki', x: 40, y: 340 },
      { id: 'h3', name: 'Talent', x: 65, y: 395 },
    ],
  },
  {
    id: 'retail',
    name: 'Retail & Consumer',
    shortName: 'Retail & Consumer',
    subline: 'Omnichannel · Demand AI · POS Sync',
    cx: 610,
    cy: 295,
    labelX: 610,
    labelY: 255,
    textAnchor: 'middle',
    linkUrl: '/doi-ngu#marketing',
    capabilities: [
      { id: 'rc1', name: 'POS', x: 675, y: 270 },
      { id: 'rc2', name: 'Demand', x: 680, y: 340 },
      { id: 'rc3', name: 'Omni', x: 655, y: 395 },
    ],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Operations',
    shortName: 'Manufacturing & Ops',
    subline: 'QA Vision · Lean SOP · Chuỗi cung ứng',
    cx: 140,
    cy: 460,
    labelX: 140,
    labelY: 505,
    textAnchor: 'middle',
    linkUrl: '/case-studies/ai-auditor-manufacturing',
    capabilities: [
      { id: 'm1', name: 'Vision', x: 75, y: 445 },
      { id: 'm2', name: 'Lean', x: 80, y: 520 },
      { id: 'm3', name: 'Logistics', x: 155, y: 545 },
    ],
  },
  {
    id: 'sales',
    name: 'Sales & Growth',
    shortName: 'Sales & Growth',
    subline: 'Lead 24/7 · CRM Automation · Chốt cọc',
    cx: 580,
    cy: 460,
    labelX: 580,
    labelY: 505,
    textAnchor: 'middle',
    linkUrl: '/case-studies/vinhomes-ai-sales-enablement',
    capabilities: [
      { id: 's1', name: 'Lead', x: 645, y: 445 },
      { id: 's2', name: 'CRM', x: 640, y: 520 },
      { id: 's3', name: 'Booking', x: 565, y: 545 },
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    shortName: 'Real Estate',
    subline: 'Môi giới · Dự án · Thẩm định giá · CRM',
    cx: 215,
    cy: 620,
    labelX: 215,
    labelY: 665,
    textAnchor: 'middle',
    linkUrl: '/nganh/bat-dong-san',
    capabilities: [
      { id: 're1', name: 'Broker', x: 150, y: 615 },
      { id: 're2', name: 'Valuation', x: 165, y: 675 },
      { id: 're3', name: 'Project', x: 270, y: 670 },
    ],
  },
  {
    id: 'governance',
    name: 'Strategy & Governance',
    shortName: 'Strategy & Governance',
    subline: 'Zero-Leak · Tuân thủ · Policy Guard',
    cx: 505,
    cy: 620,
    labelX: 505,
    labelY: 665,
    textAnchor: 'middle',
    linkUrl: '/phap-ly-bao-mat',
    capabilities: [
      { id: 'g1', name: 'Zero-Leak', x: 450, y: 670 },
      { id: 'g2', name: 'Compliance', x: 555, y: 675 },
      { id: 'g3', name: 'Policy', x: 570, y: 615 },
    ],
  },
];

// Level 3: Cross-Domain Perimeter Mesh (Secondary Selective Peer Edges that Enclose Center)
const SEMANTIC_EDGES: SemanticEdge[] = [
  // 1. Banking ↔ Technology (Top Horizon)
  { id: 'e-bank-tech', source: 'banking', target: 'tech', bridgeLabel: 'Private VPC', x1: 195, y1: 145, x2: 525, y2: 145 },
  // 2. Banking ↔ HR (Upper West Arc)
  { id: 'e-bank-hr', source: 'banking', target: 'hr', bridgeLabel: 'Compliance Training', x1: 195, y1: 145, x2: 110, y2: 295 },
  // 3. HR ↔ Manufacturing (Mid West Arc)
  { id: 'e-hr-mfg', source: 'hr', target: 'manufacturing', bridgeLabel: 'Lean SOP Co-worker', x1: 110, y1: 295, x2: 140, y2: 460 },
  // 4. Manufacturing ↔ Real Estate (Lower West Arc)
  { id: 'e-mfg-re', source: 'manufacturing', target: 'real-estate', bridgeLabel: 'Project Inspection', x1: 140, y1: 460, x2: 215, y2: 620 },
  // 5. Real Estate ↔ Governance (Bottom Horizon Arc)
  { id: 'e-re-gov', source: 'real-estate', target: 'governance', bridgeLabel: 'Legal Audit', x1: 215, y1: 620, x2: 505, y2: 620 },
  // 6. Governance ↔ Sales (Lower East Arc)
  { id: 'e-gov-sales', source: 'governance', target: 'sales', bridgeLabel: 'Contract Guard', x1: 505, y1: 620, x2: 580, y2: 460 },
  // 7. Sales ↔ Retail (Mid East Arc)
  { id: 'e-sales-retail', source: 'sales', target: 'retail', bridgeLabel: 'Omnichannel Leads', x1: 580, y1: 460, x2: 610, y2: 295 },
  // 8. Retail ↔ Technology (Upper East Arc)
  { id: 'e-retail-tech', source: 'retail', target: 'tech', bridgeLabel: 'POS Data Bus', x1: 610, y1: 295, x2: 525, y2: 145 },
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
      {/* Ambient Atmospheric Cloud Glow centered at Sunext MOC Index */}
      <div 
        className="absolute w-[560px] h-[560px] lg:w-[680px] lg:h-[680px] rounded-full pointer-events-none -z-10 animate-sun-halo"
        style={{
          top: '50%',
          left: '50%',
          marginTop: '-300px',
          marginLeft: '-280px',
          background: 'radial-gradient(circle at 50% 45%, rgba(255,247,232,0.85) 0%, rgba(255,191,117,0.35) 26%, rgba(239,124,44,0.14) 48%, rgba(105,64,190,0.03) 72%, transparent 88%)',
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

          {/* Outward Orchestration Artery Gradient (Sunext -> Result) */}
          <linearGradient id="orchestration-artery" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#EA580C" stopOpacity="0.95" />
          </linearGradient>

          {/* Core Ambient Aura */}
          <radialGradient id="sunext-core-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.32" />
            <stop offset="55%" stopColor="#FB923C" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#581C87" stopOpacity="0" />
          </radialGradient>

          {/* Result Badge Fill Gradient */}
          <linearGradient id="result-badge-fill" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFFDF7" />
            <stop offset="100%" stopColor="#FEF3C7" />
          </linearGradient>
        </defs>

        {/* 1. Background Constellation Web (Obsidian-Style Organic Matrix) */}
        <circle cx={SUNEXT_INDEX.cx} cy={SUNEXT_INDEX.cy} r="255" stroke="#E5E3DC" strokeWidth="0.6" strokeDasharray="4 8" opacity="0.35" />
        <circle cx={SUNEXT_INDEX.cx} cy={SUNEXT_INDEX.cy} r="165" stroke="#EBE9E2" strokeWidth="0.6" strokeDasharray="3 6" opacity="0.3" />

        {/* Sunext Core Ambient Halo */}
        <circle cx={SUNEXT_INDEX.cx} cy={SUNEXT_INDEX.cy} r="125" fill="url(#sunext-core-aura)" />

        {/* ==================================================================== */}
        {/* LEVEL 1 — DIRECT CONVERGENCE SPOKES: EVERY DOMAIN FEEDS INTO SUNEXT   */}
        {/* (All 8 radial spokes clearly visible to establish central MOC Index)  */}
        {/* ==================================================================== */}
        {DOMAINS.map((domain) => {
          const isDomainActive = domain.id === activeDomainId;

          return (
            <g key={`hub-spoke-${domain.id}`}>
              {/* Primary Spoke Line directly to Central Sunext Index */}
              <line
                x1={domain.cx}
                y1={domain.cy}
                x2={SUNEXT_INDEX.cx}
                y2={SUNEXT_INDEX.cy}
                stroke={isDomainActive ? 'url(#hub-spoke-inward)' : '#D6D3CD'}
                strokeWidth={isDomainActive ? 2.6 : 1.2}
                strokeDasharray={isDomainActive ? 'none' : '3 4'}
                opacity={isDomainActive ? 1 : 0.85}
                className="transition-all duration-400"
              />

              {/* Inward Moving Purple Pulse: Deep Domain -> Sunext Index */}
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
        {/* LEVEL 3 — PERIMETER CROSS-DOMAIN MESH (Secondary Selective Edges)    */}
        {/* ==================================================================== */}
        {SEMANTIC_EDGES.map((edge) => {
          const isEdgeActive = connectedEdgeIds.has(edge.id);
          const isDimmed = activeDomainId !== null && !isEdgeActive;

          return (
            <g key={edge.id}>
              {/* Mesh Line */}
              <line
                x1={edge.x1}
                y1={edge.y1}
                x2={edge.x2}
                y2={edge.y2}
                stroke={isEdgeActive ? 'url(#semantic-pulse-gradient)' : '#6B21A8'}
                strokeWidth={isEdgeActive ? 1.8 : 0.8}
                strokeDasharray={isEdgeActive ? 'none' : '3 5'}
                opacity={isEdgeActive ? 0.95 : isDimmed ? 0.16 : 0.28}
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
        {/* ORCHESTRATION PIPELINE: SUNEXT -> BUSINESS RESULT & TỰ CHỦ          */}
        {/* ==================================================================== */}
        {/* Main Artery Link */}
        <line
          x1={SUNEXT_INDEX.cx}
          y1={SUNEXT_INDEX.cy + 38}
          x2={RESULT_NODE.cx}
          y2={RESULT_NODE.cy - 18}
          stroke="url(#orchestration-artery)"
          strokeWidth="2.4"
          strokeDasharray="4 3"
          opacity="0.9"
        />

        {/* Single Radiant Orange Pulse streaming OUTWARD from Sunext to Business Result */}
        <circle r="5" fill="#F97316" filter="drop-shadow(0 0 8px #EA580C)">
          <animate
            attributeName="cx"
            from={SUNEXT_INDEX.cx}
            to={RESULT_NODE.cx}
            dur="1.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            from={SUNEXT_INDEX.cy + 38}
            to={RESULT_NODE.cy - 18}
            dur="1.6s"
            repeatCount="indefinite"
          />
        </circle>

        {/* ==================================================================== */}
        {/* LEVEL 2 — SUB-NODE SPOKES (Parent Domain to Micro Dots)             */}
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
                  stroke={isClusterActive ? '#7000FF' : '#CBD5E1'}
                  strokeWidth={isClusterActive ? 1.2 : 0.7}
                  strokeDasharray={isClusterActive ? 'none' : '2 3'}
                  opacity={isClusterActive ? 0.8 : 0.4}
                  className="transition-all duration-300"
                />
              ))}
            </g>
          );
        })}

        {/* ==================================================================== */}
        {/* LEVEL 2 — SUB-NODES: PURE DOTS (Clean Obsidian Aesthetics)          */}
        {/* ==================================================================== */}
        {DOMAINS.map((domain) => {
          const isClusterActive = activeDomainId === domain.id;

          return (
            <g key={`caps-${domain.id}`} className="transition-opacity duration-300">
              {domain.capabilities.map((cap) => (
                <g key={cap.id} transform={`translate(${cap.x}, ${cap.y})`}>
                  {isClusterActive && (
                    <circle
                      cx="0"
                      cy="0"
                      r="6.5"
                      fill="none"
                      stroke="#7000FF"
                      strokeWidth="0.8"
                      opacity="0.45"
                    />
                  )}
                  <circle
                    cx="0"
                    cy="0"
                    r={isClusterActive ? 3.5 : 2.5}
                    fill={isClusterActive ? '#7000FF' : '#6B21A8'}
                    opacity={isClusterActive ? 0.95 : 0.55}
                    className="transition-all duration-300"
                  />
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
                opacity={isClusterActive ? 1 : isConnectedToActive ? 0.95 : 0.78}
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
        {/* DESTINATION NODE — KẾT QUẢ KINH DOANH & TỰ CHỦ (Final Deliverable)  */}
        {/* ==================================================================== */}
        <Link href="/case-studies">
          <g
            transform={`translate(${RESULT_NODE.cx}, ${RESULT_NODE.cy})`}
            className="cursor-pointer group"
          >
            {/* Ambient Pulse Ring */}
            <circle cx="0" cy="0" r="22" fill="none" stroke="#F97316" strokeWidth="0.8" opacity="0.35">
              <animate attributeName="r" values="20;32;20" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.45;0;0.45" dur="2.4s" repeatCount="indefinite" />
            </circle>

            {/* Pill Container (Solid Fill so lines behind never cut through) */}
            <rect
              x="-96"
              y="-15"
              width="192"
              height="30"
              rx="15"
              fill="url(#result-badge-fill)"
              stroke="#F59E0B"
              strokeWidth="1.4"
              filter="drop-shadow(0 4px 14px rgba(245,158,11,0.25))"
              className="transition-all duration-300 group-hover:stroke-[#EA580C] group-hover:scale-105"
            />

            {/* Result Monogram Dot */}
            <circle cx="-76" cy="0" r="4.5" fill="#EA580C" />

            {/* Result Text */}
            <text
              x="-64"
              y="4"
              textAnchor="start"
              fill="#9A3412"
              fontSize="9.5"
              fontFamily="monospace"
              fontWeight="700"
              letterSpacing="0.08em"
              className="select-none group-hover:fill-[#C2410C] transition-colors"
            >
              KẾT QUẢ P&amp;L · TỰ CHỦ
            </text>
          </g>
        </Link>

        {/* ==================================================================== */}
        {/* LEVEL 0 — SUNEXT CENTRAL MOC INDEX (Convergence & Orchestrator Nucleus) */}
        {/* ==================================================================== */}
        <Link href="/tu-duy-chuyen-doi-ai">
          <g transform={`translate(${SUNEXT_INDEX.cx}, ${SUNEXT_INDEX.cy})`} className="cursor-pointer group">
            {/* Outward Radiating Convergence Waves */}
            <circle cx="0" cy="0" r="46" fill="none" stroke="#F97316" strokeWidth="1.2" opacity="0.65">
              <animate attributeName="r" values="44;68;44" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.75;0;0.75" dur="2.4s" repeatCount="indefinite" />
            </circle>

            {/* Rotating Corona Orbit */}
            <circle cx="0" cy="0" r="58" fill="none" stroke="#F97316" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.4">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="36s" repeatCount="indefinite" />
            </circle>

            {/* Core Sun Disc */}
            <circle
              cx="0"
              cy="0"
              r="38"
              fill="url(#sunext-index-gradient)"
              filter="drop-shadow(0 6px 24px rgba(239,124,44,0.42))"
              className="transition-transform duration-500 group-hover:scale-105"
            />

            {/* Inner Highlight Ring */}
            <circle cx="0" cy="0" r="38" fill="none" stroke="#FFFFFF" strokeWidth="1.4" strokeOpacity="0.85" />

            {/* Central Nucleus Dot */}
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" fillOpacity="0.25" stroke="#FFFFFF" strokeWidth="1" />
            <circle cx="0" cy="0" r="4.5" fill="#FFFFFF" />

            {/* Index Label Monogram */}
            <text
              x="0"
              y="52"
              textAnchor="middle"
              fill="#EA580C"
              fontSize="8.5"
              fontFamily="monospace"
              fontWeight="700"
              letterSpacing="0.14em"
              className="select-none filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.95)]"
            >
              SUNEXT · INDEX MOC
            </text>
          </g>
        </Link>
      </svg>
    </div>
  );
}
