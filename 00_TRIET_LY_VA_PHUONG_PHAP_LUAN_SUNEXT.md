# 00 · Triết lý & Phương pháp luận Sunext — bản lean, một khung duy nhất

Sau nhiều đợt audit, site đang có quá nhiều framework cùng lúc: 6 trụ cột "Rewired" (mượn McKinsey), quy tắc 10-20-70 (mượn BCG), 3 bước dịch vụ thật, thang Tầng 1→5 thật, 6 trục đánh giá, ngành, gói đầu tư... Không cái nào sai, nhưng cộng lại thành một mớ framework, không phải "một triết lý rõ ràng". Đây là bản dọn — giữ đúng một khung làm xương sống, mọi thứ khác xếp xuống làm bằng chứng phụ trợ cho khung đó.

## 1. Triết lý — một câu, không rào trước đón sau

> **Hầu hết doanh nghiệp nghĩ chuyển đổi AI nghĩa là mua công cụ. Đó là lý do phần lớn thất bại.**
> **Sunext không bán công cụ. Sunext bán một hệ thống đã chạy qua 40+ dự án thật — cho bạn biết chính xác đang đứng ở đâu, nên làm gì trước, và làm sao để đội ngũ tự vận hành được sau khi Sunext rút đi.**

Đây là câu mở cho Home, cho mọi trang giới thiệu — không cần định nghĩa dài dòng, không cần trích McKinsey ngay từ câu đầu. Nói thẳng, kiểu Sam Ovens: chỉ ra cái sai phổ biến trước, rồi mới đưa ra cái đúng.

## 2. Phương pháp luận — chốt MỘT khung sở hữu được, không mượn nữa

**Khung xương sống (sở hữu, không phải mượn):** chính là 2 thứ **đã có thật, đã chạy thật** trên site, không cần bịa gì thêm:

```
3 GIAI ĐOẠN (đã là mô hình dịch vụ thật)     5 TẦNG NĂNG LỰC (đã là thang đào tạo thật)
Đánh giá → Chiến lược → Thực thi        ×      Tầng 1 → Tầng 2 → ... → Tầng 5
(bạn đang ở đâu, nên làm gì trước)             (đội ngũ đủ sức tự vận hành chưa)
```

**Đề xuất đặt tên sở hữu được** (chọn 1, hoặc bạn tự chỉnh): **"Sunext Method"** / **"Lộ Trình Sẵn Sàng AI — Sunext"**. Ngắn, không cần giải thích ngay, được giải thích dần qua 3 giai đoạn + 5 tầng bên dưới nó — đúng cách McKinsey sở hữu chữ "Rewired", BCG sở hữu "10-20-70".

**Hạ cấp, không xóa:**
- **6 trụ cột "Rewired"** → giữ nguyên làm nội dung kiến thức/blog (đã viết tốt, đúng giọng Sam Ovens) nhưng đổi khung nói: không phải "đây là phương pháp của Sunext", mà là *"đây là 6 lý do McKinsey tìm ra qua nghiên cứu hàng nghìn dự án — và đây là cách Sunext Method giải quyết từng lý do"*. Trích dẫn nghiên cứu = tăng uy tín. Nhận vơ nghiên cứu người khác làm phương pháp của mình = rủi ro đã cảnh báo từ đầu.
- **Quy tắc 10-20-70 (BCG)** → chỉ dùng làm 1 trích dẫn bằng chứng bên thứ ba trong nội dung Trụ cột 2/3, không phải cấu trúc trang nào.
- **6 trục đánh giá AI Maturity** → giữ nguyên, đây là công cụ đo lường, không phải framework cạnh tranh với khung xương sống.

## 3. Danh sách cắt/gộp để "lean" thật, không chỉ nói lean

| Giữ nguyên, là xương sống | Gộp/định vị lại | Cân nhắc đơn giản hóa |
|---|---|---|
| Trang chủ + câu triết lý ở mục 1 | 6 trụ cột Rewired → chuyển thành mục "Kiến thức" dưới khung Sunext Method, không đứng ngang hàng làm phương pháp riêng | Trang Khung Đầu Tư (`khung-dau-tu`) — B2B tư vấn nghiêm túc thường không public bảng gói chi tiết; cân nhắc rút gọn thành 1 đoạn "cách Sunext tính giá" + CTA đặt lịch, thay vì 3 gói đầy đủ |
| 5 case study thật + trang case study | — | — |
| 4 trang ngành | — | — |
| Bài test AI Maturity (đã gộp còn 1) | — | — |
| Trang Đội ngũ + mạng lưới 11 giảng viên | — | — |
| Trang Khách hàng & Đối tác (logo đã dọn) | — | — |

**Xóa hẳn, không còn lý do giữ:** route `/cases` (bản cũ, dữ liệu giả Enigma — đã có `/case-studies` thật thay thế), route `/prototype` (nội bộ, không nên còn tồn tại trong build production).

## 4. Việc đã làm ngay trong lượt này (không chỉ viết kế hoạch)

- Gỡ 5 logo chưa xin phép (Vietcombank, BIDV, Prudential, Dai-ichi Life, HOSE) khỏi `logoData.ts`.
- Gỡ ảnh chân dung Tùng Chi (chưa xác nhận) khỏi `facultyData.ts` — rơi về cùng kiểu hiển thị như 9 giảng viên khác, không lệch.
- Giữ nguyên ảnh của bạn (CAIO) — đã tự xác nhận.
- Xóa file ảnh bịa `vietcombank_ai_training.jpg`.
- Build lại, xác nhận sạch lỗi.

## 5. Việc còn lại, cần bạn quyết (không tự ý làm thay)

1. Chốt tên gọi cho khung xương sống (mục 2) — "Sunext Method" chỉ là gợi ý.
2. Có đồng ý hạ cấp 6 trụ cột Rewired thành mục kiến thức phụ trợ, không phải trang chủ đạo nữa không?
3. Có đồng ý rút gọn trang Khung Đầu Tư không, hay giữ nguyên 3 gói chi tiết?
4. Xóa hẳn route `/cases` và `/prototype` — xác nhận để tôi thực hiện.
