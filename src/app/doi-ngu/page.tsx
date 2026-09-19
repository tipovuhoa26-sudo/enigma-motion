'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  BookOpen,
  Layers,
  Cpu,
  X,
  Building2,
  Award,
  Sparkles,
  Quote,
  GraduationCap,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { Button } from '@/components/Button';
import { FACULTY_MEMBERS, FACULTY_BLOCKS, FacultyMember } from '@/content/facultyData';

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  const first = parts[parts.length - 2]?.[0] || parts[0][0];
  const last = parts[parts.length - 1][0];
  return (first + last).toUpperCase();
}

const BLOCK_COLORS: Record<string, { bg: string; text: string; badge: string }> = {
  executive: { bg: 'bg-neutral-900', text: 'text-white', badge: 'bg-neutral-100 text-neutral-800 border-neutral-200' },
  marketing: { bg: 'bg-purple-900', text: 'text-white', badge: 'bg-purple-50 text-purple-800 border-purple-200' },
  finance: { bg: 'bg-emerald-900', text: 'text-white', badge: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
  hr: { bg: 'bg-blue-900', text: 'text-white', badge: 'bg-blue-50 text-blue-800 border-blue-200' },
  operations: { bg: 'bg-amber-900', text: 'text-white', badge: 'bg-amber-50 text-amber-800 border-amber-200' },
};

export default function TeamLeadershipPage() {
  const [activeBlock, setActiveBlock] = useState<string>('all');
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);

  const filteredFaculty = activeBlock === 'all'
    ? FACULTY_MEMBERS
    : FACULTY_MEMBERS.filter((m) => m.blockId === activeBlock);
  const coreCompetencies = [
    {
      num: '01',
      title: 'Chiến Lược Chuyển Đổi AI Toàn Trình (AI Transformation)',
      desc: 'Hoạch định lộ trình tích hợp AI theo từng giai đoạn đo lường được, tập trung giải quyết các nút thắt P&L và chi phí vận hành trọng yếu của doanh nghiệp.',
      icon: Layers,
    },
    {
      num: '02',
      title: 'Kiến Trúc AI Multi-Agent & Tích Hợp Lõi Vận Hành',
      desc: 'Thiết kế các hệ thống Agentic Workflows, Computer Vision chuyền máy và Private AI Vector Mesh bảo mật cấp doanh nghiệp (cam kết NDA tuyệt đối).',
      icon: Cpu,
    },
    {
      num: '03',
      title: 'Đào Tạo Thực Chiến & Chuyển Giao Năng Lực Tự Chủ',
      desc: 'Đào tạo cầm tay chỉ việc theo khung năng lực 4 tầng, giúp đội ngũ nhân sự làm chủ công cụ và tự duy trì vận hành mà không phụ thuộc vĩnh viễn vào tư vấn ngoài.',
      icon: BookOpen,
    },
  ];

  const credentials = [
    {
      metric: '10+ Năm',
      label: 'Kinh nghiệm ứng dụng AI & Tăng trưởng doanh nghiệp',
      subtext: 'Chủ trì tư vấn và triển khai công nghệ số cho nhiều định chế hàng đầu',
    },
    {
      metric: '500K+',
      label: 'Cộng đồng học tập AI ứng dụng',
      subtext: 'Sáng lập và quản trị mạng lưới chia sẻ tri thức công nghệ lớn nhất',
    },
    {
      metric: '500.000+',
      label: 'Cộng đồng theo dõi & học tập AI thực chiến',
      subtext: 'Mạng lưới chuyên gia, quản lý và nhân sự ứng dụng AI trong công việc hàng ngày (cập nhật 2026)',
    },
  ];

  const projectHighlights = [
    {
      org: 'Vietcap Securities (VCI)',
      role: 'Thiết lập hệ thống Multi-Agent đối chiếu BCTC tự động',
      result: 'Giảm 75% thời gian bóc tách BCTC thô, rút ngắn chu kỳ xuất bản báo cáo từ 2 ngày xuống 3 giờ',
      slug: 'vietcap-ai-multi-agent-nghien-cuu-thi-truong',
    },
    {
      org: 'Vinhomes & Mạng lưới BĐS',
      role: 'Đào tạo AI Sales Enablement & Lead Reactivation cho 500+ nhân sự',
      result: 'Tự động hóa kịch bản tư vấn thực địa và trợ lý ảo thông tin dự án 24/7',
      slug: 'vinhomes-ai-sales-enablement',
    },
    {
      org: 'Dentsu Sports & Creative',
      role: 'Chuẩn hóa quy trình AI dựng storyline pitching & pitch deck',
      result: 'Rút ngắn 65% thời gian phát triển proposal đấu thầu tài trợ quốc tế',
      slug: 'dentsu-ai-pitch-deck-automation',
    },
    {
      org: 'Đại Học FPT (FPTU)',
      role: 'Đào tạo nâng bậc GV chuẩn Bậc 6 & Điều phối AI Agents tại Tech Fest',
      result: '10.000+ lượt người tương tác tại Tech Fest 2026 cùng ~60 doanh nghiệp hợp tác',
      slug: 'fptu-nang-bac-giang-vien-ai',
    },
  ];

  return (
    <div className="editorial-shell">
      <div className="editorial-card min-h-screen flex flex-col justify-between">
        <Header activeSection="technology" />

        <main className="px-6 md:px-12 lg:px-20 py-12 flex-1">
          {/* Top Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-black/5">
            <div className="flex items-center gap-2 text-xs text-[#6E6E6E]">
              <Link href="/" className="hover:text-[#17151A] transition-colors">
                Trang Chủ
              </Link>
              <span>/</span>
              <span className="text-[#17151A] font-medium">Đội Ngũ Chuyên Gia</span>
            </div>

            <Link
              href="/khach-hang-doi-tac"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17151A] hover:underline transition-colors"
            >
              <span>Xem Mạng Lưới Học Viên & Khách Hàng</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Hero Section */}
          <section className="max-w-4xl mb-16">
            <span className="text-xs uppercase tracking-widest text-[#6E6E6E] font-medium block mb-3">
              LEADERSHIP & ADVISORY · BAN LÃNH ĐẠO & CỐ VẤN
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-[1.2] mb-6">
              Đội Ngũ Chuyên Gia Dẫn Dắt Chuyển Đổi AI
            </h1>
            <p className="text-base sm:text-lg text-[#6E6E6E] font-light leading-relaxed max-w-3xl">
              Chúng tôi không cử các chuyên viên lý thuyết đến doanh nghiệp của bạn. Mọi chương trình tư vấn chiến lược và chuyển giao công nghệ tại Sunext đều do đội ngũ cố vấn kỳ cựu trực tiếp chủ trì, bảo đảm tính khả thi kỹ thuật và hiệu quả P&L rõ ràng.
            </p>
          </section>

          {/* Featured Profile: CAIO Nguyen Phuoc Vinh Hung */}
          <section className="max-w-5xl mx-auto mb-16 p-8 sm:p-12 rounded-3xl bg-white border border-black/10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Profile Card Header */}
              <div className="lg:col-span-4 space-y-4">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden bg-[#17151A] shadow-md border border-black/10 shrink-0">
                  <Image
                    src="/assets/vinh_hung_portrait.png"
                    alt="Nguyễn Phước Vĩnh Hưng"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 inline-block font-semibold mb-2">
                    Chief AI Officer (CAIO)
                  </span>
                  <h2 className="text-2xl font-normal text-[#17151A]">
                    Nguyễn Phước Vĩnh Hưng
                  </h2>
                  <p className="text-xs text-[#6E6E6E] mt-1 leading-relaxed">
                    Trưởng Ban Cố Vấn Chiến Lược & Chuyển Đổi AI Toàn Trình, Sunext
                  </p>
                </div>

                <div className="pt-4 border-t border-black/10 space-y-2 text-xs text-[#6E6E6E]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>Giảng viên chủ trì các chương trình chuẩn Bậc 6</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>Cố vấn kiến trúc AI Multi-Agent & RAG</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>Chuyên gia thiết kế SOP vận hành Human-in-the-loop</span>
                  </div>
                </div>
              </div>

              {/* Profile Narrative */}
              <div className="lg:col-span-8 space-y-6">
                <div className="space-y-4 text-sm text-[#17151A] leading-relaxed">
                  <p className="text-base font-medium text-[#17151A]">
                    &ldquo;Mục tiêu của chuyển đổi AI không phải là tạo ra những bản demo hào nhoáng để báo cáo. Mục tiêu duy nhất là biến AI thành một người đồng nghiệp đáng tin cậy trong chuỗi công việc thường nhật, giúp doanh nghiệp tiết kiệm hàng nghìn giờ công cơ học và bảo vệ biên lợi nhuận.&rdquo;
                  </p>
                  <p className="text-[#6E6E6E]">
                    Với hơn 10 năm trực tiếp điều hành và triển khai trong lĩnh vực công nghệ số, AI và tăng trưởng doanh nghiệp, Ông Nguyễn Phước Vĩnh Hưng đã chủ trì các chương trình đào tạo cho hàng loạt tổ chức, trường đại học và định chế tài chính hàng đầu tại Việt Nam.
                  </p>
                  <p className="text-[#6E6E6E]">
                    Dưới sự dẫn dắt phương pháp luận của CAIO, Sunext kiên định với triết lý: <strong>Đo lường trước, đầu tư sau</strong>. Đội ngũ Sunext không chỉ xây dựng hệ thống kỹ thuật mà còn chuyển giao trọn vẹn năng lực tự chủ cho nhân sự nội bộ, đảm bảo hệ thống tiếp tục sống và phát triển sau khi dự án bàn giao.
                  </p>
                </div>

                {/* Quantitative Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-black/10">
                  {credentials.map((c, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#FAFFDE] border border-[#DFE2C8]">
                      <span className="text-2xl font-light text-[#17151A] block">
                        {c.metric}
                      </span>
                      <span className="text-xs font-semibold text-[#17151A] block mt-1">
                        {c.label}
                      </span>
                      <p className="text-[11px] text-[#6E6E6E] mt-1.5 leading-snug">
                        {c.subtext}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section: 11 Faculty Members across 5 Blocks (Progressive Disclosure) */}
          <section className="max-w-5xl mx-auto mb-16">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span className="text-xs uppercase tracking-widest text-[#6E6E6E] font-semibold">
                  MẠNG LƯỚI 11 CHUYÊN GIA ĐA LĨNH VỰC · FACULTY NETWORK
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-[#17151A] tracking-tight mb-3">
                Đội Ngũ Cố Vấn & Giảng Viên Thực Chiến Đa Ngành
              </h3>
              <p className="text-sm text-[#6E6E6E] leading-relaxed max-w-3xl font-light">
                Sunext không phải một cá nhân dạy công cụ AI chung chung. Chúng tôi xây dựng mạng lưới 11 chuyên gia kỳ cựu từng giữ trọng trách điều hành cấp cao tại các tổ chức như HOSE, Golden Gate Group, Carlsberg, Lotte, Central Retail... trực tiếp chuyển giao phương pháp luận AI vào đúng bài toán chuyên môn sâu.
              </p>
            </div>

            {/* Filter Tabs by 5 Blocks */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
              {FACULTY_BLOCKS.map((block) => {
                const isActive = activeBlock === block.id;
                const count = block.id === 'all'
                  ? FACULTY_MEMBERS.length
                  : FACULTY_MEMBERS.filter((m) => m.blockId === block.id).length;
                return (
                  <button
                    key={block.id}
                    onClick={() => setActiveBlock(block.id)}
                    className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? 'bg-[#17151A] text-white shadow-xs'
                        : 'bg-white border border-black/10 text-[#6E6E6E] hover:border-black/25 hover:text-[#17151A]'
                    }`}
                  >
                    <span>{block.name}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-black/5 text-[#6E6E6E]'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Browse Layer: Faculty Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFaculty.map((member) => {
                const blockStyle = BLOCK_COLORS[member.blockId] || BLOCK_COLORS.executive;
                const initials = getInitials(member.name);
                return (
                  <div
                    key={member.id}
                    onClick={() => setSelectedFaculty(member)}
                    className="p-6 rounded-3xl bg-white border border-black/10 shadow-xs hover:border-black/25 hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
                  >
                    <div className="space-y-4">
                      {/* Card Header: Avatar & Experience Tag */}
                      <div className="flex items-start justify-between gap-3">
                        {member.avatarUrl ? (
                          <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-black/10 shadow-xs shrink-0">
                            <Image
                              src={member.avatarUrl}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div
                            className={`w-12 h-12 rounded-2xl ${blockStyle.bg} ${blockStyle.text} flex items-center justify-center font-serif text-lg font-light tracking-wider shadow-xs shrink-0`}
                          >
                            {initials}
                          </div>
                        )}
                        <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 shrink-0">
                          {member.experienceYears}+ Năm KN
                        </span>
                      </div>

                      {/* Name & Title */}
                      <div>
                        <span
                          className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border inline-block mb-1.5 ${blockStyle.badge}`}
                        >
                          {member.blockName}
                        </span>
                        <h4 className="text-base font-medium text-[#17151A] group-hover:text-neutral-700 transition-colors">
                          {member.name}
                        </h4>
                        <p className="text-xs text-[#6E6E6E] font-medium mt-0.5">
                          {member.title}
                        </p>
                        <p className="text-[11px] text-[#8E8E8E] mt-1 leading-snug">
                          {member.roleInSunext}
                        </p>
                      </div>

                      {/* Organizations pill list */}
                      <div className="pt-2 border-t border-black/5">
                        <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold block mb-1.5">
                          Từng đồng hành / Công tác:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {member.organizations.slice(0, 3).map((org, oIdx) => (
                            <span
                              key={oIdx}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-[#F8F8F6] border border-black/5 text-[#17151A] font-medium"
                            >
                              {org}
                            </span>
                          ))}
                          {member.organizations.length > 3 && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#F8F8F6] text-neutral-400">
                              +{member.organizations.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer: Trigger CTA */}
                    <div className="mt-5 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-[#17151A] group-hover:text-emerald-800 transition-colors">
                      <span>Xem Hồ Sơ Chi Tiết</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Depth Layer: Interactive Modal for Faculty Profile */}
          {selectedFaculty && (
            <div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
              onClick={() => setSelectedFaculty(null)}
            >
              <div
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/10 animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedFaculty(null)}
                  className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#F5F3F6] hover:bg-black/10 text-[#17151A] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Đóng hồ sơ"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Modal Header */}
                <div className="flex items-start gap-4 mb-6 pr-10">
                  {selectedFaculty.avatarUrl ? (
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-black/10 shadow-sm shrink-0">
                      <Image
                        src={selectedFaculty.avatarUrl}
                        alt={selectedFaculty.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className={`w-14 h-14 rounded-2xl ${
                        BLOCK_COLORS[selectedFaculty.blockId]?.bg || 'bg-neutral-900'
                      } text-white flex items-center justify-center font-serif text-xl font-light tracking-wider shrink-0 shadow-sm`}
                    >
                      {getInitials(selectedFaculty.name)}
                    </div>
                  )}
                  <div>
                    <span
                      className={`text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full border inline-block mb-1.5 ${
                        BLOCK_COLORS[selectedFaculty.blockId]?.badge || 'bg-neutral-100 text-neutral-800'
                      }`}
                    >
                      {selectedFaculty.blockName} · {selectedFaculty.experienceYears}+ Năm Kinh Nghiệm
                    </span>
                    <h3 className="text-xl sm:text-2xl font-normal text-[#17151A]">
                      {selectedFaculty.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#6E6E6E] mt-0.5">
                      {selectedFaculty.title}
                    </p>
                    <p className="text-xs text-emerald-800 font-semibold mt-1">
                      {selectedFaculty.roleInSunext}
                    </p>
                  </div>
                </div>

                {/* Quote Box if available */}
                {selectedFaculty.quote && (
                  <div className="mb-6 p-4 rounded-2xl bg-[#FAFFDE] border border-[#DFE2C8] flex items-start gap-3">
                    <Quote className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-[#17151A] italic leading-relaxed">
                      &ldquo;{selectedFaculty.quote}&rdquo;
                    </p>
                  </div>
                )}

                {/* Highlights Section */}
                <div className="mb-6 space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6E6E6E] flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-neutral-700" />
                    <span>Điểm Nhấn Sự Nghiệp & Thực Chiến</span>
                  </h4>
                  <div className="space-y-2">
                    {selectedFaculty.keyHighlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#17151A] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Organizations Section */}
                <div className="mb-6 pt-4 border-t border-black/10">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6E6E6E] flex items-center gap-2 mb-2.5">
                    <Building2 className="w-3.5 h-3.5 text-neutral-700" />
                    <span>Tổ Chức, Tập Đoàn & Dự Án Từng Đồng Hành</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedFaculty.organizations.map((org, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-[#F8F8F6] border border-black/10 text-xs text-[#17151A] font-medium"
                      >
                        {org}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications Section if available */}
                {selectedFaculty.certifications && selectedFaculty.certifications.length > 0 && (
                  <div className="mb-6 pt-4 border-t border-black/10">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6E6E6E] flex items-center gap-2 mb-2.5">
                      <GraduationCap className="w-3.5 h-3.5 text-neutral-700" />
                      <span>Bằng Cấp & Chứng Chỉ Chuyên Môn</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedFaculty.certifications.map((cert, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-medium"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* PII scrubbing & Ethical Notice */}
                <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-[#8E8E8E] leading-relaxed">
                    * Thông tin chuyên môn đã được chuẩn hóa công khai, bảo mật tuyệt đối thông tin cá nhân (100% PII-free).
                  </p>
                  <Button
                    variant="primary"
                    size="sm"
                    className="rounded-full text-xs font-semibold shrink-0"
                    onClick={() => setSelectedFaculty(null)}
                  >
                    Đóng Hồ Sơ
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Section: 3 Core Competencies */}
          <section className="max-w-5xl mx-auto mb-16">
            <div className="mb-8">
              <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-semibold block mb-1">
                PHƯƠNG PHÁP LUẬN SUNEXT
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#17151A]">
                3 Năng Lực Cốt Lõi Được Chuyển Giao Cho Khách Hàng
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {coreCompetencies.map((comp) => {
                const IconComponent = comp.icon;
                return (
                  <div
                    key={comp.num}
                    className="p-6 rounded-3xl bg-white border border-black/10 shadow-xs flex flex-col justify-between space-y-4 hover:border-black/20 transition-all"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#F5F3F6] flex items-center justify-center text-[#17151A]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-neutral-400 block">
                        {comp.num}
                      </span>
                      <h4 className="text-base font-medium text-[#17151A] leading-snug">
                        {comp.title}
                      </h4>
                      <p className="text-xs text-[#6E6E6E] leading-relaxed">
                        {comp.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section: Real Projects Led by Experts */}
          <section className="max-w-5xl mx-auto mb-16 p-8 sm:p-10 rounded-3xl bg-[#FBFBFA] border border-black/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-semibold block mb-1">
                  BẰNG CHỨNG NĂNG LỰC
                </span>
                <h3 className="text-2xl font-light text-[#17151A]">
                  Dự Án Đã Triển Khai & Đào Tạo Nổi Bật
                </h3>
              </div>
              <Link href="/case-studies" className="text-xs text-emerald-800 hover:text-emerald-950 font-semibold inline-flex items-center gap-1">
                <span>Xem tất cả case study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectHighlights.map((proj, idx) => (
                <Link
                  key={idx}
                  href={`/case-studies/${proj.slug}`}
                  className="p-5 rounded-2xl bg-white border border-black/5 hover:border-black/15 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-[#17151A]">
                        {proj.org}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#17151A] transition-colors" />
                    </div>
                    <p className="text-xs text-[#6E6E6E] leading-relaxed">
                      {proj.role}
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-black/5">
                    <span className="text-[11px] font-medium text-emerald-800 block">
                      Kết quả: {proj.result}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="max-w-5xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#17151A] text-white text-center space-y-6">
            <div className="max-w-xl mx-auto space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#FAFFDE] font-semibold">
                ĐỒNG HÀNH CHIẾN LƯỢC
              </span>
              <h3 className="text-2xl sm:text-3xl font-light">
                Bàn Về Lộ Trình Chuyển Đổi AI Cùng Đội Ngũ Cố Vấn Sunext
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Khảo sát thực trạng, chẩn đoán khoảng trống kỹ thuật và thiết lập use case có ROI cao nhất cho doanh nghiệp bạn.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link href="/#contact">
                <Button variant="lime" size="lg" className="rounded-full text-xs font-semibold px-8">
                  <span>Đặt Lịch Trao Đổi Chiến Lược</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/danh-gia-san-sang-ai">
                <Button variant="secondary" size="lg" className="rounded-full text-xs font-semibold px-6 border-white/20 text-white hover:bg-white/10">
                  <span>Làm Bài Test Đo Lường 5 Phút</span>
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
