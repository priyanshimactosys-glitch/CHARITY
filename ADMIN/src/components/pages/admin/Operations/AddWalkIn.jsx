import React, { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const AddWalkIn = () => {
  const navigate = useNavigate();

  // API State Structure
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceId: "",
    date: "2026-04-26",
    time: "10:00 AM",
    status: "Scheduled",
    notes: ""
  });

  // Input change handle karne ke liye function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Final Data for API Team:", formData);
    
    // Yahan API milne wala endpoint lagega
    /*
    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if(response.ok) navigate(-1);
    } catch (err) { console.log(err); }
    */
    
    alert("Walk-in Visit Added Successfully!");
    navigate(-1); // Submit ke baad piche jane ke liye
  };

  return (
    <div className="p-2 bg-[#F8F9FA] min-h-[80vh] font-sans flex flex-col">
      <div className="flex-grow">
        <form onSubmit={handleSubmit} className="bg-white rounded-[32px] p-10 shadow-sm border border-gray-100 max-w-5xl mx-auto mt-4">
          
          <div className="flex items-center gap-2 mb-10 text-gray-400">
            <Calendar size={18} strokeWidth={2.5} />
            <p className="text-[15px] font-medium tracking-tight">Create a new appointments by filling out the details below</p>
          </div>

          <div className="space-y-8"> 
          
            {/* Full Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-[#1A202C] mb-3">Full Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter Your Name" 
                  className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-gray-400 bg-white" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#1A202C] mb-3">Phone</label>
                <input 
                  type="text" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number" 
                  className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-gray-400 bg-white" 
                  required 
                />
              </div>
            </div>

            {/* Email & Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-[#1A202C] mb-3">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email" 
                  className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-gray-400 bg-white" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#1A202C] mb-3">Service</label>
                <div className="relative">
                  <select 
                    name="serviceId"
                    value={formData.serviceId}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm appearance-none bg-white outline-none cursor-pointer"
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="1">Tutoring Session</option>
                    <option value="2">Mentorship</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>
            </div>

            {/* Date, Time & Status */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <label className="block text-sm font-bold text-[#1A202C] mb-3">Date & Time</label>
                <div className="relative">
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm bg-white cursor-pointer outline-none"
                    required
                  />
                </div>
              </div>
              <div className="md:pt-8">
                <div className="relative">
                  <select name="time" value={formData.time} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm appearance-none bg-white outline-none cursor-pointer">
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#1A202C] mb-3">Status</label>
                <div className="relative">
                  <select name="status" value={formData.status} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm appearance-none bg-white outline-none cursor-pointer">
                    <option value="Scheduled">Scheduled</option>
                    <option value="Walk-in">Walk-in</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-bold text-[#1A202C] mb-3">Select Service</label>
              <div className="relative">
                <textarea 
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Notes....(optional)" 
                  className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm min-h-[140px] resize-none focus:outline-none"
                ></textarea>
                <ChevronDown className="absolute right-5 top-5 text-gray-400 pointer-events-none" size={20} />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-6 pt-10">
              <button 
                type="button" 
                onClick={() => navigate(-1)} 
                className="bg-[#0061AF] text-white px-16 py-4 rounded-xl font-bold text-sm active:scale-95 transition-all shadow-sm"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="bg-[#D32F2F] text-white px-12 py-4 rounded-xl font-bold text-sm active:scale-95 transition-all shadow-md"
              >
                Add Walk-in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};