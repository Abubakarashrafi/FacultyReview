import React from 'react'

function Input({placeholder,label,onChange,value}) {
  return (
      <div>
        <div className='flex gap-1'>

          <label htmlFor="full_name" className="block mb-2 text-sm  font-medium text-gray-900 ">{label}</label>
          <span className='text-red-600'>*</span>
        </div>
          <input
          value={value}
          onChange={onChange}
          type="text" id="full_name" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  outline-blue-600 placeholder-gray-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
      </div>
  )
}

export default Input