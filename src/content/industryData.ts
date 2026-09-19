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
    heroHeadline: 'Tối Ưu Hóa Vận Hành Bán Lẻ & Chuỗi Cung Ứng Bằng AI',
    heroSubheadline: 'Giải quyết bài toán biến động nhân sự thời vụ, tự động hóa sàng lọc CV từ 3 ngày xuống 2 giờ và tối ưu hóa điều phối ca kíp tại điểm bán.',
    heroImage: '/assets/vietnam-retail-store.jpg',
    marketContext: 'Ngành bán lẻ Việt Nam đang đối mặt với chi phí mặt bằng tăng cao, biến động nhân sự thời vụ lên đến 35-40%/năm và biên lợi nhuận mỏng. Ứng dụng AI giúp chuỗi bán lẻ tinh gọn bộ máy vận hành, cắt giảm chi phí tuyển dụng và tăng tỷ lệ giữ chân khách hàng.',
    challenges: [
      {
        title: 'Nút thắt tuyển dụng & đào tạo thời vụ',
        description: 'Đội ngũ nhân sự quá tải khi phải lọc hàng nghìn CV mỗi đợt mở rộng cửa hàng hoặc cao điểm Tết, mất 3-4 ngày cho mỗi vị trí.',
        impact: 'Chậm tiến độ khai trương, tốn 30-40% ngân sách cho các kênh đăng tuyển bên ngoài.',
      },
      {
        title: 'Lệch pha dự báo tồn kho & sức mua',
        description: 'Dữ liệu bán hàng phân mảnh giữa POS, ERP và sàn TMĐT khiến dự báo đặt hàng sai lệch, tồn kho cao hoặc đứt hàng cục bộ.',
        impact: 'Tồn kho đọng vốn 15-20%, chi phí hủy hàng hết hạn tăng cao.',
      },
      {
        title: 'Trải nghiệm khách hàng thiếu tính cá nhân hóa',
        description: 'Chăm sóc khách hàng qua fanpage, Zalo OA phụ thuộc vào nhân viên trực chat thủ công, tỷ lệ phản hồi chậm sau 15 phút làm rơi khách.',
        impact: 'Tỷ lệ chuyển đổi đơn hàng trực tuyến giảm 25%.',
      },
    ],
    centralCaseStudy: {
      title: 'Hệ Thống Tuyển Dụng Thông Minh Cho Chuỗi Bán Lẻ 500 Nhân Sự',
      client: 'Chuỗi Bán Lẻ Thời Trang & Tiêu Dùng',
      scale: '500 nhân viên · Đội HR 4 người',
      description: 'Sunext triển khai Trụ cột 2 (Đào tạo Tầng 1→2 cho đội HR) và Trụ cột 4 (Agent sàng lọc CV tích hợp trực tiếp vào hệ thống ATS). Hệ thống tự động chấm điểm hồ sơ, gửi lịch phỏng vấn và giải đáp thắc mắc của ứng viên 24/7.',
      metrics: [
        { value: '-40%', label: 'Chi phí tuyển dụng thực tế' },
        { value: '3 ngày → 2h', label: 'Thời gian sàng lọc hồ sơ ứng viên' },
        { value: '+25%', label: 'Tỷ lệ ứng viên đạt yêu cầu vào phỏng vấn' },
      ],
      caseUrl: '/cases/enterprise-rag-data-mesh',
      image: '/assets/vietnam-retail-store.jpg',
    },
    solutions: [
      {
        name: 'Agentic HR & Sàng Lọc Tuyển Dụng Tự Động',
        pillarId: 'nang-luc-doi-ngu',
        pillarName: 'Trụ cột 2: Nhân tài nội bộ',
        description: 'Trích xuất thông tin CV đa định dạng, chấm điểm mức độ phù hợp với tiêu chí tuyển dụng và tự động lên lịch phỏng vấn qua Zalo/Email.',
        deliverables: ['Custom AI Resume Screener', 'Tích hợp phần mềm ATS', 'Chatbot tiếp nhận ứng viên 24/7'],
      },
      {
        name: 'Trợ Lý Điều Hành Điểm Bán & Dự Báo Nhân Lực',
        pillarId: 'mo-hinh-van-hanh',
        pillarName: 'Trụ cột 3: Mô hình vận hành',
        description: 'Phân tích lượng khách hàng giờ cao điểm để tự động sắp xếp lịch trực ca tối ưu cho từng cửa hàng, hạn chế thừa/thiếu nhân lực.',
        deliverables: ['Smart Shift Scheduler', 'Dashboard cảnh báo thiếu hụt ca trực', 'SOP vận hành chuẩn hóa'],
      },
      {
        name: 'Trợ Lý Tư Vấn Bán Hàng & Chăm Sóc Đa Kênh',
        pillarId: 'nen-tang-cong-nghe',
        pillarName: 'Trụ cột 4: Nền tảng công nghệ',
        description: 'Bot AI tư vấn sản phẩm, kiểm tra tồn kho tức thì trên POS và chốt đơn tự động qua Messenger/Zalo/TikTok Shop.',
        deliverables: ['Omnichannel AI Assistant', 'API kết nối POS/ERP', 'Hệ thống kịch bản tư vấn theo ngành hàng'],
      },
    ],
    roadmap: [
      { phase: 'Giai đoạn 1 (Tuần 1-3)', duration: '3 tuần', objective: 'Khảo sát quy trình HR/Vận hành & Triển khai Pilot Agent lọc CV cho 2 vị trí trọng điểm.' },
      { phase: 'Giai đoạn 2 (Tuần 4-8)', duration: '5 tuần', objective: 'Tích hợp hệ thống ATS, đào tạo Tầng 1 cho toàn bộ đội ngũ quản lý cửa hàng.' },
      { phase: 'Giai đoạn 3 (Tuần 9-14)', duration: '6 tuần', objective: 'Nhân rộng toàn chuỗi 30+ cửa hàng, thiết lập dashboard đo lường ROI và kiểm soát chi phí.' },
    ],
  },
  {
    id: 'manufacturing',
    slug: 'san-xuat-che-tao',
    name: 'Sản Xuất Cơ Khí & Chế Tạo',
    englishName: 'Manufacturing & Industrial',
    heroHeadline: 'Kiểm Soát Chất Lượng & Vận Hành Chuyền Sản Xuất 24/7 Bằng Thị Giác AI',
    heroSubheadline: 'Đạt độ chính xác nhận diện lỗi 99.8%, giảm tỷ lệ lỗi lọt tới tay khách hàng xuống 1.5% với Computer Vision Agent tích hợp trực tiếp vào chuyền cơ khí.',
    heroImage: '/assets/vietnam-manufacturing-line.jpg',
    marketContext: 'Trong các nhà máy cơ khí chính xác và sản xuất linh kiện tại Việt Nam, khâu kiểm tra lỗi (QA/QC) thủ công phụ thuộc rất lớn vào kinh nghiệm của thợ lành nghề, dễ bị mỏi mắt sau ca làm việc dài. Giải pháp Computer Vision kết hợp dữ liệu MES giúp nhà máy giám sát liên tục, không mệt mỏi với chuẩn xác gần như tuyệt đối.',
    challenges: [
      {
        title: 'Kiểm định chất lượng thủ công gây mỏi mắt & sai sót',
        description: 'Công nhân QA phải soi hàng nghìn linh kiện mỗi ca, tỷ lệ bỏ sót các vết nứt vi mô hoặc sai lệch kích thước tăng cao vào ca đêm.',
        impact: 'Chi phí bảo hành, thu hồi sản phẩm lỗi và phạt hợp đồng xuất khẩu tăng 12-18%.',
      },
      {
        title: 'Bảo trì thụ động khi máy móc gặp sự cố bất ngờ',
        description: 'Máy hỏng đột ngột làm dừng cả dây chuyền trong nhiều giờ, không có hệ thống cảnh báo sớm dựa trên cảm biến độ rung và nhiệt độ.',
        impact: 'Lãng phí 150-200 giờ máy mỗi năm, chi phí phụ tùng thay thế gấp đôi.',
      },
      {
        title: 'Dữ liệu sản xuất nằm rời rạc trên giấy và bảng viết tay',
        description: 'Báo cáo sản lượng ca và tỷ lệ lỗi được ghi chép thủ công cuối ngày, quản đốc không nắm được biến động theo thời gian thực.',
        impact: 'Phản ứng chậm với các lô sản phẩm lỗi hàng loạt.',
      },
    ],
    centralCaseStudy: {
      title: 'Computer Vision Agent Kiểm Soát Lỗi Cho Nhà Máy Cơ Khí 800 Nhân Sự',
      client: 'Nhà Máy Chế Tạo Cơ Khí & Phụ Tùng',
      scale: '800 nhân sự · 6 chuyền sản xuất liên tục',
      description: 'Sunext kết hợp Trụ cột 4 (Engineering & Integration trực tiếp chuyền máy) và Trụ cột 5 (Kiến trúc dữ liệu hình ảnh sạch, đồng bộ MES). Camera AI công nghiệp quét từng chi tiết với tốc độ mili-giây, đẩy cảnh báo lỗi tức thì lên màn hình điều khiển của quản đốc.',
      metrics: [
        { value: '99.8%', label: 'Độ chính xác phát hiện lỗi sản phẩm' },
        { value: '1.5%', label: 'Tỷ lệ lỗi lọt tới tay khách hàng (từ 8%)' },
        { value: '24/7', label: 'Vận hành giám sát liên tục không gián đoạn' },
      ],
      caseUrl: '/cases/autonomous-agentic-pipeline',
      image: '/assets/vietnam-manufacturing-line.jpg',
    },
    solutions: [
      {
        name: 'Computer Vision Quality Auditor (Thị Giác AI)',
        pillarId: 'nen-tang-cong-nghe',
        pillarName: 'Trụ cột 4: Nền tảng công nghệ',
        description: 'Camera công nghiệp độ phân giải cao kết hợp mô hình AI phát hiện vết xước, nứt, sai số kích thước trong thời gian thực < 50ms.',
        deliverables: ['Hệ thống Camera & Edge AI Box', 'Mô hình nhận diện lỗi chuyên biệt', 'Cơ chế kích hoạt tay gạt loại bỏ phế phẩm tự động'],
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
        description: 'Phân tích tín hiệu rung động và nhiệt độ để cảnh báo trước các hư hỏng vòng bi, động cơ từ 3-5 ngày trước khi xảy ra sự cố.',
        deliverables: ['Mô hình AI bảo trì dự đoán', 'Quy trình SOP phản ứng nhanh cho đội kỹ thuật', 'Hệ thống thông báo tức thì qua ứng dụng'],
      },
    ],
    roadmap: [
      { phase: 'Giai đoạn 1 (Tuần 1-4)', duration: '4 tuần', objective: 'Lắp đặt thử nghiệm Camera AI trên 1 dây chuyền trọng điểm & thu thập 10.000 mẫu ảnh lỗi.' },
      { phase: 'Giai đoạn 2 (Tuần 5-9)', duration: '5 tuần', objective: 'Huấn luyện mô hình đạt độ chính xác > 99.5%, tích hợp với hệ thống cảnh báo ca trực.' },
      { phase: 'Giai đoạn 3 (Tuần 10-16)', duration: '7 tuần', objective: 'Triển khai đồng loạt 6 dây chuyền, kết nối dữ liệu vào hệ thống quản lý MES nhà máy.' },
    ],
  },
  {
    id: 'b2b-services',
    slug: 'dich-vu-b2b',
    name: 'Dịch Vụ Doanh Nghiệp & B2B',
    englishName: 'B2B Professional Services',
    heroHeadline: 'Nhân Bản Năng Lực Chuyên Gia & Tự Động Hóa Content Factory B2B',
    heroSubheadline: 'Tăng gấp 5 lần sản lượng nội dung chất lượng cao (50+ bài/tháng), tăng 60% organic traffic sau 5 tháng cùng ngân sách nhờ quy trình AI chuyên biệt.',
    heroImage: '/assets/vietnam-b2b-office.jpg',
    marketContext: 'Các công ty tư vấn, tài chính, luật và giải pháp công nghệ B2B tại Việt Nam thường mất hàng tuần để soạn thảo một hồ sơ đề xuất (proposal), trong khi đội ngũ marketing chật vật sản xuất nội dung chuyên sâu vì phụ thuộc vào một vài chuyên gia chủ chốt. Bộ giải pháp B2B AI giúp đóng gói tri thức chuyên gia thành tài sản số hóa vận hành tự động.',
    challenges: [
      {
        title: 'Nội dung chuyên sâu ra chậm và đắt đỏ',
        description: 'Đội ngũ marketing nội bộ chỉ viết được 8-10 bài mỗi tháng, thuê agency ngoài tốn kém nhưng bài viết thiếu chiều sâu kỹ thuật.',
        impact: 'Kênh organic nghèo nàn, chi phí chạy quảng cáo B2B tăng gấp 3 lần.',
      },
      {
        title: 'Soạn thảo Proposal & Báo giá tốn nhiều ngày',
        description: 'Mỗi dự án B2B phải copy dữ liệu từ hàng chục file Word, Excel cũ, chuyên gia mất 40% thời gian chỉ để định dạng tài liệu.',
        impact: 'Chậm trễ gửi hồ sơ cho khách hàng, giảm tỷ lệ thắng thầu (Win rate).',
      },
      {
        title: 'Tri thức chuyên môn nằm trong đầu vài cá nhân',
        description: 'Khi nhân sự kỳ cựu nghỉ việc, toàn bộ kinh nghiệm và tài liệu tích lũy bị thất lạc, nhân viên mới mất 6 tháng để hòa nhập.',
        impact: 'Chất lượng tư vấn không đồng đều, rủi ro đứt gãy dịch vụ.',
      },
    ],
    centralCaseStudy: {
      title: 'Hệ Thống Content Factory Tự Động Cho Doanh Nghiệp B2B 200 Nhân Sự',
      client: 'Công Ty Tư Vấn Giải Pháp & Dịch Vụ Doanh Nghiệp',
      scale: '200 nhân sự · Đội Marketing 4 người',
      description: 'Sunext thực hiện Trụ cột 2 (Đào tạo Tầng 2 cho đội Marketing) và Trụ cột 3 (Tái cấu trúc quy trình xuất bản thành pipeline khép kín). Đóng gói Custom GPT chuẩn brand voice, lịch xuất bản tự động qua automation platform.',
      metrics: [
        { value: 'x5', label: 'Sản lượng bài viết chuyên sâu (50+ bài/tháng)' },
        { value: '+60%', label: 'Tăng trưởng organic traffic sau 5 tháng' },
        { value: '0đ', label: 'Chi phí ngân sách phát sinh thêm' },
      ],
      caseUrl: '/cases/multimodal-vision-system',
      image: '/assets/vietnam-b2b-office.jpg',
    },
    solutions: [
      {
        name: 'B2B Content Factory & Knowledge Base',
        pillarId: 'mo-hinh-van-hanh',
        pillarName: 'Trụ cột 3: Mô hình vận hành',
        description: 'Hệ thống AI Agent trích xuất kinh nghiệm chuyên gia, viết bài phân tích chuyên sâu chuẩn SEO và tự động dàn trang theo brand guideline.',
        deliverables: ['Custom GPT Brand Voice Engine', 'Automation Publishing Pipeline', 'Bộ SOP kiểm duyệt chất lượng'],
      },
      {
        name: 'Trợ Lý Tự Động Soạn Thảo Proposal & Báo Giá',
        pillarId: 'nang-luc-doi-ngu',
        pillarName: 'Trụ cột 2: Năng lực đội ngũ',
        description: 'Tự động tạo bản đề xuất dự án (RFP/Proposal) chuẩn xác từ brief của khách hàng chỉ trong 15 phút thay vì 3 ngày.',
        deliverables: ['AI Proposal Generator', 'Thư viện mẫu hợp đồng & báo giá chuẩn', 'Tích hợp CRM quản lý deal'],
      },
      {
        name: 'Private LLM Tra Cứu Tri Thức Nội Bộ (Enterprise RAG)',
        pillarId: 'kien-truc-du-lieu',
        pillarName: 'Trụ cột 5: Kiến trúc dữ liệu',
        description: 'Tập trung hóa toàn bộ hợp đồng, quy chế, báo cáo kỹ thuật vào một kho dữ liệu bảo mật, nhân viên tra cứu có nguồn dẫn chứng trong 3 giây.',
        deliverables: ['Private Vector Knowledge Mesh', 'Bảo mật dữ liệu tuyệt đối (NDA-first)', 'Giao diện chat nội bộ phân quyền'],
      },
    ],
    roadmap: [
      { phase: 'Giai đoạn 1 (Tuần 1-3)', duration: '3 tuần', objective: 'Xây dựng Brand Voice Profile và cấu hình Content Engine cho 3 chủ đề trọng điểm.' },
      { phase: 'Giai đoạn 2 (Tuần 4-7)', duration: '4 tuần', objective: 'Đào tạo đội ngũ marketing vận hành, thiết lập luồng tự động hóa phê duyệt bài viết.' },
      { phase: 'Giai đoạn 3 (Tuần 8-12)', duration: '5 tuần', objective: 'Mở rộng sang soạn thảo Proposal và tích hợp Knowledge Base tra cứu nội bộ.' },
    ],
  },
];
