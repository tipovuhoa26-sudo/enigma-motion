'use client';

import React, { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { CASES_DATA } from '@/content/data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CaseDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const caseItem = CASES_DATA.find((c) => c.slug === slug) ?? CASES_DATA[0];

  return (
    <div className="editorial-shell">
      <div className="editorial-card min-h-screen flex flex-col justify-between">
        <Header activeSection="service" />

        <main className="px-6 md:px-12 lg:px-20 py-12 flex-1">
          <Link href="/cases" className="inline-flex items-center gap-2 text-xs text-[#6E6E6E] hover:text-[#17151A] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Cases</span>
          </Link>

          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-wider text-[#6E6E6E] font-medium block mb-2">
              {caseItem.category}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#17151A] leading-tight mb-8">
              {caseItem.title}
            </h1>

            <div className="relative w-full h-[320px] sm:h-[460px] rounded-3xl overflow-hidden bg-[#F5F3F6] mb-12 shadow-sm">
              <Image
                src={caseItem.image}
                alt={caseItem.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="md:col-span-2 flex flex-col gap-6 text-base text-[#6E6E6E] leading-relaxed">
                <h2 className="text-2xl font-normal text-[#17151A]">Executive Summary</h2>
                <p>
                  To solve scale bottlenecks and reduce operational latency, we architected an autonomous data intelligence pipeline tailored to the unique domain constraints of {caseItem.title}.
                </p>
                <p>
                  By deploying our unified model mesh and real-time event infrastructure, manual interventions were reduced by 84%, while transaction throughput surged without compounding infrastructure overhead.
                </p>
              </div>

              <div className="bg-[#FAFFDE] rounded-3xl p-6 border border-[#DFE2C8] flex flex-col gap-4 h-fit">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#17151A]">
                  Impact Metrics
                </span>
                <div className="border-b border-black/5 pb-3">
                  <span className="text-3xl font-light text-[#17151A] block">2.8x</span>
                  <span className="text-xs text-[#6E6E6E]">Speed-to-delivery</span>
                </div>
                <div className="border-b border-black/5 pb-3">
                  <span className="text-3xl font-light text-[#17151A] block">-45%</span>
                  <span className="text-xs text-[#6E6E6E]">Compute overhead</span>
                </div>
                <div>
                  <span className="text-3xl font-light text-[#17151A] block">99.99%</span>
                  <span className="text-xs text-[#6E6E6E]">SLA adherence</span>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
