import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Khung Đầu Tư & Ngân Sách Dự Án Chuyển Đổi AI | Sunext',
  description: 'Khung ngân sách tham khảo, 3 gói đầu tư minh bạch và công cụ tính toán giờ công tiết kiệm (ROI) cho doanh nghiệp chuyển đổi AI.',
  openGraph: {
    title: 'Khung Đầu Tư & Ngân Sách Dự Án Chuyển Đổi AI | Sunext',
    description:
      'Khung ngân sách tham khảo minh bạch theo quy mô: AI Pilot (4-6 tuần), Department OS (8-12 tuần), Enterprise Transformation theo Phương Pháp Luận Sunext.',
  },
};

export default function InvestmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
