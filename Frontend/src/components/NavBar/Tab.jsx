import React from 'react'
import { NavLink } from 'react-router'

function NavTab({text,to,className}) {
  return (
    <NavLink  to={to}>
      {({isActive})=> (

        <button className={`${className} text-sm transition-all duration-300  text-slate-500 hover:text-[#2563EB]  font-medium ${isActive ? "text-[#2563EB] font-bold" : ""}`}>{text}</button>
    
      )}
    </NavLink>
  )
}

export default NavTab