import { useEffect, useState } from "react";
import { GlobalNav } from "../components/GlobalNav";
import { MainHero } from "../components/MainHero";
import { AboutMe } from "../components/AboutMe";
import { WorkList } from "../components/WorkList";
import { VisualArchive } from "../components/VisualArchive";
import { SiteFooter } from "../components/Footer";

export function PortfolioPage() {
  const [isCanvasDocked, setIsCanvasDocked] = useState(false);

  useEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (!targetId) return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "auto", block: "start" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <GlobalNav />

      <div className="gallery-room">
        <MainHero onCanvasDockedChange={setIsCanvasDocked} />

        <AboutMe showDockedCanvas={isCanvasDocked} />

        <WorkList />

        <VisualArchive />
      </div>

      <SiteFooter />
    </>
  );
}
