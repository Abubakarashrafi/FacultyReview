import React from "react";

const Course = ({ courseName }) => {
  return (
    <div className="bg-blue-100 rounded-lg px-4 py-2 inline-block">
      <span className="text-blue-800 font-medium text-sm">
        {courseName}
      </span>
    </div>
  );
};

export default Course;
