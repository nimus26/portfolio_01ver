import { useEffect, useRef, useState } from "react";
import canvasWire from "../../asset/canvas_wire_cut.png";
import canvasBack from "../../asset/canvas_back_cut.png";
import canvasBackTurn85 from "../../asset/canvas_back_cut_turn_85.png";
import canvasBackTurn45 from "../../asset/canvas_back_cut_trun_45.png";
import canvasFront125 from "../../asset/canvas_front_cut_125.png";
import canvasFront180 from "../../asset/canvas_front_cut_180.png";
import canvasFront from "../../asset/canvas_front_cut.png";

const W = 920;
const H = 620;
const BAR = 44;
const BC = 22;
const CX = W / 2;
const CY = H / 2;
const IX1 = BAR;
const IX2 = W - BAR;
const IY1 = BAR;
const IY2 = H - BAR;
const HB1 = CY - BC;
const HB2 = CY + BC;
const VB1 = CX - BC;
const VB2 = CX + BC;

type CanvasPhase = "svg" | "wire" | "back";
type CanvasScrollStage = "cover" | "flipping" | "docked";
type CanvasFaceMode = "idle" | "flipping" | "front";
type CanvasScrollDirection = "forward" | "backward";

type MainHeroProps = {
  onCanvasDockedChange?: (isDocked: boolean) => void;
};
type MorphMeasurements = {
  startY: number;
  endY: number;
  aboutSectionTop: number;
  lineStartPageCenterX: number;
  lineStartPageCenterY: number;
  targetPageCenterX: number;
  targetPageCenterY: number;
  targetScale: number;
};

const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max);
const easeOutCubic = (value: number) => 1 - Math.pow(1 - clamp(value), 3);
const interpolate = (from: number, to: number, progress: number) => from + (to - from) * progress;
const MAX_HERO_WHEEL_STEP_RATIO = 0.28;
const WIRE_IMAGE_PROGRESS = 0.08;
const BACK_IMAGE_PROGRESS = 0.18;
const FLIP_START_PROGRESS = 0.34;
const FLIP_COMPLETE_PROGRESS = 0.58;
const DOCK_MORPH_START_PROGRESS = 0.68;
const DOCK_COMPLETE_PROGRESS = 0.999;

const getWheelDeltaY = (event: WheelEvent) => {
  if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) {
    return event.deltaY * 16;
  }

  if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
    return event.deltaY * window.innerHeight;
  }

  return event.deltaY;
};

function StretcherFrame() {
  return (
    <svg className="canvas-frame-svg" viewBox={`0 0 ${W} ${H}`}>
      <rect
        className="frame-outer"
        x="0.5"
        y="0.5"
        width={W - 1}
        height={H - 1}
        fill="none"
        stroke="#111111"
        strokeWidth="1"
      />

      <g className="frame-inner-face">
        <line x1={0} y1={IY1} x2={W} y2={IY1} stroke="#111111" strokeWidth="0.5" />
        <line x1={0} y1={IY2} x2={W} y2={IY2} stroke="#111111" strokeWidth="0.5" />
        <line x1={IX1} y1={0} x2={IX1} y2={H} stroke="#111111" strokeWidth="0.5" />
        <line x1={IX2} y1={0} x2={IX2} y2={H} stroke="#111111" strokeWidth="0.5" />
      </g>

      <g className="frame-corner-miter">
        <line x1={0} y1={0} x2={IX1} y2={IY1} stroke="#111111" strokeWidth="0.5" />
        <line x1={W} y1={0} x2={IX2} y2={IY1} stroke="#111111" strokeWidth="0.5" />
        <line x1={0} y1={H} x2={IX1} y2={IY2} stroke="#111111" strokeWidth="0.5" />
        <line x1={W} y1={H} x2={IX2} y2={IY2} stroke="#111111" strokeWidth="0.5" />
      </g>

      <g className="frame-h-bar" stroke="#111111" strokeWidth="0.8">
        <line x1={IX1} y1={HB1} x2={VB1} y2={HB1} />
        <line x1={VB2} y1={HB1} x2={IX2} y2={HB1} />
        <line x1={IX1} y1={HB2} x2={VB1} y2={HB2} />
        <line x1={VB2} y1={HB2} x2={IX2} y2={HB2} />
      </g>

      <g className="frame-v-bar" stroke="#111111" strokeWidth="0.8">
        <line x1={VB1} y1={IY1} x2={VB1} y2={HB1} />
        <line x1={VB1} y1={HB2} x2={VB1} y2={IY2} />
        <line x1={VB2} y1={IY1} x2={VB2} y2={HB1} />
        <line x1={VB2} y1={HB2} x2={VB2} y2={IY2} />
      </g>

      <g className="frame-junction">
        <rect
          x={VB1}
          y={HB1}
          width={BC * 2}
          height={BC * 2}
          fill="#F4F4F0"
          stroke="#111111"
          strokeWidth="0.8"
        />
        <line x1={VB1} y1={HB1} x2={VB2} y2={HB2} stroke="#111111" strokeWidth="0.4" opacity="0.38" />
        <line x1={VB2} y1={HB1} x2={VB1} y2={HB2} stroke="#111111" strokeWidth="0.4" opacity="0.38" />
      </g>

      <g className="frame-wedge-slots" fill="none" stroke="#111111" strokeWidth="0.5">
        <rect x={7} y={7} width={20} height={20} />
        <rect x={W - 27} y={7} width={20} height={20} />
        <rect x={7} y={H - 27} width={20} height={20} />
        <rect x={W - 27} y={H - 27} width={20} height={20} />
      </g>

      <g className="frame-tension-dots" fill="none" stroke="#111111" strokeWidth="0.5">
        <circle cx={IX1} cy={IY1} r={2.8} />
        <circle cx={IX2} cy={IY1} r={2.8} />
        <circle cx={IX1} cy={IY2} r={2.8} />
        <circle cx={IX2} cy={IY2} r={2.8} />
      </g>

      <g className="frame-tick-marks" stroke="#111111" strokeWidth="0.4">
        <line x1={CX} y1={0} x2={CX} y2={10} />
        <line x1={CX} y1={H - 10} x2={CX} y2={H} />
        <line x1={0} y1={CY} x2={10} y2={CY} />
        <line x1={W - 10} y1={CY} x2={W} y2={CY} />
      </g>
    </svg>
  );
}

export function MainHero({ onCanvasDockedChange }: MainHeroProps) {
  const [canvasPhase, setCanvasPhase] = useState<CanvasPhase>("svg");
  const [canvasScrollStage, setCanvasScrollStage] = useState<CanvasScrollStage>("cover");
  const [canvasFaceMode, setCanvasFaceMode] = useState<CanvasFaceMode>("idle");
  const [canvasScrollDirection, setCanvasScrollDirection] = useState<CanvasScrollDirection>("forward");
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const measurementsRef = useRef<MorphMeasurements | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const stageRef = useRef<CanvasScrollStage>("cover");
  const faceModeRef = useRef<CanvasFaceMode>("idle");
  const scrollDirectionRef = useRef<CanvasScrollDirection>("forward");
  const previousProgressRef = useRef(0);
  const dockSnapRequestedRef = useRef(false);


  useEffect(() => {
    const frameElement = frameRef.current;
    const sectionElement = sectionRef.current;
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactViewportQuery = window.matchMedia("(max-width: 767px)");

    if (!frameElement || !sectionElement) {
      return undefined;
    }

    const setStage = (nextStage: CanvasScrollStage) => {
      if (stageRef.current === nextStage) {
        return;
      }

      stageRef.current = nextStage;
      setCanvasScrollStage(nextStage);
      onCanvasDockedChange?.(nextStage === "docked");
    };

    const setMorphVariable = (name: string, value: string) => {
      frameElement.style.setProperty(name, value);
    };

    const resetMorph = () => {
      setMorphVariable("--hero-morph-x", "0px");
      setMorphVariable("--hero-morph-y", "0px");
      setMorphVariable("--hero-morph-scale", "1");
      setMorphVariable("--hero-morph-rotate", "0deg");
      setMorphVariable("--hero-morph-radius", "0px");
      setMorphVariable("--hero-morph-opacity", "1");
      setCanvasPhase("svg");
      setStage("cover");
      setFaceMode("idle");
    };

    const setFaceMode = (nextMode: CanvasFaceMode) => {
      if (faceModeRef.current === nextMode) {
        return;
      }

      faceModeRef.current = nextMode;
      setCanvasFaceMode(nextMode);
    };

    const setScrollDirection = (nextDirection: CanvasScrollDirection) => {
      if (scrollDirectionRef.current === nextDirection) {
        return;
      }

      scrollDirectionRef.current = nextDirection;
      setCanvasScrollDirection(nextDirection);
    };

    const shouldUseSimpleLayout = () => reduceMotionQuery.matches || compactViewportQuery.matches;

    const updateMorph = () => {
      const measurements = measurementsRef.current;

      if (!measurements || shouldUseSimpleLayout()) {
        resetMorph();
        return;
      }

      const scrollY = window.scrollY;
      const rawProgress = (scrollY - measurements.startY) / (measurements.endY - measurements.startY);
      const progress = clamp(rawProgress);
      const previousProgress = previousProgressRef.current;

      if (Math.abs(progress - previousProgress) > 0.002) {
        setScrollDirection(progress > previousProgress ? "forward" : "backward");
        previousProgressRef.current = progress;
      }

      if (scrollY < measurements.aboutSectionTop - 1 || scrollY >= measurements.endY - 1) {
        dockSnapRequestedRef.current = false;
      }

      if (
        scrollDirectionRef.current === "forward" &&
        !dockSnapRequestedRef.current &&
        scrollY >= measurements.aboutSectionTop - 1 &&
        scrollY < measurements.endY - window.innerHeight * 0.12
      ) {
        dockSnapRequestedRef.current = true;
        window.scrollTo({
          top: measurements.endY - window.innerHeight * 0.12,
          behavior: "smooth",
        });
      }

      const rotateProgress = easeOutCubic(
        (progress - DOCK_MORPH_START_PROGRESS) / (1 - DOCK_MORPH_START_PROGRESS),
      );
      const moveProgress = rotateProgress;
      const scaleProgress = moveProgress;
      const linePageCenterX = interpolate(
        measurements.lineStartPageCenterX,
        measurements.targetPageCenterX,
        moveProgress,
      );
      const linePageCenterY = interpolate(
        measurements.lineStartPageCenterY,
        measurements.targetPageCenterY,
        moveProgress,
      );
      const lineViewportCenterX = linePageCenterX - window.scrollX;
      const lineViewportCenterY = linePageCenterY - scrollY;
      const deltaX = moveProgress <= 0 ? 0 : lineViewportCenterX - window.innerWidth / 2;
      const deltaY = moveProgress <= 0 ? 0 : lineViewportCenterY - window.innerHeight / 2;
      const scale = interpolate(1, measurements.targetScale, scaleProgress);
      const rotate = interpolate(0, 90, rotateProgress);
      const radius = interpolate(0, 18, moveProgress);
      const nextPhase: CanvasPhase =
        progress < WIRE_IMAGE_PROGRESS ? "svg" : progress < BACK_IMAGE_PROGRESS ? "wire" : "back";
      const nextStage: CanvasScrollStage =
        progress < FLIP_START_PROGRESS ? "cover" : progress >= DOCK_COMPLETE_PROGRESS ? "docked" : "flipping";
      const nextFaceMode: CanvasFaceMode =
        progress < FLIP_START_PROGRESS ? "idle" : progress < FLIP_COMPLETE_PROGRESS ? "flipping" : "front";

      setMorphVariable("--hero-morph-x", `${deltaX.toFixed(2)}px`);
      setMorphVariable("--hero-morph-y", `${deltaY.toFixed(2)}px`);
      setMorphVariable("--hero-morph-scale", scale.toFixed(4));
      setMorphVariable("--hero-morph-rotate", `${rotate.toFixed(2)}deg`);
      setMorphVariable("--hero-morph-radius", `${radius.toFixed(2)}px`);
      setMorphVariable("--hero-morph-opacity", progress >= DOCK_COMPLETE_PROGRESS ? "0" : "1");
      setCanvasPhase(nextPhase);
      setFaceMode(nextFaceMode);
      setStage(nextStage);
    };

    const requestMorphUpdate = () => {
      if (animationFrameRef.current !== null) {
        return;
      }

      animationFrameRef.current = window.requestAnimationFrame(() => {
        animationFrameRef.current = null;
        updateMorph();
      });
    };

    const constrainHeroWheel = (event: WheelEvent) => {
      const measurements = measurementsRef.current;

      if (!measurements || shouldUseSimpleLayout() || event.ctrlKey) {
        return;
      }

      const deltaY = getWheelDeltaY(event);
      const scrollY = window.scrollY;
      const sectionTop = sectionElement.offsetTop;
      const isForwardMorphScroll = deltaY > 0 && scrollY >= sectionTop - 1 && scrollY < measurements.endY - 1;
      const isBackwardMorphScroll = deltaY < 0 && scrollY > measurements.startY + 1 && scrollY <= measurements.endY + 1;

      if (!isForwardMorphScroll && !isBackwardMorphScroll) {
        return;
      }

      const maxWheelStep = window.innerHeight * MAX_HERO_WHEEL_STEP_RATIO;

      if (Math.abs(deltaY) <= maxWheelStep) {
        return;
      }

      event.preventDefault();

      window.scrollTo({
        top: clamp(scrollY + Math.sign(deltaY) * maxWheelStep, sectionTop, measurements.endY),
        behavior: "auto",
      });
      requestMorphUpdate();
    };

    const measureMorphTargets = () => {
      const targetElement = document.querySelector<HTMLElement>(".about-profile-target");
      const aboutHeaderElement = document.querySelector<HTMLElement>(".about-header");

      if (!targetElement || shouldUseSimpleLayout()) {
        measurementsRef.current = null;
        resetMorph();
        return;
      }

      const sectionRect = sectionElement.getBoundingClientRect();
      const targetRect = targetElement.getBoundingClientRect();
      const aboutHeaderRect = aboutHeaderElement?.getBoundingClientRect();
      const pageScrollY = window.scrollY;
      const pageScrollX = window.scrollX;
      const heroTop = sectionRect.top + pageScrollY;
      const aboutSectionTop = targetElement.closest<HTMLElement>(".about-section")?.offsetTop ?? targetElement.offsetTop;
      const targetTop = targetRect.top + pageScrollY;
      const targetCenterX = targetRect.left + pageScrollX + targetRect.width / 2;
      const targetCenterY = targetTop + targetRect.height / 2;
      const aboutHeaderCenterY = aboutHeaderRect
        ? aboutHeaderRect.top + pageScrollY + aboutHeaderRect.height / 2
        : targetTop;
      const startY = heroTop - window.innerHeight * 0.12;
      const endY = Math.max(startY + 1, aboutHeaderCenterY - window.innerHeight / 2);
      const lineStartScrollY = startY + (endY - startY) * DOCK_MORPH_START_PROGRESS;
      const baseFrameWidth = Math.min(window.innerWidth * 0.8, W);
      const baseFrameHeight = baseFrameWidth * (H / W);
      const targetScale = targetRect.width / Math.max(baseFrameHeight, 1);

      measurementsRef.current = {
        startY,
        endY,
        aboutSectionTop,
        lineStartPageCenterX: pageScrollX + window.innerWidth / 2,
        lineStartPageCenterY: lineStartScrollY + window.innerHeight / 2,
        targetPageCenterX: targetCenterX,
        targetPageCenterY: targetCenterY,
        targetScale,
      };

      requestMorphUpdate();
    };

    measureMorphTargets();

    window.addEventListener("scroll", requestMorphUpdate, { passive: true });
    sectionElement.addEventListener("wheel", constrainHeroWheel, { passive: false });
    window.addEventListener("resize", measureMorphTargets);
    window.addEventListener("load", measureMorphTargets);
    reduceMotionQuery.addEventListener("change", measureMorphTargets);
    compactViewportQuery.addEventListener("change", measureMorphTargets);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      window.removeEventListener("scroll", requestMorphUpdate);
      sectionElement.removeEventListener("wheel", constrainHeroWheel);
      window.removeEventListener("resize", measureMorphTargets);
      window.removeEventListener("load", measureMorphTargets);
      reduceMotionQuery.removeEventListener("change", measureMorphTargets);
      compactViewportQuery.removeEventListener("change", measureMorphTargets);
    };
  }, [onCanvasDockedChange]);


  const canvasFrameClassName = [
    "canvas-frame-wrapper",
    "hero-morph-image",
    `canvas-frame-wrapper--${canvasPhase}`,
    `canvas-frame-wrapper--${canvasScrollStage}`,
    `canvas-frame-wrapper--face-${canvasFaceMode}`,
  ].join(" ");

  return (
    <section ref={sectionRef} className="room-cover" id="room-00-cover">
      <main className="room-cover__canvas-area">
        <div ref={frameRef} className={canvasFrameClassName}>
          <div className="canvas-frame-stack" aria-hidden="true">
            <div className={`canvas-frame-layer canvas-frame-layer--svg${canvasPhase === "svg" && canvasScrollStage === "cover" ? " is-active" : ""}`}>
              <StretcherFrame />
            </div>

            <img
              className={`canvas-frame-layer canvas-frame-image${canvasPhase === "wire" && canvasScrollStage === "cover" ? " is-active" : ""}`}
              src={canvasWire}
              alt=""
            />

            <img
              className={`canvas-frame-layer canvas-frame-image${canvasPhase === "back" && canvasScrollStage === "cover" ? " is-active" : ""}`}
              src={canvasBack}
              alt=""
            />

            <div className={`canvas-flip-card${canvasFaceMode === "flipping" ? " is-flipped" : ""}${canvasFaceMode === "front" ? " is-front-locked" : ""}${canvasScrollDirection === "backward" ? " is-reversing" : ""}`}>
              <img className="canvas-flip-card__face canvas-flip-card__face--back" src={canvasBack} alt="" />
              <img className="canvas-flip-card__face canvas-flip-card__face--turn-45" src={canvasBackTurn45} alt="" />
              <img className="canvas-flip-card__face canvas-flip-card__face--turn-85" src={canvasBackTurn85} alt="" />
              <img className="canvas-flip-card__face canvas-flip-card__face--front-125" src={canvasFront125} alt="" />
              <img className="canvas-flip-card__face canvas-flip-card__face--front-180" src={canvasFront180} alt="" />
              <img className="canvas-flip-card__face canvas-flip-card__face--front" src={canvasFront} alt="" />
            </div>
          </div>

          <div className="canvas-text-layer">
            <div className="canvas-room-label">
              <span className="canvas-room-label__line" />
              <span className="canvas-room-label__text">Room 00</span>
              <span className="canvas-room-label__line" />
            </div>

            <h1 className="canvas-headline">Kim Sumin</h1>

            <div className="canvas-separator">
              <span className="canvas-separator__line" />
              <span className="canvas-separator__text">UIUX Portfolio Exhibition</span>
              <span className="canvas-separator__line" />
            </div>
          </div>

          <span className="canvas-coord canvas-coord--left">37.5665 N</span>
          <span className="canvas-coord canvas-coord--right">126.9780 E</span>
        </div>

        <footer className="room-cover__footer-strip">
          <div className="room-cover__footer-counter">
            <span className="room-cover__footer-dot" />
            <span className="room-cover__footer-counter-text">Entrance - UIUX Portfolio</span>
          </div>
          <span className="room-cover__footer-scroll-hint">Scroll to enter the exhibition</span>
          <span className="room-cover__footer-location">Seoul, KR</span>
        </footer>
      </main>
    </section>
  );
}







