# 06 · Đánh giá toàn diện sau đợt tích hợp logo & giảng viên (2 commit mới nhất)

Căn cứ: `git log` cho thấy 2 commit mới kể từ lần audit trước (`e35daaf`, `a15a5cb`), thêm 179 file ảnh vào `public/logos/` và 2 file nội dung mới (`facultyData.ts`, `logoData.ts`). Đã kiểm tra trực tiếp — mở ảnh thật, đọc metadata, grep code — không suy đoán từ tên file.

## Kết luận thẳng: Đạt phần lớn, nhưng có 1 lỗ hổng governance quan trọng cần dừng lại trước khi công khai

## 1. Điều đã làm tốt, xác nhận bằng bằng chứng trực tiếp

| Hạng mục | Xác nhận |
|---|---|
| Số liệu bịa (`industryData.ts`) | Grep lại toàn bộ chuỗi bịa cũ → sạch, không còn |
| Cam kết quá mức / ký hiệu ™ | Sạch |
| Slug/route case study thống nhất | `CANONICAL_CASE_STUDIES` là nguồn duy nhất, slug cũ giữ làm alias — đúng thiết kế |
| Nội dung case study được viết dày hơn, cụ thể hơn | Đã đọc trực tiếp: đoạn "challenge" của case Vietcap dài 489 ký tự, có chi tiết chẩn đoán cụ thể ("60-120 trang mỗi bản", "2 ngày làm việc thủ công") — đúng hướng storytelling, tiến bộ rõ so với lần kiểm tra trước |
| PII trong `facultyData.ts` | Grep số điện thoại/email → không rò rỉ, lọc sạch đúng yêu cầu |
| Phần lớn ảnh mới là ảnh thật, không phải AI tạo | Đã mở trực tiếp 6 ảnh mẫu (BIDV, Prudential, NTTU, Vinhomes, trainer_p1_img0...) — đều là ảnh sự kiện thật, chữ/logo trong ảnh rõ ràng, mạch lạc, không có dấu hiệu AI tạo |
| Kỹ thuật lưới logo (grayscale/progressive disclosure) | Đã đọc `logoData.ts` — cấu trúc đúng như kế hoạch: phân theo `industryId`, có `tier`, có link case study liên quan |

## 2. Phát hiện nghiêm trọng: 1 ảnh xác nhận là bịa, có bằng chứng trực quan rõ ràng

**`public/logos/vietcombank_ai_training.jpg`** — mở trực tiếp: màn hình trong ảnh ghi rõ chữ **"TECHCOMBANK"** (một ngân hàng khác, đối thủ cạnh tranh trực tiếp của Vietcombank), biển hiệu trên tường ghi **"VIETNAMESE BANK"** (chữ vô nghĩa, không ngân hàng thật nào dùng). Đây là bằng chứng dứt khoát: ảnh do AI tạo, tự mâu thuẫn thương hiệu ngay trong chính nó.

**Tin tốt:** đã grep toàn bộ `src/` — file này **chưa được gắn vào bất kỳ trang nào** (không xuất hiện trong `logoData.ts`, entry Vietcombank thật đang dùng đúng `logoUrl: '/logos/vietcombank.png'`, một logo Vietcombank chính hãng, đã mở kiểm tra và xác nhận đúng). File này là rác còn sót lại từ quá trình tạo ảnh, chưa gây hại, nhưng **phải xóa ngay** để không ai vô tình gắn nhầm vào code sau này.

## 3. Không đủ bằng chứng để kết luận — cần xác nhận trực tiếp, không suy đoán thêm

Hai ảnh chân dung `vinh_hung_portrait.png` (CAIO) và `tung_chi_portrait.png` (CSO) đang hiển thị thật trên trang `/doi-ngu/`. Tôi đã thử dùng dấu hiệu metadata (DPI) để suy đoán nguồn gốc — **phép suy đoán này không đáng tin cậy** (cùng một giá trị DPI xuất hiện ở cả ảnh đã xác nhận thật lẫn ảnh nghi ngờ), nên tôi rút lại giả thuyết ban đầu. Nhìn bằng mắt, hai ảnh đều là chân dung công sở hợp lý, không có dấu hiệu bất thường rõ ràng như trường hợp Vietcombank.

**Không khẳng định thật, cũng không khẳng định giả — đây phải là việc chính hai người trong ảnh xác nhận trực tiếp** (ảnh có phải chụp thật của họ, có được phép dùng công khai không) trước khi trang Đội ngũ được coi là sẵn sàng công bố. Đây là nguyên tắc đã áp dụng xuyên suốt: không suy đoán khi không có bằng chứng chắc chắn.

## 4. Lỗ hổng governance quan trọng nhất: logo nhạy cảm đã được gắn vào code mà CHƯA qua bước xin phép

Kế hoạch trước (`faculty-and-logos-plan/02`) chia rõ 3 lô theo mức nhạy cảm, trong đó Lô 2 (**Vietcombank, BIDV, Prudential, Dai-ichi Life, Vietcap Securities**) yêu cầu **xin phép bằng văn bản trước khi dùng LOGO** (không chỉ tên chữ). Đã grep `logoData.ts` và xác nhận: **BIDV, Prudential, và cả HOSE (Sở Giao dịch Chứng khoán TP.HCM) đã được gắn logo thật vào code**, sẵn sàng hiển thị công khai — chưa có cơ chế nào trong code đánh dấu "chờ xin phép" hay ẩn các entry này.

Đây không phải lỗi kỹ thuật — phần kỹ thuật (grayscale, phân nhóm ngành, progressive disclosure) làm đúng và đẹp. Đây là **khoảng trống giữa kế hoạch quản trị và việc thực thi**: coding agent đã hiện thực hóa toàn bộ 58 tổ chức đồng loạt, bỏ qua bước phân lô theo mức độ cần xin phép đã đề ra.

## 5. Việc cần làm trước khi công khai (theo mức ưu tiên)

| # | Việc | Mức độ |
|---|---|---|
| 1 | Xóa file `public/logos/vietcombank_ai_training.jpg` (rác, chưa dùng nhưng nên dọn) | Thấp rủi ro, dễ làm ngay |
| 2 | **Tạm ẩn/gỡ logo BIDV, Prudential, Vietcombank, Dai-ichi Life, Vietcap Securities, HOSE khỏi `logoData.ts`** cho tới khi có xác nhận bằng văn bản từ từng tổ chức — quay lại dạng chỉ nêu tên chữ (như bản trước khi có logo) cho các entry này | **Cao — chặn trước khi công khai** |
| 3 | Xác nhận với Ông Hưng và Bà Tùng Chi: ảnh chân dung đang dùng có đúng là ảnh thật của họ và có đồng ý công khai không | **Cao — chặn trước khi công khai trang Đội ngũ** |
| 4 | Tiếp tục mở rộng đoạn văn "challenge/solution" theo mẫu 6 nhịp cho các case study còn lại (đã có tiến bộ ở case Vietcap, cần làm đều cho 4 case còn lại) | Trung bình, không chặn công khai, chỉ là hoàn thiện chất lượng |

## 6. Trả lời câu hỏi "đã chuẩn phương pháp luận và nội dung đồng bộ chưa"

**Về phương pháp luận nội dung (số liệu, cam kết, framework):** Đạt.
**Về đồng bộ kỹ thuật (slug, route, quiz):** Đạt.
**Về storytelling:** Đang tiến bộ đúng hướng, chưa hoàn thiện 100% nhưng không chặn công khai.
**Về governance hình ảnh/logo:** **Chưa đạt** — có 1 ảnh bịa (may mắn chưa dùng) và một lỗ hổng quy trình thật (logo nhạy cảm bị gắn vào code mà chưa qua bước xin phép đã tự đặt ra trước đó). Đây là hạng mục duy nhất tôi khuyến nghị **dừng lại xử lý xong trước khi bấm nút công khai**, các hạng mục còn lại đều đã ở mức an toàn để tiếp tục.
