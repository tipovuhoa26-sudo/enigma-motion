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
  ShieldAlert,
  Lock,
  Layers,
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

  const totalQuestions = ASSESSMENT_QUESTIONS.length;
  const currentQuestion = ASSESSMENT_QUESTIONS[activeStep] || ASSESSMENT_QUESTIONS[0];
  const answeredCount = Object.keys(answers).length;

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
  const totalPossible = totalQuestions * 4; // 12 * 4 = 48
  const currentTotal = Object.values(answers).reduce((a, b) => a + b, 0);

  // Group scores by pillar (1 to 6)
  const pillarScores: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  ASSESSMENT_QUESTIONS.forEach((q) => {
    const score = answers[q.id] || 0;
    pillarScores[q.pillarNumber] = (pillarScores[q.pillarNumber] || 0) + score;
  });

  // Find lowest scoring pillar
  let lowestPillarNum = 1;
  let minPillarScore = 99;
  for (let p = 1; p <= 6; p++) {
    const s = pillarScores[p] || 0;
    if (s < minPillarScore) {
      minPillarScore = s;
      lowestPillarNum = p;
    }
  }
  const lowestPillar = PILLARS_DATA.find((p) => p.number === lowestPillarNum);

  // Pillar 5 (Data & Security) score
  const pillar5Score = pillarScores[5] || 0;
  const isSecurityRedFlag = pillar5Score <= 2 && answeredCount === totalQuestions;
  const isSecurityCaution = pillar5Score > 2 && pillar5Score <= 4 && answeredCount === totalQuestions;

  // Determine maturity level & recommendation based on 12-48 raw score
  let maturityTier = {
    title: 'Khởi Phát / Thử Nghiệm (Ad-hoc & Pilot Stage)',
    badge: '12 – 23 Điểm · Khởi Phát / Thử Nghiệm',
    color: 'text-amber-800 bg-amber-50 border-amber-200',
    stageName: 'Khởi Phát / Thử Nghiệm',
    summary:
      'Dữ liệu còn phân tán, nhân sự dùng AI tự phát, chưa gắn với bài toán P&L. Doanh nghiệp cần chứng minh hiệu quả kinh tế trên quy mô nhỏ trước khi đầu tư lớn.',
    recommendedEntryPoint: 'Điểm Vào Khởi Điểm (Single Use Case Quick Win)',
    referencePackage: 'Gói 1: AI Pilot & Quick Wins (4–6 tuần)',
    packageHref: '/khung-dau-tu#goi-1',
    gatePrerequisite: 'Hoàn thành khảo sát dữ liệu mẫu và xác thực cổng kết nối API (Gate 1).',
    priorityAction:
      'Không vội mua phần mềm đắt tiền. Chọn đúng 1 use case đau đầu nhất (lọc CV, làm content, hoặc báo cáo tuần), đào tạo Tầng 1–2 và đo lường ROI cụ thể trong 4–6 tuần để lấy niềm tin cho toàn tổ chức.',
  };

  if (currentTotal >= 38) {
    maturityTier = {
      title: 'Tự Chủ / Sẵn Sàng Tích Hợp Lõi (AI-Native Enterprise)',
      badge: '38 – 48 Điểm · Tự Chủ / Sẵn Sàng Tích Hợp',
      color: 'text-emerald-800 bg-emerald-50 border-emerald-200',
      stageName: 'Tự Chủ / Sẵn Sàng Tích Hợp',
      summary:
        'Quy trình đã chuẩn hóa, nhân sự sẵn sàng cao, điểm nghẽn nằm ở hạ tầng bảo mật cấp tập đoàn và kiến trúc dữ liệu diện rộng kết nối hệ thống lõi.',
      recommendedEntryPoint: 'Điểm Vào Khảo Sát Tổng Thể & Tích Hợp Hệ Thống Lõi (Enterprise Scoping)',
      referencePackage: 'Gói 3: Enterprise AI Transformation (Cấu hình tham chiếu 4–6 tháng)',
      packageHref: '/khung-dau-tu#goi-3',
      gatePrerequisite:
        'Bắt buộc hoàn tất Enterprise Discovery & Data Security Gate (thẩm định an toàn thông tin thực tế đạt chuẩn) trước khi can thiệp hệ thống lõi (Core ERP, Core Banking, MES).',
      priorityAction:
        'Thiết lập hạ tầng Private AI / On-premise bảo vệ dữ liệu nhạy cảm trong hạ tầng kiểm soát nội bộ, xây dựng Enterprise Knowledge Mesh và cơ chế Governance để AI trở thành năng lực vận hành bền bỉ của tổ chức.',
    };
  } else if (currentTotal >= 24) {
    maturityTier = {
      title: 'Chuẩn Hóa Vận Hành Phòng Ban (Standardized Stage)',
      badge: '24 – 37 Điểm · Chuẩn Hóa',
      color: 'text-blue-800 bg-blue-50 border-blue-200',
      stageName: 'Chuẩn Hóa',
      summary:
        'Đã có nhận thức lãnh đạo và một số nhân sự thành thạo, nhưng quy trình còn cồng kềnh và thiếu liên kết công cụ. Các phòng ban vẫn vận hành như các đảo dữ liệu riêng lẻ.',
      recommendedEntryPoint: 'Điểm Vào Chuẩn Hóa Vận Hành Phòng Ban (Department OS)',
      referencePackage: 'Gói 2: Department AI Operating System (Cấu hình tham chiếu 8–12 tuần)',
      packageHref: '/khung-dau-tu#goi-2',
      gatePrerequisite:
        'Bắt buộc vượt qua Technical Scoping về API phần mềm phòng ban và độ sạch của kho dữ liệu nghiệp vụ.',
      priorityAction:
        'Chuẩn hóa quy trình vận hành 1 phòng ban mũi nhọn (Marketing, Sales, HR hoặc Vận hành), tích hợp 2–3 Custom Agents vào phần mềm phòng ban (CRM, ATS, kế toán, Lark, Slack) và đào tạo Tầng 1➔3 để tăng năng suất xử lý công việc.',
    };
  }

  const progressPercent = Math.round(((activeStep + 1) / totalQuestions) * 100);

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
              <span className="text-[#17151A] font-medium">Bài Chẩn Đoán 12 Câu Hỏi</span>
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
                <span>Khung tham chiếu 6 Trụ cột Sunext Method · 12–48 Điểm</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-tight">
                Chẩn Đoán Mức Độ Sẵn Sàng Chuyển Đổi AI
              </h1>
              <p className="text-sm sm:text-base text-[#6E6E6E] mt-3 leading-relaxed">
                Đánh giá có cấu trúc qua 12 câu hỏi định lượng (2 câu hỏi cho mỗi trụ cột). Nhận báo cáo định vị điểm vào, phát hiện giả định điểm nghẽn ưu tiên và rà soát rào chắn an toàn dữ liệu.
              </p>
            </div>

            {!isCompleted ? (
              /* Quiz Questionnaire Interface */
              <div className="bg-white/80 rounded-3xl border border-black/5 p-6 sm:p-10 shadow-sm backdrop-blur-sm">
                {/* Stepper Progress */}
                <div className="mb-8">
                  <div className="flex items-center justify-between text-xs font-medium text-[#6E6E6E] mb-2">
                    <span>
                      Câu hỏi {activeStep + 1} / {totalQuestions} · Trụ cột {currentQuestion.pillarNumber}
                    </span>
                    <span>
                      Đã trả lời: {answeredCount} / {totalQuestions} ({Math.round((answeredCount / totalQuestions) * 100)}%)
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#17151A] transition-all duration-300 rounded-full"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Current Question Block */}
                <div className="mb-8">
                  <div className="inline-block text-[11px] font-semibold text-[#6E6E6E] uppercase tracking-wider mb-2">
                    Trụ cột {currentQuestion.pillarNumber}: {currentQuestion.axis}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-normal text-[#17151A] leading-snug mb-2">
                    {currentQuestion.question}
                  </h2>
                  <p className="text-xs text-[#6E6E6E] italic">
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
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-black/5 text-[#17151A]">
                              {opt.level}
                            </span>
                            <span className="text-sm sm:text-base font-semibold text-[#17151A]">
                              {opt.label}
                            </span>
                            <span className="text-xs font-mono text-[#6E6E6E] ml-auto">
                              +{opt.score}đ
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
                    <span>{activeStep === totalQuestions - 1 ? 'Xem Kết Quả Chẩn Đoán' : 'Tiếp Theo'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            ) : (
              /* Diagnostic Results View (Dynamic Result Template) */
              <div className="space-y-8 animate-in fade-in duration-500">
                {/* Result Hero Card */}
                <div className="rounded-3xl border border-black/5 bg-white p-8 sm:p-12 shadow-sm text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border bg-neutral-50 text-[#17151A]">
                    <span>Kết Quả Chẩn Đoán Mức Độ Sẵn Sàng AI Của Doanh Nghiệp Bạn</span>
                  </div>

                  <div className="max-w-md mx-auto mb-6">
                    <span className="text-xs text-[#6E6E6E] block mb-1">Tổng điểm định hướng sẵn sàng:</span>
                    <div className="text-6xl sm:text-7xl font-light tracking-tight text-[#17151A]">
                      {currentTotal}
                      <span className="text-2xl text-[#6E6E6E]">/48</span>
                    </div>
                  </div>

                  <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold border mb-4 ${maturityTier.color}`}>
                    {maturityTier.badge}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-light text-[#17151A] mb-3">
                    {maturityTier.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#6E6E6E] max-w-2xl mx-auto leading-relaxed mb-6">
                    {maturityTier.summary}
                  </p>

                  {/* Priority Action Highlight */}
                  <div className="p-5 rounded-2xl bg-[#FAFFDE] border border-[#DFE2C8] max-w-2xl mx-auto text-left flex items-start gap-3.5">
                    <Zap className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold text-[#17151A] block mb-1 uppercase tracking-wider">
                        Khuyến nghị trọng tâm từ Sunext:
                      </span>
                      <p className="text-xs sm:text-sm text-[#17151A] leading-relaxed">
                        {maturityTier.priorityAction}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Security Red Flag Gate or Caution Notice */}
                {isSecurityRedFlag && (
                  <div className="p-6 sm:p-8 rounded-3xl bg-rose-50 border-2 border-rose-300 text-rose-950 flex flex-col sm:flex-row items-start gap-5">
                    <div className="p-3 rounded-2xl bg-rose-100 text-rose-700 shrink-0">
                      <ShieldAlert className="w-7 h-7" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-rose-200 text-rose-900">
                          Cảnh Báo An Toàn: Security Red Flag Gate
                        </span>
                        <span className="text-xs text-rose-800 font-medium">
                          Trụ cột 5 (Kiến trúc dữ liệu & Bảo mật) đạt {pillar5Score}/8 điểm
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-rose-950">
                        Thả nổi bảo mật hoặc dữ liệu phân mảnh nghiêm trọng
                      </h3>
                      <p className="text-xs sm:text-sm text-rose-900 leading-relaxed">
                        Tín hiệu cảnh báo định hướng bước Discovery ban đầu: Nhân viên có thể đang đưa thông tin nhạy cảm lên công cụ AI công cộng hoặc dữ liệu chưa có quy chế kiểm soát. 
                        <strong> Quyết định tại Cổng An Toàn Thông Tin (Gate 2: Architecture & Security Gate)</strong> bắt buộc phải dựa trên kết quả kiểm tra thực tế tại hiện trường (Technical Due Diligence về dữ liệu mẫu, API endpoints, phân quyền RBAC và sơ đồ kiến trúc); dự án chỉ được giải ngân triển khai code khi vượt qua thẩm định kỹ thuật thực tế này, không phụ thuộc vào điểm số khảo sát trực tuyến.
                      </p>
                    </div>
                  </div>
                )}

                {isSecurityCaution && (
                  <div className="p-5 sm:p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 flex items-start gap-4">
                    <Lock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm leading-relaxed">
                      <strong className="block font-semibold mb-1 text-amber-900">
                        Trạng thái Security & Data Gate: Cảnh báo thận trọng ({pillar5Score}/8 điểm)
                      </strong>
                      Dữ liệu còn phân mảnh và chính sách dữ liệu cần được rà soát thực địa trước khi mở rộng cổng kết nối API. Bước Technical Discovery 30 phút sẽ đối soát trực tiếp kho dữ liệu mẫu của bạn.
                    </div>
                  </div>
                )}

                {/* Recommended Entry Point & Reference Package Card */}
                <div className="p-8 rounded-3xl bg-[#17151A] text-white space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2 text-xs text-neutral-300">
                      <Layers className="w-4 h-4 text-[#C2FF24]" />
                      <span className="uppercase tracking-wider font-semibold">Khung Định Vị Điểm Vào Khuyến Nghị</span>
                    </div>
                    <span className="text-xs font-mono text-neutral-400">Theo kết quả chẩn đoán {currentTotal}/48đ</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <span className="text-xs text-neutral-400 uppercase tracking-wider block">
                        Điểm Vào Khuyến Nghị (Recommended Entry Point)
                      </span>
                      <h3 className="text-xl sm:text-2xl font-light text-white">
                        {maturityTier.recommendedEntryPoint}
                      </h3>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {maturityTier.summary}
                      </p>
                      <div className="pt-2 text-xs text-neutral-400 space-y-1.5">
                        <div><strong>Điều kiện Gate:</strong> {maturityTier.gatePrerequisite}</div>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between gap-4">
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C2FF24] block mb-1">
                          Gói Tham Chiếu Phù Hợp Sau Scoping
                        </span>
                        <h4 className="text-lg font-medium text-white mb-2">
                          {maturityTier.referencePackage}
                        </h4>
                        <p className="text-xs text-neutral-400 leading-relaxed">
                          Được thiết kế theo cấu trúc BOT 4 Stage-Gate, gắn với cam kết nghiệm thu thực tế và phân định rõ ràng giữa tầng nghiệp vụ và tầng kỹ thuật.
                        </p>
                      </div>

                      <Link href={maturityTier.packageHref}>
                        <Button variant="lime" size="md" className="w-full rounded-full text-xs font-semibold justify-center">
                          <span>Xem Chi Tiết {maturityTier.referencePackage.split(':')[0]} Tại Khung Đầu Tư</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Priority Hypothesis to Validate (Lowest Pillar) */}
                {lowestPillar && (
                  <div className="p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-black/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 text-xs text-rose-700 font-semibold">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                        <span>Giả định điểm nghẽn ưu tiên xác minh tại hiện trường (Priority Hypothesis)</span>
                      </div>
                      <h3 className="text-xl font-medium text-[#17151A]">
                        Trụ cột {lowestPillar.number}: {lowestPillar.title} ({pillarScores[lowestPillar.number]}/8 điểm)
                      </h3>
                      <p className="text-xs sm:text-sm text-[#6E6E6E] max-w-2xl leading-relaxed">
                        Đây là giả định ưu tiên hàng đầu mà chuyên gia Sunext sẽ cùng ban điều hành đối soát trực tiếp trong buổi Discovery 30 phút để xác định hiện trạng chính xác trước khi đề xuất giải pháp kỹ thuật.
                      </p>
                    </div>

                    <Link href={`/tu-duy-chuyen-doi-ai/${lowestPillar.slug}`} className="shrink-0">
                      <Button variant="secondary" size="sm" className="rounded-full text-xs">
                        <span>Xem Trụ Cột {lowestPillar.number}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Button>
                    </Link>
                  </div>
                )}

                {/* 6 Pillars Breakdown Cards (2 questions each, /8 points) */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-[#17151A]">
                      Bảng Đối Soát 6 Trụ Cột Năng Lực (Thang 8 Điểm / Trụ Cột)
                    </h3>
                    <span className="text-xs text-[#6E6E6E]">Tổng: {currentTotal}/48đ</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {PILLARS_DATA.map((pillar) => {
                      const pScore = pillarScores[pillar.number] || 2;
                      const isLowest = pillar.number === lowestPillarNum;
                      const pillarQuestions = ASSESSMENT_QUESTIONS.filter((q) => q.pillarNumber === pillar.number);
                      const pillarPercent = Math.round((pScore / 8) * 100);

                      return (
                        <div
                          key={pillar.number}
                          className={`p-6 rounded-3xl border transition-all ${
                            isLowest
                              ? 'bg-rose-50/40 border-rose-200 shadow-xs'
                              : 'bg-white/80 border-black/5'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-black/5 text-[#17151A]">
                                Trụ cột {pillar.number}
                              </span>
                              <span className="text-xs font-semibold text-[#17151A]">
                                {pillar.title}
                              </span>
                            </div>
                            <span
                              className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md ${
                                isLowest ? 'bg-rose-100 text-rose-800' : 'bg-black/5 text-[#17151A]'
                              }`}
                            >
                              {pScore} / 8 điểm
                            </span>
                          </div>

                          <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden mb-4">
                            <div
                              className={`h-full rounded-full ${
                                isLowest ? 'bg-rose-500' : 'bg-[#17151A]'
                              }`}
                              style={{ width: `${pillarPercent}%` }}
                            />
                          </div>

                          <div className="space-y-2.5 pt-2 border-t border-black/5">
                            {pillarQuestions.map((q) => {
                              const selectedScore = answers[q.id] || 1;
                              const selectedOpt = q.options.find((o) => o.score === selectedScore);
                              return (
                                <div key={q.id} className="text-xs">
                                  <div className="flex items-center justify-between text-[#6E6E6E] mb-0.5">
                                    <span className="font-medium truncate pr-2">{q.question}</span>
                                    <span className="font-mono shrink-0">+{selectedScore}đ</span>
                                  </div>
                                  <p className="text-[#17151A] font-medium text-[11px]">
                                    • {selectedOpt?.label}: <span className="text-[#6E6E6E] font-normal">{selectedOpt?.description}</span>
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Consultation Booking & Reset */}
                <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFFDE] border border-[#DFE2C8] flex flex-col md:flex-row items-center justify-between gap-8" id="contact">
                  <div className="max-w-md space-y-2">
                    <span className="text-xs uppercase tracking-wider text-[#17151A] font-semibold block">
                      ĐỐI SOÁT KỸ THUẬT 30 PHÚT CÙNG CHUYÊN GIA SUNEXT
                    </span>
                    <h3 className="text-xl font-normal text-[#17151A]">
                      Nhận Bản Phân Tích Lộ Trình & Khuyến Nghị Điểm Vào Chi Tiết
                    </h3>
                    <p className="text-xs text-[#6E6E6E] leading-relaxed">
                      Để lại email công việc để chuyên gia Sunext gửi báo cáo chẩn đoán chi tiết và đối soát các giả định điểm nghẽn tại hiện trường doanh nghiệp bạn.
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
                        <span>Đặt Lịch 30 Phút</span>
                      </Button>
                    </form>
                  ) : (
                    <div className="p-4 rounded-2xl bg-white border border-emerald-300 text-emerald-800 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Đã tiếp nhận yêu cầu! Chuyên gia Sunext sẽ liên hệ đối soát trong 24 giờ làm việc.</span>
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
                    <span>Làm lại bài chẩn đoán (12 câu)</span>
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
