import React from 'react'
import { Link } from 'react-router'

function Button({text,href,className,color,onClick,disabled}) {

  const handleClick = (e)=>{
    if(onClick){
      onClick(e);
      window.scrollTo(0,0);
    }
  }
  const BaseColor = `${color==="PRIMARY" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-white "}`
  return disabled ? (
    <div className={`${className} ${BaseColor} opacity-50 cursor-not-allowed`}>
      <button disabled aria-disabled className="w-full">
        {text}
      </button>
    </div>
  ) : (
    <Link to={href}>
      <button onClick={handleClick} className={`${className} ${BaseColor} rounded-md`}>
        {text}
      </button>
    </Link>
  );

}

export default Button