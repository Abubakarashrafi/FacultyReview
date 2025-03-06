import React from 'react'
import Button from '../ui/Button'

function Hero() {
  return (
    <div className='bg-blue-50 py-20 md:py-24 w-full  '>
      <div className='flex-col flex justify-center items-center text-center py-10 space-y-2 container'>
        <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">Rate Your Professors</h1>
       <p className='md:text-xl max-w-[700px] mx-auto text-slate-500 px-1'>Find, rate, and review professors to help fellow students make informed decisions.</p>
      <div  className='py-2 flex flex-col gap-2  min-[400px]:flex-row'>

      <Button href={"/add-review"} className="p-2.5 px-8" color={"PRIMARY"}  text={"Add Review"}/>
      <Button href={"/add-faculty"} className="p-2.5 px-8" color={"DEFAULT"}  text={"Add Professor"}/>
      </div>
      </div>

    </div>
  )
}

export default Hero