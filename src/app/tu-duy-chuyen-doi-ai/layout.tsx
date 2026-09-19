import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vì sao 70% doanh nghiệp chuyển đổi AI thất bại — Khung Rewired McKinsey',
  description:
    '70% dự án AI thất bại không phải vì công nghệ dở. McKinsey chỉ ra 6 lý do thật. Đây là 6 lý do đó — và cách Sunext giải từng cái.',
  openGraph: {
    title: 'Vì sao 70% doanh nghiệp chuyển đổi AI thất bại — Khung Rewired McKinsey',
    description:
      '70% dự án AI thất bại không phải vì công nghệ dở. McKinsey chỉ ra 6 lý do thật. Đây là 6 lý do đó — và cách Sunext giải từng cái.',
  },
};

export default function AiTransformationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
