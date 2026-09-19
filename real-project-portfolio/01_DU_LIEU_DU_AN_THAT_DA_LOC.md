# 01 · Dữ liệu dự án thật đã lọc — từ HPG-Lead-Trainer-Profile-Casebook.docx

**Nguồn:** `/Users/hungnpv/Downloads/Sunext/Profile/HPG-Lead-Trainer-Profile-Casebook.docx` — hồ sơ năng lực cá nhân của Ông Nguyễn Phước Vĩnh Hưng (CAIO, Sunext AI), soạn kèm Đề án đào tạo chào Tập đoàn Hòa Phát (09/2026). Đã đọc toàn bộ 135 đoạn văn bản + 28 bảng, không bỏ sót.

## 0. Ba ranh giới bắt buộc giữ nguyên khi đưa dữ liệu này lên website công khai

Đây không phải khuyến nghị của tôi — chính tài liệu gốc đã tự đặt ra ba ranh giới này (trích nguyên văn), và mọi nội dung web soạn từ dữ liệu dưới đây phải tôn trọng cả ba:

1. **Ranh giới cá nhân vs công ty:** Tài liệu là hồ sơ **cá nhân** của Ông Hưng (CAIO), không phải hồ sơ dự án cấp công ty Sunext. Phần lớn dự án được mô tả là "Giảng viên chủ trì trực tiếp đứng lớp 100%". → Khi viết lại cho web, dùng đúng khung: *"Kinh nghiệm thực chiến của đội ngũ chuyên gia Sunext (dẫn dắt bởi CAIO Nguyễn Phước Vĩnh Hưng)"* — không viết thẳng "Sunext đã triển khai dự án X" nếu đó là công việc tư vấn/đào tạo cá nhân trước khi có Sunext hoặc độc lập với hợp đồng công ty.
2. **Ranh giới đào tạo minh họa vs triển khai sản xuất thật** (trích nguyên văn tài liệu, Table 21): *"Các ví dụ về AI Agent, chatbot và CRM trong hồ sơ này được sử dụng để minh họa phương pháp, tình huống thực hành... Việc phát triển, tích hợp hoặc vận hành các hệ thống này trên môi trường thực tế nằm ngoài phạm vi đào tạo hiện tại, trừ khi hai bên có thỏa thuận riêng."* → Với phần lớn các mục trong Tier 1 dưới đây, câu đúng là *"đã đào tạo/tư vấn thiết kế quy trình X"*, KHÔNG phải *"đã xây dựng và vận hành hệ thống X cho khách hàng"* — trừ 3 case đã xác nhận là triển khai thật (Vietcap Securities, và 2 case đã có trên Sunext-Website).
3. **Ranh giới không ngụ ý chứng thực thương mại** (trích nguyên văn, Table 26): *"Logo và nhãn hiệu của các tổ chức được sử dụng nhằm mục đích nhận diện và minh chứng trực quan cho mạng lưới học viên, không hàm ý quan hệ chứng thực thương mại (endorsement) độc quyền hay đại diện pháp lý."* → Không dùng logo các tổ chức này trên website Sunext như "khách hàng/đối tác chính thức" mà không xin phép — chỉ dùng dạng liệt kê tên trong câu văn ("đã đào tạo cho nhân sự từ các tổ chức như..."), không dùng logo trực quan trừ khi từng tổ chức đồng ý.

**Thêm một ranh giới tôi tự thêm, dựa trên nguyên tắc đã áp dụng xuyên suốt các lần audit trước:** một số ngành trong danh sách là lĩnh vực **nhạy cảm/quản chế** (ngân hàng, bảo hiểm, cơ quan nhà nước, lực lượng vũ trang). Trước khi đăng bất kỳ tên nào trong nhóm này lên website công khai, cần **xin phép xác nhận lại** — hồ sơ nội bộ dùng cho một đề án thẩm định (Hòa Phát xem nội bộ) có ngưỡng công khai khác hẳn một trang web marketing công khai toàn cầu.

## 1. Tier 1 — Dự án có số liệu định lượng mạnh, đủ chuẩn làm case study công khai

Lọc từ Table 13 (bảng có cột "Kết Quả & Giá Trị Đạt Được" định lượng rõ) và đối chiếu mô tả chi tiết hơn ở Table 9. Cột "Khung xưng hô đúng" áp dụng ranh giới #2 ở trên.

| Khách hàng | Ngành | Quy mô | Nội dung đã làm (đúng khung xưng hô) | Kết quả định lượng | Mức nhạy cảm |
|---|---|---|---|---|---|
| **Vinhomes (Vingroup)** | Bất động sản | 500+ nhân sự kinh doanh BĐS | Đào tạo đội ngũ **tự sản xuất** trang giới thiệu dự án, video tư vấn thực địa, kịch bản chăm sóc lại khách hàng cũ (lead reactivation), xây trợ lý ảo tư vấn dự án Vinhomes Paradise Cần Giờ | Tăng tốc độ phản hồi khách hàng, tự động hóa soạn tin truyền thông dự án (không có % cụ thể cho case này) | Thấp — đã là case đào tạo, tên thương hiệu lớn, dễ xin phép trích dẫn |
| **Vietcap Securities (VCI)** | Chứng khoán & Ngân hàng đầu tư | 30+ chuyên viên Phân tích/Nghiên cứu | **Thiết lập** (không chỉ đào tạo) hệ thống AI Multi-Agent thật: Agent thu thập dữ liệu vĩ mô, Agent đối chiếu BCTC, Agent truy vấn Second Brain; Social Listening thời gian thực | **Giảm 75% thời gian bóc tách BCTC thô; rút ngắn chu kỳ xuất bản Báo cáo Cập nhật DN từ 2 ngày xuống 3 giờ; loại bỏ hoàn toàn sai lệch số liệu cơ học** | Trung bình — định chế tài chính niêm yết, nên xác nhận trước khi trích số liệu ra ngoài |
| **Dentsu Sports Vietnam & Creative** | Agency truyền thông quốc tế | 25 chuyên viên chiến lược & Account | Chuẩn hóa quy trình AI dựng storyline pitching, phân tích insight, soạn pitch deck đấu thầu | **Rút ngắn 65% thời gian phát triển proposal đấu thầu**, nâng tỷ lệ chốt tài trợ thể thao | Thấp |
| **Trương Đoàn Marketing Group** | Marketing & Activation agency | 30+ nhân sự Account/Ops/Planning | Đào tạo tóm tắt hợp đồng sự kiện bằng AI, chuyển brief → Production Brief, tự động hóa QC ảnh activation | **Tiết kiệm 70% thời gian duyệt ảnh thực địa; giảm thời gian phản hồi brief từ 3 ngày còn 4 giờ** | Thấp |
| **Vietcombank** | Ngân hàng thương mại | 40 cán bộ quản lý & chuyên viên dữ liệu | Đào tạo rà soát pháp lý hợp đồng tín dụng, bóc tách BCTC doanh nghiệp bằng AI, trợ lý AI phân tích hồ sơ vay (minh họa đào tạo) | **Giảm 60% thời gian xử lý hồ sơ tín dụng doanh nghiệp** | **Cao — ngân hàng, bắt buộc xin phép trước khi nêu tên công khai** |
| **BIDV** | Ngân hàng thương mại | 45 cán bộ tín dụng & bán lẻ | Đào tạo quy trình AI hỗ trợ rà soát điều kiện cấp tín dụng, thẩm định hồ sơ vay | Chuẩn hóa báo cáo thẩm định, nâng năng suất tác nghiệp (không có % cụ thể) | **Cao — ngân hàng, bắt buộc xin phép** |
| **Dai-ichi Life Vietnam** | Bảo hiểm nhân thọ | 80+ tư vấn viên tài chính | AI for Consultants: cá nhân hóa kịch bản tư vấn bảo hiểm, giải đáp điều khoản hợp đồng | **Tăng 40% tỷ lệ hẹn gặp khách hàng thành công** | **Cao — bảo hiểm, xin phép trước** |
| **VNPT VinaPhone** | Viễn thông & dịch vụ số | 50 nhân sự marketing/truyền thông số | AI Content & Video Automation: sản xuất video ngắn giới thiệu gói cước, banner đa kênh | **Tăng gấp 3 lần sản lượng nội dung truyền thông số** | Thấp |
| **Smartland Bất Động Sản** | Phân phối BĐS cao cấp | 60 chuyên viên môi giới VIP | AI Agentics & Automation quản lý lead, chăm sóc khách hàng tự động | **Tự động hóa 80% khâu tương tác ban đầu với khách hàng quan tâm dự án** | Thấp |
| **Phương Trường An Group** | BĐS thương mại & đất nền | ~300 nhân sự kinh doanh, Bình Dương | Đào tạo quay dựng video thực địa bằng AI, tự sản xuất tin bài quảng cáo trên điện thoại | **Tăng 200% sản lượng video hiện trường do nhân viên tự sản xuất** | Thấp |
| **Đài Truyền Hình TP.HCM (HTV)** | Truyền thông & truyền hình | 30-35 biên tập viên/kỹ thuật viên | AI đồ họa sân khấu ảo, tự động hóa trailer phát sóng | **Rút ngắn 50% thời gian sản xuất đồ họa trường quay** | Thấp — đã có báo chí đưa tin công khai (DXCenter, SGGP) |
| **Đại học FPT (FPTU)** | Giáo dục đại học | Toàn bộ GV TP.HCM + hybrid HN (chuẩn Bậc 6); SV chuyên đề; Tech Fest 10.000+ người | Đào tạo nâng bậc GV chuẩn Bậc 6; chuyên đề "Critical Thinking in the AI Era"; MC ảo AI + AI Agents (n8n) tại Tech Fest 2 năm liền | Mùa 2025: ~100 DN tham gia; mùa 2026: **10.000+ lượt người, ~60 DN hợp tác** (đã xác nhận bởi DXCenter, VOH) | Thấp — đã công khai qua báo chí (SGGP, VOH, VOV, Tiền Phong) |
| **Prudential Vietnam** | Bảo hiểm nhân thọ | Mạng lưới tư vấn viên toàn quốc (hybrid) | Tư vấn kiến trúc Trợ lý AI nội bộ tra cứu điều khoản/quyền lợi; đào tạo diện rộng | Chuẩn hóa quy trình tư vấn số (không có % cụ thể cho case tổng, xem thêm case Dai-ichi có % rõ hơn) | **Cao — bảo hiểm, xin phép trước** |
| **Trung Sơn Pharma** | Chuỗi bán lẻ dược phẩm | Từ mốc 24 điểm bán, giai đoạn 2019–2022 | Tư vấn thiết kế hệ thống Omni-channel Marketing + CRM chuỗi nhà thuốc | Không có % — chỉ có mô tả định tính | Thấp |

## 2. Tier 2 — Danh sách rộng, dùng cho trang "học viên/khách hàng tiêu biểu" (không phải case study đầy đủ)

Theo đúng 7 nhóm ngành trong tài liệu gốc (Table 17), **chỉ dùng dạng liệt kê tên trong câu văn, không dùng logo** trừ khi xin phép (ranh giới #3 ở mục 0):

| Nhóm ngành | Tổ chức (chỉ nêu tên, không gắn logo nếu chưa xin phép) |
|---|---|
| Ngân hàng – Bảo hiểm – Chứng khoán | Vietcombank, BIDV, Prudential, Dai-ichi Life, Vietcap Securities |
| Công nghệ – Viễn thông – Giáo dục | Đại học FPT, VNPT VinaPhone, FSI, Droppii Commerce |
| BĐS – Xây dựng – Thép VLXD – Năng lượng | Vinhomes, Smartland, Phương Trường An, Thắng Lợi Group, Huỳnh Anh Group, PV Power |
| FMCG – F&B – Dược phẩm | Gấu Đỏ, Cây Thị, Yến Việt, Dr. Muối, VAG International (Poêmy), Trung Sơn Pharma, Hoàng Đức Pharma, Agrilong, Big Family, Maison Vie |
| Truyền thông – Marketing – Giáo dục | Dentsu Sports & Creative, HTV, Trương Đoàn Marketing, UEF, Nguyễn Tất Thành (NTTU) |
| Thương mại – Phân phối – Logistics | VACS, Mitsubishi Motors, QH Distribution, PTEXIM Corp, Let's Go Taxi, JTB-TNT |
| Cơ quan Nhà nước – Hiệp hội | *(nhóm nhạy cảm cao nhất — khuyến nghị KHÔNG đưa lên web công khai mà không xin phép rõ ràng bằng văn bản)* |

**Danh sách "học viên đến từ các thương hiệu lớn" (Table 24) — mức độ xác thực thấp hơn** (đây là danh sách học viên tham gia khóa AI in Marketing công khai, không phải hợp đồng riêng với từng công ty): Shopee, Lazada, Tiki, Unilever, P&G, Nestlé, Vinamilk, Masan Consumer, Ogilvy, Mindshare, GroupM, TBWA, Hakuhodo, Leo Burnett, Publicis, VinFast, Vietjet Air, adidas, Carlsberg, La Vie, Golden Gate Group... → **Chỉ nên dùng dạng "học viên từ các thương hiệu như..." rất thận trọng, không trình bày như case study hay khách hàng doanh nghiệp**, vì bản chất là cá nhân từ các công ty đó đi học một khóa mở, không phải công ty đó ký hợp đồng với Sunext.

## 3. Đối chiếu với case study đã có sẵn trên Sunext-Website

3 case study thật hiện có trên site (`toi-uu-chi-phi-tuyen-dung-hr-ai`, `ai-auditor-manufacturing`, `content-factory-b2b-marketing`) **không trùng** với bất kỳ dự án nào trong tài liệu này — đây là 4 nguồn dữ liệu thật độc lập, không phải bản kể lại của cùng một dự án. Tốt: nghĩa là kho case study thật của Sunext lớn hơn nhiều so với 3 case đang publish, không cần bịa thêm gì nữa (đúng như đã khuyến nghị ở đợt audit trước).

## 4. Việc cần làm trước khi dùng bất kỳ tên nào ở Tier 1/Tier 2

1. Xác nhận với chính Ông Hưng: dự án nào là **hợp đồng ký dưới pháp nhân Sunext AI** vs dự án cá nhân trước/độc lập với Sunext — quyết định câu chữ theo đúng ranh giới #1.
2. Với nhóm "Cao" (ngân hàng, bảo hiểm): liên hệ xin phép bằng văn bản trước khi nêu tên công khai trên web — khác hẳn việc nêu trong một hồ sơ nội bộ gửi Hòa Phát thẩm định.
3. Với nhóm cơ quan nhà nước/lực lượng vũ trang: khuyến nghị không đưa lên website marketing công khai.
4. Với các số liệu % — xác nhận lại đây là số liệu đã được khách hàng đồng ý công bố hay chỉ là số nội bộ dùng thẩm định riêng cho Hòa Phát.
