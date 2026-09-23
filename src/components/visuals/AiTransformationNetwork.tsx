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
// LAYER 0: SUNEXT CENTRAL INDEX NUCLEUS
// Positioned at optical center (shifted slightly down-right from 360, 360)
// Creates an organic, asymmetric editorial composition rather than a clock diagram
// ============================================================================
const SUNEXT_INDEX = {
  cx: 388,
  cy: 392,
};

// ============================================================================
// LAYER 1: 7 MACRO-DOMAINS
// Distributed via organic phyllotaxis angles relative to optical center
// Only these 7 names + SUNEXT are permanently labeled when idle
// ============================================================================
const DOMAINS: DomainCluster[] = [
  {
    id: 'banking',
    name: 'Banking & Finance',
    shortName: 'BANKING & FINANCE',
    subline: 'Risk · Credit · AML · Capital Markets',
    cx: 345,
    cy: 145,
    labelX: 345,
    labelY: 102,
    textAnchor: 'middle',
    linkUrl: '/doi-ngu#finance',
    capabilities: [
      { id: 'b1', name: 'Risk', x: 275, y: 115 },
      { id: 'b2', name: 'Credit', x: 330, y: 80 },
      { id: 'b3', name: 'AML', x: 395, y: 80 },
      { id: 'b4', name: 'Capital Markets', x: 440, y: 118 },
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    shortName: 'REAL ESTATE',
    subline: 'CRM · Valuation · Lead Ops · Project Mgmt',
    cx: 565,
    cy: 215,
    labelX: 565,
    labelY: 172,
    textAnchor: 'middle',
    linkUrl: '/nganh/bat-dong-san',
    capabilities: [
      { id: 're1', name: 'CRM Auto', x: 625, y: 165 },
      { id: 're2', name: 'Valuation', x: 655, y: 215 },
      { id: 're3', name: 'Lead 24/7', x: 635, y: 270 },
      { id: 're4', name: 'Field SOP', x: 590, y: 140 },
    ],
  },
  {
    id: 'sales',
    name: 'Sales & Growth',
    shortName: 'SALES & GROWTH',
    subline: 'Lead Pipeline · Deal Closing · Retention',
    cx: 580,
    cy: 450,
    labelX: 580,
    labelY: 505,
    textAnchor: 'middle',
    linkUrl: '/case-studies/vinhomes-ai-sales-enablement',
    capabilities: [
      { id: 's1', name: 'Pipeline AI', x: 650, y: 415 },
      { id: 's2', name: 'Chốt Cọc', x: 655, y: 475 },
      { id: 's3', name: 'Omnichannel', x: 625, y: 535 },
    ],
  },
  {
    id: 'governance',
    name: 'Strategy & Governance',
    shortName: 'STRATEGY & GOVERNANCE',
    subline: 'Zero-Leak · Policy Guard · Compliance · Sovereignty',
    cx: 415,
    cy: 625,
    labelX: 415,
    labelY: 680,
    textAnchor: 'middle',
    linkUrl: '/phap-ly-bao-mat',
    capabilities: [
      { id: 'g1', name: 'Zero-Leak', x: 485, y: 665 },
      { id: 'g2', name: 'Policy Guard', x: 415, y: 690 },
      { id: 'g3', name: 'Compliance', x: 345, y: 665 },
    ],
  },
  {
    id: 'tech',
    name: 'Technology & Data',
    shortName: 'TECHNOLOGY & DATA',
    subline: 'Vector DB · RAG Pipeline · ZDR · Private VPC',
    cx: 215,
    cy: 565,
    labelX: 215,
    labelY: 620,
    textAnchor: 'middle',
    linkUrl: '/tu-duy-chuyen-doi-ai',
    capabilities: [
      { id: 't1', name: 'Vector DB', x: 145, y: 595 },
      { id: 't2', name: 'RAG Pipeline', x: 180, y: 645 },
      { id: 't3', name: 'Private VPC', x: 250, y: 660 },
      { id: 't4', name: 'Data Bus', x: 135, y: 535 },
    ],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Operations',
    shortName: 'MANUFACTURING',
    subline: 'QA Vision · Lean SOP · Logistics · Predictive Maint',
    cx: 145,
    cy: 375,
    labelX: 145,
    labelY: 425,
    textAnchor: 'middle',
    linkUrl: '/case-studies/ai-auditor-manufacturing',
    capabilities: [
      { id: 'm1', name: 'QA Vision', x: 75, y: 335 },
      { id: 'm2', name: 'Lean SOP', x: 65, y: 395 },
      { id: 'm3', name: 'Logistics', x: 85, y: 450 },
      { id: 'm4', name: 'Predictive', x: 115, y: 305 },
    ],
  },
  {
    id: 'hr',
    name: 'HR & Learning',
    shortName: 'HR & LEARNING',
    subline: 'Knowledge Wiki · Onboarding · Talent Matrix',
    cx: 195,
    cy: 195,
    labelX: 195,
    labelY: 152,
    textAnchor: 'middle',
    linkUrl: '/doi-ngu#hr',
    capabilities: [
      { id: 'h1', name: 'Knowledge Wiki', x: 135, y: 145 },
      { id: 'h2', name: 'Onboarding AI', x: 95, y: 190 },
      { id: 'h3', name: 'Talent Matrix', x: 115, y: 245 },
      { id: 'h4', name: 'Co-worker', x: 165, y: 120 },
    ],
  },
];

// ============================================================================
// SEMANTIC CROSS-LINKS (Peer relationships across domains)
// DEFAULT: Nearly invisible (0-2% opacity) so graph never looks like a hairball
// REVEAL: Only 2-3 links flare up when connected domain is active/hovered
// ============================================================================
const OBSIDIAN_CROSS_LINKS: CrossLink[] = [
  // 1. Banking ↔ Governance (Risk & Compliance)
  { id: 'cl-bank-gov', sourceDomain: 'banking', targetDomain: 'governance', label: 'Risk & Compliance', x1: 345, y1: 145, x2: 415, y2: 625 },
  // 2. Real Estate ↔ Sales & Growth (CRM & Lead Bridge)
  { id: 'cl-re-sales', sourceDomain: 'real-estate', targetDomain: 'sales', label: 'Lead Bridge', x1: 565, y1: 215, x2: 580, y2: 450 },
  // 3. HR & Learning ↔ Tech (Enterprise RAG Wiki)
  { id: 'cl-hr-tech', sourceDomain: 'hr', targetDomain: 'tech', label: 'Enterprise RAG Wiki', x1: 195, y1: 195, x2: 215, y2: 565 },
  // 4. Manufacturing ↔ Tech (Data Telemetry & QA Vision)
  { id: 'cl-mfg-tech', sourceDomain: 'manufacturing', targetDomain: 'tech', label: 'Telemetry Stream', x1: 145, y1: 375, x2: 215, y2: 565 },
  // 5. Manufacturing ↔ Governance (Lean SOP & Safety Audit)
  { id: 'cl-mfg-gov', sourceDomain: 'manufacturing', targetDomain: 'governance', label: 'SOP Audit', x1: 145, y1: 375, x2: 415, y2: 625 },
  // 6. Banking ↔ Tech (Financial Data Bus & Private VPC)
  { id: 'cl-bank-tech', sourceDomain: 'banking', targetDomain: 'tech', label: 'Financial Data Bus', x1: 345, y1: 145, x2: 215, y2: 565 },
  // 7. Sales ↔ Tech (Conversion Telemetry)
  { id: 'cl-sales-tech', sourceDomain: 'sales', targetDomain: 'tech', label: 'Scoring Telemetry', x1: 580, y1: 450, x2: 215, y2: 565 },
  // 8. Real Estate ↔ Manufacturing (Site Quality Inspection)
  { id: 'cl-re-mfg', sourceDomain: 'real-estate', targetDomain: 'manufacturing', label: 'Site Inspection', x1: 565, y1: 215, x2: 145, y2: 375 },
];

// ============================================================================
// FIBONACCI PHYLLOTAXIS LATENT SEEDS
// Organic background density texture centered at optical center
// ============================================================================
function generatePhyllotaxisSeeds(): LatentSeed[] {
  const seeds: LatentSeed[] = [];
  const goldenAngle = 137.507764 * (Math.PI / 180);
  const totalSeeds = 68;

  for (let n = 1; n <= totalSeeds; n++) {
    const theta = n * goldenAngle;
    const r = 48 + 36 * Math.sqrt(n);
    if (r > 345) continue;

    const x = SUNEXT_INDEX.cx + r * Math.cos(theta);
    const y = SUNEXT_INDEX.cy + r * Math.sin(theta);

    const distToCenter = Math.hypot(x - SUNEXT_INDEX.cx, y - SUNEXT_INDEX.cy);
    if (distToCenter < 52) continue;

    const radius = Math.max(1.3, 3.2 - (distToCenter / 345) * 1.6);
    const opacity = Math.max(0.09, 0.28 - (distToCenter / 355) * 0.15);

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
  const [corePulseCount, setCorePulseCount] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const phyllotaxisSeeds = useMemo(() => generatePhyllotaxisSeeds(), []);

  // Organic cycle: exactly ONE cluster comes alive every 5.0 seconds
  useEffect(() => {
    if (hoveredDomain !== null) return;
    const interval = setInterval(() => {
      setActiveCycleIndex((prev) => (prev + 1) % DOMAINS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [hoveredDomain]);

  const activeDomainId = hoveredDomain || DOMAINS[activeCycleIndex]?.id;
  const activeCluster = DOMAINS.find((d) => d.id === activeDomainId) || DOMAINS[0];

  // Core confirmation pulse: pulses ONCE when active domain changes, then rests
  useEffect(() => {
    setCorePulseCount((prev) => prev + 1);
  }, [activeDomainId]);

  // Subtle ambient mouse drift (clamped to ±1.5px — quiet & stable)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const relY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMouseOffset({ x: relX * 1.5, y: relY * 1.5 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
    setHoveredDomain(null);
  };

  // Connected cross-links for the active domain (revealed only when cluster is active)
  const activeCrossLinks = useMemo(() => {
    return OBSIDIAN_CROSS_LINKS.filter(
      (cl) => cl.sourceDomain === activeDomainId || cl.targetDomain === activeDomainId
    );
  }, [activeDomainId]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[620px] sm:max-w-[700px] lg:max-w-[780px] xl:max-w-[840px] aspect-square flex items-center justify-center select-none font-sans overflow-visible ml-auto"
      aria-label="Sunext Collective Intelligence Graph — Art-Directed Knowledge Topology"
    >
      {/* Subtle Atmospheric Sun Glow centered at Sunext Optical Core */}
      <div
        className="absolute w-[600px] h-[600px] lg:w-[720px] lg:h-[720px] rounded-full pointer-events-none -z-10"
        style={{
          top: '50%',
          left: '50%',
          marginTop: '-300px',
          marginLeft: '-300px',
          background: 'radial-gradient(circle at 50% 50%, rgba(255,247,232,0.85) 0%, rgba(255,191,117,0.28) 28%, rgba(239,124,44,0.09) 52%, transparent 75%)',
          filter: 'blur(60px)',
        }}
      />

      <svg
        viewBox="0 0 720 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="w-full h-full block overflow-visible"
      >
        <defs>
          {/* Sunext Core Radial Gradient */}
          <radialGradient id="sunext-core-radial" cx="42%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#FFF7ED" />
            <stop offset="25%" stopColor="#FFBF75" />
            <stop offset="60%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </radialGradient>

          {/* Active Convergence Beam: Purple Domain -> Orange Core */}
          <linearGradient id="convergence-beam" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7000FF" stopOpacity="0.85" />
            <stop offset="65%" stopColor="#A855F7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#EA580C" stopOpacity="0.9" />
          </linearGradient>

          {/* Cross-Link Gradient */}
          <linearGradient id="cross-link-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#7000FF" stopOpacity="0.75" />
          </linearGradient>

          {/* Glow filter for convergence particle */}
          <filter id="purple-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ==================================================================== */}
        {/* 1. BACKGROUND PHYLLOTAXIS LATENT SEEDS (ORGANIC FIBONACCI TEXTURE)   */}
        {/* ==================================================================== */}
        {phyllotaxisSeeds.map((seed) => (
          <circle
            key={seed.id}
            cx={seed.x}
            cy={seed.y}
            r={seed.r}
            fill="#8B5CF6"
            opacity={seed.opacity * 0.7}
            className="transition-opacity duration-500"
          />
        ))}

        {/* ==================================================================== */}
        {/* 2. STRUCTURAL EDGES: MACRO-DOMAIN ───── SUNEXT (ALWAYS PRESENT)      */}
        {/* Hierarchy Level 1: 8–12% opacity when idle, vibrant when active      */}
        {/* Communicates: "All domains converge into Sunext" in 3 seconds        */}
        {/* ==================================================================== */}
        {DOMAINS.map((domain) => {
          const isDomainActive = domain.id === activeDomainId;

          return (
            <g key={`structural-${domain.id}`}>
              <line
                x1={domain.cx}
                y1={domain.cy}
                x2={SUNEXT_INDEX.cx}
                y2={SUNEXT_INDEX.cy}
                stroke={isDomainActive ? 'url(#convergence-beam)' : '#7000FF'}
                strokeWidth={isDomainActive ? 2.0 : 0.85}
                strokeDasharray={isDomainActive ? 'none' : '2 4'}
                opacity={isDomainActive ? 0.85 : 0.10}
                className="transition-all duration-500"
              />

              {/* Single smooth inward pulse: Domain -> Sunext */}
              {isDomainActive && (
                <circle r="3.5" fill="#7000FF" filter="url(#purple-glow)">
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
        {/* 3. SEMANTIC CROSS-LINKS (PEER SATELLITES)                            */}
        {/* DEFAULT: Invisible (0-1% opacity) to prevent "hairball" tangle       */}
        {/* REVEAL: Only 2–3 relevant lines appear when cluster is active        */}
        {/* ==================================================================== */}
        {OBSIDIAN_CROSS_LINKS.map((cl) => {
          const isLinkActive = activeCrossLinks.some((acl) => acl.id === cl.id);
          if (!isLinkActive) return null; // Kept invisible when idle per rule

          return (
            <g key={cl.id} className="animate-in fade-in duration-500">
              <line
                x1={cl.x1}
                y1={cl.y1}
                x2={cl.x2}
                y2={cl.y2}
                stroke="url(#cross-link-gradient)"
                strokeWidth={1.2}
                strokeDasharray="3 4"
                opacity={0.65}
              />
              {/* Subtle Traveling Spark on Active Cross-Link */}
              <circle r="2.2" fill="#A855F7">
                <animate
                  attributeName="cx"
                  from={cl.x1}
                  to={cl.x2}
                  dur="2.4s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  from={cl.y1}
                  to={cl.y2}
                  dur="2.4s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}

        {/* ==================================================================== */}
        {/* 4. LEAF NODES & CLUSTER EDGES                                        */}
        {/* Leaf nodes are quiet dots when idle (NO TEXT LABELS)                 */}
        {/* Progressive Disclosure: ONLY active cluster reveals micro-labels!    */}
        {/* ==================================================================== */}
        {DOMAINS.map((domain) => {
          const isClusterActive = activeDomainId === domain.id;

          return (
            <g key={`cluster-${domain.id}`}>
              {/* Feeder lines from leaves to macro domain hub */}
              {domain.capabilities.map((cap) => (
                <line
                  key={`leaf-edge-${domain.id}-${cap.id}`}
                  x1={domain.cx}
                  y1={domain.cy}
                  x2={cap.x}
                  y2={cap.y}
                  stroke={isClusterActive ? '#7000FF' : '#94A3B8'}
                  strokeWidth={isClusterActive ? 1.0 : 0.6}
                  strokeDasharray={isClusterActive ? 'none' : '2 3'}
                  opacity={isClusterActive ? 0.75 : 0.04}
                  className="transition-all duration-400"
                />
              ))}

              {/* Leaf Nodes */}
              {domain.capabilities.map((cap) => (
                <g key={`leaf-node-${domain.id}-${cap.id}`} transform={`translate(${cap.x}, ${cap.y})`}>
                  {/* Subtle outer halo on active */}
                  {isClusterActive && (
                    <circle
                      cx="0"
                      cy="0"
                      r="6.5"
                      fill="#FAF5FF"
                      stroke="#7000FF"
                      strokeWidth="0.8"
                      opacity="0.6"
                      className="animate-in zoom-in-75 duration-300"
                    />
                  )}
                  {/* Inner node dot */}
                  <circle
                    cx="0"
                    cy="0"
                    r={isClusterActive ? 3.2 : 2.0}
                    fill={isClusterActive ? '#7000FF' : '#A855F7'}
                    opacity={isClusterActive ? 0.95 : 0.35}
                    className="transition-all duration-300"
                  />

                  {/* PROGRESSIVE DISCLOSURE: Label ONLY appears when cluster is active! */}
                  {isClusterActive && (() => {
                    const dx = cap.x - domain.cx;
                    const dy = cap.y - domain.cy;
                    const dist = Math.hypot(dx, dy) || 1;
                    const normX = dx / dist;
                    const normY = dy / dist;
                    const labelOffsetX = Math.round(normX * 9);
                    const labelOffsetY = Math.round(normY * 9 + (normY > 0.3 ? 8 : normY < -0.3 ? -3 : 3));
                    const anchor = normX > 0.35 ? 'start' : normX < -0.35 ? 'end' : 'middle';

                    return (
                      <text
                        x={labelOffsetX}
                        y={labelOffsetY}
                        textAnchor={anchor}
                        fill="#0F172A"
                        fontSize="9"
                        fontFamily="system-ui, -apple-system, sans-serif"
                        fontWeight="600"
                        className="select-none pointer-events-none filter drop-shadow-[0_1px_3px_rgba(255,255,255,0.95)] animate-in fade-in duration-300"
                      >
                        {cap.name}
                      </text>
                    );
                  })()}
                </g>
              ))}
            </g>
          );
        })}

        {/* ==================================================================== */}
        {/* 5. 7 MACRO-DOMAIN HUBS (PERMANENTLY LABELED IN IDLE STATE)          */}
        {/* ==================================================================== */}
        {DOMAINS.map((domain) => {
          const isClusterActive = activeDomainId === domain.id;

          return (
            <Link key={`domain-hub-${domain.id}`} href={domain.linkUrl}>
              <g
                onMouseEnter={() => setHoveredDomain(domain.id)}
                onMouseLeave={() => setHoveredDomain(null)}
                className="cursor-pointer group"
                opacity={isClusterActive ? 1 : 0.82}
                style={{ transition: 'opacity 0.3s ease' }}
              >
                {/* Active Focus Halo */}
                {isClusterActive && (
                  <circle
                    cx={domain.cx}
                    cy={domain.cy}
                    r="20"
                    fill="none"
                    stroke="#7000FF"
                    strokeWidth="1.0"
                    strokeDasharray="3 4"
                    opacity="0.45"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from={`0 ${domain.cx} ${domain.cy}`}
                      to={`360 ${domain.cx} ${domain.cy}`}
                      dur="20s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}

                {/* Macro-Domain Disc */}
                <circle
                  cx={domain.cx}
                  cy={domain.cy}
                  r={isClusterActive ? 14 : 11}
                  fill="#FFFFFF"
                  stroke={isClusterActive ? '#7000FF' : '#94A3B8'}
                  strokeWidth={isClusterActive ? 2.4 : 1.5}
                  filter="drop-shadow(0 3px 8px rgba(0,0,0,0.08))"
                  className="transition-all duration-300 group-hover:stroke-[#7000FF]"
                />

                {/* Center Core Dot */}
                <circle
                  cx={domain.cx}
                  cy={domain.cy}
                  r={isClusterActive ? 5.5 : 4.0}
                  fill={isClusterActive ? '#7000FF' : '#581C87'}
                  className="transition-all duration-300"
                />

                {/* Macro-Domain Permanent Monospace Label */}
                <text
                  x={domain.labelX}
                  y={domain.labelY}
                  textAnchor={domain.textAnchor}
                  fill={isClusterActive ? '#0A0A0A' : '#1E293B'}
                  fontSize={isClusterActive ? 12 : 11}
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fontWeight={isClusterActive ? 750 : 650}
                  letterSpacing="0.05em"
                  className="transition-all duration-300 select-none filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.95)]"
                >
                  {domain.shortName}
                </text>

                {/* Subline: only visible when active */}
                {isClusterActive && (
                  <text
                    x={domain.labelX}
                    y={domain.labelY + 15}
                    textAnchor={domain.textAnchor}
                    fill="#7000FF"
                    fontSize="9.5"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="600"
                    letterSpacing="0.01em"
                    className="select-none animate-in fade-in duration-300 filter drop-shadow-[0_1px_3px_rgba(255,255,255,0.95)]"
                  >
                    {domain.subline}
                  </text>
                )}
              </g>
            </Link>
          );
        })}

        {/* ==================================================================== */}
        {/* 6. LEVEL 0: SUNEXT CENTRAL NUCLEUS AT OPTICAL CENTER                 */}
        {/* Gently breathes, pulses ONCE in orange upon cluster arrival          */}
        {/* ==================================================================== */}
        <Link href="/tu-duy-chuyen-doi-ai">
          <g transform={`translate(${SUNEXT_INDEX.cx}, ${SUNEXT_INDEX.cy})`} className="cursor-pointer group">
            {/* ONE SINGLE ORANGE PULSE RING ON CYCLE CHANGE */}
            <circle
              key={`pulse-${corePulseCount}`}
              cx="0"
              cy="0"
              r="38"
              fill="none"
              stroke="#EA580C"
              strokeWidth="2.0"
              opacity="0.8"
            >
              <animate attributeName="r" from="38" to="78" dur="1.4s" fill="freeze" repeatCount="1" />
              <animate attributeName="opacity" from="0.8" to="0" dur="1.4s" fill="freeze" repeatCount="1" />
            </circle>

            {/* Faint Resting Orbit Halo */}
            <circle cx="0" cy="0" r="54" fill="none" stroke="#F97316" strokeWidth="0.8" strokeDasharray="3 6" opacity="0.3">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="40s" repeatCount="indefinite" />
            </circle>

            {/* Core Sun Disc */}
            <circle
              cx="0"
              cy="0"
              r="38"
              fill="url(#sunext-core-radial)"
              filter="drop-shadow(0 6px 20px rgba(239,124,44,0.38))"
              className="transition-transform duration-500 group-hover:scale-105"
            />

            {/* Inner Ring */}
            <circle cx="0" cy="0" r="38" fill="none" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.85" />

            {/* Nucleus Core */}
            <circle cx="0" cy="0" r="11" fill="#FFFFFF" fillOpacity="0.25" stroke="#FFFFFF" strokeWidth="1" />
            <circle cx="0" cy="0" r="4.5" fill="#FFFFFF" />

            {/* Brand Monogram: SUNEXT */}
            <text
              x="0"
              y="52"
              textAnchor="middle"
              fill="#EA580C"
              fontSize="9"
              fontFamily="monospace"
              fontWeight="800"
              letterSpacing="0.18em"
              className="select-none filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.95)]"
            >
              SUNEXT
            </text>
            <text
              x="0"
              y="63"
              textAnchor="middle"
              fill="#9A3412"
              fontSize="6.5"
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

// Export aliases
export { AiTransformationNetwork as PhyllotaxisKnowledgeGraph };
export { AiTransformationNetwork as SunextCollectiveIntelligenceGraph };
export { AiTransformationNetwork as SunflowerKnowledgeGraph };
