import React, { useState } from "react";
import tableData from "./Cardata.json";

import AddUserIconImg from "../../../../../assets/icons/adduser.png";
import EditIconImg from "../../../../../assets/icons/edit.png";
import DeleteIconImg from "../../../../../assets/icons/delete.png";
import { PencilLine, Trash2, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import edit from "../../../../../assets/edit.png";
import delet from "../../../../../assets/delet.png";

const Careers = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50  font-sans">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-8">
          <div className="relative">
            <h2 className="text-2xl font-bold text-gray-800">
              Career/Volunteers
            </h2>

            <div className="w-8 h-1 bg-primary mt-1 rounded-full"></div>
          </div>
          <button
            onClick={() => console.log("Add New Clicked")}
            className="flex items-center gap-2 bg-primary hover:bg-red-800 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 cursor-pointer"
          >
            <img src={AddUserIconImg} alt="add" className="w-5 h-5" />
            <span>Add New</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F7EEFA]">
                <th className="p-4 font-semibold text-gray-800">Company</th>
                <th className="p-4 font-semibold text-gray-800">Vacancy</th>
                <th className="p-4 font-semibold text-gray-800">Location</th>
                <th className="p-4 font-semibold text-gray-800">Salary</th>
                <th className="p-4 font-semibold text-gray-800">Shift</th>
                <th className="p-4 font-semibold text-gray-800 text-center">
                  Status
                </th>
                <th className="p-4 font-semibold text-gray-800 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300 bg-[#FFF5F6]">
              {tableData.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4 text-gray-600">{item.company}</td>
                  <td className="p-4 text-gray-600">{item.vacancy}</td>
                  <td className="p-4 text-gray-600">{item.location}</td>
                  <td className="p-4 text-gray-600">{item.salary}</td>
                  <td className="p-4 text-gray-600">{item.shift}</td>
                  <td className="p-4 text-center">
                    <button
                      className={`px-4 py-1 rounded text-white text-xs font-medium cursor-pointer
                       transition-all hover:opacity-80 active:scale-95 ${
                         item.status === "Complete"
                           ? "bg-[#018E42]"
                           : "bg-[#D90102]"
                       }`}
                    >
                      {item.status}
                    </button>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center gap-3">
                      <button className="text-[#FE7A36] hover:text-orange-600 cursor-pointer p-1 border border-gray-100 rounded shadow-sm">
                        <img src={edit} alt="edit" className="w-5 h-5" />
                      </button>
                      <button className="text-[#FF0000] hover:text-red-700 cursor-pointer p-1 border border-gray-100 rounded shadow-sm">
                        <img src={delet} alt="delet" className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center items-center mt-8 gap-2">
          <button className="p-2 border border-gray-200 rounded text-gray-400 hover:bg-gray-100 cursor-pointer">
            <ChevronLeft size={18} />
          </button>

          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 border rounded transition-colors cursor-pointer ${
                currentPage === page
                  ? "border-red-600 text-red-600 font-bold bg-red-50"
                  : "border-gray-200 text-gray-500 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}

          <button className="p-2 border border-gray-200 rounded text-gray-400 hover:bg-gray-100 cursor-pointer">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
