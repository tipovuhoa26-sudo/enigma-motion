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
import { SunextMethodVisualEngine } from '@/components/visuals/SunextMethodVisualEngine';

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
        {/* Top Breadcrumb */}
        <div className="mb-10 pb-6 border-b border-black/5">
          <nav className="flex items-center gap-2 text-xs text-[#6E6E6E]">
            <Link href="/" className="hover:text-[#111111] transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <span className="text-[#111111] font-medium">Phương pháp luận</span>
          </nav>
        </div>

        {/* HERO SECTION: Xác định điểm nghẽn trước khi triển khai AI */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20 lg:mb-28 pb-16 border-b border-black/5">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] uppercase tracking-widest text-[#7000FF] font-semibold block font-mono">
              PHƯƠNG PHÁP SUNEXT
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-[1.12]">
              Xác định điểm nghẽn<br />trước khi triển khai AI.
            </h1>

            <p className="text-base sm:text-lg text-[#626262] leading-relaxed font-light max-w-xl">
              Đánh giá 6 năng lực tổ chức để xác định điểm cần ưu tiên trước khi thiết kế giải pháp.
            </p>

            {/* Single Action Button */}
            <div className="pt-2">
              <Link href="/danh-gia-san-sang-ai">
                <Button variant="orange" size="md" className="rounded-xl text-xs font-semibold px-6 py-3 cursor-pointer">
                  <span>Đánh giá sẵn sàng AI</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: SixPillarsDiagnosticRadar Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <SixPillarsDiagnosticRadar showInsightCard={false} />
          </div>
        </section>

        {/* MASTER ARCHITECTURE: PHƯƠNG PHÁP XUYÊN SUỐT CỦA SUNEXT */}
        <section id="master-narrative" className="mb-28 lg:mb-36 scroll-mt-24">
          <div className="mb-12 max-w-3xl">
            <span className="text-[11px] uppercase tracking-widest text-[#7000FF] font-semibold block font-mono mb-2">
              MỘT XƯƠNG SỐNG DUY NHẤT
            </span>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]" />
              <span className="text-sm font-mono font-bold text-[#EA580C] uppercase tracking-wider">
                VẬN HÀNH → KẾT QUẢ → TỰ CHỦ (BRAND PROMISE)
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#17151A] tracking-tight">
              Một xương sống duy nhất: Discover → Build → Operate → Transfer.
            </h2>
            <p className="text-base text-[#6E6E6E] font-light mt-3 leading-relaxed">
              Bốn chặng triển khai với 4 cổng kiểm soát Go/No-Go. Tại mỗi chặng, các công cụ và khung năng lực được kích hoạt đúng lúc dưới sự bảo vệ của rào chắn Governance &amp; Security xuyên suốt.
            </p>
          </div>

          {/* Sunext Method Visual Engine: Morphing Narrative across 4 Verbs */}
          <div className="pt-4">
            <SunextMethodVisualEngine />
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

        {/* SECTION: 6 NĂNG LỰC TỔ CHỨC — THAM CHIẾU MCKINSEY REWIRED */}
        <section id="cac-tru-cot" className="mb-28 lg:mb-40 scroll-mt-24">
          <div className="max-w-2xl mb-20">
            <span className="text-[11px] uppercase tracking-widest text-[#7000FF] font-semibold block font-mono">
              6 NĂNG LỰC TỔ CHỨC · THAM CHIẾU MCKINSEY REWIRED
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#17151A] tracking-tight mt-4 leading-[1.12]">
              Sáu năng lực quyết định AI có đi vào vận hành
            </h2>
            <p className="text-base text-[#6E6E6E] font-light mt-4 leading-relaxed">
              6 Năng lực tổ chức cùng tồn tại đồng thời, đo lường năng lực thực tế của doanh nghiệp trước khi đầu tư sâu vào công nghệ. Mỗi năng lực dưới đây được minh chứng bằng một bằng chứng trực quan khác biệt.
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
                      CHIẾN LƯỢC · BUSINESS-LED STRATEGY
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#17151A] tracking-tight leading-[1.12] mb-6">
                    Giá trị được đo từ baseline trước triển khai đến kết quả sau vận hành.
                  </h3>
                  <p className="text-base sm:text-lg text-[#6E6E6E] font-light leading-relaxed max-w-2xl mb-6">
                    Doanh nghiệp thường thử nghiệm AI phân tán ở khắp nơi nhưng không nơi nào tạo ra kết quả kinh tế. Năng lực Chiến lược giúp xác định đúng 1–2 miền nghiệp vụ có đòn bẩy P&amp;L cao nhất để tập trung nguồn lực đầu tư có đo lường.
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

            {/* CHAPTER 02: NHÂN TÀI — 5 Talent Levels Visual Progression */}
            <article className="min-h-[45vh] flex flex-col justify-center group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                <div className="lg:col-span-8 lg:order-2">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-mono text-3xl sm:text-4xl font-light text-[#7000FF]">02</span>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#7000FF] uppercase">
                      NHÂN TÀI &amp; NĂNG LỰC · TALENT &amp; SKILLS
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#17151A] tracking-tight leading-[1.12] mb-6">
                    Năng lực nội bộ quyết định AI có được duy trì và mở rộng.
                  </h3>
                  <p className="text-base sm:text-lg text-[#6E6E6E] font-light leading-relaxed max-w-2xl mb-6">
                    90% nhân sự dừng lại ở mức thử prompt cơ bản rồi bỏ cuộc sau 60 ngày. Năng lực Nhân tài phân định chuẩn 5 tầng năng lực thực chiến, đo bằng Pass Mark độc lập và sản lượng công việc thực tế thay vì lý thuyết chung.
                  </p>
                  <Link
                    href="/tu-duy-chuyen-doi-ai/nguoi-tai-cong-nghe"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#17151A] hover:text-[#7000FF] transition-colors"
                  >
                    <span>Xem chi tiết năng lực 02</span>
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

            {/* CHAPTER 03: VẬN HÀNH — Architectural Swimlane SOP Human-in-the-Loop Pipeline */}
            <article className="min-h-[48vh] flex flex-col justify-center group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                <div className="lg:col-span-6">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-mono text-3xl sm:text-4xl font-light text-[#7000FF]">03</span>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#7000FF] uppercase">
                      MÔ HÌNH VẬN HÀNH &amp; SOP · OPERATING MODEL
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#17151A] tracking-tight leading-[1.12] mb-6">
                    Tái cấu trúc luồng việc trước khi áp dụng công cụ.
                  </h3>
                  <p className="text-base sm:text-lg text-[#6E6E6E] font-light leading-relaxed max-w-xl mb-6">
                    Đưa AI vào quy trình cũ chỉ làm tăng chi phí rà soát lỗi. Năng lực Mô hình vận hành chuẩn hóa SOP và loại bỏ thao tác thừa trước khi tích hợp AI, thiết lập cơ chế Human-in-the-loop bảo đảm kiểm soát chất lượng và trách nhiệm giải trình tuyệt đối.
                  </p>
                  <Link
                    href="/tu-duy-chuyen-doi-ai/mo-hinh-van-hanh"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#17151A] hover:text-[#7000FF] transition-colors"
                  >
                    <span>Xem chi tiết năng lực 03</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Evidence: Architectural Swimlane Pipeline (Fills Right Column with High Visual Tension) */}
                <div className="lg:col-span-6 flex flex-col pt-2 space-y-4">
                  <div className="flex items-baseline justify-between gap-4 border-b border-black/10 pb-4">
                    <div>
                      <span className="text-4xl sm:text-5xl font-light font-mono text-[#EA580C] block leading-none">
                        x5 lần
                      </span>
                      <span className="text-xs text-[#747474] font-light block mt-1">
                        Tốc độ chu kỳ SOP &amp; xử lý hồ sơ nghiệp vụ
                      </span>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 font-semibold shrink-0">
                      Kiểm tra nguồn &amp; phê duyệt
                    </span>
                  </div>

                  {/* High-Tension Architectural Swimlane Diagram */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-neutral-950 border border-neutral-800 text-left font-mono space-y-3.5 shadow-sm">
                    <div className="text-[10px] uppercase tracking-wider text-[#A855F7] font-semibold flex items-center justify-between pb-2 border-b border-neutral-800">
                      <span>LUỒNG VẬN HÀNH CÓ KIỂM SOÁT</span>
                      <span className="text-neutral-500">CAN THIỆP CẤP ĐỘ 2 &amp; 3</span>
                    </div>

                    {/* Step 1: Ingestion */}
                    <div className="flex items-center gap-3 text-xs text-neutral-300">
                      <div className="w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[10px] text-white shrink-0">01</div>
                      <div className="flex-1">
                        <span className="text-white font-semibold">Nghiệp Vụ Thô &amp; CRM/ERP Trigger</span>
                        <div className="text-[10px] text-neutral-400 font-sans">Tiếp nhận hồ sơ, brief dự án hoặc luồng dữ liệu tự động</div>
                      </div>
                      <span className="text-[10px] text-[#A855F7] shrink-0 font-mono">Ingestion</span>
                    </div>

                    <div className="w-0.5 h-2.5 bg-neutral-800 ml-3" />

                    {/* Step 2: Custom Agent RAG */}
                    <div className="flex items-center gap-3 text-xs text-neutral-300">
                      <div className="w-6 h-6 rounded-full bg-purple-950 border border-[#7000FF] flex items-center justify-center text-[10px] text-[#C084FC] shrink-0">02</div>
                      <div className="flex-1">
                        <span className="text-[#C084FC] font-semibold">Custom AI Agent &amp; RAG Vector Bus</span>
                        <div className="text-[10px] text-neutral-400 font-sans">Soạn thảo văn bản, đối chiếu quy chuẩn, tính toán bước đầu</div>
                      </div>
                      <span className="text-[10px] text-emerald-400 shrink-0 font-mono">&lt; 3 giây</span>
                    </div>

                    <div className="w-0.5 h-2.5 bg-neutral-800 ml-3" />

                    {/* Step 3: Human-in-the-Loop Checkpoint */}
                    <div className="flex items-center gap-3 text-xs p-2.5 rounded-xl bg-orange-950/40 border border-orange-700/60">
                      <div className="w-6 h-6 rounded-full bg-[#EA580C] text-white flex items-center justify-center text-[10px] font-bold shrink-0">G</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[#FB923C] font-bold uppercase tracking-wider text-[10.5px]">Human-In-The-Loop Checkpoint</span>
                          <span className="text-[9px] bg-red-900/60 text-red-200 px-1.5 py-0.2 rounded font-sans">Bắt buộc</span>
                        </div>
                        <div className="text-[10px] text-orange-200/80 font-sans">Chuyên gia chuyên môn rà soát ngoại lệ &amp; ký duyệt trách nhiệm</div>
                      </div>
                      <span className="text-[10px] text-[#FB923C] shrink-0 font-mono font-bold">100% Audit</span>
                    </div>

                    <div className="w-0.5 h-2.5 bg-neutral-800 ml-3" />

                    {/* Step 4: Dispatch & Tamper-proof Log */}
                    <div className="flex items-center gap-3 text-xs text-neutral-300">
                      <div className="w-6 h-6 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center text-[10px] text-emerald-400 shrink-0">04</div>
                      <div className="flex-1">
                        <span className="text-emerald-300 font-semibold">Ban Hành &amp; Lưu Vết Audit Log Bất Biến</span>
                        <div className="text-[10px] text-neutral-400 font-sans">Đồng bộ sang core banking / ERP / DMS có chứng thư số</div>
                      </div>
                      <span className="text-[10px] text-emerald-400 shrink-0 font-mono">Verified</span>
                    </div>
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
                      NỀN TẢNG CÔNG NGHỆ · TECHNOLOGY PLATFORM
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#17151A] tracking-tight leading-[1.12] mb-6">
                    AI chỉ mở rộng khi hạ tầng đủ ổn định, quan sát được và kiểm soát được.
                  </h3>
                  <p className="text-base sm:text-lg text-[#6E6E6E] font-light leading-relaxed max-w-2xl mb-6">
                    Mua công cụ rời rạc khiến dữ liệu bị cô lập. Năng lực Nền tảng công nghệ thiết kế kiến trúc phân tán kết nối trực tiếp với CRM/ERP, triển khai trên hạ tầng Private VPC bảo mật với cam kết Zero Data Retention.
                  </p>
                  <Link
                    href="/tu-duy-chuyen-doi-ai/ha-tang-cong-nghe"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#17151A] hover:text-[#7000FF] transition-colors"
                  >
                    <span>Xem chi tiết năng lực 04</span>
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
                      KIẾN TRÚC DỮ LIỆU · DATA ARCHITECTURE
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#17151A] tracking-tight leading-[1.12] mb-6">
                    Dữ liệu phải kết nối an toàn trong ranh giới bảo mật.
                  </h3>
                  <p className="text-base sm:text-lg text-[#6E6E6E] font-light leading-relaxed max-w-2xl mb-6">
                    Dữ liệu phân tán và thiếu kiểm soát là nguyên nhân hàng đầu khiến mô hình AI sinh ảo giác. Năng lực Dữ liệu xây dựng Single Source of Truth, phân quyền an toàn và kết nối kho tri thức vào Private Vector Vault.
                  </p>
                  <Link
                    href="/tu-duy-chuyen-doi-ai/du-lieu-doanh-nghiep"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#17151A] hover:text-[#7000FF] transition-colors"
                  >
                    <span>Xem chi tiết năng lực 05</span>
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

            {/* CHAPTER 06: ÁP DỤNG & MỞ RỘNG — Adoption & Scale */}
            <article className="min-h-[45vh] flex flex-col justify-center group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                <div className="lg:col-span-8 lg:order-2">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-mono text-3xl sm:text-4xl font-light text-[#7000FF]">06</span>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#7000FF] uppercase">
                      ÁP DỤNG &amp; MỞ RỘNG · ADOPTION &amp; SCALE
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#17151A] tracking-tight leading-[1.12] mb-6">
                    Làm sao để AI không dừng lại ở một điểm sáng đơn lẻ?
                  </h3>
                  <p className="text-base sm:text-lg text-[#6E6E6E] font-light leading-relaxed max-w-2xl mb-6">
                    Nhiều dự án AI thất bại vì chỉ dừng lại ở vài cá nhân thử nghiệm, không lan tỏa ra toàn bộ phòng ban. Năng lực Áp Dụng &amp; Mở Rộng thiết lập cơ chế đo lường adoption thực tế theo tuần, chính sách thúc đẩy áp dụng và lộ trình nhân rộng use-case từ phòng ban ra toàn bộ doanh nghiệp.
                  </p>
                  <Link
                    href="/tu-duy-chuyen-doi-ai/do-luong-mo-rong"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#17151A] hover:text-[#7000FF] transition-colors"
                  >
                    <span>Xem chi tiết năng lực 06</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Evidence: Adoption & Scaling Metric + Checklist */}
                <div className="lg:col-span-4 lg:order-1 pt-2 space-y-3 font-mono">
                  <span className="text-4xl sm:text-5xl font-light text-[#059669] block leading-none">
                    &gt;85%
                  </span>
                  <span className="text-xs text-[#747474] font-sans font-light block leading-snug">
                    Tỷ lệ nhân sự ứng dụng hàng ngày sau bàn giao
                  </span>
                  {/* Mini Adoption Checklist */}
                  <div className="p-3.5 rounded-xl bg-white/80 border border-black/10 space-y-1.5 text-[10px] text-[#17151A]">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                      <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                      <span>Đo lường tỷ lệ áp dụng theo tuần (DAU/MAU)</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                      <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                      <span>Lộ trình nhân rộng use-case liên phòng ban</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                      <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                      <span>Chính sách khuyến khích &amp; đào tạo liên tục</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                      <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                      <span>Đánh giá tác động P&amp;L định kỳ</span>
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

        {/* EXTERNAL MATURITY REFERENCE: MCKINSEY 2026 THREE HORIZONS */}
        <section className="mb-14 p-6 sm:p-8 rounded-3xl bg-white/70 border border-black/10 backdrop-blur-xs text-xs text-[#525252] space-y-4 font-sans">
          <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-black/5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#7000FF] font-semibold">
              THAM CHIẾU MỨC ĐỘ BIẾN ĐỔI TỔ CHỨC · MCKINSEY 2026 THREE HORIZONS
            </span>
            <span className="text-[10.5px] font-mono text-[#747474]">Góc nhìn tổ chức độc lập với độ sâu công nghệ</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-[11px]">
            <div className="p-4 rounded-2xl bg-black/5 border border-black/5">
              <span className="font-bold text-[#17151A] text-xs block mb-1">01 · Enablement</span>
              <span className="text-[#626262] font-sans text-xs leading-relaxed block">
                AI hỗ trợ từng cá nhân tăng tốc công việc hiện tại.
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-black/5 border border-black/5">
              <span className="font-bold text-[#17151A] text-xs block mb-1">02 · Automation</span>
              <span className="text-[#626262] font-sans text-xs leading-relaxed block">
                AI tự động hóa các workflow xuyên chức năng ở quy mô lớn.
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-200/70">
              <span className="font-bold text-[#7000FF] text-xs block mb-1">03 · Reinvention</span>
              <span className="text-[#581C87] font-sans text-xs leading-relaxed block">
                Thiết kế lại toàn bộ vai trò và mô hình vận hành với AI ở lõi.
              </span>
            </div>
          </div>

          <p className="text-[11px] text-[#747474] font-light">
            * Sunext sử dụng khung này như tham chiếu về mức độ chuyển đổi cách tổ chức làm việc; kết quả đánh giá Sunext không phải là điểm số hay chứng nhận của McKinsey.
          </p>
        </section>

        {/* SECTION: ĐÁNH GIÁ SẴN SÀNG AI */}
        <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-[#17151A] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="max-w-xl z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-[#EA580C] mb-4 border border-white/10 font-mono">
              <ClipboardCheck className="w-3.5 h-3.5" />
              ĐO LƯỜNG NĂNG LỰC 12 CÂU HỎI
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight leading-snug mb-4">
              Doanh nghiệp bạn đang ở đâu trong 6 năng lực tổ chức?
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-light">
              Dành 10 phút làm bài chẩn đoán 12 câu hỏi map trực tiếp về 6 Năng Lực Tổ Chức (tham chiếu McKinsey Rewired) để nhận ngay báo cáo định vị điểm nghẽn và đề xuất điểm vào đầu tư tối ưu.
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
              <span>6 NĂNG LỰC TỔ CHỨC CHẨN ĐOÁN</span>
            </div>
            <div className="flex items-center justify-between gap-8 py-1.5 border-b border-white/5">
              <span>01. Chiến lược &amp; Lộ trình P&amp;L</span>
              <span className="text-[#EA580C]">Capability 1</span>
            </div>
            <div className="flex items-center justify-between gap-8 py-1.5 border-b border-white/5">
              <span>02. Nhân tài &amp; 5 Tầng Năng Lực</span>
              <span className="text-[#EA580C]">Capability 2</span>
            </div>
            <div className="flex items-center justify-between gap-8 py-1.5 border-b border-white/5">
              <span>03. Mô hình vận hành &amp; SOP</span>
              <span className="text-[#EA580C]">Capability 3</span>
            </div>
            <div className="flex items-center justify-between gap-8 py-1.5 border-b border-white/5">
              <span>04. Nền tảng công nghệ &amp; VPC</span>
              <span className="text-[#EA580C]">Capability 4</span>
            </div>
            <div className="flex items-center justify-between gap-8 py-1.5 border-b border-white/5">
              <span>05. Kiến trúc dữ liệu an toàn</span>
              <span className="text-[#EA580C]">Capability 5</span>
            </div>
            <div className="flex items-center justify-between gap-8 py-1.5">
              <span>06. Áp dụng &amp; Mở rộng quy mô</span>
              <span className="text-[#EA580C]">Capability 6</span>
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
