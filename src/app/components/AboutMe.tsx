import "./AboutMe.css";

const capabilities = [
  { name: "React", type: "Component Structure" },
  { name: "TypeScript", type: "Code Reliability" },
  { name: "HTML/CSS", type: "Accessible UI" },
  { name: "Figma", type: "Design Translation" },
];

const workingFocus = [
  { order: "01", event: "Turn interface designs into maintainable React components", place: "Component naming, props, layout systems" },
  { order: "02", event: "Build responsive screens with clear interaction states", place: "Semantic HTML, CSS architecture, motion details" },
  { order: "03", event: "Organize portfolio stories around decision-making", place: "Problem framing, contribution, measurable outcome" },
  { order: "04", event: "Prepare handoff-ready UI foundations", place: "Design tokens, reusable patterns, documentation" },
];

export function AboutMe() {
  return (
    <section id="room-01-about" className="gallery-room about-section">

      <header className="about-header">
        <div className="about-label-row">
          <span className="about-section-label">Room 01 // Museum Plaque</span>
          <div className="about-rule" />
        </div>
        <h2 className="about-title">The <em>Developer</em></h2>
      </header>

      <div className="about-grid">

        <div className="about-grid__intro">
          <p className="about-name">Kim Sumin</p>
          <p className="about-role">Frontend Developer focused on UI implementation</p>
          <p className="about-statement">
            I build responsive interfaces that translate design intent into
            maintainable React components.
          </p>
          <p className="about-bio">
            This portfolio is currently using placeholder content while the
            project frame, navigation, and case-study flow are being finalized.
            The final copy should connect each project to a clear problem,
            personal contribution, implementation decision, and verified result.
          </p>
        </div>

        <div className="about-grid__detail">

          <div className="about-mediums">
            <h3 className="about-mediums__heading">Technical Focus</h3>
            <ul className="about-mediums__list">
              {capabilities.map((capability) => (
                <li key={capability.name} className="about-mediums__item">
                  <span className="about-mediums__item-name">{capability.name}</span>
                  <span className="about-mediums__item-type">{capability.type}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-timeline">
            <h3 className="about-timeline__heading">Working Focus</h3>
            <ol className="about-timeline__list">
              {workingFocus.map((entry) => (
                <li key={entry.order} className="about-timeline__item">
                  <span className="about-timeline__year">{entry.order}</span>
                  <div className="about-timeline__content">
                    <p className="about-timeline__event">{entry.event}</p>
                    <p className="about-timeline__place">{entry.place}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </div>

    </section>
  );
}
