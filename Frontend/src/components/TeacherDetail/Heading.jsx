import React from 'react'

function Heading({heading,descriptiom}) {
  return (
    <>
      <p className='font-medium text-2xl pb-1 '>{heading}</p>
       <p className='text-sm text-slate-600'>{descriptiom}</p>
    </>
  )
}

export default Heading