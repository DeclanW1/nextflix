import Header from "./components/Header";
import TileGrid from "./components/TileGrid";

export default function MainPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <section
        className="
          mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-20 max-w-screen-lg md:max-w-screen-xl xl:max-w-screen-2xl 2xl:max-w-[1600px]">
        <TileGrid />
      </section>
    </main>
  );
}
