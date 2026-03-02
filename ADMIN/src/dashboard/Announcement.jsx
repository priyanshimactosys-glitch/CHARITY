import React, { useState } from "react";
import announcementData from "../data/Announcements.json";

import {
  FaPlus,
  FaRegQuestionCircle,
  FaCheck,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaBriefcase,
} from "react-icons/fa";

const Announcement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("post");

  const itemsPerPage = 1;
  const totalPages = Math.ceil(announcementData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = announcementData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="bg-white rounded-none shadow-lg p-4 w-full mt-6">
      <div>

        
        <h1 className="text-xl font-bold relative inline-block">
          Announcements
          <span className="absolute left-0 -bottom-1 w-6 h-1 bg-primary rounded"></span>
        </h1>

        
        <div className="mt-6">
          <div className="inline-flex rounded-xl overflow-hidden border border-gray-300 bg-gray-50">

            <button
              onClick={() => setActiveTab("post")}
              className={`flex items-center cursor-pointer gap-2 px-6 py-3 text-lg font-bold transition ${
                activeTab === "post"
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              <FaPlus size={16} />
              Post Announcement
            </button>

            <button
              onClick={() => setActiveTab("warning")}
              className={`flex items-center cursor-pointer gap-2 px-6 py-3 text-lg font-bold border-l border-gray-300 transition ${
                activeTab === "warning"
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              <FaRegQuestionCircle size={16} />
              Request Warning
            </button>

          </div>
        </div>

        
        <div className="mt-6">
          {currentData.map((item) => (
            <div
              key={item.id}
              className="border rounded-2xl p-6 relative hover:shadow-md transition"
            >
              
              <div className="flex items-center gap-3">
                <div className="bg-black text-white p-2 rounded-full">
                  <FaCheck size={12} />
                </div>

                <h2 className="text-lg font-semibold flex items-center gap-180">
                  {item.title}
                  <FaChevronDown className="text-gray-500  cursor-pointer" />
                </h2>
              </div>

              
              <div className="mt-4 text-gray-600 text-sm space-y-2">
                <div className="flex items-center gap-2">
                  <FaClock size={14} />
                  {item.date}
                </div>

                <div className="flex items-center gap-2">
                  <FaBriefcase size={14} />
                  {item.role}
                </div>
              </div>

              
              <div className="absolute bottom-6 right-6">
               <button className="bg-primary cursor-pointer text-white px-6 py-2 rounded-lg text-sm hover:bg-red-700 transition flex items-center gap-2">
                {item.status}
               <FaChevronDown size={12} />
               </button>
              </div>

            </div>
          ))}
        </div>

        
        <div className="flex justify-center  items-center gap-2 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="border cursor-pointer px-2 py-2 rounded-lg hover:bg-gray-100"
          >
            <FaChevronLeft />
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-2 py-2 rounded-lg border cursor-pointer ${
                currentPage === index + 1
                  ? "border-red-500 text-red-600"
                  : "hover:bg-gray-100"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, totalPages)
              )
            }
            className="border cursor-pointer px-2 py-2 rounded-lg hover:bg-gray-100"
          >
            <FaChevronRight />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Announcement;