import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giải Pháp AI May Đo Theo Đặc Thù Ngành | Sunext',
  description:
    'Bộ giải pháp AI chuyên biệt cho Bán lẻ & FMCG, Sản xuất & Chế tạo, Dịch vụ B2B theo Phương Pháp Luận Sunext.',
  openGraph: {
    title: 'Giải Pháp AI May Đo Theo Đặc Thù Ngành | Sunext',
    description:
      'Bộ giải pháp AI chuyên biệt cho Bán lẻ & FMCG, Sản xuất & Chế tạo, Dịch vụ B2B theo Phương Pháp Luận Sunext.',
  },
};

export default function IndustryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
