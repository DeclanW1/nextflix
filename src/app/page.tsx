"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import IntroSplash from "./components/IntroSplash";

export default function Home() {
  const router = useRouter();
  const [gateDone, setGateDone] = useState(false);
  const [splashDone, setSplashDone] = useState(false);

  // Sound timing: 0.2s delay + 3.25s clip = 3450ms splash
  const totalDurationMs = 3450;

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0f2c] via-[#0b122e] to-[#050817] text-white">
      {/* soft glowing spots */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-[620px] h-[620px] bg-purple-600/15 blur-[180px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[620px] h-[620px] bg-blue-500/15 blur-[180px] rounded-full" />

      {/* tile + 'click to continue' text */}
      {!gateDone && (
        <div
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center select-none text-center"
          onPointerDown={() => setGateDone(true)}
          onKeyDown={() => setGateDone(true)}
          tabIndex={0}
        >
          <div className="text-4xl sm:text-5xl font-semibold tracking-widest text-white/90">
            Declan’s <span className="text-blue-400">Portfolio</span>
          </div>
          <div className="mt-4 text-sm sm:text-base text-white/50 animate-pulse">
            click to continue
          </div>
        </div>
      )}

      {/* Intro splash + sound */}
      {gateDone && !splashDone && (
        <IntroSplash
          durationMs={totalDurationMs}
          logoSrc={null}
          soundSrc="/sounds/intro.mp3"
          onFinish={() => {
            setSplashDone(true);
            router.push("/profile-page");
          }}
          skipEnabled
        />
      )}
    </main>
  );
}
