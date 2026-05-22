import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { PROJECTS, type Project } from "../data/projects";
import "./WorkList.css";

import pamphletJuhap       from "../../asset/pamphlet_juhap.png";
import pamphletKia         from "../../asset/pamphlet_kia.png";
import pamphletLotte       from "../../asset/pamphlet_lotte.png";
import pamphletPolzzack    from "../../asset/pamphlet_polzzack.png";
import pocketJuhap         from "../../asset/pocket_juhap.png";
import pocketKia           from "../../asset/pocket_kia.png";
import pocketLotte         from "../../asset/pocket_lotte.png";
import pocketPolzzack      from "../../asset/pocket_polzzack.png";
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

const COMPACT_H = 350; // default (tucked) container height in px
const TUCK_Y    = "55%"; // pamphlet translateY when tucked
const REVEAL_Y  = "3%";  // pamphlet translateY when revealed

function PamphletCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const imgs = PROJECT_IMAGES[project.id];

  return (
    <motion.div
      className="pamphlet-card"
      animate={{ height: hovered ? "auto" : COMPACT_H }}
      transition={{ type: "spring", damping: 28, stiffness: 200 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onClick={() => navigate(`/project/${project.id}`)}
      role="button"
      tabIndex={0}
      aria-label={`Enter ${project.title} exhibition`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          navigate(`/project/${project.id}`);
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
          animate={{ y: hovered ? REVEAL_Y : TUCK_Y }}
          transition={{ type: "spring", damping: 30, stiffness: 220 }}
        >
          <motion.div
            className="pamphlet-card__sheet-inner"
            animate={{ rotateX: hovered ? 0 : 12 }}
            transition={{ type: "spring", damping: 22, stiffness: 160 }}
          >
            <img
              src={imgs.pamphlet}
              alt={project.title}
              draggable={false}
              className="pamphlet-card__image pamphlet-card__image--pamphlet"
            />
          </motion.div>
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
            Hover or focus to reveal. Select a project to open the case study.
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
