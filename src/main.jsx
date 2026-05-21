import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Menu, MoveRight } from "lucide-react";
import "./styles.css";

const services = [
  {
    title: "Phong thủy hiện đại",
    body: "Tư vấn bố cục, ánh sáng, thông gió và dòng di chuyển theo tinh thần phong thủy khoa học, phù hợp nhịp sống hiện đại.",
  },
  {
    title: "Nội thất đa phong cách",
    body: "Thiết kế nội thất theo gu sống riêng: tối giản, nhiệt đới, hiện đại, boutique hoặc pha trộn nhiều lớp vật liệu.",
  },
  {
    title: "CGI / phối cảnh 3D",
    body: "Diễn họa không gian bằng hình ảnh 3D rõ vật liệu, ánh sáng và cảm xúc để khách hàng hình dung trước khi thi công.",
  },
  {
    title: "Thi công trọn gói",
    body: "Quản lý thi công từ hồ sơ, vật liệu, xưởng sản xuất đến hoàn thiện công trình với tiến độ và ngân sách rõ ràng.",
  },
];

const projects = [
  {
    number: "01",
    name: "Căn hộ hợp phong thủy",
    type: services[0].title,
    place: "TP. Hồ Chí Minh",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "02",
    name: "Nhà phố đa phong cách",
    type: services[1].title,
    place: "Đà Nẵng",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "03",
    name: "Bộ phối cảnh biệt thự",
    type: services[2].title,
    place: "Hà Nội",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "04",
    name: "Căn hộ bàn giao trọn gói",
    type: services[3].title,
    place: "Nha Trang",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "05",
    name: "Studio sống linh hoạt",
    type: services[1].title,
    place: "Huế",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "06",
    name: "Nhà phố hoàn thiện chìa khóa trao tay",
    type: services[3].title,
    place: "TP. Hồ Chí Minh",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "07",
    name: "Căn hộ cải tạo nhanh",
    type: services[3].title,
    place: "Hà Nội",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "08",
    name: "Penthouse bàn giao trọn gói",
    type: services[3].title,
    place: "Đà Nẵng",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1800&q=90",
  },
];

const process = [
  ["01", "Lắng nghe", "Bắt đầu bằng sự tĩnh lặng: đọc khu đất, bản brief và nhịp sống sẽ hiện diện trong không gian."],
  ["02", "Phác thảo", "Trước khi đi vào kỹ thuật số, ý tưởng được thử bằng mô hình, nét vẽ tay và những lớp vật liệu."],
  ["03", "Tinh chỉnh", "Từng chi tiết được đặt câu hỏi: ánh sáng, tỷ lệ, chất liệu và cảm giác qua nhiều thời điểm."],
  ["04", "Hiện thực", "Chúng tôi theo sát công trường đến khi công trình hoàn thiện với cảm giác đúng như nó phải có."],
];

const featuredProjects = [
  {
    title: "Phong thủy hiện đại, không mê tín.",
    eyebrow: "Dịch vụ nổi bật — Phong thủy hiện đại",
    body:
      "Chúng tôi đọc hướng nắng, hướng gió, thói quen sinh hoạt và tỷ lệ không gian để tạo nên bố cục cân bằng, thoáng khí và dễ sống.",
    image: projects[2].image,
    imageAlt: "Không gian nội thất hiện đại",
  },
  {
    title: "Một gu sống, nhiều lớp phong cách.",
    eyebrow: "Dịch vụ nổi bật — Nội thất đa phong cách",
    body:
      "Từ tối giản, hiện đại đến nhiệt đới hoặc boutique, mỗi concept được phát triển theo cá tính gia chủ, vật liệu thật và ngân sách rõ ràng.",
    image: projects[3].image,
    imageAlt: "Nội thất nhiều lớp vật liệu",
    reverse: true,
  },
  {
    title: "Nhìn thấy không gian trước khi bắt đầu.",
    eyebrow: "Dịch vụ nổi bật — CGI / phối cảnh 3D",
    body:
      "Phối cảnh 3D giúp kiểm chứng ánh sáng, màu sắc, vật liệu và cảm giác tổng thể trước khi bước vào sản xuất và thi công.",
    image: projects[0].image,
    imageAlt: "Phối cảnh 3D nội thất",
  },
];

const selectedWorks = [
  {
    title: "Căn hộ hợp phong thủy",
    meta: "TP. Hồ Chí Minh / 2026",
    largeImage: projects[0].image,
    smallImage: projects[1].image,
  },
  {
    title: "Nhà phố đa phong cách",
    meta: "Đà Nẵng / 2025",
    largeImage: projects[3].image,
    smallImage: projects[4].image,
    reverse: true,
  },
  {
    title: "Bộ phối cảnh biệt thự",
    meta: "Hà Nội / 2025",
    largeImage: projects[2].image,
    smallImage: projects[0].image,
  },
  {
    title: "Nhà phố hoàn thiện chìa khóa trao tay",
    meta: "TP. Hồ Chí Minh / 2024",
    largeImage: projects[5].image,
    smallImage: projects[6].image,
    reverse: true,
  },
];

const homeProjectRows = projects.map((project) => ({
  ...project,
  tags: [project.type, project.place],
}));

const teamMembers = [
  {
    name: "Minh Tran",
    role: "Đồng sáng lập",
    focus: "Định hướng concept",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Linh Nguyen",
    role: "Cộng sự thiết kế",
    focus: "Nội thất đa phong cách",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "An Hoang",
    role: "Diễn họa 3D",
    focus: "CGI / phối cảnh 3D",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Mai Pham",
    role: "Quản lý thi công",
    focus: "Thi công trọn gói",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
  },
];

const processDetails = [
  {
    number: "01",
    title: "Lắng nghe",
    intro: "Bắt đầu bằng sự tĩnh lặng: hiểu khu đất, nhu cầu và bối cảnh xung quanh.",
    caption:
      "Mỗi dự án khởi đầu bằng những buổi trao đổi sâu sắc, chúng tôi quan sát ánh sáng, âm thanh và chuyển động trước khi vẽ.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "02",
    title: "Phác thảo",
    intro: "Trước kỹ thuật số là bàn tay. Ý tưởng được thử bằng mô hình, giấy, than và đường nét.",
    caption:
      "Quá trình làm việc tay giúp chúng tôi khám phá sâu các mối liên hệ không gian, tạo nền tảng vững chắc cho thiết kế số.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "03",
    title: "Tinh chỉnh",
    intro: "Mỗi chi tiết được đặt câu hỏi: vật liệu, tỷ lệ và ánh sáng qua từng mùa.",
    caption:
      "Mẫu vật liệu thực tế và mô phỏng ánh sáng giúp chúng tôi kiểm chứng và hoàn thiện thiết kế.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "04",
    title: "Hiện thực",
    intro: "Chúng tôi theo sát công trường từ mẻ đổ đầu tiên đến hoàn thiện cuối cùng.",
    caption:
      "Sự hiện diện của kiến trúc sư và đội ngũ thi công đảm bảo mỗi chi tiết được thực hiện đúng ý tưởng, tạo nên không gian sống tự nhiên.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=90",
  },
];

function SiteFooter() {
  return (
    <footer className="site-close" id="contact">
      <section className="close-grid">
        <div className="close-cell close-process">
          <h2>Quy trình</h2>
          <p>Chúng tôi bắt đầu bằng nhu cầu sống thật: thói quen, ngân sách, hiện trạng và cảm giác mà gia chủ muốn giữ lại.</p>
          <p>Từ tư vấn phong thủy, concept nội thất, phối cảnh 3D đến thi công, mọi bước được nối liền để hạn chế sai lệch.</p>
        </div>

        <div className="close-cell close-services">
          <h2>Dịch vụ</h2>
          <ul>
            {services.map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div className="close-cell close-recognition">
          <h2>Dấu mốc</h2>
          <div className="stat-grid">
            <span><strong>18</strong>Dự án</span>
            <span><strong>12</strong>Năm</span>
            <span><strong>21</strong>Giải thưởng</span>
            <span><strong>05</strong>Thành phố</span>
          </div>
        </div>

        <div className="close-cell close-contact">
          <h2>Liên hệ</h2>
          <address>
            <a href="mailto:hello@chamgroup.vn">hello@chamgroup.vn</a>
            <a href="tel:+842800000000">+84 28 0000 0000</a>
            <span>Quận 1, TP. Hồ Chí Minh</span>
          </address>
          <a className="new-enquiry" href="mailto:hello@chamgroup.vn">
            Gửi yêu cầu <MoveRight size={18} />
          </a>
        </div>
      </section>

      <section className="footer-bottom">
        <span>CHAM GROUP © 2026</span>
        <span>Phong thủy · Nội thất · CGI · Thi công</span>
        <span>
          <a href="/">X</a>
          <a href="/">LinkedIn</a>
          <a href="/">Behance</a>
        </span>
      </section>
    </footer>
  );
}

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("Tất cả");

  const filteredSelectedWorks = selectedWorks.filter(work => {
    if (activeFilter === "Tất cả") return true;
    if (work.title === "Căn hộ hợp phong thủy" && activeFilter === services[0].title) return true;
    if (work.title === "Nhà phố đa phong cách" && activeFilter === services[1].title) return true;
    if (work.title === "Bộ phối cảnh biệt thự" && activeFilter === services[2].title) return true;
    if (work.title === "Nhà phố hoàn thiện chìa khóa trao tay" && activeFilter === services[3].title) return true;
    return false;
  });

  return (
    <>
      <section className="projects-intro reveal-up">
        <p>Dự án</p>
        <h1>Dự án chọn lọc.</h1>
        <p>
          Một tuyển chọn các dự án phong thủy, nội thất, phối cảnh 3D và thi công
          được phát triển theo nhu cầu sống thật của từng gia chủ.
        </p>
      </section>

      <section className="project-filters reveal-up" aria-label="Bộ lọc dự án">
        {["Tất cả", ...services.map((service) => service.title)].map((filter) => (
          <button 
            className={activeFilter === filter ? "active" : ""} 
            type="button" 
            key={filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </section>

      <section className="selected projects-gallery">
        <div className="selected-gallery">
          {filteredSelectedWorks.map((work) => (
            <article className={`work-pair ${work.reverse ? "work-pair-reverse" : ""}`} key={work.title}>
              <a className="work-tile work-tile-large" href="/project/koan-house">
                <img src={work.largeImage} alt={work.title} />
                <span className="work-caption">
                  <strong>{work.title}</strong>
                  <small>{work.meta}</small>
                </span>
              </a>
              <a className="work-tile work-tile-small" href="/project/koan-house">
                <img src={work.smallImage} alt={`Chi tiết ${work.title}`} />
                <span className="work-caption">
                  <strong>{work.title}</strong>
                  <small>{work.meta}</small>
                </span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

function ProcessPage() {
  return (
    <>
      <section className="process-page-intro reveal-up">
        <p>Quy trình</p>
        <h1>Cách chúng tôi làm việc.</h1>
        <p>
          Quy trình của chúng tôi không tuyến tính. Mỗi giai đoạn soi sáng cho giai đoạn kế tiếp,
          và đôi khi quay lại điểm bắt đầu để làm rõ điều cốt lõi.
        </p>
      </section>

      <section className="process-hero-image reveal-up">
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=90"
          alt="Đội ngũ xem bản vẽ và phối cảnh nội thất"
        />
      </section>

      <section className="process-steps">
        {processDetails.map((step) => (
          <article className="process-step" data-process-section key={step.number}>
            <div className="process-step-copy">
              <div className="process-step-copy-inner" data-process-text>
                <span>{step.number}</span>
                <h2>{step.title}</h2>
                <p>{step.intro}</p>
              </div>
            </div>
            <div className="process-step-media">
              <img className="reveal-up" src={step.image} alt={`${step.title} trong quy trình`} />
              <p className="reveal-up">{step.caption}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="ready-section reveal-up">
        <h2>Sẵn sàng bắt đầu?</h2>
        <p>Mỗi dự án bắt đầu bằng một cuộc trò chuyện. Hãy kể cho chúng tôi về tầm nhìn của bạn.</p>
        <a className="outline-link" href="/contact">
          Liên hệ ngay <MoveRight size={18} />
        </a>
      </section>
      <SiteFooter />
    </>
  );
}

function ArticleDetailPage() {
  return (
    <>
      <section className="project-detail-hero reveal-up">
        <img
          src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2200&q=90"
          alt="Phong thủy kiến trúc"
        />
        <div className="project-detail-header-overlay">
          <div className="project-detail-kicker">CHUYÊN MỤC · KIẾN THỨC · 2026</div>
          <h1>Phong thủy kiến trúc hiện đại khác mê tín như thế nào?</h1>
          <p className="project-detail-lead">
            Sự cân bằng của ánh sáng, thông gió và tỷ lệ không gian là nền tảng của phong thủy khoa học, không phải những giáo điều cứng nhắc.
          </p>
        </div>
      </section>

      <section className="project-detail-content">
        <div className="project-detail-main">
          <div className="project-text-block reveal-up">
            <h3>Bản chất của Phong thủy</h3>
            <p>
              Từ xa xưa, phong thủy (gió và nước) thực chất là sự quan sát tinh tế về môi trường sống. Người xưa đúc kết cách xây nhà để tránh gió độc, đón nắng ấm, và đảm bảo nguồn nước sạch. Trong kiến trúc hiện đại, phong thủy là vật lý kiến trúc: là việc tổ chức không gian sao cho vi khí hậu trong nhà luôn ở mức tối ưu.
            </p>
            <p>
              Sự nhầm lẫn lớn nhất hiện nay là biến phong thủy thành một hệ thống tín ngưỡng cứng nhắc, nơi con người phụ thuộc vào những vật phẩm may mắn thay vì cải thiện chất lượng cốt lõi của không gian sống.
            </p>
          </div>

          <div className="project-text-block reveal-up">
            <h3>Khí (Năng lượng) là Thông gió tự nhiên</h3>
            <p>
              Khái niệm "Tụ khí" hay "Tán khí" thực chất nói về luồng không khí di chuyển trong nhà. Một ngôi nhà "tụ khí" tốt là nơi không khí tươi được luân chuyển đều đặn, không bị quẩn (gây ngột ngạt) và không bị hút tuột đi quá nhanh (gây gió lùa). 
            </p>
            <p>
              Thay vì dùng bình phong hay linh vật để cản "sát khí", kiến trúc hiện đại giải quyết bằng cách tính toán hướng gió, bố trí hệ thống lam chắn, cửa đón gió (inlet) và cửa thoát gió (outlet) hợp lý dựa trên biểu đồ nhiệt đới.
            </p>
          </div>

          <div className="project-text-block reveal-up">
            <h3>Ánh sáng và Nhịp sinh học</h3>
            <p>
              "Minh đường tụ thủy" không chỉ là hồ nước trước nhà. Nó ám chỉ một không gian mở phía trước để đón nhận ánh sáng phản xạ, giúp chiếu sáng sâu vào công trình mà không gây chói. Ánh sáng tự nhiên điều hòa nhịp sinh học của con người (Circadian rhythm), trực tiếp ảnh hưởng đến chất lượng giấc ngủ và tâm trạng.
            </p>
          </div>

          <div className="project-text-block reveal-up">
            <h3>Kết luận</h3>
            <p>
              Phong thủy không phải là sự mê tín áp đặt con người. Phong thủy chân chính là sự thấu hiểu và tôn trọng bối cảnh tự nhiên, từ đó kiến tạo nên những "ngưỡng chạm" tĩnh lặng — nơi con người, vật liệu và môi trường giao hòa một cách êm ái.
            </p>
          </div>
        </div>

        <aside className="project-detail-meta reveal-up">
          <div className="meta-item">
            <span className="meta-label">CHUYÊN MỤC</span>
            <span className="meta-value">Kiến thức</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">TÁC GIẢ</span>
            <span className="meta-value">Minh Tran</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">NGÀY</span>
            <span className="meta-value">Tháng 10, 2026</span>
          </div>
        </aside>
      </section>

      <SiteFooter />
    </>
  );
}

function ArticlesPage() {
  return (
    <>
      <section className="projects-intro reveal-up">
        <p>Góc nhìn</p>
        <h1>Bài Viết.</h1>
        <p>
          Những suy nghĩ, góc nhìn và nghiên cứu của chúng tôi về kiến trúc, không gian và môi trường sống.
        </p>
      </section>

      <section className="projects-table" id="article-list">
        <a className="projects-table-row reveal-up" href="/article/phong-thuy-kien-truc">
          <span>01</span>
          <strong>Phong thủy kiến trúc hiện đại khác mê tín như thế nào?</strong>
          <em>Kiến thức</em>
          <small>Minh Tran</small>
          <time>Tháng 10, 2026</time>
        </a>
        <a className="projects-table-row reveal-up" href="/article/phong-thuy-kien-truc">
          <span>02</span>
          <strong>Sự tĩnh lặng của vật liệu thô: Bê tông trần và Gỗ tự nhiên</strong>
          <em>Vật liệu</em>
          <small>Linh Nguyen</small>
          <time>Tháng 9, 2026</time>
        </a>
        <a className="projects-table-row reveal-up" href="/article/phong-thuy-kien-truc">
          <span>03</span>
          <strong>Thiết kế ánh sáng gián tiếp trong không gian nhiệt đới ẩm</strong>
          <em>Nghiên cứu</em>
          <small>An Hoang</small>
          <time>Tháng 8, 2026</time>
        </a>
      </section>

      <SiteFooter />
    </>
  );
}

function ProjectDetailPage() {
  return (
    <>
      <section className="project-detail-hero reveal-up">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90"
          alt="Căn hộ hợp phong thủy"
        />
        <div className="project-detail-header-overlay">
          <div className="project-detail-kicker">PHONG THỦY HIỆN ĐẠI · TP. HỒ CHÍ MINH · 2026</div>
          <h1>Căn hộ hợp phong thủy</h1>
          <p className="project-detail-lead">
            Một không gian sống được cân bằng bằng ánh sáng, thông gió, dòng di chuyển và tỷ lệ nội thất.
          </p>
        </div>
      </section>

      <section className="project-detail-content">
        <div className="project-detail-main">
          <div className="project-text-block reveal-up">
            <h3>Tổng quan</h3>
            <p>
              Dự án bắt đầu từ mong muốn cải thiện cảm giác sống trong căn hộ hiện hữu: nhiều ánh sáng hơn,
              thông gió tốt hơn và bố cục rõ ràng hơn cho sinh hoạt hằng ngày.
            </p>
            <p>
              Thay vì áp đặt những quy tắc mê tín, chúng tôi đọc hiện trạng bằng phong thủy hiện đại:
              hướng nắng, hướng gió, điểm tụ sinh hoạt, thói quen gia chủ và cảm giác khi bước vào nhà.
            </p>
          </div>

          <div className="project-text-block reveal-up">
            <h3>Giải pháp</h3>
            <p>
              Khu vực vào nhà được tiết chế để tạo khoảng chuyển tiếp nhẹ, phòng khách mở hơn để đón sáng,
              còn bếp và bàn ăn được tổ chức lại để dòng di chuyển không bị cắt ngang.
            </p>
            <p>
              Các điểm lưu trữ được giấu vào hệ tủ phẳng, giúp căn hộ gọn hơn mà vẫn giữ đủ công năng cho gia đình.
            </p>
            <p>
              Bảng màu trung tính, gỗ ấm và ánh sáng gián tiếp tạo cảm giác ổn định, dễ nghỉ ngơi và không bị nặng về trang trí.
            </p>
          </div>

          <div className="project-text-block reveal-up">
            <h3>Vật liệu</h3>
            <p>
              Vật liệu được chọn theo tiêu chí dễ bảo trì, hợp khí hậu và có cảm giác chạm tốt: gỗ veneer,
              đá nhân tạo, sơn khoáng và vải bọc màu trầm.
            </p>
            <p>
              Mỗi bề mặt được kiểm tra trong phối cảnh 3D trước khi chốt để đảm bảo màu sắc, ánh sáng và ngân sách đi cùng nhau.
            </p>
          </div>

          <div className="project-text-block reveal-up">
            <h3>Ánh sáng</h3>
            <p>
              Ánh sáng tự nhiên được ưu tiên bằng cách mở các vùng sinh hoạt chính, giảm vật cản và dùng rèm hai lớp để điều tiết chói.
            </p>
            <p>
              Hệ đèn gián tiếp giúp căn hộ có nhiều lớp sáng: đủ rõ khi sinh hoạt, đủ dịu khi nghỉ ngơi.
            </p>
          </div>

          <div className="project-text-block reveal-up">
            <h3>Kết quả</h3>
            <p>
              Căn hộ trở nên sáng, gọn và dễ sử dụng hơn. Gia chủ có một bản thiết kế rõ ràng,
              phối cảnh dễ hiểu và lộ trình thi công trọn gói trước khi bắt đầu.
            </p>
          </div>
        </div>

        <aside className="project-detail-meta reveal-up">
          <div className="meta-item">
            <span className="meta-label">DỊCH VỤ</span>
            <span className="meta-value">Phong thủy hiện đại</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">ĐỊA ĐIỂM</span>
            <span className="meta-value">TP. Hồ Chí Minh</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">NĂM</span>
            <span className="meta-value">2026</span>
          </div>
        </aside>
      </section>

      <SiteFooter />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <section className="contact-layout">
        <div className="contact-sidebar">
          <div className="contact-header reveal-up">
            <p className="section-label">LIÊN HỆ</p>
            <h1>Liên hệ.</h1>
            <p className="contact-intro">
              Dự án mới, tư vấn phong thủy, thiết kế nội thất, phối cảnh 3D hoặc thi công trọn gói — hãy kể cho chúng tôi nhu cầu của bạn.
            </p>
          </div>

          <div className="contact-details reveal-up">
            <div className="contact-block">
              <span className="contact-label">LIÊN HỆ</span>
              <a href="mailto:hello@chamgroup.vn">hello@chamgroup.vn</a>
            </div>
            
            <div className="contact-block">
              <span className="contact-label">DỰ ÁN MỚI</span>
              <a href="mailto:projects@chamgroup.vn">projects@chamgroup.vn</a>
            </div>

            <div className="contact-block">
              <span className="contact-label">BÁO CHÍ</span>
              <a href="mailto:press@chamgroup.vn">press@chamgroup.vn</a>
            </div>

            <div className="contact-block">
              <span className="contact-label">ĐIỆN THOẠI</span>
              <a href="tel:+4930000000">+49 30 000 000</a>
            </div>

            <div className="contact-block">
              <span className="contact-label">ĐỊA CHỈ</span>
              <address>
                CHẠM GROUP<br />
                Quận 1, TP. Hồ Chí Minh<br />
                Việt Nam
              </address>
            </div>

            <div className="contact-block">
              <span className="contact-label">MẠNG XÃ HỘI</span>
              <div className="contact-social-links">
                <a href="/">X</a>
                <a href="/">LINKEDIN</a>
                <a href="/">BEHANCE</a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-map reveal-up">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80" alt="Bản đồ TP. Hồ Chí Minh" className="map-image" style={{filter: 'grayscale(100%) contrast(1.2)'}} />
          <div className="map-landmark">
            <div className="landmark-header">
              <span className="landmark-label">VỊ TRÍ</span>
              <button className="landmark-close">×</button>
            </div>
            <strong>CHẠM GROUP</strong>
            <p>Quận 1, TP. Hồ Chí Minh, Việt Nam</p>
            <small>TP. Hồ Chí Minh</small>
          </div>
        </div>
      </section>

      <section className="close-grid" style={{borderTop: '1px solid var(--line)'}}>
        <div className="close-cell close-process">
          <h2>Quy trình</h2>
          <p>Chúng tôi bắt đầu bằng cách gia chủ sống, nghỉ ngơi, làm việc và di chuyển trong từng căn phòng.</p>
          <p>Mỗi quyết định về phong thủy, vật liệu, phối cảnh và thi công đều hướng đến một không gian dễ ở.</p>
        </div>

        <div className="close-cell close-services">
          <h2>Dịch vụ</h2>
          <ul>
            {services.map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div className="close-cell close-recognition">
          <h2>Dấu mốc</h2>
          <div className="stat-grid">
            <span><strong>18</strong>Dự án</span>
            <span><strong>12</strong>Năm</span>
            <span><strong>21</strong>Giải thưởng</span>
            <span><strong>05</strong>Thành phố</span>
          </div>
        </div>

        <div className="close-cell close-contact">
          <h2>Liên hệ</h2>
          <address>
            <a href="mailto:hello@chamgroup.vn">hello@chamgroup.vn</a>
            <a href="tel:+842800000000">+84 28 0000 0000</a>
            <span>Quận 1, TP. Hồ Chí Minh</span>
          </address>
          <a className="new-enquiry" href="mailto:hello@chamgroup.vn">
            Gửi yêu cầu <MoveRight size={18} />
          </a>
        </div>
      </section>

      <section className="footer-bottom" style={{borderTop: '1px solid var(--line)'}}>
        <span>CHẠM GROUP © 2026</span>
        <span>Phong thủy · Nội thất · CGI · Thi công</span>
        <span>
          <a href="/">X</a>
          <a href="/">LinkedIn</a>
          <a href="/">Behance</a>
        </span>
      </section>
    </>
  );
}

function StudioPage() {
  return (
    <>
      <section className="studio-intro">
        <p>Giới thiệu</p>
        <h1>Về CHAM.</h1>
        <p>
          Thành lập tại Việt Nam, CHAM là studio kiến trúc và nội thất tạo nên
          những không gian tôn trọng nơi chốn, khí hậu và nhịp sống của con người.
        </p>
      </section>

      <section className="studio-approach">
        <div className="studio-image">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=90"
            alt="Không gian làm việc thiết kế nội thất"
          />
        </div>
        <div className="studio-approach-copy">
          <p>Cách tiếp cận</p>
          <p>
            Chúng tôi thiết kế từ bên trong ra ngoài — hiểu cách con người di chuyển,
            tụ họp và nghỉ ngơi trước khi đường nét đầu tiên xuất hiện.
          </p>
          <p>
            Kiến trúc không chỉ là tạo vật thể. Đó là kiến tạo một trải nghiệm sống
            có nhịp điệu, ánh sáng và sự thuộc về.
          </p>
          <p>
            Mỗi dự án bắt đầu bằng lắng nghe: khu đất, ánh sáng, vật liệu hiện có
            và đời sống sẽ hiện diện trong không gian.
          </p>
        </div>
      </section>

      <section className="statement studio-statement">
        <p>Tư duy thiết kế</p>
        <blockquote>
          “Chúng tôi không xây biểu tượng.
          Chúng tôi kiến tạo <em>ngưỡng chạm</em> — khoảng giữa của đến,
          dừng lại và thuộc về.”
        </blockquote>
        <cite>CHAM GROUP, tuyên ngôn sáng lập</cite>
      </section>

      <section className="studio-services">
        <div className="studio-section-heading">
          <p>Dịch vụ</p>
          <h2>Chúng tôi làm gì.</h2>
        </div>
        <div className="studio-service-grid">
          {services.map((service) => (
            <article key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
        <div className="studio-stats">
          <span><strong>18</strong>Dự án</span>
          <span><strong>21</strong>Giải thưởng</span>
          <span><strong>12</strong>Năm</span>
          <span><strong>05</strong>Thành phố</span>
        </div>
      </section>

      <section className="studio-team">
        <div className="studio-section-heading">
          <p>Đội ngũ</p>
          <h2>Người đồng hành cùng không gian của bạn.</h2>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <article key={member.name}>
              <img src={member.image} alt={member.name} />
              <div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <span>{member.focus}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isStudioPage = window.location.pathname === "/studio";
  const isProcessPage = window.location.pathname === "/process";
  const isProjectsPage = window.location.pathname === "/projects";
  const isContactPage = window.location.pathname === "/contact";
  const isProjectDetailPage = window.location.pathname.startsWith("/project/");
  const isArticlesPage = window.location.pathname === "/articles";
  const isArticleDetailPage = window.location.pathname.startsWith("/article/");

  useEffect(() => {
    const updateFeaturedText = () => {
      document.querySelectorAll("[data-featured-section]").forEach((section) => {
        const text = section.querySelector("[data-featured-text]");
        const panel = section.querySelector("[data-featured-panel]");
        const button = section.querySelector("[data-featured-button]");
        if (!text || !panel || !button) return;

        const rect = section.getBoundingClientRect();
        const scrollRange = Math.max(1, rect.height - window.innerHeight);
        const progress = Math.min(1, Math.max(0, -rect.top / scrollRange));
        const panelStyles = window.getComputedStyle(panel);
        const panelPaddingTop = parseFloat(panelStyles.paddingTop) || 0;
        const panelPaddingBottom = parseFloat(panelStyles.paddingBottom) || 0;
        const buttonTop = button.offsetTop;
        const gapAboveButton = 92;
        const maxShift = Math.max(
          0,
          buttonTop - panelPaddingTop - panelPaddingBottom - text.offsetHeight - gapAboveButton
        );

        text.style.setProperty("--feature-shift", `${Math.round(progress * maxShift)}px`);
      });

      document.querySelectorAll("[data-process-section]").forEach((section) => {
        const text = section.querySelector("[data-process-text]");
        if (!text) return;

        const rect = section.getBoundingClientRect();
        const scrollRange = Math.max(1, rect.height - window.innerHeight);
        const progress = Math.min(1, Math.max(0, -rect.top / scrollRange));
        const maxShift = Math.max(0, window.innerHeight * 0.42 - text.offsetHeight * 0.25);
        text.style.setProperty("--process-shift", `${Math.round(progress * maxShift)}px`);
      });
    };

    updateFeaturedText();
    window.addEventListener("scroll", updateFeaturedText, { passive: true });
    window.addEventListener("resize", updateFeaturedText);

    return () => {
      window.removeEventListener("scroll", updateFeaturedText);
      window.removeEventListener("resize", updateFeaturedText);
    };
  }, []);

  useEffect(() => {
    const cursor = document.querySelector(".cursor-dot");
    if (!cursor) return;

    let rafId = 0;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let currentState = "default";

    const render = () => {
      cursorX += (mouseX - cursorX) * 0.13;
      cursorY += (mouseY - cursorY) * 0.13;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      rafId = window.requestAnimationFrame(render);
    };

    const move = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.classList.add("cursor-dot-visible");
    };

    const leave = () => cursor.classList.remove("cursor-dot-visible");

    const getState = (target) => {
      if (target.closest(".menu-links a")) return "menu";
      if (target.closest(".work-tile, .feature-media, .hero-image, .process-step-media img, .project-detail-hero img, .team-grid img, .studio-image img"))
        return "image";
      if (target.closest(".nav-links a, .brand")) return "nav";
      if (target.closest(".projects-table-row, .press-article, .project-row"))
        return "row";
      if (target.closest(".outline-link, .text-link, .new-enquiry, .hero-caption"))
        return "link";
      if (target.closest("button")) return "button";
      if (target.closest("a")) return "link";
      return "default";
    };

    const applyState = (state) => {
      if (state === currentState) return;
      currentState = state;
      cursor.dataset.state = state;
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", (e) => applyState(getState(e.target)), { passive: true });
    document.addEventListener("mouseleave", leave);
    rafId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  useEffect(() => {
    const revealSelectors = [
      ".hero-copy",
      ".hero-image",
      ".project-index",
      ".project-row",
      ".projects-intro > *",
      ".project-filters",
      ".projects-table-row",
      ".feature-media img",
      ".feature-copy .outline-link",
      ".statement > p",
      ".statement blockquote",
      ".statement cite",
      ".process-heading",
      ".process-grid article",
      ".selected h2",
      ".work-tile",
      ".press-block h2",
      ".press-block article",
      ".close-cell",
      ".footer-bottom",
      ".studio-intro > *",
      ".studio-image",
      ".studio-approach-copy",
      ".studio-section-heading",
      ".studio-service-grid article",
      ".studio-stats span",
      ".team-grid article",
      ".process-page-intro",
      ".process-hero-image",
      ".process-step-media img",
      ".process-step-media p",
      ".ready-section",
    ];

    document.querySelectorAll(revealSelectors.join(",")).forEach((element) => {
      element.classList.add("reveal-up");
    });

    const elements = document.querySelectorAll(".reveal-up");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [isStudioPage, isProcessPage, isProjectsPage]);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    return () => document.body.classList.remove("menu-is-open");
  }, [menuOpen]);

  return (
    <main>
      <div className="cursor-dot" data-state="default" aria-hidden="true">
        <div className="cursor-inner" />
      </div>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Trang chủ CHAM GROUP">
          <img src="/assets/logo-cham.png" alt="" aria-hidden="true" />
          <span>
            <strong>CHAM</strong>
            <small>GROUP</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Điều hướng chính">
          <a className={!isStudioPage && !isProcessPage && !isProjectsPage && !isContactPage && !isProjectDetailPage && !isArticlesPage && !isArticleDetailPage ? "active" : ""} href="/">Trang chủ</a>
          <a className={isStudioPage ? "active" : ""} href="/studio">Về CHAM</a>
          <a className={isProcessPage ? "active" : ""} href="/process">Quy trình</a>
          <a className={isProjectsPage || isProjectDetailPage ? "active" : ""} href="/projects">Dự án</a>
          <a className={isArticlesPage || isArticleDetailPage ? "active" : ""} href="/articles">Bài Viết</a>
          <a className={isContactPage ? "active" : ""} href="/contact">Liên hệ</a>
        </nav>
        <button
          className="menu-button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Menu size={20} />
        </button>
      </header>

      <button
        className="desktop-menu-button"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <Menu size={22} />
      </button>

      <nav className={`main-menu ${menuOpen ? "main-menu-open" : ""}`} aria-label="Menu chính">
        <div className="menu-brand">
          <img src="/assets/logo-cham.png" alt="" aria-hidden="true" />
          <span>
            <strong>CHAM</strong>
            <small>Studio dịch vụ nội thất</small>
          </span>
        </div>
        <button className="menu-close" aria-label="Đóng menu" onClick={() => setMenuOpen(false)}>
          Đóng
        </button>
        <div className="menu-links">
          <a href="/" onClick={() => setMenuOpen(false)}>Trang chủ</a>
          <a href="/studio" onClick={() => setMenuOpen(false)}>Về CHAM</a>
          <a href="/process" onClick={() => setMenuOpen(false)}>Quy trình</a>
          <a href="/projects" onClick={() => setMenuOpen(false)}>Dự án</a>
          <a href="/articles" onClick={() => setMenuOpen(false)}>Bài Viết</a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>Liên hệ</a>
        </div>
        <div className="menu-footer">
          <span>CHAM GROUP © 2026</span>
          <span>Phong thủy · Nội thất · CGI · Thi công</span>
        </div>
      </nav>

      {isArticleDetailPage ? (
        <ArticleDetailPage />
      ) : isProjectDetailPage ? (
        <ProjectDetailPage />
      ) : isContactPage ? (
        <ContactPage />
      ) : isArticlesPage ? (
        <ArticlesPage />
      ) : isProjectsPage ? (
        <ProjectsPage />
      ) : isProcessPage ? (
        <ProcessPage />
      ) : isStudioPage ? (
        <StudioPage />
      ) : (
        <>
      <section className="hero" id="top">
        <div className="hero-copy">
          <div>
            <div className="hero-kicker">Phong thủy · Nội thất · CGI · Thi công</div>
            <h1>
              Không gian
              <span>để</span>
              sống.
            </h1>
          </div>
          <a className="text-link" href="/projects">
            Tất cả dự án <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="hero-image">
          <img src={projects[0].image} alt="Không gian dự án CHAM Group" />
          <a className="hero-caption" href="/project/koan-house">
            <span>Căn hộ hợp phong thủy</span>
            <span>Phong thủy hiện đại</span>
            <span>2026</span>
          </a>
        </div>
      </section>

      <section className="project-index" id="projects" aria-label="Tất cả dự án">
        <div className="project-list">
          {homeProjectRows.map((project) => (
            <a className="project-row" href="/project/koan-house" key={project.name}>
              <span>{project.number}</span>
              <strong>
                {project.name}
                {project.tags.length > 0 && (
                  <span className="project-tags" aria-hidden="true">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </span>
                )}
              </strong>
              <small>{project.year}</small>
              <MoveRight className="project-row-arrow" size={22} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      {featuredProjects.map((project, index) => (
        <section
          className={`featured ${project.reverse ? "featured-reverse" : ""}`}
          id={index === 0 ? "featured" : undefined}
          data-featured-section
          key={project.title}
        >
          <div className="feature-media">
            <img src={project.image} alt={project.imageAlt} />
          </div>
          <div className="feature-copy" data-featured-panel>
            <div className="feature-copy-inner" data-featured-text>
              <p>{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p>{project.body}</p>
            </div>
            <a className="outline-link" href="/project/koan-house" data-featured-button>
              Xem dịch vụ <MoveRight size={18} />
            </a>
          </div>
        </section>
      ))}

      <section className="statement" id="studio">
        <p>Tư duy thiết kế</p>
        <blockquote>
          “Chúng tôi không tạo nên những công trình để đứng yên.
          Chúng tôi kiến tạo <em>ngưỡng chạm</em> — nơi con người bước vào,
          dừng lại và thuộc về.”
        </blockquote>
        <cite>CHAM GROUP, tuyên ngôn sáng lập</cite>
      </section>

      <section className="process" id="process">
        <div className="process-heading">
          <p>Quy trình</p>
          <h2>Từ lắng nghe đến đời sống.</h2>
        </div>
        <div className="process-grid">
          {process.map(([step, title, body]) => (
            <article key={step}>
              <span>{step}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="selected">
        <h2>Dự án chọn lọc</h2>
        <div className="selected-gallery">
          {selectedWorks.map((work) => (
            <article className={`work-pair ${work.reverse ? "work-pair-reverse" : ""}`} key={work.title}>
              <a className="work-tile work-tile-large" href="/project/koan-house">
                <img src={work.largeImage} alt={work.title} />
                <span className="work-caption">
                  <strong>{work.title}</strong>
                  <small>{work.meta}</small>
                </span>
              </a>
              <a className="work-tile work-tile-small" href="/project/koan-house">
                <img src={work.smallImage} alt={`Chi tiết ${work.title}`} />
                <span className="work-caption">
                  <strong>{work.title}</strong>
                  <small>{work.meta}</small>
                </span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="press-block">
        <h2>Bài Viết</h2>
        <a href="/article/phong-thuy-kien-truc" className="press-article">
          <p>“Phong thủy kiến trúc hiện đại khác mê tín như thế nào? Sự cân bằng của ánh sáng và tỷ lệ không gian là nền tảng.”</p>
          <span>Tháng 10, 2026<br />Kiến thức</span>
        </a>
        <a href="/article/phong-thuy-kien-truc" className="press-article">
          <p>“Sự tĩnh lặng của vật liệu thô: Cách bê tông trần và gỗ tự nhiên tạo nên cảm giác thuộc về.”</p>
          <span>Tháng 9, 2026<br />Vật liệu</span>
        </a>
        <a href="/article/phong-thuy-kien-truc" className="press-article">
          <p>“Thiết kế ánh sáng gián tiếp: Mang nhịp sinh học tự nhiên vào không gian nhiệt đới ẩm.”</p>
          <span>Tháng 8, 2026<br />Nghiên cứu</span>
        </a>
        <div style={{ marginTop: '40px', padding: '0 clamp(24px, 3vw, 44px)', paddingBottom: '60px' }}>
          <a className="outline-link" href="/articles">
            Xem thêm <MoveRight size={18} />
          </a>
        </div>
      </section>

      <SiteFooter />
        </>
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
