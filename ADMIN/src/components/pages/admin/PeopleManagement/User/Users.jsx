import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  Edit2,
  Trash2,
  Eye,
  ShieldCheck,
  XCircle,
  MoreHorizontal,
  X,
  Check,
} from "lucide-react";
import AddUser from "./AddUser";

const Users = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openMenuId, setOpenMenuId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Edit States
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  // Initial Data
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Lisa Moore",
      email: "Lisa@143",
      type: "Admin",
      role: "Admin",
      status: "21 minutes ago",
      created: "1 year ago",
    },
    {
      id: 2,
      name: "Lisa Moore",
      email: "Lisa@143",
      type: "Staff",
      role: "Manager",
      status: "21 minutes ago",
      created: "1 year ago",
    },
    {
      id: 3,
      name: "Lisa Moore",
      email: "Lisa@143",
      type: "Staff",
      role: "Coordinator",
      status: "21 minutes ago",
      created: "1 year ago",
    },
    {
      id: 4,
      name: "Lisa Moore",
      email: "Lisa@143",
      type: "Admin",
      role: "Admin",
      status: "21 minutes ago",
      created: "1 year ago",
    },
    {
      id: 5,
      name: "Lisa Moore",
      email: "Lisa@143",
      type: "Volunteers",
      role: "Admin",
      status: "21 minutes ago",
      created: "1 year ago",
    },
    {
      id: 6,
      name: "Lisa Moore",
      email: "Lisa@143",
      type: "Volunteers",
      role: "Admin",
      status: "21 minutes ago",
      created: "1 year ago",
    },
    {
      id: 7,
      name: "Lisa Moore",
      email: "Lisa@143",
      type: "Pending",
      role: "Pending",
      status: "21 minutes ago",
      created: "1 year ago",
    },
    {
      id: 8,
      name: "Lisa Moore",
      email: "Lisa@143",
      type: "Admin",
      role: "Admin",
      status: "21 minutes ago",
      created: "1 year ago",
    },
  ]);

  // Date Filter State
  const [dateInput, setDateInput] = useState("");
  const [appliedDate, setAppliedDate] = useState("");
  // Handle Pencil Click
  const handleEditClick = (user) => {
    setEditingId(user.id);
    setEditFormData({ ...user });
  };

  // Save Edit
  const handleSaveEdit = (id) => {
    setUsers(users.map((u) => (u.id === id ? editFormData : u)));
    setEditingId(null);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClick = () => setOpenMenuId(null);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  // Search & Tab Filtering
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const labelMap = { Admins: "Admin", "Pending Invite": "Pending" };
      const currentTab = labelMap[activeTab] || activeTab;

      const matchesTab = activeTab === "All" || user.type === currentTab;
      const matchesSearch =
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery, users]);

  const handleDelete = (id, e) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  const getTypeStyle = (type) => {
    switch (type) {
      case "Admin":
        return "bg-[#00A651] text-white";
      case "Staff":
        return "bg-[#C2A188] text-white";
      case "Volunteers":
        return "bg-[#0055A5] text-white";
      case "Pending":
        return "bg-[#D30000] text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans">
      <div className="max-w-[1200px] mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="relative">
            <h2 className="text-xl font-bold text-black">Users dashboard</h2>
            <div className="absolute -bottom-1 left-0 w-10 h-0.5 bg-red-600"></div>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#E30613] text-white px-5 py-2 rounded-lg flex items-center gap-2 font-bold hover:bg-red-700 transition-colors"
          >
            <div className="bg-white text-[#E30613] rounded-full w-5 h-5 flex items-center justify-center text-lg">
              +
            </div>
            Add User
          </button>
        </div>

        {/* Filters Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {[
            { label: "All", count: "" },
            { label: "Volunteers", count: "112" },
            { label: "Staff", count: "20" },
            { label: "Admins", count: "8" },
            { label: "Pending Invite", count: "4" },
            { label: "Inactive", count: "2" },
          ].map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`px-10 py-2.5 rounded-lg border text-[13px] font-medium transition-all whitespace-nowrap
                ${
                  activeTab === tab.label
                    ? "border-red-600 bg-[#FFF5F5] text-red-600 shadow-sm"
                    : "border-gray-200 text-gray-500 hover:bg-gray-50"
                }`}
            >
              {tab.label} {tab.count && `(${tab.count})`}
            </button>
          ))}
        </div>

        {/* Search & Date Filter Row */}
        <div className="flex gap-4 mb-8">
          <div className="flex-[2] relative">
            <Search
              className="absolute left-4 top-3.5 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search Users"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-lg outline-none text-[14px] focus:border-gray-400"
            />
          </div>
          <div className="flex-1 flex border border-gray-300 rounded-lg overflow-hidden h-[50px]">
            <input
              type="text"
              placeholder="YYYY-MM-DD"
              value={dateInput}
              onChange={(e) => setDateInput(e.target.value)}
              className="w-full px-4 py-2 outline-none text-[14px] text-gray-700"
            />
            <button
              onClick={() => setAppliedDate(dateInput)}
              className="bg-[#F4F1F7] text-[#6B5A78] px-8 font-bold text-[14px] border-l border-gray-300 hover:bg-gray-200 transition-colors"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-[#F5F1F7] text-black text-[14px] font-bold">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">User Type</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Created</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => {
                  const isEditing = editingId === user.id;

                  return (
                    <tr
                      key={user.id}
                      className="text-[#333] text-[13px] hover:bg-gray-50 transition-colors"
                    >
                      {/*Name*/}
                      <td className="px-6 py-5">
                        {isEditing ? (
                          <input
                            type="text"
                            className="border border-red-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-red-500"
                            value={editFormData.name}
                            onChange={(e) =>
                              setEditFormData({
                                ...editFormData,
                                name: e.target.value,
                              })
                            }
                          />
                        ) : (
                          user.name
                        )}
                      </td>

                      {/* Email Column */}
                      <td className="px-6 py-5 text-gray-500 font-medium">
                        {isEditing ? (
                          <input
                            type="email"
                            className="border border-red-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-red-500"
                            value={editFormData.email}
                            onChange={(e) =>
                              setEditFormData({
                                ...editFormData,
                                email: e.target.value,
                              })
                            }
                          />
                        ) : (
                          user.email
                        )}
                      </td>

                      {/* User Type Column (Dropdown) */}
                      <td className="px-6 py-5">
                        {isEditing ? (
                          <select
                            className="border border-red-300 rounded px-1 py-1 w-full focus:outline-none focus:ring-1 focus:ring-red-500"
                            value={editFormData.type}
                            onChange={(e) =>
                              setEditFormData({
                                ...editFormData,
                                type: e.target.value,
                              })
                            }
                          >
                            <option value="Admin">Admin</option>
                            <option value="Staff">Staff</option>
                            <option value="Volunteers">Volunteers</option>
                            <option value="Pending">Pending</option>
                          </select>
                        ) : (
                          <span
                            className={`px-3.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${getTypeStyle(user.type)}`}
                          >
                            {user.type}
                          </span>
                        )}
                      </td>

                      {/* Role Column */}
                      <td className="px-6 py-5 font-medium">
                        {isEditing ? (
                          <input
                            type="text"
                            className="border border-red-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-red-500"
                            value={editFormData.role}
                            onChange={(e) =>
                              setEditFormData({
                                ...editFormData,
                                role: e.target.value,
                              })
                            }
                          />
                        ) : (
                          user.role
                        )}
                      </td>

                      {/* Status & Created */}
                      <td className="px-6 py-5 text-gray-400 italic font-medium">
                        {user.status}
                      </td>
                      <td className="px-6 py-5 text-gray-400 italic font-medium">
                        {user.created}
                      </td>

                      {/* Action Column */}
                      <td
                        className="px-6 py-5 relative"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center justify-center gap-2">
                          {isEditing ? (
                            <button
                              onClick={() => handleSaveEdit(user.id)}
                              className="text-white p-1.5 border border-green-600 rounded-lg bg-green-500 hover:bg-green-600 shadow-sm"
                            >
                              <Check size={16} />
                            </button>
                          ) : (
                            <button
                              onClick={() => handleEditClick(user)}
                              className="text-[#F97316] p-1.5 border border-orange-100 rounded-lg bg-orange-50 hover:bg-orange-100"
                            >
                              <Edit2 size={16} />
                            </button>
                          )}

                          <button
                            onClick={(e) => handleDelete(user.id, e)}
                            className="text-[#EF4444] p-1.5 border border-red-100 rounded-lg bg-red-50 hover:bg-red-100"
                          >
                            <Trash2 size={16} />
                          </button>

                          <button
                            onClick={() =>
                              setOpenMenuId(
                                openMenuId === user.id ? null : user.id,
                              )
                            }
                            className="text-gray-400 p-1.5 hover:text-gray-600"
                          >
                            <MoreHorizontal size={20} />
                          </button>
                        </div>

                        {/* Action Dropdown */}

                        {openMenuId === user.id && (
                          <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-xl z-50 py-2">
                            <button className="w-full px-4 py-2 text-left text-[13px] text-gray-600 hover:bg-gray-50 flex items-center gap-3">
                              <Eye size={16} className="text-gray-400" /> View
                              Profile
                            </button>

                            <button className="w-full px-4 py-2 text-left text-[13px] text-gray-600 hover:bg-gray-50 flex items-center gap-3 border-t border-gray-100">
                              <ShieldCheck
                                size={16}
                                className="text-gray-400"
                              />
                              Permissions/Roles
                            </button>

                            <button className="w-full px-4 py-2 text-left text-[13px] text-red-500 hover:bg-red-50 flex items-center gap-3 border-t border-gray-100">
                              <XCircle size={16} className="text-red-300" />
                              Deactivate
                            </button>

                            <button className="w-full px-4 py-2 text-left text-[13px] text-gray-600 hover:bg-gray-50 flex items-center gap-3 border-t border-gray-100">
                              <MoreHorizontal
                                size={16}
                                className="text-gray-400"
                              />
                              More
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="px-6 py-10 text-center text-gray-400 italic"
                  >
                    No users found match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-10">
          <button className="p-2 border border-gray-200 rounded-md text-gray-300 hover:text-gray-600 transition-colors">
            &lt;
          </button>
          <button className="w-9 h-9 rounded-md border border-red-600 text-red-600 font-bold bg-[#FFF5F5]">
            1
          </button>
          <button className="w-9 h-9 rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 font-medium">
            2
          </button>
          <button className="w-9 h-9 rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 font-medium">
            3
          </button>
          <button className="p-2 border border-gray-200 rounded-md text-gray-300 hover:text-gray-600 transition-colors">
            &gt;
          </button>
        </div>
      </div>

      {/* --- ADD USER MODAL --- */}
      <AddUser isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Users;
