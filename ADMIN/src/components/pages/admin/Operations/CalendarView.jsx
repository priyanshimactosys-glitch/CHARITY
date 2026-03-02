import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Filter, Calendar as CalendarIcon, X } from 'lucide-react';
import CalendarAddEvent from './CalendarAddEvent';

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 3, 15)); 
  const [viewDate, setViewDate] = useState(new Date(2026, 3, 1)); 
  const [currentView, setCurrentView] = useState('Month');
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Pagination state 
  const [showAddEventModal, setShowAddEventModal] = useState(false); 

  // Filter Functional State 
  const [filters, setFilters] = useState({
    eventType: 'All Event',
    visibility: ['Volunteers', 'Admin Only'], // Default selected values
    volunteer: 'All Volunteers',
    dateRange: '2026-04-28'
  });

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Generate Calendar Days (Pagination Logic) 
  const generateCalendar = () => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();
    const calendarGrid = [];
    
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      calendarGrid.push({ day: prevMonthDays - i, currentMonth: false });
    }
    for (let i = 1; i <= daysInMonth; i++) {
      calendarGrid.push({ day: i, currentMonth: true });
    }
    const remainingSlots = 42 - calendarGrid.length;
    for (let i = 1; i <= remainingSlots; i++) {
      calendarGrid.push({ day: i, currentMonth: false });
    }
    const rows = [];
    for (let i = 0; i < calendarGrid.length; i += 7) {
      rows.push(calendarGrid.slice(i, i + 7));
    }
    return rows;
  };

  // --- Handlers ---
  const handleDateClick = (day, isCurrentMonth) => {
    if (!isCurrentMonth) return;
    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    setSelectedDate(newDate);
  };

  const changeMonth = (offset) => {
    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1);
    setViewDate(newDate);
    setSelectedDate(new Date(newDate.getFullYear(), newDate.getMonth(), 1));
  };

  const handleYearChange = (year) => {
    const newDate = new Date(year, viewDate.getMonth(), 1);
    setViewDate(newDate); 
    setSelectedDate(new Date(year, viewDate.getMonth(), 1)); 
    setShowYearPicker(false);
  };
 const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  
    const baseMonth = new Date(2026, 3, 1); // April 2026
    const newDate = new Date(baseMonth.getFullYear(), baseMonth.getMonth() + (pageNumber - 1), 1);
    setViewDate(newDate);
    setSelectedDate(new Date(newDate.getFullYear(), newDate.getMonth(), 1));
  };


  // --- Filter Logic Handlers ---
  const toggleVisibility = (level) => {
    setFilters(prev => ({
      ...prev,
      visibility: prev.visibility.includes(level)
        ? prev.visibility.filter(item => item !== level)
        : [...prev.visibility, level]
    }));
  };

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const calendarRows = generateCalendar();

  return (
    <div className="p-6 bg-[#F8F9FA] min-h-screen font-sans relative">
      
      {/* Header Section */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center justify-between mb-6">
        <div className="flex items-center gap-8 px-4 relative">
          <button onClick={() => changeMonth(-1)} className="text-gray-400 hover:text-black transition-colors"><ChevronLeft size={20} /></button>
          
          <div className="relative">
            <h2 
              onClick={() => setShowYearPicker(!showYearPicker)}
              className="text-[17px] font-bold text-gray-800 cursor-pointer hover:text-[#0061AF] flex items-center gap-2"
            >
              {monthNames[selectedDate.getMonth()]} {selectedDate.getDate()}, {selectedDate.getFullYear()}
              <CalendarIcon size={16} className="text-gray-400" />
            </h2>
            
            {showYearPicker && (
              <div className="absolute top-10 left-0 bg-white border border-gray-100 shadow-xl rounded-xl p-4 z-50 grid grid-cols-3 gap-2 w-64">
                {[2024, 2025, 2026, 2027, 2028, 2029].map(y => (
                  <button 
                    key={y} 
                    onClick={() => handleYearChange(y)}
                    className={`py-2 rounded-lg text-sm transition-all ${viewDate.getFullYear() === y ? 'bg-[#D32F2F] text-white' : 'hover:bg-gray-100'}`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => changeMonth(1)} className="text-gray-400 hover:text-black transition-colors"><ChevronRight size={20} /></button>
        </div>
        
        <div className="flex gap-4">
<button 
  onClick={() => setShowAddEventModal(true)} 
  className="bg-[#0061AF] text-white px-7 py-3 rounded-xl font-bold text-sm flex items-center gap-2 active:scale-95 transition-all shadow-sm"
>
  <Plus size={18} /> Add Event
</button>
          <button className="bg-[#D32F2F] text-white px-7 py-3 rounded-xl font-bold text-sm flex items-center gap-2 active:scale-95 transition-all shadow-sm"><Plus size={18} /> Schedule Room</button>
        </div>
      </div>

      {/* Main Calendar Container */}
      <div className="bg-white rounded-[32px] p-10 shadow-sm border border-gray-100 min-h-[600px]">
        
        <div className="flex justify-between items-center mb-10">
          <div className="flex border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <button onClick={() => changeMonth(-1)} className="px-3 border-r border-gray-100 hover:bg-gray-50 text-gray-400"><ChevronLeft size={16} /></button>
            {['Month', 'Week', 'Day'].map((v) => (
              <button key={v} onClick={() => setCurrentView(v)} className={`px-8 py-3 text-[14px] font-bold border-r border-gray-100 last:border-r-0 transition-all ${currentView === v ? 'bg-[#F5F0FF] text-[#7E22CE]' : 'bg-white text-gray-400 hover:text-gray-600'}`}>{v}</button>
            ))}
            <button onClick={() => changeMonth(1)} className="px-3 hover:bg-gray-50 text-gray-400"><ChevronRight size={16} /></button>
          </div>

          <div className="flex border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <button 
              onClick={() => setShowFilterModal(true)}
              className="flex items-center gap-2 px-8 py-3 text-[14px] font-bold text-gray-600 bg-[#F5F0FF] border-r border-gray-200 hover:bg-[#ece4ff]"
            >
              <Filter size={16} className="text-[#7E22CE]" /> Filters
            </button>
            <button onClick={() => {setViewDate(new Date()); setSelectedDate(new Date());}} className="px-8 py-3 text-[14px] font-bold text-gray-500 bg-white hover:bg-gray-50">Clear</button>
          </div>
        </div>

        <div className="max-w-[700px]">
          <div className="grid grid-cols-[100px_1fr] mb-6">
            <div className="flex items-center justify-center border-r border-gray-100"><ChevronLeft size={16} className="text-gray-300"/></div>
            <div className="grid grid-cols-7 text-center">
              {weekDays.map(day => (<div key={day} className="text-[14px] font-bold text-gray-700">{day}</div>))}
            </div>
          </div>

          <div className="space-y-4">
            {calendarRows.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-[100px_1fr] items-center group">
                <div className="text-[11px] font-bold text-gray-400 text-center leading-tight">
                  {monthNames[viewDate.getMonth()]} <br /> {viewDate.getFullYear()}
                </div>
                
                <div className="grid grid-cols-7 text-center">
                  {row.map((cell, i) => {
                    const isSelected = cell.currentMonth && 
                                      selectedDate.getDate() === cell.day && 
                                      selectedDate.getMonth() === viewDate.getMonth() &&
                                      selectedDate.getFullYear() === viewDate.getFullYear();
                    return (
                      <div key={i} className="flex justify-center items-center py-2">
                        <button 
                          onClick={() => handleDateClick(cell.day, cell.currentMonth)}
                          className={`w-11 h-11 flex items-center justify-center text-[14px] font-bold rounded-full transition-all 
                            ${!cell.currentMonth ? 'text-gray-200' : 'text-gray-800 hover:bg-gray-100'}
                            ${isSelected ? 'bg-[#D32F2F] text-white shadow-lg' : ''}
                          `}
                        >
                          {cell.day < 10 ? `0${cell.day}` : cell.day}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div> 


        {/* --- PAGINATION --- */}
        <div className="mt-auto pt-10 flex justify-center items-center gap-2">
          <button 
            onClick={() => { if(currentPage > 1) handlePaginationClick(currentPage - 1) }} 
            className="p-2 border border-gray-200 rounded-lg text-gray-400 hover:bg-gray-50 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            <ChevronLeft size={16}/>
          </button>
          
          {[1, 2, 3].map((num) => (
            <button 
              key={num} 
              onClick={() => handlePaginationClick(num)}
              className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-bold border transition-all
                ${currentPage === num 
                  ? 'border-[#D32F2F] text-[#D32F2F] bg-white' 
                  : 'border-gray-200 text-gray-600 hover:bg-gray-50'}
              `}
            >
              {num}
            </button>
          ))}
      </div>
      </div> 




      {/* --- FUNCTIONAL FILTER MODAL --- */}
      {showFilterModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-[24px] w-full max-w-[550px] shadow-2xl overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-50">
              <h3 className="text-xl font-bold text-gray-800">Filters</h3>
              <button onClick={() => setShowFilterModal(false)} className="p-2 hover:bg-gray-100 rounded-full text-gray-400"><X size={20}/></button>
            </div>
            
            <div className="p-8 space-y-6"> 

              {/* Event Type */}
              <div>
                <label className="block text-[13px] font-bold text-gray-400 mb-2">Event Type</label>
                <select 
                  value={filters.eventType}
                  onChange={(e) => handleFilterChange('eventType', e.target.value)}
                  className="w-full p-3 bg-[#F8F9FA] border border-gray-100 rounded-xl text-sm font-medium focus:outline-none cursor-pointer"
                >
                  <option value="All Event">All Event</option>
                  <option value="Appointment">Appointment</option>
                  <option value="Meeting">Meeting</option>
                </select>
              </div>

              {/* Visibility Level */}
              <div>
                <label className="block text-[13px] font-bold text-gray-400 mb-3">Visibility Level</label>
                <div className="grid grid-cols-2 gap-4">
                  {['Volunteers', 'Admin Only', 'Personal', 'Public'].map((v) => (
                    <label 
                      key={v} 
                      className="flex items-center gap-3 cursor-pointer group"
                      onClick={() => toggleVisibility(v)}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${filters.visibility.includes(v) ? 'bg-[#4CAF50] border-[#4CAF50]' : 'border-gray-300'}`}>
                        {filters.visibility.includes(v) && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <span className={`text-sm font-medium transition-colors ${filters.visibility.includes(v) ? 'text-black font-bold' : 'text-gray-600'}`}>{v}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Volunteer */}
              <div>
                <label className="block text-[13px] font-bold text-gray-400 mb-2">Volunteer</label>
                <select 
                  value={filters.volunteer}
                  onChange={(e) => handleFilterChange('volunteer', e.target.value)}
                  className="w-full p-3 bg-[#F8F9FA] border border-gray-100 rounded-xl text-sm font-medium focus:outline-none cursor-pointer"
                >
                  <option value="All Volunteers">All Volunteers</option>
                  <option value="John Doe">John Doe</option>
                  <option value="Jane Smith">Jane Smith</option>
                </select>
              </div>

              {/* Data Range */}
              <div>
                <label className="block text-[13px] font-bold text-gray-400 mb-2">Data Range</label>
                <div className="relative">
                  <input 
                    type="date" 
                    value={filters.dateRange}
                    onChange={(e) => handleFilterChange('dateRange', e.target.value)}
                    className="w-full p-3 bg-[#F8F9FA] border border-gray-100 rounded-xl text-sm font-medium focus:outline-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button 
                  onClick={() => { console.log("Applied Filters:", filters); setShowFilterModal(false); }}
                  className="flex-1 bg-[#D32F2F] text-white py-3.5 rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-all"
                >
                  Apply Filters
                </button>
                <button onClick={() => setShowFilterModal(false)} className="flex-1 bg-[#0061AF] text-white py-3.5 rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-all">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )} 
      <CalendarAddEvent 
  isOpen={showAddEventModal} 
  onClose={() => setShowAddEventModal(false)} 
/>
    </div>
  );
};

export default CalendarView; 