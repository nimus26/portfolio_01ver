export type VisualWorkCategory = "Detail Page" | "Goods" | "Poster" | "Social Feed" | "Brand Graphic";

export type VisualWork = {
  id: string;
  thumbnail: string;
  category: VisualWorkCategory;
  title: string;
  description: string;
  tools: string[];
  year: string;
};

export const visualWorks: VisualWork[] = [
  {
    id: "visual-detail-page",
    thumbnail: "",
    category: "Detail Page",
    title: "Campaign Detail Layout",
    description: "상품 정보와 프로모션 흐름을 한 화면에서 읽히도록 구성한 상세페이지 레이아웃 실험입니다.",
    tools: ["Figma", "Photoshop"],
    year: "2026",
  },
  {
    id: "visual-goods",
    thumbnail: "",
    category: "Goods",
    title: "Brand Goods System",
    description: "로고, 컬러, 패턴을 굿즈 표면에 적용해 브랜드 사용성을 확장한 시각 응용 작업입니다.",
    tools: ["Illustrator", "Photoshop"],
    year: "2025",
  },
  {
    id: "visual-poster",
    thumbnail: "",
    category: "Poster",
    title: "Event Poster Series",
    description: "행사 메시지를 짧은 시선 안에 전달하기 위한 타이포그래피와 이미지 위계 구성입니다.",
    tools: ["Photoshop", "Illustrator"],
    year: "2025",
  },
  {
    id: "visual-social-feed",
    thumbnail: "",
    category: "Social Feed",
    title: "SNS Feed Graphics",
    description: "인스타그램 업로드 환경에 맞춰 정보 밀도와 브랜드 무드를 균형 있게 정리한 피드용 그래픽입니다.",
    tools: ["Figma", "Photoshop"],
    year: "2025",
  },
  {
    id: "visual-brand-graphic",
    thumbnail: "",
    category: "Brand Graphic",
    title: "Brand Mood Extension",
    description: "브랜드 톤을 유지하면서 배너, 카드뉴스, 프로모션 그래픽으로 확장한 비주얼 아카이브입니다.",
    tools: ["Figma", "Illustrator"],
    year: "2026",
  },
];
