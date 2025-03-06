import React from 'react'

import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router';
function Navigation({text}) {
    const navigate = useNavigate();
  return (
      
          <div
          onClick={()=> navigate("/")}
          className=' hover:underline  flex cursor-pointer items-center gap-2 text-blue-600  text-lg'>
              <IoIosArrowRoundBack />
              <p className='hover:text-blue-800 transition-colors duration-200'>{text}</p>
          </div>
     
  )
}

export default Navigation