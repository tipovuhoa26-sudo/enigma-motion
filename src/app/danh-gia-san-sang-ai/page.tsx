'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  ClipboardCheck,
  CheckCircle2,
  AlertTriangle,
  Layers,
  ChevronRight,
  RefreshCw,
  ShieldCheck,
  Zap,
  Target,
  Users,
  Workflow,
  Cpu,
  Database,
  TrendingUp,
  Calendar,
  Send,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { Button } from '@/components/Button';
import { ASSESSMENT_QUESTIONS, PILLARS_DATA } from '@/content/aiTransformation';

export default function AiReadinessAssessmentPage() {
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
    title: 'Giai đoạn 1: Khởi Phát & Tự Phát (Ad-hoc)',
    badge: 'Tầng 1 / 4 · Khởi Phát',
    color: 'text-amber-700 bg-amber-50 border-amber-200',
    summary:
      'Doanh nghiệp của bạn đang có những nỗ lực cá nhân tự phát, nhưng chưa có chiến lược thống nhất. Nguy cơ lãng phí ngân sách bản quyền và rò rỉ dữ liệu là rất cao nếu không sớm định hình lộ trình.',
    priorityAction:
      'Bắt đầu ngay bằng Trụ cột 1 (Chiến lược số do kinh doanh dẫn dắt) và Trụ cột 2 (Xóa mù AI cơ bản cho nhân viên Tầng 1) trước khi mua thêm bất kỳ công cụ nào.',
    link: '/tu-duy-chuyen-doi-ai/chien-luoc-so',
  };

  if (percentageScore >= 75) {
    maturityTier = {
      title: 'Giai đoạn 4: Doanh Nghiệp Tự Chủ AI (AI-Native Enterprise)',
      badge: 'Tầng 4 / 4 · Tự Chủ',
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      summary:
        'Hệ thống AI đã hòa quyện chặt chẽ vào hoạt động cốt lõi, dữ liệu sạch và quản trị rủi ro vững chắc. Lợi thế cạnh tranh của bạn đang vượt trội so với thị trường.',
      priorityAction:
        'Tập trung vào Trụ cột 6 (Mở rộng & Governance) để biến các mô hình Agentic thành tiêu chuẩn hoạt động xuyên suốt hệ sinh thái đối tác.',
      link: '/tu-duy-chuyen-doi-ai/mo-rong-quy-mo',
    };
  } else if (percentageScore >= 50) {
    maturityTier = {
      title: 'Giai đoạn 3: Chuẩn Hóa & Mở Rộng Hệ Thống (Systematic)',
      badge: 'Tầng 3 / 4 · Chuẩn Hóa',
      color: 'text-blue-700 bg-blue-50 border-blue-200',
      summary:
        'Doanh nghiệp đã vượt qua giai đoạn thử nghiệm mò mẫm. Bạn đã có use case thành công và đội ngũ sẵn sàng, nhưng hạ tầng dữ liệu và khả năng nhân rộng đang là rào cản tiếp theo.',
      priorityAction:
        'Cần tập trung vào Trụ cột 4 (Tích hợp hệ thống cốt lõi) và Trụ cột 5 (Kiến trúc dữ liệu Single Source of Truth) để giải phóng sức mạnh toàn diện.',
      link: '/tu-duy-chuyen-doi-ai/nen-tang-cong-nghe',
    };
  } else if (percentageScore >= 30) {
    maturityTier = {
      title: 'Giai đoạn 2: Thử Nghiệm Rời Rạc (Experimentation)',
      badge: 'Tầng 2 / 4 · Thử Nghiệm',
      color: 'text-orange-700 bg-orange-50 border-orange-200',
      summary:
        'Có một vài điểm sáng cục bộ (như phòng Marketing hoặc IT), nhưng các phòng ban khác vẫn làm theo cách cũ. Thiếu kết nối hệ thống khiến nhân viên vẫn phải copy-paste thủ công.',
      priorityAction:
        'Thiết kế lại quy trình (Trụ cột 3: Operating Model) và xây dựng đội ngũ nòng cốt AI Champions (Trụ cột 2: Talent Bench) để nhân bản thành công.',
      link: '/tu-duy-chuyen-doi-ai/mo-hinh-van-hanh',
    };
  }

  // Find weakest pillar
  let weakestQuestion = ASSESSMENT_QUESTIONS[0];
  let minScore = 5;
  ASSESSMENT_QUESTIONS.forEach((q) => {
    const s = answers[q.id] || 0;
    if (s < minScore) {
      minScore = s;
      weakestQuestion = q;
    }
  });

  const weakestPillar = PILLARS_DATA.find((p) => p.number === weakestQuestion?.pillarNumber) || PILLARS_DATA[0];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  return (
    <div className="editorial-shell">
      <div className="editorial-card min-h-screen flex flex-col justify-between">
        <Header activeSection="service" />

        <main className="px-6 md:px-12 lg:px-20 py-12 flex-1">
          {/* Top Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-black/5">
            <div className="flex items-center gap-2 text-xs text-[#6E6E6E]">
              <Link href="/" className="hover:text-[#17151A] transition-colors">
                Trang Chủ
              </Link>
              <span>/</span>
              <Link href="/tu-duy-chuyen-doi-ai" className="hover:text-[#17151A] transition-colors">
                Tư Duy Chuyển Đổi AI
              </Link>
              <span>/</span>
              <span className="text-[#17151A] font-medium">Đo Lường Sẵn Sàng AI</span>
            </div>

            <Link
              href="/tu-duy-chuyen-doi-ai"
              className="inline-flex items-center gap-1.5 text-xs text-[#6E6E6E] hover:text-[#17151A] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Quay lại Khung 6 Trụ Cột</span>
            </Link>
          </div>

          {/* Article Header (Editorial intro from 08_do-luong-ai-readiness.md) */}
          <section className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAFFDE] border border-[#DFE2C8] text-[11px] font-semibold text-[#17151A]">
                <ClipboardCheck className="w-3.5 h-3.5 text-[#17151A]" />
                AI MATURITY ASSESSMENT · 5 PHÚT
              </span>
              <span className="text-xs text-[#6E6E6E]">Chuẩn khung McKinsey Rewired</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-[1.2] mb-6">
              Đo lường mức độ sẵn sàng AI — trước khi bạn tiêu thêm một đồng nào
            </h1>

            <p className="text-lg text-[#6E6E6E] leading-relaxed mb-8">
              Hầu hết doanh nghiệp làm ngược: Mua công cụ trước. Đào tạo sau, nếu nhớ. Đo lường mức độ sẵn sàng — nếu có làm — thì làm sau cùng để giải thích tại sao thất bại.
            </p>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#F5F3F6] border border-black/5 text-[#17151A] space-y-4 mb-8">
              <p className="text-base sm:text-lg font-medium leading-relaxed">
                Thứ tự đúng là ngược lại hoàn toàn: <span className="underline decoration-black/30 underline-offset-4">Đo lường trước, đầu tư sau.</span>
              </p>
              <p className="text-sm text-[#6E6E6E] leading-relaxed">
                Không phải vì đo lường là một thủ tục nên có. Vì nếu không biết mình đang yếu ở đâu, bạn sẽ đổ tiền vào đúng chỗ đã mạnh sẵn — chỗ dễ làm, chỗ demo đẹp — trong khi chỗ thật sự đang chặn bạn lại không ai đụng tới.
              </p>
              <div className="pt-3 border-t border-black/10 flex items-center gap-2 text-xs text-[#6E6E6E]">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>
                  Đo đúng 6 khía cạnh: Chiến lược · Dữ liệu · Quy trình · Con người · Bảo mật & Governance · Quản trị thay đổi & Mở rộng.
                </span>
              </div>
            </div>
          </section>

          {/* Interactive Diagnostic Tool Section */}
          <section id="diagnostic-tool" className="max-w-4xl mx-auto mb-20 scroll-mt-24">
            <div className="rounded-3xl bg-white border border-black/10 shadow-sm p-6 sm:p-10 overflow-hidden">
              {!isCompleted ? (
                <div>
                  {/* Progress Header */}
                  <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-black/5">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-medium block">
                        Câu hỏi {activeStep + 1} / {totalQuestions}
                      </span>
                      <h2 className="text-lg font-semibold text-[#17151A]">
                        {currentQuestion.axis}
                      </h2>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-mono text-[#17151A] font-semibold">
                        {Math.round(((activeStep + 1) / totalQuestions) * 100)}%
                      </span>
                      <div className="w-24 h-1.5 bg-[#F5F3F6] rounded-full overflow-hidden mt-1">
                        <div
                          className="h-full bg-[#17151A] transition-all duration-300"
                          style={{ width: `${((activeStep + 1) / totalQuestions) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Question Content */}
                  <div className="mb-8">
                    <span className="text-xs text-[#6E6E6E] block mb-2 font-medium">
                      {currentQuestion.subtext}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-light text-[#17151A] leading-snug mb-6">
                      {currentQuestion.question}
                    </h3>

                    {/* Options List */}
                    <div className="space-y-3">
                      {currentQuestion.options.map((opt) => {
                        const isSelected = answers[currentQuestion.id] === opt.score;
                        return (
                          <button
                            key={opt.score}
                            type="button"
                            onClick={() => handleSelectOption(currentQuestion.id, opt.score)}
                            className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-4 ${
                              isSelected
                                ? 'bg-[#FAFFDE] border-[#DFE2C8] shadow-xs'
                                : 'bg-[#F8F8F6] border-black/5 hover:border-black/20 hover:bg-white'
                            }`}
                          >
                            <div className="space-y-1">
                              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6E6E6E] block">
                                {opt.level}
                              </span>
                              <h4 className="text-sm font-semibold text-[#17151A]">
                                {opt.label}
                              </h4>
                              <p className="text-xs text-[#6E6E6E] leading-relaxed">
                                {opt.description}
                              </p>
                            </div>

                            <div
                              className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-1 transition-colors ${
                                isSelected
                                  ? 'bg-[#17151A] border-[#17151A] text-white'
                                  : 'border-black/20 bg-white'
                              }`}
                            >
                              {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between pt-6 border-t border-black/5">
                    <button
                      type="button"
                      onClick={handlePrev}
                      disabled={activeStep === 0}
                      className="px-4 py-2 rounded-full text-xs font-medium text-[#6E6E6E] hover:text-[#17151A] disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                    >
                      ← Câu trước
                    </button>

                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[#6E6E6E]">
                        Đã trả lời {answeredCount}/{totalQuestions}
                      </span>
                      <Button
                        variant="primary"
                        size="md"
                        onClick={handleNext}
                        disabled={!answers[currentQuestion.id]}
                        className="rounded-full text-xs gap-1.5 disabled:opacity-40"
                      >
                        <span>{activeStep === totalQuestions - 1 ? 'Xem Kết Quả Chẩn Đoán' : 'Tiếp theo'}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Diagnostic Results Dashboard */
                <div className="space-y-8 animate-in fade-in duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-black/5">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-medium block mb-1">
                        Báo Cáo Chẩn Đoán Sẵn Sàng AI
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-light text-[#17151A]">
                        Chỉ Số Trưởng Thành: <span className="font-semibold">{percentageScore}%</span>
                      </h2>
                    </div>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5F3F6] text-xs font-medium text-[#6E6E6E] hover:text-[#17151A] hover:bg-black/5 transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Làm lại bài đánh giá</span>
                    </button>
                  </div>

                  {/* Maturity Tier Banner */}
                  <div className={`p-6 sm:p-8 rounded-3xl border ${maturityTier.color}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/80 border border-current shadow-2xs">
                        {maturityTier.badge}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                      {maturityTier.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4 opacity-90">
                      {maturityTier.summary}
                    </p>
                    <div className="p-4 rounded-2xl bg-white/70 border border-current/20 text-xs leading-relaxed">
                      <strong>Khuyến nghị ưu tiên: </strong>
                      {maturityTier.priorityAction}
                    </div>
                  </div>

                  {/* Breakdown by 6 Pillars */}
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#17151A] mb-4">
                      Chi tiết điểm số 6 trục năng lực:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {ASSESSMENT_QUESTIONS.map((q) => {
                        const score = answers[q.id] || 1;
                        const scorePercent = Math.round((score / 4) * 100);
                        const isWeakest = q.id === weakestQuestion.id;

                        return (
                          <div
                            key={q.id}
                            className={`p-4 rounded-2xl border transition-all ${
                              isWeakest
                                ? 'bg-rose-50/50 border-rose-300'
                                : 'bg-[#F8F8F6] border-black/5'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-medium text-[#17151A] flex items-center gap-1.5">
                                <span>Trụ cột 0{q.pillarNumber}: {q.axis}</span>
                                {isWeakest && (
                                  <span className="px-1.5 py-0.5 rounded bg-rose-200 text-rose-800 text-[10px] font-semibold">
                                    Nút thắt
                                  </span>
                                )}
                              </span>
                              <span className="text-xs font-mono font-semibold text-[#17151A]">
                                {score}/4 ({scorePercent}%)
                              </span>
                            </div>

                            <div className="w-full h-2 bg-black/5 rounded-full overflow-hidden mb-2">
                              <div
                                className={`h-full rounded-full transition-all duration-500 ${
                                  isWeakest ? 'bg-rose-500' : 'bg-[#17151A]'
                                }`}
                                style={{ width: `${scorePercent}%` }}
                              />
                            </div>

                            <Link
                              href={`/tu-duy-chuyen-doi-ai/${PILLARS_DATA[q.pillarNumber - 1]?.slug}`}
                              className="text-[11px] text-[#6E6E6E] hover:text-[#17151A] hover:underline inline-flex items-center gap-1"
                            >
                              <span>Xem giải pháp cho trụ cột này</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Priority Bottleneck Callout */}
                  <div className="p-6 sm:p-8 rounded-3xl bg-[#17151A] text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="w-4 h-4 text-[#FAFFDE]" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#FAFFDE]">
                        Nút thắt cần giải quyết trước tiên của công ty bạn
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-light mb-3">
                      Trụ cột 0{weakestPillar.number}: {weakestPillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                      Theo kết quả chẩn đoán, đây là mắt xích yếu nhất trong chuỗi 6 trụ cột của bạn. Nếu không xử lý nút thắt này, mọi khoản đầu tư vào các phần khác sẽ bị triệt tiêu hiệu quả.
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <Link href={`/tu-duy-chuyen-doi-ai/${weakestPillar.slug}`}>
                        <Button variant="lime" size="md" className="rounded-full text-xs font-semibold">
                          Đọc Lời Giải Chi Tiết Cho Trụ Cột Này
                        </Button>
                      </Link>
                      <Link href="/#contact">
                        <Button variant="secondary" size="md" className="rounded-full text-xs">
                          Đặt Lịch Tư Vấn Gỡ Nút Thắt
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Lead Form to send report */}
                  <div className="p-6 rounded-3xl bg-[#FAFFDE] border border-[#DFE2C8]">
                    {!contactSubmitted ? (
                      <form onSubmit={handleContactSubmit} className="space-y-4">
                        <div>
                          <h4 className="text-base font-semibold text-[#17151A] mb-1">
                            Nhận Báo Cáo Chẩn Đoán Đầy Đủ & Khuyến Nghị Lộ Trình
                          </h4>
                          <p className="text-xs text-[#6E6E6E]">
                            Chuyên gia Sunext sẽ gửi bản phân tích chi tiết đối chuẩn với ngành của bạn và gợi ý use case ROI cao nhất.
                          </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input
                            type="text"
                            required
                            placeholder="Tên công ty / Doanh nghiệp"
                            value={contactCompany}
                            onChange={(e) => setContactCompany(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-full bg-white border border-black/10 text-xs focus:outline-none focus:ring-2 focus:ring-[#17151A]"
                          />
                          <input
                            type="email"
                            required
                            placeholder="Email công việc của bạn"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-full bg-white border border-black/10 text-xs focus:outline-none focus:ring-2 focus:ring-[#17151A]"
                          />
                        </div>
                        <Button type="submit" variant="primary" size="md" className="rounded-full text-xs gap-2">
                          <Send className="w-3.5 h-3.5" />
                          <span>Gửi Báo Cáo Cho Tôi</span>
                        </Button>
                      </form>
                    ) : (
                      <div className="flex items-center gap-3 text-sm text-emerald-800 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span>
                          Cảm ơn bạn! Kết quả chẩn đoán và tài liệu khuyến nghị lộ trình đang được gửi đến email <strong>{contactEmail}</strong>.
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Section: Why measure first (editorial grounding from 08_) */}
          <section className="max-w-4xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-[#F8F8F6] border border-black/5">
            <h2 className="text-2xl font-light text-[#17151A] mb-4">
              Vì sao nên đo lường trước, không phải sau?
            </h2>
            <div className="space-y-4 text-sm text-[#6E6E6E] leading-relaxed">
              <p>
                Ba doanh nghiệp đã đi đúng thứ tự này — đánh giá trước, đầu tư đúng chỗ sau — đều có chung một điểm: họ biết chính xác đang yếu ở đâu trước khi triển khai, nên không phí một đồng nào vào chỗ chưa cần thiết.
              </p>
              <p>
                Công ty bán lẻ biết trước đội HR cần đào tạo nền tảng trước khi nhận một con Agent — nên khi Agent ra đời, đội đã sẵn sàng dùng ngay, không mất thêm ba tháng để &ldquo;làm quen&rdquo;. Công ty sản xuất biết trước dữ liệu chuyền sản xuất cần chuẩn hóa trước khi gắn Computer Vision — nên hệ thống chạy đúng ngay từ đầu, không phải sửa đi sửa lại.
              </p>
              <p className="font-medium text-[#17151A]">
                Không doanh nghiệp nào trong số đó &ldquo;may mắn&rdquo;. Họ chỉ đo trước khi làm.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
