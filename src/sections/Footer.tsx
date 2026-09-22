import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowUpRight, Share2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full pt-24 sm:pt-32 pb-16 px-6 md:px-12 border-t border-[#E8E8E8] bg-white text-xs text-[#626262]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E8E8E8]">
        {/* Brand Column */}
        <div className="col-span-2 md:col-span-4 flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-[#FAF8FC] border border-[#E8E8E8] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#6B21A8]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16.5 3.5L7.5 7.5V16.5L16.5 20.5" />
                <path d="M7.5 7.5L16.5 11.5V20.5" />
              </svg>
            </div>
            <span className="font-semibold text-lg tracking-tight text-[#111111]">Sunext</span>
          </div>

          <p className="text-xs text-[#626262] max-w-sm leading-relaxed">
            Tư vấn chiến lược và triển khai chuyển đổi AI cho doanh nghiệp Việt Nam. Nghiệm thu theo KPI vận hành và tác động kinh doanh định lượng.
          </p>

          <div className="pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#EA580C] hover:text-[#C2410C] transition-colors"
            >
              <span>Đặt lịch tư vấn chiến lược</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 1. PHƯƠNG PHÁP */}
        <div className="col-span-1 md:col-span-2 flex flex-col gap-2.5">
          <span className="font-semibold text-xs text-[#111111] uppercase tracking-wider">Phương pháp</span>
          <Link href="/#method" className="hover:text-[#6B21A8] transition-colors">
            3 Nguyên tắc
          </Link>
          <Link href="/tu-duy-chuyen-doi-ai" className="hover:text-[#6B21A8] transition-colors">
            6 Trụ cột chẩn đoán
          </Link>
          <Link href="/#delivery" className="hover:text-[#6B21A8] transition-colors">
            4 Pha &amp; 4 Gates
          </Link>
          <Link href="/danh-gia-san-sang-ai" className="hover:text-[#6B21A8] transition-colors text-[#EA580C] font-medium flex items-center gap-1">
            <span>Đo độ sẵn sàng</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        {/* 2. GIẢI PHÁP */}
        <div className="col-span-1 md:col-span-2 flex flex-col gap-2.5">
          <span className="font-semibold text-xs text-[#111111] uppercase tracking-wider">Giải pháp</span>
          <Link href="/nganh" className="hover:text-[#6B21A8] transition-colors">
            Theo ngành
          </Link>
          <Link href="/tu-duy-chuyen-doi-ai#cap-do-trien-khai" className="hover:text-[#6B21A8] transition-colors">
            4 Cấp độ triển khai
          </Link>
          <Link href="/khung-dau-tu" className="hover:text-[#6B21A8] transition-colors text-[#059669] font-medium flex items-center gap-1">
            <span>Khung đầu tư</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        {/* 3. BẰNG CHỨNG */}
        <div className="col-span-1 md:col-span-2 flex flex-col gap-2.5">
          <span className="font-semibold text-xs text-[#111111] uppercase tracking-wider">Bằng chứng</span>
          <Link href="/case-studies" className="hover:text-[#6B21A8] transition-colors flex items-center gap-1">
            <span>Dự án</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
          <Link href="/doi-ngu" className="hover:text-[#6B21A8] transition-colors">
            Đội ngũ
          </Link>
          <Link href="/khach-hang-doi-tac" className="hover:text-[#6B21A8] transition-colors">
            Khách hàng &amp; đối tác
          </Link>
        </div>

        {/* 4. AN TOÀN & PHÁP LÝ */}
        <div className="col-span-1 md:col-span-2 flex flex-col gap-2.5">
          <span className="font-semibold text-xs text-[#111111] uppercase tracking-wider">An toàn &amp; pháp lý</span>
          <Link href="/phap-ly-bao-mat" className="hover:text-[#6B21A8] transition-colors flex items-center gap-1">
            <span>Bảo mật &amp; pháp lý</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
          <button
            type="button"
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new Event('open-cookie-settings'));
              }
            }}
            className="text-left hover:text-[#6B21A8] transition-colors text-[#626262] cursor-pointer"
          >
            Cài đặt Cookie
          </button>
          <Link href="/phap-ly-bao-mat#privacy" className="hover:text-[#6B21A8] transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>© {new Date().getFullYear()} Sunext Digital &amp; AI Solutions. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new Event('open-cookie-settings'));
              }
            }}
            className="hover:text-[#111111] transition-colors text-[#626262] cursor-pointer"
          >
            Cài đặt Cookie
          </button>
          <Link href="/#contact" className="hover:text-[#111111] transition-colors flex items-center gap-1 text-[#626262]">
            <Share2 className="w-3.5 h-3.5" />
            <span>Liên Hệ Tư Vấn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
