import Image from "next/image";
import DonationCard from "./DonationCard";
import StatsBar from "./StatsBar";
import Container from "@/src/components/common/Container";

export default function HeroSection() {
  return (
    <>
    <section className="relative w-full h-[790px]">

      <Image
        src="/images/hero-bg.png"
        alt="Clean water"
        fill
        className="object-cover hidden md:block"
        priority
      />

      <Image
        src="/images/mobile-bg.png"
        alt="Clean water"
        fill
        className="object-cover md:hidden"
        priority
      />

      <div className="absolute inset-0 bg-black/30" />
      <Container className="pt-10">
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">

          <div className="max-w-md text-white text-center md:text-left">

            <h1 className="text-2xl sm:text-2xl md:text-4xl text-center font-bold leading-tight mb-6">
              Bring clean and safe water to every person on the planet
            </h1>
            <button className="md:hidden bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold">
              Book Appointment
            </button>
            <div className="hidden md:block">
              <DonationCard />
            </div>
          </div>

        </div>

      </Container>
    </section>
        <StatsBar />

    </>
  );
}
