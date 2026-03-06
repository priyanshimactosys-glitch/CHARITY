import React from 'react';
import { IoChevronDown, IoChevronForward } from "react-icons/io5";
import { LiaCalendarCheck } from "react-icons/lia";
import vsearch from "../assets/vsearch.png";
import handheart from "../assets/handheart.png";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import logsData from '../data/logs.json';

const Logs = () => {

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'Calendar': return <LiaCalendarCheck size={26} />;
      case 'Heart': return <img src={handheart} alt="heart" className="gap-1 w-5 h-5" />;
      case 'Audit': return <img src={vsearch} alt="audit" className="w-6 h-6" />;
      default: return <img src={vsearch} alt="audit" className="gap-1 w-6 h-6" />;
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