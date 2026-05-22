import { GlobalNav } from "./components/GlobalNav";
import { AboutMe }   from "./components/AboutMe";
import { WorkList }  from "./components/WorkList";
import { SiteFooter } from "./components/Footer";

/* SVG coordinate constants for the cover frame. */
const W = 920, H = 620;
const BAR = 44, BC = 22;
const CX = W / 2, CY = H / 2;
const IX1 = BAR, IX2 = W - BAR;
const IY1 = BAR, IY2 = H - BAR;
const HB1 = CY - BC, HB2 = CY + BC;
const VB1 = CX - BC, VB2 = CX + BC;

/* SVG presentation attributes are drawing data, not component layout styling. */
function StretcherFrame() {
  return (
    <svg className="canvas-frame-svg" viewBox={`0 0 ${W} ${H}`}>

      {/* Outer frame */}
      <rect
        className="frame-outer"
        x="0.5" y="0.5" width={W - 1} height={H - 1}
        fill="none" stroke="#111111" strokeWidth="1"
      />

      {/* Inner frame guide lines */}
      <g className="frame-inner-face">
        <line x1={0}   y1={IY1} x2={W}   y2={IY1} stroke="#111111" strokeWidth="0.5" />
        <line x1={0}   y1={IY2} x2={W}   y2={IY2} stroke="#111111" strokeWidth="0.5" />
        <line x1={IX1} y1={0}   x2={IX1} y2={H}   stroke="#111111" strokeWidth="0.5" />
        <line x1={IX2} y1={0}   x2={IX2} y2={H}   stroke="#111111" strokeWidth="0.5" />
      </g>

      {/* Corner miter lines */}
      <g className="frame-corner-miter">
        <line x1={0} y1={0} x2={IX1} y2={IY1} stroke="#111111" strokeWidth="0.5" />
        <line x1={W} y1={0} x2={IX2} y2={IY1} stroke="#111111" strokeWidth="0.5" />
        <line x1={0} y1={H} x2={IX1} y2={IY2} stroke="#111111" strokeWidth="0.5" />
        <line x1={W} y1={H} x2={IX2} y2={IY2} stroke="#111111" strokeWidth="0.5" />
      </g>

      {/* Horizontal center bars */}
      <g className="frame-h-bar" stroke="#111111" strokeWidth="0.8">
        <line x1={IX1} y1={HB1} x2={VB1} y2={HB1} />
        <line x1={VB2} y1={HB1} x2={IX2} y2={HB1} />
        <line x1={IX1} y1={HB2} x2={VB1} y2={HB2} />
        <line x1={VB2} y1={HB2} x2={IX2} y2={HB2} />
      </g>

      {/* Vertical center bars */}
      <g className="frame-v-bar" stroke="#111111" strokeWidth="0.8">
        <line x1={VB1} y1={IY1} x2={VB1} y2={HB1} />
        <line x1={VB1} y1={HB2} x2={VB1} y2={IY2} />
        <line x1={VB2} y1={IY1} x2={VB2} y2={HB1} />
        <line x1={VB2} y1={HB2} x2={VB2} y2={IY2} />
      </g>

      {/* Center joint */}
      <g className="frame-junction">
        <rect
          x={VB1} y={HB1} width={BC * 2} height={BC * 2}
          fill="#F4F4F0" stroke="#111111" strokeWidth="0.8"
        />
        <line x1={VB1} y1={HB1} x2={VB2} y2={HB2} stroke="#111111" strokeWidth="0.4" opacity="0.38" />
        <line x1={VB2} y1={HB1} x2={VB1} y2={HB2} stroke="#111111" strokeWidth="0.4" opacity="0.38" />
      </g>

      {/* Outer corner slots */}
      <g className="frame-wedge-slots" fill="none" stroke="#111111" strokeWidth="0.5">
        <rect x={7}      y={7}      width={20} height={20} />
        <rect x={W - 27} y={7}      width={20} height={20} />
        <rect x={7}      y={H - 27} width={20} height={20} />
        <rect x={W - 27} y={H - 27} width={20} height={20} />
      </g>

      {/* Inner corner tension dots */}
      <g className="frame-tension-dots" fill="none" stroke="#111111" strokeWidth="0.5">
        <circle cx={IX1} cy={IY1} r={2.8} />
        <circle cx={IX2} cy={IY1} r={2.8} />
        <circle cx={IX1} cy={IY2} r={2.8} />
        <circle cx={IX2} cy={IY2} r={2.8} />
      </g>

      {/* Alignment tick marks */}
      <g className="frame-tick-marks" stroke="#111111" strokeWidth="0.4">
        <line x1={CX}     y1={0}      x2={CX}  y2={10}   />
        <line x1={CX}     y1={H - 10} x2={CX}  y2={H}    />
        <line x1={0}      y1={CY}     x2={10}  y2={CY}   />
        <line x1={W - 10} y1={CY}     x2={W}   y2={CY}   />
      </g>

    </svg>
  );
}

export default function App() {
  return (
    <>
      <GlobalNav />

      <div className="gallery-room">

        <section className="room-cover" id="room-00-cover">

          <main className="room-cover__canvas-area">

            <div className="canvas-frame-wrapper">

              <StretcherFrame />

              <div className="canvas-text-layer">

                <div className="canvas-room-label">
                  <span className="canvas-room-label__line" />
                  <span className="canvas-room-label__text">Room 00</span>
                  <span className="canvas-room-label__line" />
                </div>

                <h1 className="canvas-headline">Kim Sumin</h1>

                <div className="canvas-separator">
                  <span className="canvas-separator__line" />
                  <span className="canvas-separator__text">Frontend Developer &amp; UI/UX Designer</span>
                  <span className="canvas-separator__line" />
                </div>

              </div>

              <span className="canvas-coord canvas-coord--left">37.5665° N</span>
              <span className="canvas-coord canvas-coord--right">126.9780° E</span>

            </div>

            <footer className="room-cover__footer-strip">
              <div className="room-cover__footer-counter">
                <span className="room-cover__footer-dot" />
                <span className="room-cover__footer-counter-text">01 / 03 - Portfolio</span>
              </div>
              <span className="room-cover__footer-scroll-hint">scroll to explore</span>
              <span className="room-cover__footer-location">Seoul, KR</span>
            </footer>

          </main>

        </section>

        <AboutMe />

        <WorkList />

      </div>

      <SiteFooter />
    </>
  );
}
