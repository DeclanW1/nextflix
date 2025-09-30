import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/20 bg-black backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        
        {/* Left side- title */}
        <div className="text-lg md:text-xl font-semibold tracking-wide">
          Declan&apos;s Portfolio
        </div>

        {/* Right side- home + profile pic */}
        <div className="flex items-center gap-4">
          <Link 
            href="/main-page" 
            className="text-sm md:text-base opacity-80 hover:opacity-100">
            Home
          </Link>

          <Link href="/profile-page" className="block">
            <div className="h-9 w-9 rounded-full overflow-hidden border border-white/20 hover:border-white/50 transition">
              <Image
                src=""  
                alt="Profile"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
