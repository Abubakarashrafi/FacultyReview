import React from 'react'
import { Link } from "react-router"

import { IoIosArrowRoundBack } from "react-icons/io";
function Navigation({text,to}) {
  return (
      <Link to={to}>
          <div className=' hover:underline  flex cursor-pointer items-center gap-2 text-blue-600 text-lg'>
              <IoIosArrowRoundBack />
              <p className=''>{text}</p>
          </div>
      </Link>
  )
}

export default Navigation