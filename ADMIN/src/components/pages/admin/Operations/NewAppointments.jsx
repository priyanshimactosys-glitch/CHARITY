import React, { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const NewAppointment = () => {
  const navigate = useNavigate();

  // API state structure
  const [formData, setFormData] = useState({
    clientId: "",
    serviceId: "",
    date: "2026-04-26",
    time: "10:00",
    status: "Scheduled",
    notes: ""
  });

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // New Client Button Functionality
  const handleNewClient = () => {
    
    alert("Redirecting to New Client registration...");
    // navigate("/admin/clients/new"); 
  };

  // API Submission 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending to API:", formData);
    
    // API endpoint yahan fetch/axios call aayega:
    /*
    try {
      const response = await fetch('YOUR_API_URL', {
        method: 'POST',
        body: JSON.stringify(formData)
      });
      if(response.ok) navigate(-1);
    } catch (error) {
      console.error("Submission failed", error);
    }
    */
    alert("Appointment Created Successfully (Check console for Data)");
  };

  return (
    <div className="p-2 bg-[#F8F9FA] min-h-[80vh] font-sans flex flex-col">
      <div className="flex-grow">
        <form onSubmit={handleSubmit} className="bg-white rounded-[32px] p-10 shadow-sm border border-gray-100 max-w-5xl mx-auto mt-4">
          
          {/* Sub-header instruction */}
          <div className="flex items-center gap-2 mb-10 text-gray-400">
            <Calendar size={18} strokeWidth={2.5} />
            <p className="text-[15px] font-medium tracking-tight">
              Create a new appointments by filling out the details below
            </p>
          </div>

          <div className="space-y-8">
            {/* Select Client Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-end">
              <div className="md:col-span-9">
                <label className="block text-sm font-bold text-[#1A202C] mb-3">Select Client</label>
                <input 
                  type="text" 
                  name="clientId"
                  value={formData.clientId}
                  onChange={handleChange}
                  placeholder="Search for client" 
                  className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-gray-300 bg-white"
                  required
                />
              </div>
              <div className="md:col-span-3">
                <button 
                  type="button"
                  onClick={handleNewClient}
                  className="w-full bg-white border border-gray-200 text-[#1A202C] font-bold py-4 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-all active:scale-[0.98]"
                >
                  <span className="text-xl font-normal">+</span> New Client
                </button>
              </div>
            </div>

            {/* Select Service Row */}
            <div>
              <label className="block text-sm font-bold text-[#1A202C] mb-3">Select Service</label>
              <div className="relative">
                <select 
                  name="serviceId"
                  value={formData.serviceId}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm appearance-none bg-white text-gray-700 outline-none cursor-pointer"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="1">Tutoring Session</option>
                  <option value="2">Mentorship</option>
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              </div>
            </div>

            {/* Date, Time and Status Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <label className="block text-sm font-bold text-[#1A202C] mb-3">Date & Time</label>
                <div className="relative"> 
                
                  {/* Functional Date Picker */}
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm text-gray-700 font-medium outline-none bg-white cursor-pointer"
                    required
                  />
                </div>
              </div>

              <div className="md:pt-8">
                <div className="relative">
                  <select 
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm appearance-none bg-white text-gray-700 font-medium outline-none cursor-pointer"
                  >
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1A202C] mb-3">Status</label>
                <div className="relative">
                  <select 
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm appearance-none bg-white text-gray-700 font-medium outline-none cursor-pointer"
                  >
                    <option value="Scheduled">Scheduled</option>
                    <option value="Pending">Pending</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div>
              <label className="block text-sm font-bold text-[#1A202C] mb-3">Notes</label>
              <div className="relative">
                <textarea 
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Notes....(optional)"
                  className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-gray-300 min-h-[140px] resize-none text-gray-700"
                ></textarea>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-6 pt-10">
              <button 
                type="button"
                onClick={() => navigate(-1)}
                className="bg-[#0061AF] text-white px-16 py-4 rounded-xl font-bold text-sm shadow-sm active:scale-95 transition-all"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="bg-[#D32F2F] text-white px-12 py-4 rounded-xl font-bold text-sm shadow-md active:scale-95 transition-all"
              >
                Create Appointments
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};