'use client';

import Image from "next/image";
import { useState } from "react";
import { CheckCircle, ChevronRight } from "lucide-react";

interface Props {
  next: () => void;
}

export default function StepOne({ next }: Props) {

  const [selected, setSelected] = useState<number | null>(null);

  const services = [
    {
      icon: "/images/step1-1.png",
      title: "Passport Application Acceptance",
      desc: "First-time U.S. passport processing (DS-11) in a secure,"
    },
    {
      icon: "/images/step1-2.png",
      title: "Finger printing Services",
      desc: "Live Scan and ink fingerprinting for employment,"
    },
    {
      icon: "/images/step1-3.png",
      title: "Notary Services",
      desc: "Document notarization"
    },
    {
      icon: "/images/step1-4.png",
      title: "Faxing & Secure Scanning",
      desc: "Document support services"
    },
    {
      icon: "/images/step1-5.svg",
      title: "Form Assistance",
      desc: "Help completing applications"
    },
    {
      icon: "/images/step1-6.svg",
      title: "Exam Readiness Session",
      desc: "Orientation & prep"
    },
    {
      icon: "/images/step1-7.svg",
      title: "Exam Readiness Session",
      desc: "Orientation & prep"
    },
    {
      icon: "/images/step1-8.svg",
      title: "Conference Room Rental (Request)",
      desc: "Meeting & event space"
    },
    {
      icon: "/images/step1-8.svg",
      title: "Conference Room Rental (Request)",
      desc: "Community activities"
    }
  ];

  return (

    <div className="bg-[gray-50] ">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="mb-10">

          <div className="flex items-center gap-4">
            <div className="flex-1 h-[1px] bg-[#D9D9D9]"></div>

            <h2 className="whitespace-nowrap text-xl md:text-2xl font-semibold">
              Step 1: Choose a Service
            </h2>

            <div className="flex-1 h-[1px] bg-[#D9D9D9]"></div>
          </div>

          <div className="flex justify-start mt-4">
            <div className="flex items-center gap-2 text-sm text-gray-700 text-center">
              <Image
                src="/images/checkicon.png"
                alt="Book Appointment"
                width={18}
                height={18}
              />

              <p className="text-sm md:text-lg">
                Appointments are <b>required for most services.</b>
                Walk-in availability is limited.
              </p>
            </div>
          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">

          {services.map((service, index) => (

            <div
              key={index}
              onClick={() => setSelected(index)}
              className={`
    relative
    cursor-pointer rounded-xl p-4 bg-white
    shadow-sm transition-all duration-300
    hover:shadow-lg border
    ${selected === index
                  ? "border-red-600 ring-2 ring-red-200"
                  : "border-gray-200"}
  `}
            >

              <div className="flex gap-4 pr-6">

                <div>
                  <div className="flex items-start gap-2">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={32}
                      height={32}
                      className="shrink-0 mt-1"
                    />

                    <p className="text-base md:text-lg font-bold leading-snug">
                      {service.title}
                    </p>
                  </div>

                  <p className="ms-9 text-sm md:text-base text-gray-600 mt-1">
                    {service.desc}
                  </p>
                </div>

              </div>

              <ChevronRight
                size={20}
                className="absolute bottom-4 right-4 text-gray-400"
              />

            </div>

          ))}
        </div>

        <div className="
          mt-10 bg-green-100 text-green-800
          flex items-start md:items-center
          gap-2 text-sm p-3 rounded-md
        ">
          <CheckCircle
            size={16}
            className="text-green-600 shrink-0 mt-[2px]"
          />

          <span>
            Need to schedule a Pearson VUE exam?
            Please visit home.pearsonvue.com to book your test.
          </span>
        </div>

        <div className="flex justify-center mt-10">
          <button
            disabled={selected === null}
            onClick={next}
            className={`
              px-12 py-3 rounded-md text-white font-medium
              transition-all duration-300
              ${selected !== null
                ? "bg-red-600 hover:bg-red-700"
                : "bg-gray-300 cursor-not-allowed"}
            `}
          >
            Continue
          </button>
        </div>

      </div>
    </div>
  );
}