'use client';

import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Zap, Users, AlertCircle } from 'lucide-react';

export function ProcessFirstSection() {
  const [isAiMode, setIsAiMode] = useState(true);

  return (
    <section className="relative w-full py-24 sm:py-32 px-6 md:px-12 lg:px-20 bg-white border-b border-[#E7E7E5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        
        {/* 1 Headline + 1 Support Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#581C87] font-semibold mb-2.5 block">
              Nguyên tắc 01
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0A0A0A] leading-tight">
              Quy trình <span className="font-normal text-[#0A0A0A]">trước công cụ.</span>
            </h2>
          </div>

          <p className="text-base text-[#515151] max-w-[460px] leading-relaxed font-normal">
            Không đưa AI vào một quy trình hỗn loạn. Chuẩn hóa SOP và cắt bỏ thao tác thừa trước khi tự động hóa.
          </p>
        </div>

        {/* 1 Main Visual with Behavior: 12 Manual Steps Collapsing into 4 AI Steps */}
        <div className="w-full rounded-2xl bg-[#F9F9F8] border border-[#E7E7E5] p-6 sm:p-10 lg:p-12 mb-10">
          
          {/* Behavior Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E7E7E5] mb-8">
            <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-[#E7E7E5]">
              <button
                type="button"
                onClick={() => setIsAiMode(true)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isAiMode
                    ? 'bg-[#0A0A0A] text-white shadow-xs'
                    : 'text-[#515151] hover:text-[#0A0A0A]'
                }`}
              >
                <span>4 bước có AI</span>
              </button>

              <button
                type="button"
                onClick={() => setIsAiMode(false)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  !isAiMode
                    ? 'bg-[#0A0A0A] text-white shadow-xs'
                    : 'text-[#515151] hover:text-[#0A0A0A]'
                }`}
              >
                <span>12 bước thủ công cũ</span>
              </button>
            </div>

            <div className="text-xs font-mono text-[#747474]">
              {isAiMode ? 'Chu kỳ: 2 Giờ · Tự động hóa' : 'Chu kỳ: 3 Ngày · Phân mảnh & nhiều nút thắt'}
            </div>
          </div>

          {/* Morphing Visual Canvas */}
          {isAiMode ? (
            <div className="animate-in fade-in duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Node 1 */}
                <div className="p-6 rounded-xl bg-white border border-[#E7E7E5] flex flex-col justify-between h-[150px]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#581C87] font-semibold">01 · INGEST</span>
                    <Zap className="w-3.5 h-3.5 text-[#581C87]" />
                  </div>
                  <div>
                    <div className="text-base font-medium text-[#0A0A0A]">Trích xuất đa kênh</div>
                    <div className="text-xs text-[#747474] mt-0.5">Email, Scan, PDF gom 1 luồng</div>
                  </div>
                  <div className="text-[11px] font-mono text-[#059669]">0.8s xử lý</div>
                </div>

                {/* Node 2 */}
                <div className="p-6 rounded-xl bg-white border border-[#E7E7E5] flex flex-col justify-between h-[150px]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#581C87] font-semibold">02 · VERIFY</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                  </div>
                  <div>
                    <div className="text-base font-medium text-[#0A0A0A]">Đối soát dữ liệu</div>
                    <div className="text-xs text-[#747474] mt-0.5">Đối chiếu 3 chiều với SAP/ERP</div>
                  </div>
                  <div className="text-[11px] font-mono text-[#059669]">99.8% chuẩn xác</div>
                </div>

                {/* Node 3 */}
                <div className="p-6 rounded-xl bg-white border border-[#E7E7E5] flex flex-col justify-between h-[150px]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#581C87] font-semibold">03 · COMPLY</span>
                    <Zap className="w-3.5 h-3.5 text-[#581C87]" />
                  </div>
                  <div>
                    <div className="text-base font-medium text-[#0A0A0A]">Rà soát sai lệch</div>
                    <div className="text-xs text-[#747474] mt-0.5">Phát hiện cờ đỏ điều khoản</div>
                  </div>
                  <div className="text-[11px] font-mono text-[#581C87]">Zero-risk</div>
                </div>

                {/* Node 4 */}
                <div className="p-6 rounded-xl bg-white border-2 border-[#F97316] flex flex-col justify-between h-[150px]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#F97316] font-semibold">04 · APPROVAL</span>
                    <Users className="w-3.5 h-3.5 text-[#F97316]" />
                  </div>
                  <div>
                    <div className="text-base font-medium text-[#0A0A0A]">Quản lý duyệt 1-click</div>
                    <div className="text-xs text-[#747474] mt-0.5">Quyết định thuộc con người</div>
                  </div>
                  <div className="text-[11px] font-mono text-[#F97316] font-semibold">Hoàn tất quy trình</div>
                </div>

              </div>

              {/* Connecting Data Flow Bar */}
              <div className="mt-8 flex items-center justify-center gap-3 text-xs font-mono text-[#747474]">
                <span>INGEST</span>
                <span className="text-[#581C87]">──→</span>
                <span>VERIFY</span>
                <span className="text-[#581C87]">──→</span>
                <span>COMPLY</span>
                <span className="text-[#F97316]">──→</span>
                <span className="text-[#F97316] font-semibold">OUTPUT</span>
              </div>
            </div>
          ) : (
            <div className="animate-in fade-in duration-300">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  '1. Nhận email/file',
                  '2. Tải về máy',
                  '3. In giấy/mở file',
                  '4. Nhập tay Excel',
                  '5. So khớp hóa đơn',
                  '6. Dò lỗi thủ công',
                  '7. Gửi hỏi lại',
                  '8. Chờ 1-2 ngày',
                  '9. Nhập lại ERP',
                  '10. In phiếu ký',
                  '11. Chờ duyệt ký',
                  '12. Lưu kho giấy',
                ].map((step, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-white border border-[#E7E7E5] text-xs text-[#515151] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0" />
                    <span className="truncate">{step}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-center gap-2 text-xs font-mono text-[#EF4444]">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Nhiều điểm đứt gãy · Dễ sai lệch · Thời gian chờ 3–5 ngày</span>
              </div>
            </div>
          )}

        </div>

        {/* 1 Clear Proof */}
        <div className="flex items-baseline gap-4 pt-2">
          <span className="text-5xl sm:text-6xl font-light tracking-tight text-[#0A0A0A] tabular-nums">
            −67%
          </span>
          <div className="flex flex-col">
            <span className="text-base font-medium text-[#0A0A0A]">Thời gian xử lý luồng việc</span>
            <span className="text-xs font-mono text-[#747474]">Đo lường sau khi chuẩn hóa SOP và tinh giản bước thừa</span>
          </div>
        </div>

      </div>
    </section>
  );
}
