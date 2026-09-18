export * from './durations';
export * from './easings';

export const motionTokens = {
  colors: {
    surfaceBase: '#F8F8F6',
    surfacePill: '#F5F3F6',
    lime100: '#FAFFDE',
    lime200: '#DFE2C8',
    ink900: '#17151A',
    ink800: '#1E1C1E',
    textMuted: '#6E6E6E',
    watermark: 'rgba(23, 21, 26, 0.08)',
  },
  radius: {
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '28px',
    full: '9999px',
  },
  spacing: {
    1: '8px',
    2: '16px',
    3: '24px',
    4: '32px',
    6: '48px',
    8: '64px',
    12: '96px',
  },
} as const;
