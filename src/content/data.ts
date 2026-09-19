export interface AdvantageCard {
  id: string;
  index: number;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  isDark?: boolean;
  metric: {
    value: number;
    prefix?: string;
    suffix?: string;
    label: string;
    subtext?: string;
  };
  widgetType: 'bars' | 'ring' | 'dots';
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  image: string;
  widthClass: string;
  heightClass: string;
  slug: string;
  summary?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export const ADVANTAGES_DATA: AdvantageCard[] = [
  {
    id: 'advantage-1',
    index: 1,
    eyebrow: 'Mô Hình Vận Hành & Con Người',
    title: '70% Thành Bại Ở Con Người, Không Phải Mua Tool',
    description: 'Mua license AI cho cả trăm người mà không tái thiết kế quy trình chỉ tạo ra rác kỹ thuật số đắt đỏ. Sunext đào tạo nâng tầng năng lực đội ngũ và tối ưu luồng việc để AI giải phóng thời gian thực tế.',
    image: '/assets/advantage-card-1.jpg',
    bgColor: '#FAFFDE',
    metric: {
      value: 40,
      suffix: '%',
      label: 'chi phí tuyển dụng thực tế',
      subtext: 'Chuỗi bán lẻ 500 nhân sự',
    },
    widgetType: 'bars',
  },
  {
    id: 'advantage-2',
    index: 2,
    eyebrow: 'Kiến Trúc Dữ Liệu Sống',
    title: 'Kết Nối Trực Tiếp Vào Lõi Vận Hành Doanh Nghiệp',
    description: 'Không tạo thêm dashboard tĩnh thừa thãi để ngắm. Hệ thống AI tích hợp 2 chiều vào ERP, CRM, dây chuyền máy để tự động kích hoạt hành động và cảnh báo theo thời gian thực.',
    image: '/assets/advantage-card-2.jpg',
    bgColor: '#F5F3F6',
    metric: {
      value: 99,
      suffix: '%',
      label: 'độ chính xác kiểm định tự động',
      subtext: 'Nhà máy cơ khí chính xác',
    },
    widgetType: 'ring',
  },
  {
    id: 'advantage-3',
    index: 3,
    eyebrow: 'Nghiệm Thu Theo Kết Quả',
    title: 'Đo Bằng Giờ Công Tiết Kiệm, Không Bán Giải Pháp Ảo',
    description: 'Nói không với các dự án công nghệ kéo dài vô tận. Triển khai theo từng cột mốc đo lường được, nghiệm thu bằng hiệu quả P&L định lượng: rút ngắn thời gian xử lý, giảm tỷ lệ lỗi, tăng lead.',
    image: '/assets/advantage-card-3.jpg',
    bgColor: '#FAFFDE',
    metric: {
      value: 5,
      prefix: 'x',
      label: 'tốc độ sản xuất tài liệu kỹ thuật',
      subtext: 'Doanh nghiệp B2B 200 nhân sự',
    },
    widgetType: 'dots',
  },
];

export const CASES_DATA: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Tối Ưu Tuyển Dụng & Sàng Lọc CV Chuỗi Bán Lẻ',
    category: 'Bán Lẻ & FMCG',
    image: '/assets/vietnam-retail-store.jpg',
    widthClass: 'w-[300px] sm:w-[340px] md:w-[380px]',
    heightClass: 'h-[200px] sm:h-[230px] md:h-[260px]',
    slug: 'toi-uu-chi-phi-tuyen-dung-hr-ai',
    summary: 'Chuỗi bán lẻ 500 nhân sự: Rút ngắn thời gian lọc CV từ 3 ngày xuống 2 giờ, tiết kiệm 40% chi phí tuyển dụng thực tế.',
  },
  {
    id: 'case-2',
    title: 'Hệ Thống AI Vision Kiểm Định Cơ Khí Chính Xác',
    category: 'Sản Xuất & Chế Tạo',
    image: '/assets/vietnam-manufacturing-line.jpg',
    widthClass: 'w-[320px] sm:w-[360px] md:w-[400px]',
    heightClass: 'h-[220px] sm:h-[250px] md:h-[280px]',
    slug: 'ai-auditor-manufacturing',
    summary: 'Nhà máy 800 công nhân: Đạt 99.8% độ chính xác kiểm định bề mặt, tỷ lệ lỗi sau kiểm định còn 1.5%.',
  },
  {
    id: 'case-3',
    title: 'Content Factory & Engine Tri Thức B2B',
    category: 'Dịch Vụ B2B',
    image: '/assets/vietnam-b2b-office.jpg',
    widthClass: 'w-[290px] sm:w-[330px] md:w-[360px]',
    heightClass: 'h-[190px] sm:h-[220px] md:h-[250px]',
    slug: 'content-factory-b2b-marketing',
    summary: 'Doanh nghiệp dịch vụ 200 nhân sự: Tăng tốc x5 sản xuất tài liệu chuyên môn, tăng 60% organic traffic sau 5 tháng.',
  },
  {
    id: 'case-4',
    title: 'Dự Báo Ca Trực & Phân Bổ Nhân Sự Tuyển Dụng',
    category: 'Bán Lẻ & FMCG',
    image: '/assets/vietnam-retail-store.jpg',
    widthClass: 'w-[340px] sm:w-[380px] md:w-[420px]',
    heightClass: 'h-[240px] sm:h-[270px] md:h-[300px]',
    slug: 'toi-uu-chi-phi-tuyen-dung-hr-ai',
    summary: 'Tự động hóa luồng tiếp nhận và sàng lọc ứng viên ca kíp, giúp đội ngũ HR 4 người giải phóng 90% thời gian tác vụ lặp lại.',
  },
  {
    id: 'case-5',
    title: 'Giám Sát Kiểm Định Tự Động Chuyền Sản Xuất',
    category: 'Sản Xuất & Chế Tạo',
    image: '/assets/vietnam-manufacturing-line.jpg',
    widthClass: 'w-[310px] sm:w-[350px] md:w-[390px]',
    heightClass: 'h-[210px] sm:h-[240px] md:h-[270px]',
    slug: 'ai-auditor-manufacturing',
    summary: 'Camera công nghiệp kết hợp mô hình AI quét chi tiết thời gian thực < 50ms, vận hành 24/7 đồng nhất trên 6 dây chuyền.',
  },
  {
    id: 'case-6',
    title: 'Đóng Gói Tri Thức Chuyên Gia & Xuất Bản B2B',
    category: 'Dịch Vụ B2B',
    image: '/assets/vietnam-strategy-meeting.jpg',
    widthClass: 'w-[300px] sm:w-[340px] md:w-[380px]',
    heightClass: 'h-[200px] sm:h-[230px] md:h-[260px]',
    slug: 'content-factory-b2b-marketing',
    summary: 'Chuyển hóa tài liệu kỹ thuật và kinh nghiệm chuyên gia thành bài phân tích chuyên sâu chuẩn Brand Voice, duy trì 50+ bài/tháng.',
  },
];

export const STATS_DATA: StatItem[] = [
  {
    value: '99.8%',
    label: 'Độ chính xác kiểm định tự động AI Vision',
  },
  {
    value: '3 ngày → 2h',
    label: 'Rút ngắn thời gian sàng lọc hồ sơ ứng viên',
  },
  {
    value: 'x5',
    label: 'Tăng tốc độ sản xuất tài liệu kỹ thuật & proposal',
  },
];

export interface CaseStudyDetail {
  slug: string;
  title: string;
  client: string;
  category: string;
  scale: string;
  image: string;
  challenge: string;
  solution: string;
  pillarsInvolved: { name: string; slug: string }[];
  industry: { name: string; slug: string };
  metrics: {
    value: string;
    label: string;
    description: string;
  }[];
}

const CANONICAL_CASE_STUDIES: Record<string, CaseStudyDetail> = {
  'toi-uu-chi-phi-tuyen-dung-hr-ai': {
    slug: 'toi-uu-chi-phi-tuyen-dung-hr-ai',
    title: 'Tối Ưu Tuyển Dụng & Sàng Lọc CV Tự Động Cho Chuỗi Bán Lẻ',
    client: 'Chuỗi Bán Lẻ Thời Trang & Hàng Tiêu Dùng',
    category: 'Bán Lẻ & FMCG',
    scale: '500 nhân sự · Đội HR 4 người · Tuyển 60-80 vị trí/quý',
    image: '/assets/vietnam-retail-store.jpg',
    challenge:
      'Mỗi quý mở rộng, chuỗi bán lẻ 500 nhân sự cần tuyển từ 60 đến 80 vị trí mới. Nhưng cả bộ phận Nhân sự chỉ có vỏn vẹn 4 người. Họ mất trung bình 3 ngày làm việc thủ công cho mỗi vị trí chỉ để mở từng file hồ sơ, đối chiếu tiêu chí ca kíp và gọi điện hẹn giờ phỏng vấn. Khối lượng tác vụ lặp lại đè nặng khiến cả đội gần như phải dừng mọi hoạt động phát triển nhân sự khác trong mùa cao điểm.',
    solution:
      'Bước chuyển hóa không bắt đầu bằng việc mua công cụ. Đội ngũ HR trước tiên được đào tạo để hiểu rõ năng lực AI (Tầng 1) và áp dụng trực tiếp vào quy trình tuyển dụng nội bộ (Tầng 2). Sau khi quy trình được chuẩn hóa, AI Resume Screener mới được tích hợp thẳng vào hệ thống ATS quen thuộc của công ty. Hệ thống tự động trích xuất thông tin, chấm điểm tiêu chí và hỗ trợ tiếp nhận ứng viên 24/7. Đội HR bốn người lấy lại thời gian để tập trung vào việc mà máy không làm thay được: phỏng vấn chuyên sâu và thu hút ứng viên tốt nhất.',
    pillarsInvolved: [
      { name: 'Trụ cột 2: Năng Lực Đội Ngũ', slug: 'nang-luc-doi-ngu' },
      { name: 'Trụ cột 4: Nền Tảng Công Nghệ', slug: 'nen-tang-cong-nghe' },
    ],
    industry: { name: 'Bán Lẻ & Hàng Tiêu Dùng', slug: 'ban-le-tieu-dung' },
    metrics: [
      {
        value: '-40%',
        label: 'Chi phí tuyển dụng thực tế',
        description: 'Tiết kiệm ngân sách đăng tin tuyển dụng và tối ưu nguồn lực vận hành',
      },
      {
        value: '3 ngày → 2h',
        label: 'Thời gian sàng lọc hồ sơ',
        description: 'Rút ngắn thời gian từ lúc ứng viên nộp hồ sơ đến khi hoàn tất danh sách phỏng vấn',
      },
      {
        value: '+25%',
        label: 'Tỷ lệ ứng viên đạt yêu cầu vào phỏng vấn',
        description: 'Hồ sơ được chọn lọc chuẩn xác theo tiêu chí ca trực của từng điểm bán',
      },
    ],
  },
  'ai-auditor-manufacturing': {
    slug: 'ai-auditor-manufacturing',
    title: 'Hệ Thống Thị Giác Máy Tính AI Vision Kiểm Định Cơ Khí Chính Xác',
    client: 'Nhà Máy Chế Tạo Cơ Khí Phụ Tùng Xuất Khẩu',
    category: 'Sản Xuất Cơ Khí & Chế Tạo',
    scale: '800 công nhân · 6 dây chuyền sản xuất liên tục',
    image: '/assets/vietnam-manufacturing-line.jpg',
    challenge:
      'Trên 6 dây chuyền sản xuất cơ khí chính xác, công nhân kiểm định chất lượng (QA/QC) phải soi từng chi tiết dưới ánh đèn công suất lớn suốt ca 8 tiếng. Sau 4 tiếng liên tục, hiện tượng mỏi mắt cơ học khiến việc phát hiện các vết nứt vi mô, vết xước bề mặt hay sai lệch kích thước nhỏ trở nên thiếu ổn định. Rủi ro sản phẩm lỗi lọt ra ngoài thị trường đe dọa trực tiếp đến các hợp đồng gia công quốc tế khắt khe.',
    solution:
      'Đội ngũ kỹ thuật nhà máy được trang bị giải pháp thị giác máy tính AI Vision trực tiếp tại chuyền kết hợp kiến trúc dữ liệu hình ảnh thời gian thực. Camera công nghiệp tốc độ cao quét từng linh kiện đang chuyển động với tốc độ < 50ms, nhận diện sai sót tức thời, kích hoạt cơ cấu gạt phế phẩm tự động và cảnh báo tức thì lên màn hình điều hành của quản đốc ca. Công nhân QA chuyển từ việc soi từng chi tiết bằng mắt sang giám sát hệ thống và phân tích nguyên nhân gốc rễ.',
    pillarsInvolved: [
      { name: 'Trụ cột 4: Nền Tảng Công Nghệ', slug: 'nen-tang-cong-nghe' },
      { name: 'Trụ cột 5: Kiến Trúc Dữ Liệu', slug: 'kien-truc-du-lieu' },
    ],
    industry: { name: 'Sản Xuất Cơ Khí & Chế Tạo', slug: 'san-xuat-che-tao' },
    metrics: [
      {
        value: '99.8%',
        label: 'Độ chính xác kiểm định tự động',
        description: 'Nhận diện vết xước, nứt vi mô và sai lệch kích thước tức thời trong thời gian thực',
      },
      {
        value: '1.5%',
        label: 'Tỷ lệ sản phẩm lỗi sau kiểm định',
        description: 'Loại bỏ hoàn toàn sự phụ thuộc vào trạng thái mỏi mắt của công nhân',
      },
      {
        value: '24/7',
        label: 'Giám sát không gián đoạn',
        description: 'Đảm bảo tiêu chuẩn chất lượng đồng nhất trên cả 6 dây chuyền sản xuất',
      },
    ],
  },
  'content-factory-b2b-marketing': {
    slug: 'content-factory-b2b-marketing',
    title: 'B2B Content Factory & Engine Đóng Gói Tri Thức Chuyên Gia',
    client: 'Công Ty Tư Vấn Giải Pháp & Dịch Vụ Doanh Nghiệp',
    category: 'Dịch Vụ Doanh Nghiệp & B2B',
    scale: '200 nhân sự · Đội Marketing 4 người',
    image: '/assets/vietnam-b2b-office.jpg',
    challenge:
      'Tài sản quý giá nhất của doanh nghiệp tư vấn là kinh nghiệm thực chiến của các chuyên gia đầu ngành. Nhưng các chuyên gia luôn bận rộn với dự án khách hàng, không thể dành hàng giờ viết bài. Đội marketing nội bộ 4 người nếu thuê ngoài agency chỉ nhận được các bài viết bề nổi, thiếu chiều sâu chuyên môn để thuyết phục khách hàng B2B khó tính. Kênh marketing tự nhiên bị đình trệ, công ty phụ thuộc hoàn toàn vào quảng cáo đắt đỏ.',
    solution:
      'Đội ngũ marketing nội bộ được nâng tầng năng lực (Tầng 2) và tái thiết kế quy trình sản xuất nội dung theo mô hình Content Factory. Chuyên gia chỉ cần ghi âm chia sẻ ngắn hoặc cung cấp tài liệu kỹ thuật thô, AI Engine tự động cấu trúc thành bài phân tích chuyên sâu chuẩn Brand Voice của công ty. Đội ngũ marketing giữ vai trò biên tập, kiểm duyệt chất lượng và xuất bản đa kênh với chu kỳ nhanh gấp 5 lần mà không phát sinh thêm chi phí.',
    pillarsInvolved: [
      { name: 'Trụ cột 2: Năng Lực Đội Ngũ', slug: 'nang-luc-doi-ngu' },
      { name: 'Trụ cột 3: Mô Hình Vận Hành', slug: 'mo-hinh-van-hanh' },
    ],
    industry: { name: 'Dịch Vụ Doanh Nghiệp & B2B', slug: 'dich-vu-b2b' },
    metrics: [
      {
        value: 'x5',
        label: 'Tốc độ sản xuất tài liệu chuyên môn',
        description: 'Rút ngắn thời gian từ ý tưởng chuyên gia đến bài phân tích hoàn chỉnh',
      },
      {
        value: '+60%',
        label: 'Tăng trưởng lưu lượng truy cập tự nhiên (Organic traffic)',
        description: 'Đạt được sau 5 tháng xuất bản nội dung chuyên môn đều đặn và nhất quán',
      },
      {
        value: '0đ',
        label: 'Chi phí ngân sách phát sinh cho quảng cáo',
        description: 'Tăng trưởng bền vững dựa trên tri thức nội bộ và uy tín chuyên gia',
      },
    ],
  },
};

// Aliases for backward compatibility and zero 404s
export const CASE_STUDIES_DETAILS: Record<string, CaseStudyDetail> = {
  ...CANONICAL_CASE_STUDIES,
  'ai-vision-kiem-dinh-san-xuat': CANONICAL_CASE_STUDIES['ai-auditor-manufacturing'],
  'content-factory-b2b-knowledge': CANONICAL_CASE_STUDIES['content-factory-b2b-marketing'],
  'enterprise-rag-data-mesh': CANONICAL_CASE_STUDIES['toi-uu-chi-phi-tuyen-dung-hr-ai'],
  'autonomous-agentic-pipeline': CANONICAL_CASE_STUDIES['ai-auditor-manufacturing'],
  'multimodal-vision-system': CANONICAL_CASE_STUDIES['content-factory-b2b-marketing'],
};


