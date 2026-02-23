'use client';

import Container from "@/src/components/common/Container";
import Image from "next/image";

export default function HelpSection() {

  const cards = [
    {
      image: "/images/help-1.png",
      title: "Donate",
      subtitle: "Make a Donation",
      button: "Watch Video",
      width: 127,
      height: 86
    },
    {
      image: "/images/help-1.png",
      title: "Donate",
      subtitle: "Make a Donation",
      button: "Become Partner",
      width: 127,
      height: 86
    },
    {
      image: "/images/help-2.png",
      title: "Partnerships",
      subtitle: "Become a Partner",
      button: "Support an Event",
      width: 141,
      height: 90
    },
  ];

  return (
    <section className="py-12 md:py-10">
      <Container>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          <div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10">
              How You Can Help
            </h2>

            <div className="flex items-start gap-4 mb-8">
              <Image
                src="/images/volunteer.png"
                alt="volunteer"
                width={60}
                height={60}
                className="shrink-0"
              />

              <p className="text-text text-sm sm:text-base leading-relaxed">
                <span className="font-semibold">
                  Volunteers+
                </span>{" "}
                Theme alla getters, scoopsen for educed
                srokancy premity entamerkat approa proartatu
                and volations.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Image
                src="/images/donate2.png"
                alt="donate"
                width={60}
                height={60}
                className="shrink-0"
              />

              <p className="text-text text-sm sm:text-base leading-relaxed">
                <span className="font-semibold">
                  Donate
                </span>{" "}
                Ovarlities ports with motions, and community,
                ceveturvenets, one the treundations of our
                nase.
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {cards.map((card, index) => (
              <div
                key={index}
                className="h-full rounded-2xl overflow-hidden
                shadow-sm hover:shadow-xl transition duration-300
                flex flex-col"
              >

                <div className="bg-white flex justify-center items-center p-4 sm:p-6">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={card.width}
                    height={card.height}
                    className="object-contain"
                  />
                </div>

                <div className="bg-[#efe7f3] text-center p-4 flex flex-col flex-1 justify-between">

                  <div>
                    <p className="text-lg sm:text-xl font-semibold">
                      {card.title}
                    </p>

                    <p className="text-text text-sm sm:text-base mb-4">
                      {card.subtitle}
                    </p>
                  </div>

                  <button className="text-sm bg-red-600 hover:bg-red-700
                    text-white px-4 py-2 rounded-lg">
                    {card.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}