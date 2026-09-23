'use client';

import React from 'react';

interface CaseStudyVisualProps {
  slug: string;
  className?: string;
  compact?: boolean;
}

export function CaseStudyVisual({ slug, className = '', compact = false }: CaseStudyVisualProps) {
  switch (slug) {
    case 'toi-uu-chi-phi-tuyen-dung-hr-ai':
      return <HrRecruitmentSvgVisual compact={compact} className={className} />;
    case 'ai-auditor-manufacturing':
      return <ManufacturingVisionSvgVisual compact={compact} className={className} />;
    case 'content-factory-b2b-marketing':
      return <B2bContentFactorySvgVisual compact={compact} className={className} />;
    case 'vietcap-ai-multi-agent-nghien-cuu-thi-truong':
      return <VietcapMultiAgentSvgVisual compact={compact} className={className} />;
    case 'vinhomes-ai-sales-enablement':
      return <VinhomesSalesMeshSvgVisual compact={compact} className={className} />;
    case 'dentsu-ai-pitch-deck-automation':
      return <DentsuPitchDeckSvgVisual compact={compact} className={className} />;
    case 'phuong-truong-an-video-ai-hien-truong':
      return <PhuongTruongAnVideoSvgVisual compact={compact} className={className} />;
    case 'fptu-nang-bac-giang-vien-ai':
      return <FptuFacultySwarmSvgVisual compact={compact} className={className} />;
    default:
      return <GenericDataSvgVisual slug={slug} compact={compact} className={className} />;
  }
}

// ---------------------------------------------------------------------------
// 1. HR Screening Funnel & Latency Compression (Retail & FMCG, 500 Staff)
// ---------------------------------------------------------------------------
function HrRecruitmentSvgVisual({ compact, className = '' }: { compact?: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full min-h-[200px] select-none bg-[#F9F9F7] ${className}`}>
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block">
        <defs>
          <pattern id="hr-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#ECEAE4" strokeWidth="0.8" />
          </pattern>
          <linearGradient id="hr-grad-old" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E5E4DE" />
            <stop offset="100%" stopColor="#D8D6CE" />
          </linearGradient>
        </defs>

        {/* Background Grid */}
        <rect width="480" height="300" fill="#F9F9F7" />
        <rect width="480" height="300" fill="url(#hr-grid)" opacity="0.7" />

        {/* Top Header Bar */}
        <line x1="24" y1="46" x2="456" y2="46" stroke="#E5E3DC" strokeWidth="1" />
        <circle cx="32" cy="28" r="4" fill="#7000FF" />
        <text x="44" y="32" fill="#17151A" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600" letterSpacing="0.05em">
          ATS STREAM · HR AI SCREENER
        </text>
        <rect x="340" y="18" width="116" height="20" rx="10" fill="#FAF5FF" stroke="#EDE9FE" strokeWidth="1" />
        <text x="398" y="32" fill="#7000FF" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">
          500 NHÂN SỰ · 4 HR
        </text>

        {/* Left: 3-Stage Candidate Funnel */}
        <g transform="translate(28, 64)">
          <text x="0" y="12" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="600" letterSpacing="0.05em">
            PHỄU SÀNG LỌC HỒ SƠ (FUNNEL)
          </text>

          {/* Tier 1: 1.200 CVs */}
          <rect x="0" y="22" width="180" height="24" rx="6" fill="#FFFFFF" stroke="#E2E0D8" strokeWidth="1" />
          <text x="12" y="38" fill="#76747E" fontSize="10" fontFamily="system-ui, sans-serif">1.200 CV Nộp Vào</text>
          <text x="168" y="38" fill="#17151A" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="end">100%</text>

          {/* Tier 2: 180 Match */}
          <rect x="16" y="52" width="148" height="24" rx="6" fill="#FAF5FF" stroke="#EDE9FE" strokeWidth="1" />
          <text x="26" y="68" fill="#17151A" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="500">180 Đạt Tiêu Chuẩn</text>
          <text x="154" y="68" fill="#7000FF" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="end">15%</text>

          {/* Tier 3: 35 Final */}
          <rect x="32" y="82" width="116" height="24" rx="6" fill="#17151A" />
          <text x="42" y="98" fill="#FFFFFF" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="500">35 Mời Phỏng Vấn</text>
          <text x="138" y="98" fill="#F97316" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="end">Pass</text>
        </g>

        {/* Right: Latency Compression Comparison */}
        <g transform="translate(236, 64)">
          <text x="0" y="12" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="600" letterSpacing="0.05em">
            NÉN THỜI GIAN VẬN HÀNH (LATENCY)
          </text>

          {/* Old Workflow Bar */}
          <g transform="translate(0, 22)">
            <rect x="0" y="0" width="216" height="36" rx="8" fill="#FFFFFF" stroke="#E5E3DC" strokeWidth="1" />
            <text x="10" y="16" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif">Quy trình thủ công cũ</text>
            <text x="206" y="16" fill="#DC2626" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="end">72 Giờ</text>
            <rect x="10" y="22" width="196" height="6" rx="3" fill="#F0EFEA" />
            <rect x="10" y="22" width="196" height="6" rx="3" fill="url(#hr-grad-old)" />
          </g>

          {/* New AI Workflow Bar */}
          <g transform="translate(0, 68)">
            <rect x="0" y="0" width="216" height="36" rx="8" fill="#FAF5FF" stroke="#EDE9FE" strokeWidth="1" />
            <text x="10" y="16" fill="#17151A" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="600">AI Resume Screener</text>
            <text x="206" y="16" fill="#7000FF" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="end">2 Giờ (3d → 2h)</text>
            <rect x="10" y="22" width="196" height="6" rx="3" fill="#E5E4DE" />
            <rect x="10" y="22" width="32" height="6" rx="3" fill="#7000FF" />
          </g>
        </g>

        {/* Bottom 3 KPI Badges */}
        <g transform="translate(24, 206)">
          <line x1="0" y1="0" x2="432" y2="0" stroke="#E5E3DC" strokeWidth="1" />
          
          {/* KPI 1 */}
          <rect x="0" y="12" width="136" height="66" rx="10" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
          <text x="16" y="32" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">TIẾT KIỆM CHI PHÍ</text>
          <text x="16" y="58" fill="#059669" fontSize="20" fontFamily="system-ui, sans-serif" fontWeight="600">-40%</text>

          {/* KPI 2 */}
          <rect x="148" y="12" width="136" height="66" rx="10" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
          <text x="164" y="32" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">RÚT NGẮN TIẾN ĐỘ</text>
          <text x="164" y="58" fill="#17151A" fontSize="18" fontFamily="system-ui, sans-serif" fontWeight="600">3d → 2h</text>

          {/* KPI 3 */}
          <rect x="296" y="12" width="136" height="66" rx="10" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
          <text x="312" y="32" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">TỶ LỆ PHÙ HỢP</text>
          <text x="312" y="58" fill="#0284C7" fontSize="20" fontFamily="system-ui, sans-serif" fontWeight="600">+25%</text>
        </g>
      </svg>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 2. Manufacturing Vision Telemetry (Precision Engineering, 6 Lines)
// ---------------------------------------------------------------------------
function ManufacturingVisionSvgVisual({ compact, className = '' }: { compact?: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full min-h-[200px] select-none bg-[#F9F9F7] ${className}`}>
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block">
        <defs>
          <pattern id="mfg-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ECEAE4" strokeWidth="0.8" />
          </pattern>
        </defs>

        <rect width="480" height="300" fill="#F9F9F7" />
        <rect width="480" height="300" fill="url(#mfg-grid)" opacity="0.7" />

        {/* Top Header Bar */}
        <line x1="24" y1="46" x2="456" y2="46" stroke="#E5E3DC" strokeWidth="1" />
        <circle cx="32" cy="28" r="4" fill="#0284C7" />
        <text x="44" y="32" fill="#17151A" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600" letterSpacing="0.05em">
          EDGE VISION TELEMETRY · 6 CHUYỀN SẢN XUẤT
        </text>
        <rect x="346" y="18" width="110" height="20" rx="10" fill="#E0F2FE" stroke="#BAE6FD" strokeWidth="0.8" />
        <text x="401" y="32" fill="#0369A1" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">
          LATENCY: 38ms
        </text>

        {/* Center: Precision Part Blueprint & Optical Reticle */}
        <g transform="translate(36, 62)">
          {/* Main Viewfinder Window */}
          <rect x="0" y="0" width="408" height="128" rx="12" fill="#FFFFFF" stroke="#D8D6CE" strokeWidth="1" />
          
          {/* Corner Framing Marks */}
          <path d="M 10 20 L 10 10 L 20 10" stroke="#17151A" strokeWidth="1.5" fill="none" />
          <path d="M 398 20 L 398 10 L 388 10" stroke="#17151A" strokeWidth="1.5" fill="none" />
          <path d="M 10 108 L 10 118 L 20 118" stroke="#17151A" strokeWidth="1.5" fill="none" />
          <path d="M 398 108 L 398 118 L 388 118" stroke="#17151A" strokeWidth="1.5" fill="none" />

          {/* Blueprint Part Graphic (Mechanical Gear/Shaft) */}
          <g transform="translate(130, 20)">
            {/* Center Axis Line */}
            <line x1="-30" y1="44" x2="180" y2="44" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="6 3" />
            
            {/* Outer Flange */}
            <rect x="10" y="14" width="130" height="60" rx="4" fill="#F8FAFC" stroke="#334155" strokeWidth="1.2" />
            {/* Inner Core */}
            <rect x="45" y="26" width="60" height="36" rx="2" fill="#F1F5F9" stroke="#475569" strokeWidth="1" />
            {/* Center Bore */}
            <circle cx="75" cy="44" r="10" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.2" />

            {/* Laser Scan Sweep Line */}
            <line x1="90" y1="2" x2="90" y2="86" stroke="#10B981" strokeWidth="1.5" />
            <circle cx="90" cy="44" r="3" fill="#10B981" />

            {/* Dimension Callout */}
            <line x1="10" y1="80" x2="140" y2="80" stroke="#64748B" strokeWidth="0.8" />
            <line x1="10" y1="76" x2="10" y2="84" stroke="#64748B" strokeWidth="0.8" />
            <line x1="140" y1="76" x2="140" y2="84" stroke="#64748B" strokeWidth="0.8" />
            <text x="75" y="92" fill="#64748B" fontSize="8" fontFamily="system-ui, sans-serif" textAnchor="middle">Ø 78.50 mm ± 0.02</text>
          </g>

          {/* Telemetry Annotations */}
          <g transform="translate(22, 28)">
            <rect x="0" y="0" width="86" height="44" rx="6" fill="#F8F8F6" stroke="#E2E0D8" strokeWidth="0.8" />
            <text x="8" y="16" fill="#76747E" fontSize="8" fontFamily="system-ui, sans-serif">EDGE INFERENCE</text>
            <text x="8" y="32" fill="#17151A" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600">PASS (99.8%)</text>
          </g>

          <g transform="translate(296, 28)">
            <rect x="0" y="0" width="92" height="44" rx="6" fill="#FAF5FF" stroke="#EDE9FE" strokeWidth="0.8" />
            <text x="8" y="16" fill="#76747E" fontSize="8" fontFamily="system-ui, sans-serif">DEFECT SCAN</text>
            <text x="8" y="32" fill="#7000FF" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">0.00% DRIFT</text>
          </g>
        </g>

        {/* Bottom 3 KPI Badges */}
        <g transform="translate(24, 206)">
          <line x1="0" y1="0" x2="432" y2="0" stroke="#E5E3DC" strokeWidth="1" />
          
          <rect x="0" y="12" width="136" height="66" rx="10" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
          <text x="16" y="32" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">ĐỘ CHÍNH XÁC</text>
          <text x="16" y="58" fill="#059669" fontSize="20" fontFamily="system-ui, sans-serif" fontWeight="600">99.8%</text>

          <rect x="148" y="12" width="136" height="66" rx="10" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
          <text x="164" y="32" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">TỶ LỆ LỖI XUẤT</text>
          <text x="164" y="58" fill="#17151A" fontSize="20" fontFamily="system-ui, sans-serif" fontWeight="600">1.5%</text>

          <rect x="296" y="12" width="136" height="66" rx="10" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
          <text x="312" y="32" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">GIÁM SÁT THỜI GIAN THỰC</text>
          <text x="312" y="58" fill="#0284C7" fontSize="18" fontFamily="system-ui, sans-serif" fontWeight="600">24/7 Edge</text>
        </g>
      </svg>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 3. B2B Content Engine (Professional Services, x5 Speed, +60% Traffic)
// ---------------------------------------------------------------------------
function B2bContentFactorySvgVisual({ compact, className = '' }: { compact?: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full min-h-[200px] select-none bg-[#F9F9F7] ${className}`}>
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block">
        <defs>
          <pattern id="b2b-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#ECEAE4" strokeWidth="0.8" />
          </pattern>
        </defs>

        <rect width="480" height="300" fill="#F9F9F7" />
        <rect width="480" height="300" fill="url(#b2b-grid)" opacity="0.7" />

        {/* Top Header Bar */}
        <line x1="24" y1="46" x2="456" y2="46" stroke="#E5E3DC" strokeWidth="1" />
        <circle cx="32" cy="28" r="4" fill="#8B5CF6" />
        <text x="44" y="32" fill="#17151A" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600" letterSpacing="0.05em">
          B2B CONTENT FACTORY · 1 SOP CHUẨN HÓA
        </text>
        <rect x="348" y="18" width="108" height="20" rx="10" fill="#F5F3FF" stroke="#DDD6FE" strokeWidth="0.8" />
        <text x="402" y="32" fill="#6D28D9" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">
          200 NHÂN SỰ B2B
        </text>

        {/* Center: Core Knowledge -> Multi-Module Branching Graph */}
        <g transform="translate(36, 66)">
          {/* Core Hub Node */}
          <rect x="0" y="20" width="116" height="64" rx="10" fill="#17151A" />
          <text x="16" y="42" fill="#FFFFFF" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600">1 SOP LÕI</text>
          <text x="16" y="58" fill="#A1A0A8" fontSize="8" fontFamily="system-ui, sans-serif">Whitepaper & Data</text>
          <text x="16" y="72" fill="#F97316" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="600">Single Source</text>

          {/* Branching Connectors */}
          <path d="M 116 36 C 146 36, 146 16, 172 16" stroke="#8B5CF6" strokeWidth="1.2" fill="none" />
          <path d="M 116 46 C 146 46, 146 46, 172 46" stroke="#8B5CF6" strokeWidth="1.2" fill="none" />
          <path d="M 116 56 C 146 56, 146 76, 172 76" stroke="#8B5CF6" strokeWidth="1.2" fill="none" />
          <path d="M 116 66 C 146 66, 146 102, 172 102" stroke="#8B5CF6" strokeWidth="1.2" fill="none" />

          {/* Module 1: Technical Guide */}
          <rect x="172" y="4" width="112" height="24" rx="6" fill="#FFFFFF" stroke="#E5E3DC" strokeWidth="1" />
          <text x="182" y="19" fill="#17151A" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">Technical Runbook</text>

          {/* Module 2: Case Studies */}
          <rect x="172" y="34" width="112" height="24" rx="6" fill="#FFFFFF" stroke="#E5E3DC" strokeWidth="1" />
          <text x="182" y="49" fill="#17151A" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">Case Study Briefs</text>

          {/* Module 3: Executive Pulse */}
          <rect x="172" y="64" width="112" height="24" rx="6" fill="#FFFFFF" stroke="#E5E3DC" strokeWidth="1" />
          <text x="182" y="79" fill="#17151A" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">LinkedIn Pulse Series</text>

          {/* Module 4: Pitch Deck Slidedeck */}
          <rect x="172" y="94" width="112" height="24" rx="6" fill="#FAF5FF" stroke="#EDE9FE" strokeWidth="0.8" />
          <text x="182" y="109" fill="#17151A" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="600">Proposal Decks</text>

          {/* Right: Growth Trajectory Curve */}
          <g transform="translate(306, 8)">
            <rect x="0" y="0" width="102" height="110" rx="8" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
            <text x="10" y="18" fill="#76747E" fontSize="8" fontFamily="system-ui, sans-serif">ORGANIC REACH</text>
            <path d="M 12 92 C 36 86, 50 68, 70 42 C 80 30, 88 20, 92 14" stroke="#059669" strokeWidth="2" fill="none" />
            <circle cx="92" cy="14" r="3" fill="#059669" />
            <text x="10" y="102" fill="#059669" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">+60% SEO</text>
          </g>
        </g>

        {/* Bottom 3 KPI Badges */}
        <g transform="translate(24, 206)">
          <line x1="0" y1="0" x2="432" y2="0" stroke="#E5E3DC" strokeWidth="1" />
          
          <rect x="0" y="12" width="136" height="66" rx="10" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
          <text x="16" y="32" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">TỐC ĐỘ XUẤT BẢN</text>
          <text x="16" y="58" fill="#17151A" fontSize="20" fontFamily="system-ui, sans-serif" fontWeight="600">x5 Tốc Độ</text>

          <rect x="148" y="12" width="136" height="66" rx="10" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
          <text x="164" y="32" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">TĂNG TRƯỞNG TRAFFIC</text>
          <text x="164" y="58" fill="#059669" fontSize="20" fontFamily="system-ui, sans-serif" fontWeight="600">+60%</text>

          <rect x="296" y="12" width="136" height="66" rx="10" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
          <text x="312" y="32" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">TÍNH NHẤT QUÁN</text>
          <text x="312" y="58" fill="#8B5CF6" fontSize="18" fontFamily="system-ui, sans-serif" fontWeight="600">100% SOP</text>
        </g>
      </svg>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 4. Vietcap Multi-Agent Financial Statement Parsing (Securities & Investment)
// ---------------------------------------------------------------------------
function VietcapMultiAgentSvgVisual({ compact, className = '' }: { compact?: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full min-h-[200px] select-none bg-[#F9F9F7] ${className}`}>
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block">
        <defs>
          <pattern id="vc-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#ECEAE4" strokeWidth="0.8" />
          </pattern>
        </defs>

        <rect width="480" height="300" fill="#F9F9F7" />
        <rect width="480" height="300" fill="url(#vc-grid)" opacity="0.7" />

        {/* Top Header Bar */}
        <line x1="24" y1="46" x2="456" y2="46" stroke="#E5E3DC" strokeWidth="1" />
        <circle cx="32" cy="28" r="4" fill="#059669" />
        <text x="44" y="32" fill="#17151A" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600" letterSpacing="0.05em">
          MULTI-AGENT FINANCIAL ENGINE · 300+ TRANG BCTC
        </text>
        <rect x="352" y="18" width="104" height="20" rx="10" fill="#D1FAE5" stroke="#A7F3D0" strokeWidth="0.8" />
        <text x="404" y="32" fill="#065F46" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">
          45S XỬ LÝ
        </text>

        {/* Center: 3-Way Financial Reconciliation Triangle */}
        <g transform="translate(40, 60)">
          {/* Triangular Connecting Network */}
          <polygon points="200,10 60,110 340,110" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="4 3" fill="none" />
          
          {/* Center Agent Core Node */}
          <circle cx="200" cy="76" r="26" fill="#FAF5FF" stroke="#EDE9FE" strokeWidth="1.5" />
          <text x="200" y="74" fill="#17151A" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle">SWARM AI</text>
          <text x="200" y="86" fill="#7000FF" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">AUDIT</text>

          {/* Node 1: P&L (Top) */}
          <g transform="translate(130, 0)">
            <rect x="0" y="0" width="140" height="28" rx="6" fill="#17151A" />
            <text x="70" y="18" fill="#FFFFFF" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">
              BÁO CÁO P&L (KẾT QUẢ KD)
            </text>
          </g>

          {/* Node 2: Balance Sheet (Bottom Left) */}
          <g transform="translate(0, 96)">
            <rect x="0" y="0" width="130" height="28" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
            <text x="65" y="18" fill="#17151A" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">
              BẢNG CĐKT (BALANCE SHEET)
            </text>
          </g>

          {/* Node 3: Cash Flow (Bottom Right) */}
          <g transform="translate(270, 96)">
            <rect x="0" y="0" width="130" height="28" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
            <text x="65" y="18" fill="#17151A" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">
              LƯU CHUYỂN TIỀN TỆ (CASH FLOW)
            </text>
          </g>

          {/* Audit Verification Stamp */}
          <rect x="155" y="116" width="90" height="18" rx="9" fill="#ECFDF5" stroke="#6EE7B7" strokeWidth="0.8" />
          <text x="200" y="128" fill="#047857" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">
            ĐỐI SOÁT 3 CHIỀU: 100%
          </text>
        </g>

        {/* Bottom 3 KPI Badges */}
        <g transform="translate(24, 206)">
          <line x1="0" y1="0" x2="432" y2="0" stroke="#E5E3DC" strokeWidth="1" />
          
          <rect x="0" y="12" width="136" height="66" rx="10" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
          <text x="16" y="32" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">THỜI GIAN BÓC TÁCH</text>
          <text x="16" y="58" fill="#059669" fontSize="20" fontFamily="system-ui, sans-serif" fontWeight="600">45 Giây</text>

          <rect x="148" y="12" width="136" height="66" rx="10" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
          <text x="164" y="32" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">DUNG LƯỢNG TÀI LIỆU</text>
          <text x="164" y="58" fill="#17151A" fontSize="20" fontFamily="system-ui, sans-serif" fontWeight="600">300+ Trang</text>

          <rect x="296" y="12" width="136" height="66" rx="10" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
          <text x="312" y="32" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">TIẾT KIỆM THỜI GIAN</text>
          <text x="312" y="58" fill="#0284C7" fontSize="20" fontFamily="system-ui, sans-serif" fontWeight="600">-80%</text>
        </g>
      </svg>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 5. Vinhomes Real Estate Sales Enablement (300 Brokers, 1.5s Response)
// ---------------------------------------------------------------------------
function VinhomesSalesMeshSvgVisual({ compact, className = '' }: { compact?: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full min-h-[200px] select-none bg-[#F9F9F7] ${className}`}>
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block">
        <defs>
          <pattern id="vh-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#ECEAE4" strokeWidth="0.8" />
          </pattern>
        </defs>

        <rect width="480" height="300" fill="#F9F9F7" />
        <rect width="480" height="300" fill="url(#vh-grid)" opacity="0.7" />

        {/* Top Header Bar */}
        <line x1="24" y1="46" x2="456" y2="46" stroke="#E5E3DC" strokeWidth="1" />
        <circle cx="32" cy="28" r="4" fill="#EAB308" />
        <text x="44" y="32" fill="#17151A" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600" letterSpacing="0.05em">
          AI SALES CO-PILOT · BẢNG HÀNG THỜI GIAN THỰC
        </text>
        <rect x="346" y="18" width="110" height="20" rx="10" fill="#FEF9C3" stroke="#FDE047" strokeWidth="0.8" />
        <text x="401" y="32" fill="#854D0E" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">
          300 SALES AGENTS
        </text>

        {/* Center: Inventory Grid & Real-Time Query Dialogue */}
        <g transform="translate(36, 62)">
          {/* Left: Unit Inventory Matrix (Building Stacking Plan) */}
          <g transform="translate(0, 0)">
            <rect x="0" y="0" width="170" height="126" rx="8" fill="#FFFFFF" stroke="#E2E0D8" strokeWidth="1" />
            <text x="12" y="18" fill="#76747E" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="600">BẢNG HÀNG PHÂN TẦNG</text>

            {/* Matrix Units */}
            <g transform="translate(12, 28)">
              {/* Row 1 */}
              <rect x="0" y="0" width="32" height="20" rx="4" fill="#F0EFEA" stroke="#D8D6CE" />
              <text x="16" y="13" fill="#76747E" fontSize="8" fontFamily="system-ui, sans-serif" textAnchor="middle">1501</text>
              <rect x="38" y="0" width="32" height="20" rx="4" fill="#FAF5FF" stroke="#EDE9FE" />
              <text x="54" y="13" fill="#7000FF" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">1502</text>
              <rect x="76" y="0" width="32" height="20" rx="4" fill="#F0EFEA" stroke="#D8D6CE" />
              <text x="92" y="13" fill="#76747E" fontSize="8" fontFamily="system-ui, sans-serif" textAnchor="middle">1503</text>
              <rect x="114" y="0" width="32" height="20" rx="4" fill="#17151A" />
              <text x="130" y="13" fill="#FFFFFF" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">1504</text>

              {/* Row 2 */}
              <rect x="0" y="26" width="32" height="20" rx="4" fill="#FAF5FF" stroke="#EDE9FE" />
              <text x="16" y="39" fill="#7000FF" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">1401</text>
              <rect x="38" y="26" width="32" height="20" rx="4" fill="#F0EFEA" stroke="#D8D6CE" />
              <text x="54" y="39" fill="#76747E" fontSize="8" fontFamily="system-ui, sans-serif" textAnchor="middle">1402</text>
              <rect x="76" y="26" width="32" height="20" rx="4" fill="#17151A" />
              <text x="92" y="39" fill="#FFFFFF" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">1403</text>
              <rect x="114" y="26" width="32" height="20" rx="4" fill="#FAF5FF" stroke="#EDE9FE" />
              <text x="130" y="39" fill="#7000FF" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">1404</text>

              {/* Row 3 */}
              <rect x="0" y="52" width="32" height="20" rx="4" fill="#17151A" />
              <text x="16" y="65" fill="#FFFFFF" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">1201</text>
              <rect x="38" y="52" width="32" height="20" rx="4" fill="#FAF5FF" stroke="#EDE9FE" />
              <text x="54" y="65" fill="#7000FF" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">1202</text>
              <rect x="76" y="52" width="32" height="20" rx="4" fill="#FAF5FF" stroke="#EDE9FE" />
              <text x="92" y="65" fill="#7000FF" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">1203</text>
              <rect x="114" y="52" width="32" height="20" rx="4" fill="#F0EFEA" stroke="#D8D6CE" />
              <text x="130" y="65" fill="#76747E" fontSize="8" fontFamily="system-ui, sans-serif" textAnchor="middle">1204</text>
            </g>

            <text x="12" y="116" fill="#A1A0A8" fontSize="7" fontFamily="system-ui, sans-serif">■ Đã cọc  □ Mở bán  ■ Giữ chỗ</text>
          </g>

          {/* Right: AI Vector Dialogue Card */}
          <g transform="translate(186, 0)">
            <rect x="0" y="0" width="222" height="126" rx="8" fill="#FFFFFF" stroke="#E2E0D8" strokeWidth="1" />
            
            {/* Sales Question Bubble */}
            <rect x="12" y="14" width="198" height="34" rx="6" fill="#F8F8F6" stroke="#E5E3DC" />
            <text x="20" y="28" fill="#76747E" fontSize="8" fontFamily="system-ui, sans-serif">Môi giới hỏi (Zalo/App):</text>
            <text x="20" y="41" fill="#17151A" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">"Căn 2PN hướng Đông Nam S2 còn không?"</text>

            {/* AI Real-time Response Bubble */}
            <rect x="12" y="58" width="198" height="54" rx="6" fill="#FAF5FF" stroke="#EDE9FE" />
            <text x="20" y="72" fill="#7000FF" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="600">AI Co-Pilot (1.2 Giây):</text>
            <text x="20" y="86" fill="#17151A" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="600">"Còn căn S2.1502 · Chiết khấu 8.5%"</text>
            <text x="20" y="100" fill="#76747E" fontSize="8" fontFamily="system-ui, sans-serif">Chính sách quà tặng & tiến độ thanh toán gửi kèm</text>
          </g>
        </g>

        {/* Bottom 3 KPI Badges */}
        <g transform="translate(24, 206)">
          <line x1="0" y1="0" x2="432" y2="0" stroke="#E5E3DC" strokeWidth="1" />
          
          <rect x="0" y="12" width="136" height="66" rx="10" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
          <text x="16" y="32" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">TỐC ĐỘ PHẢN HỒI</text>
          <text x="16" y="58" fill="#059669" fontSize="20" fontFamily="system-ui, sans-serif" fontWeight="600">&lt; 1.5 Giây</text>

          <rect x="148" y="12" width="136" height="66" rx="10" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
          <text x="164" y="32" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">TỶ LỆ PHỤC VỤ</text>
          <text x="164" y="58" fill="#17151A" fontSize="20" fontFamily="system-ui, sans-serif" fontWeight="600">98% Lead</text>

          <rect x="296" y="12" width="136" height="66" rx="10" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
          <text x="312" y="32" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">TRA CỨU CHÍNH SÁCH</text>
          <text x="312" y="58" fill="#CA8A04" fontSize="18" fontFamily="system-ui, sans-serif" fontWeight="600">500+ Trang</text>
        </g>
      </svg>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 6. Dentsu RFP Pitch Deck Automation (International Proposal, 48h -> 4h)
// ---------------------------------------------------------------------------
function DentsuPitchDeckSvgVisual({ compact, className = '' }: { compact?: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full min-h-[200px] select-none bg-[#F9F9F7] ${className}`}>
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block">
        <defs>
          <pattern id="den-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#ECEAE4" strokeWidth="0.8" />
          </pattern>
        </defs>

        <rect width="480" height="300" fill="#F9F9F7" />
        <rect width="480" height="300" fill="url(#den-grid)" opacity="0.7" />

        {/* Top Header Bar */}
        <line x1="24" y1="46" x2="456" y2="46" stroke="#E5E3DC" strokeWidth="1" />
        <circle cx="32" cy="28" r="4" fill="#EC4899" />
        <text x="44" y="32" fill="#17151A" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600" letterSpacing="0.05em">
          RFP PITCH DECK AUTOMATION · AGENCY TOÀN CẦU
        </text>
        <rect x="352" y="18" width="104" height="20" rx="10" fill="#FDF2F8" stroke="#FBCFE8" strokeWidth="0.8" />
        <text x="404" y="32" fill="#BE185D" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">
          48H ➔ 4H DỰNG
        </text>

        {/* Center: Layered Deck Slides Architecture */}
        <g transform="translate(40, 64)">
          {/* Slide 4 (Back layer) */}
          <rect x="72" y="0" width="240" height="116" rx="8" fill="#F1F0EC" stroke="#D8D6CE" strokeWidth="1" />
          
          {/* Slide 3 (Mid-back) */}
          <rect x="48" y="10" width="240" height="116" rx="8" fill="#FFFFFF" stroke="#D8D6CE" strokeWidth="1" />
          <text x="64" y="32" fill="#9CA3AF" fontSize="8" fontFamily="system-ui, sans-serif">03 / MEDIA CHANNELS</text>

          {/* Slide 2 (Mid-front) */}
          <rect x="24" y="20" width="240" height="116" rx="8" fill="#FFFFFF" stroke="#D8D6CE" strokeWidth="1" />
          <text x="40" y="42" fill="#9CA3AF" fontSize="8" fontFamily="system-ui, sans-serif">02 / CULTURAL INSIGHT</text>

          {/* Slide 1 (Front Active Card) */}
          <rect x="0" y="30" width="240" height="116" rx="8" fill="#FAF5FF" stroke="#EDE9FE" strokeWidth="1.2" />
          <text x="16" y="52" fill="#7000FF" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="600">01 / CREATIVE STRATEGY</text>
          <text x="16" y="70" fill="#17151A" fontSize="12" fontFamily="system-ui, sans-serif" fontWeight="600">Proposal Deck RFP Sunext</text>
          
          {/* Mini elements on slide */}
          <rect x="16" y="82" width="120" height="6" rx="3" fill="#17151A" />
          <rect x="16" y="94" width="80" height="6" rx="3" fill="#A1A0A8" />
          <rect x="16" y="106" width="150" height="6" rx="3" fill="#D8D6CE" />

          {/* Turnaround Badge (Right) */}
          <g transform="translate(266, 20)">
            <rect x="0" y="0" width="134" height="96" rx="8" fill="#FFFFFF" stroke="#E5E3DC" strokeWidth="1" />
            <text x="14" y="22" fill="#76747E" fontSize="8" fontFamily="system-ui, sans-serif">TỐC ĐỘ DỰNG ĐỀ ÁN</text>
            <text x="14" y="50" fill="#17151A" fontSize="18" fontFamily="system-ui, sans-serif" fontWeight="700">48h → 4h</text>
            <rect x="14" y="64" width="106" height="18" rx="4" fill="#ECFDF5" stroke="#A7F3D0" />
            <text x="67" y="76" fill="#059669" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">
              GIẢM 92% THỜI GIAN
            </text>
          </g>
        </g>

        {/* Bottom 3 KPI Badges */}
        <g transform="translate(24, 206)">
          <line x1="0" y1="0" x2="432" y2="0" stroke="#E5E3DC" strokeWidth="1" />
          
          <rect x="0" y="12" width="136" height="66" rx="10" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
          <text x="16" y="32" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">TỐC ĐỘ NỘP THẦU</text>
          <text x="16" y="58" fill="#059669" fontSize="20" fontFamily="system-ui, sans-serif" fontWeight="600">+35% Deal</text>

          <rect x="148" y="12" width="136" height="66" rx="10" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
          <text x="164" y="32" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">THỜI GIAN HOÀN THIỆN</text>
          <text x="164" y="58" fill="#17151A" fontSize="18" fontFamily="system-ui, sans-serif" fontWeight="600">48h → 4h</text>

          <rect x="296" y="12" width="136" height="66" rx="10" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
          <text x="312" y="32" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">ĐỘ CHUẨN XÁC BRAND</text>
          <text x="312" y="58" fill="#BE185D" fontSize="18" fontFamily="system-ui, sans-serif" fontWeight="600">100% Khớp</text>
        </g>
      </svg>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 7. Phuong Truong An Automated Site Video (Drone & Construction, 2d -> 30m)
// ---------------------------------------------------------------------------
function PhuongTruongAnVideoSvgVisual({ compact, className = '' }: { compact?: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full min-h-[200px] select-none bg-[#F9F9F7] ${className}`}>
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block">
        <defs>
          <pattern id="pta-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#ECEAE4" strokeWidth="0.8" />
          </pattern>
        </defs>

        <rect width="480" height="300" fill="#F9F9F7" />
        <rect width="480" height="300" fill="url(#pta-grid)" opacity="0.7" />

        {/* Top Header Bar */}
        <line x1="24" y1="46" x2="456" y2="46" stroke="#E5E3DC" strokeWidth="1" />
        <circle cx="32" cy="28" r="4" fill="#EA580C" />
        <text x="44" y="32" fill="#17151A" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600" letterSpacing="0.05em">
          AUTOMATED VIDEO PIPELINE · BÁO CÁO TIẾN ĐỘ
        </text>
        <rect x="350" y="18" width="106" height="20" rx="10" fill="#FFEDD5" stroke="#FDBA74" strokeWidth="0.8" />
        <text x="403" y="32" fill="#C2410C" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">
          2 NGÀY ➔ 30P
        </text>

        {/* Center: Video Timeline & Drone Viewport Schema */}
        <g transform="translate(36, 62)">
          {/* Main Monitor / Timeline Box */}
          <rect x="0" y="0" width="408" height="128" rx="10" fill="#FFFFFF" stroke="#E2E0D8" strokeWidth="1" />

          {/* Left: Drone Camera Viewport */}
          <g transform="translate(14, 14)">
            <rect x="0" y="0" width="150" height="100" rx="6" fill="#F8F8F6" stroke="#D8D6CE" />
            {/* Horizon & Construction crane wireframe */}
            <line x1="10" y1="65" x2="140" y2="65" stroke="#A1A0A8" strokeWidth="1" />
            <line x1="40" y1="65" x2="40" y2="20" stroke="#17151A" strokeWidth="1.5" />
            <line x1="40" y1="20" x2="110" y2="20" stroke="#17151A" strokeWidth="1.2" />
            <line x1="40" y1="25" x2="90" y2="65" stroke="#CBD5E1" strokeWidth="0.8" />

            {/* Rec Tag & Crosshairs */}
            <circle cx="14" cy="12" r="3" fill="#DC2626" />
            <text x="22" y="15" fill="#DC2626" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="700">REC 4K</text>
            <text x="138" y="92" fill="#76747E" fontSize="7" fontFamily="system-ui, sans-serif" textAnchor="end">SITE #04 · FLYCAM</text>
          </g>

          {/* Right: Automated Multi-Track Timeline */}
          <g transform="translate(176, 14)">
            <text x="0" y="10" fill="#76747E" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="600">MULTI-TRACK AI EDITING</text>
            
            {/* Track 1: Video Clips */}
            <rect x="0" y="18" width="218" height="22" rx="4" fill="#F0EFEA" stroke="#E5E3DC" />
            <rect x="2" y="20" width="65" height="18" rx="3" fill="#17151A" />
            <text x="34" y="32" fill="#FFFFFF" fontSize="7" fontFamily="system-ui, sans-serif" textAnchor="middle">Shot 1 (Flycam)</text>
            <rect x="70" y="20" width="75" height="18" rx="3" fill="#FAF5FF" stroke="#EDE9FE" />
            <text x="107" y="32" fill="#7000FF" fontSize="7" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">Shot 2 (Cọc Móng)</text>
            <rect x="148" y="20" width="68" height="18" rx="3" fill="#17151A" />
            <text x="182" y="32" fill="#FFFFFF" fontSize="7" fontFamily="system-ui, sans-serif" textAnchor="middle">Shot 3 (Toàn Cảnh)</text>

            {/* Track 2: Audio Waveform */}
            <rect x="0" y="46" width="218" height="22" rx="4" fill="#F0EFEA" stroke="#E5E3DC" />
            <path d="M 10 57 L 20 52 L 30 62 L 40 54 L 50 60 L 60 51 L 70 63 L 80 55 L 90 59 L 100 53 L 110 61 L 120 54 L 130 60 L 140 52 L 150 62 L 160 55 L 170 59 L 180 53 L 190 61 L 200 57" stroke="#EA580C" strokeWidth="1.2" fill="none" />
            <text x="10" y="63" fill="#76747E" fontSize="6" fontFamily="system-ui, sans-serif">VOICE AI</text>

            {/* Track 3: Subtitles & Data HUD */}
            <rect x="0" y="74" width="218" height="22" rx="4" fill="#ECFDF5" stroke="#A7F3D0" />
            <text x="10" y="88" fill="#059669" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="600">Auto-Sync Subtitles &amp; KPI Overlay</text>
          </g>
        </g>

        {/* Bottom 3 KPI Badges */}
        <g transform="translate(24, 206)">
          <line x1="0" y1="0" x2="432" y2="0" stroke="#E5E3DC" strokeWidth="1" />
          
          <rect x="0" y="12" width="136" height="66" rx="10" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
          <text x="16" y="32" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">THỜI GIAN DỰNG VIDEO</text>
          <text x="16" y="58" fill="#059669" fontSize="20" fontFamily="system-ui, sans-serif" fontWeight="600">30 Phút</text>

          <rect x="148" y="12" width="136" height="66" rx="10" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
          <text x="164" y="32" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">TIẾT KIỆM CHI PHÍ</text>
          <text x="164" y="58" fill="#17151A" fontSize="20" fontFamily="system-ui, sans-serif" fontWeight="600">-65%</text>

          <rect x="296" y="12" width="136" height="66" rx="10" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
          <text x="312" y="32" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">CẬP NHẬT TIẾN ĐỘ</text>
          <text x="312" y="58" fill="#EA580C" fontSize="18" fontFamily="system-ui, sans-serif" fontWeight="600">Real-time</text>
        </g>
      </svg>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 8. FPTU Faculty Swarm & 10,000-Attendee Event AI Architecture
// ---------------------------------------------------------------------------
function FptuFacultySwarmSvgVisual({ compact, className = '' }: { compact?: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full min-h-[200px] select-none bg-[#F9F9F7] ${className}`}>
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block">
        <defs>
          <pattern id="fp-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#ECEAE4" strokeWidth="0.8" />
          </pattern>
        </defs>

        <rect width="480" height="300" fill="#F9F9F7" />
        <rect width="480" height="300" fill="url(#fp-grid)" opacity="0.7" />

        {/* Top Header Bar */}
        <line x1="24" y1="46" x2="456" y2="46" stroke="#E5E3DC" strokeWidth="1" />
        <circle cx="32" cy="28" r="4" fill="#F97316" />
        <text x="44" y="32" fill="#17151A" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600" letterSpacing="0.05em">
          EVENT AGENT SWARM · SỰ KIỆN 10.000 NGƯỜI
        </text>
        <rect x="350" y="18" width="106" height="20" rx="10" fill="#FFF7ED" stroke="#FFEDD5" strokeWidth="0.8" />
        <text x="403" y="32" fill="#C2410C" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">
          10.000 KHÁCH
        </text>

        {/* Center: Swarm Network Topology */}
        <g transform="translate(40, 60)">
          {/* Connecting Lines */}
          <line x1="200" y1="66" x2="70" y2="30" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="4 3" />
          <line x1="200" y1="66" x2="330" y2="30" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="4 3" />
          <line x1="200" y1="66" x2="70" y2="105" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="4 3" />
          <line x1="200" y1="66" x2="330" y2="105" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="4 3" />

          {/* Central Orchestrator Node */}
          <circle cx="200" cy="66" r="34" fill="#17151A" />
          <circle cx="200" cy="66" r="38" stroke="#7000FF" strokeWidth="1.5" fill="none" />
          <text x="200" y="63" fill="#FFFFFF" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle">CENTRAL</text>
          <text x="200" y="75" fill="#F97316" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">ORCHESTRATOR</text>

          {/* Satellite Agent 1: Check-in */}
          <g transform="translate(10, 16)">
            <rect x="0" y="0" width="120" height="30" rx="6" fill="#FFFFFF" stroke="#D8D6CE" strokeWidth="1" />
            <circle cx="14" cy="15" r="4" fill="#10B981" />
            <text x="24" y="19" fill="#17151A" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="600">Agent 1: Check-in QR</text>
          </g>

          {/* Satellite Agent 2: FAQ & Helpdesk */}
          <g transform="translate(270, 16)">
            <rect x="0" y="0" width="120" height="30" rx="6" fill="#FAF5FF" stroke="#EDE9FE" strokeWidth="1" />
            <circle cx="14" cy="15" r="4" fill="#7000FF" />
            <text x="24" y="19" fill="#17151A" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="600">Agent 2: FAQ &amp; Giải Đáp</text>
          </g>

          {/* Satellite Agent 3: Schedule Dispatcher */}
          <g transform="translate(10, 90)">
            <rect x="0" y="0" width="120" height="30" rx="6" fill="#FFFFFF" stroke="#D8D6CE" strokeWidth="1" />
            <circle cx="14" cy="15" r="4" fill="#0284C7" />
            <text x="24" y="19" fill="#17151A" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="600">Agent 3: Điều Phối Tour</text>
          </g>

          {/* Satellite Agent 4: Certificate & Survey */}
          <g transform="translate(270, 90)">
            <rect x="0" y="0" width="120" height="30" rx="6" fill="#FFFFFF" stroke="#D8D6CE" strokeWidth="1" />
            <circle cx="14" cy="15" r="4" fill="#8B5CF6" />
            <text x="24" y="19" fill="#17151A" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="600">Agent 4: Khảo Sát &amp; Cert</text>
          </g>
        </g>

        {/* Bottom 3 KPI Badges */}
        <g transform="translate(24, 206)">
          <line x1="0" y1="0" x2="432" y2="0" stroke="#E5E3DC" strokeWidth="1" />
          
          <rect x="0" y="12" width="136" height="66" rx="10" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
          <text x="16" y="32" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">GIẢM TẢI BAN TỔ CHỨC</text>
          <text x="16" y="58" fill="#059669" fontSize="20" fontFamily="system-ui, sans-serif" fontWeight="600">-85%</text>

          <rect x="148" y="12" width="136" height="66" rx="10" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
          <text x="164" y="32" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">THỜI GIAN PHẢN HỒI</text>
          <text x="164" y="58" fill="#17151A" fontSize="20" fontFamily="system-ui, sans-serif" fontWeight="600">&lt; 2 Giây</text>

          <rect x="296" y="12" width="136" height="66" rx="10" fill="#FFFFFF" stroke="#EAE8E1" strokeWidth="1" />
          <text x="312" y="32" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="500">ĐỘ ỔN ĐỊNH SỰ KIỆN</text>
          <text x="312" y="58" fill="#F97316" fontSize="18" fontFamily="system-ui, sans-serif" fontWeight="600">99.9% Uptime</text>
        </g>
      </svg>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Generic Fallback Telemetry
// ---------------------------------------------------------------------------
function GenericDataSvgVisual({ slug, compact, className = '' }: { slug: string; compact?: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full min-h-[200px] select-none bg-[#F9F9F7] ${className}`}>
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block">
        <rect width="480" height="300" fill="#F9F9F7" />
        <circle cx="240" cy="130" r="40" fill="#FAF5FF" stroke="#EDE9FE" strokeWidth="1.5" />
        <text x="240" y="134" fill="#17151A" fontSize="12" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="middle">
          SUNEXT CASE STUDY
        </text>
        <text x="240" y="150" fill="#76747E" fontSize="9" fontFamily="system-ui, sans-serif" textAnchor="middle">
          {slug}
        </text>
      </svg>
    </div>
  );
}
