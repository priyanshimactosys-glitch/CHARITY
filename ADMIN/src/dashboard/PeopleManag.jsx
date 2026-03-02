import React, { useState } from "react";
import peopleData from "../data/people.json";
import { FaUser, FaChevronDown } from "react-icons/fa";

const tabs = ["Volunteers", "Staff", "Applications"];

const PeopleManag = () => {
  const [activeTab, setActiveTab] = useState("Volunteers");

  
  const filteredData = peopleData.filter((p) => p.role === activeTab);

  return (
    <div className="bg-white rounded-none shadow-md p-8 w-full mt-6">
      <div>

        
        <h1 className="text-xl font-bold relative inline-block">
          People Management
          <span className="absolute left-0 -bottom-1 w-6 h-1 bg-primary rounded"></span>
        </h1>

        
        <div className="flex mt-6 rounded-xl overflow-hidden">
          {tabs.map((tab, index) => (
            <React.Fragment key={tab}>
              <button
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3  text-lg font-bold cursor-pointer transition ${
                  activeTab === tab
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
              
              {index < tabs.length - 1 && <div className="w-px bg-gray-300"></div>}
            </React.Fragment>
          ))}
        </div>

        
        <div className="mt-4 space-y-2">
          {filteredData.map((user, idx) => (
            <div
              key={user.id}
              className={`flex items-center justify-between pb-4 ${
                idx < filteredData.length - 1 ? "border-b border-gray-300" : ""
              }`}
            >
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <FaUser className="text-gray-400 text-xl" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">{user.name}</h2>
                  <p className="text-gray-600">{user.description}</p>
                </div>
              </div>

              
              <div className="flex flex-col items-end gap-1">
                <span className="text-gray-600 text-sm">{user.timeAgo}</span>
                <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-red-700 transition w-28 justify-center">
                  {user.status} <FaChevronDown />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PeopleManag;