"use client";

import { useCallback, useEffect, useRef } from "react";
import TimelineItem from "./TimelineItem";
import { EXPERIENCES_SORTED } from "./data";

export default function FullPageTimeline() {
  // Reference to the horizontal scroll container
  const railRef = useRef<HTMLDivElement>(null);

  // Handles smooth horizontal scrolling using the mouse wheel
  const onWheel = useCallback((e: WheelEvent) => {
    const el = railRef.current;
    if (!el) return;

    // Only trigger if horizontal scroll is possible and vertical input is dominant
    const canScroll =
      el.scrollWidth > el.clientWidth && Math.abs(e.deltaY) > Math.abs(e.deltaX);
    if (!canScroll) return;

    e.preventDefault();
    el.scrollBy({ left: e.deltaY, behavior: "smooth" });
  }, []);

  // Handles left/right keyboard navigation
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    const el = railRef.current;
    if (!el) return;

    // Scroll step is 85% of visible width
    const step = el.clientWidth * 0.85;

    if (e.key === "ArrowRight") {
      e.preventDefault();
      el.scrollBy({ left: step, behavior: "smooth" });
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      el.scrollBy({ left: -step, behavior: "smooth" });
    }
  }, []);

  // Attach and clean up event listeners
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    // Cast to EventListener to satisfy TypeScript
    const wheelHandler = onWheel as unknown as EventListener;
    const keyHandler = onKeyDown as unknown as EventListener;

    el.addEventListener("wheel", wheelHandler, { passive: false });
    window.addEventListener("keydown", keyHandler);

    return () => {
      el.removeEventListener("wheel", wheelHandler);
      window.removeEventListener("keydown", keyHandler);
    };
  }, [onWheel, onKeyDown]);

  return (
    <section className="absolute left-0 right-0 top-24 md:top-28 bottom-0">
      {/* Horizontal scrolling container */}
      <div
        ref={railRef}
        className="relative h-full w-full overflow-x-auto overflow-y-hidden no-scrollbar snap-x snap-mandatory">
        {/* Inner flex container holding all timeline items */}
        <div className="relative flex items-stretch gap-8 md:gap-10 px-6 md:px-10 h-full w-max">
          {/* Horizontal center line */}
          <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

          {/* space at the start */}
          <div className="shrink-0 w-[6vw]" />

          {/* timeline items */}
          {EXPERIENCES_SORTED.map((item, idx) => (
            <TimelineItem key={item.id} item={item} index={idx} />
          ))}

          {/* space at the end */}
          <div className="shrink-0 w-[6vw]" />
        </div>
      </div>
    </section>
  );
}