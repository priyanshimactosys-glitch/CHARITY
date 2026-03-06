import React, { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { 
  ChevronLeft,
  ChevronRight,
  Check,
  X,
} from "lucide-react";

import EditIconImg from "../../../../assets/icons/edit.png";
import DeleteIconImg from "../../../../assets/icons/delete.png";

const Donations = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [editingId, setEditingId] = useState(null); // Track kaunsi row edit ho rahi hai
  const [editFormData, setEditFormData] = useState({}); // Temporary edit data
  const location = useLocation();

  const [donations, setDonations] = useState(
    Array(18)
      .fill(null)
      .map((_, i) => ({
        id: i + 1,
        total: `${10 + i} Donations`,
        online: `${20 + i} Donations`,
        goods: `${2 + (i % 3)} Goods Donation`,
        pickup: `${4 + (i % 2)} Pickup pending`,
        recurring: "10 Active Donations",
      })),
  );

  // --- Search Logic ---
  const query = new URLSearchParams(location.search).get("q") || "";
  const filteredData = useMemo(() => {
    return donations.filter((item) =>
      Object.values(item).some((val) =>
        val.toString().toLowerCase().includes(query.toLowerCase()),
      ),
    );
  }, [query, donations]);

  // --- Pagination Logic ---
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  // --- Handlers ---
  const handleDelete = (id) => {
    if (
      window.confirm("Are you sure you want to delete this donation record?")
    ) {
      setDonations(donations.filter((item) => item.id !== id));
    }
  };

  const handleEditClick = (row) => {
    setEditingId(row.id);
    setEditFormData(row); // Row ka current data form mein load karein
  };

  const handleCancelClick = () => {
    setEditingId(null);
  };

  const handleInputChange = (e, field) => {
    setEditFormData({ ...editFormData, [field]: e.target.value });
  };

  const handleSaveClick = (id) => {
    const updatedDonations = donations.map((item) =>
      item.id === id ? editFormData : item,
    );
    setDonations(updatedDonations);
    setEditingId(null);
  };

  return (
    <div className="w-full animate-in fade-in duration-500">
      <div className="bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8 border border-gray-50">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left bg-pink-50 rounded-t-xl">
                <th className="px-6 py-5 text-[15px] font-bold text-gray-800 rounded-l-xl">
                  Total Donations
                </th>
                <th className="px-6 py-5 text-[15px] font-bold text-gray-800">
                  Online Donations
                </th>
                <th className="px-6 py-5 text-[15px] font-bold text-gray-800">
                  Goods Donations
                </th>
                <th className="px-6 py-5 text-[15px] font-bold text-gray-800">
                  Pending Pickup Requests
                </th>
                <th className="px-6 py-5 text-[15px] font-bold text-gray-800">
                  Recurring Active Donations
                </th>
                <th className="px-6 py-5 text-[15px] font-bold text-gray-800 text-center rounded-r-xl">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pink-100 bg-pink-100">
              {currentItems.length > 0 ? (
                currentItems.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-gray-50/50 transition-all group"
                  >
                    {editingId === row.id ? (
                      // --- Editable Row ---
                      <>
                        <td className="px-4 py-4">
                          <input
                            className="w-full p-2 border rounded text-sm italic"
                            value={editFormData.total}
                            onChange={(e) => handleInputChange(e, "total")}
                          />
                        </td>
                        <td className="px-4 py-4">
                          <input
                            className="w-full p-2 border rounded text-sm italic"
                            value={editFormData.online}
                            onChange={(e) => handleInputChange(e, "online")}
                          />
                        </td>
                        <td className="px-4 py-4">
                          <input
                            className="w-full p-2 border rounded text-sm italic"
                            value={editFormData.goods}
                            onChange={(e) => handleInputChange(e, "goods")}
                          />
                        </td>
                        <td className="px-4 py-4">
                          <input
                            className="w-full p-2 border rounded text-sm italic"
                            value={editFormData.pickup}
                            onChange={(e) => handleInputChange(e, "pickup")}
                          />
                        </td>
                        <td className="px-4 py-4">
                          <input
                            className="w-full p-2 border rounded text-sm italic"
                            value={editFormData.recurring}
                            onChange={(e) => handleInputChange(e, "recurring")}
                          />
                        </td>
                        <td className="px-6 py-6 flex justify-center gap-2">
                          <button
                            onClick={() => handleSaveClick(row.id)}
                            className="text-green-600 p-2 bg-green-50 rounded-lg border border-green-100"
                          >
                            <Check size={16} />
                          </button>
                          <button
                            onClick={handleCancelClick}
                            className="text-gray-500 p-2 bg-gray-50 rounded-lg border border-gray-100"
                          >
                            <X size={16} />
                          </button>
                        </td>
                      </>
                    ) : (
                      // --- Standard Row ---
                      <>
                        <td className="px-6 py-6 text-[14px] text-gray-400 italic font-medium">
                          {row.total}
                        </td>
                        <td className="px-6 py-6 text-[14px] text-gray-400 italic font-medium">
                          {row.online}
                        </td>
                        <td className="px-6 py-6 text-[14px] text-gray-400 italic font-medium">
                          {row.goods}
                        </td>
                        <td className="px-6 py-6 text-[14px] text-gray-400 italic font-medium">
                          {row.pickup}
                        </td>
                        <td className="px-6 py-6 text-[14px] text-gray-400 italic font-medium">
                          {row.recurring}
                        </td>
                        <td className="px-6 py-6">
                          <div className="flex justify-center items-center gap-3">
                            <button
                              onClick={() => handleEditClick(row)}
                              className="hover:scale-110 transition-transform cursor-pointer"
                            >
                              <img
                                src={EditIconImg}
                                alt="edit"
                                className="w-[18px] h-[18px] object-contain"
                              />
                            </button>

                            <button
                              onClick={() => handleDelete(row.id)}
                              className="hover:scale-110 transition-transform cursor-pointer"
                            >
                              <img
                                src={DeleteIconImg}
                                alt="delete"
                                className="w-[18px] h-[18px] object-contain"
                              />
                            </button>
                          </div>
                        </td>
                      </>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-10 text-gray-400">
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* --- Pagination --- */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="p-1.5 text-gray-300 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50"
            >
              <ChevronLeft size={18} />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 flex items-center justify-center text-[13px] font-bold rounded-md ${currentPage === i + 1 ? "border border-[#E30613] text-[#E30613]" : "border border-gray-200 text-gray-600"}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="p-1.5 text-gray-400 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donations;
