import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router";
import { PROJECTS, type Project } from "../data/projects";
import "./Gallery3D.css";
import archiveServicePlan from "../../asset/case-studies/archive-service-plan.png";
import juhapAiRecommend from "../../asset/case-studies/juhap-ai-recommend.png";
import juhapAiChatProfile from "../../asset/case-studies/juhap-ai-chat-profile.png";
import juhapChatbotEntry from "../../asset/case-studies/juhap-chatbot-entry.png";
import juhapPairingDrink from "../../asset/case-studies/juhap-pairing-drink.png";
import juhapProductHero from "../../asset/case-studies/juhap-product-hero.png";
import juhapQuestionBanner from "../../asset/case-studies/juhap-question-banner.png";
import juhapScanSample from "../../asset/case-studies/juhap-scan-sample.png";
import juhapTodayPairingBanner from "../../asset/case-studies/juhap-today-pairing-banner.png";
import kiaBuildFlowBg from "../../asset/case-studies/kia-build-flow-bg.png";
import kiaEv9DetailHero from "../../asset/case-studies/kia-ev9-detail-hero.png";
import kiaModelCard from "../../asset/case-studies/kia-model-card.png";
import lotteEventFlow from "../../asset/case-studies/lotte-event-flow.png";
import lotteLifeShopping from "../../asset/case-studies/lotte-life-shopping.png";
import lotteMainVisualBg from "../../asset/case-studies/lotte-main-visual-bg.png";

type ProjectVisualItem = {
  src: string;
  alt: string;
  caption: string;
};

const PROJECT_VISUALS: Record<string, ProjectVisualItem[]> = {
  "01": [
    {
      src: lotteMainVisualBg,
      alt: "롯데카드 리뉴얼 메인 비주얼 화면",
      caption: "첫 화면에서 서비스 인상과 핵심 메시지를 먼저 전달하도록 메인 비주얼의 역할을 분리했습니다.",
    },
    {
      src: lotteEventFlow,
      alt: "롯데카드 이벤트와 혜택 안내 화면",
      caption: "이벤트와 혜택 정보는 상품 탐색과 섞이지 않도록 별도 흐름으로 정리했습니다.",
    },
    {
      src: lotteLifeShopping,
      alt: "롯데카드 생활 카테고리 카드 탐색 화면",
      caption: "카드 상품은 이름보다 사용 목적을 기준으로 비교할 수 있게 생활 카테고리 중심으로 배치했습니다.",
    },
  ],
  "02": [
    {
      src: juhapAiRecommend,
      alt: "주합 AI 추천 진입 배너",
      caption: "검색어를 떠올리지 못한 사용자가 질문형 배너에서 바로 추천 흐름을 시작하도록 설계했습니다.",
    },
    {
      src: juhapTodayPairingBanner,
      alt: "주합 오늘의 페어링 배너",
      caption: "상황과 음식 맥락을 먼저 보여줘 추천이 단순 상품 나열처럼 보이지 않게 했습니다.",
    },
    {
      src: juhapChatbotEntry,
      alt: "주합 챗봇 진입 화면",
      caption: "챗봇은 별도 기능이 아니라 추천을 도와주는 대화형 진입점으로 배치했습니다.",
    },
    {
      src: juhapScanSample,
      alt: "주합 라벨 스캔 결과 화면",
      caption: "오프라인에서 병 라벨을 본 상황을 바로 정보 확인과 추천 맥락으로 연결했습니다.",
    },
    {
      src: juhapProductHero,
      alt: "주합 주류 상세 정보 화면",
      caption: "추천 이후 확인해야 할 주류 정보는 상세 화면에서 시각적으로 고정해 탐색을 마무리하게 했습니다.",
    },
    {
      src: juhapQuestionBanner,
      alt: "주합 커뮤니티 질문 배너",
      caption: "추천 이후 다시 질문하고 기록하는 흐름을 열어 커뮤니티 사용으로 확장했습니다.",
    },
    {
      src: juhapPairingDrink,
      alt: "주합 페어링 음료 이미지",
      caption: "페어링 결과가 추상적인 설명에 머물지 않도록 실제 음료 이미지로 선택 맥락을 보강했습니다.",
    },
  ],
  "03": [
    {
      src: kiaModelCard,
      alt: "KIA 모델 카드 탐색 화면",
      caption: "모델 탐색 화면은 차량 비교 기준을 빠르게 읽을 수 있도록 카드 구조로 정리했습니다.",
    },
    {
      src: kiaBuildFlowBg,
      alt: "KIA 차량 빌드 플로우 화면",
      caption: "구매 고려 단계는 탐색에서 견적 확인까지 이어지는 흐름이 보이도록 구성했습니다.",
    },
    {
      src: kiaEv9DetailHero,
      alt: "KIA EV9 상세 히어로 화면",
      caption: "상세 페이지는 브랜드 몰입 이미지와 핵심 정보를 함께 확인하는 첫 구간으로 설계했습니다.",
    },
  ],
  "04": [
    {
      src: archiveServicePlan,
      alt: "예술 포트폴리오 플랫폼 서비스 기획 문서",
      caption: "대표 UI 프로젝트가 아니라, 예술 전공자의 작업 기록과 공유 문제를 서비스 구조로 정리한 기획 아카이브입니다.",
    },
  ],
};

const JUHAP_STORY = [
  {
    label: "문제",
    title: "사용자는 무엇을 고를지보다 어디서 시작할지를 더 어려워했습니다.",
    body:
      "술 이름, 맛 표현, 음식 조합을 동시에 알아야 추천을 이해할 수 있었기 때문에 첫 진입 부담이 컸습니다.",
  },
  {
    label: "판단",
    title: "하나의 추천 기능보다 여러 시작점을 만드는 쪽이 적절했습니다.",
    body:
      "질문형 배너, 오늘의 페어링, 라벨 스캔, 챗봇을 서로 다른 맥락의 진입점으로 나누었습니다.",
  },
  {
    label: "역할",
    title: "PM/기획 관점에서 기능보다 흐름을 정리했습니다.",
    body:
      "팀 산출물을 개인 성과처럼 과장하지 않고, 추천 진입 구조와 콘텐츠 우선순위 정리에 초점을 맞췄습니다.",
  },
];

const JUHAP_FLOW_NOTES = [
  "질문형 진입: 사용자가 검색어를 몰라도 추천을 시작할 수 있게 합니다.",
  "상황별 추천: 음식, 분위기, 취향을 기준으로 선택 맥락을 좁힙니다.",
  "라벨 스캔: 오프라인에서 본 술을 바로 정보 확인으로 연결합니다.",
  "챗봇: 긴 설명보다 짧은 질문으로 추천 기준을 좁힙니다.",
  "커뮤니티: 추천 이후 질문과 기록으로 이어지는 후속 행동을 만듭니다.",
];

function WallLabel({ children }: { children: ReactNode }) {
  return <p className="gallery-wall-label">{children}</p>;
}

function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  const visuals = PROJECT_VISUALS[project.id] ?? [];
  const visibleVisuals = compact ? visuals.slice(0, 2) : visuals;

  return (
    <div className={`project-visual${compact ? " project-visual--compact" : ""}`}>
      <div className="project-visual__image-grid">
        {visibleVisuals.map((visual) => (
          <figure key={visual.src} className="project-visual__item">
            <div className="project-visual__image-frame">
              <img className="project-visual__image" src={visual.src} alt={visual.alt} />
            </div>
            <figcaption className="project-visual__caption">{visual.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function JuhapStoryBoard() {
  return (
    <div className="juhap-story-board">
      {JUHAP_STORY.map((item) => (
        <article key={item.label} className="juhap-story-card">
          <p className="juhap-story-card__label">{item.label}</p>
          <h2 className="juhap-story-card__title">{item.title}</h2>
          <p className="juhap-story-card__body">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function JuhapFlowBoard() {
  return (
    <div className="juhap-flow-board">
      <div className="juhap-flow-board__visuals">
        <figure className="juhap-flow-figure juhap-flow-figure--wide">
          <img src={juhapScanSample} alt="주합 라벨 스캔 결과 화면" />
          <figcaption>라벨 스캔에서 추천 맥락으로 이어지는 화면 근거</figcaption>
        </figure>
        <figure className="juhap-flow-figure">
          <img src={juhapAiChatProfile} alt="주합 챗봇 프로필 화면" />
          <figcaption>대화형 안내말의 친근한 진입점</figcaption>
        </figure>
      </div>
      <ol className="juhap-flow-board__list">
        {JUHAP_FLOW_NOTES.map((note, index) => (
          <li key={note}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{note}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Wall1({ p }: { p: Project }) {
  return (
    <div className="gallery-wall">
      <WallLabel>01 - 개요 / 화면 근거</WallLabel>

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
        <ProjectVisual project={p} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="gallery-wall__meta"
      >
        <div>
          <p className="gallery-meta-label">
            {p.type} - {p.year} - {p.period}
          </p>
          <p className="gallery-summary">{p.summary}</p>
        </div>
        <div className="gallery-role-block">
          <p className="gallery-meta-label">역할</p>
          <p className="gallery-role">{p.role}</p>
        </div>
      </motion.div>
    </div>
  );
}

function Wall2({ p }: { p: Project }) {
  return (
    <div className="gallery-wall">
      <WallLabel>02 - 문제 / 목표 / 역할</WallLabel>

      <div className="gallery-panel-grid gallery-panel-grid--two">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: "spring", damping: 28, stiffness: 160 }}
          className="gallery-panel"
        >
          <p className="gallery-panel-label">문제</p>
          <p className="gallery-lede">{p.problem}</p>

          <div className="gallery-panel__section">
            <p className="gallery-panel-label gallery-panel-label--compact">목표</p>
            <p className="gallery-body-copy">{p.goal}</p>
          </div>

          <div className="gallery-panel__section">
            <p className="gallery-panel-label gallery-panel-label--compact">나의 역할</p>
            <p className="gallery-body-copy">{p.myRole}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.28, type: "spring", damping: 28, stiffness: 160 }}
          className="gallery-panel"
        >
          <p className="gallery-panel-label">과정</p>
          {p.id === "02" && <JuhapStoryBoard />}
          <ul className="gallery-list">
            {p.process.map((step) => (
              <li key={step} className="gallery-list__item">
                <span className="gallery-list__marker" aria-hidden="true">
                  -
                </span>
                {step}
              </li>
            ))}
          </ul>

          <div className="gallery-panel__section">
            <p className="gallery-panel-label gallery-panel-label--compact">도구 / 매체</p>
            <div className="gallery-tech-tags">
              {p.tech.map((tech) => (
                <span key={tech} className="gallery-tech-tag">
                  {tech}
                </span>
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
      <WallLabel>03 - 해결안 / 주요 화면</WallLabel>

      <div className="gallery-panel-grid gallery-panel-grid--two">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: "spring", damping: 28, stiffness: 160 }}
          className="gallery-panel"
        >
          <p className="gallery-panel-label">디자인 해결안</p>
          <p className="gallery-lede">{p.designSolution}</p>

          <div className="gallery-panel__section">
            <p className="gallery-panel-label gallery-panel-label--compact">주요 화면</p>
            <ul className="gallery-list">
              {p.keyScreens.map((screen) => (
                <li key={screen} className="gallery-list__item">
                  <span className="gallery-list__marker" aria-hidden="true">
                    -
                  </span>
                  {screen}
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
          <p className="gallery-panel-label">시각 자료 설명</p>
          {p.id === "02" ? <JuhapFlowBoard /> : <ProjectVisual project={p} compact />}

          <div className="gallery-panel__section">
            <p className="gallery-panel-label gallery-panel-label--compact">기여 초점</p>
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

          <div className="gallery-panel__section gallery-panel__section--bottom">
            <p className="gallery-panel-label gallery-panel-label--compact">근거</p>
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

function Wall4({ p }: { p: Project }) {
  return (
    <div className="gallery-wall">
      <WallLabel>04 - 상황 / 행동 / 결과</WallLabel>

      <div className="gallery-sar">
        <div className="gallery-sar__header">
          {["상황", "진행한 일", "확인한 결과"].map((heading) => (
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

function Wall5({ p, onExit }: { p: Project; onExit: () => void }) {
  return (
    <div className="gallery-wall">
      <WallLabel>05 - 배운 점 / 공개 전 확인</WallLabel>

      <div className="gallery-panel-grid gallery-panel-grid--two">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="gallery-panel"
        >
          <p className="gallery-panel-label">확인한 근거</p>
          <div className="gallery-final-metrics">
            {p.achievements.map((achievement) => (
              <div key={achievement.label} className="gallery-final-metric">
                <span className="gallery-final-metric__value">{achievement.value}</span>
                <span className="gallery-final-metric__label">{achievement.label}</span>
              </div>
            ))}
          </div>
          {p.id === "02" && (
            <div className="gallery-panel__section">
              <p className="gallery-panel-label gallery-panel-label--compact">시각 자료 사용 기준</p>
              <p className="gallery-body-copy">
                발표 링크를 직접 열지 않고 로컬 테스트 화면과 이미지 자료를 기준으로 구성했습니다. 추천, 스캔,
                챗봇, 질문 배너처럼 사용 흐름이 달라지는 화면만 골라 배치했습니다.
              </p>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.28, duration: 0.5 }}
          className="gallery-panel"
        >
          <p className="gallery-panel-label">배운 점</p>
          <blockquote className="gallery-reflection">"{p.takeaway}"</blockquote>

          <div className="gallery-panel__section">
            <p className="gallery-panel-label gallery-panel-label--compact">검증된 결과</p>
            <p className="gallery-outcome">{p.result}</p>
            <p className="gallery-panel-label gallery-panel-label--compact">공개 전 확인</p>
            <ul className="gallery-list gallery-list--compact">
              {p.confirmNeeded.map((item) => (
                <li key={item} className="gallery-list__item">
                  <span className="gallery-list__marker" aria-hidden="true">
                    -
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <button className="gallery-return-button" type="button" onClick={onExit}>
              목록으로 돌아가기
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const WALLS = ["개요", "문제", "해결안", "SAR", "배운 점"] as const;
const cubeFaces = ["front", "right", "back", "left", "return"] as const;
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
            포트폴리오
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
                aria-label={`${wall} 벽으로 이동`}
                aria-current={index === wallIndex ? "step" : undefined}
              />
            ))}
          </div>
          <span className="gallery-wall-count">
            {wallIndex + 1} / {WALLS.length}
          </span>
          <div className="gallery-step-controls">
            <button type="button" onClick={prev} disabled={wallIndex === 0} className="gallery-step-button">
              이전
            </button>
            <button type="button" onClick={next} disabled={wallIndex === WALLS.length - 1} className="gallery-step-button">
              다음
            </button>
          </div>
        </div>
      </div>

      <div className="gallery-stage">
        <div className="gallery-face-caption" aria-hidden="true">
          <span className="gallery-face-caption__number">{String(wallIndex + 1).padStart(2, "0")}</span>
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
                {index === 3 && <Wall4 p={project} />}
                {index === 4 && <Wall5 p={project} onExit={() => navigate("/")} />}
              </section>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="gallery-bottombar">
        <span>
          Wall {wallIndex + 1} - {WALLS[wallIndex]}
        </span>
        <span>스크롤로 전시 벽 이동 - Esc로 나가기</span>
      </div>

      <div ref={scrollRef} className="gallery-scroll-driver" onScroll={handleScroll} aria-label="프로젝트 상세 섹션 스크롤">
        {WALLS.map((wall, index) => (
          <section key={wall} className="gallery-scroll-section" aria-label={`${index + 1}. ${wall}`} />
        ))}
      </div>
    </motion.div>
  );
}
