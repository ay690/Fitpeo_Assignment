import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { TbDeviceIpadBolt } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";
import { BiBarChartSquare } from "react-icons/bi";
import { PiHandbagSimple, PiWindowsLogo } from "react-icons/pi";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Sidebar = () => {
  const [clickedIcon, setClickedIcon] = useState("home");

  const handleClick = (icon) => {
    setClickedIcon(icon);
  };

  const iconClasses = (icon) =>
    `text-2xl p-2 transition-all duration-300 cursor-pointer ${
      clickedIcon === icon ? "text-[#4169E1]" : ""
    }`;

  return (
    <div className="w-20 bg-gray-800 flex flex-col items-center py-4">
      <div className="text-2xl text-blue-500 mb-8">
        <PiWindowsLogo fill="#4169E1" />
      </div>
      <div className="flex flex-col flex-grow justify-between items-center py-4">
        <div className="flex flex-col items-center">
          <div
            className="group relative w-full flex items-center mb-6"
            onClick={() => handleClick("home")}
          >
            <div
              className={`absolute -left-5 h-full w-1 transition-all duration-300 ${
                clickedIcon === "home" ? "bg-[#4169E1]" : "bg-transparent"
              }`}
            ></div>
            <FaHome className={iconClasses("home")} size={40} />
          </div>
          <div
            className="group relative w-full flex items-center mb-6"
            onClick={() => handleClick("barChart")}
          >
            <div
              className={`absolute -left-5 h-full w-1 transition-all duration-300 ${
                clickedIcon === "barChart" ? "bg-[#4169E1]" : "bg-transparent"
              }`}
            ></div>
            <BiBarChartSquare className={iconClasses("barChart")} size={40} />
          </div>
          <div
            className="group relative w-full flex items-center mb-6"
            onClick={() => handleClick("ipadBolt")}
          >
            <div
              className={`absolute -left-5 h-full w-1 transition-all duration-300 ${
                clickedIcon === "ipadBolt" ? "bg-[#4169E1]" : "bg-transparent"
              }`}
            ></div>
            <TbDeviceIpadBolt className={iconClasses("ipadBolt")} size={40} />
          </div>
          <div
            className="group relative w-full flex items-center mb-6"
            onClick={() => handleClick("wallet")}
          >
            <div
              className={`absolute -left-5 h-full w-1 transition-all duration-300 ${
                clickedIcon === "wallet" ? "bg-[#4169E1]" : "bg-transparent"
              }`}
            ></div>
            <CiWallet className={iconClasses("wallet")} size={40} />
          </div>
          <div
            className="group relative w-full flex items-center mb-6"
            onClick={() => handleClick("handbag")}
          >
            <div
              className={`absolute -left-5 h-full w-1 transition-all duration-300 ${
                clickedIcon === "handbag" ? "bg-[#4169E1]" : "bg-transparent"
              }`}
            ></div>
            <PiHandbagSimple className={iconClasses("handbag")} size={40} />
          </div>
        </div>
        <div
          className="group relative w-full flex items-center mb-6"
          onClick={() => handleClick("logout")}
        >
          <div
            className={`absolute -left-5 h-full w-1 transition-all duration-300 ${
              clickedIcon === "logout" ? "bg-[#4169E1]" : "bg-transparent"
            }`}
          ></div>
          <RiLogoutCircleRLine className={iconClasses("logout")} size={40} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
