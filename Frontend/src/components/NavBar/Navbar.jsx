
import React from 'react'
import NavTab from './Tab'

function Navbar() {
  return (
    <nav className=' bg-white container'>
      <div className='flex  justify-between items-center h-16'>
        <p className='font-semibold text-xl'>Faculty Reviews</p>  
        
          <div className=' hidden md:flex gap-6 items-center justify-center '>

          <NavTab className={""} text={"Home"}/>
          <NavTab className={""} text={"Add Reviews"}/>
          <NavTab className={""} text={"My Reviews"}/>
         
          
          
        </div>   
     
      </div>
    </nav>
  )
}

export default Navbar