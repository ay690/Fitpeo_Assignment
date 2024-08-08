import { FaChartPie } from "react-icons/fa";
import { TbShoppingBagCheck, TbShoppingBagExclamation } from "react-icons/tb";

export const cards = [
  {
    icon: <TbShoppingBagCheck color="#0092FF" />,
    title: "Total Orders",
    value: 75,
    change: 3,
    bgColor: "bg-gray-700",
    iconBgColor: "bg-blue-300",
  },
  {
    icon: <TbShoppingBagCheck color="#56E65C" />,
    title: "Total Delivered",
    value: 70,
    change: -3,
    bgColor: "bg-gray-700",
    iconBgColor: "bg-green-200",
  },
  {
    icon: <TbShoppingBagExclamation color="#E32636" />,
    title: "Total Cancelled",
    value: 5,
    change: 3,
    bgColor: "bg-gray-700",
    iconBgColor: "bg-red-300",
  },
  {
    icon: <FaChartPie color="#BF40BF" />,
    title: "Total Revenue",
    value: "$12k",
    change: -3,
    bgColor: "bg-gray-700",
    iconBgColor: "bg-pink-300",
  },
];
