"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { setActiveProfile } from "@/lib/activeProfile";

// profile box displays selectable profile image and name 
export default function ProfileBox({
  name,
  href,
  image,
}: {
  name: string;
  href: string;
  image: string;
}) {
  const router = useRouter();

  // handles selecting a profile:
  // - saves it to localStorage via setActiveProfile()
  // - navigates to the target page
  function handleSelect() {
    setActiveProfile({ name, avatarUrl: image });
    router.push(href);
  }

  return (
    <div className="text-center">
      {/* profile card button */}
      <button
        onClick={handleSelect}
        className="group block w-full border-4 border-white hover:border-white transition">
        {/* profile image */}
        <div className="relative mx-auto h-64 w-64 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            sizes="256px"
            className="object-cover transition-transform duration-200 group-hover:scale-105"
          />
        </div>

        {/* profile name */}
        <div className="mt-4 text-2xl font-semibold">{name}</div>
      </button>
    </div>
  );
}