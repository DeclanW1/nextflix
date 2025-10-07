import Link from "next/link";
import Header from "../main-page/components/Header";

export default function CVPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0f2c] via-[#0b122e] to-[#050817] text-white">
      {/* background glow */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-[620px] h-[620px] bg-purple-600/15 blur-[180px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[620px] h-[620px] bg-blue-500/15 blur-[180px] rounded-full" />

      <Header />

      <section className="mx-auto max-w-5xl p-6 md:p-10">
        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-6 pb-4 border-b border-black">
          <a
            href="/cv/web-cv.pdf"
            download
            className="min-w-[150px] text-center px-5 py-2 rounded-md bg-white text-black font-semibold shadow-md hover:bg-gray-200 transition">
            Download CV
          </a>

          <Link
            href="/contact"
            className="min-w-[150px] text-center px-5 py-2 rounded-md bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition">
            Contact Me
          </Link>
        </div>

        {/* PDF viewer */}
        <div className="w-full">
          {/* Desktop/tablet-- load CV */}
          <div className="hidden md:block bg-white rounded-md shadow-lg overflow-hidden">
            <embed
              src="/cv/web-cv.pdf#view=FitH&toolbar=0"
              type="application/pdf"
              className="w-full min-h-[85vh]"
            />
          </div>

          {/* Mobile-- Box + button to open CV */}
          <div className="md:hidden">
            <div className="rounded-md border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-sm text-white/90 mb-4">
                To view my CV on mobile, please press below:
              </p>
              <a
                href="/cv/web-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block min-w-[150px] px-5 py-2 rounded-md bg-white text-black font-semibold shadow-md hover:bg-gray-200 transition">
                View CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}