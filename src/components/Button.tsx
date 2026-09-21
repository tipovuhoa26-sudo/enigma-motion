'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'lime' | 'orange' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const variantStyles = {
    // Cloudflare-Style Orange Action CTA
    orange: 'bg-[#F97316] text-white hover:bg-[#EA580C] shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
    // Near Black Enterprise Primary
    primary: 'bg-[#111111] text-white hover:bg-[#252528] shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
    // Clean Secondary Canvas
    secondary: 'bg-[#F7F7F8] text-[#111111] border border-[#E8E8E8] hover:bg-[#EFEFEF] hover:border-[#D5D5D5] active:scale-[0.98]',
    // Minimal Outline
    outline: 'border border-[#E8E8E8] bg-white text-[#111111] hover:border-[#6B21A8]/40 hover:bg-[#FAF8FC] active:scale-[0.98]',
    // Tech Purple Variant
    purple: 'bg-[#6B21A8] text-white hover:bg-[#581C87] shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]',
    // Backward Compatibility Lime
    lime: 'bg-[#FAFFDE] text-[#111111] border border-[#DFE2C8] hover:bg-[#F3FAC5] active:scale-[0.98]',
  };

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs font-medium',
    md: 'px-5 py-2.5 text-sm font-medium',
    lg: 'px-7 py-3 text-base font-medium',
  };

  return (
    <button
      className={cn(
        'rounded-full inline-flex items-center justify-center gap-2 transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97316]',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
