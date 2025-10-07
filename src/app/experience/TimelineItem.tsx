import type { Experience } from "./data";

export default function TimelineItem({
  item,
  index,
}: {
  item: Experience;
  index: number;
}) {
  // Determines if the item sits above or below the central line
  const up = index % 2 === 0;

  // Adjusts the vertical offset of the timeline card
  const offsetCard = up
    ? "-translate-y-36 md:-translate-y-40"
    : "translate-y-36 md:translate-y-40";

  // Connector line height between the dot and card
  const connectorH = "h-36 md:h-40";

  return (
    <div className="relative h-full min-w-[85vw] md:min-w-[60vw] lg:min-w-[48vw] xl:min-w-[42vw] snap-center shrink-0 flex items-center justify-center">
      {/* Center dot on the timeline */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.12)]" />

      {/* Vertical connector line linking to the card */}
      <div
        className={[
          "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 w-px bg-white/40",
          up ? `-translate-y-full ${connectorH}` : connectorH,
        ].join(" ")}
      />

      {/* Timeline card containing job/experience info */}
      <article
        className={[
          "max-w-[720px] w-[88%] md:w-[80%]",
          "rounded-2xl border border-white/15 bg-white/5 backdrop-blur",
          "shadow-[0_15px_45px_rgba(0,0,0,0.35)] p-6 md:p-8",
          "transition hover:border-white/25",
          offsetCard,
        ].join(" ")}>
        <header className="mb-3">
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
            {item.title}
          </h3>
          <p className="mt-1 text-white/80">{item.company}</p>
          <p className="mt-1 text-sm text-white/60">
            {item.start} — {item.end}
          </p>
        </header>

        <p className="text-white/90 leading-relaxed">{item.summary}</p>
      </article>
    </div>
  );
}
