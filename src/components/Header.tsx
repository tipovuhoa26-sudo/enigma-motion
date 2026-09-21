'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Layers, LayoutGrid, Sparkles, Users, ArrowRight } from 'lucide-react';
import { Button } from './Button';

const NAV_ITEMS = [
  { href: '/tu-duy-chuyen-doi-ai', label: 'Phương pháp' },
  { href: '/nganh', label: 'Giải pháp' },
  { href: '/case-studies', label: 'Dự án' },
  { href: '/danh-gia-san-sang-ai', label: 'Đo Độ Sẵn Sàng' },
  { href: '/doi-ngu', label: 'Về Sunext' },
];

interface HeaderProps {
  activeSection?: string;
}

export function Header(_props: HeaderProps = {}) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 h-18 sm:h-20 flex items-center ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-[#E7E7E5] shadow-xs'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo with Purple Tech Accent */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Sunext — Trang chủ">
            <div className="w-8 h-8 rounded-lg bg-[#FAF8FC] border border-[#E7E7E5] flex items-center justify-center transition-transform group-hover:scale-105 group-hover:border-[#581C87]/40">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#581C87]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16.5 3.5L7.5 7.5V16.5L16.5 20.5" />
                <path d="M7.5 7.5L16.5 11.5V20.5" />
              </svg>
            </div>
            <span className="font-semibold text-xl tracking-tight text-[#0A0A0A]">Sunext</span>
          </Link>

          {/* Desktop Navigation: Editorial & Clean Corporate */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition-colors py-1 ${
                    isActive
                      ? 'text-[#0A0A0A] font-semibold'
                      : 'text-[#515151] hover:text-[#0A0A0A] font-normal'
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right CTAs with Orange Action Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/#contact" className="hidden sm:inline-flex">
              <Button variant="orange" size="md" className="rounded-xl font-medium shadow-sm">
                <span>Đặt lịch tư vấn</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>

            <button
              type="button"
              aria-label="Mở menu điều hướng"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-[#0A0A0A] hover:bg-black/5 transition-colors border border-[#E7E7E5]"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-50 bg-white/98 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-[#E7E7E5] animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3.5 rounded-xl text-base transition-colors ${
                    isActive
                      ? 'bg-[#FAF8FC] text-[#581C87] font-semibold border border-[#581C87]/20'
                      : 'font-normal text-[#0A0A0A] hover:bg-[#F9F9F8]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#747474]" />
                </Link>
              );
            })}
            <div className="pt-4 mt-2 border-t border-[#E7E7E5]">
              <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="orange" size="lg" className="w-full rounded-xl shadow-sm text-sm">
                  <span>Đặt lịch tư vấn chiến lược</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
