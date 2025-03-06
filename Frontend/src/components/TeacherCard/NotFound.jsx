import React from 'react'
import { CgUserAdd } from "react-icons/cg";
import Button from '../ui/Button';
function NotFound() {
  return (
    <div className=' flex flex-col py-12 text-center justify-center items-center'> 
        <div className='p-4 mb-4 rounded-full  bg-blue-600/10'>
        <CgUserAdd fontSize={"50px"}  className='text-blue-600'/>
        </div>
        <h3 className='text-2xl font-medium mb-2'>No faculty Found</h3>
          <p className='text-lg max-w-lg mb-6 text-slate-500'>We couldn't find any faculty matching your search. If you know this professor, you can add them to our directory.</p>
          <Button href={"/add-faculty"} color={"PRIMARY"} text={"Add New Faculty"} className={"py-3 px-4"}/>
    </div>
  )
}

export default NotFound