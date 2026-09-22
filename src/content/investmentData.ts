import { GateId, CompetencyTierId, DataTierId, ResponsibilityMatrix } from './governanceData';

export interface PackageGateDisbursement {
  gateId: GateId;
  gateLabel: string;
  percentage: number;
  phaseLabel: string;
}

export interface PackageCfoLayer {
  businessGoal: string;
  thirdPartyOpexEstimate: string;
  inputPrerequisites: string[];
  keyDeliverables: string[];
  acceptanceCriteria: string[];
}

export interface PackageCtoLayer {
  inScopeSystems: string;
  dataSecurityTier: string;
  vendorDependencies: string;
  pipelineResponsibility: string;
  warrantyAndSla: string;
}

export interface InvestmentTier {
  id: string;
  name: string;
  badge: string;
  subtitle: string;
  recommendedFor: string;
  timeToValue: string;
  feeRange: string;
  paybackPeriod: string;
  recommendedEntryScoreRange: { min: number; max: number; label: string };
  competencyTierRange: { from: CompetencyTierId; to: CompetencyTierId };
  dataTierIds: DataTierId[];
  gateDisbursements: PackageGateDisbursement[];
  cfoLayer: PackageCfoLayer;
  ctoLayer: PackageCtoLayer;
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
    name: 'Lộ Trình 1 · AI Pilot & Quick Wins',
    badge: 'Khởi Điểm Tối Ưu',
    subtitle: 'Chứng minh ROI định lượng trong 4-6 tuần với 1 use case trọng điểm trước khi đầu tư mở rộng.',
    recommendedFor: 'Doanh nghiệp muốn kiểm chứng hiệu quả thực tế của AI trên bài toán đau đầu nhất mà không cần giải ngân ngân sách lớn.',
    timeToValue: '4 – 6 tuần',
    feeRange: '80 – 180 triệu VNĐ',
    paybackPeriod: '2 – 4 tháng',
    recommendedEntryScoreRange: {
      min: 12,
      max: 23,
      label: 'Nhóm Khởi Phát (12 – 23 điểm)',
    },
    competencyTierRange: { from: 'tier1', to: 'tier2' },
    dataTierIds: ['tier1'],
    gateDisbursements: [
      { gateId: 'gate1', gateLabel: 'Gate 1 (Scoping)', percentage: 20, phaseLabel: 'Khảo sát & SOW' },
      { gateId: 'gate2', gateLabel: 'Gate 2 (Architecture)', percentage: 40, phaseLabel: 'Thiết kế luồng & DPA' },
      { gateId: 'gate3', gateLabel: 'Gate 3 (Pilot Test)', percentage: 20, phaseLabel: 'Controlled Pilot 2 tuần' },
      { gateId: 'gate4', gateLabel: 'Gate 4 (Handover)', percentage: 20, phaseLabel: 'Bàn giao & Sát hạch Tầng 1-2' },
    ],
    cfoLayer: {
      businessGoal: 'Giải quyết dứt điểm một điểm nghẽn vận hành gây lãng phí giờ công hoặc chi phí lớn nhất; chứng minh hiệu quả tài chính thực tế để lấy niềm tin cho toàn tổ chức.',
      thirdPartyOpexEstimate: '$20 – $80 / tháng (Khách hàng chi trả trực tiếp cho OpenAI/Anthropic theo lưu lượng tác vụ thực tế).',
      inputPrerequisites: [
        '01 đầu mối phụ trách nghiệp vụ (Product Owner phòng ban)',
        'Tài liệu mẫu của quy trình hiện trạng và dữ liệu thử nghiệm',
        'Tài khoản Cloud / LLM API do khách hàng sở hữu',
      ],
      keyDeliverables: [
        'Module AI Agent hoặc Automation Pipeline giải quyết dứt điểm use case đã chọn',
        'Bộ cẩm nang tiêu chuẩn vận hành (SOP) và thư viện Prompt chuẩn hóa',
        'Khóa đào tạo Tầng 1 & 2 cho đội ngũ nhân sự liên quan',
        'Báo cáo đối soát chỉ số hoàn vốn thực tế (ROI Sheet)',
      ],
      acceptanceCriteria: [
        'Giờ công xử lý tác vụ giảm rõ rệt (minh chứng như case lọc CV từ 3 ngày xuống 2 giờ)',
        'Đội ngũ nòng cốt tự vận hành độc lập theo quy trình SOP sau chuyển giao',
      ],
    },
    ctoLayer: {
      inScopeSystems: 'Webhook, Make/n8n standalone workflow, Custom Python Script; giao diện Chatbot/Web UI độc lập hoặc nhúng Widget; không can thiệp cơ sở dữ liệu nội bộ.',
      dataSecurityTier: 'Tier 1: Enterprise API (Zero Data Retention). Dữ liệu chỉ luân chuyển tạm thời qua API để sinh kết quả; không dùng dữ liệu để huấn luyện mô hình.',
      vendorDependencies: 'Uptime hạ tầng của nhà cung cấp LLM API (OpenAI/Anthropic) và nền tảng tự động hóa (Make/n8n Cloud).',
      pipelineResponsibility: 'Sunext trực tiếp thiết lập và bảo trì pipeline theo cam kết bảo hành (30 ngày). IT nội bộ tiếp nhận tài khoản dịch vụ & Runbook L1 (xử lý token/re-auth) mà không bắt buộc sát hạch Tầng 4.',
      warrantyAndSla: '30 ngày bảo hành kỹ thuật tiêu chuẩn (sửa lỗi logic custom code, phản hồi ban đầu Severity 1 trong vòng < 2 giờ làm việc).',
    },
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
      'Mục tiêu: Rút ngắn thời gian xử lý thủ công cho use case trọng điểm (như case study lọc CV từ 3 ngày xuống 2 giờ)',
      'Đội ngũ nòng cốt làm chủ công cụ và tự vận hành độc lập sau bàn giao',
      'Tạo tiền đề vững chắc và kiểm chứng hiệu quả thực tế trước khi mở rộng ngân sách',
    ],
  },
  {
    id: 'department',
    name: 'Lộ Trình 2 · Department AI Operating System',
    badge: 'Phổ Biến Nhất',
    subtitle: 'Thiết lập hệ điều hành AI chuẩn hóa cho 1 phòng ban mũi nhọn (Marketing, Sales, HR, hoặc Vận hành).',
    recommendedFor: 'Doanh nghiệp 50 - 300 nhân sự muốn giải phóng sức lao động của một bộ phận then chốt và tạo đòn bẩy tăng trưởng 3x-5x.',
    timeToValue: '8 – 12 tuần',
    feeRange: '250 – 600 triệu VNĐ',
    paybackPeriod: '4 – 7 tháng',
    recommendedEntryScoreRange: {
      min: 24,
      max: 37,
      label: 'Nhóm Chuẩn Hóa (24 – 37 điểm)',
    },
    competencyTierRange: { from: 'tier1', to: 'tier3' },
    dataTierIds: ['tier1', 'tier2'],
    gateDisbursements: [
      { gateId: 'gate1', gateLabel: 'Gate 1 (Scoping)', percentage: 15, phaseLabel: 'Discovery & SOW' },
      { gateId: 'gate2', gateLabel: 'Gate 2 (Architecture)', percentage: 35, phaseLabel: 'Thiết kế API & RAG Tenant' },
      { gateId: 'gate3', gateLabel: 'Gate 3 (Controlled Run)', percentage: 30, phaseLabel: 'Controlled Run 30 ngày' },
      { gateId: 'gate4', gateLabel: 'Gate 4 (Handover)', percentage: 20, phaseLabel: 'Bàn giao & Sát hạch Tầng 1-3' },
    ],
    cfoLayer: {
      businessGoal: 'Tái thiết kế toàn bộ luồng công việc của 1 phòng ban then chốt; loại bỏ lãng phí tác vụ lặp lại, giảm chi phí vận hành và tăng tốc độ phục vụ khách hàng.',
      thirdPartyOpexEstimate: '$80 – $250 / tháng (Khách hàng chi trả trực tiếp cho LLM API tokens, Dedicated Vector DB tenant, Make/n8n plan).',
      inputPrerequisites: [
        'Ban lãnh đạo phòng ban cam kết tái cấu trúc quy trình nghiệp vụ',
        'Phần mềm phòng ban hiện hữu có hỗ trợ kết nối API (CRM, ATS, Lark, Slack)',
        'Kho tài liệu và quy trình nội bộ sẵn sàng để số hóa thành RAG',
      ],
      keyDeliverables: [
        'Luồng quy trình mới được chuẩn hóa theo nguyên tắc Human-in-the-loop',
        'Cụm 2-3 Custom AI Agents chuyên ngành (kết nối CRM/ATS/Website phòng ban)',
        'Kho tri thức số hóa phòng ban (Department Knowledge Base / RAG)',
        'Khóa đào tạo Thang 5 Tầng (Tầng 1 ➔ 3) và chuyển giao nhóm AI Champions nội bộ',
      ],
      acceptanceCriteria: [
        'Loại bỏ thao tác copy-paste thủ công trên các luồng nghiệp vụ giữa các phần mềm rời rạc',
        'AI Champions tự chủ nạp tài liệu và hiệu chỉnh prompt của Custom Agent',
      ],
    },
    ctoLayer: {
      inScopeSystems: 'Ứng dụng phòng ban (ATS Lọc CV, CRM Chatbot, RAG Tri thức nội bộ); kết nối RESTful API/Webhook tiêu chuẩn với các SaaS sẵn có.',
      dataSecurityTier: 'Tier 2: Vector DB & Dedicated Tenant (Hybrid RAG). Dữ liệu tĩnh mã hóa AES-256 at rest, TLS 1.3 in transit; khử PII trước khi gửi API.',
      vendorDependencies: 'Nhà cung cấp Vector DB (Pinecone/Qdrant/pgvector cloud) và SaaS phòng ban.',
      pipelineResponsibility: 'Khách hàng làm chủ nghiệp vụ và cấu hình Agent (Tầng 3); Sunext chịu trách nhiệm lập trình custom code/middleware và bảo hành 60 ngày theo SLA.',
      warrantyAndSla: '60 ngày bảo hành kỹ thuật tiêu chuẩn (sửa lỗi custom code, hiệu chỉnh prompt drift định kỳ); tùy chọn chuyển sang gói Support Retainer theo quý.',
    },
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
      'Tăng tốc năng suất các khâu sản xuất nội dung / tài liệu chuyên môn (đạt x5 ở case study B2B)',
      'Loại bỏ hoàn toàn thao tác copy-paste dữ liệu giữa các phần mềm rời rạc',
      'Giảm thiểu tối đa sự phụ thuộc vào các dịch vụ thuê ngoài đắt đỏ',
    ],
  },
  {
    id: 'enterprise',
    name: 'Lộ Trình 3 · Enterprise AI Transformation',
    badge: 'Toàn Diện Sunext Method',
    subtitle: 'Tái thiết kế toàn bộ tổ chức theo Phương Pháp Luận Sunext với hạ tầng Private AI bảo mật cấp doanh nghiệp.',
    recommendedFor: 'Tập đoàn & Doanh nghiệp 200 - 1.000+ nhân sự cam kết xây dựng AI như lợi thế cạnh tranh cốt lõi dài hạn.',
    timeToValue: '4 – 6 tháng',
    feeRange: '800 triệu – 2+ tỷ VNĐ',
    paybackPeriod: '8 – 12 tháng',
    recommendedEntryScoreRange: {
      min: 38,
      max: 48,
      label: 'Nhóm Sẵn Sàng Tích Hợp (38 – 48 điểm)',
    },
    competencyTierRange: { from: 'tier1', to: 'tier5' },
    dataTierIds: ['tier1', 'tier2', 'tier3a', 'tier3b'],
    gateDisbursements: [
      { gateId: 'gate1', gateLabel: 'Gate 1 (Architecture)', percentage: 15, phaseLabel: 'Architecture Scoping' },
      { gateId: 'gate2', gateLabel: 'Gate 2 (Core Build)', percentage: 35, phaseLabel: 'Core Integration & Private AI' },
      { gateId: 'gate3', gateLabel: 'Gate 3 (Production Run)', percentage: 30, phaseLabel: 'Controlled Run 60 ngày' },
      { gateId: 'gate4', gateLabel: 'Gate 4 (Handover & CoE)', percentage: 20, phaseLabel: 'Bàn giao IP & Sát hạch CoE Tầng 4-5' },
    ],
    cfoLayer: {
      businessGoal: 'Tái cấu trúc mô hình vận hành toàn công ty, cắt giảm chi phí công cụ rời rạc, bảo vệ bí mật kinh doanh và xây dựng năng lực số tự chủ dài hạn.',
      thirdPartyOpexEstimate: 'Chi phí điện toán đám mây riêng biệt (Cloud VPC / GPU instances trên AWS/GCP) hoặc chi phí khấu hao cụm máy chủ On-premise do doanh nghiệp trực tiếp quản trị.',
      inputPrerequisites: [
        'Nghị quyết thành lập Ban chỉ đạo chuyển đổi AI từ Hội đồng quản trị / Ban TGĐ',
        'Hạ tầng máy chủ nội bộ hoặc Private Cloud VPC',
        'Đội ngũ kỹ thuật nội bộ phối hợp thẩm định (CTO/CIO, Solution Architect)',
      ],
      keyDeliverables: [
        'Lộ trình chiến lược Use Case toàn công ty xếp hạng ưu tiên theo giá trị P&L',
        'Cụm Private Model Mesh / Enterprise Vector Mesh vận hành trong hạ tầng kiểm soát nội bộ',
        'Khung chính sách quản trị rủi ro, bảo mật dữ liệu và chuẩn mực đạo đức AI (AI Governance Framework)',
        'Chương trình đào tạo phân tầng Thang 5 Tầng: Tầng 1-2 đại trà, Tầng 3 Champions, Tầng 4-5 kỹ thuật CoE nội bộ',
        'Bàn giao toàn bộ mã nguồn tùy biến, prompt templates và tài liệu kiến trúc',
      ],
      acceptanceCriteria: [
        'Dữ liệu và bí mật kinh doanh được bảo vệ theo chuẩn an toàn trong phạm vi hạ tầng kiểm soát nội bộ',
        'Kỹ sư IT nội bộ đạt chuẩn Tầng 4 và Kỹ sư AI CoE đạt chuẩn Tầng 5 tự chủ vận hành sau Gate 4',
      ],
    },
    ctoLayer: {
      inScopeSystems: 'Hệ thống lõi doanh nghiệp (Core ERP SAP/Oracle, Core Banking, MES chuyền sản xuất, Data Warehouse); cụm Camera AI Vision tại chuyền máy; Private LLM Gateway nội bộ.',
      dataSecurityTier: 'Tier 3: On-Premise / Private VPC (Tùy chọn Tier 3A Private Cloud VPC hoặc Tier 3B Air-Gapped Zero Data Egress).',
      vendorDependencies: 'Phần cứng máy chủ vật lý / GPU cụm server và hạ tầng mạng nội bộ của doanh nghiệp.',
      pipelineResponsibility: 'Chuyển giao năng lực kỹ thuật: Đội ngũ kỹ sư nội bộ được kèm cặp trực tiếp (Pair-programming) để làm chủ toàn bộ mã nguồn, pipeline dữ liệu, Private VPC/GPU và fine-tuning mô hình.',
      warrantyAndSla: '90 ngày bảo hành kỹ thuật tiêu chuẩn (xử lý sự cố Severity 1-3 từ custom code); tùy chọn chuyển sang Hợp đồng Dịch vụ Vận hành Thường niên SLA 99.5%.',
    },
    scope: 'Toàn bộ doanh nghiệp đa phòng ban kết hợp hạ tầng Private AI chuyên biệt',
    supportLevel: 'Đội ngũ kỹ sư chuyên trách On-site / Standby + Ban Cố Vấn CAIO chỉ đạo',
    deliverables: [
      {
        category: '1. Chiến lược & Lộ trình Chuyển đổi (Strategy)',
        items: [
          'Thiết kế kiến trúc AI tổng thể phù hợp với tầm nhìn kinh doanh 3-5 năm',
          'Xây dựng lộ trình phân kỳ đầu tư (phân bổ ngân sách theo từng quý)',
          'Định vị các use case tạo lợi thế cạnh tranh cốt lõi (Moat)',
        ],
      },
      {
        category: '2. Nền tảng Công nghệ & Dữ liệu Doanh nghiệp (Platform & Data)',
        items: [
          'Thiết lập hạ tầng Private Cloud hoặc On-premise đảm bảo bảo mật tuyệt đối',
          'Xây dựng Enterprise Data Mesh kết nối dữ liệu từ tất cả phòng ban',
          'Triển khai hệ thống giám sát hiệu năng mô hình (LLMOps) và cảnh báo sai lệch',
        ],
      },
      {
        category: '3. Chuyển giao Năng lực & Trung tâm AI CoE (People & Governance)',
        items: [
          'Đào tạo phân tầng theo vai trò cho toàn bộ cán bộ nhân viên theo Thang 5 Tầng',
          'Thiết lập Trung tâm Xuất sắc về AI (AI Center of Excellence - CoE) nội bộ',
          'Ban hành bộ quy chuẩn đạo đức AI, an toàn dữ liệu và phân quyền trách nhiệm',
        ],
      },
    ],
    measurableOutcomes: [
      'Xây dựng năng lực AI tự chủ hoàn toàn cho doanh nghiệp, không phụ thuộc bên ngoài',
      'Bảo vệ 100% tài sản trí tuệ và dữ liệu mật của công ty',
      'Định hình lại mô hình kinh doanh và tạo khoảng cách cạnh tranh vượt trội trên thị trường',
    ],
  },
];

export const RACI_TECHNICAL_MATRIX: ResponsibilityMatrix = {
  id: 'raci_technical_matrix',
  title: 'Ma Trận Phân Định Trách Nhiệm Kỹ Thuật Cho CTO / CIO (RACI Matrix)',
  columns: [
    'Hạng Mục Kỹ Thuật',
    'Khách Hàng (Client)',
    'Sunext',
    'Vendor Nền Tảng Bên Thứ Ba',
  ],
  legend: [
    { code: 'R', meaning: 'Responsible - Bên trực tiếp thực hiện' },
    { code: 'A', meaning: 'Accountable - Bên chịu trách nhiệm cao nhất & phê duyệt' },
    { code: 'C', meaning: 'Consulted - Bên được tham vấn ý kiến chuyên môn' },
    { code: 'I', meaning: 'Informed - Bên nhận thông tin cập nhật' },
  ],
  rows: [
    {
      rowLabel: 'Tài khoản Cloud, API & License',
      cells: [
        { code: 'A', description: 'Chủ sở hữu & Đứng tên trực tiếp' },
        { code: 'R', description: 'Tư vấn cấu hình & Hướng dẫn thiết lập' },
        { code: 'I', description: 'Cung cấp hạ tầng & Billing trực tiếp' },
      ],
    },
    {
      rowLabel: 'Dữ liệu mẫu & Môi trường API Sandbox',
      cells: [
        { code: 'A', description: 'Cung cấp dữ liệu sạch & Cấp quyền API' },
        { code: 'R', description: 'Thẩm định chất lượng & Khảo sát Scoping' },
        { code: '-', description: 'Không tham gia' },
      ],
    },
    {
      rowLabel: 'Lập trình Custom Code, Agent & Middleware',
      cells: [
        { code: 'C', description: 'Thẩm định kiến trúc & Phê duyệt' },
        { code: 'R', description: 'Trực tiếp thiết kế, code & kiểm thử' },
        { code: '-', description: 'Không tham gia' },
      ],
    },
    {
      rowLabel: 'Kiểm thử UAT & Nghiệm thu',
      cells: [
        { code: 'A', description: 'Bố trí Domain Product Owner nghiệm thu' },
        { code: 'R', description: 'Phối hợp sửa lỗi & Đáp ứng tiêu chí UAT' },
        { code: '-', description: 'Không tham gia' },
      ],
    },
    {
      rowLabel: 'Hạ tầng Model Uptime & Rate Limits',
      cells: [
        { code: 'I', description: 'Theo dõi tài khoản dịch vụ' },
        { code: 'R', description: 'Cấu hình cơ chế fallback & Retry logic' },
        { code: 'A', description: 'Cam kết Uptime SLA máy chủ cloud' },
      ],
    },
    {
      rowLabel: 'Vận hành sau Go-live & Bảo hành',
      cells: [
        { code: 'A', description: 'Tự chủ vận hành theo runbook chuyển giao' },
        { code: 'R', description: 'Bảo hành kỹ thuật 30–90 ngày theo gói' },
        { code: 'I', description: 'Cung cấp hạ tầng tính toán liên tục' },
      ],
    },
  ],
};
