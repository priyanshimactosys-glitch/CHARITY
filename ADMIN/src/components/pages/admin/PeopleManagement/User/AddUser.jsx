import React, { useState } from 'react';
import { X, Calendar, Info, ChevronDown } from 'lucide-react';

const AddUser = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('Details');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden animate-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b bg-white">
          <h3 className="text-xl font-bold text-gray-800">Add User</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={24} className="border border-gray-300 rounded-full p-0.5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b bg-gray-50/50">
          {['Details', 'Roles & Permissions', 'Access Settings', 'Notifications'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 text-sm font-bold transition-all relative ${
                activeTab === tab ? 'text-red-600' : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"></div>}
            </button>
          ))}
        </div>

        {/* Form Content */}
        <form className="p-8 space-y-5 max-h-[75vh] overflow-y-auto custom-scrollbar text-left">
          <div className="grid grid-cols-2 gap-x-10 gap-y-5">
            
            {/* Name */}
            <div className="space-y-1">
              <label className="block text-[13px] font-bold text-gray-700">Name</label>
              <input type="text" placeholder="Enter Name" className="w-full p-2.5 border border-gray-300 rounded-md outline-none focus:border-red-400 bg-white" />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="block text-[13px] font-bold text-gray-700">Email</label>
              <input type="email" placeholder="Enter Email" className="w-full p-2.5 border border-gray-300 rounded-md outline-none focus:border-red-400 bg-white" />
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <label className="block text-[13px] font-bold text-gray-700">Phone <span className="text-gray-400 font-normal text-xs">(Optional)</span></label>
              <input type="text" placeholder="Enter Phone" className="w-full p-2.5 border border-gray-300 rounded-md outline-none focus:border-red-400 bg-white" />
            </div>

            {/* User Type (Dual Select as per image) */}
            <div className="space-y-1">
              <label className="block text-[13px] font-bold text-gray-700">User Type</label>
              <div className="flex gap-4">
                <div className="relative flex-1">
                   <select className="w-full p-2.5 border border-gray-300 rounded-md appearance-none outline-none bg-white pr-10 text-gray-600">
                      <option>Volunteer</option>
                   </select>
                   <ChevronDown className="absolute right-3 top-3 text-gray-400" size={16} />
                </div>
                <div className="relative flex-1">
                   <select className="w-full p-2.5 border border-gray-300 rounded-md appearance-none outline-none bg-white pr-10 text-gray-600">
                      <option>Staff</option>
                   </select>
                   <ChevronDown className="absolute right-3 top-3 text-gray-400" size={16} />
                </div>
              </div>
            </div>

            {/* Single User Type */}
            <div className="space-y-1">
              <label className="block text-[13px] font-bold text-gray-700">User Type</label>
              <div className="relative">
                <select className="w-full p-2.5 border border-gray-300 rounded-md appearance-none outline-none bg-white pr-10 text-gray-600">
                  <option>Volunteer</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 text-gray-400" size={16} />
              </div>
            </div>

            {/* Role */}
            <div className="space-y-1">
              <label className="block text-[13px] font-bold text-gray-700">Role</label>
              <div className="relative">
                <select className="w-full p-2.5 border border-gray-300 rounded-md appearance-none outline-none bg-white pr-10 text-gray-400">
                  <option>Select role</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 text-gray-400" size={16} />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="block text-[13px] font-bold text-gray-700">Auto generate password</label>
              <div className="relative flex items-center border border-gray-300 rounded-md overflow-hidden bg-white">
                <input type="text" value="@1234#$" readOnly className="flex-1 p-2.5 outline-none text-gray-500" />
                <button type="button" className="px-4 py-2 text-blue-600 font-bold text-[13px] border-l hover:bg-gray-50">Create</button>
              </div>
            </div>
          </div>

          {/* Send Invite */}
          <div className="flex items-center gap-6 py-1">
            <span className="text-[13px] font-bold text-gray-700">Send invite by</span>
            <div className="flex items-center gap-4">
               <label className="flex items-center gap-2 cursor-pointer">
                <div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center p-0.5">
                    <div className="w-full h-full bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-600">Email</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                <span className="text-sm text-gray-600">SMS</span>
              </label>
            </div>
          </div>

          {/* Expiration */}
          <div className="space-y-4">
             <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-red-600" />
                <span className="text-[13px] font-bold text-gray-700">Scheduled expiration <span className="text-gray-400 font-normal">(optional)</span></span>
             </label>
             <div className="grid grid-cols-2 gap-x-10">
                <div className="space-y-1">
                  <label className="block text-[13px] font-bold text-gray-700">Expiration Date</label>
                  <div className="relative">
                    <input type="text" value="February 1, 2026" readOnly className="w-full p-2.5 border border-gray-300 rounded-md bg-white text-gray-600" />
                    <Calendar className="absolute right-3 top-2.5 text-gray-400" size={18} />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-[13px] font-bold text-gray-700">Expiration Behavior</label>
                  <div className="relative">
                    <select className="w-full p-2.5 border border-gray-300 rounded-md appearance-none outline-none bg-white pr-10 text-gray-600">
                      <option>Auto-Deactivate</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3 text-gray-400" size={16} />
                  </div>
                </div>
             </div>
          </div>

          {/* Note */}
          <div className="space-y-1">
            <label className="block text-[13px] font-bold text-gray-700">Permissions/Access Note</label>
            <textarea className="w-full p-3 border border-gray-300 rounded-md outline-none h-20 shadow-sm focus:border-red-400 resize-none"></textarea>
          </div>

          {/* Pink Info Box */}
          <div className="bg-[#FAF5FF] p-4 rounded-lg flex gap-3 border border-purple-100">
            <Info className="text-red-500 shrink-0 mt-0.5" size={18} />
            <p className="text-[13px] text-gray-600 leading-relaxed text-left">
              All permissions and credentials will be set according to the user type and role selected. You will be able to edit these in the next to this tab. <span className="font-bold text-black underline cursor-pointer">Learn more.</span>
            </p>
          </div>

          {/* Action Buttons */}
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
      </div>
    </div>
  );
};

export default AddUser; 


