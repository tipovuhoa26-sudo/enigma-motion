import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowUpRight, Globe, Share2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full pt-16 pb-12 px-6 md:px-12 border-t border-black/5 bg-[#F8F8F6] text-xs text-[#6E6E6E]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-black/5">
        {/* Brand Column */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#17151A]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16.5 3.5L7.5 7.5V16.5L16.5 20.5" />
              </svg>
            </div>
            <span className="font-semibold text-lg tracking-tight text-[#17151A]">Sunext</span>
          </div>

          <p className="text-xs text-[#6E6E6E] max-w-sm leading-relaxed">
            Tư vấn chiến lược và hiện thực hóa chuyển đổi AI thực chiến cho doanh nghiệp Việt Nam theo phương pháp luận toàn trình Sunext Rewired.
          </p>

          {/* Operational Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/5 shadow-2xs w-fit mt-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-medium text-[#17151A]">Vận hành liên tục • Hỗ trợ 24/7</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-2 flex flex-col gap-2.5">
          <span className="font-semibold text-xs text-[#17151A] uppercase tracking-wider">Giải Pháp</span>
          <Link href="/#advantage" className="hover:text-[#17151A] transition-colors">
            Lợi Thế Cốt Lõi
          </Link>
          <Link href="/#cases" className="hover:text-[#17151A] transition-colors">
            Dự Án Tiêu Biểu
          </Link>
          <Link href="/case-studies" className="hover:text-[#17151A] transition-colors flex items-center gap-1">
            <span>Tất Cả Dự Án</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
          <Link href="/doi-ngu" className="hover:text-[#17151A] transition-colors">
            Đội Ngũ Chuyên Gia
          </Link>
          <Link href="/khach-hang-doi-tac" className="hover:text-[#17151A] transition-colors">
            Khách Hàng & Đối Tác
          </Link>
        </div>

        {/* AI Transformation (Rewired) Column */}
        <div className="md:col-span-3 flex flex-col gap-2">
          <span className="font-semibold text-xs text-[#17151A] uppercase tracking-wider">Tư Duy AI (Rewired)</span>
          <Link href="/tu-duy-chuyen-doi-ai" className="font-medium text-[#17151A] hover:underline flex items-center gap-1">
            <span>Khung Sunext Rewired</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
          <Link href="/tu-duy-chuyen-doi-ai/chien-luoc-so" className="hover:text-[#17151A] transition-colors">
            01. Chiến lược số
          </Link>
          <Link href="/tu-duy-chuyen-doi-ai/nang-luc-doi-ngu" className="hover:text-[#17151A] transition-colors">
            02. Nhân tài nội bộ
          </Link>
          <Link href="/tu-duy-chuyen-doi-ai/mo-hinh-van-hanh" className="hover:text-[#17151A] transition-colors">
            03. Mô hình vận hành
          </Link>
          <Link href="/tu-duy-chuyen-doi-ai/nen-tang-cong-nghe" className="hover:text-[#17151A] transition-colors">
            04. Nền tảng công nghệ
          </Link>
          <Link href="/tu-duy-chuyen-doi-ai/kien-truc-du-lieu" className="hover:text-[#17151A] transition-colors">
            05. Kiến trúc dữ liệu
          </Link>
          <Link href="/tu-duy-chuyen-doi-ai/mo-rong-quy-mo" className="hover:text-[#17151A] transition-colors">
            06. Mở rộng & Governance
          </Link>
          <Link href="/danh-gia-san-sang-ai" className="text-emerald-800 font-medium hover:underline flex items-center gap-1 pt-0.5">
            <span>Đo lường sẵn sàng (5 phút)</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Industry Solutions & Investment Column */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <span className="font-semibold text-xs text-[#17151A] uppercase tracking-wider">Theo Ngành & Đầu Tư</span>
          <Link href="/nganh" className="font-medium text-[#17151A] hover:underline flex items-center gap-1">
            <span>Tất cả ngành</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
          <Link href="/nganh/ban-le-tieu-dung" className="hover:text-[#17151A] transition-colors">
            Bán lẻ & Tiêu dùng
          </Link>
          <Link href="/nganh/san-xuat-che-tao" className="hover:text-[#17151A] transition-colors">
            Sản xuất & Chế tạo
          </Link>
          <Link href="/nganh/dich-vu-b2b" className="hover:text-[#17151A] transition-colors">
            Dịch vụ B2B
          </Link>
          <Link href="/nganh/bat-dong-san" className="hover:text-[#17151A] transition-colors">
            Bất động sản & Nhà phố
          </Link>
          <Link href="/khung-dau-tu" className="text-emerald-800 font-medium hover:underline flex items-center gap-1 pt-1">
            <span>Khung Đầu Tư & ROI</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Legal & Security Column */}
        <div className="md:col-span-2 flex flex-col gap-3">
          <span className="font-semibold text-xs text-[#17151A] uppercase tracking-wider">Bảo Mật & Pháp Lý</span>
          <div className="flex items-center gap-2 text-[11px] text-[#17151A] bg-white p-2.5 rounded-xl border border-black/5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Bảo Mật Chuẩn Doanh Nghiệp • Cam Kết NDA</span>
          </div>
          <div className="flex flex-col gap-1.5 pt-1 text-xs">
            <Link href="/#privacy" className="hover:text-[#17151A] transition-colors">Chính Sách Bảo Mật Dữ Liệu</Link>
            <Link href="/#terms" className="hover:text-[#17151A] transition-colors">Điều Khoản Triển Khai</Link>
            <Link href="/#security" className="hover:text-[#17151A] transition-colors">Hạ Tầng Private AI</Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>© {new Date().getFullYear()} Sunext Digital & AI Solutions. All rights reserved.</span>

        <div className="flex items-center gap-4 text-[#6E6E6E]">
          <span className="flex items-center gap-1">
            <Globe className="w-3.5 h-3.5" />
            <span>Hà Nội • TP. Hồ Chí Minh</span>
          </span>
          <Link href="/#contact" className="hover:text-[#17151A] transition-colors flex items-center gap-1">
            <Share2 className="w-3.5 h-3.5" />
            <span>Liên Hệ Tư Vấn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
