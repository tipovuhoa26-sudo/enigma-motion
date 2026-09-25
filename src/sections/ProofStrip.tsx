'use client';

import React from 'react';
import Image from 'next/image';

const PARTNER_LOGOS = [
  { name: 'Vinhomes (Vingroup)', src: '/logos/vinhomes.png', width: 115, height: 36 },
  { name: 'Ngân hàng BIDV', src: '/logos/bidv.png', width: 105, height: 34 },
  { name: 'VNPT VinaPhone', src: '/logos/vnpt_vinaphone.png', width: 120, height: 36 },
  { name: 'Dentsu Sports & Creative', src: '/logos/dentsu.png', width: 110, height: 32 },
  { name: 'Đại học FPT', src: '/logos/fptu.png', width: 110, height: 34 },
  { name: 'Tập đoàn Hòa Phát', src: '/logos/hoa_phat.png', width: 110, height: 32 },
  { name: 'Vietcap Securities', src: '/logos/vietcap.png', width: 100, height: 32 },
  { name: 'Carlsberg Vietnam', src: '/logos/carlsberg.png', width: 105, height: 34 },
  { name: 'Golden Gate Group', src: '/logos/golden_gate.png', width: 110, height: 32 },
  { name: 'Trung Sơn Pharma', src: '/logos/trung_son.png', width: 115, height: 34 },
];

export function ProofStrip() {
  return (
    <section
      id="proof-strip"
      className="w-full py-8 sm:py-10 px-6 md:px-12 border-b border-[#EAE6DF] bg-[#FAF8F5] relative z-20"
      aria-label="Social Proof & Enterprise Engagements"
    >
      <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-6">
        {/* Top Header: Confident Trust Label + Concrete Numbers */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-black/5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
            <span className="text-xs sm:text-[13px] font-mono uppercase tracking-[0.14em] text-[#0A0A0A] font-semibold">
              ĐÃ ĐỒNG HÀNH CÙNG
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-[13.5px] font-mono text-[#0A0A0A]">
            <span className="font-bold text-[#EA580C]">8</span>
            <span className="text-[#52525B]">case studies</span>
            <span className="text-[#A1A1AA]">·</span>
            <span className="font-bold text-[#581C87]">40+</span>
            <span className="text-[#52525B]">engagements</span>
            <span className="text-[#A1A1AA]">·</span>
            <span className="font-bold text-[#0A0A0A]">45</span>
            <span className="text-[#52525B]">tổ chức</span>
          </div>
        </div>

        {/* Clear Monochrome Logos Stream with Comfortable Contrast */}
        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee-slow flex items-center gap-12 sm:gap-16 py-1">
            {/* Loop 1 */}
            {PARTNER_LOGOS.map((logo, idx) => (
              <div
                key={`proof-logo-1-${idx}`}
                className="shrink-0 flex items-center justify-center grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300 h-9 px-2"
                title={logo.name}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-7 sm:max-h-8 w-auto object-contain select-none pointer-events-none"
                />
              </div>
            ))}

            {/* Loop 2 */}
            {PARTNER_LOGOS.map((logo, idx) => (
              <div
                key={`proof-logo-2-${idx}`}
                className="shrink-0 flex items-center justify-center grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300 h-9 px-2"
                title={logo.name}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-7 sm:max-h-8 w-auto object-contain select-none pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
