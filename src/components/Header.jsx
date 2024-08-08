import React, { useState } from "react";
import { FaSearch, FaEnvelope, FaBars } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 sm:flex-row">
      <div className="relative w-full mb-4 sm:w-auto sm:mb-0">
        <input
          type="text"
          className="w-auto py-2 pl-10 pr-4 text-gray-300 bg-gray-700 rounded-lg sm:w-auto focus:outline-none"
          placeholder="Search"
        />
        <FaSearch className="absolute text-gray-500 left-3 top-3" />
      </div>
      <div className="items-center hidden space-x-4 sm:flex">
        <FaEnvelope
          className="p-2 text-xl rounded-full bg-slate-400 hover:cursor-pointer"
          size={30}
        />
        <CiSettings
          className="p-2 text-xl rounded-full bg-slate-400 hover:cursor-pointer"
          size={30}
        />
        <div className="relative">
          <IoIosNotifications
            className="p-2 text-xl rounded-full bg-slate-400 hover:cursor-pointer"
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
      <div className="flex items-center space-x-4 sm:hidden">
        <FaBars
          className="p-2 text-xl rounded-full bg-slate-400 hover:cursor-pointer"
          size={30}
          onClick={toggleMenu}
        />
      </div>
      {menuOpen && (
        <div className="absolute z-10 bg-gray-800 rounded-lg shadow-lg top-16 right-4 sm:hidden">
          <ul className="flex flex-col p-4 space-y-2">
            <li className="flex items-center space-x-2">
              <FaEnvelope
                className="p-2 text-xl rounded-full bg-slate-400 hover:cursor-pointer"
                size={30}
              />
              <span className="text-gray-300">Messages</span>
            </li>
            <li className="flex items-center space-x-2">
              <CiSettings
                className="p-2 text-xl rounded-full bg-slate-400 hover:cursor-pointer"
                size={30}
              />
              <span className="text-gray-300">Settings</span>
            </li>
            <li className="relative flex items-center space-x-2">
              <IoIosNotifications
                className="p-2 text-xl rounded-full bg-slate-400 hover:cursor-pointer"
                size={30}
              />
              <span className="text-gray-300">Notifications</span>
              <span className="absolute top-0 right-0 block h-2.5 w-2.5 bg-blue-500 rounded-full"></span>
            </li>
            <li className="flex items-center space-x-2">
              <img
                src="https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg"
                alt="User Profile"
                className="w-10 h-10 rounded-full hover:cursor-pointer"
              />
              <span className="text-gray-300">Profile</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
