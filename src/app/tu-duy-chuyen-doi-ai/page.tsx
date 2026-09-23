'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Target,
  Users,
  Workflow,
  Cpu,
  Database,
  Lock,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Calendar,
  Layers,
  Sparkles,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { Button } from '@/components/Button';
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
        {/* Top Breadcrumb & Master Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-black/5">
          <nav className="flex items-center gap-2 text-xs text-[#6E6E6E]">
            <Link href="/" className="hover:text-[#111111] transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <span className="text-[#111111] font-medium">Phương pháp luận</span>
          </nav>

          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5FF] border border-[#EDE9FE] text-[11px] font-semibold text-[#7000FF] font-mono">
              <Layers className="w-3 h-3 text-[#7000FF]" />
              SUNEXT METHOD ARCHITECTURE
            </span>
            <span className="text-xs text-[#6E6E6E] hidden sm:inline">•</span>
            <span className="text-xs font-mono text-[#6E6E6E] hidden sm:inline">
              Vận Hành → Kết Quả → Tự Chủ
            </span>
          </div>
        </div>

        {/* HERO SECTION: The Core Question & BCG 10-20-70 Rule */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24 lg:mb-32 pb-16 border-b border-black/5">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#7000FF] font-semibold block font-mono">
                01 DIAGNOSE · CHẨN ĐOÁN NĂNG LỰC TỔ CHỨC
              </span>
              <span className="text-xs text-[#747474] font-medium block mt-2">
                Biết chính xác điểm nghẽn trước khi đầu tư phần mềm
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-[1.12]">
              AI đang mắc ở đâu trong tổ chức?
            </h1>

            <p className="text-base sm:text-lg text-[#626262] leading-relaxed font-light max-w-2xl">
              <strong>6 Trụ Cột = Organizational Capability Checklist</strong>, được kích hoạt linh hoạt để tìm ra nút thắt P&amp;L trọng yếu, <em>không phải quy trình 6 bước tuần tự</em>. Sunext chẩn đoán đúng điểm nghẽn rồi mới thiết kế giải pháp mở khoá.
            </p>

            {/* BCG Effort Allocation Framework */}
            <div className="pt-6 border-t border-black/5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#7000FF] font-semibold block mb-4">
                QUY TẮC PHÂN BỔ NỖ LỰC BCG 10–20–70
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

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/danh-gia-san-sang-ai">
                <Button variant="orange" size="md" className="rounded-xl text-xs font-semibold px-5 py-2.5">
                  <ClipboardCheck className="w-4 h-4 mr-1.5" />
                  <span>Đo lường với 12 câu hỏi</span>
                </Button>
              </Link>

              <a
                href="#master-narrative"
                className="text-xs font-medium text-[#17151A] hover:text-[#7000FF] transition-colors inline-flex items-center gap-1.5"
              >
                <span>Xem kiến trúc 4 động từ</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: SixPillarsDiagnosticRadar Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <SixPillarsDiagnosticRadar />
          </div>
        </section>

        {/* MASTER ARCHITECTURE: 4 ĐỘNG TỪ TUYẾN TÍNH CỦA SUNEXT METHOD */}
        <section id="master-narrative" className="mb-28 lg:mb-36 scroll-mt-24">
          <div className="mb-12 max-w-3xl">
            <span className="text-[11px] uppercase tracking-widest text-[#7000FF] font-semibold block font-mono mb-2">
              THE MASTER NARRATIVE · XƯƠNG SỐNG PHƯƠNG PHÁP LUẬN
            </span>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]" />
              <span className="text-sm font-mono font-bold text-[#EA580C] uppercase tracking-wider">
                VẬN HÀNH → KẾT QUẢ → TỰ CHỦ
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#17151A] tracking-tight">
              4 Động Từ Khóa Trọn Vẹn Hành Trình Chuyển Đổi AI
            </h2>
            <p className="text-base text-[#6E6E6E] font-light mt-3 leading-relaxed">
              Mọi khung năng lực nội bộ (6 Pillars, 3 Principles, 4 Gates, 5 Talent Levels) không cạnh tranh nhau, mà lần lượt trả lời 4 câu hỏi sống còn của một dự án chuyển đổi:
            </p>
          </div>

          {/* 4 Sequential Flow Columns with Hairlines */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-black/10">
            {/* 01 DIAGNOSE */}
            <div className="space-y-4 pb-6 border-b md:border-b-0 md:border-r border-black/10 pr-6">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#7000FF] font-bold">01 DIAGNOSE</span>
                <span className="text-[#747474]">What we diagnose</span>
              </div>
              <h3 className="text-xl font-light text-[#17151A]">
                Doanh nghiệp đang mắc ở đâu?
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6E6E] font-light leading-relaxed">
                Áp dụng <strong>Khung 6 Trụ Cột Năng Lực</strong> (Chiến lược, Con người, Quy trình, Công nghệ, Dữ liệu, Quản trị) để định vị đúng bài toán P&amp;L điểm nghẽn.
              </p>
              <div className="pt-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#7000FF] bg-[#FAF5FF] px-2.5 py-1 rounded border border-[#EDE9FE] inline-block font-semibold">
                  6 Pillars Checklist
                </span>
              </div>
            </div>

            {/* 02 DESIGN */}
            <div className="space-y-4 pb-6 border-b md:border-b-0 md:border-r border-black/10 pr-6">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#7000FF] font-bold">02 DESIGN</span>
                <span className="text-[#747474]">How we design</span>
              </div>
              <h3 className="text-xl font-light text-[#17151A]">
                Can thiệp thế nào là đúng?
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6E6E] font-light leading-relaxed">
                Thiết kế giải pháp tuân thủ <strong>3 Nguyên Tắc Cốt Lõi</strong>: Quy trình trước công cụ · Dữ liệu phải kết nối · KPI trước AI. Chọn đúng độ sâu kỹ thuật (Level 1–4).
              </p>
              <div className="pt-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#7000FF] bg-[#FAF5FF] px-2.5 py-1 rounded border border-[#EDE9FE] inline-block font-semibold">
                  3 Principles · Depth 1–4
                </span>
              </div>
            </div>

            {/* 03 DELIVER */}
            <div className="space-y-4 pb-6 border-b md:border-b-0 md:border-r border-black/10 pr-6">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#EA580C] font-bold">03 DELIVER</span>
                <span className="text-[#747474]">How we deliver</span>
              </div>
              <h3 className="text-xl font-light text-[#17151A]">
                Triển khai &amp; kiểm soát thế nào?
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6E6E] font-light leading-relaxed">
                Xương sống vận hành <strong>4 Pha &amp; 4 Chốt Kiểm Soát (Gate 1 → Gate 4)</strong>. Có cơ chế Go/No-Go độc lập, ngăn chặn hoàn toàn rủi ro đầu tư thất thoát.
              </p>
              <div className="pt-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#EA580C] bg-[#FFF7ED] px-2.5 py-1 rounded border border-[#FED7AA] inline-block font-semibold">
                  4 Phases · 4 Gates Go/No-Go
                </span>
              </div>
            </div>

            {/* 04 TRANSFER */}
            <div className="space-y-4 pb-6 border-none">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-700 font-bold">04 TRANSFER</span>
                <span className="text-[#747474]">Self-reliance</span>
              </div>
              <h3 className="text-xl font-light text-[#17151A]">
                Đội ngũ tự làm chủ thế nào?
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6E6E] font-light leading-relaxed">
                Chuyển giao năng lực theo <strong>5 Tầng Năng Lực Con Người</strong>. Đào tạo cầm tay chỉ việc để doanh nghiệp tự vận hành và mở rộng mà không phụ thuộc tư vấn.
              </p>
              <div className="pt-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 inline-block font-semibold">
                  5 Talent Levels · Handover
                </span>
              </div>
            </div>
          </div>

          {/* Guardrails Banner across the bottom */}
          <div className="mt-8 p-4 rounded-2xl bg-white/70 backdrop-blur-xs border border-black/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#515151]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>GUARDRAIL XUYÊN SUỐT:</span>
              <span className="text-[#17151A] font-semibold">Zero Data Retention (ZDR) · Human-in-the-loop (HITL) · Private VPC</span>
            </div>
            <Link href="/phap-ly-bao-mat" className="text-[#7000FF] font-semibold hover:underline inline-flex items-center gap-1">
              <span>Khung 3 Tầng Bảo Mật</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* SECTION: 6 TRỤ CỘT NĂNG LỰC — ALTERNATING CHAPTERS VỚI VISUAL EVIDENCE ĐA DẠNG */}
        <section id="cac-tru-cot" className="mb-28 lg:mb-40 scroll-mt-24">
          <div className="max-w-2xl mb-20">
            <span className="text-[11px] uppercase tracking-widest text-[#7000FF] font-semibold block font-mono">
              01 DIAGNOSE · 6 TRỤ CỘT NĂNG LỰC
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#17151A] tracking-tight mt-4 leading-[1.12]">
              Biết chính xác AI đang mắc ở đâu
            </h2>
            <p className="text-base text-[#6E6E6E] font-light mt-4 leading-relaxed">
              6 Trụ Cột là checklist năng lực tổ chức cùng tồn tại đồng thời. Mỗi chương dưới đây được minh chứng bằng một bằng chứng trực quan khác biệt — từ số liệu P&amp;L, tháp năng lực, lưu đồ SOP đến ảnh thực địa hiện trường.
            </p>
          </div>

          {/* 6 Chapters with Varied Visual Evidence */}
          <div className="space-y-28 lg:space-y-40">
            {/* CHAPTER 01: CHIẾN LƯỢC — Metric Evidence */}
            <article className="min-h-[45vh] flex flex-col justify-center group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-mono text-3xl sm:text-4xl font-light text-[#7000FF]">01</span>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#7000FF] uppercase">
                      CHIẾN LƯỢC · STRATEGY
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#17151A] tracking-tight leading-[1.12] mb-6">
                    AI đang tạo giá trị ở đâu?
                  </h3>
                  <p className="text-base sm:text-lg text-[#6E6E6E] font-light leading-relaxed max-w-2xl mb-6">
                    Doanh nghiệp thường thử nghiệm AI phân tán ở khắp nơi nhưng không nơi nào tạo ra kết quả kinh tế. Trụ cột Chiến lược giúp xác định đúng 1–2 miền nghiệp vụ có đòn bẩy P&amp;L cao nhất để tập trung nguồn lực đầu tư có đo lường.
                  </p>
                  <Link
                    href="/tu-duy-chuyen-doi-ai/chien-luoc-so"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#17151A] hover:text-[#7000FF] transition-colors"
                  >
                    <span>Xem chi tiết trụ cột 01</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Evidence: Big P&L Scoping Metric */}
                <div className="lg:col-span-4 flex flex-col lg:items-end lg:text-right pt-4">
                  <span className="text-5xl sm:text-6xl font-light font-mono text-[#EA580C] block leading-none">
                    −40%
                  </span>
                  <span className="text-xs text-[#747474] font-light block max-w-[200px] leading-relaxed mt-2">
                    Chi phí tuyển dụng &amp; thời gian ra quyết định phân bổ ngân sách
                  </span>
                </div>
              </div>
            </article>

            {/* CHAPTER 02: CON NGƯỜI — 5 Talent Levels Visual Progression */}
            <article className="min-h-[45vh] flex flex-col justify-center group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                <div className="lg:col-span-8 lg:order-2">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-mono text-3xl sm:text-4xl font-light text-[#7000FF]">02</span>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#7000FF] uppercase">
                      CON NGƯỜI · PEOPLE
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#17151A] tracking-tight leading-[1.12] mb-6">
                    Đội ngũ có thực sự làm chủ AI?
                  </h3>
                  <p className="text-base sm:text-lg text-[#6E6E6E] font-light leading-relaxed max-w-2xl mb-6">
                    90% nhân sự dừng lại ở mức thử prompt cơ bản rồi bỏ cuộc sau 60 ngày. Trụ cột Con người phân định chuẩn 5 tầng năng lực thực chiến, đo bằng Pass Mark độc lập và sản lượng công việc thực tế thay vì lý thuyết chung.
                  </p>
                  <Link
                    href="/tu-duy-chuyen-doi-ai/nguoi-tai-cong-nghe"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#17151A] hover:text-[#7000FF] transition-colors"
                  >
                    <span>Xem chi tiết trụ cột 02</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Evidence: 5 Talent Levels Matrix + Metric */}
                <div className="lg:col-span-4 lg:order-1 pt-2 space-y-3 font-mono">
                  <span className="text-4xl sm:text-5xl font-light text-[#7000FF] block leading-none">
                    600+
                  </span>
                  <span className="text-xs text-[#747474] font-sans font-light block leading-snug">
                    Giảng viên &amp; chuyên viên đạt chuẩn Bậc 6
                  </span>
                  {/* Mini Talent Progression Bar */}
                  <div className="p-3.5 rounded-xl bg-white/80 border border-black/10 space-y-1.5 text-[10px]">
                    <div className="flex items-center justify-between text-[#17151A]">
                      <span>BẬC 1–2: Prompting &amp; Tác nghiệp</span>
                      <span className="text-emerald-700 font-bold">100% Phổ cập</span>
                    </div>
                    <div className="flex items-center justify-between text-[#17151A]">
                      <span>BẬC 3–4: SOP Human-in-the-loop</span>
                      <span className="text-[#7000FF] font-bold">Nòng cốt</span>
                    </div>
                    <div className="flex items-center justify-between text-[#17151A]">
                      <span>BẬC 5: AI Center of Excellence</span>
                      <span className="text-[#EA580C] font-bold">Lãnh đạo</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* CHAPTER 03: VẬN HÀNH — Mini SOP Human-in-the-loop Flow */}
            <article className="min-h-[45vh] flex flex-col justify-center group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-mono text-3xl sm:text-4xl font-light text-[#7000FF]">03</span>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#7000FF] uppercase">
                      VẬN HÀNH · PROCESS
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#17151A] tracking-tight leading-[1.12] mb-6">
                    Quy trình đã được thiết kế lại cho AI chưa?
                  </h3>
                  <p className="text-base sm:text-lg text-[#6E6E6E] font-light leading-relaxed max-w-2xl mb-6">
                    Đưa AI vào quy trình cũ chỉ làm tăng chi phí rà soát lỗi. Trụ cột Vận hành chuẩn hóa SOP và loại bỏ thao tác thừa trước khi tích hợp AI, thiết lập cơ chế Human-in-the-loop bảo đảm kiểm soát chất lượng tuyệt đối.
                  </p>
                  <Link
                    href="/tu-duy-chuyen-doi-ai/mo-hinh-van-hanh"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#17151A] hover:text-[#7000FF] transition-colors"
                  >
                    <span>Xem chi tiết trụ cột 03</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Evidence: Human-in-the-loop SOP Flow + x5 Metric */}
                <div className="lg:col-span-4 flex flex-col lg:items-end lg:text-right pt-2 space-y-3">
                  <span className="text-5xl sm:text-6xl font-light font-mono text-[#EA580C] block leading-none">
                    x5 lần
                  </span>
                  <span className="text-xs text-[#747474] font-light block max-w-[200px] leading-relaxed">
                    Năng suất sản xuất nội dung &amp; SOP vận hành
                  </span>
                  {/* Mini Flow Indicator */}
                  <div className="p-3 rounded-xl bg-white/80 border border-black/10 text-left font-mono text-[10px] space-y-1 text-[#515151]">
                    <div><span className="text-[#7000FF]">Step 1:</span> Input nghiệp vụ thô</div>
                    <div><span className="text-[#7000FF]">Step 2:</span> Custom AI Agent drafting</div>
                    <div><span className="text-[#EA580C] font-bold">Gate:</span> Human expert approval</div>
                    <div><span className="text-emerald-700">Output:</span> Chuẩn hóa ban hành</div>
                  </div>
                </div>
              </div>
            </article>

            {/* CHAPTER 04: CÔNG NGHỆ — Private VPC & Security Architecture Stack */}
            <article className="min-h-[45vh] flex flex-col justify-center group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                <div className="lg:col-span-8 lg:order-2">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-mono text-3xl sm:text-4xl font-light text-[#7000FF]">04</span>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#7000FF] uppercase">
                      CÔNG NGHỆ · TECHNOLOGY
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#17151A] tracking-tight leading-[1.12] mb-6">
                    Hạ tầng có hỗ trợ Agent vận hành liên tục?
                  </h3>
                  <p className="text-base sm:text-lg text-[#6E6E6E] font-light leading-relaxed max-w-2xl mb-6">
                    Mua công cụ rời rạc khiến dữ liệu bị cô lập. Trụ cột Công nghệ thiết kế nền tảng Multi-Agent phân tán kết nối trực tiếp với CRM/ERP, triển khai trên hạ tầng Private VPC bảo mật với cam kết Zero Data Retention.
                  </p>
                  <Link
                    href="/tu-duy-chuyen-doi-ai/ha-tang-cong-nghe"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#17151A] hover:text-[#7000FF] transition-colors"
                  >
                    <span>Xem chi tiết trụ cột 04</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Evidence: Security Architecture Stack + 24/7 Metric */}
                <div className="lg:col-span-4 lg:order-1 pt-2 space-y-3 font-mono">
                  <span className="text-4xl sm:text-5xl font-light text-[#7000FF] block leading-none">
                    24/7
                  </span>
                  <span className="text-xs text-[#747474] font-sans font-light block leading-snug">
                    Vận hành không gián đoạn &amp; Zero Data Leakage
                  </span>
                  {/* Security Architecture Tags */}
                  <div className="space-y-1.5 pt-1 text-[10px]">
                    <div className="px-2.5 py-1 rounded bg-black/5 text-[#17151A] font-semibold">
                      🔒 Zero Data Retention (ZDR)
                    </div>
                    <div className="px-2.5 py-1 rounded bg-[#FAF5FF] border border-[#EDE9FE] text-[#7000FF] font-semibold">
                      ⚡ Private VPC / On-Premise Mesh
                    </div>
                    <div className="px-2.5 py-1 rounded bg-black/5 text-[#515151]">
                      🤖 Multi-Agent Orchestration
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* CHAPTER 05: DỮ LIỆU — Real Field Evidence Photography */}
            <article className="min-h-[45vh] flex flex-col justify-center group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-mono text-3xl sm:text-4xl font-light text-[#7000FF]">05</span>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#7000FF] uppercase">
                      DỮ LIỆU · DATA
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#17151A] tracking-tight leading-[1.12] mb-6">
                    Dữ liệu có sạch và kết nối trong vùng an toàn?
                  </h3>
                  <p className="text-base sm:text-lg text-[#6E6E6E] font-light leading-relaxed max-w-2xl mb-6">
                    Dữ liệu phân tán và thiếu kiểm soát là nguyên nhân hàng đầu khiến mô hình AI sinh ảo giác. Trụ cột Dữ liệu xây dựng Single Source of Truth, phân quyền an toàn và kết nối kho tri thức vào Private Vector Vault.
                  </p>
                  <Link
                    href="/tu-duy-chuyen-doi-ai/du-lieu-doanh-nghiep"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#17151A] hover:text-[#7000FF] transition-colors"
                  >
                    <span>Xem chi tiết trụ cột 05</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Evidence: Real Field Photography + 99.8% Metric */}
                <div className="lg:col-span-4 flex flex-col lg:items-end lg:text-right pt-2 space-y-3">
                  <div className="relative aspect-[16/10] w-full max-w-[260px] rounded-xl overflow-hidden border border-black/10 bg-black/5 shadow-xs">
                    <Image
                      src="/evidence/ptexim-operations-onsite.png"
                      alt="Hiện trường khảo sát dữ liệu logistics"
                      fill
                      className="object-cover saturate-[0.9]"
                      sizes="260px"
                    />
                  </div>
                  <div>
                    <span className="text-3xl sm:text-4xl font-light font-mono text-[#EA580C] block leading-none">
                      99.8%
                    </span>
                    <span className="text-[11px] text-[#747474] font-light block leading-snug mt-1">
                      Độ chính xác đối soát dữ liệu xuất nhập khẩu &amp; chứng từ
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* CHAPTER 06: QUẢN TRỊ — 4 Gates Governance Verification Checklist */}
            <article className="min-h-[45vh] flex flex-col justify-center group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                <div className="lg:col-span-8 lg:order-2">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-mono text-3xl sm:text-4xl font-light text-[#7000FF]">06</span>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#7000FF] uppercase">
                      QUẢN TRỊ &amp; MỞ RỘNG · GOVERNANCE
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#17151A] tracking-tight leading-[1.12] mb-6">
                    Đã có cơ chế kiểm soát rủi ro và đo lường ROI?
                  </h3>
                  <p className="text-base sm:text-lg text-[#6E6E6E] font-light leading-relaxed max-w-2xl mb-6">
                    Thiếu KPI nghiệm thu và cơ chế chuyển giao khiến doanh nghiệp phụ thuộc vĩnh viễn vào tư vấn ngoài. Trụ cột Quản trị thiết lập rào giậu kiểm soát rủi ro, theo dõi ROI theo thời gian thực và bàn giao 100% tự chủ.
                  </p>
                  <Link
                    href="/tu-duy-chuyen-doi-ai/do-luong-mo-rong"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#17151A] hover:text-[#7000FF] transition-colors"
                  >
                    <span>Xem chi tiết trụ cột 06</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Evidence: 4 Gates Handover Checklist + 100% Metric */}
                <div className="lg:col-span-4 lg:order-1 pt-2 space-y-3 font-mono">
                  <span className="text-4xl sm:text-5xl font-light text-[#059669] block leading-none">
                    100%
                  </span>
                  <span className="text-xs text-[#747474] font-sans font-light block leading-snug">
                    Tự chủ vận hành không phụ thuộc đối tác ngoài
                  </span>
                  {/* Mini Gate Checklist */}
                  <div className="p-3.5 rounded-xl bg-white/80 border border-black/10 space-y-1.5 text-[10px] text-[#17151A]">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                      <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                      <span>Gate 1: Data &amp; Scoping Audit</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                      <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                      <span>Gate 2: Architecture &amp; ZDR</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                      <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                      <span>Gate 3: Controlled UAT Pilot</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                      <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                      <span>Gate 4: Handover &amp; CoE Adoption</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* SECTION: 3 DOANH NGHIỆP ĐÃ LÀM ĐÚNG (Open Editorial Spread) */}
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
          <div className="flex flex-wrap gap-6 mb-10 pb-4 border-b border-black/5 font-mono text-xs">
            {verifiedCases.map((c, idx) => (
              <button
                key={c.title}
                type="button"
                onClick={() => setSelectedCase(idx)}
                className={`transition-all cursor-pointer pb-2 ${
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

        {/* SECTION: ĐÁNH GIÁ SẴN SÀNG AI */}
        <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-[#17151A] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="max-w-xl z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-[#EA580C] mb-4 border border-white/10 font-mono">
              <ClipboardCheck className="w-3.5 h-3.5" />
              ĐO LƯỜNG NĂNG LỰC 12 CÂU HỎI
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight leading-snug mb-4">
              Doanh nghiệp bạn đang ở đâu trong 6 trụ cột?
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-light">
              Dành 10 phút làm bài chẩn đoán 12 câu hỏi map trực tiếp về 6 Trụ Cột để nhận ngay báo cáo định vị điểm nghẽn và đề xuất điểm vào đầu tư tối ưu.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/danh-gia-san-sang-ai">
                <Button variant="orange" size="lg" className="rounded-xl text-xs font-semibold px-6 py-3">
                  Làm Bài Chẩn Đoán 12 Câu
                </Button>
              </Link>
              <Link href="/khung-dau-tu">
                <Button variant="outline" size="lg" className="rounded-xl text-xs text-white border-white/20 hover:bg-white/10 px-5 py-3">
                  Cấu Hình Đầu Tư Tham Khảo
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-auto shrink-0 flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 text-xs text-neutral-300 z-10 font-mono">
            <div className="font-semibold text-white mb-1 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#EA580C]" />
              <span>6 TRỤC CHẨN ĐOÁN CỐT LÕI</span>
            </div>
            <div className="flex items-center justify-between gap-8 py-1.5 border-b border-white/5">
              <span>01. Chiến lược &amp; P&amp;L</span>
              <span className="text-[#EA580C]">Pillar 1</span>
            </div>
            <div className="flex items-center justify-between gap-8 py-1.5 border-b border-white/5">
              <span>02. Đội ngũ &amp; 5 Tầng Năng Lực</span>
              <span className="text-[#EA580C]">Pillar 2</span>
            </div>
            <div className="flex items-center justify-between gap-8 py-1.5 border-b border-white/5">
              <span>03. Vận hành &amp; SOP HITL</span>
              <span className="text-[#EA580C]">Pillar 3</span>
            </div>
            <div className="flex items-center justify-between gap-8 py-1.5 border-b border-white/5">
              <span>04. Nền tảng Multi-Agent &amp; VPC</span>
              <span className="text-[#EA580C]">Pillar 4</span>
            </div>
            <div className="flex items-center justify-between gap-8 py-1.5 border-b border-white/5">
              <span>05. Dữ liệu &amp; Zero Retention</span>
              <span className="text-[#EA580C]">Pillar 5</span>
            </div>
            <div className="flex items-center justify-between gap-8 py-1.5">
              <span>06. Quản trị &amp; 4 Cổng Kiểm Soát</span>
              <span className="text-[#EA580C]">Pillar 6</span>
            </div>
          </div>
        </section>

        {/* SECTION: BƯỚC TIẾP THEO */}
        <section className="text-center max-w-2xl mx-auto py-8">
          <h2 className="text-2xl sm:text-3xl font-light text-[#17151A] tracking-tight mb-4">
            Bước tiếp theo
          </h2>
          <p className="text-sm text-[#6E6E6E] leading-relaxed mb-6 font-light">
            Bạn không cần làm cả sáu trụ cột cùng lúc — không ai làm nổi việc đó trong một quý. Bạn cần biết trụ cột nào đang chặn bạn nhiều nhất, rồi giải quyết dứt điểm nó.
          </p>
          <p className="text-sm font-medium text-[#17151A] mb-8">
            30 phút trao đổi cùng chuyên gia Sunext đủ để xác định chính xác điều đó, dựa trên đúng bối cảnh vận hành thực tế của bạn.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/#contact">
              <Button variant="orange" size="lg" className="rounded-xl shadow-sm text-xs font-semibold gap-2 px-6 py-3">
                <Calendar className="w-4 h-4" />
                <span>Đặt Lịch Trao Đổi Chiến Lược 1:1</span>
              </Button>
            </Link>
            <Link href="/nganh">
              <Button variant="outline" size="lg" className="rounded-xl text-xs bg-white/80 hover:bg-white border-[#D5D3CC] px-6 py-3">
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
