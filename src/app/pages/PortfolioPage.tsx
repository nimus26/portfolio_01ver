import { useState } from "react";
import { GlobalNav } from "../components/GlobalNav";
import { MainHero } from "../components/MainHero";
import { AboutMe } from "../components/AboutMe";
import { WorkList } from "../components/WorkList";
import { SiteFooter } from "../components/Footer";

export function PortfolioPage() {
  const [isCanvasDocked, setIsCanvasDocked] = useState(false);

  return (
    <>
      <GlobalNav />

      <div className="gallery-room">
        <MainHero onCanvasDockedChange={setIsCanvasDocked} />

        <AboutMe showDockedCanvas={isCanvasDocked} />

        <WorkList />
      </div>

      <SiteFooter />
    </>
  );
}
