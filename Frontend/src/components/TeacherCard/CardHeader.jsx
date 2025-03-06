import React from 'react'
function CardHeader({name}) {
  return (
      
      <div className=' p-3 px-4 border-b border-gray-200  bg-gradient-to-r from-blue-200 to-purple-600/20 rounded-t-lg    flex gap-4 items-center'>


          <div className='w-12 h-12 shrink-0 bg-gray-200 border-blue-600 border-2 rounded-full'></div>
          <p className='text-xl  font-medium'>{name}</p>

      </div>
     
      )
}

export default CardHeader