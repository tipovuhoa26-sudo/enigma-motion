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
  title: 'Sunext — Khung Năng Lực Chuyển Đổi AI Toàn Trình (Sunext Rewired)',
  description: 'Tư vấn chiến lược và hiện thực hóa chuyển đổi AI thực chiến cho doanh nghiệp Việt Nam. Tái cấu trúc mô hình vận hành, tích hợp dữ liệu sống và nghiệm thu theo kết quả kinh doanh đo lường được.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className="font-sans min-h-screen bg-[#E6E6E4] text-[#17151A] antialiased">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
