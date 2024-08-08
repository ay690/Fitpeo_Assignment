import React from "react";
import { FaChartPie } from "react-icons/fa";
import { TbShoppingBagCheck, TbShoppingBagExclamation } from "react-icons/tb";

const cards = [
  {
    icon: <TbShoppingBagCheck color="#0092FF" />,
    title: "Total Orders",
    value: 75,
    change: 3,
    bgColor: "bg-gray-700",
  },
  {
    icon: <TbShoppingBagCheck color="#56E65C" />,
    title: "Total Delivered",
    value: 70,
    change: -3,
    bgColor: "bg-gray-700",
  },
  {
    icon: <TbShoppingBagExclamation color="#E32636" />,
    title: "Total Cancelled",
    value: 5,
    change: 3,
    bgColor: "bg-gray-700",
  },
  {
    icon: <FaChartPie color="#BF40BF" />,
    title: "Total Revenue",
    value: "$12k",
    change: -3,
    bgColor: "bg-gray-700",
  },
];

const OverviewCards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:w-full">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg ${card.bgColor} w-full sm:max-w-[200px] lg:max-w-none`}
        >
          <div className="flex flex-col items-start">
            <div className="text-2xl">{card.icon}</div>
            <div>
              <div className="text-lg">{card.title}</div>
              <div className="flex items-center justify-between min-w-full gap-5">
                <div className="text-2xl font-bold">{card.value}</div>
                <div
                  className={`text-sm ${
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
