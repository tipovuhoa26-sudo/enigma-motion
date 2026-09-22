'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Download, Play, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/Button';

export default function DemoVideoPage() {
  return (
    <div className="min-h-screen bg-[#FAF9FC] text-[#111111] flex flex-col items-center py-12 px-6">
      <div className="max-w-4xl w-full">
        
        {/* Navigation & Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#666666] hover:text-[#111111] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại Trang Chủ</span>
          </Link>

          <a 
            href="/sunext-demo.mp4" 
            download="sunext-cinematic-walkthrough.mp4"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] text-white text-xs font-medium hover:bg-[#333333] transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Tải Video MP4 (5MB)</span>
          </a>
        </div>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E8E8] text-xs font-semibold text-[#6B21A8] mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
            CINEMATIC WALKTHROUGH DEMO
          </div>
          <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-[#111111]">
            Video Báo Cáo Trải Nghiệm <span className="font-semibold text-[#6B21A8]">Sunext AI Enterprise</span>
          </h1>
          <p className="text-sm text-[#666666] mt-2 max-w-xl mx-auto">
            Bản ghi hình thực tế 20 giây: Hero 3 lớp chiều sâu, Control Room Dashboard, Bento Grid 7 khối, 3 Nguyên tắc ghim và Flagship Case Vietcap.
          </p>
        </div>

        {/* Video Player Card */}
        <div className="relative rounded-2xl overflow-hidden bg-black border border-[#E8E8E8] shadow-xl mb-10">
          <video
            controls
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto aspect-[1920/734] object-contain"
            src="/sunext-demo.mp4"
          >
            Trình duyệt của bạn không hỗ trợ phát video HTML5.
          </video>
        </div>

        {/* Scene Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-white border border-[#E8E8E8] shadow-2xs">
            <div className="text-xs font-mono font-bold text-[#F97316] uppercase mb-1">Scene 01 · 00:00 - 00:05</div>
            <h3 className="text-base font-semibold text-[#111111] mb-1">Hero 3-Layer Depth & AI Control Room</h3>
            <p className="text-xs text-[#666666] leading-relaxed">
              Mạng lưới Transformation Network kết hợp cùng Control Room Dashboard hiển thị 4 Chốt Kiểm Soát (Gate 01-04) và các chỉ số vận hành thực tế.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E8E8E8] shadow-2xs">
            <div className="text-xs font-mono font-bold text-[#6B21A8] uppercase mb-1">Scene 02 · 00:05 - 00:08</div>
            <h3 className="text-base font-semibold text-[#111111] mb-1">Enterprise Marquee & Stats Strip</h3>
            <p className="text-xs text-[#666666] leading-relaxed">
              Dải logo đối tác tự động tạm dừng khi di chuột và chuỗi bằng chứng định lượng (99.8%, 3 ngày ➔ 2h, -75%).
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E8E8E8] shadow-2xs">
            <div className="text-xs font-mono font-bold text-[#059669] uppercase mb-1">Scene 03 · 00:08 - 00:14</div>
            <h3 className="text-base font-semibold text-[#111111] mb-1">Bento Grid 7 Khối Kiến Trúc</h3>
            <p className="text-xs text-[#666666] leading-relaxed">
              Trải nghiệm hover trên AI Agents, Data Mesh, Automation và khối ROI tối màu viền cam nghiệm thu theo P&L.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E8E8E8] shadow-2xs">
            <div className="text-xs font-mono font-bold text-[#111111] uppercase mb-1">Scene 04 · 00:14 - 00:20</div>
            <h3 className="text-base font-semibold text-[#111111] mb-1">3 Nguyên Tắc Ghim & Vietcap Flagship Case</h3>
            <p className="text-xs text-[#666666] leading-relaxed">
              Thẻ Flagship Vietcap với dòng chảy chuyển đổi 2 Ngày ➔ 3 Giờ và cam kết bảo mật thông tin chuẩn doanh nghiệp.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
