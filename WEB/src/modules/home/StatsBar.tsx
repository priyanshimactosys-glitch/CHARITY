import Image from "next/image";

export default function StatsBar() {
  return (
    <div className="relative md:absolute md:left-1/2 md:-bottom-100 lg:-bottom-100 md:-translate-x-1/2 w-full max-w-5xl mx-auto  md:mt-0">
      <div className="bg-[#F7CCCC] md:bg-transparent p-10  md:p-0 ">
        <div className="bg-[#F3F3F3] md:bg-white shadow-xl rounded-2xl p-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-6 md:gap-2 relative">
            <Stat icon="/images/volunteer.png" value="585+" label="Volunteers" />

            <div className="flex justify-around">
              <StatDivider offset="top-1" />
              <Stat icon="/images/program.png" value="920+" label="Programs" />
            </div>

            <StatWithDivider>
              <Stat icon="/images/people.png" value="915.5" label="People Served"  constrainWidth={true} />
            </StatWithDivider>
            <div className="flex justify-around">
              <StatDivider offset="top-11" />
              <Stat icon="/images/time.png" value="6 Hours" label="Volunteer Hours" constrainWidth={true} />
            </div>


            <div className="col-span-2 md:col-span-1 flex justify-center md:justify-around">
              <StatDivider offset="top-1" hidden={true} />
              <Stat
                icon="/images/event.png"
                value="4 Events"
                label="Events Hosted"
              />
            </div>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">

            <CTA text="Services" color="bg-[#0160BC]" />
            <CTA text="Book Appointment" color="bg-primary" />

            <div className="col-span-2 md:col-span-1">
              <CTA text="Room Rental" color="bg-[#D9D3DA] text-black" />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
function StatWithDivider({ children }: any) {
  return (
    <div className="flex items-center gap-4">

      <div className="hidden md:flex items-center relative">
        <div className="w-px h-12 bg-gray-300"></div>
        <span className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-red-600 rounded-full"></span>
      </div>

      {children}
    </div>
  );
}
function StatDivider({ offset = "-top-3", hidden = false }: { offset?: string; hidden?: boolean }) {
  return (
    <div className={`items-center relative ${hidden ? 'hidden md:flex' : 'flex md:flex'}`}>
      <div className="w-px h-13 bg-gray-300"></div>
      <span
        className={`absolute left-2.1 -translate-x-1/2 w-2.5 h-2.5 bg-red-600 rounded-full ${offset}`}
      />
    </div>
  );
}


function Stat({ icon, value, label, constrainWidth }: any) {
  return (
    <div className="flex items-center gap-3">
      <Image src={icon} alt="" width={35} height={35} />

      <div
        className={constrainWidth ? "max-w-[65px] md:max-w-none" : ""}
      >
        <p className="font-semibold text-lg md:text-xl">
          {value}
        </p>

        <p className="text-xs md:text-base text-text">
          {label}
        </p>
      </div>
    </div>
  );
}


function CTA({ text, color }: any) {
  return (
    <button className={`${color} text-sm w-full  py-3 rounded-md font-semibold`}>
      {text}
    </button>
  );
}
