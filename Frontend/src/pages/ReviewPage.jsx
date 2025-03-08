import React, { useEffect, useState } from 'react'
import Navigation from "../components/TeacherDetail/Navigation"
import Heading from "../components/TeacherDetail/Heading"
import SearchBar from '../components/ReviewPage/SearchBar'
import CourseSection from '../components/ReviewPage/Course';
import ReviewBorderDiv from '../components/ReviewPage/ReviewSection';
import { useSearchParams } from 'react-router';
import { useTeachers } from '../context/TeachersContext';



function ReviewPage() {
  const [query, setQuery] = useState("");
  const [courses, setCourses] = useState([]);

  const [isDropDownVisible, setisDropDownVisible] = useState(false);
  const [searchParams] = useSearchParams();
  const teacherId = searchParams.get("teacherId");
  const { teachers } = useTeachers();


  useEffect(() => {
    if (teacherId && teachers.length > 0) {

      const presetTeacher = teachers?.find((teacher) => teacher.id === teacherId);
      if (presetTeacher) {
        console.log(presetTeacher.courses);
        
        setQuery(presetTeacher.name);
        setCourses(presetTeacher.courses)
      }
    }

  }, [])


  return (
    <div className='container'>
      <div className='py-20 '>

        <Navigation text={"Back to Home"} to={"/"} />
        <div className='sm:p-6   py-6'>
          <div className="max-w-4xl mx-auto space-y-10">
            <div>

              <Heading heading={"Add a Professor Review"} descriptiom={"Share your experience to help other students make informed decisions"} />
            </div>

            <div className='border p-4'>
              <Header heading={"Teacher Information"} description={"Select the professor you're reviewing"} />
              <SearchBar

                setCourses={setCourses}
                query={query} setQuery={setQuery} isDropDownVisible={isDropDownVisible} setisDropDownVisible={setisDropDownVisible} />
            </div>
            {!isDropDownVisible && courses.length != 0 && (

              <div className='border p-4 '>
                <Header heading={"Courses Taken"} description={"Select all courses you've taken with this professor"} />
                <CourseSection courses={courses} />
              </div>
            )}

            <div className='border p-4 '>
              <Header heading={"Rating Categories"} description={"Rate your experience in each category"} />
              <ReviewBorderDiv courses={courses} name={query} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewPage


export const Header = ({ heading, description }) => {
  return (
    <>
      <p className='text-2xl font-medium mb-1'>{heading}</p>
      <p className='text-sm text-slate-500'>{description}</p>
    </>
  )
}