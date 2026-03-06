import React from 'react';

const FooterContent = () => {
  return (
    <div className=" bg-gray-100 min-h-screen space-y-6">
      
      {/* --- Section 1: Heading & About Text (Card 1) --- */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="mb-4">
          <label className="block text-gray-800 font-semibold mb-1.5 text-md">Heading</label>
          <input 
            type="text" 
            placeholder="Our mission" 
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-1
             focus:ring-blue-400 text-gray-600 placeholder-gray-400 bg-white text-sm" 
          />
        </div>
        <div>
          <label className="block text-gray-800 font-semibold mb-1.5 text-md">About Text</label>
          <textarea 
            rows="4" 
            placeholder="Enter Content" 
            className="w-full p-2 text-sm border border-gray-400 rounded focus:outline-none focus:ring-1
             focus:ring-blue-400 text-gray-600 placeholder-gray-400 bg-white"
          ></textarea>
        </div>
      </div>

      {/* --- Section 2: Social Media Links (Card 2) --- */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800">Social Media Links</h2>
          <div className="h-[3px] bg-primary w-8"></div> 
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <label className="block text-gray-800 font-semibold mb-1.5 text-md">Facebook link</label>
            <input type="text" placeholder="Add link" className="w-full p-2 border border-gray-400
             rounded focus:outline-none focus:ring-1 focus:ring-blue-400 text-gray-600 text-sm" />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-1.5 text-md">Twitter Link</label>
            <input type="text" placeholder="Add link" className="w-full p-2 border border-gray-400 
            rounded focus:outline-none focus:ring-1 focus:ring-blue-400 text-gray-600 text-sm" />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-1.5 text-md">YouTube link</label>
            <input type="text" placeholder="Add link" className="w-full p-2 border border-gray-400 
            rounded focus:outline-none focus:ring-1 focus:ring-blue-400 text-gray-600 text-sm" />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-1.5 text-md">Link din Link</label>
            <input type="text" placeholder="Add link" className="w-full p-2 border border-gray-400 
            rounded focus:outline-none focus:ring-1 focus:ring-blue-400 text-gray-600 text-sm" />
          </div>
        </div>
      </div>

      {/* --- Section 3: Contact Details (Card 3) --- */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800">Contact details</h2>
          <div className="h-[3px] bg-primary w-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-4">
          <div>
            <label className="block text-gray-800 font-semibold mb-1.5 text-md">Phone Number</label>
            <input type="text" placeholder="(203) 555-1234" className="w-full p-2 border border-gray-400
             rounded focus:outline-none focus:ring-1 focus:ring-blue-400 text-gray-600 text-sm" />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-1.5 text-md">Email Address</label>
            <input type="email" placeholder="info@vpetersinitative.org" className="w-full p-2 border border-gray-400 
            rounded focus:outline-none focus:ring-1 focus:ring-blue-400 text-gray-600 text-sm" />
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <label className="block text-gray-800 font-semibold mb-1.5 text-md">Address</label>
          <input 
            type="text" 
            placeholder="459 Community Center Dr, Seattle, WA 98109 " 
            className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-blue-400
             text-gray-600 text-sm" 
          />
        </div>
      </div>

    </div>
  );
};

export default FooterContent;