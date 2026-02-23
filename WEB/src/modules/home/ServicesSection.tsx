'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const services = [
  {
    icon: '/images/service1.png',
    title: (
      <>
        Identity & <br /> Government Services
      </>
    ),
    description: 'GED preparation and software assistance',
  },
  {
    icon: '/images/service2.png',
    title: 'Document & Administrative Support',
    description: 'GED preparation and software assistance',
  },
  {
    icon: '/images/service3.png',
    title: (
      <>
        Testing & <br /> Credentials
      </>
    ),
    description: 'GED preparation and software assistance',
  },
  {
    icon: '/images/service4.png',
    title: (
      <>
        Space & Facility <br /> Rentals
      </>
    ),
    description: 'GED preparation and software assistance',
  },
];

const ServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + services.length) % services.length
    );
  };

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < 4; i++) {
      slides.push(services[(currentSlide + i) % services.length]);
    }
    return slides;
  };

  return (
    <div className="bg-gradient-to-b from-[#f8cece] via-pink-200 to-pink-100 py-12">

      <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
        Our Services
      </h2>

      <div className="relative">

        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="w-full overflow-hidden">

          <div
            className="
              flex md:grid
              md:grid-cols-4
              gap-6
              overflow-x-auto
              md:overflow-visible
              px-4 md:px-16
              snap-x snap-mandatory
              scroll-smooth
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {getVisibleSlides().map((service, index) => (
              <div
                key={index}
                className="
                  min-w-[85%]
                  sm:min-w-[60%]
                  md:min-w-0
                  snap-center
                  bg-white rounded-xl
                  px-6 py-8
                  shadow-md hover:shadow-lg
                  transition-all
                  flex flex-col items-center text-center
                "
              >
                <Image
                  src={service.icon}
                  alt="service"
                  width={84}
                  height={84}
                  priority
                />

                <p className="text-xl font-bold text-black my-4 min-h-[70px] flex items-center justify-center">
                  {service.title}
                </p>

                <p className="text-text text-lg mb-6 flex-grow">
                  {service.description}
                </p>

                <a
                  href="#"
                  className="text-primary font-medium flex items-center gap-1"
                >
                  Learn More
                  <span className="text-lg">›</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 shadow-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;
