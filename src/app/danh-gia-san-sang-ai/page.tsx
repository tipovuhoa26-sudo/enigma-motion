'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ClipboardCheck,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  RefreshCw,
  Zap,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Layers,
  Sparkles,
  SlidersHorizontal,
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
    phase: 'DISCOVERY (Pha 1 · Gate 1)',
    tag: 'Technical Scoping & Data Audit',
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
      phase: 'ENTERPRISE DEPLOYMENT (Pha 2-3 · Gate 2-3)',
      tag: 'Core System Integration & Mesh',
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
      description: 'Doanh nghiệp đã có nhận thức và quy trình cơ bản nhưng việc ứng dụng AI còn phân mảnh giữa các phòng ban. Điểm vào tối ưu là chuẩn hóa toàn diện 1 phòng ban mũi nhọn (Sales/Marketing) với Custom Agents kết nối RAG.',
      color: '#7000FF',
    };
    suggestedEntryPoint = {
      phase: 'DEPARTMENT PILOT (Pha 2 · Gate 2)',
      tag: 'Single Department Operating System',
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

      <main className="flex-1 flex flex-col w-full max-w-[1280px] mx-auto px-6 md:px-12 py-12 lg:py-16">
          {/* Top Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-black/5">
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
              <span>{isCompleted ? 'DIAGNOSIS COMPLETED' : 'DIAGNOSTIC PRODUCT UI'}</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Header Eyebrow & Title */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-widest text-[#7000FF] font-semibold block mb-2">
                ORGANIZATIONAL READINESS DIAGNOSIS · 12 CÂU HỎI
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-tight">
                Chẩn Đoán Điểm Nghẽn AI Trong Doanh Nghiệp
              </h1>
              <p className="text-sm text-[#626262] mt-3 leading-relaxed font-light">
                Bài kiểm tra định lượng 12 câu hỏi map trực tiếp về <strong>6 Trụ Cột Năng Lực Sunext</strong>. Phát hiện chính xác điểm nghẽn tổ chức và xác định điểm vào đầu tư tối ưu.
              </p>
            </div>

            {/* Visual Gates-Style Progress Bar: 01 ━━━ 02 ━━━ 03 ━━━ ... ━━━ 12 */}
            <div className="mb-10 p-5 rounded-2xl bg-white border border-[#E8E8E8] shadow-xs">
              <div className="flex items-center justify-between text-xs font-mono text-[#515151] mb-3">
                <span className="font-semibold text-[#17151A]">
                  TIẾN ĐỘ CHẨN ĐOÁN
                </span>
                <span className="text-[#7000FF]">
                  {answeredCount} / {totalQuestions} câu hỏi ({Math.round((answeredCount / totalQuestions) * 100)}%)
                </span>
              </div>

              {/* Connected Gates Progress Line */}
              <div className="flex items-center justify-between gap-1 sm:gap-1.5 overflow-x-auto pb-2 no-scrollbar">
                {ASSESSMENT_QUESTIONS.map((q, idx) => {
                  const isAnswered = answers[q.id] !== undefined;
                  const isCurrent = activeStep === idx && !isCompleted;
                  const isFinished = isCompleted;

                  return (
                    <React.Fragment key={q.id}>
                      {/* Gate Node Dot */}
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
                            : 'bg-white border border-[#D5D3CC] text-[#747474] hover:border-[#17151A]'
                        }`}
                        title={`Câu hỏi ${idx + 1}`}
                      >
                        {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </button>

                      {/* Connecting Line between Gates */}
                      {idx < totalQuestions - 1 && (
                        <div
                          className={`flex-1 h-[2px] min-w-[8px] sm:min-w-[14px] transition-colors duration-300 ${
                            isFinished
                              ? 'bg-[#EA580C]'
                              : isAnswered
                              ? 'bg-[#7000FF]'
                              : 'bg-[#E5E5E5]'
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
              /* Questionnaire Interface */
              <div className="bg-white rounded-3xl border border-[#E8E8E8] p-6 sm:p-10 shadow-sm animate-in fade-in duration-200">
                {/* Current Question Info */}
                <div className="mb-6 pb-4 border-b border-black/5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#FAF5FF] border border-[#EDE9FE] text-[11px] font-mono text-[#7000FF] font-semibold">
                      TRỤ CỘT 0{currentQuestion.pillarNumber}
                    </span>
                    <span className="text-xs text-[#747474]">
                      {currentQuestion.axis}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-light text-[#17151A] leading-snug mb-2">
                    {currentQuestion.question}
                  </h2>
                  <p className="text-xs text-[#626262] italic">
                    {currentQuestion.subtext}
                  </p>
                </div>

                {/* Question Options */}
                <div className="space-y-3 mb-8">
                  {currentQuestion.options.map((opt) => {
                    const isSelected = answers[currentQuestion.id] === opt.score;
                    return (
                      <button
                        key={opt.score}
                        type="button"
                        onClick={() => handleSelectOption(currentQuestion.id, opt.score)}
                        className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-start gap-4 cursor-pointer ${
                          isSelected
                            ? 'border-[#7000FF] bg-[#FAF5FF] shadow-xs'
                            : 'border-[#E8E8E8] bg-white hover:border-[#17151A]'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            isSelected ? 'border-[#7000FF] bg-[#7000FF] text-white' : 'border-[#D5D3CC] bg-white'
                          }`}
                        >
                          {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-black/5 text-[#17151A]">
                              {opt.level}
                            </span>
                            <span className="text-sm font-medium text-[#17151A]">
                              {opt.label}
                            </span>
                            <span className="text-xs font-mono text-[#747474] ml-auto">
                              +{opt.score}đ
                            </span>
                          </div>
                          <p className="text-xs text-[#626262] leading-relaxed">
                            {opt.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-black/5">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePrev}
                    disabled={activeStep === 0}
                    className="rounded-xl text-xs gap-1.5 border-[#D5D3CC]"
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
                      {activeStep === totalQuestions - 1
                        ? 'Xem Kết Quả Chẩn Đoán'
                        : 'Câu Tiếp Theo'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </div>
              </div>
            ) : (
              /* Diagnostic Results View (Mapped to 6 Pillars & Recommended Entry Point) */
              <div className="bg-white rounded-3xl border border-[#E8E8E8] p-6 sm:p-10 shadow-sm space-y-10 animate-in fade-in duration-300">
                {/* Result Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-black/5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#EA580C]">
                        BÁO CÁO CHẨN ĐOÁN NĂNG LỰC TỔ CHỨC
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-light text-[#17151A]">
                      Bản Đồ Năng Lực &amp; Điểm Nghẽn AI Cốt Lõi
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#D5D3CC] hover:border-[#17151A] text-xs font-medium text-[#515151] hover:text-[#17151A] transition-colors cursor-pointer bg-white"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Làm lại bài kiểm tra</span>
                  </button>
                </div>

                {/* Overall Score & Maturity Stage Banner */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#17151A] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md border border-black/10">
                  <div className="space-y-2 max-w-xl">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/10 text-neutral-300">
                        MỨC ĐỘ TRƯỞNG THÀNH TỔ CHỨC
                      </span>
                      <span className="text-xs font-mono font-semibold text-emerald-400">
                        {maturityStage.range}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
                      {maturityStage.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                      {maturityStage.description}
                    </p>
                  </div>

                  <div className="shrink-0 flex flex-col items-center md:items-end justify-center p-5 rounded-2xl bg-white/5 border border-white/10 min-w-[160px]">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                      TỔNG ĐIỂM CHẨN ĐOÁN
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-mono font-light text-white tracking-tight">
                        {totalScore}
                      </span>
                      <span className="text-lg font-mono text-neutral-400">/ 48</span>
                    </div>
                    <span className="text-[10px] text-neutral-400 mt-1 font-mono">
                      (Đạt {Math.round((totalScore / 48) * 100)}% tối đa)
                    </span>
                  </div>
                </div>

                {/* Security Red Flag Gate (When Pillar 5 score <= 2/8) */}
                {isSecurityRedFlag && (
                  <div className="p-6 rounded-2xl bg-rose-50 border-2 border-rose-300 space-y-3 animate-in fade-in">
                    <div className="flex items-center gap-2 text-rose-700">
                      <ShieldAlert className="w-5 h-5 shrink-0 text-rose-600" />
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-800">
                        CẢNH BÁO ĐỎ AN TOÀN DỮ LIỆU (SECURITY RED FLAG GATE)
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-rose-950 leading-relaxed font-sans">
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

                {/* Score & Bottleneck Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left: ĐIỂM NGHẼN CHÍNH (6 Pillars Breakdown) */}
                  <div className="p-6 rounded-2xl bg-[#FFFBF7] border border-[#FED7AA] space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-[#EA580C]" />
                        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#C2410C]">
                          ĐIỂM NGHẼN CHÍNH (MẮC Ở ĐÂU?)
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-[#EA580C] font-semibold">
                        6 TRỤ CỘT CHECKLIST
                      </span>
                    </div>

                    <div className="space-y-3 pt-2">
                      {[1, 2, 3, 4, 5, 6].map((pNum) => {
                        const pct = pillarPercentages[pNum];
                        const pData = PILLARS_DATA.find((p) => p.number === pNum);
                        const isPrimary = pNum === primaryBottleneck.num;
                        const isSecondary = pNum === secondaryBottleneck.num;

                        return (
                          <div key={pNum} className="space-y-1">
                            <div className="flex items-center justify-between text-xs font-medium">
                              <span className="text-[#17151A] flex items-center gap-1.5">
                                <span>{pData?.title.split('·')[0].trim()}</span>
                                {isPrimary && (
                                  <span className="text-[9px] px-1.5 py-0.2 rounded-md bg-[#EA580C] text-white font-mono">
                                    NGHẼN SỐ 1
                                  </span>
                                )}
                                {isSecondary && (
                                  <span className="text-[9px] px-1.5 py-0.2 rounded-md bg-amber-600 text-white font-mono">
                                    NGHẼN SỐ 2
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

                  {/* Right: ĐIỂM VÀO ĐỀ XUẤT (Recommended Entry Point) */}
                  <div className="p-6 rounded-2xl bg-[#FAF5FF] border border-[#EDE9FE] space-y-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="w-4 h-4 text-[#7000FF]" />
                        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7000FF]">
                          ĐIỂM VÀO ĐỀ XUẤT (RECOMMENDED ENTRY POINT)
                        </h3>
                      </div>

                      <div className="mb-4">
                        <span className="text-2xl font-light text-[#17151A] block">
                          {suggestedEntryPoint.phase}
                        </span>
                        <span className="text-xs font-mono text-[#7000FF] font-semibold block mt-0.5">
                          {suggestedEntryPoint.tag}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#515151] leading-relaxed">
                        {suggestedEntryPoint.rationale}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-purple-100">
                      <span className="text-[11px] font-mono text-[#747474] block mb-2">
                        CẤU HÌNH THAM CHIẾU PHÙ HỢP:
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

                {/* Final Call to Action Box */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#17151A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                  <div className="space-y-1 text-center sm:text-left">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#EA580C] font-semibold">
                      BƯỚC TIẾP THEO
                    </span>
                    <h4 className="text-lg sm:text-xl font-light">
                      Đặt Lịch Chẩn Đoán Chuyên Sâu 1:1 Với Chuyên Gia Sunext
                    </h4>
                    <p className="text-xs text-neutral-400">
                      Cùng chuyên gia rà soát bài toán P&L thực tế và định hình bản thiết kế kiến trúc AI.
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
