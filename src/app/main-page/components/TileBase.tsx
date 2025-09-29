import Link from "next/link";
import Image from "next/image";

export default function TileBase({
  title,
  href,
  image,
  caption,
}: {
  title: string;
  href: string;
  image?: string;
  caption?: string;
}) {
  return (
    <Link
      href={href}
      className={[
        "group relative flex h-36 w-full items-center justify-center",
        "rounded-none border border-white/25 overflow-hidden",
        "outline-none focus-visible:ring-2 focus-visible:ring-white/40",
        "transition"
      ].join(" ")}>

      {/* Background image */}
      {image && (
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width:1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          priority={title === "CV"}
        />
      )}
      
        {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

      {/* Title + optional caption */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-lg md:text-xl font-medium text-white drop-shadow">
          {title}
        </div>
        {caption && <div className="mt-1 text-xs text-white/80">{caption}</div>}
      </div>
    </Link>
  );
}
