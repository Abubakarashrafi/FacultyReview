import React from 'react'
import { Link } from 'react-router'

function Button({text,href,className,color,onClick,disabled}) {

  const handleClick = (e)=>{
    if(onClick){
      onClick(e);
    }
    window.scrollTo(0,0);
  }
  const BaseColor = `${color==="PRIMARY" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-white "}`
  return (
      <Link to={href}>
      <button 
      disabled={disabled}
      onClick={handleClick}
      aria-disabled={disabled}
      className={`${className} ${BaseColor}  rounded-md  `}>
        <p>

        {text}
        </p>
    </button>
      </Link>
  )
}

export default Button