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
import { SixPillarsDiagnosticRadar } from '@/components/visuals/SixPillarsDiagnosticRadar';

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

  return (
    <div className="w-full min-h-screen flex flex-col sunext-atmospheric-canvas">
      <Header activeSection="service" />

      <main className="flex-1 flex flex-col w-full max-w-[1280px] mx-auto px-6 md:px-12 py-12 lg:py-16">
          {/* Top Breadcrumb & Tag */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-black/5">
            <nav className="flex items-center gap-2 text-xs text-[#6E6E6E]">
              <Link href="/" className="hover:text-[#111111] transition-colors">
                Trang chủ
              </Link>
              <span>/</span>
              <span className="text-[#111111] font-medium">Phương pháp luận</span>
            </nav>

            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5FF] border border-[#EDE9FE] text-[11px] font-semibold text-[#7000FF]">
                <Layers className="w-3 h-3 text-[#7000FF]" />
                SUNEXT METHOD
              </span>
              <span className="text-xs text-[#6E6E6E] hidden sm:inline">•</span>
              <span className="text-xs text-[#6E6E6E] hidden sm:inline">Khung Tham Chiếu 6 Trụ Cột Đánh Giá Năng Lực AI</span>
            </div>
          </div>

          {/* Hero Header Section — 50/50 Editorial Layout with Diagnostic Radar */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-24 lg:mb-32 pb-16 border-b border-black/5">
            <div className="lg:col-span-6">
              {/* Eyebrow -> 8-12px -> Sublabel */}
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#7000FF] font-semibold block">
                  CHẨN ĐOÁN NĂNG LỰC TỔ CHỨC
                </span>
                <span className="text-xs text-[#747474] font-medium block mt-2">
                  Khung tham chiếu 6 trụ cột đánh giá AI
                </span>
              </div>

              {/* Context block -> 44-64px -> H1 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-[1.15] mt-12">
                AI đang mắc ở đâu trong tổ chức?
              </h1>

              {/* Heading -> 20-28px -> Body */}
              <p className="text-base sm:text-lg text-[#626262] leading-relaxed font-light mt-6">
                <strong>6 Trụ Cột = Organizational Capability Checklist</strong>, được kích hoạt linh hoạt, <em>không phải quy trình 6 bước tuần tự</em>. Sunext chẩn đoán đúng điểm nghẽn đang chặn use case ưu tiên rồi tập trung mở khoá.
              </p>

              {/* Body -> 40-56px -> Proof Indicator */}
              <div className="mt-11 p-4 rounded-2xl bg-[#FAF5FF] border border-[#EDE9FE] text-xs text-[#515151] space-y-2">
                <div className="flex items-center justify-between text-[#7000FF] font-semibold text-[11px] uppercase tracking-wider">
                  <span>Khung phân bổ nỗ lực BCG</span>
                  <span>10 — 20 — 70</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                  <div className="p-2 rounded-lg bg-white border border-[#EDE9FE]">
                    <span className="font-bold text-[#17151A] block">10%</span>
                    <span className="text-[#747474] text-[10px]">Mô hình &amp; Tool</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-[#EDE9FE]">
                    <span className="font-bold text-[#17151A] block">20%</span>
                    <span className="text-[#747474] text-[10px]">Hạ tầng Dữ liệu</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#7000FF]/10 border border-[#7000FF]/20 text-[#7000FF]">
                    <span className="font-bold block">70%</span>
                    <span className="font-medium text-[10px]">Con người &amp; Quy trình</span>
                  </div>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link href="/danh-gia-san-sang-ai">
                  <Button variant="orange" size="md" className="rounded-xl text-xs font-semibold px-5 py-2.5">
                    <ClipboardCheck className="w-4 h-4 mr-1.5" />
                    <span>Đo lường với 12 câu hỏi</span>
                  </Button>
                </Link>

                <a
                  href="#cac-tru-cot"
                  className="px-4 py-2.5 rounded-xl border border-[#D5D3CC] hover:border-[#17151A] text-xs font-medium text-[#17151A] transition-colors inline-flex items-center gap-1.5 bg-white"
                >
                  <span>Xem 6 trụ cột chi tiết</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: SixPillarsDiagnosticRadar Visual */}
            <div className="lg:col-span-6 flex justify-center">
              <SixPillarsDiagnosticRadar />
            </div>
          </section>

          {/* Section: 6 Trụ Cột Năng Lực (Clean Overview Grid) */}
          <section id="cac-tru-cot" className="mb-24 scroll-mt-24">
            {/* Section Header with Spacing Grammar: Eyebrow -> 8-12px -> Sublabel -> 44-64px -> H2 -> 20-28px -> Body */}
            <div className="max-w-3xl mb-14">
              <span className="text-[11px] uppercase tracking-widest text-[#7000FF] font-semibold block">
                PHƯƠNG PHÁP SUNEXT
              </span>
              <span className="text-xs text-[#747474] font-medium block mt-2">
                6 trụ cột năng lực tổ chức
              </span>

              <h2 className="text-3xl sm:text-4xl font-light text-[#17151A] tracking-tight mt-12">
                Biết chính xác AI đang mắc ở đâu
              </h2>
              <p className="text-sm sm:text-base text-[#6E6E6E] font-light mt-6 leading-relaxed">
                Mỗi trụ cột trả lời một câu hỏi cốt lõi về sự sẵn sàng của tổ chức. Chọn trụ cột để xem đầy đủ: <em>1 tình huống → 1 insight → 3 việc Sunext làm → 1 proof xác thực</em>.
              </p>
            </div>

            {/* 6-Pillar Lean Overview Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  number: 1,
                  slug: 'chien-luoc-so',
                  name: 'Chiến lược',
                  question: 'AI đang tạo giá trị ở đâu?',
                  focus: 'Xác định bài toán P&L trọng yếu, tránh thử nghiệm dàn trải không tạo ra tác động kinh tế.',
                  rewired: 'Business-led Roadmap',
                  icon: Target,
                },
                {
                  number: 2,
                  slug: 'nguoi-tai-cong-nghe',
                  name: 'Con người',
                  question: 'Đội ngũ có thực sự làm chủ AI?',
                  focus: 'Phân định 5 tầng năng lực rõ ràng, chuẩn đầu ra Pass Mark độc lập cho từng vị trí.',
                  rewired: 'Talent & Culture Engine',
                  icon: Users,
                },
                {
                  number: 3,
                  slug: 'mo-hinh-van-hanh',
                  name: 'Vận hành',
                  question: 'Quy trình đã được thiết kế lại cho AI chưa?',
                  focus: 'Chuẩn hóa quy trình, bỏ thao tác thừa trước khi đưa AI vào thay thế công việc thủ công.',
                  rewired: 'Agile Operating Model',
                  icon: Workflow,
                },
                {
                  number: 4,
                  slug: 'ha-tang-cong-nghe',
                  name: 'Công nghệ',
                  question: 'Hạ tầng có hỗ trợ Agent vận hành liên tục?',
                  focus: 'Nền tảng Multi-Agent phân tán, bảo mật Private VPC với cam kết Zero Data Retention.',
                  rewired: 'Distributed Tech Platform',
                  icon: Cpu,
                },
                {
                  number: 5,
                  slug: 'du-lieu-doanh-nghiep',
                  name: 'Dữ liệu',
                  question: 'Dữ liệu có sạch và kết nối trong vùng an toàn?',
                  focus: 'Xây dựng Single Source of Truth, kết nối dữ liệu phân tán vào Vector Vault nội bộ.',
                  rewired: 'Data Products & Governance',
                  icon: Database,
                },
                {
                  number: 6,
                  slug: 'do-luong-mo-rong',
                  name: 'Quản trị & Mở rộng',
                  question: 'Đã có cơ chế kiểm soát rủi ro và đo lường ROI?',
                  focus: 'Cơ chế Human-in-the-Loop, rào giậu kiểm soát an toàn và theo dõi P&L theo thời gian thực.',
                  rewired: 'Scaling & Value Tracking',
                  icon: TrendingUp,
                },
              ].map((p) => {
                const IconComponent = p.icon;
                return (
                  <Link
                    key={p.slug}
                    href={`/tu-duy-chuyen-doi-ai/${p.slug}`}
                    className="group p-7 sm:p-8 rounded-3xl bg-white border border-[#E8E8E8] hover:border-[#17151A] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Top: Number & Icon */}
                      <div className="flex items-center justify-between pb-4 border-b border-black/5 mb-6">
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-lg bg-[#FAF5FF] border border-[#EDE9FE] text-[#7000FF] font-mono text-xs font-bold flex items-center justify-center">
                            0{p.number}
                          </span>
                          <span className="text-xs font-medium text-[#17151A]">
                            {p.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#8E8E8E] uppercase tracking-wider">
                          {p.rewired}
                        </span>
                      </div>

                      {/* Primary Statement: The Core Diagnostic Question */}
                      <h3 className="text-xl sm:text-2xl font-light text-[#17151A] group-hover:text-[#7000FF] transition-colors leading-snug mb-3">
                        {p.question}
                      </h3>

                      {/* Supporting Thought */}
                      <p className="text-xs sm:text-sm text-[#6E6E6E] font-light leading-relaxed mb-6">
                        {p.focus}
                      </p>
                    </div>

                    {/* Bottom Action: 1 Link to Detail */}
                    <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs font-medium text-[#17151A]">
                      <span className="text-[#747474] group-hover:text-[#17151A] transition-colors">
                        Xem 4 bước chẩn đoán
                      </span>
                      <div className="w-6 h-6 rounded-full bg-[#FAF5FF] group-hover:bg-[#17151A] text-[#7000FF] group-hover:text-white flex items-center justify-center transition-all">
                        <ArrowUpRight className="w-3.5 h-3.5" />
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
                        <span className="px-2.5 py-0.5 rounded-full bg-[#FAF5FF] border border-[#EDE9FE] text-[10px] font-semibold text-[#7000FF]">
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

                  <div className="lg:col-span-5 bg-[#FAF5FF] rounded-2xl p-6 border border-[#EDE9FE] flex flex-col justify-around gap-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7000FF]">
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
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-[#F97316] mb-4 border border-white/10">
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
                  <Button variant="orange" size="lg" className="rounded-xl text-sm font-semibold">
                    Làm Bài Chẩn Đoán 12 Câu
                  </Button>
                </Link>
                <Link href="/khung-dau-tu">
                  <Button variant="outline" size="lg" className="rounded-xl text-sm text-white border-white/20 hover:bg-white/10">
                    Xem Khung Đầu Tư Tham Khảo
                  </Button>
                </Link>
              </div>
            </div>

            {/* Decorative Matrix Graphic */}
            <div className="w-full md:w-auto shrink-0 flex flex-col gap-2 p-5 rounded-2xl bg-white/5 border border-white/10 text-xs text-neutral-300 z-10">
              <div className="font-semibold text-white mb-1 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#F97316]" />
                <span>6 Trục Chẩn Đoán Cốt Lõi</span>
              </div>
              <div className="flex items-center justify-between gap-6 py-1 border-b border-white/5">
                <span>1. Chiến lược & Tầm nhìn</span>
                <span className="font-mono text-[#F97316]">Pillar 1</span>
              </div>
              <div className="flex items-center justify-between gap-6 py-1 border-b border-white/5">
                <span>2. Đội ngũ & Năng lực</span>
                <span className="font-mono text-[#F97316]">Pillar 2</span>
              </div>
              <div className="flex items-center justify-between gap-6 py-1 border-b border-white/5">
                <span>3. Mô hình vận hành</span>
                <span className="font-mono text-[#F97316]">Pillar 3</span>
              </div>
              <div className="flex items-center justify-between gap-6 py-1 border-b border-white/5">
                <span>4. Nền tảng công nghệ</span>
                <span className="font-mono text-[#F97316]">Pillar 4</span>
              </div>
              <div className="flex items-center justify-between gap-6 py-1 border-b border-white/5">
                <span>5. Kiến trúc dữ liệu</span>
                <span className="font-mono text-[#F97316]">Pillar 5</span>
              </div>
              <div className="flex items-center justify-between gap-6 py-1">
                <span>6. Mở rộng & Governance</span>
                <span className="font-mono text-[#F97316]">Pillar 6</span>
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
                <Button variant="orange" size="lg" className="rounded-xl shadow-sm text-sm gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Đặt Lịch Tư Vấn 1-on-1 với Chuyên Gia</span>
                </Button>
              </Link>
              <Link href="/nganh">
                <Button variant="outline" size="lg" className="rounded-xl text-sm bg-white/80 hover:bg-white border-[#D5D3CC]">
                  Xem Giải Pháp Theo Ngành
                </Button>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
    </div>
  );
}
