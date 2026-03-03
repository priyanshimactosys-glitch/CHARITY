'use client';

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface Props {
  next: () => void;
  back: () => void;
}

export default function StepThree({ next, back }: Props) {

  const [selectedDate, setSelectedDate] =
    useState<number | null>(null);

  const [selectedTime, setSelectedTime] =
    useState<string | null>(null);

  const times = [
    "10:00 AM",
    "10:20 AM",
    "11:00 AM",
    "11:20 AM",
    "11:40 AM",
    "12:00 PM",
    "12:20 PM",
    "12:40 PM",
  ];

  return (
    <section className="bg-[gray-50] ">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="flex items-center gap-4">
          <div className="flex-1 h-[1px] bg-[#D9D9D9]"></div>

          <h2 className="whitespace-nowrap text-xl md:text-2xl font-semibold">
            Step 3: Choose Date & Time
          </h2>

          <div className="flex-1 h-[1px] bg-[#D9D9D9]"></div>
        </div>

        <p className="text-lg text-center text-text mt-2">
          Select a date and time for your appointment.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          {/* CALENDAR */}
          <div className="bg-white rounded-xl shadow p-6">

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
                  Your DS-11: First-time US. Passport
                </p>
              </div>
            </div>


            <div className="grid grid-cols-7 gap-3">
              {Array.from({ length: 31 }, (_, i) => i + 1).map(
                (day) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDate(day)}
                    className={`
                      w-10 h-10 rounded-full
                      ${selectedDate === day
                        ? "bg-red-600 text-white"
                        : "hover:bg-gray-100"}
                    `}
                  >
                    {day}
                  </button>
                )
              )}
            </div>

          </div>

          {/* TIME SLOT */}
          <div className="bg-white rounded-xl shadow p-6">

            <h3 className="font-semibold mb-4">
              Available Time Slots
            </h3>

            <div className="grid grid-cols-2 gap-4">

              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`
                    border rounded-md py-3 transition
                    ${selectedTime === time
                      ? "bg-red-600 text-white"
                      : "hover:border-gray-400"}
                  `}
                >
                  {time}
                </button>
              ))}

            </div>

          </div>

        </div>

        {/* ================= STEPPER NAV ================= */}
        <div className="
          overflow-x-auto
          mt-12
          scrollbar-hide
        ">
          <div className="
            flex
            min-w-max
            items-center
            gap-6
            text-gray-600
          ">

            <button
              onClick={back}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              Step 1: Choose a Service
              <ChevronRight size={16} />
            </button>

            <span className="flex items-center gap-2">
              Step 2: What to Bring
              <ChevronRight size={16} />
            </span>

            <span className="font-semibold text-black whitespace-nowrap">
              Step 3: Choose Date & Time
            </span>

            <span className="flex items-center gap-2 whitespace-nowrap">
              Step 4: Enter Information
            </span>

          </div>
        </div>

        {/* ================= ACTION BUTTONS ================= */}
        <div className="flex justify-between mt-10">

          <button
            onClick={back}
            className="px-6 py-3 border rounded-md"
          >
            Back
          </button>

          <button
            disabled={!selectedDate || !selectedTime}
            onClick={next}
            className={`
              px-10 py-3 rounded-md text-white
              ${selectedDate && selectedTime
                ? "bg-red-600 hover:bg-red-700"
                : "bg-gray-300 cursor-not-allowed"}
            `}
          >
            Continue
          </button>

        </div>

      </div>
    </section>
  );
}