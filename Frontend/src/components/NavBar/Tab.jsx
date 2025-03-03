import { NavLink } from "react-router-dom"

function NavTab({ text, to, className }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm transition-colors ${isActive ? "text-[#2563EB] font-semibold" : "text-slate-500 hover:text-[#2563EB] font-medium"} ${className}`
      }
    >
      {text}
    </NavLink>
  )
}

export default NavTab

