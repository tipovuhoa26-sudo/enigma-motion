import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giải Pháp Chuyển Đổi AI Theo Ngành Kinh Tế | Sunext Enigma',
  description:
    'Bộ giải pháp AI chuyên biệt theo đặc thù ngành tại Việt Nam: Bán lẻ & Hàng tiêu dùng, Sản xuất cơ khí chính xác, và Dịch vụ doanh nghiệp B2B.',
  openGraph: {
    title: 'Giải Pháp Chuyển Đổi AI Theo Ngành Kinh Tế | Sunext Enigma',
    description:
      'Bộ giải pháp AI chuyên biệt theo đặc thù ngành tại Việt Nam: Bán lẻ & Hàng tiêu dùng, Sản xuất cơ khí chính xác, và Dịch vụ doanh nghiệp B2B.',
  },
};

export default function IndustryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
