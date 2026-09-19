import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Khung Đầu Tư & Ngân Sách Dự Án Chuyển Đổi AI | Sunext Enigma',
  description:
    'Khung ngân sách tham khảo minh bạch theo quy mô: AI Pilot (4-6 tuần), Department OS (8-12 tuần), Enterprise Transformation theo khung Sunext Rewired™.',
  openGraph: {
    title: 'Khung Đầu Tư & Ngân Sách Dự Án Chuyển Đổi AI | Sunext Enigma',
    description:
      'Khung ngân sách tham khảo minh bạch theo quy mô: AI Pilot (4-6 tuần), Department OS (8-12 tuần), Enterprise Transformation theo khung Sunext Rewired™.',
  },
};

export default function InvestmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
