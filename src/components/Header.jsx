import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaSearch, FaEnvelope, FaBars } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    controls.start(menuOpen ? "closed" : "open");
  };

  return (
    <motion.div
      className="flex items-center justify-between p-4 bg-gray-800 sm:flex-row"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="relative w-full mt-5 mb-4 sm:w-auto sm:mb-0 sm:mt-0">
        <input
          type="text"
          className="w-auto py-2 pl-10 pr-4 text-gray-300 bg-gray-700 rounded-lg sm:w-auto focus:outline-none"
          placeholder="Search"
        />
        <FaSearch className="absolute text-gray-500 left-3 top-3" />
      </div>
      <motion.div
        className="items-center hidden space-x-4 sm:flex"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
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
      </motion.div>
      <div className="flex items-center justify-center space-x-4 sm:hidden">
        <FaBars
          className="p-2 text-xl rounded-full bg-slate-400 hover:cursor-pointer"
          size={30}
          onClick={toggleMenu}
        />
      </div>
      {menuOpen && (
        <motion.div
          className="absolute z-10 bg-gray-800 rounded-lg shadow-lg top-16 right-4 sm:hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.ul
            className="flex flex-col p-4 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.li
              className="flex items-center space-x-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <FaEnvelope
                className="p-2 text-xl rounded-full bg-slate-400 hover:cursor-pointer"
                size={30}
              />
              <span className="text-gray-300">Messages</span>
            </motion.li>
            <motion.li
              className="flex items-center space-x-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <CiSettings
                className="p-2 text-xl rounded-full bg-slate-400 hover:cursor-pointer"
                size={30}
              />
              <span className="text-gray-300">Settings</span>
            </motion.li>
            <motion.li
              className="relative flex items-center space-x-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.3 }}
            >
              <IoIosNotifications
                className="p-2 text-xl rounded-full bg-slate-400 hover:cursor-pointer"
                size={30}
              />
              <span className="text-gray-300">Notifications</span>
              <span className="absolute top-0 right-0 block h-2.5 w-2.5 bg-blue-500 rounded-full"></span>
            </motion.li>
            <motion.li
              className="flex items-center space-x-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.4 }}
            >
              <img
                src="https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg"
                alt="User Profile"
                className="w-10 h-10 rounded-full hover:cursor-pointer"
              />
              <span className="text-gray-300">Profile</span>
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Header;
