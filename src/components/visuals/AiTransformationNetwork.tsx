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
}

// ============================================================================
// LAYER 0: SUNEXT CENTRAL INDEX NUCLEUS
// Positioned at optical center (388, 392) in 720x720 viewBox
// Core scaled +15% (r=44) with bold "SUNEXT" typography (no clutter subline)
// ============================================================================
const SUNEXT_INDEX = {
  cx: 388,
  cy: 392,
};

// ============================================================================
// LAYER 1: 7 MACRO-DOMAINS (TIẾNG VIỆT CHUẨN MỰC, CỐ ĐỊNH NHÃN TRẠNG THÁI TĨNH)
// Exactly 7 macro-domain hubs permanently labeled when idle.
// Each domain has at most 3 leaves. Leaf labels ONLY reveal upon active/hover.
// NO DUPLICATE SUBLINE TEXT.
// ============================================================================
const DOMAINS: DomainCluster[] = [
  {
    id: 'banking',
    name: 'Tài Chính & Định Giá',
    shortName: 'TÀI CHÍNH',
    cx: 345,
    cy: 135,
    labelX: 345,
    labelY: 96,
    textAnchor: 'middle',
    linkUrl: '/doi-ngu#finance',
    capabilities: [
      { id: 'b1', name: 'Tín dụng', x: 345, y: 70 },
      { id: 'b2', name: 'Rủi ro', x: 275, y: 110 },
      { id: 'b3', name: 'AML', x: 415, y: 110 },
    ],
  },
  {
    id: 'real-estate',
    name: 'Bất Động Sản',
    shortName: 'BẤT ĐỘNG SẢN',
    cx: 565,
    cy: 215,
    labelX: 565,
    labelY: 176,
    textAnchor: 'middle',
    linkUrl: '/nganh/bat-dong-san',
    capabilities: [
      { id: 're1', name: 'Định giá', x: 635, y: 175 },
      { id: 're2', name: 'CRM BĐS', x: 645, y: 235 },
      { id: 're3', name: 'Pháp lý', x: 595, y: 145 },
    ],
  },
  {
    id: 'sales',
    name: 'Tăng Trưởng & Bán Hàng',
    shortName: 'TĂNG TRƯỞNG',
    cx: 580,
    cy: 450,
    labelX: 580,
    labelY: 502,
    textAnchor: 'middle',
    linkUrl: '/case-studies/vinhomes-ai-sales-enablement',
    capabilities: [
      { id: 's1', name: 'Phễu bán', x: 645, y: 415 },
      { id: 's2', name: 'Chốt cọc', x: 650, y: 475 },
      { id: 's3', name: 'Đa kênh', x: 620, y: 530 },
    ],
  },
  {
    id: 'governance',
    name: 'Chiến Lược & Quản Trị',
    shortName: 'QUẢN TRỊ',
    cx: 415,
    cy: 625,
    labelX: 415,
    labelY: 678,
    textAnchor: 'middle',
    linkUrl: '/phap-ly-bao-mat',
    capabilities: [
      { id: 'g1', name: 'Chính sách', x: 480, y: 665 },
      { id: 'g2', name: 'Kiểm định', x: 415, y: 690 },
      { id: 'g3', name: 'Chủ quyền', x: 345, y: 665 },
    ],
  },
  {
    id: 'tech',
    name: 'Công Nghệ & Dữ Liệu',
    shortName: 'CÔNG NGHỆ',
    cx: 215,
    cy: 565,
    labelX: 215,
    labelY: 618,
    textAnchor: 'middle',
    linkUrl: '/tu-duy-chuyen-doi-ai',
    capabilities: [
      { id: 't1', name: 'Vector DB', x: 145, y: 595 },
      { id: 't2', name: 'RAG Pipeline', x: 180, y: 645 },
      { id: 't3', name: 'Private VPC', x: 250, y: 655 },
    ],
  },
  {
    id: 'manufacturing',
    name: 'Sản Xuất & Vận Hành',
    shortName: 'SẢN XUẤT',
    cx: 145,
    cy: 375,
    labelX: 145,
    labelY: 425,
    textAnchor: 'middle',
    linkUrl: '/case-studies/ai-auditor-manufacturing',
    capabilities: [
      { id: 'm1', name: 'QA Vision', x: 75, y: 340 },
      { id: 'm2', name: 'Lean SOP', x: 65, y: 400 },
      { id: 'm3', name: 'Chuỗi cung ứng', x: 95, y: 455 },
    ],
  },
  {
    id: 'hr',
    name: 'Con Người & Tổ Chức',
    shortName: 'CON NGƯỜI',
    cx: 195,
    cy: 195,
    labelX: 195,
    labelY: 154,
    textAnchor: 'middle',
    linkUrl: '/doi-ngu#hr',
    capabilities: [
      { id: 'h1', name: 'Wiki tri thức', x: 130, y: 155 },
      { id: 'h2', name: 'Đào tạo AI', x: 95, y: 205 },
      { id: 'h3', name: 'Thực thi SOP', x: 125, y: 255 },
    ],
  },
];

// ============================================================================
// SEMANTIC CROSS-LINKS (PEER RELATIONSHIPS)
// IDLE STATE: 100% INVISIBLE (0 opacity). No spiderweb clutter!
// ACTIVE STATE: Only 1–2 horizontal links reveal when connected domain is active.
// ============================================================================
const OBSIDIAN_CROSS_LINKS: CrossLink[] = [
  // 1. Tài chính ↔ Quản trị (Rủi ro & Tuân thủ)
  { id: 'cl-bank-gov', sourceDomain: 'banking', targetDomain: 'governance', label: 'Rủi ro & Kiểm định', x1: 345, y1: 135, x2: 415, y2: 625 },
  // 2. Bất động sản ↔ Tăng trưởng (Lead & Chốt cọc)
  { id: 'cl-re-sales', sourceDomain: 'real-estate', targetDomain: 'sales', label: 'Lead & Chốt cọc', x1: 565, y1: 215, x2: 580, y2: 450 },
  // 3. Con người ↔ Công nghệ (Wiki & Co-worker)
  { id: 'cl-hr-tech', sourceDomain: 'hr', targetDomain: 'tech', label: 'Wiki & Tri thức số', x1: 195, y1: 195, x2: 215, y2: 565 },
  // 4. Sản xuất ↔ Công nghệ (Telemetry & QA Vision)
  { id: 'cl-mfg-tech', sourceDomain: 'manufacturing', targetDomain: 'tech', label: 'Dữ liệu vận hành', x1: 145, y1: 375, x2: 215, y2: 565 },
  // 5. Sản xuất ↔ Quản trị (SOP & Kiểm định an toàn)
  { id: 'cl-mfg-gov', sourceDomain: 'manufacturing', targetDomain: 'governance', label: 'Chuẩn hóa SOP', x1: 145, y1: 375, x2: 415, y2: 625 },
  // 6. Tài chính ↔ Công nghệ (Financial Data Bus)
  { id: 'cl-bank-tech', sourceDomain: 'banking', targetDomain: 'tech', label: 'Tích hợp tài chính', x1: 345, y1: 135, x2: 215, y2: 565 },
  // 7. Tăng trưởng ↔ Công nghệ (Conversion Telemetry)
  { id: 'cl-sales-tech', sourceDomain: 'sales', targetDomain: 'tech', label: 'Dữ liệu chuyển đổi', x1: 580, y1: 450, x2: 215, y2: 565 },
];

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

  // Connected cross-links for the active domain (revealed ONLY when cluster is active)
  const activeCrossLinks = useMemo(() => {
    return OBSIDIAN_CROSS_LINKS.filter(
      (cl) => cl.sourceDomain === activeDomainId || cl.targetDomain === activeDomainId
    ).slice(0, 2); // Max 1–2 cross-links per active state to maintain pristine clarity
  }, [activeDomainId]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[620px] sm:max-w-[700px] lg:max-w-[780px] xl:max-w-[840px] aspect-square flex items-center justify-center select-none font-sans overflow-visible ml-auto"
      aria-label="Sunext Knowledge Topology — Obsidian Art-Directed Graph"
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

          {/* Cross-Link Gradient */}
          <linearGradient id="cross-link-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#7000FF" stopOpacity="0.7" />
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
        {/* 1. STRUCTURAL EDGES: MACRO-DOMAIN ───── SUNEXT                       */}
        {/* Exactly 7 faint hairlines in idle. Becomes vibrant beam on active.  */}
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
                strokeWidth={isDomainActive ? 2.0 : 0.8}
                strokeDasharray={isDomainActive ? 'none' : '2 4'}
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
        {/* 2. SEMANTIC CROSS-LINKS (PEER SATELLITES)                            */}
        {/* Idle: ZERO lines rendered (0 opacity).                               */}
        {/* Active: Max 1–2 subtle links appear with a traveling spark.          */}
        {/* ==================================================================== */}
        {activeCrossLinks.map((cl) => (
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
        ))}

        {/* ==================================================================== */}
        {/* 3. LEAF NODES (MAX 3 PER DOMAIN)                                     */}
        {/* Idle: Tiny quiet dots (r=1.8), NO TEXT LABELS.                      */}
        {/* Active: Exactly 3 leaf labels reveal outward via vector math.        */}
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
                  strokeWidth={isClusterActive ? 1.0 : 0.5}
                  strokeDasharray={isClusterActive ? 'none' : '2 3'}
                  opacity={isClusterActive ? 0.75 : 0.04}
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
                    fill={isClusterActive ? '#7000FF' : '#A855F7'}
                    opacity={isClusterActive ? 0.95 : 0.25}
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
        {/* 4. 7 MACRO-DOMAIN HUBS (PERMANENTLY LABELED IN IDLE STATE)          */}
        {/* Crisp Monospace typography, NO DUPLICATE SUBLINE TEXT.               */}
        {/* ==================================================================== */}
        {DOMAINS.map((domain) => {
          const isClusterActive = activeDomainId === domain.id;

          return (
            <Link key={`domain-hub-${domain.id}`} href={domain.linkUrl}>
              <g
                onMouseEnter={() => setHoveredDomain(domain.id)}
                onMouseLeave={() => setHoveredDomain(null)}
                className="cursor-pointer group"
                opacity={isClusterActive ? 1 : 0.85}
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
        {/* 5. LEVEL 0: SUNEXT CENTRAL NUCLEUS AT OPTICAL CENTER                 */}
        {/* Scaled +15% (r=44), bold "SUNEXT" only (no collective intelligence) */}
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

            {/* Core Sun Disc: r=44 (+15% larger) */}
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
