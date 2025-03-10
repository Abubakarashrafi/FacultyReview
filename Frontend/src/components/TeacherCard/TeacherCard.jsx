import React from 'react'
import CardHeader from './CardHeader'
import StarRating from './Stars'
import Pill from "./Pill"
import Button from '../ui/Button'

function TeacherCard({rating,name,totalRatings,courses=[],id}) {

  return (
    <div className='border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105  duration-200 ease-in-out'>
      <CardHeader  name={name} />
      <div className='px-4 py-6 space-y-4 '>
        <div className='flex justify-between'>

        <StarRating  rating={rating} />
        <p className='text-blue-600 text-2xl font-semibold'>{rating?.toFixed(2)}</p>
        </div>
        <p className='text-sm'>{totalRatings } ratings</p>
        
      <div className='flex flex-wrap gap-2 '>
    {courses?.map((data)=>(

      <div key={data}>
  <Pill text={data}/>

</div>
    ))}
       
      </div>

        
      </div>
      <div className='flex justify-between p-4 bg-gray-100'>
     
        <Button onClick={ window.scrollTo(0,0)} href={`/teacher/${id}`}  className='text-sm p-2 rounded-lg font-medium'
        color={"DEFAULT"}
        text={"View Details"}
        />
        
     
        
        <Button
        href={`/add-review?teacherId=${id}`}
        className='bg-blue-600 text-white p-2 rounded-lg px-3 text-sm'
        color={"PRIMARY"}
        text={"Rate Now"}
        />
                  
        
                
      </div>


    </div>
  )
}

export default TeacherCard