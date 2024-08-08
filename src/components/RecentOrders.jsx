import React from "react";

const orders = [
  {
    customer: "Wade Warren",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
    image: "https://raajratna.com/wp-content/uploads/2019/01/person1.jpg",
  },
  {
    customer: "Jane Cooper",
    orderNo: "48965786",
    amount: "$305.02",
    status: "Delivered",
    image: "https://raajratna.com/wp-content/uploads/2019/01/person2.jpg",
  },
  {
    customer: "Guy Hawkins",
    orderNo: "78958215",
    amount: "$45.88",
    status: "Cancelled",
    image: "https://raajratna.com/wp-content/uploads/2019/01/person3.jpg",
  },
  {
    customer: "Kristin Watson",
    orderNo: "20965732",
    amount: "$60.00",
    status: "Pending",
    image: "https://raajratna.com/wp-content/uploads/2019/01/person5.jpg",
  },
  {
    customer: "Cody Fisher",
    orderNo: "95715620",
    amount: "$545.00",
    status: "Delivered",
    image: "https://raajratna.com/wp-content/uploads/2019/01/person6.jpg",
  },
  {
    customer: "Savannah Nguyen",
    orderNo: "78514568",
    amount: "$128.20",
    status: "Delivered",
    image:
      "https://as2.ftcdn.net/v2/jpg/03/83/25/83/1000_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
];

const getStatusClasses = (status) => {
  switch (status) {
    case "Delivered":
      return "text-green-700 bg-green-200";
    case "Cancelled":
    case "Pending":
      return "text-red-700 bg-red-100";
    default:
      return "";
  }
};

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
