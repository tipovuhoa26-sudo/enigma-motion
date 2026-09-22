import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowUpRight, Share2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full pt-24 sm:pt-32 pb-16 px-6 md:px-12 border-t border-[#E8E8E8] bg-white text-xs text-[#626262]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E8E8E8]">
        {/* Brand Column */}
        <div className="md:col-span-3 flex flex-col gap-4">
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
            Tư vấn chiến lược và triển khai chuyển đổi AI cho doanh nghiệp Việt Nam. Nghiệm thu theo kết quả vận hành và kinh doanh.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-2 flex flex-col gap-2.5">
          <span className="font-semibold text-xs text-[#111111] uppercase tracking-wider">Khám phá</span>
          <Link href="/#method" className="hover:text-[#6B21A8] transition-colors">
            Phương pháp luận
          </Link>
          <Link href="/case-studies" className="hover:text-[#6B21A8] transition-colors flex items-center gap-1">
            <span>Dự án thực tế</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
          <Link href="/nganh" className="hover:text-[#6B21A8] transition-colors">
            Giải pháp theo ngành
          </Link>
          <Link href="/doi-ngu" className="hover:text-[#6B21A8] transition-colors">
            Đội ngũ chuyên gia
          </Link>
          <Link href="/khach-hang-doi-tac" className="hover:text-[#6B21A8] transition-colors">
            Khách hàng &amp; đối tác
          </Link>
          <Link href="/khung-dau-tu" className="hover:text-[#6B21A8] transition-colors text-[#059669] font-medium pt-1 flex items-center gap-1">
            <span>Khung đầu tư &amp; ROI</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Methodology Column */}
        <div className="md:col-span-3 flex flex-col gap-2">
          <span className="font-semibold text-xs text-[#111111] uppercase tracking-wider">Phương pháp Sunext</span>
          <Link href="/#method" className="font-medium text-[#111111] hover:text-[#6B21A8] flex items-center gap-1">
            <span>3 Nguyên tắc thiết kế</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
          <Link href="/#delivery" className="font-medium text-[#111111] hover:text-[#6B21A8] flex items-center gap-1">
            <span>4 Chốt triển khai an toàn</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
          <Link href="/tu-duy-chuyen-doi-ai" className="hover:text-[#6B21A8] transition-colors pt-1">
            6 Trụ cột đánh giá năng lực AI
          </Link>
          <Link href="/danh-gia-san-sang-ai" className="hover:text-[#6B21A8] transition-colors text-[#EA580C] font-medium flex items-center gap-1">
            <span>Đo độ sẵn sàng AI (12 câu)</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Industry Solutions Column */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <span className="font-semibold text-xs text-[#111111] uppercase tracking-wider">Ngành &amp; Giải pháp</span>
          <Link href="/nganh" className="font-medium text-[#111111] hover:text-[#6B21A8] flex items-center gap-1">
            <span>Tất cả ngành</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
          <Link href="/nganh/ban-le-tieu-dung" className="hover:text-[#6B21A8] transition-colors">
            Tài chính &amp; Ngân hàng
          </Link>
          <Link href="/nganh/bat-dong-san" className="hover:text-[#6B21A8] transition-colors">
            Bất động sản &amp; Nhà phố
          </Link>
          <Link href="/nganh/san-xuat-che-tao" className="hover:text-[#6B21A8] transition-colors">
            Sản xuất &amp; Chuỗi cung ứng
          </Link>
          <Link href="/nganh/ban-le-tieu-dung" className="hover:text-[#6B21A8] transition-colors">
            Bán lẻ &amp; Tiêu dùng
          </Link>
          <Link href="/nganh/dich-vu-b2b" className="hover:text-[#6B21A8] transition-colors">
            Dịch vụ B2B
          </Link>
        </div>

        {/* Legal & Security Column */}
        <div className="md:col-span-2 flex flex-col gap-3">
          <span className="font-semibold text-xs text-[#111111] uppercase tracking-wider">Bảo mật doanh nghiệp</span>
          <div className="flex items-center gap-2 text-[11px] text-[#111111] bg-[#FAF8FC] p-2.5 rounded-xl border border-[#E8E8E8]">
            <ShieldCheck className="w-4 h-4 text-[#059669] shrink-0" />
            <span className="font-medium">Private by Design</span>
          </div>
          <div className="flex flex-col gap-1.5 pt-0.5 text-xs text-[#626262]">
            <span className="leading-snug">• Private VPC / On-premise</span>
            <span className="leading-snug">• Ký kết thỏa thuận bảo mật NDA</span>
            <span className="leading-snug">• Cách ly dữ liệu theo kiến trúc được phê duyệt</span>
          </div>
          <Link href="/phap-ly-bao-mat" className="text-xs text-[#6B21A8] hover:underline flex items-center gap-1 pt-1 font-medium">
            <span>Bảo mật &amp; Pháp lý</span>
            <ArrowUpRight className="w-3 h-3" />
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
