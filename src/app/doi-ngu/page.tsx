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

  React.useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['finance', 'marketing', 'hr', 'operations', 'executive'].includes(hash)) {
        setActiveBlock(hash);
        const el = document.getElementById('faculty-network');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

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
    <div className="w-full min-h-screen flex flex-col sunext-atmospheric-canvas">
      <Header activeSection="technology" />

      <main className="flex-1 flex flex-col w-full max-w-[1280px] mx-auto px-6 md:px-12 py-12 lg:py-16">
        {/* Top Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-black/5">
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
            <span>Xem Mạng Lưới Khách Hàng</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Hero Section: Editorial Statement & Sunflower Graph Lineage */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Context & Editorial Headline */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#7000FF] font-semibold block font-mono">
                  DEEP EXPERTISE · MẠNG LƯỚI CHUYÊN GIA
                </span>
                <span className="text-xs text-[#747474] font-medium block mt-2">
                  Người thật đứng sau hệ sinh thái giải pháp AI Sunext
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-[1.08]">
                Chuyên Môn Sâu.<br />
                Người Thật Đứng Sau Hệ Thống.
              </h1>

              <p className="text-base sm:text-lg text-[#6E6E6E] font-light leading-relaxed max-w-2xl">
                Đội ngũ chuyên gia thực chiến với 10–24 năm kinh nghiệm trực tiếp thiết kế SOP, dẫn dắt các miền năng lực và chịu trách nhiệm hiệu quả kinh tế cùng doanh nghiệp.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-[#17151A]">
                <div>
                  <span className="text-[#EA580C] font-bold text-sm">10–24 Năm</span>
                  <span className="text-[#747474] ml-2 font-sans font-light">Kinh nghiệm thực chiến</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-black/20" />
                <div>
                  <span className="text-[#7000FF] font-bold text-sm">600+ GV Bậc 6</span>
                  <span className="text-[#747474] ml-2 font-sans font-light">Được cấp chứng nhận</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Connection Tree directly on canvas (no purple card shell) */}
            <div className="lg:col-span-5 pt-2">
              <div className="border-l-2 border-[#7000FF]/30 pl-6 space-y-6 font-mono text-xs text-[#515151]">
                <div className="flex items-center gap-2 pb-1 border-b border-black/5">
                  <span className="w-2 h-2 rounded-full bg-[#7000FF]" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#7000FF]">
                    CHUYÊN GIA THEO MIỀN NĂNG LỰC
                  </span>
                </div>

                {/* Branch: Banking & Finance */}
                <div>
                  <div className="text-[#17151A] font-semibold flex items-center gap-1.5">
                    <span className="text-[#7000FF]">●</span>
                    <span className="uppercase tracking-wider">Tài Chính &amp; Rủi Ro</span>
                  </div>
                  <div className="pl-4 text-[#6E6E6E] space-y-1 mt-1 font-sans">
                    <div><span className="text-[#7000FF] font-mono">├──</span> <strong className="text-[#17151A]">Nguyễn Tùng Chi</strong> <span className="text-[11px] text-[#747474]">(24+ năm · Nguyên HOSE &amp; CFO)</span></div>
                    <div><span className="text-[#7000FF] font-mono">└──</span> <strong className="text-[#17151A]">Lê Thị Cẩm Vân</strong> <span className="text-[11px] text-[#747474]">(21 năm · Nguyên CFO Yến Việt · Từng công tác tại PVFC)</span></div>
                  </div>
                </div>

                {/* Branch: Marketing & Growth */}
                <div>
                  <div className="text-[#17151A] font-semibold flex items-center gap-1.5">
                    <span className="text-[#7000FF]">●</span>
                    <span className="uppercase tracking-wider">Marketing &amp; Tăng Trưởng</span>
                  </div>
                  <div className="pl-4 text-[#6E6E6E] space-y-1 mt-1 font-sans">
                    <div><span className="text-[#7000FF] font-mono">├──</span> <strong className="text-[#17151A]">Lợi Hồng Thanh</strong> <span className="text-[11px] text-[#747474]">(16+ năm · Carlsberg, Mondelēz, BAT)</span></div>
                    <div><span className="text-[#7000FF] font-mono">└──</span> <strong className="text-[#17151A]">Nguyễn Thị Hồng Vi</strong> <span className="text-[11px] text-[#747474]">(18+ năm · Cựu Head of Marketing Golden Gate Group)</span></div>
                  </div>
                </div>

                {/* Branch: Enterprise Strategy */}
                <div>
                  <div className="text-[#17151A] font-semibold flex items-center gap-1.5">
                    <span className="text-[#7000FF]">●</span>
                    <span className="uppercase tracking-wider">Enterprise Strategy &amp; AI</span>
                  </div>
                  <div className="pl-4 text-[#6E6E6E] space-y-1 mt-1 font-sans">
                    <div><span className="text-[#7000FF] font-mono">├──</span> <strong className="text-[#17151A]">Trịnh Minh Hùng</strong> <span className="text-[11px] text-[#747474]">(17+ năm · ThS., CEO VISUN Holdings)</span></div>
                    <div><span className="text-[#7000FF] font-mono">└──</span> <strong className="text-[#17151A]">Nguyễn Phước Vĩnh Hưng</strong> <span className="text-[11px] text-[#747474]">(CAIO Sunext · 600+ GV Bậc 6)</span></div>
                  </div>
                </div>

                {/* Branch: Operations & Supply */}
                <div>
                  <div className="text-[#17151A] font-semibold flex items-center gap-1.5">
                    <span className="text-[#7000FF]">●</span>
                    <span className="uppercase tracking-wider">Operations &amp; Supply Chain</span>
                  </div>
                  <div className="pl-4 text-[#6E6E6E] space-y-1 mt-1 font-sans">
                    <div><span className="text-[#7000FF] font-mono">└──</span> <strong className="text-[#17151A]">Nguyễn Thị Hạnh</strong> <span className="text-[11px] text-[#747474]">(4+ năm · Lark Certified &amp; No-code)</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAIO EDITORIAL SPREAD: Pure Typography + Large Portrait (No Card Shell) */}
        <section className="mb-28 pb-16 border-b border-black/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 45%: Big Sharp Portrait */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden bg-[#17151A] shadow-md border border-black/10">
                <Image
                  src="/assets/vinh_hung_portrait.png"
                  alt="Nguyễn Phước Vĩnh Hưng - Chief AI Officer Sunext"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-top filter saturate-[0.95]"
                  priority
                />
              </div>

              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-[#7000FF] font-mono font-semibold block mb-1">
                  CHIEF AI OFFICER (CAIO)
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-[#17151A]">
                  Nguyễn Phước Vĩnh Hưng
                </h2>
                <p className="text-xs text-[#6E6E6E] font-light mt-1">
                  Trưởng Ban Cố Vấn Chiến Lược &amp; Chuyển Đổi AI Toàn Trình, Sunext
                </p>
              </div>
            </div>

            {/* Right 55%: Editorial Statement, Core Philosophy & Field Evidence */}
            <div className="lg:col-span-7 space-y-8">
              {/* Pull Quote */}
              <div className="relative pl-6 border-l-2 border-[#7000FF] space-y-4">
                <p className="text-xl sm:text-2xl font-light text-[#17151A] leading-relaxed italic">
                  &ldquo;Mục tiêu của chuyển đổi AI không phải là tạo ra những bản demo hào nhoáng để báo cáo. Mục tiêu cốt lõi là biến AI thành một người đồng nghiệp đáng tin cậy trong chuỗi công việc thường nhật, giúp doanh nghiệp tiết kiệm hàng nghìn giờ công cơ học và bảo vệ biên lợi nhuận.&rdquo;
                </p>
              </div>

              {/* Methodology Thesis */}
              <p className="text-sm sm:text-base text-[#515151] leading-relaxed font-light">
                Sunext kiên định với triết lý phương pháp luận: <strong className="text-[#17151A] font-medium">Đo lường trước, đầu tư sau</strong>. Đội ngũ Sunext không chỉ xây dựng hệ thống kỹ thuật mà còn chuyển giao trọn vẹn năng lực tự chủ cho nhân sự nội bộ, đảm bảo hệ thống tiếp tục sống và tạo ra giá trị bền vững sau khi bàn giao.
              </p>

              {/* Quantitative Metrics: Baseline with subtle hairlines */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-black/10">
                <div>
                  <span className="text-3xl sm:text-4xl font-light font-mono text-[#7000FF] block">
                    10+ Năm
                  </span>
                  <span className="text-xs font-semibold text-[#17151A] block mt-1 uppercase tracking-wider">
                    Thực Chiến AI
                  </span>
                  <span className="text-[11px] text-[#747474] block mt-0.5 font-light">
                    Tư vấn &amp; triển khai số
                  </span>
                </div>

                <div>
                  <span className="text-3xl sm:text-4xl font-light font-mono text-[#EA580C] block">
                    500K+
                  </span>
                  <span className="text-xs font-semibold text-[#17151A] block mt-1 uppercase tracking-wider">
                    Cộng Đồng
                  </span>
                  <span className="text-[11px] text-[#747474] block mt-0.5 font-light">
                    Học tập AI thực tế
                  </span>
                </div>

                <div>
                  <span className="text-3xl sm:text-4xl font-light font-mono text-[#17151A] block">
                    600+
                  </span>
                  <span className="text-xs font-semibold text-[#17151A] block mt-1 uppercase tracking-wider">
                    GV Bậc 6
                  </span>
                  <span className="text-[11px] text-[#747474] block mt-0.5 font-light">
                    Đã cấp chứng nhận
                  </span>
                </div>
              </div>

              {/* Real Field Evidence: Open Asymmetrical Layout with Captions Underneath */}
              <div className="pt-6 border-t border-black/10 space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#6E6E6E] font-semibold block">
                  HOẠT ĐỘNG HIỆN TRƯỜNG TIÊU BIỂU · FIELD EVIDENCE
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black/5 border border-black/10">
                      <Image
                        src="/evidence/vinhomes-sales-deployment.png"
                        alt="Hiện trường chuyển giao 500+ môi giới Vinhomes"
                        fill
                        className="object-cover saturate-[0.92]"
                        sizes="(max-width: 640px) 100vw, 360px"
                      />
                    </div>
                    <span className="text-[10px] font-mono uppercase text-[#7000FF] font-semibold block mt-2">
                      ONSITE DEPLOYMENT · VINHOMES
                    </span>
                    <p className="text-xs text-[#515151] mt-0.5 font-light leading-snug">
                      Chủ trì đào tạo &amp; chuyển giao thực địa cho 500+ chuyên viên Vinhomes.
                    </p>
                  </div>

                  <div>
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black/5 border border-black/10">
                      <Image
                        src="/evidence/tayninh-executive-session.jpg"
                        alt="Phiên tham vấn chiến lược cho lãnh đạo doanh nghiệp"
                        fill
                        className="object-cover saturate-[0.92]"
                        sizes="(max-width: 640px) 100vw, 360px"
                      />
                    </div>
                    <span className="text-[10px] font-mono uppercase text-[#7000FF] font-semibold block mt-2">
                      EXECUTIVE STRATEGY SESSION
                    </span>
                    <p className="text-xs text-[#515151] mt-0.5 font-light leading-snug">
                      Phiên tham vấn chiến lược AI và keynote chuyển đổi số cho lãnh đạo doanh nghiệp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION: DEEP DOMAIN NETWORK (THE ART OBJECT)                        */}
        {/* Connects the Sunflower Graph Macro-Domains directly to Expert Leaders */}
        {/* ==================================================================== */}
        <section id="domain-network" className="mb-24 scroll-mt-24">
          <div className="mb-10">
            <span className="text-[11px] uppercase tracking-widest text-[#7000FF] font-semibold block font-mono mb-2">
              MẠNG LƯỚI CHUYÊN MÔN SÂU · TRI THỨC HỘI TỤ VỀ CON NGƯỜI
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#17151A] tracking-tight">
              Người Thật Đứng Sau Từng Miền Năng Lực AI
            </h3>
            <p className="text-base text-[#6E6E6E] leading-relaxed max-w-3xl font-light mt-3">
              Mỗi miền năng lực của Sunext được dẫn dắt bởi các chuyên gia thực chiến 10–24 năm kinh nghiệm, trực tiếp thiết kế SOP và bảo đảm chất lượng giải pháp.
            </p>
          </div>

          {/* Interactive Domain Network Spread */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-xs">
            {/* Left Column: 4 Domain Hub Switchers */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#747474] block mb-2 font-semibold">
                CHỌN MIỀN NĂNG LỰC ĐỂ XEM CHUYÊN GIA
              </span>

              {[
                {
                  id: 'finance',
                  shortName: 'FINANCE & RISK',
                  fullName: 'Tài Chính, Chứng Khoán & Rủi Ro',
                  leads: 'Nguyễn Tùng Chi · Lê Thị Cẩm Vân',
                  exp: '21–24 năm kinh nghiệm',
                },
                {
                  id: 'marketing',
                  shortName: 'MARKETING & GROWTH',
                  fullName: 'Tiếp Thị, Thương Hiệu & Bán Lẻ',
                  leads: 'Lợi Hồng Thanh · Nguyễn Thị Hồng Vi',
                  exp: '16–18 năm kinh nghiệm',
                },
                {
                  id: 'strategy',
                  shortName: 'STRATEGY & GOVERNANCE',
                  fullName: 'Chiến Lược Doanh Nghiệp & Quản Trị AI',
                  leads: 'Nguyễn Phước Vĩnh Hưng · Trịnh Minh Hùng',
                  exp: '12–17 năm kinh nghiệm',
                },
                {
                  id: 'operations',
                  shortName: 'OPERATIONS & SUPPLY',
                  fullName: 'Vận Hành, Chuỗi Cung Ứng & No-code',
                  leads: 'Nguyễn Thị Hạnh',
                  exp: '4+ năm chuyên môn',
                },
              ].map((domain) => {
                const isSelected = activeBlock === domain.id;
                return (
                  <div
                    key={domain.id}
                    onClick={() => setActiveBlock(domain.id)}
                    className={`p-4 rounded-2xl transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-[#17151A] text-white border-[#17151A] shadow-sm'
                        : 'bg-neutral-50 hover:bg-white border-black/5 hover:border-black/15 text-[#17151A]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className={isSelected ? 'text-[#EA580C] font-bold' : 'text-[#7000FF] font-semibold'}>
                        {domain.shortName}
                      </span>
                      <span className={isSelected ? 'text-neutral-400' : 'text-[#747474]'}>
                        {domain.exp}
                      </span>
                    </div>
                    <h4 className={`text-base font-light tracking-tight ${isSelected ? 'text-white' : 'text-[#17151A]'}`}>
                      {domain.fullName}
                    </h4>
                    <p className={`text-xs mt-1.5 font-light ${isSelected ? 'text-neutral-300' : 'text-[#6E6E6E]'}`}>
                      Chuyên gia phụ trách: <strong className={isSelected ? 'text-white font-medium' : 'text-[#17151A]'}>{domain.leads}</strong>
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Lead Faculty Dossier Display */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#747474] block mb-2 font-semibold">
                HỒ SƠ CHUYÊN GIA DẪN DẮT MIỀN NĂNG LỰC
              </span>

              <div className="space-y-4">
                {FACULTY_MEMBERS.filter((m) => activeBlock === 'all' || m.blockId === activeBlock).slice(0, 2).map((lead) => {
                  return (
                    <div
                      key={lead.id}
                      onClick={() => setSelectedFaculty(lead)}
                      className="p-5 sm:p-6 rounded-2xl bg-neutral-50 hover:bg-neutral-100/80 transition-all border border-black/5 cursor-pointer group"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-3">
                          {lead.avatarUrl ? (
                            <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-black/10 shrink-0">
                              <Image src={lead.avatarUrl} alt={lead.name} fill className="object-cover" />
                            </div>
                          ) : (
                            <div className="w-14 h-14 rounded-2xl bg-neutral-900 text-white flex items-center justify-center font-serif text-lg font-light shrink-0">
                              {getInitials(lead.name)}
                            </div>
                          )}
                          <div>
                            <h4 className="text-xl font-light text-[#17151A] group-hover:text-[#7000FF] transition-colors">
                              {lead.name}
                            </h4>
                            <p className="text-xs text-[#6E6E6E] font-medium mt-0.5 line-clamp-1">
                              {lead.title}
                            </p>
                          </div>
                        </div>

                        <span className="text-xs font-mono text-[#EA580C] font-semibold shrink-0">
                          {lead.experienceYears}+ Năm
                        </span>
                      </div>

                      {/* Thesis Quote */}
                      <p className="text-xs sm:text-sm text-[#515151] font-light italic leading-relaxed pl-3 border-l-2 border-[#7000FF] mb-3">
                        &ldquo;{lead.quote}&rdquo;
                      </p>

                      <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-black/5">
                        <span className="text-[#747474] text-[11px]">
                          {lead.id === 'nguyen-phuoc-vinh-hung' ? 'Từng đồng hành triển khai:' : 'Từng công tác tại:'} <strong className="text-[#17151A]">{lead.organizations.slice(0, 2).join(' · ')}</strong>
                        </span>
                        <span className="text-[#7000FF] font-semibold inline-flex items-center gap-1 group-hover:underline">
                          <span>Xem hồ sơ</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION: FACULTY ROSTER (QUIET UTILITY — MINIMALIST HAIRLINE TABLE) */}
        {/* ==================================================================== */}
        <section id="faculty-network" className="mb-24 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8 pb-4 border-b border-black/10">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#747474] font-semibold block font-mono mb-1">
                ĐỘI NGŨ CHUYÊN GIA · TOÀN BỘ 12 CỐ VẤN &amp; GIẢNG VIÊN
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#17151A] tracking-tight">
                Đội Ngũ Cố Vấn &amp; Chuyên Gia
              </h3>
            </div>
            <span className="text-xs font-mono text-[#747474]">
              Nhấp vào chuyên gia để xem hồ sơ năng lực chi tiết
            </span>
          </div>

          {/* Minimalist Hairline Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans border-collapse">
              <thead>
                <tr className="border-b border-black/15 text-[#747474] font-mono text-[11px] uppercase tracking-wider">
                  <th className="py-3 pr-4 font-semibold">Chuyên Gia</th>
                  <th className="py-3 px-4 font-semibold">Khối Chuyên Môn</th>
                  <th className="py-3 px-4 font-semibold">Kinh Nghiệm</th>
                  <th className="py-3 px-4 font-semibold">Tổ Chức Tiêu Biểu</th>
                  <th className="py-3 pl-4 text-right font-semibold">Chi Tiết</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {FACULTY_MEMBERS.map((member) => (
                  <tr
                    key={member.id}
                    onClick={() => setSelectedFaculty(member)}
                    className="hover:bg-black/5 transition-colors cursor-pointer group"
                  >
                    <td className="py-3.5 pr-4">
                      <div className="font-medium text-[#17151A] text-sm group-hover:text-[#7000FF] transition-colors">
                        {member.name}
                      </div>
                      <div className="text-[11px] text-[#747474] line-clamp-1">{member.title}</div>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[#7000FF]">
                      {member.blockName.split('&')[0].trim()}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[#EA580C] font-semibold">
                      {member.experienceYears}+ Năm
                    </td>
                    <td className="py-3.5 px-4 text-[#515151] font-light max-w-[240px] truncate">
                      {member.organizations.join(', ')}
                    </td>
                    <td className="py-3.5 pl-4 text-right font-mono text-[#747474] group-hover:text-[#17151A]">
                      <span className="inline-flex items-center gap-1 font-medium">
                        <span>Hồ sơ</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Modal for Faculty Profile (Preserved with rich details) */}
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
                  <h3 className="text-xl sm:text-2xl font-light text-[#17151A]">
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
                <div className="mb-6 p-4 rounded-2xl bg-[#FAF5FF] border border-[#EDE9FE] flex items-start gap-3">
                  <Quote className="w-4 h-4 text-[#7000FF] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#17151A] italic leading-relaxed">
                    &ldquo;{selectedFaculty.quote}&rdquo;
                  </p>
                </div>
              )}

              {/* Highlights Section */}
              <div className="mb-6 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6E6E6E] flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-neutral-700" />
                  <span>Điểm Nhấn Sự Nghiệp &amp; Thực Chiến</span>
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
                  <span>Tổ Chức &amp; Tập Đoàn Từng Đồng Hành</span>
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

              {/* Certifications Section */}
              {selectedFaculty.certifications && selectedFaculty.certifications.length > 0 && (
                <div className="mb-6 pt-4 border-t border-black/10">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6E6E6E] flex items-center gap-2 mb-2.5">
                    <GraduationCap className="w-3.5 h-3.5 text-neutral-700" />
                    <span>Bằng Cấp &amp; Chứng Chỉ Chuyên Môn</span>
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

              {/* Working Photos in Modal */}
              {selectedFaculty.fieldImages && selectedFaculty.fieldImages.length > 0 && (
                <div className="mb-6 pt-4 border-t border-black/10">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6E6E6E] flex items-center gap-2 mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-[#7000FF]" />
                    <span>Hoạt Động Hiện Trường (Field Evidence)</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedFaculty.fieldImages.map((img, idx) => (
                      <div
                        key={idx}
                        className="group relative rounded-2xl overflow-hidden border border-black/10 bg-black/5 aspect-[16/10]"
                      >
                        <Image
                          src={img.url}
                          alt={img.caption}
                          fill
                          className="object-cover saturate-[0.92] group-hover:scale-102 transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, 300px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />
                        <div className="absolute bottom-2.5 left-3 right-3 text-white">
                          <span className="text-[9px] font-mono uppercase tracking-wider bg-black/60 px-2 py-0.5 rounded border border-white/20 inline-block mb-1">
                            {img.context}
                          </span>
                          <p className="text-[11px] font-light leading-snug line-clamp-2">
                            {img.caption}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Close Button */}
              <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-[#8E8E8E] leading-relaxed">
                  * Thông tin chuyên môn đã được chuẩn hóa công khai, bảo mật tuyệt đối thông tin cá nhân.
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

        {/* SECTION: 3 CORE COMPETENCIES (Hairline Editorial Layout) */}
        <section className="mb-24 pt-12 border-t border-black/10">
          <div className="mb-10">
            <span className="text-xs uppercase tracking-wider text-[#7000FF] font-semibold block mb-2 font-mono">
              PHƯƠNG PHÁP LUẬN SUNEXT
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-[#17151A]">
              3 Năng Lực Cốt Lõi Được Chuyển Giao Cho Doanh Nghiệp
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreCompetencies.map((comp) => {
              const IconComponent = comp.icon;
              return (
                <div
                  key={comp.num}
                  className="space-y-4 pb-6 border-b md:border-b-0 md:border-r border-black/10 pr-6 last:border-none"
                >
                  <div className="w-10 h-10 rounded-2xl bg-white border border-black/10 flex items-center justify-center text-[#7000FF] shadow-xs">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-400 block">
                    {comp.num}
                  </span>
                  <h4 className="text-lg font-light text-[#17151A] leading-snug">
                    {comp.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed font-light">
                    {comp.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION: REAL PROJECTS LED BY EXPERTS */}
        <section className="mb-24 p-8 sm:p-12 rounded-3xl bg-[#FBFBFA] border border-black/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-black/10">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#7000FF] font-semibold block mb-1 font-mono">
                BẰNG CHỨNG NĂNG LỰC
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#17151A]">
                Dự Án Đã Triển Khai &amp; Đào Tạo Nổi Bật
              </h3>
            </div>
            <Link href="/case-studies" className="text-xs text-[#7000FF] hover:underline font-semibold inline-flex items-center gap-1">
              <span>Xem tất cả case study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectHighlights.map((proj, idx) => (
              <Link
                key={idx}
                href={`/case-studies/${proj.slug}`}
                className="group p-6 rounded-2xl bg-white border border-black/5 hover:border-black/20 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-[#17151A] group-hover:text-[#7000FF] transition-colors">
                      {proj.org}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#7000FF] transition-colors" />
                  </div>
                  <p className="text-xs text-[#6E6E6E] leading-relaxed font-light">
                    {proj.role}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/5">
                  <span className="text-xs font-mono font-medium text-[#EA580C] block">
                    Kết quả: {proj.result}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#17151A] text-white text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#EA580C] font-semibold font-mono">
              ĐỒNG HÀNH CHIẾN LƯỢC
            </span>
            <h3 className="text-2xl sm:text-3xl font-light">
              Bàn Về Lộ Trình Chuyển Đổi AI Cùng Đội Ngũ Cố Vấn Sunext
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              Khảo sát thực trạng, chẩn đoán khoảng trống kỹ thuật và thiết lập use case có ROI cao nhất cho doanh nghiệp bạn.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link href="/#contact">
              <Button variant="orange" size="lg" className="rounded-xl text-xs font-semibold px-8 shadow-sm">
                <span>Đặt Lịch Trao Đổi Chiến Lược</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
            <Link href="/danh-gia-san-sang-ai">
              <Button variant="outline" size="lg" className="rounded-xl text-xs font-semibold px-6 bg-white/10 hover:bg-white/20 border-white/20 text-white">
                <span>Làm Bài Chẩn Đoán 12 Câu</span>
              </Button>
            </Link>
          </div>
        </section>

        {/* Subtle Experience Footprint Strip */}
        <div className="pt-8 pb-4 text-center font-mono border-t border-black/5 mb-12">
          <span className="text-[10px] text-[#747474] uppercase tracking-widest block mb-2 font-semibold">
            Kinh nghiệm chuyên môn &amp; dự án trải rộng qua
          </span>
          <p className="text-xs sm:text-sm text-[#17151A] font-medium tracking-wide">
            HOSE · Carlsberg · Golden Gate · Vinhomes · Vietcap · Đại học FPT · Dentsu Sports · Smartland · PVFC
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
