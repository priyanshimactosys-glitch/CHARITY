import React, { useState } from 'react';
import { Search, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import announceData from './announcedata.json';
import edit from "../../../../../assets/edit.png";
import delet from "../../../../../assets/delet.png";

const Announce = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Search filter logic
  const filteredData = announceData.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="p-2 bg-gray-100 min-h-screen font-sans">
      
      {/* Top Search & Add Bar */}
      <div className="flex flex-col md:flex-row gap-2 mb-6 items-center justify-between bg-white p-4 rounded-lg shadow-sm">
        <div className="flex w-full md:w-2/3 border rounded-md overflow-hidden border-gray-300">
          <div className="flex items-center pl-3 bg-white">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-[#F5E6F0] px-6 py-2 text-gray-700 font-medium hover:bg-[#ebd5e3] transition-colors cursor-pointer border-l border-gray-300">
            Apply
          </button>
        </div>
        
        <button className="bg-[#D30000] text-white px-10 py-2 rounded-md flex items-center gap-2 hover:bg-red-700 transition-colors cursor-pointer font-semibold shadow-md whitespace-nowrap">
          <Plus size={20} /> Add New
        </button>
      </div>

      {/* Data Table */}
      <div className="bg-white p-6 rounded-xl shadow-sm"> 
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F7EEFA]">
              <th className="p-4 font-bold text-gray-900">Event</th>
              <th className="p-4 font-bold text-gray-900">Event Title</th>
              <th className="p-4 font-bold text-gray-900">Date</th>
              <th className="p-4 font-bold text-gray-900 text-right pr-8">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-300 bg-[#FFF5F6] hover:bg-gray-50 transition-colors">
                <td className="p-4 text-gray-600">{item.type}</td>
                <td className="p-4 text-gray-600">{item.title}</td>
                <td className="p-4 text-gray-600">{item.date}</td>
                <td className="p-4 flex justify-end gap-3 pr-8">
                  <button className="text-orange-400 hover:text-orange-600 cursor-pointer p-1 border border-orange-200 rounded bg-orange-50">
                    <img src={edit} alt="edit" className="w-5 h-5" />
                  </button>
                  <button className="text-red-500 hover:text-red-700 cursor-pointer p-1 border border-red-200 rounded bg-red-50">
                    <img src={delet} alt="delet" className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-2 p-6">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            className="p-2 border rounded hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
            disabled={currentPage === 1}
          >
            <ChevronLeft size={16} />
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-8 h-8 flex items-center justify-center border rounded cursor-pointer transition-all ${
                currentPage === i + 1 ? 'border-red-500 text-red-500 bg-red-50 font-bold' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            className="p-2 border rounded hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
            disabled={currentPage === totalPages}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Announce;