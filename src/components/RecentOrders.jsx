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
    <div className="bg-gray-800 p-4 rounded-lg w-3/4 max-h-[200px] overflow-y-scroll custom-scrollbar">
      <h3 className="mb-4 text-xl">Recent Orders</h3>
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
              <td className="flex items-center gap-2 py-2 mt-2">
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
