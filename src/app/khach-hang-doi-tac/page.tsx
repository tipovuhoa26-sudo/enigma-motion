'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  GraduationCap,
  Briefcase,
  ShoppingBag,
  Tv,
  Truck,
  Sparkles,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { Button } from '@/components/Button';

export default function ClientsNetworkPage() {
  const industryGroups = [
    {
      name: 'Tài Chính – Chứng Khoán – Bảo Hiểm',
      icon: Briefcase,
      desc: 'Mạng lưới nhân sự và cán bộ phân tích đã tham gia các chương trình đào tạo chuyên sâu về AI trong bóc tách dữ liệu tài chính & thẩm định.',
      organizations: [
        'Vietcap Securities (VCI)',
        'Vietcombank',
        'BIDV',
        'Prudential Vietnam',
        'Dai-ichi Life Vietnam',
      ],
      featuredCase: {
        title: 'Vietcap Securities: Multi-Agent bóc tách BCTC (-75% thời gian)',
        url: '/case-studies/vietcap-ai-multi-agent-nghien-cuu-thi-truong',
      },
    },
    {
      name: 'Bất Động Sản – Xây Dựng – Năng Lượng',
      icon: Building2,
      desc: 'Mạng lưới chuyên viên kinh doanh và phát triển dự án ứng dụng AI vào truyền thông thực địa, kịch bản tư vấn và lead reactivation.',
      organizations: [
        'Vinhomes (Vingroup)',
        'Smartland Bất Động Sản',
        'Phương Trường An Group',
        'Thắng Lợi Group',
        'Huỳnh Anh Group',
        'PV Power',
      ],
      featuredCase: {
        title: 'Vinhomes: AI Sales Enablement & Chăm sóc khách hàng',
        url: '/case-studies/vinhomes-ai-sales-enablement',
      },
    },
    {
      name: 'Công Nghệ – Viễn Thông – Giáo Dục Đại Học',
      icon: GraduationCap,
      desc: 'Đào tạo giảng viên chuẩn Bậc 6, đưa AI vào giảng dạy đại học và ứng dụng AI Agents vào các sự kiện công nghệ quy mô lớn.',
      organizations: [
        'Đại học FPT (FPTU)',
        'VNPT VinaPhone',
        'FSI Digital',
        'Droppii Commerce',
        'Đại học Kinh tế - Tài chính TP.HCM (UEF)',
        'Đại học Nguyễn Tất Thành (NTTU)',
      ],
      featuredCase: {
        title: 'Đại Học FPT: Chuẩn Bậc 6 & AI Event Management (10.000+ người)',
        url: '/case-studies/fptu-nang-bac-giang-vien-ai',
      },
    },
    {
      name: 'Truyền Thông – Quảng Cáo – Sáng Tạo',
      icon: Tv,
      desc: 'Chuẩn hóa quy trình AI phát triển proposal đấu thầu tài trợ quốc tế, tự động hóa dựng storyboard và tối ưu hóa duyệt ảnh hiện trường.',
      organizations: [
        'Dentsu Sports Vietnam & Creative',
        'Đài Truyền Hình TP.HCM (HTV)',
        'Trương Đoàn Marketing Group',
      ],
      featuredCase: {
        title: 'Dentsu Sports: Rút ngắn 65% thời gian proposal đấu thầu',
        url: '/case-studies/dentsu-ai-pitch-deck-automation',
      },
    },
    {
      name: 'FMCG – F&B – Dược Phẩm & Tiêu Dùng',
      icon: ShoppingBag,
      desc: 'Tư vấn và đào tạo ứng dụng AI vào tiếp thị đa kênh, quản trị tệp khách hàng CRM chuỗi và tự động hóa sáng tạo nội dung.',
      organizations: [
        'Mì Gấu Đỏ',
        'Cháo Cây Thị',
        'Yến Việt',
        'Dr. Muối',
        'Trung Sơn Pharma',
        'Hoàng Đức Pharma',
        'Agrilong',
        'VAG International (Poêmy)',
        'Big Family',
        'Maison Vie',
      ],
      featuredCase: {
        title: 'Bán lẻ & Chuỗi tiêu dùng: Tối ưu chi phí tuyển dụng (-40%)',
        url: '/case-studies/toi-uu-chi-phi-tuyen-dung-hr-ai',
      },
    },
    {
      name: 'Thương Mại – Phân Phối – Logistics',
      icon: Truck,
      desc: 'Ứng dụng AI phân tích dữ liệu phân phối, quản trị chuỗi cung ứng và chăm sóc đối tác đại lý tự động.',
      organizations: [
        'VACS',
        'Mitsubishi Motors',
        'QH Distribution',
        'PTEXIM Corp',
        'Let\'s Go Taxi',
        'JTB-TNT Travel',
      ],
      featuredCase: null,
    },
  ];

  return (
    <div className="editorial-shell">
      <div className="editorial-card min-h-screen flex flex-col justify-between">
        <Header activeSection="service" />

        <main className="px-6 md:px-12 lg:px-20 py-12 flex-1">
          {/* Top Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-black/5">
            <div className="flex items-center gap-2 text-xs text-[#6E6E6E]">
              <Link href="/" className="hover:text-[#17151A] transition-colors">
                Trang Chủ
              </Link>
              <span>/</span>
              <span className="text-[#17151A] font-medium">Khách Hàng & Mạng Lưới Học Viên</span>
            </div>

            <Link
              href="/doi-ngu"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17151A] hover:underline transition-colors"
            >
              <span>Xem Đội Ngũ Cố Vấn & CAIO</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Hero Section */}
          <section className="max-w-4xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#6E6E6E] font-medium block mb-3">
              ECOSYSTEM & NETWORK · MẠNG LƯỚI ĐỒNG HÀNH
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-[1.2] mb-6">
              Mạng Lưới Học Viên & Tổ Chức Đồng Hành Cùng Chuyên Gia Sunext
            </h1>
            <p className="text-base sm:text-lg text-[#6E6E6E] font-light leading-relaxed max-w-3xl">
              Từ các định chế tài chính niêm yết, tập đoàn bất động sản đến các trường đại học hàng đầu và doanh nghiệp vừa và nhỏ (SME), đội ngũ chuyên gia Sunext đã đồng hành đào tạo, cố vấn và chuyển giao phương pháp luận AI thực chiến trên khắp cả nước.
            </p>
          </section>

          {/* Mandatory Legal & Ethical Disclaimer */}
          <section className="max-w-5xl mx-auto mb-12 p-6 rounded-2xl bg-[#F5F3F6] border border-black/5 flex items-start gap-4 text-xs text-[#6E6E6E] leading-relaxed">
            <ShieldCheck className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-[#17151A] block">
                Thông Báo Pháp Lý & Miễn Trừ Trách Nhiệm (Ethical Disclosure)
              </span>
              <p>
                Tên các tổ chức và thương hiệu được nêu dưới đây nhằm mục đích minh chứng trực quan cho mạng lưới học viên, cán bộ quản lý và chuyên viên đã trực tiếp tham gia các khóa đào tạo, hội thảo chuyên đề hoặc dự án tư vấn do đội ngũ chuyên gia Sunext (dẫn dắt bởi CAIO Nguyễn Phước Vĩnh Hưng) chủ trì. Việc nhắc tên không hàm ý quan hệ đối tác độc quyền, đại diện pháp lý hay chứng thực thương mại (commercial endorsement) chính thức, trừ các dự án có hợp đồng triển khai công nghệ đã được hai bên công bố.
              </p>
            </div>
          </section>

          {/* 6 Industry Groups Grid */}
          <section className="max-w-5xl mx-auto mb-16 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industryGroups.map((group, idx) => {
                const IconComponent = group.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-xs flex flex-col justify-between space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#FAFFDE] border border-[#DFE2C8] flex items-center justify-center text-[#17151A]">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h3 className="text-base sm:text-lg font-medium text-[#17151A]">
                          {group.name}
                        </h3>
                      </div>

                      <p className="text-xs text-[#6E6E6E] leading-relaxed">
                        {group.desc}
                      </p>

                      <div className="pt-2 border-t border-black/5">
                        <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block mb-2">
                          Học viên & Tổ chức tiêu biểu:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {group.organizations.map((org, oIdx) => (
                            <span
                              key={oIdx}
                              className="px-2.5 py-1 rounded-full bg-[#F8F8F6] border border-black/5 text-xs text-[#17151A] font-medium"
                            >
                              {org}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {group.featuredCase && (
                      <div className="pt-4 border-t border-black/5">
                        <Link
                          href={group.featuredCase.url}
                          className="text-xs text-emerald-800 hover:text-emerald-950 font-semibold inline-flex items-center gap-1 group"
                        >
                          <span className="group-hover:underline">{group.featuredCase.title}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Open Course Participants Note */}
          <section className="max-w-5xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-[#FBFBFA] border border-black/10">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-neutral-500" />
              <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-semibold">
                Mạng Lưới Học Viên Các Khóa Chuyên Đề Công Khai
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed mb-4">
              Bên cạnh các hợp đồng đào tạo và tư vấn doanh nghiệp riêng lẻ, mạng lưới học viên tham gia các chương trình đào tạo mở (AI in Marketing, AI for Leadership, Prompt Engineering chuyên sâu) của Sunext và CAIO bao gồm nhiều nhân sự đến từ các thương hiệu lớn như Shopee, Lazada, Tiki, Unilever, P&G, Nestlé, Vinamilk, Masan Consumer, Ogilvy, GroupM, Hakuhodo, VinFast, Vietjet Air, Carlsberg, Golden Gate Group...
            </p>
            <p className="text-[11px] text-neutral-400 italic">
              * Danh sách phản ánh học viên cá nhân tham gia nâng cao năng lực nghề nghiệp, không phải hợp đồng cung cấp giải pháp cấp công ty.
            </p>
          </section>

          {/* CTA Section */}
          <section className="max-w-5xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#17151A] text-white text-center space-y-6">
            <div className="max-w-xl mx-auto space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#FAFFDE] font-semibold">
                ĐÀO TẠO & TRIỂN KHAI DOANH NGHIỆP
              </span>
              <h3 className="text-2xl sm:text-3xl font-light">
                Thiết Kế Chương Trình Đào Tạo AI Riêng Cho Tổ Chức Bạn
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Chuẩn hóa năng lực ứng dụng AI theo đặc thù dữ liệu và quy trình nội bộ của doanh nghiệp. Đào tạo trực tiếp tại văn phòng hoặc hybrid.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link href="/#contact">
                <Button variant="lime" size="lg" className="rounded-full text-xs font-semibold px-8">
                  <span>Liên Hệ Tư Vấn Đào Tạo</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/tu-duy-chuyen-doi-ai">
                <Button variant="secondary" size="lg" className="rounded-full text-xs font-semibold px-6 border-white/20 text-white hover:bg-white/10">
                  <span>Tìm Hiểu Khung 6 Trụ Cột</span>
                </Button>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
