import React, { useState, useMemo } from "react";
import {
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  Calendar,
} from "lucide-react";

const Audit = () => {
  const [activePage, setActivePage] = useState(1);
  const [localSearch, setLocalSearch] = useState("");

  // DATE RANGE 
  const [dateRange, setDateRange] = useState({
    start: "2026-02-01",
    end: "2026-02-12",
  });
  const [isSelectingEnd, setIsSelectingEnd] = useState(false); // Toggle to track which date to update

  const [filters, setFilters] = useState({
    action: "All Action",
    module: "All Modules",
    user: "All Users",
  });

  const initialData = [
    { id: 1, time: "01/02/2026", hour: "10:41 AM", admin: "A. Johnson", role: "Admin", action: "Processed", module: "Passport Application", ip: "192.168.1.1", status: "Success" },
    { id: 2, time: "05/02/2026", hour: "11:20 AM", admin: "Sarah Lee", role: "Editor", action: "Create", module: "User Profile", ip: "192.168.1.45", status: "Success" },
    { id: 3, time: "10/02/2026", hour: "09:15 AM", admin: "Michael K.", role: "Admin", action: "Processed", module: "Visa Status", ip: "172.16.0.5", status: "Success" },
    { id: 4, time: "12/02/2026", hour: "04:50 PM", admin: "A. Johnson", role: "Admin", action: "Delete", module: "Passport Application", ip: "192.168.1.1", status: "Success" },
    { id: 5, time: "15/02/2026", hour: "12:05 PM", admin: "Admin User", role: "SuperAdmin", action: "Processed", module: "Settings", ip: "10.0.0.1", status: "Success" },
    { id: 6, time: "20/02/2026", hour: "08:30 AM", admin: "Sarah Lee", role: "Editor", action: "Create", module: "Document Upload", ip: "192.168.1.45", status: "Success" },
  ];

  // Handler for Date Toggle
  const handleDateSelection = (e) => {
    const selected = e.target.value;
    if (!isSelectingEnd) { 

      // Set Start Date and prepare for End Date
      setDateRange((prev) => ({ ...prev, start: selected }));
      setIsSelectingEnd(true);
    } else { 

      //Set End Date
      setDateRange((prev) => ({ ...prev, end: selected }));
      setIsSelectingEnd(false);
    }
  };

  const filteredData = useMemo(() => {
    return initialData.filter((item) => { 

      // filter logic
      const matchesSearch =
        item.admin.toLowerCase().includes(localSearch.toLowerCase()) ||
        item.module.toLowerCase().includes(localSearch.toLowerCase());

      const matchesAction =
        filters.action === "All Action" || item.action === filters.action;

      // Date logic
      const parts = item.time.split("/");
      const itemDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
      const start = new Date(dateRange.start);
      const end = new Date(dateRange.end);

      const matchesDate = itemDate >= start && itemDate <= end;

      return matchesSearch && matchesAction && matchesDate;
    });
    
  }, [localSearch, filters, dateRange, isSelectingEnd]);

  const handleExport = () => {
    const headers = ["Time,Admin,Role,Action,Module,IP,Status"];
    const rows = filteredData.map(
      (item) =>
        `${item.time},${item.admin},${item.role},${item.action},${item.module},${item.ip},${item.status}`,
    );
    const csvContent =
      "data:text/csv;charset=utf-8," + headers.concat(rows).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "audit_trail.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500"> 

      {/* TOP FILTER SECTION*/}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-400 text-sm italic font-medium">
            presents one system action
          </p>
          <button className="flex items-center gap-2 bg-[#E31E24] text-white px-8 py-2.5 rounded-lg font-bold text-sm shadow-md hover:bg-red-700 active:scale-95 transition-all">
            <Filter size={16} /> Filter
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <select
              className="w-full p-3 bg-white border border-gray-200 rounded-xl text-sm appearance-none focus:outline-none cursor-pointer"
              onChange={(e) =>
                setFilters({ ...filters, action: e.target.value })
              }
            >
              <option>All Action</option>
              <option>Processed</option>
              <option>Create</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              size={16}
            />
          </div>

          <div className="relative">
            <select className="w-full p-3 bg-white border border-gray-200 rounded-xl text-sm appearance-none focus:outline-none text-gray-500">
              <option>All Modules</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
          </div>

          <div className="relative">
            <select className="w-full p-3 bg-white border border-gray-200 rounded-xl text-sm appearance-none focus:outline-none text-gray-500">
              <option>All Users</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
          </div>

          {/* SINGLE BOX DATE RANGE */}
          <div
            className={`relative group border rounded-xl p-3 transition-all ${isSelectingEnd ? "border-red-500 bg-red-50/30" : "border-gray-200 bg-white"}`}
          >
            <div className="w-full text-[11px] flex items-center justify-between text-gray-600 font-bold cursor-pointer">
              <span className="flex items-center gap-2">
                <Calendar
                  size={14}
                  className={
                    isSelectingEnd
                      ? "text-red-500 animate-pulse"
                      : "text-gray-400"
                  }
                />
                {isSelectingEnd
                  ? `Select End Date...`
                  : `${dateRange.start} - ${dateRange.end}`}
              </span>
              <ChevronDown className="text-gray-400" size={14} />
            </div>
            <input
              type="date"
              className="absolute inset-0 opacity-0 cursor-pointer z-10 w-full"
              onChange={handleDateSelection} 

              // opens calendar again immediately for better flow
              onClick={(e) => e.target.showPicker && e.target.showPicker()}
            />
          </div>
        </div>
      </div>

      {/* --- TABLE SECTION --- */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-2/3 flex">
            <input
              type="text"
              placeholder="Search"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="w-full pl-4 pr-12 py-3 bg-white border border-gray-200 rounded-l-xl text-sm focus:outline-none"
            />
            <button className="flex items-center gap-2 px-6 bg-white border border-l-0 border-gray-200 rounded-r-xl text-sm text-gray-500 font-bold hover:bg-gray-50 transition-colors">
              <Search size={16} className="text-gray-400" /> Search
            </button>
          </div>
          <button
            onClick={handleExport}
            className="w-full sm:w-auto bg-[#F3E5F5] text-[#7B1FA2] px-12 py-3 rounded-xl font-bold text-sm hover:bg-[#EBD9EE] active:scale-95 transition-all"
          >
            Export
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead className="bg-[#FAF7FB]">
              <tr>
                {[
                  "Time & Date",
                  "Admin User",
                  "Role",
                  "Action",
                  "Module",
                  "IP",
                  "Status",
                ].map((h) => (
                  <th
                    key={h}
                    className="p-5 text-sm font-bold text-gray-800 text-left"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredData.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className="p-5">
                    <div className="text-[13px] font-bold text-gray-700">
                      {row.time}
                    </div>
                    <div className="text-[11px] text-gray-400 font-medium">
                      {row.hour}
                    </div>
                  </td>
                  <td className="p-5 text-[13px] text-gray-600 font-medium">
                    {row.admin}
                  </td>
                  <td className="p-5 text-[13px] text-gray-600">{row.role}</td>
                  <td className="p-5">
                    <span
                      className={`px-4 py-1.5 rounded-lg text-[10px] font-black text-white shadow-sm uppercase ${
                        row.action === "Processed"
                          ? "bg-[#E31E24]"
                          : "bg-[#C5A070]"
                      }`}
                    >
                      {row.action}
                    </span>
                  </td>
                  <td className="p-5 text-[13px] text-gray-500 font-medium">
                    {row.module}
                  </td>
                  <td className="p-5 text-[13px] text-gray-400 italic font-bold">
                    {row.ip}
                  </td>
                  <td className="p-5">
                    <span className="px-3 py-1 bg-[#1B5E20] text-white rounded text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="p-6 flex justify-center items-center gap-2 border-t border-gray-50">
          <button
            onClick={() => setActivePage(Math.max(1, activePage - 1))}
            className="p-2 border border-gray-100 rounded text-gray-300 hover:text-gray-500"
          >
            <ChevronLeft size={18} />
          </button>
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => setActivePage(num)}
              className={`w-9 h-9 rounded border font-bold text-sm transition-all ${
                activePage === num
                  ? "border-[#E31E24] text-[#E31E24] bg-white shadow-sm scale-110"
                  : "border-gray-100 text-gray-400 hover:bg-gray-50"
              }`}
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => setActivePage(activePage + 1)}
            className="p-2 border border-gray-100 rounded text-gray-400 hover:text-gray-600"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Audit;
