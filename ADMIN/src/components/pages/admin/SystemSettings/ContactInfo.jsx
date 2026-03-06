import React from 'react';
import data from './contactdata.json';

const ContactInfo = () => {
  const inputStyle = "w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-blue-400 transition-all placeholder:text-gray-400 text-gray-600 shadow-sm";
  const labelStyle = "font-bold text-gray-800 text-md mb-1";

  return (
    <div className="min-h-screen bg-gray-100  p-8 md:p-4 font-serif">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        
        {/* Section 1: Basic Info */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            {data.topFields.map((field) => (
              <div key={field.id} className="flex flex-col">
                <label className={labelStyle}>{field.label}</label>
                <input type="text" placeholder={field.placeholder} className={inputStyle} />
              </div>
            ))}
            
            <div className="flex flex-col md:col-span-2">
              <label className={labelStyle}>{data.faqLink.label}</label>
              <input type="text" placeholder={data.faqLink.placeholder} className={inputStyle} />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className={labelStyle}>{data.description.label}</label>
              <textarea 
                placeholder={data.description.placeholder} 
                className={`${inputStyle} h-24 resize-none`}
              />
            </div>
          </div>
        </div>

        {/* Section 2: Hours & Socials */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
         
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 inline-block">Hours</h2>
            <div className="w-6 border-b-2 border-red-600 "></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            {data.hours.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <label className={labelStyle}>{item.day}</label>
                <input type="text" placeholder={item.placeholder} className={inputStyle} />
              </div>
            ))}

            <div className="flex flex-col md:col-span-2">
              <label className={labelStyle}>Sunday</label>
              <input type="text" placeholder="Close" className={inputStyle} />
            </div>

            {/* Social Links */}
            {data.socialLinks.map((social, idx) => (
              <div key={idx} className="flex flex-col">
                <label className={labelStyle}>{social.label}</label>
                <input type="text" placeholder={social.placeholder} className={inputStyle} />
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-2 pb-10">
          <button className="bg-[#0160BC] text-white px-12 py-3 rounded-md font-bold text-lg hover:bg-blue-900 transition-all cursor-pointer shadow-md active:scale-95 min-w-[160px]">
            Cancel
          </button>
          <button className="bg-primary text-white px-12 py-3 rounded-md font-bold text-lg hover:bg-red-700 transition-all cursor-pointer shadow-md active:scale-95 min-w-[160px]">
            Save
          </button>
        </div>

      </div>
    </div>
  );
};

export default ContactInfo;