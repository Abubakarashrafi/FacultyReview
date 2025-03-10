import { useEffect, useState } from 'react'
import Input from "../components/ui/Input"
import { useTeachers } from "../context/TeachersContext"
import { useParams } from "react-router"
import axios from 'axios';
import { showErrorToast, showSuccessToast } from "../utils/toast"
import { handleApiError } from "../utils/errorHandler"
import { TiDeleteOutline } from "react-icons/ti"
import Loader from "../components/ui/Loader"

function TeacherEdit() {
  const { teacher, fetchTeacherById, loading } = useTeachers();
  const [name, setname] = useState("");
  const [currentCourse, setcurrentCourse] = useState("");
  const [courses, setcourses] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    (async () => {

      await fetchTeacherById(id)
    })()

  }, [fetchTeacherById])

  useEffect(() => {
    if (teacher) {

      setname(teacher?.teacher?.name || "");
      setcourses(teacher?.courses?.map((course) => course.name));




    }
  }, [teacher])

  const handleDelete = async (courseId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/admin/course-delete/${id}`, {
        data: { courseId },
        withCredentials: true
      })
      showSuccessToast("Course deleted successfully");
    } catch (error) {
      handleApiError(error.message);
    }

  }

  const handleAddCourse = async () => {
    try {
      if (currentCourse.trim() === "") return showErrorToast("course name required");

      await axios.patch(`${import.meta.env.VITE_API_URL}/admin/course-update/${id}`, {
        courseName: currentCourse
      },
        { withCredentials: true }
      )
      showSuccessToast("course updated");
      setcourses([...courses, currentCourse]);
    } catch (error) {
      handleApiError(error.message);
    }
  }


  const handleSubmit = async () => {
    try {
      if (name.trim() === "") return showErrorToast("Name required");

      await axios.patch(`${import.meta.env.VITE_API_URL}/admin/teacher/${id}`,
        { name },
        { withCredentials: true }
      )
      showSuccessToast("Name edit succesfully");
    } catch (error) {
      handleApiError(error.message);
    }
  }

  if (loading) return <Loader/>

  return (
    <div className='container py-20'>
      <div className='border border-gray-600'>
        <div className='p-2 sm:p-6'>
          <div className='w-full mb-4'>

            <div className='flex items-end gap-2 sm:gap-4   '>

              <Input
                onChange={(e) => setname(e.target.value)}
                value={name}
                placeholder={"Enter Full Name"}
                label={"Full Name"} />
              <button
                onClick={handleSubmit}
                className=' px-3 sm:px-4 py-2  bg-blue-600 text-white rounded-lg'>Save  </button>
            </div>
          </div>
          <div className='w-full '>
            <div className='flex  items-end gap-2 sm:gap-4'>
              <div className='flex-grow '>

                <Input
                  value={currentCourse}
                  onChange={(e) => setcurrentCourse(e.target.value)}
                  label={"Courses Taught"}
                  placeholder={"Add course (e.g., Introduction to Computer Science)"} />
              </div>
              <button
                onClick={handleAddCourse}
                className=' px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg'>Add </button>
            </div>
            <p className='mt-2 text-gray-500 text-xs'>You can add multiple courses one by one.</p>
            {courses?.length > 0 ? (

              <div className='flex flex-wrap mt-4 gap-x-3'>
                {courses.map((course) => (

                  <div
                    key={course}
                    className="bg-blue-600/10 gap-1 mb-2   px-4 py-2 rounded-full flex items-center"
                  >
                    <span className="text-sm text-blue-700 font-medium">{course}  </span>
                    <button onClick={() => handleDelete(course.id)}
                      className='text-red-500'
                    >

                      <TiDeleteOutline />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className='text-gray-500 text-sm italic pt-2'>No courses have been added yet. Please add at least one course.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherEdit