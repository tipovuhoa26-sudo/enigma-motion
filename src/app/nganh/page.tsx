'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Sparkles,
  ShoppingBag,
  Factory,
  Briefcase,
  Building2,
  ShieldCheck,
  Calendar,
  Layers,
  TrendingUp,
  Activity,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { Button } from '@/components/Button';

export default function IndustryIndexPage() {
  return (
    <div className="w-full min-h-screen flex flex-col sunext-atmospheric-canvas">
      <Header activeSection="service" />

      <main className="flex-1 flex flex-col w-full max-w-[1280px] mx-auto px-6 md:px-12 py-12 lg:py-16">
          {/* Top Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-black/5">
            <nav className="flex items-center gap-2 text-xs text-[#6E6E6E]">
              <Link href="/" className="hover:text-[#111111] transition-colors">
                Trang chủ
              </Link>
              <span>/</span>
              <span className="text-[#111111] font-medium">Giải pháp theo ngành</span>
            </nav>

            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5FF] border border-[#EDE9FE] text-[11px] font-semibold text-[#7000FF]">
                <Sparkles className="w-3 h-3 text-[#7000FF]" />
                GIẢI PHÁP THEO NGÀNH THỰC TẾ
              </span>
            </div>
          </div>

          {/* Hero Header Section */}
          <section className="max-w-4xl mb-20">
            {/* Eyebrow -> 8-12px -> Sublabel */}
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#7000FF] font-semibold block">
                NGÀNH TRỌNG ĐIỂM
              </span>
              <span className="text-xs text-[#747474] font-medium block mt-2">
                Giải pháp AI may đo theo bài toán kinh tế
              </span>
            </div>

            {/* Context block -> 44-64px -> H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-[1.18] mt-12">
              Giải pháp AI may đo theo đặc thù ngành
            </h1>

            {/* Heading -> 20-28px -> Body */}
            <p className="text-base sm:text-lg text-[#626262] font-light leading-relaxed max-w-3xl mt-6">
              Mỗi ngành kinh doanh có cấu trúc chi phí và điểm nghẽn P&L riêng biệt. Sunext không dùng giải pháp rập khuôn: chúng tôi giải đúng bài toán kinh tế trọng yếu nhất, chứng minh bằng kết quả đo lường và chuyển giao năng lực tự chủ.
            </p>
          </section>

          {/* Industry Lean Grid: 1 Problem ➔ Metric ➔ CTA */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {[
              {
                id: 'real-estate',
                slug: 'bat-dong-san',
                name: 'Bất động sản',
                english: 'Real Estate',
                painPoint: 'Lead phản hồi chậm làm mất cơ hội bán hàng.',
                metric: '< 5 phút',
                metricLabel: 'Thời gian phản hồi thông tin & giỏ hàng',
                icon: Building2,
              },
              {
                id: 'retail',
                slug: 'ban-le-tieu-dung',
                name: 'Bán lẻ & FMCG',
                english: 'Retail & Consumer Goods',
                painPoint: 'Sàng lọc hàng trăm hồ sơ mùa vụ mất nhiều ngày làm chậm tiến độ mở rộng.',
                metric: '3N ➔ 2H',
                metricLabel: 'Rút ngắn thời gian sàng lọc CV',
                icon: ShoppingBag,
              },
              {
                id: 'manufacturing',
                slug: 'san-xuat-che-tao',
                name: 'Sản xuất & Chế tạo',
                english: 'Precision Manufacturing',
                painPoint: 'Tỷ lệ lỗi sản phẩm lọt chuyền gây tổn thất chi phí bảo hành và uy tín.',
                metric: '99.8%',
                metricLabel: 'Độ chính xác kiểm định bề mặt 24/7',
                icon: Factory,
              },
              {
                id: 'b2b-services',
                slug: 'dich-vu-b2b',
                name: 'Dịch vụ B2B & Chuyên môn',
                english: 'B2B Professional Services',
                painPoint: 'Nút thắt thời gian chuyên gia và chi phí sản xuất tài liệu đấu thầu đắt đỏ.',
                metric: '−65%',
                metricLabel: 'Thời gian phát triển proposal & pitch deck',
                icon: Briefcase,
              },
              {
                id: 'finance',
                slug: 'tai-chinh-chung-khoan',
                name: 'Tài chính & Chứng khoán',
                english: 'Banking & Securities',
                painPoint: 'Báo cáo phân tích và dữ liệu tài chính thô xử lý thủ công mất nhiều ngày.',
                metric: '−75%',
                metricLabel: 'Thời gian bóc tách BCTC thô',
                icon: TrendingUp,
              },
              {
                id: 'healthcare',
                slug: 'y-te-duoc-pham',
                name: 'Y tế & Dược phẩm',
                english: 'Healthcare & Pharma',
                painPoint: 'Hồ sơ bệnh án phân tán và độ trễ đối soát dữ liệu lâm sàng kéo dài.',
                metric: '−60%',
                metricLabel: 'Thời gian tổng hợp hồ sơ & đối soát',
                icon: Activity,
              },
            ].map((ind) => {
              const Icon = ind.icon;
              return (
                <Link
                  key={ind.id}
                  href={`/nganh/${ind.slug}`}
                  className="group rounded-3xl bg-white border border-[#E8E8E8] hover:border-[#17151A] shadow-xs hover:shadow-md transition-all p-7 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    {/* Top: Name & English Category */}
                    <div className="flex items-center justify-between pb-4 border-b border-black/5 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#FAF5FF] border border-[#EDE9FE] flex items-center justify-center text-[#7000FF]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-[#747474] uppercase tracking-wider block">
                            {ind.english}
                          </span>
                          <h2 className="text-lg sm:text-xl font-normal text-[#17151A] group-hover:text-[#7000FF] transition-colors">
                            {ind.name}
                          </h2>
                        </div>
                      </div>
                    </div>

                    {/* Core Pain Point (1 crisp sentence) */}
                    <p className="text-sm text-[#515151] font-light leading-relaxed mb-8">
                      {ind.painPoint}
                    </p>

                    {/* Highlight Metric */}
                    <div className="py-2 mb-6">
                      <span className="text-3xl sm:text-4xl font-light font-mono text-[#EA580C] block tracking-tight leading-none">
                        {ind.metric}
                      </span>
                      <span className="text-xs text-[#747474] block mt-1.5 font-light">
                        {ind.metricLabel}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Link Action */}
                  <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs font-medium text-[#17151A]">
                    <span className="text-[#747474] group-hover:text-[#17151A] transition-colors">
                      Xem cách Sunext triển khai
                    </span>
                    <div className="w-6 h-6 rounded-full bg-[#FAF5FF] group-hover:bg-[#17151A] text-[#7000FF] group-hover:text-white flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </section>

          {/* Connected with Sunext Method Banner */}
          <section className="p-8 sm:p-12 rounded-3xl bg-[#17151A] text-white flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-[#F97316] mb-4 border border-white/10">
                <Layers className="w-3.5 h-3.5 text-[#F97316]" />
                KHUNG NĂNG LỰC TOÀN TRÌNH
              </span>
              <h2 className="text-2xl sm:text-3xl font-light leading-snug mb-4">
                Tất cả giải pháp ngành đều vận hành trên Phương Pháp Luận Sunext
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                Mọi giải pháp ngành đều được đánh giá trên cùng 6 trụ cột năng lực; Sunext chỉ kích hoạt những trụ cột thực sự đang chặn kết quả. Hãy kiểm tra xem doanh nghiệp bạn đang sẵn sàng tới đâu.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/tu-duy-chuyen-doi-ai">
                  <Button variant="orange" size="md" className="rounded-xl text-xs font-semibold">
                    Khám Phá Sunext Method
                  </Button>
                </Link>
                <Link href="/danh-gia-san-sang-ai">
                  <Button variant="outline" size="md" className="rounded-xl text-xs text-white border-white/20 hover:bg-white/10">
                    Đo Lường Sẵn Sàng (12 Câu)
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 text-xs text-neutral-300 w-full md:w-auto shrink-0">
              <span className="font-semibold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Tiêu Chuẩn Thực Thi Dự Án:</span>
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[#F97316]">✓</span>
                <span>Khảo sát đo lường ROI trước khi triển khai</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#F97316]">✓</span>
                <span>Bảo mật dữ liệu tuyệt đối (NDA-first)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#F97316]">✓</span>
                <span>Chuyển giao 100% năng lực Tầng 1➔5</span>
              </div>
            </div>
          </section>

          {/* Consultation Booking Section */}
          <section className="text-center max-w-2xl mx-auto py-8">
            <h2 className="text-2xl sm:text-3xl font-light text-[#17151A] mb-4">
              Không Thấy Ngành Của Bạn Ở Đây?
            </h2>
            <p className="text-sm text-[#6E6E6E] leading-relaxed mb-8">
              Phương Pháp Luận Sunext được thiết kế để tùy biến cho bất kỳ mô hình kinh doanh nào có quy trình lặp lại và khối lượng dữ liệu lớn. Hãy trao đổi trực tiếp với chuyên gia giải pháp của chúng tôi.
            </p>
            <Link href="/#contact">
              <Button variant="orange" size="lg" className="rounded-xl shadow-sm text-sm gap-2">
                <Calendar className="w-4 h-4" />
                <span>Đặt Lịch Tư Vấn Cho Ngành Của Bạn</span>
              </Button>
            </Link>
          </section>
        </main>

        <Footer />
    </div>
  );
}
