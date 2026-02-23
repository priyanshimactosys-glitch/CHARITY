'use client';

import Container from "@/src/components/common/Container";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function ServicesOverview() {
 const router = useRouter();

  const sections = [
    {
      title: "Identity & Government Services",
      color: "bg-red-600",
      icon: "/images/service1p.png",
      items: [
        {
          icon: "/images/service1-a.png",
          title: "Passport Application Acceptance",
          desc: "First-time U.S. passport processing (DS-11) in a secure private setting."
        },
        {
          icon: "/images/service1-b.png",
          title: "Fingerprinting Services",
          desc: "Live Scan and ink fingerprinting for employment licensing and checks."
        },
        {
          icon: "/images/service1-c.png",
          title: "Notary Services",
          desc: "Professional notarization for personal, legal and business documents."
        }
      ]
    },
    {
      title: "Document & Administrative Support",
      color: "bg-blue-600",
      icon: "/images/service2p.png",
      items: [
        {
          icon: "/images/service2-a.png",
          title: "Faxing & Secure Scanning",
          desc: "Send or scan documents safely with same-day confirmation."
        },
        {
          icon: "/images/service2-b.png",
          title: "Certified Mail Preparation",
          desc: "Help completing certified mail forms and preparing documents for USPS submission."
        },
        {
          icon: "/images/service2-c.png",
          title: "Form Assistance",
          desc: "Guidance completing government, school and business forms."
        }
      ]
    },
    {
      title: "Testing & Credentials",
      color: "bg-red-600",
      icon: "/images/service3p.png",
      items: [
        {
          icon: "/images/service3-a.png",
          title: "Pearson VUE Testing Center",
          desc: "Secure computer-based testing for professional exams."
        },
        {
          icon: "/images/service3-b.png",
          title: "Exam Readiness & Orientation",
          desc: "What to expect on exam day and preparation guidance."
        }
      ]
    },
    {
      title: "Space & Facility Rentals",
      color: "bg-blue-600",
      icon: "/images/service4p.png",
      items: [
        {
          icon: "/images/service4-a.png",
          title: "Conference Room Rental",
          desc: "Professional meeting space for small teams."
        },
        {
          icon: "/images/service4-b.png",
          title: "Activity & Multipurpose Room",
          desc: "Flexible space for workshops and community events."
        }
      ]
    }
  ];

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-14 gap-x-12">
          {sections.map((section, i) => (
            <div key={i} className="relative pl-10 sm:pl-0">
              <div className="flex items-center gap-4 mb-6">
                <div className={`${section.color} p-3 rounded-full`}>
                  <Image
                    src={section.icon}
                    alt="service"
                    width={30}
                    height={30}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  {section.title}
                </h3>
              </div>

              <div
                className="
                absolute
                left-[57px] sm:left-[30px]
                top-[64px]
                bottom-0
                w-[1px]
                bg-gray-300
              "
              />

              <div className="ml-10 sm:ml-16 space-y-6">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex gap-4">

                    <Image
                      src={item.icon}
                      alt="item"
                      width={25}
                      height={25}
                      className="w-5 h-5 sm:w-6 sm:h-6 mt-1 shrink-0"
                    />

                    <div>
                      <p className="font-semibold text-sm sm:text-base">
                        {item.title}
                      </p>

                      <p className="text-sm text-gray-600">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        <div className="
          max-w-2xl
          bg-green-100
          text-green-800
          flex items-start
          gap-3
          text-sm
          p-4
          rounded-md
          mt-14
        ">

          <CheckCircle
            className="text-green-600 shrink-0 mt-[2px]"
            size={18}
          />

          <span>
            Need to schedule a Pearson VUE exam?
            Please visit home.pearsonvue.com to book your test.
          </span>

        </div>

        <div className="
          flex
          flex-col
          sm:flex-row
          justify-center
          items-center
          gap-4
          sm:gap-6
          mt-10
        ">
          <button onClick={() => router.push("/book-appointment")} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md w-full sm:w-auto">
            Book an Appointment
          </button>

          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md w-full sm:w-auto">
            Contact Us
          </button>
        </div>

      </Container>
    </section>
  );
}