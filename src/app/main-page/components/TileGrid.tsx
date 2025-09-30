import TileBase from "./TileBase";

export default function TileGrid() {
  return (
    <div
      className="grid gap-4 grid-cols-1 md:grid-cols-3auto-rows-[14rem]">

      <div className="md:col-span-2 md:row-span-2 [&>*]:h-full">
        <TileBase title="CV" href="/cv" image="/icons/cv.png" />
      </div>

      <div className="[&>*]:h-full [&>*]:aspect-auto">
        <TileBase title="About" href="/about" image="/icons/aboutme.png" />
      </div>
      <div className="[&>*]:h-full [&>*]:aspect-auto">
        <TileBase title="Contact" href="/contact" image="/icons/contact.png" />
      </div>

      <div className="[&>*]:h-full [&>*]:aspect-auto">
        <TileBase title="Skills" href="/skills" image="/icons/skills.png" />
      </div>
      <div className="[&>*]:h-full [&>*]:aspect-auto">
        <TileBase title="Experience" href="/experience" image="/icons/experience.png" />
      </div>
    </div>
  );
}
