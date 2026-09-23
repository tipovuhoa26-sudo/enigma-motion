'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Shield,
  ShieldCheck,
  Lock,
  FileText,
  AlertTriangle,
  Scale,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Sparkles,
  Server,
  Layers,
  FileCode,
  HeartPulse,
  TrendingUp,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { Button } from '@/components/Button';
import {
  IP_DEMARCATION_BLOCKS,
  HEALTHCARE_CLINICAL_BOUNDARY_NOTICE,
  FINANCE_COMPLIANCE_NOTICE,
  UAT_GATE3_VS_GATE4_COMPARISON,
  WARRANTY_TIERS,
  INCIDENT_SLA_MATRIX,
  EXIT_TRANSITION_RIGHTS,
} from '@/content/legalSecurityData';
import { DATA_SECURITY_TIERS, STAGE_GATES, RBAC_ROLE_MATRIX } from '@/content/governanceData';
import { DataSecurityVisual } from '@/components/visuals/DataSecurityVisual';

export default function LegalSecurityPage() {
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
              <span className="text-[#111111] font-medium">Pháp lý & Bảo mật</span>
            </nav>

            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5FF] border border-[#EDE9FE] text-[11px] font-semibold text-[#7000FF]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7000FF]" />
                C-LEVEL GOVERNANCE & LEGAL COMPLIANCE
              </span>
            </div>
          </div>

          {/* Hero Header */}
          <section className="max-w-4xl mx-auto mb-12 text-center">
            <span className="text-xs uppercase tracking-widest text-[#6E6E6E] font-medium block mb-3">
              Legal, Security & Operating Governance
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-[1.2] mb-6">
              Khung Pháp Lý, An Toàn Thông Tin & Quản Trị Vận Hành
            </h1>
            <p className="text-base sm:text-lg text-[#6E6E6E] leading-relaxed max-w-2xl mx-auto mb-8">
              Bản cam kết minh bạch dành riêng cho Hội Đồng Thẩm Định (Buying Committee), CISO, Giám Đốc Pháp Chế và Ban Điều Hành: Phân định quyền sở hữu trí tuệ, thỏa thuận xử lý dữ liệu DPA, 3 cấp an toàn dữ liệu · 4 cấu hình triển khai và cơ chế giải ngân theo Stage-Gate.
            </p>

            {/* In-page Anchor Navigation Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl bg-[#F5F3F6] border border-black/5 text-xs font-medium">
              {[
                { href: '#ip', label: '1. Phân định Sở hữu trí tuệ' },
                { href: '#dpa', label: '2. 3 Cấp an toàn · 4 Cấu hình' },
                { href: '#stage-gate', label: '3. 4 Cổng Stage-Gate' },
                { href: '#compliance', label: '4. Tuân thủ Ngành' },
                { href: '#uat', label: '5. Tiêu chuẩn UAT' },
                { href: '#sla', label: '6. Bảo hành & SLA' },
                { href: '#exit', label: '7. Quyền Rút lui' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1.5 rounded-xl text-[#6E6E6E] hover:text-[#17151A] hover:bg-white transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </section>

          {/* Section 1: IP Demarcation */}
          <section id="ip" className="max-w-5xl mx-auto mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 mb-2">
              <Scale className="w-4 h-4 text-emerald-800" />
              <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-semibold">
                Mục 1 · Intellectual Property
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-[#17151A] mb-4">
              Phân Định Rõ Ràng Quyền Sở Hữu Trí Tuệ (IP Demarcation)
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed mb-8">
              Sunext cam kết bảo vệ trọn vẹn tài sản trí tuệ của doanh nghiệp. Mọi mã nguồn phát triển riêng đều thuộc sở hữu của khách hàng; các công cụ dùng chung được cấp quyền sử dụng vĩnh viễn, không thu phí bản quyền.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {IP_DEMARCATION_BLOCKS.map((block) => (
                <div
                  key={block.id}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 rounded-full bg-[#FAF5FF] border border-[#EDE9FE] text-[10px] font-bold text-[#7000FF] uppercase tracking-wider">
                        {block.badge}
                      </span>
                      <span className="text-[11px] font-mono text-[#6E6E6E]">{block.subtitle}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#17151A] mb-4">{block.title}</h3>
                    <ul className="space-y-2 text-xs text-[#17151A]/80 leading-relaxed">
                      {block.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: DPA & 4 Data Security Tiers */}
          <section id="dpa" className="max-w-5xl mx-auto mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-4 h-4 text-emerald-800" />
              <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-semibold">
                Mục 2 · Data Processing Agreement
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-[#17151A] mb-4">
              Thỏa Thuận Xử Lý Dữ Liệu & 3 Cấp An Toàn · 4 Cấu Hình Triển Khai
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed mb-8">
              Mọi dự án đều bắt buộc ký kết Thỏa thuận Xử lý Dữ liệu (DPA) và NDA trước khi tiếp cận dữ liệu nghiệp vụ. Kiến trúc phân vùng đảm bảo nguyên tắc Zero Data Retention và Zero Data Egress.
            </p>

            {/* Visual HUD Diagram */}
            <DataSecurityVisual className="mb-10" />

            {/* 4 Data Tiers Table */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-xs overflow-x-auto">
              <h3 className="text-lg font-semibold text-[#17151A] mb-4">
                Bảng Đối Soát 3 Cấp An Toàn Dữ Liệu · 4 Cấu Hình Triển Khai (Tier 1, Tier 2, Tier 3A, Tier 3B)
              </h3>
              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="border-b border-black/10 text-[#6E6E6E] uppercase tracking-wider text-[10px]">
                    <th className="pb-3 font-semibold w-1/5">Cấp Độ An Toàn</th>
                    <th className="pb-3 font-semibold w-1/4">Phạm Vi Dữ Liệu</th>
                    <th className="pb-3 font-semibold w-1/3">Cơ Chế Xử Lý & Lưu Trữ</th>
                    <th className="pb-3 font-semibold">Cam Kết Kỹ Thuật</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 text-[#17151A]">
                  {DATA_SECURITY_TIERS.map((tier) => (
                    <tr key={tier.id}>
                      <td className="py-4 font-semibold font-mono text-emerald-950 pr-4">{tier.label}</td>
                      <td className="py-4 text-[#6E6E6E] pr-4 leading-relaxed">{tier.scopeOfUse}</td>
                      <td className="py-4 text-[#17151A] pr-4 leading-relaxed">{tier.processingMechanism}</td>
                      <td className="py-4 text-emerald-900 font-medium leading-relaxed">{tier.legalTechnicalCommitment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Stage-Gate Governance */}
          <section id="stage-gate" className="max-w-5xl mx-auto mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-800" />
              <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-semibold">
                Mục 3 · Stage-Gate Governance
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-[#17151A] mb-4">
              Khung Quản Trị Cổng Quyết Định & Điều Kiện Dừng (Stage-Gate & No-Go)
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed mb-8">
              Cơ chế bảo vệ ngân sách: Khách hàng giữ toàn quyền quyết định dừng dự án (No-Go) tại bất kỳ cổng nào nếu điều kiện kỹ thuật không đạt chuẩn.
            </p>

            <div className="space-y-4 mb-8">
              {STAGE_GATES.map((gate) => (
                <div
                  key={gate.id}
                  className="p-6 rounded-3xl bg-white border border-black/10 shadow-2xs grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
                >
                  <div className="md:col-span-4 space-y-2">
                    <span className="px-3 py-1 rounded-full bg-[#FAF5FF] border border-[#EDE9FE] text-[10px] font-mono font-bold text-[#7000FF] inline-block">
                      CỔNG 0{gate.gateNumber}
                    </span>
                    <h3 className="text-lg font-semibold text-[#17151A]">{gate.name}</h3>
                    <span className="text-xs text-[#6E6E6E] block font-mono">{gate.phaseLabel}</span>
                  </div>

                  <div className="md:col-span-8 space-y-3 text-xs">
                    <div>
                      <strong className="text-[#17151A] block mb-1">Tiêu chuẩn vượt qua:</strong>
                      <p className="text-[#6E6E6E] leading-relaxed">{gate.passCondition}</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 space-y-1.5">
                      <strong className="text-amber-900 block font-semibold">
                        Điều kiện No-Go & Quyền lợi khách hàng:
                      </strong>
                      <p className="text-amber-900 leading-relaxed">{gate.noGo.condition}</p>
                      <p className="text-amber-950 font-medium">Bảo toàn ngân sách: {gate.noGo.budgetTreatment}</p>
                    </div>

                    {gate.signOff && (
                      <div className="p-3.5 rounded-2xl bg-[#FAF5FF] border border-[#EDE9FE] space-y-1 text-xs">
                        <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] font-mono">
                          <span className="font-bold text-[#7000FF] uppercase tracking-wider">
                            VĂN BẢN NGHIỆM THU PHÁP LÝ (SIGN-OFF)
                          </span>
                          <span className="text-[#6E6E6E]">
                            Đầu mối ký: {gate.signOff.signatoryRole}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-[#17151A]">
                          {gate.signOff.documentName}
                        </p>
                        <p className="text-[11px] text-[#6E6E6E] leading-relaxed">
                          <strong>Bản chất:</strong> {gate.signOff.natureOfAcceptance} · <strong>Trạng thái sau ký:</strong> {gate.signOff.systemStateAfter}
                        </p>
                        <p className="text-[11px] text-emerald-800 font-medium">
                          <strong>Tác động giải ngân:</strong> {gate.signOff.disbursementImpact}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* RBAC Role & Change Authority Matrix */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-xs overflow-x-auto">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-4 h-4 text-[#7000FF]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7000FF]">
                  PHÂN QUYỀN TRUY CẬP THEO VAI TRÒ (RBAC MATRIX)
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#17151A] mb-2">
                {RBAC_ROLE_MATRIX.title}
              </h3>
              <p className="text-xs text-[#6E6E6E] mb-6 leading-relaxed">
                Thiết lập ranh giới quản trị và thẩm quyền phê duyệt rõ ràng giữa 5 nhóm vai trò tổ chức, ngăn ngừa rủi ro vận hành và bảo vệ tính toàn vẹn của mô hình.
              </p>

              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="border-b border-black/10 text-[#6E6E6E] uppercase tracking-wider text-[10px]">
                    {RBAC_ROLE_MATRIX.columns.map((col, cIdx) => (
                      <th key={cIdx} className={`pb-3 font-semibold ${cIdx === 0 ? 'w-1/4' : 'w-[15%]'}`}>
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 text-[#17151A]">
                  {RBAC_ROLE_MATRIX.rows.map((row, rIdx) => (
                    <tr key={rIdx}>
                      <td className="py-4 pr-4 align-top">
                        <strong className="block text-[#17151A]">{row.rowLabel}</strong>
                        {row.rowMeta && (
                          <span className="text-[11px] text-[#6E6E6E] block mt-0.5">{row.rowMeta}</span>
                        )}
                      </td>
                      {row.cells.map((cell, cellIdx) => (
                        <td key={cellIdx} className="py-4 pr-3 align-top leading-relaxed text-[11px]">
                          {cell.code && (
                            <span
                              className={`inline-block px-1.5 py-0.5 rounded text-[9px] font-mono font-bold mb-1 ${
                                cell.code === 'NONE'
                                  ? 'bg-neutral-100 text-neutral-500'
                                  : cell.code === 'FULL' || cell.code === 'FINAL'
                                  ? 'bg-purple-100 text-[#7000FF]'
                                  : cell.code === 'APPROVE' || cell.code === 'SIGN-OFF'
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-amber-100 text-amber-800'
                              }`}
                            >
                              {cell.code}
                            </span>
                          )}
                          <p className="text-[#515151]">{cell.description}</p>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Industry Regulated Compliance */}
          <section id="compliance" className="max-w-5xl mx-auto mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-semibold">
                Mục 4 · Regulated Compliance
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-[#17151A] mb-4">
              Quy Chuẩn Tuân Thủ Ngành Có Quản Lý Nghiêm Ngặt
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed mb-8">
              Đối với các ngành nhạy cảm cao như Tài chính - Ngân hàng và Y tế - Bệnh viện, hệ thống được thiết lập các chốt chặn kỹ thuật và ranh giới đạo đức tuyệt đối.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Finance Notice */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#F8F8F6] border border-black/10 shadow-2xs space-y-4">
                <div className="flex items-center gap-2.5">
                  <TrendingUp className="w-5 h-5 text-teal-700" />
                  <h3 className="text-base font-semibold text-[#17151A]">
                    {FINANCE_COMPLIANCE_NOTICE.title}
                  </h3>
                </div>
                <p className="text-xs text-[#17151A]/85 leading-relaxed">
                  {FINANCE_COMPLIANCE_NOTICE.body}
                </p>
                <div className="pt-3 border-t border-black/5 flex items-center justify-between text-xs">
                  <span className="text-[#6E6E6E]">Áp dụng cho: Chứng khoán, Quản lý quỹ, Ngân hàng</span>
                  <Link href="/nganh/tai-chinh-dau-tu" className="font-medium text-[#17151A] hover:underline">
                    Xem giải pháp ngành →
                  </Link>
                </div>
              </div>

              {/* Healthcare Notice */}
              <div className="p-6 sm:p-8 rounded-3xl bg-amber-50/80 border border-amber-300 shadow-2xs space-y-4">
                <div className="flex items-center gap-2.5">
                  <HeartPulse className="w-5 h-5 text-amber-800" />
                  <h3 className="text-base font-semibold text-amber-950">
                    {HEALTHCARE_CLINICAL_BOUNDARY_NOTICE.title}
                  </h3>
                </div>
                <p className="text-xs text-amber-950/90 leading-relaxed">
                  {HEALTHCARE_CLINICAL_BOUNDARY_NOTICE.body}
                </p>
                <div className="pt-3 border-t border-amber-200 flex items-center justify-between text-xs">
                  <span className="text-amber-900">Áp dụng cho: Bệnh viện, Chuỗi phòng khám</span>
                  <Link href="/nganh/y-te-suc-khoe" className="font-semibold text-amber-950 hover:underline">
                    Xem giải pháp ngành →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: UAT Standards & Gate 3 vs Gate 4 Comparison */}
          <section id="uat" className="max-w-5xl mx-auto mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-800" />
              <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-semibold">
                Mục 5 · UAT Acceptance Standards
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-[#17151A] mb-4">
              Tiêu Chuẩn Nghiệm Thu Kỹ Thuật UAT & Phân Định Biên Bản Ký Duyệt
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed mb-8">
              Phân định minh bạch giữa Biên bản nghiệm thu kỹ thuật Gate 3 (chấp thuận vận hành Production) và Biên bản nghiệm thu chuyển giao tự chủ Gate 4 (bàn giao toàn bộ quyền sở hữu).
            </p>

            {/* UAT 3 Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="p-6 rounded-3xl bg-white border border-black/10 shadow-2xs space-y-2">
                <span className="text-[11px] font-mono font-bold text-emerald-800 uppercase block">BƯỚC 1</span>
                <h4 className="font-semibold text-sm text-[#17151A]">Kiểm Thử Staging/Sandbox</h4>
                <p className="text-xs text-[#6E6E6E] leading-relaxed">
                  Kiểm thử chức năng, tính toàn vẹn dữ liệu và độ trễ trên tập mẫu kiểm thử (Test Sample Set) theo từng module/wave.
                </p>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-black/10 shadow-2xs space-y-2">
                <span className="text-[11px] font-mono font-bold text-emerald-800 uppercase block">BƯỚC 2</span>
                <h4 className="font-semibold text-sm text-[#17151A]">Controlled Run Tại Hiện Trường</h4>
                <p className="text-xs text-[#6E6E6E] leading-relaxed">
                  Đồng vận hành thử nghiệm trên môi trường thực tế (2 tuần cho Pilot, 30-60 ngày cho Department/Enterprise) để xử lý edge cases.
                </p>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-black/10 shadow-2xs space-y-2">
                <span className="text-[11px] font-mono font-bold text-emerald-800 uppercase block">BƯỚC 3</span>
                <h4 className="font-semibold text-sm text-[#17151A]">Nghiệm Thu Toàn Hệ Thống</h4>
                <p className="text-xs text-[#6E6E6E] leading-relaxed">
                  Ký Biên Bản Nghiệm Thu Kỹ Thuật Toàn Hệ Thống & Phê Duyệt Vận Hành Production khi đáp ứng tiêu chí chức năng và dung sai hiệu năng.
                </p>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-xs overflow-x-auto">
              <h3 className="text-lg font-semibold text-[#17151A] mb-4">
                Bảng So Sánh Chi Tiết: Nghiệm Thu Gate 3 vs Nghiệm Thu Gate 4
              </h3>
              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="border-b border-black/10 text-[#6E6E6E] uppercase tracking-wider text-[10px]">
                    <th className="pb-3 font-semibold w-1/5">Khía Cạnh So Sánh</th>
                    <th className="pb-3 font-semibold w-2/5">Nghiệm Thu Kỹ Thuật (Gate 3)</th>
                    <th className="pb-3 font-semibold w-2/5">Nghiệm Thu Chuyển Giao Tự Chủ (Gate 4)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 text-[#17151A]">
                  {UAT_GATE3_VS_GATE4_COMPARISON.map((row, rIdx) => (
                    <tr key={rIdx}>
                      <td className="py-3 font-semibold text-[#6E6E6E] pr-4">{row.aspect}</td>
                      <td className="py-3 pr-4 leading-relaxed">{row.gate3}</td>
                      <td className="py-3 leading-relaxed font-medium text-emerald-950">{row.gate4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6: Warranty & Incident SLA */}
          <section id="sla" className="max-w-5xl mx-auto mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-emerald-800" />
              <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-semibold">
                Mục 6 · Warranty & Incident SLA
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-[#17151A] mb-4">
              Chính Sách Bảo Hành Kỹ Thuật & SLA Ứng Cứu Sự Cố
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed mb-8">
              Mọi gói dịch vụ đều đi kèm thời hạn bảo hành kỹ thuật tiêu chuẩn (30–90 ngày). Cam kết thời gian phản hồi sự cố Severity 1 trong vòng dưới 2 giờ làm việc.
            </p>

            {/* Warranty Packages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {WARRANTY_TIERS.map((tier) => (
                <div
                  key={tier.packageId}
                  className="p-6 rounded-3xl bg-white border border-black/10 shadow-2xs space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-bold text-emerald-800">{tier.duration}</span>
                      <span className="text-[10px] uppercase font-semibold text-[#6E6E6E]">Bảo hành tiêu chuẩn</span>
                    </div>
                    <h4 className="font-semibold text-sm text-[#17151A] mb-2">{tier.packageName}</h4>
                    <p className="text-xs text-[#6E6E6E] leading-relaxed mb-3">{tier.scope}</p>
                  </div>
                  <div className="pt-3 border-t border-black/5 text-[11px] text-[#17151A] font-medium">
                    {tier.standbyTerms}
                  </div>
                </div>
              ))}
            </div>

            {/* SLA Matrix Table */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-xs overflow-x-auto">
              <h3 className="text-lg font-semibold text-[#17151A] mb-2">
                Cam Kết Thời Gian Phản Hồi Sự Cố Kỹ Thuật (Initial Response SLA)
              </h3>
              <p className="text-xs text-[#6E6E6E] leading-relaxed mb-4">
                Tính trong giờ làm việc tiêu chuẩn (8h30 – 17h30, Thứ Hai đến Thứ Sáu). Hệ thống Cấp 4 chạy 24/7 có khung hỗ trợ mở rộng.
              </p>

              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="border-b border-black/10 text-[#6E6E6E] uppercase tracking-wider text-[10px]">
                    <th className="pb-3 font-semibold w-1/4">Mức Độ Nghiêm Trọng</th>
                    <th className="pb-3 font-semibold w-2/5">Định Nghĩa Sự Cố</th>
                    <th className="pb-3 font-semibold text-center">Phản Hồi Ban Đầu (SLA)</th>
                    <th className="pb-3 font-semibold">Mục Tiêu Khắc Phục Tạm Thời</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 text-[#17151A]">
                  {INCIDENT_SLA_MATRIX.map((sla, sIdx) => (
                    <tr key={sIdx}>
                      <td className="py-3 font-semibold pr-4 text-emerald-950">{sla.severity}</td>
                      <td className="py-3 pr-4 text-[#6E6E6E] leading-relaxed">{sla.definition}</td>
                      <td className="py-3 text-center font-mono font-bold text-emerald-800 pr-4">{sla.initialResponseSla}</td>
                      <td className="py-3 text-[#17151A] leading-relaxed">{sla.temporaryMitigationGoal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 7: Exit & Transition Rights */}
          <section id="exit" className="max-w-5xl mx-auto mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-emerald-800" />
              <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-semibold">
                Mục 7 · Exit & Transition Rights
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-[#17151A] mb-4">
              {EXIT_TRANSITION_RIGHTS.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed mb-8">
              Khách hàng nắm toàn quyền sở hữu và chuyển giao giải pháp mà không gặp bất kỳ rào cản độc quyền nào từ Sunext.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {EXIT_TRANSITION_RIGHTS.principles.map((p, pIdx) => (
                <div
                  key={pIdx}
                  className="p-6 rounded-3xl bg-white border border-black/10 shadow-2xs space-y-2"
                >
                  <h4 className="font-semibold text-sm text-[#17151A] mb-2">{p.title}</h4>
                  <p className="text-xs text-[#6E6E6E] leading-relaxed">{p.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Direct Consultation Trigger */}
          <section className="max-w-4xl mx-auto mb-12 p-8 rounded-3xl bg-[#17151A] text-white text-center">
            <ShieldCheck className="w-8 h-8 text-[#F97316] mx-auto mb-3" />
            <h2 className="text-2xl sm:text-3xl font-light mb-3">
              Cần Thẩm Định NDA / DPA Cho Doanh Nghiệp?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto mb-6 leading-relaxed">
              Đội ngũ Cố vấn Pháp lý & Kiến trúc sư An toàn Thông tin của Sunext sẵn sàng làm việc trực tiếp với CISO / Phòng Pháp chế của doanh nghiệp để rà soát thỏa thuận dịch vụ.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/#contact">
                <Button variant="orange" size="md" className="rounded-xl text-xs font-semibold shadow-sm">
                  Liên Hệ Ban Pháp Chế & Cố Vấn CAIO
                </Button>
              </Link>
              <Link
                href="/khung-dau-tu"
                className="text-xs text-[#F97316] hover:underline flex items-center gap-1 font-mono"
              >
                <span>Xem lại Khung Đầu Tư & Ngân Sách</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
        </main>

        <Footer />
    </div>
  );
}
