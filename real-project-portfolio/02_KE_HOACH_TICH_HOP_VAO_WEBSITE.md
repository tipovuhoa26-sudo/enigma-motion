# 02 · Kế hoạch chuẩn — Tích hợp dự án thật vào Sunext-Website

Dựa trên dữ liệu đã lọc ở file `01_DU_LIEU_DU_AN_THAT_DA_LOC.md`, đối chiếu với toàn bộ phát hiện ở `site-fix-plan/00-04` (đặc biệt: lỗi bịa số liệu trong `industryData.ts`, lỗi 4-slug-xung-đột cho case study, và khung storytelling Trần Quang). Kế hoạch này **thay dữ liệu bịa bằng dữ liệu thật vừa lọc được**, không phải thêm một lớp nội dung mới song song.

---

## 1. Nguyên tắc điều hành kế hoạch (bắt buộc, không đổi)

1. **Không đăng công khai tên nào thuộc nhóm "Cao" (ngân hàng, bảo hiểm) trước khi có xác nhận bằng văn bản** — theo đúng mục 4, file 01.
2. **Không đăng tên cơ quan nhà nước/lực lượng vũ trang lên website marketing công khai.**
3. **Giữ đúng khung xưng hô** ("đã đào tạo/tư vấn thiết kế" chứ không phải "đã xây dựng và vận hành cho khách hàng") cho mọi dự án thuộc diện minh họa đào tạo.
4. **Không lặp lại lỗi đã tìm thấy trước đó:** không thêm số liệu thị trường không nguồn, không đổi ý nghĩa chỉ số (traffic ≠ lead), không gắn nhầm case sai ngành, không tạo thêm slug case study mới xung đột với slug đã thống nhất.

## 2. Việc đầu tiên, bắt buộc trước mọi việc khác: chốt slug/route case study

File `site-fix-plan/00_TONG_HOP_VA_HANH_DONG.md` mục 2 đã chỉ ra 4 slug xung đột cho cùng 3 case study cũ. Trước khi thêm case study MỚI từ dữ liệu Tier 1 này, phải:
- Chốt route chuẩn: `/case-studies/` (khớp site thật đang chạy) hay `/cases/` (route đã lỡ code trong dự án Next.js).
- Sửa xong 3 case cũ theo route đã chốt.
- Chỉ sau đó mới thêm case mới, để không tạo thêm một lớp xung đột thứ 5.

## 3. Ánh xạ dữ liệu thật vào từng vị trí trên site

### 3.1 Case study đầy đủ mới (ưu tiên theo thứ tự)

Chỉ chọn dự án **Thấp** hoặc **Trung bình** mức nhạy cảm, có số liệu định lượng rõ, theo đúng khung xưng hô (mục 0, file 01):

| Thứ tự | Dự án | Vì sao ưu tiên | Route đề xuất (theo chuẩn đã chốt ở mục 2) |
|---|---|---|---|
| 1 | Vietcap Securities | Số liệu mạnh nhất (-75% thời gian, 2 ngày→3 giờ), đã là triển khai thật không chỉ đào tạo, đã có tiền lệ dùng trong nội dung trụ cột trước đó | `/case-studies/vietcap-ai-multi-agent-nghien-cuu-thi-truong/` |
| 2 | Vinhomes | Thương hiệu lớn, quy mô 500+ người dễ hình dung, có ảnh hiện trường thật | `/case-studies/vinhomes-ai-sales-enablement/` |
| 3 | Dentsu Sports & Creative | Số liệu rõ (-65% thời gian proposal), ngành agency khác biệt, đa dạng hóa danh mục | `/case-studies/dentsu-ai-pitch-deck-automation/` |
| 4 | Phương Trường An Group | Số liệu ấn tượng (+200% video), quy mô vừa, dễ đồng cảm với DN tầm trung | `/case-studies/phuong-truong-an-video-ai-hien-truong/` |
| 5 | Đại học FPT (FPTU) | Case study khác hẳn (giáo dục + sự kiện quy mô 10.000 người), đã có báo chí xác nhận công khai → rủi ro thấp nhất để trích dẫn | `/case-studies/fptu-nang-bac-giang-vien-ai/` |

**Việc cần làm cho mỗi case:** viết theo đúng Cấu Trúc 6 Nhịp + đổi ngôi khách hàng làm người hùng, dùng mẫu đã có sẵn ở `site-fix-plan/04_NANG_CAP_KE_CHUYEN_TRAN_QUANG.md` mục 4 làm khuôn — **không copy nguyên văn mô tả trong docx** (đó là văn phong hồ sơ thẩm định, không phải văn phong web), viết lại thành chuyện kể đúng chuẩn đã lập.

### 3.2 `industryData.ts` — thay số liệu bịa bằng dữ liệu thật này

File `site-fix-plan/03...md` đã yêu cầu gỡ số liệu bịa trong 3 trang ngành hiện có (Bán lẻ, Sản xuất, B2B Services). Dữ liệu Tier 1 mới cho phép:
- Bổ sung Vinhomes/Phương Trường An/Smartland vào bối cảnh trang **Bất động sản mới** (nếu quyết định mở rộng — xem mục 4).
- Bổ sung Dentsu/HTV vào phần "challenges" của trang B2B Services hiện có (thay cho số liệu "chi phí quảng cáo tăng gấp 3 lần" đã bịa) — dùng đúng số thật: "-65% thời gian proposal", "-70% thời gian duyệt ảnh".
- **Không đưa** ngân hàng/bảo hiểm vào bất kỳ trang ngành công khai nào cho đến khi xin phép xong.

### 3.3 Trang Đội ngũ / Về Sunext (`/doi-ngu/`)

Đây là nơi hợp lý nhất, ít rủi ro nhất để dùng trực tiếp phần "3 Năng Lực Cốt Lõi" và số liệu cá nhân của CAIO — vì đây đúng nghĩa là hồ sơ cá nhân, không cần đổi khung xưng hô:
- "10+ năm thực chiến AI & tăng trưởng doanh nghiệp"
- "Đã cấp chứng nhận ứng dụng AI cho hơn 600 giảng viên thuộc mạng lưới Train The Trainer"
- "Quản trị cộng đồng chia sẻ kiến thức AI với hơn 500.000 người theo dõi (2026)"

Đây là bằng chứng uy tín cá nhân mạnh, nên đưa vào bio của CAIO trên trang Đội ngũ đang có sẵn.

### 3.4 Trang Khách hàng & Đối tác (`/khach-hang-doi-tac/`)

Dùng danh sách Tier 2 (mục 2, file 01) theo đúng dạng liệt kê tên trong câu văn, **kèm nguyên văn dòng miễn trừ trách nhiệm đã có sẵn trong tài liệu gốc**:

> *"Tên các tổ chức được nêu nhằm mục đích minh họa mạng lưới học viên đã tham gia đào tạo, không hàm ý quan hệ đối tác hoặc chứng thực thương mại chính thức."*

Không dùng logo trực quan cho tới khi xin phép từng đơn vị.

## 4. Quyết định cần bạn chốt: có mở rộng thêm ngành Bất động sản không?

Dữ liệu Tier 1 hiện đủ mạnh để có một trang ngành thứ 4 (**Bất động sản** — Vinhomes, Smartland, Phương Trường An, Thắng Lợi Group đều có số liệu/quy mô tốt), bên cạnh 3 ngành đã có (Bán lẻ, Sản xuất, B2B Services). Đây là quyết định IA giống các quyết định trước (slug case study, số bài test AI Maturity) — cần bạn xác nhận trước khi coding agent triển khai, vì nó ảnh hưởng cấu trúc menu và nội dung `industryData.ts`.

## 5. Trình tự thực hiện

1. Chốt slug/route case study (mục 2) — chặn trước mọi việc khác.
2. Xin phép bằng văn bản với Vietcombank, BIDV, Prudential, Dai-ichi Life nếu muốn dùng — song song, không chặn các việc khác.
3. Viết 5 case study Tier 1 mức Thấp/Trung bình theo thứ tự ưu tiên ở mục 3.1, dùng khuôn storytelling đã có.
4. Thay số liệu bịa trong `industryData.ts` bằng dữ liệu thật tương ứng (mục 3.2).
5. Cập nhật bio CAIO ở trang Đội ngũ (mục 3.3) — việc dễ nhất, làm trước để có kết quả nhanh.
6. Cập nhật trang Khách hàng & Đối tác với danh sách Tier 2 + dòng miễn trừ trách nhiệm (mục 3.4).
7. Nếu xin phép ngân hàng/bảo hiểm thành công → bổ sung case Vietcombank/BIDV/Dai-ichi Life như một đợt sau, không chờ đợt này.

**Việc chưa làm:** chưa viết case study hoàn chỉnh nào, chưa sửa file code nào — đây là kế hoạch tích hợp, cần bạn xác nhận mục 4 (mở ngành BĐS) trước khi tôi viết nội dung case study thật theo khuôn storytelling.
