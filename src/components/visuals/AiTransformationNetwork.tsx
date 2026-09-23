'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
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

interface CrossLink {
  id: string;
  sourceDomain: string;
  targetDomain: string;
  label: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

interface LatentSeed {
  id: string;
  x: number;
  y: number;
  r: number;
  opacity: number;
}

// ============================================================================
// LAYER 1: SUNEXT CENTRAL INDEX NUCLEUS (Geometric Center of Canvas)
// ============================================================================
const SUNEXT_INDEX = {
  cx: 360,
  cy: 360,
};

// ============================================================================
// LAYER 2: 8 DEEP DOMAINS ("PETAL ANCHORS")
// Distributed via Golden Ratio Phyllotaxis Geometry (Structural Stability)
// ============================================================================
const DOMAINS: DomainCluster[] = [
  {
    id: 'banking',
    name: 'Banking & Finance',
    shortName: 'Banking & Finance',
    subline: 'Risk · Credit · AML · Capital Markets',
    cx: 320,
    cy: 140,
    labelX: 320,
    labelY: 96,
    textAnchor: 'middle',
    linkUrl: '/doi-ngu#finance',
    capabilities: [
      { id: 'b1', name: 'Risk', x: 250, y: 110 },
      { id: 'b2', name: 'Credit', x: 300, y: 75 },
      { id: 'b3', name: 'AML', x: 365, y: 75 },
      { id: 'b4', name: 'Capital Markets', x: 415, y: 110 },
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    shortName: 'Real Estate',
    subline: 'CRM · Valuation · Lead Ops · Project Mgmt',
    cx: 535,
    cy: 205,
    labelX: 535,
    labelY: 165,
    textAnchor: 'middle',
    linkUrl: '/nganh/bat-dong-san',
    capabilities: [
      { id: 're1', name: 'CRM', x: 595, y: 155 },
      { id: 're2', name: 'Valuation', x: 635, y: 200 },
      { id: 're3', name: 'Lead Ops', x: 615, y: 255 },
      { id: 're4', name: 'Project Mgmt', x: 565, y: 130 },
    ],
  },
  {
    id: 'retail',
    name: 'Retail & Consumer',
    shortName: 'Retail & Consumer',
    subline: 'Omnichannel · Demand AI · POS Sync · Dynamic Pricing',
    cx: 585,
    cy: 365,
    labelX: 585,
    labelY: 415,
    textAnchor: 'middle',
    linkUrl: '/doi-ngu#marketing',
    capabilities: [
      { id: 'rc1', name: 'Omnichannel', x: 655, y: 325 },
      { id: 'rc2', name: 'Demand AI', x: 665, y: 385 },
      { id: 'rc3', name: 'POS Sync', x: 640, y: 440 },
      { id: 'rc4', name: 'Pricing', x: 615, y: 295 },
    ],
  },
  {
    id: 'sales',
    name: 'Sales & Growth',
    shortName: 'Sales & Growth',
    subline: 'Lead 24/7 · CRM Automation · Chốt Cọc · Pipeline AI',
    cx: 525,
    cy: 530,
    labelX: 525,
    labelY: 578,
    textAnchor: 'middle',
    linkUrl: '/case-studies/vinhomes-ai-sales-enablement',
    capabilities: [
      { id: 's1', name: 'Lead 24/7', x: 595, y: 565 },
      { id: 's2', name: 'CRM Auto', x: 555, y: 615 },
      { id: 's3', name: 'Chốt Cọc', x: 490, y: 635 },
      { id: 's4', name: 'Pipeline AI', x: 605, y: 505 },
    ],
  },
  {
    id: 'governance',
    name: 'Strategy & Governance',
    shortName: 'Strategy & Governance',
    subline: 'Zero-Leak · Policy Guard · Compliance · Sovereignty',
    cx: 360,
    cy: 595,
    labelX: 360,
    labelY: 645,
    textAnchor: 'middle',
    linkUrl: '/phap-ly-bao-mat',
    capabilities: [
      { id: 'g1', name: 'Zero-Leak', x: 425, y: 645 },
      { id: 'g2', name: 'Policy Guard', x: 360, y: 665 },
      { id: 'g3', name: 'Compliance', x: 295, y: 645 },
      { id: 'g4', name: 'Sovereignty', x: 255, y: 610 },
    ],
  },
  {
    id: 'tech',
    name: 'Technology & Data',
    shortName: 'Technology & Data',
    subline: 'Vector DB · RAG Pipeline · ZDR · Private VPC',
    cx: 195,
    cy: 530,
    labelX: 195,
    labelY: 578,
    textAnchor: 'middle',
    linkUrl: '/tu-duy-chuyen-doi-ai/nen-tang-cong-nghe',
    capabilities: [
      { id: 't1', name: 'Vector DB', x: 130, y: 565 },
      { id: 't2', name: 'RAG Pipeline', x: 165, y: 615 },
      { id: 't3', name: 'ZDR', x: 230, y: 635 },
      { id: 't4', name: 'Private VPC', x: 115, y: 505 },
    ],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Operations',
    shortName: 'Manufacturing & Ops',
    subline: 'QA Vision · Lean SOP · Chuỗi Cung Ứng · Predictive Maint',
    cx: 135,
    cy: 365,
    labelX: 135,
    labelY: 415,
    textAnchor: 'middle',
    linkUrl: '/case-studies/ai-auditor-manufacturing',
    capabilities: [
      { id: 'm1', name: 'QA Vision', x: 65, y: 325 },
      { id: 'm2', name: 'Lean SOP', x: 55, y: 385 },
      { id: 'm3', name: 'Logistics', x: 75, y: 440 },
      { id: 'm4', name: 'Predictive', x: 105, y: 295 },
    ],
  },
  {
    id: 'hr',
    name: 'HR & Learning',
    shortName: 'HR & Learning',
    subline: 'Knowledge/RAG · Onboarding AI · Talent · Policy Co-worker',
    cx: 185,
    cy: 205,
    labelX: 185,
    labelY: 165,
    textAnchor: 'middle',
    linkUrl: '/doi-ngu#hr',
    capabilities: [
      { id: 'h1', name: 'Knowledge/RAG', x: 125, y: 155 },
      { id: 'h2', name: 'Onboarding', x: 85, y: 200 },
      { id: 'h3', name: 'Talent AI', x: 105, y: 255 },
      { id: 'h4', name: 'Policy Co-worker', x: 155, y: 130 },
    ],
  },
];

// ============================================================================
// OBSIDIAN CROSS-LINKS (Secondary Peer Relationships Across Silos)
// Default opacity 3–6%, flares up when connected domain is active/hovered
// ============================================================================
const OBSIDIAN_CROSS_LINKS: CrossLink[] = [
  // 1. Banking ↔ Governance (Risk & Compliance)
  { id: 'cl-bank-gov', sourceDomain: 'banking', targetDomain: 'governance', label: 'Risk & Compliance', x1: 320, y1: 140, x2: 360, y2: 595 },
  // 2. Banking ↔ Tech (Data Bus & VPC)
  { id: 'cl-bank-tech', sourceDomain: 'banking', targetDomain: 'tech', label: 'Financial Data Bus', x1: 320, y1: 140, x2: 195, y2: 530 },
  // 3. Real Estate ↔ Sales & Growth (CRM & Lead Ops)
  { id: 'cl-re-sales', sourceDomain: 'real-estate', targetDomain: 'sales', label: 'CRM & Lead Ops', x1: 535, y1: 205, x2: 525, y2: 530 },
  // 4. HR & Learning ↔ Tech (Knowledge/RAG & Internal Wiki)
  { id: 'cl-hr-tech', sourceDomain: 'hr', targetDomain: 'tech', label: 'Enterprise RAG Wiki', x1: 185, y1: 205, x2: 195, y2: 530 },
  // 5. Manufacturing ↔ Governance (Lean SOP & Audit Guard)
  { id: 'cl-mfg-gov', sourceDomain: 'manufacturing', targetDomain: 'governance', label: 'Safety & SOP Audit', x1: 135, y1: 365, x2: 360, y2: 595 },
  // 6. Retail ↔ Sales & Growth (Omnichannel Pipeline)
  { id: 'cl-retail-sales', sourceDomain: 'retail', targetDomain: 'sales', label: 'Omni Conversion', x1: 585, y1: 365, x2: 525, y2: 530 },
  // 7. Manufacturing ↔ Real Estate (Project Inspection)
  { id: 'cl-mfg-re', sourceDomain: 'manufacturing', targetDomain: 'real-estate', label: 'Site Quality Inspection', x1: 135, y1: 365, x2: 535, y2: 205 },
  // 8. Banking ↔ HR (Financial Compliance Training)
  { id: 'cl-bank-hr', sourceDomain: 'banking', targetDomain: 'hr', label: 'Compliance Training', x1: 320, y1: 140, x2: 185, y2: 205 },
  // 9. Tech ↔ Sales (Telemetry & Data Enrichment)
  { id: 'cl-tech-sales', sourceDomain: 'tech', targetDomain: 'sales', label: 'Lead Scoring Telemetry', x1: 195, y1: 530, x2: 525, y2: 530 },
  // 10. Sub-node cross-chord: Risk ↔ Policy Guard
  { id: 'cl-sub-risk-policy', sourceDomain: 'banking', targetDomain: 'governance', label: 'Policy Alignment', x1: 250, y1: 110, x2: 360, y2: 665 },
  // 11. Sub-node cross-chord: RE CRM ↔ Sales Lead
  { id: 'cl-sub-crm-lead', sourceDomain: 'real-estate', targetDomain: 'sales', label: 'Lead Bridge', x1: 595, y1: 155, x2: 595, y2: 565 },
  // 12. Sub-node cross-chord: HR Knowledge ↔ Tech RAG
  { id: 'cl-sub-wiki-rag', sourceDomain: 'hr', targetDomain: 'tech', label: 'Neural Indexing', x1: 125, y1: 155, x2: 165, y2: 615 },
];

// ============================================================================
// MATHEMATICAL PHYLLOTAXIS LATENT SEED GENERATOR
// Inward density gradient: denser near Core (Sunext), sparser at periphery.
// ============================================================================
function generatePhyllotaxisSeeds(): LatentSeed[] {
  const seeds: LatentSeed[] = [];
  const goldenAngle = 137.507764 * (Math.PI / 180);
  const totalSeeds = 52;

  for (let n = 1; n <= totalSeeds; n++) {
    const theta = n * goldenAngle;
    // Radial distribution: denser towards core, expanding outwards
    const r = 48 + 36 * Math.sqrt(n);
    if (r > 300) continue;

    const x = SUNEXT_INDEX.cx + r * Math.cos(theta);
    const y = SUNEXT_INDEX.cy + r * Math.sin(theta);

    // Skip points too close to Sunext core disc (r < 52)
    const distToCenter = Math.hypot(x - SUNEXT_INDEX.cx, y - SUNEXT_INDEX.cy);
    if (distToCenter < 54) continue;

    // Node radius: larger closer to core (3px), smaller far away (1.4px)
    const radius = Math.max(1.3, 3.0 - (distToCenter / 300) * 1.6);
    // Opacity: slightly higher near core
    const opacity = Math.max(0.12, 0.32 - (distToCenter / 320) * 0.16);

    seeds.push({
      id: `phy-seed-${n}`,
      x: Math.round(x * 10) / 10,
      y: Math.round(y * 10) / 10,
      r: Math.round(radius * 10) / 10,
      opacity: Math.round(opacity * 100) / 100,
    });
  }

  return seeds;
}

export function AiTransformationNetwork() {
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);
  const [activeCycleIndex, setActiveCycleIndex] = useState<number>(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [pulseCoreReceived, setPulseCoreReceived] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Pre-generate mathematically stable phyllotaxis latent seed points
  const phyllotaxisSeeds = useMemo(() => generatePhyllotaxisSeeds(), []);

  // Controlled organic cycle: gently pulses one domain every 4.5s if not hovered
  useEffect(() => {
    if (hoveredDomain !== null) return;
    const interval = setInterval(() => {
      setActiveCycleIndex((prev) => (prev + 1) % DOMAINS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [hoveredDomain]);

  const activeDomainId = hoveredDomain || DOMAINS[activeCycleIndex]?.id;

  // Trigger core orange flash when active domain changes (energy convergence)
  useEffect(() => {
    setPulseCoreReceived(true);
    const timer = setTimeout(() => {
      setPulseCoreReceived(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, [activeDomainId]);

  // Subtle ambient mouse drift (clamped to ±2.5px — no dizzying movement)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const relY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMouseOffset({ x: relX * 2.5, y: relY * 2.5 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
    setHoveredDomain(null);
  };

  // Connected cross-links for the active domain
  const connectedCrossLinks = useMemo(() => {
    return new Set(
      OBSIDIAN_CROSS_LINKS.filter(
        (cl) => cl.sourceDomain === activeDomainId || cl.targetDomain === activeDomainId
      ).map((cl) => cl.id)
    );
  }, [activeDomainId]);

  // Connected peer domains
  const connectedDomainIds = useMemo(() => {
    const set = new Set<string>();
    set.add(activeDomainId);
    OBSIDIAN_CROSS_LINKS.forEach((cl) => {
      if (cl.sourceDomain === activeDomainId) set.add(cl.targetDomain);
      if (cl.targetDomain === activeDomainId) set.add(cl.sourceDomain);
    });
    return set;
  }, [activeDomainId]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[540px] sm:max-w-[600px] lg:max-w-[640px] xl:max-w-[700px] aspect-square flex items-center justify-center select-none font-sans overflow-visible ml-auto"
      aria-label="Sunext Collective Intelligence Graph — Sunflower Topology"
    >
      {/* Ambient Sun Atmospheric Glow centered at Sunext Core */}
      <div 
        className="absolute w-[560px] h-[560px] lg:w-[680px] lg:h-[680px] rounded-full pointer-events-none -z-10 animate-sun-halo"
        style={{
          top: '50%',
          left: '50%',
          marginTop: '-280px',
          marginLeft: '-280px',
          background: 'radial-gradient(circle at 50% 50%, rgba(255,247,232,0.85) 0%, rgba(255,191,117,0.32) 24%, rgba(239,124,44,0.12) 48%, rgba(112,0,255,0.03) 72%, transparent 88%)',
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
          <radialGradient id="sunext-core-radial" cx="42%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#FFF7ED" />
            <stop offset="22%" stopColor="#FFBF75" />
            <stop offset="55%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </radialGradient>

          {/* Active Convergence Highway Beam (Purple Domain -> Orange Sunext Core) */}
          <linearGradient id="convergence-highway-beam" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7000FF" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#A855F7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#EA580C" stopOpacity="0.95" />
          </linearGradient>

          {/* Obsidian Cross-Link Pulse Gradient */}
          <linearGradient id="obsidian-pulse-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#C084FC" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#7000FF" stopOpacity="0.8" />
          </linearGradient>

          {/* Core Ambient Aura */}
          <radialGradient id="sunext-core-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.32" />
            <stop offset="50%" stopColor="#FB923C" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#7000FF" stopOpacity="0" />
          </radialGradient>

          {/* Glow filter for traveling pulses */}
          <filter id="purple-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ==================================================================== */}
        {/* 1. BACKGROUND GEOMETRIC SEED MATRIX (PHYLLOTAXIS DENSITY GRADIENT)   */}
        {/* Organic Fibonacci Seed Texture — Inward Density Towards Core         */}
        {/* ==================================================================== */}
        {phyllotaxisSeeds.map((seed) => (
          <circle
            key={seed.id}
            cx={seed.x}
            cy={seed.y}
            r={seed.r}
            fill="#8B5CF6"
            opacity={seed.opacity * (activeDomainId ? 0.7 : 0.9)}
            className="transition-opacity duration-500"
          />
        ))}

        {/* Faint Concentric Fibonacci Mathematical Reference Rings */}
        <circle cx={SUNEXT_INDEX.cx} cy={SUNEXT_INDEX.cy} r="255" stroke="#E2E8F0" strokeWidth="0.6" strokeDasharray="3 6" opacity="0.45" />
        <circle cx={SUNEXT_INDEX.cx} cy={SUNEXT_INDEX.cy} r="165" stroke="#E2E8F0" strokeWidth="0.6" strokeDasharray="2 5" opacity="0.4" />
        <circle cx={SUNEXT_INDEX.cx} cy={SUNEXT_INDEX.cy} r="95" stroke="#CBD5E1" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.3" />

        {/* Sunext Core Ambient Halo */}
        <circle cx={SUNEXT_INDEX.cx} cy={SUNEXT_INDEX.cy} r="120" fill="url(#sunext-core-aura)" />

        {/* ==================================================================== */}
        {/* 2. OBSIDIAN CROSS-LINKS (Peer-to-Peer Horizontal / Diagonal Mesh)    */}
        {/* Default 3–6% opacity. Only relevant cross-links flare on active/hover*/}
        {/* ==================================================================== */}
        {OBSIDIAN_CROSS_LINKS.map((cl) => {
          const isLinkActive = connectedCrossLinks.has(cl.id);
          const isDimmed = activeDomainId !== null && !isLinkActive;

          return (
            <g key={cl.id}>
              <line
                x1={cl.x1}
                y1={cl.y1}
                x2={cl.x2}
                y2={cl.y2}
                stroke={isLinkActive ? 'url(#obsidian-pulse-gradient)' : '#94A3B8'}
                strokeWidth={isLinkActive ? 1.8 : 0.75}
                strokeDasharray={isLinkActive ? 'none' : '3 4'}
                opacity={isLinkActive ? 0.85 : isDimmed ? 0.03 : 0.055}
                className="transition-all duration-400"
              />

              {/* Traveling Pulse Along Active Obsidian Cross-Link */}
              {isLinkActive && (
                <circle r="3" fill="#A855F7" filter="url(#purple-glow)">
                  <animate
                    attributeName="cx"
                    from={cl.x1}
                    to={cl.x2}
                    dur="2.2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    from={cl.y1}
                    to={cl.y2}
                    dur="2.2s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* ==================================================================== */}
        {/* 3. CORE CONVERGENCE HIGHWAYS: ALL 8 DOMAINS CONNECT TO SUNEXT        */}
        {/* Default: 5–10% opacity. Active: 80–90% vibrant convergence highway   */}
        {/* "Mọi chuyên môn đều hội tụ về Sunext."                               */}
        {/* ==================================================================== */}
        {DOMAINS.map((domain) => {
          const isDomainActive = domain.id === activeDomainId;
          const isOtherDimmed = activeDomainId !== null && !isDomainActive;

          return (
            <g key={`highway-${domain.id}`}>
              {/* Spoke Line directly connecting domain into Sunext Core */}
              <line
                x1={domain.cx}
                y1={domain.cy}
                x2={SUNEXT_INDEX.cx}
                y2={SUNEXT_INDEX.cy}
                stroke={isDomainActive ? 'url(#convergence-highway-beam)' : '#7000FF'}
                strokeWidth={isDomainActive ? 2.5 : 1.0}
                strokeDasharray={isDomainActive ? 'none' : '3 4'}
                opacity={isDomainActive ? 0.88 : isOtherDimmed ? 0.035 : 0.08}
                className="transition-all duration-400"
              />

              {/* Inward Energy Stream: Purple light travels Domain -> Sunext Core */}
              {isDomainActive && (
                <circle r="4.5" fill="#7000FF" filter="url(#purple-glow)">
                  <animate
                    attributeName="cx"
                    from={domain.cx}
                    to={SUNEXT_INDEX.cx}
                    dur="1.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    from={domain.cy}
                    to={SUNEXT_INDEX.cy}
                    dur="1.6s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* ==================================================================== */}
        {/* 4. LAYER 3: EXPERTISE SEED NODES ("HẠT") & SUB-BRANCHES              */}
        {/* Radiate outward from parent macro-domain in local phyllotaxis arcs   */}
        {/* ==================================================================== */}
        {DOMAINS.map((domain) => {
          const isClusterActive = activeDomainId === domain.id;

          return (
            <g key={`cluster-${domain.id}`}>
              {/* Faint connective feeder links from sub-nodes into domain anchor */}
              {domain.capabilities.map((cap) => (
                <line
                  key={`cap-branch-${domain.id}-${cap.id}`}
                  x1={domain.cx}
                  y1={domain.cy}
                  x2={cap.x}
                  y2={cap.y}
                  stroke={isClusterActive ? '#7000FF' : '#94A3B8'}
                  strokeWidth={isClusterActive ? 1.4 : 0.75}
                  strokeDasharray={isClusterActive ? 'none' : '2 3'}
                  opacity={isClusterActive ? 0.85 : 0.22}
                  className="transition-all duration-300"
                />
              ))}

              {/* Expertise Seed Dots (Blooming on Active/Hover) */}
              {domain.capabilities.map((cap) => (
                <g key={`cap-node-${domain.id}-${cap.id}`} transform={`translate(${cap.x}, ${cap.y})`}>
                  {/* Subtle outer halo */}
                  <circle
                    cx="0"
                    cy="0"
                    r={isClusterActive ? 7.5 : 4.5}
                    fill={isClusterActive ? '#FAF5FF' : 'none'}
                    stroke="#7000FF"
                    strokeWidth="0.8"
                    opacity={isClusterActive ? 0.7 : 0.25}
                    className="transition-all duration-300"
                  />
                  {/* Inner seed dot */}
                  <circle
                    cx="0"
                    cy="0"
                    r={isClusterActive ? 3.8 : 2.2}
                    fill="#7000FF"
                    opacity={isClusterActive ? 0.95 : 0.45}
                    className="transition-all duration-300"
                  />
                  {/* Micro label displayed when cluster is active or hovered */}
                  {isClusterActive && (
                    <text
                      x="0"
                      y="15"
                      textAnchor="middle"
                      fill="#0F172A"
                      fontSize="9.5"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      fontWeight="600"
                      className="select-none pointer-events-none filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.95)]"
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
        {/* 5. LAYER 2: 8 MACRO-DOMAIN PETAL ANCHORS (Interactive Clickable Hubs) */}
        {/* ==================================================================== */}
        {DOMAINS.map((domain) => {
          const isClusterActive = activeDomainId === domain.id;
          const isConnectedToActive = connectedDomainIds.has(domain.id);

          return (
            <Link key={`domain-hub-${domain.id}`} href={domain.linkUrl}>
              <g
                onMouseEnter={() => setHoveredDomain(domain.id)}
                onMouseLeave={() => setHoveredDomain(null)}
                className="cursor-pointer group"
                opacity={isClusterActive ? 1 : isConnectedToActive ? 0.95 : 0.8}
                style={{ transition: 'opacity 0.3s ease' }}
              >
                {/* Active Focus Aura Ring */}
                {isClusterActive && (
                  <circle
                    cx={domain.cx}
                    cy={domain.cy}
                    r="22"
                    fill="none"
                    stroke="#7000FF"
                    strokeWidth="1.2"
                    strokeDasharray="3 5"
                    opacity="0.5"
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

                {/* Macro-Domain Disc */}
                <circle
                  cx={domain.cx}
                  cy={domain.cy}
                  r={isClusterActive ? 13 : 9.5}
                  fill="#FFFFFF"
                  stroke={isClusterActive ? '#7000FF' : '#CBD5E1'}
                  strokeWidth={isClusterActive ? 2.2 : 1.3}
                  filter="drop-shadow(0 2px 8px rgba(0,0,0,0.06))"
                  className="transition-all duration-300 group-hover:stroke-[#7000FF]"
                />

                {/* Macro-Domain Center Purple Core */}
                <circle
                  cx={domain.cx}
                  cy={domain.cy}
                  r={isClusterActive ? 5.2 : 3.6}
                  fill={isClusterActive ? '#7000FF' : '#6B21A8'}
                  className="transition-all duration-300"
                />

                {/* Macro-Domain Name */}
                <text
                  x={domain.labelX}
                  y={domain.labelY}
                  textAnchor={domain.textAnchor}
                  fill={isClusterActive ? '#0A0A0A' : '#1E293B'}
                  fontSize={isClusterActive ? 12 : 11.5}
                  fontFamily="system-ui, sans-serif"
                  fontWeight={isClusterActive ? 700 : 600}
                  letterSpacing="0.01em"
                  className="transition-all duration-300 select-none filter drop-shadow-[0_1px_5px_rgba(255,255,255,0.95)]"
                >
                  {domain.shortName}
                </text>

                {/* Capability Subline (Reveals on Active/Hover) */}
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
                    className="select-none animate-in fade-in duration-300 filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.95)]"
                  >
                    {domain.subline}
                  </text>
                )}
              </g>
            </Link>
          );
        })}

        {/* ==================================================================== */}
        {/* 6. LAYER 1: SUNEXT CENTRAL INDEX NUCLEUS                             */}
        {/* Core Orange, Convergence Target, Breathing Aura                      */}
        {/* ==================================================================== */}
        <Link href="/tu-duy-chuyen-doi-ai">
          <g transform={`translate(${SUNEXT_INDEX.cx}, ${SUNEXT_INDEX.cy})`} className="cursor-pointer group">
            {/* Outward Radiating Convergence Waves */}
            <circle cx="0" cy="0" r="48" fill="none" stroke="#F97316" strokeWidth="1.2" opacity="0.65">
              <animate attributeName="r" values="46;72;46" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.75;0;0.75" dur="2.4s" repeatCount="indefinite" />
            </circle>

            {/* Reactive Orange Flash Wave when energy arrives from domain */}
            {pulseCoreReceived && (
              <circle cx="0" cy="0" r="42" fill="none" stroke="#EA580C" strokeWidth="2.5" opacity="0.8">
                <animate attributeName="r" from="42" to="90" dur="1.2s" repeatCount="1" />
                <animate attributeName="opacity" from="0.9" to="0" dur="1.2s" repeatCount="1" />
              </circle>
            )}

            {/* Rotating Subtle Corona Ring */}
            <circle cx="0" cy="0" r="60" fill="none" stroke="#F97316" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.38">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="36s" repeatCount="indefinite" />
            </circle>

            {/* Core Sun Disc */}
            <circle
              cx="0"
              cy="0"
              r="40"
              fill="url(#sunext-core-radial)"
              filter="drop-shadow(0 6px 24px rgba(239,124,44,0.42))"
              className="transition-transform duration-500 group-hover:scale-105"
            />

            {/* Inner Precision Ring */}
            <circle cx="0" cy="0" r="40" fill="none" stroke="#FFFFFF" strokeWidth="1.4" strokeOpacity="0.85" />

            {/* Central Nucleus Dot */}
            <circle cx="0" cy="0" r="13" fill="#FFFFFF" fillOpacity="0.25" stroke="#FFFFFF" strokeWidth="1" />
            <circle cx="0" cy="0" r="5" fill="#FFFFFF" />

            {/* Brand Monogram: SUNEXT */}
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

// Export aliases for design documentation / client-facing terminology
export { AiTransformationNetwork as PhyllotaxisKnowledgeGraph };
export { AiTransformationNetwork as SunextCollectiveIntelligenceGraph };
export { AiTransformationNetwork as SunflowerKnowledgeGraph };
