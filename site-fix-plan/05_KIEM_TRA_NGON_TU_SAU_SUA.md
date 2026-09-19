# 05 · Kiểm tra lại ngôn từ sau đợt sửa — Đối chiếu phương pháp luận & Write Moving Stories

Căn cứ: `git log` cho thấy 3 commit đã sửa theo đúng các file `00-04` (`4ac6bbc`, `e32d1b2`, `428eb18`). Đã đọc lại trực tiếp mã nguồn hiện tại (không suy đoán từ báo cáo cũ) để xác nhận việc sửa có thật và có đủ hay chưa.

## Kết luận: Đạt phần lớn, còn vài điểm cần tinh chỉnh thêm

| Hạng mục đã yêu cầu sửa | Đã sửa? | Bằng chứng đã kiểm tra trực tiếp |
|---|---|---|
| Bỏ số liệu bịa trong `industryData.ts` (35-40%, 15-20%, "từ 8%"...) | ✅ Đã sửa | Grep toàn bộ chuỗi số liệu bịa cũ → không còn kết quả nào |
| Hạ tông "Cam kết" hiệu suất trong `investmentData.ts` | ✅ Đã sửa | Không còn "Cam kết ≥60%/2.5x-4x/hoàn vốn 2-3 tháng"; chỉ còn "Cam kết NDA" (cam kết bảo mật — hợp lệ, không phải cam kết hiệu suất) |
| Gỡ ký hiệu ™ chưa xác nhận | ✅ Đã sửa | Grep "™" → không còn |
| Thống nhất 1 slug/route cho mỗi case study | ✅ Đã sửa, cách làm tốt hơn dự kiến | `data.ts` có `CANONICAL_CASE_STUDIES` làm nguồn duy nhất; 4 slug cũ (`ai-vision-kiem-dinh-san-xuat`...) giữ lại làm alias trỏ về đúng bản chuẩn — không phá link cũ mà vẫn hết xung đột |
| Đổi route `/cases/` → `/case-studies/` khớp site thật | ✅ Đã sửa | `src/app/case-studies/[slug]/page.tsx` tồn tại, CTA trong trang trỏ đúng `/case-studies` |
| Gộp 2 bài test AI Maturity thành 1 | ✅ Đã sửa | `danh-gia-san-sang-ai/page.tsx` giảm từ 666 dòng xuống còn dẫn hướng, `/ai-maturity-assessment/page.tsx` là nơi làm bài test duy nhất |
| Áp Cấu Trúc 6 Nhịp cho phần "evidence" ở 6 trang trụ cột | ⚠️ Cải thiện một phần | Đã đọc lại 8 đoạn `story:` trong `aiTransformation.ts` — câu chữ khá hơn hẳn bản cũ (có nhân vật "Đội HR", có tương phản "Thay vì X... họ Y"), nhưng đây là bản rút gọn 2 câu, chưa phải chuyện kể 6 nhịp đầy đủ. **Đây là lựa chọn hợp lý cho một widget "bằng chứng" ngắn trong trang trụ cột** — chuyện kể đầy đủ nên nằm ở trang case study chi tiết (`/case-studies/[slug]`), không cần lặp lại ở mọi nơi |
| Tích hợp dữ liệu dự án thật (Vietcap, Vinhomes, Dentsu, Phương Trường An, FPTU) | ✅ Đã sửa, đúng thứ tự ưu tiên đã đề xuất | `CANONICAL_CASE_STUDIES` trong `data.ts` có đủ 5 case mới, đúng slug đã đề xuất trong `real-project-portfolio/02...md` |
| Thêm ngành Bất động sản (quyết định đã hỏi) | ✅ Đã quyết & làm | `industry: { name: 'Bất Động Sản & Nhà Phố', slug: 'bat-dong-san' }` xuất hiện trong dữ liệu case Vinhomes/Phương Trường An |
| Trang Đội ngũ, Khách hàng & Đối tác | ✅ Đã tạo mới | `/doi-ngu/page.tsx` (311 dòng), `/khach-hang-doi-tac/page.tsx` (283 dòng) — đã đọc, dùng đúng dạng liệt kê tên theo nhóm ngành, không gắn logo ảnh (an toàn, chưa vi phạm ranh giới không ngụ ý chứng thực) |

## Còn thiếu / cần làm tiếp (không phải lỗi, mà là việc chưa tới lượt)

1. **Chuyện kể 6 nhịp đầy đủ ở trang case study chi tiết** (`/case-studies/[slug]`) — đã kiểm tra `challenge`/`solution` trong `CASE_STUDIES_DETAILS`, hiện vẫn là mô tả 1 đoạn văn, chưa phải bản kể chuyện đầy đủ theo mẫu đã viết ở file 04 mục 4. Đây là hạng mục nội dung còn lại lớn nhất.
2. **Trang Đội ngũ mới chỉ có CAIO**, chưa có mạng lưới giảng viên đa lĩnh vực (xem `faculty-and-logos-plan/`) — đây là USP mới người dùng vừa cung cấp, chưa có trong đợt sửa này vì lúc đó chưa biết tới.
3. **Trang Khách hàng & Đối tác mới có tên chữ, chưa có logo hình ảnh** — đúng yêu cầu mới nhất của người dùng, xem kế hoạch ở `faculty-and-logos-plan/02...md`.

**Trả lời thẳng câu hỏi:** hệ thống ngôn từ hiện đã **đạt chuẩn phương pháp luận** (không còn số liệu bịa, không còn cam kết quá mức, đúng khung xưng hô khách hàng-là-người-hùng ở các đoạn evidence đã sửa) và **đã bắt đầu đúng hướng Write Moving Stories** ở tầng tóm tắt, nhưng **chưa hoàn thiện ở tầng chuyện kể đầy đủ** trên trang case study chi tiết — đây là việc lớn nhất còn lại về nội dung.
