
import React from 'react'
import NavTab from './Tab'
import BottomNav from './BottomNav'

function Navbar() {
  return (
    <div className='fixed  w-full bg-white'>

    <nav className='  container  '>
      
      <div className='flex   justify-between items-center h-16'>
        <p className='font-semibold text-xl'>Faculty Reviews</p>  
        
          <div className=' hidden sm:flex gap-6 items-center justify-center '>

          <NavTab to={"/"} className={""} text={"Home"}/>
          <NavTab to={"/add-review"} className={""} text={"Add Reviews"}/>
          <NavTab to={"/My-reviews"} className={""} text={"My Reviews"}/>
         
          
          
        </div>   
     
      </div>
        <div className='sm:hidden z-50 fixed inset-x-0  bottom-0 bg-white '>
              <BottomNav/>
        </div>
    </nav>
    </div>
  )
}

export default Navbar