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
    image: '/assets/vietnam-retail-store.jpg',
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
    image: '/assets/vietnam-manufacturing-line.jpg',
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
    image: '/assets/vietnam-b2b-office.jpg',
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

export interface CaseStoryBeat {
  beatNumber: number;
  beatTitle: string;
  narrative: string;
}

export interface CaseStudyDetail {
  slug: string;
  title: string;
  client: string;
  category: string;
  scale: string;
  image: string;
  challenge: string;
  solution: string;
  storyBeats: CaseStoryBeat[];
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
    storyBeats: [
      {
        beatNumber: 1,
        beatTitle: 'Bối Cảnh Bình Thường: 60 Đến 80 Vị Trí Mỗi Quý, Vỏn Vẹn 4 Người',
        narrative: 'Tại chuỗi bán lẻ thời trang và tiêu dùng quy mô 500 nhân sự, mùa mở rộng điểm bán luôn đồng nghĩa với áp lực tuyển dụng khổng lồ. 60 đến 80 vị trí mới cần được lấp đầy trong thời gian ngắn để kịp ngày khai trương các cửa hàng mới. Cả bộ phận Nhân sự chỉ có 4 người gánh vác toàn bộ quy trình.',
      },
      {
        beatNumber: 2,
        beatTitle: 'Biến Cố & Nút Thắt: 3 Ngày Cho Một Hồ Sơ, Đội Ngũ Kiệt Sức',
        narrative: 'Hàng trăm hồ sơ đổ về mỗi tuần qua email và tin nhắn rời rạc. Đội ngũ HR mất trung bình 3 ngày chỉ để tải từng file CV, đọc lướt, gọi điện xác nhận ca kíp và sắp xếp lịch phỏng vấn. Cả đội gần như phải dừng mọi hoạt động đào tạo và gắn kết nội bộ khác chỉ để làm tác vụ phân loại cơ học.',
      },
      {
        beatNumber: 3,
        beatTitle: 'Bản Chất Vấn Đề: Công Cụ Rời Rạc & Thiếu Chuẩn Hóa Tiêu Chí',
        narrative: 'Vấn đề không phải là thiếu phần mềm ATS hay thiếu người. Vấn đề nằm ở chỗ đội ngũ chưa từng được trang bị phương pháp luận để dùng AI đặt tiêu chí sàng lọc đúng, khiến việc ứng dụng công cụ trước đây chỉ tạo thêm thao tác nhập liệu thay vì giải phóng sức lao động.',
      },
      {
        beatNumber: 4,
        beatTitle: 'Bước Ngoặt Đồng Hành: Đào Tạo Nâng Tầng Trước Khi Triển Khai Tool',
        narrative: 'Sunext cùng ban lãnh đạo thống nhất nguyên tắc: Không vội mua bot. Toàn bộ 4 chuyên viên HR được đào tạo nắm vững năng lực AI theo nghiệp vụ nhân sự (Tầng 1), sau đó tự tay chuẩn hóa lại ma trận tiêu chí tuyển dụng cho từng vị trí ca kíp (Tầng 2).',
      },
      {
        beatNumber: 5,
        beatTitle: 'Vũ Khí Giải Pháp: Agentic Screener Tích Hợp Thẳng Vào ATS',
        narrative: 'Hệ thống AI Resume Screener được tích hợp hai chiều vào phần mềm ATS quen thuộc. AI tự động đọc cấu trúc CV, chấm điểm độ phù hợp theo tiêu chí ca trực và tự động gửi link xác nhận phỏng vấn qua Zalo/Email cho ứng viên đạt chuẩn 24/7.',
      },
      {
        beatNumber: 6,
        beatTitle: 'Trạng Thái Mới & P&L: 3 Ngày Xuống 2 Giờ, Tiết Kiệm 40% Chi Phí',
        narrative: 'Thời gian sàng lọc hồ sơ rút ngắn ngoạn mục từ 3 ngày xuống còn 2 giờ. Chi phí tuyển dụng giảm 40%, trong khi tỷ lệ ứng viên đạt yêu cầu vào vòng phỏng vấn trực tiếp tăng 25%. Đội HR 4 người giờ đây tập trung trọn vẹn vào việc phỏng vấn sâu và thu hút nhân tài xuất sắc trước khi đối thủ kịp tiếp cận.',
      },
    ],
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
    storyBeats: [
      {
        beatNumber: 1,
        beatTitle: 'Bối Cảnh Bình Thường: 800 Công Nhân, 6 Dây Chuyền Chạy Ngày Đêm',
        narrative: 'Tại nhà máy sản xuất cơ khí chính xác xuất khẩu 800 nhân sự, từng chi tiết tiện phay phải đáp ứng dung sai micromet khắt khe từ các đối tác Nhật Bản và châu Âu. Công nhân kiểm định chất lượng (QA/QC) ngồi dọc băng chuyền soi từng sản phẩm dưới ánh đèn huỳnh quang công suất lớn.',
      },
      {
        beatNumber: 2,
        beatTitle: 'Biến Cố & Nút Thắt: Mỏi Mắt Cơ Học Sau 4 Tiếng & Rủi Ro Hủy Hợp Đồng',
        narrative: 'Dù công nhân rất lành nghề, mắt người không thể duy trì độ tập trung vi mô liên tục suốt ca 8 tiếng. Sau 4 tiếng làm việc, hiện tượng mỏi mắt cơ học khiến các vết nứt tóc, bọt khí bề mặt hoặc sai số góc vát dễ bị bỏ sót, đẩy tỷ lệ phế phẩm lọt sang lô hàng xuất khẩu lên mức báo động.',
      },
      {
        beatNumber: 3,
        beatTitle: 'Bản Chất Vấn Đề: Tăng Người Kiểm Tra Vòng 2 Chỉ Nhân Đôi Chi Phí',
        narrative: 'Ban giám đốc từng thử giải pháp tăng thêm trạm kiểm tra vòng hai, nhưng điều này chỉ làm tăng gấp đôi chi phí nhân công mà không giải quyết được nguyên nhân gốc rễ: giới hạn sinh học không thể tránh khỏi của mắt người.',
      },
      {
        beatNumber: 4,
        beatTitle: 'Bước Ngoặt Đồng Hành: Tích Hợp Thị Giác AI Trực Tiếp Tại Chuyền',
        narrative: 'Sunext khảo sát quy trình và đưa ra giải pháp AI Vision biên (Edge AI) gắn trực tiếp trên chuyền máy thay vì lắp đặt các hệ thống cồng kềnh. Đội ngũ kỹ sư nhà máy được huấn luyện để tự hiệu chỉnh mô hình nhận diện khuyết tật thực tế.',
      },
      {
        beatNumber: 5,
        beatTitle: 'Vũ Khí Giải Pháp: Camera Tốc Độ Cao < 50ms & Cơ Chế Gạt Phế Phẩm Tự Động',
        narrative: 'Hệ thống camera công nghiệp tốc độ cao quét từng chi tiết đang chuyển động trong chưa đầy 50 mili-giây, đối chiếu tự động với mô hình 3D chuẩn, lập tức kích hoạt piston khí nén gạt bỏ phế phẩm và hiển thị ảnh phóng đại lỗi trên bảng điều khiển quản đốc.',
      },
      {
        beatNumber: 6,
        beatTitle: 'Trạng Thái Mới & P&L: 99.8% Độ Chính Xác, Tỷ Lệ Lỗi Còn 1.5%',
        narrative: 'Hệ thống đạt độ chính xác kiểm định 99.8%, đưa tỷ lệ sản phẩm lỗi xuất xưởng xuống chỉ còn 1.5%. Công nhân QA chuyển từ tư thế cúi gập soi mắt sang vai trò chuyên gia phân tích nguyên nhân lỗi máy, bảo vệ vững chắc uy tín gia công quốc tế của nhà máy.',
      },
    ],
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
    storyBeats: [
      {
        beatNumber: 1,
        beatTitle: 'Bối Cảnh Bình Thường: 200 Nhân Sự & Kho Tri Thức Nằm Trong Đầu Chuyên Gia',
        narrative: 'Công ty tư vấn doanh nghiệp 200 nhân sự sở hữu đội ngũ chuyên gia dày dạn kinh nghiệm thực chiến. Nhưng mọi tri thức quý giá đều nằm rải rác trong sổ tay cá nhân và các báo cáo dự án cũ, không thể chuyển hóa thành tài liệu tiếp thị cho khách hàng mới.',
      },
      {
        beatNumber: 2,
        beatTitle: 'Biến Cố & Nút Thắt: Chuyên Gia Bận Dự Án, Agency Bên Ngoài Viết Nông',
        narrative: 'Đội ngũ marketing 4 người bế tắc: chuyên gia không có thời gian viết bài phân tích chuyên sâu, còn khi thuê agency bên ngoài thì chỉ nhận lại những bài viết bề nổi thiếu thuật ngữ kỹ thuật, không thể thuyết phục các giám đốc điều hành khó tính.',
      },
      {
        beatNumber: 3,
        beatTitle: 'Bản Chất Vấn Đề: Thiếu Pipeline Tự Động Chuyển Brief Thành Bài Chuyên Sâu',
        narrative: 'Vấn đề cốt lõi là doanh nghiệp chưa thiết lập được quy chuẩn Brand Voice Profile và luồng khai thác tri thức thô. Chuyên gia ngại viết dài, trong khi marketing không đủ thẩm quyền chuyên môn để tự sáng tác.',
      },
      {
        beatNumber: 4,
        beatTitle: 'Bước Ngoặt Đồng Hành: Đóng Gói Tri Thức Theo Mô Hình Content Factory',
        narrative: 'Sunext tái thiết kế quy trình sản xuất nội dung: Đào tạo đội marketing Tầng 2, xây dựng Custom GPT Engine nạp toàn bộ thư viện giải pháp cũ và định hình phong cách hành văn chuẩn mực của ban cố vấn.',
      },
      {
        beatNumber: 5,
        beatTitle: 'Vũ Khí Giải Pháp: 10 Phút Ghi Âm Trở Thành Bài Phân Tích Kỹ Thuật Đa Kênh',
        narrative: 'Quy trình mới chỉ đòi hỏi chuyên gia gửi 1 file ghi âm ngắn 10 phút hoặc tài liệu kỹ thuật thô. AI Engine tự động trích xuất luận điểm, mở rộng dẫn chứng và tạo khung bài viết hoàn chỉnh. Đội ngũ marketing chỉ cần biên tập và duyệt chất lượng.',
      },
      {
        beatNumber: 6,
        beatTitle: 'Trạng Thái Mới & P&L: Tăng Tốc x5 Sản Xuất, Tăng 60% Organic Traffic',
        narrative: 'Tốc độ xuất bản tăng gấp 5 lần, lưu lượng truy cập tự nhiên (Organic traffic) tăng trưởng 60% sau 5 tháng mà không tốn một đồng chi phí quảng cáo. Doanh nghiệp khẳng định vững chắc vị thế chuyên gia đầu ngành trong mắt khách hàng B2B.',
      },
    ],
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
    storyBeats: [
      {
        beatNumber: 1,
        beatTitle: 'Bối Cảnh Bình Thường: 30+ Chuyên Viên Phân Tích Đối Mặt Hàng Trăm BCTC Quý',
        narrative: 'Khối Nghiên cứu & Phân tích Khách hàng Tổ chức tại Vietcap Securities chịu trách nhiệm thẩm định định giá hàng trăm doanh nghiệp niêm yết trên sàn chứng khoán. Đây là những báo cáo mang tính quyết định đến quyết định giải ngân hàng nghìn tỷ đồng của các quỹ đầu tư.',
      },
      {
        beatNumber: 2,
        beatTitle: 'Biến Cố & Nút Thắt: 2 Ngày Nhập Liệu Thủ Công Cho Từng Báo Cáo',
        narrative: 'Khi mùa báo cáo quý ập đến, các chuyên viên cao cấp phải dành trung bình 2 ngày làm việc chỉ để bóc tách thủ công các bảng số liệu, dòng tiền và thuyết minh dài 80-120 trang vào bảng tính Excel. Áp lực thời gian đè nặng và rủi ro gõ sai một con số cơ học có thể làm lệch toàn bộ mô hình DCF.',
      },
      {
        beatNumber: 3,
        beatTitle: 'Bản Chất Vấn Đề: Dữ Liệu BCTC Bị Bẫy Trong Các Tệp PDF Không Chuẩn Hóa',
        narrative: 'Các doanh nghiệp niêm yết công bố BCTC dưới dạng PDF scan hoặc định dạng không đồng nhất. Phần mềm OCR thông thường không thể nhận diện được các bảng biểu phức tạp và ghi chú chân trang có tính logic tài chính cao.',
      },
      {
        beatNumber: 4,
        beatTitle: 'Bước Ngoặt Đồng Hành: Thiết Lập Kiến Trúc Multi-Agent Chuyên Nghiệp',
        narrative: 'Đội ngũ chuyên gia Sunext cùng CAIO Nguyễn Phước Vĩnh Hưng và các cố vấn tài chính kỳ cựu thiết kế hệ sinh thái Multi-Agent chuyên biệt cho khối nghiên cứu chứng khoán, kết hợp cơ chế kiểm tra chéo số liệu hai chiều.',
      },
      {
        beatNumber: 5,
        beatTitle: 'Vũ Khí Giải Pháp: Agent Bóc Tách BCTC & Agent Đối Chiếu Second Brain',
        narrative: 'Hệ thống gồm Agent chuyên bóc tách cấu trúc BCTC thô, Agent đối chiếu logic kế toán giữa bảng cân đối và lưu chuyển tiền tệ, kết hợp Agent truy vấn Second Brain và Social Listening cập nhật tin tức ngành theo thời gian thực.',
      },
      {
        beatNumber: 6,
        beatTitle: 'Trạng Thái Mới & P&L: Giảm 75% Thời Gian, Ra Báo Cáo Trong 3 Giờ',
        narrative: 'Thời gian bóc tách BCTC giảm 75%, chu kỳ hoàn thành Báo cáo Cập nhật Doanh nghiệp rút ngắn từ 2 ngày xuống chỉ còn 3 giờ. Sai lệch số liệu cơ học được loại bỏ hoàn toàn, chuyên viên phân tích tập trung toàn lực vào nhận định thị trường sắc bén.',
      },
    ],
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
    storyBeats: [
      {
        beatNumber: 1,
        beatTitle: 'Bối Cảnh Bình Thường: 500+ Chuyên Viên Đua Tranh Từng Giao Dịch Dự Án Lớn',
        narrative: 'Tại các đại dự án bất động sản cao cấp, mạng lưới hơn 500 môi giới hoạt động với nhịp độ khẩn trương. Khách hàng VIP đòi hỏi thông tin chính sách chiết khấu, tiến độ thanh toán và phối cảnh thực địa chi tiết ngay khi có sự kiện mở bán.',
      },
      {
        beatNumber: 2,
        beatTitle: 'Biến Cố & Nút Thắt: Phản Hồi Chậm Khiến Khách Hàng Chuyển Sàn Khác',
        narrative: 'Môi giới phải tra cứu giỏ hàng qua các nhóm chat hỗn loạn, tự gõ văn bản báo giá và chờ đợi đội media trung tâm gửi video tiến độ. Thời gian phản hồi mất hàng giờ, thậm chí sang ngày hôm sau, khiến hàng nghìn khách hàng tiềm năng mất kiên nhẫn.',
      },
      {
        beatNumber: 3,
        beatTitle: 'Bản Chất Vấn Đề: Bỏ Quên 70% Tệp Khách Hàng Cũ & Thiếu Vũ Khí Visual',
        narrative: 'Các sàn giao dịch chi hàng trăm triệu cho quảng cáo nhưng bỏ quên tệp khách hàng cũ vì không có công cụ tự động kích hoạt lại (lead reactivation). Nhân viên kinh doanh thiếu công cụ làm video hiện trường thực tế để tạo niềm tin.',
      },
      {
        beatNumber: 4,
        beatTitle: 'Bước Ngoặt Đồng Hành: Huấn Luyện Thực Chiến Sales Enablement Trên Điện Thoại',
        narrative: 'Sunext tổ chức chương trình đào tạo cầm tay chỉ việc cho 500+ nhân sự kinh doanh: Hướng dẫn kỹ năng prompt nghiệp vụ BĐS, tự sản xuất landing page giới thiệu dự án và tạo video thực địa AI ngay trên điện thoại.',
      },
      {
        beatNumber: 5,
        beatTitle: 'Vũ Khí Giải Pháp: Trợ Lý Ảo Tra Cứu Giỏ Hàng 24/7 & Kịch Bản Chăm Sóc Đa Phân Khúc',
        narrative: 'Thiết lập Trợ lý ảo AI nạp trọn bộ tài liệu pháp lý và giỏ hàng dự án (với case study tiêu biểu tại dự án Vinhomes Paradise Cần Giờ). Môi giới có thể trích xuất bảng tính vay ngân hàng và kịch bản chăm sóc khách hàng trong 30 giây.',
      },
      {
        beatNumber: 6,
        beatTitle: 'Trạng Thái Mới & P&L: Phản Hồi Dưới 5 Phút, Nhân Đôi Tỷ Lệ Đặt Lịch Hẹn',
        narrative: 'Tốc độ phản hồi khách hàng rút xuống dưới 5 phút, sản lượng video thực địa tăng gấp 3 lần. Môi giới chủ động tiếp cận lại tệp khách hàng cũ với nội dung chuẩn xác, gia tăng tỷ lệ hẹn gặp thực địa và chốt cọc thành công.',
      },
    ],
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
    storyBeats: [
      {
        beatNumber: 1,
        beatTitle: 'Bối Cảnh Bình Thường: Cuộc Đua Đấu Thầu Tài Trợ Thể Thao & Thương Hiệu Lớn',
        narrative: 'Tại Dentsu Sports Vietnam & Creative, mỗi hồ sơ đấu thầu tài trợ thể thao đỉnh cao đòi hỏi phân tích chuyên sâu về dữ liệu khán giả, giá trị truyền thông và kế hoạch kích hoạt thương hiệu phức tạp.',
      },
      {
        beatNumber: 2,
        beatTitle: 'Biến Cố & Nút Thắt: Thâu Đêm Suốt Tuần Soạn Deck, Hạn Chế Số Lượng Thầu',
        narrative: 'Thời hạn nộp brief từ các tập đoàn nhãn hàng chỉ từ 7 đến 10 ngày. Đội ngũ 25 chuyên viên chiến lược và account phải làm việc thâu đêm chỉ để tổng hợp số liệu khảo sát, dựng khung slide và dàn trang thủ công.',
      },
      {
        beatNumber: 3,
        beatTitle: 'Bản Chất Vấn Đề: Quá Nhiều Thời Gian Tiêu Tốn Cho Định Dạng Cơ Học',
        narrative: 'Hơn 60% thời gian của các chuyên gia chiến lược bị lãng phí vào việc format slide, tìm hình minh họa và diễn đạt lại các số liệu thị trường thay vì tập trung trau chuốt thông điệp sáng tạo cốt lõi.',
      },
      {
        beatNumber: 4,
        beatTitle: 'Bước Ngoặt Đồng Hành: Chuẩn Hóa Storyline & Automation Pipeline Cùng Sunext',
        narrative: 'Sunext thiết lập quy trình làm việc chuẩn hóa kết hợp AI: Tự động hóa khâu phân tích dữ liệu thể thao, cấu trúc mạch câu chuyện (Storyline framework) và tạo khung proposal chuẩn nhận diện thương hiệu.',
      },
      {
        beatNumber: 5,
        beatTitle: 'Vũ Khí Giải Pháp: AI Proposal Engine & Prompting Sáng Tạo Chuyên Sâu',
        narrative: 'Đội ngũ chuyên viên được trang bị thư viện prompt chiến lược, biến brief thô thành bản đề xuất hoàn chỉnh trong vài giờ. Các chuyên gia giữ vai trò phản biện sắc bén và tối ưu hóa Big Idea mang tính quyết định.',
      },
      {
        beatNumber: 6,
        beatTitle: 'Trạng Thái Mới & P&L: Rút Ngắn 65% Thời Gian, Tăng Tỷ Lệ Thắng Thầu',
        narrative: 'Thời gian phát triển proposal rút ngắn 65%, tốc độ phản hồi brief tăng 35%. Agency tự tin tham gia gấp đôi số lượng hồ sơ thầu mỗi quý mà không cần mở rộng quy mô nhân sự, nâng cao rõ rệt tỷ lệ chốt tài trợ.',
      },
    ],
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
    storyBeats: [
      {
        beatNumber: 1,
        beatTitle: 'Bối Cảnh Bình Thường: 300 Môi Giới Bám Trụ Hiện Trường Dự Án Bình Dương',
        narrative: 'Tại các dự án đô thị và đất nền của Phương Trường An Group, tiến độ làm đường, trồng cây và hoàn thiện hạ tầng diễn ra từng ngày. Khách hàng ở xa đòi hỏi video quay thực tế liên tục để yên tâm xuống tiền.',
      },
      {
        beatNumber: 2,
        beatTitle: 'Biến Cố & Nút Thắt: Đội Media Quá Tải, Thuê Ngoài Mất 7 Ngày & Chi Phí Cao',
        narrative: 'Phòng truyền thông nội bộ chỉ có vài người, không thể theo chân hàng trăm môi giới đi quay. Thuê đơn vị ngoài thì chi phí lên tới hàng chục triệu cho mỗi clip và mất 5-7 ngày chờ duyệt file, lúc nhận video thì tiến độ công trường đã thay đổi.',
      },
      {
        beatNumber: 3,
        beatTitle: 'Bản Chất Vấn Đề: Nhân Sự Kinh Doanh E Ngại Kỹ Thuật Dựng Video Phức Tạp',
        narrative: 'Môi giới có mặt hàng ngày tại công trường nhưng không biết cách quay góc nào cho đẹp, ngại nói trước ống kính và không biết sử dụng các phần mềm dựng phim máy tính nặng nề.',
      },
      {
        beatNumber: 4,
        beatTitle: 'Bước Ngoặt Đồng Hành: Chuyển Giao Quy Trình Sản Xuất Video AI Tinh Gọn',
        narrative: 'Sunext thiết kế khóa huấn luyện thực chiến tại hiện trường: Đơn giản hóa toàn bộ khâu làm video thành quy trình 4 bước thực hiện hoàn toàn trên chiếc điện thoại thông minh cá nhân.',
      },
      {
        beatNumber: 5,
        beatTitle: 'Vũ Khí Giải Pháp: Viết Script Bằng AI, Giọng Đọc Chuyên Nghiệp & Dựng Tự Động',
        narrative: 'Nhân viên chỉ cần quay các đoạn clip ngắn 5 giây thực địa. AI hỗ trợ viết kịch bản dẫn nhập thu hút, tạo giọng đọc thuyết minh trầm ấm chuẩn phát thanh viên và tự động cắt ghép, chèn chữ quy hoạch trong 15 phút.',
      },
      {
        beatNumber: 6,
        beatTitle: 'Trạng Thái Mới & P&L: Tăng 200% Sản Lượng Video, Xuất Bản Trong 24H',
        narrative: 'Sản lượng video thực địa do chính môi giới tự sản xuất tăng hơn 200%, chu kỳ xuất bản rút ngắn từ 7 ngày xuống trong vòng 24 giờ. Doanh nghiệp tiết kiệm 100% chi phí thuê ngoài media, độ phủ thương hiệu bùng nổ trên các nền tảng video ngắn.',
      },
    ],
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
    storyBeats: [
      {
        beatNumber: 1,
        beatTitle: 'Bối Cảnh Bình Thường: Đòi Hỏi Đổi Mới Giáo Trình Đại Học Trong Kỷ Nguyên AI',
        narrative: 'Là trường đại học công nghệ tiên phong, Đại học FPT luôn đi đầu trong việc cập nhật xu hướng công nghệ mới nhất cho sinh viên và nâng chuẩn năng lực sư phạm của toàn thể đội ngũ giảng viên.',
      },
      {
        beatNumber: 2,
        beatTitle: 'Biến Cố & Nút Thắt: Sinh Viên Dùng AI Tự Phát, Giảng Viên Cần Chuẩn Bậc 6',
        narrative: 'Sự xuất hiện của các mô hình ngôn ngữ lớn khiến việc giao bài tập truyền thống bị thử thách. Giảng viên đối mặt với áp lực phải nâng cấp phương pháp dạy học theo khung chuẩn Bậc 6, chuyển từ kiểm tra ghi nhớ sang đánh giá tư duy phản biện.',
      },
      {
        beatNumber: 3,
        beatTitle: 'Bản Chất Vấn Đề: Cấm Đoán Không Phải Là Giải Pháp Bền Vững',
        narrative: 'Bản chất vấn đề không phải là ngăn chặn sinh viên sử dụng AI, mà là hướng dẫn cả giảng viên lẫn sinh viên cách đặt vấn đề sâu sắc, phản biện kết quả của AI và ứng dụng vào giải quyết bài toán thực tế của doanh nghiệp.',
      },
      {
        beatNumber: 4,
        beatTitle: 'Bước Ngoặt Đồng Hành: Chương Trình Đào Tạo Chuẩn Bậc 6 Cùng Sunext',
        narrative: 'CAIO Nguyễn Phước Vĩnh Hưng trực tiếp chủ trì chương trình đào tạo Train-the-Trainer nâng bậc giảng viên chuẩn Bậc 6 tại FPTU TP.HCM và hybrid Hà Nội, đưa chuyên đề "Critical Thinking in the AI Era" vào thực hành.',
      },
      {
        beatNumber: 5,
        beatTitle: 'Vũ Khí Giải Pháp: MC Ảo AI & Mạng Lưới AI Agents (n8n) Tại Tech Fest',
        narrative: 'Bên cạnh đào tạo học thuật, Sunext đồng hành triển khai hệ thống MC ảo AI và luồng AI Agents tự động hóa tiếp đón, giải đáp thông tin sự kiện tại Ngày hội Công nghệ Tech Fest trong hai mùa liên tiếp.',
      },
      {
        beatNumber: 6,
        beatTitle: 'Trạng Thái Mới & P&L: 100% GV Hoàn Thành Chuẩn Bậc 6, 10.000+ Người Tương Tác',
        narrative: '100% giảng viên hoàn thành đánh giá năng lực sư phạm AI. Sự kiện Tech Fest 2026 thu hút hơn 10.000 lượt người tham gia trải nghiệm và kết nối hợp tác cùng ~60 doanh nghiệp công nghệ, được đông đảo cơ quan báo chí chính thống đưa tin ghi nhận.',
      },
    ],
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


