import React from 'react'
import Hero from '../components/Hero/Hero'
import Searching from '../components/ui/Searching'
import Loader from "../components/ui/Loader"
import TeacherCard from '../components/TeacherCard/TeacherCard'
import Button from '../components/ui/Button'
import CardData from '../components/ui/CardData'
import { useTeachers } from '../context/TeachersContext'
import NotFound from '../components/TeacherCard/NotFound'

function Home() {
  const {teachers,loading,error} = useTeachers();
 
  return (
    <div className=''>
      <div>
        <Hero />
      </div>

      <div className='bg-white py-10 container border-2'>
        


        <div className='md:flex   justify-between items-center bg-white/10  rounded-lg  '>

    

      <h2 className='font-semibold text-2xl text-gray-800'>Faculty Directory</h2>
      <div className=' sm:flex   gap-4 my-4 md:my-0 '>
        <div className=''>

        <Searching/>
        
        
    </div>
       
        
        </div>
        </div>
        <div className='py-10'>
         {loading ? (
          <Loader/>
         )
         : 
         
         teachers?.length >0 ? (
           
        <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {teachers.map((data)=>(
          <div key={data?.id}
          className=''
          >
              <TeacherCard id={data?.id} name={data?.name} totalRatings={data?.reviewCount} rating={data?.avgRating} courses={data?.courses.slice(0,2)}  />
            </div>
          ))}
          </div>
        ) : (
          
          <div>
          <NotFound/>
          </div>
        )}
    
  
      </div>
        </div>

      <div className='bg-blue-50'>
      <div className='  grid gap-6 lg:grid-cols-2 lg:gap-12 items-center lg:py-12 container'>
      <div  className='pt-32 mb-4 w-full'>
      <h2 className='text-3xl md:text-4xl font-semibold'>
            Rate Your Professors Today
      </h2>
          <p className='my-4 md:text-lg  text-slate-600'>Your star ratings help future students choose the right professors. It only takes a minute to make a difference.</p>
         
    

          <Button 
          href={"/add-review"}
           color={"PRIMARY"}
           text={"Start Rating"} className={"p-3 px-6"}/>
        
         
      </div>
      <div className='bg-white rounded-lg p-6 max-w-md w-full mx-auto'>
        <div className='  '>
    <p className='text-xl font-semibold mb-4'>
    How it works
    </p>
    <div className='space-y-4'>

            <CardData text={"Search for a Professor"} index={1} description={"Use the search bar to find the professor you want to rate."}/>
            <CardData text={"Rate with Stars"} index={2} description={"Give a star rating from 1-5 based on your experience with the professor."}/>
            <CardData text={"Submit Your Review"} index={3} description={"Add any additional comments and submit your review to help other students."}/>
        </div>
    </div>
      </div>
      </div>
    </div>
    </div>
  )
}

           
export default Home