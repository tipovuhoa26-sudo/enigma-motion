'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { CASES_DATA } from '@/content/data';

export default function CasesIndexPage() {
  return (
    <div className="editorial-shell">
      <div className="editorial-card min-h-screen flex flex-col justify-between">
        <Header activeSection="service" />

        <main className="px-6 md:px-12 lg:px-20 py-12 flex-1">
          <div className="flex items-center gap-2 mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-xs text-[#6E6E6E] hover:text-[#17151A] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại Trang Chủ</span>
            </Link>
          </div>

          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-medium block mb-2">
              DỰ ÁN THỰC CHIẾN ĐÃ TRIỂN KHAI
            </span>
            <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-[#17151A] leading-tight">
              Case Studies & Kết Quả Đo Lường Được
            </h1>
            <p className="text-base text-[#6E6E6E] mt-4 leading-relaxed">
              Khám phá cách Sunext đồng hành cùng doanh nghiệp Việt Nam giải quyết bài toán thật: tối ưu quy trình, giảm chi phí tuyển dụng, tự động hóa kiểm định và nghiệm thu bằng hiệu quả P&L định lượng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASES_DATA.map((item) => (
              <Link
                key={item.id}
                href={`/cases/${item.slug}`}
                className="group rounded-3xl overflow-hidden bg-white/70 border border-black/5 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#6E6E6E]">
                      {item.category}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>

                  <h3 className="text-base font-semibold text-[#17151A] group-hover:text-black transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {item.summary && (
                    <p className="text-xs text-[#6E6E6E] leading-relaxed mb-4">
                      {item.summary}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative w-full h-[200px] sm:h-[220px] rounded-2xl overflow-hidden bg-[#F5F3F6] mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-black/5 text-xs text-[#17151A] font-medium">
                    <span>Xem Chi Tiết Dự Án</span>
                    <div className="w-6 h-6 rounded-full bg-[#17151A] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
