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
          <Link href="/tu-duy-chuyen-doi-ai" className="hover:text-[#6B21A8] transition-colors">
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
        </div>

        {/* AI Transformation Column */}
        <div className="md:col-span-3 flex flex-col gap-2">
          <span className="font-semibold text-xs text-[#111111] uppercase tracking-wider">Phương pháp luận</span>
          <Link href="/tu-duy-chuyen-doi-ai" className="font-medium text-[#111111] hover:text-[#6B21A8] flex items-center gap-1">
            <span>Sunext Method (Chuẩn 6 trụ cột)</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
          <Link href="/tu-duy-chuyen-doi-ai/chien-luoc-so" className="hover:text-[#6B21A8] transition-colors">
            01. Chiến lược số
          </Link>
          <Link href="/tu-duy-chuyen-doi-ai/nang-luc-doi-ngu" className="hover:text-[#6B21A8] transition-colors">
            02. Nhân tài nội bộ
          </Link>
          <Link href="/tu-duy-chuyen-doi-ai/mo-hinh-van-hanh" className="hover:text-[#6B21A8] transition-colors">
            03. Mô hình vận hành
          </Link>
          <Link href="/tu-duy-chuyen-doi-ai/nen-tang-cong-nghe" className="hover:text-[#6B21A8] transition-colors">
            04. Nền tảng công nghệ
          </Link>
          <Link href="/tu-duy-chuyen-doi-ai/kien-truc-du-lieu" className="hover:text-[#6B21A8] transition-colors">
            05. Kiến trúc dữ liệu
          </Link>
          <Link href="/tu-duy-chuyen-doi-ai/mo-rong-quy-mo" className="hover:text-[#6B21A8] transition-colors">
            06. Mở rộng &amp; Governance
          </Link>
        </div>

        {/* Industry Solutions & Investment Column */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <span className="font-semibold text-xs text-[#111111] uppercase tracking-wider">Theo ngành &amp; đầu tư</span>
          <Link href="/nganh" className="font-medium text-[#111111] hover:text-[#6B21A8] flex items-center gap-1">
            <span>Tất cả ngành</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
          <Link href="/nganh/ban-le-tieu-dung" className="hover:text-[#6B21A8] transition-colors">
            Bán lẻ &amp; tiêu dùng
          </Link>
          <Link href="/nganh/san-xuat-che-tao" className="hover:text-[#6B21A8] transition-colors">
            Sản xuất &amp; chế tạo
          </Link>
          <Link href="/nganh/dich-vu-b2b" className="hover:text-[#6B21A8] transition-colors">
            Dịch vụ B2B
          </Link>
          <Link href="/nganh/bat-dong-san" className="hover:text-[#6B21A8] transition-colors">
            Bất động sản &amp; nhà phố
          </Link>
          <Link href="/khung-dau-tu" className="text-[#059669] font-medium hover:underline flex items-center gap-1 pt-1">
            <span>Khung đầu tư &amp; ROI</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Legal & Security Column */}
        <div className="md:col-span-2 flex flex-col gap-3">
          <span className="font-semibold text-xs text-[#111111] uppercase tracking-wider">Bảo mật &amp; pháp lý</span>
          <div className="flex items-center gap-2 text-[11px] text-[#111111] bg-[#FAF8FC] p-2.5 rounded-xl border border-[#E8E8E8]">
            <ShieldCheck className="w-4 h-4 text-[#059669] shrink-0" />
            <span className="font-medium">Bảo Mật Chuẩn Doanh Nghiệp</span>
          </div>
          <div className="flex flex-col gap-1.5 pt-1 text-xs text-[#626262]">
            <span className="leading-snug">• Ký kết thỏa thuận bảo mật NDA</span>
            <span className="leading-snug">• Cách ly dữ liệu &amp; Private VPC / On-premise</span>
            <span className="leading-snug">• Kiến trúc triển khai tùy biến theo chính sách an toàn từng doanh nghiệp</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>© {new Date().getFullYear()} Sunext Digital &amp; AI Solutions. All rights reserved.</span>
        <Link href="/#contact" className="hover:text-[#111111] transition-colors flex items-center gap-1 text-[#626262]">
          <Share2 className="w-3.5 h-3.5" />
          <span>Liên Hệ Tư Vấn</span>
        </Link>
      </div>
    </footer>
  );
}
