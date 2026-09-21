'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Layers, LayoutGrid, Sparkles, Users, ArrowRight } from 'lucide-react';
import { Button } from './Button';

const NAV_ITEMS = [
  { href: '/', label: 'Trang chủ' },
  { href: '/tu-duy-chuyen-doi-ai', label: 'Phương pháp', icon: Layers },
  { href: '/case-studies', label: 'Dự án thực tế', icon: LayoutGrid },
  { href: '/nganh', label: 'Theo ngành', icon: Sparkles },
  { href: '/doi-ngu', label: 'Đội ngũ', icon: Users },
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
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E8E8E8] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]'
            : 'bg-white/80 backdrop-blur-xs border-b border-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-3.5 flex items-center justify-between">
          {/* Brand Logo with Purple Tech Accent */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Sunext — Trang chủ">
            <div className="w-7 h-7 rounded-lg bg-[#FAF8FC] border border-[#E8E8E8] flex items-center justify-center transition-transform group-hover:scale-105 group-hover:border-[#6B21A8]/40">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#6B21A8]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16.5 3.5L7.5 7.5V16.5L16.5 20.5" />
                <path d="M7.5 7.5L16.5 11.5V20.5" />
              </svg>
            </div>
            <span className="font-semibold text-lg tracking-tight text-[#111111]">Sunext</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center bg-[#F7F7F8] rounded-full p-1 border border-[#E8E8E8] shadow-2xs text-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-[#111111] font-semibold shadow-xs'
                      : 'font-medium text-[#626262] hover:text-[#111111] hover:bg-black/5'
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
              <Button variant="orange" size="md" className="rounded-full shadow-sm text-xs sm:text-sm font-medium">
                <span>Đặt lịch tư vấn</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>

            <button
              type="button"
              aria-label="Mở menu điều hướng"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-[#111111] hover:bg-black/5 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-50 bg-white/98 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-[#E8E8E8] animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 p-3.5 rounded-xl text-sm transition-colors ${
                    isActive
                      ? 'bg-[#FAF8FC] text-[#6B21A8] font-semibold border border-[#6B21A8]/20'
                      : 'font-medium text-[#111111] hover:bg-[#F7F7F8]'
                  }`}
                >
                  {Icon && <Icon className={`w-4 h-4 ${isActive ? 'text-[#6B21A8]' : 'text-[#626262]'}`} />}
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-[#E8E8E8]">
              <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="orange" size="lg" className="w-full rounded-full shadow-sm text-sm">
                  <span>Đặt lịch tư vấn</span>
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
