import React, { useEffect } from "react";
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
  ["01", "Listen", "Read the land, the brief, the guest journey, and the communities around every destination."],
  ["02", "Frame", "Turn market insight and brand ambition into a clear spatial and operational concept."],
  ["03", "Craft", "Shape architecture, interiors, landscape, and service details as one coherent experience."],
  ["04", "Realise", "Stay close through delivery so the finished place carries the same intent as the first sketch."],
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

function App() {
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

  return (
    <main>
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
        <button className="menu-button" aria-label="Open menu">
          <Menu size={20} />
        </button>
      </header>

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
          “We don’t build objects first. We build the space between arrival and belonging.”
        </blockquote>
        <cite>CHAM GROUP, founding direction</cite>
      </section>

      <section className="process" id="process">
        <div className="process-heading">
          <p>Process</p>
          <h2>From land reading to living destination.</h2>
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
        <div>
          {projects.map((project) => (
            <a href="#featured" key={project.name}>
              <span>{project.name}</span>
              <small>
                {project.place} / {project.year}
              </small>
            </a>
          ))}
        </div>
      </section>

      <section className="recognition">
        <h2>Signals</h2>
        <article>
          <p>Hospitality pipeline across Vietnam's most resilient leisure corridors.</p>
          <span>2026</span>
        </article>
        <article>
          <p>Mixed-use concepts shaped around climate, culture, and long-stay value.</p>
          <span>2025</span>
        </article>
        <article>
          <p>Design partnerships spanning architecture, interiors, landscape, and operations.</p>
          <span>2024</span>
        </article>
      </section>

      <footer className="footer" id="contact">
        <div>
          <h2>CHAM GROUP</h2>
          <p>Architecture, interiors, landscape, and cultural destinations.</p>
        </div>
        <div className="metrics">
          <span><strong>08</strong> Projects</span>
          <span><strong>04</strong> Cities</span>
          <span><strong>03</strong> Sectors</span>
        </div>
        <address>
          <a href="mailto:hello@chamgroup.vn">hello@chamgroup.vn</a>
          <a href="tel:+842800000000">+84 28 0000 0000</a>
          <span>Ho Chi Minh City, Vietnam</span>
        </address>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
