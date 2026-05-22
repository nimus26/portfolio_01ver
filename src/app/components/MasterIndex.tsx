import { useState } from "react";

const rooms = [
  {
    number: "01",
    title: "Individual Web",
    subtitle: "An Individual Canvas",
    description:
      "A single-authored space where design decisions manifest as personal visual language. Each project is a finite statement — composed, considered, and complete.",
    tags: ["Web Design", "UI/UX", "Art Direction"],
    year: "2022–2024",
    count: "08 Works",
  },
  {
    number: "02",
    title: "Collective Web",
    subtitle: "Co-weaving the Medium",
    description:
      "Collaborative digital works where authorship becomes distributed. The medium itself becomes a shared loom — each contributor a thread in the larger structure.",
    tags: ["Team Project", "Service Design", "System Thinking"],
    year: "2023–2024",
    count: "05 Works",
  },
  {
    number: "03",
    title: "Individual App",
    subtitle: "Micro Formulation",
    description:
      "Interface objects compressed into mobile constraints. Precision over decoration — each interaction is a studied gesture, each component a decision made with intention.",
    tags: ["Mobile App", "Product Design", "Prototyping"],
    year: "2022–2024",
    count: "06 Works",
  },
  {
    number: "04",
    title: "Collective App",
    subtitle: "Collective Space",
    description:
      "Multi-user environments built on shared spatial logic. The design problem becomes: how do many people inhabit a single digital room without losing individual presence?",
    tags: ["Platform Design", "Social UX", "Collaboration"],
    year: "2023–2024",
    count: "04 Works",
  },
];

export function MasterIndex() {
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);

  return (
    <section
      style={{
        backgroundColor: "#111111",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          width: "100%",
          padding: "80px 80px 60px",
          borderBottom: "1px solid rgba(229,229,224,0.15)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: "0.28em",
                color: "rgba(229,229,224,0.4)",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Room 00 // Master Index
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 68,
                fontWeight: 300,
                letterSpacing: "-0.03em",
                color: "#F7F7F5",
                lineHeight: 0.95,
              }}
            >
              Exhibition
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "rgba(247,247,245,0.45)",
                }}
              >
                Catalogue
              </em>
            </h2>
          </div>
          <div style={{ textAlign: "right" }}>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10,
                letterSpacing: "0.18em",
                color: "rgba(229,229,224,0.3)",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Total Works
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 40,
                fontWeight: 300,
                color: "#F7F7F5",
                letterSpacing: "-0.02em",
              }}
            >
              23
            </p>
          </div>
        </div>
      </div>

      {/* Room List */}
      <div style={{ flex: 1, maxWidth: 1440, margin: "0 auto", width: "100%" }}>
        {rooms.map((room, idx) => (
          <div
            key={room.number}
            onMouseEnter={() => setHoveredRoom(room.number)}
            onMouseLeave={() => setHoveredRoom(null)}
            style={{
              borderBottom: "1px solid rgba(229,229,224,0.1)",
              padding: "0 80px",
              cursor: "pointer",
              backgroundColor:
                hoveredRoom === room.number ? "rgba(247,247,245,0.03)" : "transparent",
              transition: "background-color 0.3s ease",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr 320px",
                alignItems: "start",
                gap: 48,
                padding: "48px 0",
              }}
            >
              {/* Room Number */}
              <div>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 13,
                    fontWeight: 400,
                    color: hoveredRoom === room.number ? "rgba(247,247,245,0.6)" : "rgba(247,247,245,0.2)",
                    letterSpacing: "0.04em",
                    transition: "color 0.3s ease",
                  }}
                >
                  {room.number}
                </span>
                <div
                  style={{
                    width: hoveredRoom === room.number ? 32 : 0,
                    height: 1,
                    backgroundColor: "#F7F7F5",
                    marginTop: 12,
                    transition: "width 0.4s ease",
                  }}
                />
              </div>

              {/* Main Content */}
              <div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 9,
                    fontWeight: 500,
                    letterSpacing: "0.22em",
                    color: "rgba(247,247,245,0.3)",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  Room {room.number} // {room.title}
                </p>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 40,
                    fontWeight: 400,
                    color: "#F7F7F5",
                    lineHeight: 1.1,
                    letterSpacing: "-0.01em",
                    marginBottom: 20,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  {room.subtitle}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: 300,
                    color: "rgba(247,247,245,0.45)",
                    lineHeight: 1.7,
                    letterSpacing: "0.01em",
                    maxWidth: 520,
                  }}
                >
                  {room.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", gap: 8, marginTop: 24, flexWrap: "wrap" }}>
                  {room.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 9,
                        fontWeight: 400,
                        letterSpacing: "0.14em",
                        color: "rgba(247,247,245,0.3)",
                        textTransform: "uppercase",
                        border: "1px solid rgba(229,229,224,0.15)",
                        padding: "4px 12px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Meta */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignSelf: "stretch",
                  paddingTop: 4,
                }}
              >
                <div style={{ textAlign: "right" }}>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 9,
                      letterSpacing: "0.18em",
                      color: "rgba(247,247,245,0.25)",
                      textTransform: "uppercase",
                      marginBottom: 6,
                    }}
                  >
                    Period
                  </p>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 20,
                      fontWeight: 400,
                      color: "rgba(247,247,245,0.5)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {room.year}
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 9,
                      letterSpacing: "0.18em",
                      color: "rgba(247,247,245,0.25)",
                      textTransform: "uppercase",
                      marginBottom: 6,
                    }}
                  >
                    Archive
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 12 }}>
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 20,
                        fontWeight: 400,
                        color: hoveredRoom === room.number ? "#F7F7F5" : "rgba(247,247,245,0.5)",
                        letterSpacing: "0.02em",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {room.count}
                    </p>
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 20,
                        color: hoveredRoom === room.number ? "#F7F7F5" : "rgba(247,247,245,0.2)",
                        transition: "all 0.3s ease",
                        transform: hoveredRoom === room.number ? "translateX(4px)" : "translateX(0)",
                        display: "inline-block",
                      }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          width: "100%",
          padding: "40px 80px",
          borderTop: "1px solid rgba(229,229,224,0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 9,
            letterSpacing: "0.22em",
            color: "rgba(247,247,245,0.2)",
            textTransform: "uppercase",
          }}
        >
          The White Cube — Portfolio Exhibition 2024
        </p>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 13,
            fontStyle: "italic",
            color: "rgba(247,247,245,0.2)",
          }}
        >
          All works reserved
        </p>
      </div>
    </section>
  );
}
