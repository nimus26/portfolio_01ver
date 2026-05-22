const mediums = [
  { name: "React", type: "Frontend" },
  { name: "TypeScript", type: "Code Quality" },
  { name: "HTML/CSS", type: "Responsive UI" },
  { name: "Figma", type: "Design Handoff" },
];

const timeline = [
  { year: "2024", event: "Frontend portfolio and UI implementation", place: "React, TypeScript, CSS" },
  { year: "2023", event: "Product and interaction design projects", place: "Team collaboration" },
  { year: "2022", event: "UX research and interface studies", place: "Academic studio" },
  { year: "2021", event: "Visual and motion design foundations", place: "Interface experiments" },
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
            I build responsive, accessible interfaces that translate design intent
            into maintainable React components.
          </p>
          <p className="about-bio">
            Based in Seoul, I work across design handoff, component structure,
            interaction details, and CSS systems. I value clear naming,
            predictable layouts, and implementation choices that make products
            easier to maintain after launch.
          </p>
        </div>

        <div className="about-grid__detail">

          <div className="about-mediums">
            <h3 className="about-mediums__heading">Technical Mediums</h3>
            <ul className="about-mediums__list">
              {mediums.map((m) => (
                <li key={m.name} className="about-mediums__item">
                  <span className="about-mediums__item-name">{m.name}</span>
                  <span className="about-mediums__item-type">{m.type}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-timeline">
            <h3 className="about-timeline__heading">Working Focus</h3>
            <ol className="about-timeline__list">
              {timeline.map((entry) => (
                <li key={entry.year} className="about-timeline__item">
                  <span className="about-timeline__year">{entry.year}</span>
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
