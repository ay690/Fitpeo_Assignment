import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa"; // Using react-icons for stars

const feedback = [
  {
    name: "Jenny Wilson",
    rating: 5,
    comment:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome.",
    image: "https://raajratna.com/wp-content/uploads/2019/01/person2.jpg",
  },
  {
    name: "Dianne Russell",
    rating: 5,
    comment:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
    image: "https://raajratna.com/wp-content/uploads/2019/01/person3.jpg",
  },
  {
    name: "Devon Lane",
    rating: 4,
    comment:
      "Normally wings are wings, but theirs are lean meaty and tender, and just the right amount of crispy.",
    image: "https://raajratna.com/wp-content/uploads/2019/01/person4.jpg",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) =>
        index < rating ? (
          <FaStar key={index} className="text-yellow-400" />
        ) : (
          <FaRegStar key={index} className="text-white-400" />
        )
      )}
    </div>
  );
};

const CustomerFeedback = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg max-h-[200px] w-1/4 overflow-y-scroll">
      <h3 className="text-xl mb-4 text-white">Customer's Feedback</h3>
      {feedback.map((item, index) => (
        <div key={index} className="border-t border-gray-700 py-4">
          <div className="flex flex-col items-start gap-2">
            <div className="flex gap-4 items-center">
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
