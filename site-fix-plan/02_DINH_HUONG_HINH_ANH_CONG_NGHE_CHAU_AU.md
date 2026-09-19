---
Tài liệu này CẬP NHẬT và không thay thế 02_KE_HOACH_HINH_ANH_VIET_NAM.md (đã viết trước
đó trong sunext-website-upgrade-plan/). Hai định hướng áp dụng cho hai NHÓM ảnh khác nhau,
xem bảng phân vùng ở §2 — không trộn lẫn.
---

# 02 · Định hướng hình ảnh: Công nghệ + chạm nhẹ nghệ thuật đương đại châu Âu

## 0. Vì sao đây là một lựa chọn tốt — có bằng chứng ngay trên site

Khi kiểm tra `public/assets/advantage-card-1.jpg`, ảnh hiện tại (dù đang sai vì in nhầm chữ "AURORA AI INTELLIGENCE") thực chất đã đi đúng hơi hướng này: một khối điêu khắc trừu tượng hình học, đặt trên bệ đá cẩm thạch, ánh sáng phòng trưng bày (gallery lighting), các lớp dữ liệu phát sáng lồng bên trong. Đây chính xác là ngôn ngữ "công nghệ + chạm nghệ thuật đương đại châu Âu" — chỉ cần sửa lại đúng thương hiệu, không cần đổi hướng.

`hero-poster.jpg` (khối ruy-băng gốm trắng xoắn) cũng đã đúng hướng này — tối giản, một chất liệu, một màu, ánh sáng studio mềm.

**Kết luận:** giữ nguyên hai ảnh này làm chuẩn tham chiếu phong cách (style reference), chỉ cần loại bỏ chữ thương hiệu sai và nhân rộng đúng công thức này cho các ảnh còn lại.

## 1. Tham chiếu nghệ thuật đương đại châu Âu — cụ thể, có nguồn

Không dùng "nghệ thuật châu Âu" một cách mơ hồ. Bốn tham chiếu cụ thể, đúng nghĩa **đương đại** (không phải cổ điển/Phục Hưng — đó là hướng của dự án `Sunext-AI-Website` khác, phải tránh trộn lẫn):

| Tham chiếu | Vì sao phù hợp | Áp dụng vào ảnh |
|---|---|---|
| **New European Bauhaus** — sáng kiến chính thức của Ủy ban châu Âu, khởi động 2020, gọi là "linh hồn của Green Deal" | Đây là chương trình **thật, chính thức**, kết hợp trực tiếp 3 trụ: bền vững — công nghệ — thẩm mỹ/nghệ thuật. Đúng nghĩa đen "công nghệ chạm nghệ thuật châu Âu đương đại" | Dùng làm kim chỉ nam tổng thể: vật liệu tự nhiên (gốm, đá, gỗ sáng màu) kết hợp chi tiết công nghệ (lớp sáng dữ liệu, bề mặt kim loại chải xước) |
| **Bauhaus (1919) & di sản Dieter Rams/Braun** | Chuẩn mực thiết kế công nghiệp Đức: hình khối hình học thuần túy, một chất liệu, màu trung tính (kem/xám/đen), "ít nhưng chất lượng hơn" | Bảng màu vật thể: be/kem/xám đá, không dùng màu sắc sặc sỡ trên chính vật thể (màu lime của Sunext chỉ nên xuất hiện như điểm nhấn ánh sáng/UI, không nhuộm cả khối vật thể) |
| **Điêu khắc trừu tượng đương đại kiểu Anish Kapoor** (Anh, hoạt động chính tại châu Âu) | Hình khối mượt, hữu cơ, phi hình học cứng — đúng ngôn ngữ khối ruy-băng đã có ở `hero-poster.jpg` | Giữ nguyên hướng này cho vật thể trung tâm hero |
| **Ánh sáng & không gian kiểu Olafur Eliasson** | Ánh sáng là một phần của tác phẩm, không chỉ chiếu sáng vật thể — quầng sáng, khúc xạ, lớp trong suốt phát quang | Áp dụng cho các "lớp dữ liệu phát sáng" bên trong khối điêu khắc (đúng như ảnh AURORA đang làm, chỉ cần sửa chữ) |

## 2. Phân vùng bắt buộc — không trộn hai định hướng vào một ảnh

Đây là điểm mấu chốt để không mâu thuẫn với kế hoạch "tập trung vào Việt Nam" đã lập trước đó:

| Nhóm ảnh | Định hướng áp dụng | Vì sao |
|---|---|---|
| **Vật thể trừu tượng / sản phẩm / hero / icon khái niệm** (hero visual, 3 ảnh Advantage card, background trang trụ cột AI Transformation, loader sphere) | **Công nghệ + nghệ thuật đương đại châu Âu** (bảng §1) | Đây là ảnh minh họa Ý TƯỞNG, không đại diện một con người hay địa điểm cụ thể — không có yêu cầu phải "trông như Việt Nam" |
| **Con người, văn phòng, nhà máy, cửa hàng, đội ngũ, case study thật** (đội ngũ lãnh đạo, 3 case study, ảnh trang ngành) | **Giữ nguyên định hướng Việt Nam thật** đã lập trong `sunext-website-upgrade-plan/02_KE_HOACH_HINH_ANH_VIET_NAM.md` | Đây là bằng chứng xác thực (case study có số liệu thật, đội ngũ có thật) — thay bằng khối điêu khắc trừu tượng châu Âu ở đây sẽ làm mất hoàn toàn tính xác thực, phản tác dụng |

**Quy tắc một câu:** *ảnh nào đang trả lời câu hỏi "AI trông như thế nào" → dùng hướng công nghệ/nghệ thuật châu Âu; ảnh nào đang trả lời câu hỏi "khách hàng thật của Sunext là ai, ở đâu" → giữ nguyên bối cảnh Việt Nam thật.*

## 3. Đặc tả thị giác cụ thể cho nhóm "công nghệ + nghệ thuật châu Âu"

- **Chất liệu vật thể:** gốm mờ (matte ceramic), đá cẩm thạch/travertine, kim loại chải xước (brushed aluminum) — không dùng nhựa bóng, không dùng kính trong suốt kiểu "sci-fi rẻ tiền".
- **Bảng màu vật thể:** trắng ngà, kem, xám đá, đen mờ — đúng 3 tông đã có trong Motion Design System (`--color-surface-base`, `--color-ink-900`). Màu lime (`#FAFFDE`) chỉ xuất hiện như ánh sáng/glow phát ra từ lớp dữ liệu bên trong, không nhuộm bề mặt vật thể chính.
- **Bố cục:** vật thể đơn lẻ, đặt giữa khung hình hoặc lệch theo quy tắc 1/3, nền trống nhiều khoảng âm (negative space) — đúng tinh thần tối giản Bauhaus, không dựng cảnh phức tạp xung quanh.
- **Ánh sáng:** ánh sáng phòng trưng bày/studio — một nguồn sáng chính mềm từ trên-chéo, bóng đổ nhẹ, không có ánh sáng màu rực rỡ kiểu game/cyberpunk.
- **Chi tiết công nghệ được phép có:** lớp phát sáng mỏng (data layer) lồng bên trong hoặc xuyên qua vật thể, đường lưới mạch mỏng khắc chìm trên bề mặt, độ trong suốt nhẹ ở các lớp — không dùng mô-típ "ma trận số 0-1 rơi" hay hologram xanh lá kiểu phim viễn tưởng cũ, đã quá sáo mòn.
- **Tuyệt đối tránh:** bất kỳ yếu tố cổ điển nào (cột trụ La Mã, tượng cẩm thạch tân cổ điển, khung tranh sơn dầu, họa tiết vàng baroque) — đây là ranh giới rõ ràng để không lấn sang định vị của dự án `Sunext-AI-Website`, vốn dùng đúng những yếu tố này cho một định vị khác (nghệ thuật cổ điển, không phải đương đại).

## 4. Prompt mẫu (Adobe Firefly — theo đúng khuyến nghị công cụ ở kế hoạch trước)

**Ảnh Advantage Card (thay cho "AURORA" sai hiện tại):**
```
An abstract minimalist sculpture representing AI data intelligence, made of
matte cream ceramic geometric forms arranged in a radial cluster, with a
single glowing translucent data-layer core in soft blue-violet light visible
through a cross-section, displayed on a light travertine marble pedestal in
a bright minimalist gallery space, soft directional studio lighting, shallow
depth of field, contemporary European industrial design aesthetic in the
style of Bauhaus and Dieter Rams --no text, no logos, no brand names, no
science-fiction neon, no classical ornamentation, no gold leaf
```

**Ảnh nền trừu tượng cho trang trụ cột (ví dụ: Kiến trúc dữ liệu):**
```
An abstract sculptural representation of unified data architecture: multiple
thin matte-white geometric panels converging into a single translucent glowing
node, floating above a pale stone surface, soft gallery lighting, minimalist
composition with large negative space, contemporary European design aesthetic,
muted neutral palette with a single soft lime-green light accent --no text,
no readable UI, no human figures, no classical elements
```

**Quy tắc duyệt bắt buộc (áp dụng thêm, ngoài checklist đã có ở kế hoạch Việt Nam):** không được có bất kỳ chữ/logo/thương hiệu nào xuất hiện trên bề mặt vật thể — đây chính xác là lỗi đã xảy ra với "AURORA AI INTELLIGENCE". Luôn thêm `--no text, no logos, no brand names` vào cuối prompt.

## 5. Áp dụng cụ thể vào các file ảnh hiện có

| File cần tạo lại | Hướng mới |
|---|---|
| `advantage-card-1.jpg`, `advantage-card-2.jpg`, `advantage-card-3.jpg` | 3 biến thể của cùng một ngôn ngữ điêu khắc trừu tượng ở §4 — mỗi ảnh một hình khối khác nhau (radial cluster / spiral / stacked panels) để phân biệt 3 card, nhưng cùng chất liệu/ánh sáng để nhất quán |
| `hero-poster.jpg` / `hero-visual.mp4` | **Giữ nguyên** — đã đúng hướng, không cần tạo lại |
| `card-product-1/2/3.jpg` (widget nhỏ trong Hero) | Cùng ngôn ngữ, khung hình cận cảnh hơn (crop chặt vào một góc của khối điêu khắc) |
| Ảnh nền 6 trang trụ cột AI Transformation (`06_tru-cot-5-kien-truc-du-lieu` v.v., hiện chưa có ảnh) | Dùng đúng công thức §4, mỗi trụ cột một hình khối ẩn dụ riêng (ví dụ: Trụ cột 5 - Dữ liệu = các mảnh hội tụ vào một lõi; Trụ cột 6 - Mở rộng quy mô = một hình khối nhân bản thành nhiều bản sao nhỏ dần ra xa) |
| `case-1` đến `case-8.jpg`, ảnh case study thật, ảnh đội ngũ | **Không áp dụng hướng này** — giữ nguyên định hướng Việt Nam thật theo §2 |
