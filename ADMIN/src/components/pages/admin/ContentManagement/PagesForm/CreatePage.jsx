import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import EditIconImg from "../../../../../assets/icons/edit.png";
const CreatePage = ({ isOpen, onClose }) => {
  const [selectedType, setSelectedType] = useState("notification");

  if (!isOpen) return null;

  const stopProp = (e) => e.stopPropagation();

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-[2px] p-4 font-sans">
      <div className="bg-[#FAF9FB] w-full max-w-[750px] max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center px-8 py-5 bg-[#F7EEFA] border-b border-gray-100">
          <h2 className="text-2xl font-serif font-bold text-gray-900">
            Create Page
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 transition-all p-1 rounded-full hover:bg-gray-50"
          >
            <IoCloseOutline size={30} />
          </button>
        </div>

        <div className="p-8 flex-1 overflow-y-auto">
          <p className="text-gray-600 mb-6 text-[15px] font-medium">
            Choose the type of page you would like to create
          </p>

          <div className="space-y-5">
            <div
              onClick={() => setSelectedType("notification")}
              className={`p-5 rounded-xl border-2 transition-all cursor-pointer ${selectedType === "notification" ? "border-green-500 bg-white shadow-sm" : "border-gray-100 bg-white"}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`mt-1 min-w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center ${selectedType === "notification" ? "border-green-500 bg-green-500" : "border-gray-300"}`}
                >
                  {selectedType === "notification" && (
                    <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-0.5">
                    Header-Menu
                  </h3>
                  <p className="text-gray-500 text-[13px] mb-4">
                    A Navigation title displays in the website header as a
                    container for sub-menus
                  </p>

                  <div className="w-full" onClick={stopProp}>
                    <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                      Title
                    </label>
                    <input
                      type="text"
                      placeholder="Enter menu title"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              onClick={() => setSelectedType("submenu")}
              className={`p-5 rounded-xl border-2 transition-all cursor-pointer ${selectedType === "submenu" ? "border-green-500 bg-white shadow-sm" : "border-gray-100 bg-white"}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`mt-1 min-w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center ${selectedType === "submenu" ? "border-green-500 bg-green-500" : "border-gray-300"}`}
                >
                  {selectedType === "submenu" && (
                    <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-0.5">
                    Sub-Menu
                  </h3>
                  <p className="text-gray-500 text-[13px] mb-4">
                    A page that displays under a selected header menu with a
                    short description
                  </p>

                  <div className="space-y-4" onClick={stopProp}>
                    <div>
                      <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                        Title
                      </label>
                      <input
                        type="text"
                        placeholder="Enter sub-menu title..."
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                        Header menu
                      </label>
                      <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none bg-white">
                        <option>Choose header menu...</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. General Page */}
            <div
              onClick={() => setSelectedType("general")}
              className={`p-5 rounded-xl border-2 transition-all cursor-pointer ${selectedType === "general" ? "border-green-500 bg-white shadow-sm" : "border-gray-100 bg-white"}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`mt-1 min-w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center ${selectedType === "general" ? "border-green-500 bg-green-500" : "border-gray-300"}`}
                >
                  {selectedType === "general" && (
                    <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-0.5">
                    General Page
                  </h3>
                  <p className="text-gray-500 text-[13px] mb-4">
                    A standalone page not linked in the menu, accessible only
                    via a direct link.
                  </p>

                  <div className="space-y-4" onClick={stopProp}>
                    <div>
                      <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                        Title
                      </label>
                      <input
                        type="text"
                        placeholder="Enter page title..."
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                        Url
                      </label>
                      <div className="relative flex items-center">
                         
                        <input
                          type="text"
                          value="generated-page-url"
                          readOnly
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-gray-50 pr-10 text-gray-400 text-sm outline-none"
                        />
                        <img
                          src={EditIconImg}
                          alt="edit"
                          className="absolute right-3 w-4 h-4 cursor-pointer opacity-70 hover:opacity-100 transition-opacity" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6 mt-12 mb-4">
            <button
              onClick={onClose}
              className="px-12 py-3 bg-[#005CB9] cursor-pointer text-white rounded-lg font-bold hover:bg-blue-700 transition-all text-[15px] shadow-lg active:scale-95"
            >
              Cancel
            </button>
            <button className="px-12 py-3 bg-primary cursor-pointer text-white rounded-lg font-bold hover:bg-red-700 transition-all text-[15px] shadow-lg active:scale-95">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
