"use client";
import Header from "../components/Header";
import TileBase from "../components/tiles/TileBase";
import ModalProvider, { useModal } from "../modal/ModalProvider";
import { TILES } from "../content/sections/index";

function Grid() {
  const { openModal } = useModal();

  const ORDER = ["cv", "about", "contact", "experience", "skills"] as const;
  const tilesOrdered = ORDER.map((id) => TILES.find((t) => t.id === id)!).filter(Boolean);

  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-8%] h-[28rem] w-[28rem] -translate-x-1/2 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-6 pb-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {tilesOrdered.map(({ id, title, image, modalTitle, Body }) => (
            <div
              key={id}
              className={

                id === "cv" ? "lg:col-span-2 lg:row-span-2" : ""
              }>
              <TileBase
                title={title}
                image={image}
                onClick={() =>
                  openModal({
                    title: modalTitle,
                    content: <Body />,
                  })
                }
              />
            </div>
          ))}

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}

export default function MainPage() {
  return (
    <ModalProvider>
      <main className="min-h-screen bg-black text-white antialiased">
        <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(900px_420px_at_50%_-10%,rgba(255,255,255,0.04),transparent)]" />
        <Header />
        <Grid />
      </main>
    </ModalProvider>
  );
}

