# 01 · Benchmark & Đề xuất trang cần thiết cho Sunext-Website

Căn cứ: site thật tại `/Users/hungnpv/Downloads/Sunext/Sunext-Website/` (đã kiểm tra trực tiếp mã nguồn, không suy đoán). Không liên quan tới `Sunext-AI-Website` (dự án rebuild Next.js khác, định vị nghệ thuật cổ điển châu Âu).

---

## 1. Hiện trạng đã xác minh (trước khi bàn thêm trang mới)

- **Sitemap hiện có (31 trang):** Home, Dịch vụ, Giải pháp (7 trang con: AI Agent/Chatbot, Automation Workflow, AI Capability, AI-First Enterprise, Nâng cao theo phòng ban, Đào tạo AI cơ bản, Private LLM/RAG, Giới thiệu), Giải pháp theo phòng ban (5: HR/IT/Marketing/Sales/Operations), Chương trình đào tạo (3: AI in Business, AI in Marketing, Agentics AI Automations), Case Studies (3 case thật), AI Maturity Assessment, Lộ trình chuyển đổi AI, Vì sao chọn Sunext, Đội ngũ, About, FAQ, Tin tức, Contact, Privacy/Terms/Security, Khách hàng & đối tác.
- **`/tin-tuc/` không phải blog** — đã kiểm tra nội dung thật, đây là lịch sự kiện (Horizon.ai 2026, Conviction 2026, Future of AI: Chapter 4). **Không có bất kỳ trang kiến thức/insight/bài viết chuyên sâu nào trên toàn site.**
- **Motion stack đã có sẵn:** GSAP 3.12.5 + ScrollTrigger (CDN), dùng trong `js/main.js` cho reveal-on-scroll (IntersectionObserver + `ScrollTrigger.batch`), đếm số chạy (count-up), theo pattern rất gọn — không có Lenis, không có framework nặng. Đây là nền tốt, không cần thay.
- **Hình ảnh: chỉ có 1 file duy nhất trong `images/` — `logo-sunext.png`.** Không có `<img>` nào khác, không có `background-image` nào khác trong toàn bộ site. Mọi mảng thị giác hiện tại dựa vào icon font (Material Symbols) + gradient Tailwind. → xem file `02_KE_HOACH_HINH_ANH_VIET_NAM.md` để có kế hoạch chi tiết.

## 2. Benchmark — đã nghiên cứu thật (nguồn kèm ngày truy cập 2026-09-19)

### Nhóm 1 — Tư vấn AI toàn cầu (định vị uy tín, học cách đóng khung framework)

| Đơn vị | Điều đáng học | Bài học áp dụng cho Sunext |
|---|---|---|
| **McKinsey QuantumBlack** | Sở hữu một khung phương pháp luận có tên riêng, được trích dẫn nguyên văn: **"Rewired"** (6 năng lực chuyển đổi) | Sunext đã có nội dung theo đúng 6 trụ cột này (bộ `ai-transformation-content/` vừa viết) — **nên đặt tên riêng cho khung này** thay vì gọi chung "lộ trình 6 bước", để có một tài sản thương hiệu tư duy, giống cách McKinsey sở hữu chữ "Rewired" |
| **BCG X** | Sở hữu quy tắc **"10-20-70"** — 10% công nghệ/thuật toán, 20% dữ liệu/hệ thống, 70% con người/quy trình quyết định thành bại | Củng cố đúng thông điệp Trụ cột 2 & 3 đã viết (Đội ngũ & Vận hành) — có thể trích dẫn quy tắc này như bằng chứng bên thứ ba trong trang hub, không cần bịa số liệu riêng |
| **Deloitte AI & Data** | Sở hữu khung **"7 khía cạnh Trustworthy AI"** riêng cho governance/rủi ro | Xác nhận: bảo mật/governance nên là **chủ đề xuyên suốt nhắc ở mọi trang** (đúng như đã thiết kế), không cần tách thành trụ cột thứ 7 riêng — cách làm này đã đúng |

*(Nguồn: tổng hợp qua tìm kiếm web 2026-09-19, các trang mô tả năng lực AI của McKinsey/BCG/Deloitte — không có quyền truy cập trực tiếp sơ đồ trang nội bộ của họ nên không suy diễn thêm về IA chi tiết ngoài các framework đã công bố công khai.)*

### Nhóm 2 — Thị trường Việt Nam (định vị cạnh tranh trực tiếp)

| Đơn vị | Điều đáng học | Bài học áp dụng cho Sunext |
|---|---|---|
| **CMC TS** | Cấu trúc theo **7 mảng giải pháp** rõ ràng, định vị "đối tác đồng hành toàn trình chuyển đổi số và chuyển đổi AI" | Xác nhận cách đóng khung "đồng hành toàn trình" của Sunext đang đi đúng hướng thị trường trong nước |
| **FPT Digital** | Cung cấp "kiến thức nền tảng về AI, use case thực tế theo ngành" — định vị giáo dục thị trường trước khi bán | Đây chính là khoảng trống Sunext đang thiếu (không có trang kiến thức/insight) — bộ nội dung AI Transformation vừa viết lấp đúng khoảng trống này |

### Nhóm 3 — Chuẩn motion "hiện đại, lean" 2026 (không phải site AI, nhưng là chuẩn vàng cho B2B)

| Site | Vì sao đáng học | Bài học |
|---|---|---|
| **Linear.app** | Được xem là chuẩn mực "lean modern motion" cho B2B: gần như không dùng hiệu ứng scroll phức tạp, chỉ dùng transition cực nhanh, nhất quán, không có gì "diễn" quá 300ms | Đây là cực đối lập với hướng "cinematic" — đúng tinh thần "lean nhất" mà bạn yêu cầu |
| **Stripe** | Kết hợp minh họa 3D tinh tế với motion cực kỳ tiết chế — hiệu ứng chỉ xuất hiện ở đúng 2-3 điểm nhấn/trang, còn lại là static | Bài học: không phải trang nào cũng cần animation — chỉ nên "diễn" ở 2-3 khoảnh khắc quan trọng nhất mỗi trang |
| **Refokus (agency)** — nghiên cứu 2026-09-19 | Awwwards ghi nhận xu hướng SaaS/AI 2026: layout tối giản, typography lớn, micro-interaction có mục đích, **tránh hiệu ứng biến trang thành "máy đánh bạc"** (nguyên văn xu hướng được ghi nhận) | Xác nhận đúng hướng "lean" — nhiều hiệu ứng nhỏ vô nghĩa còn tệ hơn không có hiệu ứng nào |

**Kết luận motion:** Sunext-Website **không cần** GSAP ScrollTrigger pin/scrub phức tạp kiểu enigma-motion-spec (bộ đó dành cho một trang trình diễn sản phẩm khác). Cái cần là: giữ nguyên pattern hiện có (reveal-on-scroll, count-up), mở rộng có kiểm soát — xem chi tiết ở §4.

## 3. Đề xuất trang mới (xếp theo mức độ cần thiết, có lý do)

| # | Trang đề xuất | Vì sao cần | Mức độ |
|---|---|---|---|
| 1 | **Nâng cấp bộ `ai-transformation-content/` (đã viết) thành mục điều hướng cấp 1 trên site** — ví dụ thêm "Tư duy chuyển đổi AI" hoặc "Kiến thức" vào menu chính, ngang hàng "Dịch vụ"/"Giải pháp" | Site hiện **không có bất kỳ trang kiến thức/insight nào** — đây là khoảng trống benchmark rõ nhất (FPT Digital, McKinsey đều làm), và nội dung đã viết sẵn, chỉ thiếu chỗ đứng trong IA | **Bắt buộc** |
| 2 | **Đặt tên riêng cho khung 6 trụ cột** (thay vì gọi chung "Rewired của McKinsey" hoặc "lộ trình 6 bước") | Không có site tư vấn AI uy tín nào (McKinsey/BCG/Deloitte) đi dùng nguyên khung của đối thủ mà không đóng dấu thương hiệu riêng lên nó — cần một cái tên sở hữu được (ví dụ dạng "Khung [Tên]™" hoặc một từ tiếng Việt ngắn, dễ nhớ) | **Bắt buộc** — quyết định thuộc về đội ngũ Sunext, tôi không tự đặt tên thay |
| 3 | **3 trang theo ngành** (Retail, Manufacturing, B2B Services/Dịch vụ doanh nghiệp) | Hiện có "giải pháp theo phòng ban" (HR/IT/Marketing...) nhưng **không có "theo ngành"**, trong khi cả 3 case study thật đều thuộc 3 ngành khác nhau — mỗi case study đang "mồ côi", nếu có trang ngành thì case study trở thành bằng chứng trung tâm của một trang bán hàng theo ngành, đúng mô hình CMC TS/FPT Digital | Nên làm |
| 4 | **Trang "Investment" / khung đầu tư tham khảo** (không phải bảng giá cứng — mô tả các mức đầu tư theo quy mô dự án) | Nhiều doanh nghiệp B2B rời trang vì không hình dung được ngân sách cần chuẩn bị trước khi đặt lịch tư vấn | Cân nhắc — tùy chính sách giá của Sunext, không bắt buộc |
| 5 | **Trang Tuyển dụng/Careers** | Tín hiệu uy tín (đội ngũ đang tăng trưởng) — các benchmark lớn đều có, nhưng không cấp thiết cho mục tiêu "chuyển đổi AI" hiện tại | Thấp — làm sau |

**Không đề xuất:** thêm trang "Về nghệ thuật/triết học" hay bất kỳ định hướng thị giác nào mượn từ `Sunext-AI-Website` — hai dự án phải giữ tách biệt hoàn toàn về định vị.

## 4. Kế hoạch Motion — "hiện đại, lean nhất"

Nguyên tắc: **mở rộng đúng pattern đang có trong `main.js`**, không thêm thư viện mới, không thêm hiệu ứng cho mọi phần tử.

| Vùng | Hiệu ứng đề xuất | Kỹ thuật | Vì sao "lean" |
|---|---|---|---|
| Hero mỗi trang mới (6 trụ cột, trang ngành) | Heading + subheading fade-up nhẹ khi vào trang (không phải khi scroll) | Tái dùng đúng pattern `gsap.set(..., {autoAlpha:0, y:18})` + `ScrollTrigger.create` đã có trong `main.js` dòng ~3649 | Copy pattern có sẵn, không viết code mới, không thêm KB nào |
| Số liệu case study (40%, 99.8%, x5...) | Count-up khi cuộn tới | Đã có sẵn hàm count-up trong `main.js` — chỉ cần gắn thêm `data-*` vào các số mới | Zero code mới |
| Card 6 trụ cột trên trang hub | Stagger reveal khi cuộn tới, dùng `ScrollTrigger.batch` | Đã có sẵn pattern batch reveal cho case studies — áp y hệt cho card trụ cột | Zero code mới |
| Ảnh case study/ngành (ảnh thật/AI-gen mới, xem file 02) | **Chỉ** fade-in + scale nhẹ (0.98→1) khi ảnh load xong, không có parallax, không có pin | CSS transition thuần, không cần GSAP | Ảnh là phần nặng nhất về băng thông — hiệu ứng phải rẻ nhất |
| Toàn site | **Không thêm** smooth-scroll (Lenis/ScrollSmoother) | — | Site tĩnh, nhiều trang, nhiều thiết bị cũ truy cập — smooth-scroll toàn site tăng rủi ro giật trên máy yếu mà lợi ích thị giác không tương xứng với một site B2B thông tin (khác bản chất với trang trình diễn sản phẩm) |
| `prefers-reduced-motion` | Bắt buộc tôn trọng — đã có `IntersectionObserver` fallback trong code hiện tại, chỉ cần thêm 1 điều kiện guard ở đầu mỗi khối GSAP mới | `if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;` | 1 dòng, không đánh đổi gì |

**Ngân sách hiệu năng:** không thêm quá **10KB JS gzip** cho toàn bộ motion mới (vì đang tái dùng pattern có sẵn, con số này gần như chắc chắn đạt được) — không thêm thư viện CDN nào ngoài GSAP+ScrollTrigger đã có.
