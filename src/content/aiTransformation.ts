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
        story: 'Xác định đúng nút thắt nghẽn lớn nhất nằm ở khâu tuyển dụng thời vụ: đội HR 4 người mất 3 ngày lọc CV cho mỗi đợt. Tập trung nguồn lực giải duy nhất use case này trước khi làm bất kỳ thứ gì khác.',
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
      description: 'Chương trình đào tạo theo thang 5 tầng thực chiến: Foundation → Marketing AI → Agentics Automations → Pipeline Engineering → Custom Vision/LLM.',
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
        story: 'Không nhảy vào mua tool ngay. Sunext bắt đầu bằng đào tạo nền tảng cho đội HR (Tầng 1), đào tạo nghiệp vụ chuyên sâu HR (Tầng 2), sau đó mới chuyển giao Agent sàng lọc CV tích hợp ATS.',
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
        story: 'Đào tạo Tầng 2 cho toàn bộ đội ngũ Marketing nội bộ trước khi thiết lập Content Factory tự động hóa.',
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
        story: 'Không chỉ đưa một con bot viết văn bản. Sunext tái cấu trúc toàn bộ quy trình: thiết lập Custom GPT chuẩn brand voice, tích hợp luồng duyệt nội dung và lịch xuất bản tự động.',
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
          desc: 'Tự động hóa toàn diện các tác vụ lặp lại xuyên phòng ban: đối chiếu chứng từ, trích xuất hóa đơn, cảnh báo rủi ro.',
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
        story: 'Agent sàng lọc CV không đứng riêng trên web. Agent tự chấm điểm, xếp hạng và đẩy shortlist ứng viên thẳng vào hệ thống quản lý tuyển dụng (ATS), tích hợp chatbot tiếp nhận tự động.',
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
        story: 'Computer Vision Agent được đấu nối trực tiếp vào chuyền sản xuất cơ khí, cảnh báo thời gian thực và đẩy dữ liệu lên dashboard điều hành của quản đốc ca 24/7.',
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
    metaDescription: 'Model tốt nhất thế giới vẫn trả lời sai nếu dữ liệu bạn đưa vào nó bẩn, rời rạc, mâu thuẫn. Đây là lý do dữ liệu quyết định AI thành hay bại — không phải model.',
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
        story: 'Computer Vision Agent xử lý hàng triệu khung hình từ camera chuyền sản xuất mỗi ngày. Kết quả chỉ đạt đỉnh khi luồng dữ liệu hình ảnh được chuẩn hóa, gắn nhãn lỗi chính xác và đồng bộ vào hệ thống MES.',
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
    title: 'Mở rộng quy mô & thúc đẩy áp dụng',
    metaTitle: 'Trụ cột 6: Mở rộng quy mô & thúc đẩy áp dụng — Vì sao một phòng ban làm tốt không cứu được cả công ty',
    metaDescription: 'Một đội làm AI rất tốt, không ai nhân rộng sang phòng ban khác. Đây là lý do phổ biến nhất khiến chuyển đổi AI dừng lại ở một "điểm sáng" cô lập.',
    tagline: 'Vì sao một phòng ban làm tốt vẫn không thể cứu được cả công ty',
    rewiredName: 'Scaling, Adoption & Governance',
    maturityAxis: 'Khả năng quản trị thay đổi & mở rộng sáng kiến AI',
    sunextService: {
      name: 'Đo lường, tối ưu & mở rộng',
      url: '/giai-phap/dich-vu/#do-luong-nang-luc',
      badge: 'Giai đoạn 6 · Scale & Governance',
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
        story: 'Sản lượng content tăng gấp 5 lần ngay trong tháng đầu. Nhưng con số quan trọng hơn là hiệu quả được duy trì liên tục suốt 5 tháng, giúp organic traffic tăng 60% mà không cần bổ sung thêm nhân sự hay ngân sách.',
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
        'Lộ trình nhân rộng từ 1 use case sang hệ sinh thái đa tác vụ toàn diện.',
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
    id: 'q1',
    axis: 'Chiến lược & tầm nhìn AI',
    pillarNumber: 1,
    question: 'Doanh nghiệp của bạn đang xác định ưu tiên đầu tư cho AI như thế nào?',
    subtext: 'Trụ cột 1: Business-led Digital Roadmap',
    options: [
      {
        score: 1,
        level: 'Cấp độ 1 · Tự phát',
        label: 'Chưa có chiến lược cụ thể',
        description: 'Mỗi phòng ban hoặc cá nhân tự mày mò thử nghiệm các công cụ miễn phí, không có ngân sách hay định hướng chung.',
      },
      {
        score: 2,
        level: 'Cấp độ 2 · Thử nghiệm rời rạc',
        label: 'Có vài dự án thí điểm nhỏ',
        description: 'Đã đầu tư license cho một số nhóm (như Marketing, IT), nhưng chưa có mục tiêu kinh tế hoặc KPI đo lường định lượng.',
      },
      {
        score: 3,
        level: 'Cấp độ 3 · Định hướng giá trị',
        label: 'Có lộ trình use case rõ ràng',
        description: 'Đã xác định các miền nghiệp vụ trọng điểm cần chuyển đổi, có mục tiêu tiết kiệm chi phí hoặc tăng trưởng cụ thể.',
      },
      {
        score: 4,
        level: 'Cấp độ 4 · Tích hợp chiến lược cốt lõi',
        label: 'AI là lợi thế cạnh tranh sống còn',
        description: 'Lộ trình AI gắn trực tiếp vào kế hoạch kinh doanh của Ban Giám Đốc, có Product Owner chịu trách nhiệm P&L cho từng sáng kiến.',
      },
    ],
  },
  {
    id: 'q2',
    axis: 'Con người & năng lực đội ngũ',
    pillarNumber: 2,
    question: 'Mức độ hiểu biết và kỹ năng ứng dụng AI của đội ngũ nhân sự hiện tại ra sao?',
    subtext: 'Trụ cột 2: Talent Bench & Capabilities',
    options: [
      {
        score: 1,
        level: 'Cấp độ 1 · Chưa phổ cập',
        label: 'Phần lớn nhân viên chưa biết dùng AI hiệu quả',
        description: 'Chỉ biết hỏi những câu hỏi chung chung, kết quả nhận về không áp dụng được vào công việc hàng ngày.',
      },
      {
        score: 2,
        level: 'Cấp độ 2 · Tự phát cá nhân',
        label: 'Một vài cá nhân tự học rất giỏi',
        description: 'Có một số nhân sự nổi trội tự mày mò, nhưng tri thức không được chuẩn hóa thành tài liệu hay đào tạo lại cho tập thể.',
      },
      {
        score: 3,
        level: 'Cấp độ 3 · Đào tạo có cấu trúc',
        label: 'Đã có chương trình đào tạo theo vai trò',
        description: 'Nhân viên nắm vững kỹ thuật prompt nghiệp vụ; có đội ngũ AI Champions đóng vai trò dẫn dắt tại các phòng ban.',
      },
      {
        score: 4,
        level: 'Cấp độ 4 · Tự chủ xây dựng giải pháp',
        label: 'Đội ngũ có khả năng tự cấu hình Agent',
        description: 'Nhân sự các phòng ban tự động hóa quy trình nội bộ, phối hợp nhịp nhàng với đội kỹ sư AI để phát triển giải pháp mới.',
      },
    ],
  },
  {
    id: 'q3',
    axis: 'Quy trình & cách vận hành',
    pillarNumber: 3,
    question: 'Quy trình làm việc hiện tại đã sẵn sàng cho sự tham gia của AI ở mức độ nào?',
    subtext: 'Trụ cột 3: Agile Operating Model',
    options: [
      {
        score: 1,
        level: 'Cấp độ 1 · Thủ công & phân mảnh',
        label: 'Quy trình phụ thuộc hoàn toàn vào con người',
        description: 'Nhiều bước trung gian, luồng duyệt giấy tờ hoặc email chậm trễ, không có quy chuẩn vận hành (SOP) cập nhật.',
      },
      {
        score: 2,
        level: 'Cấp độ 2 · Số hóa cơ bản',
        label: 'Đã có SOP nhưng chưa tối ưu cho AI',
        description: 'AI chỉ được dùng như công cụ gõ chữ nhanh hơn trong một quy trình cũ, chưa được thiết kế lại để cắt giảm bước thừa.',
      },
      {
        score: 3,
        level: 'Cấp độ 3 · Tái thiết kế linh hoạt',
        label: 'Quy trình được tinh gọn cho AI',
        description: 'Đã loại bỏ các bước lặp lại vô nghĩa; phân định rõ ràng điểm nào AI xử lý tự động, điểm nào con người ký duyệt (Human-in-the-loop).',
      },
      {
        score: 4,
        level: 'Cấp độ 4 · Tự động hóa liên phòng ban',
        label: 'Vận hành dựa trên Agent thông minh',
        description: 'Các AI Agent tự động trao đổi dữ liệu và thực thi tác vụ xuyên suốt các bộ phận kinh doanh, vận hành và dịch vụ khách hàng.',
      },
    ],
  },
  {
    id: 'q4',
    axis: 'Nền tảng công nghệ & tích hợp',
    pillarNumber: 4,
    question: 'Các công cụ AI hiện có kết nối với hệ thống phần mềm nghiệp vụ như thế nào?',
    subtext: 'Trụ cột 4: Technology Platform & Integration',
    options: [
      {
        score: 1,
        level: 'Cấp độ 1 · Hoàn toàn tách biệt',
        label: 'Dùng AI độc lập qua giao diện web ngoài',
        description: 'Nhân viên phải copy-paste dữ liệu qua lại giữa ERP, CRM, Excel và cửa sổ chat AI hoàn toàn bằng tay.',
      },
      {
        score: 2,
        level: 'Cấp độ 2 · Tích hợp điểm (Point-to-point)',
        label: 'Đã thử nghiệm kết nối API đơn lẻ',
        description: 'Có một số script hoặc webhook đơn giản do IT tự viết cho 1-2 tác vụ, nhưng chưa ổn định và khó mở rộng.',
      },
      {
        score: 3,
        level: 'Cấp độ 3 · Tích hợp hệ thống lõi',
        label: 'AI kết nối trực tiếp với ERP/CRM/HRIS',
        description: 'Dữ liệu chảy tự động hai chiều; kết hợp AI với các công cụ RPA để thực hiện tác vụ lặp lại mà không cần người copy tay.',
      },
      {
        score: 4,
        level: 'Cấp độ 4 · Nền tảng hợp nhất chuẩn doanh nghiệp',
        label: 'Hạ tầng Agentic Mesh mở rộng',
        description: 'Có Enterprise Gateway bảo mật, kiến trúc microservices và API an toàn, hỗ trợ triển khai nhanh use case mới chỉ trong vài ngày.',
      },
    ],
  },
  {
    id: 'q5',
    axis: 'Dữ liệu & kiến trúc dữ liệu',
    pillarNumber: 5,
    question: 'Hiện trạng dữ liệu của doanh nghiệp bạn có đủ sạch và đáng tin cậy cho AI?',
    subtext: 'Trụ cột 5: Enterprise Data Architecture',
    options: [
      {
        score: 1,
        level: 'Cấp độ 1 · Rải rác & ô nhiễm',
        label: 'Dữ liệu nằm trên hàng chục file Excel khác nhau',
        description: 'Không ai biết file nào là bản mới nhất; dữ liệu mâu thuẫn giữa các phòng ban, AI không có nguồn tin cậy để truy xuất.',
      },
      {
        score: 2,
        level: 'Cấp độ 2 · Có cơ sở dữ liệu nhưng chưa chuẩn',
        label: 'Đã có phần mềm nhưng dữ liệu chưa làm sạch',
        description: 'Dữ liệu trong phần mềm bị thiếu trường thông tin, trùng lặp nhiều; AI trả lời thiếu chính xác nếu tra cứu trực tiếp.',
      },
      {
        score: 3,
        level: 'Cấp độ 3 · Nguồn dữ liệu thống nhất (Single Source)',
        label: 'Đã hợp nhất và có chính sách quản trị',
        description: 'Có Data Warehouse hoặc hệ thống lưu trữ tập trung; dữ liệu được phân quyền rõ ràng và làm sạch định kỳ cho AI đọc.',
      },
      {
        score: 4,
        level: 'Cấp độ 4 · Thời gian thực & sẵn sàng cho RAG',
        label: 'Kiến trúc dữ liệu hiện đại cho AI',
        description: 'Hệ thống Vector Database và Data Pipeline cập nhật theo thời gian thực; AI phản hồi với độ chính xác trên 99% không bị ảo giác.',
      },
    ],
  },
  {
    id: 'q6',
    axis: 'Quản trị rủi ro & mở rộng quy mô',
    pillarNumber: 6,
    question: 'Doanh nghiệp có cơ chế nào để nhân rộng AI và quản trị rủi ro bảo mật?',
    subtext: 'Trụ cột 6: Scaling, Adoption & Governance',
    options: [
      {
        score: 1,
        level: 'Cấp độ 1 · Không kiểm soát rủi ro',
        label: 'Chưa có quy định bảo mật dữ liệu khi dùng AI',
        description: 'Nhân viên thoải mái đưa dữ liệu nội bộ, thông tin khách hàng lên các công cụ AI công cộng mà không có rào chắn bảo vệ.',
      },
      {
        score: 2,
        level: 'Cấp độ 2 · Nhận thức bước đầu',
        label: 'Có cảnh báo bảo mật nhưng chưa có cơ chế nhân rộng',
        description: 'Đã ban hành quy định cấm chia sẻ dữ liệu nhạy cảm, nhưng nếu có phòng ban làm AI hiệu quả thì cũng không ai nhân rộng sang nhóm khác.',
      },
      {
        score: 3,
        level: 'Cấp độ 3 · Đo lường và quy trình nhân rộng',
        label: 'Theo dõi chỉ số hiệu quả định kỳ',
        description: 'Có dashboard đo lường ROI thật; có quy trình chia sẻ kinh nghiệm và chuyển giao use case giữa các phòng ban.',
      },
      {
        score: 4,
        level: 'Cấp độ 4 · Quản trị toàn diện (Enterprise Governance)',
        label: 'Hệ thống Private AI và văn hóa đổi mới liên tục',
        description: 'Bảo mật tuyệt đối với Private Model / NDA-first; có hội đồng quản trị AI và cơ chế khen thưởng sáng kiến ứng dụng định kỳ.',
      },
    ],
  },
];
