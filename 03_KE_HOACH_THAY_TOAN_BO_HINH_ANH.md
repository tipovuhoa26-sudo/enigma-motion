# 03 · Kế hoạch thay toàn bộ hình ảnh hiện tại

Chỉ là kế hoạch — chưa sửa file nào trong lượt này.

## 1. Kiểm kê toàn bộ ảnh đang dùng thật trên site

| Nhóm | Số file | Dùng ở đâu | Có thể "thay bằng hình kiểu quả cầu" không? |
|---|---|---|---|
| 4 ảnh Việt Nam thật (`vietnam-retail-store.jpg`, `vietnam-manufacturing-line.jpg`, `vietnam-b2b-office.jpg`, `vietnam-strategy-meeting.jpg`) | 4 file, nhưng **bị dùng lặp lại tới 28 lần** trên 8 case study + 4 trang ngành | Case study, trang ngành, Advantage card | Có — đây là nhóm nên thay đầu tiên |
| Chân dung CAIO (`vinh_hung_portrait.png`) | 1 | Trang Đội ngũ | **Không nên** — ảnh thật của một người có tên, đã tự xác nhận |
| Logo 44 tổ chức (`logoData.ts`) | 44 | Trang Khách hàng & Đối tác | **Không thể** — đây là logo/thương hiệu của bên thứ ba, phải giữ đúng nguyên bản, không "vẽ lại" được |

## 2. Vấn đề thật vừa phát hiện khi kiểm kê — không phải suy đoán

**4 ảnh Việt Nam đang bị tái sử dụng cho 8 case study khác nhau.** Ví dụ: `vietnam-strategy-meeting.jpg` dùng chung cho cả case Vietcap (chứng khoán) lẫn case FPTU (giáo dục) — hai câu chuyện "thật" khác nhau, cùng một tấm ảnh. Nếu ai để ý sẽ lộ ngay là ảnh không tương ứng với case study. Đây là lý do mạnh nhất để thay — không phải vì ảnh xấu, mà vì **đang lặp một ảnh cho nhiều bằng chứng khác nhau, tự làm giảm độ tin của chính bằng chứng đó.**

## 3. Phương án thay — cần bạn chọn phạm vi

### Phương án A — Thay toàn bộ, kể cả case study (đúng nghĩa đen "toàn bộ")
Bỏ hết ảnh chụp, mọi nơi (case study, trang ngành, Advantage) đều dùng visual dạng vẽ bằng code (particle/đường nét/hình khối trừu tượng) như quả cầu.
**Đánh đổi:** case study sẽ mất tính "ảnh chụp = bằng chứng thấy được" — chuyển hoàn toàn sang tin vào số liệu + chữ viết, không còn hình ảnh hiện trường nào nữa.

### Phương án B — Thay ảnh trang trí/lặp lại, giữ ảnh nào thật sự là bằng chứng riêng biệt
Thay 4 ảnh Việt Nam đang dùng chung cho Advantage card + trang ngành (vai trò minh họa) bằng visual code-drawn kiểu quả cầu; với case study thì **tìm/chụp đúng 1 ảnh riêng cho mỗi case** thay vì tiếp tục dùng chung 4 ảnh — vẫn là ảnh thật, nhưng không trùng nhau nữa.

### Phương án C — Thay hết, không chừa case study, nhưng khác biệt hóa bằng dữ liệu thật của từng case
Giống Phương án A, nhưng mỗi case study có một visual particle/biểu đồ **vẽ từ đúng số liệu thật của case đó** (ví dụ: case Vietcap vẽ đường cong "-75% thời gian" thành animation, không phải một quả cầu chung chung). Không cần ảnh chụp, nhưng mỗi case vẫn có một hình riêng biệt, không lặp.

**Tôi nghiêng về Phương án C** — vừa đúng ý "thay toàn bộ" của bạn, vừa giải quyết luôn lỗi "1 ảnh dùng cho 8 case" ở mục 2, vừa giữ được tính "mỗi hình đều chứng minh một điều gì đó" đúng nguyên tắc đã thống nhất từ đầu.

## 4. Việc cần bạn xác nhận trước khi tôi lên chi tiết kỹ thuật

1. Chọn A / B / C ở mục 3.
2. Logo 44 tổ chức (mục 1) — xác nhận không nằm trong phạm vi "thay toàn bộ", giữ nguyên vì là thương hiệu bên thứ ba?
3. Ảnh chân dung CAIO — xác nhận giữ nguyên vì đã tự chốt là ảnh thật?
