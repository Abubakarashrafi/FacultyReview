import React from 'react'

function NavTab({text,href,className}) {
  return (

      <button className={`${className} text-sm transition-colors text-slate-500 hover:text-[#2563EB]  font-medium`}>{text}</button>
    
  )
}

export default NavTab