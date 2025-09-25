"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  durationMs?: number;
  onFinish?: () => void;
  skipEnabled?: boolean;
  titleLeft?: string;   // text on the left (e.g., BRIGHTWELL)
  titleRight?: string;  // text on the right (e.g., STUDIOS)
};

export default function IntroSplash({
  durationMs = 2400,
  onFinish,
  skipEnabled = true,
  titleLeft = "BRIGHTWELL",
  titleRight = "STUDIOS",
}: Props) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => {
      setShow(false);
      window.setTimeout(() => onFinish?.(), 300); // allow fade-out
    }, durationMs);
    return () => window.clearTimeout(t);
  }, [durationMs, onFinish]);

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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
          role="dialog"
          aria-label="Intro animation"
        >
          {/* Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-80" />
            <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] bg-white/5" />
          </div>

          {/* Wordmark only (no logo/audio) */}
          <motion.div
            className="relative mt-2 flex items-center gap-2 font-semibold tracking-[0.25em] text-xl sm:text-2xl"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
          >
            {Array.from(titleLeft).map((ch, i) => (
              <motion.span
                key={`l${i}`}
                className="inline-block"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
                }}
              >
                {ch}
              </motion.span>
            ))}
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: 20, opacity: 0 },
                show: { y: 0, opacity: 1, transition: { duration: 0.35 } },
              }}
            >
              •
            </motion.span>
            {Array.from(titleRight).map((ch, i) => (
              <motion.span
                key={`r${i}`}
                className="inline-block"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1, transition: { duration: 0.35 } },
                }}
              >
                {ch}
              </motion.span>
            ))}
          </motion.div>

          {/* Skip */}
          {skipEnabled && (
            <button
              onClick={handleSkip}
              className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white/80 hover:bg-white/20 hover:text-white transition"
            >
              Skip
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
