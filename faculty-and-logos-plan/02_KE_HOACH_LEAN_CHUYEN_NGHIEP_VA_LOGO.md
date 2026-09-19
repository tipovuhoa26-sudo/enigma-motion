# 02 · Kế hoạch trình bày: Lean + Chuyên nghiệp + Đủ thông tin nhất + Logo

## 0. Giải quyết mâu thuẫn "lean" vs "đủ thông tin nhất" trước khi bàn chi tiết

Đây là hai yêu cầu tưởng chừng đối nghịch nhưng không phải vậy — chuẩn thiết kế B2B nghiêm túc (đã dẫn chứng ở `sunext-website-upgrade-plan/01...md`: Linear.app, Stripe) giải quyết bằng **một nguyên tắc duy nhất: progressive disclosure (bộc lộ thông tin theo lớp)**.

- **Lớp 1 — Lưới duyệt nhanh (browse layer):** thẻ nhỏ, đồng nhất kích thước, logo/tên + 1 dòng mô tả. Đây là lớp "lean" — mắt lướt qua trong 2 giây, không rối.
- **Lớp 2 — Trang chi tiết (depth layer):** bio đầy đủ, case study đầy đủ, trang ngành đầy đủ. Đây là lớp "đủ thông tin nhất" — ai cần đào sâu thì bấm vào.

**Không bao giờ cố nhồi cả 40 tổ chức + 11 giảng viên + 8 case study vào một trang duy nhất với đầy đủ chi tiết** — đó là công thức chắc chắn tạo ra một trang vừa rối vừa chậm tải. Quy tắc: **mỗi trang chỉ có một lớp thông tin sâu tại một thời điểm.**

## 1. Kế hoạch cụ thể cho trang Khách hàng & Đối tác (`/khach-hang-doi-tac/`)

### 1.1 Bố cục đề xuất (đã có 7 nhóm ngành từ `real-project-portfolio/01`, giờ thêm lớp logo)

```
[Hero ngắn: 1 câu định vị + con số tổng quan]
  "Đã đồng hành đào tạo & tư vấn AI cho 45+ dự án thuộc 7 nhóm ngành kinh tế"

[Bộ lọc theo ngành — 7 nút bấm, dạng pill, giống nav hiện có]

[Lưới logo — Lớp 1, LEAN]
  Grid đều 6-8 cột desktop, logo grayscale mặc định, chuyển màu khi hover
  Mỗi ô: logo + tên tổ chức, không có mô tả (mô tả ở Lớp 2)
  Click vào ô → nếu có case study đầy đủ, dẫn tới /case-studies/[slug]
             → nếu không có case study, mở modal/tooltip 1 dòng mô tả ngắn

[Dòng miễn trừ trách nhiệm — bắt buộc, đặt cuối trang, chữ nhỏ nhưng rõ]
  "Tên và logo các tổ chức được nêu nhằm mục đích minh họa mạng lưới học viên/
  dự án đã tham gia đào tạo, không hàm ý quan hệ đối tác hoặc chứng thực
  thương mại chính thức."
```

### 1.2 Vì sao grayscale-đến-màu-khi-hover là lựa chọn đúng cho "lean"

Đây là pattern chuẩn của các trang B2B nghiêm túc (chuẩn đã dẫn chứng: Stripe customer wall) — lý do kỹ thuật & thẩm mỹ:
- **Lean:** logo xám đồng nhất không tạo tiếng ồn thị giác dù xếp 40 cái cạnh nhau — nếu để màu gốc, một hàng logo đủ màu sắc (đỏ Coca-Cola, xanh Facebook-kiểu, vàng...) sẽ phá vỡ hoàn toàn bảng màu tối giản đã thiết lập cho toàn site.
- **Chuyên nghiệp:** đồng nhất hóa bằng CSS `filter: grayscale(1)` là kỹ thuật rẻ tiền hiệu năng (không cần xử lý ảnh thủ công), chuyển màu mượt khi hover đúng tinh thần "hiệu ứng lean" đã lập trong `enigma-motion-spec` (transform+opacity/filter only, không cần JS).
- **Đủ thông tin:** vẫn hiển thị đủ 40+ logo trong một màn hình cuộn vừa phải nhờ kích thước đồng nhất nhỏ gọn.

## 2. Kế hoạch nguồn logo — cụ thể, có phân loại rủi ro

### 2.1 Ba nguồn logo theo mức độ ưu tiên

| Nguồn | Khi nào dùng | Rủi ro |
|---|---|---|
| **Trang "Media Kit" / "Brand Assets" / "Báo chí" chính thức của từng tổ chức** | Ưu tiên số 1 — hầu hết công ty niêm yết, tập đoàn lớn (Vietcombank, BIDV, VNPT, FPT, Vinhomes, Vietcap...) đều có trang investor-relations hoặc newsroom cho tải logo chính thức | Thấp nhất — đây là bản họ chủ động công bố để bên thứ ba dùng đúng chuẩn |
| **Wikipedia Commons (file SVG logo, giấy phép ghi rõ)** | Khi tổ chức không có media kit riêng dễ tìm | Trung bình — cần đọc đúng điều khoản giấy phép của từng file (nhiều logo trên Commons là "fair use" cho mục đích nhận diện, không phải để tái sử dụng tự do hoàn toàn — vẫn nên ưu tiên nguồn 1 |
| **Tự đánh máy lại tên bằng kiểu chữ chuẩn (text-based, không dùng logo hình)** | Khi không tìm được logo chính thức, hoặc tổ chức thuộc nhóm nhạy cảm chưa xin phép xong | An toàn nhất — đây chính là cách `khach-hang-doi-tac/page.tsx` đang làm, giữ nguyên cho tới khi có logo chính thức |

**Không dùng:** công cụ tự động kiểu "Clearbit Logo API/Brandfetch" lấy logo qua domain — các dịch vụ này cào logo từ nhiều nguồn không kiểm soát được giấy phép, rủi ro cao hơn cả Wikipedia Commons, không phù hợp một website đang cố gắng chuẩn hóa tính chính xác/tuân thủ sau nhiều đợt sửa lỗi trước đó.

### 2.2 Việc cần làm theo lô, tránh làm tràn lan cùng lúc

| Lô | Tổ chức | Vì sao làm trước |
|---|---|---|
| Lô 1 — Thấp rủi ro, tìm dễ | Vinhomes, FPT University, VNPT VinaPhone, Dentsu, HTV, Đài Truyền hình, Đại học UEF/NTTU | Đều là tổ chức lớn có media kit công khai, không cần xin phép riêng để dùng logo nhận diện học viên |
| Lô 2 — Cần xin phép trước khi dùng LOGO (dù tên chữ có thể đã ổn) | Vietcombank, BIDV, Prudential, Dai-ichi Life, Vietcap Securities | Nhóm tài chính/bảo hiểm — dùng logo (mạnh hơn chữ) cần xác nhận bằng văn bản riêng, theo đúng mức độ nhạy cảm đã phân loại ở `real-project-portfolio/01` |
| Lô 3 — Không dùng logo cho tới khi có xác nhận | Cơ quan nhà nước, lực lượng vũ trang | Giữ nguyên khuyến nghị cũ: không đưa nhóm này lên web công khai |

## 3. Kế hoạch trang Đội ngũ Giảng viên (mở rộng `/doi-ngu/`)

Dữ liệu đã lọc PII ở file `01_HO_SO_GIANG_VIEN_AN_TOAN_CONG_KHAI.md`. Bố cục theo đúng nguyên tắc lớp ở mục 0:

```
[Trang /doi-ngu/ hiện có — giữ nguyên phần CAIO đầu trang]

[Thêm mới: "Mạng lưới Giảng viên Đa lĩnh vực" — Lớp 1]
  5 nhóm thẻ theo 5 khối chuyên môn (Marketing, Vận hành/TMĐT, Tài chính,
  Nhân sự, Điều hành) — mỗi thẻ: ảnh chân dung (nếu có, xin phép trước) +
  tên + chức danh + 1 dòng điểm nhấn (vd: "Nguyên Kế toán trưởng HOSE")

[Click vào từng thẻ → Lớp 2]
  Trang con /doi-ngu/[slug] hoặc modal chi tiết — bio đầy đủ hơn, vẫn theo
  đúng bản đã lọc PII, không phải bản gốc nội bộ
```

**Không làm:** không đăng cả 11 bio đầy đủ (dài, nhiều chi tiết nghề nghiệp) thẳng trên một trang — đúng nguyên tắc lean, chỉ hiện thẻ tóm tắt, chi tiết ở lớp sau.

## 4. Trình tự thực hiện tổng hợp

1. Xin xác nhận công khai từ 11 giảng viên (bắt buộc, chặn trước việc viết bio public).
2. Thu thập logo Lô 1 (7-8 tổ chức rủi ro thấp) — làm trước, thấy kết quả nhanh.
3. Dựng lưới logo grayscale-hover cho trang Khách hàng & Đối tác với Lô 1, giữ dạng chữ cho các tổ chức còn lại.
4. Gửi xin phép logo/công bố cho Lô 2 (ngân hàng/bảo hiểm) — song song, không chặn việc khác.
5. Dựng phần "Mạng lưới Giảng viên" trên trang Đội ngũ với dữ liệu đã lọc PII, chờ xác nhận từng người trước khi bấm publish.
6. Viết chuyện kể 6 nhịp đầy đủ cho 5 trang case study mới (việc còn thiếu lớn nhất đã nêu ở `site-fix-plan/05`) — nên làm song song vì đây là nội dung Lớp 2 của chính các case study đang được gắn logo ở bước 3.

**Việc chưa làm:** chưa tải/tạo file logo nào, chưa sửa code trang nào — đây là kế hoạch nguồn lực + trình tự, cần bạn (hoặc người phụ trách quan hệ đối tác) thực hiện bước xin phép trước khi tôi hoặc coding agent dựng giao diện.
