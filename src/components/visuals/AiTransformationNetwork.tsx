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
  bezierPath: string;
}

// ============================================================================
// LAYER 0: SUNEXT CENTRAL INDEX NUCLEUS
// Positioned at optical center (430, 430) in 860x860 expanded viewBox (+28% scale)
// Radiant Orange Core with optical gravity, lens bloom & converging density
// ============================================================================
const SUNEXT_INDEX = {
  cx: 430,
  cy: 430,
};

// ============================================================================
// PHYLLOTAXIS / GOLDEN SPIRAL INNER KNOWLEDGE SEEDS (24 SEEDS, DENSE NEAR CORE)
// High relationship density near Sunext core — "Sunext là nơi các chuyên môn giao nhau"
// ============================================================================
const GOLDEN_ANGLE_RAD = 137.507764 * (Math.PI / 180);

interface InnerKnowledgeSeed {
  id: string;
  x: number;
  y: number;
  radius: number;
}

const INNER_KNOWLEDGE_SEEDS: InnerKnowledgeSeed[] = (() => {
  const seeds: InnerKnowledgeSeed[] = [];
  for (let i = 1; i <= 20; i++) {
    const r = 70 + i * 11;
    const a = i * GOLDEN_ANGLE_RAD;
    seeds.push({
      id: `seed-${i}`,
      x: +(SUNEXT_INDEX.cx + r * Math.cos(a)).toFixed(1),
      y: +(SUNEXT_INDEX.cy + r * Math.sin(a)).toFixed(1),
      radius: r,
    });
  }
  return seeds;
})();

// Spiral connection pairs between inner seeds - rich authentic Obsidian mesh
const INNER_SPIRAL_EDGES = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 12],
  [12, 13], [13, 14], [14, 15], [15, 16], [16, 17], [17, 18], [18, 19],
  [0, 3], [1, 4], [2, 5], [3, 6], [4, 7], [5, 8],
  [6, 9], [7, 10], [8, 11], [9, 12], [10, 13], [11, 14],
  [12, 15], [13, 16], [14, 17], [15, 18], [16, 19]
];

// Helper to calculate smooth Bézier curve bowing along sunflower spiral
function calculateSunflowerBezierPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  curvatureFactor = 0.18
): string {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  const vcx = mx - SUNEXT_INDEX.cx;
  const vcy = my - SUNEXT_INDEX.cy;
  const dot = nx * vcx + ny * vcy;
  const sign = dot >= 0 ? 1 : -1;
  const cpx = +(mx + nx * (len * curvatureFactor) * sign).toFixed(1);
  const cpy = +(my + ny * (len * curvatureFactor) * sign).toFixed(1);
  return `M ${x1} ${y1} Q ${cpx} ${cpy} ${x2} ${y2}`;
}

// ============================================================================
// LAYER 1: 7 MACRO-DOMAINS (EXPANDED TO CANVASES BORDERS)
// 7 macro-domain hubs permanently labeled when idle.
// Leaf nodes fan out towards edges, giving huge presence.
// ============================================================================
const DOMAINS: DomainCluster[] = [
  {
    id: 'banking',
    name: 'Tài Chính & Định Giá',
    shortName: 'TÀI CHÍNH',
    cx: 395,
    cy: 130,
    labelX: 395,
    labelY: 92,
    textAnchor: 'middle',
    linkUrl: '/doi-ngu#finance',
    capabilities: [
      { id: 'b1', name: 'Tín dụng', x: 395, y: 48 },
      { id: 'b2', name: 'Rủi ro', x: 310, y: 95 },
      { id: 'b3', name: 'AML / Fraud', x: 480, y: 95 },
    ],
  },
  {
    id: 'real-estate',
    name: 'Bất Động Sản',
    shortName: 'BẤT ĐỘNG SẢN',
    cx: 690,
    cy: 245,
    labelX: 690,
    labelY: 205,
    textAnchor: 'middle',
    linkUrl: '/nganh/bat-dong-san',
    capabilities: [
      { id: 're1', name: 'Định giá tự động', x: 775, y: 195 },
      { id: 're2', name: 'CRM BĐS', x: 785, y: 275 },
      { id: 're3', name: 'Pháp lý dự án', x: 720, y: 150 },
    ],
  },
  {
    id: 'sales',
    name: 'Tăng Trưởng & Bán Hàng',
    shortName: 'TĂNG TRƯỞNG',
    cx: 700,
    cy: 535,
    labelX: 700,
    labelY: 595,
    textAnchor: 'middle',
    linkUrl: '/case-studies/vinhomes-ai-sales-enablement',
    capabilities: [
      { id: 's1', name: 'Phễu đa kênh', x: 780, y: 485 },
      { id: 's2', name: 'Chốt cọc < 5p', x: 790, y: 565 },
      { id: 's3', name: 'AI SDR', x: 745, y: 625 },
    ],
  },
  {
    id: 'governance',
    name: 'Chiến Lược & Quản Trị',
    shortName: 'QUẢN TRỊ',
    cx: 470,
    cy: 735,
    labelX: 470,
    labelY: 795,
    textAnchor: 'middle',
    linkUrl: '/phap-ly-bao-mat',
    capabilities: [
      { id: 'g1', name: 'Chính sách AI', x: 550, y: 780 },
      { id: 'g2', name: 'Kiểm định HITL', x: 470, y: 818 },
      { id: 'g3', name: 'Chủ quyền số', x: 385, y: 780 },
    ],
  },
  {
    id: 'tech',
    name: 'Công Nghệ & Dữ Liệu',
    shortName: 'CÔNG NGHỆ',
    cx: 195,
    cy: 665,
    labelX: 195,
    labelY: 725,
    textAnchor: 'middle',
    linkUrl: '/tu-duy-chuyen-doi-ai',
    capabilities: [
      { id: 't1', name: 'Vector DB', x: 110, y: 700 },
      { id: 't2', name: 'RAG Pipeline', x: 150, y: 765 },
      { id: 't3', name: 'Private VPC', x: 235, y: 775 },
    ],
  },
  {
    id: 'manufacturing',
    name: 'Sản Xuất & Vận Hành',
    shortName: 'SẢN XUẤT',
    cx: 125,
    cy: 415,
    labelX: 125,
    labelY: 475,
    textAnchor: 'middle',
    linkUrl: '/case-studies/ai-auditor-manufacturing',
    capabilities: [
      { id: 'm1', name: 'QA Vision', x: 45, y: 370 },
      { id: 'm2', name: 'Lean SOP', x: 35, y: 440 },
      { id: 'm3', name: 'Supply Chain', x: 65, y: 510 },
    ],
  },
  {
    id: 'hr',
    name: 'Con Người & Tổ Chức',
    shortName: 'CON NGƯỜI',
    cx: 185,
    cy: 195,
    labelX: 185,
    labelY: 152,
    textAnchor: 'middle',
    linkUrl: '/doi-ngu#hr',
    capabilities: [
      { id: 'h1', name: 'Wiki tri thức', x: 105, y: 150 },
      { id: 'h2', name: 'Đào tạo 5 tầng', x: 65, y: 210 },
      { id: 'h3', name: 'Thực thi SOP', x: 100, y: 270 },
    ],
  },
];

const DOMAIN_MAP = new Map(DOMAINS.map((d) => [d.id, d]));

const RAW_CROSS_LINKS = [
  { id: 'cl-bank-re', sourceDomain: 'banking', targetDomain: 'real-estate', label: 'Tài chính & BĐS' },
  { id: 'cl-re-sales', sourceDomain: 'real-estate', targetDomain: 'sales', label: 'BĐS & Tăng trưởng' },
  { id: 'cl-sales-gov', sourceDomain: 'sales', targetDomain: 'governance', label: 'Tăng trưởng & Quản trị' },
  { id: 'cl-gov-tech', sourceDomain: 'governance', targetDomain: 'tech', label: 'Quản trị & Công nghệ' },
  { id: 'cl-tech-mfg', sourceDomain: 'tech', targetDomain: 'manufacturing', label: 'Công nghệ & Sản xuất' },
  { id: 'cl-mfg-hr', sourceDomain: 'manufacturing', targetDomain: 'hr', label: 'Sản xuất & Con người' },
  { id: 'cl-hr-bank', sourceDomain: 'hr', targetDomain: 'banking', label: 'Con người & Tài chính' },
  { id: 'cl-bank-tech', sourceDomain: 'banking', targetDomain: 'tech', label: 'Tài chính & Công nghệ' },
  { id: 'cl-sales-hr', sourceDomain: 'sales', targetDomain: 'hr', label: 'Tăng trưởng & Con người' },
  { id: 'cl-re-gov', sourceDomain: 'real-estate', targetDomain: 'governance', label: 'BĐS & Quản trị' },
];

const OBSIDIAN_CROSS_LINKS: CrossLink[] = RAW_CROSS_LINKS.map((item) => {
  const s = DOMAIN_MAP.get(item.sourceDomain)!;
  const t = DOMAIN_MAP.get(item.targetDomain)!;
  return {
    ...item,
    x1: s.cx,
    y1: s.cy,
    x2: t.cx,
    y2: t.cy,
    bezierPath: calculateSunflowerBezierPath(s.cx, s.cy, t.cx, t.cy, 0.16),
  };
});

export function AiTransformationNetwork() {
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);
  const [activeCycleIndex, setActiveCycleIndex] = useState<number>(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [corePulseCount, setCorePulseCount] = useState<number>(0);
  const [storyPhase, setStoryPhase] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // ==========================================================================
  // MINI-STORY TIMELINE (0s -> 7s):
  // 0s-0.6s: Canvas silent
  // 0.6s-1.8s: Core Sunext emerges with radiant lens bloom
  // 1.8s-3.2s: Network seeds & spokes sprout outwards
  // 3.2s-5.2s: Domain 'banking' auto-activates -> 3 leaves reveal -> pulse to core
  // 5.2s-7.0s: Entire network settles into sunflower equilibrium
  // 7.0s+: Interactive ambient cycling
  // ==========================================================================
  useEffect(() => {
    const t1 = setTimeout(() => setStoryPhase(1), 600);
    const t2 = setTimeout(() => setStoryPhase(2), 1800);
    const t3 = setTimeout(() => {
      setStoryPhase(3);
      setActiveCycleIndex(0); // Activate 'banking'
    }, 3200);
    const t4 = setTimeout(() => setStoryPhase(4), 5200);
    const t5 = setTimeout(() => setStoryPhase(5), 7000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  // Ambient organic cycle after initial mini-story settles
  useEffect(() => {
    if (storyPhase < 5 || hoveredDomain !== null) return;
    const interval = setInterval(() => {
      setActiveCycleIndex((prev) => (prev + 1) % DOMAINS.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [storyPhase, hoveredDomain]);

  // When user hovers, immediately skip to settled phase
  const handleDomainHover = (id: string | null) => {
    if (id !== null && storyPhase < 5) {
      setStoryPhase(5);
    }
    setHoveredDomain(id);
  };

  const activeDomainId =
    hoveredDomain || (storyPhase >= 3 ? DOMAINS[activeCycleIndex]?.id : null);

  // Core pulse trigger on domain change
  useEffect(() => {
    if (activeDomainId) {
      setCorePulseCount((prev) => prev + 1);
    }
  }, [activeDomainId]);

  // Gentle parallax drift (clamped to ±1.5px)
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

  const isNetworkVisible = storyPhase >= 2;
  const isCoreVisible = storyPhase >= 1;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[820px] lg:max-w-[940px] xl:max-w-[1040px] aspect-square flex items-center justify-center select-none font-sans overflow-visible ml-auto"
      aria-label="Sunext Sunflower Knowledge Topology — Visual Signature"
    >
      {/* 1. Warm Radiant Energy Atmosphere (Depth Zone Behind Graph) */}
      <div
        className="absolute w-[680px] h-[680px] lg:w-[820px] lg:h-[820px] rounded-full pointer-events-none -z-10 transition-opacity duration-1000"
        style={{
          top: '50%',
          left: '50%',
          marginTop: '-410px',
          marginLeft: '-410px',
          background:
            'radial-gradient(circle at 50% 50%, rgba(254,243,199,0.7) 0%, rgba(254,215,170,0.28) 25%, rgba(168,85,247,0.06) 55%, transparent 75%)',
          filter: 'blur(60px)',
          opacity: isCoreVisible ? 1 : 0,
        }}
      />

      <svg
        viewBox="0 0 860 860"
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
            <stop offset="60%" stopColor="#A855F7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#EA580C" stopOpacity="0.95" />
          </linearGradient>

          {/* Cross-Link Active Gradient */}
          <linearGradient id="cross-link-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7000FF" stopOpacity="0.8" />
          </linearGradient>

          {/* Core Lens/Bloom Drop Shadow */}
          <filter id="sunext-lens-bloom" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Outer Sun Halo Radial Gradient */}
          <radialGradient id="sunext-outer-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.22" />
            <stop offset="50%" stopColor="#EA580C" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#7000FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ==================================================================== */}
        {/* TIER 3: BÉZIER CROSS-LINKS ACROSS DOMAINS & LEAVES (WHOLE FIELD)     */}
        {/* Curved along sunflower spiral. Visible from start for knowledge field*/}
        {/* ==================================================================== */}
        {isNetworkVisible && (
          <g className="transition-opacity duration-700" style={{ opacity: isNetworkVisible ? 1 : 0 }}>
            {OBSIDIAN_CROSS_LINKS.map((cl) => {
              const isLinkConnected =
                cl.sourceDomain === activeDomainId || cl.targetDomain === activeDomainId;

              return (
                <g key={cl.id}>
                  <path
                    d={cl.bezierPath}
                    stroke={isLinkConnected ? 'url(#cross-link-gradient)' : '#A855F7'}
                    strokeWidth={isLinkConnected ? 1.5 : 0.75}
                    strokeDasharray={isLinkConnected ? '3 3' : '2 4'}
                    opacity={isLinkConnected ? 0.45 : 0.045}
                    fill="none"
                    className="transition-all duration-500"
                  />

                  {/* Traveling Spark on Active Cross-Link */}
                  {isLinkConnected && (
                    <circle r="2.4" fill="#C084FC">
                      <animateMotion
                        path={cl.bezierPath}
                        dur="2.6s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                </g>
              );
            })}
          </g>
        )}

        {/* ==================================================================== */}
        {/* INNER KNOWLEDGE MATRIX (24 GOLDEN SPIRAL SEEDS + GRAVITY TOWARDS CORE)*/}
        {/* Dense relationship mesh near Sunext. Brighter near core (+15%).       */}
        {/* ==================================================================== */}
        {isNetworkVisible && (
          <g className="transition-opacity duration-700" style={{ opacity: isNetworkVisible ? 1 : 0 }}>
            {/* Twin parastichy spiral edges between inner seeds */}
            {INNER_SPIRAL_EDGES.map(([fromIdx, toIdx], edgeIdx) => {
              const p1 = INNER_KNOWLEDGE_SEEDS[fromIdx];
              const p2 = INNER_KNOWLEDGE_SEEDS[toIdx];
              if (!p1 || !p2) return null;

              return (
                <line
                  key={`inner-edge-${edgeIdx}`}
                  x1={p1.x}
                  y1={p1.y}
                  x2={p2.x}
                  y2={p2.y}
                  stroke="#9333EA"
                  strokeWidth="0.6"
                  strokeDasharray="2 3"
                  opacity="0.06"
                />
              );
            })}

            {/* Inner seeds radial spokes to Sunext Core (Optical Gravity) */}
            {INNER_KNOWLEDGE_SEEDS.map((seed) => {
              // Higher brightness closer to core
              const distFromCenter = Math.hypot(seed.x - SUNEXT_INDEX.cx, seed.y - SUNEXT_INDEX.cy);
              const spokeOpacity = (0.16 * (1 - distFromCenter / 240)).toFixed(2);

              return (
                <line
                  key={`seed-radial-${seed.id}`}
                  x1={seed.x}
                  y1={seed.y}
                  x2={SUNEXT_INDEX.cx}
                  y2={SUNEXT_INDEX.cy}
                  stroke="#7000FF"
                  strokeWidth="0.6"
                  strokeDasharray="1.5 3"
                  opacity={spokeOpacity}
                />
              );
            })}

            {/* Inner Knowledge Dots (r=2, quiet, unlabeled) */}
            {INNER_KNOWLEDGE_SEEDS.map((seed) => (
              <circle
                key={`seed-dot-${seed.id}`}
                cx={seed.x}
                cy={seed.y}
                r="2.0"
                fill="#8B5CF6"
                opacity="0.32"
              />
            ))}
          </g>
        )}

        {/* ==================================================================== */}
        {/* TIER 1: STRUCTURAL RADIAL SPOKES: MACRO-DOMAIN ───── SUNEXT          */}
        {/* Convergence beams. Lines brighter near core. Active = laser beam.    */}
        {/* ==================================================================== */}
        {isNetworkVisible && (
          <g>
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
                    strokeWidth={isDomainActive ? 2.6 : 0.9}
                    strokeDasharray={isDomainActive ? 'none' : '2 3.5'}
                    opacity={isDomainActive ? 0.9 : 0.12}
                    className="transition-all duration-500"
                  />

                  {/* Smooth inward particle on active: Domain -> Sunext Core */}
                  {isDomainActive && (
                    <circle r="3.6" fill="#7000FF">
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
          </g>
        )}

        {/* ==================================================================== */}
        {/* TIER 2: LEAF NODES (OUTER EXPERTISE — REACHING CANVASES EDGES)        */}
        {/* Idle: Feeder lines at 6% opacity. Nodes at r=2.2 (NO LABELS).        */}
        {/* Active: Feeder lines at 60%. Exactly 3 leaf labels reveal outward.   */}
        {/* ==================================================================== */}
        {isNetworkVisible && (
          <g>
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
                      stroke={isClusterActive ? '#7000FF' : '#8B5CF6'}
                      strokeWidth={isClusterActive ? 1.4 : 0.7}
                      strokeDasharray={isClusterActive ? 'none' : '1.5 2.5'}
                      opacity={isClusterActive ? 0.65 : 0.07}
                      className="transition-all duration-400"
                    />
                  ))}

                  {/* Leaf Nodes */}
                  {domain.capabilities.map((cap) => (
                    <g key={`leaf-node-${domain.id}-${cap.id}`} transform={`translate(${cap.x}, ${cap.y})`}>
                      {/* Outer halo on active */}
                      {isClusterActive && (
                        <circle
                          cx="0"
                          cy="0"
                          r="7.0"
                          fill="#FAF5FF"
                          stroke="#7000FF"
                          strokeWidth="1.0"
                          opacity="0.75"
                          className="animate-in zoom-in-75 duration-300"
                        />
                      )}
                      {/* Inner node dot */}
                      <circle
                        cx="0"
                        cy="0"
                        r={isClusterActive ? 3.4 : 2.2}
                        fill={isClusterActive ? '#7000FF' : '#8B5CF6'}
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
                        const labelOffsetX = Math.round(normX * 12);
                        const labelOffsetY = Math.round(normY * 12 + (normY > 0.3 ? 7 : normY < -0.3 ? -3 : 3));
                        const anchor = normX > 0.35 ? 'start' : normX < -0.35 ? 'end' : 'middle';

                        return (
                          <text
                            x={labelOffsetX}
                            y={labelOffsetY}
                            textAnchor={anchor}
                            fill="#0F172A"
                            fontSize="10"
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
          </g>
        )}

        {/* ==================================================================== */}
        {/* 7 MACRO-DOMAIN HUBS (PERMANENTLY LABELED IN IDLE STATE)              */}
        {/* Exactly 7 domain labels + 1 SUNEXT core label visible in idle.       */}
        {/* ==================================================================== */}
        {isNetworkVisible && (
          <g>
            {DOMAINS.map((domain) => {
              const isClusterActive = activeDomainId === domain.id;

              return (
                <Link key={`domain-hub-${domain.id}`} href={domain.linkUrl}>
                  <g
                    onMouseEnter={() => handleDomainHover(domain.id)}
                    onMouseLeave={() => handleDomainHover(null)}
                    className="cursor-pointer group"
                    opacity={isClusterActive ? 1 : 0.92}
                    style={{ transition: 'opacity 0.3s ease' }}
                  >
                    {/* Active Focus Halo */}
                    {isClusterActive && (
                      <circle
                        cx={domain.cx}
                        cy={domain.cy}
                        r="24"
                        fill="none"
                        stroke="#7000FF"
                        strokeWidth="1.2"
                        strokeDasharray="3 4"
                        opacity="0.55"
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
                      r={isClusterActive ? 16 : 13}
                      fill="#FFFFFF"
                      stroke={isClusterActive ? '#7000FF' : '#94A3B8'}
                      strokeWidth={isClusterActive ? 2.6 : 1.6}
                      filter="drop-shadow(0 4px 10px rgba(0,0,0,0.08))"
                      className="transition-all duration-300 group-hover:stroke-[#7000FF]"
                    />

                    {/* Center Core Dot */}
                    <circle
                      cx={domain.cx}
                      cy={domain.cy}
                      r={isClusterActive ? 6.5 : 4.5}
                      fill={isClusterActive ? '#7000FF' : '#581C87'}
                      className="transition-all duration-300"
                    />

                    {/* Macro-Domain Monospace Permanent Label */}
                    <text
                      x={domain.labelX}
                      y={domain.labelY}
                      textAnchor={domain.textAnchor}
                      fill={isClusterActive ? '#0A0A0A' : '#1E293B'}
                      fontSize={isClusterActive ? 13 : 11.5}
                      fontFamily="system-ui, -apple-system, sans-serif"
                      fontWeight={isClusterActive ? 800 : 700}
                      letterSpacing="0.06em"
                      className="transition-all duration-300 select-none filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.95)]"
                    >
                      {domain.shortName}
                    </text>
                  </g>
                </Link>
              );
            })}
          </g>
        )}

        {/* ==================================================================== */}
        {/* LEVEL 0: SUNEXT CENTRAL NUCLEUS AT OPTICAL GRAVITY CENTER            */}
        {/* Core scaled (r=50), bold "SUNEXT" only. Radiant orange convergence.  */}
        {/* ==================================================================== */}
        <Link href="/tu-duy-chuyen-doi-ai">
          <g
            transform={`translate(${SUNEXT_INDEX.cx}, ${SUNEXT_INDEX.cy})`}
            className="cursor-pointer group"
          >
            <g
              transform={`scale(${isCoreVisible ? 1 : 0.85})`}
              className="transition-all duration-700"
              style={{ opacity: isCoreVisible ? 1 : 0 }}
            >
              {/* MULTI-LAYERED OPTICAL GRAVITY BLOOM */}
              {/* Outer Soft Amber Halo: r=140 */}
              <circle
                cx="0"
                cy="0"
                r="140"
                fill="url(#sunext-outer-halo)"
                opacity="0.8"
              />

              {/* Resting Mid Halo: r=95 */}
              <circle
                cx="0"
                cy="0"
                r="95"
                fill="none"
                stroke="#F97316"
                strokeWidth="0.8"
                strokeDasharray="4 8"
                opacity="0.3"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0"
                  to="360"
                  dur="60s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Inner Resting Orbit: r=72 */}
              <circle
                cx="0"
                cy="0"
                r="72"
                fill="none"
                stroke="#EA580C"
                strokeWidth="1.0"
                strokeDasharray="3 5"
                opacity="0.4"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="360"
                  to="0"
                  dur="40s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* PULSE WAVE ON CYCLE CHANGE */}
              <circle
                key={`pulse-${corePulseCount}`}
                cx="0"
                cy="0"
                r="50"
                fill="none"
                stroke="#EA580C"
                strokeWidth="2.2"
                opacity="0.85"
              >
                <animate attributeName="r" from="50" to="110" dur="1.5s" fill="freeze" repeatCount="1" />
                <animate attributeName="opacity" from="0.85" to="0" dur="1.5s" fill="freeze" repeatCount="1" />
              </circle>

              {/* Core Sun Disc: r=50 (Optical Gravity Anchor) */}
              <circle
                cx="0"
                cy="0"
                r="50"
                fill="url(#sunext-core-radial)"
                filter="url(#sunext-lens-bloom)"
                className="transition-transform duration-500 group-hover:scale-105"
              />

              {/* Inner White Rim */}
              <circle cx="0" cy="0" r="50" fill="none" stroke="#FFFFFF" strokeWidth="1.4" strokeOpacity="0.9" />

              {/* Nucleus Inner Structure */}
              <circle cx="0" cy="0" r="14" fill="#FFFFFF" fillOpacity="0.25" stroke="#FFFFFF" strokeWidth="1.2" />
              <circle cx="0" cy="0" r="6" fill="#FFFFFF" />

              {/* Brand Monogram: SUNEXT ONLY (Authoritative Typography) */}
              <text
                x="0"
                y="68"
                textAnchor="middle"
                fill="#EA580C"
                fontSize="11"
                fontFamily="monospace"
                fontWeight="800"
                letterSpacing="0.22em"
                className="select-none filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.95)]"
              >
                SUNEXT
              </text>
            </g>
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
