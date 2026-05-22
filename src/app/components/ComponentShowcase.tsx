import { useState } from "react";

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 40 }}>
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 9,
          fontWeight: 500,
          letterSpacing: "0.28em",
          color: "#888880",
          textTransform: "uppercase",
        }}
      >
        {number}
      </span>
      <div style={{ flex: 1, height: 1, backgroundColor: "#E5E5E0" }} />
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 9,
          fontWeight: 500,
          letterSpacing: "0.28em",
          color: "#888880",
          textTransform: "uppercase",
        }}
      >
        {title}
      </span>
    </div>
  );
}

/* ── Navigation Bar Specimen ── */
function NavSpecimen() {
  return (
    <div>
      <SectionLabel number="00.04" title="Global Navigation — Specimen" />
      <div
        style={{
          border: "1px solid #E5E5E0",
          backgroundColor: "#FFFFFF",
          overflow: "hidden",
          boxShadow: "0 2px 24px rgba(17,17,17,0.04)",
        }}
      >
        {/* Specimen Label */}
        <div
          style={{
            borderBottom: "1px solid #E5E5E0",
            padding: "10px 24px",
            display: "flex",
            alignItems: "center",
            gap: 8,
            backgroundColor: "#F7F7F5",
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#E5E5E0" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#E5E5E0" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#E5E5E0" }} />
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 9,
              letterSpacing: "0.2em",
              color: "#BBBBBB",
              textTransform: "uppercase",
              marginLeft: 8,
            }}
          >
            Component / nav-bar
          </span>
        </div>

        {/* The Nav itself */}
        <div
          style={{
            backgroundColor: "#F7F7F5",
            borderBottom: "1px solid #E5E5E0",
            height: 64,
            display: "flex",
            alignItems: "center",
            padding: "0 48px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <div>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 17,
                  fontWeight: 500,
                  color: "#111111",
                  letterSpacing: "0.04em",
                }}
              >
                The White Cube
              </span>
            </div>
            <div style={{ width: 1, height: 28, backgroundColor: "#E5E5E0" }} />
            {["ROOM 00: INDEX", "ROOM 01: ABOUT", "ROOM 02: GALLERY"].map((item, i) => (
              <button
                key={item}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "0 12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  position: "relative",
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: "0.16em",
                    color: i === 0 ? "#111111" : "#AAAAAA",
                    textTransform: "uppercase",
                  }}
                >
                  {item}
                </span>
                {i === 0 && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: -1,
                      left: 12,
                      right: 12,
                      height: 1,
                      backgroundColor: "#111111",
                    }}
                  />
                )}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 9,
                letterSpacing: "0.2em",
                color: "#888880",
                textTransform: "uppercase",
              }}
            >
              Contact
            </span>
            <div
              style={{
                width: 32,
                height: 32,
                border: "1px solid #E5E5E0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 14, color: "#111111" }}>→</span>
            </div>
          </div>
        </div>

        {/* Annotation */}
        <div style={{ padding: "24px 48px", display: "flex", gap: 48 }}>
          {[
            { label: "Height", value: "64px" },
            { label: "Padding H", value: "80px (full) / 48px (specimen)" },
            { label: "Font — Brand", value: "Cormorant Garamond / 500 / 17px" },
            { label: "Font — Nav", value: "DM Sans / 500 / 10px / +0.16em" },
            { label: "Active Indicator", value: "1px solid #111111" },
            { label: "Border Bottom", value: "1px solid #E5E5E0" },
          ].map((ann) => (
            <div key={ann.label}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 8,
                  letterSpacing: "0.2em",
                  color: "#BBBBBB",
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                {ann.label}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 10,
                  color: "#888880",
                  letterSpacing: "0.04em",
                }}
              >
                {ann.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Grid System Specimen ── */
function GridSpecimen() {
  return (
    <div style={{ marginTop: 80 }}>
      <SectionLabel number="00.05" title="Layout Grid — 12 Column" />
      <div
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #E5E5E0",
          padding: 40,
          boxShadow: "0 2px 24px rgba(17,17,17,0.04)",
        }}
      >
        <div
          style={{
            position: "relative",
            height: 180,
          }}
        >
          {/* Grid columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: 16,
              position: "absolute",
              inset: 0,
            }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "rgba(229,229,224,0.35)",
                  height: "100%",
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: 8,
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 9,
                    color: "#CCCCCC",
                    letterSpacing: "0.1em",
                  }}
                >
                  {i + 1}
                </span>
              </div>
            ))}
          </div>

          {/* Example layout overlays */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: 16,
              position: "absolute",
              inset: 0,
            }}
          >
            {/* 3-col label */}
            <div
              style={{
                gridColumn: "1 / 4",
                alignSelf: "end",
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(17,17,17,0.06)",
                  border: "1px solid rgba(17,17,17,0.12)",
                  height: 64,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 9,
                    letterSpacing: "0.15em",
                    color: "#888880",
                    textTransform: "uppercase",
                  }}
                >
                  Sidebar — 3 col
                </span>
              </div>
            </div>
            {/* 9-col content */}
            <div
              style={{
                gridColumn: "4 / 13",
                alignSelf: "end",
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(17,17,17,0.04)",
                  border: "1px solid rgba(17,17,17,0.08)",
                  height: 64,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 9,
                    letterSpacing: "0.15em",
                    color: "#AAAAAA",
                    textTransform: "uppercase",
                  }}
                >
                  Content Area — 9 col
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid specs */}
        <div
          style={{
            marginTop: 32,
            borderTop: "1px solid #E5E5E0",
            paddingTop: 24,
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 24,
          }}
        >
          {[
            { label: "Columns", value: "12" },
            { label: "Gutter", value: "16px" },
            { label: "Outer Margin", value: "80px" },
            { label: "Max Width", value: "1440px" },
            { label: "Breakpoints", value: "768 / 1024 / 1280 / 1440" },
          ].map((spec) => (
            <div key={spec.label}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 8,
                  letterSpacing: "0.22em",
                  color: "#BBBBBB",
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                {spec.label}
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 18,
                  fontWeight: 500,
                  color: "#111111",
                  letterSpacing: "0.02em",
                }}
              >
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Card Specimens ── */
function CardSpecimens() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div style={{ marginTop: 80 }}>
      <SectionLabel number="00.06" title="Card Components — Specimens" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {/* Work Card */}
        <div
          onMouseEnter={() => setHovered(0)}
          onMouseLeave={() => setHovered(null)}
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5E5E0",
            overflow: "hidden",
            cursor: "pointer",
            boxShadow: hovered === 0 ? "0 8px 48px rgba(17,17,17,0.07)" : "0 2px 24px rgba(17,17,17,0.04)",
            transition: "box-shadow 0.35s ease",
          }}
        >
          <div
            style={{
              height: 200,
              backgroundColor: "#F0EFE9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                border: "1px solid #E5E5E0",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 2px 24px rgba(17,17,17,0.04)",
                transform: hovered === 0 ? "scale(1.04)" : "scale(1)",
                transition: "transform 0.5s ease",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 16,
                left: 16,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 9,
                letterSpacing: "0.2em",
                color: "#888880",
                textTransform: "uppercase",
              }}
            >
              Web Design
            </div>
          </div>
          <div style={{ padding: 24 }}>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 9,
                letterSpacing: "0.2em",
                color: "#AAAAAA",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Room 01 // 2024
            </p>
            <h4
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 22,
                fontWeight: 500,
                color: "#111111",
                lineHeight: 1.2,
                marginBottom: 12,
                letterSpacing: "-0.01em",
              }}
            >
              Canvas in Motion
            </h4>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                fontWeight: 300,
                color: "#888880",
                lineHeight: 1.65,
                letterSpacing: "0.01em",
              }}
            >
              An interactive web experience exploring the boundary between digital canvas and user gesture.
            </p>
            <div
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", gap: 6 }}>
                {["HTML", "CSS", "JS"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 8,
                      letterSpacing: "0.14em",
                      color: "#AAAAAA",
                      border: "1px solid #E5E5E0",
                      padding: "2px 8px",
                      textTransform: "uppercase",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 18,
                  color: hovered === 0 ? "#111111" : "#CCCCCC",
                  transition: "color 0.3s ease",
                }}
              >
                →
              </span>
            </div>
          </div>
        </div>

        {/* Minimal Info Card */}
        <div
          onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(null)}
          style={{
            border: "1px solid #E5E5E0",
            padding: 32,
            cursor: "pointer",
            backgroundColor: "#FFFFFF",
            boxShadow: hovered === 1 ? "0 8px 48px rgba(17,17,17,0.07)" : "0 2px 24px rgba(17,17,17,0.04)",
            transition: "box-shadow 0.35s ease",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                width: 32,
                height: 1,
                backgroundColor: "#111111",
                marginBottom: 32,
              }}
            />
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 9,
                letterSpacing: "0.22em",
                color: "#AAAAAA",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              About
            </p>
            <h4
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 28,
                fontWeight: 400,
                color: "#111111",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                marginBottom: 20,
              }}
            >
              Designer &<br />Front-end Dev
            </h4>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                fontWeight: 300,
                color: "#888880",
                lineHeight: 1.7,
              }}
            >
              Bridging fine arts methodology with the precision of interface engineering.
            </p>
          </div>
          <div
            style={{
              marginTop: 32,
              paddingTop: 24,
              borderTop: "1px solid #E5E5E0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 9,
                letterSpacing: "0.18em",
                color: "#CCCCCC",
                textTransform: "uppercase",
              }}
            >
              View Profile
            </span>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 18,
                color: hovered === 1 ? "#111111" : "#CCCCCC",
                transition: "color 0.3s ease",
              }}
            >
              →
            </span>
          </div>
        </div>

        {/* Stat / Counter Card */}
        <div
          style={{
            backgroundColor: "#111111",
            padding: 32,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 9,
                letterSpacing: "0.22em",
                color: "rgba(247,247,245,0.3)",
                textTransform: "uppercase",
                marginBottom: 32,
              }}
            >
              Archive Statistics
            </p>
            {[
              { n: "23", label: "Total Works" },
              { n: "04", label: "Exhibition Rooms" },
              { n: "3Y", label: "Design Practice" },
            ].map((stat) => (
              <div
                key={stat.n}
                style={{
                  borderTop: "1px solid rgba(229,229,224,0.1)",
                  padding: "16px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 36,
                    fontWeight: 300,
                    color: "#F7F7F5",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.n}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 9,
                    letterSpacing: "0.18em",
                    color: "rgba(247,247,245,0.4)",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Button Specimens ── */
function ButtonSpecimens() {
  return (
    <div style={{ marginTop: 80 }}>
      <SectionLabel number="00.07" title="Interactive Components — Buttons & CTAs" />
      <div
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #E5E5E0",
          padding: "48px",
          boxShadow: "0 2px 24px rgba(17,17,17,0.04)",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center" }}>
          {/* Primary */}
          <button
            style={{
              backgroundColor: "#111111",
              color: "#F7F7F5",
              border: "none",
              padding: "14px 36px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Enter Exhibition
          </button>

          {/* Secondary */}
          <button
            style={{
              backgroundColor: "transparent",
              color: "#111111",
              border: "1px solid #111111",
              padding: "14px 36px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            View Archive
          </button>

          {/* Ghost */}
          <button
            style={{
              backgroundColor: "transparent",
              color: "#888880",
              border: "1px solid #E5E5E0",
              padding: "14px 36px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10,
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Learn More
          </button>

          {/* Text Link */}
          <button
            style={{
              backgroundColor: "transparent",
              color: "#111111",
              border: "none",
              padding: "0",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 16,
              fontWeight: 400,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            View Full Gallery
            <span>→</span>
          </button>

          {/* Icon CTA */}
          <div
            style={{
              width: 48,
              height: 48,
              border: "1px solid #E5E5E0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 18,
                color: "#111111",
              }}
            >
              +
            </span>
          </div>

          {/* Dark Primary */}
          <button
            style={{
              backgroundColor: "#F7F7F5",
              color: "#111111",
              border: "1px solid #E5E5E0",
              padding: "14px 36px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Download CV
          </button>
        </div>

        {/* Annotations */}
        <div
          style={{
            marginTop: 36,
            paddingTop: 28,
            borderTop: "1px solid #E5E5E0",
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 16,
          }}
        >
          {["Primary", "Secondary", "Ghost", "Text Link", "Icon CTA", "Surface"].map((label) => (
            <p
              key={label}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 8,
                letterSpacing: "0.2em",
                color: "#CCCCCC",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              {label}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ComponentShowcase() {
  return (
    <section
      style={{
        maxWidth: 1440,
        margin: "0 auto",
        padding: "80px 80px 120px",
      }}
    >
      {/* Section heading */}
      <div style={{ marginBottom: 80, borderTop: "1px solid #E5E5E0", paddingTop: 64 }}>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 9,
            fontWeight: 500,
            letterSpacing: "0.28em",
            color: "#888880",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Room 00 // UI Component Library
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 56,
            fontWeight: 300,
            letterSpacing: "-0.02em",
            color: "#111111",
            lineHeight: 1,
          }}
        >
          Component
          <br />
          <em
            style={{
              fontStyle: "italic",
              color: "#888880",
              fontWeight: 300,
            }}
          >
            Specimens
          </em>
        </h2>
      </div>

      <NavSpecimen />
      <GridSpecimen />
      <CardSpecimens />
      <ButtonSpecimens />
    </section>
  );
}
