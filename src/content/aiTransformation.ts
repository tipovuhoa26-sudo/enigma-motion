export interface MetricItem {
  value: string;
  label: string;
}

export interface CaseStudyEvidence {
  client: string;
  industry: string;
  teamSize: string;
  story: string;
  metrics: MetricItem[];
  caseStudyUrl: string;
}

export interface PillarData {
  number: number;
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  rewiredName: string;
  maturityAxis: string;
  sunextService: {
    name: string;
    url: string;
    badge: string;
    description: string;
  };
  introParagraphs: string[];
  myth: {
    title: string;
    quote: string;
    paragraphs: string[];
  };
  reality: {
    title: string;
    summary: string;
    points: {
      title: string;
      desc: string;
    }[];
    comparison?: {
      before: string[];
      after: string[];
    };
  };
  evidence?: CaseStudyEvidence[];
  solution: {
    title: string;
    description: string;
    highlights: string[];
    ctaText: string;
    ctaUrl: string;
  };
  relatedPillars: {
    number: number;
    slug: string;
    title: string;
    reason: string;
  }[];
}

export interface AssessmentQuestion {
  id: string;
  axis: string;
  pillarNumber: number;
  question: string;
  subtext: string;
  options: {
    score: number;
    level: string;
    label: string;
    description: string;
  }[];
}

export const PILLARS_DATA: PillarData[] = [
  {
    number: 1,
    id: 'chien-luoc-so',
    slug: 'chien-luoc-so',
    title: 'Chiến lược số do kinh doanh dẫn dắt',
    metaTitle: 'Trụ cột 1: Chiến lược số do kinh doanh dẫn dắt — Vì sao AI đang chạy vô hướng',
    metaDescription: 'Doanh nghiệp thử AI ở khắp nơi nhưng không nơi nào ra kết quả? Vấn đề không phải công cụ. Vấn đề là bạn chưa có chiến lược AI do kinh doanh dẫn dắt.',
    tagline: 'Vì sao AI của bạn đang chạy vô hướng dù phòng ban nào cũng thử',
    rewiredName: 'Business-led Digital Roadmap',
    maturityAxis: 'Chiến lược & tầm nhìn AI',
    sunextService: {
      name: 'Chiến lược & lộ trình AI',
      url: '/giai-phap/dich-vu/#chien-luoc-ai',
      badge: 'Giai đoạn 1 · Strategy',
      description: 'Xác định đúng miền nghiệp vụ tạo ra giá trị kinh tế lớn nhất, dựng lộ trình đầu tư với use case rõ ràng và KPI tài chính cụ thể.',
    },
    introParagraphs: [
      'Hỏi thật: công ty bạn đang chạy bao nhiêu "dự án AI" cùng lúc?',
      'Marketing thử một con chatbot. Sales có người tự mày mò ChatGPT viết email. IT đang test một cái tool tóm tắt tài liệu. Không ai trong số đó biết việc người kia đang làm, và quan trọng hơn — không ai biết cái nào trong số đó thật sự đáng làm trước.',
      'Đó không phải chuyển đổi AI. Đó là một đám thử nghiệm ngẫu nhiên, mỗi phòng ban tự bơi, không ai chịu trách nhiệm về việc chọn đúng chỗ để đầu tư.',
    ],
    myth: {
      title: 'Cái lầm tưởng: "Cứ để các phòng ban tự thử, cái nào hay thì nhân rộng"',
      quote: 'Cứ để 1.000 bông hoa nở, nhân viên thấy cái gì tiện thì tự dùng.',
      paragraphs: [
        'Nghe rất hợp lý. Rất dân chủ. Rất "để 1.000 bông hoa nở". Và đó chính là lý do phần lớn ngân sách AI của doanh nghiệp bốc hơi mà không ai giải thích được vì sao.',
        'Vấn đề: khi bạn để mọi phòng ban tự chọn dự án AI của mình, bạn đang tối ưu cho cái dễ làm nhất, không phải cái tạo ra nhiều giá trị nhất.',
        'Phòng ban nào có người rành công nghệ hơn sẽ ra được demo đẹp trước — không có nghĩa đó là nơi AI tạo ra tiền nhiều nhất cho công ty.',
      ],
    },
    reality: {
      title: 'Cái đúng: Bắt đầu từ câu hỏi kinh doanh, không phải câu hỏi công nghệ',
      summary: 'McKinsey nhìn vào hàng nghìn sáng kiến AI của doanh nghiệp lớn và rút ra một điều rất đơn giản: AI tạo ra giá trị không đồng đều giữa các miền nghiệp vụ. Có miền tạo ra giá trị gấp 10 lần miền khác, với cùng một lượng công sức bỏ ra.',
      points: [
        {
          title: 'Hỏi về chi phí giờ công',
          desc: 'Miền nào trong doanh nghiệp đang tốn nhiều giờ công nhất cho việc lặp lại, thủ công?',
        },
        {
          title: 'Hỏi về tổn thất doanh thu',
          desc: 'Miền nào đang mất doanh thu hoặc mất khách vì thời gian xử lý chậm hoặc sai sót con người?',
        },
        {
          title: 'Hỏi về tác động tài chính (P&L)',
          desc: 'Nếu giải quyết được miền này bằng AI, con số cụ thể nào trên báo cáo tài chính sẽ nhúc nhích?',
        },
      ],
    },
    evidence: [
      {
        client: 'Doanh nghiệp Bán lẻ 500 nhân sự',
        industry: 'Retail & Consumer Goods',
        teamSize: '500 nhân sự',
        story: '60 đến 80 vị trí mỗi quý, 4 nhân sự HR, 3 ngày cho mỗi hồ sơ. Thay vì mua hàng loạt công cụ rời rạc, ban lãnh đạo chuỗi bán lẻ chọn định vị đúng điểm nghẽn tuyển dụng thời vụ để tập trung nguồn lực giải quyết trước.',
        metrics: [
          { value: '-40%', label: 'Chi phí tuyển dụng' },
          { value: '3 ngày → 2h', label: 'Thời gian lọc CV' },
          { value: '+25%', label: 'Tỷ lệ vào phỏng vấn' },
        ],
        caseStudyUrl: '/case-studies/toi-uu-chi-phi-tuyen-dung-hr-ai/',
      },
    ],
    solution: {
      title: 'Cách Sunext giải trụ cột này',
      description: 'Đây chính là bước đầu tiên trong ba bước Sunext làm với mọi doanh nghiệp: Chiến lược & lộ trình AI. Không bán công cụ trước. Xác định đúng miền nghiệp vụ tạo ra giá trị cao nhất trước, dựng thành một lộ trình sẵn sàng để đầu tư — có use case rõ ràng, có cột mốc, có chỉ số đo lường thành công — rồi mới nói đến công cụ nào, triển khai ra sao.',
      highlights: [
        'Xếp hạng use case theo giá trị kinh tế tạo ra, không theo độ "hot" công nghệ.',
        'Thiết lập chỉ số đo lường (KPI/ROI) tài chính định lượng cho từng giai đoạn.',
        'Xác định rõ Product Owner chịu trách nhiệm sở hữu kết quả cuối cùng.',
        'Cam kết bảo mật tuyệt đối với NDA-first và Private Architecture.',
      ],
      ctaText: 'Khám phá Dịch vụ Chiến lược & Lộ trình AI',
      ctaUrl: '/giai-phap/dich-vu/#chien-luoc-ai',
    },
    relatedPillars: [
      {
        number: 2,
        slug: 'nang-luc-doi-ngu',
        title: 'Đội ngũ nhân tài nội bộ',
        reason: 'Sau khi xác định use case ưu tiên, câu hỏi tiếp theo là: đội ngũ có đủ năng lực để thực thi?',
      },
      {
        number: 5,
        slug: 'kien-truc-du-lieu',
        title: 'Kiến trúc dữ liệu doanh nghiệp',
        reason: 'Use case giá trị cao luôn đòi hỏi nền tảng dữ liệu sạch tương ứng để mô hình AI vận hành.',
      },
    ],
  },
  {
    number: 2,
    id: 'nang-luc-doi-ngu',
    slug: 'nang-luc-doi-ngu',
    title: 'Đội ngũ nhân tài nội bộ',
    metaTitle: 'Trụ cột 2: Đội ngũ nhân tài nội bộ — Vì sao mua ChatGPT cho cả công ty không cứu được bạn',
    metaDescription: 'Bạn mua tài khoản AI cho toàn bộ nhân viên, ba tháng sau chẳng ai dùng. Đây là lý do — và cách xây năng lực AI thật sự bám rễ trong tổ chức.',
    tagline: 'Vì sao mua ChatGPT cho cả công ty vẫn không ai dùng sau ba tháng',
    rewiredName: 'Talent Bench & Capabilities',
    maturityAxis: 'Con người & năng lực đội ngũ',
    sunextService: {
      name: 'Đào tạo & xây năng lực AI (Tầng 1 → Tầng 5)',
      url: '/giai-phap/dich-vu/#dao-tao',
      badge: 'Giai đoạn 2 · Enablement',
      description: 'Chương trình đào tạo theo thang 5 tầng năng lực: Foundation → Marketing AI → Agentics Automations → Pipeline Engineering → Custom Vision/LLM.',
    },
    introParagraphs: [
      'Bạn mua gói ChatGPT Team cho 50 người.',
      'Tháng đầu, ai cũng vào thử cho vui. Tháng thứ ba, log-in giảm còn một phần mười. Tháng thứ sáu, chỉ còn hai, ba người vẫn dùng — những người vốn dĩ đã giỏi công nghệ từ trước, không cần ai dạy.',
      'Bạn vừa trả tiền cho 48 tài khoản không ai đụng tới.',
    ],
    myth: {
      title: 'Cái lầm tưởng: "AI dễ dùng, cứ đưa công cụ là người ta tự học được"',
      quote: 'Công cụ có giao diện chat trực quan, phát tài khoản là nhân viên tự làm được hết.',
      paragraphs: [
        'Đúng là AI dễ dùng hơn phần mềm doanh nghiệp mười năm trước. Nhưng "dễ dùng" và "biết dùng để ra kết quả" là hai chuyện hoàn toàn khác nhau.',
        'Biết gõ vào ô chat không có nghĩa là biết viết một prompt ra được kết quả dùng được ngay. Biết ChatGPT tồn tại không có nghĩa là biết áp dụng nó vào đúng công việc hàng ngày của mình — báo cáo tuần, email khách hàng, tóm tắt hợp đồng.',
        'Không có ai dẫn dắt, không có cấu trúc học rõ ràng, phần lớn nhân viên thử một lần, không ra được kết quả ngay, rồi quay lại làm theo cách cũ — cách họ chắc chắn sẽ ra việc, dù chậm hơn.',
      ],
    },
    reality: {
      title: 'Cái đúng: Năng lực AI phải được xây theo tầng, không phải phát công cụ rồi hy vọng',
      summary: 'McKinsey gọi đây là "Talent Bench" — không phải một buổi đào tạo một lần rồi thôi, mà một thang năng lực đi từ nhận thức cơ bản đến khả năng tự vận hành và nhân rộng AI trong công việc thật.',
      points: [
        {
          title: 'Toàn bộ nhân viên (Tầng 1 - Foundation)',
          desc: 'Hiểu đúng AI làm được gì và không làm được gì, thành thạo quy trình prompting chuẩn theo nghiệp vụ văn phòng hàng ngày mà không cần biết lập trình.',
        },
        {
          title: 'Nhóm nòng cốt AI Champions (Tầng 2 & 3)',
          desc: 'Tự xây dựng AI Agent, cấu hình luồng tự động hóa trong phòng ban, trở thành điểm tựa lan tỏa thay vì chờ đợi phòng IT làm hộ.',
        },
        {
          title: 'Đội ngũ lãnh đạo & quản lý',
          desc: 'Hiểu sâu bản chất để ra quyết định phân bổ nguồn lực, đánh giá ROI và dẫn dắt chuyển dịch mô hình cạnh tranh.',
        },
      ],
    },
    evidence: [
      {
        client: 'Doanh nghiệp Bán lẻ 500 nhân sự',
        industry: 'Retail & Services',
        teamSize: '500 nhân sự',
        story: 'Đội HR không vội nhận bàn giao công cụ ngay từ đầu. Họ chủ động tham gia đào tạo nâng tầng năng lực (Tầng 1 & 2) để hiểu bản chất dữ liệu tuyển dụng, trước khi tự tin làm chủ quy trình sàng lọc hồ sơ tự động.',
        metrics: [
          { value: '3 ngày → 2h', label: 'Thời gian xử lý CV' },
          { value: '-40%', label: 'Chi phí tuyển dụng' },
          { value: '+25%', label: 'Tỷ lệ ứng viên đạt yêu cầu' },
        ],
        caseStudyUrl: '/case-studies/toi-uu-chi-phi-tuyen-dung-hr-ai/',
      },
      {
        client: 'Doanh nghiệp Dịch vụ B2B 200 nhân sự',
        industry: 'B2B Professional Services',
        teamSize: '200 nhân sự',
        story: 'Đội ngũ marketing nội bộ 4 người trực tiếp làm chủ quy trình đóng gói tri thức (Tầng 2), biến kinh nghiệm chuyên sâu của các chuyên gia thành bài viết chuyên sâu chuẩn Brand Voice mà không phụ thuộc agency ngoài.',
        metrics: [
          { value: 'x5', label: 'Sản lượng content (50+ bài/tháng)' },
          { value: '+60%', label: 'Organic traffic sau 5 tháng' },
          { value: '0đ', label: 'Chi phí ngân sách phát sinh thêm' },
        ],
        caseStudyUrl: '/case-studies/content-factory-b2b-marketing/',
      },
    ],
    solution: {
      title: 'Cách Sunext giải trụ cột này',
      description: 'Sunext xây năng lực AI theo đúng một thang tiến trình rõ ràng — từ Tầng 1 (xóa mù AI cho toàn tổ chức) đến các tầng chuyên sâu hơn theo từng chức năng và mức độ tự động hóa. Không đào tạo chung chung một buổi rồi thôi — mỗi tầng có bài kiểm tra năng lực và cam kết áp dụng vào đúng công việc thật của học viên.',
      highlights: [
        'Thang năng lực 5 tầng chuẩn hóa: Foundation, Domain Specialist, Autonomous Agentics, Automation Pipeline, Custom Models.',
        'Học trên case study nghiệp vụ thật của chính doanh nghiệp, không học lý thuyết viển vông.',
        'Thiết lập bộ tiêu chuẩn prompt và SOP nội bộ sẵn sàng đưa vào vận hành hàng ngày.',
        'Đo lường mức độ tiếp thu và tỷ lệ ứng dụng thực tế sau khóa đào tạo.',
      ],
      ctaText: 'Xem Lộ trình Đào tạo Năng lực Tầng 1→5',
      ctaUrl: '/giai-phap/dich-vu/#dao-tao',
    },
    relatedPillars: [
      {
        number: 3,
        slug: 'mo-hinh-van-hanh',
        title: 'Mô hình vận hành',
        reason: 'Đội ngũ có kỹ năng nhưng quy trình cũ vẫn nhiều lớp tắc nghẽn thì hiệu quả vẫn bị triệt tiêu.',
      },
      {
        number: 4,
        slug: 'nen-tang-cong-nghe',
        title: 'Nền tảng công nghệ',
        reason: 'Để đội ngũ phát huy tối đa năng lực, công cụ phải được tích hợp vào hệ thống làm việc thay vì cửa sổ chat riêng.',
      },
    ],
  },
  {
    number: 3,
    id: 'mo-hinh-van-hanh',
    slug: 'mo-hinh-van-hanh',
    title: 'Mô hình vận hành',
    metaTitle: 'Trụ cột 3: Mô hình vận hành — Vì sao AI lắp vào quy trình cũ chỉ làm cái sai chạy nhanh hơn',
    metaDescription: 'AI không sửa một quy trình tồi — nó chỉ khiến quy trình tồi đó chạy nhanh hơn. Đây là lý do mô hình vận hành phải được thiết kế lại trước, không phải sau.',
    tagline: 'Vì sao AI lắp vào quy trình cũ chỉ làm cái sai chạy nhanh hơn',
    rewiredName: 'Agile Operating Model',
    maturityAxis: 'Quy trình & cách vận hành',
    sunextService: {
      name: 'Tái cấu trúc quy trình & tri thức nội bộ',
      url: '/giai-phap/dich-vu/#nen-tang-du-lieu',
      badge: 'Giai đoạn 3 · Re-engineering',
      description: 'Đơn giản hóa quy trình vận hành, loại bỏ bước thừa và cấu trúc hóa toàn bộ kho tri thức rải rác thành hệ thống AI truy xuất được.',
    },
    introParagraphs: [
      'Đây là một sự thật khó chịu mà rất ít nhà cung cấp AI dám nói với bạn: nếu quy trình của bạn đang tệ, AI không sửa nó. AI chỉ khiến nó tệ nhanh hơn.',
      'Một quy trình duyệt hợp đồng qua 5 lớp email, mỗi lớp chờ 1-2 ngày — thêm AI vào để "soạn nhanh hơn" thì bạn chỉ tiết kiệm được phần soạn thảo, còn 5 lớp chờ duyệt kia vẫn nguyên vẹn, vẫn là nút thắt lớn nhất. Bạn vừa tiêu tiền cho AI, vừa không giải quyết được vấn đề thật.',
    ],
    myth: {
      title: 'Cái lầm tưởng: "Cứ thả AI vào quy trình hiện tại, nó sẽ tự động hóa phần chậm nhất"',
      quote: 'Quy trình đang chạy cả chục năm nay, chỉ cần chèn AI vào giữa là tự động tăng tốc.',
      paragraphs: [
        'Đây là cách nghĩ khiến nhiều dự án AI kết thúc bằng một câu quen thuộc: "AI cũng không nhanh hơn là bao."',
        'Vấn đề không nằm ở AI. Vấn đề là quy trình hiện tại được thiết kế cho con người làm thủ công, với những bước tồn tại chỉ vì lý do lịch sử — không ai còn nhớ vì sao, nhưng không ai dám bỏ.',
        'Ném AI vào một quy trình như vậy, bạn chỉ đang tự động hóa sự thủ công, không tạo ra một cách làm việc mới.',
      ],
    },
    reality: {
      title: 'Cái đúng: Thiết kế lại quy trình trước, để AI tích hợp một cách tự nhiên',
      summary: 'Mô hình vận hành đúng nghĩa cho AI nghĩa là bạn hỏi lại từ đầu: nếu thiết kế quy trình này lại từ số 0, biết rằng AI có thể đọc tài liệu, đối chiếu dữ liệu, trả lời câu hỏi lặp lại trong vài giây — quy trình sẽ trông như thế nào?',
      points: [
        {
          title: 'Đơn giản hóa và xóa bỏ bước thừa',
          desc: 'Bỏ hẳn ba bước rườm rà, gộp hai bước làm một, và để AI đứng ở đúng điểm ra quyết định thay vì điểm thao tác tay chân.',
        },
        {
          title: 'Cấu trúc hóa tri thức nội bộ',
          desc: 'Biến tài liệu, SOP, kinh nghiệm trong đầu nhân sự lâu năm thành cơ sở tri thức số (Knowledge Base) mà AI tìm kiếm và suy luận chuẩn xác.',
        },
        {
          title: 'Phân định ranh giới Người & Máy (Human-in-the-loop)',
          desc: 'Quy định rõ điểm nào AI tự động 100%, điểm nào cần chuyên gia con người ký duyệt cuối cùng.',
        },
      ],
    },
    evidence: [
      {
        client: 'Doanh nghiệp Dịch vụ B2B 200 nhân sự',
        industry: 'B2B Marketing & Media',
        teamSize: '200 nhân sự',
        story: 'Thay vì để tri thức quý nằm kẹt trong đầu các chuyên gia bận rộn, đội marketing tái thiết kế luồng vận hành Content Factory: chuyển hóa bản ghi âm và tài liệu thô thành bài viết phân tích hoàn chỉnh với chu kỳ nhanh gấp 5 lần.',
        metrics: [
          { value: 'x5', label: 'Tốc độ sản xuất bài viết' },
          { value: '50+', label: 'Bài viết chất lượng cao/tháng' },
          { value: '+60%', label: 'Organic traffic sau 5 tháng' },
        ],
        caseStudyUrl: '/case-studies/content-factory-b2b-marketing/',
      },
    ],
    solution: {
      title: 'Cách Sunext giải trụ cột này',
      description: 'Trước khi nói tới công cụ, Sunext làm việc trực tiếp trên quy trình: đơn giản hóa, thiết kế lại để AI tích hợp tự nhiên vào vận hành, và cấu trúc hóa tri thức nội bộ thành một hệ thống tìm kiếm được — nằm trong phần Tái cấu trúc quy trình & tri thức của dịch vụ triển khai.',
      highlights: [
        'Audit quy trình hiện trạng và định vị chính xác các nút thắt độ trễ (latency bottlenecks).',
        'Tái cấu trúc SOP doanh nghiệp thành dữ liệu có cấu trúc cho AI truy vấn.',
        'Thiết lập cơ chế kiểm soát chất lượng đầu ra với nguyên tắc Human-in-the-loop.',
        'Rút ngắn chu kỳ phản hồi từ vài ngày xuống thời gian thực.',
      ],
      ctaText: 'Xem Dịch vụ Tái cấu trúc Quy trình & Dữ liệu',
      ctaUrl: '/giai-phap/dich-vu/#nen-tang-du-lieu',
    },
    relatedPillars: [
      {
        number: 4,
        slug: 'nen-tang-cong-nghe',
        title: 'Nền tảng công nghệ',
        reason: 'Quy trình đã thiết kế lại cần nền tảng công nghệ kết nối các hệ thống ERP, CRM để vận hành trơn tru.',
      },
      {
        number: 6,
        slug: 'mo-rong-quy-mo',
        title: 'Mở rộng quy mô & áp dụng',
        reason: 'Quy trình mới cần văn hóa chấp nhận thay đổi để không bị nhân viên âm thầm quay về cách làm cũ.',
      },
    ],
  },
  {
    number: 4,
    id: 'nen-tang-cong-nghe',
    slug: 'nen-tang-cong-nghe',
    title: 'Nền tảng công nghệ',
    metaTitle: 'Trụ cột 4: Nền tảng công nghệ — Vì sao AI của bạn vẫn cần người copy-paste bằng tay',
    metaDescription: 'AI trả lời rất thông minh trong một cửa sổ chat riêng biệt, nhưng không nói chuyện được với ERP, CRM của bạn. Đây là lý do và cách giải.',
    tagline: 'Vì sao AI trả lời thông minh nhưng nhân viên vẫn copy-paste bằng tay',
    rewiredName: 'Technology Platform & Core Integration',
    maturityAxis: 'Dữ liệu & hệ thống công nghệ',
    sunextService: {
      name: 'Engineering & Integration (Tích hợp AI + RPA)',
      url: '/giai-phap/dich-vu/#tich-hop-ai',
      badge: 'Giai đoạn 4 · Integration',
      description: 'Tích hợp AI sâu vào ERP, CRM, HRIS và hệ thống lõi hiện tại, tự động hóa luồng dữ liệu hai chiều không gián đoạn.',
    },
    introParagraphs: [
      'Đây là cảnh tượng lặp đi lặp lại ở rất nhiều công ty: nhân viên mở một cửa sổ ChatGPT, copy dữ liệu từ SAP hoặc Excel dán vào, chờ AI trả lời, rồi copy kết quả dán ngược trở lại hệ thống.',
      'AI trả lời rất thông minh. Con người vẫn đang làm phần việc buồn tẻ nhất — chuyển dữ liệu qua lại bằng tay giữa các hệ thống không nói chuyện được với nhau.',
      'Đó không phải tự động hóa. Đó là thêm một bước thủ công mới, chỉ khác là bước đó bây giờ có chữ "AI" gắn vào.',
    ],
    myth: {
      title: 'Cái lầm tưởng: "AI giỏi là đủ, không cần AI phải nằm trong hệ thống của mình"',
      quote: 'Cứ dùng AI qua giao diện web riêng biệt, khi nào cần thì mở tab khác tra cứu.',
      paragraphs: [
        'Rất nhiều doanh nghiệp hài lòng với việc có một con AI "giỏi" đứng ngoài, dùng qua giao diện web riêng. Vấn đề là AI đứng ngoài hệ sinh thái công nghệ của bạn không tạo ra giá trị vận hành thật — nó chỉ là một công cụ tra cứu nhanh, không thể tự động thực thi bất cứ điều gì trong quy trình thật của công ty.',
        'Giá trị lớn của AI không nằm ở việc nó trả lời thông minh trong một cửa sổ chat. Nó nằm ở việc AI tự đọc dữ liệu thật từ hệ thống thật, tự xử lý, tự trả kết quả về đúng nơi cần — không có ai đứng giữa làm cầu nối bằng tay.',
      ],
    },
    reality: {
      title: 'Cái đúng: Nền tảng công nghệ phải kết nối được, không phải đứng riêng lẻ',
      summary: 'Một nền tảng công nghệ đúng nghĩa cho AI phải cắm trực tiếp vào hệ thống hiện tại, vận hành như một thành phần tự nhiên của hạ tầng doanh nghiệp.',
      points: [
        {
          title: 'Tích hợp trực tiếp với hệ thống cốt lõi',
          desc: 'Kết nối SAP, Oracle, Microsoft Dynamics, Salesforce hay custom ERP nội bộ. AI đọc dữ liệu thật và ghi kết quả trực tiếp về nơi công việc diễn ra.',
        },
        {
          title: 'Kết hợp AI với RPA (Robotic Process Automation)',
          desc: 'Tự động hóa các tác vụ lặp lại xuyên phòng ban: đối chiếu chứng từ, trích xuất hóa đơn, cảnh báo rủi ro.',
        },
        {
          title: 'Kiến trúc bảo mật cấp doanh nghiệp',
          desc: 'Triển khai mô hình Private LLM hoặc Enterprise Gateway với mã hóa đầu cuối, tuân thủ nghiêm ngặt chính sách bảo mật nội bộ.',
        },
      ],
    },
    evidence: [
      {
        client: 'Doanh nghiệp Bán lẻ 500 nhân sự',
        industry: 'Retail Operations',
        teamSize: '500 nhân sự',
        story: 'Đội HR không phải copy-paste hồ sơ giữa các cửa sổ chat riêng lẻ. AI Screener được tích hợp thẳng vào hệ thống ATS quen thuộc của họ, tự động chấm điểm và hỗ trợ tiếp nhận ứng viên 24/7.',
        metrics: [
          { value: '2 giờ', label: 'Xử lý xong toàn bộ hồ sơ ứng viên' },
          { value: '-40%', label: 'Chi phí tuyển dụng thực tế' },
          { value: '100%', label: 'Không còn thao tác copy-paste tay' },
        ],
        caseStudyUrl: '/case-studies/toi-uu-chi-phi-tuyen-dung-hr-ai/',
      },
      {
        client: 'Nhà máy Sản xuất 800 nhân sự',
        industry: 'Manufacturing & Industrial',
        teamSize: '800 nhân sự',
        story: 'Công nhân QA không còn phải căng mắt soi từng chi tiết dưới ánh đèn chói suốt ca 8 tiếng. Camera AI công nghiệp trực tiếp tại chuyền quét linh kiện < 50ms, tự động gạt phế phẩm và cảnh báo tức thì cho quản đốc ca.',
        metrics: [
          { value: '99.8%', label: 'Độ chính xác phát hiện lỗi sản phẩm' },
          { value: '1.5%', label: 'Tỷ lệ lỗi lọt tới tay khách hàng' },
          { value: '24/7', label: 'Vận hành giám sát liên tục' },
        ],
        caseStudyUrl: '/case-studies/ai-auditor-manufacturing/',
      },
    ],
    solution: {
      title: 'Cách Sunext giải trụ cột này',
      description: 'Sunext tích hợp AI trực tiếp với hệ thống cốt lõi doanh nghiệp bạn đang dùng — không yêu cầu thay hệ thống, không làm gián đoạn vận hành — và kết hợp với tự động hóa quy trình (AI + RPA) cho các tác vụ lặp lại xuyên phòng ban.',
      highlights: [
        'API & Middleware kết nối hai chiều với SAP, Oracle, CRM và cơ sở dữ liệu legacy.',
        'Mô hình Hybrid / On-premise / Private Cloud đảm bảo dữ liệu không bị rò rỉ ra ngoài.',
        'Hệ thống Agentic Workflow tự động thực thi chuỗi hành động phức tạp.',
        'Cam kết thời gian hoạt động (SLA) và khả năng mở rộng không độ trễ.',
      ],
      ctaText: 'Xem Dịch vụ Engineering & Integration',
      ctaUrl: '/giai-phap/dich-vu/#tich-hop-ai',
    },
    relatedPillars: [
      {
        number: 5,
        slug: 'kien-truc-du-lieu',
        title: 'Kiến trúc dữ liệu doanh nghiệp',
        reason: 'Hệ thống tích hợp tốt cần đường ống dữ liệu sạch chảy qua — nếu dữ liệu bẩn thì chỉ tự động hóa sự hỗn loạn.',
      },
      {
        number: 3,
        slug: 'mo-hinh-van-hanh',
        title: 'Mô hình vận hành',
        reason: 'Hạ tầng kết nối phải phục vụ cho quy trình nghiệp vụ đã được tối ưu hóa.',
      },
    ],
  },
  {
    number: 5,
    id: 'kien-truc-du-lieu',
    slug: 'kien-truc-du-lieu',
    title: 'Kiến trúc dữ liệu doanh nghiệp',
    metaTitle: 'Trụ cột 5: Kiến trúc dữ liệu doanh nghiệp — Vì sao AI trả lời sai dù model rất tốt',
    metaDescription: 'Mô hình AI dù tiên tiến đến đâu vẫn trả lời sai nếu dữ liệu bạn đưa vào nó bẩn, rời rạc, mâu thuẫn. Đây là lý do dữ liệu quyết định AI thành hay bại — không phải model.',
    tagline: 'Vì sao AI trả lời sai và bịa đặt dù bạn dùng mô hình đắt tiền nhất',
    rewiredName: 'Enterprise Data Architecture',
    maturityAxis: 'Dữ liệu & hệ thống công nghệ',
    sunextService: {
      name: 'Nền tảng dữ liệu sẵn sàng cho AI (Data & Operating System)',
      url: '/giai-phap/dich-vu/#nen-tang-du-lieu',
      badge: 'Giai đoạn 5 · Data Layer',
      description: 'Hợp nhất dữ liệu phân tán thành một nguồn sự thật duy nhất (Single Source of Truth), làm sạch và thiết lập quản trị dữ liệu chặt chẽ.',
    },
    introParagraphs: [
      'Bạn hỏi AI một câu về doanh số quý trước. Nó trả lời rất tự tin. Và trả lời sai — vì con số nó lấy đến từ một file Excel ai đó quên cập nhật ba tháng trước, trong khi bản đúng nằm ở một hệ thống khác mà AI chưa từng được kết nối tới.',
      'Đây không phải lỗi của AI. Đây là hậu quả của một thứ tồn tại từ trước khi có AI rất lâu: dữ liệu doanh nghiệp bạn đang phân tán, không nhất quán, và không ai thật sự tin tưởng hoàn toàn.',
    ],
    myth: {
      title: 'Cái lầm tưởng: "Model càng mới càng thông minh, sẽ tự biết đâu là dữ liệu đúng"',
      quote: 'Chỉ cần nâng cấp lên model mới nhất là AI tự suy luận thông minh, khỏi cần lo dữ liệu cũ.',
      paragraphs: [
        'Không. Model AI, dù mới đến đâu, đều hoạt động theo một nguyên tắc rất đơn giản: đưa gì vào, trả cái đó ra (Garbage In, Garbage Out).',
        'Nếu bạn đưa vào dữ liệu phân tán trên mười hệ thống, không đồng bộ, thiếu ngữ cảnh — model sẽ trả lời tự tin và sai, hoặc tệ hơn, trả lời đúng nhưng không đủ dữ liệu để trả lời đầy đủ, khiến người dùng mất niềm tin và ngừng dùng.',
        'Vấn đề không nằm ở model. Vấn đề nằm ở nền dữ liệu bên dưới model.',
      ],
    },
    reality: {
      title: 'Cái đúng: Một nguồn dữ liệu duy nhất, đáng tin cậy, AI mới dùng được',
      summary: 'Kiến trúc dữ liệu doanh nghiệp đúng nghĩa cho AI nghĩa là biến dữ liệu từ gánh nặng lưu trữ thành tài sản chiến lược có thể truy vấn thời gian thực.',
      points: [
        {
          title: 'Kết nối các nguồn dữ liệu cốt lõi',
          desc: 'Gom ERP, CRM, bảng tính, tệp báo cáo PDF về một trung tâm dữ liệu thống nhất thay vì để mỗi phòng ban lưu trữ phiên bản riêng.',
        },
        {
          title: 'Làm sạch, chuẩn hóa và gắn nhãn quản trị',
          desc: 'Xác định rõ ai là chủ sở hữu dữ liệu (Data Owner), tần suất cập nhật, và quy chuẩn kiểm tra tính toàn vẹn.',
        },
        {
          title: 'Single Source of Truth (Nguồn sự thật duy nhất)',
          desc: 'Cung cấp cho các ứng dụng AI một lớp ngữ cảnh dữ liệu sạch, đảm bảo câu trả lời luôn chính xác và có thể kiểm chứng nguồn.',
        },
      ],
      comparison: {
        before: [
          'Dữ liệu phân tán trên 10+ hệ thống và file rời rạc',
          'Mất hàng giờ tìm kiếm thông tin và đối chiếu số liệu',
          'Mỗi phòng ban báo cáo một con số khác nhau về cùng một chỉ số',
          'AI bị ảo giác (hallucination) do dữ liệu mâu thuẫn',
        ],
        after: [
          'Trung tâm dữ liệu hợp nhất mọi người đều tin cậy',
          'AI truy xuất thông tin chính xác trong vài giây',
          'Toàn bộ tổ chức dùng chung một nguồn số liệu duy nhất',
          'Hệ thống AI tự tin đưa ra khuyến nghị chuẩn xác 99%+',
        ],
      },
    },
    evidence: [
      {
        client: 'Nhà máy Sản xuất 800 nhân sự',
        industry: 'Precision Manufacturing',
        teamSize: '800 nhân sự',
        story: 'Hàng triệu khung hình từ 6 dây chuyền sản xuất được chuẩn hóa thành luồng dữ liệu hình ảnh sạch, đồng bộ trực tiếp vào hệ thống MES nhà máy để quản đốc theo dõi tỷ lệ lỗi thời gian thực.',
        metrics: [
          { value: '99.8%', label: 'Độ chính xác nhận diện lỗi' },
          { value: '1.5%', label: 'Tỷ lệ lỗi lọt tới tay khách hàng' },
          { value: '100%', label: 'Kiểm soát dữ liệu không rò rỉ' },
        ],
        caseStudyUrl: '/case-studies/ai-auditor-manufacturing/',
      },
    ],
    solution: {
      title: 'Cách Sunext giải trụ cột này',
      description: 'Sunext kết nối các nguồn dữ liệu cốt lõi của doanh nghiệp bạn, làm sạch và hợp nhất thành một lớp dữ liệu có cấu trúc, quản trị rõ ràng — nền tảng bắt buộc để AI truy cập, học hỏi và mở rộng trên toàn tổ chức, nằm trong phần Data & Operating System của dịch vụ triển khai.',
      highlights: [
        'Xây dựng Data Pipeline và Vector Database phục vụ Retrieval-Augmented Generation (RAG).',
        'Thiết lập chính sách quản trị dữ liệu (Data Governance) và phân quyền chi tiết theo vai trò.',
        'Cơ chế tự động làm sạch, khử trùng lặp và xác thực tính nhất quán của dữ liệu.',
        'Bảo mật tuyệt đối: Dữ liệu doanh nghiệp nằm hoàn toàn trong tầm kiểm soát, không chia sẻ cho bên thứ ba.',
      ],
      ctaText: 'Xem Dịch vụ Nền tảng Dữ liệu cho AI',
      ctaUrl: '/giai-phap/dich-vu/#nen-tang-du-lieu',
    },
    relatedPillars: [
      {
        number: 1,
        slug: 'chien-luoc-so',
        title: 'Chiến lược số do kinh doanh dẫn dắt',
        reason: 'Dữ liệu sạch chỉ tạo ra giá trị khi được đưa vào đúng use case kinh doanh ưu tiên.',
      },
      {
        number: 6,
        slug: 'mo-rong-quy-mo',
        title: 'Mở rộng quy mô & áp dụng',
        reason: 'Kiến trúc dữ liệu vững chắc là điều kiện tiên quyết để nhân rộng AI sang nhiều phòng ban cùng lúc.',
      },
    ],
  },
  {
    number: 6,
    id: 'mo-rong-quy-mo',
    slug: 'mo-rong-quy-mo',
    title: 'Áp dụng & Mở rộng quy mô',
    metaTitle: 'Trụ cột 6: Áp dụng & Mở rộng — Vì sao một phòng ban làm tốt không cứu được cả công ty',
    metaDescription: 'Một đội làm AI rất tốt, không ai nhân rộng sang phòng ban khác. Đây là lý do phổ biến nhất khiến chuyển đổi AI dừng lại ở một "điểm sáng" cô lập.',
    tagline: 'Vì sao một phòng ban làm tốt vẫn không thể cứu được cả công ty',
    rewiredName: 'Adoption & Scale',
    maturityAxis: 'Khả năng quản trị thay đổi & mở rộng quy mô áp dụng AI',
    sunextService: {
      name: 'Đo lường, tối ưu & mở rộng',
      url: '/giai-phap/dich-vu/#do-luong-nang-luc',
      badge: 'Giai đoạn 6 · Adoption & Scale',
      description: 'Theo dõi chỉ số hiệu quả theo thời gian, xây dựng cơ chế quản trị thay đổi và đóng gói giải pháp thành tiêu chuẩn toàn công ty.',
    },
    introParagraphs: [
      'Đội marketing của bạn làm AI rất tốt. Họ có quy trình, có công cụ, có kết quả đo được rõ ràng.',
      'Đội sales thì không biết chuyện đó tồn tại.',
      'Một năm sau, công ty bạn vẫn nói về "một dự án AI thành công" — số ít, không phải số nhiều. Bạn có một điểm sáng. Bạn không có một doanh nghiệp đã chuyển đổi.',
    ],
    myth: {
      title: 'Cái lầm tưởng: "Cái gì tốt tự nhiên sẽ được nhân rộng"',
      quote: 'Phòng ban khác thấy đội kia làm hay thì tự khắc sang học hỏi và áp dụng theo.',
      paragraphs: [
        'Không tự nhiên đâu.',
        'Phòng ban A không có động lực chia sẻ cách họ làm cho phòng ban B — không ai giao KPI cho việc đó, không ai đứng ra tổ chức việc đó. Phòng ban B cũng không biết để mà hỏi, vì không có kênh nào để họ biết phòng ban A đang làm gì.',
        'Mỗi "thành công AI" trong công ty bạn, nếu không chủ động nhân rộng, sẽ mãi mãi chỉ là thành công của một nhóm nhỏ. Đây là lý do các công ty sau một năm vẫn chỉ có một case study nội bộ để khoe.',
      ],
    },
    reality: {
      title: 'Cái đúng: Mở rộng quy mô là việc phải chủ động làm, không phải chờ tự xảy ra',
      summary: 'Biến một điểm sáng thành năng lực cạnh tranh cốt lõi của toàn tổ chức đòi hỏi kỷ luật quản trị và phương pháp đo lường khoa học.',
      points: [
        {
          title: 'Đo lường liên tục theo thời gian',
          desc: 'Không đo một lần trong buổi tổng kết dự án. Theo dõi hiệu suất thật, tỷ lệ áp dụng thực tế và chi phí phát sinh từng tháng.',
        },
        {
          title: 'Cơ chế đóng gói & chuyển giao chính thức',
          desc: 'Thiết lập quy trình chuẩn để các bài học, template và agent thành công ở phòng ban này được bàn giao trơn tru cho phòng ban tiếp theo.',
        },
        {
          title: 'Quản trị thay đổi (Change Management)',
          desc: 'Đồng hành với người dùng cuối, gỡ bỏ tâm lý e ngại mất việc hoặc sợ công nghệ mới bằng các cột mốc thành công nhỏ (quick wins).',
        },
      ],
    },
    evidence: [
      {
        client: 'Doanh nghiệp Dịch vụ B2B 200 nhân sự',
        industry: 'B2B Professional Services',
        teamSize: '200 nhân sự',
        story: 'Đội marketing duy trì ổn định sản lượng 50+ bài viết chuyên môn mỗi tháng suốt 5 tháng liên tục, giúp doanh nghiệp tăng 60% organic traffic bền vững mà không phải phát sinh ngân sách quảng cáo.',
        metrics: [
          { value: '+60%', label: 'Tăng trưởng traffic sau 5 tháng' },
          { value: '5 tháng', label: 'Duy trì hiệu suất bền vững' },
          { value: '50+ bài', label: 'Sản lượng duy trì ổn định mỗi tháng' },
        ],
        caseStudyUrl: '/case-studies/content-factory-b2b-marketing/',
      },
    ],
    solution: {
      title: 'Cách Sunext giải trụ cột này',
      description: 'Đây là bước cuối trong ba bước Sunext làm với mọi doanh nghiệp: đo lường, tối ưu và mở rộng. Không dừng lại sau khi triển khai xong — theo dõi kết quả thực tế, xác định điều gì đang chạy tốt, và xây cơ chế để nhân rộng nó sang các phòng ban, các use case tiếp theo, thay vì để nó mãi là một dự án thí điểm đơn lẻ.',
      highlights: [
        'Dashboard giám sát chỉ số ứng dụng (Adoption Rate) và ROI thời gian thực.',
        'Chương trình cố vấn Change Management giúp nhân sự hòa nhập tự nhiên với AI.',
        'Bộ khung quản trị rủi ro, chính sách bảo mật và tiêu chuẩn kiểm thử tự động.',
        'Lộ trình nhân rộng từ 1 use case sang hệ sinh thái đa tác vụ.',
      ],
      ctaText: 'Xem Dịch vụ Đo lường, Tối ưu & Mở rộng',
      ctaUrl: '/giai-phap/dich-vu/#do-luong-nang-luc',
    },
    relatedPillars: [
      {
        number: 5,
        slug: 'kien-truc-du-lieu',
        title: 'Kiến trúc dữ liệu doanh nghiệp',
        reason: 'Mở rộng quy mô chỉ khả thi khi hạ tầng dữ liệu đủ sức chịu tải nhiều use case cùng lúc.',
      },
      {
        number: 2,
        slug: 'nang-luc-doi-ngu',
        title: 'Đội ngũ nhân tài nội bộ',
        reason: 'Để nhân rộng thành công sang các bộ phận mới, cần liên tục nâng tầng năng lực cho nhân sự tiếp nhận.',
      },
    ],
  },
];

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: "q1",
    axis: "Chi\u1ebfn l\u01b0\u1ee3c s\u1ed1 do b\u00e0i to\u00e1n kinh doanh d\u1eabn d\u1eaft",
    pillarNumber: 1,
    question: "Doanh nghi\u1ec7p c\u1ee7a b\u1ea1n \u0111ang x\u00e1c \u0111\u1ecbnh \u01b0u ti\u00ean \u0111\u1ea7u t\u01b0 cho AI nh\u01b0 th\u1ebf n\u00e0o?",
    subtext: "M\u1ee5c ti\u00eau: \u0110\u00e1nh gi\u00e1 m\u1ee9c \u0111\u1ed9 g\u1eafn k\u1ebft gi\u1eefa s\u00e1ng ki\u1ebfn AI v\u1edbi b\u00e0i to\u00e1n P&L v\u00e0 gi\u00e1 tr\u1ecb kinh t\u1ebf th\u1ef1c t\u1ebf.",
    options: [
      {
        score: 1,
        level: "C\u1ea5p \u0111\u1ed9 1 \u00b7 Kh\u1edfi Ph\u00e1t",
        label: "Ch\u01b0a c\u00f3 chi\u1ebfn l\u01b0\u1ee3c c\u1ee5 th\u1ec3",
        description: "M\u1ed7i ph\u00f2ng ban ho\u1eb7c c\u00e1 nh\u00e2n t\u1ef1 m\u00e0y m\u00f2 th\u1eed nghi\u1ec7m c\u00f4ng c\u1ee5 mi\u1ec5n ph\u00ed, kh\u00f4ng c\u00f3 \u0111\u1ecbnh h\u01b0\u1edbng chung.",
      },
      {
        score: 2,
        level: "C\u1ea5p \u0111\u1ed9 2 \u00b7 Th\u1eed Nghi\u1ec7m",
        label: "C\u00f3 v\u00e0i d\u1ef1 \u00e1n th\u00ed \u0111i\u1ec3m nh\u1ecf",
        description: "\u0110\u00e3 mua license cho m\u1ed9t s\u1ed1 nh\u00f3m (Marketing, IT), nh\u01b0ng ch\u01b0a g\u1eafn v\u1edbi m\u1ee5c ti\u00eau P&L c\u1ee5 th\u1ec3.",
      },
      {
        score: 3,
        level: "C\u1ea5p \u0111\u1ed9 3 \u00b7 Chu\u1ea9n H\u00f3a",
        label: "L\u1ed9 tr\u00ecnh use case r\u00f5 r\u00e0ng",
        description: "\u0110\u00e3 x\u00e1c \u0111\u1ecbnh c\u00e1c mi\u1ec1n nghi\u1ec7p v\u1ee5 tr\u1ecdng \u0111i\u1ec3m, x\u1ebfp h\u1ea1ng \u01b0u ti\u00ean theo gi\u00e1 tr\u1ecb t\u00e0i ch\u00ednh v\u00e0 ROI.",
      },
      {
        score: 4,
        level: "C\u1ea5p \u0111\u1ed9 4 \u00b7 T\u1ef1 Ch\u1ee7",
        label: "AI l\u00e0 \u0111\u00f2n b\u1ea9y chi\u1ebfn l\u01b0\u1ee3c g\u1eafn v\u1edbi P&L",
        description: "L\u1ed9 tr\u00ecnh AI g\u1eafn tr\u1ef1c ti\u1ebfp v\u00e0o k\u1ebf ho\u1ea1ch kinh doanh, c\u00f3 Product Owner ch\u1ecbu tr\u00e1ch nhi\u1ec7m P&L t\u1eebng s\u00e1ng ki\u1ebfn.",
      },
    ],
  },
  {
    id: "q2",
    axis: "Chi\u1ebfn l\u01b0\u1ee3c s\u1ed1 do b\u00e0i to\u00e1n kinh doanh d\u1eabn d\u1eaft",
    pillarNumber: 1,
    question: "Cam k\u1ebft c\u1ee7a Ban L\u00e3nh \u0110\u1ea1o c\u1ea5p cao v\u00e0 ng\u00e2n s\u00e1ch d\u00e0nh cho AI ra sao?",
    subtext: "M\u1ee5c ti\u00eau: \u0110\u00e1nh gi\u00e1 s\u1ef1 \u1ee7ng h\u1ed9 c\u1ee7a C-level v\u00e0 t\u00ednh s\u1eb5n s\u00e0ng v\u1ec1 ngu\u1ed3n l\u1ef1c t\u00e0i ch\u00ednh.",
    options: [
      {
        score: 1,
        level: "C\u1ea5p \u0111\u1ed9 1 \u00b7 Kh\u1edfi Ph\u00e1t",
        label: "Ch\u01b0a c\u00f3 ng\u00e2n s\u00e1ch ch\u00ednh th\u1ee9c",
        description: "Ban l\u00e3nh \u0111\u1ea1o quan t\u00e2m qua loa, chi ph\u00ed AI do t\u1eebng nh\u00e2n vi\u00ean t\u1ef1 tr\u1ea3 ho\u1eb7c tr\u00edch t\u1eeb qu\u1ef9 nh\u1ecf l\u1ebb.",
      },
      {
        score: 2,
        level: "C\u1ea5p \u0111\u1ed9 2 \u00b7 Th\u1eed Nghi\u1ec7m",
        label: "Ng\u00e2n s\u00e1ch ad-hoc theo s\u1ef1 v\u1ee5",
        description: "L\u00e3nh \u0111\u1ea1o c\u1ea5p kinh ph\u00ed th\u1eed nghi\u1ec7m ng\u1eafn h\u1ea1n (v\u00e0i ch\u1ee5c tri\u1ec7u) cho m\u1ed9t v\u00e0i tool, ch\u01b0a c\u00f3 k\u1ebf ho\u1ea1ch n\u0103m.",
      },
      {
        score: 3,
        level: "C\u1ea5p \u0111\u1ed9 3 \u00b7 Chu\u1ea9n H\u00f3a",
        label: "Ng\u00e2n s\u00e1ch chuy\u00ean tr\u00e1ch ph\u00f2ng ban",
        description: "C\u00f3 h\u1ea1n m\u1ee9c \u0111\u1ea7u t\u01b0 AI r\u00f5 r\u00e0ng trong k\u1ebf ho\u1ea1ch n\u0103m, Ban Gi\u00e1m \u0110\u1ed1c h\u1ecdp \u0111\u00e1nh gi\u00e1 ti\u1ebfn \u0111\u1ed9 theo qu\u00fd.",
      },
      {
        score: 4,
        level: "C\u1ea5p \u0111\u1ed9 4 \u00b7 T\u1ef1 Ch\u1ee7",
        label: "Cam k\u1ebft chi\u1ebfn l\u01b0\u1ee3c t\u1eeb H\u0110QT",
        description: "AI \u0111\u01b0\u1ee3c ph\u00e2n b\u1ed5 ng\u00e2n s\u00e1ch nh\u01b0 t\u00e0i s\u1ea3n d\u00e0i h\u1ea1n, Ban \u0110i\u1ec1u H\u00e0nh tr\u1ef1c ti\u1ebfp ch\u1ec9 \u0111\u1ea1o \u1ee7y ban AI.",
      },
    ],
  },
  {
    id: "q3",
    axis: "N\u0103ng l\u1ef1c \u0111\u1ed9i ng\u0169 & nh\u00e2n t\u00e0i n\u1ed9i b\u1ed9",
    pillarNumber: 2,
    question: "M\u1ee9c \u0111\u1ed9 hi\u1ec3u bi\u1ebft v\u00e0 k\u1ef9 n\u0103ng \u1ee9ng d\u1ee5ng AI c\u1ee7a \u0111\u1ed9i ng\u0169 nh\u00e2n s\u1ef1 hi\u1ec7n t\u1ea1i ra sao?",
    subtext: "M\u1ee5c ti\u00eau: \u0110\u00e1nh gi\u00e1 m\u1eb7t b\u1eb1ng n\u0103ng l\u1ef1c AI Literacy v\u00e0 k\u1ef9 thu\u1eadt prompt nghi\u1ec7p v\u1ee5 c\u1ee7a nh\u00e2n vi\u00ean.",
    options: [
      {
        score: 1,
        level: "C\u1ea5p \u0111\u1ed9 1 \u00b7 Kh\u1edfi Ph\u00e1t",
        label: "Ph\u1ea7n l\u1edbn nh\u00e2n vi\u00ean ch\u01b0a bi\u1ebft d\u00f9ng",
        description: "Ch\u1ec9 bi\u1ebft h\u1ecfi chatbot nh\u1eefng c\u00e2u vu v\u01a1, k\u1ebft qu\u1ea3 chung chung kh\u00f4ng \u00e1p d\u1ee5ng \u0111\u01b0\u1ee3c v\u00e0o c\u00f4ng vi\u1ec7c.",
      },
      {
        score: 2,
        level: "C\u1ea5p \u0111\u1ed9 2 \u00b7 Th\u1eed Nghi\u1ec7m",
        label: "M\u1ed9t v\u00e0i c\u00e1 nh\u00e2n t\u1ef1 h\u1ecdc r\u1ea5t gi\u1ecfi",
        description: "M\u1ed9t s\u1ed1 c\u00e1 nh\u00e2n t\u1ef1 m\u00e0y m\u00f2 l\u00e0m r\u1ea5t nhanh, nh\u01b0ng k\u1ef9 n\u0103ng kh\u00f4ng \u0111\u01b0\u1ee3c \u0111\u00f3ng g\u00f3i hay chia s\u1ebb l\u1ea1i.",
      },
      {
        score: 3,
        level: "C\u1ea5p \u0111\u1ed9 3 \u00b7 Chu\u1ea9n H\u00f3a",
        label: "\u0110\u00e0o t\u1ea1o theo vai tr\u00f2 nghi\u1ec7p v\u1ee5",
        description: "Nh\u00e2n s\u1ef1 \u0111\u01b0\u1ee3c \u0111\u00e0o t\u1ea1o b\u00e0i b\u1ea3n k\u1ef9 thu\u1eadt Prompting theo nghi\u1ec7p v\u1ee5 (T\u1ea7ng 1 & 2), \u00e1p d\u1ee5ng \u0111\u1ec1u \u0111\u1eb7n m\u1ed7i tu\u1ea7n.",
      },
      {
        score: 4,
        level: "C\u1ea5p \u0111\u1ed9 4 \u00b7 T\u1ef1 Ch\u1ee7",
        label: "T\u1ef1 l\u00e0m ch\u1ee7 v\u00e0 thi\u1ebft k\u1ebf lu\u1ed3ng t\u00e1c v\u1ee5",
        description: "Nh\u00e2n s\u1ef1 c\u00e1c ph\u00f2ng ban t\u1ef1 c\u1ea5u h\u00ecnh prompt theo nghi\u1ec7p v\u1ee5, ph\u1ed1i h\u1ee3p v\u1edbi tr\u1ee3 l\u00fd AI nh\u01b0 \u0111\u1ed3ng nghi\u1ec7p th\u01b0\u1eddng nh\u1eadt (T\u1ea7ng 3).",
      },
    ],
  },
  {
    id: "q4",
    axis: "N\u0103ng l\u1ef1c \u0111\u1ed9i ng\u0169 & nh\u00e2n t\u00e0i n\u1ed9i b\u1ed9",
    pillarNumber: 2,
    question: "Doanh nghi\u1ec7p \u0111\u00e3 x\u00e2y d\u1ef1ng \u0111\u01b0\u1ee3c m\u1ea1ng l\u01b0\u1edbi AI Champions n\u1ed9i b\u1ed9 ch\u01b0a?",
    subtext: "M\u1ee5c ti\u00eau: \u0110\u00e1nh gi\u00e1 c\u01a1 ch\u1ebf duy tr\u00ec \u0111\u1ed9ng l\u1ef1c h\u1ecdc t\u1eadp v\u00e0 chuy\u1ec3n giao tri th\u1ee9c li\u00ean t\u1ee5c.",
    options: [
      {
        score: 1,
        level: "C\u1ea5p \u0111\u1ed9 1 \u00b7 Kh\u1edfi Ph\u00e1t",
        label: "Ch\u01b0a c\u00f3 ng\u01b0\u1eddi ph\u1ee5 tr\u00e1ch n\u00f2ng c\u1ed1t",
        description: "Khi g\u1eb7p tr\u1ee5c tr\u1eb7c k\u1ef9 thu\u1eadt ho\u1eb7c c\u1ea7n prompt m\u1edbi, nh\u00e2n vi\u00ean kh\u00f4ng bi\u1ebft h\u1ecfi ai ngo\u00e0i vi\u1ec7c t\u1ef1 t\u00ecm tr\u00ean m\u1ea1ng.",
      },
      {
        score: 2,
        level: "C\u1ea5p \u0111\u1ed9 2 \u00b7 Th\u1eed Nghi\u1ec7m",
        label: "Ph\u1ee5 thu\u1ed9c v\u00e0o ph\u00f2ng IT",
        description: "M\u1ecdi th\u1eafc m\u1eafc d\u1ed3n v\u1ec1 IT khi\u1ebfn ph\u00f2ng c\u00f4ng ngh\u1ec7 qu\u00e1 t\u1ea3i, trong khi IT kh\u00f4ng n\u1eafm r\u00f5 nghi\u1ec7p v\u1ee5 kinh doanh.",
      },
      {
        score: 3,
        level: "C\u1ea5p \u0111\u1ed9 3 \u00b7 Chu\u1ea9n H\u00f3a",
        label: "C\u00f3 AI Champions t\u1ea1i t\u1eebng ph\u00f2ng ban",
        description: "M\u1ed7i b\u1ed9 ph\u1eadn c\u00f3 1\u20132 nh\u00e2n s\u1ef1 n\u00f2ng c\u1ed1t hi\u1ec3u nghi\u1ec7p v\u1ee5, tr\u1ef1c ti\u1ebfp h\u1ed7 tr\u1ee3 \u0111\u1ed3ng nghi\u1ec7p v\u00e0 c\u1eadp nh\u1eadt th\u01b0 vi\u1ec7n prompt.",
      },
      {
        score: 4,
        level: "C\u1ea5p \u0111\u1ed9 4 \u00b7 T\u1ef1 Ch\u1ee7",
        label: "Trung t\u00e2m Xu\u1ea5t s\u1eafc (AI CoE)",
        description: "Nh\u00f3m chuy\u00ean tr\u00e1ch li\u00ean ph\u00f2ng ban li\u00ean t\u1ee5c nghi\u00ean c\u1ee9u c\u00f4ng ngh\u1ec7 m\u1edbi, t\u1ed5 ch\u1ee9c \u0111\u00e0o t\u1ea1o v\u00e0 ki\u1ec3m to\u00e1n n\u0103ng l\u1ef1c.",
      },
    ],
  },
  {
    id: "q5",
    axis: "M\u00f4 h\u00ecnh v\u1eadn h\u00e0nh & quy tr\u00ecnh linh ho\u1ea1t",
    pillarNumber: 3,
    question: "Quy tr\u00ecnh l\u00e0m vi\u1ec7c hi\u1ec7n t\u1ea1i \u0111\u00e3 \u0111\u01b0\u1ee3c thi\u1ebft k\u1ebf l\u1ea1i cho AI \u1edf m\u1ee9c \u0111\u1ed9 n\u00e0o?",
    subtext: "M\u1ee5c ti\u00eau: \u0110\u00e1nh gi\u00e1 vi\u1ec7c t\u00e1i c\u1ea5u tr\u00fac lu\u1ed3ng c\u00f4ng vi\u1ec7c theo nguy\u00ean t\u1eafc Human-in-the-loop.",
    options: [
      {
        score: 1,
        level: "C\u1ea5p \u0111\u1ed9 1 \u00b7 Kh\u1edfi Ph\u00e1t",
        label: "Quy tr\u00ecnh th\u1ee7 c\u00f4ng & ph\u00e2n m\u1ea3nh",
        description: "Nhi\u1ec1u b\u01b0\u1edbc trung gian, lu\u1ed3ng duy\u1ec7t ch\u1eadm tr\u1ec5, kh\u00f4ng c\u00f3 quy chu\u1ea9n v\u1eadn h\u00e0nh (SOP) c\u1eadp nh\u1eadt.",
      },
      {
        score: 2,
        level: "C\u1ea5p \u0111\u1ed9 2 \u00b7 Th\u1eed Nghi\u1ec7m",
        label: "\u00c9p AI v\u00e0o quy tr\u00ecnh c\u0169 c\u1ed3ng k\u1ec1nh",
        description: "AI ch\u1ec9 d\u00f9ng \u0111\u1ec3 g\u00f5 ch\u1eef nhanh h\u01a1n trong quy tr\u00ecnh c\u0169, ch\u01b0a c\u1eaft gi\u1ea3m b\u01b0\u1edbc trung gian th\u1eeba th\u00e3i.",
      },
      {
        score: 3,
        level: "C\u1ea5p \u0111\u1ed9 3 \u00b7 Chu\u1ea9n H\u00f3a",
        label: "Quy tr\u00ecnh Human-in-the-loop",
        description: "Ph\u00e2n \u0111\u1ecbnh r\u00e0nh m\u1ea1ch: kh\u00e2u n\u00e0o AI x\u1eed l\u00fd t\u1ef1 \u0111\u1ed9ng, kh\u00e2u n\u00e0o con ng\u01b0\u1eddi ki\u1ec3m duy\u1ec7t v\u00e0 ph\u00ea duy\u1ec7t cu\u1ed1i c\u00f9ng.",
      },
      {
        score: 4,
        level: "C\u1ea5p \u0111\u1ed9 4 \u00b7 T\u1ef1 Ch\u1ee7",
        label: "V\u1eadn h\u00e0nh d\u1ef1a tr\u00ean c\u1ee5m Agent",
        description: "C\u00e1c Agentic Workflow t\u1ef1 \u0111\u1ed9ng k\u00edch ho\u1ea1t t\u00e1c v\u1ee5 xuy\u00ean su\u1ed1t c\u00e1c b\u1ed9 ph\u1eadn kinh doanh v\u00e0 v\u1eadn h\u00e0nh.",
      },
    ],
  },
  {
    id: "q6",
    axis: "M\u00f4 h\u00ecnh v\u1eadn h\u00e0nh & quy tr\u00ecnh linh ho\u1ea1t",
    pillarNumber: 3,
    question: "Doanh nghi\u1ec7p l\u01b0u tr\u1eef v\u00e0 t\u00e1i s\u1eed d\u1ee5ng tri th\u1ee9c n\u1ed9i b\u1ed9 (Knowledge Base) nh\u01b0 th\u1ebf n\u00e0o?",
    subtext: "M\u1ee5c ti\u00eau: \u0110\u00e1nh gi\u00e1 kh\u1ea3 n\u0103ng chuy\u1ec3n \u0111\u1ed5i t\u00e0i li\u1ec7u th\u00f4 v\u00e0 kinh nghi\u1ec7m c\u00e1 nh\u00e2n th\u00e0nh t\u00e0i s\u1ea3n s\u1ed1.",
    options: [
      {
        score: 1,
        level: "C\u1ea5p \u0111\u1ed9 1 \u00b7 Kh\u1edfi Ph\u00e1t",
        label: "Tri th\u1ee9c n\u1eb1m trong \u0111\u1ea7u c\u00e1 nh\u00e2n",
        description: "B\u00e1o c\u00e1o v\u00e0 quy ch\u1ebf l\u01b0u r\u1ea3i r\u00e1c tr\u00ean m\u00e1y t\u00ednh c\u00e1 nh\u00e2n; nh\u00e2n s\u1ef1 m\u1edbi v\u00e0o ph\u1ea3i h\u1ecfi t\u1eebng ng\u01b0\u1eddi.",
      },
      {
        score: 2,
        level: "C\u1ea5p \u0111\u1ed9 2 \u00b7 Th\u1eed Nghi\u1ec7m",
        label: "L\u01b0u tr\u1eef tr\u00ean Google Drive r\u1eddi r\u1ea1c",
        description: "C\u00f3 th\u01b0 m\u1ee5c d\u00f9ng chung nh\u01b0ng kh\u00f4ng ph\u00e2n lo\u1ea1i, c\u1ea5u tr\u00fac l\u1ed9n x\u1ed9n, t\u00ecm ki\u1ebfm l\u1ea1i r\u1ea5t m\u1ea5t th\u1eddi gian.",
      },
      {
        score: 3,
        level: "C\u1ea5p \u0111\u1ed9 3 \u00b7 Chu\u1ea9n H\u00f3a",
        label: "Kho tri th\u1ee9c s\u1ed1 h\u00f3a c\u00f3 c\u1ea5u tr\u00fac",
        description: "Tri th\u1ee9c \u0111\u01b0\u1ee3c chu\u1ea9n h\u00f3a th\u00e0nh t\u00e0i li\u1ec7u SOP, ph\u00e2n lo\u1ea1i b\u00e0i b\u1ea3n v\u00e0 n\u1ea1p v\u00e0o Custom GPT / Vector Store n\u1ed9i b\u1ed9.",
      },
      {
        score: 4,
        level: "C\u1ea5p \u0111\u1ed9 4 \u00b7 T\u1ef1 Ch\u1ee7",
        label: "Enterprise Knowledge Mesh th\u1eddi gian th\u1ef1c",
        description: "H\u1ec7 th\u1ed1ng tri th\u1ee9c to\u00e0n c\u00f4ng ty \u0111\u1ed3ng b\u1ed9 li\u00ean t\u1ee5c, AI tra c\u1ee9u c\u00f3 ngu\u1ed3n d\u1eabn chi\u1ebfu ch\u00ednh x\u00e1c trong 30 gi\u00e2y.",
      },
    ],
  },
  {
    id: "q7",
    axis: "N\u1ec1n t\u1ea3ng c\u00f4ng ngh\u1ec7 & t\u00edch h\u1ee3p h\u1ec7 th\u1ed1ng",
    pillarNumber: 4,
    question: "Kh\u1ea3 n\u0103ng k\u1ebft n\u1ed1i h\u1ec7 th\u1ed1ng hi\u1ec7n t\u1ea1i (ERP, CRM, ATS...) qua API \u1edf m\u1ee9c \u0111\u1ed9 n\u00e0o?",
    subtext: "M\u1ee5c ti\u00eau: \u0110\u00e1nh gi\u00e1 t\u00ednh s\u1eb5n s\u00e0ng k\u1ef9 thu\u1eadt \u0111\u1ec3 chuy\u1ec3n t\u1eeb chat r\u1eddi r\u1ea1c sang t\u1ef1 \u0111\u1ed9ng h\u00f3a lu\u1ed3ng d\u1eef li\u1ec7u.",
    options: [
      {
        score: 1,
        level: "C\u1ea5p \u0111\u1ed9 1 \u00b7 Kh\u1edfi Ph\u00e1t",
        label: "C\u00e1c ph\u1ea7n m\u1ec1m c\u00f4 l\u1eadp, thi\u1ebfu k\u1ebft n\u1ed1i",
        description: "Nh\u00e2n vi\u00ean xu\u1ea5t Excel t\u1eeb ph\u1ea7n m\u1ec1m n\u00e0y r\u1ed3i copy-paste th\u1ee7 c\u00f4ng sang ph\u1ea7n m\u1ec1m kh\u00e1c; kh\u00f4ng c\u00f3 API.",
      },
      {
        score: 2,
        level: "C\u1ea5p \u0111\u1ed9 2 \u00b7 Th\u1eed Nghi\u1ec7m",
        label: "C\u00f3 m\u1ed9t v\u00e0i webhook / script \u0111\u01a1n l\u1ebb",
        description: "Th\u1eed nghi\u1ec7m k\u1ebft n\u1ed1i c\u01a1 b\u1ea3n (Zapier, Make ho\u1eb7c script \u0111\u01a1n l\u1ebb), ho\u1ea1t \u0111\u1ed9ng ch\u1eadp ch\u1eddn v\u00e0 ch\u01b0a c\u00f3 chu\u1ea9n b\u1ea3o m\u1eadt.",
      },
      {
        score: 3,
        level: "C\u1ea5p \u0111\u1ed9 3 \u00b7 Chu\u1ea9n H\u00f3a",
        label: "T\u00edch h\u1ee3p API hai chi\u1ec1u \u1ed5n \u0111\u1ecbnh",
        description: "H\u1ec7 th\u1ed1ng CRM/ATS/ERP \u0111\u00e3 m\u1edf c\u1ed5ng API chu\u1ea9n; AI Agent c\u00f3 th\u1ec3 \u0111\u1ecdc v\u00e0 ghi d\u1eef li\u1ec7u c\u00f3 ph\u00e2n quy\u1ec1n ki\u1ec3m so\u00e1t.",
      },
      {
        score: 4,
        level: "C\u1ea5p \u0111\u1ed9 4 \u00b7 T\u1ef1 Ch\u1ee7",
        label: "Microservices & Agentic Gateway",
        description: "H\u1ea1 t\u1ea7ng API Gateway m\u1ea1nh m\u1ebd, \u0111i\u1ec1u ph\u1ed1i h\u00e0ng ch\u1ee5c lu\u1ed3ng Agent th\u1eddi gian th\u1ef1c v\u1edbi c\u01a1 ch\u1ebf gi\u00e1m s\u00e1t t\u1ea3i \u1ed5n \u0111\u1ecbnh.",
      },
    ],
  },
  {
    id: "q8",
    axis: "N\u1ec1n t\u1ea3ng c\u00f4ng ngh\u1ec7 & t\u00edch h\u1ee3p h\u1ec7 th\u1ed1ng",
    pillarNumber: 4,
    question: "Doanh nghi\u1ec7p \u0111ang tri\u1ec3n khai gi\u1ea3i ph\u00e1p AI \u1edf c\u1ea5p \u0111\u1ed9 k\u1ef9 thu\u1eadt n\u00e0o?",
    subtext: "M\u1ee5c ti\u00eau: Ph\u00e2n \u0111\u1ecbnh m\u1ee9c \u0111\u1ed9 can thi\u1ec7p k\u1ef9 thu\u1eadt theo 4 C\u1ea5p \u0110\u1ed9 Tri\u1ec3n Khai Sunext.",
    options: [
      {
        score: 1,
        level: "C\u1ea5p \u0111\u1ed9 1 \u00b7 Kh\u1edfi Ph\u00e1t",
        label: "D\u00f9ng phi\u00ean b\u1ea3n web mi\u1ec5n ph\u00ed",
        description: "Ch\u1ee7 y\u1ebfu d\u00f9ng ChatGPT / Claude mi\u1ec5n ph\u00ed tr\u00ean tr\u00ecnh duy\u1ec7t c\u00e1 nh\u00e2n, kh\u00f4ng c\u00f3 t\u00e0i kho\u1ea3n doanh nghi\u1ec7p.",
      },
      {
        score: 2,
        level: "C\u1ea5p \u0111\u1ed9 2 \u00b7 Th\u1eed Nghi\u1ec7m",
        label: "Mua license th\u01b0\u01a1ng m\u1ea1i & Copilots",
        description: "Trang b\u1ecb t\u00e0i kho\u1ea3n Pro/Team, b\u01b0\u1edbc \u0111\u1ea7u c\u1ea5u h\u00ecnh Custom GPTs ho\u1eb7c Prompt Templates cho m\u1ed9t s\u1ed1 t\u00e1c v\u1ee5.",
      },
      {
        score: 3,
        level: "C\u1ea5p \u0111\u1ed9 3 \u00b7 Chu\u1ea9n H\u00f3a",
        label: "X\u00e2y d\u1ef1ng Custom AI Agent chuy\u00ean bi\u1ec7t",
        description: "Tri\u1ec3n khai AI Agent ri\u00eang n\u1ea1p c\u01a1 s\u1edf tri th\u1ee9c n\u1ed9i b\u1ed9 (nh\u01b0 AI Resume Screener, Virtual Project Assistant).",
      },
      {
        score: 4,
        level: "C\u1ea5p \u0111\u1ed9 4 \u00b7 T\u1ef1 Ch\u1ee7",
        label: "Deep Integration: Edge AI / Private LLM",
        description: "T\u00edch h\u1ee3p s\u00e2u m\u00f4 h\u00ecnh c\u1ee5c b\u1ed9 (On-premise LLM, Computer Vision t\u1ea1i chuy\u1ec1n m\u00e1y, MES/Core Banking).",
      },
    ],
  },
  {
    id: "q9",
    axis: "Ki\u1ebfn tr\u00fac d\u1eef li\u1ec7u & b\u1ea3o m\u1eadt doanh nghi\u1ec7p",
    pillarNumber: 5,
    question: "\u0110\u1ed9 s\u1ea1ch v\u00e0 t\u00ednh s\u1eb5n s\u00e0ng c\u1ee7a d\u1eef li\u1ec7u n\u1ed9i b\u1ed9 doanh nghi\u1ec7p \u0111\u1ea1t m\u1ee9c n\u00e0o?",
    subtext: "M\u1ee5c ti\u00eau: \u0110\u00e1nh gi\u00e1 ch\u1ea5t l\u01b0\u1ee3ng d\u1eef li\u1ec7u \u0111\u1ea7u v\u00e0o \u0111\u1ec3 AI tr\u1ea3 l\u1eddi chu\u1ea9n x\u00e1c, kh\u00f4ng b\u1ecb \u1ea3o gi\u00e1c.",
    options: [
      {
        score: 1,
        level: "C\u1ea5p \u0111\u1ed9 1 \u00b7 Kh\u1edfi Ph\u00e1t",
        label: "D\u1eef li\u1ec7u r\u00e1c, tr\u00f9ng l\u1eb7p v\u00e0 ph\u00e2n t\u00e1n",
        description: "D\u1eef li\u1ec7u kh\u00e1ch h\u00e0ng v\u00e0 s\u1ea3n ph\u1ea9m b\u1ecb sai l\u1ec7ch nhi\u1ec1u; kh\u00f4ng ai ch\u1ecbu tr\u00e1ch nhi\u1ec7m d\u1ecdn d\u1eb9p v\u00e0 chu\u1ea9n h\u00f3a.",
      },
      {
        score: 2,
        level: "C\u1ea5p \u0111\u1ed9 2 \u00b7 Th\u1eed Nghi\u1ec7m",
        label: "\u0110ang s\u1ed1 h\u00f3a nh\u01b0ng ch\u01b0a c\u00f3 quy chu\u1ea9n",
        description: "B\u1eaft \u0111\u1ea7u gom d\u1eef li\u1ec7u v\u1ec1 c\u00e1c file t\u1eadp trung nh\u01b0ng \u0111\u1ecbnh d\u1ea1ng l\u1ed9n x\u1ed9n, AI \u0111\u1ecdc d\u1eef li\u1ec7u th\u01b0\u1eddng xuy\u00ean \u0111\u01b0a k\u1ebft qu\u1ea3 sai.",
      },
      {
        score: 3,
        level: "C\u1ea5p \u0111\u1ed9 3 \u00b7 Chu\u1ea9n H\u00f3a",
        label: "C\u00f3 ngu\u1ed3n d\u1eef li\u1ec7u chu\u1ea9n (Single Source)",
        description: "D\u1eef li\u1ec7u nghi\u1ec7p v\u1ee5 tr\u1ecdng \u0111i\u1ec3m \u0111\u01b0\u1ee3c l\u00e0m s\u1ea1ch, \u0111\u1ecbnh d\u1ea1ng chu\u1ea9n h\u00f3a v\u00e0 ki\u1ec3m tra \u0111\u1ecbnh k\u1ef3 tr\u01b0\u1edbc khi \u0111\u01b0a v\u00e0o kho vector.",
      },
      {
        score: 4,
        level: "C\u1ea5p \u0111\u1ed9 4 \u00b7 T\u1ef1 Ch\u1ee7",
        label: "Data Pipeline t\u1ef1 \u0111\u1ed9ng h\u00f3a li\u00ean t\u1ee5c",
        description: "\u0110\u01b0\u1eddng \u1ed1ng d\u1eabn d\u1eef li\u1ec7u t\u1ef1 \u0111\u1ed9ng l\u00e0m s\u1ea1ch, g\u1eafn nh\u00e3n v\u00e0 c\u1eadp nh\u1eadt li\u00ean t\u1ee5c v\u00e0o h\u1ec7 th\u1ed1ng ph\u00e2n t\u00edch th\u1eddi gian th\u1ef1c.",
      },
    ],
  },
  {
    id: "q10",
    axis: "Ki\u1ebfn tr\u00fac d\u1eef li\u1ec7u & b\u1ea3o m\u1eadt doanh nghi\u1ec7p",
    pillarNumber: 5,
    question: "Doanh nghi\u1ec7p ki\u1ec3m so\u00e1t r\u1ee7i ro b\u1ea3o m\u1eadt d\u1eef li\u1ec7u v\u00e0 b\u00ed m\u1eadt kinh doanh khi d\u00f9ng AI ra sao?",
    subtext: "M\u1ee5c ti\u00eau: \u0110\u00e1nh gi\u00e1 r\u00e0o ch\u1eafn an to\u00e0n th\u00f4ng tin v\u00e0 ph\u01b0\u01a1ng \u00e1n tri\u1ec3n khai b\u1ea3o v\u1ec7 d\u1eef li\u1ec7u nh\u1ea1y c\u1ea3m.",
    options: [
      {
        score: 1,
        level: "C\u1ea5p \u0111\u1ed9 1 \u00b7 Kh\u1edfi Ph\u00e1t",
        label: "Th\u1ea3 n\u1ed5i b\u1ea3o m\u1eadt, ch\u01b0a c\u00f3 quy ch\u1ebf",
        description: "Nh\u00e2n vi\u00ean t\u1ea3i b\u00e1o c\u00e1o t\u00e0i ch\u00ednh, h\u1ee3p \u0111\u1ed3ng v\u00e0 d\u1eef li\u1ec7u kh\u00e1ch h\u00e0ng l\u00ean c\u00e1c website AI c\u00f4ng c\u1ed9ng m\u00e0 kh\u00f4ng bi\u1ebft r\u1ee7i ro.",
      },
      {
        score: 2,
        level: "C\u1ea5p \u0111\u1ed9 2 \u00b7 Th\u1eed Nghi\u1ec7m",
        label: "C\u1ea3nh b\u00e1o b\u1eb1ng v\u0103n b\u1ea3n mi\u1ec7ng",
        description: "Ban h\u00e0nh th\u00f4ng b\u00e1o c\u1ea5m \u0111\u01b0a d\u1eef li\u1ec7u nh\u1ea1y c\u1ea3m l\u00ean m\u1ea1ng, nh\u01b0ng kh\u00f4ng c\u00f3 bi\u1ec7n ph\u00e1p k\u1ef9 thu\u1eadt gi\u00e1m s\u00e1t hay ng\u0103n ch\u1eb7n.",
      },
      {
        score: 3,
        level: "C\u1ea5p \u0111\u1ed9 3 \u00b7 Chu\u1ea9n H\u00f3a",
        label: "Ch\u00ednh s\u00e1ch d\u1eef li\u1ec7u & Enterprise Gateway",
        description: "K\u00fd k\u1ebft cam k\u1ebft NDA, \u00e1p d\u1ee5ng \u0111i\u1ec1u kho\u1ea3n c\u1ea5m d\u00f9ng d\u1eef li\u1ec7u hu\u1ea5n luy\u1ec7n m\u00f4 h\u00ecnh b\u00ean ngo\u00e0i; c\u00f3 r\u00e0o ch\u1eafn ch\u1eb7n r\u00f2 r\u1ec9 d\u1eef li\u1ec7u.",
      },
      {
        score: 4,
        level: "C\u1ea5p \u0111\u1ed9 4 \u00b7 T\u1ef1 Ch\u1ee7",
        label: "Private Cloud VPC ho\u1eb7c On-premise",
        description: "D\u1eef li\u1ec7u nh\u1ea1y c\u1ea3m \u0111\u01b0\u1ee3c x\u1eed l\u00fd trong ph\u1ea1m vi h\u1ea1 t\u1ea7ng ki\u1ec3m so\u00e1t n\u1ed9i b\u1ed9; m\u00f4 h\u00ecnh Private AI c\u00e1ch ly an to\u00e0n.",
      },
    ],
  },
  {
    id: "q11",
    axis: "Qu\u1ea3n tr\u1ecb thay \u0111\u1ed5i, \u0111o l\u01b0\u1eddng P&L & m\u1edf r\u1ed9ng",
    pillarNumber: 6,
    question: "Doanh nghi\u1ec7p c\u00f3 c\u01a1 ch\u1ebf n\u00e0o \u0111\u1ec3 \u0111o l\u01b0\u1eddng ROI v\u00e0 t\u00e1c \u0111\u1ed9ng t\u00e0i ch\u00ednh c\u1ee7a AI?",
    subtext: "M\u1ee5c ti\u00eau: \u0110\u00e1nh gi\u00e1 t\u00ednh k\u1ef7 lu\u1eadt trong vi\u1ec7c theo d\u00f5i hi\u1ec7u qu\u1ea3 kinh t\u1ebf.",
    options: [
      {
        score: 1,
        level: "C\u1ea5p \u0111\u1ed9 1 \u00b7 Kh\u1edfi Ph\u00e1t",
        label: "Kh\u00f4ng \u0111o l\u01b0\u1eddng b\u1ea5t k\u1ef3 ch\u1ec9 s\u1ed1 n\u00e0o",
        description: "M\u1ecdi ng\u01b0\u1eddi c\u1ea3m th\u1ea5y l\u00e0m nhanh h\u01a1n nh\u01b0ng kh\u00f4ng ai bi\u1ebft ti\u1ebft ki\u1ec7m \u0111\u01b0\u1ee3c bao nhi\u00eau gi\u1edd c\u00f4ng hay bao nhi\u00eau ti\u1ec1n c\u1ee5 th\u1ec3.",
      },
      {
        score: 2,
        level: "C\u1ea5p \u0111\u1ed9 2 \u00b7 Th\u1eed Nghi\u1ec7m",
        label: "B\u00e1o c\u00e1o c\u1ea3m t\u00ednh sau t\u1eebng bu\u1ed5i h\u1ecdc",
        description: "\u0110\u00e1nh gi\u00e1 qua kh\u1ea3o s\u00e1t \u0111\u1ed9 h\u00e0i l\u00f2ng c\u1ee7a h\u1ecdc vi\u00ean sau kh\u00f3a h\u1ecdc, ch\u01b0a \u0111\u1ed1i so\u00e1t v\u1edbi hi\u1ec7u su\u1ea5t l\u00e0m vi\u1ec7c th\u1ef1c t\u1ebf sau 3 th\u00e1ng.",
      },
      {
        score: 3,
        level: "C\u1ea5p \u0111\u1ed9 3 \u00b7 Chu\u1ea9n H\u00f3a",
        label: "B\u1ea3ng theo d\u00f5i ROI \u0111\u1ecbnh l\u01b0\u1ee3ng use case",
        description: "C\u00f3 dashboard \u0111o l\u01b0\u1eddng: s\u1ed1 gi\u1edd l\u00e0m vi\u1ec7c ti\u1ebft ki\u1ec7m, chi ph\u00ed tuy\u1ec3n d\u1ee5ng gi\u1ea3m, t\u1ed1c \u0111\u1ed9 s\u1ea3n xu\u1ea5t t\u0103ng tr\u01b0\u1edfng t\u1eebng th\u00e1ng.",
      },
      {
        score: 4,
        level: "C\u1ea5p \u0111\u1ed9 4 \u00b7 T\u1ef1 Ch\u1ee7",
        label: "T\u00e1c \u0111\u1ed9ng tr\u1ef1c ti\u1ebfp l\u00ean P&L to\u00e0n c\u00f4ng ty",
        description: "Ch\u1ec9 s\u1ed1 \u1ee9ng d\u1ee5ng AI v\u00e0 ROI \u0111\u01b0\u1ee3c ki\u1ec3m to\u00e1n \u0111\u1ecbnh k\u1ef3, g\u1eafn tr\u1ef1c ti\u1ebfp v\u00e0o KPI v\u00e0 bi\u00ean l\u1ee3i nhu\u1eadn c\u1ee7a t\u1eebng \u0111\u01a1n v\u1ecb kinh doanh.",
      },
    ],
  },
  {
    id: "q12",
    axis: "Qu\u1ea3n tr\u1ecb thay \u0111\u1ed5i, \u0111o l\u01b0\u1eddng P&L & m\u1edf r\u1ed9ng",
    pillarNumber: 6,
    question: "K\u1ebf ho\u1ea1ch qu\u1ea3n tr\u1ecb thay \u0111\u1ed5i (Change Management) v\u00e0 nh\u00e2n r\u1ed9ng sang c\u00e1c ph\u00f2ng ban kh\u00e1c ra sao?",
    subtext: "M\u1ee5c ti\u00eau: \u0110\u00e1nh gi\u00e1 kh\u1ea3 n\u0103ng bi\u1ebfn m\u1ed9t \u0111i\u1ec3m s\u00e1ng th\u00e0nh n\u0103ng l\u1ef1c c\u1ee7a to\u00e0n b\u1ed9 t\u1ed5 ch\u1ee9c.",
    options: [
      {
        score: 1,
        level: "C\u1ea5p \u0111\u1ed9 1 \u00b7 Kh\u1edfi Ph\u00e1t",
        label: "Ph\u00e2n m\u1ea3nh, kh\u00f4ng c\u00f3 c\u01a1 ch\u1ebf nh\u00e2n r\u1ed9ng",
        description: "M\u1ed9t ph\u00f2ng ban th\u1eed nghi\u1ec7m xong l\u00e0 d\u1eebng l\u1ea1i; c\u00e1c ph\u00f2ng ban kh\u00e1c kh\u00f4ng h\u1ec1 bi\u1ebft ho\u1eb7c kh\u00f4ng quan t\u00e2m.",
      },
      {
        score: 2,
        level: "C\u1ea5p \u0111\u1ed9 2 \u00b7 Th\u1eed Nghi\u1ec7m",
        label: "Tr\u00f4ng ch\u1edd \"t\u1ef1 nhi\u00ean lan t\u1ecfa\"",
        description: "Qu\u1ea3n l\u00fd k\u1ef3 v\u1ecdng c\u00e1c ph\u00f2ng ban t\u1ef1 h\u1ecdc h\u1ecfi l\u1eabn nhau, nh\u01b0ng kh\u00f4ng ai giao KPI v\u00e0 kh\u00f4ng c\u00f3 quy tr\u00ecnh b\u00e0n giao ch\u00ednh th\u1ee9c.",
      },
      {
        score: 3,
        level: "C\u1ea5p \u0111\u1ed9 3 \u00b7 Chu\u1ea9n H\u00f3a",
        label: "Quy tr\u00ecnh \u0111\u00f3ng g\u00f3i & chuy\u1ec3n giao b\u00e0i b\u1ea3n",
        description: "Khi 1 use case th\u00e0nh c\u00f4ng, Sunext c\u00f9ng ban \u0111i\u1ec1u h\u00e0nh \u0111\u00f3ng g\u00f3i SOP th\u00e0nh ti\u00eau chu\u1ea9n v\u00e0 chuy\u1ec3n giao sang ph\u00f2ng ban k\u1ebf ti\u1ebfp.",
      },
      {
        score: 4,
        level: "C\u1ea5p \u0111\u1ed9 4 \u00b7 T\u1ef1 Ch\u1ee7",
        label: "\u0110\u1ed5i m\u1edbi quy tr\u00ecnh li\u00ean t\u1ee5c",
        description: "To\u00e0n b\u1ed9 t\u1ed5 ch\u1ee9c xem vi\u1ec7c c\u1ea3i ti\u1ebfn quy tr\u00ecnh b\u1eb1ng AI l\u00e0 th\u00f3i quen l\u00e0m vi\u1ec7c th\u01b0\u1eddng nh\u1eadt; c\u00f3 c\u01a1 ch\u1ebf ghi nh\u1eadn v\u00e0 nh\u00e2n b\u1ea3n s\u00e1ng ki\u1ebfn \u0111\u1ecbnh k\u1ef3.",
      },
    ],
  },
];
