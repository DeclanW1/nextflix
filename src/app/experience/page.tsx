import Header from "../main-page/components/Header";
import FullPageTimeline from "./FullPageTimeline";

export default function ExperiencePage() {
  return (
    <main className="relative h-screen overflow-hidden bg-gradient-to-br from-[#0a0f2c] via-[#0b122e] to-[#050817] text-white">
      <div className="pointer-events-none absolute -top-20 -left-20 w-[620px] h-[620px] bg-purple-600/15 blur-[180px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[620px] h-[620px] bg-blue-500/15 blur-[180px] rounded-full" />

      <Header />
      <FullPageTimeline />
    </main>
  );
}