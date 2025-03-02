import React from 'react'

function Button({text,href,className,color}) {
  const BaseColor = `${color==="PRIMARY" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-white "}`
  return (
      <button className={`${className} ${BaseColor}  rounded-md  `}>
        <p>

        {text}
        </p>
    </button>
  )
}

export default Button