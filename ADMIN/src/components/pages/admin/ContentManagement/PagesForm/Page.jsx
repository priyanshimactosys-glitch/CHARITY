import React, { useState } from 'react';
import pageData from './pagedata.json'; 
// import { FaSearch, FaChevronLeft, FaChevronRight, FaCheck } from 'react-icons/fa';

import AddUserIcon from "../../../../../assets/icons/adduser.png";
import EditIcon from "../../../../../assets/icons/edit.png"; 
import VectorIcon from "../../../../../assets/icons/vector.png";
import DeleteIcon from "../../../../../assets/icons/delete.png";
import ViewIcon from "../../../../../assets/icons/view.png";
import PublishIcon from "../../../../../assets/icons/publish.png";
import UnpublishIcon from "../../../../../assets/icons/unpublish.png";
import DuplicateIcon from "../../../../../assets/icons/duplicate.png";
import { FaSearch, FaPlus, FaRegEye, FaChevronLeft, FaChevronRight, FaCheck } from 'react-icons/fa';
import { FiEdit2 } from "react-icons/fi";
import { MonitorDown } from "lucide-react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";



import CreatePage from './CreatePage'; 

const Page = () => {
  const [data] = useState(pageData);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);

  
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const filteredData = data.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-2 bg-[#f4f5f7] min-h-screen font-sans">
      
      
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="flex flex-1 min-w-[300px] border border-gray-200 rounded-md overflow-hidden">
          <div className="flex items-center px-4 bg-white text-gray-400">
            <FaSearch size={16} />
          </div>
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full py-2.5 outline-none text-[15px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-[#FAF5F8] px-8 py-2.5 text-gray-600 font-semibold border-l border-gray-200 hover:bg-pink-50 transition-colors cursor-pointer">
            Apply
          </button>
        </div>

        <div className="flex gap-3">
          <button className="bg-[#0160BC] text-white px-6 py-2.5 rounded-md font-bold text-sm cursor-pointer hover:bg-blue-700 transition-all shadow-sm">
            Manage Redirects
          </button>
          
          
        <button 
  onClick={() => setIsModalOpen(true)}
  className="bg-primary text-white px-6 py-2.5 rounded-md font-bold text-sm flex items-center gap-2 cursor-pointer hover:bg-red-700 transition-all shadow-sm"
>
  <img src={AddUserIcon} alt="add" className="w-4 h-4" /> 
  Create Page
</button> 
        </div>
      </div>

      
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <div className="overflow-visible relative">
          <table className="w-full text-left border-collapse border border-gray-50 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-[#F7EEFA] border-b border-gray-50">
                <th className="p-5 font-bold text-gray-800 text-[15px]">Type</th>
                <th className="p-5 font-bold text-gray-800 text-[15px]">Title</th>
                <th className="p-5 font-bold text-gray-800 text-[15px]">Menu/page</th>
                <th className="p-5 font-bold text-gray-800 text-[15px]">Last Update</th>
                <th className="p-5 font-bold text-gray-800 text-[15px] text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} className="border bg-[#FFF5F6] last:border-b-0 hover:bg-gray-50/40 transition-colors">
                  <td className="p-5 text-gray-600 text-[14px]">{item.type}</td>
                  <td className="p-5 text-gray-600 text-[14px]">{item.title}</td>
                  <td className="p-5 text-gray-600 text-[14px]">{item.menuPage}</td>
                  <td className="p-5 text-gray-600 text-[14px]">{item.lastUpdate}</td>
                  <td className="p-5 text-center relative">
                  <div className="flex justify-center items-center gap-4">
  <button 
    onClick={() => setActiveMenu(activeMenu === item.id ? null : item.id)}
    className="cursor-pointer transition-transform hover:scale-110"
  >
<img src={EditIcon} alt="edit" className="w-[18px] h-[18px] object-contain" />
  </button>  


  <button className="cursor-pointer transition-transform hover:scale-110">
    <img src={DeleteIcon} alt="delete" className="w-[22px] h-[22px]" />
  </button>
</div>
                    
                    {activeMenu === item.id && (
                      <>
                        <div className="fixed inset-0 z-10" onClick={() => setActiveMenu(null)}></div>
                        <div className="absolute right-14 top-14 w-52 bg-white border border-gray-200 rounded-lg shadow-2xl z-20 py-1 text-left">
                       {/* Edit */}
 <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-gray-700 text-[14px] cursor-pointer">
        <img src={VectorIcon} alt="vector-edit" className="w-4 h-4 object-contain" /> Edit
      </button>

                          <div className="h-[1px] bg-gray-100 mx-2"></div>
                        <button className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 text-gray-700 text-[14px] cursor-pointer">
    <div className="flex items-center gap-3">
      <img src={ViewIcon} alt="view" className="w-4 h-4" /> View
    </div>
    <FaCheck size={12} className="text-green-500" />
  </button> 


                          <div className="h-[1px] bg-gray-100 mx-2"></div>
                       
                       
                       <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-gray-700 text-[14px] cursor-pointer">
    <img src={DuplicateIcon} alt="duplicate" className="w-4 h-4" /> Duplicate
  </button>
                        
                     {/* Publish */}
  <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-gray-700 text-[14px] cursor-pointer">
    <img src={PublishIcon} alt="publish" className="w-4 h-4" /> Publish
  </button>

  {/* Unpublish */}
  <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-gray-700 text-[14px] cursor-pointer">
    <img src={UnpublishIcon} alt="unpublish" className="w-4 h-4" /> Unpublished
  </button>
                        </div>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-6 mb-4 flex justify-center items-center gap-2">
          <button className="p-2.5 border border-gray-200 rounded-md text-gray-400 hover:bg-gray-100 cursor-pointer transition-colors">
            <FaChevronLeft size={14} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-md bg-[#CC0000] text-white font-bold text-sm shadow-md cursor-pointer">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-sm cursor-pointer transition-colors">
            2
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-sm cursor-pointer transition-colors">
            3
          </button>
          <button className="p-2.5 border border-gray-200 rounded-md text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors">
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>

      
      <CreatePage 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </div>
  );
};

export default Page;