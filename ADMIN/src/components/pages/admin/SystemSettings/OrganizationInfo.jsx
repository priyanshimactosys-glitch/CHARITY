import React, { useState } from 'react';

const OrgForm = () => {
  
  const [formData, setFormData] = useState({
    orgName: '',
    legalName: '',
    regNumber: '',
    taxId: '',
    orgType: '',
    establishedYear: '',
    websiteUrl: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-1 font-serif">
      
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          
          
          <div className="flex flex-col gap-1">
            <label className="font-bold text-gray-800">Organization Name</label>
            <input
              type="text"
              name="orgName"
              placeholder="Enter Organization Name"
              className="border border-gray-300 rounded-md p-3 outline-none focus:border-blue-400 transition-all placeholder:text-gray-400"
              onChange={handleChange}
            />
          </div>

          {/* Legal Name */}
          <div className="flex flex-col gap-1">
            <label className="font-bold text-gray-800">Legal Name</label>
            <input
              type="text"
              name="legalName"
              placeholder="Enter Legal Name"
              className="border border-gray-300 rounded-md p-3 outline-none focus:border-blue-400 transition-all placeholder:text-gray-400"
              onChange={handleChange}
            />
          </div>

          {/* Registration Number */}
          <div className="flex flex-col gap-1">
            <label className="font-bold text-gray-800">Registration Number</label>
            <input
              type="text"
              name="regNumber"
              placeholder="Enter Registration Number"
              className="border border-gray-300 rounded-md p-3 outline-none focus:border-blue-400 transition-all placeholder:text-gray-400"
              onChange={handleChange}
            />
          </div>

          {/* Tax ID / EIN */}
          <div className="flex flex-col gap-1">
            <label className="font-bold text-gray-800">Tax ID / EIN</label>
            <input
              type="text"
              name="taxId"
              placeholder="Enter Tax ID / EIN"
              className="border border-gray-300 rounded-md p-3 outline-none focus:border-blue-400 transition-all placeholder:text-gray-400"
              onChange={handleChange}
            />
          </div>

          {/* Organization Type */}
          <div className="flex flex-col gap-1">
            <label className="font-bold text-gray-800">Organization Type</label>
            <div className="relative">
              <select
                name="orgType"
                className="w-full border border-gray-300 rounded-md p-3 outline-none appearance-none bg-white focus:border-blue-400 transition-all text-gray-500"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="ngo">NGO</option>
                <option value="private">Private</option>
                <option value="government">Government</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                <svg className="fill-current h-5 w-5" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Established Year */}
          <div className="flex flex-col gap-1">
            <label className="font-bold text-gray-800">Established Year</label>
            <input
              type="text"
              name="establishedYear"
              placeholder="Enter Established Year"
              className="border border-gray-300 rounded-md p-3 outline-none focus:border-blue-400 transition-all placeholder:text-gray-400"
              onChange={handleChange}
            />
          </div>

          {/* Website URL (Full Width) */}
          <div className="flex flex-col gap-1 md:col-span-1">
            <label className="font-bold text-gray-800">Website URL</label>
            <input
              type="text"
              name="websiteUrl"
              placeholder="Website URL"
              className="border border-gray-300 rounded-md p-3 outline-none focus:border-blue-400 transition-all placeholder:text-gray-400"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-center gap-6 mt-10">
        <button className="bg-[#0160BC] text-white px-12 py-3 rounded-md font-bold text-lg hover:bg-blue-700 transition-all cursor-pointer shadow-md active:scale-95 min-w-[160px]">
          Cancel
        </button>
        <button className="bg-primary text-white px-12 py-3 rounded-md font-bold text-lg hover:bg-red-700 transition-all cursor-pointer shadow-md active:scale-95 min-w-[160px]">
          Save
        </button>
      </div>
    </div>
  );
};

export default OrgForm;