import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

const UploadCard = ({ title, id, currentFileName, onFileSelect }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      
      <label className="text-gray-600 font-medium text-lg mb-1">{title}</label>
      
      
      <div className="w-full  max-w-[520px] h-[156px] border-2 border-dashed border-blue-300 rounded-lg bg-[#EEF8FF]
       flex flex-col items-center justify-center transition-colors hover:bg-[#f0f9ff] ">
        
       
        <div className="relative mb-1 text-blue-400">
          <ImageIcon size={48} strokeWidth={1.2} />
          
          <div className="absolute -top-1 -right-1 bg-[#f0f9ff] p-0.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </div>
        </div>

        
        <p className="text-gray-600 mb-1 text-[15px]">
          {currentFileName ? currentFileName : "No files Choose"}
        </p>

        
        <label
          htmlFor={id}
          className="bg-[#27788D] hover:bg-[#165f6d] text-white px-8 py-2 rounded-md cursor-pointer transition-all shadow-sm text-[15px] font-medium"
        >
          Choose File
        </label>

        {/* file choose */}
        <input
          type="file"
          id={id}
          className="hidden"
          onChange={(e) => onFileSelect(e, id)}
          accept="image/*"
        />
      </div>
    </div>
  );
};

const LogoBranding = () => {
  const [fileNames, setFileNames] = useState({
    navbarLogo: "",
    footerLogo: "",
    favicon: "",
  });

  const handleFileChange = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      setFileNames(prev => ({ ...prev, [id]: file.name }));
    }
  };

  return (
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-xl
       shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-gray-100">
        
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <UploadCard 
            title="Navbar logo" 
            id="navbarLogo" 
            currentFileName={fileNames.navbarLogo} 
            onFileSelect={handleFileChange} 
          />

          <UploadCard 
            title="Footer Logo" 
            id="footerLogo" 
            currentFileName={fileNames.footerLogo} 
            onFileSelect={handleFileChange} 
          />

          <div className="md:col-span-1">
            <UploadCard 
              title="Favicon" 
              id="favicon" 
              currentFileName={fileNames.favicon} 
              onFileSelect={handleFileChange} 
            />
          </div>
          
        </div>
      </div>
    
  );
};

export default LogoBranding;