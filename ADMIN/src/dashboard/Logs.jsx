import React from 'react';
import { IoCalendarOutline, IoChevronDown, IoChevronForward } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import logsData from '../data/logs.json';

const Logs = () => {

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'Calendar': return <IoCalendarOutline size={22} />;
      case 'Heart': return <FaRegHeart size={20} />;
      case 'Audit': return <HiOutlineDocumentSearch size={22} />;
      default: return <HiOutlineDocumentSearch size={22} />;
    }
  };

  return (
    
    <div className="w-full bg-white rounded-none shadow-sm p-4 mt-6">
      
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900 font-serif">
          Reports & Logs
        </h1>
        <div className="w-8 h-[3px] bg-primary rounded-full"></div>
      </div>

      
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        {logsData.map((item, index) => (
          <div 
            key={item.id} 
            className={`flex items-center justify-between p-4 transition-all hover:bg-gray-50 cursor-pointer ${
              index !== logsData.length - 1 ? 'border-b border-gray-200' : ''
            }`}
          >

            {/* Left Side */}
            <div className="flex items-start gap-2">
              <div className="text-gray-800 mt-1">
                {renderIcon(item.icon)}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">
                    {item.title}
                  </span>
                  <span className="text-gray-500 font-medium">
                    {item.subtitle}
                  </span>
                </div>

                <p className="text-gray-500 text-sm mt-1">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center">
              {item.hasButton ? (
                <button className="bg-primary cursor-pointer hover:bg-red-700 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm font-semibold transition-colors">
                  {item.buttonText}
                  <IoChevronDown size={16} />
                </button>
              ) : (
                <IoChevronForward className="text-gray-300" size={24} />
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Logs;