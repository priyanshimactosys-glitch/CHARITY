import React, { useState, useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom"; // useNavigate add kiya
import {
  Search,
  Plus,
  ChevronLeft,
  ChevronRight,
  Eye,
  Calendar,
  CheckCircle,
  XCircle,
  Edit,
} from "lucide-react";
import EditIcon from "../../../../assets/icons/edit.png";
import DeleteIcon from "../../../../assets/icons/delete.png";
 
export const ManageAppointments = () => {
  const [activeTab, setActiveTab] = useState("Upcoming (7)");
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
 
  const navigate = useNavigate();
 
  // Search Logic from URL
  const [searchParams] = useSearchParams();
  const globalSearchQuery = searchParams.get("q") || ""; // AdminLayout wala search term
 
  // States for Functionality
  const [showManageDropdown, setShowManageDropdown] = useState(false);
  const dropdownRef = useRef(null);
 
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowManageDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
 
  // API Logic
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
 
        // API Simulation
        setTimeout(() => {
          setAppointments([
            {
              id: 1,
              name: "Lisa Moore",
              date: "April 25, 2024. 4:00 PM",
              service: "Tutoring Session",
              status: "Scheduled",
            },
            {
              id: 2,
              name: "Lisa Moore",
              date: "April 25, 2024. 4:00 PM",
              service: "Tutoring Session",
              status: "Walk-ins",
            },
            {
              id: 3,
              name: "Lisa Moore",
              date: "April 25, 2024. 4:00 PM",
              service: "Tutoring Session",
              status: "Scheduled",
            },
          ]);
          setLoading(false);
        }, 500);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, [activeTab]);
 
  //  Search Filter Logic
  const filteredAppointments = appointments.filter(
    (item) =>
      item.name.toLowerCase().includes(globalSearchQuery.toLowerCase()) ||
      item.service.toLowerCase().includes(globalSearchQuery.toLowerCase()),
  );
 
  //  Handlers
  const handleEdit = (id) => alert(`Editing Appointment ID: ${id}`);
 
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      setAppointments(appointments.filter((item) => item.id !== id));
    }
  };
 
  // Click par naye page par bhejne ke liye
  const handleNewAppointment = () => {
    navigate("/admin/operations/appointments/new");
  };
 
  const handleWalkIn = () => {
    navigate("/admin/operations/appointments/walk-in");
  };
 
  return (
    <div className="bg-white min-h-screen">
      {/* TOP CARD */}
      <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <p className="text-gray-500 font-medium">
            Manage and track scheduled appointments and walk-in visits below.
          </p>
 
          <div className="flex gap-3 mt-4 md:mt-0">
            <button
              onClick={handleNewAppointment}
              className="bg-[#0061AF] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-bold text-sm shadow-sm active:scale-95 transition-all"
            >
              <Plus size={18} strokeWidth={3} /> New Appointments
            </button>
 
            <button
              onClick={handleWalkIn}
              className="bg-red-800 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-bold text-sm shadow-sm active:scale-95 transition-all"
            >
              <Plus size={18} strokeWidth={3} /> Walk-in Visit
            </button>
          </div>
        </div>
 
        <div className="flex flex-wrap gap-4">
          <select className="border border-gray-200 rounded-xl px-4 py-3 bg-white text-gray-400 text-sm min-w-[140px] outline-none">
            <option>View All</option>
          </select>
          <select className="border border-gray-200 rounded-xl px-4 py-3 bg-white text-gray-400 text-sm min-w-[160px] outline-none">
            <option>All Services</option>
          </select>
          <select className="border border-gray-200 rounded-xl px-4 py-3 bg-white text-gray-400 text-sm min-w-[140px] outline-none">
            <option>All Statuses</option>
          </select>
          <input
            type="text"
            placeholder="Date All Dates"
            className="border border-gray-200 rounded-xl px-4 py-3 bg-white text-gray-400 text-sm flex-1 outline-none"
          />
          <button className="bg-[#E9D9EB] text-[#5B2D62] font-bold px-10 py-3 rounded-xl text-sm hover:bg-[#dfc8e2]">
            Apply
          </button>
        </div>
      </div>
 
      {/* MAIN TABLE CARD */}
      <div style={{ width: '1061px', minHeight: '392px', opacity: 1 }}
       className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex border-b border-gray-100">
          {["Upcoming (7)", "Past", "Cancelled"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-5 text-sm font-bold transition-all relative ${
                activeTab === tab ? "text-[#D32F2F]" : "text-gray-500"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#D32F2F]" />
              )}
            </button>
          ))}
        </div>
 
        {/* Search Row & Manage Services */}
        <div className="p-6 flex gap-3 items-center">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-300"
            />
          </div>
 
          <button className="border border-gray-200 px-8 py-3 rounded-lg text-sm font-bold flex items-center gap-2 text-gray-500 bg-white hover:bg-gray-50 transition-all">
            <Search size={18} className="text-gray-400" /> Search
          </button>
 
          {/* MANAGE SERVICES POPUP */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowManageDropdown(!showManageDropdown)}
              className="bg-[#E9D9EB] text-[#5B2D62] px-6 py-3 rounded-lg text-sm font-bold active:scale-95 transition-all"
            >
              Manage Services
            </button>
 
            {showManageDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 shadow-xl rounded-xl z-50 overflow-hidden py-1 animate-in fade-in zoom-in duration-200">
                <button
                  onClick={() => setShowManageDropdown(false)}
                  className="w-full text-left px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-3 border-b border-gray-50"
                >
                  <Eye size={16} className="text-gray-400" /> View Details
                </button>
                <button
                  onClick={() => setShowManageDropdown(false)}
                  className="w-full text-left px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-3 border-b border-gray-50"
                >
                  <Calendar size={16} className="text-gray-400" /> Reschedule
                </button>
                <button
                  onClick={() => setShowManageDropdown(false)}
                  className="w-full text-left px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-3 border-b border-gray-50"
                >
                  <CheckCircle size={16} className="text-gray-400" /> Mark as
                  Completed
                </button>
                <button
                  onClick={() => setShowManageDropdown(false)}
                  className="w-full text-left px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-3"
                >
                  <XCircle size={16} className="text-gray-400" /> Cancel
                  Appointment
                </button>
              </div>
            )}
          </div>
        </div>
 
        {/* Table Area */}
        <div className="overflow-x-auto min-h-[250px] relative">
          {loading ? (
            <div className="p-10 text-center text-gray-400 font-bold">
              Loading Data...
            </div>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#FFF0F3] text-[#1A202C] text-[13px] font-bold uppercase tracking-tight">
                  <th className="px-10 py-5">Name</th>
                  <th className="px-10 py-5">Date</th>
                  <th className="px-10 py-5">Service</th>
                  <th className="px-10 py-5">Status</th>
                  <th className="px-10 py-5 text-center">Action</th>
                </tr>
              </thead>
 
              <tbody className="divide-y divide-gray-50 bg-[#FFF9FA]">
                {filteredAppointments.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-10 py-6 text-[14px] text-gray-700 font-medium">
                      {item.name}
                    </td>
                    <td className="px-10 py-6 text-[14px] text-gray-600 font-medium">
                      {item.date}
                    </td>
                    <td className="px-10 py-6 text-[14px] text-gray-400 font-medium">
                      {item.service}
                    </td>
                    <td className="px-10 py-6">
                      <span
                        className={`px-4 py-1.5 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider ${
                          item.status === "Scheduled"
                            ? "bg-[#128C45]"
                            : "bg-[#B48C64]"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-10 py-6">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => handleEdit(item.id)}
                          className="hover:scale-110 transition-all active:scale-90"
                        >
                          <img
                            src={EditIcon}
                            alt="edit"
                            className="w-5 h-5 object-contain"
                          />
                        </button>
 
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="hover:scale-110 transition-all active:scale-90"
                        >
                          <img
                            src={DeleteIcon}
                            alt="delete"
                            className="w-5 h-5 object-contain"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredAppointments.length === 0 && (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-10 py-10 text-center text-gray-400 italic"
                    >
                      No results found for "{globalSearchQuery}"
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
 
        {/* Pagination */}
        <div className="py-6 flex justify-center items-center gap-2 border-t border-gray-100 bg-white">
          <button className="p-2 text-gray-300 hover:text-gray-500">
            <ChevronLeft size={20} />
          </button>
          <button className="w-8 h-8 rounded border border-[#D32F2F] text-[#D32F2F] font-bold text-xs bg-white">
            1
          </button>
          <button className="w-8 h-8 rounded border border-gray-200 text-gray-400 font-bold text-xs hover:border-gray-400">
            2
          </button>
          <button className="w-8 h-8 rounded border border-gray-200 text-gray-400 font-bold text-xs hover:border-gray-400">
            3
          </button>
          <button className="p-2 text-gray-300 hover:text-gray-500">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
 

