
import React from 'react'
import NavTab from './Tab'
import BottomNav from './BottomNav'
import { useNavigate } from 'react-router'

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='fixed  w-full bg-white'>

      <nav className='  container  '>

        <div className='flex   justify-between items-center h-16'>
          <p onClick={()=> navigate("/")} className='font-semibold text-xl cursor-pointer'>Faculty Reviews</p>

          <div className=' hidden sm:flex gap-6 items-center justify-center '>

            <NavTab to={"/"} className={""} text={"Home"} />
            <NavTab to={"/add-review"} className={""} text={"Add Reviews"} />
            <NavTab to={"/My-reviews"} className={""} text={"My Reviews"} />
            <NavTab to={"/about-us"} className={""} text={"About us"} />



          </div>

        </div>
        <div className='sm:hidden z-50 fixed inset-x-0  bottom-0 bg-white '>
          <BottomNav />
        </div>
      </nav>
    </div>
  )
}

export default Navbar