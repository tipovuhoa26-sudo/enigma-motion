# 03 · Kiểm tra đồng bộ & Chuẩn phương pháp luận

Phạm vi: toàn bộ nội dung "Tư duy chuyển đổi AI" trong codebase hiện tại — `src/content/aiTransformation.ts`, `src/content/industryData.ts`, `src/content/investmentData.ts`, và `src/app/danh-gia-san-sang-ai/page.tsx`. Đã đọc trực tiếp, không suy đoán.

**Kết luận một câu:** Văn phong Sam Ovens giữ tốt ở nội dung được chuyển từ markdown gốc. Phương pháp luận thì **không còn đồng bộ** — có 3 hệ thống phân tầng khác nhau đang tồn tại song song, và hai file nội dung mới (`industryData.ts`, `investmentData.ts`) chứa số liệu bịa và cam kết hiệu suất chưa từng được phê duyệt.

---

## 1. Văn phong Sam Ovens — đánh giá riêng từng phần

| Nguồn | Đánh giá | Bằng chứng |
|---|---|---|
| `aiTransformation.ts` (6 trụ cột) | **Đạt** | Giữ nguyên gần như 100% câu chữ từ `ai-transformation-content/02-07`: mở bài gây sốc ("Bạn mua gói ChatGPT Team cho 50 người... Bạn vừa trả tiền cho 48 tài khoản không ai đụng tới"), cấu trúc lầm tưởng→sự thật, câu ngắn, xưng "bạn" trực tiếp |
| `danh-gia-san-sang-ai/page.tsx` (phần văn bản, không tính UI quiz) | **Đạt** | "Hầu hết doanh nghiệp làm ngược...", "Không doanh nghiệp nào trong số đó 'may mắn'. Họ chỉ đo trước khi làm." — đúng nhịp câu ngắn, đóng khung dứt khoát của Sam Ovens |
| `industryData.ts` | **Không đạt** | Giọng văn báo cáo tư vấn thông thường ("Ngành bán lẻ Việt Nam đang đối mặt với chi phí mặt bằng tăng cao..."), liệt kê số liệu thị trường khô khan, không có cấu trúc lầm tưởng/sự thật, không có câu mở bài gây khó chịu — đây là văn phong McKinsey-báo-cáo, không phải Sam Ovens |
| `investmentData.ts` | **Không đạt** | Ngôn ngữ bán hàng doanh nghiệp chuẩn mực ("Toàn Diện Khung Rewired", "Chuyển giao 100% mã nguồn và quyền sở hữu trí tuệ") — đọc như bảng báo giá của một công ty tư vấn lớn, không phải giọng "nói thẳng sự thật khó nghe" đã yêu cầu |

**Nguyên nhân:** hai trang mới (Theo ngành, Khung đầu tư) được tạo ra **sau** bộ nội dung gốc, không nằm trong phạm vi 8 file tôi đã viết — coding agent tự soạn nội dung mới mà không có tài liệu voice-guide nào để bám theo, nên tự động trôi về giọng văn "an toàn" mặc định của một trang tư vấn doanh nghiệp thông thường.

## 2. Phương pháp luận — phát hiện nghiêm trọng nhất: 3 hệ thống phân tầng xung đột

| Hệ thống | Ở đâu | Cấu trúc |
|---|---|---|
| A. Bài test AI Maturity thật, đang chạy trên site sản xuất | `Sunext-Website/ai-maturity-assessment/` | 6 trục: Chiến lược & tầm nhìn · Dữ liệu & hệ thống công nghệ · Quy trình & vận hành · Con người & năng lực · Bảo mật & governance · Quản trị thay đổi & mở rộng |
| B. Bài test mới tự tạo trong codebase này | `danh-gia-san-sang-ai/page.tsx` + `ASSESSMENT_QUESTIONS` | 6 câu hỏi tách khác: gộp "Bảo mật & governance" với "Quản trị thay đổi & mở rộng" thành 1 câu (q6), tách "Dữ liệu & hệ thống công nghệ" thành 2 câu riêng (q4 "Nền tảng công nghệ", q5 "Kiến trúc dữ liệu") |
| C. Nhãn tầng trong chính hệ thống B | Mỗi câu hỏi dùng nhãn **"Tầng 1-4"** cho từng lựa chọn, nhưng kết quả tổng lại dùng nhãn **"Giai đoạn 1-4"** khác tên (Khởi Phát/Thử Nghiệm/Chuẩn Hóa/Tự Chủ) | Hai hệ thống đặt tên tầng khác nhau tồn tại trong cùng một trang, cùng một lượt làm bài |

**Hệ quả:** `08_do-luong-ai-readiness.md` (tài liệu tôi viết) quy định rõ trang này là **"trang dẫn nhập, điều hướng vào bài test có sẵn tại `/ai-maturity-assessment/`, không thay thế bài test"**. Thực tế đã xây một bài test thứ hai, độc lập, với rubric khác — đúng kiểu lỗi "hai thương hiệu dán chồng" đã phát hiện ở lần kiểm tra trước, giờ lặp lại ở cấp độ phương pháp luận thay vì cấp độ thương hiệu.

**Thêm một điểm cần cân nhắc pháp lý:** trang B tự gắn nhãn "Chuẩn khung McKinsey Rewired" ngay trên badge đầu trang. Đây là tự nhận "đạt chuẩn" một framework độc quyền của một hãng tư vấn khác mà không có xác nhận/hợp tác chính thức — rủi ro tương tự việc dùng nhãn "SOC2 Type II" đã nêu ở file 01.

## 3. Số liệu bịa trong `industryData.ts` — nghiêm trọng, cần gỡ ngay

Không nằm trong bất kỳ tài liệu nghiên cứu nào tôi đã viết. Toàn bộ các con số dưới đây **không có nguồn**, không khớp 3 case study thật:

| Số liệu bịa | Vị trí |
|---|---|
| "biến động nhân sự thời vụ lên đến 35-40%/năm" | Ngành Bán lẻ, `marketContext` |
| "tốn 30-40% ngân sách cho các kênh đăng tuyển" | Ngành Bán lẻ, `challenges[0].impact` |
| "Tồn kho đọng vốn 15-20%" | Ngành Bán lẻ, `challenges[1].impact` |
| "Tỷ lệ chuyển đổi đơn hàng trực tuyến giảm 25%" | Ngành Bán lẻ, `challenges[2].impact` — **đáng chú ý: trùng con số "25%" với chỉ số thật (tỷ lệ ứng viên vào phỏng vấn tăng 25%) nhưng gán cho một bối cảnh hoàn toàn khác** — dấu hiệu số thật bị tái sử dụng sai ngữ cảnh |
| "Tỷ lệ lỗi lọt tới tay khách hàng (**từ 8%**)" | Ngành Sản xuất, `centralCaseStudy.metrics[1]` — **con số nền "8%" này chưa từng xuất hiện trong case study thật đã trích xuất** (case study thật chỉ có 99.8% và 1.5%, không có mốc "trước" là 8%) — số bịa bị trộn thẳng vào một metric có số thật, khó phát hiện nhất trong tất cả các lỗi đã tìm thấy |
| "Chi phí bảo hành... tăng 12-18%", "Lãng phí 150-200 giờ máy/năm" | Ngành Sản xuất, `challenges` |
| "chi phí chạy quảng cáo B2B tăng gấp 3 lần", "mất 40% thời gian chỉ để định dạng tài liệu", "nhân viên mới mất 6 tháng để hòa nhập" | Ngành B2B Services, `challenges` |

**`caseUrl` bị hỏng:** cả 3 ngành trỏ tới `/cases/enterprise-rag-data-mesh`, `/cases/autonomous-agentic-pipeline`, `/cases/multimodal-vision-system` — ba slug này **không tồn tại** trong `CASES_DATA` (`src/content/data.ts`, vốn cũng đang là dữ liệu giả) lẫn trên site Sunext-Website thật (`/case-studies/toi-uu-chi-phi-tuyen-dung-hr-ai/` mới là URL đúng). Bấm vào các nút "Xem case study" trên 3 trang ngành hiện tại sẽ dẫn tới trang lỗi.

## 4. Cam kết hiệu suất chưa được phê duyệt trong `investmentData.ts` — rủi ro cao nhất trong toàn bộ đợt kiểm tra

Đây không còn là vấn đề văn phong hay đồng bộ — đây là **rủi ro kinh doanh/pháp lý thật**, vì các con số được trình bày kèm chữ "**Cam kết**" (không phải "ước tính" hay "tham khảo"):

| Cam kết được nêu | Vị trí | Vấn đề |
|---|---|---|
| "Giảm ≥ 60% thời gian xử lý thủ công cho use case mục tiêu" | Gói 1, `measurableOutcomes` | Case study thật cho một use case cụ thể (lọc CV) đạt mức giảm ~97% thời gian (3 ngày → 2 giờ) — con số "≥60%" là một ngưỡng cam kết chung chung áp cho **bất kỳ** use case pilot nào, không có cơ sở |
| "Tăng gấp 2.5x - 4x năng suất tổng thể của phòng ban" | Gói 2 | Case study thật chỉ chứng minh x5 cho MỘT chức năng hẹp (sản xuất content), không phải "năng suất tổng thể phòng ban" |
| "Tiết kiệm 30% - 40% chi phí vận hành biến đổi toàn doanh nghiệp" | Gói 3 | Không có case study nào ở quy mô toàn doanh nghiệp trong 3 case thật đã có — con số này không có cơ sở nào |
| "Hoàn vốn đầu tư (Payback Period) dự kiến trong 2-3 tháng" | Gói 1 | Cam kết tài chính cụ thể, không có mô hình tính toán nào đi kèm |
| "Sunext Rewired™" | Gói 3, `subtitle` | Dùng ký hiệu ™ (trademark) — ngụ ý đã đăng ký bảo hộ thương hiệu, cần xác nhận đã đăng ký thật chưa trước khi publish, nếu chưa đây là tuyên bố sai |
| "Chuyển giao 100% mã nguồn và quyền sở hữu trí tuệ hệ thống" | Gói 3 | Cam kết điều khoản hợp đồng cụ thể, hiển thị công khai trên trang marketing mà không có hợp đồng nào ràng buộc kèm theo |

Đã kiểm tra `khung-dau-tu/page.tsx`: có đúng **một dòng chú thích nhỏ** ở cuối phần tính toán ("Số liệu ước tính dựa trên dữ liệu trung bình ngành...") — nhưng đi kèm với đó là tiêu đề mục lớn ngay phía trên ghi "**Cam kết kết quả đo được**" và "**Nguyên Tắc Cam Kết Tài Chính**". Một chú thích nhỏ không đủ để trung hòa nhiều tiêu đề lớn dùng từ "cam kết" — nếu một khách hàng in trang này ra làm bằng chứng khi Sunext không đạt được đúng con số đã nêu, chú thích nhỏ đó khó bảo vệ được vị thế của công ty.

## 5. Kết luận & việc cần làm ngay

| # | Việc cần làm | Mức độ |
|---|---|---|
| 1 | **Gỡ hoặc viết lại toàn bộ số liệu trong `industryData.ts`** — chỉ giữ số liệu có nguồn thật (3 case study), xóa mọi con số thị trường/ngành không trích dẫn được nguồn | Khẩn cấp |
| 2 | **Đổi mọi cam kết hiệu suất cụ thể trong `investmentData.ts` thành ngôn ngữ định hướng, không cam kết** — ví dụ "hướng tới giảm thời gian xử lý thủ công" thay vì "Giảm ≥ 60%"; bỏ Payback Period cụ thể; xác nhận hoặc gỡ ký hiệu ™ | Khẩn cấp — đây là rủi ro kinh doanh, không chỉ rủi ro thẩm mỹ |
| 3 | **Sửa toàn bộ `caseUrl` trong `industryData.ts`** trỏ đúng về 3 URL case study thật | Cao |
| 4 | **Quyết định giữ MỘT bài test AI Maturity duy nhất** — hoặc xóa quiz mới ở `danh-gia-san-sang-ai` và biến trang này thành bài dẫn nhập điều hướng sang `/ai-maturity-assessment/` đúng như kế hoạch gốc, hoặc nếu giữ quiz mới thì phải thay thế/hợp nhất với quiz cũ trên Sunext-Website thật — không được để hai bài test độc lập cùng tồn tại | Cao |
| 5 | **Bỏ nhãn "Chuẩn khung McKinsey Rewired"** trên trang đo lường, thay bằng cách diễn đạt không ngụ ý được McKinsey xác nhận (đúng khuyến nghị đã có ở `sunext-website-upgrade-plan/01...md` mục 3, việc này vẫn chưa được thực hiện) | Trung bình |
| 6 | **Viết lại `industryData.ts` theo giọng văn Sam Ovens** — dùng đúng cấu trúc mở bài gây khó chịu → lầm tưởng → sự thật đã áp dụng nhất quán ở 6 trang trụ cột, thay vì giọng báo cáo thị trường hiện tại | Trung bình |

**Việc chưa làm:** tôi chưa sửa trực tiếp file nào — đây thuần là kết quả kiểm tra, cần bạn xác nhận hướng xử lý (đặc biệt mục 4, vì nó là quyết định sản phẩm) trước khi tôi hoặc coding agent chỉnh sửa.
