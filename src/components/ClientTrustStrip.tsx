'use client';

import React from 'react';
import Image from 'next/image';

const TRUSTED_LOGOS = [
  { name: 'Vinhomes (Vingroup)', src: '/logos/vinhomes.png', width: 120, height: 36 },
  { name: 'Đại học FPT', src: '/logos/fptu.png', width: 110, height: 34 },
  { name: 'Dentsu Sports & Creative', src: '/logos/dentsu.png', width: 110, height: 32 },
  { name: 'VNPT VinaPhone', src: '/logos/vnpt_vinaphone.png', width: 120, height: 36 },
  { name: 'Vietcap Securities', src: '/logos/vietcap.png', width: 115, height: 34 },
  { name: 'Đài Truyền Hình HTV', src: '/logos/htv.png', width: 95, height: 32 },
  { name: 'Tập đoàn Hòa Phát', src: '/logos/hoa_phat.png', width: 110, height: 32 },
  { name: 'Phương Trường An Group', src: '/logos/phuong_truong_an.png', width: 130, height: 36 },
  { name: 'Trung Sơn Pharma', src: '/logos/trung_son.png', width: 115, height: 34 },
  { name: 'Talentnet Corporation', src: '/logos/talentnet.png', width: 110, height: 34 },
  { name: 'Smartland Bất Động Sản', src: '/logos/smartland.png', width: 115, height: 34 },
];

export function ClientTrustStrip() {
  return (
    <section className="w-full py-10 border-y border-[#E8E8E8] bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 mb-5 text-center">
        <span className="text-[11px] font-mono tracking-widest text-[#888888] uppercase select-none">
          ĐỒNG HÀNH CHUYỂN ĐỔI AI CÙNG CÁC ĐỘI NGŨ DẪN ĐẦU TẠI VIỆT NAM
        </span>
      </div>

      {/* Marquee Wrapper with Smooth Gradient Masks */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee-slow flex items-center gap-14 py-2">
          {/* First loop */}
          {TRUSTED_LOGOS.map((logo, idx) => (
            <div
              key={`logo-1-${idx}`}
              className="relative shrink-0 flex items-center justify-center grayscale opacity-45 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer h-10 px-2"
              title={logo.name}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="max-h-8 w-auto object-contain select-none pointer-events-none"
              />
            </div>
          ))}

          {/* Duplicate loop for seamless continuous scroll */}
          {TRUSTED_LOGOS.map((logo, idx) => (
            <div
              key={`logo-2-${idx}`}
              className="relative shrink-0 flex items-center justify-center grayscale opacity-45 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer h-10 px-2"
              title={logo.name}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="max-h-8 w-auto object-contain select-none pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
