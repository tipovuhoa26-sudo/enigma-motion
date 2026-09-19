export interface InvestmentTier {
  id: string;
  name: string;
  badge: string;
  subtitle: string;
  recommendedFor: string;
  timeToValue: string;
  deliverables: {
    category: string;
    items: string[];
  }[];
  measurableOutcomes: string[];
  scope: string;
  supportLevel: string;
}

export const INVESTMENT_TIERS: InvestmentTier[] = [
  {
    id: 'pilot',
    name: 'Gói 1: AI Pilot & Quick Wins',
    badge: 'Khởi Điểm Tối Ưu',
    subtitle: 'Chứng minh ROI định lượng trong 4-6 tuần với 1 use case trọng điểm trước khi đầu tư mở rộng.',
    recommendedFor: 'Doanh nghiệp muốn kiểm chứng hiệu quả thực tế của AI trên bài toán đau đầu nhất mà không cần giải ngân ngân sách lớn.',
    timeToValue: '4 – 6 tuần',
    scope: '1 use case trọng điểm (HR Tuyển dụng, B2B Content Factory, hoặc Tự động hóa Báo cáo)',
    supportLevel: 'Đồng hành chuyên gia 1-on-1 trong 60 ngày',
    deliverables: [
      {
        category: '1. Khảo sát & Đóng gói Use Case',
        items: [
          'Đánh giá hiện trạng quy trình và định vị chính xác điểm nghẽn chi phí',
          'Thiết kế giải pháp AI Agent hoặc Automation Pipeline giải đúng use case đã chọn',
          'Xây dựng bộ tài liệu SOP chuẩn để nhân sự sử dụng ngay',
        ],
      },
      {
        category: '2. Đào tạo Năng lực (Tầng 1 & 2)',
        items: [
          'Khóa đào tạo Foundation (Xóa mù AI & Tiêu chuẩn Prompting) cho đội ngũ liên quan',
          'Thực hành trực tiếp trên dữ liệu và bài toán thực tế của công ty',
        ],
      },
      {
        category: '3. Đo lường & Nghiệm thu',
        items: [
          'Thiết lập bảng theo dõi chỉ số ROI (giờ công tiết kiệm, chi phí giảm thiểu)',
          'Báo cáo tổng kết và đề xuất lộ trình mở rộng nếu hiệu quả vượt kỳ vọng',
        ],
      },
    ],
    measurableOutcomes: [
      'Giảm ≥ 60% thời gian xử lý thủ công cho use case mục tiêu',
      'Đội ngũ nòng cốt làm chủ công cụ và tự vận hành 100%',
      'Hoàn vốn đầu tư (Payback Period) dự kiến trong 2-3 tháng',
    ],
  },
  {
    id: 'department',
    name: 'Gói 2: Department AI Operating System',
    badge: 'Phổ Biến Nhất',
    subtitle: 'Thiết lập hệ điều hành AI toàn diện cho 1 phòng ban mũi nhọn (Marketing, Sales, HR, hoặc Vận hành).',
    recommendedFor: 'Doanh nghiệp 50 - 300 nhân sự muốn giải phóng sức lao động của một bộ phận then chốt và tạo đòn bẩy tăng trưởng 3x-5x.',
    timeToValue: '8 – 12 tuần',
    scope: 'Toàn bộ quy trình của 1 phòng ban + tích hợp 2-3 AI Agents vào hệ thống hiện tại',
    supportLevel: 'Cố vấn chuyên sâu 90 ngày + Giám sát kỹ thuật 24/7',
    deliverables: [
      {
        category: '1. Tái cấu trúc Quy trình (Operating Model)',
        items: [
          'Xóa bỏ các bước trung gian thừa thãi, thiết kế lại luồng công việc theo nguyên tắc Human-in-the-loop',
          'Cấu trúc hóa toàn bộ kho tri thức phòng ban (Knowledge Base) cho AI truy xuất',
        ],
      },
      {
        category: '2. Engineering & Tích hợp Hệ thống Lõi',
        items: [
          'Kết nối 2 chiều với hệ thống ERP, CRM, ATS hoặc cơ sở dữ liệu hiện có qua API bảo mật',
          'Triển khai cụm Agentic Workflow tự động thực thi chuỗi tác vụ phức tạp',
        ],
      },
      {
        category: '3. Đào tạo Nâng tầng Năng lực (Tầng 1 ➔ 3)',
        items: [
          'Đào tạo toàn bộ nhân sự phòng ban đạt chuẩn ứng dụng hàng ngày',
          'Đào tạo chuyên sâu nhóm AI Champions để tự cấu hình prompt và quản trị luồng',
        ],
      },
    ],
    measurableOutcomes: [
      'Tăng gấp 2.5x - 4x năng suất tổng thể của phòng ban',
      'Loại bỏ hoàn toàn thao tác copy-paste dữ liệu giữa các phần mềm rời rạc',
      'Giảm thiểu tối đa phụ thuộc vào dịch vụ thuê ngoài đắt đỏ',
    ],
  },
  {
    id: 'enterprise',
    name: 'Gói 3: Enterprise AI Transformation',
    badge: 'Toàn Diện Khung Rewired',
    subtitle: 'Tái đấu nối toàn bộ tổ chức theo 6 Trụ cột Sunext Rewired™ với hạ tầng Private AI bảo mật cấp doanh nghiệp.',
    recommendedFor: 'Tập đoàn & Doanh nghiệp 200 - 1.000+ nhân sự cam kết xây dựng AI như lợi thế cạnh tranh cốt lõi dài hạn.',
    timeToValue: '4 – 6 tháng',
    scope: 'Toàn bộ doanh nghiệp đa phòng ban + Private LLM Infrastructure',
    supportLevel: 'Ban cố vấn chiến lược cấp C-level + Đội kỹ sư túc trực On-site/Dedicated',
    deliverables: [
      {
        category: '1. Chiến lược Số & Hội đồng Quản trị AI (Governance)',
        items: [
          'Xây dựng lộ trình tổng thể xếp hạng ưu tiên theo giá trị P&L từng quý',
          'Ban hành bộ khung chính sách bảo mật dữ liệu (Data Security Policy & NDA-first)',
        ],
      },
      {
        category: '2. Kiến trúc Dữ liệu & Private Model Mesh',
        items: [
          'Thiết lập Enterprise Vector Database & Single Source of Truth cho toàn công ty',
          'Triển khai cụm mô hình AI On-premise hoặc Private Cloud (Dữ liệu không bao giờ rời khỏi hệ thống)',
        ],
      },
      {
        category: '3. Chuyển giao Năng lực Toàn diện (Tầng 1 ➔ 5)',
        items: [
          'Phổ cập AI cho toàn bộ cán bộ công nhân viên (Tầng 1)',
          'Đào tạo nâng cao cho nhóm Kỹ sư & Quản đốc ca (Tầng 4 & 5: Computer Vision, Automation Pipeline)',
          'Chuyển giao 100% mã nguồn và quyền sở hữu trí tuệ hệ thống',
        ],
      },
    ],
    measurableOutcomes: [
      'Tiết kiệm 30% - 40% chi phí vận hành biến đổi toàn doanh nghiệp',
      'Bảo vệ 100% tài sản trí tuệ và bí mật kinh doanh không bị rò rỉ',
      'Định hình vị thế dẫn đầu thị trường về tốc độ phản ứng và chất lượng dịch vụ',
    ],
  },
];
