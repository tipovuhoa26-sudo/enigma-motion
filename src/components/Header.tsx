'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import {
  HelpCircle,
  User,
  Settings,
  LayoutGrid,
  Home,
  Menu,
  X,
  Sparkles,
  Command,
  Sliders,
  Check,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { Button } from './Button';
import { useLenis } from '@/motion/SmoothScrollProvider';

interface HeaderProps {
  activeSection?: string;
}

export function Header({ activeSection: propActiveSection }: HeaderProps) {
  const { scrollTo } = useLenis();
  const [activeSection, setActiveSection] = useState<string>(propActiveSection || 'home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [reducedMotionActive, setReducedMotionActive] = useState(false);
  const [userRole, setUserRole] = useState<'Enterprise' | 'Partner' | 'Guest'>('Enterprise');
  const headerRef = useRef<HTMLElement>(null);

  // Synchronize prop if passed
  useEffect(() => {
    if (propActiveSection) {
      setActiveSection(propActiveSection);
    }
  }, [propActiveSection]);

  // ScrollSpy listener to update active section as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      if (propActiveSection) return;

      const advantageEl = document.querySelector('#advantage') || document.querySelector('#technology');
      const casesEl = document.querySelector('#cases') || document.querySelector('#service');
      const contactEl = document.querySelector('#contact') || document.querySelector('#schedule');

      const getTop = (el: Element | null) => {
        if (!el) return Infinity;
        const target = el.closest('.pin-spacer') || el;
        return target.getBoundingClientRect().top + window.scrollY;
      };

      const advantageTop = getTop(advantageEl);
      const casesTop = getTop(casesEl);
      const contactTop = getTop(contactEl);

      const offset = 220; // Trigger threshold
      if (scrollY >= contactTop - offset) {
        setActiveSection('contact');
      } else if (scrollY >= casesTop - offset) {
        setActiveSection('service');
      } else if (scrollY >= advantageTop - offset) {
        setActiveSection('technology');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [propActiveSection]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === 'Escape') {
        setIsHelpOpen(false);
        setIsAccountOpen(false);
        setIsMobileMenuOpen(false);
      } else if (e.key.toLowerCase() === 'h' && !e.metaKey && !e.ctrlKey) {
        scrollTo('#home');
      } else if (e.key.toLowerCase() === 't' && !e.metaKey && !e.ctrlKey) {
        scrollTo('#advantage');
      } else if (e.key.toLowerCase() === 's' && !e.metaKey && !e.ctrlKey) {
        scrollTo('#cases');
      } else if (e.key.toLowerCase() === 'c' && !e.metaKey && !e.ctrlKey) {
        scrollTo('#contact');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    const handleOpenHelp = () => setIsHelpOpen(true);
    const handleOpenAccount = () => setIsAccountOpen(true);
    window.addEventListener('open-help', handleOpenHelp);
    window.addEventListener('open-account', handleOpenAccount);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-help', handleOpenHelp);
      window.removeEventListener('open-account', handleOpenAccount);
    };
  }, [scrollTo]);

  const handleNavClick = (target: string, key: string) => {
    setActiveSection(key);
    setIsMobileMenuOpen(false);
    scrollTo(target);
  };

  const toggleReducedMotion = () => {
    const current = document.documentElement.getAttribute('data-motion');
    if (current === 'reduced') {
      document.documentElement.removeAttribute('data-motion');
      setReducedMotionActive(false);
    } else {
      document.documentElement.setAttribute('data-motion', 'reduced');
      setReducedMotionActive(true);
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-40 w-full px-6 md:px-10 py-3.5 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F8F6]/95 backdrop-blur-md border-b border-black/5 shadow-xs'
            : 'bg-[#F8F8F6]/80 backdrop-blur-xs'
        }`}
        data-motion="header"
      >
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick('#top', 'home')}
          className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-none"
          aria-label="Enigma Home"
        >
          <div className="w-6 h-6 flex items-center justify-center transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#17151A]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16.5 3.5L7.5 7.5V16.5L16.5 20.5" />
            </svg>
          </div>
          <span className="font-semibold text-lg tracking-tight text-[#17151A] flex items-center" data-header-wordmark>
            <span className="inline-block">En</span>
            <span className="inline-block">ig</span>
            <span className="inline-block">ma</span>
          </span>
        </button>

        {/* Nav Pill (Desktop) */}
        <nav
          className="hidden md:flex items-center bg-[#F5F3F6] rounded-full p-1 border border-black/5 shadow-sm text-sm"
          data-hero-nav
        >
          <button
            type="button"
            onClick={() => handleNavClick('#home', 'home')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full transition-all duration-200 font-medium cursor-pointer ${
              activeSection === 'home'
                ? 'bg-[#FAFFDE] text-[#17151A] shadow-xs scale-100'
                : 'text-[#6E6E6E] hover:text-[#17151A] hover:bg-black/5'
            }`}
            data-nav-item="home"
          >
            <span>Home</span>
            <Home className="w-3.5 h-3.5 opacity-60" />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('#advantage', 'technology')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full transition-all duration-200 font-medium cursor-pointer ${
              activeSection === 'technology'
                ? 'bg-[#FAFFDE] text-[#17151A] shadow-xs scale-100'
                : 'text-[#6E6E6E] hover:text-[#17151A] hover:bg-black/5'
            }`}
            data-nav-item="technology"
          >
            <span>Technology</span>
            <Settings className="w-3.5 h-3.5 opacity-60" />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('#cases', 'service')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full transition-all duration-200 font-medium cursor-pointer ${
              activeSection === 'service'
                ? 'bg-[#FAFFDE] text-[#17151A] shadow-xs scale-100'
                : 'text-[#6E6E6E] hover:text-[#17151A] hover:bg-black/5'
            }`}
            data-nav-item="service"
          >
            <span>Service</span>
            <LayoutGrid className="w-3.5 h-3.5 opacity-60" />
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3" data-hero-nav-cta>
          {/* Help Button */}
          <button
            type="button"
            aria-label="Help & Platform Guide"
            onClick={() => setIsHelpOpen(prev => !prev)}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isHelpOpen
                ? 'bg-[#FAFFDE] text-[#17151A] border border-[#DFE2C8]'
                : 'text-[#6E6E6E] hover:text-[#17151A] hover:bg-black/5'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          {/* User / Account Button */}
          <button
            type="button"
            aria-label="Account Portal"
            onClick={() => setIsAccountOpen(prev => !prev)}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isAccountOpen
                ? 'bg-[#FAFFDE] text-[#17151A] border border-[#DFE2C8]'
                : 'text-[#6E6E6E] hover:text-[#17151A] hover:bg-black/5'
            }`}
          >
            <User className="w-4 h-4" />
          </button>

          {/* Contact Us Button */}
          <button
            type="button"
            onClick={() => handleNavClick('#contact', 'contact')}
            className="hidden sm:inline-flex cursor-pointer"
          >
            <Button variant="primary" size="md" className="rounded-full shadow-sm text-xs sm:text-sm font-medium">
              Contact Us
            </Button>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            aria-label="Toggle Navigation Menu"
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-[#17151A] hover:bg-black/5 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-50 bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-black/10 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => handleNavClick('#home', 'home')}
              className={`flex items-center justify-between p-3.5 rounded-2xl font-medium text-sm transition-colors ${
                activeSection === 'home' ? 'bg-[#FAFFDE] text-[#17151A]' : 'text-[#6E6E6E] hover:bg-black/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </div>
              {activeSection === 'home' && <span className="w-2 h-2 rounded-full bg-[#17151A]" />}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('#advantage', 'technology')}
              className={`flex items-center justify-between p-3.5 rounded-2xl font-medium text-sm transition-colors ${
                activeSection === 'technology' ? 'bg-[#FAFFDE] text-[#17151A]' : 'text-[#6E6E6E] hover:bg-black/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <Settings className="w-4 h-4" />
                <span>Technology</span>
              </div>
              {activeSection === 'technology' && <span className="w-2 h-2 rounded-full bg-[#17151A]" />}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('#cases', 'service')}
              className={`flex items-center justify-between p-3.5 rounded-2xl font-medium text-sm transition-colors ${
                activeSection === 'service' ? 'bg-[#FAFFDE] text-[#17151A]' : 'text-[#6E6E6E] hover:bg-black/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <LayoutGrid className="w-4 h-4" />
                <span>Service</span>
              </div>
              {activeSection === 'service' && <span className="w-2 h-2 rounded-full bg-[#17151A]" />}
            </button>

            <div className="pt-3 mt-2 border-t border-black/5 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => handleNavClick('#contact', 'contact')}
                className="w-full"
              >
                <Button variant="primary" size="lg" className="w-full rounded-full shadow-sm text-sm">
                  Contact Us
                </Button>
              </button>

              <div className="flex items-center justify-around pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsHelpOpen(true);
                  }}
                  className="flex items-center gap-2 text-xs text-[#6E6E6E] hover:text-[#17151A] py-1"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Platform Help</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsAccountOpen(true);
                  }}
                  className="flex items-center gap-2 text-xs text-[#6E6E6E] hover:text-[#17151A] py-1"
                >
                  <User className="w-4 h-4" />
                  <span>Account Portal</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Help & Platform Guide Modal */}
      {isHelpOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsHelpOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/10 text-[#17151A] relative animate-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-black/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FAFFDE] border border-[#DFE2C8] flex items-center justify-center text-[#17151A]">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg leading-tight">Enigma Guide & Controls</h3>
                  <p className="text-xs text-[#6E6E6E]">Navigation shortcuts & motion preferences</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsHelpOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/5 text-[#6E6E6E] hover:text-[#17151A] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-5 space-y-4 text-sm">
              <div>
                <h4 className="font-medium text-xs uppercase tracking-wider text-[#6E6E6E] mb-2.5 flex items-center gap-2">
                  <Command className="w-3.5 h-3.5" />
                  Keyboard Shortcuts
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-[#F5F3F6] flex items-center justify-between">
                    <span className="text-[#6E6E6E]">Jump to Home</span>
                    <kbd className="px-2 py-0.5 rounded bg-white font-mono text-[10px] shadow-2xs border">H</kbd>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F5F3F6] flex items-center justify-between">
                    <span className="text-[#6E6E6E]">Jump to Technology</span>
                    <kbd className="px-2 py-0.5 rounded bg-white font-mono text-[10px] shadow-2xs border">T</kbd>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F5F3F6] flex items-center justify-between">
                    <span className="text-[#6E6E6E]">Jump to Service</span>
                    <kbd className="px-2 py-0.5 rounded bg-white font-mono text-[10px] shadow-2xs border">S</kbd>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F5F3F6] flex items-center justify-between">
                    <span className="text-[#6E6E6E]">Jump to Contact</span>
                    <kbd className="px-2 py-0.5 rounded bg-white font-mono text-[10px] shadow-2xs border">C</kbd>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-xs uppercase tracking-wider text-[#6E6E6E] mb-2.5 flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5" />
                  Motion & Accessibility
                </h4>
                <div className="p-3.5 rounded-2xl bg-[#F5F3F6] flex items-center justify-between">
                  <div>
                    <span className="font-medium block text-xs">Reduced Motion</span>
                    <span className="text-[11px] text-[#6E6E6E]">Disables GSAP pinned scrub & ribbon spins</span>
                  </div>
                  <button
                    type="button"
                    onClick={toggleReducedMotion}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      reducedMotionActive
                        ? 'bg-[#17151A] text-white'
                        : 'bg-white border border-black/10 text-[#17151A]'
                    }`}
                  >
                    {reducedMotionActive ? 'Enabled' : 'Disabled'}
                  </button>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-xs uppercase tracking-wider text-[#6E6E6E] mb-2.5 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Technical Architecture
                </h4>
                <p className="text-xs text-[#6E6E6E] leading-relaxed bg-[#F8F8F6] p-3 rounded-2xl border border-black/5">
                  Built with Next.js 14 App Router, Lenis Smooth Scroll, GSAP matchMedia ScrollTrigger, and full responsive layout.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-black/5 flex items-center justify-between">
              <span className="text-xs text-[#6E6E6E]">Direct line: hello@enigma.tech</span>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setIsHelpOpen(false)}
                className="rounded-full text-xs"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Account / Client Portal Modal */}
      {isAccountOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsAccountOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/10 text-[#17151A] relative animate-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-black/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FAFFDE] border border-[#DFE2C8] flex items-center justify-center text-[#17151A]">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg leading-tight">Enigma Client Portal</h3>
                  <p className="text-xs text-[#6E6E6E]">Active enterprise workspace demo</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsAccountOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/5 text-[#6E6E6E] hover:text-[#17151A] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-5 space-y-4 text-sm">
              <div className="p-4 rounded-2xl bg-[#F5F3F6] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#17151A] text-white flex items-center justify-center font-medium text-sm">
                    EN
                  </div>
                  <div>
                    <span className="font-medium block text-sm">Enigma Enterprise Partner</span>
                    <span className="text-xs text-[#6E6E6E]">client-demo@enigma.tech</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-[#FAFFDE] border border-[#DFE2C8] font-medium text-[#17151A]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>

              <div>
                <label className="font-medium text-xs uppercase tracking-wider text-[#6E6E6E] mb-2 block">
                  Select Workspace View
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Enterprise', 'Partner', 'Guest'] as const).map(role => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setUserRole(role)}
                      className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                        userRole === role
                          ? 'bg-[#17151A] text-white border-[#17151A]'
                          : 'bg-white border-black/10 text-[#6E6E6E] hover:text-[#17151A]'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-2xl bg-[#F8F8F6] border border-black/5">
                  <span className="text-[11px] text-[#6E6E6E] block mb-1">Active Pipeline</span>
                  <span className="text-sm font-medium text-[#17151A] flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    3 Models Live
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-[#F8F8F6] border border-black/5">
                  <span className="text-[11px] text-[#6E6E6E] block mb-1">API SLA Status</span>
                  <span className="text-sm font-medium text-[#17151A] flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    99.99% Uptime
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-black/5 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setIsAccountOpen(false);
                  scrollTo('#contact');
                }}
                className="text-xs text-[#17151A] font-medium hover:underline cursor-pointer"
              >
                Request Custom SSO
              </button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setIsAccountOpen(false)}
                className="rounded-full text-xs"
              >
                Done
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
