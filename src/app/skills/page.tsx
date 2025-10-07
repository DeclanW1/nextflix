import Header from "../main-page/components/Header";
import SkillsGrid from "./SkillsGrid";
import { SKILLS } from "./skills";

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0f2c] via-[#0b122e] to-[#050817] text-white">
      <div className="pointer-events-none absolute -top-20 -left-20 w-[620px] h-[620px] bg-purple-600/15 blur-[180px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[620px] h-[620px] bg-blue-500/15 blur-[180px] rounded-full" />
      <Header />

      <section className="mx-auto max-w-7xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">Skills</h1>
        <p className="text-white/70 mb-8">
          Website is a work in progress, updates to come in the future.
        </p>

        <SkillsGrid skills={SKILLS} />
      </section>
    </main>
  );
}
