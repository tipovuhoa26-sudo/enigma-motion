export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  roleInSunext: string;
  blockId: 'marketing' | 'operations' | 'finance' | 'hr' | 'executive';
  blockName: string;
  experienceYears: number;
  keyHighlights: string[];
  organizations: string[];
  certifications?: string[];
  quote?: string;
  avatarUrl?: string;
}

export const FACULTY_BLOCKS = [
  { id: 'all', name: 'Tất Cả Khối Chuyên Môn' },
  { id: 'executive', name: 'Lãnh Đạo & Điều Hành C-Level' },
  { id: 'marketing', name: 'Tiếp Thị, Thương Hiệu & Omnichannel' },
  { id: 'finance', name: 'Tài Chính, Kiểm Soát & Dữ Liệu' },
  { id: 'hr', name: 'Nhân Sự & Phát Triển Năng Lực' },
  { id: 'operations', name: 'Vận Hành TMĐT & No-code' },
] as const;

export const FACULTY_MEMBERS: FacultyMember[] = [
  // Khối 5 — Lãnh đạo Điều hành & Huấn luyện Doanh nghiệp
  {
    id: 'nguyen-phuoc-vinh-hung',
    name: 'Nguyễn Phước Vĩnh Hưng',
    title: 'Chief AI Officer (CAIO) & Lead AI Trainer',
    roleInSunext: 'Trưởng Ban Cố Vấn Chiến Lược & Chuyển Đổi AI Toàn Trình',
    blockId: 'executive',
    blockName: 'Lãnh Đạo & Điều Hành C-Level',
    experienceYears: 10,
    avatarUrl: '/assets/vinh_hung_portrait.png',
    keyHighlights: [
      'Tiên phong nghiên cứu và đào tạo ứng dụng AI thực chiến tại Việt Nam từ năm 2023',
      'Đã cấp chứng nhận ứng dụng AI cho hơn 600 giảng viên thuộc mạng lưới Train-the-Trainer chuẩn Bậc 6',
      'Sáng lập và quản trị cộng đồng học tập, chia sẻ kiến thức AI thực chiến với hơn 500.000 thành viên (2026)',
      'Trực tiếp chủ trì tư vấn chiến lược chuyển đổi AI cho Đại học FPT, Vinhomes, Vietcap Securities, Dentsu Sports Vietnam, HTV...',
    ],
    organizations: ['Đại học FPT', 'Vinhomes', 'Vietcap Securities', 'Dentsu Sports Vietnam', 'HTV', 'VNPT VinaPhone'],
    certifications: ['Lead AI Trainer Certificate', 'AI Strategy & Enterprise Transformation'],
    quote: 'Mục tiêu duy nhất của chuyển đổi AI là biến công nghệ thành người đồng nghiệp đáng tin cậy trong chuỗi công việc thường nhật, bảo vệ biên lợi nhuận cho doanh nghiệp.',
  },
  {
    id: 'nguyen-tung-chi',
    name: 'Nguyễn Tùng Chi',
    title: 'CSO Sunext AI & Finance × AI Architect',
    roleInSunext: 'Giám Đốc Chiến Lược & Kiến Trúc Sư Tài Chính AI',
    blockId: 'executive',
    blockName: 'Lãnh Đạo & Điều Hành C-Level',
    experienceYears: 24,
    avatarUrl: '/assets/tung_chi_portrait.png',
    keyHighlights: [
      '24+ năm kinh nghiệm quản trị và tài chính cấp cao tại các định chế tài chính và tập đoàn năng lượng',
      'Nguyên Kế toán trưởng & Thành viên Hội đồng Thẩm định Niêm yết Sở Giao dịch Chứng khoán TP.HCM (HOSE) suốt 12+ năm',
      'Nguyên Giám đốc Tài chính (CFO) Aurai Wind Energy (Bamboo Capital Group, cụm dự án điện gió 550MW)',
      'Tốt nghiệp Thạc sĩ Quản trị Kinh doanh Cấp cao (Executive MBA) từ United Business Institute (UBI, Brussels)',
    ],
    organizations: ['Sở Giao dịch Chứng khoán TP.HCM (HOSE)', 'Aurai Wind Energy (Bamboo Capital Group)', 'United Business Institute Brussels'],
    certifications: ['Executive MBA (Brussels)', 'HOSE Listing Evaluator Board'],
    quote: 'AI trong tài chính không phải là vẽ biểu đồ cho đẹp. Nó là cơ chế đối soát hai chiều bảo đảm tính toàn vẹn của dữ liệu dòng tiền và loại bỏ sai lệch số liệu cơ học.',
  },
  {
    id: 'trinh-minh-hung',
    name: 'Trịnh Minh Hùng',
    title: 'ThS., CEO & Senior Enterprise AI Trainer',
    roleInSunext: 'Chuyên Gia Huấn Luyện Điều Hành Doanh Nghiệp',
    blockId: 'executive',
    blockName: 'Lãnh Đạo & Điều Hành C-Level',
    experienceYears: 17,
    keyHighlights: [
      '17+ năm kinh nghiệm quản trị doanh nghiệp và hoạch định chiến lược kinh doanh',
      '10 năm đảm nhiệm vị trí Tổng Giám Đốc (CEO) tại VISUN Holdings và Nutrihealth',
      'Chuyên sâu về tái cấu trúc mô hình vận hành và đưa AI vào giám sát chỉ số P&L cho khối doanh nghiệp SME',
    ],
    organizations: ['VISUN Holdings', 'Nutrihealth'],
    certifications: ['Thạc sĩ Quản trị Kinh doanh', 'Senior Enterprise Executive'],
    quote: 'Chuyển đổi AI phải bắt đầu từ tư duy của người đứng đầu. Lãnh đạo không hiểu AI thì mọi dự án đầu tư công nghệ đều dừng lại ở mức thử nghiệm tốn kém.',
  },
  {
    id: 'nguyen-truong-quang-khoi',
    name: 'Nguyễn Trường Quang Khôi',
    title: 'Chief Executive Officer & International Business Advisor',
    roleInSunext: 'Cố Vấn Phát Triển Kinh Doanh Quốc Tế',
    blockId: 'executive',
    blockName: 'Lãnh Đạo & Điều Hành C-Level',
    experienceYears: 10,
    keyHighlights: [
      '10+ năm kinh nghiệm điều hành và phát triển thị trường kinh doanh quốc tế',
      'Tổng Giám Đốc (CEO) KST Canada',
      'Nguyên Giám Đốc Phát Triển Kinh Doanh (BD Director) tại Avenue to Success (ATS)',
      'Chuyên gia ứng dụng AI trong tự động hóa tìm kiếm đối tác và mở rộng thị trường xuyên biên giới',
    ],
    organizations: ['KST Canada', 'Avenue to Success (ATS)'],
    certifications: ['International Business Leadership', 'Global Expansion Strategist'],
    quote: 'Tốc độ phản hồi thị trường quốc tế tính bằng giờ, không phải bằng tuần. AI giúp doanh nghiệp Việt Nam tự tin cạnh tranh bình đẳng trên trường quốc tế.',
  },

  // Khối 1 — Tiếp thị, Thương hiệu & Thương mại Đa kênh
  {
    id: 'loi-hong-thanh',
    name: 'Lợi Hồng Thanh',
    title: 'Senior Marketing Director & FMCG Brand Strategist',
    roleInSunext: 'Chuyên Gia Cố Vấn Chiến Lược Tiếp Thị & Thương Hiệu',
    blockId: 'marketing',
    blockName: 'Tiếp Thị, Thương Hiệu & Omnichannel',
    experienceYears: 16,
    keyHighlights: [
      '16+ năm kinh nghiệm lãnh đạo tiếp thị tại các tập đoàn đa quốc gia và FMCG hàng đầu',
      'Từng giữ các vị trí quản lý chiến lược tại Carlsberg Group, Mondelēz International, British American Tobacco (BAT), FrieslandCampina',
      'Chuyên gia ứng dụng AI trong nghiên cứu hành vi người tiêu dùng, tối ưu hóa ngân sách truyền thông đa kênh và Brand Equity',
    ],
    organizations: ['Carlsberg Group', 'Mondelēz International', 'British American Tobacco (BAT)', 'FrieslandCampina'],
    certifications: ['Global Brand Strategy & Consumer Insights'],
    quote: 'AI không sáng tạo thay con người. AI giải phóng người làm thương hiệu khỏi đống dữ liệu phân mảnh để họ tập trung vào sự thật ngầm hiểu (Customer Insight) đắt giá nhất.',
  },
  {
    id: 'nguyen-thi-hong-vi',
    name: 'Nguyễn Thị Hồng Vi',
    title: 'CMO, Chuyên Gia Omnichannel & TikTok Livestream',
    roleInSunext: 'Chuyên Gia Tiếp Thị Đa Kênh & Bán Lẻ F&B/FMCG',
    blockId: 'marketing',
    blockName: 'Tiếp Thị, Thương Hiệu & Omnichannel',
    experienceYears: 18,
    keyHighlights: [
      '18+ năm kinh nghiệm lãnh đạo tiếp thị trong ngành F&B, chuỗi nhà hàng và FMCG',
      'Hiện là Giám Đốc Tiếp Thị (CMO) chuỗi Chạm Đà Lạt',
      'Nguyên Giám Đốc Tiếp Thị (Head of Marketing) Golden Gate Group — quản lý thương hiệu chuỗi 300+ nhà hàng toàn quốc (GoGi House, Kichi-Kichi, Manwah...)',
      'Từng đảm nhiệm vai trò tiếp thị cấp cao tại Hải Sản Hoàng Gia Group và Lotte Vietnam',
    ],
    organizations: ['Golden Gate Group', 'Lotte Vietnam', 'Hải Sản Hoàng Gia Group', 'Chạm Đà Lạt'],
    certifications: ['Omnichannel Retail Marketing', 'Digital & Social Commerce Leadership'],
    quote: 'Trong kinh doanh chuỗi, tốc độ phản hồi xu hướng và cá nhân hóa trải nghiệm khách hàng quyết định doanh số. AI là cánh tay nối dài của đội ngũ marketing hiện đại.',
  },

  // Khối 2 — Vận hành TMĐT, Hệ thống No-code & Chuỗi cung ứng
  {
    id: 'nguyen-thi-hanh',
    name: 'Nguyễn Thị Hạnh',
    title: 'Deputy Operations Manager & No-Code Systems Specialist',
    roleInSunext: 'Chuyên Gia Tự Động Hóa Vận Hành & No-Code Workflow',
    blockId: 'operations',
    blockName: 'Vận Hành TMĐT & No-code',
    experienceYears: 4,
    keyHighlights: [
      '4+ năm kinh nghiệm quản lý vận hành đội ngũ 40+ nhân sự thương mại điện tử đa kênh',
      'Thiết kế và triển khai kiến trúc điều hành tự động hóa trên Lark Suite cho 50+ người dùng tại TVT Holdings',
      'Chuyên gia xây dựng hệ sinh thái tự động hóa quy trình (No-code / Low-code) kết hợp AI Agentic Pipelines',
    ],
    organizations: ['TVT Holdings', 'E-Commerce Operations Hub'],
    certifications: ['Lark Certified Expert', 'No-code Workflow Automation Architect'],
    quote: 'Một hệ thống vận hành xuất sắc là khi dữ liệu tự động chảy qua các phòng ban mà không cần ai phải nhắn tin giục giã hay copy paste thủ công.',
  },

  // Khối 3 — Tài chính, Kiểm soát Nội bộ & Mô hình hóa Dữ liệu
  {
    id: 'nguyen-the-chuyen',
    name: 'Nguyễn Thế Chuyên',
    title: 'Financial Manager & Data Modeling Specialist',
    roleInSunext: 'Chuyên Gia Mô Hình Hóa Tài Chính & Phân Tích Dữ Liệu',
    blockId: 'finance',
    blockName: 'Tài Chính, Kiểm Soát & Dữ Liệu',
    experienceYears: 8,
    keyHighlights: [
      '8+ năm kinh nghiệm quản lý tài chính và lập mô hình định giá dự án quy mô lớn',
      'Trực tiếp xây dựng Financial Model cho hơn 70 dự án năng lượng tái tạo với tổng công suất lũy kế vượt 4GW',
      'Chuyên sâu về ứng dụng AI trong phân tích kịch bản tài chính phức tạp, độ nhạy dòng tiền và thẩm định rủi ro đầu tư',
    ],
    organizations: ['Renewable Energy Investment Funds', 'Financial Modeling Consortium'],
    certifications: ['Advanced Financial Modeling (AFM)', 'Renewable Energy Project Finance'],
    quote: 'Mô hình tài chính kết hợp AI cho phép kiểm tra hàng trăm kịch bản rủi ro trong tích tắc, giúp ban lãnh đạo ra quyết định dựa trên dữ liệu định lượng chắc chắn.',
  },
  {
    id: 'le-thi-cam-van',
    name: 'Lê Thị Cẩm Vân',
    title: 'Senior Financial Director & Internal Audit Expert',
    roleInSunext: 'Chuyên Gia Kiểm Soát Nội Bộ & Tài Chính Doanh Nghiệp',
    blockId: 'finance',
    blockName: 'Tài Chính, Kiểm Soát & Dữ Liệu',
    experienceYears: 21,
    keyHighlights: [
      '21 năm kinh nghiệm quản trị tài chính, kế toán và kiểm soát nội bộ chuyên sâu',
      'Nguyên Giám Đốc Tài Chính (CFO), Phó Giám Đốc Điều Hành và Thành viên Ban Kiểm Soát Công ty Cổ phần Yến Việt (quỹ VinaCapital đầu tư)',
      'Từng đảm nhiệm các vị trí quản trị tài chính tại Tổng Công ty Tài chính Cổ phần Dầu khí Việt Nam (PVFC)',
    ],
    organizations: ['Công ty CP Yến Việt (VinaCapital)', 'Tổng Công ty Tài chính Cổ phần Dầu khí Việt Nam (PVFC)'],
    certifications: ['CFO Certification', 'Certified Internal Auditor (CIA) Foundation'],
    quote: 'Kiểm soát nội bộ trong kỷ nguyên số không phải là tạo thêm giấy tờ thủ tục. Đó là cơ chế kiểm soát tự động phát hiện rủi ro từ sớm trước khi thất thoát xảy ra.',
  },
  {
    id: 'ho-thi-hong-quan',
    name: 'Hồ Thị Hồng Quân',
    title: 'Senior Financial Analyst & Costing Specialist',
    roleInSunext: 'Chuyên Gia Kế Toán Quản Trị & Tối Ưu Chi Phí Sản Xuất',
    blockId: 'finance',
    blockName: 'Tài Chính, Kiểm Soát & Dữ Liệu',
    experienceYears: 7,
    keyHighlights: [
      '7+ năm kinh nghiệm Kế toán Quản trị FOB, Costing và P&L sản xuất đa phân xưởng trong ngành dệt may & chế tạo',
      'Chuyên gia ứng dụng AI trong bóc tách định mức nguyên vật liệu, dự báo hao hụt chuyền và tối ưu giá thành sản phẩm',
    ],
    organizations: ['Garment & Manufacturing Industrial Groups'],
    certifications: ['Management Accounting Specialist', 'Costing & Operations Financial Analyst'],
    quote: 'Tiết kiệm 1% chi phí định mức ở khâu sản xuất có giá trị tương đương tăng trưởng 10% doanh số bán hàng.',
  },

  // Khối 4 — Quản trị Nhân sự & Phát triển Năng lực
  {
    id: 'phan-van-huy-ha',
    name: 'Phan Văn Huy Hà',
    title: 'Senior HR Advisor & AI Integration Strategist',
    roleInSunext: 'Chuyên Gia Nhân Sự Cấp Cao & Đào Tạo Tích Hợp AI',
    blockId: 'hr',
    blockName: 'Nhân Sự & Phát Triển Năng Lực',
    experienceYears: 14,
    keyHighlights: [
      '14+ năm kinh nghiệm quản trị nhân sự chiến lược và phát triển tổ chức quy mô lớn',
      'Từng giữ các vị trí lãnh đạo nhân sự tại Tập đoàn Giáo dục Nguyễn Hoàng, Hệ thống Hải Sản Hoàng Gia, S&S Group',
      'Sở hữu chứng chỉ nghề nghiệp quốc tế danh giá: CPTD (Certified Professional in Talent Development) và SHRM-SCP (Senior Certified Professional)',
      'Tiên phong thiết kế khung năng lực AI cho khối nhân sự và quy trình tuyển dụng Human-in-the-loop',
    ],
    organizations: ['Tập đoàn Giáo dục Nguyễn Hoàng', 'Hải Sản Hoàng Gia', 'S&S Group'],
    certifications: ['CPTD (ATD USA)', 'SHRM-SCP (SHRM USA)'],
    quote: 'Công nghệ chỉ thành công khi con người đón nhận nó. Đào tạo nâng tầm năng lực đội ngũ là chìa khóa duy nhất để chuyển đổi số không bị đào thải giữa đường.',
  },
  {
    id: 'nguyen-thi-nhung',
    name: 'Nguyễn Thị Nhung',
    title: 'Senior Retail HR Director & Talent Acquisition Expert',
    roleInSunext: 'Chuyên Gia Quản Trị Nhân Sự Chuỗi Bán Lẻ',
    blockId: 'hr',
    blockName: 'Nhân Sự & Phát Triển Năng Lực',
    experienceYears: 17,
    keyHighlights: [
      '17+ năm kinh nghiệm quản trị nhân sự chuỗi bán lẻ quy mô lớn và tuyển dụng nhân tài',
      'Từng đảm nhiệm các vai trò nhân sự chủ chốt tại Central Retail Vietnam, Lotte Shopping, Navigos Group (Vietnamworks)',
      'Chuyên sâu về tối ưu hóa quy trình sàng lọc ứng viên hàng loạt và giải bài toán biến động nhân sự ngành bán lẻ',
    ],
    organizations: ['Central Retail Vietnam', 'Lotte Shopping', 'Navigos Group (Vietnamworks)'],
    certifications: ['Senior HR Management (Retail)', 'Talent Acquisition Leadership'],
    quote: 'Đội ngũ HR không nên kiệt sức vì đọc hàng trăm CV rác. Hãy để AI làm nhiệm vụ sàng lọc tiêu chí cơ học, dành trọn trái tim và thời gian cho những cuộc trò chuyện tuyển chọn sâu sắc.',
  },
];
