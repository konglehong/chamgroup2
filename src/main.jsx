import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Menu, MoveRight } from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01",
    name: "Cham Heritage Resort",
    type: "Hospitality",
    place: "Hoi An, VN",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "02",
    name: "Lagoon Villas",
    type: "Residential",
    place: "Da Nang, VN",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "03",
    name: "Riverfront Quarter",
    type: "Mixed-use",
    place: "Ho Chi Minh City, VN",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "04",
    name: "Cham Wellness Village",
    type: "Wellness",
    place: "Nha Trang, VN",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "05",
    name: "Cultural Promenade",
    type: "Public realm",
    place: "Hue, VN",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=90",
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
    title: "Where the city meets the fjord.",
    eyebrow: "Featured — Oslo Cultural Centre",
    body:
      "A civic building conceived as a series of cascading public terraces stepping down toward the water. Each level is a space for gathering, performance, and pause — architecture as threshold between urban life and open landscape.",
    image: projects[2].image,
    imageAlt: "Large cultural architecture project",
  },
  {
    title: "Light, steel, and seven floors of intent.",
    eyebrow: "Featured — Lichten Office HQ",
    body:
      "Seven floors of glass and dark steel built around a central atrium that pulls daylight through the entire structure. Designed for a team that wanted a headquarters as precise as their thinking.",
    image: projects[3].image,
    imageAlt: "Minimal modern office architecture",
    reverse: true,
  },
  {
    title: "A house that breathes.",
    eyebrow: "Featured — Koan House",
    body:
      "Raw concrete, shaded timber, and planted thresholds form a quiet residence where the boundaries between shelter, garden, and daily ritual are deliberately softened.",
    image: projects[0].image,
    imageAlt: "Concrete residential architecture with garden",
  },
];

const selectedWorks = [
  {
    title: "Koan House",
    meta: "Tokyo, JP / 2026",
    largeImage: projects[0].image,
    smallImage: projects[1].image,
  },
  {
    title: "Atelier Courtyard",
    meta: "Da Nang, VN / 2025",
    largeImage: projects[3].image,
    smallImage: projects[4].image,
    reverse: true,
  },
  {
    title: "River Gallery",
    meta: "Ho Chi Minh City, VN / 2025",
    largeImage: projects[2].image,
    smallImage: projects[0].image,
  },
];

const projectRows = [
  ["01", "Koan House", "Residential", "Tokyo, JP", "2026"],
  ["02", "Steinhaus Pavilion", "Interior", "Oslo, NO", "2025"],
  ["03", "Grafjell Retreat", "Interior", "Bergen, NO", "2025"],
  ["04", "Lichten Office HQ", "Commercial", "Berlin, DE", "2024"],
  ["05", "Oslo Cultural Centre", "Cultural", "Oslo, NO", "2024"],
  ["06", "Murano Residence", "Interior", "Venice, IT", "2023"],
];

const teamMembers = [
  {
    name: "Minh Tran",
    role: "Founding Partner",
    focus: "Concept & Design Direction",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Linh Nguyen",
    role: "Partner",
    focus: "Interior & Landscape",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "An Hoang",
    role: "Project Architect",
    focus: "Cultural & Commercial",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Mai Pham",
    role: "Senior Architect",
    focus: "Residential Projects",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
  },
];

const processDetails = [
  {
    number: "01",
    title: "Listen",
    intro: "Bắt đầu bằng sự tĩnh lặng: hiểu khu đất, nhu cầu và bối cảnh xung quanh.",
    caption:
      "Mỗi dự án khởi đầu bằng những buổi trao đổi sâu sắc, chúng tôi quan sát ánh sáng, âm thanh và chuyển động trước khi vẽ.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "02",
    title: "Sketch",
    intro: "Trước kỹ thuật số là bàn tay. Ý tưởng được thử bằng mô hình, giấy, than và đường nét.",
    caption:
      "Quá trình làm việc tay giúp chúng tôi khám phá sâu các mối liên hệ không gian, tạo nền tảng vững chắc cho thiết kế số.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "03",
    title: "Refine",
    intro: "Mỗi chi tiết được đặt câu hỏi: vật liệu, tỷ lệ và ánh sáng qua từng mùa.",
    caption:
      "Mẫu vật liệu thực tế và mô phỏng ánh sáng giúp chúng tôi kiểm chứng và hoàn thiện thiết kế.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "04",
    title: "Realise",
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
          <h2>Process</h2>
          <p>Chúng tôi thiết kế từ bên trong ra ngoài — bắt đầu bằng cách con người di chuyển, tụ họp và nghỉ ngơi.</p>
          <p>Kiến trúc không chỉ là tạo vật thể. Đó là kiến tạo trải nghiệm sống.</p>
        </div>

        <div className="close-cell close-services">
          <h2>Services</h2>
          <ul>
            <li>Architecture</li>
            <li>Interior Design</li>
            <li>Landscape</li>
            <li>Hospitality Concept</li>
          </ul>
        </div>

        <div className="close-cell close-recognition">
          <h2>Recognition</h2>
          <div className="stat-grid">
            <span><strong>18</strong>Dự án</span>
            <span><strong>12</strong>Năm</span>
            <span><strong>21</strong>Giải thưởng</span>
            <span><strong>05</strong>Thành phố</span>
          </div>
        </div>

        <div className="close-cell close-contact">
          <h2>Contact</h2>
          <address>
            <a href="mailto:hello@chamgroup.vn">hello@chamgroup.vn</a>
            <a href="tel:+842800000000">+84 28 0000 0000</a>
            <span>Quận 1, TP. Hồ Chí Minh</span>
          </address>
          <a className="new-enquiry" href="mailto:hello@chamgroup.vn">
            New enquiries <MoveRight size={18} />
          </a>
        </div>
      </section>

      <section className="footer-bottom">
        <span>CHAM GROUP © 2026</span>
        <span>Architecture & Interior Design</span>
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
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSelectedWorks = selectedWorks.filter(work => {
    if (activeFilter === "All") return true;
    if (work.title === "Koan House" && activeFilter === "Residential") return true;
    if (work.title === "Atelier Courtyard" && activeFilter === "Interior") return true;
    if (work.title === "River Gallery" && activeFilter === "Cultural") return true;
    return false;
  });

  const filteredProjectRows = projectRows.filter(row => {
    if (activeFilter === "All") return true;
    return row[2] === activeFilter;
  });

  return (
    <>
      <section className="projects-intro reveal-up">
        <p>Projects</p>
        <h1>Selected Works.</h1>
        <p>
          Một tuyển chọn các dự án nhà ở, văn hóa và thương mại — được định hình
          bởi bối cảnh, vật liệu và sự chính xác trong không gian.
        </p>
      </section>

      <section className="project-filters reveal-up" aria-label="Project filters">
        {["All", "Commercial", "Landscape", "Cultural", "Interior", "Residential"].map((filter) => (
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
                <img src={work.smallImage} alt={`${work.title} detail`} />
                <span className="work-caption">
                  <strong>{work.title}</strong>
                  <small>{work.meta}</small>
                </span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-table" id="project-list">
        {filteredProjectRows.map(([number, name, type, place, year]) => (
          <a className="projects-table-row reveal-up" href="/project/koan-house" key={name}>
            <span>{number}</span>
            <strong>{name}</strong>
            <em>{type}</em>
            <small>{place}</small>
            <time>{year}</time>
          </a>
        ))}
      </section>

      <SiteFooter />
    </>
  );
}

function ProcessPage() {
  return (
    <>
      <section className="process-page-intro reveal-up">
        <p>Methodology</p>
        <h1>Our Process.</h1>
        <p>
          Quy trình của chúng tôi không tuyến tính. Mỗi giai đoạn soi sáng cho giai đoạn kế tiếp,
          và đôi khi quay lại điểm bắt đầu để làm rõ điều cốt lõi.
        </p>
      </section>

      <section className="process-hero-image reveal-up">
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=90"
          alt="Architecture team reviewing drawings"
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
              <img className="reveal-up" src={step.image} alt={`${step.title} process`} />
              <p className="reveal-up">{step.caption}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="ready-section reveal-up">
        <h2>Ready to begin?</h2>
        <p>Mỗi dự án bắt đầu bằng một cuộc trò chuyện. Hãy kể cho chúng tôi về tầm nhìn của bạn.</p>
        <a className="outline-link" href="/contact">
          Get in touch <MoveRight size={18} />
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
            <span className="meta-label">CATEGORY</span>
            <span className="meta-value">Kiến thức</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">AUTHOR</span>
            <span className="meta-value">Minh Tran</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">DATE</span>
            <span className="meta-value">Oct 2026</span>
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
        <p>Insights</p>
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
          <time>Oct 2026</time>
        </a>
        <a className="projects-table-row reveal-up" href="/article/phong-thuy-kien-truc">
          <span>02</span>
          <strong>Sự tĩnh lặng của vật liệu thô: Bê tông trần và Gỗ tự nhiên</strong>
          <em>Vật liệu</em>
          <small>Linh Nguyen</small>
          <time>Sep 2026</time>
        </a>
        <a className="projects-table-row reveal-up" href="/article/phong-thuy-kien-truc">
          <span>03</span>
          <strong>Thiết kế ánh sáng gián tiếp trong không gian nhiệt đới ẩm</strong>
          <em>Nghiên cứu</em>
          <small>An Hoang</small>
          <time>Aug 2026</time>
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
          alt="Kōan House"
        />
        <div className="project-detail-header-overlay">
          <div className="project-detail-kicker">RESIDENTIAL · TOKYO, JP · 2026</div>
          <h1>Kōan House</h1>
          <p className="project-detail-lead">
            A meditative residence that dissolves the boundary between interior and garden. Raw concrete meets shaded timber.
          </p>
        </div>
      </section>

      <section className="project-detail-content">
        <div className="project-detail-main">
          <div className="project-text-block reveal-up">
            <h3>Overview</h3>
            <p>
              Kōan House is a private residence situated on the edge of a forested hillside in the outskirts of Tokyo. 
              The brief was simple: a home for two people who wanted to live with less. What emerged was a building that 
              treats silence as a material — as considered and load-bearing as the concrete that forms its walls.
            </p>
            <p>
              The name derives from the Zen concept of a kōan: a paradox with no logical answer, designed to exhaust the 
              thinking mind and open something quiet beneath. The house is built on a similar logic. Every decision was made by subtraction.
            </p>
          </div>

          <div className="project-text-block reveal-up">
            <h3>Design</h3>
            <p>
              The building is a single horizontal volume, low and continuous, set into the slope so that from the road above, 
              it disappears. The facade is almost entirely closed to the street — a long uninterrupted plane of board-formed 
              concrete, broken only by a narrow slot of glazing that runs the full width of the upper level.
            </p>
            <p>
              Entry is through a compressed, threshold, a dark corridor that forces the body to slow down before revealing 
              the main living space. This transition — compression before release — is the defining spatial experience of the house.
            </p>
            <p>
              The interior is organized around a single large room that opens entirely to the garden through floor-to-ceiling glazing. 
              The boundary between inside and outside is treated as a threshold rather than a barrier. In summer, the glass disappears. 
              In winter, it frames the garden like a slow painting.
            </p>
          </div>

          <div className="project-text-block reveal-up">
            <h3>Materials</h3>
            <p>
              The material palette was deliberately constrained: raw board-formed concrete, shaded cedar, and polished black stone. 
              No paint. No plaster. No applied finish. Every surface is what it is.
            </p>
            <p>
              The cedar was sourced from a single forest in Nagano Prefecture and allowed to age in place. The intent was not to arrest 
              time, but to let it show. The concrete was poured in a single continuous process. It is imperfect, retaining the grain of the 
              wood formwork. The floor reads as a single dark plane.
            </p>
          </div>

          <div className="project-text-block reveal-up">
            <h3>Light</h3>
            <p>
              Light was the primary design tool. The building was modeled across every hour of every season to ensure a range of 
              natural light in each space. The narrow slot window on the upper facade admits morning light to the private spaces. 
              The main living area, facing south, acts as a sundial. The garden-facing glazing admits afternoon light that deepens as the day progresses.
            </p>
            <p>
              There are no overhead lights in the main living space. Illumination comes entirely from indirect sources — light reflected 
              from surfaces, light borrowed from adjacent rooms. The house grows darker as evening comes. This was intentional.
            </p>
          </div>

          <div className="project-text-block reveal-up">
            <h3>Outcome</h3>
            <p>
              Kōan House received the Japan Institute of Architects Residential Award in 2027. More importantly, its occupants 
              report that they sleep better than they ever have. Sometimes less is enough.
            </p>
          </div>
        </div>

        <aside className="project-detail-meta reveal-up">
          <div className="meta-item">
            <span className="meta-label">TYPE</span>
            <span className="meta-value">Residential</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">LOCATION</span>
            <span className="meta-value">Tokyo, JP</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">YEAR</span>
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
            <p className="section-label">GET IN TOUCH</p>
            <h1>Contact.</h1>
            <p className="contact-intro">
              New projects, collaborations, and press enquiries — we'd love to hear from you.
            </p>
          </div>

          <div className="contact-details reveal-up">
            <div className="contact-block">
              <span className="contact-label">CONTACT</span>
              <a href="mailto:hello@chamgroup.vn">hello@chamgroup.vn</a>
            </div>
            
            <div className="contact-block">
              <span className="contact-label">NEW PROJECTS</span>
              <a href="mailto:projects@chamgroup.vn">projects@chamgroup.vn</a>
            </div>

            <div className="contact-block">
              <span className="contact-label">PRESS</span>
              <a href="mailto:press@chamgroup.vn">press@chamgroup.vn</a>
            </div>

            <div className="contact-block">
              <span className="contact-label">PHONE</span>
              <a href="tel:+4930000000">+49 30 000 000</a>
            </div>

            <div className="contact-block">
              <span className="contact-label">ADDRESS</span>
              <address>
                CHÂM GROUP<br />
                Quận 1, TP. Hồ Chí Minh<br />
                Việt Nam
              </address>
            </div>

            <div className="contact-block">
              <span className="contact-label">SOCIAL</span>
              <div className="contact-social-links">
                <a href="/">X</a>
                <a href="/">LINKEDIN</a>
                <a href="/">BEHANCE</a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-map reveal-up">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80" alt="Map of Ho Chi Minh City" className="map-image" style={{filter: 'grayscale(100%) contrast(1.2)'}} />
          <div className="map-landmark">
            <div className="landmark-header">
              <span className="landmark-label">LANDMARK</span>
              <button className="landmark-close">×</button>
            </div>
            <strong>CHÂM GROUP</strong>
            <p>Quận 1, TP. Hồ Chí Minh, Việt Nam</p>
            <small>📍 Ho Chi Minh City</small>
          </div>
        </div>
      </section>

      <section className="close-grid" style={{borderTop: '1px solid var(--line)'}}>
        <div className="close-cell close-process">
          <h2>Process</h2>
          <p>We design from the inside out — understanding how people move, gather, and rest before the first line is drawn.</p>
          <p>Architecture is not the making of objects. It is the making of experience.</p>
        </div>

        <div className="close-cell close-services">
          <h2>Services</h2>
          <ul>
            <li>Architecture</li>
            <li>Interior Design</li>
            <li>Landscape</li>
            <li>Exhibition Design</li>
          </ul>
        </div>

        <div className="close-cell close-recognition">
          <h2>Recognition</h2>
          <div className="stat-grid">
            <span><strong>18</strong>Projects</span>
            <span><strong>12</strong>Years</span>
            <span><strong>21</strong>Awards</span>
            <span><strong>5</strong>Countries</span>
          </div>
        </div>

        <div className="close-cell close-contact">
          <h2>Contact</h2>
          <address>
            <a href="mailto:hello@chamgroup.vn">hello@chamgroup.vn</a>
            <a href="tel:+842800000000">+84 28 0000 0000</a>
            <span>Quận 1, TP. Hồ Chí Minh</span>
          </address>
          <a className="new-enquiry" href="mailto:hello@chamgroup.vn">
            New enquiries <MoveRight size={18} />
          </a>
        </div>
      </section>

      <section className="footer-bottom" style={{borderTop: '1px solid var(--line)'}}>
        <span>CHÂM GROUP © 2026</span>
        <span>Architecture & Interior Design</span>
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
        <p>About</p>
        <h1>The Studio.</h1>
        <p>
          Thành lập tại Việt Nam, CHAM là studio kiến trúc và nội thất tạo nên
          những không gian tôn trọng nơi chốn, khí hậu và nhịp sống của con người.
        </p>
      </section>

      <section className="studio-approach">
        <div className="studio-image">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=90"
            alt="Architecture studio workspace"
          />
        </div>
        <div className="studio-approach-copy">
          <p>Approach</p>
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
        <p>Philosophy</p>
        <blockquote>
          “Chúng tôi không xây biểu tượng.
          Chúng tôi kiến tạo <em>ngưỡng chạm</em> — khoảng giữa của đến,
          dừng lại và thuộc về.”
        </blockquote>
        <cite>CHAM GROUP, tuyên ngôn sáng lập</cite>
      </section>

      <section className="studio-services">
        <div className="studio-section-heading">
          <p>Services</p>
          <h2>What we do.</h2>
        </div>
        <div className="studio-service-grid">
          <article>
            <h3>Architecture</h3>
            <p>Từ ý niệm đến hoàn thiện — nhà ở, văn hóa và thương mại được thiết kế với độ chính xác và cảm xúc.</p>
          </article>
          <article>
            <h3>Interior Design</h3>
            <p>Câu chuyện không gian mở ra qua vật liệu, ánh sáng và tỷ lệ. Mỗi bề mặt đều được cân nhắc.</p>
          </article>
          <article>
            <h3>Landscape</h3>
            <p>Tư duy ở tầng mặt đất: sân trong, vườn, ngưỡng chuyển tiếp và khoảng thở giữa các khối nhà.</p>
          </article>
          <article>
            <h3>Hospitality Concept</h3>
            <p>Định hình trải nghiệm lưu trú, nhịp vận hành và ký ức không gian cho điểm đến.</p>
          </article>
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
          <p>Team</p>
          <h2>The people behind the work.</h2>
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
        <a className="brand" href="/" aria-label="CHAM GROUP home">
          <span>CHAM</span>
          <small>GROUP</small>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a className={!isStudioPage && !isProcessPage && !isProjectsPage && !isContactPage && !isProjectDetailPage && !isArticlesPage && !isArticleDetailPage ? "active" : ""} href="/">Index</a>
          <a className={isStudioPage ? "active" : ""} href="/studio">Studio</a>
          <a className={isProcessPage ? "active" : ""} href="/process">Process</a>
          <a className={isProjectsPage || isProjectDetailPage ? "active" : ""} href="/projects">Projects</a>
          <a className={isArticlesPage || isArticleDetailPage ? "active" : ""} href="/articles">Bài Viết</a>
          <a className={isContactPage ? "active" : ""} href="/contact">Contact</a>
        </nav>
        <button
          className="menu-button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Menu size={20} />
        </button>
      </header>

      <button
        className="desktop-menu-button"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <Menu size={22} />
      </button>

      <nav className={`main-menu ${menuOpen ? "main-menu-open" : ""}`} aria-label="Main menu">
        <div className="menu-brand">
          <span>CHAM</span>
          <small>Architecture Studio</small>
        </div>
        <button className="menu-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
          Close
        </button>
        <div className="menu-links">
          <a href="/" onClick={() => setMenuOpen(false)}>Index</a>
          <a href="/studio" onClick={() => setMenuOpen(false)}>Studio</a>
          <a href="/process" onClick={() => setMenuOpen(false)}>Process</a>
          <a href="/projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="/articles" onClick={() => setMenuOpen(false)}>Bài Viết</a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
        <div className="menu-footer">
          <span>CHAM GROUP © 2026</span>
          <span>Architecture & Interior Design</span>
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
            <div className="hero-kicker">Architecture & Interior · Est. 2026</div>
            <h1>
              Space
              <span>as</span>
              Practice.
            </h1>
          </div>
          <a className="text-link" href="/projects">
            All projects <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="hero-image">
          <img src={projects[0].image} alt="CHAM Group hospitality destination" />
          <a className="hero-caption" href="/project/koan-house">
            <span>Koan House</span>
            <span>Residential</span>
            <span>2026</span>
          </a>
        </div>
      </section>

      <section className="project-index" id="projects" aria-label="All projects">
        <div className="section-label">All projects</div>
        <div className="project-list">
          {projects.map((project) => (
            <a className="project-row" href="/project/koan-house" key={project.name}>
              <span>{project.number}</span>
              <strong>{project.name}</strong>
              <em>{project.type}</em>
              <small>{project.place}</small>
              <small>{project.year}</small>
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
              Explore project <MoveRight size={18} />
            </a>
          </div>
        </section>
      ))}

      <section className="statement" id="studio">
        <p>Philosophy</p>
        <blockquote>
          “Chúng tôi không tạo nên những công trình để đứng yên.
          Chúng tôi kiến tạo <em>ngưỡng chạm</em> — nơi con người bước vào,
          dừng lại và thuộc về.”
        </blockquote>
        <cite>CHAM GROUP, tuyên ngôn sáng lập</cite>
      </section>

      <section className="process" id="process">
        <div className="process-heading">
          <p>Process</p>
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
        <h2>Selected Works</h2>
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
                <img src={work.smallImage} alt={`${work.title} detail`} />
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
          <span>Oct 2026<br />Kiến thức</span>
        </a>
        <a href="/article/phong-thuy-kien-truc" className="press-article">
          <p>“Sự tĩnh lặng của vật liệu thô: Cách bê tông trần và gỗ tự nhiên tạo nên cảm giác thuộc về.”</p>
          <span>Sep 2026<br />Vật liệu</span>
        </a>
        <a href="/article/phong-thuy-kien-truc" className="press-article">
          <p>“Thiết kế ánh sáng gián tiếp: Mang nhịp sinh học tự nhiên vào không gian nhiệt đới ẩm.”</p>
          <span>Aug 2026<br />Nghiên cứu</span>
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
