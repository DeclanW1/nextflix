import Header from "../main-page/components/Header";

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <section className="mx-auto max-w-4xl p-6 md:p-10 space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold">Skills</h1>
        <p className="opacity-80">
          This website is still in development, more coming soon!
        </p>
      </section>
    </main>
  );
}
