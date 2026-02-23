import Container from "@/src/components/common/Container";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function ImpactStats() {
  return (
    <section className="bg-[#FDFDFD] py-16 md:py-14">
      <Container>

        <div className="relative mb-24">

          <div className="
    hidden md:block
    absolute
    top-1/2
    left-1/2
    -translate-x-1/2
    -translate-y-1/2
    w-screen
    h-44 lg:h-52
    bg-[#FFFFFF]
    shadow-[0_10px_60px_rgba(0,0,0,0.08)]
    z-0
  " />

          <Container>
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">

              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-10">
                  Our Impact by the Numbers
                </h2>

                <div className="flex flex-wrap gap-6 items-center">
                  <Stat number="1,200+" label={`Reading &\nTutoring Sessions`} />
                  <Divider />
                  <Stat number="800+" label={`Exams Proctored\nOn-site`} />
                  <Divider />
                  <Stat number="5,000+" label={`Families\nAssisted`} />
                </div>
              </div>

              <Image
                src="/images/impact1.png"
                alt="Impact"
                width={526}
                height={344}
                className="rounded-2xl w-full object-cover"
              />

            </div>
          </Container>
        </div>

        <div className="relative">

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">

            <Image
              src="/images/impact2.png"
              alt="Impact"
              width={526}
              height={277}
              className="rounded-2xl w-full h-auto object-cover order-1 md:order-none"
            />

            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-8">
                Our Impact by the Numbers
              </h2>

              <ul className="space-y-5">
                <ListItem text="Those seeking assistance with educational resources" />
                <ListItem text="Those requiring support with daily living needs" />
                <ListItem text="Job seekers and those seeking workforce readiness" />
                <ListItem text="Recent immigrants in need of community services and guidance." />
              </ul>
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}

function Stat({ number, label }: any) {
  return (
    <div>
      <p className="text-xl md:text-2xl font-bold">{number}</p>
      <p className="text-text whitespace-pre-line text-sm md:text-base">
        {label}
      </p>
    </div>
  );
}

function Divider() {
  return (
    <div className="hidden md:flex flex-col items-center">
      <span className="w-2 h-2 bg-red-500 rounded-full mb-2"></span>
      <span className="w-px h-12 bg-gray-300"></span>
    </div>
  );
}

function ListItem({ text }: any) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle className="text-green-600 mt-1" size={16} />
      <span className="text-gray-800 text-sm md:text-base">
        {text}
      </span>
    </li>
  );
}