import React, { useEffect, useState } from "react";
import { User, Search } from "lucide-react";
import TeacherApproval from "./TeacherApproval";
import { useTeachers } from "../../context/TeachersContext";



const TeacherTable = () => {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("false");
    const {fetchTeachers,teachers,loading} = useTeachers();

   useEffect(()=>{
    fetchTeachers(search,"asc",statusFilter);

   },[statusFilter,search])

  
    return (
        <div className="relative overflow-x-auto shadow-[0_4px_6px_-1px_rgba(0,0,0,0.5),0_-4px_6px_-1px_rgba(0,0,0,0.5)] sm:rounded-lg p-2 md:p-4 bg-white mt-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4">
                <div className="bg-white w-full md:w-3/4 items-center flex px-4 rounded-lg space-x-3 border border-gray-300">
                    <Search className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search teachers..."
                        className="ml-2 bg-transparent focus:outline-none w-full h-[3.25rem] placeholder:text-gray-400"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        aria-label="Search teachers"
                    />
                </div>

                <div className="bg-white w-full md:w-auto border border-gray-300 rounded-lg p-1 md:p-2 h-[3.25rem] flex items-center">
                    <select
                        className="bg-transparent focus:outline-none w-full"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)

                        }
                        aria-label="Filter by status"
                    >
                        
                        <option value={"false"}>Pending</option>
                        <option value={"true"}>Approved</option>
                    </select>
                </div>
            </div>

            <table className="w-full text-sm text-left text-gray-500 bg-white">
                <thead className="text-xs text-black uppercase bg-gray-50">
                    <tr>
                        <th className="px-4 md:px-6 py-3 text-left">Name</th>
                        <th className="px-4 md:px-6 py-3 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.length>0 ? (

                        teachers?.map((user, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                            
                            <td className="px-4 md:px-6 py-4">
                                <div className="flex items-center">
                                    <div className="font-semibold text-gray-900 text-sm md:text-base">
                                        {user.name}
                                    </div>
                                </div>
                            </td>

                            
                            <td className="px-4 md:px-6 py-4">
                                <TeacherApproval id={user.id} status={user.approved} />
                            </td>
                        </tr>
                    ))
                ): (
                

                    <tr className="text-center text-lg">
                        <td>
                            No teacher found
                            </td>
                            </tr>
                
                )}
                </tbody>
            </table>
        </div>
    );
};

export default TeacherTable;