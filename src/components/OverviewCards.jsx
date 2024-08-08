import React from "react";
import { cards } from "../constants/OverviewCards";

const OverviewCards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:w-full">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg ${card.bgColor} w-full sm:max-w-[200px] lg:max-w-none`}
        >
          <div className="flex flex-col items-start">
            <div
              className={`text-2xl ${card.iconBgColor} rounded-sm p-1 md:text-3xl lg:text-4xl`}
            >
              {card.icon}
            </div>
            <div>
              <div className="text-md sm:text-lg md:text-xl lg:text-2xl">
                {card.title}
              </div>
              <div className="flex items-center justify-between min-w-full gap-5">
                <div className="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">
                  {card.value}
                </div>
                <div
                  className={`text-xs sm:text-sm md:text-base lg:text-lg ${
                    card.change > 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {card.change > 0 ? "▲" : "▼"} {card.change}%
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;
