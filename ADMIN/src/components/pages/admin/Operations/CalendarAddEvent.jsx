import React, { useState, useRef } from 'react';
import { X, FileUp, FileText, Trash2, ChevronDown } from 'lucide-react';

const CalendarAddEvent = ({ isOpen, onClose }) => {
  const fileInputRef = useRef(null);
  
  //  Form State 
  const [formData, setFormData] = useState({
    title: 'All Event',
    eventType: 'Appointment',
    date: 'Apr 28, 2026',
    isAllDay: false,
    timezone: 'GMT-04:00 Eastern Time',
    startTime: '09:00 AM',
    endTime: '10:00 AM',
    visibility: 'Volunteers',
    location: '',
    capacity: '',
    notes: '',
    file: null
  });

  if (!isOpen) return null;

  // --- Handlers ---
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) handleChange('file', file);
  };

  const handleSubmit = () => { 

    // API call kar sakte hain
    console.log("Final Event Data:", formData);
    alert("Event Added Successfully! Check Console.");
    onClose(); 
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-[110] flex items-center justify-center p-4">
      <div className="bg-white rounded-[24px] w-full max-w-[550px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-50">
          <h3 className="text-xl font-bold text-gray-800">Add Event</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full text-gray-400 transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-8 space-y-5 max-h-[80vh] overflow-y-auto custom-scrollbar">
          
          {/* Hidden Input for File */}
          <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />

          {/* Title */}
          <div>
            <label className="block text-[11px] font-extrabold text-gray-400 mb-2 uppercase tracking-wider">Title</label>
            <div className="relative">
              <select 
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                className="w-full p-3 bg-[#F8F9FA] border border-gray-100 rounded-xl text-sm font-semibold focus:outline-none appearance-none cursor-pointer"
              >
                <option>All Event</option>
                <option>Urgent Event</option>
                <option>Social Event</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-2 text-gray-400 italic text-[10px]">
                Event Type <ChevronDown size={14} />
              </div>
            </div>
          </div>

          {/* Event Type */}
          <div>
            <label className="block text-[11px] font-extrabold text-gray-400 mb-2 uppercase tracking-wider">Event Type</label>
            <select 
              value={formData.eventType}
              onChange={(e) => handleChange('eventType', e.target.value)}
              className="w-full p-3 bg-[#F8F9FA] border border-gray-100 rounded-xl text-sm font-semibold focus:outline-none cursor-pointer"
            >
              <option>Appointment</option>
              <option>Meeting</option>
              <option>Workshop</option>
            </select>
          </div>

          {/* Date & All Day Toggle */}
          <div className="flex items-center gap-4 py-2 border-b border-gray-50">
            <span className="text-sm font-bold text-gray-700">{formData.date}</span>
            <div className="h-4 w-[1px] bg-gray-300"></div>
            <button 
              onClick={() => handleChange('isAllDay', !formData.isAllDay)}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${formData.isAllDay ? 'border-[#0061AF] bg-[#0061AF]' : 'border-gray-300'}`}>
                {formData.isAllDay && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
              </div>
              <span className={`text-sm font-medium ${formData.isAllDay ? 'text-gray-800' : 'text-gray-400'}`}>All day Event</span>
            </button>
          </div>

          {/* Timezone */}
          <div>
            <label className="block text-[11px] font-extrabold text-gray-400 mb-2 uppercase tracking-wider">Timezone</label>
            <select 
              value={formData.timezone}
              onChange={(e) => handleChange('timezone', e.target.value)}
              className="w-full p-3 bg-[#F8F9FA] border border-gray-100 rounded-xl text-sm font-semibold focus:outline-none cursor-pointer"
            >
              <option>GMT-04:00 Eastern Time</option>
              <option>GMT+05:30 India Standard Time</option>
            </select>
          </div>

          {/* Time Grid */}
          {!formData.isAllDay && (
            <div className="grid grid-cols-2 gap-4 animate-in slide-in-from-top-1">
              <div>
                <label className="block text-[11px] font-extrabold text-gray-400 mb-2 uppercase tracking-wider">Start Time</label>
                <select 
                  value={formData.startTime}
                  onChange={(e) => handleChange('startTime', e.target.value)}
                  className="w-full p-3 bg-[#F8F9FA] border border-gray-100 rounded-xl text-sm font-semibold focus:outline-none"
                >
                  <option>09:00 AM</option>
                  <option>10:00 AM</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-extrabold text-gray-400 mb-2 uppercase tracking-wider">End Time</label>
                <select 
                  value={formData.endTime}
                  onChange={(e) => handleChange('endTime', e.target.value)}
                  className="w-full p-3 bg-[#F8F9FA] border border-gray-100 rounded-xl text-sm font-semibold focus:outline-none"
                >
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                </select>
              </div>
            </div>
          )}

          {/* Visibility Level */}
          <div>
            <label className="block text-[11px] font-extrabold text-gray-400 mb-3 uppercase tracking-wider">Visibility Level</label>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {['Volunteers', 'Admin Only', 'Personal', 'All'].map((level) => (
                <button 
                  key={level} 
                  onClick={() => handleChange('visibility', level)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${formData.visibility === level ? 'bg-[#4CAF50] border-[#4CAF50]' : 'border-gray-300'}`}>
                    {formData.visibility === level && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                  <span className={`text-sm font-medium ${formData.visibility === level ? 'text-black font-bold' : 'text-gray-500'}`}>{level}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-[11px] font-extrabold text-gray-400 mb-2 uppercase tracking-wider">Location/Room</label>
            <select 
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              className="w-full p-3 bg-[#F8F9FA] border border-gray-100 rounded-xl text-sm font-semibold focus:outline-none cursor-pointer"
            >
              <option value="">Select room or location</option>
              <option value="Conference Room A">Conference Room A</option>
              <option value="Main Hall">Main Hall</option>
            </select>
          </div>

          {/* Capacity */}
          <div>
            <label className="block text-[11px] font-extrabold text-gray-400 mb-2 uppercase tracking-wider">Capacity</label>
            <input 
              type="text" 
              value={formData.capacity}
              onChange={(e) => handleChange('capacity', e.target.value)}
              placeholder="Enter any volunteers, attendees, or clients" 
              className="w-full p-3 bg-[#F8F9FA] border border-gray-100 rounded-xl text-sm font-semibold focus:outline-none placeholder:text-gray-300"
            />
          </div>

          {/* Notes & Upload */}
          <div className="flex gap-4 items-start">
            <div className="flex-[2]">
              <label className="block text-[11px] font-extrabold text-gray-400 mb-2 uppercase tracking-wider">Notes</label>
              <textarea 
                value={formData.notes}
                onChange={(e) => handleChange('notes', e.target.value)}
                placeholder="Enter any notes or additional...." 
                rows="1"
                className="w-full p-3 bg-[#F8F9FA] border border-gray-100 rounded-xl text-sm font-semibold focus:outline-none resize-none placeholder:text-gray-300"
              />
            </div>
            <div className="flex-1 mt-[23px]">
              <button 
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="w-full flex items-center justify-center gap-2 p-3 border border-gray-200 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-50 transition-all active:scale-95"
              >
                <FileUp size={18} className="text-[#00B0FF]" /> Upload file
              </button>
            </div>
          </div>

          {/* File Preview */}
          {formData.file && (
            <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-100 rounded-xl animate-in fade-in">
              <div className="flex items-center gap-3">
                <FileText size={20} className="text-[#0061AF]" />
                <span className="text-xs font-bold text-gray-700 truncate max-w-[250px]">{formData.file.name}</span>
              </div>
              <button onClick={() => handleChange('file', null)} className="text-red-500 p-1 hover:bg-red-50 rounded-lg">
                <Trash2 size={16} />
              </button>
            </div>
          )}

          {/* Final Actions */}
          <div className="flex gap-4 pt-4">
            <button 
              onClick={handleSubmit}
              className="flex-1 bg-[#D32F2F] text-white py-4 rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-all hover:bg-[#b71c1c]"
            >
              Add Event
            </button>
            <button 
              onClick={onClose}
              className="flex-1 bg-[#0061AF] text-white py-4 rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-all hover:bg-[#004e8c]"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarAddEvent;