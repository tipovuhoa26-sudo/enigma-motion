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
    title: 'Multi-Agent Đối Chiếu Báo Cáo Tài Chính Tự Động',
    category: 'Chứng Khoán & Đầu Tư',
    image: '/assets/vietnam-strategy-meeting.jpg',
    widthClass: 'w-[340px] sm:w-[380px] md:w-[420px]',
    heightClass: 'h-[240px] sm:h-[270px] md:h-[300px]',
    slug: 'vietcap-ai-multi-agent-nghien-cuu-thi-truong',
    summary: 'Vietcap Securities: Giảm 75% thời gian bóc tách BCTC, rút ngắn chu kỳ xuất bản báo cáo phân tích từ 2 ngày xuống 3 giờ.',
  },
  {
    id: 'case-5',
    title: 'AI Sales Enablement & Lead Reactivation Bất Động Sản',
    category: 'Bất Động Sản & Nhà Phố',
    image: '/assets/vietnam-retail-store.jpg',
    widthClass: 'w-[310px] sm:w-[350px] md:w-[390px]',
    heightClass: 'h-[210px] sm:h-[240px] md:h-[270px]',
    slug: 'vinhomes-ai-sales-enablement',
    summary: 'Mạng lưới 500+ nhân sự kinh doanh: Tự động hóa sản xuất video thực địa, kịch bản tư vấn và trợ lý ảo thông tin dự án.',
  },
  {
    id: 'case-6',
    title: 'Chuẩn Hóa Quy Trình Pitch Deck Đấu Thầu Quốc Tế',
    category: 'Truyền Thông & Sáng Tạo',
    image: '/assets/vietnam-b2b-office.jpg',
    widthClass: 'w-[300px] sm:w-[340px] md:w-[380px]',
    heightClass: 'h-[200px] sm:h-[230px] md:h-[260px]',
    slug: 'dentsu-ai-pitch-deck-automation',
    summary: 'Dentsu Sports & Creative: Rút ngắn 65% thời gian phát triển proposal đấu thầu tài trợ và chiến dịch thương hiệu.',
  },
  {
    id: 'case-7',
    title: 'Tự Động Hóa Sản Xuất Video Thực Địa Trên Di Động',
    category: 'Bất Động Sản & Nhà Phố',
    image: '/assets/vietnam-manufacturing-line.jpg',
    widthClass: 'w-[320px] sm:w-[360px] md:w-[400px]',
    heightClass: 'h-[220px] sm:h-[250px] md:h-[280px]',
    slug: 'phuong-truong-an-video-ai-hien-truong',
    summary: 'Phương Trường An Group: Tăng 200% sản lượng video hiện trường do nhân sự tự quay dựng trực tiếp trên điện thoại.',
  },
  {
    id: 'case-8',
    title: 'Đào Tạo Giảng Viên Chuẩn Bậc 6 & AI Event Management',
    category: 'Giáo Dục & Công Nghệ',
    image: '/assets/vietnam-strategy-meeting.jpg',
    widthClass: 'w-[330px] sm:w-[370px] md:w-[410px]',
    heightClass: 'h-[230px] sm:h-[260px] md:h-[290px]',
    slug: 'fptu-nang-bac-giang-vien-ai',
    summary: 'Đại học FPT: Đào tạo nâng bậc giảng viên chuẩn Bậc 6 và điều phối hệ thống AI Agents phục vụ 10.000+ người tại Tech Fest.',
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
    value: '-75%',
    label: 'Thời gian bóc tách dữ liệu báo cáo tài chính thô',
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
  'vietcap-ai-multi-agent-nghien-cuu-thi-truong': {
    slug: 'vietcap-ai-multi-agent-nghien-cuu-thi-truong',
    title: 'Hệ Thống Multi-Agent Phân Tích & Đối Chiếu Báo Cáo Tài Chính Tự Động',
    client: 'Vietcap Securities (VCI) — Khối Phân Tích & Nghiên Cứu',
    category: 'Chứng Khoán & Đầu Tư',
    scale: '30+ Chuyên viên Phân tích & Khối Nghiên cứu Khách hàng Tổ chức',
    image: '/assets/vietnam-strategy-meeting.jpg',
    challenge:
      'Mỗi mùa công bố kết quả kinh doanh quý, hơn 30 chuyên viên phân tích cao cấp tại Vietcap Securities đối mặt với hàng trăm báo cáo tài chính dài từ 60 đến 120 trang mỗi bản. Họ phải mất trung bình 2 ngày làm việc thủ công cho mỗi doanh nghiệp chỉ để bóc tách từng con số trên bảng cân đối kế toán, lưu chuyển tiền tệ và thuyết minh phức tạp. Tác vụ gõ số cơ học gây áp lực nặng nề và tiềm ẩn nguy cơ sai lệch dữ liệu định giá trong các báo cáo khuyến nghị quan trọng gửi nhà đầu tư tổ chức.',
    solution:
      'Đội ngũ chuyên gia Sunext (dẫn dắt bởi CAIO Nguyễn Phước Vĩnh Hưng) thiết lập hệ thống AI Multi-Agent chuyên sâu cho khối phân tích: Agent tự động trích xuất và đối chiếu BCTC thô, Agent truy vấn Second Brain và Social Listening cập nhật thông tin ngành theo thời gian thực. Chuyên viên phân tích chuyển từ vai trò nhập liệu cơ học sang thẩm định các giả định mô hình tài chính và tối ưu hóa nhận định chiến lược, nâng cao chất lượng báo cáo đầu tư.',
    pillarsInvolved: [
      { name: 'Trụ cột 4: Nền Tảng Công Nghệ', slug: 'nen-tang-cong-nghe' },
      { name: 'Trụ cột 5: Kiến Trúc Dữ Liệu', slug: 'kien-truc-du-lieu' },
    ],
    industry: { name: 'Dịch Vụ Doanh Nghiệp & B2B', slug: 'dich-vu-b2b' },
    metrics: [
      {
        value: '-75%',
        label: 'Thời gian bóc tách BCTC thô',
        description: 'Giải phóng toàn bộ thời gian đối chiếu thủ công các chỉ số tài chính phức tạp',
      },
      {
        value: '2 ngày → 3h',
        label: 'Chu kỳ xuất bản Báo cáo Cập nhật Doanh nghiệp',
        description: 'Tăng tốc độ phản ứng với diễn biến thị trường và kết quả kinh doanh quý',
      },
      {
        value: '100%',
        label: 'Loại bỏ hoàn toàn sai lệch số liệu cơ học',
        description: 'Cơ chế đối soát hai chiều bảo đảm tính chuẩn xác của các biến số mô hình',
      },
    ],
  },
  'vinhomes-ai-sales-enablement': {
    slug: 'vinhomes-ai-sales-enablement',
    title: 'AI Sales Enablement & Tự Động Hóa Chăm Sóc Khách Hàng Bất Động Sản',
    client: 'Mạng Lưới Kinh Doanh & Phân Phối Bất Động Sản (Dự án tiêu biểu: Vinhomes)',
    category: 'Bất Động Sản & Nhà Phố',
    scale: '500+ Chuyên viên Kinh doanh BĐS',
    image: '/assets/vietnam-retail-store.jpg',
    challenge:
      'Trong các chiến dịch mở bán dự án quy mô lớn, mạng lưới hơn 500 nhân sự kinh doanh bất động sản phải xử lý lượng yêu cầu thông tin khổng lồ từ khách hàng. Tuy nhiên, việc tra cứu giỏ hàng, cập nhật chính sách bán hàng và soạn kịch bản tư vấn thực địa theo từng phân khúc diễn ra thủ công và rời rạc. Tốc độ phản hồi chậm khiến tỷ lệ kích hoạt lại tệp khách hàng cũ (lead reactivation) sụt giảm, nhiều cơ hội giao dịch giá trị cao bị bỏ lỡ.',
    solution:
      'Chương trình đào tạo thực chiến kết hợp triển khai công cụ AI giúp đội ngũ kinh doanh tự sản xuất trang giới thiệu dự án chuyên nghiệp, dựng video tư vấn thực địa bằng AI và thiết lập trợ lý ảo giải đáp chính sách bán hàng 24/7 (với case study tiêu biểu tại dự án Vinhomes). Chuyên viên kinh doanh chủ động phản hồi khách hàng trong chưa đầy 5 phút với tài liệu tư vấn được cá nhân hóa sâu sắc.',
    pillarsInvolved: [
      { name: 'Trụ cột 2: Năng Lực Đội Ngũ', slug: 'nang-luc-doi-ngu' },
      { name: 'Trụ cột 3: Mô Hình Vận Hành', slug: 'mo-hinh-van-hanh' },
    ],
    industry: { name: 'Bất Động Sản & Nhà Phố', slug: 'bat-dong-san' },
    metrics: [
      {
        value: '500+',
        label: 'Nhân sự kinh doanh làm chủ công cụ AI thực chiến',
        description: 'Nâng cao năng lực tự sản xuất tài liệu và kịch bản chăm sóc khách hàng',
      },
      {
        value: '< 5 phút',
        label: 'Thời gian phản hồi thông tin dự án',
        description: 'Tăng tốc độ tương tác tức thời khi khách hàng phát sinh nhu cầu tìm hiểu',
      },
      {
        value: 'x3',
        label: 'Tốc độ sản xuất video & trang giới thiệu dự án',
        description: 'Tự động hóa truyền thông thực địa mà không phụ thuộc vào đội thiết kế trung tâm',
      },
    ],
  },
  'dentsu-ai-pitch-deck-automation': {
    slug: 'dentsu-ai-pitch-deck-automation',
    title: 'Quy Trình AI Chuẩn Hóa Proposal & Pitch Deck Đấu Thầu Quốc Tế',
    client: 'Dentsu Sports Vietnam & Creative Agency',
    category: 'Truyền Thông & Sáng Tạo',
    scale: '25 Chuyên viên Chiến lược & Account Director',
    image: '/assets/vietnam-b2b-office.jpg',
    challenge:
      'Các agency truyền thông quốc tế thường xuyên phải tham gia những đợt đấu thầu tài trợ thể thao và chiến dịch thương hiệu lớn với thời hạn gấp gáp. Đội ngũ 25 chuyên viên chiến lược và account phải mất hàng tuần phân tích insight người tiêu dùng, dựng storyline và thiết kế pitch deck hàng trăm trang. Áp lực thời gian kéo dài khiến nhân sự kiệt sức, làm hạn chế số lượng hồ sơ thầu mà công ty có thể tham gia mỗi quý.',
    solution:
      'Sunext đồng hành chuẩn hóa quy trình AI dựng storyline pitching, tổng hợp dữ liệu nghiên cứu thị trường thể thao và tự động hóa khung dàn trang theo brand guideline chuẩn mực. Chuyên viên chiến lược giải phóng thời gian khỏi các khâu soạn thảo cơ học để tập trung tối đa vào việc mài sắc ý tưởng lớn (Big Idea) và phản biện chiến lược, gia tăng đáng kể tỷ lệ chốt tài trợ.',
    pillarsInvolved: [
      { name: 'Trụ cột 2: Năng Lực Đội Ngũ', slug: 'nang-luc-doi-ngu' },
      { name: 'Trụ cột 3: Mô Hình Vận Hành', slug: 'mo-hinh-van-hanh' },
    ],
    industry: { name: 'Dịch Vụ Doanh Nghiệp & B2B', slug: 'dich-vu-b2b' },
    metrics: [
      {
        value: '-65%',
        label: 'Thời gian phát triển proposal đấu thầu',
        description: 'Rút ngắn chu kỳ từ khi nhận brief khách hàng đến bản pitch deck hoàn chỉnh',
      },
      {
        value: '+35%',
        label: 'Tốc độ phản hồi yêu cầu chiến dịch',
        description: 'Phản ứng nhanh với các cơ hội tài trợ thể thao đột xuất',
      },
      {
        value: 'x2',
        label: 'Số lượng hồ sơ thầu chất lượng cao mỗi quý',
        description: 'Gia tăng năng lực cạnh tranh và mở rộng doanh thu mà không cần tuyển thêm nhân sự',
      },
    ],
  },
  'phuong-truong-an-video-ai-hien-truong': {
    slug: 'phuong-truong-an-video-ai-hien-truong',
    title: 'Tự Động Hóa Sản Xuất Video Thực Địa Bất Động Sản Trên Thiết Bị Di Động',
    client: 'Phương Trường An Group (Bất Động Sản Thương Mại & Đất Nền)',
    category: 'Bất Động Sản & Nhà Phố',
    scale: '~300 Nhân sự Kinh doanh & Marketing',
    image: '/assets/vietnam-manufacturing-line.jpg',
    challenge:
      'Tại các dự án đất nền và bất động sản thương mại tại Bình Dương, khách hàng luôn đòi hỏi video cập nhật tiến độ hạ tầng và pháp lý thực tế liên tục. Tuy nhiên, đội ngũ marketing nội bộ chỉ vài người không thể đáp ứng khối lượng video cho gần 300 chuyên viên kinh doanh ngoài hiện trường. Chi phí thuê ngoài quay dựng đắt đỏ và thời gian chờ đợi sản phẩm mất cả tuần khiến thông tin bị nguội.',
    solution:
      'Chương trình đào tạo chuyên sâu giúp toàn bộ nhân viên kinh doanh làm chủ quy trình sản xuất video AI trọn gói ngay trên điện thoại: từ viết kịch bản dẫn nhập, tạo thuyết minh lồng tiếng AI đến dựng hiệu ứng và chèn thông số quy hoạch tự động. Nhân viên có thể hoàn thành và phát hành video thực địa sắc nét trong vòng 24 giờ sau khi khảo sát dự án.',
    pillarsInvolved: [
      { name: 'Trụ cột 2: Năng Lực Đội Ngũ', slug: 'nang-luc-doi-ngu' },
      { name: 'Trụ cột 3: Mô Hình Vận Hành', slug: 'mo-hinh-van-hanh' },
    ],
    industry: { name: 'Bất Động Sản & Nhà Phố', slug: 'bat-dong-san' },
    metrics: [
      {
        value: '+200%',
        label: 'Sản lượng video hiện trường tự sản xuất',
        description: 'Toàn bộ đội ngũ chủ động tạo nội dung đa kênh mà không chờ đợi phòng thiết kế',
      },
      {
        value: '24h',
        label: 'Chu kỳ xuất bản video tiến độ dự án',
        description: 'Rút ngắn từ 7 ngày xuống trong ngày, nắm bắt kịp thời nhu cầu khách hàng',
      },
      {
        value: '0đ',
        label: 'Chi phí phát sinh thuê ngoài sản xuất video',
        description: 'Tối ưu hóa triệt để ngân sách truyền thông dự án của doanh nghiệp',
      },
    ],
  },
  'fptu-nang-bac-giang-vien-ai': {
    slug: 'fptu-nang-bac-giang-vien-ai',
    title: 'Chương Trình Đào Tạo Chuẩn Bậc 6 & Ứng Dụng AI Agents Tại Đại Học FPT',
    client: 'Đại Học FPT (FPTU) & Ngày Hội Công Nghệ Tech Fest',
    category: 'Giáo Dục & Công Nghệ',
    scale: 'Toàn bộ Giảng viên FPTU HCM & Hybrid HN + 10.000+ sinh viên & khách tham dự Tech Fest',
    image: '/assets/vietnam-strategy-meeting.jpg',
    challenge:
      'Sự bùng nổ của AI tạo sinh đặt ra thách thức lớn đối với môi trường giáo dục đại học. Giảng viên cần nhanh chóng cập nhật năng lực ứng dụng AI theo chuẩn Bậc 6 để thiết kế bài giảng mang tính tư duy phản biện cao. Đồng thời, tại các sự kiện công nghệ quy mô lớn như Tech Fest, ban tổ chức cần giải pháp điều phối, tương tác và trình diễn công nghệ đột phá cho hàng chục nghìn lượt khách tham gia.',
    solution:
      'Triển khai chương trình đào tạo nâng bậc giảng viên chuẩn Bậc 6, đưa chuyên đề "Critical Thinking in the AI Era" vào chương trình đào tạo; song song tích hợp hệ thống MC ảo AI và các luồng AI Agents (n8n) tự động hóa điều phối sự kiện tại Tech Fest trong hai mùa liên tiếp. Chương trình được đông đảo cơ quan báo chí và truyền hình đưa tin ghi nhận tính tiên phong.',
    pillarsInvolved: [
      { name: 'Trụ cột 2: Năng Lực Đội Ngũ', slug: 'nang-luc-doi-ngu' },
      { name: 'Trụ cột 4: Nền Tảng Công Nghệ', slug: 'nen-tang-cong-nghe' },
    ],
    industry: { name: 'Dịch Vụ Doanh Nghiệp & B2B', slug: 'dich-vu-b2b' },
    metrics: [
      {
        value: '10.000+',
        label: 'Lượt người tham gia trải nghiệm AI tại Tech Fest 2026',
        description: 'Quy mô tương tác thực tế đã được các cơ quan báo chí xác nhận công khai',
      },
      {
        value: '~60',
        label: 'Doanh nghiệp công nghệ liên kết hệ sinh thái',
        description: 'Kết nối hiệu quả giữa năng lực đào tạo và nhu cầu tuyển dụng thực tiễn',
      },
      {
        value: '100%',
        label: 'Giảng viên hoàn thành kiểm tra năng lực sư phạm AI',
        description: 'Đáp ứng chuẩn mực nâng cấp giáo trình và phương pháp giảng dạy thời kỳ mới',
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


