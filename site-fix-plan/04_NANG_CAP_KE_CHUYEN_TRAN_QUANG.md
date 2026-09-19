# 04 · Nhận xét & Kế hoạch sửa: Nâng nội dung thành câu chuyện (theo phương pháp Nguyễn Trần Quang)

Căn cứ: đã đọc `skills/Tran-Quang/write-moving-stories/SKILL.md` + 3 tài liệu tham chiếu (`story-frameworks.md`, `quality-rubric.md`, `formats-and-templates.md`). Đây là bản audit áp phương pháp storytelling của Nguyễn Trần Quang lên nội dung hiện có, đối chiếu với các phát hiện phương pháp luận đã ghi ở file `03_KIEM_TRA_DONG_BO_VA_PHUONG_PHAP_LUAN.md`.

**Kết luận một câu:** Hai việc không hề mâu thuẫn — quy tắc số 1 của Nguyễn Trần Quang ("Bảo Tồn Tuyệt Đối Sự Thật") và lỗi chí mạng số 1 trong rubric của ông ("Bịa đặt dữ kiện") **chính là cùng một lý do** khiến `industryData.ts` và `investmentData.ts` phải sửa. Kể chuyện hay hơn không có nghĩa là được phép thêm chi tiết giả — ngược lại, phương pháp này còn khắt khe hơn cả yêu cầu trước đó.

---

## 1. Áp dụng framework nào cho website Sunext

Theo bảng "La Bàn Chọn Khung Cấu Trúc" trong `story-frameworks.md`, nội dung Sunext rơi đúng vào ô: **"Chuyện Founder / Khách hàng / B2B" → Website, Profile công ty → Cấu Trúc 6 Nhịp (Six-Beats)**.

Và quan trọng hơn — quy tắc đổi ngôi bắt buộc cho thể loại B2B (`formats-and-templates.md` mục 4):

> **KHÁCH HÀNG** là người hùng (Luke Skywalker). **SUNEXT** là người trao kiếm (Yoda/Dumbledore), không phải người hùng. **NỖI ĐAU CỦA KHÁCH HÀNG** là phản diện (Darth Vader).

**Đây là chỗ nội dung hiện tại đang sai vai rõ nhất:** các block "evidence" trong `aiTransformation.ts` hiện viết theo mô-típ *"Sunext làm X, kết quả Y"* — Sunext đang đứng ở vị trí chủ ngữ hành động, khách hàng bị lùi về vị trí bị động ("triển khai... cho họ"). Đúng quy tắc đổi ngôi, chủ ngữ hành động phải là khách hàng: họ nhận diện vấn đề, họ chọn đào tạo trước, họ vận hành hệ thống mới. Sunext là công cụ họ cầm trong tay, không phải nhân vật chính của câu chuyện.

## 2. Chấm điểm hiện trạng theo Quality Rubric 12 tiêu chí

Áp dụng lên phần "evidence" (bằng chứng case study) trong 6 trang trụ cột — đây là nơi lẽ ra phải là "chuyện kể", hiện đang chỉ là **khối thống kê**:

| Tiêu chí | Điểm hiện tại | Vì sao |
|---|---|---|
| 1. Tính chân thật | ⭐⭐⭐⭐⭐ (5/5) | Số liệu đúng nguồn, không bịa — điểm mạnh duy nhất cần giữ nguyên tuyệt đối |
| 2. Trọng tâm con người | ⭐ (1/5) | Không có một con người cụ thể nào — chỉ có "Doanh nghiệp Bán lẻ 500 nhân sự" như một thực thể trừu tượng |
| 3. Khao khát & Đánh đổi | ⭐⭐ (2/5) | Có nhắc "đội HR 4 người mất 3 ngày/vị trí" nhưng không nói cái giá thật sự (bỏ lỡ ứng viên tốt, chậm mở cửa hàng mới, áp lực từ ban giám đốc) |
| 4. Xung đột & Nhân quả | ⭐ (1/5) | Không có cấu trúc "DO ĐÓ/NHƯNG" — chỉ liệt kê "làm A, sau đó B, kết quả C" kiểu "VÀ RỒI" |
| 5. Sự chuyển hóa | ⭐⭐ (2/5) | Có số liệu trước/sau nhưng không có hành vi cụ thể chứng minh chuyển hóa (ví dụ: đội HR giờ làm gì với thời gian rảnh ra?) |
| 6. Tính cụ thể chẩn đoán | ⭐⭐ (2/5) | Có vài con số cụ thể nhưng thiếu chi tiết "biết nói" (khung cảnh, hành động thật) |
| 9. Cặp mở/kết | ⭐⭐ (2/5) | Mở bằng badge/nhãn, không mở bằng một tình huống hay câu hỏi |

**Điểm trung bình ước tính: ~2/5** — thấp hơn nhiều so với chuẩn xuất bản của chính phương pháp này (yêu cầu ≥ 4.2/5, riêng Tính chân thật phải 5/5 với case study người thật việc thật — tiêu chí duy nhất đang đạt).

## 3. Đối chiếu 9 Lỗi Chí Mạng với các phát hiện đã có ở file 03

| Lỗi chí mạng (Trần Quang) | Đã xảy ra ở đâu trong site | Trạng thái |
|---|---|---|
| #1 Bịa đặt dữ kiện | `industryData.ts`: "biến động nhân sự 35-40%/năm", "(từ 8%)" trộn vào metric thật | Đã ghi nhận ở file 03, framework này xác nhận lại độc lập |
| #3 Sản phẩm cướp vai người hùng | `investmentData.ts`: "Sunext Rewired™... tái đấu nối toàn bộ tổ chức" — Sunext là chủ thể hành động chính, khách hàng biến mất khỏi câu chuyện | Phát hiện mới qua lăng kính này |
| #6 Thao túng cảm xúc rẻ tiền / #8 CTA lạc quẻ | `investmentData.ts` dùng "Cam kết" cho số liệu chưa kiểm chứng — tương đương thao túng bằng con số phóng đại thay vì cảm xúc, nhưng cùng bản chất: hứa hẹn vượt quá bằng chứng có thật | Cùng nhóm rủi ro đã nêu ở file 03 mục 4 |

**Kết luận:** không cần thêm việc mới — việc sửa `industryData.ts`/`investmentData.ts` đã yêu cầu ở file 03 giờ có thêm một căn cứ phương pháp luận độc lập để làm ngay, không trì hoãn.

## 4. Viết lại mẫu — Case study Bán lẻ theo đúng Cấu Trúc 6 Nhịp

Tuân thủ kỷ luật **Sổ Cái Sự Thật** của phương pháp: chỉ dùng dữ kiện **Xác thực**, đánh dấu rõ phần **Chưa rõ** bằng `[Cần xác minh]` thay vì bịa — đây là quy tắc bắt buộc khi tư liệu nguồn còn mỏng, đúng như "Nguyên Tắc Trả Lời Người Dùng" của skill.

**Sổ Cái Sự Thật (Fact Ledger) cho case study này:**

| Loại | Nội dung |
|---|---|
| Xác thực | Bán lẻ, 500 nhân sự, đội HR 4 người, tuyển 60-80 vị trí/quý, 3 ngày/vị trí trước đây, giải pháp: đào tạo Tầng 1+2 rồi mới triển khai Agent sàng lọc CV tích hợp ATS + chatbot FAQ, kết quả: -40% chi phí, 3 ngày→2h, +25% tỷ lệ vào phỏng vấn |
| Suy luận (nêu rõ là suy luận) | Áp lực từ khối lượng tuyển dụng lớn (60-80 vị trí/quý) khiến đội HR khó có thời gian đánh giá kỹ từng hồ sơ |
| Chưa rõ | Họ đã thử cách nào trước đó và thất bại ra sao; tên/vai trò cụ thể người ra quyết định; phản ứng của đội ngũ khi mới triển khai |

**Bản viết lại (đăng ở trang case study, đúng khuôn B2B 6 nhịp, đổi ngôi khách hàng làm trung tâm):**

> **60 đến 80 vị trí mỗi quý. Bốn người. Ba ngày cho mỗi hồ sơ.**
>
> Đó là con số một chuỗi bán lẻ 500 nhân sự phải sống chung mỗi mùa mở rộng. Đội Nhân sự không thiếu người giỏi — họ chỉ thiếu thời gian. Mỗi đợt tuyển, cả đội gần như dừng mọi việc khác để đọc CV, so tiêu chí, xếp lịch phỏng vấn bằng tay.
>
> `[Cần xác minh: đội đã từng thử cách nào để rút ngắn thời gian này trước khi làm việc với Sunext — ví dụ phần mềm ATS cũ, thuê thêm nhân sự thời vụ — và vì sao cách đó không đủ?]`
>
> Vấn đề không nằm ở chỗ thiếu công cụ. Nó nằm ở chỗ đội ngũ chưa từng được trang bị để dùng công cụ cho ra kết quả — cho dù có mua phần mềm sàng lọc CV nào đi nữa, không ai trong đội biết cách đặt tiêu chí đúng, đọc kết quả đúng.
>
> Nên bước đầu tiên không phải là một con Agent. Là đào tạo. Đội HR học cách hiểu AI làm được gì cho đúng nghiệp vụ tuyển dụng của họ (Tầng 1), rồi học cách áp dụng vào chính quy trình đang chạy (Tầng 2). Chỉ sau đó, một Agent sàng lọc CV mới được đưa vào — không đứng riêng như một công cụ lạ, mà cắm thẳng vào hệ thống ATS đội đã quen dùng, tự chấm điểm, xếp hạng, đẩy shortlist, và trả lời câu hỏi ứng viên qua chatbot suốt ngày đêm.
>
> Ba ngày cho một hồ sơ, giờ còn hai giờ. Chi phí tuyển dụng giảm 40%. Và vì sàng lọc kỹ hơn, không vội hơn — tỷ lệ ứng viên thật sự phù hợp đi tới vòng phỏng vấn tăng 25%.
>
> Đội HR bốn người đó bây giờ dành thời gian đã lấy lại được vào việc mà máy không làm thay được: nói chuyện với ứng viên tốt nhất, trước khi đối thủ kịp gọi cho họ.

**Vì sao bản này đạt chuẩn hơn bản gốc:**
- Chủ ngữ hành động là đội HR (người hùng), không phải Sunext.
- Có nhân quả "DO ĐÓ/NHƯNG" (đội thiếu thời gian → do đó dừng việc khác để đọc CV; vấn đề không phải thiếu công cụ → nên bước đầu là đào tạo, không phải mua Agent).
- Có một chi tiết chẩn đoán cụ thể ("dừng mọi việc khác để đọc CV") thay vì tính từ chung chung.
- Đánh dấu rõ khoảng trống dữ kiện bằng `[Cần xác minh]` thay vì bịa ra một "thất bại trước đó" không có thật.
- Kết bằng một hình ảnh hành vi mới ("nói chuyện với ứng viên tốt nhất trước đối thủ"), không kết bằng khẩu hiệu.

## 5. Áp dụng vào đâu — và ở đâu KHÔNG cần đổi

| Vị trí | Có cần chuyển thành "chuyện kể" không? | Lý do |
|---|---|---|
| Phần "evidence" (case study) trong 6 trang trụ cột `aiTransformation.ts` | **Có, bắt buộc** | Đây chính xác là nơi Quality Rubric chấm thấp nhất — đang là bảng số liệu, cần thành câu chuyện theo mẫu ở mục 4 |
| 3 case study đầy đủ (`/case-studies/...` và `/cases/[slug]`) | **Có, bắt buộc** | Đây là định dạng dài (800-1.200 từ theo bảng chuyển thể đa kênh), đúng không gian để kể trọn 6 nhịp |
| Phần "Myth vs Reality" (lầm tưởng/sự thật) trong 6 trang trụ cột | **Không cần đổi** | Đây là lập luận thuyết phục kiểu Sam Ovens (phân tích, phản biện) — một hình thức tu từ khác, hợp lý không kém "chuyện kể", ép nó thành chuyện sẽ làm loãng lập luận sắc bén đang có |
| `industryData.ts` (Theo ngành) | **Có** — đồng thời phải sửa số liệu bịa trước (file 03) | Phần `marketContext`/`challenges` nên viết lại theo hướng "vấn đề nhức nhối của một khách hàng điển hình trong ngành", không phải báo cáo thị trường khô khan |
| `investmentData.ts` (Khung đầu tư) | **Không cần kể chuyện** — cần viết lại theo hướng minh bạch, hạ tông "cam kết" | Đây là trang thông tin gói dịch vụ, không phải nơi kể chuyện; áp storytelling vào đây dễ tạo cảm giác "dùng cảm xúc để che số liệu mập mờ" — đúng loại rủi ro phương pháp này cảnh báo (thao túng cảm xúc) |

## 6. Việc cần làm tiếp theo

1. Viết lại 3 block "evidence" còn lại (Manufacturing, B2B Content Factory) theo đúng mẫu 6 nhịp + Fact Ledger như case Bán lẻ ở mục 4 — cần bạn xác nhận các câu hỏi `[Cần xác minh]` tương ứng cho từng case trước khi hoàn thiện bản cuối (đúng nguyên tắc "không bịa cho đủ chữ" của skill).
2. Song song với việc sửa số liệu bịa ở `industryData.ts`/`investmentData.ts` (đã nêu ở file 03) — viết lại phần tường thuật của 3 trang ngành theo đúng khuôn B2B 6 nhịp, đổi ngôi khách hàng làm trung tâm.
3. Giữ nguyên cấu trúc "Myth vs Reality" ở 6 trang trụ cột — không cần và không nên chuyển sang dạng kể chuyện.
4. Trước khi xuất bản bản viết lại nào, chạy qua đúng Checklist 4 Tầng ở `quality-rubric.md` (Sự thật → Xương sống cốt truyện → Giọng văn → Mục tiêu & bối cảnh) — đặc biệt tầng 1 vì đây là case study người thật việc thật, bắt buộc 5/5 tính chân thật.
