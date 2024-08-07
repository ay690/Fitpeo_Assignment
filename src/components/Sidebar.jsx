import React from "react";
import { FaHome } from "react-icons/fa";
import { TbDeviceIpadBolt } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";
import { BiBarChartSquare } from "react-icons/bi";
import { PiHandbagSimple, PiWindowsLogo } from "react-icons/pi";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="w-20 bg-gray-800 flex flex-col items-center py-4">
      <div className="text-2xl text-blue-500 mb-8">
        <PiWindowsLogo fill="#4169E1" />
      </div>
      <div className="flex flex-col flex-grow justify-between items-center py-4">
        <div className="flex flex-col items-center">
          <div className="group relative w-full flex items-center mb-6">
            <div className="absolute -left-5 h-full w-1 bg-transparent group-hover:bg-[#4169E1] transition-all duration-300"></div>
            <FaHome
              className="text-2xl p-2 hover:text-[#4169E1] transition-all duration-300 cursor-pointer"
              size={40}
            />
          </div>
          <div className="group relative w-full flex items-center mb-6">
            <div className="absolute -left-5 h-full w-1 bg-transparent group-hover:bg-[#4169E1] transition-all duration-300"></div>
            <BiBarChartSquare
              className="text-2xl p-2 hover:text-[#4169E1] transition-all duration-300 cursor-pointer"
              size={40}
            />
          </div>
          <div className="group relative w-full flex items-center mb-6">
            <div className="absolute -left-5 h-full w-1 bg-transparent group-hover:bg-[#4169E1] transition-all duration-300"></div>
            <TbDeviceIpadBolt
              className="text-2xl p-2 hover:text-[#4169E1] transition-all duration-300 cursor-pointer"
              size={40}
            />
          </div>
          <div className="group relative w-full flex items-center mb-6">
            <div className="absolute -left-5 h-full w-1 bg-transparent group-hover:bg-[#4169E1] transition-all duration-300"></div>
            <CiWallet
              className="text-2xl p-2 hover:text-[#4169E1] transition-all duration-300 cursor-pointer"
              size={40}
            />
          </div>
          <div className="group relative w-full flex items-center mb-6">
            <div className="absolute -left-5 h-full w-1 bg-transparent group-hover:bg-[#4169E1] transition-all duration-300"></div>
            <PiHandbagSimple
              className="text-2xl p-2 hover:text-[#4169E1] transition-all duration-300 cursor-pointer"
              size={40}
            />
          </div>
        </div>
        <div className="group relative w-full flex items-center mb-6">
          <div className="absolute -left-5 h-full w-1 bg-transparent group-hover:bg-[#4169E1] transition-all duration-300"></div>
          <RiLogoutCircleRLine
            className="text-2xl p-2 hover:text-[#4169E1] transition-all duration-300 cursor-pointer"
            size={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
