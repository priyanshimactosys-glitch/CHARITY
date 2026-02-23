import Container from "@/src/components/common/Container";
import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="bg-white py-10 md:py-16">
      <Container>
        <div className="relative">

          <div
            className="
              mission-shape
              bg-[#F7CCCC]
              rounded-2xl
              p-6 sm:p-8 md:p-10
              relative
              z-10
              w-full
              md:w-[65%]
            "
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5">
              Our Mission & Vision
            </p>

            <p className="text-lg md:text-2xl font-semibold mb-4">
              At VPeters Initiative,
            </p>

            <p className="text-base md:text-lg leading-relaxed max-w-xl">
              our mission is to support ad uptiow community by providing<br/>
              essential services that promote education, well-being,
              and self-sufficiency. We are dedicated to helping
              individuals and families <br/>achieve a better quality of life
              through accessible and <br/>compassionate support.
            </p>
          </div>

          <div
            className="
              bg-[#F6F6F6]
              rounded-2xl
              shadow-lg
              p-6 sm:p-8 md:p-10
              w-full
              md:w-[60%]
              mt-8
              md:mt-0
              md:absolute
              md:right-0
              md:top-1/2
              md:-translate-y-1/2
              md:pl-48
              lg:pl-60
            "
          >
            <div className="flex justify-between items-start mb-4">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Our Vision
              </p>

              <Image
                src="/images/vision.png"
                alt="Vision"
                width={54}
                height={54}
                className="w-10 h-10 md:w-[54px] md:h-[54px]"
              />
            </div>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Our vision is a community where every individual has the
              opportunity to thrive. We aspire to be a trusted partner
              in empowering people to build brighter and more hopeful
              futures for themselves and their families.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}