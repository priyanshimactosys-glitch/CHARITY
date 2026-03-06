import React, { useState, useMemo } from "react";
import { useLocation } from "react-router-dom"; 
import EditIconImg from "../../../../assets/icons/edit.png";
import DeleteIconImg from "../../../../assets/icons/delete.png";
import { ChevronLeft, ChevronRight, Check, X } from "lucide-react";

const Availability = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const location = useLocation();

  const [availabilities, setAvailabilities] = useState(
    Array(10)
      .fill(null)
      .map((_, i) => ({
        id: i + 1,
        volunteerName: "Donation",
        date: "02-02-2026",
        days: {
          sun: true,
          mon: true,
          tue: true,
          wed: true,
          thu: true,
          fri: true,
          sat: true,
        },
        repeat: "Weekly",
        lastUpdated: "2 weeks ago", // Initial static data
      })),
  );

  // --- Logic: Handle Last Updated ---
  const updateTimestamp = () => {
    return "Just now";
  };

  // --- Logic: Toggle Day (Hamesha Clickable + Updates Timestamp) ---
  const handleToggleDay = (id, dayKey) => {
    setAvailabilities((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const updatedDays = { ...item.days, [dayKey]: !item.days[dayKey] };
          const updatedItem = {
            ...item,
            days: updatedDays,
            lastUpdated: updateTimestamp(),
          };

          if (editingId === id) {
            setEditFormData((prevForm) => ({
              ...prevForm,
              days: updatedDays,
              lastUpdated: updateTimestamp(),
            }));
          }
          return updatedItem;
        }
        return item;
      }),
    );
  };

  // --- Search & Pagination Logic ---
  const query = new URLSearchParams(location.search).get("q") || "";
  const filteredData = useMemo(() => {
    return availabilities.filter((item) =>
      item.volunteerName.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, availabilities]);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // --- Handlers ---
  const handleEditClick = (row) => {
    setEditingId(row.id);
    setEditFormData({ ...row });
  };

  const handleSaveClick = (id) => {
    setAvailabilities(
      availabilities.map((item) =>
        item.id === id
          ? { ...editFormData, lastUpdated: updateTimestamp() }
          : item,
      ),
    );
    setEditingId(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setAvailabilities(availabilities.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-500">
      <div className="bg-pink-50/50 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8 border border-gray-50">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left bg-pink-50 rounded-t-xl">
                <th className="px-4 py-5 text-[15px] font-bold text-gray-800 rounded-l-xl">
                  Volunteer Name
                </th>
                <th className="px-4 py-5 text-[15px] font-bold text-gray-800">
                  Date
                </th>
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <th
                      key={day}
                      className="px-2 py-5 text-[15px] font-bold text-gray-800 text-center"
                    >
                      {day}
                    </th>
                  ),
                )}
                <th className="px-4 py-5 text-[15px] font-bold text-gray-800">
                  Repeat
                </th>
                <th className="px-4 py-5 text-[15px] font-bold text-gray-800">
                  Last Updated
                </th>
                <th className="px-4 py-5 text-[15px] font-bold text-gray-800 text-center rounded-r-xl">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pink-50">
              {currentItems.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50/50 transition-all">
                  {editingId === row.id ? (
                    <>
                      <td className="px-4 py-4">
                        <input
                          className="w-full p-1 border rounded text-sm italic outline-none focus:border-pink-300 font-medium"
                          value={editFormData.volunteerName}
                          onChange={(e) =>
                            setEditFormData({
                              ...editFormData,
                              volunteerName: e.target.value,
                            })
                          }
                        />
                      </td>
                      <td className="px-4 py-4">
                        <input
                          className="w-full p-1 border rounded text-sm italic outline-none focus:border-pink-300 font-medium"
                          value={editFormData.date}
                          onChange={(e) =>
                            setEditFormData({
                              ...editFormData,
                              date: e.target.value,
                            })
                          }
                        />
                      </td>
                      {Object.keys(editFormData.days).map((dayKey) => (
                        <td key={dayKey} className="px-2 py-4 text-center">
                          <button
                            onClick={() => handleToggleDay(row.id, dayKey)}
                            className={`w-[22px] h-[22px] rounded-full flex items-center justify-center transition-all active:scale-90 ${editFormData.days[dayKey] ? "bg-[#4ADE80]" : "border-2 border-gray-200"}`}
                          >
                            {editFormData.days[dayKey] && (
                              <Check
                                size={14}
                                className="text-white"
                                strokeWidth={4}
                              />
                            )}
                          </button>
                        </td>
                      ))}
                      <td className="px-4 py-4">
                        <input
                          className="w-full p-1 border rounded text-sm italic outline-none focus:border-pink-300 font-medium"
                          value={editFormData.repeat}
                          onChange={(e) =>
                            setEditFormData({
                              ...editFormData,
                              repeat: e.target.value,
                            })
                          }
                        />
                      </td>
                      <td className="px-4 py-4 text-[13px] text-gray-400 italic font-medium">
                        {row.lastUpdated}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => handleSaveClick(row.id)}
                            className="p-1.5 bg-green-50 text-green-600 border border-green-100 rounded-md hover:bg-green-100 transition-colors"
                          >
                            <Check size={14} />
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="p-1.5 bg-gray-50 text-gray-400 border border-gray-100 rounded-md hover:bg-gray-100 transition-colors"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-4 py-6 text-[14px] text-gray-400 italic font-medium">
                        {row.volunteerName}
                      </td>
                      <td className="px-4 py-6 text-[14px] text-gray-400 italic font-medium">
                        {row.date}
                      </td>
                      {Object.keys(row.days).map((dayKey) => (
                        <td key={dayKey} className="px-2 py-6 text-center">
                          <button
                            onClick={() => handleToggleDay(row.id, dayKey)}
                            className={`w-[22px] h-[22px] rounded-full mx-auto flex items-center justify-center transition-all active:scale-90 ${row.days[dayKey] ? "bg-[#4ADE80]" : "border-2 border-gray-200"}`}
                          >
                            {row.days[dayKey] && (
                              <Check
                                size={14}
                                className="text-white"
                                strokeWidth={4}
                              />
                            )}
                          </button>
                        </td>
                      ))}
                      <td className="px-4 py-6 text-[14px] text-gray-400 italic font-medium">
                        {row.repeat}
                      </td>
                      <td className="px-4 py-6 text-[14px] text-gray-400 italic font-medium">
                        {row.lastUpdated}
                      </td>
                      <td className="px-4 py-6">
                        <div className="flex justify-center items-center gap-2">
                          <button
                            onClick={() => handleEditClick(row)}
                            className="p-2 border border-orange-100 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors cursor-pointer"
                          >
                            <img
                              src={EditIconImg}
                              alt="edit"
                              className="w-[18px] h-[18px] object-contain block mx-auto"
                              onError={(e) =>
                                console.log("Image load nahi hui", e)
                              }
                            />
                          </button>

                          <button
                            onClick={() => handleDelete(row.id)}
                            className="p-2 border border-red-100 rounded-lg bg-red-50 hover:bg-red-100 transition-colors cursor-pointer"
                          >
                            <img
                              src={DeleteIconImg}
                              alt="delete"
                              className="w-[18px] h-[18px] object-contain block mx-auto"
                              onError={(e) =>
                                console.log("Image load nahi hui", e)
                              }
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

        {/* --- Pagination --- */}
        <div className="flex justify-center items-center gap-2 mt-10">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="p-1.5 text-gray-300 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50 transition-opacity"
          >
            <ChevronLeft size={18} />
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-8 h-8 flex items-center justify-center text-[13px] font-bold rounded-md transition-all ${currentPage === i + 1 ? "border border-[#E30613] text-[#E30613] bg-white" : "border border-gray-200 text-gray-600 hover:bg-gray-50"}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="p-1.5 text-gray-400 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50 transition-opacity"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Availability;
