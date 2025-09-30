import { RecruiterCard } from "./recruiter/card";
import { NoseyCard } from "./nosey/card";
import { OwnerCard } from "./owner/card";

export default function ProfileLandingPage() {
  return (
    <main className="min-h-screen bg-[#0b0f26] text-white flex flex-col items-center justify-center">
      <h1 className="text-center text-3xl md:text-5xl font-semibold mb-12">
        Who&apos;s viewing?
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
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
