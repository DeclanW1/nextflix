import Header from "../main-page/components/Header";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0f2c] via-[#0b122e] to-[#050817] text-white">
      <div className="pointer-events-none absolute -top-20 -left-20 w-[620px] h-[620px] bg-purple-600/15 blur-[180px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[620px] h-[620px] bg-blue-500/15 blur-[180px] rounded-full" />
      <Header />
      <section className="mx-auto max-w-3xl p-6 md:p-10 space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold">About Me</h1>
        <p className="opacity-80">
          This website is still in development, more coming soon!
        </p>
      </section>
    </main>
  );
}
