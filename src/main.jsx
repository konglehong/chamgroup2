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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

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

    const render = () => {
      cursorX += (mouseX - cursorX) * 0.18;
      cursorY += (mouseY - cursorY) * 0.18;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      rafId = window.requestAnimationFrame(render);
    };

    const move = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.classList.add("cursor-dot-visible");
    };

    const leave = () => {
      cursor.classList.remove("cursor-dot-visible");
    };

    const toggleHover = (event) => {
      cursor.classList.toggle("cursor-dot-active", Boolean(event.target.closest("a, button")));
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", toggleHover, { passive: true });
    window.addEventListener("pointerout", toggleHover, { passive: true });
    document.addEventListener("mouseleave", leave);
    rafId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", toggleHover);
      window.removeEventListener("pointerout", toggleHover);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    return () => document.body.classList.remove("menu-is-open");
  }, [menuOpen]);

  return (
    <main>
      <div className="cursor-dot" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CHAM GROUP home">
          <span>CHAM</span>
          <small>GROUP</small>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#studio">Studio</a>
          <a href="#process">Process</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
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
          <a href="#top" onClick={() => setMenuOpen(false)}>Index</a>
          <a href="#studio" onClick={() => setMenuOpen(false)}>Studio</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
        <div className="menu-footer">
          <span>CHAM GROUP © 2026</span>
          <span>Architecture & Interior Design</span>
        </div>
      </nav>

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
          <a className="text-link" href="#projects">
            All projects <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="hero-image">
          <img src={projects[0].image} alt="CHAM Group hospitality destination" />
          <a className="hero-caption" href="#featured">
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
            <a className="project-row" href="#featured" key={project.name}>
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
            <a className="outline-link" href="#contact" data-featured-button>
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
              <a className="work-tile work-tile-large" href="#featured">
                <img src={work.largeImage} alt={work.title} />
                <span className="work-caption">
                  <strong>{work.title}</strong>
                  <small>{work.meta}</small>
                </span>
              </a>
              <a className="work-tile work-tile-small" href="#featured">
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

      <footer className="site-close" id="contact">
        <section className="press-block">
          <h2>Press & Recognition</h2>
          <article>
            <p>“CHAM mở ra một ngôn ngữ kiến trúc điềm tĩnh — nơi công trình phục vụ cơ thể trước khi chạm đến thị giác.”</p>
            <span>Elle Decoration<br />2026</span>
          </article>
          <article>
            <p>“Koan House là một trong những dự án nhà ở được cân nhắc kỹ lưỡng nhất trong năm.”</p>
            <span>ArchDaily<br />2025</span>
          </article>
          <article>
            <p>“Cách họ làm việc chứng minh kiến trúc Việt Nam có thể vừa sâu rễ, vừa đương đại.”</p>
            <span>Design Anthology<br />2024</span>
          </article>
        </section>

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
            <a href="#top">X</a>
            <a href="#top">LinkedIn</a>
            <a href="#top">Behance</a>
          </span>
        </section>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
