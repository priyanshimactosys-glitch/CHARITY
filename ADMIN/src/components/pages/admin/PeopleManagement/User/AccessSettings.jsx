import React, { useState } from "react";
import { Info } from "lucide-react";
import CalendarIconImg from "../../../../../assets/icons/calendar.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AccessSettings = ({ onCancel, onSendInvite }) => {
  const [accessData, setAccessData] = useState({
    status: "Active",
    mfaRequired: true,
    scheduledExpiration: true,
    startDate: "2026-02-01",
    endDate: "2026-02-15",
    expirationBehavior: "Auto-Deactivate",
    allowedIPs: "",
    mfaReset: true,
    forceSignOut: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAccessData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleStatusChange = (status) => {
    setAccessData((prev) => ({ ...prev, status }));
  };

  const handleFinalSubmit = () => {
    console.log("Final Submitted Data:", accessData);
    if (onSendInvite) onSendInvite(accessData);
  };

  const handleDateChange = (name, date) => {
    setAccessData((prev) => ({
      ...prev,
      [name]: date.toISOString().split("T")[0], // format to YYYY-MM-DD
    }));
  };

  return (
    <div className="p-8 space-y-7 text-left max-h-[75vh] overflow-y-auto custom-scrollbar bg-white">
      {/* Name/Status Section */}
      <section className="space-y-3">
        <h4 className="text-[14px] font-bold text-gray-800">Name</h4>
        <div className="flex flex-wrap gap-6 p-3 border border-gray-300 rounded-lg bg-[#F9FAFB]">
          {["Active", "Invited", "Suspended", "Deactivated"].map(
            (statusOption) => (
              <button
                key={statusOption}
                type="button"
                onClick={() => handleStatusChange(statusOption)}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    accessData.status === statusOption
                      ? "border-green-500 bg-white"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {accessData.status === statusOption && (
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                  )}
                </div>
                <span
                  className={`text-[13px] font-medium ${
                    accessData.status === statusOption
                      ? "text-gray-900"
                      : "text-gray-500"
                  }`}
                >
                  {statusOption}
                </span>
              </button>
            ),
          )}
        </div>
      </section>

      {/* MFA Section */}
      <section className="space-y-2">
        <div className="flex items-center gap-2">
          <h4 className="text-[14px] font-bold text-gray-800">
            Multi-Factor Authentication
          </h4>
          <span className="text-[11px] text-gray-400 font-medium">
            (Required)
          </span>
          <Info size={14} className="text-gray-400 cursor-help" />
        </div>
        <p className="text-[13px] text-gray-500 leading-relaxed pr-10">
          Require this user to enable multi-factor authentication (MFA) for
          secure access.{" "}
          <span className="text-black font-bold underline cursor-pointer">
            Learn more.
          </span>
        </p>
      </section>

      {/* Expiration Section */}
      <section className="space-y-4">
        <h4 className="text-[14px] font-bold text-gray-800">
          Set Expiration of Access
        </h4>
        <label className="flex items-center gap-2 cursor-pointer w-fit group">
          <input
            type="checkbox"
            name="scheduledExpiration"
            checked={accessData.scheduledExpiration}
            onChange={handleChange}
            className="w-4 h-4 accent-green-600 rounded cursor-pointer"
          />
          <span className="text-[13px] text-gray-600 font-medium group-hover:text-gray-900">
            Set scheduled expiration
          </span>
        </label>

        <div
          className={`grid grid-cols-2 gap-8 transition-opacity duration-300 ${accessData.scheduledExpiration ? "opacity-100" : "opacity-40 pointer-events-none"}`}
        >
          {/* Start Date */}
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-gray-700 block">
              Access Start Date
            </label>
            <div className="relative flex items-center">
              {" "}
              {/* flex added for alignment */}
              <DatePicker
                selected={new Date(accessData.startDate)}
                onChange={(date) => handleDateChange("startDate", date)}
                // 1. Wrapper ko full width dene ke liye
                wrapperClassName="w-full"
                // 2. Input ki styling
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-600 text-[13px] outline-none focus:ring-1 focus:ring-red-400 pr-10"
                dateFormat="yyyy-MM-dd"
              />
              <img
                src={CalendarIconImg}
                alt="calendar"
                className="absolute right-3 w-4 h-4 pointer-events-none z-10"
              />
            </div>
          </div>

          {/* End Date - Same logic apply karein */}
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-gray-700 block">
              Access End Date
            </label>
            <div className="relative flex items-center">
              <DatePicker
                selected={new Date(accessData.endDate)}
                onChange={(date) => handleDateChange("endDate", date)}
                wrapperClassName="w-full"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-600 text-[13px] outline-none focus:ring-1 focus:ring-red-400 pr-10"
                dateFormat="yyyy-MM-dd"
              />
              <img
                src={CalendarIconImg}
                alt="calendar"
                className="absolute right-3 w-4 h-4 pointer-events-none z-10"
              />
            </div> 
          </div>
        </div>
      </section>

      {/* Login Restrictions */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <h4 className="text-[14px] font-bold text-gray-800">
            Login Restrictions
          </h4>
          <span className="text-[11px] text-gray-400 font-medium">
            (Optional)
          </span>
        </div>
        <input
          type="text"
          name="allowedIPs"
          value={accessData.allowedIPs}
          onChange={handleChange}
          placeholder="Allowed IP Addresses | 192.168.1.100"
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 text-[13px] placeholder:text-gray-300"
        />
        <ul className="text-[12px] text-gray-400 list-disc ml-5 space-y-1.5 font-medium leading-relaxed">
          <li>
            Specify IP address ranges from which this user can login. Separate
            multiple ranges using commas.
          </li>
          <li>Unchecking a permission will remove it from this user.</li>
        </ul>
      </section>

      {/* Reset Authentication */}
      <section className="space-y-4">
        <h4 className="text-[14px] font-bold text-gray-800">
          Reset Authentication
        </h4>
        <div className="flex gap-10">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              name="mfaReset"
              checked={accessData.mfaReset}
              onChange={handleChange}
              className="w-4 h-4 accent-green-600 rounded"
            />
            <span className="text-[13px] text-gray-600 font-medium group-hover:text-gray-900">
              MFA Reset
            </span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              name="forceSignOut"
              checked={accessData.forceSignOut}
              onChange={handleChange}
              className="w-4 h-4 accent-green-600 rounded"
            />
            <span className="text-[13px] text-gray-600 font-medium group-hover:text-gray-900">
              Force Sign Out
            </span>
          </label>
        </div>
      </section>

      {/* Footer Buttons */}
      <div className="flex justify-center gap-6 pt-6 border-t border-gray-100 mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="w-52 py-2.5 border border-gray-300 bg-white text-gray-700 rounded-lg font-bold text-[14px] hover:bg-gray-50 transition-all active:scale-95 shadow-sm"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleFinalSubmit}
          className="w-52 py-2.5 bg-[#E30613] text-white rounded-lg font-bold text-[14px] shadow-md hover:bg-red-700 transition-all active:scale-95"
        >
          Send Invite
        </button>
      </div>
    </div>
  );
};

export default AccessSettings;
