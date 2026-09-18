# 00 · Content Plan — "AI Transformation theo Rewired của McKinsey" (Sam Ovens style)

**Website đích:** Sunext-Website (site đang chạy tại `/Users/hungnpv/Downloads/Sunext/Sunext-Website/`) — static HTML, mỗi trang là một thư mục chứa `index.html` riêng.
**Không đụng vào:** `Sunext-AI-Website` (dự án rebuild Next.js khác, đã có tài liệu McKinsey framework riêng) — không liên quan tới yêu cầu này.

---

## 1. Vì sao viết bộ nội dung này

Sunext hiện đã có 3 mảnh ghép rời rạc, đúng nhưng chưa được kể thành một câu chuyện:

1. `/lo-trinh-chuyen-doi-ai/` — lộ trình 6 bước chung chung (đánh giá → chiến lược → xây năng lực → triển khai → đo lường → mở rộng).
2. `/ai-maturity-assessment/` — bài test 5 phút, 6 trục đánh giá (Chiến lược & tầm nhìn · Dữ liệu & hệ thống · Quy trình & vận hành · Con người & năng lực · Bảo mật & governance · Quản trị thay đổi & mở rộng).
3. `/giai-phap/dich-vu/` — mô hình 3 bước bán hàng thật (Đánh giá → Chiến lược → Thực thi), với Thực thi tách thành Đào tạo (hệ thống "Tầng 1 → Tầng 5") và Triển khai (Data & Operating System, Engineering & Integration).

Ba mảnh này **đã ăn khớp với đúng 6 trụ cột "Rewired" của McKinsey** — chỉ là chưa ai nói thẳng ra. Bộ nội dung này làm đúng một việc: dùng khung Rewired làm **lý do vì sao 70% dự án AI thất bại**, rồi chỉ thẳng vào từng dịch vụ Sunext đã có sẵn như câu trả lời. Không bịa dịch vụ mới, không bịa số liệu — chỉ kể lại sự thật đang có theo cách khiến người đọc phải hành động.

## 2. Ánh xạ Rewired ↔ Sunext (căn cứ, không suy diễn)

| # | Trụ cột Rewired (McKinsey) | Trục tương ứng trong AI Maturity test hiện có | Dịch vụ Sunext hiện có (URL thật) |
|---|---|---|---|
| 1 | Business-led Digital Roadmap | Chiến lược & tầm nhìn AI | `/giai-phap/dich-vu/#chien-luoc-ai` |
| 2 | Talent Bench | Con người & năng lực đội ngũ | `/giai-phap/dich-vu/#dao-tao` + hệ thống Tầng 1→5 (`/chuong-trinh/`) |
| 3 | Operating Model | Quy trình & cách vận hành | Tái cấu trúc quy trình, trong `/giai-phap/dich-vu/#nen-tang-du-lieu` |
| 4 | Technology Platform | (một phần của) Dữ liệu & hệ thống công nghệ | `/giai-phap/dich-vu/#tich-hop-ai` (ERP, RPA, Engineering & Integration) |
| 5 | Enterprise Data Architecture | Dữ liệu & hệ thống công nghệ | `/giai-phap/dich-vu/#nen-tang-du-lieu` (Data & Operating System) |
| 6 | Scaling & Adoption | Khả năng quản trị thay đổi & mở rộng sáng kiến AI | `/giai-phap/dich-vu/#do-luong-nang-luc` |
| — | (xuyên suốt, không phải 1 trụ cột riêng) | Bảo mật, rủi ro & governance | NDA-first, Private LLM — nhắc ở mọi trang, không tách trang riêng |

**Lưu ý quan trọng:** hệ thống "Tầng 1 → Tầng 5" của Sunext là **thang đào tạo năng lực** (Foundation → AI in Marketing → Agentics AI Automations → Automation Pipeline → Computer Vision/Custom AI), khác trục với 6 trụ cột Rewired (là 6 *khía cạnh tổ chức* cần tái cấu trúc). Không được gộp hai khung này làm một — bài viết Trụ cột 2 (Talent Bench) sẽ nhắc tới thang Tầng 1→5 như **bằng chứng phương pháp**, không thay thế nó.

## 3. Bằng chứng thật được phép trích dẫn (không bịa số)

| Case study (URL thật) | Ngành | Số liệu thật |
|---|---|---|
| `/case-studies/toi-uu-chi-phi-tuyen-dung-hr-ai/` | Retail, 500 nhân sự | Giảm 40% chi phí tuyển dụng · lọc CV từ 3 ngày còn 2 giờ · tỷ lệ ứng viên vào vòng phỏng vấn +25% |
| `/case-studies/ai-auditor-manufacturing/` | Manufacturing, 800 nhân sự | Độ chính xác phát hiện lỗi 99.8% · tỷ lệ lỗi tới tay khách còn 1.5% · giám sát 24/7 |
| `/case-studies/content-factory-b2b-marketing/` | B2B Services, 200 nhân sự | Sản lượng content x5 (50+ bài/tháng) · organic traffic +60% sau 5 tháng, cùng ngân sách |

Mọi số liệu trong 8 trang nội dung dưới đây **chỉ lấy từ bảng này**. Không phát minh case study mới, không đoán % ROI cho khách hàng tương lai.

## 4. Giọng văn Sam Ovens — dịch sang bối cảnh B2B tiếng Việt

Sam Ovens không viết cho người tiêu dùng — ông viết cho người đang **tự ái vì đã đầu tư sai chỗ**. Áp dụng đúng 6 nguyên tắc sau, không thêm không bớt:

1. **Mở bài bằng một sự thật khó chịu, không mở bằng định nghĩa.** Không viết "AI Transformation là quá trình...". Viết thẳng vào chỗ đau: hầu hết doanh nghiệp đang làm sai, và họ không biết.
2. **Câu ngắn. Đoạn ngắn.** Một câu một dòng khi cần nhấn. Không viết đoạn văn 5 dòng nếu 2 dòng nói đủ.
3. **Xưng "bạn" trực tiếp, giọng người từng ở đó chỉ lại, không giọng công ty PR.** Không "doanh nghiệp Quý khách", dùng "bạn", "công ty bạn", "đội của bạn".
4. **Đóng khung bằng bậc thang / tầng lớp.** "Có 3 loại doanh nghiệp đang làm AI. Bạn là loại nào?" — đúng chất Rewired (6 trụ cột = 6 cửa ải), đúng chất Sam Ovens (phân loại người đọc để họ tự nhận ra vị trí của mình).
5. **Vạch trần lầm tưởng trước khi đưa khung đúng.** Mỗi trụ cột đều có 1 đoạn "cái người ta tưởng" → "cái thật sự đúng".
6. **CTA là bước tiếp theo hợp lý, không phải xin xỏ.** Không "Liên hệ ngay để được tư vấn!!!". Viết như một lời khuyên thẳng: "Nếu bạn đang ở đây, đây là việc nên làm tiếp theo."

**Không dùng:** biệt ngữ marketing rỗng ("giải pháp toàn diện", "đột phá", "cách mạng hóa"), câu bị động dài dòng, giọng nài nỉ, emoji thừa.

## 5. Cấu trúc bộ trang (8 trang nội dung + 1 kế hoạch)

| File | Trang | Slug đề xuất | Vai trò trong phễu |
|---|---|---|---|
| `01_ai-transformation-hub.md` | Hub: "Vì sao 70% chuyển đổi AI thất bại" | `/tu-duy-chuyen-doi-ai/` | Cornerstone — kể toàn bộ câu chuyện 6 trụ cột, link ra 6 trang con |
| `02_tru-cot-1-chien-luoc-so.md` | Trụ cột 1: Chiến lược số do kinh doanh dẫn dắt | `/tu-duy-chuyen-doi-ai/chien-luoc-so/` | Đào sâu, CTA → Chiến lược & lộ trình AI |
| `03_tru-cot-2-nang-luc-doi-ngu.md` | Trụ cột 2: Đội ngũ nhân tài nội bộ | `/tu-duy-chuyen-doi-ai/nang-luc-doi-ngu/` | Đào sâu, CTA → Đào tạo (Tầng 1→5) |
| `04_tru-cot-3-mo-hinh-van-hanh.md` | Trụ cột 3: Mô hình vận hành | `/tu-duy-chuyen-doi-ai/mo-hinh-van-hanh/` | Đào sâu, CTA → Tái cấu trúc quy trình |
| `05_tru-cot-4-nen-tang-cong-nghe.md` | Trụ cột 4: Nền tảng công nghệ | `/tu-duy-chuyen-doi-ai/nen-tang-cong-nghe/` | Đào sâu, CTA → Engineering & Integration |
| `06_tru-cot-5-kien-truc-du-lieu.md` | Trụ cột 5: Kiến trúc dữ liệu doanh nghiệp | `/tu-duy-chuyen-doi-ai/kien-truc-du-lieu/` | Đào sâu, CTA → Data & Operating System |
| `07_tru-cot-6-mo-rong-quy-mo.md` | Trụ cột 6: Mở rộng quy mô & thúc đẩy áp dụng | `/tu-duy-chuyen-doi-ai/mo-rong-quy-mo/` | Đào sâu, CTA → Đo lường, tối ưu & mở rộng |
| `08_do-luong-ai-readiness.md` | Đo lường mức độ sẵn sàng AI | `/danh-gia-san-sang-ai/` (bài viết dẫn nhập, khác với `/ai-maturity-assessment/` là bài test) | Điều hướng trực tiếp vào bài test AI Maturity hiện có |

**Internal linking bắt buộc:** trang hub link tới cả 6 trụ cột + trang readiness; mỗi trang trụ cột link ngược về hub + link chéo sang 1-2 trụ cột liên quan gần nhất + 1 case study thật liên quan + CTA vào đúng anchor dịch vụ thật trong bảng ánh xạ §2.

## 6. Định dạng mỗi file nội dung

Mỗi file `.md` từ 01–08 gồm:
- Front-matter gợi ý (title, meta description tiếng Việt ≤160 ký tự, slug đề xuất) — để dev copy thẳng vào `<title>`/`<meta>`.
- Toàn văn copy trang, viết theo đúng thứ tự section sẽ lên trang (Hero → Myth vs Reality → Nội dung chính → Bằng chứng → CTA), có đánh dấu `[H1]/[H2]/[Sub]` để dev biết cấp heading.
- Không kèm HTML/CSS — đây là content layer, phần dựng giao diện dùng lại design system hiện có của Sunext-Website (không nằm trong phạm vi bộ file này).
