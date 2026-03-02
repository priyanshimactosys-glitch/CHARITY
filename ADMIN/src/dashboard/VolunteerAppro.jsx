import { useState } from "react";
import data from "../data/VolunteerAppro.json";

const VolunteerAppro = () => {
  const [activeTab, setActiveTab] = useState("Pending");

  return (
    <div className="bg-white w-full shadow-xl rounded-none p-6 mt-8">
      
      
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 relative inline-block">
          Volunteer Hours Approval
          <span className="absolute left-0 -bottom-1 w-8 h-1 bg-primary rounded"></span>
        </h2>
      </div>

      
      <div className="flex mb-6 rounded-md overflow-hidden">
        {["Pending", "Approved", "Rejected"].map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 font-bold transition cursor-pointer
              ${activeTab === tab
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-800"}
              ${index !== 2 ? "border-r border-gray-300" : ""}
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      
      <div className="bg-[#F7EEFA] p-3 rounded-t-md flex justify-between items-center text-sm font-semibold text-gray-700">
        <div className="flex items-center font-bold text-gray-800 gap-1 w-1/3">
          <input type="checkbox" />
          <span>Users</span>
        </div>

        <div className="w-1/3 text-gray-800 font-bold text-center">
          Hours
        </div>

        <div className="w-1/3 text-gray-800 font-bold text-right">
          Status
        </div>
      </div>

      
      <div>
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border-b border-gray-200"
          >
            
            <div className="flex items-center gap-3 w-1/3">
              <input type="checkbox" />
              <p className="font-bold text-gray-800">
                {item.name}
              </p>
            </div>

            
            <div className="w-1/3 text-center text-gray-800 font-medium">
              {item.hours} hours
            </div>

            
            <div className="w-1/3 text-right">
              <button className="bg-primary text-white px-4 py-1 rounded-md
               text-sm cursor-pointer hover:bg-red-700 transition">
                Approve
              </button>
            </div>
          </div>
        ))}
      

      
      <div className="flex justify-center items-center gap-2 mt-4">
        <button className="px-3 py-1 border rounded cursor-pointer">
          {"<"}
        </button>

        {[1, 2, 3].map((num) => (
          <button
            key={num}
            className={`px-3 py-1 border rounded cursor-pointer ${
              num === 1
                ? "bg-red-400 text-white"
                : "bg-gray-100"
            }`}
          >
            {num}
          </button>
        ))}

        <button className="px-3 py-1 border rounded cursor-pointer">
          {">"}
        </button>
      </div>
      </div>
    </div>
  );
};

export default VolunteerAppro;