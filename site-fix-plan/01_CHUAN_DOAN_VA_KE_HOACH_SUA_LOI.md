# 01 · Chẩn đoán mã nguồn & Kế hoạch sửa lỗi hiệu ứng

Căn cứ: đã đọc trực tiếp toàn bộ `src/` tại `/Users/hungnpv/Downloads/Sunext/W/` (không suy đoán). Đây là codebase Next.js đã hiện thực hóa cả `enigma-motion-spec/` (Hero/Preloader/Advantage/Cases) lẫn `ai-transformation-content/` (Tư duy AI, Theo ngành, Khung đầu tư, Đo lường sẵn sàng).

---

## 1. Kết luận chính: hiệu ứng không phải vấn đề lớn nhất

Đã đọc `motion/timelines/hero.ts`, `loader.ts`, `advantage.ts`, `casesGallery.ts`, `counter.ts` — đối chiếu với `04_ANIMATION_SPEC.md` từng dòng. **Phần cơ khí animation (stagger, easing, gating counter, pin/scrub, `gsap.matchMedia` responsive, `prefers-reduced-motion` branch) được viết đúng, thậm chí có chi tiết vượt spec tốt** (thêm hiệu ứng độ sâu 3D cho card đang lùi lại trong Advantage: scale nhỏ dần + dịch lên + tối màu nhẹ khi bị che — đúng tinh thần "premium" dù không có trong spec gốc).

**Vấn đề thật nằm ở lớp nội dung/thương hiệu bên trong các hiệu ứng đó** — hiệu ứng đang "diễn" cho nội dung sai. Không thể tinh chỉnh easing để sửa việc trang chủ đang kể một câu chuyện thương hiệu không tồn tại.

## 2. Bằng chứng cụ thể — 4 vấn đề đã kiểm chứng trực tiếp

### 2.1 Thương hiệu bị dán chồng hai lớp (nghiêm trọng nhất)

| Vị trí | Đã thấy trong code | Vấn đề |
|---|---|---|
| `src/content/data.ts` | `ADVANTAGES_DATA`, `CASES_DATA` 100% là dữ liệu demo gốc: "Cultivating Growth, Maximizing Revenue", case study "BioTech Precision Platform", "Fintech Infrastructure", "Cognitive Computing Suite"... | Đây là nội dung giả từ prototype `enigma-motion-spec` ban đầu — **không liên quan gì tới Sunext hay 3 case study thật** (HR tuyển dụng, AI Auditor sản xuất, Content Factory B2B) |
| `src/sections/Footer.tsx` dòng 17 | `<span>...Enigma Sunext</span>` | Hai tên thương hiệu ghép lại thành một cái tên không tồn tại |
| `src/sections/Footer.tsx` dòng 123 | `© {year} Enigma Solutions, Inc. All rights reserved.` | Pháp nhân hoàn toàn bịa, không phải Sunext |
| `src/sections/Footer.tsx` dòng 109–111 | `SOC2 Type II • NDA-First` | "SOC2 Type II" là một chứng nhận bảo mật thật — hiển thị nó mà không có chứng nhận thật là rủi ro uy tín/pháp lý, không chỉ là "hiệu ứng chưa ổn" |
| `src/components/Header.tsx` dòng 531 | `"Built with Next.js 14 App Router..."` | Sai — `package.json` ghi `next: ^16.3.5`. Thông tin kỹ thuật phơi ra cho khách hàng mà còn sai là dấu hiệu thiếu chăm chút |
| `src/components/Header.tsx` — Account modal | "Enigma Client Portal", "3 Models Live", "99.99% Uptime", "Request Custom SSO" | Toàn bộ là số liệu giả cho một "cổng khách hàng" không tồn tại — một trang tư vấn AI B2B thật không nên có modal giả lập kiểu này, nó khiến site đọc như một demo SaaS, không phải công ty thật |

→ **Hệ quả:** người dùng vào trang chủ thấy "Enigma", case study bịa, tiếng Anh; bấm sang "Tư duy AI" hoặc "Theo ngành" (nội dung Sunext thật) thấy tiếng Việt, số liệu thật, giọng văn khác hẳn. Đây chính là cảm giác "chưa ổn" — không phải animation timing.

### 2.2 Ảnh sai/hỏng đang chạy thật trên site

| File | Vấn đề đã thấy khi mở ảnh |
|---|---|
| `public/assets/advantage-card-1.jpg` | Ảnh in rõ chữ **"AURORA AI INTELLIGENCE"** trên bệ đá cẩm thạch — một thương hiệu khác, không phải Sunext, đang hiển thị công khai trên site |
| `public/assets/case-3.jpg` | Ảnh quán cà phê **"THE HYGGE CAFE"** phong cách Scandinavian — không khớp bất kỳ case study nào (3 case thật là Retail/Manufacturing/B2B Services) |
| `public/assets/vietnam-strategy-meeting.jpg` | Bối cảnh phòng họp Việt Nam (có tòa Bitexco, đúng hướng) **nhưng** màn hình dashboard trong ảnh có chữ AI vẽ sai/vô nghĩa: "Dmecoration Phaus", "PROJEETEO ROI: 338%", nhãn trùng lặp không nhất quán ("H2.2024" vs "HY2024") — lỗi kinh điển của ảnh AI khi vẽ chữ, đúng như đã cảnh báo trong `sunext-website-upgrade-plan/02_KE_HOACH_HINH_ANH_VIET_NAM.md` §4 nhưng chưa được kiểm tra trước khi dùng |

### 2.3 Bug thật: nút "Reduced Motion" không có tác dụng

`src/components/Header.tsx` — hàm `toggleReducedMotion` chỉ set `document.documentElement.setAttribute('data-motion', 'reduced')`.

`src/motion/utils/reducedMotion.ts` — hàm `isReducedMotion()` (được gọi ở **mọi** timeline: `loader.ts`, `hero.ts`, `advantage.ts`, `casesGallery.ts`, `counter.ts`) chỉ đọc `window.matchMedia('(prefers-reduced-motion: reduce)').matches` — **không hề đọc `data-motion` attribute**.

→ Bấm nút "Reduced Motion: Enabled" trong modal Help **không tắt bất kỳ animation nào**. Đây là một bug chức năng thật, không phải cảm nhận chủ quan — nếu bạn (hoặc QA) từng bấm thử nút này và thấy hiệu ứng vẫn chạy y hệt, đây chính xác là lý do.

### 2.4 Route nội bộ bị lộ ra Footer công khai

`src/sections/Footer.tsx` dòng 47–50: link `/prototype` ("Prototype Lab") — đây là route thử nghiệm nội bộ theo đúng Phase 0 trong `06_IMPLEMENTATION_PLAN.md` (dùng để validate kỹ thuật trước khi build full site), không phải trang dành cho khách hàng xem.

## 3. Kế hoạch sửa — theo thứ tự ưu tiên

### Ưu tiên 0 — Phải sửa trước khi làm bất kỳ điều gì khác

| # | Việc cần làm | File liên quan |
|---|---|---|
| 1 | **Chốt một tên thương hiệu duy nhất** (Sunext, hoặc tên khung riêng nếu tách brand cho sản phẩm này — quyết định thuộc về bạn) — thay toàn bộ "Enigma", "Enigma Sunext", "Enigma Solutions, Inc." | `Header.tsx`, `Footer.tsx`, `Preloader.tsx`, layout metadata |
| 2 | **Thay `ADVANTAGES_DATA` và `CASES_DATA` bằng nội dung thật** — dùng đúng 3 case study thật (HR tuyển dụng retail -40% chi phí, AI Auditor manufacturing 99.8% độ chính xác, Content Factory B2B x5 sản lượng) đã tổng hợp trong `ai-transformation-content/00_CONTENT_PLAN.md` §3, viết lại 3 card Advantage theo đúng giọng văn Sam Ovens đã dùng cho 6 trang trụ cột, không dùng câu tiếng Anh chung chung kiểu "Cultivating Growth, Maximizing Revenue" | `src/content/data.ts` |
| 3 | **Gỡ bỏ hoặc làm thật các tuyên bố kiểm chứng được:** bỏ "SOC2 Type II" nếu chưa có chứng nhận thật; bỏ modal "Client Portal" giả lập số liệu; sửa "Next.js 14" → không nói chi tiết công nghệ cụ thể với khách hàng (không cần thiết, và dễ lỗi thời) | `Header.tsx`, `Footer.tsx` |
| 4 | **Gỡ link `/prototype` khỏi Footer công khai**, chỉ giữ route này truy cập nội bộ (không link từ bất kỳ trang public nào) | `Footer.tsx` |
| 5 | **Sửa bug Reduced Motion:** cách đúng là để `isReducedMotion()` đọc **cả hai** điều kiện — `matchMedia` HOẶC `document.documentElement.getAttribute('data-motion') === 'reduced'` — để nút bấm thủ công trong Help modal thật sự có tác dụng | `src/motion/utils/reducedMotion.ts` |

### Ưu tiên 1 — Thay ảnh sai/hỏng

| Ảnh cần thay | Nội dung đúng nên là | Nguồn |
|---|---|---|
| `advantage-card-1.jpg` (đang là "AURORA") | Ảnh minh họa card Advantage #1 — theo định hướng nghệ thuật mới, xem file `02_DINH_HUONG_HINH_ANH_CONG_NGHE_CHAU_AU.md` | Tạo lại bằng Adobe Firefly, không giữ chữ thương hiệu lạ |
| `case-3.jpg` (đang là "HYGGE CAFE") | Nếu map với case study B2B Content Factory → cảnh văn phòng marketing Việt Nam, không phải quán cà phê Bắc Âu | Dùng `vietnam-b2b-office.jpg` đã có sẵn, hoặc tạo lại đúng bối cảnh |
| `vietnam-strategy-meeting.jpg` (dashboard chữ sai) | Tạo lại, lần này **không để màn hình nào có văn bản/số liệu chi tiết trong khung hình**, hoặc blur nhẹ phần dashboard — tránh hoàn toàn rủi ro AI vẽ chữ sai đã cảnh báo trước đó nhưng chưa áp dụng | Regenerate + kiểm tra kỹ theo checklist đã có |

### Ưu tiên 2 — Polish hiệu ứng thật sự (sau khi nội dung đã đúng)

Đây là những chỗ hiệu ứng có thể tinh chỉnh thêm để "hiện đại, lean" hơn — không phải lỗi, nhưng có thể nâng cấp:

| Vị trí | Hiện tại | Đề xuất |
|---|---|---|
| `Hero.tsx` video ambient | `mix-blend-multiply` trên nền trắng — video nhân (multiply) với nền trắng dễ làm video bị nhạt/mất chi tiết tối | Thử `mix-blend-normal` với video đã được xử lý nền trong suốt sẵn, hoặc `mix-blend-darken` — cần xem trực tiếp để chọn, `multiply` trên nền sáng thường làm mất tương phản |
| `advantage.ts` — card lùi lại | Dùng `filter: brightness(0.92 / 0.85)` để tạo cảm giác "lùi vào sau" | `filter: brightness()` dựng lại toàn bộ layer, có thể tốn hiệu năng hơn và trông "xỉn màu" thay vì "lùi xa"; thử thay bằng giảm `opacity` nhẹ (0.94/0.88) kết hợp `scale` đã có sẵn — thường cho cảm giác chiều sâu tự nhiên hơn là làm tối |
| `SmoothScrollProvider.tsx` | Lenis `duration: 1.2`, dùng chung một cấu hình cho toàn site | Cân nhắc giảm nhẹ xuống `0.9–1.0` nếu cảm giác cuộn hiện tại "nặng tay" — đây là cảm nhận chủ quan, cần bạn tự thử trên máy thật để quyết định con số cuối |
| `resolveTargetElement` trong `SmoothScrollProvider.tsx` | Chuỗi fallback `#technology`→`#advantage`, `#service`→`#cases`... để tương thích ngược với id cũ từ bản demo Enigma | Sau khi đổi hẳn sang nội dung Sunext (Ưu tiên 0), nên dọn thẳng còn một bộ id duy nhất, bỏ lớp fallback — giảm rủi ro lỗi khi sửa sau này |

## 4. Không cần làm

- Không viết lại kiến trúc `motion/timelines/*` — kiến trúc đúng, chỉ nội dung nó điều khiển là sai.
- Không đổi thư viện (vẫn GSAP + ScrollTrigger + Lenis) — đúng lựa chọn theo `07_TECHNICAL_DECISIONS.md`.
- Không thêm hiệu ứng mới trước khi Ưu tiên 0 xong — thêm hiệu ứng lên nội dung sai chỉ khiến vấn đề rõ hơn, không che được.
