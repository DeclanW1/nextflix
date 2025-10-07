"use client";

import { useState } from "react";
import Header from "../main-page/components/Header";

export default function ContactPage() {
  // Contact details
  const EMAIL = "declanwood21@outlook.com";
  const LINKEDIN = "https://www.linkedin.com/in/declan-wood-ba67b4272";

  // Track whether the email has been copied
  const [copied, setCopied] = useState(false);

  // Copy email to clipboard, with fallback for older browsers
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const el = document.createElement("textarea");
      el.value = EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }

    // display "Copied!" text temporarily
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0f2c] via-[#0b122e] to-[#050817] text-white">
      {/* Page header */}
      <Header />

      {/* Background glow effects */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-[620px] h-[620px] bg-purple-600/15 blur-[180px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[620px] h-[620px] bg-blue-500/15 blur-[180px] rounded-full" />

      {/* Contact container */}
      <section className="relative z-10 flex items-center justify-center px-4 py-28">
        <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-3xl p-10 md:p-14 text-center shadow-[0_20px_60px_rgba(0,0,0,0.35)] max-w-2xl w-full">
          {/* Page title and intro text */}
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            Get in Touch
          </h1>
          <p className="opacity-80 text-base md:text-lg mb-10 leading-relaxed">
            You can reach me anytime on LinkedIn or by email.
          </p>

          {/* Buttons section */}
          <div className="grid grid-cols-1 gap-4">
            {/* Email actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              {/* Opens default mail */}
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/25">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
                  <path d="M2 7l10 6 10-6" />
                </svg>
                <span>Email Me</span>
              </a>

              {/* Copies email to clipboard */}
              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-full bg-white/5 hover:bg-white/15 transition-all border border-white/20">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span>{copied ? "Copied!" : "Copy Email"}</span>
              </button>
            </div>

            {/* LinkedIn button */}
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-full bg-[#0e76a8]/85 hover:bg-[#0e76a8] transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.83v2.11h.05c.53-1 1.83-2.11 3.77-2.11 4.03 0 4.78 2.65 4.78 6.09V24h-4v-6.86c0-1.64-.03-3.75-2.29-3.75-2.29 0-2.64 1.79-2.64 3.63V24h-4V8.5z" />
              </svg>
              <span>LinkedIn Profile</span>
            </a>

          </div>
        </div>
      </section>
    </main>
  );
}