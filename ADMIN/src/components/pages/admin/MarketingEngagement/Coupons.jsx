import React, { useState } from 'react';
import { X, Calendar, Check, ChevronDown } from 'lucide-react';

const Coupons = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    discountPlan: '',
    couponCode: '',
    discountType: '',
    discountValue: '',
    applyTo: '',
    usageLimit: '',
    startDate: '',
    endDate: '',
    status: 'Enabled' // Default status
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Coupon Created:", formData);
    alert("Coupon successfully created!");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/20 p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute right-6 top-6 hover:bg-gray-100 p-1.5 rounded-full transition-colors border border-gray-300"
        >
          <X size={20} className="text-gray-600" />
        </button>

        <div className="mb-8 border-b border-gray-100 pb-4">
          <h2 className="text-2xl font-bold text-gray-800">Create Coupon</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            
            {/* Discount Plan */}
            <div className="space-y-1.5">
              <label className="block text-[14px] font-bold text-gray-800">Discount Plan</label>
              <select name="discountPlan" value={formData.discountPlan} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-xl bg-white text-gray-500 outline-none">
                <option value="">Monthly / Yearly (choose plan type)</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>

            {/* Coupon Code */}
            <div className="space-y-1.5">
              <label className="block text-[14px] font-bold text-gray-800">Coupon Code</label>
              <input type="text" name="couponCode" placeholder="MMSC2024" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-xl bg-white outline-none" />
            </div>

            {/* Discount Type */}
            <div className="space-y-1.5">
              <label className="block text-[14px] font-bold text-gray-800">Discount Type</label>
              <select name="discountType" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-xl bg-white text-gray-500 outline-none">
                <option value="">Fixed / Percentage</option>
                <option value="Fixed">Fixed</option>
                <option value="Percentage">Percentage</option>
              </select>
            </div>

            {/* Discount Value */}
            <div className="space-y-1.5">
              <label className="block text-[14px] font-bold text-gray-800">Discount Value</label>
              <input type="text" name="discountValue" placeholder="100 or 20%" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-xl bg-white outline-none" />
            </div>

            {/* Apply To */}
            <div className="space-y-1.5">
              <label className="block text-[14px] font-bold text-gray-800">Apply To</label>
              <select name="applyTo" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-xl bg-white text-gray-500 outline-none">
                <option value="">Services (choose a service from dropdown)</option>
              </select>
            </div>

            {/* Usage Limit */}
            <div className="space-y-1.5">
              <label className="block text-[14px] font-bold text-gray-800">Usage Limit</label>
              <input type="number" name="usageLimit" placeholder="1 (Total number of times coupon can be used)" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-xl bg-white outline-none" />
            </div>

            {/* Start Date */}
            <div className="space-y-1.5 relative">
              <label className="block text-[14px] font-bold text-gray-800">Start Date</label>
              <input 
                type="date" 
                name="startDate"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-xl bg-white outline-none block" 
              />
            </div>

            {/* End Date */}
            <div className="space-y-1.5 relative">
              <label className="block text-[14px] font-bold text-gray-800">End Date</label>
              <input 
                type="date" 
                name="endDate"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-xl bg-white outline-none block" 
              />
            </div>
          </div>

          {/* Status Section - Updated with Checkmarks */}
          <div className="mt-4 space-y-3 text-left"> 
            <label className="block text-[14px] font-bold text-gray-800">Status</label>
            <div className="flex items-center gap-8">
              {/* Enabled Option */}
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <input 
                  type="radio" 
                  name="status" 
                  value="Enabled"
                  checked={formData.status === 'Enabled'}
                  onChange={handleChange}
                  className="hidden peer" 
                />
                <div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center transition-all peer-checked:bg-green-600 peer-checked:border-green-600"> 
                  <Check size={14} className="text-white opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={4} />
                </div>
                <span className="text-[16px] text-gray-600 font-medium">Enabled</span> 
              </label>

              {/* Disabled Option */}
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <input 
                  type="radio" 
                  name="status" 
                  value="Disabled"
                  checked={formData.status === 'Disabled'}
                  onChange={handleChange}
                  className="hidden peer" 
                />
                <div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center transition-all peer-checked:bg-red-600 peer-checked:border-green-600"> 
                  <Check size={14} className="text-white opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={4} />
                </div>
                <span className="text-[16px] text-gray-600 font-medium">Disabled</span> 
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-6 pt-6">
            <button type="button" onClick={onClose} className="px-16 py-3 bg-[#0055A5] text-white rounded-lg font-bold">Cancel</button>
            <button type="submit" className="px-16 py-3.5 bg-[#D32F2F] text-white rounded-lg font-bold">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Coupons;