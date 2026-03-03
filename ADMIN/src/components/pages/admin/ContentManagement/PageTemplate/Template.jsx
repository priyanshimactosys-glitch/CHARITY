import React from "react";
import { ChevronDown, ChevronUp, Plus } from "lucide-react";
import logo from "../../../../../assets/icons/logo copy.png";
import children from "../../../../../assets/children.png";

const Template = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* ================= NAVBAR ================= */}
      <nav className="flex items-center justify-between px-16 py-4 shadow-sm">
        <div>
          <img src={logo} alt="logo" className="h-12 cursor-pointer" />
        </div>

        <ul className="flex gap-8 font-medium text-sm items-center">
          <li className="flex items-center gap-1 cursor-pointer hover:text-red-600 transition-all">
            Services <ChevronDown size={16} />
          </li>
          <li className="flex items-center gap-1 cursor-pointer hover:text-red-600 transition-all">
            Take Action <ChevronUp size={16} />
          </li>
          <li className="flex items-center gap-1 cursor-pointer hover:text-red-600 transition-all">
            About Us <ChevronUp size={16} />
          </li>
          <li className="cursor-pointer hover:text-red-600 transition-all">
            Why Us?
          </li>
        </ul>

        <div className="flex items-center gap-6 text-sm font-medium">
          <span className="cursor-pointer">🌐 English</span>
          <span className="cursor-pointer">Sign In</span>
          <span className="font-bold"> | </span>
          <button className="bg-red-600 text-white px-6 py-2 rounded-sm font-bold hover:bg-red-700 transition-all active:scale-95">
            Give 💧
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <div className="relative h-[220px]">
        <img
          src={children}
          alt="Child"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-20 text-white">
          <h1 className="text-3xl font-serif font-bold mb-2">
            Page Title Here
          </h1>
          <p className="opacity-90">
            Optional Subtitle or introductory text Goes Here
          </p>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-16 py-16 grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-serif font-bold mb-6">
            Main Content Section
          </h2>
          <h3 className="font-bold text-lg mb-4 text-gray-700">Heading One</h3>
          <p className="text-gray-600 mb-6">
            Your content goes here add text information and details here...
          </p>
          <ul className="space-y-2 mb-8 text-sm">
            <li>• Key Points or benefits</li>
            <li>• Key Points or benefits</li>
            <li>• Key Points or benefits</li>
          </ul>
          <div className="flex gap-4">
            <button className="bg-blue-700 text-white px-6 py-2.5 rounded-md font-semibold hover:opacity-90 transition-all">
              Call to Action
            </button>
            <button className="bg-red-600 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-red-700 transition-all">
              Secondary Button
            </button>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-gray-700">Feature Area</h3>
          <div className="bg-gray-200 w-full h-60 flex items-center justify-center text-gray-500 rounded-sm">
            Image or Video
          </div>
          <p className="mt-3 text-sm text-gray-500 italic">
            Highlight Something important
          </p>
        </div>
      </div>

      {/* ================= INFO SECTION ================= */}
      <div className="bg-gray-100 py-14 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-14">
          <h2 className="text-3xl font-serif font-bold mb-4">Info Section</h2>
          <div className="border-b border-gray-300 mb-10"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-300 p-6 text-center">
              <h4 className="font-bold border-b border-white pb-3 mb-6">
                Statistic / Fact
              </h4>
              <p className="text-3xl font-serif font-bold mb-2">123,456</p>
              <p className="text-sm text-gray-700">Description text here</p>
            </div>

            <div className="bg-gray-300 p-8 text-center">
              <h4 className="font-bold border-b border-white pb-3 mb-6">
                Our Mission
              </h4>
              <p className="text-sm italic mb-8">
                Brief statement of the lorem ipsum text.
              </p>
              <button className="bg-red-600 text-white px-6 py-2 text-xs font-bold uppercase hover:bg-red-700 transition-all">
                Learn More
              </button>
            </div>

            <div className="bg-gray-300 p-8 text-center">
              <h4 className="font-bold border-b border-white pb-3 mb-6">
                Key Programs
              </h4>
              <p className="text-sm italic mb-8">
                Brief statement of the lorem ipsum text.
              </p>
              <button className="bg-red-600 text-white px-6 py-2 text-xs font-bold uppercase hover:bg-red-700 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= TESTIMONIALS ================= */}
      <div className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-14">
          <h2 className="text-3xl font-serif font-bold mb-4 text-center">
            Testimonials
          </h2>
          <div className="border-b border-gray-300 mb-10"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-300 p-8 text-center">
              <p className="text-xl italic mb-6">
                Lorem Ipsum is simply dummy text of the printing industry.
              </p>
              <p className="font-bold text-sm">Name here</p>
            </div>

            <div className="bg-gray-300 p-8 text-center">
              <p className="text-xl italic mb-6">
                Lorem Ipsum is simply dummy text of the printing industry.
              </p>
              <p className="font-bold text-sm">Name here</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= GET INVOLVED ================= */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-16">
          <h2 className="text-3xl font-serif font-bold mb-4 text-center">
            Get Involved
          </h2>
          <div className="border-b border-gray-300 mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {["Volunteer", "Donate", "Events"].map((title) => (
              <div key={title} className="bg-gray-300 shadow-sm">
                <div className="py-4 border-b border-white text-center">
                  <h4 className="font-bold text-xl">{title}</h4>
                </div>
                <div className="p-8 text-center">
                  <p className="text-md text-gray-700 mb-6">
                    Lorem Ipsum is simply dummy text.
                  </p>
                  <button className="bg-red-600 text-white px-8 py-2 text-sm font-bold  hover:bg-red-700 transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button className="bg-red-600 text-white px-5 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-red-700 transition-all active:scale-95 shadow-md">
              <Plus size={20} className="text-white font-bold" />
              Add More
            </button>
          </div>

          <div className="flex justify-center gap-6 mt-16">
            <button className="w-48 py-3 bg-[#0160BC] text-white rounded-md font-semibold
             hover:bg-blue-800 transition-all active:scale-95 shadow-sm">
              Add New Section
            </button>

            <button className="w-48 py-3 bg-[#D90102] text-white rounded-md font-semibold
             hover:bg-red-700 transition-all active:scale-95 shadow-md">
              Save
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Template;
