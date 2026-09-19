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
    summary: 'Chuỗi 45 cửa hàng: Rút ngắn thời gian lọc CV từ 3 ngày xuống 2 giờ, tiết kiệm 40% chi phí tuyển dụng.',
  },
  {
    id: 'case-2',
    title: 'Hệ Thống AI Vision Kiểm Định Cơ Khí Chính Xác',
    category: 'Sản Xuất & Chế Tạo',
    image: '/assets/vietnam-manufacturing-line.jpg',
    widthClass: 'w-[320px] sm:w-[360px] md:w-[400px]',
    heightClass: 'h-[220px] sm:h-[250px] md:h-[280px]',
    slug: 'ai-vision-kiem-dinh-san-xuat',
    summary: 'Nhà máy 800 công nhân: Đạt 99.8% độ chính xác kiểm định bề mặt, giảm tỷ lệ hàng lỗi xuống 1.5%.',
  },
  {
    id: 'case-3',
    title: 'Content Factory & Engine Tri Thức B2B',
    category: 'Dịch Vụ B2B',
    image: '/assets/vietnam-b2b-office.jpg',
    widthClass: 'w-[290px] sm:w-[330px] md:w-[360px]',
    heightClass: 'h-[190px] sm:h-[220px] md:h-[250px]',
    slug: 'content-factory-b2b-knowledge',
    summary: 'Công ty tư vấn 200 nhân sự: Tăng tốc x5 sản xuất tài liệu chuyên môn, tăng 60% organic lead B2B.',
  },
  {
    id: 'case-4',
    title: 'Dự Báo Ca Trực & Phân Bổ Nhân Sự Điểm Bán',
    category: 'Bán Lẻ & FMCG',
    image: '/assets/vietnam-retail-store.jpg',
    widthClass: 'w-[340px] sm:w-[380px] md:w-[420px]',
    heightClass: 'h-[240px] sm:h-[270px] md:h-[300px]',
    slug: 'toi-uu-chi-phi-tuyen-dung-hr-ai',
    summary: 'Tự động điều phối nhân sự theo lưu lượng khách thực tế tại từng cửa hàng, tối ưu chi phí ca kíp.',
  },
  {
    id: 'case-5',
    title: 'Bảo Trì Dự Đoán & Giảm Thiểu Dừng Máy CNC',
    category: 'Sản Xuất & Chế Tạo',
    image: '/assets/vietnam-manufacturing-line.jpg',
    widthClass: 'w-[310px] sm:w-[350px] md:w-[390px]',
    heightClass: 'h-[210px] sm:h-[240px] md:h-[270px]',
    slug: 'ai-vision-kiem-dinh-san-xuat',
    summary: 'Giám sát rung động và nhiệt độ máy tự động, phát hiện hỏng hóc sớm trước khi xảy ra dừng chuyền.',
  },
  {
    id: 'case-6',
    title: 'Copilot Tra Cứu Tri Thức Chuyên Gia Doanh Nghiệp',
    category: 'Dịch Vụ B2B',
    image: '/assets/vietnam-strategy-meeting.jpg',
    widthClass: 'w-[300px] sm:w-[340px] md:w-[380px]',
    heightClass: 'h-[200px] sm:h-[230px] md:h-[260px]',
    slug: 'content-factory-b2b-knowledge',
    summary: 'Rút ngắn thời gian tra cứu hồ sơ và quy chuẩn kỹ thuật từ 45 phút xuống 30 giây cho đội ngũ chuyên gia.',
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

export const CASE_STUDIES_DETAILS: Record<string, CaseStudyDetail> = {
  'toi-uu-chi-phi-tuyen-dung-hr-ai': {
    slug: 'toi-uu-chi-phi-tuyen-dung-hr-ai',
    title: 'Tối Ưu Tuyển Dụng & Sàng Lọc CV Tự Động Cho Chuỗi Bán Lẻ',
    client: 'Chuỗi Bán Lẻ Thời Trang & Hàng Tiêu Dùng',
    category: 'Bán Lẻ & FMCG',
    scale: '500 nhân sự · Đội HR 4 người · 45 điểm bán',
    image: '/assets/vietnam-retail-store.jpg',
    challenge:
      'Mỗi đợt tuyển dụng mở rộng hoặc cao điểm lễ tết, đội HR 4 người phải tiếp nhận hơn 800 CV đổ về. Họ mất từ 3 đến 4 ngày làm việc thủ công chỉ để mở từng file, kiểm tra tiêu chí ca kíp và gọi điện hẹn giờ phỏng vấn. Tốc độ chậm trễ khiến ứng viên tốt bỏ sang đối thủ, đồng thời các cửa hàng trưởng liên tục phàn nàn vì thiếu nhân viên bán hàng giờ cao điểm.',
    solution:
      'Sunext triển khai Trụ cột 2 (Đào tạo Tầng 1 và 2 cho đội ngũ HR) kết hợp Trụ cột 4 (Tích hợp AI Resume Screener trực tiếp vào hệ thống ATS). Hệ thống tự động trích xuất thông tin, chấm điểm mức độ phù hợp ca kíp và tự động gửi tin nhắn hẹn lịch phỏng vấn. Đội HR chuyển từ đọc thủ công sang vai trò phỏng vấn chuyên sâu và đánh giá văn hóa.',
    pillarsInvolved: [
      { name: 'Trụ cột 2: Năng Lực Đội Ngũ', slug: 'nang-luc-doi-ngu' },
      { name: 'Trụ cột 4: Nền Tảng Công Nghệ', slug: 'nen-tang-cong-nghe' },
    ],
    industry: { name: 'Bán Lẻ & Hàng Tiêu Dùng', slug: 'ban-le-tieu-dung' },
    metrics: [
      {
        value: '-40%',
        label: 'Chi phí tuyển dụng thực tế',
        description: 'Tiết kiệm ngân sách đăng tin tuyển dụng và nguồn lực vận hành',
      },
      {
        value: '3 ngày → 2h',
        label: 'Thời gian sàng lọc hồ sơ',
        description: 'Rút ngắn thời gian từ lúc ứng viên nộp hồ sơ đến khi chốt danh sách phỏng vấn',
      },
      {
        value: '+25%',
        label: 'Tỷ lệ ứng viên đạt yêu cầu',
        description: 'Ứng viên được chọn lọc chuẩn xác theo tiêu chí ca trực của từng cửa hàng',
      },
    ],
  },
  'ai-vision-kiem-dinh-san-xuat': {
    slug: 'ai-vision-kiem-dinh-san-xuat',
    title: 'Hệ Thống Thị Giác Máy Tính AI Vision Kiểm Định Cơ Khí Chính Xác',
    client: 'Nhà Máy Chế Tạo Cơ Khí Phụ Tùng Xuất Khẩu',
    category: 'Sản Xuất Cơ Khí & Chế Tạo',
    scale: '800 công nhân · 6 dây chuyền sản xuất liên tục',
    image: '/assets/vietnam-manufacturing-line.jpg',
    challenge:
      'Công nhân kiểm định chất lượng (QA/QC) phải soi từng chi tiết cơ khí dưới ánh đèn công suất lớn suốt ca 8 tiếng. Sau 4 tiếng liên tục, mắt bắt đầu mỏi cơ học và việc bỏ sót các vết nứt vi mô, xước bề mặt hay sai lệch kích thước nhỏ là không thể tránh khỏi. Lỗi lọt tới tay khách hàng gây nguy cơ đền bù hợp đồng gia công quốc tế.',
    solution:
      'Sunext kết hợp Trụ cột 4 (Engineering Camera AI công nghiệp tại từng chuyền) và Trụ cột 5 (Kiến trúc dữ liệu hình ảnh thời gian thực). Hệ thống quét từng linh kiện đang chuyển động với tốc độ < 50ms, phát hiện sai sót tức thì, kích hoạt cơ cấu gạt phế phẩm tự động và cảnh báo lên màn hình quản đốc.',
    pillarsInvolved: [
      { name: 'Trụ cột 4: Nền Tảng Công Nghệ', slug: 'nen-tang-cong-nghe' },
      { name: 'Trụ cột 5: Kiến Trúc Dữ Liệu', slug: 'kien-truc-du-lieu' },
    ],
    industry: { name: 'Sản Xuất Cơ Khí & Chế Tạo', slug: 'san-xuat-che-tao' },
    metrics: [
      {
        value: '99.8%',
        label: 'Độ chính xác kiểm định tự động',
        description: 'Nhận diện vết xước, nứt vi mô và sai lệch kích thước tức thời',
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
  'content-factory-b2b-knowledge': {
    slug: 'content-factory-b2b-knowledge',
    title: 'B2B Content Factory & Engine Đóng Gói Tri Thức Chuyên Gia',
    client: 'Công Ty Tư Vấn Giải Pháp & Dịch Vụ Doanh Nghiệp',
    category: 'Dịch Vụ Doanh Nghiệp & B2B',
    scale: '200 nhân sự · Đội Marketing 4 người',
    image: '/assets/vietnam-b2b-office.jpg',
    challenge:
      'Tài sản quý nhất của doanh nghiệp tư vấn là kinh nghiệm thực chiến của các chuyên gia đầu ngành. Nhưng các chuyên gia luôn bận rộn với dự án khách hàng. Đội marketing thuê ngoài agency chỉ viết được những bài viết nông cạn, thiếu tính thuyết phục kỹ thuật. Hoạt động marketing hữu cơ (organic) bị tê liệt, công ty phụ thuộc hoàn toàn vào quan hệ cá nhân hoặc quảng cáo đắt đỏ.',
    solution:
      'Sunext tái thiết kế quy trình sản xuất tri thức (Trụ cột 3) và triển khai Custom GPT chuẩn Brand Voice (Trụ cột 2). Chuyên gia chỉ cần ghi âm chia sẻ ngắn hoặc cung cấp tài liệu kỹ thuật, AI Engine tự động cấu trúc thành bài viết chuyên sâu chuẩn văn phong công ty. Đội ngũ chỉ cần duyệt và bấm xuất bản đa kênh.',
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
        label: 'Tăng trưởng organic lead B2B',
        description: 'Khách hàng doanh nghiệp chủ động liên hệ sau 5 tháng xuất bản nhất quán',
      },
      {
        value: '0đ',
        label: 'Chi phí quảng cáo phát sinh',
        description: 'Tăng trưởng bền vững dựa trên tri thức nội bộ và uy tín thương hiệu',
      },
    ],
  },
};


