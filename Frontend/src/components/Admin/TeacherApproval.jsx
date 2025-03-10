import React from "react";
import { Check, Edit, Trash } from "lucide-react";
import { useTeachers } from "../../context/TeachersContext";
import axios from "axios";
import { handleApiError } from '../../utils/errorHandler'
import { showSuccessToast } from '../../utils/toast'
import { useNavigate } from "react-router";

const TeacherApproval = ({ status,id }) => {
    
    const navigate = useNavigate();

    const handleDelete = async()=>{
     try {
        
         await axios.delete(`${import.meta.env.VITE_API_URL}/admin/teacher`,{
             data:{id},
             withCredentials:true
             
            }
            
        );
        showSuccessToast("deleted successfully");
    } catch (error) {
       handleApiError(error.message);
    }
    }
    const handleApprove = async()=>{
        try {
            await axios.put(`${import.meta.env.VITE_API_URL}/admin/teacher`,{
                id
            },
            {withCredentials:true}
        )
        showSuccessToast("approved successfully");
        } catch (error) {
            handleApiError(error.message);
        }
    }

    return (
        <div className="flex flex-row justify-between items-center gap-2 md:gap-4 w-full">
            
            <div className="flex items-center">
                {status ? (
                    <p
                        className={`bg-green-600 text-white py-1 px-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200`}
                    >
                        Approved
                    </p>
                ) : (
                    <p
                        className={`bg-yellow-500 text-white py-1 px-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200`}
                    >
                        Pending
                    </p>
                )}
            </div>

           
            <div className="flex gap-2">
                <button 
                onClick={()=> navigate(`/admin/edit/${id}`)}
                className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors duration-200">
                    <Edit className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                </button>

                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
                    <Trash
                    onClick={handleDelete}
                    className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                </button>
                {(!status) && (

                    <button
                    onClick={handleApprove}
                    className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition-colors duration-200">
                   
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                </button>
                )}
            </div>
        </div>
    );
};

export default TeacherApproval;