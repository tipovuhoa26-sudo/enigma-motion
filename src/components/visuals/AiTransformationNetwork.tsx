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

// Level 0: Sunext Central MOC Index Coordinates (~56% height of 720px visual canvas)
const SUNEXT_INDEX = {
  cx: 360,
  cy: 405,
};

// Level 1: 8 Canonical Macro-Domains with Real Depth (Obsidian MOC Layout)
const DOMAINS: DomainCluster[] = [
  {
    id: 'governance',
    name: 'Strategy & Governance',
    shortName: 'Strategy & Governance',
    subline: 'Zero-Leak · Tuân thủ · Policy Guard',
    cx: 360,
    cy: 115,
    labelX: 360,
    labelY: 76,
    textAnchor: 'middle',
    linkUrl: '/phap-ly-bao-mat',
    capabilities: [
      { id: 'g1', name: 'Zero-Leak', x: 290, y: 70 },
      { id: 'g2', name: 'Compliance', x: 360, y: 45 },
      { id: 'g3', name: 'Policy', x: 430, y: 70 },
    ],
  },
  {
    id: 'banking',
    name: 'Banking & Finance',
    shortName: 'Banking & Finance',
    subline: 'Credit · Risk · AML · Retail · Document AI',
    cx: 175,
    cy: 175,
    labelX: 200,
    labelY: 155,
    textAnchor: 'start',
    linkUrl: '/doi-ngu',
    capabilities: [
      { id: 'b1', name: 'Credit', x: 105, y: 135 },
      { id: 'b2', name: 'Risk', x: 155, y: 105 },
      { id: 'b3', name: 'AML', x: 95, y: 210 },
      { id: 'b4', name: 'Retail', x: 120, y: 255 },
      { id: 'b5', name: 'Document AI', x: 230, y: 115 },
    ],
  },
  {
    id: 'tech',
    name: 'Technology & Data',
    shortName: 'Technology & Data',
    subline: 'Data Bus · Private VPC · Enterprise RAG',
    cx: 545,
    cy: 175,
    labelX: 520,
    labelY: 155,
    textAnchor: 'end',
    linkUrl: '/tu-duy-chuyen-doi-ai/nen-tang-cong-nghe',
    capabilities: [
      { id: 't1', name: 'VPC', x: 625, y: 135 },
      { id: 't2', name: 'Bus', x: 635, y: 205 },
      { id: 't3', name: 'RAG', x: 585, y: 105 },
    ],
  },
  {
    id: 'hr',
    name: 'HR & Learning',
    shortName: 'HR & Learning',
    subline: 'L&D Co-worker · Wiki nội bộ · Talent AI',
    cx: 110,
    cy: 345,
    labelX: 135,
    labelY: 335,
    textAnchor: 'start',
    linkUrl: '/doi-ngu',
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
    cy: 340,
    labelX: 585,
    labelY: 325,
    textAnchor: 'end',
    linkUrl: '/nganh',
    capabilities: [
      { id: 'rc1', name: 'POS', x: 675, y: 300 },
      { id: 'rc2', name: 'Demand', x: 680, y: 380 },
      { id: 'rc3', name: 'Omni', x: 630, y: 415 },
    ],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Operations',
    shortName: 'Manufacturing & Ops',
    subline: 'QA Vision · Lean SOP · Chuỗi cung ứng',
    cx: 175,
    cy: 535,
    labelX: 175,
    labelY: 485,
    textAnchor: 'middle',
    linkUrl: '/case-studies/ai-auditor-manufacturing',
    capabilities: [
      { id: 'm1', name: 'Vision', x: 105, y: 520 },
      { id: 'm2', name: 'Lean', x: 115, y: 595 },
      { id: 'm3', name: 'Logistics', x: 195, y: 625 },
    ],
  },
  {
    id: 'sales',
    name: 'Sales & Growth',
    shortName: 'Sales & Growth',
    subline: 'Lead 24/7 · CRM Automation · Chốt cọc',
    cx: 545,
    cy: 510,
    labelX: 520,
    labelY: 495,
    textAnchor: 'end',
    linkUrl: '/case-studies',
    capabilities: [
      { id: 's1', name: 'Lead', x: 625, y: 490 },
      { id: 's2', name: 'CRM', x: 610, y: 565 },
      { id: 's3', name: 'Booking', x: 550, y: 605 },
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    shortName: 'Real Estate',
    subline: 'Môi giới · Dự án · Thẩm định giá · CRM',
    cx: 360,
    cy: 620,
    labelX: 360,
    labelY: 660,
    textAnchor: 'middle',
    linkUrl: '/nganh',
    capabilities: [
      { id: 're1', name: 'Broker', x: 295, y: 655 },
      { id: 're2', name: 'Project', x: 425, y: 655 },
      { id: 're3', name: 'Valuation', x: 360, y: 690 },
    ],
  },
];

// Level 3: Cross-Domain Semantic Mesh Edges (Real Peer-to-Peer Interconnections)
const SEMANTIC_EDGES: SemanticEdge[] = [
  // 1. Banking ↔ Governance (Risk & Compliance)
  { id: 'e-bank-gov', source: 'banking', target: 'governance', bridgeLabel: 'Risk & Compliance', x1: 175, y1: 175, x2: 360, y2: 115 },
  // 2. Governance ↔ Technology (Policy Guard & Data Isolation)
  { id: 'e-gov-tech', source: 'governance', target: 'tech', bridgeLabel: 'Policy Guard', x1: 360, y1: 115, x2: 545, y2: 175 },
  // 3. Banking ↔ Technology (Private VPC & Enterprise RAG)
  { id: 'e-bank-tech', source: 'banking', target: 'tech', bridgeLabel: 'Private VPC', x1: 175, y1: 175, x2: 545, y2: 175 },
  // 4. Banking ↔ Manufacturing (Document AI & Underwriting)
  { id: 'e-bank-mfg', source: 'banking', target: 'manufacturing', bridgeLabel: 'Document AI', x1: 175, y1: 175, x2: 175, y2: 535 },
  // 5. HR ↔ Technology (Internal Knowledge Base RAG)
  { id: 'e-hr-tech', source: 'hr', target: 'tech', bridgeLabel: 'Internal Wiki RAG', x1: 110, y1: 345, x2: 545, y2: 175 },
  // 6. HR ↔ Manufacturing (SOP Training & AI Co-worker)
  { id: 'e-hr-mfg', source: 'hr', target: 'manufacturing', bridgeLabel: 'SOP Training', x1: 110, y1: 345, x2: 175, y2: 535 },
  // 7. Technology ↔ Retail (Real-time POS Data Bus)
  { id: 'e-tech-retail', source: 'tech', target: 'retail', bridgeLabel: 'POS Data Bus', x1: 545, y1: 175, x2: 610, y2: 340 },
  // 8. Retail ↔ Sales (Omnichannel & Lead Journey)
  { id: 'e-retail-sales', source: 'retail', target: 'sales', bridgeLabel: 'Omnichannel Leads', x1: 610, y1: 340, x2: 545, y2: 510 },
  // 9. Real Estate ↔ Sales (CRM & 24/7 Lead Response)
  { id: 'e-re-sales', source: 'real-estate', target: 'sales', bridgeLabel: 'Lead Engine 24/7', x1: 360, y1: 620, x2: 545, y2: 510 },
  // 10. Real Estate ↔ Manufacturing (Contract Workflow & Inspection)
  { id: 'e-re-mfg', source: 'real-estate', target: 'manufacturing', bridgeLabel: 'Contract Workflow', x1: 360, y1: 620, x2: 175, y2: 535 },
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
      {/* Ambient Atmospheric Cloud Glow centered at Sunext MOC Index (bleed subtly downward) */}
      <div 
        className="absolute w-[560px] h-[560px] lg:w-[680px] lg:h-[680px] rounded-full pointer-events-none -z-10 animate-sun-halo"
        style={{
          top: '50%',
          left: '50%',
          marginTop: '-240px',
          marginLeft: '-280px',
          background: 'radial-gradient(circle at 50% 56%, rgba(255,247,232,0.85) 0%, rgba(255,191,117,0.35) 26%, rgba(239,124,44,0.14) 48%, rgba(105,64,190,0.03) 72%, transparent 88%)',
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
            <stop offset="0%" stopColor="#581C87" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#7000FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
          </linearGradient>

          {/* Hub-Spoke Direct Return Gradient (Domain -> Sunext Index) */}
          <linearGradient id="hub-spoke-active" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7000FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
          </linearGradient>

          {/* Core Ambient Aura */}
          <radialGradient id="sunext-core-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.32" />
            <stop offset="55%" stopColor="#FB923C" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#581C87" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Background Constellation Web (Obsidian-Style Organic Matrix) */}
        <circle cx={SUNEXT_INDEX.cx} cy={SUNEXT_INDEX.cy} r="255" stroke="#E5E3DC" strokeWidth="0.6" strokeDasharray="4 8" opacity="0.35" />
        <circle cx={SUNEXT_INDEX.cx} cy={SUNEXT_INDEX.cy} r="165" stroke="#EBE9E2" strokeWidth="0.6" strokeDasharray="3 6" opacity="0.3" />

        {/* Sunext Core Ambient Halo */}
        <circle cx={SUNEXT_INDEX.cx} cy={SUNEXT_INDEX.cy} r="135" fill="url(#sunext-core-aura)" />

        {/* ==================================================================== */}
        {/* LEVEL 1 — DIRECT SPOKES TO SUNEXT INDEX: ALL MACRO DOMAINS RETURN HERE */}
        {/* ==================================================================== */}
        {DOMAINS.map((domain) => {
          const isDomainActive = domain.id === activeDomainId;

          return (
            <g key={`hub-spoke-${domain.id}`}>
              {/* Primary Spoke Line to Central Index */}
              <line
                x1={domain.cx}
                y1={domain.cy}
                x2={SUNEXT_INDEX.cx}
                y2={SUNEXT_INDEX.cy}
                stroke={isDomainActive ? 'url(#hub-spoke-active)' : '#E7E5DF'}
                strokeWidth={isDomainActive ? 2.2 : 0.9}
                strokeDasharray={isDomainActive ? 'none' : '4 6'}
                opacity={isDomainActive ? 1 : 0.65}
                className="transition-all duration-400"
              />

              {/* Inward Moving Convergence Pulse when Domain is Active */}
              {isDomainActive && (
                <circle r="4" fill="#F97316" filter="drop-shadow(0 0 6px #EA580C)">
                  <animate
                    attributeName="cx"
                    from={domain.cx}
                    to={SUNEXT_INDEX.cx}
                    dur="1.8s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    from={domain.cy}
                    to={SUNEXT_INDEX.cy}
                    dur="1.8s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* ==================================================================== */}
        {/* LEVEL 3 — CROSS-DOMAIN KNOWLEDGE MESH (Direct Semantic Peer Edges)   */}
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
                stroke={isEdgeActive ? 'url(#semantic-pulse-gradient)' : '#581C87'}
                strokeWidth={isEdgeActive ? 1.8 : 0.75}
                strokeDasharray={isEdgeActive ? 'none' : '3 5'}
                opacity={isEdgeActive ? 0.95 : isDimmed ? 0.12 : 0.22}
                className="transition-all duration-400"
              />

              {/* Traveling Pulse along Active Semantic Link */}
              {isEdgeActive && (
                <circle r="3.5" fill="#7000FF" filter="drop-shadow(0 0 5px #7000FF)">
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
        {/* LEVEL 2 — INTERNAL CLUSTER CAPABILITY SPOKES (Domain to Micro Dots)  */}
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
                  stroke={isClusterActive ? '#7000FF' : '#D1CECE'}
                  strokeWidth={isClusterActive ? 1.2 : 0.7}
                  strokeDasharray={isClusterActive ? 'none' : '2 3'}
                  opacity={isClusterActive ? 0.75 : 0.3}
                  className="transition-all duration-300"
                />
              ))}
            </g>
          );
        })}

        {/* ==================================================================== */}
        {/* LEVEL 2 — SUB-NODES: PURE DOTS (Clean Obsidian Aesthetics, NO clutters)*/}
        {/* ==================================================================== */}
        {DOMAINS.map((domain) => {
          const isClusterActive = activeDomainId === domain.id;
          const isDimmed = !connectedDomainIds.has(domain.id);

          return (
            <g key={`caps-${domain.id}`} opacity={isDimmed ? 0.2 : 1} className="transition-opacity duration-300">
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
                    r={isClusterActive ? 3.5 : 2.4}
                    fill={isClusterActive ? '#7000FF' : '#581C87'}
                    opacity={isClusterActive ? 0.95 : 0.45}
                    className="transition-all duration-300"
                  />
                </g>
              ))}
            </g>
          );
        })}

        {/* ==================================================================== */}
        {/* LEVEL 1 — DOMAIN MOC NODES (Clickable to Expert & Case Pages)       */}
        {/* ==================================================================== */}
        {DOMAINS.map((domain) => {
          const isClusterActive = activeDomainId === domain.id;
          const isConnectedToActive = connectedDomainIds.has(domain.id);
          const isDimmed = !isConnectedToActive;

          return (
            <Link key={`hub-${domain.id}`} href={domain.linkUrl}>
              <g
                onMouseEnter={() => setHoveredDomain(domain.id)}
                onMouseLeave={() => setHoveredDomain(null)}
                className="cursor-pointer group"
                opacity={isClusterActive ? 1 : isConnectedToActive ? 0.85 : isDimmed ? 0.2 : 0.7}
                style={{ transition: 'opacity 0.3s ease' }}
              >
                {/* Outer Pulsing Orbit Ring when active */}
                {isClusterActive && (
                  <circle
                    cx={domain.cx}
                    cy={domain.cy}
                    r="21"
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
                  stroke={isClusterActive ? '#7000FF' : '#D1CECE'}
                  strokeWidth={isClusterActive ? 2 : 1.2}
                  filter="drop-shadow(0 2px 8px rgba(0,0,0,0.06))"
                  className="transition-all duration-300 group-hover:stroke-[#7000FF]"
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
                  fill={isClusterActive ? '#0A0A0A' : '#4B5563'}
                  fontSize={isClusterActive ? 12 : 11}
                  fontFamily="system-ui, sans-serif"
                  fontWeight={isClusterActive ? 700 : 500}
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
        {/* LEVEL 0 — SUNEXT CENTRAL MOC INDEX (The Convergence Nucleus)        */}
        {/* ==================================================================== */}
        <Link href="/tu-duy-chuyen-doi-ai">
          <g transform={`translate(${SUNEXT_INDEX.cx}, ${SUNEXT_INDEX.cy})`} className="cursor-pointer group">
            {/* Outward Radiating Convergence Waves */}
            <circle cx="0" cy="0" r="46" fill="none" stroke="#F97316" strokeWidth="1.2" opacity="0.65">
              <animate attributeName="r" values="44;70;44" dur="2.4s" repeatCount="indefinite" />
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

            {/* Index Label Monogram */}
            <text
              x="0"
              y="56"
              textAnchor="middle"
              fill="#EA580C"
              fontSize="9"
              fontFamily="monospace"
              fontWeight="700"
              letterSpacing="0.16em"
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
