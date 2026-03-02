// src/components/ActionButtons.jsx
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import btn3 from "../assets/btn3.png";
import btn4 from "../assets/btn4.png";

const ActionBtn = () => {
  return (
    <div className="bg-white max-w-6xl h-24 shadow-xl rounded-none p-6 mt-6">
      {/* Buttons Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <button className="flex items-center justify-center gap-2 bg-[#0160BC] text-white
         font-semibold py-3 rounded-lg shadow-md hover:bg-blue-800 transition cursor-pointer">
          <FaPlusCircle className="text-lg" />
          Add Volunteer
        </button>

        <button className="flex items-center justify-center gap-2 bg-primary text-white
         font-semibold py-3 rounded-lg shadow-md hover:bg-red-600 transition cursor-pointer">
          <FaCircleCheck className="text-lg" />
          Approve Hours
        </button>

        <button className="flex items-center justify-center gap-2 bg-[#C69C72] text-white
         font-semibold py-3 rounded-lg shadow-md hover:bg-[#A52A] transition cursor-pointer">
          <img
                  src={btn3}
                  alt="btn"
                  className="text-lg"
            /> 
          Post Announcement
        </button>

        <button className="flex items-center justify-center gap-2 bg-[#018E42] text-white
         font-semibold py-3 rounded-lg shadow-md hover:bg-green-800 transition cursor-pointer">
          <img
                  src={btn4}
                  alt="btn"
                  className="text-lg"
            /> 
          Create Coupon
        </button>
      </div>
    </div>
  );
};

export default ActionBtn;
