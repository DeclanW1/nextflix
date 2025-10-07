import Header from "./components/Header";
import TileGrid from "./components/TileGrid";

export default function MainPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0f2c] via-[#0b122e] to-[#050817] text-white">
      <div className="pointer-events-none absolute -top-20 -left-20 w-[620px] h-[620px] bg-purple-600/15 blur-[180px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[620px] h-[620px] bg-blue-500/15 blur-[180px] rounded-full" />
      <Header />
      <section
        className="
          mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-20 max-w-screen-lg md:max-w-screen-xl xl:max-w-screen-2xl 2xl:max-w-[1600px]">
        <TileGrid />
      </section>
    </main>
  );
}
