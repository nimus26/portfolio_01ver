import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router";
import juhapAiScanChat from "../../asset/case-studies/juhap-detail/juhap-ai-scan-chat.png";
import juhapCommunity from "../../asset/case-studies/juhap-detail/juhap-community.png";
import juhapAdditionalSection from "../../asset/case-studies/juhap-detail/additional_section.png";
import juhapHomePhone from "../../asset/case-studies/juhap-detail/juhap-home-phone.png";
import juhapLogoBl from "../../asset/case-studies/juhap-detail/juhap_logo_bl.png";
import juhapMainVisual from "../../asset/case-studies/juhap-detail/main.png";
import juhapOnboardingVideo from "../../asset/case-studies/juhap-detail/onboarding.mp4";
import juhapQrOn from "../../asset/case-studies/juhap-detail/qr_on.png";
import juhapRankingPhone from "../../asset/case-studies/juhap-detail/juhap-ranking-phone.png";
import faceFeel from "../../asset/case-studies/face_feel.png";
import faceReady from "../../asset/case-studies/face_ready.png";
import faceZero from "../../asset/case-studies/face_zero.png";
import kiaLogo from "../../asset/case-studies/kia-detail/logo.png";
import kiaMainVisual from "../../asset/case-studies/kia-detail/main_visual.png";
import kiaQrOn from "../../asset/case-studies/kia-detail/qr_on.png";
import proofBefore from "../../asset/case-studies/figma-parts/proof-before.png";
import proofAfter from "../../asset/case-studies/figma-parts/proof-after.png";
import proofResponsive from "../../asset/case-studies/figma-parts/proof-responsive.png";
import logLaptopMain from "../../asset/case-studies/figma-parts/log-laptop-main.png";
import logLaptopScreen from "../../asset/case-studies/figma-parts/log-laptop-screen.png";
import logLaptopShadow from "../../asset/case-studies/figma-parts/log-laptop-shadow.png";
import { PROJECTS, type Project } from "../data/projects";
import "./Gallery3D.css";

const FALLBACK_LABELS = ["THE INDEX", "THE OBSERVER", "THE SOLVER", "THE PROOF", "THE LOG"] as const;
const JUHAP_LABELS = ["THE INDEX", "THE OBSERVER", "THE SOLVER", "ADDITIONAL", "THE PROOF", "THE LOG"] as const;
const KIA_LABELS = ["THE INDEX", "THE OBSERVER", "THE SOLVER", "THE RE-DESIGN", "THE LOG"] as const;
const FALLBACK_CUBE_FACES = ["front", "right", "back", "left", "return"] as const;
const JUHAP_CUBE_FACES = ["front", "right", "back", "left", "return", "extra"] as const;
const DETAIL_PROJECT_ORDER = ["02", "03", "01"] as const;
const MIN_FACE_SCROLL_OVERFLOW = 24;
const SCROLL_EDGE_THRESHOLD = 2;

function WallIndexFigma230() {
  return (
    <div className="gallery-wall gallery-wall--index-figma gallery-wall--juhap-index">
      <section className="gallery-index-section">
        <div className="gallery-index-section__copy">
          <p className="gallery-index-section__eyebrow">01 THE INDEX</p>
          <h1 className="gallery-index-section__title gallery-index-section__title--hero">주합</h1>
          <p className="gallery-index-section__summary">
            정보의 양은 많지만 정작 ‘나에게 맞는 정답’을 찾지 못해 피로를 느끼는 소비자를 위해, 상황 기반 AI 추천과 유저 경험 데이터를 결합하여
            ‘실패 없는 의사결정 도구’를 설계했습니다.
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
            <div className="gallery-index-section__tools">
              <p>CONTRIBUTION</p>
              <span>프로젝트 기획 및 총괄 (시장 리서치, 유저 설문조사, IA 및 유저플로우 설계, 데이터 타입 정의 및 피드백 디벨롭 주도)</span>
            </div>
          </div>
        </div>
        <div className="gallery-index-section__visual">
          <img className="gallery-index-section__image" src={juhapMainVisual} alt="주합 메인 비주얼" />
        </div>
      </section>
    </div>
  );
}

function WallObserver() {
  const bars = [
    {
      title: "선택의 피로도",
      items: [
        ["광고성 리뷰인지\n구분이 안 된다", "54%"],
        ["정보과다로 뭘 봐야 할지 모르겠다", "27.6%"],
        ["내 상황에 맞는 정보를 찾기 어렵다", "20.7%"],
      ],
    },
    {
      title: "실패의 경험",
      items: [
        ["새로운 술에 도전하고\n실망한 경험이 있다", "70%"],
        ["그 외", "33.3%"],
      ],
    },
  ];
  const painpoints = [
    ["01", "신뢰 부족", faceFeel],
    ["02", "결정 장애", faceReady],
    ["03", "실패 경험", faceZero],
  ];

  return (
    <div className="gallery-wall gallery-wall--index-figma gallery-wall--observer-figma">
      <section className="gallery-index-section gallery-index-section--observer">
        <div className="gallery-index-section__copy">
          <p className="gallery-index-section__eyebrow">02 THE OBSERVER</p>
          <h2 className="gallery-index-section__title">
            데이터 기반의<br />문제 정의 <span>(Pain Point)</span>
          </h2>
          <p className="gallery-index-section__summary">
            유저의 페인 포인트를 세 가지 유형(Persona)으로 세분화하고, 이를 해결하는 핵심 가치를 유저 여정(User Flow)에 녹여 앱의 기능을 기획했습니다.
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
                거시적 시장 기회 발견: 1인 가구 비중 증가(36.1%)와 주말 혼술 트렌드 확산(45.3%) =&gt; ‘많이 마시는 시장’에서 ‘덜 실패하고 잘 고르는 시장’으로 이동하고 있음을 포착
              </span>
              <div className="gallery-index-section__sources">
                <p>
                  출처 통계청 「2025 통계로 보는 1인가구」 <a href="https://kostat.go.kr" target="_blank" rel="noreferrer">https://kostat.go.kr</a>
                </p>
                <p>
                  20SLAB 음주 트렌드 조사, <a href="https://www.20slab.org/archives/38935" target="_blank" rel="noreferrer">https://www.20slab.org/archives/38935</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-index-section__visual">
          <div className="observer-panel">
            <div className="observer-chart-grid">
              {bars.map((group) => (
                <article key={group.title}>
                  <h3>{group.title}</h3>
                  {group.items.map(([label, value]) => (
                    <div key={label} className="observer-bar">
                      <span>{label}</span>
                      <strong>{value}</strong>
                    </div>
                  ))}
                </article>
              ))}
            </div>
            <div className="observer-painpoints">
              {painpoints.map(([num, label, src]) => (
                <div key={num} className="observer-painpoint">
                  <img className="observer-painpoint__avatar" src={src} alt="" aria-hidden="true" />
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
  const solutions = [
    {
      tone: "peach",
      persona: "필코노미",
      problem: "광고성 후기에 지쳐 실제 경험자의 솔직한 피드백을 원함",
      feature: "검증형 커뮤니티",
      detail: [
        "단순 술 평가를 넘어 음식과의 궁합(페어링)을 직접 기록",
        "상황별 감성 필터(#비오는날, #혼술) 통해 무드 맞춤형 조합 탐색",
      ],
    },
    {
      tone: "yellow",
      persona: "레디코어",
      problem: "가격 비교와 정보 탐색 시간을 최소화하고 싶어 함",
      feature: "주종별 실시간 랭킹",
      detail: [
        "유저 투표 데이터를 집계하여 주종별 인기 랭킹",
        "구매처 정보로 연결되는 원클릭 탐색 및 구매 연동 시스템 설계",
      ],
    },
    {
      tone: "mint",
      persona: "제로클릭",
      problem: "전문 용어 장벽이 높고 인지 비용을 제로로 만들고 싶어 함",
      feature: "AI 라벨 스캔 & 챗봇",
      detail: [
        "한 장의 사진으로 술 정보, 추천/비추천 페어링을 보여주는 이미지 기반 스캔",
        "현재 상황을 조합해 최적의 조합을 자동 추천하는 AI 챗봇 ‘주아’의 추천 기능",
      ],
    },
  ];
  const screens = [
    { label: "검증형 커뮤니티", src: juhapCommunity, tone: "peach" },
    { label: "주종별 실시간 랭킹", src: juhapRankingPhone, tone: "yellow" },
    { label: "AI 라벨 스캔 & 챗봇", src: juhapAiScanChat, tone: "mint" },
  ];

  return (
    <div className="gallery-wall gallery-wall--case-section gallery-wall--solver-figma">
      <section className="solver-figma-section">
        <div className="solver-figma-left">
          <div className="solver-figma-copy">
            <p className="gallery-section-eyebrow">03 THE SOLVER</p>
            <h2>
              <span>3대 타겟 유저별</span>
              <span>UX 솔루션 <small>(How)</small></span>
            </h2>
            <p>
              사용자는 정보가 부족한 것이 아니라, 내 상황(기분, 안주, 장소)을 고려한 ‘결정적 가이드’가 없어서 늘 먹던 것만 마시거나 선택에 피로감을 겪고 있었습니다.
            </p>
          </div>
          <figure className="solver-onboarding">
            <figcaption className="solver-chip solver-chip--solid">온보딩</figcaption>
            <div className="solver-onboarding-phone">
              <video src={juhapOnboardingVideo} autoPlay muted loop playsInline preload="metadata" />
            </div>
          </figure>
        </div>
        <div className="solver-figma-right">
          <section className="solver-figma-block">
            <p className="gallery-section-eyebrow">SERVICE SOLUTIONS</p>
            <div className="solver-solutions-panel">
              <div className="solver-solution-grid">
                {solutions.map((item) => (
                  <article key={item.persona} className={`solver-solution solver-solution--${item.tone}`}>
                    <div className="solver-solution__persona">
                      <h3>{item.persona}</h3>
                      <p>{item.problem}</p>
                    </div>
                    <span className="solver-solution__arrow" aria-hidden="true" />
                    <div className="solver-solution__feature">
                      <strong>{item.feature}</strong>
                      <div>
                        {item.detail.map((line) => <p key={line}>{line}</p>)}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section className="solver-figma-block">
            <div className="solver-core-row">
              {screens.map((screen) => (
                <figure key={screen.label} className={`solver-core-card solver-core-card--${screen.tone}`}>
                  <figcaption className="solver-chip">{screen.label}</figcaption>
                  <img src={screen.src} alt={`${screen.label} 화면`} />
                </figure>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

function WallAdditional() {
  return (
    <div className="gallery-wall gallery-wall--additional-figma">
      <section className="additional-section" style={{ backgroundImage: `url(${juhapAdditionalSection})` }}>
        <div className="additional-section__copy">
          <h2>사용자의 추천 경험을<br />완성하는 화면 조각들</h2>
          <p>온보딩, 리뷰탐색, 라벨 스캔, 주종 상세화면 등 핵심 기능들을 구성하는 화면입니다.</p>
        </div>
      </section>
    </div>
  );
}

function KiaWallIndex() {
  return (
    <div className="gallery-wall gallery-wall--index-figma gallery-wall--kia-index">
      <section className="gallery-index-section">
        <div className="gallery-index-section__copy">
          <p className="gallery-index-section__eyebrow">01 THE INDEX</p>
          <h1 className="gallery-index-section__title">
            기아 글로벌(USA)<br />사이트 리뉴얼
          </h1>
          <p className="gallery-index-section__summary">
            미국 시장의 방대한 자동차 정보와 복잡한 구매 프로세스로 발생하던 사용자의 탐색 피로도를 낮추고, 글로벌 브랜드 이미지에 걸맞은 단단하고 직관적인 UI 시스템을 설계했습니다.
          </p>
          <div className="gallery-index-section__meta">
            <div>
              <p>DURATION</p>
              <span>2026.02 - 2026.03</span>
            </div>
            <div>
              <p>ROLE</p>
              <span>디자인 팀장, 기획</span>
            </div>
            <div className="gallery-index-section__tools">
              <p>TOOLS</p>
              <span>Figma, Gemini, Codex, Claude, Perplexity, VS Code, Git/GitHub, Nanobanana</span>
            </div>
            <div className="gallery-index-section__tools">
              <p>CONTRIBUTION</p>
              <span>비주얼 방향성 및 UI 가이드라인 수립 총괄, 메인/서브 페이지 검토 및 디자인 통일성 제어</span>
            </div>
          </div>
        </div>
        <div className="gallery-index-section__visual">
          <div className="kia-hero-card">
            <img className="kia-hero-card__main" src={kiaMainVisual} alt="기아 글로벌 사이트 리뉴얼 메인 비주얼" />
          </div>
        </div>
      </section>
    </div>
  );
}

function KiaWallObserver() {
  const purposes = [
    ["모델 상세 정보 탐색", "42.3%"],
    ["가격/견적 확인", "34.6%"],
    ["방문경험 없음", "11.5%"],
    ["딜러 위치·시승 예약·프로모션", "각 3.8%"],
  ];
  const ease = [
    ["부정 (1~2점)", "15.4%"],
    ["보통 (3점)", "40.4%"],
    ["긍정 (4~5점)", "44.2%"],
  ];
  const painpoints = [
    ["01", "많은 옵션의 복잡함", "트림별 선택지가 규격화되어 있지 않아 스크롤 압박과 선택 장애를 유발"],
    ["02", "지나치게 긴 단계", "최종 견적과 가격을 확인하기까지 거쳐야 하는 화면의 단계가 너무 길어 중간 이탈을 촉진"],
    ["03", "어려운 자동차 전문 용어", "공급자 중심의 낯선 용어들이 혼재되어 사용자의 인지 부하를 높임"],
  ];

  return (
    <div className="gallery-wall gallery-wall--index-figma gallery-wall--kia-observer">
      <section className="gallery-index-section gallery-index-section--observer">
        <div className="gallery-index-section__copy">
          <p className="gallery-index-section__eyebrow">02 THE OBSERVER</p>
          <h2 className="gallery-index-section__title">
            데이터 기반의<br />문제 정의 <span>(Pain Point)</span>
          </h2>
          <div className="gallery-index-section__meta">
            <div>
              <p>DURATION</p>
              <span>2/28~3/3까지 4일간</span>
            </div>
            <div>
              <p>RESPONSE</p>
              <span>52명</span>
            </div>
            <div className="gallery-index-section__tools">
              <p>CORE INSIGHT</p>
              <span>
                유저들은 차량의 ‘디자인’과 ‘스펙/유지비’를 구매의 가장 중요한 척도로 삼고 있었으나, 기존 웹사이트는 방대한 텍스트 위주의 나열과 파편화된 메뉴 구조로 인해 이 핵심 정보들을 가로막고 있었습니다.
              </span>
            </div>
          </div>
        </div>
        <div className="gallery-index-section__visual">
          <div className="kia-observer-panel">
            <section className="kia-survey-card">
              <h3>Q. 자동차 브랜드 사이트 방문 목적은 무엇이었습니까?</h3>
              <div className="kia-purpose-chart">
                <div className="kia-pie" aria-label="방문 목적 응답 비율">
                  <span className="kia-pie__label kia-pie__label--detail">42.3%</span>
                  <span className="kia-pie__label kia-pie__label--price">34.6%</span>
                  <span className="kia-pie__label kia-pie__label--none">11.5%</span>
                  <span className="kia-pie__label kia-pie__label--etc">11.6%</span>
                </div>
                <ul>
                  {purposes.map(([label, value]) => (
                    <li key={label}><span>{label}</span><strong>{value}</strong></li>
                  ))}
                </ul>
              </div>
              <p><strong>유저의 핵심 탐색 타겟 = 모델 상세 정보 탐색</strong><br />성능·스펙 비교표와 컨피규레이터를 빠르게 확인하는 구조가 필요했습니다.</p>
            </section>
            <section className="kia-survey-card kia-survey-card--compact">
              <h3>Q. 원하는 정보를 쉽게 찾을 수 있었나요?</h3>
              <div className="kia-ease-grid">
                {ease.map(([label, value]) => (
                  <div key={label}><span>{label}</span><strong>{value}</strong></div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="kia-painpoint-row">
        {painpoints.map(([number, title, body], index) => (
          <article key={number} className={`kia-painpoint-row__item kia-painpoint-row__item--${index + 1}`}>
            <span>PAIN POINT {number}</span>
            <strong>{title}</strong>
            <p>{body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

function KiaWallSolver() {
  const improvements = [
    {
      title: "정보 과부하 해소: 스펙 및 트림 비교 개편",
      asis: "한 눈에 대조하기 어려운 방대한 옵션, 텍스트 위주의 나열로 사용자의 판단 피로도 극대화",
      tobe: "베스트셀링 모델 메인 전면 배치, 마력·연비 등 핵심 스펙을 직관적 인포그래픽 아이콘 패널로 결합 노출 → 정보 탐색 및 도달 프로세스 단축",
    },
    {
      title: "탐색 피로도 최소화: 라이프스타일 큐레이션 도입",
      asis: "원하는 차량 접근까지 불필요한 반복 클릭(Depth) 발생, 파편화된 동선으로 인한 높은 중도 이탈률",
      tobe: "4대 테마 중심의 라이프스타일 큐레이션 UI로 직관적 모델 발견 유도, Build It 버튼 → 견적서 저장 및 PDF 공유까지 단절 없는 직선형 전환 흐름 구축",
    },
    {
      title: "인지 장벽 완화: 비주얼 내러티브 적용",
      asis: "낯선 자동차 전문 용어와 정적인 화면 구조로 기아의 미래지향적 가치 전달 한계",
      tobe: "눈에 보이지 않는 친환경 기술 자산을 능동적 스크롤 구조로 변환해 유저가 직접 체감하도록 유도, 글라스모피즘과 타이포그래피 위계 정돈 → 가독성 및 시각적 몰입감 확보",
    },
  ];

  return (
    <div className="gallery-wall gallery-wall--case-section gallery-wall--kia-solver">
      <section className="kia-solver-section">
        <div className="kia-solver-section__copy">
          <p className="gallery-section-eyebrow">03 THE SOLVER</p>
          <h2>구조적 개선 방식 <small>(How)</small></h2>
          <p>사용자가 겪던 정보 과부하와 의사결정 저해 요소를 해결하기 위해, 화면 구조와 정보 전달 방식을 전면 개편했습니다.</p>
        </div>
        <div className="kia-solver-section__board">
          <p className="gallery-section-eyebrow">AS-IS vs TO-BE</p>
          <div className="kia-as-is-board">
            <div className="kia-as-is-board__heading">
              <span>AS-IS</span>
              <span>TO-BE</span>
            </div>
            {improvements.map((item) => (
              <article key={item.title} className="kia-as-is-board__row">
                <h3>{item.title}</h3>
                <div className="kia-as-is-board__compare">
                  <p>{item.asis}</p>
                  <p>{item.tobe}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function WallProof() {
  const metrics = [
    {
      variant: "understanding",
      label: "서비스 목적 이해도",
      title: ["서비스의 목적과 비즈니스 가치를", "쉽게 이해할 수 있다"],
      value: "87.5%",
      labels: [
        { position: "top-left", text: "매우 쉽게 이해할 수 있다", value: "37.5%" },
        { position: "bottom-right", text: "쉽게 이해할 수 있다", value: "50%" },
        { position: "right", text: "보통이다", value: "11%" },
      ],
    },
    {
      variant: "validity",
      label: "기능 유효성",
      title: ["AI 챗봇의 추천 결과와 커뮤니티 후기를", "실제로 신뢰하고 참고하고 싶다"],
      value: "81.3%",
      labels: [
        { position: "top-left", text: "매우 AI추천 결과를\n실제로 참고하고싶다", value: "37.5%" },
        { position: "bottom-right", text: "AI추천 결과를 실제로\n참고하고 싶다", value: "43.8%" },
        { position: "right", text: "보통이다", value: "18.8%" },
      ],
    },
  ] as const;

  return (
    <div className="gallery-wall gallery-wall--proof-figma">
      <section className="proof-section">
        <div className="proof-section__intro">
          <p className="gallery-section-eyebrow">04 / THE PROOF</p>
          <h2>실제 배포를 통한 2차 검증 (Outcome)</h2>
          <p>
            단순 화면 구현에 그치지 않고, 실제 웹 환경에 프로토타입를 배포(Vercel)한 후, 16명의 유저를 대상으로 중간 사용성 테스트 및 설문을 직접 진행했습니다.
            <br />
            그 결과, 기획의 방향성을 입증할 수 있었습니다.
          </p>
          <div className="proof-section__meta">
            <span>DURATION <strong>5/17 1일간</strong></span>
            <span>RESPONSE <strong>16명</strong></span>
          </div>
        </div>
        <div className="proof-outcome-grid">
          {metrics.map((metric) => (
            <article key={metric.label} className="proof-outcome-card">
              <span className="proof-outcome-card__badge">{metric.label}</span>
              <p className="proof-outcome-card__quote">
                “{metric.title[0]}
                <br />
                {metric.title[1]}”
              </p>
              <div className="proof-outcome-card__graph">
                <div className={`proof-donut proof-donut--${metric.variant}`}>
                  <span className="proof-donut__hole" />
                  {metric.labels.map((item) => (
                    <span key={`${metric.label}-${item.position}`} className={`proof-donut__label proof-donut__label--${item.position}`}>
                      {item.text.split("\n").map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                      <strong>{item.value}</strong>
                    </span>
                  ))}
                  <span className="proof-donut__line proof-donut__line--top-left" />
                  <span className="proof-donut__line proof-donut__line--right" />
                  <span className="proof-donut__line proof-donut__line--bottom-right" />
                </div>
                <strong className="proof-outcome-card__value">{metric.value}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function KiaWallProof() {
  const feedback = [
    {
      tone: "gray",
      title: "- 폰트 크기 및 굵기 부족",
      quote: "전반적으로 폰트가\n너무 작거나 얇게 보였습니다.\n58%",
      action: "폰트 크기 및 굵기 조정",
      visual: "type",
    },
    {
      tone: "gray",
      title: "- 여백 부족 및 섹션 구분 모호",
      quote: "섹션별 여백이 다소 아쉬웠고,\n섹션 구분이 어려웠습니다.\n33%",
      action: "배경 대비 보완 및\n아이콘 가독성 재점검",
      visual: "spacing",
    },
    {
      tone: "gray",
      title: "- 포인트 컬러 시인성 저하",
      quote: "포인트 컬러가 잘 보이지\n않는 것처럼 느껴졌습니다.\n25%",
      action: "강조색 재정비 및 글래스모피즘\n외곽선 표현 점검",
      visual: "button",
    },
    {
      tone: "mint",
      title: "+ 일관된 브랜드 무드와 심미성 조화",
      quote: "기획한 미래지향적 디자인이\n잘 녹아들어 보였습니다.\n88%",
      action: "브랜드 무드를 유지한\n반응형 웹 디자인",
      visual: "responsive",
    },
  ];

  return (
    <div className="gallery-wall gallery-wall--proof-figma">
      <section className="proof-section proof-section--redesign">
        <div className="proof-section__intro proof-section__intro--wide">
          <p className="gallery-section-eyebrow">THE RE-DESIGN</p>
          <h2>1차 완성본의 한계 및 주요 유저 피드백</h2>
          <p>1차 구현 완료 후, 중간 발표 및 사용성 설문을 통해 디자인의 주관적 오류를 객관적으로 검증했습니다.</p>
          <div className="proof-section__meta">
            <span>DURATION <strong>3/20 1일간</strong></span>
            <span>RESPONSE <strong>13명</strong></span>
          </div>
        </div>
        <div className="redesign-feedback-grid">
          {feedback.map((item) => (
            <article key={item.title} className={`redesign-feedback-card redesign-feedback-card--${item.tone}`}>
              <h3>{item.title}</h3>
              <p className="redesign-feedback-card__quote">{item.quote}</p>
              <strong>{item.action}</strong>
              {item.visual === "type" ? (
                <div className="redesign-type-demo"><span>Featured Vehicles</span><i>Discover our most popular models</i><b>↓</b><span>Featured Vehicles</span><i>Discover our most popular models</i></div>
              ) : item.visual === "spacing" ? (
                <div className="redesign-image-compare"><img src={proofBefore} alt="여백 개선 전" /><b>→</b><img src={proofAfter} alt="여백 개선 후" /></div>
              ) : item.visual === "button" ? (
                <div className="redesign-button-demo"><span>Build It</span><b>↓</b><span>Build It</span></div>
              ) : (
                <img className="redesign-responsive" src={proofResponsive} alt="반응형 웹 디자인 예시" />
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function JuhapContributionChart() {
  const bars = [
    ["기획", 70],
    ["디자인", 20],
    ["개발", 8],
    ["총량", 100],
  ] as const;

  return (
    <div className="juhap-contribution">
      <span className="juhap-contribution__badge">개인 기여도</span>
      <div className="juhap-contribution__chart" aria-label="주합 개인 기여도 그래프">
        {[100, 80, 60, 40, 20, 0].map((tick) => (
          <span key={tick} className="juhap-contribution__tick" style={{ "--tick-y": `${(100 - tick) * 1.7}px` } as CSSProperties}>
            {tick}
          </span>
        ))}
        <div className="juhap-contribution__plot">
          {bars.map(([label, value]) => (
            <div key={label} className={`juhap-contribution__bar juhap-contribution__bar--${label}`} style={{ "--bar-value": `${value}%` } as CSSProperties}>
              <span />
              <strong>{label}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function JuhapFloatingLinks({ onBackToCatalogue }: { onBackToCatalogue: () => void }) {
  return (
    <aside className="juhap-floating-links" aria-label="주합 결과물 링크">
      <span className="juhap-floating-links__scan" aria-hidden="true">
        <span />
        <img src={juhapQrOn} alt="" />
      </span>
      <div className="juhap-floating-links__buttons">
        <a className="juhap-floating-links__button juhap-floating-links__button--light" href="https://juhap-nmuh.vercel.app" target="_blank" rel="noreferrer">
          웹에서 바로보기
        </a>
        <a className="juhap-floating-links__button juhap-floating-links__button--solid" href="https://www.figma.com/deck/6F2y35iFJ7uGEduC7zrVuz" target="_blank" rel="noreferrer">
          결과보고서 보기
        </a>
        <button type="button" className="juhap-floating-links__button juhap-floating-links__button--catalogue" onClick={onBackToCatalogue}>
          카탈로그 보기
        </button>
      </div>
    </aside>
  );
}

function WallLog() {
  return (
    <div className="gallery-wall gallery-wall--log-figma">
      <section className="log-section log-section--juhap">
        <div className="log-section__copy">
          <p className="gallery-section-eyebrow">06 / THE LOG</p>
          <h2>결과물과 회고</h2>
          <p>
            사용자가 술을 잘 알지 못해도 질문과 상황 선택을 통해 추천 흐름에 진입할 수 있도록, 탐색 경로와 핵심 기능을 나누어 설계했습니다. 추천 결과는 상세 정보, 커뮤니티, 랭킹, AI 챗봇으로 이어지도록 연결했습니다.
          </p>
          <p>
            PM으로서 리서치, 정보 구조, 화면 흐름, 데이터 타입 정의, 사용성 피드백 반영까지 전체 방향을 조율했습니다. 단순히 화면을 나열하는 것이 아니라 사용자가 선택에 실패하지 않도록 돕는 의사결정 도구로 정리한 프로젝트입니다.
          </p>
        </div>
        <div className="log-section__juhap-visual">
          <JuhapContributionChart />
          <img className="log-section__home-phone" src={juhapHomePhone} alt="주합 홈 화면" />
        </div>
      </section>
    </div>
  );
}

function KiaWallLog() {
  const bars = [
    ["출석률", "89%", 0.89],
    ["기획", "60%", 0.6],
    ["디자인", "81%", 0.81],
    ["개발", "39%", 0.39],
    ["자체평가", "85%", 0.85],
  ] as const;

  return (
    <div className="gallery-wall gallery-wall--log-figma">
      <section className="log-section log-section--figma">
        <p className="gallery-section-eyebrow">05 / THE LOG</p>
        <h2>결과물과 회고</h2>
        <p>
          5명의 디자이너가 각자 서브 페이지를 맡아 진행하는 프로젝트였기에, 디자인 팀장으로서 전체의 균형을 잡는 일에 몰입했습니다. 팀원들의 개성을 존중하면서도 하나의 브랜드 안에서 일관된 비주얼 인터페이스 톤을 유지하기 위해 피그마 가이드라인을 조율했습니다.
        </p>
        <p>
          특히 프론트엔드 기초 지식을 바탕으로 개발자와 디자이너 두 가지의 역할을 함께 수행하며 개발을 고려한 디자인을 먼저 생각하며 구현해내는 과정은 값진 경험이었습니다. 단순히 보기 좋은 화면을 그리는 것을 넘어, 명확한 정량적 데이터와 구현 논리를 바탕으로 사용자를 설득하는 디자인이 지닌 힘을 체감한 뜻깊은 프로젝트였습니다.
        </p>
        <div className="log-section__figma-bottom">
          <div className="log-chart" aria-label="프로젝트 기여도 그래프">
            {bars.map(([label, value, ratio]) => (
              <div key={label} className="log-chart__bar">
                <span style={{ height: `${ratio * 100}%` }} />
                <p>{label}</p>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="log-laptop">
            <img className="log-laptop__shadow" src={logLaptopShadow} alt="" aria-hidden="true" />
            <img className="log-laptop__body" src={logLaptopMain} alt="" aria-hidden="true" />
            <img className="log-laptop__screen" src={logLaptopScreen} alt="최종 웹 결과물 화면" />
          </div>
        </div>
      </section>
    </div>
  );
}

function KiaFloatingLinks({ onBackToCatalogue }: { onBackToCatalogue: () => void }) {
  return (
    <aside className="log-section__links log-section__links--floating" aria-label="기아 결과물 링크">
      <div className="log-scan-button">
        <span className="log-scan-button__icon" aria-hidden="true" />
        <img className="log-scan-button__qr" src={kiaQrOn} alt="" aria-hidden="true" />
      </div>
      <a href="https://new-kia.vercel.app/" target="_blank" rel="noreferrer">웹에서 바로보기</a>
      <a href="https://www.figma.com/deck/THUxI79jNPT1MSIt8zNSD2" target="_blank" rel="noreferrer">결과보고서 보기</a>
      <button type="button" className="log-section__catalogue-button" onClick={onBackToCatalogue}>카탈로그 보기</button>
    </aside>
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
  if (overflow <= MIN_FACE_SCROLL_OVERFLOW) return false;
  if (direction === "down") return scroller.scrollTop < overflow - SCROLL_EDGE_THRESHOLD;
  return scroller.scrollTop > SCROLL_EDGE_THRESHOLD;
}

function getScrollerProgress(scroller: HTMLElement | null) {
  if (!scroller) return 0;
  const overflow = scroller.scrollHeight - scroller.clientHeight;
  if (overflow <= MIN_FACE_SCROLL_OVERFLOW) return 0;
  return Math.min(1, Math.max(0, scroller.scrollTop / overflow));
}

export function Gallery3D() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find((item) => item.id === id);
  const [wallIndex, setWallIndex] = useState(0);
  const [faceScrollProgress, setFaceScrollProgress] = useState(0);
  const [isEndOverlayOpen, setIsEndOverlayOpen] = useState(false);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const faceRefs = useRef<(HTMLElement | null)[]>([]);
  const isJuhapProject = project?.id === "02";
  const isKiaProject = project?.id === "03";
  const wallLabels = isJuhapProject ? JUHAP_LABELS : isKiaProject ? KIA_LABELS : FALLBACK_LABELS;
  const cubeFaces = isJuhapProject ? JUHAP_CUBE_FACES : FALLBACK_CUBE_FACES;
  const maxWallIndex = wallLabels.length - 1;

  const go = (nextIndex: number) => {
    const clampedIndex = Math.max(0, Math.min(maxWallIndex, nextIndex));
    setIsEndOverlayOpen(false);
    setWallIndex(clampedIndex);
  };

  const prev = () => go(wallIndex - 1);
  const next = () => go(wallIndex + 1);
  const backToCatalogue = () => navigate({ pathname: "/", hash: "#room-03-catalogue" });
  const openEndOverlay = () => setIsEndOverlayOpen(true);
  const goToNextProject = () => {
    const currentOrderIndex = DETAIL_PROJECT_ORDER.findIndex((projectId) => projectId === id);
    const nextProjectId =
      currentOrderIndex >= 0
        ? DETAIL_PROJECT_ORDER[(currentOrderIndex + 1) % DETAIL_PROJECT_ORDER.length]
        : DETAIL_PROJECT_ORDER.find((projectId) => projectId !== id) ?? DETAIL_PROJECT_ORDER[0];

    navigate(`/project/${nextProjectId}`);
  };

  useEffect(() => {
    setWallIndex(0);
    setIsEndOverlayOpen(false);
  }, [id]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const scroller = getActiveScroller(faceRefs, wallIndex);

      if (event.key === "Escape") {
        if (isEndOverlayOpen) {
          setIsEndOverlayOpen(false);
          return;
        }

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
        } else if (wallIndex === maxWallIndex) {
          openEndOverlay();
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
  }, [wallIndex, navigate, maxWallIndex, isEndOverlayOpen]);

  useEffect(() => {
    const scroller = getActiveScroller(faceRefs, wallIndex);
    scroller?.scrollTo({ top: 0, behavior: "auto" });
    setFaceScrollProgress(0);
  }, [wallIndex]);

  useEffect(() => {
    const scroller = getActiveScroller(faceRefs, wallIndex);
    if (!scroller) return;

    const syncProgress = () => setFaceScrollProgress(getScrollerProgress(scroller));
    syncProgress();
    scroller.addEventListener("scroll", syncProgress, { passive: true });
    return () => scroller.removeEventListener("scroll", syncProgress);
  }, [wallIndex]);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const onWheel = (event: globalThis.WheelEvent) => {
      if (Math.abs(event.deltaY) < 2) return;

      const scroller = getActiveScroller(faceRefs, wallIndex);
      const direction = event.deltaY > 0 ? "down" : "up";

      if (canScroll(scroller, direction)) return;

      event.preventDefault();
      if (direction === "down" && wallIndex === maxWallIndex) {
        openEndOverlay();
        return;
      }

      const nextWallIndex = direction === "down" ? Math.min(maxWallIndex, wallIndex + 1) : Math.max(0, wallIndex - 1);
      setWallIndex(nextWallIndex);
    };

    gallery.addEventListener("wheel", onWheel, { passive: false });
    return () => gallery.removeEventListener("wheel", onWheel);
  }, [wallIndex, maxWallIndex]);

  if (!project) {
    return (
      <div className="gallery-not-found">
        <p>Project not found</p>
      </div>
    );
  }

  const renderWall = (index: number) => {
    if (isJuhapProject) {
      if (index === 0) return <WallIndexFigma230 />;
      if (index === 1) return <WallObserver />;
      if (index === 2) return <WallSolver />;
      if (index === 3) return <WallAdditional />;
      if (index === 4) return <WallProof />;
      return <WallLog />;
    }

    if (isKiaProject) {
      if (index === 0) return <KiaWallIndex />;
      if (index === 1) return <KiaWallObserver />;
      if (index === 2) return <KiaWallSolver />;
      if (index === 3) return <KiaWallProof />;
      return <KiaWallLog />;
    }

    if (!isJuhapProject && !isKiaProject) {
      return <FallbackWall project={project} index={index} />;
    }

    return <FallbackWall project={project} index={index} />;
  };

  const overallScrollProgress =
    maxWallIndex === 0 ? 1 : Math.min(1, Math.max(0, (wallIndex + faceScrollProgress) / maxWallIndex));
  const bottombarStyle = {
    "--gallery-scroll-progress": `${overallScrollProgress * 100}%`,
  } as CSSProperties;

  return (
    <motion.div
      ref={galleryRef}
      className="gallery-3d"
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.42, ease: [0.25, 1, 0.5, 1] }}
    >
      <div className="gallery-topbar">
        <button type="button" onClick={() => navigate("/")} className="gallery-breadcrumb-button">
          PORTFOLIO
        </button>
        <div className="gallery-topbar__title-group">
          <span className="gallery-topbar__title">
            {isJuhapProject ? (
              <img className="gallery-topbar__logo" src={juhapLogoBl} alt="주합" />
            ) : isKiaProject ? (
              <img className="gallery-topbar__logo gallery-topbar__logo--kia" src={kiaLogo} alt="KIA" />
            ) : (
              project.title
            )}
          </span>
          <span className="gallery-topbar__subtitle">{project.subtitle}</span>
        </div>
        <div className="gallery-topbar__right">
          <div className="gallery-wall-dots" aria-label="Project wall navigation">
            {wallLabels.map((wall, index) => (
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
            {wallIndex + 1} / {wallLabels.length}
          </span>
          <div className="gallery-step-controls">
            <button type="button" onClick={prev} disabled={wallIndex === 0} className="gallery-step-button">
              PREV
            </button>
            <button type="button" onClick={next} disabled={wallIndex === maxWallIndex} className="gallery-step-button">
              NEXT
            </button>
          </div>
        </div>
      </div>

      <div className="gallery-stage">
        <div className="gallery-face-caption" aria-hidden="true">
          <span className="gallery-face-caption__number">{String(wallIndex + 1).padStart(2, "0")}</span>
          <span className="gallery-face-caption__name">{wallLabels[wallIndex]}</span>
        </div>

        <motion.div
          className="gallery-cube"
          animate={{
            rotateY: -wallIndex * 90,
            z: wallIndex === 0 || wallIndex === maxWallIndex ? 0 : 24,
          }}
          transition={{ type: "spring", damping: 36, stiffness: 150 }}
        >
          {cubeFaces.map((face, index) => (
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
          Wall {wallIndex + 1} - {wallLabels[wallIndex]}
        </span>
        <span>Scroll the current face to the end, then the cube turns to the next face.</span>
      </div>
      {isEndOverlayOpen ? (
        <motion.div
          className="gallery-end-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="gallery-end-overlay__panel" role="dialog" aria-modal="true" aria-label="프로젝트 탐색">
            <button
              type="button"
              className="gallery-end-overlay__close"
              onClick={() => setIsEndOverlayOpen(false)}
              aria-label="모달 닫기"
            >
              닫기
            </button>
            <span className="gallery-end-overlay__eyebrow">END OF PROJECT</span>
            <h2>다음으로 이동</h2>
            <div className="gallery-end-overlay__actions">
              <button type="button" onClick={() => go(0)}>
                처음으로
              </button>
              <button type="button" onClick={goToNextProject}>
                다른 프로젝트
              </button>
              <button type="button" onClick={backToCatalogue}>
                카탈로그
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}
      {isJuhapProject ? <JuhapFloatingLinks onBackToCatalogue={backToCatalogue} /> : null}
      {isKiaProject ? <KiaFloatingLinks onBackToCatalogue={backToCatalogue} /> : null}
    </motion.div>
  );
}

