'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  DollarSign,
  Calculator,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { Button } from '@/components/Button';
import { INVESTMENT_TIERS } from '@/content/investmentData';

export default function InvestmentFrameworkPage() {
  // Calculator state
  const [teamSize, setTeamSize] = useState<'small' | 'medium' | 'large' | 'enterprise'>('medium');
  const [domain, setDomain] = useState<'hr' | 'marketing' | 'operations' | 'data'>('operations');

  // Calculations
  const sizeMultipliers = {
    small: { hours: 160, saveMil: 45, tier: 'Gói 1: AI Pilot & Quick Wins', weeks: '4-6 tuần' },
    medium: { hours: 480, saveMil: 140, tier: 'Gói 2: Department AI Operating System', weeks: '8-12 tuần' },
    large: { hours: 1200, saveMil: 360, tier: 'Gói 2 / Gói 3: Multi-department OS', weeks: '12-16 tuần' },
    enterprise: { hours: 3200, saveMil: 950, tier: 'Gói 3: Enterprise AI Transformation', weeks: '4-6 tháng' },
  };

  const domainNames = {
    hr: 'Tuyển dụng & Quản trị Nhân sự (HR AI)',
    marketing: 'Sản xuất Nội dung & Tiếp thị (B2B Content Factory)',
    operations: 'Giám sát Vận hành & Dây chuyền Sản xuất (Computer Vision)',
    data: 'Kiến trúc Dữ liệu Hợp nhất & Trợ lý Tri thức (Enterprise RAG)',
  };

  const currentCalc = sizeMultipliers[teamSize];

  return (
    <div className="editorial-shell">
      <div className="editorial-card min-h-screen flex flex-col justify-between">
        <Header activeSection="service" />

        <main className="px-6 md:px-12 lg:px-20 py-12 flex-1">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-black/5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs text-[#6E6E6E] hover:text-[#17151A] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Quay lại Trang Chủ</span>
            </Link>

            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAFFDE] border border-[#DFE2C8] text-[11px] font-semibold text-[#17151A]">
                <DollarSign className="w-3 h-3 text-[#17151A]" />
                MINH BẠCH NGÂN SÁCH ĐẦU TƯ
              </span>
              <span className="text-xs text-[#6E6E6E] hidden sm:inline">•</span>
              <span className="text-xs text-[#6E6E6E] hidden sm:inline">Value-Based Investment</span>
            </div>
          </div>

          {/* Hero Header */}
          <section className="max-w-4xl mx-auto mb-16 text-center">
            <span className="text-xs uppercase tracking-widest text-[#6E6E6E] font-medium block mb-3">
              Investment & Budgeting Framework
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-[1.2] mb-6">
              Khung Đầu Tư & Ngân Sách Tham Khảo Cho Dự Án Chuyển Đổi AI
            </h1>
            <p className="text-base sm:text-lg text-[#6E6E6E] leading-relaxed max-w-2xl mx-auto mb-8">
              Sunext không bán gói phần mềm chung chung. Chúng tôi thiết lập khung đầu tư theo từng nấc thang quy mô, gắn chặt với mục tiêu hoàn vốn (ROI) và khả năng giải phóng giờ công thực tế cho doanh nghiệp.
            </p>

            {/* Strategic Meeting Image */}
            <div className="relative w-full h-[280px] sm:h-[420px] rounded-3xl overflow-hidden bg-[#F5F3F6] mb-12 shadow-sm border border-black/5">
              <Image
                src="/assets/vietnam-strategy-meeting.jpg"
                alt="Ban lãnh đạo thảo luận lộ trình đầu tư AI"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-left flex items-end justify-between">
                <div>
                  <span className="text-xs font-mono uppercase text-[#FAFFDE] block mb-1">
                    Enterprise AI Advisory Board
                  </span>
                  <p className="text-sm sm:text-base font-normal max-w-xl text-white/90">
                    Lộ trình đầu tư theo Phương Pháp Luận Sunext: chia nhỏ rủi ro, nghiệm thu theo mốc và chuyển giao quyền làm chủ cho đội ngũ nội bộ.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 3 Value-Based Investment Pathways */}
          <section className="max-w-5xl mx-auto mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-medium block mb-2">
                Value-Based Investment Pathways
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#17151A]">
                3 Lộ Trình Đầu Tư Định Lượng Theo Nhu Cầu Doanh Nghiệp
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {INVESTMENT_TIERS.map((tier) => {
                const isPopular = tier.id === 'department';
                return (
                  <div
                    key={tier.id}
                    className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                      isPopular
                        ? 'bg-white border-2 border-[#17151A] shadow-lg ring-4 ring-black/5 -translate-y-1'
                        : 'bg-white/80 border border-black/10 shadow-xs hover:shadow-md'
                    }`}
                  >
                    {isPopular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#17151A] text-[#FAFFDE] text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                        Lộ trình phổ biến nhất
                      </span>
                    )}

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                          {tier.badge}
                        </span>
                        <span className="text-xs text-[#6E6E6E] flex items-center gap-1 font-mono">
                          <Clock className="w-3.5 h-3.5" />
                          {tier.timeToValue}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-[#17151A]">{tier.name}</h3>
                      <p className="text-xs text-[#6E6E6E] leading-relaxed">{tier.subtitle}</p>

                      <div className="p-3.5 rounded-2xl bg-[#F8F8F6] border border-black/5 text-xs">
                        <span className="text-[11px] text-[#6E6E6E] block mb-1 font-medium">Phù hợp:</span>
                        <span className="text-[#17151A] leading-relaxed block">{tier.recommendedFor}</span>
                      </div>

                      <div className="pt-2 border-t border-black/5 text-xs text-[#6E6E6E]">
                        <span className="text-[11px] text-[#17151A] font-semibold uppercase tracking-wider block mb-1.5">
                          Trọng tâm chuyển giao:
                        </span>
                        <p className="text-xs leading-relaxed text-[#17151A]">{tier.scope}</p>
                      </div>
                    </div>

                    <div className="pt-5 border-t border-black/5 mt-6">
                      <div className="bg-emerald-50/80 p-3.5 rounded-2xl border border-emerald-100 text-xs text-emerald-950 space-y-1.5">
                        <span className="font-semibold block text-[11px] uppercase tracking-wider text-emerald-900">
                          Chỉ số cam kết đo lường:
                        </span>
                        <ul className="space-y-1">
                          {tier.measurableOutcomes.map((out, outIdx) => (
                            <li key={outIdx} className="flex items-start gap-1.5">
                              <Sparkles className="w-3 h-3 text-emerald-700 shrink-0 mt-0.5" />
                              <span className="leading-snug">{out}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Interactive ROI & Budget Estimator Tool */}
          <section className="max-w-4xl mx-auto mb-20 p-6 sm:p-10 rounded-3xl bg-[#F5F3F6] border border-black/5">
            <div className="flex items-center gap-2.5 mb-2">
              <Calculator className="w-4 h-4 text-[#17151A]" />
              <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-semibold">
                Công Cụ Tính Toán Nhanh
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-[#17151A] mb-4">
              Ước tính giờ công tiết kiệm & Gói đầu tư khuyến nghị
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed mb-8">
              Chọn quy mô doanh nghiệp và miền nghiệp vụ ưu tiên của bạn để xem số liệu dự phóng dựa trên benchmark từ các dự án thực tế của Sunext.
            </p>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Team Size Selector */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#17151A] block mb-3">
                  1. Quy mô nhân sự doanh nghiệp:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'small', label: 'Dưới 50 người' },
                    { id: 'medium', label: '50 – 200 người' },
                    { id: 'large', label: '200 – 500 người' },
                    { id: 'enterprise', label: 'Trên 500 người' },
                  ].map((sz) => (
                    <button
                      key={sz.id}
                      type="button"
                      onClick={() => setTeamSize(sz.id as typeof teamSize)}
                      className={`p-3 rounded-2xl text-xs font-medium border text-center transition-all cursor-pointer ${
                        teamSize === sz.id
                          ? 'bg-[#17151A] text-white border-[#17151A] shadow-xs'
                          : 'bg-white border-black/10 text-[#6E6E6E] hover:text-[#17151A]'
                      }`}
                    >
                      {sz.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Priority Domain Selector */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#17151A] block mb-3">
                  2. Miền nghiệp vụ muốn tối ưu trước:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'hr', label: 'Tuyển dụng & HR' },
                    { id: 'marketing', label: 'Marketing B2B' },
                    { id: 'operations', label: 'Vận hành chuyền máy' },
                    { id: 'data', label: 'Dữ liệu & Tri thức' },
                  ].map((dm) => (
                    <button
                      key={dm.id}
                      type="button"
                      onClick={() => setDomain(dm.id as typeof domain)}
                      className={`p-3 rounded-2xl text-xs font-medium border text-center transition-all cursor-pointer ${
                        domain === dm.id
                          ? 'bg-[#17151A] text-white border-[#17151A] shadow-xs'
                          : 'bg-white border-black/10 text-[#6E6E6E] hover:text-[#17151A]'
                      }`}
                    >
                      {dm.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Calculated Output Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-3">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 inline-block">
                  Dự Phóng Cho: {domainNames[domain]}
                </span>
                <h3 className="text-xl font-normal text-[#17151A]">
                  Gói đề xuất: <span className="font-semibold text-emerald-800">{currentCalc.tier}</span>
                </h3>
                <p className="text-xs text-[#6E6E6E] leading-relaxed">
                  Thời gian hoàn thành ước tính: <strong>{currentCalc.weeks}</strong>. Khảo sát kỹ thuật chuyên sâu và kiểm thử mẫu trong tuần đầu tiên.
                </p>
              </div>

              <div className="md:col-span-5 bg-[#FAFFDE] rounded-2xl p-5 border border-[#DFE2C8] space-y-3">
                <div>
                  <span className="text-3xl font-light text-[#17151A] block">
                    ~{currentCalc.hours.toLocaleString()} giờ
                  </span>
                  <span className="text-xs text-[#6E6E6E]">Giờ công lặp lại có thể tự động hóa/tháng</span>
                </div>
                <div className="pt-2 border-t border-black/5">
                  <span className="text-2xl font-light text-emerald-900 block">
                    ~{currentCalc.saveMil} triệu VNĐ
                  </span>
                  <span className="text-xs text-[#6E6E6E]">Chi phí giờ công tiết kiệm tiềm năng/tháng</span>
                </div>
              </div>
            </div>

            {/* Direct Consultation Trigger */}
            <div className="mt-8 pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#6E6E6E]">
                * Số liệu ước tính dựa trên dữ liệu trung bình ngành. Cần khảo sát SOP cụ thể để chốt con số chính xác.
              </span>
              <Link href="/#contact">
                <Button variant="primary" size="md" className="rounded-full text-xs font-semibold">
                  Đặt Lịch Khảo Sát Kỹ Thuật Chi Tiết
                </Button>
              </Link>
            </div>
          </section>

          {/* Milestone Billing / Accountability Section */}
          <section className="max-w-4xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span className="text-xs uppercase tracking-wider text-[#17151A] font-semibold">
                Nguyên Tắc Hợp Tác & Thanh Toán Theo Cột Mốc (Milestone-Based Billing)
              </span>
            </div>
            <h3 className="text-xl font-normal text-[#17151A] mb-4">
              Giải ngân theo cột mốc nghiệm thu kết quả, không trả trước 100%
            </h3>
            <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed mb-6">
              Chúng tôi hiểu sự e ngại của doanh nghiệp trước các dự án công nghệ kéo dài mà không thấy kết quả. Sunext áp dụng cơ chế thanh toán chia nhỏ theo từng cột mốc đo lường được:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-[#F8F8F6] border border-black/5">
                <span className="font-semibold block text-[#17151A] mb-1">Cột mốc 1: Khảo sát & Demo</span>
                <span className="text-[#6E6E6E]">Nghiệm thu kiến trúc giải pháp và bản thử nghiệm chức năng cốt lõi (PoC).</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8F8F6] border border-black/5">
                <span className="font-semibold block text-[#17151A] mb-1">Cột mốc 2: Tích hợp & Đào tạo</span>
                <span className="text-[#6E6E6E]">Hệ thống vận hành trơn tru và đội ngũ nhân sự hoàn thành kiểm tra năng lực Tầng 1-2.</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8F8F6] border border-black/5">
                <span className="font-semibold block text-[#17151A] mb-1">Cột mốc 3: Đo lường ROI & Chuyển giao</span>
                <span className="text-[#6E6E6E]">Hệ thống đạt đúng các chỉ số SLA và mục tiêu tiết kiệm thời gian, chi phí đã thống nhất trong đề án.</span>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
