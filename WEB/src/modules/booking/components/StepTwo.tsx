'use client';

import Image from "next/image";
import { CheckCircle, CheckIcon, ChevronRight } from "lucide-react";
import Button from "@/src/components/common/Button";

interface Props {
  next: () => void;
  back: () => void;
}

export default function StepTwo({ next, back }: Props) {

  const requirements = [
    {
      title: "DS-11 Form",
      desc: "(unsigned) - Fill out the form in advance."
    },
    {
      title: "Proof of Citizenship",
      desc: "Original or certified birth certificate, naturalization certificate, or Consular Report"
    },
    {
      title: "Valid Photo ID",
      desc: "State-issued driver's license, passport, or government-issued ID"
    },
    {
      title: "Passport Photo (optional)",
      desc: "Photos can also be taken in-office for an additional $15 fee."
    },
    {
      title: "Payment Type",
      desc: "Money order or personal check for government fees plus execution fee."
    }
  ];
  return (
    <section className="bg-gray-50 ">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className=" mb-10">

          <div className="flex items-center gap-4">
            <div className="flex-1 h-[1px] bg-[#D9D9D9]"></div>

            <h2 className="whitespace-nowrap text-2xl font-semibold">
              Step 2: What to Bring
            </h2>

            <div className="flex-1 h-[1px] bg-[#D9D9D9]"></div>
          </div>

          <p className=" text-center text-text text-sm md:text-lg mt-4">
            Review the required items before booking your appointment.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">

          <div className="grid md:grid-cols-2 gap-8">

            <div>

              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/images/step-2.svg"
                  alt="passport"
                  width={54}
                  height={54}
                />

                <div>
                  <p className="font-semibold text-lg">
                    Passport Application Acceptance
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    First-time U.S. passport processing (DS-11)
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {requirements.map((item, i) => (
                  <div key={i} className="flex gap-3">

                    <Image
                      src="/images/checkicon.svg"
                      alt="passport"
                      width={18}
                      height={18}

                    />

                    <p className="text-gray-700 text-sm md:text-base">
                      <span className="font-bold text-sm md:text-lg">
                        {item.title}
                      </span>{" "}
                      {item.desc}
                    </p>

                  </div>
                ))}
              </div>

            </div>

            <div className="space-y-4">

              <Image
                src="/images/step2-2.svg"
                alt="passport"
                width={371}
                height={231}
                className="rounded-lg w-full object-cover"
              // className="mt-1 w-[14px] h-[12px] md:w-[18px] md:h-[15px]"

              />

              <p className="text-base text-gray-600">
                Visit our{" "}
                <span className="text-blue-600 font-medium">
                  Passport Services
                </span>{" "}
                page to review fees, guidelines, and processing times.
              </p>

              <ul className="text-base text-gray-600 space-y-2 list-disc pl-5">
                <li>Estimated appointment time: 15-30 minutes</li>
                <li>Documents not in English require translation</li>
              </ul>

            </div>

          </div>
        </div>

        <div className="mt-10 overflow-x-auto">

          <div className="
    flex
    items-center
    gap-6
    min-w-max
    whitespace-nowrap
    text-base
    text-gray-600
    px-2
  ">

            <button
              onClick={back}
              className="flex items-center gap-2 shrink-0"
            >
              Step 1: Choose a Service
              <ChevronRight size={16} />
            </button>

            <span className="font-semibold text-black shrink-0">
              Step 2: What to Bring
            </span>

            <span className="flex items-center gap-2 shrink-0">
              Step 3: Choose Date & Time
              <ChevronRight size={16} />
            </span>

            <span className="shrink-0">
              Step 4: Enter Information
            </span>

          </div>

        </div>

        <div className="flex justify-center mt-8">
          <Button onClick={next}>
            Select Date & Time
          </Button>
        </div>

      </div>
    </section>
  );
}