import { useEffect, useRef, useState, type CSSProperties, type WheelEvent } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router";
import galleryIndexJuhap from "../../asset/gallery_index_juhap.png";
import { PROJECTS, type Project } from "../data/projects";
import "./Gallery3D.css";

const FALLBACK_LABELS = ["THE INDEX", "THE OBSERVER", "THE SOLVER", "THE PROOF", "THE LOG"] as const;
const CUBE_FACES = ["front", "right", "back", "left", "return"] as const;
const MAX_WALL_INDEX = FALLBACK_LABELS.length - 1;
const FACE_EDGE_SETTLE_MS = 260;

function PhoneMock({ variant = "front" }: { variant?: "front" | "back" }) {
  return (
    <div className={`juhap-phone juhap-phone--${variant}`} aria-hidden="true">
      <div className="juhap-phone__notch" />
      <div className="juhap-phone__screen">
        {variant === "front" ? (
          <>
            <div className="juhap-phone__topline">
              <span>주합</span>
              <span>⌕</span>
            </div>
            <p className="juhap-phone__question">오늘은 어떤 술과 함께할까요?</p>
            <div className="juhap-phone__hero-card">
              <span>추천 페어링</span>
              <strong>장작구이와 하우스 막걸리</strong>
            </div>
            <div className="juhap-phone__chips">
              {["혼술", "회식", "선물", "입문"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="juhap-phone__food-grid">
              <span />
              <span />
            </div>
          </>
        ) : (
          <div className="juhap-phone__splash">
            <strong>주합</strong>
            <span>술을 고르는 흐름을 바꾸다</span>
          </div>
        )}
      </div>
    </div>
  );
}

function WallIndexFigma230() {
  return (
    <div className="gallery-wall gallery-wall--index-figma">
      <section className="gallery-index-section" data-node-id="230:1459">
        <div className="gallery-index-section__copy">
          <p className="gallery-index-section__eyebrow">01 / THE INDEX</p>
          <h1 className="gallery-index-section__title">주합</h1>
          <p className="gallery-index-section__summary">
            정보의 양은 많지만 정작 '나에게 맞는 정답'을 찾지 못해 피로를 느끼는 소비자를 위해, 상황 기반
            AI 추천과 유저 경험 데이터를 결합하여 '실패 없는 의사결정 도구'를 설계했습니다.
          </p>
          <div className="gallery-index-section__meta">
            <div>
              <p>DURATION</p>
              <span>2026.04 - 2026.05</span>
            </div>
            <div>
              <p>ROLE</p>
              <span>PM, 기획</span>
            </div>
            <div className="gallery-index-section__tools">
              <p>TOOLS</p>
              <span>Figma, Gemini, Codex, Claude, Perplexity, VS Code, Git/GitHub</span>
            </div>
          </div>
        </div>
        <div className="gallery-index-section__visual">
          <img
            className="gallery-index-section__image"
            src={galleryIndexJuhap}
            alt="주합: 실패 없는 주종 페어링 인공지능 챗봇"
          />
        </div>
      </section>
    </div>
  );
}

function WallIndexFigma() {
  return (
    <div className="gallery-wall gallery-wall--index-figma">
      <section className="gallery-index-section" data-node-id="170:1532">
        <div className="gallery-index-section__copy">
          <p className="gallery-index-section__eyebrow">01 / THE INDEX</p>
          <h1 className="gallery-index-section__title">주합</h1>
          <p className="gallery-index-section__summary">
            정보의 양은 많지만 정작 '나에게 맞는 정답'을 찾지 못해 피로를 느끼는 소비자를 위해, 상황 기반
            AI 추천과 유저 경험 데이터를 결합하여 '실패 없는 의사결정 도구'를 설계했습니다.
          </p>
          <div className="gallery-index-section__meta">
            <div>
              <p>DURATION</p>
              <span>2026.04 - 2026.05</span>
            </div>
            <div>
              <p>ROLE</p>
              <span>PM, 기획</span>
            </div>
            <div className="gallery-index-section__tools">
              <p>TOOLS</p>
              <span>Figma, Gemini, Codex, Claude, Perplexity, VS Code, Git/GitHub</span>
            </div>
          </div>
        </div>
        <div className="gallery-index-section__visual">
          <img
            className="gallery-index-section__image"
            src={galleryIndexJuhap}
            alt="주합: 실패 없는 주종 페어링 인공지능 챗봇"
          />
        </div>
      </section>
    </div>
  );
}

function WallIndex() {
  return (
    <div className="gallery-wall gallery-wall--index-figma">
      <section className="gallery-index-section" data-node-id="170:1532">
        <div className="gallery-index-section__copy">
          <p className="gallery-index-section__eyebrow">01 / THE INDEX</p>
          <h1 className="gallery-index-section__title">주합</h1>
          <p className="gallery-index-section__summary">
            정보의 양은 많지만 정작 '나에게 맞는 정답'을 찾지 못해 피로를 느끼는 소비자를 위해, 상황 기반 AI 추천과
            유저 경험 데이터를 결합하여 '실패 없는 의사결정 도구'를 설계했습니다.
          </p>
          <div className="gallery-index-section__meta">
            <div>
              <p>DURATION</p>
              <span>2026.04 - 2026.05</span>
            </div>
            <div>
              <p>ROLE</p>
              <span>PM, 기획</span>
            </div>
            <div className="gallery-index-section__tools">
              <p>TOOLS</p>
              <span>Figma, Gemini, Codex, Claude, Perplexity, VS Code, Git/GitHub</span>
            </div>
          </div>
        </div>
        <div className="gallery-index-section__visual">
          <div className="juhap-visual-card">
            <div className="juhap-visual-card__topline">
              <span>2026.04.22~2026.05.22(35일간 진행)</span>
              <span>팀프로젝트 02_주합</span>
            </div>
            <div className="juhap-visual-card__phones">
              <PhoneMock variant="front" />
              <PhoneMock variant="back" />
            </div>
            <div className="juhap-visual-card__title">
              <span>酒合</span>
              <strong>주합</strong>
              <p>실패 없는 주종 페어링 인공지능 챗봇</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function WallObserver() {
  return (
    <div className="gallery-wall gallery-wall--observer-figma">
      <section className="gallery-index-section gallery-index-section--observer">
        <div className="gallery-index-section__copy">
          <p className="gallery-index-section__eyebrow">02 / THE OBSERVER</p>
          <h2 className="gallery-index-section__title">데이터 기반의 문제 정의 (Pain Point)</h2>
          <p className="gallery-index-section__summary">
            설문을 통해 사용자들의 주류 선택 피로와{" "}
            <strong>실패 없는 추천 경험에 대한 니즈를 확인했어요</strong>
          </p>
          <div className="gallery-index-section__meta">
            <div>
              <p>DURATION</p>
              <span>4/29~30까지 2일간</span>
            </div>
            <div>
              <p>RESPONSE</p>
              <span>87명</span>
            </div>
            <div className="gallery-index-section__tools">
              <p>AND</p>
              <span>
                1인 가구 증가와 주말 혼술 트렌드 확산을 통해 '많이 마시는 시장'에서 '덜 실패하고 잘 고르는 시장'으로
                이동하고 있음을 포착했습니다.
              </span>
            </div>
          </div>
        </div>
        <div className="gallery-index-section__visual gallery-index-section__visual--observer">
          <div className="observer-panel">
          <div className="observer-chart-grid">
            <article>
              <h3>선택의 피로도</h3>
              {[
                ["광고성 리뷰인지 구분이 안 된다", "54%"],
                ["정보과다로 뭘 봐야 할지 모르겠다", "27.6%"],
                ["내 상황에 맞는 정보를 찾기 어렵다", "20.7%"],
              ].map(([label, value]) => (
                <div key={label} className="observer-bar">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </article>
            <article>
              <h3>실패의 경험</h3>
              {[
                ["새로운 술에 도전하고 실망한 경험이 있다", "70%"],
                ["그 외", "33.3%"],
              ].map(([label, value]) => (
                <div key={label} className="observer-bar">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </article>
          </div>
            <div className="observer-painpoints">
            {[
              ["01", "신뢰 부족"],
              ["02", "결정 장애"],
              ["03", "실패 경험"],
            ].map(([num, label]) => (
              <div key={num} className="observer-painpoint">
                <div className="observer-painpoint__avatar" />
                <span>PAIN POINT {num}</span>
                <strong>{label}</strong>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function WallSolver() {
  return (
    <div className="gallery-wall gallery-wall--case-section">
      <section className="gallery-case-grid gallery-case-grid--solver">
        <div className="gallery-case-copy">
          <p className="gallery-section-eyebrow">03 / THE SOLVER</p>
          <h2>Structuring the void through precise material subtraction.</h2>
        </div>
        <div className="solver-panel">
          <div className="solver-block">
            <p className="gallery-section-eyebrow">AS-IS vs TO-BE</p>
            <div className="solver-comparison">
              <article>
                <h3>AS-IS</h3>
                <ul>
                  <li>Cluttered navigation</li>
                  <li>High cognitive load</li>
                  <li>Intrusive tooltips</li>
                </ul>
              </article>
              <article>
                <h3>TO-BE</h3>
                <ul>
                  <li>Contextual, hidden UI</li>
                  <li>Progressive disclosure</li>
                  <li>Minimalist intervention</li>
                </ul>
              </article>
            </div>
          </div>
          <div className="solver-block">
            <p className="gallery-section-eyebrow">INFORMATION ARCHITECTURE</p>
            <div className="solver-ia">
              <span>HOME</span>
              <i />
              <div>
                <span>SPACE</span>
                <span>OBJECT</span>
                <span>SILENCE</span>
              </div>
            </div>
          </div>
          <div className="solver-block">
            <p className="gallery-section-eyebrow">DESIGN SYSTEM COMPONENTS</p>
            <div className="solver-components">
              <span>TYPOGRAPHY</span>
              <span>COLOR</span>
              <span>GRID</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function WallProof() {
  return (
    <div className="gallery-wall gallery-wall--proof-figma">
      <section className="proof-section">
        <p className="gallery-section-eyebrow">04 / THE PROOF</p>
        <strong>82.3%</strong>
        <p>Increase in user preference for the minimalist structural approach compared to the legacy layout.</p>
      </section>
    </div>
  );
}

function WallLog() {
  return (
    <div className="gallery-wall gallery-wall--log-figma">
      <section className="log-section">
        <p className="gallery-section-eyebrow">05 / THE LOG</p>
        <h2>Reflections on empty space.</h2>
        <p>
          Designing for absence is inherently more complex than designing for presence. The process of stripping away
          elements until only the essential structure remained taught me that true functionality often hides in plain sight.
        </p>
        <p>
          My initial assumption was that users needed more guidance to navigate the vastness. The data proved otherwise.
          They needed less noise to appreciate the scale. This project fundamentally shifted my approach from adding
          features to refining structures.
        </p>
        <p>
          The 1px line became my primary tool-not as a decoration, but as a load-bearing architectural element within the
          digital space. It separates, defines, and guides without screaming for attention.
        </p>
      </section>
    </div>
  );
}

function FallbackWall({ project, index }: { project: Project; index: number }) {
  const sections = [
    {
      eyebrow: "01 / THE INDEX",
      title: project.title,
      body: project.summary,
      meta: [`${project.year} / ${project.period}`, project.role, project.evidenceStatus],
    },
    {
      eyebrow: "02 / THE OBSERVER",
      title: "Problem",
      body: project.problem,
      meta: project.keyScreens,
    },
    {
      eyebrow: "03 / THE SOLVER",
      title: "Solution",
      body: project.designSolution,
      meta: project.contributions,
    },
    {
      eyebrow: "04 / THE PROOF",
      title: project.achievements[0]?.value ?? "Proof",
      body: project.result,
      meta: project.achievements.map((item) => `${item.value} ${item.label}`),
    },
    {
      eyebrow: "05 / THE LOG",
      title: "Reflection",
      body: project.takeaway,
      meta: project.confirmNeeded,
    },
  ];
  const section = sections[index] ?? sections[0];

  return (
    <div className="gallery-wall gallery-wall--fallback">
      <p className="gallery-fallback__eyebrow">{section.eyebrow}</p>
      <h2 className="gallery-fallback__title">{section.title}</h2>
      <p className="gallery-fallback__body">{section.body}</p>
      <ul className="gallery-fallback__list">
        {section.meta.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function getActiveScroller(faceRefs: React.MutableRefObject<(HTMLElement | null)[]>, wallIndex: number) {
  return faceRefs.current[wallIndex]?.querySelector<HTMLElement>(".gallery-wall") ?? null;
}

function canScroll(scroller: HTMLElement | null, direction: "up" | "down") {
  if (!scroller) return false;
  const overflow = scroller.scrollHeight - scroller.clientHeight;
  if (overflow <= 2) return false;
  if (direction === "down") return scroller.scrollTop < overflow - 2;
  return scroller.scrollTop > 2;
}

function isScrollable(scroller: HTMLElement | null) {
  if (!scroller) return false;
  return scroller.scrollHeight - scroller.clientHeight > 2;
}

function getScrollerProgress(scroller: HTMLElement | null) {
  if (!scroller) return 0;
  const overflow = scroller.scrollHeight - scroller.clientHeight;
  if (overflow <= 2) return 0;
  return Math.min(1, Math.max(0, scroller.scrollTop / overflow));
}

export function Gallery3D() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find((item) => item.id === id);
  const [wallIndex, setWallIndex] = useState(0);
  const [faceScrollProgress, setFaceScrollProgress] = useState(0);
  const faceRefs = useRef<(HTMLElement | null)[]>([]);
  const lastFaceScrollAtRef = useRef(0);
  const isFigmaProject = project?.id === "02";

  const go = (nextIndex: number) => {
    setWallIndex(Math.max(0, Math.min(MAX_WALL_INDEX, nextIndex)));
  };

  const prev = () => go(wallIndex - 1);
  const next = () => go(wallIndex + 1);

  useEffect(() => {
    setWallIndex(0);
  }, [id]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const scroller = getActiveScroller(faceRefs, wallIndex);

      if (event.key === "Escape") {
        navigate("/");
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
        return;
      }

      if (event.key === "ArrowDown" || event.key === "PageDown" || event.key === " ") {
        event.preventDefault();
        if (canScroll(scroller, "down")) {
          scroller?.scrollBy({ top: Math.max(180, scroller.clientHeight * 0.78), behavior: "smooth" });
        } else {
          next();
        }
        return;
      }

      if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        if (canScroll(scroller, "up")) {
          scroller?.scrollBy({ top: -Math.max(180, scroller.clientHeight * 0.78), behavior: "smooth" });
        } else {
          prev();
        }
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [wallIndex, navigate]);

  useEffect(() => {
    const scroller = getActiveScroller(faceRefs, wallIndex);
    scroller?.scrollTo({ top: 0, behavior: "auto" });
    setFaceScrollProgress(0);
    lastFaceScrollAtRef.current = performance.now();
  }, [wallIndex]);

  useEffect(() => {
    const scroller = getActiveScroller(faceRefs, wallIndex);
    if (!scroller) return;

    const syncProgress = () => setFaceScrollProgress(getScrollerProgress(scroller));
    syncProgress();
    scroller.addEventListener("scroll", syncProgress, { passive: true });
    return () => scroller.removeEventListener("scroll", syncProgress);
  }, [wallIndex]);

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (Math.abs(event.deltaY) < 2) return;

    const scroller = getActiveScroller(faceRefs, wallIndex);
    const direction = event.deltaY > 0 ? "down" : "up";
    event.preventDefault();

    if (canScroll(scroller, direction)) {
      scroller?.scrollBy({ top: event.deltaY, behavior: "auto" });
      lastFaceScrollAtRef.current = performance.now();
      return;
    }

    if (isScrollable(scroller) && performance.now() - lastFaceScrollAtRef.current < FACE_EDGE_SETTLE_MS) {
      return;
    }

    if (direction === "down") next();
    else prev();
  };

  if (!project) {
    return (
      <div className="gallery-not-found">
        <p>Project not found</p>
      </div>
    );
  }

  const renderWall = (index: number) => {
    if (!isFigmaProject) {
      return <FallbackWall project={project} index={index} />;
    }

    if (index === 0) return <WallIndexFigma230 />;
    if (index === 1) return <WallObserver />;
    if (index === 2) return <WallSolver />;
    if (index === 3) return <WallProof />;
    return <WallLog />;
  };

  const overallScrollProgress =
    MAX_WALL_INDEX === 0 ? 1 : Math.min(1, Math.max(0, (wallIndex + faceScrollProgress) / MAX_WALL_INDEX));
  const bottombarStyle = {
    "--gallery-scroll-progress": `${overallScrollProgress * 100}%`,
  } as CSSProperties;

  return (
    <motion.div
      className="gallery-3d"
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.42, ease: [0.25, 1, 0.5, 1] }}
      onWheel={handleWheel}
    >
      <div className="gallery-topbar">
        <button type="button" onClick={() => navigate("/")} className="gallery-breadcrumb-button">
          PORTFOLIO
        </button>
        <div className="gallery-topbar__title-group">
          <span className="gallery-topbar__title">{project.title}</span>
          <span className="gallery-topbar__subtitle">{project.subtitle}</span>
        </div>
        <div className="gallery-topbar__right">
          <div className="gallery-wall-dots" aria-label="Project wall navigation">
            {FALLBACK_LABELS.map((wall, index) => (
              <button
                key={wall}
                type="button"
                onClick={() => go(index)}
                className={`gallery-wall-dot${index === wallIndex ? " is-active" : ""}`}
                aria-label={`${wall} wall`}
                aria-current={index === wallIndex ? "step" : undefined}
              />
            ))}
          </div>
          <span className="gallery-wall-count">
            {wallIndex + 1} / {FALLBACK_LABELS.length}
          </span>
          <div className="gallery-step-controls">
            <button type="button" onClick={prev} disabled={wallIndex === 0} className="gallery-step-button">
              PREV
            </button>
            <button type="button" onClick={next} disabled={wallIndex === MAX_WALL_INDEX} className="gallery-step-button">
              NEXT
            </button>
          </div>
        </div>
      </div>

      <div className="gallery-stage">
        <div className="gallery-face-caption" aria-hidden="true">
          <span className="gallery-face-caption__number">{String(wallIndex + 1).padStart(2, "0")}</span>
          <span className="gallery-face-caption__name">{FALLBACK_LABELS[wallIndex]}</span>
        </div>

        <motion.div
          className="gallery-cube"
          animate={{
            rotateY: -wallIndex * 90,
            z: wallIndex === 0 || wallIndex === MAX_WALL_INDEX ? 0 : 24,
          }}
          transition={{ type: "spring", damping: 36, stiffness: 150 }}
        >
          {CUBE_FACES.map((face, index) => (
            <section
              key={face}
              ref={(node) => {
                faceRefs.current[index] = node;
              }}
              className={`gallery-cube__face gallery-cube__face--${face}`}
              data-active={index === wallIndex ? "true" : "false"}
              aria-hidden={index !== wallIndex}
            >
              {renderWall(index)}
            </section>
          ))}
        </motion.div>
      </div>

      <div className="gallery-bottombar" style={bottombarStyle}>
        <span>
          Wall {wallIndex + 1} - {FALLBACK_LABELS[wallIndex]}
        </span>
        <span>Scroll the current face to the end, then the cube turns to the next face.</span>
      </div>
    </motion.div>
  );
}
