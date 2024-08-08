import Image from "next/image";

export default function Home() {
  return (
    <main className="w-dvw h-dvh flex flex-col justify-center items-center bg-[#79A17A] gap-2">
      <Image
        src="/designmedicine.svg"
        alt="DesignMedicine Logo"
        width={283}
        height={64}
        className="w-72 h-16 "
      />
      <h1 className="text-white font-thin">UNDER CONSTRUCTION</h1>
    </main>
  );
}
