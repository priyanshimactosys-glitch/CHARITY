import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import logo from '../../assets/icons/logo copy.png';
import Coupons from '../pages/admin/MarketingEngagement/Coupons';

// Icons Import
import homeIcon from "../../assets/icons/home.svg"; 
import opsIcon from "../../assets/icons/operations.svg"; 
import peopleIcon from "../../assets/icons/peoplemangement.svg"; 
import contentIcon from "../../assets/icons/content.svg"; 
import volunteerIcon from "../../assets/icons/volunteer.svg"; 
import marketingIcon from "../../assets/icons/marketing.svg"; 
import reportsIcon from "../../assets/icons/reports.svg"; 
import settingsIcon from "../../assets/icons/system.svg"; 

export const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openDropdown, setOpenDropdown] = useState(''); 
  const [isCouponOpen, setIsCouponOpen] = useState(false); 

  const menus = [
    { name: 'Dashboard', icon: homeIcon, path: '/admin/dashboard', hasDropdown: false },
    { 
      name: 'Operations', 
      icon: opsIcon, 
      path: '#', 
      hasDropdown: true,
      subMenus: [
        { name: 'Services Management', path: '/admin/operations/services' },
        { name: 'Appointments + Walk-ins', path: '/admin/operations/appointments' },
        { name: 'Calendar', path: '/admin/operations/calendar' }
      ] 
    },
    { 
      name: 'People Management', 
      icon: peopleIcon, 
      path: '#', 
      hasDropdown: true,
      subMenus: [
        { name: 'Users ', path: '/admin/people/users' },
        { name: 'Career/Volunteers', path: '/admin/people/careers' }
      ]
    },
    { 
      name: 'Content Management', 
      icon: contentIcon, 
      path: '#', 
      hasDropdown: true,
      subMenus: [
        { name: 'Pages', path: '/admin/content/pages' },
        { name: 'Page template', path: '/admin/content/template' },
        { name: 'Announcements', path: '/admin/content/announce' }
      ]
    },
    { 
      name: 'Volunteer Management', 
      icon: volunteerIcon, 
      path: '#', 
      hasDropdown: true,
      subMenus: [
        { name: 'Availability', path: '/admin/volunteers/availability' },
        { name: 'Volunteer schedules', path: '/admin/volunteers/schedules' },
        { name: 'Hours approval', path: '/admin/volunteers/approval' }
      ]
    },
    { 
      name: 'Marketing & Engagement', 
      icon: marketingIcon, 
      path: '#', 
      hasDropdown: true,
      subMenus: [
        { name: 'Coupons management', path: '/admin/marketing/coupons' },
        { name: 'Donations / Give settings', path: '/admin/marketing/donations' }
      ]
    },
    { 
      name: 'Reports & Logs', 
      icon: reportsIcon, 
      path: '#', 
      hasDropdown: true,
      subMenus: [
        { name: 'Audit trails', path: '/admin/reports/audit' }
      ]
    },
    { 
      name: 'System Settings', 
      icon: settingsIcon, 
      path: '#', 
      hasDropdown: true,
      subMenus: [
        { name: 'Organization info', path: '/admin/settings/org-info' },
        { name: 'Contact info', path: '/admin/settings/contact-info' },
        { name: 'Logo & branding', path: '/admin/settings/branding' },
        { name: 'Footer content', path: '/admin/settings/footer' },
        { name: 'Roles & permissions', path: '/admin/settings/roles' }
      ]
    },
  ];

  return ( 
    <> 
   <aside className={`
      fixed inset-y-0 left-0 z-50
      w-72 bg-white border-r border-gray-100 
      flex flex-col 
      h-screen
      transition-transform duration-300 
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
      lg:translate-x-0
    `}>
      
      {/* Logo Section */}
      <div className="pt-10 pb-6 flex justify-center items-center">
        <img src={logo} alt="Logo" style={{ width: '150px', height: 'auto', objectFit: 'contain' }} />
      </div>   

      <nav className="flex-1 px-4 overflow-y-auto pt-6 pb-10 scrollbar-hide">
        <div className="space-y-2">
          {menus.map((m) => (
            <div key={m.name}>
              <NavLink 
                to={m.path} 
                onClick={(e) => {
                  if (m.hasDropdown) {
                    e.preventDefault();
                    setOpenDropdown(openDropdown === m.name ? '' : m.name);
                  }
                }}
                className={({ isActive }) => `
                  flex items-center justify-between px-4 py-3.5 rounded-xl font-medium transition-all group
                  ${(isActive && m.path !== '#') || (m.hasDropdown && openDropdown === m.name)
                    ? 'bg-[#D32F2F] text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-gray-50'
                  }
                `}
              > 


                <div className="flex items-center gap-4">
                  <img 
                    src={m.icon} 
                    alt={m.name}
                    className={`w-5 h-5 object-contain transition-all ${
                      (openDropdown === m.name || (m.path !== '#' && window.location.pathname.includes(m.path))) 
                        ? 'brightness-0 invert' 
                        : 'opacity-70 group-hover:opacity-100'
                    }`}
                  />
                  <span className="text-[14px]">{m.name}</span>
                </div>
                
                {m.hasDropdown && (
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform ${openDropdown === m.name ? 'rotate-180 text-white' : 'text-gray-400'}`} 
                  />
                )}
              </NavLink> 

              {/* Submenu rendering */}
              {m.hasDropdown && openDropdown === m.name && (
                <div className="mt-2 ml-12 space-y-1 transition-all duration-300">
                  {m.subMenus?.map((sub) => (
                    <NavLink
                      key={sub.name}
                      to={sub.path}
                    onClick={(e) => {
                        if (sub.name === 'Coupons management') {
                          e.preventDefault(); 
                          setIsCouponOpen(true); 
                        }
                      }}
                      className={({ isActive }) => `
                        block py-2 px-4 text-sm rounded-lg transition-all
                        ${isActive ? 'text-[#D32F2F] font-bold bg-red-50' : 'text-gray-500 hover:text-gray-800'}
                      `}
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </aside> 
    <Coupons isOpen={isCouponOpen} onClose={() => setIsCouponOpen(false)} /> 
    </>
  );
};