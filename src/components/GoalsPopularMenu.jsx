import React from "react";
import { PiGreaterThanBold } from "react-icons/pi";
import { MdGpsFixed } from "react-icons/md";
import { FaHamburger } from "react-icons/fa";
import { BiDish } from "react-icons/bi";

const MenuItem = ({ icon: Icon, color, label }) => {
  return (
    <div className="flex justify-between items-center hover:cursor-pointer">
      <div className="flex gap-2 items-center">
        <div className={`bg-${color}-500 p-2 rounded-full`}>
          <Icon color="#fff" size={30} />
        </div>
        <h3 className="text-md lg:text-lg">{label}</h3>
      </div>
      <div className="bg-gray-500 p-3 rounded-full">
        <PiGreaterThanBold size={15} />
      </div>
    </div>
  );
};

const GoalsPopularMenu = () => {
  return (
    <div className="bg-gray-700 p-7 rounded-lg w-full min-h-[300px] lg:w-1/4">
      <div className="flex flex-col gap-10">
        <MenuItem icon={MdGpsFixed} color="red" label="Goals" />
        <MenuItem icon={FaHamburger} color="blue" label="Popular Dishes" />
        <MenuItem icon={BiDish} color="teal" label="Menus" />
      </div>
    </div>
  );
};

export default GoalsPopularMenu;
