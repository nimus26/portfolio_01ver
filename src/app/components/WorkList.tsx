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
  "01": { back: pocketJuhap,    pamphlet: pamphletJuhap,    front: pocketJuhapFront },
  "02": { back: pocketKia,      pamphlet: pamphletKia,      front: pocketKiaFront },
  "03": { back: pocketLotte,    pamphlet: pamphletLotte,    front: pocketLotteFront },
  "04": { back: pocketPolzzack, pamphlet: pamphletPolzzack, front: pocketPolzzackFront },
};

const RESTING_Y = 12;
const HOVER_Y = -42;
const ENTER_Y = -132;

function PamphletCard({ project }: { project: Project }) {
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
      aria-label={`Enter ${project.title} exhibition`}
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
  );
}

export function WorkList() {
  return (
    <section id="room-03-catalogue" className="gallery-room room-catalogue">

      <header className="catalogue-header">
        <div className="catalogue-label-row">
          <span className="catalogue-section-label">Room 03 // Exhibition Catalogue</span>
          <div className="catalogue-rule" />
          <span className="catalogue-count">04 Case Studies</span>
        </div>
        <div className="catalogue-title-row">
          <h2 className="catalogue-title">
            Exhibition<br /><em>Catalogue</em>
          </h2>
          <p className="catalogue-description">
            Hover or focus to lift the booklet. Select a project to open the case study.
          </p>
        </div>
      </header>

      <div className="catalogue-card-grid">
        {PROJECTS.map((project) => (
          <div key={project.id} className="catalogue-card-grid__cell">
            <PamphletCard project={project} />
          </div>
        ))}
      </div>

    </section>
  );
}
