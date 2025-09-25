"use client";
import { useRouter } from "next/navigation";
import IntroSplash from "./components/IntroSplash";

export default function Home() {
  const router = useRouter();

  return (
    <IntroSplash
      durationMs={2400}
      logoSrc={null}
      soundSrc={null}
      onFinish={() => router.push("/profile-page")}
      skipEnabled
    />
  );
}
