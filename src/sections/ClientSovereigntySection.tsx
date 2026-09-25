'use client';

import React from 'react';

export function ClientSovereigntySection() {
  return (
    <section
      id="client-sovereignty"
      className="relative w-full py-24 sm:py-32 px-6 md:px-12 bg-[#0B0910] text-white border-t border-[#1E192B] overflow-hidden"
      aria-label="Tiêu chuẩn bàn giao tự chủ"
    >
      <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-16 sm:gap-20 relative z-10">
        
        {/* Core Statement Headline */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-light tracking-tight text-white leading-[1.12]">
            Tự chủ không phải điểm kết thúc.<br />
            <span className="font-normal text-[#E2E8F0]">Đó là tiêu chuẩn bàn giao.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] font-light mt-4 max-w-2xl leading-relaxed">
            Sunext chuyển giao toàn bộ mã nguồn, tài liệu vận hành và năng lực để đội ngũ nội bộ làm chủ 100% hệ thống.
          </p>
        </div>

        {/* ==================================================================== */}
        {/* NETWORK TRANSITION VISUAL: SUNEXT -> CLIENT TEAM NUCLEUS             */}
        {/* ==================================================================== */}
        <div className="w-full flex items-center justify-center py-6 select-none">
          <svg
            viewBox="0 0 840 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[840px] h-auto overflow-visible"
          >
            {/* --- PANEL LEFT: TRƯỚC (SUNEXT Ở TÂM) --- */}
            <g transform="translate(180, 140)">
              {/* Context Label */}
              <text x="0" y="-105" textAnchor="middle" fill="#71717A" fontSize="11" fontFamily="monospace" letterSpacing="0.14em">
                TRƯỚC
              </text>

              {/* Faint Orbit Ring */}
              <circle cx="0" cy="0" r="70" fill="none" stroke="#27272A" strokeWidth="1" strokeDasharray="3 4" />

              {/* Orbiting Satellite Nodes */}
              {[
                { x: 0, y: -70 },
                { x: 60, y: 35 },
                { x: -60, y: 35 },
              ].map((pt, i) => (
                <g key={`before-sat-${i}`}>
                  <line x1="0" y1="0" x2={pt.x} y2={pt.y} stroke="#3F3F46" strokeWidth="1" strokeDasharray="2 3" />
                  <circle cx={pt.x} cy={pt.y} r="5" fill="#18181B" stroke="#71717A" strokeWidth="1.2" />
                </g>
              ))}

              {/* Central Sunext Core */}
              <circle cx="0" cy="0" r="32" fill="#18181B" stroke="#EA580C" strokeWidth="2" />
              <circle cx="0" cy="0" r="8" fill="#EA580C" />
              <text x="0" y="48" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">
                SUNEXT
              </text>
            </g>

            {/* --- TRANSITION BEAM: MŨI TÊN CHUYỂN GIAO --- */}
            <g transform="translate(420, 140)">
              <line x1="-60" y1="0" x2="60" y2="0" stroke="#3F3F46" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 50 -5 L 60 0 L 50 5" stroke="#71717A" strokeWidth="1.5" fill="none" />
              <text x="0" y="-14" textAnchor="middle" fill="#A1A1AA" fontSize="10" fontFamily="sans-serif" fontStyle="italic">
                chuyển giao
              </text>
            </g>

            {/* --- PANEL RIGHT: SAU (ĐỘI NGŨ DOANH NGHIỆP Ở TÂM) --- */}
            <g transform="translate(660, 140)">
              {/* Context Label */}
              <text x="0" y="-105" textAnchor="middle" fill="#A1A1AA" fontSize="11" fontFamily="monospace" letterSpacing="0.14em">
                SAU
              </text>

              {/* Faint Orbit Ring */}
              <circle cx="0" cy="0" r="70" fill="none" stroke="#3F3F46" strokeWidth="1" strokeDasharray="3 4" />

              {/* Orbiting Internal Team Nodes */}
              {[
                { x: 0, y: -70 },
                { x: 67, y: -22 },
                { x: 41, y: 57 },
                { x: -41, y: 57 },
                { x: -67, y: -22 },
              ].map((pt, i) => (
                <g key={`after-team-${i}`}>
                  <line x1="0" y1="0" x2={pt.x} y2={pt.y} stroke="#52525B" strokeWidth="1" />
                  <circle cx={pt.x} cy={pt.y} r="5" fill="#27272A" stroke="#E4E4E7" strokeWidth="1.2" />
                </g>
              ))}

              {/* Central Client Enterprise Core */}
              <circle cx="0" cy="0" r="34" fill="#18181B" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="0" cy="0" r="8" fill="#FFFFFF" />
              <text x="0" y="48" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="monospace" fontWeight="700" letterSpacing="0.06em">
                ĐỘI NGŨ DOANH NGHIỆP
              </text>

              {/* Sunext External Advisor Node on the side */}
              <g transform="translate(-130, 45)">
                <circle cx="0" cy="0" r="16" fill="#120F1D" stroke="#7000FF" strokeWidth="1.2" strokeDasharray="2 3" />
                <circle cx="0" cy="0" r="4" fill="#7000FF" />
                <text x="0" y="28" textAnchor="middle" fill="#A1A1AA" fontSize="9.5" fontFamily="monospace">
                  SUNEXT ○
                </text>
              </g>
            </g>
          </svg>
        </div>

        {/* ==================================================================== */}
        {/* 3 CLEAN PROOF STATEMENTS ONLY (NO CHECKLIST OVERLOAD)                 */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-[#1E192B]">
          <div className="border-l border-white/20 pl-5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] block mb-1">
              01 TÀI SẢN
            </span>
            <span className="text-base sm:text-lg font-light text-white block">
              Mã nguồn &amp; quyền quản trị
            </span>
            <p className="text-xs sm:text-sm text-[#71717A] mt-2 font-light">
              Doanh nghiệp sở hữu toàn bộ code, cấu hình và dữ liệu, không vendor lock-in.
            </p>
          </div>

          <div className="border-l border-white/20 pl-5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] block mb-1">
              02 QUY TRÌNH
            </span>
            <span className="text-base sm:text-lg font-light text-white block">
              SOP &amp; tài liệu vận hành
            </span>
            <p className="text-xs sm:text-sm text-[#71717A] mt-2 font-light">
              Bộ runbook tiêu chuẩn giúp nhân sự các cấp tự chạy và xử lý ngoại lệ hàng ngày.
            </p>
          </div>

          <div className="border-l border-white/20 pl-5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] block mb-1">
              03 CON NGƯỜI
            </span>
            <span className="text-base sm:text-lg font-light text-white block">
              Đội ngũ tiếp nhận năng lực
            </span>
            <p className="text-xs sm:text-sm text-[#71717A] mt-2 font-light">
              Đào tạo thực chiến tại hiện trường để đội ngũ tự bảo trì và mở rộng thêm nghiệp vụ.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
