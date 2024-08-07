import React from "react";
import { PiGreaterThanBold } from "react-icons/pi";
import { MdGpsFixed } from "react-icons/md";
import { FaHamburger } from "react-icons/fa";
import { BiDish } from "react-icons/bi";

const GoalsPopularMenu = () => {
  return (
    <div className="bg-gray-700 p-7 rounded-lg w-full min-h-[300px] lg:w-1/4">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="bg-red-500 p-2 rounded-full">
              <MdGpsFixed color="#fff" size={30} />
            </div>
            <h3 className="text-md lg:text-lg">Goals</h3>
          </div>
          <div className="bg-gray-500 p-3 rounded-full">
            <PiGreaterThanBold size={15} />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="bg-blue-700 p-2 rounded-full">
              <FaHamburger color="#fff" size={30} />
            </div>
            <h3 className="text-md lg:text-lg">Popular Dishes</h3>
          </div>
          <div className="bg-gray-500 p-3 rounded-full">
            <PiGreaterThanBold size={15} />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="bg-teal-500 p-2 rounded-full">
              <BiDish color="#fff" size={30} />
            </div>
            <h3 className="text-md lg:text-lg">Menus</h3>
          </div>
          <div className="bg-gray-500 p-3 rounded-full">
            <PiGreaterThanBold size={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsPopularMenu;
