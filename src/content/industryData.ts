import { HEALTHCARE_CLINICAL_BOUNDARY_NOTICE, FINANCE_COMPLIANCE_NOTICE } from './legalSecurityData';

export interface IndustrySolution {
  id: string;
  slug: string;
  name: string;
  englishName: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroImage?: string;
  evidenceCaption?: string;
  marketContext: string;
  criticalNotice?: {
    title: string;
    body: string;
  };
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
    image?: string;
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
    heroImage: '/evidence/dentsu-marketing-ai-lab.png',
    evidenceCaption: 'Lab thực nghiệm & workshop chuyển giao mô hình Marketing/Sales AI Agent cho chuỗi bán lẻ',
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
      scale: '500 nhân sự · Đội HR 4 người · Tuyển 60-80 vị trí/quý',
      description: 'Sunext triển khai Trụ cột 2 (Đào tạo Tầng 1→2 cho đội HR) và Trụ cột 4 (Agent sàng lọc CV tích hợp trực tiếp vào hệ thống ATS). Hệ thống tự động trích xuất kỹ năng, chấm điểm hồ sơ theo tiêu chí chuẩn và lên lịch phỏng vấn tự động.',
      metrics: [
        { value: '-40%', label: 'Chi phí tuyển dụng thực tế' },
        { value: '3 ngày → 2h', label: 'Thời gian sàng lọc hồ sơ ứng viên' },
        { value: '+25%', label: 'Tỷ lệ ứng viên đạt yêu cầu vào phỏng vấn' },
      ],
      caseUrl: '/case-studies/toi-uu-chi-phi-tuyen-dung-hr-ai',
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
    heroImage: '/evidence/ptexim-operations-onsite.png',
    evidenceCaption: 'Khảo sát và kiểm thử quy trình vận hành trực tiếp tại hiện trường phân loại xưởng PTExim Corp',
    marketContext: 'Trong nhà máy cơ khí chính xác, công nhân kiểm định (QA/QC) phải soi hàng nghìn linh kiện mỗi ngày dưới ánh đèn chói. Sau 4 tiếng liên tục, mắt bắt đầu mỏi và sai sót xảy ra. Một vết nứt vi mô bị bỏ sót lọt ra thị trường có thể hủy hoại cả hợp đồng xuất khẩu. Tự động hóa bằng thị giác AI là giải pháp tối ưu để kiểm soát chất lượng đồng nhất 100% chi tiết.',
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
      caseUrl: '/case-studies/ai-auditor-manufacturing',
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
    heroSubheadline: 'Không còn cảnh chuyên gia phải ngồi gõ từng proposal hay marketing bế tắc vì thiếu bài viết kỹ thuật. Tăng trưởng organic traffic B2B bền vững với Content Factory chuẩn brand voice.',
    heroImage: '/evidence/prudential-consultant-enablement.png',
    evidenceCaption: 'Buổi làm việc chuyên sâu đóng gói quy trình tư vấn và tri thức chuyên gia cho đội ngũ B2B',
    marketContext: 'Trong các công ty tư vấn, luật, tài chính hay công nghệ B2B, tài sản quý giá nhất là tri thức của các chuyên gia đầu ngành. Nhưng các chuyên gia này luôn bận rộn với dự án của khách hàng. Kết quả là hồ sơ đề xuất (proposal) mất hàng tuần mới soạn xong, còn kênh marketing nội dung thì chết đứng vì không ai có thời gian viết bài phân tích chuyên sâu.',
    challenges: [
      {
        title: 'Thực tế khó chịu: Tri thức nằm trong đầu một vài cá nhân',
        description: 'Khi nhân sự kỳ cựu bận hoặc nghỉ việc, toàn bộ quy chuẩn kỹ thuật và kinh nghiệm thực tế bị gián đoạn, nhân sự mới mất nhiều thời gian để nắm bắt.',
        impact: 'Chất lượng tư vấn không đồng đều, phụ thuộc hoàn toàn vào một vài cá nhân chủ chốt.',
      },
      {
        title: 'Lầm tưởng phổ biến: "Thuê agency bên ngoài viết bài chuyên môn"',
        description: 'Agency bên ngoài chỉ viết được những bài chung chung, thiếu chiều sâu kỹ thuật cần thiết để thuyết phục khách hàng doanh nghiệp khó tính.',
        impact: 'Tốn kém ngân sách thuê ngoài nhưng không tạo ra organic traffic B2B chất lượng.',
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
        { value: '+60%', label: 'Tăng trưởng organic traffic sau 5 tháng' },
        { value: '-65%', label: 'Thời gian soạn thảo proposal đấu thầu (case Dentsu)' },
      ],
      caseUrl: '/case-studies/content-factory-b2b-marketing',
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
        description: 'Tự động trích xuất yêu cầu từ brief của khách hàng và đề xuất cấu trúc giải pháp, rút ngắn 65% thời gian chuẩn bị proposal kỹ thuật.',
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
  {
    id: 'real-estate',
    slug: 'bat-dong-san',
    name: 'Bất Động Sản & Nhà Phố',
    englishName: 'Real Estate & PropTech',
    heroHeadline: 'Tăng Tốc Kinh Doanh BĐS: Tự Động Hóa Chăm Sóc Khách Hàng & Video Thực Địa',
    heroSubheadline: 'Trao quyền cho 500+ môi giới làm chủ AI tự sản xuất video hiện trường và kịch bản tư vấn ngay trên điện thoại di động, phản hồi khách hàng trong chưa đầy 5 phút.',
    heroImage: '/evidence/vinhomes-sales-deployment.png',
    evidenceCaption: 'Hiện trường triển khai AI Sales Enablement thực tế cho hơn 500 chuyên viên kinh doanh BĐS Vinhomes',
    marketContext: 'Trong bối cảnh thị trường bất động sản cạnh tranh khốc liệt, khách hàng đòi hỏi phản hồi thông tin giỏ hàng, bảng tính dòng tiền và video tiến độ hạ tầng trong vài phút. Nhưng phần lớn sàn giao dịch và đội ngũ môi giới vẫn hoạt động thủ công: tra cứu giỏ hàng qua tin nhắn rời rạc, chờ phòng marketing dựng từng video thực địa và bỏ quên 70% tệp khách hàng cũ. Đơn vị nào phản hồi chậm quá 15 phút, khách hàng sẽ chuyển sang đơn vị phân phối khác.',
    challenges: [
      {
        title: 'Thực tế khó chịu: Quá tải tương tác ban đầu & phản hồi chậm',
        description: 'Mỗi chiến dịch quảng cáo mang về hàng trăm lead, nhưng môi giới mất cả ngày để gọi điện sàng lọc, gửi thông tin cơ bản và đối chiếu nhu cầu.',
        impact: 'Hơn 60% khách hàng tiềm năng mất kiên nhẫn khi phải chờ đợi thông tin dự án quá lâu.',
      },
      {
        title: 'Lầm tưởng phổ biến: "Cần phòng media chuyên nghiệp mới quay được video dự án"',
        description: 'Chờ đợi đội ngũ thiết kế và quay dựng trung tâm khiến chu kỳ ra video mất từ 5-7 ngày, chi phí thuê ngoài đắt đỏ và không bắt kịp nhịp sốt của dự án.',
        impact: 'Nội dung quảng cáo nghèo nàn, nhân viên kinh doanh thiếu công cụ visual để thuyết phục khách hàng.',
      },
      {
        title: 'Bản chất vấn đề: Bỏ quên tệp khách hàng cũ (Lead Reactivation)',
        description: 'Hàng nghìn số điện thoại khách hàng quan tâm trước đây nằm im trong sổ tay môi giới mà không có kịch bản chăm sóc lại tự động theo biến động giá và hạ tầng.',
        impact: 'Lãng phí toàn bộ chi phí quảng cáo đã chi trong quá khứ.',
      },
    ],
    centralCaseStudy: {
      title: 'AI Sales Enablement & Lead Reactivation Cho Mạng Lưới 500+ Môi Giới BĐS',
      client: 'Mạng Lưới Kinh Doanh & Phân Phối Bất Động Sản (Dự án tiêu biểu: Vinhomes)',
      scale: '500+ Chuyên viên Kinh doanh BĐS · Hàng nghìn lead/tháng',
      description: 'Sunext triển khai Trụ cột 2 (Đào tạo năng lực tự sản xuất video & kịch bản) và Trụ cột 3 (Tự động hóa luồng tương tác và trợ lý ảo thông tin dự án). Môi giới chủ động phản hồi khách hàng trong chưa đầy 5 phút với tài liệu cá nhân hóa cao.',
      metrics: [
        { value: '500+', label: 'Môi giới làm chủ công cụ AI' },
        { value: '+200%', label: 'Sản lượng video thực địa do nhân viên tự sản xuất' },
        { value: '< 5 phút', label: 'Thời gian phản hồi thông tin dự án & giỏ hàng' },
      ],
      caseUrl: '/case-studies/vinhomes-ai-sales-enablement',
    },
    solutions: [
      {
        name: 'AI Real Estate Video & Content Engine',
        pillarId: 'nang-luc-doi-ngu',
        pillarName: 'Trụ cột 2: Năng lực đội ngũ',
        description: 'Quy trình sản xuất video thực địa, viết kịch bản dẫn và tạo giọng đọc thuyết minh AI chuyên nghiệp ngay trên điện thoại di động.',
        deliverables: ['Mobile AI Video Workflow', 'Bộ template kịch bản dự án chuẩn', 'Khóa huấn luyện trực tiếp tại hiện trường'],
      },
      {
        name: 'Smart Lead Reactivation & Virtual Project Assistant',
        pillarId: 'mo-hinh-van-hanh',
        pillarName: 'Trụ cột 3: Mô hình vận hành',
        description: 'Trợ lý ảo AI tự động tra cứu giỏ hàng, bảng tính vay ngân hàng và kích hoạt lại tệp khách hàng cũ theo sự kiện mở bán.',
        deliverables: ['Trợ lý ảo tư vấn dự án 24/7', 'Kịch bản chăm sóc đa kênh Zalo/SMS', 'Dashboard quản lý tiến độ chuyển đổi lead'],
      },
      {
        name: 'Private PropTech Knowledge Mesh & Giỏ Hàng Dự Án',
        pillarId: 'kien-truc-du-lieu',
        pillarName: 'Trụ cột 5: Kiến trúc dữ liệu',
        description: 'Tập trung hóa toàn bộ pháp lý, quy hoạch, mặt bằng tầng và chính sách bán hàng vào một kho tri thức bảo mật truy vấn tức thì.',
        deliverables: ['Kho dữ liệu dự án thời gian thực', 'API kết nối CRM bất động sản', 'Phân quyền truy cập chính sách giỏ hàng'],
      },
    ],
    roadmap: [
      { phase: 'Giai đoạn 1 (Tuần 1-3)', duration: '3 tuần', objective: 'Khảo sát tài liệu dự án, cấu hình Trợ lý ảo tra cứu giỏ hàng & đào tạo Tầng 1 cho 50 môi giới nòng cốt.' },
      { phase: 'Giai đoạn 2 (Tuần 4-8)', duration: '5 tuần', objective: 'Chuẩn hóa quy trình sản xuất video thực địa trên di động và tích hợp kịch bản kích hoạt lại lead cũ.' },
      { phase: 'Giai đoạn 3 (Tuần 9-12)', duration: '4 tuần', objective: 'Nhân rộng toàn bộ 500+ nhân sự kinh doanh, đo lường tỷ lệ chốt cọc và tối ưu chi phí quảng cáo.' },
    ],
  },
  {
    id: 'finance',
    slug: 'tai-chinh-dau-tu',
    name: 'Tài Chính, Chứng Khoán & Quản Lý Quỹ',
    englishName: 'Finance, Securities & Asset Management',
    heroHeadline: 'Tự Động Hóa Bóc Tách BCTC & Đối Soát Logic Số Liệu Hai Chiều',
    heroSubheadline: 'Bóc tách báo cáo tài chính PDF scan phức tạp, đối soát logic hai chiều giữa Bảng cân đối và Lưu chuyển tiền tệ với 100% truy vết số trang nguồn gốc (Source Traceability).',
    heroImage: '/evidence/vietcombank-strategic-workshop.jpg',
    evidenceCaption: 'Working session kiến trúc AI và bảo mật dữ liệu tài chính trong môi trường Private VPC Vietcombank',
    marketContext: 'Chi phí cơ hội và rủi ro sai sót số liệu trong các báo cáo định giá tài sản là vấn đề sống còn. Hàng chục chuyên viên phân tích phải dành 2–3 ngày làm việc cơ học cho mỗi doanh nghiệp chỉ để gõ lại số liệu từ PDF vào Excel. Rủi ro gõ sai một con số trên thuyết minh nợ vay hoặc dòng tiền có thể làm sai lệch mô hình định giá (DCF/PE), ảnh hưởng trực tiếp đến uy tín khuyến nghị đầu tư gửi khách hàng tổ chức. Yêu cầu bắt buộc của ngành là Source Traceability (truy vết số trang gốc), Audit Logging (nhật ký kiểm toán) và Cổng kiểm soát rủi ro No-Go khi số liệu mâu thuẫn.',
    criticalNotice: FINANCE_COMPLIANCE_NOTICE,
    challenges: [
      {
        title: 'Thực tế khó chịu: 2–3 ngày nhập liệu cơ học cho mỗi mã cổ phiếu',
        description: 'Chuyên viên phân tích tài chính cấp cao mất phần lớn thời gian chỉ để bóc tách số liệu từ các file PDF báo cáo tài chính scan mờ, thuyết minh phức tạp.',
        impact: 'Chậm nhịp ra quyết định đầu tư và khuyến nghị thị trường trong mùa cao điểm báo cáo quý.',
      },
      {
        title: 'Lầm tưởng phổ biến: "Cứ dùng OCR thông thường là đọc được số liệu"',
        description: 'OCR cơ bản thường xuyên nhận diện nhầm dấu phẩy/chấm, nhảy dòng bảng biểu và bỏ sót các ghi chú thuyết minh nhạy cảm ở chân trang.',
        impact: 'Sai lệch mô hình định giá dòng tiền, phát sinh rủi ro tuân thủ nghiêm trọng.',
      },
      {
        title: 'Bản chất vấn đề: Thiếu cơ chế đối soát logic & truy vết nguồn gốc (Source Traceability)',
        description: 'Các công cụ AI phổ thông tạo ra ảo giác số liệu mà không có cơ chế gắn số trang, số dòng đối chiếu và bẫy kiểm tra cân đối kế toán.',
        impact: 'Không thể vượt qua quy trình kiểm soát rủi ro (Risk Due Diligence) của các định chế tài chính.',
      },
    ],
    centralCaseStudy: {
      title: 'Kiến Trúc Thử Nghiệm AI Multi-Agent Bóc Tách BCTC Thô Có Truy Vết Nguồn',
      client: 'Khối Nghiên Cứu — Vietcap Securities (VCI)',
      scale: '30+ Chuyên viên phân tích · Hàng trăm doanh nghiệp niêm yết',
      description: 'Thiết kế kiến trúc thử nghiệm AI Multi-Agent bóc tách BCTC thô, tích hợp cơ chế đối soát logic hai chiều giữa Bảng cân đối và Lưu chuyển tiền tệ kết hợp truy vết số trang trích xuất nguồn (Source Traceability).',
      metrics: [
        { value: '-75%', label: 'Thời gian bóc tách BCTC thô phòng lab' },
        { value: '2 ngày → 3h', label: 'Chu kỳ xuất bản bản thảo báo cáo' },
        { value: '100%', label: 'Dòng số liệu gắn nhãn số trang gốc' },
      ],
      caseUrl: '/case-studies/vietcap-ai-multi-agent-nghien-cuu-thi-truong',
    },
    solutions: [
      {
        name: 'Multi-Agent Financial Statement Extractor',
        pillarId: 'nen-tang-cong-nghe',
        pillarName: 'Trụ cột 4: Nền tảng công nghệ',
        description: 'Cụm Agent chuyên bóc tách cấu trúc BCTC PDF scan phức tạp, tự động nhận diện thuyết minh và gắn thẻ nguồn gốc số liệu (Source Traceability).',
        deliverables: ['Custom Financial Extraction Agent', 'Engine trích xuất bảng biểu PDF scan', 'Audit log lưu vết 100% phép biến đổi số liệu'],
      },
      {
        name: 'Investment Second Brain & Research Assistant',
        pillarId: 'kien-truc-du-lieu',
        pillarName: 'Trụ cột 5: Kiến trúc dữ liệu',
        description: 'Kho tri thức số hóa tập hợp báo cáo ngành, biên bản ĐHCĐ và dữ liệu vĩ mô; hỗ trợ chuyên viên tra cứu nhanh các chỉ số quá khứ trong 30 giây.',
        deliverables: ['Dedicated Financial RAG Tenant', 'Semantic Search trên tài liệu ĐHCĐ', 'Trích dẫn đối chiếu văn bản nguồn'],
      },
      {
        name: 'Financial Audit Gate & Anomaly Detection',
        pillarId: 'governance-van-hanh',
        pillarName: 'Trụ cột 6: Quản trị & Vận hành',
        description: 'Cổng kiểm soát rủi ro tự động đối chiếu logic kế toán giữa các bảng báo cáo; tự động kích hoạt trạng thái No-Go khi có sai số.',
        deliverables: ['Rule-engine kiểm tra cân đối kế toán', 'Cảnh báo rủi ro số liệu tự động', 'Quy trình Human-in-the-loop duyệt báo cáo'],
      },
    ],
    roadmap: [
      { phase: 'Giai đoạn 1 (Tuần 1-2)', duration: '2 tuần', objective: 'Khảo sát cấu trúc tài liệu PDF scan mẫu, thiết lập ranh giới an toàn Tier 3A và ký kết DPA.' },
      { phase: 'Giai đoạn 2 (Tuần 3-6)', duration: '4 tuần', objective: 'Xây dựng pipeline Multi-Agent bóc tách bảng cân đối/lưu chuyển tiền tệ và tích hợp cơ chế đối soát.' },
      { phase: 'Giai đoạn 3 (Tuần 7-10)', duration: '4 tuần', objective: 'Chạy thử nghiệm Controlled Run trên 50 mã cổ phiếu mẫu, đo lường độ chính xác và đào tạo Tầng 2-3 cho đội ngũ phân tích.' },
    ],
  },
  {
    id: 'healthcare',
    slug: 'y-te-suc-khoe',
    name: 'Y Tế, Bệnh Viện & Chăm Sóc Sức Khỏe',
    englishName: 'Healthcare & Hospital Administration',
    heroHeadline: 'Số Hóa Thủ Tục Hành Chính Y Tế & Hỗ Trợ Tra Cứu Phác Đồ Dưới Quyền Bác Sĩ',
    heroSubheadline: 'Giải tỏa 30-40% áp lực thủ tục giấy tờ hành chính cho y bác sĩ và điều dưỡng. Trợ lý ảo phân luồng tiếp đón 24/7 và tra cứu phác đồ với nguyên tắc Non-negotiable Clinical Boundary tuyệt đối.',
    heroImage: '/evidence/thue-tphcm-document-ai.png',
    evidenceCaption: 'Kiểm thử thực địa hệ thống xử lý chứng từ và ranh giới bảo mật dữ liệu y tế phi lâm sàng',
    marketContext: 'Gánh nặng thủ tục giấy tờ đè nặng lên thời gian thăm khám trực tiếp của y bác sĩ. Bác sĩ và điều dưỡng mất từ 30% đến 40% thời lượng làm việc chỉ để gõ biên bản khám, nhập thông tin bảo hiểm và tra cứu lịch sử bệnh án phân tán. Tình trạng này gây ùn ứ tại các quầy tiếp đón và giảm chất lượng tương tác giữa bác sĩ với người bệnh. Ứng dụng AI trong y tế đòi hỏi sự chuẩn mực tuyệt đối về ranh giới lâm sàng và bảo mật dữ liệu sức khỏe cá nhân.',
    criticalNotice: HEALTHCARE_CLINICAL_BOUNDARY_NOTICE,
    challenges: [
      {
        title: 'Thực tế khó chịu: 30-40% giờ công của y bác sĩ dành cho nhập liệu hành chính',
        description: 'Bác sĩ và điều dưỡng bị quá tải bởi việc ghi chép biên bản khám bệnh, tóm tắt bệnh án và tra cứu lịch sử khám phân tán trên nhiều phần mềm.',
        impact: 'Ùn ứ tại quầy tiếp đón, rút ngắn thời gian tư vấn trực tiếp và lắng nghe người bệnh.',
      },
      {
        title: 'Lầm tưởng nguy hiểm: "Để AI tự động chẩn đoán và gợi ý toa thuốc"',
        description: 'Ảo giác và dung sai của AI trong lâm sàng là rủi ro không thể chấp nhận đối với an toàn tính mạng bệnh nhân và trách nhiệm pháp lý bệnh viện.',
        impact: 'Nguy cơ tai biến y khoa và vi phạm nghiêm trọng quy chuẩn hành nghề y.',
      },
      {
        title: 'Bản chất vấn đề: Cần giải phóng khâu hành chính và tra cứu, bảo toàn quyền chỉ định của Bác sĩ',
        description: 'Cần phân định ranh giới nghiêm ngặt: AI chỉ làm nhiệm vụ tiếp đón hành chính và tìm kiếm ngữ nghĩa văn bản phác đồ; bác sĩ giữ 100% quyền quyết định chuyên môn.',
        impact: 'Bảo vệ an toàn bệnh nhân, tuân thủ pháp luật và nâng cao năng suất phục vụ.',
      },
    ],
    centralCaseStudy: {
      title: 'Đề Án Chuyển Đổi Số Tiếp Đón & Quản Trị Dữ Liệu Bệnh Viện (An Sinh / Trung Sơn Pharma)',
      client: 'Hệ Thống Y Tế & Chăm Sóc Sức Khỏe Tư Nhân',
      scale: 'Chuỗi cơ sở y tế · Hàng nghìn lượt tiếp đón/ngày',
      description: 'Tái cấu trúc quy trình tiếp đón người bệnh ban đầu, triển khai Chatbot AI hỗ trợ đăng ký lịch hẹn hành chính 24/7 và tự động hóa tổng hợp ghi chú hành chính của điều dưỡng, tuân thủ nghiêm ngặt ranh giới phi lâm sàng.',
      metrics: [
        { value: '-50%', label: 'Thời gian chờ đợi tại quầy tiếp đón' },
        { value: '-30%', label: 'Giờ công hành chính điều dưỡng ca trực' },
        { value: '+5-7 phút', label: 'Thời gian bác sĩ lắng nghe người bệnh' },
      ],
      caseUrl: '',
    },
    solutions: [
      {
        name: 'Trợ Lý Tiếp Đón & Đặt Hẹn Hành Chính 24/7',
        pillarId: 'mo-hinh-van-hanh',
        pillarName: 'Trụ cột 3: Mô hình vận hành',
        description: 'Tiếp nhận thông tin hành chính sơ bộ qua Zalo/Website, hướng dẫn chuẩn bị giấy tờ/BHYT và phân luồng khung giờ khám, giảm ùn ứ tại sảnh tiếp đón.',
        deliverables: ['Chatbot tiếp đón hành chính 24/7', 'Hệ thống điều phối lịch khám đa kênh', 'Phân luồng thông tin phòng ban'],
      },
      {
        name: 'Chuẩn Hóa Hồ Sơ & Số Hóa Ghi Chú Phi Lâm Sàng',
        pillarId: 'workflow-automation',
        pillarName: 'Trụ cột 2: Quy trình tự động',
        description: 'Tự động trích xuất và số hóa các chứng từ, kết quả xét nghiệm định dạng văn bản phi cấu trúc thành bản tổng hợp hồ sơ hành chính phục vụ bác sĩ đối soát nhanh.',
        deliverables: ['Pipeline xử lý văn bản hành chính y tế', 'Mẫu tóm tắt bệnh án phi lâm sàng', 'Tích hợp bảo mật dữ liệu Nghị định 13'],
      },
      {
        name: 'Tra Cứu Tài Liệu Y Khoa & Phác Đồ Bộ Y Tế Đã Phê Duyệt',
        pillarId: 'kien-truc-du-lieu',
        pillarName: 'Trụ cột 5: Kiến trúc dữ liệu',
        description: 'Hỗ trợ y bác sĩ tra cứu nhanh tài liệu hướng dẫn điều trị của Bộ Y tế đã được Hội đồng Y khoa thẩm định nạp sẵn vào kho dữ liệu; AI chỉ trích dẫn nguyên văn văn bản nguồn.',
        deliverables: ['Hệ thống Medical Reference RAG', 'Kho dữ liệu phác đồ Bộ Y tế chuẩn hóa', 'Chốt chặn Doctor-in-the-loop bắt buộc'],
      },
    ],
    roadmap: [
      { phase: 'Giai đoạn 1 (Tuần 1-3)', duration: '3 tuần', objective: 'Thẩm định an toàn dữ liệu bệnh nhân, ký kết DPA và thiết lập hạ tầng bảo mật Tier 2 Dedicated Tenant.' },
      { phase: 'Giai đoạn 2 (Tuần 4-8)', duration: '5 tuần', objective: 'Triển khai Trợ lý tiếp đón hành chính 24/7 và kiểm thử quy trình điều phối người bệnh tại sảnh.' },
      { phase: 'Giai đoạn 3 (Tuần 9-12)', duration: '4 tuần', objective: 'Xây dựng kho tra cứu phác đồ tham khảo cho bác sĩ và tổ chức sát hạch Tầng 1-2 cho nhân viên y tế.' },
    ],
  },
];

