import React from 'react';
import { IoChevronForward } from "react-icons/io5";
import settingsData from '../data/System.json';

const SystemSetting = () => {
  return (
    <div className="w-full bg-white rounded-none shadow-sm p-5 mt-6">
      
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 font-serif">
          System Settings
        </h1>
        <div className="w-6 h-[3px] bg-primary rounded-full "></div>
      </div>

     
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        {settingsData.map((item, index) => (
          <div 
            key={item.id} 
            className={`flex items-center justify-between p-4 transition-colors hover:bg-gray-50 cursor-pointer ${
              index !== settingsData.length - 1 ? 'border-b border-gray-200' : ''
            }`}
          >
            
            <div>
              <h3 className="text-[17px] font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm ">
                {item.description}
              </p>
            </div>

            
            <div className="text-gray-400">
              <IoChevronForward size={22} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemSetting;