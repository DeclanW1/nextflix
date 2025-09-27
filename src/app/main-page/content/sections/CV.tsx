export default function CV() {
  return (
    <div className="h-full flex flex-col bg-[#0b0f26]">
      <div className="h-10 shrink-0 flex items-center px-2 border-b border-white/10">
        <a
          href="/cv/web-cv.pdf"
          download
          className="px-3 py-1 text-sm border border-white/30 bg-black/40 hover:bg-black/70">
          Download
        </a>
      </div>

      <iframe
        src="/cv/web-cv.pdf#toolbar=0"
        title="CV PDF"
        className="w-full flex-1"
      />
    </div>
  );
}
