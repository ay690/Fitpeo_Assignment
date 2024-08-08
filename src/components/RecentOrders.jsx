import React from "react";
import { orders } from "../constants/Recentorders";
import { getStatusClasses } from "../utils/getStatusClass";

const RecentOrders = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg w-full lg:w-3/4 max-h-[200px] overflow-y-scroll custom-scrollbar">
      <h3 className="mb-4 text-lg md:text-xl">Recent Orders</h3>
      <table className="w-full text-sm text-left md:text-base">
        <thead>
          <tr>
            <th className="px-2 py-1 md:px-4 md:py-2">Customer</th>
            <th className="px-2 py-1 md:px-4 md:py-2">Order No.</th>
            <th className="px-2 py-1 md:px-4 md:py-2">Amount</th>
            <th className="px-2 py-1 md:px-4 md:py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td className="flex items-center gap-2 py-2 mt-2">
                <img
                  src={order.image}
                  alt={`${order.customer}'s profile`}
                  className="w-8 h-8 rounded-full md:w-10 md:h-10"
                />
                <span className="text-xs md:text-sm lg:text-base">
                  {order.customer}
                </span>
              </td>
              <td className="px-2 py-1 md:px-4 md:py-2">
                <span className="text-xs md:text-sm lg:text-base">
                  {order.orderNo}
                </span>
              </td>
              <td className="px-2 py-1 md:px-4 md:py-2">
                <span className="text-xs md:text-sm lg:text-base">
                  {order.amount}
                </span>
              </td>
              <td
                className={`px-2 py-1 mb-5 md:px-4 md:py-1 rounded-full flex items-center justify-center ${getStatusClasses(
                  order.status
                )}`}
              >
                <span className="text-xs md:text-sm lg:text-base">
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
