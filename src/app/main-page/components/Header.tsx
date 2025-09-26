"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex items-center">
        <div className="ml-auto flex items-center gap-3">
          <span className="text-sm sm:text-base font-medium text-white/80">
            Declan&apos;s portfolio
          </span>
          <Link
            href="/profile-page"
            className="relative block w-9 h-9"
            title="Profiles">
            <Image
              src="/profile-pic/placeholder.png"
              alt="Your profile"
              fill
              sizes="36px"
              className="object-cover rounded-full border border-white/20"
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
