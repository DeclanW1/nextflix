import { RecruiterCard } from "./recruiter/card";
import { NoseyCard } from "./nosey/card";
import { OwnerCard } from "./owner/card";

export default function ProfileLandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0f2c] via-[#0b122e] to-[#050817] text-white flex flex-col items-center justify-center pt-24 pb-24 sm:pt-16 sm:pb-16">
      <div className="pointer-events-none absolute -top-20 -left-20 w-[620px] h-[620px] bg-purple-600/15 blur-[180px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[620px] h-[620px] bg-blue-500/15 blur-[180px] rounded-full" />

      <h1 className="text-center text-3xl md:text-5xl font-semibold mb-12 mt-4">
        Who&apos;s viewing?
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6">
        <li>
          <RecruiterCard />
        </li>
        <li>
          <NoseyCard />
        </li>
        <li>
          <OwnerCard />
        </li>
      </ul>
    </main>
  );
}

