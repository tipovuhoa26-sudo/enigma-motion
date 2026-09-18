'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'lime';
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
    primary: 'bg-[#17151A] text-white hover:bg-[#2A272D] active:scale-[0.98]',
    secondary: 'bg-[#F5F3F6] text-[#17151A] hover:bg-[#EAE7EC] active:scale-[0.98]',
    outline: 'border border-[#17151A]/20 text-[#17151A] hover:bg-black/5 active:scale-[0.98]',
    lime: 'bg-[#FAFFDE] text-[#17151A] border border-[#DFE2C8] hover:bg-[#F3FAC5] active:scale-[0.98]',
  };

  const sizeStyles = {
    sm: 'px-4 py-1.5 text-xs font-medium',
    md: 'px-5 py-2.5 text-sm font-medium',
    lg: 'px-7 py-3 text-base font-semibold',
  };

  return (
    <button
      className={cn(
        'rounded-full inline-flex items-center justify-center gap-2 transition-transform duration-150 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17151A]',
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
