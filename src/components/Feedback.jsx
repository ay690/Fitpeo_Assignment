import React from "react";
import { motion } from "framer-motion";
import { StarRating } from "../utils/starRatings";
import { feedback } from "../constants/Feedback";

const CustomerFeedback = () => {
  return (
    <motion.div
      className="bg-gray-800 p-4 rounded-lg w-full lg:w-1/4 max-h-[200px] overflow-y-scroll custom-scrollbar"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      <h3 className="mb-4 text-xl text-white">Customer's Feedback</h3>
      {feedback.map((item, index) => (
        <motion.div
          key={index}
          className="py-4 border-t border-gray-700"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            type: "spring",
            stiffness: 120,
          }}
        >
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src={item.image}
                alt={item.name}
              />
              <h4 className="text-lg text-white">{item.name}</h4>
            </div>
            <div>
              <StarRating rating={item.rating} className="mb-6" />
              <p className="text-sm text-gray-400">{item.comment}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CustomerFeedback;
