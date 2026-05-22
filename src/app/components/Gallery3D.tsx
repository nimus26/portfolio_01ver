import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, useParams } from "react-router";
import { PROJECTS, type MarkType, type Project } from "../data/projects";
import "./Gallery3D.css";

const wallVariants = {
  enter: (dir: number) => ({
    rotateY: dir > 0 ? -72 : 72,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, damping: 30, stiffness: 160 },
  },
  exit: (dir: number) => ({
    rotateY: dir > 0 ? 72 : -72,
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.32, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
  }),
};

function WallLabel({ children }: { children: ReactNode }) {
  return <p className="gallery-wall-label">{children}</p>;
}

function WireframeHero({ mark }: { mark: MarkType }) {
  return (
    <div className="wireframe-hero" aria-label="Project visual archive placeholder">
      <svg className="wireframe-hero__grid" preserveAspectRatio="none" viewBox="0 0 160 65" aria-hidden="true">
        {[20, 40, 60, 80, 100, 120, 140].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="65" stroke="#111111" strokeWidth="0.5" />
        ))}
        {[16, 32, 49].map((y) => (
          <line key={y} x1="0" y1={y} x2="160" y2={y} stroke="#111111" strokeWidth="0.5" />
        ))}
        {mark === "canvas" && (
          <>
            <rect x="60" y="20" width="40" height="25" fill="none" stroke="#111111" strokeWidth="0.6" opacity="0.2" />
            <line x1="60" y1="32.5" x2="100" y2="32.5" stroke="#111111" strokeWidth="0.4" opacity="0.15" />
            <line x1="80" y1="20" x2="80" y2="45" stroke="#111111" strokeWidth="0.4" opacity="0.15" />
          </>
        )}
      </svg>
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
        <WireframeHero mark={p.mark} />
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

export function Gallery3D() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id);

  const [wallIndex, setWallIndex] = useState(0);
  const dirRef = useRef(1);

  const go = (nextIndex: number) => {
    dirRef.current = nextIndex > wallIndex ? 1 : -1;
    setWallIndex(Math.max(0, Math.min(WALLS.length - 1, nextIndex)));
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

  if (!project) {
    return (
      <div className="gallery-not-found">
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <div className="gallery-3d">
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
                onClick={() => {
                  dirRef.current = index > wallIndex ? 1 : -1;
                  setWallIndex(index);
                }}
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
        <AnimatePresence custom={dirRef.current} mode="wait">
          <motion.div
            key={wallIndex}
            custom={dirRef.current}
            variants={wallVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="gallery-stage__wall"
          >
            <div className="gallery-stage__floor-line" aria-hidden="true" />

            {wallIndex === 0 && <Wall1 p={project} />}
            {wallIndex === 1 && <Wall2 p={project} />}
            {wallIndex === 2 && <Wall3 p={project} />}
            {wallIndex === 3 && <Wall4 p={project} onExit={() => navigate("/")} />}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="gallery-bottombar">
        <span>
          Wall {wallIndex + 1} - {WALLS[wallIndex]}
        </span>
        <span>Arrow keys to navigate - Esc to exit</span>
      </div>
    </div>
  );
}
