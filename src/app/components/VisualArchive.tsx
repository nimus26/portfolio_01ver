import { useEffect, useState } from "react";
import { visualWorks, type VisualWork } from "../data/visualWorks";
import "./VisualArchive.css";

function VisualThumbnail({ work, size = "card" }: { work: VisualWork; size?: "card" | "preview" }) {
  const hasThumbnail = work.thumbnail.trim().length > 0;

  return (
    <div className={`visual-archive-thumb visual-archive-thumb--${size}`}>
      {hasThumbnail ? (
        <img src={work.thumbnail} alt="" className="visual-archive-thumb__image" loading="lazy" />
      ) : (
        <div className="visual-archive-thumb__placeholder" aria-hidden="true">
          <span>{work.category}</span>
          <strong>{work.title}</strong>
        </div>
      )}
    </div>
  );
}

function VisualArchiveModal({
  work,
  onClose,
}: {
  work: VisualWork;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="visual-archive-modal" role="presentation" onClick={onClose}>
      <section
        className="visual-archive-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="visual-archive-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="visual-archive-modal__close" onClick={onClose} aria-label="Visual Archive preview close">
          Close
        </button>

        <VisualThumbnail work={work} size="preview" />

        <div className="visual-archive-modal__content">
          <span className="visual-archive-card__category">{work.category}</span>
          <h3 id="visual-archive-modal-title" className="visual-archive-modal__title">
            {work.title}
          </h3>
          <p className="visual-archive-modal__description">{work.description}</p>
          <p className="visual-archive-card__tools">{work.tools.join(" · ")}</p>
          <span className="visual-archive-card__year">{work.year}</span>
        </div>
      </section>
    </div>
  );
}

export function VisualArchive() {
  const [selectedWork, setSelectedWork] = useState<VisualWork | null>(null);

  return (
    <section id="visual-archive" className="visual-archive" aria-labelledby="visual-archive-title">
      <header className="visual-archive-header">
        <div className="visual-archive-label-row">
          <span className="visual-archive-section-label">Room 03 // Visual Archive</span>
          <div className="visual-archive-rule" />
          <span className="visual-archive-count">{visualWorks.length.toString().padStart(2, "0")} visual works</span>
        </div>
        <div className="visual-archive-title-row">
          <h2 id="visual-archive-title" className="visual-archive-title">
            Visual<br />
            <em>Archive</em>
          </h2>
          <p className="visual-archive-description">
            프로젝트 밖에서 제작한 상세페이지, 굿즈, 포스터, SNS 그래픽을 모아 시각 구성과 브랜드 응용 역량을 보여줍니다.
          </p>
        </div>
      </header>

      <div className="visual-archive-grid">
        {visualWorks.map((work) => (
          <button
            key={work.id}
            type="button"
            className="visual-archive-card"
            onClick={() => setSelectedWork(work)}
            aria-haspopup="dialog"
          >
            <VisualThumbnail work={work} />
            <span className="visual-archive-card__category">{work.category}</span>
            <span className="visual-archive-card__title">{work.title}</span>
            <span className="visual-archive-card__description">{work.description}</span>
            <span className="visual-archive-card__footer">
              <span className="visual-archive-card__tools">{work.tools.join(" · ")}</span>
              <span className="visual-archive-card__year">{work.year}</span>
            </span>
          </button>
        ))}
      </div>

      {selectedWork ? <VisualArchiveModal work={selectedWork} onClose={() => setSelectedWork(null)} /> : null}
    </section>
  );
}
