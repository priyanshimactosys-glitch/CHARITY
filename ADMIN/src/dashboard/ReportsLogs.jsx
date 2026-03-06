import { useState } from "react";
import { LiaCalendarCheck } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import data from "../data/Reports.json";

function ReportsLogs() {
  const segments = ["Appointments", "Staff", "Donations"];
  const [active, setActive] = useState("Appointments");

  const segmentData = data[active.toLowerCase()];

  return (
    <div className="bg-white w-full shadow-xl rounded-none p-6 mt-6">
      
      <div className="mb-6">
        <h2 className="text-xl font-bold relative inline-block">
          Reports & Logs
          <span className="absolute left-0 -bottom-1 w-8 h-1 bg-primary rounded"></span>
        </h2>
      </div>

      
      <div className="flex mb-6 rounded-md overflow-hidden">
        {segments.map((segment, index) => (
          <button
            key={segment}
            onClick={() => setActive(segment)}
            className={`flex-1 py-2 font-bold transition cursor-pointer
              ${active === segment
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-800"}
              ${index !== segments.length - 1 ? "border-r border-gray-300" : ""}
            `}
          >
            {segment}
          </button>
        ))}
      </div>

      
      <div className="pt-2">
        <div className="border rounded-sm p-4 bg-gray-50 shadow-sm">
          
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2 text-gray-800 font-bold">
              <LiaCalendarCheck size={22}/>
              <span>{segmentData.title}</span>
            </div>
            <IoIosArrowDown className="text-gray-800" />
          </div>

          
          <div className="flex justify-between items-center">
            <p className="text-md text-gray-700">{segmentData.subtitle}</p>
            <button className="flex items-center cursor-pointer bg-primary text-white px-3 py-1 rounded">
              {segmentData.buttonLabel}
              <IoIosArrowDown className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportsLogs;
