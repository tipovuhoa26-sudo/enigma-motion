# 00 · Tổng hợp nhận xét & hành động — Kiểm tra toàn bộ

File này tổng hợp toàn bộ đợt kiểm tra (kỹ thuật, đồng bộ nội dung, phương pháp luận, văn phong) thành một bản nhận xét + danh sách việc cần làm duy nhất. Chi tiết từng phần nằm ở file 01–04 cùng thư mục.

**Trả lời thẳng câu hỏi đã đặt ra:** kỹ thuật (build/motion) đạt. Nội dung: **vẫn chưa chuẩn phương pháp luận**, và vừa phát hiện thêm một lỗi đồng bộ mới trong lúc kiểm tra lần này — 3 case study thật hiện có **4 hệ thống slug khác nhau, xung đột nhau**.

---

## 1. Kỹ thuật — Đạt

Đã chạy `tsc --noEmit`, `next build`, `eslint` trực tiếp trên toàn bộ `src/`:
- **0 lỗi TypeScript, build production thành công.**
- ESLint: 26 warning, toàn bộ là biến/import không dùng tới (dọn dẹp, không ảnh hưởng chức năng) và 1 cảnh báo `react-hooks/exhaustive-deps` ở `SmoothScrollProvider.tsx` (rủi ro thấp).
- **Không có bug chức năng nghiêm trọng nào ở tầng kỹ thuật thuần túy.**

## 2. Phát hiện mới trong đợt kiểm tra này: 4 hệ thống slug xung đột cho cùng 3 case study

Khi đọc phần vừa được thêm vào `src/content/data.ts` (`CASE_STUDIES_DETAILS`, dòng 183–286) — dữ liệu này lẽ ra phải là bản case study "chuẩn, đã kiểm chứng" vì được link trực tiếp từ cả 6 trang trụ cột lẫn 3 trang ngành — phát hiện:

| Nguồn | Slug case Manufacturing | Slug case B2B |
|---|---|---|
| Sunext-Website thật (live) | `ai-auditor-manufacturing` | `content-factory-b2b-marketing` |
| `aiTransformation.ts` (`caseStudyUrl`, trỏ ra `/case-studies/...`) | `ai-auditor-manufacturing` ✅ khớp thật | `content-factory-b2b-marketing` ✅ khớp thật |
| `industryData.ts` (`caseUrl`, trỏ ra `/cases/...`) | `autonomous-agentic-pipeline` ❌ bịa, không tồn tại | `multimodal-vision-system` ❌ bịa |
| `CASE_STUDIES_DETAILS` mới (`/cases/[slug]` nội bộ) | `ai-vision-kiem-dinh-san-xuat` ❌ khác cả hai trên | `content-factory-b2b-knowledge` ❌ khác cả hai trên |

**Bốn cái tên cho cùng một case study sản xuất.** Đường link từ trang ngành (`industryData.ts`) và đường link từ 6 trang trụ cột (`aiTransformation.ts`) trỏ tới hai nơi khác nhau, không nơi nào khớp với route nội bộ thật của trang `/cases/[slug]` trong chính codebase này. Bấm bất kỳ nút "Xem case study" nào từ trang Ngành sẽ ra trang lỗi.

**Thêm vào đó, `CASE_STUDIES_DETAILS` chứa chi tiết bịa mới, cùng loại đã cảnh báo ở file 03:**
- Case Bán lẻ: thêm "45 điểm bán", "hơn 800 CV đổ về", "ứng viên tốt bỏ sang đối thủ" — không có trong dữ kiện xác thực (bản gốc chỉ có "60-80 vị trí/quý").
- Case B2B: đổi ý nghĩa chỉ số thật — "+60% organic traffic" (lưu lượng truy cập) bị viết lại thành "+60% Tăng trưởng organic **lead**" (khách hàng tiềm năng) — hai chỉ số khác bản chất, không được phép đánh tráo.

**Việc cần quyết định:** chọn MỘT slug chuẩn cho mỗi case study và MỘT route prefix chuẩn (`/case-studies/` để khớp site thật đang chạy, hay `/cases/` để khớp route đã lỡ code trong dự án này) — rồi sửa đồng loạt cả 3 file. Đây là quyết định IA, cần bạn chốt trước khi sửa.

## 3. Tổng hợp phương pháp luận & đồng bộ (chi tiết ở file 03)

- 3 hệ thống phân tầng khác nhau đang tồn tại song song (bài test thật, bài test mới tự tạo, và 2 nhãn tầng khác nhau trong chính bài test mới).
- Số liệu bịa trong `industryData.ts` (thống kê ngành không nguồn, một con số "8%" bịa trộn vào metric thật).
- Cam kết hiệu suất chưa phê duyệt trong `investmentData.ts` ("Cam kết" cho ≥60%, 2.5x-4x, hoàn vốn 2-3 tháng), ký hiệu ™ chưa rõ đã đăng ký.
- Nhãn "Chuẩn khung McKinsey Rewired" tự nhận, chưa có xác nhận từ McKinsey.

## 4. Thương hiệu & hình ảnh (chi tiết ở file 01, 02)

- "Enigma" / "Enigma Sunext" / "Enigma Solutions, Inc." còn tồn tại song song với nội dung Sunext thật.
- 3 ảnh sai/hỏng đang publish thật (thương hiệu lạ "AURORA", ảnh quán cà phê "HYGGE" không liên quan, dashboard chữ AI vẽ sai).
- Nút Reduced Motion không hoạt động (bug thật, đã xác minh qua code).
- Route nội bộ `/prototype` bị lộ công khai ở Footer.

## 5. Văn phong — vừa Sam Ovens vừa storytelling Trần Quang (chi tiết ở file 04)

- 6 trang trụ cột + trang Đo lường: giữ tốt văn phong Sam Ovens đã viết.
- `industryData.ts`, `investmentData.ts`: giọng báo cáo tư vấn thông thường, chưa đạt.
- Phần "evidence" (case study) trong 6 trang trụ cột: đúng số liệu nhưng đang là bảng thống kê, chưa phải câu chuyện — chấm theo rubric Trần Quang chỉ ~2/5, cần viết lại theo Cấu Trúc 6 Nhịp + đổi ngôi khách hàng làm người hùng (mẫu viết lại đầy đủ cho case Bán lẻ đã có sẵn ở file 04 mục 4).
- Quan trọng: khung "Myth vs Reality" (lầm tưởng/sự thật) ở 6 trang trụ cột **không cần và không nên** chuyển thành chuyện kể — đây là lập luận thuyết phục hợp lệ theo cách khác, ép thành chuyện sẽ làm loãng.

## 6. Danh sách hành động tổng hợp — theo thứ tự làm

| # | Việc | Vì sao | File chi tiết |
|---|---|---|---|
| 1 | Chốt thương hiệu duy nhất, xóa "Enigma" khỏi Header/Footer/Preloader | Nền tảng cho mọi thứ khác | 01 |
| 2 | Chốt MỘT slug + MỘT route prefix cho 3 case study, sửa đồng bộ ở `data.ts`, `aiTransformation.ts`, `industryData.ts` | Đang có 4 slug xung đột, link case study từ trang Ngành đang 404 | 00 (mục 2), 03 |
| 3 | Gỡ số liệu bịa trong `industryData.ts`, gỡ chi tiết bịa mới trong `CASE_STUDIES_DETAILS` ("45 điểm bán", "800 CV", đổi nghĩa "traffic"→"lead") | Vi phạm cả yêu cầu chính xác lẫn Lỗi Chí Mạng #1 của phương pháp Trần Quang | 03, 04 |
| 4 | Hạ tông "Cam kết" trong `investmentData.ts` thành ngôn ngữ định hướng, xác nhận/gỡ ký hiệu ™ | Rủi ro kinh doanh/pháp lý thật | 03 |
| 5 | Quyết định giữ 1 bài test AI Maturity duy nhất | Đang có 2 bài test độc lập, khác rubric | 03 |
| 6 | Viết lại phần "evidence" của 6 trang trụ cột theo Cấu Trúc 6 Nhịp (mẫu case Bán lẻ đã viết sẵn) | Nâng từ bảng số liệu thành câu chuyện thuyết phục | 04 |
| 7 | Thay 3 ảnh sai/hỏng, sửa bug nút Reduced Motion, gỡ link `/prototype` khỏi Footer | Đã xác minh cụ thể | 01, 02 |

**Việc chưa làm:** toàn bộ trên là kết quả kiểm tra và bản viết mẫu tham khảo — chưa sửa trực tiếp file code nào. Mục 2 và mục 5 là quyết định sản phẩm cần bạn chốt trước khi tôi hoặc coding agent thực thi phần còn lại.
