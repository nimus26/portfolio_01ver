import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router";
import { PROJECTS, type Project } from "../data/projects";
import "./Gallery3D.css";

function WallLabel({ children }: { children: ReactNode }) {
  return <p className="gallery-wall-label">{children}</p>;
}

function WireframeHero() {
  return (
    <div className="wireframe-hero" aria-label="Project visual archive placeholder">
      <span className="wireframe-hero__label">Visual Archive - Coming Soon</span>
    </div>
  );
}

function Wall1({ p }: { p: Project }) {
  return (
    <div className="gallery-wall">
      <WallLabel>01 - Vision &amp; Hero</WallLabel>

      <div className="gallery-wall__title-stack">
        <motion.h1
          initial={{ opacity: 0, z: -40 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="gallery-wall-title"
        >
          {p.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="gallery-wall-subtitle"
        >
          {p.subtitle}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, type: "spring", damping: 28, stiffness: 180 }}
        className="gallery-wall__hero"
      >
        <WireframeHero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="gallery-wall__meta"
      >
        <div>
          <p className="gallery-meta-label">
            {p.type} - {p.year}
          </p>
          <p className="gallery-summary">{p.summary}</p>
        </div>
        <div className="gallery-role-block">
          <p className="gallery-meta-label">Role</p>
          <p className="gallery-role">{p.role}</p>
        </div>
      </motion.div>
    </div>
  );
}

function Wall2({ p }: { p: Project }) {
  return (
    <div className="gallery-wall">
      <WallLabel>02 - Strategy &amp; Process</WallLabel>

      <div className="gallery-panel-grid gallery-panel-grid--two">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: "spring", damping: 28, stiffness: 160 }}
          className="gallery-panel"
        >
          <p className="gallery-panel-label">Tech Stack - Selection Logic</p>
          <div className="gallery-tech-tags">
            {p.tech.map((tech) => (
              <span key={tech} className="gallery-tech-tag">
                {tech}
              </span>
            ))}
          </div>
          <p className="gallery-body-copy">{p.techRationale}</p>

          <div className="gallery-panel__section">
            <p className="gallery-panel-label gallery-panel-label--compact">Key Contributions</p>
            <ul className="gallery-list">
              {p.contributions.map((contribution) => (
                <li key={contribution} className="gallery-list__item">
                  <span className="gallery-list__marker" aria-hidden="true">
                    -
                  </span>
                  {contribution}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.28, type: "spring", damping: 28, stiffness: 160 }}
          className="gallery-panel"
        >
          <p className="gallery-panel-label">Business Goals</p>
          <p className="gallery-lede">{p.businessGoals}</p>

          <div className="gallery-panel__section gallery-panel__section--bottom">
            <p className="gallery-panel-label gallery-panel-label--compact">Core Metrics</p>
            <div className="gallery-metric-grid">
              {p.achievements.map((achievement) => (
                <div key={achievement.label} className="gallery-metric">
                  <p className="gallery-metric__value">{achievement.value}</p>
                  <p className="gallery-metric__label">{achievement.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Wall3({ p }: { p: Project }) {
  return (
    <div className="gallery-wall">
      <WallLabel>03 - Problem Solving: Situation / Action / Result</WallLabel>

      <div className="gallery-sar">
        <div className="gallery-sar__header">
          {["Situation", "Action Taken", "Result Achieved"].map((heading) => (
            <div key={heading} className="gallery-sar__heading-cell">
              <span>{heading}</span>
            </div>
          ))}
        </div>

        {p.sar.map((row, index) => (
          <motion.div
            key={`${row.s}-${index}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + index * 0.1, type: "spring", damping: 28, stiffness: 180 }}
            className="gallery-sar__row"
          >
            <div className="gallery-sar__cell">
              <p className="gallery-body-copy">{row.s}</p>
            </div>
            <div className="gallery-sar__cell gallery-sar__cell--emphasis">
              <p className="gallery-body-copy">{row.a}</p>
            </div>
            <div className="gallery-sar__cell gallery-sar__cell--emphasis">
              <p className="gallery-result-copy">{row.r}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Wall4({ p, onExit }: { p: Project; onExit: () => void }) {
  return (
    <div className="gallery-wall">
      <WallLabel>04 - Outcome &amp; Retrospective</WallLabel>

      <div className="gallery-panel-grid gallery-panel-grid--two">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="gallery-panel"
        >
          <p className="gallery-panel-label">Final Metrics</p>
          <div className="gallery-final-metrics">
            {p.achievements.map((achievement) => (
              <div key={achievement.label} className="gallery-final-metric">
                <span className="gallery-final-metric__value">{achievement.value}</span>
                <span className="gallery-final-metric__label">{achievement.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.28, duration: 0.5 }}
          className="gallery-panel"
        >
          <p className="gallery-panel-label">Reflection &amp; Growth</p>
          <blockquote className="gallery-reflection">"{p.reflection}"</blockquote>

          <div className="gallery-panel__section">
            <p className="gallery-panel-label gallery-panel-label--compact">One-line result</p>
            <p className="gallery-outcome">{p.result}</p>
            <button className="gallery-return-button" type="button" onClick={onExit}>
              Return to Catalogue
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const WALLS = ["Vision", "Process", "Problem / SAR", "Outcome"] as const;
const cubeFaces = ["front", "right", "back", "left"] as const;
const maxScrollIndex = WALLS.length - 1;

export function Gallery3D() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id);

  const [wallIndex, setWallIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const go = (nextIndex: number) => {
    const targetIndex = Math.max(0, Math.min(maxScrollIndex, nextIndex));
    const scroller = scrollRef.current;

    if (!scroller) {
      setWallIndex(targetIndex);
      setScrollProgress(targetIndex);
      return;
    }

    scroller.scrollTo({
      top: targetIndex * scroller.clientHeight,
      behavior: "smooth",
    });
  };

  const prev = () => go(wallIndex - 1);
  const next = () => go(wallIndex + 1);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "ArrowDown") next();
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") prev();
      if (event.key === "Escape") navigate("/");
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [wallIndex, navigate]);

  const handleScroll = () => {
    const scroller = scrollRef.current;
    if (!scroller) return;

    const progress = Math.min(maxScrollIndex, Math.max(0, scroller.scrollTop / scroller.clientHeight));
    setScrollProgress(progress);
    setWallIndex(Math.round(progress));
  };

  if (!project) {
    return (
      <div className="gallery-not-found">
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <motion.div
      className="gallery-3d"
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.42, ease: [0.25, 1, 0.5, 1] }}
    >
      <div className="gallery-topbar">
        <div className="gallery-topbar__left">
          <button type="button" onClick={() => navigate("/")} className="gallery-breadcrumb-button">
            Portfolio
          </button>
          <span className="gallery-topbar__separator" aria-hidden="true">
            |
          </span>
          <span className="gallery-topbar__title">{project.title}</span>
          <span className="gallery-topbar__subtitle">- {project.subtitle}</span>
        </div>

        <div className="gallery-topbar__right">
          <div className="gallery-wall-dots" aria-label="Project wall navigation">
            {WALLS.map((wall, index) => (
              <button
                key={wall}
                type="button"
                onClick={() => go(index)}
                className={`gallery-wall-dot${index === wallIndex ? " is-active" : ""}`}
                aria-label={`Go to ${wall}`}
                aria-current={index === wallIndex ? "step" : undefined}
              />
            ))}
          </div>
          <span className="gallery-wall-count">
            {wallIndex + 1} / {WALLS.length}
          </span>
          <div className="gallery-step-controls">
            <button type="button" onClick={prev} disabled={wallIndex === 0} className="gallery-step-button">
              Prev
            </button>
            <button type="button" onClick={next} disabled={wallIndex === WALLS.length - 1} className="gallery-step-button">
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="gallery-stage">
        <div className="gallery-face-caption" aria-hidden="true">
          <span className="gallery-face-caption__number">
            {String(wallIndex + 1).padStart(2, "0")}
          </span>
          <span className="gallery-face-caption__name">{WALLS[wallIndex]}</span>
        </div>

        <div className="gallery-cube-scene">
          <motion.div
            className="gallery-cube"
            animate={{
              rotateY: -scrollProgress * 90,
              z: Math.sin(scrollProgress * Math.PI) * 24,
            }}
            transition={{ type: "spring", damping: 36, stiffness: 150 }}
          >
            {cubeFaces.map((face, index) => (
              <section
                key={face}
                className={`gallery-cube__face gallery-cube__face--${face}`}
                aria-hidden={index !== wallIndex}
              >
                {index === 0 && <Wall1 p={project} />}
                {index === 1 && <Wall2 p={project} />}
                {index === 2 && <Wall3 p={project} />}
                {index === 3 && <Wall4 p={project} onExit={() => navigate("/")} />}
              </section>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="gallery-bottombar">
        <span>
          Wall {wallIndex + 1} - {WALLS[wallIndex]}
        </span>
        <span>Scroll to move through the room - Esc to exit</span>
      </div>

      <div
        ref={scrollRef}
        className="gallery-scroll-driver"
        onScroll={handleScroll}
        aria-label="Project section scroll"
      >
        {WALLS.map((wall, index) => (
          <section key={wall} className="gallery-scroll-section" aria-label={`${index + 1}. ${wall}`} />
        ))}
      </div>
    </motion.div>
  );
}
