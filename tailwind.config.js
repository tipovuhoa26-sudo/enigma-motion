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
        surface: {
          base: '#F8F8F6',
          pill: '#F5F3F6',
        },
        accent: {
          lime: {
            100: '#FAFFDE',
            200: '#DFE2C8',
          },
        },
        ink: {
          900: '#17151A',
          800: '#1E1C1E',
        },
        muted: '#6E6E6E',
      },
      borderRadius: {
        sm: '12px',
        md: '16px',
        lg: '24px',
        xl: '28px',
        full: '9999px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
