import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giải Pháp Chuyển Đổi AI Theo Ngành Kinh Tế | Sunext',
  description:
    'Bộ giải pháp AI chuyên biệt cho Bán lẻ & FMCG, Sản xuất & Chế tạo, Dịch vụ B2B theo phương pháp luận Sunext Rewired.',
  openGraph: {
    title: 'Giải Pháp Chuyển Đổi AI Theo Ngành Kinh Tế | Sunext',
    description:
      'Bộ giải pháp AI chuyên biệt cho Bán lẻ & FMCG, Sản xuất & Chế tạo, Dịch vụ B2B theo phương pháp luận Sunext Rewired.',
  },
};

export default function IndustryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
