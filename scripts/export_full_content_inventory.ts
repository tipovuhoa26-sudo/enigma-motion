import fs from 'fs';
import path from 'path';

import { ADVANTAGES_DATA, STATS_DATA, CASES_DATA, CANONICAL_CASE_STUDIES } from '../src/content/data';
import { PILLARS_DATA, ASSESSMENT_QUESTIONS } from '../src/content/aiTransformation';
import { INDUSTRIES_DATA } from '../src/content/industryData';
import { INVESTMENT_TIERS } from '../src/content/investmentData';
import { FACULTY_BLOCKS, FACULTY_MEMBERS } from '../src/content/facultyData';
import { INDUSTRY_FILTERS, ORGANIZATION_LOGOS } from '../src/content/logoData';
import { SUNEXT_HUBS } from '../src/components/CobeGlobe';

function generateMarkdown(): string {
  const lines: string[] = [];

  const add = (str: string = '') => lines.push(str);

  add('# TỔNG QUAN TOÀN BỘ NỘI DUNG WEBSITE SUNEXT');
  add('> **Tài liệu kiểm kê & Lưu trữ nội dung toàn diện (Single Source of Content Truth)**');
  add(`> *Thời gian xuất file: ${new Date().toLocaleString('vi-VN')} | Đơn vị: Sunext Digital & AI Solutions*`);
  add('');
  add('---');
  add('');

  // Mục Lục
  add('## MỤC LỤC TỔNG THỂ');
  add('1. [Sơ Đồ Cấu Trúc Website & URL Routing](#1-sơ-đồ-cấu-trúc-website--url-routing)');
  add('2. [Trang Chủ (Homepage - `/`)](#2-trang-chủ-homepage---)');
  add('3. [Phương Pháp Luận Sunext (6 Trụ Cột - `/tu-duy-chuyen-doi-ai/*`)](#3-phương-pháp-luận-sunext-6-trụ-cột---tu-duy-chuyen-doi-ai)');
  add('4. [Hồ Sơ 8 Dự Án Thực Tế (Case Studies - `/case-studies/*`)](#4-hồ-sơ-8-dự-án-thực-tế-case-studies---case-studies)');
  add('5. [Giải Pháp Chuyển Đổi Theo 4 Ngành Trọng Điểm (`/nganh/*`)](#5-giải-pháp-chuyển-đổi-theo-4-ngành-trọng-điểm---nganh)');
  add('6. [Khung Đầu Tư & Ngân Sách Triển Khai (`/khung-dau-tu`)](#6-khung-đầu-tư--ngân-sách-triển-khai---khung-dau-tu)');
  add('7. [Đội Ngũ Chuyên Gia & Ban Cố Vấn (`/doi-ngu`)](#7-đội-ngũ-chuyên-gia--ban-cố-vấn---doi-ngu)');
  add('8. [Danh Mục 45 Khách Hàng & Đối Tác Thực Tế (`/khach-hang-doi-tac`)](#8-danh-mục-45-khách-hàng--đối-tác-thực-tế---khach-hang-doi-tac)');
  add('9. [Khung Chẩn Đoán Sẵn Sàng AI (12 Câu Hỏi - `/danh-gia-san-sang-ai`)](#9-khung-chẩn-đoán-sẵn-sàng-ai-12-câu-hỏi---danh-gia-san-sang-ai)');
  add('');
  add('---');
  add('');

  // PHẦN 1: Sơ đồ cấu trúc Website
  add('## 1. SƠ ĐỒ CẤU TRÚC WEBSITE & URL ROUTING');
  add('');
  add('| URL | Tên Trang | Mục Tiêu Nội Dung | Đối Tượng Độc Giả |');
  add('|---|---|---|---|');
  add('| `/` | Trang chủ (Home) | Tuyên ngôn giá trị, 3 nguyên tắc cốt lõi, quả cầu 3D mạng lưới dự án, dự án tiêu biểu, CTA | Ban Giám đốc, C-Level, Quản lý cấp cao |');
  add('| `/tu-duy-chuyen-doi-ai` | Phương Pháp Luận Sunext | Kiến trúc 6 trụ cột tham chiếu McKinsey Rewired, lầm tưởng vs sự thật | CEO, CDO, Trưởng ban chuyển đổi số |');
  add('| `/tu-duy-chuyen-doi-ai/[slug]` | Chi Tiết 6 Trụ Cột | Phân tích sâu từng trụ cột (Chiến lược, Nhân tài, Vận hành, Công nghệ, Dữ liệu, Governance) | Giám đốc chức năng, Kỹ sư trưởng, HRD, CFO |');
  add('| `/case-studies` | Thư Viện Dự Án Thực Tế | Danh sách toàn bộ các dự án AI định lượng đã triển khai | Ban điều hành cần bằng chứng kiểm chứng |');
  add('| `/case-studies/[slug]` | Chi Tiết 8 Case Study | Chuyện kể 6 nhịp (bối cảnh, cú sốc, điểm nghẽn, giải pháp, kết quả, bài học) | Trưởng bộ phận, Nhà đầu tư |');
  add('| `/nganh` | Giải Pháp Theo Ngành | Tổng quan giải pháp chuyển đổi theo 4 ngành kinh tế then chốt | Lãnh đạo doanh nghiệp theo từng lĩnh vực |');
  add('| `/nganh/[slug]` | Chi Tiết 4 Ngành | Phân tích điểm nghẽn, 3 use case cụ thể, lộ trình 3 giai đoạn | Giám đốc khối bán lẻ, sản xuất, B2B, BĐS |');
  add('| `/khung-dau-tu` | Khung Đầu Tư & ROI | 3 Gói lộ trình theo giá trị (Pilot, Department OS, Enterprise) & Bảng tính hoàn vốn | CFO, Chủ doanh nghiệp chuẩn bị ngân sách |');
  add('| `/doi-ngu` | Đội Ngũ Chuyên Gia | 5 Khối chuyên gia C-Level, kinh nghiệm thực chiến từ tập đoàn lớn | Khách hàng cần thẩm định năng lực đội ngũ |');
  add('| `/khach-hang-doi-tac` | Khách Hàng & Đối Tác | Mạng lưới 45 tổ chức, tập đoàn, trường viện với ghi chú minh bạch | Khách hàng doanh nghiệp kiểm chứng uy tín |');
  add('| `/danh-gia-san-sang-ai` | Chẩn Đoán Sẵn Sàng AI | Công cụ trắc nghiệm 12 câu hỏi định vị mức độ trưởng thành AI của doanh nghiệp | CEO, Quản lý tự đánh giá hiện trạng |');
  add('');
  add('---');
  add('');

  // PHẦN 2: Trang Chủ
  add('## 2. TRANG CHỦ (HOMEPAGE - `/`)');
  add('');
  add('### 2.1. Header & Điều Hướng');
  add('- **Logo thương hiệu**: `Sunext` (Monochrome Minimalist icon)');
  add('- **Menu chính**:');
  add('  1. Trang chủ (`/`)');
  add('  2. Phương pháp (`/tu-duy-chuyen-doi-ai`)');
  add('  3. Dự án thực tế (`/case-studies`)');
  add('  4. Theo ngành (`/nganh`)');
  add('  5. Đội ngũ (`/doi-ngu`)');
  add('- **Nút CTA Header**: `Đặt lịch tư vấn` (Dẫn tới `#contact` hoặc mailto: `contact@sunext.vn`)');
  add('');
  add('### 2.2. Hero Section');
  add('- **Tag phụ (Góc phải trên)**: `Tư vấn & Triển khai AI doanh nghiệp`');
  add('- **Hành động nhanh (CTAs)**:');
  add('  - Nút chính (Lime): `Phương Pháp Sunext` → `/tu-duy-chuyen-doi-ai`');
  add('  - Nút phụ (Outline): `Đo Độ Sẵn Sàng (5 Phút)` → `/danh-gia-san-sang-ai`');
  add('- **Tiêu đề chính (H1)**:');
  add('  > **Đưa AI Vào Vận Hành**');
  add('  > **Đo Bằng Kết Quả Kinh Doanh**');
  add('- **Khối tiện ích tương tác bên trái (Widgets)**:');
  add('  - *Widget 1*: `Kiến Trúc Dữ Liệu` (Biểu đồ cột nhịp điệu) → `/tu-duy-chuyen-doi-ai/kien-truc-du-lieu`');
  add('  - *Widget 2*: Ảnh xem trước dự án theo ngành (Ảnh thực địa cửa hàng Việt Nam) → `/nganh`');
  add('- **Tâm điểm thị giác bên phải (Visual Centerpiece)**:');
  add('  - Quả cầu WebGL 3D Cobe Globe (Tương tác xoay theo quán tính vật lý, biểu diễn mạng lưới tọa độ dự án thực tế).');
  add('  - Huy hiệu góc trên quả cầu: `40+ Dự Án Thực Tế` (Đèn xanh radar nhấp nháy).');
  add('  - Hướng dẫn tương tác góc dưới: `Kéo để xoay 3D`.');
  add('  - **Danh sách 8 Hubs tọa độ trên quả cầu**:');
  SUNEXT_HUBS.forEach((hub) => {
    add(`    - **${hub.name}** [${hub.location.join(', ')}]: ${hub.badge} — *${hub.description}*`);
  });
  add('- **Thẻ đo lường nổi (Floating Stat Card)**:');
  add('  - Nhãn: `Hiệu Quả Vận Hành` (Icon TrendingUp)');
  add('  - Chỉ số số nhảy: `20% - 40%`');
  add('  - Điều hướng phân trang 3 bước: `01 · 02 · 03`');
  add('- **Dòng dẫn chứng chân Hero**: `Xem dự án theo ngành và kết quả thực tế`');
  add('');
  add('### 2.3. Ba Nguyên Tắc Tạo Ra Kết Quả (Advantage Section)');
  add('- **Tiêu đề khối**: `Ba Nguyên Tắc Tạo Ra Kết Quả`');
  add('- **Mô tả ngắn**: `Khác biệt giữa một dự án AI sinh lời và một khoản đầu tư lãng phí.`');
  add('- **Nút bổ trợ**: `Phương Pháp Sunext` | `Đo Độ Sẵn Sàng (5 Phút)`');
  add('- **3 Thẻ nguyên tắc xếp tầng (Pinned Cards)**:');
  ADVANTAGES_DATA.forEach((card, idx) => {
    add(`  #### Thẻ 0${card.index}: ${card.title}`);
    add(`  - **Chủ đề (Eyebrow)**: \`${card.eyebrow}\``);
    add(`  - **Nội dung diễn giải**: ${card.description}`);
    add(`  - **Chỉ số chứng minh**: **${card.metric.prefix || ''}${card.metric.value}${card.metric.suffix || ''}** (${card.metric.label})`);
    add(`  - **Quy mô dự án**: *${card.metric.subtext}*`);
    add(`  - **Ảnh minh họa**: \`${card.image}\``);
    add('');
  });
  add('### 2.4. Thống Kê Định Lượng (Stats Strip)');
  STATS_DATA.forEach((st) => {
    add(`- **${st.value}**: ${st.label}`);
  });
  add('');
  add('### 2.5. Dự Án Tiêu Biểu (Featured Cases Grid)');
  add('- **Chữ mờ watermark**: `DỰ ÁN THỰC TẾ`');
  add('- **Thanh trượt ngang 8 dự án**:');
  CASES_DATA.forEach((cs, i) => {
    add(`  ${i + 1}. **${cs.title}** (\`${cs.category}\`) — *${cs.summary}* → Slug: \`/case-studies/${cs.slug}\``);
  });
  add('- **Chỉ dẫn chân gallery**: `Kéo ngang để xem tiếp` | Nút CTA: `Xem tất cả dự án`');
  add('');
  add('### 2.6. Khởi Động & Kêu Gọi Hành Động (CTA Section)');
  add('- **Tag**: `Khởi Động`');
  add('- **Tiêu đề**: `Bắt Đầu Dự Án AI Của Bạn`');
  add('- **Mô tả**: `Trao đổi 30 phút cùng chuyên gia Sunext để xác định bài toán hoàn vốn nhanh nhất.`');
  add('- **Hành động**: `Đặt Lịch Tư Vấn` (Gửi thư tới `contact@sunext.vn`) | `Đo Độ Sẵn Sàng (5 Phút)`');
  add('- **Cam kết chân trang**: `Phản hồi trong 2 giờ • contact@sunext.vn • TP. Hồ Chí Minh · Hà Nội`');
  add('');
  add('### 2.7. Chân Trang & Pháp Lý (Footer)');
  add('- **Sứ mệnh**: *Tư vấn chiến lược và triển khai chuyển đổi AI cho doanh nghiệp Việt Nam.*');
  add('- **Cam kết Bảo Mật & Pháp Lý**:');
  add('  - Ký kết thỏa thuận NDA bảo mật trước khi khảo sát.');
  add('  - Dữ liệu doanh nghiệp không dùng để train mô hình công khai.');
  add('  - Hỗ trợ triển khai Private AI & Local LLM Mesh.');
  add('');
  add('---');
  add('');

  // PHẦN 3: 6 Trụ Cột Phương Pháp Luận Sunext
  add('## 3. PHƯƠNG PHÁP LUẬN SUNEXT (6 TRỤ CỘT - `/tu-duy-chuyen-doi-ai`)');
  add('> **Khung chuyển đổi AI doanh nghiệp xây dựng trên bài toán thực tế của Việt Nam và đối chiếu phương pháp luận từ báo cáo nghiên cứu McKinsey Rewired.**');
  add('');
  PILLARS_DATA.forEach((p) => {
    add(`### Trụ Cột 0${p.number}: ${p.title} (\`/${p.slug}\`)`);
    add(`- **Tagline**: *${p.tagline}*`);
    add(`- **Tham chiếu Rewired**: \`${p.rewiredName}\` | Trục đo lường: \`${p.maturityAxis}\``);
    add(`- **Gói dịch vụ Sunext phụ trách**: **${p.sunextService.name}** (\`${p.sunextService.badge}\`)`);
    add(`  > ${p.sunextService.description}`);
    add('');
    add('#### Bối cảnh thực tế tại doanh nghiệp:');
    p.introParagraphs.forEach((para) => add(`> ${para}`));
    add('');
    add(`#### Lầm tưởng thường gặp: "${p.myth.title}"`);
    add(`*Lời tự nhủ của quản lý*: "${p.myth.quote}"`);
    p.myth.paragraphs.forEach((para) => add(`- ${para}`));
    add('');
    add(`#### Sự thật vận hành: "${p.reality.title}"`);
    add(`> ${p.reality.summary}`);
    add('');
    p.reality.points.forEach((pt) => {
      add(`- **${pt.title}**: ${pt.desc}`);
    });
    add('');
    if (p.reality.comparison) {
      add('##### So sánh Trước & Sau khi tái cấu trúc:');
      add('| Trước khi chuyển đổi (Làm thủ công / AI tự phát) | Sau khi triển khai Sunext Method |');
      add('|---|---|');
      const maxRows = Math.max(p.reality.comparison.before.length, p.reality.comparison.after.length);
      for (let r = 0; r < maxRows; r++) {
        const b = p.reality.comparison.before[r] || '';
        const a = p.reality.comparison.after[r] || '';
        add(`| ${b} | ${a} |`);
      }
      add('');
    }
    add(`#### Giải pháp của Sunext: "${p.solution.title}"`);
    add(`${p.solution.description}`);
    add('Các điểm nhấn triển khai:');
    p.solution.highlights.forEach((hl) => add(`- ${hl}`));
    add('');
    if (p.evidence && p.evidence.length > 0) {
      add('#### Dẫn chứng dự án thực tế:');
      p.evidence.forEach((ev) => {
        add(`- **Khách hàng**: ${ev.client} (${ev.industry} - Quy mô ${ev.teamSize})`);
        add(`  - Câu chuyện: ${ev.story}`);
        add(`  - Chỉ số: ${ev.metrics.map((m) => `**${m.value}** (${m.label})`).join(' · ')}`);
        add(`  - Liên kết case study: \`${ev.caseStudyUrl}\``);
      });
      add('');
    }
    add('---');
    add('');
  });

  // PHẦN 4: 8 Case Studies Chi Tiết
  add('## 4. HỒ SƠ 8 DỰ ÁN THỰC TẾ (CASE STUDIES - `/case-studies`)');
  add('> **Toàn bộ 8 case study được đúc kết từ dự án thật, tuân thủ cấu trúc Storytelling 6 nhịp của Nguyễn Trần Quang: Bối cảnh bình yên → Cú sốc biến cố → Nút thắt nghẹt thở → Điểm bùng phát giải pháp → Thành quả định lượng → Bài học trường tồn.**');
  add('');
  Object.values(CANONICAL_CASE_STUDIES).forEach((cs, index) => {
    add(`### Case 0${index + 1}: ${cs.title}`);
    add(`- **URL Slug**: \`/case-studies/${cs.slug}\``);
    add(`- **Khách hàng/Đơn vị**: ${cs.client}`);
    add(`- **Ngành**: ${cs.category} | **Quy mô**: ${cs.scale}`);
    add('');
    add('#### Thách thức ban đầu (The Challenge):');
    add(`> ${cs.challenge}`);
    add('');
    add('#### Giải pháp thực thi (The Solution):');
    add(`> ${cs.solution}`);
    add('');
    add('#### Chuyện kể 6 nhịp (The 6-Beat Storytelling):');
    cs.storyBeats.forEach((beat) => {
      add(`##### Nhịp ${beat.beatNumber}: ${beat.beatTitle}`);
      add(`${beat.narrative}`);
      add('');
    });
    add('#### Bộ chỉ số đo lường hiệu quả (Metrics):');
    add('| Chỉ số | Tên định lượng | Diễn giải chi tiết |');
    add('|---|---|---|');
    cs.metrics.forEach((m) => {
      add(`| **${m.value}** | ${m.label} | ${m.description} |`);
    });
    add('');
    add(`- **Trụ cột liên quan**: ${cs.pillarsInvolved.map((pi) => `[${pi.name}](/tu-duy-chuyen-doi-ai/${pi.slug})`).join(', ')}`);
    add(`- **Nhóm ngành**: [${cs.industry.name}](/nganh/${cs.industry.slug})`);
    add('');
    add('---');
    add('');
  });

  // PHẦN 5: Giải Pháp Theo 4 Ngành
  add('## 5. GIẢI PHÁP CHUYỂN ĐỔI THEO 4 NGÀNH TRỌNG ĐIỂM (`/nganh`)');
  add('');
  INDUSTRIES_DATA.forEach((ind) => {
    add(`### Ngành: ${ind.name} (\`/${ind.slug}\`)`);
    add(`- **Tiêu đề Hero**: ${ind.heroHeadline}`);
    add(`- **Thông điệp chính**: ${ind.heroSubheadline}`);
    add('');
    add('#### Bối cảnh thị trường:');
    add(`> ${ind.marketContext}`);
    add('');
    add('#### 3 Thách thức vận hành cốt lõi:');
    ind.challenges.forEach((ch, idx) => {
      add(`- **Thách thức ${idx + 1}: ${ch.title}**`);
      add(`  - Thực trạng: ${ch.description}`);
      add(`  - Tác động kinh tế: *${ch.impact}*`);
    });
    add('');
    add('#### Case study trọng điểm trong ngành:');
    add(`- **Tên dự án**: ${ind.centralCaseStudy.title}`);
    add(`- **Đơn vị**: ${ind.centralCaseStudy.client} (${ind.centralCaseStudy.scale})`);
    add(`- **Tóm tắt**: ${ind.centralCaseStudy.description}`);
    add(`- **Chỉ số đạt được**: ${ind.centralCaseStudy.metrics.map((m) => `**${m.value}** ${m.label}`).join(' · ')}`);
    add(`- **Đường dẫn**: \`${ind.centralCaseStudy.caseUrl}\``);
    add('');
    add('#### 3 Giải pháp Sunext đóng gói cho ngành:');
    ind.solutions.forEach((sol) => {
      add(`##### ${sol.name} (Gắn với trụ cột: ${sol.pillarName})`);
      add(`${sol.description}`);
      add('Deliverables bàn giao:');
      sol.deliverables.forEach((d) => add(`- ${d}`));
      add('');
    });
    add('#### Lộ trình chuyển đổi 3 giai đoạn:');
    add('| Giai đoạn | Thời gian | Mục tiêu trọng tâm |');
    add('|---|---|---|');
    ind.roadmap.forEach((rm) => {
      add(`| **${rm.phase}** | ${rm.duration} | ${rm.objective} |`);
    });
    add('');
    add('---');
    add('');
  });

  // PHẦN 6: Khung Đầu Tư & Ngân Sách
  add('## 6. KHUNG ĐẦU TƯ & NGÂN SÁCH TRIỂN KHAI (`/khung-dau-tu`)');
  add('> **3 Lộ trình đầu tư theo giá trị thực tế, loại bỏ rủi ro sa lầy ngân sách vào các dự án công nghệ kéo dài vô tận.**');
  add('');
  INVESTMENT_TIERS.forEach((tier) => {
    add(`### ${tier.name} (\`${tier.badge}\`)`);
    add(`- **Định vị**: ${tier.subtitle}`);
    add(`- **Phù hợp nhất cho**: ${tier.recommendedFor}`);
    add(`- **Thời gian sinh giá trị (Time to Value)**: **${tier.timeToValue}**`);
    add(`- **Phạm vi triển khai (Scope)**: ${tier.scope}`);
    add(`- **Cấp độ hỗ trợ**: ${tier.supportLevel}`);
    add('');
    add('#### Các hạng mục bàn giao (Deliverables):');
    tier.deliverables.forEach((cat) => {
      add(`- **${cat.category}**:`);
      cat.items.forEach((item) => add(`  - ${item}`));
    });
    add('');
    add('#### Cam kết nghiệm thu theo kết quả định lượng:');
    tier.measurableOutcomes.forEach((out) => add(`- ${out}`));
    add('');
    add('---');
    add('');
  });

  // PHẦN 7: Đội Ngũ Chuyên Gia
  add('## 7. ĐỘI NGŨ CHUYÊN GIA & BAN CỐ VẤN (`/doi-ngu`)');
  add('> **Các chuyên gia C-Level, nguyên giám đốc khối tại các tập đoàn lớn, trực tiếp chủ trì tư vấn và chuyển giao kỹ năng.**');
  add('');
  FACULTY_BLOCKS.filter((b) => b.id !== 'all').forEach((b) => {
    add(`### Khối Chuyên Môn: ${b.name}`);
    const members = FACULTY_MEMBERS.filter((m) => m.blockId === b.id);
    members.forEach((m) => {
      add(`#### ${m.name} — ${m.title}`);
      add(`- **Vai trò tại Sunext**: ${m.roleInSunext}`);
      add(`- **Số năm kinh nghiệm**: ${m.experienceYears}+ năm`);
      add('- **Cột mốc & Thành tựu tiêu biểu**:');
      m.keyHighlights.forEach((kh) => add(`  - ${kh}`));
      add(`- **Tổ chức từng đảm nhiệm**: ${m.organizations.join(' · ')}`);
      if (m.certifications && m.certifications.length > 0) {
        add(`- **Chứng nhận & Bằng cấp**: ${m.certifications.join(' · ')}`);
      }
      if (m.quote) {
        add(`- *Tuyên ngôn cố vấn*: "${m.quote}"`);
      }
      add('');
    });
    add('---');
    add('');
  });

  // PHẦN 8: Danh Mục 45 Khách Hàng & Đối Tác
  add('## 8. DANH MỤC 45 KHÁCH HÀNG & ĐỐI TÁC THỰC TẾ (`/khach-hang-doi-tac`)');
  add('> **Minh bạch 100%: Phân biệt rõ dự án tư vấn trực tiếp, đào tạo mạng lưới và đối tác liên kết.**');
  add('');
  add('| STT | Tổ Chức / Thương Hiệu | Ngành Nghề | Phân Hạng | Dự Án Triển Khai Thực Tế |');
  add('|---|---|---|---|---|');
  ORGANIZATION_LOGOS.forEach((org, idx) => {
    const tierName = org.tier === 1 ? 'Tier 1 (Case Study)' : 'Tier 2 (Mạng lưới)';
    const name = org.shortName ? `${org.name} (${org.shortName})` : org.name;
    add(`| ${idx + 1} | **${name}** | ${org.industryName} | ${tierName} | ${org.description} |`);
  });
  add('');
  add('---');
  add('');

  // PHẦN 9: Khung Chẩn Đoán Sẵn Sàng AI
  add('## 9. KHUNG CHẨN ĐOÁN SẴN SÀNG AI (12 CÂU HỎI - `/danh-gia-san-sang-ai`)');
  add('> **Bộ công cụ chẩn đoán mức độ trưởng thành số của doanh nghiệp qua 6 trục năng lực.**');
  add('');
  ASSESSMENT_QUESTIONS.forEach((q, idx) => {
    add(`### Câu ${idx + 1}: ${q.question} (Trục: \`${q.axis}\` - Trụ cột ${q.pillarNumber})`);
    add(`*Lưu ý khảo sát*: ${q.subtext}`);
    add('');
    add('| Cấp độ | Tên nhãn | Mô tả thực tế tại doanh nghiệp | Điểm |');
    add('|---|---|---|---|');
    q.options.forEach((opt) => {
      add(`| **${opt.level}** | ${opt.label} | ${opt.description} | +${opt.score}đ |`);
    });
    add('');
  });
  add('---');
  add('');
  add('## KẾT LUẬN & HƯỚNG DẪN QUẢN TRỊ NỘI DUNG');
  add('- **Nguyên tắc bất di bất dịch**: Không tự bịa số liệu, không dùng từ sáo rỗng (*thực chiến, toàn diện, đột phá*), tuân thủ Luật Quảng cáo (không dùng *số 1, duy nhất, tốt nhất* mà không có văn bản chứng minh).');
  add('- **Quy ước đồng bộ**: Khi cần chỉnh sửa bất kỳ nội dung nào trên website, hãy cập nhật tại các file mã nguồn trong `src/content/` (`data.ts`, `aiTransformation.ts`, `industryData.ts`, `investmentData.ts`, `facultyData.ts`, `logoData.ts`), sau đó chạy lệnh build để toàn bộ website tự động render đồng nhất.');
  add('');

  return lines.join('\n');
}

const outputPath = path.resolve(__dirname, '../NOI_DUNG_TOAN_BO_WEBSITE.md');
const content = generateMarkdown();
fs.writeFileSync(outputPath, content, 'utf-8');

console.log(`[SUCCESS] Da xuat toan bo noi dung website thanh cong!`);
console.log(`File luu tai: ${outputPath}`);
console.log(`Dung luong: ${(Buffer.byteLength(content, 'utf-8') / 1024).toFixed(2)} KB`);
console.log(`Tong so dong: ${content.split('\n').length}`);
