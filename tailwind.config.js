/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/motion/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#6B21A8',
          'purple-accent': '#8B5CF6',
          orange: '#F97316',
          'orange-hover': '#EA580C',
        },
        canvas: {
          primary: '#FFFFFF',
          secondary: '#F7F7F8',
          dark: '#111111',
          'subtle-purple': '#FAF8FC',
        },
        surface: {
          base: '#FFFFFF',
          pill: '#F7F7F8',
        },
        accent: {
          lime: {
            100: '#FAFFDE',
            200: '#DFE2C8',
          },
        },
        ink: {
          900: '#111111',
          800: '#1C1C1E',
        },
        muted: '#626262',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        full: '9999px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
