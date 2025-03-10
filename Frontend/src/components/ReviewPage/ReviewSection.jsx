import React, { useEffect, useState } from "react";
import { FaBook, FaClock, FaChalkboardTeacher, FaUserCheck, FaStar } from "react-icons/fa";
import RatingItem from "./RatingItem";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { useTeachers } from "../../context/TeachersContext";
import { showSuccessToast } from "../../utils/toast";
import { handleApiError } from "../../utils/errorHandler";
function ReviewSection({name}) {
     
    const [grading, setGrading] = useState(0);
    const [workload, setWorkload] = useState(0);
    const [teaching, setTeaching] = useState(0);
    const [attendance, setAttendance] = useState(0);
    const [isDisable,setIsDisable] = useState(false);
    const [loading,setLoading] = useState(false);
    const {teacherId} = useParams();
    const {teachers} = useTeachers();

    useEffect(() => {
        const allRatingsSelected = grading > 0 && workload > 0 && teaching > 0 && attendance > 0;
        const isNameProvided = name && name.trim() !== "";
        
        setIsDisable(!(allRatingsSelected && isNameProvided));
    }, [grading, workload, teaching, attendance, name]);

    const getRatingLabel = (rating) => {
        switch (rating) {
            case 1:
                return "Poor";
            case 2:
                return "Fair";
            case 3:
                return "Average";
            case 4:
                return "Good";
            case 5:
                return "Excellent";
            default:
                return "";
        }
    };
    const overallRating = (grading + workload + teaching + attendance) / 4;
    const id = teacherId || teachers?.find((teacher) => teacher.name === name)?.id;
   
    const handleOnSubmit = async()=>{
        setLoading(true);
        try {
            
            await axios.post(`${import.meta.env.VITE_API_URL}/review/${id}`,{
            grading,
            workload,
            attendance,
            teaching
           },
           {
           withCredentials:true
           }
        )
           showSuccessToast("Review Submitted Successfully");
        
            
            
        } catch (error) {
           
            
            handleApiError(error);

            
        }finally{
            setLoading(false);
        }
    }

    return (
        <div className="my-10">
            <RatingItem
                icon={FaBook}
                title="Grading Fairness"
                rating={grading}
                setRating={setGrading}
                getRatingLabel={getRatingLabel}
                description="How fair and consistent the professor's grading is"
            />
            <RatingItem
                icon={FaClock}
                title="Workload"
                rating={workload}
                setRating={setWorkload}
                getRatingLabel={getRatingLabel}
                description="Is the workload manageable and reasonable?"
            />
            <RatingItem
                icon={FaChalkboardTeacher}
                title="Teaching Quality"
                rating={teaching}
                setRating={setTeaching}
                getRatingLabel={getRatingLabel}
                description="How effective and engaging is the teaching?"
            />
            <RatingItem
                icon={FaUserCheck}
                title="Attendance Policy"
                rating={attendance}
                setRating={setAttendance}
                getRatingLabel={getRatingLabel}
                description="How the professor handles attendance and participation"
            />
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-md font-medium text-gray-700">Overall Rating</h3>
                <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <div
                            key={star}
                            className={`text-xl ${star <= overallRating ? "text-blue-600" : "text-gray-300"
                                }`}
                        >
                            <FaStar />
                        </div>
                    ))}
                </div>
            </div>
            <p className="text-sm text-gray-600 mb-6">
                {getRatingLabel(Math.round(overallRating))} ({overallRating.toFixed(1)})
            </p>

            
            <button
                disabled={isDisable || loading}
              onClick={handleOnSubmit}
                className={`w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-60 ${isDisable ? "cursor-not-allowed text-gray-500 bg-gray-300" : ""}`}
            >
                {loading ? (
                    <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                    </div>
                ) : (
                    "Submit Review"
                )}
            </button>
        </div>
    );
}

export default ReviewSection;