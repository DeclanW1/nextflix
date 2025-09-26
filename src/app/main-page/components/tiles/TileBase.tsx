"use client";
import Image from "next/image";

export default function TileBase({
  title,
  image,
  onClick,
}: {
  title: string;
  image: string;          
  onClick?: () => void;   
}) {
  return (
    <button
      type="button"
      aria-label={title}
      onClick={onClick}
      className={[
        "group relative aspect-[16/9] w-full overflow-hidden rounded-none border border-white/25",
        "outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition will-change-transform hover:-translate-y-0.5 hover:border-white/40",
      ].join(" ")}>
      <Image
        src={image}
        alt=""
        fill
        sizes="(max-width:1024px) 100vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        priority={title === "CV"}
      />

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-xl sm:text-2xl font-extrabold text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
          {title}
        </h3>
      </div>
    </button>
  );
}
