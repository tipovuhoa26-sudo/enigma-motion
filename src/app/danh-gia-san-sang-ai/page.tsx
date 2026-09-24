'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  RefreshCw,
  Zap,
  ShieldAlert,
  AlertTriangle,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { Button } from '@/components/Button';
import { ASSESSMENT_QUESTIONS, PILLARS_DATA } from '@/content/aiTransformation';

export default function AiReadinessDiagnosticPage() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const totalQuestions = ASSESSMENT_QUESTIONS.length;
  const answeredCount = Object.keys(answers).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  const currentQuestion = ASSESSMENT_QUESTIONS[activeStep] || ASSESSMENT_QUESTIONS[0];
  const isLastQuestion = activeStep === totalQuestions - 1;

  const handleSelectOption = (questionId: string, score: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: score,
    }));
  };

  const handleNext = () => {
    if (activeStep < totalQuestions - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setActiveStep(0);
    setIsCompleted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate Pillar Scores (Each pillar has 2 questions, max 8 points per pillar)
  const pillarScores: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  const pillarMaxScores: Record<number, number> = { 1: 8, 2: 8, 3: 8, 4: 8, 5: 8, 6: 8 };

  ASSESSMENT_QUESTIONS.forEach((q) => {
    const val = answers[q.id] || 0;
    if (pillarScores[q.pillarNumber] !== undefined) {
      pillarScores[q.pillarNumber] += val;
    }
  });

  const pillarPercentages: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  Object.keys(pillarScores).forEach((k) => {
    const num = Number(k);
    pillarPercentages[num] = Math.round((pillarScores[num] / pillarMaxScores[num]) * 100);
  });

  // Identify Bottlenecks (Pillars with lowest percentage)
  const bottleneckPillars = [1, 2, 3, 4, 5, 6]
    .map((num) => ({
      num,
      name: PILLARS_DATA.find((p) => p.number === num)?.title.split('·')[0].trim() || `Trụ cột ${num}`,
      english: PILLARS_DATA.find((p) => p.number === num)?.rewiredName || '',
      pct: pillarPercentages[num],
      score: pillarScores[num],
    }))
    .sort((a, b) => a.pct - b.pct);

  const primaryBottleneck = bottleneckPillars[0];
  const secondaryBottleneck = bottleneckPillars[1];

  // Total raw score
  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);

  // Maturity Stage info & Suggested Entry Point (Mapped to BOT Delivery Framework)
  let maturityStage = {
    stageNumber: 1,
    name: 'Khởi Phát & Thử Nghiệm (Emerging & Exploratory)',
    range: '12 – 23 Điểm',
    description: 'Tổ chức ở giai đoạn đầu tiếp cận AI, chủ yếu dừng lại ở các thử nghiệm cá nhân rời rạc. Cần tập trung chuẩn hóa năng lực nền tảng, thiết lập rào giậu an toàn dữ liệu và giải quyết dứt điểm 1 bài toán điểm nghẽn để tạo niềm tin ROI.',
    color: '#EA580C',
  };

  let suggestedEntryPoint = {
    phase: 'Khảo sát & Chuẩn hóa nền tảng',
    tag: 'Bước tiếp theo: Data Audit & Scoping nhanh',
    rationale:
      'Điểm nghẽn tập trung ở Kiến trúc Dữ liệu và Mô hình vận hành. Doanh nghiệp cần hoàn thành khảo sát thực tế và rà soát an toàn dữ liệu trước khi đầu tư phần mềm.',
    recommendedRoadmap: 'Lộ trình 1: AI Pilot & Quick Wins (4–6 tuần)',
    roadmapHref: '/khung-dau-tu#lo-trinh-1',
  };

  if (totalScore >= 38) {
    maturityStage = {
      stageNumber: 3,
      name: 'Tự Chủ & Sẵn Sàng Tích Hợp (Autonomous & Mesh-Ready)',
      range: '38 – 48 Điểm',
      description: 'Tổ chức có độ trưởng thành cao, quy trình chuẩn hóa và năng lực số vững chắc. Đủ điều kiện triển khai Private AI On-Premise hoặc Private VPC, tích hợp trực tiếp vào hệ thống lõi ERP/CRM và xây dựng AI CoE tự chủ.',
      color: '#059669',
    };
    suggestedEntryPoint = {
      phase: 'Tích hợp hệ thống diện rộng',
      tag: 'Bước tiếp theo: Kiến trúc dữ liệu & Scoping chuyên sâu',
      rationale:
        'Tổ chức có độ trưởng thành cao. Điểm vào phù hợp là triển khai Private AI On-Premise và tích hợp trực tiếp vào hệ thống lõi ERP/CRM.',
      recommendedRoadmap: 'Lộ trình 3: Enterprise AI Transformation (4–6 tháng)',
      roadmapHref: '/khung-dau-tu#lo-trinh-3',
    };
  } else if (totalScore >= 24) {
    maturityStage = {
      stageNumber: 2,
      name: 'Chuẩn Hóa & Mở Rộng (Standardized & Scaling)',
      range: '24 – 37 Điểm',
      description: 'Doanh nghiệp đã có nhận thức và quy trình cơ bản nhưng việc ứng dụng AI còn phân mảnh giữa các phòng ban. Cần chuẩn hóa toàn diện 1 phòng ban mũi nhọn (Sales/Marketing) với Custom Agents kết nối RAG.',
      color: '#7000FF',
    };
    suggestedEntryPoint = {
      phase: 'Chuẩn hóa vận hành phòng ban',
      tag: 'Bước tiếp theo: Discovery & Technical Scoping',
      rationale:
        'Quy trình cơ bản đã có, cần chuẩn hóa vận hành 1 phòng ban mũi nhọn (Sales hoặc Marketing) và tích hợp Custom Agents đo bằng KPI cụ thể.',
      recommendedRoadmap: 'Lộ trình 2: Department AI Operating System (8–12 tuần)',
      roadmapHref: '/khung-dau-tu#lo-trinh-2',
    };
  }

  // Security Red Flag Gate: Triggered when Pillar 5 (Data Architecture & Security) score <= 2/8
  const pillar5Score = pillarScores[5] || 0;
  const isSecurityRedFlag = pillar5Score <= 2;

  return (
    <div className="w-full min-h-screen flex flex-col sunext-atmospheric-canvas">
      <Header activeSection="service" />

      <main className="flex-1 flex flex-col w-full max-w-[1200px] mx-auto px-6 md:px-12 py-12 lg:py-16">
        {/* Top Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-black/5">
          <nav className="flex items-center gap-2 text-xs text-[#6E6E6E]">
            <Link href="/" className="hover:text-[#111111] transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <Link href="/tu-duy-chuyen-doi-ai" className="hover:text-[#111111] transition-colors">
              Tư duy chuyển đổi AI
            </Link>
            <span>/</span>
            <span className="text-[#111111] font-medium">Chẩn đoán sẵn sàng AI</span>
          </nav>

          <div className="flex items-center gap-2 text-xs font-mono text-[#7000FF] font-semibold">
            <span className={`w-2 h-2 rounded-full ${isCompleted ? 'bg-[#EA580C]' : 'bg-[#7000FF]'}`} />
            <span>{isCompleted ? 'KẾT QUẢ ĐÁNH GIÁ' : 'BÀI ĐÁNH GIÁ TRỰC TUYẾN'}</span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto w-full">
          {/* Header Eyebrow & Title */}
          <div className="mb-12">
            <span className="text-[11px] uppercase tracking-widest text-[#7000FF] font-semibold block mb-3 font-mono">
              ORGANIZATIONAL READINESS DIAGNOSIS · 12 CÂU HỎI
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-[1.12]">
              Chẩn Đoán Điểm Nghẽn AI Trong Doanh Nghiệp
            </h1>
            <p className="text-base sm:text-lg text-[#626262] mt-4 leading-relaxed font-light">
              Khung kiểm tra định lượng 12 câu hỏi dựa trên <strong>6 Trụ Cột Năng Lực Sunext</strong>. Gợi ý điểm nghẽn cần ưu tiên xác minh và điểm vào phù hợp cho bước Discovery.
            </p>
          </div>

          {/* Minimalist Hairline Stepper (Direct on canvas, no box container) */}
          <div className="mb-12">
            <div className="flex items-center justify-between text-xs font-mono text-[#515151] mb-4">
              <span className="font-semibold text-[#17151A] uppercase tracking-wider">
                Tiến Độ Chẩn Đoán
              </span>
              <span className="text-[#7000FF]">
                {answeredCount} / {totalQuestions} câu hỏi ({progressPercent}%)
              </span>
            </div>

            {/* Hairline Stepper: 01 ── 02 ── 03 ... 12 */}
            <div className="flex items-center justify-between gap-1 sm:gap-2">
              {ASSESSMENT_QUESTIONS.map((q, idx) => {
                const isAnswered = answers[q.id] !== undefined;
                const isCurrent = activeStep === idx && !isCompleted;
                const isFinished = isCompleted;

                return (
                  <React.Fragment key={q.id}>
                    <button
                      type="button"
                      onClick={() => {
                        if (!isCompleted) setActiveStep(idx);
                      }}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-mono font-bold shrink-0 transition-all cursor-pointer ${
                        isFinished
                          ? 'bg-[#EA580C] text-white shadow-xs'
                          : isCurrent
                          ? 'bg-[#7000FF] text-white ring-4 ring-[#7000FF]/20'
                          : isAnswered
                          ? 'bg-[#7000FF] text-white'
                          : 'bg-white/80 border border-black/10 text-[#747474] hover:border-[#17151A]'
                      }`}
                      title={`Câu hỏi ${idx + 1}`}
                    >
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </button>

                    {idx < totalQuestions - 1 && (
                      <div
                        className={`flex-1 h-[1.5px] min-w-[6px] sm:min-w-[12px] transition-colors duration-300 ${
                          isFinished
                            ? 'bg-[#EA580C]'
                            : isAnswered
                            ? 'bg-[#7000FF]'
                            : 'bg-black/10'
                        }`}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* MAIN CONTENT: QUESTIONNAIRE OR RESULTS */}
          {!isCompleted ? (
            /* Questionnaire Interface: Form sits bare on canvas without card borders */
            <div className="space-y-8 animate-in fade-in duration-200">
              {/* Question Headline */}
              <div className="pb-6 border-b border-black/10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#7000FF]" />
                  <span className="text-xs font-mono font-bold text-[#7000FF] uppercase tracking-wider">
                    CÂU {activeStep + 1 < 10 ? `0${activeStep + 1}` : activeStep + 1} / {totalQuestions} · TRỤ CỘT 0{currentQuestion.pillarNumber}
                  </span>
                  <span className="text-[#D5D3CC]">•</span>
                  <span className="text-xs font-mono text-[#6E6E6E] uppercase tracking-wider">
                    {currentQuestion.axis}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#17151A] tracking-tight leading-snug">
                  {currentQuestion.question}
                </h2>
              </div>

              {/* Question Options: Bare rows on canvas, only selected has thin purple outline */}
              <div className="space-y-3.5">
                {currentQuestion.options.map((opt) => {
                  const isSelected = answers[currentQuestion.id] === opt.score;
                  return (
                    <button
                      key={opt.score}
                      type="button"
                      onClick={() => handleSelectOption(currentQuestion.id, opt.score)}
                      className={`w-full text-left p-5 sm:p-6 rounded-2xl transition-all flex items-start gap-4 cursor-pointer ${
                        isSelected
                          ? 'bg-white border border-[#7000FF] ring-1 ring-[#7000FF] shadow-sm'
                          : 'bg-white/70 backdrop-blur-xs border border-black/5 hover:border-black/20 hover:bg-white'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isSelected ? 'border-[#7000FF] bg-[#7000FF] text-white' : 'border-black/20 bg-white'
                        }`}
                      >
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-black/5 text-[#17151A]">
                            {opt.level}
                          </span>
                          <span className="text-sm font-medium text-[#17151A]">
                            {opt.label}
                          </span>
                          <span className="text-xs font-mono text-[#747474] ml-auto">
                            +{opt.score}đ
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#626262] leading-relaxed font-light">
                          {opt.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Action Row */}
              <div className="flex items-center justify-between pt-6 border-t border-black/10">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePrev}
                  disabled={activeStep === 0}
                  className="rounded-xl text-xs gap-1.5 border-black/15 bg-white hover:bg-black/5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Quay lại</span>
                </Button>

                <Button
                  variant="orange"
                  size="md"
                  onClick={handleNext}
                  disabled={answers[currentQuestion.id] === undefined}
                  className="rounded-xl text-xs font-semibold px-6 py-2.5 cursor-pointer disabled:opacity-50"
                >
                  <span>
                    {isLastQuestion ? 'Xem Kết Quả Chẩn Đoán' : 'Câu Tiếp Theo'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </div>
            </div>
          ) : (
            /* Diagnostic Results View: Executive Briefing Sheet */
            <div className="space-y-12 animate-in fade-in duration-300">
              {/* Result Dossier Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-black/10">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#EA580C]">
                      BÁO CÁO CHẨN ĐOÁN NĂNG LỰC TỔ CHỨC · KẾT QUẢ ĐÁNH GIÁ SƠ BỘ
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#17151A] tracking-tight">
                    Bản Đồ Năng Lực &amp; Điểm Nghẽn AI Cốt Lõi
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-black/15 hover:border-[#17151A] text-xs font-medium text-[#515151] hover:text-[#17151A] transition-colors cursor-pointer bg-white"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Làm lại bài kiểm tra</span>
                </button>
              </div>

              {/* Executive Metrics Spread: Monolithic Dark Bar with Hairlines */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 sm:p-10 rounded-3xl bg-[#17151A] text-white">
                <div className="border-r border-white/10 pr-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    01 TỔNG ĐIỂM
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-mono font-light text-white">
                      {totalScore}
                    </span>
                    <span className="text-sm font-mono text-neutral-400">/ 48</span>
                  </div>
                  <span className="text-[11px] text-neutral-400 block mt-1 font-mono">
                    {Math.round((totalScore / 48) * 100)}% năng lực tối đa
                  </span>
                </div>

                <div className="border-r border-white/10 pr-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    02 CẤP ĐỘ
                  </span>
                  <span className="text-xl sm:text-2xl font-light text-white block">
                    {totalScore >= 38 ? 'Tự Chủ' : totalScore >= 24 ? 'Chuẩn Hóa' : 'Khởi Phát'}
                  </span>
                  <span className="text-[11px] text-emerald-400 block mt-1 font-mono">
                    Giai đoạn {maturityStage.stageNumber}
                  </span>
                </div>

                <div className="border-r border-white/10 pr-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    03 ĐIỂM NGHẼN
                  </span>
                  <span className="text-base sm:text-lg font-light text-[#EA580C] block leading-tight truncate" title={primaryBottleneck.name}>
                    {primaryBottleneck.name}
                  </span>
                  <span className="text-[11px] text-neutral-400 block mt-1 truncate font-mono">
                    {primaryBottleneck.pct}% năng lực
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    04 ĐIỂM VÀO ĐỀ XUẤT
                  </span>
                  <span className="text-base sm:text-lg font-light text-[#A855F7] block leading-tight truncate" title={suggestedEntryPoint.phase}>
                    {suggestedEntryPoint.phase}
                  </span>
                  <span className="text-[11px] text-neutral-400 block mt-1 font-mono">
                    Khảo sát Discovery
                  </span>
                </div>
              </div>

              {/* Security Red Flag Gate (When Pillar 5 score <= 2/8) */}
              {isSecurityRedFlag && (
                <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 space-y-3 animate-in fade-in">
                  <div className="flex items-center gap-2 text-rose-700">
                    <ShieldAlert className="w-5 h-5 shrink-0 text-rose-600" />
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-800">
                      CẢNH BÁO ĐỎ AN TOÀN DỮ LIỆU (SECURITY RED FLAG GATE)
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-rose-950 leading-relaxed font-sans font-light">
                    <strong>Phát hiện rủi ro bảo mật trọng yếu:</strong> Trụ cột 5 (Kiến Trúc Dữ Liệu &amp; Bảo Mật) chỉ đạt <strong>{pillar5Score}/8 điểm ({Math.round((pillar5Score / 8) * 100)}%)</strong>. Tổ chức đối mặt nguy cơ thất thoát dữ liệu nội bộ, rò rỉ bí mật kinh doanh hoặc vi phạm chính sách nếu để nhân sự tự do đưa dữ liệu khách hàng/tài chính vào các mô hình AI đại trà bên ngoài.
                  </p>
                  <div className="pt-1 flex flex-wrap items-center gap-3">
                    <span className="text-[11px] font-mono text-rose-800 font-bold uppercase">
                      KHUYẾN NGHỊ BẮT BUỘC:
                    </span>
                    <Link
                      href="/phap-ly-bao-mat#data-security-tiers"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-800 underline hover:text-rose-950 transition-colors"
                    >
                      <span>Áp dụng cơ chế Zero Data Retention (ZDR) &amp; Khung 3 Tầng Bảo Mật</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}

              {/* 2-Column Editorial Spread: Pillars Breakdown & Suggested Entry */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left (7 cols): 6 Pillars Breakdown */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-black/10">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-[#EA580C]" />
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#C2410C]">
                        ĐIỂM NGHẼN THEO 6 TRỤ CỘT NĂNG LỰC
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-[#747474]">
                      Đo Lường Định Lượng
                    </span>
                  </div>

                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5, 6].map((pNum) => {
                      const pct = pillarPercentages[pNum];
                      const pData = PILLARS_DATA.find((p) => p.number === pNum);
                      const isPrimary = pNum === primaryBottleneck.num;
                      const isSecondary = pNum === secondaryBottleneck.num;

                      return (
                        <div key={pNum} className="pb-3 border-b border-black/5 space-y-1.5">
                          <div className="flex items-center justify-between text-xs font-medium">
                            <span className="text-[#17151A] flex items-center gap-2">
                              <span className="font-mono text-[#747474]">0{pNum}</span>
                              <span>{pData?.title.split('·')[0].trim()}</span>
                              {isPrimary && (
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#EA580C] text-white font-mono uppercase font-bold">
                                  Nghẽn số 1
                                </span>
                              )}
                              {isSecondary && (
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-600 text-white font-mono uppercase font-bold">
                                  Nghẽn số 2
                                </span>
                              )}
                            </span>
                            <span className="font-mono text-[#515151] font-bold">
                              {pct}%
                            </span>
                          </div>
                          <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-500 ${
                                pct < 50 ? 'bg-[#EA580C]' : pct < 75 ? 'bg-[#7000FF]' : 'bg-[#059669]'
                              }`}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right (5 cols): Recommended Entry Point */}
                <div className="lg:col-span-5 p-7 rounded-3xl bg-[#FAF5FF] border border-[#EDE9FE] space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-4 h-4 text-[#7000FF]" />
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7000FF]">
                        ĐIỂM VÀO THAM CHIẾU
                      </h3>
                    </div>

                    <h4 className="text-xl font-light text-[#17151A] leading-snug">
                      {suggestedEntryPoint.phase}
                    </h4>
                    <span className="text-xs font-mono text-[#7000FF] font-semibold block mt-1">
                      {suggestedEntryPoint.tag}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#515151] leading-relaxed font-light">
                    {suggestedEntryPoint.rationale}
                  </p>

                  <div className="pt-4 border-t border-purple-100">
                    <span className="text-[11px] font-mono text-[#747474] block mb-2 uppercase tracking-wider">
                      CẤU HÌNH THAM CHIẾU:
                    </span>
                    <Link
                      href={suggestedEntryPoint.roadmapHref}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7000FF] hover:underline"
                    >
                      <span>{suggestedEntryPoint.recommendedRoadmap}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* External Maturity Reference (McKinsey 2026 Three Horizons) */}
              <div className="p-6 rounded-2xl bg-black/3 border border-black/10 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#6E6E6E] font-semibold">
                    EXTERNAL MATURITY REFERENCE · MCKINSEY 2026 THREE HORIZONS
                  </span>
                  <span className="text-[10px] font-mono text-[#8E8E8E]">
                    Enablement → Automation → Reinvention
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#515151]">
                  <div className="p-3 rounded-xl bg-white border border-black/5">
                    <span className="font-semibold text-[#17151A] block mb-0.5">Horizon 1: Enablement</span>
                    <span className="text-[11px] text-[#6E6E6E]">AI hỗ trợ từng cá nhân hoàn thành công việc nhanh hơn trong quy trình hiện hữu.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-black/5">
                    <span className="font-semibold text-[#17151A] block mb-0.5">Horizon 2: Automation</span>
                    <span className="text-[11px] text-[#6E6E6E]">Tự động hóa luồng nghiệp vụ xuyên chức năng và kết nối dữ liệu ở quy mô lớn.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-black/5">
                    <span className="font-semibold text-[#17151A] block mb-0.5">Horizon 3: Reinvention</span>
                    <span className="text-[11px] text-[#6E6E6E]">Thiết kế lại toàn diện vai trò, quy trình và mô hình vận hành với AI đặt tại lõi.</span>
                  </div>
                </div>
                <p className="text-[11px] text-[#747474] font-light leading-relaxed pt-1 italic">
                  * Sunext sử dụng khung này như tham chiếu về mức độ chuyển đổi tổ chức; kết quả đánh giá Sunext không phải là điểm số hay chứng nhận của McKinsey.
                </p>
              </div>

              {/* Final Editorial Call to Action */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#17151A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
                <div className="space-y-1.5 text-center sm:text-left">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#EA580C] font-semibold">
                    BƯỚC TIẾP THEO
                  </span>
                  <h4 className="text-xl sm:text-2xl font-light">
                    Đặt Lịch Chẩn Đoán Chuyên Sâu 1:1 Với Chuyên Gia Sunext
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-xl">
                    Cùng đội ngũ chuyên gia rà soát bài toán P&amp;L thực tế và định hình kiến trúc AI phù hợp với độ trưởng thành của tổ chức.
                  </p>
                </div>

                <a
                  href="https://zalo.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  <Button variant="orange" size="md" className="rounded-xl text-xs font-semibold px-6 py-3 cursor-pointer">
                    <span>Đặt Lịch Khảo Sát Kỹ Thuật</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
