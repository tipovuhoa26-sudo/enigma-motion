'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  ClipboardCheck,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  RefreshCw,
  Zap,
  Send,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { Button } from '@/components/Button';
import { ASSESSMENT_QUESTIONS, PILLARS_DATA } from '@/content/aiTransformation';

export default function AiMaturityAssessmentQuizPage() {
  // State for user answers: { q1: score, q2: score, ... }
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);
  const [contactEmail, setContactEmail] = useState<string>('');
  const [contactCompany, setContactCompany] = useState<string>('');

  const currentQuestion = ASSESSMENT_QUESTIONS[activeStep];
  const answeredCount = Object.keys(answers).length;
  const totalQuestions = ASSESSMENT_QUESTIONS.length;

  const handleSelectOption = (questionId: string, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
  };

  const handleNext = () => {
    if (activeStep < totalQuestions - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
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
    setContactSubmitted(false);
  };

  // Calculate scores
  const totalPossible = totalQuestions * 4;
  const currentTotal = Object.values(answers).reduce((a, b) => a + b, 0);
  const percentageScore = Math.round((currentTotal / totalPossible) * 100);

  // Determine maturity level
  let maturityTier = {
    title: 'Cấp độ 1: Khởi Phát & Tự Phát (Ad-hoc)',
    badge: 'Cấp độ 1 / 4 · Khởi Phát',
    color: 'text-amber-700 bg-amber-50 border-amber-200',
    summary:
      'Doanh nghiệp của bạn đang có những nỗ lực cá nhân tự phát, nhưng chưa có chiến lược thống nhất. Nguy cơ lãng phí ngân sách bản quyền và rò rỉ dữ liệu là rất cao nếu không sớm định hình lộ trình.',
    priorityAction:
      'Bắt đầu ngay bằng Trụ cột 1 (Chiến lược số do kinh doanh dẫn dắt) và Trụ cột 2 (Xóa mù AI cơ bản cho nhân viên Tầng 1) trước khi mua thêm bất kỳ công cụ nào.',
    link: '/tu-duy-chuyen-doi-ai/chien-luoc-so',
  };

  if (percentageScore >= 75) {
    maturityTier = {
      title: 'Cấp độ 4: Doanh Nghiệp Tự Chủ AI (AI-Native Enterprise)',
      badge: 'Cấp độ 4 / 4 · Tự Chủ',
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      summary:
        'Hệ thống AI đã hòa quyện chặt chẽ vào hoạt động cốt lõi, dữ liệu sạch và quản trị rủi ro vững chắc. Lợi thế cạnh tranh của bạn đang vượt trội so với thị trường.',
      priorityAction:
        'Tập trung vào Trụ cột 6 (Mở rộng & Governance) để biến các mô hình Agentic thành tiêu chuẩn hoạt động xuyên suốt hệ sinh thái đối tác.',
      link: '/tu-duy-chuyen-doi-ai/mo-rong-quy-mo',
    };
  } else if (percentageScore >= 50) {
    maturityTier = {
      title: 'Cấp độ 3: Chuẩn Hóa & Mở Rộng Hệ Thống (Systematic)',
      badge: 'Cấp độ 3 / 4 · Chuẩn Hóa',
      color: 'text-blue-700 bg-blue-50 border-blue-200',
      summary:
        'Doanh nghiệp đã vượt qua giai đoạn thử nghiệm mò mẫm. Bạn đã có use case thành công và đội ngũ sẵn sàng, nhưng hạ tầng dữ liệu và khả năng nhân rộng đang là rào cản tiếp theo.',
      priorityAction:
        'Cần tập trung vào Trụ cột 4 (Tích hợp hệ thống cốt lõi) và Trụ cột 5 (Kiến trúc dữ liệu Single Source of Truth) để giải phóng sức mạnh toàn diện.',
      link: '/tu-duy-chuyen-doi-ai/nen-tang-cong-nghe',
    };
  } else if (percentageScore >= 30) {
    maturityTier = {
      title: 'Cấp độ 2: Thử Nghiệm Rời Rạc (Experimentation)',
      badge: 'Cấp độ 2 / 4 · Thử Nghiệm',
      color: 'text-orange-700 bg-orange-50 border-orange-200',
      summary:
        'Có một vài điểm sáng cục bộ (như phòng Marketing hoặc IT), nhưng các phòng ban khác vẫn làm theo cách cũ. Thiếu kết nối hệ thống khiến nhân viên vẫn phải copy-paste thủ công.',
      priorityAction:
        'Thiết kế lại quy trình (Trụ cột 3: Operating Model) và xây dựng đội ngũ nòng cốt AI Champions (Trụ cột 2: Talent Bench) để nhân bản thành công.',
      link: '/tu-duy-chuyen-doi-ai/mo-hinh-van-hanh',
    };
  }

  // Find weakest pillar
  let lowestScore = 5;
  let weakestQuestionId = 'q1';
  Object.entries(answers).forEach(([qid, score]) => {
    if (score < lowestScore) {
      lowestScore = score;
      weakestQuestionId = qid;
    }
  });

  const weakestPillarObj = ASSESSMENT_QUESTIONS.find((q) => q.id === weakestQuestionId);
  const correspondingPillar = PILLARS_DATA.find((p) => p.number === weakestPillarObj?.pillarNumber);

  return (
    <div className="editorial-shell">
      <div className="editorial-card min-h-screen flex flex-col justify-between">
        <Header activeSection="service" />

        <main className="px-6 md:px-12 lg:px-20 py-12 flex-1">
          {/* Top Breadcrumbs */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-black/5">
            <div className="flex items-center gap-2 text-xs text-[#6E6E6E]">
              <Link href="/" className="hover:text-[#17151A] transition-colors">
                Trang Chủ
              </Link>
              <span>/</span>
              <Link href="/danh-gia-san-sang-ai" className="hover:text-[#17151A] transition-colors">
                Đo Lường Sẵn Sàng
              </Link>
              <span>/</span>
              <span className="text-[#17151A] font-medium">Bài Test 5 Phút</span>
            </div>

            <Link
              href="/danh-gia-san-sang-ai"
              className="inline-flex items-center gap-1.5 text-xs text-[#6E6E6E] hover:text-[#17151A] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Đọc Bài Dẫn Nhập</span>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Page Eyebrow & Headline */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAFFDE] border border-[#DFE2C8] text-xs font-semibold text-[#17151A] mb-3">
                <ClipboardCheck className="w-3.5 h-3.5 text-[#17151A]" />
                <span>Khung tham chiếu 6 Trụ cột Sunext Method</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-tight">
                Chẩn Đoán Mức Độ Sẵn Sàng Chuyển Đổi AI
              </h1>
              <p className="text-sm sm:text-base text-[#6E6E6E] mt-3 leading-relaxed">
                Đánh giá nhanh qua 6 câu hỏi tương ứng 6 trục cốt lõi. Nhận báo cáo định vị cấp độ trưởng thành và gợi ý thứ tự ưu tiên đầu tư chính xác.
              </p>
            </div>

            {!isCompleted ? (
              /* Quiz Questionnaire Interface */
              <div className="bg-white/80 rounded-3xl border border-black/5 p-6 sm:p-10 shadow-sm backdrop-blur-sm">
                {/* Stepper Progress */}
                <div className="mb-8">
                  <div className="flex items-center justify-between text-xs font-medium text-[#6E6E6E] mb-2">
                    <span>
                      Câu hỏi {activeStep + 1} / {totalQuestions}
                    </span>
                    <span>
                      Đã hoàn thành: {Math.round((answeredCount / totalQuestions) * 100)}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#17151A] transition-all duration-300 rounded-full"
                      style={{ width: `${((activeStep + 1) / totalQuestions) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Current Question Block */}
                <div className="mb-8">
                  <div className="inline-block text-[11px] font-semibold text-[#6E6E6E] uppercase tracking-wider mb-2">
                    {currentQuestion.subtext}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-normal text-[#17151A] leading-snug">
                    {currentQuestion.question}
                  </h2>
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
                            ? 'border-[#17151A] bg-[#FAFFDE]/60 shadow-xs'
                            : 'border-black/5 bg-[#FBFBFA] hover:bg-black/[0.02] hover:border-black/15'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            isSelected ? 'border-[#17151A] bg-[#17151A] text-white' : 'border-black/20 bg-white'
                          }`}
                        >
                          {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-black/5 text-[#17151A]">
                              {opt.level}
                            </span>
                            <span className="text-sm sm:text-base font-semibold text-[#17151A]">
                              {opt.label}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed">
                            {opt.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-6 border-t border-black/5">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handlePrev}
                    disabled={activeStep === 0}
                    className="rounded-full text-xs"
                  >
                    Quay lại
                  </Button>

                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleNext}
                    disabled={!answers[currentQuestion.id]}
                    className="rounded-full text-xs"
                  >
                    <span>{activeStep === totalQuestions - 1 ? 'Xem Kết Quả Đánh Giá' : 'Tiếp Theo'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            ) : (
              /* Diagnostic Results View */
              <div className="space-y-8 animate-in fade-in duration-500">
                {/* Result Hero Card */}
                <div className="rounded-3xl border border-black/5 bg-white p-8 sm:p-12 shadow-sm text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border bg-neutral-50 text-[#17151A]">
                    <span>Báo Cáo Trưởng Thành Chuyển Đổi AI</span>
                  </div>

                  <div className="max-w-md mx-auto mb-6">
                    <span className="text-xs text-[#6E6E6E] block mb-1">Chỉ số sẵn sàng tổng thể:</span>
                    <div className="text-6xl sm:text-7xl font-light tracking-tight text-[#17151A]">
                      {percentageScore}
                      <span className="text-2xl text-[#6E6E6E]">/100</span>
                    </div>
                  </div>

                  <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold border mb-4 bg-emerald-50 text-emerald-800 border-emerald-200">
                    {maturityTier.badge}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-light text-[#17151A] mb-3">
                    {maturityTier.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#6E6E6E] max-w-2xl mx-auto leading-relaxed mb-6">
                    {maturityTier.summary}
                  </p>

                  <div className="p-4 rounded-2xl bg-[#FAFFDE] border border-[#DFE2C8] max-w-2xl mx-auto text-left flex items-start gap-3">
                    <Zap className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold text-[#17151A] block mb-0.5">
                        Khuyến nghị hành động ưu tiên cao nhất:
                      </span>
                      <p className="text-xs text-[#17151A] leading-relaxed">
                        {maturityTier.priorityAction}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 6 Pillars Breakdown Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ASSESSMENT_QUESTIONS.map((q) => {
                    const score = answers[q.id] || 1;
                    const opt = q.options.find((o) => o.score === score);
                    const isLowest = q.id === weakestQuestionId;

                    return (
                      <div
                        key={q.id}
                        className={`p-6 rounded-3xl border transition-all ${
                          isLowest
                            ? 'bg-rose-50/40 border-rose-200 shadow-xs'
                            : 'bg-white/70 border-black/5'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-[#17151A]">
                            {q.axis}
                          </span>
                          <span
                            className={`text-xs font-mono font-medium px-2 py-0.5 rounded-md ${
                              isLowest ? 'bg-rose-100 text-rose-800' : 'bg-black/5 text-[#17151A]'
                            }`}
                          >
                            {score} / 4 điểm
                          </span>
                        </div>

                        <div className="w-full h-1 bg-black/5 rounded-full overflow-hidden mb-3">
                          <div
                            className={`h-full rounded-full ${
                              isLowest ? 'bg-rose-500' : 'bg-[#17151A]'
                            }`}
                            style={{ width: `${(score / 4) * 100}%` }}
                          />
                        </div>

                        <div className="text-xs font-medium text-[#17151A] mb-1">
                          {opt?.label}
                        </div>
                        <p className="text-[11px] text-[#6E6E6E] leading-relaxed">
                          {opt?.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Weakest Pillar Deep Dive */}
                {correspondingPillar && (
                  <div className="p-8 rounded-3xl bg-[#17151A] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="space-y-2 text-center sm:text-left">
                      <div className="inline-flex items-center gap-1.5 text-xs text-rose-300 font-medium">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                        <span>Điểm nghẽn cần tháo gỡ đầu tiên</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-light">
                        Trụ cột {correspondingPillar.number}: {correspondingPillar.title}
                      </h3>
                      <p className="text-xs text-neutral-300 max-w-xl leading-relaxed">
                        {correspondingPillar.tagline}
                      </p>
                    </div>

                    <Link href={`/tu-duy-chuyen-doi-ai/${correspondingPillar.slug}`} className="shrink-0">
                      <Button variant="lime" size="md" className="rounded-full text-xs font-semibold">
                        <span>Xem Giải Pháp Trụ Cột {correspondingPillar.number}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Button>
                    </Link>
                  </div>
                )}

                {/* Consultation Booking & Reset */}
                <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFFDE] border border-[#DFE2C8] flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="max-w-md space-y-2">
                    <span className="text-xs uppercase tracking-wider text-[#17151A] font-semibold block">
                      TƯ VẤN CHUYÊN SÂU 1-ON-1
                    </span>
                    <h3 className="text-xl font-normal text-[#17151A]">
                      Nhận Bản Phân Tích Lộ Trình Chi Tiết Cho Doanh Nghiệp Bạn
                    </h3>
                    <p className="text-xs text-[#6E6E6E] leading-relaxed">
                      Để lại email hoặc công ty để chuyên gia tư vấn Sunext gửi bộ tài liệu phân tích chi tiết và đề xuất các use case có ROI cao nhất.
                    </p>
                  </div>

                  {!contactSubmitted ? (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (contactEmail) setContactSubmitted(true);
                      }}
                      className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-2"
                    >
                      <input
                        type="text"
                        placeholder="Tên doanh nghiệp..."
                        value={contactCompany}
                        onChange={(e) => setContactCompany(e.target.value)}
                        className="w-full sm:w-44 px-4 py-2.5 rounded-full bg-white border border-black/10 text-xs text-[#17151A] focus:outline-none focus:border-black"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email công việc..."
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full sm:w-56 px-4 py-2.5 rounded-full bg-white border border-black/10 text-xs text-[#17151A] focus:outline-none focus:border-black"
                      />
                      <Button type="submit" variant="primary" size="md" className="w-full sm:w-auto rounded-full text-xs shrink-0">
                        <Send className="w-3 h-3" />
                        <span>Nhận Báo Cáo</span>
                      </Button>
                    </form>
                  ) : (
                    <div className="p-4 rounded-2xl bg-white border border-emerald-300 text-emerald-800 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Đã tiếp nhận yêu cầu! Đội ngũ cố vấn Sunext sẽ liên hệ trong 24 giờ làm việc.</span>
                    </div>
                  )}
                </div>

                {/* Reset Button */}
                <div className="text-center pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs text-[#6E6E6E] hover:text-[#17151A] transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Làm lại bài đánh giá</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
