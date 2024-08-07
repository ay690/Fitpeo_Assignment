import React from "react";

const feedback = [
  {
    name: "Jenny Wilson",
    rating: 5,
    comment:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome.",
  },
  {
    name: "Dianne Russell",
    rating: 5,
    comment:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
  },
  {
    name: "Devon Lane",
    rating: 4,
    comment:
      "Normally wings are wings, but theirs are lean meaty and tender, and just the right amount of crispy.",
  },
];

const CustomerFeedback = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg  max-h-[200px] w-1/4 overflow-y-scroll">
      <h3 className="text-xl mb-4">Customer's Feedback</h3>
      {feedback.map((item, index) => (
        <div key={index} className="border-t border-gray-700 py-4">
          <div className="flex flex-col items-start ">
            <div className="bg-gray-700 rounded-full w-12 h-12"></div>
            <div>
              <h4 className="text-lg">{item.name}</h4>
              <div className="text-yellow-400">{"★".repeat(item.rating)}</div>
              <p className="text-sm text-gray-400">{item.comment}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedback;
