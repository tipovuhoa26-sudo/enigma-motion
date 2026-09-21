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
    primary: 'bg-[#0A0A0A] text-white hover:bg-[#202020] shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
    // Clean Secondary Canvas
    secondary: 'bg-[#F9F9F8] text-[#0A0A0A] border border-[#E7E7E5] hover:bg-[#EFEFEF] hover:border-[#D1D1CE] active:scale-[0.98]',
    // Minimal Outline
    outline: 'border border-[#E7E7E5] bg-white text-[#0A0A0A] hover:border-[#0A0A0A] hover:bg-[#F9F9F8] active:scale-[0.98]',
    // Tech Purple Variant
    purple: 'bg-[#581C87] text-white hover:bg-[#4A1570] shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]',
    // Backward Compatibility Lime
    lime: 'bg-[#FAFFDE] text-[#0A0A0A] border border-[#DFE2C8] hover:bg-[#F3FAC5] active:scale-[0.98]',
  };

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs font-medium',
    md: 'px-5 py-2.5 text-sm font-medium',
    lg: 'px-6 py-3 text-base font-medium',
  };

  return (
    <button
      className={cn(
        'rounded-xl inline-flex items-center justify-center gap-2 transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97316]',
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
