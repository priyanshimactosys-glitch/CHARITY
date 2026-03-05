import React, { useState } from "react";
import { X, Calendar, Info, ChevronDown } from "lucide-react";
import RolesPermissions from "./RolesPermissions";
import Notifications from "./Notifications.jsx";
import AccessSettings from "./AccessSettings";

const AddUser = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("Details");

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    userType1: "Volunteer",
    userType2: "Staff",
    userTypeSingle: "Volunteer",
    role: "",
    password: "",
    inviteBy: "Email",
    scheduledExpiration: false,
    expirationDate: "2026-02-01",
    expirationBehavior: "Auto-Deactivate",
    note: "",
  });

  // 7-digit Password Generator
  const handleGeneratePassword = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789@#$";
    let newPass = "";
    for (let i = 0; i < 7; i++) {
      newPass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setFormData({ ...formData, password: newPass });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("User added and invite sent!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden animate-in zoom-in duration-200">
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b bg-white text-left">
          <h3 className="text-xl font-bold text-gray-800">Add User</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X
              size={24}
              className="border border-gray-300 rounded-full p-0.5"
            />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b bg-gray-50/50">
          {[
            "Details",
            "Roles & Permissions",
            "Access Settings",
            "Notifications",
          ].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 text-sm font-bold transition-all relative ${
                activeTab === tab
                  ? "text-red-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"></div>
              )}
            </button>
          ))}
        </div>

        {/* Form Content */}
        <div
          className="flex-1 overflow-y-auto custom-scrollbar"
          style={{ maxHeight: "80vh" }}
        >
          {activeTab === "Details" ? (
            <form onSubmit={handleSubmit} className="p-8 space-y-5 text-left">
              <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                <div className="space-y-1">
                  <label className="block text-[13px] font-bold text-gray-700">
                    Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter Name"
                    className="w-full p-2.5 border border-gray-300 rounded-md outline-none focus:border-red-400 bg-white"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[13px] font-bold text-gray-700">
                    Email
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter Email"
                    className="w-full p-2.5 border border-gray-300 rounded-md outline-none focus:border-red-400 bg-white"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[13px] font-bold text-gray-700">
                    Phone{" "}
                    <span className="text-gray-400 font-normal text-xs">
                      (Optional)
                    </span>
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter Phone"
                    className="w-full p-2.5 border border-gray-300 rounded-md outline-none focus:border-red-400 bg-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[13px] font-bold text-gray-700">
                    User Type
                  </label>
                  <div className="flex gap-4">
                    <div className="relative flex-1">
                      <select
                        name="userType1"
                        value={formData.userType1}
                        onChange={handleChange}
                        className="w-full p-2.5 border border-gray-300 rounded-md appearance-none outline-none bg-white pr-10 text-gray-600"
                      >
                        <option value="Volunteer">Volunteer</option>
                        <option value="Manager">Manager</option>
                      </select>
                      <ChevronDown
                        className="absolute right-3 top-3 text-gray-400"
                        size={16}
                      />
                    </div>
                    <div className="relative flex-1">
                      <select
                        name="userType2"
                        value={formData.userType2}
                        onChange={handleChange}
                        className="w-full p-2.5 border border-gray-300 rounded-md appearance-none outline-none bg-white pr-10 text-gray-600"
                      >
                        <option value="Staff">Staff</option>
                        <option value="Contractor">Contractor</option>
                      </select>
                      <ChevronDown
                        className="absolute right-3 top-3 text-gray-400"
                        size={16}
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-[13px] font-bold text-gray-700">
                    User Type
                  </label>
                  <div className="relative">
                    <select
                      name="userTypeSingle"
                      value={formData.userTypeSingle}
                      onChange={handleChange}
                      className="w-full p-2.5 border border-gray-300 rounded-md appearance-none outline-none bg-white pr-10 text-gray-600"
                    >
                      <option value="Volunteer">Volunteer</option>
                      <option value="Admin">Admin</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-3 text-gray-400"
                      size={16}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-[13px] font-bold text-gray-700">
                    Role
                  </label>
                  <div className="relative">
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full p-2.5 border border-gray-300 rounded-md appearance-none outline-none bg-white pr-10 text-gray-400"
                    >
                      <option value="">Select role</option>
                      <option value="Super Admin">Super Admin</option>
                      <option value="Moderator">Moderator</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-3 text-gray-400"
                      size={16}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-[13px] font-bold text-gray-700">
                    Auto generate password
                  </label>
                  <div className="relative flex items-center border border-gray-300 rounded-md overflow-hidden bg-white">
                    <input
                      name="password"
                      type="text"
                      value={formData.password}
                      placeholder="@1234#$"
                      readOnly
                      className="flex-1 p-2.5 outline-none text-gray-500 bg-gray-50 font-mono"
                    />
                    <button
                      type="button"
                      onClick={handleGeneratePassword}
                      className="px-4 py-2 text-blue-600 font-bold text-[13px] border-l hover:bg-gray-100 transition-colors"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>

              {/* Send Invite */}
              <div className="flex items-center gap-6 py-1">
                <span className="text-[13px] font-bold text-gray-700">
                  Send invite by
                </span>
                <div className="flex items-center gap-4">
                  {["Email", "SMS"].map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() =>
                        setFormData({ ...formData, inviteBy: type })
                      }
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center p-0.5 transition-all ${formData.inviteBy === type ? "border-green-500" : "border-gray-300"}`}
                      >
                        {formData.inviteBy === type && (
                          <div className="w-full h-full bg-green-500 rounded-full"></div>
                        )}
                      </div>
                      <span className="text-sm text-gray-600">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Expiration */}
              <div className="space-y-4">
                <label className="flex items-center gap-2 cursor-pointer w-fit">
                  <input
                    name="scheduledExpiration"
                    checked={formData.scheduledExpiration}
                    onChange={handleChange}
                    type="checkbox"
                    className="w-4 h-4 accent-red-600"
                  />
                  <span className="text-[13px] font-bold text-gray-700">
                    Scheduled expiration{" "}
                    <span className="text-gray-400 font-normal">
                      (optional)
                    </span>
                  </span>
                </label>
                <div
                  className={`grid grid-cols-2 gap-x-10 transition-opacity ${formData.scheduledExpiration ? "opacity-100" : "opacity-40 pointer-events-none"}`}
                >
                  <div className="space-y-1">
                    <label className="block text-[13px] font-bold text-gray-700">
                      Expiration Date
                    </label>
                    <div className="relative">
                      <input
                        name="expirationDate"
                        value={formData.expirationDate}
                        onChange={handleChange}
                        type="date"
                        className="w-full p-2.5 border border-gray-300 rounded-md bg-white text-gray-600 outline-none"
                      />
                      <Calendar
                        className="absolute right-3 top-2.5 text-gray-400 pointer-events-none bg-white"
                        size={18}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[13px] font-bold text-gray-700">
                      Expiration Behavior
                    </label>
                    <div className="relative">
                      <select
                        name="expirationBehavior"
                        value={formData.expirationBehavior}
                        onChange={handleChange}
                        className="w-full p-2.5 border border-gray-300 rounded-md appearance-none outline-none bg-white pr-10 text-gray-600"
                      >
                        <option value="Auto-Deactivate">Auto-Deactivate</option>
                        <option value="Send Alert">Send Alert</option>
                      </select>
                      <ChevronDown
                        className="absolute right-3 top-3 text-gray-400"
                        size={16}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-[13px] font-bold text-gray-700">
                  Permissions/Access Note
                </label>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md outline-none h-20 shadow-sm focus:border-red-400 resize-none"
                ></textarea>
              </div>

              <div className="bg-[#FAF5FF] p-4 rounded-lg flex gap-3 border border-purple-100">
                <Info className="text-red-500 shrink-0 mt-0.5" size={18} />
                <p className="text-[13px] text-gray-600 leading-relaxed text-left">
                  All permissions and credentials will be set according to the
                  user type and role selected. You will be able to edit these in
                  the next to this tab.{" "}
                  <span className="font-bold text-black underline cursor-pointer">
                    Learn more.
                  </span>
                </p>
              </div>

              <div className="flex justify-center gap-6 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-48 py-2.5 bg-[#0055A5] text-white rounded-md font-bold text-sm shadow-md hover:bg-blue-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-48 py-2.5 bg-[#E30613] text-white rounded-md font-bold text-sm shadow-md hover:bg-red-700 transition-colors"
                >
                  Send Invite
                </button>
              </div>
            </form>
          ) : activeTab === "Roles & Permissions" ? (
            /* RolesPermissions content */
            <div className="p-0">
              <RolesPermissions onCancel={onClose} />
            </div>
          ) : activeTab === "Access Settings" ? (
            <AccessSettings
              onCancel={onClose}
              onSendInvite={() => {
                alert("Access Settings Saved & Invite Sent!");
                onClose();
              }}
            />
          ) : (
            <Notifications
              onCancel={onClose}
              onSendInvite={() => {
                alert("Invite sent successfully!");
                onClose();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddUser;

