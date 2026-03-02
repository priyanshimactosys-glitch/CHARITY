import React, { useState } from "react";
import { LuChevronRight } from "react-icons/lu";
import managementData from "../data/management.json";

const Management = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="bg-white rounded-none shadow-md p-3 w-full mt-8">
      <div className="mb-4">
        <h2 className="text-[24px] font-serif font-bold text-black">
          {managementData?.title}
        </h2>
        <div className="w-8 h-[4px] bg-primary mt-0 rounded-full"></div>
      </div>

      <div className="rounded-xl overflow-hidden border border-gray-200 mb-4">
        <div className="flex bg-[#F8F8F8]">
          {managementData?.tabs?.map((tab, index) => (
            <React.Fragment key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 cursor-pointer  text-xl font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-white"
                    : "text-gray-900 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>

              {index !== managementData.tabs.length - 1 && (
                <div className="w-[1px] bg-gray-300"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="border border-gray-200 rounded-2xl p-3 shadow-sm">
        <div className="flex justify-between items-start gap-6">
          <div className="flex flex-col w-full md:w-auto">
            {managementData?.stats?.map((stat, index) => (
              <React.Fragment key={stat.id}>
                <div className="flex items-center gap-3 py-3 cursor-pointer group">
                  <span className="text-xl font-bold text-black">
                    {stat.count}
                  </span>

                  <span className="text-gray-600 text-base">{stat.label}</span>

                  <LuChevronRight className="text-gray-400 text-lg group-hover:translate-x-1 transition-transform duration-200" />
                </div>

                {index !== managementData.stats.length - 1 && (
                  <div className="h-[1px] bg-gray-200 w-full"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex items-center justify-center w-auto">
            <button className="mt-4 bg-primary cursor-pointer hover:bg-red-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-semibold shadow-md transition duration-300">
              <span className="bg-white/20 px-2 py-0.5 rounded text-sm font-bold">
                {managementData?.cta?.count}
              </span>
              <span>{managementData?.cta?.label}</span>
              <LuChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
