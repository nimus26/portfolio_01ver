import canvasFront from "../../asset/canvas_front_cut.png";
import figmaIcon from "../../asset/about_icon_figma.png";
import cssIcon from "../../asset/about_icon_css.png";
import vscodeIcon from "../../asset/about_icon_vscode.png";
import excelIcon from "../../asset/about_icon_excel.png";
import powerpointIcon from "../../asset/about_icon_powerpoint.png";
import wordIcon from "../../asset/about_icon_word.png";
import illustratorIcon from "../../asset/about_icon_illu.png";
import photoshopIcon from "../../asset/about_icon_photoshop.png";
import gptIcon from "../../asset/about_icon_gpt.png";
import claudeIcon from "../../asset/about_icon_claude.png";
import geminiIcon from "../../asset/about_icon_gemini.png";
import midjourneyIcon from "../../asset/about_icon_midjour.png";
import "./AboutMe.css";

type AboutMeProps = {
  showDockedCanvas?: boolean;
};

type SkillItem = {
  category?: string;
  name: string;
  level: string;
  progress: "100" | "71" | "54";
  icons: string[];
};

type TimelineItem = {
  index: string;
  period: string;
  title: string;
  descriptions?: string[];
};

const SKILLS: SkillItem[] = [
  { category: "UX/UI 구조화", name: "Figma", level: "상", progress: "100", icons: [figmaIcon] },
  { category: "구현", name: "HTML/CSS", level: "중", progress: "54", icons: [cssIcon, vscodeIcon] },
  { category: "문서 처리", name: "MS Office", level: "중상", progress: "71", icons: [excelIcon, powerpointIcon, wordIcon] },
  { category: "시각 방향성", name: "Adobe CC", level: "중", progress: "54", icons: [illustratorIcon, photoshopIcon] },
  { category: "바이브 코딩", name: "GPT/Codex", level: "중상", progress: "71", icons: [gptIcon] },
  { name: "Claude", level: "중상", progress: "71", icons: [claudeIcon] },
  { category: "이미지 생성", name: "Gemini", level: "중상", progress: "71", icons: [geminiIcon] },
  { name: "Midjourney", level: "중", progress: "54", icons: [midjourneyIcon] },
];

const CAREERS: TimelineItem[] = [
  {
    index: "01",
    period: "2024.03 ~ 2024.10 (7개월)",
    title: "LG유플러스 볼트업 아르바이트",
    descriptions: ["신규 가입 고객 회원카드 발급 프로세스 운영 및 고객 데이터베이스 관리", "충전 서비스 인프라 데이터 정제 및 효율화"],
  },
  {
    index: "02",
    period: "2021.12 ~ 2022.02 (2개월)",
    title: "열매컴퍼니 인턴",
    descriptions: ["2050 세대별 투자 성향 및 앱 이용 행태 리서치", "신사업 검토 위한 타 산업군 커뮤니티 서비스 UI/UX 사례 분석"],
  },
];

const ACTIVITIES: TimelineItem[] = [
  { index: "01", period: "2025.12 - 2026.06 (5.5개월)", title: "이젠아카데미 UI/UX 프론트엔드/디자인 과정" },
  { index: "02", period: "2022.09~ 2025.02 (2년 5개월)", title: "스노우보드 동아리 '매니아' 중 굿즈 프로젝트" },
  { index: "03", period: "2023.03 ~ 2023.05 (3개월)", title: "창업 수업: 예술인 포트폴리오 플랫폼 기획" },
  { index: "04", period: "2022.02 ~ 2023.02 (1년)", title: "성균관대학교 미술학과 학생회 활동" },
];

function SkillCard({ item }: { item: SkillItem }) {
  return (
    <li className="about-skill">
      <span className="about-skill__category">{item.category ?? ""}</span>
      <div className="about-skill__body">
        <span className="about-skill__icons" aria-hidden="true">
          {item.icons.map((icon) => (
            <img key={icon} src={icon} alt="" className="about-skill__icon" />
          ))}
        </span>
        <span className="about-skill__meta">
          <span className="about-skill__name">{item.name}</span>
          <span className="about-skill__level">
            <span className="about-skill__track">
              <span className={`about-skill__bar about-skill__bar--${item.progress}`} />
            </span>
            <span className="about-skill__level-text">{item.level}</span>
          </span>
        </span>
      </div>
    </li>
  );
}

function TimelineSection({ title, items }: { title: string; items: TimelineItem[] }) {
  return (
    <section className="about-timeline" aria-labelledby={`about-${title}`}>
      <h3 id={`about-${title}`} className="about-timeline__heading">
        {title}
      </h3>
      <ol className="about-timeline__list">
        {items.map((item) => (
          <li key={`${title}-${item.index}-${item.title}`} className="about-timeline__item">
            <span className="about-timeline__index">{item.index}</span>
            <div className="about-timeline__content">
              <p className="about-timeline__period">{item.period}</p>
              <p className="about-timeline__title">{item.title}</p>
              {item.descriptions ? (
                <p className="about-timeline__description">
                  {item.descriptions.map((description) => (
                    <span key={description}>{description}</span>
                  ))}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function AboutMe({ showDockedCanvas = false }: AboutMeProps) {
  return (
    <section id="room-01-about" className="about-section" aria-labelledby="about-title">
      <header className="about-header">
        <div className="about-label-row">
          <span className="about-section-label">Room 01 // 소개</span>
          <span className="about-rule" aria-hidden="true" />
        </div>
        <h2 id="about-title" className="about-title">
          구상부터 완성까지 <em>— 과정을 아는 </em>
          <strong>디자이너</strong>
        </h2>
      </header>

      <div className="about-grid">
        <aside className="about-grid__intro" aria-label="프로필 소개">
          <div className={`about-profile-target${showDockedCanvas ? " is-docked" : ""}`}>
            <img className="about-profile-target__image" src={canvasFront} alt="" aria-hidden="true" />
          </div>

          <div className="about-person">
            <p className="about-name">Kim Sumin</p>
            <p className="about-korean-name">김수민</p>
            <p className="about-role">미술 기반의 시각 감각을 가진 신입 UIUX 디자이너</p>
          </div>

          <p className="about-statement">
            기획부터 최종 개발 구현까지, 프로젝트의 완결성을 높이는 데에 집중합니다. 시각적인 컨셉을 명확히 세우고,
            기술적인 제약 안에서 끝까지 완성도 높은 결과물을 만들어냅니다.
          </p>

          <p className="about-bio">
            전시관 콘셉트는 탐색 경험을 위한 장치로만 사용하고, 각 프로젝트는 문제, 목표, 역할, 과정, 해결안, 주요 화면,
            확인 가능한 근거가 바로 보이도록 구성했습니다.
          </p>
        </aside>

        <div className="about-grid__detail">
          <div className="about-grid__detail-scroll">
            <section className="about-tools" aria-labelledby="about-tools-title">
              <h3 id="about-tools-title" className="about-tools__heading">
                작업 도구
              </h3>
              <ul className="about-skills">
                {SKILLS.map((skill) => (
                  <SkillCard key={`${skill.category ?? "blank"}-${skill.name}`} item={skill} />
                ))}
              </ul>
            </section>

            <TimelineSection title="경력" items={CAREERS} />
            <TimelineSection title="활동" items={ACTIVITIES} />
          </div>
        </div>
      </div>
    </section>
  );
}
