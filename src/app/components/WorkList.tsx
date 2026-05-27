import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { PROJECTS, type Project } from "../data/projects";
import "./WorkList.css";

import pamphletJuhap       from "../../asset/pamphlet_juhap.png";
import pamphletKia         from "../../asset/pamphlet_kia.png";
import pamphletLotte       from "../../asset/pamphlet_lotte.png";
import pamphletPolzzack    from "../../asset/pamphlet_polzzack.png";
import pocketJuhap         from "../../asset/pocket_test.png";
import pocketKia           from "../../asset/pocket_test.png";
import pocketLotte         from "../../asset/pocket_test.png";
import pocketPolzzack      from "../../asset/pocket_test.png";
import pocketJuhapFront    from "../../asset/pocket_juhap_front.png";
import pocketKiaFront      from "../../asset/pocket_kia_front.png";
import pocketLotteFront    from "../../asset/pocket_lotte_front.png";
import pocketPolzzackFront from "../../asset/pocket_polzzack_front.png";

const PROJECT_IMAGES: Record<string, { back: string; pamphlet: string; front: string }> = {
  "01": { back: pocketLotte,    pamphlet: pamphletLotte,    front: pocketLotteFront },
  "02": { back: pocketJuhap,    pamphlet: pamphletJuhap,    front: pocketJuhapFront },
  "03": { back: pocketKia,      pamphlet: pamphletKia,      front: pocketKiaFront },
  "04": { back: pocketPolzzack, pamphlet: pamphletPolzzack, front: pocketPolzzackFront },
};

const CATALOGUE_PROJECT_ORDER = ["02", "03", "01", "04"] as const;

const RESTING_Y = 12;
const HOVER_Y = -42;
const ENTER_Y = -132;

function PamphletCard({ project, displayIndex }: { project: Project; displayIndex: number }) {
  const [hovered, setHovered] = useState(false);
  const [opening, setOpening] = useState(false);
  const [unfolding, setUnfolding] = useState(false);
  const unfoldTimerRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);
  const navigateTimerRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);
  const navigate = useNavigate();
  const imgs = PROJECT_IMAGES[project.id];
  const isActive = hovered || opening;

  useEffect(() => {
    return () => {
      if (unfoldTimerRef.current) window.clearTimeout(unfoldTimerRef.current);
      if (navigateTimerRef.current) window.clearTimeout(navigateTimerRef.current);
    };
  }, []);

  const openProject = () => {
    if (opening) return;

    setHovered(true);
    setOpening(true);
    setUnfolding(false);

    unfoldTimerRef.current = window.setTimeout(() => setUnfolding(true), 320);
    navigateTimerRef.current = window.setTimeout(() => navigate(`/project/${project.id}`), 980);
  };

  return (
    <article className="catalogue-case-card">
      <motion.div
        className={`pamphlet-card${opening ? " is-opening" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          if (!opening) setHovered(false);
        }}
        onFocus={() => setHovered(true)}
        onBlur={() => {
          if (!opening) setHovered(false);
        }}
        onClick={openProject}
        role="button"
        tabIndex={0}
      aria-label={`${project.title} 상세 전시 보기`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openProject();
          }
        }}
      >
        <div className="pamphlet-card__stage">

          <img
            src={imgs.back}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="pamphlet-card__image pamphlet-card__image--back"
          />

          <motion.div
            className="pamphlet-card__sheet"
            animate={{ y: opening ? ENTER_Y : isActive ? HOVER_Y : RESTING_Y }}
            transition={{ type: "spring", damping: 30, stiffness: 220 }}
          >
            <div className="pamphlet-card__sheet-inner">
              <span
                className={[
                  "pamphlet-card__page-under",
                  opening ? "is-visible" : "",
                  opening && !unfolding ? "is-before-unfold" : "",
                ].filter(Boolean).join(" ")}
                aria-hidden="true"
              />
              <motion.div
                className="pamphlet-card__cover"
                animate={{ rotateY: unfolding ? -148 : 0 }}
                transition={{ duration: unfolding ? 0.58 : 0.24, ease: [0.25, 1, 0.5, 1] }}
              >
                <span className="pamphlet-card__page-back" aria-hidden="true" />
                <img
                  src={imgs.pamphlet}
                  alt={project.title}
                  draggable={false}
                  className="pamphlet-card__image pamphlet-card__image--pamphlet"
                />
              </motion.div>
            </div>
          </motion.div>

          <img
            src={imgs.front}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="pamphlet-card__image pamphlet-card__image--front"
          />

        </div>
      </motion.div>

      <button type="button" className="catalogue-case-card__caption" onClick={openProject}>
        <span className="catalogue-case-card__room">Room {String(displayIndex).padStart(2, "0")} / {project.roomTitle}</span>
        <span className="catalogue-case-card__title">{project.title}</span>
        <span className="catalogue-case-card__meta">{project.type} - {project.period} - {project.role}</span>
        <span className="catalogue-case-card__problem">{project.problem}</span>
        <span className="catalogue-case-card__evidence">{project.evidenceStatus}</span>
      </button>
    </article>
  );
}

export function WorkList() {
  const catalogueProjects = CATALOGUE_PROJECT_ORDER
    .map((projectId) => PROJECTS.find((project) => project.id === projectId))
    .filter((project): project is Project => Boolean(project));

  return (
    <section id="room-03-catalogue" className="gallery-room room-catalogue">

      <header className="catalogue-header">
        <div className="catalogue-label-row">
          <span className="catalogue-section-label">Room 02 // 프로젝트 전시</span>
          <div className="catalogue-rule" />
          <span className="catalogue-count">04 case studies</span>
        </div>
        <div className="catalogue-title-row">
          <h2 className="catalogue-title">
            Projects<br /><em>catalog</em>
          </h2>
          <p className="catalogue-description">
            UIUX 프로젝트를 문제, 역할, 과정, 해결안, 주요 화면 순서로 정리했습니다.
            전시관의 여백은 유지하되 채용 검토자가 빠르게 읽을 수 있게 구성했습니다.
          </p>
        </div>
      </header>

      <div className="catalogue-card-grid">
        {catalogueProjects.map((project, index) => (
          <div key={project.id} className="catalogue-card-grid__cell">
            <PamphletCard project={project} displayIndex={index + 1} />
          </div>
        ))}
      </div>

    </section>
  );
}
