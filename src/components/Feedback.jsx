import React from "react";
import { StarRating } from "../utils/starRatings";
import { feedback } from "../constants/Feedback";

const CustomerFeedback = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg w-full lg:w-1/4 max-h-[200px] overflow-y-scroll custom-scrollbar">
      <h3 className="mb-4 text-xl text-white">Customer's Feedback</h3>
      {feedback.map((item, index) => (
        <div key={index} className="py-4 border-t border-gray-700">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src={item.image}
                alt={index}
              />
              <h4 className="text-lg text-white">{item.name}</h4>
            </div>
            <div>
              <StarRating rating={item.rating} className="mb-6" />
              <p className="text-sm text-gray-400">{item.comment}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedback;
