export type GateId = 'gate1' | 'gate2' | 'gate3' | 'gate4';

export interface StageGate {
  id: GateId;
  gateNumber: 1 | 2 | 3 | 4;
  name: string;
  phaseLabel: string;
  whatIsEvaluated: string[];
  passCondition: string;
  noGo: {
    condition: string;
    budgetTreatment: string;
    clientReceives: string[];
    proratedSettlement?: string;
  };
  signOff?: {
    documentName: string;
    natureOfAcceptance: string;
    prerequisite: string;
    systemStateAfter: string;
    signatoryRole: string;
    disbursementImpact: string;
  };
}

export const STAGE_GATES: StageGate[] = [
  {
    id: 'gate1',
    gateNumber: 1,
    name: 'Data & API Readiness Gate',
    phaseLabel: 'Pha 1: Khảo sát Hiện trạng & Lập Lộ trình (1 tuần)',
    whatIsEvaluated: [
      'Đánh giá độ sạch dữ liệu mẫu và tính toàn vẹn thông tin',
      'Xác thực tính tương thích của cổng kết nối API phần mềm hiện hữu',
      'Định lượng các điểm nghẽn độ trễ (Latency Audit)',
    ],
    passCondition: 'Dữ liệu mẫu và cổng API đáp ứng tối thiểu tiêu chuẩn kỹ thuật để xây dựng pipeline; hai bên ký duyệt phạm vi triển khai chi tiết (SOW).',
    noGo: {
      condition: 'Dữ liệu phân tán, chưa được số hóa/làm sạch hoặc hệ thống phần mềm đóng không hỗ trợ kết nối API.',
      budgetTreatment: 'Toàn bộ ngân sách dự toán cho các giai đoạn lập trình và triển khai tiếp theo được bảo toàn trọn vẹn, không bị giải ngân.',
      clientReceives: [
        'Hồ sơ Khảo sát Hiện trạng & Kế hoạch Làm Sạch Dữ Liệu (Data Readiness & Scoping Dossier)',
        'Khuyến nghị kỹ thuật nâng cấp hạ tầng phần mềm',
      ],
    },
    signOff: {
      documentName: 'Biên Bản Nghiệm Thu Khảo Sát & SOW Phê Duyệt',
      natureOfAcceptance: 'Phê duyệt phạm vi triển khai chi tiết và kiến trúc mục tiêu',
      prerequisite: 'Hoàn thành khảo sát dữ liệu và xác thực cổng kết nối API',
      systemStateAfter: 'Chuyển sang Pha 2 (Xây năng lực & Lập trình giải pháp)',
      signatoryRole: 'Project Sponsor / C-Level Sponsor phía khách hàng',
      disbursementImpact: 'Giải ngân mốc Gate 1 (15% - 20% giá trị hợp đồng)',
    },
  },
  {
    id: 'gate2',
    gateNumber: 2,
    name: 'Architecture & Security Gate',
    phaseLabel: 'Pha 2: Thẩm Định Kiến Trúc & An Toàn Thông Tin',
    whatIsEvaluated: [
      'Sơ đồ luồng dữ liệu hai chiều và ranh giới phân vùng an toàn (Tier 1/2/3A/3B)',
      'Thẩm định an toàn thông tin (Technical Due Diligence) bởi CISO/IT Lead',
      'Ký kết Thỏa thuận Xử lý Dữ liệu (DPA) và cam kết Không Sử Dụng Dữ Liệu Huấn Luyện (Zero Data Retention / ZDR)',
    ],
    passCondition: 'Kiến trúc bảo mật được bộ phận An ninh thông tin (CISO/IT) của khách hàng phê duyệt bằng văn bản.',
    noGo: {
      condition: 'Phát hiện nguy cơ rò rỉ dữ liệu hoặc kiến trúc không đáp ứng chuẩn tuân thủ bảo mật doanh nghiệp.',
      budgetTreatment: 'Dự án dừng lại để tái cấu trúc luồng dữ liệu; không phát sinh bất kỳ chi phí lập trình nào.',
      clientReceives: [
        'Bản Thiết Kế Kiến Trúc & Báo Cáo Thẩm Định An Toàn Thông Tin (Security Architecture Blueprint)',
        'Bản đồ phân vùng dữ liệu và khuyến nghị rào chắn an ninh mạng',
      ],
    },
    signOff: {
      documentName: 'Biên Bản Phê Duyệt Thiết Kế Kiến Trúc & DPA',
      natureOfAcceptance: 'Phê duyệt an toàn bảo mật trước khi viết custom code',
      prerequisite: 'CISO/IT Lead thẩm định đạt chuẩn Zero Data Retention và phân vùng',
      systemStateAfter: 'Giải ngân lập trình custom code, pipeline, RAG và đào tạo nhân sự',
      signatoryRole: 'CISO / Head of IT Security phía khách hàng',
      disbursementImpact: 'Giải ngân mốc Gate 2 (35% - 40% giá trị hợp đồng)',
    },
  },
  {
    id: 'gate3',
    gateNumber: 3,
    name: 'Controlled Run & UAT Benchmark Gate',
    phaseLabel: 'Pha 3: Vận Hành Thử Nghiệm Có Kiểm Soát (Controlled Run)',
    whatIsEvaluated: [
      'Đo lường dung sai kỹ thuật: Độ chính xác (Precision/Recall), Tỷ lệ loại nhầm (False Reject Rate), Độ trễ (Latency)',
      'Xử lý trường hợp ngoại lệ (Edge cases) và giám sát suy giảm chất lượng prompt (Prompt Drift)',
      'Kiểm thử nghiệm thu toàn hệ thống trên tập mẫu Golden Test Set',
    ],
    passCondition: 'Toàn bộ các module trong phạm vi SOW vượt qua ngưỡng dung sai kỹ thuật cam kết trong điều kiện vận hành thực tế.',
    noGo: {
      condition: 'Tỷ lệ sai lệch vượt ngưỡng dung sai cam kết sau tối đa 02 chu kỳ tinh chỉnh (tuning sprints) không tính phí.',
      budgetTreatment: 'Áp dụng quyền dừng hợp đồng với cơ chế thanh toán theo khối lượng thực tế (Prorated Settlement): Bảo toàn và hoàn trả 100% ngân sách Gate 4 chưa thực hiện; thanh toán chỉ tính trên các module đã hoàn tất.',
      clientReceives: [
        'Toàn bộ mã nguồn tùy biến đã lập trình (Git repository)',
        'Container image / deployment scripts',
        'Báo cáo UAT benchmark test log và Phân tích nguyên nhân sai số (Root Cause Analysis)',
        'Quyền sử dụng nội bộ vĩnh viễn (perpetual license), không phát sinh phí phạt',
      ],
      proratedSettlement: 'Hoàn trả 100% ngân sách Gate 4; quyết toán theo tỷ lệ nghiệm thu thực tế của Gate 2/Gate 3.',
    },
    signOff: {
      documentName: 'Biên Bản Nghiệm Thu Kỹ Thuật Toàn Hệ Thống & Phê Duyệt Production',
      natureOfAcceptance: 'Nghiệm thu chất lượng kỹ thuật của mã nguồn và thuật toán; chấp thuận đưa vào Production',
      prerequisite: 'Hệ thống vượt qua bài kiểm thử UAT Golden Set với dung sai cam kết',
      systemStateAfter: 'Chuyển từ "Chạy thử nghiệm có kiểm soát (Controlled Run)" sang "Vận hành Production chính thức"',
      signatoryRole: 'Technical Lead + Business Product Owner phía khách hàng',
      disbursementImpact: 'Giải ngân mốc Gate 3 (20% - 30% giá trị hợp đồng tùy gói)',
    },
  },
  {
    id: 'gate4',
    gateNumber: 4,
    name: 'Final Handover & Adoption Gate',
    phaseLabel: 'Pha 4: Chuyển Giao Quyền Sở Hữu & Tự Chủ Năng Lực',
    whatIsEvaluated: [
      'Bàn giao toàn bộ mã nguồn tùy biến, prompt templates và tài liệu SOP/Runbook',
      'Chuyển giao quyền quản trị tài khoản cloud/API đứng tên khách hàng',
      'Nhân sự nội bộ vượt qua bài sát hạch thực hành đạt chuẩn năng lực (Pass Mark) theo SOW',
      'Kích hoạt thời hạn bảo hành kỹ thuật tiêu chuẩn (30 - 90 ngày)',
    ],
    passCondition: 'Hoàn tất đủ 4 tiêu chí chuyển giao: Mã nguồn, Quản trị Cloud, Runbook và Sát hạch năng lực nhân sự nội bộ.',
    noGo: {
      condition: 'Nhân sự chỉ định chưa đạt tiêu chí sát hạch (Pass Mark).',
      budgetTreatment: 'Sunext kích hoạt đợt đào tạo bổ sung (tối đa 1 cohort phụ đạo trong 2-4 tuần theo phạm vi hỗ trợ đã ký) trước khi nghiệm thu lại.',
      clientReceives: [
        'Kế hoạch đào tạo bù và hỗ trợ 1-1 cho nhân sự chưa đạt',
        'Cẩm nang SOP tinh gọn để tự học',
      ],
    },
    signOff: {
      documentName: 'Biên Bản Nghiệm Thu Chuyển Giao Quyền Sở Hữu & Tự Chủ Năng Lực',
      natureOfAcceptance: 'Nghiệm thu chuyển giao tài sản IP, quyền quản trị tài nguyên và năng lực làm chủ của đội ngũ',
      prerequisite: 'Mã nguồn đã bàn giao, tài khoản đã chuyển giao, nhân sự đạt chuẩn Pass Mark',
      systemStateAfter: 'Chuyển từ "Đồng hành chuyển giao" sang "Khách hàng tự chủ vận hành & Kích hoạt Bảo hành kỹ thuật"',
      signatoryRole: 'Ban Chỉ Đạo Dự Án / Project Sponsor / CIO / CFO',
      disbursementImpact: 'Giải ngân đợt cuối mốc Gate 4 (20% giá trị hợp đồng); kích hoạt bảo hành 30-90 ngày',
    },
  },
];

export type DataTierId = 'tier1' | 'tier2' | 'tier3a' | 'tier3b';

export interface DataSecurityTier {
  id: DataTierId;
  label: string;
  scopeOfUse: string;
  processingMechanism: string;
  legalTechnicalCommitment: string;
}

export const DATA_SECURITY_TIERS: DataSecurityTier[] = [
  {
    id: 'tier1',
    label: 'Tầng 1: Dữ liệu công khai & Bán công khai',
    scopeOfUse: 'Thông tin sản phẩm, bài viết truyền thông, mô tả tuyển dụng, thông cáo báo chí, dữ liệu nghiên cứu thị trường công khai.',
    processingMechanism: 'Xử lý qua cổng Enterprise API thương mại tiêu chuẩn (OpenAI, Anthropic, Google Vertex AI) với cơ chế Enterprise Zero Data Retention (ZDR).',
    legalTechnicalCommitment: 'Cam kết bằng thỏa thuận pháp lý của nhà cung cấp nền tảng: Dữ liệu đầu vào và kết quả đầu ra TUYỆT ĐỐI KHÔNG bị sử dụng để tái huấn luyện mô hình nền tảng.',
  },
  {
    id: 'tier2',
    label: 'Tầng 2: Dữ liệu vận hành nội bộ & Phòng ban',
    scopeOfUse: 'Hồ sơ ứng viên (CV/ATS), email trao đổi nội bộ, tài liệu SOP nghiệp vụ, hợp đồng mẫu, báo cáo bán hàng, dữ liệu CRM tương tác khách hàng.',
    processingMechanism: 'Lưu trữ và tra cứu trên môi trường Vector Database chuyên biệt (Dedicated Tenant) đặt tại máy chủ đám mây của doanh nghiệp. Áp dụng kỹ thuật phân tầng dữ liệu (Data Masking/Anonymization) loại bỏ PII (Họ tên, CCCD, SĐT, Email cá nhân) trước khi chuyển qua API xử lý.',
    legalTechnicalCommitment: 'Mã hóa hai chiều: AES-256 ở trạng thái nghỉ (At-rest) và TLS 1.3 ở trạng thái truyền tải (In-transit). Phân quyền truy cập theo vai trò (RBAC) nghiêm ngặt.',
  },
  {
    id: 'tier3a',
    label: 'Tầng 3A: Dữ liệu mật, BCTC lõi & Lợi thế kinh doanh',
    scopeOfUse: 'Báo cáo tài chính chưa công bố, công thức giá, dữ liệu giao dịch nhạy cảm, thuật toán kinh doanh độc quyền, bí mật thương mại.',
    processingMechanism: 'Xử lý hoàn toàn trong hạ tầng đám mây riêng biệt (Private VPC trên AWS/GCP/Azure) hoặc Cụm máy chủ On-Premise do khách hàng sở hữu.',
    legalTechnicalCommitment: 'Cơ chế Zero Data Egress: Dữ liệu không bao giờ rời khỏi chu vi mạng nội bộ. Kích hoạt mô hình mã nguồn mở nội bộ (Open-source LLMs/Vision) tự host.',
  },
  {
    id: 'tier3b',
    label: 'Tầng 3B: Dữ liệu pháp lý tối mật / Cách ly vật lý',
    scopeOfUse: 'Dữ liệu y tế bệnh nhân, hồ sơ tài chính ngân hàng lõi, thông tin định danh cấp cao, dữ liệu an ninh quốc phòng.',
    processingMechanism: 'Vận hành trên môi trường mạng cách ly vật lý hoàn toàn (Air-gapped Network / On-Premise GPU Cluster). Không kết nối Internet ra bên ngoài.',
    legalTechnicalCommitment: 'Audit log bất biến lưu vết 100% truy vấn trên hệ thống lưu trữ phân tán. Ký Thỏa thuận Bảo Mật Toàn Diện (Enterprise DPA & NDA) đi kèm chế tài bồi thường.',
  },
];

export type PackageId = 'pilot' | 'department' | 'enterprise';

export interface DeliverySquadRole {
  id: string;
  roleTitle: string;
  responsibility: string;
  involvementByPackage: Record<PackageId, string>;
}

export const DELIVERY_SQUAD: DeliverySquadRole[] = [
  {
    id: 'caio_director',
    roleTitle: 'Engagement Lead / CAIO Director',
    responsibility: 'Quản trị bài toán P&L, điều phối 4 Stage-Gates, bảo trợ chiến lược C-Level và định hướng kiến trúc tổng thể.',
    involvementByPackage: {
      pilot: 'Cố vấn định hướng (Part-time)',
      department: 'Chủ trì định kỳ & Gate Sign-off (Part-time)',
      enterprise: 'Trực tiếp chỉ đạo ủy ban chuyển đổi (Dedicated)',
    },
  },
  {
    id: 'solution_architect',
    roleTitle: 'Lead AI Solution Architect',
    responsibility: 'Thiết kế kiến trúc kỹ thuật, mô hình an toàn dữ liệu 3 tầng, tuyển chọn mô hình nền tảng và kiểm soát rủi ro bảo mật.',
    involvementByPackage: {
      pilot: 'Thẩm định kiến trúc luồng việc',
      department: 'Trực tiếp thiết kế API & RAG Tenant',
      enterprise: 'Thiết kế Enterprise Mesh, Private Cloud & Security',
    },
  },
  {
    id: 'automation_engineer',
    roleTitle: 'Senior AI / Automation Engineer',
    responsibility: 'Lập trình custom code, pipeline orchestration, cấu hình Webhook/Task Queue, xử lý ngoại lệ và audit log.',
    involvementByPackage: {
      pilot: '1 Kỹ sư chuyên trách',
      department: '1 - 2 Kỹ sư chuyên trách',
      enterprise: '2 - 3 Kỹ sư chuyên trách On-site / Standby',
    },
  },
  {
    id: 'master_trainer',
    roleTitle: 'Domain Enablement Lead / Master Trainer',
    responsibility: 'Thiết kế chương trình đào tạo Thang 5 Tầng, huấn luyện AI Champions, chuẩn hóa SOP và giám sát sát hạch Pass Mark.',
    involvementByPackage: {
      pilot: 'Huấn luyện Tầng 1 - 2',
      department: 'Đào tạo Tầng 1 - 3 & Kèm cặp Champions',
      enterprise: 'Đào tạo Tầng 1 - 5 & Chuyển giao CoE',
    },
  },
  {
    id: 'qa_success_lead',
    roleTitle: 'Customer Success & QA Lead',
    responsibility: 'Giám sát kiểm thử UAT, đồng hành Controlled Run, theo dõi Prompt Drift và quản trị bảo hành kỹ thuật.',
    involvementByPackage: {
      pilot: 'Giám sát UAT 2 tuần, Bảo hành 30 ngày',
      department: 'Giám sát Controlled Run 30d, Bảo hành 60d',
      enterprise: 'Quản trị Controlled Run 60d, Bảo hành 90d, SLA',
    },
  },
];

export interface ResponsibilityMatrix {
  id: string;
  title: string;
  columns: string[];
  legend?: { code: string; meaning: string }[];
  rows: {
    rowLabel: string;
    rowMeta?: string;
    cells: { code?: string; description: string }[];
  }[];
}

export const RBAC_CHANGE_AUTHORITY_MATRIX: ResponsibilityMatrix = {
  id: 'rbac_change_authority',
  title: 'Bản Đồ Phân Quyền Thay Đổi & Quản Trị AI (AI Change Authority & RBAC Matrix)',
  columns: [
    'Cấp Độ Triển Khai',
    'Gói Dịch Vụ Áp Dụng',
    'Nhân Sự Tham Gia',
    'Tầng Năng Lực Bắt Buộc',
    'Ranh Giới Kỹ Thuật (Sunext vs Nội Bộ)',
    'Tiêu Chí Nghiệm Thu Gate 4',
  ],
  rows: [
    {
      rowLabel: 'Cấp 1: AI Enablement & Literacy',
      rowMeta: 'Năng lực cá nhân',
      cells: [
        { description: 'Gói 1: AI Pilot & Quick Wins (phần đào tạo)' },
        { description: 'Toàn bộ nhân sự tham gia pilot; chuyên viên phụ trách use case chính' },
        { description: 'Toàn bộ: Tầng 1 (Foundation); Chuyên viên nòng cốt: Tầng 2 (Domain Specialist)' },
        { description: 'Không can thiệp tích hợp phức tạp; Sunext cung cấp bộ Prompt Templates và SOP thực hành chuẩn.' },
        { description: '≥ 80% nhân sự tham gia vượt qua bài sát hạch thực hành Tầng 1; chuyên viên hoàn thành Đồ án Tầng 2; bàn giao Prompt Library + SOP.' },
      ],
    },
    {
      rowLabel: 'Cấp 2: Workflow Automation & Copilots',
      rowMeta: 'Quy trình tự động',
      cells: [
        { description: 'Gói 1: AI Pilot hoặc Gói 2: Department OS (module workflow)' },
        { description: 'Nhân sự trực tiếp vận hành luồng; AI Champions phòng ban; cán bộ IT phụ trách tài khoản dịch vụ' },
        { description: 'Nhân sự vận hành: Tầng 2; AI Champions: Tầng 3 (nếu thuộc Gói 2). Kỹ sư IT nội bộ không bắt buộc sát hạch Tầng 4.' },
        { description: 'Sunext chịu trách nhiệm kỹ thuật: Lập trình, cấu hình Webhook/API và bảo hành luồng. IT nội bộ tiếp nhận tài khoản dịch vụ & Runbook L1.' },
        { description: 'Nhân sự vận hành đạt Pass Mark Tầng 2, tự chủ chạy luồng với HITL; bàn giao đầy đủ mã nguồn workflow và Runbook kỹ thuật cho IT.' },
      ],
    },
    {
      rowLabel: 'Cấp 3: Custom AI Agent & Department OS',
      rowMeta: 'Ứng dụng phòng ban',
      cells: [
        { description: 'Gói 2: Department AI Operating System' },
        { description: 'Đội ngũ nhân sự phòng ban mũi nhọn; Trưởng phòng & 2-3 AI Champions nòng cốt; Kỹ sư IT hỗ trợ tiếp nhận mã nguồn' },
        { description: 'Nhân viên: Tầng 2; Trưởng phòng & Champions: Tầng 3. Kỹ sư IT nội bộ không bắt buộc sát hạch Tầng 4 trong gói chuẩn.' },
        { description: 'Khách hàng làm chủ nghiệp vụ, Sunext bảo trì kỹ thuật: Champions tự chủ cấu hình Agent/RAG; Sunext lập trình middleware & bảo hành 60 ngày theo SLA; IT tiếp nhận Git repo & Runbook.' },
        { description: 'AI Champions đạt Pass Mark cá nhân Tầng 3 (tự chủ cấu hình Agent, nạp kho RAG, kiểm soát prompt drift); Trưởng phòng duyệt routing; CSAT ≥ 85%.' },
      ],
    },
    {
      rowLabel: 'Cấp 4: Deep Core System & Data Integration',
      rowMeta: 'Hệ thống lõi',
      cells: [
        { description: 'Gói 3: Enterprise AI Transformation' },
        { description: 'Nhân sự vận hành tại xưởng/hiện trường; Quản lý khối & AI Champions; Đội ngũ Kỹ sư IT & Automation; Đội ngũ Kỹ sư AI & CoE lõi' },
        { description: 'Hiện trường: Tầng 2; Quản lý & Champions: Tầng 3; Kỹ sư IT: Tầng 4; Kỹ sư AI & CoE: Tầng 5.' },
        { description: 'Chuyển giao năng lực kỹ thuật: Đội ngũ kỹ sư nội bộ được kèm cặp trực tiếp để làm chủ toàn bộ mã nguồn, pipeline dữ liệu, Private VPC/GPU và fine-tuning. Doanh nghiệp tự chủ công nghệ.' },
        { description: 'Nghiệm thu kép: Mạng lưới Champions duy trì ứng dụng liên phòng ban (Tầng 3); Kỹ sư IT đạt Pass Mark Tầng 4; Kỹ sư AI CoE đạt Pass Mark Tầng 5.' },
      ],
    },
  ],
};

export type CompetencyTierId = 'tier1' | 'tier2' | 'tier3' | 'tier4' | 'tier5';

export interface CompetencyTier {
  id: CompetencyTierId;
  tierNumber: 1 | 2 | 3 | 4 | 5;
  name: string;
  targetRole: string;
  autonomousCapability: string;
  deliverables: string[];
  governanceBoundary: string;
  individualPassMark: string;
  systemAdoptionPrerequisite: string;
}

export const COMPETENCY_TIERS: CompetencyTier[] = [
  {
    id: 'tier1',
    tierNumber: 1,
    name: 'Foundation & Literacy',
    targetRole: 'Toàn thể cán bộ nhân viên đại trà trong doanh nghiệp',
    autonomousCapability: 'Sử dụng thành thạo giao diện AI thương mại; nắm vững cấu trúc prompt chuẩn (Role, Context, Instruction, Constraint, Output) để tóm tắt, dịch thuật, soạn thảo email và tra cứu tác vụ văn phòng cơ bản.',
    deliverables: [
      'Bộ prompt cá nhân hóa cho công việc hàng ngày',
      'Nhật ký kết quả áp dụng use case cá nhân',
    ],
    governanceBoundary: 'End-user Only: Không nạp dữ liệu nhạy cảm/tài chính lên AI công cộng; bắt buộc tự kiểm tra lại toàn bộ kết quả trước khi gửi nội bộ.',
    individualPassMark: 'Vượt qua bài kiểm tra thực hành độc lập 45 phút đạt ≥ 80/100 điểm: Cấu trúc prompt 5 thành phần, Few-shot đúng ngữ cảnh, kiểm soát ảo giác bằng cross-check và tuân thủ an toàn dữ liệu.',
    systemAdoptionPrerequisite: 'Tối thiểu 02 tác vụ công việc thường nhật được xử lý bằng AI trong tuần đầu tiên với nhật ký lưu vết thực tế.',
  },
  {
    id: 'tier2',
    tierNumber: 2,
    name: 'Domain Specialist',
    targetRole: 'Chuyên viên nghiệp vụ nòng cốt (HR, Marketing, Sales, Kế toán, Mua hàng, Vận hành)',
    autonomousCapability: 'Thiết kế và tinh chỉnh các chuỗi lệnh nghiệp vụ phức tạp (Few-shot, Chain-of-Thought) để xử lý dữ liệu chuyên môn (lọc hồ sơ, phân tích đối thủ, lập dàn ý báo cáo tài chính, soạn thảo kịch bản).',
    deliverables: [
      'Thư viện Prompt Templates chuẩn hóa theo nghiệp vụ',
      'Quy trình thao tác chuẩn (SOP) ứng dụng AI cho phòng ban có chốt chặn HITL',
    ],
    governanceBoundary: 'Department User & Reviewer: Sử dụng công cụ AI cấp phòng ban (Tier 2 Dedicated Tenant); chịu trách nhiệm thẩm định (Human-in-the-loop) kết quả của AI trước khi trình cấp trên; không có quyền sửa đổi mã nguồn backend.',
    individualPassMark: 'Hoàn thành Đồ án cá nhân (Capstone Project) đạt ≥ 85/100 điểm: Bộ 05 Prompt Templates nghiệp vụ, SOP thao tác chuẩn và giải quyết đúng 3 tình huống ngoại lệ.',
    systemAdoptionPrerequisite: 'Bộ SOP và Thư viện Prompt Templates được phòng ban đưa vào vận hành thực tế tối thiểu 14 ngày làm việc liên tục.',
  },
  {
    id: 'tier3',
    tierNumber: 3,
    name: 'Custom Agents',
    targetRole: 'Trưởng bộ phận, Quản lý dự án, Chuyên viên phân tích dữ liệu & Đội ngũ AI Champions nội bộ',
    autonomousCapability: 'Thiết lập kịch bản đa tác nhân (Multi-Agentic workflows); cấu hình system prompts, persona và logic routing cho Custom Agents; quản trị kho tri thức RAG phòng ban (nạp tài liệu, phân loại metadata, kiểm soát prompt drift).',
    deliverables: [
      'Cấu hình Agent hoàn chỉnh (System Prompt, Context Window, Tool Selection)',
      'Bộ tài liệu tri thức RAG phòng ban chuẩn hóa metadata',
      'Dashboard giám sát tỷ lệ ứng dụng',
    ],
    governanceBoundary: 'Agent Administrator: Toàn quyền cập nhật tài liệu kho tri thức RAG phòng ban và tinh chỉnh prompt trong phân quyền; có thẩm quyền duyệt thay đổi logic tác vụ nghiệp vụ; không can thiệp API kết nối hệ thống lõi.',
    individualPassMark: 'Vượt qua bài sát hạch Quản trị Agent thực hành độc lập đạt ≥ 85/100 điểm: Tự tay cấu hình hoàn chỉnh 01 Custom Agent; tổ chức làm sạch kho RAG; xử lý độc lập 03 tình huống prompt drift; bảo vệ quy trình.',
    systemAdoptionPrerequisite: 'Custom Agent phòng ban vận hành ổn định trong thời gian Controlled Run, đạt tỷ lệ Active User ≥ 70% và chỉ số hài lòng người dùng cuối CSAT ≥ 85%.',
  },
  {
    id: 'tier4',
    tierNumber: 4,
    name: 'Automation Pipeline',
    targetRole: 'Kỹ sư Tự động hóa (Automation Engineer), Chuyên viên IT phòng ban, Data Analyst kỹ thuật',
    autonomousCapability: 'Lập trình các luồng tích hợp dữ liệu tự động (Make, n8n, Python scripts); xử lý dữ liệu đầu vào/ra qua API/Webhook; cấu hình Task Queue, retry logic và cơ chế xử lý ngoại lệ (Exception Handling) giữa các phần mềm SaaS.',
    deliverables: [
      'Mã nguồn workflow tự động hóa (Git repo)',
      'Script đồng bộ dữ liệu hai chiều',
      'Cẩm nang Runbook kỹ thuật xử lý sự cố kết nối API và quản lý secrets',
    ],
    governanceBoundary: 'Pipeline Developer: Toàn quyền cấu hình, triển khai và kiểm thử các luồng tự động hóa tích hợp qua API/Webhook; chịu trách nhiệm kiểm soát bảo mật API keys và tỷ lệ lỗi luồng dữ liệu; phối hợp với CISO khi mở kết nối mới.',
    individualPassMark: 'Vượt qua bài thi sát hạch Kỹ thuật Lập trình Tích hợp đạt ≥ 85/100 điểm: Xây dựng pipeline API kết nối 2 phần mềm SaaS; lập trình bẫy lỗi ngoại lệ và retry logic; quản lý secrets Zero Hardcoded Keys; biên soạn Runbook và deploy qua Git CI/CD.',
    systemAdoptionPrerequisite: 'Pipeline tự động hóa vận hành ổn định trong Controlled Run, vượt qua kiểm thử UAT Golden Set với tỷ lệ lỗi < 1% trên 1.000 requests và thời gian khôi phục MTTR < 30 phút.',
  },
  {
    id: 'tier5',
    tierNumber: 5,
    name: 'Custom Models & CoE',
    targetRole: 'Đội ngũ Kỹ sư Phần mềm lõi, Data Scientists, AI/ML Engineers & Ban Điều Hành AI CoE',
    autonomousCapability: 'Làm chủ kiến trúc mô hình nền tảng, thiết lập pipeline Vector DB cấp doanh nghiệp; tinh chỉnh mô hình mã nguồn mở (Fine-tuning qua LoRA/QLoRA), đánh giá benchmark nội bộ và vận hành cụm máy chủ Private VPC / On-Premise GPU.',
    deliverables: [
      'Weights/Adapters mô hình tùy biến',
      'Hệ thống LLMOps / Model Registry nội bộ',
      'Khung tiêu chuẩn an toàn thông tin & kiến trúc AI doanh nghiệp',
    ],
    governanceBoundary: 'System & Architecture Owner: Toàn quyền kiến trúc và phê duyệt kỹ thuật cao nhất đối với việc triển khai mô hình lên Production lõi; kiểm soát toàn bộ hạ tầng Private Cloud / On-premise; giám sát an ninh mạng toàn doanh nghiệp.',
    individualPassMark: 'Bảo vệ thành công Đồ án Kiến trúc AI & LLMOps trước Hội đồng Kỹ thuật Sunext & CTO: Thiết lập độc lập kiến trúc RAG nâng cao/fine-tuning; pipeline CI/CD benchmark mô hình tự động; Runbook xử lý sự cố GPU/Vector DB và Zero Data Egress; vấn đáp an toàn và chi phí.',
    systemAdoptionPrerequisite: 'Cụm mô hình Private AI vận hành ổn định trong hạ tầng nội bộ, đạt chuẩn accuracy benchmark tương đương hoặc vượt trội baseline của Sunext trên Golden Set, với uptime ≥ 99.5%.',
  },
];
