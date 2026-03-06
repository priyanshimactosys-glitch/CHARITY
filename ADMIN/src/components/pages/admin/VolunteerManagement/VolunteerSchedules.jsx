import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const VolunteerSchedules = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSchedule, setSelectedSchedule] = useState(null); // Modal state
  const location = useLocation();

  // Initial Data (Mocking 25 entries for pagination testing)
  const [schedules] = useState(
    Array(25).fill(null).map((_, i) => ({
      id: i + 1,
      date: i % 2 === 0 ? "Apr 8, 2024" : "Mar 18, 2024",
      activity: i % 3 === 0 ? "Tutoring Session" : "Health Fair",
      duration: i % 2 === 0 ? "2 hrs" : "3.5 hrs",
      start: "4:00 PM",
      end: "6:00 PM",
      comments: "Detailed feedback regarding the session and student progress for " + (i + 1)
    }))
  );

  // --- Search Logic ---
  const query = new URLSearchParams(location.search).get("q") || "";
  const filteredData = useMemo(() => {
    return schedules.filter(item => 
      item.activity.toLowerCase().includes(query.toLowerCase()) ||
      item.date.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, schedules]);

  // --- Pagination Logic (10 Entries per page) ---
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="w-full animate-in fade-in duration-500 space-y-6">
      <div className="bg-pink-50/50 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8 border border-gray-50">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left bg-pink-50 rounded-t-xl">
                <th className="px-6 py-5 text-[15px] font-bold text-gray-800 rounded-l-xl">Date</th>
                <th className="px-6 py-5 text-[15px] font-bold text-gray-800">Volunteer Activity</th>
                <th className="px-6 py-5 text-[15px] font-bold text-gray-800">Duration</th>
                <th className="px-6 py-5 text-[15px] font-bold text-gray-800">Start Time</th>
                <th className="px-6 py-5 text-[15px] font-bold text-gray-800">End Time</th>
                <th className="px-6 py-5 text-[15px] font-bold text-gray-800">Comments</th>
                <th className="px-6 py-5 text-[15px] font-bold text-gray-800 text-center rounded-r-xl">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pink-50">
              {currentItems.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50/50 transition-all">
                  <td className="px-6 py-5 text-[14px] text-gray-400 italic font-medium whitespace-nowrap">{row.date}</td>
                  <td className="px-6 py-5 text-[14px] text-gray-400 italic font-medium">{row.activity}</td>
                  <td className="px-6 py-5 text-[14px] text-gray-400 italic font-medium">{row.duration}</td>
                  <td className="px-6 py-5 text-[14px] text-gray-400 italic font-medium">{row.start}</td>
                  <td className="px-6 py-5 text-[14px] text-gray-400 italic font-medium">{row.end}</td>
                  <td className="px-6 py-5 text-[13px] text-gray-400 italic font-medium truncate max-w-[200px]">
                    {row.comments}
                  </td>
                  <td className="px-6 py-5 text-center">
                    <button 
                      className="bg-[#E30613] text-white px-6 py-1.5 rounded-md text-[13px] font-bold hover:bg-red-700 transition-colors shadow-sm active:scale-95"
                      onClick={() => setSelectedSchedule(row)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- Pagination --- */}
        <div className="flex justify-center items-center gap-2 mt-10">
          <button 
            disabled={currentPage === 1} 
            onClick={() => setCurrentPage(p => p - 1)} 
            className="p-1.5 text-gray-300 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50"
          >
            <ChevronLeft size={18} />
          </button>
          {[...Array(totalPages || 1)].map((_, i) => (
            <button 
              key={i+1} 
              onClick={() => setCurrentPage(i+1)} 
              className={`w-8 h-8 flex items-center justify-center text-[13px] font-bold rounded-md transition-all ${currentPage === i+1 ? 'border border-[#E30613] text-[#E30613] bg-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
            >
              {i+1}
            </button>
          ))}
          <button 
            disabled={currentPage === totalPages} 
            onClick={() => setCurrentPage(p => p + 1)} 
            className="p-1.5 text-gray-400 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* --- View Detail Modal --- */}
      {selectedSchedule && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[20px] w-full max-w-md shadow-2xl animate-in zoom-in duration-300 overflow-hidden">
            <div className="bg-[#FDF2F8] p-5 flex justify-between items-center border-b border-pink-100">
              <h3 className="text-gray-800 font-bold text-lg">Schedule Details</h3>
              <button onClick={() => setSelectedSchedule(null)} className="text-gray-400 hover:text-red-500 transition-colors">
                <X size={24} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase">Activity</label>
                  <p className="text-gray-700 font-medium italic">{selectedSchedule.activity}</p>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase">Date</label>
                  <p className="text-gray-700 font-medium italic">{selectedSchedule.date}</p>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase">Duration</label>
                  <p className="text-gray-700 font-medium italic">{selectedSchedule.duration}</p>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase">Time</label>
                  <p className="text-gray-700 font-medium italic">{selectedSchedule.start} - {selectedSchedule.end}</p>
                </div>
              </div>
              <div className="pt-2">
                <label className="text-xs font-bold text-gray-400 uppercase">Comments</label>
                <p className="text-gray-600 text-sm italic leading-relaxed bg-gray-50 p-3 rounded-lg mt-1 border border-gray-100">
                  {selectedSchedule.comments}
                </p>
              </div>
              <button 
                onClick={() => setSelectedSchedule(null)}
                className="w-full mt-4 bg-gray-800 text-white py-2.5 rounded-xl font-bold hover:bg-black transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VolunteerSchedules;