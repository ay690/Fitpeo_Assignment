import React from "react";
import { MdGpsFixed } from "react-icons/md";
import { FaHamburger } from "react-icons/fa";
import { BiDish } from "react-icons/bi";
import { MenuItem } from "./index";

const GoalsPopularMenu = () => {
  return (
    <div className="bg-gray-700 p-5 md:p-7 rounded-lg w-full lg:w-1/4 lg:min-h-[300px]">
      <div className="flex flex-col gap-6 md:gap-10">
        <MenuItem icon={MdGpsFixed} color="red" label="Goals" />
        <MenuItem icon={FaHamburger} color="blue" label="Popular Dishes" />
        <MenuItem icon={BiDish} color="teal" label="Menus" />
      </div>
    </div>
  );
};

export default GoalsPopularMenu;
