import React from 'react'

function CardData({text,description,index}) {
  return (
      <div className='flex gap-3 items-start'>

          <div className='bg-blue-600/20 w-8 h-8 flex items-center justify-center shrink-0 text-lg rounded-full text-center text-blue-600 font-semibold'>{index}</div>
          <div>

              <h4 className='font-medium'>{text}</h4>
              <p className='text-gray-400 text-sm'>{description}</p>
          </div>
      </div>
  )
}

export default CardData