export const HEALTHCARE_CLINICAL_BOUNDARY_NOTICE = {
  title: 'Ranh Giới Đạo Đức & Pháp Lý Bắt Buộc (Non-negotiable Clinical Boundary)',
  body: 'AI TUYỆT ĐỐI KHÔNG ĐƯA RA QUYẾT ĐỊNH LÂM SÀNG (No Clinical Decision Making), không chẩn đoán bệnh tật, không gợi ý phác đồ điều trị, không kê đơn hay cảnh báo thuốc thay thế bác sĩ/dược sĩ, và không tự động phân loại chuyên khoa từ triệu chứng lâm sàng. AI chỉ đóng vai trò trợ lý thu thập thông tin hành chính của bệnh nhân và hỗ trợ tìm kiếm tài liệu phác đồ của Bộ Y tế / Bệnh viện đã được Hội đồng Y khoa phê duyệt nạp vào hệ thống; toàn bộ kết quả chỉ mang tính tham khảo; Bác sĩ và Hội đồng Y khoa luôn là người giữ quyền quyết định chuyên môn và trách nhiệm pháp lý (Doctor-in-the-loop bắt buộc). Dữ liệu bệnh án được lưu trữ trong phân vùng cơ sở dữ liệu biệt lập (Dedicated Tenant Tier 2 hoặc On-Premise Air-gapped Tier 3B), tuân thủ Nghị định 13/2023/NĐ-CP và quy chế hồ sơ bệnh án.',
};

export const FINANCE_COMPLIANCE_NOTICE = {
  title: 'Quy Chuẩn Tuân Thủ Ngành Tài Chính, Chứng Khoán & Đầu Tư',
  body: 'Hệ thống được thiết kế hỗ trợ tuân thủ các quy định về kế toán, kiểm toán và quản trị rủi ro tài chính của cơ quan quản lý. Ba nguyên tắc công nghệ bắt buộc: (1) Source Traceability: 100% con số trích xuất từ báo cáo tài chính phải gắn nhãn số trang, bảng biểu và dòng thuyết minh tương ứng trong tài liệu gốc; (2) Audit Logging: Lưu vết toàn bộ lịch sử truy vấn, tham số prompt, phiên bản mô hình và phản hồi của hệ thống phục vụ thanh kiểm tra; (3) Financial Risk Gate: Tự động kích hoạt trạng thái dừng xử lý (No-Go) và cảnh báo tới chuyên viên tài chính nếu phát hiện sai lệch số học giữa Bảng cân đối và Báo cáo lưu chuyển tiền tệ.',
};

export interface IpDemarcationBlock {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  points: string[];
}

export const IP_DEMARCATION_BLOCKS: IpDemarcationBlock[] = [
  {
    id: 'client_owned',
    title: 'Tài Sản Bàn Giao Thuộc Sở Hữu Của Khách Hàng',
    subtitle: 'Client-Owned Work Product',
    badge: 'Khách Hàng Sở Hữu 100%',
    points: [
      'Toàn bộ mã nguồn tùy biến (Custom code, scripts, bespoke API middleware, pipeline orchestration).',
      'Toàn bộ thư viện Prompt Templates tùy biến, kịch bản tác nghiệp và tài liệu SOP vận hành chuẩn hóa cho từng phòng ban.',
      'Sơ đồ kiến trúc kỹ thuật chi tiết, tài liệu thiết kế hệ thống và cẩm nang vận hành (Runbooks).',
      'Toàn bộ cơ sở dữ liệu nội bộ, tài liệu nghiệp vụ, embeddings và tri thức trích xuất phát sinh trong quá trình triển khai.',
    ],
  },
  {
    id: 'sunext_preexisting',
    title: 'Tài Sản Sẵn Có & Thư Viện Dùng Chung Của Sunext',
    subtitle: 'Pre-Existing Assets & Scaffolding Tooling',
    badge: 'Perpetual Royalty-Free License',
    points: [
      'Đối với các bộ khung kiến trúc mẫu (Architectural scaffolding), thư viện mã nguồn dùng chung và giáo trình đào tạo chuẩn hóa do Sunext sở hữu từ trước:',
      'Sunext cấp cho khách hàng quyền sử dụng và chỉnh sửa vĩnh viễn, không hủy ngang, miễn phí bản quyền (perpetual, irrevocable, royalty-free license) đi kèm với giải pháp đã bàn giao để phục vụ mục đích vận hành nội bộ của doanh nghiệp.',
    ],
  },
  {
    id: 'third_party_oss',
    title: 'Nền Tảng Bên Thứ Ba & Mã Nguồn Mở',
    subtitle: 'Third-Party & Open Source Licensing',
    badge: 'Giấy Phép Mã Nguồn Mở Chuẩn',
    points: [
      'Các thành phần phần mềm mã nguồn mở được sử dụng (n8n, Python packages, LangChain, PostgreSQL/pgvector, open-source LLMs) tuân theo giấy phép mã nguồn mở quốc tế tương ứng (MIT, Apache 2.0).',
      'Khách hàng không phải chi trả bất kỳ khoản phí cấp phép sở hữu riêng (Proprietary License Fee) nào cho Sunext.',
    ],
  },
  {
    id: 'zero_lockin',
    title: 'Nguyên Tắc Không Tạo Rào Cản Phụ Thuộc',
    subtitle: 'Zero Vendor Lock-in Principle',
    badge: 'Cam Kết Mở 100%',
    points: [
      'Sunext cam kết không cài đặt bất kỳ mã độc quyền hoặc cơ chế kỹ thuật nào nhằm hạn chế quyền truy cập, chỉnh sửa hoặc chuyển giao của doanh nghiệp.',
      'Mã nguồn và cấu hình được bàn giao ở định dạng mở, có chú thích kỹ thuật rõ ràng để kỹ sư của doanh nghiệp hoặc đơn vị thứ ba có thể tiếp quản bảo trì.',
    ],
  },
];

export interface UatComparisonRow {
  aspect: string;
  gate3: string;
  gate4: string;
}

export const UAT_GATE3_VS_GATE4_COMPARISON: UatComparisonRow[] = [
  {
    aspect: 'Đối tượng nghiệm thu chính',
    gate3: 'Mã nguồn tùy biến, độ trễ và độ chính xác kỹ thuật của thuật toán / Agent / Pipeline',
    gate4: 'Bàn giao tài sản sở hữu trí tuệ, tài khoản dịch vụ, Runbook và năng lực tự chủ của nhân sự',
  },
  {
    aspect: 'Tiêu chuẩn đánh giá',
    gate3: 'Tập mẫu kiểm thử UAT Golden Test Set; ngưỡng dung sai kỹ thuật (Precision, Latency, Error Rate) trong SOW',
    gate4: 'Nhân sự đạt chuẩn Pass Mark sát hạch năng lực theo SOW; hoàn tất chuyển giao quyền sở hữu và tài khoản cloud',
  },
  {
    aspect: 'Trạng thái hệ thống',
    gate3: 'Chuyển từ "Chạy thử nghiệm có kiểm soát (Controlled Run)" sang "Vận hành Production chính thức"',
    gate4: 'Chuyển từ "Đồng hành chuyển giao" sang "Khách hàng tự chủ vận hành & Kích hoạt Bảo hành kỹ thuật"',
  },
  {
    aspect: 'Ý nghĩa giải ngân',
    gate3: 'Giải ngân mốc Gate 3 (20% - 30% giá trị hợp đồng tùy gói dịch vụ)',
    gate4: 'Giải ngân đợt cuối mốc Gate 4 (20% giá trị hợp đồng); kích hoạt bảo hành tiêu chuẩn 30 - 90 ngày',
  },
  {
    aspect: 'Chủ thể ký biên bản',
    gate3: 'Technical Lead + Business Product Owner phía khách hàng',
    gate4: 'Ban Chỉ Đạo Dự Án / Đại diện có thẩm quyền hợp đồng (Project Sponsor / CIO / CFO)',
  },
];

export interface WarrantyTier {
  packageId: string;
  packageName: string;
  duration: string;
  scope: string;
  standbyTerms: string;
}

export const WARRANTY_TIERS: WarrantyTier[] = [
  {
    packageId: 'pilot',
    packageName: 'Gói 1: AI Pilot & Quick Wins',
    duration: '30 ngày',
    scope: 'Bảo hành kỹ thuật tiêu chuẩn đối với các lỗi logic kỹ thuật phát sinh từ mã nguồn do Sunext thiết kế.',
    standbyTerms: 'Severity 1 phản hồi < 2 giờ làm việc. Cập nhật kết nối khi API SaaS thay đổi phiên bản nhỏ.',
  },
  {
    packageId: 'department',
    packageName: 'Gói 2: Department AI Operating System',
    duration: '60 ngày',
    scope: 'Bảo hành kỹ thuật trọn gói cho custom code, middleware và hiệu chỉnh định kỳ hiện tượng Prompt Drift.',
    standbyTerms: 'Severity 1-3. Giám sát độ chính xác truy vấn RAG phòng ban.',
  },
  {
    packageId: 'enterprise',
    packageName: 'Gói 3: Enterprise AI Transformation',
    duration: '90 ngày',
    scope: 'Bảo hành kỹ thuật trọn gói cho các thành phần custom code, middleware, Private Cloud và cấu hình agentic pipeline.',
    standbyTerms: 'Severity 1-3. Đội ngũ kỹ sư Standby on-site / remote. Hỗ trợ chuyển tiếp sang Managed Retainer SLA 99.5%.',
  },
];

export interface IncidentSlaRow {
  severity: string;
  definition: string;
  initialResponseSla: string;
  temporaryMitigationGoal: string;
}

export const INCIDENT_SLA_MATRIX: IncidentSlaRow[] = [
  {
    severity: 'Severity 1 (Khẩn cấp / Critical)',
    definition: 'Luồng tác vụ chính bị gián đoạn, ảnh hưởng trực tiếp đến hoạt động kinh doanh mà không có giải pháp thay thế tạm thời.',
    initialResponseSla: 'Trong vòng < 2 giờ làm việc',
    temporaryMitigationGoal: 'Trong vòng 8 - 12 giờ làm việc (kích hoạt kịch bản fallback dự phòng)',
  },
  {
    severity: 'Severity 2 (Nghiêm trọng / Major)',
    definition: 'Hệ thống vẫn hoạt động nhưng hiệu năng suy giảm nghiêm trọng, độ trễ kéo dài bất thường hoặc một module phụ bị lỗi.',
    initialResponseSla: 'Trong vòng 8 giờ làm việc',
    temporaryMitigationGoal: 'Trong vòng 24 giờ làm việc',
  },
  {
    severity: 'Severity 3 (Thông thường / Minor)',
    definition: 'Yêu cầu giải đáp thắc mắc vận hành, hướng dẫn cấu hình hoặc các đề xuất cải tiến nhỏ không ảnh hưởng tiến độ công việc.',
    initialResponseSla: 'Trong vòng 24 - 48 giờ làm việc',
    temporaryMitigationGoal: 'Xử lý theo kế hoạch cập nhật định kỳ',
  },
];

export const EXIT_TRANSITION_RIGHTS = {
  title: 'Quyền Rút Lui & Chuyển Giao Công Nghệ Tự Chủ (Exit & Transition Rights)',
  principles: [
    {
      title: 'Quyền tự chủ chuyển giao không rào cản',
      content: 'Sau khi ký biên bản nghiệm thu và hoàn thành giai đoạn đồng hành, khách hàng nắm toàn quyền sở hữu và quản trị đối với: (1) Tài khoản Cloud/SaaS và API keys; (2) Repository mã nguồn tùy biến; (3) Bộ cẩm nang runbook và tài liệu kiến trúc. Khách hàng có toàn quyền tiếp tục tự vận hành in-house, nâng cấp hệ thống, hoặc chuyển giao việc bảo trì cho bất kỳ đối tác công nghệ thứ ba nào mà không cần sự đồng ý hay chi trả thêm bất kỳ khoản phí chuyển nhượng nào cho Sunext.',
    },
    {
      title: 'Chính sách hỗ trợ chuyển giao (Handover Support)',
      content: 'Trong trường hợp khách hàng muốn chuyển giao sang đội ngũ kỹ thuật mới, Sunext cung cấp 01 phiên làm việc kỹ thuật (Technical Handover Walkthrough) bàn giao chi tiết cấu trúc code và quy trình vận hành cho đội ngũ tiếp quản.',
    },
    {
      title: 'Sao lưu, phục hồi dữ liệu & Tiêu hủy log',
      content: 'Thiết lập cơ chế sao lưu tự động (Automated Backup) cho cơ sở dữ liệu Vector DB và cấu hình luồng việc theo thỏa thuận RPO/RTO trong SOW. Toàn bộ log tác vụ kỹ thuật được lưu trữ trong môi trường kiểm soát của khách hàng; khi hợp đồng kết thúc hoặc theo yêu cầu bằng văn bản, Sunext cam kết hỗ trợ thanh lọc và tiêu hủy hoàn toàn các tệp tin lưu trữ tạm thời phục vụ dự án.',
    },
  ],
};
