import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { SmoothScrollProvider } from '@/motion/SmoothScrollProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Sunext | Chuyển Đổi AI Doanh Nghiệp',
  description: 'Tư vấn và triển khai chuyển đổi AI trên bài toán thật cho doanh nghiệp Việt Nam. Nghiệm thu theo kết quả vận hành và kinh doanh.',
};

import { CookieConsent } from '@/components/CookieConsent';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className="font-sans min-h-screen bg-white text-[#111111] antialiased">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
