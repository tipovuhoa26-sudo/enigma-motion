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

// 9 Strategic Nodes: 8 Macro Industry Domains + 1 Governance/Risk Policy Spine
const DOMAINS: DomainCluster[] = [
  {
    id: 'banking',
    name: 'Banking & Finance',
    shortName: 'Banking & Finance',
    subline: 'Credit · Risk · AML · Retail · Document AI',
    cx: 175,
    cy: 135,
    labelX: 205,
    labelY: 120,
    textAnchor: 'start',
    capabilities: [
      { id: 'b1', name: 'Credit', x: 105, y: 95 },
      { id: 'b2', name: 'Risk', x: 155, y: 70 },
      { id: 'b3', name: 'AML', x: 95, y: 165 },
    ],
  },
  {
    id: 'governance',
    name: 'Governance & Risk',
    shortName: 'Governance & Risk',
    subline: 'Zero-Leak · Tuân thủ · Policy Guard',
    cx: 360,
    cy: 90,
    labelX: 360,
    labelY: 52,
    textAnchor: 'middle',
    capabilities: [
      { id: 'g1', name: 'Zero-Leak', x: 285, y: 45 },
      { id: 'g2', name: 'Tuân thủ', x: 435, y: 45 },
    ],
  },
  {
    id: 'tech',
    name: 'Technology & Data',
    shortName: 'Technology & Data',
    subline: 'Data Bus · Private VPC · Agentic RAG',
    cx: 545,
    cy: 135,
    labelX: 515,
    labelY: 120,
    textAnchor: 'end',
    capabilities: [
      { id: 't1', name: 'VPC', x: 615, y: 95 },
      { id: 't2', name: 'Bus', x: 635, y: 155 },
      { id: 't3', name: 'RAG', x: 575, y: 75 },
    ],
  },
  {
    id: 'hr',
    name: 'HR & Learning',
    shortName: 'HR & Learning',
    subline: 'L&D Co-worker · Wiki nội bộ · Talent AI',
    cx: 105,
    cy: 275,
    labelX: 135,
    labelY: 265,
    textAnchor: 'start',
    capabilities: [
      { id: 'h1', name: 'L&D', x: 45, y: 235 },
      { id: 'h2', name: 'Wiki', x: 40, y: 310 },
      { id: 'h3', name: 'Talent', x: 65, y: 365 },
    ],
  },
  {
    id: 'operations',
    name: 'Operations & SOP',
    shortName: 'Operations & SOP',
    subline: 'SOP Chuẩn hóa · Tự động hóa · QA Workflow',
    cx: 285,
    cy: 315,
    labelX: 315,
    labelY: 305,
    textAnchor: 'start',
    capabilities: [
      { id: 'o1', name: 'SOP', x: 235, y: 375 },
      { id: 'o2', name: 'QA', x: 345, y: 365 },
    ],
  },
  {
    id: 'retail',
    name: 'Retail & Consumer',
    shortName: 'Retail & Consumer',
    subline: 'Omnichannel · Demand AI · POS Sync',
    cx: 620,
    cy: 265,
    labelX: 595,
    labelY: 250,
    textAnchor: 'end',
    capabilities: [
      { id: 'rc1', name: 'POS', x: 675, y: 230 },
      { id: 'rc2', name: 'Demand', x: 680, y: 310 },
    ],
  },
  {
    id: 'sales',
    name: 'Sales & Growth',
    shortName: 'Sales & Growth',
    subline: 'Lead 24/7 · CRM Automation · Chốt cọc',
    cx: 585,
    cy: 395,
    labelX: 555,
    labelY: 385,
    textAnchor: 'end',
    capabilities: [
      { id: 's1', name: 'Lead', x: 650, y: 415 },
      { id: 's2', name: 'CRM', x: 625, y: 470 },
    ],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Supply Chain',
    shortName: 'Manufacturing & Supply Chain',
    subline: 'QA Vision · Chuỗi cung ứng · Lean SOP',
    cx: 160,
    cy: 475,
    labelX: 160,
    labelY: 425,
    textAnchor: 'middle',
    capabilities: [
      { id: 'm1', name: 'Vision', x: 95, y: 460 },
      { id: 'm2', name: 'QA', x: 105, y: 535 },
      { id: 'm3', name: 'Logistics', x: 185, y: 555 },
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    shortName: 'Real Estate',
    subline: 'Môi giới · Dự án · Thẩm định giá · CRM',
    cx: 515,
    cy: 515,
    labelX: 515,
    labelY: 465,
    textAnchor: 'middle',
    capabilities: [
      { id: 're1', name: 'Brokerage', x: 575, y: 565 },
      { id: 're2', name: 'Valuation', x: 605, y: 515 },
      { id: 're3', name: 'Project', x: 525, y: 590 },
    ],
  },
];

// Sunext Orchestrator Coordinates (Foundation & Platform Resonator)
const SUNEXT_ORCHESTRATOR = {
  cx: 360,
  cy: 545,
};

// Cross-Domain Semantic Mesh Edges (Natural Inter-Domain Knowledge Flow)
const SEMANTIC_EDGES: SemanticEdge[] = [
  // 1. Banking ↔ Governance (Risk & Compliance)
  { id: 'e-bank-gov', source: 'banking', target: 'governance', bridgeLabel: 'Risk & Compliance', x1: 175, y1: 135, x2: 360, y2: 90 },
  // 2. Governance ↔ Technology (Data Isolation & Policy Guard)
  { id: 'e-gov-tech', source: 'governance', target: 'tech', bridgeLabel: 'Policy Guard', x1: 360, y1: 90, x2: 545, y2: 135 },
  // 3. Banking ↔ Operations (Document AI & Auto Underwriting)
  { id: 'e-bank-ops', source: 'banking', target: 'operations', bridgeLabel: 'Document AI', x1: 175, y1: 135, x2: 285, y2: 315 },
  // 4. Banking ↔ Technology (Private VPC & Enterprise RAG)
  { id: 'e-bank-tech', source: 'banking', target: 'tech', bridgeLabel: 'Private VPC', x1: 175, y1: 135, x2: 545, y2: 135 },
  // 5. HR ↔ Operations (SOP Training & AI Co-worker)
  { id: 'e-hr-ops', source: 'hr', target: 'operations', bridgeLabel: 'AI Co-worker', x1: 105, y1: 275, x2: 285, y2: 315 },
  // 6. HR ↔ Technology (Internal Knowledge Base RAG)
  { id: 'e-hr-tech', source: 'hr', target: 'tech', bridgeLabel: 'Internal Wiki RAG', x1: 105, y1: 275, x2: 545, y2: 135 },
  // 7. Operations ↔ Manufacturing (QA Computer Vision & Lean Process)
  { id: 'e-ops-mfg', source: 'operations', target: 'manufacturing', bridgeLabel: 'QA Vision', x1: 285, y1: 315, x2: 160, y2: 475 },
  // 8. Operations ↔ Retail (Order Processing & Real-time Inventory)
  { id: 'e-ops-retail', source: 'operations', target: 'retail', bridgeLabel: 'Order Sync', x1: 285, y1: 315, x2: 620, y2: 265 },
  // 9. Retail ↔ Sales (Omnichannel & Lead Journey)
  { id: 'e-retail-sales', source: 'retail', target: 'sales', bridgeLabel: 'Omnichannel Lead', x1: 620, y1: 265, x2: 585, y2: 395 },
  // 10. Technology ↔ Retail (Real-time POS Data Bus)
  { id: 'e-tech-retail', source: 'tech', target: 'retail', bridgeLabel: 'POS Data Bus', x1: 545, y1: 135, x2: 620, y2: 265 },
  // 11. Real Estate ↔ Sales (CRM & 24/7 Lead Response)
  { id: 'e-re-sales', source: 'real-estate', target: 'sales', bridgeLabel: 'Lead Engine 24/7', x1: 515, y1: 515, x2: 585, y2: 395 },
  // 12. Real Estate ↔ Operations (Deposit Contract Workflow & Valuation)
  { id: 'e-re-ops', source: 'real-estate', target: 'operations', bridgeLabel: 'Contract Workflow', x1: 515, y1: 515, x2: 285, y2: 315 },

  // Sunext Orchestrator Foundation Spines (Platform Foundation)
  { id: 'e-ops-sunext', source: 'operations', target: 'sunext', bridgeLabel: 'Quy trình trước công cụ', x1: 285, y1: 315, x2: SUNEXT_ORCHESTRATOR.cx, y2: SUNEXT_ORCHESTRATOR.cy },
  { id: 'e-mfg-sunext', source: 'manufacturing', target: 'sunext', bridgeLabel: 'Lean Delivery', x1: 160, y1: 475, x2: SUNEXT_ORCHESTRATOR.cx, y2: SUNEXT_ORCHESTRATOR.cy },
  { id: 'e-re-sunext', source: 'real-estate', target: 'sunext', bridgeLabel: 'Operational ROI', x1: 515, y1: 515, x2: SUNEXT_ORCHESTRATOR.cx, y2: SUNEXT_ORCHESTRATOR.cy },
  { id: 'e-gov-sunext', source: 'governance', target: 'sunext', bridgeLabel: '4 Chốt an toàn', x1: 360, y1: 90, x2: SUNEXT_ORCHESTRATOR.cx, y2: SUNEXT_ORCHESTRATOR.cy },
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
      {/* Ambient Atmospheric Cloud Glow (Orchestrator Field) */}
      <div 
        className="absolute w-[560px] h-[560px] lg:w-[680px] lg:h-[680px] rounded-full pointer-events-none -z-10 animate-sun-halo"
        style={{
          background: 'radial-gradient(circle at 50% 70%, rgba(255,247,232,0.7) 0%, rgba(255,191,117,0.3) 25%, rgba(239,124,44,0.12) 48%, rgba(105,64,190,0.03) 70%, transparent 85%)',
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
          {/* Sunext Core Radial Gradient */}
          <radialGradient id="sunext-orchestrator-gradient" cx="42%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#FFF7ED" />
            <stop offset="22%" stopColor="#FFBF75" />
            <stop offset="55%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </radialGradient>

          {/* Active Semantic Edge Inward Pulse Stream */}
          <linearGradient id="semantic-pulse-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#581C87" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#7000FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
          </linearGradient>

          {/* Core Ambient Aura */}
          <radialGradient id="sunext-core-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.28" />
            <stop offset="60%" stopColor="#FB923C" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#581C87" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Subtle Background Constellation Web (Obsidian-Style Organic Matrix) */}
        <circle cx="360" cy="340" r="260" stroke="#E5E3DC" strokeWidth="0.6" strokeDasharray="4 8" opacity="0.4" />
        <circle cx="360" cy="340" r="160" stroke="#EBE9E2" strokeWidth="0.6" strokeDasharray="3 6" opacity="0.35" />

        {/* Sunext Core Ambient Halo */}
        <circle cx={SUNEXT_ORCHESTRATOR.cx} cy={SUNEXT_ORCHESTRATOR.cy} r="130" fill="url(#sunext-core-aura)" />

        {/* 2. Semantic Cross-Domain Knowledge Mesh (Direct Inter-Domain Edges) */}
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
                strokeWidth={isEdgeActive ? 1.8 : 0.8}
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

        {/* 3. Internal Cluster Capability Links (Hub to Sub-Nodes) */}
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

        {/* 4. Sub-Nodes: ONLY Dots, NO text labels! (Obsidian Clean Knowledge Style) */}
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
                      r="6"
                      fill="none"
                      stroke="#7000FF"
                      strokeWidth="0.8"
                      opacity="0.4"
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

        {/* 5. Domain Hub Nodes (Interactive Anchor Points) */}
        {DOMAINS.map((domain) => {
          const isClusterActive = activeDomainId === domain.id;
          const isConnectedToActive = connectedDomainIds.has(domain.id);
          const isDimmed = !isConnectedToActive;

          return (
            <g
              key={`hub-${domain.id}`}
              onMouseEnter={() => setHoveredDomain(domain.id)}
              onMouseLeave={() => setHoveredDomain(null)}
              className="cursor-pointer"
              opacity={isClusterActive ? 1 : isConnectedToActive ? 0.85 : isDimmed ? 0.2 : 0.7}
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
                  opacity="0.4"
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
                fill={isClusterActive ? '#111111' : '#4B5563'}
                fontSize={isClusterActive ? 12 : 11}
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

        {/* 6. Sunext Orchestrator Foundation (Platform Nucleus & Collective Intelligence Resonator) */}
        <g transform={`translate(${SUNEXT_ORCHESTRATOR.cx}, ${SUNEXT_ORCHESTRATOR.cy})`} className="cursor-pointer">
          {/* Outward Radiating Result Pulse Wave */}
          <circle cx="0" cy="0" r="48" fill="none" stroke="#F97316" strokeWidth="1.2" opacity="0.65">
            <animate attributeName="r" values="46;72;46" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.75;0;0.75" dur="2.4s" repeatCount="indefinite" />
          </circle>

          {/* Rotating Corona Orbits */}
          <circle cx="0" cy="0" r="62" fill="none" stroke="#F97316" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.35">
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="36s" repeatCount="indefinite" />
          </circle>

          {/* Sun Core Disc */}
          <circle
            cx="0"
            cy="0"
            r="42"
            fill="url(#sunext-orchestrator-gradient)"
            filter="drop-shadow(0 6px 24px rgba(239,124,44,0.4))"
            className="transition-transform duration-500 hover:scale-105"
          />

          {/* Inner Highlight Border */}
          <circle cx="0" cy="0" r="42" fill="none" stroke="#FFFFFF" strokeWidth="1.4" strokeOpacity="0.85" />

          {/* Central Nucleus */}
          <circle cx="0" cy="0" r="14" fill="#FFFFFF" fillOpacity="0.25" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="0" cy="0" r="5.5" fill="#FFFFFF" />

          {/* Brand Monogram / Orchestrator Badge */}
          <text
            x="0"
            y="58"
            textAnchor="middle"
            fill="#EA580C"
            fontSize="9.5"
            fontFamily="monospace"
            fontWeight="700"
            letterSpacing="0.14em"
            className="select-none filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.95)]"
          >
            SUNEXT ORCHESTRATOR
          </text>
        </g>
      </svg>
    </div>
  );
}


