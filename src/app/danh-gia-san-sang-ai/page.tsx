'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Clock,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { Button } from '@/components/Button';

export default function AiReadinessEditorialIntroPage() {
  const sixAxes = [
    {
      num: '01',
      title: 'Strategy & Value · Chiến lược số do kinh doanh dẫn dắt',
      desc: 'Doanh nghiệp có biết miền nghiệp vụ nào nên ưu tiên trước để tạo ra giá trị kinh tế P&L rõ ràng, hay đang thử nghiệm dàn trải ở khắp nơi?',
      pillarUrl: '/tu-duy-chuyen-doi-ai/chien-luoc-so',
    },
    {
      num: '02',
      title: 'People & Capability · Đội ngũ nhân tài & Năng lực nội bộ',
      desc: 'Đội ngũ có đủ kỹ năng theo thang 5 tầng năng lực để dùng AI ra kết quả thực tế, hay chỉ dùng thử vài lần rồi bỏ vì không biết cách prompt nghiệp vụ?',
      pillarUrl: '/tu-duy-chuyen-doi-ai/nang-luc-doi-ngu',
    },
    {
      num: '03',
      title: 'Process & Operating Model · Mô hình vận hành & Quy trình',
      desc: 'Quy trình hiện tại có chỗ cho AI tích hợp tự nhiên theo cơ chế Human-in-the-loop, hay AI sẽ chỉ làm một quy trình cũ chạy nhanh hơn?',
      pillarUrl: '/tu-duy-chuyen-doi-ai/mo-hinh-van-hanh',
    },
    {
      num: '04',
      title: 'Technology & Integration · Nền tảng công nghệ & Tích hợp',
      desc: 'Khả năng kết nối hệ thống lõi (ERP, CRM, ATS) qua API bảo mật hai chiều để chuyển từ chat web rời rạc sang tự động hóa luồng việc.',
      pillarUrl: '/tu-duy-chuyen-doi-ai/nen-tang-cong-nghe',
    },
    {
      num: '05',
      title: 'Data Architecture · Kiến trúc dữ liệu doanh nghiệp',
      desc: 'Dữ liệu nội bộ có đủ sạch, có nguồn dữ liệu chuẩn (Single Source of Truth) và cơ chế bảo vệ rò rỉ khi đưa vào kho vector/RAG doanh nghiệp hay không?',
      pillarUrl: '/tu-duy-chuyen-doi-ai/kien-truc-du-lieu',
    },
    {
      num: '06',
      title: 'Governance, Adoption & Scale · Quản trị, Mở rộng & Tự chủ',
      desc: 'Doanh nghiệp có cơ chế đo lường KPI vận hành và tác động P&L định lượng để chuyển giao và nhân rộng giải pháp sang các phòng ban khác không?',
      pillarUrl: '/tu-duy-chuyen-doi-ai/mo-rong-quy-mo',
    },
  ];

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
              <span className="text-[#17151A] font-medium">Đo Lường Sẵn Sàng</span>
            </div>

            <Link
              href="/ai-maturity-assessment"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
            >
              <span>Vào thẳng bài chẩn đoán 12 câu hỏi</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <article className="max-w-3xl mx-auto">
            {/* Header Eyebrow */}
            <div className="mb-4">
              <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-semibold block">
                PHƯƠNG PHÁP LUẬN · ĐO LƯỜNG TRƯỚC, ĐẦU TƯ SAU
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#17151A] leading-[1.15] mb-8">
              Đo lường mức độ sẵn sàng AI — trước khi bạn tiêu thêm một đồng nào
            </h1>

            {/* Sam Ovens Opening */}
            <div className="space-y-6 text-base sm:text-lg text-[#17151A] leading-relaxed mb-12">
              <p className="font-medium text-xl sm:text-2xl text-[#17151A] leading-snug">
                Hầu hết doanh nghiệp làm ngược.
              </p>
              <p className="text-[#6E6E6E]">
                Họ mua công cụ trước. Đào tạo sau, nếu nhớ. Đo lường mức độ sẵn sàng — nếu có làm — thì làm sau cùng, thường là để giải thích tại sao dự án không như kỳ vọng.
              </p>
              <div className="p-6 rounded-2xl bg-[#FAFFDE] border border-[#DFE2C8] text-[#17151A]">
                <span className="font-semibold block mb-1">Thứ tự đúng là ngược lại hoàn toàn:</span>
                <p className="text-lg font-normal">
                  <strong>Đo lường trước, đầu tư sau.</strong>
                </p>
                <p className="text-xs text-[#6E6E6E] mt-2">
                  Không phải vì đo lường là một thủ tục nên có. Vì nếu không biết mình đang yếu ở đâu, bạn sẽ đổ tiền vào đúng chỗ đã mạnh sẵn — chỗ dễ làm, chỗ demo đẹp — trong khi chỗ thật sự đang chặn bạn lại thì không ai đụng tới.
                </p>
              </div>
            </div>

            {/* Primary Action Callout Banner */}
            <div className="p-8 rounded-3xl bg-[#17151A] text-white my-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-[11px] uppercase tracking-wider text-[#FAFFDE] font-semibold flex items-center gap-1.5 justify-center sm:justify-start">
                  <Clock className="w-3.5 h-3.5" />
                  Bài chẩn đoán trắc nghiệm 12 câu hỏi
                </span>
                <h3 className="text-xl sm:text-2xl font-light">
                  Bạn muốn biết doanh nghiệp mình đang ở đâu?
                </h3>
                <p className="text-xs text-neutral-300">
                  Hoàn thành 12 câu hỏi chẩn đoán để nhận ngay điểm số 6 trục và ưu tiên đầu tư.
                </p>
              </div>

              <Link href="/ai-maturity-assessment" className="shrink-0">
                <Button variant="lime" size="md" className="rounded-full text-xs font-semibold px-6 py-3">
                  <span>Làm Bài Chẩn Đoán 12 Câu Hỏi</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Section: The Myth */}
            <div className="space-y-6 my-12 pt-6 border-t border-black/5">
              <div className="flex items-center gap-2 text-rose-700 text-xs font-semibold uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>Cái Lầm Tưởng Phổ Biến</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-light text-[#17151A]">
                &ldquo;Chưa cần đo, cứ bắt đầu làm rồi biết&rdquo;
              </h2>

              <div className="space-y-4 text-base text-[#6E6E6E] leading-relaxed">
                <p>
                  Nghe có vẻ rất thực dụng: <em>&ldquo;Làm rồi biết, đo lường màu mè chỉ làm chậm tiến độ.&rdquo;</em>
                </p>
                <p>
                  <strong>Vấn đề:</strong> nếu không đo trước, bạn không &ldquo;biết&rdquo; — bạn đoán. Và đoán trong bối cảnh AI năm 2026 rất tốn kém, vì công nghệ thay đổi nhanh, mỗi hướng đi sai đồng nghĩa với vài tháng và một khoản ngân sách không quay lại được.
                </p>
                <p>
                  Doanh nghiệp bạn có thể rất mạnh về công nghệ nhưng yếu về con người. Hoặc ngược lại — đội ngũ rất sẵn sàng học, nhưng dữ liệu đang là một mớ hỗn độn không ai dám tin. Không đo, bạn sẽ không biết mình đang rơi vào trường hợp nào — và sẽ đầu tư sai chỗ, đi vào vết xe đổ mà nhiều chương trình chuyển đổi đã gặp phải khi bỏ quên yếu tố con người và quy trình.
                </p>
              </div>
            </div>

            {/* Section: The Reality - 6 Axes */}
            <div className="space-y-6 my-12 pt-6 border-t border-black/5">
              <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Cái Đúng: Đo Đúng 6 Khía Cạnh Cốt Lõi</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-light text-[#17151A]">
                Không phải một câu hỏi chung chung &ldquo;công ty bạn có sẵn sàng AI không&rdquo;
              </h2>

              <p className="text-base text-[#6E6E6E] leading-relaxed">
                Câu hỏi <em>&ldquo;công ty bạn có sẵn sàng AI không&rdquo;</em> là một câu hỏi vô nghĩa — câu trả lời luôn là &ldquo;vừa sẵn sàng vừa chưa&rdquo;, tùy khía cạnh nào. Sẵn sàng AI thật sự phải được đo trên sáu trục riêng biệt — đúng sáu trụ cột mà các dự án chuyển đổi AI thường gặp rào cản:
              </p>

              <div className="space-y-4 my-6">
                {sixAxes.map((axis) => (
                  <div
                    key={axis.num}
                    className="p-5 rounded-2xl bg-[#FBFBFA] border border-black/5 hover:border-black/15 transition-all flex items-start gap-4"
                  >
                    <span className="text-xs font-mono font-bold text-neutral-400 shrink-0 mt-0.5">
                      {axis.num}
                    </span>
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-semibold text-[#17151A]">
                          {axis.title}
                        </h4>
                        <Link
                          href={axis.pillarUrl}
                          className="text-[11px] text-[#6E6E6E] hover:text-[#17151A] inline-flex items-center gap-0.5"
                        >
                          <span>Xem trụ cột</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      </div>
                      <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed">
                        {axis.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-base text-[#17151A] font-medium leading-relaxed">
                Biết điểm số ở cả sáu trục, bạn biết chính xác nên bắt đầu từ đâu — không phải đoán, không phải nghe theo chỗ nào &ldquo;đang hot&rdquo;.
              </p>
            </div>

            {/* Section: What you get */}
            <div className="space-y-6 my-12 pt-6 border-t border-black/5">
              <h2 className="text-2xl sm:text-3xl font-light text-[#17151A]">
                Việc này mất bao lâu, và bạn nhận được gì
              </h2>

              <div className="space-y-4 text-base text-[#6E6E6E] leading-relaxed">
                <p>
                  Không cần một dự án đánh giá kéo dài nhiều tuần với tư vấn viên ngồi phỏng vấn từng phòng ban. Bài đánh giá mức độ sẵn sàng AI của Sunext được thiết kế dựa trên kinh nghiệm triển khai thực tế qua nhiều ngành, mất khoảng <strong>10–15 phút</strong>, câu hỏi dạng lựa chọn mức độ trưởng thành qua 12 chỉ báo thực tế — phù hợp cho cả lãnh đạo lẫn quản lý cấp trung.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                  <div className="p-5 rounded-2xl bg-white border border-black/5">
                    <span className="text-xs font-bold text-[#17151A] block mb-2">Bảng Đánh Giá 6 Trục</span>
                    <p className="text-xs text-[#6E6E6E] leading-relaxed">
                      Chỉ ra khoảng trống then chốt, điểm nghẽn độ trễ và rủi ro chính của tổ chức.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white border border-black/5">
                    <span className="text-xs font-bold text-[#17151A] block mb-2">Lộ Trình Ưu Tiên</span>
                    <p className="text-xs text-[#6E6E6E] leading-relaxed">
                      Gợi ý cụ thể: nên bắt đầu ở use case nào, bước nào mang lại giá trị nhanh nhất.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white border border-black/5">
                    <span className="text-xs font-bold text-[#17151A] block mb-2">Trao Đổi 1-on-1</span>
                    <p className="text-xs text-[#6E6E6E] leading-relaxed">
                      Cơ hội bàn bước đi phù hợp với đúng bối cảnh doanh nghiệp bạn cùng chuyên gia Sunext.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Why do this first */}
            <div className="space-y-6 my-12 pt-6 border-t border-black/5">
              <h2 className="text-2xl sm:text-3xl font-light text-[#17151A]">
                Vì sao nên làm việc này trước, không phải sau
              </h2>

              <div className="space-y-4 text-base text-[#6E6E6E] leading-relaxed">
                <p>
                  Các doanh nghiệp đã đi đúng thứ tự này — đánh giá trước, đầu tư đúng chỗ sau — đều có chung một điểm: họ biết chính xác đang yếu ở đâu trước khi triển khai, nên không phí một đồng nào vào chỗ chưa cần thiết.
                </p>
                <div className="p-5 rounded-2xl bg-[#F5F3F6] border border-black/5 space-y-3 text-xs sm:text-sm text-[#17151A]">
                  <p>
                    <strong>Chuỗi bán lẻ 500 nhân sự</strong> biết trước đội HR cần đào tạo nền tảng trước khi nhận một con Agent — nên khi Agent ra đời, đội đã sẵn sàng dùng ngay, không mất thêm 3 tháng để &ldquo;làm quen&rdquo;, rút ngắn thời gian lọc CV từ 3 ngày xuống 2 giờ và tiết kiệm 40% chi phí.
                  </p>
                  <p>
                    <strong>Nhà máy cơ khí 800 công nhân</strong> biết trước dữ liệu chuyền sản xuất cần chuẩn hóa trước khi gắn Computer Vision — nên hệ thống chạy đúng ngay từ đầu, đạt độ chính xác 99.8% mà không phải sửa đi sửa lại.
                  </p>
                </div>
                <p className="font-medium text-[#17151A]">
                  Không doanh nghiệp nào trong số đó &ldquo;may mắn&rdquo;. Họ chỉ đo trước khi làm.
                </p>
              </div>
            </div>

            {/* Final CTA Block */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#17151A] text-white my-12 text-center space-y-6">
              <div className="max-w-xl mx-auto space-y-3">
                <span className="text-xs uppercase tracking-wider text-[#FAFFDE] font-semibold">
                  BƯỚC TIẾP THEO
                </span>
                <h3 className="text-2xl sm:text-3xl font-light">
                  Biết chính xác doanh nghiệp bạn đang mạnh ở đâu, yếu ở đâu qua 12 chỉ báo thực tế.
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300">
                  Đánh giá miễn phí trên 6 trụ cột quyết định một sáng kiến AI thành hay bại (thang 12–48 điểm).
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link href="/ai-maturity-assessment">
                  <Button variant="lime" size="lg" className="rounded-full text-xs font-semibold px-8 py-3.5">
                    <span>Làm bài chẩn đoán mức độ sẵn sàng AI (12 câu hỏi)</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/tu-duy-chuyen-doi-ai">
                  <Button variant="secondary" size="lg" className="rounded-full text-xs px-6 py-3.5">
                    <span>Xem 6 Trụ Cột Chuyển Đổi AI</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </div>
  );
}
