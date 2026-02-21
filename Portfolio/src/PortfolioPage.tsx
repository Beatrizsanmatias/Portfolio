import { useEffect, useState } from "react";
import Linkedin from "./icons/linkedin.svg";
import Mail from "./icons/mail.svg";
import Github from "./icons/github.svg";
import css from "./icons/css_icon.png";
import figma from "./icons/figma_icon.png";
import html from "./icons/html_icon.png";
import react from "./icons/react_icon.png";
import tailwind from "./icons/tailwind_icon.png";
import ts from "./icons/ts_icon.png";
import vscode from "./icons/vsCode_icon.png";
import "./PortfolioPage.css";
import ScrollToTop from "./ScrollToTop";
import mija from "./videos/mija - preview.mp4";
import calendar from "./videos/calendar - preview.mp4";

export default function PortfolioPage() {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(
          anchor.getAttribute("href") || "",
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
            "opacity:1; transform:translateY(0)",
          );
        }
      });
    }, observerOptions);

    document.querySelectorAll(".project-card, .skill-item").forEach((el) => {
      el.setAttribute(
        "style",
        "opacity:0; transform:translateY(30px); transition:opacity 0.8s ease, transform 0.8s ease",
      );
      observer.observe(el);
    });
  }, []);

  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div>
      <nav>
        <div className="logo">BM</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contacts</a>
          </li>
        </ul>
      </nav>

      <section className="hero" id="home">
        <div className="organic-shape shape2"></div>
        <div className="organic-shape shape3"></div>

        <div className="hero-content">
          <h1 className="typewriter">
            Hello, I'm <strong>Beatriz Matias 🍂</strong>
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

      <section className="about" id="about">
        <h2>About Me 🌿</h2>
        <p className="section-subtitle">
          I’m a front-end developer who loves bringing ideas to life through
          thoughtful, intuitive design. What inspires me most is turning
          something that starts as a thought into a real, interactive experience
          people can connect with. I’m always looking for new challenges that
          push me to grow, whether it’s learning a new framework or
          collaborating with others to build something meaningful.
        </p>

        <h3>My Skills</h3>
        <div className="about-grid">
          <div className="skill">
            <img src={html} alt="HTML icon" className="icon-img" />
          </div>
          <div className="skill">
            {" "}
            <img src={css} alt="CSS icon" className="icon-img" />
          </div>
          <div className="skill">
            {" "}
            <img src={react} alt="React.js icon" className="icon-img" />
          </div>
          <div className="skill dif">
            {" "}
            <img src={tailwind} alt="Tailwind icon" className="icon-img" />
          </div>
          <div className="skill">
            {" "}
            <img src={ts} alt="TypeScript icon" className="icon-img" />
          </div>
        </div>
        <div className="about-grid-two">
          <div className=""> </div>
          <div className=""> </div>
          <div className=""> </div>
          <div className="skill">
            {" "}
            <img src={vscode} alt="VSCode icon" className="icon-img" />
          </div>
          <div className="skill">
            {" "}
            <img src={figma} alt="Figma icon" className="icon-img" />
          </div>
          <div className=""> </div>
          <div className=""> </div>
          <div className=""> </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <h2> Projects 🍃</h2>

        <div className="projects-grid">
          <div className="project-card">
            <h3>Employee Dashboard</h3>
            <p>A ....</p>
            <div className="tags">
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
              <span className="tag">JavaScript</span>
              <span className="tag">Ant Design</span>
            </div>
          </div>
          {/*}
             <div className="project-card">
            <h3>Sol e Chuva</h3>
            <p>
              A web/mobile app that provides real-time weather forecasts for
              Portugal, allows location searches, and displays conditions in a
              responsive, user-friendly interface.
            </p>
            <div className="tags">
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">CSS</span>
              <span className="tag">IPMA API</span>
            </div>
            </div>
            */}
          <div
            className="project-card"
            onClick={() => setActiveVideo(calendar)}
          >
            <h3>Interactive Calendar</h3>
            <p>
              Interactive calendar web application that allows users to create,
              view, manage, and receive reminders for personal events through an
              intuitive UI.
            </p>
            <div className="tags">
              <span className="tag">React</span>
              <span className="tag">HTML</span>
              <span className="tag">TypeScript</span>
              <span className="tag">CSS</span>
              <span className="tag">Lucide React</span>
            </div>
          </div>

          <div className="project-card" onClick={() => setActiveVideo(mija)}>
            <h3>Toilet Finder</h3>
            <p>
              A mobile/web app that helps users to locate public restrooms, mark
              favorites, leave reviews, purchase subscription, and explore
              aesthetic bathroom designs in a gallery.
            </p>
            <div className="tags">
              <span className="tag">React</span>
              <span className="tag">HTML</span>
              <span className="tag">TypeScript</span>
              <span className="tag">CSS</span>
              <span className="tag">APIs</span>
              <span className="tag">Figma</span>
            </div>
          </div>

          {activeVideo && (
            <div
              className="video-modal-overlay"
              onClick={() => setActiveVideo(null)}
            >
              <div
                className="video-modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <video
                  controls
                  autoPlay
                  loop
                  style={{ width: "800px", borderRadius: "12px" }}
                >
                  <source src={activeVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button
                  className="close-video-button"
                  onClick={() => setActiveVideo(null)}
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-content">
          <h2>Get In Touch! ☘️</h2>
          <div className="contact-links">
            <a href="mailto:biasmatias99@gmail.com" className="contact-link">
              <img
                src={Mail}
                alt="Mail icon"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
            <a
              href="https://github.com/Beatrizsanmatias"
              className="contact-link"
              target="_blank"
            >
              <img
                src={Github}
                alt="Github icon"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/beatriz-matias-830259236/"
              className="contact-link"
              target="_blank"
            >
              <img
                src={Linkedin}
                alt="Linkedin icon"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </div>
        </div>
      </section>
      <div>
        <ScrollToTop />
      </div>
    </div>
  );
}
