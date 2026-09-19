'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Layers, LayoutGrid, Sparkles, Users } from 'lucide-react';
import { Button } from './Button';

const NAV_ITEMS = [
  { href: '/', label: 'Trang chủ' },
  { href: '/tu-duy-chuyen-doi-ai', label: 'Phương pháp', icon: Layers },
  { href: '/case-studies', label: 'Dự án thực tế', icon: LayoutGrid },
  { href: '/nganh', label: 'Theo ngành', icon: Sparkles },
  { href: '/doi-ngu', label: 'Đội ngũ', icon: Users },
];

interface HeaderProps {
  /** Không còn dùng để đổi trạng thái nav (đã bỏ scroll-spy) — giữ lại
   * để các trang gọi <Header activeSection="..."/> không phải sửa hàng loạt. */
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
        className={`sticky top-0 z-40 w-full px-6 md:px-10 py-3.5 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F8F6]/95 backdrop-blur-md border-b border-black/5 shadow-xs'
            : 'bg-[#F8F8F6]/80 backdrop-blur-xs'
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Sunext — Trang chủ">
          <div className="w-6 h-6 flex items-center justify-center transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#17151A]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16.5 3.5L7.5 7.5V16.5L16.5 20.5" />
              <path d="M7.5 7.5L16.5 11.5V20.5" />
            </svg>
          </div>
          <span className="font-semibold text-lg tracking-tight text-[#17151A]">Sunext</span>
        </Link>

        <nav className="hidden md:flex items-center bg-[#F5F3F6] rounded-full p-1 border border-black/5 shadow-sm text-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-[#17151A] font-semibold shadow-xs'
                    : 'font-medium text-[#6E6E6E] hover:text-[#17151A] hover:bg-black/5'
                }`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/#contact" className="hidden sm:inline-flex">
            <Button variant="primary" size="md" className="rounded-full shadow-sm text-xs sm:text-sm font-medium">
              Đặt lịch tư vấn
            </Button>
          </Link>

          <button
            type="button"
            aria-label="Mở menu điều hướng"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-[#17151A] hover:bg-black/5 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-50 bg-white/95 backdrop-blur-xl rounded-3xl p-4 shadow-2xl border border-black/10 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 p-3.5 rounded-2xl text-sm transition-colors ${
                    isActive
                      ? 'bg-[#FAFFDE] text-[#17151A] font-semibold'
                      : 'font-medium text-[#17151A] hover:bg-black/5'
                  }`}
                >
                  {Icon && <Icon className={`w-4 h-4 ${isActive ? 'text-[#17151A]' : 'text-[#6E6E6E]'}`} />}
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-black/5">
              <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="primary" size="lg" className="w-full rounded-full shadow-sm text-sm">
                  Đặt lịch tư vấn
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
