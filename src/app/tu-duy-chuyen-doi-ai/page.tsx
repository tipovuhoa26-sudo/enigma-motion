'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Target,
  Users,
  Workflow,
  Cpu,
  Database,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Calendar,
  Layers,
  PieChart,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { CaseStudyVisual } from '@/components/visuals/CaseStudyVisual';
import { Footer } from '@/sections/Footer';
import { Button } from '@/components/Button';
import { PILLARS_DATA } from '@/content/aiTransformation';

export default function AiTransformationHubPage() {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const verifiedCases = [
    {
      title: 'Doanh nghiệp Bán lẻ 500 nhân sự',
      industry: 'Retail & Consumer Goods',
      industrySlug: 'ban-le-tieu-dung',
      team: 'Đội HR 4 người · 500 nhân viên',
      story:
        'Từng mất 3 ngày lọc CV cho mỗi vị trí tuyển dụng thời vụ. Sau khi làm đúng Trụ cột 2 (đào tạo đội ngũ theo đúng tầng năng lực) và Trụ cột 4 (nền tảng công nghệ, Agent sàng lọc CV tự động tích hợp hệ thống ATS):',
      metrics: [
        { value: '2 giờ', label: 'Thời gian lọc CV (từ 3 ngày)' },
        { value: '-40%', label: 'Chi phí tuyển dụng' },
        { value: '+25%', label: 'Ứng viên vào phỏng vấn' },
      ],
      tag: 'Trụ cột 2 & 4',
      link: '/case-studies/toi-uu-chi-phi-tuyen-dung-hr-ai',
    },
    {
      title: 'Nhà máy Sản xuất 800 nhân sự',
      industry: 'Precision Manufacturing',
      industrySlug: 'san-xuat-che-tao',
      team: 'Chuyền sản xuất cơ khí chính xác · 800 nhân sự',
      story:
        'Tỷ lệ lỗi sản phẩm lọt ra thị trường gây tốn kém chi phí bảo hành. Sau khi làm đúng Trụ cột 4 và Trụ cột 5 (nền tảng công nghệ kết nối trực tiếp chuyền cơ khí + dữ liệu chuẩn hóa, Computer Vision Agent giám sát 24/7):',
      metrics: [
        { value: '99.8%', label: 'Độ chính xác nhận diện lỗi' },
        { value: '1.5%', label: 'Tỷ lệ lỗi tới tay khách hàng' },
        { value: '24/7', label: 'Giám sát không gián đoạn' },
      ],
      tag: 'Trụ cột 4 & 5',
      link: '/case-studies/ai-auditor-manufacturing',
    },
    {
      title: 'Doanh nghiệp Dịch vụ B2B 200 nhân sự',
      industry: 'B2B Professional Services',
      industrySlug: 'dich-vu-b2b',
      team: 'Đội Marketing nội bộ · 200 nhân sự',
      story:
        'Đội marketing chỉ ra được 8-10 bài mỗi tháng, phụ thuộc hoàn toàn vào agency ngoài đắt đỏ. Sau khi làm đúng Trụ cột 2 và Trụ cột 3 (đào tạo Tầng 2 cho đội ngũ + tái cấu trúc quy trình sản xuất nội dung Content Factory):',
      metrics: [
        { value: 'x5', label: 'Sản lượng bài viết (50+/tháng)' },
        { value: '+60%', label: 'Organic traffic sau 5 tháng' },
        { value: '0đ', label: 'Chi phí phát sinh thêm ngân sách' },
      ],
      tag: 'Trụ cột 2 & 3',
      link: '/case-studies/content-factory-b2b-marketing',
    },
  ];

  const pillarIcons = [Target, Users, Workflow, Cpu, Database, TrendingUp];

  return (
    <div className="editorial-shell">
      <div className="editorial-card min-h-screen flex flex-col justify-between">
        <Header activeSection="service" />

        <main className="px-6 md:px-12 lg:px-20 py-12 flex-1">
          {/* Top Breadcrumb & Tag */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-black/5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs text-[#6E6E6E] hover:text-[#17151A] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Quay lại Trang Chủ</span>
            </Link>

            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAFFDE] border border-[#DFE2C8] text-[11px] font-semibold text-[#17151A]">
                <Layers className="w-3 h-3 text-[#17151A]" />
                SUNEXT METHOD
              </span>
              <span className="text-xs text-[#6E6E6E] hidden sm:inline">•</span>
              <span className="text-xs text-[#6E6E6E] hidden sm:inline">Khung Tham Chiếu 6 Trụ Cột McKinsey Rewired</span>
            </div>
          </div>

          {/* Hero Header Section */}
          <section className="max-w-4xl mb-16">
            <span className="text-xs uppercase tracking-widest text-[#6E6E6E] font-medium block mb-3">
              Tư Duy Chuyển Đổi AI · Báo Cáo Chiến Lược
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-light tracking-tight text-[#17151A] leading-[1.18] mb-8">
              Vì sao <span className="font-normal underline decoration-black/20 underline-offset-8">70% doanh nghiệp</span> chuyển đổi AI thất bại — dù đã mua đủ công cụ
            </h1>

            {/* Pain Point Lead In (Sam Ovens style) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#F5F3F6] border border-black/5 text-[#17151A] space-y-4 mb-8">
              <p className="text-base sm:text-lg font-medium leading-relaxed">
                Bạn đã mua ChatGPT Team cho cả phòng.
              </p>
              <p className="text-base text-[#6E6E6E] leading-relaxed">
                Bạn đã cho nhân viên đi học một khoá &ldquo;AI cho người mới bắt đầu&rdquo;. Bạn đã thử một con chatbot, một cái dashboard, một con agent nào đó do đội IT tự ráp.
              </p>
              <p className="text-base text-[#17151A] font-medium leading-relaxed">
                Sáu tháng sau, mọi thứ vẫn y như cũ. Người ta vẫn copy-paste giữa Excel và email. Vẫn họp để hỏi &ldquo;ai có bản mới nhất&rdquo;. Vẫn mất ba ngày cho việc lẽ ra ba phút xong.
              </p>
              <div className="pt-3 border-t border-black/10 flex items-center gap-3 text-xs text-[#6E6E6E]">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  McKinsey & BCG X chỉ ra: Hơn 70% sáng kiến chuyển đổi số và AI thất bại không phải vì model kém hay thiếu tiền, mà vì <strong>mua công nghệ nhưng không tái cấu trúc tổ chức để dùng được nó</strong>.
                </span>
              </div>
            </div>
          </section>

          {/* Section: Quy tắc 10-20-70 BCG X Callout */}
          <section className="mb-16 p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4">
              <div className="flex items-center gap-2 mb-2">
                <PieChart className="w-4 h-4 text-emerald-800" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6E6E6E]">
                  Quy Tắc Kinh Điển BCG X
                </span>
              </div>
              <h2 className="text-2xl font-light text-[#17151A]">
                Công thức 10 — 20 — 70
              </h2>
              <p className="text-xs text-[#6E6E6E] mt-2 leading-relaxed">
                Nghiên cứu của BCG X chứng minh: sự thành bại của một dự án AI được phân bổ chính xác theo 3 tỷ lệ này. Đa phần các công ty dồn 90% tiền vào 10% đầu tiên.
              </p>
            </div>

            <div className="md:col-span-8 grid grid-cols-3 gap-3 text-center">
              <div className="p-4 rounded-2xl bg-[#F8F8F6] border border-black/5 flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-light text-[#17151A] block">10%</span>
                  <span className="text-xs font-semibold text-[#17151A] block mt-1">Thuật toán & Tool</span>
                </div>
                <span className="text-[10px] text-[#6E6E6E] mt-2 block">Mô hình AI chỉ là công cụ hỗ trợ</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F8F6] border border-black/5 flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-light text-[#17151A] block">20%</span>
                  <span className="text-xs font-semibold text-[#17151A] block mt-1">Hạ tầng Dữ liệu</span>
                </div>
                <span className="text-[10px] text-[#6E6E6E] mt-2 block">Độ sạch và kết nối hệ thống lõi</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAFFDE] border border-[#DFE2C8] flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-light text-emerald-900 block">70%</span>
                  <span className="text-xs font-semibold text-emerald-900 block mt-1">Con người & Quy trình</span>
                </div>
                <span className="text-[10px] text-emerald-800 mt-2 block font-medium">Tái cấu trúc tổ chức & Năng lực</span>
              </div>
            </div>
          </section>

          {/* Section: Cái Lầm Tưởng vs Bản Chất Rewired */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Myth Column */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium mb-4">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Lầm tưởng khiến bạn tốn tiền</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-normal text-[#17151A] mb-4">
                    &ldquo;Cứ mua đủ công cụ tốt, đội ngũ rồi sẽ tự biết cách dùng.&rdquo;
                  </h2>
                  <p className="text-sm text-[#6E6E6E] leading-relaxed mb-4">
                    Sai. Hoàn toàn sai. AI không phải một phần mềm bạn cài vào rồi xong. AI là một <strong>năng lực tổ chức</strong>.
                  </p>
                  <p className="text-sm text-[#6E6E6E] leading-relaxed">
                    Thiếu một trong sáu thứ — chiến lược, con người, quy trình, nền tảng, dữ liệu, cơ chế nhân rộng — tiền bạn bỏ ra mua công cụ AI chỉ nằm im trong một góc, không ai dùng, không tạo ra một đồng giá trị nào.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 text-xs text-[#6E6E6E]">
                  Hậu quả: Sau 90 ngày, chỉ còn 2-3 người tự mày mò sử dụng, 90% ngân sách bản quyền bốc hơi lãng phí.
                </div>
              </div>

              {/* Reality Column (Sunext Method Concept) */}
              <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#FAFFDE] border border-[#DFE2C8] flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-black/5 text-xs font-semibold text-[#17151A] mb-4">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Bản chất: Phương Pháp Luận Sunext (Tham Chiếu Rewired)</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-normal text-[#17151A] mb-4">
                    Tái đấu nối lại toàn bộ doanh nghiệp, không chỉ lắp thêm một cái app
                  </h2>
                  <p className="text-sm text-[#17151A]/80 leading-relaxed mb-6">
                    Để AI tạo ra giá trị kinh tế trên bảng P&L, tổ chức phải vượt qua đồng bộ <strong>6 cửa ải</strong>. Bạn không cần hoàn hảo cả 6 cửa ải cùng lúc, nhưng bạn bắt buộc phải biết <strong>mình đang nghẽn nặng nhất ở đâu</strong> để tập trung nguồn lực giải trước.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-white/70 rounded-2xl border border-black/5">
                      <span className="font-semibold block text-[#17151A]">Trụ Cột 1</span>
                      <span className="text-[#6E6E6E]">Chiến lược số</span>
                    </div>
                    <div className="p-3 bg-white/70 rounded-2xl border border-black/5">
                      <span className="font-semibold block text-[#17151A]">Trụ Cột 2</span>
                      <span className="text-[#6E6E6E]">Nhân tài nội bộ</span>
                    </div>
                    <div className="p-3 bg-white/70 rounded-2xl border border-black/5">
                      <span className="font-semibold block text-[#17151A]">Trụ Cột 3</span>
                      <span className="text-[#6E6E6E]">Mô hình vận hành</span>
                    </div>
                    <div className="p-3 bg-white/70 rounded-2xl border border-black/5">
                      <span className="font-semibold block text-[#17151A]">Trụ Cột 4</span>
                      <span className="text-[#6E6E6E]">Nền tảng công nghệ</span>
                    </div>
                    <div className="p-3 bg-white/70 rounded-2xl border border-black/5">
                      <span className="font-semibold block text-[#17151A]">Trụ Cột 5</span>
                      <span className="text-[#6E6E6E]">Kiến trúc dữ liệu</span>
                    </div>
                    <div className="p-3 bg-white/70 rounded-2xl border border-black/5">
                      <span className="font-semibold block text-[#17151A]">Trụ Cột 6</span>
                      <span className="text-[#6E6E6E]">Mở rộng & Áp dụng</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between">
                  <span className="text-xs font-medium text-[#17151A]">Bạn đang ở đâu trong 6 trụ cột này?</span>
                  <Link href="/danh-gia-san-sang-ai">
                    <Button variant="primary" size="sm" className="rounded-full text-xs gap-1.5">
                      <ClipboardCheck className="w-3.5 h-3.5" />
                      <span>Đo lường với 12 câu hỏi</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Section: 6 Cửa Ải Mọi Doanh Nghiệp Phải Qua */}
          <section className="mb-20">
            <div className="max-w-3xl mb-10">
              <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-medium block mb-2">
                Chi Tiết 6 Trụ Cột Tổ Chức
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#17151A] tracking-tight">
                6 cửa ải mọi doanh nghiệp phải qua
              </h2>
              <p className="text-sm text-[#6E6E6E] mt-3 leading-relaxed">
                Đây không phải lý thuyết hàn lâm. Đây là 6 điểm nghẽn cụ thể mà các dự án AI thường chết trong im lặng — không ai báo cáo lên sếp là &ldquo;dự án đã chết&rdquo;, nó chỉ lặng lẽ không ai dùng nữa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PILLARS_DATA.map((pillar, idx) => {
                const IconComponent = pillarIcons[idx] || Zap;
                return (
                  <Link
                    key={pillar.id}
                    href={`/tu-duy-chuyen-doi-ai/${pillar.slug}`}
                    className="group rounded-3xl p-6 bg-white/80 border border-black/5 hover:border-black/20 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-8 h-8 rounded-full bg-[#F5F3F6] group-hover:bg-[#FAFFDE] border border-black/5 flex items-center justify-center text-xs font-semibold text-[#17151A] transition-colors">
                          0{pillar.number}
                        </span>
                        <span className="text-[11px] font-medium text-[#6E6E6E] group-hover:text-[#17151A] transition-colors">
                          {pillar.rewiredName}
                        </span>
                      </div>

                      <div className="w-10 h-10 rounded-2xl bg-[#F8F8F6] border border-black/5 flex items-center justify-center text-[#17151A] mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <h3 className="text-lg font-normal text-[#17151A] group-hover:font-medium transition-all mb-2 leading-snug">
                        {pillar.title}
                      </h3>

                      <p className="text-xs text-[#6E6E6E] leading-relaxed mb-4">
                        {pillar.tagline}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs text-[#17151A] font-medium">
                      <span>Đọc phân tích chuyên sâu</span>
                      <div className="w-6 h-6 rounded-full bg-[#17151A] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Section: Bằng Chứng Thật - 3 Doanh Nghiệp Đã Làm Đúng (With Authentic Photography) */}
          <section className="mb-20 p-6 sm:p-10 rounded-3xl bg-[#F5F3F6] border border-black/5">
            <div className="max-w-3xl mb-8">
              <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-medium block mb-2">
                Dữ Liệu Kiểm Chứng Thật Tại Hiện Trường
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#17151A] tracking-tight">
                Đây không phải lý thuyết — đây là ba doanh nghiệp đã làm đúng
              </h2>
              <p className="text-xs sm:text-sm text-[#6E6E6E] mt-2">
                Không phép màu nào ở đây cả. Chỉ là ba doanh nghiệp đã làm đúng thứ tự: biết mình yếu ở trụ cột nào, rồi giải đúng trụ cột đó trước khi mua thêm công cụ.
              </p>
            </div>

            {/* Case selector tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {verifiedCases.map((c, idx) => (
                <button
                  key={c.title}
                  type="button"
                  onClick={() => setSelectedCase(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    selectedCase === idx
                      ? 'bg-[#17151A] text-white shadow-xs'
                      : 'bg-white border border-black/5 text-[#6E6E6E] hover:text-[#17151A]'
                  }`}
                >
                  <span>{c.title}</span>
                </button>
              ))}
            </div>

            {/* Selected Case Card with Real Visual Asset */}
            {(() => {
              const current = verifiedCases[selectedCase];
              return (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/5 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#FAFFDE] border border-[#DFE2C8] text-[10px] font-semibold text-[#17151A]">
                          {current.tag}
                        </span>
                        <span className="text-xs text-[#6E6E6E]">{current.industry}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-normal text-[#17151A] mb-2">
                        {current.title}
                      </h3>
                      <p className="text-xs font-medium text-[#6E6E6E] mb-4">{current.team}</p>
                      <p className="text-sm text-[#6E6E6E] leading-relaxed mb-6">
                        {current.story}
                      </p>

                      {/* Case Study Visual Telemetry */}
                      <div className="relative w-full h-[190px] rounded-2xl overflow-hidden border border-black/5 mb-4 shadow-xs">
                        <CaseStudyVisual slug={current.link.replace('/case-studies/', '')} compact />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-black/5 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <Link
                        href={current.link}
                        className="inline-flex items-center gap-1.5 font-medium text-[#17151A] hover:underline"
                      >
                        <span>Hồ sơ kỹ thuật Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        href={`/nganh/${current.industrySlug}`}
                        className="inline-flex items-center gap-1.5 font-medium text-emerald-800 hover:underline"
                      >
                        <span>Xem giải pháp theo ngành tương ứng</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-[#FAFFDE] rounded-2xl p-6 border border-[#DFE2C8] flex flex-col justify-around gap-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#17151A]">
                      Chỉ Số Kinh Tế Xác Thực
                    </span>
                    {current.metrics.map((m) => (
                      <div key={m.label} className="border-b border-black/5 pb-3 last:border-b-0 last:pb-0">
                        <span className="text-3xl font-light text-[#17151A] block">{m.value}</span>
                        <span className="text-xs text-[#6E6E6E]">{m.label}</span>
                      </div>
                    ))}

                    <div className="pt-2 border-t border-black/5 text-[11px] text-[#6E6E6E]">
                      Cam kết bảo vệ dữ liệu với mô hình NDA-first & Private Architecture.
                    </div>
                  </div>
                </div>
              );
            })()}
          </section>

          {/* Section: Đánh Giá Sẵn Sàng (Readiness Assessment Banner) */}
          <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-[#17151A] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="max-w-xl z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-[#FAFFDE] mb-4 border border-white/10">
                <ClipboardCheck className="w-3.5 h-3.5" />
                ĐÁNH GIÁ TRỰC QUAN MIỄN PHÍ
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight leading-snug mb-4">
                Bạn đang ở đâu trong sáu trụ cột này?
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                Đoán không phải là chiến lược. Đo lường mới là chiến lược. Dành 10–15 phút làm bài chẩn đoán 12 câu hỏi để nhận ngay báo cáo định vị điểm nghẽn và bản đồ lộ trình ưu tiên cho doanh nghiệp bạn.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/ai-maturity-assessment">
                  <Button variant="lime" size="lg" className="rounded-full text-sm font-semibold">
                    Làm Bài Chẩn Đoán 12 Câu
                  </Button>
                </Link>
                <Link href="/khung-dau-tu">
                  <Button variant="secondary" size="lg" className="rounded-full text-sm">
                    Xem Khung Đầu Tư Tham Khảo
                  </Button>
                </Link>
              </div>
            </div>

            {/* Decorative Matrix Graphic */}
            <div className="w-full md:w-auto shrink-0 flex flex-col gap-2 p-5 rounded-2xl bg-white/5 border border-white/10 text-xs text-neutral-300 z-10">
              <div className="font-semibold text-white mb-1 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FAFFDE]" />
                <span>6 Trục Chẩn Đoán Cốt Lõi</span>
              </div>
              <div className="flex items-center justify-between gap-6 py-1 border-b border-white/5">
                <span>1. Chiến lược & Tầm nhìn</span>
                <span className="font-mono text-[#FAFFDE]">Pillar 1</span>
              </div>
              <div className="flex items-center justify-between gap-6 py-1 border-b border-white/5">
                <span>2. Đội ngũ & Năng lực</span>
                <span className="font-mono text-[#FAFFDE]">Pillar 2</span>
              </div>
              <div className="flex items-center justify-between gap-6 py-1 border-b border-white/5">
                <span>3. Mô hình vận hành</span>
                <span className="font-mono text-[#FAFFDE]">Pillar 3</span>
              </div>
              <div className="flex items-center justify-between gap-6 py-1 border-b border-white/5">
                <span>4. Nền tảng công nghệ</span>
                <span className="font-mono text-[#FAFFDE]">Pillar 4</span>
              </div>
              <div className="flex items-center justify-between gap-6 py-1 border-b border-white/5">
                <span>5. Kiến trúc dữ liệu</span>
                <span className="font-mono text-[#FAFFDE]">Pillar 5</span>
              </div>
              <div className="flex items-center justify-between gap-6 py-1">
                <span>6. Mở rộng & Governance</span>
                <span className="font-mono text-[#FAFFDE]">Pillar 6</span>
              </div>
            </div>
          </section>

          {/* Section: Bước Tiếp Theo - Booking Consultation */}
          <section className="text-center max-w-2xl mx-auto py-8">
            <h2 className="text-2xl sm:text-3xl font-light text-[#17151A] tracking-tight mb-4">
              Bước tiếp theo
            </h2>
            <p className="text-sm text-[#6E6E6E] leading-relaxed mb-6">
              Bạn không cần làm cả sáu trụ cột cùng lúc — không ai làm nổi việc đó trong một quý. Bạn cần biết trụ cột nào đang chặn bạn nhiều nhất, rồi giải nó trước.
            </p>
            <p className="text-sm font-medium text-[#17151A] mb-8">
              30 phút trao đổi với chuyên gia Sunext đủ để xác định chính xác điều đó, dựa trên đúng bối cảnh doanh nghiệp bạn — không phải một bài thuyết trình bán hàng chung chung.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/#contact">
                <Button variant="primary" size="lg" className="rounded-full shadow-sm text-sm gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Đặt Lịch Tư Vấn 1-on-1 với Chuyên Gia</span>
                </Button>
              </Link>
              <Link href="/nganh">
                <Button variant="secondary" size="lg" className="rounded-full text-sm">
                  Xem Giải Pháp Theo Ngành
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
