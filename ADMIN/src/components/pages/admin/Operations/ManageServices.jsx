import React, { useState, useEffect } from 'react';
import { Search, Plus, ChevronLeft, ChevronRight, X, Loader2 } from 'lucide-react';
import { AddServiceModal } from './AddServiceModal'; 

export const ManageServices = () => {
  //  States 
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Main Setting');

  // API Fetch Logic 
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setTimeout(() => {
          const dummyData = [
            { id: 1, name: 'Passport Application Acceptance', category: 'Identity & Govt', status: 'Active', booking: 'Appointment required', duration: '20m / 10m buffer', location: 'CEO office', hours: 'Service Schedule', bring: 'checklist' },
            { id: 2, name: 'Fingerprinting Services', category: 'Identity & Govt', status: 'Active', booking: 'Appointment required Ask', duration: '20m / 10m buffer', location: 'CEO office', hours: 'Service Schedule', bring: 'checklist' },
            { id: 3, name: 'Sample Hidden Service', category: 'Identity & Govt', status: 'Hidden', booking: 'Appointment required', duration: '20m / 10m buffer', location: 'CEO office', hours: 'Service Schedule', bring: 'checklist' },
            { id: 4, name: 'New Feature Launch', category: 'Identity & Govt', status: 'Coming Soon', booking: 'Appointment required', duration: '20m / 10m buffer', location: 'CEO office', hours: 'Service Schedule', bring: 'checklist' },
          ];
          setServices(dummyData);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching services:", error);
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  // Handlers 
  const handleAddNew = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (loading) return (
    <div className="flex flex-col items-center justify-center h-64 space-y-4">
      <Loader2 className="animate-spin text-[#D32F2F]" size={40} />
      <p className="text-gray-500 font-medium tracking-wide">Loading API Data...</p>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col relative">
      
      {/*  Header Section  */}
      <div className="p-4 md:p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800 border-l-4 border-[#D32F2F] pl-3 tracking-tight">Manage Services</h2>
          <button 
            onClick={handleAddNew}
            className="bg-[#D32F2F] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-bold hover:bg-red-700 transition-all active:scale-95 shadow-md"
          >
            <Plus size={18} className="border-2 border-white rounded-full p-0.5" />
            Add New
          </button>
        </div>

        {/* Filters & Search */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          <select className="border border-gray-200 rounded-lg px-3 py-2.5 bg-white text-sm outline-none text-gray-500 focus:border-red-300">
            <option>All Categories</option>
          </select>
          <select className="border border-gray-200 rounded-lg px-3 py-2.5 bg-white text-sm outline-none text-gray-500 focus:border-red-300">
            <option>All Statuses</option>
          </select>
          <div className="relative lg:col-span-2">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full border border-gray-200 rounded-lg pl-4 pr-24 py-2.5 text-sm outline-none focus:border-red-400"
            />
            <button className="absolute right-0 top-0 bottom-0 px-4 border-l border-gray-200 text-gray-400 hover:text-gray-700 flex items-center gap-2 bg-gray-50 rounded-r-lg">
              <Search size={18} />
              <span className="text-sm font-bold">Search</span>
            </button>
          </div>
        </div>
      </div>

      {/*  Table Content  */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead className="bg-[#FDF2F2] border-y border-gray-50">
            <tr className="text-gray-800 text-[12px] font-bold uppercase tracking-tight">
              <th className="px-4 py-4">Service Name</th>
              <th className="px-4 py-4">Category</th>
              <th className="px-4 py-4 text-center">Status</th>
              <th className="px-4 py-4">Booking type</th>
              <th className="px-4 py-4">Duration Buffer</th>
              <th className="px-4 py-4">Locations</th>
              <th className="px-4 py-4">Hours</th>
              <th className="px-4 py-4">What to Bring</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {services.map((service) => (
              <tr key={service.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4 text-[12px] text-gray-600 font-medium">{service.name}</td>
                <td className="px-4 py-4 text-[11px] text-gray-400">{service.category}</td>
                <td className="px-4 py-4 text-center">
                  <span className={`inline-block whitespace-nowrap px-3 py-1 rounded-md text-[10px] font-bold text-white uppercase tracking-wider ${
                    service.status === 'Active' ? 'bg-[#128C45]' : 
                    service.status === 'Hidden' ? 'bg-[#B48C64]' : 
                    service.status === 'Coming Soon' ? 'bg-[#0057B8]' : 'bg-[#D32F2F]'
                  }`}>
                    {service.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-[11px] text-gray-500 whitespace-nowrap">{service.booking}</td>
                <td className="px-4 py-4 text-[11px] text-gray-400 whitespace-nowrap">{service.duration}</td>
                <td className="px-4 py-4 text-[11px] text-gray-400">{service.location}</td>
                <td className="px-4 py-4 text-[11px] text-gray-400 whitespace-nowrap">{service.hours}</td>
                <td className="px-4 py-4 text-[11px] text-[#128C45] font-bold cursor-pointer hover:underline uppercase">{service.bring}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*  Pagination */}
      <div className="p-6 flex justify-center items-center gap-2 border-t border-gray-50">
        <button className="p-2 text-gray-300 hover:text-gray-500 transition-colors"><ChevronLeft size={18} /></button>
        <button className="w-8 h-8 rounded border border-[#D32F2F] text-[#D32F2F] font-bold text-xs bg-red-50">1</button>
        <button className="w-8 h-8 rounded border border-gray-200 text-gray-400 font-bold text-xs hover:border-red-300 hover:text-red-500 transition-all">2</button>
        <button className="w-8 h-8 rounded border border-gray-200 text-gray-400 font-bold text-xs hover:border-red-300 hover:text-red-500 transition-all">3</button>
        <button className="p-2 text-gray-300 hover:text-gray-500 transition-colors"><ChevronRight size={18} /></button>
      </div>

      {/*  Modal Imported */}
      <AddServiceModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
    </div>
  );
};