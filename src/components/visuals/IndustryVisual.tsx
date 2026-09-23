'use client';

import React from 'react';
import { 
  ShoppingBag, 
  Factory, 
  Briefcase, 
  Building2, 
  TrendingUp, 
  Activity, 
  Cpu, 
  CheckCircle2,
  Scan,
  Users,
  Video,
  Database
} from 'lucide-react';

interface IndustryVisualProps {
  slug: string;
  className?: string;
  compact?: boolean;
}

export function IndustryVisual({ slug, className = '', compact = false }: IndustryVisualProps) {
  switch (slug) {
    case 'ban-le-tieu-dung':
      return <RetailIndustryVisual compact={compact} className={className} />;
    case 'san-xuat-che-tao':
      return <ManufacturingIndustryVisual compact={compact} className={className} />;
    case 'dich-vu-b2b':
      return <B2bIndustryVisual compact={compact} className={className} />;
    case 'bat-dong-san':
    case 'bat-dong-san-nha-pho':
      return <RealEstateIndustryVisual compact={compact} className={className} />;
    case 'tai-chinh-dau-tu':
      return <FinanceIndustryVisual compact={compact} className={className} />;
    case 'y-te-suc-khoe':
      return <HealthcareIndustryVisual compact={compact} className={className} />;
    default:
      return <RetailIndustryVisual compact={compact} className={className} />;
  }
}

// 1. Bán lẻ & Hàng tiêu dùng (Retail & FMCG)
function RetailIndustryVisual({ compact, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full min-h-[220px] bg-[#110E15] text-white p-5 flex flex-col justify-between overflow-hidden select-none font-sans ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(#ec489910_1px,transparent_1px)] bg-[size:18px_18px]" />
      <div className="absolute top-0 right-0 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-pink-500/20 pb-3">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-3.5 h-3.5 text-pink-400" />
          <span className="text-[11px] font-mono tracking-wider text-pink-300 uppercase font-semibold">
            RETAIL & FMCG · OMNICHANNEL TELEMETRY
          </span>
        </div>
        <span className="text-[10px] font-mono text-pink-300 bg-pink-950/60 px-2 py-0.5 rounded border border-pink-500/30">
          500+ NHÂN SỰ
        </span>
      </div>

      {/* Telemetry Graphic */}
      <div className="relative z-10 my-auto py-2">
        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
          <div className="bg-pink-950/20 p-2.5 rounded-xl border border-pink-500/20">
            <span className="text-[10px] text-zinc-400 block">HR SÀNG LỌC HỒ SƠ</span>
            <span className="text-base text-pink-300 font-bold mt-1 block">3 Ngày ➔ 2 Giờ</span>
            <span className="text-[9px] text-emerald-400 block">Tiết kiệm 40% chi phí tuyển</span>
          </div>
          <div className="bg-pink-950/20 p-2.5 rounded-xl border border-pink-500/20">
            <span className="text-[10px] text-zinc-400 block">TIÊU DÙNG & TỒN KHO</span>
            <span className="text-base text-white font-bold mt-1 block">Real-time Demand</span>
            <span className="text-[9px] text-zinc-400 block">Tối ưu điểm bán theo ca kíp</span>
          </div>
        </div>
      </div>

      {/* Bottom KPIs */}
      <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-pink-500/20 text-center font-mono">
        <div className="bg-pink-950/30 p-2 rounded-xl">
          <span className="text-[9px] text-zinc-400 uppercase block">Chi Phí Nhân Sự</span>
          <span className="text-sm sm:text-base font-bold text-emerald-400">-40%</span>
        </div>
        <div className="bg-pink-950/30 p-2 rounded-xl">
          <span className="text-[9px] text-zinc-400 uppercase block">Tốc Độ Lọc CV</span>
          <span className="text-sm sm:text-base font-bold text-pink-300">x12 Tốc Độ</span>
        </div>
        <div className="bg-pink-950/30 p-2 rounded-xl">
          <span className="text-[9px] text-zinc-400 uppercase block">Điểm Bán</span>
          <span className="text-sm sm:text-base font-bold text-white">Toàn Chuỗi</span>
        </div>
      </div>
    </div>
  );
}

// 2. Sản xuất & Chế tạo (Manufacturing)
function ManufacturingIndustryVisual({ compact, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full min-h-[220px] bg-[#0A1017] text-white p-5 flex flex-col justify-between overflow-hidden select-none font-sans ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf812_1px,transparent_1px)] bg-[size:16px_16px]" />
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-cyan-500/20 pb-3">
        <div className="flex items-center gap-2">
          <Factory className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-[11px] font-mono tracking-wider text-cyan-300 uppercase font-semibold">
            MANUFACTURING · EDGE AI TELEMETRY
          </span>
        </div>
        <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
          6 DÂY CHUYỀN
        </span>
      </div>

      {/* Telemetry Graphic */}
      <div className="relative z-10 my-auto py-2">
        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
          <div className="bg-cyan-950/20 p-2.5 rounded-xl border border-cyan-500/20">
            <span className="text-[10px] text-zinc-400 block">KIỂM ĐỊNH THỊ GIÁC AI</span>
            <span className="text-base text-cyan-300 font-bold mt-1 block">99.8% Chính Xác</span>
            <span className="text-[9px] text-emerald-400 block">Tỷ lệ lỗi lọt 1.5%</span>
          </div>
          <div className="bg-cyan-950/20 p-2.5 rounded-xl border border-cyan-500/20">
            <span className="text-[10px] text-zinc-400 block">TỐC ĐỘ QUÉT BIÊN</span>
            <span className="text-base text-white font-bold mt-1 block">&lt; 50ms / Chi Tiết</span>
            <span className="text-[9px] text-zinc-400 block">Đồng bộ trực tiếp MES</span>
          </div>
        </div>
      </div>

      {/* Bottom KPIs */}
      <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-cyan-500/20 text-center font-mono">
        <div className="bg-cyan-950/30 p-2 rounded-xl">
          <span className="text-[9px] text-zinc-400 uppercase block">Độ Chính Xác</span>
          <span className="text-sm sm:text-base font-bold text-cyan-300">99.8%</span>
        </div>
        <div className="bg-cyan-950/30 p-2 rounded-xl">
          <span className="text-[9px] text-zinc-400 uppercase block">Tỷ Lệ Phế Phẩm</span>
          <span className="text-sm sm:text-base font-bold text-emerald-400">1.5%</span>
        </div>
        <div className="bg-cyan-950/30 p-2 rounded-xl">
          <span className="text-[9px] text-zinc-400 uppercase block">Vận Hành</span>
          <span className="text-sm sm:text-base font-bold text-white">24/7 Edge</span>
        </div>
      </div>
    </div>
  );
}

// 3. Dịch vụ B2B & Chuyên gia (B2B Services)
function B2bIndustryVisual({ compact, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full min-h-[220px] bg-[#110D18] text-white p-5 flex flex-col justify-between overflow-hidden select-none font-sans ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(#a855f712_1px,transparent_1px)] bg-[size:18px_18px]" />
      <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-purple-500/20 pb-3">
        <div className="flex items-center gap-2">
          <Briefcase className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-[11px] font-mono tracking-wider text-purple-300 uppercase font-semibold">
            B2B PROFESSIONAL · KNOWLEDGE OS
          </span>
        </div>
        <span className="text-[10px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
          200 NHÂN SỰ
        </span>
      </div>

      {/* Telemetry Graphic */}
      <div className="relative z-10 my-auto py-2">
        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
          <div className="bg-purple-950/20 p-2.5 rounded-xl border border-purple-500/20">
            <span className="text-[10px] text-zinc-400 block">CONTENT FACTORY</span>
            <span className="text-base text-purple-300 font-bold mt-1 block">x5 Sản Lượng</span>
            <span className="text-[9px] text-emerald-400 block">+60% Organic traffic</span>
          </div>
          <div className="bg-purple-950/20 p-2.5 rounded-xl border border-purple-500/20">
            <span className="text-[10px] text-zinc-400 block">HỒ SƠ ĐẤU THẦU</span>
            <span className="text-base text-white font-bold mt-1 block">-65% Thời Gian</span>
            <span className="text-[9px] text-zinc-400 block">Tự động dựng pitch deck</span>
          </div>
        </div>
      </div>

      {/* Bottom KPIs */}
      <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-purple-500/20 text-center font-mono">
        <div className="bg-purple-950/30 p-2 rounded-xl">
          <span className="text-[9px] text-zinc-400 uppercase block">Tốc Độ Tạo Bài</span>
          <span className="text-sm sm:text-base font-bold text-purple-300">x5 Tốc Độ</span>
        </div>
        <div className="bg-purple-950/30 p-2 rounded-xl">
          <span className="text-[9px] text-zinc-400 uppercase block">Traffic Tăng</span>
          <span className="text-sm sm:text-base font-bold text-emerald-400">+60%</span>
        </div>
        <div className="bg-purple-950/30 p-2 rounded-xl">
          <span className="text-[9px] text-zinc-400 uppercase block">Chi Phí Agency</span>
          <span className="text-sm sm:text-base font-bold text-[#A3E635]">0đ Thêm</span>
        </div>
      </div>
    </div>
  );
}

// 4. Bất động sản & Nhà phố (Real Estate)
function RealEstateIndustryVisual({ compact, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full min-h-[220px] bg-[#140F0A] text-white p-5 flex flex-col justify-between overflow-hidden select-none font-sans ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(#f59e0b12_1px,transparent_1px)] bg-[size:18px_18px]" />
      <div className="absolute top-1/4 right-1/4 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-amber-500/20 pb-3">
        <div className="flex items-center gap-2">
          <Building2 className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[11px] font-mono tracking-wider text-amber-300 uppercase font-semibold">
            REAL ESTATE · FIELD SALES ENABLEMENT
          </span>
        </div>
        <span className="text-[10px] font-mono text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
          500+ MÔI GIỚI
        </span>
      </div>

      {/* Telemetry Graphic */}
      <div className="relative z-10 my-auto py-2">
        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
          <div className="bg-amber-950/20 p-2.5 rounded-xl border border-amber-500/20">
            <span className="text-[10px] text-zinc-400 block">VIDEO THỰC ĐỊA DI ĐỘNG</span>
            <span className="text-base text-amber-300 font-bold mt-1 block">+200% Sản Lượng</span>
            <span className="text-[9px] text-emerald-400 block">Quay dựng trực tiếp 45s</span>
          </div>
          <div className="bg-amber-950/20 p-2.5 rounded-xl border border-amber-500/20">
            <span className="text-[10px] text-zinc-400 block">TRỢ LÝ ẢO GIỎ HÀNG</span>
            <span className="text-base text-white font-bold mt-1 block">24/7 Phản Hồi</span>
            <span className="text-[9px] text-zinc-400 block">Tra cứu căn & kịch bản chốt</span>
          </div>
        </div>
      </div>

      {/* Bottom KPIs */}
      <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-amber-500/20 text-center font-mono">
        <div className="bg-amber-950/30 p-2 rounded-xl">
          <span className="text-[9px] text-zinc-400 uppercase block">Video Thực Địa</span>
          <span className="text-sm sm:text-base font-bold text-amber-300">+200%</span>
        </div>
        <div className="bg-amber-950/30 p-2 rounded-xl">
          <span className="text-[9px] text-zinc-400 uppercase block">Môi Giới Tự Chủ</span>
          <span className="text-sm sm:text-base font-bold text-emerald-400">500+ Người</span>
        </div>
        <div className="bg-amber-950/30 p-2 rounded-xl">
          <span className="text-[9px] text-zinc-400 uppercase block">Kích Hoạt Lead</span>
          <span className="text-sm sm:text-base font-bold text-[#F97316]">+35%</span>
        </div>
      </div>
    </div>
  );
}

// 5. Tài chính, Chứng khoán & Quản lý quỹ (Finance & Investment)
function FinanceIndustryVisual({ compact, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full min-h-[220px] bg-[#0A1214] text-white p-5 flex flex-col justify-between overflow-hidden select-none font-sans ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(#14b8a612_1px,transparent_1px)] bg-[size:16px_16px]" />
      <div className="absolute top-0 right-1/4 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-teal-500/20 pb-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-3.5 h-3.5 text-teal-400" />
          <span className="text-[11px] font-mono tracking-wider text-teal-300 uppercase font-semibold">
            FINANCE & SECURITIES · FINANCIAL TELEMETRY
          </span>
        </div>
        <span className="text-[10px] font-mono text-teal-300 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-500/30">
          SOURCE TRACEABILITY 100%
        </span>
      </div>

      {/* Telemetry Graphic */}
      <div className="relative z-10 my-auto py-2">
        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
          <div className="bg-teal-950/20 p-2.5 rounded-xl border border-teal-500/20">
            <span className="text-[10px] text-zinc-400 block">MULTI-AGENT BCTC EXTRACTOR</span>
            <span className="text-base text-teal-300 font-bold mt-1 block">2 Ngày ➔ 3 Giờ</span>
            <span className="text-[9px] text-emerald-400 block">-75% Thời gian bóc tách PDF</span>
          </div>
          <div className="bg-teal-950/20 p-2.5 rounded-xl border border-teal-500/20">
            <span className="text-[10px] text-zinc-400 block">FINANCIAL AUDIT GATE</span>
            <span className="text-base text-white font-bold mt-1 block">Zero Anomaly</span>
            <span className="text-[9px] text-zinc-400 block">Đối soát cân đối & dòng tiền</span>
          </div>
        </div>
      </div>

      {/* Bottom KPIs */}
      <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-teal-500/20 text-center font-mono">
        <div className="bg-teal-950/30 p-2 rounded-xl">
          <span className="text-[9px] text-zinc-400 uppercase block">Thời Gian Xử Lý</span>
          <span className="text-sm sm:text-base font-bold text-emerald-400">-75%</span>
        </div>
        <div className="bg-teal-950/30 p-2 rounded-xl">
          <span className="text-[9px] text-zinc-400 uppercase block">Số Trang Nguồn</span>
          <span className="text-sm sm:text-base font-bold text-teal-300">100% Trace</span>
        </div>
        <div className="bg-teal-950/30 p-2 rounded-xl">
          <span className="text-[9px] text-zinc-400 uppercase block">Kiểm Toán Dữ Liệu</span>
          <span className="text-sm sm:text-base font-bold text-teal-300">Audit Log</span>
        </div>
      </div>
    </div>
  );
}

// 6. Y tế, Bệnh viện & Chăm sóc sức khỏe (Healthcare)
function HealthcareIndustryVisual({ compact, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full min-h-[220px] bg-[#0E1513] text-white p-5 flex flex-col justify-between overflow-hidden select-none font-sans ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(#10b98112_1px,transparent_1px)] bg-[size:16px_16px]" />
      <div className="absolute bottom-0 right-1/3 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-emerald-500/20 pb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[11px] font-mono tracking-wider text-emerald-300 uppercase font-semibold">
            HEALTHCARE & HOSPITALS · ADMINISTRATIVE TRIAGE
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
          NON-CLINICAL BOUNDARY
        </span>
      </div>

      {/* Telemetry Graphic */}
      <div className="relative z-10 my-auto py-2">
        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
          <div className="bg-emerald-950/20 p-2.5 rounded-xl border border-emerald-500/20">
            <span className="text-[10px] text-zinc-400 block">TIẾP ĐÓN & ĐIỀU PHỐI 24/7</span>
            <span className="text-base text-emerald-300 font-bold mt-1 block">-50% Chờ Đợi</span>
            <span className="text-[9px] text-emerald-400 block">Phân luồng hành chính tự động</span>
          </div>
          <div className="bg-emerald-950/20 p-2.5 rounded-xl border border-emerald-500/20">
            <span className="text-[10px] text-zinc-400 block">TRA CỨU PHÁC ĐỒ BỘ Y TẾ</span>
            <span className="text-base text-white font-bold mt-1 block">Doctor-in-the-loop</span>
            <span className="text-[9px] text-zinc-400 block">Tham khảo văn bản nguồn</span>
          </div>
        </div>
      </div>

      {/* Bottom KPIs */}
      <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-emerald-500/20 text-center font-mono">
        <div className="bg-emerald-950/30 p-2 rounded-xl">
          <span className="text-[9px] text-zinc-400 uppercase block">Thời Gian Chờ</span>
          <span className="text-sm sm:text-base font-bold text-emerald-400">-50%</span>
        </div>
        <div className="bg-emerald-950/30 p-2 rounded-xl">
          <span className="text-[9px] text-zinc-400 uppercase block">Hành Chính ĐD</span>
          <span className="text-sm sm:text-base font-bold text-emerald-300">-30% Giờ</span>
        </div>
        <div className="bg-emerald-950/30 p-2 rounded-xl">
          <span className="text-[9px] text-zinc-400 uppercase block">Khám Trực Tiếp</span>
          <span className="text-sm sm:text-base font-bold text-white">+5-7 Phút</span>
        </div>
      </div>
    </div>
  );
}

