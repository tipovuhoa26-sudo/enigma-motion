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

              {/* Body -> 40-56px -> Proof Indicator as pure typography */}
              <div className="mt-10 pt-8 border-t border-black/5">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#7000FF] font-semibold block mb-4">
                  KHUNG PHÂN BỔ NỖ LỰC BCG
                </span>
                <div className="grid grid-cols-3 gap-6 font-mono">
                  <div>
                    <span className="text-2xl sm:text-3xl font-light text-[#17151A] block">10%</span>
                    <span className="text-xs text-[#747474] font-sans font-normal mt-1 block">Technology &amp; Tools</span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-light text-[#17151A] block">20%</span>
                    <span className="text-xs text-[#747474] font-sans font-normal mt-1 block">Data Architecture</span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-light text-[#7000FF] block">70%</span>
                    <span className="text-xs text-[#7000FF] font-sans font-medium mt-1 block">People &amp; Process</span>
                  </div>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <Link href="/danh-gia-san-sang-ai">
                  <Button variant="orange" size="md" className="rounded-xl text-xs font-semibold px-5 py-2.5">
                    <ClipboardCheck className="w-4 h-4 mr-1.5" />
                    <span>Đo lường với 12 câu hỏi</span>
                  </Button>
                </Link>

                <a
                  href="#cac-tru-cot"
                  className="text-xs font-medium text-[#17151A] hover:text-[#7000FF] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Khám phá 6 trụ cột</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: SixPillarsDiagnosticRadar Visual */}
            <div className="lg:col-span-6 flex justify-center">
              <SixPillarsDiagnosticRadar />
            </div>
          </section>

          {/* Section: 6 Trụ Cột Năng Lực (Alternating Editorial Chapters, 60–80vh, No Cards, No Borders) */}
          <section id="cac-tru-cot" className="mb-28 lg:mb-40 scroll-mt-24">
            <div className="max-w-2xl mb-20">
              <span className="text-[11px] uppercase tracking-widest text-[#7000FF] font-semibold block">
                PHƯƠNG PHÁP SUNEXT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#17151A] tracking-tight mt-4 leading-[1.12]">
                Biết chính xác AI đang mắc ở đâu
              </h2>
              <p className="text-base text-[#6E6E6E] font-light mt-6 leading-relaxed">
                6 Trụ Cột là checklist năng lực tổ chức cùng tồn tại đồng thời, không phải quy trình tuần tự. Mỗi chương giải quyết một câu hỏi trọng yếu để tìm đúng điểm nghẽn trước khi đầu tư.
              </p>
            </div>

            {/* Alternating Editorial Chapters Stream (60-80vh per pillar) */}
            <div className="space-y-24 lg:space-y-36">
              {[
                {
                  number: '01',
                  slug: 'chien-luoc-so',
                  vietnameseName: 'CHIẾN LƯỢC',
                  englishName: 'STRATEGY',
                  question: 'AI đang tạo giá trị ở đâu?',
                  focus: 'Doanh nghiệp thường thử nghiệm AI phân tán ở khắp nơi nhưng không nơi nào tạo ra kết quả kinh tế. Trụ cột Chiến lược giúp xác định đúng 1–2 miền nghiệp vụ có đòn bẩy P&L cao nhất để tập trung nguồn lực đầu tư có đo lường.',
                  metric: '−40%',
                  metricLabel: 'Chi phí tuyển dụng & phân bổ ngân sách',
                  align: 'left',
                },
                {
                  number: '02',
                  slug: 'nguoi-tai-cong-nghe',
                  vietnameseName: 'CON NGƯỜI',
                  englishName: 'PEOPLE',
                  question: 'Đội ngũ có thực sự làm chủ AI?',
                  focus: '90% nhân sự dừng lại ở mức thử prompt cơ bản rồi bỏ cuộc sau 60 ngày. Trụ cột Con người phân định chuẩn 5 tầng năng lực thực chiến, đo bằng Pass Mark độc lập và sản lượng công việc thực tế thay vì lý thuyết chung.',
                  metric: '600+',
                  metricLabel: 'Giảng viên & chuyên viên đạt chuẩn Bậc 6',
                  align: 'right',
                },
                {
                  number: '03',
                  slug: 'mo-hinh-van-hanh',
                  vietnameseName: 'VẬN HÀNH',
                  englishName: 'PROCESS',
                  question: 'Quy trình đã được thiết kế lại cho AI chưa?',
                  focus: 'Đưa AI vào quy trình cũ chỉ làm tăng chi phí rà soát lỗi. Trụ cột Vận hành chuẩn hóa SOP và loại bỏ thao tác thừa trước khi tích hợp AI, thiết lập cơ chế Human-in-the-loop bảo đảm kiểm soát chất lượng tuyệt đối.',
                  metric: 'x5 lần',
                  metricLabel: 'Năng suất sản xuất nội dung & SOP nội bộ',
                  align: 'left',
                },
                {
                  number: '04',
                  slug: 'ha-tang-cong-nghe',
                  vietnameseName: 'CÔNG NGHỆ',
                  englishName: 'TECHNOLOGY',
                  question: 'Hạ tầng có hỗ trợ Agent vận hành liên tục?',
                  focus: 'Mua công cụ rời rạc khiến dữ liệu bị cô lập. Trụ cột Công nghệ thiết kế nền tảng Multi-Agent phân tán kết nối trực tiếp với CRM/ERP, triển khai trên hạ tầng Private VPC bảo mật với cam kết Zero Data Retention.',
                  metric: '24/7',
                  metricLabel: 'Vận hành liên tục & Zero Data Leakage',
                  align: 'right',
                },
                {
                  number: '05',
                  slug: 'du-lieu-doanh-nghiep',
                  vietnameseName: 'DỮ LIỆU',
                  englishName: 'DATA',
                  question: 'Dữ liệu có sạch và kết nối trong vùng an toàn?',
                  focus: 'Dữ liệu phân tán và thiếu kiểm soát là nguyên nhân hàng đầu khiến mô hình AI sinh ảo giác. Trụ cột Dữ liệu xây dựng Single Source of Truth, phân quyền an toàn và kết nối kho tri thức vào Private Vector Vault.',
                  metric: '99.8%',
                  metricLabel: 'Độ chính xác truy xuất dữ liệu nghiệp vụ',
                  align: 'left',
                },
                {
                  number: '06',
                  slug: 'do-luong-mo-rong',
                  vietnameseName: 'QUẢN TRỊ & MỞ RỘNG',
                  englishName: 'GOVERNANCE',
                  question: 'Đã có cơ chế kiểm soát rủi ro và đo lường ROI?',
                  focus: 'Thiếu KPI nghiệm thu và cơ chế chuyển giao khiến doanh nghiệp phụ thuộc vĩnh viễn vào tư vấn ngoài. Trụ cột Quản trị thiết lập rào giậu kiểm soát rủi ro, theo dõi ROI theo thời gian thực và bàn giao 100% tự chủ.',
                  metric: '100%',
                  metricLabel: 'Tự chủ vận hành không phụ thuộc bên ngoài',
                  align: 'right',
                },
              ].map((p) => {
                const isLeft = p.align === 'left';
                return (
                  <article
                    key={p.slug}
                    className="min-h-[50vh] flex flex-col justify-center group"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                      {/* Editorial Statement Column */}
                      <div className={`lg:col-span-8 ${isLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="flex items-baseline gap-3 mb-4">
                          <span className="font-mono text-3xl sm:text-4xl font-light text-[#7000FF]/60 group-hover:text-[#7000FF] transition-colors">
                            {p.number}
                          </span>
                          <span className="text-xs font-mono font-bold tracking-widest text-[#7000FF] uppercase">
                            {p.vietnameseName} · {p.englishName}
                          </span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#17151A] tracking-tight leading-[1.12] mb-6">
                          {p.question}
                        </h3>

                        <p className="text-base sm:text-lg text-[#6E6E6E] font-light leading-relaxed max-w-2xl mb-6">
                          {p.focus}
                        </p>

                        <Link
                          href={`/tu-duy-chuyen-doi-ai/${p.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-semibold text-[#17151A] hover:text-[#7000FF] transition-colors group/link"
                        >
                          <span>Xem chi tiết trụ cột {p.number}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </Link>
                      </div>

                      {/* Visual / Metric Accent Column */}
                      <div className={`lg:col-span-4 flex flex-col ${isLeft ? 'lg:order-2 lg:items-end lg:text-right' : 'lg:order-1 lg:items-start lg:text-left'} pt-4`}>
                        <div className="space-y-2">
                          <span className="text-5xl sm:text-6xl font-light font-mono text-[#EA580C] block tracking-tight leading-none">
                            {p.metric}
                          </span>
                          <span className="text-xs text-[#747474] font-light block max-w-[200px] leading-relaxed">
                            {p.metricLabel}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Section: Bằng Chứng Thật - 3 Doanh Nghiệp Đã Làm Đúng (Open Editorial Spread, No Nested Card Shells) */}
          <section className="mb-28 lg:mb-36 pt-16 border-t border-[#E7E7E5]">
            <div className="max-w-3xl mb-12">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#7000FF] font-semibold block mb-2">
                DỮ LIỆU KIỂM CHỨNG TẠI HIỆN TRƯỜNG
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#17151A] tracking-tight leading-snug">
                Đây không phải lý thuyết — đây là ba doanh nghiệp đã làm đúng
              </h2>
              <p className="text-sm sm:text-base text-[#6E6E6E] font-light mt-4 leading-relaxed">
                Không phép màu nào ở đây cả. Chỉ là ba doanh nghiệp đã làm đúng thứ tự: biết mình yếu ở trụ cột nào, rồi giải đúng trụ cột đó trước khi mua thêm công cụ.
              </p>
            </div>

            {/* Case selector text tabs */}
            <div className="flex flex-wrap gap-4 mb-10 pb-4 border-b border-black/5 font-mono text-xs">
              {verifiedCases.map((c, idx) => (
                <button
                  key={c.title}
                  type="button"
                  onClick={() => setSelectedCase(idx)}
                  className={`transition-all cursor-pointer pb-1 ${
                    selectedCase === idx
                      ? 'text-[#17151A] font-semibold border-b-2 border-[#17151A]'
                      : 'text-[#747474] hover:text-[#17151A]'
                  }`}
                >
                  <span>{c.title}</span>
                </button>
              ))}
            </div>

            {/* Selected Case Open Spread */}
            {(() => {
              const current = verifiedCases[selectedCase];
              return (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="text-[#7000FF] font-semibold">{current.tag}</span>
                      <span>·</span>
                      <span className="text-[#6E6E6E]">{current.industry}</span>
                      <span>·</span>
                      <span className="text-[#6E6E6E]">{current.team}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-light text-[#17151A]">
                      {current.title}
                    </h3>

                    <p className="text-base text-[#6E6E6E] font-light leading-relaxed">
                      {current.story}
                    </p>

                    <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono">
                      <Link
                        href={current.link}
                        className="inline-flex items-center gap-1.5 font-semibold text-[#17151A] hover:text-[#7000FF] transition-colors"
                      >
                        <span>Hồ sơ kỹ thuật Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        href={`/nganh/${current.industrySlug}`}
                        className="inline-flex items-center gap-1.5 text-[#747474] hover:text-[#17151A] transition-colors"
                      >
                        <span>Xem giải pháp theo ngành</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 pt-2 font-mono">
                    {current.metrics.map((m) => (
                      <div key={m.label} className="pb-4 border-b border-[#E7E7E5] last:border-b-0">
                        <span className="text-3xl sm:text-4xl font-light text-[#EA580C] block leading-none">{m.value}</span>
                        <span className="text-xs text-[#747474] font-sans font-light mt-2 block">{m.label}</span>
                      </div>
                    ))}
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
