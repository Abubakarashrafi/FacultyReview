import React, { useEffect } from 'react'
import { FaChalkboardTeacher, FaBalanceScale, FaHardHat, FaUserClock } from 'react-icons/fa'; // 

import Navigation from './Navigation';
import CircularRatingLoader from './CircularRatingLoader';
import Heading from './Heading';
import TeacherDetailCard from './TeacherDetailCard';
import { useParams } from 'react-router';
import { useTeachers } from '../../context/TeachersContext';



function TeacherDetail() {
    const {fetchTeacherById,loading,teacher} = useTeachers();

    const {id} = useParams();
    useEffect(() => {
        if (id) {
            fetchTeacherById(id);
        }
    }, [id, fetchTeacherById]);

    // Loading state
    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <div className='container py-20'>

            <Navigation text={"Back to Faculty"} to={"/"} />

            <TeacherDetailCard />

            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
                <div className='border-2 p-4'>
                    <Heading heading={"Rating Breakdown"} descriptiom={"Detailed ratings across different metrics"} />

                    <div className='p-8'>

                        <div className="grid md:grid-rows-2 md:grid-cols-2 gap-6">

                            <div>
                                <CircularRatingLoader
                                    rating={teacher?.avgTeaching}
                                    label="Teaching Quality"

                                    icon={<FaChalkboardTeacher className="text-gray-600" />}
                                />
                            </div>

                            <div>
                                <CircularRatingLoader
                                    rating={teacher?.avgGrading}
                                    label="Grading Fairness"
                                    icon={<FaBalanceScale className="text-gray-600" />}
                                />
                            </div>

                            <div>
                                <CircularRatingLoader
                                    rating={teacher?.avgWorkload}
                                    label="Workload"
                                    icon={<FaHardHat className="text-gray-600" />}
                                />
                            </div>

                            <div>
                                <CircularRatingLoader
                                    rating={teacher?.avgAttendance}
                                    label="Attendance Leniency"
                                    icon={<FaUserClock className="text-gray-600" />}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-2 p-4 my-10 sm:my-0'>
                    <div>

                        <Heading heading={"Courses Taught"} descriptiom={"Classes offered by this professor"} />
                        <ul className="space-y-4 my-4">

                            {teacher?.courses?.map((name,index)=>(

                                <li key={index} className="p-2 bg-white shadow-sm rounded-lg flex gap-4 items-center hover:bg-slate-100">
                                <div className='w-6 h-6 flex items-center    justify-center rounded-full border text-xs'>
                                    {index+1}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-700">{name}</h3>

                            </li>
                            ))}


                        </ul>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default TeacherDetail