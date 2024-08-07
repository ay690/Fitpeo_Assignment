import React from "react";
import { FaChartPie } from "react-icons/fa";
import { TbShoppingBagCheck, TbShoppingBagExclamation } from "react-icons/tb";
import NetProfit from "./NetProfit";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg ${card.bgColor} max-w-[200px]`}
        >
          <div className="flex flex-col  items-start space-x-1 ">
            <div className="text-2xl">{card.icon}</div>
            <div>
              <div className="text-lg">{card.title}</div>
              <div className="flex justify-between items-center gap-5 min-w-full">
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

      <NetProfit />
    </div>
  );
};

export default OverviewCards;
