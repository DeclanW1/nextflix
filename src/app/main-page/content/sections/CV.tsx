import Image from "next/image";

export default function CV() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Image
        src="/icons/cv.png"
        alt="CV Icon"
        width={200}
        height={200}
      />
      <p className="text-white/80">
        View/download my CV.
      </p>
    </div>
  );
}
