'use client';

import React from 'react';

export function ClientSovereigntySection() {
  return (
    <section
      id="client-sovereignty"
      className="relative w-full py-28 sm:py-36 px-6 md:px-12 lg:px-16 bg-[#0B0910] text-white border-t border-[#1E192B] overflow-hidden"
      aria-label="Tiêu chuẩn bàn giao tự chủ"
    >
      {/* Background Deep Glow Atmosphere */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[450px] pointer-events-none -z-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(112, 0, 255, 0.25) 0%, rgba(234, 88, 12, 0.08) 55%, transparent 75%)',
          filter: 'blur(90px)',
        }}
      />

      <div className="max-w-[1440px] w-full mx-auto flex flex-col gap-16 sm:gap-24 relative z-10">
        
        {/* Core Statement Headline */}
        <div className="max-w-4xl">
          <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#EA580C] font-semibold block mb-3">
            CHUYỂN GIAO TOÀN DIỆN
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-light tracking-tight text-white leading-[1.12]">
            Tự chủ không phải điểm kết thúc.<br className="hidden sm:inline" />{' '}
            <span className="font-normal text-[#E2E8F0]">Đó là tiêu chuẩn bàn giao.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] font-light mt-5 max-w-2xl leading-relaxed">
            Sunext chuyển giao toàn bộ mã nguồn, tài liệu vận hành và năng lực để đội ngũ nội bộ làm chủ 100% hệ thống.
          </p>
        </div>

        {/* ==================================================================== */}
        {/* EXPANSIVE NETWORK SHIFT: HERO NETWORK RETURNS (SUNEXT -> CLIENT CORE) */}
        {/* ==================================================================== */}
        <div className="w-full flex items-center justify-center py-4 select-none">
          <svg
            viewBox="0 0 1080 340"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[1080px] h-auto overflow-visible"
          >
            <defs>
              {/* Beam Gradient */}
              <linearGradient id="sovereignty-bridge-beam" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7000FF" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#A855F7" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
              </linearGradient>

              {/* Client Core Glow Filter */}
              <filter id="client-core-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* --- PANEL LEFT: TRƯỚC (SUNEXT Ở TÂM BAN ĐẦU) --- */}
            <g transform="translate(230, 170)">
              {/* Context Label */}
              <text x="0" y="-120" textAnchor="middle" fill="#71717A" fontSize="12" fontFamily="monospace" letterSpacing="0.16em">
                GIAI ĐOẠN KHỞI TẠO
              </text>

              {/* Faint Outer Ring */}
              <circle cx="0" cy="0" r="90" fill="none" stroke="#27272A" strokeWidth="1" strokeDasharray="3 4" opacity="0.6" />

              {/* Satellites with Bézier Links */}
              {[
                { x: 0, y: -90, name: 'Khảo sát' },
                { x: 80, y: -45, name: 'Quy trình' },
                { x: 80, y: 45, name: 'Dữ liệu' },
                { x: -80, y: 45, name: 'Kiến trúc' },
                { x: -80, y: -45, name: 'Bảo mật' },
              ].map((pt, i) => (
                <g key={`init-sat-${i}`}>
                  <line x1="0" y1="0" x2={pt.x} y2={pt.y} stroke="#3F3F46" strokeWidth="1" strokeDasharray="2 3" opacity="0.7" />
                  <circle cx={pt.x} cy={pt.y} r="5" fill="#18181B" stroke="#71717A" strokeWidth="1.2" />
                </g>
              ))}

              {/* Sunext Modest Core Node (Dimmed into advisor state) */}
              <circle cx="0" cy="0" r="32" fill="#141120" stroke="#7000FF" strokeWidth="1.8" strokeDasharray="4 3" />
              <circle cx="0" cy="0" r="7" fill="#7000FF" opacity="0.8" />
              <text x="0" y="48" textAnchor="middle" fill="#A1A1AA" fontSize="11" fontFamily="monospace" fontWeight="600" letterSpacing="0.08em">
                SUNEXT ○
              </text>
              <text x="0" y="66" textAnchor="middle" fill="#71717A" fontSize="9.5" fontFamily="sans-serif">
                Cố vấn &amp; R&amp;D
              </text>
            </g>

            {/* --- LUMINOUS CENTER BRIDGE: TIA CHUYỂN GIAO TỰ CHỦ --- */}
            <g transform="translate(540, 170)">
              {/* Connecting Laser Channel */}
              <line x1="-190" y1="0" x2="180" y2="0" stroke="url(#sovereignty-bridge-beam)" strokeWidth="2" strokeDasharray="6 4" />
              <line x1="-190" y1="0" x2="180" y2="0" stroke="#7000FF" strokeWidth="1" opacity="0.3" />

              {/* Traveling Pulse Bead */}
              <circle r="4" fill="#FFFFFF">
                <animateMotion
                  path="M -190 0 L 180 0"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>

              <path d="M 170 -6 L 180 0 L 170 6" stroke="#FFFFFF" strokeWidth="2" fill="none" />

              {/* Process Label */}
              <g transform="translate(0, -20)">
                <rect x="-65" y="-12" width="130" height="24" rx="4" fill="#130F24" stroke="#3F3F46" strokeWidth="1" />
                <text x="0" y="4" textAnchor="middle" fill="#C084FC" fontSize="10.5" fontFamily="monospace" fontWeight="600" letterSpacing="0.1em">
                  CHUYỂN GIAO 100%
                </text>
              </g>
            </g>

            {/* --- PANEL RIGHT: SAU BÀN GIAO (ĐỘI NGŨ DOANH NGHIỆP TRỞ THÀNH HẠT NHÂN RỰC RỠ) --- */}
            <g transform="translate(850, 170)">
              {/* Context Label */}
              <text x="0" y="-120" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontFamily="monospace" fontWeight="700" letterSpacing="0.16em">
                VẬN HÀNH TỰ CHỦ
              </text>

              {/* Radiant Outer Orbit Rings */}
              <circle cx="0" cy="0" r="95" fill="none" stroke="#52525B" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.8" />
              <circle cx="0" cy="0" r="120" fill="none" stroke="#3F3F46" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.4" />

              {/* Internal Autonomous Capability Nodes */}
              {[
                { x: 0, y: -95, label: 'Làm chủ code' },
                { x: 90, y: -30, label: 'Tự chạy SOP' },
                { x: 55, y: 78, label: 'Quản trị VPC' },
                { x: -55, y: 78, label: 'Mở rộng nghiệp vụ' },
                { x: -90, y: -30, label: 'Đối soát dữ liệu' },
              ].map((pt, i) => (
                <g key={`auto-sat-${i}`}>
                  <line x1="0" y1="0" x2={pt.x} y2={pt.y} stroke="#8B5CF6" strokeWidth="1.4" opacity="0.6" />
                  <circle cx={pt.x} cy={pt.y} r="6" fill="#1F1B2E" stroke="#FFFFFF" strokeWidth="1.8" />
                  <text
                    x={pt.x > 0 ? pt.x + 12 : pt.x < 0 ? pt.x - 12 : pt.x}
                    y={pt.y > 0 ? pt.y + 14 : pt.y - 10}
                    textAnchor={pt.x > 0 ? 'start' : pt.x < 0 ? 'end' : 'middle'}
                    fill="#D4D4D8"
                    fontSize="9.5"
                    fontFamily="monospace"
                  >
                    {pt.label}
                  </text>
                </g>
              ))}

              {/* DOMINANT RADIANT CLIENT ENTERPRISE CORE (The True Payoff) */}
              <circle cx="0" cy="0" r="44" fill="#18181B" stroke="#FFFFFF" strokeWidth="2.5" filter="url(#client-core-glow)" />
              <circle cx="0" cy="0" r="12" fill="#FFFFFF" />
              <text x="0" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontFamily="monospace" fontWeight="800" letterSpacing="0.08em">
                ĐỘI NGŨ DOANH NGHIỆP
              </text>
              <text x="0" y="78" textAnchor="middle" fill="#C084FC" fontSize="10" fontFamily="sans-serif" fontWeight="600">
                Làm chủ hoàn toàn hệ thống
              </text>
            </g>
          </svg>
        </div>

        {/* ==================================================================== */}
        {/* 3 CONCRETE PROOF PILLARS (NO CHECKLIST OVERLOAD)                      */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-[#1E192B]">
          <div className="border-l-2 border-[#7000FF] pl-6">
            <span className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] block mb-1">
              01 TÀI SẢN
            </span>
            <span className="text-lg sm:text-xl font-light text-white block">
              Mã nguồn &amp; quyền quản trị
            </span>
            <p className="text-sm text-[#94A3B8] mt-2 font-light leading-relaxed">
              Doanh nghiệp sở hữu toàn bộ code, cấu hình và dữ liệu trên hạ tầng riêng, không có bất kỳ vendor lock-in nào.
            </p>
          </div>

          <div className="border-l-2 border-[#7000FF] pl-6">
            <span className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] block mb-1">
              02 QUY TRÌNH
            </span>
            <span className="text-lg sm:text-xl font-light text-white block">
              SOP &amp; tài liệu vận hành
            </span>
            <p className="text-sm text-[#94A3B8] mt-2 font-light leading-relaxed">
              Bộ runbook tiêu chuẩn từng bước giúp nhân sự các cấp tự chạy, xử lý ngoại lệ và bảo trì hệ thống hàng ngày.
            </p>
          </div>

          <div className="border-l-2 border-[#EA580C] pl-6">
            <span className="text-xs font-mono uppercase tracking-wider text-[#EA580C] block mb-1">
              03 CON NGƯỜI
            </span>
            <span className="text-lg sm:text-xl font-light text-white block">
              Đội ngũ tiếp nhận năng lực
            </span>
            <p className="text-sm text-[#94A3B8] mt-2 font-light leading-relaxed">
              Đào tạo thực chiến tại hiện trường theo phương pháp kèm cặp để đội ngũ tự tin vận hành và mở rộng thêm nghiệp vụ.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
