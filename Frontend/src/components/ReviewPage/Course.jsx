import React, { useState } from "react";

function CourseSection({ courses }) {
    const [selectedCourses, setSelectedCourses] = useState([]);

    return (
        <div className="">
            <CourseSelection
                selectedCourses={selectedCourses}
                setSelectedCourses={setSelectedCourses}
                courses={courses}
            />
            {selectedCourses?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-4   ">
                    <h2 className="text-sm font-medium shrink-0 text-gray-800 ">Selected Courses: </h2>

                    {selectedCourses?.map((course, index) => (
                        <div
                            key={index}
                            className="bg-blue-600/10   font-medium px-4 py-1 rounded-full flex items-center"
                        >
                            <span className="text-[10px]">{course} </span>

                        </div>
                    ))}
                </div>

            )}
        </div>

    );
}

export default CourseSection;




function CourseSelection({ selectedCourses, setSelectedCourses, courses }) {
    const handleCheckboxChange = (course) => {
        if (selectedCourses?.includes(course)) {
            setSelectedCourses(selectedCourses?.filter((selected) => selected !== course));
        } else {
            setSelectedCourses([...selectedCourses, course]);
        }
    };

    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 my-6">

            <div className="space-y-3">
                {courses?.map((course, index) => (
                    <div key={index} className="flex items-center">
                        <input
                            type="checkbox"
                            id={`course-${index}`}
                            checked={selectedCourses?.includes(course)}
                            onChange={() => handleCheckboxChange(course)}
                            className="appearance-none h-5 w-5 border-2 shrink-0 border-blue-500 rounded-md checked:bg-blue-500  focus:ring-2 focus:ring-blue-500"
                        />
                        <label htmlFor={`course-${index}`} className="ml-3 text-xs font-medium text-gray-700">
                            {course}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}



