import Link from "next/link";
import Header from "../main-page/components/Header";

export default function CVPage() {
  return (
    <main className="min-h-screen bg-black text-white">
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

        {/* PDF */}
        <div className="w-full">
          <embed
            src="/cv/web-cv.pdf#toolbar=0"
            type="application/pdf"
            className="w-full min-h-screen border border-white/10 rounded-md shadow-lg"
          />
        </div>
      </section>
    </main>
  );
}
