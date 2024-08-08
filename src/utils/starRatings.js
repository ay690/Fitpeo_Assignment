import { FaStar, FaRegStar } from "react-icons/fa";

export const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) =>
        index < rating ? (
          <FaStar key={index} className="text-yellow-400" />
        ) : (
          <FaRegStar key={index} className="text-gray-400" />
        )
      )}
    </div>
  );
};
