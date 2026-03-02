
import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import star from "../assets/star.png";

const CardStars =() => {
    return(
        <>
          <img
        src={star}
        alt="star"
        className="absolute top-2 right-12 w-6 h-6 color-[#FFFFFF99]
        "
      />
      <img
        src={star}
        alt="star"
        className="absolute top-9 right-2 -translate-y-1/2 w-9 h-9 color-[#FFFFFF99]"
      />
      <img
        src={star}
        alt="star"
        className="absolute bottom-5 left-28 w-13 h-13 color-[#FFFFFF99]"
      />
      <img
        src={star}
        alt="star"
        className="absolute bottom-2 left-12  w-14 h-14 color-[#FFFFFF99]"
      />
        </>
    )
  }

const StasCard = () => {
  return (
    <div className="bg-white max-w-6xl h-auto shadow-xl rounded-none p-6 mt-4">
      {/* Heading Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
        
      {/* Card 1 - Today's Appointments */}
      <div className="bg-[#F7EEFA] w-48 h-28 shadow-md rounded-lg p-5 relative">
         <CardStars />
          <div className="flex justify-between items-start relative z-10">
            <h2 className="font-bold text-gray-800 flex items-start">
              <span className="text-3xl">1</span>
              <span className="text-4xl leading-none">5</span>
            </h2>
            <IoIosCheckmark className="text-green-600 text-4xl" />
          </div>
          <p className="text-gray-600 relative z-10 text-sm font-medium mt-2">Today's Appointments</p>
        </div>

        {/* Card 2 - Active Volunteers */}
        <div className="bg-[#C69C7233] w-48 h-28 shadow-md rounded-lg p-5 relative">
          <CardStars />
          <h2 className="font-bold text-gray-800 flex items-end leading-none">
            <span className="text-3xl">1</span>
            <span className="text-3xl">2</span>
            <span className="text-4xl -mt-2">8</span>
          </h2>
          <p className="text-gray-600 relative z-10 text-sm font-medium mt-2">Active Volunteers</p>
        </div>

        {/* Card 3 - Pending Hours */}
        <div className="bg-[#AFD2E933] w-48 h-28 shadow-md rounded-lg p-5 relative">
          <CardStars />
          <h2 className="text-3xl font-bold text-gray-800">12</h2>
          <p className="text-gray-600 relative z-10 text-sm font-medium mt-2">Pending Hours</p>
        </div>

        {/* Card 4 - Job Applications */}
        <div className="bg-[#FFBC4233] w-48 h-28 shadow-md rounded-lg p-5 relative">
          <CardStars />
          <h2 className="text-3xl font-bold text-gray-800">2</h2>
          <p className="text-gray-600 relative z-10 text-sm font-medium mt-2">Job Applications</p>
        </div>

        {/* Card 5 - Total Logged Hours */}
        <div className="bg-[#018E4233] w-48 h-28 shadow-md rounded-lg p-5 relative">
          <CardStars />
          <h2 className="font-bold text-gray-800 flex items-end leading-none relative z-10">
           <span className="text-3xl">1,</span>
           <span className="text-3xl">2</span>
           <span className="text-4xl -mt-2">6</span>
           <span className="text-3xl">0</span>
           <span className="ml-2 text-3xl">hrs</span>
          </h2>
          <p className="text-gray-600 relative z-10 text-sm font-medium mt-2">Total Logged Hours</p>
        </div>
      </div>
    </div>
  );
};

export default StasCard;
