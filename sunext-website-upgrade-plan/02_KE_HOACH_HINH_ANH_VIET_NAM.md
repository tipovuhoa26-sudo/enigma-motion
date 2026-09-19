# 02 · Kế hoạch hình ảnh — tập trung vào Việt Nam

## 0. Vì sao đây là việc ưu tiên số 1, không phải việc "làm đẹp thêm"

Đã kiểm tra trực tiếp mã nguồn: **toàn bộ Sunext-Website hiện chỉ có một file ảnh — `images/logo-sunext.png`.** Không một `<img>` nào khác. Không một `background-image` nào khác. Hero, case study, đội ngũ, trang ngành — tất cả đang chạy bằng icon font (Material Symbols) và mảng màu gradient.

Điều này có nghĩa: hiệu ứng motion "hiện đại nhất" cũng không cứu được cảm giác của site, vì **không có gì để hiệu ứng tác động vào.** Một trang hero fade-up một khối gradient trống vẫn là một trang hero trống. Đây là khoảng trống lớn nhất giữa Sunext-Website và mọi benchmark đã nghiên cứu (McKinsey, CMC TS, FPT Digital — tất cả đều dùng ảnh thật hoặc ảnh dựng chất lượng cao ở mọi trang chính).

## 1. Chiến lược nguồn ảnh: khi nào dùng ảnh thật, khi nào dùng AI tạo

Không dùng một nguồn duy nhất cho mọi chỗ. Quyết định theo bảng sau:

| Loại nội dung | Nguồn khuyến nghị | Lý do |
|---|---|---|
| Đội ngũ lãnh đạo (`/doi-ngu/`) | **Ảnh thật 100%, chụp mới** | Đây là gương mặt thật của công ty — dùng ảnh AI tạo ở đây là rủi ro uy tín lớn nhất có thể có; khách hàng B2B sẽ kiểm tra chéo trên LinkedIn |
| Case study (3 trang hiện có + case study tương lai) | **Ưu tiên ảnh thật từ hiện trường khách hàng** (nếu được phép chụp/xin phép dùng); nếu khách hàng yêu cầu ẩn danh → dùng ảnh minh họa AI **không có gương mặt người cụ thể** (góc quay sản phẩm, dây chuyền, màn hình dashboard, không cận mặt) | Case study sống nhờ tính xác thực — ảnh giả mà bị phát hiện sẽ phá vỡ toàn bộ uy tín của chính số liệu thật đang có |
| Hero trang chủ, trang dịch vụ, trang ngành, 6 trang trụ cột AI Transformation | **AI tạo, có định hướng rõ (xem §3)** | Đây là ảnh minh họa khái niệm/bối cảnh, không đại diện một cá nhân cụ thể — rủi ro thấp, tốc độ nhanh, chi phí thấp hơn thuê chụp cho từng khái niệm trừu tượng |
| Văn phòng/không gian làm việc (About, Vì sao chọn Sunext) | **Ảnh thật nếu có văn phòng thật đẹp; nếu chưa có, dùng AI tạo bối cảnh văn phòng Việt Nam hiện đại, không có gương mặt cận cảnh** | Cân bằng giữa tính xác thực và tốc độ triển khai |
| Ảnh trang Bảo mật/Security, Privacy, Terms | **Không cần ảnh người** — dùng minh họa trừu tượng (khóa, lưới dữ liệu) do AI tạo hoặc icon nâng cấp | Nội dung pháp lý/kỹ thuật, ảnh người ở đây không tăng độ tin cậy |

**Nguyên tắc chung:** ảnh có gương mặt người đại diện thật cho Sunext hoặc khách hàng thật → luôn là ảnh thật. Ảnh minh họa bối cảnh/khái niệm/sản phẩm → AI tạo được, miễn tuân thủ định hướng ở §3.

## 2. Công cụ AI tạo ảnh — khuyến nghị có cân nhắc pháp lý (nghiên cứu 2026-09-19)

| Công cụ | Ưu điểm | Rủi ro | Khi nào dùng |
|---|---|---|---|
| **Adobe Firefly** | Huấn luyện trên Adobe Stock đã cấp phép + nội dung public domain, **không dùng dữ liệu cào từ web** — các gói Creative Cloud trả phí đi kèm **bồi thường IP (IP indemnification)**, gói Enterprise mức bồi thường cao hơn | Chất lượng nghệ thuật/đa dạng sáng tạo thường bị đánh giá thấp hơn Midjourney | **Dùng cho mọi ảnh sẽ xuất bản chính thức lên site thương mại** — đây là lựa chọn an toàn pháp lý nhất cho một công ty đang bán dịch vụ B2B |
| **Midjourney** | Chất lượng nghệ thuật, độ chân thực ảnh cao, kiểm soát phong cách tốt | Huấn luyện trên dữ liệu cào từ web, đang có nhiều vụ kiện bản quyền chưa ngã ngũ; điều khoản dịch vụ mới **từ chối mọi trách nhiệm về tình trạng sở hữu trí tuệ của ảnh xuất ra** — không có bồi thường IP | Chỉ dùng để **thử bố cục/ý tưởng nội bộ** trước khi tạo bản chính thức bằng Firefly; không publish trực tiếp ảnh Midjourney lên site nếu muốn an toàn tuyệt đối |
| **Google Gemini / Nano Banana** | Tích hợp sẵn nếu đội đang dùng Google Workspace, tốc độ nhanh | Điều khoản bồi thường thương mại kém rõ ràng hơn Firefly tại thời điểm nghiên cứu | Dùng cho việc concepting nhanh, không dùng làm bản cuối |

**Khuyến nghị dứt khoát:** với một website đang bán dịch vụ tư vấn doanh nghiệp, **chọn Adobe Firefly làm công cụ chính thức cho mọi ảnh xuất bản**, vì rủi ro bị khiếu nại bản quyền ảnh trên chính website bán hàng của mình là một rủi ro không đáng đánh đổi để lấy vài phần trăm chất lượng nghệ thuật cao hơn.

## 3. Định hướng thị giác "tập trung vào Việt Nam" — cụ thể, không mơ hồ

### 3.1 Điều PHẢI có để ảnh đọc được là "Việt Nam hiện đại, doanh nghiệp thật"

- Không gian văn phòng/nhà máy/cửa hàng **kiểu Việt Nam đô thị hiện đại** — tòa nhà văn phòng kính kiểu TP.HCM/Hà Nội, không gian mở, ánh sáng tự nhiên qua cửa kính lớn — không phải văn phòng kiểu Mỹ/châu Âu chung chung.
- Trang phục công sở Việt Nam hiện tại: sơ mi, blazer nhẹ, không đồng phục kiểu phương Tây quá trang trọng (không cà vạt nơ, không vest ba mảnh kiểu ngân hàng Phố Wall).
- Nếu có biển hiệu/màn hình/tài liệu xuất hiện trong khung hình: **có chữ tiếng Việt thật**, không phải chữ giả/ký tự vô nghĩa (lỗi rất phổ biến của ảnh AI khi vẽ chữ) — nên kiểm tra kỹ từng ảnh AI tạo ra ở chi tiết này.
- Bối cảnh ngành đúng với 3 case study thật đang có: **cửa hàng bán lẻ Việt Nam** (kệ hàng, quầy thu ngân, không gian retail hiện đại), **nhà máy sản xuất tại Việt Nam** (dây chuyền, công nhân mặc đồ bảo hộ đúng chuẩn, không phải ảnh nhà máy Trung Quốc/chung chung generic), **văn phòng dịch vụ B2B** (không gian coworking/văn phòng hiện đại, máy tính, dashboard).

### 3.2 Điều TUYỆT ĐỐI TRÁNH (cliché du lịch — sai hoàn toàn định vị doanh nghiệp công nghệ)

- Nón lá, xích lô, ruộng lúa, phố cổ Hội An, áo dài trong bối cảnh công sở — đây là hình ảnh du lịch, **không phù hợp một website B2B công nghệ/tư vấn AI**, sẽ khiến site trông như quảng cáo du lịch, không phải công ty công nghệ.
- Khuôn mặt "mỉm cười quá mức", tư thế tạo dáng cứng nhắc kiểu stock photo cũ (bàn tay chỉ vào màn hình laptop trống, nhóm người vỗ tay nhìn vào máy tính) — đọc ngay là ảnh stock giả, đúng loại "trope" mà nghiên cứu 2026 cảnh báo tránh (ví dụ tương đương: "nụ cười y tá", "người thiểu số duy nhất trong phòng họp") — với bối cảnh Việt Nam, tương đương là tránh dàn dựng gượng gạo, ưu tiên khung hình candid, tự nhiên.
- Rập khuôn "văn phòng châu Á chung chung" không có markers địa phương nào — nếu bỏ hết chữ/bối cảnh mà không ai đoán được đây là Việt Nam chứ không phải Singapore/Thái Lan/Trung Quốc, ảnh đó chưa đạt yêu cầu.

### 3.3 Rủi ro cần lưu ý khi tạo ảnh có gương mặt người bằng AI

Nghiên cứu 2026 ghi nhận trường hợp thật: ảnh AI tạo "trông như người thật" từng vô tình trùng khớp đặc điểm khuôn mặt của một cá nhân có thật đã bị mô hình học từ dữ liệu lan truyền trên mạng — rủi ro này **tăng thêm khi tạo ảnh gương mặt cận cảnh của một nhóm nhân khẩu học cụ thể** (ví dụ: "nhân viên văn phòng Việt Nam, 30 tuổi"). **Không dùng ảnh AI có gương mặt cận cảnh, rõ nét làm đại diện chính thức cho một cá nhân** (nhân viên Sunext, khách hàng cụ thể) — chỉ dùng ảnh AI cho: (a) bối cảnh không có mặt người, (b) mặt người mờ/xa/quay lưng/không phải điểm nhấn chính của khung hình.

## 4. Prompt mẫu (Adobe Firefly / tương thích Midjourney cho bước concepting)

Không đưa cho AI một prompt mơ hồ như "văn phòng Việt Nam hiện đại". Dùng công thức: **[chủ thể + hành động cụ thể] + [bối cảnh Việt Nam cụ thể] + [ánh sáng] + [phong cách chụp] + [phủ định các lỗi thường gặp]**.

**Ví dụ prompt cho ảnh nhà máy (Trụ cột 4/5, case study Manufacturing):**
```
A modern manufacturing production line in Vietnam, workers in proper
safety uniforms monitoring a quality-control screen with a live dashboard,
natural industrial lighting through large factory windows, photorealistic,
candid documentary style, 35mm lens, slight film grain, shot from a
mid-distance angle without close-up faces --no cartoonish, no stock-photo
posed smiling, no generic Chinese-factory stereotype, no illegible text on screens
```

**Ví dụ prompt cho ảnh văn phòng dịch vụ B2B (Trụ cột 2/3):**
```
A small team of Vietnamese marketing professionals working together at a
modern open-plan office in Ho Chi Minh City, natural daylight through
floor-to-ceiling windows, laptops with real-looking Vietnamese UI text,
candid mid-action shot (not posed looking at camera), photorealistic,
35mm lens, soft natural color grading --no tourist clichés, no exaggerated
smiles, no generic Western office stock look
```

**Quy tắc bắt buộc khi duyệt ảnh AI trước khi publish:** kiểm tra tay (lỗi AI phổ biến nhất), kiểm tra chữ trong khung hình có đọc được và đúng tiếng Việt không, kiểm tra không có gương mặt nào bị "quá thật" đến mức trông như một người cụ thể có thể tồn tại ngoài đời (nếu nghi ngờ, tạo lại với góc máy xa hơn hoặc quay lưng).

## 5. Danh sách ảnh cần thiết theo trang (shot list ưu tiên)

### Ưu tiên 1 — Trang có traffic cao nhất, hiện đang trống hoàn toàn

| Trang | Ảnh cần | Nguồn | Tỷ lệ khung hình |
|---|---|---|---|
| `/` (Home) — Hero | 1 ảnh hero: không gian làm việc Việt Nam hiện đại, có gợi ý công nghệ/dashboard, không cận mặt | AI (Firefly) | 16:9, crop được cho mobile |
| `/` (Home) — 3 case study card | 3 ảnh tóm tắt tương ứng: retail, manufacturing, B2B services | AI (Firefly), theo đúng ngành | 4:3 |
| `/doi-ngu/` — Đội ngũ lãnh đạo | Ảnh chân dung thật từng thành viên (CEO, CAIO, CTO, CSO, BD Director theo outline đã có) | **Bắt buộc ảnh thật** | 1:1 |
| `/case-studies/toi-uu-chi-phi-tuyen-dung-hr-ai/` | Ảnh môi trường retail Việt Nam — quầy/kệ hàng, không cận mặt nếu ẩn danh khách hàng | Thật nếu được phép; AI nếu ẩn danh | 16:9 |
| `/case-studies/ai-auditor-manufacturing/` | Ảnh dây chuyền sản xuất, dashboard chất lượng | Thật nếu được phép; AI nếu ẩn danh | 16:9 |
| `/case-studies/content-factory-b2b-marketing/` | Ảnh đội marketing làm việc, màn hình pipeline nội dung | Thật nếu được phép; AI nếu ẩn danh | 16:9 |

### Ưu tiên 2 — Bộ nội dung AI Transformation vừa viết (8 trang, hiện chưa có ảnh nào)

| Trang | Ảnh cần (1 hero/trang, tối thiểu) | Gợi ý mood |
|---|---|---|
| `01_ai-transformation-hub` | Một hình ảnh khái niệm "6 trụ cột" — có thể là minh họa dữ liệu/kiến trúc trừu tượng, không cần người | Trừu tượng, nghiêm túc |
| `02_tru-cot-1-chien-luoc-so` | Phòng họp chiến lược Việt Nam, bảng/màn hình có biểu đồ ưu tiên use case | Candid, tập trung |
| `03_tru-cot-2-nang-luc-doi-ngu` | Buổi đào tạo AI nội bộ — nhóm nhân viên Việt Nam học cùng nhau, màn hình có nội dung đào tạo | Ấm, hợp tác |
| `04_tru-cot-3-mo-hinh-van-hanh` | Sơ đồ quy trình trên bảng kính/whiteboard, một người đang vẽ lại quy trình | Năng động |
| `05_tru-cot-4-nen-tang-cong-nghe` | Màn hình dashboard tích hợp hệ thống, không cận mặt người | Kỹ thuật, sạch |
| `06_tru-cot-5-kien-truc-du-lieu` | Trừu tượng dữ liệu hợp nhất (không cần người) | Trừu tượng |
| `07_tru-cot-6-mo-rong-quy-mo` | Nhiều phòng ban làm việc cùng lúc, góc rộng văn phòng mở | Quy mô, năng lượng |
| `08_do-luong-ai-readiness` | Người đang làm bài đánh giá trên laptop/tablet, không cận mặt | Tập trung, cá nhân |

### Ưu tiên 3 — Trang ngành mới (nếu triển khai đề xuất ở file 01, mục 3.3)

Mỗi trang ngành cần tối thiểu 1 hero ảnh đúng ngành (Retail/Manufacturing/B2B Services) — dùng lại đúng shot list case study tương ứng ở trên, không cần tạo thêm bộ ảnh riêng.

## 6. Quy trình thực hiện

1. Chốt danh sách ảnh theo mức ưu tiên ở §5 với đội marketing Sunext — xác nhận case study nào được khách hàng cho phép dùng ảnh thật, case study nào cần ẩn danh.
2. Chụp ảnh thật cho `/doi-ngu/` trước tiên (nhanh nhất, rủi ro thấp nhất, tác động uy tín cao nhất).
3. Dùng prompt mẫu ở §4 tạo ảnh AI cho nhóm Ưu tiên 1–2 bằng Adobe Firefly, duyệt theo checklist ở cuối §4.
4. Nén ảnh đúng chuẩn web trước khi đưa vào `images/` (WebP/AVIF, có kích thước responsive) — khớp với khuyến nghị hiệu năng đã có trong `enigma-motion-spec` (LCP, CLS) dù đây là dự án khác, nguyên tắc tối ưu ảnh vẫn áp dụng chung.
5. Gắn hiệu ứng fade-in nhẹ khi ảnh load theo đúng kế hoạch motion "lean" ở file `01_BENCHMARK_VA_TRANG_CAN_THIET.md` §4 — không làm gì thêm ngoài fade-in đơn giản.
