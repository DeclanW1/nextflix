"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getActiveProfile } from "@/lib/activeProfile";

export default function Header() {
  // header reveal + hover tracking
  const [revealed, setRevealed] = useState(true);
  const [hovering, setHovering] = useState(false);
  const hideTimer = useRef<number | null>(null);

  // Avatar state- fallback lives in /public
  const [avatar, setAvatar] = useState("/profile.jpg");

  // load avatar image from active profile and react to storeage changes
  useEffect(() => {
    try {
      const p =
        getActiveProfile?.() ??
        JSON.parse(localStorage.getItem("activeProfile") || "null");
      if (p?.avatarUrl) setAvatar(p.avatarUrl);
    } catch {
      /* ignore parse + availability errors */
    }

    const onStorage = (e: StorageEvent) => {
      if (e.key !== "activeProfile") return;
      try {
        const next = e.newValue ? JSON.parse(e.newValue) : null;
        setAvatar(next?.avatarUrl || "/profile.jpg");
      } catch {
        setAvatar("/profile.jpg");
      }
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // Header reveal - slide down when mouse is near the top, slide up when mouse moves away
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hasPointer = matchMedia("(pointer:fine)").matches;
    if (!hasPointer) return;

    const PROXIMITY_Y = 80;
    const HIDE_DELAY = 500;

    const clearHideTimer = () => {
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
        hideTimer.current = null;
      }
    };

    const onMove = (e: MouseEvent) => {
      if (e.clientY <= PROXIMITY_Y) {
        setRevealed(true);
        clearHideTimer();
      } else if (!hovering) {
        clearHideTimer();
        hideTimer.current = window.setTimeout(() => setRevealed(false), HIDE_DELAY);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      clearHideTimer();
    };
  }, [hovering]);

  return (
    <header
      // header that slides onto the page to be revealed 
      className={`sticky top-0 z-50 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform ${
        revealed ? "translate-y-0" : "-translate-y-16"
      }`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}>
      <div className="relative mx-3 mt-2 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
        {/* grey gradiant overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

        <div className="flex items-center justify-between px-5 md:px-10 py-3">
          {/* left side of header - title text */}
            <h1 className="text-lg md:text-xl font-semibold tracking-wide bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent transition duration-300 group-hover:from-white group-hover:to-white/80 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]">
              Declan&apos;s Portfolio
            </h1>


          {/* right side of header - home button that returns to main page */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link
              href="/main-page"
              className="px-3 py-1.5 text-sm md:text-base font-medium text-white/80 hover:text-white rounded-full ring-1 ring-white/10 hover:ring-white/30 transition">
              Home
            </Link>

            {/* avatar button, returns to profile page */}
            <Link href="/profile-page" className="block group">
              <div className="h-10 w-10 rounded-full overflow-hidden border border-white/20 group-hover:border-white/50 shadow-[0_0_10px_rgba(255,255,255,0.1)] transition">
                <Image
                  src={avatar}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}