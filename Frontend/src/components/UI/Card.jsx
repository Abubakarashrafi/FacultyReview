import React from "react";
import UserLogo from "../../assets/user-logo.png";
import Star from "../../assets/star.png";
import Course from "./Course";

const Card = ({ teacher }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:bg-gray-200 cursor-pointer transition-all duration-300 border border-gray-200">
      {/* User Logo & Header */}
      <div className="flex flex-col items-center sm:flex-row sm:items-start">
        <div className="p-4">
          <img src={UserLogo} alt="userlogo" className="w-16 sm:w-20" />
        </div>

        {/* Name & Department */}
        <div className="text-center sm:text-left sm:ml-4">
          <h3 className="font-bold text-2xl sm:text-3xl text-gray-900">{teacher.name}</h3>
          <h5 className="font-medium text-lg text-gray-600">{teacher.department}</h5>
        </div>
      </div>

      {/* Rating Section */}
      <div className="flex items-center justify-center sm:justify-end mt-4">
        <img src={Star} alt="rating" className="w-6 sm:w-8" />
        <span className="ml-2 text-lg sm:text-xl font-semibold text-gray-700">{teacher.rating}</span>
      </div>

      {/* Courses Section */}
      <div className="mt-5">
        <h3 className="font-medium text-xl text-gray-800 mb-2">Courses</h3>

        {/* Course Tags */}
        <div className="flex flex-wrap gap-2">
          <Course courseName={teacher.course} />
        </div>
      </div>
    </div>
  );
};

export default Card;
