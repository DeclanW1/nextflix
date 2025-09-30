import Header from "../main-page/components/Header";
import SkillsGrid from "./SkillsGrid";
import { SKILLS } from "./skills";

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
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
