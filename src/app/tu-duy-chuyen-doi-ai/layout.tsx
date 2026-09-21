import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Phương Pháp Luận Chuyển Đổi AI Doanh Nghiệp — Sunext Method',
  description:
    'Vì sao phần lớn chương trình chuyển đổi không đạt kỳ vọng nếu thiếu tái cấu trúc con người & quy trình. Khung 6 trụ cột đánh giá năng lực AI doanh nghiệp.',
  openGraph: {
    title: 'Phương Pháp Luận Chuyển Đổi AI Doanh Nghiệp — Sunext Method',
    description:
      'Vì sao phần lớn chương trình chuyển đổi không đạt kỳ vọng nếu thiếu tái cấu trúc con người & quy trình. Khung 6 trụ cột đánh giá năng lực AI doanh nghiệp.',
  },
};

export default function AiTransformationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
