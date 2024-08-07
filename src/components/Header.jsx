import React from "react";
import { FaSearch, FaEnvelope } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800">
      <div className="relative">
        <input
          type="text"
          className="bg-gray-700 text-gray-300 pl-10 pr-4 py-2 rounded-lg focus:outline-none"
          placeholder="Search"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-500" />
      </div>
      <div className="flex items-center space-x-4">
        <FaEnvelope
          className="text-xl bg-slate-400 rounded-full p-2 hover:cursor-pointer"
          size={30}
        />
        <CiSettings
          className="text-xl bg-slate-400 rounded-full p-2 hover:cursor-pointer"
          size={30}
        />
        <div className="relative">
          <IoIosNotifications
            className="text-xl bg-slate-400 rounded-full p-2 hover:cursor-pointer"
            size={30}
          />
          <span className="absolute top-0 right-0 block h-2.5 w-2.5 bg-blue-500 rounded-full"></span>
        </div>
        <img
          src="https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg"
          alt="User Profile"
          className="w-10 h-10 rounded-full hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
