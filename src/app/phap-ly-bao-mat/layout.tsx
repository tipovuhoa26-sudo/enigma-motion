import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Khung Pháp Lý, An Toàn Thông Tin & Quản Trị Vận Hành | Sunext',
  description:
    'Cam kết pháp lý minh bạch cho Buying Committee, CISO & Legal: Phân định quyền sở hữu trí tuệ 100% cho khách hàng, thỏa thuận DPA, 4 tầng an toàn dữ liệu, 4 Stage-Gates và chính sách bảo hành SLA.',
};

export default function LegalSecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
