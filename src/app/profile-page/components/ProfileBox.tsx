"use client";
import Link from "next/link";
import Image from "next/image";

export default function ProfileBox({
  name,
  href,
  image,
}: {
  name: string;
  href: string;
  image: string;
}) {
  return (
    <div className="text-center">
      <Link
        href={href}
        className="group block border-4 border-white/60 hover:border-white transition">
        <div className="relative mx-auto h-64 w-64 overflow-hidden"> 
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-105"
            sizes="256px"
          />
        </div>
      </Link>
      <div className="mt-4 text-2xl font-semibold">{name}</div>
    </div>
  );
}

