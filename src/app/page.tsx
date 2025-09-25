"use client";
import { useRouter } from "next/navigation";
import IntroSplash from "./components/IntroSplash";

export default function Home() {
  const router = useRouter();

  return (
    <IntroSplash
      durationMs={2400}       // how long it shows (in ms)
      logoSrc={null}          // no logo for now
      soundSrc={null}         // no sound for now
      onFinish={() => router.push("/profile-page")}
      skipEnabled
    />
  );
}
