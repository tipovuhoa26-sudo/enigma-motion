// motion/durations.ts (GSAP uses seconds, not ms per 05_MOTION_DESIGN_SYSTEM.md)
export const duration = {
  xs: 0.15,
  sm: 0.3,
  md: 0.6,
  lg: 0.9,
  xl: 1.4,
} as const;

export const stagger = {
  tight: 0.06,
  normal: 0.08,
  loose: 0.15,
} as const;
