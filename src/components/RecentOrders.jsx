import React from "react";

const orders = [
  {
    customer: "Wade Warren",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
    image:
      "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg", 
  },
  {
    customer: "Jane Cooper",
    orderNo: "48965786",
    amount: "$305.02",
    status: "Delivered",
    image: "https://via.placeholder.com/40", 
  },
  {
    customer: "Guy Hawkins",
    orderNo: "78958215",
    amount: "$45.88",
    status: "Cancelled",
    image: "https://via.placeholder.com/40", 
  },
  {
    customer: "Kristin Watson",
    orderNo: "20965732",
    amount: "$60.00",
    status: "Pending",
    image: "https://via.placeholder.com/40", 
  },
  {
    customer: "Cody Fisher",
    orderNo: "95715620",
    amount: "$545.00",
    status: "Delivered",
    image: "https://via.placeholder.com/40", 
  },
  {
    customer: "Savannah Nguyen",
    orderNo: "78514568",
    amount: "$128.20",
    status: "Delivered",
    image: "https://via.placeholder.com/40", 
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
    <div className="bg-gray-800 p-4 rounded-lg w-3/4 max-h-[200px] overflow-y-scroll">
      <h3 className="text-xl mb-4">Recent Orders</h3>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td className="py-2 flex items-center gap-2 mt-2">
                <img
                  src={order.image}
                  alt={`${order.customer}'s profile`}
                  className="w-10 h-10 rounded-full"
                />
                {order.customer}
              </td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td
                className={`rounded-full flex items-center justify-center mb-5 ${getStatusClasses(
                  order.status
                )}`}
              >
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
