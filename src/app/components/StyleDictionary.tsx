const colorTokens = [
  {
    label: "Museum Wall",
    hex: "#F7F7F5",
    role: "Main Background",
    usage: "bg-primary",
    dark: false,
  },
  {
    label: "Canvas White",
    hex: "#FFFFFF",
    role: "Surface / Card",
    usage: "bg-surface",
    dark: false,
  },
  {
    label: "Charcoal Ink",
    hex: "#111111",
    role: "Primary Text / Line",
    usage: "text-primary",
    dark: true,
  },
  {
    label: "Linen Border",
    hex: "#E5E5E0",
    role: "Divider / Stroke",
    usage: "border-default",
    dark: false,
  },
  {
    label: "Ash Muted",
    hex: "#888880",
    role: "Secondary Text",
    usage: "text-muted",
    dark: false,
  },
  {
    label: "Gallery Fog",
    hex: "#F0EFE9",
    role: "Hover State",
    usage: "bg-hover",
    dark: false,
  },
];

const typographyScale = [
  {
    label: "DISPLAY — I",
    size: "72px / 4.5rem",
    weight: "300",
    tracking: "−0.02em",
    font: "Cormorant Garamond",
    sample: "Fine Art",
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 52,
      fontWeight: 300,
      letterSpacing: "-0.02em",
      lineHeight: 1,
      color: "#111111",
    },
  },
  {
    label: "HEADING — I",
    size: "48px / 3rem",
    weight: "400",
    tracking: "−0.01em",
    font: "Cormorant Garamond",
    sample: "The Canvas",
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 38,
      fontWeight: 400,
      letterSpacing: "-0.01em",
      lineHeight: 1.1,
      color: "#111111",
    },
  },
  {
    label: "HEADING — II",
    size: "32px / 2rem",
    weight: "500",
    tracking: "0em",
    font: "Cormorant Garamond",
    sample: "Exhibition Room",
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 26,
      fontWeight: 500,
      lineHeight: 1.2,
      color: "#111111",
    },
  },
  {
    label: "LABEL — CAPS",
    size: "10px / 0.625rem",
    weight: "500",
    tracking: "+0.22em",
    font: "DM Sans",
    sample: "ROOM 01 // INDIVIDUAL WEB",
    style: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: "0.22em",
      textTransform: "uppercase" as const,
      color: "#888880",
    },
  },
  {
    label: "BODY — REGULAR",
    size: "15px / 0.9375rem",
    weight: "300",
    tracking: "0.01em",
    font: "DM Sans",
    sample: "A typographic system built on contrast between structured logic and expressive form.",
    style: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: 14,
      fontWeight: 300,
      letterSpacing: "0.01em",
      lineHeight: 1.65,
      color: "#111111",
    },
  },
  {
    label: "CAPTION — META",
    size: "11px / 0.6875rem",
    weight: "400",
    tracking: "0.06em",
    font: "DM Sans",
    sample: "2024 // Web Design // Interaction",
    style: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: 11,
      fontWeight: 400,
      letterSpacing: "0.06em",
      color: "#888880",
    },
  },
];

const shadowTokens = [
  {
    label: "Shadow / Canvas Lift",
    token: "--shadow-canvas",
    value: "0 2px 24px rgba(17,17,17,0.04)",
    description: "Default card elevation",
  },
  {
    label: "Shadow / Focus Depth",
    token: "--shadow-depth",
    value: "0 8px 48px rgba(17,17,17,0.07)",
    description: "Hover / active state",
  },
  {
    label: "Shadow / Frame Inset",
    token: "--shadow-inset",
    value: "inset 0 0 0 1px #E5E5E0",
    description: "Border replacement",
  },
];

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

export function StyleDictionary() {
  return (
    <section
      style={{
        maxWidth: 1440,
        margin: "0 auto",
        padding: "120px 80px",
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: 96 }}>
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
          Room 00 // Style Dictionary
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 56,
            fontWeight: 300,
            letterSpacing: "-0.02em",
            color: "#111111",
            lineHeight: 1,
            marginBottom: 24,
          }}
        >
          Design Tokens
        </h2>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            fontWeight: 300,
            letterSpacing: "0.01em",
            lineHeight: 1.7,
            color: "#888880",
            maxWidth: 480,
          }}
        >
          A systematic record of visual primitives — the atomic elements from which all surfaces, hierarchy, and rhythm are constructed.
        </p>
      </div>

      {/* COLOR PALETTE */}
      <div style={{ marginBottom: 96 }}>
        <SectionLabel number="00.01" title="Colour Palette" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 16,
          }}
        >
          {colorTokens.map((token) => (
            <div key={token.hex}>
              <div
                style={{
                  height: 120,
                  backgroundColor: token.hex,
                  border: "1px solid #E5E5E0",
                  boxShadow: "0 2px 24px rgba(17,17,17,0.04)",
                  marginBottom: 16,
                }}
              />
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  color: "#888880",
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                {token.role}
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 18,
                  fontWeight: 500,
                  color: "#111111",
                  marginBottom: 4,
                  letterSpacing: "0.02em",
                }}
              >
                {token.label}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11,
                  fontWeight: 300,
                  letterSpacing: "0.08em",
                  color: "#AAAAAA",
                }}
              >
                {token.hex}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 10,
                  letterSpacing: "0.06em",
                  color: "#CCCCCC",
                  marginTop: 4,
                }}
              >
                {token.usage}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* TYPOGRAPHY */}
      <div style={{ marginBottom: 96 }}>
        <SectionLabel number="00.02" title="Typography Scale" />
        <div style={{ display: "flex", gap: 32, marginBottom: 40 }}>
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 9,
                letterSpacing: "0.2em",
                color: "#888880",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Serif — Cormorant Garamond
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 13,
                fontWeight: 300,
                color: "#888880",
                lineHeight: 1.6,
                maxWidth: 560,
              }}
            >
              ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 !@#$%^&*()
            </p>
          </div>
          <div style={{ width: 1, backgroundColor: "#E5E5E0" }} />
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 9,
                letterSpacing: "0.2em",
                color: "#888880",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Sans — DM Sans
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 300,
                color: "#888880",
                lineHeight: 1.6,
                maxWidth: 560,
              }}
            >
              ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 !@#$%^&*()
            </p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {typographyScale.map((type, i) => (
            <div
              key={type.label}
              style={{
                display: "grid",
                gridTemplateColumns: "180px 1fr 200px",
                alignItems: "center",
                borderTop: "1px solid #E5E5E0",
                padding: "24px 0",
                gap: 32,
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 9,
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    color: "#888880",
                    textTransform: "uppercase",
                    marginBottom: 6,
                  }}
                >
                  {type.label}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10,
                    fontWeight: 300,
                    color: "#BBBBBB",
                    letterSpacing: "0.06em",
                  }}
                >
                  {type.font}
                </p>
              </div>
              <div style={type.style}>{type.sample}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10,
                    color: "#AAAAAA",
                    letterSpacing: "0.06em",
                  }}
                >
                  {type.size}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10,
                    color: "#CCCCCC",
                    letterSpacing: "0.06em",
                  }}
                >
                  {type.weight} / {type.tracking}
                </span>
              </div>
            </div>
          ))}
          <div style={{ borderBottom: "1px solid #E5E5E0" }} />
        </div>
      </div>

      {/* BORDER & SHADOW */}
      <div style={{ marginBottom: 48 }}>
        <SectionLabel number="00.03" title="Border & Shadow Properties" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {shadowTokens.map((shadow) => (
            <div
              key={shadow.token}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E5E0",
                padding: "32px",
              }}
            >
              <div
                style={{
                  height: 80,
                  backgroundColor: "#F7F7F5",
                  marginBottom: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 120,
                    height: 40,
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E5E5E0",
                    boxShadow: shadow.value,
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  color: "#888880",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {shadow.description}
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#111111",
                  marginBottom: 8,
                }}
              >
                {shadow.label}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 10,
                  fontWeight: 300,
                  color: "#AAAAAA",
                  letterSpacing: "0.04em",
                  lineHeight: 1.6,
                }}
              >
                {shadow.value}
              </p>
            </div>
          ))}
        </div>

        {/* Border tokens */}
        <div
          style={{
            marginTop: 24,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
          }}
        >
          {[
            { label: "Border / Default", value: "1px solid #E5E5E0", role: "Dividers, cards, nav" },
            { label: "Border / Ink", value: "1px solid #111111", role: "Active states, strong emphasis" },
          ].map((b) => (
            <div
              key={b.label}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E5E0",
                padding: "24px 32px",
                display: "flex",
                alignItems: "center",
                gap: 32,
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 1,
                  backgroundColor: b.label.includes("Ink") ? "#111111" : "#E5E5E0",
                  flexShrink: 0,
                }}
              />
              <div>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 15,
                    fontWeight: 500,
                    color: "#111111",
                    marginBottom: 4,
                  }}
                >
                  {b.label}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10,
                    color: "#AAAAAA",
                    letterSpacing: "0.06em",
                  }}
                >
                  {b.value} — {b.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
