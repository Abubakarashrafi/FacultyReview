import React from "react";
import { FaStar } from "react-icons/fa";

function RatingItem({
  icon: Icon,
  title,
  rating,
  setRating,
  getRatingLabel,
  description,
}) {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Icon className="text-gray-700 text-xl" />
          <h3 className="text-md font-medium text-gray-700">{title}</h3>
        </div>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`text-xl ${star <= rating ? "text-yellow-400" : "text-gray-300"
                } hover:text-yellow-400 transition-colors`}
              onMouseEnter={() => setRating(star)}
              onMouseLeave={() => setRating(rating)}
            >
              <FaStar />
            </button>
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4">{getRatingLabel(rating)}</p>
      <p className="text-xs text-gray-500 mb-6">{description}</p>
      <div className="border-b border-gray-200 mb-6"></div>
    </>
  );
}

export default RatingItem;