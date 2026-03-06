import React, { useState } from "react";
import EditIconImg from "../../../../assets/icons/edit.png";
import DeleteIconImg from "../../../../assets/icons/delete.png";

import { 
  ChevronLeft,
  ChevronRight,
  Check,
  X,
} from "lucide-react";

const HoursApproval = () => {
  const [approvals, setApprovals] = useState(
    Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      date: "Apr 8, 2024",
      activity: i % 2 === 0 ? "Tutoring Session" : "Health Fair",
      duration: "2 hrs",
      start: "4:00 PM",
      end: "6:00 PM",
    })),
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  // 2. Pagination Logic: 10 entries per page
  const itemsPerPage = 10;
  const totalPages = Math.ceil(approvals.length / itemsPerPage);

  // Current page ka data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = approvals.slice(indexOfFirstItem, indexOfLastItem);

  // 3. Handlers
  const handleEditClick = (row) => {
    setEditingId(row.id);
    setEditFormData({ ...row });
  };

  const handleSaveClick = (id) => {
    setApprovals(
      approvals.map((item) => (item.id === id ? { ...editFormData } : item)),
    );
    setEditingId(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Kyan aap ise delete karna chahte hain?")) {
      const updatedData = approvals.filter((item) => item.id !== id);
      setApprovals(updatedData);

      const newTotalPages = Math.ceil(updatedData.length / itemsPerPage);
      if (currentPage > newTotalPages && newTotalPages > 0) {
        setCurrentPage(newTotalPages);
      }
    }
  };

  return (
    <div className="w-full space-y-6 ">
      <div className="bg-pink-100 rounded-[15px] shadow-sm border border-gray-100 p-8">
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-0">
            <thead>
              <tr className="bg-pink-50">
                <th className="px-6 py-5 text-left font-bold text-gray-800 rounded-l-xl">
                  Date
                </th>
                <th className="px-6 py-5 text-left font-bold text-gray-800">
                  Volunteer Activity
                </th>
                <th className="px-6 py-5 text-left font-bold text-gray-800">
                  Duration
                </th>
                <th className="px-6 py-5 text-left font-bold text-gray-800">
                  Start Time
                </th>
                <th className="px-6 py-5 text-left font-bold text-gray-800">
                  End Time
                </th>
                <th className="px-6 py-5 text-center font-bold text-gray-800 rounded-r-xl">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pink-50">
              {currentItems.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50/50 transition-all">
                  {editingId === row.id ? (
                    <>
                      <td className="px-6 py-4">
                        <input
                          className="border rounded p-1 w-full italic text-gray-400 outline-none focus:border-red-300"
                          value={editFormData.date}
                          onChange={(e) =>
                            setEditFormData({
                              ...editFormData,
                              date: e.target.value,
                            })
                          }
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          className="border rounded p-1 w-full italic text-gray-400 outline-none focus:border-red-300"
                          value={editFormData.activity}
                          onChange={(e) =>
                            setEditFormData({
                              ...editFormData,
                              activity: e.target.value,
                            })
                          }
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          className="border rounded p-1 w-full italic text-gray-400 outline-none focus:border-red-300"
                          value={editFormData.duration}
                          onChange={(e) =>
                            setEditFormData({
                              ...editFormData,
                              duration: e.target.value,
                            })
                          }
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          className="border rounded p-1 w-full italic text-gray-400 outline-none focus:border-red-300"
                          value={editFormData.start}
                          onChange={(e) =>
                            setEditFormData({
                              ...editFormData,
                              start: e.target.value,
                            })
                          }
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          className="border rounded p-1 w-full italic text-gray-400 outline-none focus:border-red-300"
                          value={editFormData.end}
                          onChange={(e) =>
                            setEditFormData({
                              ...editFormData,
                              end: e.target.value,
                            })
                          }
                        />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => handleSaveClick(row.id)}
                            className="text-green-500 hover:bg-green-50 p-1 rounded"
                          >
                            <Check size={20} />
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="text-gray-400 hover:bg-gray-50 p-1 rounded"
                          >
                            <X size={20} />
                          </button>
                        </div>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-6 py-5 text-gray-400 italic font-medium">
                        {row.date}
                      </td>
                      <td className="px-6 py-5 text-gray-400 italic font-medium">
                        {row.activity}
                      </td>
                      <td className="px-6 py-5 text-gray-400 italic font-medium">
                        {row.duration}
                      </td>
                      <td className="px-6 py-5 text-gray-400 italic font-medium">
                        {row.start}
                      </td>
                      <td className="px-6 py-5 text-gray-400 italic font-medium">
                        {row.end}
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex justify-center items-center gap-4">
                          <button
                            onClick={() => handleEditClick(row)}
                            className="cursor-pointer transition-transform hover:scale-110"
                          >
                            <img
                              src={EditIconImg}
                              alt="edit"
                              className="w-[18px] h-[18px] object-contain"
                              onError={(e) => (e.target.style.display = "none")} 
                            />
                          </button>

                          <button
                            onClick={() => handleDelete(row.id)}
                            className="cursor-pointer transition-transform hover:scale-110"
                          >
                            <img
                              src={DeleteIconImg}
                              alt="delete"
                              className="w-[18px] h-[18px] object-contain"
                              onError={(e) => (e.target.style.display = "none")}
                            />
                          </button>
                        </div>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- Pagination Footer --- */}
        <div className="flex justify-center items-center gap-3 mt-10">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-1.5 text-gray-300 hover:text-gray-600 disabled:opacity-30 transition-all"
          >
            <ChevronLeft size={20} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-9 h-9 flex items-center justify-center rounded-md font-bold text-[13px] transition-all border
                ${
                  currentPage === i + 1
                    ? "border-[#E30613] text-[#E30613] bg-white shadow-sm"
                    : "border-gray-100 text-gray-400 hover:bg-gray-50"
                }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-1.5 text-gray-300 hover:text-gray-600 disabled:opacity-30 transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HoursApproval;
