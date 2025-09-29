import Header from "./components/Header";
import TileGrid from "./components/TileGrid";

export default function MainPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <section className="mx-auto max-w-6xl p-4 md:p-8">
        <TileGrid />
      </section>
    </main>
  );
}
