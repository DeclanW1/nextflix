"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  onFinish?: () => void;
  skipEnabled?: boolean;
  titleLeft?: string;
  titleRight?: string;
  soundSrc?: string | null;
  logoSrc?: string | null;
  durationMs?: number;
};

export default function IntroSplash({
  onFinish,
  skipEnabled = true,
  titleLeft = "Declan’s",
  titleRight = "Portfolio",
  soundSrc = "/sounds/intro.mp3",
  durationMs,
}: Props) {
  const [show, setShow] = useState(true);

  // timing
  const soundDelayMs = 200;      // 0.2s delay
  const soundLengthMs = 3250;    // 3.25s sound
  const totalDurationMs = durationMs ?? (soundDelayMs + soundLengthMs); // 3450ms

  // splash
  useEffect(() => {
    const t = window.setTimeout(() => {
      setShow(false);
      window.setTimeout(() => onFinish?.(), 300); // fade buffer
    }, totalDurationMs);
    return () => window.clearTimeout(t);
  }, [totalDurationMs, onFinish]);

  // sound
  useEffect(() => {
    if (!soundSrc) return;
    const sound = new Audio(soundSrc);
    sound.volume = 0.6;

    const tryPlay = () => {
      sound.play().catch(() => {});
    };

    const delayTimer = setTimeout(tryPlay, soundDelayMs);

    const unlockAudio = () => {
      tryPlay();
      document.removeEventListener("click", unlockAudio);
      document.removeEventListener("keydown", unlockAudio);
      document.removeEventListener("touchstart", unlockAudio);
    };
    document.addEventListener("click", unlockAudio, { once: true });
    document.addEventListener("keydown", unlockAudio, { once: true });
    document.addEventListener("touchstart", unlockAudio, { once: true });

    return () => {
      clearTimeout(delayTimer);
      sound.pause();
      sound.currentTime = 0;
      document.removeEventListener("click", unlockAudio);
      document.removeEventListener("keydown", unlockAudio);
      document.removeEventListener("touchstart", unlockAudio);
    };
  }, [soundSrc]);

  const handleSkip = () => {
    setShow(false);
    setTimeout(() => onFinish?.(), 100);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center text-white">
          {/* theme backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2c] via-[#0b122e] to-[#050817]" />
          {/* soft glow */}
          <div className="pointer-events-none absolute -top-20 -left-20 w-[620px] h-[620px] bg-purple-600/15 blur-[180px] rounded-full" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 w-[620px] h-[620px] bg-blue-500/15 blur-[180px] rounded-full" />
          {/* fade */}
          <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] bg-white/5" />

          {/* title annimated */}
          <motion.div
            className="relative mt-2 flex items-center gap-3 font-semibold tracking-[0.22em] text-2xl sm:text-3xl"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}>
            {Array.from(titleLeft).map((ch, i) => (
              <motion.span
                key={`l${i}`}
                className="inline-block text-white/90"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
                }}>
                {ch}
              </motion.span>
            ))}

            {/* Dot with glow effect */}
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: 20, opacity: 0 },
                show: { y: 0, opacity: 1, transition: { duration: 0.35 } },
              }}>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white/70">
                <span className="absolute inset-0 rounded-full blur-[6px] bg-blue-400/50" />
              </span>
            </motion.span>

            {Array.from(titleRight).map((ch, i) => (
              <motion.span
                key={`r${i}`}
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-purple-400"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
                }}>
                {ch}
              </motion.span>
            ))}
          </motion.div>

          {/* underline glow */}
          <div className="absolute top-[55%] h-px w-[38%] max-w-[520px] bg-white/10">
            <div className="h-px w-[45%] bg-gradient-to-r from-blue-400/70 via-blue-300/40 to-transparent blur-[1px]" />
          </div>

          {/* skip button */}
          {skipEnabled && (
            <button
              onClick={handleSkip}
              className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white/80 hover:bg-white/20 hover:text-white transition">
              Skip
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}