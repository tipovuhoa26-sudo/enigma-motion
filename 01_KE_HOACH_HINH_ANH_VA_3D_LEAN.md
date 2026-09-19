# 01 · Kế hoạch: Hình ảnh thật + một điểm nhấn 3D — lean kiểu Sam Ovens

## Sam Ovens lean nghĩa là gì — nói một câu, không giảng giải

Không phải "ít chữ". Là **mỗi thứ trên trang phải chứng minh được một điều gì đó** — cắt hết phần còn lại, dù đẹp cỡ nào. Sam Ovens không dùng ảnh minh họa "cho đẹp" — ông dùng bằng chứng, hoặc không dùng gì cả. Áp đúng nguyên tắc đó vào hình ảnh: **ảnh phải là bằng chứng thật, hoặc là một hiệu ứng có lý do tồn tại — không phải hai thứ đó thì cắt.**

## Vì sao đang thấy "rối" — không phải vì quá nhiều ảnh, mà vì lệch tông

Đếm lại: trang chủ chỉ dùng đúng 10 file ảnh/video — không nhiều. Vấn đề là **3 tông thị giác khác nhau đứng cạnh nhau**:
1. Ảnh điêu khắc trừu tượng do AI tạo (`advantage-card-1/2/3.jpg`, `hero-visual.mp4`) — phong cách gallery nghệ thuật.
2. Ảnh tài liệu thật kiểu Việt Nam (`vietnam-b2b-office.jpg`...) — phong cách chụp thật, đời thường.
3. Ảnh chân dung công sở (`vinh_hung_portrait.png`).

Ba tông này không sai riêng lẻ, nhưng đứng cùng nhau ngay trang chủ = không ai biết "gu" thật của site là gì. Đó là cảm giác rối bạn đang thấy.

## Đề xuất: một điểm nhấn 3D duy nhất, thay cho toàn bộ ảnh trừu tượng AI

Ý tưởng "Particle Globe" bạn đưa ra đúng hướng — và có một thư viện làm chính xác hiệu ứng đó, rất nhẹ:

**COBE** — thư viện WebGL 5KB (so với Three.js ~600KB+), chuyên làm đúng một việc: quả cầu vẽ bằng hàng nghìn chấm điểm, kéo để xoay, thả ra vẫn xoay theo quán tính. Không cần học WebGL, vài dòng code là chạy. ([cobe.vercel.app](https://cobe.vercel.app), [github.com/shuding/cobe](https://github.com/shuding/cobe))

**Vì sao đây là lựa chọn lean thật, không phải thêm đồ chơi:**
- Nhẹ hơn bất kỳ ảnh JPG nào đang dùng (5KB code vs ~500-800KB mỗi ảnh AI hiện tại).
- Không tốn công tìm/tạo ảnh, không rủi ro ảnh bịa (đã tốn rất nhiều lượt sửa vì việc này) — vẽ từ dữ liệu tọa độ, không phải ảnh.
- **Có thể vẽ từ dữ liệu thật:** thay vì một quả địa cầu chung chung, chấm sáng đúng vị trí các thành phố nơi Sunext đã có dự án thật (TP.HCM, Hà Nội, Bình Dương, Tây Ninh...). Đây không còn là trang trí — nó là **bằng chứng "40+ dự án thật" được vẽ ra bằng dữ liệu**, đúng tinh thần Sam Ovens: không có gì trên trang không chứng minh một điều gì đó.

## Việc cụ thể

| # | Việc | Giữ / Cắt / Thêm |
|---|---|---|
| 1 | `hero-visual.mp4`, `advantage-card-1/2/3.jpg` (điêu khắc AI trừu tượng) | **Cắt** — thay bằng quả cầu chấm điểm COBE, vẽ điểm sáng tại các thành phố có dự án thật |
| 2 | `vietnam-*.jpg` dùng ở case study, trang ngành | **Giữ** — đây là ảnh bằng chứng, đúng vai trò |
| 3 | `vinh_hung_portrait.png` | **Giữ** — đã tự xác nhận |
| 4 | Toàn bộ ảnh còn lại trong `public/logos/*_ai_*`, `*_training.*` chưa gắn vào case study nào | **Rà lại, cắt file nào không được `grep` ra trong `src/`** — ảnh không dùng không cần giữ trong repo |
| 5 | Quả cầu COBE | **Chỉ đặt ở Hero trang chủ — một chỗ duy nhất.** Không lặp lại 3D ở nơi khác (trụ cột, trang ngành, đội ngũ) — một điểm nhấn, không phải một xu hướng lặp khắp trang |

## Ranh giới — không lặp lại lỗi "thêm cho đẹp"

- Không thêm particle/3D vào bất kỳ trang nào khác ngoài Hero trang chủ.
- Nếu chưa có tọa độ thật của từng dự án, dùng tạm cấp thành phố (TP.HCM, Hà Nội...) — không bịa tọa độ chính xác trụ sở khách hàng.
- Giữ nguyên toàn bộ hệ chuyển động GSAP/Lenis đã có — COBE chỉ thay phần hình ảnh tĩnh trong Hero, không đụng vào motion system.

## Việc cần bạn xác nhận trước khi tôi code

1. Đồng ý thay ảnh/video trừu tượng ở Hero + 3 card Advantage bằng quả cầu chấm điểm không?
2. Danh sách thành phố thật để chấm sáng trên cầu — lấy từ 45+ dự án đã lọc (`real-project-portfolio/01`) hay bạn muốn chốt một danh sách khác?
3. Cho phép tôi rà và xóa các file ảnh trong `public/logos/` không còn được tham chiếu ở đâu trong code không?
