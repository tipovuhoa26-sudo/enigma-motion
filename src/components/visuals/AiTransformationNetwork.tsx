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
// Positioned at optical center (388, 392) in 720x720 viewBox
// Core scaled (r=44) with bold "SUNEXT" typography. Orange = convergence/result.
// ============================================================================
const SUNEXT_INDEX = {
  cx: 388,
  cy: 392,
};

// ============================================================================
// PHYLLOTAXIS / GOLDEN SPIRAL INNER KNOWLEDGE SEEDS (DÀY Ở GẦN SUNEXT)
// 14 seeds following the golden angle (137.508°), r in [74, 150]
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
  for (let i = 1; i <= 14; i++) {
    const r = 68 + i * 5.8;
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

// Spiral connection pairs between inner seeds to form twin parastichy arcs
const INNER_SPIRAL_EDGES = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7],
  [7, 8], [8, 9], [9, 10], [10, 11], [11, 12], [12, 13],
  [0, 3], [1, 4], [2, 5], [3, 6], [4, 7], [5, 8], [6, 9], [7, 10], [8, 11],
];

// Helper to calculate smooth Bézier curve bowing along sunflower spiral
function calculateSunflowerBezierPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  curvatureFactor = 0.16
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
// LAYER 1: 7 MACRO-DOMAINS (MID-EXPERTISE HUBS — PHYLLOTAXIS DISTRIBUTION)
// Exactly 7 macro-domain hubs permanently labeled when idle.
// Each domain has at most 3 leaves. Leaf labels ONLY reveal upon active/hover.
// ============================================================================
const DOMAINS: DomainCluster[] = [
  {
    id: 'banking',
    name: 'Tài Chính & Định Giá',
    shortName: 'TÀI CHÍNH',
    cx: 345,
    cy: 155,
    labelX: 345,
    labelY: 118,
    textAnchor: 'middle',
    linkUrl: '/doi-ngu#finance',
    capabilities: [
      { id: 'b1', name: 'Tín dụng', x: 345, y: 80 },
      { id: 'b2', name: 'Rủi ro', x: 275, y: 125 },
      { id: 'b3', name: 'AML', x: 415, y: 125 },
    ],
  },
  {
    id: 'real-estate',
    name: 'Bất Động Sản',
    shortName: 'BẤT ĐỘNG SẢN',
    cx: 580,
    cy: 235,
    labelX: 580,
    labelY: 198,
    textAnchor: 'middle',
    linkUrl: '/nganh/bat-dong-san',
    capabilities: [
      { id: 're1', name: 'Định giá', x: 648, y: 195 },
      { id: 're2', name: 'CRM BĐS', x: 658, y: 255 },
      { id: 're3', name: 'Pháp lý', x: 610, y: 160 },
    ],
  },
  {
    id: 'sales',
    name: 'Tăng Trưởng & Bán Hàng',
    shortName: 'TĂNG TRƯỞNG',
    cx: 585,
    cy: 460,
    labelX: 585,
    labelY: 512,
    textAnchor: 'middle',
    linkUrl: '/case-studies/vinhomes-ai-sales-enablement',
    capabilities: [
      { id: 's1', name: 'Phễu bán', x: 650, y: 425 },
      { id: 's2', name: 'Chốt cọc', x: 655, y: 485 },
      { id: 's3', name: 'Đa kênh', x: 625, y: 538 },
    ],
  },
  {
    id: 'governance',
    name: 'Chiến Lược & Quản Trị',
    shortName: 'QUẢN TRỊ',
    cx: 410,
    cy: 620,
    labelX: 410,
    labelY: 672,
    textAnchor: 'middle',
    linkUrl: '/phap-ly-bao-mat',
    capabilities: [
      { id: 'g1', name: 'Chính sách', x: 475, y: 658 },
      { id: 'g2', name: 'Kiểm định', x: 410, y: 686 },
      { id: 'g3', name: 'Chủ quyền', x: 340, y: 658 },
    ],
  },
  {
    id: 'tech',
    name: 'Công Nghệ & Dữ Liệu',
    shortName: 'CÔNG NGHỆ',
    cx: 210,
    cy: 550,
    labelX: 210,
    labelY: 602,
    textAnchor: 'middle',
    linkUrl: '/tu-duy-chuyen-doi-ai',
    capabilities: [
      { id: 't1', name: 'Vector DB', x: 140, y: 580 },
      { id: 't2', name: 'RAG Pipeline', x: 175, y: 630 },
      { id: 't3', name: 'Private VPC', x: 245, y: 640 },
    ],
  },
  {
    id: 'manufacturing',
    name: 'Sản Xuất & Vận Hành',
    shortName: 'SẢN XUẤT',
    cx: 155,
    cy: 370,
    labelX: 155,
    labelY: 420,
    textAnchor: 'middle',
    linkUrl: '/case-studies/ai-auditor-manufacturing',
    capabilities: [
      { id: 'm1', name: 'QA Vision', x: 85, y: 335 },
      { id: 'm2', name: 'Lean SOP', x: 75, y: 395 },
      { id: 'm3', name: 'Chuỗi cung ứng', x: 105, y: 450 },
    ],
  },
  {
    id: 'hr',
    name: 'Con Người & Tổ Chức',
    shortName: 'CON NGƯỜI',
    cx: 205,
    cy: 205,
    labelX: 205,
    labelY: 165,
    textAnchor: 'middle',
    linkUrl: '/doi-ngu#hr',
    capabilities: [
      { id: 'h1', name: 'Wiki tri thức', x: 140, y: 165 },
      { id: 'h2', name: 'Đào tạo AI', x: 105, y: 215 },
      { id: 'h3', name: 'Thực thi SOP', x: 135, y: 265 },
    ],
  },
];

// Map coordinates for quick cross-link calculations
const DOMAIN_MAP = new Map(DOMAINS.map((d) => [d.id, d]));

// ============================================================================
// SEMANTIC CROSS-LINKS (BÉZIER CURVES ALONG SUNFLOWER SPIRAL)
// Idle state: Always visible at 2.5–4% opacity (fine knowledge network wireframe)
// Active state: Flares to 25–40% with traveling spark when connected domain is active.
// ============================================================================
const RAW_CROSS_LINKS = [
  { id: 'cl-bank-gov', sourceDomain: 'banking', targetDomain: 'governance', label: 'Rủi ro & Kiểm định' },
  { id: 'cl-re-sales', sourceDomain: 'real-estate', targetDomain: 'sales', label: 'Lead & Chốt cọc' },
  { id: 'cl-hr-tech', sourceDomain: 'hr', targetDomain: 'tech', label: 'Wiki & Tri thức số' },
  { id: 'cl-mfg-tech', sourceDomain: 'manufacturing', targetDomain: 'tech', label: 'Dữ liệu vận hành' },
  { id: 'cl-mfg-gov', sourceDomain: 'manufacturing', targetDomain: 'governance', label: 'Chuẩn hóa SOP' },
  { id: 'cl-bank-tech', sourceDomain: 'banking', targetDomain: 'tech', label: 'Tích hợp tài chính' },
  { id: 'cl-sales-tech', sourceDomain: 'sales', targetDomain: 'tech', label: 'Dữ liệu chuyển đổi' },
  { id: 'cl-bank-re', sourceDomain: 'banking', targetDomain: 'real-estate', label: 'Định giá & Tín dụng BĐS' },
  { id: 'cl-hr-gov', sourceDomain: 'hr', targetDomain: 'governance', label: 'Phân quyền & Tự chủ' },
  { id: 'cl-sales-gov', sourceDomain: 'sales', targetDomain: 'governance', label: 'Chính sách & Tuân thủ' },
  { id: 'cl-mfg-sales', sourceDomain: 'manufacturing', targetDomain: 'sales', label: 'Dự báo & Chuyền sản xuất' },
  { id: 'cl-hr-mfg', sourceDomain: 'hr', targetDomain: 'manufacturing', label: 'SOP & An toàn chuyền' },
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
    bezierPath: calculateSunflowerBezierPath(s.cx, s.cy, t.cx, t.cy, 0.15),
  };
});

export function AiTransformationNetwork() {
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);
  const [activeCycleIndex, setActiveCycleIndex] = useState<number>(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [corePulseCount, setCorePulseCount] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Organic cycle: exactly ONE cluster comes alive every 5.5 seconds
  useEffect(() => {
    if (hoveredDomain !== null) return;
    const interval = setInterval(() => {
      setActiveCycleIndex((prev) => (prev + 1) % DOMAINS.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [hoveredDomain]);

  const activeDomainId = hoveredDomain || DOMAINS[activeCycleIndex]?.id;

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

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[620px] sm:max-w-[700px] lg:max-w-[780px] xl:max-w-[840px] aspect-square flex items-center justify-center select-none font-sans overflow-visible ml-auto"
      aria-label="Sunext Sunflower Knowledge Topology — Obsidian Art-Directed Network"
    >
      {/* Warm Ambient Sun Glow Behind Central Core */}
      <div
        className="absolute w-[560px] h-[560px] lg:w-[680px] lg:h-[680px] rounded-full pointer-events-none -z-10"
        style={{
          top: '50%',
          left: '50%',
          marginTop: '-280px',
          marginLeft: '-280px',
          background: 'radial-gradient(circle at 50% 50%, rgba(255,247,232,0.85) 0%, rgba(255,191,117,0.22) 28%, rgba(239,124,44,0.06) 52%, transparent 72%)',
          filter: 'blur(55px)',
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
            <stop offset="65%" stopColor="#A855F7" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#EA580C" stopOpacity="0.9" />
          </linearGradient>

          {/* Cross-Link Active Gradient */}
          <linearGradient id="cross-link-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7000FF" stopOpacity="0.8" />
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
        {/* TIER 3: BÉZIER CROSS-LINKS ACROSS DOMAINS & LEAVES                   */}
        {/* Curved along sunflower spiral. Idle: 2.5–3.5% opacity (never 0).    */}
        {/* Active: 30–35% opacity on connected links with traveling spark.      */}
        {/* ==================================================================== */}
        {OBSIDIAN_CROSS_LINKS.map((cl) => {
          const isLinkConnected = cl.sourceDomain === activeDomainId || cl.targetDomain === activeDomainId;

          return (
            <g key={cl.id}>
              <path
                d={cl.bezierPath}
                stroke={isLinkConnected ? 'url(#cross-link-gradient)' : '#8B5CF6'}
                strokeWidth={isLinkConnected ? 1.4 : 0.75}
                strokeDasharray={isLinkConnected ? '3 3' : '2 4'}
                opacity={isLinkConnected ? 0.35 : 0.03}
                fill="none"
                className="transition-all duration-500"
              />

              {/* Traveling Spark on Active Cross-Link */}
              {isLinkConnected && (
                <circle r="2.2" fill="#A855F7">
                  <animateMotion
                    path={cl.bezierPath}
                    dur="2.8s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* ==================================================================== */}
        {/* INNER KNOWLEDGE MATRIX (GOLDEN SPIRAL SEEDS CLOSE TO SUNEXT CORE)    */}
        {/* Dense relationship mesh near Sunext, thins outward.                  */}
        {/* ==================================================================== */}
        {/* A. Twin parastichy spiral edges between inner seeds */}
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
              stroke="#A855F7"
              strokeWidth="0.5"
              strokeDasharray="2 3"
              opacity="0.04"
            />
          );
        })}

        {/* B. Inner seeds radial links to Sunext Core */}
        {INNER_KNOWLEDGE_SEEDS.map((seed) => (
          <line
            key={`seed-radial-${seed.id}`}
            x1={seed.x}
            y1={seed.y}
            x2={SUNEXT_INDEX.cx}
            y2={SUNEXT_INDEX.cy}
            stroke="#7000FF"
            strokeWidth="0.5"
            strokeDasharray="1.5 3"
            opacity="0.06"
          />
        ))}

        {/* C. Inner Knowledge Dots (r=1.8, quiet, unlabeled) */}
        {INNER_KNOWLEDGE_SEEDS.map((seed) => (
          <circle
            key={`seed-dot-${seed.id}`}
            cx={seed.x}
            cy={seed.y}
            r="1.8"
            fill="#8B5CF6"
            opacity="0.28"
          />
        ))}

        {/* ==================================================================== */}
        {/* TIER 1: STRUCTURAL EDGES: MACRO-DOMAIN ───── SUNEXT                 */}
        {/* Straight radial lines. Idle: 8–10% opacity. Active: 80–85% beam.     */}
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
                strokeWidth={isDomainActive ? 2.2 : 0.8}
                strokeDasharray={isDomainActive ? 'none' : '2 3'}
                opacity={isDomainActive ? 0.85 : 0.09}
                className="transition-all duration-500"
              />

              {/* Single smooth inward particle: Domain -> Sunext */}
              {isDomainActive && (
                <circle r="3.2" fill="#7000FF" filter="url(#purple-glow)">
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
        {/* TIER 2: LEAF NODES (OUTER EXPERTISE — MAX 3 PER DOMAIN)              */}
        {/* Idle: Feeder lines at 4–6% opacity. Nodes at r=1.8 (NO LABELS).     */}
        {/* Active: Feeder lines at 55%. Exactly 3 leaf labels reveal outward.  */}
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
                  stroke={isClusterActive ? '#7000FF' : '#8B5CF6'}
                  strokeWidth={isClusterActive ? 1.2 : 0.6}
                  strokeDasharray={isClusterActive ? 'none' : '1.5 2.5'}
                  opacity={isClusterActive ? 0.55 : 0.05}
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
                      r="6.0"
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
                    r={isClusterActive ? 3.0 : 1.8}
                    fill={isClusterActive ? '#7000FF' : '#8B5CF6'}
                    opacity={isClusterActive ? 0.95 : 0.3}
                    className="transition-all duration-300"
                  />

                  {/* PROGRESSIVE DISCLOSURE: Label ONLY appears when cluster is active! */}
                  {isClusterActive && (() => {
                    const dx = cap.x - domain.cx;
                    const dy = cap.y - domain.cy;
                    const dist = Math.hypot(dx, dy) || 1;
                    const normX = dx / dist;
                    const normY = dy / dist;
                    const labelOffsetX = Math.round(normX * 10);
                    const labelOffsetY = Math.round(normY * 10 + (normY > 0.3 ? 7 : normY < -0.3 ? -3 : 3));
                    const anchor = normX > 0.35 ? 'start' : normX < -0.35 ? 'end' : 'middle';

                    return (
                      <text
                        x={labelOffsetX}
                        y={labelOffsetY}
                        textAnchor={anchor}
                        fill="#0F172A"
                        fontSize="9.5"
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
        {/* 7 MACRO-DOMAIN HUBS (PERMANENTLY LABELED IN IDLE STATE)              */}
        {/* Strictly 7 domain labels + 1 SUNEXT core label visible in idle.     */}
        {/* ==================================================================== */}
        {DOMAINS.map((domain) => {
          const isClusterActive = activeDomainId === domain.id;

          return (
            <Link key={`domain-hub-${domain.id}`} href={domain.linkUrl}>
              <g
                onMouseEnter={() => setHoveredDomain(domain.id)}
                onMouseLeave={() => setHoveredDomain(null)}
                className="cursor-pointer group"
                opacity={isClusterActive ? 1 : 0.88}
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

                {/* Macro-Domain Monospace Permanent Label (Only this label, no subline!) */}
                <text
                  x={domain.labelX}
                  y={domain.labelY}
                  textAnchor={domain.textAnchor}
                  fill={isClusterActive ? '#0A0A0A' : '#1E293B'}
                  fontSize={isClusterActive ? 12.5 : 11}
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fontWeight={isClusterActive ? 750 : 650}
                  letterSpacing="0.06em"
                  className="transition-all duration-300 select-none filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.95)]"
                >
                  {domain.shortName}
                </text>
              </g>
            </Link>
          );
        })}

        {/* ==================================================================== */}
        {/* LEVEL 0: SUNEXT CENTRAL NUCLEUS AT OPTICAL CENTER                    */}
        {/* Core scaled (r=44), bold "SUNEXT" only. Orange convergence center.  */}
        {/* ==================================================================== */}
        <Link href="/tu-duy-chuyen-doi-ai">
          <g transform={`translate(${SUNEXT_INDEX.cx}, ${SUNEXT_INDEX.cy})`} className="cursor-pointer group">
            {/* ONE SINGLE ORANGE PULSE RING ON CYCLE CHANGE */}
            <circle
              key={`pulse-${corePulseCount}`}
              cx="0"
              cy="0"
              r="44"
              fill="none"
              stroke="#EA580C"
              strokeWidth="2.0"
              opacity="0.8"
            >
              <animate attributeName="r" from="44" to="88" dur="1.4s" fill="freeze" repeatCount="1" />
              <animate attributeName="opacity" from="0.8" to="0" dur="1.4s" fill="freeze" repeatCount="1" />
            </circle>

            {/* Faint Resting Orbit Halo */}
            <circle cx="0" cy="0" r="62" fill="none" stroke="#F97316" strokeWidth="0.8" strokeDasharray="3 6" opacity="0.3">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="40s" repeatCount="indefinite" />
            </circle>

            {/* Core Sun Disc: r=44 */}
            <circle
              cx="0"
              cy="0"
              r="44"
              fill="url(#sunext-core-radial)"
              filter="drop-shadow(0 6px 22px rgba(239,124,44,0.42))"
              className="transition-transform duration-500 group-hover:scale-105"
            />

            {/* Inner Ring */}
            <circle cx="0" cy="0" r="44" fill="none" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.85" />

            {/* Nucleus Center Dots */}
            <circle cx="0" cy="0" r="12" fill="#FFFFFF" fillOpacity="0.25" stroke="#FFFFFF" strokeWidth="1" />
            <circle cx="0" cy="0" r="5" fill="#FFFFFF" />

            {/* Brand Monogram: SUNEXT ONLY (Bold, pristine, authoritative) */}
            <text
              x="0"
              y="59"
              textAnchor="middle"
              fill="#EA580C"
              fontSize="10"
              fontFamily="monospace"
              fontWeight="800"
              letterSpacing="0.2em"
              className="select-none filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.95)]"
            >
              SUNEXT
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
