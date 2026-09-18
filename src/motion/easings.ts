// motion/easings.ts per 05_MOTION_DESIGN_SYSTEM.md
export const ease = {
  standard: 'power2.out',
  enter: 'cubic-bezier(0.22, 1, 0.36, 1)',
  exit: 'power1.in',
  editorial: 'cubic-bezier(0.65, 0, 0.35, 1)',
  spring: 'back.out(1.4)',
} as const;
