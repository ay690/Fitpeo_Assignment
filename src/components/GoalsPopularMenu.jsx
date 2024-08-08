import React from "react";
import { MdGpsFixed } from "react-icons/md";
import { FaHamburger } from "react-icons/fa";
import { BiDish } from "react-icons/bi";
import { MenuItem } from "./index";
import { motion } from "framer-motion";

const GoalsPopularMenu = () => {
  return (
    <motion.div
      className="bg-gray-700 p-5 md:p-7 rounded-lg w-full lg:w-1/4 lg:min-h-[300px]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="flex flex-col gap-6 md:gap-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <MenuItem icon={MdGpsFixed} color="red" label="Goals" />
        <MenuItem icon={FaHamburger} color="blue" label="Popular Dishes" />
        <MenuItem icon={BiDish} color="teal" label="Menus" />
      </motion.div>
    </motion.div>
  );
};

export default GoalsPopularMenu;
