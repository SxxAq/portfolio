import Image from "next/image";
import HeroSection from "./components/HeroSection";
export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#121212] ">
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </main>
  );
}
