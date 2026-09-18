'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { PhoneCall, ArrowUpRight, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/Button';

export function CtaFooter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 px-6 md:px-12 flex flex-col items-center justify-center bg-[#F5F3F6] rounded-3xl my-8 text-center border border-black/5 shadow-xs"
      data-cta-footer
    >
      <span id="schedule" className="absolute top-0 left-0 w-0 h-0 opacity-0 pointer-events-none" aria-hidden="true" />
      
      <div
        className={`flex flex-col items-center gap-6 max-w-2xl transition-all duration-700 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Top Eyebrow Tag */}
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-black/5 text-xs font-medium text-[#17151A] shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Start Your Transformation</span>
        </span>

        {/* Main Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#17151A] leading-[1.1]">
          Let&apos;s Get<br />In Touch
        </h2>

        {/* Big circular contact button */}
        <Link href="mailto:hello@enigma.tech" className="group cursor-pointer my-2" aria-label="Email Enigma">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-lg border border-black/5 flex items-center justify-center text-[#17151A] group-hover:scale-110 group-hover:bg-[#FAFFDE] group-hover:border-[#DFE2C8] transition-all duration-300">
            <PhoneCall className="w-7 h-7 sm:w-9 sm:h-9 group-hover:rotate-12 transition-transform" />
          </div>
        </Link>

        {/* Explanatory Copy */}
        <p className="text-sm md:text-base text-[#6E6E6E] max-w-md leading-relaxed">
          Ready to scale your business with autonomous intelligence? Speak directly with our founding engineering lead today.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <a href="mailto:hello@enigma.tech">
            <Button variant="primary" size="lg" className="rounded-full shadow-sm text-sm cursor-pointer">
              <span>Schedule Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </a>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent('open-account'))}
            className="cursor-pointer"
          >
            <Button variant="outline" size="lg" className="rounded-full bg-white font-medium text-sm">
              <Mail className="w-4 h-4 mr-2" />
              <span>Client Portal Demo</span>
            </Button>
          </button>
        </div>

        {/* Trust Badges bottom */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs text-[#6E6E6E] font-medium border-t border-black/5 w-full mt-4">
          <span>Average response: &lt; 2 hours</span>
          <span>Direct: hello@enigma.tech</span>
          <span>Offices: San Francisco · Tokyo · Zurich</span>
        </div>
      </div>
    </section>
  );
}
