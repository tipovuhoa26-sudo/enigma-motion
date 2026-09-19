export interface IndustrySolution {
  id: string;
  slug: string;
  name: string;
  englishName: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroImage: string;
  marketContext: string;
  challenges: {
    title: string;
    description: string;
    impact: string;
  }[];
  centralCaseStudy: {
    title: string;
    client: string;
    scale: string;
    description: string;
    metrics: {
      value: string;
      label: string;
    }[];
    caseUrl: string;
    image: string;
  };
  solutions: {
    name: string;
    pillarId: string;
    pillarName: string;
    description: string;
    deliverables: string[];
  }[];
  roadmap: {
    phase: string;
    duration: string;
    objective: string;
  }[];
}

export const INDUSTRIES_DATA: IndustrySolution[] = [
  {
    id: 'retail',
    slug: 'ban-le-tieu-dung',
    name: 'Bán Lẻ & Hàng Tiêu Dùng',
    englishName: 'Retail & Consumer Goods',
    heroHeadline: 'Tối Ưu Vận Hành Bán Lẻ: Cắt Giảm Chi Phí Tuyển Dụng & Sàng Lọc CV Tự Động',
    heroSubheadline: 'Giải quyết triệt để nút thắt tuyển dụng nhân sự chuỗi: rút ngắn thời gian lọc hồ sơ từ 3 ngày xuống 2 giờ, tiết kiệm 40% chi phí tuyển dụng thực tế.',
    heroImage: '/assets/vietnam-retail-store.jpg',
    marketContext: 'Bạn mở rộng chuỗi cửa hàng, tuyển dụng liên tục nhưng đội HR 4 người luôn kiệt sức vì hàng trăm CV đổ về mỗi đợt. Phần lớn thời gian của họ trôi qua vào việc đọc hồ sơ rác, gọi điện xác nhận ca kíp và đặt lịch hẹn. Đây không phải bài toán thiếu người — đây là bài toán quy trình thủ công đang tiêu tốn ngân sách tuyển dụng mỗi tháng.',
    challenges: [
      {
        title: 'Thực tế khó chịu: Đội HR quá tải vì đọc CV thủ công',
        description: 'Mỗi đợt mở rộng cửa hàng hoặc mùa cao điểm, hàng trăm hồ sơ nộp về nhưng mất 3-4 ngày chỉ để đọc lướt và lọc ra danh sách phỏng vấn.',
        impact: 'Chậm tiến độ khai trương điểm bán mới, HR kiệt sức vì các tác vụ phân loại lặp lại.',
      },
      {
        title: 'Lầm tưởng phổ biến: "Cứ tuyển thêm nhân sự HR là xong"',
        description: 'Tuyển thêm người chỉ làm tăng chi phí lương cố định trong khi vấn đề cốt lõi là dữ liệu hồ sơ và tiêu chí sàng lọc chưa được tự động hóa.',
        impact: 'Chi phí vận hành bộ máy phình to nhưng tốc độ tuyển dụng vẫn chậm.',
      },
      {
        title: 'Bản chất vấn đề: Phân mảnh thông tin giữa điểm bán và văn phòng',
        description: 'Quản lý cửa hàng cần người gấp nhưng yêu cầu ca kíp truyền đạt qua chat rời rạc, không có cơ chế đối soát tự động với kho ứng viên sẵn có.',
        impact: 'Cửa hàng thiếu nhân lực giờ cao điểm, chất lượng phục vụ khách hàng suy giảm.',
      },
    ],
    centralCaseStudy: {
      title: 'Hệ Thống Tuyển Dụng Thông Minh Cho Chuỗi Bán Lẻ 500 Nhân Sự',
      client: 'Chuỗi Bán Lẻ Thời Trang & Tiêu Dùng',
      scale: '500 nhân viên · Đội HR 4 người · 45 cửa hàng',
      description: 'Sunext triển khai Trụ cột 2 (Đào tạo Tầng 1→2 cho đội HR) và Trụ cột 4 (Agent sàng lọc CV tích hợp trực tiếp vào hệ thống ATS). Hệ thống tự động trích xuất kỹ năng, chấm điểm hồ sơ theo tiêu chí chuẩn và lên lịch phỏng vấn tự động.',
      metrics: [
        { value: '-40%', label: 'Chi phí tuyển dụng thực tế' },
        { value: '3 ngày → 2h', label: 'Thời gian sàng lọc hồ sơ ứng viên' },
        { value: '+25%', label: 'Tỷ lệ ứng viên đạt yêu cầu vào phỏng vấn' },
      ],
      caseUrl: '/cases/toi-uu-chi-phi-tuyen-dung-hr-ai',
      image: '/assets/vietnam-retail-store.jpg',
    },
    solutions: [
      {
        name: 'Agentic HR & Sàng Lọc Tuyển Dụng Tự Động',
        pillarId: 'nang-luc-doi-ngu',
        pillarName: 'Trụ cột 2: Nhân tài nội bộ',
        description: 'Trích xuất thông tin CV đa định dạng, chấm điểm mức độ phù hợp với tiêu chí tuyển dụng và tự động lên lịch phỏng vấn qua Zalo/Email.',
        deliverables: ['Custom AI Resume Screener', 'Tích hợp phần mềm ATS', 'Hệ thống tiếp nhận ứng viên tự động'],
      },
      {
        name: 'Trợ Lý Điều Hành Điểm Bán & Phân Bổ Nhân Lực',
        pillarId: 'mo-hinh-van-hanh',
        pillarName: 'Trụ cột 3: Mô hình vận hành',
        description: 'Dự báo nhu cầu nhân sự theo giờ cao điểm để tự động sắp xếp lịch trực ca tối ưu cho từng cửa hàng, tránh tình trạng thừa thiếu cục bộ.',
        deliverables: ['Smart Shift Scheduler', 'Dashboard cảnh báo thiếu hụt ca trực', 'SOP vận hành chuẩn hóa'],
      },
      {
        name: 'Trợ Lý Tư Vấn Sản Phẩm & Kết Nối Tồn Kho POS',
        pillarId: 'nen-tang-cong-nghe',
        pillarName: 'Trụ cột 4: Nền tảng công nghệ',
        description: 'Hỗ trợ nhân viên tra cứu tồn kho tức thì trên hệ thống POS và giải đáp thông tin sản phẩm cho khách hàng tại cửa hàng.',
        deliverables: ['Omnichannel Retail Assistant', 'API kết nối POS/ERP', 'Bộ tri thức sản phẩm chuẩn'],
      },
    ],
    roadmap: [
      { phase: 'Giai đoạn 1 (Tuần 1-3)', duration: '3 tuần', objective: 'Khảo sát quy trình HR & Triển khai Pilot Agent lọc CV cho các vị trí bán lẻ trọng điểm.' },
      { phase: 'Giai đoạn 2 (Tuần 4-8)', duration: '5 tuần', objective: 'Tích hợp hệ thống ATS, đào tạo Tầng 1 cho toàn bộ đội ngũ quản lý cửa hàng.' },
      { phase: 'Giai đoạn 3 (Tuần 9-14)', duration: '6 tuần', objective: 'Nhân rộng toàn chuỗi cửa hàng, thiết lập bảng theo dõi chỉ số ROI và kiểm soát chi phí.' },
    ],
  },
  {
    id: 'manufacturing',
    slug: 'san-xuat-che-tao',
    name: 'Sản Xuất Cơ Khí & Chế Tạo',
    englishName: 'Manufacturing & Industrial',
    heroHeadline: 'Kiểm Soát Lỗi Tự Động: Đạt Độ Chính Xác 99.8% Bằng Thị Giác Máy Tính',
    heroSubheadline: 'Loại bỏ hoàn toàn sự phụ thuộc vào kiểm tra thủ công bằng mắt thường. Camera AI giám sát chuyền sản xuất 24/7, hạ tỷ lệ lỗi xuống 1.5%.',
    heroImage: '/assets/vietnam-manufacturing-line.jpg',
    marketContext: 'Trong nhà máy cơ khí chính xác, công nhân kiểm định (QA/QC) phải soi hàng nghìn linh kiện mỗi ngày dưới ánh đèn chói. Sau 4 tiếng liên tục, mắt bắt đầu mỏi và sai sót xảy ra. Một vết nứt vi mô bị bỏ sót lọt ra thị trường có thể hủy hoại cả hợp đồng xuất khẩu. Tự động hóa bằng thị giác AI là cách duy nhất để kiểm soát chất lượng đồng nhất 100% chi tiết.',
    challenges: [
      {
        title: 'Thực tế khó chịu: Mỏi mắt và sai sót trong kiểm định thủ công',
        description: 'Công nhân QA soi từng chi tiết bằng mắt thường, tỷ lệ bỏ sót các vết nứt vi mô hoặc sai lệch kích thước tăng lên vào nửa cuối ca làm việc.',
        impact: 'Rủi ro phế phẩm lọt tới khách hàng và ảnh hưởng nghiêm trọng đến uy tín gia công.',
      },
      {
        title: 'Lầm tưởng phổ biến: "Chỉ cần tăng thêm công nhân kiểm tra vòng 2"',
        description: 'Thêm người kiểm tra chỉ nhân đôi chi phí nhân công mà không giải quyết được giới hạn mỏi cơ học của mắt người.',
        impact: 'Chi phí QC tăng cao trong khi rủi ro sai sót ngẫu nhiên vẫn tồn tại.',
      },
      {
        title: 'Bản chất vấn đề: Dữ liệu lỗi không được số hóa theo thời gian thực',
        description: 'Số liệu lỗi chỉ được tổng hợp trên giấy vào cuối ca, khiến quản đốc không thể phát hiện sớm việc một máy tiện đang bị lệch thông số.',
        impact: 'Một cụm máy lỗi có thể tạo ra hàng loạt phế phẩm trước khi bị phát hiện.',
      },
    ],
    centralCaseStudy: {
      title: 'Hệ Thống AI Vision Kiểm Soát Lỗi Cho Nhà Máy Cơ Khí 800 Nhân Sự',
      client: 'Nhà Máy Chế Tạo Cơ Khí & Phụ Tùng',
      scale: '800 nhân sự · 6 chuyền sản xuất liên tục',
      description: 'Sunext kết hợp Trụ cột 4 (Engineering & Integration trực tiếp chuyền máy) và Trụ cột 5 (Kiến trúc dữ liệu hình ảnh sạch). Camera AI công nghiệp quét từng chi tiết với tốc độ mili-giây, cảnh báo lỗi tức thì lên màn hình điều khiển quản đốc.',
      metrics: [
        { value: '99.8%', label: 'Độ chính xác kiểm định tự động AI Vision' },
        { value: '1.5%', label: 'Tỷ lệ sản phẩm lỗi sau kiểm định' },
        { value: '24/7', label: 'Vận hành giám sát liên tục không gián đoạn' },
      ],
      caseUrl: '/cases/ai-vision-kiem-dinh-san-xuat',
      image: '/assets/vietnam-manufacturing-line.jpg',
    },
    solutions: [
      {
        name: 'Computer Vision Quality Auditor (Thị Giác AI)',
        pillarId: 'nen-tang-cong-nghe',
        pillarName: 'Trụ cột 4: Nền tảng công nghệ',
        description: 'Camera công nghiệp tốc độ cao kết hợp mô hình AI phát hiện vết xước, nứt, sai số kích thước trong thời gian thực < 50ms.',
        deliverables: ['Hệ thống Camera & Edge AI Box', 'Mô hình nhận diện lỗi chuyên biệt', 'Cơ chế cảnh báo và kích hoạt loại bỏ phế phẩm'],
      },
      {
        name: 'Hạ Tầng Dữ Liệu Sản Xuất & Tích Hợp MES',
        pillarId: 'kien-truc-du-lieu',
        pillarName: 'Trụ cột 5: Kiến trúc dữ liệu',
        description: 'Hợp nhất dữ liệu cảm biến máy, sản lượng theo ca và tỷ lệ lỗi thành một bảng điều khiển thời gian thực duy nhất.',
        deliverables: ['Real-time Production Dashboard', 'Data Pipeline kết nối cảm biến PLC', 'Hệ thống báo cáo tự động cho Ban Giám Đốc'],
      },
      {
        name: 'Bảo Trì Dự Đoán & Cảnh Báo Sớm Thiết Bị',
        pillarId: 'mo-rong-quy-mo',
        pillarName: 'Trụ cột 6: Mở rộng & Quản trị',
        description: 'Phân tích tín hiệu rung động và nhiệt độ để cảnh báo trước các hao mòn vòng bi, động cơ trước khi xảy ra sự cố dừng máy.',
        deliverables: ['Mô hình AI bảo trì dự đoán', 'Quy trình SOP phản ứng nhanh cho đội kỹ thuật', 'Thông báo cảnh báo tức thì qua màn hình điều hành'],
      },
    ],
    roadmap: [
      { phase: 'Giai đoạn 1 (Tuần 1-4)', duration: '4 tuần', objective: 'Lắp đặt thử nghiệm Camera AI trên 1 dây chuyền trọng điểm & thu thập mẫu ảnh lỗi thực tế.' },
      { phase: 'Giai đoạn 2 (Tuần 5-9)', duration: '5 tuần', objective: 'Huấn luyện mô hình đạt độ chính xác > 99.5%, tích hợp với màn hình cảnh báo ca trực.' },
      { phase: 'Giai đoạn 3 (Tuần 10-16)', duration: '7 tuần', objective: 'Triển khai đồng loạt 6 dây chuyền, kết nối dữ liệu vào hệ thống quản lý MES nhà máy.' },
    ],
  },
  {
    id: 'b2b-services',
    slug: 'dich-vu-b2b',
    name: 'Dịch Vụ Doanh Nghiệp & B2B',
    englishName: 'B2B Professional Services',
    heroHeadline: 'Đóng Gói Tri Thức Chuyên Gia: Tăng Tốc x5 Sản Xuất Tài Liệu & Content B2B',
    heroSubheadline: 'Không còn cảnh chuyên gia phải ngồi gõ từng proposal hay marketing bế tắc vì thiếu bài viết kỹ thuật. Tăng trưởng organic lead B2B bền vững với Content Factory chuẩn brand voice.',
    heroImage: '/assets/vietnam-b2b-office.jpg',
    marketContext: 'Trong các công ty tư vấn, luật, tài chính hay công nghệ B2B, tài sản quý giá nhất là tri thức của các chuyên gia đầu ngành. Nhưng các chuyên gia này luôn bận rộn với dự án của khách hàng. Kết quả là hồ sơ đề xuất (proposal) mất hàng tuần mới soạn xong, còn kênh marketing nội dung thì chết đứng vì không ai có thời gian viết bài phân tích chuyên sâu.',
    challenges: [
      {
        title: 'Thực tế khó chịu: Tri thức nằm trong đầu một vài cá nhân',
        description: 'Khi nhân sự kỳ cựu bận hoặc nghỉ việc, toàn bộ quy chuẩn kỹ thuật và kinh nghiệm thực chiến bị gián đoạn, nhân sự mới mất nhiều thời gian để nắm bắt.',
        impact: 'Chất lượng tư vấn không đồng đều, phụ thuộc hoàn toàn vào một vài cá nhân chủ chốt.',
      },
      {
        title: 'Lầm tưởng phổ biến: "Thuê agency bên ngoài viết bài chuyên môn"',
        description: 'Agency bên ngoài chỉ viết được những bài chung chung, thiếu chiều sâu kỹ thuật cần thiết để thuyết phục khách hàng doanh nghiệp khó tính.',
        impact: 'Tốn kém ngân sách thuê ngoài nhưng không tạo ra organic lead B2B chất lượng.',
      },
      {
        title: 'Bản chất vấn đề: Chưa có hệ thống đóng gói và tái sử dụng tri thức',
        description: 'Hàng trăm hồ sơ dự án, nghiên cứu tình huống và báo cáo kỹ thuật cũ nằm rải rác trong ổ cứng cá nhân, không thể tìm kiếm hay tổng hợp lại.',
        impact: 'Mỗi dự án mới đều phải bắt đầu lại từ con số 0, lãng phí thời gian của chuyên gia.',
      },
    ],
    centralCaseStudy: {
      title: 'Hệ Thống Content Factory Tự Động Cho Doanh Nghiệp B2B 200 Nhân Sự',
      client: 'Công Ty Tư Vấn Giải Pháp & Dịch Vụ Doanh Nghiệp',
      scale: '200 nhân sự · Đội Marketing 4 người',
      description: 'Sunext thực hiện Trụ cột 2 (Đào tạo Tầng 2 cho đội ngũ) và Trụ cột 3 (Tái cấu trúc quy trình xuất bản). Đóng gói Custom GPT chuẩn brand voice và kho tri thức chuyên sâu, tự động hóa luồng kiểm duyệt nội dung.',
      metrics: [
        { value: 'x5', label: 'Tốc độ sản xuất tài liệu kỹ thuật & bài viết' },
        { value: '+60%', label: 'Tăng trưởng organic lead B2B sau 5 tháng' },
        { value: '0đ', label: 'Ngân sách phát sinh thêm cho quảng cáo' },
      ],
      caseUrl: '/cases/content-factory-b2b-knowledge',
      image: '/assets/vietnam-b2b-office.jpg',
    },
    solutions: [
      {
        name: 'B2B Content Factory & Knowledge Base',
        pillarId: 'mo-hinh-van-hanh',
        pillarName: 'Trụ cột 3: Mô hình vận hành',
        description: 'Hệ thống AI Agent trích xuất kinh nghiệm chuyên gia, viết bài phân tích chuyên sâu chuẩn brand voice và hỗ trợ dàn trang tự động.',
        deliverables: ['Custom GPT Brand Voice Engine', 'Automation Publishing Pipeline', 'Bộ SOP kiểm duyệt chất lượng'],
      },
      {
        name: 'Trợ Lý Soạn Thảo Proposal & Báo Giá Doanh Nghiệp',
        pillarId: 'nang-luc-doi-ngu',
        pillarName: 'Trụ cột 2: Năng lực đội ngũ',
        description: 'Tự động trích xuất yêu cầu từ brief của khách hàng và đề xuất cấu trúc giải pháp, rút ngắn thời gian chuẩn bị proposal kỹ thuật.',
        deliverables: ['AI Proposal Assistant', 'Thư viện cấu trúc đề xuất chuẩn', 'Quy trình kiểm duyệt báo giá'],
      },
      {
        name: 'Private Knowledge Search Cho Đội Ngũ Chuyên Gia',
        pillarId: 'kien-truc-du-lieu',
        pillarName: 'Trụ cột 5: Kiến trúc dữ liệu',
        description: 'Tập trung hóa toàn bộ tài liệu dự án, hợp đồng và quy chế vào kho dữ liệu bảo mật, nhân viên tra cứu có nguồn trích dẫn trong 30 giây.',
        deliverables: ['Private Vector Knowledge Mesh', 'Bảo mật dữ liệu tuyệt đối (Cam kết NDA)', 'Giao diện tra cứu nội bộ phân quyền'],
      },
    ],
    roadmap: [
      { phase: 'Giai đoạn 1 (Tuần 1-3)', duration: '3 tuần', objective: 'Xây dựng Brand Voice Profile và cấu hình Content Engine cho 3 chủ đề chuyên môn trọng điểm.' },
      { phase: 'Giai đoạn 2 (Tuần 4-7)', duration: '4 tuần', objective: 'Đào tạo đội ngũ vận hành, thiết lập luồng tự động hóa phê duyệt và kiểm tra chất lượng.' },
      { phase: 'Giai đoạn 3 (Tuần 8-12)', duration: '5 tuần', objective: 'Mở rộng sang soạn thảo Proposal và tích hợp Knowledge Base tra cứu nội bộ.' },
    ],
  },
];

