import "./PortfolioPage.css";
import { useEffect } from "react";

export default function PortfolioPage() {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(
          anchor.getAttribute("href") || ""
        );
        if (target)
          target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute(
            "style",
            "opacity:1; transform:translateY(0)"
          );
        }
      });
    }, observerOptions);

    document.querySelectorAll(".project-card, .skill-item").forEach((el) => {
      el.setAttribute(
        "style",
        "opacity:0; transform:translateY(30px); transition:opacity 0.8s ease, transform 0.8s ease"
      );
      observer.observe(el);
    });
  }, []);

  return (
    <div>
      <nav>
        <div className="logo">BM</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <section className="hero" id="home">
        <div className="organic-shape shape1"></div>
        <div className="organic-shape shape2"></div>
        <div className="organic-shape shape3"></div>
        <div className="leaf-decoration leaf1">🍃</div>
        <div className="leaf-decoration leaf2">🌿</div>
        <div className="leaf-decoration leaf3">🍂</div>

        <div className="hero-content">
          <h1>
            Hello, I'm <strong>Beatriz Matias</strong>
          </h1>
          <p>
            A frontend developer from Portugal who believes in creating digital
            experiences that feel as natural and intuitive as the world around
            us
          </p>
          <a href="#projects" className="cta-button">
            Explore My Projects
          </a>
        </div>
      </section>

      <section className="projects" id="projects">
        <h2> Projects</h2>
        <p className="section-subtitle">
          Crafted with care and attention to detail
        </p>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Sustainable Shopping App</h3>
            <p>
              An eco-conscious e-commerce platform helping users make
              environmentally friendly purchasing decisions with carbon
              footprint tracking.
            </p>
            <div className="tags">
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Node.js</span>
            </div>
          </div>
          <div className="project-card">
            <h3>Wellness Tracker</h3>
            <p>
              A mindful health and wellness dashboard that focuses on holistic
              well-being with gentle reminders and calming visualizations.
            </p>
            <div className="tags">
              <span className="tag">Vue.js</span>
              <span className="tag">Chart.js</span>
              <span className="tag">Firebase</span>
            </div>
          </div>
          <div className="project-card">
            <h3>Garden Planning Tool</h3>
            <p>
              Interactive gardening companion that helps users plan seasonal
              planting with weather integration and community knowledge sharing.
            </p>
            <div className="tags">
              <span className="tag">JavaScript</span>
              <span className="tag">Leaflet</span>
              <span className="tag">API</span>
            </div>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <h2>Skills & Expertise</h2>
        <p className="section-subtitle">Tools I use to bring ideas to life</p>
        <div className="skills-grid">
          <div className="skill-item">
            <div className="skill-icon">⚛️</div>
            <h3>React</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon">🎨</div>
            <h3>CSS/SASS</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon">⚡</div>
            <h3>JavaScript</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon">📱</div>
            <h3>Responsive</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon">🔷</div>
            <h3>TypeScript</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon">♿</div>
            <h3>Accessibility</h3>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-content">
          <h2>Get In Touch!</h2>
          <p>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="contact-links">
            <a href="mailto:biasmatias99@gmail.com" className="contact-link">
              Send Email
            </a>
            <a
              href="https://github.com/Beatrizsanmatias"
              className="contact-link"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/beatriz-matias-830259236/"
              className="contact-link"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
