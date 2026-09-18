'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/Button';
import { createHeroTimeline } from '@/motion/timelines/hero';

interface HeroProps {
  autoPlayIntro?: boolean;
}

export function Hero({ autoPlayIntro = true }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const exploreWidgetRef = useRef<HTMLDivElement>(null);
  const statCardRef = useRef<HTMLDivElement>(null);
  const statCounterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoPlayIntro) return;

    const dockItems = Array.from(document.querySelectorAll('[data-hero-dock] [data-dock-item]')) as HTMLElement[];
    const navBar = document.querySelector('[data-hero-nav]') as HTMLElement | null;
    const ctas = ctaGroupRef.current ? Array.from(ctaGroupRef.current.children) as HTMLElement[] : [];
    const headlineLines = [headlineLine1Ref.current, headlineLine2Ref.current].filter((el): el is HTMLSpanElement => el !== null);

    const tl = createHeroTimeline({
      dockItems,
      navBar,
      ctas,
      headlineLines,
      visual: visualRef.current,
      exploreWidget: exploreWidgetRef.current,
      statCard: statCardRef.current,
      statCounterValue: statCounterRef.current,
    });

    // Visibility gate for video (MOT-008: pause when offscreen or hidden)
    const handleVisibility = () => {
      if (document.hidden) {
        videoRef.current?.pause();
      } else {
        videoRef.current?.play().catch(() => {});
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    let observer: IntersectionObserver | null = null;
    if (containerRef.current && videoRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              videoRef.current?.play().catch(() => {});
            } else {
              videoRef.current?.pause();
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
    }

    return () => {
      tl.kill();
      document.removeEventListener('visibilitychange', handleVisibility);
      observer?.disconnect();
    };
  }, [autoPlayIntro]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full min-h-[calc(100vh-80px)] px-6 md:px-12 lg:px-20 pt-6 pb-16 flex flex-col justify-between overflow-hidden"
      data-motion="hero"
    >
      <span id="top" className="absolute top-0 left-0 w-0 h-0 opacity-0 pointer-events-none" aria-hidden="true" />
      <span id="overview" className="absolute top-0 left-0 w-0 h-0 opacity-0 pointer-events-none" aria-hidden="true" />

      {/* Top Tertiary Caption (Top Right) */}
      <div className="w-full flex justify-end mb-4 md:mb-0">
        <p className="text-right text-xs md:text-sm text-[#6E6E6E] max-w-[200px] leading-snug font-normal">
          Advantages Delivered, Promises Kept: Your Ongoing Success.
        </p>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto relative">
        
        {/* Left Column: CTAs -> Headline -> Widgets */}
        <div className="lg:col-span-7 flex flex-col z-10">
          {/* CTAs */}
          <div ref={ctaGroupRef} className="flex items-center gap-3 mb-6" data-hero-cta>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector('#contact') || document.querySelector('#schedule');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', '#contact');
              }}
            >
              <Button variant="lime" size="md" className="rounded-full font-semibold shadow-xs cursor-pointer">
                Get Started
              </Button>
            </a>
            <a
              href="#advantage"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector('#advantage') || document.querySelector('#technology');
                if (el) {
                  const target = el.closest('.pin-spacer') || el;
                  target.scrollIntoView({ behavior: 'smooth' });
                }
                window.history.pushState(null, '', '#advantage');
              }}
            >
              <Button variant="outline" size="md" className="rounded-full bg-white/40 backdrop-blur-xs font-medium cursor-pointer">
                Explore
              </Button>
            </a>
          </div>

          {/* H1 Headline: Pre-split lines for SEO & smooth blur entrance */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light tracking-tight text-[#17151A] leading-[1.08] mb-10 max-w-[680px]"
            data-hero-headline
          >
            <span ref={headlineLine1Ref} className="line block font-normal">
              AI Powered Tech Solutions
            </span>
            <span ref={headlineLine2Ref} className="line block font-light text-[#17151A]/85">
              For Your Business
            </span>
          </h1>

          {/* Floating Bottom Widgets */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            {/* Widget 1: Explore Your Data */}
            <div
              ref={exploreWidgetRef}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-black/5 shadow-sm flex flex-col gap-3 min-w-[150px] transition-transform hover:scale-[1.02]"
              data-hero-widget-explore
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-medium text-[#17151A] leading-tight">
                  Explore<br />Your Data
                </span>
                <div className="w-6 h-6 rounded-full bg-[#17151A] text-white flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="flex items-end gap-1.5 h-6 pt-1">
                <div className="w-1.5 h-3 bg-[#17151A] rounded-full" />
                <div className="w-1.5 h-5 bg-[#17151A] rounded-full" />
                <div className="w-1.5 h-2 bg-[#17151A] rounded-full" />
                <div className="w-1.5 h-6 bg-[#17151A] rounded-full" />
                <div className="w-1.5 h-4 bg-[#17151A] rounded-full" />
              </div>
            </div>

            {/* Widget 2: 3D Product thumbnail preview */}
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-black/5 shadow-sm bg-[#FAFFDE] group cursor-pointer">
              <Image
                src="/assets/card-product-1.jpg"
                alt="Product preview"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="80px"
              />
              <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-[#17151A] text-white flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Centerpiece 3D Ambient Visual + Stat Card */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[340px] md:min-h-[460px]">
          {/* Ambient Video Visual */}
          <div
            ref={visualRef}
            className="w-full max-w-[460px] aspect-square relative rounded-full overflow-hidden flex items-center justify-center [mask-image:radial-gradient(circle_at_center,black_62%,transparent_98%)]"
            data-hero-visual
          >
            <video
              ref={videoRef}
              src="/assets/hero-visual.mp4"
              poster="/assets/hero-poster.jpg"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover mix-blend-multiply pointer-events-none select-none drop-shadow-md"
            />
          </div>

          {/* Floating Stat Card Widget */}
          <div
            ref={statCardRef}
            className="absolute bottom-0 right-0 sm:right-4 bg-[#FAFFDE] rounded-2xl p-5 border border-[#DFE2C8] shadow-md flex flex-col justify-between w-[180px] sm:w-[200px] z-20"
            data-hero-widget-stat
          >
            <div className="flex items-center justify-between text-xs font-medium text-[#17151A]">
              <span>Increased<br />Revenue</span>
              <div className="w-6 h-6 rounded-full bg-white/70 flex items-center justify-center">
                <TrendingUp className="w-3.5 h-3.5 text-[#17151A]" />
              </div>
            </div>

            <div
              ref={statCounterRef}
              className="text-4xl font-normal text-[#17151A] tracking-tight my-3 tabular-nums"
              data-hero-widget-stat-value
            >
              0%
            </div>

            {/* 3-dot pagination synced to Advantage section */}
            <div className="flex items-center gap-1.5 pt-1 border-t border-black/5 text-[10px] text-[#6E6E6E]">
              <span className="w-5 h-5 rounded-full bg-white/80 flex items-center justify-center text-[#17151A]">01</span>
              <span className="w-5 h-5 rounded-full bg-[#17151A] text-white flex items-center justify-center font-medium">02</span>
              <span className="w-5 h-5 rounded-full bg-white/80 flex items-center justify-center text-[#17151A]">03</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom subtle interview link */}
      <div className="hidden sm:flex items-center gap-2 pt-6 text-xs text-[#6E6E6E]">
        <div className="w-6 h-6 rounded-full overflow-hidden bg-black/10 relative">
          <Image src="/assets/case-3.jpg" alt="Interview avatar" fill className="object-cover" />
        </div>
        <span className="hover:text-[#17151A] cursor-pointer transition-colors">Read The Interview</span>
      </div>
    </section>
  );
}
