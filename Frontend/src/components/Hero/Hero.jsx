import React from 'react'
import Button from '../Button'

function Hero() {
  return (
    <div className='bg-slate-200 py-12 md:py-16 w-full'>
      <div className='flex-col flex justify-center items-center text-center space-y-2 conatiner'>
        <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">Rate Your Professors</h1>
       <p className='md:text-xl max-w-[700px] mx-auto text-slate-500 px-1'>Find, rate, and review professors to help fellow students make informed decisions.</p>
      <div  className='py-2 flex flex-col gap-2  min-[400px]:flex-row'>

      <Button className="p-2.5 px-8" color={"PRIMARY"}  text={"Add Review"}/>
      <Button className="p-2.5 px-8" color={"DEFAULT"}  text={"Add Professor"}/>
      </div>
      </div>

    </div>
  )
}

export default Hero