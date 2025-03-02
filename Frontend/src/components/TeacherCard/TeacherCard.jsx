import React from 'react'
import CardHeader from './CardHeader'
import StarRating from './Stars'
import Pill from "./Pill"
import Button from '../Button'

function TeacherCard({rating,name,totalRatings="coming soon",courses=[]}) {
  return (
    <div className='border   rounded-t-xl'>
      <CardHeader name={name} />
      <div className='px-4 py-6 space-y-4 '>
        <div className='flex justify-between'>

        <StarRating rating={rating} />
        <p className='text-blue-600 text-2xl font-semibold'>{rating}</p>
        </div>
        <p className='text-sm'>{totalRatings } ratings</p>
        
      <div className='flex flex-wrap gap-2 '>
    {courses.map((data)=>(

      <div key={data}>
  <Pill text={data}/>

</div>
    ))}
       
      </div>

        
      </div>
      <div className='flex justify-between p-4 bg-gray-100'>
        <Button className='text-sm p-2 rounded-lg font-medium'
        color={"DEFAULT"}
        text={"View Details"}
        />
                  
        <Button className='bg-blue-600 text-white p-2 rounded-lg px-3 text-sm'
        color={"PRIMARY"}
        text={"Rate Now"}
        />
        
                
      </div>


    </div>
  )
}

export default TeacherCard