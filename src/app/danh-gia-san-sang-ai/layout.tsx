import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Đo lường mức độ sẵn sàng AI — Khung Chẩn Đoán 6 Trụ Cột Sunext Method | Sunext',
  description:
    'Đừng mua công cụ AI trước khi biết doanh nghiệp mình đang ở đâu. Đây là lý do đo lường mức độ sẵn sàng AI phải là bước đầu tiên, không phải bước cuối.',
  openGraph: {
    title: 'Đo lường mức độ sẵn sàng AI — Khung Chẩn Đoán 6 Trụ Cột Sunext Method | Sunext',
    description:
      'Đừng mua công cụ AI trước khi biết doanh nghiệp mình đang ở đâu. Đây là lý do đo lường mức độ sẵn sàng AI phải là bước đầu tiên, không phải bước cuối.',
  },
};

export default function AssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
