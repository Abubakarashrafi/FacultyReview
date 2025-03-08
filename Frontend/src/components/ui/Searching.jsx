import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useTeachers } from '../../context/TeachersContext';
import {debounce} from "../../utils/debounce"

function Searching() {
    const [searchQuery, setSearchQuery] = useState('');
    const [order, setOrder] = useState('desc');
    const abortControllerRef = useRef(null);
    const {fetchTeachers} = useTeachers();

    const debouncedFetchTeachers = useCallback(
        debounce((query, order) => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort(); 
            }
            abortControllerRef.current = new AbortController(); 
            fetchTeachers(query, order,"true", abortControllerRef.current.signal);
        }, 300),
        [fetchTeachers]
    );

    useEffect(() => {
        debouncedFetchTeachers(searchQuery, order); 

     
        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort(); 
            }
        };
    }, [searchQuery, order, debouncedFetchTeachers]);
     
    
  return (
      <div className='sm:flex   gap-4 my-4 md:my-0'>

      <div className="w-full min-w-[300px]">
          <div className="relative  flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600">
                  <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
              </svg>

              <input
                type='text'
                value={searchQuery}
                onChange={(e)=> setSearchQuery(e.target.value)}
                
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-2 focus:outline-blue-600 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Search for professors or courses..."
              />

          </div>
      </div>
              <div className=' w-40 py-4 sm:py-0 sm:w-full'>


                  <select  value={order} onChange={(e)=> setOrder(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  ">
                      <option value={"desc"} >Highest Rated</option>
                      <option value={"asc"}>Lowest Rated</option>
                  </select>
              </div>      
    </div>
  )
}

export default Searching