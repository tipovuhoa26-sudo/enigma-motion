export const BREAKPOINTS = {
  desktop: '(min-width: 1440px)',
  laptop: '(min-width: 1024px) and (max-width: 1439px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  mobile: '(max-width: 767px)',
  desktopAndLaptop: '(min-width: 1024px)',
  mobileAndTablet: '(max-width: 1023px)',
} as const;

export const matchMediaConditions = {
  isDesktop: BREAKPOINTS.desktop,
  isLaptop: BREAKPOINTS.laptop,
  isTablet: BREAKPOINTS.tablet,
  isMobile: BREAKPOINTS.mobile,
  canPin: BREAKPOINTS.desktopAndLaptop,
} as const;
