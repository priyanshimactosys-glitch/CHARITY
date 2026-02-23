import Container from '@/src/components/common/Container';
import Image from 'next/image';
import React from 'react';

const professionalServices = [
  {
    image: '/images/about.png',
    title: 'Pearson VUE Testing',
    description: 'Secure certification and licensure exams',
  },
  {
    image: '/images/about.png',
    title: 'Room Rental',
    description: 'Meeting and training space for individuals and',
  },
  {
    image: '/images/about.png',
    title: 'Passport Application Center',
    description: 'In-person passport application acceptance',
  },
  {
    image: '/images/about.png',
    title: 'Notary Services',
    description: 'Certified document notarization',
  },
];

const ProfessionalServices = () => {
  return (
    <div className="bg-gradient-to-b from-pink-50 via-pink-50 to-pink-0 py-10">

      <p className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
        Professional Services
      </p>

      <Container>

        <div className="w-full overflow-hidden">
          <div
            className="
              flex lg:grid
              lg:grid-cols-4
              md:grid-cols-2
              gap-6
              overflow-x-auto
              lg:overflow-visible
              px-4 lg:px-0
              snap-x snap-mandatory
              scroll-smooth
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden pb-5
            "
          >
            {professionalServices.map((service, index) => (
              <div
                key={index}
                className="
                  min-w-[60%]
                  sm:min-w-[60%]
                  md:min-w-[45%]
                  lg:min-w-0
                  snap-center
                  bg-white rounded-xl overflow-hidden
                  shadow-md hover:shadow-lg
                  transition-shadow
                  flex flex-col
                "
              >
                {/* Image */}
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={280}
                    height={150}
                    className="w-full h-auto"
                  />
                </div>

                <div className="flex flex-col flex-grow py-4 px-8">
                  <p className="text-lg md:text-xl font-bold text-black text-center mb-3 md:min-h-[50px]">
                    {service.title}
                  </p>

                  <p className="text-text text-sm md:text-lg text-center flex-grow">
                    {service.description}
                  </p>

                  <a
                    href="#"
                    className="text-primary font-semibold flex justify-center items-center gap-1"
                  >
                    Learn More
                    <span className="text-lg">›</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </div>
  );
};

export default ProfessionalServices;
