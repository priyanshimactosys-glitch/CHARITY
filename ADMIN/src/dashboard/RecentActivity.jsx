import data from "../data/recentActivity.json";
import { IoIosArrowForward } from "react-icons/io";

const RecentActivity = () => {
  return (
    <div className="bg-white shadow-xl rounded-none p-6 w-full mt-8">
      
      <div className="flex justify-between items-center mb-4 pb-3">
        <h2 className="text-xl font-bold text-gray-800 relative inline-block">
        Recent Activity
        <span className="absolute left-0 -bottom-1 w-8 h-1 bg-primary rounded"></span>
        </h2>
        <button
          className="bg-[#F7EEFA] text-md font-bold text-gray-800 px-4 py-2 rounded-md
          hover:bg-gray-300 transition cursor-pointer"
        >
          Viewed Now
        </button>
      </div>

      
      <div
        className="flex justify-between items-center bg-[#D901021A] 
        text-gray-700 font-semibold px-4 py-3 rounded-md mb-6"
      >
        <div>
          <span className="text-lg text-black font-bold">Pending </span>
          <span className="text-sm">
            Volunteers Hours pending approval
          </span>
        </div>

        <IoIosArrowForward className="text-black text-xl" />
      </div>

      
      <div>
        {data.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-gray-50 p-4 border-b border-gray-300"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full
                bg-blue-400 text-white font-bold"
              >
                {item.profile}
              </div>
              <div>
                <p className="text-gray-800 font-bold">{item.name}</p>
                <p className="text-gray-700 text-sm">{item.status}</p>
              </div>
            </div>

            <span className="text-gray-500 text-xs">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;