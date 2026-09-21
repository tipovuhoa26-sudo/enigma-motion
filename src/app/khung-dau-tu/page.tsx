'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  DollarSign,
  Calculator,
  ChevronRight,
  ChevronDown,
  Layers,
  Users,
  FileCode,
  ArrowUpRight,
  AlertTriangle,
  Briefcase,
  Sliders,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { Button } from '@/components/Button';
import { INVESTMENT_TIERS, RACI_TECHNICAL_MATRIX } from '@/content/investmentData';
import { STAGE_GATES, DELIVERY_SQUAD, PackageId } from '@/content/governanceData';
import { InvestmentVisual } from '@/components/visuals/InvestmentVisual';

export default function InvestmentFrameworkPage() {
  // Deep dive selection
  const [selectedPackageId, setSelectedPackageId] = useState<PackageId>('department');
  const [deepDiveTab, setDeepDiveTab] = useState<'cfo' | 'cto'>('cfo');
  const [openGateAccordion, setOpenGateAccordion] = useState<number | null>(null);

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
  const activePackage = INVESTMENT_TIERS.find((t) => t.id === selectedPackageId) || INVESTMENT_TIERS[1];

  const toggleGateAccordion = (idx: number) => {
    setOpenGateAccordion(openGateAccordion === idx ? null : idx);
  };

  return (
    <div className="editorial-shell">
      <div className="editorial-card min-h-screen flex flex-col justify-between">
        <Header activeSection="service" />

        <main className="px-6 md:px-12 lg:px-20 py-12 flex-1">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-black/5">
            <nav className="flex items-center gap-2 text-xs text-[#6E6E6E]">
              <Link href="/" className="hover:text-[#111111] transition-colors">
                Trang chủ
              </Link>
              <span>/</span>
              <span className="text-[#111111] font-medium">Khung đầu tư & ROI</span>
            </nav>

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
              Sunext không bán gói phần mềm chung chung. Chúng tôi thiết lập khung đầu tư theo 3 lộ trình giá trị thực tế, kiểm soát qua 4 Stage-Gates bảo vệ ngân sách và gắn chặt với chỉ số hoàn vốn P&L.
            </p>

            {/* Value-Based Investment Horizon Visualizer */}
            <InvestmentVisual className="mb-12" />
          </section>

          {/* 1. 3 Value-Based Investment Pathways Cards */}
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

                      {/* Fee & Payback Highlight */}
                      <div className="p-3.5 rounded-2xl bg-[#F8F8F6] border border-black/5 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] text-[#6E6E6E] font-medium">Ngân sách dịch vụ tham chiếu:</span>
                          <span className="text-xs font-bold text-[#17151A] font-mono">{tier.feeRange}</span>
                        </div>
                        <div className="flex items-center justify-between pt-1.5 border-t border-black/5">
                          <span className="text-[11px] text-[#6E6E6E] font-medium">Thời gian hoàn vốn (Payback):</span>
                          <span className="text-xs font-semibold text-emerald-800 font-mono">{tier.paybackPeriod}</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-2xl bg-[#FAFFDE] border border-[#DFE2C8] text-xs text-[#17151A]">
                        <span className="text-[10px] font-semibold text-[#6E6E6E] uppercase block mb-1">Điểm vào chẩn đoán:</span>
                        <span className="font-medium block">{tier.recommendedEntryScoreRange.label}</span>
                      </div>

                      <div className="pt-2 border-t border-black/5 text-xs text-[#6E6E6E]">
                        <span className="text-[11px] text-[#17151A] font-semibold uppercase tracking-wider block mb-1.5">
                          Phạm vi can thiệp:
                        </span>
                        <p className="text-xs leading-relaxed text-[#17151A]">{tier.scope}</p>
                      </div>
                    </div>

                    <div className="pt-5 border-t border-black/5 mt-6 space-y-3">
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

                      <button
                        type="button"
                        onClick={() => {
                          setSelectedPackageId(tier.id as PackageId);
                          const el = document.getElementById('package-deep-dive');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full py-2.5 px-4 rounded-xl bg-[#17151A] hover:bg-black text-[#FAFFDE] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>Xem chi tiết CFO & CTO</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 2. Package Deep-Dive: CFO vs CTO Layer */}
          <section id="package-deep-dive" className="max-w-5xl mx-auto mb-20 p-6 sm:p-10 rounded-3xl bg-white border border-black/10 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-black/10">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Sliders className="w-4 h-4 text-emerald-800" />
                  <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-semibold">
                    Khung Đối Soát Chuyên Sâu Cho Buying Committee
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-light text-[#17151A]">
                  Lớp Nghiệp Vụ CFO & Lớp Kỹ Thuật CTO
                </h2>
              </div>

              {/* Package Pill Selector */}
              <div className="flex items-center gap-1.5 bg-[#F5F3F6] p-1.5 rounded-2xl border border-black/5">
                {INVESTMENT_TIERS.map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedPackageId(tier.id as PackageId)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      selectedPackageId === tier.id
                        ? 'bg-[#17151A] text-white shadow-xs font-semibold'
                        : 'text-[#6E6E6E] hover:text-[#17151A]'
                    }`}
                  >
                    {tier.id === 'pilot' ? 'Gói 1: Quick Wins' : tier.id === 'department' ? 'Gói 2: Department' : 'Gói 3: Enterprise'}
                  </button>
                ))}
              </div>
            </div>

            {/* Sub-toggle: CFO Layer vs CTO Layer */}
            <div className="flex items-center gap-3 mb-8">
              <button
                type="button"
                onClick={() => setDeepDiveTab('cfo')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  deepDiveTab === 'cfo'
                    ? 'bg-[#FAFFDE] text-[#17151A] border border-[#DFE2C8] shadow-2xs'
                    : 'bg-[#F5F3F6] text-[#6E6E6E] hover:text-[#17151A] border border-transparent'
                }`}
              >
                <Briefcase className="w-4 h-4 text-emerald-800" />
                <span>Lớp A: Dành Cho CFO & Ban Điều Hành (P&L, OPEX & Rủi Ro)</span>
              </button>
              <button
                type="button"
                onClick={() => setDeepDiveTab('cto')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  deepDiveTab === 'cto'
                    ? 'bg-[#17151A] text-[#FAFFDE] shadow-2xs'
                    : 'bg-[#F5F3F6] text-[#6E6E6E] hover:text-[#17151A] border border-transparent'
                }`}
              >
                <FileCode className="w-4 h-4 text-[#A3E635]" />
                <span>Lớp B: Dành Cho CTO / CIO & Solution Architect (API, Security, SLA)</span>
              </button>
            </div>

            {/* Deep Dive Content Display */}
            {deepDiveTab === 'cfo' ? (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[#F8F8F6] border border-black/5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800 block mb-2">
                    1. Mục Tiêu Kinh Doanh & Định Vị P&L:
                  </span>
                  <p className="text-sm text-[#17151A] leading-relaxed">
                    {activePackage.cfoLayer.businessGoal}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-2xs space-y-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#17151A] block">
                      2. Dự Toán Chi Phí Bên Thứ Ba (Pass-through OPEX):
                    </span>
                    <p className="text-xs text-[#6E6E6E] leading-relaxed">
                      {activePackage.cfoLayer.thirdPartyOpexEstimate}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-2xs space-y-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#17151A] block">
                      3. Điều Kiện Đầu Vào Cần Chuẩn Bị:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#6E6E6E]">
                      {activePackage.cfoLayer.inputPrerequisites.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAFFDE] border border-[#DFE2C8] space-y-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-950 block">
                    4. Sản Phẩm Bàn Giao Chính & Tiêu Chuẩn Nghiệm Thu:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-emerald-950/90">
                    <div>
                      <strong className="block text-[#17151A] mb-1.5">Tài sản bàn giao:</strong>
                      <ul className="space-y-1">
                        {activePackage.cfoLayer.keyDeliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-1.5">
                            <span className="text-emerald-800 font-bold">•</span>
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <strong className="block text-[#17151A] mb-1.5">Tiêu chuẩn nghiệm thu Gate 4:</strong>
                      <ul className="space-y-1">
                        {activePackage.cfoLayer.acceptanceCriteria.map((crit, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-1.5">
                            <span className="text-emerald-800 font-bold">•</span>
                            <span>{crit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6 font-sans">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-[#110E15] text-white border border-white/10 space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block">
                      HỆ THỐNG TRONG PHẠM VI (IN-SCOPE SYSTEMS)
                    </span>
                    <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                      {activePackage.ctoLayer.inScopeSystems}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#110E15] text-white border border-white/10 space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-teal-400 block">
                      KIẾN TRÚC AN TOÀN DỮ LIỆU
                    </span>
                    <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                      {activePackage.ctoLayer.dataSecurityTier}
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#0F171A] text-white border border-teal-500/20 space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-teal-300 block">
                    RANH GIỚI KỸ THUẬT & TRÁCH NHIỆM PIPELINE GATE 4
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {activePackage.ctoLayer.pipelineResponsibility}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-white border border-black/10 text-xs space-y-2">
                    <strong className="text-[#17151A] block">Phụ thuộc nhà cung cấp (Vendor Dependencies):</strong>
                    <p className="text-[#6E6E6E] leading-relaxed">{activePackage.ctoLayer.vendorDependencies}</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white border border-black/10 text-xs space-y-2">
                    <strong className="text-[#17151A] block">Chế độ bảo hành tiêu chuẩn & SLA:</strong>
                    <p className="text-[#6E6E6E] leading-relaxed">{activePackage.ctoLayer.warrantyAndSla}</p>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* 3. 4 Cổng Quyết Định & Tiến Độ Giải Ngân (Stage-Gate Governance & Disbursements) */}
          <section className="max-w-5xl mx-auto mb-20">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-800" />
                <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-semibold">
                  Stage-Gate Commercial Model
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#17151A] mb-3">
                4 Cổng Quyết Định Ràng Buộc Trực Tiếp Với Giải Ngân
              </h2>
              <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed">
                Khách hàng giữ quyền dừng dự án (No-Go Decision Authority) tại bất kỳ cổng nào. Ngân sách cho các giai đoạn tiếp theo được bảo toàn trọn vẹn.
              </p>
            </div>

            {/* 4 Stage Gates Horizontal Cards with Accordion for No-Go */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {STAGE_GATES.map((gate, gIdx) => {
                const isOpen = openGateAccordion === gIdx;
                return (
                  <div
                    key={gate.id}
                    className="p-6 rounded-3xl bg-white border border-black/10 shadow-2xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full bg-[#FAFFDE] border border-[#DFE2C8] text-[11px] font-mono font-bold text-[#17151A]">
                          CỔNG 0{gate.gateNumber}
                        </span>
                        <span className="text-xs text-[#6E6E6E] font-mono">{gate.phaseLabel.split(':')[0]}</span>
                      </div>

                      <h3 className="text-lg font-semibold text-[#17151A] mb-2">{gate.name}</h3>

                      <div className="mb-4 space-y-1.5">
                        <span className="text-[11px] text-[#6E6E6E] font-semibold uppercase tracking-wider block">
                          Tiêu chí đánh giá:
                        </span>
                        <ul className="space-y-1 text-xs text-[#17151A]/80">
                          {gate.whatIsEvaluated.map((ev, evIdx) => (
                            <li key={evIdx} className="flex items-start gap-1.5">
                              <span className="text-emerald-700 font-bold">•</span>
                              <span>{ev}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3 rounded-2xl bg-[#F8F8F6] border border-black/5 text-xs text-[#17151A] mb-4">
                        <strong className="block text-[#17151A] mb-1">Điều kiện thông qua:</strong>
                        <p className="text-[#6E6E6E] leading-relaxed">{gate.passCondition}</p>
                      </div>
                    </div>

                    {/* Accordion for No-Go clause */}
                    <div className="pt-3 border-t border-black/5">
                      <button
                        type="button"
                        onClick={() => toggleGateAccordion(gIdx)}
                        className="w-full flex items-center justify-between text-xs font-semibold text-[#17151A] hover:text-emerald-800 transition-colors py-1 cursor-pointer"
                      >
                        <span className="flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                          <span>Điều kiện dừng (No-Go) & Quyền lợi khách hàng</span>
                        </span>
                        {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                      </button>

                      {isOpen && (
                        <div className="mt-3 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 space-y-2 animate-in fade-in-50 duration-200">
                          <div>
                            <strong>Tình huống kích hoạt No-Go:</strong>
                            <p className="text-amber-900 mt-0.5">{gate.noGo.condition}</p>
                          </div>
                          <div>
                            <strong>Bảo toàn ngân sách:</strong>
                            <p className="text-amber-900 mt-0.5">{gate.noGo.budgetTreatment}</p>
                          </div>
                          <div>
                            <strong>Khách hàng nhận bàn giao:</strong>
                            <ul className="list-disc list-inside mt-0.5 text-amber-900 space-y-0.5">
                              {gate.noGo.clientReceives.map((rec, rIdx) => (
                                <li key={rIdx}>{rec}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Disbursement Matrix Table */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-xs mb-6 overflow-x-auto">
              <h3 className="text-lg font-semibold text-[#17151A] mb-2">
                Tiến Độ Giải Ngân Theo 4 Cổng Quyết Định (Disbursement Schedule)
              </h3>
              <p className="text-xs text-[#6E6E6E] leading-relaxed mb-6">
                Chỉ giải ngân khi biên bản nghiệm thu của cổng trước đó được phê duyệt bởi đại diện có thẩm quyền của khách hàng.
              </p>

              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="border-b border-black/10 text-[#6E6E6E] uppercase tracking-wider text-[10px]">
                    <th className="pb-3 font-semibold">Cổng Quyết Định (Stage-Gate)</th>
                    <th className="pb-3 font-semibold text-center">Gói 1 (Pilot)</th>
                    <th className="pb-3 font-semibold text-center">Gói 2 (Department)</th>
                    <th className="pb-3 font-semibold text-center">Gói 3 (Enterprise)</th>
                    <th className="pb-3 font-semibold">Điều Kiện Kích Hoạt Giải Ngân</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 text-[#17151A]">
                  <tr>
                    <td className="py-3 font-semibold">Gate 1: Data & API Readiness</td>
                    <td className="py-3 text-center font-mono font-bold text-emerald-800">20%</td>
                    <td className="py-3 text-center font-mono font-bold text-emerald-800">15%</td>
                    <td className="py-3 text-center font-mono font-bold text-emerald-800">15%</td>
                    <td className="py-3 text-[#6E6E6E]">Ký SOW phạm vi triển khai chi tiết sau đợt Scoping</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">Gate 2: Architecture & Security</td>
                    <td className="py-3 text-center font-mono font-bold text-emerald-800">40%</td>
                    <td className="py-3 text-center font-mono font-bold text-emerald-800">35%</td>
                    <td className="py-3 text-center font-mono font-bold text-emerald-800">35%</td>
                    <td className="py-3 text-[#6E6E6E]">CISO/IT Lead duyệt sơ đồ luồng dữ liệu & ký kết DPA</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">Gate 3: Controlled Run / UAT</td>
                    <td className="py-3 text-center font-mono font-bold text-emerald-800">20%</td>
                    <td className="py-3 text-center font-mono font-bold text-emerald-800">30%</td>
                    <td className="py-3 text-center font-mono font-bold text-emerald-800">30%</td>
                    <td className="py-3 text-[#6E6E6E]">Ký Biên Bản Nghiệm Thu Kỹ Thuật & Phê Duyệt Production</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">Gate 4: Final Handover & Adoption</td>
                    <td className="py-3 text-center font-mono font-bold text-emerald-800">20%</td>
                    <td className="py-3 text-center font-mono font-bold text-emerald-800">20%</td>
                    <td className="py-3 text-center font-mono font-bold text-emerald-800">20%</td>
                    <td className="py-3 text-[#6E6E6E]">Bàn giao toàn bộ mã nguồn, tài khoản cloud & nhân sự đạt Pass Mark</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Contextual Link to Legal & Security */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F5F3F6] border border-black/5 flex flex-wrap items-center justify-between gap-4 text-xs">
              <span className="text-[#6E6E6E]">
                Xem toàn văn các điều khoản No-Go, chính sách bồi thường, tiêu chuẩn nghiệm thu UAT và phân vùng an toàn dữ liệu:
              </span>
              <Link
                href="/phap-ly-bao-mat"
                className="inline-flex items-center gap-1.5 font-semibold text-[#17151A] hover:text-emerald-800 transition-colors"
              >
                <span>Xem Khung Pháp Lý & Bảo Mật Toàn Diện</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

          {/* 4. Enterprise Investment Decision Map for Buying Committee */}
          <section className="max-w-5xl mx-auto mb-20 p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-xs overflow-x-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-[#17151A] mb-3">
              Bản Đồ Ra Quyết Định Đầu Tư Cho Buying Committee
            </h2>
            <p className="text-xs text-[#6E6E6E] leading-relaxed mb-6">
              Bản đồ thông số thương mại, kỹ thuật, mốc giải ngân và cơ chế bảo hành giúp CFO & CTO sàng lọc lựa chọn:
            </p>

            <table className="w-full text-left text-xs font-sans">
              <thead>
                <tr className="border-b border-black/10 text-[#6E6E6E] uppercase tracking-wider text-[10px]">
                  <th className="pb-3 font-semibold w-1/4">Tiêu Chí Sàng Lọc</th>
                  {INVESTMENT_TIERS.map((t) => (
                    <th key={t.id} className="pb-3 font-semibold w-1/4">{t.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 text-[#17151A]">
                <tr>
                  <td className="py-3 font-semibold text-[#6E6E6E]">Điểm vào chẩn đoán</td>
                  {INVESTMENT_TIERS.map((t) => (
                    <td key={t.id} className="py-3">{t.recommendedEntryScoreRange.label}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-[#6E6E6E]">Phạm vi can thiệp</td>
                  {INVESTMENT_TIERS.map((t) => (
                    <td key={t.id} className="py-3">{t.scope}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-[#6E6E6E]">Ngân sách tham chiếu</td>
                  {INVESTMENT_TIERS.map((t) => (
                    <td key={t.id} className="py-3 font-mono font-bold text-emerald-900">{t.feeRange}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-[#6E6E6E]">Dự toán OPEX bên thứ 3</td>
                  {INVESTMENT_TIERS.map((t) => (
                    <td key={t.id} className="py-3 text-xs text-[#6E6E6E]">{t.cfoLayer.thirdPartyOpexEstimate.split('(')[0]}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-[#6E6E6E]">Thời gian hoàn vốn</td>
                  {INVESTMENT_TIERS.map((t) => (
                    <td key={t.id} className="py-3 font-mono font-semibold">{t.paybackPeriod} sau bàn giao</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-[#6E6E6E]">Hành trình BOT</td>
                  {INVESTMENT_TIERS.map((t) => (
                    <td key={t.id} className="py-3">{t.timeToValue}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-[#6E6E6E]">Kiến trúc dữ liệu</td>
                  {INVESTMENT_TIERS.map((t) => (
                    <td key={t.id} className="py-3">{t.ctoLayer.dataSecurityTier.split('.')[0]}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-[#6E6E6E]">Bảo hành tiêu chuẩn</td>
                  {INVESTMENT_TIERS.map((t) => (
                    <td key={t.id} className="py-3">{t.ctoLayer.warrantyAndSla.split('(')[0]}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </section>

          {/* 5. Enterprise Project Delivery Squad */}
          <section className="max-w-5xl mx-auto mb-20 p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-xs overflow-x-auto">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-emerald-800" />
              <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-semibold">
                Dedicated Delivery Squad
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-[#17151A] mb-3">
              Mô Hình Biệt Đội Triển Khai Thực Tế
            </h2>
            <p className="text-xs text-[#6E6E6E] leading-relaxed mb-6">
              Mỗi dự án của khách hàng được phụ trách bởi một Biệt đội chuyên trách phối hợp theo cấu trúc 5 vai trò:
            </p>

            <table className="w-full text-left text-xs font-sans">
              <thead>
                <tr className="border-b border-black/10 text-[#6E6E6E] uppercase tracking-wider text-[10px]">
                  <th className="pb-3 font-semibold">Vai Trò Chuyên Trách</th>
                  <th className="pb-3 font-semibold">Trách Nhiệm Trong Dự Án</th>
                  <th className="pb-3 font-semibold text-center">Gói 1 (Pilot)</th>
                  <th className="pb-3 font-semibold text-center">Gói 2 (Department)</th>
                  <th className="pb-3 font-semibold text-center">Gói 3 (Enterprise)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 text-[#17151A]">
                {DELIVERY_SQUAD.map((role) => (
                  <tr key={role.id}>
                    <td className="py-3 font-semibold">{role.roleTitle}</td>
                    <td className="py-3 text-[#6E6E6E] max-w-xs">{role.responsibility}</td>
                    <td className="py-3 text-center text-xs">{role.involvementByPackage.pilot}</td>
                    <td className="py-3 text-center text-xs font-medium">{role.involvementByPackage.department}</td>
                    <td className="py-3 text-center text-xs font-semibold text-emerald-900">{role.involvementByPackage.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* 6. RACI Technical Matrix for CTO / CIO */}
          <section className="max-w-5xl mx-auto mb-20 p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-xs overflow-x-auto">
            <div className="flex items-center gap-2 mb-2">
              <FileCode className="w-4 h-4 text-emerald-800" />
              <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-semibold">
                Technical Governance
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-[#17151A] mb-3">
              {RACI_TECHNICAL_MATRIX.title}
            </h2>
            <p className="text-xs text-[#6E6E6E] leading-relaxed mb-6">
              Ranh giới phân định trách nhiệm minh bạch giữa Khách hàng, Sunext và Vendor nền tảng theo chuẩn RACI:
            </p>

            <table className="w-full text-left text-xs font-sans mb-4">
              <thead>
                <tr className="border-b border-black/10 text-[#6E6E6E] uppercase tracking-wider text-[10px]">
                  {RACI_TECHNICAL_MATRIX.columns.map((col, cIdx) => (
                    <th key={cIdx} className="pb-3 font-semibold">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 text-[#17151A]">
                {RACI_TECHNICAL_MATRIX.rows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    <td className="py-3 font-semibold">{row.rowLabel}</td>
                    {row.cells.map((cell, cIdx) => (
                      <td key={cIdx} className="py-3">
                        <div className="flex items-center gap-1.5">
                          {cell.code && cell.code !== '-' && (
                            <span className="w-5 h-5 rounded bg-[#17151A] text-white text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                              {cell.code}
                            </span>
                          )}
                          <span className="text-[#6E6E6E]">{cell.description}</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* RACI Legend */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-black/5 text-[11px] text-[#6E6E6E]">
              {RACI_TECHNICAL_MATRIX.legend?.map((item) => (
                <div key={item.code} className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded bg-[#17151A] text-white text-[9px] font-mono font-bold flex items-center justify-center">
                    {item.code}
                  </span>
                  <span>{item.meaning}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Interactive ROI & Budget Estimator Tool with 3 Value Streams */}
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
              Chọn quy mô doanh nghiệp và miền nghiệp vụ ưu tiên của bạn để xem số liệu dự phóng dựa trên benchmark từ các dự án thực tế của Sunext theo 3 dòng giá trị: Capacity Released, Cash Savings và Cost Avoidance.
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

            {/* Calculated Output Box with 3 Value Streams */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-3">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 inline-block">
                  Dự Phóng Cho: {domainNames[domain]}
                </span>
                <h3 className="text-xl font-normal text-[#17151A]">
                  Gói đề xuất: <span className="font-semibold text-emerald-800">{currentCalc.tier}</span>
                </h3>
                <p className="text-xs text-[#6E6E6E] leading-relaxed">
                  Thời gian hoàn thành ước tính: <strong>{currentCalc.weeks}</strong>. Khảo sát kỹ thuật chuyên sâu và kiểm thử mẫu trong tuần đầu tiên qua Gate 1.
                </p>
                <div className="pt-2 text-xs text-[#6E6E6E] space-y-1">
                  <div>• <strong>Capacity Released</strong>: Giải phóng giờ công xử lý thủ công lặp lại.</div>
                  <div>• <strong>Cash Savings</strong>: Giảm chi phí tuyển dụng, làm thêm giờ (OT) hoặc lỗi phế phẩm.</div>
                  <div>• <strong>Cost Avoidance</strong>: Mở rộng quy mô x3 mà không phải tăng biên chế tuyển dụng mới.</div>
                </div>
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
                * Số liệu ước tính dựa trên benchmark thực tế. Khảo sát Scoping 1 tuần để chốt ngân sách và dung sai chính xác.
              </span>
              <Link href="/#contact">
                <Button variant="primary" size="md" className="rounded-full text-xs font-semibold">
                  Đặt Lịch Khảo Sát Kỹ Thuật Chi Tiết
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
