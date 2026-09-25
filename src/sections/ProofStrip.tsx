'use client';

import React from 'react';
import Image from 'next/image';

const PARTNER_LOGOS = [
  { name: 'Vinhomes (Vingroup)', src: '/logos/vinhomes.png', width: 110, height: 34, opacity: 'opacity-50' },
  { name: 'Ngân hàng BIDV', src: '/logos/bidv.png', width: 100, height: 32, opacity: 'opacity-65' },
  { name: 'VNPT VinaPhone', src: '/logos/vnpt_vinaphone.png', width: 115, height: 34, opacity: 'opacity-55' },
  { name: 'Dentsu Sports & Creative', src: '/logos/dentsu.png', width: 105, height: 30, opacity: 'opacity-45' },
  { name: 'Đại học FPT', src: '/logos/fptu.png', width: 105, height: 32, opacity: 'opacity-55' },
  { name: 'Tập đoàn Hòa Phát', src: '/logos/hoa_phat.png', width: 105, height: 30, opacity: 'opacity-60' },
  { name: 'Vietcap Securities', src: '/logos/vietcap.png', width: 95, height: 30, opacity: 'opacity-50' },
  { name: 'Carlsberg Vietnam', src: '/logos/carlsberg.png', width: 100, height: 32, opacity: 'opacity-50' },
  { name: 'Golden Gate Group', src: '/logos/golden_gate.png', width: 105, height: 30, opacity: 'opacity-50' },
  { name: 'Trung Sơn Pharma', src: '/logos/trung_son.png', width: 110, height: 32, opacity: 'opacity-55' },
];

export function ProofStrip() {
  return (
    <section
      id="proof-strip"
      className="w-full py-8 sm:py-10 px-6 md:px-12 border-b border-[#E7E7E5] bg-[#FBFBFA] relative z-20"
      aria-label="Social Proof & Enterprise Engagements"
    >
      <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-6">
        {/* Top Header: Trust Label + Concrete Proof Line */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-black/5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#747474] font-semibold">
              ĐÃ ĐỒNG HÀNH CÙNG ĐỘI NGŨ TẠI
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-[13px] font-mono text-[#17151A]">
            <span className="font-semibold text-[#EA580C]">40+</span>
            <span className="text-[#6E6E6E]">dự án triển khai</span>
            <span className="text-[#D5D3CC]">·</span>
            <span className="font-semibold text-[#7000FF]">8</span>
            <span className="text-[#6E6E6E]">nghiên cứu điển hình</span>
            <span className="text-[#D5D3CC]">·</span>
            <span className="font-semibold text-[#17151A]">45</span>
            <span className="text-[#6E6E6E]">tổ chức</span>
          </div>
        </div>

        {/* Quiet Monochrome Logos Stream */}
        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee-slow flex items-center gap-12 sm:gap-16 py-1">
            {/* Loop 1 */}
            {PARTNER_LOGOS.map((logo, idx) => (
              <div
                key={`proof-logo-1-${idx}`}
                className={`shrink-0 flex items-center justify-center grayscale ${logo.opacity} hover:grayscale-0 hover:opacity-100 transition-all duration-300 h-8 px-2`}
                title={logo.name}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-6 sm:max-h-7 w-auto object-contain select-none pointer-events-none"
                />
              </div>
            ))}

            {/* Loop 2 */}
            {PARTNER_LOGOS.map((logo, idx) => (
              <div
                key={`proof-logo-2-${idx}`}
                className={`shrink-0 flex items-center justify-center grayscale ${logo.opacity} hover:grayscale-0 hover:opacity-100 transition-all duration-300 h-8 px-2`}
                title={logo.name}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-6 sm:max-h-7 w-auto object-contain select-none pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
