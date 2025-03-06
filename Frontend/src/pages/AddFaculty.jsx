import React, { useEffect, useState } from 'react'
import Navigation from '../components/TeacherDetail/Navigation'
import Heading from '../components/TeacherDetail/Heading'
import { Header } from './ReviewPage'
import Input from '../components/ui/Input'
import { TiDeleteOutline } from "react-icons/ti";
import Button from "../components/ui/Button"
import { useNavigate } from 'react-router'
import axios from 'axios'
import { useTeachers } from '../context/TeachersContext'
import { handleApiError } from '../utils/errorhandler'
import { showSuccessToast } from '../utils/toast'

function AddFaculty() {
  const [courses, setCourses] = useState([]);
  const [currentCourse, setCurrentCourse] = useState('');
  const [fullname, setFullname] = useState("");
  const [department, setDepartment] = useState("");
  const navigate = useNavigate();
  const [isDisable,setisDisable] = useState(true);
  const [loading,setLoading] = useState(false);
  

  useEffect(()=>{
    setisDisable(!(courses.length>0 && fullname.trim()!=='' && department.trim()!==''));
  },[courses,fullname,department])

  const handleSubmit = async()=>{
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/teacher`,{
      name:fullname,
      courses
      
    },
    {
      withCredentials:true  
    }
      
  )
      showSuccessToast("Teacher added successfully. Pending admin approval.");  
      setFullname("");
      setCourses([]);
      setDepartment("");

    } catch (error) {
      console.log(error.message);
      
       handleApiError(error);
    } finally {
      setLoading(false);
    }
  }

  const handleClick = () => {
    if (currentCourse.trim() !== "" && !courses.includes(currentCourse)) {
      setCourses([...courses, currentCourse]);
      setCurrentCourse("");
    }
  }

  const handleDeleteCourse = (courseToDelete) => {
    const updatedCourses = courses.filter((course) => course !== courseToDelete);
    setCourses(updatedCourses);
  };
  return (
    <div className='container'>
      <div className='py-20 '>

        <Navigation text={"Back to Home"}/>
        <div className='sm:p-6   py-6'>
          <div className="max-w-4xl mx-auto space-y-10">
            <div>

              <Heading heading={"Add New Faculty"} descriptiom={"Add a new professor or instructor to the faculty directory"} />
            </div>
            <div className='border p-4 sm:p-6 mx-auto '>
              <Header heading={"Essential Information"} description={"Enter the faculty member's name and courses taught"} />

              <div className='space-y-4 pt-6'>


                <Input
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  label={"Full Name"} placeholder={"Enter faculty member's full name"} />
                <Input
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  label={"Department"} placeholder={"Enter Department"} />
                <div className='w-full '>
                  <div className='flex  items-end gap-2 sm:gap-4'>
                    <div className='flex-grow '>

                      <Input
                        value={currentCourse}
                        onChange={(e) => setCurrentCourse(e.target.value)}
                        label={"Courses Taught"}
                        placeholder={"Add course (e.g., Introduction to Computer Science)"} />
                    </div>
                    <button
                      onClick={handleClick}
                      className=' px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg'>Add </button>
                  </div>
                      <p className='mt-2 text-gray-500 text-xs'>You can add multiple courses one by one.</p>
                  {courses?.length > 0 ? (

                    <div className='flex flex-wrap mt-4 gap-x-3'>
                      {courses.map((course) => (

                        <div
                          key={course}
                          className="bg-blue-600/10 gap-1    px-4 py-2 rounded-full flex items-center"
                        >
                          <span className="text-sm text-blue-700 font-medium">{course}  </span>
                          <button onClick={() => handleDeleteCourse(course)}
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



        <div className='flex justify-end gap-4'>
          <Button  
          onClick={()=>navigate("/")}
          className={'hover:bg-red-600  bg-red-700 text-white px-4 py-2.5 text-sm' }
          
          text={"Cancel"}
          
          />
          <button  
          disabled={isDisable || loading}
          onClick={handleSubmit}
          className={`px-4 py-2.5 rounded-md
             text-white text-sm ${isDisable ? "cursor-not-allowed bg-gray-400 " : "bg-blue-600  hover:bg-blue-700"}` }
          
          >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                  </div>
                ) : (
                  "Add Faculty"
                )}
          </button>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddFaculty