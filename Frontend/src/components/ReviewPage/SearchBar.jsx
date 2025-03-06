import React, { useCallback, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useTeachers } from "../../context/TeachersContext"
import { debounce } from "../../utils/debounce"

function SearchBar({ query, setQuery, isDropDownVisible, setisDropDownVisible, setCourses}) {
    const { fetchTeachers, teachers } = useTeachers();
   

    const FetchTeachers = useCallback(
        debounce((query) => {
            const controller = new AbortController();
            fetchTeachers(query, "asc", controller.signal);
            return () => controller.abort();
        }, 300),
        [fetchTeachers]
    );

    useEffect(() => {
        
        if (query?.trim() != "" && isDropDownVisible) {
            
             
            FetchTeachers(query);
            setisDropDownVisible(true);
        } else setisDropDownVisible(false);
    }, [query, FetchTeachers]);

    const handleSuggestionClick = (teacher) => {
        setQuery(teacher?.name);
        setisDropDownVisible(false);
        setCourses(teacher?.courses)
        

    }


    const handleInputChange = (e) => {
        setQuery(e.target.value);
        setisDropDownVisible(true);
    }

    return (
        <div className="relative  w-full mt-8">

            <label htmlFor="search-input" className="block text-sm font-medium text-gray-700 mb-1">
                Search Teachers
            </label>


            <div className="relative ">
                <input
                    value={query}
                    onChange={(e) => handleInputChange(e)}
                    type="text"
                    placeholder="Search by teacher or courses"
                    className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                />
                <FaSearch className="absolute  left-3 top-3 text-gray-400" />
            </div>

            {isDropDownVisible && teachers?.length == 0 && (
                <ul className="absolute  top-20 left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg  h-10 flex items-center  justify-center mb-6   ">
                    <p className="text-slate-500 text-sm">No Professors Found</p>
                </ul>

            )}


            {isDropDownVisible && teachers?.length > 0 && (
                <ul className="absolute top-20 left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg  ">
                    {teachers?.map((teacher) => (
                        <li
                            key={teacher?.id}
                            onClick={() => handleSuggestionClick(teacher)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            {teacher?.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchBar;