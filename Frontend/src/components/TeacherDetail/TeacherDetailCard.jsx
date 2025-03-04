import React from 'react'
import { LuUsers } from "react-icons/lu";
import Button from "../Button"
import StarRating from "../TeacherCard/Stars"
import { useTeachers } from '../../context/TeachersContext';

function TeacherDetailCard() {
    const { teacher } = useTeachers();
    return (
        <div className='border my-10'>

            <div className='px-6 pt-4  sm:flex justify-between items-center  '>

                <div className='sm:flex items-center  gap-4'>

                    <div className='w-24 shrink-0 h-24 ring-2 ring-blue-600  rounded-full bg-gray-200'>
                    </div>

                    <div className='py-4 sm:py-0'>

                        <p className='text-2xl md:text-3xl font-medium'>{teacher?.teacher?.name}</p>
                        <div className='my-2 gap-2 px-4 bg-blue-600/10 rounded-full  flex items-center w-40'>

                            <LuUsers />
                            <p className='font-medium'> {`${teacher?.ReviewCount} rating `} </p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-2'>

                    <p className='font-semibold text-4xl text-blue-600'>{teacher?.overallAverage}</p>
                    <div className='w-full'>

                        <StarRating size={20} rating={teacher?.overallAverage} />
                        <p className='text-sm text-gray-500 '>Overall Rating</p>
                    </div>
                </div>

            </div>
            <div className='px-6 flex justify-end mb-6 mt-4 sm:mt-0'>


                <Button text={"Rate this professor"} color={"PRIMARY"} className={"py-2.5 px-4"} />

            </div>
        </div>
    )
}

export default TeacherDetailCard