'use client';

import React from 'react';
import {
  Shield,
  Lock,
  ArrowDown,
  ArrowRight,
  Server,
  Database,
  Key,
  Cpu,
  EyeOff,
  FileCheck,
  Radio,
} from 'lucide-react';

interface DataSecurityVisualProps {
  className?: string;
}

export function DataSecurityVisual({ className = '' }: DataSecurityVisualProps) {
  return (
    <div
      className={`relative w-full bg-[#0C0B10] text-white p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl overflow-hidden font-sans select-none ${className}`}
    >
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b98115_1px,transparent_1px)] bg-[size:20px_20px]" />
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header HUD */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-2.5">
          <Shield className="w-5 h-5 text-emerald-400" />
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-300 uppercase">
            DATA SECURITY ARCHITECTURE & FLOW TELEMETRY
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
            <Radio className="w-2.5 h-2.5 animate-pulse" />
            ZERO DATA RETENTION (ZDR) ACTIVE
          </span>
          <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
            TLS 1.3 · AES-256
          </span>
        </div>
      </div>

      {/* Layer 1: Client Environment (Data at Rest) */}
      <div className="relative z-10 p-5 rounded-2xl bg-[#14121B] border border-white/10 mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-zinc-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
              LỚP 1: HẠ TẦNG NỘI BỘ DOANH NGHIỆP (CLIENT TENANT / PRIVATE VPC / ON-PREMISE)
            </span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
            DATA AT REST · AES-256
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
          <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-start gap-2.5">
            <Database className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-zinc-200">Cơ Sở Dữ Liệu Nghiệp Vụ</strong>
              <span className="text-[11px] text-zinc-400">ERP, CRM, ATS, MES, BCTC</span>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-start gap-2.5">
            <Key className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-zinc-200">Dedicated Vector DB</strong>
              <span className="text-[11px] text-zinc-400">Tenant phân lập mã hóa at-rest</span>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-start gap-2.5">
            <Lock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-zinc-200">Phân Quyền Truy Cập RBAC</strong>
              <span className="text-[11px] text-zinc-400">Giới hạn theo vai trò phòng ban</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pipeline Transition Indicator */}
      <div className="relative z-10 flex justify-center my-2">
        <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-black/60 px-3 py-1 rounded-full border border-emerald-500/30">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          <span>Truy vấn nghiệp vụ mã hóa kênh truyền (In-Transit)</span>
        </div>
      </div>

      {/* Layer 2: Sunext Secure Gateway & Sanitization */}
      <div className="relative z-10 p-5 rounded-2xl bg-gradient-to-r from-[#131E1B] via-[#10181F] to-[#131E1B] border border-emerald-500/30 mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-300">
              LỚP 2: SUNEXT SECURE GATEWAY & KHỬ ĐỊNH DANH (PII REDACTION ENGINE)
            </span>
          </div>
          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
            PII MASKING · TLS 1.3
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
          <div className="p-3 rounded-xl bg-black/30 border border-emerald-500/20 flex items-start gap-2.5">
            <EyeOff className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-emerald-200">Lọc Khử PII Tự Động</strong>
              <span className="text-[11px] text-zinc-400">Ẩn danh họ tên, SĐT, CCCD, Email</span>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-black/30 border border-emerald-500/20 flex items-start gap-2.5">
            <FileCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-teal-200">Context Chunking Tối Thiểu</strong>
              <span className="text-[11px] text-zinc-400">Chỉ gửi đoạn văn cần suy luận</span>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-black/30 border border-emerald-500/20 flex items-start gap-2.5">
            <Lock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-cyan-200">Kênh Truyền Bảo Vệ</strong>
              <span className="text-[11px] text-zinc-400">Mã hóa TLS 1.3 hai chiều</span>
            </div>
          </div>
        </div>
      </div>

      {/* Branching Indicator */}
      <div className="relative z-10 flex justify-center my-2">
        <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400 bg-black/60 px-3 py-1 rounded-full border border-cyan-500/30">
          <ArrowDown className="w-3.5 h-3.5" />
          <span>Phân luồng thực thi theo 4 Tầng An Toàn Dữ Liệu</span>
        </div>
      </div>

      {/* Layer 3: 4 Tiers Execution Processing Mesh */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Tier 1 */}
        <div className="p-4 rounded-2xl bg-[#14121B] border border-white/10 flex flex-col justify-between space-y-3 font-mono">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-pink-400 uppercase tracking-wider">TIER 1: API CHUẨN</span>
              <span className="text-[9px] bg-pink-950/60 text-pink-300 px-1.5 py-0.5 rounded border border-pink-500/30">ZDR</span>
            </div>
            <strong className="text-xs text-white block mb-1">Enterprise API</strong>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              OpenAI / Anthropic Enterprise. Không lưu trữ, không dùng tái huấn luyện mô hình.
            </p>
          </div>
          <div className="pt-2 border-t border-white/5 text-[10px] text-emerald-400">
            ✓ Phù hợp Gói 1 & Gói 2
          </div>
        </div>

        {/* Tier 2 */}
        <div className="p-4 rounded-2xl bg-[#14121B] border border-white/10 flex flex-col justify-between space-y-3 font-mono">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">TIER 2: HYBRID RAG</span>
              <span className="text-[9px] bg-amber-950/60 text-amber-300 px-1.5 py-0.5 rounded border border-amber-500/30">ISOLATED</span>
            </div>
            <strong className="text-xs text-white block mb-1">Dedicated Tenant</strong>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Vector DB phân lập, khử PII trước khi suy luận. Dữ liệu tĩnh nằm trọn trong tenant.
            </p>
          </div>
          <div className="pt-2 border-t border-white/5 text-[10px] text-emerald-400">
            ✓ Phù hợp Gói 2 & Gói 3
          </div>
        </div>

        {/* Tier 3A */}
        <div className="p-4 rounded-2xl bg-[#14121B] border border-white/10 flex flex-col justify-between space-y-3 font-mono">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">TIER 3A: PRIVATE CLOUD</span>
              <span className="text-[9px] bg-cyan-950/60 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-500/30">VPC</span>
            </div>
            <strong className="text-xs text-white block mb-1">Dedicated Cloud VPC</strong>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              PrivateLink, ngắt public internet, LLM endpoint nội bộ, kiểm soát egress nghiêm ngặt.
            </p>
          </div>
          <div className="pt-2 border-t border-white/5 text-[10px] text-emerald-400">
            ✓ Phù hợp Gói 3 Enterprise
          </div>
        </div>

        {/* Tier 3B */}
        <div className="p-4 rounded-2xl bg-[#111C18] border border-emerald-500/40 flex flex-col justify-between space-y-3 font-mono">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">TIER 3B: SOVEREIGN AI</span>
              <span className="text-[9px] bg-emerald-950/80 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/40">AIR-GAPPED</span>
            </div>
            <strong className="text-xs text-white block mb-1">On-Premise GPU Cluster</strong>
            <p className="text-[11px] text-zinc-300 leading-relaxed">
              Cách ly vật lý 100% với internet. Zero Data Egress: không byte dữ liệu nào rời khỏi xưởng/máy chủ.
            </p>
          </div>
          <div className="pt-2 border-t border-white/5 text-[10px] text-emerald-400 font-bold">
            ✓ Core Banking, Y Tế, MES
          </div>
        </div>
      </div>
    </div>
  );
}
