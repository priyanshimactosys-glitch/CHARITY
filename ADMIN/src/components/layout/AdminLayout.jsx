import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Search, Bell } from 'lucide-react'; 
import { Footer } from './Footer';

export const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); 
  const location = useLocation();
  const navigate = useNavigate();

  //  Audit 
  const getHeaderTitle = () => {
    const path = location.pathname;
     // Volunteer Management 
    if (path.includes('/admin/volunteers/availability')) return 'Availability';
    if (path.includes('/admin/volunteers/schedules')) return 'Volunteer schedules';
    if (path.includes('/admin/volunteers/approval')) return 'Hours approval';
    
    if (path.includes('/admin/volunteers')) return "Volunteer Management"; 
    // Reports & Logs
    if (path.includes('/admin/reports/audit')) return "Audit Trail";

    // Operations
    if (path.includes('/admin/operations/appointments/new')) return "New Appointment";
    if (path.includes('/admin/operations/appointments')) return "Appointments + Walk-ins";
    if (path.includes('/admin/operations/services')) return "Manage Services";
    if (path.includes('/admin/operations/appointments/walk-in')) return "Add Walk-in Visit"; 
    if (path.includes('/admin/operations/calendar')) return "Calendar"; 

    // Content Management 
    if (path.includes('/admin/content/pages')) return "Page";
    if (path.includes('/admin/content/template')) return "Page Template";
    if (path.includes('/admin/content/announcements')) return "Announcements";


    // People Management
    if (path.includes('/admin/people/careers')) return "Careers/Volunteers";
    if (path.includes('/admin/volunteers')) return "Volunteer Management"; 

    // Marketing & Engagement 
    if (path.includes('/admin/marketing/coupons')) return "Coupons Management";
    if (path.includes('/admin/marketing/donations')) return "Donations / Give settings";

    // Others
    if (path.includes('/admin/dashboard')) return "Admin Dashboard";
    
    return "Admin Dashboard";
  };

  // --- Search Functionality ---
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    const params = new URLSearchParams(location.search);
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    
    navigate({ search: params.toString() }, { replace: true });
  };

  return (
    <div className="flex min-h-screen bg-[#F8F9FA]"> 

      {/* Sidebar - Desktop pe fix hai, mobile pe toggle hota hai */}
      <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
      
      <div className="flex-1 flex flex-col lg:ml-[280px] min-w-0 transition-all duration-300">
        
        {/* Header Section */}
       <header className="h-20 bg-white border-b flex items-center px-6 justify-between sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-2xl p-2 text-gray-600">☰</button>
            <h1 className="text-lg md:text-[22px] font-bold text-[#1A202C] tracking-tight whitespace-nowrap">
              {getHeaderTitle()}
            </h1>
          </div>

<div className="flex items-center gap-3 md:gap-6"> 

            {/* Search Input - Hidden on very small screens */}
           <div className="relative hidden sm:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search" 
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-11 pr-4 py-2.5 bg-[#F8F9FA] border border-gray-100 rounded-xl w-[200px] md:w-[320px] text-sm focus:outline-none focus:ring-2 focus:ring-red-500/10 shadow-sm transition-all"
              />
            </div>

            {/* Icons Group */}
           <div className="flex items-center gap-2 md:gap-4">
              <button className="p-2.5 bg-white rounded-xl border border-gray-100 text-gray-400 hover:bg-gray-50 transition-colors relative shadow-sm">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2.5 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>

              {/* Profile Section */}
              <div className="flex items-center gap-3 pl-2 md:pl-4 border-l border-gray-100">
                <div className="text-right hidden md:block">
                  <p className="text-[14px] font-bold text-gray-900 leading-none">Lisa Moore</p>
                  <span className="text-[11px] text-[#D32F2F] font-bold mt-1 inline-block uppercase tracking-wider">Admin</span>
                </div>
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area - Yahan Audit page render hoga */}
      <main className="flex-1 p-6 overflow-x-hidden"> 
          <div className="max-w-full mx-auto">
            <Outlet />
          </div>
        </main> 

        <Footer />
      </div>
    </div>
  );
};